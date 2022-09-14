"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61793], {
        34804: function(e, n, t) {
            t.d(n, {
                T: function() {
                    return Pe
                }
            });
            var a = t(23842),
                i = t(85034),
                r = t(70169),
                l = t(52050),
                s = t(19989),
                o = t(35230),
                c = t.n(o),
                u = t(24246),
                d = t(27378),
                m = t(71636),
                y = t.n(m),
                p = t(4402),
                f = t(47892),
                g = t(74016),
                h = t(53585),
                x = t(16611),
                k = t(9476),
                v = t(28828),
                b = t(88747),
                j = (t(59809), t(63964)),
                H = t(98784),
                T = t(48257),
                S = t(87667),
                P = t(77795),
                F = t(56656),
                w = t(97004),
                A = t(96150),
                _ = t(81399),
                K = t(72363),
                C = t(2385),
                q = t(39550),
                Z = t(76190),
                D = t(6300);

            function L() {
                var e = (0, s.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);
                return L = function() {
                    return e
                }, e
            }

            function V() {
                var e = (0, s.Z)(["\n  background: ", ";\n  border-top: 1px solid ", ";\n  bottom: 0;\n  margin-top: auto;\n  padding: 16px;\n  position: sticky;\n  width: 100%;\n  z-index: 1;\n"]);
                return V = function() {
                    return e
                }, e
            }
            var z = ["7", "14", "30", "60", "90", "365", "All time"],
                E = function(e) {
                    var n = e.dayDurationFilter,
                        t = e.style,
                        a = e.onChange,
                        i = e.className,
                        r = (0, D.q)("components"),
                        l = (0, d.useState)(!1),
                        s = l[0],
                        o = l[1],
                        c = (0, q.FN)().visibleAnnouncementBannerHeight,
                        m = function(e, n) {
                            return {
                                label: "All time" === e ? r("assets.priceHistory.allTime.label", "All time") : "365" === e ? r("assets.priceHistory.lastYear.label", "Last year") : n ? r("assets.priceHistory.lastDays.mobileLabel", "{{quantity}} days", {
                                    quantity: e
                                }, {
                                    forceString: !0
                                }) : r("assets.priceHistory.lastDays.label", "Last {{quantity}} days", {
                                    quantity: e
                                }, {
                                    forceString: !0
                                }),
                                value: "".concat(e)
                            }
                        },
                        y = z.map((function(e) {
                            return m(e, !1)
                        })),
                        p = (0, u.jsx)(C.P, {
                            className: i,
                            clearable: !1,
                            options: y,
                            readOnly: !0,
                            style: t,
                            value: n,
                            onSelect: function(e) {
                                return (null === e || void 0 === e ? void 0 : e.value) && a(e.value)
                            }
                        });
                    return (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(K.pU, {
                            greaterThanOrEqual: "lg",
                            children: p
                        }), (0, u.jsx)(K.pU, {
                            lessThan: "lg",
                            children: function(e, t) {
                                return t ? (0, u.jsxs)(h.g, {
                                    className: e,
                                    width: "100%",
                                    children: [(0, u.jsx)(Z.t, {
                                        startEnhancer: (0, u.jsx)(T.J, {
                                            marginRight: "8px",
                                            size: 24,
                                            value: "history"
                                        }),
                                        width: "100%",
                                        onClick: function() {
                                            o(!0)
                                        },
                                        children: m(n, !0).label
                                    }), (0, u.jsxs)(N, {
                                        anchorSide: "bottom",
                                        bannerHeight: c,
                                        "data-testid": "phoenix-price-history-dropdown-drawer",
                                        isOpen: s,
                                        zIndex: P.k.NAVBAR,
                                        onClickAway: H.noop,
                                        children: [(0, u.jsxs)(A.k, {
                                            flexDirection: "column",
                                            padding: "16px",
                                            children: [(0, u.jsxs)(A.k, {
                                                alignItems: "center",
                                                as: "header",
                                                height: "".concat(v.Wb, "px"),
                                                justifyContent: "center",
                                                marginBottom: "16px",
                                                position: "relative",
                                                children: [(0, u.jsx)(x.WX, {
                                                    as: "span",
                                                    variant: "h4",
                                                    children: r("assets.priceHistory.timeFrame.title", "Time frame")
                                                }), (0, u.jsx)(A.k, {
                                                    position: "absolute",
                                                    right: "0",
                                                    children: (0, u.jsx)(_.h, {
                                                        onClick: function() {
                                                            return o(!1)
                                                        },
                                                        children: (0, u.jsx)(T.J, {
                                                            size: 24,
                                                            value: "close"
                                                        })
                                                    })
                                                })]
                                            }), y.map((function(e) {
                                                var t = e.label,
                                                    i = e.value;
                                                return (0, u.jsx)(S.V, {
                                                    inputProps: {
                                                        value: i
                                                    },
                                                    isSelected: i === n,
                                                    label: t,
                                                    name: "price-history-dropdown",
                                                    type: "radio",
                                                    onChange: function() {
                                                        a(i)
                                                    }
                                                }, i)
                                            }))]
                                        }), (0, u.jsx)(I, {
                                            children: (0, u.jsx)(F.zx, {
                                                justifyContent: "center",
                                                width: "100%",
                                                onClick: function() {
                                                    return o(!1)
                                                },
                                                children: r("assets.priceHistory.doneCTA", "Done")
                                            })
                                        })]
                                    })]
                                }) : null
                            }
                        })]
                    })
                },
                N = (0, f.ZP)(w.dy).withConfig({
                    componentId: "sc-f25652b-0"
                })(L()),
                I = (0, f.ZP)(A.k).withConfig({
                    componentId: "sc-f25652b-1"
                })(V(), (function(e) {
                    return e.theme.colors.background
                }), (function(e) {
                    return e.theme.colors.border
                })),
                M = t(3204),
                R = t(56583),
                O = t(27476),
                W = t(96008),
                B = t(38616),
                $ = t(90782),
                Q = t(32529),
                G = t(26299),
                U = t(76575),
                Y = t(54446),
                X = t(20225),
                J = t(97516),
                ee = t(11652),
                ne = t(90761),
                te = t(70884),
                ae = t(87821),
                ie = t(17813);

            function re() {
                var e = (0, s.Z)(["\n  background-color: ", ";\n  border-radius: ", ";\n  text-align: center;\n  padding: 8px;\n  min-width: 160px;\n"]);
                return re = function() {
                    return e
                }, e
            }

            function le() {
                var e = (0, s.Z)(["\n  margin: 0;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  justify-content: center;\n  user-select: none;\n\n  &.PriceHistory--empty {\n    height: initial;\n    margin-bottom: 16px;\n  }\n\n  .PriceHistory--no-data-img {\n    ", "\n  }\n\n  .PriceHistory--no-data-text {\n    font-size: 16px;\n    margin-top: 4px;\n  }\n\n  .PriceHistory--chart {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n    margin: 12px 0 8px;\n\n    .recharts-cartesian-grid-horizontal line:last-child {\n      display: none;\n    }\n  }\n"]);
                return le = function() {
                    return e
                }, e
            }
            var se = [.1, .2, .5, 1, 2, 5, 10],
                oe = 86400,
                ce = function(e) {
                    return y().unix(e + oe).format("MMM D, YYYY")
                },
                ue = (0, R.Z)((function(e) {
                    return e.results.map((function(e) {
                        var n = e.bucketStart,
                            t = e.bucketEnd,
                            a = e.quantity,
                            i = e.volume,
                            r = i.asset;
                        return {
                            time: (0, J.pY)(n).startOf("day").unix(),
                            timeEnd: (0, J.pY)(t).startOf("day").unix(),
                            price: (0, ee.bn)(i.quantity, i.asset.decimals).div((0, ee.bn)(a, 0)),
                            volume: (0, ee.bn)(i.quantity, r.decimals || ee.oI),
                            quantity: (0, ee.bn)(a)
                        }
                    })).filter(Boolean)
                })),
                de = (0, R.Z)((function(e, n) {
                    var t, a;
                    if (n < 2) throw new Error("Tick count must be at least 2");
                    var i = e.map((function(e) {
                        return e.time
                    }));
                    if (0 === i.length) return [];
                    if (1 === i.length) return [i[0]];
                    var r = y().unix((t = Math).min.apply(t, (0, M.Z)(i))),
                        l = y().unix((a = Math).max.apply(a, (0, M.Z)(i))),
                        s = l.diff(r, "day"),
                        o = Math.min(n, s + 1),
                        c = Math.ceil(s / (o - 1));
                    return Array(o).fill(void 0).map((function(e, n) {
                        return l.clone().subtract((o - n - 1) * c, "day").unix()
                    })).filter((function(e) {
                        return e >= r.unix()
                    }))
                })),
                me = (0, R.Z)((function(e, n) {
                    var t, a;
                    if (n < 2) throw new Error("Tick count must be at least 2");
                    if (0 === e.length) return [];
                    var i = (t = ee.O$).min.apply(t, (0, M.Z)(e)),
                        r = (a = ee.O$).max.apply(a, (0, M.Z)(e)),
                        l = i.isEqualTo(r) ? (0, ee.bn)(0) : i,
                        s = i.isEqualTo(r) ? r.times(2) : r,
                        o = s.minus(l),
                        c = (0, ee.bn)(10).exponentiatedBy(Math.floor(Math.log10(+o > 0 ? +o : 1))),
                        u = se.map((function(e) {
                            return {
                                interval: e,
                                min: +l.div(c).div(e).integerValue(ee.O$.ROUND_FLOOR),
                                max: +s.div(c).div(e).integerValue(ee.O$.ROUND_CEIL)
                            }
                        })),
                        d = u.find((function(e) {
                            var t = e.min,
                                a = e.max;
                            return n - 1 >= a - t
                        })) || u[u.length - 1],
                        m = d.interval,
                        y = d.min,
                        p = d.max,
                        f = Math.min(n, Math.ceil(p - y) + 1);
                    return Array(f).fill(void 0).map((function(e, n) {
                        return +c.times(m.toString()).times((y + n).toString())
                    }))
                })),
                ye = function(e) {
                    var n, a = e.data,
                        i = e.xMaxTickCount,
                        r = e.yMaxTickCount,
                        l = e.height,
                        s = (0, D.q)("components"),
                        o = (0, X.Fg)().theme,
                        c = (0, d.useRef)(null),
                        m = (0, p.useFragment)(t(75856), a),
                        f = ue(m);
                    if (0 === f.length) return (0, u.jsxs)(ge, {
                        className: "PriceHistory--empty",
                        children: [(0, u.jsx)(ie.Z, {
                            alt: "",
                            className: "PriceHistory--no-data-img",
                            height: 100,
                            url: te.fU
                        }), (0, u.jsx)("div", {
                            className: "PriceHistory--no-data-text",
                            children: s("assets.priceHistory.emptyState.description", "No item activity yet")
                        })]
                    });
                    var g, h = de(f, i),
                        x = me(f.map((function(e) {
                            return e.price
                        })), r),
                        k = null !== (g = null === (n = m.results[0]) || void 0 === n ? void 0 : n.volume.asset.symbol) && void 0 !== g ? g : void 0,
                        v = ae.ZP[o].colors,
                        b = v.border,
                        j = v.text.body;
                    return (0, u.jsx)(ge, {
                        "aria-description": s("assets.priceHistory.chart.description", "Line graph displaying the average price, volume, and number of sales of the item per day over a period of time."),
                        "aria-label": s("assets.priceHistory.chart.label", "Price history graph"),
                        "data-testid": "price-history-graph",
                        ref: c,
                        style: {
                            height: l + "px"
                        },
                        children: (0, u.jsx)(O.h, {
                            className: "PriceHistory--chart",
                            height: l,
                            width: "100%",
                            children: (0, u.jsxs)(W.c, {
                                data: f.map((function(e) {
                                    return {
                                        time: e.time,
                                        timeEnd: e.timeEnd,
                                        price: +e.price,
                                        volume: +e.volume,
                                        quantity: +e.quantity
                                    }
                                })),
                                margin: {
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    top: 5
                                },
                                children: [(0, u.jsx)(B.q, {
                                    stroke: b,
                                    vertical: !1
                                }), (0, u.jsx)($.u, {
                                    content: pe
                                }), (0, u.jsx)(Q.K, {
                                    dataKey: "time",
                                    domain: [f[0].time, f[f.length - 1].time],
                                    interval: 0,
                                    stroke: b,
                                    tick: {
                                        fill: j,
                                        fillOpacity: .6
                                    },
                                    tickFormatter: function(e) {
                                        return y().unix(e + oe).format("M/D")
                                    },
                                    tickMargin: 6,
                                    tickSize: 10,
                                    ticks: h,
                                    type: "number"
                                }), (0, u.jsx)(G.B, {
                                    dataKey: "price",
                                    domain: [x[0], x[x.length - 1]],
                                    interval: 0,
                                    padding: {
                                        bottom: 0,
                                        top: 10
                                    },
                                    stroke: b,
                                    tick: {
                                        fill: j,
                                        fillOpacity: .6
                                    },
                                    tickMargin: 18,
                                    tickSize: 10,
                                    ticks: x,
                                    type: "number",
                                    width: 53,
                                    yAxisId: "left"
                                }), (0, u.jsx)(G.B, {
                                    allowDecimals: !1,
                                    axisLine: !1,
                                    dataKey: "volume",
                                    interval: 0,
                                    orientation: "right",
                                    padding: {
                                        bottom: 0,
                                        top: 40
                                    },
                                    tick: !1,
                                    tickCount: 3,
                                    tickSize: 10,
                                    type: "number",
                                    width: 15,
                                    yAxisId: "right"
                                }), (0, u.jsx)(U.$, {
                                    barSize: 5,
                                    dataKey: "volume",
                                    fill: "#bfdcf6",
                                    unit: k,
                                    yAxisId: "right"
                                }), (0, u.jsx)(Y.x, {
                                    activeDot: {
                                        fill: ae.o7.primary,
                                        stroke: ae.o7.primary,
                                        strokeOpacity: .3,
                                        strokeWidth: 5
                                    },
                                    dataKey: "price",
                                    dot: !1,
                                    isAnimationActive: !1,
                                    stroke: ae.o7.primary,
                                    strokeWidth: 3,
                                    type: "monotone",
                                    unit: k,
                                    yAxisId: "left"
                                })]
                            })
                        })
                    })
                },
                pe = function(e) {
                    var n = e.active,
                        t = e.payload,
                        a = (0, D.q)("components");
                    if (!n || !t || !t.length) return null;
                    var i = t[0],
                        r = i.unit,
                        l = i.payload,
                        s = l.time,
                        o = l.timeEnd,
                        c = l.price,
                        d = l.volume,
                        m = l.quantity;
                    return (0, u.jsxs)(fe, {
                        children: [(0, u.jsx)(x.WX, {
                            color: "white",
                            margin: "0",
                            variant: "small",
                            children: o - s <= oe ? ce(s) : a("assets.priceHistory.weekOfDate", "Week of {{date}}", {
                                date: ce(s)
                            })
                        }), (0, u.jsx)(x.WX, {
                            margin: "0",
                            variant: "small",
                            children: a("assets.priceHistory.avgPrice.label", "Avg. price: \u039e{{amount}}", {
                                amount: (0, ee.jf)(c, r)
                            })
                        }), (0, u.jsx)(x.WX, {
                            margin: "0",
                            variant: "small",
                            children: a("assets.priceHistory.volume.label", "Volume: \u039e{{amount}}", {
                                amount: (0, ee.SG)(d)
                            })
                        }), (0, u.jsx)(x.WX, {
                            margin: "0",
                            variant: "small",
                            children: a("assets.priceHistory.numSales.label", "Num. sales: {{quantity}}", {
                                quantity: (0, ee.jf)(m)
                            })
                        })]
                    })
                },
                fe = (0, f.ZP)(h.g).withConfig({
                    componentId: "sc-5460715e-0"
                })(re(), (function(e) {
                    return e.theme.colors.charcoal
                }), (function(e) {
                    return e.theme.borderRadius.default
                })),
                ge = f.ZP.figure.withConfig({
                    componentId: "sc-5460715e-1"
                })(le(), (0, ne.Um)({
                    variants: {
                        dark: {
                            opacity: .5
                        }
                    }
                }), (function(e) {
                    return e.theme.colors.withOpacity.oil.light
                })),
                he = t(60034),
                xe = t(39738),
                ke = function(e) {
                    var n = e.data,
                        a = e.dayDurationFilter,
                        i = e.hideAllTimeVolume,
                        r = (0, D.q)("components"),
                        l = (0, p.useFragment)(t(82623), n),
                        s = (0, xe.VS)(l.results, (function(e) {
                            var n = e.volume;
                            return n.quantity ? [(0, ee.bn)(n.quantity, n.asset.decimals)] : []
                        })),
                        o = l.results.map((function(e) {
                            var n = e.quantity;
                            return (0, ee.bn)(n, 0)
                        }));
                    if (!o.length) return null;
                    var c = o.reduce((function(e, n) {
                            return e.plus(n)
                        })),
                        d = s.reduce((function(e, n) {
                            return e.plus(n)
                        })),
                        m = d.div(c);
                    return (0, u.jsx)(h.g, {
                        margin: "4px 0",
                        children: (0, u.jsxs)(A.k, {
                            marginRight: "10px",
                            children: [(0, u.jsxs)(A.k, {
                                flexDirection: "column",
                                padding: {
                                    _: "4px 10px 4px 0",
                                    sm: "4px 10px"
                                },
                                children: ["All time" === a ? r("assets.priceHistory.averagePrice.allTime.label", "All time avg. price") : "365" === a ? r("assets.priceHistory.averagePrice.yearLong.label", "Yearlong avg. price") : r("assets.priceHistory.averagePrice.days.label", "{{days}} day avg. price", {
                                    days: a
                                }), (0, u.jsx)(A.k, {
                                    alignItems: "center",
                                    children: (0, u.jsxs)(x.WX, {
                                        margin: 0,
                                        variant: "faux-link",
                                        children: ["\u039e", (0, ee.jf)(m, "ETH")]
                                    })
                                })]
                            }), i && "All time" === a ? null : (0, u.jsxs)(A.k, {
                                flexDirection: "column",
                                padding: "4px 10px",
                                children: ["All time" === a ? r("assets.priceHistory.volume.allTime.label", "All time volume") : "365" === a ? r("assets.priceHistory.volume.yearLong.label", "Yearlong volume") : r("assets.priceHistory.volume.days.label", "{{days}} day volume", {
                                    days: a
                                }), (0, u.jsx)(h.g, {
                                    children: (0, u.jsx)(A.k, {
                                        alignItems: "center",
                                        children: (0, u.jsxs)(x.WX, {
                                            margin: 0,
                                            variant: "faux-link",
                                            children: ["\u039e", (0, ee.jf)(d, "ETH")]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                };

            function ve() {
                var e = (0, s.Z)(["\n  height: ", "px;\n  padding-left: 24px;\n  padding-right: 20px;\n"]);
                return ve = function() {
                    return e
                }, e
            }

            function be() {
                var e = (0, s.Z)(["\n  .PriceHistory--interface {\n    display: flex;\n    flex-wrap: wrap;\n  }\n\n  .PriceHistory--loader {\n    align-items: center;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    padding-top: 16px;\n    width: 100%;\n  }\n"]);
                return be = function() {
                    return e
                }, e
            }
            var je = 200,
                He = function(e) {
                    var n = e.children,
                        i = e.data,
                        r = e.hideAllTimeVolume,
                        s = e.xMaxTickCount,
                        o = e.yMaxTickCount,
                        m = e.height,
                        f = void 0 === m ? je : m,
                        g = e.priceHistoryGraphKey,
                        j = e.initialDayDurationFilter,
                        H = e.variables,
                        T = H.archetype,
                        S = H.collection,
                        P = H.bucketSize,
                        F = (0, l.Z)((0, p.useRefetchableFragment)(t(15942), i), 2),
                        w = F[0],
                        A = F[1],
                        _ = (0, d.useState)(null !== j && void 0 !== j ? j : "All time"),
                        K = _[0],
                        C = _[1],
                        q = (0, d.useState)(!1),
                        Z = q[0],
                        D = q[1],
                        L = (0, b.Hp)();
                    return n && "function" === typeof n ? n({
                        Dropdown: function() {
                            return (0, u.jsx)(x.WX, {
                                as: "span",
                                variant: "bold",
                                width: "100%",
                                children: (0, u.jsx)(Fe, {
                                    dayDurationFilter: K,
                                    style: {
                                        height: v.Wb
                                    },
                                    onChange: function() {
                                        var e = (0, a.Z)(c().mark((function e(n) {
                                            var t, a;
                                            return c().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return D(!0), C(n), t = "All time" !== n ? y()().subtract(n, "days").format() : void 0, a = null !== P && void 0 !== P ? P : "All time" === n || +n > 90 ? "WEEK" : "DAY", e.next = 6, A({
                                                            archetype: T,
                                                            bucketSize: a,
                                                            collection: S,
                                                            cutoff: t
                                                        });
                                                    case 6:
                                                        D(!1);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                })
                            })
                        },
                        PriceActivity: function(e) {
                            var n = e.xMaxTickCount,
                                t = void 0 === n ? 12 : n;
                            return (0, u.jsxs)(we, {
                                children: [(0, u.jsx)("div", {
                                    className: "PriceHistory--interface",
                                    children: !Z && (null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)(ke, {
                                        data: w.tradeHistory,
                                        dayDurationFilter: K,
                                        hideAllTimeVolume: r
                                    }) : null
                                }), Z || !(null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)("div", {
                                    className: "PriceHistory--loader",
                                    children: (0, u.jsx)(k.aN, {
                                        size: "large"
                                    })
                                }) : L ? (0, u.jsx)(h.g, {
                                    paddingY: "16px",
                                    children: (0, u.jsx)(he.c, {
                                        data: w.tradeHistory,
                                        height: f || je,
                                        useUTC: !!S
                                    }, g)
                                }) : (0, u.jsx)("div", {
                                    className: "PriceHistory--graph",
                                    children: (0, u.jsx)(ye, {
                                        data: w.tradeHistory,
                                        height: f || je,
                                        xMaxTickCount: t,
                                        yMaxTickCount: o
                                    }, g)
                                })]
                            })
                        }
                    }) : (0, u.jsxs)(we, {
                        children: [(0, u.jsxs)("div", {
                            className: "PriceHistory--interface",
                            children: [(0, u.jsx)(h.g, {
                                marginY: "8px",
                                children: (0, u.jsx)(E, {
                                    dayDurationFilter: K,
                                    onChange: function() {
                                        var e = (0, a.Z)(c().mark((function e(n) {
                                            var t, a;
                                            return c().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return D(!0), C(n), t = "All time" !== n ? y()().subtract(n, "days").format() : void 0, a = null !== P && void 0 !== P ? P : "All time" === n || +n > 90 ? "WEEK" : "DAY", e.next = 6, A({
                                                            archetype: T,
                                                            bucketSize: a,
                                                            collection: S,
                                                            cutoff: t
                                                        });
                                                    case 6:
                                                        D(!1);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()
                                })
                            }), !Z && (null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)(ke, {
                                data: w.tradeHistory,
                                dayDurationFilter: K,
                                hideAllTimeVolume: r
                            }) : null]
                        }), Z || !(null === w || void 0 === w ? void 0 : w.tradeHistory) ? (0, u.jsx)("div", {
                            className: "PriceHistory--loader",
                            children: (0, u.jsx)(k.aN, {
                                size: "large"
                            })
                        }) : L ? (0, u.jsx)(h.g, {
                            paddingY: "16px",
                            children: (0, u.jsx)(he.c, {
                                data: w.tradeHistory,
                                height: f || je,
                                useUTC: !!S
                            }, g)
                        }) : (0, u.jsx)("div", {
                            className: "PriceHistory--graph",
                            children: (0, u.jsx)(ye, {
                                data: w.tradeHistory,
                                height: f || je,
                                xMaxTickCount: s,
                                yMaxTickCount: o
                            }, g)
                        })]
                    })
                },
                Te = t(39877),
                Se = (0, j.d)(He, Te),
                Pe = function(e) {
                    return (0, u.jsx)(g.s, {
                        fallback: (0, u.jsx)(He, (0, r.Z)((0, i.Z)({}, e), {
                            data: null
                        })),
                        hasSsrData: !0,
                        children: (0, u.jsx)(Se, (0, i.Z)({}, e))
                    })
                },
                Fe = (0, f.ZP)(E).withConfig({
                    componentId: "sc-f1a45f0e-0"
                })(ve(), v.Wb),
                we = f.ZP.div.withConfig({
                    componentId: "sc-f1a45f0e-1"
                })(be())
        },
        14678: function(e, n, t) {
            t.d(n, {
                H: function() {
                    return o
                }
            });
            var a = t(85034),
                i = t(70169),
                r = t(31373),
                l = t(24246),
                s = (t(27378), t(53585)),
                o = function(e) {
                    var n = e.size,
                        t = void 0 === n ? 16 : n,
                        o = e.variant,
                        c = void 0 === o ? "default" : o,
                        u = (0, r.Z)(e, ["size", "variant"]);
                    return (0, l.jsxs)(s.g, (0, i.Z)((0, a.Z)({
                        as: "svg",
                        fill: "none",
                        height: t,
                        style: {
                            verticalAlign: "text-bottom"
                        },
                        viewBox: "0 0 16 16",
                        width: t,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, u), {
                        children: [(0, l.jsx)("g", {
                            style: {
                                opacity: "default" === c ? 1 : 0,
                                transition: "all 0.25s ease-in",
                                transformOrigin: "center"
                            },
                            children: (0, l.jsx)("path", {
                                clipRule: "evenodd",
                                d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 8L8 4L12 8L8 12L4 8Z",
                                fill: "#8FC7FF",
                                fillRule: "evenodd"
                            })
                        }), (0, l.jsxs)("g", {
                            clipPath: "url(#clip0_788_750)",
                            style: {
                                opacity: "colored" === c ? 1 : 0,
                                transition: "all 0.25s ease-in"
                            },
                            children: [(0, l.jsx)("rect", {
                                fill: "url(#paint0_linear_788_750)",
                                height: "16",
                                rx: "8",
                                width: "16"
                            }), (0, l.jsx)("g", {
                                filter: "url(#filter0_d_788_750)",
                                children: (0, l.jsx)("path", {
                                    clipRule: "evenodd",
                                    d: "M8 3L3 8L8 13L13 8L8 3Z",
                                    fill: "white",
                                    fillRule: "evenodd",
                                    style: {
                                        transform: "colored" === c ? "scale(100%)" : "scale(66%)",
                                        transformOrigin: "center",
                                        transition: "all 0.25s ease-in"
                                    }
                                })
                            })]
                        }), (0, l.jsxs)("defs", {
                            children: [(0, l.jsxs)("filter", {
                                colorInterpolationFilters: "sRGB",
                                filterUnits: "userSpaceOnUse",
                                height: "26",
                                id: "filter0_d_788_750",
                                width: "26",
                                x: "-5",
                                y: "-5",
                                children: [(0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, l.jsx)("feColorMatrix", { in: "SourceAlpha",
                                    result: "hardAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                }), (0, l.jsx)("feOffset", {}), (0, l.jsx)("feGaussianBlur", {
                                    stdDeviation: "4"
                                }), (0, l.jsx)("feColorMatrix", {
                                    type: "matrix",
                                    values: "0 0 0 0 0.0156863 0 0 0 0 0.0666667 0 0 0 0 0.113725 0 0 0 0.75 0"
                                }), (0, l.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    mode: "normal",
                                    result: "effect1_dropShadow_788_750"
                                }), (0, l.jsx)("feBlend", { in: "SourceGraphic",
                                    in2: "effect1_dropShadow_788_750",
                                    mode: "normal",
                                    result: "shape"
                                })]
                            }), (0, l.jsxs)("linearGradient", {
                                gradientUnits: "userSpaceOnUse",
                                id: "paint0_linear_788_750",
                                x1: "0",
                                x2: "21.1484",
                                y1: "0",
                                y2: "3.53536",
                                children: [(0, l.jsx)("stop", {
                                    offset: "0.130208",
                                    stopColor: "#00D1FF"
                                }), (0, l.jsx)("stop", {
                                    offset: "0.84375",
                                    stopColor: "#FF00B8"
                                })]
                            }), (0, l.jsx)("clipPath", {
                                id: "clip0_788_750",
                                children: (0, l.jsx)("rect", {
                                    fill: "white",
                                    height: "16",
                                    rx: "8",
                                    width: "16"
                                })
                            })]
                        })]
                    }))
                }
        },
        57740: function(e, n, t) {
            t.d(n, {
                Q: function() {
                    return b
                },
                l: function() {
                    return v
                }
            });
            var a = t(52050),
                i = t(19989),
                r = t(24246),
                l = (t(27378), t(4402)),
                s = t(86192),
                o = t(47892),
                c = t(53585),
                u = t(96150),
                d = t(316),
                m = t(39339),
                y = t(6300),
                p = t(11652),
                f = (0, t(36332).V6)("hover rarity indicator"),
                g = t(14678),
                h = t(63479),
                x = t(76693);

            function k() {
                var e = (0, i.Z)([""]);
                return k = function() {
                    return e
                }, e
            }
            var v = function(e) {
                    var n = e.dataKey,
                        i = e.compact,
                        o = (0, y.q)("components"),
                        k = (0, l.useFragment)(t(26258), n),
                        v = (0, x.k)(k.rankPercentile),
                        j = (0, a.Z)((0, m.X)(), 2),
                        H = j[0],
                        T = j[1];
                    return (0, s.Z)((function() {
                        H && f(k)
                    }), [H]), (0, r.jsx)(h.W, {
                        content: (0, r.jsxs)(u.k, {
                            gridColumnGap: "12px",
                            justifyContent: void 0 !== v ? "space-between" : "center",
                            children: [void 0 !== v && (0, r.jsx)(d.xv.Body, {
                                size: "small",
                                weight: "semibold",
                                children: o("rarityIndicator.percentileBucket", "Top {{rarityPercentileBucket}}%", {
                                    rarityPercentileBucket: v
                                })
                            }), (0, r.jsxs)(b, {
                                size: "small",
                                children: [(0, p.jf)(k.rank), " / ", (0, p.jf)(k.totalSupply)]
                            })]
                        }),
                        children: (0, r.jsx)(c.g, {
                            children: (0, r.jsxs)(u.k, {
                                alignItems: "center",
                                height: "100%",
                                ref: T,
                                children: [(0, r.jsx)(g.H, {
                                    variant: H ? "colored" : "default"
                                }), (0, r.jsx)(d.xv.Body, {
                                    marginLeft: "4px",
                                    size: i ? "tiny" : "small",
                                    weight: "semibold",
                                    children: i ? (0, p.nZ)(k.rank) : (0, p.jf)(k.rank)
                                })]
                            })
                        })
                    })
                },
                b = (0, o.ZP)(d.xv.Body).withConfig({
                    componentId: "sc-b3a2e886-0"
                })(k());
            b.defaultProps = {
                weight: "semibold"
            }
        },
        63479: function(e, n, t) {
            t.d(n, {
                W: function() {
                    return T
                }
            });
            var a = t(85034),
                i = t(31373),
                r = t(19989),
                l = t(24246),
                s = (t(27378), t(76449)),
                o = t(74387),
                c = t(47892),
                u = t(48257),
                d = t(1569),
                m = t(81480),
                y = t(33181),
                p = t(53585),
                f = t(96150),
                g = t(72363),
                h = t(316),
                x = t(65175),
                k = t(6300),
                v = t(90761);

            function b() {
                var e = (0, r.Z)(["\n  &.tippy-box {\n    ", "\n  }\n\n  .tippy-arrow {\n    ", "\n  }\n"]);
                return b = function() {
                    return e
                }, e
            }

            function j() {
                var e = (0, r.Z)(["\n  left: 0;\n  position: absolute;\n  right: 0;\n\n  ", "\n"]);
                return j = function() {
                    return e
                }, e
            }

            function H() {
                var e = (0, r.Z)(["\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 500;\n"]);
                return H = function() {
                    return e
                }, e
            }
            var T = function(e) {
                    var n = e.content,
                        t = (0, i.Z)(e, ["content"]),
                        r = (0, k.q)("components"),
                        s = (0, o.Z)((0, m._4)(g.AV.xl)),
                        c = (0, o.Z)((0, m.ip)(g.AV.xxl));
                    return (0, l.jsx)(S, (0, a.Z)({
                        appendTo: y.W6 ? void 0 : document.body,
                        content: (0, l.jsxs)(p.g, {
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            children: [n, (0, l.jsx)(f.k, {
                                alignItems: "center",
                                marginBottom: "6px",
                                marginTop: "10px",
                                children: (0, l.jsx)(P, {})
                            }), (0, l.jsx)(d.r, {
                                href: "https://support.opensea.io/hc/en-us/articles/7351055986323",
                                children: (0, l.jsxs)(F, {
                                    children: [r("rarityTooltip.rankedBy", "Ranked by OpenRarity"), (0, l.jsx)(u.J, {
                                        marginLeft: "-2px",
                                        marginRight: "-5px",
                                        size: 14,
                                        style: {
                                            verticalAlign: "text-bottom"
                                        },
                                        value: "chevron_right"
                                    })]
                                })
                            })]
                        }),
                        contentPadding: "14px 12px 8px",
                        interactive: !0,
                        popperOptions: {
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    padding: s ? 8 : c ? 56 : 24
                                }
                            }]
                        }
                    }, t))
                },
                S = (0, c.ZP)(x.u).withConfig({
                    componentId: "sc-67f1f12e-0"
                })(b(), (function(e) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ink
                            },
                            light: {
                                backgroundColor: e.theme.colors.white,
                                boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.15)"
                            }
                        }
                    })
                }), (function(e) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                backgroundColor: e.theme.colors.ink,
                                color: e.theme.colors.ink
                            },
                            light: {
                                backgroundColor: e.theme.colors.white,
                                color: e.theme.colors.white
                            }
                        }
                    })
                })),
                P = (0, c.ZP)(p.g).withConfig({
                    componentId: "sc-67f1f12e-1"
                })(j(), (function(e) {
                    return (0, v.Um)({
                        variants: {
                            dark: {
                                borderTop: "1px solid ".concat((0, s.DZ)(.8, e.theme.colors.darkGray))
                            },
                            light: {
                                borderTop: "1px solid ".concat(e.theme.colors.fog)
                            }
                        }
                    })
                })),
                F = (0, c.ZP)(h.xv.Body).attrs({
                    color: "text.subtle",
                    size: "tiny"
                }).withConfig({
                    componentId: "sc-67f1f12e-2"
                })(H())
        },
        29095: function(e, n, t) {
            t.d(n, {
                Q8: function() {
                    return l.Q
                },
                H7: function() {
                    return r.H
                },
                k6: function() {
                    return s.k
                },
                $1: function() {
                    return i
                }
            });
            var a = t(3443),
                i = function(e) {
                    var n = e.collectionSlug,
                        t = (0, a.c)("enable_rarity"),
                        i = t.enabled,
                        r = t.payload,
                        l = t.name;
                    if (!i) return {
                        isRarityDisplayEnabled: !1,
                        isRarityToggleEnabled: !1
                    };
                    if ("collection-restricted" === l) {
                        var s = r.value.split(",");
                        return {
                            isRarityDisplayEnabled: !!n && s.includes(n),
                            isRarityToggleEnabled: !0
                        }
                    }
                    return {
                        isRarityDisplayEnabled: !0,
                        isRarityToggleEnabled: !0
                    }
                },
                r = t(14678),
                l = t(57740),
                s = t(76693)
        },
        76693: function(e, n, t) {
            t.d(n, {
                k: function() {
                    return i
                }
            });
            var a = [50, 40, 30, 25, 20, 15, 10, 5, 1, .1],
                i = function(e) {
                    var n = void 0;
                    return a.forEach((function(t) {
                        e <= t && (n = t)
                    })), n
                }
        },
        75856: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "quantity",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PriceHistoryGraph_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "TradeHistoryDataPoint",
                        kind: "LinkedField",
                        name: "results",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bucketStart",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "bucketEnd",
                            storageKey: null
                        }, e, {
                            alias: null,
                            args: null,
                            concreteType: "AssetQuantityType",
                            kind: "LinkedField",
                            name: "volume",
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
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "decimals",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, e],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "TradeHistoryType",
                    abstractKey: null
                }
            }();
            a.hash = "1db9ec6a82ce74a83e8735da3196b52e", n.default = a
        },
        39877: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    },
                    n = {
                        defaultValue: "WEEK",
                        kind: "LocalArgument",
                        name: "bucketSize"
                    },
                    t = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    },
                    a = {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cutoff"
                    },
                    i = {
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    },
                    r = {
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    },
                    l = {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    },
                    s = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "quantity",
                        storageKey: null
                    },
                    o = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: [e, n, t, a],
                        kind: "Fragment",
                        metadata: null,
                        name: "PriceHistoryQuery",
                        selections: [{
                            args: [i, r, l, {
                                kind: "Variable",
                                name: "cutoff",
                                variableName: "cutoff"
                            }],
                            kind: "FragmentSpread",
                            name: "PriceHistory_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [e, n, a, t],
                        kind: "Operation",
                        name: "PriceHistoryQuery",
                        selections: [{
                            alias: null,
                            args: [i, r, l, {
                                kind: "Variable",
                                name: "minTime",
                                variableName: "cutoff"
                            }],
                            concreteType: "TradeHistoryType",
                            kind: "LinkedField",
                            name: "tradeHistory",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TradeHistoryDataPoint",
                                kind: "LinkedField",
                                name: "results",
                                plural: !0,
                                selections: [s, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "volume",
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
                                            name: "decimals",
                                            storageKey: null
                                        }, o, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, s, o],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketStart",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketEnd",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "ee3bf76f4f9c032b4142313cbc2f4e38",
                        id: null,
                        metadata: {},
                        name: "PriceHistoryQuery",
                        operationKind: "query",
                        text: "query PriceHistoryQuery(\n  $archetype: ArchetypeInputType\n  $bucketSize: BucketSize = WEEK\n  $cutoff: DateTime\n  $collection: CollectionSlug\n) {\n  ...PriceHistory_data_XmWqM\n}\n\nfragment PriceHistoryGraphV2_data on TradeHistoryType {\n  results {\n    bucketStart\n    quantity\n    volume {\n      asset {\n        decimals\n        symbol\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryGraph_data on TradeHistoryType {\n  results {\n    bucketStart\n    bucketEnd\n    quantity\n    volume {\n      asset {\n        symbol\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryStats_data on TradeHistoryType {\n  results {\n    quantity\n    volume {\n      asset {\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistory_data_XmWqM on Query {\n  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {\n    ...PriceHistoryStats_data\n    ...PriceHistoryGraph_data\n    ...PriceHistoryGraphV2_data\n  }\n}\n"
                    }
                }
            }();
            a.hash = "bdc3076b56baeb73863c8ee5f703a06e", n.default = a
        },
        22565: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = [{
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "archetype"
                    }, {
                        defaultValue: "WEEK",
                        kind: "LocalArgument",
                        name: "bucketSize"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "collection"
                    }, {
                        defaultValue: null,
                        kind: "LocalArgument",
                        name: "cutoff"
                    }],
                    n = {
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    },
                    t = {
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    },
                    a = {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    },
                    i = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "quantity",
                        storageKey: null
                    },
                    r = {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    };
                return {
                    fragment: {
                        argumentDefinitions: e,
                        kind: "Fragment",
                        metadata: null,
                        name: "PriceHistoryRefetchableQuery",
                        selections: [{
                            args: [n, t, a, {
                                kind: "Variable",
                                name: "cutoff",
                                variableName: "cutoff"
                            }],
                            kind: "FragmentSpread",
                            name: "PriceHistory_data"
                        }],
                        type: "Query",
                        abstractKey: null
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: e,
                        kind: "Operation",
                        name: "PriceHistoryRefetchableQuery",
                        selections: [{
                            alias: null,
                            args: [n, t, a, {
                                kind: "Variable",
                                name: "minTime",
                                variableName: "cutoff"
                            }],
                            concreteType: "TradeHistoryType",
                            kind: "LinkedField",
                            name: "tradeHistory",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TradeHistoryDataPoint",
                                kind: "LinkedField",
                                name: "results",
                                plural: !0,
                                selections: [i, {
                                    alias: null,
                                    args: null,
                                    concreteType: "AssetQuantityType",
                                    kind: "LinkedField",
                                    name: "volume",
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
                                            name: "decimals",
                                            storageKey: null
                                        }, r, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "symbol",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, i, r],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketStart",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "bucketEnd",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    },
                    params: {
                        cacheID: "9036acd6d064b4dfc98656a8aeeb09d0",
                        id: null,
                        metadata: {},
                        name: "PriceHistoryRefetchableQuery",
                        operationKind: "query",
                        text: "query PriceHistoryRefetchableQuery(\n  $archetype: ArchetypeInputType\n  $bucketSize: BucketSize = WEEK\n  $collection: CollectionSlug\n  $cutoff: DateTime\n) {\n  ...PriceHistory_data_XmWqM\n}\n\nfragment PriceHistoryGraphV2_data on TradeHistoryType {\n  results {\n    bucketStart\n    quantity\n    volume {\n      asset {\n        decimals\n        symbol\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryGraph_data on TradeHistoryType {\n  results {\n    bucketStart\n    bucketEnd\n    quantity\n    volume {\n      asset {\n        symbol\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistoryStats_data on TradeHistoryType {\n  results {\n    quantity\n    volume {\n      asset {\n        decimals\n        id\n      }\n      quantity\n      id\n    }\n  }\n}\n\nfragment PriceHistory_data_XmWqM on Query {\n  tradeHistory(archetype: $archetype, minTime: $cutoff, collection: $collection, bucketSize: $bucketSize) {\n    ...PriceHistoryStats_data\n    ...PriceHistoryGraph_data\n    ...PriceHistoryGraphV2_data\n  }\n}\n"
                    }
                }
            }();
            a.hash = "bcff7201a474670b0b939b6700c36362", n.default = a
        },
        82623: function(e, n, t) {
            t.r(n);
            var a = function() {
                var e = {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "quantity",
                    storageKey: null
                };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PriceHistoryStats_data",
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "TradeHistoryDataPoint",
                        kind: "LinkedField",
                        name: "results",
                        plural: !0,
                        selections: [e, {
                            alias: null,
                            args: null,
                            concreteType: "AssetQuantityType",
                            kind: "LinkedField",
                            name: "volume",
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
                                    name: "decimals",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, e],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "TradeHistoryType",
                    abstractKey: null
                }
            }();
            a.hash = "322e2c6fcb01977f2129ecbd46064e43", n.default = a
        },
        15942: function(e, n, t) {
            t.r(n);
            var a = {
                argumentDefinitions: [{
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "archetype"
                }, {
                    defaultValue: "WEEK",
                    kind: "LocalArgument",
                    name: "bucketSize"
                }, {
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "collection"
                }, {
                    defaultValue: null,
                    kind: "LocalArgument",
                    name: "cutoff"
                }],
                kind: "Fragment",
                metadata: {
                    refetch: {
                        connection: null,
                        fragmentPathInResult: [],
                        operation: t(22565)
                    }
                },
                name: "PriceHistory_data",
                selections: [{
                    alias: null,
                    args: [{
                        kind: "Variable",
                        name: "archetype",
                        variableName: "archetype"
                    }, {
                        kind: "Variable",
                        name: "bucketSize",
                        variableName: "bucketSize"
                    }, {
                        kind: "Variable",
                        name: "collection",
                        variableName: "collection"
                    }, {
                        kind: "Variable",
                        name: "minTime",
                        variableName: "cutoff"
                    }],
                    concreteType: "TradeHistoryType",
                    kind: "LinkedField",
                    name: "tradeHistory",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "PriceHistoryStats_data"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PriceHistoryGraph_data"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "PriceHistoryGraphV2_data"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null,
                hash: "bcff7201a474670b0b939b6700c36362"
            };
            n.default = a
        },
        26258: function(e, n, t) {
            t.r(n);
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "RarityIndicator_data",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rank",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rankPercentile",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "totalSupply",
                    storageKey: null
                }],
                type: "RarityDataType",
                abstractKey: null,
                hash: "70072ba30c37b523c2a96941b2a3d4c9"
            };
            n.default = a
        }
    }
]);
//# sourceMappingURL=61793-5032219e40e9b55a.js.map