!(function (e, t, n, o, r) {
    "function" == typeof define && define.amd
        ? define(function () {
              return (e.fullpage = o(t, n)), e.fullpage;
          })
        : "object" == typeof exports
        ? (module.exports = o(t, n))
        : (t.fullpage = o(t, n));
})(this, window, document, function (e, t) {
    "use strict";
    var n = "fullpage-wrapper",
        o = "." + n,
        r = "fp-responsive",
        i = "fp-notransition",
        l = "fp-destroyed",
        a = "fp-enabled",
        c = "fp-viewing",
        s = "active",
        u = "." + s,
        f = "fp-completely",
        d = "." + f,
        v = ".section",
        p = "fp-section",
        h = "." + p,
        g = h + u,
        m = "fp-tableCell",
        S = "." + m,
        b = "fp-auto-height",
        w = "." + b,
        y = ".fp-auto-height-responsive",
        E = "fp-normal-scroll",
        L = "fp-nav",
        x = "#" + L,
        A = "fp-tooltip",
        T = "." + A,
        k = "fp-show-active",
        O = ".slide",
        M = "fp-slide",
        C = "." + M,
        H = C + u,
        I = "fp-slides",
        B = "." + I,
        R = "fp-slidesContainer",
        N = "." + R,
        z = "fp-table",
        j = "fp-slidesNav",
        P = "." + j,
        D = P + " a",
        V = ".fp-controlArrow",
        W = "fp-prev",
        Y = "fp-controlArrow " + W,
        F = V + ("." + W),
        U = "fp-controlArrow fp-next",
        X = V + ".fp-next";
    function _(t, n) {
        e.console && e.console[t] && e.console[t]("fullPage: " + n);
    }
    function K(e, n) {
        return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null;
    }
    function $(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o) for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? (e[r] = o[r]) : (e[r] = $(e[r], o[r])));
        }
        return e;
    }
    function q(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
    }
    function Q() {
        return "innerHeight" in e ? e.innerHeight : t.documentElement.offsetHeight;
    }
    function G() {
        return e.innerWidth;
    }
    function J(e, t) {
        var n;
        for (n in ((e = le(e)), t))
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n];
                }
        return e;
    }
    function Z(e, t, n) {
        for (var o = e[n]; o && !Te(o, t); ) o = o[n];
        return o;
    }
    function ee(e, t) {
        return Z(e, t, "previousElementSibling");
    }
    function te(e, t) {
        return Z(e, t, "nextElementSibling");
    }
    function ne(e) {
        return e.previousElementSibling;
    }
    function oe(e) {
        return e.nextElementSibling;
    }
    function re(e) {
        return e[e.length - 1];
    }
    function ie(e, t) {
        e = se(e) ? e[0] : e;
        for (var n = null != t ? K(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++;
        }
        return -1;
    }
    function le(e) {
        return se(e) ? e : [e];
    }
    function ae(e) {
        e = le(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e;
    }
    function ce(e) {
        e = le(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e;
    }
    function se(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e);
    }
    function ue(e, t) {
        e = le(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : (o.className += " " + t);
        }
        return e;
    }
    function fe(e, t) {
        e = le(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : (i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
            }
        }
        return e;
    }
    function de(e, t) {
        t.appendChild(e);
    }
    function ve(e, n, o) {
        var r;
        n = n || t.createElement("div");
        for (var i = 0; i < e.length; i++) {
            var l = e[i];
            ((o && !i) || !o) && ((r = n.cloneNode(!0)), l.parentNode.insertBefore(r, l)), r.appendChild(l);
        }
        return e;
    }
    function pe(e, t) {
        ve(e, t, !0);
    }
    function he(e, t) {
        for ("string" == typeof t && (t = Oe(t)), e.appendChild(t); e.firstChild !== t; ) t.appendChild(e.firstChild);
    }
    function ge(e) {
        for (var n = t.createDocumentFragment(); e.firstChild; ) n.appendChild(e.firstChild);
        e.parentNode.replaceChild(n, e);
    }
    function me(e, t) {
        return e && 1 === e.nodeType ? (Te(e, t) ? e : me(e.parentNode, t)) : null;
    }
    function Se(e, t) {
        we(e, e.nextSibling, t);
    }
    function be(e, t) {
        we(e, e, t);
    }
    function we(e, t, n) {
        se(n) || ("string" == typeof n && (n = Oe(n)), (n = [n]));
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t);
    }
    function ye() {
        var n = t.documentElement;
        return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0);
    }
    function Ee(e) {
        return Array.prototype.filter.call(e.parentNode.children, function (t) {
            return t !== e;
        });
    }
    function Le(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function xe(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t;
    }
    function Ae(n, o, r) {
        var i;
        (r = void 0 === r ? {} : r), "function" == typeof e.CustomEvent ? (i = new CustomEvent(o, { detail: r })) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r), n.dispatchEvent(i);
    }
    function Te(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function ke(e, t) {
        if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e;
    }
    function Oe(e) {
        var n = t.createElement("div");
        return (n.innerHTML = e.trim()), n.firstChild;
    }
    function Me(e) {
        e = le(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n);
        }
    }
    function Ce(e, t, n) {
        for (var o = e[n], r = []; o; ) (Te(o, t) || null == t) && r.push(o), (o = o[n]);
        return r;
    }
    function He(e, t) {
        return Ce(e, t, "nextElementSibling");
    }
    function Ie(e, t) {
        return Ce(e, t, "previousElementSibling");
    }
    return (
        e.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (t, n) {
                n = n || e;
                for (var o = 0; o < this.length; o++) t.call(n, this[o], o, this);
            }),
        (e.fp_utils = {
            $: K,
            deepExtend: $,
            hasClass: q,
            getWindowHeight: Q,
            css: J,
            until: Z,
            prevUntil: ee,
            nextUntil: te,
            prev: ne,
            next: oe,
            last: re,
            index: ie,
            getList: le,
            hide: ae,
            show: ce,
            isArrayOrList: se,
            addClass: ue,
            removeClass: fe,
            appendTo: de,
            wrap: ve,
            wrapAll: pe,
            wrapInner: he,
            unwrap: ge,
            closest: me,
            after: Se,
            before: be,
            insertBefore: we,
            getScrollTop: ye,
            siblings: Ee,
            preventDefault: Le,
            isFunction: xe,
            trigger: Ae,
            matches: Te,
            toggle: ke,
            createElementFromHTML: Oe,
            remove: Me,
            filter: function (e, t) {
                Array.prototype.filter.call(e, t);
            },
            untilAll: Ce,
            nextAll: He,
            prevAll: Ie,
            showError: _,
        }),
        function (Z, le) {
            (le && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(le.licenseKey)) || t.domain.indexOf("alvarotrigo.com");
            var se = K("html, body"),
                ve = (K("body"), K("html")[0]),
                we = K("body")[0];
            if (!q(ve, a)) {
                var Ce = {};
                le = $(
                    {
                        menu: !1,
                        anchors: [],
                        lockAnchors: !1,
                        navigation: !1,
                        navigationPosition: "right",
                        navigationTooltips: [],
                        showActiveTooltip: !1,
                        slidesNavigation: !1,
                        slidesNavPosition: "bottom",
                        scrollBar: !1,
                        hybrid: !1,
                        css3: !0,
                        scrollingSpeed: 700,
                        autoScrolling: !0,
                        fitToSection: !0,
                        fitToSectionDelay: 1e3,
                        easing: "easeInOutCubic",
                        easingcss3: "ease",
                        loopBottom: !1,
                        loopTop: !1,
                        loopHorizontal: !0,
                        continuousVertical: !1,
                        continuousHorizontal: !1,
                        scrollHorizontally: !1,
                        interlockedSlides: !1,
                        dragAndMove: !1,
                        offsetSections: !1,
                        resetSliders: !1,
                        fadingEffect: !1,
                        normalScrollElements: null,
                        scrollOverflow: !1,
                        scrollOverflowReset: !1,
                        scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        touchWrapper: "string" == typeof Z ? K(Z)[0] : Z,
                        bigSectionsDestination: null,
                        keyboardScrolling: !0,
                        animateAnchor: !0,
                        recordHistory: !0,
                        controlArrows: !0,
                        controlArrowColor: "#fff",
                        verticalCentered: !0,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: !1,
                        parallax: !1,
                        parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                        cards: !1,
                        cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 },
                        sectionSelector: v,
                        slideSelector: O,
                        v2compatible: !1,
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: !0,
                    },
                    le
                );
                var Be,
                    Re,
                    Ne,
                    ze,
                    je = !1,
                    Pe = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    De = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                    Ve = "string" == typeof Z ? K(Z)[0] : Z,
                    We = Q(),
                    Ye = G(),
                    Fe = !1,
                    Ue = !0,
                    Xe = !0,
                    _e = [],
                    Ke = { m: { up: !0, down: !0, left: !0, right: !0 } };
                Ke.k = $({}, Ke.m);
                var $e,
                    qe,
                    Qe,
                    Ge,
                    Je,
                    Ze,
                    et,
                    tt,
                    nt,
                    ot = e.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" },
                    rt = { touchmove: "ontouchmove" in e ? "touchmove" : ot.move, touchstart: "ontouchstart" in e ? "touchstart" : ot.down },
                    it = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    lt = !1;
                try {
                    var at = Object.defineProperty({}, "passive", {
                        get: function () {
                            lt = !0;
                        },
                    });
                    e.addEventListener("testPassive", null, at), e.removeEventListener("testPassive", null, at);
                } catch (e) {}
                var ct,
                    st,
                    ut = $({}, le),
                    ft = !1,
                    dt = !0,
                    vt = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
                oo(),
                    (e.fp_easings = $(e.fp_easings, {
                        easeInOutCubic: function (e, t, n, o) {
                            return (e /= o / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
                        },
                    })),
                    Ve &&
                        ((Ce.version = "3.0.8"),
                        (Ce.setAutoScrolling = xt),
                        (Ce.setRecordHistory = At),
                        (Ce.setScrollingSpeed = Tt),
                        (Ce.setFitToSection = kt),
                        (Ce.setLockAnchors = function (e) {
                            le.lockAnchors = e;
                        }),
                        (Ce.setMouseWheelScrolling = Ot),
                        (Ce.setAllowScrolling = Mt),
                        (Ce.setKeyboardScrolling = Ht),
                        (Ce.moveSectionUp = It),
                        (Ce.moveSectionDown = Bt),
                        (Ce.silentMoveTo = Rt),
                        (Ce.moveTo = Nt),
                        (Ce.moveSlideRight = zt),
                        (Ce.moveSlideLeft = jt),
                        (Ce.fitToSection = Gt),
                        (Ce.reBuild = Pt),
                        (Ce.setResponsive = Vt),
                        (Ce.getFullpageData = function () {
                            return le;
                        }),
                        (Ce.destroy = function (n) {
                            xt(!1, "internal"),
                                Mt(!0),
                                Ct(!1),
                                Ht(!1),
                                ue(Ve, l),
                                [Je, Ge, qe, Ze, et, nt, Qe].forEach(function (e) {
                                    clearTimeout(e);
                                }),
                                e.removeEventListener("scroll", Qt),
                                e.removeEventListener("hashchange", Ln),
                                e.removeEventListener("resize", Rn),
                                t.removeEventListener("keydown", An),
                                t.removeEventListener("keyup", Tn),
                                ["click", "touchstart"].forEach(function (e) {
                                    t.removeEventListener(e, Wt);
                                }),
                                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                                    t.removeEventListener(e, Ft, !0);
                                }),
                                n &&
                                    (Zn(0),
                                    K("img[data-src], source[data-src], audio[data-src], iframe[data-src]", Ve).forEach(function (e) {
                                        pn(e, "src");
                                    }),
                                    K("img[data-srcset]").forEach(function (e) {
                                        pn(e, "srcset");
                                    }),
                                    Me(K(x + ", " + P + ", " + V)),
                                    J(K(h), { height: "", "background-color": "", padding: "" }),
                                    J(K(C), { width: "" }),
                                    J(Ve, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                                    J(se, { overflow: "", height: "" }),
                                    fe(ve, a),
                                    fe(we, r),
                                    we.className.split(/\s+/).forEach(function (e) {
                                        0 === e.indexOf(c) && fe(we, e);
                                    }),
                                    K(h + ", " + C).forEach(function (e) {
                                        le.scrollOverflowHandler && le.scrollOverflow && le.scrollOverflowHandler.remove(e), fe(e, z + " " + s + " " + f);
                                        var t = e.getAttribute("data-fp-styles");
                                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")), q(e, p) && !ft && e.removeAttribute("data-anchor");
                                    }),
                                    Pn(Ve),
                                    [S, N, B].forEach(function (e) {
                                        K(e, Ve).forEach(function (e) {
                                            ge(e);
                                        });
                                    }),
                                    J(Ve, { "-webkit-transition": "none", transition: "none" }),
                                    e.scrollTo(0, 0),
                                    [p, M, R].forEach(function (e) {
                                        fe(K("." + e), e);
                                    }));
                        }),
                        (Ce.getActiveSection = function () {
                            return new ao(K(g)[0]);
                        }),
                        (Ce.getActiveSlide = function () {
                            return fn(K(H, K(g)[0])[0]);
                        }),
                        (Ce.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: (function () {
                                for (var e = [], t = 0; t < K(le.sectionSelector, Ve).length; t++) e.push("translate3d(0px, 0px, 0px)");
                                return e;
                            })(),
                            left: (function () {
                                for (var e = [], t = 0; t < K(le.sectionSelector, Ve).length; t++) e.push(0);
                                return e;
                            })(),
                            options: le,
                            setAutoScrolling: xt,
                        }),
                        (Ce.shared = { afterRenderActions: qt, isNormalScrollElement: !1 }),
                        (e.fullpage_api = Ce),
                        le.$ &&
                            Object.keys(Ce).forEach(function (e) {
                                le.$.fn.fullpage[e] = Ce[e];
                            }),
                        le.css3 &&
                            (le.css3 = (function () {
                                var n,
                                    o = t.createElement("p"),
                                    r = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                                for (var i in ((o.style.display = "block"), t.body.insertBefore(o, null), r)) void 0 !== o.style[i] && ((o.style[i] = "translate3d(1px,1px,1px)"), (n = e.getComputedStyle(o).getPropertyValue(r[i])));
                                return t.body.removeChild(o), void 0 !== n && n.length > 0 && "none" !== n;
                            })()),
                        (le.scrollBar = le.scrollBar || le.hybrid),
                        (function () {
                            if (!le.anchors.length) {
                                var e = K(le.sectionSelector.split(",").join("[data-anchor],") + "[data-anchor]", Ve);
                                e.length &&
                                    ((ft = !0),
                                    e.forEach(function (e) {
                                        le.anchors.push(e.getAttribute("data-anchor").toString());
                                    }));
                            }
                            if (!le.navigationTooltips.length) {
                                var t = K(le.sectionSelector.split(",").join("[data-tooltip],") + "[data-tooltip]", Ve);
                                t.length &&
                                    t.forEach(function (e) {
                                        le.navigationTooltips.push(e.getAttribute("data-tooltip").toString());
                                    });
                            }
                        })(),
                        (function () {
                            J(Ve, { height: "100%", position: "relative" }), ue(Ve, n), ue(ve, a), (We = Q()), fe(Ve, l), ue(K(le.sectionSelector, Ve), p), ue(K(le.slideSelector, Ve), M);
                            for (var e = K(h), o = 0; o < e.length; o++) {
                                var r = o,
                                    i = e[o],
                                    c = K(C, i),
                                    u = c.length;
                                i.setAttribute("data-fp-styles", i.getAttribute("style")), _t(i, r), Kt(i, r), u > 0 ? Xt(i, c, u) : le.verticalCentered && Wn(i);
                            }
                            le.fixedElements &&
                                le.css3 &&
                                K(le.fixedElements).forEach(function (e) {
                                    we.appendChild(e);
                                }),
                                le.navigation &&
                                    (function () {
                                        var e = t.createElement("div");
                                        e.setAttribute("id", L);
                                        var n = t.createElement("ul");
                                        e.appendChild(n), de(e, we);
                                        var o = K(x)[0];
                                        ue(o, "fp-" + le.navigationPosition), le.showActiveTooltip && ue(o, k);
                                        for (var r = "", i = 0; i < K(h).length; i++) {
                                            var l = "";
                                            le.anchors.length && (l = le.anchors[i]), (r += '<li><a href="#' + l + '"><span class="fp-sr-only">' + $t(i, "Section") + "</span><span></span></a>");
                                            var a = le.navigationTooltips[i];
                                            void 0 !== a && "" !== a && (r += '<div class="' + A + " fp-" + le.navigationPosition + '">' + a + "</div>"), (r += "</li>");
                                        }
                                        (K("ul", o)[0].innerHTML = r), J(K(x), { "margin-top": "-" + K(x)[0].offsetHeight / 2 + "px" });
                                        var c = K("li", K(x)[0])[ie(K(g)[0], h)];
                                        ue(K("a", c), s);
                                    })(),
                                K('iframe[src*="youtube.com/embed/"]', Ve).forEach(function (e) {
                                    var t, n, o;
                                    (n = "enablejsapi=1"), (o = (t = e).getAttribute("src")), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n);
                                }),
                                le.scrollOverflow && ($e = le.scrollOverflowHandler.init(le));
                        })(),
                        Mt(!0),
                        Ct(!0),
                        xt(le.autoScrolling, "internal"),
                        zn(),
                        Qn(),
                        "complete" === t.readyState && En(),
                        e.addEventListener("load", En),
                        le.scrollOverflow || qt(),
                        (function () {
                            for (var e = 1; e < 4; e++) nt = setTimeout(Ut, 350 * e);
                        })(),
                        e.addEventListener("scroll", Qt),
                        e.addEventListener("hashchange", Ln),
                        e.addEventListener("blur", Cn),
                        e.addEventListener("resize", Rn),
                        t.addEventListener("keydown", An),
                        t.addEventListener("keyup", Tn),
                        ["click", "touchstart"].forEach(function (e) {
                            t.addEventListener(e, Wt);
                        }),
                        le.normalScrollElements &&
                            (["mouseenter", "touchstart"].forEach(function (e) {
                                Yt(e, !1);
                            }),
                            ["mouseleave", "touchend"].forEach(function (e) {
                                Yt(e, !0);
                            })));
                var pt = !1,
                    ht = 0,
                    gt = 0,
                    mt = 0,
                    St = 0,
                    bt = 0,
                    wt = new Date().getTime(),
                    yt = 0,
                    Et = 0,
                    Lt = We;
                return Ce;
            }
            function xt(e, t) {
                e || Zn(0), no("autoScrolling", e, t);
                var n = K(g)[0];
                if (le.autoScrolling && !le.scrollBar) J(se, { overflow: "hidden", height: "100%" }), At(ut.recordHistory, "internal"), J(Ve, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && Zn(n.offsetTop);
                else if ((J(se, { overflow: "visible", height: "initial" }), At(!!le.autoScrolling && ut.recordHistory, "internal"), J(Ve, { "-ms-touch-action": "", "touch-action": "" }), null != n)) {
                    var o = dn(n.offsetTop);
                    o.element.scrollTo(0, o.options);
                }
            }
            function At(e, t) {
                no("recordHistory", e, t);
            }
            function Tt(e, t) {
                no("scrollingSpeed", e, t);
            }
            function kt(e, t) {
                no("fitToSection", e, t);
            }
            function Ot(n) {
                n
                    ? ((function () {
                          var n,
                              o = "";
                          e.addEventListener ? (n = "addEventListener") : ((n = "attachEvent"), (o = "on"));
                          var r = "onwheel" in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                              i = !!lt && { passive: !1 };
                          "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", rn, i) : t[n](o + r, rn, i);
                      })(),
                      Ve.addEventListener("mousedown", kn),
                      Ve.addEventListener("mouseup", On))
                    : (t.addEventListener ? (t.removeEventListener("mousewheel", rn, !1), t.removeEventListener("wheel", rn, !1), t.removeEventListener("MozMousePixelScroll", rn, !1)) : t.detachEvent("onmousewheel", rn),
                      Ve.removeEventListener("mousedown", kn),
                      Ve.removeEventListener("mouseup", On));
            }
            function Mt(e, t) {
                void 0 !== t
                    ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                          to(e, t, "m");
                      })
                    : to(e, "all", "m");
            }
            function Ct(e) {
                e
                    ? (Ot(!0),
                      (function () {
                          if (Pe || De) {
                              le.autoScrolling && (we.removeEventListener(rt.touchmove, Zt, { passive: !1 }), we.addEventListener(rt.touchmove, Zt, { passive: !1 }));
                              var e = le.touchWrapper;
                              e.removeEventListener(rt.touchstart, nn), e.removeEventListener(rt.touchmove, en, { passive: !1 }), e.addEventListener(rt.touchstart, nn), e.addEventListener(rt.touchmove, en, { passive: !1 });
                          }
                      })())
                    : (Ot(!1),
                      (function () {
                          if (Pe || De) {
                              le.autoScrolling && (we.removeEventListener(rt.touchmove, en, { passive: !1 }), we.removeEventListener(rt.touchmove, Zt, { passive: !1 }));
                              var e = le.touchWrapper;
                              e.removeEventListener(rt.touchstart, nn), e.removeEventListener(rt.touchmove, en, { passive: !1 });
                          }
                      })());
            }
            function Ht(e, t) {
                void 0 !== t
                    ? (t = t.replace(/ /g, "").split(",")).forEach(function (t) {
                          to(e, t, "k");
                      })
                    : (to(e, "all", "k"), (le.keyboardScrolling = e));
            }
            function It() {
                var e = ee(K(g)[0], h);
                e || (!le.loopTop && !le.continuousVertical) || (e = re(K(h))), null != e && cn(e, null, !0);
            }
            function Bt() {
                var e = te(K(g)[0], h);
                e || (!le.loopBottom && !le.continuousVertical) || (e = K(h)[0]), null != e && cn(e, null, !1);
            }
            function Rt(e, t) {
                Tt(0, "internal"), Nt(e, t), Tt(ut.scrollingSpeed, "internal");
            }
            function Nt(e, t) {
                var n = Un(e);
                void 0 !== t ? Xn(e, t) : null != n && cn(n);
            }
            function zt(e) {
                ln("right", e);
            }
            function jt(e) {
                ln("left", e);
            }
            function Pt(t) {
                if (!q(Ve, l)) {
                    (Fe = !0), (We = Q()), (Ye = G());
                    for (var n = K(h), o = 0; o < n.length; ++o) {
                        var r = n[o],
                            i = K(B, r)[0],
                            a = K(C, r);
                        le.verticalCentered && J(K(S, r), { height: Yn(r) + "px" }), J(r, { height: We + "px" }), a.length > 1 && In(i, K(H, i)[0]);
                    }
                    le.scrollOverflow && $e.createScrollBarForAll();
                    var c = ie(K(g)[0], h);
                    c && Rt(c + 1), (Fe = !1), xe(le.afterResize) && t && le.afterResize.call(Ve, e.innerWidth, e.innerHeight), xe(le.afterReBuild) && !t && le.afterReBuild.call(Ve);
                }
            }
            function Dt() {
                return q(we, r);
            }
            function Vt(e) {
                var t = Dt();
                e
                    ? t || (xt(!1, "internal"), kt(!1, "internal"), ae(K(x)), ue(we, r), xe(le.afterResponsive) && le.afterResponsive.call(Ve, e), le.scrollOverflow && $e.createScrollBarForAll())
                    : t && (xt(ut.autoScrolling, "internal"), kt(ut.autoScrolling, "internal"), ce(K(x)), fe(we, r), xe(le.afterResponsive) && le.afterResponsive.call(Ve, e));
            }
            function Wt(e) {
                var t = e.target;
                t && me(t, x + " a")
                    ? function (e) {
                          Le(e);
                          var t = ie(me(this, x + " li"));
                          cn(K(h)[t]);
                      }.call(t, e)
                    : Te(t, T)
                    ? function () {
                          Ae(ne(this), "click");
                      }.call(t)
                    : Te(t, V)
                    ? function () {
                          var e = me(this, h);
                          q(this, W) ? Ke.m.left && jt(e) : Ke.m.right && zt(e);
                      }.call(t, e)
                    : Te(t, D) || null != me(t, D)
                    ? function (e) {
                          Le(e);
                          var t = K(B, me(this, h))[0],
                              n = K(C, t)[ie(me(this, "li"))];
                          In(t, n);
                      }.call(t, e)
                    : me(t, le.menu + " [data-menuanchor]") &&
                      function (e) {
                          !K(le.menu)[0] || (!le.lockAnchors && le.anchors.length) || (Le(e), Nt(this.getAttribute("data-menuanchor")));
                      }.call(t, e);
            }
            function Yt(e, n) {
                (t["fp_" + e] = n), t.addEventListener(e, Ft, !0);
            }
            function Ft(e) {
                var n = e.type,
                    o = !1,
                    r = le.scrollOverflow,
                    i = "mouseleave" === n ? e.toElement || e.relatedTarget : e.target;
                if (i == t || !i) return Ct(!0), void (r && le.scrollOverflowHandler.setIscroll(i, !0));
                "touchend" === n &&
                    ((dt = !1),
                    setTimeout(function () {
                        dt = !0;
                    }, 800)),
                    ("mouseenter" !== n || dt) &&
                        (le.normalScrollElements.split(",").forEach(function (e) {
                            if (!o) {
                                var t = Te(i, e),
                                    n = me(i, e);
                                (t || n) && (Ce.shared.isNormalScrollElement || (Ct(!1), r && le.scrollOverflowHandler.setIscroll(i, !1)), (Ce.shared.isNormalScrollElement = !0), (o = !0));
                            }
                        }),
                        !o && Ce.shared.isNormalScrollElement && (Ct(!0), r && le.scrollOverflowHandler.setIscroll(i, !0), (Ce.shared.isNormalScrollElement = !1)));
            }
            function Ut() {
                var e = Q(),
                    t = G();
                (We === e && Ye === t) || ((We = e), (Ye = t), Pt(!0));
            }
            function Xt(e, n, o) {
                var r = 100 * o,
                    i = 100 / o,
                    l = t.createElement("div");
                (l.className = I), pe(n, l);
                var a = t.createElement("div");
                (a.className = R),
                    pe(n, a),
                    J(K(N, e), { width: r + "%" }),
                    o > 1 &&
                        (le.controlArrows &&
                            (function (e) {
                                var t = [Oe('<div class="' + Y + '"></div>'), Oe('<div class="' + U + '"></div>')];
                                Se(K(B, e)[0], t),
                                    "#fff" !== le.controlArrowColor &&
                                        (J(K(X, e), { "border-color": "transparent transparent transparent " + le.controlArrowColor }), J(K(F, e), { "border-color": "transparent " + le.controlArrowColor + " transparent transparent" })),
                                    le.loopHorizontal || ae(K(F, e));
                            })(e),
                        le.slidesNavigation &&
                            (function (e, t) {
                                de(Oe('<div class="' + j + '"><ul></ul></div>'), e);
                                var n = K(P, e)[0];
                                ue(n, "fp-" + le.slidesNavPosition);
                                for (var o = 0; o < t; o++) de(Oe('<li><a href="#"><span class="fp-sr-only">' + $t(o, "Slide") + "</span><span></span></a></li>"), K("ul", n)[0]);
                                J(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), ue(K("a", K("li", n)[0]), s);
                            })(e, o)),
                    n.forEach(function (e) {
                        J(e, { width: i + "%" }), le.verticalCentered && Wn(e);
                    });
                var c = K(H, e)[0];
                null != c && (0 !== ie(K(g), h) || (0 === ie(K(g), h) && 0 !== ie(c))) ? Jn(c, "internal") : ue(n[0], s);
            }
            function _t(e, t) {
                t || null != K(g)[0] || ue(e, s),
                    (ze = K(g)[0]),
                    J(e, { height: We + "px" }),
                    le.paddingTop && J(e, { "padding-top": le.paddingTop }),
                    le.paddingBottom && J(e, { "padding-bottom": le.paddingBottom }),
                    void 0 !== le.sectionsColor[t] && J(e, { "background-color": le.sectionsColor[t] }),
                    void 0 !== le.anchors[t] && e.setAttribute("data-anchor", le.anchors[t]);
            }
            function Kt(e, t) {
                void 0 !== le.anchors[t] && q(e, s) && Dn(le.anchors[t], t),
                    le.menu &&
                        le.css3 &&
                        null != me(K(le.menu)[0], o) &&
                        K(le.menu).forEach(function (e) {
                            we.appendChild(e);
                        });
            }
            function $t(e, t) {
                return le.navigationTooltips[e] || le.anchors[e] || t + " " + (e + 1);
            }
            function qt() {
                var e,
                    t,
                    n = K(g)[0];
                ue(n, f),
                    gn(n),
                    hn(),
                    Sn(n),
                    le.scrollOverflow && le.scrollOverflowHandler.afterLoad(),
                    (e = xn()),
                    (t = Un(e.section)),
                    (e.section && t && (void 0 === t || ie(t) !== ie(ze))) || !xe(le.afterLoad) || sn("afterLoad", { activeSection: n, element: n, direction: null, anchorLink: n.getAttribute("data-anchor"), sectionIndex: ie(n, h) }),
                    xe(le.afterRender) && sn("afterRender");
            }
            function Qt() {
                var e, t, n, o;
                if (!le.autoScrolling || le.scrollBar) {
                    var r = ye(),
                        i = (function (e) {
                            var t = e > ht ? "down" : "up";
                            return (ht = e), (yt = e), t;
                        })(r),
                        l = 0,
                        a = r + Q() / 2,
                        c = we.offsetHeight - Q() === r,
                        u = K(h);
                    if (c) l = u.length - 1;
                    else if (r) for (var d = 0; d < u.length; ++d) u[d].offsetTop <= a && (l = d);
                    else l = 0;
                    if (((t = i), (n = K(g)[0].offsetTop), (o = n + Q()), ("up" == t ? o >= ye() + Q() : n <= ye()) && (q(K(g)[0], f) || (ue(K(g)[0], f), fe(Ee(K(g)[0]), f))), !q((e = u[l]), s))) {
                        pt = !0;
                        var v,
                            p,
                            m = K(g)[0],
                            S = ie(m, h) + 1,
                            b = Vn(e),
                            w = e.getAttribute("data-anchor"),
                            y = ie(e, h) + 1,
                            E = K(H, e)[0],
                            L = { activeSection: m, sectionIndex: y - 1, anchorLink: w, element: e, leavingSection: S, direction: b };
                        E && ((p = E.getAttribute("data-anchor")), (v = ie(E))),
                            Xe && (ue(e, s), fe(Ee(e), s), xe(le.onLeave) && sn("onLeave", L), xe(le.afterLoad) && sn("afterLoad", L), wn(m), gn(e), Sn(e), Dn(w, y - 1), le.anchors.length && (Be = w), Kn(v, p, w)),
                            clearTimeout(Ze),
                            (Ze = setTimeout(function () {
                                pt = !1;
                            }, 100));
                    }
                    le.fitToSection &&
                        (clearTimeout(et),
                        (et = setTimeout(function () {
                            le.fitToSection && K(g)[0].offsetHeight <= We && Gt();
                        }, le.fitToSectionDelay)));
                }
            }
            function Gt() {
                Xe && ((Fe = !0), cn(K(g)[0]), (Fe = !1));
            }
            function Jt(e) {
                if (Ke.m[e]) {
                    var t = "down" === e ? Bt : It;
                    if (le.scrollOverflow) {
                        var n = le.scrollOverflowHandler.scrollable(K(g)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!le.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t();
                        } else t();
                    } else t();
                }
            }
            function Zt(e) {
                le.autoScrolling && tn(e) && Ke.m.up && Le(e);
            }
            function en(t) {
                var n = me(t.target, h) || K(g)[0];
                if (tn(t)) {
                    le.autoScrolling && Le(t);
                    var o = Gn(t);
                    (St = o.y),
                        (bt = o.x),
                        K(B, n).length && Math.abs(mt - bt) > Math.abs(gt - St)
                            ? !je && Math.abs(mt - bt) > (G() / 100) * le.touchSensitivity && (mt > bt ? Ke.m.right && zt(n) : Ke.m.left && jt(n))
                            : le.autoScrolling && Xe && Math.abs(gt - St) > (e.innerHeight / 100) * le.touchSensitivity && (gt > St ? Jt("down") : St > gt && Jt("up"));
                }
            }
            function tn(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType;
            }
            function nn(e) {
                if ((le.fitToSection && (ct = !1), tn(e))) {
                    var t = Gn(e);
                    (gt = t.y), (mt = t.x);
                }
            }
            function on(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return Math.ceil(n / t);
            }
            function rn(t) {
                var n = new Date().getTime(),
                    o = q(K(d)[0], E);
                if (!Ke.m.down && !Ke.m.up) return Le(t), !1;
                if (le.autoScrolling && !Ne && !o) {
                    var r = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail,
                        i = Math.max(-1, Math.min(1, r)),
                        l = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX,
                        a = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !l;
                    _e.length > 149 && _e.shift(), _e.push(Math.abs(r)), le.scrollBar && Le(t);
                    var c = n - wt;
                    return (wt = n), c > 200 && (_e = []), Xe && on(_e, 10) >= on(_e, 70) && a && Jt(i < 0 ? "down" : "up"), !1;
                }
                le.fitToSection && (ct = !1);
            }
            function ln(e, t) {
                var n = null == t ? K(g)[0] : t,
                    o = K(B, n)[0];
                if (!(null == o || je || K(C, o).length < 2)) {
                    var r = K(H, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? ee(r, C) : te(r, C))) {
                        if (!le.loopHorizontal) return;
                        var l = Ee(r);
                        i = "left" === e ? l[l.length - 1] : l[0];
                    }
                    (je = !Ce.test.isTesting), In(o, i, e);
                }
            }
            function an() {
                for (var e = K(H), t = 0; t < e.length; t++) Jn(e[t], "internal");
            }
            function cn(e, t, n) {
                if (null != e) {
                    var o,
                        r,
                        i = {
                            element: e,
                            callback: t,
                            isMovementUp: n,
                            dtop: (function (e) {
                                var t = e.offsetHeight,
                                    n = e.offsetTop,
                                    o = n,
                                    r = n > yt,
                                    i = o - We + t,
                                    l = le.bigSectionsDestination;
                                return t > We ? ((r || l) && "bottom" !== l) || (o = i) : (r || (Fe && null == oe(e))) && (o = i), (yt = o), o;
                            })(e),
                            yMovement: Vn(e),
                            anchorLink: e.getAttribute("data-anchor"),
                            sectionIndex: ie(e, h),
                            activeSlide: K(H, e)[0],
                            activeSection: K(g)[0],
                            leavingSection: ie(K(g), h) + 1,
                            localIsResizing: Fe,
                        };
                    if (!((i.activeSection == e && !Fe) || (le.scrollBar && ye() === i.dtop && !q(e, b)))) {
                        if ((null != i.activeSlide && ((o = i.activeSlide.getAttribute("data-anchor")), (r = ie(i.activeSlide))), !i.localIsResizing)) {
                            var l = i.yMovement;
                            if ((void 0 !== n && (l = n ? "up" : "down"), (i.direction = l), xe(le.onLeave) && !1 === sn("onLeave", i))) return;
                        }
                        le.autoScrolling &&
                            le.continuousVertical &&
                            void 0 !== i.isMovementUp &&
                            ((!i.isMovementUp && "up" == i.yMovement) || (i.isMovementUp && "down" == i.yMovement)) &&
                            (i = (function (e) {
                                return (
                                    e.isMovementUp ? be(K(g)[0], He(e.activeSection, h)) : Se(K(g)[0], Ie(e.activeSection, h).reverse()),
                                    Zn(K(g)[0].offsetTop),
                                    an(),
                                    (e.wrapAroundElements = e.activeSection),
                                    (e.dtop = e.element.offsetTop),
                                    (e.yMovement = Vn(e.element)),
                                    e
                                );
                            })(i)),
                            i.localIsResizing || wn(i.activeSection),
                            le.scrollOverflow && le.scrollOverflowHandler.beforeLeave(),
                            ue(e, s),
                            fe(Ee(e), s),
                            gn(e),
                            le.scrollOverflow && le.scrollOverflowHandler.onLeave(),
                            (Xe = Ce.test.isTesting),
                            Kn(r, o, i.anchorLink, i.sectionIndex),
                            (function (e) {
                                if (le.css3 && le.autoScrolling && !le.scrollBar) {
                                    var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    Fn(t, !0),
                                        le.scrollingSpeed
                                            ? (clearTimeout(Ge),
                                              (Ge = setTimeout(function () {
                                                  vn(e);
                                              }, le.scrollingSpeed)))
                                            : vn(e);
                                } else {
                                    var n = dn(e.dtop);
                                    (Ce.test.top = -e.dtop + "px"),
                                        ro(n.element, n.options, le.scrollingSpeed, function () {
                                            le.scrollBar
                                                ? setTimeout(function () {
                                                      vn(e);
                                                  }, 30)
                                                : vn(e);
                                        });
                                }
                            })(i),
                            (Be = i.anchorLink),
                            Dn(i.anchorLink, i.sectionIndex);
                    }
                }
            }
            function sn(e, t) {
                var n,
                    o = (function (e, t) {
                        var n;
                        return (n = le.v2compatible
                            ? {
                                  afterRender: function () {
                                      return [Ve];
                                  },
                                  onLeave: function () {
                                      return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction];
                                  },
                                  afterLoad: function () {
                                      return [t.element, t.anchorLink, t.sectionIndex + 1];
                                  },
                                  afterSlideLoad: function () {
                                      return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex];
                                  },
                                  onSlideLeave: function () {
                                      return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex];
                                  },
                              }
                            : {
                                  afterRender: function () {
                                      return { section: un(K(g)[0]), slide: fn(K(H, K(g)[0])[0]) };
                                  },
                                  onLeave: function () {
                                      return { origin: un(t.activeSection), destination: un(t.element), direction: t.direction };
                                  },
                                  afterLoad: function () {
                                      return n.onLeave();
                                  },
                                  afterSlideLoad: function () {
                                      return { section: un(t.section), origin: fn(t.prevSlide), destination: fn(t.destiny), direction: t.direction };
                                  },
                                  onSlideLeave: function () {
                                      return n.afterSlideLoad();
                                  },
                              })[e]();
                    })(e, t);
                if (le.v2compatible) {
                    if (!1 === le[e].apply(o[0], o.slice(1))) return !1;
                } else if (
                    (Ae(Ve, e, o),
                    !1 ===
                        le[e].apply(
                            o[Object.keys(o)[0]],
                            ((n = o),
                            Object.keys(n).map(function (e) {
                                return n[e];
                            }))
                        ))
                )
                    return !1;
                return !0;
            }
            function un(e) {
                return e ? new ao(e) : null;
            }
            function fn(e) {
                return e ? new co(e) : null;
            }
            function dn(t) {
                var n = {};
                return le.autoScrolling && !le.scrollBar ? ((n.options = -t), (n.element = K(o)[0])) : ((n.options = t), (n.element = e)), n;
            }
            function vn(e) {
                !(function (e) {
                    null != e.wrapAroundElements && (e.isMovementUp ? be(K(h)[0], e.wrapAroundElements) : Se(K(h)[K(h).length - 1], e.wrapAroundElements), Zn(K(g)[0].offsetTop), an());
                })(e),
                    xe(le.afterLoad) && !e.localIsResizing && sn("afterLoad", e),
                    le.scrollOverflow && le.scrollOverflowHandler.afterLoad(),
                    e.localIsResizing || Sn(e.element),
                    ue(e.element, f),
                    fe(Ee(e.element), f),
                    hn(),
                    (Xe = !0),
                    xe(e.callback) && e.callback();
            }
            function pn(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t);
            }
            function hn() {
                var e = K(w)[0] || (Dt() && K(y)[0]);
                le.lazyLoading &&
                    e &&
                    K(h + ":not(" + u + ")").forEach(function (e) {
                        var t, n, o;
                        (t = e.getBoundingClientRect()), (n = t.top), (o = t.bottom), ((n + 2 < We && n > 0) || (o > 2 && o < We)) && gn(e);
                    });
            }
            function gn(e) {
                le.lazyLoading &&
                    K("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", yn(e)).forEach(function (t) {
                        if (
                            (["src", "srcset"].forEach(function (n) {
                                var o = t.getAttribute("data-" + n);
                                null != o &&
                                    o &&
                                    (pn(t, n),
                                    t.addEventListener("load", function () {
                                        mn(e);
                                    }));
                            }),
                            Te(t, "source"))
                        ) {
                            var n = me(t, "video, audio");
                            n &&
                                (n.load(),
                                (n.onloadeddata = function () {
                                    mn(e);
                                }));
                        }
                    });
            }
            function mn(e) {
                le.scrollOverflow &&
                    (clearTimeout(st),
                    (st = setTimeout(function () {
                        $e.createScrollBar(e);
                    }, 200)));
            }
            function Sn(e) {
                var t = yn(e);
                K("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play();
                }),
                    K('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        e.hasAttribute("data-autoplay") && bn(e),
                            (e.onload = function () {
                                e.hasAttribute("data-autoplay") && bn(e);
                            });
                    });
            }
            function bn(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            }
            function wn(e) {
                var t = yn(e);
                K("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause();
                }),
                    K('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    });
            }
            function yn(e) {
                var t = K(H, e);
                return t.length && (e = t[0]), e;
            }
            function En() {
                var e = xn(),
                    t = e.section,
                    n = e.slide;
                t && (le.animateAnchor ? Xn(t, n) : Rt(t, n));
            }
            function Ln() {
                if (!pt && !le.lockAnchors) {
                    var e = xn(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === Be,
                        r = void 0 === Be && void 0 === n && !je;
                    t && t.length && ((t && t !== Be && !o) || r || (!je && Re != n)) && Xn(t, n);
                }
            }
            function xn() {
                var t,
                    n,
                    o = e.location.hash;
                if (o.length) {
                    var r = o.replace("#", "").split("/"),
                        i = o.indexOf("#/") > -1;
                    t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                    var l = i ? r[2] : r[1];
                    l && l.length && (n = decodeURIComponent(l));
                }
                return { section: t, slide: n };
            }
            function An(e) {
                clearTimeout(tt);
                var n = t.activeElement,
                    o = e.keyCode;
                9 === o
                    ? (function (e) {
                          var n = e.shiftKey,
                              o = t.activeElement,
                              r = Mn(yn(K(g)[0]));
                          function i(e) {
                              return Le(e), r[0] ? r[0].focus() : null;
                          }
                          (function (e) {
                              var n = Mn(t),
                                  o = n.indexOf(t.activeElement),
                                  r = e.shiftKey ? o - 1 : o + 1,
                                  i = n[r],
                                  l = fn(me(i, C)),
                                  a = un(me(i, h));
                              return !l && !a;
                          })(e) || (o ? null == me(o, g + "," + g + " " + H) && (o = i(e)) : i(e), ((!n && o == r[r.length - 1]) || (n && o == r[0])) && Le(e));
                      })(e)
                    : Te(n, "textarea") ||
                      Te(n, "input") ||
                      Te(n, "select") ||
                      "true" === n.getAttribute("contentEditable") ||
                      "" === n.getAttribute("contentEditable") ||
                      !le.keyboardScrolling ||
                      !le.autoScrolling ||
                      ([40, 38, 32, 33, 34].indexOf(o) > -1 && Le(e),
                      (Ne = e.ctrlKey),
                      (tt = setTimeout(function () {
                          !(function (e) {
                              var n = e.shiftKey,
                                  o = t.activeElement,
                                  r = Te(o, "video") || Te(o, "audio");
                              if (Xe || !([37, 39].indexOf(e.keyCode) < 0))
                                  switch (e.keyCode) {
                                      case 38:
                                      case 33:
                                          Ke.k.up && It();
                                          break;
                                      case 32:
                                          if (n && Ke.k.up && !r) {
                                              It();
                                              break;
                                          }
                                      case 40:
                                      case 34:
                                          Ke.k.down && ((32 === e.keyCode && r) || Bt());
                                          break;
                                      case 36:
                                          Ke.k.up && Nt(1);
                                          break;
                                      case 35:
                                          Ke.k.down && Nt(K(h).length);
                                          break;
                                      case 37:
                                          Ke.k.left && jt();
                                          break;
                                      case 39:
                                          Ke.k.right && zt();
                                  }
                          })(e);
                      }, 150)));
            }
            function Tn(e) {
                Ue && (Ne = e.ctrlKey);
            }
            function kn(e) {
                2 == e.which && ((Et = e.pageY), Ve.addEventListener("mousemove", Hn));
            }
            function On(e) {
                2 == e.which && Ve.removeEventListener("mousemove", Hn);
            }
            function Mn(e) {
                return [].slice.call(K(it, e)).filter(function (e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
                });
            }
            function Cn() {
                (Ue = !1), (Ne = !1);
            }
            function Hn(e) {
                le.autoScrolling && (Xe && (e.pageY < Et && Ke.m.up ? It() : e.pageY > Et && Ke.m.down && Bt()), (Et = e.pageY));
            }
            function In(e, t, n) {
                var o,
                    r,
                    i = me(e, h),
                    l = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: { left: t.offsetLeft },
                        slideIndex: ie(t),
                        section: i,
                        sectionIndex: ie(i, h),
                        anchorLink: i.getAttribute("data-anchor"),
                        slidesNav: K(P, i)[0],
                        slideAnchor: qn(t),
                        prevSlide: K(H, i)[0],
                        prevSlideIndex: ie(K(H, i)[0]),
                        localIsResizing: Fe,
                    };
                (l.xMovement = ((o = l.prevSlideIndex), (r = l.slideIndex), o == r ? "none" : o > r ? "left" : "right")),
                    (l.direction = l.direction ? l.direction : l.xMovement),
                    l.localIsResizing || (Xe = !1),
                    le.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && xe(le.onSlideLeave) && !1 === sn("onSlideLeave", l)
                        ? (je = !1)
                        : (ue(t, s),
                          fe(Ee(t), s),
                          l.localIsResizing || (wn(l.prevSlide), gn(t)),
                          !le.loopHorizontal && le.controlArrows && (ke(K(F, i), 0 !== l.slideIndex), ke(K(X, i), null != oe(t))),
                          q(i, s) && !l.localIsResizing && Kn(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex),
                          (function (e, t, n) {
                              var o = t.destinyPos;
                              if (le.css3) {
                                  var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                                  (Ce.test.translate3dH[t.sectionIndex] = r),
                                      J(jn(K(N, e)), eo(r)),
                                      (Je = setTimeout(function () {
                                          n && Bn(t);
                                      }, le.scrollingSpeed));
                              } else
                                  (Ce.test.left[t.sectionIndex] = Math.round(o.left)),
                                      ro(e, Math.round(o.left), le.scrollingSpeed, function () {
                                          n && Bn(t);
                                      });
                          })(e, l, !0));
            }
            function Bn(e) {
                var t, n;
                (t = e.slidesNav),
                    (n = e.slideIndex),
                    le.slidesNavigation && null != t && (fe(K(u, t), s), ue(K("a", K("li", t)[n]), s)),
                    e.localIsResizing || (xe(le.afterSlideLoad) && sn("afterSlideLoad", e), (Xe = !0), Sn(e.destiny)),
                    (je = !1);
            }
            function Rn() {
                clearTimeout(qe),
                    (qe = setTimeout(function () {
                        for (var e = 0; e < 4; e++) Qe = setTimeout(Nn, 200 * e);
                    }, 200));
            }
            function Nn() {
                if ((zn(), Pe)) {
                    var e = t.activeElement;
                    if (!Te(e, "textarea") && !Te(e, "input") && !Te(e, "select")) {
                        var n = Q();
                        Math.abs(n - Lt) > (20 * Math.max(Lt, n)) / 100 && (Pt(!0), (Lt = n));
                    }
                } else Ut();
            }
            function zn() {
                var t = le.responsive || le.responsiveWidth,
                    n = le.responsiveHeight,
                    o = t && e.innerWidth < t,
                    r = n && e.innerHeight < n;
                t && n ? Vt(o || r) : t ? Vt(o) : n && Vt(r);
            }
            function jn(e) {
                var t = "all " + le.scrollingSpeed + "ms " + le.easingcss3;
                return fe(e, i), J(e, { "-webkit-transition": t, transition: t });
            }
            function Pn(e) {
                return ue(e, i);
            }
            function Dn(e, t) {
                var n;
                (n = e),
                    K(le.menu).forEach(function (e) {
                        le.menu && null != e && (fe(K(u, e), s), ue(K('[data-menuanchor="' + n + '"]', e), s));
                    }),
                    (function (e, t) {
                        le.navigation && null != K(x)[0] && (fe(K(u, K(x)[0]), s), ue(e ? K('a[href="#' + e + '"]', K(x)[0]) : K("a", K("li", K(x)[0])[t]), s));
                    })(e, t);
            }
            function Vn(e) {
                var t = ie(K(g)[0], h),
                    n = ie(e, h);
                return t == n ? "none" : t > n ? "up" : "down";
            }
            function Wn(e) {
                if (!q(e, z)) {
                    var n = t.createElement("div");
                    (n.className = m), (n.style.height = Yn(e) + "px"), ue(e, z), he(e, n);
                }
            }
            function Yn(e) {
                var t = We;
                if (le.paddingTop || le.paddingBottom) {
                    var n = e;
                    q(n, p) || (n = me(e, h));
                    var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                    t = We - o;
                }
                return t;
            }
            function Fn(e, t) {
                t ? jn(Ve) : Pn(Ve),
                    J(Ve, eo(e)),
                    (Ce.test.translate3d = e),
                    setTimeout(function () {
                        fe(Ve, i);
                    }, 10);
            }
            function Un(e) {
                var t = K(h + '[data-anchor="' + e + '"]', Ve)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = K(h)[n];
                }
                return t;
            }
            function Xn(e, t) {
                var n = Un(e);
                if (null != n) {
                    var o = (function (e, t) {
                        var n = K(C + '[data-anchor="' + e + '"]', t)[0];
                        return null == n && ((e = void 0 !== e ? e : 0), (n = K(C, t)[e])), n;
                    })(t, n);
                    qn(n) === Be || q(n, s)
                        ? _n(o)
                        : cn(n, function () {
                              _n(o);
                          });
                }
            }
            function _n(e) {
                null != e && In(me(e, B), e);
            }
            function Kn(e, t, n, o) {
                var r = "";
                le.anchors.length && !le.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), (Re = t), $n(r + "/" + t)) : null != e ? ((Re = t), $n(n)) : $n(n)), Qn();
            }
            function $n(t) {
                if (le.recordHistory) location.hash = t;
                else if (Pe || De) e.history.replaceState(void 0, void 0, "#" + t);
                else {
                    var n = e.location.href.split("#")[0];
                    e.location.replace(n + "#" + t);
                }
            }
            function qn(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = ie(e);
                return null == t && (t = n), t;
            }
            function Qn() {
                var e = K(g)[0],
                    t = K(H, e)[0],
                    n = qn(e),
                    o = qn(t),
                    r = String(n);
                t && (r += "-" + o), (r = r.replace("/", "-").replace("#", ""));
                var i = new RegExp("\\b\\s?" + c + "-[^\\s]+\\b", "g");
                (we.className = we.className.replace(i, "")), ue(we, c + "-" + r), t || "5" == n ? ue(we, "fp-slider") : fe(we, "fp-slider");
            }
            function Gn(e) {
                var t = [];
                return (
                    (t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
                    (t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
                    De && tn(e) && le.scrollBar && void 0 !== e.touches && ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                    t
                );
            }
            function Jn(e, t) {
                Tt(0, "internal"), void 0 !== t && (Fe = !0), In(me(e, B), e), void 0 !== t && (Fe = !1), Tt(ut.scrollingSpeed, "internal");
            }
            function Zn(e) {
                var t = Math.round(e);
                if (le.css3 && le.autoScrolling && !le.scrollBar) Fn("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (le.autoScrolling && !le.scrollBar) J(Ve, { top: -t + "px" }), (Ce.test.top = -t + "px");
                else {
                    var n = dn(t);
                    io(n.element, n.options);
                }
            }
            function eo(e) {
                return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
            }
            function to(e, t, n) {
                "all" !== t
                    ? (Ke[n][t] = e)
                    : Object.keys(Ke[n]).forEach(function (t) {
                          Ke[n][t] = e;
                      });
            }
            function no(e, t, n) {
                (le[e] = t), "internal" !== n && (ut[e] = t);
            }
            function oo() {
                le.licenseKey,
                    q(ve, a)
                        ? _("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                        : (le.continuousVertical && (le.loopTop || le.loopBottom) && ((le.continuousVertical = !1), _("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                          !le.scrollOverflow ||
                              (!le.scrollBar && le.autoScrolling) ||
                              _("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
                          !le.continuousVertical ||
                              (!le.scrollBar && le.autoScrolling) ||
                              ((le.continuousVertical = !1), _("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                          le.scrollOverflow && null == le.scrollOverflowHandler && ((le.scrollOverflow = !1), _("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                          vt.forEach(function (e) {
                              le[e] && _("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e);
                          }),
                          le.anchors.forEach(function (e) {
                              var t = [].slice.call(K("[name]")).filter(function (t) {
                                      return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase();
                                  }),
                                  n = [].slice.call(K("[id]")).filter(function (t) {
                                      return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase();
                                  });
                              if (n.length || t.length) {
                                  _("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                  var o = n.length ? "id" : "name";
                                  (n.length || t.length) && _("error", '"' + e + '" is is being used by another element `' + o + "` property");
                              }
                          }));
            }
            function ro(t, n, o, r) {
                var i = (function (t) {
                        return t.self != e && q(t, I) ? t.scrollLeft : !le.autoScrolling || le.scrollBar ? ye() : t.offsetTop;
                    })(t),
                    l = n - i,
                    a = 0;
                ct = !0;
                var c = function () {
                    if (ct) {
                        var s = n;
                        (a += 20), o && (s = e.fp_easings[le.easing](a, i, l, o)), io(t, s), a < o ? setTimeout(c, 20) : void 0 !== r && r();
                    } else a < o && r();
                };
                c();
            }
            function io(t, n) {
                !le.autoScrolling || le.scrollBar || (t.self != e && q(t, I)) ? (t.self != e && q(t, I) ? (t.scrollLeft = n) : t.scrollTo(0, n)) : (t.style.top = n + "px");
            }
            function lo(e, t) {
                (this.anchor = e.getAttribute("data-anchor")), (this.item = e), (this.index = ie(e, t)), (this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1), (this.isFirst = !this.index);
            }
            function ao(e) {
                lo.call(this, e, h);
            }
            function co(e) {
                lo.call(this, e, C);
            }
            oo();
        }
    );
}),
    window.jQuery &&
        window.fullpage &&
        (function (e, t) {
            "use strict";
            e && t
                ? (e.fn.fullpage = function (n) {
                      n = e.extend({}, n, { $: e });
                      new t(this[0], n);
                  })
                : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
        })(window.jQuery, window.fullpage);
