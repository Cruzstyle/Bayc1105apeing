"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [76158], {
        75500: function(e, n, t) {
            t.d(n, {
                v: function() {
                    return v
                }
            });
            var r = t(19989),
                a = t(24246),
                i = (t(27378), t(47892)),
                l = t(25401),
                o = t(53585),
                s = t(96150),
                c = t(39283),
                d = t(65175),
                u = t(6300),
                g = t(20807);

            function m() {
                var e = (0, r.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  height: 10px;\n  min-width: 10px;\n  position: absolute;\n  right: 20.5%;\n  top: 0%;\n  border: 1px solid ", ";\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, r.Z)(["\n  height: 10px;\n  min-width: 10px;\n  position: absolute;\n  right: 12.5%;\n  bottom: 16%;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function h() {
                var e = (0, r.Z)(["\n  border-radius: ", ";\n"]);
                return h = function() {
                    return e
                }, e
            }
            var x = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-e5ea24e1-0"
                })(m(), (function(e) {
                    return e.theme.colors.seaGrass
                }), (function(e) {
                    return e.theme.radii.circle
                }), (function(e) {
                    return e.theme.colors.border
                })),
                f = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-e5ea24e1-1"
                })(p()),
                y = (0, i.ZP)(c.E).withConfig({
                    componentId: "sc-e5ea24e1-2"
                })(h(), (function(e) {
                    return e.theme.borderRadius.circle
                })),
                v = function(e) {
                    var n = e.url,
                        t = e.isNew,
                        r = e.isVerified,
                        i = e.name,
                        c = (0, u.q)("components");
                    return (0, a.jsxs)(o.g, {
                        position: "relative",
                        children: [(0, a.jsx)(s.k, {
                            border: "1px solid",
                            borderColor: "border",
                            borderRadius: "circle",
                            marginX: "8px",
                            children: (0, a.jsx)(y, {
                                alt: i ? c("collections.avatar.alt", "{{name}} profile image", {
                                    name: i
                                }, {
                                    forceString: !0
                                }) : "",
                                height: 50,
                                layout: "fixed",
                                objectFit: "cover",
                                src: n ? (0, g.X0)((0, g.tg)(n, {
                                    size: 50
                                })) : "",
                                unoptimized: !0,
                                width: 50
                            })
                        }), t && (0, a.jsx)(d.u, {
                            content: c("collections.avatar.newTooltip", "New"),
                            children: (0, a.jsx)(x, {})
                        }), r && (0, a.jsx)(f, {
                            "aria-hidden": "true",
                            children: (0, a.jsx)(l.S, {
                                size: "small"
                            })
                        })]
                    })
                }
        },
        8381: function(e, n, t) {
            t.d(n, {
                V: function() {
                    return m
                }
            });
            var r = t(19989),
                a = t(24246),
                i = (t(27378), t(47892)),
                l = t(53585),
                o = t(96150),
                s = t(90761),
                c = t(33609),
                d = t(17813),
                u = t(1569);

            function g() {
                var e = (0, r.Z)(["\n  display: inline-block;\n  width: 100%;\n\n  .CarouselCard--main {\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);\n    display: inline-block;\n    background-color: ", ";\n    border-radius: ", ";\n    cursor: pointer;\n    width: 100%;\n\n    &:hover {\n      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);\n      ", "\n      transition: 0.1s;\n    }\n\n    .CarouselCard--image {\n      border-radius: inherit;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: 1px solid ", ";\n      background-color: ", ";\n      &:hover {\n        ", "\n      }\n    }\n\n    .CarouselCard--content {\n      flex-direction: column;\n      padding: 10px;\n    }\n  }\n"]);
                return g = function() {
                    return e
                }, e
            }
            var m = function(e) {
                    var n = e.imageUrl,
                        t = e.href,
                        r = e.imageWidth,
                        i = e.imageHeight,
                        l = e.containerClassName,
                        s = e.contentClassName,
                        g = e.className,
                        m = e.children,
                        h = e.eventSource,
                        x = e.alt;
                    return (0, a.jsx)(p, {
                        className: l,
                        children: (0, a.jsxs)(u.r, {
                            className: (0, c.A)("CarouselCard", {
                                main: !0
                            }, g),
                            eventSource: h,
                            href: t,
                            children: [(0, a.jsx)(d.Z, {
                                alt: x,
                                className: "CarouselCard--image",
                                height: i,
                                sizing: "cover",
                                url: n,
                                width: r
                            }), (0, a.jsx)(o.k, {
                                className: (0, c.A)("CarouselCard", {
                                    content: !0
                                }, s),
                                children: m
                            })]
                        })
                    })
                },
                p = (0, i.ZP)(l.g).withConfig({
                    componentId: "sc-23f6bfe7-0"
                })(g(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return (0, s.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return e.theme.colors.border
                }), (function(e) {
                    return (0, s.Um)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.ash,
                                backgroundColor: e.theme.colors.ash,
                                transition: "border-color 0.25s ease-in-out, background-color 0.25s ease-in-out"
                            }
                        }
                    })
                }))
        },
        40857: function(e, n, t) {
            t.d(n, {
                c: function() {
                    return K
                },
                F: function() {
                    return Z
                }
            });
            var r = t(19989),
                a = t(24246),
                i = (t(27378), t(47892)),
                l = t(81480),
                o = t(53585),
                s = t(20807);

            function c() {
                var e = (0, r.Z)(["\n  /* Below required to make the video responsive based on device width. */\n  height: 0;\n  padding-bottom: 56.25%; /* 16:9 */\n  position: relative;\n\n  iframe,\n  object,\n  embed {\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n"]);
                return c = function() {
                    return e
                }, e
            }
            var d = function(e) {
                    var n = e.url,
                        t = e.autoplay,
                        r = void 0 !== t && t,
                        i = e.loop,
                        l = e.showControls,
                        o = void 0 === l || l,
                        c = e.title,
                        d = e.playlist,
                        g = void 0 === d || d;
                    return (0, s.yk)(n) ? (0, a.jsx)(u, {
                        children: (0, a.jsx)("iframe", {
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            frameBorder: "0",
                            height: "315",
                            sandbox: "allow-same-origin allow-scripts allow-presentation",
                            src: (0, s.dJ)(n, r, i, o, g),
                            title: c,
                            width: "560"
                        })
                    }) : null
                },
                u = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-268bc6dd-0"
                })(c()),
                g = t(56656),
                m = t(377),
                p = t(96150),
                h = t(16611),
                x = t(6300),
                f = t(70884),
                y = t(90761);

            function v() {
                var e = (0, r.Z)(["\n  padding-top: 40px;\n  width: 100%;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, r.Z)(["\n      padding-bottom: 0;\n    "]);
                return b = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, r.Z)(["\n  width: 100%;\n  padding-top: 40px;\n  padding-bottom: 40px;\n\n  ", "\n\n  ", ";\n"]);
                return k = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r.Z)(["\n  max-width: ", ";\n  width: 100%;\n"]);
                return j = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, r.Z)(["\n      font-size: 40px;\n    "]);
                return w = function() {
                    return e
                }, e
            }

            function F() {
                var e = (0, r.Z)(["\n  font-size: 32px;\n  margin-bottom: 8px;\n  margin-top: 0;\n  text-align: center;\n  width: 100%;\n\n  ", "\n"]);
                return F = function() {
                    return e
                }, e
            }

            function C() {
                var e = (0, r.Z)(["\n      margin-bottom: 20px;\n    "]);
                return C = function() {
                    return e
                }, e
            }

            function S() {
                var e = (0, r.Z)(["\n  text-align: center;\n  margin-bottom: 40px;\n\n  ", "\n"]);
                return S = function() {
                    return e
                }, e
            }

            function T() {
                var e = (0, r.Z)(["\n      background: url(", ") center / contain no-repeat;\n      padding: 40px 100px 80px;\n    "]);
                return T = function() {
                    return e
                }, e
            }

            function _() {
                var e = (0, r.Z)(["\n  ", "\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function P() {
                var e = (0, r.Z)(["\n      margin-bottom: 80px;\n      margin-top: 0;\n    "]);
                return P = function() {
                    return e
                }, e
            }

            function L() {
                var e = (0, r.Z)(["\n  justify-content: center;\n  margin-bottom: 0;\n  margin-top: 40px;\n\n  .MeetOpenSea--button {\n    text-align: center;\n  }\n\n  ", "\n"]);
                return L = function() {
                    return e
                }, e
            }
            var K = "meetopensea",
                Z = function(e) {
                    var n = e.showButton,
                        t = (0, x.q)("components");
                    return (0, a.jsx)(A, {
                        id: K,
                        children: (0, a.jsx)(D, {
                            children: (0, a.jsxs)(I, {
                                children: [(0, a.jsx)(V, {
                                    children: t("intro.title", "Meet OpenSea")
                                }), (0, a.jsx)(U, {
                                    children: t("intro.subtitle", "The NFT marketplace with everything for everyone")
                                }), (0, a.jsx)(B, {
                                    children: (0, a.jsx)(d, {
                                        title: "Meet OpenSea",
                                        url: "https://www.youtube.com/watch?v=gfGuPd1CELo"
                                    })
                                }), n ? (0, a.jsx)(O, {
                                    children: (0, a.jsx)(g.zx, {
                                        className: "MeetOpenSea--button",
                                        href: "/explore-collections",
                                        children: t("intro.mainCTA", "Explore the marketplace")
                                    })
                                }) : null]
                            })
                        })
                    })
                },
                A = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-f1a4c2e6-0"
                })(v()),
                D = (0, i.ZP)(m._).withConfig({
                    componentId: "sc-f1a4c2e6-1"
                })(k(), (0, l.FD)({
                    medium: (0, i.iv)(b())
                }), (function(e) {
                    var n = e.theme;
                    return (0, y.Um)({
                        variants: {
                            light: {
                                "background-color": n.colors.lightMarina
                            },
                            dark: {
                                "background-color": n.colors.onyx
                            }
                        }
                    })
                })),
                I = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-f1a4c2e6-2"
                })(j(), (function(e) {
                    return e.theme.maxWidth.largePadding
                })),
                V = (0, i.ZP)(h.WX).attrs({
                    variant: "h2"
                }).withConfig({
                    componentId: "sc-f1a4c2e6-3"
                })(F(), (0, l.FD)({
                    phoneXl: (0, i.iv)(w())
                })),
                U = (0, i.ZP)(h.WX).withConfig({
                    componentId: "sc-f1a4c2e6-4"
                })(S(), (0, l.FD)({
                    medium: (0, i.iv)(C())
                })),
                B = (0, i.ZP)(o.g).withConfig({
                    componentId: "sc-f1a4c2e6-5"
                })(_(), (0, l.FD)({
                    medium: (0, i.iv)(T(), f.Xg)
                })),
                O = (0, i.ZP)(p.k).withConfig({
                    componentId: "sc-f1a4c2e6-6"
                })(L(), (0, l.FD)({
                    medium: (0, i.iv)(P())
                }))
        },
        23043: function(e, n, t) {
            t.d(n, {
                z: function() {
                    return h
                }
            });
            var r = t(19989),
                a = t(24246),
                i = (t(27378), t(71636)),
                l = t.n(i),
                o = t(4402),
                s = t(47892),
                c = t(77324),
                d = t(81480),
                u = t(96150),
                g = (t(59809), t(18117));

            function m() {
                var e = (0, r.Z)(["\n      .Carousel--left-arrow {\n        top: 63%;\n      }\n\n      .Carousel--right-arrow {\n        top: 63%;\n      }\n    "]);
                return m = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, r.Z)(["\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n\n  .Carousel--left-arrow {\n    left: -17px;\n    top: 62.5%;\n  }\n\n  .Carousel--right-arrow {\n    right: -17px;\n    top: 62.5%;\n  }\n\n  ", "\n"]);
                return p = function() {
                    return e
                }, e
            }
            var h = function(e) {
                    var n = e.data,
                        r = e.title,
                        i = (0, o.useFragment)(t(85952), n),
                        s = (null !== i && void 0 !== i ? i : []).filter((function(e) {
                            return Boolean(e.saleStartTime)
                        }));
                    if (0 === s.length) return null;
                    var d = l()();
                    return (0, a.jsxs)(x, {
                        children: [r, (0, a.jsx)(c.Z, {
                            slidesNumber: s.length,
                            children: s.map((function(e) {
                                return (0, a.jsx)(g.J, {
                                    now: d,
                                    promotion: e
                                }, e.relayId)
                            }))
                        })]
                    })
                },
                x = (0, s.ZP)(u.k).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-a262619-0"
                })(p(), (0, d.FD)({
                    extraLarge: (0, s.iv)(m())
                }))
        },
        40422: function(e, n, t) {
            t.d(n, {
                e: function() {
                    return c
                }
            });
            var r = t(24246),
                a = (t(27378), t(1569)),
                i = t(16611),
                l = t(19378),
                o = t(6300),
                s = t(70884),
                c = function(e) {
                    var n = e.onClose,
                        t = e.variant,
                        c = (0, o.q)("modals");
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.u_.Header, {
                            children: (0, r.jsx)(l.u_.Title, {
                                children: "account" === t ? c("delistedNotice.unavailableItem.withAccount.title", "This item is no longer available on OpenSea") : c("delistedNotice.unavailableItem.withoutAccount.title", "The item you tried to visit is no longer available on OpenSea")
                            })
                        }), (0, r.jsx)(l.u_.Body, {
                            children: (0, r.jsxs)("div", {
                                className: "DelistedNotice--content",
                                children: [(0, r.jsx)(i.WX, {
                                    children: "account" === t ? c("delistedNotice.unavailableItem.withAccount.description", "This item is no longer available on OpenSea. It will not be visible or\n                accessible to anyone browsing the marketplace or your profile") : c("delistedNotice.unavailableItem.withoutAccount.description", "The item you tried to visit is no longer available on OpenSea. It will not be visible or\n                accessible to anyone browsing the marketplace")
                                }), (0, r.jsx)(i.WX, {
                                    children: c("delistedNotice.learnMoreUnavailableItem.descrption", "\n            To learn more about why {{item}} is no longer available, read {{helpCenterLink}}. If you have questions or concerns regarding this action, contact\n            the OpenSea team {{supportLink}}.", {
                                        item: "account" === t ? c("delistedNotice.withAccount.item.fragment", "this item") : c("delistedNotice.withoutAccount.itemVisited.fragment", "the item you tried to visit"),
                                        helpCenterLink: (0, r.jsx)(a.r, {
                                            href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500010625362",
                                            children: c("delistedNotice.helpcenter.link", "our Help Center guide on this topic")
                                        }),
                                        supportLink: (0, r.jsx)(a.r, {
                                            href: s.av,
                                            children: c("delistedNotice.here.link", "here")
                                        })
                                    })
                                })]
                            })
                        }), (0, r.jsx)(l.u_.Footer, {
                            children: (0, r.jsx)(l.u_.Footer.Button, {
                                variant: "secondary",
                                onClick: n,
                                children: c("common.close", "Close")
                            })
                        })]
                    })
                }
        },
        31154: function(e, n, t) {
            t.d(n, {
                a: function() {
                    return K
                }
            });
            var r = t(17599),
                a = t(85034),
                i = t(70169),
                l = t(19989),
                o = t(3204),
                s = t(24246),
                c = t(27378),
                d = t(47892),
                u = t(18455),
                g = t(29631),
                m = t(48257),
                p = t(53585),
                h = t(72363),
                x = t(48599),
                f = t(90761);
            t(75627);

            function y() {
                var e = (0, l.Z)(["\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }

            function v() {
                var e = (0, l.Z)(["\n          left: 6px;\n        "]);
                return v = function() {
                    return e
                }, e
            }

            function b() {
                var e = (0, l.Z)(["\n          right: 6px;\n        "]);
                return b = function() {
                    return e
                }, e
            }

            function k() {
                var e = (0, l.Z)(["\n            left: -24px;\n          "]);
                return k = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, l.Z)(["\n            right: -24px;\n          "]);
                return j = function() {
                    return e
                }, e
            }

            function w() {
                var e = (0, l.Z)(["\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  border-radius: 50%;\n  transform: translateY(-50%);\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n  background-color: ", ";\n\n  &:hover {\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n    ", "\n  }\n\n  ", "\n\n  @media (min-width: ", "px) {\n    padding: 4px;\n  }\n\n  @media (min-width: ", "px) {\n    ", "\n  }\n\n  ", ";\n"]);
                return w = function() {
                    return e
                }, e
            }
            var F = function(e) {
                    var n = e.arrowSize,
                        t = void 0 === n ? 40 : n,
                        r = e.arrowStyles,
                        a = e.className,
                        i = e.direction;
                    return (0, s.jsx)(L, {
                        $arrowStyles: r,
                        $direction: i,
                        "aria-label": "left" === i ? "Previous slide" : "Next slide",
                        className: a,
                        children: (0, s.jsx)(m.J, {
                            size: t,
                            value: "chevron_".concat(i)
                        })
                    })
                },
                C = "swiper-nav-left",
                S = "swiper-nav-right",
                T = {
                    nextEl: ".".concat(S),
                    prevEl: ".".concat(C)
                },
                _ = {
                    forceToAxis: !0
                },
                P = (0, d.ZP)(p.g).withConfig({
                    componentId: "sc-1ec66576-0"
                })(y(), (function(e) {
                    return e.$containerStyles
                })),
                L = (0, d.ZP)(x.k).withConfig({
                    componentId: "sc-1ec66576-1"
                })(w(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return (0, f.Um)({
                        variants: {
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), (function(e) {
                    return "left" === e.$direction ? (0, d.iv)(v()) : (0, d.iv)(b())
                }), h.AV.lg, h.AV.xl, (function(e) {
                    return "left" === e.$direction ? (0, d.iv)(k()) : (0, d.iv)(j())
                }), (function(e) {
                    return e.$arrowStyles
                })),
                K = function(e) {
                    var n, t, l, d, m, p, x, f, y, v = e.overrides,
                        b = e.enableArrowControls,
                        k = void 0 === b || b,
                        j = e.autoplayConfig,
                        w = e.carouselConfigOverride,
                        L = e.className,
                        K = e.enableMousewheel,
                        Z = void 0 === K || K,
                        A = e.enableCssMode,
                        D = void 0 !== A && A,
                        I = e.enableDotPagination,
                        V = void 0 !== I && I,
                        U = e.enableFreeScroll,
                        B = void 0 === U || U,
                        O = e.enableThumbPagination,
                        H = void 0 !== O && O,
                        N = e.loop,
                        z = void 0 !== N && N,
                        E = e.loopedSlides,
                        R = e.name,
                        M = void 0 === R ? "" : R,
                        q = e.speed,
                        W = e.responsiveConfig,
                        G = e.showScrollbar,
                        X = void 0 === G || G,
                        Q = e.slides,
                        Y = e.slidesPerView,
                        $ = void 0 === Y ? 1 : Y,
                        J = e.spaceBetween,
                        ee = void 0 === J ? 16 : J,
                        ne = e.thumbnailNavigationConfigOverride,
                        te = e.renderSlide,
                        re = e.renderThumb,
                        ae = v || {},
                        ie = ae.arrowStyles,
                        le = ae.arrowSize,
                        oe = ae.containerStyles,
                        se = (0, c.useState)((function() {
                            return [u.N1].concat((0, o.Z)(Z ? [u.Gk, u.LW] : []), (0, o.Z)(B ? [u.Rv] : []), (0, o.Z)(j ? [u.pt] : []), (0, o.Z)(V ? [u.tl] : []), (0, o.Z)(H ? [u.o3] : []), (0, o.Z)(k || H ? [u.W_] : []))
                        }))[0],
                        ce = (0, c.useState)(j ? (0, a.Z)({
                            delay: 3e3,
                            disableOnInteraction: !0,
                            pauseOnMouseEnter: !0
                        }, j) : void 0)[0],
                        de = (0, c.useState)(W ? (f = {}, (0, r.Z)(f, h.AV.xs, null !== (n = W.xs) && void 0 !== n ? n : W.default), (0, r.Z)(f, h.AV.sm, null !== (t = W.sm) && void 0 !== t ? t : W.default), (0, r.Z)(f, h.AV.md, null !== (l = W.md) && void 0 !== l ? l : W.default), (0, r.Z)(f, h.AV.lg, null !== (d = W.lg) && void 0 !== d ? d : W.default), (0, r.Z)(f, h.AV.xl, null !== (m = W.xl) && void 0 !== m ? m : W.default), (0, r.Z)(f, h.AV.xxl, null !== (p = W.xxl) && void 0 !== p ? p : W.default), (0, r.Z)(f, h.AV.xxxl, null !== (x = W.xxxl) && void 0 !== x ? x : W.default), f) : void 0)[0],
                        ue = (0, c.useState)(V ? {
                            clickable: !0
                        } : void 0)[0],
                        ge = (0, c.useState)(null),
                        me = ge[0],
                        pe = ge[1],
                        he = (0, c.useMemo)((function() {
                            return {
                                swiper: me,
                                autoScrollOffset: 1
                            }
                        }), [me]),
                        xe = (0, c.useState)(0),
                        fe = xe[0],
                        ye = xe[1],
                        ve = function(e, n) {
                            var t = n || 1;
                            return e && Object.values(e).map((function(e) {
                                var n = e.slidesPerView;
                                t = Math.max(t, n)
                            })), t
                        }(W, $),
                        be = !!k && Q.length > ve,
                        ke = (0, c.useMemo)((function() {
                            return Q.map((function(e) {
                                return (0, s.jsx)(g.o5, {
                                    children: te(e)
                                }, e.id)
                            }))
                        }), [Q, te]),
                        je = (0, c.useCallback)((function(e) {
                            var n = e.activeIndex;
                            return ye(n)
                        }), [ye]);
                    return M && (T.nextEl = ".".concat(M).concat(S), T.prevEl = ".".concat(M).concat(C)), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(P, {
                            $containerStyles: oe,
                            position: "relative",
                            children: [be && (0, s.jsx)(F, {
                                arrowSize: le,
                                arrowStyles: ie,
                                className: "".concat(M).concat(C),
                                direction: "left"
                            }), (0, s.jsx)(g.tq, (0, i.Z)((0, a.Z)({
                                autoplay: ce,
                                breakpoints: de,
                                className: L,
                                cssMode: D,
                                direction: "horizontal",
                                keyboard: !0,
                                loop: z,
                                loopAdditionalSlides: E,
                                loopedSlides: E,
                                modules: se,
                                mousewheel: Z ? _ : void 0,
                                navigation: k ? T : void 0,
                                observeParents: !0,
                                observeSlideChildren: !0,
                                observer: !0,
                                pagination: ue,
                                preventInteractionOnTransition: !0,
                                resizeObserver: !0,
                                scrollbar: X,
                                slidesPerView: $,
                                spaceBetween: ee,
                                speed: q,
                                thumbs: H ? he : void 0,
                                onActiveIndexChange: je
                            }, null === W || void 0 === W ? void 0 : W.default, w), {
                                children: ke
                            })), be && (0, s.jsx)(F, {
                                arrowSize: le,
                                arrowStyles: ie,
                                className: "".concat(M).concat(S),
                                direction: "right"
                            })]
                        }), H && (0, s.jsx)(P, {
                            $containerStyles: oe,
                            marginTop: "16px",
                            children: (0, s.jsx)(g.tq, (0, i.Z)((0, a.Z)({
                                breakpoints: (y = {}, (0, r.Z)(y, h.AV.xs, {
                                    spaceBetween: 8
                                }), (0, r.Z)(y, h.AV.lg, {
                                    spaceBetween: 12
                                }), y),
                                modules: se,
                                slidesPerView: 4,
                                watchSlidesProgress: !0,
                                onSwiper: pe
                            }, ne), {
                                children: Q.map((function(e, n) {
                                    return (0, s.jsx)(g.o5, {
                                        children: re ? re(e, n === fe) : te(e)
                                    }, "thumb-".concat(e.id))
                                }))
                            }))
                        })]
                    })
                }
        },
        45333: function(e, n, t) {
            t.d(n, {
                r: function() {
                    return j
                }
            });
            var r = t(85034),
                a = t(70169),
                i = t(31373),
                l = t(19989),
                o = t(24246),
                s = t(27378),
                c = t(47892),
                d = t(33181),
                u = t(53585),
                g = t(72363);

            function m() {
                var e = (0, l.Z)(["\n  --template-grid-gap: 8px;\n\n  --template-grid-row-gap: ", ";\n\n  --template-num-columns: ", ";\n\n  display: grid;\n  grid-template-columns: repeat(var(--template-num-columns), 1fr);\n  grid-gap: var(--template-grid-gap);\n  grid-row-gap: var(--template-grid-row-gap);\n\n  @media (min-width: ", "px) {\n    --template-grid-gap: 16px;\n  }\n\n  @media (min-width: ", "px) {\n    --template-grid-gap: 24px;\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p() {
                var e = (0, l.Z)(["\n  --grid-item-col-span: ", ";\n\n  grid-column: span var(--grid-item-col-span);\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n\n  @media (min-width: ", "px) {\n    --grid-item-col-span: ", ";\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var h = (0, s.createContext)({
                    level: 0
                }),
                x = (0, s.forwardRef)((function(e, n) {
                    var t = (0, s.useContext)(h).level;
                    if (t >= 2 && !d.Mw) throw new Error("Grid is only allowed to be nested a maximum of ".concat(2, " layers"));
                    return (0, o.jsx)(h.Provider, {
                        value: {
                            level: t + 1
                        },
                        children: (0, o.jsx)(f, (0, a.Z)((0, r.Z)({}, e), {
                            ref: n
                        }))
                    })
                })),
                f = (0, c.ZP)(u.g).withConfig({
                    componentId: "sc-f0b7d6f3-0"
                })(m(), (function(e) {
                    return void 0 !== e.gridRowGap ? "".concat(e.gridRowGap, "px") : "8px"
                }), 12, g.AV.md, g.AV.xxl),
                y = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"],
                v = {
                    xxxl: 0,
                    xxl: 1,
                    xl: 2,
                    lg: 3,
                    md: 4,
                    sm: 5,
                    xs: 6
                };

            function b(e) {
                var n = e.targetBreakpoint,
                    t = (0, i.Z)(e, ["targetBreakpoint"]);
                if (void 0 !== t[n]) return t[n];
                var r = v[n],
                    a = y.find((function(e, n) {
                        return !!t[e] && r <= n
                    }));
                return a ? t[a] : 12
            }
            var k = (0, c.ZP)(u.g).withConfig({
                    componentId: "sc-f0b7d6f3-1"
                })(p(), (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "xs"
                    }, e))
                }), g.AV.sm, (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "sm"
                    }, e))
                }), g.AV.md, (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "md"
                    }, e))
                }), g.AV.lg, (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "lg"
                    }, e))
                }), g.AV.xl, (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "xl"
                    }, e))
                }), g.AV.xxl, (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "xxl"
                    }, e))
                }), g.AV.xxxl, (function(e) {
                    return b((0, r.Z)({
                        targetBreakpoint: "xxxl"
                    }, e))
                })),
                j = Object.assign(x, {
                    Item: k
                })
        },
        31893: function(e, n, t) {
            t.d(n, {
                O: function() {
                    return o
                }
            });
            var r = t(19989),
                a = t(47892),
                i = t(53585);

            function l() {
                var e = (0, r.Z)(["\n  display: inline-flex;\n"]);
                return l = function() {
                    return e
                }, e
            }
            var o = (0, a.ZP)(i.g).withConfig({
                componentId: "sc-40f22686-0"
            })(l())
        },
        76158: function(e, n, t) {
            t.d(n, {
                dv: function() {
                    return ga
                },
                Uv: function() {
                    return ua
                }
            });
            var r = t(19989),
                a = t(24246),
                i = t(27378),
                l = t(4402),
                o = t(47892),
                s = t(1569),
                c = t(55995),
                d = t(30372),
                u = t(3204),
                g = t(98784),
                m = t(8381),
                p = t(77324),
                h = t(81480),
                x = t(53585),
                f = t(377),
                y = t(96150),
                v = t(45333),
                b = t(16611),
                k = t(72363),
                j = t(316),
                w = t(88747),
                F = t(6300),
                C = t(36332),
                S = t(41237),
                T = t(70884);

            function _() {
                var e = (0, r.Z)(["\n  margin-bottom: 24px;\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function P() {
                var e = (0, r.Z)(["\n        grid-template-columns: repeat(", ", 340px);\n        grid-template-rows: repeat(\n          ", ",\n          282px\n        );\n      "]);
                return P = function() {
                    return e
                }, e
            }

            function L() {
                var e = (0, r.Z)(["\n        padding: 0 30px;\n        grid-template-columns: repeat(", ", 182px);\n        grid-template-rows: repeat(\n          ", ",\n          156px\n        );\n      "]);
                return L = function() {
                    return e
                }, e
            }

            function K() {
                var e = (0, r.Z)(["\n        grid-template-columns: 340px;\n        grid-template-rows: repeat(", ", 282px);\n      "]);
                return K = function() {
                    return e
                }, e
            }

            function Z() {
                var e = (0, r.Z)(["\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 80px;\n  margin-top: 40px;\n\n  .BrowseCategories--card {\n    place-self: center;\n    transition: transform 0.1s ease-out;\n    border-radius: ", ";\n\n    &:hover {\n      box-shadow: ", ";\n    }\n  }\n\n  .BrowseCategories--card-container {\n    display: grid;\n    justify-content: center;\n    grid-gap: 15px;\n    margin-top: 50px;\n    width: 100%;\n    padding: 0 20px;\n\n    ", "\n  }\n\n  .BrowseCategories--title {\n    color: ", ";\n  }\n"]);
                return Z = function() {
                    return e
                }, e
            }
            var A = function() {
                    var e = (0, F.q)("components"),
                        n = (0, w.On)(),
                        t = (0, u.Z)(T.aA.map((function(e) {
                            return {
                                image: e.slug,
                                title: e.name,
                                url: "/category/".concat(e.slug),
                                text: e.text
                            }
                        }))),
                        r = (0, g.chunk)(t, 3);
                    return (0, a.jsx)(C.nx, {
                        eventSource: "BrowseCategories",
                        children: n ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(v.r.Item, {
                                marginBottom: {
                                    _: "24px",
                                    xxl: "36px"
                                },
                                children: [(0, a.jsx)(k.pU, {
                                    lessThan: "lg",
                                    children: (0, a.jsx)(j.xv.Heading, {
                                        size: "small",
                                        children: e("browseCategories.browseByCategory", "Browse by category")
                                    })
                                }), (0, a.jsxs)(k.pU, {
                                    greaterThanOrEqual: "lg",
                                    children: [(0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "xxl",
                                        children: (0, a.jsx)(j.xv.Heading, {
                                            size: "large",
                                            children: e("browseCategories.browseByCategory", "Browse by category")
                                        })
                                    }), (0, a.jsx)(k.pU, {
                                        between: ["lg", "xxl"],
                                        children: (0, a.jsx)(j.xv.Heading, {
                                            size: "medium",
                                            children: e("browseCategories.browseByCategory", "Browse by category")
                                        })
                                    })]
                                })]
                            }), (0, a.jsx)(k.pU, {
                                lessThan: "lg",
                                children: (0, a.jsx)(v.r, {
                                    children: r.map((function(e, n) {
                                        return (0, a.jsx)(v.r.Item, {
                                            lg: 4,
                                            children: e.map((function(e) {
                                                return (0, a.jsx)(x.g, {
                                                    onClick: function() {
                                                        return (0, S.An)({
                                                            category: e.title
                                                        })
                                                    },
                                                    children: (0, a.jsx)(D, {
                                                        href: e.url,
                                                        imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                                        children: (0, a.jsx)(y.k, {
                                                            alignItems: "center",
                                                            height: 40,
                                                            justifyContent: "center",
                                                            children: (0, a.jsx)(b.WX, {
                                                                as: "span",
                                                                variant: "h5",
                                                                children: e.title
                                                            })
                                                        })
                                                    }, e.image)
                                                }, e.title)
                                            }))
                                        }, "grouped-cards-".concat(n))
                                    }))
                                })
                            }), (0, a.jsx)(k.pU, {
                                greaterThanOrEqual: "lg",
                                children: (0, a.jsx)(v.r, {
                                    gridRowGap: 24,
                                    children: r.map((function(e, n) {
                                        return (0, a.jsx)(v.r.Item, {
                                            lg: 4,
                                            children: e.map((function(e) {
                                                return (0, a.jsx)(x.g, {
                                                    onClick: function() {
                                                        return (0, S.An)({
                                                            category: e.title
                                                        })
                                                    },
                                                    children: (0, a.jsx)(D, {
                                                        href: e.url,
                                                        imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                                        children: (0, a.jsx)(y.k, {
                                                            alignItems: "center",
                                                            height: 40,
                                                            justifyContent: "center",
                                                            children: (0, a.jsx)(b.WX, {
                                                                as: "span",
                                                                variant: "h4",
                                                                children: e.title
                                                            })
                                                        })
                                                    }, e.image)
                                                }, e.title)
                                            }))
                                        }, "grouped-cards-".concat(n))
                                    }))
                                })
                            })]
                        }) : (0, a.jsx)(I, {
                            children: (0, a.jsxs)(p.l, {
                                children: [(0, a.jsx)(y.k, {
                                    textAlign: "center",
                                    children: (0, a.jsx)(b.WX, {
                                        as: "h2",
                                        margin: "0",
                                        variant: "h3",
                                        children: e("browseCategories.browseByCategory", "Browse by category")
                                    })
                                }), (0, a.jsx)(x.g, {
                                    className: "BrowseCategories--card-container",
                                    children: t.map((function(e) {
                                        return (0, a.jsx)(m.V, {
                                            containerClassName: "BrowseCategories--card",
                                            href: e.url,
                                            imageUrl: "/static/images/categories/".concat(e.image, ".png"),
                                            children: (0, a.jsx)(y.k, {
                                                alignItems: "center",
                                                height: 40,
                                                justifyContent: "center",
                                                children: (0, a.jsx)(b.WX, {
                                                    as: "span",
                                                    className: "BrowseCategories--title",
                                                    variant: "h4",
                                                    children: e.title
                                                })
                                            })
                                        }, e.image)
                                    }))
                                })]
                            })
                        })
                    })
                },
                D = (0, o.ZP)(m.V).withConfig({
                    componentId: "sc-47abfb5-0"
                })(_()),
                I = (0, o.ZP)(f._).withConfig({
                    componentId: "sc-47abfb5-1"
                })(Z(), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.shadows.default
                }), (0, h.FD)({
                    extraLarge: (0, o.iv)(P(), 3, Math.ceil(T.aA.length / 3)),
                    tabletS: (0, o.iv)(L(), 2, Math.ceil(T.aA.length / 2)),
                    phoneXs: (0, o.iv)(K(), Math.ceil(T.aA.length))
                }), (function(e) {
                    return e.theme.colors.text.body
                }));
            const V = {},
                U = e => "undefined" !== typeof self && self && e in self ? self : "undefined" !== typeof window && window && e in window ? window : "undefined" !== typeof t.g && t.g && e in t.g ? t.g : "undefined" !== typeof globalThis && globalThis ? globalThis : void 0,
                B = ["Headers", "Request", "Response", "ReadableStream", "fetch", "AbortController", "FormData"];
            for (const ha of B) Object.defineProperty(V, ha, {
                get() {
                    const e = U(ha),
                        n = e && e[ha];
                    return "function" === typeof n ? n.bind(e) : n
                }
            });
            const O = e => null !== e && "object" === typeof e,
                H = "function" === typeof V.AbortController,
                N = "function" === typeof V.ReadableStream,
                z = "function" === typeof V.FormData,
                E = (e, n) => {
                    const t = new V.Headers(e || {}),
                        r = n instanceof V.Headers,
                        a = new V.Headers(n || {});
                    for (const [i, l] of a) r && "undefined" === l || void 0 === l ? t.delete(i) : t.set(i, l);
                    return t
                },
                R = (...e) => {
                    let n = {},
                        t = {};
                    for (const r of e) {
                        if (Array.isArray(r)) Array.isArray(n) || (n = []), n = [...n, ...r];
                        else if (O(r)) {
                            for (let [e, t] of Object.entries(r)) O(t) && e in n && (t = R(n[e], t)), n = { ...n,
                                [e]: t
                            };
                            O(r.headers) && (t = E(t, r.headers))
                        }
                        n.headers = t
                    }
                    return n
                },
                M = ["get", "post", "put", "patch", "head", "delete"],
                q = {
                    json: "application/json",
                    text: "text/*",
                    formData: "multipart/form-data",
                    arrayBuffer: "*/*",
                    blob: "*/*"
                },
                W = [413, 429, 503],
                G = Symbol("stop");
            class X extends Error {
                constructor(e) {
                    super(e.statusText || String(0 === e.status || e.status ? e.status : "Unknown response error")), this.name = "HTTPError", this.response = e
                }
            }
            class Q extends Error {
                constructor(e) {
                    super("Request timed out"), this.name = "TimeoutError", this.request = e
                }
            }
            const Y = e => new Promise((n => setTimeout(n, e))),
                $ = e => M.includes(e) ? e.toUpperCase() : e,
                J = {
                    limit: 2,
                    methods: ["get", "put", "head", "delete", "options", "trace"],
                    statusCodes: [408, 413, 429, 500, 502, 503, 504],
                    afterStatusCodes: W
                },
                ee = (e = {}) => {
                    if ("number" === typeof e) return { ...J,
                        limit: e
                    };
                    if (e.methods && !Array.isArray(e.methods)) throw new Error("retry.methods must be an array");
                    if (e.statusCodes && !Array.isArray(e.statusCodes)) throw new Error("retry.statusCodes must be an array");
                    return { ...J,
                        ...e,
                        afterStatusCodes: W
                    }
                },
                ne = 2147483647;
            class te {
                constructor(e, n = {}) {
                    if (this._retryCount = 0, this._input = e, this._options = {
                            credentials: this._input.credentials || "same-origin",
                            ...n,
                            headers: E(this._input.headers, n.headers),
                            hooks: R({
                                beforeRequest: [],
                                beforeRetry: [],
                                afterResponse: []
                            }, n.hooks),
                            method: $(n.method || this._input.method),
                            prefixUrl: String(n.prefixUrl || ""),
                            retry: ee(n.retry),
                            throwHttpErrors: !1 !== n.throwHttpErrors,
                            timeout: "undefined" === typeof n.timeout ? 1e4 : n.timeout,
                            fetch: n.fetch || V.fetch
                        }, "string" !== typeof this._input && !(this._input instanceof URL || this._input instanceof V.Request)) throw new TypeError("`input` must be a string, URL, or Request");
                    if (this._options.prefixUrl && "string" === typeof this._input) {
                        if (this._input.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
                        this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input
                    }
                    if (H && (this.abortController = new V.AbortController, this._options.signal && this._options.signal.addEventListener("abort", (() => {
                            this.abortController.abort()
                        })), this._options.signal = this.abortController.signal), this.request = new V.Request(this._input, this._options), this._options.searchParams) {
                        const e = "?" + new URLSearchParams(this._options.searchParams).toString(),
                            n = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, e);
                        !(z && this._options.body instanceof V.FormData || this._options.body instanceof URLSearchParams) || this._options.headers && this._options.headers["content-type"] || this.request.headers.delete("content-type"), this.request = new V.Request(new V.Request(n, this.request), this._options)
                    }
                    void 0 !== this._options.json && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", "application/json"), this.request = new V.Request(this.request, {
                        body: this._options.body
                    }));
                    const t = async () => {
                            if (this._options.timeout > ne) throw new RangeError("The `timeout` option cannot be greater than 2147483647");
                            await Y(1);
                            let e = await this._fetch();
                            for (const n of this._options.hooks.afterResponse) {
                                const t = await n(this.request, this._options, this._decorateResponse(e.clone()));
                                t instanceof V.Response && (e = t)
                            }
                            if (this._decorateResponse(e), !e.ok && this._options.throwHttpErrors) throw new X(e);
                            if (this._options.onDownloadProgress) {
                                if ("function" !== typeof this._options.onDownloadProgress) throw new TypeError("The `onDownloadProgress` option must be a function");
                                if (!N) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
                                return this._stream(e.clone(), this._options.onDownloadProgress)
                            }
                            return e
                        },
                        r = this._options.retry.methods.includes(this.request.method.toLowerCase()) ? this._retry(t) : t();
                    for (const [a, i] of Object.entries(q)) r[a] = async () => {
                        this.request.headers.set("accept", this.request.headers.get("accept") || i);
                        const e = (await r).clone();
                        if ("json" === a) {
                            if (204 === e.status) return "";
                            if (n.parseJson) return n.parseJson(await e.text())
                        }
                        return e[a]()
                    };
                    return r
                }
                _calculateRetryDelay(e) {
                    if (this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof Q)) {
                        if (e instanceof X) {
                            if (!this._options.retry.statusCodes.includes(e.response.status)) return 0;
                            const n = e.response.headers.get("Retry-After");
                            if (n && this._options.retry.afterStatusCodes.includes(e.response.status)) {
                                let e = Number(n);
                                return Number.isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, "undefined" !== typeof this._options.retry.maxRetryAfter && e > this._options.retry.maxRetryAfter ? 0 : e
                            }
                            if (413 === e.response.status) return 0
                        }
                        return .3 * 2 ** (this._retryCount - 1) * 1e3
                    }
                    return 0
                }
                _decorateResponse(e) {
                    return this._options.parseJson && (e.json = async () => this._options.parseJson(await e.text())), e
                }
                async _retry(e) {
                    try {
                        return await e()
                    } catch (n) {
                        const t = Math.min(this._calculateRetryDelay(n), ne);
                        if (0 !== t && this._retryCount > 0) {
                            await Y(t);
                            for (const e of this._options.hooks.beforeRetry) {
                                if (await e({
                                        request: this.request,
                                        options: this._options,
                                        error: n,
                                        retryCount: this._retryCount
                                    }) === G) return
                            }
                            return this._retry(e)
                        }
                        if (this._options.throwHttpErrors) throw n
                    }
                }
                async _fetch() {
                    for (const r of this._options.hooks.beforeRequest) {
                        const e = await r(this.request, this._options);
                        if (e instanceof Request) {
                            this.request = e;
                            break
                        }
                        if (e instanceof Response) return e
                    }
                    return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : (e = this.request.clone(), n = this.abortController, t = this._options, new Promise(((r, a) => {
                        const i = setTimeout((() => {
                            n && n.abort(), a(new Q(e))
                        }), t.timeout);
                        t.fetch(e).then(r).catch(a).then((() => {
                            clearTimeout(i)
                        }))
                    })));
                    var e, n, t
                }
                _stream(e, n) {
                    const t = Number(e.headers.get("content-length")) || 0;
                    let r = 0;
                    return new V.Response(new V.ReadableStream({
                        start(a) {
                            const i = e.body.getReader();
                            n && n({
                                percent: 0,
                                transferredBytes: 0,
                                totalBytes: t
                            }, new Uint8Array), async function e() {
                                const {
                                    done: l,
                                    value: o
                                } = await i.read();
                                if (l) a.close();
                                else {
                                    if (n) {
                                        r += o.byteLength;
                                        n({
                                            percent: 0 === t ? 0 : r / t,
                                            transferredBytes: r,
                                            totalBytes: t
                                        }, o)
                                    }
                                    a.enqueue(o), e()
                                }
                            }()
                        }
                    }))
                }
            }
            const re = (...e) => {
                    for (const n of e)
                        if ((!O(n) || Array.isArray(n)) && "undefined" !== typeof n) throw new TypeError("The `options` argument must be an object");
                    return R({}, ...e)
                },
                ae = e => {
                    const n = (n, t) => new te(n, re(e, t));
                    for (const t of M) n[t] = (n, r) => new te(n, re(e, r, {
                        method: t
                    }));
                    return n.HTTPError = X, n.TimeoutError = Q, n.create = e => ae(re(e)), n.extend = n => ae(re(e, n)), n.stop = G, n
                };
            var ie = ae(),
                le = t(56552);

            function oe() {
                var e = (0, r.Z)(["\n          padding: 2%;\n          margin: 0 10px;\n        "]);
                return oe = function() {
                    return e
                }, e
            }

            function se() {
                var e = (0, r.Z)(["\n          padding: 1.3%;\n        "]);
                return se = function() {
                    return e
                }, e
            }

            function ce() {
                var e = (0, r.Z)(["\n          width: 98%;\n        "]);
                return ce = function() {
                    return e
                }, e
            }

            function de() {
                var e = (0, r.Z)(["\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px;\n  margin-bottom: 120px;\n\n  .FromBlog--main {\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n\n    .FromBlog--title {\n      margin-bottom: 48px;\n      text-align: center;\n    }\n\n    .Carousel--left-arrow {\n      left: -8px;\n      top: 247px;\n    }\n\n    .Carousel--right-arrow {\n      right: -19px;\n      top: 247px;\n    }\n\n    .FromBlog--card-container {\n      padding: 0;\n\n      ", "\n    }\n\n    .FromBlog--card {\n      ", "\n    }\n\n    .FromBlog--card-title {\n      color: ", ";\n      font-weight: 600;\n      font-size: 16px;\n      margin: 10px 20px 10px 16px;\n      height: 50px;\n      overflow: hidden;\n      /* Allow only two lines of text  */\n      display: -webkit-box;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n    }\n  }\n"]);
                return de = function() {
                    return e
                }, e
            }
            var ue = function() {
                    var e = (0, F.q)("components"),
                        n = (0, le.useQuery)("posts", (function() {
                            return me()
                        })),
                        t = n.data;
                    return n.isError ? null : t ? (0, a.jsx)(ge, {
                        children: (0, a.jsxs)(y.k, {
                            className: "FromBlog--main",
                            children: [(0, a.jsx)(b.WX, {
                                as: "h2",
                                className: "FromBlog--title",
                                variant: "h3",
                                children: e("fromBlog.resourcesForGettingStarted", "Resources for getting started")
                            }), (0, a.jsx)(p.Z, {
                                children: t.map((function(e) {
                                    return (0, a.jsx)(m.V, {
                                        className: "FromBlog--card",
                                        containerClassName: "FromBlog--card-container",
                                        href: e.link,
                                        imageHeight: 265,
                                        imageUrl: e.image,
                                        children: (0, a.jsx)(b.WX, {
                                            as: "div",
                                            className: "FromBlog--card-title",
                                            dangerouslySetInnerHTML: {
                                                __html: e.title
                                            },
                                            variant: "h4"
                                        })
                                    }, e.link)
                                }))
                            })]
                        })
                    }) : (0, a.jsx)(y.k, {
                        minHeight: "470px"
                    })
                },
                ge = (0, o.ZP)(y.k).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-f3253de4-0"
                })(de(), (0, h.FD)({
                    small: (0, o.iv)(oe()),
                    medium: (0, o.iv)(se())
                }), (0, h.FD)({
                    small: (0, o.iv)(ce())
                }), (function(e) {
                    return e.theme.colors.text.body
                })),
                me = function() {
                    return ie.get("https://opensea.io/blog/wp-json/wp/v2/posts?_fields=title,jetpack_featured_media_url,link&include=6314,6297,6295").json().then((function(e) {
                        return e.map((function(e) {
                            return {
                                title: e.title.rendered,
                                link: e.link,
                                image: e.jetpack_featured_media_url
                            }
                        }))
                    }))
                },
                pe = t(38579),
                he = t.n(pe),
                xe = t(90761);

            function fe() {
                var e = (0, r.Z)(["\n          max-width: 240px;\n          padding: 0px;\n        "]);
                return fe = function() {
                    return e
                }, e
            }

            function ye() {
                var e = (0, r.Z)(["\n          max-width: 300px;\n        "]);
                return ye = function() {
                    return e
                }, e
            }

            function ve() {
                var e = (0, r.Z)(["\n          max-width: 360px;\n        "]);
                return ve = function() {
                    return e
                }, e
            }

            function be() {
                var e = (0, r.Z)(["\n          max-width: 260px;\n        "]);
                return be = function() {
                    return e
                }, e
            }

            function ke() {
                var e = (0, r.Z)(["\n  width: 100%;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  ", "\n\n  .GettingStarted--step-container {\n    flex-wrap: wrap;\n    justify-content: space-around;\n    margin: 40px 0 20px 0;\n    width: 100%;\n\n    .GettingStarted--step {\n      max-width: 100%;\n      margin-bottom: 20px;\n      margin-right: 20px;\n      margin-left: 20px;\n      padding: 0 20px;\n      justify-content: flex-start;\n\n      ", "\n\n      .GettingStarted--link {\n        font-weight: 600;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n        }\n      }\n    }\n  }\n"]);
                return ke = function() {
                    return e
                }, e
            }
            var je = function() {
                    var e = (0, F.q)("components"),
                        n = [{
                            image: "wallet",
                            title: "Set up your wallet",
                            text: (0, a.jsx)(b.WX, {
                                marginTop: "4px",
                                children: e("gettingStarted.setUpWallet", "Once you\u2019ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the {{walletsLink}}.", {
                                    walletsLink: (0, a.jsx)(s.r, {
                                        className: "GettingStarted--link",
                                        href: "https://openseahelp.zendesk.com/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea",
                                        children: e("gettingStarted.walletsWeSupport", "wallets we support")
                                    })
                                })
                            })
                        }, {
                            image: "collection",
                            title: "Create your collection",
                            text: (0, a.jsx)(b.WX, {
                                marginTop: "4px",
                                children: e("gettingStarted.setupCollection", "Click {{myCollectionsLink}} and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.", {
                                    myCollectionsLink: (0, a.jsx)(s.r, {
                                        className: "GettingStarted--link",
                                        href: "/collections",
                                        children: e("gettingStarted.myCollectionsLink", "My Collections")
                                    })
                                })
                            })
                        }, {
                            image: "nft",
                            title: "Add your NFTs",
                            text: (0, a.jsx)(b.WX, {
                                marginTop: "4px",
                                children: e("gettingStarted.uploadWork", "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.")
                            })
                        }, {
                            image: "sale",
                            title: "List them for sale",
                            text: (0, a.jsx)(b.WX, {
                                marginTop: "4px",
                                children: e("gettingStarted.listForSale", "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!")
                            })
                        }];
                    return (0, a.jsx)(C.nx, {
                        eventSource: "GettingStarted",
                        children: (0, a.jsx)(Fe, {
                            children: (0, a.jsxs)(p.l, {
                                textAlign: "center",
                                children: [(0, a.jsx)(b.WX, {
                                    as: "h2",
                                    variant: "h3",
                                    children: e("gettingStarted.title", "Create and sell your NFTs")
                                }), (0, a.jsx)(y.k, {
                                    className: "GettingStarted--step-container",
                                    children: n.map((function(e) {
                                        return (0, a.jsx)(we, {
                                            imageUrl: "/static/images/icons/".concat(e.image, ".svg"),
                                            text: e.text,
                                            title: e.title
                                        }, e.image)
                                    }))
                                })]
                            })
                        })
                    })
                },
                we = function(e) {
                    var n = e.imageUrl,
                        t = e.title,
                        r = e.text;
                    return (0, a.jsxs)(f._, {
                        className: "GettingStarted--step",
                        children: [(0, a.jsx)(he(), {
                            alt: t,
                            height: 40,
                            src: n,
                            unoptimized: !0,
                            width: 40
                        }), (0, a.jsx)(b.WX, {
                            marginBottom: "4px",
                            variant: "bold",
                            children: t
                        }), r]
                    })
                },
                Fe = (0, o.ZP)(f._).withConfig({
                    componentId: "sc-a9c1c495-0"
                })(ke(), (function(e) {
                    return (0, xe.Um)({
                        variants: {
                            light: {
                                backgroundColor: e.theme.colors.cloud
                            },
                            dark: {
                                backgroundColor: e.theme.colors.withOpacity.oil
                            }
                        }
                    })
                }), (0, h.FD)({
                    small: (0, o.iv)(fe()),
                    medium: (0, o.iv)(ye()),
                    large: (0, o.iv)(ve()),
                    extraLarge: (0, o.iv)(be())
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                })),
                Ce = t(40857),
                Se = t(23043),
                Te = t(75500),
                _e = t(46764),
                Pe = t(48257),
                Le = t(510),
                Ke = t(56656),
                Ze = t(18616),
                Ae = t(84188),
                De = t(83989),
                Ie = t(13476),
                Ve = t(44668),
                Ue = t(72686),
                Be = t(48599),
                Oe = t(59809),
                He = t(20889),
                Ne = t(23176),
                ze = t(11652),
                Ee = t(87821),
                Re = t(33181);

            function Me() {
                var e = (0, r.Z)(["\n      padding: 40px;\n    "]);
                return Me = function() {
                    return e
                }, e
            }

            function qe() {
                var e = (0, r.Z)(["\n  padding: 0;\n  width: 100%;\n  max-width: 1280px;\n  margin-left: auto;\n  margin-right: auto;\n\n  ", "\n"]);
                return qe = function() {
                    return e
                }, e
            }

            function We() {
                var e = (0, r.Z)(["\n  width: 100%;\n\n  .TopCollections--item {\n    border-top: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-left: 1px solid transparent;\n    border-bottom: ", ";\n\n    &:hover {\n      border-radius: ", ";\n      border: ", ";\n    }\n  }\n\n  .TopCollections--dropdown {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    justify-content: center;\n    margin-left: 8px;\n  }\n"]);
                return We = function() {
                    return e
                }, e
            }
            var Ge = "\uff0d",
                Xe = function() {
                    var e = (0, F.q)("components"),
                        n = [{
                            label: e("topCollections.last24Hours", "last 24 hours"),
                            value: "ONE_DAY_VOLUME"
                        }, {
                            label: e("topCollections.last7Days", "last 7 days"),
                            value: "SEVEN_DAY_VOLUME"
                        }, {
                            label: e("topCollections.last30Days", "last 30 days"),
                            value: "THIRTY_DAY_VOLUME"
                        }],
                        t = (0, i.useState)(n[0]),
                        r = t[0],
                        l = t[1];
                    return (0, a.jsx)(C.nx, {
                        eventSource: "TopCollections",
                        children: (0, a.jsx)(nn, {
                            children: (0, a.jsxs)(tn, {
                                children: [(0, a.jsx)(f._, {
                                    alignItems: "center",
                                    className: "title",
                                    flexDirection: "row",
                                    marginBottom: "56px",
                                    textAlign: "center",
                                    children: (0, a.jsx)(b.WX, {
                                        as: "h2",
                                        margin: "0px",
                                        variant: "h3",
                                        children: e("topCollections.title", "Top collections over {{range}}", {
                                            range: (0, a.jsx)(Ze.L, {
                                                content: function(e) {
                                                    var t = e.close,
                                                        i = e.List,
                                                        o = e.Item;
                                                    return (0, a.jsx)(i, {
                                                        children: n.map((function(e) {
                                                            return (0, a.jsx)(o, {
                                                                onClick: function() {
                                                                    e.value !== r.value && l(e), t()
                                                                },
                                                                children: (0, a.jsx)(o.Content, {
                                                                    children: (0, a.jsx)(y.k, {
                                                                        alignItems: "center",
                                                                        children: (0, a.jsx)(o.Title, {
                                                                            children: e.label
                                                                        })
                                                                    })
                                                                })
                                                            }, e.value)
                                                        }))
                                                    })
                                                },
                                                children: (0, a.jsxs)(y.k, {
                                                    as: Be.k,
                                                    className: "TopCollections--dropdown",
                                                    children: [(0, a.jsx)(b.WX, {
                                                        className: "TopCollections--category",
                                                        fontSize: 24,
                                                        margin: "0",
                                                        textAlign: "center",
                                                        variant: "faux-link",
                                                        whiteSpace: "nowrap",
                                                        children: r.label
                                                    }), (0, a.jsx)(Pe.J, {
                                                        className: "TopCollections--icon",
                                                        color: "blue",
                                                        value: "expand_more"
                                                    })]
                                                })
                                            })
                                        })
                                    })
                                }), Re.W6 ? (0, a.jsx)(Je, {}) : (0, a.jsx)(i.Suspense, {
                                    fallback: (0, a.jsx)(Je, {}),
                                    children: (0, a.jsx)(Qe, {
                                        sortBy: r.value
                                    })
                                }), (0, a.jsx)(Ke.zx, {
                                    href: "/rankings",
                                    margin: "40px auto 0px",
                                    width: "fit-content",
                                    children: e("topCollections.goToRankings", "Go to Rankings")
                                })]
                            })
                        })
                    })
                },
                Qe = function(e) {
                    var n = e.sortBy,
                        r = (0, l.useLazyLoadQuery)(t(24001), {
                            sortBy: n
                        });
                    return (0, a.jsx)(Ye, {
                        dataKey: r,
                        sortBy: n
                    })
                },
                Ye = function(e) {
                    var n = e.dataKey,
                        r = e.sortBy,
                        i = (0, F.q)("components"),
                        o = (0, w.P5)("hide_collection_floor_prices"),
                        s = (0, l.useFragment)(t(84173), n),
                        c = (0, Oe.v$)(null === s || void 0 === s ? void 0 : s.collections).map((function(e, n) {
                            var t = e.name,
                                l = e.logo,
                                s = e.id,
                                c = e.isVerified,
                                d = e.statsV2,
                                u = e.nativePaymentAsset,
                                g = (0, He.Pg)(new Date(e.createdDate)),
                                m = "ONE_DAY_VOLUME" === r && d.oneDayChange ? (0, ze.bn)(d.oneDayChange) : "SEVEN_DAY_VOLUME" === r && d.sevenDayChange ? (0, ze.bn)(d.sevenDayChange) : "THIRTY_DAY_VOLUME" === r && d.thirtyDayChange ? (0, ze.bn)(d.thirtyDayChange) : (0, ze.bn)(0),
                                p = m.isGreaterThan(0),
                                h = m.times(100).toFixed(2),
                                v = (0, ze.nZ)(h, {
                                    threshold: 1e4,
                                    formatDisplay: !0
                                }),
                                k = "ONE_DAY_VOLUME" !== r || (0, ze.bn)(d.oneDayVolume.unit).isZero() ? "SEVEN_DAY_VOLUME" !== r || (0, ze.bn)(d.sevenDayVolume.unit).isZero() ? "THIRTY_DAY_VOLUME" !== r || (0, ze.bn)(d.thirtyDayVolume.unit).isZero() ? Ge : (0, ze.SG)(d.thirtyDayVolume.unit, 2) : (0, ze.SG)(d.sevenDayVolume.unit, 2) : (0, ze.SG)(d.oneDayVolume.unit, 2),
                                j = d.floorPrice && !(0, ze.bn)(d.floorPrice.unit).isZero() ? (0, ze.Yy)((0, ze.bn)(d.floorPrice.unit), 2) : Ge,
                                w = {
                                    collectionId: s,
                                    collectionIndex: n,
                                    collectionVolumeSort: r
                                };
                            return (0, a.jsxs)(Ve.ck, {
                                className: "TopCollections--item",
                                eventParams: w,
                                height: 88,
                                href: (0, Ne.vg)(e),
                                children: [(0, a.jsx)(f._, {
                                    marginRight: "8px",
                                    children: (0, a.jsx)(b.WX, {
                                        as: "span",
                                        fontSize: "16px",
                                        textAlign: "right",
                                        variant: "h4",
                                        children: (0, a.jsx)(Le.n, {
                                            children: n + 1
                                        })
                                    })
                                }), (0, a.jsx)(Te.v, {
                                    isNew: g,
                                    isVerified: c,
                                    name: t,
                                    url: l
                                }), (0, a.jsxs)(Ve.ck.Content, {
                                    children: [(0, a.jsx)(Ve.ck.Title, {
                                        width: "100%",
                                        children: (0, a.jsx)(Le.n, {
                                            children: t
                                        })
                                    }), !o && (0, a.jsx)(Ve.ck.Description, {
                                        children: (0, a.jsxs)(y.k, {
                                            alignItems: "center",
                                            children: [(0, a.jsx)(x.g, {
                                                marginRight: "4px",
                                                marginTop: "2px",
                                                children: i("topCollections.floorPrice", "Floor price:")
                                            }), j !== Ge ? (0, a.jsx)(_e.p, {
                                                color: Ee.r7.gray,
                                                fontSize: "14px",
                                                logo: u,
                                                value: j
                                            }) : Ge]
                                        })
                                    })]
                                }), (0, a.jsx)(Ve.ck.Side, {
                                    children: (0, a.jsxs)(Ie.W, {
                                        alignItems: "flex-end",
                                        flexDirection: "column",
                                        children: [m.isEqualTo(0) ? (0, a.jsx)(Ae.Xe, {
                                            color: Ee.r7.gray,
                                            fontSize: "14px",
                                            margin: "0",
                                            children: Ge
                                        }) : (0, a.jsx)(Ae.Xe, {
                                            as: "span",
                                            color: p ? "seaGrass" : "coral",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            children: (0, a.jsx)(Le.n, {
                                                children: "".concat(p ? "+" : "").concat(v, "%")
                                            })
                                        }), (0, a.jsx)(_e.p, {
                                            color: Ee.r7.gray,
                                            fontSize: "14px",
                                            logo: u,
                                            value: k
                                        })]
                                    })
                                })]
                            }, s)
                        }));
                    return $e(c)
                },
                $e = function(e) {
                    return (0, a.jsxs)(tn, {
                        children: [(0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "xl",
                            children: (0, a.jsxs)(y.k, {
                                children: [(0, a.jsx)(De.t, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(0, 5)
                                }), (0, a.jsx)(De.t, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(5, 10)
                                }), (0, a.jsx)(De.t, {
                                    marginRight: "44px",
                                    minWidth: "30%",
                                    children: e.slice(10, 15)
                                })]
                            })
                        }), (0, a.jsx)(k.pU, {
                            lessThan: "xl",
                            children: (0, a.jsx)(f._, {
                                children: (0, a.jsx)(De.t, {
                                    maxWidth: "440px",
                                    width: "100%",
                                    children: e
                                })
                            })
                        })]
                    })
                },
                Je = function() {
                    var e = en();
                    return $e(e)
                },
                en = function() {
                    return new Array(15).fill(null).map((function(e, n) {
                        return (0, a.jsxs)(Ve.ck, {
                            className: "TopCollections--item",
                            height: 88,
                            width: "100%",
                            children: [(0, a.jsx)(f._, {
                                marginRight: "8px",
                                children: (0, a.jsx)(Ue.O.Line, {
                                    width: "16px"
                                })
                            }), (0, a.jsx)(Ue.O.Circle, {
                                height: "50px",
                                width: "50px"
                            }), (0, a.jsxs)(Ve.ck.Content, {
                                children: [(0, a.jsx)(Ue.O.Row, {
                                    height: "100%",
                                    width: "100%",
                                    children: (0, a.jsx)(Ue.O.Line, {})
                                }), (0, a.jsx)(Ue.O.Row, {
                                    height: "100%",
                                    width: "100%",
                                    children: (0, a.jsx)(Ue.O.Line, {})
                                })]
                            }), (0, a.jsx)(Ve.ck.Side, {
                                children: (0, a.jsx)(Ue.O.Line, {
                                    width: "64px"
                                })
                            })]
                        }, n)
                    }))
                },
                nn = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-4e50ae8b-0"
                })(qe(), (0, h.FD)({
                    extraLarge: (0, o.iv)(Me())
                })),
                tn = (0, o.ZP)(De.t).attrs({
                    as: "section"
                }).withConfig({
                    componentId: "sc-4e50ae8b-1"
                })(We(), (function(e) {
                    return "1px solid ".concat(e.theme.colors.border)
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return "1px solid ".concat(e.theme.colors.border)
                })),
                rn = t(40422),
                an = t(19378),
                ln = t(78439),
                on = function(e) {
                    var n = e.IpRightsTakedownDelistedMode,
                        t = (0, F.q)("modals");
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(an.u_, {
                            isOpen: !0,
                            children: [(0, a.jsx)(an.u_.Header, {
                                children: (0, a.jsx)(an.u_.Title, {
                                    children: t("ipRightsDelistedNotice.contentNoLongerAccessible.title", "This content is no longer accessible on OpenSea.")
                                })
                            }), (0, a.jsx)(an.u_.Body, {
                                children: (0, a.jsxs)(x.g, {
                                    children: [(0, a.jsxs)(b.WX, {
                                        children: [t("ipRightsDelistedNotice.contentNoLongerAccessible.description", "This content is no longer accessible on OpenSea. It has been\n              removed based on a claim of intellectual property infringement.\n              Learn more about how OpenSea handles these claims "), (0, a.jsx)(s.r, {
                                            href: "".concat(T.lw, "/hc/en-us/articles/4412092785043-What-can-I-do-if-my-copyrighted-works-are-being-sold-without-my-permission-"),
                                            children: t("common.here", "here")
                                        }), "."]
                                    }), "item-owner" == n && (0, a.jsxs)(b.WX, {
                                        children: [t("ipRightsDelistedNotice.activeListing.description", "If this item has an active listing, you can remove it "), (0, a.jsx)(s.r, {
                                            href: "account/settings?tab=support",
                                            children: t("common.here", "here")
                                        }), "."]
                                    }), "collection-owner" == n && (0, a.jsxs)(b.WX, {
                                        children: [t("ipRightsDelistedNotice.activeCollectionListing.link", "If this collection has active listings, you can remove them"), " ", (0, a.jsx)(s.r, {
                                            href: "account/settings?tab=support",
                                            children: t("common.here", "here")
                                        }), "."]
                                    })]
                                })
                            }), (0, a.jsx)(an.u_.Footer, {
                                children: (0, a.jsx)(an.u_.Footer.Button, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return ln.Z.push("/")
                                    },
                                    children: t("common.close", "Close")
                                })
                            })]
                        })
                    })
                },
                sn = t(40325),
                cn = t(39283),
                dn = t(65218),
                un = t.n(dn),
                gn = t(42565),
                mn = t(57554),
                pn = t(65175),
                hn = t(82455);

            function xn() {
                var e = (0, r.Z)(["\n      height: 586px;\n    "]);
                return xn = function() {
                    return e
                }, e
            }

            function fn() {
                var e = (0, r.Z)(["\n  height: 780px;\n  background-size: cover;\n  background-color: ", ";\n  background-position: center;\n  opacity: 0.3;\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  mask: linear-gradient(#fff, transparent);\n  -webkit-mask: linear-gradient(#fff, transparent);\n\n  ", ";\n"]);
                return fn = function() {
                    return e
                }, e
            }

            function yn() {
                var e = (0, r.Z)(["\n      height: 586px;\n    "]);
                return yn = function() {
                    return e
                }, e
            }

            function vn() {
                var e = (0, r.Z)(["\n        padding-top: 40px;\n      "]);
                return vn = function() {
                    return e
                }, e
            }

            function bn() {
                var e = (0, r.Z)(["\n          width: 50%;\n          padding: 110px 20px 44px 30px;\n          align-items: flex-start;\n        "]);
                return bn = function() {
                    return e
                }, e
            }

            function kn() {
                var e = (0, r.Z)(["\n            font-size: 32px;\n            max-width: ", "px;\n          "]);
                return kn = function() {
                    return e
                }, e
            }

            function jn() {
                var e = (0, r.Z)(["\n            text-align: left;\n            max-width: 100%;\n            margin-right: 10px;\n          "]);
                return jn = function() {
                    return e
                }, e
            }

            function wn() {
                var e = (0, r.Z)(["\n            font-size: 45px;\n          "]);
                return wn = function() {
                    return e
                }, e
            }

            function Fn() {
                var e = (0, r.Z)(["\n            font-size: 24px;\n            text-align: left;\n          "]);
                return Fn = function() {
                    return e
                }, e
            }

            function Cn() {
                var e = (0, r.Z)(["\n            margin-top: 40px;\n          "]);
                return Cn = function() {
                    return e
                }, e
            }

            function Sn() {
                var e = (0, r.Z)(["\n              width: 167px;\n            "]);
                return Sn = function() {
                    return e
                }, e
            }

            function Tn() {
                var e = (0, r.Z)(["\n          width: 50%;\n          padding: 40px 0px;\n          align-items: flex-end;\n        "]);
                return Tn = function() {
                    return e
                }, e
            }

            function _n() {
                var e = (0, r.Z)(["\n            max-width: 550px;\n          "]);
                return _n = function() {
                    return e
                }, e
            }

            function Pn() {
                var e = (0, r.Z)(["\n                height: 420px;\n              "]);
                return Pn = function() {
                    return e
                }, e
            }

            function Ln() {
                var e = (0, r.Z)(["\n            max-width: 550px;\n            margin-right: 30px;\n          "]);
                return Ln = function() {
                    return e
                }, e
            }

            function Kn() {
                var e = (0, r.Z)(["\n                height: 300px;\n              "]);
                return Kn = function() {
                    return e
                }, e
            }

            function Zn() {
                var e = (0, r.Z)(["\n                height: 420px;\n              "]);
                return Zn = function() {
                    return e
                }, e
            }

            function An() {
                var e = (0, r.Z)(["\n  height: 780px;\n\n  ", "\n\n  .Featured--background-container {\n    width: 100%;\n    position: absolute;\n    overflow: hidden;\n  }\n\n  .Featured--learn-more {\n    z-index: 2;\n    cursor: pointer;\n    align-self: flex-start;\n\n    ", "\n\n    .Featured--learn-more-container {\n      align-items: center;\n      height: 30px;\n\n      &:hover {\n        color: ", ";\n      }\n\n      .Featured--learn-more-icon {\n        color: inherit;\n      }\n\n      .Featured--learn-more-text {\n        margin-left: 8px;\n        font-weight: 600;\n        color: ", ";\n\n        &:hover {\n          color: inherit;\n        }\n      }\n    }\n  }\n\n  .Featured--container {\n    margin: 0 auto;\n    max-width: ", ";\n    width: 100%;\n    flex-wrap: wrap;\n\n    &:hover {\n      box-shadow: 10px;\n    }\n\n    .Featured--title {\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding: 30px 20px 20px 20px;\n\n      ", "\n\n      .Featured--header {\n        margin: 0;\n        font-size: 28px;\n        text-align: center;\n        z-index: 2;\n        max-width: 330px;\n\n        ", "\n      }\n\n      .Featured--subheader {\n        margin-top: 20px;\n        max-width: 400px;\n        text-align: center;\n        z-index: 2;\n        font-size: 18px;\n\n        ", "\n\n        ", "\n      }\n      .Featured--button-container {\n        margin-top: 20px;\n        z-index: 2;\n\n        ", "\n\n        .Featured--button {\n          width: 120px;\n\n          ", "\n        }\n      }\n    }\n\n    .Featured--image {\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding-top: 0;\n\n      ", "\n\n      .AssetMedia--img {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n      .Featured--skeleton {\n        max-width: 355px;\n        ", "\n\n        .Featured--skeleton-row {\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          margin-bottom: -10px;\n\n          .Featured--skeleton-block {\n            height: 300px;\n\n            ", "\n          }\n        }\n      }\n\n      .Featured--image-card {\n        width: 100%;\n        background-color: ", ";\n        flex-direction: column;\n        border-radius: 10px;\n        z-index: 2;\n        max-width: 355px;\n        box-shadow: 0px 0px 10px 0px\n          ", ";\n\n        ", "\n\n        &:hover {\n          transition: box-shadow 0.3s ease-in;\n          box-shadow: 0px 0px 50px 0px\n            ", ";\n        }\n\n        .Image--image {\n          border-bottom-left-radius: 0 !important;\n          border-bottom-right-radius: 0 !important;\n        }\n\n        .Featured--image-text-area {\n          border: none;\n\n          &:hover {\n            box-shadow: none;\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n          }\n\n          .Featured--image-avatar {\n            object-fit: cover;\n          }\n\n          .Featured--image-creator {\n            color: ", ";\n            &:hover {\n              color: ", ";\n            }\n          }\n        }\n\n        .Featured--image-link {\n          border-radius: 10px;\n\n          .Featured--image-media {\n            height: 80vw;\n            z-index: 2;\n            border-bottom: 1px solid ", ";\n\n            ", "\n          }\n        }\n      }\n    }\n  }\n"]);
                return An = function() {
                    return e
                }, e
            }
            var Dn = "Featured",
                In = un()((function() {
                    return t.e(21e3).then(t.bind(t, 21e3)).then((function(e) {
                        return e.GetFeaturedModal
                    }))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [21e3]
                        }
                    }
                }),
                Vn = function(e) {
                    var n, r = e.data,
                        i = (0, F.q)("home"),
                        o = (0, l.useFragment)(t(53973), r),
                        c = {
                            backgroundImage: "url(".concat((null === o || void 0 === o ? void 0 : o.imagePreviewUrl) || (null === o || void 0 === o ? void 0 : o.imageUrl), ")")
                        },
                        d = function() {
                            return (0, a.jsx)(an.u_, {
                                trigger: function(e) {
                                    return (0, a.jsx)(pn.u, {
                                        content: i("featured.getFeaturedPrompt", "Get featured on the homepage"),
                                        children: (0, a.jsx)(Be.k, {
                                            "aria-label": i("featured.getFeaturedLabel", "Get featured"),
                                            onClick: function(n) {
                                                n.preventDefault(), e(), (0, S.g)()
                                            },
                                            children: (0, a.jsx)(Pe.J, {
                                                color: "gray",
                                                cursor: "pointer",
                                                value: "info",
                                                variant: "outlined"
                                            })
                                        })
                                    })
                                },
                                children: (0, a.jsx)(In, {})
                            })
                        },
                        u = function() {
                            return (0, a.jsx)(s.r, {
                                className: "Featured--learn-more",
                                href: "/#".concat(Ce.c),
                                children: (0, a.jsxs)(y.k, {
                                    className: "Featured--learn-more-container",
                                    children: [(0, a.jsx)(Pe.J, {
                                        className: "Featured--learn-more-icon",
                                        color: "blue",
                                        value: "play_circle_filled"
                                    }), (0, a.jsx)(b.WX, {
                                        className: "Featured--learn-more-text",
                                        children: i("featured.learnMorePrompt", "Learn more about OpenSea")
                                    })]
                                })
                            })
                        };
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(Bn, {
                            children: [(0, a.jsx)(x.g, {
                                className: "Featured--background-container",
                                children: (0, a.jsx)(Un, {
                                    style: c
                                })
                            }), (0, a.jsxs)(y.k, {
                                className: "Featured--container",
                                children: [(0, a.jsxs)(y.k, {
                                    className: "Featured--title",
                                    children: [(0, a.jsx)(b.WX, {
                                        className: "Featured--header",
                                        variant: "h1",
                                        children: T.iZ
                                    }), (0, a.jsx)(b.WX, {
                                        as: "span",
                                        className: "Featured--subheader",
                                        variant: "subtitle",
                                        children: T.HC
                                    }), (0, a.jsxs)(y.k, {
                                        className: "Featured--button-container",
                                        children: [(0, a.jsx)(x.g, {
                                            marginRight: "20px",
                                            children: (0, a.jsx)(Ke.zx, {
                                                className: "Featured--button",
                                                eventSource: Dn,
                                                href: "/explore-collections",
                                                children: i("featured.exploreCTA", "Explore")
                                            })
                                        }), (0, a.jsx)(Ke.zx, {
                                            className: "Featured--button",
                                            eventSource: Dn,
                                            href: "/asset/create",
                                            variant: "secondary",
                                            children: i("featured.createCTA", "Create")
                                        })]
                                    }), (0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "lg",
                                        children: (0, a.jsx)(y.k, {
                                            alignItems: "flex-end",
                                            height: "100%",
                                            children: (0, a.jsx)(u, {})
                                        })
                                    })]
                                }), (0, a.jsx)(y.k, {
                                    className: "Featured--image",
                                    children: o ? (0, a.jsx)(y.k, {
                                        as: "article",
                                        className: "Featured--image-card",
                                        children: (0, a.jsxs)(s.r, {
                                            className: "Featured--image-link",
                                            href: (0, He.Vh)(o),
                                            onClick: function() {
                                                var e, n;
                                                return (0, hn.yt)(o, {
                                                    assetName: o.name,
                                                    creatorUsername: null === (e = o.creator) || void 0 === e || null === (n = e.user) || void 0 === n ? void 0 : n.publicUsername,
                                                    link: (0, He.Vh)(o)
                                                })
                                            },
                                            children: [(0, a.jsx)(gn.N, {
                                                alt: "",
                                                asset: o,
                                                autoPlay: !0,
                                                className: "Featured--image-media",
                                                isMuted: !0,
                                                objectFit: "cover",
                                                priority: !0,
                                                size: 550
                                            }), o.creator && (0, a.jsxs)(Ve.ck, {
                                                as: "footer",
                                                className: "Featured--image-text-area",
                                                children: [(0, a.jsx)(Ve.ck.Avatar, {
                                                    alt: i("featured.creatorImageAlt", "Featured creator"),
                                                    className: "Featured--image-avatar",
                                                    outline: 0,
                                                    size: 40,
                                                    src: o.creator.imageUrl
                                                }), (0, a.jsxs)(Ve.ck.Content, {
                                                    className: "Featured--image-content",
                                                    children: [(0, a.jsx)(Ve.ck.Title, {
                                                        children: o.name
                                                    }), (0, a.jsx)(Ve.ck.Description, {
                                                        className: "Featured--image-creator",
                                                        fontSize: 14,
                                                        children: null === (n = o.creator.user) || void 0 === n ? void 0 : n.publicUsername
                                                    })]
                                                }), (0, a.jsx)(Ve.ck.Side, {
                                                    children: (0, a.jsx)(d, {})
                                                })]
                                            })]
                                        })
                                    }) : (0, a.jsxs)(Ue.O, {
                                        className: "Featured--skeleton",
                                        children: [(0, a.jsxs)(Ue.O.Row, {
                                            className: "Featured--skeleton-row",
                                            children: [(0, a.jsx)(Ue.O.Block, {
                                                className: "Featured--skeleton-block"
                                            }), (0, a.jsx)(Ue.O.Block, {
                                                className: "Featured--skeleton-block",
                                                direction: "rtl"
                                            })]
                                        }), (0, a.jsx)(Ue.O.Row, {
                                            children: (0, a.jsxs)(mn.a, {
                                                children: [(0, a.jsx)(mn.a.Avatar, {}), (0, a.jsxs)(mn.a.Content, {
                                                    children: [(0, a.jsx)(mn.a.Title, {}), (0, a.jsx)(mn.a.Description, {})]
                                                }), (0, a.jsxs)(mn.a.Side, {
                                                    children: [(0, a.jsx)(mn.a.Title, {}), (0, a.jsx)(mn.a.Description, {})]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, a.jsx)(k.pU, {
                                    lessThan: "lg",
                                    children: (0, a.jsx)(y.k, {
                                        justifyContent: "center",
                                        width: "100%",
                                        children: (0, a.jsx)(u, {})
                                    })
                                })]
                            })]
                        })
                    })
                },
                Un = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-a433a190-0"
                })(fn(), (function(e) {
                    return e.theme.colors.background
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(xn())
                })),
                Bn = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-a433a190-1"
                })(An(), (0, h.FD)({
                    tabletL: (0, o.iv)(yn())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(vn())
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.maxWidth.smallPadding
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(bn())
                }), (0, h.FD)({
                    small: (0, o.iv)(kn(), 550),
                    tabletL: (0, o.iv)(jn()),
                    extraLarge: (0, o.iv)(wn())
                }), (function(e) {
                    return (0, xe.Um)({
                        variants: {
                            light: {
                                color: "".concat(e.theme.colors.oil, ";")
                            },
                            dark: {
                                color: "".concat(e.theme.colors.text.subtle, ";")
                            }
                        }
                    })
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Fn())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Cn())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Sn())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Tn())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(_n())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Pn())
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Ln())
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.border
                }), (0, h.FD)({
                    phoneL: (0, o.iv)(Kn()),
                    tabletL: (0, o.iv)(Zn())
                })),
                On = t(38996),
                Hn = t(10485),
                Nn = t(76449),
                zn = t(31154),
                En = t(99525),
                Rn = t(76190),
                Mn = t(93384),
                qn = t(48028),
                Wn = t(20807),
                Gn = t(47366);

            function Xn() {
                var e = (0, r.Z)(["\n  display: inline-block;\n  position: relative;\n  width: 100%;\n"]);
                return Xn = function() {
                    return e
                }, e
            }

            function Qn() {
                var e = (0, r.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.25s 0s ease-in-out;\n\n  @media (hover: hover) {\n    &:hover {\n      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n      ", "\n    }\n  }\n"]);
                return Qn = function() {
                    return e
                }, e
            }

            function Yn() {
                var e = (0, r.Z)(["\n  width: 54px;\n  height: 54px;\n  border: 3px solid ", ";\n  border-radius: ", ";\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);\n  background-color: ", ";\n  position: relative;\n  ", ":hover & {\n    ", "\n  }\n"]);
                return Yn = function() {
                    return e
                }, e
            }

            function $n() {
                var e = (0, r.Z)(["\n  padding: 16px;\n  border-radius: 12px;\n  z-index: 99;\n"]);
                return $n = function() {
                    return e
                }, e
            }

            function Jn() {
                var e = (0, r.Z)(["\n  border-radius: ", ";\n"]);
                return Jn = function() {
                    return e
                }, e
            }

            function et() {
                var e = (0, r.Z)(["\n  background-color: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  .Image--image {\n    position: absolute;\n  }\n"]);
                return et = function() {
                    return e
                }, e
            }

            function nt() {
                var e = (0, r.Z)(["\n  display: block;\n  align-items: center;\n  margin: 0;\n  overflow: hidden;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]);
                return nt = function() {
                    return e
                }, e
            }
            var tt = function(e) {
                    var n = e.data,
                        r = (0, l.useFragment)(t(20878), n),
                        i = r.collection,
                        o = r.collectionSubtitle,
                        c = i.slug,
                        d = i.logo,
                        u = i.banner,
                        g = i.name,
                        m = i.verificationStatus,
                        p = (0, Ne.vg)(i);
                    if (!u || !d) return null;
                    var h, f = (0, a.jsx)(rt, {
                        children: (0, a.jsx)(s.r, {
                            href: p,
                            children: (0, a.jsxs)(at, {
                                children: [(0, a.jsx)(x.g, {
                                    height: "0",
                                    paddingBottom: {
                                        _: "".concat(68.75, "%"),
                                        sm: "".concat(56.25, "%")
                                    },
                                    position: "relative",
                                    children: (0, a.jsx)(st, {
                                        alt: g,
                                        layout: "fill",
                                        objectFit: "cover",
                                        src: u ? (0, Wn.tg)(u, {
                                            height: 400
                                        }) : "",
                                        unoptimized: !0
                                    })
                                }), (0, a.jsx)(lt, {
                                    marginTop: "-50px",
                                    children: (0, a.jsxs)(De.t, {
                                        overflow: "hidden",
                                        children: [(0, a.jsx)(it, {
                                            children: (0, a.jsx)(ot, {
                                                alt: g,
                                                height: 48,
                                                layout: "fixed",
                                                objectFit: "cover",
                                                src: d ? (0, Wn.tg)(d, {
                                                    size: 48
                                                }) : "",
                                                unoptimized: !0,
                                                width: 48
                                            })
                                        }), (0, a.jsxs)(y.k, {
                                            alignItems: "center",
                                            marginBottom: o ? void 0 : "13px",
                                            paddingLeft: "0px",
                                            paddingTop: o ? "8px" : "16px",
                                            children: [(0, a.jsx)(ct, {
                                                as: "div",
                                                variant: "h5",
                                                children: g
                                            }), (0, Gn.R)(m) && (0, a.jsx)(qn.o, {
                                                showTooltip: !1,
                                                size: "small",
                                                verificationStatus: m
                                            })]
                                        }), o && (0, a.jsx)(ct, {
                                            as: "div",
                                            paddingLeft: "0px",
                                            variant: "small-thin-subtle",
                                            children: o
                                        })]
                                    })
                                })]
                            })
                        })
                    });
                    return (0, a.jsxs)(x.g, {
                        onClick: function() {
                            return (0, S.Rd)({
                                collectionSlug: c
                            })
                        },
                        children: [(0, a.jsx)(k.pU, {
                            lessThan: "lg",
                            children: f
                        }), (0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, a.jsx)(Mn.O, {
                                collection: r.collection,
                                subtitle: null !== (h = r.collectionSubtitle) && void 0 !== h ? h : void 0
                            })
                        })]
                    })
                },
                rt = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-b47d39da-0"
                })(Xn()),
                at = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-b47d39da-1"
                })(Qn(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return (0, xe.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ash,
                                transition: "background-color 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                it = o.ZP.div.withConfig({
                    componentId: "sc-b47d39da-2"
                })(Yn(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.card
                }), at, (function(e) {
                    return (0, xe.Um)({
                        variants: {
                            dark: {
                                borderColor: e.theme.colors.ash,
                                transition: "border 0.25s ease-in-out"
                            }
                        }
                    })
                })),
                lt = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-b47d39da-3"
                })($n()),
                ot = (0, o.ZP)(cn.E).withConfig({
                    componentId: "sc-b47d39da-4"
                })(Jn(), (function(e) {
                    return e.theme.borderRadius.default
                })),
                st = (0, o.ZP)(cn.E).withConfig({
                    componentId: "sc-b47d39da-5"
                })(et(), (function(e) {
                    return e.theme.colors.card
                }), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                ct = (0, o.ZP)(b.WX).withConfig({
                    componentId: "sc-b47d39da-6"
                })(nt());

            function dt() {
                var e = (0, r.Z)(["\n                      background-color: ", ";\n                      i {\n                        color: white;\n                        :hover {\n                          ", "\n                        }\n                      }\n                      box-shadow: none;\n                      :hover {\n                        ", "\n                      }\n                    "]);
                return dt = function() {
                    return e
                }, e
            }
            var ut = "https://opensea.io",
                gt = {
                    default: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                        slidesPerGroup: 1
                    },
                    xs: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        slidesPerGroup: 1
                    },
                    sm: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        slidesPerGroup: 1
                    }
                },
                mt = function(e) {
                    var n = e.dataKey,
                        r = (0, l.useFragment)(t(49663), n),
                        i = (0, F.q)("home");
                    if (!r || !r.length) return null;
                    var s = r.filter((function(e) {
                            return e.collection.logo && e.collection.banner
                        })),
                        c = (0, g.groupBy)(s, (function(e) {
                            return e.section.relayId
                        })),
                        d = Object.keys(c),
                        u = !0,
                        m = !1,
                        p = void 0;
                    try {
                        for (var h, f = d[Symbol.iterator](); !(u = (h = f.next()).done); u = !0) {
                            var y = h.value;
                            c[y] = c[y].splice(0, 3)
                        }
                    } catch (T) {
                        m = !0, p = T
                    } finally {
                        try {
                            u || null == f.return || f.return()
                        } finally {
                            if (m) throw p
                        }
                    }
                    var w = d.filter((function(e) {
                            return c[e].length <= 3
                        })).slice(0, 2),
                        C = i("merchShelves.viewAllButton", "View all");
                    return (0, a.jsx)(a.Fragment, {
                        children: w.map((function(e, n) {
                            var t = c[e],
                                r = c[e][0].section,
                                i = r.title,
                                l = r.titleUrl;
                            return l && (0, g.startsWith)(l, ut) && (l = l.split(ut)[1]), (0, a.jsxs)(x.g, {
                                marginBottom: n < w.length - 1 ? {
                                    _: 44,
                                    xl: 56,
                                    xxl: 66
                                } : {
                                    _: 12,
                                    xl: 16
                                },
                                children: [(0, a.jsxs)(v.r.Item, {
                                    children: [(0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "lg",
                                        children: (0, a.jsxs)(En.i, {
                                            alignItems: "center",
                                            marginBottom: {
                                                _: "24px",
                                                xxl: "36px"
                                            },
                                            children: [(0, a.jsx)(k.pU, {
                                                greaterThanOrEqual: "xxl",
                                                children: (0, a.jsx)(j.xv.Heading, {
                                                    size: "large",
                                                    children: i
                                                })
                                            }), (0, a.jsx)(k.pU, {
                                                between: ["lg", "xxl"],
                                                children: (0, a.jsx)(j.xv.Heading, {
                                                    size: "medium",
                                                    children: i
                                                })
                                            }), l && (0, a.jsx)(Rn.t, {
                                                height: {
                                                    _: "36px",
                                                    lg: "48px"
                                                },
                                                href: l,
                                                onClick: function() {
                                                    return (0, S.z5)({
                                                        sectionTitle: i
                                                    })
                                                },
                                                children: (0, a.jsx)(b.WX, {
                                                    color: "text.heading",
                                                    variant: b.Sv.SMALL_BOLD,
                                                    children: C
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)(k.pU, {
                                        lessThan: "lg",
                                        children: (0, a.jsxs)(En.i, {
                                            alignItems: "center",
                                            marginBottom: {
                                                _: "24px",
                                                xxl: "36px"
                                            },
                                            children: [(0, a.jsx)(k.pU, {
                                                lessThan: "lg",
                                                children: (0, a.jsx)(j.xv.Heading, {
                                                    size: "small",
                                                    children: i
                                                })
                                            }), l && (0, a.jsx)(Rn.t, {
                                                height: {
                                                    _: "36px",
                                                    lg: "48px"
                                                },
                                                href: l,
                                                onClick: function() {
                                                    return (0, S.z5)({
                                                        sectionTitle: i
                                                    })
                                                },
                                                children: (0, a.jsx)(b.WX, {
                                                    color: "text.heading",
                                                    variant: b.Sv.SMALL_BOLD,
                                                    children: C
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)(v.r.Item, {
                                    children: [(0, a.jsx)(k.pU, {
                                        lessThan: "lg",
                                        children: (0, a.jsx)(zn.a, {
                                            className: "featured_swiper",
                                            enableArrowControls: !0,
                                            enableFreeScroll: !0,
                                            enableMousewheel: !0,
                                            loop: !0,
                                            loopedSlides: t.length,
                                            name: "featured_".concat(n),
                                            overrides: {
                                                arrowStyles: (0, o.iv)(dt(), (function(e) {
                                                    return (0, Nn.m4)(e.theme.colors.charcoal, .3)
                                                }), (function(e) {
                                                    return (0, xe.Um)({
                                                        variants: {
                                                            light: {
                                                                color: e.theme.colors.charcoal
                                                            },
                                                            dark: {
                                                                color: e.theme.colors.white
                                                            }
                                                        }
                                                    })
                                                }), (function(e) {
                                                    return (0, xe.Um)({
                                                        variants: {
                                                            dark: {
                                                                background: e.theme.colors.oil
                                                            },
                                                            light: {
                                                                background: e.theme.colors.white
                                                            }
                                                        }
                                                    })
                                                }))
                                            },
                                            renderSlide: function(e) {
                                                return e.collection
                                            },
                                            responsiveConfig: gt,
                                            showScrollbar: !1,
                                            slides: t.map((function(e) {
                                                return {
                                                    id: e.collection.slug,
                                                    collection: (0, a.jsx)(x.g, {
                                                        margin: "0px 0px 8px 0px",
                                                        children: (0, a.jsx)(tt, {
                                                            data: e
                                                        })
                                                    })
                                                }
                                            }))
                                        })
                                    }), (0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "lg",
                                        children: (0, a.jsx)(v.r, {
                                            gridGap: "24px",
                                            children: t.map((function(e) {
                                                return (0, a.jsx)(v.r.Item, {
                                                    lg: 4,
                                                    children: (0, a.jsx)(tt, {
                                                        data: e
                                                    })
                                                }, e.collection.slug)
                                            }))
                                        })
                                    })]
                                })]
                            }, i)
                        }))
                    })
                },
                pt = t(30079),
                ht = t(25401),
                xt = t(31893),
                ft = t(33303);

            function yt() {
                var e = (0, r.Z)(["\n  color: white;\n  margin: 0 5px;\n"]);
                return yt = function() {
                    return e
                }, e
            }

            function vt() {
                var e = (0, r.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  border-radius: ", ';\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0) 60%,\n    rgba(0, 0, 0, 0.8) 100%\n  );\n\n  &::after {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: ', ";\n  }\n\n  img {\n    border-radius: inherit;\n    z-index: -1;\n    width: 100%;\n    height: auto;\n  }\n\n  @media (hover: hover) {\n    &:hover {\n      img {\n        transform: scale(1.08);\n        transition-duration: 0.4s;\n      }\n    }\n  }\n\n  &:not(:hover) {\n    img {\n      transition: transform 0.4s;\n    }\n  }\n"]);
                return vt = function() {
                    return e
                }, e
            }

            function bt() {
                var e = (0, r.Z)(["\n  position: absolute;\n  gap: 2px;\n  bottom: 0;\n  padding-bottom: 12px;\n  z-index: 1;\n  padding-left: 16px;\n"]);
                return bt = function() {
                    return e
                }, e
            }

            function kt() {
                var e = (0, r.Z)(["\n  margin-left: 4px;\n  width: 15px;\n  height: 15px;\n"]);
                return kt = function() {
                    return e
                }, e
            }
            var jt = function(e) {
                    var n = e.dataKey,
                        r = e.size,
                        i = (0, l.useFragment)(t(76122), n);
                    if (!i) return null;
                    var o = i.collection,
                        c = i.shortDescription,
                        d = i.overrideUrl,
                        u = o.slug,
                        g = o.name,
                        m = o.logo,
                        p = o.verificationStatus,
                        h = o.statsV2,
                        x = o.nativePaymentAsset,
                        f = (0, Ne.vg)(o),
                        v = null !== d && void 0 !== d ? d : m;
                    if (!v) return null;
                    var k = v && (0, Wn.tg)(v, {
                            size: r,
                            cropToSquare: !0
                        }),
                        w = (0, Wn.vO)(v),
                        F = null != w,
                        C = F ? w : k,
                        T = h.floorPrice && !(0, ze.bn)(h.floorPrice.unit).isZero() ? (0, ze.Yy)((0, ze.bn)(h.floorPrice.unit), 2) : "\uff0d";
                    return (0, a.jsx)(y.k, {
                        justifyContent: "center",
                        children: (0, a.jsx)(s.r, {
                            href: f,
                            onClick: function() {
                                return (0, S.xo)({
                                    collectionSlug: u
                                })
                            },
                            children: (0, a.jsxs)(Ft, {
                                children: [(0, a.jsx)(cn.E, {
                                    alt: g,
                                    height: r,
                                    src: C,
                                    unoptimized: !F,
                                    width: r
                                }), (0, a.jsxs)(Ct, {
                                    children: [(0, a.jsx)(y.k, {
                                        alignItems: "center",
                                        children: (0, a.jsx)(Le.n, {
                                            lines: 1,
                                            children: (0, a.jsxs)(b.WX, {
                                                color: "white",
                                                lineHeight: "normal",
                                                margin: 0,
                                                variant: b.Sv.H5,
                                                children: [g, (0, a.jsx)(xt.O, {
                                                    marginLeft: "4px",
                                                    verticalAlign: "middle",
                                                    children: "VERIFIED" === p && (0, a.jsx)(St, {
                                                        size: "small"
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, a.jsxs)("span", {
                                        children: [c && (0, a.jsx)(a.Fragment, {
                                            children: (0, a.jsx)(j.xv.Body, {
                                                color: "white",
                                                size: "small",
                                                weight: "semibold",
                                                children: c
                                            })
                                        }), c && "\uff0d" !== T && (0, a.jsx)(wt, {
                                            children: "\xb7"
                                        }), "\uff0d" !== T && (0, a.jsx)(j.xv.Body, {
                                            color: "white",
                                            size: "small",
                                            children: "Floor: ".concat(T, " ").concat(x.asset.symbol)
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                wt = o.ZP.span.withConfig({
                    componentId: "sc-51a05f15-0"
                })(yt()),
                Ft = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-51a05f15-1"
                })(vt(), (function(e) {
                    return e.theme.borderRadius.pill
                }), (function(e) {
                    return e.theme.borderRadius.pill
                })),
                Ct = (0, o.ZP)(ft.B).withConfig({
                    componentId: "sc-51a05f15-2"
                })(bt()),
                St = (0, o.ZP)(ht.S).withConfig({
                    componentId: "sc-51a05f15-3"
                })(kt()),
                Tt = t(74387);

            function _t() {
                var e = (0, r.Z)(["\n                background-color: ", ";\n                i {\n                  color: white;\n                  :hover {\n                    ", "\n                  }\n                }\n                box-shadow: none;\n                :hover {\n                  ", "\n                }\n              "]);
                return _t = function() {
                    return e
                }, e
            }
            var Pt = function(e) {
                var n = e.responsiveConfig,
                    t = e.slides,
                    r = (0, pt.t)(),
                    l = (0, Tt.Z)("(min-width: ".concat(k.AV.lg, "px)"), !1),
                    s = 1;
                (0, Tt.Z)("(min-width: ".concat(k.AV.xxxl, "px)"), !1) ? s = 6: l && (s = 4);
                var c = (0, i.useCallback)((function(e) {
                    return e.collection
                }), []);
                return r ? (0, a.jsx)(x.g, {
                    alignSelf: "center",
                    children: (0, a.jsx)(zn.a, {
                        autoplayConfig: {
                            delay: 5e3,
                            pauseOnMouseEnter: !0,
                            disableOnInteraction: !1
                        },
                        className: "home_header_swiper",
                        enableArrowControls: !0,
                        enableFreeScroll: !0,
                        enableMousewheel: !0,
                        loop: !0,
                        loopedSlides: s,
                        name: "home_header",
                        overrides: {
                            arrowStyles: l ? void 0 : (0, o.iv)(_t(), (function(e) {
                                return (0, Nn.m4)(e.theme.colors.charcoal, .3)
                            }), (function(e) {
                                return (0, xe.Um)({
                                    variants: {
                                        light: {
                                            color: e.theme.colors.charcoal
                                        },
                                        dark: {
                                            color: e.theme.colors.white
                                        }
                                    }
                                })
                            }), (function(e) {
                                return (0, xe.Um)({
                                    variants: {
                                        dark: {
                                            background: e.theme.colors.oil
                                        },
                                        light: {
                                            background: e.theme.colors.white
                                        }
                                    }
                                })
                            }))
                        },
                        renderSlide: c,
                        responsiveConfig: n,
                        showScrollbar: !1,
                        slides: t,
                        speed: 500
                    })
                }) : null
            };

            function Lt() {
                var e = (0, r.Z)(["\n  gap: 10px;\n"]);
                return Lt = function() {
                    return e
                }, e
            }
            var Kt = {
                    default: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 12
                    },
                    sm: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                        spaceBetween: 12
                    },
                    md: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 12
                    },
                    lg: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 12
                    },
                    xl: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 12
                    },
                    xxl: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 12
                    },
                    xxxl: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                        spaceBetween: 12
                    }
                },
                Zt = function() {
                    return (0, a.jsxs)(x.g, {
                        alignSelf: "center",
                        width: "100%",
                        children: [(0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "xxl",
                            children: (0, a.jsx)(Ue.O, {
                                alignItems: "center",
                                children: (0, a.jsx)(Dt, {
                                    width: "100%",
                                    children: (0, u.Z)(Array(5)).map((function(e, n) {
                                        return (0, a.jsx)(Ue.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, a.jsx)(k.pU, {
                            between: ["lg", "xxl"],
                            children: (0, a.jsx)(Ue.O, {
                                alignItems: "center",
                                children: (0, a.jsx)(Dt, {
                                    width: "100%",
                                    children: (0, u.Z)(Array(4)).map((function(e, n) {
                                        return (0, a.jsx)(Ue.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, a.jsx)(k.pU, {
                            between: ["md", "lg"],
                            children: (0, a.jsx)(Ue.O, {
                                alignItems: "center",
                                children: (0, a.jsx)(Dt, {
                                    width: "100%",
                                    children: (0, u.Z)(Array(3)).map((function(e, n) {
                                        return (0, a.jsx)(Ue.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        }), (0, a.jsx)(k.pU, {
                            lessThan: "md",
                            children: (0, a.jsx)(Ue.O, {
                                alignItems: "center",
                                children: (0, a.jsx)(Dt, {
                                    width: "100%",
                                    children: (0, u.Z)(Array(2)).map((function(e, n) {
                                        return (0, a.jsx)(Ue.O.Block, {
                                            borderRadius: "16px",
                                            height: "300px"
                                        }, n)
                                    }))
                                })
                            })
                        })]
                    })
                },
                At = function(e) {
                    var n = e.dataKey,
                        r = (0, l.useFragment)(t(95969), n),
                        i = (0, pt.t)();
                    if (!r || !r.length) return null;
                    if (!i) return (0, a.jsx)(Zt, {});
                    for (var o = r.filter((function(e) {
                            return e.overrideUrl || e.collection.logo
                        })).map((function(e, n) {
                            return {
                                id: "".concat(e.collection.name).concat(n),
                                collection: (0, a.jsx)(jt, {
                                    dataKey: e,
                                    size: 800
                                })
                            }
                        })).slice(0, 12), s = 0; o.length < 12;) o.push({
                        id: "blank-".concat(s),
                        collection: (0, a.jsx)(a.Fragment, {})
                    }), s++;
                    return (0, a.jsx)(Pt, {
                        responsiveConfig: Kt,
                        slides: o
                    })
                },
                Dt = (0, o.ZP)(Ue.O.Row).withConfig({
                    componentId: "sc-29603550-0"
                })(Lt());

            function It() {
                var e = (0, r.Z)(["\n  font-size: 40px;\n"]);
                return It = function() {
                    return e
                }, e
            }
            var Vt = function(e) {
                    var n, r = e.dataKey,
                        i = (0, l.useFragment)(t(81419), r),
                        o = (0, F.q)("home")("header.text", "Explore, collect, and sell NFTs");
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "xxl",
                            children: (0, a.jsx)(v.r, {
                                children: (0, a.jsx)(v.r.Item, {
                                    lg: 12,
                                    marginBottom: "56px",
                                    marginTop: "40px",
                                    children: (0, a.jsx)(y.k, {
                                        justifyContent: "center",
                                        textAlign: "center",
                                        children: (0, a.jsx)(j.xv.Display, {
                                            as: "h1",
                                            "data-testid": "Magellan--headerText",
                                            lineHeight: 56,
                                            size: "large",
                                            children: o
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)(k.pU, {
                            between: ["sm", "xxl"],
                            children: (0, a.jsx)(v.r, {
                                children: (0, a.jsx)(v.r.Item, {
                                    marginBottom: "44px",
                                    marginTop: "32px",
                                    xs: 12,
                                    children: (0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "sm",
                                        children: (0, a.jsxs)(y.k, {
                                            justifyContent: "center",
                                            textAlign: "center",
                                            children: [(0, a.jsx)(k.pU, {
                                                between: ["xl", "xxl"],
                                                children: (0, a.jsx)(Ut, {
                                                    as: "h1",
                                                    "data-testid": "Magellan--headerText",
                                                    lineHeight: 56,
                                                    size: "large",
                                                    children: o
                                                })
                                            }), (0, a.jsx)(k.pU, {
                                                between: ["sm", "xl"],
                                                children: (0, a.jsx)(j.xv.Display, {
                                                    as: "h1",
                                                    "data-testid": "Magellan--headerText",
                                                    lineHeight: 40,
                                                    size: "medium",
                                                    children: o
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)(k.pU, {
                            lessThan: "sm",
                            children: (0, a.jsx)(v.r, {
                                margin: "32px 24px 44px 24px",
                                children: (0, a.jsx)(v.r.Item, {
                                    xs: 12,
                                    children: (0, a.jsx)(y.k, {
                                        justifyContent: "center",
                                        textAlign: "center",
                                        children: (0, a.jsx)(j.xv.Display, {
                                            as: "h1",
                                            "data-testid": "Magellan--headerText",
                                            lineHeight: 40,
                                            size: "medium",
                                            children: o
                                        })
                                    })
                                })
                            })
                        }), (0, a.jsx)(v.r, {
                            children: (0, a.jsx)(v.r.Item, {
                                xs: 12,
                                children: (0, a.jsx)(At, {
                                    dataKey: null !== (n = null === i || void 0 === i ? void 0 : i.homePageHeaderCarousel) && void 0 !== n ? n : null
                                })
                            })
                        })]
                    })
                },
                Ut = (0, o.ZP)(j.xv.Display).withConfig({
                    componentId: "sc-67ee7ed5-0"
                })(It()),
                Bt = t(2385),
                Ot = t(15012),
                Ht = t(84762),
                Nt = t(58578),
                zt = t(3405),
                Et = t(25796),
                Rt = t(96053);

            function Mt() {
                var e = (0, r.Z)(["\n  align-items: flex-start;\n  align-self: center;\n"]);
                return Mt = function() {
                    return e
                }, e
            }

            function qt() {
                var e = (0, r.Z)(["\n  color: inherit;\n\n  :hover {\n    color: inherit;\n  }\n"]);
                return qt = function() {
                    return e
                }, e
            }

            function Wt() {
                var e = (0, r.Z)(["\n  ", "\n  border: 2px solid ", ";\n  border-radius: ", ';\n  flex: none;\n  overflow: hidden;\n  position: relative;\n\n  &::after {\n    display: block;\n    content: "";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n  }\n']);
                return Wt = function() {
                    return e
                }, e
            }
            var Gt = function(e) {
                    var n = e.collection,
                        r = e.subtitle,
                        i = (0, F.q)("statsV2"),
                        o = (0, l.useFragment)(t(4141), n);
                    if (!o) return null;
                    var s = o.name,
                        c = o.isVerified,
                        d = (0, a.jsxs)(y.k, {
                            alignItems: "center",
                            children: [(0, a.jsx)(k.pU, {
                                greaterThanOrEqual: "md",
                                children: (0, a.jsx)(j.xv.Body, {
                                    size: "medium",
                                    weight: "semibold",
                                    children: (0, a.jsxs)(Le.n, {
                                        lines: 1,
                                        children: [s, c && (0, a.jsx)(xt.O, {
                                            marginLeft: "4px",
                                            verticalAlign: "middle",
                                            children: (0, a.jsx)(ht.S, {
                                                size: "small"
                                            })
                                        })]
                                    })
                                })
                            }), (0, a.jsx)(k.pU, {
                                lessThan: "md",
                                children: (0, a.jsx)(j.xv.Body, {
                                    size: "small",
                                    weight: "semibold",
                                    children: (0, a.jsxs)(Le.n, {
                                        lines: 1,
                                        children: [s, c && (0, a.jsx)(xt.O, {
                                            marginLeft: "4px",
                                            verticalAlign: "middle",
                                            children: (0, a.jsx)(ht.S, {
                                                size: "small"
                                            })
                                        })]
                                    })
                                })
                            })]
                        }),
                        u = function(e) {
                            return (0, a.jsx)(Yt, {
                                style: {
                                    height: e + 8,
                                    width: e + 8
                                },
                                children: (0, a.jsx)(he(), {
                                    alt: i("stats.homepage.collectionImage.altText", "Collection Image"),
                                    height: e,
                                    layout: "fill",
                                    objectFit: "cover",
                                    src: o.imageUrl || T.WF,
                                    unoptimized: !0,
                                    width: e
                                })
                            })
                        };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(k.pU, {
                            lessThan: "sm",
                            children: (0, a.jsxs)(Qt, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [u(48), (0, a.jsxs)(Xt, {
                                    paddingLeft: "10px",
                                    children: [d, r]
                                })]
                            })
                        }), (0, a.jsx)(k.pU, {
                            between: ["sm", "lg"],
                            children: (0, a.jsxs)(Qt, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [u(48), (0, a.jsxs)(Xt, {
                                    paddingLeft: "10px",
                                    children: [d, r]
                                })]
                            })
                        }), (0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, a.jsxs)(Qt, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [u(64), (0, a.jsxs)(Xt, {
                                    paddingLeft: "24px",
                                    children: [d, r]
                                })]
                            })
                        })]
                    })
                },
                Xt = (0, o.ZP)(De.t).withConfig({
                    componentId: "sc-79d2b893-0"
                })(Mt()),
                Qt = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-79d2b893-1"
                })(qt()),
                Yt = o.ZP.div.withConfig({
                    componentId: "sc-79d2b893-2"
                })(Wt(), (function(e) {
                    return (0, xe.Um)({
                        variants: {
                            light: {
                                backgroundColor: e.theme.colors.white
                            },
                            dark: {
                                backgroundColor: e.theme.colors.ink
                            }
                        }
                    })
                }), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.borderRadius.button
                })),
                $t = function(e) {
                    var n, t = e.activeTab,
                        r = e.collectionCellWidth,
                        i = e.data,
                        l = e.indexStart,
                        o = e.isSmallScreen,
                        s = void 0 !== o && o,
                        c = e.sortBy,
                        d = (0, F.q)("statsV2"),
                        u = i.statsV2,
                        g = (0, Et.ef)(c, i, !0),
                        m = (0, ze.bn)((0, Et.KO)(c, i)),
                        p = (0, Et.HZ)(m.times(100)),
                        h = m.isGreaterThan(0),
                        f = (null === (n = u.floorPrice) || void 0 === n ? void 0 : n.unit) ? (0, Et.rM)(u.floorPrice.unit) : void 0,
                        v = !(void 0 === f || "0" === f),
                        b = i.nativePaymentAsset.asset.symbol,
                        w = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(k.pU, {
                                lessThan: "sm",
                                children: (0, a.jsx)(x.g, {
                                    width: "22px",
                                    children: (0, a.jsx)(j.xv.Body, {
                                        color: "text.subtle",
                                        size: "medium",
                                        weight: "semibold",
                                        children: i.index + l
                                    })
                                })
                            }), (0, a.jsx)(k.pU, {
                                greaterThanOrEqual: "sm",
                                children: (0, a.jsx)(x.g, {
                                    marginRight: "9px",
                                    width: "23px",
                                    children: (0, a.jsx)(j.xv.Heading, {
                                        color: "text.subtle",
                                        size: "small",
                                        children: i.index + l
                                    })
                                })
                            }), (0, a.jsx)(Gt, {
                                collection: i,
                                subtitle: v && s ? (0, a.jsxs)(y.k, {
                                    alignItems: "center",
                                    marginTop: "2px",
                                    children: [(0, a.jsxs)(k.pU, {
                                        greaterThanOrEqual: "md",
                                        children: [(0, a.jsx)(j.xv.Body, {
                                            color: "text.subtle",
                                            margin: "0",
                                            size: "small",
                                            children: d("stats.row.floor", "Floor:")
                                        }), (0, a.jsxs)(j.xv.Body, {
                                            color: "text.subtle",
                                            margin: "0 0 0 2px",
                                            size: "small",
                                            weight: "semibold",
                                            children: [f, " ", b]
                                        })]
                                    }), (0, a.jsxs)(k.pU, {
                                        lessThan: "md",
                                        children: [(0, a.jsx)(j.xv.Body, {
                                            color: "text.subtle",
                                            margin: "0",
                                            size: "tiny",
                                            children: d("stats.row.floor", "Floor:")
                                        }), (0, a.jsxs)(j.xv.Body, {
                                            color: "text.subtle",
                                            margin: "0 0 0 2px",
                                            size: "tiny",
                                            weight: "semibold",
                                            children: [f, " ", b]
                                        })]
                                    })]
                                }) : void 0
                            })]
                        }),
                        C = s ? (0, a.jsx)(y.k, {
                            alignItems: "center",
                            width: "100%",
                            children: (0, a.jsx)(zt.mn.Cell, {
                                justifyContent: "flex-start",
                                width: "100%",
                                children: w
                            })
                        }) : (0, a.jsx)(zt.mn.Cell, {
                            justifyContent: "flex-start",
                            width: r || "400px",
                            children: w
                        }),
                        S = (0, a.jsxs)(zt.mn.Cell, {
                            justifyContent: "flex-end",
                            children: [(0, a.jsx)(k.pU, {
                                greaterThanOrEqual: "md",
                                children: (0, a.jsx)(j.xv.Body, {
                                    size: "medium",
                                    weight: "semibold",
                                    children: (0, a.jsx)(Le.n, {
                                        children: "".concat(g, " ").concat(b)
                                    })
                                })
                            }), (0, a.jsx)(k.pU, {
                                lessThan: "md",
                                children: (0, a.jsx)(j.xv.Body, {
                                    size: "small",
                                    weight: "semibold",
                                    children: (0, a.jsx)(Le.n, {
                                        children: "".concat(g, " ").concat(b)
                                    })
                                })
                            })]
                        }),
                        _ = m.isEqualTo(0) ? (0, a.jsx)(j.xv.Body, {
                            color: "text.subtle",
                            margin: "0",
                            size: "tiny",
                            weight: "semibold",
                            children: T.eJ
                        }) : (0, a.jsxs)(zt.mn.Cell, {
                            justifyContent: "flex-end",
                            children: [(0, a.jsx)(k.pU, {
                                greaterThanOrEqual: "md",
                                children: (0, a.jsx)(j.xv.Body, {
                                    color: h ? "seaGrass" : "darkCoral",
                                    size: "small",
                                    weight: "semibold",
                                    children: "".concat(h ? "+" : "").concat(p, "%")
                                })
                            }), (0, a.jsx)(k.pU, {
                                lessThan: "md",
                                children: (0, a.jsx)(j.xv.Body, {
                                    color: h ? "seaGrass" : "darkCoral",
                                    size: "tiny",
                                    weight: "semibold",
                                    children: "".concat(h ? "+" : "").concat(p, "%")
                                })
                            })]
                        }),
                        P = (0, a.jsx)(zt.mn.Cell, {
                            justifyContent: "flex-end",
                            width: "20%",
                            children: (0, a.jsx)(Rt._5, {
                                children: (0, a.jsx)(Le.n, {
                                    children: v ? "".concat(f, " ").concat(b) : T.eJ
                                })
                            })
                        }),
                        L = (0, a.jsxs)(De.t, {
                            alignItems: "flex-end",
                            justifyContent: "center",
                            width: "20%",
                            children: [(0, a.jsx)(y.k, {
                                textAlign: "center",
                                children: S
                            }), "top" === t ? (0, a.jsx)(y.k, {
                                marginTop: "2px",
                                textAlign: "center",
                                children: _
                            }) : null]
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [C, !s && P, L]
                    })
                },
                Jt = i.memo((function(e) {
                    var n = e.cellHeight,
                        t = e.renderFloorPrice;
                    return (0, a.jsxs)(y.k, {
                        width: "100%",
                        children: [(0, a.jsx)(zt.mn.Cell, {
                            height: n,
                            width: "50%",
                            children: (0, a.jsx)(Ue.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, a.jsxs)(Ue.O.Row, {
                                    alignItems: "center",
                                    children: [(0, a.jsx)(y.k, {
                                        marginRight: "16px",
                                        children: (0, a.jsx)(Ue.O.Block, {
                                            borderRadius: "16px",
                                            height: "64px",
                                            width: "64px"
                                        })
                                    }), (0, a.jsx)(Ue.O.Line, {
                                        height: "36px"
                                    })]
                                })
                            })
                        }), (0, a.jsx)(zt.mn.Cell, {
                            width: "10%"
                        }), (0, a.jsx)(zt.mn.Cell, {
                            marginLeft: "2%",
                            width: "18%",
                            children: t && (0, a.jsx)(Ue.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, a.jsx)(Ue.O.Row, {
                                    children: (0, a.jsx)(Ue.O.Line, {
                                        height: "36px"
                                    })
                                })
                            })
                        }), (0, a.jsx)(zt.mn.Cell, {
                            marginLeft: "2%",
                            width: "18%",
                            children: (0, a.jsx)(Ue.O, {
                                height: "auto",
                                justifyContent: "center",
                                children: (0, a.jsx)(Ue.O.Row, {
                                    children: (0, a.jsx)(Ue.O.Line, {
                                        height: "36px"
                                    })
                                })
                            })
                        })]
                    })
                })),
                er = t(85034),
                nr = t(70169),
                tr = t(47788),
                rr = i.memo((function() {
                    return (0, a.jsxs)(En.i, {
                        height: "88px",
                        width: "100%",
                        children: [(0, a.jsx)(mn.a.Avatar, {
                            size: 50
                        }), (0, a.jsx)(mn.a.Content, {
                            children: (0, a.jsx)(mn.a.Title, {})
                        }), (0, a.jsxs)(mn.a.Side, {
                            children: [(0, a.jsx)(mn.a.Title, {}), (0, a.jsx)(mn.a.Description, {})]
                        })]
                    })
                })),
                ar = {
                    statsV2: {}
                },
                ir = (0, g.range)(5).map((function() {
                    return ar
                })),
                lr = function(e, n) {
                    var t = (0, Oe.v$)(e).length,
                        r = (0, Oe.v$)(e).map((function(e, n) {
                            return (0, nr.Z)((0, er.Z)({}, e), {
                                index: n
                            })
                        })).slice(0, t);
                    return n ? r.reverse() : r
                };

            function or() {
                var e = (0, r.Z)(["\n  a {\n    width: 100%;\n    padding: 12px 8px 12px 8px;\n  }\n"]);
                return or = function() {
                    return e
                }, e
            }

            function sr() {
                var e = (0, r.Z)(["\n  border-bottom: 0px;\n  padding: ", ";\n"]);
                return sr = function() {
                    return e
                }, e
            }
            var cr = function(e) {
                    var n = e.activeTab,
                        t = e.data,
                        r = e.indexStart,
                        i = e.isLoading,
                        l = e.sortableHeaders,
                        o = e.sortBy,
                        s = e.tableKey,
                        c = (0, F.q)("home"),
                        d = {
                            top: Hn.y,
                            overflowX: "auto",
                            overflowY: "visible",
                            padding: {
                                _: "8px",
                                xl: "16px"
                            },
                            borderColor: "border"
                        };
                    return (0, a.jsx)(dr, {
                        children: (0, a.jsx)(zt.mn, {
                            getHref: function(e) {
                                var n = e.data;
                                return n.slug ? (0, Ne.vg)(n) : void 0
                            },
                            header: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    children: (0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "xl",
                                        children: function(e, n) {
                                            return n && (0, a.jsx)(ur, (0, nr.Z)((0, er.Z)({}, d), {
                                                $padding: "4px 8px 0px 8px",
                                                children: l.map((function(e, n) {
                                                    return (0, a.jsx)(zt.mn.Cell, {
                                                        justifyContent: 0 === n ? "flex-start" : "flex-end",
                                                        width: 0 === n ? "60%" : "20%",
                                                        children: e
                                                    }, n)
                                                }))
                                            }))
                                        }
                                    })
                                }), (0, a.jsx)("div", {
                                    children: (0, a.jsx)(k.pU, {
                                        lessThan: "xl",
                                        children: (0, a.jsxs)(ur, {
                                            $padding: "4px 8px 0px 8px",
                                            children: [(0, a.jsx)(zt.mn.Cell, {
                                                justifyContent: "flex-start",
                                                children: (0, a.jsx)(j.xv.Body, {
                                                    color: "text.subtle",
                                                    size: "tiny",
                                                    weight: "semibold",
                                                    children: c("statsTable.collectionHeader", "COLLECTION")
                                                })
                                            }), (0, a.jsx)(zt.mn.Cell, {
                                                justifyContent: "flex-end",
                                                children: (0, a.jsx)(j.xv.Body, {
                                                    color: "text.subtle",
                                                    size: "tiny",
                                                    weight: "semibold",
                                                    children: c("statsTable.volumeHeader", "VOLUME")
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }),
                            itemHeightEstimate: 90,
                            items: i || !t ? ir : lr(t, !1),
                            renderFullRow: function(e) {
                                return i ? (0, a.jsx)(Jt, {
                                    cellHeight: "96px",
                                    renderFloorPrice: !0
                                }) : (0, a.jsx)($t, (0, nr.Z)((0, er.Z)({}, e), {
                                    activeTab: n,
                                    collectionCellWidth: "60%",
                                    indexStart: r,
                                    sortBy: o
                                }))
                            },
                            renderMore: tr.E,
                            renderPrimary: function(e) {
                                return i ? (0, a.jsx)(rr, {}) : (0, a.jsx)($t, (0, nr.Z)((0, er.Z)({}, e), {
                                    activeTab: n,
                                    collectionCellWidth: "60%",
                                    indexStart: r,
                                    isSmallScreen: !0,
                                    sortBy: o
                                }))
                            },
                            showBorder: !1,
                            showInteractiveStyles: !0,
                            onClick: function(e) {
                                return (0, S.kC)({
                                    collectionSlug: e.data.slug
                                })
                            }
                        }, s)
                    })
                },
                dr = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-20b74819-0"
                })(or()),
                ur = (0, o.ZP)(zt.mn.HeaderContainer).withConfig({
                    componentId: "sc-20b74819-1"
                })(sr(), (function(e) {
                    return e.$padding
                }));

            function gr() {
                var e = (0, r.Z)([""]);
                return gr = function() {
                    return e
                }, e
            }
            var mr = function(e) {
                    return e ? [{
                        edges: e.edges.slice(0, 5)
                    }, {
                        edges: e.edges.slice(5)
                    }] : null
                },
                pr = function() {
                    var e = (0, Nt.Ys)(),
                        n = (0, i.useState)(e[0]),
                        r = n[0],
                        o = n[1],
                        s = Nt.G2.get(r.value),
                        c = (0, l.useLazyLoadQuery)(t(82160), {
                            sortBy: s
                        });
                    return Re.W6 ? (0, a.jsx)(xr, {}) : (0, a.jsx)(i.Suspense, {
                        fallback: (0, a.jsx)(xr, {}),
                        children: (0, a.jsx)(hr, {
                            dataKey: c,
                            setSortBy: o,
                            sortBy: r
                        })
                    })
                },
                hr = function(e) {
                    var n = e.dataKey,
                        r = e.sortBy,
                        o = e.setSortBy,
                        s = (0, Nt.Ys)(),
                        c = (0, l.useFragment)(t(97299), n),
                        d = (0, F.q)("home"),
                        g = (0, i.useMemo)((function() {
                            return [d("statsTable.collectionHeader", "COLLECTION"), d("statsTable.floorPriceHeader", "FLOOR PRICE"), d("statsTable.volumeHeader", "VOLUME")]
                        }), [d]),
                        m = [{
                            id: "top",
                            label: d("statsTable.topTab", "Top"),
                            path: ""
                        }, {
                            id: "trending",
                            label: d("statsTable.trendingTab", "Trending"),
                            path: ""
                        }],
                        p = (0, i.useState)(m[0].id),
                        h = p[0],
                        x = p[1],
                        f = (0, Ot.Z)((0, i.useMemo)((function() {
                            return (0, u.Z)(g.map((function(e) {
                                return {
                                    header: (0, a.jsx)(fr, {
                                        children: e
                                    })
                                }
                            })))
                        }), [g]), {
                            index: 1,
                            direction: "desc"
                        }),
                        b = h === m[1].id,
                        w = mr(b ? (null === c || void 0 === c ? void 0 : c.trendingCollections) || null : (null === c || void 0 === c ? void 0 : c.collections) || null),
                        C = (0, Tt.Z)("(min-width: ".concat(k.AV.lg, "px)"), !1),
                        T = (0, Tt.Z)("(min-width: ".concat(k.AV.xl, "px)"), !1),
                        _ = d("statsTable.viewAllButton", "View all"),
                        P = (0, a.jsx)(Ht.n, {
                            baseUrl: "/",
                            currentTab: h,
                            endEnhancer: (0, a.jsxs)(y.k, {
                                alignItems: "center",
                                marginBottom: "8px",
                                children: [(0, a.jsx)(y.k, {
                                    marginRight: {
                                        _: "12px",
                                        lg: "16px"
                                    },
                                    children: (0, a.jsx)(Bt.P, {
                                        clearable: !1,
                                        disabled: "trending" === h,
                                        endEnhancer: (0, a.jsx)(ft.B, {
                                            children: (0, a.jsx)(Pe.J, {
                                                "aria-label": "Show more",
                                                cursor: "pointer",
                                                value: "keyboard_arrow_down"
                                            })
                                        }),
                                        maxHeight: "370px",
                                        options: s,
                                        overrides: {
                                            Dropdown: {
                                                props: {
                                                    popperOptions: {
                                                        strategy: "fixed"
                                                    }
                                                }
                                            },
                                            ContentItem: {
                                                props: {
                                                    height: {
                                                        _: "36px",
                                                        lg: "48px"
                                                    },
                                                    padding: {
                                                        _: "8px 8px 8px 12px",
                                                        lg: "8px 16px 8px 24px"
                                                    }
                                                }
                                            },
                                            ContentLabel: {
                                                props: {
                                                    marginRight: {
                                                        _: "2px",
                                                        lg: "4px"
                                                    }
                                                }
                                            },
                                            ContentLabelTitle: {
                                                props: {
                                                    fontSize: {
                                                        _: "14px",
                                                        lg: "16px"
                                                    }
                                                }
                                            }
                                        },
                                        readOnly: !0,
                                        value: "trending" === h ? "one_day_volume" : r.value,
                                        variant: "item",
                                        onSelect: function(e) {
                                            e && e !== r && (o(e), (0, S.k)({
                                                filterOption: e.label
                                            }))
                                        }
                                    })
                                }), (0, a.jsx)(k.pU, {
                                    greaterThanOrEqual: "lg",
                                    children: (0, a.jsx)(Ke.zx, {
                                        "data-testid": "Magellan--statsViewAllBtn",
                                        height: "48px",
                                        href: "/rankings".concat("trending" === h ? "/trending" : ""),
                                        size: "small",
                                        variant: "tertiary",
                                        onClick: function() {
                                            (0, S.T0)()
                                        },
                                        children: (0, a.jsx)(j.xv.Body, {
                                            size: "medium",
                                            weight: "semibold",
                                            whiteSpace: "nowrap",
                                            children: _
                                        })
                                    })
                                }), (0, a.jsx)(k.pU, {
                                    lessThan: "lg",
                                    children: (0, a.jsx)(Ke.zx, {
                                        "data-testid": "Magellan--statsViewAllBtn",
                                        height: "36px",
                                        href: "/rankings".concat("trending" === h ? "/trending" : ""),
                                        size: "xsmall",
                                        variant: "tertiary",
                                        onClick: function() {
                                            (0, S.T0)()
                                        },
                                        children: (0, a.jsx)(j.xv.Body, {
                                            size: "small",
                                            weight: "semibold",
                                            whiteSpace: "nowrap",
                                            children: _
                                        })
                                    })
                                })]
                            }),
                            handleClick: function(e) {
                                e && (x(e), (0, S.mY)({
                                    tabName: e
                                }))
                            },
                            isLoading: !w,
                            labelVariant: C ? "large" : "small",
                            tabItemPadding: T ? "0px 0px 16px 0px" : "0px 0px 12px 0px",
                            tabs: (0, u.Z)(m),
                            useUpdatedTabLabels: !0
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, a.jsxs)(v.r, {
                                "data-testid": "Magellan--statsTable",
                                children: [(0, a.jsx)(v.r.Item, {
                                    marginBottom: {
                                        _: "16px"
                                    },
                                    xs: 12,
                                    children: P
                                }), (0, a.jsx)(v.r.Item, {
                                    lg: 6,
                                    marginRight: "50px",
                                    children: (0, a.jsx)(cr, {
                                        activeTab: h,
                                        data: w ? w[0] : null,
                                        indexStart: 1,
                                        isLoading: !w,
                                        sortBy: r,
                                        sortableHeaders: f
                                    })
                                }), (0, a.jsx)(v.r.Item, {
                                    lg: 6,
                                    marginLeft: "50px",
                                    children: (0, a.jsx)(cr, {
                                        activeTab: h,
                                        data: w ? w[1] : null,
                                        indexStart: 6,
                                        isLoading: !w,
                                        sortBy: r,
                                        sortableHeaders: f
                                    })
                                })]
                            })
                        }), (0, a.jsx)(k.pU, {
                            lessThan: "lg",
                            children: (0, a.jsxs)(v.r, {
                                "data-testid": "Magellan--statsTable",
                                gridRowGap: 8,
                                children: [(0, a.jsx)(v.r.Item, {
                                    xs: 12,
                                    children: P
                                }), (0, a.jsx)(v.r.Item, {
                                    xs: 12,
                                    children: (0, a.jsx)(cr, {
                                        activeTab: h,
                                        data: w ? w[0] : null,
                                        indexStart: 1,
                                        isLoading: !w,
                                        sortBy: r,
                                        sortableHeaders: f
                                    })
                                })]
                            })
                        })]
                    })
                },
                xr = function() {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(k.pU, {
                            greaterThanOrEqual: "lg",
                            children: (0, a.jsxs)(v.r, {
                                children: [(0, a.jsx)(v.r.Item, {
                                    xs: 6,
                                    children: (0, a.jsx)(y.k, {
                                        marginBottom: "30px",
                                        marginTop: "20px",
                                        width: "50%",
                                        children: (0, a.jsx)(Ue.O.Line, {
                                            height: "46px",
                                            width: "100%"
                                        })
                                    })
                                }), (0, a.jsx)(v.r.Item, {
                                    xs: 6,
                                    children: (0, a.jsx)(y.k, {
                                        justifyContent: "end",
                                        marginBottom: "30px",
                                        marginTop: "20px",
                                        children: (0, a.jsx)(Ue.O.Line, {
                                            height: "46px",
                                            width: "35%"
                                        })
                                    })
                                }), (0, a.jsx)(v.r.Item, {
                                    xs: 6,
                                    children: new Array(5).fill(null).map((function(e, n) {
                                        return (0, a.jsx)(y.k, {
                                            marginRight: "50px",
                                            children: (0, a.jsx)(Jt, {
                                                cellHeight: "96px",
                                                renderFloorPrice: !0
                                            })
                                        }, n)
                                    }))
                                }), (0, a.jsx)(v.r.Item, {
                                    xs: 6,
                                    children: new Array(5).fill(null).map((function(e, n) {
                                        return (0, a.jsx)(y.k, {
                                            marginLeft: "50px",
                                            children: (0, a.jsx)(Jt, {
                                                cellHeight: "96px",
                                                renderFloorPrice: !0
                                            })
                                        }, n + 5)
                                    }))
                                })]
                            })
                        }), (0, a.jsx)(k.pU, {
                            lessThan: "lg",
                            children: (0, a.jsxs)(v.r, {
                                children: [(0, a.jsx)(v.r.Item, {
                                    xs: 6,
                                    children: (0, a.jsx)(y.k, {
                                        marginBottom: "19px",
                                        marginTop: "18px",
                                        width: "50%",
                                        children: (0, a.jsx)(Ue.O.Line, {
                                            height: "40px",
                                            width: "100%"
                                        })
                                    })
                                }), (0, a.jsx)(v.r.Item, {
                                    xs: 6,
                                    children: (0, a.jsx)(y.k, {
                                        justifyContent: "end",
                                        marginBottom: "19px",
                                        marginTop: "18px",
                                        children: (0, a.jsx)(Ue.O.Line, {
                                            height: "40px",
                                            width: "35%"
                                        })
                                    })
                                }), (0, a.jsx)(v.r.Item, {
                                    children: new Array(5).fill(null).map((function(e, n) {
                                        return (0, a.jsx)(y.k, {
                                            children: (0, a.jsx)(Jt, {
                                                cellHeight: "79px",
                                                renderFloorPrice: !1
                                            })
                                        }, n)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                fr = (0, o.ZP)(j.xv).attrs({
                    size: "tiny",
                    weight: "semibold",
                    color: "text.subtle"
                }).withConfig({
                    componentId: "sc-6bface4d-0"
                })(gr());

            function yr() {
                var e = (0, r.Z)(["\n  background-position: 50% 50%;\n  background-size: cover;\n  margin-top: -", ";\n  padding-top: ", ";\n\n  ", "\n\n  @media (min-width: ", "px) {\n    ", "\n  }\n"]);
                return yr = function() {
                    return e
                }, e
            }

            function vr() {
                var e = (0, r.Z)(["\n  grid-row-gap: 32px;\n\n  @media (min-width: ", "px) {\n    grid-row-gap: 40px;\n  }\n\n  @media (min-width: ", "px) {\n    grid-row-gap: 50px;\n  }\n"]);
                return vr = function() {
                    return e
                }, e
            }
            var br = function(e) {
                    var n, r = e.dataKey,
                        i = (0, l.useFragment)(t(97276), r);
                    return (0, a.jsxs)(jr, {
                        marginBottom: 40,
                        children: [(0, a.jsx)(kr, {
                            xs: 12,
                            children: (0, a.jsx)(On.W, {
                                children: (0, a.jsx)(Vt, {
                                    dataKey: null !== i && void 0 !== i ? i : null
                                })
                            })
                        }), (0, a.jsx)(v.r.Item, {
                            xs: 12,
                            children: (0, a.jsx)(On.W, {
                                children: (0, a.jsx)(pr, {})
                            })
                        }), (0, a.jsx)(v.r.Item, {
                            xs: 12,
                            children: (0, a.jsx)(On.W, {
                                children: (0, a.jsx)(mt, {
                                    dataKey: null !== (n = null === i || void 0 === i ? void 0 : i.homePageFeaturedSectionCollections) && void 0 !== n ? n : null
                                })
                            })
                        }), (0, a.jsx)(v.r.Item, {
                            children: (0, a.jsx)(On.W, {
                                children: (0, a.jsx)(A, {})
                            })
                        })]
                    })
                },
                kr = (0, o.ZP)(v.r.Item).withConfig({
                    componentId: "sc-8994a95b-0"
                })(yr(), Hn.y, Hn.y, (0, xe.Um)({
                    variants: {
                        light: {
                            backgroundImage: 'url("/static/images/magellan-gradient-light-sm.png")'
                        },
                        dark: {
                            backgroundImage: 'url("/static/images/magellan-gradient-dark-sm.png")'
                        }
                    }
                }), k.AV.sm, (0, xe.Um)({
                    variants: {
                        light: {
                            backgroundImage: 'url("/static/images/magellan-gradient-light.png")'
                        },
                        dark: {
                            backgroundImage: 'url("/static/images/magellan-gradient-dark.png")'
                        }
                    }
                })),
                jr = (0, o.ZP)(v.r).withConfig({
                    componentId: "sc-8994a95b-1"
                })(vr(), k.AV.xl, k.AV.xxl),
                wr = t(87481),
                Fr = t(47762),
                Cr = t(86676),
                Sr = t(13309),
                Tr = t(71636),
                _r = t.n(Tr),
                Pr = t(20225),
                Lr = t(7428);

            function Kr() {
                var e = (0, r.Z)(["\n  display: none;\n"]);
                return Kr = function() {
                    return e
                }, e
            }

            function Zr() {
                var e = (0, r.Z)(["\n  display: block;\n"]);
                return Zr = function() {
                    return e
                }, e
            }

            function Ar() {
                var e = (0, r.Z)(["\n      height: 586px;\n    "]);
                return Ar = function() {
                    return e
                }, e
            }

            function Dr() {
                var e = (0, r.Z)(["\n  height: 780px;\n  background-size: cover;\n  background-color: ", ";\n  background-position: center;\n  opacity: 0.3;\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  mask: linear-gradient(#fff, transparent);\n  -webkit-mask: linear-gradient(#fff, transparent);\n\n  ", ";\n"]);
                return Dr = function() {
                    return e
                }, e
            }

            function Ir() {
                var e = (0, r.Z)(["\n      height: 586px;\n    "]);
                return Ir = function() {
                    return e
                }, e
            }

            function Vr() {
                var e = (0, r.Z)(["\n        padding-top: 40px;\n      "]);
                return Vr = function() {
                    return e
                }, e
            }

            function Ur() {
                var e = (0, r.Z)(["\n          width: 50%;\n          padding: 110px 20px 44px 30px;\n          align-items: flex-start;\n        "]);
                return Ur = function() {
                    return e
                }, e
            }

            function Br() {
                var e = (0, r.Z)(["\n            font-size: 32px;\n            max-width: ", "px;\n          "]);
                return Br = function() {
                    return e
                }, e
            }

            function Or() {
                var e = (0, r.Z)(["\n            text-align: left;\n            max-width: 100%;\n            margin-right: 10px;\n          "]);
                return Or = function() {
                    return e
                }, e
            }

            function Hr() {
                var e = (0, r.Z)(["\n            font-size: 45px;\n          "]);
                return Hr = function() {
                    return e
                }, e
            }

            function Nr() {
                var e = (0, r.Z)(["\n            font-size: 24px;\n            text-align: left;\n          "]);
                return Nr = function() {
                    return e
                }, e
            }

            function zr() {
                var e = (0, r.Z)(["\n            margin-top: 40px;\n          "]);
                return zr = function() {
                    return e
                }, e
            }

            function Er() {
                var e = (0, r.Z)(["\n              width: 167px;\n            "]);
                return Er = function() {
                    return e
                }, e
            }

            function Rr() {
                var e = (0, r.Z)(["\n          width: 50%;\n          padding: 80px 0px;\n          align-items: flex-end;\n        "]);
                return Rr = function() {
                    return e
                }, e
            }

            function Mr() {
                var e = (0, r.Z)(["\n            max-width: 480px;\n          "]);
                return Mr = function() {
                    return e
                }, e
            }

            function qr() {
                var e = (0, r.Z)(["\n                height: 420px;\n              "]);
                return qr = function() {
                    return e
                }, e
            }

            function Wr() {
                var e = (0, r.Z)(["\n            max-width: 480px;\n            margin-right: 30px;\n          "]);
                return Wr = function() {
                    return e
                }, e
            }

            function Gr() {
                var e = (0, r.Z)(["\n              margin-top: -8px;\n              padding-left: 16px;\n              padding-right: 16px;\n              padding-bottom: 15px;\n            "]);
                return Gr = function() {
                    return e
                }, e
            }

            function Xr() {
                var e = (0, r.Z)(["\n                margin-top: 0;\n              "]);
                return Xr = function() {
                    return e
                }, e
            }

            function Qr() {
                var e = (0, r.Z)(["\n              padding: 0 16px;\n              margin-top: -2px;\n              margin-bottom: 16px;\n            "]);
                return Qr = function() {
                    return e
                }, e
            }

            function Yr() {
                var e = (0, r.Z)(["\n                height: 300px;\n              "]);
                return Yr = function() {
                    return e
                }, e
            }

            function $r() {
                var e = (0, r.Z)(["\n                height: 420px;\n              "]);
                return $r = function() {
                    return e
                }, e
            }

            function Jr() {
                var e = (0, r.Z)(["\n  height: 780px;\n\n  ", "\n\n  .Featured--background-container {\n    width: 100%;\n    position: absolute;\n    overflow: hidden;\n  }\n\n  .Featured--learn-more {\n    z-index: 2;\n    cursor: pointer;\n    align-self: flex-start;\n\n    ", "\n\n    .Featured--learn-more-container {\n      align-items: center;\n      height: 30px;\n\n      &:hover {\n        color: ", ";\n      }\n\n      .Featured--learn-more-icon {\n        color: inherit;\n      }\n\n      .Featured--learn-more-text {\n        margin-left: 8px;\n        font-weight: 600;\n        color: ", ";\n\n        &:hover {\n          color: inherit;\n        }\n      }\n    }\n  }\n\n  .Featured--container {\n    margin: 0 auto;\n    max-width: ", ";\n    width: 100%;\n    flex-wrap: wrap;\n\n    &:hover {\n      box-shadow: 10px;\n    }\n\n    .Featured--title {\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding: 30px 20px 20px 20px;\n\n      ", "\n\n      .Featured--header {\n        margin: 0;\n        font-size: 28px;\n        text-align: center;\n        z-index: 2;\n        max-width: 330px;\n\n        ", "\n      }\n\n      .Featured--subheader {\n        margin-top: 20px;\n        max-width: 400px;\n        text-align: center;\n        z-index: 2;\n        font-size: 18px;\n\n        ", "\n\n        ", "\n      }\n      .Featured--button-container {\n        margin-top: 20px;\n        z-index: 2;\n\n        ", "\n\n        .Featured--button {\n          width: 120px;\n\n          ", "\n        }\n      }\n    }\n\n    .Featured--image {\n      flex-direction: column;\n      align-items: center;\n      width: 100%;\n      padding-top: 0;\n\n      ", "\n\n      .AssetMedia--img {\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n      }\n      .Featured--skeleton {\n        max-width: 355px;\n        ", "\n\n        .Featured--skeleton-row {\n          border-top-left-radius: 10px;\n          border-top-right-radius: 10px;\n          margin-bottom: -10px;\n\n          .Featured--skeleton-block {\n            height: 300px;\n\n            ", "\n          }\n        }\n      }\n\n      .Featured--image-card {\n        width: 100%;\n        background-color: ", ";\n        flex-direction: column;\n        border-radius: 10px;\n        overflow: hidden;\n        z-index: 2;\n        max-width: 355px;\n        box-shadow: 0px 0px 10px 0px\n          ", ";\n\n        ", "\n\n        &:hover {\n          transition: box-shadow 0.3s ease-in;\n          box-shadow: 0px 0px 50px 0px\n            ", ";\n        }\n\n        @media (hover: hover) {\n          &:hover ", " {\n            display: block;\n          }\n          &:hover ", " {\n            display: none;\n          }\n        }\n\n        .Image--image {\n          border-bottom-left-radius: 0 !important;\n          border-bottom-right-radius: 0 !important;\n        }\n\n        .Featured--image-text-area {\n          border: none;\n          margin-top: -11px;\n          padding-left: 12px;\n          padding-right: 12px;\n          padding-bottom: 13px;\n\n          ", "\n\n          &:hover {\n            box-shadow: none;\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n          }\n\n          .Featured--image-avatar {\n            object-fit: cover;\n          }\n\n          .Featured--image-creator {\n            font-size: 14px;\n            line-height: 20px;\n            margin-top: -1px;\n            color: ", ";\n\n            ", "\n          }\n        }\n\n        .Featured--image-content {\n          margin-left: -3px;\n        }\n\n        .Featured--image-title {\n          font-size: 14px;\n          line-height: 20px;\n          color: ", ";\n        }\n\n        .Featured--image-description {\n          padding: 0 52px 0 12px;\n          margin-top: -4px;\n          margin-bottom: 12px;\n          font-size: 14px;\n          line-height: 20px;\n          color: ", ";\n\n          ", "\n        }\n\n        .Featured--image-link {\n          border-radius: 10px;\n\n          .Featured--image-media {\n            height: 80vw;\n            z-index: 2;\n            border-bottom: 1px solid ", ";\n\n            ", "\n          }\n        }\n      }\n    }\n  }\n"]);
                return Jr = function() {
                    return e
                }, e
            }
            var ea = "Featured",
                na = {
                    name: "SLIMESHOP",
                    description: "",
                    href: "https://slimeshop.slimesunday.com/",
                    height: 367,
                    width: 550,
                    imageUrl: "https://storage.googleapis.com/opensea-prod.appspot.com/files/SLIMESHOP_featured_image_6oo2_43.jpeg",
                    creatorUsername: "Slimesunday",
                    creatorImageUrl: "https://storage.googleapis.com/opensea-prod.appspot.com/files/SLIMESHOP_featured_image_6oo2_43.jpeg"
                },
                ta = function() {
                    var e = (0, F.q)("home"),
                        n = (0, Pr.Fg)().theme,
                        t = {
                            backgroundImage: "url(".concat(na.imageUrl, ")")
                        },
                        r = (0, i.useState)(),
                        l = r[0],
                        o = r[1],
                        c = void 0 !== l && l <= 0;
                    (0, i.useEffect)((function() {
                        var e, n = function() {
                            var t;
                            o(null === (t = na.dropTime) || void 0 === t ? void 0 : t.diff(_r().utc())), e = setTimeout((function() {
                                requestAnimationFrame(n)
                            }), 1e3)
                        };
                        return requestAnimationFrame(n),
                            function() {
                                return clearTimeout(e)
                            }
                    }), [o]);
                    var d = _r().duration(l),
                        u = d.days(),
                        g = d.hours(),
                        m = d.minutes(),
                        p = d.seconds(),
                        h = (0, Lr.jg)(u, g, m, p),
                        f = function() {
                            return (0, a.jsx)(s.r, {
                                className: "Featured--learn-more",
                                href: "/#".concat(Ce.c),
                                children: (0, a.jsxs)(y.k, {
                                    className: "Featured--learn-more-container",
                                    children: [(0, a.jsx)(Pe.J, {
                                        className: "Featured--learn-more-icon",
                                        color: "blue",
                                        value: "play_circle_filled"
                                    }), (0, a.jsx)(b.WX, {
                                        className: "Featured--learn-more-text",
                                        children: e("customFeatured.learnMorePrompt", "Learn more about OpenSea")
                                    })]
                                })
                            })
                        };
                    return (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)(la, {
                            children: [(0, a.jsx)(x.g, {
                                className: "Featured--background-container",
                                children: (0, a.jsx)(ia, {
                                    style: t
                                })
                            }), (0, a.jsxs)(y.k, {
                                className: "Featured--container",
                                children: [(0, a.jsxs)(y.k, {
                                    className: "Featured--title",
                                    children: [(0, a.jsx)(b.WX, {
                                        className: "Featured--header",
                                        variant: "h1",
                                        children: T.iZ
                                    }), (0, a.jsx)(b.WX, {
                                        as: "span",
                                        className: "Featured--subheader",
                                        variant: "subtitle",
                                        children: T.HC
                                    }), (0, a.jsxs)(y.k, {
                                        className: "Featured--button-container",
                                        children: [(0, a.jsx)(x.g, {
                                            marginRight: "20px",
                                            children: (0, a.jsx)(Ke.zx, {
                                                className: "Featured--button",
                                                eventSource: ea,
                                                href: "/explore-collections",
                                                children: e("customFeatured.exploreCTA", "Explore")
                                            })
                                        }), (0, a.jsx)(Ke.zx, {
                                            className: "Featured--button",
                                            eventSource: ea,
                                            href: "/asset/create",
                                            variant: "secondary",
                                            children: e("customFeatured.createCTA", "Create")
                                        })]
                                    }), (0, a.jsx)(k.pU, {
                                        greaterThanOrEqual: "lg",
                                        children: (0, a.jsx)(y.k, {
                                            alignItems: "flex-end",
                                            height: "100%",
                                            children: (0, a.jsx)(f, {})
                                        })
                                    })]
                                }), (0, a.jsx)(y.k, {
                                    className: "Featured--image",
                                    children: (0, a.jsx)(y.k, {
                                        as: "article",
                                        className: "Featured--image-card",
                                        children: (0, a.jsxs)(s.r, {
                                            className: "Featured--image-link",
                                            href: na.href,
                                            onClick: function() {
                                                return (0, hn.UW)({
                                                    name: na.name,
                                                    creatorUsername: na.creatorUsername,
                                                    link: na.href
                                                })
                                            },
                                            children: [(0, a.jsx)(he(), {
                                                alt: "",
                                                className: "Featured--image-media",
                                                height: na.height,
                                                priority: !0,
                                                src: na.imageUrl,
                                                unoptimized: !0,
                                                width: na.width
                                            }), (0, a.jsxs)(Ve.ck, {
                                                as: "footer",
                                                className: "Featured--image-text-area",
                                                children: [(0, a.jsx)(Ve.ck.Avatar, {
                                                    alt: "Featured creator",
                                                    className: "Featured--image-avatar",
                                                    outline: 0,
                                                    size: 38,
                                                    src: na.creatorImageUrl
                                                }), (0, a.jsxs)(Ve.ck.Content, {
                                                    className: "Featured--image-content",
                                                    children: [(0, a.jsx)(Ve.ck.Title, {
                                                        children: (0, a.jsx)("span", {
                                                            className: "Featured--image-title",
                                                            children: na.name
                                                        })
                                                    }), (0, a.jsxs)(Ve.ck.Description, {
                                                        className: "Featured--image-creator",
                                                        children: [(0, a.jsx)("span", {
                                                            style: {
                                                                fontWeight: 400
                                                            },
                                                            children: "by"
                                                        }), " ", (0, a.jsx)("span", {
                                                            style: {
                                                                fontWeight: 500
                                                            },
                                                            children: na.creatorUsername
                                                        })]
                                                    })]
                                                }), (l || c) && (0, a.jsx)(Ve.ck.Side, {
                                                    children: c ? (0, a.jsx)(Ke.zx, {
                                                        borderRadius: "8px",
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        size: "xsmall",
                                                        children: "Mint now"
                                                    }) : (0, a.jsxs)(a.Fragment, {
                                                        children: [(0, a.jsxs)(aa, {
                                                            height: "",
                                                            children: [(0, a.jsx)(b.WX, {
                                                                color: "light" === n ? "charcoal" : "white",
                                                                fontWeight: 400,
                                                                margin: 0,
                                                                variant: "small",
                                                                children: "Public mint"
                                                            }), (0, a.jsx)(b.WX, {
                                                                color: "light" === n ? "charcoal" : "white",
                                                                fontWeight: 600,
                                                                margin: 0,
                                                                variant: "small-bold",
                                                                children: h
                                                            })]
                                                        }), (0, a.jsx)(ra, {
                                                            children: (0, a.jsx)(Ke.zx, {
                                                                borderRadius: "8px",
                                                                fontSize: "14px",
                                                                fontWeight: 600,
                                                                size: "xsmall",
                                                                children: "View drop"
                                                            })
                                                        })]
                                                    })
                                                })]
                                            }), na.description && (0, a.jsx)("p", {
                                                className: "Featured--image-description",
                                                children: na.description
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)(k.pU, {
                                    lessThan: "lg",
                                    children: (0, a.jsx)(y.k, {
                                        justifyContent: "center",
                                        width: "100%",
                                        children: (0, a.jsx)(f, {})
                                    })
                                })]
                            })]
                        })
                    })
                },
                ra = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-c14458be-0"
                })(Kr()),
                aa = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-c14458be-1"
                })(Zr()),
                ia = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-c14458be-2"
                })(Dr(), (function(e) {
                    return e.theme.colors.background
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Ar())
                })),
                la = (0, o.ZP)(y.k).withConfig({
                    componentId: "sc-c14458be-3"
                })(Jr(), (0, h.FD)({
                    tabletL: (0, o.iv)(Ir())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Vr())
                }), (function(e) {
                    return e.theme.colors.darkSeaBlue
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.maxWidth.smallPadding
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Ur())
                }), (0, h.FD)({
                    small: (0, o.iv)(Br(), 550),
                    tabletL: (0, o.iv)(Or()),
                    extraLarge: (0, o.iv)(Hr())
                }), (function(e) {
                    return (0, xe.Um)({
                        variants: {
                            light: {
                                color: "".concat(e.theme.colors.oil, ";")
                            },
                            dark: {
                                color: "".concat(e.theme.colors.text.subtle, ";")
                            }
                        }
                    })
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Nr())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(zr())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Er())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Rr())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Mr())
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(qr())
                }), (function(e) {
                    return e.theme.colors.surface
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Wr())
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), ra, aa, (0, h.FD)({
                    tabletL: (0, o.iv)(Gr())
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.white : e.theme.colors.charcoal
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Xr())
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.white : e.theme.colors.charcoal
                }), (function(e) {
                    return "dark" === e.theme.type ? e.theme.colors.gray : e.theme.colors.darkGray
                }), (0, h.FD)({
                    tabletL: (0, o.iv)(Qr())
                }), (function(e) {
                    return e.theme.colors.border
                }), (0, h.FD)({
                    phoneL: (0, o.iv)(Yr()),
                    tabletL: (0, o.iv)($r())
                }));

            function oa() {
                var e = (0, r.Z)(["\n  html {\n    scroll-behavior: smooth;\n  }\n"]);
                return oa = function() {
                    return e
                }, e
            }

            function sa() {
                var e = (0, r.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 30px;\n  padding-right: 30px;\n  max-width: ", ";\n  width: 100%;\n  flex-wrap: wrap;\n"]);
                return sa = function() {
                    return e
                }, e
            }

            function ca() {
                var e = (0, r.Z)(["\n  border-radius: ", ";\n  height: 20vw;\n  max-height: 200px;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n\n  box-shadow: 0px 0px 10px 0px\n    ", ";\n\n  &:hover {\n    transition: box-shadow 0.3s ease-in;\n    box-shadow: 0px 0px 50px 0px\n      ", ";\n  }\n"]);
                return ca = function() {
                    return e
                }, e
            }
            var da = t(8194),
                ua = function(e) {
                    var n = e.data,
                        t = (0, F.q)("home"),
                        r = (0, wr.b)().announcementBanner,
                        i = (0, w.P5)("custom_featured_item"),
                        l = (0, w.P5)("custom_featured_banner"),
                        o = (0, w.On)();
                    (0, Fr.n)((function() {
                        (0, Cr.Ry)()
                    }));
                    var u, g, m = Sr.Z.parse({
                            show_delisted_notice: Sr.Z.Optional(Sr.Z.boolean)
                        }).show_delisted_notice,
                        p = Sr.Z.parse({
                            show_ip_rights_delisted_notice: Sr.Z.Optional(Sr.Z.isIpRightsTakedownDelisted)
                        }).show_ip_rights_delisted_notice,
                        h = null === r || void 0 === r ? void 0 : r.announcementBanner,
                        f = "HOMEPAGE_ONLY" == (null === h || void 0 === h ? void 0 : h.displayMode);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ga, {}), (0, a.jsxs)(sn.v, {
                            announcement: f ? h : void 0,
                            isTransparentNav: o,
                            children: [o ? (0, a.jsx)(br, {
                                dataKey: null !== n && void 0 !== n ? n : null
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [i ? (0, a.jsx)(ta, {}) : (0, a.jsx)(Vn, {
                                    data: null !== (u = null === n || void 0 === n ? void 0 : n.featuredAsset) && void 0 !== u ? u : null
                                }), (0, a.jsxs)(x.g, {
                                    marginBottom: "120px",
                                    marginTop: l ? "80px" : void 0,
                                    children: [l && (0, a.jsx)(ma, {
                                        children: (0, a.jsxs)(pa, {
                                            children: [(0, a.jsx)(k.pU, {
                                                lessThan: "lg",
                                                children: (0, a.jsx)(s.r, {
                                                    href: "/collection/fwb-os",
                                                    children: (0, a.jsx)(cn.E, {
                                                        alt: "Friends With Benefits",
                                                        layout: "fill",
                                                        src: "static/images/promo/fbw_banner_mobile.jpg",
                                                        unoptimized: !0
                                                    })
                                                })
                                            }), (0, a.jsx)(k.pU, {
                                                greaterThanOrEqual: "lg",
                                                children: (0, a.jsx)(s.r, {
                                                    href: "/collection/fwb-os",
                                                    children: (0, a.jsx)(cn.E, {
                                                        alt: "Friends With Benefits",
                                                        layout: "fill",
                                                        src: "static/images/promo/fbw_banner_desktop.jpg",
                                                        unoptimized: !0
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)(Se.z, {
                                        data: null !== (g = null === n || void 0 === n ? void 0 : n.promotions) && void 0 !== g ? g : null,
                                        title: (0, a.jsx)(b.WX, {
                                            as: "h2",
                                            marginBottom: "8px",
                                            textAlign: "center",
                                            variant: "h3",
                                            children: l ? t("promotions.customTitle", "Curated by {{curator}}", {
                                                curator: "Friends with Benefits"
                                            }) : t("promotions.title", "Notable Drops")
                                        })
                                    })]
                                }), (0, a.jsx)(Xe, {}), (0, a.jsx)(c.I, {}), (0, a.jsx)(je, {}), (0, a.jsx)(ue, {}), (0, a.jsx)(A, {}), (0, a.jsx)(Ce.F, {
                                    showButton: !0
                                }), (0, a.jsx)(d.P, {})]
                            }), m && (0, a.jsx)(an.u_, {
                                isOpen: !0,
                                children: (0, a.jsx)(rn.e, {
                                    variant: "home",
                                    onClose: function() {
                                        return ln.Z.push("/")
                                    }
                                })
                            }), p && (0, a.jsx)(on, {
                                IpRightsTakedownDelistedMode: p
                            })]
                        })]
                    })
                };
            ua.query = da, ua.cachePolicy = {
                maxAge: 300,
                revalidate: 360
            };
            var ga = (0, o.vJ)(oa()),
                ma = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-74c39a8c-0"
                })(sa(), (function(e) {
                    return e.theme.maxWidth.smallPadding
                })),
                pa = (0, o.ZP)(x.g).withConfig({
                    componentId: "sc-74c39a8c-1"
                })(ca(), (function(e) {
                    return e.theme.borderRadius.default
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }), (function(e) {
                    return e.theme.colors.withOpacity.charcoal.light
                }))
        },
        76190: function(e, n, t) {
            t.d(n, {
                t: function() {
                    return j
                }
            });
            var r = t(85034),
                a = t(70169),
                i = t(31373),
                l = t(19989),
                o = t(24246),
                s = t(27378),
                c = t(74387),
                d = t(47892),
                u = t(96728),
                g = t(81480),
                m = t(56656),
                p = t(16611),
                h = t(90761),
                x = t(28828);

            function f() {
                var e = (0, l.Z)(["\n  display: flex;\n  align-items: center;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function y() {
                var e = (0, l.Z)(["\n  height: ", "px;\n  background: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }
            var v, b = function(e, n) {
                    var t = e.startEnhancer,
                        l = e.endEnhancer,
                        s = e.foregroundColor,
                        d = e.children,
                        u = (0, i.Z)(e, ["startEnhancer", "endEnhancer", "foregroundColor", "children"]),
                        m = !(0, c.Z)((0, g.ip)(g.ss.large), !1) ? "bold" : "small-bold-h4";
                    return (0, o.jsx)(w, (0, a.Z)((0, r.Z)({
                        foregroundColor: s,
                        ref: n,
                        variant: "secondary"
                    }, u), {
                        children: (0, o.jsxs)(k, {
                            as: "span",
                            color: s,
                            variant: m,
                            children: [t, d, l]
                        })
                    }))
                },
                k = (0, d.ZP)(p.WX).withConfig({
                    componentId: "sc-e120eff9-0"
                })(f()),
                j = (0, s.forwardRef)(b),
                w = (0, d.ZP)(m.zx).withConfig({
                    componentId: "sc-e120eff9-1"
                })(y(), x.Wb, (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return null !== (v = e.foregroundColor) && void 0 !== v ? v : e.theme.colors.border
                }), (function(e) {
                    return e.theme.borderRadius.button
                }), u.borderRadius, u.boxShadow, (function(e) {
                    return (0, h.Um)({
                        variants: {
                            light: {
                                ":hover:not([disabled]),:active:not([disabled]):active:not([disabled]),:focus:not([disabled]):focus:not([disabled])": {
                                    borderColor: e.theme.colors.fog,
                                    borderWidth: "2px"
                                }
                            },
                            dark: {
                                background: e.theme.colors.oil
                            }
                        }
                    })
                }), u.width, u.height, u.background, u.border)
        },
        53973: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    n = {
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
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "tokenId",
                        storageKey: null
                    },
                    r = {
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
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "Featured_data",
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imagePreviewUrl",
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        concreteType: "AccountType",
                        kind: "LinkedField",
                        name: "creator",
                        plural: !1,
                        selections: [e, {
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
                        }],
                        storageKey: null
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "asset_url",
                        selections: [n, t, r],
                        args: null,
                        argumentDefinitions: []
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "AssetMedia_asset"
                    }, {
                        kind: "InlineDataFragmentSpread",
                        name: "itemEvents_data",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "relayId",
                            storageKey: null
                        }, n, t, r],
                        args: null,
                        argumentDefinitions: []
                    }],
                    type: "AssetType",
                    abstractKey: null
                }
            }();
            r.hash = "ae43f6107aabc2c2064a6d9b29d8c9f4", n.default = r
        },
        76122: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "HeaderCollectionItem_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "logo",
                            storageKey: null
                        }, {
                            kind: "InlineDataFragmentSpread",
                            name: "collection_url",
                            selections: [e, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isCategory",
                                storageKey: null
                            }],
                            args: null,
                            argumentDefinitions: []
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "verificationStatus",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "CollectionStatsV2Type",
                            kind: "LinkedField",
                            name: "statsV2",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PriceType",
                                kind: "LinkedField",
                                name: "floorPrice",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "unit",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "PaymentAssetType",
                            kind: "LinkedField",
                            name: "nativePaymentAsset",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AssetType",
                                kind: "LinkedField",
                                name: "asset",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "symbol",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "shortDescription",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "overrideUrl",
                        storageKey: null
                    }],
                    type: "HomePageHeaderCarouselType",
                    abstractKey: null
                }
            }();
            r.hash = "687760955ec9668dda2e162ac49e4e34", n.default = r
        },
        20878: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slug",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "HomePageFeaturedCollectionCard_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionType",
                        kind: "LinkedField",
                        name: "collection",
                        plural: !1,
                        selections: [e, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "logo",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "banner",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "verificationStatus",
                            storageKey: null
                        }, {
                            kind: "InlineDataFragmentSpread",
                            name: "collection_url",
                            selections: [e, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isCategory",
                                storageKey: null
                            }],
                            args: null,
                            argumentDefinitions: []
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "GlobalCollectionCard_data"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "collectionSubtitle",
                        storageKey: null
                    }],
                    type: "HomePageFeaturedSectionCollectionType",
                    abstractKey: null
                }
            }();
            r.hash = "4e87552f56c48f0d475163182a4d0e48", n.default = r
        },
        49663: function(e, n, t) {
            t.r(n);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "HomePageFeaturedCollections_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageFeaturedSectionType",
                    kind: "LinkedField",
                    name: "section",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "titleUrl",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "banner",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HomePageFeaturedCollectionCard_data"
                }],
                type: "HomePageFeaturedSectionCollectionType",
                abstractKey: null,
                hash: "c4d03e0f73ee651e11107f0e877a4780"
            };
            n.default = r
        },
        95969: function(e, n, t) {
            t.r(n);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "HomePageHeaderCarousel_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CollectionType",
                    kind: "LinkedField",
                    name: "collection",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "overrideUrl",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HeaderCollectionItem_data"
                }],
                type: "HomePageHeaderCarouselType",
                abstractKey: null,
                hash: "0eb0dbf315e73ef340fd9d492ea45099"
            };
            n.default = r
        },
        81419: function(e, n, t) {
            t.r(n);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "HomePageHeader_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageHeaderCarouselType",
                    kind: "LinkedField",
                    name: "homePageHeaderCarousel",
                    plural: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "HomePageHeaderCarousel_data"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null,
                hash: "a5f7196dfc136feed90a95f493ce4cc3"
            };
            n.default = r
        },
        8194: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = [{
                        kind: "Literal",
                        name: "promotionType",
                        value: "HOMEPAGE"
                    }],
                    n = [{
                        kind: "Literal",
                        name: "featuredAssetType",
                        value: "HOMEPAGE"
                    }],
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "relayId",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "name",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logo",
                        storageKey: null
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "verificationStatus",
                        storageKey: null
                    },
                    c = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "isCategory",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "PromotionType",
                            kind: "LinkedField",
                            name: "promotions",
                            plural: !0,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "Promotions_promotions"
                            }],
                            storageKey: 'promotions(promotionType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: n,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "featuredAsset",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "Featured_data"
                            }],
                            storageKey: 'featuredAsset(featuredAssetType:"HOMEPAGE")'
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "MagellanLayout_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "HomePageQuery",
                        selections: [{
                            alias: null,
                            args: e,
                            concreteType: "PromotionType",
                            kind: "LinkedField",
                            name: "promotions",
                            plural: !0,
                            selections: [t, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "saleStartTime",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardImg",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardLink",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoHeader",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoSubtitle",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "cardColor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardVideo",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "promoCardVideoMimeType",
                                storageKey: null
                            }, r],
                            storageKey: 'promotions(promotionType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: n,
                            concreteType: "AssetType",
                            kind: "LinkedField",
                            name: "featuredAsset",
                            plural: !1,
                            selections: [a, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "imagePreviewUrl",
                                storageKey: null
                            }, i, {
                                alias: null,
                                args: null,
                                concreteType: "AccountType",
                                kind: "LinkedField",
                                name: "creator",
                                plural: !1,
                                selections: [i, {
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
                                    }, r],
                                    storageKey: null
                                }, r],
                                storageKey: null
                            }, {
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
                                }, r],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "tokenId",
                                storageKey: null
                            }, {
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
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "animationUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "displayImageUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isDelisted",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "backgroundColor",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "DisplayDataType",
                                    kind: "LinkedField",
                                    name: "displayData",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "cardDisplayStyle",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, r],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "decimals",
                                storageKey: null
                            }, t, r],
                            storageKey: 'featuredAsset(featuredAssetType:"HOMEPAGE")'
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomePageFeaturedSectionCollectionType",
                            kind: "LinkedField",
                            name: "homePageFeaturedSectionCollections",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "HomePageFeaturedSectionType",
                                kind: "LinkedField",
                                name: "section",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "title",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "titleUrl",
                                    storageKey: null
                                }, t, r],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [l, o, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "banner",
                                    storageKey: null
                                }, r, a, s, c],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "collectionSubtitle",
                                storageKey: null
                            }, r],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "HomePageHeaderCarouselType",
                            kind: "LinkedField",
                            name: "homePageHeaderCarousel",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "collection",
                                plural: !1,
                                selections: [a, o, r, l, c, s, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "unit",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "AssetType",
                                        kind: "LinkedField",
                                        name: "asset",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }, r],
                                        storageKey: null
                                    }, r],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "overrideUrl",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "shortDescription",
                                storageKey: null
                            }, r],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ee9860637796db2ca34aebbd86ec23b6",
                        id: null,
                        metadata: {},
                        name: "HomePageQuery",
                        operationKind: "query",
                        text: "query HomePageQuery {\n  promotions(promotionType: HOMEPAGE) {\n    ...Promotions_promotions\n    id\n  }\n  featuredAsset(featuredAssetType: HOMEPAGE) {\n    ...Featured_data\n    id\n  }\n  ...MagellanLayout_data\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset_2V84VL on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_2V84VL\n}\n\nfragment AssetMediaEditions_asset_2V84VL on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_2V84VL\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment Featured_data on AssetType {\n  name\n  imagePreviewUrl\n  imageUrl\n  creator {\n    imageUrl\n    user {\n      publicUsername\n      id\n    }\n    id\n  }\n  ...asset_url\n  ...AssetMedia_asset\n  ...itemEvents_data\n}\n\nfragment GlobalCollectionCard_data on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment HeaderCollectionItem_data on HomePageHeaderCarouselType {\n  collection {\n    slug\n    name\n    logo\n    ...collection_url\n    verificationStatus\n    statsV2 {\n      floorPrice {\n        unit\n      }\n    }\n    nativePaymentAsset {\n      asset {\n        symbol\n        id\n      }\n      id\n    }\n    id\n  }\n  shortDescription\n  overrideUrl\n}\n\nfragment HomePageFeaturedCollectionCard_data on HomePageFeaturedSectionCollectionType {\n  collection {\n    slug\n    logo\n    banner\n    name\n    verificationStatus\n    ...collection_url\n    ...GlobalCollectionCard_data\n    id\n  }\n  collectionSubtitle\n}\n\nfragment HomePageFeaturedCollections_data on HomePageFeaturedSectionCollectionType {\n  section {\n    title\n    titleUrl\n    relayId\n    id\n  }\n  collection {\n    slug\n    logo\n    banner\n    id\n  }\n  ...HomePageFeaturedCollectionCard_data\n}\n\nfragment HomePageHeaderCarousel_data on HomePageHeaderCarouselType {\n  collection {\n    name\n    logo\n    id\n  }\n  overrideUrl\n  ...HeaderCollectionItem_data\n}\n\nfragment HomePageHeader_data on Query {\n  homePageHeaderCarousel {\n    ...HomePageHeaderCarousel_data\n    id\n  }\n}\n\nfragment MagellanLayout_data on Query {\n  homePageFeaturedSectionCollections {\n    ...HomePageFeaturedCollections_data\n    id\n  }\n  ...HomePageHeader_data\n}\n\nfragment PromoCard_data on PromotionType {\n  relayId\n  promoCardImg\n  promoCardLink\n  promoHeader\n  promoSubtitle\n  cardColor\n  saleStartTime\n  promoCardVideo\n  promoCardVideoMimeType\n}\n\nfragment Promotions_promotions on PromotionType {\n  relayId\n  saleStartTime\n  ...PromoCard_data\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n"
                    }
                }
            }();
            r.hash = "a7d8007ab1f1af45e3b0f85d3d07b1a2", n.default = r
        },
        82160: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    n = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    t = {
                        kind: "Literal",
                        name: "first",
                        value: 10
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "imageUrl",
                        storageKey: null
                    },
                    a = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "symbol",
                        storageKey: null
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    l = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    o = [l],
                    s = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionTypeEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "createdDate",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "name",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "slug",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "logo",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isVerified",
                                storageKey: null
                            }, r, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isCategory",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PaymentAssetType",
                                kind: "LinkedField",
                                name: "nativePaymentAsset",
                                plural: !1,
                                selections: [{
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
                                }, a, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetType",
                                    kind: "LinkedField",
                                    name: "asset",
                                    plural: !1,
                                    selections: [r, i, a],
                                    storageKey: null
                                }, i],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionStatsV2Type",
                                kind: "LinkedField",
                                name: "statsV2",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "floorPrice",
                                    plural: !1,
                                    selections: [l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "eth",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "numOwners",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalSupply",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalSales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "sevenDaySales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "sevenDayChange",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "sevenDayVolume",
                                    plural: !1,
                                    selections: o,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "oneDaySales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "oneDayChange",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "oneDayVolume",
                                    plural: !1,
                                    selections: o,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "thirtyDaySales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "thirtyDayChange",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "thirtyDayVolume",
                                    plural: !1,
                                    selections: o,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "totalVolume",
                                    plural: !1,
                                    selections: o,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalListed",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, i],
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "HomePageStatsTablesLazyQuery",
                        selections: [{
                            args: [n],
                            kind: "FragmentSpread",
                            name: "HomePageStatsTables_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "HomePageStatsTablesLazyQuery",
                        selections: [{
                            alias: null,
                            args: [t, n],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
                            plural: !1,
                            selections: s,
                            storageKey: null
                        }, {
                            alias: null,
                            args: [t, {
                                kind: "Literal",
                                name: "topCollectionLimit",
                                value: 500
                            }],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "trendingCollections",
                            plural: !1,
                            selections: s,
                            storageKey: "trendingCollections(first:10,topCollectionLimit:500)"
                        }]
                    },
                    params: {
                        cacheID: "36dde5fa18555842e88edf154508d1cc",
                        id: null,
                        metadata: {},
                        name: "HomePageStatsTablesLazyQuery",
                        operationKind: "query",
                        text: "query HomePageStatsTablesLazyQuery(\n  $sortBy: CollectionSort\n) {\n  ...HomePageStatsTables_data_34jhwD\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment HomePageStatsTables_data_34jhwD on Query {\n  collections(first: 10, sortBy: $sortBy) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsV2HomepageCollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n          totalVolume {\n            unit\n          }\n          totalListed\n        }\n        id\n      }\n    }\n  }\n  trendingCollections(first: 10, topCollectionLimit: 500) {\n    edges {\n      node {\n        createdDate\n        name\n        slug\n        logo\n        isVerified\n        ...StatsV2HomepageCollectionCell_collection\n        ...collection_url\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          ...StatsV2TablePrice_logo\n          asset {\n            symbol\n            id\n          }\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n            eth\n          }\n          numOwners\n          totalSupply\n          totalSales\n          sevenDaySales\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          oneDaySales\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          thirtyDaySales\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n          totalVolume {\n            unit\n          }\n          totalListed\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment StatsV2HomepageCollectionCell_collection on CollectionType {\n  name\n  imageUrl\n  isVerified\n}\n\nfragment StatsV2TablePrice_logo on PaymentAssetType {\n  symbol\n  ...PaymentAssetLogo_data\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            r.hash = "3eb3769899bab0208690cf6e4198b734", n.default = r
        },
        97299: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = {
                        kind: "Literal",
                        name: "first",
                        value: 10
                    },
                    n = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "slug",
                        storageKey: null
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    },
                    r = [t],
                    a = [{
                        alias: null,
                        args: null,
                        concreteType: "CollectionTypeEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionType",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "createdDate",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "name",
                                storageKey: null
                            }, n, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "logo",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "isVerified",
                                storageKey: null
                            }, {
                                args: null,
                                kind: "FragmentSpread",
                                name: "StatsV2HomepageCollectionCell_collection"
                            }, {
                                kind: "InlineDataFragmentSpread",
                                name: "collection_url",
                                selections: [n, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isCategory",
                                    storageKey: null
                                }],
                                args: null,
                                argumentDefinitions: []
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PaymentAssetType",
                                kind: "LinkedField",
                                name: "nativePaymentAsset",
                                plural: !1,
                                selections: [{
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "CollectionDataTablePrice_logo"
                                }, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "StatsV2TablePrice_logo"
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetType",
                                    kind: "LinkedField",
                                    name: "asset",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "symbol",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "CollectionStatsV2Type",
                                kind: "LinkedField",
                                name: "statsV2",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "floorPrice",
                                    plural: !1,
                                    selections: [t, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "eth",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "numOwners",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalSupply",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalSales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "sevenDaySales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "sevenDayChange",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "sevenDayVolume",
                                    plural: !1,
                                    selections: r,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "oneDaySales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "oneDayChange",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "oneDayVolume",
                                    plural: !1,
                                    selections: r,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "thirtyDaySales",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "thirtyDayChange",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "thirtyDayVolume",
                                    plural: !1,
                                    selections: r,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PriceType",
                                    kind: "LinkedField",
                                    name: "totalVolume",
                                    plural: !1,
                                    selections: r,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "totalListed",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }];
                return {
                    argumentDefinitions: [{
                        defaultValue: "ONE_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "HomePageStatsTables_data",
                    selections: [{
                        alias: null,
                        args: [e, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: a,
                        storageKey: null
                    }, {
                        alias: null,
                        args: [e, {
                            kind: "Literal",
                            name: "topCollectionLimit",
                            value: 500
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "trendingCollections",
                        plural: !1,
                        selections: a,
                        storageKey: "trendingCollections(first:10,topCollectionLimit:500)"
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            r.hash = "f4df92273874ef6fcb2f3ff4484ea941", n.default = r
        },
        97276: function(e, n, t) {
            t.r(n);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MagellanLayout_data",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "HomePageFeaturedSectionCollectionType",
                    kind: "LinkedField",
                    name: "homePageFeaturedSectionCollections",
                    plural: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "HomePageFeaturedCollections_data"
                    }],
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "HomePageHeader_data"
                }],
                type: "Query",
                abstractKey: null,
                hash: "be46744a231e79fe4a703b0bfc69c0c0"
            };
            n.default = r
        },
        85952: function(e, n, t) {
            t.r(n);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: {
                    plural: !0
                },
                name: "Promotions_promotions",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "relayId",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "saleStartTime",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "PromoCard_data"
                }],
                type: "PromotionType",
                abstractKey: null,
                hash: "fb8978d8e2d952e76fef07db53c0e550"
            };
            n.default = r
        },
        4141: function(e, n, t) {
            t.r(n);
            var r = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "StatsV2HomepageCollectionCell_collection",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "imageUrl",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "isVerified",
                    storageKey: null
                }],
                type: "CollectionType",
                abstractKey: null,
                hash: "775009776fca1f02ab2d435d4f96a686"
            };
            n.default = r
        },
        24001: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    n = {
                        kind: "Variable",
                        name: "sortBy",
                        variableName: "sortBy"
                    },
                    t = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    },
                    r = [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "unit",
                        storageKey: null
                    }];
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "TopCollectionsLazyQuery",
                        selections: [{
                            args: [n],
                            kind: "FragmentSpread",
                            name: "TopCollections_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "TopCollectionsLazyQuery",
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "first",
                                value: 15
                            }, {
                                kind: "Literal",
                                name: "includeHidden",
                                value: !0
                            }, {
                                kind: "Literal",
                                name: "sortAscending",
                                value: !1
                            }, n],
                            concreteType: "CollectionTypeConnection",
                            kind: "LinkedField",
                            name: "collections",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionTypeEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionType",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }, t, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "logo",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "createdDate",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isVerified",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PaymentAssetType",
                                        kind: "LinkedField",
                                        name: "nativePaymentAsset",
                                        plural: !1,
                                        selections: [{
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
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "AssetType",
                                            kind: "LinkedField",
                                            name: "asset",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "imageUrl",
                                                storageKey: null
                                            }, t],
                                            storageKey: null
                                        }, t],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "CollectionStatsV2Type",
                                        kind: "LinkedField",
                                        name: "statsV2",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "floorPrice",
                                            plural: !1,
                                            selections: r,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "oneDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "oneDayVolume",
                                            plural: !1,
                                            selections: r,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "sevenDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "sevenDayVolume",
                                            plural: !1,
                                            selections: r,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "thirtyDayChange",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PriceType",
                                            kind: "LinkedField",
                                            name: "thirtyDayVolume",
                                            plural: !1,
                                            selections: r,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ddee271baa03e0a8a55edc4ab2fdd9f8",
                        id: null,
                        metadata: {},
                        name: "TopCollectionsLazyQuery",
                        operationKind: "query",
                        text: "query TopCollectionsLazyQuery(\n  $sortBy: CollectionSort\n) {\n  ...TopCollections_data_34jhwD\n}\n\nfragment CollectionDataTablePrice_logo on PaymentAssetType {\n  ...PaymentAssetLogo_data\n}\n\nfragment PaymentAssetLogo_data on PaymentAssetType {\n  chain {\n    identifier\n  }\n  symbol\n  asset {\n    imageUrl\n    id\n  }\n}\n\nfragment TopCollections_data_34jhwD on Query {\n  collections(first: 15, sortBy: $sortBy, sortAscending: false, includeHidden: true) {\n    edges {\n      node {\n        ...collection_url\n        id\n        name\n        logo\n        createdDate\n        isVerified\n        nativePaymentAsset {\n          ...CollectionDataTablePrice_logo\n          id\n        }\n        statsV2 {\n          floorPrice {\n            unit\n          }\n          oneDayChange\n          oneDayVolume {\n            unit\n          }\n          sevenDayChange\n          sevenDayVolume {\n            unit\n          }\n          thirtyDayChange\n          thirtyDayVolume {\n            unit\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n"
                    }
                }
            }();
            r.hash = "54074de55447e194b4a0d497071360dc", n.default = r
        },
        84173: function(e, n, t) {
            t.r(n);
            var r = function() {
                var e = [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unit",
                    storageKey: null
                }];
                return {
                    argumentDefinitions: [{
                        defaultValue: 15,
                        kind: "LocalArgument",
                        name: "count"
                    }, {
                        defaultValue: !0,
                        kind: "LocalArgument",
                        name: "includeHidden"
                    }, {
                        defaultValue: !1,
                        kind: "LocalArgument",
                        name: "sortAscending"
                    }, {
                        defaultValue: "SEVEN_DAY_VOLUME",
                        kind: "LocalArgument",
                        name: "sortBy"
                    }],
                    kind: "Fragment",
                    metadata: null,
                    name: "TopCollections_data",
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "first",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "includeHidden",
                            variableName: "includeHidden"
                        }, {
                            kind: "Variable",
                            name: "sortAscending",
                            variableName: "sortAscending"
                        }, {
                            kind: "Variable",
                            name: "sortBy",
                            variableName: "sortBy"
                        }],
                        concreteType: "CollectionTypeConnection",
                        kind: "LinkedField",
                        name: "collections",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CollectionTypeEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "CollectionType",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    kind: "InlineDataFragmentSpread",
                                    name: "collection_url",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "slug",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "isCategory",
                                        storageKey: null
                                    }],
                                    args: null,
                                    argumentDefinitions: []
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "id",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "logo",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "createdDate",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "isVerified",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PaymentAssetType",
                                    kind: "LinkedField",
                                    name: "nativePaymentAsset",
                                    plural: !1,
                                    selections: [{
                                        args: null,
                                        kind: "FragmentSpread",
                                        name: "CollectionDataTablePrice_logo"
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "CollectionStatsV2Type",
                                    kind: "LinkedField",
                                    name: "statsV2",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "floorPrice",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "oneDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "oneDayVolume",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "sevenDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "sevenDayVolume",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "thirtyDayChange",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "PriceType",
                                        kind: "LinkedField",
                                        name: "thirtyDayVolume",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "Query",
                    abstractKey: null
                }
            }();
            r.hash = "d4050d0ef407bab76365f9b05e3f830c", n.default = r
        }
    }
]);
//# sourceMappingURL=76158-8a3eafb716eb47af.js.map