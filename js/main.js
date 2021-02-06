$(document).ready(function () {
    let e = {
        dimPercent: null,
        touchStart: 0,
        getPercent: function () {
            let t = $(window).height() / 100 / 9;
            e.dimPercent = t;
        },
        eleValue: function (e, t) {
            if (null !== $(e).css(t)) {
                let i = 1,
                    n = 1,
                    s = $(window).width() - $(window).height();
                if (
                    (window.innerWidth <= 1100 && "padding-bottom" !== t && "padding-top" !== t && "margin-top" !== t && (i = 0.8),
                    (s < 600 && s >= 350) || ($(window).width() >= 1700 && s >= 600 && s <= 800) ? (i = 0.8) : $(window).width() > 1e3 && s < 350 ? (i = 0.6) : $(window).width() <= 1e3 && s < 350 && (i = 0.7),
                    !e.hasAttribute("dim-num") || ("width" !== t && "height" !== t) || (n = Number(e.getAttribute("dim-num"))),
                    e.hasAttribute("curr" + t))
                )
                    return Number(e.getAttribute("curr" + t));
                if (!isNaN(Number($(e).css(t).replace("px", "")) * i * n)) return Number($(e).css(t).replace("px", "")) * i * n;
            }
            return null;
        },
        eleDimension: function (t, i, n) {
            let s = e.dimPercent;
            for (let o = 0; o < t.length; o++) {
                let a = [
                    ["width", e.eleValue(t[o], "width")],
                    ["height", e.eleValue(t[o], "height")],
                    ["font-size", e.eleValue(t[o], "font-size")],
                    ["padding-top", e.eleValue(t[o], "padding-top")],
                    ["padding-bottom", e.eleValue(t[o], "padding-bottom")],
                    ["top", e.eleValue(t[o], "top")],
                    ["left", e.eleValue(t[o], "left")],
                    ["right", e.eleValue(t[o], "right")],
                    ["bottom", e.eleValue(t[o], "bottom")],
                    ["margin-top", e.eleValue(t[o], "margin-top")],
                ];
                "svg" === i &&
                    (t[o].hasAttribute("currwidth") || (t[o].setAttribute("currwidth", a[0][1]), t[o].setAttribute("currheight", a[1][1])),
                    $(t[o]).hasClass("nwidth") || ((a[0][1] = Number(t[o].getAttribute("currwidth"))), t[o].setAttribute("width", s * a[0][1])),
                    $(t[o]).hasClass("nheight") || ((a[1][1] = Number(t[o].getAttribute("currheight"))), t[o].setAttribute("height", s * a[1][1])),
                    (a[0][1] = null),
                    (a[1][1] = null));
                for (let e = 0; e < n.length; e++)
                    if (null !== a[n[e]][1]) {
                        let i = "px";
                        if ((2 === n[e] && (i = "rem"), $(t[o]).hasClass(a[n[e]][0] + "-dim"))) {
                            let l = s * a[n[e]][1];
                            2 === n[e] && (l /= 16), $(t[o]).css(a[n[e]][0], l + i), t[o].hasAttribute("curr" + a[n[e]][0]) || t[o].setAttribute("curr" + a[n[e]][0], a[n[e]][1]);
                        }
                    }
                $(t[o]).hasClass("pos") &&
                    window.innerWidth > 767 &&
                    setTimeout(function () {
                        let e = $(t[o]).parent().parent().find(".txt h1"),
                            i = e[0].getBoundingClientRect().top + 0.5 * e.height() - 0.5 * $(t[o]).height(),
                            n = e[0].getBoundingClientRect().top + e.height() - $(t[o]).height(),
                            s = 0;
                        t[o].hasAttribute("add-num") && (s = Number(t[o].getAttribute("add-num"))),
                            (i += s),
                            (n += s),
                            $(t[o]).hasClass("pos-top") ? $(t[o]).css("top", i + "px") : $(t[o]).hasClass("pos-bottom") && $(t[o]).css("top", n + "px");
                    }, 2);
            }
        },
        floatingEleStyle: function (e) {
            if (window.innerWidth > 767) {
                let t = $(".floating-content .logo"),
                    i = $(".navbar-container .nav-btn a").first(),
                    n = $(".navbar-container .nav-btn a").last(),
                    s = $(".floating-content .menu-container button"),
                    o = $(".floating-content .floating-icons > .social-container"),
                    a = $(".floating-content .scroll-container"),
                    l = e.closest(".section").find(".slides-arrow button"),
                    d = [
                        ["d-logo", t],
                        ["d-navbtn1", i],
                        ["d-navbtn2", n],
                        ["w-navbtn1", i],
                        ["w-navbtn2", n],
                        ["y-navbtn1", i],
                        ["y-navbtn2", n],
                        ["w-arrow", a],
                        ["social-space", o],
                        ["social-left", o],
                        ["social-white", o],
                        ["menu-space", s],
                        ["menu-white-bg", s],
                        ["menu-yellow-bg", s],
                        ["s-nextarr", l.last()],
                        ["s-prevarr", l.first()],
                        ["next-arr-b", l.last()],
                        ["prev-arr-b", l.first()],
                        ["hide-scrollarr", a],
                    ];
                for (let t = 0; t < d.length; t++) e.hasClass(d[t][0]) && !d[t][1].hasClass(d[t][0]) ? d[t][1].addClass(d[t][0]) : !e.hasClass(d[t][0]) && d[t][1].hasClass(d[t][0]) && d[t][1].removeClass(d[t][0]);
            }
        },
        desktopSlideNavigation: function (t, i) {
            if (window.innerWidth > 767 && t.find(".slide")[0]) {
                let n,
                    s,
                    o = t.find(".slide.active");
                (n = o.next()[0] ? o.next() : $(o.parent()[0].children[0])),
                    (s = o.prev()[0] ? o.prev() : o.parent().children().last()),
                    "next" === i ? (e.floatingEleStyle(n), fullpage_api.moveSlideRight()) : (e.floatingEleStyle(s), fullpage_api.moveSlideLeft());
            }
        },
        initFloatingStyle: function (t, i) {
            let n = $(".floating-content .scroll-container");
            t.hasClass("slides-container") && (t = t.find(".slide.active")),
                e.floatingEleStyle(t, null),
                n.attr("data-scroll", i.index),
                t.hasClass("line-bar") && t.find(".line-bar-shape").hasClass("active") && n.addClass("hide-scrollarr"),
                t.hasClass("contact-section") && $("#google_map").addClass("active");
        },
        slideHeight: function (e) {
            $(window).height() >= 1e3
                ? e.addClass("extra-height")
                : window.innerWidth > 767 && $(window).height() < 1e3 && $(window).height() >= 850
                ? e.addClass("high-height")
                : window.innerWidth > 767 && $(window).height() < 850 && $(window).height() >= 790
                ? e.addClass("mid-height")
                : window.innerWidth > 767 && $(window).height() <= 750 && e.addClass("low-height");
        },
        lineAnimation: function (e, t, i, n, s) {
            let o = e.children(),
                a = e.width() / t;
            if ((0 === o.width() && i && (a = $(window).width() / t), s)) return a;
            n ? o.css("width", o.width() + a) : o.css("width", o.width() - a);
        },
        slideDirection: ["left", null],
        slideLength: { blog: 0, feedback: 0 },
    };
    function t() {
        if (window.innerWidth > 767)
            e.getPercent(),
                $(".floating-content").hasClass("fixed") || $(".floating-content").css({ height: $(window).height() + "px" }),
                (function () {
                    let t = document.querySelectorAll(".section svg"),
                        i = document.querySelectorAll(".eledim");
                    e.eleDimension(t, "svg", [0, 1, 4, 5, 6]), e.eleDimension(i, "ele", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                })(),
                a(),
                l(),
                d(),
                r(),
                c(),
                h(),
                g();
        else {
            $(".home-section .side-shape .shape1").css("height", 109.6 + $(".home-section .description").height() + "px");
            let e = $(".about-section .heading").height() + $(".about-section .description").height();
            e > 196 ? $(".about-section .side-shape .shape7").css("height", 0.582 * (310 + e) + "px") : $(".about-section .side-shape .shape7").css("height", "310px");
        }
    }
    window.innerWidth > 767 &&
        $("#fullpage")[0] &&
        ($("#fullpage").fullpage({
            controlArrows: !1,
            onLeave: function (t, i) {
                e.initFloatingStyle($(i.item), i);
            },
            onSlideLeave: function (t, i, n, s) {
                if ($(".section.active").hasClass("blog-section")) {
                    let t = $(".section.blog-section"),
                        i = t.find(".shapes .bottom-shape .shape2"),
                        o = e.slideLength.blog,
                        a = t.find(".shapes .bottom-shape .shape2"),
                        l = t.find(".description.owl-carousel"),
                        d = $(".floating-content .scroll-container");
                    "right" === s
                        ? n.index > 0
                            ? (a.addClass("active"), l.trigger("next.owl.carousel"), e.lineAnimation(i, o, !0, !0, !1), t.hasClass("solo-section") || d.addClass("hide-scrollarr"))
                            : (a.children().css("width", e.lineAnimation(i, o, !0, !0, !0)), a.removeClass("active"), l.trigger("to.owl.carousel", 0), d.removeClass("hide-scrollarr"))
                        : n.isLast
                        ? (l.trigger("to.owl.carousel", n.index), a.children().css("width", e.lineAnimation(i, o, !0, !0, !0) * (n.index + 1)), a.addClass("active"), t.hasClass("solo-section") || d.addClass("hide-scrollarr"))
                        : (l.trigger("prev.owl.carousel"), e.lineAnimation(i, o, !0, !1, !1), n.isFirst && a.removeClass("active"));
                } else {
                    let i = $($(t.item).find(".fp-slidesContainer")[0].children[n.index]);
                    e.floatingEleStyle(i);
                }
            },
        }),
        e.initFloatingStyle($(".section.active"), { index: 0 })),
        $("body").addClass("ready"),
        t(),
        $(window).on("resize", t),
        window.innerWidth <= 767 && (a(), l(), d(), r(), c(), h(), g());
    let i = $(".floating-content .menu-container button"),
        n = $(".floating-content .menu-navbar-container"),
        s = n.find(".main-links"),
        o = $(".floating-content .menu-navbar-container .close-btn button");
    function a() {
        document.querySelector(".section.services-section") &&
            (window.innerWidth > 767 && $(window).height() >= 780
                ? ($(".services-section .panel-container:nth-child(1)").css("padding-top", "83px"), $(".services-section .panel-container:nth-child(2)").css("padding-top", "30px"))
                : window.innerWidth > 767 && ($(".services-section .panel-container:nth-child(1)").css("padding-top", "53px"), $(".services-section .panel-container:nth-child(2)").css("padding-top", "10px")));
    }
    function l() {
        if (window.innerWidth > 767 && document.querySelector(".section.transition-section")) {
            let t = $(".section.transition-section"),
                i = t.find(".project-head"),
                n = $(window).width() - $(window).height(),
                s = 4;
            if (
                ((($(window).height() <= 900 && n <= 800) || ($(window).height() >= 900 && n <= 800)) && (i.addClass("eledim font-size-dim"), e.eleDimension(i, "ele", [2])),
                $(window).height() <= 710 ? t.hasClass("btm-space") || t.addClass("btm-space") : t.hasClass("btm-space") && t.removeClass("btm-space"),
                t.find(".transition-slide")[0])
            ) {
                let e = t.find(".bottom-txt .inner-txt:first-child"),
                    i = e.height() - Number(e.find(".shape2").css("height").replace("px", "")),
                    n = Number(e.find(".shape2").css("height").replace("px", "")),
                    o = e.find(".shape3"),
                    a = e.find(".shape2")[0].getBoundingClientRect().top - t[0].getBoundingClientRect().top;
                window.innerWidth <= 1199 && (s = 18), o.css({ top: i + e.height() - 4 + "px", height: window.innerHeight - (a + n) + s + "px" });
            }
            let o = t.find(".project1"),
                a = t.find(".project-arrow"),
                l = o.find(".slide-heading svg")[0].getBoundingClientRect().top - t[0].getBoundingClientRect().top,
                d = t.find(".project2 .slide-heading .note").height() + 5,
                r = t.find(".project:not(.project1) .side-shape .shape1"),
                c = t.find(".project2 .slide-heading"),
                h = t.find(".project .slide-heading.extra-top"),
                g = t.find(".img-top");
            t.find(".prev-work-link").on("click", function () {
                e.desktopSlideNavigation(t, "next");
            }),
                a.find(".next-arrow").on("click", function () {
                    e.desktopSlideNavigation(t, "next");
                }),
                a.find(".prev-arrow").on("click", function () {
                    e.desktopSlideNavigation(t, "prev");
                }),
                r.css("top", l + "px"),
                c.css("margin-top", l - d + "px"),
                h.css("margin-top", l + r.height() + 50),
                g.each(function () {
                    $(this).css("margin-top", l - 0.5 * $(this).height() + 0.5 * r.height());
                });
        } else if (window.innerWidth <= 767 && document.querySelector(".section.transition-section")) {
            let e = $(".section.transition-section"),
                t = e.find(".project:not(.project1)"),
                i = e.find(".project-arrow button.next-arrow"),
                n = e.find(".project-arrow button.prev-arrow");
            t.wrapAll('<div class="project-container owl-carousel"></div>');
            let s = $(".section.transition-section .project-container");
            s.owlCarousel({ dots: !0, nav: !1, items: 1, smartSpeed: 500 }),
                i.on("click", function () {
                    s.trigger("next.owl.carousel");
                }),
                n.on("click", function () {
                    s.trigger("prev.owl.carousel");
                }),
                e.hasClass("solo-section") && ($(".floating-content .logo h1").css("color", "#000"), $(".shape-mob")[0] && e.find(".shape-mob").css("height", s.height() - 53 + "px"));
        }
    }
    function d(t = !1) {
        let i = 1 == t ? ".floating-content " : "";
        if ($(".section.blog-section")[0]) {
            let t = $(i + ".section.blog-section"),
                s = t.find(".description.owl-carousel"),
                o = t.find(".slides-arrow .next-arrow"),
                a = t.find(".slides-arrow .prev-arrow"),
                l = $(".floating-content .scroll-container"),
                d = s.find(".next-arr"),
                r = s.find(".prev-arr"),
                c = t.find(".shapes .bottom-shape .shape2"),
                h = 0,
                g = s.children().length;
            if (
                (window.innerWidth > 767 && (h = 20),
                (e.slideLength.blog = g),
                s.owlCarousel({ nav: !1, mouseDrag: !1, items: 1, center: !0, margin: h, responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } } }),
                e.lineAnimation(c, g, !0, !0, !1),
                t.hasClass("solo-section") && (s.trigger("refresh.owl.carousel"), $(".floating-content .logo").addClass("d-logo"), window.innerWidth <= 767))
            ) {
                let e = $(window);
                e.height() < $("body").height() && (e = $("body")), t.find(".shapes .top-shape .shape3").css("min-height", e.height() - 110 + "px"), t.find(".content").css("min-height", e.height() + "px");
            }
            let f = s.find(".owl-item");
            if (
                (f.first().addClass("show-des"),
                o.on("click", function () {
                    n(!0);
                }),
                d.on("click", function () {
                    n(!0);
                }),
                a.on("click", function () {
                    n(!1);
                }),
                r.on("click", function () {
                    n(!1);
                }),
                window.innerWidth > 767)
            ) {
                s.on("changed.owl.carousel", function (e) {
                    0 === e.item.index && (t.hasClass("solo-section") || l.removeClass("hide-scrollarr"), c.removeClass("active")), f.removeClass("show-des"), $(f[e.item.index]).addClass("show-des");
                });
                let e = t.find(".side-shape .shape1")[0].getBoundingClientRect().top,
                    i = t[0].getBoundingClientRect().top,
                    n = t.find(".content .heading"),
                    o = n.find(".blog-heading").height() + 10;
                n.css("padding-top", e - i - o), n.css("height", e - i - 25);
            }
            let w = s.find(".bg");
            if (window.innerWidth > 767 && $(window).height() <= 785 && $(window).height() > 710) {
                let t = s.find(".bg");
                t.attr("currheight", 250), e.eleDimension(t, "ele", [1]);
            } else window.innerWidth > 767 && $(window).height() <= 710 && (t.addClass("mid-height"), w.attr("currheight", 235), e.eleDimension(w, "ele", [1]));
            function n(i) {
                i
                    ? window.innerWidth > 767 && t.find(".slide.active").next()[0]
                        ? ((e.slideDirection[0] = "left"), (e.slideDirection[1] = s), fullpage_api.moveSlideRight(), t.hasClass("solo-section") || l.addClass("hide-scrollarr"), c.addClass("active"))
                        : window.innerWidth <= 767 && s.trigger("next.owl.carousel")
                    : window.innerWidth > 767 && t.find(".slide.active").prev()[0]
                    ? ((e.slideDirection[0] = "right"), (e.slideDirection[1] = s), fullpage_api.moveSlideLeft())
                    : window.innerWidth <= 767 && s.trigger("prev.owl.carousel");
            }
        }
    }
    function r() {
        if ($(".section.feedback-section")[0]) {
            let i = $($(".section.feedback-section")),
                n = i.find(".owl-carousel"),
                s = i.find(".next-arrow"),
                o = i.find(".prev-arrow"),
                a = $(".floating-content .scroll-container"),
                l = i.find(".shapes .bottom-shape .shape1"),
                d = i.find(".line-bar"),
                r = i.find(".line-bar-shape"),
                c = !1,
                h = n.children().length;
            if (window.innerWidth <= 767 && i.hasClass("about-us-section")) {
                c = !0;
                let e = i.find(".slide4-txt");
                e.closest(".content")[0].insertBefore(e[0], e.parent().parent().parent().next()[0]);
            }
            if (((e.slideLength.feedback = h), n.owlCarousel({ nav: !1, items: 1, mouseDrag: !1, smartSpeed: 500, autoHeight: c }), i.hasClass("about-us-section"))) {
                e.floatingEleStyle(i.find(".owl-item.active .inner-content"));
                let t = i.find(".slide-txt-content .innerslide-txt-content"),
                    s = i.find(".slide-heading .line-shape"),
                    o = [];
                if (
                    ($(window).width() > 767 &&
                        ((h = i.find(".fb-slide").length),
                        (e.slideLength.feedback = h),
                        e.lineAnimation(d, h, !1, !0, !1),
                        t.each(function () {
                            o.push($(this).height());
                        }),
                        setTimeout(function () {
                            i.find(".fb-slide").css("padding-top", s[0].getBoundingClientRect().top);
                        }, 10),
                        t.css("min-height", Math.max(...o))),
                    i.find(".slide-btn-slide1 button").on("click", function () {
                        let t = Array.prototype.slice.call($(this).parent()[0].children).indexOf($(this)[0]) + 1;
                        window.innerWidth <= 767 && 4 === t && (t += 1), n.trigger("to.owl.carousel", t);
                        let s = i.find(".owl-item.active .inner-content");
                        e.floatingEleStyle(s),
                            window.innerWidth > 767 && s.hasClass("fb-slide") && i.find(".feedback-arrow").addClass("d-none"),
                            window.innerWidth <= 767 && s.hasClass("w-next-arr") ? $(".slides-arrow .next-arrow").addClass("w-next-arr") : window.innerWidth <= 767 && $(".slides-arrow .next-arrow").removeClass("w-next-arr");
                    }),
                    i.find(".nextSlideBtn").on("click", function () {
                        n.trigger("next.owl.carousel");
                        let t = i.find(".owl-item.active .inner-content");
                        e.floatingEleStyle(t), t.hasClass("fb-slide") && d.addClass("active");
                    }),
                    i.find(".prevSlideBtn").on("click", function () {
                        n.trigger("prev.owl.carousel");
                        let t = i.find(".owl-item.active .inner-content");
                        e.floatingEleStyle(t);
                    }),
                    window.innerWidth <= 767)
                ) {
                    $(".floating-content .logo").addClass("d-logo");
                    let e = i.find(".fb-slide");
                    if (e.length > 1) {
                        let t = e.length - 1,
                            n = i.find(".owl-dots")[0].children;
                        for (let e = t; e > 0; e--)
                            $(n[n.length - e]).addClass("d-none"),
                                e === t &&
                                    $(n[n.length - e])
                                        .prev()
                                        .addClass("last-dot");
                    }
                }
            } else e.lineAnimation(r, h, !0, !0, !1);
            function t() {
                if (i.hasClass("feedback-section")) {
                    let n = i.find(".owl-item.active .inner-content").attr("data-slide");
                    n = null == n ? "" : "-" + n;
                    var e = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g"),
                        t = $("body").attr("class").replace(e, "");
                    $("body").attr("class", t), $("body").addClass("fp-viewing-5" + n);
                }
            }
            s.on("click", function () {
                if (window.innerWidth <= 767 && $(this).hasClass("top-arrow")) $(".owl-dot.active.last-dot")[0] && $(".owl-dot.active.last-dot").addClass("black-dot"), n.trigger("next.owl.carousel");
                else if (
                    !(window.innerWidth <= 767 && i.hasClass("about-us-section") && i.find(".owl-item.active .inner-content.fb-slide")[0]) &&
                    ($(".owl-dot.black-dot")[0] && $(".owl-dot.black-dot").removeClass("black-dot"),
                    i.hasClass("about-us-section") && (r = d),
                    e.lineAnimation(r, e.slideLength.feedback, !0, !0, !1),
                    n.trigger("next.owl.carousel"),
                    t(),
                    a.addClass("hide-scrollarr"),
                    i.hasClass("about-us-section"))
                ) {
                    let t = i.find(".owl-item.active .inner-content");
                    e.floatingEleStyle(t),
                        t.hasClass("fb-slide") && !t.hasClass("fb1") ? d.addClass("active2") : t.hasClass("fb-slide") && d.removeClass("active2"),
                        window.innerWidth <= 767 && t.hasClass("w-next-arr") ? $(".slides-arrow .next-arrow").addClass("w-next-arr") : window.innerWidth <= 767 && $(".slides-arrow .next-arrow").removeClass("w-next-arr");
                }
            }),
                o.on("click", function () {
                    if (window.innerWidth <= 767 && $(this).hasClass("top-arrow")) n.trigger("prev.owl.carousel");
                    else if (window.innerWidth <= 767 && i.hasClass("about-us-section") && i.find(".owl-item.active .inner-content.fb-slide:not(.fb1)")[0]) {
                        let e = Array.prototype.slice.call(i.find(".owl-stage").children()).indexOf(i.find(".fb1").parent().prev()[0]);
                        n.trigger("to.owl.carousel", e);
                    } else if (
                        (i.hasClass("about-us-section") && (r = d),
                        (!i.find(".owl-item.active .inner-content").closest(".owl-item").prev().find(".inner-content").hasClass("fb-slide") && i.hasClass("about-us-section")) || e.lineAnimation(r, e.slideLength.feedback, !0, !1, !1),
                        n.trigger("prev.owl.carousel"),
                        t(),
                        i.hasClass("about-us-section"))
                    ) {
                        let t = i.find(".owl-item.active .inner-content");
                        e.floatingEleStyle(t),
                            t.hasClass("fb-slide") || d.removeClass("active"),
                            t.hasClass("fb-slide") && !t.hasClass("fb1") ? d.addClass("active2") : t.hasClass("fb-slide") && d.removeClass("active2"),
                            window.innerWidth <= 767 && t.hasClass("w-next-arr") ? $(".slides-arrow .next-arrow").addClass("w-next-arr") : window.innerWidth <= 767 && $(".slides-arrow .next-arrow").removeClass("w-next-arr");
                    }
                }),
                window.innerWidth > 767 &&
                    (i.removeClass("s-prevarr"),
                    document.addEventListener("keydown", function (t) {
                        if (document.querySelector(".section.active.feedback-section")) {
                            let s,
                                o,
                                a = Array.prototype.slice.call(n.find(".owl-item")).indexOf(n.find(".owl-item.active")[0]);
                            "39" == t.code || "ArrowRight" == t.code
                                ? (n.trigger("next.owl.carousel"),
                                  (o = (s = i.find(".owl-item.active .inner-content")).closest(".owl-item").prev().find(".inner-content")),
                                  i.hasClass("about-us-section") || n.find(".owl-item").length - 1 === a
                                      ? i.hasClass("about-us-section") && s.hasClass("fb-slide") && !o.hasClass("fb-slide")
                                          ? d.children().css("width", e.lineAnimation(d, e.slideLength.feedback, !0, !0, !0))
                                          : i.hasClass("about-us-section") && s.hasClass("fb-slide") && o.hasClass("fb-slide") && n.find(".owl-item").length - 1 !== a && e.lineAnimation(d, e.slideLength.feedback, !0, !0, !1)
                                      : e.lineAnimation(r, e.slideLength.feedback, !0, !0, !1))
                                : (37 != t.code && "ArrowLeft" != t.code) ||
                                  (n.trigger("prev.owl.carousel"),
                                  (o = (s = i.find(".owl-item.active .inner-content")).closest(".owl-item").prev().find(".inner-content")),
                                  i.hasClass("about-us-section") || 0 === a
                                      ? i.hasClass("about-us-section") && s.hasClass("fb-slide")
                                          ? e.lineAnimation(d, e.slideLength.feedback, !0, !1, !1)
                                          : i.hasClass("about-us-section") && !s.hasClass("fb-slide") && d.removeClass("active")
                                      : e.lineAnimation(r, e.slideLength.feedback, !0, !1, !1)),
                                i.hasClass("about-us-section") && ((s = i.find(".owl-item.active .inner-content")), e.floatingEleStyle(s));
                        }
                    })),
                n.on("translated.owl.carousel", function () {
                    window.innerWidth <= 767 && i.hasClass("about-us-section")
                        ? n.trigger("refresh.owl.carousel")
                        : window.innerWidth > 767 &&
                          i.hasClass("about-us-section") &&
                          i.find(".owl-item.active .inner-content").hasClass("fb-slide") &&
                          (i.find(".feedback-arrow").removeClass("d-none"), i.find(".line-bar").addClass("active"));
                }),
                n.on("changed.owl.carousel", function (e) {
                    i.hasClass("hide-scrollarr") || (e.item.index >= 1 ? a.hasClass("hide-scrollarr") || (a.addClass("hide-scrollarr"), l.addClass("active")) : (a.removeClass("hide-scrollarr"), l.removeClass("active"))),
                        i.hasClass("about-us-section")
                            ? window.innerWidth <= 767 && !i.find(".owl-item.active .inner-content").hasClass("fb-slide") && $(".owl-dot.black-dot")[0] && $(".owl-dot.black-dot").removeClass("black-dot")
                            : (e.item.count === e.item.index + 1 ? (i.removeClass("s-nextarr"), s.removeClass("s-nextarr")) : (i.addClass("s-nextarr"), s.addClass("s-nextarr")),
                              0 !== e.item.index ? (i.addClass("s-prevarr"), o.addClass("s-prevarr")) : (i.removeClass("s-prevarr"), o.removeClass("s-prevarr")));
                });
        }
    }
    function c() {
        if ($(".section.contact-section")[0]) {
            let e = $(".section.contact-section"),
                t = e.find(".owl-carousel"),
                i = e.find(".category-container button"),
                n = e.find("form .form-control"),
                s = e.find(".msg-container label span"),
                o = e.find(".prev-arrow"),
                a = e.find(".top-shape .shape1");
            t.owlCarousel({ items: 1, mouseDrag: !1, smartSpeed: 500, nav: !1, dots: !1 }),
                i.first().addClass("active"),
                i.on("click", function () {
                    t.trigger("next.owl.carousel"),
                        window.innerWidth <= 767 && (t.find(".owl-item").first().css("display", "none"), t.find(".owl-item").last().css("float", "right")),
                        $(this).hasClass("active") || (i.removeClass("active"), $(this).addClass("active"));
                }),
                o.on("click", function () {
                    t.trigger("prev.owl.carousel"), window.innerWidth <= 767 && (t.find(".owl-item").first().css("display", "block"), t.find(".owl-item").last().css("float", "left"));
                }),
                window.innerWidth > 767
                    ? setTimeout(function () {
                          let t = e.find(".heading"),
                              i = Number(t.css("margin-top").replace("px", ""));
                          $(window).width() - $(window).height() <= 450 && t.css("margin-top", i + 0.45 * i);
                          let n = e.find(".map-container"),
                              s = n[0].getBoundingClientRect().top,
                              o = e.find(".bottom-shape .shape2"),
                              l = o[0].getBoundingClientRect().top;
                          a.css("height", "calc(100% - " + (e[0].getBoundingClientRect().height - 65) + "px)"), n.css("height", l - s + 0.5 * o.height() + "px");
                      }, 100)
                    : window.innerWidth <= 767 && e.hasClass("solo-section") && ($(".floating-content .logo").addClass("d-logo"), $(".floating-content .menu-container button").addClass("menu-white-bg"));
            let l = [],
                d = 0;
            n.on("input", function () {
                if (
                    ("" === $(this).val()
                        ? ($(this).parent().removeClass("active"), "message" === $(this)[0].id && s.text(":"))
                        : $(this).parent().hasClass("active") || "" === $(this).val() || ($(this).parent().addClass("active"), "message" === $(this)[0].id && s.text(",")),
                    "message" === $(this)[0].id)
                )
                    if ($(this)[0].scrollHeight > $(this).height() + 10) l.push($(this).val().length), (d = $(this)[0].scrollHeight - ($(this).height() + 10)), $(this).css("height", $(this)[0].scrollHeight + "px");
                    else {
                        let e = $(this).val().length;
                        if (e <= 5 && l.length > 1) (d *= l.length), $(this).css("height", $(this)[0].scrollHeight - d + "px");
                        else for (let t = 0; t < l.length; t++) e < l[t] && (l.splice(t, 1), $(this).css("height", $(this)[0].scrollHeight - d + "px"));
                    }
            }),
                window.innerWidth > 767 && $(window).height() <= 765 && $(window).height() > 700 ? e.addClass("mid-height") : window.innerWidth > 767 && $(window).height() <= 700 && e.addClass("mid-height2");
        }
    }
    function h() {
        if ($(".section-container > .about-container")[0]) {
            let e = $(".section-container > .about-container"),
                t = $(".section-container > .feedback-container");
            if (window.innerWidth > 767) {
                let i = e.find(".shape1"),
                    n = e.find(".shape2"),
                    s = $(".floating-icons .menu-container button")[0],
                    o = e.find(".description")[0],
                    a = s.getBoundingClientRect().top,
                    l = o.getBoundingClientRect().bottom,
                    d = $(window).scrollTop(),
                    r = Math.abs(d + l),
                    c = t.find(".heading h1 span:not(.txt-line-right)"),
                    h = t.find(".heading h1 span.txt-line-right"),
                    g = t.find(".description")[0].getBoundingClientRect().left,
                    f = t.find(".project-pic"),
                    w = -1 * Number(f.css("top").replace("px", ""));
                l < 0 && (r = Math.abs(d - Math.abs(l))),
                    window.innerWidth <= 1100 && (r -= 30),
                    i.css("top", a - 73 + "px"),
                    n.css("top", r - 59 + "px"),
                    c.css("margin-right", g + "px"),
                    h.css("padding-right", g + "px"),
                    t.css("padding-bottom", f.height() - (t.height() + w) + "px");
            } else {
                let e = t.find(".mob-line-txt"),
                    i = t.find(".mob-line"),
                    n = t.find(".heading")[0].getBoundingClientRect().top;
                for (let t = 0; t < e.length; t++) {
                    let s = e[t].getBoundingClientRect().right,
                        o = e[t].getBoundingClientRect().top - n + 0.5 * $(e[t]).height();
                    (o -= 0.5 * $(i[t]).height()), $(i[t]).css({ width: s + 5, top: o });
                }
            }
        }
    }
    function g() {
        if ($(".wrapper.blog-detail")[0]) {
            let e = $(".blog-detail"),
                t = e.find(".owl-carousel"),
                i = e.find(".next-arrow"),
                n = e.find(".prev-arrow"),
                s = e.find(".top-blog-container"),
                o = e.find(".bottom-blog-container");
            if (
                (t.owlCarousel({ items: 1, mouseDrag: !1, smartSpeed: 500, nav: !1, dots: !1, autoHeight: !0 }),
                i.on("click", function () {
                    t.trigger("next.owl.carousel");
                }),
                n.on("click", function () {
                    t.trigger("prev.owl.carousel");
                }),
                window.innerWidth > 767)
            ) {
                let e = 0.8,
                    t = 0,
                    i = o.find(".shape2"),
                    n = o.find(".btm-blog-bg"),
                    a = 0.75 * (i[0].getBoundingClientRect().top - o[0].getBoundingClientRect().top + i.height());
                window.innerWidth >= 1900 ? (e = 0.7) : window.innerWidth <= 1150 && (t = 25),
                    window.innerWidth <= 1070 && (e = 1.7),
                    s.each(function () {
                        let t = $(this)[0].getBoundingClientRect().top,
                            i = $(this).find(".heading h1")[0].getBoundingClientRect().top;
                        $(this)
                            .find(".top-blog-bg")
                            .css("top", i - t + $(this).find(".heading h1").height() * e);
                    }),
                    n.css("top", a + t);
            }
        }
    }
    i.on("click", function () {
        n.fadeIn("fast"), window.innerWidth > 767 && $("#fullpage")[0] ? $.fn.fullpage.setAllowScrolling(!1) : $("body").css("overflow", "hidden");
    }),
        o.on("click", function () {
            n.fadeOut("fast"), s.removeAttr("style"), window.innerWidth > 767 && $("#fullpage")[0] ? $.fn.fullpage.setAllowScrolling(!0) : $("body").css("overflow", "auto");
        }),
        window.innerWidth <= 767 &&
            $(".go-top")[0] &&
            $(".go-top").on("click", function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }),
        $(".section").each(function () {
            e.slideHeight($(this));
        }),
        setTimeout(function () {
            $(".loader").fadeOut(500, function () {
                $(this).remove();
            });
        }, 200),
        (function () {
            let e = $(".partner-icons"),
                t = e.find(".owl-carousel"),
                i = e.find(".next-arrow"),
                n = e.find(".prev-arrow");
            t.owlCarousel({ items: 1, mouseDrag: !0, smartSpeed: 500, nav: !1, dots: !0, autoHeight: !0 }),
                i.on("click", function () {
                    t.trigger("next.owl.carousel");
                }),
                n.on("click", function () {
                    t.trigger("prev.owl.carousel");
                });
        })(),
        $(".articles-icon").on("click", function () {
            $("body.article-iframe-on").length > 0
                ? ($(".floating-content #article-display").fadeOut(500, function () {
                      $(".floating-content #article-display").addClass("hidden");
                  }),
                  $("body").removeClass("article-iframe-on"))
                : ($(".floating-content #article-display.hidden").length > 0
                      ? ($(".floating-content #article-display").removeClass("hidden"), $(".floating-content #article-display").fadeIn(500))
                      : $("<iframe id='article-display' src='http://hadarc.com/project/blog-frame'></iframe>").appendTo(".floating-content"),
                  $("body").addClass("article-iframe-on"));
        }),
        setTimeout(function e() {
            let t = $(".project.active .project-img.active, .owl-item.active .project-img.active"),
                i = "";
            (i = t.is(":last-child") ? t.parent().find(".project-img:first-child") : t.next()).fadeIn(2e3, function () {
                t.fadeOut(2e3, function () {
                    t.removeClass("active");
                }),
                    i.addClass("active");
            }),
                setTimeout(e, 1e4);
        }, 1e4),
        $(".slide-inner-content").on("click", ".project-img", function () {
            let e = $(this).parent();
            (e = e.hasClass("slide-img") ? e.parent() : e).hasClass("clicked")
                ? (e.removeClass("clicked"), $("body").removeClass("expand-lock"))
                : $(".is-mobile").is(":visible")
                ? (function (e) {
                      let t = e.match(/\((.*)\)/)[1],
                          i = "http://hadarc.com/project/" + (t = t.replaceAll('"', ""));
                      window.open(i, "_blank").focus();
                  })($(this).attr("style"))
                : (e.addClass("clicked"), $("body").addClass("expand-lock"));
        }),
        $("body").on("click", "div.expanded-img", function () {
            $(this).remove(), $("body").removeClass("expand-lock");
        }),
        $(".transition-section").on("click", ".project-arrow button", function () {
            $(".slide-inner-content .clicked").removeClass("clicked");
            let e = $(".slide-inner-content .active"),
                t = $(".slide-inner-content .project-img:first-child");
            e != t && (e.stop(), t.stop(), e.removeClass("active").fadeOut(0), t.addClass("active").fadeIn(0));
        });
});

