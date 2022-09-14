"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [25459], {
        25459: function(e, n, r) {
            r.d(n, {
                m: function() {
                    return I
                }
            });
            var t = r(23842),
                a = r(19989),
                i = r(35230),
                o = r.n(i),
                l = r(24246),
                u = (r(86248), r(27378)),
                c = r(4402),
                s = r(47892),
                d = r(7288),
                f = r(377),
                p = r(45116),
                v = r(9476),
                m = r(87481),
                g = r(79790),
                h = r(6300),
                x = r(26851),
                b = (r(59809), r(33609)),
                y = r(48257),
                j = r(17813);

            function k() {
                var e = (0, a.Z)(["\n  position: relative;\n\n  .ProfileImage--loader {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .ProfileImage--image {\n    cursor: pointer;\n  }\n"]);
                return k = function() {
                    return e
                }, e
            }
            var I = function(e) {
                    var n = e.className,
                        a = e.editable,
                        i = e.isDynamic,
                        s = e.size,
                        k = e.loaderSize,
                        I = e.data,
                        w = (0, h.q)("components"),
                        C = (0, u.useState)("standby"),
                        R = C[0],
                        P = C[1],
                        F = (0, g.e)().attempt,
                        S = (0, m.b)().mutate,
                        z = (0, c.useFragment)(r(474), I).imageUrl,
                        U = function() {
                            var e = (0, t.Z)(o().mark((function e(n) {
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return P("wait"), e.next = 3, F((0, t.Z)(o().mark((function e() {
                                                return o().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, S(r(5179), {
                                                                input: {
                                                                    profileImage: null === n || void 0 === n ? void 0 : n.file
                                                                }
                                                            }, {
                                                                shouldAuthenticate: !0
                                                            });
                                                        case 2:
                                                            (0, x.LK)(), P("done");
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        A = function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).onClick;
                            return (0, l.jsx)(j.Z, {
                                alt: w("profileImage.alt", "User Profile Image"),
                                className: "ProfileImage--image",
                                size: s,
                                sizing: "cover",
                                url: z,
                                variant: "round",
                                onClick: e
                            })
                        };
                    return (0, l.jsx)(Z, {
                        className: (0, b.A)("ProfileImage", {
                            editable: a
                        }, n),
                        children: i ? (0, l.jsxs)(l.Fragment, {
                            children: [a && (0, l.jsx)(d.a, {
                                "aria-label": w("profileImage.label", "Select a profile image"),
                                overlay: (0, l.jsx)(f._, {
                                    height: "100%",
                                    justifyContent: "center",
                                    children: (0, l.jsx)(y.J, {
                                        color: "white",
                                        value: "edit"
                                    })
                                }),
                                shape: "round",
                                variant: "overlay",
                                zIndex: 2,
                                onChange: U
                            }), "wait" === R ? (0, l.jsx)("div", {
                                className: "ProfileImage--loader",
                                children: (0, l.jsx)(v.aN, {
                                    size: k
                                })
                            }) : (0, l.jsx)(p.e, {
                                trigger: function(e) {
                                    return A({
                                        onClick: e
                                    })
                                },
                                children: (0, l.jsx)(j.Z, {
                                    alt: w("profileImage.alt", "User Profile Image"),
                                    className: "ProfileImage--image",
                                    size: s,
                                    sizing: "cover",
                                    url: z,
                                    variant: "round"
                                })
                            })]
                        }) : A()
                    })
                },
                Z = s.ZP.div.withConfig({
                    componentId: "sc-fcba9444-0"
                })(k())
        },
        7288: function(e, n, r) {
            r.d(n, {
                a: function() {
                    return v
                }
            });
            var t = r(85034),
                a = r(31373),
                i = r(24246),
                o = r(27378),
                l = r(17813),
                u = r(51581),
                c = r(47762),
                s = r(6300),
                d = r(36537),
                f = r(70884),
                p = (0, d.p)(f.GT),
                v = (0, o.forwardRef)((function(e, n) {
                    var r = e.onChange,
                        d = e.shape,
                        f = void 0 === d ? "square" : d,
                        v = e.value,
                        m = (0, a.Z)(e, ["onChange", "shape", "value"]),
                        g = (0, s.q)("components"),
                        h = (0, o.useState)(),
                        x = h[0],
                        b = h[1];
                    return (0, c.n)((function() {
                        return function() {
                            x && URL.revokeObjectURL(x)
                        }
                    })), (0, i.jsx)(u.S, (0, t.Z)({
                        accept: {
                            "image/*": []
                        },
                        maxSize: p,
                        preview: (null === v || void 0 === v ? void 0 : v.url) && (0, i.jsx)(l.Z, {
                            alt: g("forms.imageInput.alt", "{{url}} preview image", {
                                url: v.url
                            }, {
                                forceString: !0
                            }),
                            imgStyle: {
                                objectFit: "cover"
                            },
                            url: v.url,
                            variant: f
                        }),
                        ref: n,
                        shape: f,
                        onChange: function(e) {
                            if (x && URL.revokeObjectURL(x), r)
                                if (e) {
                                    var n = URL.createObjectURL(e);
                                    r({
                                        file: e,
                                        url: n
                                    }), b(n)
                                } else r(void 0)
                        }
                    }, m))
                }))
        },
        51581: function(e, n, r) {
            r.d(n, {
                S: function() {
                    return _
                },
                A: function() {
                    return O
                }
            });
            var t = r(85034),
                a = r(70169),
                i = r(31373),
                o = r(52050),
                l = r(19989),
                u = r(24246),
                c = r(27378),
                s = r(95331),
                d = r(76449),
                f = r(44833),
                p = r(47892),
                v = r(96728),
                m = r(48257),
                g = r(77795),
                h = r(53585),
                x = r(377),
                b = r(83989),
                y = r(16611),
                j = r(90918),
                k = r(48599),
                I = r(39339),
                Z = r(6300),
                w = r(90761),
                C = r(87821);

            function R() {
                var e = (0, l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]);
                return R = function() {
                    return e
                }, e
            }

            function P() {
                var e = (0, l.Z)(["\n  ", "\n  z-index: 1;\n  opacity: 0;\n  transition: 0.1s opacity ease-in;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function F() {
                var e = (0, l.Z)(["\n  position: absolute;\n  z-index: ", ";\n\n  ", ";\n"]);
                return F = function() {
                    return e
                }, e
            }

            function S() {
                var e = (0, l.Z)(["\n  border: 3px dashed ", ";\n"]);
                return S = function() {
                    return e
                }, e
            }

            function z() {
                var e = (0, l.Z)([""]);
                return z = function() {
                    return e
                }, e
            }

            function U() {
                var e = (0, l.Z)(["\n      pointer-events: none;\n      opacity: 0.5;\n    "]);
                return U = function() {
                    return e
                }, e
            }

            function A() {
                var e = (0, l.Z)(["\n      ", "\n      border: none;\n    "]);
                return A = function() {
                    return e
                }, e
            }

            function L() {
                var e = (0, l.Z)(["\n  position: relative;\n  padding: 4px;\n  cursor: pointer;\n\n  ", "\n\n  :hover {\n    ", " {\n      opacity: 1;\n    }\n  }\n\n  ", " {\n    color: ", ";\n  }\n\n  :hover {\n    ", "\n\n    ", " {\n      ", "\n    }\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"]);
                return L = function() {
                    return e
                }, e
            }
            var _ = (0, c.forwardRef)((function(e, n) {
                    var r, l = e.accept,
                        d = e.preview,
                        p = e.onChange,
                        v = e.id,
                        m = e.name,
                        g = e.inputRef,
                        h = e.variant,
                        x = void 0 === h ? "default" : h,
                        w = e.shape,
                        R = void 0 === w ? "square" : w,
                        P = e.disabled,
                        F = void 0 !== P && P,
                        S = e.removable,
                        z = void 0 === S || S,
                        U = e.extra,
                        A = e.children,
                        L = e.overlay,
                        _ = e.maxSize,
                        q = e.validator,
                        D = (0, i.Z)(e, ["accept", "preview", "onChange", "id", "name", "inputRef", "variant", "shape", "disabled", "removable", "extra", "children", "overlay", "maxSize", "validator"]),
                        K = (0, Z.q)("designSystem"),
                        O = function() {
                            var e = (0, Z.q)("designSystem");
                            return {
                                "file-too-large": e("fileInput.largeFile.error", "File too large"),
                                "file-invalid-type": e("file.unsupportedFile.error", "Unsupported file type")
                            }
                        }(),
                        $ = (0, o.Z)((0, I.X)(), 2),
                        V = $[0],
                        X = $[1],
                        J = (0, c.useCallback)((function(e) {
                            return null === p || void 0 === p ? void 0 : p(e[0])
                        }), [p]),
                        W = (0, f.uI)({
                            onDrop: J,
                            multiple: !1,
                            accept: l,
                            disabled: F,
                            maxSize: _,
                            validator: q
                        }),
                        G = W.getRootProps,
                        Y = W.getInputProps,
                        B = W.fileRejections,
                        H = W.isDragActive,
                        Q = "overlay" === x ? null : (0, u.jsx)(T, {
                            size: 84,
                            value: B.length ? "help_outline" : "image"
                        }),
                        ee = G(),
                        ne = ee.ref,
                        re = (0, i.Z)(ee, ["ref"]);
                    return (0, u.jsxs)(E, (0, a.Z)((0, t.Z)({}, D, re), {
                        $disabled: F,
                        "aria-label": null !== (r = D["aria-label"]) && void 0 !== r ? r : K("fileInput.filetype.label", "Select an image, video, audio or 3D model file"),
                        ref: (0, s.Z)(n, ne, X),
                        role: "button",
                        shape: R,
                        variant: x,
                        children: [(0, u.jsx)("input", (0, t.Z)({
                            disabled: F,
                            id: v,
                            name: m,
                            ref: g
                        }, Y())), B.length ? (0, u.jsxs)(u.Fragment, {
                            children: [Q, B.flatMap((function(e) {
                                return e.errors
                            })).map((function(e) {
                                return (0, u.jsxs)(b.t, {
                                    children: [(0, u.jsx)(y.WX, {
                                        as: "span",
                                        textAlign: "center",
                                        variant: "small-heavy",
                                        children: O[e.code]
                                    }), (0, u.jsx)(y.WX, {
                                        as: "span",
                                        color: "error",
                                        marginTop: "12px",
                                        textAlign: "center",
                                        variant: "info",
                                        children: e.message
                                    }, e.code)]
                                }, "".concat(e.code, "-").concat(e.message))
                            }))]
                        }) : d ? (0, u.jsxs)(u.Fragment, {
                            children: [z ? (0, u.jsx)(M, {
                                shape: R,
                                children: (0, u.jsx)(k.k, {
                                    "aria-label": "Remove",
                                    onClick: function(e) {
                                        e.stopPropagation(), e.preventDefault(), null === p || void 0 === p || p(void 0)
                                    },
                                    children: (0, u.jsx)(T, {
                                        value: "close"
                                    })
                                })
                            }) : null, (0, u.jsx)(N, {
                                children: Q
                            }), d]
                        }) : (0, u.jsxs)(u.Fragment, {
                            children: [Q, U]
                        }), A, (0, u.jsx)(j.a, {
                            active: H || V,
                            borderRadius: "overlay" === x ? void 0 : "square" === R ? C.E0.default : void 0,
                            offset: "overlay" === x ? void 0 : "4px",
                            position: "absolute",
                            variant: R,
                            children: L
                        })]
                    }))
                })),
                q = function(e) {
                    return (0, d._j)(.1, "#ccc")
                },
                D = function(e) {
                    return (0, d.$n)(.1, "#ccc")
                },
                K = (0, p.iv)(R()),
                N = (0, p.ZP)(x._).withConfig({
                    componentId: "sc-3676ad3c-0"
                })(P(), K),
                M = (0, p.ZP)(h.g).withConfig({
                    componentId: "sc-3676ad3c-1"
                })(F(), g.k.OVERLAY + 1, (0, v.variant)({
                    prop: "shape",
                    variants: {
                        square: {
                            right: "12px",
                            top: "12px"
                        },
                        round: {
                            right: "-8px",
                            top: "-8px"
                        }
                    }
                })),
                O = (0, p.iv)(S(), (function(e) {
                    return e.theme, "#ccc"
                })),
                T = (0, p.ZP)(m.J).withConfig({
                    componentId: "sc-3676ad3c-2"
                })(z()),
                E = (0, p.ZP)(x._).withConfig({
                    componentId: "sc-3676ad3c-3"
                })(L(), O, N, T, (function(e) {
                    return e.theme, "#ccc"
                }), (function(e) {
                    return (0, w.Um)({
                        variants: {
                            light: {
                                borderColor: q(e.theme)
                            },
                            dark: {
                                borderColor: D(e.theme)
                            }
                        }
                    })
                }), T, (function(e) {
                    return (0, w.Um)({
                        variants: {
                            light: {
                                color: q(e.theme)
                            },
                            dark: {
                                color: D(e.theme)
                            }
                        }
                    })
                }), (function(e) {
                    return e.$disabled && (0, p.iv)(U())
                }), (function(e) {
                    return "overlay" === e.variant && (0, p.iv)(A(), K)
                }), (function(e) {
                    return (0, v.variant)({
                        prop: "shape",
                        variants: {
                            round: {
                                borderRadius: e.theme.borderRadius.circle
                            },
                            square: {
                                borderRadius: e.theme.borderRadius.default
                            }
                        }
                    })
                }))
        },
        45116: function(e, n, r) {
            r.d(n, {
                e: function() {
                    return o
                }
            });
            var t = r(24246),
                a = (r(27378), r(98784)),
                i = r(19378),
                o = function(e) {
                    var n = e.children,
                        r = e.trigger,
                        o = e.initiallyOpen,
                        l = e.overrides;
                    return (0, t.jsx)(i.u_, {
                        focusFirstFocusableElement: !1,
                        initiallyOpen: o,
                        overrides: (0, a.merge)({
                            Dialog: {
                                props: {
                                    style: {
                                        height: "min(calc(100vw - 50px), calc(100vh - 50px))",
                                        width: "min(calc(100vw - 50px), calc(100vh - 50px))",
                                        background: "transparent",
                                        border: 0,
                                        position: "initial",
                                        borderRadius: "initial"
                                    }
                                }
                            },
                            CloseRoot: {
                                style: {
                                    top: 8,
                                    right: 8
                                }
                            }
                        }, l),
                        position: "centered",
                        trigger: r,
                        children: n
                    })
                }
        },
        5179: function(e, n, r) {
            r.r(n);
            var t = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "input"
                    }],
                    n = [{
                        kind: "Variable",
                        name: "input",
                        variableName: "input"
                    }],
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "ProfileImageMutation",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [r],
                            storageKey: null
                        }],
                        type: "Mutation",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "ProfileImageMutation",
                        selections: [{
                            alias: null,
                            args: n,
                            concreteType: "AccountType",
                            kind: "LinkedField",
                            name: "account",
                            plural: !1,
                            selections: [r, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "75fc44089a8f98943e046805a6fb2a2c",
                        id: null,
                        metadata: {},
                        name: "ProfileImageMutation",
                        operationKind: "mutation",
                        text: "mutation ProfileImageMutation(\n  $input: AccountMutationInput!\n) {\n  account(input: $input) {\n    imageUrl\n    id\n  }\n}\n"
                    }
                }
            }();
            t.hash = "e9efa8b36e5861abcde9971f1426320e", n.default = t
        },
        474: function(e, n, r) {
            r.r(n);
            var t = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ProfileImage_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }],
                type: "AccountType",
                abstractKey: null,
                hash: "d530f7d2f491feca9849e238ccfacc84"
            };
            n.default = t
        },
        36537: function(e, n, r) {
            r.d(n, {
                p: function() {
                    return t
                }
            });
            var t = function(e) {
                return 1048576 * e
            }
        }
    }
]);
//# sourceMappingURL=25459-00d7d0f2dd807d2c.js.map