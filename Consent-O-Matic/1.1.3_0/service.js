(() => {
  "use strict";
  chrome.storage.sync.set(
    {
      consentValues: { A: true, B: true, D: true, E: true, F: true, X: true },
    },
    () => console.log("Consent values set at startup")
  );
  class e {
    static getStatistics() {
      return new Promise((e, t) => {
        chrome.storage.local.get(
          { statistics: { clicks: 0, cmps: {} } },
          (t) => {
            e(t.statistics);
          }
        );
      });
    }
    static setStatistics(e) {
      return new Promise((t, s) => {
        chrome.storage.local.set({ statistics: e }, () => {
          t();
        });
      });
    }
    static getConsentValues() {
      return new Promise((t, s) => {
        chrome.storage.sync.get({ consentValues: e.defaultValues }, (s) => {
          t(Object.assign({}, e.defaultValues, s.consentValues));
        });
      });
    }
    static getDebugValues() {
      return new Promise((t, s) => {
        chrome.storage.sync.get({ debugFlags: {} }, (s) => {
          t(Object.assign({}, e.defaultDebugFlags, s.debugFlags));
        });
      });
    }
    static getGeneralSettings() {
      return new Promise((t, s) => {
        chrome.storage.sync.get({ generalSettings: {} }, (s) => {
          t(Object.assign({}, e.defaultSettings, s.generalSettings));
        });
      });
    }
    static getCustomRuleLists() {
      return new Promise((e, t) => {
        chrome.storage.local.get({ customRuleLists: {} }, (t) => {
          e(t.customRuleLists);
        });
      });
    }
    static setCustomRuleLists(e) {
      return new Promise((t, s) => {
        chrome.storage.local.set({ customRuleLists: e }, () => {
          t();
        });
      });
    }
    static getRuleLists() {
      return new Promise((t, s) => {
        chrome.storage.sync.get({ ruleLists: e.defaultRuleLists }, (e) => {
          t(e.ruleLists);
        });
      });
    }
    static setRuleLists(e) {
      return new Promise((t, s) => {
        chrome.storage.sync.set({ ruleLists: e }, () => {
          t();
        });
      });
    }
    static removeRuleList(t) {
      return new Promise((s, a) => {
        e.getRuleLists().then((a) => {
          e.setRuleLists(a.filter((e) => e !== t)).then(() => {
            s();
          });
        });
      });
    }
    static addRuleList(t) {
      return new Promise((s, a) => {
        e.getRuleLists().then((a) => {
          a.push(t),
            e.setRuleLists(a).then(() => {
              s();
            });
        });
      });
    }
    static isActive(e) {
      return new Promise((t, s) => {
        chrome.storage.sync.get(
          { disabledPages: {} },
          ({ disabledPages: s }) => {
            t(null == s[e]);
          }
        );
      });
    }
    static setPageActive(e, t) {
      return new Promise((s, a) => {
        chrome.storage.sync.get(
          { disabledPages: {} },
          ({ disabledPages: a }) => {
            t ? delete a[e] : (a[e] = !0),
              chrome.storage.sync.set({ disabledPages: a }, () => {
                s();
              });
          }
        );
      });
    }
    static async getDebugFlags() {
      let t = await e.getDebugValues();
      return [
        {
          name: "clickDelay",
          description: "[[CLICK_DELAY_DESCRIPTION]]",
          value: t.clickDelay,
        },
        {
          name: "skipSubmit",
          description: "[[SKIP_SUBMIT_DESCRIPTION]]",
          value: t.skipSubmit,
        },
        {
          name: "paintMatchers",
          description: "[[PAINT_MATCHERS_DESCRIPTION]]",
          value: t.paintMatchers,
        },
        {
          name: "debugClicks",
          description: "[[DEBUG_CLICKS_DESCRIPTION]]",
          value: t.debugClicks,
        },
        {
          name: "alwaysForceRulesUpdate",
          description: "[[ALWAYS_FORCE_UPDATE_DESCRIPTION]]",
          value: t.alwaysForceRulesUpdate,
        },
        {
          name: "skipHideMethod",
          description: "[[SKIP_HIDE_DESCRIPTION]]",
          value: t.skipHideMethod,
        },
        {
          name: "debugLog",
          description: "[[EXTRA_DEBUG_DESCRIPTION]]",
          value: t.debugLog,
        },
        {
          name: "debugRules",
          description: "[[RULES_DEBUG_DESCRIPTION]]",
          value: t.debugRules,
        },
        {
          name: "debugTranslations",
          description: "[[DEBUG_TRANSLATION_DESCRIPTION]]",
          value: t.debugTranslations,
        },
        {
          name: "skipSubmitConfirmation",
          description: "[[SKIP_SUBMIT_CONFIRMATION]]",
          value: t.skipSubmitConfirmation,
        },
        {
          name: "dontHideProgressDialog",
          description: "Dont hide ConsentOMatic progress dialog",
          value: t.dontHideProgressDialog,
        },
        {
          name: "skipOpenMethod",
          description: "Executing the program except for the open method",
          value: t.skipOpenMethod,
        },
        {
          name: "autoOpenOptionsTab",
          description:
            "Automatically open the options tab next time the extension loads",
          value: t.autoOpenOptionsTab,
        },
      ];
    }
    static async getConsentTypes() {
      let t = await e.getConsentValues();
      return [
        {
          name: "PREFERENCES_NAME",
          description: "PREFERENCES_DESCRIPTION",
          type: "A",
          value: t.A,
        },
        {
          name: "PERFORMANCE_NAME",
          description: "PERFORMANCE_DESCRIPTION",
          type: "B",
          value: t.B,
        },
        {
          name: "INFORMATION_NAME",
          description: "INFORMATION_DESCRIPTION",
          type: "D",
          value: t.D,
        },
        {
          name: "CONTENT_NAME",
          description: "CONTENT_DESCRIPTION",
          type: "E",
          value: t.E,
        },
        {
          name: "AD_NAME",
          description: "AD_DESCRIPTION",
          type: "F",
          value: t.F,
        },
        {
          name: "OTHER_NAME",
          description: "OTHER_DESCRIPTION",
          type: "X",
          value: t.X,
        },
      ];
    }
    static setConsentValues(t) {
      return new Promise((s, a) => {
        (t = Object.assign({}, e.defaultValues, t)),
          chrome.storage.sync.set({ consentValues: t }, () => {
            s();
          });
      });
    }
    static setDebugValues(e) {
      return new Promise((t, s) => {
        chrome.storage.sync.set({ debugFlags: e }, () => {
          t();
        });
      });
    }
    static setGeneralSettings(e) {
      return new Promise((t, s) => {
        chrome.storage.sync.set({ generalSettings: e }, () => {
          t();
        });
      });
    }
    static clearRuleCache() {
      return new Promise((e, t) => {
        chrome.storage.local.set({ cachedEntries: {} }, () => {
          e();
        });
      });
    }
  }
  (e.defaultValues = { A: 1, B: 1, D: 1, E: 1, F: 1, X: 1 }),
    (e.defaultSettings = { hideInsteadOfPIP: !1 }),
    (e.defaultDebugFlags = {
      clickDelay: !1,
      skipSubmit: !1,
      paintMatchers: !1,
      debugClicks: !1,
      alwaysForceRulesUpdate: !1,
      skipHideMethod: !1,
      debugLog: !1,
      debugRules: !1,
      debugTranslations: !1,
      skipSubmitConfirmation: !1,
      dontHideProgressDialog: !1,
      skipOpenMethod: !1,
      autoOpenOptionsTab: !0,
    }),
    (e.defaultRuleLists = [
      "https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/master/rules-list.json",
    ]);
  function t(e, t) {
    chrome.browserAction &&
      (chrome.browserAction.setBadgeText({ text: e, tabId: t }),
      chrome.browserAction.setBadgeBackgroundColor({
        color: "white",
        tabId: t,
      }));
  }

  chrome.runtime.onMessage.addListener(function (i, n, r) {
    console.log("Got msg", i);
    try {
      switch (i.split("|")[0]) {
        case "GetTabUrl":
          return r(n.tab.url), !1;
        case "GetRuleList":
          return (
            e.getDebugValues().then((t) => {
              (function (t) {
                let s = 79200 + 26 * Math.random() * 3600;
                return new Promise((i, n) => {
                  e.getRuleLists().then((n) => {
                    let r = n.indexOf(
                      "https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/master/Rules.json"
                    );
                    -1 !== r &&
                      (console.log(
                        "Cleaning old rule list, and replacing with new reference based list..."
                      ),
                      (n[r] =
                        "https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/master/rules-list.json"),
                      e.setRuleLists(n)),
                      chrome.storage.local.get(
                        { cachedEntries: {} },
                        async function ({ cachedEntries: e }) {
                          let r = [];
                          for (let i of n) {
                            let n = e[i];
                            if (
                              !t &&
                              null != n &&
                              "timestamp" in n &&
                              Date.now() / 1e3 - n.timestamp < s &&
                              "rules" in n
                            )
                              r.push(n.rules);
                            else {
                              let t = await a(i);
                              null != t
                                ? (r.push(t),
                                  (e[i] = {
                                    timestamp: Date.now() / 1e3,
                                    rules: t,
                                  }))
                                : (console.log(
                                    "Failed to fetch CoM rule list, check the URL",
                                    i
                                  ),
                                  null != n
                                    ? r.push(n.rules)
                                    : console.log(
                                        "Giving up entirely on rule list, no cache available either",
                                        i
                                      ));
                            }
                          }
                          chrome.storage.local.set({ cachedEntries: e }, () => {
                            i(r);
                          });
                        }
                      );
                  });
                });
              })(t.alwaysForceRulesUpdate).then((e) => {
                r(e);
              });
            }),
            !0
          );
        case "GetCustomRuleList":
          return (
            e.getCustomRuleLists().then((e) => {
              r(e);
            }),
            !0
          );
        case "AddCustomRule": {
          let t = JSON.parse(i.substring(i.indexOf("|") + 1));
          return (
            e.getCustomRuleLists().then((s) => {
              let a = Object.assign({}, s, t);
              e.setCustomRuleLists(a);
            }),
            !1
          );
        }
        case "DeleteCustomRule": {
          let t = i.split("|")[1];
          return (
            e.getCustomRuleLists().then((s) => {
              delete s[t],
                e.setCustomRuleLists(s).then(() => {
                  r();
                });
            }),
            !0
          );
        }
        case "CMPError":
          return (
            4 !== s.get(n.tab.id) && (t("✗", n.tab.id), s.set(n.tab.id, 3)),
            r(),
            !1
          );
        case "NothingFound":
          return (
            4 !== s.get(n.tab.id) && (t("", n.tab.id), s.set(n.tab.id, 1)),
            r(),
            !1
          );
        case "Searching":
          return (
            4 !== s.get(n.tab.id) && (t("🔎", n.tab.id), s.set(n.tab.id, 2)),
            r(),
            !1
          );
        case "HandledCMP": {
          let a = JSON.parse(i.split("|")[1]);
          return (
            t("✔", n.tab.id),
            s.set(n.tab.id, 4),
            e.getStatistics().then((t) => {
              (t.clicks += a.clicks),
                t.cmps.hasOwnProperty(a.cmp) ||
                  (t.cmps[a.cmp] = { filledForms: 0, clicks: 0 }),
                t.cmps[a.cmp].filledForms++,
                (t.cmps[a.cmp].clicks += a.clicks),
                e.setStatistics(t);
            }),
            r(),
            !1
          );
        }
        default:
          console.warn("Unhandled message:", i);
      }
    } catch (e) {
      console.log(e);
    }
  });
  let s = new Map();
  async function a(e) {
    try {
      let t = await fetch(e, { cache: "no-store" }),
        s = await t.json(),
        i = Object.assign({}, s);
      if ((delete i.references, null != s.references)) {
        let e = [];
        for (let t of s.references) e.push(a(t));
        (await Promise.all(e)).forEach((e) => {
          Object.assign(i, e);
        });
      }
      return i;
    } catch (t) {
      console.warn("Error fetching rulelist: ", e, t.message);
    }
    return null;
  }
  chrome.tabs.onUpdated.addListener((e, a, i) => {
    null != a.status && "Loading" === a.status && (t("", e), s.set(e, 0));
  }),
    e.getDebugValues().then((t) => {
      t.autoOpenOptionsTab &&
        ((t.autoOpenOptionsTab = !1),
        e.setDebugValues(t),
        chrome.tabs.create(
          { url: chrome.runtime.getURL("options.html") },
          function (e) {
            console.log("Launched initial onboarding page");
          }
        ));
    });
})();
