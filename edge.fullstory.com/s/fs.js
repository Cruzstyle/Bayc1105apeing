//!Portions of this code are licensed under the following license:
//!  For license information please see fs.js.LICENSE.txt 
! function() {
    "use strict";
    var e = {
            133: function(e, t, n) {
                var r, i = n(940);

                function o(e) {}! function(e) {
                    e[e.Unknown = 0] = "Unknown", e[e.Clean = 1] = "Clean", e[e.UnrecoverableFailure = 2] = "UnrecoverableFailure"
                }(r || (r = {}));
                var s = new(function() {
                    function e(e) {
                        this.rebuildFromSnapshot(e)
                    }
                    return e.prototype.rebuildFromSnapshot = function(e) {
                        var t = this.snapshot;
                        if (this.snapshot = e, !t || t.functions !== e.functions) {
                            var n = e.functions;
                            this.arrayIsArray = n.arrayIsArray, this.clearWindowInterval = u(n.clearWindowInterval), this.clearWindowTimeout = u(n.clearWindowTimeout), this.dateGetTime = u(n.dateGetTime), this.dateNow = n.dateNow, this.docFragQuerySelectorAll = u(n.docFragQuerySelectorAll), this.docQuerySelectorAll = u(n.docQuerySelectorAll), this.elMatches = u(n.elMatches), this.elQuerySelectorAll = u(n.elQuerySelectorAll), this.jsonParse = n.jsonParse, this.jsonStringify = n.jsonStringify, this.matchMedia = c(n.matchMedia), this.mathAbs = n.mathAbs, this.mathFloor = n.mathFloor, this.mathMax = n.mathMax, this.mathMin = n.mathMin, this.mathPow = n.mathPow, this.mathRandom = n.mathRandom, this.mathRound = n.mathRound, this.objectHasOwnProp = u(n.objectHasOwnProp), this.objectKeys = n.objectKeys, this.objectValues = n.objectValues || null, this.requestWindowAnimationFrame = c(n.requestWindowAnimationFrame), this.requestWindowIdleCallback = c(n.requestWindowIdleCallback), this.setWindowInterval = u(n.setWindowInterval), this.setWindowTimeout = u(n.setWindowTimeout)
                        }
                    }, e
                }())(a(window));

                function a(e, t) {
                    void 0 === t && (t = r.Unknown);
                    var n = t,
                        i = [],
                        o = function(e) {
                            return n = r.UnrecoverableFailure, i.push("Snapshot failed: " + e),
                                function() {
                                    throw new Error("Invoked failed snapshot")
                                }
                        },
                        s = function(e) {
                            try {
                                return e()
                            } catch (e) {
                                return o(e.message)
                            }
                        },
                        a = function(e) {
                            try {
                                return e() || o("snapshot not found")
                            } catch (e) {
                                return o(e.message)
                            }
                        },
                        u = {
                            arrayIsArray: s(function() {
                                return e.Array.isArray
                            }),
                            clearWindowInterval: s(function() {
                                return e.clearInterval
                            }),
                            clearWindowTimeout: s(function() {
                                return e.clearTimeout
                            }),
                            dateGetTime: s(function() {
                                return e.Date.prototype.getTime
                            }),
                            dateNow: s(function() {
                                return e.Date.now
                            }),
                            docFragQuerySelectorAll: a(function() {
                                var t;
                                return null === (t = e.DocumentFragment) || void 0 === t ? void 0 : t.prototype.querySelectorAll
                            }),
                            docQuerySelectorAll: a(function() {
                                var t;
                                return null !== (t = e.Document.prototype.querySelectorAll) && void 0 !== t ? t : e.document.querySelectorAll
                            }),
                            elMatches: a(function() {
                                return d(e, h)
                            }),
                            elQuerySelectorAll: a(function() {
                                return d(e, l)
                            }),
                            jsonParse: s(function() {
                                return e.JSON.parse
                            }),
                            jsonStringify: s(function() {
                                return e.JSON.stringify
                            }),
                            matchMedia: s(function() {
                                return e.matchMedia
                            }),
                            mathAbs: s(function() {
                                return e.Math.abs
                            }),
                            mathFloor: s(function() {
                                return e.Math.floor
                            }),
                            mathMax: s(function() {
                                return e.Math.max
                            }),
                            mathMin: s(function() {
                                return e.Math.min
                            }),
                            mathPow: s(function() {
                                return e.Math.pow
                            }),
                            mathRandom: s(function() {
                                return e.Math.random
                            }),
                            mathRound: s(function() {
                                return e.Math.round
                            }),
                            objectHasOwnProp: s(function() {
                                return e.Object.prototype.hasOwnProperty
                            }),
                            objectKeys: s(function() {
                                return e.Object.keys
                            }),
                            objectValues: s(function() {
                                return e.Object.values
                            }),
                            requestWindowAnimationFrame: s(function() {
                                return e.requestAnimationFrame
                            }),
                            requestWindowIdleCallback: s(function() {
                                return e.requestIdleCallback
                            }),
                            setWindowInterval: s(function() {
                                return e.setInterval
                            }),
                            setWindowTimeout: s(function() {
                                return e.setTimeout
                            })
                        },
                        c = {
                            functionToString: s(function() {
                                return e.Function.prototype.toString
                            }),
                            objectToString: s(function() {
                                return e.Object.prototype.toString
                            })
                        };
                    return {
                        status: n,
                        functions: u,
                        helpers: c,
                        errors: i
                    }
                }

                function u(e) {
                    return function(t) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        return e.apply(t, n)
                    }
                }

                function c(e) {
                    return e ? u(e) : null
                }

                function h(e) {
                    return e.matches || e.webkitMatchesSelector || e.msMatchesSelector || e.mozMatchesSelector
                }

                function l(e) {
                    return e.querySelectorAll
                }

                function d(e, t) {
                    var n, r, i = (null === (n = e.Element) || void 0 === n ? void 0 : n.prototype) ? t(null === (r = e.Element) || void 0 === r ? void 0 : r.prototype) : void 0,
                        o = e.document ? e.document.documentElement : void 0;
                    if (!o || i && o instanceof e.Element || (i = t(o)), !i) throw new Error("Unabled to find Element proto function");
                    return i
                }

                function p() {
                    var e = function() {
                        return s.dateNow()
                    };
                    return "number" != typeof e() && (e = function() {
                        return s.dateGetTime(new Date)
                    }), e
                }
                var f = function() {
                    var e, t = p(),
                        n = null !== (e = function() {
                            var e;
                            if (function() {
                                    var e = window.performance;
                                    return !(!e || !e.now)
                                }()) {
                                var t = window.performance,
                                    n = t.now();
                                if ("number" == typeof n && isFinite(n) && !(n <= 0)) {
                                    var r = t.timeOrigin;
                                    if ("number" != typeof r) {
                                        var i = p()() - t.now(),
                                            o = null === (e = t.timing) || void 0 === e ? void 0 : e.navigationStart;
                                        r = o ? Math.min(i, o) : i
                                    }
                                    var s = Math.round(r);
                                    if ("number" == typeof s && isFinite(s) && !(s <= 0)) return s
                                }
                            }
                        }()) && void 0 !== e ? e : t();
                    return {
                        now: t,
                        timeOrigin: n,
                        msSinceDocumentStart: function() {
                            return t() - n
                        }
                    }
                }();

                function _() {
                    return f.now()
                }

                function v() {
                    return f.msSinceDocumentStart()
                }
                var g, m, y = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"],
                    S = ["811c9dc5", "350ca8af", "340ca71c", "14cd0a2b", "4db211e5", "0b069958", "3613e041", "2f8f13ba", "9b61ad43", "77074ba4", "0da3f8ec", "1c750511"],
                    w = function() {
                        return s.mathFloor(_() / 1e3)
                    },
                    E = function() {
                        return w() + 31536e3
                    };

                function b(e) {
                    if (!e) return null;
                    var t, n = e.split("#");
                    if (n.length < 3) return null;
                    for (var r = 2; r < n.length; r++) {
                        var i = n[r];
                        if (i.indexOf("/") >= 0) {
                            var o = i.split("/"),
                                s = o[0],
                                a = o[1];
                            n[r] = s, t = a;
                            break
                        }
                    }
                    var u = function(e) {
                        var t = parseInt(null != e ? e : "", 10),
                            n = w(),
                            r = E();
                        return isNaN(t) ? r : t <= n ? void 0 : t > r ? r : t
                    }(t);
                    if (!u) return null;
                    n[0];
                    var c = n[1],
                        h = n[2],
                        l = n[3],
                        d = "";
                    l && (d = decodeURIComponent(l), (y.indexOf(d) >= 0 || S.indexOf(d) >= 0) && (d = ""));
                    var p = (null != h ? h : "").split(":"),
                        f = p[0],
                        _ = p[1],
                        v = p[2],
                        g = p[3],
                        m = p[4];
                    return {
                        appKeyHash: d,
                        expirationAbsTimeSeconds: u,
                        userId: f,
                        orgId: c,
                        lastUserActivityTime: I(g),
                        pageCount: I(m),
                        sessionId: null != _ ? _ : "",
                        sessionStartTime: I(v)
                    }
                }

                function T(e) {
                    var t = {};
                    try {
                        for (var n = e.cookie.split(";"), r = 0; r < n.length; r++) {
                            var i = n[r].replace(/^\s+|\s+$/g, "").split("=");
                            t[i[0]] || (t[i[0]] = i[1])
                        }
                    } catch (e) {}
                    return t
                }

                function I(e) {
                    var t = parseInt(null != e ? e : "", 10);
                    return isNaN(t) ? void 0 : t
                }

                function k(e) {
                    if (g) return g;
                    var t = C(e);
                    return t || (t = e._fs_namespace) ? (g = t, t) : g = "FS"
                }

                function C(e) {
                    return e._fs_loaded
                }

                function A(e) {
                    return e[k(e)]
                }

                function x(e) {
                    return "localhost" == e || "127.0.0.1" == e
                }! function(e) {
                    var t, n, r;
                    (r = (t = e.V1 || (e.V1 = {})).OperationName || (t.OperationName = {})).Consent = "consent", r.Log = "log", r.Record = "rec", (n = t.VarOperationName || (t.VarOperationName = {})).Event = "event", n.Page = "page", n.Vars = "setVars", n.User = "user",
                        function(e) {
                            var t;
                            ! function(e) {
                                e.TrackEvent = "trackEvent", e.GetSession = "getSession", e.Log = "log", e.Source = "source", e.Observe = "observe", e.Restart = "restart", e.SetIdentity = "setIdentity", e.SetConfig = "setConfig", e.SetPage = "setPage", e.SetProperties = "setProperties", e.Shutdown = "shutdown", e.Stat = "stat"
                            }(e.OperationName || (e.OperationName = {})),
                            function(e) {
                                e.START = "start", e.SHUTDOWN = "shutdown", e.INTERNAL_BUNDLE = "internal/bundle", e.INTERNAL_ERROR = "internal/error"
                            }(t = e.EventTypeName || (e.EventTypeName = {})), e.EventTypes = [t.START, t.SHUTDOWN, t.INTERNAL_BUNDLE, t.INTERNAL_ERROR]
                        }(e.V2 || (e.V2 = {}))
                }(m || (m = {}));
                var R = /^([^.]+\.)*(fullstory|onfire).[^.]+(\/|$)/,
                    O = ["rs", "rs-2", "edge", "www", "app"];

                function P(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    if (!e) return e;
                    if (!R.test(e)) return e;
                    if (n.some(function(t) {
                            return 0 === e.lastIndexOf(t + ".", 0)
                        })) return e;
                    var o = (0, i.__spreadArray)([], O);
                    t && o.push(t);
                    for (var s = n[0], a = 0, u = o; a < u.length; a++) {
                        var c = u[a];
                        if (0 === e.lastIndexOf(c + ".", 0)) return s + "." + e.slice((c + ".").length)
                    }
                    return s + "." + e
                }

                function M(e) {
                    return R.test(e)
                }

                function L(e, t, n) {
                    void 0 === n && (n = "string");
                    var r = e[t];
                    if (typeof r === n) return r
                }

                function U(e) {
                    return L(e, "_fs_rec_host") || P(V(e), void 0, "rs", "rs-2")
                }

                function N(e) {
                    return L(e, "_fs_ext_org") || L(e, "_fs_org")
                }

                function F(e) {
                    var t, n, r = null !== (n = null === (t = N(e)) || void 0 === t ? void 0 : t.split("-")) && void 0 !== n ? n : [];
                    if (!(r.length < 3)) {
                        var i = r[0],
                            o = r[r.length - 1];
                        if (!("na1" === o || i.length > 1)) return o
                    }
                }

                function H(e) {
                    return !!L(e, "_fs_is_outer_script", "boolean")
                }

                function q(e) {
                    return e._fs_transport
                }

                function D(e) {
                    var t = A(e);
                    if (!t) return [];
                    var n = t.q;
                    return n ? (delete t.q, n) : []
                }

                function W(e, t) {
                    var n = A(e);
                    if (n) {
                        var r = n.q;
                        r || (r = n.q = []), r.push(t)
                    }
                }

                function B(e) {
                    var t = A(e);
                    return (null == t ? void 0 : t._v) || "unknown"
                }

                function V(e, t) {
                    void 0 === t && (t = !1);
                    var n = L(e, "_fs_ext_host") || L(e, "_fs_host");
                    if (n) {
                        if (t) return n;
                        var r = F(e);
                        if (!r || !M(n)) return n;
                        var i = "";
                        return 0 === n.indexOf("www.") && (n = n.slice(4), i = "www."), 0 === n.indexOf(r + ".") && (n = n.slice((r + ".").length)), "" + i + r + "." + n
                    }
                }

                function j(e) {
                    return e ? x(function(e) {
                        var t = e,
                            n = t.indexOf(":");
                        return n >= 0 && (t = t.slice(0, n)), t
                    }(e)) ? e : 0 == e.indexOf("www.") ? "app." + e.slice(4) : "app." + e : e
                }

                function K(e) {
                    return e ? e + "/s/fs.js" : void 0
                }

                function z(e, t) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        try {
                            return e.apply(this, n)
                        } catch (e) {
                            try {
                                t && t(e)
                            } catch (e) {}
                        }
                    }
                }
                var Q = function() {};

                function G(e) {
                    return s.arrayIsArray(e)
                }
                var Y = "function" == typeof s.objectKeys ? function(e) {
                    return s.objectKeys(e)
                } : function(e) {
                    var t = [];
                    for (var n in e) s.objectHasOwnProp(e, n) && t.push(n);
                    return t
                };

                function X(e, t) {
                    return 0 == e.lastIndexOf(t, 0)
                }

                function Z(e, t) {
                    for (var n in e) s.objectHasOwnProp(e, n) && t(e[n], n, e)
                }

                function J(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
                }

                function $(e, t) {
                    var n = 0;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !1;
                    return n == t
                }

                function ee(e, t) {
                    var n = 0;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r) && ++n > t) return !0;
                    return !1
                }

                function te(e) {
                    var t = e.nextSibling;
                    return t && e.parentNode && t === e.parentNode.firstChild ? null : t
                }

                function ne(e, t) {
                    if (e) {
                        var n = new WeakMap,
                            r = e;
                        do {
                            n.set(r, !0), t(r), r = r.nextSibling
                        } while (r && !n.has(r))
                    }
                }

                function re(e) {
                    var t = e.previousSibling;
                    return t && e.parentNode && t === e.parentNode.lastChild ? null : t
                }

                function ie(e) {
                    return function() {
                        for (var t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var i = window;
                        return i.Zone && i.Zone.root && "function" == typeof i.Zone.root.run ? i.Zone.root.run(function() {
                            return e.apply(t, n)
                        }) : e.apply(this, n)
                    }
                }

                function oe(e) {
                    try {
                        var t = window;
                        if (t.Zone && t.Zone.root && "function" == typeof t.Zone.root.wrap) return t.Zone.root.wrap(e)
                    } catch (e) {}
                    return e
                }

                function se(e, t, n) {
                    if (void 0 === n && (n = oe), !e) return Q;
                    var r = n(e);
                    return z(t ? r.bind(t) : r, function(e) {})
                }

                function ae(e) {
                    var t, n = Object.getOwnPropertyDescriptor(Array.prototype, "toJSON"),
                        r = Object.getOwnPropertyDescriptor(String.prototype, "toJSON");
                    try {
                        n && n.value && n.configurable && delete Array.prototype.toJSON, r && r.value && r.configurable && delete String.prototype.toJSON, t = s.jsonStringify(e)
                    } catch (e) {
                        t = ue(e)
                    } finally {
                        (null == n ? void 0 : n.value) && z(function() {
                            return Object.defineProperty(Array.prototype, "toJSON", n)
                        })(), (null == r ? void 0 : r.value) && z(function() {
                            return Object.defineProperty(String.prototype, "toJSON", r)
                        })()
                    }
                    return t
                }

                function ue(e) {
                    var t = "Internal error: unable to determine what JSON error was";
                    try {
                        t = (t = "" + e).replace(/[^a-zA-Z0-9.:!, ]/g, "_")
                    } catch (e) {}
                    return "\"" + t + "\""
                }

                function ce(e) {
                    var t = e.doctype;
                    if (!t) return "";
                    var n = "<!DOCTYPE ";
                    return n += t.name, t.publicId && (n += " PUBLIC \"" + t.publicId + "\""), t.systemId && (n += " \"" + t.systemId + "\""), n + ">"
                }

                function he(e) {
                    return s.jsonParse(e)
                }
                var le = function() {
                        function e(e, t, n) {
                            void 0 === n && (n = !1), this.target = e, this.propertyName = t, this.overrideToString = n, this._before = Q, this._afterSync = Q, this._afterAsync = Q, this.on = !1
                        }
                        return e.prototype.before = function(e) {
                            return this._before = se(e), this
                        }, e.prototype.afterSync = function(e) {
                            return this._afterSync = se(e), this
                        }, e.prototype.afterAsync = function(e) {
                            return this._afterAsync = se(function(t) {
                                s.setWindowTimeout(window, z(function() {
                                    e(t)
                                }), 0)
                            }), this
                        }, e.prototype.disable = function() {
                            if (this.on = !1, this.shim) {
                                var e = this.shim,
                                    t = e.override,
                                    n = e["native"];
                                this.target[this.propertyName] === t && (this.target[this.propertyName] = n, this.shim = void 0)
                            }
                        }, e.prototype.enable = function() {
                            if (this.on = !0, this.shim) return !0;
                            this.shim = this.makeShim();
                            try {
                                this.target[this.propertyName] = this.shim.override
                            } catch (e) {
                                return !1
                            }
                            return !0
                        }, e.prototype.getTarget = function() {
                            return this.target
                        }, e.prototype.makeShim = function() {
                            var e = this,
                                t = this,
                                n = this.target[this.propertyName],
                                r = function() {
                                    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                    var i = {
                                        that: this,
                                        args: e,
                                        result: null
                                    };
                                    t.on && t._before(i);
                                    var o = n.apply(this, e);
                                    return i.result = o, t.on && (t._afterSync(i), t._afterAsync(i)), i.result
                                };
                            return this.overrideToString && (r.toString = function() {
                                var t;
                                return "function " + (null !== (t = e.propertyName) && void 0 !== t ? t : "") + "() { [native code] }"
                            }), {
                                "native": n,
                                override: r
                            }
                        }, e
                    }(),
                    de = {};

                function pe(e, t, n) {
                    var r;
                    if (void 0 === n && (n = !1), !e || "function" != typeof e[t]) return null;
                    de[t] = null !== (r = de[t]) && void 0 !== r ? r : new WeakMap;
                    var i = de[t].get(e);
                    return i || (i = new le(e, t, n), de[t].set(e, i)), i.enable() ? i : null
                }

                function fe(e, t, n) {
                    return _e(null == e ? void 0 : e.prototype, t, n)
                }

                function _e(e, t, n) {
                    if (!e) return function() {};
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (!r || !r.set) return function() {};
                    var o = r.set,
                        s = se(n),
                        a = !0;

                    function u(e) {
                        o.call(this, e), a && s(this, e)
                    }
                    return Object.defineProperty(e, t, (0, i.__assign)((0, i.__assign)({}, r), {
                            set: u
                        })),
                        function() {
                            a = !1;
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            n && u === n.set && Object.defineProperty(e, t, (0, i.__assign)((0, i.__assign)({}, n), {
                                set: o
                            }))
                        }
                }

                function ve(e) {
                    var t = e.navigator.languages;
                    return t && G(t) ? t.join(",") : e.navigator.userLanguage || e.navigator.language
                }
                var ge = "[anonymous]",
                    me = /function\s*([\w\-$]+)?\s*\(/i;

                function ye(e) {
                    return e.stack || e.backtrace || e.stacktrace
                }

                function Se() {
                    var e, t;
                    try {
                        throw new Error("")
                    } catch (n) {
                        e = "<generated>\n", t = ye(n)
                    }
                    if (!t) {
                        e = "<generated-ie>\n";
                        var n = [];
                        try {
                            for (var r = arguments.callee.caller.caller; r && n.length < 10;) {
                                var i = me.test(r.toString()) && RegExp.$1 || ge;
                                n.push(i), r = r.caller
                            }
                        } catch (e) {}
                        t = n.join("\n")
                    }
                    return e + t
                }

                function we() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !0
                    }
                }
                var Ee, be, Te, Ie, ke, Ce, Ae = function() {
                        function e() {}
                        return e.wrap = function(t, n) {
                            return void 0 === n && (n = "error"), z(t, function(t) {
                                return e.sendToBugsnag(t, n)
                            })
                        }, e.errorLimit = 15, e.sendToBugsnag = function(t, n, r) {
                            if (!(e.errorLimit <= 0)) {
                                e.errorLimit--;
                                var i = t;
                                "string" == typeof i && (i = new Error(i));
                                var o = T(document).fs_uid,
                                    s = o ? b(o) : void 0;
                                s && s.orgId != N(window) && (s = void 0);
                                var a = new Date(1661778047e3).toISOString(),
                                    u = {
                                        projectRoot: window.location.origin,
                                        deviceTime: _(),
                                        inIframe: we(),
                                        CompiledVersion: "c99041d728",
                                        CompiledTimestamp: 1661778047,
                                        CompiledTime: a,
                                        orgId: N(window),
                                        "userId:sessionId": s ? s.userId + ":" + s.sessionId : "NA",
                                        context: document.location && document.location.pathname,
                                        message: i.message,
                                        name: "Recording Error",
                                        releaseStage: "production " + a,
                                        severity: n,
                                        language: ve(window),
                                        stacktrace: ye(i) || Se()
                                    },
                                    c = function(e, t, n) {
                                        var r = encodeURIComponent(t) + "=" + encodeURIComponent(n);
                                        e.push(r)
                                    },
                                    h = [];
                                for (var l in u) c(h, l, u[l] || "");
                                if (r)
                                    for (var l in r) {
                                        var d = typeof r[l];
                                        c(h, "aux_" + l, "string" === d || "number" === d ? r[l] : ae(r[l]))
                                    }
                                new Image().src = "https://" + U(window) + "/rec/except?" + h.join("&")
                            }
                        }, e
                    }(),
                    xe = {};

                function Re(e, t, n) {
                    if (void 0 === n && (n = 1), e) return !0;
                    if (xe[t] = xe[t] || 0, xe[t]++, xe[t] > n) return !1;
                    var r = new Error("Assertion failed: " + t);
                    return Ae.sendToBugsnag(r, "error"), e
                }! function(e) {
                    e.MUT_INSERT = 2, e.MUT_REMOVE = 3, e.MUT_ATTR = 4, e.MUT_TEXT = 6, e.MOUSEMOVE = 8, e.MOUSEMOVE_CURVE = 9, e.SCROLL_LAYOUT = 10, e.SCROLL_LAYOUT_CURVE = 11, e.MOUSEDOWN = 12, e.MOUSEUP = 13, e.CLICK = 16, e.FOCUS = 17, e.VALUECHANGE = 18, e.RESIZE_LAYOUT = 19, e.DOMLOADED = 20, e.LOAD = 21, e.PLACEHOLDER_SIZE = 22, e.UNLOAD = 23, e.BLUR = 24, e.SET_FRAME_BASE = 25, e.TOUCHSTART = 32, e.TOUCHEND = 33, e.TOUCHCANCEL = 34, e.TOUCHMOVE = 35, e.TOUCHMOVE_CURVE = 36, e.NAVIGATE = 37, e.PLAY = 38, e.PAUSE = 39, e.RESIZE_VISUAL = 40, e.RESIZE_VISUAL_CURVE = 41, e.RESIZE_DOCUMENT_CONTENT = 42, e.RESIZE_SCROLLABLE_ELEMENT_CONTENT = 43, e.LOG = 48, e.ERROR = 49, e.DBL_CLICK = 50, e.FORM_SUBMIT = 51, e.WINDOW_FOCUS = 52, e.WINDOW_BLUR = 53, e.HEARTBEAT = 54, e.WATCHED_ELEM = 56, e.PERF_ENTRY = 57, e.REC_FEAT_SUPPORTED = 58, e.SELECT = 59, e.CSSRULE_INSERT = 60, e.CSSRULE_DELETE = 61, e.FAIL_THROTTLED = 62, e.AJAX_REQUEST = 63, e.SCROLL_VISUAL_OFFSET = 64, e.SCROLL_VISUAL_OFFSET_CURVE = 65, e.MEDIA_QUERY_CHANGE = 66, e.RESOURCE_TIMING_BUFFER_FULL = 67, e.MUT_SHADOW = 68, e.DISABLE_STYLESHEET = 69, e.FULLSCREEN = 70, e.FULLSCREEN_ERROR = 71, e.ADOPTED_STYLESHEETS = 72, e.CUSTOM_ELEMENT_DEFINED = 73, e.MODAL_OPEN = 74, e.MODAL_CLOSE = 75, e.SLOW_INTERACTION = 76, e.LONG_FRAME = 77, e.TIMING = 78, e.STORAGE_WRITE_FAILURE = 79, e.DOCUMENT_PROPERTIES = 80, e.ENTRY_NAVIGATE = 81, e.STATS = 82, e.VIEWPORT_INTERSECTION = 83, e.COPY = 84, e.PASTE = 85, e.URL_SALT = 86, e.URL_ID = 87, e.FRAME_STATUS = 88, e.SCRIPT_COMPILED_VERSION = 89, e.RESET_CSS_SHEET = 90, e.ANIMATION_CREATED = 91, e.ANIMATION_METHOD_CALLED = 92, e.ANIMATION_PROPERTY_SET = 93, e.DOCUMENT_TIMELINE_CREATED = 94, e.KEYFRAME_EFFECT_CREATED = 95, e.KEYFRAME_EFFECT_METHOD_CALLED = 96, e.KEYFRAME_EFFECT_PROPERTY_SET = 97, e.CAPTURE_SOURCE = 98, e.PAGE_DATA = 99, e.KEEP_ELEMENT = 2e3, e.KEEP_URL = 2001, e.KEEP_BOUNCE = 2002, e.SYS_SETVAR = 8193, e.SYS_RESOURCEHASH = 8195, e.SYS_SETCONSENT = 8196, e.SYS_CUSTOM = 8197, e.SYS_REPORTCONSENT = 8198, e.SYS_LETHE_MOBILE_BUNDLE_SEQ = 8199
                }(Ee || (Ee = {})),
                function(e) {
                    e.Animation = 0, e.CSSAnimation = 1, e.CSSTransition = 2
                }(be || (be = {})),
                function(e) {
                    e.Unknown = 0, e.Serialization = 1
                }(Te || (Te = {})),
                function(e) {
                    e.Unknown = 0, e.Successful = 1, e.BlocklistedFrame = 2, e.PartiallyLoaded = 3, e.MissingWindowOrDocument = 4, e.MissingDocumentHead = 5, e.MissingBodyOrChildren = 6, e.AlreadyDefined = 7, e.NoNonScriptElement = 8, e.Exception = 9
                }(Ie || (Ie = {})),
                function(e) {
                    e.Unknown = 0, e.DomSnapshot = 1, e.NodeEncoding = 2, e.LzEncoding = 3
                }(ke || (ke = {})),
                function(e) {
                    e.Internal = 0, e.Public = 1
                }(Ce || (Ce = {}));
                var Oe, Pe, Me, Le, Ue, Ne, Fe, He, qe, De, We, Be, Ve, je, Ke, ze, Qe, Ge, Ye, Xe, Ze, Je, $e = ["print", "alert", "confirm"];

                function et(e) {
                    switch (e) {
                        case Ee.MOUSEDOWN:
                        case Ee.MOUSEMOVE:
                        case Ee.MOUSEMOVE_CURVE:
                        case Ee.MOUSEUP:
                        case Ee.TOUCHSTART:
                        case Ee.TOUCHEND:
                        case Ee.TOUCHMOVE:
                        case Ee.TOUCHMOVE_CURVE:
                        case Ee.TOUCHCANCEL:
                        case Ee.CLICK:
                        case Ee.SCROLL_LAYOUT:
                        case Ee.SCROLL_LAYOUT_CURVE:
                        case Ee.SCROLL_VISUAL_OFFSET:
                        case Ee.SCROLL_VISUAL_OFFSET_CURVE:
                        case Ee.NAVIGATE:
                            return !0;
                    }
                    return !1
                }! function(e) {
                    e.GrantConsent = !0, e.RevokeConsent = !1
                }(Oe || (Oe = {})),
                function(e) {
                    e.Page = 0, e.Document = 1
                }(Pe || (Pe = {})),
                function(e) {
                    e.Unknown = 0, e.Api = 1, e.FsShutdownFrame = 2, e.Hibernation = 3, e.Reidentify = 4, e.SettingsBlocked = 5, e.Size = 6, e.Unload = 7
                }(Me || (Me = {})),
                function(e) {
                    e.Unknown = 0, e.NotEmpty = 1, e.EmptyBody = 2
                }(Le || (Le = {})),
                function(e) {
                    e.Timing = 0, e.Navigation = 1, e.Resource = 2, e.Paint = 3, e.Mark = 4, e.Measure = 5, e.Memory = 6, e.TimeOrigin = 7
                }(Ue || (Ue = {})),
                function(e) {
                    e.Timing = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"], e.Navigation = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize"], e.Resource = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"], e.Measure = ["name", "startTime", "duration"], e.Memory = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"], e.TimeOrigin = ["timeOrigin"]
                }(Ne || (Ne = {})),
                function(e) {
                    e.Performance = 0, e.PerformanceEntries = 1, e.PerformanceMemory = 2, e.Console = 3, e.Ajax = 4, e.PerformanceObserver = 5, e.AjaxFetch = 6, e.PerformanceTimeOrigin = 7, e.WebAnimation = 8
                }(Fe || (Fe = {})),
                function(e) {
                    e.Node = 1, e.Sheet = 2
                }(He || (He = {})),
                function(e) {
                    e.StyleSheetHooks = 0, e.SetPropertyHooks = 1
                }(qe || (qe = {})),
                function(e) {
                    e.Document = "document", e.Event = "evt", e.Page = "page", e.User = "user"
                }(De || (De = {})),
                function(e) {
                    e.FsId = "fsidentity", e.NewUid = "newuid"
                }(We || (We = {})),
                function(e) {
                    e.Elide = 0, e.Record = 1, e.Allowlist = 2
                }(Be || (Be = {})),
                function(e) {
                    e.Any = 0, e.Exclude = 1, e.Mask = 2
                }(Ve || (Ve = {})),
                function(e) {
                    e.Erase = 0, e.MaskText = 1, e.ScrubUrl = 2, e.ScrubCss = 3
                }(je || (je = {})),
                function(e) {
                    e.Static = 0, e.Prefix = 1
                }(Ke || (Ke = {})),
                function(e) {
                    e.SignalInvalid = 0, e.SignalDeadClick = 1, e.SignalRageClick = 2
                }(ze || (ze = {})),
                function(e) {
                    e.ReasonNoSuchOrg = 1, e.ReasonOrgDisabled = 2, e.ReasonOrgOverQuota = 3, e.ReasonBlockedDomain = 4, e.ReasonBlockedIp = 5, e.ReasonBlockedUserAgent = 6, e.ReasonBlockedGeo = 7, e.ReasonBlockedTrafficRamping = 8, e.ReasonInvalidURL = 9, e.ReasonUserOptOut = 10, e.ReasonInvalidRecScript = 11, e.ReasonDeletingUser = 12, e.ReasonNativeHookFailure = 13
                }(Qe || (Qe = {})),
                function(e) {
                    e.Unset = 0, e.Exclude = 1, e.Mask = 2, e.Unmask = 3, e.Watch = 4, e.Keep = 5
                }(Ge || (Ge = {})),
                function(e) {
                    e.Unset = 0, e.Click = 1
                }(Ye || (Ye = {})),
                function(e) {
                    e[e.Page = 1] = "Page", e[e.Bundle = 2] = "Bundle"
                }(Xe || (Xe = {})),
                function(e) {
                    e[e.Error = 3] = "Error", e[e.Page = 4] = "Page", e[e.Bundle = 5] = "Bundle", e[e.Settings = 6] = "Settings"
                }(Ze || (Ze = {})),
                function(e) {
                    e.MaxPerfMarksPerPage = 16384, e.MaxLogsPerPage = 1024, e.MaxUrlLength = 2048, e.MutationProcessingInterval = 250, e.CurveSamplingInterval = 142, e.DefaultBundleUploadInterval = 5e3, e.HeartbeatInitial = 4e3, e.HeartbeatMax = 256200, e.PageInactivityTimeout = 18e5, e.BackoffMax = 3e5, e.ScrollSampleInterval = e.MutationProcessingInterval / 5, e.InactivityThreshold = 4e3, e.MaxAjaxPayloadLength = 16384, e.DefaultOrgSettings = {
                        MaxPerfMarksPerPage: e.MaxPerfMarksPerPage,
                        MaxConsoleLogPerPage: e.MaxLogsPerPage,
                        MaxAjaxPayloadLength: e.MaxAjaxPayloadLength,
                        MaxUrlLength: e.MaxUrlLength,
                        RecordPerformanceResourceImg: !0,
                        RecordPerformanceResourceTiming: !0,
                        HttpRequestHeadersAllowlist: [],
                        HttpResponseHeadersAllowlist: [],
                        UrlPrivacyConfig: [{
                            Exclude: {
                                Hash: [{
                                    Expression: "#.*"
                                }],
                                QueryParam: [{
                                    Expression: "(=)(.*)"
                                }]
                            }
                        }],
                        AttributeBlocklist: [{
                            Target: Ve.Any,
                            Tag: "*",
                            Name: "",
                            Type: Ke.Prefix,
                            Action: je.Erase
                        }]
                    }, e.DefaultStatsSettings = {
                        MaxPayloadLength: 8192,
                        MaxEventTypeLength: 1024
                    }, e.BlockedFieldValue = "__fs__redacted"
                }(Je || (Je = {}));
                var tt = "_fs_uid";

                function nt(e, t, n, r) {
                    void 0 !== n && ("function" == typeof e.addEventListener ? e.addEventListener(t, n, r) : "function" == typeof e.addListener && e.addListener(n))
                }

                function rt(e, t, n, r) {
                    void 0 !== n && ("function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r) : "function" == typeof e.removeListener && e.removeListener(n))
                }
                var it = function() {
                    function e() {
                        var e = this;
                        this._listeners = [], this._children = [], this._yesCapture = !0, this._noCapture = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e._yesCapture = {
                                        capture: !0,
                                        passive: !0
                                    }, e._noCapture = {
                                        capture: !1,
                                        passive: !0
                                    }
                                }
                            });
                            window.addEventListener("test", Q, t)
                        } catch (e) {}
                    }
                    return e.prototype.add = function(e, t, n, r, i) {
                        return void 0 === i && (i = !1), this.addCustom(e, t, n, r, i)
                    }, e.prototype.addCustom = function(e, t, n, r, i) {
                        void 0 === i && (i = !1);
                        var o = {
                            target: e,
                            type: t,
                            fn: Ae.wrap(function(e) {
                                (i || !1 !== e.isTrusted || "message" == t || e._fs_trust_event) && r(e)
                            }),
                            options: n ? this._yesCapture : this._noCapture,
                            index: this._listeners.length
                        };
                        return this._listeners.push(o), nt(e, t, o.fn, o.options), o
                    }, e.prototype.remove = function(e) {
                        e.target && (rt(e.target, e.type, e.fn, e.options), e.target = null, e.fn = void 0)
                    }, e.prototype.clear = function() {
                        for (var e = 0; e < this._listeners.length; e++) this._listeners[e].target && this.remove(this._listeners[e]);
                        this._listeners = []
                    }, e.prototype.createChild = function() {
                        var t = new e;
                        return this._children.push(t), t
                    }, e.prototype.refresh = function() {
                        for (var e = 0, t = this._listeners; e < t.length; e++) {
                            var n = t[e];
                            n.target && (rt(n.target, n.type, n.fn, n.options), nt(n.target, n.type, n.fn, n.options))
                        }
                        for (var r = 0, i = this._children; r < i.length; r++) i[r].refresh()
                    }, e
                }();

                function ot(e) {
                    return "function" == typeof e
                }
                var st, at, ut, ct, ht, lt = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    dt = 0,
                    pt = function(e, t) {
                        ft[dt] = e, ft[dt + 1] = t, 2 === (dt += 2) && st()
                    },
                    ft = new Array(1e3);

                function _t() {
                    for (var e = 0; e < dt; e += 2)(0, ft[e])(ft[e + 1]), ft[e] = void 0, ft[e + 1] = void 0;
                    dt = 0
                }

                function vt(e, t) {
                    var n = arguments,
                        r = this,
                        i = new this.constructor(yt);
                    void 0 === i[mt] && Lt(i);
                    var o, s = r._state;
                    return s ? (o = n[s - 1], pt(function() {
                        return Pt(s, i, o, r._result)
                    })) : At(r, i, e, t), i
                }

                function gt(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(yt);
                    return Tt(t, e), t
                }
                window.MutationObserver ? (ut = 0, ct = new MutationObserver(_t), ht = document.createTextNode(""), ct.observe(ht, {
                    characterData: !0
                }), st = function() {
                    var e = ut = ++ut % 2;
                    ht.data = "" + e
                }) : (at = setTimeout, st = function() {
                    return at(_t, 1)
                });
                var mt = Math.random().toString(36).substring(16);

                function yt() {}
                var St = void 0,
                    wt = new Rt;

                function Et(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return wt.error = e, wt
                    }
                }

                function bt(e, t, n) {
                    t.constructor === e.constructor && n === vt && t.constructor.resolve === gt ? function(e, t) {
                        1 === t._state ? kt(e, t._result) : 2 === t._state ? Ct(e, t._result) : At(t, void 0, function(t) {
                            return Tt(e, t)
                        }, function(t) {
                            return Ct(e, t)
                        })
                    }(e, t) : n === wt ? (Ct(e, wt.error), wt.error = null) : void 0 === n ? kt(e, t) : ot(n) ? function(e, t, n) {
                        pt(function(e) {
                            var r = !1,
                                i = function(n, i, o, s, a) {
                                    try {
                                        n.call(i, function(n) {
                                            r || (r = !0, t !== n ? Tt(e, n) : kt(e, n))
                                        }, function(t) {
                                            r || (r = !0, Ct(e, t))
                                        })
                                    } catch (e) {
                                        return e
                                    }
                                }(n, t, 0, 0, e._label);
                            !r && i && (r = !0, Ct(e, i))
                        }, e)
                    }(e, t, n) : kt(e, t)
                }

                function Tt(e, t) {
                    var n;
                    e === t ? Ct(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(n = t) || "object" == typeof n && null !== n ? bt(e, t, Et(t)) : kt(e, t)
                }

                function It(e) {
                    e._onerror && e._onerror(e._result), xt(e)
                }

                function kt(e, t) {
                    e._state === St && (e._result = t, e._state = 1, 0 !== e._subscribers.length && pt(xt, e))
                }

                function Ct(e, t) {
                    e._state === St && (e._state = 2, e._result = t, pt(It, e))
                }

                function At(e, t, n, r) {
                    var i = e._subscribers,
                        o = i.length;
                    e._onerror = null, i[o] = t, i[o + 1] = n, i[o + 2] = r, 0 === o && e._state && pt(xt, e)
                }

                function xt(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r, i, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? Pt(n, r, i, o) : i(o);
                        e._subscribers.length = 0
                    }
                }

                function Rt() {
                    this.error = null
                }
                var Ot = new Rt;

                function Pt(e, t, n, r) {
                    var i, o, s = ot(n),
                        a = !1,
                        u = !1;
                    if (s) {
                        if (i = function(e, t) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return Ot.error = e, Ot
                                }
                            }(n, r), i === Ot ? (u = !0, o = i.error, i.error = null) : a = !0, t === i) return void Ct(t, new TypeError("A promises callback cannot return that same promise."))
                    } else i = r, a = !0;
                    t._state !== St || (s && a ? Tt(t, i) : u ? Ct(t, o) : 1 === e ? kt(t, i) : 2 === e && Ct(t, i))
                }
                var Mt = 0;

                function Lt(e) {
                    e[mt] = Mt++, e._state = void 0, e._result = void 0, e._subscribers = []
                }

                function Ut(e, t) {
                    this._instanceConstructor = e, this.promise = new e(yt), this.promise[mt] || Lt(this.promise), lt(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? kt(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && kt(this.promise, this._result))) : Ct(this.promise, new Error("Array Methods must be provided an Array"))
                }
                Ut.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, n = 0; this._state === St && n < e; n++) this._eachEntry(t[n], n)
                }, Ut.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === gt) {
                        var i = Et(e);
                        if (i === vt && e._state !== St) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                        else if (n === Nt) {
                            var o = new n(yt);
                            bt(o, e, i), this._willSettleAt(o, t)
                        } else this._willSettleAt(new n(function(t) {
                            return t(e)
                        }), t)
                    } else this._willSettleAt(r(e), t)
                }, Ut.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === St && (this._remaining--, 2 === e ? Ct(r, n) : this._result[t] = n), 0 === this._remaining && kt(r, this._result)
                }, Ut.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    At(e, void 0, function(e) {
                        return n._settledAt(1, t, e)
                    }, function(e) {
                        return n._settledAt(2, t, e)
                    })
                };
                var Nt = function(e) {
                    this[mt] = Mt++, this._result = this._state = void 0, this._subscribers = [], yt !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof Nt ? function(e, t) {
                        try {
                            t(function(t) {
                                Tt(e, t)
                            }, function(t) {
                                Ct(e, t)
                            })
                        } catch (t) {
                            Ct(e, t)
                        }
                    }(this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                };
                Nt.all = function(e) {
                    return new Ut(this, e).promise
                }, Nt.race = function(e) {
                    var t = this;
                    return lt(e) ? new t(function(n, r) {
                        for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                    }) : new t(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, Nt.resolve = gt, Nt.reject = function(e) {
                    var t = new this(yt);
                    return Ct(t, e), t
                }, Nt._setAsap = function(e) {
                    pt = e
                }, Nt._asap = pt, Nt.prototype = {
                    constructor: Nt,
                    then: vt,
                    "catch": function(e) {
                        return this.then(null, e)
                    }
                };
                var Ft = "function" == typeof window.Promise ? window.Promise : Nt;

                function Ht() {
                    var e, t;
                    return {
                        promise: new Ft(function(n, r) {
                            e = n, t = r
                        }),
                        resolve: e,
                        reject: t
                    }
                }

                function qt(e) {
                    return new Ft(function(t) {
                        s.setWindowTimeout(window, z(t), e)
                    })
                }
                var Dt, Wt = function() {
                        try {
                            var e = new MessageChannel;
                            return e.port1.start(), e
                        } catch (e) {
                            return null
                        }
                    }(),
                    Bt = function() {
                        return Wt ? new Ft(function(e) {
                            var t = Wt.port1,
                                n = Wt.port2,
                                r = function() {
                                    e(), t.removeEventListener("message", r)
                                };
                            t.addEventListener("message", r), n.postMessage(void 0)
                        }) : qt(0)
                    };

                function Vt(e, t) {
                    return void 0 === t && (t = e), (0, i.__awaiter)(this, void 0, Ft, function() {
                        var n, r;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, qt(e)];
                                case 1:
                                    return i.sent(), (n = s.requestWindowIdleCallback) ? [2, new Ft(function(e) {
                                        n(window, e, {
                                            timeout: t
                                        })
                                    })] : (r = Date.now() + 25, [2, {
                                        timeRemaining: function() {
                                            return Math.max(0, r - Date.now())
                                        },
                                        didTimeout: !1
                                    }]);
                            }
                        })
                    })
                }! function(e) {
                    e.Essential = "0", e.High = "1", e.Medium = "2", e.Low = "3"
                }(Dt || (Dt = {}));
                var jt = ["0", "1", "2", "3"],
                    Kt = function() {
                        function e(e) {
                            var t = this;
                            this.measurementTasks = null, this.performingMeasurements = !1, this.recursionDepth = 0, this.bugsnagNonce = !0, this.performMeasurements = Ae.wrap(function() {
                                if (t.performingMeasurements) Ae.sendToBugsnag("performMeasurements() already in progress", "error");
                                else {
                                    var e = _(),
                                        n = e + 150;
                                    t.performingMeasurements = !0;
                                    try {
                                        if (!t.measurementTasks) return;
                                        e: for (var r = 0, i = jt; r < i.length; r++)
                                            for (var o = i[r], s = t.measurementTasks[o], a = 0; a < s.length; a++) {
                                                s[a]();
                                                var u = _();
                                                if (u > n) {
                                                    t.bugsnagNonce || (t.bugsnagNonce = !0, Ae.sendToBugsnag("Out of time for remaining measurement tasks.", "warning", {
                                                        totalRunningTimeMs: u - e
                                                    }));
                                                    break e
                                                }
                                            }
                                        t.measurementTasks = null
                                    } finally {
                                        t.performingMeasurements = !1
                                    }
                                }
                            }), this.wnd = e
                        }
                        return e.create = function(e) {
                            return e.ResizeObserver ? new zt(e, e.ResizeObserver) : new Qt(e)
                        }, e.prototype.requestMeasureTask = function(e, t) {
                            var n, r = this;
                            if (this.recursionDepth > 16) Ae.sendToBugsnag("Too much synchronous recursion in requestMeasureTask", "error");
                            else {
                                var i = this.performingMeasurements ? this.recursionDepth : 0,
                                    o = Ae.wrap(function() {
                                        var e = r.recursionDepth;
                                        r.recursionDepth = i + 1;
                                        try {
                                            t()
                                        } finally {
                                            r.recursionDepth = e
                                        }
                                    });
                                this.measurementTasks ? this.measurementTasks[e].push(o) : (this.measurementTasks = ((n = {})[Dt.Essential] = [], n[Dt.High] = [], n[Dt.Medium] = [], n[Dt.Low] = [], n[e] = [o], n), this.schedule())
                            }
                        }, e.prototype.performMeasurementsNow = function() {
                            this.performMeasurements()
                        }, e
                    }(),
                    zt = function(e) {
                        function t(t, n) {
                            var r = e.call(this, t) || this;
                            return r._resizeObserver = n, r
                        }
                        return (0, i.__extends)(t, e), t.prototype.schedule = function() {
                            var e = this,
                                t = this._resizeObserver,
                                n = this.wnd.document,
                                r = n.documentElement || n.body || n.head,
                                i = new t(function() {
                                    i.unobserve(r), e.performMeasurements()
                                });
                            i.observe(r)
                        }, t
                    }(Kt),
                    Qt = function(e) {
                        function t(t) {
                            return e.call(this, t) || this
                        }
                        return (0, i.__extends)(t, e), t.prototype.schedule = function() {
                            (0, i.__awaiter)(void 0, void 0, Ft, function() {
                                var e;
                                return (0, i.__generator)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return (e = s.requestWindowAnimationFrame) ? [4, new Ft(function(t) {
                                                return e(window, t)
                                            })] : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [4, Bt()];
                                        case 3:
                                            return t.sent(), [2];
                                    }
                                })
                            }).then(this.performMeasurements)
                        }, t
                    }(Kt);

                function Gt(e, t) {
                    return t && e.pageLeft == t.pageLeft && e.pageTop == t.pageTop
                }

                function Yt(e, t) {
                    return t && e.width == t.width && e.height == t.height
                }

                function Xt(e) {
                    return {
                        pageLeft: e.pageLeft,
                        pageTop: e.pageTop,
                        width: e.width,
                        height: e.height
                    }
                }
                var Zt = [
                        ["@import\\s+\"", "\""],
                        ["@import\\s+'", "'"]
                    ].concat([
                        ["url\\(\\s*\"", "\"\\s*\\)"],
                        ["url\\(\\s*'", "'\\s*\\)"],
                        ["url\\(\\s*", "\\s*\\)"]
                    ]),
                    Jt = ".*?" + /(?:[^\\](?:\\\\)*)/.source,
                    $t = new RegExp(Zt.map(function(e) {
                        var t = e[0],
                            n = e[1];
                        return "(" + t + ")(" + Jt + ")(" + n + ")"
                    }).join("|"), "g"),
                    en = /url\(["']?(.+?)["']?\)/g,
                    tn = /^\s*\/\//;

                function nn(e) {
                    return "BackCompat" == e.compatMode
                }

                function rn(e) {
                    return e && e.body && e.documentElement ? nn(e) ? [e.body.clientWidth, e.body.clientHeight] : [e.documentElement.clientWidth, e.documentElement.clientHeight] : [0, 0]
                }
                var on = function() {
                    function e(e, t) {
                        var n, r;
                        this.hasKnownPosition = !1, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.clientWidth = 0, this.clientHeight = 0;
                        var i = e.document;
                        if (i && i.documentElement && i.body) {
                            if ("visualViewport" in e && (this.hasKnownPosition = !0, this.pageTop = e.visualViewport.pageTop - e.visualViewport.offsetTop, this.pageLeft = e.visualViewport.pageLeft - e.visualViewport.offsetLeft, 0 == this.pageTop && (this.pageTop = 0), 0 == this.pageLeft && (this.pageLeft = 0)), n = rn(i), this.clientWidth = n[0], this.clientHeight = n[1], void 0 !== t && this.clientWidth == t.clientWidth && this.clientHeight == t.clientHeight && t.width > 0 && t.height > 0) return this.width = t.width, void(this.height = t.height);
                            r = this.computeLayoutViewportSizeFromMediaQueries(e), this.width = r[0], this.height = r[1]
                        }
                    }
                    return e.prototype.computeLayoutViewportSizeFromMediaQueries = function(e) {
                        var t = this.findMediaValue(e, "width", this.clientWidth, this.clientWidth + 128);
                        void 0 === t && (t = this.tryToGet(e, "innerWidth")), void 0 === t && (t = this.clientWidth);
                        var n = this.findMediaValue(e, "height", this.clientHeight, this.clientHeight + 128);
                        return void 0 === n && (n = this.tryToGet(e, "innerHeight")), void 0 === n && (n = this.clientHeight), [t, n]
                    }, e.prototype.findMediaValue = function(e, t, n, r) {
                        if (s.matchMedia) {
                            var i = n,
                                o = r,
                                a = s.matchMedia(e, "(min-" + t + ": " + i + "px)");
                            if (null != a) {
                                if (a.matches && s.matchMedia(e, "(max-" + t + ": " + i + "px)").matches) return i;
                                for (; i <= o;) {
                                    var u = s.mathFloor((i + o) / 2);
                                    if (s.matchMedia(e, "(min-" + t + ": " + u + "px)").matches) {
                                        if (s.matchMedia(e, "(max-" + t + ": " + u + "px)").matches) return u;
                                        i = u + 1
                                    } else o = u - 1
                                }
                            }
                        }
                    }, e.prototype.tryToGet = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {
                            return
                        }
                    }, e
                }();

                function sn(e, t) {
                    return new on(e, t)
                }
                var an = function(e, t) {
                    this.offsetLeft = 0, this.offsetTop = 0, this.pageLeft = 0, this.pageTop = 0, this.width = 0, this.height = 0, this.scale = 0;
                    var n = e.document;
                    if (n.body) {
                        "pageXOffset" in e ? (this.pageLeft = e.pageXOffset, this.pageTop = e.pageYOffset) : n.scrollingElement ? (this.pageLeft = n.scrollingElement.scrollLeft, this.pageTop = n.scrollingElement.scrollTop) : nn(n) ? (this.pageLeft = n.body.scrollLeft, this.pageTop = n.body.scrollTop) : n.documentElement && (n.documentElement.scrollLeft > 0 || n.documentElement.scrollTop > 0) ? (this.pageLeft = n.documentElement.scrollLeft, this.pageTop = n.documentElement.scrollTop) : (this.pageLeft = n.body.scrollLeft || 0, this.pageTop = n.body.scrollTop || 0), this.offsetLeft = this.pageLeft - t.pageLeft, this.offsetTop = this.pageTop - t.pageTop;
                        var r = 0,
                            i = 0;
                        try {
                            r = e.innerWidth, i = e.innerHeight
                        } catch (e) {
                            return
                        }
                        if (0 != r && 0 != i) {
                            this.scale = t.width / r, this.scale < 1 && (this.scale = 1);
                            var o = t.width - t.clientWidth,
                                s = t.height - t.clientHeight;
                            this.width = r - o / this.scale, this.height = i - s / this.scale
                        }
                    }
                };

                function un(e) {
                    var t = e;
                    return t.tagName ? "object" == typeof t.tagName ? "form" : t.tagName.toLowerCase() : null
                }
                var cn, hn = new RegExp("[^\\s]"),
                    ln = new RegExp("[\\s]*$");

                function dn(e) {
                    var t = hn.exec(e);
                    if (!t) return e;
                    for (var n = t.index, r = (t = ln.exec(e)) ? e.length - t.index : 0, i = "\uFFFF", o = e.slice(n, e.length - r).split(/\r\n?|\n/g), s = 0; s < o.length; s++) i += "" + o[s].length, s != o.length - 1 && (i += ":");
                    return (n || r) && (i += " " + n + " " + r), i
                }
                String.prototype,
                    function(e) {
                        e[e.Exclude = 2] = "Exclude", e[e.Mask = 4] = "Mask", e[e.Unmask = 8] = "Unmask", e[e.Watch = 16] = "Watch", e[e.Keep = 32] = "Keep"
                    }(cn || (cn = {}));
                var pn = [cn.Exclude, cn.Mask, cn.Unmask],
                    fn = [cn.Watch, cn.Keep],
                    _n = pn.concat(fn),
                    vn = {},
                    gn = 1;

                function mn(e, t) {
                    var n, r;
                    return void 0 === t && (t = En(e)), null !== (r = null === (n = null == t ? void 0 : t.watchKind) || void 0 === n ? void 0 : n.hasKinds()) && void 0 !== r && r
                }

                function yn(e, t) {
                    var n, r;
                    return void 0 === t && (t = En(e)), null !== (r = null === (n = null == t ? void 0 : t.watchKind) || void 0 === n ? void 0 : n.has(cn.Exclude)) && void 0 !== r && r
                }

                function Sn(e, t) {
                    return void 0 === t && (t = En(e)), !!t && !!t.mask
                }

                function wn(e, t) {
                    return void 0 === t && (t = En(e)), null == t ? void 0 : t.watchKind
                }

                function En(e) {
                    var t = e ? e._fs : null;
                    return t ? vn[t] : null
                }

                function bn(e) {
                    return vn[e]
                }

                function Tn(e) {
                    try {
                        return e && e._fs || 0
                    } catch (e) {
                        return 0
                    }
                }

                function In(e) {
                    return yn(e) ? 0 : Tn(e)
                }

                function kn(e, t) {
                    e.parent && (t.unobserveSubtree(e.node), e.parent.child == e && (e.parent.child = e.next), e.parent.lastChild == e && (e.parent.lastChild = e.prev), e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent = e.prev = e.next = null, delete vn[e.id], e.node._fs == e.id && (e.node._fs = 0), e.id = 0, e.child && Cn(e.child))
                }

                function Cn(e) {
                    for (var t = [e]; t.length > 0 && t.length < 1e4;) {
                        var n = t.pop();
                        delete vn[n.id], n.node._fs == n.id && (n.node._fs = 0), n.id = 0, n.next && t.push(n.next), n.child && t.push(n.child)
                    }
                    Re(t.length < 1e4, "clearIds is fast")
                }
                var An, xn, Rn = function() {
                        function e() {
                            var t = this;
                            this._wrappedTick = Ae.wrap(function() {
                                t.unregister(), t._tick && t._tick()
                            }), this._due = 0, this._id = e.nextId++
                        }
                        return e._rearm = function() {
                            e.checkedAlready = !1, e.lastCheck = 0
                        }, e.checkForBrokenSchedulers = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var t, n;
                                return (0, i.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return !s.requestWindowAnimationFrame || e.checkedAlready || (t = _()) - e.lastCheck < 100 ? [2, !1] : (e.lastCheck = t, e.checkedAlready = !0, [4, new Ft(function(e) {
                                                return s.requestWindowAnimationFrame(window, e)
                                            })]);
                                        case 1:
                                            return r.sent(), n = [], Z(e.registry, function(e) {
                                                var r = e.maybeForceTick(t);
                                                r && n.push(r)
                                            }), [4, Ft.all(n)];
                                        case 2:
                                            return r.sent(), s.requestWindowAnimationFrame(window, Ae.wrap(function() {
                                                e.checkedAlready = !1
                                            })), [2, !0];
                                    }
                                })
                            })
                        }, e.stopAll = function() {
                            Z(this.registry, function(e) {
                                return e.stop()
                            })
                        }, e.prototype.setTick = function(e) {
                            this._tick = e
                        }, e.prototype.stop = function() {
                            this.cancel(), delete e.registry[this._id]
                        }, e.prototype.register = function(t) {
                            this._due = _() + 100 + 1.5 * t, e.registry[this._id] = this
                        }, e.prototype.unregister = function() {
                            delete e.registry[this._id]
                        }, e.prototype.maybeForceTick = function(e) {
                            if (e > this._due) return Ft.resolve().then(this._wrappedTick)["catch"](function() {})
                        }, e.registry = {}, e.nextId = 0, e.checkedAlready = !1, e.lastCheck = 0, e
                    }(),
                    On = function(e) {
                        function t(t) {
                            var n = e.call(this) || this;
                            return n._interval = t, n._handle = -1, n
                        }
                        return (0, i.__extends)(t, e), t.prototype.start = function(e) {
                            var t = this; - 1 == this._handle && (this.setTick(function() {
                                e(), t.register(t._interval)
                            }), this._handle = s.setWindowInterval(window, this._wrappedTick, this._interval), this.register(this._interval))
                        }, t.prototype.cancel = function() {
                            -1 != this._handle && (s.clearWindowInterval(window, this._handle), this._handle = -1, this.setTick(function() {}))
                        }, t
                    }(Rn),
                    Pn = function(e) {
                        function t(t, n, r) {
                            void 0 === n && (n = 0);
                            for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                            var s = e.call(this) || this;
                            return s.delay = n, s.timer = -1, s.setTick(function() {
                                s.stop(), t.apply(void 0 === r ? window : r, i)
                            }), s
                        }
                        return (0, i.__extends)(t, e), t.prototype.start = function(e) {
                            return void 0 === e && (e = this.delay), this.delay = e, s.clearWindowTimeout(window, this.timer), this.timer = s.setWindowTimeout(window, this._wrappedTick, this.delay), this.register(e), this
                        }, t.prototype.cancel = function() {
                            -1 != this.timer && (s.clearWindowTimeout(window, this.timer), this.timer = -1)
                        }, t
                    }(Rn),
                    Mn = function() {
                        function e(e, t, n) {
                            this.limit = e, this.breaker = n, this.remaining = 0, this.ticker = new On(t), this.open()
                        }
                        return e.prototype.guard = function(e) {
                            var t = this;
                            return function() {
                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                return 0 == t.remaining ? (t.breaker(), void t.remaining--) : t.remaining < 0 ? void 0 : (t.remaining--, e.apply(this, n))
                            }
                        }, e.prototype.close = function() {
                            return this.ticker.stop(), this
                        }, e.prototype.open = function() {
                            var e = this;
                            return this.remaining = this.limit, this.ticker.start(function() {
                                e.remaining = e.limit
                            }), this
                        }, e
                    }(),
                    Ln = function() {
                        function e() {
                            this._reported = 0, this._skew = 0, this._startTime = _()
                        }
                        return e.prototype.wallTime = function() {
                            return _()
                        }, e.prototype.now = function() {
                            var e = this.wallTime() - this._startTime;
                            return e < 0 && this._reportTimeSkew("timekeeper now() is negative"), e
                        }, e.prototype.startTime = function() {
                            return this._startTime
                        }, e.prototype.setStartTime = function(e) {
                            var t = this.wallTime();
                            this._startTime = e, e > t && (this._skew = e - t, this._skew > 1e3 && this._reportTimeSkew("timekeeper set with future ts"))
                        }, e.prototype._reportTimeSkew = function(e) {
                            this._reported++ <= 2 && Ae.sendToBugsnag(e, "error", {
                                skew: this._skew,
                                startTime: this._startTime,
                                wallTime: this.wallTime()
                            })
                        }, e
                    }(),
                    Un = function() {
                        function e(e, t) {
                            this._ctx = e, this._queue = t, this._fallback = !1, this._elemsWithDeferredChanges = {}, this._values = {}, this._radios = {}, this._hasCheckedForReactDoms = !1, this._needsInstanceHooks = !1, An = this
                        }
                        return e.prototype.hookEvents = function() {
                            var e;
                            (e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) && e.set && (Nn || (fe(HTMLInputElement, "value", Wn), fe(HTMLInputElement, "checked", Wn), fe(HTMLSelectElement, "value", Wn), fe(HTMLTextAreaElement, "value", Wn), fe(HTMLSelectElement, "selectedIndex", Wn), fe(HTMLOptionElement, "selected", Wn), Nn = !0), 1) || (this._fallback = !0)
                        }, e.prototype.hookInstance = function(e) {
                            if ("input" === un(e)) switch (e.type) {
                                case "checkbox":
                                case "radio":
                                    _e(e, "checked", Wn);
                                    break;
                                default:
                                    _e(e, "value", Wn);
                            }
                        }, e.prototype.addInput = function(e) {
                            var t = In(e);
                            if (t) {
                                "input" === un(e) && this._checkReactDomHooks(e);
                                var n = !1;
                                if (function(e) {
                                        switch (e.type) {
                                            case "checkbox":
                                            case "radio":
                                                return e.checked != e.hasAttribute("checked");
                                            default:
                                                return (e.value || "") != function(e) {
                                                    if ("select" != un(e)) return e.getAttribute("value") || "";
                                                    var t = e,
                                                        n = t.querySelector("option[selected]") || t.querySelector("option");
                                                    return n && n.value || ""
                                                }(e);
                                        }
                                    }(e) && (this._addChangeForElem(e), n = !0), this._fallback && (this._elemsWithDeferredChanges[t] = e), !n)
                                    if (Vn(e)) {
                                        var r = qn(e);
                                        e.checked && (this._radios[r] = t)
                                    } else this._values[t] = Bn(e)
                            }
                        }, e.prototype._checkReactDomHooks = function(e) {
                            if (this._hasCheckedForReactDoms) this._needsInstanceHooks && this.hookInstance(e);
                            else {
                                var t = "checkbox" === e.type || "radio" === e.type ? "checked" : "value",
                                    n = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, t),
                                    r = Object.getOwnPropertyDescriptor(e, t);
                                n && r && n !== r && (this._needsInstanceHooks = !0, this.hookInstance(e)), this._hasCheckedForReactDoms = !0
                            }
                        }, e.prototype.diffValue = function(e, t) {
                            var n = In(e);
                            if (!n) return !1;
                            if (Vn(e)) {
                                var r = qn(e);
                                return this._radios[r] === n != ("true" === t)
                            }
                            return this._values[n] !== t
                        }, e.prototype.onChange = function(e, t, n) {
                            void 0 === n && (n = Bn(e)), In(e) && e && (t || this.diffValue(e, n)) && this._addChangeForElem(e, t)
                        }, e.prototype.tick = function() {
                            for (var e in this._elemsWithDeferredChanges) {
                                var t = this._elemsWithDeferredChanges[e];
                                if (In(t)) try {
                                    delete this._elemsWithDeferredChanges[e];
                                    var n = Bn(t);
                                    this.diffValue(t, n) && this._addChangeForElem(t)
                                } finally {
                                    this._fallback && (this._elemsWithDeferredChanges[e] = t)
                                } else delete this._elemsWithDeferredChanges[e], delete this._values[e], Vn(t) && delete this._radios[qn(t)]
                            }
                        }, e.prototype.shutdown = function() {
                            An = void 0
                        }, e.prototype._addChangeForElem = function(e, t) {
                            var n = this;
                            void 0 === t && (t = !1);
                            var r = In(e);
                            if (r)
                                if (this._shouldDeferChange(r, e)) this._elemsWithDeferredChanges[r] = e;
                                else {
                                    var i = Bn(e);
                                    if (Vn(e)) {
                                        var o = qn(e);
                                        "false" === i && this._radios[o] === r ? delete this._radios[o] : "true" === i && (this._radios[o] = r)
                                    } else this._values[r] = i;
                                    this._ctx.measurer.requestMeasureTask(Dt.Medium, function() {
                                        var o = e.getBoundingClientRect(),
                                            s = o.width > 0 && o.height > 0,
                                            a = Sn(e) ? dn(i) : i;
                                        n._queue.enqueue({
                                            Kind: Ee.VALUECHANGE,
                                            Args: [r, a, t, s]
                                        })
                                    })
                                }
                        }, e.prototype._shouldDeferChange = function(e, t) {
                            if (this._elemsWithDeferredChanges[e]) return !0;
                            if ("select" !== un(t)) return !1;
                            for (var n = t.options, r = 0; r < n.length; r++)
                                if (!In(n[r])) return !0;
                            return !1
                        }, e
                    }(),
                    Nn = !1,
                    Fn = {};

                function Hn() {
                    try {
                        if (An)
                            for (var e in Fn) {
                                var t = Fn[e],
                                    n = t[0],
                                    r = t[1];
                                An.onChange(n, !1, r)
                            }
                    } finally {
                        xn = null, Fn = {}
                    }
                }

                function qn(e) {
                    if (!e) return "";
                    for (var t = e; t && "form" != un(t);) t = t.parentElement;
                    return (t && "form" == un(t) ? Tn(t) : 0) + ":" + (e.name || "_fs_" + Tn(e))
                }

                function Dn(e, t) {
                    if (void 0 === t && (t = 2), t <= 0) return e;
                    var n = un(e);
                    return "option" != n && "optgroup" != n || !e.parentElement ? e : Dn(e.parentElement, t - 1)
                }

                function Wn(e, t) {
                    if (An) {
                        var n = Dn(e),
                            r = In(n);
                        r && An.diffValue(n, "" + t) && (Fn[r] = [n, "" + t], xn || (xn = new Pn(Hn)).start())
                    }
                }

                function Bn(e) {
                    switch (e.type) {
                        case "checkbox":
                        case "radio":
                            return "" + e.checked;
                        default:
                            var t = e.value;
                            return t || (t = ""), "" + t;
                    }
                }

                function Vn(e) {
                    return e && "radio" == e.type
                }
                var jn = function() {
                    function e(e, t, n) {
                        var r = this;
                        this._recAnimationObjectIds = new WeakMap, this._isRecording = !1, this._isRecordingSupported = !1, this._nextId = 1, this._snapshotAnimation = Ae.wrap(function(e) {
                            var t = function(e, t) {
                                    void 0 === t && (t = window);
                                    var n = t.KeyframeEffect,
                                        r = e.effect;
                                    return r && (void 0 === n || r instanceof n) ? r : null
                                }(e, r._window),
                                n = function(e, t) {
                                    void 0 === t && (t = window);
                                    var n = t.DocumentTimeline,
                                        r = e.timeline;
                                    return r && (void 0 === n || r instanceof n) ? r : null
                                }(e, r._window),
                                i = Qn(e);
                            if ((null == t ? void 0 : t.target) && 0 !== In(null == t ? void 0 : t.target) && n === r._window.document.timeline && i === be.Animation) {
                                if (t && !r._recAnimationObjectIds.has(t)) {
                                    var o = r._nextId++;
                                    r._recAnimationObjectIds.set(t, o), r._eventQueue.enqueue({
                                        Kind: Ee.KEYFRAME_EFFECT_CREATED,
                                        Args: [o, Tn(t.target), zn(t), Kn(t)]
                                    })
                                }
                                if (!r._recAnimationObjectIds.has(e)) {
                                    var s = r._nextId++,
                                        a = (o = t ? r._recAnimationObjectIds.get(t) : void 0, n ? r._recAnimationObjectIds.get(n) : void 0);
                                    switch (r._recAnimationObjectIds.set(e, s), r._eventQueue.enqueue({
                                        Kind: Ee.ANIMATION_CREATED,
                                        Args: [s, Qn(e), o, a]
                                    }), e.playState) {
                                        case "finished":
                                            r._eventQueue.enqueue({
                                                Kind: Ee.ANIMATION_METHOD_CALLED,
                                                Args: [s, ["finish", []]]
                                            });
                                            break;
                                        case "paused":
                                        case "running":
                                            r._eventQueue.enqueue({
                                                Kind: Ee.ANIMATION_PROPERTY_SET,
                                                Args: [s, ["currentTime", e.currentTime]]
                                            });
                                            var u = "paused" === e.playState ? "pause" : "play";
                                            r._eventQueue.enqueue({
                                                Kind: Ee.ANIMATION_METHOD_CALLED,
                                                Args: [s, [u, []]]
                                            });
                                    }
                                    r._listeners.add(e, "cancel", !0, function() {
                                        r._eventQueue.enqueue({
                                            Kind: Ee.ANIMATION_METHOD_CALLED,
                                            Args: [s, ["cancel", []]]
                                        })
                                    }), r._listeners.add(e, "finish", !0, function() {
                                        r._eventQueue.enqueue({
                                            Kind: Ee.ANIMATION_METHOD_CALLED,
                                            Args: [s, ["finish", []]]
                                        })
                                    })
                                }
                            }
                        }), this._eventQueue = t, this._window = e.window, this._listeners = n.createChild(), this._isRecordingSupported = function(e) {
                            void 0 === e && (e = window);
                            var t = e.Animation,
                                n = e.Document,
                                r = e.Element;
                            return void 0 !== t && "effect" in t.prototype && "getAnimations" in n.prototype && "animate" in r.prototype
                        }(this._window)
                    }
                    return Object.defineProperty(e.prototype, "nextId", {
                        get: function() {
                            return this._nextId
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.snapshot = function(e) {
                        var t = this,
                            n = ("getAnimations" in e);
                        this._isRecording && this._isRecordingSupported && n && e.getAnimations().forEach(function(e) {
                            t._snapshotAnimation(e)
                        })
                    }, e.prototype.start = function() {
                        var e, t = this,
                            n = this._window,
                            r = n.document,
                            i = n.Element;
                        this._eventQueue.enqueue({
                            Kind: Ee.REC_FEAT_SUPPORTED,
                            Args: [Fe.WebAnimation, this._isRecordingSupported]
                        }), this._isRecordingSupported && (this._isRecording = !0, this.snapshot(r), this._elementAnimateHook = pe(i.prototype, "animate"), null === (e = this._elementAnimateHook) || void 0 === e || e.afterSync(function(e) {
                            t._snapshotAnimation(e.result)
                        }))
                    }, e.prototype.stop = function() {
                        var e;
                        null === (e = this._elementAnimateHook) || void 0 === e || e.disable(), this._elementAnimateHook = null, this._listeners.clear(), this._isRecording = !1
                    }, e
                }();

                function Kn(e) {
                    var t = e.getTiming(),
                        n = e.composite,
                        r = void 0 === n ? "replace" : n,
                        i = e.iterationComposite,
                        o = void 0 === i ? "replace" : i;
                    return [t.delay, t.direction, t.duration, t.easing, t.endDelay, t.fill, t.iterationStart, "" + t.iterations, r, o]
                }

                function zn(e) {
                    return e.getKeyframes().map(function(e) {
                        var t = e.composite,
                            n = e.easing,
                            r = e.offset,
                            i = [];
                        return Z(e, function(e, t) {
                            "composite" !== t && "computedOffset" !== t && "easing" !== t && "offset" !== t && i.push([t, e])
                        }), [i, t, n, r]
                    })
                }

                function Qn(e) {
                    return "animationName" in e ? be.CSSAnimation : "transitionProperty" in e ? be.CSSTransition : be.Animation
                }
                var Gn = navigator.userAgent,
                    Yn = Gn.indexOf("MSIE ") > -1 || Gn.indexOf("Trident/") > -1,
                    Xn = (Yn && Gn.indexOf("Trident/5"), Yn && Gn.indexOf("Trident/6"), Yn && Gn.indexOf("rv:11") > -1),
                    Zn = Gn.indexOf("Edge/") > -1,
                    Jn = (Gn.indexOf("CriOS"), Gn.indexOf("Snapchat") > -1),
                    $n = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);

                function er() {
                    var e = window.navigator.userAgent.match(/Version\/(\d+)/);
                    return e ? parseInt(e[1], 10) : -1
                }

                function tr(e) {
                    if (!$n) return !1;
                    var t = er();
                    return t >= 0 && t === e
                }

                function nr(e) {
                    if (!$n) return !1;
                    var t = er();
                    return t >= 0 && t < e
                }
                tr(9), tr(10);
                var rr = nr(8);

                function ir(e, t) {
                    for (var n = 0 === t.indexOf("on") ? function(e) {
                            return "on" + e + t.slice(2)
                        } : function(e) {
                            return "" + e + t.charAt(0).toUpperCase() + t.slice(1)
                        }, r = 0, i = [function() {
                            return t
                        }, function() {
                            return n("webkit")
                        }, function() {
                            return n("moz")
                        }, function() {
                            return n("ms")
                        }]; r < i.length; r++) {
                        var o = (0, i[r])();
                        if (o in e) return o
                    }
                    return t
                }
                nr(10), nr(12);
                var or = n(838),
                    sr = {},
                    ar = "__default";

                function ur(e) {
                    void 0 === e && (e = ar);
                    var t = sr[e];
                    return t || (t = function() {
                        var e = document.implementation.createHTMLDocument("");
                        return e.head || e.documentElement.appendChild(e.createElement("head")), e.body || e.documentElement.appendChild(e.createElement("body")), e
                    }(), e !== ar && (t.open(), t.write(e), t.close()), sr[e] = t), t
                }
                var cr = new(function() {
                    function e() {
                        var e = ur(),
                            t = e.getElementById("urlresolver-base");
                        t || ((t = e.createElement("base")).id = "urlresolver-base", e.head.appendChild(t));
                        var n = e.getElementById("urlresolver-parser");
                        n || ((n = e.createElement("a")).id = "urlresolver-parser", e.head.appendChild(n)), this.base = t, this.parser = n
                    }
                    return e.prototype.parseUrl = function(e, t) {
                        var n = e;
                        if ("undefined" != typeof URL) try {
                            n || (n = document.baseURI);
                            var r = n ? new URL(t, n) : new URL(t);
                            if (r.href) return r
                        } catch (e) {}
                        return this.parseUrlUsingBaseAndAnchor(n, t)
                    }, e.prototype.parseUrlUsingBaseAndAnchor = function(e, t) {
                        this.base.setAttribute("href", e), this.parser.setAttribute("href", t);
                        var n = document.createElement("a");
                        return n.href = this.parser.href, n
                    }, e.prototype.resolveUrl = function(e, t) {
                        return this.parseUrl(e, t).href
                    }, e.prototype.resolveToDocument = function(e, t) {
                        var n = lr(e);
                        return null == n ? t : this.resolveUrl(n, t)
                    }, e
                }());

                function hr(e, t) {
                    return cr.parseUrl(e, t)
                }

                function lr(e) {
                    var t = e.document,
                        n = e.location.href;
                    if ("string" == typeof t.baseURI) n = t.baseURI;
                    else {
                        var r = t.getElementsByTagName("base")[0];
                        r && r.href && (n = r.href)
                    }
                    return "about:blank" == n && e.parent != e ? lr(e.parent) : n
                }
                var dr = ["allowReorder", "attributeName", "attributeType", "autoReverse", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "contentScriptType", "contentStyleType", "diffuseConstant", "edgeMode", "externalResourcesRequired", "filterRes", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "referrerPolicy", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].reduce(function(e, t) {
                        return e[t] = t, e[t.toUpperCase()] = t, e
                    }, {}),
                    pr = function(e) {
                        for (var t = [], n = 0, r = e; n < r.length; n++) {
                            var i = r[n],
                                o = {
                                    Exclude: fr(i.Exclude)
                                };
                            if (i.If) {
                                o.If = [];
                                for (var s = 0, a = i.If; s < a.length; s++) {
                                    var u = a[s];
                                    o.If.push(fr(u, !0))
                                }
                            }
                            t.push(o)
                        }
                        return t
                    };

                function fr(e, t) {
                    return void 0 === t && (t = !1), {
                        Hash: _r(e.Hash, t),
                        Host: _r(e.Host, t),
                        Path: _r(e.Path, t),
                        QueryParam: _r(e.QueryParam, t),
                        Query: _r(e.Query, t)
                    }
                }

                function _r(e, t) {
                    return e ? t ? [new RegExp(e.map(function(e) {
                        return e.Expression
                    }).join("|"), "ig")] : e.map(function(e) {
                        return new RegExp(e.Expression, "ig")
                    }) : []
                }
                var vr = "--blocked--",
                    gr = function(e, t, n) {
                        if (void 0 === n && (n = vr), !t || 0 === e.length) return t;
                        for (var r = [], i = 0, o = e; i < o.length; i++)
                            for (var s = o[i], a = 0, u = mr(s, t); a < u.length; a++) {
                                var c = u[a];
                                r.push(c)
                            }
                        if (0 === r.length) return t;
                        for (var h = "", l = 0, d = 0, p = r = yr(r); d < p.length; d++) {
                            var f = p[d],
                                _ = f[0],
                                v = f[1];
                            h += "" + t.substring(l, _) + n, l = v
                        }
                        return h + t.slice(l)
                    },
                    mr = function(e, t) {
                        var n, r = [];
                        for (e.lastIndex = 0; null !== (n = e.exec(t));)
                            if (n) {
                                if ("" === n[0]) return ".*" !== e.source && Ae.sendToBugsnag("detected possible infinite loop when matching zero-length characters", "error", {
                                    re: e.source
                                }), [
                                    [0, t.length]
                                ];
                                if (1 !== n.length)
                                    for (var i = n.index, o = 0, s = 1; s < n.length; s++) {
                                        var a = n[s];
                                        if (a && 0 !== a.length)
                                            if (s % 2 != 1) {
                                                var u = i + o,
                                                    c = u + a.length;
                                                r.push([u, c]), o += a.length
                                            } else o += a.length
                                    } else r.push([n.index, e.lastIndex])
                            }
                        return r
                    },
                    yr = function(e) {
                        if (e.length <= 1) return e;
                        e.sort(function(e, t) {
                            return e[0] - t[0]
                        });
                        for (var t = [], n = e[0], r = 1; r < e.length; r++) {
                            var i = e[r];
                            n[1] <= i[0] ? (t.push(n), n = i) : n[1] < i[1] && (n[1] = i[1])
                        }
                        return t.push(n), t
                    },
                    Sr = function(e, t) {
                        if (0 === e.length || !t) return !0;
                        for (var n = 0, r = t.split("?"); n < r.length; n++)
                            for (var i = 0, o = r[n].replace("?", "").split("&"); i < o.length; i++) {
                                var s = o[i];
                                if (Er(e, s)) return !0
                            }
                        return !1
                    },
                    wr = function(e, t) {
                        if (!e) return !0;
                        for (var n = Tr(t.pathname), r = 0, i = e; r < i.length; r++) {
                            var o = i[r];
                            if (Er(o.Hash, t.hash) && Er(o.Host, t.host) && Er(o.Path, n) && Sr(o.QueryParam, t.search) && Er(o.Query, t.search)) return !0
                        }
                        return !1
                    },
                    Er = function(e, t) {
                        return 0 === e.length || !t || e.every(function(e) {
                            return e.lastIndex = 0, e.test(t)
                        })
                    },
                    br = function(e, t) {
                        var n, r, i, o, s;
                        (n = e.Hash).push.apply(n, t.Hash), (r = e.Host).push.apply(r, t.Host), (i = e.Path).push.apply(i, t.Path), (o = e.QueryParam).push.apply(o, t.QueryParam), (s = e.Query).push.apply(s, t.Query)
                    };

                function Tr(e) {
                    return "/" !== e.charAt(0) ? "/" + e : e
                }
                var Ir = 16e6;

                function kr(e, t, n) {
                    void 0 === n && (n = !1);
                    var r = e.textContent;
                    if (!r) return "";
                    var i = t;
                    if (!i && !(i = En(e))) return "";
                    var o = r.length;
                    return o > Ir ? (Ae.sendToBugsnag("Ignoring huge text node", "warning", {
                        length: o
                    }), "") : e.parentNode && "style" == un(e.parentNode) ? r : i.mask ? dn(r) : r
                }

                function Cr(e) {
                    return dr[e] || e.toLowerCase()
                }
                var Ar = /^\s*((prefetch|preload|prerender)\s*)+$/i,
                    xr = /^\s*.*((worklet|script|worker|font|fetch)\s*)+$/i;

                function Rr(e, t, n, r, i) {
                    var o, a;
                    if (void 0 === r && (r = un(e)), void 0 === i && (i = En(e)), null === r || "" === t) return null;
                    if ("link" === r && Ar.test(null !== (o = e.getAttribute("rel")) && void 0 !== o ? o : "") && !xr.test(null !== (a = e.getAttribute("as")) && void 0 !== a ? a : "")) return null;
                    var u, c = function(e, t, n) {
                        var r, i, o, a, u, c, h, l, d, p, f, _, v, g = void 0;
                        (null === (r = null == t ? void 0 : t.watchKind) || void 0 === r ? void 0 : r.has(cn.Exclude)) ? g = Ve.Exclude: (null == t ? void 0 : t.mask) && (g = Ve.Mask);
                        var m = [null === (a = null === (o = null === (i = Vr.blocklist[Ve.Any]) || void 0 === i ? void 0 : i[e]) || void 0 === o ? void 0 : o["static"]) || void 0 === a ? void 0 : a[n], null === (h = null === (c = null === (u = Vr.blocklist[Ve.Any]) || void 0 === u ? void 0 : u["*"]) || void 0 === c ? void 0 : c["static"]) || void 0 === h ? void 0 : h[n], g ? null === (p = null === (d = null === (l = Vr.blocklist[g]) || void 0 === l ? void 0 : l[e]) || void 0 === d ? void 0 : d["static"]) || void 0 === p ? void 0 : p[n] : void 0, g ? null === (v = null === (_ = null === (f = Vr.blocklist[g]) || void 0 === f ? void 0 : f["*"]) || void 0 === _ ? void 0 : _["static"]) || void 0 === v ? void 0 : v[n] : void 0];
                        return Vr.hasPrefix && m.push(zr(Ve.Any, e, n), zr(Ve.Any, "*", n), g ? zr(g, e, n) : void 0, g ? zr(g, "*", n) : void 0),
                            function(e) {
                                var t = e.filter(function(e) {
                                    return void 0 !== e
                                });
                                if (0 !== t.length) return s.mathMin.apply(s, t)
                            }(m)
                    }(r, i, t);
                    if (void 0 === c && !i) return null;
                    switch (c) {
                        case void 0:
                            return n;
                        case je.Erase:
                            return null;
                        case je.MaskText:
                            return dn(n);
                        case je.ScrubCss:
                            return u = function(e, t, n) {
                                return "" + e + jr + n
                            }, n.replace($t, function(e) {
                                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                var r = t[0] || t[3] || t[6] || t[9] || t[12],
                                    i = (t[1] || t[4] || t[7] || t[10] || t[13], t[2] || t[5] || t[8] || t[11] || t[14]);
                                return t[15], u(r, 0, i)
                            });
                        case je.ScrubUrl:
                            return Pr(n, {
                                source: "dom",
                                type: r
                            });
                        default:
                            return (0, or.nt)(c);
                    }
                }
                var Or = /^data:/i;

                function Pr(e, t) {
                    if (Or.test(e)) return e;
                    switch (t.source) {
                        case "dom":
                            switch (n = t.type) {
                                case "frame":
                                case "iframe":
                                    return Hr(e);
                                default:
                                    return Mr(e);
                            }
                        case "event":
                            switch (n = t.type) {
                                case Ee.AJAX_REQUEST:
                                case Ee.NAVIGATE:
                                    return Mr(e);
                                case Ee.SET_FRAME_BASE:
                                    return Hr(e);
                                default:
                                    return (0, or.nt)(n);
                            }
                        case "log":
                            return Hr(e);
                        case "page":
                            var n;
                            switch (n = t.type) {
                                case "base":
                                    return Hr(e);
                                case "referrer":
                                case "url":
                                    return Mr(e);
                                default:
                                    return (0, or.nt)(n);
                            }
                        case "perfEntry":
                            switch (t.type) {
                                case "frame":
                                case "iframe":
                                case "navigation":
                                case "other":
                                    return Hr(e);
                                default:
                                    return Mr(e);
                            }
                        default:
                            return (0, or.nt)(t);
                    }
                }

                function Mr(e) {
                    return qr(Nr, e)
                }
                var Lr = Je.DefaultOrgSettings.MaxUrlLength,
                    Ur = pr(Je.DefaultOrgSettings.UrlPrivacyConfig),
                    Nr = pr(Je.DefaultOrgSettings.UrlPrivacyConfig);

                function Fr(e, t) {
                    Ur = pr(Je.DefaultOrgSettings.UrlPrivacyConfig.concat(e)), Nr = pr(e), Lr = t || Je.DefaultOrgSettings.MaxUrlLength
                }

                function Hr(e) {
                    return qr(Ur, e)
                }

                function qr(e, t) {
                    return function(e, t, n) {
                        void 0 === n && (n = vr);
                        for (var r = {
                                Hash: [],
                                Host: [],
                                Path: [],
                                QueryParam: [],
                                Query: []
                            }, i = 0, o = e; i < o.length; i++) {
                            var s = o[i];
                            wr(s.If, t) && br(r, s.Exclude)
                        }
                        var a, u, c = gr(r.Host, t.host, n);
                        return t.host = c, t.port && (a = c, u = t.port, a.substring(a.length - u.length) !== u) && (t.port = ""), t.pathname = gr(r.Path, Tr(t.pathname), n), t.hash && (t.hash = gr(r.Hash, t.hash, n)), t.search && (t.search = function(e, t, n) {
                            return void 0 === n && (n = vr), t.split("?").map(function(t) {
                                return t.replace("?", "").split("&").map(function(t) {
                                    return gr(e, t, n)
                                }).join("&")
                            }).join("?")
                        }(r.QueryParam, t.search, n), t.search = gr(r.Query, t.search, n)), t.href
                    }(e, hr("", t)).substring(0, Lr)
                }
                var Dr = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi,
                    Wr = /(?:(http)|(ftp)|(ws)|(blob)|(file))[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi;

                function Br(e) {
                    return e.replace(Dr, "<email>").replace(Wr, function(e) {
                        return Pr(e, {
                            source: "log",
                            type: "debug"
                        })
                    })
                }
                var Vr, jr = "https://fs-excluded.invalid";

                function Kr(e) {
                    var t, n, r, i, o, s, a, u, c, h, l, d, p, f, _, v;
                    try {
                        for (var g = (Vr = {
                                blocklist: {},
                                hasPrefix: !1
                            }).blocklist, m = (null !== (r = null == e ? void 0 : e.length) && void 0 !== r ? r : 0) > 0 ? e : Je.DefaultOrgSettings.AttributeBlocklist, y = {}, S = 0, w = m; S < w.length; S++) {
                            var E = w[S],
                                b = E.Action;
                            switch (b) {
                                case je.Erase:
                                case je.MaskText:
                                case je.ScrubCss:
                                case je.ScrubUrl:
                                    break;
                                default:
                                    Ae.sendToBugsnag("Detected unexpected attribute block action " + b, "warning"), b = je.Erase;
                            }
                            if (null !== (i = g[h = E.Target]) && void 0 !== i || (g[h] = {}), null !== (o = (l = g[E.Target])[d = E.Tag]) && void 0 !== o || (l[d] = {
                                    "static": {},
                                    regex: {}
                                }), E.Type === Ke.Prefix) null !== (s = y[p = E.Target]) && void 0 !== s || (y[p] = {}), null !== (a = (f = y[E.Target])[_ = E.Tag]) && void 0 !== a || (f[_] = {}), null !== (u = (v = y[E.Target][E.Tag])[b]) && void 0 !== u || (v[b] = []), y[E.Target][E.Tag][b].push(null !== (c = E.Name) && void 0 !== c ? c : "");
                            else {
                                if (!E.Name) {
                                    Ae.sendToBugsnag("Detected an empty named static attribute " + JSON.stringify(E), "warning");
                                    continue
                                }
                                g[E.Target][E.Tag]["static"][E.Name] = b
                            }
                        }
                        for (var T in y)
                            for (var I in y[T])
                                for (var k in y[T][I]) {
                                    var C = y[T][I][k];
                                    g[T][I].regex[k] = new RegExp("^(?:" + C.join("|") + ")", "i"), Vr.hasPrefix = !0
                                }
                    } catch (e) {
                        Ae.sendToBugsnag(e, "warning"), Vr = {
                            blocklist: (t = {}, t[Ve.Any] = {
                                "*": {
                                    "static": {},
                                    regex: (n = {}, n[je.Erase] = /.*/, n)
                                }
                            }, t),
                            hasPrefix: !0
                        }
                    }
                }

                function zr(e, t, n) {
                    var r, i, o = null === (i = null === (r = Vr.blocklist[e]) || void 0 === r ? void 0 : r[t]) || void 0 === i ? void 0 : i.regex;
                    if (o)
                        for (var s in o)
                            if (o[s].test(n)) return Number(s)
                }

                function Qr(e) {
                    return "function" == typeof(t = e.constructor) && Function.prototype.toString.call(t).indexOf("[native code]") > -1;
                    var t
                }
                Kr();
                var Gr = "#polyfillshadow",
                    Yr = new WeakMap;

                function Xr(e, t) {
                    var n = $r(e, t);
                    return n ? n.length > 0 : !!e.firstChild
                }

                function Zr(e, t, n) {
                    Jr(e, t, n, !0)
                }

                function Jr(e, t, n, r) {
                    var i = $r(e, t);
                    if (!i) return Yr["delete"](e), r ? function(e, t) {
                        if (e) {
                            var n = new WeakMap,
                                r = e;
                            do {
                                n.set(r, !0), t(r), r = r.previousSibling
                            } while (r && !n.has(r))
                        }
                    }(e.lastChild, n) : ne(e.firstChild, n);
                    for (var o = r ? i.length - 1 : 0, s = r ? -1 : i.length; o !== s;) n(i[o]), r ? --o : ++o;
                    Yr["delete"](e)
                }

                function $r(e, t) {
                    var n = void 0;
                    return Yr.has(e) ? n = Yr.get(e) : t.shadowRootType === Gr && window.HTMLSlotElement ? "slot" === un(e) && Yr.set(e, n = e.assignedNodes()) : Yr.set(e, void 0), n
                }
                var ei = {
                        INPUT: !0,
                        TEXTAREA: !0,
                        NOSCRIPT: !0
                    },
                    ti = function() {
                        function e(e, t, n) {
                            this._watcher = e, this._resizer = t, this._watchedElIntersectionObserver = n, vn = {}, gn = 1
                        }
                        return e.prototype.tokenizeNode = function(e, t, n, r, i, o, s) {
                            var a = this,
                                u = En(t),
                                c = En(n),
                                h = [];
                            return function(t) {
                                var n = gn;
                                try {
                                    return a.tokeNode(e, u, c, r, h, i, o, s), !0
                                } catch (e) {
                                    return gn = n, !1
                                }
                            }() || (h = []), h
                        }, e.prototype.tokeNode = function(e, t, n, r, i, o, s, a) {
                            for (var u, c = [{
                                    parentMirror: t,
                                    nextMirror: n,
                                    node: r
                                }], h = function(e, t) {
                                    return function(n) {
                                        n && e.push({
                                            parentMirror: t,
                                            nextMirror: null,
                                            node: n
                                        })
                                    }
                                }; c.length;) {
                                var l = c.pop();
                                if (l)
                                    if ("string" != typeof l) {
                                        var d = l.parentMirror,
                                            p = l.nextMirror,
                                            f = l.node,
                                            _ = un(f),
                                            v = this._encodeTagAndAttributes(e, d, p, _, f, i, o, s);
                                        if (null != v && !(null === (u = v.watchKind) || void 0 === u ? void 0 : u.has(cn.Exclude))) {
                                            var g = 1 === f.nodeType ? f.shadowRoot : null;
                                            (g || Xr(f, v)) && a(v) && (c.push("]"), Zr(f, v, h(c, v)), g && c.push({
                                                parentMirror: v,
                                                nextMirror: null,
                                                node: g
                                            }), c.push("["))
                                        }
                                    } else i.push(l)
                            }
                        }, e.prototype._encodeTagAndAttributes = function(e, t, n, r, i, o, s, a) {
                            var u, c, h;
                            if (!this._shouldEncode(r, i, t)) return null;
                            var l, d, p, f = function(e) {
                                    if (e.constructor === window.ShadowRoot) return Qr(e) ? "#shadow" : Gr
                                }(i),
                                _ = function(e) {
                                    var t = {
                                        id: gn++,
                                        node: e
                                    };
                                    return vn[t.id] = t, e._fs = t.id, t
                                }(i);
                            if (_.shadowRootType = f || (null == t ? void 0 : t.shadowRootType), t && (f ? (t.shadow = _, _.parent = t) : (l = t, p = n, kn(d = _, this._resizer), d.parent = l, d.next = p, p && (d.prev = p.prev, p.prev = d), null == d.next ? (d.prev = l.lastChild, l.lastChild = d) : d.next.prev = d, null == d.prev ? l.child = d : d.prev.next = d)), 10 == i.nodeType) {
                                var v = i;
                                return o.push("<!DOCTYPE", ":name", v.name, ":publicId", v.publicId || "", ":systemId", v.systemId || ""), _
                            }
                            _.mask = null === (u = _.parent) || void 0 === u ? void 0 : u.mask;
                            try {
                                switch (i.nodeType) {
                                    default: o.push("<" + i.nodeName),
                                    ni(i, s);
                                    break;
                                    case 11:
                                            case 9:
                                            var g = void 0;g = f || i.nodeName,
                                        o.push("<" + g),
                                        ni(i, s);
                                        break;
                                    case 3:
                                            void 0 === _.mask && (_.mask = !_.parent || _.parent.mask),
                                        _.mask && this._resizer.observe(i.parentElement),
                                        ni(i, s),
                                        o.push("<" + i.nodeName, kr(i, _, !0));
                                        break;
                                    case 1:
                                            var m = i;g = m.nodeName,
                                        "http://www.w3.org/2000/svg" == m.namespaceURI && (g = "svg:" + g),
                                        o.push("<" + g);
                                        var y = this.getWatchState(m, !!_.shadowRootType, e);null != y && (_.watchKind = y, y.has(cn.Watch) && (this._resizer.observe(m), null === (c = this._watchedElIntersectionObserver) || void 0 === c || c.observe(m)), y.has(cn.Exclude) && (this._resizer.observe(m), o.push(":_fs_excluded", "true")), y.has(cn.Unmask) && (_.mask = !1), y.has(cn.Mask) && (_.mask = !0)),
                                        _.mask && o.push(":_fs_masked", "true"),
                                        (null === (h = _.watchKind) || void 0 === h ? void 0 : h.has(cn.Exclude)) || ni(i, s);
                                        var S = !1,
                                            w = {};
                                        if (function(e, t, n, r) {
                                                var i;
                                                if (!Zn || "output" !== t) {
                                                    var o = n;
                                                    if (!(void 0 !== o.hasAttributes && !o.hasAttributes() || void 0 === o.hasAttributes && o.attributes && o.attributes.length <= 0))
                                                        if (void 0 !== o.getAttributeNames)
                                                            for (var s = 0, a = null !== (i = o.getAttributeNames()) && void 0 !== i ? i : []; s < a.length; s++) {
                                                                var u = a[s];
                                                                ri(e, t, n, r, u, o.getAttribute(u))
                                                            } else
                                                                for (var c = 0; c < o.attributes.length; c++) {
                                                                    var h = o.attributes[c];
                                                                    null != h && ri(e, t, n, r, h.name, h.value)
                                                                }
                                                }
                                            }(_, r, m, function(e, t) {
                                                S = !0, o.push(":" + e), o.push(t), w[e] = t
                                            }), S) try {
                                            a(r, m, w)
                                        } catch (e) {
                                            Ae.sendToBugsnag(e, "error")
                                        }
                                }
                            } catch (e) {
                                Ae.sendToBugsnag(e, "error")
                            }
                            return _
                        }, e.prototype._shouldEncode = function(e, t, n) {
                            return "script" != e && 8 != t.nodeType
                        }, e.prototype.getWatchState = function(e, t, n) {
                            return t || null == n || ei[e.nodeName] ? this._watcher.isWatched(e) : n.get(e)
                        }, e
                    }();

                function ni(e, t) {
                    try {
                        t(e)
                    } catch (e) {
                        Ae.sendToBugsnag(e, "error")
                    }
                }

                function ri(e, t, n, r, i, o) {
                    if (null !== o) {
                        var s = Cr(i),
                            a = Rr(n, s, o, t, e);
                        null !== a && r(s, a)
                    }
                }
                var ii = JSON.parse("[{\"Selector\":\"input[type=password]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"input[type=hidden]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"[autocomplete^=cc-]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"object:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"embed:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"canvas\",\"Consent\":false,\"Type\":1},{\"Selector\":\"noscript\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-hide\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude-without-consent\",\"Consent\":true,\"Type\":1},{\"Selector\":\".fs-mask\",\"Consent\":false,\"Type\":2},{\"Selector\":\".fs-mask-without-consent\",\"Consent\":true,\"Type\":2},{\"Selector\":\".fs-unmask\",\"Consent\":false,\"Type\":3},{\"Selector\":\".fs-unmask-with-consent\",\"Consent\":true,\"Type\":3},{\"Selector\":\".fs-block\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-record-with-consent\",\"Consent\":true,\"Type\":1}]"),
                    oi = function(e, t) {
                        return e | t
                    },
                    si = fn.reduce(oi, 0),
                    ai = pn.reduce(oi, 0),
                    ui = function() {
                        function e(e) {
                            void 0 === e && (e = 0), this._elementKinds = e
                        }
                        return e.prototype.has = function(e) {
                            return !!(this._elementKinds & e)
                        }, e.prototype.set = function(t) {
                            if (this._elementKinds & ai && t & ai) {
                                var n = this._elementKinds | t,
                                    r = e._getStrictestPrivacyKind(n);
                                this._elementKinds = e._combineBits(r, this._elementKinds)
                            } else this._elementKinds |= t
                        }, e.prototype.hasKinds = function() {
                            return 0 !== this._elementKinds
                        }, e.areEqual = function(e, t) {
                            return null == e && null == t || null != e && null != t && e.equals(t)
                        }, e.prototype.getStrictestPrivacyKind = function() {
                            return e._getStrictestPrivacyKind(this._elementKinds)
                        }, e._getStrictestPrivacyKind = function(e) {
                            for (var t = 0, n = pn; t < n.length; t++) {
                                var r = n[t];
                                if (e & r) return r
                            }
                            return null
                        }, e.needsToObserve = function(e, t) {
                            var n, r, i = null !== (n = null == e ? void 0 : e._elementKinds) && void 0 !== n ? n : 0;
                            return !!((null !== (r = null == t ? void 0 : t._elementKinds) && void 0 !== r ? r : 0) & ~i & si)
                        }, e.combineKindsPreservePrivacy = function(t, n) {
                            var r, i, o = e._combineBits(null !== (r = null == t ? void 0 : t._elementKinds) && void 0 !== r ? r : 0, null !== (i = null == n ? void 0 : n._elementKinds) && void 0 !== i ? i : 0);
                            return new e(o)
                        }, e._combineBits = function(e, t) {
                            return e & ai | t & si
                        }, e.prototype.equals = function(e) {
                            return !!e && this._elementKinds === e._elementKinds
                        }, e
                    }();

                function ci(e) {
                    var t = document.documentElement || document.createElement("div");
                    try {
                        return s.elMatches(t, e), !0
                    } catch (t) {
                        return Ae.sendToBugsnag("Browser rejected rule", "warning", {
                            selector: e,
                            error: t.toString()
                        }), !1
                    }
                }
                var hi = {
                        1: "exclude",
                        2: "mask",
                        3: "unmask",
                        4: "watch",
                        5: "keep"
                    },
                    li = function() {
                        function e() {
                            this._withConsent = di(), this._withoutConsent = di()
                        }
                        return e.prototype.forConsentState = function(e) {
                            return e ? this._withConsent : this._withoutConsent
                        }, e.prototype.addElementBlockRules = function(e) {
                            var t = this,
                                n = di(),
                                r = di();
                            e.map(fi).filter(function(e) {
                                return pi(e.selector)
                            }).forEach(function(e) {
                                if (e.consent) return e.kind === cn.Unmask ? void n[e.kind].push(e) : void r[e.kind].push(e);
                                n[e.kind].push(e), r[e.kind].push(e)
                            });
                            for (var i = document.documentElement || document.createElement("div"), o = function(e, n) {
                                    try {
                                        if (0 === e.length) return;
                                        var r = e.map(function(e) {
                                            return e.selector
                                        }).join(", ");
                                        s.elMatches(i, r), n.push(r)
                                    } catch (n) {
                                        Ae.sendToBugsnag("Browser rejected optimistic merge rule", "warning"), t._fallback(e)
                                    }
                                }, a = 0, u = _n; a < u.length; a++) {
                                var c = u[a];
                                o(n[c], this._withConsent[c]), o(r[c], this._withoutConsent[c])
                            }
                        }, e.prototype.addRule = function(e, t, n) {
                            if (this._tryToAddRule(e, t, n)) return !0;
                            switch (e) {
                                case cn.Watch:
                                case cn.Unmask:
                                case cn.Keep:
                                    break;
                                case cn.Mask:
                                case cn.Exclude:
                                default:
                                    this._withConsent[e] = ["*"], this._withoutConsent[e] = ["*"];
                            }
                            return !1
                        }, e.prototype._tryToAddRule = function(e, t, n) {
                            try {
                                if (pi(n)) {
                                    if (t) {
                                        var r = this._getConsentRulesForKind(e);
                                        return this._mergeRule(e, r, n)
                                    }
                                    return this._mergeRule(e, this._withoutConsent, n) && this._mergeRule(e, this._withConsent, n)
                                }
                                return !0
                            } catch (e) {
                                return Ae.sendToBugsnag("Error adding block rule", "error", {
                                    selector: n,
                                    error: e.toString()
                                }), !1
                            }
                        }, e.prototype._mergeRule = function(e, t, n) {
                            var r = document.documentElement || document.createElement("div"),
                                i = e;
                            switch (i) {
                                case cn.Exclude:
                                case cn.Mask:
                                case cn.Unmask:
                                case cn.Watch:
                                case cn.Keep:
                                    break;
                                default:
                                    i = cn.Exclude;
                            }
                            if (0 == t[i].length) return !!ci(n) && (t[i].push(n), !0);
                            var o = t[i].length - 1,
                                a = t[i][o].concat(", ", n);
                            try {
                                s.elMatches(r, a)
                            } catch (e) {
                                return !!ci(n) && (t[i].push(n), Ae.sendToBugsnag("Browser rejected merged rule", "warning", {
                                    kind: hi[i],
                                    selector: n,
                                    error: e.toString()
                                }), !0)
                            }
                            return t[i][o] = a, !0
                        }, e.prototype.addElementBlock = function(e) {
                            var t = fi(e),
                                n = t.kind,
                                r = t.consent,
                                i = t.selector;
                            return this.addRule(n, r, i)
                        }, e.prototype._fallback = function(e) {
                            for (var t = 0, n = e; t < n.length; t++) {
                                var r = n[t],
                                    i = r.kind,
                                    o = r.consent,
                                    s = r.selector;
                                this.addRule(i, o, s)
                            }
                        }, e.prototype._getConsentRulesForKind = function(e) {
                            var t = e === cn.Unmask;
                            return this.forConsentState(t)
                        }, e
                    }();

                function di() {
                    for (var e = Object.create ? Object.create(null) : {}, t = 0, n = _n; t < n.length; t++) e[n[t]] = [];
                    return e
                }

                function pi(e) {
                    return !e.match(tn) && "" != e.trim()
                }

                function fi(e) {
                    var t = cn.Exclude;
                    switch (e.Type) {
                        case Ge.Unset:
                        case Ge.Exclude:
                            t = cn.Exclude;
                            break;
                        case Ge.Mask:
                            t = cn.Mask;
                            break;
                        case Ge.Unmask:
                            t = cn.Unmask;
                            break;
                        case Ge.Watch:
                            t = cn.Watch;
                            break;
                        case Ge.Keep:
                            t = cn.Keep;
                            break;
                        default:
                            (0, or.nt)(e.Type, "Unexpected block type: " + e.Type);
                    }
                    return {
                        kind: t,
                        consent: e.Consent,
                        selector: e.Selector
                    }
                }

                function _i(e) {
                    if (!(null == e ? void 0 : e.hasKinds())) return 0;
                    var t = e.getStrictestPrivacyKind();
                    return null === t ? 0 : pn.length - pn.indexOf(t)
                }
                var vi = function() {
                    function e() {
                        this._rules = new li, this._qsaStrategyEnabled = !Jn
                    }
                    return e.prototype.initialize = function(e) {
                        var t = e.blocks,
                            n = e.keeps,
                            r = e.watches,
                            o = (0, i.__spreadArray)([], ii);
                        if (t)
                            for (var s = 0, a = t; s < a.length; s++) {
                                var u = a[s];
                                o.push(u)
                            }
                        if (r)
                            for (var c = 0, h = r; c < h.length; c++) {
                                var l = h[c];
                                o.push({
                                    Type: Ge.Watch,
                                    Consent: Oe.RevokeConsent,
                                    Selector: l.Selector
                                })
                            }
                        this._rules.addElementBlockRules(o), n && this._batchElementKeeps(n)
                    }, e.prototype.isWatched = function(e) {
                        var t, n = new ui,
                            r = this._rules.forConsentState(null !== (t = this._userHasConsented) && void 0 !== t && t),
                            i = this._firstMatches(e, pn, r) | this._findMatches(e, fn, r);
                        return n.set(i), n.hasKinds() ? n : null
                    }, e.prototype._firstMatches = function(e, t, n) {
                        return this._findMatches(e, t, n, !0)
                    }, e.prototype._findMatches = function(e, t, n, r) {
                        void 0 === r && (r = !1);
                        for (var i = 0, o = 0, a = t; o < a.length; o++) {
                            for (var u = a[o], c = !1, h = 0, l = n[u]; h < l.length; h++) {
                                var d = l[h];
                                if (s.elMatches(e, d)) {
                                    i |= u, c = !0;
                                    break
                                }
                            }
                            if (c && r) break
                        }
                        return i
                    }, e.prototype.addElementBlock = function(e) {
                        return this._rules.addElementBlock(e)
                    }, e.prototype._batchElementKeeps = function(e) {
                        for (var t = 0, n = e; t < n.length; t++) {
                            var r = n[t];
                            this.addElementKeep(r)
                        }
                    }, e.prototype.addElementKeep = function(e) {
                        var t = cn.Keep;
                        return e.Type === Ye.Click && this.addRule(t, e.Consent, e.Selector)
                    }, e.prototype.addRule = function(e, t, n) {
                        return this._rules.addRule(e, t, n)
                    }, e.prototype.getConsent = function() {
                        return this._userHasConsented
                    }, e.prototype.initializeConsent = function(e) {
                        void 0 === this._userHasConsented && this._setConsent(e, !1)
                    }, e.prototype.setConsent = function(e) {
                        this._setConsent(e, !0)
                    }, e.prototype._setConsent = function(e, t) {
                        void 0 === t && (t = !0), this._userHasConsented !== e && (this._userHasConsented = e, t && this.onConsentChange && this.onConsentChange())
                    }, e.prototype.allWatchedElements = function(e) {
                        var t;
                        if (!this._qsaStrategyEnabled) return null;
                        for (var n = new WeakMap, r = !1, i = function(e, t) {
                                var i, o = null !== (i = n.get(e)) && void 0 !== i ? i : new ui;
                                o.set(t), n.set(e, o), r = !0
                            }, o = this._rules.forConsentState(null !== (t = this._userHasConsented) && void 0 !== t && t), a = 0, u = _n; a < u.length; a++)
                            for (var c = u[a], h = 0, l = o[c]; h < l.length; h++) {
                                var d = l[h];
                                mi(e) && s.elMatches(e, d) && i(e, c);
                                for (var p = gi(e, d), f = 0; f < p.length; f++) i(p[f], c)
                            }
                        return r ? n : null
                    }, e
                }();

                function gi(e, t) {
                    return mi(e) ? s.elQuerySelectorAll(e, t) : function(e) {
                        return 9 === e.nodeType
                    }(e) ? s.docQuerySelectorAll(e, t) : function(e) {
                        return 11 === e.nodeType
                    }(e) ? s.docFragQuerySelectorAll(e, t) : e.querySelectorAll(t)
                }

                function mi(e) {
                    return 1 === e.nodeType
                }
                var yi = function() {
                        function e(e) {
                            this._ctx = e, this._recordedDims = {}, this._observedDims = {}
                        }
                        return e.create = function(e) {
                            return Si.isSupported(e.window) ? new Si(e) : new wi(e)
                        }, e.prototype.collect = function(e) {
                            var t = [];
                            for (var n in this._observedDims) this.addPlaceholderResize(e, t, parseInt(n, 10));
                            return this._observedDims = {}, t
                        }, e.prototype.isObserved = function(e) {
                            return !!this._recordedDims[e]
                        }, e.prototype.getSize = function(e, t) {
                            if (1 !== (null == e ? void 0 : e.nodeType)) return {
                                width: 0,
                                height: 0
                            };
                            if (!t || s.arrayIsArray(t) && 0 === t.length) return e.getBoundingClientRect();
                            var n = Array.isArray(t) ? t[0] : t;
                            switch (getComputedStyle(e).writingMode) {
                                case "horizontal-tb":
                                    return {
                                        width: n.inlineSize,
                                        height: n.blockSize
                                    };
                                case "vertical-lr":
                                case "vertical-rl":
                                    return {
                                        width: n.blockSize,
                                        height: n.inlineSize
                                    };
                                default:
                                    return e.getBoundingClientRect();
                            }
                        }, e.prototype.addEntry = function(e, t) {
                            try {
                                var n = Tn(e);
                                if (!n) return;
                                if (1 != e.nodeType) return;
                                var r = e,
                                    i = this.getSize(r, t);
                                this._observedDims[n] = i;
                                var o = this._ctx.queue();
                                if (!this._recordedDims[n] && void 0 !== o)
                                    for (var s = this.flushSizeEvents(n), a = 0, u = s; a < u.length; a++) {
                                        var c = u[a];
                                        o.enqueue(c)
                                    }
                            } catch (e) {}
                        }, e.prototype.addPlaceholderResize = function(e, t, n) {
                            for (var r = 0, o = this.flushSizeEvents(n); r < o.length; r++) {
                                var s = o[r];
                                t.push((0, i.__assign)((0, i.__assign)({}, s), {
                                    When: e
                                }))
                            }
                        }, e.prototype.flushSizeEvents = function(e) {
                            var t = this._observedDims[e];
                            if (!t) return [];
                            var n = bn(e);
                            if (!n) return [];
                            var r = n.watchKind,
                                i = t.width,
                                o = t.height,
                                s = this._recordedDims[e];
                            if (s && s.w == i && s.h == o) return [];
                            this._recordedDims[e] = {
                                w: i,
                                h: o
                            };
                            var a = [];
                            if (null == r ? void 0 : r.has(cn.Watch)) {
                                var u = 0 != i && 0 != o;
                                (!!s && 0 != s.w && 0 != s.h) != u && a.push({
                                    Kind: Ee.WATCHED_ELEM,
                                    Args: [e, u]
                                })
                            }
                            var c = n.node,
                                h = ("scrollLeft" in c);
                            return ((null == r ? void 0 : r.has(cn.Exclude)) || n.mask || h) && (a.push({
                                Kind: Ee.PLACEHOLDER_SIZE,
                                Args: [e, i, o]
                            }), h && a.push({
                                Kind: Ee.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                                Args: [e, c.scrollWidth, c.scrollHeight]
                            })), a
                        }, e
                    }(),
                    Si = function(e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return n._inlineGroups = new WeakMap, n._observedInlines = new WeakMap, n._obs = new t.window.ResizeObserver(function(e) {
                                for (var t = 0, r = e; t < r.length; t++) {
                                    var i = r[t],
                                        o = i.target,
                                        s = i.borderBoxSize;
                                    n.addEntry(o, s)
                                }
                            }), n._inlineGroupObs = new t.window.ResizeObserver(function(e) {
                                for (var t = 0, r = e; t < r.length; t++) {
                                    var i = r[t].target;
                                    n._addEntriesForInlineGroup(i)
                                }
                            }), n
                        }
                        return (0, i.__extends)(t, e), t.isSupported = function(e) {
                            return "function" == typeof e.ResizeObserver
                        }, t.prototype.observe = function(e) {
                            var t = this;
                            if (e && 1 == e.nodeType) {
                                var n = e;
                                this._obs.unobserve(n), this._obs.observe(n), this._ctx.measurer.requestMeasureTask(Dt.Medium, function() {
                                    t._addToInlineGroupIfNeeded(n)
                                })
                            }
                        }, t.prototype.unobserveSubtree = function(e) {}, t.prototype.nodeChanged = function(e) {
                            var t = this,
                                n = this._observedInlines.get(e);
                            "number" == typeof n && Tn(e) === n && this._ctx.measurer.requestMeasureTask(Dt.Medium, function() {
                                t.addEntry(e)
                            })
                        }, t.prototype._addEntriesForInlineGroup = function(e) {
                            var t = this._inlineGroups.get(e);
                            if (t)
                                for (var n in t) {
                                    var r = bn(t[n]);
                                    r ? this.addEntry(r.node) : delete t[n]
                                }
                        }, t.prototype._addToInlineGroupIfNeeded = function(e) {
                            var t = this,
                                n = Tn(e);
                            if (n) {
                                var r = this._nearestNonInlineElementAncestorOf(e);
                                if (r && r !== e) {
                                    this._observedInlines.set(e, n), this.addEntry(e);
                                    var i = this._inlineGroups.get(r);
                                    i || (i = Object.create(null), this._inlineGroups.set(r, i)), i[n] = n, s.setWindowTimeout(this._ctx.window, z(function() {
                                        t._inlineGroupObs.observe(r)
                                    }), 0)
                                }
                            }
                        }, t.prototype._nearestNonInlineElementAncestorOf = function(e) {
                            for (var t = 0, n = e;;) {
                                if (t++ > 1e3) return null;
                                if (!n || 1 != n.nodeType) return null;
                                var r = n;
                                if (getComputedStyle(r).display.indexOf("inline") < 0) return r;
                                n = n.parentNode
                            }
                        }, t
                    }(yi),
                    wi = function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return (0, i.__extends)(t, e), t.prototype.observe = function(e) {
                            var t = this;
                            if (e && 1 == e.nodeType) {
                                var n = e;
                                this.growWatchedIndex(En(e)), this._ctx.measurer.requestMeasureTask(Dt.Medium, function() {
                                    t.addEntry(n)
                                })
                            }
                        }, t.prototype.unobserveSubtree = function(e) {
                            var t = En(e);
                            t && this.clearWatchedIndex(t)
                        }, t.prototype.nodeChanged = function(e) {
                            var t = this,
                                n = this.relatedWatched(e);
                            this._ctx.measurer.requestMeasureTask(Dt.Medium, function() {
                                for (var e = 0, r = n; e < r.length; e++) {
                                    var i = r[e];
                                    t.addEntry(i)
                                }
                            })
                        }, t.prototype.watchedChildren = function(e) {
                            return e.watchedChildren
                        }, t.prototype.growWatchedIndex = function(e) {
                            if (e && mn(e.node))
                                for (var t = e, n = e.parent; n; n = n.parent) {
                                    if (this.watchedChildren(n) || (n.watchedChildren = {}), this.watchedChildren(t))
                                        for (var r in this.watchedChildren(t)) delete this.watchedChildren(n)[r];
                                    if (this.watchedChildren(n)[t.id] = t, $(this.watchedChildren(n), 2)) t = n;
                                    else if (ee(this.watchedChildren(n), 2)) break
                                }
                        }, t.prototype.relatedWatched = function(e) {
                            var t = [],
                                n = En(e);
                            if (n)
                                for (var r = [n], i = 0; r.length && ++i < 1e3;) {
                                    var o = r.pop();
                                    mn(o.node) && t.push(o.node), this.watchedChildren(o) && Z(this.watchedChildren(o), function(e) {
                                        r.push(e)
                                    })
                                } else {
                                    for (var s = e; s && !Tn(s);) s = s.parentNode;
                                    s && mn(s) && t.push(s)
                                }
                            return t
                        }, t.prototype.clearWatchedIndex = function(e) {
                            if (ee(this.watchedChildren(e), 0) || mn(e.node))
                                for (var t = this.watchedChildren(e) && ee(this.watchedChildren(e), 1) || mn(e.node) ? e.id : function(e) {
                                        for (var t in e)
                                            if (Object.prototype.hasOwnProperty.call(e, t)) return t
                                    }(this.watchedChildren(e)), n = t ? e.parent : null; n && this.watchedChildren(n) && this.watchedChildren(n)[t];) {
                                    if (delete this.watchedChildren(n)[t], $(this.watchedChildren(n), 1)) {
                                        var r = n.id,
                                            i = J(this.watchedChildren(n));
                                        for (n = n.parent; n && this.watchedChildren(n) && this.watchedChildren(n)[r];) delete this.watchedChildren(n)[r], this.watchedChildren(n)[i.id] = i, n = n.parent;
                                        break
                                    }
                                    n = n.parent
                                }
                        }, t
                    }(yi),
                    Ei = {
                        attributeName: null,
                        attributeNamespace: null,
                        addedNodes: [],
                        removedNodes: [],
                        nextSibling: null,
                        previousSibling: null,
                        oldValue: null
                    };

                function bi(e) {
                    return (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, Ei), e), {
                        type: "childList"
                    })
                }
                var Ti = function() {
                        function e(e, t, n, r, i, o, s) {
                            var a = this;
                            void 0 === n && (n = function() {}), void 0 === r && (r = function() {}), void 0 === i && (i = function() {}), void 0 === s && (s = function() {
                                return !0
                            }), this._watcher = t, this._nodeVisitor = n, this._beforeRemove = r, this._attrsVisitor = i, this._watchedElIntersectionObserver = o, this._visitChildren = s, this._sentDomSnapshot = !1, this._newShadowContainers = [], this._toRefresh = [], this._records = [], this._setPropertyWasThrottled = !1, this._wnd = e.window, this._resizer = yi.create(e), this._encoder = new ti(t, this._resizer, this._watchedElIntersectionObserver), Re(!this._watcher.onConsentChange, "This is the only consent change listener."), this._watcher.onConsentChange = function() {
                                return a.updateConsent()
                            }
                        }
                        return e.prototype.hookMutations = function(e) {
                            void 0 === e && (e = this._wnd.document), this._root = e, this._sentDomSnapshot = !1;
                            var t = !0;
                            if (Yn) try {
                                this.setUpIEWorkarounds()
                            } catch (e) {
                                t = !1
                            }
                            t && (this._observer = new MutationObserver(this._addMutations.bind(this)))
                        }, e.prototype._observerOff = function() {
                            this._observer && this._observer.disconnect()
                        }, e.prototype._addMutations = function(e) {
                            for (var t = 0, n = e; t < n.length; t++) {
                                var r = n[t];
                                this._records.push(r)
                            }
                        }, e.prototype.resizer = function() {
                            return this._resizer
                        }, e.prototype.shutdown = function() {
                            this._observer && this._observer.disconnect();
                            var e = En(this._root);
                            e && Cn(e), this._records = [], Yn && this.tearDownIEWorkarounds(), this._watcher.onConsentChange = null, this._attachShadowHook && (this._attachShadowHook.disable(), this._attachShadowHook = null)
                        }, e.prototype.processMutations = function(e) {
                            if (!this._root) return [];
                            var t = [];
                            if (this.maybeGetInitialSnapshot(e, t), this._setPropertyWasThrottled && (t.push({
                                    Kind: Ee.FAIL_THROTTLED,
                                    Args: [qe.SetPropertyHooks],
                                    When: e
                                }), this._setPropertyWasThrottled = !1), this._records.length > 0 || this._toRefresh.length > 0) {
                                var n = {},
                                    r = {};
                                for (var i in this.processRecords(e, t, r, n), r) {
                                    var o = i.split("\t");
                                    t.push({
                                        Kind: Ee.MUT_ATTR,
                                        Args: [parseInt(o[0], 10), o[1], r[i]],
                                        When: e
                                    })
                                }
                                for (var i in n) t.push({
                                    Kind: Ee.MUT_TEXT,
                                    Args: [parseInt(i, 10), n[i]],
                                    When: e
                                })
                            }
                            var s = this._newShadowContainers;
                            this._newShadowContainers = [];
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a].shadowRoot;
                                u && 0 != Tn(s[a]) && 0 == Tn(u) && (this.observe(u), this.genShadow(null, e, t, s[a], u))
                            }
                            return t.push.apply(t, this._resizer.collect(e)), this._records = [], t
                        }, e.prototype.recordingIsDetached = function() {
                            return !!this._root && this._root != this._wnd.document
                        }, e.prototype.maybeGetInitialSnapshot = function(e, t) {
                            if (!this._sentDomSnapshot && this._root) {
                                var n = this._watcher.allWatchedElements(this._root);
                                this.genInsert(n, e, t, null, this._root, null), this._resizer.nodeChanged(this._root), this._observer && this.observe(this._root), this._sentDomSnapshot = !0, this.hookAttachShadow()
                            }
                        }, e.prototype.hookAttachShadow = function() {
                            var e = this;
                            this._attachShadowHook = pe(Element.prototype, "attachShadow", !0), this._attachShadowHook && this._attachShadowHook.before(function(t) {
                                t.that.shadowRoot || e._newShadowContainers.push(t.that)
                            })
                        }, e.prototype.observe = function(e) {
                            var t;
                            try {
                                null === (t = this._observer) || void 0 === t || t.observe(e, {
                                    childList: !0,
                                    attributes: !0,
                                    characterData: !0,
                                    subtree: !0,
                                    attributeOldValue: !0,
                                    characterDataOldValue: !0
                                })
                            } catch (e) {}
                        }, e.prototype.processRecords = function(e, t, n, r) {
                            for (var i, o, s, a = this, u = {}, c = {}, h = function(n) {
                                    if (En(n)) {
                                        a.genRemove(e, t, En(n));
                                        var r = En(n.parentNode);
                                        r && (c[r.id] = r.node)
                                    }
                                }, l = 0; l < this._records.length; ++l) try {
                                var d = this._records[l],
                                    p = Tn(d.target);
                                if (!p) continue;
                                switch (u[p] = d.target, d.type) {
                                    case "childList":
                                        if (d.removedNodes.length > 0)
                                            for (var f = 0; f < d.removedNodes.length; ++f)(g = En(d.removedNodes[f])) && g.id && this.genRemove(e, t, g);
                                        if (d.addedNodes.length > 0) {
                                            c[p] = d.target;
                                            var _ = !(null == (T = d.target) ? void 0 : T.shadowRoot) || Qr(T.shadowRoot) ? null : En(T.shadowRoot);
                                            _ && (c[_.id] = _.node)
                                        }
                                        break;
                                    case "characterData":
                                        yn(d.target) || d.oldValue != d.target.textContent && (r[p] = kr(d.target));
                                        break;
                                    case "attributes":
                                        var v = un(C = d.target);
                                        if ("link" === v && "rel" === d.attributeName && Ar.test(null !== (o = d.oldValue) && void 0 !== o ? o : "")) {
                                            h(C);
                                            break
                                        }
                                        var g, m = wn(C),
                                            y = this._watcher.isWatched(C);
                                        if (_i(y) > _i(m)) {
                                            h(C);
                                            break
                                        }
                                        ui.needsToObserve(m, y) && (this._resizer.observe(C), (null == y ? void 0 : y.has(cn.Watch)) && (null === (s = this._watchedElIntersectionObserver) || void 0 === s || s.observe(C)), (g = En(C)) && (g.watchKind = ui.combineKindsPreservePrivacy(m, y)));
                                        var S = (void 0 === (b = d.attributeNamespace) && (b = ""), (null === b ? "" : {
                                                "http://www.w3.org/1999/xlink": "xlink:",
                                                "http://www.w3.org/XML/1998/namespace": "xml:",
                                                "http://www.w3.org/2000/xmlns/": "xmlns:"
                                            }[b] || "") + (d.attributeName || "")),
                                            w = Cr(S);
                                        if (C.hasAttribute(S)) {
                                            var E = d.target.getAttribute(S);
                                            d.oldValue != E && (E = Rr(d.target, w, E || "", v), this._attrsVisitor(v, d.target, ((i = {})[w] = E || "", i)), null !== E && (n[p + "\t" + w] = E))
                                        } else n[p + "\t" + w] = null;
                                }
                            } catch (e) {}
                            for (var b, T, I = 0, k = this._toRefresh; I < k.length; I++) {
                                var C = k[I];
                                try {
                                    h(C)
                                } catch (e) {
                                    Ae.sendToBugsnag(e, "error")
                                }
                            }
                            for (var A in this._toRefresh = [], c) {
                                var x = En(R = c[A]);
                                x && x.id && this.diff(e, t, R, x)
                            }
                            for (var A in u) {
                                var R = u[A];
                                this._resizer.nodeChanged(R)
                            }
                        }, e.prototype._checkForMissingInsertions = function(e) {
                            return this._sentDomSnapshot && e && this._root ? (this.walkAddRecords(this._root), []) : []
                        }, e.prototype.walkAddRecords = function(e) {
                            var t, n, r = this;
                            Tn(e) || null === e.parentNode ? ne(e.firstChild, function(e) {
                                r.walkAddRecords(e)
                            }) : this._records.push((t = e.parentNode, 0 === (n = [e]).length ? bi({
                                target: t
                            }) : bi({
                                addedNodes: n,
                                nextSibling: te(n[n.length - 1]),
                                previousSibling: re(n[0]),
                                target: t
                            })))
                        }, e.prototype.diff = function(e, t, n, r) {
                            var i = [],
                                o = r.child;
                            for (function(e, t, r) {
                                    Jr(e, t, function(e) {
                                        if (o)
                                            for (var t = En(e); o;) {
                                                if (!Tn(e)) {
                                                    i.push({
                                                        insert: [n, e, o.node]
                                                    });
                                                    break
                                                }
                                                if (t && o.id == t.id) {
                                                    o = o.next;
                                                    break
                                                }
                                                i.push({
                                                    remove: o
                                                }), o = o.next
                                            } else i.push({
                                                insert: [n, e, null]
                                            })
                                    }, !1)
                                }(n, r); o; o = o.next) i.push({
                                remove: o
                            });
                            for (var s = !1, a = 0; a < i.length; a++) {
                                var u = i[a];
                                u.insert ? this.genInsert(null, e, t, u.insert[0], u.insert[1], u.insert[2]) : u.remove && (s = !0, this.genRemove(e, t, u.remove))
                            }
                            Re(!s, "All remove events should have been generated earlier, in MutationWatcher.processMutations")
                        }, e.prototype.genShadow = function(e, t, n, r, i) {
                            var o = Tn(r),
                                s = _(),
                                a = this.genDocStream(e, r, i, null),
                                u = _() - s;
                            a.length > 0 && n.push({
                                Kind: Ee.MUT_SHADOW,
                                Args: [o, a],
                                When: t
                            }, {
                                Kind: Ee.TIMING,
                                Args: [
                                    [Ce.Internal, Te.Serialization, ke.NodeEncoding, t, u]
                                ],
                                When: t
                            })
                        }, e.prototype.genInsert = function(e, t, n, r, i, o) {
                            var s = Tn(r) || -1,
                                a = Tn(o) || -1,
                                u = -1 === s && -1 === a,
                                c = _(),
                                h = this.genDocStream(e, r, i, o),
                                l = _() - c;
                            h.length > 0 && n.push({
                                Kind: Ee.MUT_INSERT,
                                Args: [s, a, h],
                                When: t
                            }, {
                                Kind: Ee.TIMING,
                                Args: [
                                    [Ce.Internal, Te.Serialization, u ? ke.DomSnapshot : ke.NodeEncoding, t, l]
                                ],
                                When: t
                            })
                        }, e.prototype.genDocStream = function(e, t, n, r) {
                            var i = this;
                            if (t && yn(t)) return [];
                            for (var o = [], s = this._encoder.tokenizeNode(e, t, r, n, function(e) {
                                    if (1 == e.nodeType) {
                                        var t = e;
                                        if (t.shadowRoot && i.observe(t.shadowRoot), "SLOT" === e.nodeName) {
                                            var n = En(e);
                                            (null == n ? void 0 : n.shadowRootType) === Gr && e.addEventListener("slotchange", Ae.wrap(function(t) {
                                                var n;
                                                i._toRefresh.push(null !== (n = t.target) && void 0 !== n ? n : e)
                                            }))
                                        }
                                    }
                                    i._nodeVisitor(e, o)
                                }, this._attrsVisitor, this._visitChildren), a = 0, u = o; a < u.length; a++)(0, u[a])();
                            return s
                        }, e.prototype.genRemove = function(e, t, n) {
                            var r = n.id;
                            if (this._beforeRemove(n), kn(n, this._resizer), t.length > 0) {
                                var i = t[t.length - 1];
                                if (i.Kind == Ee.MUT_REMOVE) return void i.Args.push(r)
                            }
                            t.push({
                                Kind: Ee.MUT_REMOVE,
                                Args: [r],
                                When: e
                            })
                        }, e.prototype.setUpIEWorkarounds = function() {
                            var t = this;
                            if (Xn) {
                                var n = Object.getOwnPropertyDescriptor(Node.prototype, "textContent"),
                                    r = n && n.set;
                                if (!n || !r) throw new Error("Missing textContent setter -- not safe to record mutations.");
                                Object.defineProperty(Element.prototype, "textContent", (0, i.__assign)((0, i.__assign)({}, n), {
                                    set: function(e) {
                                        try {
                                            for (var t = void 0; t = this.firstChild;) this.removeChild(t);
                                            if (null === e || "" == e) return;
                                            var n = (this.ownerDocument || document).createTextNode(e);
                                            this.appendChild(n)
                                        } catch (t) {
                                            r && r.call(this, e)
                                        }
                                    }
                                }))
                            }
                            this._setPropertyThrottle = new Mn(e.ThrottleMax, e.ThrottleInterval, function() {
                                return new Pn(function() {
                                    t._setPropertyWasThrottled = !0, t.tearDownIEWorkarounds()
                                }).start()
                            });
                            var o = this._setPropertyThrottle.guard(function(e) {
                                var t = e.cssText;
                                e.cssText = t
                            });
                            this._setPropertyThrottle.open(), this._setPropertyHook = pe(CSSStyleDeclaration.prototype, "setProperty"), this._setPropertyHook && this._setPropertyHook.afterSync(function(e) {
                                o(e.that)
                            }), this._removePropertyHook = pe(CSSStyleDeclaration.prototype, "removeProperty"), this._removePropertyHook && this._removePropertyHook.afterSync(function(e) {
                                o(e.that)
                            })
                        }, e.prototype.tearDownIEWorkarounds = function() {
                            this._setPropertyThrottle && this._setPropertyThrottle.close(), this._setPropertyHook && this._setPropertyHook.disable(), this._removePropertyHook && this._removePropertyHook.disable()
                        }, e.prototype.updateConsent = function() {
                            var e = this;
                            this._root && ne(this._root.firstChild, function(t) {
                                return e.refreshElement(t)
                            })
                        }, e.prototype.refreshElement = function(e) {
                            Tn(e) && this._toRefresh.push(e)
                        }, e.ThrottleMax = 1024, e.ThrottleInterval = 1e4, e
                    }(),
                    Ii = function() {
                        function e(e, t, n, r) {
                            var i = this;
                            this._ctx = e, this._queue = t, this.urlPrivacy = r, this._recordResourceImgs = !1, this._recordResourceTimings = !1, this._perfSupported = !1, this._timingSupported = !1, this._getEntriesSupported = !1, this._memorySupported = !1, this._timeOriginSupported = !1, this._maxPerfMarksPerPage = Je.DefaultOrgSettings.MaxPerfMarksPerPage, this._numOfPerfMarkEntries = 0, this._lastUsedJSHeapSize = 0, this._gotLoad = !1, this._observer = null, this._observedBatches = [], this._finalTask = new Ft(function(e) {
                                i._resolveFinalTask = function() {
                                    e({
                                        timeRemaining: function() {
                                            return Number.POSITIVE_INFINITY
                                        },
                                        didTimeout: !1
                                    }), i._resolveFinalTask = void 0
                                }
                            }), this._isRunningIdleTaskLoop = !1;
                            var o = window.performance;
                            o && (this._perfSupported = !0, o.timing && (this._timingSupported = !0), o.memory && (this._memorySupported = !0), o.timeOrigin && (this._timeOriginSupported = !0), "function" == typeof o.getEntries && (this._getEntriesSupported = !0), this._listeners = n.createChild())
                        }
                        return e.prototype.start = function(e) {
                            var t = this,
                                n = e.resourceUploader,
                                r = e.recTimings,
                                i = e.recImgs,
                                o = e.maxPerfMarksPerPage;
                            this._resourceUploader = n, this._recordResourceTimings = r, this._recordResourceImgs = i, this._maxPerfMarksPerPage = o || Je.DefaultOrgSettings.MaxPerfMarksPerPage, this._numOfPerfMarkEntries = 0;
                            var s = window.performance;
                            s && (this._ctx.recording.inFrame || this._queue.enqueue({
                                Kind: Ee.REC_FEAT_SUPPORTED,
                                Args: [Fe.Performance, this._timingSupported, Fe.PerformanceEntries, this._getEntriesSupported, Fe.PerformanceMemory, this._memorySupported, Fe.PerformanceObserver, !!window.PerformanceObserver, Fe.PerformanceTimeOrigin, this._timeOriginSupported]
                            }), this.observe(), !this._observer && s.addEventListener && s.removeEventListener && this._listeners && this._listeners.add(s, "resourcetimingbufferfull", !0, function() {
                                t._queue.enqueue({
                                    Kind: Ee.RESOURCE_TIMING_BUFFER_FULL,
                                    Args: []
                                })
                            }), this.checkMemory(), this.recordTimeOrigin())
                        }, e.prototype.startIdleTaskLoop = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            if (!this._perfSupported || !this._getEntriesSupported || 0 == this._observedBatches.length) return [2];
                                            if (this._isRunningIdleTaskLoop) return [2];
                                            this._isRunningIdleTaskLoop = !0, e.label = 1;
                                        case 1:
                                            return e.trys.push([1, , 3, 4]), [4, this.startIdleTaskLoopImpl()];
                                        case 2:
                                            return e.sent(), [3, 4];
                                        case 3:
                                            return this._isRunningIdleTaskLoop = !1, this._observedBatches = [], [7];
                                        case 4:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype.idleTask = function() {
                            return this._resolveFinalTask ? Ft.race([this._finalTask, Vt(250, 1e3)]) : this._finalTask
                        }, e.prototype.startIdleTaskLoopImpl = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var e, t, n, r, o, s, a, u;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = 0, t = 0, n = this._observedBatches, i.label = 1;
                                        case 1:
                                            if (!(t < n.length)) return [3, 7];
                                            r = n[t], o = 0, s = r, i.label = 2;
                                        case 2:
                                            return o < s.length ? (a = s[o], _() > e ? [4, this.idleTask()] : [3, 4]) : [3, 6];
                                        case 3:
                                            u = i.sent(), e = _() + Math.max(u.timeRemaining(), 15), i.label = 4;
                                        case 4:
                                            this.recordEntry(a), i.label = 5;
                                        case 5:
                                            return o++, [3, 2];
                                        case 6:
                                            return t++, [3, 1];
                                        case 7:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype.onLoad = function() {
                            this._gotLoad || (this._gotLoad = !0, this._timingSupported && (this.recordTiming(performance.timing), this.startIdleTaskLoop()))
                        }, e.prototype.tick = function() {
                            this.checkMemory()
                        }, e.prototype.shutdown = function() {
                            var e;
                            this._listeners && this._listeners.clear(), this._resourceUploader = void 0;
                            var t = [];
                            this._observer ? (this._observer.takeRecords && (t = this._observer.takeRecords()), this._observer.disconnect()) : window.performance && window.performance.getEntries && (t = window.performance.getEntries()), t.length > 300 && (t = t.slice(0, 300), this._queue.enqueue({
                                Kind: Ee.RESOURCE_TIMING_BUFFER_FULL,
                                Args: []
                            })), this.checkMemory(), null === (e = this._resolveFinalTask) || void 0 === e || e.call(this), this._observedBatches.push(t), this.startIdleTaskLoop()
                        }, e.prototype.observe = function() {
                            var e = this;
                            if (!this._observer && this._getEntriesSupported && window.PerformanceObserver) {
                                this._observedBatches.push(performance.getEntries()), this.startIdleTaskLoop(), this._observer = new window.PerformanceObserver(function(t) {
                                    var n = t.getEntries();
                                    e._observedBatches.push(n), e.startIdleTaskLoop()
                                });
                                var t = ["navigation", "resource", "measure", "mark"];
                                window.PerformancePaintTiming && t.push("paint"), this._observer.observe({
                                    entryTypes: t
                                })
                            }
                        }, e.prototype.checkMemory = function() {
                            if (this._memorySupported && !this._ctx.recording.inFrame) {
                                var e = performance.memory;
                                if (e) {
                                    var t = e.usedJSHeapSize - this._lastUsedJSHeapSize;
                                    (0 == this._lastUsedJSHeapSize || s.mathAbs(t / this._lastUsedJSHeapSize) > .2) && (this.addPerfEvent(Ue.Memory, e, Ne.Memory), this._lastUsedJSHeapSize = e.usedJSHeapSize)
                                }
                            }
                        }, e.prototype.recordTimeOrigin = function() {
                            var e = {
                                timeOrigin: f.timeOrigin
                            };
                            this.addPerfEvent(Ue.TimeOrigin, e, Ne.TimeOrigin)
                        }, e.prototype.recordEntry = function(e) {
                            switch (e.entryType) {
                                case "navigation":
                                    this.recordNavigation(e);
                                    break;
                                case "resource":
                                    this.recordResource(e);
                                    break;
                                case "paint":
                                    this.recordPaint(e);
                                    break;
                                case "measure":
                                    this.recordMeasure(e);
                                    break;
                                case "mark":
                                    this.recordMark(e);
                            }
                        }, e.prototype.recordTiming = function(e) {
                            this.addPerfEvent(Ue.Timing, e, Ne.Timing)
                        }, e.prototype.recordNavigation = function(e) {
                            this.addPerfEvent(Ue.Navigation, e, Ne.Navigation, {
                                name: "navigation"
                            })
                        }, e.prototype.recordResource = function(e) {
                            if (this._recordResourceTimings) {
                                var t = e.initiatorType;
                                (this._recordResourceImgs || "img" !== t && "image" !== t) && this.addPerfEvent(Ue.Resource, e, Ne.Resource, {
                                    name: t
                                })
                            }
                        }, e.prototype.recordPaint = function(e) {
                            this.addPerfEvent(Ue.Paint, e, Ne.Measure)
                        }, e.prototype.recordMark = function(e) {
                            this.addPerfEvent(Ue.Mark, e, Ne.Measure)
                        }, e.prototype.recordMeasure = function(e) {
                            this.addPerfEvent(Ue.Measure, e, Ne.Measure)
                        }, e.prototype.addPerfEvent = function(e, t, n, r) {
                            if (void 0 === r && (r = {}), !this.atLimit(e)) {
                                for (var i = [e], o = 0, s = n; o < s.length; o++) {
                                    var a = s[o],
                                        u = t[a];
                                    if (void 0 === u && (u = -1), a in r) {
                                        var c = Pr(u, {
                                                source: "perfEntry",
                                                type: r[a]
                                            }),
                                            h = u === c;
                                        u = this.rewriteUrl(e, t, c, h)
                                    }
                                    i.push(u)
                                }
                                this._queue.enqueue({
                                    Kind: Ee.PERF_ENTRY,
                                    Args: i
                                })
                            }
                        }, e.prototype.rewriteUrl = function(e, t, n, r) {
                            if (e === Ue.Resource) switch (t.initiatorType) {
                                case "":
                                case "xmlhttprequest":
                                case "fetch":
                                case "script":
                                case "beacon":
                                    return n;
                                case "css":
                                    if (this._resourceUploader && !r) {
                                        var i = hr("", n);
                                        this._resourceUploader.uploadIfNeeded(this._ctx.window, i)
                                    }
                                    return this.urlPrivacy.obfuscateUrl(n, "css");
                                default:
                                    return this.urlPrivacy.obfuscateUrl(n);
                            }
                        }, e.prototype.atLimit = function(e) {
                            switch (e) {
                                case Ue.Mark:
                                case Ue.Measure:
                                    if (this._numOfPerfMarkEntries >= this._maxPerfMarksPerPage) return !0;
                                    this._numOfPerfMarkEntries++;
                            }
                            return !1
                        }, e
                    }();

                function ki(e) {
                    var t = 0,
                        n = {
                            id: t++,
                            edges: {}
                        };
                    return e.split("\n").forEach(function(e) {
                        var r = e.trim();
                        if ("" != r) {
                            if (0 == r.indexOf("/") || r.lastIndexOf("/") == r.length - 1) throw new Error("Leading and trailing slashes are not supported");
                            var i = n,
                                o = r.split("/");
                            o.forEach(function(e, n) {
                                var r = e.trim();
                                if ("" === r) throw new Error("Empty elements are not allowed");
                                if ("**" != r && "*" != r && -1 != r.indexOf("*")) throw new Error("Embedded wildcards are not supported");
                                var s = null;
                                r in i.edges && (s = i.edges[r]), s || (s = {
                                    id: t++,
                                    edges: {}
                                }, i.edges[r] = s), n == o.length - 1 && (s.term = !0), i = s
                            })
                        }
                    }), n
                }
                var Ci = ki("**");

                function Ai(e, t, n) {
                    if (!qi(n)) {
                        try {
                            for (var r = [], i = 0, o = n; i < o.length; i++) {
                                var a = o[i];
                                if (!a) return;
                                var u = new xi(!0 === a ? Ci : a);
                                r.push(u)
                            }
                            var c = function(e, t) {
                                    for (var n = {}, r = function(t) {
                                            n[t] = function() {
                                                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                                for (var i = 0, o = e; i < o.length; i++) {
                                                    var s = o[i];
                                                    s[t].apply(s, n)
                                                }
                                            }
                                        }, i = 0, o = ["push", "pop"]; i < o.length; i++) r(o[i]);
                                    return n
                                }(r),
                                h = 0,
                                l = [1],
                                d = !1;
                            return s.jsonStringify(e, function(e, n) {
                                var i = n,
                                    o = i && "object" == typeof i;
                                if ("" == e && 1 == l.length) return l[0]--, o && l.push(s.objectKeys(i).length), i;
                                for (c.push(e), r.some(function(e) {
                                        return e.isRedacted(!o)
                                    }) && (i = Je.BlockedFieldValue, o = !1), h += e.length + 2, (h += o ? 2 : null === i ? 4 : i.toString().length) >= t && (d ? i = void 0 : (i = "_fs_trimmed_values", d = !0)), l[l.length - 1]--, i && i !== Je.BlockedFieldValue && o ? l.push(s.objectKeys(i).length) : c.pop(); l[l.length - 1] <= 0;) l.pop(), c.pop();
                                for (var a = 0, u = r; a < u.length; a++) {
                                    var p = u[a].depth();
                                    if (void 0 !== p && l.length > 0 && p !== l.length - 1) throw new Error("Property matcher depth out of sync")
                                }
                                return i
                            })
                        } catch (e) {
                            Ae.sendToBugsnag(e, "error")
                        }
                        return "[error serializing " + e.constructor.name + "]"
                    }
                }
                var xi = function() {
                    function e(e) {
                        this._depth = 1;
                        var t = [e];
                        e.edges["**"] && t.push(e.edges["**"]), this._stateSets = [t]
                    }
                    return e.prototype._currentStates = function() {
                        if (this._stateSets.length <= 0) return [];
                        var e = this._stateSets.length - 1,
                            t = this._stateSets[e];
                        return "number" == typeof t ? this._stateSets[e - 1] : t
                    }, e.prototype.depth = function() {
                        return this._depth
                    }, e.prototype.isRedacted = function(e) {
                        var t = this._currentStates();
                        return 0 === t.length || e && !t.some(function(e) {
                            return e.term
                        })
                    }, e.prototype.push = function(e) {
                        var t;
                        this._depth++;
                        var n = this._currentStates(),
                            r = [];

                        function i(t) {
                            t.edges["**"] && (r.push(t.edges["**"], Ri(t)), i(t.edges["**"])), t.edges["*"] && r.push(t.edges["*"]), t.edges[e] && r.push(t.edges[e])
                        }
                        for (var o = 0, s = n; o < s.length; o++) {
                            var a = s[o];
                            if (null === (t = a.edges["**"]) || void 0 === t ? void 0 : t.term) {
                                r = [Ri(a), a.edges["**"]];
                                break
                            }
                            i(a)
                        }
                        var u = !1;
                        if (r.length !== n.length) u = !0;
                        else
                            for (var c = 0; c < r.length; c++)
                                if (r[c].id !== n[c].id) {
                                    u = !0;
                                    break
                                }
                        u ? this._stateSets.push(r) : ("number" != typeof this._stateSets[this._stateSets.length - 1] && this._stateSets.push(0), this._stateSets[this._stateSets.length - 1]++)
                    }, e.prototype.pop = function() {
                        this._depth > 0 && this._depth--;
                        var e = this._stateSets[this._stateSets.length - 1];
                        "number" == typeof e && e > 1 ? this._stateSets[this._stateSets.length - 1]-- : this._stateSets.pop()
                    }, e
                }();

                function Ri(e) {
                    var t = e.edges["**"];
                    if (!t) throw new Error("Node must have double-wildcard edge.");
                    return ee(e.edges, 1) ? {
                        id: -t.id,
                        edges: {
                            "**": t
                        }
                    } : e
                }
                var Oi, Pi, Mi, Li = function() {
                        function e(e) {
                            this._requestTracker = e, this._hook = null
                        }
                        return e.prototype.disable = function() {
                            this._hook && (this._hook.disable(), this._hook = null)
                        }, e.prototype.enable = function(e) {
                            var t, n = this,
                                r = A(e),
                                o = null === (t = null == r ? void 0 : r._w) || void 0 === t ? void 0 : t.fetch;
                            (o || e.fetch) && (this._hook = pe(o ? r._w : e, "fetch"), this._hook && this._hook.afterSync(function(e) {
                                var t = e.result;
                                e.result = (0, i.__awaiter)(n, void 0, void 0, function() {
                                    return (0, i.__generator)(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return n.trys.push([0, 2, , 3]), [4, this.recordFetch(t, e.args[0], e.args[1])];
                                            case 1:
                                            case 2:
                                                return n.sent(), [3, 3];
                                            case 3:
                                                return [2, t];
                                        }
                                    })
                                })
                            }))
                        }, e.prototype.recordFetch = function(e, t, n) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var r, o, s, a, u, c;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return r = "GET", o = "", u = !1, "string" == typeof t ? o = t : "url" in t ? (o = t.url, r = t.method, s = t.body, a = t.headers, u = !!t.signal) : o = "" + t, o ? (n && (r = n.method || r, a = Yi(n.headers), s = n.body || s, u = !!n.signal || u), c = this.getResponse(e), u && o.search(/\/graphql/i) > -1 ? [4, Ft.race([c, qt(5e3)])] : [3, 2]) : [2];
                                        case 1:
                                            i.sent(), i.label = 2;
                                        case 2:
                                            return this._requestTracker.startRequest(r, o, {
                                                body: function() {
                                                    return s
                                                },
                                                headers: a
                                            }, c), [2];
                                    }
                                })
                            })
                        }, e.prototype.getResponse = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var t, n, r, o;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, e];
                                        case 1:
                                            if (t = i.sent(), n = t.headers, r = (n.get("content-type") || "default").split(";")[0], !(["default", "text/plain", "text/json", "application/json"].indexOf(r) > -1)) return [2, {
                                                status: t.status,
                                                data: {
                                                    headers: n,
                                                    body: null
                                                }
                                            }];
                                            o = null, i.label = 2;
                                        case 2:
                                            return i.trys.push([2, 4, , 5]), [4, t.clone().text()];
                                        case 3:
                                            return o = i.sent(), [3, 5];
                                        case 4:
                                            return i.sent(), [3, 5];
                                        case 5:
                                            return [2, {
                                                status: t.status,
                                                data: {
                                                    headers: n,
                                                    body: o
                                                }
                                            }];
                                    }
                                })
                            })
                        }, e
                    }(),
                    Ui = function() {
                        function e(e) {
                            this._requestTracker = e, this._requestData = new WeakMap
                        }
                        return e.prototype.disable = function() {
                            this._xhrOpenHook && (this._xhrOpenHook.disable(), this._xhrOpenHook = null), this._xhrSendHook && (this._xhrSendHook.disable(), this._xhrSendHook = null), this._xhrSetHeaderHook && (this._xhrSetHeaderHook.disable(), this._xhrSetHeaderHook = null)
                        }, e.prototype._getRequestData = function(e) {
                            var t = this._requestData.get(e);
                            if (t) return t;
                            var n = {};
                            return this._requestData.set(e, n), n
                        }, e.prototype.enable = function(e) {
                            var t, n, r, o, s = this,
                                a = A(e),
                                u = (null === (t = null == a ? void 0 : a._w) || void 0 === t ? void 0 : t.XMLHttpRequest) || e.XMLHttpRequest;
                            if (u) {
                                var c = u.prototype;
                                this._xhrOpenHook = null === (n = pe(c, "open")) || void 0 === n ? void 0 : n.before(function(e) {
                                    var t = s._getRequestData(e.that);
                                    t.method = e.args[0], t.url = e.args[1]
                                }), this._xhrSetHeaderHook = null === (r = pe(c, "setRequestHeader")) || void 0 === r ? void 0 : r.before(function(e) {
                                    var t = e.that,
                                        n = e.args[0],
                                        r = e.args[1],
                                        i = s._getRequestData(t);
                                    i.headers || (i.headers = []), i.headers.push([n, r])
                                }), this._xhrSendHook = null === (o = pe(c, "send")) || void 0 === o ? void 0 : o.before(function(e) {
                                    var t = e.that,
                                        n = e.args[0],
                                        r = s._getRequestData(t),
                                        o = r.url,
                                        a = r.method,
                                        u = r.headers;
                                    void 0 !== o && void 0 !== a && (s._requestData["delete"](t), s._requestTracker.startRequest(a, o, {
                                        headers: Yi(u),
                                        body: n
                                    }, function(e) {
                                        return (0, i.__awaiter)(this, void 0, Ft, function() {
                                            var t;
                                            return (0, i.__generator)(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, new Ft(function(t) {
                                                            e.addEventListener("readystatechange", function() {
                                                                e.readyState === XMLHttpRequest.DONE && t()
                                                            }), e.addEventListener("load", t), e.addEventListener("error", t)
                                                        })];
                                                    case 1:
                                                        return n.sent(), t = function(e) {
                                                            if (e) return {
                                                                forEach: function(t) {
                                                                    for (var n, r = /([^:]*):\s+(.*)(?:\r\n|$)/g; n = r.exec(e);) t(n[2], n[1])
                                                                }
                                                            }
                                                        }(e.getAllResponseHeaders()), [2, {
                                                            status: e.status,
                                                            data: {
                                                                headers: t,
                                                                body: function() {
                                                                    return "text" === e.responseType ? e.responseText : e.response
                                                                }
                                                            }
                                                        }];
                                                }
                                            })
                                        })
                                    }(t)))
                                })
                            }
                        }, e
                    }(),
                    Ni = /^data:/i,
                    Fi = function() {
                        function e(e, t) {
                            this._ctx = e, this._queue = t, this._enabled = !1, this._tracker = new Hi(e, t), this._xhr = new Ui(this._tracker), this._fetch = new Li(this._tracker)
                        }
                        return e.prototype.isEnabled = function() {
                            return this._enabled
                        }, e.prototype.enable = function(e) {
                            this._enabled || (this._enabled = !0, this._queue.enqueue({
                                Kind: Ee.REC_FEAT_SUPPORTED,
                                Args: [Fe.Ajax, !0, Fe.AjaxFetch, !!e]
                            }), this._xhr.enable(this._ctx.window), e && this._fetch.enable(this._ctx.window))
                        }, e.prototype.disable = function() {
                            this._enabled && (this._enabled = !1, this._xhr.disable(), this._fetch.disable())
                        }, e.prototype.tick = function() {
                            this._tracker.tick()
                        }, e.prototype.setWatches = function(e) {
                            this._tracker.setWatches(e)
                        }, e.prototype.initialize = function(e) {
                            this._tracker.initialize(e)
                        }, e
                    }(),
                    Hi = function() {
                        function e(e, t) {
                            this._ctx = e, this._queue = t, this._urlConfigs = [], this._reqHeaderAllowlist = {}, this._rspHeaderAllowlist = {}, this._events = [], this._maxAjaxPayloadLength = 0;
                            var n = Je.DefaultOrgSettings;
                            this.initialize({
                                requests: n.HttpRequestHeadersAllowlist,
                                responses: n.HttpResponseHeadersAllowlist,
                                maxAjaxPayloadLength: n.MaxAjaxPayloadLength
                            })
                        }
                        return e.prototype.getAllowlists = function(e) {
                            for (var t = !1, n = !1, r = [], i = [], o = 0, s = this._urlConfigs; o < s.length; o++) {
                                var a = s[o],
                                    u = a.urlPattern,
                                    c = a.reqFields,
                                    h = a.rspFields;
                                if (t && n) break;
                                u.test(e) && (!1 === c && (r = [!1], t = !0), t || r.push(c), !1 === h && (i = [!1], n = !0), n || i.push(h))
                            }
                            return [r, i]
                        }, e.prototype.pushEvent = function(e) {
                            this._events.push(e)
                        }, e.prototype.setWatches = function(e) {
                            this._urlConfigs = e.map(function(e) {
                                return {
                                    urlPattern: new RegExp(e.URLRegex),
                                    reqFields: zi(e.RecordReq, e.ReqAllowlist),
                                    rspFields: zi(e.RecordRsp, e.RspAllowlist)
                                }
                            })
                        }, e.prototype.initialize = function(e) {
                            var t = this,
                                n = e.requests,
                                r = e.responses,
                                i = e.maxAjaxPayloadLength;
                            this._reqHeaderAllowlist = {}, this._rspHeaderAllowlist = {}, null == n || n.forEach(function(e) {
                                return t._reqHeaderAllowlist[e] = !0
                            }), null == r || r.forEach(function(e) {
                                return t._rspHeaderAllowlist[e] = !0
                            }), this._maxAjaxPayloadLength = i || Je.DefaultOrgSettings.MaxAjaxPayloadLength
                        }, e.prototype.addHeaderAllowlist = function(e, t) {
                            var n = this;
                            null == e || e.forEach(function(e) {
                                return n._reqHeaderAllowlist[e] = !0
                            }), null == t || t.forEach(function(e) {
                                return n._rspHeaderAllowlist[e] = !0
                            })
                        }, e.prototype.tick = function() {
                            for (var e = 0; e < this._events.length; e++) this._queue.enqueue({
                                Kind: Ee.AJAX_REQUEST,
                                Args: this._events[e]
                            });
                            this._events = []
                        }, e.prototype.startRequest = function(e, t, n, r) {
                            var o, s;
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var a, u, c, h, l, d, p, f, v, g, m, y;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return Ni.test(t) ? [2] : (a = _(), u = function(e, t) {
                                                return cr.resolveToDocument(e, t)
                                            }(this._ctx.window, t), c = this.getAllowlists(u), h = c[0], l = c[1], [4, this.processRequest(h, n)]);
                                        case 1:
                                            return d = i.sent(), [4, r["catch"](function() {
                                                return {
                                                    status: 0,
                                                    data: {
                                                        headers: {
                                                            forEach: function() {}
                                                        },
                                                        body: void 0
                                                    }
                                                }
                                            })];
                                        case 2:
                                            return p = i.sent(), f = p.status, v = p.data, g = _() - a, [4, this.processResponse(l, v)];
                                        case 3:
                                            return m = i.sent(), y = [e, Pr(u, {
                                                source: "event",
                                                type: Ee.AJAX_REQUEST
                                            }), g, f, d.headers, m.headers, a, d.size, m.size, null !== (o = d.text) && void 0 !== o ? o : null, null !== (s = m.text) && void 0 !== s ? s : null, d.legibility, m.legibility], this.pushEvent(y), [2];
                                    }
                                })
                            })
                        }, e.prototype.processRequest = function(e, t) {
                            return Qi(this._reqHeaderAllowlist, e, this._maxAjaxPayloadLength, t)
                        }, e.prototype.processResponse = function(e, t) {
                            return Qi(this._rspHeaderAllowlist, e, this._maxAjaxPayloadLength, t)
                        }, e
                    }();

                function qi(e) {
                    return 0 === e.length || e.indexOf(!1) > -1
                }

                function Di(e, t, n) {
                    return [e.length, Ki(e, t, n)]
                }

                function Wi(e, t, n) {
                    var r = void 0;
                    return qi(t) || (r = Ai(e, n, t)), [ji(e), r]
                }

                function Bi(e, t) {
                    var n = e.byteLength,
                        r = void 0;
                    return qi(t) || (r = "[ArrayBuffer]"), [n, r]
                }

                function Vi(e, t, n) {
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        var r, o, s, a, u;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (o = (r = e).size, qi(t)) return [2, [o, void 0]];
                                    switch (r.type) {
                                        case "application/json":
                                        case "text/plain":
                                            return [3, 1];
                                    }
                                    return [3, 4];
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, r.text()["catch"](function(e) {
                                        Ae.sendToBugsnag(e, "warning")
                                    })];
                                case 2:
                                    return (s = i.sent()) && (a = Ki(s, t, n)) ? [2, [o, a]] : [3, 4];
                                case 3:
                                    return u = i.sent(), Ae.sendToBugsnag(u, "warning"), [3, 4];
                                case 4:
                                    return [2, [o, "[Blob]"]];
                            }
                        })
                    })
                }

                function ji(e) {
                    try {
                        return s.jsonStringify(e).length
                    } catch (e) {}
                    return 0
                }

                function Ki(e, t, n) {
                    if (!qi(t)) try {
                        return Ai(s.jsonParse(e), n, t)
                    } catch (r) {
                        return t.length > 0 && t.every(function(e) {
                            return !0 === e
                        }) ? e.slice(0, n) : void 0
                    }
                }

                function zi(e, t) {
                    switch (e) {
                        default:
                            case Be.Elide:
                            return !1;
                        case Be.Record:
                                return !0;
                        case Be.Allowlist:
                                try {
                                return ki(t)
                            } catch (e) {
                                return !1
                            }
                    }
                }

                function Qi(e, t, n, r) {
                    var o;
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        var s, a, u, c, h, l, d;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return s = "", null === (o = r.headers) || void 0 === o || o.forEach(function(t, n) {
                                        var r = n.toLowerCase(),
                                            i = e[r];
                                        s += r + (i ? ": " + t : "") + "\r\n"
                                    }), "function" != typeof(a = null == r ? void 0 : r.body) ? [3, 2] : [4, a()];
                                case 1:
                                    return u = i.sent(), [3, 3];
                                case 2:
                                    u = a, i.label = 3;
                                case 3:
                                    return [4, Gi(t, u, n)];
                                case 4:
                                    return c = i.sent(), h = c[0], l = c[1], d = 0 !== h || l ? Le.NotEmpty : Le.Unknown, [2, {
                                        headers: s,
                                        text: l,
                                        size: h,
                                        legibility: d
                                    }];
                            }
                        })
                    })
                }

                function Gi(e, t, n) {
                    return void 0 === n && (n = Je.DefaultOrgSettings.MaxAjaxPayloadLength), (0, i.__awaiter)(this, void 0, Ft, function() {
                        var r;
                        return (0, i.__generator)(this, function(i) {
                            if (null == t) return [2, [0, void 0]];
                            switch (typeof t) {
                                default: return [2, [-1, qi(e) ? void 0 : "[unknown]"]];
                                case "string":
                                        return [2, Di(t, e, n)];
                                case "object":
                                        switch (r = t.constructor) {
                                        case Object:
                                        default:
                                            return [2, Wi(t, e, n)];
                                        case Blob:
                                            return [2, Vi(t, e, n)];
                                        case ArrayBuffer:
                                            return [2, Bi(t, e)];
                                        case Document:
                                        case FormData:
                                        case URLSearchParams:
                                        case ReadableStream:
                                            return [2, [-1, qi(e) ? void 0 : "" + r.name]];
                                    }
                            }
                            return [2]
                        })
                    })
                }

                function Yi(e) {
                    return e ? G(e) ? {
                        forEach: function(t) {
                            for (var n = 0, r = e; n < r.length; n++) {
                                var i = r[n],
                                    o = i[0];
                                t(i[1], o)
                            }
                        }
                    } : "function" == typeof e.forEach ? e : {
                        forEach: function(t) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(e[n], n)
                        }
                    } : e
                }

                function Xi(e) {
                    return e ? e.sheet : void 0
                }

                function Zi(e) {
                    try {
                        return e ? e.cssRules || e.rules : void 0
                    } catch (e) {
                        return
                    }
                }! function(e) {
                    e[e.CSS_INHERIT = 0] = "CSS_INHERIT", e[e.CSS_PRIMITIVE_VALUE = 1] = "CSS_PRIMITIVE_VALUE", e[e.CSS_VALUE_LIST = 2] = "CSS_VALUE_LIST", e[e.CSS_CUSTOM = 3] = "CSS_CUSTOM"
                }(Oi || (Oi = {})),
                function(e) {
                    e[e.CSS_UNKNOWN = 0] = "CSS_UNKNOWN", e[e.CSS_NUMBER = 1] = "CSS_NUMBER", e[e.CSS_PERCENTAGE = 2] = "CSS_PERCENTAGE", e[e.CSS_EMS = 3] = "CSS_EMS", e[e.CSS_EXS = 4] = "CSS_EXS", e[e.CSS_PX = 5] = "CSS_PX", e[e.CSS_CM = 6] = "CSS_CM", e[e.CSS_MM = 7] = "CSS_MM", e[e.CSS_IN = 8] = "CSS_IN", e[e.CSS_PT = 9] = "CSS_PT", e[e.CSS_PC = 10] = "CSS_PC", e[e.CSS_DEG = 11] = "CSS_DEG", e[e.CSS_RAD = 12] = "CSS_RAD", e[e.CSS_GRAD = 13] = "CSS_GRAD", e[e.CSS_MS = 14] = "CSS_MS", e[e.CSS_S = 15] = "CSS_S", e[e.CSS_HZ = 16] = "CSS_HZ", e[e.CSS_KHZ = 17] = "CSS_KHZ", e[e.CSS_DIMENSION = 18] = "CSS_DIMENSION", e[e.CSS_STRING = 19] = "CSS_STRING", e[e.CSS_URI = 20] = "CSS_URI", e[e.CSS_IDENT = 21] = "CSS_IDENT", e[e.CSS_ATTR = 22] = "CSS_ATTR", e[e.CSS_COUNTER = 23] = "CSS_COUNTER", e[e.CSS_RECT = 24] = "CSS_RECT", e[e.CSS_RGBCOLOR = 25] = "CSS_RGBCOLOR", e[e.CSS_VW = 26] = "CSS_VW", e[e.CSS_VH = 27] = "CSS_VH", e[e.CSS_VMIN = 28] = "CSS_VMIN", e[e.CSS_VMAX = 29] = "CSS_VMAX"
                }(Pi || (Pi = {}));
                var Ji = "EventQueue not defined for 'withEventQueueFor', likely caused by holding ref to callback",
                    $i = "_fs_stylesheet_hooked",
                    eo = ["CSSMediaRule", "CSSSupportsRule"],
                    to = function() {
                        function e(t, n) {
                            var r = this;
                            this.ctx = t, this.queue = n, this.hooks = [], this.removeShims = [], this.nextSheetId = 1, so = new WeakMap;
                            var i = e;
                            this.throttle = new Mn(i.ThrottleMax, i.ThrottleInterval, function() {
                                return setTimeout(function() {
                                    r.queue.enqueue({
                                        Kind: Ee.FAIL_THROTTLED,
                                        Args: [qe.StyleSheetHooks]
                                    }), r.stop()
                                })
                            }), this.addInsert = this.throttle.guard(this.addInsert), this.addDelete = this.throttle.guard(this.addDelete)
                        }
                        return e.prototype.start = function() {
                            var e = this;
                            this.throttle.open();
                            var t = this.ctx.window;
                            if (t.CSSStyleSheet && t.StyleSheet) {
                                var n = t.CSSStyleSheet.prototype;
                                this._hook(n), this._hookGroupingRule(t), this.removeShims.push(fe(t.StyleSheet, "disabled", function(t, n) {
                                    return e.onDisableSheet(t, n)
                                }), fe(t.Document, "adoptedStyleSheets", function(t, n) {
                                    return e.onSetAdoptedStyleSheets(t)
                                }), fe(t.ShadowRoot, "adoptedStyleSheets", function(t, n) {
                                    return e.onSetAdoptedStyleSheets(t)
                                }))
                            }
                        }, e.prototype._hookGroupingRule = function(e) {
                            var t, n = this,
                                r = function(e) {
                                    var t = pe(e, "insertRule");
                                    t && (t.afterSync(function(e) {
                                        n._groupingRuleInsert(e.that, e.args[0], e.args[1])
                                    }), n.hooks.push(t)), (t = pe(e, "deleteRule")) && (t.afterSync(function(e) {
                                        n._groupingRuleDelete(e.that, e.args[0])
                                    }), n.hooks.push(t))
                                };
                            if (e.CSSGroupingRule) r(e.CSSGroupingRule.prototype);
                            else
                                for (var i = 0, o = eo; i < o.length; i++) {
                                    var s = null === (t = e[o[i]]) || void 0 === t ? void 0 : t.prototype;
                                    s && r(s)
                                }
                        }, e.prototype._groupingRuleInsert = function(e, t, n) {
                            var r = this._getPath(e);
                            this.addInsert(e.parentStyleSheet, t, n, r)
                        }, e.prototype._groupingRuleDelete = function(e, t) {
                            var n = this._getPath(e);
                            this.addDelete(e.parentStyleSheet, t, n)
                        }, e.prototype._getPath = function(e) {
                            for (var t = [], n = e; n.parentRule || n.parentStyleSheet;) {
                                var r;
                                if (!(null == (r = n.parentRule ? n.parentRule : n.parentStyleSheet) ? void 0 : r.cssRules)) return Ae.sendToBugsnag("Could not find a path to target rule", "warning"), t;
                                var i = this._indexOf(r.cssRules, n);
                                if (i > -1) {
                                    if (t.unshift(i), r instanceof CSSStyleSheet) break;
                                    n = r
                                } else Ae.sendToBugsnag("Could not find intermediate rule in parent", "warning")
                            }
                            return t
                        }, e.prototype._indexOf = function(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n] === t) return n;
                            return -1
                        }, e.prototype._hook = function(e) {
                            var t, n = this;
                            (t = pe(e, "insertRule")) && (t.afterSync(function(e) {
                                n.addInsert(e.that, e.args[0], e.args[1])
                            }), this.hooks.push(t)), (t = pe(e, "deleteRule")) && (t.afterSync(function(e) {
                                n.addDelete(e.that, e.args[0])
                            }), this.hooks.push(t)), (t = pe(e, "replaceSync")) && (t.afterSync(function(e) {
                                n.snapshotConstructedStylesheet(e.that, !0)
                            }), this.hooks.push(t)), (t = pe(e, "replace")) && (t.afterSync(function(e) {
                                return (0, i.__awaiter)(n, void 0, Ft, function() {
                                    return (0, i.__generator)(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return "object" != typeof e.result || "function" != typeof e.result.then ? [2] : [4, e.result];
                                            case 1:
                                                return t.sent(), this.snapshotConstructedStylesheet(e.that, !0), [2];
                                        }
                                    })
                                })
                            }), this.hooks.push(t)), Object.defineProperty(e, $i, {
                                value: !0,
                                configurable: !0
                            })
                        }, e.prototype.onSetAdoptedStyleSheets = function(e) {
                            if (Tn(e)) {
                                var t = e.adoptedStyleSheets;
                                if (t) {
                                    for (var n = [], r = 0, i = t; r < i.length; r++) {
                                        var o = i[r],
                                            s = this.snapshotConstructedStylesheet(o);
                                        n.push(s), !0 === o.disabled && this.onDisableSheet(o, !0)
                                    }
                                    this.queue.enqueue({
                                        Kind: Ee.ADOPTED_STYLESHEETS,
                                        Args: [Tn(e), n]
                                    })
                                }
                            }
                        }, e.prototype.snapshotEl = function(e, t) {
                            void 0 === t && (t = 0);
                            var n = Tn(e);
                            if (n) {
                                var r = Xi(e);
                                r && this.snapshot([He.Node, n], r, t)
                            }
                        }, e.prototype.snapshotConstructedStylesheet = function(e, t) {
                            void 0 === t && (t = !1);
                            var n = ao(e);
                            return t || void 0 === n ? (void 0 === n && function(e, t) {
                                so.set(e, t)
                            }(e, n = this.nextSheetId++), this.snapshot([He.Sheet, n], e), n) : n
                        }, e.prototype.snapshot = function(e, t, n) {
                            void 0 === n && (n = 0), this.queue.enqueue({
                                Kind: Ee.RESET_CSS_SHEET,
                                Args: [e]
                            });
                            var r = Zi(t);
                            if (r) {
                                for (var i = [], o = n; o < r.length; o++) try {
                                    var s = uo(ro(r[o]));
                                    i.push(s)
                                } catch (e) {
                                    i.push("html {}")
                                }
                                this.queue.enqueue({
                                    Kind: Ee.CSSRULE_INSERT,
                                    Args: [e, i, n]
                                })
                            }
                        }, e.prototype.addInsert = function(e, t, n, r) {
                            var i = oo(e, He.Node);
                            if (i && "string" == typeof t) {
                                var o = [i, [uo(t)]];
                                void 0 !== n && (o[2] = n), void 0 !== r && (o[3] = r), this.withEventQueueForSheet(e, function(e) {
                                    return e.enqueue({
                                        Kind: Ee.CSSRULE_INSERT,
                                        Args: o
                                    })
                                })
                            }
                        }, e.prototype.addDelete = function(e, t, n) {
                            var r = oo(e, He.Node);
                            r && this.withEventQueueForSheet(e, function(e) {
                                return e.enqueue({
                                    Kind: Ee.CSSRULE_DELETE,
                                    Args: n ? [r, t, n] : [r, t]
                                })
                            })
                        }, e.prototype.onDisableSheet = function(e, t) {
                            var n = oo(e, He.Node);
                            n && this.withEventQueueForSheet(e, function(e) {
                                return e.enqueue({
                                    Kind: Ee.DISABLE_STYLESHEET,
                                    Args: [n, !!t]
                                })
                            })
                        }, e.prototype.withEventQueueForSheet = function(e, t) {
                            if (e.ownerNode) return n = this.ctx, r = e.ownerNode, i = t, void((o = A(function(e) {
                                var t = e.ownerDocument;
                                return t && t.defaultView
                            }(r) || n.window)) && "function" == typeof o._withEventQueue && o._withEventQueue(n.recording.pageSignature(), function(e) {
                                var t = e;
                                i({
                                    enqueue: function(e) {
                                        Re(null != t, Ji) && t.enqueue(e)
                                    },
                                    enqueueFirst: function(e) {
                                        Re(null != t, Ji) && t.enqueueFirst(e)
                                    }
                                }), t = null
                            }));
                            var n, r, i, o;
                            t(this.queue)
                        }, e.prototype.stop = function() {
                            this.throttle.close();
                            for (var e = 0, t = this.hooks; e < t.length; e++) {
                                var n = t[e];
                                n.disable(), Object.defineProperty(n.getTarget(), $i, {
                                    value: !1,
                                    configurable: !0
                                })
                            }
                            this.hooks = [];
                            for (var r = 0, i = this.removeShims; r < i.length; r++)(0, i[r])();
                            this.removeShims = []
                        }, e.prototype.ensureHook = function(e) {
                            this._skipInstanceHook(e) || e[$i] || this._hook(e)
                        }, e.prototype.removeHook = function(e) {
                            if (!this._skipInstanceHook(e))
                                for (var t = 0; t < this.hooks.length; t++) {
                                    var n = this.hooks[t],
                                        r = n.getTarget();
                                    if (e === r) {
                                        n.disable(), this.hooks.splice(t, 1), Object.defineProperty(r, $i, {
                                            value: !1,
                                            configurable: !0
                                        });
                                        break
                                    }
                                }
                        }, e.prototype._skipInstanceHook = function(e) {
                            return Object.getPrototypeOf(e) === this.ctx.window.CSSStyleSheet
                        }, e.ThrottleMax = 1e4, e.ThrottleInterval = 1e4, e
                    }(),
                    no = document.createElement("div");
                no.style.width = "initial";
                var ro = "" != no.style.cssText ? function(e) {
                        return e.cssText
                    } : function e(t, n) {
                        if (void 0 === n && (n = 0), !Re(n <= 20, "No deep recursion for CSS rules")) return "html { /* Depth limit exceeded! */ }";
                        var r = function(e) {
                            switch (e.type) {
                                case CSSRule.PAGE_RULE:
                                    var t = e.selectorText || "";
                                    return t && X(t, "@page") ? t : "@page " + t;
                                case CSSRule.KEYFRAME_RULE:
                                    return e.keyText;
                                case CSSRule.STYLE_RULE:
                                    return e.selectorText;
                                case CSSRule.MEDIA_RULE:
                                    return "@media " + e.media.mediaText;
                                case CSSRule.KEYFRAMES_RULE:
                                    return "@keyframes " + e.name;
                                case CSSRule.SUPPORTS_RULE:
                                    return "@supports " + e.conditionText;
                                default:
                                    return null;
                            }
                        }(t);
                        if (null == r) return t.cssText;
                        var i = function(t, n) {
                            var r, i, o, s, a = t,
                                u = a.style;
                            if (u) {
                                for (var c = "", h = 0; h < u.length; h++) {
                                    var l = u[h],
                                        d = void 0 !== (s = function(e, t) {
                                            var n = e;
                                            if ("function" == typeof n.getPropertyCSSValue) {
                                                var r = n.getPropertyCSSValue(t);
                                                if (null != r) {
                                                    var i;
                                                    switch (r.cssValueType) {
                                                        case Oi.CSS_PRIMITIVE_VALUE:
                                                            i = r;
                                                            break;
                                                        case Oi.CSS_VALUE_LIST:
                                                            if (1 !== r.length) return;
                                                            var o = r.item(0);
                                                            if (null == o) return;
                                                            if (o.cssValueType !== Oi.CSS_PRIMITIVE_VALUE) return;
                                                            i = o;
                                                            break;
                                                        default:
                                                            return;
                                                    }
                                                    if (i.primitiveType === Pi.CSS_STRING) {
                                                        var s = ur();
                                                        Mi || (Mi = s.createElement("div"));
                                                        var a = i.cssText;
                                                        try {
                                                            Mi.style.cssText = t + ": \"" + a + "\";";
                                                            var u = Mi.style.getPropertyCSSValue(t);
                                                            if (null == u) return;
                                                            if (a !== u.cssText) return
                                                        } catch (e) {
                                                            return
                                                        } finally {
                                                            Mi.style.cssText = ""
                                                        }
                                                        return "\"" + a + "\""
                                                    }
                                                }
                                            }
                                        }(i = u, o = l)) ? s : i.getPropertyValue(o);
                                    ("initial" === d || ("\"" === (r = d)[0] || "'" === r[0]) && r[r.length - 1] === r[0]) && (c += l + ": " + d, "important" === u.getPropertyPriority(l) && (c += " !important"), c += "; ")
                                }
                                return [u.cssText, c].filter(Boolean).join("\n")
                            }
                            var p = a.cssRules;
                            if (!p) return null;
                            var f = "";
                            for (h = 0; h < p.length; h++) f += e(p[h], n + 1);
                            return f
                        }(t, n);
                        return null == i ? t.cssText : r + " { " + i + "} "
                    },
                    io = /^\s*$/;

                function oo(e, t) {
                    var n = function(e) {
                        var t = ao(e);
                        if (t) return [He.Sheet, t];
                        var n = Tn(e.ownerNode);
                        return n ? [He.Node, n] : void 0
                    }(e);
                    if (n) {
                        var r = n[0],
                            i = n[1];
                        return r === t ? i : n
                    }
                }
                var so = new WeakMap;

                function ao(e) {
                    return so.get(e)
                }

                function uo(e) {
                    return e.length <= Ir ? e : (e.length, ":root { --fs-dropped-large-rule: 0 }")
                }
                var co = function() {
                        function e(e, t, n) {
                            this._ctx = e, this._q = t, this._listeners = n.createChild()
                        }
                        return e.prototype.start = function() {
                            var e = this,
                                t = this._ctx.window.document;
                            this._listeners.addCustom(t, this.getFullscreenChangeEvent(), !0, function(t) {
                                e.onFullscreenChange(t)
                            }), this._listeners.addCustom(t, this.getFullscreenErrorEvent(), !0, function(t) {
                                e.onFullscreenError(t)
                            })
                        }, e.prototype.stop = function() {
                            this._listeners && this._listeners.clear()
                        }, e.prototype.onFullscreenChange = function(e) {
                            var t = this.getFullscreenElement();
                            if (t) {
                                var n = Tn(t);
                                Re(null == this._previousFullscreenFSID, "Error: Received fullscreen signal but we think we are already in fullscreen?"), this._q.enqueue({
                                    Kind: Ee.FULLSCREEN,
                                    Args: [n, !0]
                                }), this._previousFullscreenFSID = n
                            } else Re(null != this._previousFullscreenFSID, "Error: Received fullscreen exit signal but have no previous fullscreen event?"), this._q.enqueue({
                                Kind: Ee.FULLSCREEN,
                                Args: [this._previousFullscreenFSID, !1]
                            }), this._previousFullscreenFSID = void 0
                        }, e.prototype.onFullscreenError = function(e) {
                            this._q.enqueue({
                                Kind: Ee.FULLSCREEN_ERROR,
                                Args: []
                            })
                        }, e.prototype.getFullscreenElement = function() {
                            var e = this._ctx.window.document;
                            return e[ir(e, "fullscreenElement")]
                        }, e.prototype.getFullscreenChangeEvent = function() {
                            return ir(this._ctx.window.document, "onfullscreenchange").slice(2)
                        }, e.prototype.getFullscreenErrorEvent = function() {
                            return ir(this._ctx.window.document, "onfullscreenerror").slice(2)
                        }, e
                    }(),
                    ho = co,
                    lo = function() {
                        function e(e, t) {
                            this._queue = t, this._registry = null, this._checkedNodeTags = {};
                            var n = e.window;
                            "customElements" in n && "get" in n.customElements && "whenDefined" in n.customElements && (this._registry = n.customElements)
                        }
                        return e.prototype.onCustomNodeVisited = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var t, n;
                                return (0, i.__generator)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (!this._registry) return [2];
                                            if (t = e.nodeName.toLowerCase(), Object.prototype.hasOwnProperty.call(this._checkedNodeTags, t)) return [2];
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, , 4]), n = !!this._registry.get(t), this._checkedNodeTags[t] = n, [4, this._registry.whenDefined(t)];
                                        case 2:
                                            return r.sent(), this._enqueue(t), [3, 4];
                                        case 3:
                                            return r.sent(), [3, 4];
                                        case 4:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype._enqueue = function(e) {
                            this._queue.enqueue({
                                Kind: Ee.CUSTOM_ELEMENT_DEFINED,
                                Args: [e]
                            })
                        }, e
                    }(),
                    po = function() {
                        function e(e, t) {
                            var n;
                            this.queue = [], this.flushPending = !1, this.wnd = e, this.interval = null !== (n = t.interval) && void 0 !== n ? n : 1e3, this.onFlush = t.onFlush
                        }
                        return e.prototype.append = function(e) {
                            this.schedule(), this.queue.push(e)
                        }, e.prototype.flush = function() {
                            this.flushPending = !1, this.onFlush(this.queue), this.queue = []
                        }, e.prototype.schedule = function() {
                            this.flushPending || (s.setWindowTimeout(this.wnd, z(this.flush.bind(this)), this.interval), this.flushPending = !0)
                        }, e
                    }(),
                    fo = function() {
                        function e(e) {
                            this._pendingFlush = !1, this._onFlush = e
                        }
                        return e.prototype.flush = function() {
                            this._onFlush(), this._pendingFlush = !1
                        }, e.prototype.schedule = function() {
                            var e = this;
                            this._pendingFlush || (this._pendingFlush = !0, Ft.resolve().then(function() {
                                e.flush()
                            })["catch"](function(e) {
                                return Ae.sendToBugsnag(e, "error")
                            }))
                        }, e
                    }(),
                    _o = function() {
                        function e(e, t, n, r, i, o, s, a, u) {
                            var c = this;
                            this._ctx = e, this._queue = t, this._keep = n, this._onFrameCreated = o, this._beforeFrameRemoved = s, this._resourceUploader = a, this._urlPrivacy = u, this._curSelection = [], this._scrollTimeouts = {}, this._uploadResources = !1, this._modalHooks = [], this._initialized = !1, this._wnd = e.window, this._doc = this._wnd.document, this._loc = this._wnd.location, this._hst = this._wnd.history, this._listeners = i.createChild(), this._currentUrl = this._loc.href, this._inputWatcher = new Un(e, t), this._animationWatcher = new jn(e, t, this._listeners), this._ajaxWatcher = new Fi(e, t), this._perfWatcher = new Ii(e, t, this._listeners, this._urlPrivacy), this._styleSheetWatcher = new to(e, t), this._fullscreenWatcher = new ho(e, t, this._listeners), this._customElementWatcher = new lo(e, t), this._intersectionWatcher = function(e, t) {
                                void 0 === t && (t = .25);
                                var n = e.window.IntersectionObserver;
                                if (n) return new n(function(t) {
                                    for (var n, r = 0, i = t; r < i.length; r++) {
                                        var o = i[r],
                                            s = o.target,
                                            a = o.intersectionRatio,
                                            u = Tn(s);
                                        u && (null === (n = e.queue()) || void 0 === n || n.enqueue({
                                            Kind: Ee.VIEWPORT_INTERSECTION,
                                            Args: [u, a]
                                        }))
                                    }
                                }, {
                                    threshold: [t, 1]
                                })
                            }(e), this._mutWatcher = new Ti(e, r, this.visitNode.bind(this), this.beforeRemove.bind(this), this.attributesVisitor.bind(this), this._intersectionWatcher), this._urlPrivacyOnlyScheduler = new po(this._wnd, {
                                interval: 40,
                                onFlush: function(e) {
                                    return c.processUrls(e)
                                }
                            }), this._processUrlsScheduler = new po(this._wnd, {
                                interval: 40,
                                onFlush: function(e) {
                                    return c.processUrls(e, !0)
                                }
                            })
                        }
                        return e.prototype.getResourceUploader = function() {
                            return this._resourceUploader
                        }, e.prototype.watchEvents = function(e) {
                            var t = this;
                            this._mutWatcher.hookMutations(), this._inputWatcher.hookEvents(), this._animationWatcher.start(), this._styleSheetWatcher.start(), this._fullscreenWatcher.start(), (null == e ? void 0 : e.DisableCopyPasteListener) || (this._listeners.add(this._wnd, "copy", !1, this.addCopyEvent.bind(this)), this._listeners.add(this._wnd, "paste", !1, this.addPasteEvent.bind(this))), this._listeners.add(this._wnd, "mousemove", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addMouseMove(e)
                            }), this._listeners.add(this._wnd, "mousedown", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addMouseDown(e)
                            }), this._listeners.add(this._wnd, "mouseup", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addMouseUp(e)
                            }), this._listeners.add(this._wnd, "keydown", !0, function() {
                                t._maybeAddValueChange()
                            }), this._listeners.add(this._wnd, "keyup", !0, function() {
                                t._maybeAddValueChange()
                            }), this._listeners.add(this._wnd, "click", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addClick(e)
                            }), this._listeners.add(this._wnd, "dblclick", !0, function(e) {
                                t.addDblClick(e)
                            }), this._listeners.add(this._wnd, "focus", !0, function(e) {
                                t.addFocus(e, So(e))
                            }, !0), this._listeners.add(this._wnd, "blur", !0, function(e) {
                                t.addBlur(e, So(e))
                            }, !0), this._listeners.add(this._wnd, "change", !0, function(e) {
                                t.addChange(e, So(e))
                            }, !0), this._listeners.add(this._wnd, "touchstart", !0, function(e) {
                                t.isSafePointerEvent(e) && (t.addTouchEvent(e, Ee.TOUCHSTART), t.addWindowScrollOrResize())
                            }), this._listeners.add(this._wnd, "touchend", !0, function(e) {
                                t.isSafePointerEvent(e) && (t.addTouchEvent(e, Ee.TOUCHEND), t.addWindowScrollOrResize())
                            }), this._listeners.add(this._wnd, "touchmove", !0, function(e) {
                                t.isSafePointerEvent(e) && (t.addTouchEvent(e, Ee.TOUCHMOVE), t.addWindowScrollOrResize())
                            }), this._listeners.add(this._wnd, "touchcancel", !0, function(e) {
                                t.isSafePointerEvent(e) && t.addTouchEvent(e, Ee.TOUCHCANCEL)
                            }), this._listeners.add(this._wnd, "play", !0, function(e) {
                                t.addPlayEvent(e)
                            }), this._listeners.add(this._wnd, "pause", !0, function(e) {
                                t.addPauseEvent(e)
                            }), this._listeners.add(this._wnd, "scroll", !0, function(e) {
                                e.bubbles ? t.addWindowScrollOrResize() : t.addScroll(yo(e))
                            }), this._listeners.add(this._wnd, "resize", !1, function() {
                                t.addWindowScrollOrResize()
                            }), this._listeners.add(this._wnd, "submit", !1, function(e) {
                                t.addFormSubmit(e)
                            }), this._listeners.add(this._wnd, "focus", !1, function() {
                                t.addWindowFocus()
                            }), this._listeners.add(this._wnd, "blur", !1, function() {
                                t.addWindowBlur()
                            }), this._listeners.add(this._wnd, "popstate", !1, function() {
                                t.addNavigate()
                            }), this._listeners.add(this._wnd, "selectstart", !0, function() {
                                t.addSelection()
                            }), this._listeners.add(this._doc, "selectionchange", !0, function() {
                                t.addSelection()
                            });
                            var n = this._wnd.visualViewport;
                            n ? (this._listeners.add(n, "scroll", !0, function() {
                                return t.addWindowScrollOrResize()
                            }), this._listeners.add(n, "resize", !0, function() {
                                return t.addWindowScrollOrResize()
                            })) : this._listeners.add(this._wnd, "mousewheel", !0, function() {
                                t.addWindowScrollOrResize()
                            }), this._pushHook = pe(this._hst, "pushState", !0), this._pushHook && this._pushHook.afterSync(function() {
                                return t.addNavigate()
                            }), this._replaceHook = pe(this._hst, "replaceState", !0), this._replaceHook && this._replaceHook.afterSync(function() {
                                return t.addNavigate()
                            });
                            for (var r = function(e) {
                                    var n = pe(i._wnd, e);
                                    if (!n) return "continue";
                                    i._modalHooks.push(n), n.before(function() {
                                        t._queue.enqueue({
                                            Kind: Ee.MODAL_OPEN,
                                            Args: [e]
                                        })
                                    }).afterSync(function() {
                                        t._queue.enqueue({
                                            Kind: Ee.MODAL_CLOSE,
                                            Args: [e]
                                        })
                                    })
                                }, i = this, o = 0, a = $e; o < a.length; o++) r(a[o]);
                            if ("function" == typeof this._wnd.document.hasFocus && this._queue.enqueue({
                                    Kind: this._wnd.document.hasFocus() ? Ee.WINDOW_FOCUS : Ee.WINDOW_BLUR,
                                    Args: []
                                }), s.matchMedia)
                                for (var u = function(e, n, r) {
                                        var i = s.matchMedia(c._wnd, r);
                                        if (!i) return "continue";
                                        var o = function() {
                                            i.matches && t._queue.enqueue({
                                                Kind: Ee.MEDIA_QUERY_CHANGE,
                                                Args: [e, n]
                                            })
                                        };
                                        c._listeners.add(i, "change", !0, o), o()
                                    }, c = this, h = 0, l = [
                                        ["any-pointer", "coarse", "not screen and (any-pointer: fine)"],
                                        ["any-pointer", "fine", "only screen and (any-pointer: fine)"],
                                        ["any-hover", "none", "not screen and (any-hover: hover)"],
                                        ["any-hover", "hover", "only screen and (any-hover: hover)"],
                                        ["pointer", "none", "(pointer: none)"],
                                        ["pointer", "coarse", "(pointer: coarse)"],
                                        ["pointer", "fine", "(pointer: fine)"],
                                        ["prefers-color-scheme", "no-preference", "(prefers-color-scheme: no-preference)"],
                                        ["prefers-color-scheme", "light", "(prefers-color-scheme: light)"],
                                        ["prefers-color-scheme", "dark", "(prefers-color-scheme: dark)"]
                                    ]; h < l.length; h++) {
                                    var d = l[h];
                                    u(d[0], d[1], d[2])
                                }
                            this._initialized = !0
                        }, e.prototype.initResourceUploading = function() {
                            this._resourceUploader.init(), this._uploadResources = !0
                        }, e.prototype.onDomLoad = function() {
                            this.addDomLoaded(), this.addViewportChange(), this._mutWatcher._checkForMissingInsertions(Yn)
                        }, e.prototype.onLoad = function() {
                            var e = this,
                                t = !1,
                                n = Ae.wrap(function() {
                                    t || (t = !0, e._perfWatcher.onLoad(), e.addLoad(), e.addViewportChange())
                                }, "error");
                            new Pn(n, 0).start(), s.requestWindowAnimationFrame && s.requestWindowAnimationFrame(this._wnd, n)
                        }, e.prototype.ajaxWatcher = function() {
                            return this._ajaxWatcher
                        }, e.prototype.perfWatcher = function() {
                            return this._perfWatcher
                        }, e.prototype.bundleEvents = function() {
                            var e = this;
                            return this._queue.enqueueSimultaneousEventsIn(function(t) {
                                var n = e._mutWatcher.processMutations(t);
                                return e._inputWatcher.tick(), e._perfWatcher.tick(), e._ajaxWatcher.tick(), e.addViewportChange(), n
                            })
                        }, e.prototype.shutdown = function(e) {
                            var t;
                            if (this._initialized) {
                                this._initialized = !1, this._listeners && this._listeners.clear(), this._pushHook && this._pushHook.disable(), this._replaceHook && this._replaceHook.disable();
                                for (var n = 0, r = this._modalHooks; n < r.length; n++) r[n].disable();
                                this._modalHooks = [], this._perfWatcher.onLoad(), this._ctx.measurer.performMeasurementsNow(), this._queue.processEvents(), this._processUrlsScheduler.flush(), this._urlPrivacyOnlyScheduler.flush(), this._urlPrivacy.flush(), this._inputWatcher.shutdown(), this._mutWatcher.shutdown(), this._ajaxWatcher.disable(), this._animationWatcher.stop(), this._perfWatcher.shutdown(), this._styleSheetWatcher.stop(), this._fullscreenWatcher.stop(), null === (t = this._intersectionWatcher) || void 0 === t || t.disconnect(), this._queue.shutdown(e)
                            }
                        }, e.prototype.recordingIsDetached = function() {
                            return this._mutWatcher.recordingIsDetached()
                        }, e.prototype.visitNode = function(e, t) {
                            var n = this;
                            switch (e.nodeName) {
                                case "#document":
                                case "#document-fragment":
                                    "#document-fragment" === e.nodeName && this._listeners.add(e, "scroll", !0, function(e) {
                                        return n.addScroll(yo(e))
                                    });
                                    var r = e;
                                    try {
                                        if (!r.adoptedStyleSheets || 0 === r.adoptedStyleSheets.length) break
                                    } catch (e) {
                                        break
                                    }
                                    null == t || t.push(function() {
                                        n._styleSheetWatcher.onSetAdoptedStyleSheets(e)
                                    });
                                    break;
                                case "BODY":
                                    this.addViewportChange(), this.addSelection();
                                    break;
                                case "INPUT":
                                case "TEXTAREA":
                                case "SELECT":
                                    this._inputWatcher.addInput(e);
                                    break;
                                case "FRAME":
                                case "IFRAME":
                                    this._onFrameCreated(e);
                                    break;
                                case "VIDEO":
                                case "AUDIO":
                                    e.paused || this._queue.enqueue({
                                        Kind: Ee.PLAY,
                                        Args: [Tn(e)]
                                    });
                                    break;
                                case "LINK":
                                case "STYLE":
                                    var i = e,
                                        o = i.sheet;
                                    if (!o) break;
                                    this._styleSheetWatcher.ensureHook(o), !0 === o.disabled && this._styleSheetWatcher.onDisableSheet(o, !0),
                                        function(e) {
                                            var t = e.textContent || "";
                                            if (t.length > 5e5) return !1;
                                            var n = Zi(Xi(e));
                                            return !!n && (!!("style" === un(e) && n.length > 0 && io.test(t)) || function(e) {
                                                var t;
                                                try {
                                                    if ((null === (t = e.classList) || void 0 === t ? void 0 : t.contains("fs-css-in-js")) || e.hasAttribute("data-fela-type") || e.hasAttribute("data-aphrodite")) return !0
                                                } catch (e) {
                                                    Ae.sendToBugsnag(e, "error")
                                                }
                                                return !1
                                            }(e))
                                        }(i) && (null == t || t.push(function() {
                                            n._styleSheetWatcher.snapshotEl(i), "link" === un(i) && n._listeners.add(i, "load", !1, function() {
                                                n._styleSheetWatcher.snapshotEl(i)
                                            })
                                        }));
                                    break;
                                default:
                                    "#" !== e.nodeName[0] && e.nodeName.indexOf("-") > -1 && this._customElementWatcher.onCustomNodeVisited(e);
                            }
                            if ("scrollLeft" in e && "scrollTop" in e) {
                                var s = e;
                                this._ctx.measurer.requestMeasureTask(Dt.Low, function() {
                                    0 == s.scrollLeft && 0 == s.scrollTop || n.addScroll(s)
                                })
                            }
                            null == t || t.push(function() {
                                n._ctx.measurer.requestMeasureTask(Dt.Low, function() {
                                    n._animationWatcher.snapshot(e)
                                })
                            })
                        }, e.prototype.beforeRemove = function(e) {
                            var t, n = e.node,
                                r = un(e.node);
                            if ("iframe" === r) this._beforeFrameRemoved(e.node);
                            else if ("function" == typeof n.getElementsByTagName)
                                for (var i = null !== (t = n.getElementsByTagName("iframe")) && void 0 !== t ? t : [], o = 0; o < i.length; o++) {
                                    var s = i[o];
                                    this._beforeFrameRemoved(s)
                                } else if ("link" === r || "style" === r) {
                                    var a = n.sheet;
                                    if (!a) return;
                                    this._styleSheetWatcher.removeHook(a)
                                }
                        }, e.prototype.attributesVisitor = function(e, t, n) {
                            if (! function(e, t) {
                                    return void 0 === t && (t = En(e)), yn(e, t) || Sn(e, t)
                                }(t)) {
                                var r = function(e, t, n) {
                                    for (var r, i, o = [], s = 0, a = mo; s < a.length; s++) {
                                        var u = a[s];
                                        n[u] && go[u][e] && o.push(n[u])
                                    }
                                    if ("link" === e && n.href && (r = n.rel) && r.indexOf("stylesheet") > -1 && o.push(n.href), ("img" === e || "source" === e) && (i = n.srcset) && null == i.match(/^\s*$/))
                                        for (var c = 0, h = i.split(","); c < h.length; c++) {
                                            var l = h[c];
                                            o.push(l.trim().split(/\s+/)[0])
                                        }
                                    var d = t;
                                    if (n.style && d.style) {
                                        var p = d.style.backgroundImage;
                                        if (p && p.length <= 300) {
                                            var f = void 0;
                                            for (en.lastIndex = 0; f = en.exec(p);) {
                                                var _ = f[1];
                                                _ && o.push(_.trim())
                                            }
                                        }
                                    }
                                    return o
                                }(e, t, n);
                                if (0 === r.length)
                                    for (var i = 0, o = mo; i < o.length; i++) {
                                        var s = o[i];
                                        n[s] && this._urlPrivacyOnlyScheduler.append(n[s])
                                    } else
                                        for (var a = 0, u = r; a < u.length; a++) {
                                            var c = u[a];
                                            this._processUrlsScheduler.append(c)
                                        }
                            }
                        }, e.prototype.processUrls = function(e, t) {
                            void 0 === t && (t = !1);
                            for (var n = lr(this._wnd), r = 0, i = e; r < i.length; r++) {
                                var o = hr(n, i[r]);
                                this._uploadResources && t && this._resourceUploader.uploadIfNeeded(this._wnd, o), this._urlPrivacy.record(o.href)
                            }
                        }, e.prototype.isSafePointerEvent = function(e) {
                            var t = yo(e);
                            return !!Tn(t) && !yn(t)
                        }, e.prototype.addMouseMove = function(e) {
                            var t = Tn(yo(e));
                            this._queue.enqueue({
                                Kind: Ee.MOUSEMOVE,
                                Args: t ? [e.clientX, e.clientY, t] : [e.clientX, e.clientY]
                            })
                        }, e.prototype.addMouseDown = function(e) {
                            this._queue.enqueue({
                                Kind: Ee.MOUSEDOWN,
                                Args: [e.clientX, e.clientY]
                            })
                        }, e.prototype.addMouseUp = function(e) {
                            this._queue.enqueue({
                                Kind: Ee.MOUSEUP,
                                Args: [e.clientX, e.clientY]
                            })
                        }, e.prototype.addTouchEvent = function(e, t) {
                            if (void 0 !== e.changedTouches)
                                for (var n = 0; n < e.changedTouches.length; ++n) {
                                    var r = e.changedTouches[n];
                                    isNaN(parseInt(r.identifier, 10)) && (r.identifier = 0);
                                    var i = [r.identifier, r.clientX, r.clientY];
                                    this._queue.enqueue({
                                        Kind: t,
                                        Args: i
                                    })
                                }
                        }, e.prototype.addPlayEvent = function(e) {
                            var t = Tn(yo(e));
                            t && this._queue.enqueue({
                                Kind: Ee.PLAY,
                                Args: [t]
                            })
                        }, e.prototype.addPauseEvent = function(e) {
                            var t = Tn(yo(e));
                            t && this._queue.enqueue({
                                Kind: Ee.PAUSE,
                                Args: [t]
                            })
                        }, e.prototype.addWindowFocus = function() {
                            this._queue.enqueue({
                                Kind: Ee.WINDOW_FOCUS,
                                Args: []
                            })
                        }, e.prototype.addWindowBlur = function() {
                            this._queue.enqueue({
                                Kind: Ee.WINDOW_BLUR,
                                Args: []
                            })
                        }, e.prototype._maybeAddValueChange = function() {
                            var e, t = function(e) {
                                for (var t = e.activeElement; t && t.shadowRoot;) {
                                    var n = t.shadowRoot.activeElement;
                                    if (!n) return t;
                                    t = n
                                }
                                return t
                            }(this._doc);
                            t && !yn(t) && ("value" in (e = t) || "checked" in e) && this._inputWatcher.onChange(t, !1)
                        }, e.prototype.addViewportChange = function() {
                            var e = this;
                            this._ctx.measurer.requestMeasureTask(Dt.High, function() {
                                return e._addViewportChangeImpl()
                            })
                        }, e.prototype._addViewportChangeImpl = function() {
                            var e, t = (e = this._wnd.document).scrollingElement || e.body || e.documentElement,
                                n = Tn(t);
                            if (n) {
                                var r = function(e, t) {
                                    var n, r = e.documentElement.getBoundingClientRect(),
                                        i = null !== (n = e.body) && void 0 !== n ? n : {
                                            scrollHeight: 0,
                                            scrollWidth: 0
                                        };
                                    return {
                                        width: Math.max(r.width, t.scrollWidth, i.scrollWidth),
                                        height: Math.max(r.height, t.scrollHeight, i.scrollHeight)
                                    }
                                }(this._wnd.document, t);
                                Yt(r, this._curDocSize) || (this._curDocSize = r, this._queue.enqueue({
                                    Kind: Ee.RESIZE_DOCUMENT_CONTENT,
                                    Args: [r.width, r.height]
                                }));
                                var i, o, s, a, u = sn(this._wnd, this._curLayoutViewport),
                                    c = function(e, t) {
                                        if ("visualViewport" in e) return e.visualViewport;
                                        var n = t;
                                        return void 0 === n && (n = sn(e)), new an(e, n)
                                    }(this._wnd, u);
                                u.hasKnownPosition ? (Gt(u, this._curLayoutViewport) || this._queue.enqueue({
                                        Kind: Ee.SCROLL_LAYOUT,
                                        Args: [n, u.pageLeft, u.pageTop]
                                    }), i = c, (o = this._curVisualViewport) && i.offsetLeft == o.offsetLeft && i.offsetTop == o.offsetTop || this._queue.enqueue({
                                        Kind: Ee.SCROLL_VISUAL_OFFSET,
                                        Args: [n, c.offsetLeft, c.offsetTop]
                                    })) : Gt(c, this._curVisualViewport) || this._queue.enqueue({
                                        Kind: Ee.SCROLL_LAYOUT,
                                        Args: [n, c.pageLeft, c.pageTop]
                                    }),
                                    function(e, t) {
                                        return t && e.width == t.width && e.height == t.height && e.clientWidth == t.clientWidth && e.clientHeight == t.clientHeight
                                    }(u, this._curLayoutViewport) || (u.width == u.clientWidth && u.height == u.clientHeight ? this._queue.enqueue({
                                        Kind: Ee.RESIZE_LAYOUT,
                                        Args: [u.clientWidth, u.clientHeight]
                                    }) : this._queue.enqueue({
                                        Kind: Ee.RESIZE_LAYOUT,
                                        Args: [u.clientWidth, u.clientHeight, u.width, u.height]
                                    })), Yt(c, this._curVisualViewport) || this._queue.enqueue({
                                        Kind: Ee.RESIZE_VISUAL,
                                        Args: [c.width, c.height]
                                    }), this._curLayoutViewport = ((a = Xt(s = u)).clientWidth = s.clientWidth, a.clientHeight = s.clientHeight, a), this._curVisualViewport = function(e) {
                                        var t = Xt(e);
                                        return t.offsetLeft = e.offsetLeft, t.offsetTop = e.offsetTop, t
                                    }(c)
                            }
                        }, e.prototype.doWorkInScrollTimeout = function(e, t) {
                            var n = this;
                            e in this._scrollTimeouts || (this._scrollTimeouts[e] = t, new Pn(function() {
                                n._ctx.measurer.requestMeasureTask(Dt.High, function() {
                                    if (e in n._scrollTimeouts) {
                                        var t = n._scrollTimeouts[e];
                                        delete n._scrollTimeouts[e], t()
                                    }
                                })
                            }, Je.ScrollSampleInterval).start())
                        }, e.prototype._fireScrollTimeouts = function() {
                            for (var e in this._scrollTimeouts) this._scrollTimeouts[e](), delete this._scrollTimeouts[e];
                            this._scrollTimeouts = []
                        }, e.prototype.addWindowScrollOrResize = function() {
                            var e = this;
                            this.doWorkInScrollTimeout(1, function() {
                                return e.addViewportChange()
                            })
                        }, e.prototype.addScroll = function(e) {
                            var t = this,
                                n = Tn(e);
                            n && this.doWorkInScrollTimeout(n, function() {
                                if (Tn(e) === n) {
                                    var r = e;
                                    n && "number" == typeof r.scrollLeft && (t._queue.enqueue({
                                        Kind: Ee.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                                        Args: [n, r.scrollWidth, r.scrollHeight]
                                    }), t._queue.enqueue({
                                        Kind: Ee.SCROLL_LAYOUT,
                                        Args: [n, r.scrollLeft, r.scrollTop]
                                    }), Bt().then(function() {
                                        t._mutWatcher.resizer().isObserved(n) || t._mutWatcher.resizer().observe(e)
                                    }))
                                }
                            })
                        }, e.prototype.addDomLoaded = function() {
                            this._queue.enqueue({
                                Kind: Ee.DOMLOADED,
                                Args: []
                            })
                        }, e.prototype.addLoad = function() {
                            this._queue.enqueue({
                                Kind: Ee.LOAD,
                                Args: []
                            })
                        }, e.prototype.getNavigateEvent = function(e, t) {
                            void 0 === t && (t = Ee.NAVIGATE);
                            var n = {
                                Kind: t,
                                Args: [Pr(e, {
                                    source: "event",
                                    type: Ee.NAVIGATE
                                })]
                            };
                            return t === Ee.ENTRY_NAVIGATE ? (n.Args.push(this.getNavigationTimingType()), n) : n
                        }, e.prototype.addNavigate = function() {
                            var e = this._loc.href;
                            this._currentUrl != e && (this._currentUrl = e, this._keep.onNavigate(e), this._queue.enqueue(this.getNavigateEvent(e)))
                        }, e.prototype.getNavigationTimingType = function() {
                            try {
                                var e = this._wnd.performance;
                                if (!e || !e.navigation) return "unknown";
                                switch (e.navigation.type) {
                                    case PerformanceNavigation.TYPE_NAVIGATE:
                                        return "navigate";
                                    case PerformanceNavigation.TYPE_RELOAD:
                                        return "reload";
                                    case PerformanceNavigation.TYPE_BACK_FORWARD:
                                        return "back_forward";
                                    default:
                                        return "unknown";
                                }
                            } catch (e) {
                                return "unknown"
                            }
                        }, e.prototype.addClick = function(e) {
                            var t = yo(e),
                                n = Tn(t);
                            if (n) {
                                var r = 0,
                                    i = 0,
                                    o = 0,
                                    s = 0;
                                if (t && t.getBoundingClientRect) {
                                    var a = t.getBoundingClientRect();
                                    r = a.left, i = a.top, o = a.width, s = a.height
                                }
                                var u = En(t);
                                this._keep.onClick(u), this._queue.enqueue({
                                    Kind: Ee.CLICK,
                                    Args: [n, e.clientX, e.clientY, r, i, o, s]
                                })
                            }
                        }, e.prototype.addDblClick = function(e) {
                            var t = Tn(yo(e));
                            t && this._queue.enqueue({
                                Kind: Ee.DBL_CLICK,
                                Args: [t]
                            })
                        }, e.prototype.addFormSubmit = function(e) {
                            var t = Tn(yo(e));
                            t && this._queue.enqueue({
                                Kind: Ee.FORM_SUBMIT,
                                Args: [t]
                            })
                        }, e.prototype.addFocus = function(e, t) {
                            var n = Tn(yo(e));
                            n && this._queue.enqueue({
                                Kind: Ee.FOCUS,
                                Args: [n, t]
                            })
                        }, e.prototype.addBlur = function(e, t) {
                            var n = Tn(yo(e));
                            n && this._queue.enqueue({
                                Kind: Ee.BLUR,
                                Args: [n, t]
                            })
                        }, e.prototype.addChange = function(e, t) {
                            this._inputWatcher.onChange(yo(e), t)
                        }, e.prototype.addSelection = function() {
                            var e = this;
                            this._ctx.measurer.requestMeasureTask(Dt.High, function() {
                                var t;
                                try {
                                    t = e.selectionArgs()
                                } catch (e) {
                                    return
                                }
                                for (var n = !1, r = 0; r < 4; r++)
                                    if (e._curSelection[r] !== t[r]) {
                                        n = !0;
                                        break
                                    }
                                n && (e._curSelection = t, e._queue.enqueue({
                                    Kind: Ee.SELECT,
                                    Args: t
                                }))
                            })
                        }, e.prototype.selectionArgs = function() {
                            if (!this._wnd.getSelection) return [];
                            var e = this._wnd.getSelection();
                            if (!e) return [];
                            if ("None" == e.type) return [];
                            if ("Caret" == e.type) {
                                var t = Tn(e.anchorNode);
                                return t ? [t, e.anchorOffset] : []
                            }
                            if (!e.anchorNode || !e.focusNode) return [];
                            var n = vo(e.anchorNode, e.anchorOffset),
                                r = n[0],
                                i = n[1],
                                o = vo(e.focusNode, e.focusOffset),
                                s = o[0],
                                a = o[1],
                                u = Boolean(r.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING),
                                c = u ? [r, s] : [s, r],
                                h = c[0],
                                l = c[1],
                                d = u ? [i, a] : [a, i],
                                p = d[0],
                                f = d[1];
                            for (Tn(h) || (p = 0); h && !Tn(h) && h != l;) h = te(h) || h.parentNode;
                            for (Tn(l) || (f = 0); l && !Tn(l) && l != h;) l = re(l) || l.parentNode;
                            if (h == l && p == f) return [];
                            var _ = Tn(h),
                                v = Tn(l);
                            return h && l && _ && v ? [_, p, v, f, u] : []
                        }, e.prototype.addCopyEvent = function() {
                            this._queue.enqueue({
                                Kind: Ee.COPY,
                                Args: []
                            })
                        }, e.prototype.addPasteEvent = function() {
                            this._queue.enqueue({
                                Kind: Ee.PASTE,
                                Args: []
                            })
                        }, e
                    }();

                function vo(e, t) {
                    var n = e;
                    if (!n.firstChild) return [n, t];
                    n = n.firstChild;
                    for (var r = 0; r < t - 1; r++) {
                        var i = te(n);
                        if (!i) return [n, 0];
                        n = i
                    }
                    return [n, 0]
                }
                var go = {
                        src: {
                            img: !0,
                            embed: !0
                        },
                        href: {
                            use: !0,
                            image: !0
                        },
                        data: {
                            object: !0
                        }
                    },
                    mo = s.objectKeys(go);

                function yo(e) {
                    if (e.composed && e.target) {
                        var t = e.target;
                        if (1 == t.nodeType && t.shadowRoot) {
                            var n = e.composedPath();
                            if (n.length > 0) return n[0]
                        }
                    }
                    return e.target
                }

                function So(e) {
                    var t;
                    return !!(null !== (t = e._fs_trust_event) && void 0 !== t && t || e.isTrusted)
                }
                var wo = /^\s*at .*(\S+:\d+|native|(<anonymous>))/m,
                    Eo = /^(eval@)?(\[native code\])?$/;

                function bo(e) {
                    if (!e || "string" != typeof e.stack) return [];
                    var t = e;
                    return t.stack.match(wo) ? t.stack.split("\n").filter(function(e) {
                        return !!e.match(wo)
                    }).map(function(e) {
                        var t = e;
                        t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                        var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1),
                            r = Io(n.pop());
                        return To(n.join(" "), ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? "" : r[0], r[1], r[2])
                    }) : t.stack.split("\n").filter(function(e) {
                        return !e.match(Eo)
                    }).map(function(e) {
                        var t = e;
                        if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return [t, "", -1, -1];
                        var n = t.split("@"),
                            r = Io(n.pop());
                        return To(n.join("@"), r[0], r[1], r[2])
                    })
                }

                function To(e, t, n, r) {
                    return [e || "", t || "", parseInt(n || "-1", 10), parseInt(r || "-1", 10)]
                }

                function Io(e) {
                    if (!e || -1 === e.indexOf(":")) return ["", "", ""];
                    var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                    return t ? [t[1] || "", t[2] || "", t[3] || ""] : ["", "", ""]
                }

                function ko(e, t) {
                    try {
                        var n = {
                            tokens: [],
                            opath: [],
                            cyclic: Co(e, t / 4)
                        };
                        return xo(e, t, 0, n), n.tokens.join("")
                    } catch (e) {
                        return ue(e)
                    }
                }

                function Co(e, t) {
                    var n = 0;
                    try {
                        s.jsonStringify(e, function(e, r) {
                            if (n++ > t) throw "break";
                            if ("object" == typeof r) return r
                        })
                    } catch (e) {
                        return "break" != e
                    }
                    return !1
                }
                var Ao = function(e, t, n) {
                    return void 0 === n && (n = "..."), e.length <= t ? e : e.length <= n.length || t <= n.length ? e.substring(0, t) : e.substring(0, t - n.length) + n
                };

                function xo(e, t, n, r) {
                    if (t < 1) return 0;
                    var i = function(e) {
                        switch (!0) {
                            case
                            function(e) {
                                return !(!e || e.constructor != Date)
                            }(e):
                                return t = e, isNaN(t) ? "Invalid Date" : t.toUTCString();
                            case
                            function(e) {
                                return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeType > 0 && "string" == typeof e.nodeName
                            }(e):
                                return function(e) {
                                    return e.toString()
                                }(e);
                            case void 0 === e:
                                return "undefined";
                            case "object" != typeof e || null == e:
                                return e;
                            case e instanceof Error:
                                return [e.toString(), e.stack].filter(Boolean).join(",");
                        }
                        var t
                    }(e);
                    if (void 0 !== i) {
                        var o = function(e, t) {
                            var n = s.jsonStringify(e);
                            return n && "\"" == n[0] ? Ao(n, t, "...\"") : n
                        }(i, t);
                        return "string" == typeof o && o.length <= t ? (r.tokens.push(o), o.length) : 0
                    }
                    if (r.cyclic) {
                        r.opath.splice(n);
                        var a = r.opath.lastIndexOf(e);
                        if (a > -1) {
                            var u = "<Cycle to ancestor #" + (n - a - 1) + ">";
                            return u = "\"" + Ao(u, t - 2) + "\"", r.tokens.push(u), u.length
                        }
                        r.opath.push(e)
                    }
                    var c = t,
                        h = function(e) {
                            return c >= e.length && (c -= e.length, r.tokens.push(e), !0)
                        },
                        l = function(e) {
                            var t = r.tokens.length - 1;
                            "," === r.tokens[t] ? r.tokens[t] = e : h(e)
                        };
                    if (c < 2) return 0;
                    if (G(e)) {
                        h("[");
                        for (var d = 0; d < e.length && c > 0; d++) {
                            var p = xo(e[d], c - 1, n + 1, r);
                            if (c -= p, 0 == p && !h("null")) break;
                            h(",")
                        }
                        l("]")
                    } else {
                        h("{");
                        var f = Y(e);
                        for (d = 0; d < f.length && c > 0; d++) {
                            var _ = f[d],
                                v = e[_];
                            if (!h("\"" + _ + "\":")) break;
                            if (0 == (p = xo(v, c - 1, n + 1, r))) {
                                r.tokens.pop();
                                break
                            }
                            c -= p, h(",")
                        }
                        l("}")
                    }
                    return t == 1 / 0 ? 1 : t - c
                }
                var Ro, Oo = ["log", "info", "warn", "error", "debug", "_fs_debug", "assert", "trace"],
                    Po = Oo.filter(function(e) {
                        return !/debug/.test(e)
                    }),
                    Mo = function(e, t, n) {
                        void 0 === n && (n = !0);
                        var r = ko(e, t);
                        return n ? Br(r) : r
                    },
                    Lo = function() {
                        function e(e, t, n) {
                            this._queue = t, this._enabled = !1, this._overflow = !1, this._total = 0, this._hooks = [], this.maxLogsPerPage = Je.DefaultOrgSettings.MaxConsoleLogPerPage, this._wnd = e.window, this._listeners = n.createChild()
                        }
                        return e.prototype.initializeMaxLogsPerPage = function(e) {
                            this.maxLogsPerPage = e || Je.DefaultOrgSettings.MaxConsoleLogPerPage
                        }, e.prototype._overflowMsg = function() {
                            return "\"[received more than " + this.maxLogsPerPage + " messages]\""
                        }, e.prototype.enable = function() {
                            var e = this;
                            if (this._listeners.add(this._wnd, "error", !0, function(t) {
                                    return e.addError(t)
                                }), this._listeners.add(this._wnd, "unhandledrejection", !0, function(t) {
                                    e.addError({
                                        error: t.reason,
                                        message: "Uncaught (in promise)",
                                        filename: "",
                                        lineno: 0,
                                        colno: 0
                                    })
                                }, !0), !this._enabled)
                                if (this._enabled = !0, this._queue.enqueue({
                                        Kind: Ee.REC_FEAT_SUPPORTED,
                                        Args: [Fe.Console, !0]
                                    }), this._wnd.console)
                                    for (var t = function(t) {
                                            var r = pe(n._wnd.console, t);
                                            if (!r) return "continue";
                                            "assert" === t ? r.before(function(n) {
                                                var r = n.args;
                                                r[0] || e.addLog(t, Array.prototype.slice.apply(r, [1]))
                                            }) : r.before(function(n) {
                                                var r = n.args;
                                                return e.addLog(t, r)
                                            }), n._hooks.push(r)
                                        }, n = this, r = 0, i = Po; r < i.length; r++) t(i[r]);
                                else this.addLog("log", ["NOTE: Log messages cannot be captured on IE9"])
                        }, e.prototype.isEnabled = function() {
                            return this._enabled
                        }, e.prototype.disable = function() {
                            var e;
                            if (this._listeners && this._listeners.clear(), this._enabled)
                                for (this._enabled = !1; e = this._hooks.pop();) e.disable()
                        }, e.prototype.logEvent = function(e, t, n) {
                            if (void 0 === n && (n = "console"), !this.checkOverflow()) return null;
                            for (var r = -1 === Oo.indexOf(e) ? [n, "log", Mo(e, 1e3)] : [n, e], i = 0; i < t.length; ++i) r.push(Mo(t[i], 1e3));
                            return {
                                Kind: Ee.LOG,
                                Args: r
                            }
                        }, e.prototype.addLog = function(e, t) {
                            var n = this.logEvent(e, t);
                            n && this._queue.enqueue(n)
                        }, e.prototype.addError = function(e) {
                            var t = e.lineno,
                                n = e.filename;
                            if (void 0 !== e.error || void 0 !== e.message || n || t) {
                                var r = e.error ? e.message + " " + ("object" == typeof e.error ? Mo(e.error, 1e3) : e.error) : e.message;
                                this.checkOverflow() && ("object" == typeof n && (n = Mo(n, 100, !1)), "object" == typeof t && (t = -1), this._queue.enqueue({
                                    Kind: Ee.ERROR,
                                    Args: (0, i.__spreadArray)([r, n, t], bo(e.error))
                                }))
                            }
                        }, e.prototype.checkOverflow = function() {
                            return !this._overflow && (this._total == this.maxLogsPerPage ? (this._queue.enqueue({
                                Kind: Ee.LOG,
                                Args: ["console", "warn", this._overflowMsg()]
                            }), this._overflow = !0, !1) : (this._total++, !0))
                        }, e
                    }(),
                    Uo = function() {
                        function e(e, t) {
                            this._q = e, this._valueIndices = t, this._evts = [], this._curveEndMs = 0
                        }
                        return e.prototype.add = function(e) {
                            this._evts.length > 0 && this._evts[this._evts.length - 1].When === e.When && this._evts.pop(), 0 === this._evts.length ? (this._q.push(e), this._curveEndMs = e.When) : e.When > this._curveEndMs && (this._curveEndMs = e.When), this._evts.push(e)
                        }, e.prototype.finish = function(e, t) {
                            void 0 === t && (t = []);
                            var n = this._evts.length;
                            if (n <= 1) return !1;
                            for (var r = [], o = this._evts[0].When, s = this._evts[n - 1].When, a = s - o != 0 ? s - o : 1, u = 0; u < this._valueIndices.length; ++u) {
                                var c = this._valueIndices[u],
                                    h = this._evts[0].Args[c],
                                    l = (this._evts[1].When - o) / a,
                                    d = (this._evts[1].Args[c] - h) / l,
                                    p = this._evts[n - 2].Args[c],
                                    f = (s - this._evts[n - 2].When) / a,
                                    _ = this._evts[n - 1].Args[c],
                                    v = (_ - p) / f;
                                r.push(h, _, d, v)
                            }
                            return this._evts[0].Kind = e, this._evts[0].Args = (0, i.__spreadArray)((0, i.__spreadArray)([this._curveEndMs], t), r), !0
                        }, e.prototype.evts = function() {
                            return this._evts
                        }, e
                    }(),
                    No = function() {
                        function e() {
                            this._size = 0, this._root = {}, this._root.next = this._root.prev = this._root
                        }
                        return e.prototype.first = function() {
                            return this._root.next.value
                        }, e.prototype.last = function() {
                            return this._root.prev.value
                        }, e.prototype.size = function() {
                            return this._size
                        }, e.prototype.push = function(e) {
                            this._size++, Fo(this._root.prev, {
                                value: e
                            })
                        }, e.prototype.unshift = function(e) {
                            this._size++, Fo(this._root, {
                                value: e
                            })
                        }, e.prototype.pop = function() {
                            return this._size > 0 && this._size--, Ho(this._root.prev)
                        }, e.prototype.shift = function() {
                            return this._size > 0 && this._size--, Ho(this._root.next)
                        }, e
                    }();

                function Fo(e, t) {
                    var n = e.next;
                    t.next = n, t.prev = e, e.next = n.prev = t
                }

                function Ho(e) {
                    var t = e.prev,
                        n = e.next;
                    return t.next = n, n.prev = t, e.value
                }! function(e) {
                    e[e.rageWindowMillis = 2e3] = "rageWindowMillis", e[e.defaultRageThreshold = 5] = "defaultRageThreshold", e[e.rageThresholdIfPageChanges = 8] = "rageThresholdIfPageChanges", e[e.thresholdChangeQuiescenceMillis = 2e3] = "thresholdChangeQuiescenceMillis"
                }(Ro || (Ro = {}));
                var qo = function() {
                        function e(e, t) {
                            var n, r;
                            void 0 === t && (t = v), this._ctx = e, this._msSinceDocumentStart = t, this._clickTimes = new No, this._rageThreshold = Ro.defaultRageThreshold, this._thresholdRaisedAt = -1, this._isIgnoredCache = new WeakMap;
                            var i = e.recording.pageResponse();
                            if (!i) throw new Error("Attempt to construct EasyBake before rec/page response is set.");
                            for (var o = [".fs-ignore-rage-clicks", ".fs-ignore-rage-clicks *"], s = 0, a = null !== (r = null === (n = i.BehaviorSignalSettings) || void 0 === n ? void 0 : n.ElementBlocks) && void 0 !== r ? r : []; s < a.length; s++) {
                                var u = a[s];
                                u.Signals.indexOf(ze.SignalRageClick) > -1 && (o.push(u.Selector), o.push(u.Selector + " *"))
                            }
                            var c = o.join(", ");
                            ci(c) ? this._ignoreRageClickSelectors = [c] : this._ignoreRageClickSelectors = o
                        }
                        return e.prototype._isIgnored = function(e) {
                            var t = this._isIgnoredCache.get(e);
                            if (void 0 !== t) return t;
                            for (var n = 0, r = this._ignoreRageClickSelectors; n < r.length; n++) {
                                var i = r[n];
                                if (s.elMatches(e, i)) return this._isIgnoredCache.set(e, !0), !0
                            }
                            return this._isIgnoredCache.set(e, !1), !1
                        }, e.prototype.onEvent = function(e) {
                            var t;
                            if (function(e) {
                                    switch (e) {
                                        case Ee.VALUECHANGE:
                                        case Ee.SCROLL_LAYOUT:
                                        case Ee.SCROLL_LAYOUT_CURVE:
                                        case Ee.SCROLL_VISUAL_OFFSET:
                                        case Ee.SCROLL_VISUAL_OFFSET_CURVE:
                                        case Ee.MUT_INSERT:
                                        case Ee.MUT_REMOVE:
                                        case Ee.MUT_ATTR:
                                        case Ee.MUT_SHADOW:
                                        case Ee.MUT_TEXT:
                                        case Ee.NAVIGATE:
                                        case Ee.LOAD:
                                        case Ee.FOCUS:
                                        case Ee.BLUR:
                                        case Ee.SELECT:
                                        case Ee.FORM_SUBMIT:
                                        case Ee.PLAY:
                                        case Ee.PAUSE:
                                        case Ee.MODAL_OPEN:
                                        case Ee.MODAL_CLOSE:
                                            return !0;
                                    }
                                    return !1
                                }(e.Kind) && this._rageThreshold !== Ro.rageThresholdIfPageChanges) return this._rageThreshold = Ro.rageThresholdIfPageChanges, void(this._thresholdRaisedAt = this._msSinceDocumentStart());
                            if (e.Kind === Ee.CLICK) {
                                var n = this._msSinceDocumentStart(),
                                    r = null === (t = bn(e.Args[0])) || void 0 === t ? void 0 : t.node;
                                if (r) {
                                    var i = 1 === r.nodeType ? r : r.parentElement;
                                    if (!this._isIgnored(i)) {
                                        var o = un(r);
                                        if (!o || "textarea" !== o && "select" !== o && ("input" !== o || "submit" === r.type)) {
                                            this._clickTimes.push(n);
                                            for (var s = n - Ro.rageWindowMillis;;) {
                                                var a = this._clickTimes.first();
                                                if (!(void 0 !== a && a < s)) break;
                                                this._clickTimes.shift()
                                            }
                                            if (this._thresholdRaisedAt < n - Ro.thresholdChangeQuiescenceMillis && (this._rageThreshold = Ro.defaultRageThreshold), this._clickTimes.size() >= this._rageThreshold) {
                                                var u = this._ctx.recording.getCurrentSessionURL,
                                                    c = {
                                                        eventStartTimeStamp: this._clickTimes.first(),
                                                        eventEndTimeStamp: n,
                                                        eventReplayUrlAtStart: u(),
                                                        eventReplayUrlAtCurrentTime: u(!0)
                                                    };
                                                this.dispatchRageClickEvent(r, c), this._rageThreshold = Ro.defaultRageThreshold, this._clickTimes = new No
                                            }
                                        }
                                    }
                                }
                            }
                        }, e.prototype.dispatchRageClickEvent = function(e, t) {
                            var n, r = "fullstory/rageclick";
                            try {
                                n = new CustomEvent(r, {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                (n = document.createEvent("customevent")).initCustomEvent(r, !0, !0, t)
                            }
                            s.setWindowTimeout(window, Ae.wrap(function() {
                                e.dispatchEvent(n)
                            }), 0)
                        }, e
                    }(),
                    Do = function() {
                        function e(e) {
                            this.ctx = e, this.lastActivityTs = this.ctx.time.wallTime(), this.hibernating = !1
                        }
                        return e.prototype.getMsSinceLastUserAcivity = function() {
                            return s.mathFloor(this.ctx.time.wallTime() - this.lastActivityTs)
                        }, e.prototype.resetUserActivity = function() {
                            this.lastActivityTs = this.ctx.time.wallTime()
                        }, e.prototype.isHibernating = function() {
                            return this.hibernating
                        }, e.prototype.setHibernating = function() {
                            this.hibernating = !0
                        }, e
                    }(),
                    Wo = function() {
                        function e(e, t, n, r) {
                            void 0 === r && (r = Pn), this.ctx = e, this.activityModel = t, this.queue = n, this.pendingHibernation = !1, this.hasSplit = !1, this.heartbeatIntervalTs = Je.HeartbeatInitial, this.hibernationIntervalTs = Je.PageInactivityTimeout, this.heartbeatTimeout = new r(this.onHeartbeat.bind(this)), this.hibernationTimeout = new r(this.onHibernate.bind(this), this.hibernationIntervalTs)
                        }
                        return e.prototype.getUserActivityModel = function() {
                            return this.activityModel
                        }, e.prototype.manualHibernateCheck = function() {
                            this.activityModel.isHibernating() || this.activityModel.getMsSinceLastUserAcivity() >= Je.PageInactivityTimeout + 5e3 && this.onHibernate()
                        }, e.prototype.scanEvents = function(e) {
                            if (!this.pendingHibernation) {
                                this.manualHibernateCheck();
                                for (var t = !1, n = 0, r = e; n < r.length; n++)
                                    if (et(r[n].Kind)) {
                                        t = !0;
                                        break
                                    }
                                t && (this.activityModel.isHibernating() ? this.splitPage() : this.start())
                            }
                        }, e.prototype.shutdown = function() {
                            this.heartbeatTimeout.stop(), this.hibernationTimeout.stop()
                        }, e.prototype.start = function() {
                            this.activityModel.resetUserActivity(), this.heartbeatIntervalTs = Je.HeartbeatInitial, this.hibernationIntervalTs = Je.PageInactivityTimeout, this.heartbeatTimeout.start(this.heartbeatIntervalTs), this.hibernationTimeout.start(this.hibernationIntervalTs)
                        }, e.prototype.onHeartbeat = function() {
                            var e = this.activityModel.getMsSinceLastUserAcivity();
                            e <= Je.PageInactivityTimeout && this.queue.enqueue({
                                Kind: Ee.HEARTBEAT,
                                Args: [e]
                            }), this.heartbeatIntervalTs *= 2, this.heartbeatIntervalTs > Je.HeartbeatMax && (this.heartbeatIntervalTs = Je.HeartbeatMax), this.heartbeatTimeout.start(this.heartbeatIntervalTs)
                        }, e.prototype.onHibernate = function() {
                            if (!this.activityModel.isHibernating()) {
                                var e = !1;
                                this.activityModel.getMsSinceLastUserAcivity() <= 2 * Je.PageInactivityTimeout ? this.queue.enqueue({
                                    Kind: Ee.UNLOAD,
                                    Args: [Me.Hibernation]
                                }) : e = !0;
                                try {
                                    this.pendingHibernation = !0, this.activityModel.setHibernating(), this.shutdown(), this.queue.onHibernate(e)
                                } finally {
                                    this.pendingHibernation = !1
                                }
                            }
                        }, e.prototype.splitPage = function() {
                            this.hasSplit || (this.hasSplit = !0, this.ctx.recording.splitPage(Me.Hibernation))
                        }, e
                    }(),
                    Bo = function() {
                        function e(e, t, n, r, i, o) {
                            void 0 === r && (r = function() {
                                return []
                            }), void 0 === i && (i = On), void 0 === o && (o = Pn), this._ctx = e, this._transport = t, this._gatherExternalEvents = r, this._tickerFactory = i, this._frameId = 0, this._parentIds = [], this._pipelineStarted = !1, this._recordingDisabled = !1, this._activeSimultaneousEventsTransactions = 0, this._lastWhen = -1, this._gotUnload = !1, this._eventQueue = [], this._sampleCurvesTicker = new this._tickerFactory(Je.CurveSamplingInterval), this._processMutationsTicker = new this._tickerFactory(Je.MutationProcessingInterval), n && (this._activityMonitor = new Wo(this._ctx, n, this, o))
                        }
                        return e.prototype.startPipeline = function(e) {
                            var t;
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var n, r = this;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this._recordingDisabled || this._pipelineStarted ? [2] : (this._pipelineStarted = !0, e.frameId && (this._frameId = e.frameId), e.parentIds && (this._parentIds = e.parentIds), n = !0, [4, Bt()]);
                                        case 1:
                                            return i.sent(), this.processEvents(), [4, Bt()];
                                        case 2:
                                            return i.sent(), this._processMutationsTicker.start(function() {
                                                r.processEvents()
                                            }), this._sampleCurvesTicker.start(function() {
                                                r.processEvents(n)
                                            }), null === (t = this._activityMonitor) || void 0 === t || t.start(), this._transport.startPipeline(e), [2];
                                    }
                                })
                            })
                        }, e.prototype.enableEasyBake = function() {
                            this._easyBake = new qo(this._ctx)
                        }, e.prototype.enqueueSimultaneousEventsIn = function(e) {
                            if (0 === this._activeSimultaneousEventsTransactions) {
                                var t = this._ctx.time.now();
                                this._lastWhen = t > this._lastWhen ? t : this._lastWhen
                            }
                            try {
                                return this._activeSimultaneousEventsTransactions++, e(this._lastWhen)
                            } finally {
                                this._activeSimultaneousEventsTransactions--, this._activeSimultaneousEventsTransactions < 0 && (this._activeSimultaneousEventsTransactions = 0)
                            }
                        }, e.prototype.enqueue = function(e) {
                            var t = this._activeSimultaneousEventsTransactions > 0 ? this._lastWhen : this._ctx.time.now();
                            this.enqueueAt(t, e), Rn.checkForBrokenSchedulers()
                        }, e.prototype.enqueueAt = function(e, t) {
                            var n;
                            if (!this._recordingDisabled) {
                                var r = e;
                                r < this._lastWhen && (r = this._lastWhen), this._lastWhen = r;
                                var i = t;
                                i.When = r, this._eventQueue.push(i);
                                try {
                                    null === (n = this._easyBake) || void 0 === n || n.onEvent(i)
                                } catch (e) {
                                    Ae.sendToBugsnag(e, "error")
                                }
                            }
                        }, e.prototype.enqueueFirst = function(e) {
                            if (this._eventQueue.length > 0) {
                                var t = e;
                                t.When = this._eventQueue[0].When, this._eventQueue.unshift(t)
                            } else this.enqueue(e)
                        }, e.prototype.addUnload = function(e) {
                            this._gotUnload || (this._gotUnload = !0, this.enqueue({
                                Kind: Ee.UNLOAD,
                                Args: [e]
                            }), this.singSwanSong())
                        }, e.prototype.shutdown = function(e) {
                            this.addUnload(e), this._flush(), this._recordingDisabled = !0, this.stopPipeline()
                        }, e.prototype._flush = function() {
                            this.processEvents(), this._transport.flush()
                        }, e.prototype.singSwanSong = function() {
                            this._recordingDisabled || (this.processEvents(), this._transport.singSwanSong())
                        }, e.prototype.rebaseIframe = function(e, t) {
                            for (var n = Math.max(0, t), r = this._ctx.time.startTime(), i = function(t) {
                                    var i = r + t - e;
                                    return i >= n ? i : n
                                }, o = 0, s = this._eventQueue; o < s.length; o++) {
                                var a = s[o];
                                a.When = i(a.When)
                            } - 1 === this._lastWhen ? this._lastWhen = n : this._lastWhen = i(this._lastWhen)
                        }, e.prototype.processEvents = function(e) {
                            if (this._pipelineStarted) {
                                var t = this._eventQueue;
                                this._eventQueue = [];
                                var n = function(e) {
                                    if (0 == e.length) return e;
                                    for (var t, n = [], r = new Uo(n, [0, 1]), i = {}, o = {}, s = {}, a = 0, u = e; a < u.length; a++) {
                                        var c = u[a];
                                        switch (c.Kind) {
                                            case Ee.MOUSEMOVE:
                                                r.add(c);
                                                break;
                                            case Ee.TOUCHMOVE:
                                                (d = c.Args[0]) in i || (i[d] = new Uo(n, [1, 2])), i[d].add(c);
                                                break;
                                            case Ee.SCROLL_LAYOUT:
                                                (d = c.Args[0]) in o || (o[d] = new Uo(n, [1, 2])), o[d].add(c);
                                                break;
                                            case Ee.SCROLL_VISUAL_OFFSET:
                                                (d = c.Args[0]) in s || (s[d] = new Uo(n, [1, 2])), s[d].add(c);
                                                break;
                                            case Ee.RESIZE_VISUAL:
                                                t || (t = new Uo(n, [0, 1])), t.add(c);
                                                break;
                                            default:
                                                n.push(c);
                                        }
                                    }
                                    if (r.finish(Ee.MOUSEMOVE_CURVE)) {
                                        var h = r.evts();
                                        if (h.length > 0) {
                                            var l = h[h.length - 1].Args[2];
                                            l && (h[0].Args[9] = l)
                                        }
                                    }
                                    for (var d in o) o[p = parseInt(d, 10)].finish(Ee.SCROLL_LAYOUT_CURVE, [p]);
                                    for (var d in s) s[p = parseInt(d, 10)].finish(Ee.SCROLL_VISUAL_OFFSET_CURVE, [p]);
                                    for (var d in i) {
                                        var p;
                                        i[p = parseInt(d, 10)].finish(Ee.TOUCHMOVE_CURVE, [p])
                                    }
                                    return t && t.finish(Ee.RESIZE_VISUAL_CURVE), n
                                }(t);
                                e || (n = n.concat(this._gatherExternalEvents())), this.ensureFrameIds(n), this.sendEvents(this._ctx.recording.pageSignature(), n)
                            }
                        }, e.prototype.sendEvents = function(e, t) {
                            var n;
                            0 != t.length && (null === (n = this._activityMonitor) || void 0 === n || n.scanEvents(t), this._transport.enqueueEvents(e, t))
                        }, e.prototype.onHibernate = function(e) {
                            e || this.processEvents(), this._transport.singSwanSong(), this._transport.stopPipeline()
                        }, e.prototype.ensureFrameIds = function(e) {
                            if (this._frameId)
                                for (var t = this._parentIds, n = t && t.length > 0, r = 0; r < e.length; ++r) {
                                    var i = e[r];
                                    i.FId || (i.FId = this._frameId), n && !i.PIds && (i.PIds = t)
                                }
                        }, e.prototype.stopPipeline = function() {
                            var e;
                            this._pipelineStarted && (this._sampleCurvesTicker.stop(), this._processMutationsTicker.stop(), this._eventQueue = [], null === (e = this._activityMonitor) || void 0 === e || e.shutdown(), this._transport.stopPipeline())
                        }, e
                    }(),
                    Vo = function() {
                        function e(e) {
                            void 0 === e && (e = 4), this.hashCount = e, this.idx = 0, this.hashMask = e - 1, this.reset()
                        }
                        return e.prototype.reset = function() {
                            this.idx = 0, this.hash = [];
                            for (var e = 0; e < this.hashCount; ++e) this.hash.push(2166136261)
                        }, e.prototype.write = function(e) {
                            for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e[r], this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
                            this.idx = n
                        }, e.prototype.writeAscii = function(e) {
                            for (var t = this.hashMask, n = this.idx, r = 0; r < e.length; r++) this.hash[n] = this.hash[n] ^ e.charCodeAt(r), this.hash[n] += (this.hash[n] << 1) + (this.hash[n] << 4) + (this.hash[n] << 7) + (this.hash[n] << 8) + (this.hash[n] << 24), n = n + 1 & t;
                            this.idx = n
                        }, e.prototype.sum = function() {
                            var e;
                            return e = this.sumAsHex().replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map(Number), zo(String.fromCharCode.apply(window, e))
                        }, e.prototype.sumAsHex = function() {
                            for (var e = "", t = 0; t < this.hashCount; ++t) e += ("00000000" + (this.hash[t] >>> 0).toString(16)).slice(-8);
                            return e
                        }, e
                    }();

                function jo(e) {
                    var t = new Vo(1);
                    return t.writeAscii(e), t.sumAsHex()
                }

                function Ko(e) {
                    var t = new Uint8Array(e);
                    return zo(String.fromCharCode.apply(null, t))
                }

                function zo(e) {
                    var t;
                    return (null !== (t = window.btoa) && void 0 !== t ? t : Qo)(e).replace(/\+/g, "-").replace(/\//g, "_")
                }

                function Qo(e) {
                    for (var t = String(e), n = [], r = 0, i = 0, o = 0, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; t.charAt(0 | o) || (s = "=", o % 1); n.push(s.charAt(63 & r >> 8 - o % 1 * 8))) {
                        if ((i = t.charCodeAt(o += 3 / 4)) > 255) throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        r = r << 8 | i
                    }
                    return n.join("")
                }

                function Go(e, t, n, r) {
                    return void 0 === r && (r = new Vo), (0, i.__awaiter)(this, void 0, Ft, function() {
                        var o, s, a, u;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    o = e.now(), s = n.byteLength, a = 0, i.label = 1;
                                case 1:
                                    return a < s ? e.now() - o > 25 ? [4, t(100)] : [3, 3] : [3, 5];
                                case 2:
                                    i.sent(), o = e.now(), i.label = 3;
                                case 3:
                                    u = new Uint8Array(n, a, Math.min(s - a, 1e4)), r.write(u), i.label = 4;
                                case 4:
                                    return a += 1e4, [3, 1];
                                case 5:
                                    return [2, {
                                        hash: r.sum(),
                                        hasher: r
                                    }];
                            }
                        })
                    })
                }
                var Yo = 6e6,
                    Xo = function() {
                        function e(e, t, n, r, i) {
                            void 0 === r && (r = window.FormData), void 0 === i && (i = Pn), this.ctx = e, this.queue = t, this.protocol = n, this.FormDataCtr = r, this.Timeout = i, this.started = {}, this.byUrl = {}, this.batchReady = !1, this.existsBatch = [], this._sentToBugsnag = !1
                        }
                        return e.prototype.init = function() {
                            this.FormDataCtr && this.main()["catch"](function(e) {
                                Ae.sendToBugsnag(e, "error")
                            })
                        }, e.prototype.main = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var e, t, n, r, o, s, a, u, c, h, l, d, p, f, _, v, g, m, y, S, w, E, b, T, I;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            e = this.ctx.options.orgId, i.label = 1;
                                        case 1:
                                            return [4, this.getBatch()];
                                        case 2:
                                            for (t = i.sent(), n = {
                                                    fsnv: {},
                                                    sha1: {}
                                                }, r = {}, o = 0, s = t; o < s.length; o++) m = s[o], n[m.hashAlgorithm][m.hash] = !0, (d = r[m.hash]) ? d.push(m) : r[m.hash] = [m];
                                            a = {
                                                fsnv: Object.keys(n.fsnv),
                                                sha1: Object.keys(n.sha1)
                                            }, u = void 0, i.label = 3;
                                        case 3:
                                            return i.trys.push([3, 5, , 6]), [4, this.protocol.queryResources({
                                                OrgId: e,
                                                HashesByAlgorithm: a
                                            })];
                                        case 4:
                                            return u = i.sent(), [3, 6];
                                        case 5:
                                            return i.sent(), [3, 1];
                                        case 6:
                                            c = 0, h = u, i.label = 7;
                                        case 7:
                                            if (!(c < h.length)) return [3, 15];
                                            if (l = h[c], !(null == (d = r[l.QueryHash]) ? void 0 : d.length)) return this.sendOnceToBugsnag("No resource found for hash"), [3, 14];
                                            if (!l.Found || !l.CanonicalHash) return [3, 8];
                                            for (p = 0, f = d; p < f.length; p++)(m = f[p]).blob = m.stringData = null, "fsnv" === (_ = l.CanonicalHash.Algorithm) ? this.queue.enqueue({
                                                Kind: Ee.SYS_RESOURCEHASH,
                                                Args: ["url", m.url, l.CanonicalHash.Hash]
                                            }) : this.sendOnceToBugsnag("Unrecognized canonical hash type", {
                                                hashAlgorithm: _
                                            });
                                            return [3, 14];
                                        case 8:
                                            v = 0, g = d, i.label = 9;
                                        case 9:
                                            if (!(v < g.length)) return [3, 14];
                                            if (m = g[v], y = m.url, S = m.contentType, !(w = m.blob || m.stringData)) return this.sendOnceToBugsnag("Missing resource contents"), [3, 13];
                                            if (E = m.blob || new Blob([w], {
                                                    type: S
                                                }), (b = new this.FormDataCtr).append("orgId", e), b.append("baseUrl", y), "fsnv" === l.QueryAlgorithm) b.append("fsnvHash", l.QueryHash);
                                            else {
                                                if ("sha1" !== l.QueryAlgorithm) return this.sendOnceToBugsnag("Unrecognized hash type from resource query", {
                                                    hashAlgorithm: l.QueryAlgorithm
                                                }), [3, 13];
                                                b.append("sha1Hash", l.QueryHash)
                                            }
                                            b.append("contents", E, "blob"), m.blob = m.stringData = null, i.label = 10;
                                        case 10:
                                            return i.trys.push([10, 12, , 13]), [4, this.protocol.uploadResource(b)];
                                        case 11:
                                            return T = i.sent(), "fsnv" != (I = JSON.parse(T)).Algorithm && this.sendOnceToBugsnag("Unexpected hash type from resource upload", {
                                                hashAlgorithm: I.Algorithm
                                            }), this.queue.enqueue({
                                                Kind: Ee.SYS_RESOURCEHASH,
                                                Args: ["url", y, I.Hash]
                                            }), [3, 13];
                                        case 12:
                                            return i.sent(), [3, 13];
                                        case 13:
                                            return v++, [3, 9];
                                        case 14:
                                            return c++, [3, 7];
                                        case 15:
                                            return [3, 1];
                                        case 16:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype.getBatch = function() {
                            var e = this,
                                t = Ht(),
                                n = t.resolve,
                                r = t.promise,
                                i = function() {
                                    e.popBatch = null, e.batchReady = !1;
                                    var t = e.existsBatch;
                                    e.existsBatch = [], n(t)
                                };
                            return this.batchReady ? i() : this.popBatch = i, r
                        }, e.prototype.uploadIfNeeded = function(e, t) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var n, r, o, s = this;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.FormDataCtr ? (n = t.href, this.started[n] ? [2] : function(e, t) {
                                                switch (t.protocol) {
                                                    case "blob:":
                                                        return !0;
                                                    case "http:":
                                                    case "https:":
                                                        switch (t.hostname) {
                                                            case "localhost":
                                                            case "127.0.0.1":
                                                            case "[::1]":
                                                                return e.location.protocol === t.protocol && e.location.host === t.host;
                                                            case "::1":
                                                                var n = t.port ? "[::1]:" + t.port : "[::1]";
                                                                return e.location.protocol === t.protocol && e.location.host === n;
                                                            default:
                                                                return !1;
                                                        }
                                                    default:
                                                        return !1;
                                                }
                                            }(e, t) ? (this.started[n] = !0, [4, this.processResource(n)]) : [2]) : [2];
                                        case 1:
                                            return (r = i.sent()) ? (o = 0 == this.existsBatch.length, this.existsBatch.push(r), o && new this.Timeout(function() {
                                                s.batchReady = !0, s.popBatch && s.popBatch()
                                            }, 50).start(), [2]) : [2];
                                    }
                                })
                            })
                        }, e.prototype.processResource = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var t, n, r, o, s;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.byUrl[e] ? [2, this.byUrl[e]] : [4, Zo(e)];
                                        case 1:
                                            return (t = i.sent()) ? [4, Jo(this.ctx, t.buffer)] : [2, null];
                                        case 2:
                                            return n = i.sent(), r = n.hash, o = n.algorithm, s = {
                                                hash: r,
                                                hashAlgorithm: o,
                                                url: e,
                                                blob: t.blob,
                                                contentType: t.contentType
                                            }, this.byUrl[s.url] = s, [2, s];
                                    }
                                })
                            })
                        }, e.prototype.sendOnceToBugsnag = function(e, t) {
                            this._sentToBugsnag || (this._sentToBugsnag = !0, Ae.sendToBugsnag(e, "error", t))
                        }, e
                    }();

                function Zo(e) {
                    var t = Ht(),
                        n = t.resolve,
                        r = t.promise,
                        i = new XMLHttpRequest;
                    return "string" != typeof i.responseType ? (n(null), r) : (i.open("GET", e, !0), i.responseType = "blob", i.onerror = function() {
                        n(null)
                    }, i.onload = function() {
                        if (200 != i.status) return Pr(e, {
                            source: "log",
                            type: "debug"
                        }), void n(null);
                        var t = i.response;
                        if ((t.size || t.length) > Yo) {
                            var r = Pr(e, {
                                source: "log",
                                type: "bugsnag"
                            });
                            return Ae.sendToBugsnag("Size of blob resource exceeds limit", "warning", {
                                url: r,
                                MaxResourceSizeBytes: Yo
                            }), void n(null)
                        }(function(e) {
                            var t = Ht(),
                                n = t.resolve,
                                r = t.promise,
                                i = new FileReader;
                            return i.readAsArrayBuffer(e), i.onload = function() {
                                n(i.result)
                            }, i.onerror = function(e) {
                                Ae.sendToBugsnag(e, "error"), n(null)
                            }, r
                        })(t).then(function(e) {
                            n(e ? {
                                buffer: e,
                                blob: t,
                                contentType: t.type
                            } : null)
                        })
                    }, i.send(), r)
                }

                function Jo(e, t) {
                    var n, r;
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        var o;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o = e.window, (null === (r = null === (n = o.crypto) || void 0 === n ? void 0 : n.subtle) || void 0 === r ? void 0 : r.digest) ? [4, o.crypto.subtle.digest({
                                        name: "sha-1"
                                    }, t)] : [3, 2];
                                case 1:
                                    return [2, {
                                        hash: Ko(i.sent()),
                                        algorithm: "sha1"
                                    }];
                                case 2:
                                    return [4, Go(e.time, qt, t)];
                                case 3:
                                    return [2, {
                                        hash: i.sent().hash,
                                        algorithm: "fsnv"
                                    }];
                            }
                        })
                    })
                }
                var $o = function(e, t, n) {
                    this.name = "ProtocolError", this.message = t, this.status = e, this.data = n
                };

                function es(e) {
                    return e >= 400 && 502 !== e || 202 == e || 206 == e
                }
                var ts = function() {
                        function e(e) {
                            this._byteCount = 0, this._scheme = e.options.scheme, this._cdnHost = e.options.cdnHost, this._ctx = e
                        }
                        return e.prototype.page = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, is(this._scheme, cs(this._ctx), "/rec/page", !0, ae(e))];
                                        case 1:
                                            return [2, he(t.sent().text)];
                                    }
                                })
                            })
                        }, e.prototype.settings = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(t) {
                                    return [2, us(this._scheme, this._cdnHost, e)]
                                })
                            })
                        }, e.prototype.bundle = function(e) {
                            var t;
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var n, r, o;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, Bt()];
                                        case 1:
                                            return i.sent(), n = ae(e.bundle), this._byteCount += n.length, this._byteCount, n.length > 2e6 ? [4, Bt()] : [3, 3];
                                        case 2:
                                            i.sent(), i.label = 3;
                                        case 3:
                                            return r = rs(e.bundle.Seq, e), [4, is(this._scheme, null !== (t = e.recHost) && void 0 !== t ? t : cs(this._ctx), r, !0, n)];
                                        case 4:
                                            return o = i.sent().text, [2, [this._byteCount, he(o)]];
                                    }
                                })
                            })
                        }, e.prototype.bundleBeacon = function(e) {
                            var t;
                            return as(this._scheme, null !== (t = e.recHost) && void 0 !== t ? t : cs(this._ctx), e)
                        }, e.prototype.exponentialBackoffMs = function(e, t) {
                            var n = s.mathMin(Je.BackoffMax, 5e3 * s.mathPow(2, e));
                            return t ? n + .25 * s.mathRandom() * n : n
                        }, e
                    }(),
                    ns = function() {
                        function e(e) {
                            this._scheme = e.options.scheme, this._ctx = e
                        }
                        return e.prototype.uploadResource = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, is(this._scheme, cs(this._ctx), "/rec/uploadResource", !0, e)];
                                        case 1:
                                            return [2, t.sent().text];
                                    }
                                })
                            })
                        }, e.prototype.queryResources = function(e) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, is(this._scheme, cs(this._ctx), "/rec/queryResources", !0, ae(e))];
                                        case 1:
                                            return [2, he(t.sent().text)];
                                    }
                                })
                            })
                        }, e
                    }();

                function rs(e, t) {
                    var n = "/rec/bundle" + ("v2" === t.version ? "/v2" : "") + "?OrgId=" + t.orgId + "&UserId=" + t.userId + "&SessionId=" + t.sessionId + "&PageId=" + t.pageId + "&Seq=" + e;
                    return null != t.serverPageStart && (n += "&PageStart=" + t.serverPageStart), null != t.serverBundleTime && (n += "&PrevBundleTime=" + t.serverBundleTime), null != t.lastUserActivity && (n += "&LastActivity=" + t.lastUserActivity), t.isNewSession && (n += "&IsNewSession=true"), null != t.deltaT && (n += "&DeltaT=" + t.deltaT), n
                }

                function is(e, t, n, r, o) {
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        return (0, i.__generator)(this, function(i) {
                            return [2, ss("POST", e, t, n, r, o)]
                        })
                    })
                }

                function os(e, t, n, r) {
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        return (0, i.__generator)(this, function(i) {
                            return [2, ss("GET", e, t, n, r)]
                        })
                    })
                }

                function ss(e, t, n, r, o, s) {
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        return (0, i.__generator)(this, function(i) {
                            return [2, new Ft(function(i, a) {
                                var u = "//" + n + r,
                                    c = !1,
                                    h = new XMLHttpRequest;
                                if ("withCredentials" in h) h.onreadystatechange = function() {
                                    if (4 == h.readyState) {
                                        if (c) return;
                                        c = !0;
                                        try {
                                            var e = {
                                                text: h.responseText
                                            };
                                            if (200 == h.status) return void i(e);
                                            var t = void 0;
                                            try {
                                                t = he(e.text)
                                            } catch (e) {}
                                            a(new $o(h.status, e.text, t))
                                        } catch (e) {
                                            Ae.sendToBugsnag(e, "error"), a(e)
                                        }
                                    }
                                }, h.open(e, t + u, !0), h.withCredentials = o, s && "function" != typeof s.append && h.setRequestHeader("Content-Type", "text/plain"), h.send(s);
                                else {
                                    var l = new XDomainRequest;
                                    l.onload = function() {
                                        i({
                                            text: l.responseText
                                        })
                                    }, l.onerror = function() {
                                        var e = "Not Found" == l.responseText ? 404 : 500;
                                        a(new $o(e, l.responseText))
                                    }, l.onprogress = function() {}, l.open(e, u), l.send(s)
                                }
                            })]
                        })
                    })
                }

                function as(e, t, n) {
                    if ("function" == typeof navigator.sendBeacon) {
                        var r = e + "//" + t + rs(n.bundle.Seq, n) + "&SkipResponseBody=true",
                            i = ae(n.bundle);
                        try {
                            return navigator.sendBeacon.bind(navigator)(r, i)
                        } catch (e) {}
                    }
                    return !1
                }

                function us(e, t, n) {
                    var r;
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        var o;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o = null !== (r = n.version) && void 0 !== r ? r : "v1", [4, os(e, t, "/s/settings/" + n.orgId + "/" + o + "/web", !1)];
                                case 1:
                                    return [2, he(i.sent().text)];
                            }
                        })
                    })
                }

                function cs(e) {
                    var t, n = null === (t = e.recording.pageResponse()) || void 0 === t ? void 0 : t.GCLBSubdomain,
                        r = e.options.recHost;
                    return n && M(r) ? r.replace(/^rs\./, n + ".") : r
                }
                var hs, ls = function() {
                        function e(e, t, n) {
                            void 0 === n && (n = new ds), this._ctx = e, this._q = t, this._matcher = n
                        }
                        return e.prototype.initialize = function(e) {
                            var t;
                            if (e) {
                                this._setUrlKeeps(e);
                                var n = null === (t = this._ctx.window.location) || void 0 === t ? void 0 : t.href;
                                this.onNavigate(n)
                            }
                        }, e.prototype.onNavigate = function(e) {
                            return !!this._matcher.matches(e) && (this._q.enqueue({
                                Kind: Ee.KEEP_URL,
                                Args: [this._scrubUrl(e)]
                            }), !0)
                        }, e.prototype.onClick = function(e) {
                            var t;
                            return !!(null === (t = null == e ? void 0 : e.watchKind) || void 0 === t ? void 0 : t.has(cn.Keep)) && (this._q.enqueue({
                                Kind: Ee.KEEP_ELEMENT,
                                Args: [e.id]
                            }), !0)
                        }, e.prototype.urlMatches = function(e) {
                            return this._matcher.matches(e)
                        }, e.prototype._setUrlKeeps = function(e) {
                            this._matcher.setRules(e)
                        }, e.prototype._scrubUrl = function(e) {
                            return Pr(e, {
                                source: "page",
                                type: "base"
                            })
                        }, e
                    }(),
                    ds = function() {
                        function e() {
                            this._regexes = null
                        }
                        return e.prototype.setRules = function(e) {
                            var t = e.map(function(e) {
                                return e.Regex
                            }).filter(this._isValidRegex);
                            t.length > 0 && (this._regexes = this._joinRegexes(t))
                        }, e.prototype.matches = function(e) {
                            return !!this._regexes && this._regexes.test(e)
                        }, e.prototype._isValidRegex = function(e) {
                            try {
                                return new RegExp(e), !0
                            } catch (t) {
                                return Ae.sendToBugsnag("Browser rejected UrlKeep.Regex", "error", {
                                    expr: e,
                                    error: t.toString()
                                }), !1
                            }
                        }, e.prototype._joinRegexes = function(e) {
                            try {
                                return new RegExp("(" + e.join(")|(") + ")", "i")
                            } catch (t) {
                                return Ae.sendToBugsnag("Browser rejected joining UrlKeep.Regexs", "error", {
                                    exprs: e,
                                    error: t.toString()
                                }), null
                            }
                        }, e
                    }();

                function ps(e, t) {
                    e && e.postMessage && e.postMessage(function(e) {
                        var t;
                        return ae(((t = {}).__fs = e, t))
                    }(t), "*")
                }

                function fs(e) {
                    try {
                        var t = he(e);
                        if ("__fs" in t) return t.__fs
                    } catch (e) {}
                    return [hs.Unknown]
                }

                function _s(e, t, n, r) {
                    var i = q(e);
                    if (!i) return !1;
                    try {
                        i.send(t, n, r)
                    } catch (e) {
                        i.send(t, n)
                    }
                    return !0
                }! function(e) {
                    e.EndPreviewMode = "EndPreviewMode", e.EvtBundle = "EvtBundle", e.GreetFrame = "GreetFrame", e.InitFrameMobile = "InitFrameMobile", e.RequestFrameId = "RequestFrameId", e.RestartFrame = "RestartFrame", e.SetConsent = "SetConsent", e.SetFrameId = "SetFrameId", e.ShutdownFrame = "ShutdownFrame", e.Unknown = "Unknown"
                }(hs || (hs = {}));
                var vs = new RegExp(/^\s+$/),
                    gs = /^fb\d{18}$/,
                    ms = function(e) {
                        var t = e.frame,
                            n = e.orgId,
                            r = e.scheme,
                            i = e.script,
                            o = e.recHost,
                            a = e.cdnHost,
                            u = e.appHost,
                            c = e.namespace;
                        e.desc;
                        try {
                            if (function(e) {
                                    return e.id == e.name && gs.test(e.id)
                                }(t)) return Ie.BlocklistedFrame;
                            if (function(e) {
                                    return !(e.contentDocument && e.contentWindow && e.contentWindow.location) || function(e) {
                                        return !!e.src && "about:blank" != e.src && e.src.indexOf("javascript:") < 0
                                    }(e) && e.src != e.contentWindow.location.href && "loading" == e.contentDocument.readyState
                                }(t)) return Ie.PartiallyLoaded;
                            var h = t.contentWindow,
                                l = t.contentDocument;
                            if (!h || !l) return Ie.MissingWindowOrDocument;
                            if (!l.head) return Ie.MissingDocumentHead;
                            if (!l.body || 0 === l.body.childNodes.length) return Ie.MissingBodyOrChildren;
                            for (var d = !1, p = l.body.childNodes, f = 0; f < p.length; f++) {
                                switch (p[f].nodeType) {
                                    case Node.ELEMENT_NODE:
                                        if ("SCRIPT" === p[f].tagName) continue;
                                        break;
                                    case Node.TEXT_NODE:
                                        var _ = p[f].textContent;
                                        if (null === _ || vs.test(_)) continue;
                                        break;
                                    case Node.COMMENT_NODE:
                                        continue;
                                }
                                d = !0;
                                break
                            }
                            if (!d) return Ie.NoNonScriptElement;
                            if (A(h)) return Ie.AlreadyDefined;
                            var v = h;
                            return v._fs_org = n, v._fs_script = i, v._fs_rec_host = o, v._fs_rec_settings_host = a, v._fs_app_host = u, v._fs_run_in_iframe = !0, v._fs_transport = function(e) {
                                    return {
                                        send: function(t, n, r) {
                                            if (void 0 !== e.parent) {
                                                var i = A(e.parent);
                                                void 0 !== i && "function" == typeof i._withRecorder && i._withRecorder(r, function(i) {
                                                    try {
                                                        i.onMessageReceived(e, [t, s.jsonParse(n), r])
                                                    } catch (e) {
                                                        e instanceof SyntaxError && Ae.sendToBugsnag(e, "error", {
                                                            msg: "Received invalid JSON"
                                                        })
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }(v),
                                function(e, t, n, r, i, o, s) {
                                    if (n in e) e.console && e.console.log && e.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"].");
                                    else {
                                        var a = e[n] = function(e, t, n) {
                                            a.q ? a.q.push([e, t, n]) : a._api(e, t, n)
                                        };
                                        a.q = [];
                                        var u = t.createElement(r);
                                        u.async = 1, u.src = i + "//" + o, u.crossOrigin = "anonymous", "testdrive" == s && (u.src += "?allowMoo=true");
                                        var c = t.getElementsByTagName(r);
                                        c && c.length > 0 ? c[0].parentNode.insertBefore(u, c[0]) : t.head.appendChild(u), a.event = function(e, t, n) {
                                            a("event", {
                                                n: e,
                                                p: t
                                            }, n)
                                        }, a.log = function(e, t) {
                                            a("log", [e, t])
                                        }
                                    }
                                }(v, l, c, "script", r, i, n), Ie.Successful
                        } catch (e) {
                            return Ie.Exception
                        }
                    };

                function ys(e) {
                    var t = "" + Tn(e);
                    return e.id && (t += "#" + e.id), t + "[src=" + Pr(e.src, {
                        source: "log",
                        type: "debug"
                    }) + "]"
                }
                var Ss, ws = "https://fs-obfuscated.invalid",
                    Es = function() {
                        function e(e, t) {
                            var n = this;
                            this.wnd = e, this.queue = t, this.idCounter = 0, this.allEntries = {}, this.salt = function(e) {
                                var t;
                                try {
                                    if ("function" == typeof(null === (t = e.crypto) || void 0 === t ? void 0 : t.getRandomValues)) {
                                        var n = "",
                                            r = new Uint32Array(2);
                                        e.crypto.getRandomValues(r);
                                        for (var i = 0; i < r.length; i++) n += r[i].toString(16);
                                        return n
                                    }
                                } catch (e) {}
                                return s.mathFloor(1e20 * (s.mathRandom() + .1)).toString(16)
                            }(this.wnd), this.queue.enqueue({
                                Kind: Ee.URL_SALT,
                                Args: [this.salt]
                            }), this.scheduler = new po(this.wnd, {
                                interval: 500,
                                onFlush: function(e) {
                                    return n.onFlush(e)
                                }
                            })
                        }
                        return e.prototype.flush = function() {
                            this.scheduler.flush()
                        }, e.prototype.onFlush = function(e) {
                            0 !== e.length && this.queue.enqueue({
                                Kind: Ee.URL_ID,
                                Args: e
                            })
                        }, e.prototype.record = function(e) {
                            if (/^(file|http)/i.test(e)) {
                                var t = this._add(e, !0),
                                    n = t[0];
                                t[1] && this.scheduler.append([e, n])
                            }
                        }, e.prototype.seen = function(e) {
                            return this._add(e, !1)[0]
                        }, e.prototype._add = function(e, t) {
                            var n = e.substring(0, 5e3);
                            if (void 0 === this.allEntries[n]) {
                                var r = this.idCounter++;
                                return this.allEntries[n] = {
                                    id: r,
                                    record: t
                                }, [r, t]
                            }
                            var i = !1;
                            return t && (i = !1 === this.allEntries[n].record, this.allEntries[n].record = !0), [this.allEntries[n].id, i]
                        }, e.prototype.obfuscateUrl = function(e, t) {
                            return "css" === t ? this.hashObfuscatedUrl(e) : this.fullyObfuscatedUrl(e)
                        }, e.prototype.hashObfuscatedUrl = function(e) {
                            var t = jo(e.substring(0, 5e3) + this.salt);
                            return ws + "?hash=" + t + "&algorithm=fnv32"
                        }, e.prototype.fullyObfuscatedUrl = function(e) {
                            var t = this.seen(e);
                            return ws + "?url-id=" + t
                        }, e
                    }();
                ! function(e) {
                    e[e.NoInfoYet = 1] = "NoInfoYet", e[e.Enabled = 2] = "Enabled", e[e.Disabled = 3] = "Disabled"
                }(Ss || (Ss = {}));
                var bs, Ts = function() {
                        function e(e, t, n, r, i) {
                            var o = this;
                            this._ctx = e, this._injector = i, this._orgSettings = Je.DefaultOrgSettings, this._useClientSessionId = !1, this._frameId = null, this._parentIds = [], this._bundleUploadInterval = Je.DefaultBundleUploadInterval, this._childFrames = [], this._childFrameListeners = new WeakMap, this._pendingChildFrameIdInits = [], this._listeners = new it, this._getCurrentSessionEnabled = Ss.NoInfoYet, this._resourceUploadingEnabled = !1, this._pendingShutdown = !1, this._pendingIframes = {}, this._queue = new Bo(e, r, n, function() {
                                return o._eventWatcher.bundleEvents()
                            }, t);
                            var s = new Xo(e, this._queue, new ns(e)),
                                a = new Es(e.window, this._queue);
                            this._watcher = new vi, this._keep = new ls(e, this._queue), this._eventWatcher = new _o(e, this._queue, this._keep, this._watcher, this._listeners, function(e) {
                                return o.onFrameCreated(e)
                            }, function(e) {
                                return o.beforeFrameRemoved(e)
                            }, s, a), this._consoleWatcher = new Lo(e, this._queue, this._listeners), this._scheme = e.options.scheme, this._script = e.options.script, this._recHost = e.options.recHost, this._cdnHost = e.options.cdnHost, this._appHost = e.options.appHost, this._orgId = e.options.orgId, this._wnd = e.window
                        }
                        return e.prototype.getPageResponse = function() {
                            return this._pageRsp
                        }, e.prototype.bundleUploadInterval = function() {
                            return this._bundleUploadInterval
                        }, e.prototype.orgSettings = function() {
                            return this._orgSettings
                        }, e.prototype.start = function(e, t) {
                            var n = this;
                            this._onFullyStarted = t, "onpagehide" in this._wnd ? this._listeners.add(this._wnd, "pagehide", !1, function(e) {
                                n.onUnload()
                            }) : this._listeners.add(this._wnd, "unload", !1, function(e) {
                                n.onUnload()
                            }), this._listeners.add(this._wnd, "message", !1, function(e) {
                                var t = e.data;
                                if ("string" == typeof t) {
                                    var r = e.source;
                                    n.onMessageReceived(r, fs(t))
                                }
                            });
                            var r = this._wnd.Document ? this._wnd.Document.prototype : this._wnd.document;
                            this._docCloseHook = pe(r, "close"), this._docCloseHook && this._docCloseHook.afterAsync(function() {
                                n._listeners.refresh()
                            })
                        }, e.prototype.tellAllFramesTo = function(e) {
                            for (var t = 0, n = this._childFrames; t < n.length; t++) {
                                var r = n[t];
                                r.contentWindow && ps(r.contentWindow, e)
                            }
                        }, e.prototype.queue = function() {
                            return this._queue
                        }, e.prototype.eventWatcher = function() {
                            return this._eventWatcher
                        }, e.prototype.console = function() {
                            return this._consoleWatcher
                        }, e.prototype.onDomLoad = function() {
                            this._eventWatcher.onDomLoad()
                        }, e.prototype.onLoad = function() {
                            this._eventWatcher.onLoad()
                        }, e.prototype.shutdown = function(e) {
                            this._pendingShutdown = !0, this._eventWatcher.shutdown(e), this._consoleWatcher.disable(), this._listeners && this._listeners.clear(), this._docCloseHook && this._docCloseHook.disable(), this.tellAllFramesTo([hs.ShutdownFrame])
                        }, e.prototype.getCurrentSessionURL = function(e) {
                            var t = this._getCurrentSessionEnabled;
                            if (t == Ss.NoInfoYet) return null;
                            if (t == Ss.Disabled) return this._scheme + "//" + this._appHost + "/opt/upgrade";
                            var n = this.getCurrentSession();
                            return n ? (e && (n += ":" + this._ctx.time.wallTime()), this._scheme + "//" + this._appHost + "/ui/" + this._ctx.options.orgId + "/" + (this._useClientSessionId ? "client-" : "") + "session/" + encodeURIComponent(n)) : null
                        }, e.prototype.getCurrentSession = function() {
                            var e = this._getCurrentSessionEnabled;
                            return e == Ss.NoInfoYet || e == Ss.Disabled ? null : this._userId && this._sessionId ? this._userId + ":" + this._sessionId : null
                        }, e.prototype.setConsent = function(e) {
                            var t = this,
                                n = function() {
                                    t._watcher.setConsent(e), t._queue.processEvents()
                                },
                                r = function() {
                                    t._queue.enqueue({
                                        Kind: Ee.SYS_SETCONSENT,
                                        Args: [e, Pe.Document]
                                    })
                                };
                            switch (e) {
                                case Oe.GrantConsent:
                                    r(), n();
                                    break;
                                case Oe.RevokeConsent:
                                    n(), r();
                            }
                            this.tellAllFramesTo([hs.SetConsent, e])
                        }, e.prototype.pageSignature = function() {
                            return this._userId + ":" + this._sessionId + ":" + this._pageId
                        }, e.prototype.getBundleApiVersion = function() {
                            return this._useClientSessionId ? "v2" : "v1"
                        }, e.prototype.fireFsReady = function(e) {
                            var t, n;
                            void 0 === e && (e = !1), null === (t = this._ctx.recording.observer) || void 0 === t || t.onStart(null !== (n = this.getCurrentSessionURL()) && void 0 !== n ? n : "", this._orgSettings);
                            var r = L(this._wnd, "_fs_ready", "function");
                            if (r) try {
                                e ? r(!0) : r()
                            } catch (e) {}
                        }, e.prototype.onUnload = function() {
                            this._queue.addUnload(Me.Unload), Rn.stopAll()
                        }, e.prototype.isSafeResponse = function(e) {
                            var t, n, r, i, o, s, a, u, c = (null !== (n = null === (t = e.ElementBlocks) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0 && (null !== (o = null === (i = null === (r = e.OrgSettings) || void 0 === r ? void 0 : r.UrlPrivacyConfig) || void 0 === i ? void 0 : i.length) && void 0 !== o ? o : 0) > 0 && (null !== (u = null === (a = null === (s = e.OrgSettings) || void 0 === s ? void 0 : s.AttributeBlocklist) || void 0 === a ? void 0 : a.length) && void 0 !== u ? u : 0) > 0;
                            return c || Ae.sendToBugsnag("Invalid page response", "error", {
                                rsp: e
                            }), c
                        }, e.prototype.handleResponse = function(e, t) {
                            var n, r = e.Flags,
                                i = r.AjaxFetch,
                                o = r.AjaxWatcher,
                                s = r.ClientSideRageClick,
                                a = r.ConsoleWatcher,
                                u = r.GetCurrentSession,
                                c = r.ResourceUploading,
                                h = r.UseClientSideId;
                            this._pageRsp = e, this._userId = e.UserIntId, this._sessionId = e.SessionIntId, this._pageId = e.PageIntId, this._serverPageStart = e.PageStart, this._getCurrentSessionEnabled = u ? Ss.Enabled : Ss.Disabled, this._orgSettings = e.OrgSettings, Fr(null !== (n = this._orgSettings.UrlPrivacyConfig) && void 0 !== n ? n : Je.DefaultOrgSettings.UrlPrivacyConfig, this._orgSettings.MaxUrlLength), Kr(this._orgSettings.AttributeBlocklist), this._consoleWatcher.initializeMaxLogsPerPage(this._orgSettings.MaxConsoleLogPerPage), this._eventWatcher.ajaxWatcher().initialize({
                                requests: this._orgSettings.HttpRequestHeadersAllowlist,
                                responses: this._orgSettings.HttpResponseHeadersAllowlist,
                                maxAjaxPayloadLength: this._orgSettings.MaxAjaxPayloadLength
                            }), this._eventWatcher.perfWatcher().start({
                                resourceUploader: this._eventWatcher.getResourceUploader(),
                                recTimings: !!this._orgSettings.RecordPerformanceResourceTiming,
                                recImgs: !!this._orgSettings.RecordPerformanceResourceImg,
                                maxPerfMarksPerPage: this._orgSettings.MaxPerfMarksPerPage
                            }), this._watcher.initialize({
                                blocks: e.ElementBlocks,
                                keeps: e.ElementKeeps,
                                watches: e.ElementWatches
                            }), this._keep.initialize(e.UrlKeeps), this._watcher.initializeConsent(null != t ? t : !!e.Consented), "number" == typeof e.BundleUploadInterval && (this._bundleUploadInterval = e.BundleUploadInterval), c && this.enableResourceUploading(), o && this.enableAjaxWatcher(!!i), a && this.enableConsoleWatcher(), o && e.AjaxWatches && this._eventWatcher.ajaxWatcher().setWatches(e.AjaxWatches), s && this._queue.enableEasyBake(), h && (this._useClientSessionId = !0), this._eventWatcher.watchEvents(e.Flags)
                        }, e.prototype.fullyStarted = function() {
                            this._onFullyStarted && this._onFullyStarted()
                        }, e.prototype.enableResourceUploading = function() {
                            this._resourceUploadingEnabled = !0, this._eventWatcher.initResourceUploading()
                        }, e.prototype.enableAjaxWatcher = function(e) {
                            this.eventWatcher().ajaxWatcher().enable(e)
                        }, e.prototype.enableConsoleWatcher = function() {
                            this.console().enable()
                        }, e.prototype.flushPendingChildFrameInits = function() {
                            if (this._pendingChildFrameIdInits.length > 0) {
                                for (var e = 0; e < this._pendingChildFrameIdInits.length; e++) this._pendingChildFrameIdInits[e]();
                                this._pendingChildFrameIdInits = []
                            }
                        }, e.prototype.inject = function(e) {
                            var t = this;
                            this._ctx.measurer.requestMeasureTask(Dt.Essential, function() {
                                var n = ys(e),
                                    r = t._injector({
                                        frame: e,
                                        orgId: t._orgId,
                                        scheme: t._scheme,
                                        script: t._script,
                                        recHost: t._recHost,
                                        cdnHost: t._cdnHost,
                                        appHost: t._appHost,
                                        namespace: k(t._wnd),
                                        desc: n
                                    });
                                r !== Ie.MissingDocumentHead && r !== Ie.MissingBodyOrChildren && r !== Ie.NoNonScriptElement || !e.contentDocument || new MutationObserver(function(n, r) {
                                    t.inject(e), r.disconnect()
                                }).observe(e.contentDocument, {
                                    childList: !0,
                                    subtree: !0
                                }), t._queue.enqueue({
                                    Kind: Ee.FRAME_STATUS,
                                    Args: [Tn(e), n, r]
                                })
                            })
                        }, e.prototype.onFrameCreated = function(e) {
                            var t = Tn(e);
                            if (t) {
                                this._childFrames.push(e);
                                var n = !1;
                                if (e.contentWindow) try {
                                    n = !!A(e.contentWindow)
                                } catch (e) {
                                    n = !0
                                }
                                var r = function(e) {
                                        var t = e.src,
                                            n = location.protocol + "//" + location.host;
                                        return !t || "about:blank" == t || X(t, "javascript:") || X(t, n)
                                    }(e),
                                    i = e.contentWindow && e.contentWindow.postMessage;
                                r && !n || !i ? r ? this.initSameOriginIframe(e) : ys(e) : this.initCrossOriginIframe(e, t)
                            } else ys(e)
                        }, e.prototype.initCrossOriginIframe = function(e, t) {
                            e.contentWindow && e.contentWindow.postMessage ? (ys(e), ps(e.contentWindow, [hs.GreetFrame, t])) : ys(e)
                        }, e.prototype.initSameOriginIframe = function(e) {
                            var t = this;
                            ys(e), this.inject(e);
                            var n = this._listeners.add(e, "load", !1, Ae.wrap(function() {
                                ys(e), t.inject(e)
                            }));
                            this._childFrameListeners.set(e, n)
                        }, e.prototype.beforeFrameRemoved = function(e) {
                            if (Tn(e)) {
                                var t = this._childFrameListeners.get(e);
                                void 0 !== t && (this._listeners.remove(t), this._childFrameListeners["delete"](e)), this._childFrames = this._childFrames.filter(function(t) {
                                    return t !== e
                                })
                            }
                        }, e.prototype.onMessageReceived = function(e, t) {
                            if (!e || e.parent == this._wnd) switch (t[0]) {
                                case hs.EvtBundle:
                                    var n = t[1],
                                        r = t[2],
                                        i = this.pageSignature();
                                    if (i !== r) return Ae.sendToBugsnag("Page signature mismatch", "warning", {
                                        pageSignature: i,
                                        messageSignature: r
                                    }), void(e && ps(e, [hs.ShutdownFrame]));
                                    n.length > 0 && this._queue.sendEvents(i, n);
                                    break;
                                case hs.RequestFrameId:
                                    if (!e) return;
                                    var o = this.getFrameId(e);
                                    void 0 === o || (this._pendingIframes[o] = !1, this.sendFrameIdToInnerFrame(e, o));
                                case hs.Unknown:
                            }
                        }, e.prototype.getFrameId = function(e) {
                            for (var t = 0, n = this._childFrames; t < n.length; t++) {
                                var r = n[t];
                                if (r.contentWindow === e) return Tn(r)
                            }
                        }, e.prototype.sendFrameIdToInnerFrame = function(e, t) {
                            var n = this,
                                r = function() {
                                    var r = [];
                                    0 != n._frameId && null !== n._frameId && (r = n._parentIds ? n._parentIds.concat(n._frameId) : [n._frameId]);
                                    var i = n._ctx.time.startTime();
                                    ps(e, [hs.SetFrameId, t, r, i, n._scheme, n._script, n._appHost, n._orgId, n._pageRsp, n._watcher.getConsent(), n._ctx.time.now()])
                                };
                            null == this._frameId ? this._pendingChildFrameIdInits.push(r) : r()
                        }, e.prototype.enqueueDocumentProperties = function(e) {
                            var t = this;
                            this._ctx.measurer.requestMeasureTask(Dt.Essential, function() {
                                t._queue.enqueue({
                                    Kind: Ee.DOCUMENT_PROPERTIES,
                                    Args: [Tn(e.scrollingElement), e.compatMode]
                                })
                            })
                        }, e
                    }(),
                    Is = function() {
                        function e(e, t, n, r) {
                            void 0 === r && (r = Pn), this._ctx = e, this._protocol = t, this._identity = n, this._timeoutFactory = r, this.sing()
                        }
                        return e.prototype.store = function(e) {
                            var t;
                            e.bundles.length;
                            var n = ae({
                                Bundles: e.bundles,
                                IsNewSession: e.isNewSession,
                                LastBundleTime: e.lastBundleTime,
                                OrgId: this._identity.getOrgId(),
                                PageId: e.pageId,
                                PageStartTime: this._ctx.time.startTime(),
                                RecHost: cs(this._ctx),
                                ServerBundleTime: e.serverBundleTime,
                                ServerPageStart: e.serverPageStart,
                                SessionId: null !== (t = this._identity.getSessionId()) && void 0 !== t ? t : "",
                                UserId: this._identity.getUserId(),
                                Version: e.version
                            });
                            if (!(n.length > 2e6)) try {
                                localStorage._fs_swan_song = n
                            } catch (e) {}
                        }, e.prototype.sing = function() {
                            try {
                                var e = this.purge();
                                if (void 0 === e) return;
                                if (!(e.Bundles && e.UserId && e.SessionId && e.PageId)) return;
                                e.OrgId || (e.OrgId = this._identity.getOrgId()), e.Bundles.length > 0 && (e.Bundles.length, this.sendSwanSongBundles(e))
                            } catch (e) {}
                        }, e.prototype.purge = function() {
                            try {
                                if ("_fs_swan_song" in localStorage) {
                                    var e = localStorage._fs_swan_song;
                                    return delete localStorage._fs_swan_song, he(e)
                                }
                            } catch (e) {}
                        }, e.prototype.sendSwanSongBundles = function(e, t) {
                            return void 0 === t && (t = 0), (0, i.__awaiter)(this, void 0, Ft, function() {
                                var n, r, o, s;
                                return (0, i.__generator)(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n = null, !G(e.Bundles) || 0 === e.Bundles.length || void 0 === e.Bundles[0]) return [2];
                                            1 == e.Bundles.length && (n = this._ctx.time.wallTime() - (e.LastBundleTime || 0)), a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, this._protocol.bundle({
                                                bundle: e.Bundles[0],
                                                deltaT: n,
                                                isNewSession: e.IsNewSession,
                                                orgId: e.OrgId,
                                                pageId: e.PageId,
                                                recHost: e.RecHost,
                                                serverBundleTime: e.ServerBundleTime,
                                                serverPageStart: e.ServerPageStart,
                                                sessionId: e.SessionId,
                                                userId: e.UserId,
                                                version: e.Version
                                            })];
                                        case 2:
                                            return r = a.sent(), o = r[1], e.Bundles[0].Evts.length, e.Bundles[0].Seq, e.Bundles.shift(), e.Bundles.length > 0 && this.sendSwanSongBundles((0, i.__assign)((0, i.__assign)({}, e), {
                                                ServerBundleTime: o.BundleTime
                                            })), [3, 4];
                                        case 3:
                                            return (s = a.sent()) instanceof $o && es(s.status) ? [2] : (this._lastSwanSongRetryTimeout = new this._timeoutFactory(this.sendSwanSongBundles, this._protocol.exponentialBackoffMs(t, !0), this, e, t + 1).start(), [3, 4]);
                                        case 4:
                                            return [2];
                                    }
                                })
                            })
                        }, e
                    }(),
                    ks = function() {
                        function e() {}
                        return e.prototype.encode = function(e) {
                            return e
                        }, e
                    }(),
                    Cs = function() {
                        function e() {
                            this.dict = {
                                idx: -1,
                                map: {}
                            }, this.nodeCount = 1, this.startIdx = 0
                        }
                        return e.prototype.encode = function(t) {
                            if (0 == t.length) return [];
                            var n, r, i = t[0],
                                o = Object.prototype.hasOwnProperty.call(this.dict.map, i) ? this.dict.map[i] : null,
                                s = [],
                                a = 1;

                            function u() {
                                o ? a > 1 ? s.push([o.idx, a]) : s.push(o.idx) : s.push(i)
                            }
                            for (n = 1; n < t.length; n++)
                                if (r = t[n], o && Object.prototype.hasOwnProperty.call(o.map, r)) a++, i = r, o = o.map[r];
                                else {
                                    u();
                                    var c = this.startIdx + n - a;
                                    null == o && this.nodeCount < e.MAX_NODES && (o = {
                                        idx: c,
                                        map: {}
                                    }, this.dict.map[i] = o, this.nodeCount++), o && this.nodeCount < e.MAX_NODES && (o.map[r] = {
                                        idx: c,
                                        map: {}
                                    }, this.nodeCount++), a = 1, i = r, o = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : null
                                }
                            return u(), this.startIdx += t.length, s
                        }, e.MAX_NODES = 1e4, e
                    }(),
                    As = ((bs = {})[Ee.PERF_ENTRY] = !0, bs[Ee.AJAX_REQUEST] = !0, bs),
                    xs = function() {
                        function e(e, t, n, r, i, o) {
                            void 0 === r && (r = !0), void 0 === i && (i = On), void 0 === o && (o = Pn), this._ctx = e, this._protocol = t, this._activityModel = n, this._compress = r, this._tickerFactory = i, this._pendingBundleFailed = !1, this._backoffRetries = 0, this._backoffTime = 0, this._bundleSeq = 1, this._lastPostTime = 0, this._isNewSession = !1, this._compressors = {}, this._largePageSize = 16e6, this._serverBundleTime = 0, this._inProgressBundle = new Rs(1), this._bundleQueue = [], this._identity = e.recording.identity, this._scheme = e.options.scheme, this._lastBundleTime = e.time.wallTime(), this._swanSong = new Is(e, this._protocol, this._identity, o)
                        }
                        return e.prototype.onShutdown = function(e) {
                            this._onShutdown = e
                        }, e.prototype.scheme = function() {
                            return this._scheme
                        }, e.prototype.enqueueEvents = function(e, t) {
                            for (var n = 0, r = t; n < r.length; n++) {
                                var i = r[n];
                                this._inProgressBundle.pushEvent(i)
                            }
                        }, e.prototype.initUploadTicker = function() {
                            this._uploadTicker = new this._tickerFactory(this._ctx.recording.bundleUploadInterval())
                        }, e.prototype.startPipeline = function(e) {
                            var t, n = this;
                            this._pageId = e.pageId, this._serverPageStart = e.serverPageStart, this._isNewSession = e.isNewSession, this.enqueueAndSendBundle(), this._uploadTicker || this.initUploadTicker(), null === (t = this._uploadTicker) || void 0 === t || t.start(function() {
                                n.enqueueAndSendBundle()
                            })
                        }, e.prototype.stopPipeline = function() {
                            this._uploadTicker && this._uploadTicker.stop(), this._inProgressBundle = new Rs(this._inProgressBundle.bundle.Seq), this._bundleQueue = [], this._compressors = {}, this._pageId = void 0, this._serverPageStart = void 0, this._isNewSession = !1
                        }, e.prototype.flush = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.enqueueNextBundle(), [4, this.maybeSendNextBundle()];
                                        case 1:
                                            return e.sent(), [2];
                                    }
                                })
                            })
                        }, e.prototype.singSwanSong = function() {
                            var e;
                            if (this._pageId) {
                                this.enqueueNextBundle();
                                var t = [];
                                this._pendingBundle && t.push(this._pendingBundle);
                                for (var n = 0, r = this._bundleQueue; n < r.length; n++) {
                                    var i = r[n];
                                    t.push(i)
                                }
                                for (var o = [], s = !1, a = 0, u = t; a < u.length; a++) i = u[a], s ? o.push(i) : this._protocol.bundleBeacon({
                                    bundle: i,
                                    deltaT: null,
                                    orgId: this._identity.getOrgId(),
                                    pageId: this._pageId,
                                    serverBundleTime: this._serverBundleTime,
                                    serverPageStart: this._serverPageStart,
                                    isNewSession: this._isNewSession,
                                    sessionId: null !== (e = this._identity.getSessionId()) && void 0 !== e ? e : "",
                                    userId: this._identity.getUserId(),
                                    version: this._ctx.recording.bundleApiVersion()
                                }) || (o.push(i), s = !0);
                                0 !== o.length && void 0 !== this._serverPageStart ? this._swanSong.store({
                                    pageId: this._pageId,
                                    bundles: o,
                                    lastBundleTime: this._lastBundleTime,
                                    serverPageStart: this._serverPageStart,
                                    serverBundleTime: this._serverBundleTime,
                                    isNewSession: this._isNewSession,
                                    version: this._ctx.recording.bundleApiVersion()
                                }) : this._swanSong.purge()
                            }
                        }, e.prototype.enqueueAndSendBundle = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this._pendingBundle ? (this._pendingBundleFailed && this._sendPendingBundle(), [2]) : (this._inProgressBundle.hasActiveEvents() && this.enqueueNextBundle(), [4, this.maybeSendNextBundle()]);
                                        case 1:
                                            return e.sent(), [2];
                                    }
                                })
                            })
                        }, e.prototype.enqueueNextBundle = function() {
                            if (this._inProgressBundle.hasAnyEvents()) {
                                var e = this.compressBundle(this._inProgressBundle.bundle);
                                return this._inProgressBundle = this._inProgressBundle.createNext(), this._bundleQueue.push(e), e
                            }
                        }, e.prototype.maybeSendNextBundle = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this._pageId && this._serverPageStart && !this._pendingBundle && 0 != this._bundleQueue.length ? (this._pendingBundle = this._bundleQueue.shift(), [4, this._sendPendingBundle()]) : [2];
                                        case 1:
                                            return e.sent(), [2];
                                    }
                                })
                            })
                        }, e.prototype._sendPendingBundle = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var e, t, n, r;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if ((e = this._ctx.time.wallTime()) < this._backoffTime) return [2];
                                            if (!(t = this._pendingBundle)) return [2];
                                            this._pendingBundleFailed = !1, this._lastPostTime = this._lastBundleTime = e, i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 5, , 6]), [4, this.sendBundle(t)];
                                        case 2:
                                            return (n = i.sent()) ? (t.Seq, t.Evts.length, this._serverBundleTime = n.BundleTime, this._pendingBundle = void 0, this._backoffTime = 0, this._backoffRetries = 0, this._ctx.time.wallTime() - this._lastPostTime > this._ctx.recording.bundleUploadInterval() ? [4, this.maybeSendNextBundle()] : [3, 4]) : [2];
                                        case 3:
                                            i.sent(), i.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            if ((r = i.sent()) instanceof $o) {
                                                if (es(r.status)) return 206 == r.status ? Ae.sendToBugsnag("Failed to send bundle, probably because of its large size", "error") : r.status >= 500 && Ae.sendToBugsnag("Failed to send bundle, recording outage likely", "error"), this._onShutdown && this._onShutdown(), [2]
                                            } else Ae.sendToBugsnag("Failed to send bundle, unknown err", "error", {
                                                err: r
                                            });
                                            return this._pendingBundleFailed = !0, this._backoffTime = this._lastPostTime + this._protocol.exponentialBackoffMs(this._backoffRetries++, !1), [3, 6];
                                        case 6:
                                            return [2];
                                    }
                                })
                            })
                        }, e.prototype.sendBundle = function(e) {
                            var t, n;
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var r, o, s, a;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return this._pageId ? (r = this._activityModel.getMsSinceLastUserAcivity(), [4, this._protocol.bundle({
                                                bundle: e,
                                                deltaT: null,
                                                lastUserActivity: r,
                                                orgId: this._identity.getOrgId(),
                                                pageId: this._pageId,
                                                serverBundleTime: this._serverBundleTime,
                                                serverPageStart: this._serverPageStart,
                                                isNewSession: this._isNewSession,
                                                sessionId: null !== (t = this._identity.getSessionId()) && void 0 !== t ? t : "",
                                                userId: this._identity.getUserId(),
                                                version: this._ctx.recording.bundleApiVersion()
                                            })]) : [2];
                                        case 1:
                                            return o = i.sent(), s = o[0], a = o[1], null === (n = this._ctx.recording.observer) || void 0 === n || n.onBundleSent(s), s > this._largePageSize && this._bundleSeq > 16 && this._ctx.recording.splitPage(Me.Size), [2, a];
                                    }
                                })
                            })
                        }, e.prototype.compressBundle = function(e) {
                            for (var t = [], n = 0, r = e.Evts; n < r.length; n++) {
                                var o = r[n];
                                switch (o.Kind) {
                                    case Ee.SET_FRAME_BASE:
                                        var s = Os(o.PIds, o.FId);
                                        delete this._compressors[s];
                                        break;
                                    case Ee.MUT_INSERT:
                                        var a = _();
                                        o.Args[2] = this.encodeStream(o.PIds, o.FId, o.Args[2]), t.push(_() - a);
                                        break;
                                    case Ee.MUT_SHADOW:
                                        a = _(), o.Args[1] = this.encodeStream(o.PIds, o.FId, o.Args[1]), t.push(_() - a);
                                }
                            }
                            if (0 === t.length) return e;
                            var u = e.Evts[e.Evts.length - 1],
                                c = t[0],
                                h = t.slice(1);
                            return e.Evts.push((0, i.__assign)((0, i.__assign)({}, u), {
                                Kind: Ee.TIMING,
                                Args: [(0, i.__spreadArray)([Ce.Internal, Te.Serialization, ke.LzEncoding, u.When, c], h.map(function(e) {
                                    return [ke.LzEncoding, e]
                                }))]
                            })), e
                        }, e.prototype.encodeStream = function(e, t, n) {
                            void 0 === e && (e = []), void 0 === t && (t = 0);
                            var r = Os(e, t);
                            return this._compressors[r] || (this._compressors[r] = this._compress ? new Cs : new ks), this._compressors[r].encode(n)
                        }, e
                    }(),
                    Rs = function() {
                        function e(e) {
                            this._active = !1, this._bundle = {
                                Seq: e,
                                When: -1,
                                Evts: []
                            }
                        }
                        return Object.defineProperty(e.prototype, "bundle", {
                            get: function() {
                                return this._bundle
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.createNext = function() {
                            return new e(this._bundle.Seq + 1)
                        }, e.prototype.hasAnyEvents = function() {
                            return this._bundle.Evts.length > 0
                        }, e.prototype.hasActiveEvents = function() {
                            return this._active
                        }, e.prototype.pushEvent = function(e) {
                            As[e.Kind] || (this._active = !0), this._bundle.When < 0 && (this._bundle.When = e.When), this._bundle.Evts.push(e)
                        }, e
                    }();

                function Os(e, t) {
                    void 0 === e && (e = []), void 0 === t && (t = 0);
                    for (var n = "", r = 0, i = e; r < i.length; r++) n += "/" + i[r];
                    return n + "/" + t
                }
                var Ps = "_fs_preview",
                    Ms = new RegExp("(^\\?|&)_fs_preview=(?:true|false)(&|$)"),
                    Ls = function() {
                        function e(e, t) {
                            this._wnd = e, this._clientStore = t
                        }
                        return e.prototype.setDomain = function(e) {
                            this._clientStore.setDomain(e), this._write()
                        }, e.prototype.isPreviewMode = function() {
                            return this._queryContainsPreviewModeFlag() || this._clientStoreContainsPreviewModeFlag()
                        }, e.prototype.clear = function() {
                            this._clientStore.setValue(Ps, "", new Date(1970, 1, 1).toUTCString())
                        }, e.prototype._write = function() {
                            var e = this._queryContainsPreviewModeFlag(),
                                t = this._queryContainsClearPreviewModeFlag();
                            (e || t) && (e ? this._clientStore.setValue(Ps, "true", new Date(_() + 432e5).toUTCString()) : this.clear(), this._removeQuery())
                        }, e.prototype._removeQuery = function() {
                            if (this._wnd.history) {
                                var e = location.search.replace(Ms, function(e, t, n) {
                                    return n ? t : ""
                                });
                                this._wnd.history.replaceState({}, "", this._wnd.location.href.replace(location.search, e))
                            }
                        }, e.prototype._queryContainsPreviewModeFlag = function() {
                            return this._wnd.document.location.search.indexOf("_fs_preview=true") > -1
                        }, e.prototype._queryContainsClearPreviewModeFlag = function() {
                            return this._wnd.document.location.search.indexOf("_fs_preview=false") > -1
                        }, e.prototype._clientStoreContainsPreviewModeFlag = function() {
                            return "true" === this._clientStore.getValue(Ps)
                        }, e
                    }();

                function Us(e) {
                    var t, n, r;
                    return {
                        Kind: Ee.CAPTURE_SOURCE,
                        Args: [e.type, e.entrypoint, "dom", null === (n = null === (t = e.source) || void 0 === t ? void 0 : t.integration) || void 0 === n ? void 0 : n.slice(0, 1024), !!(null === (r = e.source) || void 0 === r ? void 0 : r.userInitiated)]
                    }
                }

                function Ns(e) {
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        var t, n, r, o, s;
                        return (0, i.__generator)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return "function" == typeof e.crypto.randomUUID ? [2, e.crypto.randomUUID()] : (t = "", n = new Uint32Array(4), e.crypto.getRandomValues(n), [4, e.crypto.subtle.digest("SHA-256", n)]);
                                case 1:
                                    for (r = i.sent(), n = new Uint32Array(r), o = 0; o < n.length; o++) t += n[o].toString(16);
                                    return s = 0, [2, "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g, function(e) {
                                        return s < t.length ? t[s++] : "1"
                                    })];
                            }
                        })
                    })
                }
                var Fs = /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/;

                function Hs(e) {
                    return 36 === e.length && Fs.test(e)
                }
                var qs, Ds = void 0,
                    Ws = function() {
                        function e(e, t, n, r) {
                            void 0 === r && (r = Pn), this._ctx = e, this._activityModel = t, this._store = n, this.lastUserActivityTimeout = new r(this._onLastUserActivity.bind(this))
                        }
                        return e.prototype.createUserSessionPage = function() {
                            var e;
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var t, n, r, o, s, a;
                                return (0, i.__generator)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return t = this.getExistingSession(), n = void 0 === t, r = this._ctx.time.wallTime(), n ? [4, this._getUserId()] : [3, 3];
                                        case 1:
                                            return o = i.sent(), [4, Ns(this._ctx.window)];
                                        case 2:
                                            return s = i.sent(), this._store.create({
                                                userId: o,
                                                sessionId: s,
                                                sessionStartTime: r,
                                                lastUserActivityTime: r,
                                                pageCount: 1
                                            }), [3, 4];
                                        case 3:
                                            this._store.setLastUserActivityTimeMS(r), this._store.setPageCount((null !== (e = this._store.getPageCount()) && void 0 !== e ? e : 0) + 1), i.label = 4;
                                        case 4:
                                            return [4, Ns(this._ctx.window)];
                                        case 5:
                                            return a = i.sent(), [2, {
                                                userId: this._store.getUserId(),
                                                sessionId: this._store.getSessionId(),
                                                pageId: a,
                                                isNewSession: n
                                            }];
                                    }
                                })
                            })
                        }, e.prototype.getExistingSession = function() {
                            var e, t, n, r = this._store.getUserId();
                            if (!r || !Hs(r)) return Ds;
                            var i = this._store.getSessionId();
                            if (!i || !Hs(i)) return Ds;
                            var o = this._ctx.time.wallTime(),
                                a = null !== (e = this._store.getSessionStartTimeMS()) && void 0 !== e ? e : 0,
                                u = s.mathAbs(o - a);
                            if (0 === a || u >= 864e5) return Ds;
                            var c = null !== (t = this._store.getLastUserActivityTimeMS()) && void 0 !== t ? t : a;
                            return s.mathAbs(o - c) >= 18e5 || (null !== (n = this._store.getPageCount()) && void 0 !== n ? n : 0) >= 250 ? Ds : i
                        }, e.prototype.start = function() {
                            this.lastUserActivityTimeout.start(3e5)
                        }, e.prototype.stop = function() {
                            this.lastUserActivityTimeout.stop()
                        }, e.prototype._getUserId = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var e;
                                return (0, i.__generator)(this, function(t) {
                                    return (e = this._store.getUserId()) && Hs(e) ? [2, e] : [2, Ns(this._ctx.window)]
                                })
                            })
                        }, e.prototype._onLastUserActivity = function() {
                            var e = this._ctx.time.wallTime(),
                                t = s.mathAbs(e - this._activityModel.getMsSinceLastUserAcivity());
                            this._store.setLastUserActivityTimeMS(t), this.start()
                        }, e
                    }(),
                    Bs = function(e) {
                        function t(t, n, r, i, o, s, a) {
                            void 0 === r && (r = !0), void 0 === i && (i = new Do(t)), void 0 === o && (o = new xs(t, n, i, r)), void 0 === s && (s = On), void 0 === a && (a = ms);
                            var u, c = e.call(this, t, s, i, o, a) || this;
                            return c._protocol = n, c._domLoaded = !1, c._recordingDisabled = !1, c._integrationScriptFetched = !1, o.onShutdown(function() {
                                return c.shutdown(Me.SettingsBlocked)
                            }), c._doc = c._wnd.document, c._frameId = 0, c._identity = t.recording.identity, c._previewMode = new Ls(c._wnd, c._identity.getClientStore()), c._getCurrentSessionEnabled = Ss.NoInfoYet, c._sessionLifecycle = new Ws(t, i, c._identity), u = function(e) {
                                if (c._eventWatcher.shutdown(Me.Api), e) {
                                    var t = c._doc.getElementById(e);
                                    t && c._embedToken && t.setAttribute("_fs_embed_token", c._embedToken)
                                }
                            }, c._wnd._fs_shutdown = u, c
                        }
                        return (0, i.__extends)(t, e), t.prototype.onDomLoad = function() {
                            var t = this;
                            e.prototype.onDomLoad.call(this), this._domLoaded = !0, this.injectIntegrationScript(function() {
                                t.fireFsReady(t._recordingDisabled)
                            })
                        }, t.prototype.getReplayFlags = function() {
                            var e = L(this._wnd, "_fs_replay_flags");
                            if (/[?&]_fs_force_session=true(&|#|$)/.test(location.search) && (e += ",forceSession", this._wnd.history)) {
                                var t = location.search.replace(/(^\?|&)_fs_force_session=true(&|$)/, function(e, t, n) {
                                    return n ? t : ""
                                });
                                this._wnd.history.replaceState({}, "", this._wnd.location.href.replace(location.search, t))
                            }
                            return e
                        }, t.prototype.start = function(t, n) {
                            var r, o, s;
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                var a, u, c, h, l, d, p, f, v, g, m, y, S, w, E, b, T, I, k, C, A, x, R, O = this;
                                return (0, i.__generator)(this, function(P) {
                                    switch (P.label) {
                                        case 0:
                                            e.prototype.start.call(this, t, n), a = this.getReplayFlags(), u = rn(this._doc), c = u[0], h = u[1], M = this._wnd, U = 0, N = 0, l = null == M.screen ? [U, N] : (U = parseInt(String(M.screen.width), 10), N = parseInt(String(M.screen.height), 10), [U = isNaN(U) ? 0 : U, N = isNaN(N) ? 0 : N]), d = l[0], p = l[1], f = "", t || (f = this._identity.getUserId()), v = null !== (s = null === (o = null === (r = this._ctx) || void 0 === r ? void 0 : r.recording) || void 0 === o ? void 0 : o.preroll) && void 0 !== s ? s : -1, g = function() {
                                                return Pr(lr(O._wnd), {
                                                    source: "page",
                                                    type: "base"
                                                })
                                            }, m = function() {
                                                return Pr(O._wnd.location.href, {
                                                    source: "page",
                                                    type: "url"
                                                })
                                            }, y = function() {
                                                return "" === O._doc.referrer ? "" : Pr(O._doc.referrer, {
                                                    source: "page",
                                                    type: "referrer"
                                                })
                                            }, S = {
                                                OrgId: this._orgId,
                                                UserId: f,
                                                Url: m(),
                                                Base: g(),
                                                Width: c,
                                                Height: h,
                                                ScreenWidth: d,
                                                ScreenHeight: p,
                                                SnippetVersion: B(this._wnd),
                                                Referrer: y(),
                                                Preroll: v,
                                                Doctype: ce(this._doc),
                                                CompiledVersion: "c99041d728",
                                                CompiledTimestamp: 1661778047,
                                                AppId: this._identity.getAppId(),
                                                PreviewMode: this._previewMode.isPreviewMode() || void 0
                                            }, a && (S.ReplayFlags = a), P.label = 1;
                                        case 1:
                                            return P.trys.push([1, 8, , 9]), [4, this._protocol.page(S)];
                                        case 2:
                                            return (R = P.sent()).Flags.UseStaticSettings ? [4, this._protocol.settings({
                                                orgId: this._orgId
                                            })["catch"](function(e) {
                                                Ae.sendToBugsnag("Rec settings error", "error", {
                                                    err: e
                                                })
                                            })] : [3, 4];
                                        case 3:
                                            (w = P.sent()) && (R = (0, i.__assign)((0, i.__assign)({}, R), w)), P.label = 4;
                                        case 4:
                                            return R.Flags.UseClientSideId ? (this._identity.setCookieDomain(this._wnd, R.CookieDomain), [4, this._sessionLifecycle.createUserSessionPage()]) : [3, 6];
                                        case 5:
                                            E = P.sent(), this._sessionLifecycle.start(), R = (0, i.__assign)((0, i.__assign)({}, R), {
                                                UserIntId: E.userId,
                                                SessionIntId: E.sessionId,
                                                PageIntId: E.pageId,
                                                IsNewSession: E.isNewSession,
                                                PageStart: _()
                                            }), P.label = 6;
                                        case 6:
                                            return this.isSafeResponse(R) ? this._pendingShutdown ? [2] : (this.handleResponse(R), this.handleIdentity(R.CookieDomain, R.UserIntId, R.SessionIntId, R.PageIntId, R.EmbedToken), this._previewMode.setDomain(R.CookieDomain), this.handleIntegrationScript(), R.PreviewMode && this.maybeInjectPreviewScript(), b = function(e) {
                                                return L(e, "_fs_pagestart", "function")
                                            }(this._wnd), b && b(), this._queue.enqueueFirst(this._eventWatcher.getNavigateEvent(this._wnd.location.href, Ee.ENTRY_NAVIGATE)), T = !!R.Consented, this._queue.enqueueFirst({
                                                Kind: Ee.SYS_REPORTCONSENT,
                                                Args: [T, Pe.Document]
                                            }), I = ce(this._doc), k = m(), C = y(), A = g(), this._queue.enqueueFirst({
                                                Kind: Ee.SET_FRAME_BASE,
                                                Args: [Pr(lr(this._wnd), {
                                                    source: "event",
                                                    type: Ee.SET_FRAME_BASE
                                                }), I, k, C]
                                            }), this._queue.enqueue({
                                                Kind: Ee.PAGE_DATA,
                                                Args: [k, A, c, h, d, p, B(this._wnd), C, I, v, f, R.PageStart, ve(this._wnd), this._wnd.navigator.userAgent]
                                            }), this._queue.enqueue({
                                                Kind: Ee.SCRIPT_COMPILED_VERSION,
                                                Args: ["c99041d728"]
                                            }), this._queue.enqueue(Us({
                                                type: "default"
                                            })), [4, this._queue.startPipeline({
                                                pageId: R.PageIntId,
                                                serverPageStart: R.PageStart,
                                                isNewSession: !!R.IsNewSession
                                            })]) : [2, this.disableBecauseRecPageSaidSo()];
                                        case 7:
                                            return P.sent(), this.enqueueDocumentProperties(this._doc), this.fullyStarted(), [3, 9];
                                        case 8:
                                            return (x = P.sent()) instanceof $o && (R = x.data) && R.user_id && R.cookie_domain && R.reason_code === Qe.ReasonBlockedTrafficRamping && f !== R.user_id && this.handleIdentity(R.cookie_domain, R.user_id, "", "", ""), this.disableBecauseRecPageSaidSo(), [3, 9];
                                        case 9:
                                            return [2];
                                    }
                                    var M, U, N
                                })
                            })
                        }, t.prototype.handleIntegrationScript = function() {
                            var e = this;
                            this._integrationScriptFetched = !0, this.injectIntegrationScript(function() {
                                e.fireFsReady(e._recordingDisabled)
                            })
                        }, t.prototype.handleIdentity = function(e, t, n, r, i) {
                            var o = this._identity;
                            o.setIds(this._wnd, e, t, n), this._embedToken = i, o.getUserId(), o.getSessionId()
                        }, t.prototype.injectIntegrationScript = function(e) {
                            var t, n;
                            if (this._domLoaded && this._integrationScriptFetched)
                                if (null === (n = null === (t = this._pageRsp) || void 0 === t ? void 0 : t.Flags) || void 0 === n ? void 0 : n.FetchIntegrations) {
                                    var r = this._doc.createElement("script");
                                    r.addEventListener("load", e), r.addEventListener("error", e), r.async = !0, r.src = this._scheme + "//" + this._recHost + "/rec/integrations?OrgId=" + this._orgId, this._doc.head.appendChild(r)
                                } else e()
                        }, t.prototype.maybeInjectPreviewScript = function() {
                            var e = "FullStory-preview-script";
                            if (!this._doc.getElementById(e)) {
                                var t = this._doc.createElement("script");
                                t.id = e, t.async = !0, t.src = this._scheme + "//" + this._appHost + "/s/fspreview.js", this._doc.head.appendChild(t)
                            }
                        }, t.prototype.disableBecauseRecPageSaidSo = function() {
                            this.shutdown(Me.SettingsBlocked), this._recordingDisabled = !0, this.fireFsReady(this._recordingDisabled)
                        }, t.prototype.onMessageReceived = function(t, n) {
                            e.prototype.onMessageReceived.call(this, t, n), (null == t ? void 0 : t.parent) == this._wnd && n[0] === hs.EndPreviewMode && this._previewMode.clear()
                        }, t
                    }(Ts),
                    Vs = function() {
                        function e(e, t) {
                            void 0 === t && (t = new js(e)), this._wnd = e, this._messagePoster = t
                        }
                        return e.prototype.enqueueEvents = function(e, t) {
                            var n = null != e ? e : void 0;
                            this._messagePoster.postMessage(this._wnd.parent, [hs.EvtBundle, t, n], n)
                        }, e.prototype.startPipeline = function() {}, e.prototype.stopPipeline = function() {}, e.prototype.flush = function() {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(e) {
                                    return [2]
                                })
                            })
                        }, e.prototype.singSwanSong = function() {}, e.prototype.onShutdown = function(e) {}, e
                    }(),
                    js = function() {
                        function e(e) {
                            this.wnd = e
                        }
                        return e.prototype.postMessage = function(e, t, n) {
                            switch (t[0]) {
                                case hs.EvtBundle:
                                    _s(this.wnd, t[0], ae(t[1]), n) || ps(e, t);
                                    break;
                                case hs.RequestFrameId:
                                    _s(this.wnd, t[0], "[]", n) || ps(e, t);
                                    break;
                                default:
                                    t[0];
                            }
                        }, e
                    }(),
                    Ks = function(e) {
                        function t(t, n, r, i, o) {
                            void 0 === n && (n = new js(t.window)), void 0 === r && (r = new Vs(t.window, n)), void 0 === i && (i = On), void 0 === o && (o = ms);
                            var s = e.call(this, t, i, void 0, r, o) || this;
                            return s._messagePoster = n, s
                        }
                        return (0, i.__extends)(t, e), t.prototype.start = function(t, n) {
                            var r = this;
                            e.prototype.start.call(this, t, n), this.sendRequestForFrameId(), this._listeners.add(this._wnd, "load", !1, function() {
                                r._eventWatcher.recordingIsDetached() && r._ctx.recording.splitPage(Me.FsShutdownFrame)
                            })
                        }, t.prototype.onMessageReceived = function(t, n) {
                            if (e.prototype.onMessageReceived.call(this, t, n), t === this._wnd.parent || t === this._wnd) switch (n[0]) {
                                case hs.GreetFrame:
                                    this.sendRequestForFrameId(n[1]);
                                    break;
                                case hs.SetFrameId:
                                    try {
                                        var r = n[1];
                                        if (!r) return void Pr(location.href, {
                                            source: "log",
                                            type: "debug"
                                        });
                                        this.setFrameIdFromOutside({
                                            frameId: r,
                                            parentIds: n[2],
                                            outerStartTime: n[3],
                                            scheme: n[4],
                                            script: n[5],
                                            appHost: n[6],
                                            orgId: n[7],
                                            pageRsp: n[8],
                                            consentOverride: n[9],
                                            minimumWhen: n[10]
                                        })
                                    } catch (e) {
                                        ae(n)
                                    }
                                    break;
                                case hs.SetConsent:
                                    this.setConsent(n[1]);
                                    break;
                                case hs.InitFrameMobile:
                                    try {
                                        var i = JSON.parse(n[1]),
                                            o = i.StartTime;
                                        if (n.length > 2 && n[2]) {
                                            var s = n[2];
                                            Object.prototype.hasOwnProperty.call(s, "ProtocolVersion") && s.ProtocolVersion >= 20180723 && Object.prototype.hasOwnProperty.call(s, "OuterStartTime") && (o = s.OuterStartTime)
                                        }
                                        var a = i.Host;
                                        this.setFrameIdFromOutside({
                                            frameId: 0,
                                            parentIds: [],
                                            outerStartTime: o,
                                            scheme: "https:",
                                            script: K(a),
                                            appHost: j(a),
                                            orgId: i.OrgId,
                                            pageRsp: i.PageResponse,
                                            consentOverride: this._watcher.getConsent()
                                        })
                                    } catch (e) {
                                        ae(n)
                                    }
                            }
                        }, t.prototype.sendRequestForFrameId = function(e) {
                            this._frameId && this._frameId === e || 0 != this._frameId && this._wnd.parent && this._messagePoster.postMessage(this._wnd.parent, [hs.RequestFrameId])
                        }, t.prototype.setFrameIdFromOutside = function(e) {
                            var t, n, r = this;
                            if (this._frameId) this._frameId !== e.frameId ? (this._frameId, e.frameId, this._ctx.recording.splitPage(Me.FsShutdownFrame)) : this._frameId;
                            else if (Pr(location.href, {
                                    source: "log",
                                    type: "debug"
                                }), e.frameId, this._scheme = e.scheme, this._script = e.script, this._appHost = e.appHost, this._orgId = e.orgId, this._frameId = e.frameId, this._parentIds = e.parentIds, e.pageRsp && this.isSafeResponse(e.pageRsp)) {
                                if (!this._pendingShutdown) {
                                    var i = null !== (t = e.consentOverride) && void 0 !== t ? t : !!e.pageRsp.Consented;
                                    this.handleResponse(e.pageRsp, i), this.fireFsReady(), this._queue.enqueueFirst({
                                        Kind: Ee.SYS_REPORTCONSENT,
                                        Args: [i, Pe.Document]
                                    }), this._queue.enqueueFirst({
                                        Kind: Ee.SET_FRAME_BASE,
                                        Args: [Pr(lr(this._wnd), {
                                            source: "event",
                                            type: Ee.SET_FRAME_BASE
                                        }), ce(this._wnd.document)]
                                    }), this._queue.enqueue({
                                        Kind: Ee.SCRIPT_COMPILED_VERSION,
                                        Args: ["c99041d728"]
                                    }), this._queue.enqueue(Us({
                                        type: "default"
                                    })), this._queue.rebaseIframe(e.outerStartTime, null !== (n = e.minimumWhen) && void 0 !== n ? n : 0), this._ctx.time.setStartTime(e.outerStartTime), this._pageId && this._queue.startPipeline({
                                        pageId: this._pageId,
                                        serverPageStart: e.pageRsp.PageStart,
                                        isNewSession: !!e.pageRsp.IsNewSession,
                                        frameId: e.frameId,
                                        parentIds: e.parentIds
                                    }).then(function() {
                                        r.flushPendingChildFrameInits(), r.enqueueDocumentProperties(r._wnd.document), r.fullyStarted()
                                    })
                                }
                            } else this.shutdown(Me.FsShutdownFrame)
                        }, t
                    }(Ts),
                    zs = function() {
                        function e(e, t, n) {
                            void 0 === t && (t = function() {}), void 0 === n && (n = !1), this._doc = e, this._onWriteFailure = t, this._disableWrites = n, this._cookies = {}, this._cookies = T(this._doc)
                        }
                        return e.prototype.setDomain = function(e) {
                            this._domain = e
                        }, e.prototype.getValue = function(e, t) {
                            var n = this._cookies[e];
                            if (!n) try {
                                n = localStorage[null != t ? t : e]
                            } catch (e) {}
                            return n
                        }, e.prototype.setValue = function(e, t, n, r) {
                            if (null != this._domain && !this._disableWrites) {
                                var i = [];
                                this._setCookie(e, t, n, i), this._setLocalStorage(null != r ? r : e, t, i, e), i.length > 0 && this._onWriteFailure(i)
                            }
                        }, e.prototype.setCookie = function(e, t, n) {
                            this._setCookie(e, t, n, [])
                        }, e.prototype._setCookie = function(e, t, n, r) {
                            try {
                                var i = e + "=" + t;
                                this._domain ? i += "; domain=." + encodeURIComponent(this._domain) : i += "; domain=", i += "; Expires=" + n + "; path=/; SameSite=Strict", "https:" === location.protocol && (i += "; Secure"), this._doc.cookie = i, -1 === this._doc.cookie.indexOf(t) && r.push([e, "cookie"])
                            } finally {
                                this._cookies = T(this._doc)
                            }
                        }, e.prototype._setLocalStorage = function(e, t, n, r) {
                            try {
                                localStorage[e] = t, localStorage[e] !== t && n.push([null != r ? r : e, "localStorage"])
                            } catch (t) {
                                n.push([null != r ? r : e, "localStorage", String(t)])
                            }
                        }, Object.defineProperty(e.prototype, "cookies", {
                            get: function() {
                                return this._cookies
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e
                    }(),
                    Qs = "fs_uid",
                    Gs = function() {
                        function e(e, t, n, r) {
                            void 0 === t && (t = document), void 0 === n && (n = function() {}), void 0 === r && (r = !1), this._appId = void 0, this._clientStore = new zs(t, n, r);
                            var i = b(this._clientStore.getValue(Qs, tt));
                            i && i.orgId == e ? this._cookie = i : this._cookie = {
                                expirationAbsTimeSeconds: E(),
                                orgId: e,
                                userId: "",
                                sessionId: "",
                                appKeyHash: ""
                            }
                        }
                        return e.prototype.clear = function() {
                            this._cookie.userId = this._cookie.sessionId = this._cookie.appKeyHash = this._appId = "", this._cookie.lastUserActivityTime = this._cookie.sessionStartTime = this._cookie.pageCount = void 0, this._cookie.expirationAbsTimeSeconds = E(), this._write()
                        }, e.prototype.create = function(e) {
                            this._cookie = (0, i.__assign)((0, i.__assign)({}, this._cookie), e), this._write()
                        }, e.prototype.getOrgId = function() {
                            return this._cookie.orgId
                        }, e.prototype.getUserId = function() {
                            return this._cookie.userId
                        }, e.prototype.getSessionId = function() {
                            return this._cookie.sessionId
                        }, e.prototype.getAppKeyHash = function() {
                            return this._cookie.appKeyHash
                        }, e.prototype.getCookies = function() {
                            return this._clientStore.cookies
                        }, e.prototype.setAppId = function(e) {
                            this._appId = e, this._cookie.appKeyHash = jo(e), this._write()
                        }, e.prototype.getAppId = function() {
                            return this._appId
                        }, e.prototype.setSessionStartTimeMS = function(e) {
                            this._cookie.sessionStartTime = e, this._write()
                        }, e.prototype.getSessionStartTimeMS = function() {
                            return this._cookie.sessionStartTime
                        }, e.prototype.setLastUserActivityTimeMS = function(e) {
                            this._cookie.lastUserActivityTime = e, this._write()
                        }, e.prototype.getLastUserActivityTimeMS = function() {
                            return this._cookie.lastUserActivityTime
                        }, e.prototype.setPageCount = function(e) {
                            this._cookie.pageCount = e, this._write()
                        }, e.prototype.getPageCount = function() {
                            return this._cookie.pageCount
                        }, e.prototype.getClientStore = function() {
                            return this._clientStore
                        }, e.prototype.setCookie = function(e, t, n) {
                            void 0 === n && (n = new Date(_() + 6048e5).toUTCString()), this._clientStore.setCookie(e, t, n)
                        }, e.prototype.setCookieDomain = function(e, t) {
                            var n = t;
                            (x(n) || n.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)) && (n = "");
                            var r = function(e) {
                                return L(e, "_fs_cookie_domain")
                            }(e);
                            "string" == typeof r && (n = r), this._clientStore.setDomain(n)
                        }, e.prototype.setIds = function(e, t, n, r) {
                            this.setCookieDomain(e, t), this._cookie.userId = n, this._cookie.sessionId = r, this._write()
                        }, e.prototype.clearAppId = function() {
                            return !!this._cookie.appKeyHash && (this._appId = "", this._cookie.appKeyHash = "", this._write(), !0)
                        }, e.prototype.encode = function() {
                            var e, t, n, r, i = [this._cookie.userId, null !== (e = this._cookie.sessionId) && void 0 !== e ? e : "", "" + (null !== (t = this._cookie.sessionStartTime) && void 0 !== t ? t : ""), "" + (null !== (n = this._cookie.lastUserActivityTime) && void 0 !== n ? n : ""), "" + (null !== (r = this._cookie.pageCount) && void 0 !== r ? r : "")].join(":"),
                                o = ["", this._cookie.orgId, i];
                            return this._cookie.appKeyHash && o.push(encodeURIComponent(this._cookie.appKeyHash)), o.push("/" + this._cookie.expirationAbsTimeSeconds), o.join("#")
                        }, e.prototype._write = function() {
                            var e = this.encode(),
                                t = new Date(1e3 * this._cookie.expirationAbsTimeSeconds).toUTCString();
                            this._clientStore.setValue(Qs, e, t, tt)
                        }, e
                    }(),
                    Ys = ((qs = {})[De.Document] = {
                        assetMapId: "str",
                        releaseDatetime: "date",
                        releaseVersion: "str"
                    }, qs[De.Event] = {}, qs[De.Page] = {
                        pageName: "str",
                        releaseVersion: "str",
                        releaseDatetime: "str"
                    }, qs[De.User] = {
                        uid: "str",
                        displayName: "str",
                        email: "str"
                    }, qs),
                    Xs = {
                        str: Zs,
                        bool: Js,
                        real: $s,
                        "int": ea,
                        date: ta,
                        strs: na(Zs),
                        bools: na(Js),
                        reals: na($s),
                        ints: na(ea),
                        dates: na(ta),
                        objs: na(ra),
                        obj: ra
                    };

                function Zs(e) {
                    return "string" == typeof e
                }

                function Js(e) {
                    return "boolean" == typeof e
                }

                function $s(e) {
                    return "number" == typeof e
                }

                function ea(e) {
                    return "number" == typeof e && e - s.mathFloor(e) == 0
                }

                function ta(e) {
                    return !(!e || (e.constructor === Date ? isNaN(e) : "number" != typeof e && "string" != typeof e || isNaN(new Date(e))))
                }

                function na(e) {
                    return function(t) {
                        if (!(t instanceof Array)) return !1;
                        for (var n = 0; n < t.length; n++)
                            if (!e(t[n])) return !1;
                        return !0
                    }
                }

                function ra(e) {
                    return !!e && "object" == typeof e
                }
                var ia = /^[a-zA-Z][a-zA-Z0-9_]*$/,
                    oa = function() {
                        function e(e) {
                            this._identity = e, this._documentVars = {}
                        }
                        return e.prototype.identity = function() {
                            return this._identity
                        }, e.prototype.unloadCrossPageVars = function(e) {
                            switch (e) {
                                case Me.Hibernation:
                                case Me.Size:
                                    break;
                                default:
                                    this._lastPageVars = void 0;
                            }
                        }, e.prototype.getCrossPageVars = function() {
                            return this._lastPageVars
                        }, e.prototype.getDocumentVars = function() {
                            var e, t = {},
                                n = void 0;
                            for (var r in this._documentVars) {
                                var i = this._documentVars[r],
                                    o = i.value;
                                if (void 0 === (h = i.apiSource)) {
                                    var s = null != n ? n : {};
                                    s[r] = o, n = s
                                } else {
                                    var a = null !== (e = t[h]) && void 0 !== e ? e : {};
                                    a[r] = o, t[h] = a
                                }
                            }
                            var u = [],
                                c = function(e) {
                                    e && u.push(e)
                                };
                            for (var h in n && c(this._buildVarRawEvent(De.Document, {
                                    PayloadToSend: n,
                                    ValidationErrors: []
                                })), t) c(this._buildVarRawEvent(De.Document, {
                                PayloadToSend: t[h],
                                ValidationErrors: []
                            }, h));
                            return u
                        }, e.prototype.api = function(e) {
                            var t, n = !1,
                                r = [],
                                i = function(e) {
                                    e && r.push(e)
                                };
                            try {
                                var o = function(e) {
                                        switch (e.operation) {
                                            case m.V2.OperationName.TrackEvent:
                                                return De.Event;
                                            case m.V2.OperationName.SetPage:
                                                return De.Page;
                                            case m.V2.OperationName.SetProperties:
                                                var t = e.option.type;
                                                switch (t) {
                                                    case De.Document:
                                                    case De.Page:
                                                    case De.User:
                                                        return t;
                                                    case De.Event:
                                                        throw new Error("Invalid scope: Event");
                                                    default:
                                                        return (0, or.nt)(t, "Invalid scope: " + t);
                                                }
                                            default:
                                                (0, or.nt)(e, "Unsupported");
                                        }
                                    }(e),
                                    a = null === (t = e.source) || void 0 === t ? void 0 : t.integration;
                                switch (o) {
                                    case De.Document:
                                        var u = e.option;
                                        if (!(h = this._updateDocumentVars(sa(o, u.properties), a))) break;
                                        i(this._buildVarRawEvent(o, h, a));
                                        break;
                                    case De.Event:
                                        var c = (u = e.option).name;
                                        if ("string" != typeof c) break;
                                        la(e.source, "event", i), i(this._buildVarRawEvent(o, sa(o, u.properties), a, c));
                                        break;
                                    case De.Page:
                                        var h = (u = e.option).properties || u;
                                        this._lastPageVars = this._buildVarRawEvent(o, sa(o, h), a), i(this._lastPageVars);
                                        break;
                                    case De.User:
                                        if ("object" != typeof(u = e.option).properties) u.properties, ae(u.properties);
                                        else if ("uid" in u.properties) {
                                            var l = u.properties.uid;
                                            if (!1 === l) this._identity.clearAppId() && (n = !0), delete u.properties.uid;
                                            else {
                                                var d = function(e, t) {
                                                        var n = e;
                                                        if ("number" == typeof n && s.mathFloor(n) == n && (n = "" + n), "string" != typeof n) return [void 0, We.FsId];
                                                        var r = n.trim();
                                                        if (y.indexOf(r.toLowerCase()) >= 0) return [void 0, We.FsId];
                                                        var i = jo(r),
                                                            o = void 0;
                                                        return t && t._cookie.appKeyHash && t._cookie.appKeyHash !== i && t._cookie.appKeyHash !== r && (t._cookie.appKeyHash, o = We.NewUid), [r, o]
                                                    }(l, this._identity),
                                                    p = d[0],
                                                    f = d[1];
                                                if (!p) return We.FsId, {
                                                    events: r
                                                };
                                                u.properties.uid = p, this._identity.setAppId(u.properties.uid), f === We.NewUid && (n = !0)
                                            }
                                        }
                                        la(e.source, "setVars", i), i(this._buildVarRawEvent(o, sa(o, u.properties), a));
                                        break;
                                    default:
                                        (0, or.nt)(o, "Unsupported");
                                }
                            } catch (t) {
                                e.operation, t.message
                            }
                            return {
                                events: r,
                                reidentify: n
                            }
                        }, e.prototype._buildVarRawEvent = function(e, t, n, r) {
                            var i = ae(t.PayloadToSend),
                                o = !!n && "fs" !== n;
                            switch (e) {
                                case De.Event:
                                    return {
                                        When: 0,
                                        Kind: Ee.SYS_CUSTOM,
                                        Args: o ? [r, i, n] : [r, i]
                                    };
                                case De.Document:
                                case De.Page:
                                case De.User:
                                    return {
                                        When: 0,
                                        Kind: Ee.SYS_SETVAR,
                                        Args: o ? [e, i, n] : [e, i]
                                    };
                                default:
                                    (0, or.nt)(e, "Unsupported");
                            }
                        }, e.prototype._updateDocumentVars = function(e, t) {
                            var n = e.PayloadToSend;
                            if (n && "object" == typeof n) {
                                var r = 0,
                                    i = {};
                                for (var o in n)
                                    if (!(o in this._documentVars)) {
                                        var s = n[o];
                                        this._documentVars[o] = {
                                            value: s,
                                            apiSource: t
                                        }, i[o] = s, r++
                                    }
                                if (0 !== r) return {
                                    PayloadToSend: i,
                                    ValidationErrors: e.ValidationErrors
                                }
                            }
                        }, e
                    }();

                function sa(e, t) {
                    var n = 1500;
                    return aa(function() {
                        return --n
                    }, e, t)
                }
                var aa = function(e, t, n) {
                    var r, i, o = {
                            PayloadToSend: {},
                            ValidationErrors: []
                        },
                        a = function(n) {
                            var r = aa(e, t, n);
                            return o.ValidationErrors = o.ValidationErrors.concat(r.ValidationErrors), r.PayloadToSend
                        };
                    for (var u in n)
                        if (s.objectHasOwnProp(n, u)) {
                            if (e() <= 0) break;
                            var c = n[u],
                                h = ca(t, u, c, o.ValidationErrors);
                            if (h) {
                                var l = h.name;
                                if ("obj" !== h.type) {
                                    if ("objs" !== h.type) o.PayloadToSend[l] = ua(h.type, h.value);
                                    else {
                                        t != De.Event && o.ValidationErrors.push({
                                            Type: "vartype",
                                            FieldName: l,
                                            ValueType: "Array<Object> (unsupported)"
                                        });
                                        for (var d = [], p = 0; p < h.value.length; p++)(f = a(h.value[p])) && d.push(f);
                                        d.length > 0 && (o.PayloadToSend[l] = d)
                                    }
                                } else {
                                    var f = a(h.value),
                                        _ = (i = "_obj").length > (r = u).length || r.substring(r.length - i.length) != i ? l.substring(0, l.length - "_obj".length) : l;
                                    o.PayloadToSend[_] = f
                                }
                            } else o.PayloadToSend[u] = ua("str", c)
                        }
                    return o
                };

                function ua(e, t) {
                    var n = t;
                    return "str" == e && "string" == typeof n && (n = n.trim()), null == n || "date" != e && n.constructor != Date || (n = function(e) {
                        var t = e.constructor === Date ? e : new Date(e);
                        try {
                            return t.toISOString()
                        } catch (e) {
                            return null
                        }
                    }(n)), n
                }

                function ca(e, t, n, r) {
                    var i = t,
                        o = i,
                        a = typeof n;
                    if ("undefined" === a) return r.push({
                        Type: "vartype",
                        FieldName: i,
                        ValueType: a + " (unsupported)"
                    }), null;
                    var u = Ys[e];
                    if (s.objectHasOwnProp(u, i)) return {
                        name: i,
                        type: u[i],
                        value: n
                    };
                    var c = i.lastIndexOf("_");
                    if (-1 == c || !ha(i.substring(c + 1))) {
                        var h = function(e) {
                            for (var t in Xs)
                                if (Xs[t](e)) return t;
                            return null
                        }(n);
                        if (null == h) return n ? r.push({
                            Type: "vartype",
                            FieldName: i
                        }) : r.push({
                            Type: "vartype",
                            FieldName: i,
                            ValueType: "null (unsupported)"
                        }), null;
                        c = i.length, i = i + "_" + h
                    }
                    var l = i.substring(0, c),
                        d = i.substring(c + 1);
                    if ("object" === a && !n) return r.push({
                        Type: "vartype",
                        FieldName: o,
                        ValueType: "null (unsupported)"
                    }), null;
                    if (!ia.test(l)) {
                        l = l.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]+/, ""), /[0-9]/.test(l[0]) && (l = l.substring(1)), r.push({
                            Type: "varname",
                            FieldName: o
                        });
                        var p = l + "_" + d;
                        if (ia.source, "" == l) return null;
                        i = p
                    }
                    return ha(d) ? function(e, t) {
                        return Xs[e](t)
                    }(d, n) ? {
                        name: i,
                        type: d,
                        value: n
                    } : (ae(n), "number" === a ? a = n % 1 == 0 ? "integer" : "real" : "object" == a && null != n && n.constructor == Date && (a = isNaN(n) ? "invalid date" : "date"), r.push({
                        Type: "vartype",
                        FieldName: o,
                        ValueType: a
                    }), null) : (r.push({
                        Type: "varname",
                        FieldName: o
                    }), null)
                }

                function ha(e) {
                    return !!Xs[e]
                }

                function la(e, t, n) {
                    var r = Us({
                        source: e,
                        type: "api",
                        entrypoint: t
                    });
                    r && n({
                        When: 0,
                        Kind: r.Kind,
                        Args: r.Args
                    })
                }

                function da(e, t) {
                    return (0, i.__awaiter)(this, void 0, Ft, function() {
                        var n, o, s, u, c;
                        return (0, i.__generator)(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    if (h.trys.push([0, 2, , 3]), Yn || Zn || function(e) {
                                            return !!L(e, "_fs_use_polyfilled_apis", "boolean")
                                        }(e)) return [2, (0, i.__assign)((0, i.__assign)({}, t), {
                                        status: r.Clean
                                    })];
                                    if (!e.document || t.status !== r.Unknown) return [2, t];
                                    if (n = function(e, t) {
                                            var n = t.functions,
                                                o = {},
                                                s = (0, i.__assign)({}, t.helpers);
                                            if (s.functionToString = function(e, t) {
                                                    var n, r, i = null === (n = e["__core-js_shared__"]) || void 0 === n ? void 0 : n.inspectSource;
                                                    if (i) {
                                                        var o = function() {
                                                            return i(this)
                                                        };
                                                        if (fa(o, 2)) return o
                                                    }
                                                    var s = null === (r = e["__core-js_shared__"]) || void 0 === r ? void 0 : r["native-function-to-string"];
                                                    if (fa(s)) return s;
                                                    var a = t.__zone_symbol__OriginalDelegate;
                                                    return fa(a) ? a : fa(t) ? t : void 0
                                                }(e, s.functionToString), !s.functionToString) return t;
                                            var a = !1;
                                            for (var u in n)
                                                if (n[u]) {
                                                    if (o[u] = ga(s.functionToString, n[u]), o[u] || (o[u] = ma(s.functionToString, s, u)), !o[u]) return t;
                                                    o[u] !== n[u] && (a = !0)
                                                } else o[u] = void 0;
                                            return {
                                                status: r.Clean,
                                                functions: a ? o : n,
                                                helpers: s,
                                                errors: []
                                            }
                                        }(e, t), n.status === r.Clean) return [2, n];
                                    (o = e.document.createElement("iframe")).id = "FullStory-iframe", o.className = "fs-hide", o.style.display = "none", s = e.document.body || e.document.head || e.document.documentElement || e.document;
                                    try {
                                        s.appendChild(o)
                                    } catch (e) {
                                        return [2, (0, i.__assign)((0, i.__assign)({}, t), {
                                            status: r.Clean
                                        })]
                                    }
                                    return o.contentWindow ? (u = a(o.contentWindow, r.Clean), o.parentNode && o.parentNode.removeChild(o), u.status === r.UnrecoverableFailure ? [2, (0, i.__assign)((0, i.__assign)({}, t), {
                                        status: r.Clean
                                    })] : [4, pa(u, t)]) : [2, (0, i.__assign)((0, i.__assign)({}, t), {
                                        status: r.Clean
                                    })];
                                case 1:
                                    return [2, h.sent()];
                                case 2:
                                    return c = h.sent(), Ae.sendToBugsnag(c, "error"), [2, (0, i.__assign)((0, i.__assign)({}, t), {
                                        status: r.Clean
                                    })];
                                case 3:
                                    return [2];
                            }
                        })
                    })
                }

                function pa(e, t) {
                    var n, o = new Ft(function(e) {
                        return n = e
                    });
                    return setTimeout(function() {
                        try {
                            e.functions.jsonParse("[]").push(0)
                        } catch (e) {
                            n((0, i.__assign)((0, i.__assign)({}, t), {
                                status: r.Clean
                            }))
                        }
                        n(e)
                    }), o
                }

                function fa(e, t) {
                    var n;
                    if (void 0 === t && (t = 0), !e) return !1;
                    try {
                        e.call(function() {})
                    } catch (e) {
                        return !1
                    }
                    var r = function(e) {
                            try {
                                return void e.call(null)
                            } catch (e) {
                                return (e.stack || "").replace(/__fs_nomangle_check_stack(.|\n)*$/, "")
                            }
                        },
                        i = void 0;
                    0 !== t && "number" == typeof Error.stackTraceLimit && (i = Error.stackTraceLimit, Error.stackTraceLimit = Number.POSITIVE_INFINITY);
                    var o = [function() {
                            throw new Error("")
                        }, e],
                        s = function __fs_nomangle_check_stack() {
                            return o.map(r)
                        }(),
                        a = s[0],
                        u = s[1];
                    if (void 0 !== i && (Error.stackTraceLimit = i), !a || !u) return !1;
                    for (var c = "\n".charCodeAt(0), h = a.length > u.length ? u.length : a.length, l = 1, d = l; d < h; d++) {
                        var p = a.charCodeAt(a.length - d),
                            f = u.charCodeAt(u.length - d);
                        if (p != f) break;
                        f != c && d != h - 1 || (l = d)
                    }
                    return (null !== (n = u.slice(0, u.length - l + 1).match(/\.js:\d+([:)]|$)/gm)) && void 0 !== n ? n : []).length <= t
                }

                function _a(e, t) {
                    return e.call(t).indexOf("[native code]") >= 0
                }
                var va = ["__zone_symbol__OriginalDelegate", "nr@original"];

                function ga(e, t) {
                    if (t) {
                        for (var n = 0, r = va; n < r.length; n++) {
                            var i = t[r[n]];
                            if ("function" == typeof i && _a(e, i)) return i
                        }
                        return _a(e, t) ? t : void 0
                    }
                }

                function ma(e, t, n) {
                    if ("arrayIsArray" === n) {
                        var r = ga(e, t.objectToString);
                        if (!r) return;
                        return t.objectToString = r,
                            function(e) {
                                return "[object Array]" == r.call(e)
                            }
                    }
                }
                var ya = function() {
                    function e(e, t) {
                        void 0 === t && (t = function(e) {
                            return new WebSocket(e)
                        }), this._newSock = t, this._connecting = !1, this._connected = !1, this._queue = {}, this._seq = 1, this._ctx = e, this._scheme = e.options.scheme, this._cdnHost = e.options.cdnHost
                    }
                    return e.isSupported = function() {
                        return "WebSocket" in window
                    }, e.prototype.page = function(e) {
                        var t = this;
                        return new Ft(function(n, r) {
                            t.request({
                                Cmd: Xe.Page,
                                Page: e
                            }, cs(t._ctx), function(e) {
                                e.Cmd === Ze.Page ? n(e.Page) : (e.Cmd, r(e.Cmd))
                            }, r)
                        })
                    }, e.prototype.settings = function(e) {
                        return us(this._scheme, this._cdnHost, e)
                    }, e.prototype.bundle = function(e) {
                        return (0, i.__awaiter)(this, void 0, Ft, function() {
                            var t, n, r, o = this;
                            return (0, i.__generator)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, Bt()];
                                    case 1:
                                        return i.sent(), t = e.deltaT, n = e.serverPageStart, r = e.serverBundleTime, [2, new Ft(function(i, s) {
                                            var a = cs(o._ctx);
                                            Sa(e.recHost, a);
                                            var u = o.request({
                                                Cmd: Xe.Bundle,
                                                Bundle: {
                                                    Bundle: e.bundle,
                                                    DeltaT: null === t ? void 0 : t,
                                                    OrgId: e.orgId,
                                                    PageId: e.pageId,
                                                    PageStart: null == n ? void 0 : n,
                                                    PrevBundleTime: null == r ? void 0 : r,
                                                    Seq: e.bundle.Seq,
                                                    SessionId: e.sessionId,
                                                    UserId: e.userId
                                                }
                                            }, a, function(e) {
                                                e.Cmd === Ze.Bundle ? i([null != u ? u : 0, e.Bundle]) : e.Cmd
                                            }, s)
                                        })];
                                }
                            })
                        })
                    }, e.prototype.bundleBeacon = function(e) {
                        var t = cs(this._ctx);
                        return Sa(e.recHost, t), as(this._scheme, t, e)
                    }, e.prototype.exponentialBackoffMs = function(e, t) {
                        var n = s.mathMin(Je.BackoffMax, 5e3 * s.mathPow(2, e));
                        return t ? n + .25 * s.mathRandom() * n : n
                    }, e.prototype.request = function(e, t, n, r) {
                        var i = e;
                        i.Seq = this._seq++;
                        var o = ae(i);
                        return this._queue[i.Seq] = {
                            payload: o,
                            win: n,
                            lose: r
                        }, this.maybeConnect(t), o.length
                    }, e.prototype.handleMessage = function(e) {
                        var t;
                        try {
                            t = he(e)
                        } catch (e) {
                            return
                        }
                        var n = this._queue[t.Seq];
                        delete this._queue[t.Seq], n ? t.Cmd === Ze.Error ? (t.Fail.Error, n.lose(new $o(t.Fail.Status, t.Fail.Error))) : n.win(t) : t.Seq
                    }, e.prototype.drainQueue = function() {
                        if (this._connected && this._sock)
                            for (var e in this._queue) {
                                var t = this._queue[e];
                                t.sent || (this._sock.send(t.payload), t.sent = !0)
                            }
                    }, e.prototype.failPending = function() {
                        for (var e in this._queue) {
                            var t = this._queue[e];
                            t.sent && (delete this._queue[e], t.lose(new $o(0, "Pending request")))
                        }
                    }, e.prototype.maybeConnect = function(e) {
                        var t = this;
                        if (this._connected) this.drainQueue();
                        else if (!this._connecting) {
                            this._connecting = !0;
                            var n = ("https:" == this._scheme ? "wss:" : "ws:") + "//" + e + "/rec/sock";
                            this._sock = this._newSock(n), this._sock.onopen = function(e) {
                                t._connecting = !1, t._connected = !0, t.drainQueue()
                            }, this._sock.onmessage = function(e) {
                                t.handleMessage(e.data), t.drainQueue()
                            }, this._sock.onclose = function(e) {
                                t._connecting = t._connected = !1, t.failPending()
                            }, this._sock.onerror = function(e) {
                                t._connecting = t._connected = !1, t.failPending()
                            }
                        }
                    }, e
                }();

                function Sa(e, t) {
                    e && Re(t === e, "sock recHost mismatch")
                }
                var wa = JSON.parse("{\"W1MPQ\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/auth/recover/)(.*)\"}]}}],\"K54HA\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/verify-email/)(.*)\"}]}}],\"AGQFM\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/reset-password/)(.*)\"}]}}],\"95NJ7\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/reset-password/)(.*)\"}]}}],\"GBNRN\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/reset-password/)(.*)\"}]}}],\"RV68C\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/dl/)(.*)\"}]}}],\"QS8RG\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/visitor/)(.*)\"},{\"Expression\":\"(/account/)(.*)\"},{\"Expression\":\"(/parentAccount/)(.*)\"}]}}],\"FP60X\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/retailer/)(.*)\"},{\"Expression\":\"(/ocadotech/)(.*)\"},{\"Expression\":\"(/serviceAccounts/)(.*)\"}]}}],\"7R98D\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/signup/)(.*)\"}]}}],\"WEN2C\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/studies/)(.*)\"},{\"Expression\":\"(/EU/)(.*)\"},{\"Expression\":\"(/findings/)(.*)\"}]}}],\"WQF2B\":[{\"Exclude\":{\"Path\":[{\"Expression\":\"(/app/accounts/)(.*)\"},{\"Expression\":\"(/app/order/)(.*)\"},{\"Expression\":\"(/app/trade/)(.*)\"}]}}],\"QKM7G\":[{\"If\":[{\"Path\":[{\"Expression\":\"/hc/en-us/requests/new\"}]}],\"Exclude\":{\"QueryParam\":[{\"Expression\":\"(tf_)(.*)\"}]}}],\"14WAK8\":[{\"If\":[{\"Host\":[{\"Expression\":\"px.scs.splunk.com\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"^/[^/]*\"}]}},{\"If\":[{\"Host\":[{\"Expression\":\"api.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"api.playground.scs.splunk.com\"}]}],\"Exclude\":{\"Host\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}],\"Path\":[{\"Expression\":\".*\"}],\"Query\":[{\"Expression\":\".*\"}]}}],\"141MBA\":[{\"If\":[{\"Host\":[{\"Expression\":\"px.scs.splunk.com\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"^/[^/]*\"}]}},{\"If\":[{\"Host\":[{\"Expression\":\"api.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"api.playground.scs.splunk.com\"}]}],\"Exclude\":{\"Host\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}],\"Path\":[{\"Expression\":\".*\"}],\"Query\":[{\"Expression\":\".*\"}]}}],\"138HN0\":[{\"If\":[{\"Host\":[{\"Expression\":\"px.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"px.playground.scs.splunk.com\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"^/[^/]*\"}]}},{\"If\":[{\"Host\":[{\"Expression\":\"api.scs.splunk\"}]},{\"Host\":[{\"Expression\":\"api.playground.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"api.staging.scs.splunk.com\"}]}],\"Exclude\":{\"Host\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}],\"Path\":[{\"Expression\":\".*\"}],\"Query\":[{\"Expression\":\".*\"}]}}],\"18789V\":[{\"If\":[{\"Host\":[{\"Expression\":\"cae.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"cae.playground.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"cae.staging.scs.splunk.com\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"^/[^/]*\"}]}},{\"If\":[{\"Host\":[{\"Expression\":\"api.playground.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"api.scs.splunk.com\"}]},{\"Host\":[{\"Expression\":\"api.staging.scs.splunk.com\"}]}],\"Exclude\":{\"Host\":[{\"Expression\":\"()(.*).scs.splunk.com\"}],\"Path\":[{\"Expression\":\".*\"}],\"Query\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}]}}],\"o-19X3N0-na1\":[{\"If\":[{\"Path\":[{\"Expression\":\"/account/recurringPayment/.*\"}]},{\"Path\":[{\"Expression\":\"/account/payNow/.*\"}]},{\"Path\":[{\"Expression\":\"/account/notifications/.*\"}]},{\"Path\":[{\"Expression\":\"/account/paymentMethod/.*\"}]},{\"Path\":[{\"Expression\":\"/account/trustAccount/.*\"}]},{\"Path\":[{\"Expression\":\"/testTransactions/.*\"}]},{\"Path\":[{\"Expression\":\"/api/.*\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"(/(?:account/recurringPayment|account/payNow|api|account/notifications|account/paymentMethod|account/trustAccount|testTransactions)/)(.*)\"}],\"Query\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}]}}],\"1878HN\":[{\"Exclude\":{\"Host\":[{\"Expression\":\".*\"}]}},{\"If\":[{\"Path\":[{\"Expression\":\"/app\"}]}],\"Exclude\":{\"Hash\":[{\"Expression\":\"(deployments/?)(.*)\"}]}},{\"If\":[{\"Path\":[{\"Expression\":\"/deployments\"}]},{\"Path\":[{\"Expression\":\"/authentication/users\"}]}],\"Exclude\":{\"Query\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}]}}],\"ZHBMT\":[{\"If\":[{\"Path\":[{\"Expression\":\"/signup/success/.*\"}]},{\"Path\":[{\"Expression\":\"/signup/resend-activation.*\"}]}],\"Exclude\":{\"Query\":[{\"Expression\":\".*\"}]}}],\"12FMQA\":[{\"If\":[{\"Host\":[{\"Expression\":\"api.porsche.com\"}],\"Path\":[{\"Expression\":\"/vehicles/.*\"}]},{\"Host\":[{\"Expression\":\"api.porsche.com\"}],\"Path\":[{\"Expression\":\"/sloffermgm-datavolume/.*\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"(^/(?:vehicles|sloffermgm-datavolume)/)(.*)\"}],\"QueryParam\":[{\"Expression\":\".*\"}],\"Hash\":[{\"Expression\":\".*\"}]}},{\"If\":[{\"Host\":[{\"Expression\":\"signup.porsche.com\",\"Path\":\".*confirm/\"}]}],\"Exclude\":{\"Path\":[{\"Expression\":\"(confirm/)(.*)\"}]}}]}"),
                    Ea = [{
                        Exclude: {
                            Hash: [{
                                Expression: "#.*"
                            }],
                            QueryParam: [{
                                Expression: "(password.*=)(.*)"
                            }, {
                                Expression: "(token.*=)(.*)"
                            }, {
                                Expression: "^(jwt=)(.*)"
                            }, {
                                Expression: "^(code=)(.*)"
                            }]
                        }
                    }],
                    ba = {};
                for (var Ta in wa) {
                    var Ia = wa[Ta];
                    ba[Ta] = Ea.concat(Ia)
                }
                var ka, Ca, Aa, xa, Ra = ba,
                    Oa = (Ca = (ka = window.navigator).vendor, Aa = void 0 !== window.opr, xa = ka.userAgent.indexOf("Edge") > -1, !!ka.userAgent.match("CriOS") || "Google Inc." === Ca && !Aa && !xa);

                function Pa(e) {
                    if (!Oa) return !1;
                    var t = window.navigator.userAgent.match(/Chrome\/(\d+)/);
                    return !!t && parseInt(t[1], 10) < e
                }

                function Ma(e, t) {
                    switch (e) {
                        case "trackEvent":
                        case "getSession":
                        case "source":
                        case "observe":
                        case "restart":
                        case "setIdentity":
                        case "setConfig":
                        case "setPage":
                        case "shutdown":
                            return {
                                operation: e,
                                option: t
                            };
                        case "stat":
                            return {
                                operation: e,
                                option: {
                                    event_type: (n = t).eventType || n.event_type,
                                    properties: n.payload || n.properties
                                }
                            };
                        case "log":
                            var n = t;
                            return s.arrayIsArray(t) && (n = {
                                level: t[0],
                                msg: t[1]
                            }), {
                                operation: e,
                                option: n
                            };
                        case "setVars":
                        case "setProperties":
                            var r = m.V2.OperationName.SetProperties;
                            return n = t, s.arrayIsArray(t) && (n = {
                                type: t[0],
                                properties: i = t[1]
                            }), {
                                operation: r,
                                option: n
                            };
                        case "event":
                            return n = t, t && "object" == typeof t && "n" in t && (n = {
                                name: t.n,
                                properties: t.p
                            }), {
                                operation: r = m.V2.OperationName.TrackEvent,
                                option: n
                            };
                        case "user":
                            var i = t;
                            return {
                                operation: r = m.V2.OperationName.SetProperties,
                                option: {
                                    type: "user",
                                    properties: i
                                }
                            };
                        case "consent":
                            var o = t;
                            return {
                                operation: r = m.V2.OperationName.SetIdentity,
                                option: {
                                    consent: o
                                }
                            };
                        case "rec":
                            return t ? {
                                operation: m.V2.OperationName.Restart
                            } : {
                                operation: r = m.V2.OperationName.Shutdown
                            };
                    }
                }
                /Firefox/.test(window.navigator.userAgent), Pa(23), Pa(38), Pa(57), Pa(60);
                var La = z(function() {}),
                    Ua = {
                        commit: La,
                        discard: La
                    },
                    Na = m.V2.EventTypes,
                    Fa = m.V2.EventTypeName,
                    Ha = function() {
                        function e() {
                            this._callbacks = new Map
                        }
                        return e.prototype.registerListener = function(e, t) {
                            var n;
                            if (-1 === Na.indexOf(e) || !t) throw new Error("Invalid event type or missing callback.");
                            var r = {
                                    disconnected: !1,
                                    callback: t
                                },
                                i = (null !== (n = this._callbacks.get(e)) && void 0 !== n ? n : []).filter(function(e) {
                                    return !e.disconnected
                                });
                            return i.push(r), this._callbacks.set(e, i), {
                                disconnect: function() {
                                    r.disconnected = !0
                                }
                            }
                        }, e.prototype.hasListeners = function(e) {
                            return !!this._callbacks.has(e) && this._callbacks.get(e).some(function(e) {
                                return !e.disconnected
                            })
                        }, e.prototype.takeRecords = function(e) {
                            var t, n = null !== (t = this._callbacks.get(e.type)) && void 0 !== t ? t : [];
                            if (0 !== n.length)
                                for (var r = 0, i = n; r < i.length; r++) {
                                    var o = i[r],
                                        s = o.disconnected,
                                        a = o.callback;
                                    if (!s) try {
                                        a(e.data)
                                    } catch (e) {
                                        Ae.sendToBugsnag("Recording observer callback error", "error", {
                                            err: e
                                        })
                                    }
                                }
                        }, e
                    }(),
                    qa = function() {
                        function e(e) {
                            var t = this;
                            this.observer = e, this._queue = [], this._scheduler = new fo(function() {
                                t._onFlush()
                            })
                        }
                        return e.prototype.addEvent = function(e, t) {
                            this.observer.hasListeners(e) && (this._queue.push({
                                type: e,
                                data: t
                            }), this._scheduler.schedule())
                        }, e.prototype.onStart = function(e, t) {
                            this.addEvent(Fa.START, {
                                sessionUrl: e,
                                settings: t
                            })
                        }, e.prototype.onShutdown = function(e) {
                            this.addEvent(Fa.SHUTDOWN, {
                                reason: e
                            })
                        }, e.prototype.onBundleSent = function(e) {
                            this.addEvent(Fa.INTERNAL_BUNDLE, {
                                size: e
                            })
                        }, e.prototype._onFlush = function() {
                            for (var e = 0, t = this._queue; e < t.length; e++) {
                                var n = t[e];
                                this.observer.takeRecords(n)
                            }
                            this._queue = []
                        }, e
                    }(),
                    Da = function() {
                        function e() {}
                        return e.prototype.createTopRecorder = function(e) {
                            var t = L(e.window, "_fs_use_socket", "boolean") && ya.isSupported() ? new ya(e) : new ts(e);
                            return new Bs(e, t)
                        }, e.prototype.createInnerRecorder = function(e) {
                            return new Ks(e)
                        }, e
                    }(),
                    Wa = [m.V2.OperationName.Source, m.V2.OperationName.TrackEvent],
                    Ba = function() {
                        function e(e, t) {
                            void 0 === e && (e = window), void 0 === t && (t = new Da), this.wnd = e, this.recMaker = t, this.scheme = "https:", this.domDoneLoaded = !1, this.identity = null, this.waitingOnStart = !1
                        }
                        return e.prototype.init = function() {
                            var e, t;
                            C(this.wnd) || (e = this.wnd, t = k(this.wnd), e._fs_loaded = t, t in e || (e[t] = {}), function(e) {
                                (0, i.__awaiter)(this, void 0, Ft, function() {
                                    var t;
                                    return (0, i.__generator)(this, function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, da(e, s.snapshot)];
                                            case 1:
                                                return t = n.sent(), s.rebuildFromSnapshot(t), [2];
                                        }
                                    })
                                })
                            }(this.wnd), this.initApi(), this.start())
                        }, e.prototype.initRecSettings = function(e) {
                            this.orgId = e.orgId, this.script = e.script, this.recHost = e.recHost, this.cdnHost = e.cdnHost, this.appHost = e.appHost
                        }, e.prototype.log = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this.handleApiOperation([m.V1.OperationName.Log, e])
                        }, e.prototype.getCurrentSessionURL = function(e) {
                            return this.getSession(e ? "url.now" : "url")
                        }, e.prototype.getCurrentSession = function() {
                            return this.getSession("id")
                        }, e.prototype.getSession = function(e) {
                            return this.recorder ? ja(this.recorder, e) : null
                        }, e.prototype.enableConsole = function() {
                            this.handleApiOperation([m.V2.OperationName.SetConfig, {
                                console: !0
                            }])
                        }, e.prototype.disableConsole = function() {
                            this.handleApiOperation([m.V2.OperationName.SetConfig, {
                                console: !1
                            }])
                        }, e.prototype.shutdown = function(e) {
                            var t;
                            void 0 === e && (e = Me.Api), this.recorder && !this.deferredStart && (this.recorder.shutdown(e), this.recorder = null, !this.inFrame() && this.vars && this.vars.unloadCrossPageVars(e), null === (t = this.recordingSubject) || void 0 === t || t.onShutdown(e))
                        }, e.prototype.restart = function() {
                            if (this.deferredStart) return this.deferredStart(), void(this.deferredStart = null);
                            this.recorder || this.onCreateRecorder(!0)
                        }, e.prototype.splitPage = function(e, t) {
                            return (0, i.__awaiter)(this, void 0, Ft, function() {
                                return (0, i.__generator)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t && null == this.identity ? [2] : this.waitingOnStart ? (this.splitPending = [e, t], [2]) : (this.shutdown(e), [4, qt(0)]);
                                        case 1:
                                            return n.sent(), [4, qt(0)];
                                        case 2:
                                            return n.sent(), t && this.identity && this.identity.clear(), this.restart(), [2];
                                    }
                                })
                            })
                        }, e.prototype._api = function(e, t, n, r, i) {
                            var o;
                            return this.handleApiOperation([e, t, n, r || function(e) {
                                o = e
                            }, i]), o
                        }, e.prototype.executeApiSequence = function(e, t) {
                            for (var n, r, i, o, s, a = this, u = [], c = 0, h = t; c < h.length; c++) {
                                var l = h[c],
                                    d = l[0],
                                    p = l[1],
                                    f = l[2],
                                    _ = l[3],
                                    v = l[4];
                                (P = Ma(d, p)) && (P.source = "string" == typeof f ? {
                                    integration: f
                                } : f, P.resolve = _, P.reject = v, u.push(P))
                            }
                            for (var g, y, S = [], w = !1, E = !1, b = [], T = [], I = function(e) {
                                    if (a.vars) {
                                        var t = a.vars.api(e),
                                            n = t.events;
                                        t.reidentify && (S = [], y = void 0, w = !0, T.push.apply(T, b), b = []), S.push.apply(S, n)
                                    }
                                }, k = function(e, t) {
                                    b.push(function(e, t) {
                                        return e ? {
                                            commit: z(function() {
                                                return e(t)
                                            }),
                                            discard: z(function() {
                                                return e(t)
                                            })
                                        } : Ua
                                    }(e.resolve, t))
                                }, C = function(e, t) {
                                    b.push(function(e, t) {
                                        return e ? {
                                            commit: z(function() {
                                                return e(t)
                                            }),
                                            discard: z(function() {
                                                return e(t)
                                            })
                                        } : Ua
                                    }(e.reject, t))
                                }, A = function(t) {
                                    try {
                                        if (t.operation, x.inFrame() && -1 === Wa.indexOf(t.operation)) {
                                            var a = "FS." + t.operation + "() is not available in an inner frame";
                                            return E || (E = !0), C(t, new Error(a)), "continue"
                                        }
                                        switch (t.operation) {
                                            case m.V2.OperationName.Restart:
                                                g = !0, k(t);
                                                break;
                                            case m.V2.OperationName.Shutdown:
                                                g = !1, k(t);
                                                break;
                                            case m.V2.OperationName.Log:
                                                var u = t.option,
                                                    c = u.level,
                                                    h = (a = u.msg, e.console().logEvent(c, a ? [a] : [], "fs"));
                                                h && S.push(h), k(t);
                                                break;
                                            case m.V2.OperationName.SetIdentity:
                                                var l = function(e) {
                                                    I({
                                                        operation: m.V2.OperationName.SetProperties,
                                                        option: e,
                                                        source: t.source,
                                                        resolve: t.resolve,
                                                        reject: t.reject
                                                    })
                                                };
                                                t.option && "object" == typeof t.option ? (Object.prototype.hasOwnProperty.call(t.option, "consent") && (y = null !== (n = t.option.consent) && void 0 !== n && n), Object.prototype.hasOwnProperty.call(t.option, "uid") && l({
                                                    type: "user",
                                                    properties: {
                                                        uid: t.option.uid
                                                    }
                                                }), Object.prototype.hasOwnProperty.call(t.option, "properties") && l({
                                                    type: "user",
                                                    properties: null !== (r = t.option.properties) && void 0 !== r ? r : {}
                                                }), (null === (i = t.option) || void 0 === i ? void 0 : i.anonymous) && l({
                                                    type: "user",
                                                    properties: {
                                                        uid: !1
                                                    }
                                                })) : l({
                                                    type: "user",
                                                    properties: {
                                                        uid: t.option
                                                    }
                                                }), k(t);
                                                break;
                                            case m.V2.OperationName.TrackEvent:
                                            case m.V2.OperationName.SetPage:
                                            case m.V2.OperationName.SetProperties:
                                                I(t), k(t);
                                                break;
                                            case m.V2.OperationName.GetSession:
                                                var d = ja(e, null === (o = t.option) || void 0 === o ? void 0 : o.format);
                                                k(t, d);
                                                break;
                                            case m.V2.OperationName.SetConfig:
                                                var p = t.option.console;
                                                b.push({
                                                    commit: z(function() {
                                                        p ? e.console().enable() : e.console().disable()
                                                    }),
                                                    discard: z(function() {})
                                                }), k(t);
                                                break;
                                            case m.V2.OperationName.Stat:
                                                var f = t.option,
                                                    _ = f.event_type,
                                                    v = f.properties;
                                                S.push(Ka(_, v)), k(t);
                                                break;
                                            case m.V2.OperationName.Observe:
                                                var w = t.option,
                                                    T = w.type,
                                                    A = w.callback;
                                                k(t, null === (s = x.recordingObserver) || void 0 === s ? void 0 : s.registerListener(T, A));
                                                break;
                                            case m.V2.OperationName.Source:
                                                var R = Us({
                                                    source: t.option.source,
                                                    type: "default",
                                                    entrypoint: "source"
                                                });
                                                S.push(R), k(t);
                                                break;
                                            default:
                                                (0, or.nt)(t, "invalid operation");
                                        }
                                    } catch (e) {
                                        Ae.sendToBugsnag(e, "error"), C(t, e)
                                    }
                                }, x = this, R = 0, O = u; R < O.length; R++) {
                                var P;
                                A(P = O[R])
                            }
                            return {
                                reidentified: w,
                                recordingShouldBeEnabled: g,
                                applyApi: function() {
                                    for (var t = e.queue(), n = 0, r = S; n < r.length; n++) {
                                        var i = r[n];
                                        t.enqueue(i)
                                    }
                                    void 0 !== y && e.setConsent(y), T.forEach(function(e) {
                                        return e.discard()
                                    }), b.forEach(function(e) {
                                        return e.commit()
                                    })
                                }
                            }
                        }, e.prototype.handleApiOperation = function(e) {
                            var t;
                            if (this.recorder && !this.splitPending) {
                                var n = null !== (t = this.executeApiSequence(this.recorder, [e])) && void 0 !== t ? t : {
                                        reidentified: !1,
                                        applyApi: function() {}
                                    },
                                    r = n.reidentified,
                                    i = n.recordingShouldBeEnabled,
                                    o = n.applyApi;
                                r ? (W(this.wnd, e), this.splitPage(Me.Reidentify, !0)) : o(), void 0 !== i && (i ? this.restart() : this.shutdown(Me.Api))
                            } else {
                                var s = e[0],
                                    a = e[3];
                                "restart" === s ? ((void 0 === a ? function() {} : a)(null), this.restart()) : W(this.wnd, e)
                            }
                        }, e.prototype._cookies = function() {
                            return this.identity ? this.identity.getCookies() : null
                        }, e.prototype._setCookie = function(e, t) {
                            this.identity && this.identity.setCookie(e, t)
                        }, e.prototype._withEventQueue = function(e, t) {
                            if (this.recorder) {
                                var n = this.recorder.queue(),
                                    r = this.recorder.pageSignature();
                                null != n && null != r && (e === r ? t(n) : Ae.sendToBugsnag("Error in _withEventQueue: Page Signature mismatch", "error", {
                                    pageSignature: r,
                                    callerSignature: e
                                }))
                            }
                        }, e.prototype._withRecorder = function(e, t) {
                            if (this.recorder) {
                                var n = this.recorder.pageSignature();
                                null !== n && (void 0 === e || e === n ? t(this.recorder) : Ae.sendToBugsnag("Error in _withRecorder: Page Signature mismatch", "error", {
                                    pageSignature: n,
                                    callerSignature: e
                                }))
                            }
                        }, e.prototype.initApi = function() {
                            var e = A(this.wnd);
                            if (e)
                                for (var t = 0, n = ["disableConsole", "enableConsole", "log", "restart", "shutdown", "getCurrentSession", "getCurrentSessionURL", "_api", "_withEventQueue", "_withRecorder", "_cookies", "_setCookie"]; t < n.length; t++) {
                                    var r = n[t];
                                    e[r] = se(this[r], this, ie)
                                }
                        }, e.prototype.start = function() {
                            var e, t = this,
                                n = N(this.wnd);
                            if (n) {
                                var r, i = L(r = this.wnd, "_fs_script") || K(V(r, !0));
                                if (i) {
                                    var o = U(this.wnd);
                                    if (o) {
                                        var s = function(e) {
                                            var t, n, r;
                                            return null !== (t = L(e, "_fs_rec_settings_host")) && void 0 !== t ? t : (n = V(e, !0), void 0 === (r = F(e)) && (r = void 0), P(n, r, "edge"))
                                        }(this.wnd);
                                        if (s) {
                                            var a = function(e) {
                                                return L(e, "_fs_app_host") || j(V(e))
                                            }(this.wnd);
                                            if (a) {
                                                this.initRecSettings({
                                                    orgId: n,
                                                    script: i,
                                                    recHost: o,
                                                    appHost: a,
                                                    cdnHost: s
                                                }), this.script, this.recHost, this.cdnHost, this.orgId, "localhost:8080" == this.recHost && (this.scheme = "http:"), Fr(null !== (e = Ra[n]) && void 0 !== e ? e : Je.DefaultOrgSettings.UrlPrivacyConfig, Je.DefaultOrgSettings.MaxUrlLength);
                                                var u = this.inFrame();
                                                this.identity = new Gs(n, this.wnd.document, function(e) {
                                                    for (var n, r = 0, i = e; r < i.length; r++) {
                                                        var o = i[r];
                                                        null === (n = t.recorder) || void 0 === n || n.queue().enqueue({
                                                            Kind: Ee.STORAGE_WRITE_FAILURE,
                                                            Args: o
                                                        })
                                                    }
                                                }, u), this.vars = new oa(this.identity), this.recordingObserver = new Ha, this.recordingSubject = new qa(this.recordingObserver), this.canRecord(n) && (this.onCreateRecorder(!1), this.hookLoadEvents(), this.wnd.addEventListener("message", Ae.wrap(function(e) {
                                                    return t.onMessage(e)
                                                })))
                                            }
                                        }
                                    }
                                }
                            }
                        }, e.prototype.onMessage = function(e) {
                            if ("string" == typeof e.data && (e.source == this.wnd.parent || e.source == this.wnd)) switch (fs(e.data)[0]) {
                                case hs.ShutdownFrame:
                                    this.shutdown(Me.FsShutdownFrame);
                                    break;
                                case hs.RestartFrame:
                                    this.restart();
                            }
                        }, e.prototype.onCreateRecorder = function(e) {
                            this.recorder = this.createRecorder(e), this.recorder
                        }, e.prototype._context = function(e, t) {
                            var n, r = this;
                            if (void 0 !== this.appHost && void 0 !== this.orgId && void 0 !== this.recHost && void 0 !== this.cdnHost && void 0 !== this.script) {
                                var i = s.mathRound(null !== (n = z(function() {
                                    var e;
                                    return null === (e = window.performance) || void 0 === e ? void 0 : e.now()
                                })()) && void 0 !== n ? n : -1);
                                return {
                                    window: this.wnd,
                                    time: new Ln,
                                    measurer: Kt.create(this.wnd),
                                    options: {
                                        appHost: this.appHost,
                                        orgId: this.orgId,
                                        recHost: this.recHost,
                                        cdnHost: this.cdnHost,
                                        scheme: this.scheme,
                                        script: this.script
                                    },
                                    recording: {
                                        bundleUploadInterval: function() {
                                            var t, n;
                                            return null !== (n = null === (t = e()) || void 0 === t ? void 0 : t.bundleUploadInterval()) && void 0 !== n ? n : Je.DefaultBundleUploadInterval
                                        },
                                        getCurrentSessionURL: function(t) {
                                            var n, r;
                                            return null !== (r = null === (n = e()) || void 0 === n ? void 0 : n.getCurrentSessionURL(t)) && void 0 !== r ? r : null
                                        },
                                        identity: this.identity,
                                        inFrame: t,
                                        pageResponse: function() {
                                            var t;
                                            return null === (t = e()) || void 0 === t ? void 0 : t.getPageResponse()
                                        },
                                        pageSignature: function() {
                                            var t, n;
                                            return null !== (n = null === (t = e()) || void 0 === t ? void 0 : t.pageSignature()) && void 0 !== n ? n : null
                                        },
                                        preroll: i,
                                        splitPage: function(e, t) {
                                            return r.splitPage(e, t)
                                        },
                                        vars: this.vars,
                                        observer: this.recordingSubject,
                                        bundleApiVersion: function() {
                                            var t, n;
                                            return null !== (n = null === (t = e()) || void 0 === t ? void 0 : t.getBundleApiVersion()) && void 0 !== n ? n : "v1"
                                        }
                                    },
                                    queue: function() {
                                        var t;
                                        return null === (t = e()) || void 0 === t ? void 0 : t.queue()
                                    }
                                }
                            }
                        }, e.prototype.addPreservedVarRawEvents = function(e, t) {
                            if (t && this.vars) {
                                for (var n = 0, r = this.vars.getDocumentVars(); n < r.length; n++) {
                                    var i = r[n];
                                    e.enqueue(i)
                                }
                                var o = this.vars.getCrossPageVars();
                                void 0 !== o && e.enqueue(o)
                            }
                        }, e.prototype.createRecorder = function(e) {
                            var t, n = this,
                                r = this.inFrame();
                            if (void 0 === r) return null;
                            var i = this._context(function() {
                                return t
                            }, r);
                            if (void 0 === i) return null;
                            var o = function(r) {
                                void 0 === r && (r = !1), t.start(r, function() {
                                    n.waitingOnStart = !1, e && t.tellAllFramesTo([hs.RestartFrame]), n.splitPending && (n.splitPage(n.splitPending[0], n.splitPending[1]), n.splitPending = null)
                                })
                            };
                            return r ? (t = this.recMaker.createInnerRecorder(i), this.onCreateInnerRecorder(t), o()) : (t = this.recMaker.createTopRecorder(i), this.onCreateTopRecorder(t, o, e)), t
                        }, e.prototype.onCreateTopRecorder = function(e, t, n) {
                            var r;
                            this.waitingOnStart = !0;
                            var i, o = !1,
                                s = [];
                            this.addPreservedVarRawEvents(e.queue(), n);
                            var a = L(this.wnd, "_fs_asset_map_id");
                            a && s.push([m.V1.VarOperationName.Vars, [De.Document, {
                                assetMapId: a
                            }]]), s.push.apply(s, D(this.wnd));
                            var u = null !== (r = this.executeApiSequence(e, s)) && void 0 !== r ? r : {
                                    applyApi: function() {}
                                },
                                c = u.reidentified,
                                h = u.recordingShouldBeEnabled,
                                l = u.applyApi;
                            void 0 !== h && (o = !h), i = !!c, l(), o ? this.deferredStart = function() {
                                return t(i)
                            } : t(i)
                        }, e.prototype.onCreateInnerRecorder = function(e) {
                            var t;
                            this.waitingOnStart = !0, (0, (null !== (t = this.executeApiSequence(e, D(this.wnd))) && void 0 !== t ? t : {
                                applyApi: function() {}
                            }).applyApi)()
                        }, e.prototype.inFrame = function() {
                            if ("boolean" == typeof this._inFrame) return this._inFrame;
                            var e = q(this.wnd);
                            return H(this.wnd) ? this._inFrame = !1 : this.wnd != top ? this._inFrame = !0 : e ? e.init && this.orgId && e.init(this.orgId) && (this._inFrame = !0) : this._inFrame = !1, this._inFrame
                        }, e.prototype.canRecord = function(e) {
                            return this.wnd.Map && this.wnd.MutationObserver && this.wnd.Set && this.wnd.WeakMap && !rr && this.wnd.postMessage && s.snapshot.status !== r.UnrecoverableFailure ? !!Va(this.wnd) || !1 : (function(e) {
                                try {
                                    e.snapshot.status === r.UnrecoverableFailure && (Ae.sendToBugsnag(e.snapshot.errors[0], "error"), e.snapshot.errors.forEach(o))
                                } catch (e) {}
                            }(s), !1)
                        }, e.prototype.hookLoadEvents = function() {
                            var e = this,
                                t = function() {
                                    e.domDoneLoaded || (e.domDoneLoaded = !0, e.recorder && e.recorder.onDomLoad())
                                },
                                n = !1,
                                r = function() {
                                    n || (n = !0, e.recorder && e.recorder.onLoad())
                                };
                            switch (document.readyState) {
                                case "interactive":
                                    t();
                                    break;
                                case "complete":
                                    t(), r();
                            }
                            this.domDoneLoaded || document.addEventListener("DOMContentLoaded", Ae.wrap(t)), n || this.wnd.addEventListener("load", Ae.wrap(function(e) {
                                t(), r()
                            }))
                        }, e
                    }();

                function Va(e) {
                    if (e == top || H(e) || function(e) {
                            return !!L(e, "_fs_run_in_iframe", "boolean")
                        }(e) || q(e)) return !0;
                    try {
                        return e.parent.document, Va(e.parent)
                    } catch (e) {}
                    return !1
                }
                var ja = function(e, t) {
                        var n, r, i;
                        switch (t) {
                            case "url.now":
                                return null !== (n = e.getCurrentSessionURL(!0)) && void 0 !== n ? n : null;
                            case "id":
                                return null !== (r = e.getCurrentSession()) && void 0 !== r ? r : null;
                            default:
                                return null !== (i = e.getCurrentSessionURL()) && void 0 !== i ? i : null;
                        }
                    },
                    Ka = function(e, t) {
                        var n = Je.DefaultStatsSettings,
                            r = n.MaxEventTypeLength,
                            i = n.MaxPayloadLength,
                            o = "string" == typeof e ? e.trim().slice(0, r) : "";
                        return {
                            Kind: Ee.STATS,
                            Args: [o, Br(ko(t, i))]
                        }
                    };
                ! function() {
                    try {
                        new Ba().init()
                    } catch (e) {
                        Ae.sendToBugsnag(e, "error")
                    }
                }()
            },
            838: function(e, t, n) {
                t.nt = void 0, n(940), n(399), t.nt = function(e, t) {
                    throw void 0 === t && (t = "Reached unexpected case in exhaustive switch"), new Error(t)
                }
            },
            399: function(e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ExtendedObject = void 0, t.ExtendedObject = Object
            },
            940: function(e, t, n) {
                n.r(t), n.d(t, {
                    __extends: function() {
                        return i
                    },
                    __assign: function() {
                        return o
                    },
                    __rest: function() {
                        return s
                    },
                    __decorate: function() {
                        return a
                    },
                    __param: function() {
                        return u
                    },
                    __metadata: function() {
                        return c
                    },
                    __awaiter: function() {
                        return h
                    },
                    __generator: function() {
                        return l
                    },
                    __createBinding: function() {
                        return d
                    },
                    __exportStar: function() {
                        return p
                    },
                    __values: function() {
                        return f
                    },
                    __read: function() {
                        return _
                    },
                    __spread: function() {
                        return v
                    },
                    __spreadArrays: function() {
                        return g
                    },
                    __spreadArray: function() {
                        return m
                    },
                    __await: function() {
                        return y
                    },
                    __asyncGenerator: function() {
                        return S
                    },
                    __asyncDelegator: function() {
                        return w
                    },
                    __asyncValues: function() {
                        return E
                    },
                    __makeTemplateObject: function() {
                        return b
                    },
                    __importStar: function() {
                        return I
                    },
                    __importDefault: function() {
                        return k
                    },
                    __classPrivateFieldGet: function() {
                        return C
                    },
                    __classPrivateFieldSet: function() {
                        return A
                    },
                    __classPrivateFieldIn: function() {
                        return x
                    }
                });
                var r = function(e, t) {
                    return r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }, r(e, t)
                };

                function i(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }
                var o = function() {
                    return o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }, o.apply(this, arguments)
                };

                function s(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                }

                function a(e, t, n, r) {
                    var i, o = arguments.length,
                        s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                    else
                        for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
                    return o > 3 && s && Object.defineProperty(t, n, s), s
                }

                function u(e, t) {
                    return function(n, r) {
                        t(n, r, e)
                    }
                }

                function c(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function h(e, t, n, r) {
                    return new(n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(e) {
                            try {
                                u(r["throw"](e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                                e(t)
                            })).then(s, a)
                        }
                        u((r = r.apply(e, t || [])).next())
                    })
                }

                function l(e, t) {
                    var n, r, i, o, s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        "throw": a(1),
                        "return": a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r["return"] : o[0] ? r["throw"] || ((i = r["return"]) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue;
                                    }
                                    o = t.call(e, s)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                }
                var d = Object.create ? function(e, t, n, r) {
                    void 0 === r && (r = n);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                        enumerable: !0,
                        get: function() {
                            return t[n]
                        }
                    }), Object.defineProperty(e, r, i)
                } : function(e, t, n, r) {
                    void 0 === r && (r = n), e[r] = t[n]
                };

                function p(e, t) {
                    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n)
                }

                function f(e) {
                    var t = "function" == typeof Symbol && Symbol.iterator,
                        n = t && e[t],
                        r = 0;
                    if (n) return n.call(e);
                    if (e && "number" == typeof e.length) return {
                        next: function() {
                            return e && r >= e.length && (e = void 0), {
                                value: e && e[r++],
                                done: !e
                            }
                        }
                    };
                    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }

                function _(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, i, o = n.call(e),
                        s = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = o["return"]) && n.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return s
                }

                function v() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
                    return e
                }

                function g() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        i = 0;
                    for (t = 0; t < n; t++)
                        for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
                    return r
                }

                function m(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                    return e.concat(r || Array.prototype.slice.call(t))
                }

                function y(e) {
                    return this instanceof y ? (this.v = e, this) : new y(e)
                }

                function S(e, t, n) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, i = n.apply(e, t || []),
                        o = [];
                    return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function s(e) {
                        i[e] && (r[e] = function(t) {
                            return new Promise(function(n, r) {
                                o.push([e, t, n, r]) > 1 || a(e, t)
                            })
                        })
                    }

                    function a(e, t) {
                        try {
                            (n = i[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(u, c) : h(o[0][2], n)
                        } catch (e) {
                            h(o[0][3], e)
                        }
                        var n
                    }

                    function u(e) {
                        a("next", e)
                    }

                    function c(e) {
                        a("throw", e)
                    }

                    function h(e, t) {
                        e(t), o.shift(), o.length && a(o[0][0], o[0][1])
                    }
                }

                function w(e) {
                    var t, n;
                    return t = {}, r("next"), r("throw", function(e) {
                        throw e
                    }), r("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function r(r, i) {
                        t[r] = e[r] ? function(t) {
                            return (n = !n) ? {
                                value: y(e[r](t)),
                                done: "return" === r
                            } : i ? i(t) : t
                        } : i
                    }
                }

                function E(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, n = e[Symbol.asyncIterator];
                    return n ? n.call(e) : (e = f(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function r(n) {
                        t[n] = e[n] && function(t) {
                            return new Promise(function(r, i) {
                                ! function(e, t, n, r) {
                                    Promise.resolve(r).then(function(t) {
                                        e({
                                            value: t,
                                            done: n
                                        })
                                    }, t)
                                }(r, i, (t = e[n](t)).done, t.value)
                            })
                        }
                    }
                }

                function b(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }
                var T = Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e["default"] = t
                };

                function I(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
                    return T(t, e), t
                }

                function k(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }

                function C(e, t, n, r) {
                    if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                }

                function A(e, t, n, r, i) {
                    if ("m" === r) throw new TypeError("Private method is not writable");
                    if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
                }

                function x(e, t) {
                    if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                    return "function" == typeof e ? t === e : e.has(t)
                }
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r](o, o.exports, n), o.exports
    }
    n.d = function(e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n(133)
}();