"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80122], {
        80122: function(t, e, n) {
            n.r(e), n.d(e, {
                DefaultPrivacyLevel: function() {
                    return Yt
                },
                datadogRum: function() {
                    return zo
                }
            });
            var r = {
                    log: "log",
                    debug: "debug",
                    info: "info",
                    warn: "warn",
                    error: "error"
                },
                i = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    Object.prototype.hasOwnProperty.call(r, t) || (t = r.log), i[t].apply(i, e)
                };

            function o(t, e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    try {
                        return t.apply(void 0, n)
                    } catch (o) {
                        i.error(e, o)
                    }
                }
            }
            i.debug = console.debug.bind(console), i.log = console.log.bind(console), i.info = console.info.bind(console), i.warn = console.warn.bind(console), i.error = console.error.bind(console);
            var a, u = function(t, e, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
                    return t.concat(r || Array.prototype.slice.call(e))
                },
                s = !1;

            function c(t) {
                s = t
            }

            function f(t) {
                return function() {
                    return d(t, this, arguments)
                }
            }

            function d(t, e, n) {
                try {
                    return t.apply(e, n)
                } catch (i) {
                    if (l(r.error, i), a) try {
                        a(i)
                    } catch (i) {
                        l(r.error, i)
                    }
                }
            }

            function l(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s && i.apply(void 0, u([t, "[MONITOR]"], e, !1))
            }
            var p = 1e3,
                v = 6e4;

            function m(t, e, n) {
                var r, i, o = !n || void 0 === n.leading || n.leading,
                    a = !n || void 0 === n.trailing || n.trailing,
                    u = !1;
                return {
                    throttled: function() {
                        for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                        u ? r = n : (o ? t.apply(void 0, n) : r = n, u = !0, i = setTimeout((function() {
                            a && r && t.apply(void 0, r), u = !1, r = void 0
                        }), e))
                    },
                    cancel: function() {
                        clearTimeout(i), u = !1, r = void 0
                    }
                }
            }

            function h(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                return e.forEach((function(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                })), t
            }

            function g(t) {
                return h({}, t)
            }

            function y(t) {
                return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, y)
            }

            function b(t) {
                return 0 !== t && 100 * Math.random() <= t
            }

            function w(t, e) {
                return +t.toFixed(e)
            }

            function S() {}

            function C(t, e, n) {
                if ("object" !== typeof t || null === t) return JSON.stringify(t);
                var r = T(Object.prototype),
                    i = T(Array.prototype),
                    o = T(Object.getPrototypeOf(t)),
                    a = T(t);
                try {
                    return JSON.stringify(t, e, n)
                } catch (go) {
                    return "<error: unable to serialize object>"
                } finally {
                    r(), i(), o(), a()
                }
            }

            function T(t) {
                var e = t,
                    n = e.toJSON;
                return n ? (delete e.toJSON, function() {
                    e.toJSON = n
                }) : S
            }

            function k(t, e) {
                return -1 !== t.indexOf(e)
            }

            function E(t) {
                if (Array.from) return Array.from(t);
                var e = [];
                if (t instanceof Set) t.forEach((function(t) {
                    return e.push(t)
                }));
                else
                    for (var n = 0; n < t.length; n++) e.push(t[n]);
                return e
            }

            function x(t, e) {
                for (var n = 0; n < t.length; n += 1) {
                    var r = t[n];
                    if (e(r, n)) return r
                }
            }

            function _(t) {
                return I(t) && t >= 0 && t <= 100
            }

            function I(t) {
                return "number" === typeof t
            }

            function A(t) {
                return Object.keys(t).map((function(e) {
                    return t[e]
                }))
            }

            function O(t) {
                return Object.keys(t).map((function(e) {
                    return [e, t[e]]
                }))
            }

            function R(t) {
                return 0 === Object.keys(t).length
            }

            function N(t, e) {
                return t.slice(0, e.length) === e
            }

            function L() {
                if ("object" === typeof globalThis) return globalThis;
                Object.defineProperty(Object.prototype, "_dd_temp_", {
                    get: function() {
                        return this
                    },
                    configurable: !0
                });
                var t = _dd_temp_;
                return delete Object.prototype._dd_temp_, "object" !== typeof t && (t = "object" === typeof self ? self : "object" === typeof window ? window : {}), t
            }

            function M(t) {
                if (t.origin) return t.origin;
                var e = t.host.replace(/(:80|:443)$/, "");
                return "".concat(t.protocol, "//").concat(e)
            }

            function P(t, e) {
                var n = new RegExp("(?:^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)")).exec(t);
                return n ? n[1] : void 0
            }

            function D(t, e, n) {
                void 0 === n && (n = "");
                var r = t.charCodeAt(e - 1),
                    i = r >= 55296 && r <= 56319 ? e + 1 : e;
                return t.length <= i ? t : "".concat(t.slice(0, i)).concat(n)
            }

            function B(t, e, n, r) {
                return U(t, [e], n, r)
            }

            function U(t, e, n, r) {
                var i = void 0 === r ? {} : r,
                    o = i.once,
                    a = i.capture,
                    u = i.passive,
                    s = f(o ? function(t) {
                        d(), n(t)
                    } : n),
                    c = u ? {
                        capture: a,
                        passive: u
                    } : a;
                e.forEach((function(e) {
                    return t.addEventListener(e, s, c)
                }));
                var d = function() {
                    return e.forEach((function(e) {
                        return t.removeEventListener(e, s, c)
                    }))
                };
                return {
                    stop: d
                }
            }

            function q(t, e) {
                return t.matches ? t.matches(e) : !!t.msMatchesSelector && t.msMatchesSelector(e)
            }

            function F(t, e) {
                document.readyState === t || "complete" === document.readyState ? e() : B(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
                    once: !0
                })
            }

            function j(t) {
                return null === t ? "null" : Array.isArray(t) ? "array" : typeof t
            }

            function V(t, e, n) {
                if (void 0 === n && (n = function() {
                        if ("undefined" !== typeof WeakSet) {
                            var t = new WeakSet;
                            return {
                                hasAlreadyBeenSeen: function(e) {
                                    var n = t.has(e);
                                    return n || t.add(e), n
                                }
                            }
                        }
                        var e = [];
                        return {
                            hasAlreadyBeenSeen: function(t) {
                                var n = e.indexOf(t) >= 0;
                                return n || e.push(t), n
                            }
                        }
                    }()), void 0 === e) return t;
                if ("object" !== typeof e || null === e) return e;
                if (e instanceof Date) return new Date(e.getTime());
                if (e instanceof RegExp) {
                    var r = e.flags || [e.global ? "g" : "", e.ignoreCase ? "i" : "", e.multiline ? "m" : "", e.sticky ? "y" : "", e.unicode ? "u" : ""].join("");
                    return new RegExp(e.source, r)
                }
                if (!n.hasAlreadyBeenSeen(e)) {
                    if (Array.isArray(e)) {
                        for (var i = Array.isArray(t) ? t : [], o = 0; o < e.length; ++o) i[o] = V(i[o], e[o], n);
                        return i
                    }
                    var a = "object" === j(t) ? t : {};
                    for (var u in e) Object.prototype.hasOwnProperty.call(e, u) && (a[u] = V(a[u], e[u], n));
                    return a
                }
            }

            function H(t) {
                return V(void 0, t)
            }

            function z() {
                for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    void 0 !== o && null !== o && (t = V(t, o))
                }
                return t
            }

            function G(t, e) {
                return t.some((function(t) {
                    return t === e || t instanceof RegExp && t.test(e)
                }))
            }

            function W(t) {
                return window.CSS && window.CSS.escape ? window.CSS.escape(t) : t.replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
                    return e ? "\0" === t ? "\ufffd" : "".concat(t.slice(0, -1), "\\").concat(t.charCodeAt(t.length - 1).toString(16), " ") : "\\".concat(t)
                }))
            }

            function X() {
                var t = {};
                return {
                    get: function() {
                        return t
                    },
                    add: function(e, n) {
                        t[e] = n
                    },
                    remove: function(e) {
                        delete t[e]
                    },
                    set: function(e) {
                        t = e
                    },
                    getContext: function() {
                        return H(t)
                    },
                    setContext: function(e) {
                        t = H(e)
                    },
                    setContextProperty: function(e, n) {
                        t[e] = H(n)
                    },
                    removeContextProperty: function(e) {
                        delete t[e]
                    },
                    clearContext: function() {
                        t = {}
                    }
                }
            }
            var Y, K = function() {
                function t() {
                    this.buffer = []
                }
                return t.prototype.add = function(t) {
                    this.buffer.push(t) > 500 && this.buffer.splice(0, 1)
                }, t.prototype.drain = function() {
                    this.buffer.forEach((function(t) {
                        return t()
                    })), this.buffer.length = 0
                }, t
            }();

            function $(t) {
                return {
                    relative: t,
                    timeStamp: J(t)
                }
            }

            function J(t) {
                var e = Q() - performance.now();
                return e > at() ? Math.round(e + t) : function(t) {
                    return Math.round(at() + t)
                }(t)
            }

            function Z(t) {
                return I(t) ? w(1e6 * t, 0) : t
            }

            function Q() {
                return (new Date).getTime()
            }

            function tt() {
                return Q()
            }

            function et() {
                return performance.now()
            }

            function nt() {
                return {
                    relative: et(),
                    timeStamp: tt()
                }
            }

            function rt() {
                return {
                    relative: 0,
                    timeStamp: at()
                }
            }

            function it(t, e) {
                return e - t
            }

            function ot(t) {
                return t - at()
            }

            function at() {
                return void 0 === Y && (Y = performance.timing.navigationStart), Y
            }
            var ut;

            function st(t, e, n, r) {
                var i = new Date;
                i.setTime(i.getTime() + n);
                var o = "expires=".concat(i.toUTCString()),
                    a = r && r.crossSite ? "none" : "strict",
                    u = r && r.domain ? ";domain=".concat(r.domain) : "",
                    s = r && r.secure ? ";secure" : "";
                document.cookie = "".concat(t, "=").concat(e, ";").concat(o, ";path=/;samesite=").concat(a).concat(u).concat(s)
            }

            function ct(t) {
                return P(document.cookie, t)
            }

            function ft(t, e) {
                st(t, "", 0, e)
            }

            function dt() {
                return Boolean(window._DATADOG_SYNTHETICS_INJECTS_RUM || ct("datadog-synthetics-injects-rum"))
            }

            function lt() {
                var t = L().DatadogEventBridge;
                if (t) return {
                    getAllowedWebViewHosts: function() {
                        return JSON.parse(t.getAllowedWebViewHosts())
                    },
                    send: function(e, n) {
                        t.send(JSON.stringify({
                            eventType: e,
                            event: n
                        }))
                    }
                }
            }

            function pt(t) {
                var e;
                void 0 === t && (t = null === (e = L().location) || void 0 === e ? void 0 : e.hostname);
                var n = lt();
                return !!n && n.getAllowedWebViewHosts().some((function(e) {
                    return t === e || (n = t, r = ".".concat(e), n.slice(-r.length) === r);
                    var n, r
                }))
            }
            var vt = "?";

            function mt(t) {
                var e = [],
                    n = kt(t, "stack"),
                    r = String(t);
                return n && N(n, r) && (n = n.slice(r.length)), n && n.split("\n").forEach((function(t) {
                    var n = function(t) {
                        var e = yt.exec(t);
                        if (!e) return;
                        var n = e[2] && 0 === e[2].indexOf("native"),
                            r = e[2] && 0 === e[2].indexOf("eval"),
                            i = bt.exec(e[2]);
                        r && i && (e[2] = i[1], e[3] = i[2], e[4] = i[3]);
                        return {
                            args: n ? [e[2]] : [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || vt,
                            line: e[3] ? +e[3] : void 0,
                            url: n ? void 0 : e[2]
                        }
                    }(t) || function(t) {
                        var e = wt.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[3] ? +e[3] : void 0,
                            func: vt,
                            line: e[2] ? +e[2] : void 0,
                            url: e[1]
                        }
                    }(t) || function(t) {
                        var e = St.exec(t);
                        if (!e) return;
                        return {
                            args: [],
                            column: e[4] ? +e[4] : void 0,
                            func: e[1] || vt,
                            line: +e[3],
                            url: e[2]
                        }
                    }(t) || function(t) {
                        var e = Ct.exec(t);
                        if (!e) return;
                        var n = e[3] && e[3].indexOf(" > eval") > -1,
                            r = Tt.exec(e[3]);
                        n && r && (e[3] = r[1], e[4] = r[2], e[5] = void 0);
                        return {
                            args: e[2] ? e[2].split(",") : [],
                            column: e[5] ? +e[5] : void 0,
                            func: e[1] || vt,
                            line: e[4] ? +e[4] : void 0,
                            url: e[3]
                        }
                    }(t);
                    n && (!n.func && n.line && (n.func = vt), e.push(n))
                })), {
                    message: kt(t, "message"),
                    name: kt(t, "name"),
                    stack: e
                }
            }
            var ht = "((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\w+\\.|\\/).*?)",
                gt = "(?::(\\d+))",
                yt = new RegExp("^\\s*at (.*?) ?\\(".concat(ht).concat(gt, "?").concat(gt, "?\\)?\\s*$"), "i"),
                bt = new RegExp("\\((\\S*)".concat(gt).concat(gt, "\\)"));
            var wt = new RegExp("^\\s*at ?".concat(ht).concat(gt, "?").concat(gt, "??\\s*$"), "i");
            var St = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var Ct = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                Tt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

            function kt(t, e) {
                if ("object" === typeof t && t && e in t) {
                    var n = t[e];
                    return "string" === typeof n ? n : void 0
                }
            }
            var Et, xt, _t = "agent",
                It = "console",
                At = "custom",
                Ot = "source",
                Rt = "report";

            function Nt(t, e, n, r) {
                return t && (void 0 !== t.message || e instanceof Error) ? {
                    message: t.message || "Empty message",
                    stack: Lt(t),
                    handlingStack: r,
                    type: t.name
                } : {
                    message: "".concat(n, " ").concat(C(e)),
                    stack: "No stack, consider using an instance of Error",
                    handlingStack: r,
                    type: t && t.name
                }
            }

            function Lt(t) {
                var e = Mt(t);
                return t.stack.forEach((function(t) {
                    var n = "?" === t.func ? "<anonymous>" : t.func,
                        r = t.args && t.args.length > 0 ? "(".concat(t.args.join(", "), ")") : "",
                        i = t.line ? ":".concat(t.line) : "",
                        o = t.line && t.column ? ":".concat(t.column) : "";
                    e += "\n  at ".concat(n).concat(r, " @ ").concat(t.url).concat(i).concat(o)
                })), e
            }

            function Mt(t) {
                return "".concat(t.name || "Error", ": ").concat(t.message)
            }

            function Pt() {
                var t, e = new Error;
                if (!e.stack) try {
                    throw e
                } catch (n) {}
                return d((function() {
                    var n = mt(e);
                    n.stack = n.stack.slice(2), t = Lt(n)
                })), t
            }

            function Dt(t) {
                return !!Et && Et.has(t)
            }

            function Bt() {
                return Et || new Set
            }

            function Ut(t) {
                return Ft(t, M(window.location)).href
            }

            function qt(t) {
                return M(Ft(t))
            }

            function Ft(t, e) {
                if (function() {
                        if (void 0 !== xt) return xt;
                        try {
                            var t = new URL("http://test/path");
                            return xt = "http://test/path" === t.href
                        } catch (go) {
                            xt = !1
                        }
                        return xt
                    }()) return void 0 !== e ? new URL(t, e) : new URL(t);
                if (void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '".concat(t, "'"));
                var n = document,
                    r = n.createElement("a");
                if (void 0 !== e) {
                    var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
                    i.href = e, n.head.appendChild(i), n.body.appendChild(r)
                }
                return r.href = t, r
            }
            var jt = "datadoghq.com",
                Vt = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "session-replay"
                },
                Ht = {
                    logs: "logs",
                    rum: "rum",
                    sessionReplay: "replay"
                };

            function zt(t, e, n) {
                var r = t.site,
                    i = void 0 === r ? jt : r,
                    o = t.clientToken,
                    a = i.split("."),
                    u = a.pop(),
                    s = "".concat(Vt[e], ".browser-intake-").concat(a.join("-"), ".").concat(u),
                    c = "https://".concat(s, "/api/v2/").concat(Ht[e]),
                    f = t.proxyUrl && Ut(t.proxyUrl);
                return {
                    build: function() {
                        var t = "ddsource=browser" + "&ddtags=".concat(encodeURIComponent(["sdk_version:".concat("4.19.1")].concat(n).join(","))) + "&dd-api-key=".concat(o) + "&dd-evp-origin-version=".concat(encodeURIComponent("4.19.1")) + "&dd-evp-origin=browser" + "&dd-request-id=".concat(y());
                        "rum" === e && (t += "&batch_time=".concat(tt()));
                        var r = "".concat(c, "?").concat(t);
                        return f ? "".concat(f, "?ddforward=").concat(encodeURIComponent(r)) : r
                    },
                    buildIntakeUrl: function() {
                        return f ? "".concat(f, "?ddforward") : c
                    },
                    endpointType: e
                }
            }
            var Gt = /[^a-z0-9_:./-]/;

            function Wt(t, e) {
                var n = 200 - t.length - 1;
                (e.length > n || Gt.test(e)) && i.warn("".concat(t, " value doesn't meet tag requirements and will be sanitized"));
                var r = e.replace(/,/g, "_");
                return "".concat(t, ":").concat(r)
            }

            function Xt(t) {
                var e = function(t) {
                        var e = t.env,
                            n = t.service,
                            r = t.version,
                            i = t.datacenter,
                            o = [];
                        return e && o.push(Wt("env", e)), n && o.push(Wt("service", n)), r && o.push(Wt("version", r)), i && o.push(Wt("datacenter", i)), o
                    }(t),
                    n = function(t, e) {
                        return {
                            logsEndpointBuilder: zt(t, "logs", e),
                            rumEndpointBuilder: zt(t, "rum", e),
                            sessionReplayEndpointBuilder: zt(t, "sessionReplay", e)
                        }
                    }(t, e),
                    r = A(n).map((function(t) {
                        return t.buildIntakeUrl()
                    })),
                    i = function(t, e, n) {
                        if (!t.replica) return;
                        var r = h({}, t, {
                                site: jt,
                                clientToken: t.replica.clientToken
                            }),
                            i = {
                                logsEndpointBuilder: zt(r, "logs", n),
                                rumEndpointBuilder: zt(r, "rum", n)
                            };
                        return e.push.apply(e, A(i).map((function(t) {
                            return t.buildIntakeUrl()
                        }))), h({
                            applicationId: t.replica.applicationId
                        }, i)
                    }(t, r, e);
                return h({
                    isIntakeUrl: function(t) {
                        return r.some((function(e) {
                            return 0 === t.indexOf(e)
                        }))
                    },
                    replica: i,
                    site: t.site || jt
                }, n)
            }
            var Yt = {
                ALLOW: "allow",
                MASK: "mask",
                MASK_USER_INPUT: "mask-user-input"
            };

            function Kt(t) {
                var e, n;
                if (t && t.clientToken)
                    if (void 0 === t.sampleRate || _(t.sampleRate)) {
                        var r;
                        if (void 0 === t.telemetrySampleRate || _(t.telemetrySampleRate)) return r = t.enableExperimentalFeatures, Array.isArray(r) && (Et || (Et = new Set(r)), r.filter((function(t) {
                            return "string" === typeof t
                        })).forEach((function(t) {
                            k(t, "-") && i.warn("please use snake case for '".concat(t, "'")), Et.add(t)
                        }))), h({
                            beforeSend: t.beforeSend && o(t.beforeSend, "beforeSend threw an error:"),
                            cookieOptions: $t(t),
                            sampleRate: null !== (e = t.sampleRate) && void 0 !== e ? e : 100,
                            telemetrySampleRate: null !== (n = t.telemetrySampleRate) && void 0 !== n ? n : 20,
                            service: t.service,
                            silentMultipleInit: !!t.silentMultipleInit,
                            batchBytesLimit: 16384,
                            eventRateLimiterThreshold: 3e3,
                            maxTelemetryEventsPerPage: 15,
                            flushTimeout: 3e4,
                            batchMessagesLimit: 50,
                            messageBytesLimit: 262144
                        }, Xt(t));
                        i.error("Telemetry Sample Rate should be a number between 0 and 100")
                    } else i.error("Sample Rate should be a number between 0 and 100");
                else i.error("Client Token is not configured, we will not send any data.")
            }

            function $t(t) {
                var e = {};
                return e.secure = function(t) {
                    return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
                }(t), e.crossSite = !!t.useCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = function() {
                    if (void 0 === ut) {
                        for (var t = "dd_site_test_".concat(y()), e = window.location.hostname.split("."), n = e.pop(); e.length && !ct(t);) n = "".concat(e.pop(), ".").concat(n), st(t, "test", p, {
                            domain: n
                        });
                        ft(t, {
                            domain: n
                        }), ut = n
                    }
                    return ut
                }()), e
            }
            var Jt = function() {
                function t(t) {
                    this.onFirstSubscribe = t, this.observers = []
                }
                return t.prototype.subscribe = function(t) {
                    var e = this;
                    return !this.observers.length && this.onFirstSubscribe && (this.onLastUnsubscribe = this.onFirstSubscribe() || void 0), this.observers.push(t), {
                        unsubscribe: function() {
                            e.observers = e.observers.filter((function(e) {
                                return t !== e
                            })), !e.observers.length && e.onLastUnsubscribe && e.onLastUnsubscribe()
                        }
                    }
                }, t.prototype.notify = function(t) {
                    this.observers.forEach((function(e) {
                        return e(t)
                    }))
                }, t
            }();

            function Zt() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = new Jt((function() {
                    var e = t.map((function(t) {
                        return t.subscribe((function(t) {
                            return n.notify(t)
                        }))
                    }));
                    return function() {
                        return e.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }
                }));
                return n
            }
            var Qt, te = ["https://www.datadoghq-browser-agent.com", "https://www.datad0g-browser-agent.com", "http://localhost", "<anonymous>"],
                ee = ["ddog-gov.com"],
                ne = {
                    maxEventsPerPage: 0,
                    sentEventCount: 0,
                    telemetryEnabled: !1
                };

            function re(t) {
                var e, n = new Jt;
                return ne.telemetryEnabled = b(t.telemetrySampleRate), Qt = function(r) {
                    !k(ee, t.site) && ne.telemetryEnabled && n.notify(function(t) {
                        return z({
                            type: "telemetry",
                            date: tt(),
                            service: "browser-sdk",
                            version: "4.19.1",
                            source: "browser",
                            _dd: {
                                format_version: 2
                            },
                            telemetry: t,
                            experimental_features: E(Bt())
                        }, void 0 !== e ? e() : {})
                    }(r))
                }, a = oe, h(ne, {
                    maxEventsPerPage: t.maxTelemetryEventsPerPage,
                    sentEventCount: 0
                }), {
                    setContextProvider: function(t) {
                        e = t
                    },
                    observable: n
                }
            }

            function ie(t, e) {
                l(r.debug, t, e), ae(h({
                    message: t,
                    status: "debug"
                }, e))
            }

            function oe(t) {
                ae(h({
                    status: "error"
                }, function(t) {
                    if (t instanceof Error) {
                        var e = mt(t);
                        return {
                            error: {
                                kind: e.name,
                                stack: Lt(ue(e))
                            },
                            message: e.message
                        }
                    }
                    return {
                        error: {
                            stack: "Not an instance of error"
                        },
                        message: "Uncaught ".concat(C(t))
                    }
                }(t)))
            }

            function ae(t) {
                Qt && ne.sentEventCount < ne.maxEventsPerPage && (ne.sentEventCount += 1, Qt(t))
            }

            function ue(t) {
                return t.stack = t.stack.filter((function(t) {
                    return !t.url || te.some((function(e) {
                        return N(t.url, e)
                    }))
                })), t
            }

            function se() {
                var t, e = window;
                if (e.Zone) {
                    var n = e.Zone.__symbol__;
                    if (!(t = e[n("MutationObserver")]) && e.MutationObserver) {
                        var r = new e.MutationObserver(S)[n("originalInstance")];
                        t = r && r.constructor
                    }
                }
                return t || (t = e.MutationObserver), t
            }
            var ce = "initial_document",
                fe = [
                    ["document", function(t) {
                        return ce === t
                    }],
                    ["xhr", function(t) {
                        return "xmlhttprequest" === t
                    }],
                    ["fetch", function(t) {
                        return "fetch" === t
                    }],
                    ["beacon", function(t) {
                        return "beacon" === t
                    }],
                    ["css", function(t, e) {
                        return /\.css$/i.test(e)
                    }],
                    ["js", function(t, e) {
                        return /\.js$/i.test(e)
                    }],
                    ["image", function(t, e) {
                        return k(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
                    }],
                    ["font", function(t, e) {
                        return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
                    }],
                    ["media", function(t, e) {
                        return k(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
                    }]
                ];

            function de(t) {
                var e = t.name;
                if (! function(t) {
                        try {
                            return !!Ft(t)
                        } catch (o) {
                            return !1
                        }
                    }(e)) return ie('Failed to construct URL for "'.concat(t.name, '"')), "other";
                for (var n = function(t) {
                        var e = Ft(t).pathname;
                        return "/" === e[0] ? e : "/".concat(e)
                    }(e), r = 0, i = fe; r < i.length; r++) {
                    var o = i[r],
                        a = o[0];
                    if ((0, o[1])(t.initiatorType, n)) return a
                }
                return "other"
            }

            function le() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = 1; n < t.length; n += 1)
                    if (t[n - 1] > t[n]) return !1;
                return !0
            }

            function pe(t) {
                var e = t.duration,
                    n = t.startTime,
                    r = t.responseEnd;
                return Z(0 === e && n < r ? it(n, r) : e)
            }

            function ve(t) {
                var e = me(t);
                if (e) {
                    var n = e.startTime,
                        r = e.fetchStart,
                        i = e.redirectStart,
                        o = e.redirectEnd,
                        a = e.domainLookupStart,
                        u = e.domainLookupEnd,
                        s = e.connectStart,
                        c = e.secureConnectionStart,
                        f = e.connectEnd,
                        d = e.requestStart,
                        l = e.responseStart,
                        p = {
                            download: ge(n, l, e.responseEnd),
                            first_byte: ge(n, d, l)
                        };
                    return f !== r && (p.connect = ge(n, s, f), le(s, c, f) && (p.ssl = ge(n, c, f))), u !== r && (p.dns = ge(n, a, u)), he(t) && (p.redirect = ge(n, i, o)), p
                }
            }

            function me(t) {
                if (le(t.startTime, t.fetchStart, t.domainLookupStart, t.domainLookupEnd, t.connectStart, t.connectEnd, t.requestStart, t.responseStart, t.responseEnd)) {
                    if (!he(t)) return t;
                    var e = t.redirectStart,
                        n = t.redirectEnd;
                    if (e < t.startTime && (e = t.startTime), n < t.startTime && (n = t.fetchStart), le(t.startTime, e, n, t.fetchStart)) return h({}, t, {
                        redirectEnd: n,
                        redirectStart: e
                    })
                }
            }

            function he(t) {
                return t.fetchStart !== t.startTime
            }

            function ge(t, e, n) {
                return {
                    duration: Z(it(e, n)),
                    start: Z(it(t, e))
                }
            }

            function ye(t) {
                if (t.startTime < t.responseStart) return t.decodedBodySize
            }

            function be(t, e) {
                return e && !t.isIntakeUrl(e)
            }
            var we, Se;

            function Ce(t) {
                var e = function(t) {
                    var e = t.querySelector("meta[name=dd-trace-id]"),
                        n = t.querySelector("meta[name=dd-trace-time]");
                    return Te(e && e.content, n && n.content)
                }(t) || function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.childNodes.length; e += 1) {
                            if (n = ke(t.childNodes[e])) return n
                        }
                        if (t.body)
                            for (e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                                var n, r = t.body.childNodes[e];
                                if (n = ke(r)) return n;
                                if (!Ee(r)) break
                            }
                    }(t);
                    if (!e) return;
                    return Te(P(e, "trace-id"), P(e, "trace-time"))
                }(t);
                if (e && !(e.traceTime <= Q() - 12e4)) return e.traceId
            }

            function Te(t, e) {
                var n = e && Number(e);
                if (t && n) return {
                    traceId: t,
                    traceTime: n
                }
            }

            function ke(t) {
                if (t && function(t) {
                        return "#comment" === t.nodeName
                    }(t)) {
                    var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
                    if (e) return e[1]
                }
            }

            function Ee(t) {
                return "#text" === t.nodeName
            }

            function xe() {
                return void 0 !== window.performance && "getEntries" in performance
            }

            function _e(t) {
                return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
            }

            function Ie(t, e) {
                var n;
                if (n = function(n) {
                        Oe(t, e, [n])
                    }, F("interactive", (function() {
                        var t, e = {
                            entryType: "resource",
                            initiatorType: ce,
                            traceId: Ce(document)
                        };
                        if (_e("navigation") && performance.getEntriesByType("navigation").length > 0) t = h(performance.getEntriesByType("navigation")[0].toJSON(), e);
                        else {
                            var r = Ae();
                            t = h(r, {
                                decodedBodySize: 0,
                                duration: r.responseEnd,
                                name: window.location.href,
                                startTime: 0
                            }, e)
                        }
                        n(t)
                    })), xe()) {
                    var r = performance.getEntries();
                    setTimeout(f((function() {
                        return Oe(t, e, r)
                    })))
                }
                if (window.PerformanceObserver) {
                    var i = f((function(n) {
                            return Oe(t, e, n.getEntries())
                        })),
                        o = ["resource", "navigation", "longtask", "paint"],
                        a = ["largest-contentful-paint", "first-input", "layout-shift"];
                    try {
                        a.forEach((function(t) {
                            new PerformanceObserver(i).observe({
                                type: t,
                                buffered: !0
                            })
                        }))
                    } catch (u) {
                        o.push.apply(o, a)
                    }
                    new PerformanceObserver(i).observe({
                        entryTypes: o
                    }), xe() && "addEventListener" in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                        performance.clearResourceTimings()
                    }))
                }
                _e("navigation") || function(t) {
                    function e() {
                        t(h(Ae(), {
                            entryType: "navigation"
                        }))
                    }
                    F("complete", (function() {
                        setTimeout(f(e))
                    }))
                }((function(n) {
                    Oe(t, e, [n])
                })), _e("first-input") || function(t) {
                    var e = Q(),
                        n = !1,
                        r = U(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                            if (t.cancelable) {
                                var e = {
                                    entryType: "first-input",
                                    processingStart: et(),
                                    startTime: t.timeStamp
                                };
                                "pointerdown" === t.type ? i(e) : o(e)
                            }
                        }), {
                            passive: !0,
                            capture: !0
                        }).stop;

                    function i(t) {
                        U(window, ["pointerup", "pointercancel"], (function(e) {
                            "pointerup" === e.type && o(t)
                        }), {
                            once: !0
                        })
                    }

                    function o(i) {
                        if (!n) {
                            n = !0, r();
                            var o = i.processingStart - i.startTime;
                            o >= 0 && o < Q() - e && t(i)
                        }
                    }
                }((function(n) {
                    Oe(t, e, [n])
                }))
            }

            function Ae() {
                var t = {},
                    e = performance.timing;
                for (var n in e)
                    if (I(e[n])) {
                        var r = n,
                            i = e[r];
                        t[r] = 0 === i ? 0 : ot(i)
                    }
                return t
            }

            function Oe(t, e, n) {
                var r = n.filter((function(t) {
                    return "resource" === t.entryType || "navigation" === t.entryType || "paint" === t.entryType || "longtask" === t.entryType || "largest-contentful-paint" === t.entryType || "first-input" === t.entryType || "layout-shift" === t.entryType
                })).filter((function(t) {
                    return ! function(t) {
                        return "navigation" === t.entryType && t.loadEventEnd <= 0
                    }(t) && ! function(t, e) {
                        return "resource" === e.entryType && !be(t, e.name)
                    }(e, t)
                }));
                r.length && t.notify(0, r)
            }

            function Re(t, e, n) {
                var r = 0,
                    i = !1;
                return {
                    isLimitReached: function() {
                        if (0 === r && setTimeout((function() {
                                r = 0
                            }), v), (r += 1) <= e || i) return i = !1, !1;
                        if (r === e + 1) {
                            i = !0;
                            try {
                                n({
                                    message: "Reached max number of ".concat(t, "s by minute: ").concat(e),
                                    source: _t,
                                    startClocks: nt()
                                })
                            } finally {
                                i = !1
                            }
                        }
                        return !0
                    }
                }
            }

            function Ne(t, e) {
                for (var n = t, r = 0, i = e.split("."); r < i.length; r++) {
                    var o = i[r];
                    if (!Me(n, o)) return;
                    n = n[o]
                }
                return n
            }

            function Le(t, e, n) {
                for (var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                    var a = i[o];
                    if (!Me(r, a)) return;
                    o !== i.length - 1 ? r = r[a] : r[a] = n
                }
            }

            function Me(t, e) {
                return "object" === typeof t && null !== t && Object.prototype.hasOwnProperty.call(t, e)
            }

            function Pe() {
                var t = function() {
                        var t = window._DATADOG_SYNTHETICS_PUBLIC_ID || ct("datadog-synthetics-public-id");
                        return "string" === typeof t ? t : void 0
                    }(),
                    e = function() {
                        var t = window._DATADOG_SYNTHETICS_RESULT_ID || ct("datadog-synthetics-result-id");
                        return "string" === typeof t ? t : void 0
                    }();
                if (t && e) return {
                    test_id: t,
                    result_id: e,
                    injected: dt()
                }
            }

            function De() {
                return we || (we = function() {
                    var t = new Jt((function() {
                        var e = m(f((function() {
                            t.notify(Be())
                        })), 200).throttled;
                        return B(window, "resize", e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }));
                    return t
                }()), we
            }

            function Be() {
                var t = window.visualViewport;
                return t ? {
                    width: Number(t.width * t.scale),
                    height: Number(t.height * t.scale)
                } : {
                    width: Number(window.innerWidth || 0),
                    height: Number(window.innerHeight || 0)
                }
            }

            function Ue() {
                if (Dt("clickmap")) return Se || (Se = Be(), De().subscribe((function(t) {
                    Se = t
                })).unsubscribe), {
                    viewport: Se
                }
            }
            var qe = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"],
                Fe = qe.concat(["context"]);

            function je(t, e, n, r, o, a, u, s) {
                var c, f = ((c = {}).error = Re("error", t.eventRateLimiterThreshold, s), c.action = Re("action", t.eventRateLimiterThreshold, s), c),
                    d = Pe(),
                    l = function() {
                        var t, e = null === (t = window.Cypress) || void 0 === t ? void 0 : t.env("traceId");
                        if ("string" === typeof e) return {
                            test_execution_id: e
                        }
                    }();
                e.subscribe(10, (function(s) {
                    var c, p = s.startTime,
                        v = s.rawRumEvent,
                        m = s.domainContext,
                        h = s.savedCommonContext,
                        g = s.customerContext,
                        y = r.findView(p),
                        b = o.findUrl(p),
                        w = n.findTrackedSession("view" !== v.type ? p : void 0);
                    if (w && y && b) {
                        var S = h || u(),
                            C = a.findActionId(p),
                            T = z({
                                _dd: {
                                    format_version: 2,
                                    drift: Math.round(Q() - (at() + performance.now())),
                                    session: {
                                        plan: w.hasPremiumPlan ? 2 : 1
                                    },
                                    browser_sdk_version: pt() ? "4.19.1" : void 0
                                },
                                application: {
                                    id: t.applicationId
                                },
                                date: tt(),
                                service: y.service || t.service,
                                version: y.version || t.version,
                                source: "browser",
                                session: {
                                    id: w.id,
                                    type: d ? "synthetics" : l ? "ci_test" : "user"
                                },
                                view: {
                                    id: y.id,
                                    name: y.name,
                                    url: b.url,
                                    referrer: b.referrer
                                },
                                action: (c = v, -1 !== ["error", "resource", "long_task"].indexOf(c.type) && C ? {
                                    id: C
                                } : void 0),
                                synthetics: d,
                                ci_test: l,
                                display: Ue()
                            }, v);
                        T.context = z(S.context, g), "has_replay" in T.session || (T.session.has_replay = S.hasReplay), R(S.user) || (T.usr = S.user),
                            function(t, e, n, r) {
                                var o;
                                if (e) {
                                    var a = function(t, e, n) {
                                        var r = H(t),
                                            i = n(r);
                                        return e.forEach((function(e) {
                                            var n = Ne(t, e),
                                                i = Ne(r, e),
                                                o = j(n),
                                                a = j(i);
                                            a === o ? Le(t, e, i) : "object" !== o || "undefined" !== a && "null" !== a || Le(t, e, {})
                                        })), i
                                    }(t, "view" === t.type ? qe : Fe, (function(t) {
                                        return e(t, n)
                                    }));
                                    if (!1 === a && "view" !== t.type) return !1;
                                    !1 === a && i.warn("Can't dismiss view events using beforeSend!")
                                }
                                return !(null === (o = r[t.type]) || void 0 === o ? void 0 : o.isLimitReached())
                            }(T, t.beforeSend, m, f) && (R(T.context) && delete T.context, e.notify(11, T))
                    }
                }))
            }
            var Ve = [];

            function He() {
                document.hasFocus() && ze();
                var t, e, n = (t = ze, B(window, "focus", (function(e) {
                        e.isTrusted && t()
                    }))).stop,
                    r = (e = Ge, B(window, "blur", (function(t) {
                        t.isTrusted && e()
                    }))).stop;
                return {
                    isInForegroundAt: We,
                    selectInForegroundPeriodsFor: Xe,
                    stop: function() {
                        Ve = [], n(), r()
                    }
                }
            }

            function ze() {
                if (!(Ve.length > 2500)) {
                    var t = Ve[Ve.length - 1],
                        e = et();
                    void 0 !== t && void 0 === t.end || Ve.push({
                        start: e
                    })
                }
            }

            function Ge() {
                if (0 !== Ve.length) {
                    var t = Ve[Ve.length - 1],
                        e = et();
                    void 0 === t.end && (t.end = e)
                }
            }

            function We(t) {
                for (var e = Ve.length - 1; e >= 0; e--) {
                    var n = Ve[e];
                    if (void 0 !== n.end && t > n.end) break;
                    if (t > n.start && (void 0 === n.end || t < n.end)) return !0
                }
                return !1
            }

            function Xe(t, e) {
                for (var n = t + e, r = [], i = Math.max(0, Ve.length - 500), o = Ve.length - 1; o >= i; o--) {
                    var a = Ve[o];
                    if (void 0 !== a.end && t > a.end) break;
                    if (!(n < a.start)) {
                        var u = t > a.start ? t : a.start,
                            s = it(t, u),
                            c = it(u, void 0 === a.end || n < a.end ? n : a.end);
                        r.unshift({
                            start: Z(s),
                            duration: Z(c)
                        })
                    }
                }
                return r
            }
            var Ye, Ke = function() {
                    function t() {
                        this.callbacks = {}
                    }
                    return t.prototype.notify = function(t, e) {
                        var n = this.callbacks[t];
                        n && n.forEach((function(t) {
                            return t(e)
                        }))
                    }, t.prototype.subscribe = function(t, e) {
                        var n = this;
                        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
                            unsubscribe: function() {
                                n.callbacks[t] = n.callbacks[t].filter((function(t) {
                                    return e !== t
                                }))
                            }
                        }
                    }, t
                }(),
                $e = 144e5,
                Je = 9e5,
                Ze = 1 / 0,
                Qe = function() {
                    function t(t) {
                        var e = this;
                        this.expireDelay = t, this.entries = [], this.clearOldContextsInterval = setInterval((function() {
                            return e.clearOldContexts()
                        }), 6e4)
                    }
                    return t.prototype.add = function(t, e) {
                        var n = this,
                            r = {
                                context: t,
                                startTime: e,
                                endTime: Ze,
                                remove: function() {
                                    var t = n.entries.indexOf(r);
                                    t >= 0 && n.entries.splice(t, 1)
                                },
                                close: function(t) {
                                    r.endTime = t
                                }
                            };
                        return this.entries.unshift(r), r
                    }, t.prototype.find = function(t) {
                        void 0 === t && (t = Ze);
                        for (var e = 0, n = this.entries; e < n.length; e++) {
                            var r = n[e];
                            if (r.startTime <= t) {
                                if (t <= r.endTime) return r.context;
                                break
                            }
                        }
                    }, t.prototype.closeActive = function(t) {
                        var e = this.entries[0];
                        e && e.endTime === Ze && e.close(t)
                    }, t.prototype.findAll = function(t) {
                        return void 0 === t && (t = Ze), this.entries.filter((function(e) {
                            return e.startTime <= t && t <= e.endTime
                        })).map((function(t) {
                            return t.context
                        }))
                    }, t.prototype.reset = function() {
                        this.entries = []
                    }, t.prototype.stop = function() {
                        clearInterval(this.clearOldContextsInterval)
                    }, t.prototype.clearOldContexts = function() {
                        for (var t = et() - this.expireDelay; this.entries.length > 0 && this.entries[this.entries.length - 1].endTime < t;) this.entries.pop()
                    }, t
                }();

            function tn(t, e, n) {
                var r = t[e],
                    i = n(r),
                    o = function() {
                        if ("function" === typeof i) return i.apply(this, arguments)
                    };
                return t[e] = o, {
                    stop: function() {
                        t[e] === o ? t[e] = r : i = r
                    }
                }
            }

            function en(t, e, n) {
                var r = n.before,
                    i = n.after;
                return tn(t, e, (function(t) {
                    return function() {
                        var e, n = arguments;
                        return r && d(r, this, n), "function" === typeof t && (e = t.apply(this, n)), i && d(i, this, n), e
                    }
                }))
            }

            function nn(t, e, n) {
                var r = Object.getOwnPropertyDescriptor(t, e);
                if (!r || !r.set || !r.configurable) return {
                    stop: S
                };
                var i = function(t, e) {
                        setTimeout(f((function() {
                            n(t, e)
                        })), 0)
                    },
                    o = function(t) {
                        r.set.call(this, t), i(this, t)
                    };
                return Object.defineProperty(t, e, {
                    set: o
                }), {
                    stop: function() {
                        var n;
                        (null === (n = Object.getOwnPropertyDescriptor(t, e)) || void 0 === n ? void 0 : n.set) === o ? Object.defineProperty(t, e, r) : i = S
                    }
                }
            }
            var rn, on = new WeakMap;

            function an() {
                return Ye || (Ye = function() {
                    var t = new Jt((function() {
                        var e = en(XMLHttpRequest.prototype, "open", {
                                before: un
                            }).stop,
                            n = en(XMLHttpRequest.prototype, "send", {
                                before: function() {
                                    sn.call(this, t)
                                }
                            }).stop,
                            r = en(XMLHttpRequest.prototype, "abort", {
                                before: cn
                            }).stop;
                        return function() {
                            e(), n(), r()
                        }
                    }));
                    return t
                }()), Ye
            }

            function un(t, e) {
                on.set(this, {
                    state: "open",
                    method: t,
                    url: Ut(String(e))
                })
            }

            function sn(t) {
                var e = this,
                    n = on.get(this);
                if (n) {
                    var r = n;
                    r.state = "start", r.startTime = et(), r.startClocks = nt(), r.isAborted = !1, r.xhr = this;
                    var i = !1,
                        o = en(this, "onreadystatechange", {
                            before: function() {
                                this.readyState === XMLHttpRequest.DONE && a()
                            }
                        }).stop,
                        a = f((function() {
                            if (e.removeEventListener("loadend", a), o(), !i) {
                                i = !0;
                                var u = n;
                                u.state = "complete", u.duration = it(r.startClocks.timeStamp, tt()), u.status = e.status, t.notify(g(u))
                            }
                        }));
                    this.addEventListener("loadend", a), t.notify(r)
                }
            }

            function cn() {
                var t = on.get(this);
                t && (t.isAborted = !0)
            }

            function fn() {
                return rn || (rn = function() {
                    var t = new Jt((function() {
                        if (window.fetch) return tn(window, "fetch", (function(e) {
                            return function(n, r) {
                                var i, o = d(dn, null, [t, n, r]);
                                return o ? (i = e.call(this, o.input, o.init), d(ln, null, [t, i, o])) : i = e.call(this, n, r), i
                            }
                        })).stop
                    }));
                    return t
                }()), rn
            }

            function dn(t, e, n) {
                var r = n && n.method || "object" === typeof e && e.method || "GET",
                    i = Ut("object" === typeof e && e.url || e),
                    o = {
                        state: "start",
                        init: n,
                        input: e,
                        method: r,
                        startClocks: nt(),
                        url: i
                    };
                return t.notify(o), o
            }

            function ln(t, e, n) {
                var r = function(e) {
                    var r = n;
                    r.state = "complete", r.duration = it(r.startClocks.timeStamp, tt()), "stack" in e || e instanceof Error ? (r.status = 0, r.isAborted = e instanceof DOMException && e.code === DOMException.ABORT_ERR, r.error = e, t.notify(r)) : "status" in e && (r.response = e, r.responseType = e.type, r.status = e.status, r.isAborted = !1, t.notify(r))
                };
                e.then(f(r), f(r))
            }

            function pn(t) {
                0 !== t.status || t.isAborted || (t.traceId = void 0, t.spanId = void 0, t.traceSampled = void 0)
            }

            function vn(t, e, n, r) {
                var i, o, a;
                void 0 !== mn() && function(t, e) {
                    return G(t.allowedTracingOrigins, qt(e))
                }(t, e.url) && n.findTrackedSession() && (e.traceId = new hn, e.spanId = new hn, e.traceSampled = !I(t.tracingSampleRate) || b(t.tracingSampleRate), r((i = e.traceId, o = e.spanId, a = e.traceSampled, {
                    "x-datadog-origin": "rum",
                    "x-datadog-parent-id": o.toDecimalString(),
                    "x-datadog-sampling-priority": a ? "1" : "0",
                    "x-datadog-trace-id": i.toDecimalString()
                })))
            }

            function mn() {
                return window.crypto || window.msCrypto
            }
            var hn = function() {
                    function t() {
                        this.buffer = new Uint8Array(8), mn().getRandomValues(this.buffer), this.buffer[0] = 127 & this.buffer[0]
                    }
                    return t.prototype.toString = function(t) {
                        var e = this.readInt32(0),
                            n = this.readInt32(4),
                            r = "";
                        do {
                            var i = e % t * 4294967296 + n;
                            e = Math.floor(e / t), n = Math.floor(i / t), r = (i % t).toString(t) + r
                        } while (e || n);
                        return r
                    }, t.prototype.toDecimalString = function() {
                        return this.toString(10)
                    }, t.prototype.readInt32 = function(t) {
                        return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
                    }, t
                }(),
                gn = 1;

            function yn(t, e, n) {
                var r = function(t, e) {
                    return {
                        clearTracingIfNeeded: pn,
                        traceFetch: function(n) {
                            return vn(t, n, e, (function(t) {
                                var e;
                                if (n.input instanceof Request && !(null === (e = n.init) || void 0 === e ? void 0 : e.headers)) n.input = new Request(n.input), Object.keys(t).forEach((function(e) {
                                    n.input.headers.append(e, t[e])
                                }));
                                else {
                                    n.init = g(n.init);
                                    var r = [];
                                    n.init.headers instanceof Headers ? n.init.headers.forEach((function(t, e) {
                                        r.push([e, t])
                                    })) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(t) {
                                        r.push(t)
                                    })) : n.init.headers && Object.keys(n.init.headers).forEach((function(t) {
                                        r.push([t, n.init.headers[t]])
                                    })), n.init.headers = r.concat(O(t))
                                }
                            }))
                        },
                        traceXhr: function(n, r) {
                            return vn(t, n, e, (function(t) {
                                Object.keys(t).forEach((function(e) {
                                    r.setRequestHeader(e, t[e])
                                }))
                            }))
                        }
                    }
                }(e, n);
                ! function(t, e, n) {
                    var r = an().subscribe((function(r) {
                        var i = r;
                        if (be(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceXhr(i, i.xhr), i.requestIndex = bn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "xhr",
                                    url: i.url,
                                    xhr: i.xhr
                                })
                        }
                    }))
                }(t, e, r),
                function(t, e, n) {
                    var r = fn().subscribe((function(r) {
                        var i = r;
                        if (be(e, i.url)) switch (i.state) {
                            case "start":
                                n.traceFetch(i), i.requestIndex = bn(), t.notify(5, {
                                    requestIndex: i.requestIndex,
                                    url: i.url
                                });
                                break;
                            case "complete":
                                n.clearTracingIfNeeded(i), t.notify(6, {
                                    duration: i.duration,
                                    method: i.method,
                                    requestIndex: i.requestIndex,
                                    responseType: i.responseType,
                                    spanId: i.spanId,
                                    startClocks: i.startClocks,
                                    status: i.status,
                                    traceId: i.traceId,
                                    traceSampled: i.traceSampled,
                                    type: "fetch",
                                    url: i.url,
                                    response: i.response,
                                    init: i.init,
                                    input: i.input
                                })
                        }
                    }))
                }(t, e, r)
            }

            function bn() {
                var t = gn;
                return gn += 1, t
            }

            function wn(t, e) {
                void 0 === e && (e = S);
                var n = {
                        errorCount: 0,
                        longTaskCount: 0,
                        resourceCount: 0,
                        actionCount: 0,
                        frustrationCount: 0
                    },
                    r = t.subscribe(11, (function(t) {
                        switch (t.type) {
                            case "error":
                                n.errorCount += 1, e(n);
                                break;
                            case "action":
                                n.actionCount += 1, t.action.frustration && (n.frustrationCount += t.action.frustration.type.length), e(n);
                                break;
                            case "long_task":
                                n.longTaskCount += 1, e(n);
                                break;
                            case "resource":
                                n.resourceCount += 1, e(n)
                        }
                    }));
                return {
                    stop: function() {
                        r.unsubscribe()
                    },
                    eventCounts: n
                }
            }

            function Sn(t, e, n, r, i) {
                var o = function(t, e, n) {
                    var r = new Jt((function() {
                        var i, o = [],
                            a = 0;
                        o.push(e.subscribe(c), t.subscribe(0, (function(t) {
                            t.some((function(t) {
                                return "resource" === t.entryType && !Cn(n, t.name)
                            })) && c()
                        })), t.subscribe(5, (function(t) {
                            Cn(n, t.url) || (void 0 === i && (i = t.requestIndex), a += 1, c())
                        })), t.subscribe(6, (function(t) {
                            Cn(n, t.url) || void 0 === i || t.requestIndex < i || (a -= 1, c())
                        })));
                        var u, s = (u = c, en(window, "open", {
                            before: u
                        })).stop;
                        return function() {
                            s(), o.forEach((function(t) {
                                return t.unsubscribe()
                            }))
                        };

                        function c() {
                            r.notify({
                                isBusy: a > 0
                            })
                        }
                    }));
                    return r
                }(t, e, n);
                return function(t, e, n) {
                    var r, i = !1,
                        o = setTimeout(f((function() {
                            return c({
                                hadActivity: !1
                            })
                        })), 100),
                        a = n && setTimeout(f((function() {
                            return c({
                                hadActivity: !0,
                                end: tt()
                            })
                        })), n),
                        u = t.subscribe((function(t) {
                            var e = t.isBusy;
                            clearTimeout(o), clearTimeout(r);
                            var n = tt();
                            e || (r = setTimeout(f((function() {
                                return c({
                                    hadActivity: !0,
                                    end: n
                                })
                            })), 100))
                        })),
                        s = function() {
                            i = !0, clearTimeout(o), clearTimeout(r), clearTimeout(a), u.unsubscribe()
                        };

                    function c(t) {
                        i || (s(), e(t))
                    }
                    return {
                        stop: s
                    }
                }(o, r, i)
            }

            function Cn(t, e) {
                return G(t.excludedActivityUrls, e)
            }
            var Tn = p;

            function kn(t, e) {
                var n, r = [],
                    i = 0;

                function o(t) {
                    t.stopObservable.subscribe(a), r.push(t), clearTimeout(n), n = setTimeout(f(u), 1e3)
                }

                function a() {
                    1 === i && r.every((function(t) {
                        return t.isStopped()
                    })) && (i = 2, e(r))
                }

                function u() {
                    clearTimeout(n), 0 === i && (i = 1, a())
                }
                return o(t), {
                    tryAppend: function(t) {
                        return 0 === i && (r.length > 0 && ! function(t, e) {
                            return t.target === e.target && (n = t, r = e, Math.sqrt(Math.pow(n.clientX - r.clientX, 2) + Math.pow(n.clientY - r.clientY, 2)) <= 100) && t.timeStamp - e.timeStamp <= Tn;
                            var n, r
                        }(r[r.length - 1].event, t.event) ? (u(), !1) : (o(t), !0))
                    },
                    stop: function() {
                        u()
                    }
                }
            }
            var En = "data-dd-action-name";

            function xn(t, e) {
                return _n(t, En) || e && _n(t, e) || Nn(t, e, On) || Nn(t, e, Rn) || ""
            }

            function _n(t, e) {
                var n;
                if (function() {
                        void 0 === An && (An = "closest" in HTMLElement.prototype);
                        return An
                    }()) n = t.closest("[".concat(e, "]"));
                else
                    for (var r = t; r;) {
                        if (r.hasAttribute(e)) {
                            n = r;
                            break
                        }
                        r = r.parentElement
                    }
                if (n) return Mn(Ln(n.getAttribute(e).trim()))
            }
            var In, An, On = [function(t, e) {
                    if (function() {
                            void 0 === In && (In = "labels" in HTMLInputElement.prototype);
                            return In
                        }()) {
                        if ("labels" in t && t.labels && t.labels.length > 0) return Pn(t.labels[0], e)
                    } else if (t.id) {
                        var n = t.ownerDocument && x(t.ownerDocument.querySelectorAll("label"), (function(e) {
                            return e.htmlFor === t.id
                        }));
                        return n && Pn(n, e)
                    }
                }, function(t) {
                    if ("INPUT" === t.nodeName) {
                        var e = t,
                            n = e.getAttribute("type");
                        if ("button" === n || "submit" === n || "reset" === n) return e.value
                    }
                }, function(t, e) {
                    if ("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return Pn(t, e)
                }, function(t) {
                    return t.getAttribute("aria-label")
                }, function(t, e) {
                    var n = t.getAttribute("aria-labelledby");
                    if (n) return n.split(/\s+/).map((function(e) {
                        return function(t, e) {
                            return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                        }(t, e)
                    })).filter((function(t) {
                        return Boolean(t)
                    })).map((function(t) {
                        return Pn(t, e)
                    })).join(" ")
                }, function(t) {
                    return t.getAttribute("alt")
                }, function(t) {
                    return t.getAttribute("name")
                }, function(t) {
                    return t.getAttribute("title")
                }, function(t) {
                    return t.getAttribute("placeholder")
                }, function(t, e) {
                    if ("options" in t && t.options.length > 0) return Pn(t.options[0], e)
                }],
                Rn = [function(t, e) {
                    return Pn(t, e)
                }];

            function Nn(t, e, n) {
                for (var r = t, i = 0; i <= 10 && r && "BODY" !== r.nodeName && "HTML" !== r.nodeName && "HEAD" !== r.nodeName;) {
                    for (var o = 0, a = n; o < a.length; o++) {
                        var u = (0, a[o])(r, e);
                        if ("string" === typeof u) {
                            var s = u.trim();
                            if (s) return Mn(Ln(s))
                        }
                    }
                    if ("FORM" === r.nodeName) break;
                    r = r.parentElement, i += 1
                }
            }

            function Ln(t) {
                return t.replace(/\s+/g, " ")
            }

            function Mn(t) {
                return t.length > 100 ? "".concat(D(t, 100), " [...]") : t
            }

            function Pn(t, e) {
                if (!t.isContentEditable) {
                    if ("innerText" in t) {
                        var n = t.innerText,
                            r = function(e) {
                                for (var r = t.querySelectorAll(e), i = 0; i < r.length; i += 1) {
                                    var o = r[i];
                                    if ("innerText" in o) {
                                        var a = o.innerText;
                                        a && a.trim().length > 0 && (n = n.replace(a, ""))
                                    }
                                }
                            };
                        return Boolean(document.documentMode) && r("script, style"), r("[".concat(En, "]")), e && r("[".concat(e, "]")), n
                    }
                    return t.textContent
                }
            }
            var Dn, Bn = ["data-dd-action-name", "data-testid", "data-test", "data-qa", "data-cy", "data-test-id", "data-qa-id", "data-testing", "data-component", "data-element", "data-source-file"];

            function Un(t, e) {
                var n = function() {
                    Dn || (Dn = Bn.map((function(t) {
                        return function(e) {
                            return Hn(t, e)
                        }
                    })));
                    return Dn
                }();
                return e && (n = [function(t) {
                    return Hn(e, t)
                }].concat(n)), {
                    selector: Fn(t, n.concat(jn({})), n.concat(Vn({}))),
                    selector_without_classes: Fn(t, n.concat(jn({})), n),
                    selector_without_body_classes: Fn(t, n.concat(jn({})), n.concat(Vn({
                        ignoreBody: !0
                    }))),
                    selector_without_generated_id_and_classes: Fn(t, n.concat(jn({
                        ignoreGeneratedValue: !0
                    })), n.concat(Vn({
                        ignoreGeneratedValue: !0
                    }))),
                    selector_with_only_first_class: Fn(t, n.concat(jn({})), n.concat(Vn({
                        keepOnlyFirst: !0
                    }))),
                    selector_all_together: Fn(t, n.concat(jn({
                        ignoreGeneratedValue: !0
                    })), n.concat(Vn({
                        ignoreGeneratedValue: !0,
                        ignoreBody: !0,
                        keepOnlyFirst: !0
                    })))
                }
            }

            function qn(t) {
                return /[0-9]/.test(t)
            }

            function Fn(t, e, n) {
                for (var r = [], i = t; i && "HTML" !== i.nodeName;) {
                    var o = Gn(i, e, Wn);
                    if (o) {
                        r.unshift(o);
                        break
                    }
                    var a = Gn(i, n, Xn);
                    a ? r.unshift(a) : r.unshift(zn(i)), i = i.parentElement
                }
                return r.join(">")
            }

            function jn(t) {
                var e = t.ignoreGeneratedValue;
                return function(t) {
                    if (t.id && (!e || !qn(t.id))) return "#".concat(W(t.id))
                }
            }

            function Vn(t) {
                var e = t.ignoreBody,
                    n = t.ignoreGeneratedValue,
                    r = t.keepOnlyFirst;
                return function(t) {
                    if ((!e || "BODY" !== t.tagName) && t.classList.length > 0) {
                        var i = E(t.classList);
                        return n && (i = i.filter((function(t) {
                            return !qn(t)
                        }))), r && (i = i.slice(0, 1)), "".concat(t.tagName).concat(i.sort().map((function(t) {
                            return ".".concat(W(t))
                        })).join(""))
                    }
                }
            }

            function Hn(t, e) {
                if (e.hasAttribute(t)) return "".concat(e.tagName, "[").concat(t, '="').concat(W(e.getAttribute(t)), '"]')
            }

            function zn(t) {
                for (var e, n = t.parentElement.firstElementChild, r = 0; n && !(n.tagName === t.tagName && (r += 1, n === t && (e = r), void 0 !== e && r > 1));) n = n.nextElementSibling;
                return 1 === r ? t.tagName : "".concat(t.tagName, ":nth-of-type(").concat(e, ")")
            }

            function Gn(t, e, n) {
                for (var r = 0, i = e; r < i.length; r++) {
                    var o = (0, i[r])(t);
                    if (o && n(t, o)) return o
                }
            }

            function Wn(t, e) {
                return 1 === t.ownerDocument.body.querySelectorAll(e).length
            }

            function Xn(t, e) {
                for (var n = 0; n < t.parentElement.children.length; n++) {
                    var r = t.parentElement.children[n];
                    if (r !== t && q(r, e)) return !1
                }
                return !0
            }

            function Yn() {
                var t = window.getSelection();
                return !t || t.isCollapsed
            }

            function Kn(t, e) {
                if (function(t) {
                        if (t.some((function(t) {
                                return t.getUserActivity().selection
                            }))) return !1;
                        for (var e = 0; e < t.length - 2; e += 1)
                            if (t[e + 3 - 1].event.timeStamp - t[e].event.timeStamp <= p) return !0;
                        return !1
                    }(t)) return e.addFrustration("rage_click"), t.some($n) && e.addFrustration("dead_click"), e.hasError && e.addFrustration("error_click"), {
                    isRage: !0
                };
                var n = t.some((function(t) {
                    return t.getUserActivity().selection
                }));
                return t.forEach((function(t) {
                    t.hasError && t.addFrustration("error_click"), $n(t) && !n && t.addFrustration("dead_click")
                })), {
                    isRage: !1
                }
            }

            function $n(t) {
                return !t.hasPageActivity && !t.getUserActivity().input && !q(t.event.target, 'input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]),textarea,select,canvas,a[href],a[href] *')
            }

            function Jn(t, e, n) {
                var r, i = new Qe(3e5),
                    o = new Jt,
                    a = n.trackFrustrations;
                t.subscribe(8, (function() {
                    i.reset()
                })), t.subscribe(9, s), t.subscribe(4, s);
                var u = function(t) {
                    var e, n = t.onClick,
                        r = !1,
                        i = !1,
                        o = [B(window, "mousedown", (function() {
                            r = !1, e = Yn()
                        }), {
                            capture: !0
                        }), B(window, "selectionchange", (function() {
                            e && Yn() || (r = !0)
                        }), {
                            capture: !0
                        }), B(window, "click", (function(t) {
                            if (t.target instanceof Element) {
                                var e = {
                                    selection: r,
                                    input: i
                                };
                                i || setTimeout(f((function() {
                                    e.input = i
                                }))), n({
                                    event: t,
                                    getUserActivity: function() {
                                        return e
                                    }
                                })
                            }
                        }), {
                            capture: !0
                        }), B(window, "input", (function() {
                            i = !0
                        }), {
                            capture: !0
                        })];
                    return {
                        stop: function() {
                            o.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }
                }({
                    onClick: function(u) {
                        var s = u.event,
                            c = u.getUserActivity;
                        if (!a && i.find()) return;
                        var f = function(t, e) {
                            var n, r;
                            if (Dt("clickmap")) {
                                var i = t.target.getBoundingClientRect();
                                n = h({
                                    width: Math.round(i.width),
                                    height: Math.round(i.height)
                                }, Un(t.target, e)), r = {
                                    x: Math.round(t.clientX - i.left),
                                    y: Math.round(t.clientY - i.top)
                                }
                            }
                            return {
                                type: "click",
                                target: n,
                                position: r,
                                name: xn(t.target, e),
                                event: t,
                                startClocks: nt()
                            }
                        }(s, n.actionNameAttribute);
                        if (!a && !f.name) return;
                        var d = Zn(t, i, c, f);
                        if (a && (!r || !r.tryAppend(d))) {
                            var l = d.clone();
                            r = kn(d, (function(t) {
                                ! function(t, e) {
                                    Kn(t, e).isRage ? (t.forEach((function(t) {
                                        return t.discard()
                                    })), e.stop(tt()), e.validate(t.map((function(t) {
                                        return t.event
                                    })))) : (e.discard(), t.forEach((function(t) {
                                        return t.validate()
                                    })))
                                }(t, l)
                            }))
                        }
                        var p = Sn(t, e, n, (function(t) {
                                t.hadActivity && t.end < f.startClocks.timeStamp ? d.discard() : (d.stop(t.hadActivity ? t.end : void 0), a || (t.hadActivity ? d.validate() : d.discard()))
                            }), 1e4).stop,
                            v = t.subscribe(4, (function(t) {
                                var e = t.endClocks;
                                d.stop(e.timeStamp)
                            })),
                            m = o.subscribe((function() {
                                d.stop()
                            }));
                        d.stopObservable.subscribe((function() {
                            v.unsubscribe(), p(), m.unsubscribe()
                        }))
                    }
                }).stop;
                return {
                    stop: function() {
                        s(), o.notify(), u()
                    },
                    actionContexts: {
                        findActionId: function(t) {
                            return a ? i.findAll(t) : i.find(t)
                        }
                    }
                };

                function s() {
                    r && r.stop()
                }
            }

            function Zn(t, e, n, r) {
                var i, o = y(),
                    a = e.add(o, r.startClocks.relative),
                    u = wn(t),
                    s = 0,
                    c = [],
                    f = new Jt;

                function d(t) {
                    0 === s && (s = 1, (i = t) ? a.close(ot(i)) : a.remove(), u.stop(), f.notify())
                }
                return {
                    event: r.event,
                    stop: d,
                    stopObservable: f,
                    get hasError() {
                        return u.eventCounts.errorCount > 0
                    },
                    get hasPageActivity() {
                        return void 0 !== i
                    },
                    getUserActivity: n,
                    addFrustration: function(t) {
                        c.push(t)
                    },
                    isStopped: function() {
                        return 1 === s || 2 === s
                    },
                    clone: function() {
                        return Zn(t, e, n, r)
                    },
                    validate: function(e) {
                        if (d(), 1 === s) {
                            var n = u.eventCounts,
                                a = n.resourceCount,
                                f = n.errorCount,
                                l = n.longTaskCount,
                                p = h({
                                    type: "click",
                                    duration: i && it(r.startClocks.timeStamp, i),
                                    id: o,
                                    frustrationTypes: c,
                                    counts: {
                                        resourceCount: a,
                                        errorCount: f,
                                        longTaskCount: l
                                    },
                                    events: null !== e && void 0 !== e ? e : [r.event]
                                }, r);
                            t.notify(1, p), s = 2
                        }
                    },
                    discard: function() {
                        d(), s = 2
                    }
                }
            }

            function Qn(t, e) {
                var n = tr(t) ? {
                        action: {
                            id: t.id,
                            loading_time: Z(t.duration),
                            frustration: {
                                type: t.frustrationTypes
                            },
                            error: {
                                count: t.counts.errorCount
                            },
                            long_task: {
                                count: t.counts.longTaskCount
                            },
                            resource: {
                                count: t.counts.resourceCount
                            }
                        },
                        _dd: {
                            action: {
                                target: t.target,
                                position: t.position
                            }
                        }
                    } : void 0,
                    r = tr(t) ? void 0 : t.context,
                    i = z({
                        action: {
                            id: y(),
                            target: {
                                name: t.name
                            },
                            type: t.type
                        },
                        date: t.startClocks.timeStamp,
                        type: "action"
                    }, n),
                    o = e.isInForegroundAt(t.startClocks.relative);
                return void 0 !== o && (i.view = {
                    in_foreground: o
                }), {
                    customerContext: r,
                    rawRumEvent: i,
                    startTime: t.startClocks.relative,
                    domainContext: tr(t) ? {
                        event: t.event,
                        events: t.events
                    } : {}
                }
            }

            function tr(t) {
                return "custom" !== t.type
            }
            var er = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

            function nr(t) {
                var e = function(t) {
                        return en(window, "onerror", {
                            before: function(e, n, r, i, o) {
                                var a;
                                if (o) a = mt(o), t(a, o);
                                else {
                                    var u, s = {
                                            url: n,
                                            column: i,
                                            line: r
                                        },
                                        c = e;
                                    if ("[object String]" === {}.toString.call(e)) {
                                        var f = er.exec(c);
                                        f && (u = f[1], c = f[2])
                                    }
                                    t(a = {
                                        name: u,
                                        message: "string" === typeof c ? c : void 0,
                                        stack: [s]
                                    }, e)
                                }
                            }
                        })
                    }(t).stop,
                    n = function(t) {
                        return en(window, "onunhandledrejection", {
                            before: function(e) {
                                var n = e.reason || "Empty reason",
                                    r = mt(n);
                                t(r, n)
                            }
                        })
                    }(t).stop;
                return {
                    stop: function() {
                        e(), n()
                    }
                }
            }
            var rr = {};

            function ir(t) {
                var e = t.map((function(t) {
                    return rr[t] || (rr[t] = function(t) {
                        var e = new Jt((function() {
                            var n = console[t];
                            return console[t] = function() {
                                    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                    n.apply(console, r);
                                    var o = Pt();
                                    d((function() {
                                        e.notify(or(r, t, o))
                                    }))
                                },
                                function() {
                                    console[t] = n
                                }
                        }));
                        return e
                    }(t)), rr[t]
                }));
                return Zt.apply(void 0, e)
            }

            function or(t, e, n) {
                var i, o = t.map((function(t) {
                    return function(t) {
                        if ("string" === typeof t) return t;
                        if (t instanceof Error) return Mt(mt(t));
                        return C(t, void 0, 2)
                    }(t)
                })).join(" ");
                if (e === r.error) {
                    var a = x(t, (function(t) {
                        return t instanceof Error
                    }));
                    i = a ? Lt(mt(a)) : void 0, o = "console error: ".concat(o)
                }
                return {
                    api: e,
                    message: o,
                    stack: i,
                    handlingStack: n
                }
            }
            var ar, ur, sr = "intervention",
                cr = "csp_violation";

            function fr(t) {
                var e = [];
                k(t, cr) && e.push(function() {
                    var t = new Jt((function() {
                        var e = f((function(e) {
                            t.notify(function(t) {
                                var e = cr,
                                    n = "'".concat(t.blockedURI, "' blocked by '").concat(t.effectiveDirective, "' directive");
                                return {
                                    type: cr,
                                    subtype: t.effectiveDirective,
                                    message: "".concat(e, ": ").concat(n),
                                    stack: dr(t.effectiveDirective, "".concat(n, ' of the policy "').concat(D(t.originalPolicy, 100, "..."), '"'), t.sourceFile, t.lineNumber, t.columnNumber)
                                }
                            }(e))
                        }));
                        return B(document, "securitypolicyviolation", e).stop
                    }));
                    return t
                }());
                var n = t.filter((function(t) {
                    return t !== cr
                }));
                return n.length && e.push(function(t) {
                    var e = new Jt((function() {
                        if (window.ReportingObserver) {
                            var n = f((function(t) {
                                    return t.forEach((function(t) {
                                        e.notify(function(t) {
                                            var e = t.type,
                                                n = t.body;
                                            return {
                                                type: e,
                                                subtype: n.id,
                                                message: "".concat(e, ": ").concat(n.message),
                                                stack: dr(n.id, n.message, n.sourceFile, n.lineNumber, n.columnNumber)
                                            }
                                        }(t))
                                    }))
                                })),
                                r = new window.ReportingObserver(n, {
                                    types: t,
                                    buffered: !0
                                });
                            return r.observe(),
                                function() {
                                    r.disconnect()
                                }
                        }
                    }));
                    return e
                }(n)), Zt.apply(void 0, e)
            }

            function dr(t, e, n, r, i) {
                return n && Lt({
                    name: t,
                    message: e,
                    stack: [{
                        func: "?",
                        url: n,
                        line: r,
                        column: i
                    }]
                })
            }

            function lr(t, e) {
                var n = new Jt;
                return function(t) {
                        var e = ir([r.error]).subscribe((function(e) {
                            return t.notify({
                                startClocks: nt(),
                                message: e.message,
                                stack: e.stack,
                                source: It,
                                handling: "handled",
                                handlingStack: e.handlingStack
                            })
                        }))
                    }(n),
                    function(t) {
                        nr((function(e, n) {
                            var r = Nt(e, n, "Uncaught"),
                                i = r.stack,
                                o = r.message,
                                a = r.type;
                            t.notify({
                                message: o,
                                stack: i,
                                type: a,
                                source: Ot,
                                startClocks: nt(),
                                originalError: n,
                                handling: "unhandled"
                            })
                        }))
                    }(n),
                    function(t) {
                        var e = fr([cr, sr]).subscribe((function(e) {
                            return t.notify({
                                startClocks: nt(),
                                message: e.message,
                                stack: e.stack,
                                type: e.subtype,
                                source: Rt,
                                handling: "unhandled"
                            })
                        }))
                    }(n), n.subscribe((function(e) {
                        return t.notify(12, {
                            error: e
                        })
                    })),
                    function(t, e) {
                        return t.subscribe(12, (function(n) {
                            var r = n.error,
                                i = n.customerContext,
                                o = n.savedCommonContext;
                            t.notify(10, h({
                                customerContext: i,
                                savedCommonContext: o
                            }, function(t, e) {
                                var n = {
                                        date: t.startClocks.timeStamp,
                                        error: {
                                            id: y(),
                                            message: t.message,
                                            source: t.source,
                                            stack: t.stack,
                                            handling_stack: t.handlingStack,
                                            type: t.type,
                                            handling: t.handling,
                                            source_type: "browser"
                                        },
                                        type: "error"
                                    },
                                    r = e.isInForegroundAt(t.startClocks.relative);
                                void 0 !== r && (n.view = {
                                    in_foreground: r
                                });
                                return {
                                    rawRumEvent: n,
                                    startTime: t.startClocks.relative,
                                    domainContext: {
                                        error: t.originalError
                                    }
                                }
                            }(r, e)))
                        })), {
                            addError: function(e, n) {
                                var r = e.error,
                                    i = e.handlingStack,
                                    o = e.startClocks,
                                    a = e.context,
                                    u = function(t, e, n) {
                                        var r = t instanceof Error ? mt(t) : void 0;
                                        return h({
                                            startClocks: n,
                                            source: At,
                                            originalError: t,
                                            handling: "handled"
                                        }, Nt(r, t, "Provided", e))
                                    }(r, i, o);
                                t.notify(12, {
                                    customerContext: a,
                                    savedCommonContext: n,
                                    error: u
                                })
                            }
                        }
                    }(t, e)
            }

            function pr(t) {
                if (performance && "getEntriesByName" in performance) {
                    var e = performance.getEntriesByName(t.url, "resource");
                    if (e.length && "toJSON" in e[0]) {
                        var n, r = e.map((function(t) {
                            return t.toJSON()
                        })).filter(me).filter((function(e) {
                            return function(t, e, n) {
                                var r = 1;
                                return t.startTime >= e - r && vr(t) <= n + r
                            }(e, t.startClocks.relative, vr({
                                startTime: t.startClocks.relative,
                                duration: t.duration
                            }))
                        }));
                        return 1 === r.length ? r[0] : 2 === r.length && vr((n = r)[0]) <= n[1].startTime ? r[1] : void 0
                    }
                }
            }

            function vr(t) {
                return t.startTime + t.duration
            }

            function mr(t, e) {
                t.subscribe(6, (function(n) {
                    t.notify(10, function(t, e) {
                        var n = "xhr" === t.type ? "xhr" : "fetch",
                            r = pr(t),
                            i = r ? $(r.startTime) : t.startClocks,
                            o = r ? gr(r) : void 0,
                            a = function(t, e) {
                                if (!(t.traceSampled && t.traceId && t.spanId)) return;
                                return {
                                    _dd: {
                                        span_id: t.spanId.toDecimalString(),
                                        trace_id: t.traceId.toDecimalString(),
                                        rule_psr: br(e)
                                    }
                                }
                            }(t, e),
                            u = z({
                                date: i.timeStamp,
                                resource: {
                                    id: y(),
                                    type: n,
                                    duration: Z(t.duration),
                                    method: t.method,
                                    status_code: t.status,
                                    url: t.url
                                },
                                type: "resource"
                            }, a, o);
                        return {
                            startTime: i.relative,
                            rawRumEvent: u,
                            domainContext: {
                                performanceEntry: r && yr(r),
                                xhr: t.xhr,
                                response: t.response,
                                requestInput: t.input,
                                requestInit: t.init,
                                error: t.error
                            }
                        }
                    }(n, e))
                })), t.subscribe(0, (function(n) {
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
                        "resource" === o.entryType && ("xmlhttprequest" !== (a = o).initiatorType && "fetch" !== a.initiatorType) && t.notify(10, hr(o, e))
                    }
                    var a
                }))
            }

            function hr(t, e) {
                var n = de(t),
                    r = gr(t),
                    i = function(t, e) {
                        if (!t.traceId) return;
                        return {
                            _dd: {
                                trace_id: t.traceId,
                                rule_psr: br(e)
                            }
                        }
                    }(t, e),
                    o = $(t.startTime),
                    a = z({
                        date: o.timeStamp,
                        resource: {
                            id: y(),
                            type: n,
                            url: t.name
                        },
                        type: "resource"
                    }, i, r);
                return {
                    startTime: o.relative,
                    rawRumEvent: a,
                    domainContext: {
                        performanceEntry: yr(t)
                    }
                }
            }

            function gr(t) {
                return {
                    resource: h({
                        duration: pe(t),
                        size: ye(t)
                    }, ve(t))
                }
            }

            function yr(t) {
                return "function" === typeof PerformanceEntry && t instanceof PerformanceEntry && t.toJSON(), t
            }

            function br(t) {
                return I(t.tracingSampleRate) ? t.tracingSampleRate / 100 : void 0
            }

            function wr(t) {
                return void 0 === t && (t = window), ar || ("hidden" === document.visibilityState ? ar = {
                    timeStamp: 0
                } : (ar = {
                    timeStamp: 1 / 0
                }, ur = U(t, ["pagehide", "visibilitychange"], (function(t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || (ar.timeStamp = t.timeStamp, ur())
                }), {
                    capture: !0
                }).stop)), ar
            }
            var Sr = 6e5;

            function Cr(t, e) {
                var n = {};

                function r(t) {
                    h(n, t), e(n)
                }
                var i = function(t, e) {
                        return {
                            stop: t.subscribe(0, (function(t) {
                                for (var n = 0, r = t; n < r.length; n++) {
                                    var i = r[n];
                                    "navigation" === i.entryType && e({
                                        domComplete: i.domComplete,
                                        domContentLoaded: i.domContentLoadedEventEnd,
                                        domInteractive: i.domInteractive,
                                        loadEvent: i.loadEventEnd,
                                        firstByte: i.responseStart >= 0 && i.responseStart <= et() ? i.responseStart : void 0
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, r).stop,
                    o = function(t, e) {
                        var n = wr();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && t.startTime < Sr
                                }));
                                r && e(r.startTime)
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        return r({
                            firstContentfulPaint: t
                        })
                    })).stop,
                    a = function(t, e, n) {
                        var r = wr(),
                            i = 1 / 0,
                            o = U(e, ["pointerdown", "keydown"], (function(t) {
                                i = t.timeStamp
                            }), {
                                capture: !0,
                                once: !0
                            }).stop,
                            a = t.subscribe(0, (function(t) {
                                var e = function(t, e) {
                                    for (var n = t.length - 1; n >= 0; n -= 1) {
                                        var r = t[n];
                                        if (e(r, n, t)) return r
                                    }
                                }(t, (function(t) {
                                    return "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && t.startTime < Sr
                                }));
                                e && n(e.startTime)
                            })).unsubscribe;
                        return {
                            stop: function() {
                                o(), a()
                            }
                        }
                    }(t, window, (function(t) {
                        r({
                            largestContentfulPaint: t
                        })
                    })).stop,
                    u = function(t, e) {
                        var n = wr();
                        return {
                            stop: t.subscribe(0, (function(t) {
                                var r = x(t, (function(t) {
                                    return "first-input" === t.entryType && t.startTime < n.timeStamp
                                }));
                                if (r) {
                                    var i = it(r.startTime, r.processingStart);
                                    e({
                                        firstInputDelay: i >= 0 ? i : 0,
                                        firstInputTime: r.startTime
                                    })
                                }
                            })).unsubscribe
                        }
                    }(t, (function(t) {
                        r({
                            firstInputDelay: t.firstInputDelay,
                            firstInputTime: t.firstInputTime
                        })
                    })).stop;
                return {
                    stop: function() {
                        i(), o(), a(), u()
                    }
                }
            }

            function Tr(t, e, n, r, i, o) {
                var a, u = {
                        eventCounts: {
                            errorCount: 0,
                            longTaskCount: 0,
                            resourceCount: 0,
                            actionCount: 0,
                            frustrationCount: 0
                        }
                    },
                    s = wn(t, (function(t) {
                        u.eventCounts = t, r()
                    })).stop,
                    c = function(t, e, n, r, i, o) {
                        var a = "initial_load" === r,
                            u = !0,
                            s = [];

                        function c() {
                            !u && !a && s.length > 0 && o(Math.max.apply(Math, s))
                        }
                        return {
                            stop: Sn(t, e, n, (function(t) {
                                u && (u = !1, t.hadActivity && s.push(it(i.timeStamp, t.end)), c())
                            })).stop,
                            setLoadEvent: function(t) {
                                a && (a = !1, s.push(t), c())
                            }
                        }
                    }(t, e, n, i, o, (function(t) {
                        u.loadingTime = t, r()
                    })),
                    f = c.stop,
                    d = c.setLoadEvent;
                return _e("layout-shift") ? (u.cumulativeLayoutShift = 0, a = function(t, e) {
                    var n = 0,
                        r = function() {
                            var t, e, n = 0;
                            return {
                                update: function(r) {
                                    void 0 === t || r.startTime - e >= p || r.startTime - t >= 5e3 ? (t = e = r.startTime, n = r.value) : (n += r.value, e = r.startTime)
                                },
                                value: function() {
                                    return n
                                }
                            }
                        }();
                    return {
                        stop: t.subscribe(0, (function(t) {
                            for (var i = 0, o = t; i < o.length; i++) {
                                var a = o[i];
                                "layout-shift" !== a.entryType || a.hadRecentInput || (r.update(a), r.value() > n && (n = r.value(), e(w(n, 4))))
                            }
                        })).unsubscribe
                    }
                }(t, (function(t) {
                    u.cumulativeLayoutShift = t, r()
                })).stop) : a = S, {
                    stop: function() {
                        s(), f(), a()
                    },
                    setLoadEvent: d,
                    viewMetrics: u
                }
            }

            function kr(t, e, n, r, i, o, a) {
                var u, s = function(i) {
                        var o = Er(e, n, r, t, "initial_load", rt(), i),
                            a = Cr(e, (function(t) {
                                o.updateTimings(t), o.scheduleUpdate()
                            })).stop;
                        return {
                            initialView: o,
                            stop: a
                        }
                    }(a),
                    c = s.stop,
                    d = s.initialView,
                    l = function() {
                        e.subscribe(8, (function() {
                            d.end(), d = p(void 0, {
                                name: d.name,
                                service: d.service,
                                version: d.version
                            })
                        })), e.subscribe(9, (function() {
                            d.end(), d.triggerUpdate()
                        }));
                        var t = window.setInterval(f((function() {
                            d.triggerUpdate()
                        })), 3e5);
                        return {
                            stop: function() {
                                clearInterval(t)
                            }
                        }
                    }().stop;

                function p(i, o) {
                    return Er(e, n, r, t, "route_change", i, o)
                }
                return o && (u = function(t) {
                    return t.subscribe((function(t) {
                        var e, n, r = t.oldLocation,
                            i = t.newLocation;
                        if (n = i, (e = r).pathname !== n.pathname || ! function(t) {
                                var e = t.substr(1);
                                return !!document.getElementById(e)
                            }(n.hash) && xr(n.hash) !== xr(e.hash)) return d.end(), d.triggerUpdate(), void(d = p())
                    }))
                }(i)), {
                    addTiming: function(t, e) {
                        void 0 === e && (e = tt()), d.addTiming(t, e), d.scheduleUpdate()
                    },
                    startView: function(t, e) {
                        d.end(e), d.triggerUpdate(), d = p(e, t)
                    },
                    stop: function() {
                        null === u || void 0 === u || u.unsubscribe(), c(), l(), d.end()
                    }
                }
            }

            function Er(t, e, n, r, o, a, u) {
                void 0 === a && (a = nt());
                var s, c, d, l, p = y(),
                    v = {},
                    b = {},
                    w = 0,
                    S = g(r);
                u && (c = u.name, d = u.service, l = u.version), t.notify(2, {
                    id: p,
                    name: c,
                    startClocks: a,
                    service: d,
                    version: l
                });
                var C = m(f(A), 3e3, {
                        leading: !1
                    }),
                    T = C.throttled,
                    k = C.cancel,
                    E = Tr(t, e, n, T, o, a),
                    x = E.setLoadEvent,
                    _ = E.stop,
                    I = E.viewMetrics;

                function A() {
                    w += 1;
                    var e = void 0 === s ? tt() : s.timeStamp;
                    t.notify(3, h({
                        customTimings: b,
                        documentVersion: w,
                        id: p,
                        name: c,
                        service: d,
                        version: l,
                        loadingType: o,
                        location: S,
                        startClocks: a,
                        timings: v,
                        duration: it(a.timeStamp, e),
                        isActive: void 0 === s
                    }, I))
                }
                return A(), {
                    name: c,
                    service: d,
                    version: l,
                    scheduleUpdate: T,
                    end: function(e) {
                        void 0 === e && (e = nt()), s = e, t.notify(4, {
                            endClocks: s
                        }), _()
                    },
                    triggerUpdate: function() {
                        k(), A()
                    },
                    updateTimings: function(t) {
                        v = t, void 0 !== t.loadEvent && x(t.loadEvent)
                    },
                    addTiming: function(t, e) {
                        var n = function(t) {
                            return t < 31536e6
                        }(e) ? e : it(a.timeStamp, e);
                        b[function(t) {
                            var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                            e !== t && i.warn("Invalid timing name: ".concat(t, ", sanitized to: ").concat(e));
                            return e
                        }(t)] = n
                    }
                }
            }

            function xr(t) {
                var e = t.indexOf("?");
                return e < 0 ? t : t.slice(0, e)
            }

            function _r(t, e, n, r, i, o, a, u) {
                return t.subscribe(3, (function(e) {
                    return t.notify(10, function(t, e, n) {
                        var r = n.getReplayStats(t.id),
                            i = {
                                _dd: {
                                    document_version: t.documentVersion,
                                    replay_stats: r
                                },
                                date: t.startClocks.timeStamp,
                                type: "view",
                                view: {
                                    action: {
                                        count: t.eventCounts.actionCount
                                    },
                                    frustration: {
                                        count: t.eventCounts.frustrationCount
                                    },
                                    cumulative_layout_shift: t.cumulativeLayoutShift,
                                    first_byte: Z(t.timings.firstByte),
                                    dom_complete: Z(t.timings.domComplete),
                                    dom_content_loaded: Z(t.timings.domContentLoaded),
                                    dom_interactive: Z(t.timings.domInteractive),
                                    error: {
                                        count: t.eventCounts.errorCount
                                    },
                                    first_contentful_paint: Z(t.timings.firstContentfulPaint),
                                    first_input_delay: Z(t.timings.firstInputDelay),
                                    first_input_time: Z(t.timings.firstInputTime),
                                    is_active: t.isActive,
                                    name: t.name,
                                    largest_contentful_paint: Z(t.timings.largestContentfulPaint),
                                    load_event: Z(t.timings.loadEvent),
                                    loading_time: Ir(Z(t.loadingTime)),
                                    loading_type: t.loadingType,
                                    long_task: {
                                        count: t.eventCounts.longTaskCount
                                    },
                                    resource: {
                                        count: t.eventCounts.resourceCount
                                    },
                                    time_spent: Z(t.duration),
                                    in_foreground_periods: e.selectInForegroundPeriodsFor(t.startClocks.relative, t.duration)
                                },
                                session: {
                                    has_replay: !!r || void 0
                                }
                            };
                        R(t.customTimings) || (i.view.custom_timings = function(t, e) {
                            for (var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                                var o = i[r];
                                n[o] = e(t[o])
                            }
                            return n
                        }(t.customTimings, Z));
                        return {
                            rawRumEvent: i,
                            startTime: t.startClocks.relative,
                            domainContext: {
                                location: t.location
                            }
                        }
                    }(e, o, a))
                })), kr(n, t, r, e, i, !e.trackViewsManually, u)
            }

            function Ir(t) {
                return I(t) && t < 0 ? void 0 : t
            }
            var Ar, Or = /^([a-z]+)=([a-z0-9-]+)$/,
                Rr = "&",
                Nr = "_dd_s",
                Lr = [];

            function Mr(t, e) {
                var n;
                if (void 0 === e && (e = 0), Ar || (Ar = t), t === Ar)
                    if (e >= 100) Br();
                    else {
                        var r, i = Fr();
                        if (Pr()) {
                            if (i.lock) return void Dr(t, e);
                            if (r = y(), i.lock = r, qr(i, t.options), (i = Fr()).lock !== r) return void Dr(t, e)
                        }
                        var o = t.process(i);
                        if (Pr() && (i = Fr()).lock !== r) Dr(t, e);
                        else {
                            if (o && Ur(o, t.options), Pr() && (!o || !jr(o))) {
                                if ((i = Fr()).lock !== r) return void Dr(t, e);
                                delete i.lock, qr(i, t.options), o = i
                            }
                            null === (n = t.after) || void 0 === n || n.call(t, o || i), Br()
                        }
                    }
                else Lr.push(t)
            }

            function Pr() {
                return !!window.chrome || /HeadlessChrome/.test(window.navigator.userAgent)
            }

            function Dr(t, e) {
                setTimeout(f((function() {
                    Mr(t, e + 1)
                })), 10)
            }

            function Br() {
                Ar = void 0;
                var t = Lr.shift();
                t && Mr(t)
            }

            function Ur(t, e) {
                jr(t) ? function(t) {
                    st(Nr, "", 0, t)
                }(e) : (t.expire = String(Q() + Je), qr(t, e))
            }

            function qr(t, e) {
                st(Nr, function(t) {
                    return O(t).map((function(t) {
                        var e = t[0],
                            n = t[1];
                        return "".concat(e, "=").concat(n)
                    })).join(Rr)
                }(t), Je, e)
            }

            function Fr() {
                var t = ct(Nr),
                    e = {};
                return function(t) {
                    return void 0 !== t && (-1 !== t.indexOf(Rr) || Or.test(t))
                }(t) && t.split(Rr).forEach((function(t) {
                    var n = Or.exec(t);
                    if (null !== n) {
                        var r = n[1],
                            i = n[2];
                        e[r] = i
                    }
                })), e
            }

            function jr(t) {
                return R(t)
            }

            function Vr(t, e, n) {
                var r = new Jt,
                    i = new Jt,
                    o = setInterval(f((function() {
                        Mr({
                            options: t,
                            process: function(t) {
                                return c(t) ? void 0 : {}
                            },
                            after: u
                        })
                    })), 1e3),
                    a = function() {
                        var t = Fr();
                        if (c(t)) return t;
                        return {}
                    }();

                function u(t) {
                    return c(t) || (t = {}), s() && (! function(t) {
                        return a.id !== t.id || a[e] !== t[e]
                    }(t) ? a = t : (a = {}, i.notify())), t
                }

                function s() {
                    return void 0 !== a[e]
                }

                function c(t) {
                    return (void 0 === t.created || Q() - Number(t.created) < $e) && (void 0 === t.expire || Q() < Number(t.expire))
                }
                return {
                    expandOrRenewSession: m(f((function() {
                        var i;
                        Mr({
                            options: t,
                            process: function(t) {
                                var r = u(t);
                                return i = function(t) {
                                    var r = n(t[e]),
                                        i = r.trackingType,
                                        o = r.isTracked;
                                    t[e] = i, o && !t.id && (t.id = y(), t.created = String(Q()));
                                    return o
                                }(r), r
                            },
                            after: function(t) {
                                i && !s() && function(t) {
                                    a = t, r.notify()
                                }(t), a = t
                            }
                        })
                    })), 1e3).throttled,
                    expandSession: function() {
                        Mr({
                            options: t,
                            process: function(t) {
                                return s() ? u(t) : void 0
                            }
                        })
                    },
                    getSession: function() {
                        return a
                    },
                    renewObservable: r,
                    expireObservable: i,
                    stop: function() {
                        clearInterval(o)
                    }
                }
            }
            var Hr = [];

            function zr(t, e, n) {
                ! function(t) {
                    var e = ct(Nr),
                        n = ct("_dd"),
                        r = ct("_dd_r"),
                        i = ct("_dd_l");
                    if (!e) {
                        var o = {};
                        n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), Ur(o, t)
                    }
                }(t);
                var r = Vr(t, e, n);
                Hr.push((function() {
                    return r.stop()
                }));
                var i = new Qe(144e5);

                function o() {
                    return {
                        id: r.getSession().id,
                        trackingType: r.getSession()[e]
                    }
                }
                return Hr.push((function() {
                        return i.stop()
                    })), r.renewObservable.subscribe((function() {
                        i.add(o(), et())
                    })), r.expireObservable.subscribe((function() {
                        i.closeActive(et())
                    })), r.expandOrRenewSession(), i.add(o(), rt().relative),
                    function(t) {
                        var e = U(window, ["click", "touchstart", "keydown", "scroll"], t, {
                            capture: !0,
                            passive: !0
                        }).stop;
                        Hr.push(e)
                    }((function() {
                        return r.expandOrRenewSession()
                    })),
                    function(t) {
                        var e = f((function() {
                                "visible" === document.visibilityState && t()
                            })),
                            n = B(document, "visibilitychange", e).stop;
                        Hr.push(n);
                        var r = setInterval(e, 6e4);
                        Hr.push((function() {
                            clearInterval(r)
                        }))
                    }((function() {
                        return r.expandSession()
                    })), {
                        findActiveSession: function(t) {
                            return i.find(t)
                        },
                        renewObservable: r.renewObservable,
                        expireObservable: r.expireObservable
                    }
            }

            function Gr(t, e) {
                var n = zr(t.cookieOptions, "rum", (function(e) {
                    return function(t, e) {
                        var n;
                        n = function(t) {
                            return "0" === t || "1" === t || "2" === t
                        }(e) ? e : b(t.sampleRate) ? b(t.premiumSampleRate) ? "1" : "2" : "0";
                        return {
                            trackingType: n,
                            isTracked: Wr(n)
                        }
                    }(t, e)
                }));
                return n.expireObservable.subscribe((function() {
                    e.notify(7)
                })), n.renewObservable.subscribe((function() {
                    e.notify(8)
                })), {
                    findTrackedSession: function(t) {
                        var e = n.findActiveSession(t);
                        if (e && Wr(e.trackingType)) return {
                            id: e.id,
                            hasPremiumPlan: "1" === e.trackingType,
                            hasLitePlan: "2" === e.trackingType
                        }
                    }
                }
            }

            function Wr(t) {
                return "2" === t || "1" === t
            }
            var Xr = /[^\u0000-\u007F]/,
                Yr = function() {
                    function t(t, e, n, r, i, o) {
                        void 0 === o && (o = S), this.request = t, this.batchMessagesLimit = e, this.batchBytesLimit = n, this.messageBytesLimit = r, this.flushTimeout = i, this.beforeUnloadCallback = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, this.setupFlushOnExit(), this.flushPeriodically()
                    }
                    return t.prototype.add = function(t) {
                        this.addOrUpdate(t)
                    }, t.prototype.upsert = function(t, e) {
                        this.addOrUpdate(t, e)
                    }, t.prototype.flush = function(t) {
                        if (void 0 === t && (t = this.request.send), 0 !== this.bufferMessagesCount) {
                            var e = this.pushOnlyBuffer.concat(A(this.upsertBuffer)),
                                n = this.bufferBytesCount;
                            this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesCount = 0, this.bufferMessagesCount = 0, t({
                                data: e.join("\n"),
                                bytesCount: n
                            })
                        }
                    }, t.prototype.flushOnExit = function() {
                        this.flush(this.request.sendOnExit)
                    }, t.prototype.computeBytesCount = function(t) {
                        return Xr.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
                    }, t.prototype.addOrUpdate = function(t, e) {
                        var n = this.process(t),
                            r = n.processedMessage,
                            o = n.messageBytesCount;
                        o >= this.messageBytesLimit ? i.warn("Discarded a message whose size was bigger than the maximum allowed size ".concat(this.messageBytesLimit, "KB.")) : (this.hasMessageFor(e) && this.remove(e), this.willReachedBytesLimitWith(o) && this.flush(), this.push(r, o, e), this.isFull() && this.flush())
                    }, t.prototype.process = function(t) {
                        var e = C(t);
                        return {
                            processedMessage: e,
                            messageBytesCount: this.computeBytesCount(e)
                        }
                    }, t.prototype.push = function(t, e, n) {
                        this.bufferMessagesCount > 0 && (this.bufferBytesCount += 1), void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t), this.bufferBytesCount += e, this.bufferMessagesCount += 1
                    }, t.prototype.remove = function(t) {
                        var e = this.upsertBuffer[t];
                        delete this.upsertBuffer[t];
                        var n = this.computeBytesCount(e);
                        this.bufferBytesCount -= n, this.bufferMessagesCount -= 1, this.bufferMessagesCount > 0 && (this.bufferBytesCount -= 1)
                    }, t.prototype.hasMessageFor = function(t) {
                        return void 0 !== t && void 0 !== this.upsertBuffer[t]
                    }, t.prototype.willReachedBytesLimitWith = function(t) {
                        return this.bufferBytesCount + t + 1 >= this.batchBytesLimit
                    }, t.prototype.isFull = function() {
                        return this.bufferMessagesCount === this.batchMessagesLimit || this.bufferBytesCount >= this.batchBytesLimit
                    }, t.prototype.flushPeriodically = function() {
                        var t = this;
                        setTimeout(f((function() {
                            t.flush(), t.flushPeriodically()
                        })), this.flushTimeout)
                    }, t.prototype.setupFlushOnExit = function() {
                        var t = this;
                        navigator.sendBeacon && (B(window, "beforeunload", this.beforeUnloadCallback), B(document, "visibilitychange", (function() {
                            "hidden" === document.visibilityState && t.flushOnExit()
                        })), B(window, "beforeunload", (function() {
                            return t.flushOnExit()
                        })))
                    }, t
                }(),
                Kr = 3145728;

            function $r(t, e, n, r, i) {
                0 === e.transportStatus && 0 === e.queuedPayloads.size() && e.bandwidthMonitor.canHandle(t) ? Zr(t, e, n, {
                    onSuccess: function() {
                        return Qr(0, e, n, r, i)
                    },
                    onFailure: function() {
                        e.queuedPayloads.enqueue(t), Jr(e, n, r, i)
                    }
                }) : e.queuedPayloads.enqueue(t)
            }

            function Jr(t, e, n, r) {
                2 === t.transportStatus && setTimeout(f((function() {
                    Zr(t.queuedPayloads.first(), t, e, {
                        onSuccess: function() {
                            t.queuedPayloads.dequeue(), 0 !== t.lastFailureStatus && ie("resuming after transport down", {
                                failureStatus: t.lastFailureStatus
                            }), t.currentBackoffTime = 1e3, Qr(1, t, e, n, r)
                        },
                        onFailure: function() {
                            t.currentBackoffTime = Math.min(6e4, 2 * t.currentBackoffTime), Jr(t, e, n, r)
                        }
                    })
                })), t.currentBackoffTime)
            }

            function Zr(t, e, n, r) {
                var i = r.onSuccess,
                    o = r.onFailure;
                e.bandwidthMonitor.add(t), n(t, (function(n) {
                    e.bandwidthMonitor.remove(t), ! function(t) {
                        return 0 === t.status || 408 === t.status || 429 === t.status || t.status >= 500
                    }(n) ? (e.transportStatus = 0, i()) : (e.transportStatus = e.bandwidthMonitor.ongoingRequestCount > 0 ? 1 : 2, e.lastFailureStatus = n.status, o())
                }))
            }

            function Qr(t, e, n, r, i) {
                0 === t && e.queuedPayloads.isFull() && !e.queueFullReported && (i({
                    message: "Reached max ".concat(r, " events size queued for upload: ").concat(3, "MiB"),
                    source: _t,
                    startClocks: nt()
                }), e.queueFullReported = !0);
                var o = e.queuedPayloads;
                for (e.queuedPayloads = ti(); o.size() > 0;) $r(o.dequeue(), e, n, r, i)
            }

            function ti() {
                var t = [];
                return {
                    bytesCount: 0,
                    enqueue: function(e) {
                        this.isFull() || (t.push(e), this.bytesCount += e.bytesCount)
                    },
                    first: function() {
                        return t[0]
                    },
                    dequeue: function() {
                        var e = t.shift();
                        return e && (this.bytesCount -= e.bytesCount), e
                    },
                    size: function() {
                        return t.length
                    },
                    isFull: function() {
                        return this.bytesCount >= Kr
                    }
                }
            }

            function ei(t, e, n) {
                var r = {
                        transportStatus: 0,
                        lastFailureStatus: 0,
                        currentBackoffTime: 1e3,
                        bandwidthMonitor: {
                            ongoingRequestCount: 0,
                            ongoingByteCount: 0,
                            canHandle: function(t) {
                                return 0 === this.ongoingRequestCount || this.ongoingByteCount + t.bytesCount <= 81920 && this.ongoingRequestCount < 32
                            },
                            add: function(t) {
                                this.ongoingRequestCount += 1, this.ongoingByteCount += t.bytesCount
                            },
                            remove: function(t) {
                                this.ongoingRequestCount -= 1, this.ongoingByteCount -= t.bytesCount
                            }
                        },
                        queuedPayloads: ti(),
                        queueFullReported: !1
                    },
                    i = function(n, r) {
                        return ri(t, e, n, r)
                    };
                return {
                    send: function(o) {
                        Dt("retry") ? $r(o, r, i, t.endpointType, n) : ri(t, e, o)
                    },
                    sendOnExit: function(n) {
                        ! function(t, e, n) {
                            var r = n.data,
                                i = n.bytesCount,
                                o = t.build();
                            if (navigator.sendBeacon && i < e) try {
                                if (navigator.sendBeacon(o, r)) return
                            } catch (a) {
                                ! function(t) {
                                    ni || (ni = !0, oe(t))
                                }(a)
                            }
                            ii(o, r)
                        }(t, e, n)
                    }
                }
            }
            var ni = !1;

            function ri(t, e, n, r) {
                var i = n.data,
                    o = n.bytesCount,
                    a = t.build();
                (function() {
                    try {
                        return window.Request && "keepalive" in new Request("http://a")
                    } catch (n) {
                        return !1
                    }
                })() && o < e ? fetch(a, {
                    method: "POST",
                    body: i,
                    keepalive: !0
                }).then(f((function(t) {
                    return null === r || void 0 === r ? void 0 : r({
                        status: t.status
                    })
                })), f((function() {
                    ii(a, i, r)
                }))) : ii(a, i, r)
            }

            function ii(t, e, n) {
                var r = new XMLHttpRequest;
                r.open("POST", t, !0), r.send(e), r.addEventListener("loadend", f((function() {
                    null === n || void 0 === n || n({
                        status: r.status
                    })
                })))
            }

            function oi(t, e, n, r) {
                var i = function(t, e, n) {
                    var r, i = a(t.rumEndpointBuilder, (function() {
                            return e.notify(9)
                        })),
                        o = t.replica;
                    void 0 !== o && (r = a(o.rumEndpointBuilder));

                    function a(e, r) {
                        return new Yr(ei(e, t.batchBytesLimit, n), t.batchMessagesLimit, t.batchBytesLimit, t.messageBytesLimit, t.flushTimeout, r)
                    }

                    function u(t) {
                        return z(t, {
                            application: {
                                id: o.applicationId
                            }
                        })
                    }
                    return {
                        add: function(t, e) {
                            void 0 === e && (e = !0), i.add(t), r && e && r.add(u(t))
                        },
                        upsert: function(t, e) {
                            i.upsert(t, e), r && r.upsert(u(t), e)
                        }
                    }
                }(t, e, r);
                e.subscribe(11, (function(t) {
                    "view" === t.type ? i.upsert(t, t.view.id) : i.add(t)
                })), n.subscribe((function(e) {
                    return i.add(e, function(t) {
                        return "datad0g.com" === t.site
                    }(t))
                }))
            }

            function ai(t) {
                var e = g(t),
                    n = new Jt((function() {
                        var t, e = function(t) {
                                var e = en(history, "pushState", {
                                        after: t
                                    }).stop,
                                    n = en(history, "replaceState", {
                                        after: t
                                    }).stop,
                                    r = B(window, "popstate", t).stop;
                                return {
                                    stop: function() {
                                        e(), n(), r()
                                    }
                                }
                            }(r).stop,
                            n = (t = r, B(window, "hashchange", t)).stop;
                        return function() {
                            e(), n()
                        }
                    }));

                function r() {
                    if (e.href !== t.href) {
                        var r = g(t);
                        n.notify({
                            newLocation: r,
                            oldLocation: e
                        }), e = r
                    }
                }
                return n
            }
            var ui = 2,
                si = 3,
                ci = 4,
                fi = 6,
                di = 7,
                li = 8,
                pi = 9,
                vi = 0,
                mi = 1,
                hi = 2,
                gi = 3,
                yi = 4,
                bi = 0,
                wi = 1,
                Si = 2,
                Ci = 3,
                Ti = 4,
                ki = 5,
                Ei = 6,
                xi = 7,
                _i = 8,
                Ii = 0,
                Ai = 1,
                Oi = 2,
                Ri = 3,
                Ni = 4,
                Li = 5,
                Mi = 6,
                Pi = 7,
                Di = 9,
                Bi = 0,
                Ui = 1,
                qi = {
                    IGNORE: "ignore",
                    HIDDEN: "hidden",
                    ALLOW: Yt.ALLOW,
                    MASK: Yt.MASK,
                    MASK_USER_INPUT: Yt.MASK_USER_INPUT
                },
                Fi = "data-dd-privacy",
                ji = "hidden",
                Vi = "***",
                Hi = {
                    INPUT: !0,
                    OUTPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0,
                    OPTION: !0,
                    DATALIST: !0,
                    OPTGROUP: !0
                };

            function zi(t, e) {
                var n = t.parentNode ? zi(t.parentNode, e) : e;
                return Gi(Wi(t), n)
            }

            function Gi(t, e) {
                switch (e) {
                    case qi.HIDDEN:
                    case qi.IGNORE:
                        return e
                }
                switch (t) {
                    case qi.ALLOW:
                    case qi.MASK:
                    case qi.MASK_USER_INPUT:
                    case qi.HIDDEN:
                    case qi.IGNORE:
                        return t;
                    default:
                        return e
                }
            }

            function Wi(t) {
                if (function(t) {
                        return t.nodeType === t.ELEMENT_NODE
                    }(t)) {
                    var e = t.getAttribute(Fi);
                    if ("BASE" === t.tagName) return qi.ALLOW;
                    if ("INPUT" === t.tagName) {
                        var n = t;
                        if ("password" === n.type || "email" === n.type || "tel" === n.type) return qi.MASK;
                        if ("hidden" === n.type) return qi.MASK;
                        var r = n.getAttribute("autocomplete");
                        if (r && 0 === r.indexOf("cc-")) return qi.MASK
                    }
                    return e === ji || t.classList.contains("dd-privacy-hidden") ? qi.HIDDEN : "mask" === e || t.classList.contains("dd-privacy-mask") ? qi.MASK : "mask-user-input" === e || t.classList.contains("dd-privacy-mask-user-input") ? qi.MASK_USER_INPUT : "allow" === e || t.classList.contains("dd-privacy-allow") ? qi.ALLOW : function(t) {
                        if ("SCRIPT" === t.nodeName) return !0;
                        if ("LINK" === t.nodeName) {
                            return "preload" === (n = i("rel")) && "script" === i("as") || "shortcut icon" === n || "icon" === n
                        }
                        if ("META" === t.nodeName) {
                            var e = i("name"),
                                n = i("rel"),
                                r = i("property");
                            return /^msapplication-tile(image|color)$/.test(e) || "application-name" === e || "icon" === n || "apple-touch-icon" === n || "shortcut icon" === n || "keywords" === e || "description" === e || /^(og|twitter|fb):/.test(r) || /^(og|twitter):/.test(e) || "pinterest" === e || "robots" === e || "googlebot" === e || "bingbot" === e || t.hasAttribute("http-equiv") || "author" === e || "generator" === e || "framework" === e || "publisher" === e || "progid" === e || /^article:/.test(r) || /^product:/.test(r) || "google-site-verification" === e || "yandex-verification" === e || "csrf-token" === e || "p:domain_verify" === e || "verify-v1" === e || "verification" === e || "shopify-checkout-api-token" === e
                        }

                        function i(e) {
                            return (t.getAttribute(e) || "").toLowerCase()
                        }
                        return !1
                    }(t) ? qi.IGNORE : void 0
                }
            }

            function Xi(t, e) {
                switch (e) {
                    case qi.MASK:
                    case qi.HIDDEN:
                    case qi.IGNORE:
                        return !0;
                    case qi.MASK_USER_INPUT:
                        return function(t) {
                            return t.nodeType === t.TEXT_NODE
                        }(t) ? Yi(t.parentNode) : Yi(t);
                    default:
                        return !1
                }
            }

            function Yi(t) {
                if (!t || t.nodeType !== t.ELEMENT_NODE) return !1;
                var e = t;
                if ("INPUT" === e.tagName) switch (e.type) {
                    case "button":
                    case "color":
                    case "reset":
                    case "submit":
                        return !1
                }
                return !!Hi[e.tagName]
            }

            function Ki(t, e, n) {
                var r, i = null === (r = t.parentElement) || void 0 === r ? void 0 : r.tagName,
                    o = t.textContent || "";
                if (!e || o.trim()) {
                    var a = "STYLE" === i || void 0;
                    if ("SCRIPT" === i) o = Vi;
                    else if (n === qi.HIDDEN) o = Vi;
                    else if (Xi(t, n) && !a)
                        if ("DATALIST" === i || "SELECT" === i || "OPTGROUP" === i) {
                            if (!o.trim()) return
                        } else o = "OPTION" === i ? Vi : o.replace(/\S/g, "x");
                    return o
                }
            }
            var $i = new WeakMap;

            function Ji(t) {
                return $i.has(t)
            }

            function Zi(t) {
                return $i.get(t)
            }

            function Qi(t, e) {
                var n = t.tagName,
                    r = t.value;
                if (Xi(t, e)) {
                    var i = t.type;
                    if ("INPUT" === n && ("button" === i || "submit" === i || "reset" === i)) return r;
                    if (!r || "OPTION" === n) return;
                    return Vi
                }
                return "OPTION" === n || "SELECT" === n ? t.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0
            }

            function to(t) {
                return Boolean(t.changedTouches)
            }

            function eo(t, e) {
                Array.prototype.forEach.call(t, e)
            }

            function no(t, e) {
                return {
                    data: h({
                        source: t
                    }, e),
                    type: si,
                    timestamp: tt()
                }
            }

            function ro(t) {
                for (var e = [], n = t; n.parentRule;) {
                    var r = Array.from(n.parentRule.cssRules).indexOf(n);
                    e.unshift(r), n = n.parentRule
                }
                if (n.parentStyleSheet) {
                    var i = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
                    return e.unshift(i), e
                }
            }

            function io(t, e, n) {
                return oo(t, {
                    serializationContext: n,
                    parentNodePrivacyLevel: e.defaultPrivacyLevel,
                    configuration: e
                })
            }

            function oo(t, e) {
                var n = function(t, e) {
                    switch (t.nodeType) {
                        case t.DOCUMENT_NODE:
                            return function(t, e) {
                                return {
                                    type: vi,
                                    childNodes: ao(t, e)
                                }
                            }(t, e);
                        case t.DOCUMENT_TYPE_NODE:
                            return {
                                type: mi,
                                name: (n = t).name,
                                publicId: n.publicId,
                                systemId: n.systemId
                            };
                        case t.ELEMENT_NODE:
                            return function(t, e) {
                                var n, r = fo(t.tagName),
                                    i = (a = t, "svg" === a.tagName || a instanceof SVGElement || void 0),
                                    o = Gi(Wi(t), e.parentNodePrivacyLevel);
                                var a;
                                if (o === qi.HIDDEN) {
                                    var u = t.getBoundingClientRect(),
                                        s = u.width,
                                        c = u.height;
                                    return {
                                        type: hi,
                                        tagName: r,
                                        attributes: (n = {
                                            rr_width: "".concat(s, "px"),
                                            rr_height: "".concat(c, "px")
                                        }, n[Fi] = ji, n),
                                        childNodes: [],
                                        isSVG: i
                                    }
                                }
                                if (o === qi.IGNORE) return;
                                var f = function(t, e, n) {
                                        var r;
                                        if (e === qi.HIDDEN) return {};
                                        for (var i = {}, o = fo(t.tagName), a = t.ownerDocument, u = 0; u < t.attributes.length; u += 1) {
                                            var s = t.attributes.item(u).name,
                                                c = uo(t, e, s, n.configuration);
                                            null !== c && (i[s] = c)
                                        }
                                        if (t.value && ("textarea" === o || "select" === o || "option" === o || "input" === o)) {
                                            var f = Qi(t, e);
                                            void 0 !== f && (i.value = f)
                                        }
                                        if ("option" === o && e === qi.ALLOW) {
                                            var d = t;
                                            d.selected && (i.selected = d.selected)
                                        }
                                        if ("link" === o) {
                                            var l = Array.from(a.styleSheets).find((function(e) {
                                                return e.href === t.href
                                            }));
                                            (p = lo(l)) && l && (delete i.rel, delete i.href, i._cssText = p)
                                        }
                                        if ("style" === o && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                                            var p;
                                            (p = lo(t.sheet)) && (i._cssText = p)
                                        }
                                        var v, m, h = t;
                                        "input" !== o || "radio" !== h.type && "checkbox" !== h.type || (e === qi.ALLOW ? i.checked = !!h.checked : Xi(h, e) && (i.checked = Vi));
                                        if ("audio" === o || "video" === o) {
                                            var g = t;
                                            i.rr_mediaState = g.paused ? "paused" : "played"
                                        }
                                        var y = n.serializationContext;
                                        switch (y.status) {
                                            case 0:
                                                v = Math.round(t.scrollTop), m = Math.round(t.scrollLeft), (v || m) && y.elementsScrollPositions.set(t, {
                                                    scrollTop: v,
                                                    scrollLeft: m
                                                });
                                                break;
                                            case 1:
                                                y.elementsScrollPositions.has(t) && (v = (r = y.elementsScrollPositions.get(t)).scrollTop, m = r.scrollLeft)
                                        }
                                        m && (i.rr_scrollLeft = m);
                                        v && (i.rr_scrollTop = v);
                                        return i
                                    }(t, o, e),
                                    d = [];
                                if (t.childNodes.length) {
                                    d = ao(t, e.parentNodePrivacyLevel === o && e.ignoreWhiteSpace === ("head" === r) ? e : h({}, e, {
                                        parentNodePrivacyLevel: o,
                                        ignoreWhiteSpace: "head" === r
                                    }))
                                }
                                return {
                                    type: hi,
                                    tagName: r,
                                    attributes: f,
                                    childNodes: d,
                                    isSVG: i
                                }
                            }(t, e);
                        case t.TEXT_NODE:
                            return function(t, e) {
                                var n, r = null === (n = t.parentElement) || void 0 === n ? void 0 : n.tagName,
                                    i = Ki(t, e.ignoreWhiteSpace || !1, e.parentNodePrivacyLevel);
                                if (!i) return;
                                return {
                                    type: gi,
                                    textContent: i,
                                    isStyle: "STYLE" === r || void 0
                                }
                            }(t, e);
                        case t.CDATA_SECTION_NODE:
                            return {
                                type: yi,
                                textContent: ""
                            }
                    }
                    var n
                }(t, e);
                if (!n) return null;
                var r = Zi(t) || so++,
                    i = n;
                return i.id = r,
                    function(t, e) {
                        $i.set(t, e)
                    }(t, r), e.serializedNodeIds && e.serializedNodeIds.add(r), i
            }

            function ao(t, e) {
                var n = [];
                return eo(t.childNodes, (function(t) {
                    var r = oo(t, e);
                    r && n.push(r)
                })), n
            }

            function uo(t, e, n, r) {
                if (e === qi.HIDDEN) return null;
                var i = t.getAttribute(n);
                if (e === qi.MASK && n !== Fi && n !== En && n !== r.actionNameAttribute) {
                    var o = t.tagName;
                    switch (n) {
                        case "title":
                        case "alt":
                        case "placeholder":
                            return Vi
                    }
                    if (("IMG" === o || "SOURCE" === o) && ("src" === n || "srcset" === n)) return "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
                    if ("A" === o && "href" === n) return Vi;
                    if (i && N(n, "data-")) return Vi
                }
                return i && "string" === typeof i && i.length > 1e5 && "data:" === i.slice(0, 5) ? "data:truncated" : i
            }
            var so = 1;
            var co = /[^a-z1-6-_]/;

            function fo(t) {
                var e = t.toLowerCase().trim();
                return co.test(e) ? "div" : e
            }

            function lo(t) {
                try {
                    var e = t.rules || t.cssRules;
                    return e ? Array.from(e).map(po).join("") : null
                } catch (n) {
                    return null
                }
            }

            function po(t) {
                return function(t) {
                    return "styleSheet" in t
                }(t) ? lo(t.styleSheet) || "" : t.cssText
            }

            function vo(t) {
                var e = S,
                    n = [];

                function r() {
                    e(), t(n), n = []
                }
                return {
                    addMutations: function(t) {
                        0 === n.length && (e = function(t, e) {
                            if (window.requestIdleCallback) {
                                var n = window.requestIdleCallback(f(t), e);
                                return function() {
                                    return window.cancelIdleCallback(n)
                                }
                            }
                            var r = window.requestAnimationFrame(f(t));
                            return function() {
                                return window.cancelAnimationFrame(r)
                            }
                        }(r, {
                            timeout: 100
                        })), n.push.apply(n, t)
                    },
                    flush: r,
                    stop: function() {
                        e()
                    }
                }
            }

            function mo(t, e, n) {
                var r = se();
                if (!r) return {
                    stop: S
                };
                var i = vo((function(t) {
                        ! function(t, e, n) {
                            var r = t.filter((function(t) {
                                    return document.contains(t.target) && function(t) {
                                        for (var e = t; e;) {
                                            if (!Ji(e)) return !1;
                                            e = e.parentNode
                                        }
                                        return !0
                                    }(t.target) && zi(t.target, n.defaultPrivacyLevel) !== qi.HIDDEN
                                })),
                                i = function(t, e) {
                                    for (var n = new Set, r = new Map, i = function(t) {
                                            eo(t.addedNodes, (function(t) {
                                                n.add(t)
                                            })), eo(t.removedNodes, (function(e) {
                                                n.has(e) || r.set(e, t.target), n.delete(e)
                                            }))
                                        }, o = 0, a = t; o < a.length; o++) {
                                        i(a[o])
                                    }
                                    var u = Array.from(n);
                                    s = u, s.sort((function(t, e) {
                                        var n = t.compareDocumentPosition(e);
                                        return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS || n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                                    }));
                                    var s;
                                    for (var c = new Set, f = [], d = 0, l = u; d < l.length; d++) {
                                        var p = l[d];
                                        if (!g(p)) {
                                            var v = zi(p.parentNode, e.defaultPrivacyLevel);
                                            if (v !== qi.HIDDEN && v !== qi.IGNORE) {
                                                var m = oo(p, {
                                                    serializedNodeIds: c,
                                                    parentNodePrivacyLevel: v,
                                                    serializationContext: {
                                                        status: 2
                                                    },
                                                    configuration: e
                                                });
                                                m && f.push({
                                                    nextId: y(p),
                                                    parentId: Zi(p.parentNode),
                                                    node: m
                                                })
                                            }
                                        }
                                    }
                                    var h = [];
                                    return r.forEach((function(t, e) {
                                        Ji(e) && h.push({
                                            parentId: Zi(t),
                                            id: Zi(e)
                                        })
                                    })), {
                                        adds: f,
                                        removes: h,
                                        hasBeenSerialized: g
                                    };

                                    function g(t) {
                                        return Ji(t) && c.has(Zi(t))
                                    }

                                    function y(t) {
                                        for (var e = t.nextSibling; e;) {
                                            if (Ji(e)) return Zi(e);
                                            e = e.nextSibling
                                        }
                                        return null
                                    }
                                }(r.filter((function(t) {
                                    return "childList" === t.type
                                })), n),
                                o = i.adds,
                                a = i.removes,
                                u = i.hasBeenSerialized,
                                s = function(t, e) {
                                    for (var n, r = [], i = new Set, o = t.filter((function(t) {
                                            return !i.has(t.target) && (i.add(t.target), !0)
                                        })), a = 0, u = o; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.textContent !== s.oldValue) {
                                            var c = zi(s.target.parentNode, e.defaultPrivacyLevel);
                                            c !== qi.HIDDEN && c !== qi.IGNORE && r.push({
                                                id: Zi(s.target),
                                                value: null !== (n = Ki(s.target, !1, c)) && void 0 !== n ? n : null
                                            })
                                        }
                                    }
                                    return r
                                }(r.filter((function(t) {
                                    return "characterData" === t.type && !u(t.target)
                                })), n),
                                c = function(t, e) {
                                    for (var n = [], r = new Map, i = t.filter((function(t) {
                                            var e = r.get(t.target);
                                            return !(null === e || void 0 === e ? void 0 : e.has(t.attributeName)) && (e ? e.add(t.attributeName) : r.set(t.target, new Set([t.attributeName])), !0)
                                        })), o = new Map, a = 0, u = i; a < u.length; a++) {
                                        var s = u[a];
                                        if (s.target.getAttribute(s.attributeName) !== s.oldValue) {
                                            var c = zi(s.target, e.defaultPrivacyLevel),
                                                f = uo(s.target, c, s.attributeName, e),
                                                d = void 0;
                                            if ("value" === s.attributeName) {
                                                var l = Qi(s.target, c);
                                                if (void 0 === l) continue;
                                                d = l
                                            } else d = "string" === typeof f ? f : null;
                                            var p = o.get(s.target);
                                            p || (p = {
                                                id: Zi(s.target),
                                                attributes: {}
                                            }, n.push(p), o.set(s.target, p)), p.attributes[s.attributeName] = d
                                        }
                                    }
                                    return n
                                }(r.filter((function(t) {
                                    return "attributes" === t.type && !u(t.target)
                                })), n);
                            if (!s.length && !c.length && !a.length && !o.length) return;
                            e({
                                adds: o,
                                removes: a,
                                texts: s,
                                attributes: c
                            })
                        }(t.concat(o.takeRecords()), e, n)
                    })),
                    o = new r(f(i.addMutations));
                return o.observe(document, {
                    attributeOldValue: !0,
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0
                }), t.onFlush(i.flush), {
                    stop: function() {
                        o.disconnect(), i.stop()
                    }
                }
            }
            var ho = function() {
                function t() {}
                return t.prototype.flush = function() {
                    var t;
                    null === (t = this.flushListener) || void 0 === t || t.call(this)
                }, t.prototype.onFlush = function(t) {
                    this.flushListener = t
                }, t
            }();
            var go, yo = function(t, e) {
                    var n = window.visualViewport,
                        r = {
                            layoutViewportX: t,
                            layoutViewportY: e,
                            visualViewportX: t,
                            visualViewportY: e
                        };
                    return n ? (! function() {
                        var t = window.visualViewport;
                        return Math.abs(t.pageTop - t.offsetTop - window.scrollY) > 25 || Math.abs(t.pageLeft - t.offsetLeft - window.scrollX) > 25
                    }() ? (r.visualViewportX = Math.round(t - n.offsetLeft), r.visualViewportY = Math.round(e - n.offsetTop)) : (r.layoutViewportX = Math.round(t + n.offsetLeft), r.layoutViewportY = Math.round(e + n.offsetTop)), r) : r
                },
                bo = function() {
                    var t = window.visualViewport;
                    return {
                        scale: t.scale,
                        offsetLeft: t.offsetLeft,
                        offsetTop: t.offsetTop,
                        pageLeft: t.pageLeft,
                        pageTop: t.pageTop,
                        height: t.height,
                        width: t.width
                    }
                };

            function wo() {
                var t, e = window.visualViewport;
                return t = e ? e.pageLeft - e.offsetLeft : void 0 !== window.scrollX ? window.scrollX : window.pageXOffset || 0, Math.round(t)
            }

            function So() {
                var t, e = window.visualViewport;
                return t = e ? e.pageTop - e.offsetTop : void 0 !== window.scrollY ? window.scrollY : window.pageYOffset || 0, Math.round(t)
            }
            var Co = new WeakMap,
                To = 1;

            function ko(t) {
                return Co.has(t) || Co.set(t, To++), Co.get(t)
            }

            function Eo(t) {
                var e, n, r, i, o, a, u, s, c = (e = t.mutationController, n = t.mutationCb, r = t.configuration, mo(e, n, r).stop),
                    d = function(t) {
                        var e = m(f((function(e) {
                            var n = e.target;
                            if (Ji(n)) {
                                var r = to(e) ? e.changedTouches[0] : e,
                                    i = r.clientX,
                                    o = r.clientY,
                                    a = {
                                        id: Zi(n),
                                        timeOffset: 0,
                                        x: i,
                                        y: o
                                    };
                                if (window.visualViewport) {
                                    var u = yo(i, o),
                                        s = u.visualViewportX,
                                        c = u.visualViewportY;
                                    a.x = s, a.y = c
                                }
                                t([a], to(e) ? Ei : wi)
                            }
                        })), 50, {
                            trailing: !1
                        }).throttled;
                        return U(document, ["mousemove", "touchmove"], e, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mousemoveCb),
                    l = function(t, e) {
                        var n = function(n) {
                            var r = n.target;
                            if (zi(r, e) !== qi.HIDDEN && Ji(r)) {
                                var i = to(n) ? n.changedTouches[0] : n,
                                    o = i.clientX,
                                    a = i.clientY,
                                    u = {
                                        id: Zi(r),
                                        type: xo[n.type],
                                        x: o,
                                        y: a
                                    };
                                if (window.visualViewport) {
                                    var s = yo(o, a),
                                        c = s.visualViewportX,
                                        f = s.visualViewportY;
                                    u.x = c, u.y = f
                                }
                                var d = h({
                                    id: ko(n)
                                }, no(Si, u));
                                t(d)
                            }
                        };
                        return U(document, Object.keys(xo), n, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.mouseInteractionCb, t.configuration.defaultPrivacyLevel),
                    p = function(t, e, n) {
                        var r = m(f((function(r) {
                            var i = r.target;
                            if (i && zi(i, e) !== qi.HIDDEN && Ji(i)) {
                                var o = Zi(i),
                                    a = i === document ? {
                                        scrollTop: So(),
                                        scrollLeft: wo()
                                    } : {
                                        scrollTop: Math.round(i.scrollTop),
                                        scrollLeft: Math.round(i.scrollLeft)
                                    };
                                n.set(i, a), t({
                                    id: o,
                                    x: a.scrollLeft,
                                    y: a.scrollTop
                                })
                            }
                        })), 100).throttled;
                        return B(document, "scroll", r, {
                            capture: !0,
                            passive: !0
                        }).stop
                    }(t.scrollCb, t.configuration.defaultPrivacyLevel, t.elementsScrollPositions),
                    v = function(t) {
                        return De().subscribe(t).unsubscribe
                    }(t.viewportResizeCb),
                    g = function(t, e) {
                        var n = new WeakMap;

                        function r(t) {
                            var n = zi(t, e);
                            if (n !== qi.HIDDEN) {
                                var r, o = t.type;
                                if ("radio" === o || "checkbox" === o) {
                                    if (Xi(t, n)) return;
                                    r = {
                                        isChecked: t.checked
                                    }
                                } else {
                                    var a = Qi(t, n);
                                    if (void 0 === a) return;
                                    r = {
                                        text: a
                                    }
                                }
                                i(t, r);
                                var u = t.name;
                                "radio" === o && u && t.checked && eo(document.querySelectorAll('input[type="radio"][name="'.concat(u, '"]')), (function(e) {
                                    e !== t && i(e, {
                                        isChecked: !1
                                    })
                                }))
                            }
                        }

                        function i(e, r) {
                            if (Ji(e)) {
                                var i = n.get(e);
                                i && i.text === r.text && i.isChecked === r.isChecked || (n.set(e, r), t(h({
                                    id: Zi(e)
                                }, r)))
                            }
                        }
                        var o = U(document, ["input", "change"], (function(t) {
                                (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLSelectElement) && r(t.target)
                            }), {
                                capture: !0,
                                passive: !0
                            }).stop,
                            a = [nn(HTMLInputElement.prototype, "value", r), nn(HTMLInputElement.prototype, "checked", r), nn(HTMLSelectElement.prototype, "value", r), nn(HTMLTextAreaElement.prototype, "value", r), nn(HTMLSelectElement.prototype, "selectedIndex", r)];
                        return function() {
                            a.forEach((function(t) {
                                return t.stop()
                            })), o()
                        }
                    }(t.inputCb, t.configuration.defaultPrivacyLevel),
                    y = (i = t.mediaInteractionCb, o = t.configuration.defaultPrivacyLevel, U(document, ["play", "pause"], (function(t) {
                        var e = t.target;
                        e && zi(e, o) !== qi.HIDDEN && Ji(e) && i({
                            id: Zi(e),
                            type: "play" === t.type ? Bi : Ui
                        })
                    }), {
                        capture: !0,
                        passive: !0
                    }).stop),
                    b = function(t) {
                        function e(t, e) {
                            t && Ji(t.ownerNode) && e(Zi(t.ownerNode))
                        }
                        var n = [en(CSSStyleSheet.prototype, "insertRule", {
                            before: function(n, r) {
                                e(this, (function(e) {
                                    return t({
                                        id: e,
                                        adds: [{
                                            rule: n,
                                            index: r
                                        }]
                                    })
                                }))
                            }
                        }), en(CSSStyleSheet.prototype, "deleteRule", {
                            before: function(n) {
                                e(this, (function(e) {
                                    return t({
                                        id: e,
                                        removes: [{
                                            index: n
                                        }]
                                    })
                                }))
                            }
                        })];
                        "undefined" !== typeof CSSGroupingRule ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule));

                        function r(r) {
                            n.push(en(r.prototype, "insertRule", {
                                before: function(n, r) {
                                    var i = this;
                                    e(this.parentStyleSheet, (function(e) {
                                        var o = ro(i);
                                        o && (o.push(r || 0), t({
                                            id: e,
                                            adds: [{
                                                rule: n,
                                                index: o
                                            }]
                                        }))
                                    }))
                                }
                            }), en(r.prototype, "deleteRule", {
                                before: function(n) {
                                    var r = this;
                                    e(this.parentStyleSheet, (function(e) {
                                        var i = ro(r);
                                        i && (i.push(n), t({
                                            id: e,
                                            removes: [{
                                                index: i
                                            }]
                                        }))
                                    }))
                                }
                            }))
                        }
                        return function() {
                            return n.forEach((function(t) {
                                return t.stop()
                            }))
                        }
                    }(t.styleSheetCb),
                    w = (a = t.focusCb, U(window, ["focus", "blur"], (function() {
                        a({
                            has_focus: document.hasFocus()
                        })
                    })).stop),
                    C = function(t) {
                        if (!window.visualViewport) return S;
                        var e = m(f((function() {
                                t(bo())
                            })), 200, {
                                trailing: !1
                            }),
                            n = e.throttled,
                            r = e.cancel,
                            i = U(window.visualViewport, ["resize", "scroll"], n, {
                                capture: !0,
                                passive: !0
                            }).stop;
                        return function() {
                            i(), r()
                        }
                    }(t.visualViewportResizeCb),
                    T = (u = t.lifeCycle, s = t.frustrationCb, u.subscribe(10, (function(t) {
                        var e, n, r;
                        "action" === t.rawRumEvent.type && "click" === t.rawRumEvent.action.type && (null === (n = null === (e = t.rawRumEvent.action.frustration) || void 0 === e ? void 0 : e.type) || void 0 === n ? void 0 : n.length) && "events" in t.domainContext && (null === (r = t.domainContext.events) || void 0 === r ? void 0 : r.length) && s({
                            timestamp: t.rawRumEvent.date,
                            type: pi,
                            data: {
                                frustrationTypes: t.rawRumEvent.action.frustration.type,
                                recordIds: t.domainContext.events.map((function(t) {
                                    return ko(t)
                                }))
                            }
                        })
                    })).unsubscribe);
                return function() {
                    c(), d(), l(), p(), v(), g(), y(), b(), w(), C(), T()
                }
            }
            var xo = ((go = {}).mouseup = Ii, go.mousedown = Ai, go.click = Oi, go.contextmenu = Ri, go.dblclick = Ni, go.focus = Li, go.blur = Mi, go.touchstart = Pi, go.touchend = Di, go);

            function _o(t) {
                var e = t.emit;
                if (!e) throw new Error("emit function is required");
                var n = new ho,
                    r = function() {
                        var t = new WeakMap;
                        return {
                            set: function(e, n) {
                                (e !== document || document.scrollingElement) && t.set(e === document ? document.scrollingElement : e, n)
                            },
                            get: function(e) {
                                return t.get(e)
                            },
                            has: function(e) {
                                return t.has(e)
                            }
                        }
                    }(),
                    i = function(i, o) {
                        void 0 === i && (i = tt()), void 0 === o && (o = {
                            status: 0,
                            elementsScrollPositions: r
                        }), n.flush();
                        var a = Be(),
                            u = a.width,
                            s = a.height;
                        e({
                            data: {
                                height: s,
                                href: window.location.href,
                                width: u
                            },
                            type: ci,
                            timestamp: i
                        }), e({
                            data: {
                                has_focus: document.hasFocus()
                            },
                            type: fi,
                            timestamp: i
                        }), e({
                            data: {
                                node: io(document, t.configuration, o),
                                initialOffset: {
                                    left: wo(),
                                    top: So()
                                }
                            },
                            type: ui,
                            timestamp: i
                        }), window.visualViewport && e({
                            data: bo(),
                            type: li,
                            timestamp: i
                        })
                    };
                return i(), {
                    stop: Eo({
                        lifeCycle: t.lifeCycle,
                        configuration: t.configuration,
                        mutationController: n,
                        elementsScrollPositions: r,
                        inputCb: function(t) {
                            return e(no(ki, t))
                        },
                        mediaInteractionCb: function(t) {
                            return e(no(xi, t))
                        },
                        mouseInteractionCb: function(t) {
                            return e(t)
                        },
                        mousemoveCb: function(t, n) {
                            return e(no(n, {
                                positions: t
                            }))
                        },
                        mutationCb: function(t) {
                            return e(no(bi, t))
                        },
                        scrollCb: function(t) {
                            return e(no(Ci, t))
                        },
                        styleSheetCb: function(t) {
                            return e(no(_i, t))
                        },
                        viewportResizeCb: function(t) {
                            return e(no(Ti, t))
                        },
                        frustrationCb: function(t) {
                            return e(t)
                        },
                        focusCb: function(t) {
                            return e({
                                data: t,
                                type: fi,
                                timestamp: tt()
                            })
                        },
                        visualViewportResizeCb: function(t) {
                            e({
                                data: t,
                                type: li,
                                timestamp: tt()
                            })
                        }
                    }),
                    takeSubsequentFullSnapshot: function(t) {
                        return i(t, {
                            status: 1,
                            elementsScrollPositions: r
                        })
                    },
                    flushMutations: function() {
                        return n.flush()
                    }
                }
            }
            var Io;

            function Ao(t) {
                return No(t).segments_count
            }

            function Oo(t) {
                No(t).records_count += 1
            }

            function Ro(t) {
                return null === Io || void 0 === Io ? void 0 : Io.get(t)
            }

            function No(t) {
                var e;
                return Io || (Io = new Map), Io.has(t) ? e = Io.get(t) : (e = {
                    records_count: 0,
                    segments_count: 0,
                    segments_total_raw_size: 0
                }, Io.set(t, e), Io.size > 10 && function() {
                    if (!Io) return;
                    if (Io.keys) Io.delete(Io.keys().next().value);
                    else {
                        var t = !0;
                        Io.forEach((function(e, n) {
                            t && (Io.delete(n), t = !1)
                        }))
                    }
                }()), e
            }
            var Lo = 0,
                Mo = function() {
                    function t(t, e, n, r, i, o) {
                        var a = this;
                        this.worker = t, this.isFlushed = !1, this.id = Lo++;
                        var u = e.view.id;
                        this.metadata = h({
                                start: r.timestamp,
                                end: r.timestamp,
                                creation_reason: n,
                                records_count: 1,
                                has_full_snapshot: r.type === ui,
                                index_in_view: Ao(u),
                                source: "browser"
                            }, e),
                            function(t) {
                                No(t).segments_count += 1
                            }(u), Oo(u);
                        var s = f((function(e) {
                            var n = e.data;
                            "errored" !== n.type && "initialized" !== n.type && (n.id === a.id ? (! function(t, e) {
                                No(t).segments_total_raw_size += e
                            }(u, n.additionalBytesCount), "flushed" === n.type ? (o(n.result, n.rawBytesCount), t.removeEventListener("message", s)) : i(n.compressedBytesCount)) : n.id > a.id && (t.removeEventListener("message", s), ie("Segment did not receive a 'flush' response before being replaced.")))
                        }));
                        t.addEventListener("message", s), this.worker.postMessage({
                            data: '{"records":['.concat(JSON.stringify(r)),
                            id: this.id,
                            action: "write"
                        })
                    }
                    return t.prototype.addRecord = function(t) {
                        var e;
                        this.metadata.start = Math.min(this.metadata.start, t.timestamp), this.metadata.end = Math.max(this.metadata.end, t.timestamp), this.metadata.records_count += 1, Oo(this.metadata.view.id), (e = this.metadata).has_full_snapshot || (e.has_full_snapshot = t.type === ui), this.worker.postMessage({
                            data: ",".concat(JSON.stringify(t)),
                            id: this.id,
                            action: "write"
                        })
                    }, t.prototype.flush = function() {
                        this.worker.postMessage({
                            data: "],".concat(JSON.stringify(this.metadata).slice(1), "\n"),
                            id: this.id,
                            action: "flush"
                        }), this.isFlushed = !0
                    }, t
                }(),
                Po = 6e4;

            function Do(t, e, n, r, i, o) {
                return function(t, e, n, r, i) {
                    void 0 === i && (i = window);
                    var o = {
                            status: 0,
                            nextSegmentCreationReason: "init"
                        },
                        a = t.subscribe(2, (function() {
                            c("view_change")
                        })).unsubscribe,
                        u = t.subscribe(9, (function() {
                            c("before_unload")
                        })).unsubscribe,
                        s = B(i, "visibilitychange", (function() {
                            "hidden" === document.visibilityState && c("visibility_hidden")
                        }), {
                            capture: !0
                        }).stop;

                    function c(t) {
                        1 === o.status && (o.segment.flush(), clearTimeout(o.expirationTimeoutId)), o = t ? {
                            status: 0,
                            nextSegmentCreationReason: t
                        } : {
                            status: 2
                        }
                    }

                    function d(t, i) {
                        var a = e();
                        if (a) {
                            var u = new Mo(r, a, t, i, (function(t) {
                                !u.isFlushed && t > Po && c("segment_bytes_limit")
                            }), (function(t, e) {
                                n(t, u.metadata, e)
                            }));
                            o = {
                                status: 1,
                                segment: u,
                                expirationTimeoutId: setTimeout(f((function() {
                                    c("segment_duration_limit")
                                })), 3e4)
                            }
                        }
                    }
                    return {
                        addRecord: function(t) {
                            switch (o.status) {
                                case 0:
                                    d(o.nextSegmentCreationReason, t);
                                    break;
                                case 1:
                                    o.segment.addRecord(t)
                            }
                        },
                        stop: function() {
                            c(), a(), u(), s()
                        }
                    }
                }(t, (function() {
                    return function(t, e, n) {
                        var r = e.findTrackedSession(),
                            i = n.findView();
                        if (!r || !i) return;
                        return {
                            application: {
                                id: t
                            },
                            session: {
                                id: r.id
                            },
                            view: {
                                id: i.id
                            }
                        }
                    }(e, n, r)
                }), i, o)
            }
            var Bo = n(34378),
                Uo = {
                    status: 0
                };

            function qo(t, e) {
                switch (void 0 === e && (e = Bo.x), Uo.status) {
                    case 0:
                        Uo = {
                                status: 1,
                                callbacks: [t]
                            },
                            function(t) {
                                void 0 === t && (t = Bo.x);
                                try {
                                    var e = t();
                                    e.addEventListener("error", f(Fo)), e.addEventListener("message", f((function(t) {
                                        var n, r = t.data;
                                        "errored" === r.type ? Fo(r.error) : "initialized" === r.type && (n = e, 1 === Uo.status && (Uo.callbacks.forEach((function(t) {
                                            return t(n)
                                        })), Uo = {
                                            status: 3,
                                            worker: n
                                        }))
                                    }))), e.postMessage({
                                        action: "init"
                                    })
                                } catch (n) {
                                    Fo(n)
                                }
                            }(e);
                        break;
                    case 1:
                        Uo.callbacks.push(t);
                        break;
                    case 2:
                        t();
                        break;
                    case 3:
                        t(Uo.worker)
                }
            }

            function Fo(t) {
                1 === Uo.status ? (i.error("Session Replay recording failed to start: an error occurred while creating the Worker:", t), t instanceof Event || t instanceof Error && k(t.message, "Content Security Policy") ? i.error("Please make sure CSP is correctly configured https://docs.datadoghq.com/real_user_monitoring/faq/content_security_policy") : oe(t), Uo.callbacks.forEach((function(t) {
                    return t()
                })), Uo = {
                    status: 2
                }) : oe(t)
            }

            function jo(t, e, n, r) {
                var i = new FormData;
                i.append("segment", new Blob([e], {
                    type: "application/octet-stream"
                }), "".concat(n.session.id, "-").concat(n.start)), Vo(n, (function(t, e) {
                    return i.append(t, e)
                })), i.append("raw_segment_size", r.toString()), t.sendOnExit({
                    data: i,
                    bytesCount: e.byteLength
                })
            }

            function Vo(t, e, n) {
                void 0 === n && (n = ""), O(t).forEach((function(t) {
                    var r = t[0],
                        i = t[1];
                    "object" === typeof i && null !== i ? Vo(i, e, "".concat(n).concat(r, ".")) : e("".concat(n).concat(r), String(i))
                }))
            }
            var Ho = function(t, e) {
                    if (void 0 === e && (e = qo), pt() || "function" !== typeof Array.from || "function" !== typeof CSSSupportsRule) return {
                        start: S,
                        stop: S,
                        getReplayStats: function() {},
                        onRumStart: S,
                        isRecording: function() {
                            return !1
                        }
                    };
                    var n = {
                            status: 0
                        },
                        r = function() {
                            n = {
                                status: 1
                            }
                        },
                        i = function() {
                            n = {
                                status: 0
                            }
                        };
                    return {
                        start: function() {
                            return r()
                        },
                        stop: function() {
                            return i()
                        },
                        getReplayStats: Ro,
                        onRumStart: function(o, a, u, s) {
                            o.subscribe(7, (function() {
                                2 !== n.status && 3 !== n.status || (i(), n = {
                                    status: 1
                                })
                            })), o.subscribe(8, (function() {
                                1 === n.status && r()
                            })), r = function() {
                                var r = u.findTrackedSession();
                                r && r.hasPremiumPlan ? 2 !== n.status && 3 !== n.status && (n = {
                                    status: 2
                                }, F("interactive", (function() {
                                    2 === n.status && e((function(e) {
                                        if (2 === n.status)
                                            if (e) {
                                                var r = t(o, a, u, s, e).stop;
                                                n = {
                                                    status: 3,
                                                    stopRecording: r
                                                }
                                            } else n = {
                                                status: 0
                                            }
                                    }))
                                }))) : n = {
                                    status: 1
                                }
                            }, i = function() {
                                0 !== n.status && (3 === n.status && n.stopRecording(), n = {
                                    status: 0
                                })
                            }, 1 === n.status && r()
                        },
                        isRecording: function() {
                            return 3 === n.status
                        }
                    }
                }((function(t, e, n, r, i, o) {
                    var a = o || ei(e.sessionReplayEndpointBuilder, Po, (function(e) {
                            t.notify(12, {
                                error: e
                            })
                        })),
                        u = Do(t, e.applicationId, n, r, (function(t, e, n) {
                            return jo(a, t, e, n)
                        }), i),
                        s = u.addRecord,
                        c = u.stop,
                        f = _o({
                            emit: s,
                            configuration: e,
                            lifeCycle: t
                        }),
                        d = f.stop,
                        l = f.takeSubsequentFullSnapshot,
                        p = f.flushMutations,
                        v = t.subscribe(4, (function() {
                            p(), s({
                                timestamp: tt(),
                                type: di
                            })
                        })).unsubscribe,
                        m = t.subscribe(2, (function(t) {
                            l(t.startClocks.timeStamp)
                        })).unsubscribe;
                    return {
                        stop: function() {
                            v(), m(), d(), c()
                        }
                    }
                })),
                zo = function(t, e, n) {
                    var r = (void 0 === n ? {} : n).ignoreInitIfSyntheticsWillInjectRum,
                        o = void 0 === r || r,
                        a = !1,
                        u = X(),
                        s = X(),
                        l = function() {},
                        v = function() {},
                        m = new K,
                        g = function(t, e) {
                            void 0 === e && (e = tt()), m.add((function() {
                                return g(t, e)
                            }))
                        },
                        b = function(t, e) {
                            void 0 === e && (e = nt()), m.add((function() {
                                return b(t, e)
                            }))
                        },
                        w = function(t, e) {
                            void 0 === e && (e = {
                                context: u.getContext(),
                                user: s.getContext()
                            }), m.add((function() {
                                return w(t, e)
                            }))
                        },
                        S = function(t, e) {
                            void 0 === e && (e = {
                                context: u.getContext(),
                                user: s.getContext()
                            }), m.add((function() {
                                return S(t, e)
                            }))
                        };

                    function C(n, r) {
                        var i = t(n, (function() {
                            return {
                                user: s.getContext(),
                                context: u.getContext(),
                                hasReplay: !!e.isRecording() || void 0
                            }
                        }), e, r);
                        b = i.startView, w = i.addAction, S = i.addError, g = i.addTiming, l = i.getInternalContext, m.drain(), e.onRumStart(i.lifeCycle, n, i.session, i.viewContexts)
                    }
                    var T = f((function(t) {
                            b("object" === typeof t ? t : {
                                name: t
                            })
                        })),
                        k = function(t) {
                            var e = h({
                                version: "4.19.1",
                                onReady: function(t) {
                                    t()
                                }
                            }, t);
                            return Object.defineProperty(e, "_setDebug", {
                                get: function() {
                                    return c
                                },
                                enumerable: !1
                            }), e
                        }({
                            init: f((function(t) {
                                if (!o || !dt()) {
                                    if (pt()) t = function(t) {
                                        return h({}, t, {
                                            applicationId: "00000000-aaaa-0000-aaaa-000000000000",
                                            clientToken: "empty",
                                            sampleRate: 100
                                        })
                                    }(t);
                                    else if (! function(t) {
                                            if (! function(t) {
                                                    if (void 0 === document.cookie || null === document.cookie) return !1;
                                                    try {
                                                        var e = "dd_cookie_test_".concat(y()),
                                                            n = "test";
                                                        st(e, n, p, t);
                                                        var r = ct(e) === n;
                                                        return ft(e, t), r
                                                    } catch (o) {
                                                        return i.error(o), !1
                                                    }
                                                }($t(t))) return i.warn("Cookies are not authorized, we will not send any data."), !1;
                                            if ("file:" === window.location.protocol) return i.error("Execution is not allowed in the current context."), !1;
                                            return !0
                                        }(t)) return;
                                    if (function(t) {
                                            if (a) return t.silentMultipleInit || i.error("DD_RUM is already initialized."), !1;
                                            return !0
                                        }(t)) {
                                        var e = function(t) {
                                            var e, n, r;
                                            if (t.applicationId) {
                                                var o = null !== (e = t.premiumSampleRate) && void 0 !== e ? e : t.replaySampleRate;
                                                if (void 0 === o || _(o))
                                                    if (void 0 === t.tracingSampleRate || _(t.tracingSampleRate)) {
                                                        if (void 0 !== t.allowedTracingOrigins) {
                                                            if (!Array.isArray(t.allowedTracingOrigins)) return void i.error("Allowed Tracing Origins should be an array");
                                                            if (0 !== t.allowedTracingOrigins.length && void 0 === t.service) return void i.error("Service need to be configured when tracing is enabled")
                                                        }
                                                        if (void 0 === t.excludedActivityUrls || Array.isArray(t.excludedActivityUrls)) {
                                                            var a = Kt(t);
                                                            if (a) {
                                                                var u, s, c = !!t.trackFrustrations;
                                                                return h({
                                                                    applicationId: t.applicationId,
                                                                    version: t.version,
                                                                    actionNameAttribute: t.actionNameAttribute,
                                                                    premiumSampleRate: null !== o && void 0 !== o ? o : 100,
                                                                    allowedTracingOrigins: null !== (n = t.allowedTracingOrigins) && void 0 !== n ? n : [],
                                                                    tracingSampleRate: t.tracingSampleRate,
                                                                    excludedActivityUrls: null !== (r = t.excludedActivityUrls) && void 0 !== r ? r : [],
                                                                    trackInteractions: !!t.trackInteractions || c,
                                                                    trackFrustrations: c,
                                                                    trackViewsManually: !!t.trackViewsManually,
                                                                    defaultPrivacyLevel: (u = Yt, s = t.defaultPrivacyLevel, Object.keys(u).some((function(t) {
                                                                        return u[t] === s
                                                                    })) ? t.defaultPrivacyLevel : Yt.MASK_USER_INPUT)
                                                                }, a)
                                                            }
                                                        } else i.error("Excluded Activity Urls should be an array")
                                                    } else i.error("Tracing Sample Rate should be a number between 0 and 100");
                                                else i.error("Premium Sample Rate should be a number between 0 and 100")
                                            } else i.error("Application ID is not configured, no RUM data will be collected.")
                                        }(t);
                                        if (e) {
                                            if (e.trackViewsManually) {
                                                var n = m;
                                                m = new K, b = function(t) {
                                                    C(e, t)
                                                }, n.drain()
                                            } else C(e);
                                            v = function() {
                                                return H(t)
                                            }, a = !0
                                        }
                                    }
                                }
                            })),
                            addRumGlobalContext: f(u.add),
                            setGlobalContextProperty: f(u.setContextProperty),
                            removeRumGlobalContext: f(u.remove),
                            removeGlobalContextProperty: f(u.removeContextProperty),
                            getRumGlobalContext: f(u.get),
                            getGlobalContext: f(u.getContext),
                            setRumGlobalContext: f(u.set),
                            setGlobalContext: f(u.setContext),
                            clearGlobalContext: f(u.clearContext),
                            getInternalContext: f((function(t) {
                                return l(t)
                            })),
                            getInitConfiguration: f((function() {
                                return v()
                            })),
                            addAction: f((function(t, e) {
                                w({
                                    name: t,
                                    context: H(e),
                                    startClocks: nt(),
                                    type: "custom"
                                })
                            })),
                            addError: function(t, e) {
                                var n = Pt();
                                d((function() {
                                    S({
                                        error: t,
                                        handlingStack: n,
                                        context: H(e),
                                        startClocks: nt()
                                    })
                                }))
                            },
                            addTiming: f((function(t, e) {
                                g(t, e)
                            })),
                            setUser: f((function(t) {
                                "object" === typeof t && t ? s.setContext(E(t)) : i.error("Unsupported user:", t)
                            })),
                            getUser: f(s.getContext),
                            setUserProperty: f((function(t, e) {
                                var n, r = E((n = {}, n[t] = e, n))[t];
                                s.setContextProperty(t, r)
                            })),
                            removeUserProperty: f(s.removeContextProperty),
                            removeUser: f(s.clearContext),
                            clearUser: f(s.clearContext),
                            startView: T,
                            startSessionReplayRecording: f(e.start),
                            stopSessionReplayRecording: f(e.stop)
                        });
                    return k;

                    function E(t) {
                        var e = h(t, {});
                        return "id" in e && (e.id = String(e.id)), "name" in e && (e.name = String(e.name)), "email" in e && (e.email = String(e.email)), e
                    }
                }((function(t, e, n, r) {
                    var i = new Ke,
                        o = function(t) {
                            var e = re(t);
                            if (pt()) {
                                var n = lt();
                                e.observable.subscribe((function(t) {
                                    return n.send("internal_telemetry", t)
                                }))
                            }
                            return e
                        }(t);
                    o.setContextProvider((function() {
                        var e, n;
                        return {
                            application: {
                                id: t.applicationId
                            },
                            session: {
                                id: null === (e = u.findTrackedSession()) || void 0 === e ? void 0 : e.id
                            },
                            view: {
                                id: null === (n = l.findView()) || void 0 === n ? void 0 : n.id
                            },
                            action: {
                                id: m.findActionId()
                            }
                        }
                    }));
                    var a = function(t) {
                        i.notify(12, {
                            error: t
                        })
                    };
                    pt() ? function(t) {
                        var e = lt();
                        t.subscribe(11, (function(t) {
                            e.send("rum", t)
                        }))
                    }(i) : oi(t, i, o.observable, a);
                    var u = pt() ? function() {
                            var t = {
                                id: "00000000-aaaa-0000-aaaa-000000000000",
                                hasPremiumPlan: !0,
                                hasLitePlan: !1
                            };
                            return {
                                findTrackedSession: function() {
                                    return t
                                }
                            }
                        }() : Gr(t, i),
                        s = function() {
                            var t = se(),
                                e = new Jt((function() {
                                    if (t) {
                                        var n = new t(f((function() {
                                            return e.notify()
                                        })));
                                        return n.observe(document, {
                                                attributes: !0,
                                                characterData: !0,
                                                childList: !0,
                                                subtree: !0
                                            }),
                                            function() {
                                                return n.disconnect()
                                            }
                                    }
                                }));
                            return e
                        }(),
                        c = ai(location),
                        d = function(t, e, n, r, i, o, a, u) {
                            var s = function(t) {
                                    var e = new Qe(144e5);
                                    return t.subscribe(2, (function(t) {
                                        e.add(function(t) {
                                            return {
                                                service: t.service,
                                                version: t.version,
                                                id: t.id,
                                                name: t.name
                                            }
                                        }(t), t.startClocks.relative)
                                    })), t.subscribe(4, (function(t) {
                                        var n = t.endClocks;
                                        e.closeActive(n.relative)
                                    })), t.subscribe(8, (function() {
                                        e.reset()
                                    })), {
                                        findView: function(t) {
                                            return e.find(t)
                                        },
                                        stop: function() {
                                            e.stop()
                                        }
                                    }
                                }(t),
                                c = function(t, e, n) {
                                    var r, i = new Qe(144e5);
                                    t.subscribe(4, (function(t) {
                                        var e = t.endClocks;
                                        i.closeActive(e.relative)
                                    })), t.subscribe(2, (function(t) {
                                        var e = t.startClocks,
                                            o = n.href;
                                        i.add(a({
                                            url: o,
                                            referrer: r || document.referrer
                                        }), e.relative), r = o
                                    }));
                                    var o = e.subscribe((function(t) {
                                        var e = t.newLocation,
                                            n = i.find();
                                        if (n) {
                                            var r = et();
                                            i.closeActive(r), i.add(a({
                                                url: e.href,
                                                referrer: n.referrer
                                            }), r)
                                        }
                                    }));

                                    function a(t) {
                                        return {
                                            url: t.url,
                                            referrer: t.referrer
                                        }
                                    }
                                    return {
                                        findUrl: function(t) {
                                            return i.find(t)
                                        },
                                        stop: function() {
                                            o.unsubscribe(), i.stop()
                                        }
                                    }
                                }(t, i, n),
                                f = He(),
                                d = function(t, e, n, r) {
                                    t.subscribe(1, (function(e) {
                                        return t.notify(10, Qn(e, r))
                                    }));
                                    var i = {
                                        findActionId: S
                                    };
                                    return n.trackInteractions && (i = Jn(t, e, n).actionContexts), {
                                        addAction: function(e, n) {
                                            t.notify(10, h({
                                                savedCommonContext: n
                                            }, Qn(e, r)))
                                        },
                                        actionContexts: i
                                    }
                                }(t, o, e, f),
                                l = d.addAction,
                                p = d.actionContexts;
                            return je(e, t, r, s, c, p, a, u), {
                                viewContexts: s,
                                foregroundContexts: f,
                                urlContexts: c,
                                addAction: l,
                                actionContexts: p,
                                stop: function() {
                                    s.stop(), f.stop()
                                }
                            }
                        }(i, t, location, u, c, s, e, a),
                        l = d.viewContexts,
                        p = d.foregroundContexts,
                        v = d.urlContexts,
                        m = d.actionContexts,
                        g = d.addAction;
                    ! function(t, e) {
                        t.subscribe(0, (function(n) {
                            for (var r = 0, i = n; r < i.length; r++) {
                                var o = i[r];
                                if ("longtask" !== o.entryType) break;
                                var a = e.findTrackedSession(o.startTime);
                                if (!a || a.hasLitePlan) break;
                                var u = $(o.startTime),
                                    s = {
                                        date: u.timeStamp,
                                        long_task: {
                                            id: y(),
                                            duration: Z(o.duration)
                                        },
                                        type: "long_task"
                                    };
                                t.notify(10, {
                                    rawRumEvent: s,
                                    startTime: u.relative,
                                    domainContext: {
                                        performanceEntry: o.toJSON()
                                    }
                                })
                            }
                        }))
                    }(i, u), mr(i, t);
                    var b = _r(i, t, location, s, c, p, n, r),
                        w = b.addTiming,
                        C = b.startView,
                        T = lr(i, p).addError;
                    yn(i, t, u), Ie(i, t);
                    var k = function(t, e, n, r, i) {
                        return {
                            get: function(o) {
                                var a = n.findView(o),
                                    u = i.findUrl(o),
                                    s = e.findTrackedSession(o);
                                if (s && a && u) {
                                    var c = r.findActionId(o);
                                    return {
                                        application_id: t,
                                        session_id: s.id,
                                        user_action: c ? {
                                            id: c
                                        } : void 0,
                                        view: {
                                            id: a.id,
                                            name: a.name,
                                            referrer: u.referrer,
                                            url: u.url
                                        }
                                    }
                                }
                            }
                        }
                    }(t.applicationId, u, l, m, v);
                    return {
                        addAction: g,
                        addError: T,
                        addTiming: w,
                        startView: C,
                        lifeCycle: i,
                        viewContexts: l,
                        session: u,
                        getInternalContext: k.get
                    }
                }), Ho);
            ! function(t, e, n) {
                var r = t[e];
                t[e] = n, r && r.q && r.q.forEach((function(t) {
                    return o(t, "onReady callback threw an error:")()
                }))
            }(L(), "DD_RUM", zo)
        }
    }
]);
//# sourceMappingURL=80122.4195f4bd6ae77d69.js.map