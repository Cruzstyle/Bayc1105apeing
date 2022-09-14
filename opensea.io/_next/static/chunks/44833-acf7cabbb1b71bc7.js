(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [44833], {
        17094: function(e, n) {
            "use strict";
            n.Z = function(e, n) {
                if (e && n) {
                    var t = Array.isArray(n) ? n : n.split(","),
                        r = e.name || "",
                        o = (e.type || "").toLowerCase(),
                        i = o.replace(/\/.*$/, "");
                    return t.some((function(e) {
                        var n = e.trim().toLowerCase();
                        return "." === n.charAt(0) ? r.toLowerCase().endsWith(n) : n.endsWith("/*") ? i === n.replace(/\/.*$/, "") : o === n
                    }))
                }
                return !0
            }
        },
        58772: function(e, n, t) {
            "use strict";
            var r = t(90331);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, n, t, o, i, a) {
                    if (a !== r) {
                        var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw c.name = "Invariant Violation", c
                    }
                }

                function n() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: n,
                    element: e,
                    elementType: e,
                    instanceOf: n,
                    node: e,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return t.PropTypes = t, t
            }
        },
        40576: function(e, n, t) {
            e.exports = t(58772)()
        },
        90331: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        44833: function(e, n, t) {
            "use strict";
            t.d(n, {
                uI: function() {
                    return ye
                }
            });
            var r = t(27378),
                o = t(40576),
                i = t.n(o),
                a = t(59312),
                c = new Map([
                    ["aac", "audio/aac"],
                    ["abw", "application/x-abiword"],
                    ["arc", "application/x-freearc"],
                    ["avif", "image/avif"],
                    ["avi", "video/x-msvideo"],
                    ["azw", "application/vnd.amazon.ebook"],
                    ["bin", "application/octet-stream"],
                    ["bmp", "image/bmp"],
                    ["bz", "application/x-bzip"],
                    ["bz2", "application/x-bzip2"],
                    ["cda", "application/x-cdf"],
                    ["csh", "application/x-csh"],
                    ["css", "text/css"],
                    ["csv", "text/csv"],
                    ["doc", "application/msword"],
                    ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
                    ["eot", "application/vnd.ms-fontobject"],
                    ["epub", "application/epub+zip"],
                    ["gz", "application/gzip"],
                    ["gif", "image/gif"],
                    ["heic", "image/heic"],
                    ["heif", "image/heif"],
                    ["htm", "text/html"],
                    ["html", "text/html"],
                    ["ico", "image/vnd.microsoft.icon"],
                    ["ics", "text/calendar"],
                    ["jar", "application/java-archive"],
                    ["jpeg", "image/jpeg"],
                    ["jpg", "image/jpeg"],
                    ["js", "text/javascript"],
                    ["json", "application/json"],
                    ["jsonld", "application/ld+json"],
                    ["mid", "audio/midi"],
                    ["midi", "audio/midi"],
                    ["mjs", "text/javascript"],
                    ["mp3", "audio/mpeg"],
                    ["mp4", "video/mp4"],
                    ["mpeg", "video/mpeg"],
                    ["mpkg", "application/vnd.apple.installer+xml"],
                    ["odp", "application/vnd.oasis.opendocument.presentation"],
                    ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
                    ["odt", "application/vnd.oasis.opendocument.text"],
                    ["oga", "audio/ogg"],
                    ["ogv", "video/ogg"],
                    ["ogx", "application/ogg"],
                    ["opus", "audio/opus"],
                    ["otf", "font/otf"],
                    ["png", "image/png"],
                    ["pdf", "application/pdf"],
                    ["php", "application/x-httpd-php"],
                    ["ppt", "application/vnd.ms-powerpoint"],
                    ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
                    ["rar", "application/vnd.rar"],
                    ["rtf", "application/rtf"],
                    ["sh", "application/x-sh"],
                    ["svg", "image/svg+xml"],
                    ["swf", "application/x-shockwave-flash"],
                    ["tar", "application/x-tar"],
                    ["tif", "image/tiff"],
                    ["tiff", "image/tiff"],
                    ["ts", "video/mp2t"],
                    ["ttf", "font/ttf"],
                    ["txt", "text/plain"],
                    ["vsd", "application/vnd.visio"],
                    ["wav", "audio/wav"],
                    ["weba", "audio/webm"],
                    ["webm", "video/webm"],
                    ["webp", "image/webp"],
                    ["woff", "font/woff"],
                    ["woff2", "font/woff2"],
                    ["xhtml", "application/xhtml+xml"],
                    ["xls", "application/vnd.ms-excel"],
                    ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
                    ["xml", "application/xml"],
                    ["xul", "application/vnd.mozilla.xul+xml"],
                    ["zip", "application/zip"],
                    ["7z", "application/x-7z-compressed"],
                    ["mkv", "video/x-matroska"],
                    ["mov", "video/quicktime"],
                    ["msg", "application/vnd.ms-outlook"]
                ]);

            function u(e, n) {
                var t = function(e) {
                    var n = e.name;
                    if (n && -1 !== n.lastIndexOf(".") && !e.type) {
                        var t = n.split(".").pop().toLowerCase(),
                            r = c.get(t);
                        r && Object.defineProperty(e, "type", {
                            value: r,
                            writable: !1,
                            configurable: !1,
                            enumerable: !0
                        })
                    }
                    return e
                }(e);
                if ("string" !== typeof t.path) {
                    var r = e.webkitRelativePath;
                    Object.defineProperty(t, "path", {
                        value: "string" === typeof n ? n : "string" === typeof r && r.length > 0 ? r : e.name,
                        writable: !1,
                        configurable: !1,
                        enumerable: !0
                    })
                }
                return t
            }
            var l = [".DS_Store", "Thumbs.db"];

            function s(e) {
                return "object" === typeof e && null !== e
            }

            function f(e) {
                return v(e.target.files).map((function(e) {
                    return u(e)
                }))
            }

            function p(e) {
                return (0, a.__awaiter)(this, void 0, void 0, (function() {
                    return (0, a.__generator)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Promise.all(e.map((function(e) {
                                    return e.getFile()
                                })))];
                            case 1:
                                return [2, n.sent().map((function(e) {
                                    return u(e)
                                }))]
                        }
                    }))
                }))
            }

            function d(e, n) {
                return (0, a.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0, a.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return e.items ? (t = v(e.items).filter((function(e) {
                                    return "file" === e.kind
                                })), "drop" !== n ? [2, t] : [4, Promise.all(t.map(g))]) : [3, 2];
                            case 1:
                                return [2, m(y(r.sent()))];
                            case 2:
                                return [2, m(v(e.files).map((function(e) {
                                    return u(e)
                                })))]
                        }
                    }))
                }))
            }

            function m(e) {
                return e.filter((function(e) {
                    return -1 === l.indexOf(e.name)
                }))
            }

            function v(e) {
                if (null === e) return [];
                for (var n = [], t = 0; t < e.length; t++) {
                    var r = e[t];
                    n.push(r)
                }
                return n
            }

            function g(e) {
                if ("function" !== typeof e.webkitGetAsEntry) return b(e);
                var n = e.webkitGetAsEntry();
                return n && n.isDirectory ? w(n) : b(e)
            }

            function y(e) {
                return e.reduce((function(e, n) {
                    return (0, a.__spreadArray)((0, a.__spreadArray)([], (0, a.__read)(e), !1), (0, a.__read)(Array.isArray(n) ? y(n) : [n]), !1)
                }), [])
            }

            function b(e) {
                var n = e.getAsFile();
                if (!n) return Promise.reject("".concat(e, " is not a File"));
                var t = u(n);
                return Promise.resolve(t)
            }

            function h(e) {
                return (0, a.__awaiter)(this, void 0, void 0, (function() {
                    return (0, a.__generator)(this, (function(n) {
                        return [2, e.isDirectory ? w(e) : D(e)]
                    }))
                }))
            }

            function w(e) {
                var n = e.createReader();
                return new Promise((function(e, t) {
                    var r = [];
                    ! function o() {
                        var i = this;
                        n.readEntries((function(n) {
                            return (0, a.__awaiter)(i, void 0, void 0, (function() {
                                var i, c, u;
                                return (0, a.__generator)(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (n.length) return [3, 5];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 3, , 4]), [4, Promise.all(r)];
                                        case 2:
                                            return i = a.sent(), e(i), [3, 4];
                                        case 3:
                                            return c = a.sent(), t(c), [3, 4];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            u = Promise.all(n.map(h)), r.push(u), o(), a.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }), (function(e) {
                            t(e)
                        }))
                    }()
                }))
            }

            function D(e) {
                return (0, a.__awaiter)(this, void 0, void 0, (function() {
                    return (0, a.__generator)(this, (function(n) {
                        return [2, new Promise((function(n, t) {
                            e.file((function(t) {
                                var r = u(t, e.fullPath);
                                n(r)
                            }), (function(e) {
                                t(e)
                            }))
                        }))]
                    }))
                }))
            }
            var O = t(17094);

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return _(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || k(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function A(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? j(Object(t), !0).forEach((function(n) {
                        E(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function E(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function F(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try {
                        for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                    } catch (u) {
                        c = !0, o = u
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }(e, n) || k(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e, n) {
                if (e) {
                    if ("string" === typeof e) return _(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _(e, n) : void 0
                }
            }

            function _(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            var P = "file-invalid-type",
                S = "file-too-large",
                C = "file-too-small",
                z = "too-many-files",
                R = function(e) {
                    e = Array.isArray(e) && 1 === e.length ? e[0] : e;
                    var n = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
                    return {
                        code: P,
                        message: "File type must be ".concat(n)
                    }
                },
                T = function(e) {
                    return {
                        code: S,
                        message: "File is larger than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                I = function(e) {
                    return {
                        code: C,
                        message: "File is smaller than ".concat(e, " ").concat(1 === e ? "byte" : "bytes")
                    }
                },
                M = {
                    code: z,
                    message: "Too many files"
                };

            function L(e, n) {
                var t = "application/x-moz-file" === e.type || (0, O.Z)(e, n);
                return [t, t ? null : R(n)]
            }

            function B(e, n, t) {
                if (K(e.size))
                    if (K(n) && K(t)) {
                        if (e.size > t) return [!1, T(t)];
                        if (e.size < n) return [!1, I(n)]
                    } else {
                        if (K(n) && e.size < n) return [!1, I(n)];
                        if (K(t) && e.size > t) return [!1, T(t)]
                    }
                return [!0, null]
            }

            function K(e) {
                return void 0 !== e && null !== e
            }

            function U(e) {
                var n = e.files,
                    t = e.accept,
                    r = e.minSize,
                    o = e.maxSize,
                    i = e.multiple,
                    a = e.maxFiles,
                    c = e.validator;
                return !(!i && n.length > 1 || i && a >= 1 && n.length > a) && n.every((function(e) {
                    var n = F(L(e, t), 1)[0],
                        i = F(B(e, r, o), 1)[0],
                        a = c ? c(e) : null;
                    return n && i && !a
                }))
            }

            function W(e) {
                return "function" === typeof e.isPropagationStopped ? e.isPropagationStopped() : "undefined" !== typeof e.cancelBubble && e.cancelBubble
            }

            function N(e) {
                return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, (function(e) {
                    return "Files" === e || "application/x-moz-file" === e
                })) : !!e.target && !!e.target.files
            }

            function $(e) {
                e.preventDefault()
            }

            function H(e) {
                return -1 !== e.indexOf("MSIE") || -1 !== e.indexOf("Trident/")
            }

            function q(e) {
                return -1 !== e.indexOf("Edge/")
            }

            function G() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return H(e) || q(e)
            }

            function Y() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                    return n.some((function(n) {
                        return !W(e) && n && n.apply(void 0, [e].concat(r)), W(e)
                    }))
                }
            }

            function Z() {
                return "showOpenFilePicker" in window
            }

            function V(e) {
                return K(e) ? [{
                    accept: Object.entries(e).filter((function(e) {
                        var n = F(e, 2),
                            t = n[0],
                            r = n[1],
                            o = !0;
                        return ee(t) || (console.warn('Skipped "'.concat(t, '" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')), o = !1), Array.isArray(r) && r.every(ne) || (console.warn('Skipped "'.concat(t, '" because an invalid file extension was provided.')), o = !1), o
                    })).reduce((function(e, n) {
                        var t = F(n, 2),
                            r = t[0],
                            o = t[1];
                        return A(A({}, e), {}, E({}, r, o))
                    }), {})
                }] : e
            }

            function J(e) {
                if (K(e)) return Object.entries(e).reduce((function(e, n) {
                    var t = F(n, 2),
                        r = t[0],
                        o = t[1];
                    return [].concat(x(e), [r], x(o))
                }), []).filter((function(e) {
                    return ee(e) || ne(e)
                })).join(",")
            }

            function Q(e) {
                return e instanceof DOMException && ("AbortError" === e.name || e.code === e.ABORT_ERR)
            }

            function X(e) {
                return e instanceof DOMException && ("SecurityError" === e.name || e.code === e.SECURITY_ERR)
            }

            function ee(e) {
                return "audio/*" === e || "video/*" === e || "image/*" === e || "text/*" === e || /\w+\/[-+.\w]+/g.test(e)
            }

            function ne(e) {
                return /^.*\.[\w]+$/.test(e)
            }
            var te = ["children"],
                re = ["open"],
                oe = ["refKey", "role", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"],
                ie = ["refKey", "onChange", "onClick"];

            function ae(e) {
                return function(e) {
                    if (Array.isArray(e)) return le(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ue(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ce(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == t) return;
                    var r, o, i = [],
                        a = !0,
                        c = !1;
                    try {
                        for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                    } catch (u) {
                        c = !0, o = u
                    } finally {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                    return i
                }(e, n) || ue(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ue(e, n) {
                if (e) {
                    if ("string" === typeof e) return le(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? le(e, n) : void 0
                }
            }

            function le(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function se(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function fe(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? se(Object(t), !0).forEach((function(n) {
                        pe(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : se(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function pe(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function de(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var me = (0, r.forwardRef)((function(e, n) {
                var t = e.children,
                    o = ye(de(e, te)),
                    i = o.open,
                    a = de(o, re);
                return (0, r.useImperativeHandle)(n, (function() {
                    return {
                        open: i
                    }
                }), [i]), r.createElement(r.Fragment, null, t(fe(fe({}, a), {}, {
                    open: i
                })))
            }));
            me.displayName = "Dropzone";
            var ve = {
                disabled: !1,
                getFilesFromEvent: function(e) {
                    return (0, a.__awaiter)(this, void 0, void 0, (function() {
                        return (0, a.__generator)(this, (function(n) {
                            return s(e) && s(e.dataTransfer) ? [2, d(e.dataTransfer, e.type)] : function(e) {
                                return s(e) && s(e.target)
                            }(e) ? [2, f(e)] : Array.isArray(e) && e.every((function(e) {
                                return "getFile" in e && "function" === typeof e.getFile
                            })) ? [2, p(e)] : [2, []]
                        }))
                    }))
                },
                maxSize: 1 / 0,
                minSize: 0,
                multiple: !0,
                maxFiles: 0,
                preventDropOnDocument: !0,
                noClick: !1,
                noKeyboard: !1,
                noDrag: !1,
                noDragEventsBubbling: !1,
                validator: null,
                useFsAccessApi: !0,
                autoFocus: !1
            };
            me.defaultProps = ve, me.propTypes = {
                children: i().func,
                accept: i().objectOf(i().arrayOf(i().string)),
                multiple: i().bool,
                preventDropOnDocument: i().bool,
                noClick: i().bool,
                noKeyboard: i().bool,
                noDrag: i().bool,
                noDragEventsBubbling: i().bool,
                minSize: i().number,
                maxSize: i().number,
                maxFiles: i().number,
                disabled: i().bool,
                getFilesFromEvent: i().func,
                onFileDialogCancel: i().func,
                onFileDialogOpen: i().func,
                useFsAccessApi: i().bool,
                autoFocus: i().bool,
                onDragEnter: i().func,
                onDragLeave: i().func,
                onDragOver: i().func,
                onDrop: i().func,
                onDropAccepted: i().func,
                onDropRejected: i().func,
                onError: i().func,
                validator: i().func
            };
            var ge = {
                isFocused: !1,
                isFileDialogActive: !1,
                isDragActive: !1,
                isDragAccept: !1,
                isDragReject: !1,
                acceptedFiles: [],
                fileRejections: []
            };

            function ye() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = fe(fe({}, ve), e),
                    t = n.accept,
                    o = n.disabled,
                    i = n.getFilesFromEvent,
                    a = n.maxSize,
                    c = n.minSize,
                    u = n.multiple,
                    l = n.maxFiles,
                    s = n.onDragEnter,
                    f = n.onDragLeave,
                    p = n.onDragOver,
                    d = n.onDrop,
                    m = n.onDropAccepted,
                    v = n.onDropRejected,
                    g = n.onFileDialogCancel,
                    y = n.onFileDialogOpen,
                    b = n.useFsAccessApi,
                    h = n.autoFocus,
                    w = n.preventDropOnDocument,
                    D = n.noClick,
                    O = n.noKeyboard,
                    x = n.noDrag,
                    j = n.noDragEventsBubbling,
                    A = n.onError,
                    E = n.validator,
                    F = (0, r.useMemo)((function() {
                        return J(t)
                    }), [t]),
                    k = (0, r.useMemo)((function() {
                        return V(t)
                    }), [t]),
                    _ = (0, r.useMemo)((function() {
                        return "function" === typeof y ? y : he
                    }), [y]),
                    P = (0, r.useMemo)((function() {
                        return "function" === typeof g ? g : he
                    }), [g]),
                    S = (0, r.useRef)(null),
                    C = (0, r.useRef)(null),
                    z = (0, r.useReducer)(be, ge),
                    R = ce(z, 2),
                    T = R[0],
                    I = R[1],
                    K = T.isFocused,
                    H = T.isFileDialogActive,
                    q = (0, r.useRef)("undefined" !== typeof window && window.isSecureContext && b && Z()),
                    ee = function() {
                        !q.current && H && setTimeout((function() {
                            C.current && (C.current.files.length || (I({
                                type: "closeDialog"
                            }), P()))
                        }), 300)
                    };
                (0, r.useEffect)((function() {
                    return window.addEventListener("focus", ee, !1),
                        function() {
                            window.removeEventListener("focus", ee, !1)
                        }
                }), [C, H, P, q]);
                var ne = (0, r.useRef)([]),
                    te = function(e) {
                        S.current && S.current.contains(e.target) || (e.preventDefault(), ne.current = [])
                    };
                (0, r.useEffect)((function() {
                    return w && (document.addEventListener("dragover", $, !1), document.addEventListener("drop", te, !1)),
                        function() {
                            w && (document.removeEventListener("dragover", $), document.removeEventListener("drop", te))
                        }
                }), [S, w]), (0, r.useEffect)((function() {
                    return !o && h && S.current && S.current.focus(),
                        function() {}
                }), [S, h, o]);
                var re = (0, r.useCallback)((function(e) {
                        A ? A(e) : console.error(e)
                    }), [A]),
                    ue = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ke(e), ne.current = [].concat(ae(ne.current), [e.target]), N(e) && Promise.resolve(i(e)).then((function(n) {
                            if (!W(e) || j) {
                                var t = n.length,
                                    r = t > 0 && U({
                                        files: n,
                                        accept: F,
                                        minSize: c,
                                        maxSize: a,
                                        multiple: u,
                                        maxFiles: l,
                                        validator: E
                                    });
                                I({
                                    isDragAccept: r,
                                    isDragReject: t > 0 && !r,
                                    isDragActive: !0,
                                    type: "setDraggedFiles"
                                }), s && s(e)
                            }
                        })).catch((function(e) {
                            return re(e)
                        }))
                    }), [i, s, re, j, F, c, a, u, l, E]),
                    le = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ke(e);
                        var n = N(e);
                        if (n && e.dataTransfer) try {
                            e.dataTransfer.dropEffect = "copy"
                        } catch (t) {}
                        return n && p && p(e), !1
                    }), [p, j]),
                    se = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ke(e);
                        var n = ne.current.filter((function(e) {
                                return S.current && S.current.contains(e)
                            })),
                            t = n.indexOf(e.target); - 1 !== t && n.splice(t, 1), ne.current = n, n.length > 0 || (I({
                            type: "setDraggedFiles",
                            isDragActive: !1,
                            isDragAccept: !1,
                            isDragReject: !1
                        }), N(e) && f && f(e))
                    }), [S, f, j]),
                    me = (0, r.useCallback)((function(e, n) {
                        var t = [],
                            r = [];
                        e.forEach((function(e) {
                            var n = ce(L(e, F), 2),
                                o = n[0],
                                i = n[1],
                                u = ce(B(e, c, a), 2),
                                l = u[0],
                                s = u[1],
                                f = E ? E(e) : null;
                            if (o && l && !f) t.push(e);
                            else {
                                var p = [i, s];
                                f && (p = p.concat(f)), r.push({
                                    file: e,
                                    errors: p.filter((function(e) {
                                        return e
                                    }))
                                })
                            }
                        })), (!u && t.length > 1 || u && l >= 1 && t.length > l) && (t.forEach((function(e) {
                            r.push({
                                file: e,
                                errors: [M]
                            })
                        })), t.splice(0)), I({
                            acceptedFiles: t,
                            fileRejections: r,
                            type: "setFiles"
                        }), d && d(t, r, n), r.length > 0 && v && v(r, n), t.length > 0 && m && m(t, n)
                    }), [I, u, F, c, a, l, d, m, v, E]),
                    ye = (0, r.useCallback)((function(e) {
                        e.preventDefault(), e.persist(), ke(e), ne.current = [], N(e) && Promise.resolve(i(e)).then((function(n) {
                            W(e) && !j || me(n, e)
                        })).catch((function(e) {
                            return re(e)
                        })), I({
                            type: "reset"
                        })
                    }), [i, me, re, j]),
                    we = (0, r.useCallback)((function() {
                        if (q.current) {
                            I({
                                type: "openDialog"
                            }), _();
                            var e = {
                                multiple: u,
                                types: k
                            };
                            window.showOpenFilePicker(e).then((function(e) {
                                return i(e)
                            })).then((function(e) {
                                me(e, null), I({
                                    type: "closeDialog"
                                })
                            })).catch((function(e) {
                                Q(e) ? (P(e), I({
                                    type: "closeDialog"
                                })) : X(e) ? (q.current = !1, C.current ? (C.current.value = null, C.current.click()) : re(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))) : re(e)
                            }))
                        } else C.current && (I({
                            type: "openDialog"
                        }), _(), C.current.value = null, C.current.click())
                    }), [I, _, P, b, me, re, k, u]),
                    De = (0, r.useCallback)((function(e) {
                        S.current && S.current.isEqualNode(e.target) && (" " !== e.key && "Enter" !== e.key && 32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(), we()))
                    }), [S, we]),
                    Oe = (0, r.useCallback)((function() {
                        I({
                            type: "focus"
                        })
                    }), []),
                    xe = (0, r.useCallback)((function() {
                        I({
                            type: "blur"
                        })
                    }), []),
                    je = (0, r.useCallback)((function() {
                        D || (G() ? setTimeout(we, 0) : we())
                    }), [D, we]),
                    Ae = function(e) {
                        return o ? null : e
                    },
                    Ee = function(e) {
                        return O ? null : Ae(e)
                    },
                    Fe = function(e) {
                        return x ? null : Ae(e)
                    },
                    ke = function(e) {
                        j && e.stopPropagation()
                    },
                    _e = (0, r.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.refKey,
                                t = void 0 === n ? "ref" : n,
                                r = e.role,
                                i = e.onKeyDown,
                                a = e.onFocus,
                                c = e.onBlur,
                                u = e.onClick,
                                l = e.onDragEnter,
                                s = e.onDragOver,
                                f = e.onDragLeave,
                                p = e.onDrop,
                                d = de(e, oe);
                            return fe(fe(pe({
                                onKeyDown: Ee(Y(i, De)),
                                onFocus: Ee(Y(a, Oe)),
                                onBlur: Ee(Y(c, xe)),
                                onClick: Ae(Y(u, je)),
                                onDragEnter: Fe(Y(l, ue)),
                                onDragOver: Fe(Y(s, le)),
                                onDragLeave: Fe(Y(f, se)),
                                onDrop: Fe(Y(p, ye)),
                                role: "string" === typeof r && "" !== r ? r : "presentation"
                            }, t, S), o || O ? {} : {
                                tabIndex: 0
                            }), d)
                        }
                    }), [S, De, Oe, xe, je, ue, le, se, ye, O, x, o]),
                    Pe = (0, r.useCallback)((function(e) {
                        e.stopPropagation()
                    }), []),
                    Se = (0, r.useMemo)((function() {
                        return function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = e.refKey,
                                t = void 0 === n ? "ref" : n,
                                r = e.onChange,
                                o = e.onClick,
                                i = de(e, ie),
                                a = pe({
                                    accept: F,
                                    multiple: u,
                                    type: "file",
                                    style: {
                                        display: "none"
                                    },
                                    onChange: Ae(Y(r, ye)),
                                    onClick: Ae(Y(o, Pe)),
                                    tabIndex: -1
                                }, t, C);
                            return fe(fe({}, a), i)
                        }
                    }), [C, t, u, ye, o]);
                return fe(fe({}, T), {}, {
                    isFocused: K && !o,
                    getRootProps: _e,
                    getInputProps: Se,
                    rootRef: S,
                    inputRef: C,
                    open: Ae(we)
                })
            }

            function be(e, n) {
                switch (n.type) {
                    case "focus":
                        return fe(fe({}, e), {}, {
                            isFocused: !0
                        });
                    case "blur":
                        return fe(fe({}, e), {}, {
                            isFocused: !1
                        });
                    case "openDialog":
                        return fe(fe({}, ge), {}, {
                            isFileDialogActive: !0
                        });
                    case "closeDialog":
                        return fe(fe({}, e), {}, {
                            isFileDialogActive: !1
                        });
                    case "setDraggedFiles":
                        return fe(fe({}, e), {}, {
                            isDragActive: n.isDragActive,
                            isDragAccept: n.isDragAccept,
                            isDragReject: n.isDragReject
                        });
                    case "setFiles":
                        return fe(fe({}, e), {}, {
                            acceptedFiles: n.acceptedFiles,
                            fileRejections: n.fileRejections
                        });
                    case "reset":
                        return fe({}, ge);
                    default:
                        return e
                }
            }

            function he() {}
        }
    }
]);
//# sourceMappingURL=44833-acf7cabbb1b71bc7.js.map