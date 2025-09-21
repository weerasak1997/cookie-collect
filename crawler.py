from seleniumwire import webdriver
from selenium.webdriver.common.by import By
from urllib.parse import urlparse
import time
import random
import mysql.connector
import json
from datetime import datetime, timezone
from selenium.common.exceptions import WebDriverException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# -----------------------
# Database setup
# -----------------------
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="cookies_db"
)
cursor = db.cursor()

cursor.execute("DROP TABLE IF EXISTS cookies")
cursor.execute("""
CREATE TABLE IF NOT EXISTS cookies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    website VARCHAR(255),
    name VARCHAR(255),
    value TEXT,
    domain VARCHAR(255),
    path VARCHAR(255),
    expires VARCHAR(50),
    httponly VARCHAR(3),
    action_type VARCHAR(20),
    collected_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
""")

# -----------------------
# Selenium Wire setup
# -----------------------
options = {'disable_encoding': True}
chrome_options = webdriver.ChromeOptions()
# chrome_options.add_argument("--headless=new")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--window-size=1920,1080")

# Load your custom profile
# Parent folder of all Chrome profiles
chrome_options.add_argument(
    "user-data-dir=/Users/weerasakchiangsoi/Library/Application Support/Google/Chrome/SeleniumProfile"
)
# Specify which profile to use (Default, Profile 1, Profile 2, etc.)

chrome_options.add_argument("--lang=en-GB")
extension_path = './Consent-O-Matic/1.1.3_0'
chrome_options.add_argument(f'--load-extension={extension_path}')
driver = webdriver.Chrome(options=chrome_options, seleniumwire_options=options)
# -----------------------
# JS hook for document.cookie
# -----------------------

driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": """
        (function() {
            // -------------------------
            // Hook document.cookie
            // -------------------------
            const originalSetCookie = document.__lookupSetter__('cookie');
            if (!window.jsCookies) window.jsCookies = {};

            Object.defineProperty(document, "cookie", {
                set: function(value) {
                    try {
                        const parts = value.split(";").map(p => p.trim());
                        const [name, val] = parts[0].split("=");
                        const now = new Date();
                        const setTime = now.toISOString();
                        let expireSeconds = "never";

                        parts.slice(1).forEach(p => {
                            if (p.toLowerCase().startsWith("expires=")) {
                                const expDate = new Date(p.slice(8));
                                expireSeconds = Math.floor((expDate - now)/1000);
                            } else if (p.toLowerCase().startsWith("max-age=")) {
                                const seconds = parseInt(p.slice(8));
                                if (!isNaN(seconds)) expireSeconds = seconds;
                            }
                        });

                        // Determine action
                        let action;
                        if (!window.jsCookies.hasOwnProperty(name)) {
                            action = "add";       
                        } else if (val === "" || expireSeconds === 0) {
                            action = "delete";    
                        } else {
                            action = "edit"; 
                        }

                        // Update jsCookies
                        window.jsCookies[name] = {
                            name: name,
                            value: val || "",
                            set_time: setTime,
                            expires: (val === "" || expireSeconds === 0) ? 0 : expireSeconds,
                            action: action,
                            from: "Document"
                        };
                    } catch(e) {
                        console.log("Cookie hook error", e);
                    }
                    if(originalSetCookie) originalSetCookie.call(document, value);
                },
                get: function() { return document.cookie; }
            });

        })();
    """
})
# -----------------------
# Save cookies to DB (deduplicate by DB)
# -----------------------
def save_cookies(site, cookies):
    for c in cookies:
        domain = c.get('domain', '').lstrip('.').replace("www.", "") 
        path = c.get('path', '/')
        expires = c.get('expires')
        httponly = c.get('httponly', 'No')

        cursor.execute("""
            SELECT *
            FROM cookies
            WHERE name=%s
            AND domain=%s
            AND path=%s
            AND website=%s
            AND value=%s
            AND expires=%s
            AND httponly=%s
            AND action_type=%s
            ORDER BY last_seen DESC LIMIT 1
        """, (
            c['name'],
            domain,
            path,
            site,
            c['value'],
            c.get('expires'),
            c.get('httponly', 'No'),
            c.get('action_type', 'unknown')
        ))
        row = cursor.fetchone()

        # If row exists, it’s identical, skip insert
        if row:
            continue
        try:
            collected_at = datetime.fromisoformat(c['collected_at'].replace("Z", "+00:00"))
        except Exception:
            collected_at = c['collected_at']
        cursor.execute("""
            INSERT INTO cookies (website, name, value, domain, path, expires, httponly, action_type, collected_at)
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """, (
            site,
            c['name'],
            c['value'],
            domain,
            path,
            expires,
            httponly,
            c.get('action_type', 'unknown'),
            collected_at
        ))

    db.commit()

def track_cookies(driver, interval=1, stable_seconds=3, timeout=30):
    driver.execute_script("""
        if (!window.jsCookies) window.jsCookies = {};
        if (!window.lastSnapshot) window.lastSnapshot = {};

        window.getCookieDiff = async function() {
            let result = [];
            try {
                const cookies = window.cookieStore ? await window.cookieStore.getAll() : [];
                const now = new Date().toISOString();
                let current = {};
                cookies.forEach(c => { if(c && c.name) current[c.name] = c; });

                // Detect add/edit
                for (const [name, c] of Object.entries(current)) {
                    if(!c) continue;
                    let action = "add";
                    if(window.lastSnapshot[name]) {
                        let old = window.lastSnapshot[name];
                        if(old && (old.value !== c.value || old.expires !== c.expires)) action = "edit";
                        else continue;
                    }
                    window.jsCookies[name] = {
                        name: name,
                        value: c.value || "",
                        domain: c.domain || window.location.hostname,  // <- added domain
                        path: c.path || "/",
                        set_time: now,
                        expires: c.expires ? Math.floor((new Date(c.expires) - new Date())/1000) : "never",
                        action: action,
                        from: "cookieStore"
                    };
                    result.push(window.jsCookies[name]);
                }

                // Detect delete
                for (const [name, old] of Object.entries(window.lastSnapshot)) {
                    if(!current[name]) {
                        window.jsCookies[name] = {
                            name: name,
                            value: "",
                            domain: old.domain || window.location.hostname,  // <- added domain
                            path: old.path || "/",
                            set_time: now,
                            expires: 0,
                            action: "delete",
                            from: "cookieStore"
                        };
                        result.push(window.jsCookies[name]);
                    }
                }

                window.lastSnapshot = current;
            } catch(e) { result.push({error: e.toString()}); }
            return result;
        };
    """)

    start_time = time.time()
    last_change_time = time.time()
    final_changes = []

    while True:
        if time.time() - start_time > timeout: break

        changes = driver.execute_async_script("""
            const done = arguments[0];
            window.getCookieDiff().then(done).catch(e => done([{error: e.toString()}]));
        """)

        if changes and isinstance(changes, list) and len(changes) > 0:
            for c in changes:
                if c and isinstance(c, dict): final_changes.append(c)
            last_change_time = time.time()

        if time.time() - last_change_time >= stable_seconds: break

        time.sleep(interval)

    return final_changes
# -----------------------
# Main loop
# -----------------------
# "https://www.fandom.com/",
websites = ["https://www.fandom.com/"]

for site in websites:
    print(f"🌍 Loading site: {site}")
    base_domain = urlparse(site).netloc
    driver.execute_script("window.jsCookies = {};") 
    driver.get(site)
    time.sleep(3)
    max_pages = 6 
    scroll_pause_time = 1
    pages_visited = 0
    # -----------------------
    # Collect cookies in memory
    # -----------------------
    all_cookies = []
    setup_time = datetime.now(timezone.utc)
    supports_cookie_store = driver.execute_script("return 'cookieStore' in window;")
    if supports_cookie_store:
        print("✅ cookieStore API is available")
        cookies = track_cookies(driver)
        # for c in cookies:
        #     domain = c.get('domain') or base_domain
        #     expires = c.get('expires') or "never"
        #     all_cookies.append({
        #         "name": c['name'],
        #         "value": c['value'],
        #         "domain": domain,
        #         "path": "/",
        #         "expires": expires,
        #         "httponly": "No",
        #         "action_type": "js-set:"+c['action'],
        #         "collected_at": c['set_time']
        #     })
        # You can now run cookieStore related code
    else:
        print("⚠ cookieStore API is NOT available")
    
    try:
        js_cookies = driver.execute_script("return Object.values(window.jsCookies || {})")
        for c in js_cookies:
            domain = c.get('domain') or base_domain
            expires = c.get('expires') or "never"
            all_cookies.append({
                "name": c['name'],
                "value": c['value'],
                "domain": domain,
                "path": "/",
                "expires": expires,
                "httponly": "No",
                "action_type": "js-set:"+c['action'],
                "collected_at": c['set_time']
            })
    except Exception as e:
        print("Error fetching JS cookies:", e)
    while pages_visited < max_pages:
        # --- Scroll to load content ---
        last_height = driver.execute_script("return document.body.scrollHeight")
        while True:
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(scroll_pause_time)
            new_height = driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height
        
        # --- Randomly go to an internal link ---
        try:
            if pages_visited+1 < max_pages :
                links = driver.find_elements(By.TAG_NAME, "a")
                internal_links = []
                for l in links:
                    href = l.get_attribute("href")
                    if href:
                        parsed_href = urlparse(href)
                        # เช็กเฉพาะลิงก์ที่ domain ตรงกับ base_domain
                        if parsed_href.netloc == base_domain:
                            internal_links.append(href)

                if internal_links:
                    link_to_go = random.choice(internal_links)
                    driver.get(link_to_go)
                    WebDriverWait(driver, 10).until(
                        EC.presence_of_element_located((By.TAG_NAME, "body"))
                    )
                    pages_visited += 1
                    time.sleep(scroll_pause_time + random.random()*2)
                    supports_cookie_store = driver.execute_script("return 'cookieStore' in window;")
                    if supports_cookie_store:
                        print("✅ cookieStore API is available")
                        # Usage
                        cookies = track_cookies(driver)
                    else:
                        print("⚠ cookieStore API is NOT available")
                    # 2. JS-set cookies
                    try:
                        js_cookies = driver.execute_script("return Object.values(window.jsCookies || {})")
                        for c in js_cookies:
                            domain = c.get('domain') or base_domain
                            expires = c.get('expires') or "never"
                            all_cookies.append({
                                "name": c['name'],
                                "value": c['value'],
                                "domain": domain,
                                "path": "/",
                                "expires": expires,
                                "httponly": "No",
                                "action_type": "js-set:"+c['action'],
                                "collected_at": c['set_time']
                            })
                    except Exception as e:
                        print("Error fetching JS cookies:", e)
                else:
                    break  # no internal links found
            else:
                pages_visited += 1
        except WebDriverException as e:
            print("WebDriverException occurred:", e)
    # # 1. Selenium cookies
    # for c in driver.get_cookies():
    #     expiry_ts = c.get('expiry')
    #     if expiry_ts:
    #         expiry_dt = datetime.fromtimestamp(expiry_ts, tz=timezone.utc)
    #         expire_seconds = int((expiry_dt - setup_time).total_seconds())
    #         if expire_seconds < 0:
    #             expire_seconds = 0
    #     else:
    #         expire_seconds = "never"
    #     all_cookies.append({
    #         "name": c['name'],
    #         "value": c['value'],
    #         "domain": c.get('domain', base_domain),
    #         "path": c.get('path', '/'),
    #         "expires": expire_seconds,
    #         "httponly": "Yes" if c.get('httpOnly') else "No",
    #         "action_type": "selenium",
    #         "collected_at": setup_time
    #     })
    
    # 3. Network cookies
    for request in driver.requests:
        if request.response and 'Set-Cookie' in request.response.headers:
            # เวลาที่ server ระบุ (Date header)
            request_time = request.date
            server_time = request.response.headers.get('Date')
            if server_time:
                from email.utils import parsedate_to_datetime
                try:
                    server_time_dt = parsedate_to_datetime(server_time)
                except:
                    server_time_dt = request_time  # fallback
            else:
                server_time_dt = request_time
            cookie_headers = request.response.headers.get_all('Set-Cookie') if hasattr(request.response.headers, 'get_all') else [request.response.headers['Set-Cookie']]
            for cookie_str in cookie_headers:
                parts = cookie_str.split(';')
                name_value = parts[0].split('=')
                name = name_value[0]
                value = name_value[1] if len(name_value) > 1 else ""
                domain = base_domain
                path = "/"
                httponly = "Yes" if "HttpOnly" in cookie_str else "No"
                expires = "never"
                for p in parts[1:]:
                    p = p.strip()
                    if p.lower().startswith("domain="):
                        domain = p[7:]
                    elif p.lower().startswith("path="):
                        path = p[5:]
                    elif p.lower().startswith("expires="):
                        expires = p[8:]

                # คำนวณ expire เป็นวินาที
                if expires and expires != "never":
                    from email.utils import parsedate_to_datetime
                    try:
                        expires_dt = parsedate_to_datetime(expires)
                        expire_seconds = int((expires_dt - server_time_dt).total_seconds())
                        if expire_seconds < 0:
                            expire_seconds = 0
                    except Exception:
                        expire_seconds = "never"
                else:
                    expire_seconds = "never"
                all_cookies.append({
                    "name": name,
                    "value": value,
                    "domain": domain,
                    "path": path,
                    "expires": expire_seconds,
                    "httponly": httponly,
                    "action_type": "network",
                    "collected_at": server_time_dt
                })

    # -----------------------
    # Save cookies
    # -----------------------
    save_cookies(site, all_cookies)
    driver.requests.clear()

driver.quit()
db.close()
print("✅ Done! All cookies saved without duplicates.")
