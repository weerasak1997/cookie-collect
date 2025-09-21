(() => {
  "use strict";
  var e = {
      15: () => {
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
              chrome.storage.sync.get(
                { consentValues: e.defaultValues },
                (s) => {
                  t(Object.assign({}, e.defaultValues, s.consentValues));
                }
              );
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
              chrome.storage.sync.get(
                { ruleLists: e.defaultRuleLists },
                (e) => {
                  t(e.ruleLists);
                }
              );
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
            return new Promise((s, o) => {
              e.getRuleLists().then((o) => {
                e.setRuleLists(o.filter((e) => e !== t)).then(() => {
                  s();
                });
              });
            });
          }
          static addRuleList(t) {
            return new Promise((s, o) => {
              e.getRuleLists().then((o) => {
                o.push(t),
                  e.setRuleLists(o).then(() => {
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
            return new Promise((s, o) => {
              chrome.storage.sync.get(
                { disabledPages: {} },
                ({ disabledPages: o }) => {
                  t ? delete o[e] : (o[e] = !0),
                    chrome.storage.sync.set({ disabledPages: o }, () => {
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
            return new Promise((s, o) => {
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
        (e.defaultValues = { A: !1, B: !1, D: !1, E: !1, F: !1, X: !1 }),
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
        class t {
          static setBase(e) {
            t.base = e;
          }
          static getBase() {
            return t.base;
          }
          static findElement(e, s = null, o = !1) {
            let n = null;
            if (":scope" === e.selector.trim())
              (n = null != s ? [s] : null != t.base ? [t.base] : [document]),
                O.debugValues.debugRules &&
                  console.log(
                    "Special :scope handling, selecting current root:",
                    n
                  );
            else {
              let o = document;
              null != s ? (o = s) : null != t.base && (o = t.base),
                o.shadowRoot
                  ? (o = o.shadowRoot)
                  : o.openOrClosedShadowRoot
                  ? (o = o.openOrClosedShadowRoot)
                  : o instanceof HTMLElement &&
                    chrome &&
                    chrome.dom &&
                    chrome.dom.openOrClosedShadowRoot(o) &&
                    (o = chrome.dom.openOrClosedShadowRoot(o)),
                (n = Array.from(o.querySelectorAll(e.selector)));
            }
            const i = n.slice();
            if (null != e.textFilter) {
              let t = /\s{2,}/gm;
              n = n.filter((s) => {
                let o = s.textContent.toLowerCase().replace(t, " ");
                if (Array.isArray(e.textFilter)) {
                  let s = !1;
                  for (let n of e.textFilter)
                    if (-1 !== o.indexOf(n.toLowerCase().replace(t, " "))) {
                      s = !0;
                      break;
                    }
                  return s;
                }
                if (null != e.textFilter)
                  return -1 !== o.indexOf(e.textFilter.toLowerCase());
              });
            }
            return (
              null != e.styleFilters &&
                (n = n.filter((t) => {
                  let s = window.getComputedStyle(t),
                    o = !0;
                  for (let t of e.styleFilters) {
                    let e = s[t.option];
                    o = t.negated ? o && e !== t.value : o && e === t.value;
                  }
                  return o;
                })),
              null != e.displayFilter &&
                (n = n.filter((t) =>
                  t.matches(".ConsentOMatic-CMP-NoDetect")
                    ? !e.displayFilter
                    : e.displayFilter
                    ? 0 !== t.offsetHeight
                    : 0 === t.offsetHeight
                )),
              null != e.iframeFilter &&
                (n = n.filter((t) =>
                  e.iframeFilter
                    ? window.location !== window.parent.location
                    : window.location === window.parent.location
                )),
              null != e.childFilter &&
                (n = n.filter((s) => {
                  let o = t.base;
                  t.setBase(s);
                  let n = t.find(e.childFilter);
                  return (
                    t.setBase(o),
                    e.childFilterNegated ? null == n.target : null != n.target
                  );
                })),
              O.debugValues.debugRules &&
                (console.groupCollapsed("findElement:", e.selector, n.length),
                console.log("Options:", e, "Parent:", s),
                console.log("Possible targets before filter: ", i),
                console.log("Possible targets after filter: ", n),
                console.log("Returned result:", o ? n : n[0]),
                console.groupEnd()),
              o
                ? n
                : (n.length > 1 &&
                    O.debugValues.debugLog &&
                    console.warn("Multiple possible targets: ", n, e, s),
                  n[0])
            );
          }
          static find(e, s = !1) {
            let o = [];
            if (null != e.parent) {
              let n = t.findElement(e.parent, null, s);
              if (null != n) {
                if (n instanceof Array)
                  return (
                    n.forEach((n) => {
                      let i = t.findElement(e.target, n, s);
                      i instanceof Array
                        ? i.forEach((e) => {
                            o.push({ parent: n, target: e });
                          })
                        : o.push({ parent: n, target: i });
                    }),
                    o
                  );
                {
                  let i = t.findElement(e.target, n, s);
                  i instanceof Array
                    ? i.forEach((e) => {
                        o.push({ parent: n, target: e });
                      })
                    : o.push({ parent: n, target: i });
                }
              }
            } else {
              let n = t.findElement(e.target, null, s);
              n instanceof Array
                ? n.forEach((e) => {
                    o.push({ parent: null, target: e });
                  })
                : o.push({ parent: null, target: n });
            }
            return (
              0 === o.length && o.push({ parent: null, target: null }),
              s
                ? o
                : (1 !== o.length &&
                    console.warn(
                      "Multiple results found, even though multiple false",
                      o
                    ),
                  o[0])
            );
          }
        }
        t.base = null;
        class s {
          static createMatcher(e) {
            switch (e.type) {
              case "css":
                return new n(e);
              case "checkbox":
                return new i(e);
              case "url":
                return new r(e);
              case "onoff":
                return new o(e);
              default:
                throw new Error("Unknown matcher type: " + e.type);
            }
          }
          constructor(e) {
            this.config = e;
          }
          matches() {
            console.log("Remember to override matches()");
          }
          async debug(e) {
            let s = t.find(this.config),
              o = s.parent || s.target;
            if (null != o) {
              o.matches("input") && (o = o.parentNode);
              let t = e === this.matches();
              O.debugValues.clickDelay &&
                o.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                }),
                t
                  ? ((o.style.border = "2px solid lime"),
                    (o.style.backgroundColor = "lime"))
                  : ((o.style.border = "2px solid pink"),
                    (o.style.backgroundColor = "pink")),
                await new Promise((e, t) => {
                  O.debugValues.clickDelay
                    ? setTimeout(() => {
                        e();
                      }, 10)
                    : e();
                });
            }
          }
        }
        class o extends s {
          constructor(e) {
            super(e);
          }
          matches() {
            if (null == this.config.onMatcher || null == this.config.offMatcher)
              throw new Error(
                "Missing onMatcher/offMatcher on OnOffMatcher: " +
                  JSON.stringify(this.config)
              );
            let e = t.find(this.config.onMatcher),
              s = t.find(this.config.offMatcher);
            if (null == e.target && null == s.target)
              throw new Error(
                "Did not find neither on or off targets: " +
                  JSON.stringify(this.config)
              );
            if (null != e.target && null != s.target)
              throw new Error(
                "Found both on and off targets: " + JSON.stringify(this.config)
              );
            return null != e.target;
          }
          async debug(e) {
            let s = t.find(this.config.onMatcher),
              o = t.find(this.config.offMatcher),
              n = [];
            if (null != s.target || null != o.target) {
              null != s.target && null != o.target
                ? (n.push({ target: s.target, currect: !1 }),
                  n.push({ target: o.target, currect: !1 }))
                : e
                ? null != s.target
                  ? n.push({ target: s.target, correct: !0 })
                  : n.push({ target: o.target, correct: !1 })
                : null != s.target
                ? n.push({ target: s.target, correct: !1 })
                : n.push({ target: o.target, correct: !0 });
              for (let e of n)
                e.correct
                  ? (e.target.style.setProperty(
                      "border",
                      "2px solid lime",
                      "important"
                    ),
                    e.target.style.setProperty(
                      "background-color",
                      "lime",
                      "important"
                    ))
                  : (e.target.style.setProperty(
                      "border",
                      "2px solid pink",
                      "important"
                    ),
                    e.target.style.setProperty(
                      "background-color",
                      "pink",
                      "important"
                    )),
                  await new Promise((e, t) => {
                    O.debugValues.clickDelay
                      ? setTimeout(() => {
                          e();
                        }, 10)
                      : e();
                  });
            }
          }
        }
        class n extends s {
          constructor(e) {
            super(e);
          }
          matches() {
            return null != t.find(this.config).target;
          }
        }
        class i extends s {
          constructor(e) {
            super(e);
          }
          matches() {
            let e = t.find(this.config);
            if (null == e.target)
              throw new Error("No checkbox found, cannot check state");
            return this.config.negated ? !e.target.checked : e.target.checked;
          }
        }
        class r extends s {
          constructor(e) {
            super(e);
          }
          debug() {}
          matches() {
            O.debugValues.debugRules &&
              console.log("URL Matcher:", O.topFrameUrl, this.config);
            let e = this.config.url;
            Array.isArray(e) || (e = [e]);
            let t = !1;
            if (this.config.regexp) {
              for (let s of e)
                if (null !== new RegExp(s).exec(O.topFrameUrl)) {
                  O.debugValues.debugRules &&
                    console.log("Matched URL regexp:", s),
                    (t = !0);
                  break;
                }
            } else
              for (let s of e)
                if (O.topFrameUrl.indexOf(s) > -1) {
                  O.debugValues.debugRules && console.log("Matched URL:", s),
                    (t = !0);
                  break;
                }
            return (
              this.config.negated && (t = !t),
              O.debugValues.debugRules &&
                console.log("Did URLMatcher match (after negate):", t),
              t
            );
          }
        }
        class a {
          constructor(e) {
            (this.config = e),
              (this.presentMatchers = []),
              (this.showingMatchers = []),
              Array.isArray(this.config.presentMatcher) ||
                (this.config.presentMatcher = [this.config.presentMatcher]),
              Array.isArray(this.config.showingMatcher) ||
                (this.config.showingMatcher = [this.config.showingMatcher]),
              this.config.presentMatcher.forEach((e) => {
                null != e && this.presentMatchers.push(s.createMatcher(e));
              }),
              this.config.showingMatcher.forEach((e) => {
                null != e && this.showingMatchers.push(s.createMatcher(e));
              });
          }
          detect() {
            return (
              0 !== this.presentMatchers.length &&
              this.presentMatchers.every((e) => e.matches())
            );
          }
          isShowing() {
            return (
              0 === this.showingMatchers.length ||
              this.showingMatchers.every((e) => e.matches())
            );
          }
        }
        class l {
          constructor(e, t) {
            (this.config = e),
              (this.cmp = t),
              null != this.config.toggleAction &&
                (this.toggleAction = c.createAction(
                  this.config.toggleAction,
                  t
                )),
              null != this.config.matcher &&
                (this.enabledMatcher = s.createMatcher(this.config.matcher)),
              null != this.config.falseAction &&
                (this.falseAction = c.createAction(this.config.falseAction, t)),
              null != this.config.trueAction &&
                (this.trueAction = c.createAction(this.config.trueAction, t));
          }
          async toggle() {
            return await this.toggleAction.execute();
          }
          isEnabled() {
            return this.enabledMatcher.matches();
          }
          async setEnabled(e) {
            if (null != this.toggleAction) {
              if (null == this.enabledMatcher) {
                if (O.debugValues.debugLog)
                  throw new Error(
                    "Toggle consent action, without a matcher: " +
                      JSON.stringify(this.config)
                  );
                return;
              }
              try {
                this.isEnabled() !== e && (await this.toggle());
              } catch (e) {
                O.debugValues.debugLog &&
                  console.error("Error toggling:", e, this.config);
              }
            } else {
              let t = !1;
              if (
                null != this.enabledMatcher &&
                this.enabledMatcher instanceof o
              )
                try {
                  this.isEnabled() && !e
                    ? await this.falseAction.execute()
                    : !this.isEnabled() &&
                      e &&
                      (await this.trueAction.execute()),
                    (t = !0);
                } catch (e) {
                  O.debugValues.debugLog &&
                    console.error("Error pushing on/off:", e, this.config);
                }
              t ||
                (e
                  ? await this.trueAction.execute()
                  : await this.falseAction.execute());
            }
            O.debugValues.paintMatchers &&
              null != this.enabledMatcher &&
              (await this.enabledMatcher.debug(e));
          }
          get type() {
            return this.config.type;
          }
        }
        class c {
          static createAction(e, t) {
            try {
              switch (e.type) {
                case "click":
                  return new h(e, t);
                case "multiclick":
                  return new p(e, t);
                case "list":
                  return new u(e, t);
                case "consent":
                  return new m(e, t);
                case "ifcss":
                  return new f(e, t);
                case "waitcss":
                  return new b(e, t);
                case "foreach":
                  return new y(e, t);
                case "hide":
                  return new M(e, t);
                case "slide":
                  return new E(e, t);
                case "close":
                  return new g(e, t);
                case "wait":
                  return new d(e, t);
                case "ifallowall":
                  return new C(e, t);
                case "ifallownone":
                  return new P(e, t);
                case "runrooted":
                  return new S(e, t);
                case "runmethod":
                  return new v(e, t);
                default:
                  throw "Unknown action type: " + e.type;
              }
            } catch (s) {
              return O.debugValues.debugLog && console.error(s), new w(e, t);
            }
          }
          constructor(e) {
            const t = this;
            if (((this.config = e), O.debugValues.debugLog)) {
              let e = this.execute;
              this.execute = async function (s) {
                t.logStart(s);
                try {
                  await e.call(t, s);
                } catch (e) {
                  console.error(e);
                }
                t.logEnd();
              };
            }
          }
          get timeout() {
            return null != this.config.timeout
              ? this.config.timeout
              : O.debugValues.clickDelay
              ? 150
              : O.singleton.pipEnabled
              ? O.singleton.getClicksSoFar() > 100
                ? 0
                : O.singleton.getClicksSoFar() > 20
                ? 1
                : O.singleton.getClicksSoFar() > 5
                ? 10
                : 100
              : 0;
          }
          logStart(e) {
            O.debugValues.debugLog &&
              console.group(this.constructor.name + ":", this.config, e);
          }
          logEnd() {
            O.debugValues.debugLog && console.groupEnd();
          }
          async execute(e) {
            console.log(
              "Remember to overrride execute()",
              this.constructor.name
            );
          }
          async waitTimeout(e) {
            return new Promise((t) => {
              setTimeout(() => {
                t();
              }, e);
            });
          }
          getNumSteps() {
            return (
              console.warn("Missing getNumSteps on: " + this.constructor.name),
              0
            );
          }
        }
        class u extends c {
          constructor(e, t) {
            super(e),
              (this.actions = []),
              e.actions.forEach((e) => {
                this.actions.push(c.createAction(e, t));
              });
          }
          async execute(e) {
            for (let t of this.actions) await t.execute(e);
          }
          getNumSteps() {
            let e = 0;
            return (
              this.actions.forEach((t) => {
                e += t.getNumSteps();
              }),
              e
            );
          }
        }
        class g extends c {
          constructor(e, t) {
            super(e);
          }
          async execute(e) {
            return window.close(), 1;
          }
          getNumSteps() {
            return 1;
          }
        }
        class d extends c {
          constructor(e, t) {
            super(e);
          }
          async execute(e) {
            let t = this;
            await new Promise((e, s) => {
              setTimeout(() => {
                e();
              }, t.config.waitTime);
            });
          }
          getNumSteps() {
            return 1;
          }
        }
        class h extends c {
          constructor(e, t) {
            super(e), (this.cmp = t);
          }
          async execute(e) {
            let s = t.find(this.config);
            if (null != s.target) {
              let e = !1;
              O.singleton.pipEnabled &&
                (e = null != s.target.closest(".ConsentOMatic-CMP-PIP"));
              let t = 0 !== s.target.offsetHeight;
              t &&
                (O.debugValues.clickDelay || e) &&
                s.target.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "center",
                }),
                t &&
                  !0 !== this.config.noTimeout &&
                  (await this.waitTimeout(this.timeout)),
                O.debugValues.debugClicks &&
                  console.log(
                    "Clicking: [openInTab: " + this.config.openInTab + "]",
                    s.target
                  ),
                (O.debugValues.clickDelay || e) &&
                  s.target.focus({ preventScroll: !0 }),
                this.config.openInTab
                  ? s.target.dispatchEvent(
                      new MouseEvent("click", { ctrlKey: !0, shiftKey: !0 })
                    )
                  : s.target.click(),
                O.singleton.registerClick(),
                t &&
                  !0 !== this.config.noTimeout &&
                  (await this.waitTimeout(this.timeout));
            }
          }
          getNumSteps() {
            return 1;
          }
        }
        class p extends c {
          constructor(e, t) {
            super(e), (this.cmp = t);
          }
          async execute(e) {
            let s = t.find(this.config, !0);
            O.debugValues.debugClicks && console.log("MultiClicking:", s),
              s.forEach((e) => {
                null != e.target && e.target.click();
              }),
              s.forEach((e) => {
                null != e.target && O.singleton.registerClick();
              });
          }
          getNumSteps() {
            return 50;
          }
        }
        class m extends c {
          constructor(e, t) {
            super(e);
            let s = this;
            (this.consents = []),
              this.config.consents.forEach((e) => {
                s.consents.push(new l(e, t));
              });
          }
          async execute(e) {
            for (let t of this.consents) {
              let s = !1;
              e.hasOwnProperty(t.type) && (s = e[t.type]),
                await t.setEnabled(s);
            }
          }
          getNumSteps() {
            return 1;
          }
        }
        class f extends c {
          constructor(e, t) {
            super(e),
              null != e.trueAction &&
                (this.trueAction = c.createAction(e.trueAction, t)),
              null != e.falseAction &&
                (this.falseAction = c.createAction(e.falseAction, t));
          }
          async execute(e) {
            null != t.find(this.config).target
              ? null != this.trueAction && (await this.trueAction.execute(e))
              : null != this.falseAction && (await this.falseAction.execute(e));
          }
          getNumSteps() {
            let e = 0;
            return (
              null != this.trueAction && (e += this.trueAction.getNumSteps()),
              null != this.falseAction && (e += this.falseAction.getNumSteps()),
              Math.round(e / 2)
            );
          }
        }
        class b extends c {
          constructor(e, t) {
            super(e);
          }
          async execute(e) {
            let s = this,
              o = !1;
            s.config.negated && (o = s.config.negated),
              O.debugValues.debugLog &&
                console.time(
                  "Waiting [" + o + "]:" + this.config.target.selector
                ),
              await new Promise((e) => {
                let n = 10,
                  i = 250;
                s.config.retries && (n = s.config.retries),
                  s.config.waitTime && (i = s.config.waitTime),
                  (function r() {
                    let a = t.find(s.config);
                    o
                      ? null != a.target && n > 0
                        ? (n--, setTimeout(r, i))
                        : (O.debugValues.debugLog &&
                            console.timeEnd(
                              "Waiting [" + o + "]:" + s.config.target.selector
                            ),
                          e())
                      : null != a.target
                      ? (O.debugValues.debugLog &&
                          console.timeEnd(
                            "Waiting [" + o + "]:" + s.config.target.selector
                          ),
                        e())
                      : n > 0
                      ? (n--, setTimeout(r, i))
                      : (O.debugValues.debugLog &&
                          console.timeEnd(
                            "Waiting [" + o + "]:" + s.config.target.selector
                          ),
                        e());
                  })();
              });
          }
          getNumSteps() {
            return 1;
          }
        }
        class w extends c {
          constructor(e, t) {
            super(e);
          }
          async execute(e) {}
          getNumSteps() {
            return 0;
          }
        }
        class y extends c {
          constructor(e, t) {
            super(e),
              null != this.config.action
                ? (this.action = c.createAction(this.config.action, t))
                : console.warn("Missing action on ForEach: ", this);
          }
          async execute(e) {
            if (null != this.action) {
              let s = t.find(this.config, !0),
                o = t.base;
              for (let o of s)
                null != o.target &&
                  (t.setBase(o.target), await this.action.execute(e));
              t.setBase(o);
            }
          }
          getNumSteps() {
            return null != this.action ? this.action.getNumSteps() : 0;
          }
        }
        class M extends c {
          constructor(e, t) {
            super(e), (this.cmp = t);
          }
          async execute(e) {
            if (O.debugValues.skipHideMethod) return;
            let s = t.find(this.config);
            if (null != s.target)
              if (
                (this.cmp.hiddenTargets.push(s.target),
                !0 === this.config.hideFromDetection &&
                  s.target.classList.add("ConsentOMatic-CMP-NoDetect"),
                O.generalSettings.hideInsteadOfPIP ||
                  !0 === this.config.forceHide)
              )
                s.target.classList.add("ConsentOMatic-CMP-Hider");
              else {
                function o() {
                  if (!s.target.matches(".ConsentOMatic-CMP-PIP")) return;
                  let e = document.querySelector(
                      ".ConsentOMatic-Progres-Preview"
                    ),
                    t = 0.25;
                  if (null != e) {
                    let o = e.offsetWidth - 4,
                      n = e.offsetHeight - 4,
                      i = s.target.offsetWidth,
                      r = s.target.offsetHeight;
                    0 === s.target.offsetHeight &&
                      (s.target.style.setProperty(
                        "height",
                        "100%",
                        "important"
                      ),
                      (r = s.target.offsetHeight));
                    let a = o / i,
                      l = n / r;
                    t = Math.min(a, l);
                  }
                  s.target.style.setProperty("position", "fixed", "important"),
                    s.target.style.setProperty("left", "initial", "important"),
                    s.target.style.setProperty("top", "initial", "important"),
                    s.target.style.setProperty("right", "0px", "important"),
                    s.target.style.setProperty("bottom", "2px", "important"),
                    s.target.style.setProperty(
                      "transform",
                      "translateY(-4rem) scale(" + t + ")",
                      "important"
                    ),
                    s.target.style.setProperty(
                      "transform-origin",
                      "right bottom",
                      "important"
                    ),
                    s.target.style.setProperty(
                      "transition",
                      "transform 0.15s ease-in-out",
                      "important"
                    ),
                    s.target.style.setProperty("contain", "paint", "important"),
                    s.target.style.setProperty("border", "none", "important"),
                    s.target.style.setProperty(
                      "box-shadow",
                      "none",
                      "important"
                    ),
                    s.target.style.setProperty(
                      "z-index",
                      "2147483647",
                      "important"
                    ),
                    s.target.style.setProperty(
                      "grid-column",
                      "none",
                      "important"
                    ),
                    s.target.style.setProperty("grid-row", "none", "important");
                }
                O.singleton.enablePip(),
                  s.target.classList.add("ConsentOMatic-CMP-PIP"),
                  void 0 === s.target.savedStyles &&
                    (s.target.savedStyles = s.target.getAttribute("style")),
                  o(),
                  await new Promise((e) => {
                    requestAnimationFrame(() => {
                      e();
                    });
                  });
                let n = new Set(),
                  i = new ResizeObserver((e) => {
                    for (let t of e) n.has(t.target) ? o() : n.add(t.target);
                  });
                function r() {
                  n.clear(), i.observe(s.target);
                }
                r(), this.cmp.observers.push(i);
                let a = new MutationObserver((e) => {
                  o();
                });
                this.cmp.observers.push(a),
                  a.observe(s.target, {
                    attributes: !0,
                    attributeFilter: ["style"],
                  });
              }
          }
          getNumSteps() {
            return 1;
          }
        }
        class E extends c {
          constructor(e, t) {
            super(e), (this.cmp = t);
          }
          async execute(e) {
            let s = t.find(this.config),
              o = t.find(this.config.dragTarget);
            if (null != s.target) {
              let e = s.target.getBoundingClientRect(),
                t = o.target.getBoundingClientRect(),
                n = t.top - e.top,
                i = t.left - e.left;
              "y" === this.config.axis.toLowerCase() && (i = 0),
                "x" === this.config.axis.toLowerCase() && (n = 0);
              let r = window.screenX + e.left + e.width / 2,
                a = window.screenY + e.top + e.height / 2,
                l = e.left + e.width / 2,
                c = e.top + e.height / 2,
                u = document.createEvent("MouseEvents");
              u.initMouseEvent(
                "mousedown",
                !0,
                !0,
                window,
                0,
                r,
                a,
                l,
                c,
                !1,
                !1,
                !1,
                !1,
                0,
                s.target
              );
              let g = document.createEvent("MouseEvents");
              g.initMouseEvent(
                "mousemove",
                !0,
                !0,
                window,
                0,
                r + i,
                a + n,
                l + i,
                c + n,
                !1,
                !1,
                !1,
                !1,
                0,
                s.target
              );
              let d = document.createEvent("MouseEvents");
              d.initMouseEvent(
                "mouseup",
                !0,
                !0,
                window,
                0,
                r + i,
                a + n,
                l + i,
                c + n,
                !1,
                !1,
                !1,
                !1,
                0,
                s.target
              ),
                s.target.dispatchEvent(u),
                await this.waitTimeout(10),
                s.target.dispatchEvent(g),
                await this.waitTimeout(10),
                s.target.dispatchEvent(d),
                O.singleton.registerClick();
            }
          }
          getNumSteps() {
            return 1;
          }
        }
        class C extends c {
          constructor(e, t) {
            super(e),
              (this.cmp = t),
              null != e.trueAction &&
                (this.trueAction = c.createAction(e.trueAction, t)),
              null != e.falseAction &&
                (this.falseAction = c.createAction(e.falseAction, t));
          }
          async execute(e) {
            let t = !0;
            Object.keys(e).forEach((s) => {
              !1 === e[s] && (t = !1);
            }),
              t
                ? null != this.trueAction && (await this.trueAction.execute(e))
                : null != this.falseAction &&
                  (await this.falseAction.execute(e));
          }
          getNumSteps() {
            let e = 0;
            return (
              null != this.trueAction && (e += this.trueAction.getNumSteps()),
              null != this.falseAction && (e += this.falseAction.getNumSteps()),
              Math.round(e / 2)
            );
          }
        }
        class P extends c {
          constructor(e, t) {
            super(e),
              (this.cmp = t),
              null != e.trueAction &&
                (this.trueAction = c.createAction(e.trueAction, t)),
              null != e.falseAction &&
                (this.falseAction = c.createAction(e.falseAction, t));
          }
          async execute(e) {
            let t = !0;
            Object.keys(e).forEach((s) => {
              !0 === e[s] && (t = !1);
            }),
              t
                ? null != this.trueAction && (await this.trueAction.execute(e))
                : null != this.falseAction &&
                  (await this.falseAction.execute(e));
          }
          getNumSteps() {
            let e = 0;
            return (
              null != this.trueAction && (e += this.trueAction.getNumSteps()),
              null != this.falseAction && (e += this.falseAction.getNumSteps()),
              Math.round(e / 2)
            );
          }
        }
        class S extends c {
          constructor(e, t) {
            super(e),
              (this.cmp = t),
              null != this.config.action
                ? (this.action = c.createAction(this.config.action, t))
                : console.warn("Missing action on RunRooted: ", this);
          }
          async execute(e) {
            if (null != this.config.action) {
              let s = t.getBase();
              !0 === this.config.ignoreOldRoot && t.setBase(null);
              let o = t.find(this.config);
              null != o.target &&
                (t.setBase(o.target), await this.action.execute(e)),
                t.setBase(s);
            }
          }
          getNumSteps() {
            return null != this.action ? this.action.getNumSteps() : 0;
          }
        }
        class v extends c {
          constructor(e, t) {
            super(e), (this.cmp = t);
          }
          async execute(e) {
            if (null == this.config.method)
              return void console.warn(
                "Missing option 'method' on RunMethodAction"
              );
            let t = this.config.method.toUpperCase();
            this.cmp.hasMethod(t)
              ? this.cmp.isCustomMethod(t)
                ? await this.cmp.runMethod(t, e)
                : console.warn("CMP method [" + t + "] is not a custom method!")
              : console.warn("CMP does not have method [" + t + "]", this.cmp);
          }
          getNumSteps() {
            return this.cmp.hasMethod(this.config.method)
              ? this.cmp.getNumStepsForMethod(this.config.method)
              : 0;
          }
        }
        class A {
          constructor(e, t) {
            let s = this;
            (this.name = e),
              (this.detectors = []),
              t.detectors.forEach((e) => {
                s.detectors.push(new a(e));
              }),
              (this.methods = new Map()),
              t.methods.forEach((e) => {
                if (null != e.action) {
                  let t = c.createAction(e.action, this);
                  (t.customMethod = e.custom), s.methods.set(e.name, t);
                }
              }),
              (this.hiddenTargets = []),
              (this.observers = []);
          }
          stopObservers() {
            this.observers.forEach((e) => {
              e.disconnect();
            });
          }
          unHideAll() {
            let e = [
              "position",
              "left",
              "top",
              "right",
              "bottom",
              "transform",
              "transform-origin",
              "transition",
              "contain",
              "border",
              "box-shadow",
              "z-index",
              "animation",
              "grid-column",
              "grid-row",
            ];
            this.hiddenTargets.forEach((t) => {
              if (
                (t.classList.remove("ConsentOMatic-CMP-Hider"),
                t.classList.remove("ConsentOMatic-CMP-PIP"),
                void 0 !== t.savedStyles)
              ) {
                let s = t
                    .getAttribute("style")
                    .split(";")
                    .filter((e) => e.trim().length > 0),
                  o = [];
                s.forEach((t) => {
                  if ((t = t.trim()).length > 0 && -1 !== t.indexOf(":")) {
                    let s = t.split(":"),
                      n = s[0].trim(),
                      i = s[1].trim();
                    e.includes(n) || o.push({ name: n, value: i });
                  }
                }),
                  null === t.savedStyles && t.removeAttribute("style"),
                  t.setAttribute("style", t.savedStyles),
                  o.forEach(({ name: e, value: s }) => {
                    t.style.setProperty(e, s);
                  });
              }
            });
          }
          detect() {
            O.debugValues.debugRules &&
              console.groupCollapsed("Testing:", this.name);
            try {
              let e = this.detectors.find((e) => e.detect());
              return (
                null != e &&
                  O.debugValues.debugRules &&
                  console.log("Triggered detector: ", e),
                O.debugValues.debugRules && console.groupEnd(),
                null != e
              );
            } catch (e) {
              O.debugValues.debugRules && (console.warn(e), console.groupEnd());
            }
            return !1;
          }
          isShowing() {
            return this.detectors.find((e) => e.detect()).isShowing();
          }
          isUtility() {
            return this.methods.has("UTILITY") && 1 === this.methods.size;
          }
          hasMethod(e) {
            return this.methods.has(e);
          }
          isCustomMethod(e) {
            let t = this.methods.get(e);
            return null != t && !0 === t.customMethod;
          }
          async runMethod(e, t = null) {
            let s = this.methods.get(e);
            null != s
              ? (this.isCustomMethod(e) ||
                  (O.singleton.currentMethodStepsTotal =
                    this.getNumStepsForMethod(e)),
                O.debugValues.debugLog && console.log("Triggering method: ", e),
                await s.execute(t),
                this.isCustomMethod(e) || O.singleton.currentMethodDone())
              : await new Promise((e) => {
                  setTimeout(() => {
                    e();
                  }, 0);
                });
          }
          getNumStepsForMethod(e) {
            let t = this.methods.get(e);
            return null != t ? t.getNumSteps() : 0;
          }
          getNumSteps() {
            let e = 0;
            return (
              this.methods.forEach((t, s) => {
                if ("UTILITY" !== s) {
                  let o = t.getNumSteps();
                  e += "HIDE_CMP" === s ? 2 * o : o;
                }
              }),
              e
            );
          }
        }
        class O {
          constructor(e, t, s) {
            let o = this;
            (this.consentTypes = t),
              (this.cmps = []),
              (this.handledCallback = s),
              (this.triedCMPs = new Set()),
              (this.numClicks = 0),
              (this.pipEnabled = !1),
              Object.keys(e).forEach((t) => {
                try {
                  o.cmps.push(new A(t, e[t]));
                } catch (e) {
                  console.groupCollapsed(
                    "Invalid CMP (" +
                      t +
                      ") detected, please update GDPR consent engine or fix the rule generating this error:"
                  ),
                    console.error(e),
                    console.groupEnd();
                }
              }),
              this.cmps.sort((e, t) =>
                e.isUtility() ? -1 : t.isUtility() ? 1 : 0
              ),
              this.setupObserver(),
              this.startObserver(),
              this.startStopTimeout(),
              window.addEventListener("DOMContentLoaded", () => {
                o.handleMutations([]);
              }),
              (this.domScannerIntervalID = setInterval(() => {
                o.handleMutations([]);
              }, 500));
          }
          static enforceScrollBehaviours(e) {
            if (window !== window.parent) {
              let t = window.parent;
              for (; t !== t.parent; ) t = t.parent;
              chrome.runtime.sendMessage("GetTabUrl", (s) => {
                (s = s.substring(0, s.indexOf("/", 8))),
                  t.postMessage({ enforceScrollBehaviours: e }, s);
              });
            }
            let t = document.querySelector("#consent-scrollbehaviour-override");
            if (
              (t && (t.textContent = ""),
              document
                .querySelector("html")
                .classList.remove("consent-scrollbehaviour-override"),
              document
                .querySelector("body")
                .classList.remove("consent-scrollbehaviour-override"),
              !e)
            )
              return;
            document
              .querySelector("html")
              .classList.add("consent-scrollbehaviour-override"),
              document
                .querySelector("body")
                .classList.add("consent-scrollbehaviour-override"),
              t ||
                ((t = document.createElement("style")),
                (t.id = "consent-scrollbehaviour-override"),
                document.documentElement.appendChild(t));
            let s = Object.entries(window.consentScrollBehaviours)
              .map((e) => {
                const [t, s] = e;
                return (
                  t +
                  "{" +
                  s
                    .map((e) => {
                      let t = e.value.includes("important");
                      return (
                        e.property + ":" + e.value + (t ? "" : "!important")
                      );
                    })
                    .join(";") +
                  "}"
                );
              })
              .join("");
            O.debugValues.debugLog && console.log(s), (t.textContent = s);
          }
          enablePip() {
            (this.pipEnabled = !0),
              null != this.modal &&
                this.modal.classList.add("ConsentOMatic-PIP"),
              O.enforceScrollBehaviours(!0);
          }
          registerClick() {
            let e = 1 / this.currentMethodStepsTotal;
            if ((this.numClicks++, 0 == this.currentMethodFraction))
              this.currentMethodFraction = e;
            else {
              let t = 1 - this.currentMethodFraction;
              this.currentMethodFraction += t * (e / 2);
            }
            this.calculateProgress();
          }
          getClicksSoFar() {
            return this.numClicks;
          }
          currentMethodDone() {
            (this.completedSteps += this.currentMethodStepsTotal),
              (this.currentMethodFraction = 1),
              this.calculateProgress(),
              (this.currentMethodStepsTotal = 0),
              (this.currentMethodFraction = 0);
          }
          startStopTimeout() {
            const e = this;
            null != this.stopEngineId && clearTimeout(this.stopEngineId),
              (this.stopEngineId = setTimeout(() => {
                O.debugValues.debugLog &&
                  console.log(
                    "No CMP detected in 5 seconds, stopping engine..."
                  ),
                  null != e.queueId && clearTimeout(e.queueId),
                  clearInterval(e.domScannerIntervalID),
                  e.handledCallback({ handled: !1 }),
                  this.stopObserver();
              }, 5e3));
          }
          async handleMutations(e) {
            const t = this;
            null != this.queueId ||
              t.checkRunning ||
              (this.queueId = setTimeout(async () => {
                t.queueId = null;
                try {
                  t.checkForCMPs();
                } catch (e) {
                  console.error(e);
                }
              }, 250));
          }
          async checkForCMPs() {
            const e = this;
            (e.checkRunning = !0),
              await new Promise((e) => {
                setTimeout(() => {
                  e();
                }, 0);
              }),
              O.debugValues.debugLog && console.groupCollapsed("findCMP");
            let t = this.findCMP();
            if (
              (O.debugValues.debugLog && console.groupEnd(),
              (t = t.filter((t) => !e.triedCMPs.has(t.name))),
              t.length > 0)
            ) {
              this.stopObserver(),
                t.length > 1 &&
                  console.warn(
                    "Found multiple CMPS's maybee rewise detection rules...",
                    t
                  );
              let s = t[0];
              O.debugValues.debugLog &&
                (console.log("CMP Detected: ", s.name),
                console.groupCollapsed(s.name + " - isShowing?")),
                this.triedCMPs.add(s.name);
              let o = 5;
              async function n() {
                s.isShowing()
                  ? ((e.currentCMP = s),
                    O.debugValues.debugLog &&
                      (console.groupEnd(), console.log(s.name + " - Showing")),
                    setTimeout(async () => {
                      if (s.isUtility())
                        O.debugValues.debugLog &&
                          console.groupCollapsed(s.name + " - UTILITY"),
                          await s.runMethod("UTILITY", e.consentTypes),
                          O.debugValues.debugLog && console.groupEnd(),
                          O.debugValues.skipHideMethod ||
                            O.debugValues.dontHideProgressDialog ||
                            s.stopObservers(),
                          (e.checkRunning = !1),
                          e.startObserver(),
                          e.handleMutations([]);
                      else {
                        try {
                          (e.numClicks = 0),
                            O.debugValues.skipHideMethod ||
                              e.showProgressDialog(
                                "Handling " + s.name + "..."
                              ),
                            (e.totalSteps = s.getNumSteps()),
                            (e.completedSteps = 0),
                            (e.currentMethodStepsTotal = 0),
                            (e.currentMethodFraction = 0),
                            e.updateProgress(0),
                            O.debugValues.skipHideMethod ||
                              (O.debugValues.debugLog &&
                                console.groupCollapsed(s.name + " - HIDE_CMP"),
                              await s.runMethod("HIDE_CMP", e.consentTypes),
                              O.debugValues.debugLog && console.groupEnd()),
                            O.debugValues.skipOpenMethod ||
                              (O.debugValues.debugLog &&
                                console.groupCollapsed(
                                  s.name + " - OPEN_OPTIONS"
                                )),
                            await s.runMethod("OPEN_OPTIONS", e.consentTypes),
                            O.debugValues.debugLog && console.groupEnd(),
                            O.debugValues.skipHideMethod ||
                              (O.debugValues.debugLog &&
                                console.groupCollapsed(s.name + " - HIDE_CMP"),
                              await s.runMethod("HIDE_CMP", e.consentTypes),
                              O.debugValues.debugLog && console.groupEnd()),
                            O.debugValues.debugLog &&
                              console.groupCollapsed(s.name + " - DO_CONSENT"),
                            await s.runMethod("DO_CONSENT", e.consentTypes),
                            O.debugValues.debugLog && console.groupEnd(),
                            O.debugValues.skipSubmit ||
                              (O.debugValues.debugLog &&
                                console.groupCollapsed(
                                  s.name + " - SAVE_CONSENT"
                                ),
                              await s.runMethod("SAVE_CONSENT", e.consentTypes),
                              O.debugValues.debugLog && console.groupEnd()),
                            e.numClicks > 0 ||
                              (O.debugValues.debugLog &&
                                console.log(
                                  "Consent-O-Matic click count was 0 for CMP:",
                                  e.numClicks,
                                  s.name
                                ),
                              (e.numClicks = 0)),
                            e.updateProgress(1),
                            e.handledCallback({
                              handled: !0,
                              cmpName: s.name,
                              clicks: e.numClicks,
                            });
                        } catch (t) {
                          console.log("Error during consent handling:", t),
                            e.handledCallback({ handled: !1, error: !0 });
                        }
                        O.debugValues.skipHideMethod ||
                          O.debugValues.dontHideProgressDialog ||
                          ((e.currentCMP = null),
                          e.hideProgressDialog(),
                          s.stopObservers(),
                          s.unHideAll()),
                          clearTimeout(e.stopEngineId),
                          clearInterval(e.domScannerIntervalID),
                          (e.checkRunning = !1),
                          window.focus(),
                          document.activeElement &&
                            document.activeElement.blur(),
                          document.body.focus();
                      }
                    }, 0))
                  : o > 0
                  ? (o--, setTimeout(n, 250))
                  : (O.debugValues.debugLog &&
                      (console.groupEnd(),
                      console.log(s.name + " - Not showing")),
                    (e.checkRunning = !1),
                    e.startObserver(),
                    e.startStopTimeout(),
                    e.handleMutations([]));
              }
              await n();
            } else e.checkRunning = !1;
          }
          unHideAll() {
            null != this.currentCMP &&
              (this.currentCMP.stopObservers(), this.currentCMP.unHideAll());
          }
          showProgressDialog(e) {
            const t = this;
            O.debugValues.debugLog && console.log("Showing progress..."),
              null != this.dialogTimeoutId &&
                (clearTimeout(this.dialogTimeoutId),
                (this.dialogTimeoutId = null),
                null != this.dialog &&
                  (this.dialog.remove(), (this.dialog = null)),
                null != this.modal &&
                  (this.modal.remove(), (this.modal = null))),
              (this.modal = document.createElement("div")),
              this.modal.classList.add("ConsentOMatic-Progress-Dialog-Modal"),
              (this.dialog = document.createElement("div")),
              this.dialog.classList.add("ConsentOMatic-Progress-Dialog"),
              (this.preview = document.createElement("div")),
              this.preview.classList.add("ConsentOMatic-Progres-Preview"),
              this.modal.appendChild(this.preview);
            let s = document.createElement("p");
            (s.innerText = e),
              this.dialog.appendChild(s),
              document.body.appendChild(this.modal),
              this.modal.appendChild(this.dialog),
              this.dialog.addEventListener("click", () => {
                t.unHideAll();
              }),
              setTimeout(() => {
                this.modal.classList.add("ConsentOMatic-Progress-Started");
              }, 0);
          }
          calculateProgress() {
            let e =
              (this.completedSteps +
                this.currentMethodStepsTotal * this.currentMethodFraction) /
              this.totalSteps;
            this.updateProgress(e);
          }
          updateProgress(e) {
            null != this.modal && this.modal.style.setProperty("--progress", e);
          }
          hideProgressDialog() {
            let e = this;
            O.debugValues.debugLog && console.log("Hiding progress..."),
              this.modal.classList.add("ConsentOMatic-Progress-Complete"),
              (this.dialogTimeoutId = setTimeout(() => {
                e.modal.remove(), e.dialog.remove(), (e.dialog = null);
              }, 1e3)),
              O.enforceScrollBehaviours(!1);
          }
          setupObserver() {
            this.observer = new MutationObserver((e) => {
              this.handleMutations(e);
            });
          }
          startObserver() {
            null != document.body &&
              this.observer.observe(document.body, {
                childList: !0,
                attributes: !0,
                subtree: !0,
              });
          }
          stopObserver() {
            this.observer.disconnect();
          }
          findCMP() {
            return this.cmps.filter((e) => e.detect());
          }
        }
        (O.singleton = null), (window.consentScrollBehaviours = {});
        let T = document.querySelector("html");
        if (T) {
          let e = new MutationObserver((t) => {
            t.forEach((t) => {
              t.addedNodes.forEach((t) => {
                null != t.matches &&
                  t.matches("body") &&
                  (["html", "html body"].forEach((e) => {
                    let t = document.querySelector(e);
                    if (t) {
                      let s = window.getComputedStyle(t);
                      window.consentScrollBehaviours[
                        e + ".consent-scrollbehaviour-override"
                      ] = ["position", "overflow", "overflow-y"].map((e) => ({
                        property: e,
                        value: s[e],
                      }));
                    }
                  }),
                  e.disconnect());
              });
            });
          });
          e.observe(T, { childList: !0 });
        }
        window.addEventListener("message", (e) => {
          try {
            null != e.data?.enforceScrollBehaviours &&
              O.enforceScrollBehaviours(e.data.enforceScrollBehaviours);
          } catch (e) {
            console.error("Error inside message listener:", e);
          }
        }),
          (async function () {
            if ("text/html" !== document.contentType) return;
            let t = location.href;
            window !== window.parent &&
              (t = await new Promise((e, t) => {
                chrome.runtime.sendMessage("GetTabUrl", (t) => {
                  e(t);
                });
              }));
            const s = new URL(t);
            (t = s.host),
              e.isActive(t).then(async (s) => {
                s &&
                  chrome.runtime.sendMessage("GetRuleList", (s) => {
                    s
                      ? e.getCustomRuleLists().then((o) => {
                          s.forEach((e) => {
                            delete e.$schema;
                          }),
                            delete o.$schema;
                          let n = Object.assign({}, ...s, o);
                          e.getConsentValues().then((i) => {
                            e.getDebugValues().then((r) => {
                              e.getGeneralSettings().then((e) => {
                                r.debugLog &&
                                  (console.log("FetchedRules:", s),
                                  console.log("CustomRules:", o)),
                                  (O.debugValues = r),
                                  (O.generalSettings = e),
                                  (O.topFrameUrl = t),
                                  chrome.runtime.sendMessage("Searching");
                                let a = new O(n, i, (e) => {
                                  let s = { handled: e.handled };
                                  e.handled
                                    ? ((s.cmp = e.cmpName),
                                      (s.clicks = e.clicks),
                                      (s.url = t),
                                      chrome.runtime.sendMessage(
                                        "HandledCMP|" + JSON.stringify(s)
                                      ))
                                    : e.error
                                    ? chrome.runtime.sendMessage("CMPError")
                                    : chrome.runtime.sendMessage(
                                        "NothingFound"
                                      );
                                });
                                (O.singleton = a),
                                  r.debugLog &&
                                    console.log(
                                      "ConsentEngine loaded " +
                                        a.cmps.length +
                                        " of " +
                                        Object.keys(n).length +
                                        " rules"
                                    );
                              });
                            });
                          });
                        })
                      : console.log(
                          "Failed to connect with service worker for getRuleList msg",
                          s
                        );
                  });
              });
          })().catch((e) => {
            console.error(e);
          });
      },
      347: (e, t, s) => {
        e.exports = s.p + "hide.svg";
      },
      432: (e, t, s) => {
        e.exports = s.p + "icon_48.png";
      },
      697: (e, t, s) => {
        e.exports = s.p + "icon_96.png";
      },
      610: (e, t, s) => {
        e.exports = s.p + "logo.svg";
      },
      692: (e, t, s) => {
        e.exports = s.p + "manifest.json";
      },
      579: (e, t, s) => {
        e.exports = s.p + "minimize.svg";
      },
      236: (e, t, s) => {
        e.exports = s.p + "content.css";
      },
    },
    t = {};
  function s(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, s), i.exports;
  }
  (s.p = ""), s(15), s(692), s(236), s(432), s(697), s(579), s(610), s(347);
})();
