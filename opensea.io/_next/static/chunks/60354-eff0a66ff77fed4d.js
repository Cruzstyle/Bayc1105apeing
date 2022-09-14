"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [60354], {
        82167: function(n, e, a) {
            a.d(e, {
                e: function() {
                    return K
                }
            });
            var l = a(85034),
                i = a(70169),
                t = a(19989),
                s = a(24246),
                r = (a(27378), a(4402)),
                o = a(47892),
                c = a(66791),
                d = a(1569),
                u = a(25459),
                m = a(53585),
                g = a(96150),
                p = a(16611),
                h = a(72363),
                y = a(65175),
                v = a(87481),
                f = a(6300),
                k = (a(59809), a(2082)),
                x = a(40869),
                b = a(11652),
                F = a(66079),
                T = a(33609),
                j = a(90761);

            function A() {
                var n = (0, t.Z)(["\n  &:hover {\n    ", "\n  }\n  &:active {\n    ", "\n  }\n"]);
                return A = function() {
                    return n
                }, n
            }

            function w() {
                var n = (0, t.Z)(["\n  display: inline-flex;\n  align-items: center;\n  height: 24px;\n  width: 100%;\n\n  &.AccountLink--variant-both {\n    display: inline-flex;\n  }\n\n  .AccountLink--ellipsis-variant-both {\n    display: inline-block;\n  }\n\n  .AccountLink--ellipsis-overflow {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  .AccountLink--image {\n    cursor: pointer;\n    margin-right: 8px;\n  }\n\n  &.AccountLink--light-container {\n    .AccountLink--light-image {\n      border: 2px solid white;\n      border-radius: 50%;\n      margin: 0 4px;\n    }\n\n    .AccountLink--light-text {\n      color: white;\n    }\n\n    &:hover {\n      .AccountLink--light-image {\n        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);\n      }\n\n      .AccountLink--light-text {\n        text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);\n      }\n    }\n  }\n"]);
                return w = function() {
                    return n
                }, n
            }
            var K = function(n) {
                    var e = n.className,
                        t = n.dataKey,
                        o = n.isCreator,
                        j = n.isOwner,
                        A = n.mode,
                        w = n.variant,
                        K = void 0 === w ? "both" : w,
                        I = n.ownedQuantity,
                        _ = n.target,
                        Z = n.iconSize,
                        S = void 0 === Z ? 22 : Z,
                        N = n.handleOverflow,
                        D = void 0 === N || N,
                        E = n.justifyContent,
                        P = n.fontWeight,
                        B = void 0 === P ? "inherit" : P,
                        U = n.testId,
                        M = void 0 === U ? "AccountLink" : U,
                        W = n.isLink,
                        q = void 0 === W || W,
                        O = n.showBadge,
                        Q = void 0 === O || O,
                        Y = (0, f.q)("components"),
                        z = (0, v.b)().wallet,
                        X = (0, r.useFragment)(a(25735), t),
                        G = X.address,
                        J = X.user,
                        H = X.config,
                        R = X.isCompromised,
                        V = X.displayName,
                        $ = (null === J || void 0 === J ? void 0 : J.publicUsername) ? (0, F.aF)(J.publicUsername, 21) : null !== V && void 0 !== V ? V : void 0,
                        nn = z.isActiveAccount(X) ? "you" : $ || (0, x.Tg)(G),
                        en = (0, k.F)(X, o);
                    return o ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(h.pU, {
                            lessThan: "sm",
                            children: (0, s.jsxs)(g.k, {
                                alignItems: "center",
                                children: [(0, s.jsxs)(p.WX, {
                                    as: "div",
                                    variant: "caption",
                                    children: [Y("accounts.by", "By"), "\xa0"]
                                }), (0, s.jsx)(d.r, {
                                    href: en,
                                    children: (0, s.jsx)(C, {
                                        as: "span",
                                        variant: "h6",
                                        children: nn
                                    })
                                }), Q && (0, s.jsx)(c.ZP, {
                                    config: H,
                                    isCompromised: !!R,
                                    tooltipPlacement: "bottom",
                                    variant: "tiny"
                                })]
                            })
                        }), (0, s.jsx)(h.pU, {
                            greaterThanOrEqual: "sm",
                            children: (0, s.jsxs)(g.k, {
                                alignItems: "center",
                                children: [(0, s.jsxs)(p.WX, {
                                    as: "div",
                                    variant: "body-dark",
                                    children: [Y("accounts.by", "By"), "\xa0"]
                                }), (0, s.jsx)(d.r, {
                                    href: en,
                                    children: (0, s.jsx)(C, {
                                        as: "div",
                                        variant: "bold",
                                        children: nn
                                    })
                                }), Q && (0, s.jsx)(c.ZP, {
                                    config: H,
                                    isCompromised: !!R,
                                    variant: "tiny"
                                })]
                            })
                        })]
                    }) : (0, s.jsxs)(L, {
                        className: (0, T.A)("AccountLink", {
                            "light-container": "light" === A,
                            "ellipsis-overflow": "both" !== K && D,
                            "variant-both": "both" === K
                        }, e),
                        "data-testid": M,
                        justifyContent: E,
                        children: ["no-image" !== K && (0, s.jsx)(m.g, (0, i.Z)((0, l.Z)({}, q ? {
                            as: d.r,
                            href: (0, k.F)(X),
                            target: _,
                            onClick: function(n) {
                                return n.stopPropagation()
                            }
                        } : void 0), {
                            fontWeight: B,
                            children: (0, s.jsx)(y.u, {
                                content: nn,
                                children: (0, s.jsx)("span", {
                                    children: (0, s.jsx)(u.m, {
                                        className: (0, T.A)("AccountLink", {
                                            image: !A,
                                            "light-image": "light" === A
                                        }),
                                        data: X,
                                        size: S
                                    })
                                })
                            })
                        })), (0, s.jsxs)(s.Fragment, {
                            children: [j ? I ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, F.aF)((0, b.zh)(I), 19), "\xa0", Y("accounts.ownedByMidfix", "owned by"), "\xa0"]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [Y("accounts.ownedByPrefix", "Owned by"), "\xa0"]
                            }) : "", "only-image" !== K && (0, s.jsx)(m.g, (0, i.Z)((0, l.Z)({
                                className: (0, T.A)("AccountLink", {
                                    "light-text": "light" === A,
                                    "ellipsis-overflow": D,
                                    "ellipsis-variant-both": D && "both" === K
                                })
                            }, q ? {
                                as: d.r,
                                href: en,
                                target: _,
                                onClick: function(n) {
                                    n.stopPropagation()
                                }
                            } : void 0), {
                                fontWeight: B,
                                children: (0, s.jsx)("span", {
                                    children: nn
                                })
                            }))]
                        }), Q && (0, s.jsx)(c.ZP, {
                            config: H,
                            isCompromised: R
                        })]
                    })
                },
                C = (0, o.ZP)(p.WX).withConfig({
                    componentId: "sc-b53caa5b-0"
                })(A(), (function(n) {
                    return (0, j.Um)({
                        variants: {
                            dark: {
                                color: n.theme.colors.gray
                            },
                            light: {
                                color: n.theme.colors.oil
                            }
                        }
                    })
                }), (function(n) {
                    return (0, j.Um)({
                        variants: {
                            dark: {
                                color: n.theme.colors.ash
                            },
                            light: {
                                color: n.theme.colors.darkGray
                            }
                        }
                    })
                })),
                L = (0, o.ZP)(m.g).withConfig({
                    componentId: "sc-b53caa5b-1"
                })(w())
        },
        89635: function(n, e, a) {
            a.d(e, {
                E: function() {
                    return x
                }
            });
            var l = a(85034),
                i = a(70169),
                t = a(19989),
                s = a(24246),
                r = (a(27378), a(4402)),
                o = a(47892),
                c = a(1569),
                d = a(510),
                u = a(53585),
                m = a(96150),
                g = a(72363),
                p = a(59809),
                h = a(9288),
                y = a(11652),
                v = a(42565);

            function f() {
                var n = (0, t.Z)(["\n  .AssetCell--img {\n    border-radius: ", ";\n    border: 1px solid ", ";\n    display: flex;\n    justify-content: center;\n    flex: 0 0 auto;\n    width: fit-content;\n  }\n\n  .AssetCell--img-small {\n    width: 50%;\n  }\n"]);
                return f = function() {
                    return n
                }, n
            }
            var k = function(n) {
                    var e = n.name,
                        a = n.quantityDisplayText,
                        l = n.className;
                    return (0, s.jsx)(u.g, {
                        as: "span",
                        className: l,
                        display: {
                            _: "none",
                            sm: "inline-block"
                        },
                        marginLeft: "8px",
                        textAlign: "left",
                        children: (0, s.jsxs)(d.n, {
                            lines: 2,
                            children: [e, a]
                        })
                    })
                },
                x = function(n) {
                    var e, t, o, d, f, x, F, T = n.item,
                        j = n.quantity,
                        A = n.fullscreenBreakpoint,
                        w = void 0 === A ? "sm" : A,
                        K = n.renderName,
                        C = void 0 === K ? k : K,
                        L = n.link,
                        I = void 0 === L || L,
                        _ = n.onClick,
                        Z = n.overrides,
                        S = void 0 === Z ? {} : Z,
                        N = (0, r.useFragment)(a(6370), T),
                        D = "AssetBundleType" === (null === N || void 0 === N ? void 0 : N.__typename),
                        E = (0, p.v$)(null === N || void 0 === N ? void 0 : N.assetQuantities).slice(0, 2),
                        P = null !== (F = null !== (x = null !== (f = null !== (d = null === N || void 0 === N ? void 0 : N.name) && void 0 !== d ? d : null === (e = E[0]) || void 0 === e ? void 0 : e.asset.name) && void 0 !== f ? f : null === N || void 0 === N || null === (t = N.bundleCollection) || void 0 === t ? void 0 : t.name) && void 0 !== x ? x : null === N || void 0 === N || null === (o = N.collection) || void 0 === o ? void 0 : o.name) && void 0 !== F ? F : "",
                        B = j && j.isGreaterThan(1) ? " x".concat((0, y.zh)(j)) : "",
                        U = N ? (0, h.y)(N) : void 0;
                    return (0, s.jsx)(b, {
                        children: (0, s.jsx)(u.g, (0, i.Z)((0, l.Z)({}, I ? (0, l.Z)({}, {
                            href: U,
                            as: c.r
                        }) : {}), {
                            color: "inherit",
                            display: "block",
                            onClick: _,
                            children: (0, s.jsxs)(m.k, {
                                alignItems: "center",
                                children: [D ? (0, s.jsx)("div", {
                                    className: "AssetCell--img",
                                    children: E.map((function(n) {
                                        return (0, s.jsx)(v.N, (0, l.Z)({
                                            asset: n.asset,
                                            className: "AssetCell--img-small"
                                        }, S.AssetMedia), n.relayId)
                                    }))
                                }) : N ? (0, s.jsx)(v.N, (0, l.Z)({
                                    asset: N,
                                    className: "AssetCell--img",
                                    size: 48
                                }, S.AssetMedia)) : null, (0, s.jsx)(g.pU, {
                                    greaterThanOrEqual: w,
                                    children: function(n, e) {
                                        return e ? C({
                                            name: P,
                                            quantityDisplayText: B,
                                            className: n
                                        }) : void 0
                                    }
                                })]
                            })
                        }))
                    })
                },
                b = o.ZP.div.withConfig({
                    componentId: "sc-7c6f05bd-0"
                })(f(), (function(n) {
                    return n.theme.borderRadius.default
                }), (function(n) {
                    return n.theme.colors.border
                }))
        },
        58202: function(n, e, a) {
            a.d(e, {
                X: function() {
                    return s
                }
            });
            var l = a(24246),
                i = (a(27378), a(51840)),
                t = a(24140),
                s = function(n) {
                    var e = n.interval,
                        a = void 0 === e ? 1e3 : e,
                        s = n.renderFormattedTimestamp,
                        r = (0, i.Z)();
                    return (0, t.Z)(r, a), (0, l.jsx)(l.Fragment, {
                        children: s()
                    })
                }
        },
        62699: function(n, e, a) {
            a.d(e, {
                F: function() {
                    return y
                }
            });
            var l = a(85034),
                i = a(19989),
                t = a(24246),
                s = (a(27378), a(4402)),
                r = a(47892),
                o = a(55700),
                c = a(48257),
                d = a(58202),
                u = a(53585),
                m = a(65175),
                g = a(6300),
                p = (a(59809), a(97516));

            function h() {
                var n = (0, i.Z)(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n\n  .EventTimestamp--link {\n    color: ", ";\n  }\n"]);
                return h = function() {
                    return n
                }, n
            }
            var y = function(n) {
                    var e = n.className,
                        i = n.data,
                        r = n.fontWeight,
                        h = n.subtle,
                        y = void 0 !== h && h,
                        f = n.overrides,
                        k = void 0 === f ? {} : f,
                        x = (0, g.q)("components"),
                        b = (0, s.useFragment)(a(15720), i),
                        F = b.eventTimestamp,
                        T = b.transaction,
                        j = (0, t.jsx)(d.X, {
                            renderFormattedTimestamp: function() {
                                return (0, p.vm)((0, p.pY)(F))
                            }
                        }),
                        A = (0, p.pY)(F).format("MMMM D YYYY, h:mm a");
                    return (0, t.jsx)(v, {
                        className: e,
                        "data-testid": "EventTimestamp",
                        fontWeight: r,
                        subtle: y,
                        children: (0, t.jsx)(m.u, {
                            content: A,
                            interactive: !0,
                            placement: m.E.TOP,
                            children: T ? (0, t.jsxs)(o.d, {
                                className: "EventTimestamp--link",
                                href: T.blockExplorerLink,
                                title: x("eventTimestamp.blockExplorerLink.title", "Opens in a new window"),
                                children: [j, " ", (0, t.jsx)(u.g, {
                                    display: "inline-block",
                                    lineHeight: "0",
                                    marginBottom: "2px",
                                    verticalAlign: "middle",
                                    children: (0, t.jsx)(c.J, (0, l.Z)({
                                        "aria-hidden": !0,
                                        className: "EventTimestamp--link-icon",
                                        value: "open_in_new"
                                    }, k.Icon))
                                })]
                            }) : (0, t.jsx)("span", {
                                children: j
                            })
                        })
                    })
                },
                v = (0, r.ZP)(u.g).withConfig({
                    componentId: "sc-78d7ccf0-0"
                })(h(), (function(n) {
                    return n.subtle ? n.theme.colors.text.subtle : void 0
                }))
        },
        25735: function(n, e, a) {
            a.r(e);
            var l = function() {
                var n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "address",
                        storageKey: null
                    },
                    e = {
                        alias: null,
                        args: null,
                        concreteType: "UserType",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "publicUsername",
                            storageKey: null
                        }],
                        storageKey: null
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AccountLink_data",
                    selections: [n, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "config",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCompromised",
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "displayName",
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "ProfileImage_data"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "wallet_accountKey",
                        selections: [n],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "accounts_url",
                        selections: [n, e],
                        args: null,
                        argumentDefinitions: []
                    }],
                    type: "AccountType",
                    abstractKey: null
                }
            }();
            l.hash = "34eb3e12ba8b373ed6b27e35acb85532", e.default = l
        },
        15720: function(n, e, a) {
            a.r(e);
            var l = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "EventTimestamp_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "eventTimestamp",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "TransactionType",
                    kind: "LinkedField",
                    name: "transaction",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "blockExplorerLink",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "AssetEventType",
                abstractKey: null,
                hash: "0fe67eb891265a708d5b4b07cbf3da10"
            };
            e.default = l
        },
        6370: function(n, e, a) {
            a.r(e);
            var l = function() {
                var n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    },
                    e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        concreteType: "ChainType",
                        kind: "LinkedField",
                        name: "chain",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "identifier",
                            storageKey: null
                        }],
                        storageKey: null
                    },
                    l = [e],
                    i = {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AssetMedia_asset"
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ItemCell_data",
                    selections: [n, e, {
                        kind: "InlineDataFragmentSpread",
                        name: "item_url",
                        selections: [n, {
                            kind: "InlineFragment",
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "asset_url",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetContractType",
                                    kind: "LinkedField",
                                    name: "assetContract",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "address",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "tokenId",
                                    storageKey: null
                                }, a],
                                args: null,
                                argumentDefinitions: []
                            }],
                            type: "AssetType",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                kind: "InlineDataFragmentSpread",
                                name: "bundle_url",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "slug",
                                    storageKey: null
                                }, a],
                                args: null,
                                argumentDefinitions: []
                            }],
                            type: "AssetBundleType",
                            abstractKey: null
                        }],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: l,
                            storageKey: null
                        }, i],
                        type: "AssetType",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: "bundleCollection",
                            args: null,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "collection",
                            plural: !1,
                            selections: l,
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 30
                            }],
                            concreteType: "AssetQuantityTypeConnection",
                            kind: "LinkedField",
                            name: "assetQuantities",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AssetQuantityTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [e, i],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "relayId",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: "assetQuantities(first:30)"
                        }],
                        type: "AssetBundleType",
                        abstractKey: null
                    }],
                    type: "ItemType",
                    abstractKey: "__isItemType"
                }
            }();
            l.hash = "0c754c25e838dc3d70329303d95fcf25", e.default = l
        },
        67620: function(n, e, a) {
            a.r(e);
            var l = {
                kind: "InlineDataFragment",
                name: "item_url",
                hash: "17b374cde23b9cde6b795dce8796edec"
            };
            e.default = l
        },
        9288: function(n, e, a) {
            a.d(e, {
                y: function() {
                    return r
                }
            });
            a(59809);
            var l = a(67286),
                i = a(20889),
                t = a(75614),
                s = (0, l.A)(a(67620), (function(n) {
                    return n
                })),
                r = function(n) {
                    var e = s(n);
                    switch (e.__typename) {
                        case "AssetType":
                            return (0, i.Vh)(e);
                        case "AssetBundleType":
                            return (0, t.J)(e);
                        default:
                            return ""
                    }
                }
        }
    }
]);
//# sourceMappingURL=60354-eff0a66ff77fed4d.js.map