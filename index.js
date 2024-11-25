
System.register("bundle://game_bundle/game_bundle.js", ["cc"], (function(e, t) {
    var o, i, r, n, l, a, u, s, c, d, m, p, h, y, N, g, f, b, w, v, k, T, C, _, S, R, B, I, P, F, E, M, D, L, A, x, z, G, O, H, U, V, W, q, j, J, X, Z, Y, K, Q, $, ee, te, oe, ie;
    return {
        setters: [function(e) {
            o = e.cclegacy,
            i = e.screen,
            r = e.view,
            n = e.isValid,
            l = e.sys,
            a = e.Vec3,
            u = e._decorator,
            s = e.director,
            c = e.Prefab,
            d = e.AudioClip,
            m = e.assetManager,
            p = e.SpriteAtlas,
            h = e.SpriteFrame,
            y = e.resources,
            N = e.Button,
            g = e.Mat4,
            f = e.ImageAsset,
            b = e.instantiate,
            w = e.Label,
            v = e.Sprite,
            k = e.Color,
            T = e.Node,
            C = e.Component,
            _ = e.UITransform,
            S = e.Camera,
            R = e.RenderTexture,
            B = e.Director,
            I = e.profiler,
            P = e.game,
            F = e.Game,
            E = e.Vec2,
            M = e.misc,
            D = e.UIOpacity,
            L = e.Size,
            A = e.Quat,
            x = e.Tween,
            z = e.tween,
            G = e.CCBoolean,
            O = e.AudioSource,
            H = e.CCInteger,
            U = e.Mask,
            V = e.Widget,
            W = e.Graphics,
            q = e.ScrollView,
            j = e.NodePool,
            J = e.Layout,
            X = e.Animation,
            Z = e.CCString,
            Y = e.EditBox,
            K = e.input,
            Q = e.Input,
            $ = e.Enum,
            ee = e.CCFloat,
            te = e.BoxCollider2D,
            oe = e.Contact2DType,
            ie = e.RichText
        }
        ],
        execute: function() {
            o._RF.push({}, "2da9dcL0wdBwap61CTTw3mO", "Logger", void 0);
            var e = function() {};
            e.INFO = "INFO",
            e.ERROR = "ERROR",
            e.WARN = "WARN",
            e.WATCH = "WATCH";
            var t = function() {
                function t() {}
                return t.init = function(e) {
                    this.DEBUG_LOG = e
                }
                ,
                t.warn = function(t) {
                    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
                        i[r - 1] = arguments[r];
                    this.logInner.apply(this, [t, e.WARN].concat(i))
                }
                ,
                t.error = function(t) {
                    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
                        i[r - 1] = arguments[r];
                    this.logInner.apply(this, [t, e.ERROR].concat(i))
                }
                ,
                t.log = function(t) {
                    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
                        i[r - 1] = arguments[r];
                    this.logInner.apply(this, [t, e.INFO].concat(i))
                }
                ,
                t.logI = function(t) {
                    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
                        i[r - 1] = arguments[r];
                    this.logInner.apply(this, [t, e.INFO].concat(i))
                }
                ,
                t.logE = function(t) {
                    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++)
                        i[r - 1] = arguments[r];
                    this.logInner.apply(this, [t, e.ERROR].concat(i))
                }
                ,
                t.logInner = function(t, o) {
                    for (var i = this.getDateString(), r = i + " " + o + ": " + t, n = arguments.length, l = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                        l[a - 2] = arguments[a];
                    l && l.length > 0 && l.forEach((function(e) {
                        r += " " + e
                    }
                    )),
                    this.DEBUG_LOG && (o == e.ERROR ? console.error(r) : o == e.WARN ? console.warn(r) : console.log(r))
                }
                ,
                t.logObject = function(t, o) {
                    if (void 0 === o && (o = e.INFO),
                    this.DEBUG_LOG) {
                        var i = this.getDateString();
                        console.log(i + " " + o + ": Object Dump:");
                        !function e(t, o) {
                            for (var i in void 0 === o && (o = "  "),
                            t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    var r = t[i];
                                    "object" == typeof r && null !== r ? (console.log("" + o + i + ":"),
                                    e(r, o + "  ")) : console.log("" + o + i + ": " + r)
                                }
                        }(t)
                    }
                }
                ,
                t.getDateString = function() {
                    var e = new Date
                      , t = e.getHours() + ""
                      , o = "";
                    return o += (1 === t.length ? "0" + t : t) + ":",
                    o += (1 === (t = e.getMinutes() + "").length ? "0" + t : t) + ":",
                    o += (1 === (t = e.getSeconds() + "").length ? "0" + t : t) + ".",
                    1 === (t = e.getMilliseconds() + "").length && (t = "00" + t),
                    2 === t.length && (t = "0" + t),
                    o = "[" + (o += t) + "]"
                }
                ,
                t
            }();
            t.DEBUG_LOG = !0,
            o._RF.pop(),
            o._RF.push({}, "5f79b6RbnpC27sPG4H3Qz33", "EventManager", void 0);
            var re = function() {
                function e(e, t) {
                    this.fun = null,
                    this.target = null,
                    this.fun = e,
                    this.target = t
                }
                return e.prototype.call = function() {
                    for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    return (e = this.fun).call.apply(e, [this.target].concat(o))
                }
                ,
                e
            }()
              , ne = function() {
                function e() {}
                return e.on = function(e, t, o) {
                    var i = new re(t,o);
                    this.getEventList(e).push(i)
                }
                ,
                e.off = function(e, t, o) {
                    var i = this.indexOf(e, t, o);
                    this.removeEvent(e, i)
                }
                ,
                e.emit = function(e) {
                    for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        o[i - 1] = arguments[i];
                    var r = this.getEventList(e)
                      , n = null
                      , l = [].concat(r);
                    return l.forEach((function(e) {
                        n = e.call.apply(e, o)
                    }
                    )),
                    n
                }
                ,
                e.removeEvent = function(e, t) {
                    this.getEventList(e).splice(t, 1)
                }
                ,
                e.indexOf = function(e, t, o) {
                    for (var i = this.getEventList(e), r = 0; r < i.length; r++) {
                        var n = i[r];
                        if (n.fun == t && n.target == o)
                            return r
                    }
                    return -1
                }
                ,
                e.getEventList = function(e) {
                    var t = this.eventMap.get(e);
                    return t || (t = [],
                    this.eventMap.set(e, t),
                    t)
                }
                ,
                e
            }();
            ne.eventMap = new Map,
            o._RF.pop(),
            o._RF.push({}, "5ed6aZRVwdN9Y0ueMoO/PdU", "EventName", void 0);
            var le = function() {};
            le.GameCardClick = "GameCardClick",
            le.RefreshGameMap = "RefreshGameMap",
            le.GameScoreChange = "GameScoreChange",
            le.GameShowRelive = "GameShowRelive",
            le.CheckGameResult = "CheckGameResult",
            le.GameGiveUp = "GameGiveUp",
            le.GameExit = "GameExit",
            le.RefreshProgressBar = "RefreshProgressBar",
            le.AD_SHOW = "AD_SHOW",
            le.GameFinished = "GameFinished",
            le.GetToolSuccess = "GetToolSuccess",
            le.ShowPassDialog = "ShowPassDialog",
            le.OnBackMain = "OnBackMain",
            le.PlayAgain = "PlayAgain",
            le.GameMusicOnChanged = "GameMusicOnChanged",
            le.ShowGuide = "ShowGuide",
            le.HideGuide = "HideGuide",
            le.GameCardEditClick = "GameCardEditClick",
            le.GameReliveFailed = "GameReliveFailed",
            le.ClickPicItem = "ClickPicItem",
            le.windowResize = "windowResize",
            le.GuideStoryStartGame = "GuideStoryStartGame",
            o._RF.pop(),
            o._RF.push({}, "b28ffSYQi9OBqdPuISx90n3", "AdapterHelper", void 0);
            var ae = function() {
                function e() {}
                return e.init = function() {
                    this.isInited || (this.isInited = !0,
                    i.on("window-resize", this.onWindowResize, this),
                    this.calRatio())
                }
                ,
                e.calRatio = function() {
                    var e = i.windowSize;
                    this.sWinSize = e;
                    var o = r.getDesignResolutionSize();
                    this.sDesignSize = o;
                    var n = 1;
                    e.width < o.width && (n = Number((e.width / o.width).toFixed(3)));
                    var l = 0;
                    e.height < o.height && (1 != n && (l = o.height * n),
                    this.scaleRatioByHeight = e.height / l,
                    this.scaleRatioByHeight > 1 ? this.scaleRatioByHeight = 1 : this.scaleRatioByHeight = Number(this.scaleRatioByHeight.toFixed(2))),
                    t.log("design size w = " + o.width + ", h = " + o.height),
                    l > 0 && t.log("designHeightByWidthRatio = " + l + ", widthRatio = " + n),
                    t.log("screen win size w = " + e.width + ", h = " + e.height + ", scale ratio = " + this.scaleRatioByHeight),
                    this.getRatio() >= 1 && e.width >= 1488 && e.height >= 2e3 && e.width / e.height >= .65 && (this.isPad = !0,
                    t.log("isPad = true"))
                }
                ,
                e.getRatio = function() {
                    return this.scaleRatioByHeight
                }
                ,
                e.getDesignSize = function() {
                    return this.sDesignSize
                }
                ,
                e.getWinSize = function() {
                    return this.sWinSize
                }
                ,
                e.onWindowResize = function(e, o) {
                    t.log(this.logTag, "onWindowResize width = " + e + ", height = " + o),
                    this.calRatio(),
                    ne.emit(le.windowResize, e, o)
                }
                ,
                e
            }();
            function ue() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                ue = function() {
                    return t
                }
                ;
                var e, t = {}, o = Object.prototype, i = o.hasOwnProperty, r = Object.defineProperty || function(e, t, o) {
                    e[t] = o.value
                }
                , n = "function" == typeof Symbol ? Symbol : {}, l = n.iterator || "@@iterator", a = n.asyncIterator || "@@asyncIterator", u = n.toStringTag || "@@toStringTag";
                function s(e, t, o) {
                    return Object.defineProperty(e, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, o) {
                        return e[t] = o
                    }
                }
                function c(e, t, o, i) {
                    var n = t && t.prototype instanceof N ? t : N
                      , l = Object.create(n.prototype)
                      , a = new I(i || []);
                    return r(l, "_invoke", {
                        value: _(e, o, a)
                    }),
                    l
                }
                function d(e, t, o) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, o)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                t.wrap = c;
                var m = "suspendedStart"
                  , p = "executing"
                  , h = "completed"
                  , y = {};
                function N() {}
                function g() {}
                function f() {}
                var b = {};
                s(b, l, (function() {
                    return this
                }
                ));
                var w = Object.getPrototypeOf
                  , v = w && w(w(P([])));
                v && v !== o && i.call(v, l) && (b = v);
                var k = f.prototype = N.prototype = Object.create(b);
                function T(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }
                        ))
                    }
                    ))
                }
                function C(e, t) {
                    function o(r, n, l, a) {
                        var u = d(e[r], e, n);
                        if ("throw" !== u.type) {
                            var s = u.arg
                              , c = s.value;
                            return c && "object" == typeof c && i.call(c, "__await") ? t.resolve(c.__await).then((function(e) {
                                o("next", e, l, a)
                            }
                            ), (function(e) {
                                o("throw", e, l, a)
                            }
                            )) : t.resolve(c).then((function(e) {
                                s.value = e,
                                l(s)
                            }
                            ), (function(e) {
                                return o("throw", e, l, a)
                            }
                            ))
                        }
                        a(u.arg)
                    }
                    var n;
                    r(this, "_invoke", {
                        value: function(e, i) {
                            function r() {
                                return new t((function(t, r) {
                                    o(e, i, t, r)
                                }
                                ))
                            }
                            return n = n ? n.then(r, r) : r()
                        }
                    })
                }
                function _(t, o, i) {
                    var r = m;
                    return function(n, l) {
                        if (r === p)
                            throw new Error("Generator is already running");
                        if (r === h) {
                            if ("throw" === n)
                                throw l;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (i.method = n,
                        i.arg = l; ; ) {
                            var a = i.delegate;
                            if (a) {
                                var u = S(a, i);
                                if (u) {
                                    if (u === y)
                                        continue;
                                    return u
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (r === m)
                                    throw r = h,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            r = p;
                            var s = d(t, o, i);
                            if ("normal" === s.type) {
                                if (r = i.done ? h : "suspendedYield",
                                s.arg === y)
                                    continue;
                                return {
                                    value: s.arg,
                                    done: i.done
                                }
                            }
                            "throw" === s.type && (r = h,
                            i.method = "throw",
                            i.arg = s.arg)
                        }
                    }
                }
                function S(t, o) {
                    var i = o.method
                      , r = t.iterator[i];
                    if (r === e)
                        return o.delegate = null,
                        "throw" === i && t.iterator.return && (o.method = "return",
                        o.arg = e,
                        S(t, o),
                        "throw" === o.method) || "return" !== i && (o.method = "throw",
                        o.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        y;
                    var n = d(r, t.iterator, o.arg);
                    if ("throw" === n.type)
                        return o.method = "throw",
                        o.arg = n.arg,
                        o.delegate = null,
                        y;
                    var l = n.arg;
                    return l ? l.done ? (o[t.resultName] = l.value,
                    o.next = t.nextLoc,
                    "return" !== o.method && (o.method = "next",
                    o.arg = e),
                    o.delegate = null,
                    y) : l : (o.method = "throw",
                    o.arg = new TypeError("iterator result is not an object"),
                    o.delegate = null,
                    y)
                }
                function R(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                    t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function B(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function I(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    e.forEach(R, this),
                    this.reset(!0)
                }
                function P(t) {
                    if (t || "" === t) {
                        var o = t[l];
                        if (o)
                            return o.call(t);
                        if ("function" == typeof t.next)
                            return t;
                        if (!isNaN(t.length)) {
                            var r = -1
                              , n = function o() {
                                for (; ++r < t.length; )
                                    if (i.call(t, r))
                                        return o.value = t[r],
                                        o.done = !1,
                                        o;
                                return o.value = e,
                                o.done = !0,
                                o
                            };
                            return n.next = n
                        }
                    }
                    throw new TypeError(typeof t + " is not iterable")
                }
                return g.prototype = f,
                r(k, "constructor", {
                    value: f,
                    configurable: !0
                }),
                r(f, "constructor", {
                    value: g,
                    configurable: !0
                }),
                g.displayName = s(f, u, "GeneratorFunction"),
                t.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                t.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f,
                    s(e, u, "GeneratorFunction")),
                    e.prototype = Object.create(k),
                    e
                }
                ,
                t.awrap = function(e) {
                    return {
                        __await: e
                    }
                }
                ,
                T(C.prototype),
                s(C.prototype, a, (function() {
                    return this
                }
                )),
                t.AsyncIterator = C,
                t.async = function(e, o, i, r, n) {
                    void 0 === n && (n = Promise);
                    var l = new C(c(e, o, i, r),n);
                    return t.isGeneratorFunction(o) ? l : l.next().then((function(e) {
                        return e.done ? e.value : l.next()
                    }
                    ))
                }
                ,
                T(k),
                s(k, u, "Generator"),
                s(k, l, (function() {
                    return this
                }
                )),
                s(k, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                t.keys = function(e) {
                    var t = Object(e)
                      , o = [];
                    for (var i in t)
                        o.push(i);
                    return o.reverse(),
                    function e() {
                        for (; o.length; ) {
                            var i = o.pop();
                            if (i in t)
                                return e.value = i,
                                e.done = !1,
                                e
                        }
                        return e.done = !0,
                        e
                    }
                }
                ,
                t.values = P,
                I.prototype = {
                    constructor: I,
                    reset: function(t) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = e,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = e,
                        this.tryEntries.forEach(B),
                        !t)
                            for (var o in this)
                                "t" === o.charAt(0) && i.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var o = this;
                        function r(i, r) {
                            return a.type = "throw",
                            a.arg = t,
                            o.next = i,
                            r && (o.method = "next",
                            o.arg = e),
                            !!r
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var l = this.tryEntries[n]
                              , a = l.completion;
                            if ("root" === l.tryLoc)
                                return r("end");
                            if (l.tryLoc <= this.prev) {
                                var u = i.call(l, "catchLoc")
                                  , s = i.call(l, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < l.catchLoc)
                                        return r(l.catchLoc, !0);
                                    if (this.prev < l.finallyLoc)
                                        return r(l.finallyLoc)
                                } else if (u) {
                                    if (this.prev < l.catchLoc)
                                        return r(l.catchLoc, !0)
                                } else {
                                    if (!s)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < l.finallyLoc)
                                        return r(l.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var n = r;
                                break
                            }
                        }
                        n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc && (n = null);
                        var l = n ? n.completion : {};
                        return l.type = e,
                        l.arg = t,
                        n ? (this.method = "next",
                        this.next = n.finallyLoc,
                        y) : this.complete(l)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                        y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var o = this.tryEntries[t];
                            if (o.finallyLoc === e)
                                return this.complete(o.completion, o.afterLoc),
                                B(o),
                                y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var o = this.tryEntries[t];
                            if (o.tryLoc === e) {
                                var i = o.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    B(o)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, o, i) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: o,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = e),
                        y
                    }
                },
                t
            }
            function se(e, t, o, i, r, n, l) {
                try {
                    var a = e[n](l)
                      , u = a.value
                } catch (e) {
                    return void o(e)
                }
                a.done ? t(u) : Promise.resolve(u).then(i, r)
            }
            function ce(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, (r = i.key,
                    n = void 0,
                    "symbol" == typeof (n = function(e, t) {
                        if ("object" != typeof e || null === e)
                            return e;
                        var o = e[Symbol.toPrimitive];
                        if (void 0 !== o) {
                            var i = o.call(e, t || "default");
                            if ("object" != typeof i)
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(r, "string")) ? n : String(n)), i)
                }
                var r, n
            }
            function de(e, t, o) {
                return t && ce(e.prototype, t),
                o && ce(e, o),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
            }
            function me() {
                return (me = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var i in o)
                            Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function pe(e, t) {
                e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                he(e, t)
            }
            function he(e, t) {
                return (he = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function ye(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, i = new Array(t); o < t; o++)
                    i[o] = e[o];
                return i
            }
            function ge(e, t) {
                var o = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (o)
                    return (o = o.call(e)).next.bind(o);
                if (Array.isArray(e) || (o = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return Ne(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === o && e.constructor && (o = e.constructor.name),
                        "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Ne(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    o && (e = o);
                    var i = 0;
                    return function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            function fe(e, t, o, i) {
                o && Object.defineProperty(e, t, {
                    enumerable: o.enumerable,
                    configurable: o.configurable,
                    writable: o.writable,
                    value: o.initializer ? o.initializer.call(i) : void 0
                })
            }
            function be(e, t, o, i, r) {
                var n = {};
                return Object.keys(i).forEach((function(e) {
                    n[e] = i[e]
                }
                )),
                n.enumerable = !!n.enumerable,
                n.configurable = !!n.configurable,
                ("value"in n || n.initializer) && (n.writable = !0),
                n = o.slice().reverse().reduce((function(o, i) {
                    return i(e, t, o) || o
                }
                ), n),
                r && void 0 !== n.initializer && (n.value = n.initializer ? n.initializer.call(r) : void 0,
                n.initializer = void 0),
                void 0 === n.initializer && (Object.defineProperty(e, t, n),
                n = null),
                n
            }
            ae.logTag = "AdapterHelper",
            ae.isInited = !1,
            ae.scaleRatioByHeight = 1,
            ae.sDesignSize = null,
            ae.sWinSize = null,
            ae.isPad = !1,
            ae.padRatio = .63,
            o._RF.pop(),
            o._RF.push({}, "d735eAh81RHuJUpdJej3LgU", "XCSingletonClass", void 0);
            var we = function() {
                function e() {}
                return e.ins = function() {
                    return this._ins || (this._ins = new this),
                    this._ins
                }
                ,
                e
            }();
            we._ins = void 0,
            o._RF.pop(),
            o._RF.push({}, "14dc1yP3fFMc6nB2Y5WD79n", "BridgeFrame", void 0);
            var ve = function(e, t) {
                var o = this;
                void 0 === e && (e = "zuiyou"),
                void 0 === t && (t = "ZuiyouJSBridge"),
                this.version = void 0,
                this.uniqueId = 1,
                this.messagingIframe = void 0,
                this.protocol = void 0,
                this.bridgeName = void 0,
                this.sendMessageQueue = [],
                this.receiveMessageQueue = [],
                this.messageHandlers = {},
                this.QUEUE_HAS_MESSAGE = "__QUEUE_MESSAGE__/",
                this.responseCallbacks = {},
                this.init = function() {
                    o.messagingIframe = document.createElement("iframe"),
                    o.messagingIframe.setAttribute("data-html2canvas-ignore", ""),
                    o.messagingIframe.style.display = "none",
                    document.documentElement.appendChild(o.messagingIframe);
                    var e = new Event("ZuiyouJSBridgeReady");
                    document.dispatchEvent(e)
                }
                ,
                this.send = function(e, t) {
                    o.doSend({
                        data: e
                    }, t)
                }
                ,
                this.doSend = function(e, t) {
                    var i = me({}, e);
                    if (t) {
                        var r = "cb_" + (o.uniqueId += 1) + "_" + (new Date).getTime();
                        o.responseCallbacks[r] = t,
                        i.callbackId = r
                    }
                    o.sendMessageQueue.push(i),
                    o.messagingIframe.src = o.protocol + "://" + o.QUEUE_HAS_MESSAGE,
                    console.log("this.messagingIframe.src", o.messagingIframe.src)
                }
                ,
                this.fetchQueue = function() {
                    var e = JSON.stringify(o.sendMessageQueue);
                    o.sendMessageQueue = [],
                    o.messagingIframe.src = o.protocol + "://return/_fetchQueue/" + encodeURIComponent(e)
                }
                ,
                this.dispatchMessageFromNative = function(e) {
                    var t, i;
                    console.log("dispatchMessageFromNative2 ", e);
                    try {
                        t = JSON.parse(e)
                    } catch (o) {
                        t = JSON.parse(e.replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r"))
                    }
                    if (t.responseId) {
                        if (!(i = o.responseCallbacks[t.responseId]))
                            return;
                        i(t.responseData),
                        delete o.responseCallbacks[t.responseId]
                    } else {
                        if (t.callbackId) {
                            var r = t.callbackId;
                            i = function(e) {
                                o.doSend({
                                    responseId: r,
                                    responseData: e
                                })
                            }
                        }
                        var n = ZuiyouJSBridge._messageHandler;
                        t.handlerName && (n = o.messageHandlers[t.handlerName]);
                        try {
                            n(t.data, i)
                        } catch (e) {
                            console.log("exception", e),
                            console.log("ZuiyouJSBridge: WARNING: javascript handler threw.", t, e)
                        }
                    }
                }
                ,
                this.handleMessageFromNative = function(e) {
                    var t;
                    console.log("handleMessageFromNative", e),
                    (null == (t = o.receiveMessageQueue) ? void 0 : t.length) > 0 ? o.receiveMessageQueue.push(e) : o.dispatchMessageFromNative(e)
                }
                ,
                this.callHandler = function(e, t, i) {
                    o.doSend({
                        handlerName: e,
                        data: t
                    }, i)
                }
                ,
                this.registerHandler = function(e, t) {
                    o.messageHandlers[e] = t
                }
                ,
                this._fetchQueue = this.fetchQueue,
                this._dispatchMessageFromNative = this.dispatchMessageFromNative,
                this._handleMessageFromNative = this.handleMessageFromNative,
                this.protocol = e,
                this.bridgeName = t,
                this.init()
            };
            o._RF.pop(),
            o._RF.push({}, "8aacaFXdWVIVJL2+x9uhlxB", "JSNativeBridge", void 0);
            var ke = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(i)) || this).isInited = !1,
                    t
                }
                pe(o, e),
                o.ins = function() {
                    return e.ins.call(this)
                }
                ;
                var i = o.prototype;
                return i.init = function() {
                    console.log("before", window.ZuiyouJSBridge),
                    this.isInited || null == window.ZuiyouJSBridge && (o.isWebBridge = !0,
                    this.isInited = !0,
                    window.ZuiyouJSBridge = new ve("zuiyou","ZuiyouJSBridge"),
                    console.log("after", window.ZuiyouJSBridge))
                }
                ,
                o.getUserInfo = function(e) {
                    var o;
                    void 0 === e && (e = null),
                    null == (o = window.ZuiyouJSBridge) || o.callHandler("getDeviceInfo", {}, (function(o) {
                        t.logI("JSNativeBridge", "getDeviceInfo callback: " + JSON.stringify(o)),
                        e && e(o)
                    }
                    ))
                }
                ,
                i.login = function() {
                    var e;
                    null == (e = window.ZuiyouJSBridge) || e.callHandler("login", {})
                }
                ,
                i.toast = function(e) {
                    var t;
                    null == (t = window.ZuiyouJSBridge) || t.callHandler("toast", {
                        text: e
                    })
                }
                ,
                i.requestFullscreen = function() {
                    var e;
                    null == (e = window.ZuiyouJSBridge) || e.callHandler("requestFullscreen", {})
                }
                ,
                i.closeWindow = function() {
                    var e;
                    null == (e = window.ZuiyouJSBridge) || e.callHandler("closeWindow", {})
                }
                ,
                i.shareWithPlatforms = function(e, t, o, i, r) {
                    var n, l = {
                        title: e,
                        desc: t,
                        link: o,
                        img_url: i,
                        platformList: ["zuiyou", "weixin_friend", "weixin_timeline", "qq", "qzone", "weibo"]
                    };
                    null == (n = window.ZuiyouJSBridge) || n.callHandler("share", l, (function(e) {
                        console.log("share callback", "data: " + JSON.stringify(e) + ", typeof data: " + typeof e),
                        e && r && r(1 == e.success ? 1 : 0)
                    }
                    ))
                }
                ,
                i.shareWithType = function(e, t, o, i, r, n, l, a, u) {
                    var s, c = {
                        share_type: t,
                        title: o,
                        desc: i,
                        content: i,
                        target_url: r,
                        screenshot: l,
                        img_base64: a,
                        ignore_official: 1,
                        img_url: n,
                        imgUrl: n,
                        platformList: e
                    };
                    console.log("shareWithType 111 shareInfo = " + c.imgUrl + ", " + c.img_url),
                    console.log("shareWithType 11 shareInfo = " + JSON.stringify(c)),
                    null == (s = window.ZuiyouJSBridge) || s.callHandler("shareWithType", c, (function(e) {
                        console.log("share callback", "data: " + JSON.stringify(e) + ", typeof data: " + typeof e),
                        e && u && u(1 == e.success ? 1 : 0)
                    }
                    ))
                }
                ,
                i.pressBack = function(e) {
                    var t, o;
                    null == (t = window.ZuiyouJSBridge) || t.registerHandler("nativePressBack", e),
                    null == (o = window.ZuiyouJSBridge) || o.callHandler("hookzyback", {
                        callback: "nativePressBack"
                    }, (function(e) {
                        console.log("hookzyback callback", "data: " + JSON.stringify(e))
                    }
                    ))
                }
                ,
                i.vibrateWithLevel = function(e, t) {
                    var o, i, r, n, l = null != (o = null == t ? void 0 : t.type) ? o : 1, a = {};
                    (a.level = e,
                    a.type = l,
                    2 == l) && (a.duration = null != (r = null == t ? void 0 : t.duration) ? r : 100,
                    a.amplitude = null != (n = null == t ? void 0 : t.amplitude) ? n : 50);
                    null == (i = window.ZuiyouJSBridge) || i.callHandler("vibrateWithLevel", a)
                }
                ,
                i.checkUpgrade = function() {
                    var e;
                    null == (e = window.ZuiyouJSBridge) || e.callHandler("checkUpgrade", {
                        requestData: !0
                    })
                }
                ,
                i.openMarket = function(e) {
                    var t, o = {
                        packageName: e,
                        bundleId: e,
                        closeCurrent: !1
                    };
                    "cn.xiaochuankeji.tieba" == e && (o.bundleId = "942443472"),
                    console.log("openMarket info = " + JSON.stringify(o)),
                    null == (t = window.ZuiyouJSBridge) || t.callHandler("openMarket", o)
                }
                ,
                i.getDeviceInfo = function(e) {
                    var o;
                    null == (o = window.ZuiyouJSBridge) || o.callHandler("getDeviceInfo", {}, (function(o) {
                        t.logI("JSNativeBridge", "getDeviceInfo callback: " + JSON.stringify(o)),
                        e && e(o)
                    }
                    ))
                }
                ,
                i.saveImage = function(e, t, o) {
                    var i;
                    null == (i = window.ZuiyouJSBridge) || i.callHandler("saveImage", {
                        url: e,
                        img_base64: t
                    }, o)
                }
                ,
                i.httpRequestPost = function(e, t, o, i) {
                    void 0 === t && (t = {}),
                    void 0 === o && (o = {}),
                    void 0 === i && (i = null),
                    this.httpRequest(e, "POST", t, o, i)
                }
                ,
                i.httpRequestGet = function(e, t, o) {
                    void 0 === t && (t = {}),
                    void 0 === o && (o = null),
                    this.httpRequest(e, "GET", {}, t, o)
                }
                ,
                i.httpRequest = function(e, t, o, i, r) {
                    var n;
                    void 0 === o && (o = {}),
                    void 0 === i && (i = {}),
                    void 0 === r && (r = null),
                    null == (n = window.ZuiyouJSBridge) || n.callHandler("http_request", {
                        url: e,
                        method: t,
                        params: o,
                        header: i
                    }, r)
                }
                ,
                i.statAction = function(e, t, o, i) {
                    var r;
                    void 0 === i && (i = {}),
                    null == (r = window.ZuiyouJSBridge) || r.callHandler("stat_action", {
                        type: e,
                        stype: t,
                        frominfo: o,
                        data: i
                    })
                }
                ,
                i.showRewardAd = function(e) {
                    var t;
                    null == (t = window.ZuiyouJSBridge) || t.callHandler("showRewardAd", {
                        need_fetch_data: !0,
                        extra: "zytenyears_reward_ad",
                        slot_tag: "reward_zuiyou_activity",
                        callbackinclose: !0,
                        reward_name: "道具",
                        reward_amount: 1
                    }, e)
                }
                ,
                o
            }(we);
            ke.isWebBridge = !1,
            o._RF.pop(),
            o._RF.push({}, "95d1fhHdFRCoqnjC6nFdWGI", "HttpRequest", void 0);
            var Te = function() {
                this.header = void 0,
                this.params = void 0,
                this.onSuccess = void 0,
                this.onFail = void 0,
                this.type = void 0
            }
              , Ce = -1004
              , _e = -1005
              , Se = -1e4
              , Re = -10001
              , Be = function() {
                function e() {}
                return e.isCreateButUnsend = function(e) {
                    return 0 == e
                }
                ,
                e.isOpened = function(e) {
                    return 1 == e
                }
                ,
                e.isHeadersReceived = function(e) {
                    return 2 == e
                }
                ,
                e.isLoading = function(e) {
                    return 3 == e
                }
                ,
                e.isDone = function(e) {
                    return 4 == e
                }
                ,
                e.request = function(t, o) {
                    var i = this
                      , r = o.type
                      , l = o.params || {}
                      , a = o.onSuccess
                      , u = o.onFail
                      , s = new XMLHttpRequest;
                    s.open(r, t, !0),
                    s.timeout = 1e4,
                    this.setHeader(s, o.header, t),
                    s.onreadystatechange = function() {
                        if (e.isDone(s.readyState) && s.status >= 200 && s.status < 400) {
                            var t = null;
                            "json" == s.responseType ? (t = s.response,
                            t = s.responseText,
                            a && a(t)) : "text" == s.responseType ? (t = s.responseText,
                            a && a(t)) : "arraybuffer" == s.responseType ? (t = s.response,
                            a && a(t)) : (t = s.response,
                            t = s.responseText,
                            a && a && a(t))
                        } else
                            e.isDone(s.readyState) && u && u(Se, "http error status:" + s.status)
                    }
                    ,
                    s.onerror = function(e) {
                        n(i) && u && u(Ce, "http request error")
                    }
                    ,
                    s.onabort = function(e) {
                        n(i) && u && u(_e, "http request abort error")
                    }
                    ,
                    s.ontimeout = function() {
                        u && u(Re, "http error ontimeout")
                    }
                    ,
                    s.send(JSON.stringify(l))
                }
                ,
                e.setHeader = function(e, t, o) {
                    if (e && (e.setRequestHeader("Accept", "application/json"),
                    e.setRequestHeader("Content-Type", "application/json;charset=utf8"),
                    t && "object" == typeof t))
                        for (var i in e.responseType = "json",
                        t)
                            if ("ResponseType" === i) {
                                var r = t[i];
                                this.setResponseType(e, r)
                            } else
                                e.setRequestHeader(i, t[i])
                }
                ,
                e.setResponseType = function(e, t) {
                    e && t && ("text" != t && "json" != t && "arraybuffer" != t && "document" != t || (e.responseType = t))
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "693b4/1K0VP5ovWbmqRY7lt", "NetworkUtils", void 0);
            var Ie = function() {
                function e() {}
                return e.isNetworkTypeNone = function() {
                    return l.getNetworkType() == l.NetworkType.NONE
                }
                ,
                e.isNetworkTypeWifi = function() {
                    return l.getNetworkType() == l.NetworkType.LAN
                }
                ,
                e.isNetworkTypeMobile = function() {
                    return l.getNetworkType() == l.NetworkType.WWAN
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "0f538f1XMJGtpZ56lx2VpAU", "RequestHelper", void 0);
            var Pe = function() {
                function e() {
                    this.deviceInfo = null
                }
                var t = e.prototype;
                return t.init = function(e) {
                    this.deviceInfo = e,
                    console.log("RequestHelper deviceInfo = ", this.deviceInfo)
                }
                ,
                t.post = function(e, t, o, i, r) {
                    void 0 === o && (o = null),
                    void 0 === i && (i = null),
                    void 0 === r && (r = !1);
                    var n = new Te;
                    if (n.type = "POST",
                    o && (n.onSuccess = o),
                    i && (n.onFail = i),
                    r)
                        n.params = null != t ? t : {};
                    else {
                        var a, u;
                        if (null == this.deviceInfo)
                            return;
                        var s = {
                            h_os: 0,
                            h_av: "1.0.0",
                            h_app: "dolphin",
                            h_model: "cocos",
                            h_ch: "cocos",
                            h_did: null != (a = this.deviceInfo.h_did) ? a : "0",
                            h_m: null != (u = this.deviceInfo.h_m) ? u : 0,
                            h_dt: l.os == l.OS.IOS ? 1 : 0
                        };
                        s.h_ts = Date.parse((new Date).toString()),
                        Ie.isNetworkTypeWifi() ? s.h_nt = 1 : Ie.isNetworkTypeMobile() ? s.h_nt = 2 : s.h_nt = 0,
                        null != t && Object.assign(s, t),
                        n.params = null != s ? s : {}
                    }
                    console.log("request.params", e, n.params),
                    Be.request(e, n)
                }
                ,
                de(e, null, [{
                    key: "inst",
                    get: function() {
                        return null == this._inst && (this._inst = new e),
                        this._inst
                    }
                }]),
                e
            }();
            Pe._inst = void 0,
            o._RF.pop(),
            o._RF.push({}, "39e28C2mMhFGYbpWKnT1qnA", "StatHelper", void 0);
            var Fe = function() {
                function e() {
                    this._count = 1
                }
                var t = e.prototype;
                return t.report = function(e) {
                    this.statDolphinEvent({
                        type: e.type,
                        stype: e.stype,
                        frominfo: e.frominfo,
                        pageBefore: e.pageBefore,
                        pageCurrent: e.pageCurrent,
                        extra: e.extra
                    })
                }
                ,
                t.statEvent = function(e) {
                    var t, o, i = {};
                    i.action = e.action,
                    i.otype = e.otype,
                    null != (null == e ? void 0 : e.src) && (i.src = e.src);
                    var r = (new Date).getMilliseconds()
                      , n = {
                        st: r,
                        log_id: r + "_" + this._count,
                        from_page: null != (t = null == e ? void 0 : e.pageBefore) ? t : "",
                        cur_page: null != (o = null == e ? void 0 : e.pageCurrent) ? o : ""
                    };
                    null != (null == e ? void 0 : e.extra) && (n = Object.assign({}, n, e.extra)),
                    this._count++,
                    i.data = n,
                    Pe.inst.post("https://api.wanyaa.com/stat/action", {
                        list: [i]
                    }, (function(e) {
                        console.log("stat success", e)
                    }
                    ), (function(e, t) {
                        console.log("stat fail", e, t)
                    }
                    ))
                }
                ,
                t.statDolphinEvent = function(e) {
                    var t, o, i = {};
                    i.type = e.type,
                    i.stype = e.stype,
                    null != (null == e ? void 0 : e.frominfo) && (i.frominfo = e.frominfo),
                    i.oid = "-",
                    i.id = "-";
                    var r = (new Date).getMilliseconds()
                      , n = {
                        st: r,
                        log_id: r + "_" + this._count,
                        from_page: null != (t = null == e ? void 0 : e.pageBefore) ? t : "",
                        cur_page: null != (o = null == e ? void 0 : e.pageCurrent) ? o : ""
                    };
                    null != (null == e ? void 0 : e.extra) && (n = Object.assign({}, n, e.extra)),
                    i.log_id = n.log_id,
                    i.data = n,
                    this._count++,
                    Pe.inst.post("https://api.wanyaa.com/stat/action", {
                        list: [i]
                    }, (function(e) {
                        console.log("stat success", e)
                    }
                    ), (function(e, t) {
                        console.log("stat fail", e, t)
                    }
                    ))
                }
                ,
                de(e, null, [{
                    key: "inst",
                    get: function() {
                        return null == this._inst && (this._inst = new e),
                        this._inst
                    }
                }]),
                e
            }();
            Fe._inst = void 0,
            o._RF.pop(),
            o._RF.push({}, "0bdf7aNG2dDC70mOzcjNiFU", "GameStat", void 0);
            var Ee = function() {
                function e() {}
                return e.reportEvent = function(e) {
                    void 0 === e && (e = {}),
                    e && e.game_id && (e.play_game_id = "game_" + e.game_id,
                    e.game_id = this.gameId),
                    Fe.inst.report({
                        type: "click",
                        stype: "user",
                        frominfo: "game",
                        pageBefore: "game",
                        pageCurrent: "game",
                        extra: me({
                            game_id: this.gameId
                        }, e)
                    })
                }
                ,
                e.viewGame = function(e) {
                    void 0 === e && (e = {});
                    var t = me({
                        minigame_type: "view_game"
                    }, this.createCommonExtra(e));
                    this.reportEvent(t)
                }
                ,
                e.viewPage = function(e, t) {
                    void 0 === e && (e = null),
                    void 0 === t && (t = {});
                    var o = me({
                        minigame_type: "view_page",
                        page_name: e
                    }, this.createCommonExtra(t));
                    this.reportEvent(o)
                }
                ,
                e.click = function(e, t, o) {
                    void 0 === t && (t = null),
                    void 0 === o && (o = null);
                    var i = me({
                        minigame_type: e,
                        from: t
                    }, this.createCommonExtra(o));
                    this.reportEvent(i)
                }
                ,
                e.stat = function(e, t, o) {
                    void 0 === t && (t = null),
                    void 0 === o && (o = null);
                    var i = me({
                        minigame_type: e,
                        from: t
                    }, this.createCommonExtra(o));
                    this.reportEvent(i)
                }
                ,
                e.createCommonExtra = function(e) {
                    return void 0 === e && (e = {}),
                    e || {}
                }
                ,
                de(e, null, [{
                    key: "gameId",
                    get: function() {
                        return Je.gameId
                    }
                }]),
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "15a08XAuMBHALE73vSGC7mm", "GameStatEvent", void 0);
            var Me = function(e) {
                return e.view = "view",
                e.click = "click",
                e.request = "request",
                e.success = "success",
                e.error = "error",
                e
            }({})
              , De = function(e) {
                return e.tenyears = "tenyears",
                e
            }({})
              , Le = function(e) {
                return e.activitypage = "activitypage",
                e.beginbutton = "beginbutton",
                e.storypage = "storypage",
                e.rankbutton = "rankbutton",
                e.rule = "rule",
                e.sharebutton = "sharebutton",
                e.exitbutton = "exitbutton",
                e.settingbutton = "settingbutton",
                e.moveout = "moveout",
                e.withdraw = "withdraw",
                e.shuffle = "shuffle",
                e.adbutton = "adbutton",
                e.clickShowAd = "click_showad",
                e.gamewin = "gamewin",
                e.gameend = "gameend",
                e.againbuttun = "againbuttun",
                e.revive = "revive",
                e.gift = "gift",
                e.none = "none",
                e.share_success = "share_success",
                e.details = "details",
                e.map = "map",
                e
            }({})
              , Ae = function() {};
            Ae.viewHome = "home",
            Ae.clickExitGame = "click_exit_game",
            Ae.clickStartGame = "click_start_game",
            Ae.clickStoryDetail = "click_story_detail",
            Ae.clickBackMain = "click_back_main",
            Ae.clickGiveUp = "click_giveup",
            Ae.clickEggBackPackage = "click_eggbackpackage",
            Ae.statRandomReward = "random_reward",
            Ae.statUnlockPic = "unlock_pic",
            Ae.statSubmitFinishGame = "finish_game",
            Ae.statShare = "share_rs",
            o._RF.pop(),
            o._RF.push({}, "dc826UUsKNCoZIq4Wq9872c", "StringUtils", void 0);
            var xe = function() {
                function e() {}
                return e.getStringLength = function(e) {
                    var t = 0;
                    if (e) {
                        for (var o = Array.from(e), i = o.length, r = 0; r < i; r++)
                            o[r].charCodeAt(0) > 255 ? t += 2 : t++;
                        return t
                    }
                    return 0
                }
                ,
                e.getSubStringMid = function(e, t) {
                    if (this.getStringLength(e) <= t)
                        return e;
                    var o = this.getStringArray(e)
                      , i = o[o.length - 1]
                      , r = "";
                    return 1 == this.getStringLength(i) && (r = o[o.length - 2]),
                    this.getSubString(e, t - 3) + ".." + r + i
                }
                ,
                e.getStringArray = function(e) {
                    return Array.from(e)
                }
                ,
                e.getSubString = function(e, t) {
                    var o = ""
                      , i = 0;
                    if (e)
                        for (var r = Array.from(e), n = r.length, l = 0; l < n; l++) {
                            if (r[l].charCodeAt(0) > 255 ? i += 2 : i++,
                            !(i < t))
                                return o;
                            o += r[l]
                        }
                    return e
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "96399BzOKVBEaDAHSFhaUED", "TypeSymbol", void 0);
            var ze = function() {
                function e() {}
                return e.isNull = function(e) {
                    return null == e || null == e
                }
                ,
                e.isEmptyString = function(e) {
                    return this.isNull(e) || e.length <= 0
                }
                ,
                e.isEmptyArray = function(e) {
                    return this.isNull(e) || e.length <= 0
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "0332fBTr55MQYwlNaQ6JTIb", "MathHelper", void 0);
            var Ge = function() {
                function e() {}
                return e.pow = function() {}
                ,
                e.toFixed = function(e, t) {
                    void 0 === t && (t = 3);
                    var o = e.toFixed(t);
                    return parseFloat(o)
                }
                ,
                e.isSameSign = function(e, t) {
                    return e >= 0 && t >= 0 || e < 0 && t < 0
                }
                ,
                e.degreesToRadians = function(e) {
                    return e * Math.PI / 180
                }
                ,
                e.radiansToDegrees = function(e) {
                    return e * (180 / Math.PI)
                }
                ,
                e.changeAngle0To360 = function(e) {
                    return e < 0 ? e % 360 + 360 : e >= 360 ? e % 360 : e
                }
                ,
                e.createVec3UNIT_Y = function() {
                    return new a(0,1,0)
                }
                ,
                e.createVec3UNIT_ZX = function() {
                    return new a(1,0,1)
                }
                ,
                e.twoDistance = function(e, t, o, i) {
                    return Math.pow(Math.pow(e - o, 2) + Math.pow(t - i, 2), .5)
                }
                ,
                e.rot = function(e, t, o, i) {
                    var r = (t - i) / (e - o);
                    return 180 * Math.atan(r) / Math.PI
                }
                ,
                e.getNewRx_Ry = function(e, t, o, i, r) {
                    var n = this.twoDistance(e, t, o, i)
                      , l = this.rot(e, t, o, i) - r;
                    return {
                        new_rx: Math.cos(l / 180 * Math.PI) * n,
                        new_ry: Math.sin(l / 180 * Math.PI) * n
                    }
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "90f4eoy51VHxbOATtB+OTso", "CacheManager", void 0);
            var Oe = function() {
                function e() {}
                return e.put = function(e, t) {
                    this.cacheMap.set(e, t)
                }
                ,
                e.get = function(e) {
                    this.cacheGetCount++;
                    var t = this.cacheMap.get(e);
                    return ze.isNull(t) || this.cacheHitCount++,
                    t
                }
                ,
                e.remove = function(e) {
                    this.cacheMap.delete(e)
                }
                ,
                e.hitPercent = function() {
                    return this.cacheGetCount <= 0 ? 0 : 100 * Ge.toFixed(this.cacheHitCount / this.cacheGetCount, 3)
                }
                ,
                e
            }();
            Oe.cacheMap = new Map,
            Oe.cacheHitCount = 0,
            Oe.cacheGetCount = 0,
            o._RF.pop(),
            o._RF.push({}, "f3922ZPnt5FxqRbiSyZsKh5", "LRUCacheInner", void 0);
            var He = function() {
                function e(e) {
                    void 0 === e && (e = 100),
                    this.capacity = 100,
                    this.cacheMap = new Map,
                    this.cacheHitCount = 0,
                    this.cacheGetCount = 0,
                    this.capacity = e
                }
                var t = e.prototype;
                return t.put = function(e, t) {
                    this.cacheMap.delete(e),
                    this.cacheMap.set(e, t),
                    this.trim()
                }
                ,
                t.get = function(e) {
                    this.cacheGetCount++;
                    var t = this.cacheMap.get(e);
                    return ze.isNull(t) || (this.cacheHitCount++,
                    this.cacheMap.delete(e),
                    this.cacheMap.set(e, t)),
                    t
                }
                ,
                t.trim = function() {
                    if (this.cacheMap.size > this.capacity) {
                        var e = this.cacheMap.keys().next().value;
                        this.cacheMap.delete(e)
                    }
                }
                ,
                t.remove = function(e) {
                    this.cacheMap.delete(e)
                }
                ,
                t.hitPercent = function() {
                    return this.cacheGetCount <= 0 ? 0 : 100 * Number((this.cacheHitCount / this.cacheGetCount).toFixed(3))
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "d17f2nA081FF7XH6T+yiGm0", "ResourcesHelper", void 0);
            u.ccclass,
            u.property;
            var Ue = function() {
                function e() {}
                return e.isRequesting = function(e) {
                    var t = this.requestMap.has(e);
                    return t
                }
                ,
                e.addRequest = function(e, t) {
                    var o = this.requestMap.get(e);
                    o || (o = []),
                    o.push(t),
                    this.requestMap.set(e, o)
                }
                ,
                e.removeRequest = function(e) {
                    this.requestMap.delete(e)
                }
                ,
                e.getRequests = function(e) {
                    return this.requestMap.get(e)
                }
                ,
                e
            }();
            Ue.requestMap = new Map;
            var Ve = function() {
                function e() {}
                return e.preloadScene = function(e) {
                    t.log("start preloadScene name = " + e),
                    s.preloadScene(e, (function(o, i) {
                        o ? t.logE("preloadScene " + e + " err = ", o) : t.log("preloadScene " + e + " scene = " + i)
                    }
                    ))
                }
                ,
                e.loadPrefab = function(e, o, i) {
                    var r = this;
                    this.loadBundle(e, (function(e, n) {
                        if (e)
                            return i(e, null),
                            t.logE("bundle load failed, err:" + e.message);
                        r.loadBundlePrefab(n, o, i)
                    }
                    ))
                }
                ,
                e.loadAudio = function(e, o, i) {
                    var r = this;
                    this.loadBundle(e, (function(e, n) {
                        if (e)
                            return i(e, null),
                            t.logE("bundle load failed, err:" + e.message);
                        r.loadBundleAudio(n, o, i)
                    }
                    ))
                }
                ,
                e.loadBundlePrefab = function(e, o, i) {
                    var r = Oe.get(o);
                    r ? i(null, r) : Ue.isRequesting(o) ? Ue.addRequest(o, i) : (Ue.addRequest(o, i),
                    e.load(o, c, (function(e, i) {
                        Oe.put(o, i);
                        var r = Ue.getRequests(o);
                        Ue.removeRequest(o);
                        for (var n, l = ge(r); !(n = l()).done; ) {
                            (0,
                            n.value)(e, i)
                        }
                        e && t.logE("prefab load failed, err:" + e.message)
                    }
                    )))
                }
                ,
                e.loadBundleAudio = function(e, o, i) {
                    var r = Oe.get(o);
                    r ? i(null, r) : Ue.isRequesting(o) ? Ue.addRequest(o, i) : (Ue.addRequest(o, i),
                    e.load(o, d, (function(e, i) {
                        Oe.put(o, i);
                        var r = Ue.getRequests(o);
                        Ue.removeRequest(o);
                        for (var n, l = ge(r); !(n = l()).done; ) {
                            (0,
                            n.value)(e, i)
                        }
                        e && t.logE("audio load failed, err:" + e.message)
                    }
                    )))
                }
                ,
                e.loadSFFromAtlas = function(e, t, o, i) {
                    void 0 === i && (i = null),
                    this.loadSpriteAtlas(e, t, (function(e, t) {
                        if (e)
                            i(e, null);
                        else {
                            var r = t.getSpriteFrame(o);
                            i(null, r)
                        }
                    }
                    ))
                }
                ,
                e.loadSpriteAtlas = function(e, o, i) {
                    var r = this;
                    void 0 === i && (i = null),
                    this.loadBundle(e, (function(e, n) {
                        if (e)
                            return i(e, null),
                            t.logE("bundle load failed, err:" + e.message);
                        r.loadBundleSpriteAtlas(n, o, i)
                    }
                    ))
                }
                ,
                e.loadSF = function(e, o, i) {
                    var r = this;
                    void 0 === i && (i = null),
                    this.loadBundle(e, (function(e, n) {
                        if (e)
                            return i(e, null),
                            t.logE("bundle load failed, err:" + e.message);
                        r.loadBundleSpriteFrame(n, o, i)
                    }
                    ))
                }
                ,
                e.loadBundle = function(e, o) {
                    var i = Oe.get(e);
                    i ? o(null, i) : Ue.isRequesting(e) ? Ue.addRequest(e, o) : (Ue.addRequest(e, o),
                    m.loadBundle(e, (function(o, i) {
                        Oe.put(e, i);
                        var r = Ue.getRequests(e);
                        Ue.removeRequest(e);
                        for (var n, l = ge(r); !(n = l()).done; ) {
                            (0,
                            n.value)(o, i)
                        }
                        o ? t.logE("bundle load failed, err:" + o.message) : i || t.logE("bundle is null")
                    }
                    )))
                }
                ,
                e.loadBundleSpriteAtlas = function(e, o, i) {
                    var r = o
                      , n = Oe.get(r);
                    n ? i && i(null, n) : Ue.isRequesting(r) ? Ue.addRequest(r, i) : (Ue.addRequest(r, i),
                    e.load(r, p, (function(e, o) {
                        o && Oe.put(r, o);
                        var i = Ue.getRequests(r);
                        Ue.removeRequest(r);
                        for (var n, l = ge(i); !(n = l()).done; ) {
                            (0,
                            n.value)(e, o)
                        }
                        e && t.logE("SpriteAtlas load failed, err:" + e.message)
                    }
                    )))
                }
                ,
                e.loadBundleSpriteFrame = function(e, o, i) {
                    var r = o + "/spriteFrame"
                      , n = Oe.get(r);
                    n ? i && i(null, n) : Ue.isRequesting(r) ? Ue.addRequest(r, i) : (Ue.addRequest(r, i),
                    e.load(r, h, (function(e, o) {
                        o && Oe.put(r, o);
                        var i = Ue.getRequests(r);
                        Ue.removeRequest(r);
                        for (var n, l = ge(i); !(n = l()).done; ) {
                            (0,
                            n.value)(e, o)
                        }
                        e && t.logE("sprite frame load failed, err:" + e.message)
                    }
                    )))
                }
                ,
                e.loadSpriteFrame = function(e, t, o, i) {
                    if (void 0 === o && (o = !0),
                    void 0 === i && (i = null),
                    e) {
                        o && (e.spriteFrame = null);
                        var r = t + "/spriteFrame"
                          , n = function(t, o) {
                            if (t)
                                return console.error("SpriteFrame load failed, err:" + t.message);
                            o && (Oe.put(r, o),
                            e.spriteFrame = o,
                            i && i(o))
                        }
                          , l = Oe.get(r);
                        l ? n(null, l) : y.load(r, h, n)
                    }
                }
                ,
                e.preloadSpriteFrame = function(e) {
                    var o = e + "/spriteFrame";
                    Oe.get(o) || y.load(o, h, (function(i, r) {
                        if (i)
                            return console.error("SpriteFrame load failed, err:" + i.message);
                        r && (Oe.put(o, r),
                        t.log("loaded sprite frame succeed path = " + e))
                    }
                    ))
                }
                ,
                e.loadRemoteSpriteFrameByURL = function(e, o, i) {
                    if (void 0 === o && (o = null),
                    void 0 === i && (i = null),
                    null != e && 0 != e.length) {
                        i || (i = this.onlineLRUCache);
                        var r = e
                          , n = i.get(r);
                        n || (n = Oe.get(r)) ? o && o(null, n) : m.loadRemote(e, {
                            ext: ".png"
                        }, (function(e, n) {
                            if (n) {
                                var l = h.createWithImage(n);
                                i.put(r, l),
                                o && o(null, l)
                            }
                            e && (t.logE("load remote sprite frame failed, err:" + e.message),
                            o && o(e, null))
                        }
                        ))
                    }
                }
                ,
                e.loadRemoteSpriteFrame = function(e, o, i, r) {
                    if (void 0 === i && (i = !1),
                    void 0 === r && (r = null),
                    e && (i && (e.spriteFrame = null),
                    null != o && 0 != o.length)) {
                        var n = o
                          , l = Oe.get(n);
                        if (l)
                            return e.spriteFrame = l,
                            void (r && r(null, l));
                        if (l = this.onlineLRUCache.get(n))
                            return e.spriteFrame = l,
                            void (r && r(null, l));
                        m.loadRemote(o, {
                            ext: ".png"
                        }, (function(o, i) {
                            if (i) {
                                var l = h.createWithImage(i);
                                if (Oe.put(n, l),
                                !We.isValid(e))
                                    return;
                                e.spriteFrame = l,
                                r && r(null, l)
                            }
                            o && (t.logE("load remote sprite frame failed, err:" + o.message),
                            r && r(o, null))
                        }
                        ))
                    }
                }
                ,
                e
            }();
            Ve.onlineLRUCache = new He,
            o._RF.pop(),
            o._RF.push({}, "bb44dttFJlL977g0usAKvPR", "UIHelper", void 0);
            var We = function() {
                function e() {}
                return e.copyText = function(e, o, i) {
                    void 0 === o && (o = null);
                    try {
                        navigator.clipboard.writeText(e),
                        o && o()
                    } catch (i) {
                        t.error(this.tag, "copyText error = " + i),
                        i && i(i)
                    }
                }
                ,
                e.enableBtnClickable = function(e, o) {
                    var i = e.getComponent(N);
                    i ? i.interactable = o : t.warn(this.tag, "Node does not have a Button component")
                }
                ,
                e.bindClick = function(e, o, i) {
                    if (this.isValid(e)) {
                        var r = e.getComponent(N);
                        r ? r.node.on(N.EventType.CLICK, o, i) : e.on(N.EventType.CLICK, o, i)
                    } else
                        t.warn(this.tag, "Cannot bind click to invalid node")
                }
                ,
                e.convertPositionBToA = function(e, t) {
                    return this.convertWorldPositionBToA(e.worldPosition, t)
                }
                ,
                e.convertWorldPositionBToA = function(e, t) {
                    var o = new a
                      , i = new g
                      , r = t.getWorldMatrix();
                    return g.invert(i, r),
                    a.transformMat4(o, e, i),
                    o
                }
                ,
                e.loadResSpriteFrame = function(e, t, o) {
                    void 0 === o && (o = !0),
                    this.loadBundleSpriteFrame("resources", e, t, o)
                }
                ,
                e.loadBundleSpriteFrame = function(e, t, o, i) {
                    void 0 === i && (i = !1),
                    o && (i && (o.spriteFrame = null),
                    m.loadBundle(e, (function(e, i) {
                        i && i.load(t + "/spriteFrame", h, (function(e, t) {
                            t ? o.spriteFrame = t : console.log("loadBundleSpriteFrame error = " + e)
                        }
                        ))
                    }
                    )))
                }
                ,
                e.loadResourcesSpriteFrame = function(e, t, o, i) {
                    void 0 === o && (o = !1),
                    void 0 === i && (i = null),
                    e && (o && (e.spriteFrame = null),
                    y.load(t, f, (function(t, o) {
                        if (t)
                            return console.error("SpriteFrame load failed, err:" + t.message);
                        o && (e.spriteFrame = h.createWithImage(o),
                        i && i(o))
                    }
                    )))
                }
                ,
                e.loadResourcesAtlas = function(e, t) {
                    y.load(e, p, (function(e, o) {
                        if (e)
                            return console.error("SpriteAtlas load failed, err:" + e.message);
                        t && t(o)
                    }
                    ))
                }
                ,
                e.loadResourcesAtlasSpriteFrame = function(e, t, o, i) {
                    void 0 === i && (i = !1),
                    e && (i && (e.spriteFrame = null),
                    this.loadResourcesAtlas(t, (function(t) {
                        var i = t.getSpriteFrame(o);
                        i && (e.spriteFrame = i)
                    }
                    )))
                }
                ,
                e.loadRemoteSpriteFrame = function(e, t, o, i) {
                    void 0 === o && (o = !1),
                    void 0 === i && (i = null),
                    e && (o && (e.spriteFrame = null),
                    null != t && 0 != t.length && m.loadRemote(t, {
                        ext: ".png"
                    }, (function(t, o) {
                        o && (e.spriteFrame = h.createWithImage(o),
                        i && i(o))
                    }
                    )))
                }
                ,
                e.loadResourcesPrefab = function(e, t) {
                    void 0 === t && (t = null),
                    Ve.loadPrefab(Je.bundleName, e, (function(e, o) {
                        if (e)
                            return console.error("prefab load failed, err:" + e.message);
                        if (o) {
                            var i = b(o);
                            t && t(i)
                        }
                    }
                    ))
                }
                ,
                e.updateButtonLabel = function(e, t) {
                    var o = e.getComponentInChildren(w);
                    o && (o.string = t)
                }
                ,
                e.updateButton = function(e, t, o) {
                    void 0 === o && (o = !0);
                    var i = e.getComponent(N);
                    i && i.interactable != t && (i.interactable = t,
                    o && this.updateSpriteEnable(e, t))
                }
                ,
                e.updateSpriteEnable = function(e, t) {
                    e.getComponent(v).color = t ? k.WHITE : new k(160,160,160)
                }
                ,
                e.updateSpriteColor = function(e, t) {
                    e.getComponent(v).color = t
                }
                ,
                e.updateSpriteColorByHEX = function(e, t) {
                    this.updateSpriteColor(e, (new k).fromHEX(t))
                }
                ,
                e.getTrimedName = function(e, t) {
                    void 0 === t && (t = 6);
                    var o = 2 * t
                      , i = !1;
                    return xe.getStringLength(e) > o && (i = !0,
                    e = xe.getSubString(e, o - 1)),
                    e.length > t && (i = !0,
                    e = e.substring(0, e.length - 2)),
                    i && (e += "..."),
                    e
                }
                ,
                e.isValid = function(e) {
                    return e instanceof T ? this.isValidNode(e) : e instanceof C ? this.isValidComponent(e) : null == e || null == e ? (t.log(this.tag, "obj is null"),
                    !1) : !!n(e) || (t.log(this.tag, "obj system is invalid"),
                    !1)
                }
                ,
                e.isValidNode = function(e) {
                    return null == e || null == e ? (t.log(this.tag, "component is null"),
                    !1) : n(e) ? !!e.isValid || (t.log(this.tag, "component is invalid = " + e.name),
                    !1) : (t.log(this.tag, "component system is invalid = " + e.name),
                    !1)
                }
                ,
                e.getNodeSize = function(e) {
                    if (!this.isValidNode(e))
                        return t.warn(this.tag, "Cannot get size of invalid node"),
                        null;
                    var o = e.getComponent(_);
                    return o ? {
                        width: o.width,
                        height: o.height
                    } : (t.warn(this.tag, "Node does not have a UITransform component"),
                    null)
                }
                ,
                e.isValidComponent = function(e) {
                    return null == e || null == e ? (t.log(this.tag, "component is null"),
                    !1) : n(e) ? e.isValid ? e.node ? !!e.node.isValid || (t.log(this.tag, "component node is invalid, component name = " + e.name + ", node name = " + e.node.name),
                    !1) : (t.log(this.tag, "component node is null, component name = " + e.name),
                    !1) : (t.log(this.tag, "component is invalid = " + e.name),
                    !1) : (t.log(this.tag, "component system is invalid = " + e.name),
                    !1)
                }
                ,
                e.getCanvasNode = function() {
                    return s.getScene().getChildByName("Canvas")
                }
                ,
                e.captureScreenshotToRenderTexture = function() {
                    var e = this
                      , t = this.getCanvasNode();
                    return new Promise((function(o, i) {
                        if (e.isValidNode(t)) {
                            var r = t.getComponentInChildren(S);
                            if (r) {
                                var n = new R
                                  , l = e.getNodeSize(t);
                                l ? (n.reset(l),
                                r.targetTexture = n,
                                s.once(B.EVENT_AFTER_DRAW, (function() {
                                    o(n),
                                    r.targetTexture = null
                                }
                                )),
                                s.tick(0)) : i(new Error("Failed to get node size"))
                            } else
                                i(new Error("Node does not have a Camera component"))
                        } else
                            i(new Error("Invalid node provided for screenshot"))
                    }
                    ))
                }
                ,
                e.captureScreenshot = function(e) {
                    var t = this;
                    void 0 === e && (e = !0);
                    var o = this.getCanvasNode();
                    return new Promise((function(i, r) {
                        if (t.isValidNode(o)) {
                            var n = o.getComponentInChildren(S);
                            if (n) {
                                var l = new R
                                  , a = t.getNodeSize(o);
                                a ? (a.width = Math.floor(a.width),
                                a.height = Math.floor(a.height),
                                l.reset(a),
                                n.targetTexture = l,
                                s.once(B.EVENT_AFTER_DRAW, (function() {
                                    var t = l.readPixels()
                                      , o = document.createElement("canvas")
                                      , r = o.getContext("2d");
                                    o.width = l.width,
                                    o.height = l.height,
                                    console.log("texture.width = " + l.width + ", texture.height = " + l.height);
                                    var a = r.createImageData(l.width, l.height);
                                    a.data.set(t),
                                    r.putImageData(a, 0, 0),
                                    e && (console.log("rotate ctx"),
                                    r.save(),
                                    r.scale(1, -1),
                                    r.drawImage(o, 0, -o.height),
                                    r.restore());
                                    var u = o.toDataURL("image/png", .85);
                                    i(u),
                                    n.targetTexture = null,
                                    l.destroy()
                                }
                                )),
                                s.tick(0)) : r(new Error("Failed to get node size"))
                            } else
                                r(new Error("Node does not have a Camera component"))
                        } else
                            r(new Error("Invalid node provided for screenshot"))
                    }
                    ))
                }
                ,
                e.getSize = function(e) {
                    var t = e.getComponent(_);
                    return t ? {
                        width: t.width,
                        height: t.height
                    } : {
                        width: 0,
                        height: 0
                    }
                }
                ,
                e.getWidth = function(e) {
                    return this.getSize(e).width
                }
                ,
                e.getHeight = function(e) {
                    return this.getSize(e).height
                }
                ,
                e
            }();
            We.tag = "UIHelper",
            o._RF.pop(),
            o._RF.push({}, "775c95MTVNCypplCMpTJVl5", "ZYHostHelper", void 0);
            var qe = function() {
                function e() {}
                return e.checkUserInfoByWindow = function() {
                    if (window.zyuserinfo && !this.isUpdatedUserInfo)
                        return t.log("zyuserinfo found " + JSON.stringify(window.zyuserinfo)),
                        this.userDeviceInfo = window.zyuserinfo,
                        void (this.isUpdatedUserInfo = !0);
                    t.log("zyuserinfo not found")
                }
                ,
                e.getURL = function() {
                    return window && window.location ? window.location.href : null
                }
                ,
                e.getURLSearch = function() {
                    return window && window.location ? window.location.search : null
                }
                ,
                e.isLogin = function() {
                    return this.getDeviceInfoFromUrl() && 2 == this.userDeviceInfo.userstatus
                }
                ,
                e.login = function() {
                    ke.ins().login()
                }
                ,
                e.isIOS = function() {
                    return this.getDeviceInfoFromUrl() && 1 == this.userDeviceInfo.h_dt
                }
                ,
                e.isAndroid = function() {
                    return this.getDeviceInfoFromUrl() && 0 == this.userDeviceInfo.h_dt
                }
                ,
                e.clearDeviceInfo = function() {
                    this.userDeviceInfo = null
                }
                ,
                e.isLessThanVersion = function(e) {
                    var t = this.getDeviceInfoFromUrl();
                    if (t) {
                        return function(e, t) {
                            for (var o = e.split(".").map(Number), i = t.split(".").map(Number), r = Math.max(o.length, i.length), n = 0; n < r; n++) {
                                var l = o[n] || 0
                                  , a = i[n] || 0;
                                if (l > a)
                                    return 1;
                                if (l < a)
                                    return -1
                            }
                            return 0
                        }(t.h_av, e) < 0
                    }
                    return !1
                }
                ,
                e.getTestDeviceInfoFromUrl = function() {
                    return Qe.isTestURL() ? {
                        h_did: "1234567890",
                        h_m: 123,
                        h_dt: 0
                    } : null
                }
                ,
                e.getFrom = function() {
                    if (this.from)
                        return this.from;
                    var e = this.getURLSearch()
                      , t = new URLSearchParams(e);
                    return this.from = t.get("from") || "default",
                    (!this.from || this.from.length <= 0) && (this.from = "default"),
                    this.from
                }
                ,
                e.getDeviceInfoFromUrl = function() {
                    if (this.userDeviceInfo)
                        return this.userDeviceInfo;
                    var e = this.getURLSearch()
                      , t = new URLSearchParams(e).get("deviceinfo");
                    if (t)
                        try {
                            return this.userDeviceInfo = JSON.parse(t),
                            this.userDeviceInfo
                        } catch (e) {
                            console.error("Failed to parse deviceinfo JSON", e)
                        }
                    return this.userDeviceInfo || (this.userDeviceInfo = this.getTestDeviceInfoFromUrl()),
                    this.userDeviceInfo
                }
                ,
                e.shareWeb = function(e, t, o, i, r, n, l, a) {
                    this.shareWithType(e, "web", t, o, i, r, n, l, a)
                }
                ,
                e.sharePic = function(e, t, o, i, r, n, l, a) {
                    this.shareWithType(e, "pic", t, o, i, r, n, l, a)
                }
                ,
                e.shareImg = function(e, t, o, i, r, n, l, a) {
                    this.shareWithType(e, "img", t, o, i, r, n, l, a)
                }
                ,
                e.shareText = function(e, t, o, i, r, n, l, a) {
                    this.shareWithType(e, "text", t, o, i, r, n, l, a)
                }
                ,
                e.shareWithType = function(e, o, i, r, n, l, a, u, s) {
                    t.log("shareWithType imgUrl = " + l + ", imgBase64 = " + u),
                    ke.ins().shareWithType(e, o, i, r, n, l, a, u, s)
                }
                ,
                e.pressBack = function(e) {
                    ke.ins().pressBack(e)
                }
                ,
                e.showToast = function(e) {
                    ke.ins().toast(e)
                }
                ,
                e.vibrate = function() {
                    ke.ins().vibrateWithLevel(1)
                }
                ,
                e.wrapperExit = function(t) {
                    void 0 === t && (t = "home");
                    var o = Qe.getCurrentTimeMs() - Qe.isStatViewedSt;
                    Qe.isStatViewedSt <= 0 && (o = 0),
                    Ee.click(Le.exitbutton, "home", {
                        duration: o,
                        exit_type: t
                    }),
                    e.statClick(Le.exitbutton, {
                        duration: o,
                        exit_type: t
                    }),
                    this.exit()
                }
                ,
                e.exit = function() {
                    ke.ins().closeWindow()
                }
                ,
                e.saveScreenshot = function(o) {
                    t.log("saveScreenshot isAndroid = " + e.isAndroid() + ", isIOS = " + e.isIOS()),
                    We.captureScreenshot().then((function(e) {
                        ke.ins().saveImage(null, e, o)
                    }
                    )).catch((function(e) {
                        o({
                            ret: -1,
                            msg: e.message
                        }),
                        console.error("saveScreenshot error", e)
                    }
                    ))
                }
                ,
                e.checkUpgrade = function() {
                    ke.ins().checkUpgrade()
                }
                ,
                e.openMarket = function(e) {
                    ke.ins().openMarket(e)
                }
                ,
                e.saveImage = function(e, t) {
                    ke.ins().saveImage(e, null, t)
                }
                ,
                e.httpRequestPost = function(e, o, i, r) {
                    void 0 === o && (o = {}),
                    void 0 === i && (i = {}),
                    void 0 === r && (r = null),
                    t.log("httpRequestPost url = " + e + ", params = " + JSON.stringify(o) + ", header = " + JSON.stringify(i)),
                    ke.ins().httpRequestPost(e, o, i, r)
                }
                ,
                e.httpRequestGet = function(e, o, i) {
                    void 0 === o && (o = {}),
                    void 0 === i && (i = null),
                    t.log("httpRequestGet url = " + e + ", header = " + JSON.stringify(o)),
                    ke.ins().httpRequestGet(e, o, i)
                }
                ,
                e.statViewHome = function() {
                    this.statAction(Me.view, De.tenyears, Le.activitypage, {
                        from: e.from
                    })
                }
                ,
                e.statViewRelive = function(e) {
                    void 0 === e && (e = {}),
                    this.statAction(Me.view, De.tenyears, Le.revive, e)
                }
                ,
                e.statViewRandomReward = function(e) {
                    void 0 === e && (e = {}),
                    this.statAction(Me.view, De.tenyears, Le.gift, e)
                }
                ,
                e.statViewGameResult = function(e, t) {
                    void 0 === t && (t = {}),
                    this.statAction(Me.view, De.tenyears, e ? Le.gamewin : Le.gameend, t)
                }
                ,
                e.statRequestGift = function(e) {
                    void 0 === e && (e = {}),
                    this.statAction(Me.request, De.tenyears, Le.gift, e)
                }
                ,
                e.statShareSuccess = function(e) {
                    void 0 === e && (e = {}),
                    this.statAction(Me.success, De.tenyears, Le.share_success, e)
                }
                ,
                e.statClick = function(e, t) {
                    void 0 === e && (e = ""),
                    void 0 === t && (t = {}),
                    this.statAction(Me.click, De.tenyears, e, t)
                }
                ,
                e.statErrorMap = function(e) {
                    void 0 === e && (e = {}),
                    this.statAction(Me.error, De.tenyears, Le.map, {
                        mapdata: e
                    })
                }
                ,
                e.statAction = function(e, o, i, r) {
                    void 0 === r && (r = {}),
                    t.log("statAction type = " + e + ", stype = " + o + ", fromInfo = " + i + ", data = " + JSON.stringify(r)),
                    ke.ins().statAction(e, o, i, r)
                }
                ,
                e.showRewardAd = function(e) {
                    ke.isWebBridge ? e(!0) : ke.ins().showRewardAd((function(o) {
                        t.log("showRewardAd data = " + JSON.stringify(o)),
                        e(o && 1 == o.ret)
                    }
                    ))
                }
                ,
                e.requestPost = function(e, o, i) {
                    var r = this;
                    void 0 === o && (o = {}),
                    void 0 === i && (i = null),
                    ke.isWebBridge ? this.webRequestPost(e, o, (function(e, t) {
                        e ? i(e, null) : t ? i(null, t) : i(new Error("数据异常，请重试"), null)
                    }
                    )) : (t.log("requestPost native url = " + e + ", params = " + JSON.stringify(o)),
                    this.httpRequestPost(e, o, {}, (function(e) {
                        if (t.log("requestPost native callback typeof " + typeof e),
                        e && 1 == e.ret)
                            i(null, e.data);
                        else if (e && 0 != e.ret && !e.hasOwnProperty("msg") && r.isIOS())
                            i(null, e);
                        else if (e) {
                            var o = e.message || e.msg || "数据异常，请重试";
                            o.length > 100 && (o = "数据异常，请重试"),
                            i(new Error(o), null)
                        } else
                            i(new Error("数据异常，请重试"), null)
                    }
                    )))
                }
                ,
                e.webRequestPost = function(o, i, r) {
                    void 0 === i && (i = {}),
                    void 0 === r && (r = null);
                    var n = new Te;
                    n.type = "POST",
                    n.params = me({
                        h_did: this.getDeviceInfoFromUrl().h_did ? this.getDeviceInfoFromUrl().h_did : "",
                        h_m: this.getDeviceInfoFromUrl().h_m ? this.getDeviceInfoFromUrl().h_m : 123,
                        h_dt: e.isAndroid() ? 0 : 1,
                        token: this.getDeviceInfoFromUrl().token
                    }, i),
                    n.onSuccess = function(e) {
                        if (!e)
                            return r(new Error("request result is empty"), null),
                            void t.log("request result is empty");
                        var o = JSON.parse(e);
                        o ? o.data ? r(null, o.data) : r(new Error(o.msg), null) : r(new Error("数据异常，请重试"), null)
                    }
                    ,
                    n.onFail = function(e, o) {
                        r(new Error(o), null),
                        t.logI("failed error code = " + e + " msg = " + o)
                    }
                    ,
                    Be.request(o, n)
                }
                ,
                e.shareWebWithInfo = function(o, i) {
                    void 0 === i && (i = null),
                    t.log("shareWebWithInfo shareInfo = " + JSON.stringify(o));
                    var r = o.platforms
                      , n = o.title
                      , l = o.content
                      , a = o.target
                      , u = o.img_url;
                    e.shareWeb(r, n, l, a, u, !1, null, (function(e) {
                        t.log("shareWeb result = " + e),
                        i && i(e)
                    }
                    ))
                }
                ,
                e.getUserInfo = function(e) {
                    var o = this;
                    void 0 === e && (e = null),
                    ke.ins().getDeviceInfo((function(i) {
                        i && 2 == i.userstatus && (o.userDeviceInfo = i),
                        t.log("getUserInfo callback: " + JSON.stringify(i)),
                        e && e(i)
                    }
                    ))
                }
                ,
                e
            }();
            qe.userDeviceInfo = null,
            qe.isUpdatedUserInfo = !1,
            qe.from = null,
            o._RF.pop(),
            o._RF.push({}, "5f307KDKG9CMbW+woGHe0G1", "HttpServerConfig", void 0);
            var je = function() {
                function e() {}
                return e.getURL = function() {
                    return window && window.location ? window.location.href : null
                }
                ,
                e.isHttps = function() {
                    var e = this.getURL();
                    return e && e.indexOf("https") >= 0
                }
                ,
                e.getHost = function() {
                    return this.isDebug ? e.HTTP_ROUTE_URL_DEVELOP : e.HTTP_ROUTE_URL_ONLINE
                }
                ,
                e.getAPIHost = function() {
                    var t = this.isDebug ? e.HTTP_ROUTE_URL_API_DEV : e.HTTP_ROUTE_URL_API_ONLINE;
                    return this.isHttps() && (t = t.replace("http://", "https://")),
                    t
                }
                ,
                e.getBundleConfigURL = function() {
                    return e.getHost() + "/config/game"
                }
                ,
                e.getStatActionURL = function() {
                    return e.getHost() + "/stat/game_actions"
                }
                ,
                e.getHomePageConfigURL = function() {
                    return e.getAPIHost() + "/misc/get_tenth_anniversary_homepage_config"
                }
                ,
                e.getRankListURL = function() {
                    return e.getAPIHost() + "/misc/get_tenth_anniversary_rank"
                }
                ,
                e.getPicListURL = function() {
                    return e.getAPIHost() + "/misc/get_tenth_anniversary_pictures"
                }
                ,
                e.getStartConfigURL = function() {
                    return e.getAPIHost() + "/misc/get_tenth_anniversary_start_config"
                }
                ,
                e.getRandomRewardURL = function() {
                    return e.getAPIHost() + "/misc/draw_tenth_anniversary_reward"
                }
                ,
                e.unlockPictureURL = function() {
                    return e.getAPIHost() + "/misc/unlock_tenth_anniversary_picture"
                }
                ,
                e.submitFinishGameURL = function() {
                    return e.getAPIHost() + "/misc/finish_tenth_anniversary_game"
                }
                ,
                e
            }();
            je.isDebug = !1,
            je.HTTP_ROUTE_URL_DEVELOP = "http://test.wanyaa.com",
            je.HTTP_ROUTE_URL_ONLINE = "https://api.wanyaa.com",
            je.HTTP_ROUTE_URL_API_DEV = "http://test.izuiyou.com",
            je.HTTP_ROUTE_URL_API_ONLINE = "https://api.izuiyou.com",
            o._RF.pop(),
            o._RF.push({}, "1efbarcOlpPE4kQjy1QfW5o", "AppHelper", void 0);
            var Je = function() {
                function e() {}
                return e.getToolCount = function(e) {
                    return e.reduce((function(e, t) {
                        return e + t
                    }
                    ), 0)
                }
                ,
                e.minusToolCountOne = function(e) {
                    e.pop()
                }
                ,
                e.getGameBgColor = function() {
                    var e = this.currentPicId - 1;
                    return e < 0 || e >= this.gameBgColors.length ? this.gameBgColors[0] : this.gameBgColors[e]
                }
                ,
                e.getGameMapBgSpriteName = function() {
                    var e = this.currentPicId - 1;
                    return e < 0 || e >= this.mapBgSpriteNames.length ? this.mapBgSpriteNames[0] : this.mapBgSpriteNames[e]
                }
                ,
                e.getGameProgressName = function() {
                    var e = this.currentPicId - 1;
                    return e < 0 || e >= this.gameProgressNames.length ? this.gameProgressNames[0] : this.gameProgressNames[e]
                }
                ,
                e.getGameMergeBgSpriteName = function() {
                    var e = this.currentPicId - 1;
                    return e < 0 || e >= this.gameMergeBgSpriteNames.length ? this.gameMergeBgSpriteNames[0] : this.gameMergeBgSpriteNames[e]
                }
                ,
                e.initSomething = function() {
                    e.isInited || (e.isInited = !0,
                    qe.checkUserInfoByWindow(),
                    t.DEBUG_LOG = Qe.isTestURL(),
                    ke.ins().init(),
                    Ze.inst.init(9999),
                    je.isDebug = Qe.isTestURL(),
                    this.reinitRequestHelper())
                }
                ,
                e.reinitRequestHelper = function() {
                    Pe.inst.init(qe.getDeviceInfoFromUrl())
                }
                ,
                e
            }();
            Je.bundleName = "game_bundle",
            Je.appName = "zytenyears",
            Je.gameId = 2001,
            Je.sharePlatforms = ["zuiyou", "weixin_friend", "weixin_timeline", "qq", "qzone", "weibo"],
            Je.sharePlatformsOnlyZuiyou = ["zuiyou"],
            Je.gameBgColors = ["#D0ECFF", "#E2E8FE", "#E2E8FE", "#FEF6DA", "#DEF7EB", "#FFEAE7", "#FFEAE7", "#D0ECFF", "#E2E8FE", "#FFECD7"],
            Je.mapBgSpriteNames = ["game_bg_border_1", "game_bg_border_2", "game_bg_border_2", "game_bg_border_3", "game_bg_border_4", "game_bg_border_5", "game_bg_border_5", "game_bg_border_1", "game_bg_border_6", "game_bg_border_7"],
            Je.gameMergeBgSpriteNames = ["game_merge_bg_1", "game_merge_bg_2", "game_merge_bg_2", "game_merge_bg_3", "game_merge_bg_4", "game_merge_bg_5", "game_merge_bg_5", "game_merge_bg_1", "game_merge_bg_6", "game_merge_bg_7"],
            Je.gameProgressNames = ["game_progress_1_", "game_progress_2_", "game_progress_2_", "game_progress_3_", "game_progress_5_", "game_progress_4_", "game_progress_4_", "game_progress_1_", "game_progress_2_", "game_progress_6_"],
            Je.currentPicId = 1,
            Je.currentGameID = "",
            Je.toolRemoves = [],
            Je.toolRollbacks = [],
            Je.toolArranges = [],
            Je.isInited = !1,
            o._RF.pop(),
            o._RF.push({}, "03845Na4OZLUrVxegaWh9PE", "LocalStorageHelper", void 0);
            var Xe = function() {
                function e() {}
                return e.init = function(e, t) {
                    this._configId = "uid_" + e + "_gid_" + t
                }
                ,
                e.getRealKey = function(e) {
                    return this._configId + "_" + e
                }
                ,
                e.isNotExists = function(e) {
                    return null == e || null == e
                }
                ,
                e.put = function(e, t) {
                    l.localStorage.setItem(this.getRealKey(e), t)
                }
                ,
                e.set = function(e, t) {
                    this.put(e, t)
                }
                ,
                e.get = function(e, t) {
                    var o = l.localStorage.getItem(this.getRealKey(e));
                    return this.isNotExists(o) ? t : o
                }
                ,
                e.getNumber = function(e, t) {
                    var o = this.get(e);
                    if (this.isNotExists(o))
                        return t;
                    try {
                        return Number(o)
                    } catch (e) {
                        console.log("error = " + e)
                    }
                    return t
                }
                ,
                e.getBoolean = function(e, t) {
                    var o = this.get(e);
                    if (this.isNotExists(o))
                        return t;
                    try {
                        return "true" === o.toLowerCase()
                    } catch (e) {
                        console.log("error = " + e)
                    }
                    return t
                }
                ,
                e.remove = function(e) {
                    l.localStorage.removeItem(this.getRealKey(e))
                }
                ,
                e.clearAll = function() {
                    l.localStorage.clear()
                }
                ,
                e
            }();
            Xe._configId = "",
            o._RF.pop(),
            o._RF.push({}, "0485fuFu75HtJTgUOcLzCgG", "GameStorage", void 0);
            var Ze = function() {
                function e() {
                    this._musicOn = !0,
                    this._soundOn = !0,
                    this._viberateOn = !0,
                    this.uid = void 0,
                    this.mid = void 0,
                    this.isInited = !1
                }
                var t = e.prototype;
                return t.init = function(e) {
                    var t;
                    void 0 === e && (e = null),
                    this.isInited || (this.isInited = !0,
                    this.mid = null != (t = e) ? t : 9999,
                    Xe.init(this.mid, Je.gameId),
                    this._musicOn = Xe.getBoolean("game_musicOn", this._musicOn),
                    this._soundOn = Xe.getBoolean("game_soundOn", this._soundOn),
                    this._viberateOn = Xe.getBoolean("game_viberateOn", this._viberateOn))
                }
                ,
                t.setConfig = function(e, t) {
                    Xe.set("set_config_" + e, t)
                }
                ,
                t.getConfig = function(e) {
                    var t = "set_config_" + e;
                    return Xe.getBoolean(t, !1)
                }
                ,
                t.setConfigNumber = function(e, t) {
                    Xe.set("set_config_num_" + e, t)
                }
                ,
                t.getConfigNumber = function(e) {
                    var t = "set_config_num_" + e;
                    return Xe.getNumber(t, 0)
                }
                ,
                t.setConfigString = function(e, t) {
                    Xe.set("set_config_str_" + e, t)
                }
                ,
                t.getConfigString = function(e) {
                    var t = "set_config_str_" + e;
                    return Xe.get(t, "")
                }
                ,
                de(e, [{
                    key: "musicOn",
                    get: function() {
                        return this._musicOn
                    },
                    set: function(e) {
                        this._musicOn = e,
                        Xe.set("game_musicOn", e)
                    }
                }, {
                    key: "soundOn",
                    get: function() {
                        return this._soundOn
                    },
                    set: function(e) {
                        this._soundOn = e,
                        Xe.set("game_soundOn", e)
                    }
                }, {
                    key: "viberateOn",
                    get: function() {
                        return this._viberateOn
                    },
                    set: function(e) {
                        this._viberateOn = e,
                        Xe.set("game_viberateOn", e)
                    }
                }], [{
                    key: "inst",
                    get: function() {
                        return null == this._inst && (this._inst = new e),
                        this._inst
                    }
                }]),
                e
            }();
            Ze._inst = void 0,
            o._RF.pop(),
            o._RF.push({}, "68e3ardpoRFu6V/ddK4fNh/", "RandomHelper", void 0);
            var Ye = function() {
                function e() {}
                return e.random = function(e, t) {
                    return t ? this.getRandomNum(e, t) : Math.floor(Math.random() * e)
                }
                ,
                e.randomFloat = function(e, t) {
                    return Math.random() * (t - e) + e
                }
                ,
                e.getRandomNum = function(e, t) {
                    var o = t - e;
                    return e + Math.floor(Math.random() * (o + 1))
                }
                ,
                e.valueBySeed = function(e) {
                    return (e = (9301 * e + 49297) % 233280) / 233280
                }
                ,
                e.randomBySeed = function(e, t) {
                    return this.valueBySeed(e) * t
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "1764dxF/s1J/YecYxbRFH6C", "GameHelper", void 0);
            var Ke, Qe = function() {
                function e() {}
                return e.addAppChangeEvent = function(e) {
                    this.appChangeEvents.push(e)
                }
                ,
                e.removeAppChangeEvent = function(e) {
                    var t = this.appChangeEvents.indexOf(e);
                    -1 != t && this.appChangeEvents.splice(t, 1)
                }
                ,
                e.getPassEmoji = function() {
                    var e = Ye.getRandomNum(0, this.emojiPassTexts.length - 1);
                    return {
                        name: this.emojiPassImgName[e],
                        text: this.emojiPassTexts[e]
                    }
                }
                ,
                e.getRandomAngle = function() {
                    var e = Ye.getRandomNum(0, this.blockAllDirectAngles.length - 1);
                    return this.blockAllDirectAngles[e]
                }
                ,
                e.getCurrentTimeMs = function() {
                    return (new Date).getTime()
                }
                ,
                e.isMobile = function() {
                    return l.isMobile
                }
                ,
                e.isBrowser = function() {
                    return l.isBrowser
                }
                ,
                e.isNative = function() {
                    return l.isNative
                }
                ,
                e.getSkinAb = function() {
                    return "skin_ab"
                }
                ,
                e.getSkinABSlot = function() {
                    return this.getABSlot(this.getSkinAb())
                }
                ,
                e.getABSlot = function(e) {
                    var t = 1;
                    return this.getSkinAb() == e && (t = 2),
                    Ze.inst.mid % t
                }
                ,
                e.startTimeout = function(e, t) {
                    if (e > 0) {
                        var o = setTimeout((function() {
                            o && (clearTimeout(o),
                            t())
                        }
                        ), 1e3 * e);
                        return o
                    }
                    return t(),
                    -1
                }
                ,
                e.isSameDay = function(e, t) {
                    var o = new Date(e)
                      , i = new Date(t);
                    return o.setHours(0, 0, 0, 0) == i.setHours(0, 0, 0, 0)
                }
                ,
                e.webCopyString = function(e, t) {
                    var o = e + ""
                      , i = document.createElement("textarea");
                    i.value = o,
                    i.setAttribute("readonly", ""),
                    i.style.position = "absolute",
                    i.style.left = "-9999px",
                    i.style.fontSize = "12pt";
                    var r = getSelection()
                      , n = null;
                    r.rangeCount > 0 && (n = r.getRangeAt(0)),
                    document.body.appendChild(i),
                    i.select(),
                    i.selectionStart = 0,
                    i.selectionEnd = o.length;
                    var l = !1;
                    try {
                        l = document.execCommand("copy")
                    } catch (e) {}
                    return document.body.removeChild(i),
                    n && (r.removeAllRanges(),
                    r.addRange(n)),
                    t && t(l),
                    l ? console.log("复制成功") : console.log("复制失败"),
                    l
                }
                ,
                e.getDayOfYear = function() {
                    var e = new Date
                      , t = new Date(e.getFullYear(),0,1)
                      , o = e.getTime() - t.getTime();
                    return Math.floor(o / 864e5)
                }
                ,
                e.getURL = function() {
                    return window && window.location ? window.location.href : null
                }
                ,
                e.isTestURL = function() {
                    var e = this.getURL();
                    return e && (e.indexOf("testmode=1") >= 0 || this.isLocalURL()) || this.isTestIPURL()
                }
                ,
                e.isEditURL = function() {
                    var e = this.getURL();
                    return e && this.isTestURL() && e.indexOf("editmode=1") >= 0
                }
                ,
                e.isTestIPURL = function() {
                    var e = this.getURL();
                    return !!e && e.startsWith("http://192.168.")
                }
                ,
                e.isLocalURL = function() {
                    var e = this.getURL();
                    return e && e.indexOf("localhost:") >= 0
                }
                ,
                e
            }();
            Qe.isStatViewedSt = 0,
            Qe.lookAdCount = 0,
            Qe.block1Height = 180,
            Qe.block1Width = 93,
            Qe.blockAirplaneWidth = 77,
            Qe.emojiPassImgName = [2, 3, 4, 5, 6, 7, 8, 9, 10],
            Qe.emojiPassTexts = ["大哥你太是那个了", "太有食粒辣", "你太能耐啦", "果然有两把刷子", "你等着我叫队友来", "操作有点飘逸啊", "麦克阿瑟如此评价", "策划感动到螺旋起飞", "过········过了？！"],
            Qe.physicsBreakGroup = 1,
            Qe.blockAllDirectAngles = [45, 0, 315, 225, 180, 135, 270, 90],
            Qe.gameLevelSteps = [10, 55, 43, 43, 72, 60, 52, 66, 64, 62, 43, 50, 50, 58, 75],
            Qe.persistRootNode = null,
            Qe.appChangeEvents = [],
            Qe.isBackground = !1,
            Qe.currentSkin = null,
            o._RF.pop(),
            o._RF.push({}, "aa9ebagAOtK5J+JCn/m0UX6", "App", void 0);
            var $e = u.ccclass;
            u.property,
            $e(Ke = function(e) {
                function o() {
                    return e.apply(this, arguments) || this
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    console.log("App start"),
                    t.logI("App start"),
                    I.hideStats(),
                    s.addPersistRootNode(this.node),
                    this.initEvent(),
                    Qe.persistRootNode = this.node
                }
                ,
                i.initEvent = function() {
                    P.on(F.EVENT_HIDE, this.onAppHide, this),
                    P.on(F.EVENT_SHOW, this.onAppShow, this)
                }
                ,
                i.onAppHide = function() {
                    t.logI("====================>离开前台<===================="),
                    Qe.isBackground = !0,
                    this.onChanged()
                }
                ,
                i.onAppShow = function() {
                    t.logI("====================>回到前台<===================="),
                    Qe.isBackground = !1,
                    this.onChanged()
                }
                ,
                i.onChanged = function() {
                    Qe.appChangeEvents.forEach((function(e) {
                        e.callback.call(e.target)
                    }
                    ))
                }
                ,
                o
            }(C));
            o._RF.pop();
            var et = new (function() {
                function e() {
                    this._registry = {},
                    this._moduleCache = {}
                }
                var t = e.prototype;
                return t.define = function(e, t, o) {
                    this._registry[e] = {
                        factory: t,
                        resolveMap: o
                    }
                }
                ,
                t.require = function(e) {
                    return this._require(e)
                }
                ,
                t.throwInvalidWrapper = function(e, t) {
                    throw new Error("Module '" + e + "' imported from '" + t + "' is expected be an ESM-wrapped CommonJS module but it doesn't.")
                }
                ,
                t._require = function(e, t) {
                    var o = this._moduleCache[e];
                    if (o)
                        return o.exports;
                    var i = {
                        id: e,
                        exports: {}
                    };
                    return this._moduleCache[e] = i,
                    this._tryModuleLoad(i, e),
                    i.exports
                }
                ,
                t._resolve = function(e, t) {
                    return this._resolveFromInfos(e, t) || this._throwUnresolved(e, t)
                }
                ,
                t._resolveFromInfos = function(e, t) {
                    var o, i;
                    return e in cjsInfos ? e : t && null != (o = null == (i = cjsInfos[t]) ? void 0 : i.resolveCache[e]) ? o : void 0
                }
                ,
                t._tryModuleLoad = function(e, t) {
                    var o = !0;
                    try {
                        this._load(e, t),
                        o = !1
                    } finally {
                        o && delete this._moduleCache[t]
                    }
                }
                ,
                t._load = function(e, t) {
                    var o = this._loadWrapper(t)
                      , i = o.factory
                      , r = o.resolveMap
                      , n = this._createRequire(e)
                      , l = r ? this._createRequireWithResolveMap("function" == typeof r ? r() : r, n) : n;
                    i(e.exports, l, e)
                }
                ,
                t._loadWrapper = function(e) {
                    return e in this._registry ? this._registry[e] : this._loadHostProvidedModules(e)
                }
                ,
                t._loadHostProvidedModules = function(e) {
                    return {
                        factory: function(t, o, i) {
                            if ("undefined" == typeof require)
                                throw new Error("Current environment does not provide a require() for requiring '" + e + "'.");
                            try {
                                i.exports = require(e)
                            } catch (t) {
                                throw new Error("Exception thrown when calling host defined require('" + e + "').",{
                                    cause: t
                                })
                            }
                        }
                    }
                }
                ,
                t._createRequire = function(e) {
                    var t = this;
                    return function(o) {
                        return t._require(o, e)
                    }
                }
                ,
                t._createRequireWithResolveMap = function(e, t) {
                    return function(o) {
                        var i = e[o];
                        if (i)
                            return t(i);
                        throw new Error("Unresolved specifier " + o)
                    }
                }
                ,
                t._throwUnresolved = function(e, t) {
                    throw new Error("Unable to resolve " + e + " from " + parent + ".")
                }
                ,
                e
            }())
              , tt = "file:///Users/lingyfh/cocos_workspace/zytenyears/assets/game_bundle/scripts/core/crypto/crypto-js.min.js";
            et.define(tt, (function(e, t, o, i, r) {
                var n, l;
                n = this,
                l = function() {
                    var e, t, o, i, r, n, l, a = a || function(e, t) {
                        var o = Object.create || function() {
                            function e() {}
                            return function(t) {
                                var o;
                                return e.prototype = t,
                                o = new e,
                                e.prototype = null,
                                o
                            }
                        }()
                          , i = {}
                          , r = i.lib = {}
                          , n = r.Base = {
                            extend: function(e) {
                                var t = o(this);
                                return e && t.mixIn(e),
                                t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                    t.$super.init.apply(this, arguments)
                                }
                                ),
                                t.init.prototype = t,
                                t.$super = this,
                                t
                            },
                            create: function() {
                                var e = this.extend();
                                return e.init.apply(e, arguments),
                                e
                            },
                            init: function() {},
                            mixIn: function(e) {
                                for (var t in e)
                                    e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                          , l = r.WordArray = n.extend({
                            init: function(e, t) {
                                e = this.words = e || [],
                                this.sigBytes = null != t ? t : 4 * e.length
                            },
                            toString: function(e) {
                                return (e || u).stringify(this)
                            },
                            concat: function(e) {
                                var t = this.words
                                  , o = e.words
                                  , i = this.sigBytes
                                  , r = e.sigBytes;
                                if (this.clamp(),
                                i % 4)
                                    for (var n = 0; n < r; n++) {
                                        var l = o[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                        t[i + n >>> 2] |= l << 24 - (i + n) % 4 * 8
                                    }
                                else
                                    for (n = 0; n < r; n += 4)
                                        t[i + n >>> 2] = o[n >>> 2];
                                return this.sigBytes += r,
                                this
                            },
                            clamp: function() {
                                var t = this.words
                                  , o = this.sigBytes;
                                t[o >>> 2] &= 4294967295 << 32 - o % 4 * 8,
                                t.length = e.ceil(o / 4)
                            },
                            clone: function() {
                                var e = n.clone.call(this);
                                return e.words = this.words.slice(0),
                                e
                            },
                            random: function(t) {
                                for (var o, i = [], r = function(t) {
                                    t = t;
                                    var o = 987654321
                                      , i = 4294967295;
                                    return function() {
                                        var r = ((o = 36969 * (65535 & o) + (o >> 16) & i) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & i) & i;
                                        return r /= 4294967296,
                                        (r += .5) * (e.random() > .5 ? 1 : -1)
                                    }
                                }, n = 0; n < t; n += 4) {
                                    var a = r(4294967296 * (o || e.random()));
                                    o = 987654071 * a(),
                                    i.push(4294967296 * a() | 0)
                                }
                                return new l.init(i,t)
                            }
                        })
                          , a = i.enc = {}
                          , u = a.Hex = {
                            stringify: function(e) {
                                for (var t = e.words, o = e.sigBytes, i = [], r = 0; r < o; r++) {
                                    var n = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                    i.push((n >>> 4).toString(16)),
                                    i.push((15 & n).toString(16))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, o = [], i = 0; i < t; i += 2)
                                    o[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new l.init(o,t / 2)
                            }
                        }
                          , s = a.Latin1 = {
                            stringify: function(e) {
                                for (var t = e.words, o = e.sigBytes, i = [], r = 0; r < o; r++) {
                                    var n = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                    i.push(String.fromCharCode(n))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, o = [], i = 0; i < t; i++)
                                    o[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new l.init(o,t)
                            }
                        }
                          , c = a.Utf8 = {
                            stringify: function(e) {
                                try {
                                    return decodeURIComponent(escape(s.stringify(e)))
                                } catch (e) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(e) {
                                return s.parse(unescape(encodeURIComponent(e)))
                            }
                        }
                          , d = r.BufferedBlockAlgorithm = n.extend({
                            reset: function() {
                                this._data = new l.init,
                                this._nDataBytes = 0
                            },
                            _append: function(e) {
                                "string" == typeof e && (e = c.parse(e)),
                                this._data.concat(e),
                                this._nDataBytes += e.sigBytes
                            },
                            _process: function(t) {
                                var o = this._data
                                  , i = o.words
                                  , r = o.sigBytes
                                  , n = this.blockSize
                                  , a = r / (4 * n)
                                  , u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * n
                                  , s = e.min(4 * u, r);
                                if (u) {
                                    for (var c = 0; c < u; c += n)
                                        this._doProcessBlock(i, c);
                                    var d = i.splice(0, u);
                                    o.sigBytes -= s
                                }
                                return new l.init(d,s)
                            },
                            clone: function() {
                                var e = n.clone.call(this);
                                return e._data = this._data.clone(),
                                e
                            },
                            _minBufferSize: 0
                        })
                          , m = (r.Hasher = d.extend({
                            cfg: n.extend(),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e),
                                this.reset()
                            },
                            reset: function() {
                                d.reset.call(this),
                                this._doReset()
                            },
                            update: function(e) {
                                return this._append(e),
                                this._process(),
                                this
                            },
                            finalize: function(e) {
                                return e && this._append(e),
                                this._doFinalize()
                            },
                            blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, o) {
                                    return new e.init(o).finalize(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, o) {
                                    return new m.HMAC.init(e,o).finalize(t)
                                }
                            }
                        }),
                        i.algo = {});
                        return i
                    }(Math);
                    return function() {
                        function e(e, t, i) {
                            for (var r = [], n = 0, l = 0; l < t; l++)
                                if (l % 4) {
                                    var a = i[e.charCodeAt(l - 1)] << l % 4 * 2
                                      , u = i[e.charCodeAt(l)] >>> 6 - l % 4 * 2;
                                    r[n >>> 2] |= (a | u) << 24 - n % 4 * 8,
                                    n++
                                }
                            return o.create(r, n)
                        }
                        var t = a
                          , o = t.lib.WordArray;
                        t.enc.Base64 = {
                            stringify: function(e) {
                                var t = e.words
                                  , o = e.sigBytes
                                  , i = this._map;
                                e.clamp();
                                for (var r = [], n = 0; n < o; n += 3)
                                    for (var l = (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (t[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | t[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, a = 0; a < 4 && n + .75 * a < o; a++)
                                        r.push(i.charAt(l >>> 6 * (3 - a) & 63));
                                var u = i.charAt(64);
                                if (u)
                                    for (; r.length % 4; )
                                        r.push(u);
                                return r.join("")
                            },
                            parse: function(t) {
                                var o = t.length
                                  , i = this._map
                                  , r = this._reverseMap;
                                if (!r) {
                                    r = this._reverseMap = [];
                                    for (var n = 0; n < i.length; n++)
                                        r[i.charCodeAt(n)] = n
                                }
                                var l = i.charAt(64);
                                if (l) {
                                    var a = t.indexOf(l);
                                    -1 !== a && (o = a)
                                }
                                return e(t, o, r)
                            },
                            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }
                    }(),
                    function(e) {
                        function t(e, t, o, i, r, n, l) {
                            var a = e + (t & o | ~t & i) + r + l;
                            return (a << n | a >>> 32 - n) + t
                        }
                        function o(e, t, o, i, r, n, l) {
                            var a = e + (t & i | o & ~i) + r + l;
                            return (a << n | a >>> 32 - n) + t
                        }
                        function i(e, t, o, i, r, n, l) {
                            var a = e + (t ^ o ^ i) + r + l;
                            return (a << n | a >>> 32 - n) + t
                        }
                        function r(e, t, o, i, r, n, l) {
                            var a = e + (o ^ (t | ~i)) + r + l;
                            return (a << n | a >>> 32 - n) + t
                        }
                        var n = a
                          , l = n.lib
                          , u = l.WordArray
                          , s = l.Hasher
                          , c = n.algo
                          , d = [];
                        !function() {
                            for (var t = 0; t < 64; t++)
                                d[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                        }();
                        var m = c.MD5 = s.extend({
                            _doReset: function() {
                                this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
                            },
                            _doProcessBlock: function(e, n) {
                                for (var l = 0; l < 16; l++) {
                                    var a = n + l
                                      , u = e[a];
                                    e[a] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                                }
                                var s = this._hash.words
                                  , c = e[n + 0]
                                  , m = e[n + 1]
                                  , p = e[n + 2]
                                  , h = e[n + 3]
                                  , y = e[n + 4]
                                  , N = e[n + 5]
                                  , g = e[n + 6]
                                  , f = e[n + 7]
                                  , b = e[n + 8]
                                  , w = e[n + 9]
                                  , v = e[n + 10]
                                  , k = e[n + 11]
                                  , T = e[n + 12]
                                  , C = e[n + 13]
                                  , _ = e[n + 14]
                                  , S = e[n + 15]
                                  , R = s[0]
                                  , B = s[1]
                                  , I = s[2]
                                  , P = s[3];
                                R = t(R, B, I, P, c, 7, d[0]),
                                P = t(P, R, B, I, m, 12, d[1]),
                                I = t(I, P, R, B, p, 17, d[2]),
                                B = t(B, I, P, R, h, 22, d[3]),
                                R = t(R, B, I, P, y, 7, d[4]),
                                P = t(P, R, B, I, N, 12, d[5]),
                                I = t(I, P, R, B, g, 17, d[6]),
                                B = t(B, I, P, R, f, 22, d[7]),
                                R = t(R, B, I, P, b, 7, d[8]),
                                P = t(P, R, B, I, w, 12, d[9]),
                                I = t(I, P, R, B, v, 17, d[10]),
                                B = t(B, I, P, R, k, 22, d[11]),
                                R = t(R, B, I, P, T, 7, d[12]),
                                P = t(P, R, B, I, C, 12, d[13]),
                                I = t(I, P, R, B, _, 17, d[14]),
                                R = o(R, B = t(B, I, P, R, S, 22, d[15]), I, P, m, 5, d[16]),
                                P = o(P, R, B, I, g, 9, d[17]),
                                I = o(I, P, R, B, k, 14, d[18]),
                                B = o(B, I, P, R, c, 20, d[19]),
                                R = o(R, B, I, P, N, 5, d[20]),
                                P = o(P, R, B, I, v, 9, d[21]),
                                I = o(I, P, R, B, S, 14, d[22]),
                                B = o(B, I, P, R, y, 20, d[23]),
                                R = o(R, B, I, P, w, 5, d[24]),
                                P = o(P, R, B, I, _, 9, d[25]),
                                I = o(I, P, R, B, h, 14, d[26]),
                                B = o(B, I, P, R, b, 20, d[27]),
                                R = o(R, B, I, P, C, 5, d[28]),
                                P = o(P, R, B, I, p, 9, d[29]),
                                I = o(I, P, R, B, f, 14, d[30]),
                                R = i(R, B = o(B, I, P, R, T, 20, d[31]), I, P, N, 4, d[32]),
                                P = i(P, R, B, I, b, 11, d[33]),
                                I = i(I, P, R, B, k, 16, d[34]),
                                B = i(B, I, P, R, _, 23, d[35]),
                                R = i(R, B, I, P, m, 4, d[36]),
                                P = i(P, R, B, I, y, 11, d[37]),
                                I = i(I, P, R, B, f, 16, d[38]),
                                B = i(B, I, P, R, v, 23, d[39]),
                                R = i(R, B, I, P, C, 4, d[40]),
                                P = i(P, R, B, I, c, 11, d[41]),
                                I = i(I, P, R, B, h, 16, d[42]),
                                B = i(B, I, P, R, g, 23, d[43]),
                                R = i(R, B, I, P, w, 4, d[44]),
                                P = i(P, R, B, I, T, 11, d[45]),
                                I = i(I, P, R, B, S, 16, d[46]),
                                R = r(R, B = i(B, I, P, R, p, 23, d[47]), I, P, c, 6, d[48]),
                                P = r(P, R, B, I, f, 10, d[49]),
                                I = r(I, P, R, B, _, 15, d[50]),
                                B = r(B, I, P, R, N, 21, d[51]),
                                R = r(R, B, I, P, T, 6, d[52]),
                                P = r(P, R, B, I, h, 10, d[53]),
                                I = r(I, P, R, B, v, 15, d[54]),
                                B = r(B, I, P, R, m, 21, d[55]),
                                R = r(R, B, I, P, b, 6, d[56]),
                                P = r(P, R, B, I, S, 10, d[57]),
                                I = r(I, P, R, B, g, 15, d[58]),
                                B = r(B, I, P, R, C, 21, d[59]),
                                R = r(R, B, I, P, y, 6, d[60]),
                                P = r(P, R, B, I, k, 10, d[61]),
                                I = r(I, P, R, B, p, 15, d[62]),
                                B = r(B, I, P, R, w, 21, d[63]),
                                s[0] = s[0] + R | 0,
                                s[1] = s[1] + B | 0,
                                s[2] = s[2] + I | 0,
                                s[3] = s[3] + P | 0
                            },
                            _doFinalize: function() {
                                var t = this._data
                                  , o = t.words
                                  , i = 8 * this._nDataBytes
                                  , r = 8 * t.sigBytes;
                                o[r >>> 5] |= 128 << 24 - r % 32;
                                var n = e.floor(i / 4294967296)
                                  , l = i;
                                o[15 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                                o[14 + (r + 64 >>> 9 << 4)] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
                                t.sigBytes = 4 * (o.length + 1),
                                this._process();
                                for (var a = this._hash, u = a.words, s = 0; s < 4; s++) {
                                    var c = u[s];
                                    u[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                                }
                                return a
                            },
                            clone: function() {
                                var e = s.clone.call(this);
                                return e._hash = this._hash.clone(),
                                e
                            }
                        });
                        n.MD5 = s._createHelper(m),
                        n.HmacMD5 = s._createHmacHelper(m)
                    }(Math),
                    t = (e = a).lib,
                    o = t.WordArray,
                    i = t.Hasher,
                    r = e.algo,
                    n = [],
                    l = r.SHA1 = i.extend({
                        _doReset: function() {
                            this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                        },
                        _doProcessBlock: function(e, t) {
                            for (var o = this._hash.words, i = o[0], r = o[1], l = o[2], a = o[3], u = o[4], s = 0; s < 80; s++) {
                                if (s < 16)
                                    n[s] = 0 | e[t + s];
                                else {
                                    var c = n[s - 3] ^ n[s - 8] ^ n[s - 14] ^ n[s - 16];
                                    n[s] = c << 1 | c >>> 31
                                }
                                var d = (i << 5 | i >>> 27) + u + n[s];
                                d += s < 20 ? 1518500249 + (r & l | ~r & a) : s < 40 ? 1859775393 + (r ^ l ^ a) : s < 60 ? (r & l | r & a | l & a) - 1894007588 : (r ^ l ^ a) - 899497514,
                                u = a,
                                a = l,
                                l = r << 30 | r >>> 2,
                                r = i,
                                i = d
                            }
                            o[0] = o[0] + i | 0,
                            o[1] = o[1] + r | 0,
                            o[2] = o[2] + l | 0,
                            o[3] = o[3] + a | 0,
                            o[4] = o[4] + u | 0
                        },
                        _doFinalize: function() {
                            var e = this._data
                              , t = e.words
                              , o = 8 * this._nDataBytes
                              , i = 8 * e.sigBytes;
                            return t[i >>> 5] |= 128 << 24 - i % 32,
                            t[14 + (i + 64 >>> 9 << 4)] = Math.floor(o / 4294967296),
                            t[15 + (i + 64 >>> 9 << 4)] = o,
                            e.sigBytes = 4 * t.length,
                            this._process(),
                            this._hash
                        },
                        clone: function() {
                            var e = i.clone.call(this);
                            return e._hash = this._hash.clone(),
                            e
                        }
                    }),
                    e.SHA1 = i._createHelper(l),
                    e.HmacSHA1 = i._createHmacHelper(l),
                    function(e) {
                        var t = a
                          , o = t.lib
                          , i = o.WordArray
                          , r = o.Hasher
                          , n = t.algo
                          , l = []
                          , u = [];
                        !function() {
                            function t(t) {
                                for (var o = e.sqrt(t), i = 2; i <= o; i++)
                                    if (!(t % i))
                                        return !1;
                                return !0
                            }
                            function o(e) {
                                return 4294967296 * (e - (0 | e)) | 0
                            }
                            for (var i = 2, r = 0; r < 64; )
                                t(i) && (r < 8 && (l[r] = o(e.pow(i, .5))),
                                u[r] = o(e.pow(i, 1 / 3)),
                                r++),
                                i++
                        }();
                        var s = []
                          , c = n.SHA256 = r.extend({
                            _doReset: function() {
                                this._hash = new i.init(l.slice(0))
                            },
                            _doProcessBlock: function(e, t) {
                                for (var o = this._hash.words, i = o[0], r = o[1], n = o[2], l = o[3], a = o[4], c = o[5], d = o[6], m = o[7], p = 0; p < 64; p++) {
                                    if (p < 16)
                                        s[p] = 0 | e[t + p];
                                    else {
                                        var h = s[p - 15]
                                          , y = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3
                                          , N = s[p - 2]
                                          , g = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                                        s[p] = y + s[p - 7] + g + s[p - 16]
                                    }
                                    var f = i & r ^ i & n ^ r & n
                                      , b = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22)
                                      , w = m + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & d) + u[p] + s[p];
                                    m = d,
                                    d = c,
                                    c = a,
                                    a = l + w | 0,
                                    l = n,
                                    n = r,
                                    r = i,
                                    i = w + (b + f) | 0
                                }
                                o[0] = o[0] + i | 0,
                                o[1] = o[1] + r | 0,
                                o[2] = o[2] + n | 0,
                                o[3] = o[3] + l | 0,
                                o[4] = o[4] + a | 0,
                                o[5] = o[5] + c | 0,
                                o[6] = o[6] + d | 0,
                                o[7] = o[7] + m | 0
                            },
                            _doFinalize: function() {
                                var t = this._data
                                  , o = t.words
                                  , i = 8 * this._nDataBytes
                                  , r = 8 * t.sigBytes;
                                return o[r >>> 5] |= 128 << 24 - r % 32,
                                o[14 + (r + 64 >>> 9 << 4)] = e.floor(i / 4294967296),
                                o[15 + (r + 64 >>> 9 << 4)] = i,
                                t.sigBytes = 4 * o.length,
                                this._process(),
                                this._hash
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e._hash = this._hash.clone(),
                                e
                            }
                        });
                        t.SHA256 = r._createHelper(c),
                        t.HmacSHA256 = r._createHmacHelper(c)
                    }(Math),
                    function() {
                        function e(e) {
                            return e << 8 & 4278255360 | e >>> 8 & 16711935
                        }
                        var t = a
                          , o = t.lib.WordArray
                          , i = t.enc;
                        i.Utf16 = i.Utf16BE = {
                            stringify: function(e) {
                                for (var t = e.words, o = e.sigBytes, i = [], r = 0; r < o; r += 2) {
                                    var n = t[r >>> 2] >>> 16 - r % 4 * 8 & 65535;
                                    i.push(String.fromCharCode(n))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, i = [], r = 0; r < t; r++)
                                    i[r >>> 1] |= e.charCodeAt(r) << 16 - r % 2 * 16;
                                return o.create(i, 2 * t)
                            }
                        },
                        i.Utf16LE = {
                            stringify: function(t) {
                                for (var o = t.words, i = t.sigBytes, r = [], n = 0; n < i; n += 2) {
                                    var l = e(o[n >>> 2] >>> 16 - n % 4 * 8 & 65535);
                                    r.push(String.fromCharCode(l))
                                }
                                return r.join("")
                            },
                            parse: function(t) {
                                for (var i = t.length, r = [], n = 0; n < i; n++)
                                    r[n >>> 1] |= e(t.charCodeAt(n) << 16 - n % 2 * 16);
                                return o.create(r, 2 * i)
                            }
                        }
                    }(),
                    function() {
                        if ("function" == typeof ArrayBuffer) {
                            var e = a.lib.WordArray
                              , t = e.init;
                            (e.init = function(e) {
                                if (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
                                (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),
                                e instanceof Uint8Array) {
                                    for (var o = e.byteLength, i = [], r = 0; r < o; r++)
                                        i[r >>> 2] |= e[r] << 24 - r % 4 * 8;
                                    t.call(this, i, o)
                                } else
                                    t.apply(this, arguments)
                            }
                            ).prototype = e
                        }
                    }(),
                    function(e) {
                        function t(e, t, o) {
                            return e ^ t ^ o
                        }
                        function o(e, t, o) {
                            return e & t | ~e & o
                        }
                        function i(e, t, o) {
                            return (e | ~t) ^ o
                        }
                        function r(e, t, o) {
                            return e & o | t & ~o
                        }
                        function n(e, t, o) {
                            return e ^ (t | ~o)
                        }
                        function l(e, t) {
                            return e << t | e >>> 32 - t
                        }
                        var u = a
                          , s = u.lib
                          , c = s.WordArray
                          , d = s.Hasher
                          , m = u.algo
                          , p = c.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
                          , h = c.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
                          , y = c.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
                          , N = c.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
                          , g = c.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
                          , f = c.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
                          , b = m.RIPEMD160 = d.extend({
                            _doReset: function() {
                                this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, a) {
                                for (var u = 0; u < 16; u++) {
                                    var s = a + u
                                      , c = e[s];
                                    e[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                                }
                                var d, m, b, w, v, k, T, C, _, S, R, B = this._hash.words, I = g.words, P = f.words, F = p.words, E = h.words, M = y.words, D = N.words;
                                for (k = d = B[0],
                                T = m = B[1],
                                C = b = B[2],
                                _ = w = B[3],
                                S = v = B[4],
                                u = 0; u < 80; u += 1)
                                    R = d + e[a + F[u]] | 0,
                                    R += u < 16 ? t(m, b, w) + I[0] : u < 32 ? o(m, b, w) + I[1] : u < 48 ? i(m, b, w) + I[2] : u < 64 ? r(m, b, w) + I[3] : n(m, b, w) + I[4],
                                    R = (R = l(R |= 0, M[u])) + v | 0,
                                    d = v,
                                    v = w,
                                    w = l(b, 10),
                                    b = m,
                                    m = R,
                                    R = k + e[a + E[u]] | 0,
                                    R += u < 16 ? n(T, C, _) + P[0] : u < 32 ? r(T, C, _) + P[1] : u < 48 ? i(T, C, _) + P[2] : u < 64 ? o(T, C, _) + P[3] : t(T, C, _) + P[4],
                                    R = (R = l(R |= 0, D[u])) + S | 0,
                                    k = S,
                                    S = _,
                                    _ = l(C, 10),
                                    C = T,
                                    T = R;
                                R = B[1] + b + _ | 0,
                                B[1] = B[2] + w + S | 0,
                                B[2] = B[3] + v + k | 0,
                                B[3] = B[4] + d + T | 0,
                                B[4] = B[0] + m + C | 0,
                                B[0] = R
                            },
                            _doFinalize: function() {
                                var e = this._data
                                  , t = e.words
                                  , o = 8 * this._nDataBytes
                                  , i = 8 * e.sigBytes;
                                t[i >>> 5] |= 128 << 24 - i % 32,
                                t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                                e.sigBytes = 4 * (t.length + 1),
                                this._process();
                                for (var r = this._hash, n = r.words, l = 0; l < 5; l++) {
                                    var a = n[l];
                                    n[l] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                                }
                                return r
                            },
                            clone: function() {
                                var e = d.clone.call(this);
                                return e._hash = this._hash.clone(),
                                e
                            }
                        });
                        u.RIPEMD160 = d._createHelper(b),
                        u.HmacRIPEMD160 = d._createHmacHelper(b)
                    }(),
                    function() {
                        var e = a
                          , t = e.lib.Base
                          , o = e.enc.Utf8;
                        e.algo.HMAC = t.extend({
                            init: function(e, t) {
                                e = this._hasher = new e.init,
                                "string" == typeof t && (t = o.parse(t));
                                var i = e.blockSize
                                  , r = 4 * i;
                                t.sigBytes > r && (t = e.finalize(t)),
                                t.clamp();
                                for (var n = this._oKey = t.clone(), l = this._iKey = t.clone(), a = n.words, u = l.words, s = 0; s < i; s++)
                                    a[s] ^= 1549556828,
                                    u[s] ^= 909522486;
                                n.sigBytes = l.sigBytes = r,
                                this.reset()
                            },
                            reset: function() {
                                var e = this._hasher;
                                e.reset(),
                                e.update(this._iKey)
                            },
                            update: function(e) {
                                return this._hasher.update(e),
                                this
                            },
                            finalize: function(e) {
                                var t = this._hasher
                                  , o = t.finalize(e);
                                return t.reset(),
                                t.finalize(this._oKey.clone().concat(o))
                            }
                        })
                    }(),
                    function() {
                        var e = a
                          , t = e.lib
                          , o = t.Base
                          , i = t.WordArray
                          , r = e.algo
                          , n = r.SHA1
                          , l = r.HMAC
                          , u = r.PBKDF2 = o.extend({
                            cfg: o.extend({
                                keySize: 4,
                                hasher: n,
                                iterations: 1
                            }),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e)
                            },
                            compute: function(e, t) {
                                for (var o = this.cfg, r = l.create(o.hasher, e), n = i.create(), a = i.create([1]), u = n.words, s = a.words, c = o.keySize, d = o.iterations; u.length < c; ) {
                                    var m = r.update(t).finalize(a);
                                    r.reset();
                                    for (var p = m.words, h = p.length, y = m, N = 1; N < d; N++) {
                                        y = r.finalize(y),
                                        r.reset();
                                        for (var g = y.words, f = 0; f < h; f++)
                                            p[f] ^= g[f]
                                    }
                                    n.concat(m),
                                    s[0]++
                                }
                                return n.sigBytes = 4 * c,
                                n
                            }
                        });
                        e.PBKDF2 = function(e, t, o) {
                            return u.create(o).compute(e, t)
                        }
                    }(),
                    function() {
                        var e = a
                          , t = e.lib
                          , o = t.Base
                          , i = t.WordArray
                          , r = e.algo
                          , n = r.MD5
                          , l = r.EvpKDF = o.extend({
                            cfg: o.extend({
                                keySize: 4,
                                hasher: n,
                                iterations: 1
                            }),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e)
                            },
                            compute: function(e, t) {
                                for (var o = this.cfg, r = o.hasher.create(), n = i.create(), l = n.words, a = o.keySize, u = o.iterations; l.length < a; ) {
                                    s && r.update(s);
                                    var s = r.update(e).finalize(t);
                                    r.reset();
                                    for (var c = 1; c < u; c++)
                                        s = r.finalize(s),
                                        r.reset();
                                    n.concat(s)
                                }
                                return n.sigBytes = 4 * a,
                                n
                            }
                        });
                        e.EvpKDF = function(e, t, o) {
                            return l.create(o).compute(e, t)
                        }
                    }(),
                    function() {
                        var e = a
                          , t = e.lib.WordArray
                          , o = e.algo
                          , i = o.SHA256
                          , r = o.SHA224 = i.extend({
                            _doReset: function() {
                                this._hash = new t.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                            },
                            _doFinalize: function() {
                                var e = i._doFinalize.call(this);
                                return e.sigBytes -= 4,
                                e
                            }
                        });
                        e.SHA224 = i._createHelper(r),
                        e.HmacSHA224 = i._createHmacHelper(r)
                    }(),
                    function(e) {
                        var t = a
                          , o = t.lib
                          , i = o.Base
                          , r = o.WordArray
                          , n = t.x64 = {};
                        n.Word = i.extend({
                            init: function(e, t) {
                                this.high = e,
                                this.low = t
                            }
                        }),
                        n.WordArray = i.extend({
                            init: function(e, t) {
                                e = this.words = e || [],
                                this.sigBytes = null != t ? t : 8 * e.length
                            },
                            toX32: function() {
                                for (var e = this.words, t = e.length, o = [], i = 0; i < t; i++) {
                                    var n = e[i];
                                    o.push(n.high),
                                    o.push(n.low)
                                }
                                return r.create(o, this.sigBytes)
                            },
                            clone: function() {
                                for (var e = i.clone.call(this), t = e.words = this.words.slice(0), o = t.length, r = 0; r < o; r++)
                                    t[r] = t[r].clone();
                                return e
                            }
                        })
                    }(),
                    function(e) {
                        var t = a
                          , o = t.lib
                          , i = o.WordArray
                          , r = o.Hasher
                          , n = t.x64.Word
                          , l = t.algo
                          , u = []
                          , s = []
                          , c = [];
                        !function() {
                            for (var e = 1, t = 0, o = 0; o < 24; o++) {
                                u[e + 5 * t] = (o + 1) * (o + 2) / 2 % 64;
                                var i = (2 * e + 3 * t) % 5;
                                e = t % 5,
                                t = i
                            }
                            for (e = 0; e < 5; e++)
                                for (t = 0; t < 5; t++)
                                    s[e + 5 * t] = t + (2 * e + 3 * t) % 5 * 5;
                            for (var r = 1, l = 0; l < 24; l++) {
                                for (var a = 0, d = 0, m = 0; m < 7; m++) {
                                    if (1 & r) {
                                        var p = (1 << m) - 1;
                                        p < 32 ? d ^= 1 << p : a ^= 1 << p - 32
                                    }
                                    128 & r ? r = r << 1 ^ 113 : r <<= 1
                                }
                                c[l] = n.create(a, d)
                            }
                        }();
                        var d = [];
                        !function() {
                            for (var e = 0; e < 25; e++)
                                d[e] = n.create()
                        }();
                        var m = l.SHA3 = r.extend({
                            cfg: r.cfg.extend({
                                outputLength: 512
                            }),
                            _doReset: function() {
                                for (var e = this._state = [], t = 0; t < 25; t++)
                                    e[t] = new n.init;
                                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                            },
                            _doProcessBlock: function(e, t) {
                                for (var o = this._state, i = this.blockSize / 2, r = 0; r < i; r++) {
                                    var n = e[t + 2 * r]
                                      , l = e[t + 2 * r + 1];
                                    n = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                                    l = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
                                    (B = o[r]).high ^= l,
                                    B.low ^= n
                                }
                                for (var a = 0; a < 24; a++) {
                                    for (var m = 0; m < 5; m++) {
                                        for (var p = 0, h = 0, y = 0; y < 5; y++)
                                            p ^= (B = o[m + 5 * y]).high,
                                            h ^= B.low;
                                        var N = d[m];
                                        N.high = p,
                                        N.low = h
                                    }
                                    for (m = 0; m < 5; m++) {
                                        var g = d[(m + 4) % 5]
                                          , f = d[(m + 1) % 5]
                                          , b = f.high
                                          , w = f.low;
                                        for (p = g.high ^ (b << 1 | w >>> 31),
                                        h = g.low ^ (w << 1 | b >>> 31),
                                        y = 0; y < 5; y++)
                                            (B = o[m + 5 * y]).high ^= p,
                                            B.low ^= h
                                    }
                                    for (var v = 1; v < 25; v++) {
                                        var k = (B = o[v]).high
                                          , T = B.low
                                          , C = u[v];
                                        C < 32 ? (p = k << C | T >>> 32 - C,
                                        h = T << C | k >>> 32 - C) : (p = T << C - 32 | k >>> 64 - C,
                                        h = k << C - 32 | T >>> 64 - C);
                                        var _ = d[s[v]];
                                        _.high = p,
                                        _.low = h
                                    }
                                    var S = d[0]
                                      , R = o[0];
                                    for (S.high = R.high,
                                    S.low = R.low,
                                    m = 0; m < 5; m++)
                                        for (y = 0; y < 5; y++) {
                                            var B = o[v = m + 5 * y]
                                              , I = d[v]
                                              , P = d[(m + 1) % 5 + 5 * y]
                                              , F = d[(m + 2) % 5 + 5 * y];
                                            B.high = I.high ^ ~P.high & F.high,
                                            B.low = I.low ^ ~P.low & F.low
                                        }
                                    B = o[0];
                                    var E = c[a];
                                    B.high ^= E.high,
                                    B.low ^= E.low
                                }
                            },
                            _doFinalize: function() {
                                var t = this._data
                                  , o = t.words
                                  , r = (this._nDataBytes,
                                8 * t.sigBytes)
                                  , n = 32 * this.blockSize;
                                o[r >>> 5] |= 1 << 24 - r % 32,
                                o[(e.ceil((r + 1) / n) * n >>> 5) - 1] |= 128,
                                t.sigBytes = 4 * o.length,
                                this._process();
                                for (var l = this._state, a = this.cfg.outputLength / 8, u = a / 8, s = [], c = 0; c < u; c++) {
                                    var d = l[c]
                                      , m = d.high
                                      , p = d.low;
                                    m = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8),
                                    p = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8),
                                    s.push(p),
                                    s.push(m)
                                }
                                return new i.init(s,a)
                            },
                            clone: function() {
                                for (var e = r.clone.call(this), t = e._state = this._state.slice(0), o = 0; o < 25; o++)
                                    t[o] = t[o].clone();
                                return e
                            }
                        });
                        t.SHA3 = r._createHelper(m),
                        t.HmacSHA3 = r._createHmacHelper(m)
                    }(Math),
                    function() {
                        function e() {
                            return r.create.apply(r, arguments)
                        }
                        var t = a
                          , o = t.lib.Hasher
                          , i = t.x64
                          , r = i.Word
                          , n = i.WordArray
                          , l = t.algo
                          , u = [e(1116352408, 3609767458), e(1899447441, 602891725), e(3049323471, 3964484399), e(3921009573, 2173295548), e(961987163, 4081628472), e(1508970993, 3053834265), e(2453635748, 2937671579), e(2870763221, 3664609560), e(3624381080, 2734883394), e(310598401, 1164996542), e(607225278, 1323610764), e(1426881987, 3590304994), e(1925078388, 4068182383), e(2162078206, 991336113), e(2614888103, 633803317), e(3248222580, 3479774868), e(3835390401, 2666613458), e(4022224774, 944711139), e(264347078, 2341262773), e(604807628, 2007800933), e(770255983, 1495990901), e(1249150122, 1856431235), e(1555081692, 3175218132), e(1996064986, 2198950837), e(2554220882, 3999719339), e(2821834349, 766784016), e(2952996808, 2566594879), e(3210313671, 3203337956), e(3336571891, 1034457026), e(3584528711, 2466948901), e(113926993, 3758326383), e(338241895, 168717936), e(666307205, 1188179964), e(773529912, 1546045734), e(1294757372, 1522805485), e(1396182291, 2643833823), e(1695183700, 2343527390), e(1986661051, 1014477480), e(2177026350, 1206759142), e(2456956037, 344077627), e(2730485921, 1290863460), e(2820302411, 3158454273), e(3259730800, 3505952657), e(3345764771, 106217008), e(3516065817, 3606008344), e(3600352804, 1432725776), e(4094571909, 1467031594), e(275423344, 851169720), e(430227734, 3100823752), e(506948616, 1363258195), e(659060556, 3750685593), e(883997877, 3785050280), e(958139571, 3318307427), e(1322822218, 3812723403), e(1537002063, 2003034995), e(1747873779, 3602036899), e(1955562222, 1575990012), e(2024104815, 1125592928), e(2227730452, 2716904306), e(2361852424, 442776044), e(2428436474, 593698344), e(2756734187, 3733110249), e(3204031479, 2999351573), e(3329325298, 3815920427), e(3391569614, 3928383900), e(3515267271, 566280711), e(3940187606, 3454069534), e(4118630271, 4000239992), e(116418474, 1914138554), e(174292421, 2731055270), e(289380356, 3203993006), e(460393269, 320620315), e(685471733, 587496836), e(852142971, 1086792851), e(1017036298, 365543100), e(1126000580, 2618297676), e(1288033470, 3409855158), e(1501505948, 4234509866), e(1607167915, 987167468), e(1816402316, 1246189591)]
                          , s = [];
                        !function() {
                            for (var t = 0; t < 80; t++)
                                s[t] = e()
                        }();
                        var c = l.SHA512 = o.extend({
                            _doReset: function() {
                                this._hash = new n.init([new r.init(1779033703,4089235720), new r.init(3144134277,2227873595), new r.init(1013904242,4271175723), new r.init(2773480762,1595750129), new r.init(1359893119,2917565137), new r.init(2600822924,725511199), new r.init(528734635,4215389547), new r.init(1541459225,327033209)])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var o = this._hash.words, i = o[0], r = o[1], n = o[2], l = o[3], a = o[4], c = o[5], d = o[6], m = o[7], p = i.high, h = i.low, y = r.high, N = r.low, g = n.high, f = n.low, b = l.high, w = l.low, v = a.high, k = a.low, T = c.high, C = c.low, _ = d.high, S = d.low, R = m.high, B = m.low, I = p, P = h, F = y, E = N, M = g, D = f, L = b, A = w, x = v, z = k, G = T, O = C, H = _, U = S, V = R, W = B, q = 0; q < 80; q++) {
                                    var j = s[q];
                                    if (q < 16)
                                        var J = j.high = 0 | e[t + 2 * q]
                                          , X = j.low = 0 | e[t + 2 * q + 1];
                                    else {
                                        var Z = s[q - 15]
                                          , Y = Z.high
                                          , K = Z.low
                                          , Q = (Y >>> 1 | K << 31) ^ (Y >>> 8 | K << 24) ^ Y >>> 7
                                          , $ = (K >>> 1 | Y << 31) ^ (K >>> 8 | Y << 24) ^ (K >>> 7 | Y << 25)
                                          , ee = s[q - 2]
                                          , te = ee.high
                                          , oe = ee.low
                                          , ie = (te >>> 19 | oe << 13) ^ (te << 3 | oe >>> 29) ^ te >>> 6
                                          , re = (oe >>> 19 | te << 13) ^ (oe << 3 | te >>> 29) ^ (oe >>> 6 | te << 26)
                                          , ne = s[q - 7]
                                          , le = ne.high
                                          , ae = ne.low
                                          , ue = s[q - 16]
                                          , se = ue.high
                                          , ce = ue.low;
                                        J = (J = (J = Q + le + ((X = $ + ae) >>> 0 < $ >>> 0 ? 1 : 0)) + ie + ((X += re) >>> 0 < re >>> 0 ? 1 : 0)) + se + ((X += ce) >>> 0 < ce >>> 0 ? 1 : 0),
                                        j.high = J,
                                        j.low = X
                                    }
                                    var de, me = x & G ^ ~x & H, pe = z & O ^ ~z & U, he = I & F ^ I & M ^ F & M, ye = P & E ^ P & D ^ E & D, Ne = (I >>> 28 | P << 4) ^ (I << 30 | P >>> 2) ^ (I << 25 | P >>> 7), ge = (P >>> 28 | I << 4) ^ (P << 30 | I >>> 2) ^ (P << 25 | I >>> 7), fe = (x >>> 14 | z << 18) ^ (x >>> 18 | z << 14) ^ (x << 23 | z >>> 9), be = (z >>> 14 | x << 18) ^ (z >>> 18 | x << 14) ^ (z << 23 | x >>> 9), we = u[q], ve = we.high, ke = we.low, Te = V + fe + ((de = W + be) >>> 0 < W >>> 0 ? 1 : 0), Ce = ge + ye;
                                    V = H,
                                    W = U,
                                    H = G,
                                    U = O,
                                    G = x,
                                    O = z,
                                    x = L + (Te = (Te = (Te = Te + me + ((de += pe) >>> 0 < pe >>> 0 ? 1 : 0)) + ve + ((de += ke) >>> 0 < ke >>> 0 ? 1 : 0)) + J + ((de += X) >>> 0 < X >>> 0 ? 1 : 0)) + ((z = A + de | 0) >>> 0 < A >>> 0 ? 1 : 0) | 0,
                                    L = M,
                                    A = D,
                                    M = F,
                                    D = E,
                                    F = I,
                                    E = P,
                                    I = Te + (Ne + he + (Ce >>> 0 < ge >>> 0 ? 1 : 0)) + ((P = de + Ce | 0) >>> 0 < de >>> 0 ? 1 : 0) | 0
                                }
                                h = i.low = h + P,
                                i.high = p + I + (h >>> 0 < P >>> 0 ? 1 : 0),
                                N = r.low = N + E,
                                r.high = y + F + (N >>> 0 < E >>> 0 ? 1 : 0),
                                f = n.low = f + D,
                                n.high = g + M + (f >>> 0 < D >>> 0 ? 1 : 0),
                                w = l.low = w + A,
                                l.high = b + L + (w >>> 0 < A >>> 0 ? 1 : 0),
                                k = a.low = k + z,
                                a.high = v + x + (k >>> 0 < z >>> 0 ? 1 : 0),
                                C = c.low = C + O,
                                c.high = T + G + (C >>> 0 < O >>> 0 ? 1 : 0),
                                S = d.low = S + U,
                                d.high = _ + H + (S >>> 0 < U >>> 0 ? 1 : 0),
                                B = m.low = B + W,
                                m.high = R + V + (B >>> 0 < W >>> 0 ? 1 : 0)
                            },
                            _doFinalize: function() {
                                var e = this._data
                                  , t = e.words
                                  , o = 8 * this._nDataBytes
                                  , i = 8 * e.sigBytes;
                                return t[i >>> 5] |= 128 << 24 - i % 32,
                                t[30 + (i + 128 >>> 10 << 5)] = Math.floor(o / 4294967296),
                                t[31 + (i + 128 >>> 10 << 5)] = o,
                                e.sigBytes = 4 * t.length,
                                this._process(),
                                this._hash.toX32()
                            },
                            clone: function() {
                                var e = o.clone.call(this);
                                return e._hash = this._hash.clone(),
                                e
                            },
                            blockSize: 32
                        });
                        t.SHA512 = o._createHelper(c),
                        t.HmacSHA512 = o._createHmacHelper(c)
                    }(),
                    function() {
                        var e = a
                          , t = e.x64
                          , o = t.Word
                          , i = t.WordArray
                          , r = e.algo
                          , n = r.SHA512
                          , l = r.SHA384 = n.extend({
                            _doReset: function() {
                                this._hash = new i.init([new o.init(3418070365,3238371032), new o.init(1654270250,914150663), new o.init(2438529370,812702999), new o.init(355462360,4144912697), new o.init(1731405415,4290775857), new o.init(2394180231,1750603025), new o.init(3675008525,1694076839), new o.init(1203062813,3204075428)])
                            },
                            _doFinalize: function() {
                                var e = n._doFinalize.call(this);
                                return e.sigBytes -= 16,
                                e
                            }
                        });
                        e.SHA384 = n._createHelper(l),
                        e.HmacSHA384 = n._createHmacHelper(l)
                    }(),
                    a.lib.Cipher || function(e) {
                        var t = a
                          , o = t.lib
                          , i = o.Base
                          , r = o.WordArray
                          , n = o.BufferedBlockAlgorithm
                          , l = t.enc
                          , u = (l.Utf8,
                        l.Base64)
                          , s = t.algo.EvpKDF
                          , c = o.Cipher = n.extend({
                            cfg: i.extend(),
                            createEncryptor: function(e, t) {
                                return this.create(this._ENC_XFORM_MODE, e, t)
                            },
                            createDecryptor: function(e, t) {
                                return this.create(this._DEC_XFORM_MODE, e, t)
                            },
                            init: function(e, t, o) {
                                this.cfg = this.cfg.extend(o),
                                this._xformMode = e,
                                this._key = t,
                                this.reset()
                            },
                            reset: function() {
                                n.reset.call(this),
                                this._doReset()
                            },
                            process: function(e) {
                                return this._append(e),
                                this._process()
                            },
                            finalize: function(e) {
                                return e && this._append(e),
                                this._doFinalize()
                            },
                            keySize: 4,
                            ivSize: 4,
                            _ENC_XFORM_MODE: 1,
                            _DEC_XFORM_MODE: 2,
                            _createHelper: function() {
                                function e(e) {
                                    return "string" == typeof e ? b : g
                                }
                                return function(t) {
                                    return {
                                        encrypt: function(o, i, r) {
                                            return e(i).encrypt(t, o, i, r)
                                        },
                                        decrypt: function(o, i, r) {
                                            return e(i).decrypt(t, o, i, r)
                                        }
                                    }
                                }
                            }()
                        })
                          , d = (o.StreamCipher = c.extend({
                            _doFinalize: function() {
                                return this._process(!0)
                            },
                            blockSize: 1
                        }),
                        t.mode = {})
                          , m = o.BlockCipherMode = i.extend({
                            createEncryptor: function(e, t) {
                                return this.Encryptor.create(e, t)
                            },
                            createDecryptor: function(e, t) {
                                return this.Decryptor.create(e, t)
                            },
                            init: function(e, t) {
                                this._cipher = e,
                                this._iv = t
                            }
                        })
                          , p = d.CBC = function() {
                            function e(e, t, o) {
                                var i = this._iv;
                                if (i) {
                                    var r = i;
                                    this._iv = void 0
                                } else
                                    r = this._prevBlock;
                                for (var n = 0; n < o; n++)
                                    e[t + n] ^= r[n]
                            }
                            var t = m.extend();
                            return t.Encryptor = t.extend({
                                processBlock: function(t, o) {
                                    var i = this._cipher
                                      , r = i.blockSize;
                                    e.call(this, t, o, r),
                                    i.encryptBlock(t, o),
                                    this._prevBlock = t.slice(o, o + r)
                                }
                            }),
                            t.Decryptor = t.extend({
                                processBlock: function(t, o) {
                                    var i = this._cipher
                                      , r = i.blockSize
                                      , n = t.slice(o, o + r);
                                    i.decryptBlock(t, o),
                                    e.call(this, t, o, r),
                                    this._prevBlock = n
                                }
                            }),
                            t
                        }()
                          , h = (t.pad = {}).Pkcs7 = {
                            pad: function(e, t) {
                                for (var o = 4 * t, i = o - e.sigBytes % o, n = i << 24 | i << 16 | i << 8 | i, l = [], a = 0; a < i; a += 4)
                                    l.push(n);
                                var u = r.create(l, i);
                                e.concat(u)
                            },
                            unpad: function(e) {
                                var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                                e.sigBytes -= t
                            }
                        }
                          , y = (o.BlockCipher = c.extend({
                            cfg: c.cfg.extend({
                                mode: p,
                                padding: h
                            }),
                            reset: function() {
                                c.reset.call(this);
                                var e = this.cfg
                                  , t = e.iv
                                  , o = e.mode;
                                if (this._xformMode == this._ENC_XFORM_MODE)
                                    var i = o.createEncryptor;
                                else
                                    i = o.createDecryptor,
                                    this._minBufferSize = 1;
                                this._mode && this._mode.__creator == i ? this._mode.init(this, t && t.words) : (this._mode = i.call(o, this, t && t.words),
                                this._mode.__creator = i)
                            },
                            _doProcessBlock: function(e, t) {
                                this._mode.processBlock(e, t)
                            },
                            _doFinalize: function() {
                                var e = this.cfg.padding;
                                if (this._xformMode == this._ENC_XFORM_MODE) {
                                    e.pad(this._data, this.blockSize);
                                    var t = this._process(!0)
                                } else
                                    t = this._process(!0),
                                    e.unpad(t);
                                return t
                            },
                            blockSize: 4
                        }),
                        o.CipherParams = i.extend({
                            init: function(e) {
                                this.mixIn(e)
                            },
                            toString: function(e) {
                                return (e || this.formatter).stringify(this)
                            }
                        }))
                          , N = (t.format = {}).OpenSSL = {
                            stringify: function(e) {
                                var t = e.ciphertext
                                  , o = e.salt;
                                if (o)
                                    var i = r.create([1398893684, 1701076831]).concat(o).concat(t);
                                else
                                    i = t;
                                return i.toString(u)
                            },
                            parse: function(e) {
                                var t = u.parse(e)
                                  , o = t.words;
                                if (1398893684 == o[0] && 1701076831 == o[1]) {
                                    var i = r.create(o.slice(2, 4));
                                    o.splice(0, 4),
                                    t.sigBytes -= 16
                                }
                                return y.create({
                                    ciphertext: t,
                                    salt: i
                                })
                            }
                        }
                          , g = o.SerializableCipher = i.extend({
                            cfg: i.extend({
                                format: N
                            }),
                            encrypt: function(e, t, o, i) {
                                i = this.cfg.extend(i);
                                var r = e.createEncryptor(o, i)
                                  , n = r.finalize(t)
                                  , l = r.cfg;
                                return y.create({
                                    ciphertext: n,
                                    key: o,
                                    iv: l.iv,
                                    algorithm: e,
                                    mode: l.mode,
                                    padding: l.padding,
                                    blockSize: e.blockSize,
                                    formatter: i.format
                                })
                            },
                            decrypt: function(e, t, o, i) {
                                return i = this.cfg.extend(i),
                                t = this._parse(t, i.format),
                                e.createDecryptor(o, i).finalize(t.ciphertext)
                            },
                            _parse: function(e, t) {
                                return "string" == typeof e ? t.parse(e, this) : e
                            }
                        })
                          , f = (t.kdf = {}).OpenSSL = {
                            execute: function(e, t, o, i) {
                                i || (i = r.random(8));
                                var n = s.create({
                                    keySize: t + o
                                }).compute(e, i)
                                  , l = r.create(n.words.slice(t), 4 * o);
                                return n.sigBytes = 4 * t,
                                y.create({
                                    key: n,
                                    iv: l,
                                    salt: i
                                })
                            }
                        }
                          , b = o.PasswordBasedCipher = g.extend({
                            cfg: g.cfg.extend({
                                kdf: f
                            }),
                            encrypt: function(e, t, o, i) {
                                var r = (i = this.cfg.extend(i)).kdf.execute(o, e.keySize, e.ivSize);
                                i.iv = r.iv;
                                var n = g.encrypt.call(this, e, t, r.key, i);
                                return n.mixIn(r),
                                n
                            },
                            decrypt: function(e, t, o, i) {
                                i = this.cfg.extend(i),
                                t = this._parse(t, i.format);
                                var r = i.kdf.execute(o, e.keySize, e.ivSize, t.salt);
                                return i.iv = r.iv,
                                g.decrypt.call(this, e, t, r.key, i)
                            }
                        })
                    }(),
                    a.mode.CFB = function() {
                        function e(e, t, o, i) {
                            var r = this._iv;
                            if (r) {
                                var n = r.slice(0);
                                this._iv = void 0
                            } else
                                n = this._prevBlock;
                            i.encryptBlock(n, 0);
                            for (var l = 0; l < o; l++)
                                e[t + l] ^= n[l]
                        }
                        var t = a.lib.BlockCipherMode.extend();
                        return t.Encryptor = t.extend({
                            processBlock: function(t, o) {
                                var i = this._cipher
                                  , r = i.blockSize;
                                e.call(this, t, o, r, i),
                                this._prevBlock = t.slice(o, o + r)
                            }
                        }),
                        t.Decryptor = t.extend({
                            processBlock: function(t, o) {
                                var i = this._cipher
                                  , r = i.blockSize
                                  , n = t.slice(o, o + r);
                                e.call(this, t, o, r, i),
                                this._prevBlock = n
                            }
                        }),
                        t
                    }(),
                    a.mode.ECB = function() {
                        var e = a.lib.BlockCipherMode.extend();
                        return e.Encryptor = e.extend({
                            processBlock: function(e, t) {
                                this._cipher.encryptBlock(e, t)
                            }
                        }),
                        e.Decryptor = e.extend({
                            processBlock: function(e, t) {
                                this._cipher.decryptBlock(e, t)
                            }
                        }),
                        e
                    }(),
                    a.pad.AnsiX923 = {
                        pad: function(e, t) {
                            var o = e.sigBytes
                              , i = 4 * t
                              , r = i - o % i
                              , n = o + r - 1;
                            e.clamp(),
                            e.words[n >>> 2] |= r << 24 - n % 4 * 8,
                            e.sigBytes += r
                        },
                        unpad: function(e) {
                            var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                            e.sigBytes -= t
                        }
                    },
                    a.pad.Iso10126 = {
                        pad: function(e, t) {
                            var o = 4 * t
                              , i = o - e.sigBytes % o;
                            e.concat(a.lib.WordArray.random(i - 1)).concat(a.lib.WordArray.create([i << 24], 1))
                        },
                        unpad: function(e) {
                            var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                            e.sigBytes -= t
                        }
                    },
                    a.pad.Iso97971 = {
                        pad: function(e, t) {
                            e.concat(a.lib.WordArray.create([2147483648], 1)),
                            a.pad.ZeroPadding.pad(e, t)
                        },
                        unpad: function(e) {
                            a.pad.ZeroPadding.unpad(e),
                            e.sigBytes--
                        }
                    },
                    a.mode.OFB = function() {
                        var e = a.lib.BlockCipherMode.extend()
                          , t = e.Encryptor = e.extend({
                            processBlock: function(e, t) {
                                var o = this._cipher
                                  , i = o.blockSize
                                  , r = this._iv
                                  , n = this._keystream;
                                r && (n = this._keystream = r.slice(0),
                                this._iv = void 0),
                                o.encryptBlock(n, 0);
                                for (var l = 0; l < i; l++)
                                    e[t + l] ^= n[l]
                            }
                        });
                        return e.Decryptor = t,
                        e
                    }(),
                    a.pad.NoPadding = {
                        pad: function() {},
                        unpad: function() {}
                    },
                    function(e) {
                        var t = a
                          , o = t.lib.CipherParams
                          , i = t.enc.Hex;
                        t.format.Hex = {
                            stringify: function(e) {
                                return e.ciphertext.toString(i)
                            },
                            parse: function(e) {
                                var t = i.parse(e);
                                return o.create({
                                    ciphertext: t
                                })
                            }
                        }
                    }(),
                    function() {
                        var e = a
                          , t = e.lib.BlockCipher
                          , o = e.algo
                          , i = []
                          , r = []
                          , n = []
                          , l = []
                          , u = []
                          , s = []
                          , c = []
                          , d = []
                          , m = []
                          , p = [];
                        !function() {
                            for (var e = [], t = 0; t < 256; t++)
                                e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                            var o = 0
                              , a = 0;
                            for (t = 0; t < 256; t++) {
                                var h = a ^ a << 1 ^ a << 2 ^ a << 3 ^ a << 4;
                                h = h >>> 8 ^ 255 & h ^ 99,
                                i[o] = h,
                                r[h] = o;
                                var y = e[o]
                                  , N = e[y]
                                  , g = e[N]
                                  , f = 257 * e[h] ^ 16843008 * h;
                                n[o] = f << 24 | f >>> 8,
                                l[o] = f << 16 | f >>> 16,
                                u[o] = f << 8 | f >>> 24,
                                s[o] = f,
                                f = 16843009 * g ^ 65537 * N ^ 257 * y ^ 16843008 * o,
                                c[h] = f << 24 | f >>> 8,
                                d[h] = f << 16 | f >>> 16,
                                m[h] = f << 8 | f >>> 24,
                                p[h] = f,
                                o ? (o = y ^ e[e[e[g ^ y]]],
                                a ^= e[e[a]]) : o = a = 1
                            }
                        }();
                        var h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                          , y = o.AES = t.extend({
                            _doReset: function() {
                                if (!this._nRounds || this._keyPriorReset !== this._key) {
                                    for (var e = this._keyPriorReset = this._key, t = e.words, o = e.sigBytes / 4, r = 4 * ((this._nRounds = o + 6) + 1), n = this._keySchedule = [], l = 0; l < r; l++)
                                        if (l < o)
                                            n[l] = t[l];
                                        else {
                                            var a = n[l - 1];
                                            l % o ? o > 6 && l % o == 4 && (a = i[a >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a]) : (a = i[(a = a << 8 | a >>> 24) >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & a],
                                            a ^= h[l / o | 0] << 24),
                                            n[l] = n[l - o] ^ a
                                        }
                                    for (var u = this._invKeySchedule = [], s = 0; s < r; s++)
                                        l = r - s,
                                        a = s % 4 ? n[l] : n[l - 4],
                                        u[s] = s < 4 || l <= 4 ? a : c[i[a >>> 24]] ^ d[i[a >>> 16 & 255]] ^ m[i[a >>> 8 & 255]] ^ p[i[255 & a]]
                                }
                            },
                            encryptBlock: function(e, t) {
                                this._doCryptBlock(e, t, this._keySchedule, n, l, u, s, i)
                            },
                            decryptBlock: function(e, t) {
                                var o = e[t + 1];
                                e[t + 1] = e[t + 3],
                                e[t + 3] = o,
                                this._doCryptBlock(e, t, this._invKeySchedule, c, d, m, p, r),
                                o = e[t + 1],
                                e[t + 1] = e[t + 3],
                                e[t + 3] = o
                            },
                            _doCryptBlock: function(e, t, o, i, r, n, l, a) {
                                for (var u = this._nRounds, s = e[t] ^ o[0], c = e[t + 1] ^ o[1], d = e[t + 2] ^ o[2], m = e[t + 3] ^ o[3], p = 4, h = 1; h < u; h++) {
                                    var y = i[s >>> 24] ^ r[c >>> 16 & 255] ^ n[d >>> 8 & 255] ^ l[255 & m] ^ o[p++]
                                      , N = i[c >>> 24] ^ r[d >>> 16 & 255] ^ n[m >>> 8 & 255] ^ l[255 & s] ^ o[p++]
                                      , g = i[d >>> 24] ^ r[m >>> 16 & 255] ^ n[s >>> 8 & 255] ^ l[255 & c] ^ o[p++]
                                      , f = i[m >>> 24] ^ r[s >>> 16 & 255] ^ n[c >>> 8 & 255] ^ l[255 & d] ^ o[p++];
                                    s = y,
                                    c = N,
                                    d = g,
                                    m = f
                                }
                                y = (a[s >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & m]) ^ o[p++],
                                N = (a[c >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[m >>> 8 & 255] << 8 | a[255 & s]) ^ o[p++],
                                g = (a[d >>> 24] << 24 | a[m >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & c]) ^ o[p++],
                                f = (a[m >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & d]) ^ o[p++],
                                e[t] = y,
                                e[t + 1] = N,
                                e[t + 2] = g,
                                e[t + 3] = f
                            },
                            keySize: 8
                        });
                        e.AES = t._createHelper(y)
                    }(),
                    function() {
                        function e(e, t) {
                            var o = (this._lBlock >>> e ^ this._rBlock) & t;
                            this._rBlock ^= o,
                            this._lBlock ^= o << e
                        }
                        function t(e, t) {
                            var o = (this._rBlock >>> e ^ this._lBlock) & t;
                            this._lBlock ^= o,
                            this._rBlock ^= o << e
                        }
                        var o = a
                          , i = o.lib
                          , r = i.WordArray
                          , n = i.BlockCipher
                          , l = o.algo
                          , u = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
                          , s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
                          , c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
                          , d = [{
                            0: 8421888,
                            268435456: 32768,
                            536870912: 8421378,
                            805306368: 2,
                            1073741824: 512,
                            1342177280: 8421890,
                            1610612736: 8389122,
                            1879048192: 8388608,
                            2147483648: 514,
                            2415919104: 8389120,
                            2684354560: 33280,
                            2952790016: 8421376,
                            3221225472: 32770,
                            3489660928: 8388610,
                            3758096384: 0,
                            4026531840: 33282,
                            134217728: 0,
                            402653184: 8421890,
                            671088640: 33282,
                            939524096: 32768,
                            1207959552: 8421888,
                            1476395008: 512,
                            1744830464: 8421378,
                            2013265920: 2,
                            2281701376: 8389120,
                            2550136832: 33280,
                            2818572288: 8421376,
                            3087007744: 8389122,
                            3355443200: 8388610,
                            3623878656: 32770,
                            3892314112: 514,
                            4160749568: 8388608,
                            1: 32768,
                            268435457: 2,
                            536870913: 8421888,
                            805306369: 8388608,
                            1073741825: 8421378,
                            1342177281: 33280,
                            1610612737: 512,
                            1879048193: 8389122,
                            2147483649: 8421890,
                            2415919105: 8421376,
                            2684354561: 8388610,
                            2952790017: 33282,
                            3221225473: 514,
                            3489660929: 8389120,
                            3758096385: 32770,
                            4026531841: 0,
                            134217729: 8421890,
                            402653185: 8421376,
                            671088641: 8388608,
                            939524097: 512,
                            1207959553: 32768,
                            1476395009: 8388610,
                            1744830465: 2,
                            2013265921: 33282,
                            2281701377: 32770,
                            2550136833: 8389122,
                            2818572289: 514,
                            3087007745: 8421888,
                            3355443201: 8389120,
                            3623878657: 0,
                            3892314113: 33280,
                            4160749569: 8421378
                        }, {
                            0: 1074282512,
                            16777216: 16384,
                            33554432: 524288,
                            50331648: 1074266128,
                            67108864: 1073741840,
                            83886080: 1074282496,
                            100663296: 1073758208,
                            117440512: 16,
                            134217728: 540672,
                            150994944: 1073758224,
                            167772160: 1073741824,
                            184549376: 540688,
                            201326592: 524304,
                            218103808: 0,
                            234881024: 16400,
                            251658240: 1074266112,
                            8388608: 1073758208,
                            25165824: 540688,
                            41943040: 16,
                            58720256: 1073758224,
                            75497472: 1074282512,
                            92274688: 1073741824,
                            109051904: 524288,
                            125829120: 1074266128,
                            142606336: 524304,
                            159383552: 0,
                            176160768: 16384,
                            192937984: 1074266112,
                            209715200: 1073741840,
                            226492416: 540672,
                            243269632: 1074282496,
                            260046848: 16400,
                            268435456: 0,
                            285212672: 1074266128,
                            301989888: 1073758224,
                            318767104: 1074282496,
                            335544320: 1074266112,
                            352321536: 16,
                            369098752: 540688,
                            385875968: 16384,
                            402653184: 16400,
                            419430400: 524288,
                            436207616: 524304,
                            452984832: 1073741840,
                            469762048: 540672,
                            486539264: 1073758208,
                            503316480: 1073741824,
                            520093696: 1074282512,
                            276824064: 540688,
                            293601280: 524288,
                            310378496: 1074266112,
                            327155712: 16384,
                            343932928: 1073758208,
                            360710144: 1074282512,
                            377487360: 16,
                            394264576: 1073741824,
                            411041792: 1074282496,
                            427819008: 1073741840,
                            444596224: 1073758224,
                            461373440: 524304,
                            478150656: 0,
                            494927872: 16400,
                            511705088: 1074266128,
                            528482304: 540672
                        }, {
                            0: 260,
                            1048576: 0,
                            2097152: 67109120,
                            3145728: 65796,
                            4194304: 65540,
                            5242880: 67108868,
                            6291456: 67174660,
                            7340032: 67174400,
                            8388608: 67108864,
                            9437184: 67174656,
                            10485760: 65792,
                            11534336: 67174404,
                            12582912: 67109124,
                            13631488: 65536,
                            14680064: 4,
                            15728640: 256,
                            524288: 67174656,
                            1572864: 67174404,
                            2621440: 0,
                            3670016: 67109120,
                            4718592: 67108868,
                            5767168: 65536,
                            6815744: 65540,
                            7864320: 260,
                            8912896: 4,
                            9961472: 256,
                            11010048: 67174400,
                            12058624: 65796,
                            13107200: 65792,
                            14155776: 67109124,
                            15204352: 67174660,
                            16252928: 67108864,
                            16777216: 67174656,
                            17825792: 65540,
                            18874368: 65536,
                            19922944: 67109120,
                            20971520: 256,
                            22020096: 67174660,
                            23068672: 67108868,
                            24117248: 0,
                            25165824: 67109124,
                            26214400: 67108864,
                            27262976: 4,
                            28311552: 65792,
                            29360128: 67174400,
                            30408704: 260,
                            31457280: 65796,
                            32505856: 67174404,
                            17301504: 67108864,
                            18350080: 260,
                            19398656: 67174656,
                            20447232: 0,
                            21495808: 65540,
                            22544384: 67109120,
                            23592960: 256,
                            24641536: 67174404,
                            25690112: 65536,
                            26738688: 67174660,
                            27787264: 65796,
                            28835840: 67108868,
                            29884416: 67109124,
                            30932992: 67174400,
                            31981568: 4,
                            33030144: 65792
                        }, {
                            0: 2151682048,
                            65536: 2147487808,
                            131072: 4198464,
                            196608: 2151677952,
                            262144: 0,
                            327680: 4198400,
                            393216: 2147483712,
                            458752: 4194368,
                            524288: 2147483648,
                            589824: 4194304,
                            655360: 64,
                            720896: 2147487744,
                            786432: 2151678016,
                            851968: 4160,
                            917504: 4096,
                            983040: 2151682112,
                            32768: 2147487808,
                            98304: 64,
                            163840: 2151678016,
                            229376: 2147487744,
                            294912: 4198400,
                            360448: 2151682112,
                            425984: 0,
                            491520: 2151677952,
                            557056: 4096,
                            622592: 2151682048,
                            688128: 4194304,
                            753664: 4160,
                            819200: 2147483648,
                            884736: 4194368,
                            950272: 4198464,
                            1015808: 2147483712,
                            1048576: 4194368,
                            1114112: 4198400,
                            1179648: 2147483712,
                            1245184: 0,
                            1310720: 4160,
                            1376256: 2151678016,
                            1441792: 2151682048,
                            1507328: 2147487808,
                            1572864: 2151682112,
                            1638400: 2147483648,
                            1703936: 2151677952,
                            1769472: 4198464,
                            1835008: 2147487744,
                            1900544: 4194304,
                            1966080: 64,
                            2031616: 4096,
                            1081344: 2151677952,
                            1146880: 2151682112,
                            1212416: 0,
                            1277952: 4198400,
                            1343488: 4194368,
                            1409024: 2147483648,
                            1474560: 2147487808,
                            1540096: 64,
                            1605632: 2147483712,
                            1671168: 4096,
                            1736704: 2147487744,
                            1802240: 2151678016,
                            1867776: 4160,
                            1933312: 2151682048,
                            1998848: 4194304,
                            2064384: 4198464
                        }, {
                            0: 128,
                            4096: 17039360,
                            8192: 262144,
                            12288: 536870912,
                            16384: 537133184,
                            20480: 16777344,
                            24576: 553648256,
                            28672: 262272,
                            32768: 16777216,
                            36864: 537133056,
                            40960: 536871040,
                            45056: 553910400,
                            49152: 553910272,
                            53248: 0,
                            57344: 17039488,
                            61440: 553648128,
                            2048: 17039488,
                            6144: 553648256,
                            10240: 128,
                            14336: 17039360,
                            18432: 262144,
                            22528: 537133184,
                            26624: 553910272,
                            30720: 536870912,
                            34816: 537133056,
                            38912: 0,
                            43008: 553910400,
                            47104: 16777344,
                            51200: 536871040,
                            55296: 553648128,
                            59392: 16777216,
                            63488: 262272,
                            65536: 262144,
                            69632: 128,
                            73728: 536870912,
                            77824: 553648256,
                            81920: 16777344,
                            86016: 553910272,
                            90112: 537133184,
                            94208: 16777216,
                            98304: 553910400,
                            102400: 553648128,
                            106496: 17039360,
                            110592: 537133056,
                            114688: 262272,
                            118784: 536871040,
                            122880: 0,
                            126976: 17039488,
                            67584: 553648256,
                            71680: 16777216,
                            75776: 17039360,
                            79872: 537133184,
                            83968: 536870912,
                            88064: 17039488,
                            92160: 128,
                            96256: 553910272,
                            100352: 262272,
                            104448: 553910400,
                            108544: 0,
                            112640: 553648128,
                            116736: 16777344,
                            120832: 262144,
                            124928: 537133056,
                            129024: 536871040
                        }, {
                            0: 268435464,
                            256: 8192,
                            512: 270532608,
                            768: 270540808,
                            1024: 268443648,
                            1280: 2097152,
                            1536: 2097160,
                            1792: 268435456,
                            2048: 0,
                            2304: 268443656,
                            2560: 2105344,
                            2816: 8,
                            3072: 270532616,
                            3328: 2105352,
                            3584: 8200,
                            3840: 270540800,
                            128: 270532608,
                            384: 270540808,
                            640: 8,
                            896: 2097152,
                            1152: 2105352,
                            1408: 268435464,
                            1664: 268443648,
                            1920: 8200,
                            2176: 2097160,
                            2432: 8192,
                            2688: 268443656,
                            2944: 270532616,
                            3200: 0,
                            3456: 270540800,
                            3712: 2105344,
                            3968: 268435456,
                            4096: 268443648,
                            4352: 270532616,
                            4608: 270540808,
                            4864: 8200,
                            5120: 2097152,
                            5376: 268435456,
                            5632: 268435464,
                            5888: 2105344,
                            6144: 2105352,
                            6400: 0,
                            6656: 8,
                            6912: 270532608,
                            7168: 8192,
                            7424: 268443656,
                            7680: 270540800,
                            7936: 2097160,
                            4224: 8,
                            4480: 2105344,
                            4736: 2097152,
                            4992: 268435464,
                            5248: 268443648,
                            5504: 8200,
                            5760: 270540808,
                            6016: 270532608,
                            6272: 270540800,
                            6528: 270532616,
                            6784: 8192,
                            7040: 2105352,
                            7296: 2097160,
                            7552: 0,
                            7808: 268435456,
                            8064: 268443656
                        }, {
                            0: 1048576,
                            16: 33555457,
                            32: 1024,
                            48: 1049601,
                            64: 34604033,
                            80: 0,
                            96: 1,
                            112: 34603009,
                            128: 33555456,
                            144: 1048577,
                            160: 33554433,
                            176: 34604032,
                            192: 34603008,
                            208: 1025,
                            224: 1049600,
                            240: 33554432,
                            8: 34603009,
                            24: 0,
                            40: 33555457,
                            56: 34604032,
                            72: 1048576,
                            88: 33554433,
                            104: 33554432,
                            120: 1025,
                            136: 1049601,
                            152: 33555456,
                            168: 34603008,
                            184: 1048577,
                            200: 1024,
                            216: 34604033,
                            232: 1,
                            248: 1049600,
                            256: 33554432,
                            272: 1048576,
                            288: 33555457,
                            304: 34603009,
                            320: 1048577,
                            336: 33555456,
                            352: 34604032,
                            368: 1049601,
                            384: 1025,
                            400: 34604033,
                            416: 1049600,
                            432: 1,
                            448: 0,
                            464: 34603008,
                            480: 33554433,
                            496: 1024,
                            264: 1049600,
                            280: 33555457,
                            296: 34603009,
                            312: 1,
                            328: 33554432,
                            344: 1048576,
                            360: 1025,
                            376: 34604032,
                            392: 33554433,
                            408: 34603008,
                            424: 0,
                            440: 34604033,
                            456: 1049601,
                            472: 1024,
                            488: 33555456,
                            504: 1048577
                        }, {
                            0: 134219808,
                            1: 131072,
                            2: 134217728,
                            3: 32,
                            4: 131104,
                            5: 134350880,
                            6: 134350848,
                            7: 2048,
                            8: 134348800,
                            9: 134219776,
                            10: 133120,
                            11: 134348832,
                            12: 2080,
                            13: 0,
                            14: 134217760,
                            15: 133152,
                            2147483648: 2048,
                            2147483649: 134350880,
                            2147483650: 134219808,
                            2147483651: 134217728,
                            2147483652: 134348800,
                            2147483653: 133120,
                            2147483654: 133152,
                            2147483655: 32,
                            2147483656: 134217760,
                            2147483657: 2080,
                            2147483658: 131104,
                            2147483659: 134350848,
                            2147483660: 0,
                            2147483661: 134348832,
                            2147483662: 134219776,
                            2147483663: 131072,
                            16: 133152,
                            17: 134350848,
                            18: 32,
                            19: 2048,
                            20: 134219776,
                            21: 134217760,
                            22: 134348832,
                            23: 131072,
                            24: 0,
                            25: 131104,
                            26: 134348800,
                            27: 134219808,
                            28: 134350880,
                            29: 133120,
                            30: 2080,
                            31: 134217728,
                            2147483664: 131072,
                            2147483665: 2048,
                            2147483666: 134348832,
                            2147483667: 133152,
                            2147483668: 32,
                            2147483669: 134348800,
                            2147483670: 134217728,
                            2147483671: 134219808,
                            2147483672: 134350880,
                            2147483673: 134217760,
                            2147483674: 134219776,
                            2147483675: 0,
                            2147483676: 133120,
                            2147483677: 2080,
                            2147483678: 131104,
                            2147483679: 134350848
                        }]
                          , m = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
                          , p = l.DES = n.extend({
                            _doReset: function() {
                                for (var e = this._key.words, t = [], o = 0; o < 56; o++) {
                                    var i = u[o] - 1;
                                    t[o] = e[i >>> 5] >>> 31 - i % 32 & 1
                                }
                                for (var r = this._subKeys = [], n = 0; n < 16; n++) {
                                    var l = r[n] = []
                                      , a = c[n];
                                    for (o = 0; o < 24; o++)
                                        l[o / 6 | 0] |= t[(s[o] - 1 + a) % 28] << 31 - o % 6,
                                        l[4 + (o / 6 | 0)] |= t[28 + (s[o + 24] - 1 + a) % 28] << 31 - o % 6;
                                    for (l[0] = l[0] << 1 | l[0] >>> 31,
                                    o = 1; o < 7; o++)
                                        l[o] = l[o] >>> 4 * (o - 1) + 3;
                                    l[7] = l[7] << 5 | l[7] >>> 27
                                }
                                var d = this._invSubKeys = [];
                                for (o = 0; o < 16; o++)
                                    d[o] = r[15 - o]
                            },
                            encryptBlock: function(e, t) {
                                this._doCryptBlock(e, t, this._subKeys)
                            },
                            decryptBlock: function(e, t) {
                                this._doCryptBlock(e, t, this._invSubKeys)
                            },
                            _doCryptBlock: function(o, i, r) {
                                this._lBlock = o[i],
                                this._rBlock = o[i + 1],
                                e.call(this, 4, 252645135),
                                e.call(this, 16, 65535),
                                t.call(this, 2, 858993459),
                                t.call(this, 8, 16711935),
                                e.call(this, 1, 1431655765);
                                for (var n = 0; n < 16; n++) {
                                    for (var l = r[n], a = this._lBlock, u = this._rBlock, s = 0, c = 0; c < 8; c++)
                                        s |= d[c][((u ^ l[c]) & m[c]) >>> 0];
                                    this._lBlock = u,
                                    this._rBlock = a ^ s
                                }
                                var p = this._lBlock;
                                this._lBlock = this._rBlock,
                                this._rBlock = p,
                                e.call(this, 1, 1431655765),
                                t.call(this, 8, 16711935),
                                t.call(this, 2, 858993459),
                                e.call(this, 16, 65535),
                                e.call(this, 4, 252645135),
                                o[i] = this._lBlock,
                                o[i + 1] = this._rBlock
                            },
                            keySize: 2,
                            ivSize: 2,
                            blockSize: 2
                        });
                        o.DES = n._createHelper(p);
                        var h = l.TripleDES = n.extend({
                            _doReset: function() {
                                var e = this._key.words;
                                this._des1 = p.createEncryptor(r.create(e.slice(0, 2))),
                                this._des2 = p.createEncryptor(r.create(e.slice(2, 4))),
                                this._des3 = p.createEncryptor(r.create(e.slice(4, 6)))
                            },
                            encryptBlock: function(e, t) {
                                this._des1.encryptBlock(e, t),
                                this._des2.decryptBlock(e, t),
                                this._des3.encryptBlock(e, t)
                            },
                            decryptBlock: function(e, t) {
                                this._des3.decryptBlock(e, t),
                                this._des2.encryptBlock(e, t),
                                this._des1.decryptBlock(e, t)
                            },
                            keySize: 6,
                            ivSize: 2,
                            blockSize: 2
                        });
                        o.TripleDES = n._createHelper(h)
                    }(),
                    function() {
                        function e() {
                            for (var e = this._S, t = this._i, o = this._j, i = 0, r = 0; r < 4; r++) {
                                o = (o + e[t = (t + 1) % 256]) % 256;
                                var n = e[t];
                                e[t] = e[o],
                                e[o] = n,
                                i |= e[(e[t] + e[o]) % 256] << 24 - 8 * r
                            }
                            return this._i = t,
                            this._j = o,
                            i
                        }
                        var t = a
                          , o = t.lib.StreamCipher
                          , i = t.algo
                          , r = i.RC4 = o.extend({
                            _doReset: function() {
                                for (var e = this._key, t = e.words, o = e.sigBytes, i = this._S = [], r = 0; r < 256; r++)
                                    i[r] = r;
                                r = 0;
                                for (var n = 0; r < 256; r++) {
                                    var l = r % o
                                      , a = t[l >>> 2] >>> 24 - l % 4 * 8 & 255;
                                    n = (n + i[r] + a) % 256;
                                    var u = i[r];
                                    i[r] = i[n],
                                    i[n] = u
                                }
                                this._i = this._j = 0
                            },
                            _doProcessBlock: function(t, o) {
                                t[o] ^= e.call(this)
                            },
                            keySize: 8,
                            ivSize: 0
                        });
                        t.RC4 = o._createHelper(r);
                        var n = i.RC4Drop = r.extend({
                            cfg: r.cfg.extend({
                                drop: 192
                            }),
                            _doReset: function() {
                                r._doReset.call(this);
                                for (var t = this.cfg.drop; t > 0; t--)
                                    e.call(this)
                            }
                        });
                        t.RC4Drop = o._createHelper(n)
                    }(),
                    a.mode.CTRGladman = function() {
                        function e(e) {
                            if (255 == (e >> 24 & 255)) {
                                var t = e >> 16 & 255
                                  , o = e >> 8 & 255
                                  , i = 255 & e;
                                255 === t ? (t = 0,
                                255 === o ? (o = 0,
                                255 === i ? i = 0 : ++i) : ++o) : ++t,
                                e = 0,
                                e += t << 16,
                                e += o << 8,
                                e += i
                            } else
                                e += 1 << 24;
                            return e
                        }
                        function t(t) {
                            return 0 === (t[0] = e(t[0])) && (t[1] = e(t[1])),
                            t
                        }
                        var o = a.lib.BlockCipherMode.extend()
                          , i = o.Encryptor = o.extend({
                            processBlock: function(e, o) {
                                var i = this._cipher
                                  , r = i.blockSize
                                  , n = this._iv
                                  , l = this._counter;
                                n && (l = this._counter = n.slice(0),
                                this._iv = void 0),
                                t(l);
                                var a = l.slice(0);
                                i.encryptBlock(a, 0);
                                for (var u = 0; u < r; u++)
                                    e[o + u] ^= a[u]
                            }
                        });
                        return o.Decryptor = i,
                        o
                    }(),
                    function() {
                        function e() {
                            for (var e = this._X, t = this._C, o = 0; o < 8; o++)
                                n[o] = t[o];
                            for (t[0] = t[0] + 1295307597 + this._b | 0,
                            t[1] = t[1] + 3545052371 + (t[0] >>> 0 < n[0] >>> 0 ? 1 : 0) | 0,
                            t[2] = t[2] + 886263092 + (t[1] >>> 0 < n[1] >>> 0 ? 1 : 0) | 0,
                            t[3] = t[3] + 1295307597 + (t[2] >>> 0 < n[2] >>> 0 ? 1 : 0) | 0,
                            t[4] = t[4] + 3545052371 + (t[3] >>> 0 < n[3] >>> 0 ? 1 : 0) | 0,
                            t[5] = t[5] + 886263092 + (t[4] >>> 0 < n[4] >>> 0 ? 1 : 0) | 0,
                            t[6] = t[6] + 1295307597 + (t[5] >>> 0 < n[5] >>> 0 ? 1 : 0) | 0,
                            t[7] = t[7] + 3545052371 + (t[6] >>> 0 < n[6] >>> 0 ? 1 : 0) | 0,
                            this._b = t[7] >>> 0 < n[7] >>> 0 ? 1 : 0,
                            o = 0; o < 8; o++) {
                                var i = e[o] + t[o]
                                  , r = 65535 & i
                                  , a = i >>> 16
                                  , u = ((r * r >>> 17) + r * a >>> 15) + a * a
                                  , s = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                                l[o] = u ^ s
                            }
                            e[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0,
                            e[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0,
                            e[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0,
                            e[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0,
                            e[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0,
                            e[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0,
                            e[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0,
                            e[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
                        }
                        var t = a
                          , o = t.lib.StreamCipher
                          , i = t.algo
                          , r = []
                          , n = []
                          , l = []
                          , u = i.Rabbit = o.extend({
                            _doReset: function() {
                                for (var t = this._key.words, o = this.cfg.iv, i = 0; i < 4; i++)
                                    t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8);
                                var r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16]
                                  , n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                                for (this._b = 0,
                                i = 0; i < 4; i++)
                                    e.call(this);
                                for (i = 0; i < 8; i++)
                                    n[i] ^= r[i + 4 & 7];
                                if (o) {
                                    var l = o.words
                                      , a = l[0]
                                      , u = l[1]
                                      , s = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                                      , c = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                                      , d = s >>> 16 | 4294901760 & c
                                      , m = c << 16 | 65535 & s;
                                    for (n[0] ^= s,
                                    n[1] ^= d,
                                    n[2] ^= c,
                                    n[3] ^= m,
                                    n[4] ^= s,
                                    n[5] ^= d,
                                    n[6] ^= c,
                                    n[7] ^= m,
                                    i = 0; i < 4; i++)
                                        e.call(this)
                                }
                            },
                            _doProcessBlock: function(t, o) {
                                var i = this._X;
                                e.call(this),
                                r[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
                                r[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
                                r[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
                                r[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                                for (var n = 0; n < 4; n++)
                                    r[n] = 16711935 & (r[n] << 8 | r[n] >>> 24) | 4278255360 & (r[n] << 24 | r[n] >>> 8),
                                    t[o + n] ^= r[n]
                            },
                            blockSize: 4,
                            ivSize: 2
                        });
                        t.Rabbit = o._createHelper(u)
                    }(),
                    a.mode.CTR = function() {
                        var e = a.lib.BlockCipherMode.extend()
                          , t = e.Encryptor = e.extend({
                            processBlock: function(e, t) {
                                var o = this._cipher
                                  , i = o.blockSize
                                  , r = this._iv
                                  , n = this._counter;
                                r && (n = this._counter = r.slice(0),
                                this._iv = void 0);
                                var l = n.slice(0);
                                o.encryptBlock(l, 0),
                                n[i - 1] = n[i - 1] + 1 | 0;
                                for (var a = 0; a < i; a++)
                                    e[t + a] ^= l[a]
                            }
                        });
                        return e.Decryptor = t,
                        e
                    }(),
                    function() {
                        function e() {
                            for (var e = this._X, t = this._C, o = 0; o < 8; o++)
                                n[o] = t[o];
                            for (t[0] = t[0] + 1295307597 + this._b | 0,
                            t[1] = t[1] + 3545052371 + (t[0] >>> 0 < n[0] >>> 0 ? 1 : 0) | 0,
                            t[2] = t[2] + 886263092 + (t[1] >>> 0 < n[1] >>> 0 ? 1 : 0) | 0,
                            t[3] = t[3] + 1295307597 + (t[2] >>> 0 < n[2] >>> 0 ? 1 : 0) | 0,
                            t[4] = t[4] + 3545052371 + (t[3] >>> 0 < n[3] >>> 0 ? 1 : 0) | 0,
                            t[5] = t[5] + 886263092 + (t[4] >>> 0 < n[4] >>> 0 ? 1 : 0) | 0,
                            t[6] = t[6] + 1295307597 + (t[5] >>> 0 < n[5] >>> 0 ? 1 : 0) | 0,
                            t[7] = t[7] + 3545052371 + (t[6] >>> 0 < n[6] >>> 0 ? 1 : 0) | 0,
                            this._b = t[7] >>> 0 < n[7] >>> 0 ? 1 : 0,
                            o = 0; o < 8; o++) {
                                var i = e[o] + t[o]
                                  , r = 65535 & i
                                  , a = i >>> 16
                                  , u = ((r * r >>> 17) + r * a >>> 15) + a * a
                                  , s = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                                l[o] = u ^ s
                            }
                            e[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0,
                            e[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0,
                            e[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0,
                            e[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0,
                            e[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0,
                            e[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0,
                            e[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0,
                            e[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0
                        }
                        var t = a
                          , o = t.lib.StreamCipher
                          , i = t.algo
                          , r = []
                          , n = []
                          , l = []
                          , u = i.RabbitLegacy = o.extend({
                            _doReset: function() {
                                var t = this._key.words
                                  , o = this.cfg.iv
                                  , i = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16]
                                  , r = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                                this._b = 0;
                                for (var n = 0; n < 4; n++)
                                    e.call(this);
                                for (n = 0; n < 8; n++)
                                    r[n] ^= i[n + 4 & 7];
                                if (o) {
                                    var l = o.words
                                      , a = l[0]
                                      , u = l[1]
                                      , s = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                                      , c = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                                      , d = s >>> 16 | 4294901760 & c
                                      , m = c << 16 | 65535 & s;
                                    for (r[0] ^= s,
                                    r[1] ^= d,
                                    r[2] ^= c,
                                    r[3] ^= m,
                                    r[4] ^= s,
                                    r[5] ^= d,
                                    r[6] ^= c,
                                    r[7] ^= m,
                                    n = 0; n < 4; n++)
                                        e.call(this)
                                }
                            },
                            _doProcessBlock: function(t, o) {
                                var i = this._X;
                                e.call(this),
                                r[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16,
                                r[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16,
                                r[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16,
                                r[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
                                for (var n = 0; n < 4; n++)
                                    r[n] = 16711935 & (r[n] << 8 | r[n] >>> 24) | 4278255360 & (r[n] << 24 | r[n] >>> 8),
                                    t[o + n] ^= r[n]
                            },
                            blockSize: 4,
                            ivSize: 2
                        });
                        t.RabbitLegacy = o._createHelper(u)
                    }(),
                    a.pad.ZeroPadding = {
                        pad: function(e, t) {
                            var o = 4 * t;
                            e.clamp(),
                            e.sigBytes += o - (e.sigBytes % o || o)
                        },
                        unpad: function(e) {
                            for (var t = e.words, o = e.sigBytes - 1; !(t[o >>> 2] >>> 24 - o % 4 * 8 & 255); )
                                o--;
                            e.sigBytes = o + 1
                        }
                    },
                    a
                }
                ,
                "object" == typeof e ? o.exports = e = l() : "function" == typeof define && define.amd ? define([], l) : n.CryptoJS = l(),
                o.exports
            }
            ), {}),
            et.require(tt),
            o._RF.push({}, "f21bdkBM5xNKLZv+VGUmcgb", "CrashManager", void 0),
            o._RF.pop(),
            o._RF.push({}, "8129eovHp1BEpxv1O3+ElJa", "PointUtils", void 0);
            var ot = function() {
                function e() {}
                return e.getDirectionEndPoint = function(e, t) {
                    return e.multiplyScalar(t)
                }
                ,
                e.disatnce = function(e, t) {
                    return E.distance(e, t)
                }
                ,
                e.angleTo360 = function(e) {
                    var t = e % 360;
                    return t > 0 ? t : t + 360
                }
                ,
                e.getPointWithAngleAndLength = function(e, t, o, i) {
                    return void 0 === i && (i = new a(1,1,1)),
                    t = M.degreesToRadians(t),
                    new a(Math.cos(t) * i.x,Math.sin(t) * i.y,0).multiplyScalar(o).add(e)
                }
                ,
                e.screenPointToNodePosition = function(e, t) {
                    var o = new a
                      , i = null;
                    return i = t instanceof E ? new a(t.x,t.y,0) : t,
                    e.getComponent(_).convertToNodeSpaceAR(i, o),
                    o
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "09605EaZ9JIPLAUWzBthP2B", "NodeUtils", void 0);
            var it = function() {
                function e() {}
                return e.get3DNodePosXZ = function(e) {
                    var t = new a;
                    return e.getPosition(t),
                    new E(t.x,t.z)
                }
                ,
                e.setNodeOpacity = function(e, t) {
                    var o = e.getComponent(D);
                    o && (o.opacity = t)
                }
                ,
                e.get3DPosXZ = function(e) {
                    return new E(e.x,e.z)
                }
                ,
                e.addNodePosY = function(e, t) {
                    var o = new a;
                    e.getPosition(o),
                    o.y += t,
                    e.setPosition(o)
                }
                ,
                e.setNodePosY = function(e, t) {
                    var o = new a;
                    e.getPosition(o),
                    o.y = t,
                    e.setPosition(o)
                }
                ,
                e.setNodePosX = function(e, t) {
                    var o = new a;
                    e.getPosition(o),
                    o.x = t,
                    e.setPosition(o)
                }
                ,
                e.setNodePosXY = function(e, t, o) {
                    var i = new a;
                    e.getPosition(i),
                    i.x = t,
                    i.y = o,
                    e.setPosition(i)
                }
                ,
                e.setNodeSize = function(e, t) {
                    e.getComponent(_).setContentSize(t)
                }
                ,
                e.getNodeSize = function(e) {
                    return e.getComponent(_).contentSize
                }
                ,
                e.setNodeSizeWH = function(e, t, o) {
                    this.setNodeSize(e, new L(t,o))
                }
                ,
                e.setNodeScale = function(e, t) {
                    var o = new a;
                    e.getScale(o),
                    o.x = t,
                    o.y = t,
                    o.z = t,
                    e.setScale(o)
                }
                ,
                e.setNodeScaleVec3 = function(e, o) {
                    e.parent || t.log("node not found perent, will not work");
                    var i = new a;
                    e.getScale(i),
                    i.x = o.x,
                    i.y = o.y,
                    i.z = o.z,
                    e.setScale(i)
                }
                ,
                e.setNodeScaleY = function(e, o) {
                    e.parent || t.log("node not found perent, will not work");
                    var i = new a;
                    e.getScale(i),
                    i.y = o,
                    e.setScale(i)
                }
                ,
                e.setNodeScaleX = function(e, o) {
                    e.parent || t.log("node not found perent, will not work");
                    var i = new a;
                    e.getScale(i),
                    i.x = o,
                    e.setScale(i)
                }
                ,
                e.setNodeScaleMultiplyScalar = function(e, o) {
                    e.parent || t.log("node not found perent, will not work");
                    var i = new a;
                    e.getScale(i),
                    i.x = i.x * o,
                    i.y = i.y * o,
                    i.z = i.z * o,
                    e.setScale(i)
                }
                ,
                e.setNodeWorldPos = function(e, t, o, i) {
                    var r = new a;
                    e.getWorldPosition(r),
                    null != t && null != t && (r.x = t),
                    null != o && null != o && (r.y = o),
                    null != i && null != i && (r.z = i),
                    e.setWorldPosition(r)
                }
                ,
                e.update3DNodePosXZ = function(e, t) {
                    var o = e.eulerAngles
                      , i = new a(o.x,t,o.z);
                    e.eulerAngles = i
                }
                ,
                e.getNodeRotation = function(e) {
                    var t = new A;
                    return e.getRotation(t),
                    t
                }
                ,
                e.getLinearVelocity = function(e) {
                    var t = new a;
                    return e.getLinearVelocity(t),
                    t
                }
                ,
                e.getLinearVelocityTotalXZ = function(e) {
                    var t = new a;
                    return e.getLinearVelocity(t),
                    Math.sqrt(t.x * t.x + t.z * t.z)
                }
                ,
                e.getVelocityTotalLinearAngularXYZ = function(e) {
                    var t = new a;
                    e.getLinearVelocity(t);
                    var o = new a;
                    return e.getAngularVelocity(o),
                    Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z) + Math.abs(o.x) + Math.abs(o.y) + Math.abs(o.z)
                }
                ,
                e.getLinearVelocityTotalXYZ = function(e) {
                    var t = new a;
                    return e.getLinearVelocity(t),
                    Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z)
                }
                ,
                e.getAngularVelocity = function(e) {
                    var t = new a;
                    return e.getAngularVelocity(t),
                    t
                }
                ,
                e.get3DNodePosition = function(e) {
                    var t = new a;
                    return e.getPosition(t),
                    t
                }
                ,
                e.update3DNodeScaleXAndUpdatePostion = function(e, t, o) {
                    void 0 === o && (o = 0);
                    var i = new a;
                    e.getPosition(i),
                    i.x = t / 2 + o,
                    e.position = i;
                    var r = e.scale;
                    e.setScale(new a(t,r.y,r.z))
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "b3068mjvr9D06EviB9zGI8u", "AnimationHelper", void 0);
            var rt, nt, lt, at, ut, st, ct, dt, mt, pt, ht, yt = "AnimationHelper", Nt = function() {
                function e() {}
                return e.stopAnimation = function() {
                    x.stopAllByTag(e.animationTag)
                }
                ,
                e.animationToPos = function(t, o, i, r) {
                    void 0 === i && (i = .2),
                    void 0 === r && (r = null),
                    z(t).tag(e.animationTag).to(i, {
                        position: o
                    }).call((function() {
                        r && r()
                    }
                    )).start()
                }
                ,
                e.animationToPosEaseInout = function(t, o, i, r) {
                    void 0 === i && (i = .2),
                    void 0 === r && (r = null),
                    z(t).tag(e.animationTag).to(i, {
                        position: o
                    }, {
                        easing: "elasticInOut"
                    }).call((function() {
                        r && r()
                    }
                    )).start()
                }
                ,
                e.animationMove = function(t, o, i, r, n, l, a) {
                    void 0 === o && (o = 90),
                    void 0 === i && (i = .8),
                    void 0 === r && (r = !1),
                    void 0 === n && (n = 2e3),
                    void 0 === l && (l = null),
                    void 0 === a && (a = null);
                    var u = l;
                    null == u && (u = e.animationTag);
                    var s = t.angle + o
                      , c = ot.getPointWithAngleAndLength(t.getPosition(), s, n);
                    if (r) {
                        var d = t.getPosition();
                        z(t).tag(u).repeatForever(z(t).tag(e.animationTag).to(i, {
                            position: c
                        }).to(0, {
                            position: d
                        })).start()
                    } else
                        z(t).tag(u).to(i, {
                            position: c
                        }).call((function() {
                            a && a()
                        }
                        )).start()
                }
                ,
                e.uiOpacityAnimationSampleShow = function(e, t, o) {
                    void 0 === t && (t = .2),
                    void 0 === o && (o = null),
                    this.uiOpacityAnimationSample(e, t, 0, 255, 0, o)
                }
                ,
                e.uiOpacityAnimationSampleHide = function(e, t, o, i) {
                    void 0 === t && (t = .2),
                    void 0 === o && (o = 0),
                    void 0 === i && (i = null),
                    o < 0 && (o = 0),
                    this.uiOpacityAnimationSample(e, t, 255, 0, o, i)
                }
                ,
                e.uiOpacityAnimationSample = function(o, i, r, n, l, a) {
                    if (void 0 === i && (i = .2),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = 255),
                    void 0 === l && (l = 0),
                    void 0 === a && (a = null),
                    o) {
                        var u = o.getComponent(D);
                        u ? (o && (o.active = !0),
                        u.opacity = r,
                        z(u).delay(l).tag(e.animationTag).to(i, {
                            opacity: n
                        }).call((function() {
                            a && a()
                        }
                        )).start()) : t.log(yt, "uiOpacityAnimation node not found UIOpacity")
                    } else
                        t.log(yt, "uiOpacityAnimation node is null")
                }
                ,
                e.uiOpacityAnimation = function(o, i, r, n, l, a) {
                    if (void 0 === i && (i = !1),
                    void 0 === r && (r = 3),
                    void 0 === n && (n = .2),
                    void 0 === l && (l = 0),
                    void 0 === a && (a = 255),
                    o) {
                        var u = o.getComponent(D);
                        u ? (o && (o.active = !0),
                        u.opacity = l,
                        z(u).delay(r).tag(e.animationTag).to(n, {
                            opacity: a
                        }).start(),
                        i && this.uiOpacityAnimation(o, !1, r + n, n, a, l)) : t.log(yt, "uiOpacityAnimation node not found UIOpacity")
                    } else
                        t.log(yt, "uiOpacityAnimation node is null")
                }
                ,
                e.uiAngleAnimationSample = function(o, i, r, n, l) {
                    void 0 === i && (i = .2),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = 255),
                    void 0 === l && (l = null),
                    o ? (o.angle = r,
                    new x(o).tag(e.animationTag).to(i, {
                        angle: n
                    }, {
                        easing: "quartIn"
                    }).call((function() {
                        l && l()
                    }
                    )).start()) : t.log(yt, "uiOpacityAnimation node is null")
                }
                ,
                e.uiScaleAnimationSample = function(o, i, r, n, l) {
                    void 0 === i && (i = .2),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = 255),
                    void 0 === l && (l = null),
                    o ? (it.setNodeScale(o, r),
                    z(o).tag(e.animationTag).to(i, {
                        scale: new a(n,n,n)
                    }).call((function() {
                        l && l()
                    }
                    )).start()) : t.log(yt, "uiOpacityAnimation node is null")
                }
                ,
                e.uiScaleAnimationSampleLoop = function(o, i, r, n) {
                    if (void 0 === i && (i = .2),
                    void 0 === r && (r = 1),
                    void 0 === n && (n = 1.1),
                    o)
                        return it.setNodeScale(o, r),
                        z(o).tag(e.animationTag).sequence(z(o).to(i / 2, {
                            scale: new a(n,n,n)
                        }), z(o).to(i / 2, {
                            scale: new a(r,r,r)
                        })).repeatForever().start();
                    t.log(yt, "uiOpacityAnimation node is null")
                }
                ,
                e.uiScaleAnimationSampleKeepInit = function(o, i, r, n, l) {
                    void 0 === i && (i = .2),
                    void 0 === r && (r = 1),
                    void 0 === n && (n = 1.1),
                    void 0 === l && (l = null),
                    o ? (it.setNodeScale(o, r),
                    z(o).tag(e.animationTag).sequence(z(o).to(i / 2, {
                        scale: new a(n,n,n)
                    }), z(o).to(i / 2, {
                        scale: new a(r,r,r)
                    })).call((function() {
                        l && l()
                    }
                    )).start()) : t.log(yt, "uiOpacityAnimation node is null")
                }
                ,
                e.bezierMoveTo = function(e, t, o, i) {
                    void 0 === i && (i = null);
                    var r = e.getPosition()
                      , n = i;
                    return n || ((n = r.clone()).x = o.x,
                    n.y = r.y),
                    this.bezierTo(e, t, e.getPosition(), n, o, null)
                }
                ,
                e.bezierMoveToAutoStart = function(e, t, o, i, r, n) {
                    void 0 === i && (i = 0),
                    void 0 === r && (r = null),
                    void 0 === n && (n = null);
                    var l = e.getPosition()
                      , a = n;
                    a || ((a = l.clone()).x = o.x,
                    a.y = l.y);
                    var u = this.bezierTo(e, t, e.getPosition(), a, o, null, i);
                    return u.call((function() {
                        r && r()
                    }
                    )),
                    u.start(),
                    u
                }
                ,
                e.bezierTo = function(e, t, o, i, r, n, l) {
                    void 0 === l && (l = 0),
                    n = n || Object.create(null);
                    return n.onUpdate = function(t, n) {
                        var l, u, s, c, d, m;
                        e.position = (s = i,
                        c = r,
                        d = (1 - (l = n)) * (1 - l) * (u = o).x + 2 * l * (1 - l) * s.x + l * l * c.x,
                        m = (1 - l) * (1 - l) * u.y + 2 * l * (1 - l) * s.y + l * l * c.y,
                        new a(d,m,0))
                    }
                    ,
                    z(e).delay(l).to(t, {}, n)
                }
                ,
                e.bezierTo3 = function(e, t, o, i, r, n, l) {
                    l = l || Object.create(null);
                    return l.onUpdate = function(t, l) {
                        e.position = function(e, t, o, i, r) {
                            var n = (1 - e) * (1 - e) * (1 - e) * t.x + 3 * e * (1 - e) * (1 - e) * o.x + 3 * e * e * (1 - e) * i.x + e * e * e * r.x
                              , l = (1 - e) * (1 - e) * (1 - e) * t.y + 3 * e * (1 - e) * (1 - e) * o.y + 3 * e * e * (1 - e) * i.y + e * e * e * r.y;
                            return new a(n,l,0)
                        }(l, o, i, r, n)
                    }
                    ,
                    z(e).to(t, {}, l)
                }
                ,
                e.animateCurve = function(e, t, o) {
                    var i, r = e.position, n = null == o ? void 0 : o.controlPos;
                    if (null == n) {
                        var l = (t.x + r.x) / 2
                          , u = r.y + 500;
                        n = new a(l,u,0)
                    }
                    var s = new a;
                    z(e).to(null != (i = null == o ? void 0 : o.duration) ? i : .3, {
                        position: t
                    }, {
                        onUpdate: function(o, i) {
                            var l, a, u, c, d;
                            l = i,
                            a = r,
                            u = n,
                            c = t,
                            (d = s).x = (1 - l) * (1 - l) * a.x + 2 * l * (1 - l) * u.x + l * l * c.x,
                            d.y = (1 - l) * (1 - l) * a.y + 2 * l * (1 - l) * u.y + l * l * c.y,
                            d.z = (1 - l) * (1 - l) * a.z + 2 * l * (1 - l) * u.z + l * l * c.z,
                            e.setPosition(s)
                        }
                    }).call((function() {
                        null != o && o.callback && o.callback()
                    }
                    )).start()
                }
                ,
                e
            }();
            Nt.animationTag = 202405301419,
            o._RF.pop(),
            o._RF.push({}, "cf96b3mjNJEQ6jN33WIpqAz", "BaseDialog", void 0);
            var gt = u.ccclass
              , ft = u.property
              , bt = (rt = gt("BaseDialog"),
            nt = ft({
                visible: !0,
                displayName: "开启遮罩层触摸控制",
                tooltip: "开启后默认支持设置触摸阻隔"
            }),
            lt = ft({
                displayName: "是否点击遮罩关闭界面",
                visible: function() {
                    return this.haveMaskView
                }
            }),
            at = ft({
                displayName: "自定义透明度(0~1)",
                visible: function() {
                    return this.haveMaskView
                }
            }),
            ut = ft({
                type: G,
                displayName: "开启缩放适配"
            }),
            rt((dt = be((ct = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(i)) || this).isDestroyed = !1,
                    fe(t, "haveMaskView", dt, ye(t)),
                    fe(t, "clickMaskToClose", mt, ye(t)),
                    fe(t, "opacityRatio", pt, ye(t)),
                    fe(t, "isEnableScaleAdapter", ht, ye(t)),
                    t._prefabPath = null,
                    t.dismissCallback = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    e.prototype.start && e.prototype.start.call(this)
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy && e.prototype.onDestroy.call(this),
                    this.isDestroyed = !0
                }
                ,
                i.update = function(e) {}
                ,
                i.onWindowResize = function(e, t) {
                    this.isEnableScaleAdapter && this.adapterSmallScreen(!0)
                }
                ,
                i.adapterSmallScreen = function(e) {
                    void 0 === e && (e = !1);
                    var o = ae.getRatio();
                    o >= 1 && !e || (o > 1 && (o = 1),
                    t.log("dialog ratio = " + o),
                    this.node.scale = new a(o,o,1))
                }
                ,
                i.adapterPad = function() {
                    if (ae.isPad) {
                        var e = ae.padRatio;
                        this.node.scale = new a(e,e,1)
                    }
                }
                ,
                i.on_will_show = function() {
                    this.dismissCallback = null,
                    ne.on(le.windowResize, this.onWindowResize, this),
                    this.isEnableScaleAdapter && (this.adapterSmallScreen(),
                    this.adapterPad())
                }
                ,
                i.on_show = function() {}
                ,
                i.on_hide = function() {
                    ne.off(le.windowResize, this.onWindowResize, this),
                    this.dismissCallback && this.dismissCallback()
                }
                ,
                i.hide = function(e) {
                    var t = this;
                    void 0 === e && (e = !0),
                    vt.hideDialog(this, (function() {
                        t.on_hide()
                    }
                    ), e)
                }
                ,
                i.getMaskTargetOpacity = function() {
                    return 255 * Math.min(this.opacityRatio, 1)
                }
                ,
                i.setMaskViewOpacity = function(e) {
                    var t = this.getMaskView();
                    t && (t.getComponent(D).opacity = e)
                }
                ,
                i.getMaskView = function() {
                    return this.node.getChildByName("MaskView")
                }
                ,
                i.showMaskAnimation = function(e) {
                    if (e != wt.none) {
                        var t = vt.getAnimationDuration();
                        if (this.setMaskViewOpacity(0),
                        e == wt.scale) {
                            Nt.uiOpacityAnimationSample(this.getMaskView(), t - .1, 0, this.getMaskTargetOpacity(), .1)
                        } else
                            e == wt.opacity ? Nt.uiOpacityAnimationSample(this.getMaskView(), t, 0, this.getMaskTargetOpacity(), 0) : this.setMaskViewOpacity(this.getMaskTargetOpacity())
                    } else
                        this.setMaskViewOpacity(this.getMaskTargetOpacity())
                }
                ,
                i.appendMaskView = function(e, t, o) {
                    var i = this;
                    if (this.haveMaskView) {
                        var r = this.getMaskView();
                        if (r)
                            return void (o && o(r));
                        We.loadResourcesPrefab("resources/prefab/common/MaskView", (function(n) {
                            i.node.addChild(n),
                            n.setSiblingIndex(0);
                            var l = n.getComponent(_);
                            l.width = 6 * e,
                            l.height = 6 * t,
                            n.getComponent(D).opacity = i.getMaskTargetOpacity(),
                            i.clickMaskToClose && n.on(T.EventType.TOUCH_END, (function() {
                                i.hide()
                            }
                            )),
                            o && o(r)
                        }
                        ))
                    }
                }
                ,
                de(o, [{
                    key: "prefabPath",
                    get: function() {
                        return this._prefabPath
                    },
                    set: function(e) {
                        this._prefabPath = e
                    }
                }]),
                o
            }(C)).prototype, "haveMaskView", [nt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            mt = be(ct.prototype, "clickMaskToClose", [lt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            pt = be(ct.prototype, "opacityRatio", [at], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .47
                }
            }),
            ht = be(ct.prototype, "isEnableScaleAdapter", [ut], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            st = ct)) || st);
            o._RF.pop(),
            o._RF.push({}, "0d6fbEZaehKKa0K6mg4vkyo", "DialogPop", void 0);
            var wt = function(e) {
                return e[e.none = 0] = "none",
                e[e.scale = 1] = "scale",
                e[e.opacity = 2] = "opacity",
                e
            }({})
              , vt = function() {
                function e() {}
                return e.getAnimationDuration = function(e) {
                    return void 0 === e && (e = !1),
                    e ? this._hideDuration : this._animationDuration
                }
                ,
                e.getDialogSiblingIndex = function() {
                    return e._dialogSiblingIndex++
                }
                ,
                e.showDialog = function(t, o) {
                    for (var i = this, r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++)
                        n[l - 2] = arguments[l];
                    var a = s.getScene().getChildByName("Canvas");
                    if (We.isValid(a)) {
                        var u = encodeURIComponent(t)
                          , c = a.getChildByName(u);
                        if (c) {
                            var d;
                            if (c.active)
                                return;
                            var m = c.getComponent(bt);
                            c.setSiblingIndex(e.getDialogSiblingIndex()),
                            m.on_will_show.apply(m, n);
                            var p = null != (d = null == o ? void 0 : o.popType) ? d : wt.none;
                            this.applyTransitionEffect(c, !0, p, (function() {
                                m.on_show.apply(m, n)
                            }
                            )),
                            m.showMaskAnimation(p)
                        } else
                            We.loadResourcesPrefab(t, (function(r) {
                                var l, s;
                                if (We.isValid(a)) {
                                    r.active = !1,
                                    r.name = u,
                                    a.addChild(r),
                                    r.setSiblingIndex(e.getDialogSiblingIndex()),
                                    null != o && o.parentNode ? o.parentNode.addChild(r) : a.addChild(r);
                                    var c = null != (l = null == o ? void 0 : o.resizeToParent) && l
                                      , d = r.parent.getComponent(_);
                                    if (c) {
                                        var m = r.getComponent(_);
                                        m.width = d.width,
                                        m.height = d.height
                                    }
                                    null != o && o.position && (r.position = o.position),
                                    null != o && o.zIndex && r.setSiblingIndex(o.zIndex);
                                    var p = r.getComponent(bt);
                                    p.on_will_show.apply(p, n);
                                    var h = null != (s = null == o ? void 0 : o.popType) ? s : wt.scale;
                                    i.applyTransitionEffect(r, !0, h, (function() {
                                        p.prefabPath = t,
                                        p.on_show.apply(p, n)
                                    }
                                    )),
                                    p.appendMaskView(d.width, d.height, (function(e) {
                                        p.showMaskAnimation(h)
                                    }
                                    ))
                                }
                            }
                            ))
                    }
                }
                ,
                e.hideDialog = function(t, o, i) {
                    void 0 === o && (o = null),
                    void 0 === i && (i = !0),
                    e.applyTransitionEffect(t.node, !1, i ? wt.opacity : wt.none, (function() {
                        t.node.active = !1,
                        o && o()
                    }
                    ))
                }
                ,
                e.applyTransitionEffect = function(e, t, o, i) {
                    if (o === wt.none) {
                        if (e.active = t,
                        t) {
                            e.scale = new a(1,1,1);
                            var r = e.getComponent(D);
                            r || (r = e.addComponent(D)),
                            r.opacity = 255
                        }
                        i && i()
                    } else if (o === wt.scale) {
                        var n, l;
                        t ? (n = new a(0,0,0),
                        l = new a(1,1,1)) : (n = new a(1,1,1),
                        l = new a(0,0,0)),
                        e.scale = n,
                        e.active = !0;
                        var u = e.getComponent(D);
                        u || (u = e.addComponent(D)),
                        u.opacity = 255,
                        z(e).to(this.getAnimationDuration(t), {
                            scale: l
                        }, {
                            easing: "backOut"
                        }).call((function() {
                            i && i()
                        }
                        )).start()
                    } else if (o === wt.opacity) {
                        var s, c;
                        t ? (s = 0,
                        c = 255) : (s = 255,
                        c = 0);
                        var d = e.getComponent(D);
                        d || (d = e.addComponent(D)),
                        d.opacity = s,
                        e.active = !0,
                        z(d).to(this.getAnimationDuration(t), {
                            opacity: c
                        }).call((function() {
                            i && i()
                        }
                        )).start()
                    }
                }
                ,
                e
            }();
            vt._dialogSiblingIndex = 900,
            vt._animationDuration = .2,
            vt._hideDuration = .1,
            o._RF.pop(),
            o._RF.push({}, "971a0ryPt1GEJT2/NXuCy1D", "DialogHelper", void 0);
            var kt = function(e) {
                return e.CommonDialog = "resources/prefab/CommonDialog",
                e.CollectionsDialog = "resources/prefab/CollectionsDialog",
                e.ToolDialog = "resources/prefab/ToolDialog",
                e.SettingDialog = "resources/prefab/SettingDialog",
                e.ExitDialog = "resources/prefab/ExitDialog",
                e.UnlockPicDialog = "resources/prefab/UnlockPicDialog",
                e.RandomRewardDialog = "resources/prefab/RandomRewardDialog",
                e.ResultDialog = "resources/prefab/ResultDialog",
                e.RankDialog = "resources/prefab/RankDialog",
                e.PicDetailDialog = "resources/prefab/PicDetailDialog",
                e.EggBackpackageDialog = "resources/prefab/EggBackpackageDialog",
                e.RuleDialog = "resources/prefab/RuleDialog",
                e.AvatarDialog = "resources/prefab/AvatarDialog",
                e
            }({})
              , Tt = function() {
                function e() {}
                return e.preloadDialog = function(e) {
                    var o = Qe.getCurrentTimeMs();
                    Ve.loadPrefab(Je.bundleName, e, (function(e, i) {
                        var r = Qe.getCurrentTimeMs();
                        if (t.log("prefab load time: " + (r - o) + "ms"),
                        e)
                            return t.log("prefab load failed, err:" + e.message)
                    }
                    ))
                }
                ,
                e.showFade = function(e, t) {
                    void 0 === t && (t = null);
                    for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++)
                        i[r - 2] = arguments[r];
                    vt.showDialog.apply(vt, [e, {
                        popType: wt.opacity,
                        dismissCb: t
                    }].concat(i))
                }
                ,
                e.showScale = function(e, t) {
                    void 0 === t && (t = null);
                    for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++)
                        i[r - 2] = arguments[r];
                    vt.showDialog.apply(vt, [e, {
                        popType: wt.scale,
                        dismissCb: t
                    }].concat(i))
                }
                ,
                e.showNoAnimation = function(e, t) {
                    void 0 === t && (t = null);
                    for (var o = arguments.length, i = new Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++)
                        i[r - 2] = arguments[r];
                    vt.showDialog.apply(vt, [e, {
                        popType: wt.none,
                        dismissCb: t
                    }].concat(i))
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "b5668VteURHkpRyTqruMvvd", "NavManager", void 0);
            var Ct = function(e) {
                return e.Home = "home",
                e.Game = "game",
                e.PicList = "pic_list",
                e
            }({})
              , _t = function() {
                function e() {}
                return e.init = function() {
                    this.isInited || (this.isInited = !0,
                    this.pushCurrentScene())
                }
                ,
                e.gotoHome = function() {
                    return this.loadScene(Ct.Home)
                }
                ,
                e.gotoGame = function() {
                    return this.loadScene(Ct.Game)
                }
                ,
                e.gotoPicList = function() {
                    return this.loadScene(Ct.PicList)
                }
                ,
                e.registerBack = function(e) {
                    qe.pressBack((function() {
                        t.log("back"),
                        s.getScene().name == e && Tt.showFade(kt.CommonDialog, null, "提示", "确定要退出游戏吗？", "取消", (function() {
                            t.log("onclick cancel")
                        }
                        ), "确定", (function() {
                            qe.wrapperExit("back")
                        }
                        ))
                    }
                    ))
                }
                ,
                e.pushCurrentScene = function() {
                    this.pushScene(s.getScene().name)
                }
                ,
                e.pushScene = function(e) {
                    e ? (t.log("push scene: " + e),
                    this.sceneStack.push(e)) : t.logE("push scene is null: " + e)
                }
                ,
                e.popScene = function() {
                    var e = this.sceneStack.pop();
                    return t.log("pop scene: " + e),
                    e
                }
                ,
                e.getTopScene = function() {
                    return this.sceneStack[this.sceneStack.length - 1]
                }
                ,
                e.loadScene = function(e, o) {
                    return void 0 === o && (o = null),
                    s.loadScene(e, (function(o, i) {
                        o ? t.logE("load scene " + e + " failed: " + o.message) : t.log("load scene " + e + " success")
                    }
                    )) ? (o && o(),
                    this.pushScene(e),
                    !0) : (console.error("load scene " + e + " failed"),
                    !1)
                }
                ,
                e.backScene = function() {
                    var e = this
                      , o = this.getTopScene();
                    return o && s.getScene().name != o ? (t.log("back scene: " + o),
                    this.loadScene(o, (function() {
                        e.popScene()
                    }
                    )),
                    !0) : (s.getScene().name == o && this.popScene(),
                    o = this.getTopScene(),
                    t.log("back scene : " + o),
                    !!o && (this.loadScene(o, (function() {
                        e.popScene()
                    }
                    )),
                    !0))
                }
                ,
                e
            }();
            _t.sceneStack = [],
            _t.isInited = !1,
            o._RF.pop(),
            o._RF.push({}, "123ecDgB7hON6TFsEmqbDNU", "AudioMgr", void 0);
            var St = function() {
                function e() {
                    this._soundSource = void 0,
                    this._audioSource = void 0;
                    var e = new T;
                    e.name = "__audioMgr__";
                    var t = new T;
                    t.name = "__audioMgr_sound__",
                    s.getScene().addChild(e),
                    s.getScene().addChild(t),
                    s.addPersistRootNode(e),
                    s.addPersistRootNode(t),
                    this._audioSource = e.addComponent(O),
                    this._soundSource = t.addComponent(O)
                }
                var o = e.prototype;
                return o.playOneShot = function(e, o) {
                    var i = this;
                    void 0 === o && (o = 2),
                    e instanceof d ? this._soundSource.playOneShot(e, o) : Ve.loadAudio("game_bundle", e, (function(e, r) {
                        e ? t.logE("load audio failed, err:" + e.message) : i._soundSource.playOneShot(r, o)
                    }
                    ))
                }
                ,
                o.getCurSceneName = function() {
                    return s.getScene().name
                }
                ,
                o.isPlaying = function() {
                    return this._audioSource.playing
                }
                ,
                o.play = function(e, o, i) {
                    var r = this;
                    void 0 === o && (o = 1),
                    void 0 === i && (i = !0),
                    this._audioSource.node.name = this.getCurSceneName(),
                    e instanceof d ? (this._audioSource.stop(),
                    this._audioSource.clip = e,
                    this._audioSource.loop = i,
                    this._audioSource.volume = o,
                    this._audioSource.playOnAwake = !1,
                    this._audioSource.play()) : Ve.loadAudio(Je.bundleName, e, (function(e, n) {
                        if (e)
                            t.logE("load audio failed, err: " + e.message);
                        else {
                            if (r._audioSource.node.name != r.getCurSceneName())
                                return;
                            r._audioSource.stop(),
                            r._audioSource.clip = n,
                            r._audioSource.loop = i,
                            r._audioSource.volume = o,
                            r._audioSource.playOnAwake = !1,
                            r._audioSource.play()
                        }
                    }
                    ))
                }
                ,
                o.stop = function() {
                    this._audioSource.stop()
                }
                ,
                o.pause = function() {
                    this._audioSource.pause()
                }
                ,
                o.resume = function() {
                    this._audioSource.play()
                }
                ,
                de(e, [{
                    key: "audioSource",
                    get: function() {
                        return this._audioSource
                    }
                }], [{
                    key: "inst",
                    get: function() {
                        return null == this._inst && (this._inst = new e),
                        this._inst
                    }
                }]),
                e
            }();
            St.musicVolume = .2,
            St._inst = void 0,
            o._RF.pop(),
            o._RF.push({}, "62ed0Bd6qRM/JqYeyR22lid", "BackgroundPlayer", void 0);
            var Rt = function() {
                function e() {
                    this._audioSource = void 0;
                    var e = new T;
                    e.name = "__BackgroundPlayer__",
                    s.getScene().addChild(e),
                    s.addPersistRootNode(e),
                    this._audioSource = e.addComponent(O)
                }
                var t = e.prototype;
                return t.play = function(e, t) {
                    var o = this;
                    void 0 === t && (t = 1),
                    e instanceof d ? this.start(e, t) : y.load(e, (function(e, i) {
                        e ? console.log(e) : o.start(i, t)
                    }
                    ))
                }
                ,
                t.start = function(e, t) {
                    void 0 === t && (t = 1),
                    this._audioSource.stop(),
                    this._audioSource.clip = e,
                    this._audioSource.loop = !0,
                    this._audioSource.play(),
                    this.audioSource.volume = t
                }
                ,
                t.stop = function() {
                    this._audioSource.stop()
                }
                ,
                t.pause = function() {
                    this._audioSource.pause()
                }
                ,
                t.resume = function() {
                    this._audioSource.play()
                }
                ,
                de(e, [{
                    key: "audioSource",
                    get: function() {
                        return this._audioSource
                    }
                }], [{
                    key: "inst",
                    get: function() {
                        return null == this._inst && (this._inst = new e),
                        this._inst
                    }
                }]),
                e
            }();
            Rt._inst = void 0,
            o._RF.pop(),
            o._RF.push({}, "f6b66+arDBMK5Fbd5KGuoJx", "FormatUtils", void 0);
            var Bt, It, Pt, Ft, Et, Mt = function() {
                function e() {}
                return e.formatTimeStamp = function(e, t) {
                    void 0 === t && (t = "YYYY-MM-DD HH:mm:ss");
                    var o, i = t, r = {
                        "M+": (o = e instanceof Date ? e : isNaN(e) ? new Date(e) : new Date(10 === e.toString().length ? 1e3 * Number(e) : e)).getMonth() + 1,
                        "D+": o.getDate(),
                        "H+": o.getHours(),
                        "h+": o.getHours() % 12,
                        "m+": o.getMinutes(),
                        "s+": o.getSeconds(),
                        "q+": Math.floor((o.getMonth() + 3) / 3),
                        S: o.getMilliseconds()
                    };
                    i = i.replace(/y+/i, (function(e) {
                        return o.getFullYear().toString().substr(4 - e.length)
                    }
                    ));
                    var n = function() {
                        var e = r[l];
                        i = i.replace(new RegExp(l), (function(t) {
                            return 1 === t.length ? e : ("00" + e).substr(e.toString().length)
                        }
                        ))
                    };
                    for (var l in r)
                        n();
                    return i
                }
                ,
                e.shortNumber = function(e, t, o, i, r) {
                    return void 0 === t && (t = 1e4),
                    void 0 === o && (o = 1e4),
                    void 0 === i && (i = 1),
                    void 0 === r && (r = "w"),
                    e < t ? "" + e : "" + (e / o).toFixed(i) + r
                }
                ,
                e.twoDigits = function(e) {
                    return e >= 10 ? "" + e : "0" + e
                }
                ,
                e.timeFormat = function(e) {
                    var t = Math.round((e - 1800) / 3600)
                      , o = Math.round((e - 30) / 60) % 60
                      , i = e % 60;
                    return this.twoDigits(t) + ":" + this.twoDigits(o) + ":" + this.twoDigits(i)
                }
                ,
                e.timeFormat2 = function(e) {
                    var t = Math.round((e - 30) / 60) % 60
                      , o = Math.round(e % 60);
                    return this.twoDigits(t) + ":" + this.twoDigits(o)
                }
                ,
                e.timeFormat3 = function(e) {
                    return Math.round((e - 30) / 60) % 60 + "min"
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "bc16a0936FDlrC7XjxT2pQY", "PhysicsHelper", void 0),
            o._RF.pop(),
            o._RF.push({}, "2253aHaRdJBqqloTxgdtTBv", "RectMask", void 0);
            var Dt = u.ccclass
              , Lt = u.property
              , At = u.executeInEditMode
              , xt = .5522847493;
            Bt = At(!0),
            It = Lt({
                displayName: "圆角弧度",
                type: H,
                tooltip: "不规则矩形每个角的弧度\n（4：左上顺时针方向）\n（2：左上下，右上下）\n（0：四个角一致）"
            }),
            Dt(Pt = Bt((Et = be((Ft = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "rectRadius", Et, ye(t)),
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.onLoad = function() {}
                ,
                o.start = function() {
                    var e = this.node.getComponent(U);
                    e || (e = this.node.addComponent(U)),
                    e && (e.type = U.Type.GRAPHICS_RECT),
                    this.draw()
                }
                ,
                o.onEnable = function() {
                    var e = this.node.getComponent(V)
                      , t = this.node.getComponent(U);
                    t || (t = this.node.addComponent(U)),
                    t && (t.type = U.Type.GRAPHICS_RECT),
                    e && e.updateAlignment(),
                    s.on(B.EVENT_AFTER_UPDATE, this.draw, this),
                    this.node.on(T.EventType.TRANSFORM_CHANGED, this.draw, this),
                    this.node.on(T.EventType.SIZE_CHANGED, this.draw, this),
                    this.node.on(T.EventType.ANCHOR_CHANGED, this.draw, this)
                }
                ,
                o.onDisable = function() {
                    s.off(B.EVENT_AFTER_UPDATE, this.draw, this),
                    this.node.off(T.EventType.TRANSFORM_CHANGED, this.draw, this),
                    this.node.off(T.EventType.SIZE_CHANGED, this.draw, this),
                    this.node.off(T.EventType.ANCHOR_CHANGED, this.draw, this)
                }
                ,
                o.draw = function() {
                    var e = this.node.getComponent(U).getComponent(W);
                    e.clear();
                    var t = this.node.getComponent(_);
                    this.irregularRect(e, t.width / 2 * -1, t.height / 2 * -1, t.width, t.height, this.rectRadius),
                    P.renderType === F.RENDER_TYPE_CANVAS ? e.stroke() : e.fill()
                }
                ,
                o.irregularRect = function(e, t, o, i, r, n) {
                    if (n < .1)
                        e.rect(t, o, i, r);
                    else {
                        var l = 0
                          , a = 0
                          , u = 0
                          , s = 0
                          , c = 0
                          , d = 0
                          , m = 0
                          , p = 0;
                        if (1 == n.length)
                            l = u = c = m = Math.min(n[0], .5 * Math.abs(i)) * Math.sign(i),
                            a = s = d = p = Math.min(n[0], .5 * Math.abs(r)) * Math.sign(r);
                        else if (2 == n.length)
                            l = m = Math.min(n[0], .5 * Math.abs(i)) * Math.sign(i),
                            u = c = Math.min(n[1], .5 * Math.abs(i)) * Math.sign(i),
                            a = p = Math.min(n[0], .5 * Math.abs(r)) * Math.sign(r),
                            s = d = Math.min(n[1], .5 * Math.abs(r)) * Math.sign(r);
                        else {
                            if (4 != n.length)
                                return void console.log("圆角弧度数组参数错误！");
                            l = Math.min(n[0], .5 * Math.abs(i)) * Math.sign(i),
                            a = Math.min(n[0], .5 * Math.abs(r)) * Math.sign(r),
                            u = Math.min(n[1], .5 * Math.abs(i)) * Math.sign(i),
                            s = Math.min(n[1], .5 * Math.abs(r)) * Math.sign(r),
                            c = Math.min(n[2], .5 * Math.abs(i)) * Math.sign(i),
                            d = Math.min(n[2], .5 * Math.abs(r)) * Math.sign(r),
                            m = Math.min(n[3], .5 * Math.abs(i)) * Math.sign(i),
                            p = Math.min(n[3], .5 * Math.abs(r)) * Math.sign(r)
                        }
                        e.moveTo(t, o + a),
                        e.lineTo(t, o + r - a),
                        e.bezierCurveTo(t, o + r - a * (1 - xt), t + l * (1 - xt), o + r, t + l, o + r),
                        e.lineTo(t + i - u, o + r),
                        e.bezierCurveTo(t + i - u * (1 - xt), o + r, t + i, o + r - s * (1 - xt), t + i, o + r - s),
                        e.lineTo(t + i, o + d),
                        e.bezierCurveTo(t + i, o + d * (1 - xt), t + i - c * (1 - xt), o, t + i - c, o),
                        e.lineTo(t + m, o),
                        e.bezierCurveTo(t + m * (1 - xt), o, t, o + p * (1 - xt), t, o + p),
                        e.close()
                    }
                }
                ,
                t
            }(C)).prototype, "rectRadius", [It], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Pt = Ft)) || Pt);
            o._RF.pop(),
            o._RF.push({}, "91b605pMnlDspkYR9iYsB6o", "BaseComponent", void 0);
            var zt, Gt, Ot, Ht, Ut, Vt, Wt = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(i)) || this).animationTag = t.getCurrentTimeMs(),
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.getCurrentTimeMs = function() {
                    return (new Date).getTime()
                }
                ,
                i.onLoad = function() {
                    e.prototype.onLoad && e.prototype.onLoad.call(this),
                    this.animationTag = this.getCurrentTimeMs()
                }
                ,
                i.start = function() {
                    e.prototype.start && e.prototype.start.call(this)
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy && e.prototype.onDestroy.call(this),
                    x.stopAllByTag(this.animationTag)
                }
                ,
                i.getWorldPos = function(e) {
                    return e && e.parent ? e.parent.getComponent(_).convertToWorldSpaceAR(e.getPosition()) : (t.log("getWorldPos node or node parent is null"),
                    new a(0,0,0))
                }
                ,
                i.convertWorldPos2LocalPos = function(e, t) {
                    return e.getComponent(_).convertToNodeSpaceAR(t)
                }
                ,
                o
            }(C);
            o._RF.pop(),
            o._RF.push({}, "60dd077RY1KMLxvo4suDG7B", "LoadingView", void 0);
            var qt, jt, Jt, Xt, Zt, Yt, Kt, Qt = u.ccclass, $t = u.property, eo = (zt = Qt("LoadingView"),
            Gt = $t(T),
            zt(((Vt = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "clickBgNode", Ut, ye(t)),
                    t
                }
                return pe(o, e),
                o.preloadLoadingPrefab = function() {
                    Ve.loadPrefab(Je.bundleName, this.prefabPath, (function(e, o) {
                        e ? t.logE("preloadLoadingPrefab load prefab error: " + e.message) : o ? t.log("preloadLoadingPrefab success") : t.logE("preloadLoadingPrefab prefab is null")
                    }
                    ))
                }
                ,
                o.hide = function(e) {
                    void 0 === e && (e = null);
                    var o = s.getScene();
                    if (o) {
                        var i = e || o.getChildByName("Canvas");
                        if (i) {
                            var r = i.getChildByName("LoadingView");
                            r && (r.active = !1)
                        } else
                            t.logE("LoadingView hide canvas is null")
                    } else
                        t.logE("LoadingView hide scene is null")
                }
                ,
                o.show = function(e, i, r) {
                    void 0 === e && (e = !1),
                    void 0 === i && (i = null),
                    void 0 === r && (r = null);
                    var n = s.getScene();
                    if (n) {
                        var l = i || n.getChildByName("Canvas");
                        if (l) {
                            var a = l.getChildByName("LoadingView");
                            if (a) {
                                a.active = !0,
                                a.setSiblingIndex(3e3);
                                var u = a.getComponent(o);
                                u && (u.clickBgNode.active = e)
                            } else
                                this.createLoading((function(o, i) {
                                    t.log("showLoading createLoading callback"),
                                    !r || r() ? o ? t.logE("LoadingView show createLoading error: " + o.message) : We.isValid(l) && (i.clickBgNode.active = e,
                                    l.addChild(i.node),
                                    i.node.setSiblingIndex(3e3)) : t.log("showLoading createLoading callback canShow = false")
                                }
                                ))
                        } else
                            t.logE("LoadingView show canvas is null")
                    } else
                        t.logE("LoadingView show scene is null")
                }
                ,
                o.createLoading = function(e) {
                    Ve.loadPrefab(Je.bundleName, this.prefabPath, (function(i, r) {
                        if (i)
                            return t.logE("LoadingView createLoading load prefab error: " + i.message),
                            void e(i, null);
                        if (r) {
                            var n = b(r).getComponent(o);
                            e(null, n)
                        }
                    }
                    ))
                }
                ,
                o
            }(C)).prefabPath = "resources/prefab/common/LoadingView",
            Ut = be((Ht = Vt).prototype, "clickBgNode", [Gt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ot = Ht)) || Ot);
            o._RF.pop(),
            o._RF.push({}, "f5420d3ILROmqdLNRqAbg5b", "BaseScene", void 0);
            var to, oo, io, ro, no, lo, ao, uo, so = u.ccclass, co = u.property, mo = (qt = so("BaseScene"),
            jt = co(T),
            Jt = co(G),
            qt((Yt = be((Zt = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "bgNode", Yt, ye(t)),
                    fe(t, "isAdjustBg", Kt, ye(t)),
                    t.loadingTimeHandler = null,
                    t.isShowLoading = !1,
                    t.showLoadingCount = 0,
                    t.appchange = {
                        callback: t.onAppChange,
                        target: ye(t)
                    },
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.showLoading = function(e) {
                    var t = this;
                    void 0 === e && (e = 0),
                    this.hideLoading(),
                    this.showLoadingCount++,
                    this.loadingTimeHandler = setTimeout((function() {
                        t.loadingTimeHandler = null,
                        We.isValid(t.node) && (eo.show(!1, t.node, (function() {
                            return t.showLoadingCount > 0
                        }
                        )),
                        t.isShowLoading = !0)
                    }
                    ), e)
                }
                ,
                i.hideLoading = function() {
                    this.showLoadingCount--,
                    this.showLoadingCount < 0 && (this.showLoadingCount = 0),
                    null != this.loadingTimeHandler && clearTimeout(this.loadingTimeHandler),
                    this.isShowLoading && eo.hide(),
                    this.isShowLoading = !1
                }
                ,
                i.isCommonBgm = function() {
                    return !0
                }
                ,
                i.initSomething = function() {
                    eo.preloadLoadingPrefab(),
                    Je.initSomething(),
                    this.isCommonBgm() && Ze.inst.musicOn && (St.inst.isPlaying() || St.inst.play("resources/audio/game_music", St.musicVolume))
                }
                ,
                i.onLoad = function() {
                    e.prototype.onLoad.call(this),
                    this.isAdjustBg && this.adjustBg()
                }
                ,
                i.start = function() {
                    e.prototype.start.call(this),
                    ne.on(le.GameMusicOnChanged, this.onGameMusicOnChanged, this),
                    ne.on(le.windowResize, this.onWindowResize, this),
                    Qe.addAppChangeEvent(this.appchange),
                    this.initSomething(),
                    _t.init(),
                    ae.init()
                }
                ,
                i.onDestroy = function() {
                    this.hideLoading(),
                    Qe.removeAppChangeEvent(this.appchange),
                    e.prototype.onDestroy.call(this),
                    ne.off(le.GameMusicOnChanged, this.onGameMusicOnChanged, this),
                    ne.off(le.windowResize, this.onWindowResize, this)
                }
                ,
                i.onWindowResize = function(e, t) {}
                ,
                i.onGameMusicOnChanged = function(e) {
                    e ? St.inst.play("resources/audio/game_music", St.musicVolume) : St.inst.stop()
                }
                ,
                i.adjustBg = function() {
                    if (this.bgNode) {
                        var e = this.node.getComponent(_)
                          , o = e.height
                          , i = e.width
                          , r = this.bgNode.getComponent(_)
                          , n = r.height;
                        if (t.log("width: " + i + ", height: " + o + ", bgWidth: " + r.width + ", bgHeight: " + n),
                        !(o <= n)) {
                            n = o,
                            r.height = n,
                            r.setContentSize(r.width, n);
                            var l = this.bgNode.getComponent(V);
                            l && (t.log("bgWidget top = " + l.top),
                            l.updateAlignment())
                        }
                    } else
                        t.error("bgNode is null")
                }
                ,
                i.update = function(e) {}
                ,
                i.onAppChange = function() {
                    this.adapterMusic()
                }
                ,
                i.adapterMusic = function() {
                    var e = this;
                    if (!qe.isAndroid()) {
                        if (Qe.isBackground)
                            return t.log("onAppChange, stop music"),
                            void St.inst.stop();
                        t.log("onAppChange, play music"),
                        setTimeout((function() {
                            We.isValid(e.node) && (t.log("onAppChange, play music"),
                            Ze.inst.musicOn && St.inst.play("resources/audio/game_music", St.musicVolume))
                        }
                        ), 200)
                    }
                }
                ,
                o
            }(Wt)).prototype, "bgNode", [jt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Kt = be(Zt.prototype, "isAdjustBg", [Jt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            Xt = Zt)) || Xt);
            o._RF.pop(),
            o._RF.push({}, "ebb84ndP8RLP5jkyFS2prln", "FramesDisplayer", void 0);
            var po, ho, yo, No, go, fo, bo, wo, vo = u.ccclass, ko = u.property, To = (to = ko([h]),
            vo((ro = be((io = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "autoPlay", ro, ye(t)),
                    fe(t, "repeat", no, ye(t)),
                    fe(t, "repeatCount", lo, ye(t)),
                    fe(t, "stepTime", ao, ye(t)),
                    fe(t, "spriteFrames", uo, ye(t)),
                    t.sprite = void 0,
                    t.canPlay = !1,
                    t.reachedEnd = !1,
                    t.currentIndex = 0,
                    t.dtRecord = 0,
                    t._finishedCallback = null,
                    t._repeatCounter = 0,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.onEnable = function() {
                    this.checkInit()
                }
                ,
                o.checkInit = function() {
                    null == this.sprite && (this.sprite = this.node.getComponent(v),
                    null == this.sprite && (this.sprite = this.node.addComponent(v)),
                    this.sprite.trim = !1,
                    this.canPlay = this.autoPlay)
                }
                ,
                o.update = function(e) {
                    if (this.node.active && this.canPlay && !this.reachedEnd && this.spriteFrames.length > 1) {
                        var t = this.frameIndexForTime(e);
                        if (t != this.currentIndex) {
                            if (this.currentIndex = t,
                            this.isAnimationFinished(e)) {
                                if (!this.repeat || !(0 == this.repeatCount || this._repeatCounter < this.repeatCount - 1))
                                    return this.reachedEnd = !0,
                                    this.clear(),
                                    void (null != this._finishedCallback && this._finishedCallback());
                                this.currentIndex = 0,
                                this._repeatCounter++
                            }
                            null != this.sprite && (this.sprite.spriteFrame = this.spriteFrames[this.currentIndex])
                        }
                    }
                }
                ,
                o.reset = function() {
                    this.reachedEnd = !1,
                    this.currentIndex = 0,
                    this._repeatCounter = 0
                }
                ,
                o.play = function(e) {
                    void 0 === e && (e = null),
                    this.playing || this.forcePlay(e)
                }
                ,
                o.forcePlay = function(e) {
                    void 0 === e && (e = null),
                    this._finishedCallback = e,
                    this.checkInit(),
                    this.node.active = !0,
                    this.canPlay = !0,
                    this.reset()
                }
                ,
                o.stop = function() {
                    this.canPlay = !1
                }
                ,
                o.stopAt = function(e) {
                    e < this.spriteFrames.length && (this.node.active = !0,
                    this.canPlay = !1,
                    this.currentIndex = e,
                    this.sprite.spriteFrame = this.spriteFrames[this.currentIndex])
                }
                ,
                o.stopAtFirstFrame = function() {
                    this.stopAt(0)
                }
                ,
                o.stopAtLastFrame = function() {
                    this.stopAt(this.spriteFrames.length - 1)
                }
                ,
                o.clear = function(e) {
                    var t = this;
                    if (void 0 === e && (e = !1),
                    this.node.active) {
                        if (e) {
                            var o = this.node.getComponent(D);
                            if (o)
                                return void z(o).to(.3, {
                                    opacity: 0
                                }).call((function() {
                                    t.canPlay = !1,
                                    t.sprite.spriteFrame = null,
                                    o.opacity = 255,
                                    t.node.active = !1
                                }
                                )).start()
                        }
                        this.canPlay = !1,
                        this.sprite.spriteFrame = null,
                        this.node.active = !1
                    }
                }
                ,
                o.resume = function() {
                    this.canPlay = !0
                }
                ,
                o.frameIndexForTime = function(e) {
                    return this.dtRecord += e,
                    this.dtRecord >= this.stepTime ? (this.dtRecord = 0,
                    this.currentIndex + 1) : this.currentIndex
                }
                ,
                o.isAnimationFinished = function(e) {
                    return this.currentIndex >= this.spriteFrames.length
                }
                ,
                de(t, [{
                    key: "playing",
                    get: function() {
                        return this.canPlay && 0 == this.reachedEnd
                    }
                }]),
                t
            }(C)).prototype, "autoPlay", [ko], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            no = be(io.prototype, "repeat", [ko], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !0
                }
            }),
            lo = be(io.prototype, "repeatCount", [ko], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            ao = be(io.prototype, "stepTime", [ko], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .04
                }
            }),
            uo = be(io.prototype, "spriteFrames", [to], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            oo = io)) || oo);
            o._RF.pop(),
            o._RF.push({}, "3feeawUa+hHDoo9MOHzE1Gc", "IncreasingLabel", void 0);
            var Co, _o, So, Ro, Bo, Io, Po, Fo, Eo, Mo = u.ccclass, Do = u.property;
            po = Mo("IncreasingLabel"),
            ho = Do(w),
            po((go = be((No = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "textFormatter", go, ye(t)),
                    fe(t, "increasStep", fo, ye(t)),
                    fe(t, "interval", bo, ye(t)),
                    fe(t, "textLabel", wo, ye(t)),
                    t.targetNumber = null,
                    t.currentNumber = 100,
                    t.startInterval = void 0,
                    t.finished = null,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.update = function(e) {
                    if (null != this.targetNumber) {
                        var t = Date.now();
                        t - this.startInterval >= 1e3 * this.interval && (this.startInterval = t,
                        this.targetNumber != this.currentNumber ? (this.currentNumber += this.increasStep,
                        this.increasStep > 0 ? this.currentNumber > this.targetNumber && (this.currentNumber = this.targetNumber) : this.currentNumber < this.targetNumber && (this.currentNumber = this.targetNumber),
                        this.updateText(),
                        this.checkFinished()) : this.checkFinished())
                    }
                }
                ,
                o.updateText = function() {
                    this.textLabel.string = this.textFormatter.replace("%d", this.currentNumber.toString())
                }
                ,
                o.checkFinished = function() {
                    this.targetNumber == this.currentNumber && (this.targetNumber = null,
                    null != this.finished && this.finished())
                }
                ,
                o.fillOrigin = function(e) {
                    this.currentNumber = e,
                    this.updateText()
                }
                ,
                o.animateTarget = function(e, t) {
                    null != t && t.increasStep && (this.increasStep = t.increasStep),
                    null != t && t.interval && (this.interval = t.interval),
                    null != t && t.textFormatter && (this.textFormatter = t.textFormatter),
                    this.startInterval = Date.now(),
                    this.targetNumber = e
                }
                ,
                o.stop = function() {
                    this.targetNumber = null
                }
                ,
                o.getCurrentNumber = function() {
                    return this.currentNumber
                }
                ,
                o.onDestroy = function() {
                    this.targetNumber = null
                }
                ,
                t
            }(C)).prototype, "textFormatter", [Do], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "X%d"
                }
            }),
            fo = be(No.prototype, "increasStep", [Do], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 10
                }
            }),
            bo = be(No.prototype, "interval", [Do], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .01
                }
            }),
            wo = be(No.prototype, "textLabel", [ho], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            yo = No));
            o._RF.pop(),
            o._RF.push({}, "d86b3MUSD1AKbQrWNollJIv", "ListView", void 0);
            var Lo, Ao, xo, zo, Go, Oo, Ho, Uo = u.ccclass, Vo = u.property;
            Co = Uo("Listview"),
            _o = Vo(c),
            So = Vo(q),
            Co((Io = be((Bo = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(i)) || this).logTag = "ListView",
                    fe(t, "itemTemplate", Io, ye(t)),
                    fe(t, "scrollView", Po, ye(t)),
                    fe(t, "spacing", Fo, ye(t)),
                    fe(t, "spawnCount", Eo, ye(t)),
                    t.horizontal = !1,
                    t.content = null,
                    t.adapter = null,
                    t._items = new j,
                    t._filledIds = {},
                    t._itemHeight = 1,
                    t._itemWidth = 1,
                    t._itemsVisible = 1,
                    t.lastStartIndex = -1,
                    t.scrollTopNotifyed = !1,
                    t.scrollBottomNotifyed = !1,
                    t.pullDownCallback = null,
                    t.pullUpCallback = null,
                    t.initialize = !1,
                    t.footerHeight = 0,
                    t.scrollTimeoutHander = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.onLoad = function() {
                    this.init()
                }
                ,
                i.start = function() {}
                ,
                i.onDestroy = function() {
                    this.clearScrollTimer()
                }
                ,
                i.clearScrollTimer = function() {
                    this.scrollTimeoutHander && (clearTimeout(this.scrollTimeoutHander),
                    this.scrollTimeoutHander = null)
                }
                ,
                i.scrollToPositionAsync = function(e, t) {
                    var o = this;
                    void 0 === t && (t = 0),
                    this.clearScrollTimer(),
                    this.scrollTimeoutHander = setTimeout((function() {
                        o.scrollToPosInner(e, t)
                    }
                    ), 16)
                }
                ,
                i.scrollToPosInner = function(e, o) {
                    void 0 === o && (o = 0);
                    var i = this.scrollView.content.children.length;
                    if (i <= 0)
                        t.log(this.logTag, "child length = " + i);
                    else {
                        var r = e / i;
                        t.log(this.logTag, "scrollToPosition pos = " + e + ", percent = " + r),
                        this._itemHeight > 10 && this.scrollView.scrollToOffset(new E(0,e * this._itemHeight), o)
                    }
                }
                ,
                i.update = function(e) {
                    var t = this.checkNeedUpdate();
                    t >= 0 && this.updateView(t)
                }
                ,
                i.init = function() {
                    this.initialize || (this.initView(),
                    this.addEvent(),
                    this.initialize = !0)
                }
                ,
                i.initView = function() {
                    if (this.scrollView) {
                        this.content = this.scrollView.content,
                        this.horizontal = this.scrollView.horizontal;
                        var e = this.content.getParent().getComponent(_);
                        this.horizontal ? (this.scrollView.vertical = !1,
                        this.content.getComponent(_).anchorX = 0,
                        this.content.getComponent(_).anchorY = e.anchorY,
                        this.content.position = new a(0 - e.width * e.anchorX,0,0)) : (this.scrollView.vertical = !0,
                        this.content.getComponent(_).anchorX = e.anchorX,
                        this.content.getComponent(_).anchorY = 1,
                        this.content.position = new a(0,e.height * e.anchorY,0))
                    }
                    var o = this._items.get() || b(this.itemTemplate);
                    this._items.put(o),
                    this._itemHeight = o.getComponent(_).height || 10,
                    this._itemWidth = o.getComponent(_).width || 10,
                    this.horizontal ? this._itemsVisible = Math.ceil(this.content.getParent().getComponent(_).width / this._itemWidth) : this._itemsVisible = Math.ceil(this.content.getParent().getComponent(_).height / this._itemHeight),
                    t.log("item height = " + this._itemHeight)
                }
                ,
                i.setAdapter = function() {
                    var e, t = (e = ue().mark((function e(t) {
                        return ue().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.adapter !== t) {
                                        e.next = 3;
                                        break
                                    }
                                    return this.notifyUpdate(),
                                    e.abrupt("return");
                                case 3:
                                    if (this.adapter = t,
                                    null != this.adapter) {
                                        e.next = 7;
                                        break
                                    }
                                    return console.error("adapter 为空."),
                                    e.abrupt("return");
                                case 7:
                                    if (null != this.itemTemplate) {
                                        e.next = 10;
                                        break
                                    }
                                    return console.error("Listview 未设置待显示的Item模板."),
                                    e.abrupt("return");
                                case 10:
                                    this.notifyUpdate();
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )),
                    function() {
                        var t = this
                          , o = arguments;
                        return new Promise((function(i, r) {
                            var n = e.apply(t, o);
                            function l(e) {
                                se(n, i, r, l, a, "next", e)
                            }
                            function a(e) {
                                se(n, i, r, l, a, "throw", e)
                            }
                            l(void 0)
                        }
                        ))
                    }
                    );
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                i.getItemIndex = function(e) {
                    return Math.floor(Math.abs(e / (this._itemHeight + this.spacing)))
                }
                ,
                i.getPositionInView = function(e) {
                    var t = e.getParent().getComponent(_).convertToWorldSpaceAR(e.position);
                    return this.scrollView.node.getComponent(_).convertToNodeSpaceAR(t)
                }
                ,
                i.notifyUpdate = function(e) {
                    var t = this;
                    null != this.adapter ? null != this.content ? (e && e.length > 0 ? e.forEach((function(e) {
                        t._filledIds.hasOwnProperty(e) && delete t._filledIds[e]
                    }
                    )) : Object.keys(this._filledIds).forEach((function(e) {
                        delete t._filledIds[e]
                    }
                    )),
                    this.recycleAll(),
                    this.lastStartIndex = -1,
                    this.horizontal ? this.content.getComponent(_).width = this.adapter.getCount() * (this._itemWidth + this.spacing) + this.spacing : this.content.getComponent(_).height = this.adapter.getCount() * (this._itemHeight + this.spacing) + this.spacing + this.footerHeight,
                    this.scrollView.scrollToTop()) : console.log("notifyUpdate", "this.content is null") : console.log("notifyUpdate", "this.adapter is null")
                }
                ,
                i.scrollToTop = function(e) {
                    void 0 === e && (e = !1),
                    this.scrollView.scrollToTop(e ? 1 : 0)
                }
                ,
                i.scrollToBottom = function(e) {
                    void 0 === e && (e = !1),
                    this.scrollView.scrollToBottom(e ? 1 : 0)
                }
                ,
                i.scrollToLeft = function(e) {
                    void 0 === e && (e = !1),
                    this.scrollView.scrollToLeft(e ? 1 : 0)
                }
                ,
                i.scrollToRight = function(e) {
                    void 0 === e && (e = !1),
                    this.scrollView.scrollToRight(e ? 1 : 0)
                }
                ,
                i.pullDown = function(e, t) {
                    this.pullDownCallback = e.bind(t)
                }
                ,
                i.pullUp = function(e, t) {
                    this.pullUpCallback = e.bind(t)
                }
                ,
                i._layoutVertical = function(e, t) {
                    this.content.addChild(e),
                    e._tag = t,
                    this._filledIds[t] = t,
                    e.setPosition(0, -e.getComponent(_).height * (.5 + t) - this.spacing * (t + 1))
                }
                ,
                i._layoutHorizontal = function(e, t) {
                    this.content.addChild(e),
                    e._tag = t,
                    this._filledIds[t] = t,
                    e.setPosition(e.getComponent(_).width * (e.getComponent(_).anchorX + t) + this.spacing * t, 0)
                }
                ,
                i.getRecycleItems = function(e, t) {
                    var o = this
                      , i = this.content.children
                      , r = [];
                    return i.forEach((function(i) {
                        (i._tag < e || i._tag > t) && (r.push(i),
                        delete o._filledIds[i._tag])
                    }
                    )),
                    r
                }
                ,
                i.recycleAll = function() {
                    var e = this
                      , t = this.content.children;
                    null != t && null != t && (this.content.removeAllChildren(),
                    t.forEach((function(t) {
                        e._items.put(t)
                    }
                    )))
                }
                ,
                i.updateView = function(e) {
                    var t = this
                      , o = e
                      , i = o + this._itemsVisible + (this.spawnCount || 2)
                      , r = this.adapter.getCount();
                    if (!(o >= r)) {
                        i > r ? (i = r,
                        o > 0 && !this.scrollBottomNotifyed && (this.notifyScrollToBottom(),
                        this.scrollBottomNotifyed = !0)) : this.scrollBottomNotifyed = !1,
                        this.getRecycleItems(o - (this.spawnCount || 2), i).forEach((function(e) {
                            t._items.put(e)
                        }
                        ));
                        for (var n, l = ge(this.findUpdateIndex(o, i)); !(n = l()).done; ) {
                            var a = n.value
                              , u = this.adapter._getView(this._items.get() || b(this.itemTemplate), a);
                            this.horizontal ? this._layoutHorizontal(u, a) : this._layoutVertical(u, a)
                        }
                    }
                }
                ,
                i.checkNeedUpdate = function() {
                    if (null == this.adapter)
                        return -1;
                    var e = this.horizontal ? -this.content.position.x - this.content.getParent().getComponent(_).width * this.content.getParent().getComponent(_).anchorX : this.content.position.y - this.content.getParent().getComponent(_).height * this.content.getParent().getComponent(_).anchorY
                      , t = Math.floor(e / ((this.horizontal ? this._itemWidth : this._itemHeight) + this.spacing));
                    return t < 0 && !this.scrollTopNotifyed ? (this.notifyScrollToTop(),
                    this.scrollTopNotifyed = !0,
                    t) : (t > 0 && (this.scrollTopNotifyed = !1),
                    this.lastStartIndex != t ? (this.lastStartIndex = t,
                    t) : -1)
                }
                ,
                i.findUpdateIndex = function(e, t) {
                    for (var o = [], i = e; i < t; i++)
                        this._filledIds.hasOwnProperty(i) || o.push(i);
                    return o
                }
                ,
                i.notifyScrollToTop = function() {
                    !this.adapter || this.adapter.getCount() <= 0 || this.pullDownCallback && this.pullDownCallback()
                }
                ,
                i.notifyScrollToBottom = function() {
                    !this.adapter || this.adapter.getCount() <= 0 || this.pullUpCallback && this.pullUpCallback()
                }
                ,
                i.addEvent = function() {
                    var e = this;
                    this.content.on(this.isMobile() ? T.EventType.TOUCH_END : T.EventType.MOUSE_UP, (function() {
                        e.scrollTopNotifyed = !1,
                        e.scrollBottomNotifyed = !1
                    }
                    ), this),
                    this.content.on(this.isMobile() ? T.EventType.TOUCH_CANCEL : T.EventType.MOUSE_LEAVE, (function() {
                        e.scrollTopNotifyed = !1,
                        e.scrollBottomNotifyed = !1
                    }
                    ), this)
                }
                ,
                i.isMobile = function() {
                    return l.isMobile
                }
                ,
                o
            }(C)).prototype, "itemTemplate", [_o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Po = be(Bo.prototype, "scrollView", [So], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Fo = be(Bo.prototype, "spacing", [Vo], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 1
                }
            }),
            Eo = be(Bo.prototype, "spawnCount", [Vo], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 2
                }
            }),
            Ro = Bo));
            o._RF.pop(),
            o._RF.push({}, "1d6efZ+IcRHwoaXauZjzl5p", "LongPressDetector", void 0);
            var Wo, qo, jo, Jo, Xo, Zo, Yo, Ko = u.ccclass, Qo = u.property;
            Lo = Ko("LongPressDetector"),
            Ao = Qo(N),
            Lo((Go = be((zo = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "button", Go, ye(t)),
                    fe(t, "longPressInterval", Oo, ye(t)),
                    fe(t, "longPressCallbackRepeat", Ho, ye(t)),
                    t.touchStartInterval = void 0,
                    t.longPressCallback = null,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.button.node.on(T.EventType.TOUCH_START, this.touchStart, this),
                    this.button.node.on(T.EventType.TOUCH_END, this.touchEnd, this),
                    this.button.node.on(T.EventType.TOUCH_CANCEL, this.touchEnd, this),
                    this.button.node.on(T.EventType.MOUSE_LEAVE, this.touchEnd, this)
                }
                ,
                o.update = function(e) {
                    this.touchHold()
                }
                ,
                o.touchStart = function() {
                    this.button.interactable && (this.touchStartInterval = Date.now())
                }
                ,
                o.touchEnd = function() {
                    this.touchStartInterval = null
                }
                ,
                o.touchHold = function() {
                    if (null != this.touchStartInterval) {
                        var e = Date.now();
                        e - this.touchStartInterval >= 1e3 * this.longPressInterval && (this.longPressCallbackRepeat ? this.touchStartInterval = e : this.touchStartInterval = null,
                        this.longPressCallback && this.longPressCallback())
                    }
                }
                ,
                o.stopDetecting = function() {
                    this.touchEnd()
                }
                ,
                t
            }(C)).prototype, "button", [Ao], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Oo = be(zo.prototype, "longPressInterval", [Qo], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .3
                }
            }),
            Ho = be(zo.prototype, "longPressCallbackRepeat", [Qo], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            xo = zo));
            o._RF.pop(),
            o._RF.push({}, "6ce66qa/kZNC7+IOqf1A/GK", "Switch", void 0);
            var $o, ei, ti, oi, ii, ri = u.ccclass, ni = u.property, li = (Wo = ri("Switch"),
            qo = ni(h),
            jo = ni(h),
            Wo((Zo = be((Xo = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(i)) || this)._on = !0,
                    t.onValueChanged = void 0,
                    fe(t, "onSprite", Zo, ye(t)),
                    fe(t, "offSprite", Yo, ye(t)),
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.node.on(T.EventType.TOUCH_END, this.onTouchUp, this)
                }
                ,
                o.update = function(e) {}
                ,
                o.onLoad = function() {
                    this.on = this.on
                }
                ,
                o.onDestroy = function() {
                    this.node.off(T.EventType.TOUCH_END, this.onTouchUp, this)
                }
                ,
                o.onClick = function() {
                    this.on = !this.on,
                    null != this.onValueChanged && this.onValueChanged(this.on)
                }
                ,
                o.onTouchUp = function(e) {
                    this.onClick()
                }
                ,
                de(t, [{
                    key: "on",
                    get: function() {
                        return this._on
                    },
                    set: function(e) {
                        this._on = e;
                        var t = this.node.getComponent(v);
                        t.spriteFrame = e ? this.onSprite : this.offSprite
                    }
                }]),
                t
            }(C)).prototype, "onSprite", [qo], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Yo = be(Xo.prototype, "offSprite", [jo], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Jo = Xo)) || Jo);
            o._RF.pop(),
            o._RF.push({}, "dc217h+NEJHlKJuGeI7vLKZ", "ToastView", void 0);
            var ai = u.ccclass
              , ui = u.property
              , si = ($o = ai("ToastView"),
            ei = ui(w),
            $o((ii = be((oi = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "msgLabel", ii, ye(t)),
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.update = function(e) {}
                ,
                o.show = function(e, t) {
                    var o = this;
                    void 0 === t && (t = 2),
                    this.msgLabel.string = e,
                    this.msgLabel.updateRenderData(!0);
                    var i = it.getNodeSize(this.msgLabel.node)
                      , r = this.node.getComponent(J);
                    i.width += r.paddingLeft + r.paddingRight,
                    i.height += 20,
                    it.setNodeSize(this.node, i),
                    this.node.active = !0;
                    var n = this.node.getComponent(D);
                    n.opacity = 0,
                    x.stopAllByTarget(n),
                    z(n).to(.2, {
                        opacity: 200
                    }).delay(t).to(.2, {
                        opacity: 0
                    }).call((function() {
                        return o.node.active = !1
                    }
                    )).start()
                }
                ,
                t.showToast = function(e, o) {
                    void 0 === o && (o = 2);
                    var i = s.getScene().getChildByName("Canvas")
                      , r = i.getChildByName("ToastView");
                    if (r) {
                        var n = r.getComponent(t);
                        n.show(e, o),
                        n.node.setSiblingIndex(9999)
                    } else
                        We.loadResourcesPrefab("resources/prefab/common/ToastView", (function(r) {
                            We.isValid(i) && (i.addChild(r),
                            r.setSiblingIndex(9999),
                            r.getComponent(t).show(e, o))
                        }
                        ))
                }
                ,
                t
            }(C)).prototype, "msgLabel", [ei], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ti = oi)) || ti);
            o._RF.pop(),
            o._RF.push({}, "a375cnFAnVEsqiB/L9iRw76", "GameAudio", void 0);
            var ci, di, mi, pi, hi, yi = function() {
                function e() {}
                return e.playFailed = function() {
                    this.canPlay && St.inst.playOneShot("resources/audio/failed", 1)
                }
                ,
                e.playSuccess = function() {
                    this.canPlay && St.inst.playOneShot("resources/audio/success", 1)
                }
                ,
                e.playDouble = function() {
                    this.canPlay && St.inst.playOneShot("resources/audio/double_sound")
                }
                ,
                e.playReward = function() {
                    this.canPlay && St.inst.playOneShot("resources/audio/reward_sound", 1)
                }
                ,
                e.playClick = function() {
                    this.canPlay && St.inst.playOneShot("resources/audio/click")
                }
                ,
                e.playMerge = function() {
                    this.canPlay && St.inst.playOneShot("resources/audio/merged")
                }
                ,
                e.playCombo = function(e) {
                    this.canPlay && (t.log("play count = " + e),
                    St.inst.playOneShot("audio/piano_0" + e))
                }
                ,
                e.playBlockFly = function() {
                    this.canPlay && St.inst.playOneShot("audio/block_fly")
                }
                ,
                e.playBlockFlyCar = function() {
                    this.canPlay && St.inst.playOneShot("audio/caraudio", .4)
                }
                ,
                e.playBlockBreak = function() {
                    this.canPlay && St.inst.playOneShot("audio/hammer_effect02", .6)
                }
                ,
                e.playBlockRemoved = function() {
                    this.canPlay && St.inst.playOneShot("audio/block_removed")
                }
                ,
                e.playBackground = function() {
                    Ze.inst.musicOn && Rt.inst.play("audio/background")
                }
                ,
                e.stopBackground = function() {
                    Rt.inst.stop()
                }
                ,
                de(e, null, [{
                    key: "canPlay",
                    get: function() {
                        return Ze.inst.soundOn
                    }
                }]),
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "2cfc7Xpcx1IGahj7s//2j2c", "AvatarDialog", void 0);
            var Ni, gi, fi, bi, wi, vi, ki, Ti, Ci, _i, Si, Ri, Bi, Ii, Pi, Fi = u.ccclass, Ei = u.property;
            ci = Fi("AvatarDialog"),
            di = Ei(v),
            ci((hi = be((pi = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "avatarSprite", hi, ye(t)),
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.on_will_show = function() {
                    e.prototype.on_will_show.call(this);
                    var o = qe.getDeviceInfoFromUrl().h_avatarurl;
                    Ve.loadRemoteSpriteFrame(this.avatarSprite, o, !0, (function(e, o) {
                        e && t.logE("loadRemoteSpriteFrame error: " + e)
                    }
                    ))
                }
                ,
                i.hide = function() {
                    yi.playClick(),
                    e.prototype.hide.call(this)
                }
                ,
                o
            }(bt)).prototype, "avatarSprite", [di], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            mi = pi));
            o._RF.pop(),
            o._RF.push({}, "a8df1EJDHpJtaT4lyGtKe0S", "CommonDialog", void 0);
            var Mi = u.ccclass
              , Di = u.property;
            Ni = Mi("CommonDialog"),
            gi = Di(w),
            fi = Di(w),
            bi = Di(N),
            wi = Di(N),
            vi = Di(w),
            ki = Di(w),
            Ni((_i = be((Ci = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "titleLabel", _i, ye(t)),
                    fe(t, "msgLabel", Si, ye(t)),
                    fe(t, "cancelBtn", Ri, ye(t)),
                    fe(t, "confirmBtn", Bi, ye(t)),
                    fe(t, "cancelLabel", Ii, ye(t)),
                    fe(t, "confirmLabel", Pi, ye(t)),
                    t.onClickCancelCallback = null,
                    t.onClickConfirmCallback = null,
                    t.isClickCancel = !1,
                    t.isClickConfirm = !1,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    We.bindClick(this.cancelBtn.node, this.onClickCancel, this),
                    We.bindClick(this.confirmBtn.node, this.onClickConfirm, this)
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy.call(this)
                }
                ,
                i.reset = function() {
                    We.isValid(this.node) && (this.isClickCancel = !1,
                    this.isClickConfirm = !1,
                    this.titleLabel.string = "",
                    this.msgLabel.string = "",
                    this.onClickCancelCallback = null,
                    this.onClickConfirmCallback = null)
                }
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.reset(),
                    arguments.length > 0 && (this.titleLabel.string = arguments.length <= 0 ? void 0 : arguments[0]),
                    arguments.length > 1 && (this.msgLabel.string = arguments.length <= 1 ? void 0 : arguments[1]),
                    arguments.length > 2 && (this.cancelLabel.string = arguments.length <= 2 ? void 0 : arguments[2]),
                    arguments.length > 3 && (this.onClickCancelCallback = arguments.length <= 3 ? void 0 : arguments[3]),
                    arguments.length > 4 && (this.confirmLabel.string = arguments.length <= 4 ? void 0 : arguments[4]),
                    arguments.length > 5 && (this.onClickConfirmCallback = arguments.length <= 5 ? void 0 : arguments[5])
                }
                ,
                i.on_hide = function() {
                    e.prototype.on_hide.call(this),
                    this.isClickCancel && this.onClickCancelCallback && this.onClickCancelCallback(),
                    this.isClickConfirm && this.onClickConfirmCallback && this.onClickConfirmCallback()
                }
                ,
                i.onClickCancel = function() {
                    this.hide(),
                    t.log("onclick cancel"),
                    this.isClickCancel = !0
                }
                ,
                i.onClickConfirm = function() {
                    this.hide(),
                    t.log("onclick confirm"),
                    this.isClickConfirm = !0
                }
                ,
                o
            }(bt)).prototype, "titleLabel", [gi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Si = be(Ci.prototype, "msgLabel", [fi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ri = be(Ci.prototype, "cancelBtn", [bi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Bi = be(Ci.prototype, "confirmBtn", [wi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ii = be(Ci.prototype, "cancelLabel", [vi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Pi = be(Ci.prototype, "confirmLabel", [ki], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ti = Ci));
            o._RF.pop(),
            o._RF.push({}, "d9c0fbB4CVMOpxyVTY+mn1t", "CardInfo", void 0);
            u.ccclass,
            u.property;
            var Li = function(e) {
                return e[e.Normal = 0] = "Normal",
                e[e.ColorEgg = 1] = "ColorEgg",
                e
            }({})
              , Ai = function() {
                function e() {}
                return e.getCardX = function(e) {
                    return ze.isNull(e.rolNum) ? e.x : e.rolNum
                }
                ,
                e.setCardX = function(e, t) {
                    e.x = t,
                    e.rolNum = t
                }
                ,
                e.getCardY = function(e) {
                    return ze.isNull(e.rowNum) ? e.y : e.rowNum
                }
                ,
                e.setCardY = function(e, t) {
                    e.y = t,
                    e.rowNum = t
                }
                ,
                e.getCardLayer = function(e) {
                    return ze.isNull(e.layerNum) ? e.layer : e.layerNum
                }
                ,
                e.setCardLayer = function(e, t) {
                    e.layer = t,
                    e.layerNum = t
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "0a9dbSy2mZBG5+lGl1kIrus", "DataFactory", void 0);
            u.ccclass,
            u.property;
            var xi, zi, Gi, Oi, Hi, Ui, Vi, Wi, qi, ji, Ji, Xi = function() {
                function e() {}
                return e.gameCardPoolSize = function() {
                    return this.gameCardPool.length
                }
                ,
                e.putGameCard2Pool = function(e) {
                    e && (We.isValid(e.node) ? (e.reset(),
                    this.gameCardPool.push(e)) : t.logE("putGameCard2Pool: " + e.name + " is invalid"))
                }
                ,
                e.getGameCardFromPool = function() {
                    return 0 == this.gameCardPool.length ? null : this.gameCardPool.pop()
                }
                ,
                e.adapterErrorMsg = function(e, t) {
                    if (void 0 === t && (t = !1),
                    !t)
                        return e;
                    var o = e ? e.split('"') : [];
                    if (o && o.length > 1) {
                        var i = o[1];
                        if (i)
                            return "(null)" == e ? e : i
                    }
                    return "数据加载异常，请重试"
                }
                ,
                e.getSame = function(e, t) {
                    for (var o = 0; o < e.length; o++) {
                        var i = e[o];
                        if (t(i))
                            return i
                    }
                    return null
                }
                ,
                e.sameValueTogether = function(e) {
                    for (var o = [].concat(e), i = [], r = [], n = 0; n < o.length; n++) {
                        var l = o[n]
                          , a = o.lastIndexOf(l);
                        n != a ? (n -= 1,
                        o.splice(a, 1),
                        i.push(l)) : i.length > 0 && i.indexOf(l) == i.length - 1 ? i.push(l) : r.push(l)
                    }
                    return i.push.apply(i, r),
                    i.length != e.length && t.error("sameValueTogether result.length != datas.length"),
                    i
                }
                ,
                e.isCollision = function(e, t, o) {
                    for (var i = 0; i < o.length; i++) {
                        var r = o[i].cardInfo
                          , n = e - 8
                          , l = e + 8
                          , a = t - 8
                          , u = t + 8
                          , s = Ai.getCardX(r)
                          , c = Ai.getCardY(r);
                        if (s > n && s < l && c > a && c < u)
                            return !0
                    }
                    return !1
                }
                ,
                e.isShow = function(e, t) {
                    for (var o, i = ge(e); !(o = i()).done; ) {
                        var r = o.value
                          , n = r[0]
                          , l = r[1];
                        if (!(Number(n) <= Ai.getCardLayer(t)))
                            for (var a, u = Ai.getCardY(t) - 8, s = Ai.getCardY(t) + 8, c = Ai.getCardX(t) - 8, d = Ai.getCardX(t) + 8, m = ge(l); !(a = m()).done; )
                                for (var p, h = a.value, y = h[0], N = ge(h[1]); !(p = N()).done; ) {
                                    var g = p.value
                                      , f = g[0];
                                    g[1];
                                    if (Number(f) > c && Number(f) < d && Number(y) > u && Number(y) < s)
                                        return !1
                                }
                    }
                    return !0
                }
                ,
                e.shuffle = function(e) {
                    for (var t = e.length - 1; t > 0; t--) {
                        var o = Math.floor(Math.random() * (t + 1))
                          , i = [e[o], e[t]];
                        e[t] = i[0],
                        e[o] = i[1]
                    }
                }
                ,
                e.getCardPos = function(e) {
                    var t = 15 * Ai.getCardX(e) - 420
                      , o = -15 * Ai.getCardY(e) + 540;
                    return new a(t,o,0)
                }
                ,
                e.getTimeYYYYMMDD = function(e, t) {
                    void 0 === t && (t = !1);
                    var o = new Date(1e3 * e)
                      , i = o.getFullYear()
                      , r = o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : "" + (o.getMonth() + 1)
                      , n = o.getDate() < 10 ? "0" + o.getDate() : "" + o.getDate()
                      , l = o.getHours() < 10 ? "0" + o.getHours() : "" + o.getHours()
                      , a = o.getMinutes() < 10 ? "0" + o.getMinutes() : "" + o.getMinutes()
                      , u = o.getSeconds() < 10 ? "0" + o.getSeconds() : "" + o.getSeconds();
                    return t ? i + "年" + r + "月" + n + "日\n" + l + ":" + a + ":" + u : i + "年" + r + "月" + n + "日" + l + ":" + a + ":" + u
                }
                ,
                e.selectedSkin = function(e) {
                    Ze.inst.setConfig("selected_skin_" + e, !0)
                }
                ,
                e.setCollectionsSkinRed = function(e) {
                    Ze.inst.setConfig("hide_collections_red", !e)
                }
                ,
                e.isCollectionsSkinRed = function() {
                    return !Ze.inst.getConfig("hide_collections_red")
                }
                ,
                e.isSelectedSkin = function(e) {
                    return Ze.inst.getConfig("selected_skin_" + e)
                }
                ,
                e.isSkinRed = function(e) {
                    return Ze.inst.getConfig("skin_red_" + e)
                }
                ,
                e.setSkinRed = function(e, t) {
                    Ze.inst.setConfig("skin_red_" + e, t)
                }
                ,
                e.setUnlockedSkin = function(e, t) {
                    Ze.inst.setConfig("unlocked_skin_" + e, t)
                }
                ,
                e.isUnlockedSkin = function(e) {
                    return Ze.inst.getConfig("unlocked_skin_" + e)
                }
                ,
                e.setUnlockedIndex = function(e) {
                    Ze.inst.setConfigNumber("unlocked_skin_index", e)
                }
                ,
                e.getUnlockedIndex = function() {
                    return Ze.inst.getConfigNumber("unlocked_skin_index")
                }
                ,
                e
            }();
            Xi.gameCardPool = [],
            o._RF.pop(),
            o._RF.push({}, "043b4FZLt1MnqVfP092Sria", "EggBackpackageDialog", void 0);
            var Zi, Yi = u.ccclass, Ki = u.property;
            xi = Yi("EggBackpackageDialog"),
            zi = Ki(T),
            Gi = Ki([T]),
            Oi = Ki([v]),
            Hi = Ki([w]),
            xi((Wi = be((Vi = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "emptyNode", Wi, ye(t)),
                    fe(t, "eggNodes", qi, ye(t)),
                    fe(t, "eggSprites", ji, ye(t)),
                    fe(t, "eggCountLabels", Ji, ye(t)),
                    t.eggInfos = [],
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.on_will_show = function() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    (t = e.prototype.on_will_show).call.apply(t, [this].concat(i)),
                    this.emptyNode.active = !1,
                    i.length > 0 && i[0]instanceof Array && i[0].length > 0 ? this.eggInfos = i[0] : (this.eggInfos = [],
                    this.emptyNode.active = !0),
                    this.updateEggItems()
                }
                ,
                i.updateEggItems = function() {
                    for (var e = 0; e < this.eggNodes.length; e++)
                        if (!this.eggInfos || e >= this.eggInfos.length)
                            this.eggNodes[e].active = !1;
                        else {
                            this.eggNodes[e].active = !0;
                            var t = this.eggInfos[e];
                            this.updateItem(e, t)
                        }
                }
                ,
                i.updateItem = function(e, o) {
                    var i = this
                      , r = this.eggSprites[e];
                    this.eggCountLabels[e].string = o.count.toString();
                    Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_cards/game_cards", "" + o.egg_id, (function(e, o) {
                        e ? t.logE("load sprite frame failed, err:" + e.message) : We.isValid(i.node) && (r.spriteFrame = o)
                    }
                    ))
                }
                ,
                i.hide = function() {
                    yi.playClick(),
                    e.prototype.hide.call(this)
                }
                ,
                o
            }(bt)).prototype, "emptyNode", [zi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            qi = be(Vi.prototype, "eggNodes", [Gi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            ji = be(Vi.prototype, "eggSprites", [Oi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Ji = be(Vi.prototype, "eggCountLabels", [Hi], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Ui = Vi));
            o._RF.pop(),
            o._RF.push({}, "0cbfa4LMJJIEbV0Qqnlp6U6", "ExitDialog", void 0);
            var Qi, $i, er, tr, or, ir, rr, nr, lr, ar, ur, sr, cr, dr, mr, pr, hr = u.ccclass;
            u.property,
            hr("ExitDialog")(Zi = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return (t = e.call.apply(e, [this].concat(i)) || this).emitExit = !1,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {}
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.emitExit = !1
                }
                ,
                i.on_show = function() {}
                ,
                i.hide = function(t) {
                    e.prototype.hide.call(this, t),
                    yi.playClick()
                }
                ,
                i.onClickCancel = function() {
                    t.log("ExitDialog onClickCancel"),
                    this.hide()
                }
                ,
                i.onClickExit = function() {
                    t.log("ExitDialog onClickExit"),
                    this.emitExit = !0,
                    this.hide()
                }
                ,
                i.on_hide = function() {
                    var t = this;
                    e.prototype.on_hide.call(this),
                    setTimeout((function() {
                        t.emitExit && ne.emit(le.GameExit)
                    }
                    ), 0)
                }
                ,
                o
            }(bt));
            o._RF.pop(),
            o._RF.push({}, "41e11Shjs5KXZYzl3bfHdEO", "GameCard", void 0);
            var yr = u.ccclass
              , Nr = u.property
              , gr = function(e) {
                return e[e.Normal = 0] = "Normal",
                e[e.InMovedBucket = 1] = "InMovedBucket",
                e[e.InMergeBucket = 2] = "InMergeBucket",
                e
            }({})
              , fr = (Qi = yr("GameCard"),
            $i = Nr(v),
            er = Nr(T),
            tr = Nr(v),
            or = Nr(w),
            ir = Nr(h),
            rr = Nr(h),
            Qi(((pr = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "bgSprite", ar, ye(t)),
                    fe(t, "coverNode", ur, ye(t)),
                    fe(t, "cardSprite", sr, ye(t)),
                    fe(t, "descLabel", cr, ye(t)),
                    fe(t, "coverBgNormal", dr, ye(t)),
                    fe(t, "coverBgEgg", mr, ye(t)),
                    t.cardInfo = null,
                    t.mapPos = null,
                    t.mapSlideIndex = -1,
                    t.state = gr.Normal,
                    t.indexOfParent = -1,
                    t.mergeSpaceTargetPos = null,
                    t.pendingHide = !1,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    We.bindClick(this.node, this.onCardClick, this)
                }
                ,
                i.reset = function() {
                    this.pendingHide = !1,
                    this.cardInfo = null,
                    this.mapPos = null,
                    this.mapSlideIndex = -1,
                    this.state = gr.Normal,
                    this.indexOfParent = -1,
                    this.mergeSpaceTargetPos = null,
                    this.cardSprite.spriteFrame = null,
                    this.getComponent(D).opacity = 255
                }
                ,
                i.updateEditLabel = function() {
                    var e = Ai.getCardLayer(this.cardInfo)
                      , t = Ai.getCardX(this.cardInfo)
                      , o = Ai.getCardY(this.cardInfo);
                    this.descLabel.string = e + "\n" + t + "-" + o
                }
                ,
                i.isActiveEdit = function() {
                    return this.descLabel.node.active
                }
                ,
                i.resetEdit = function() {
                    this.descLabel.node.active = !1
                }
                ,
                i.onCardClick = function() {
                    if (yi.playClick(),
                    o.isEditMode)
                        return this.descLabel.node.active ? void (this.descLabel.node.active = !1) : (this.updateEditLabel(),
                        this.descLabel.node.active = !0,
                        void ne.emit(le.GameCardEditClick, this));
                    Ze.inst.viberateOn && qe.vibrate(),
                    this.mapPos || (this.mapPos = this.node.getPosition()),
                    this.mapSlideIndex < 0 && (this.mapSlideIndex = this.node.getSiblingIndex()),
                    ne.emit(le.GameCardClick, this)
                }
                ,
                i.updateImageType = function(e) {
                    var o = this;
                    ze.isNull(e) && t.logE("updateImageType: imgType is null"),
                    this.cardInfo.img_type = e;
                    Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_cards/game_cards", "" + this.cardInfo.img_type, (function(e, i) {
                        e ? t.logE("load sprite frame failed, err:" + e.message) : We.isValid(o.node) && (o.cardSprite.spriteFrame = i)
                    }
                    )),
                    this.isEggCard() ? this.bgSprite.spriteFrame = this.coverBgEgg : this.bgSprite.spriteFrame = this.coverBgNormal
                }
                ,
                i.isEggCard = function() {
                    return this.cardInfo.img_type > 100
                }
                ,
                i.setCardInfo = function(e) {
                    this.name = e.id,
                    this.cardInfo = e,
                    this.updateImageType(this.cardInfo.img_type)
                }
                ,
                i.refreshCover = function() {
                    this.cardInfo.isShow ? (this.hideCover(),
                    this.enableClick(!0)) : (this.showCover(),
                    this.enableClick(!1))
                }
                ,
                i.setMapSlideIndex = function() {
                    this.mapSlideIndex >= 0 && this.node.setSiblingIndex(this.mapSlideIndex)
                }
                ,
                i.enableClick = function(e) {
                    We.enableBtnClickable(this.node, e)
                }
                ,
                i.isShowed = function() {
                    return !this.coverNode.active
                }
                ,
                i.hideCover = function() {
                    this.cardInfo.isShow = !1,
                    this.coverNode.active = !1
                }
                ,
                i.showCover = function() {
                    this.cardInfo.isShow = !0,
                    this.coverNode.active = !0
                }
                ,
                o
            }(C)).isEditMode = !1,
            ar = be((lr = pr).prototype, "bgSprite", [$i], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ur = be(lr.prototype, "coverNode", [er], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            sr = be(lr.prototype, "cardSprite", [tr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            cr = be(lr.prototype, "descLabel", [or], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            dr = be(lr.prototype, "coverBgNormal", [ir], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            mr = be(lr.prototype, "coverBgEgg", [rr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            nr = lr)) || nr);
            o._RF.pop(),
            o._RF.push({}, "3cb5dVveiBHFLdQFAfZBPE1", "MapDataFactory", void 0);
            u.ccclass,
            u.property;
            var br, wr = function() {
                function e() {}
                return e.getRandomEggTypeCount = function() {
                    return Ye.random(1, 3)
                }
                ,
                e.getEggTotalCount = function(e, t) {
                    return Ye.random(e, t)
                }
                ,
                e.getRandomEggTypes = function() {
                    var e = [1011, 1012, 1013, 1014, 1015]
                      , o = []
                      , i = this.getRandomEggTypeCount();
                    t.log("typeCount: " + i);
                    var r = this.getEggTotalCount(i, 9);
                    t.log("eggTotalCount: " + r);
                    for (var n = 0; n < i; n++) {
                        var l = Ye.random(0, e.length - 1);
                        o.push(e[l]),
                        e.splice(l, 1),
                        t.log("randomIndex: " + l + ", types: " + JSON.stringify(e));
                        var a = r - i;
                        if (o.length > i && (a = r - o.length),
                        !(a <= 0)) {
                            var u = Ye.random(0, a);
                            n == i - 1 && (u = a),
                            t.log("i = " + n + ", randomCount: " + u);
                            for (var s = 0; s < u; s++)
                                o.push(o[o.length - 1])
                        }
                    }
                    return t.log("eggTypes: " + JSON.stringify(o) + ", size = " + o.length),
                    o
                }
                ,
                e.getTestMapData = function() {
                    return {
                        typedata: {
                            1: 3,
                            4: 1,
                            11: 2
                        },
                        leveldata: {
                            1: [{
                                id: "1-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }],
                            2: [{
                                id: "2-16-20",
                                type: 1,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }]
                        }
                    }
                }
                ,
                e.getInitMapData = function() {
                    return {
                        typedata: {
                            1: 3,
                            4: 1,
                            11: 2
                        },
                        leveldata: {
                            1: [{
                                id: "1-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-28-32",
                                type: 0,
                                rolNum: 28,
                                rowNum: 32,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-16-48",
                                type: 0,
                                rolNum: 16,
                                rowNum: 48,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-28-48",
                                type: 0,
                                rolNum: 28,
                                rowNum: 48,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-40-48",
                                type: 0,
                                rolNum: 40,
                                rowNum: 48,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }],
                            2: [{
                                id: "2-16-49",
                                type: 0,
                                rolNum: 16,
                                rowNum: 49,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-28-49",
                                type: 0,
                                rolNum: 28,
                                rowNum: 49,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-40-49",
                                type: 0,
                                rolNum: 40,
                                rowNum: 49,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-16-20",
                                type: 0,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-40-20",
                                type: 0,
                                rolNum: 40,
                                rowNum: 20,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-16-36",
                                type: 0,
                                rolNum: 16,
                                rowNum: 36,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-40-36",
                                type: 0,
                                rolNum: 40,
                                rowNum: 36,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }]
                        }
                    }
                }
                ,
                e.getMap01 = function() {
                    return {
                        typedata: {
                            1: 9,
                            2: 9,
                            3: 9,
                            4: 9,
                            5: 9,
                            6: 9,
                            7: 9,
                            8: 9,
                            9: 8,
                            10: 8,
                            11: 8
                        },
                        leveldata: {
                            1: [{
                                id: "1-16-20",
                                type: 0,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-40-20",
                                type: 0,
                                rolNum: 40,
                                rowNum: 20,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-4-56",
                                type: 0,
                                rolNum: 4,
                                rowNum: 56,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-52-56",
                                type: 0,
                                rolNum: 52,
                                rowNum: 56,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }],
                            2: [{
                                id: "2-12-16",
                                type: 0,
                                rolNum: 12,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-20-16",
                                type: 0,
                                rolNum: 20,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-36-16",
                                type: 0,
                                rolNum: 36,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-44-16",
                                type: 0,
                                rolNum: 44,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-5-56",
                                type: 0,
                                rolNum: 5,
                                rowNum: 56,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-51-56",
                                type: 0,
                                rolNum: 51,
                                rowNum: 56,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }],
                            3: [{
                                id: "3-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-6-56",
                                type: 0,
                                rolNum: 6,
                                rowNum: 56,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "3-50-56",
                                type: 0,
                                rolNum: 50,
                                rowNum: 56,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }],
                            4: [{
                                id: "4-12-24",
                                type: 0,
                                rolNum: 12,
                                rowNum: 24,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-44-24",
                                type: 0,
                                rolNum: 44,
                                rowNum: 24,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-7-56",
                                type: 0,
                                rolNum: 7,
                                rowNum: 56,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "4-49-56",
                                type: 0,
                                rolNum: 49,
                                rowNum: 56,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }],
                            5: [{
                                id: "5-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-8-56",
                                type: 0,
                                rolNum: 8,
                                rowNum: 56,
                                layerNum: 5,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "5-48-56",
                                type: 0,
                                rolNum: 48,
                                rowNum: 56,
                                layerNum: 5,
                                moldType: 2,
                                blockNode: null
                            }],
                            6: [{
                                id: "6-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-9-56",
                                type: 0,
                                rolNum: 9,
                                rowNum: 56,
                                layerNum: 6,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "6-47-56",
                                type: 0,
                                rolNum: 47,
                                rowNum: 56,
                                layerNum: 6,
                                moldType: 2,
                                blockNode: null
                            }],
                            7: [{
                                id: "7-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-10-56",
                                type: 0,
                                rolNum: 10,
                                rowNum: 56,
                                layerNum: 7,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "7-46-56",
                                type: 0,
                                rolNum: 46,
                                rowNum: 56,
                                layerNum: 7,
                                moldType: 2,
                                blockNode: null
                            }],
                            8: [{
                                id: "8-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-11-56",
                                type: 0,
                                rolNum: 11,
                                rowNum: 56,
                                layerNum: 8,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "8-45-56",
                                type: 0,
                                rolNum: 45,
                                rowNum: 56,
                                layerNum: 8,
                                moldType: 2,
                                blockNode: null
                            }],
                            9: [{
                                id: "9-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-12-56",
                                type: 0,
                                rolNum: 12,
                                rowNum: 56,
                                layerNum: 9,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "9-44-56",
                                type: 0,
                                rolNum: 44,
                                rowNum: 56,
                                layerNum: 9,
                                moldType: 2,
                                blockNode: null
                            }],
                            10: [{
                                id: "10-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-13-56",
                                type: 0,
                                rolNum: 13,
                                rowNum: 56,
                                layerNum: 10,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "10-43-56",
                                type: 0,
                                rolNum: 43,
                                rowNum: 56,
                                layerNum: 10,
                                moldType: 2,
                                blockNode: null
                            }],
                            11: [{
                                id: "11-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-14-56",
                                type: 0,
                                rolNum: 14,
                                rowNum: 56,
                                layerNum: 11,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "11-42-56",
                                type: 0,
                                rolNum: 42,
                                rowNum: 56,
                                layerNum: 11,
                                moldType: 2,
                                blockNode: null
                            }],
                            12: [{
                                id: "12-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-15-56",
                                type: 0,
                                rolNum: 15,
                                rowNum: 56,
                                layerNum: 12,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "12-41-56",
                                type: 0,
                                rolNum: 41,
                                rowNum: 56,
                                layerNum: 12,
                                moldType: 2,
                                blockNode: null
                            }],
                            13: [{
                                id: "13-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-16-56",
                                type: 0,
                                rolNum: 16,
                                rowNum: 56,
                                layerNum: 13,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "13-40-56",
                                type: 0,
                                rolNum: 40,
                                rowNum: 56,
                                layerNum: 13,
                                moldType: 2,
                                blockNode: null
                            }],
                            14: [{
                                id: "14-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-17-56",
                                type: 0,
                                rolNum: 17,
                                rowNum: 56,
                                layerNum: 14,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "14-39-56",
                                type: 0,
                                rolNum: 39,
                                rowNum: 56,
                                layerNum: 14,
                                moldType: 2,
                                blockNode: null
                            }],
                            15: [{
                                id: "15-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-18-56",
                                type: 0,
                                rolNum: 18,
                                rowNum: 56,
                                layerNum: 15,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "15-38-56",
                                type: 0,
                                rolNum: 38,
                                rowNum: 56,
                                layerNum: 15,
                                moldType: 2,
                                blockNode: null
                            }],
                            16: [{
                                id: "16-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }],
                            17: [{
                                id: "17-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }],
                            18: [{
                                id: "18-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }],
                            19: [{
                                id: "19-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }],
                            20: [{
                                id: "20-8-16",
                                type: 0,
                                rolNum: 8,
                                rowNum: 16,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-24",
                                type: 0,
                                rolNum: 16,
                                rowNum: 24,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-32",
                                type: 0,
                                rolNum: 8,
                                rowNum: 32,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-16",
                                type: 0,
                                rolNum: 48,
                                rowNum: 16,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-24",
                                type: 0,
                                rolNum: 40,
                                rowNum: 24,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-32",
                                type: 0,
                                rolNum: 48,
                                rowNum: 32,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }],
                            21: [{
                                id: "21-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-4-20",
                                type: 0,
                                rolNum: 4,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-4-28",
                                type: 0,
                                rolNum: 4,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-36",
                                type: 0,
                                rolNum: 12,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-36",
                                type: 0,
                                rolNum: 44,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-52-20",
                                type: 0,
                                rolNum: 52,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-52-28",
                                type: 0,
                                rolNum: 52,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }],
                            22: [{
                                id: "22-8-16",
                                type: 0,
                                rolNum: 8,
                                rowNum: 16,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-16",
                                type: 0,
                                rolNum: 48,
                                rowNum: 16,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-8-32",
                                type: 0,
                                rolNum: 8,
                                rowNum: 32,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-24",
                                type: 0,
                                rolNum: 16,
                                rowNum: 24,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-24",
                                type: 0,
                                rolNum: 40,
                                rowNum: 24,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-32",
                                type: 0,
                                rolNum: 48,
                                rowNum: 32,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-8-40",
                                type: 0,
                                rolNum: 8,
                                rowNum: 40,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-40",
                                type: 0,
                                rolNum: 16,
                                rowNum: 40,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-24-40",
                                type: 0,
                                rolNum: 24,
                                rowNum: 40,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-32-40",
                                type: 0,
                                rolNum: 32,
                                rowNum: 40,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-40",
                                type: 0,
                                rolNum: 40,
                                rowNum: 40,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-40",
                                type: 0,
                                rolNum: 48,
                                rowNum: 40,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }],
                            23: [{
                                id: "23-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-4-12",
                                type: 0,
                                rolNum: 4,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-52-12",
                                type: 0,
                                rolNum: 52,
                                rowNum: 12,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-4-20",
                                type: 0,
                                rolNum: 4,
                                rowNum: 20,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-4-28",
                                type: 0,
                                rolNum: 4,
                                rowNum: 28,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-4-36",
                                type: 0,
                                rolNum: 4,
                                rowNum: 36,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-4-44",
                                type: 0,
                                rolNum: 4,
                                rowNum: 44,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-52-20",
                                type: 0,
                                rolNum: 52,
                                rowNum: 20,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-52-28",
                                type: 0,
                                rolNum: 52,
                                rowNum: 28,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-52-36",
                                type: 0,
                                rolNum: 52,
                                rowNum: 36,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-52-44",
                                type: 0,
                                rolNum: 52,
                                rowNum: 44,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-36",
                                type: 0,
                                rolNum: 12,
                                rowNum: 36,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-44",
                                type: 0,
                                rolNum: 12,
                                rowNum: 44,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-36",
                                type: 0,
                                rolNum: 44,
                                rowNum: 36,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-44",
                                type: 0,
                                rolNum: 44,
                                rowNum: 44,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }],
                            24: [{
                                id: "24-4-8",
                                type: 0,
                                rolNum: 4,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-12-8",
                                type: 0,
                                rolNum: 12,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-20-8",
                                type: 0,
                                rolNum: 20,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-28-8",
                                type: 0,
                                rolNum: 28,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-36-8",
                                type: 0,
                                rolNum: 36,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-44-8",
                                type: 0,
                                rolNum: 44,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-52-8",
                                type: 0,
                                rolNum: 52,
                                rowNum: 8,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-8-16",
                                type: 0,
                                rolNum: 8,
                                rowNum: 16,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-8-24",
                                type: 0,
                                rolNum: 8,
                                rowNum: 24,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-8-32",
                                type: 0,
                                rolNum: 8,
                                rowNum: 32,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-8-40",
                                type: 0,
                                rolNum: 8,
                                rowNum: 40,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-16",
                                type: 0,
                                rolNum: 48,
                                rowNum: 16,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-24",
                                type: 0,
                                rolNum: 48,
                                rowNum: 24,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-32",
                                type: 0,
                                rolNum: 48,
                                rowNum: 32,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-40",
                                type: 0,
                                rolNum: 48,
                                rowNum: 40,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }],
                            25: [{
                                id: "25-4-4",
                                type: 0,
                                rolNum: 4,
                                rowNum: 4,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-16-4",
                                type: 0,
                                rolNum: 16,
                                rowNum: 4,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-28-4",
                                type: 0,
                                rolNum: 28,
                                rowNum: 4,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-40-4",
                                type: 0,
                                rolNum: 40,
                                rowNum: 4,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-52-4",
                                type: 0,
                                rolNum: 52,
                                rowNum: 4,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }]
                        }
                    }
                }
                ,
                e.getMap02 = function() {
                    return {
                        typedata: {
                            1: 9,
                            2: 9,
                            3: 9,
                            4: 9,
                            5: 8,
                            6: 8,
                            7: 8,
                            8: 9,
                            9: 9,
                            10: 9,
                            11: 8
                        },
                        leveldata: {
                            1: [{
                                id: "1-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-8-52",
                                type: 0,
                                rolNum: 8,
                                rowNum: 52,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-48-52",
                                type: 0,
                                rolNum: 48,
                                rowNum: 52,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }],
                            2: [{
                                id: "2-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-9-52",
                                type: 0,
                                rolNum: 9,
                                rowNum: 52,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-47-52",
                                type: 0,
                                rolNum: 47,
                                rowNum: 52,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }],
                            3: [{
                                id: "3-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-10-52",
                                type: 0,
                                rolNum: 10,
                                rowNum: 52,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "3-46-52",
                                type: 0,
                                rolNum: 46,
                                rowNum: 52,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }],
                            4: [{
                                id: "4-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-11-52",
                                type: 0,
                                rolNum: 11,
                                rowNum: 52,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "4-45-52",
                                type: 0,
                                rolNum: 45,
                                rowNum: 52,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }],
                            5: [{
                                id: "5-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-12-52",
                                type: 0,
                                rolNum: 12,
                                rowNum: 52,
                                layerNum: 5,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "5-44-52",
                                type: 0,
                                rolNum: 44,
                                rowNum: 52,
                                layerNum: 5,
                                moldType: 2,
                                blockNode: null
                            }],
                            6: [{
                                id: "6-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-13-52",
                                type: 0,
                                rolNum: 13,
                                rowNum: 52,
                                layerNum: 6,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "6-43-52",
                                type: 0,
                                rolNum: 43,
                                rowNum: 52,
                                layerNum: 6,
                                moldType: 2,
                                blockNode: null
                            }],
                            7: [{
                                id: "7-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-14-52",
                                type: 0,
                                rolNum: 14,
                                rowNum: 52,
                                layerNum: 7,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "7-42-52",
                                type: 0,
                                rolNum: 42,
                                rowNum: 52,
                                layerNum: 7,
                                moldType: 2,
                                blockNode: null
                            }],
                            8: [{
                                id: "8-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-15-52",
                                type: 0,
                                rolNum: 15,
                                rowNum: 52,
                                layerNum: 8,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "8-41-52",
                                type: 0,
                                rolNum: 41,
                                rowNum: 52,
                                layerNum: 8,
                                moldType: 2,
                                blockNode: null
                            }],
                            9: [{
                                id: "9-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-16-52",
                                type: 0,
                                rolNum: 16,
                                rowNum: 52,
                                layerNum: 9,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "9-40-52",
                                type: 0,
                                rolNum: 40,
                                rowNum: 52,
                                layerNum: 9,
                                moldType: 2,
                                blockNode: null
                            }],
                            10: [{
                                id: "10-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-17-52",
                                type: 0,
                                rolNum: 17,
                                rowNum: 52,
                                layerNum: 10,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "10-39-52",
                                type: 0,
                                rolNum: 39,
                                rowNum: 52,
                                layerNum: 10,
                                moldType: 2,
                                blockNode: null
                            }],
                            11: [{
                                id: "11-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-18-52",
                                type: 0,
                                rolNum: 18,
                                rowNum: 52,
                                layerNum: 11,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "11-38-52",
                                type: 0,
                                rolNum: 38,
                                rowNum: 52,
                                layerNum: 11,
                                moldType: 2,
                                blockNode: null
                            }],
                            12: [{
                                id: "12-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-24-24",
                                type: 0,
                                rolNum: 24,
                                rowNum: 24,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-32-24",
                                type: 0,
                                rolNum: 32,
                                rowNum: 24,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-19-52",
                                type: 0,
                                rolNum: 19,
                                rowNum: 52,
                                layerNum: 12,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "12-37-52",
                                type: 0,
                                rolNum: 37,
                                rowNum: 52,
                                layerNum: 12,
                                moldType: 2,
                                blockNode: null
                            }],
                            13: [{
                                id: "13-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-52",
                                type: 0,
                                rolNum: 20,
                                rowNum: 52,
                                layerNum: 13,
                                moldType: 2,
                                blockNode: null
                            }],
                            14: [{
                                id: "14-16-8",
                                type: 0,
                                rolNum: 16,
                                rowNum: 8,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-24-8",
                                type: 0,
                                rolNum: 24,
                                rowNum: 8,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-32-8",
                                type: 0,
                                rolNum: 32,
                                rowNum: 8,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-40-8",
                                type: 0,
                                rolNum: 40,
                                rowNum: 8,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-16-24",
                                type: 0,
                                rolNum: 16,
                                rowNum: 24,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-40-24",
                                type: 0,
                                rolNum: 40,
                                rowNum: 24,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }],
                            15: [{
                                id: "15-12-4",
                                type: 0,
                                rolNum: 12,
                                rowNum: 4,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-4",
                                type: 0,
                                rolNum: 20,
                                rowNum: 4,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-28-4",
                                type: 0,
                                rolNum: 28,
                                rowNum: 4,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-4",
                                type: 0,
                                rolNum: 36,
                                rowNum: 4,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-44-4",
                                type: 0,
                                rolNum: 44,
                                rowNum: 4,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-12-36",
                                type: 0,
                                rolNum: 12,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-44-36",
                                type: 0,
                                rolNum: 44,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }],
                            16: [{
                                id: "16-8-4",
                                type: 0,
                                rolNum: 8,
                                rowNum: 4,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-4",
                                type: 0,
                                rolNum: 16,
                                rowNum: 4,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-4",
                                type: 0,
                                rolNum: 24,
                                rowNum: 4,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-4",
                                type: 0,
                                rolNum: 32,
                                rowNum: 4,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-4",
                                type: 0,
                                rolNum: 40,
                                rowNum: 4,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-48-4",
                                type: 0,
                                rolNum: 48,
                                rowNum: 4,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-8-12",
                                type: 0,
                                rolNum: 8,
                                rowNum: 12,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-12",
                                type: 0,
                                rolNum: 16,
                                rowNum: 12,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-12",
                                type: 0,
                                rolNum: 24,
                                rowNum: 12,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-12",
                                type: 0,
                                rolNum: 32,
                                rowNum: 12,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-12",
                                type: 0,
                                rolNum: 40,
                                rowNum: 12,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-48-12",
                                type: 0,
                                rolNum: 48,
                                rowNum: 12,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-8-20",
                                type: 0,
                                rolNum: 8,
                                rowNum: 20,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-20",
                                type: 0,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-20",
                                type: 0,
                                rolNum: 24,
                                rowNum: 20,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-20",
                                type: 0,
                                rolNum: 32,
                                rowNum: 20,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-20",
                                type: 0,
                                rolNum: 40,
                                rowNum: 20,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-48-20",
                                type: 0,
                                rolNum: 48,
                                rowNum: 20,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-8-40",
                                type: 0,
                                rolNum: 8,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-40",
                                type: 0,
                                rolNum: 16,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-40",
                                type: 0,
                                rolNum: 24,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-40",
                                type: 0,
                                rolNum: 32,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-40",
                                type: 0,
                                rolNum: 40,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-48-40",
                                type: 0,
                                rolNum: 48,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }],
                            17: [{
                                id: "17-12-4",
                                type: 0,
                                rolNum: 12,
                                rowNum: 4,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-4",
                                type: 0,
                                rolNum: 20,
                                rowNum: 4,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-4",
                                type: 0,
                                rolNum: 28,
                                rowNum: 4,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-4",
                                type: 0,
                                rolNum: 36,
                                rowNum: 4,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-4",
                                type: 0,
                                rolNum: 44,
                                rowNum: 4,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }],
                            18: [{
                                id: "18-8-4",
                                type: 0,
                                rolNum: 8,
                                rowNum: 4,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-4",
                                type: 0,
                                rolNum: 16,
                                rowNum: 4,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-4",
                                type: 0,
                                rolNum: 24,
                                rowNum: 4,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-4",
                                type: 0,
                                rolNum: 32,
                                rowNum: 4,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-4",
                                type: 0,
                                rolNum: 40,
                                rowNum: 4,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-4",
                                type: 0,
                                rolNum: 48,
                                rowNum: 4,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-8-12",
                                type: 0,
                                rolNum: 8,
                                rowNum: 12,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-12",
                                type: 0,
                                rolNum: 16,
                                rowNum: 12,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-12",
                                type: 0,
                                rolNum: 24,
                                rowNum: 12,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-12",
                                type: 0,
                                rolNum: 32,
                                rowNum: 12,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-12",
                                type: 0,
                                rolNum: 40,
                                rowNum: 12,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-12",
                                type: 0,
                                rolNum: 48,
                                rowNum: 12,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-8-20",
                                type: 0,
                                rolNum: 8,
                                rowNum: 20,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-20",
                                type: 0,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-20",
                                type: 0,
                                rolNum: 24,
                                rowNum: 20,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-20",
                                type: 0,
                                rolNum: 32,
                                rowNum: 20,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-20",
                                type: 0,
                                rolNum: 40,
                                rowNum: 20,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-20",
                                type: 0,
                                rolNum: 48,
                                rowNum: 20,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }],
                            19: [{
                                id: "19-12-4",
                                type: 0,
                                rolNum: 12,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-4",
                                type: 0,
                                rolNum: 20,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-4",
                                type: 0,
                                rolNum: 28,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-4",
                                type: 0,
                                rolNum: 36,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-4",
                                type: 0,
                                rolNum: 44,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-20",
                                type: 0,
                                rolNum: 12,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-20",
                                type: 0,
                                rolNum: 28,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-20",
                                type: 0,
                                rolNum: 44,
                                rowNum: 20,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }],
                            20: [{
                                id: "20-8-4",
                                type: 0,
                                rolNum: 8,
                                rowNum: 4,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-4",
                                type: 0,
                                rolNum: 16,
                                rowNum: 4,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-4",
                                type: 0,
                                rolNum: 24,
                                rowNum: 4,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-4",
                                type: 0,
                                rolNum: 32,
                                rowNum: 4,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-4",
                                type: 0,
                                rolNum: 40,
                                rowNum: 4,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-4",
                                type: 0,
                                rolNum: 48,
                                rowNum: 4,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-12",
                                type: 0,
                                rolNum: 8,
                                rowNum: 12,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-12",
                                type: 0,
                                rolNum: 16,
                                rowNum: 12,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-12",
                                type: 0,
                                rolNum: 24,
                                rowNum: 12,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-12",
                                type: 0,
                                rolNum: 32,
                                rowNum: 12,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-12",
                                type: 0,
                                rolNum: 40,
                                rowNum: 12,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-12",
                                type: 0,
                                rolNum: 48,
                                rowNum: 12,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-20",
                                type: 0,
                                rolNum: 8,
                                rowNum: 20,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-20",
                                type: 0,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-20",
                                type: 0,
                                rolNum: 24,
                                rowNum: 20,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-20",
                                type: 0,
                                rolNum: 32,
                                rowNum: 20,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-20",
                                type: 0,
                                rolNum: 40,
                                rowNum: 20,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-20",
                                type: 0,
                                rolNum: 48,
                                rowNum: 20,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }],
                            21: [{
                                id: "21-12-0",
                                type: 0,
                                rolNum: 12,
                                rowNum: 0,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-8",
                                type: 0,
                                rolNum: 12,
                                rowNum: 8,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-16",
                                type: 0,
                                rolNum: 12,
                                rowNum: 16,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-0",
                                type: 0,
                                rolNum: 20,
                                rowNum: 0,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-0",
                                type: 0,
                                rolNum: 28,
                                rowNum: 0,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-0",
                                type: 0,
                                rolNum: 36,
                                rowNum: 0,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-0",
                                type: 0,
                                rolNum: 44,
                                rowNum: 0,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-8",
                                type: 0,
                                rolNum: 44,
                                rowNum: 8,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-16",
                                type: 0,
                                rolNum: 44,
                                rowNum: 16,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-24",
                                type: 0,
                                rolNum: 12,
                                rowNum: 24,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-24",
                                type: 0,
                                rolNum: 28,
                                rowNum: 24,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-24",
                                type: 0,
                                rolNum: 44,
                                rowNum: 24,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-24-12",
                                type: 0,
                                rolNum: 24,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-32-12",
                                type: 0,
                                rolNum: 32,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }],
                            22: [{
                                id: "22-8-4",
                                type: 0,
                                rolNum: 8,
                                rowNum: 4,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-4",
                                type: 0,
                                rolNum: 16,
                                rowNum: 4,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-24-4",
                                type: 0,
                                rolNum: 24,
                                rowNum: 4,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-32-4",
                                type: 0,
                                rolNum: 32,
                                rowNum: 4,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-4",
                                type: 0,
                                rolNum: 40,
                                rowNum: 4,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-8-12",
                                type: 0,
                                rolNum: 8,
                                rowNum: 12,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-12",
                                type: 0,
                                rolNum: 16,
                                rowNum: 12,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-12",
                                type: 0,
                                rolNum: 40,
                                rowNum: 12,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-4",
                                type: 0,
                                rolNum: 48,
                                rowNum: 4,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-12",
                                type: 0,
                                rolNum: 48,
                                rowNum: 12,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-8-20",
                                type: 0,
                                rolNum: 8,
                                rowNum: 20,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-16-20",
                                type: 0,
                                rolNum: 16,
                                rowNum: 20,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-24-20",
                                type: 0,
                                rolNum: 24,
                                rowNum: 20,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-32-20",
                                type: 0,
                                rolNum: 32,
                                rowNum: 20,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-40-20",
                                type: 0,
                                rolNum: 40,
                                rowNum: 20,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "22-48-20",
                                type: 0,
                                rolNum: 48,
                                rowNum: 20,
                                layerNum: 22,
                                moldType: 1,
                                blockNode: null
                            }],
                            23: [{
                                id: "23-12-0",
                                type: 0,
                                rolNum: 12,
                                rowNum: 0,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-8",
                                type: 0,
                                rolNum: 12,
                                rowNum: 8,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-16",
                                type: 0,
                                rolNum: 12,
                                rowNum: 16,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-12-24",
                                type: 0,
                                rolNum: 12,
                                rowNum: 24,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-20-0",
                                type: 0,
                                rolNum: 20,
                                rowNum: 0,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-28-0",
                                type: 0,
                                rolNum: 28,
                                rowNum: 0,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-36-0",
                                type: 0,
                                rolNum: 36,
                                rowNum: 0,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-0",
                                type: 0,
                                rolNum: 44,
                                rowNum: 0,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-20-8",
                                type: 0,
                                rolNum: 20,
                                rowNum: 8,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-28-8",
                                type: 0,
                                rolNum: 28,
                                rowNum: 8,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-36-8",
                                type: 0,
                                rolNum: 36,
                                rowNum: 8,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-8",
                                type: 0,
                                rolNum: 44,
                                rowNum: 8,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-20-16",
                                type: 0,
                                rolNum: 20,
                                rowNum: 16,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-36-16",
                                type: 0,
                                rolNum: 36,
                                rowNum: 16,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-16",
                                type: 0,
                                rolNum: 44,
                                rowNum: 16,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-28-24",
                                type: 0,
                                rolNum: 28,
                                rowNum: 24,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "23-44-24",
                                type: 0,
                                rolNum: 44,
                                rowNum: 24,
                                layerNum: 23,
                                moldType: 1,
                                blockNode: null
                            }],
                            24: [{
                                id: "24-8-4",
                                type: 0,
                                rolNum: 8,
                                rowNum: 4,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-8-12",
                                type: 0,
                                rolNum: 8,
                                rowNum: 12,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-8-20",
                                type: 0,
                                rolNum: 8,
                                rowNum: 20,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-16-0",
                                type: 0,
                                rolNum: 16,
                                rowNum: 0,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-24-0",
                                type: 0,
                                rolNum: 24,
                                rowNum: 0,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-32-0",
                                type: 0,
                                rolNum: 32,
                                rowNum: 0,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-40-0",
                                type: 0,
                                rolNum: 40,
                                rowNum: 0,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-4",
                                type: 0,
                                rolNum: 48,
                                rowNum: 4,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-12",
                                type: 0,
                                rolNum: 48,
                                rowNum: 12,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-48-20",
                                type: 0,
                                rolNum: 48,
                                rowNum: 20,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-16-28",
                                type: 0,
                                rolNum: 16,
                                rowNum: 28,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-24-28",
                                type: 0,
                                rolNum: 24,
                                rowNum: 28,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-32-28",
                                type: 0,
                                rolNum: 32,
                                rowNum: 28,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "24-40-28",
                                type: 0,
                                rolNum: 40,
                                rowNum: 28,
                                layerNum: 24,
                                moldType: 1,
                                blockNode: null
                            }],
                            25: [{
                                id: "25-12-0",
                                type: 0,
                                rolNum: 12,
                                rowNum: 0,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-20-0",
                                type: 0,
                                rolNum: 20,
                                rowNum: 0,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-28-0",
                                type: 0,
                                rolNum: 28,
                                rowNum: 0,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-36-0",
                                type: 0,
                                rolNum: 36,
                                rowNum: 0,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-44-0",
                                type: 0,
                                rolNum: 44,
                                rowNum: 0,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-12-28",
                                type: 0,
                                rolNum: 12,
                                rowNum: 28,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-28-28",
                                type: 0,
                                rolNum: 28,
                                rowNum: 28,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-44-28",
                                type: 0,
                                rolNum: 44,
                                rowNum: 28,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-4-16",
                                type: 0,
                                rolNum: 4,
                                rowNum: 16,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "25-52-16",
                                type: 0,
                                rolNum: 52,
                                rowNum: 16,
                                layerNum: 25,
                                moldType: 1,
                                blockNode: null
                            }],
                            26: [{
                                id: "26-8-4",
                                type: 0,
                                rolNum: 8,
                                rowNum: 4,
                                layerNum: 26,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "26-48-4",
                                type: 0,
                                rolNum: 48,
                                rowNum: 4,
                                layerNum: 26,
                                moldType: 1,
                                blockNode: null
                            }],
                            27: [{
                                id: "27-4-8",
                                type: 0,
                                rolNum: 4,
                                rowNum: 8,
                                layerNum: 27,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "27-52-8",
                                type: 0,
                                rolNum: 52,
                                rowNum: 8,
                                layerNum: 27,
                                moldType: 1,
                                blockNode: null
                            }],
                            28: [{
                                id: "28-52-12",
                                type: 0,
                                rolNum: 52,
                                rowNum: 12,
                                layerNum: 28,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "28-4-12",
                                type: 0,
                                rolNum: 4,
                                rowNum: 12,
                                layerNum: 28,
                                moldType: 1,
                                blockNode: null
                            }]
                        }
                    }
                }
                ,
                e.getMapEmpty = function() {
                    return {
                        typedata: {},
                        leveldata: {}
                    }
                }
                ,
                e.getMap03 = function() {
                    return {
                        typedata: {
                            1: 9,
                            2: 9,
                            3: 9,
                            4: 9,
                            5: 9,
                            6: 8,
                            7: 8,
                            8: 7,
                            9: 7,
                            10: 7,
                            11: 7
                        },
                        leveldata: {
                            1: [{
                                id: "1-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "1-4-64",
                                type: 0,
                                rolNum: 4,
                                rowNum: 64,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-52-64",
                                type: 0,
                                rolNum: 52,
                                rowNum: 64,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-24-60",
                                type: 0,
                                rolNum: 24,
                                rowNum: 60,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-32-60",
                                type: 0,
                                rolNum: 32,
                                rowNum: 60,
                                layerNum: 1,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "1-28-24",
                                type: 0,
                                rolNum: 28,
                                rowNum: 24,
                                layerNum: 1,
                                moldType: 1,
                                blockNode: null
                            }],
                            2: [{
                                id: "2-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-24-36",
                                type: 0,
                                rolNum: 24,
                                rowNum: 36,
                                layerNum: 2,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "2-5-64",
                                type: 0,
                                rolNum: 5,
                                rowNum: 64,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-51-64",
                                type: 0,
                                rolNum: 51,
                                rowNum: 64,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-24-61",
                                type: 0,
                                rolNum: 24,
                                rowNum: 61,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "2-32-61",
                                type: 0,
                                rolNum: 32,
                                rowNum: 61,
                                layerNum: 2,
                                moldType: 2,
                                blockNode: null
                            }],
                            3: [{
                                id: "3-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 3,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "3-6-64",
                                type: 0,
                                rolNum: 6,
                                rowNum: 64,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "3-50-64",
                                type: 0,
                                rolNum: 50,
                                rowNum: 64,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "3-24-62",
                                type: 0,
                                rolNum: 24,
                                rowNum: 62,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "3-32-62",
                                type: 0,
                                rolNum: 32,
                                rowNum: 62,
                                layerNum: 3,
                                moldType: 2,
                                blockNode: null
                            }],
                            4: [{
                                id: "4-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-24-36",
                                type: 0,
                                rolNum: 24,
                                rowNum: 36,
                                layerNum: 4,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "4-7-64",
                                type: 0,
                                rolNum: 7,
                                rowNum: 64,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "4-49-64",
                                type: 0,
                                rolNum: 49,
                                rowNum: 64,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "4-24-63",
                                type: 0,
                                rolNum: 24,
                                rowNum: 63,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "4-32-63",
                                type: 0,
                                rolNum: 32,
                                rowNum: 63,
                                layerNum: 4,
                                moldType: 2,
                                blockNode: null
                            }],
                            5: [{
                                id: "5-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-36-32",
                                type: 0,
                                rolNum: 36,
                                rowNum: 32,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-20-32",
                                type: 0,
                                rolNum: 20,
                                rowNum: 32,
                                layerNum: 5,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "5-8-64",
                                type: 0,
                                rolNum: 8,
                                rowNum: 64,
                                layerNum: 5,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "5-48-64",
                                type: 0,
                                rolNum: 48,
                                rowNum: 64,
                                layerNum: 5,
                                moldType: 2,
                                blockNode: null
                            }],
                            6: [{
                                id: "6-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-24-36",
                                type: 0,
                                rolNum: 24,
                                rowNum: 36,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-32-36",
                                type: 0,
                                rolNum: 32,
                                rowNum: 36,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 6,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "6-9-64",
                                type: 0,
                                rolNum: 9,
                                rowNum: 64,
                                layerNum: 6,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "6-47-64",
                                type: 0,
                                rolNum: 47,
                                rowNum: 64,
                                layerNum: 6,
                                moldType: 2,
                                blockNode: null
                            }],
                            7: [{
                                id: "7-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-20-32",
                                type: 0,
                                rolNum: 20,
                                rowNum: 32,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-36-32",
                                type: 0,
                                rolNum: 36,
                                rowNum: 32,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 7,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "7-10-64",
                                type: 0,
                                rolNum: 10,
                                rowNum: 64,
                                layerNum: 7,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "7-46-64",
                                type: 0,
                                rolNum: 46,
                                rowNum: 64,
                                layerNum: 7,
                                moldType: 2,
                                blockNode: null
                            }],
                            8: [{
                                id: "8-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-24-36",
                                type: 0,
                                rolNum: 24,
                                rowNum: 36,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-32-36",
                                type: 0,
                                rolNum: 32,
                                rowNum: 36,
                                layerNum: 8,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "8-11-64",
                                type: 0,
                                rolNum: 11,
                                rowNum: 64,
                                layerNum: 8,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "8-45-64",
                                type: 0,
                                rolNum: 45,
                                rowNum: 64,
                                layerNum: 8,
                                moldType: 2,
                                blockNode: null
                            }],
                            9: [{
                                id: "9-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-20-32",
                                type: 0,
                                rolNum: 20,
                                rowNum: 32,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-36-32",
                                type: 0,
                                rolNum: 36,
                                rowNum: 32,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 9,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "9-12-64",
                                type: 0,
                                rolNum: 12,
                                rowNum: 64,
                                layerNum: 9,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "9-44-64",
                                type: 0,
                                rolNum: 44,
                                rowNum: 64,
                                layerNum: 9,
                                moldType: 2,
                                blockNode: null
                            }],
                            10: [{
                                id: "10-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-24-36",
                                type: 0,
                                rolNum: 24,
                                rowNum: 36,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-32-36",
                                type: 0,
                                rolNum: 32,
                                rowNum: 36,
                                layerNum: 10,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "10-13-64",
                                type: 0,
                                rolNum: 13,
                                rowNum: 64,
                                layerNum: 10,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "10-43-64",
                                type: 0,
                                rolNum: 43,
                                rowNum: 64,
                                layerNum: 10,
                                moldType: 2,
                                blockNode: null
                            }],
                            11: [{
                                id: "11-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 11,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "11-14-64",
                                type: 0,
                                rolNum: 14,
                                rowNum: 64,
                                layerNum: 11,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "11-42-64",
                                type: 0,
                                rolNum: 42,
                                rowNum: 64,
                                layerNum: 11,
                                moldType: 2,
                                blockNode: null
                            }],
                            12: [{
                                id: "12-24-12",
                                type: 0,
                                rolNum: 24,
                                rowNum: 12,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-32-12",
                                type: 0,
                                rolNum: 32,
                                rowNum: 12,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 12,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "12-15-64",
                                type: 0,
                                rolNum: 15,
                                rowNum: 64,
                                layerNum: 12,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "12-41-64",
                                type: 0,
                                rolNum: 41,
                                rowNum: 64,
                                layerNum: 12,
                                moldType: 2,
                                blockNode: null
                            }],
                            13: [{
                                id: "13-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 13,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "13-16-64",
                                type: 0,
                                rolNum: 16,
                                rowNum: 64,
                                layerNum: 13,
                                moldType: 2,
                                blockNode: null
                            }, {
                                id: "13-40-64",
                                type: 0,
                                rolNum: 40,
                                rowNum: 64,
                                layerNum: 13,
                                moldType: 2,
                                blockNode: null
                            }],
                            14: [{
                                id: "14-20-24",
                                type: 0,
                                rolNum: 20,
                                rowNum: 24,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-36-24",
                                type: 0,
                                rolNum: 36,
                                rowNum: 24,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "14-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 14,
                                moldType: 1,
                                blockNode: null
                            }],
                            15: [{
                                id: "15-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-20",
                                type: 0,
                                rolNum: 20,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-28",
                                type: 0,
                                rolNum: 20,
                                rowNum: 28,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-20",
                                type: 0,
                                rolNum: 36,
                                rowNum: 20,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "15-36-28",
                                type: 0,
                                rolNum: 36,
                                rowNum: 28,
                                layerNum: 15,
                                moldType: 1,
                                blockNode: null
                            }],
                            16: [{
                                id: "16-16-8",
                                type: 0,
                                rolNum: 16,
                                rowNum: 8,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-8",
                                type: 0,
                                rolNum: 24,
                                rowNum: 8,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-8",
                                type: 0,
                                rolNum: 32,
                                rowNum: 8,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-8",
                                type: 0,
                                rolNum: 40,
                                rowNum: 8,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-16-40",
                                type: 0,
                                rolNum: 16,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-24-40",
                                type: 0,
                                rolNum: 24,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-32-40",
                                type: 0,
                                rolNum: 32,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "16-40-40",
                                type: 0,
                                rolNum: 40,
                                rowNum: 40,
                                layerNum: 16,
                                moldType: 1,
                                blockNode: null
                            }],
                            17: [{
                                id: "17-12-8",
                                type: 0,
                                rolNum: 12,
                                rowNum: 8,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-8",
                                type: 0,
                                rolNum: 20,
                                rowNum: 8,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-8",
                                type: 0,
                                rolNum: 28,
                                rowNum: 8,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-8",
                                type: 0,
                                rolNum: 36,
                                rowNum: 8,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-8",
                                type: 0,
                                rolNum: 44,
                                rowNum: 8,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-12-16",
                                type: 0,
                                rolNum: 12,
                                rowNum: 16,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-16",
                                type: 0,
                                rolNum: 20,
                                rowNum: 16,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-16",
                                type: 0,
                                rolNum: 28,
                                rowNum: 16,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-16",
                                type: 0,
                                rolNum: 36,
                                rowNum: 16,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-16",
                                type: 0,
                                rolNum: 44,
                                rowNum: 16,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-12-32",
                                type: 0,
                                rolNum: 12,
                                rowNum: 32,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-32",
                                type: 0,
                                rolNum: 20,
                                rowNum: 32,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-32",
                                type: 0,
                                rolNum: 28,
                                rowNum: 32,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-32",
                                type: 0,
                                rolNum: 36,
                                rowNum: 32,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-32",
                                type: 0,
                                rolNum: 44,
                                rowNum: 32,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-12-40",
                                type: 0,
                                rolNum: 12,
                                rowNum: 40,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-20-40",
                                type: 0,
                                rolNum: 20,
                                rowNum: 40,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-28-40",
                                type: 0,
                                rolNum: 28,
                                rowNum: 40,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-36-40",
                                type: 0,
                                rolNum: 36,
                                rowNum: 40,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "17-44-40",
                                type: 0,
                                rolNum: 44,
                                rowNum: 40,
                                layerNum: 17,
                                moldType: 1,
                                blockNode: null
                            }],
                            18: [{
                                id: "18-8-8",
                                type: 0,
                                rolNum: 8,
                                rowNum: 8,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-8",
                                type: 0,
                                rolNum: 16,
                                rowNum: 8,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-8",
                                type: 0,
                                rolNum: 24,
                                rowNum: 8,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-8",
                                type: 0,
                                rolNum: 32,
                                rowNum: 8,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-8",
                                type: 0,
                                rolNum: 40,
                                rowNum: 8,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-8",
                                type: 0,
                                rolNum: 48,
                                rowNum: 8,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-8-16",
                                type: 0,
                                rolNum: 8,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-16",
                                type: 0,
                                rolNum: 16,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-16",
                                type: 0,
                                rolNum: 24,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-16",
                                type: 0,
                                rolNum: 32,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-16",
                                type: 0,
                                rolNum: 40,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-16",
                                type: 0,
                                rolNum: 48,
                                rowNum: 16,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-8-32",
                                type: 0,
                                rolNum: 8,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-32",
                                type: 0,
                                rolNum: 16,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-32",
                                type: 0,
                                rolNum: 24,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-32",
                                type: 0,
                                rolNum: 32,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-32",
                                type: 0,
                                rolNum: 40,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-32",
                                type: 0,
                                rolNum: 48,
                                rowNum: 32,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-8-40",
                                type: 0,
                                rolNum: 8,
                                rowNum: 40,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-16-40",
                                type: 0,
                                rolNum: 16,
                                rowNum: 40,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-24-40",
                                type: 0,
                                rolNum: 24,
                                rowNum: 40,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-32-40",
                                type: 0,
                                rolNum: 32,
                                rowNum: 40,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-40-40",
                                type: 0,
                                rolNum: 40,
                                rowNum: 40,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "18-48-40",
                                type: 0,
                                rolNum: 48,
                                rowNum: 40,
                                layerNum: 18,
                                moldType: 1,
                                blockNode: null
                            }],
                            19: [{
                                id: "19-4-4",
                                type: 0,
                                rolNum: 4,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-4",
                                type: 0,
                                rolNum: 12,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-4",
                                type: 0,
                                rolNum: 20,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-4",
                                type: 0,
                                rolNum: 28,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-4",
                                type: 0,
                                rolNum: 36,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-4",
                                type: 0,
                                rolNum: 44,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-52-4",
                                type: 0,
                                rolNum: 52,
                                rowNum: 4,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-4-12",
                                type: 0,
                                rolNum: 4,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-52-12",
                                type: 0,
                                rolNum: 52,
                                rowNum: 12,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-4-36",
                                type: 0,
                                rolNum: 4,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-36",
                                type: 0,
                                rolNum: 12,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-36",
                                type: 0,
                                rolNum: 44,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-52-36",
                                type: 0,
                                rolNum: 52,
                                rowNum: 36,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-4-44",
                                type: 0,
                                rolNum: 4,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-12-44",
                                type: 0,
                                rolNum: 12,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-20-44",
                                type: 0,
                                rolNum: 20,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-28-44",
                                type: 0,
                                rolNum: 28,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-36-44",
                                type: 0,
                                rolNum: 36,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-44-44",
                                type: 0,
                                rolNum: 44,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "19-52-44",
                                type: 0,
                                rolNum: 52,
                                rowNum: 44,
                                layerNum: 19,
                                moldType: 1,
                                blockNode: null
                            }],
                            20: [{
                                id: "20-8-0",
                                type: 0,
                                rolNum: 8,
                                rowNum: 0,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-0",
                                type: 0,
                                rolNum: 16,
                                rowNum: 0,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-0",
                                type: 0,
                                rolNum: 24,
                                rowNum: 0,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-0",
                                type: 0,
                                rolNum: 32,
                                rowNum: 0,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-0",
                                type: 0,
                                rolNum: 40,
                                rowNum: 0,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-0",
                                type: 0,
                                rolNum: 48,
                                rowNum: 0,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-8",
                                type: 0,
                                rolNum: 8,
                                rowNum: 8,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-8",
                                type: 0,
                                rolNum: 16,
                                rowNum: 8,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-8",
                                type: 0,
                                rolNum: 24,
                                rowNum: 8,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-8",
                                type: 0,
                                rolNum: 32,
                                rowNum: 8,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-8",
                                type: 0,
                                rolNum: 40,
                                rowNum: 8,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-8",
                                type: 0,
                                rolNum: 48,
                                rowNum: 8,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-40",
                                type: 0,
                                rolNum: 8,
                                rowNum: 40,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-40",
                                type: 0,
                                rolNum: 16,
                                rowNum: 40,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-40",
                                type: 0,
                                rolNum: 24,
                                rowNum: 40,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-40",
                                type: 0,
                                rolNum: 32,
                                rowNum: 40,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-40",
                                type: 0,
                                rolNum: 40,
                                rowNum: 40,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-40",
                                type: 0,
                                rolNum: 48,
                                rowNum: 40,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-8-48",
                                type: 0,
                                rolNum: 8,
                                rowNum: 48,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-16-48",
                                type: 0,
                                rolNum: 16,
                                rowNum: 48,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-24-48",
                                type: 0,
                                rolNum: 24,
                                rowNum: 48,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-32-48",
                                type: 0,
                                rolNum: 32,
                                rowNum: 48,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-40-48",
                                type: 0,
                                rolNum: 40,
                                rowNum: 48,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "20-48-48",
                                type: 0,
                                rolNum: 48,
                                rowNum: 48,
                                layerNum: 20,
                                moldType: 1,
                                blockNode: null
                            }],
                            21: [{
                                id: "21-4-4",
                                type: 0,
                                rolNum: 4,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-4",
                                type: 0,
                                rolNum: 12,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-4",
                                type: 0,
                                rolNum: 20,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-4",
                                type: 0,
                                rolNum: 28,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-4",
                                type: 0,
                                rolNum: 36,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-4",
                                type: 0,
                                rolNum: 44,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-52-4",
                                type: 0,
                                rolNum: 52,
                                rowNum: 4,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-4-12",
                                type: 0,
                                rolNum: 4,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-12",
                                type: 0,
                                rolNum: 12,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-12",
                                type: 0,
                                rolNum: 20,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-12",
                                type: 0,
                                rolNum: 28,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-12",
                                type: 0,
                                rolNum: 36,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-12",
                                type: 0,
                                rolNum: 44,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-52-12",
                                type: 0,
                                rolNum: 52,
                                rowNum: 12,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-4-36",
                                type: 0,
                                rolNum: 4,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-36",
                                type: 0,
                                rolNum: 12,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-36",
                                type: 0,
                                rolNum: 20,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-36",
                                type: 0,
                                rolNum: 28,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-36",
                                type: 0,
                                rolNum: 36,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-36",
                                type: 0,
                                rolNum: 44,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-52-36",
                                type: 0,
                                rolNum: 52,
                                rowNum: 36,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-4-44",
                                type: 0,
                                rolNum: 4,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-12-44",
                                type: 0,
                                rolNum: 12,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-20-44",
                                type: 0,
                                rolNum: 20,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-28-44",
                                type: 0,
                                rolNum: 28,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-36-44",
                                type: 0,
                                rolNum: 36,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-44-44",
                                type: 0,
                                rolNum: 44,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }, {
                                id: "21-52-44",
                                type: 0,
                                rolNum: 52,
                                rowNum: 44,
                                layerNum: 21,
                                moldType: 1,
                                blockNode: null
                            }]
                        }
                    }
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "b26c8rB87lGJLbil8WuLxJ+", "GameConfig", void 0);
            var vr, kr, Tr, Cr, _r, Sr, Rr, Br, Ir = function() {};
            br = Ir,
            Ir.cardGameAnimation = .13,
            Ir.cardMoveTime = br.cardGameAnimation,
            Ir.cardMergeHideTime = br.cardGameAnimation,
            Ir.cardRearrangeTime = br.cardGameAnimation,
            Ir.cardMoveGapTime = .05,
            o._RF.pop(),
            o._RF.push({}, "d8ca0PohkNDErk4EihvXwYi", "GameMap", void 0);
            var Pr, Fr, Er, Mr, Dr, Lr, Ar, xr, zr, Gr, Or, Hr, Ur, Vr, Wr, qr, jr, Jr, Xr, Zr, Yr, Kr, Qr, $r = u.ccclass, en = u.property, tn = (vr = $r("GameMap"),
            kr = en(c),
            Tr = en(c),
            vr(((Br = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "cardPrefab", Sr, ye(t)),
                    fe(t, "guideItemPrefab", Rr, ye(t)),
                    t.guideNode = null,
                    t.curMapData = new Map,
                    t.totalCount = 0,
                    t.guideCards = [],
                    t.currentMap = null,
                    t.isShuffleError = !1,
                    t.newGameCardCount = 0,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.loadBg = function() {
                    var e = this
                      , o = this.node.getComponent(v);
                    if (o) {
                        var i = Je.getGameMapBgSpriteName();
                        Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_bg/game_bg_border", i, (function(i, r) {
                            i ? t.error(i) : We.isValid(e.node) && (o.spriteFrame = r)
                        }
                        ))
                    }
                }
                ,
                i.start = function() {
                    e.prototype.start.call(this),
                    ne.on(le.RefreshGameMap, this.onRefreshGameMap, this),
                    ne.on(le.GameCardClick, this.onCardClick, this)
                }
                ,
                i.onDestroy = function() {
                    ne.off(le.RefreshGameMap, this.onRefreshGameMap, this),
                    ne.off(le.GameCardClick, this.onCardClick, this)
                }
                ,
                i.getCurTopLayer = function() {
                    var e = -1;
                    return this.node.children.forEach((function(t) {
                        var o = t.getComponent(fr);
                        o && Ai.getCardLayer(o.cardInfo) > e && (e = Ai.getCardLayer(o.cardInfo))
                    }
                    )),
                    e
                }
                ,
                i.hideTopLayer = function() {
                    return this.hideLayer(this.getCurTopLayer())
                }
                ,
                i.hideLayer = function(e) {
                    var t = this
                      , o = this.getLayerCards(e);
                    return o.forEach((function(o) {
                        var i = Ai.getCardX(o.cardInfo)
                          , r = Ai.getCardY(o.cardInfo);
                        t.curMapData.get(e).get(r).delete(i),
                        o.node.removeFromParent()
                    }
                    )),
                    o
                }
                ,
                i.getLayerCards = function(e) {
                    var t = [];
                    return this.node.children.forEach((function(o) {
                        var i = o.getComponent(fr)
                          , r = Ai.getCardLayer(i.cardInfo);
                        i && r == e && t.push(i)
                    }
                    )),
                    t
                }
                ,
                i.isSameLayer = function(e) {
                    for (var t = Ai.getCardLayer(e[0].cardInfo), o = 0; o < e.length; o++) {
                        var i = e[o];
                        if (Ai.getCardLayer(i.cardInfo) != t)
                            return !1
                    }
                    return !0
                }
                ,
                i.findEditLayerCards = function(e, t) {
                    void 0 === t && (t = !0);
                    var o = Ai.getCardLayer(e[0].cardInfo)
                      , i = [];
                    return this.node.children.forEach((function(r) {
                        var n = r.getComponent(fr);
                        n && Ai.getCardLayer(n.cardInfo) == o && (t ? e.indexOf(n) < 0 && i.push(n) : i.push(n))
                    }
                    )),
                    i
                }
                ,
                i.findEditCards = function() {
                    var e = [];
                    return this.node.children.forEach((function(t) {
                        var o = t.getComponent(fr);
                        o && o.isActiveEdit() && e.push(o)
                    }
                    )),
                    e
                }
                ,
                i.resetEditCards = function() {
                    this.findEditCards().forEach((function(e) {
                        e.resetEdit()
                    }
                    ))
                }
                ,
                i.delCardInCurMapData = function(e) {
                    var t = Ai.getCardLayer(e.cardInfo)
                      , o = Ai.getCardX(e.cardInfo)
                      , i = Ai.getCardY(e.cardInfo);
                    this.curMapData.get(t).get(i).delete(o)
                }
                ,
                i.updateCardInCurMapInfo = function(e) {
                    var t = Ai.getCardLayer(e.cardInfo)
                      , o = Ai.getCardX(e.cardInfo)
                      , i = Ai.getCardY(e.cardInfo)
                      , r = this.curMapData.get(t);
                    r.has(i) || r.set(i, new Map),
                    r.get(i).set(o, t + "-" + i + "-" + o)
                }
                ,
                i.showLayer = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.node.addChild(e.node);
                        var o = Ai.getCardLayer(e.cardInfo)
                          , i = Ai.getCardX(e.cardInfo)
                          , r = Ai.getCardY(e.cardInfo);
                        t.curMapData.get(o).get(r).set(i, e.cardInfo.id)
                    }
                    ))
                }
                ,
                i.checkGuide = function(e) {
                    if (this.guideNode)
                        if (this.guideCards.length <= 0)
                            this.maybeHideGuide() || this.updateGuideNodePos();
                        else {
                            for (var t = -1, o = 0; o < this.guideCards.length; o++) {
                                if (this.guideCards[o] === e) {
                                    t = o;
                                    break
                                }
                            }
                            t >= 0 ? this.guideCards.splice(t, 1) : this.guideCards.splice(0, 1),
                            this.maybeHideGuide() || this.updateGuideNodePos()
                        }
                }
                ,
                i.onCardClick = function(e) {
                    this.checkGuide(e);
                    var t = Ai.getCardLayer(e.cardInfo)
                      , o = Ai.getCardX(e.cardInfo)
                      , i = Ai.getCardY(e.cardInfo);
                    this.curMapData.get(t).get(i).delete(o)
                }
                ,
                i.onRefreshGameMap = function(e) {
                    this.refreshCardCover()
                }
                ,
                i.reduceCard = function() {
                    var e = this
                      , t = new Map;
                    this.node.children.forEach((function(e) {
                        var o = e.getComponent(fr);
                        if (o) {
                            var i = o.cardInfo.img_type;
                            t.get("" + i) || t.set("" + i, []),
                            t.get("" + i).push(o)
                        }
                    }
                    ));
                    var o = 0;
                    t.forEach((function(e, t) {
                        e && e.length % 3 == 0 && (o += e.length / 3)
                    }
                    ));
                    var i = Math.floor(o / 2);
                    if (i <= 6)
                        return 0;
                    var r = 0;
                    return t.forEach((function(t, o) {
                        t && t.length % 3 == 0 && r <= i && (r += t.length / 3,
                        t.forEach((function(t) {
                            t.node.removeFromParent(),
                            e.delCardInCurMapData(t)
                        }
                        )))
                    }
                    )),
                    r
                }
                ,
                i.getRemainCount = function() {
                    return this.node.children.length
                }
                ,
                i.getTotalCount = function() {
                    return this.totalCount
                }
                ,
                i.guideKey = function() {
                    return "is_showed_guide"
                }
                ,
                i.maybeShowGuide = function() {
                    if (1 != Ze.inst.getConfigNumber(this.guideKey()) && !this.guideNode) {
                        var e = this.getShowedSameCards();
                        !e || e.length < 3 || (this.guideNode = b(this.guideItemPrefab),
                        this.node.addChild(this.guideNode),
                        e && e.length > 0 && (this.guideCards = e),
                        this.updateGuideNodePos(),
                        o.inGuideMode = !0,
                        ne.emit(le.ShowGuide))
                    }
                }
                ,
                i.maybeHideGuide = function() {
                    return (!this.guideCards || 0 == this.guideCards.length) && (Ze.inst.setConfigNumber(this.guideKey(), 1),
                    o.inGuideMode = !1,
                    ne.emit(le.HideGuide),
                    this.guideNode && this.guideNode.parent && this.guideNode.removeFromParent(),
                    this.guideNode = null,
                    !0)
                }
                ,
                i.updateGuideNodePos = function() {
                    if (this.guideCards && 0 != this.guideCards.length) {
                        var e = this.guideCards[0].node.getPosition();
                        e.x += 50,
                        this.guideNode.setPosition(e)
                    }
                }
                ,
                i.getShowedSameCards = function() {
                    for (var e = new Map, t = this.node.children, o = t.length - 1; o >= 0; o--) {
                        var i = t[o].getComponent(fr);
                        if (i && i.isShowed()) {
                            var r = i.cardInfo.img_type;
                            if (e.get(r) || e.set(r, []),
                            e.get(r).push(i),
                            e.get(r).length >= 3)
                                return e.get(r)
                        }
                    }
                    return null
                }
                ,
                i.refreshCardsPos = function(e) {
                    e.forEach((function(e) {
                        e.node.setPosition(Xi.getCardPos(e.cardInfo))
                    }
                    ))
                }
                ,
                i.getMapCardInfo = function() {
                    var e = new Map;
                    return this.node.children.forEach((function(t) {
                        var o = t.getComponent(fr);
                        if (o) {
                            var i = o.cardInfo.img_type
                              , r = e[i];
                            ze.isNull(r) ? e[i] = 1 : e[i] = r + 1
                        }
                    }
                    )),
                    e
                }
                ,
                i.checkMapValid = function(e) {
                    var t = !0
                      , o = 0;
                    return e.forEach((function(e, i) {
                        e % 3 != 0 && (t = !1,
                        o = i)
                    }
                    )),
                    {
                        isValid: t,
                        errorType: o
                    }
                }
                ,
                i.initByMapInfo = function(e, i) {
                    var r = this;
                    void 0 === i && (i = !1),
                    this.currentMap = e,
                    ne.emit(le.HideGuide),
                    o.inGuideMode = !1,
                    this.clear();
                    var n = e.LevelData
                      , l = null;
                    if (i) {
                        var a = e.TypeData;
                        for (var u in l = [],
                        a)
                            for (var s = 3 * a[u], c = 0; c < s; c++)
                                l.push(u);
                        Xi.shuffle(l)
                    }
                    for (var d = Object.keys(n).length, m = 0, p = function(e) {
                        n["" + e].forEach((function(t) {
                            r.curMapData.has(e) || r.curMapData.set(e, new Map);
                            var o = r.curMapData.get(e)
                              , n = Ai.getCardY(t);
                            o.has(n) || o.set(n, new Map);
                            var a = Ai.getCardX(t);
                            o.get(n).set(a, e + "-" + n + "-" + a),
                            Ai.setCardLayer(t, e),
                            t.isShow = !1,
                            i && l && m < l.length && (t.img_type = l[m]);
                            var u = r.getGameCardFromPool()
                              , s = u.node;
                            s.setPosition(Xi.getCardPos(t)),
                            u.setCardInfo(t),
                            r.node.addChild(s),
                            m++
                        }
                        ))
                    }, h = 1; h <= d; h++)
                        p(h);
                    this.totalCount = this.node.children.length,
                    this.refreshCardCover(),
                    t.log("cardNum: " + m),
                    i && t.log("cards size = " + l.length),
                    this.maybeShowGuide()
                }
                ,
                i.clear = function() {
                    var e = this;
                    this.isShuffleError = !1,
                    this.guideCards = [],
                    this.guideNode = null,
                    this.node.children.forEach((function(t) {
                        e.putGameCard2Pool(t.getComponent(fr))
                    }
                    )),
                    this.node.removeAllChildren(),
                    this.curMapData.clear(),
                    this.totalCount = 0
                }
                ,
                i.init = function(e, o) {
                    var i = this;
                    void 0 === e && (e = !1),
                    void 0 === o && (o = null),
                    this.currentMap = o,
                    this.clear();
                    var r = null;
                    if (e)
                        r = wr.getInitMapData();
                    else {
                        var n = Ye.random(10);
                        n % 3 == 0 ? r = wr.getMap01() : n % 3 == 1 ? r = wr.getMap02() : n % 3 == 2 && (r = wr.getMap03())
                    }
                    var l = (r = o).levelData
                      , a = r.blockTypeData
                      , u = [];
                    for (var s in a)
                        for (var c = 3 * a[s], d = 0; d < c; d++)
                            u.push(s);
                    var m = Object.keys(l).length;
                    Xi.shuffle(u);
                    for (var p = 0, h = function(e) {
                        l["" + e].forEach((function(t) {
                            i.curMapData.has(e) || i.curMapData.set(e, new Map);
                            var o = i.curMapData.get(e)
                              , r = Ai.getCardY(t);
                            o.has(r) || o.set(r, new Map);
                            var n = Ai.getCardX(t);
                            o.get(r).set(n, e + "-" + r + "-" + n),
                            t.img_type = u[p],
                            Ai.setCardLayer(t, e),
                            t.isShow = !1;
                            var l = b(i.cardPrefab);
                            l.setPosition(Xi.getCardPos(t)),
                            l.getComponent(fr).setCardInfo(t),
                            i.node.addChild(l),
                            p++
                        }
                        ))
                    }, y = 1; y <= m; y++)
                        h(y);
                    this.totalCount = this.node.children.length,
                    this.refreshCardCover(),
                    t.log("cardNum: " + p)
                }
                ,
                i.refreshCardCover = function() {
                    for (var e = this.node.children, t = e.length - 1; t >= 0; t--) {
                        var o = e[t].getComponent(fr);
                        o && (o.cardInfo.isShow = Xi.isShow(this.curMapData, o.cardInfo),
                        o.refreshCover())
                    }
                }
                ,
                i.shuffle = function(e) {
                    void 0 === e && (e = []),
                    t.log("shuffle");
                    var o = !e || e.length <= 0
                      , i = new Map
                      , r = new Map;
                    if (!o)
                        for (var n in e.forEach((function(e) {
                            var t = i[e.cardInfo.img_type];
                            ze.isNull(t) ? i[e.cardInfo.img_type] = 1 : i[e.cardInfo.img_type] = t + 1
                        }
                        )),
                        i)
                            r[n] = 3 - i[n];
                    this.node.children.length;
                    var l = []
                      , a = []
                      , u = [];
                    this.node.children.forEach((function(e) {
                        var t = e.getComponent(fr);
                        if (t) {
                            t.isShowed() && l.push(t);
                            var i = t.cardInfo.img_type;
                            o && (o = !1,
                            r[i] = 3);
                            var n = r[i];
                            !ze.isNull(n) && n > 0 ? (r[i] = n - 1,
                            a.push(i)) : u.push(i)
                        }
                    }
                    )),
                    Xi.shuffle(u);
                    var s = 0;
                    if (l.length >= a.length) {
                        for (var c = 0; c < a.length; c++) {
                            var d = a[c];
                            l[c].updateImageType(d)
                        }
                        l.length != a.length && l.splice(a.length, l.length - a.length),
                        a = []
                    } else {
                        a = Xi.sameValueTogether(a);
                        for (var m = function(e) {
                            if (!e || e.length <= 0)
                                return -1;
                            if (1 == e.length)
                                return 0;
                            for (var t = 0; t < e.length; t++) {
                                var o = e[t]
                                  , i = e.lastIndexOf(o)
                                  , r = e.indexOf(o);
                                if (i == t && r == t)
                                    return t
                            }
                            return -1
                        }, p = 0; p < l.length; p++) {
                            var h = m(a);
                            h < 0 && (h = 0);
                            var y = a[h];
                            l[p].updateImageType(y),
                            a.splice(h, 1)
                        }
                        a.length > 0 && u.push.apply(u, a),
                        a = []
                    }
                    for (var N = this.node.children, g = 0; g < N.length; g++) {
                        var f = N[g].getComponent(fr);
                        if (!(l.indexOf(f) >= 0) && f)
                            if (s < u.length) {
                                var b = u[s];
                                f.updateImageType(b),
                                s++
                            } else
                                this.isShuffleError = !0,
                                qe.statErrorMap({
                                    pending_cards_count: e ? e.length : 0,
                                    show_cards_count: l.length,
                                    keep_cards_count: a.length,
                                    cards_count: u.length,
                                    total_cards_count: N.length
                                })
                    }
                }
                ,
                i.rollback = function(e, o) {
                    void 0 === o && (o = null),
                    t.log("rollback");
                    var i = this.getWorldPos(e.node)
                      , r = this.convertWorldPos2LocalPos(this.node, i);
                    e.node.removeFromParent(),
                    this.node.addChild(e.node),
                    e.node.setPosition(r),
                    e.state = gr.Normal,
                    this.curMapData.get(Ai.getCardLayer(e.cardInfo)).get(Ai.getCardY(e.cardInfo)).set(Ai.getCardX(e.cardInfo), e.cardInfo.id),
                    this.refreshCardCover(),
                    Nt.animationToPos(e.node, e.mapPos, Ir.cardMoveTime, (function() {
                        e.setMapSlideIndex(),
                        e.enableClick(!0)
                    }
                    )),
                    o && o()
                }
                ,
                i.move = function() {
                    t.log("move")
                }
                ,
                i.putGameCard2Pool = function(e) {
                    Xi.putGameCard2Pool(e)
                }
                ,
                i.getGameCardFromPool = function() {
                    var e = Xi.getGameCardFromPool();
                    return e || (e = b(this.cardPrefab).getComponent(fr),
                    this.newGameCardCount++),
                    e
                }
                ,
                o
            }(Wt)).inGuideMode = !1,
            Br.guideCheckClick = null,
            Sr = be((_r = Br).prototype, "cardPrefab", [kr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Rr = be(_r.prototype, "guideItemPrefab", [Tr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Cr = _r)) || Cr);
            o._RF.pop(),
            o._RF.push({}, "9c6d5kUM0RApq2C05mHaIVL", "GameMergeSpace", void 0);
            var on, rn, nn, ln, an, un, sn, cn, dn, mn, pn, hn, yn, Nn, gn, fn, bn, wn, vn, kn, Tn, Cn, _n, Sn, Rn, Bn, In, Pn, Fn, En, Mn, Dn, Ln, An = u.ccclass, xn = u.property, zn = (Pr = An("GameMergeSpace"),
            Fr = xn(T),
            Er = xn(H),
            Mr = xn(H),
            Dr = xn(H),
            Lr = xn(H),
            Ar = xn(H),
            xr = xn(H),
            zr = xn(T),
            Gr = xn(T),
            Or = xn(T),
            Pr((Vr = be((Ur = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "bgNode", Vr, ye(t)),
                    fe(t, "startX", Wr, ye(t)),
                    fe(t, "gapX", qr, ye(t)),
                    fe(t, "movedStartX", jr, ye(t)),
                    fe(t, "movedGapX", Jr, ye(t)),
                    fe(t, "bucketMaxCount", Xr, ye(t)),
                    fe(t, "movedMaxCount", Zr, ye(t)),
                    fe(t, "bucketNode", Yr, ye(t)),
                    fe(t, "movedNode", Kr, ye(t)),
                    fe(t, "boomNode", Qr, ye(t)),
                    t.addCards = [],
                    t.bucketEmptySpace = t.bucketMaxCount,
                    t.isGameOver = !1,
                    t.mergeCount = 0,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.loadBg = function() {
                    var e = this
                      , o = this.bgNode.getComponent(v);
                    if (o) {
                        var i = Je.getGameMergeBgSpriteName();
                        Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_bg/game_bg_border", i, (function(i, r) {
                            i ? t.error(i) : We.isValid(e.node) && (o.spriteFrame = r)
                        }
                        ))
                    }
                }
                ,
                i.start = function() {
                    e.prototype.start.call(this),
                    ne.on(le.GameCardClick, this.onCardClick, this),
                    this.init()
                }
                ,
                i.setGameRelive = function() {
                    this.isGameOver = !1
                }
                ,
                i.boom = function(e, o, i) {
                    if (void 0 === o && (o = 3),
                    void 0 === i && (i = null),
                    e < 0)
                        t.log("boom start < 0");
                    else {
                        var r = this.boomNode.children;
                        if (1 == o && e < r.length) {
                            var n = r[e].getComponentInChildren(To);
                            n && n.play(i)
                        } else
                            for (var l = e; l < e + o && l < r.length; l++) {
                                var a = r[l].getComponentInChildren(To);
                                a && a.play(i)
                            }
                    }
                }
                ,
                i.getGameCards = function() {
                    var e = this.bucketNode.children.map((function(e) {
                        return e.getComponent(fr)
                    }
                    ))
                      , t = this.movedNode.children.map((function(e) {
                        return e.getComponent(fr)
                    }
                    ));
                    return e.concat(t)
                }
                ,
                i.getMergeCount = function() {
                    return this.mergeCount
                }
                ,
                i.recycleGameCards = function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.putGameCard2Pool(e.getComponent(fr))
                    }
                    ))
                }
                ,
                i.init = function() {
                    this.recycleGameCards(this.bucketNode.children),
                    this.recycleGameCards(this.movedNode.children),
                    this.addCards = [],
                    this.bucketNode.removeAllChildren(),
                    this.movedNode.removeAllChildren(),
                    this.bucketEmptySpace = this.bucketMaxCount,
                    this.isGameOver = !1,
                    this.mergeCount = 0
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy.call(this),
                    ne.off(le.GameCardClick, this.onCardClick, this)
                }
                ,
                i.onCardClick = function(e) {
                    this.isGameOver ? t.log("game over") : (this.addCard(e),
                    e.enableClick(!1),
                    ne.emit(le.RefreshGameMap, e))
                }
                ,
                i.hasRollbackCard = function() {
                    return this.addCards.length > 0
                }
                ,
                i.popRollbackCard = function() {
                    return this.addCards.length <= 0 ? null : this.addCards.pop()
                }
                ,
                i.addCard = function(e) {
                    var o = this
                      , i = e.node
                      , r = this.getGameCardInitPos(e)
                      , n = this.findMaxSameCardIndex(e);
                    i.setPosition(r),
                    i.removeFromParent(),
                    n < 0 ? this.bucketNode.addChild(i) : this.bucketNode.insertChild(i, n + 1),
                    e.indexOfParent = this.bucketNode.children.indexOf(i),
                    this.addCards.push(e),
                    e.state == gr.InMovedBucket && this.rearrangeCards(this.movedStartX, this.movedGapX, this.movedNode.children),
                    e.state = gr.InMergeBucket;
                    var l = this.findSameCards()
                      , a = l.length - (l = l.filter((function(e) {
                        return !e.pendingHide
                    }
                    ))).length;
                    a > 0 && t.logE("pendingSize = " + a),
                    l.forEach((function(e) {
                        e.pendingHide = !0
                    }
                    )),
                    l.forEach((function(e) {
                        o.addCards.splice(o.addCards.indexOf(e), 1)
                    }
                    )),
                    this.bucketEmptySpace = this.bucketMaxCount - this.getBucketCardNormalCount(),
                    this.moveCardToBucket(e, (function() {
                        o.mergeSameCards(l, (function() {}
                        )),
                        o.bucketEmptySpace <= 0 && ne.emit(le.GameShowRelive)
                    }
                    )),
                    this.bucketEmptySpace <= 0 && (this.isGameOver = !0)
                }
                ,
                i.getBucketCardNormalCount = function() {
                    var e = 0;
                    return this.bucketNode.children.forEach((function(t) {
                        var o = t.getComponent(fr);
                        o && !o.pendingHide && e++
                    }
                    )),
                    e
                }
                ,
                i.getNormalCardCount = function() {
                    return this.bucketNode.children.length
                }
                ,
                i.getMovedCardRemainCount = function() {
                    return this.movedMaxCount - this.movedNode.children.length
                }
                ,
                i.getAllCards = function() {
                    return this.bucketNode.children.map((function(e) {
                        return e.getComponent(fr)
                    }
                    )).concat(this.movedNode.children.map((function(e) {
                        return e.getComponent(fr)
                    }
                    )))
                }
                ,
                i.getBucketCardCount = function() {
                    return this.bucketNode.children.length + this.movedNode.children.length
                }
                ,
                i.moveCardToBucket = function(e, t) {
                    void 0 === t && (t = null);
                    var o = this.getGameCardEndPos(e)
                      , i = o[0]
                      , r = o[1];
                    e.mergeSpaceTargetPos = i,
                    Nt.animationToPos(e.node, i, Ir.cardMoveTime, (function() {
                        t && t()
                    }
                    )),
                    this.mayRearrangeBucketNodes(r)
                }
                ,
                i.getGameCardInitPos = function(e) {
                    var t = this.getWorldPos(e.node);
                    return this.convertWorldPos2LocalPos(this.bucketNode, t)
                }
                ,
                i.getGameCardEndPos = function(e) {
                    var t = this.findMaxSameCardIndex(e);
                    if (t < 0) {
                        var o = this.bucketNode.children.length;
                        return [new a(this.startX + (o - 1) * this.gapX,0,0), o]
                    }
                    return [new a(this.startX + (t + 1) * this.gapX,0,0), t + 1]
                }
                ,
                i.findMaxSameCardIndex = function(e) {
                    for (var t = this.bucketNode.children, o = t.length - 1; o >= 0; o--) {
                        var i = t[o].getComponent(fr);
                        if (null != i && e != i && e.cardInfo.img_type == i.cardInfo.img_type)
                            return o
                    }
                    return -1
                }
                ,
                i.mayRearrangeBucketNodes = function(e) {
                    if (!(e < 0)) {
                        var t = this.bucketNode.children;
                        if (e + 1 < t.length)
                            for (var o = e + 1; o < t.length; o++) {
                                var i = t[o]
                                  , r = i.getPosition()
                                  , n = i.getComponent(fr).mergeSpaceTargetPos
                                  , l = new a(this.startX + o * this.gapX,n.y,r.z);
                                Nt.animationToPos(i, l, Ir.cardRearrangeTime)
                            }
                    }
                }
                ,
                i.findSameCards = function() {
                    for (var e = this.bucketNode.children, t = [], o = 0; o < e.length - 2; ) {
                        var i = e[o].getComponent(fr)
                          , r = e[o + 1].getComponent(fr)
                          , n = e[o + 2].getComponent(fr);
                        i.indexOfParent = o,
                        r.indexOfParent = o + 1,
                        n.indexOfParent = o + 2,
                        i && r && n && i.cardInfo.img_type === r.cardInfo.img_type && r.cardInfo.img_type === n.cardInfo.img_type ? (t.push(i, r, n),
                        o += 3) : o++
                    }
                    return t
                }
                ,
                i.mergeSameCards = function(e, t) {
                    var o = this;
                    if (void 0 === t && (t = null),
                    e.length <= 0)
                        t && t();
                    else
                        for (var i = function(i) {
                            var r = e[i];
                            (i + 1) % 3 == 0 && (o.mergeCount += 1,
                            ne.emit(le.GameScoreChange, r)),
                            Nt.uiOpacityAnimationSampleHide(r.node, Ir.cardMergeHideTime, 0, (function() {
                                o.bucketNode.removeChild(r.node),
                                i == e.length - 1 && (o.rearrangeCards(o.startX, o.gapX, o.bucketNode.children, (function() {
                                    var t = e[0];
                                    o.boom(t.indexOfParent, e.length),
                                    e.forEach((function(e) {
                                        o.putGameCard2Pool(e)
                                    }
                                    ))
                                }
                                )),
                                ne.emit(le.RefreshProgressBar),
                                o.getBucketCardCount() <= 0 && ne.emit(le.CheckGameResult),
                                t && t())
                            }
                            ))
                        }, r = 0; r < e.length; r++)
                            i(r)
                }
                ,
                i.rearrangeCards = function(e, t, o, i) {
                    if (void 0 === i && (i = null),
                    !o || o.length <= 0)
                        i && i();
                    else
                        for (var r = o.length, n = function(n) {
                            var l = o[n]
                              , u = l.getComponent(fr).mergeSpaceTargetPos
                              , s = new a(e + n * t,u.y,u.z);
                            Nt.animationToPos(l, s, Ir.cardRearrangeTime, (function() {
                                n == r - 1 && i && i()
                            }
                            ))
                        }, l = 0; l < o.length; l++)
                            n(l)
                }
                ,
                i.moveCard = function(e, o) {
                    var i = this;
                    if (void 0 === e && (e = null),
                    void 0 === o && (o = 0),
                    t.log("moveCard"),
                    this.bucketNode.children.length <= 0)
                        return t.log("bucketNode.children.length <= 0"),
                        void si.showToast("没有可移除的卡片哦～");
                    var r = this.movedNode.children.length + o;
                    o <= 0 && (r = this.movedMaxCount);
                    var n = r - this.movedNode.children.length;
                    if (n <= 0)
                        return si.showToast("临时区已满～"),
                        void t.log("canMoveCount <= 0");
                    for (var l = [].concat(this.bucketNode.children), u = function() {
                        var e = l[s]
                          , t = e.getComponent(fr)
                          , o = i.addCards.indexOf(t);
                        o >= 0 && i.addCards.splice(o, 1);
                        var r = e.getPosition()
                          , n = new a(i.movedStartX + i.movedNode.children.length * i.movedGapX,r.y,r.z)
                          , u = i.getWorldPos(e)
                          , c = i.convertWorldPos2LocalPos(i.movedNode, u);
                        e.removeFromParent(),
                        i.movedNode.addChild(e),
                        e.setPosition(c),
                        e.getComponent(fr).state = gr.InMovedBucket,
                        Nt.animationToPos(e, n, Ir.cardMoveGapTime, (function() {
                            e.getComponent(fr).enableClick(!0)
                        }
                        ))
                    }, s = 0; s < l.length && s < n; s++)
                        u();
                    this.rearrangeCards(this.startX, this.gapX, this.bucketNode.children),
                    e && e()
                }
                ,
                i.putGameCard2Pool = function(e) {
                    Xi.putGameCard2Pool(e)
                }
                ,
                o
            }(Wt)).prototype, "bgNode", [Fr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Wr = be(Ur.prototype, "startX", [Er], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            qr = be(Ur.prototype, "gapX", [Mr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            jr = be(Ur.prototype, "movedStartX", [Dr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            Jr = be(Ur.prototype, "movedGapX", [Lr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            Xr = be(Ur.prototype, "bucketMaxCount", [Ar], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 7
                }
            }),
            Zr = be(Ur.prototype, "movedMaxCount", [xr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 3
                }
            }),
            Yr = be(Ur.prototype, "bucketNode", [zr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Kr = be(Ur.prototype, "movedNode", [Gr], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Qr = be(Ur.prototype, "boomNode", [Or], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Hr = Ur)) || Hr);
            o._RF.pop(),
            o._RF.push({}, "25943RuNwhBArhEaJGbLTFJ", "SettingDialog", void 0);
            var Gn, On, Hn, Un, Vn, Wn, qn, jn, Jn, Xn, Zn, Yn, Kn, Qn, $n, el, tl, ol, il, rl, nl, ll, al, ul, sl, cl, dl, ml, pl, hl = u.ccclass, yl = u.property, Nl = function(e) {
                return e[e.Setting = 0] = "Setting",
                e[e.Pause = 1] = "Pause",
                e
            }({});
            on = hl("SettingDialog"),
            rn = yl(T),
            nn = yl(T),
            ln = yl(v),
            an = yl(T),
            un = yl(T),
            sn = yl(T),
            cn = yl(h),
            dn = yl(h),
            mn = yl(li),
            pn = yl(li),
            hn = yl(li),
            yn = yl(T),
            Nn = yl(T),
            gn = yl(H),
            fn = yl(H),
            on((vn = be((wn = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "rootNode", vn, ye(t)),
                    fe(t, "closeNode", kn, ye(t)),
                    fe(t, "titleSprite", Tn, ye(t)),
                    fe(t, "musicNode", Cn, ye(t)),
                    fe(t, "soundNode", _n, ye(t)),
                    fe(t, "vibrateNode", Sn, ye(t)),
                    fe(t, "pauseSpriteFrame", Rn, ye(t)),
                    fe(t, "settingsSpriteFrame", Bn, ye(t)),
                    fe(t, "musicSwitch", In, ye(t)),
                    fe(t, "soundSwitch", Pn, ye(t)),
                    fe(t, "viberateSwitch", Fn, ye(t)),
                    fe(t, "giveUpBtnNode", En, ye(t)),
                    fe(t, "continueBtnNode", Mn, ye(t)),
                    fe(t, "settingsHeight", Dn, ye(t)),
                    fe(t, "pauseHeight", Ln, ye(t)),
                    t.hideCallback = null,
                    t._type = Nl.Setting,
                    t.emitGiveUp = !1,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    this.musicSwitch.onValueChanged = function(e) {
                        yi.playClick(),
                        Ze.inst.musicOn = e,
                        t.log("musicOn: " + e),
                        ne.emit(le.GameMusicOnChanged, e)
                    }
                    ,
                    this.soundSwitch.onValueChanged = function(e) {
                        Ze.inst.soundOn = e,
                        yi.playClick(),
                        t.log("soundOn: " + e)
                    }
                    ,
                    this.viberateSwitch.onValueChanged = function(e) {
                        yi.playClick(),
                        Ze.inst.viberateOn = e,
                        t.log("viberateOn: " + e)
                    }
                }
                ,
                i.update = function(e) {}
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.emitGiveUp = !1,
                    t.log("on_will_show " + Ze.inst.musicOn + " " + Ze.inst.soundOn + " " + Ze.inst.viberateOn);
                    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    this._type = i && i.length > 0 ? i[0] : Nl.Setting,
                    this.musicSwitch.on = Ze.inst.musicOn,
                    this.soundSwitch.on = Ze.inst.soundOn,
                    this.viberateSwitch.on = Ze.inst.viberateOn,
                    this.updateRootNodeHgiht()
                }
                ,
                i.updateRootNodeHgiht = function() {
                    var e = this._type == Nl.Setting;
                    this.rootNode.getComponent(_).height = e ? this.settingsHeight : this.pauseHeight,
                    this.giveUpBtnNode.active = !e,
                    this.continueBtnNode.active = !e,
                    this.closeNode.active = e,
                    this.titleSprite.spriteFrame = e ? this.settingsSpriteFrame : this.pauseSpriteFrame,
                    this.updateWidget(this.closeNode),
                    this.updateWidget(this.titleSprite),
                    this.updateWidget(this.musicNode),
                    this.updateWidget(this.soundNode),
                    this.updateWidget(this.vibrateNode),
                    this.updateWidget(this.giveUpBtnNode)
                }
                ,
                i.updateWidget = function(e) {
                    var t = e.getComponent(V);
                    t && t.updateAlignment()
                }
                ,
                i.on_show = function() {}
                ,
                i.hide = function() {
                    yi.playClick(),
                    e.prototype.hide.call(this)
                }
                ,
                i.onClickGiveUp = function() {
                    t.log("onClickGiveUp"),
                    yi.playClick(),
                    this.emitGiveUp = !0,
                    this.hide()
                }
                ,
                i.on_hide = function() {
                    var t = this;
                    e.prototype.on_hide.call(this),
                    this.hideCallback && this.hideCallback(),
                    setTimeout((function() {
                        t.emitGiveUp && ne.emit(le.GameGiveUp)
                    }
                    ), 0)
                }
                ,
                o
            }(bt)).prototype, "rootNode", [rn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            kn = be(wn.prototype, "closeNode", [nn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Tn = be(wn.prototype, "titleSprite", [ln], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Cn = be(wn.prototype, "musicNode", [an], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _n = be(wn.prototype, "soundNode", [un], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Sn = be(wn.prototype, "vibrateNode", [sn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Rn = be(wn.prototype, "pauseSpriteFrame", [cn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Bn = be(wn.prototype, "settingsSpriteFrame", [dn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            In = be(wn.prototype, "musicSwitch", [mn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Pn = be(wn.prototype, "soundSwitch", [pn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Fn = be(wn.prototype, "viberateSwitch", [hn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            En = be(wn.prototype, "giveUpBtnNode", [yn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Mn = be(wn.prototype, "continueBtnNode", [Nn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Dn = be(wn.prototype, "settingsHeight", [gn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            Ln = be(wn.prototype, "pauseHeight", [fn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            bn = wn));
            o._RF.pop(),
            o._RF.push({}, "91baeHwDQNCy6FD0zcLA0Rz", "ToolDialog", void 0);
            var gl, fl, bl, wl, vl, kl, Tl, Cl, _l, Sl, Rl, Bl, Il, Pl, Fl, El, Ml, Dl, Ll, Al = u.ccclass, xl = u.property, zl = function(e) {
                return e[e.remove = 1] = "remove",
                e[e.arrange = 2] = "arrange",
                e[e.rollback = 3] = "rollback",
                e[e.relive = 4] = "relive",
                e
            }({});
            Gn = Al("ToolDialog"),
            On = xl(v),
            Hn = xl(v),
            Un = xl(v),
            Vn = xl(w),
            Wn = xl(v),
            qn = xl(w),
            jn = xl(h),
            Jn = xl(h),
            Xn = xl(h),
            Zn = xl(h),
            Yn = xl(h),
            Kn = xl(h),
            Qn = xl(h),
            Gn((tl = be((el = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "bgSprite", tl, ye(t)),
                    fe(t, "titleSprite", ol, ye(t)),
                    fe(t, "iconSprite", il, ye(t)),
                    fe(t, "textLabel", rl, ye(t)),
                    fe(t, "getSprite", nl, ye(t)),
                    fe(t, "reliveTitleLabel", ll, ye(t)),
                    fe(t, "titleRandomSF", al, ye(t)),
                    fe(t, "titleRollbackSF", ul, ye(t)),
                    fe(t, "titleRemoveSF", sl, ye(t)),
                    fe(t, "titleReliveSF", cl, ye(t)),
                    fe(t, "toolsRandomSF", dl, ye(t)),
                    fe(t, "toolsRollbackSF", ml, ye(t)),
                    fe(t, "toolsRemoveSF", pl, ye(t)),
                    t.type = zl.remove,
                    t.reliveToolsType = zl.remove,
                    t.clickCancel = !1,
                    t.gameProgress = 0,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.update = function(e) {}
                ,
                o.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.clickCancel = !1;
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    var r = o[0];
                    this.type = r,
                    this.gameProgress = o[1],
                    r == zl.relive && (this.reliveToolsType = o[2]),
                    this.updateUI(r)
                }
                ,
                o.updateUI = function(e) {
                    e == zl.relive ? (this.reliveTitleLabel.node.active = !0,
                    this.textLabel.node.active = !1) : (this.reliveTitleLabel.node.active = !1,
                    this.textLabel.node.active = !0),
                    e == zl.rollback ? (this.textLabel.string = "撤回最近的一张牌\n并把他放回到原位置",
                    this.iconSprite.spriteFrame = this.toolsRollbackSF,
                    this.titleSprite.spriteFrame = this.titleRollbackSF) : e == zl.remove ? (this.textLabel.string = "移出三张牌\n并把他们堆放到旁边",
                    this.iconSprite.spriteFrame = this.toolsRemoveSF,
                    this.titleSprite.spriteFrame = this.titleRemoveSF) : e == zl.arrange ? (this.textLabel.string = "随机打乱未使用的所有牌",
                    this.iconSprite.spriteFrame = this.toolsRandomSF,
                    this.titleSprite.spriteFrame = this.titleRandomSF) : e == zl.relive && (this.titleSprite.spriteFrame = this.titleReliveSF,
                    this.reliveToolsType == zl.remove ? (this.reliveTitleLabel.string = "复活并使用移出道具",
                    this.iconSprite.spriteFrame = this.toolsRemoveSF) : this.reliveToolsType == zl.arrange ? (this.reliveTitleLabel.string = "复活并使用打乱道具",
                    this.iconSprite.spriteFrame = this.toolsRandomSF) : this.reliveToolsType == zl.rollback && (this.reliveTitleLabel.string = "复活并使用撤回道具",
                    this.iconSprite.spriteFrame = this.toolsRollbackSF))
                }
                ,
                o.on_hide = function() {
                    e.prototype.on_hide.call(this),
                    this.clickCancel && this.type == zl.relive && ne.emit(le.GameReliveFailed)
                }
                ,
                o.onClickCancel = function() {
                    this.clickCancel = !0,
                    this.hide(!1)
                }
                ,
                o.onClickAD = function() {
                    var e = this;
                    yi.playClick();
                    var t = Le.none;
                    this.type == zl.relive ? t = Le.revive : this.type == zl.remove ? t = Le.moveout : this.type == zl.arrange ? t = Le.shuffle : this.type == zl.rollback && (t = Le.withdraw),
                    Ee.click(Le.clickShowAd, t, me({}, this.getZyToolExtraData())),
                    qe.showRewardAd((function(o) {
                        Ee.click(Le.adbutton, t, me({
                            result: o ? 1 : 0
                        }, e.getZyToolExtraData())),
                        qe.statClick(Le.adbutton, me({
                            prop: t,
                            result: o ? 1 : 0
                        }, e.getZyToolExtraData())),
                        o ? (e.hide(),
                        ne.emit(le.GetToolSuccess, e.type, e.reliveToolsType)) : si.showToast("领取失败, 请按照广告提示操作哦~")
                    }
                    ))
                }
                ,
                o.getZyToolExtraData = function() {
                    return {
                        game_id: Je.currentGameID,
                        level: Je.currentPicId,
                        progress: this.gameProgress
                    }
                }
                ,
                o.hide = function(t) {
                    void 0 === t && (t = !0),
                    yi.playClick(),
                    e.prototype.hide.call(this, t)
                }
                ,
                t
            }(bt)).prototype, "bgSprite", [On], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ol = be(el.prototype, "titleSprite", [Hn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            il = be(el.prototype, "iconSprite", [Un], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            rl = be(el.prototype, "textLabel", [Vn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            nl = be(el.prototype, "getSprite", [Wn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ll = be(el.prototype, "reliveTitleLabel", [qn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            al = be(el.prototype, "titleRandomSF", [jn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ul = be(el.prototype, "titleRollbackSF", [Jn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            sl = be(el.prototype, "titleRemoveSF", [Xn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            cl = be(el.prototype, "titleReliveSF", [Zn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            dl = be(el.prototype, "toolsRandomSF", [Yn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ml = be(el.prototype, "toolsRollbackSF", [Kn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            pl = be(el.prototype, "toolsRemoveSF", [Qn], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            $n = el));
            o._RF.pop(),
            o._RF.push({}, "bbb00MuTLZLRrfYNEKLvopc", "UnlockPicDialog", void 0);
            var Gl, Ol, Hl, Ul, Vl, Wl, ql, jl, Jl, Xl, Zl, Yl, Kl, Ql, $l, ea, ta, oa, ia, ra, na, la, aa, ua, sa, ca, da, ma, pa, ha = u.ccclass, ya = u.property, Na = function(e) {
                return e[e.Unlock = 0] = "Unlock",
                e[e.UnlockAll = 1] = "UnlockAll",
                e
            }({});
            gl = ha("UnlockPicDialog"),
            fl = ya(v),
            bl = ya(T),
            wl = ya(T),
            vl = ya(T),
            kl = ya(v),
            Tl = ya(v),
            Cl = ya(T),
            _l = ya(T),
            gl((Bl = be((Rl = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "avatarSprite", Bl, ye(t)),
                    fe(t, "unlockNode", Il, ye(t)),
                    fe(t, "unlockAllNode", Pl, ye(t)),
                    fe(t, "unlockPicContainerNode", Fl, ye(t)),
                    fe(t, "unlockPicSprite", El, ye(t)),
                    fe(t, "unlockAllPicSprite", Ml, ye(t)),
                    fe(t, "unlockAllRewardNode", Dl, ye(t)),
                    fe(t, "unlockAllPicBgNode", Ll, ye(t)),
                    t.type = Na.Unlock,
                    t.picUrl = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    t.log("Result Dialog start")
                }
                ,
                i.update = function(e) {}
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this);
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    o.length > 0 && (this.type = o[0]),
                    o.length > 1 && (this.picUrl = o[1]),
                    this.updateUI()
                }
                ,
                i.updateUI = function() {
                    this.unlockAllPicBgNode.active = !1,
                    this.unlockAllRewardNode.active = !1,
                    this.type == Na.Unlock ? (this.unlockNode.active = !0,
                    this.unlockAllNode.active = !1,
                    this.unlockAllPicBgNode.active = !1,
                    this.unlockPicContainerNode.setScale(new a(0,0,0)),
                    Ve.loadRemoteSpriteFrame(this.unlockPicSprite, this.picUrl)) : (this.unlockNode.active = !1,
                    this.unlockAllNode.active = !0,
                    this.unlockAllPicBgNode.active = !0,
                    this.unlockAllRewardNode.active = !0,
                    this.unlockAllPicBgNode.setScale(new a(0,0,0)),
                    this.unlockAllRewardNode.setScale(new a(0,0,0)),
                    Ve.loadRemoteSpriteFrame(this.unlockAllPicSprite, this.picUrl))
                }
                ,
                i.delayHide = function(e) {
                    var t = this;
                    void 0 === e && (e = 2),
                    Qe.startTimeout(e, (function() {
                        We.isValid(t.node) && t.hide()
                    }
                    ))
                }
                ,
                i.on_show = function() {
                    this.type == Na.UnlockAll ? (this.unlockAllNode.getComponent(X).play(),
                    Ve.loadRemoteSpriteFrame(this.avatarSprite, qe.getDeviceInfoFromUrl().h_avatarurl),
                    this.delayHide(5)) : (this.unlockPicContainerNode.getComponent(X).play(),
                    this.delayHide())
                }
                ,
                i.on_hide = function() {
                    e.prototype.on_hide.call(this)
                }
                ,
                o
            }(bt)).prototype, "avatarSprite", [fl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Il = be(Rl.prototype, "unlockNode", [bl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Pl = be(Rl.prototype, "unlockAllNode", [wl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Fl = be(Rl.prototype, "unlockPicContainerNode", [vl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            El = be(Rl.prototype, "unlockPicSprite", [kl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ml = be(Rl.prototype, "unlockAllPicSprite", [Tl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Dl = be(Rl.prototype, "unlockAllRewardNode", [Cl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ll = be(Rl.prototype, "unlockAllPicBgNode", [_l], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Sl = Rl));
            o._RF.pop(),
            o._RF.push({}, "c8fd3JuMc9Jb7bCMwDlGWdR", "ResultDialog", void 0);
            var ga, fa, ba, wa, va, ka, Ta, Ca = u.ccclass, _a = u.property, Sa = function(e) {
                return e[e.failed = 1] = "failed",
                e[e.passed = 2] = "passed",
                e
            }({});
            Gl = Ca("ResultDialog"),
            Ol = _a(T),
            Hl = _a(T),
            Ul = _a(w),
            Vl = _a(T),
            Wl = _a([fr]),
            ql = _a([w]),
            jl = _a(T),
            Jl = _a(T),
            Xl = _a(w),
            Zl = _a(T),
            Yl = _a(T),
            Kl = _a([T]),
            Ql = _a([v]),
            Gl((ta = be((ea = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "titleSuccessNode", ta, ye(t)),
                    fe(t, "titleFailedNode", oa, ye(t)),
                    fe(t, "titleFailedDescLabel", ia, ye(t)),
                    fe(t, "contentNode", ra, ye(t)),
                    fe(t, "gameCardList", na, ye(t)),
                    fe(t, "gameCardCountLabelList", la, ye(t)),
                    fe(t, "eggContainerNode", aa, ye(t)),
                    fe(t, "eggEmptyNode", ua, ye(t)),
                    fe(t, "scoreLabel", sa, ye(t)),
                    fe(t, "newRecordNode", ca, ye(t)),
                    fe(t, "rewardGoodsContainerNode", da, ye(t)),
                    fe(t, "rewardGoodsNodeList", ma, ye(t)),
                    fe(t, "rewardGoodsSpriteList", pa, ye(t)),
                    t.isBack = !1,
                    t.isPlayAgain = !1,
                    t.type = Sa.failed,
                    t.gameResult = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    t.log("Result Dialog start")
                }
                ,
                i.update = function(e) {}
                ,
                i.reset = function() {
                    this.isBack = !1,
                    this.isPlayAgain = !1
                }
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.reset();
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    this.type = o[0],
                    this.gameResult = o[1],
                    this.updateUI(),
                    this.type == Sa.failed ? yi.playFailed() : yi.playSuccess()
                }
                ,
                i.updateUI = function() {
                    this.type == Sa.failed ? (this.titleSuccessNode.active = !1,
                    this.titleFailedNode.active = !0,
                    this.titleFailedDescLabel.string = this.gameResult.fail_content || "你这么菜怎么\n睡的着啊") : (this.titleSuccessNode.active = !0,
                    this.titleFailedNode.active = !1),
                    this.scoreLabel.string = "" + this.gameResult.score,
                    this.gameResult.is_new_record ? this.newRecordNode.active = !0 : this.newRecordNode.active = !1,
                    this.updateRewardGoods(),
                    this.updateEgg()
                }
                ,
                i.updateRewardGoods = function() {
                    if (this.gameResult.rewards && 0 != this.gameResult.rewards.length) {
                        var e = this.gameResult.rewards;
                        this.rewardGoodsContainerNode.active = !0;
                        for (var t = 0; t < this.rewardGoodsNodeList.length; t++) {
                            var o = this.rewardGoodsNodeList[t];
                            if (t >= e.length)
                                o.active = !1;
                            else {
                                o.active = !0;
                                var i = this.rewardGoodsSpriteList[t];
                                Ve.loadRemoteSpriteFrame(i, e[t].img_url)
                            }
                        }
                    } else
                        this.rewardGoodsContainerNode.active = !1
                }
                ,
                i.updateEgg = function() {
                    if (!this.gameResult.eggs || 0 == this.gameResult.eggs.length)
                        return this.eggContainerNode.active = !1,
                        void (this.eggEmptyNode.active = !0);
                    this.eggContainerNode.active = !0,
                    this.eggEmptyNode.active = !1;
                    for (var e = this.gameResult.eggs, t = 0; t < this.gameCardList.length; t++) {
                        var o = this.gameCardList[t]
                          , i = this.gameCardCountLabelList[t];
                        if (t >= e.length)
                            o.node.active = !1,
                            i.node.parent.active = !1;
                        else {
                            i.node.parent.active = !0,
                            i.string = "" + e[t].count,
                            o.node.active = !0;
                            var r = {
                                img_type: e[t].egg_id,
                                type: Li.ColorEgg
                            };
                            o.setCardInfo(r),
                            o.hideCover(),
                            We.enableBtnClickable(o.node, !1)
                        }
                    }
                }
                ,
                i.on_hide = function() {
                    e.prototype.on_hide.call(this),
                    this.isBack ? ne.emit(le.OnBackMain) : this.isPlayAgain && ne.emit(le.PlayAgain),
                    this.reset()
                }
                ,
                i.onClickPlayAgain = function() {
                    yi.playClick(),
                    this.isPlayAgain = !0,
                    this.hide()
                }
                ,
                i.onClickBack = function() {
                    yi.playClick(),
                    this.isBack = !0,
                    this.hide()
                }
                ,
                i.onClickShare = function() {
                    yi.playClick();
                    var e = this.type == Sa.passed
                      , o = 0
                      , i = 0;
                    this.gameResult.eggs && this.gameResult.eggs.length > 0 && (o = this.gameResult.eggs.reduce((function(e, t) {
                        return e + t.count
                    }
                    ), 0),
                    i = this.gameResult.eggs.length);
                    var r = 0;
                    this.gameResult.rewards && this.gameResult.rewards.length > 0 && (r = this.gameResult.rewards.length),
                    qe.statClick(Le.sharebutton, {
                        page: e ? "zhanji_succeed" : "zhanji_failed"
                    });
                    var n = {
                        level: Je.currentPicId,
                        is_pass: e ? 1 : 0,
                        egg_count: o,
                        egg_type_count: i,
                        score: this.gameResult.score,
                        is_new_record: this.gameResult.is_new_record ? 1 : 0,
                        reward_count: r
                    };
                    Ee.click(Le.sharebutton, "result", n);
                    var l = this.gameResult.share_info;
                    l ? qe.shareWebWithInfo(l, (function(o) {
                        var i = me({
                            result: 1 == o ? 1 : 0,
                            page: e ? "zhanji_succeed" : "zhanji_failed"
                        }, n);
                        Ee.stat(Ae.statShare, "result", i),
                        qe.statShareSuccess(i),
                        t.log("shareWeb result = " + o)
                    }
                    )) : si.showToast("分享失败, 请稍后再试"),
                    t.log("Result Dialog onClickShare")
                }
                ,
                o
            }(bt)).prototype, "titleSuccessNode", [Ol], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            oa = be(ea.prototype, "titleFailedNode", [Hl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ia = be(ea.prototype, "titleFailedDescLabel", [Ul], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ra = be(ea.prototype, "contentNode", [Vl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            na = be(ea.prototype, "gameCardList", [Wl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            la = be(ea.prototype, "gameCardCountLabelList", [ql], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            aa = be(ea.prototype, "eggContainerNode", [jl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ua = be(ea.prototype, "eggEmptyNode", [Jl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            sa = be(ea.prototype, "scoreLabel", [Xl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ca = be(ea.prototype, "newRecordNode", [Zl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            da = be(ea.prototype, "rewardGoodsContainerNode", [Yl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ma = be(ea.prototype, "rewardGoodsNodeList", [Kl], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            pa = be(ea.prototype, "rewardGoodsSpriteList", [Ql], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            $l = ea));
            o._RF.pop(),
            o._RF.push({}, "2e0265BjppGypsrLcd5Qhae", "ToolUI", void 0);
            var Ra, Ba, Ia, Pa, Fa, Ea, Ma, Da, La, Aa, xa, za, Ga, Oa, Ha, Ua, Va, Wa, qa, ja, Ja, Xa, Za, Ya, Ka, Qa, $a, eu, tu, ou, iu, ru, nu, lu, au, uu, su, cu, du, mu, pu, hu, yu, Nu, gu, fu, bu, wu, vu, ku, Tu, Cu, _u, Su, Ru, Bu, Iu, Pu = u.ccclass, Fu = u.property, Eu = (ga = Pu("ToolUI"),
            fa = Fu(T),
            ba = Fu(w),
            ga((ka = be((va = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "countContainerNode", ka, ye(t)),
                    fe(t, "countLabel", Ta, ye(t)),
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.setCount = function(e) {
                    this.countContainerNode.active = e > 0,
                    this.countLabel.string = "" + e
                }
                ,
                o.setCountByArray = function(e) {
                    if (void 0 === e && (e = null),
                    e && 0 != e.length) {
                        var t = e.reduce((function(e, t) {
                            return e + t
                        }
                        ), 0);
                        this.countContainerNode.active = t > 0,
                        this.countLabel.string = "" + t
                    } else
                        this.setCount(0)
                }
                ,
                t
            }(C)).prototype, "countContainerNode", [fa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ta = be(va.prototype, "countLabel", [ba], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            wa = va)) || wa);
            o._RF.pop(),
            o._RF.push({}, "29d58YnxFVANZI0Jgk83pwb", "Game", void 0);
            var Mu, Du, Lu, Au, xu, zu, Gu, Ou, Hu, Uu, Vu, Wu = u.ccclass, qu = u.property;
            Ra = Wu("Game"),
            Ba = qu(w),
            Ia = qu([v]),
            Pa = qu(Z),
            Fa = qu(c),
            Ea = qu(T),
            Ma = qu(T),
            Da = qu(T),
            La = qu(tn),
            Aa = qu(zn),
            xa = qu(T),
            za = qu(T),
            Ga = qu(T),
            Oa = qu(T),
            Ha = qu(T),
            Ua = qu(w),
            Va = qu(T),
            Wa = qu(T),
            qa = qu(T),
            ja = qu(T),
            Ja = qu(v),
            Xa = qu(T),
            Za = qu(T),
            Ya = qu(w),
            Ka = qu(T),
            Qa = qu(T),
            $a = qu(T),
            eu = qu(T),
            Ra((iu = be((ou = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "gameInfoLabel", iu, ye(t)),
                    fe(t, "bgcornerSprites", ru, ye(t)),
                    fe(t, "homeScene", nu, ye(t)),
                    fe(t, "gameCardPrefab", lu, ye(t)),
                    fe(t, "pauseBtn", au, ye(t)),
                    fe(t, "progressBgNode", uu, ye(t)),
                    fe(t, "progressBarNode", su, ye(t)),
                    fe(t, "gameMap", cu, ye(t)),
                    fe(t, "gameMergeSpace", du, ye(t)),
                    fe(t, "topContainer", mu, ye(t)),
                    fe(t, "bottomBtnsContainer", pu, ye(t)),
                    fe(t, "moveNode", hu, ye(t)),
                    fe(t, "shuffleNode", yu, ye(t)),
                    fe(t, "rollbackNode", Nu, ye(t)),
                    fe(t, "scoreLabel", gu, ye(t)),
                    fe(t, "musicNode", fu, ye(t)),
                    fe(t, "gameOverNode", bu, ye(t)),
                    fe(t, "restartNode", wu, ye(t)),
                    fe(t, "randomToolCoverNode", vu, ye(t)),
                    fe(t, "guideTextSprite", ku, ye(t)),
                    fe(t, "scoreDoubleNode", Tu, ye(t)),
                    fe(t, "eggBackPackageNode", Cu, ye(t)),
                    fe(t, "eggBackPackageCountLabel", _u, ye(t)),
                    fe(t, "editNode", Su, ye(t)),
                    fe(t, "testNode", Ru, ye(t)),
                    fe(t, "testReduceNode", Bu, ye(t)),
                    fe(t, "unlockPicProgressFlagNode", Iu, ye(t)),
                    t.score = 0,
                    t.gameInfo = null,
                    t.isRequestedUnlock = !1,
                    t.stepCount = 0,
                    t.getEggs = [],
                    t.getRewards = [],
                    t.scoreDoubleShowedIndex = 0,
                    t.scoreMultiNum = 1,
                    t.scrollArray = [],
                    t.scrollMultis = [1],
                    t.isUnlockedPicture = !1,
                    t.gameStartTime = 0,
                    t.isRelived = !1,
                    t.mapWidgetTop = -1,
                    t.mapCoverWidgetTop = -1,
                    t.pendingScoreTime = !1,
                    t
                }
                pe(o, e);
                var r = o.prototype;
                return r.loadGameBgCorner = function() {
                    for (var e = this, t = function(t) {
                        var o = "";
                        o = Je.currentPicId <= 5 ? "resources/texture/game_bg/game_bg_tp_1_5" : "resources/texture/game_bg/game_bg_6_10",
                        Ve.loadSFFromAtlas(Je.bundleName, o, "game_bg_" + Je.currentPicId + "_" + (t + 1), (function(o, i) {
                            if (i && We.isValid(e.node)) {
                                e.bgcornerSprites[t].spriteFrame = i;
                                var r = e.bgcornerSprites[t].node.getComponent(V);
                                r && r.updateAlignment()
                            }
                        }
                        ))
                    }, o = 0; o < this.bgcornerSprites.length; o++)
                        t(o)
                }
                ,
                r.loadGameProgress = function() {
                    var e = this
                      , t = Je.getGameProgressName()
                      , o = this.progressBgNode.getComponent(v)
                      , i = this.progressBarNode.getComponent(v)
                      , r = "resources/texture/game/game_tp";
                    Ve.loadSFFromAtlas(Je.bundleName, r, t + "bg", (function(t, i) {
                        i && We.isValid(e.node) && (o.spriteFrame = i)
                    }
                    )),
                    Ve.loadSFFromAtlas(Je.bundleName, r, t + "bar", (function(t, o) {
                        o && We.isValid(e.node) && (i.spriteFrame = o)
                    }
                    ))
                }
                ,
                r.adaptSmallScreen = function(e) {
                    var o = this;
                    void 0 === e && (e = !1);
                    var i = ae.getRatio();
                    if (!(i >= 1) || e) {
                        i > 1 && (i = 1),
                        t.log("ratio = " + i);
                        var r = function(e, t) {
                            void 0 === t && (t = null),
                            e.scale = new a(i,i,1);
                            var o = e.getComponent(V);
                            o && (t && t(o),
                            o.updateAlignment())
                        };
                        r(this.gameMap.node, (function(e) {
                            -1 == o.mapWidgetTop && (o.mapWidgetTop = e.top),
                            e.top = o.mapWidgetTop * i
                        }
                        )),
                        r(this.randomToolCoverNode, (function(e) {
                            -1 == o.mapCoverWidgetTop && (o.mapCoverWidgetTop = e.top),
                            e.top = o.mapCoverWidgetTop * i
                        }
                        )),
                        r(this.gameMergeSpace.node),
                        r(this.topContainer),
                        r(this.bottomBtnsContainer)
                    }
                }
                ,
                r.adaptPad = function() {
                    if (ae.isPad) {
                        var e = ae.padRatio
                          , t = function(t, o) {
                            void 0 === o && (o = null),
                            t.scale = new a(e,e,1);
                            var i = t.getComponent(V);
                            i && (o && o(i),
                            i.updateAlignment())
                        };
                        t(this.gameMap.node, (function(t) {
                            t.top = t.top * e
                        }
                        )),
                        t(this.randomToolCoverNode, (function(t) {
                            t.top = t.top * e
                        }
                        )),
                        t(this.gameMergeSpace.node),
                        t(this.topContainer),
                        t(this.bottomBtnsContainer)
                    }
                }
                ,
                r.preloadDialog = function() {
                    Tt.preloadDialog(kt.ToolDialog),
                    Tt.preloadDialog(kt.ResultDialog),
                    Tt.preloadDialog(kt.EggBackpackageDialog),
                    Tt.preloadDialog(kt.SettingDialog)
                }
                ,
                r.isCommonBgm = function() {
                    return !1
                }
                ,
                r.onAppChange = function() {
                    var e = this;
                    if (!qe.isAndroid()) {
                        if (Qe.isBackground) {
                            t.log("onAppChange, stop game music");
                            var o = this.musicNode.getComponent(O);
                            return o && o.stop(),
                            void (this.musicNode.active = !1)
                        }
                        t.log("onAppChange, reset game music"),
                        setTimeout((function() {
                            We.isValid(e.node) && (t.log("onAppChange, real reset game music"),
                            e.onGameMusicOnChanged(Ze.inst.musicOn))
                        }
                        ), 200)
                    }
                }
                ,
                r.onWindowResize = function(t, o) {
                    e.prototype.onWindowResize.call(this, t, o),
                    this.adaptSmallScreen(!0)
                }
                ,
                r.start = function() {
                    e.prototype.start.call(this),
                    St.inst.stop(),
                    this.preloadDialog(),
                    this.refreshToolsCount(),
                    this.adaptSmallScreen(),
                    this.adaptPad(),
                    t.log("screen size w = " + i.windowSize.width + ", h = " + i.windowSize.height),
                    this.unlockPicProgressFlagNode.active = !1,
                    We.updateSpriteColorByHEX(this.bgNode, Je.getGameBgColor()),
                    this.loadGameBgCorner(),
                    this.loadGameProgress(),
                    this.gameMap.loadBg(),
                    this.gameMergeSpace.loadBg(),
                    this.editNode && (this.editNode.active = Qe.isEditURL()),
                    this.testNode && (this.testNode.active = Qe.isTestURL() && this.editNode && !this.editNode.active,
                    We.updateButtonLabel(this.testReduceNode, "卡片减半(" + ae.getWinSize().width + "x" + ae.getWinSize().height + ")"),
                    this.gameInfoLabel.node.active = this.testNode.active),
                    this.gameOverNode.active = !1,
                    We.bindClick(this.pauseBtn, this.onPauseBtnClick, this),
                    We.bindClick(this.moveNode, this.onMoveBtnClick, this),
                    We.bindClick(this.shuffleNode, this.onShuffleBtnClick, this),
                    We.bindClick(this.rollbackNode, this.onRollbackBtnClick, this),
                    We.bindClick(this.restartNode, this.onRestartBtnClick, this),
                    We.bindClick(this.eggBackPackageNode, this.onEggBackPackageBtnClick, this),
                    We.bindClick(this.testReduceNode, this.onTestReduceBtnClick, this),
                    ne.on(le.GameScoreChange, this.onGameScoreChange, this),
                    ne.on(le.GameShowRelive, this.onGameShowRelive, this),
                    ne.on(le.RefreshProgressBar, this.updateProgressBar, this),
                    ne.on(le.CheckGameResult, this.onCheckGameResult, this),
                    ne.on(le.GameGiveUp, this.onGameGiveUp, this),
                    ne.on(le.GetToolSuccess, this.onGetToolSuccess, this),
                    ne.on(le.PlayAgain, this.onPlayAgain, this),
                    ne.on(le.OnBackMain, this.onBackMainScene, this),
                    ne.on(le.ShowGuide, this.maybeShowGuide, this),
                    ne.on(le.HideGuide, this.hideGuide, this),
                    ne.on(le.GameReliveFailed, this.reliveFailed, this),
                    this.refreshBtns(),
                    this.initGame(!1)
                }
                ,
                r.onDestroy = function() {
                    e.prototype.onDestroy.call(this),
                    ne.off(le.GameScoreChange, this.onGameScoreChange, this),
                    ne.off(le.GameShowRelive, this.onGameShowRelive, this),
                    ne.off(le.RefreshProgressBar, this.updateProgressBar, this),
                    ne.off(le.CheckGameResult, this.onCheckGameResult, this),
                    ne.off(le.GameGiveUp, this.onGameGiveUp, this),
                    ne.off(le.GetToolSuccess, this.onGetToolSuccess, this),
                    ne.off(le.PlayAgain, this.onPlayAgain, this),
                    ne.off(le.OnBackMain, this.onBackMainScene, this),
                    ne.off(le.ShowGuide, this.maybeShowGuide, this),
                    ne.off(le.HideGuide, this.hideGuide, this),
                    ne.off(le.GameReliveFailed, this.reliveFailed, this)
                }
                ,
                r.onTestReduceBtnClick = function() {
                    t.log("onTestReduceBtnClick");
                    var e = this.gameMap.reduceCard();
                    e <= 0 ? si.showToast("卡片不足，无法减少") : si.showToast("减少" + 3 * e + "张卡片")
                }
                ,
                r.playScoreDoubleAnimation = function() {
                    var e = this;
                    yi.playDouble(),
                    this.scoreDoubleNode.active = !0;
                    var t = this.scoreDoubleNode.getComponent(X);
                    t && (t.once(X.EventType.FINISHED, (function() {
                        e.scoreDoubleNode.active = !1
                    }
                    ), this),
                    t.play())
                }
                ,
                r.hideGuide = function() {
                    this.guideTextSprite.node.active = !1
                }
                ,
                r.maybeShowGuide = function() {
                    var e = this;
                    if (!this.guideTextSprite.node.active) {
                        this.guideTextSprite.node.active = !0;
                        Ve.loadSF(Je.bundleName, "resources/texture/game/guide_global_text_bg", (function(t, o) {
                            We.isValid(e.node) && o && (e.guideTextSprite.spriteFrame = o)
                        }
                        ))
                    }
                }
                ,
                r.onGameMusicOnChanged = function(e) {
                    if (this.musicNode.active = Ze.inst.musicOn,
                    this.musicNode.active) {
                        var t = this.musicNode.getComponent(O);
                        t && t.play()
                    }
                }
                ,
                r.getGameProgress = function() {
                    var e = (this.gameMap.getRemainCount() + this.gameMergeSpace.getBucketCardCount()) / this.gameMap.getTotalCount();
                    return Number((1 - e).toFixed(2))
                }
                ,
                r.initProgressBar = function() {
                    var e = We.getWidth(this.progressBarNode)
                      , t = this.progressBarNode.getPosition();
                    t.x = -e,
                    this.progressBarNode.setPosition(t)
                }
                ,
                r.updateUnlockPicPosByUnlockProgress = function() {
                    if (this.unlockPicProgressFlagNode.active) {
                        var e = We.getWidth(this.progressBarNode)
                          , t = -e / 2 + this.gameInfo.unlock_picture_progress * e
                          , o = this.unlockPicProgressFlagNode.getPosition();
                        this.unlockPicProgressFlagNode.setPosition(new a(t,o.y,o.z))
                    }
                }
                ,
                r.updateProgressBar = function() {
                    var e = We.getWidth(this.progressBarNode)
                      , o = this.progressBarNode.getPosition();
                    e -= e * this.getGameProgress(),
                    o.x = -e,
                    t.log("progressBarWidth = " + e + ", remainPercent = " + this.getGameProgress() + ", pos.x = " + o.x),
                    this.progressBarNode.setPosition(o),
                    this.getGameProgress() >= this.gameInfo.unlock_picture_progress && !this.isRequestedUnlock && !this.gameInfo.picture_is_un_lock && (this.isRequestedUnlock = !0,
                    this.unlockPicture())
                }
                ,
                r.isGamePassed = function() {
                    return this.gameMap.getRemainCount() <= 0 && this.gameMergeSpace.getBucketCardCount() <= 0
                }
                ,
                r.onCheckGameResult = function() {
                    this.isGamePassed() && this.submitFinishGame()
                }
                ,
                r.reliveFailed = function() {
                    this.isGamePassed() ? this.onCheckGameResult() : this.submitFinishGame()
                }
                ,
                r.onBackMainScene = function() {
                    Ee.click(Ae.clickBackMain, "game", this.getZyToolExtraData()),
                    _t.backScene()
                }
                ,
                r.onPlayAgain = function() {
                    qe.statClick(Le.againbuttun, this.getZyToolExtraData()),
                    Ee.click(Le.beginbutton, "game", {
                        level: Je.currentPicId,
                        is_restart: 1
                    }),
                    this.initGame(!0)
                }
                ,
                r.onGameShowRelive = function() {
                    if (this.isRelived)
                        this.submitFinishGame();
                    else {
                        qe.statViewRelive(this.getZyToolExtraData()),
                        Ee.viewPage(Le.revive, this.getZyToolExtraData());
                        var e = this.getGameProgress();
                        t.log("show relive dialog, remove tools"),
                        Tt.showFade(kt.ToolDialog, null, zl.relive, e, zl.remove)
                    }
                }
                ,
                r.onRestartBtnClick = function() {
                    this.gameOverNode.active = !1,
                    this.initGame(!0)
                }
                ,
                r.initGame = function(e) {
                    this.refreshToolsCount(),
                    this.isRelived = !1,
                    this.gameStartTime = Qe.getCurrentTimeMs(),
                    this.isUnlockedPicture = !1,
                    this.scoreDoubleShowedIndex = 0,
                    this.scoreMultiNum = 1,
                    this.scrollMultis = [1],
                    this.scrollArray = [],
                    this.gameMap.clear(),
                    this.loadData(),
                    this.gameMergeSpace.init(),
                    this.initProgressBar(),
                    this.refreshScore(),
                    this.isRequestedUnlock = !1,
                    this.stepCount = Math.floor(Math.random() * 151) + 50,
                    this.getEggs = [],
                    this.getRewards = [],
                    this.eggBackPackageCountLabel.string = "" + this.getEggs.length
                }
                ,
                r.getShowScore = function() {
                    return this.score * this.scoreMultiNum
                }
                ,
                r.addScore = function(e) {
                    this.score += e,
                    this.scoreLabel.string = this.getShowScore() + "分"
                }
                ,
                r.refreshScore = function() {
                    this.score = 0,
                    this.scoreLabel.string = this.score + "分"
                }
                ,
                r.refreshBtns = function() {
                    var e = this.musicNode.getComponent(O);
                    e && (e.volume = St.musicVolume),
                    Ze.inst.musicOn ? this.musicNode.active = !0 : this.musicNode.active = !1
                }
                ,
                r.maybeShowScoreDouble = function() {
                    if (!this.gameInfo || !this.gameInfo.more_score_multiple || this.gameInfo.more_score_multiple.length <= 0)
                        return !1;
                    if (this.scoreDoubleShowedIndex >= this.gameInfo.more_score_multiple.length)
                        return !1;
                    var e = this.gameInfo.more_score_progress[this.scoreDoubleShowedIndex];
                    if (this.getGameProgress() >= e) {
                        var t = this.gameInfo.more_score_multiple[this.scoreDoubleShowedIndex];
                        if (t > 1) {
                            this.scoreMultiNum = this.scoreMultiNum * Math.floor(t),
                            this.scrollMultis = [];
                            for (var o = 0; o < this.scoreMultiNum; o++)
                                this.scrollMultis.push(1)
                        }
                        return this.playScoreDoubleAnimation(),
                        this.scoreDoubleShowedIndex += 1,
                        !0
                    }
                    return !1
                }
                ,
                r.onGameScoreChange = function(e) {
                    this.maybeShowScoreDouble();
                    this.scrollArray.push(e.cardInfo.img_type),
                    this.scrollArray.push(e.cardInfo.img_type),
                    this.scrollArray.push(e.cardInfo.img_type),
                    yi.playMerge(),
                    this.stepCount += 3,
                    this.maybeRequestRandomReward(),
                    e.isEggCard() && (this.getEggs.push(e.cardInfo.img_type),
                    this.eggBackPackageCountLabel.string = "" + this.getEggs.length);
                    this.addScore(3)
                }
                ,
                r.onPauseBtnClick = function() {
                    yi.playClick(),
                    qe.statClick(Le.settingbutton),
                    Tt.showFade(kt.SettingDialog, null, Nl.Pause)
                }
                ,
                r.onGameGiveUp = function() {
                    t.log("onGameGiveUp ts = " + Qe.getCurrentTimeMs()),
                    We.isValid(this.node) ? (Ee.click(Ae.clickGiveUp, "game", this.getZyToolExtraData()),
                    _t.backScene()) : t.logE("onGameGiveUp this.node is invalid")
                }
                ,
                r.onEggBackPackageBtnClick = function() {
                    yi.playClick(),
                    t.log("onEggBackPackageBtnClick"),
                    Ee.click(Ae.clickEggBackPackage, "game", me({
                        egg: this.getEggs.length
                    }, this.getZyToolExtraData())),
                    Tt.showFade(kt.EggBackpackageDialog, null, this.getRewardsEggs())
                }
                ,
                r.onGetToolSuccess = function(e, o) {
                    t.log("onGetToolSuccess: " + e + ", reliveToolsType = " + o),
                    e == zl.remove ? Je.toolRemoves.push(1) : e == zl.rollback ? Je.toolRollbacks.push(1) : e == zl.arrange ? Je.toolArranges.push(1) : e == zl.relive && this.useTool(e, o),
                    this.refreshToolsCount()
                }
                ,
                r.refreshToolsCount = function() {
                    this.moveNode.getComponent(Eu).setCountByArray(Je.toolRemoves),
                    this.rollbackNode.getComponent(Eu).setCountByArray(Je.toolRollbacks),
                    this.shuffleNode.getComponent(Eu).setCountByArray(Je.toolArranges)
                }
                ,
                r.playShuffleAnimation = function(e) {
                    var o = this;
                    void 0 === e && (e = null),
                    this.randomToolCoverNode.active = !0;
                    var i = this.randomToolCoverNode.getComponent(X);
                    if (i) {
                        var r = i.defaultClip.duration;
                        r < 0 && (r = .1),
                        Qe.startTimeout(r / 2, (function() {
                            We.isValid(o.node) && (o.userShuffle(),
                            e && e())
                        }
                        )),
                        t.log("playShuffleAnimation duration = " + r),
                        i.once(X.EventType.FINISHED, (function() {
                            o.randomToolCoverNode.active = !1
                        }
                        ), this),
                        i.play()
                    } else
                        this.userShuffle(),
                        e && e()
                }
                ,
                r.userShuffle = function() {
                    this.gameMap.shuffle(this.gameMergeSpace.getGameCards())
                }
                ,
                r.useTool = function(e, o) {
                    var i = this
                      , r = function() {
                        i.checkMapValid(!1, e) || i.testNode && i.testNode.active && i.gameMap.isShuffleError && i.showNoticeDialog("洗牌道具数据异常1, gameId: " + i.gameInfo.game_id + ", level: " + Je.currentPicId)
                    };
                    if (e == zl.remove) {
                        var n = 0;
                        o == zl.relive && (n = 3),
                        this.gameMergeSpace.moveCard(r, n)
                    } else if (e == zl.arrange)
                        this.playShuffleAnimation(r);
                    else if (e == zl.rollback) {
                        var l = this.gameMergeSpace.popRollbackCard();
                        null == l ? si.showToast("没有需要放回的卡片哦～") : (this.gameMap.rollback(l, r),
                        t.log("card.indexOfParent = " + l.indexOfParent),
                        this.gameMergeSpace.mayRearrangeBucketNodes(l.indexOfParent - 1))
                    } else
                        e == zl.relive && (this.isRelived = !0,
                        this.useTool(o, zl.relive),
                        this.gameMergeSpace.setGameRelive())
                }
                ,
                r.getZyToolExtraData = function() {
                    var e = "none";
                    return this.gameInfo && (e = this.gameInfo.game_id),
                    {
                        game_id: e,
                        level: Je.currentPicId,
                        progress: this.getGameProgress()
                    }
                }
                ,
                r.onMoveBtnClick = function() {
                    if (yi.playClick(),
                    this.gameMergeSpace.getNormalCardCount() <= 0)
                        si.showToast("没有需要移除的卡片哦～");
                    else if (this.gameMergeSpace.getMovedCardRemainCount() <= 0)
                        si.showToast("移除道具区已满，请使用其它道具哦～");
                    else {
                        if (Je.getToolCount(Je.toolRemoves) > 0)
                            return Je.minusToolCountOne(Je.toolRemoves),
                            this.refreshToolsCount(),
                            void this.useTool(zl.remove, null);
                        var e = this.getGameProgress();
                        qe.statClick(Le.moveout, this.getZyToolExtraData()),
                        Ee.viewPage(Le.moveout, this.getZyToolExtraData()),
                        Tt.showFade(kt.ToolDialog, null, zl.remove, e)
                    }
                }
                ,
                r.onShuffleBtnClick = function() {
                    if (yi.playClick(),
                    Je.getToolCount(Je.toolArranges) > 0)
                        return Je.minusToolCountOne(Je.toolArranges),
                        this.refreshToolsCount(),
                        void this.useTool(zl.arrange, null);
                    var e = this.getGameProgress();
                    qe.statClick(Le.shuffle, this.getZyToolExtraData()),
                    Ee.viewPage(Le.shuffle, this.getZyToolExtraData()),
                    Tt.showFade(kt.ToolDialog, null, zl.arrange, e)
                }
                ,
                r.onRollbackBtnClick = function() {
                    if (yi.playClick(),
                    this.gameMergeSpace.hasRollbackCard()) {
                        if (Je.getToolCount(Je.toolRollbacks) > 0)
                            return Je.minusToolCountOne(Je.toolRollbacks),
                            this.refreshToolsCount(),
                            void this.useTool(zl.rollback, null);
                        var e = this.getGameProgress();
                        qe.statClick(Le.withdraw, this.getZyToolExtraData()),
                        Ee.viewPage(Le.withdraw, this.getZyToolExtraData()),
                        Tt.showFade(kt.ToolDialog, null, zl.rollback, e)
                    } else
                        si.showToast("没有需要放回的卡片哦～")
                }
                ,
                r.update = function(e) {}
                ,
                r.showNoticeDialog = function(e) {
                    Tt.showFade(kt.CommonDialog, null, "", e, "返回", (function() {
                        t.log("onclick cancel")
                    }
                    ), "确定", (function() {
                        t.log("onclick confirm reload data")
                    }
                    ))
                }
                ,
                r.showRetryDialog = function(e, o) {
                    var i = this;
                    void 0 === o && (o = null),
                    Tt.showFade(kt.CommonDialog, null, "提示", e, "返回", (function() {
                        t.log("onclick cancel"),
                        _t.backScene()
                    }
                    ), "重试", (function() {
                        t.log("onclick confirm reload data"),
                        o ? o() : i.loadData()
                    }
                    ))
                }
                ,
                r.loadData = function() {
                    var e = this
                      , o = {
                        picture_id: Je.currentPicId
                    };
                    this.showLoading(500),
                    qe.requestPost(je.getStartConfigURL(), o, (function(o, i) {
                        if (e.hideLoading(),
                        We.isValid(e.node)) {
                            if (o) {
                                t.logE("loadData error = " + o + ", error.message = " + o.message);
                                var r = o.message;
                                return r = Xi.adapterErrorMsg(r, qe.isIOS()),
                                e.showRetryDialog(r),
                                void si.showToast(r)
                            }
                            e.gameInfo = i,
                            Je.currentGameID = e.gameInfo.game_id,
                            e.gameInfo && e.gameInfo.picture_img_url && Ve.loadRemoteSpriteFrameByURL(e.gameInfo.picture_img_url, (function(e, o) {
                                e && t.logE("loadRemoteSpriteFrameByURL error = " + e)
                            }
                            )),
                            e.testNode && e.testNode.active && (e.gameInfoLabel.string = "id: " + e.gameInfo.game_id + ", level: " + Je.currentPicId),
                            e.unlockPicProgressFlagNode.active = !e.gameInfo.picture_is_un_lock,
                            e.updateUnlockPicPosByUnlockProgress();
                            var n = e.gameInfo.game_map;
                            e.gameInfo.map_data ? (n = JSON.parse(e.gameInfo.map_data),
                            e.gameMap.init(!1, n)) : e.updateMapByOnline(n),
                            e.gameStartTime = Qe.getCurrentTimeMs()
                        }
                    }
                    ))
                }
                ,
                r.checkMapValid = function(e, o) {
                    void 0 === e && (e = !1),
                    void 0 === o && (o = null);
                    var i = this.gameMap.getMapCardInfo()
                      , r = this.gameMergeSpace.getBucketCardCount();
                    (!e || r > 0) && this.gameMergeSpace.getAllCards().forEach((function(e) {
                        if (e) {
                            var t = e.cardInfo.img_type
                              , o = i[t];
                            ze.isNull(o) ? i[t] = 1 : i[t] = o + 1
                        }
                    }
                    ));
                    var n = "地图数据异常";
                    e ? n = "初始化地图数据异常" : o == zl.remove ? n = "移除道具数据异常" : o == zl.arrange ? n = "洗牌道具数据异常" : o == zl.rollback && (n = "回退道具数据异常");
                    var l = this.gameMap.checkMapValid(i);
                    return !l.isValid && (qe.statErrorMap(me({
                        msg: n + ", errorType: " + l.errorType + ", gamdId: " + this.gameInfo.game_id + ", level: " + Je.currentPicId
                    }, this.getZyToolExtraData())),
                    !(!this.testNode || !this.testNode.active) && (this.showNoticeDialog(n + ", errorType: " + l.errorType + ", gamdId: " + this.gameInfo.game_id + ", level: " + Je.currentPicId),
                    t.logE("updateMapByOnline checkMapValid errorType = " + l.errorType),
                    !0))
                }
                ,
                r.updateMapByOnline = function(e) {
                    this.gameMap.initByMapInfo(e),
                    this.checkMapValid(!0)
                }
                ,
                r.maybeRequestRandomReward = function() {
                    t.log("maybeRequestRandomReward stepCount = " + this.stepCount + ", gap = " + this.gameInfo.gap),
                    this.stepCount % this.gameInfo.gap == 0 && this.requestRandomReward()
                }
                ,
                r.requestRandomReward = function() {
                    var e = this
                      , o = this.gameInfo.game_id
                      , i = {
                        picture_id: Je.currentPicId,
                        game_id: o,
                        step_count: this.stepCount
                    };
                    qe.statRequestGift({
                        level: Je.currentPicId,
                        game_id: o,
                        step_count: this.stepCount
                    }),
                    qe.requestPost(je.getRandomRewardURL(), i, (function(o, i) {
                        if (We.isValid(e.node))
                            if (o)
                                t.logE("requestRandomReward error = " + o);
                            else {
                                var r = i;
                                r && r.is_hit && (Ee.stat(Ae.statRandomReward, "game", me({
                                    variety_id: r.reward.reward_id,
                                    variety: r.reward.reward_name
                                }, e.getZyToolExtraData())),
                                qe.statViewRandomReward(me({
                                    variety_id: r.reward.reward_id,
                                    variety: r.reward.reward_name
                                }, e.getZyToolExtraData())),
                                e.getRewards.push(r.reward),
                                Tt.showFade(kt.RandomRewardDialog, null, r))
                            }
                    }
                    ))
                }
                ,
                r.unlockPicture = function() {
                    var e = this;
                    this.isUnlockedPicture = !0;
                    var o = {
                        picture_id: Je.currentPicId,
                        game_id: this.gameInfo.game_id
                    };
                    qe.requestPost(je.unlockPictureURL(), o, (function(o, i) {
                        if (We.isValid(e.node))
                            if (o)
                                e.isRequestedUnlock = !1,
                                t.logE("unlockPicture error = " + o);
                            else {
                                var r = Ze.inst.getConfigNumber("is_first_unlock_pic");
                                if (ze.isNull(r) && (r = 0),
                                Ze.inst.setConfigNumber("is_first_unlock_pic", r + 1),
                                i && 1 == i.success) {
                                    var n = i.is_show_all;
                                    Ee.stat(Ae.statUnlockPic, "game", me({
                                        is_unlock_all: n ? 1 : 0
                                    }, e.getZyToolExtraData())),
                                    Tt.showFade(kt.UnlockPicDialog, null, n ? Na.UnlockAll : Na.Unlock, e.gameInfo.picture_img_url)
                                }
                            }
                    }
                    ))
                }
                ,
                r.getRewardsEggs = function() {
                    var e = [];
                    return this.getEggs.forEach((function(t) {
                        var o = Xi.getSame(e, (function(e) {
                            return e.egg_id == t
                        }
                        ));
                        o ? o.count += 1 : e.push({
                            egg_id: t,
                            count: 1
                        })
                    }
                    )),
                    e
                }
                ,
                r.getScrollArray = function() {
                    var e = 0;
                    this.scrollArray.forEach((function(t) {
                        e++
                    }
                    ));
                    var o = this.scrollMultis.reduce((function(e, t) {
                        return e + t
                    }
                    ), 0);
                    return o != this.scoreMultiNum && t.logE("getScrollArray: total = " + o + ", multi = " + this.scoreMultiNum),
                    t.log("getScrollArray: scroll = " + e + ", total = " + o + ", multi = " + this.scoreMultiNum),
                    e * o
                }
                ,
                r.getGameDuration = function() {
                    return Qe.getCurrentTimeMs() - this.gameStartTime
                }
                ,
                r.submitFinishGame = function() {
                    var e = this
                      , o = this.isGamePassed()
                      , i = {
                        picture_id: Je.currentPicId,
                        game_id: this.gameInfo.game_id,
                        score: this.getScrollArray(),
                        step_count: this.stepCount,
                        is_success: o,
                        eggs: this.getRewardsEggs(),
                        rewards: this.getRewards
                    };
                    i.score != this.getShowScore() && t.logE("log submitFinishGame data score = " + i.score + ", show this.score = " + this.getShowScore());
                    var r = me({
                        egg: this.getRewardsEggs(),
                        story: this.isUnlockedPicture ? 1 : 0,
                        double: this.scoreDoubleShowedIndex,
                        duration: this.getGameDuration(),
                        step_count: this.stepCount,
                        is_pass: o ? 1 : 0
                    }, this.getZyToolExtraData());
                    qe.statViewGameResult(o, r),
                    Ee.stat(Ae.statSubmitFinishGame, "game", r),
                    this.showLoading(500),
                    qe.requestPost(je.submitFinishGameURL(), i, (function(i, r) {
                        if (We.isValid(e.node))
                            if (e.hideLoading(),
                            i) {
                                t.logE("submitFinishGame error = " + i);
                                var n = i.message;
                                n = Xi.adapterErrorMsg(n, qe.isIOS()),
                                e.showRetryDialog(n, (function() {
                                    e.submitFinishGame()
                                }
                                )),
                                si.showToast(n)
                            } else {
                                var l = r;
                                l.score = e.getShowScore(),
                                Tt.showFade(kt.ResultDialog, null, o ? Sa.passed : Sa.failed, l)
                            }
                    }
                    ))
                }
                ,
                o
            }(mo)).prototype, "gameInfoLabel", [Ba], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ru = be(ou.prototype, "bgcornerSprites", [Ia], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            nu = be(ou.prototype, "homeScene", [Pa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            lu = be(ou.prototype, "gameCardPrefab", [Fa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            au = be(ou.prototype, "pauseBtn", [Ea], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            uu = be(ou.prototype, "progressBgNode", [Ma], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            su = be(ou.prototype, "progressBarNode", [Da], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            cu = be(ou.prototype, "gameMap", [La], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            du = be(ou.prototype, "gameMergeSpace", [Aa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            mu = be(ou.prototype, "topContainer", [xa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            pu = be(ou.prototype, "bottomBtnsContainer", [za], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            hu = be(ou.prototype, "moveNode", [Ga], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            yu = be(ou.prototype, "shuffleNode", [Oa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Nu = be(ou.prototype, "rollbackNode", [Ha], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            gu = be(ou.prototype, "scoreLabel", [Ua], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            fu = be(ou.prototype, "musicNode", [Va], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            bu = be(ou.prototype, "gameOverNode", [Wa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            wu = be(ou.prototype, "restartNode", [qa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            vu = be(ou.prototype, "randomToolCoverNode", [ja], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ku = be(ou.prototype, "guideTextSprite", [Ja], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Tu = be(ou.prototype, "scoreDoubleNode", [Xa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Cu = be(ou.prototype, "eggBackPackageNode", [Za], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            _u = be(ou.prototype, "eggBackPackageCountLabel", [Ya], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Su = be(ou.prototype, "editNode", [Ka], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ru = be(ou.prototype, "testNode", [Qa], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Bu = be(ou.prototype, "testReduceNode", [$a], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Iu = be(ou.prototype, "unlockPicProgressFlagNode", [eu], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            tu = ou));
            o._RF.pop(),
            o._RF.push({}, "1f18fHydLNBHo3ucbMXQZED", "GameBtn", void 0);
            var ju, Ju, Xu, Zu, Yu, Ku = u.ccclass, Qu = u.property;
            Mu = Ku("GameBtn"),
            Du = Qu(w),
            Lu = Qu(T),
            Au = Qu(T),
            xu = Qu(T),
            Mu((Ou = be((Gu = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "toolsCountLabel", Ou, ye(t)),
                    fe(t, "toolsCountNode", Hu, ye(t)),
                    fe(t, "toolsAddNode", Uu, ye(t)),
                    fe(t, "toolsNotice", Vu, ye(t)),
                    t.currentCount = 0,
                    t._showToolsMaxCount = 2,
                    t._showToolsNoticeTimeId = null,
                    t._showToolsNoticeCount = 0,
                    t._showToolsNoticeTimeInterval = 10,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.setToolsCount(0)
                }
                ,
                o.update = function(e) {}
                ,
                o.decreaseCount = function() {
                    this.currentCount--,
                    this.setToolsCount(this.currentCount)
                }
                ,
                o.increaseCount = function() {
                    this.currentCount++,
                    this.setToolsCount(this.currentCount)
                }
                ,
                o.setToolsCount = function(e) {
                    this.currentCount = e,
                    this.toolsCountLabel.string = "" + e,
                    this.toolsCountNode.active = e > 0,
                    this.toolsAddNode.active = e <= 0
                }
                ,
                o.getToolsCount = function() {
                    return this.currentCount
                }
                ,
                o.stopShowToolsNotice = function() {
                    null != this._showToolsNoticeTimeId && (clearTimeout(this._showToolsNoticeTimeId),
                    this._showToolsNoticeTimeId = null)
                }
                ,
                o.startShowToolsNotice = function(e, t) {
                    var o = this;
                    if (void 0 === e && (e = !1),
                    void 0 === t && (t = !1),
                    this.stopShowToolsNotice(),
                    e && (this._showToolsNoticeCount = 0),
                    !(this._showToolsNoticeCount >= this._showToolsMaxCount)) {
                        var i = 1e3 * this._showToolsNoticeTimeInterval;
                        t && (i += 3e3),
                        this._showToolsNoticeTimeId = setTimeout((function() {
                            o._showToolsNoticeCount++,
                            Nt.uiOpacityAnimation(o.toolsNotice, !0, 3),
                            o.startShowToolsNotice(!1, !0)
                        }
                        ), i)
                    }
                }
                ,
                t
            }(C)).prototype, "toolsCountLabel", [Du], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Hu = be(Gu.prototype, "toolsCountNode", [Lu], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Uu = be(Gu.prototype, "toolsAddNode", [Au], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Vu = be(Gu.prototype, "toolsNotice", [xu], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            zu = Gu));
            o._RF.pop(),
            o._RF.push({}, "5bac6cQlcZMWJKpPblJF3VX", "GameCountDown", void 0);
            var $u, es, ts, os, is, rs, ns, ls, as, us, ss, cs, ds, ms, ps, hs, ys, Ns, gs, fs, bs, ws, vs, ks = u.ccclass, Ts = u.property;
            ju = ks("GameCountDown"),
            Ju = Ts(w),
            ju((Yu = be((Zu = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "countdownLabel", Yu, ye(t)),
                    t._countdownHandler = null,
                    t._countdownPaused = !1,
                    t.currentTime = 0,
                    t.timeoverCallback = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {}
                ,
                i.update = function(e) {}
                ,
                i.pause = function() {
                    this._countdownPaused = !0
                }
                ,
                i.resume = function() {
                    this._countdownPaused = !1
                }
                ,
                i.getCurrentTime = function() {
                    return this.currentTime
                }
                ,
                i.decreaseTime = function(e) {
                    if (t.log("decrease time current = " + this.currentTime + ", decrease = " + e),
                    this.currentTime = this.currentTime - e,
                    this.currentTime <= 0)
                        return this.stopCountDown(),
                        this.setTextColorRed(),
                        this.countdownLabel.string = Mt.timeFormat2(0),
                        void (this.timeoverCallback && this.timeoverCallback());
                    this.startCountDown(this.currentTime)
                }
                ,
                i.setTextColorRed = function() {
                    this.countdownLabel.color = new k(255,113,113,255)
                }
                ,
                i.setTextColorGreen = function() {
                    this.countdownLabel.color = new k(66,255,0,255)
                }
                ,
                i.maybeIncreaseTime10s = function() {
                    this.currentTime = this.currentTime + 60,
                    this.startCountDown(this.currentTime)
                }
                ,
                i.startCountDown = function(e) {
                    var o = this;
                    this.resume(),
                    this.currentTime = e;
                    var i = e;
                    this.countdownLabel.node.parent.active = !0,
                    this.countdownLabel.string = Mt.timeFormat2(i),
                    e <= 10 ? this.setTextColorRed() : this.setTextColorGreen(),
                    this.stopCountDown(),
                    this._countdownHandler = setInterval((function() {
                        We.isValid(o) && (o._countdownPaused || (i > 1 ? (o.currentTime = --i,
                        o.currentTime <= 10 && o.setTextColorRed(),
                        o.countdownLabel.string = Mt.timeFormat2(o.currentTime)) : (o.setTextColorRed(),
                        o.countdownLabel.string = Mt.timeFormat2(0),
                        t.log("time loop current = " + o.currentTime),
                        o.timeoverCallback && o.timeoverCallback())))
                    }
                    ), 1e3)
                }
                ,
                i.stopCountDown = function() {
                    this._countdownHandler && (clearInterval(this._countdownHandler),
                    this._countdownHandler = null)
                }
                ,
                o
            }(C)).prototype, "countdownLabel", [Ju], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Xu = Zu));
            o._RF.pop(),
            o._RF.push({}, "d6ed1rmA8hE7Ioc7yDvmFpA", "GameEdit", void 0);
            var Cs, _s, Ss, Rs, Bs, Is, Ps, Fs, Es, Ms, Ds, Ls = u.ccclass, As = u.property, xs = function(e) {
                return e[e.Left = 37] = "Left",
                e[e.Up = 38] = "Up",
                e[e.Right = 39] = "Right",
                e[e.Down = 40] = "Down",
                e[e.W = 87] = "W",
                e[e.A = 65] = "A",
                e[e.S = 83] = "S",
                e[e.D = 68] = "D",
                e[e.ESC = 27] = "ESC",
                e
            }({});
            $u = Ls("GameEdit"),
            es = As(N),
            ts = As(N),
            os = As(N),
            is = As(N),
            rs = As(N),
            ns = As(Y),
            ls = As(N),
            as = As(N),
            us = As(tn),
            ss = As(zn),
            $u((ms = be((ds = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "modeBtn", ms, ye(t)),
                    fe(t, "hideBtn", ps, ye(t)),
                    fe(t, "showBtn", hs, ye(t)),
                    fe(t, "runMapBtn", ys, ye(t)),
                    fe(t, "copyMapBtn", Ns, ye(t)),
                    fe(t, "editBox", gs, ye(t)),
                    fe(t, "layerAddBtn", fs, ye(t)),
                    fe(t, "layerMinusBtn", bs, ye(t)),
                    fe(t, "gameMap", ws, ye(t)),
                    fe(t, "gameMergeSpace", vs, ye(t)),
                    t.isEditMode = fr.isEditMode,
                    t.mapString = "",
                    t.hideCards = [],
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    this.refreshModeBtn(),
                    K.on(Q.EventType.KEY_DOWN, this.onKeyDown, this),
                    ne.on(le.GameCardEditClick, this.onGameCardClick, this),
                    We.bindClick(this.modeBtn.node, this.onModeBtnClick, this),
                    We.bindClick(this.hideBtn.node, this.onHideBtnClick, this),
                    We.bindClick(this.showBtn.node, this.onShowBtnClick, this),
                    We.bindClick(this.runMapBtn.node, this.onRunMapBtnClick, this),
                    We.bindClick(this.copyMapBtn.node, this.onCopyMapBtnClick, this),
                    We.bindClick(this.layerAddBtn.node, this.onClickLayerAddBtn, this),
                    We.bindClick(this.layerMinusBtn.node, this.onClickLayerMinusBtn, this)
                }
                ,
                i.onDestroy = function() {
                    K.off(Q.EventType.KEY_DOWN, this.onKeyDown, this),
                    ne.off(le.GameCardEditClick, this.onGameCardClick, this)
                }
                ,
                i.init = function() {
                    this.hideCards = [],
                    We.updateButtonLabel(this.showBtn.node, "显示层")
                }
                ,
                i.onGameCardClick = function(e) {
                    if (this.isEditMode && (t.log("onGameCardClick card = " + e.cardInfo.id),
                    !(this.gameMap.findEditCards().length <= 0))) {
                        var o = this.gameMap.findEditCards();
                        return this.gameMap.isSameLayer(o) ? void 0 : (e.resetEdit(),
                        void si.showToast("该卡片与其它卡片层级不同，无法同时选中"))
                    }
                }
                ,
                i.precheckEditCardPos = function(e) {
                    var o = this.gameMap.findEditCards();
                    if (!o || o.length <= 0)
                        return si.showToast("没有可编辑的卡片"),
                        !1;
                    for (var i = this.gameMap.findEditLayerCards(o), r = 0; r < o.length; r++) {
                        var n = o[r]
                          , l = Ai.getCardX(n.cardInfo)
                          , a = Ai.getCardY(n.cardInfo)
                          , u = l
                          , s = a;
                        if (e == xs.Left) {
                            if (l - 1 < 0)
                                return si.showToast("已经到达最左边"),
                                !1;
                            u = l - 1
                        } else if (e == xs.Right) {
                            if (l + 1 > 56)
                                return si.showToast("已经到达最右边"),
                                !1;
                            u = l + 1
                        } else if (e == xs.Up) {
                            if (a - 1 < 0)
                                return si.showToast("已经到达最上边"),
                                !1;
                            s = a - 1
                        } else if (e == xs.Down) {
                            if (a + 1 > 70)
                                return si.showToast("已经到达最下边"),
                                !1;
                            s = a + 1
                        }
                        if (t.log("precheckEditCardPos newX = " + u + " newY = " + s),
                        Xi.isCollision(u, s, i))
                            return si.showToast("移动位置与卡片碰撞"),
                            !1
                    }
                    return !0
                }
                ,
                i.updateEditCardsPos = function(e) {
                    if (this.precheckEditCardPos(e)) {
                        for (var o = this.gameMap.findEditCards(), i = 0; i < o.length; i++) {
                            var r = o[i]
                              , n = Ai.getCardX(r.cardInfo)
                              , l = Ai.getCardY(r.cardInfo)
                              , a = n
                              , u = l;
                            e == xs.Left ? a = n - 1 : e == xs.Right ? a = n + 1 : e == xs.Up ? u = l - 1 : e == xs.Down && (u = l + 1),
                            this.gameMap.delCardInCurMapData(r),
                            Ai.setCardX(r.cardInfo, a),
                            Ai.setCardY(r.cardInfo, u),
                            r.updateEditLabel(),
                            this.gameMap.updateCardInCurMapInfo(r)
                        }
                        this.gameMap.refreshCardsPos(o),
                        this.gameMap.onRefreshGameMap(null),
                        t.log("updateEditCards editCards count = " + o.length)
                    }
                }
                ,
                i.onKeyDown = function(e) {
                    var o = e.keyCode;
                    o == xs.Left || o == xs.A ? (t.log("onKeyDown left"),
                    this.updateEditCardsPos(xs.Left)) : o == xs.Right || o == xs.D ? (t.log("onKeyDown right"),
                    this.updateEditCardsPos(xs.Right)) : o == xs.Up || o == xs.W ? (t.log("onKeyDown up"),
                    this.updateEditCardsPos(xs.Up)) : o == xs.Down || o == xs.S ? (t.log("onKeyDown down"),
                    this.updateEditCardsPos(xs.Down)) : o == xs.ESC ? (t.log("onKeyDown esc"),
                    this.gameMap.resetEditCards()) : t.log("onKeyDown other keyCode = " + o)
                }
                ,
                i.onModeBtnClick = function() {
                    this.isEditMode = !this.isEditMode,
                    this.refreshModeBtn(),
                    fr.isEditMode = this.isEditMode,
                    this.isEditMode || (t.log("onModeBtnClick try game"),
                    this.gameMap.currentMap && this.gameMap.currentMap.LevelData ? (this.gameMap.initByMapInfo(this.gameMap.currentMap),
                    t.log("onModeBtnClick initByMapInfo success")) : (this.gameMap.init(!1, this.gameMap.currentMap),
                    t.log("onModeBtnClick init success")),
                    this.gameMergeSpace.init())
                }
                ,
                i.refreshModeBtn = function() {
                    this.isEditMode ? We.updateButtonLabel(this.modeBtn.node, "当前模式:编辑") : We.updateButtonLabel(this.modeBtn.node, "当前模式:试玩")
                }
                ,
                i.onHideBtnClick = function() {
                    var e = this.gameMap.hideTopLayer();
                    !e || e.length <= 0 ? si.showToast("没有可隐藏的卡片") : (e.forEach((function(e) {
                        e.resetEdit()
                    }
                    )),
                    t.log("onHideBtnClick card layer = " + Ai.getCardLayer(e[0].cardInfo) + " hideCards count = " + e.length),
                    this.hideCards.push(e),
                    We.updateButtonLabel(this.showBtn.node, "显示层(" + this.hideCards.length + ")"),
                    this.gameMap.onRefreshGameMap(null))
                }
                ,
                i.onShowBtnClick = function() {
                    var e = this.hideCards.pop();
                    !e || e.length <= 0 ? si.showToast("没有可显示的卡片") : (We.updateButtonLabel(this.showBtn.node, "显示层(" + this.hideCards.length + ")"),
                    t.log("onShowBtnClick card layer = " + Ai.getCardLayer(e[0].cardInfo) + " showCards count = " + e.length),
                    this.gameMap.showLayer(e),
                    this.gameMap.onRefreshGameMap(null))
                }
                ,
                i.loadMapByEditString = function() {
                    if (this.mapString = this.editBox.string,
                    ze.isEmptyString(this.mapString))
                        si.showToast("请输入地图数据");
                    else {
                        var e = JSON.parse(this.mapString);
                        if (e && e.data && e.data.map_data) {
                            var t = JSON.parse(e.data.map_data)
                              , o = t.blockTypeData
                              , i = {}
                              , r = 0;
                            for (var n in o) {
                                if (parseInt(n) > 11)
                                    r += o[n];
                                else
                                    i[n] = o[n]
                            }
                            for (var l = !1; r > 0; )
                                for (var a in l = !0,
                                i) {
                                    if ((r -= 1) < 0)
                                        break;
                                    i[a] = i[a] + 1
                                }
                            l && (t.blockTypeData = i),
                            this.gameMap.init(!1, t)
                        } else
                            this.gameMap.initByMapInfo(e, !0)
                    }
                }
                ,
                i.onRunMapBtnClick = function() {
                    this.isEditMode ? (this.loadMapByEditString(),
                    this.init()) : si.showToast("请切换到编辑模式")
                }
                ,
                i.onCopyMapBtnClick = function() {
                    if (this.isEditMode) {
                        var e = this.toZYGameMap(this.gameMap.currentMap)
                          , o = JSON.stringify(e);
                        t.log("onCopyMapBtnClick currentMap = " + o),
                        We.copyText(o, (function() {
                            si.showToast("复制成功")
                        }
                        ))
                    } else
                        si.showToast("请切换到编辑模式")
                }
                ,
                i.toZYGameMap = function(e) {
                    if (e && e.LevelData) {
                        var o = e.LevelData
                          , i = Object.keys(o).length;
                        t.log("Map data has " + i + " layers");
                        for (var r = new Map, n = [], l = function(e) {
                            r[e] = [],
                            o["" + e].forEach((function(o) {
                                var i = {
                                    id: o.id,
                                    x: Ai.getCardX(o),
                                    y: Ai.getCardY(o),
                                    layer: Ai.getCardLayer(o)
                                }
                                  , l = o.id;
                                i.id = i.layer + "-" + i.x + "-" + i.y,
                                i.id != l && t.log("toZYGameMap card layer = " + i.layer + " oldId = " + l + " newId = " + i.id),
                                i.layer != e ? n.push(i) : r[e].push(i)
                            }
                            ))
                        }, a = 1; a <= i; a++)
                            l(a);
                        return t.log("layerChangedCards count = " + n.length),
                        n.forEach((function(e) {
                            r[Ai.getCardLayer(e)] || (r[Ai.getCardLayer(e)] = []),
                            r[Ai.getCardLayer(e)].push(e)
                        }
                        )),
                        e.LevelData = r,
                        e
                    }
                    var u = {
                        LevelData: null,
                        TypeData: null
                    }
                      , s = e.blockTypeData || {}
                      , c = e.levelData || {}
                      , d = Object.keys(c).length;
                    t.log("Map data has " + d + " layers");
                    for (var m = new Map, p = [], h = function(e) {
                        m[e] = [],
                        c["" + e].forEach((function(o) {
                            var i = {
                                id: o.id,
                                x: Ai.getCardX(o),
                                y: Ai.getCardY(o),
                                layer: Ai.getCardLayer(o)
                            }
                              , r = o.id;
                            i.id = i.layer + "-" + i.x + "-" + i.y,
                            i.id != r && t.log("toZYGameMap card layer = " + i.layer + " oldId = " + r + " newId = " + i.id),
                            i.layer != e ? p.push(i) : m[e].push(i)
                        }
                        ))
                    }, y = 1; y <= d; y++)
                        h(y);
                    return t.log("layerChangedCards count = " + p.length),
                    p.forEach((function(e) {
                        m[Ai.getCardLayer(e)] || (m[Ai.getCardLayer(e)] = []),
                        m[Ai.getCardLayer(e)].push(e)
                    }
                    )),
                    u.TypeData = s,
                    u.LevelData = m,
                    u
                }
                ,
                i.onClickLayerAddBtn = function() {
                    var e = this;
                    if (t.log("onClickLayerAddBtn"),
                    this.isEditMode) {
                        var o = this.gameMap.findEditCards();
                        if (o.length <= 0)
                            si.showToast("没有可编辑的卡片");
                        else {
                            var i = this.gameMap.getCurTopLayer()
                              , r = Ai.getCardLayer(o[0].cardInfo);
                            if (r >= i)
                                si.showToast("已经是最顶层级");
                            else {
                                for (var n = this.gameMap.getLayerCards(r + 1), l = 0; l < o.length; l++) {
                                    var a = o[l]
                                      , u = Ai.getCardX(a.cardInfo)
                                      , s = Ai.getCardY(a.cardInfo);
                                    if (t.log("onClickLayerAddBtn card x = " + u + " y = " + s),
                                    Xi.isCollision(u, s, n))
                                        return void si.showToast("移动层级与其它卡片碰撞")
                                }
                                o.forEach((function(t) {
                                    var o = Ai.getCardLayer(t.cardInfo);
                                    e.gameMap.delCardInCurMapData(t),
                                    Ai.setCardLayer(t.cardInfo, o + 1),
                                    t.updateEditLabel(),
                                    e.gameMap.updateCardInCurMapInfo(t)
                                }
                                ))
                            }
                        }
                    } else
                        si.showToast("请切换到编辑模式")
                }
                ,
                i.onClickLayerMinusBtn = function() {
                    var e = this;
                    if (t.log("onClickLayerMinusBtn"),
                    this.isEditMode) {
                        var o = this.gameMap.findEditCards();
                        if (o.length <= 0)
                            si.showToast("没有可编辑的卡片");
                        else {
                            var i = Ai.getCardLayer(o[0].cardInfo);
                            if (i <= 1)
                                si.showToast("已经是最底层级");
                            else {
                                for (var r = this.gameMap.getLayerCards(i - 1), n = 0; n < o.length; n++) {
                                    var l = o[n]
                                      , a = Ai.getCardX(l.cardInfo)
                                      , u = Ai.getCardY(l.cardInfo);
                                    if (t.log("onClickLayerMinusBtn card x = " + a + " y = " + u),
                                    Xi.isCollision(a, u, r))
                                        return void si.showToast("移动层级与其它卡片碰撞")
                                }
                                o.forEach((function(t) {
                                    var o = Ai.getCardLayer(t.cardInfo);
                                    e.gameMap.delCardInCurMapData(t),
                                    Ai.setCardLayer(t.cardInfo, o - 1),
                                    t.updateEditLabel(),
                                    e.gameMap.updateCardInCurMapInfo(t)
                                }
                                ))
                            }
                        }
                    } else
                        si.showToast("请切换到编辑模式")
                }
                ,
                o
            }(C)).prototype, "modeBtn", [es], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ps = be(ds.prototype, "hideBtn", [ts], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            hs = be(ds.prototype, "showBtn", [os], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ys = be(ds.prototype, "runMapBtn", [is], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ns = be(ds.prototype, "copyMapBtn", [rs], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            gs = be(ds.prototype, "editBox", [ns], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            fs = be(ds.prototype, "layerAddBtn", [ls], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            bs = be(ds.prototype, "layerMinusBtn", [as], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ws = be(ds.prototype, "gameMap", [us], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            vs = be(ds.prototype, "gameMergeSpace", [ss], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            cs = ds));
            o._RF.pop(),
            o._RF.push({}, "eaeccDD8IVOkqXsFJ9jeMvU", "GameLevelTypeChange", void 0);
            var zs, Gs, Os, Hs, Us, Vs, Ws, qs, js, Js = u.ccclass, Xs = u.property;
            Cs = Js("GameLevelTypeChange"),
            _s = Xs(T),
            Ss = Xs(T),
            Rs = Xs(T),
            Bs = Xs([T]),
            Cs((Fs = be((Ps = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "title1Node", Fs, ye(t)),
                    fe(t, "title2Node", Es, ye(t)),
                    fe(t, "bgNode", Ms, ye(t)),
                    fe(t, "arrowNodes", Ds, ye(t)),
                    t.finishAnimationCallback = null,
                    t.arrowNodesInitPos = [],
                    t.animationTag = Qe.getCurrentTimeMs(),
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.onLoad = function() {
                    this.initArrowPos()
                }
                ,
                o.start = function() {}
                ,
                o.initArrowPos = function() {
                    if (!(this.arrowNodesInitPos.length > 0))
                        for (var e = 0; e < this.arrowNodes.length; e++) {
                            var t = this.arrowNodes[e];
                            this.arrowNodesInitPos.push(t.getPosition())
                        }
                }
                ,
                o.onDestroy = function() {
                    x.stopAllByTag(this.animationTag)
                }
                ,
                o.update = function(e) {}
                ,
                o.reset = function() {
                    this.initArrowPos(),
                    it.setNodeScale(this.title1Node, 1),
                    it.setNodeScale(this.title2Node, 1);
                    for (var e = 0; e < this.arrowNodes.length; e++) {
                        this.arrowNodes[e].setPosition(this.arrowNodesInitPos[e])
                    }
                }
                ,
                o.startAnimation = function(e) {
                    var t = this;
                    this.reset(),
                    this.node.active = !0;
                    this.title1Node.active = !1,
                    this.title2Node.active = !1;
                    var o = this.title1Node;
                    e > 2 && (o = this.title2Node),
                    o.active = !0,
                    z(o).tag(this.animationTag).sequence(z(o).tag(this.animationTag).to(.5, {
                        scale: new a(1.1,1.1,1.1)
                    }), z(o).tag(this.animationTag).to(.5, {
                        scale: new a(1,1,1)
                    })).call((function() {
                        t.node.active = !1,
                        t.finishAnimationCallback && t.finishAnimationCallback()
                    }
                    )).start();
                    for (var i = 0; i < this.arrowNodes.length; i++) {
                        var r = this.arrowNodes[i];
                        z(r).tag(this.animationTag).sequence(z(r).tag(this.animationTag).by(.2 * Ye.getRandomNum(1, 4) + .6, {
                            position: new a(0,500,0)
                        }).start(), z(r).delay(.2).tag(this.animationTag).to(0, {
                            position: this.arrowNodesInitPos[i]
                        }).start()).repeatForever().start()
                    }
                }
                ,
                t
            }(C)).prototype, "title1Node", [_s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Es = be(Ps.prototype, "title2Node", [Ss], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ms = be(Ps.prototype, "bgNode", [Rs], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ds = be(Ps.prototype, "arrowNodes", [Bs], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Is = Ps));
            o._RF.pop(),
            o._RF.push({}, "337bfjwI7pCWpuqYrLRQQy1", "LaoTaitai", void 0);
            var Zs, Ys, Ks, Qs, $s, ec, tc, oc, ic, rc, nc, lc, ac, uc, sc, cc, dc, mc, pc, hc, yc, Nc, gc, fc, bc, wc, vc = u.ccclass, kc = u.property, Tc = $({
                Left: 0,
                Right: 1,
                Up: 2,
                Down: 3
            });
            zs = vc("LaoTaitai"),
            Gs = kc({
                type: Tc,
                displayName: "运动方向"
            }),
            Os = kc(H),
            Hs = kc(ee),
            zs((Ws = be((Vs = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "moveDirect", Ws, ye(t)),
                    fe(t, "moveDistance", qs, ye(t)),
                    fe(t, "moveDuration", js, ye(t)),
                    t.initPos = null,
                    t.animationTag = 0,
                    t.colliderCallBack = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    this.animationTag = Qe.getCurrentTimeMs() + this.node.position.x,
                    this.initPos = this.node.getPosition(),
                    this.startAnimation(),
                    this.registerContact(!0)
                }
                ,
                i.resumeAnimation = function() {
                    var e = this
                      , t = a.distance(this.node.getPosition(), this.initPos) / this.moveDistance * 2;
                    z(this.node).to(t, {
                        position: this.initPos
                    }).call((function() {
                        e.startAnimation()
                    }
                    )).start()
                }
                ,
                i.stopAnimation = function() {
                    x.stopAllByTag(this.animationTag)
                }
                ,
                i.registerContact = function(e) {
                    var t = this.getComponent(te);
                    e ? t.on(oe.BEGIN_CONTACT, this.onBeginContact, this) : t.off(oe.BEGIN_CONTACT, this.onBeginContact, this)
                }
                ,
                i.onBeginContact = function(e, o, i) {
                    t.log("onBeginContact self = " + e.node.name + ", oterh = " + o.node.name),
                    this.colliderCallBack && this.colliderCallBack(this, o.node)
                }
                ,
                i.update = function(e) {}
                ,
                i.onDestroy = function() {
                    this.registerContact(!1),
                    x.stopAllByTag(this.animationTag)
                }
                ,
                i.startAnimation = function() {
                    var e = this.initPos.clone();
                    this.moveDirect == Tc.Up ? e.y = e.y + this.moveDistance : this.moveDirect == Tc.Down ? e.y = e.y - this.moveDistance : this.moveDirect == Tc.Left ? e.x = e.x - this.moveDistance : this.moveDirect == Tc.Right && (e.x = e.x + this.moveDistance),
                    z(this.node).tag(this.animationTag).sequence(z(this.node).tag(this.animationTag).to(this.moveDuration.valueOf(), {
                        position: e
                    }), z(this.node).tag(this.animationTag).to(this.moveDuration.valueOf(), {
                        position: this.initPos
                    })).repeatForever().start()
                }
                ,
                o
            }(C)).prototype, "moveDirect", [Gs], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return Tc.Up
                }
            }),
            qs = be(Vs.prototype, "moveDistance", [Os], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 0
                }
            }),
            js = be(Vs.prototype, "moveDuration", [Hs], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return .1
                }
            }),
            Us = Vs));
            o._RF.pop(),
            o._RF.push({}, "16f9a/82QhBrKdcGua0UiD9", "LevelData", void 0),
            o._RF.pop(),
            o._RF.push({}, "d2634tCWr1FH4NPDEVNYRFN", "PicDetailDialog", void 0);
            var Cc, _c, Sc, Rc, Bc, Ic, Pc, Fc, Ec, Mc, Dc, Lc, Ac, xc, zc, Gc, Oc, Hc, Uc, Vc, Wc, qc, jc, Jc, Xc = u.ccclass, Zc = u.property, Yc = (Zs = Xc("PicDetailDialog"),
            Ys = Zc(T),
            Ks = Zc(q),
            Qs = Zc([h]),
            $s = Zc(v),
            ec = Zc(v),
            tc = Zc(w),
            oc = Zc(T),
            ic = Zc(w),
            rc = Zc(T),
            nc = Zc([T]),
            lc = Zc([v]),
            Zs(((wc = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "closeNode", sc, ye(t)),
                    fe(t, "contentScrollView", cc, ye(t)),
                    fe(t, "titleSpriteFrames", dc, ye(t)),
                    fe(t, "titleSprite", mc, ye(t)),
                    fe(t, "picSprite", pc, ye(t)),
                    fe(t, "contentLabel", hc, ye(t)),
                    fe(t, "lockNode", yc, ye(t)),
                    fe(t, "unlockTimeLabel", Nc, ye(t)),
                    fe(t, "notGetNode", gc, ye(t)),
                    fe(t, "eggNodes", fc, ye(t)),
                    fe(t, "eggSpriteSprites", bc, ye(t)),
                    t.picInfo = null,
                    t.isStartGame = !1,
                    t
                }
                pe(o, e),
                o.dismissDialog = function() {
                    return !(!o.sDialog || !o.isShowed) && (o.sDialog.hide(!1),
                    !0)
                }
                ;
                var i = o.prototype;
                return i.start = function() {
                    t.log("Result Dialog start")
                }
                ,
                i.update = function(e) {}
                ,
                i.onWindowResize = function(e, t) {
                    this.adapterSmallScreen(!0)
                }
                ,
                i.adapterSmallScreen = function(e) {
                    void 0 === e && (e = !1);
                    var t = ae.getRatio();
                    if (!(t >= 1) || e) {
                        t > 1 && (t = 1);
                        var o = this.node.getComponent(V);
                        o && (o.top = ae.getWinSize().height * (1 - t) / 2,
                        o.bottom = 0,
                        o.updateAlignment())
                    }
                }
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.closeNode.active = !1,
                    this.contentScrollView.scrollToTop(),
                    this.adapterSmallScreen(),
                    this.isStartGame = !1;
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    this.picInfo = o[0],
                    this.updateUI()
                }
                ,
                i.updateUI = function() {
                    var e = this;
                    this.titleSprite.spriteFrame = this.titleSpriteFrames[this.picInfo.index],
                    this.contentLabel.string = this.picInfo.content,
                    this.picInfo.is_unlock ? (Ve.loadRemoteSpriteFrame(this.picSprite, this.picInfo.img_url),
                    this.lockNode.active = !1,
                    this.notGetNode.active = !1) : (Ve.loadRemoteSpriteFrame(this.picSprite, this.picInfo.img_url_gray),
                    this.picInfo.is_started ? (this.notGetNode.active = !0,
                    this.lockNode.active = !1) : (this.lockNode.active = !0,
                    this.notGetNode.active = !1,
                    this.unlockTimeLabel.string = Xi.getTimeYYYYMMDD(this.picInfo.start_time, !0) + "解锁"));
                    for (var o = this.picInfo.egg_list, i = function(i) {
                        if (i >= o.length || !o[i].is_unlock)
                            return e.eggNodes[i].active = !1,
                            1;
                        var r = o[i];
                        e.eggNodes[i].active = !0;
                        Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_cards/game_cards", "" + r.egg_id, (function(o, r) {
                            o ? t.logE("load sprite frame failed, err:" + o.message) : We.isValid(e.node) && (e.eggSpriteSprites[i].spriteFrame = r)
                        }
                        ))
                    }, r = 0; r < this.eggNodes.length; r++)
                        i(r)
                }
                ,
                i.on_show = function() {
                    e.prototype.on_show.call(this),
                    o.sDialog && o.isShowed && (o.sDialog.hide(),
                    o.isShowed = !1),
                    o.sDialog = this,
                    o.isShowed = !0
                }
                ,
                i.on_hide = function() {
                    e.prototype.on_hide.call(this),
                    o.isShowed = !1,
                    o.sDialog = null,
                    this.isStartGame && (Je.currentPicId = this.picInfo.picture_id,
                    Ee.click(Le.beginbutton, "storypage", {
                        level: Je.currentPicId
                    }),
                    qe.statClick(Le.beginbutton, {
                        level: Je.currentPicId,
                        from: "storypage"
                    }),
                    _t.gotoGame()),
                    this.isStartGame = !1
                }
                ,
                i.onClickStartGame = function() {
                    yi.playClick(),
                    this.hide(),
                    this.isStartGame = !0
                }
                ,
                o
            }(bt)).sDialog = null,
            wc.isShowed = !1,
            sc = be((uc = wc).prototype, "closeNode", [Ys], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            cc = be(uc.prototype, "contentScrollView", [Ks], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            dc = be(uc.prototype, "titleSpriteFrames", [Qs], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            mc = be(uc.prototype, "titleSprite", [$s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            pc = be(uc.prototype, "picSprite", [ec], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            hc = be(uc.prototype, "contentLabel", [tc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            yc = be(uc.prototype, "lockNode", [oc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Nc = be(uc.prototype, "unlockTimeLabel", [ic], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            gc = be(uc.prototype, "notGetNode", [rc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            fc = be(uc.prototype, "eggNodes", [nc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            bc = be(uc.prototype, "eggSpriteSprites", [lc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            ac = uc)) || ac);
            o._RF.pop(),
            o._RF.push({}, "69548kFcc1OH70c8UDa/o2l", "PicItem", void 0);
            var Kc = u.ccclass
              , Qc = u.property
              , $c = function() {
                function e() {
                    this.direction = 0,
                    this.picName = "",
                    this.top = 0,
                    this.bottom = 0,
                    this.width = 0,
                    this.height = 0
                }
                return e.getExtraInfoList = function() {
                    return this.init(),
                    this.extraInfoList
                }
                ,
                e.init = function() {
                    if (!(this.extraInfoList.length > 0)) {
                        this.extraSizeMap.set("pic_content_bg_draw_border", {
                            width: 348,
                            height: 420
                        }),
                        this.extraSizeMap.set("pic_content_bg_flower", {
                            width: 210,
                            height: 204
                        }),
                        this.extraSizeMap.set("pic_content_bg_pig", {
                            width: 177,
                            height: 195
                        }),
                        this.extraSizeMap.set("pic_content_bg_window", {
                            width: 174,
                            height: 363
                        });
                        var t = new e;
                        t.direction = 1,
                        t.picName = "pic_content_bg_draw_border",
                        t.top = -30,
                        this.extraInfoList.push(t);
                        var o = new e;
                        o.direction = 0,
                        o.picName = "pic_content_bg_flower",
                        o.top = 240,
                        this.extraInfoList.push(o);
                        var i = new e;
                        i.direction = 1,
                        i.picName = "pic_content_bg_window",
                        i.top = 54,
                        this.extraInfoList.push(i);
                        var r = new e;
                        r.direction = 0,
                        r.picName = "pic_content_bg_pig",
                        r.top = 156,
                        this.extraInfoList.push(r);
                        var n = new e;
                        n.direction = 1,
                        n.picName = "pic_content_bg_draw_border",
                        n.top = 177,
                        this.extraInfoList.push(n);
                        var l = new e;
                        l.direction = 0,
                        l.picName = "pic_content_bg_flower",
                        l.top = 468,
                        this.extraInfoList.push(l);
                        var a = new e;
                        a.direction = 1,
                        a.picName = "pic_content_bg_window",
                        a.top = 294,
                        this.extraInfoList.push(a);
                        var u = new e;
                        u.direction = 0,
                        u.picName = "pic_content_bg_pig",
                        u.top = 390,
                        this.extraInfoList.push(u);
                        var s = new e;
                        s.direction = 1,
                        s.picName = "pic_content_bg_draw_border",
                        s.top = 174,
                        this.extraInfoList.push(s);
                        var c = new e;
                        c.direction = 0,
                        c.picName = "pic_content_bg_flower",
                        c.top = 465,
                        this.extraInfoList.push(c)
                    }
                }
                ,
                e
            }();
            $c.extraInfoList = [],
            $c.extraSizeMap = new Map;
            var ed, td, od, id, rd, nd, ld, ad, ud, sd, cd, dd, md, pd, hd, yd, Nd, gd, fd, bd, wd, vd, kd, Td = (Cc = Kc("PicItem"),
            _c = Qc(T),
            Sc = Qc(T),
            Rc = Qc(v),
            Bc = Qc(T),
            Ic = Qc(T),
            Pc = Qc(T),
            Fc = Qc(w),
            Ec = Qc(v),
            Mc = Qc([v]),
            Dc = Qc([v]),
            Cc(((Jc = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "contentNode", xc, ye(t)),
                    fe(t, "extraNode", zc, ye(t)),
                    fe(t, "titleTimeSprite", Gc, ye(t)),
                    fe(t, "detailBtnNode", Oc, ye(t)),
                    fe(t, "notGetNode", Hc, ye(t)),
                    fe(t, "lockNode", Uc, ye(t)),
                    fe(t, "unlockTimeLabel", Vc, ye(t)),
                    fe(t, "picSprite", Wc, ye(t)),
                    fe(t, "eggBgSprites", qc, ye(t)),
                    fe(t, "eggSprites", jc, ye(t)),
                    t.picInfo = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    We.bindClick(this.detailBtnNode, this.onDetailBtnClick, this)
                }
                ,
                i.update = function(e) {}
                ,
                i.onDetailBtnClick = function() {
                    ne.emit(le.ClickPicItem, this.picInfo)
                }
                ,
                i.setData = function(e, o) {
                    var i = this;
                    this.picInfo = o;
                    var r = $c.getExtraInfoList()[e];
                    this.setExtraInfo(r);
                    for (var n = function(e) {
                        var r = o.egg_list[e];
                        if (i.eggBgSprites[e].node.active = !1,
                        r.is_unlock) {
                            i.eggBgSprites[e].node.active = !0;
                            Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_cards/game_cards", "" + r.egg_id, (function(o, r) {
                                o ? t.logE("load sprite frame failed, err:" + o.message) : We.isValid(i.node) && (i.eggSprites[e].spriteFrame = r)
                            }
                            ))
                        }
                    }, l = 0; l < o.egg_list.length; l++)
                        n(l);
                    this.unlockTimeLabel.string = Xi.getTimeYYYYMMDD(o.start_time, !0) + "解锁",
                    o.is_started && o.is_unlock ? (this.notGetNode.active = !1,
                    this.lockNode.active = !1,
                    this.unlockTimeLabel.node.active = !1,
                    Ve.loadRemoteSpriteFrame(this.picSprite, o.img_url)) : (Ve.loadRemoteSpriteFrame(this.picSprite, o.img_url_gray),
                    o.is_started ? (this.notGetNode.active = !0,
                    this.lockNode.active = !1,
                    this.unlockTimeLabel.node.active = !1) : (this.notGetNode.active = !1,
                    this.lockNode.active = !0,
                    this.unlockTimeLabel.node.active = !0))
                }
                ,
                i.updateExtraInfoWidget = function(e) {
                    var t = this.extraNode.getComponent(V);
                    0 == e.direction ? (t.isAlignLeft = !0,
                    t.isAlignRight = !1,
                    t.left = 0) : (t.isAlignLeft = !1,
                    t.isAlignRight = !0,
                    t.right = 0),
                    0 != e.top && (t.isAlignTop = !0,
                    t.isAlignBottom = !1,
                    t.top = e.top),
                    0 != e.bottom && (t.isAlignTop = !1,
                    t.isAlignBottom = !0,
                    t.bottom = e.bottom),
                    t.updateAlignment()
                }
                ,
                i.setExtraInfo = function(e) {
                    var o = this
                      , i = this.extraNode.getComponent(v)
                      , r = "resources/texture/pic_list/pic_list";
                    Ve.loadSFFromAtlas(Je.bundleName, r, e.picName, (function(n, l) {
                        n ? t.logE("load sprite frame failed, err:" + n.message + " path = " + r) : We.isValid(o.node) && (i.spriteFrame = l,
                        o.updateExtraInfoWidget(e))
                    }
                    ))
                }
                ,
                i.setLeft = function() {
                    this.contentNode.angle = -10;
                    var e = this.contentNode.getComponent(V);
                    e.left = 135,
                    e.updateAlignment()
                }
                ,
                i.setRight = function() {
                    this.contentNode.angle = 10;
                    var e = this.contentNode.getComponent(V);
                    e.left = 405,
                    e.updateAlignment()
                }
                ,
                i.setPicTimeSpriteFrame = function(e) {
                    this.titleTimeSprite.spriteFrame = e
                }
                ,
                o
            }(C)).isClickDetailDialog = !1,
            xc = be((Ac = Jc).prototype, "contentNode", [_c], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            zc = be(Ac.prototype, "extraNode", [Sc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Gc = be(Ac.prototype, "titleTimeSprite", [Rc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Oc = be(Ac.prototype, "detailBtnNode", [Bc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Hc = be(Ac.prototype, "notGetNode", [Ic], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Uc = be(Ac.prototype, "lockNode", [Pc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Vc = be(Ac.prototype, "unlockTimeLabel", [Fc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Wc = be(Ac.prototype, "picSprite", [Ec], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            qc = be(Ac.prototype, "eggBgSprites", [Mc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            jc = be(Ac.prototype, "eggSprites", [Dc], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Lc = Ac)) || Lc);
            o._RF.pop(),
            o._RF.push({}, "27d3fTa1E5IkqIs+NwCTxU0", "PicList", void 0);
            var Cd, _d, Sd, Rd, Bd, Id, Pd, Fd = u.ccclass, Ed = u.property;
            ed = Fd("PicList"),
            td = Ed(Z),
            od = Ed(T),
            id = Ed(T),
            rd = Ed(T),
            nd = Ed(v),
            ld = Ed(w),
            ad = Ed(T),
            ud = Ed(q),
            sd = Ed(h),
            cd = Ed([h]),
            ed((pd = be((md = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "backSceneName", pd, ye(t)),
                    fe(t, "closeNode", hd, ye(t)),
                    fe(t, "contentNode", yd, ye(t)),
                    fe(t, "rewardNode", Nd, ye(t)),
                    fe(t, "rewardSprite", gd, ye(t)),
                    fe(t, "progressDescLabel", fd, ye(t)),
                    fe(t, "progressBarNode", bd, ye(t)),
                    fe(t, "picScrollView", wd, ye(t)),
                    fe(t, "picRewardGetItSf", vd, ye(t)),
                    fe(t, "picTimeSpriteFrames", kd, ye(t)),
                    t.picList = [],
                    t.progress = 0,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    e.prototype.start.call(this),
                    Tt.preloadDialog(kt.PicDetailDialog),
                    We.bindClick(this.closeNode, this.onClickClose, this),
                    We.bindClick(this.rewardNode, this.onClickReward, this),
                    ne.on(le.ClickPicItem, this.onClickPicItem, this),
                    this.initPicList(),
                    this.loadData()
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy.call(this),
                    ne.off(le.ClickPicItem, this.onClickPicItem, this)
                }
                ,
                i.onClickPicItem = function(e) {
                    yi.playClick(),
                    t.log("onClickPicItem: " + e.picture_id),
                    Ee.click(Ae.clickStoryDetail, "pic_item", {
                        level: e.picture_id
                    }),
                    qe.statClick(Le.details, {
                        level: e.picture_id
                    }),
                    Tt.showNoAnimation(kt.PicDetailDialog, null, e),
                    this.contentNode.active = !1
                }
                ,
                i.onClickReward = function() {
                    yi.playClick(),
                    Tt.showFade(kt.AvatarDialog)
                }
                ,
                i.showRetryDialog = function(e) {
                    var o = this;
                    Tt.showFade(kt.CommonDialog, null, "提示", e, "返回", (function() {
                        t.log("onclick cancel"),
                        _t.backScene()
                    }
                    ), "重试", (function() {
                        t.log("onclick confirm reload data"),
                        o.loadData()
                    }
                    ))
                }
                ,
                i.loadData = function() {
                    var e = this;
                    this.showLoading(500),
                    qe.requestPost(je.getPicListURL(), {}, (function(o, i) {
                        if (e.hideLoading(),
                        We.isValid(e.node))
                            if (o) {
                                t.logE("loadData error = " + o);
                                var r = o.message;
                                r = Xi.adapterErrorMsg(r, qe.isIOS()),
                                e.showRetryDialog(r),
                                si.showToast(r)
                            } else
                                e.picList = i.list,
                                e.updatePicList()
                    }
                    ))
                }
                ,
                i.updateProgressLabel = function(e, t) {
                    this.progressDescLabel.string = e + "/" + t
                }
                ,
                i.updateProgress = function(e) {
                    var t = We.getWidth(this.progressBarNode)
                      , o = -t + t * e
                      , i = this.progressBarNode.getPosition();
                    i.x = o,
                    this.progressBarNode.setPosition(i)
                }
                ,
                i.initPicList = function(e) {
                    void 0 === e && (e = !1);
                    for (var t = this.picScrollView.content.children, o = 0; o < t.length; o++) {
                        var i = t[o].getComponent(Td);
                        i && (i.contentNode.active = e)
                    }
                }
                ,
                i.updatePicList = function() {
                    var e = this.picScrollView.content.children;
                    this.progress = 0;
                    for (var t = 0, o = 0, i = 0; i < e.length && i < this.picList.length; i++) {
                        var r = this.picList[i]
                          , n = e[i].getComponent(Td);
                        n && (r.index = i,
                        n.contentNode.active = !0,
                        n.setPicTimeSpriteFrame(this.picTimeSpriteFrames[o]),
                        n.setData(i, r),
                        r.is_unlock && t++,
                        o % 2 == 0 ? n.setLeft() : n.setRight(),
                        o++)
                    }
                    this.progress = t / o,
                    this.updateProgress(this.progress),
                    this.updateProgressLabel(t, o),
                    t == o && (this.rewardSprite.spriteFrame = this.picRewardGetItSf)
                }
                ,
                i.onClickClose = function() {
                    if (yi.playClick(),
                    t.log("onClickClose"),
                    Yc.dismissDialog())
                        return t.log("dismissPicDetailDialog"),
                        void (this.contentNode.active = !0);
                    _t.backScene()
                }
                ,
                i.update = function(e) {}
                ,
                o
            }(mo)).prototype, "backSceneName", [td], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "home"
                }
            }),
            hd = be(md.prototype, "closeNode", [od], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            yd = be(md.prototype, "contentNode", [id], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Nd = be(md.prototype, "rewardNode", [rd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            gd = be(md.prototype, "rewardSprite", [nd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            fd = be(md.prototype, "progressDescLabel", [ld], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            bd = be(md.prototype, "progressBarNode", [ad], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            wd = be(md.prototype, "picScrollView", [ud], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            vd = be(md.prototype, "picRewardGetItSf", [sd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            kd = be(md.prototype, "picTimeSpriteFrames", [cd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            dd = md));
            o._RF.pop(),
            o._RF.push({}, "72591IAN8NMz41m7PZi8HGx", "RandomRewardDialog", void 0);
            var Md, Dd, Ld, Ad, xd, zd, Gd, Od, Hd, Ud, Vd, Wd = u.ccclass, qd = u.property;
            Cd = Wd("RandomRewardDialog"),
            _d = qd(v),
            Sd = qd(w),
            Cd((Id = be((Bd = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "rewardSprite", Id, ye(t)),
                    fe(t, "rewardLabel", Pd, ye(t)),
                    t.rewardResult = null,
                    t.imgUrl = "",
                    t.shareInfo = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    t.log("Result Dialog start")
                }
                ,
                i.update = function(e) {}
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    yi.playReward(),
                    this.shareInfo = null,
                    this.imgUrl = "";
                    for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
                        o[i] = arguments[i];
                    this.rewardResult = o[0],
                    this.rewardResult && (this.shareInfo = this.rewardResult.share_info,
                    this.imgUrl = this.rewardResult.reward.img_url),
                    this.rewardSprite.spriteFrame = null,
                    Ve.loadRemoteSpriteFrame(this.rewardSprite, this.imgUrl)
                }
                ,
                i.on_show = function() {}
                ,
                i.on_hide = function() {
                    e.prototype.on_hide.call(this)
                }
                ,
                i.hide = function() {
                    yi.playClick(),
                    e.prototype.hide.call(this)
                }
                ,
                i.onClickShare = function() {
                    yi.playClick(),
                    t.log("onClickShare");
                    var e = {
                        level: Je.currentPicId,
                        page: "gift",
                        variety_id: this.rewardResult.reward.reward_id,
                        variety: this.rewardResult.reward.reward_name
                    };
                    qe.statClick(Le.sharebutton, e),
                    Ee.click(Le.sharebutton, "gift", e),
                    qe.shareWebWithInfo(this.shareInfo, (function(t) {
                        var o = me({
                            result: 1 == t ? 1 : 0,
                            page: "gift"
                        }, e);
                        Ee.stat(Ae.statShare, "gift", o),
                        qe.statShareSuccess(o)
                    }
                    ))
                }
                ,
                o
            }(bt)).prototype, "rewardSprite", [_d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Pd = be(Bd.prototype, "rewardLabel", [Sd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Rd = Bd));
            o._RF.pop(),
            o._RF.push({}, "8157abeKLlMvpnSyWwL2W8N", "SelectedButton", void 0);
            var jd = u.ccclass
              , Jd = u.property
              , Xd = (Md = jd("SelectedButton"),
            Dd = Jd(v),
            Ld = Jd(h),
            Ad = Jd(h),
            xd = Jd(G),
            Md((Od = be((Gd = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "sprite", Od, ye(t)),
                    fe(t, "normalSpriteFrame", Hd, ye(t)),
                    fe(t, "selectedSpriteFrame", Ud, ye(t)),
                    fe(t, "isSelected", Vd, ye(t)),
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.update = function(e) {}
                ,
                o.getIsSelected = function() {
                    return this.isSelected
                }
                ,
                o.setSelected = function(e) {
                    this.isSelected = e,
                    this.isSelected ? this.sprite.spriteFrame = this.selectedSpriteFrame : this.sprite.spriteFrame = this.normalSpriteFrame
                }
                ,
                t
            }(N)).prototype, "sprite", [Dd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Hd = be(Gd.prototype, "normalSpriteFrame", [Ld], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ud = be(Gd.prototype, "selectedSpriteFrame", [Ad], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Vd = be(Gd.prototype, "isSelected", [xd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            zd = Gd)) || zd);
            o._RF.pop(),
            o._RF.push({}, "f07fe5OkbxMgr17JGD5hPDd", "UserInfo", void 0);
            var Zd, Yd, Kd, Qd, $d, em, tm, om, im, rm, nm, lm, am, um, sm, cm, dm, mm, pm, hm, ym, Nm, gm, fm, bm, wm, vm, km = function(e) {
                return e.ScoreDay = "score_day",
                e.ScoreTotal = "score_all",
                e.EggDay = "egg_day",
                e.EggTotal = "egg_all",
                e
            }({}), Tm = function() {
                function e() {}
                return e.isScore = function(e) {
                    return e == km.ScoreDay || e == km.ScoreTotal
                }
                ,
                e.isEgg = function(e) {
                    return e == km.EggDay || e == km.EggTotal
                }
                ,
                e.isScoreDay = function(e) {
                    return e == km.ScoreDay
                }
                ,
                e.isScoreTotal = function(e) {
                    return e == km.ScoreTotal
                }
                ,
                e.isEggDay = function(e) {
                    return e == km.EggDay
                }
                ,
                e.isEggTotal = function(e) {
                    return e == km.EggTotal
                }
                ,
                e
            }();
            o._RF.pop(),
            o._RF.push({}, "eab2bHs+ORMpq60/4u9tmaO", "RankItem", void 0);
            var Cm, _m, Sm, Rm, Bm, Im, Pm, Fm, Em, Mm, Dm, Lm, Am, xm, zm, Gm, Om, Hm, Um, Vm, Wm, qm, jm, Jm, Xm, Zm, Ym, Km, Qm, $m = u.ccclass, ep = u.property, tp = (Zd = $m("RankItem"),
            Yd = ep(h),
            Kd = ep(h),
            Qd = ep(h),
            $d = ep(v),
            em = ep(v),
            tm = ep(w),
            om = ep(T),
            im = ep(v),
            rm = ep(w),
            nm = ep(w),
            lm = ep(v),
            am = ep([h]),
            Zd((cm = be((sm = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "rankTop3BorderSF", cm, ye(t)),
                    fe(t, "myBorderSF", dm, ye(t)),
                    fe(t, "normalBorderSF", mm, ye(t)),
                    fe(t, "borderSprite", pm, ye(t)),
                    fe(t, "rankSprite", hm, ye(t)),
                    fe(t, "rankLabel", ym, ye(t)),
                    fe(t, "rankNoNode", Nm, ye(t)),
                    fe(t, "avatarSprite", gm, ye(t)),
                    fe(t, "nameLabel", fm, ye(t)),
                    fe(t, "scoreLabel", bm, ye(t)),
                    fe(t, "colorBgSprite", wm, ye(t)),
                    fe(t, "rankNumSFS", vm, ye(t)),
                    t.index = 0,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.update = function(e) {}
                ,
                o.hideColorBg = function(e) {}
                ,
                o.updateItem = function(e, t, o, i) {
                    var r = this;
                    void 0 === o && (o = !1),
                    void 0 === i && (i = !0);
                    var n = t.ord.toString();
                    n.length < 2 && (n = "0" + n),
                    this.rankLabel.string = n,
                    this.nameLabel.string = xe.getSubStringMid(t.username, 18),
                    Tm.isScore(e) ? this.scoreLabel.string = "积分: " + t.count.toString() : Tm.isEgg(e) && (this.scoreLabel.string = "彩蛋: " + t.count.toString()),
                    1 == t.ord ? (this.borderSprite.spriteFrame = this.rankTop3BorderSF,
                    this.colorBgSprite.node.active = !0,
                    this.colorBgSprite.color = (new k).fromHEX("#FFEE6B"),
                    this.rankSprite.node.active = !0,
                    this.rankLabel.node.active = !1,
                    this.rankNoNode.active = !1,
                    this.rankSprite.spriteFrame = this.rankNumSFS[0]) : 2 == t.ord ? (this.borderSprite.spriteFrame = this.rankTop3BorderSF,
                    this.colorBgSprite.node.active = !0,
                    this.colorBgSprite.color = (new k).fromHEX("#FFF293"),
                    this.rankSprite.node.active = !0,
                    this.rankLabel.node.active = !1,
                    this.rankNoNode.active = !1,
                    this.rankSprite.spriteFrame = this.rankNumSFS[1]) : 3 == t.ord ? (this.borderSprite.spriteFrame = this.rankTop3BorderSF,
                    this.colorBgSprite.node.active = !0,
                    this.colorBgSprite.color = (new k).fromHEX("#FFF7BB"),
                    this.rankSprite.node.active = !0,
                    this.rankLabel.node.active = !1,
                    this.rankNoNode.active = !1,
                    this.rankSprite.spriteFrame = this.rankNumSFS[2]) : (this.borderSprite.spriteFrame = this.normalBorderSF,
                    this.colorBgSprite.color = (new k).fromHEX("#FFFFFF"),
                    this.rankSprite.node.active = !1,
                    this.rankLabel.node.active = !0,
                    this.rankNoNode.active = !1),
                    !i && o && (0 == t.ord && (this.rankSprite.node.active = !1,
                    this.rankLabel.node.active = !1,
                    this.rankNoNode.active = !0),
                    this.colorBgSprite.node.active = !0,
                    this.colorBgSprite.color = (new k).fromHEX("#FFFCD1")),
                    i && o && (this.borderSprite.spriteFrame = this.myBorderSF),
                    this.avatarSprite.spriteFrame = null,
                    Ve.loadRemoteSpriteFrameByURL(t.avatar_url, (function(e, t) {
                        We.isValid(r.node) && t && r.node.active && (r.avatarSprite.spriteFrame = t)
                    }
                    ))
                }
                ,
                t
            }(C)).prototype, "rankTop3BorderSF", [Yd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            dm = be(sm.prototype, "myBorderSF", [Kd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            mm = be(sm.prototype, "normalBorderSF", [Qd], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            pm = be(sm.prototype, "borderSprite", [$d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            hm = be(sm.prototype, "rankSprite", [em], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ym = be(sm.prototype, "rankLabel", [tm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Nm = be(sm.prototype, "rankNoNode", [om], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            gm = be(sm.prototype, "avatarSprite", [im], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            fm = be(sm.prototype, "nameLabel", [rm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            bm = be(sm.prototype, "scoreLabel", [nm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            wm = be(sm.prototype, "colorBgSprite", [lm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            vm = be(sm.prototype, "rankNumSFS", [am], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            um = sm)) || um);
            o._RF.pop(),
            o._RF.push({}, "41850ls0epHf5JsTS5ZuxTx", "RankDialog", void 0);
            var op, ip = u.ccclass, rp = u.property;
            Cm = ip("RankDialog"),
            _m = rp(T),
            Sm = rp(T),
            Rm = rp(T),
            Bm = rp(T),
            Im = rp(Xd),
            Pm = rp(Xd),
            Fm = rp(q),
            Em = rp(T),
            Mm = rp(c),
            Dm = rp(tp),
            Lm = rp(H),
            Am = rp(H),
            xm = rp(H),
            Cm((Om = be((Gm = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "normalScoreNode", Om, ye(t)),
                    fe(t, "selectedScoreNode", Hm, ye(t)),
                    fe(t, "normalEggNode", Um, ye(t)),
                    fe(t, "selectedEggNode", Vm, ye(t)),
                    fe(t, "dailyRankBtn", Wm, ye(t)),
                    fe(t, "totalRankBtn", qm, ye(t)),
                    fe(t, "rankScrollView", jm, ye(t)),
                    fe(t, "scrollContent", Jm, ye(t)),
                    fe(t, "rankItemPrefab", Xm, ye(t)),
                    fe(t, "myRankItem", Zm, ye(t)),
                    fe(t, "paddingTop", Ym, ye(t)),
                    fe(t, "paddingBottom", Km, ye(t)),
                    fe(t, "gap", Qm, ye(t)),
                    t.dailyRankSelected = !0,
                    t.scoreTabSelected = !0,
                    t.eggTabSelected = !1,
                    t.rankType = km.ScoreDay,
                    t.rankList = [],
                    t.myInfo = null,
                    t.isLoading = !1,
                    t.loadingTimeHandler = null,
                    t.isShowLoading = !1,
                    t.rankItemsPool = [],
                    t.newRankItemCount = 0,
                    t.showLoadingCount = 0,
                    t.scrollViewHeight = 0,
                    t.scrollViewItemHeight = 0,
                    t.scrollViewItemWidth = 0,
                    t.firstIndex = 0,
                    t.lastIndex = 0,
                    t.scrollItemArray = [],
                    t.currentLoadingType = null,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.showLoading = function(e) {
                    var t = this;
                    void 0 === e && (e = 0),
                    this.showLoadingCount++,
                    this.loadingTimeHandler && clearTimeout(this.loadingTimeHandler),
                    this.loadingTimeHandler = setTimeout((function() {
                        t.loadingTimeHandler = null,
                        We.isValid(t.node) && (eo.show(!1, t.node, (function() {
                            return t.showLoadingCount > 0
                        }
                        )),
                        t.isShowLoading = !0)
                    }
                    ), e)
                }
                ,
                i.hideLoading = function() {
                    this.showLoadingCount--,
                    null != this.loadingTimeHandler && clearTimeout(this.loadingTimeHandler),
                    this.isShowLoading && eo.hide(this.node),
                    this.isShowLoading = !1
                }
                ,
                i.initScrollItemArray = function() {
                    for (var e = 0; e < 100; e++)
                        this.scrollItemArray.push(null)
                }
                ,
                i.resetScrollItemArray = function() {
                    for (var e = 0; e < 100; e++)
                        this.scrollItemArray[e] = null
                }
                ,
                i.start = function() {
                    t.log("Result Dialog start"),
                    this.initScrollItemArray()
                }
                ,
                i.onEnable = function() {
                    t.log("Rank Dialog onEnable"),
                    this.rankScrollView.node.on(q.EventType.SCROLL_ENDED, this.onRankListScrollEnd, this),
                    this.rankScrollView.node.on(q.EventType.SCROLLING, this.onScrolling, this),
                    this.rankScrollView.node.on(q.EventType.SCROLL_BEGAN, this.onRankListScrollBegin, this)
                }
                ,
                i.onDisable = function() {
                    t.log("Rank Dialog onDisable"),
                    this.rankScrollView.node.off(q.EventType.SCROLL_ENDED, this.onRankListScrollEnd, this),
                    this.rankScrollView.node.off(q.EventType.SCROLLING, this.onScrolling, this),
                    this.rankScrollView.node.off(q.EventType.SCROLL_BEGAN, this.onRankListScrollBegin, this)
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy.call(this)
                }
                ,
                i.onScrolling = function() {
                    var e = this.rankScrollView.getScrollOffset();
                    this.updateItem(e)
                }
                ,
                i.updateItem = function(e) {
                    var t = Math.floor((this.scrollViewHeight + e.y) / (this.scrollViewItemHeight + this.gap))
                      , o = Math.floor(e.y / (this.scrollViewItemHeight + this.gap))
                      , i = this.firstIndex != o && o >= 0;
                    i && (this.firstIndex = o,
                    this.firstChanged());
                    var r = this.lastIndex != t;
                    r && (this.lastIndex = t,
                    this.lastChanged()),
                    (i || r) && (this.checkItemRender(),
                    this.recheckItemCreate())
                }
                ,
                i.recheckItemCreate = function() {
                    for (var e = this.firstIndex; e < this.lastIndex; e++) {
                        this.scrollItemArray[e] || (this.scrollItemArray[e] = this.addRankItem(this.rankList[e], e))
                    }
                }
                ,
                i.lastChanged = function() {
                    this.scrollItemArray[this.lastIndex] || (this.lastIndex >= this.rankList.length ? t.log("lastChanged out of range lastIndex = " + this.lastIndex) : this.scrollItemArray[this.lastIndex] = this.addRankItem(this.rankList[this.lastIndex], this.lastIndex))
                }
                ,
                i.checkItemRender = function() {
                    var e = this;
                    this.scrollItemArray.forEach((function(t, o) {
                        t && (o < e.firstIndex || o > e.lastIndex ? t.node.active = !1 : t.node.active = !0)
                    }
                    ))
                }
                ,
                i.firstChanged = function() {}
                ,
                i.updateScrollViewHeight = function() {
                    var e = this.rankScrollView.node.getComponent(_);
                    this.scrollViewHeight = e.contentSize.height
                }
                ,
                i.onRankListScrollBegin = function() {
                    this.updateScrollViewHeight(),
                    t.log("onRankListScrollBegin scrollViewHeight = " + this.scrollViewHeight)
                }
                ,
                i.onRankListScrollEnd = function() {
                    t.log("onRankListScrollEnd"),
                    this.recheckItemCreate(),
                    this.checkItemRender()
                }
                ,
                i.update = function(e) {}
                ,
                i.showErrorDialog = function(e, o) {
                    var i = this;
                    Tt.showFade(kt.CommonDialog, null, "提示", e, "退出", (function() {
                        t.log("onclick cancel"),
                        i.hide()
                    }
                    ), "重试", (function() {
                        t.log("onclick confirm reload data"),
                        o && o()
                    }
                    ))
                }
                ,
                i.loadRankList = function(e) {
                    var o = this
                      , i = {
                        rank_type: e
                    };
                    this.currentLoadingType = e,
                    this.showLoading(500),
                    qe.requestPost(je.getRankListURL(), i, (function(i, r) {
                        if (We.isValid(o.node))
                            if (o.currentLoadingType == e)
                                if (o.isLoading = !1,
                                o.hideLoading(),
                                i) {
                                    var n = i.message;
                                    t.log("loadData error = " + i + ", error.message = " + n),
                                    n = Xi.adapterErrorMsg(n, qe.isIOS()),
                                    o.showErrorDialog(n, (function() {
                                        o.loadRankList(e)
                                    }
                                    )),
                                    si.showToast(n)
                                } else
                                    o.rankList = r.list,
                                    o.myInfo = r.user_info,
                                    o.updateRankList(),
                                    o.updateMyRank();
                            else
                                t.log("loadRankList currentLoadingType != type, currentLoadingType = " + o.currentLoadingType + ", type = " + e)
                    }
                    ))
                }
                ,
                i.updateRankList = function() {
                    var e = this;
                    t.log("updateRankList"),
                    this.updateScrollViewHeight(),
                    this.rankScrollView.stopAutoScroll(),
                    this.rankScrollView.scrollToTop(),
                    this.rankScrollView.content.children.forEach((function(t) {
                        var o = t.getComponent(tp);
                        o && e.rankItemsPool.push(o)
                    }
                    )),
                    this.scrollViewItemHeight = this.rankItemsPool[0].node.getComponent(_).contentSize.height,
                    this.scrollViewItemWidth = this.rankItemsPool[0].node.getComponent(_).contentSize.width;
                    var o = this.scrollContent.getComponent(_)
                      , i = this.rankList.length * (this.scrollViewItemHeight + this.gap) - this.gap + this.paddingTop + this.paddingBottom;
                    o.setContentSize(o.contentSize.width, i);
                    var r = Math.ceil(this.scrollViewHeight / this.scrollViewItemHeight);
                    r += 2,
                    this.rankScrollView.content.removeAllChildren(),
                    this.resetScrollItemArray();
                    for (var n = 0; n < this.rankList.length && n < r; n++) {
                        var l = this.addRankItem(this.rankList[n], n);
                        this.scrollItemArray[n] = l
                    }
                }
                ,
                i.updateMyRank = function() {
                    this.myRankItem.updateItem(this.rankType, this.myInfo, !0, !1),
                    this.myRankItem.hideColorBg(!0)
                }
                ,
                i.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.dailyRankSelected = !0,
                    this.scoreTabSelected = !0,
                    this.eggTabSelected = !1,
                    this.rankType = km.ScoreDay,
                    this.updateTab()
                }
                ,
                i.on_show = function() {
                    this.tabChange()
                }
                ,
                i.updateTab = function() {
                    this.scoreTabSelected ? (this.normalScoreNode.active = !1,
                    this.selectedScoreNode.active = !0) : (this.normalScoreNode.active = !0,
                    this.selectedScoreNode.active = !1),
                    this.eggTabSelected ? (this.normalEggNode.active = !1,
                    this.selectedEggNode.active = !0) : (this.normalEggNode.active = !0,
                    this.selectedEggNode.active = !1),
                    this.dailyRankSelected = !0,
                    this.updateSelectedRankList()
                }
                ,
                i.updateSelectedRankList = function() {
                    this.dailyRankBtn.setSelected(this.dailyRankSelected),
                    this.totalRankBtn.setSelected(!this.dailyRankSelected)
                }
                ,
                i.createRankItem = function() {
                    var e = this.rankItemsPool.pop();
                    return e || (this.newRankItemCount++,
                    e = b(this.rankItemPrefab).getComponent(tp))
                }
                ,
                i.addRankItem = function(e, t) {
                    var o = this.createRankItem();
                    return o.node.active = !0,
                    o.index = t,
                    o.updateItem(this.rankType, e, e.mid == this.myInfo.mid, !0),
                    this.rankScrollView.content.addChild(o.node),
                    o.node.setPosition(new a(-this.scrollViewItemWidth / 2,-t * (this.scrollViewItemHeight + this.gap) - this.paddingTop,0)),
                    o
                }
                ,
                i.hide = function() {
                    yi.playClick(),
                    e.prototype.hide.call(this)
                }
                ,
                i.on_hide = function() {
                    e.prototype.on_hide.call(this)
                }
                ,
                i.onClickScoreTab = function() {
                    yi.playClick(),
                    this.isLoading || this.scoreTabSelected || (this.scoreTabSelected = !0,
                    this.eggTabSelected = !1,
                    this.scoreTabSelected ? this.rankType = km.ScoreDay : this.rankType = km.EggDay,
                    this.updateTab(),
                    this.tabChange())
                }
                ,
                i.onClickEggTab = function() {
                    yi.playClick(),
                    this.isLoading || this.eggTabSelected || (this.scoreTabSelected = !1,
                    this.eggTabSelected = !0,
                    this.scoreTabSelected ? this.rankType = km.ScoreDay : this.rankType = km.EggDay,
                    this.updateTab(),
                    this.tabChange())
                }
                ,
                i.onClickDailyRank = function() {
                    yi.playClick(),
                    this.isLoading || this.dailyRankSelected || (this.dailyRankSelected = !0,
                    this.scoreTabSelected ? this.rankType = km.ScoreDay : this.rankType = km.EggDay,
                    this.updateSelectedRankList(),
                    this.rankChange(),
                    t.log("onClickDailyRank"))
                }
                ,
                i.onClickTotalRank = function() {
                    yi.playClick(),
                    this.isLoading || this.dailyRankSelected && (this.dailyRankSelected = !1,
                    this.scoreTabSelected ? this.rankType = km.ScoreTotal : this.rankType = km.EggTotal,
                    this.updateSelectedRankList(),
                    this.rankChange(),
                    t.log("onClickTotalRank"))
                }
                ,
                i.tabChange = function() {
                    t.log("tabChange"),
                    this.isLoading || (this.isLoading = !0,
                    this.loadRankList(this.rankType))
                }
                ,
                i.rankChange = function() {
                    t.log("rankChange"),
                    this.isLoading || (this.isLoading = !0,
                    this.loadRankList(this.rankType))
                }
                ,
                i.onClickViewRankReward = function() {
                    yi.playClick(),
                    Tt.showFade(kt.RuleDialog),
                    t.log("onClickViewRankReward")
                }
                ,
                o
            }(bt)).prototype, "normalScoreNode", [_m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Hm = be(Gm.prototype, "selectedScoreNode", [Sm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Um = be(Gm.prototype, "normalEggNode", [Rm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Vm = be(Gm.prototype, "selectedEggNode", [Bm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Wm = be(Gm.prototype, "dailyRankBtn", [Im], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            qm = be(Gm.prototype, "totalRankBtn", [Pm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            jm = be(Gm.prototype, "rankScrollView", [Fm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Jm = be(Gm.prototype, "scrollContent", [Em], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Xm = be(Gm.prototype, "rankItemPrefab", [Mm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Zm = be(Gm.prototype, "myRankItem", [Dm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ym = be(Gm.prototype, "paddingTop", [Lm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 45
                }
            }),
            Km = be(Gm.prototype, "paddingBottom", [Am], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 45
                }
            }),
            Qm = be(Gm.prototype, "gap", [xm], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return 42
                }
            }),
            zm = Gm));
            o._RF.pop(),
            o._RF.push({}, "c0556hokwxB7oMxlA1ctlqA", "RuleDialog", void 0);
            var np, lp = u.ccclass;
            u.property,
            lp("RuleDialog")(op = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.on_will_show = function() {
                    e.prototype.on_will_show.call(this),
                    this.node.setSiblingIndex(2e3)
                }
                ,
                o.on_show = function() {}
                ,
                o.hide = function() {
                    yi.playClick(),
                    e.prototype.hide.call(this)
                }
                ,
                t
            }(bt));
            o._RF.pop(),
            o._RF.push({}, "7abearBg95B2rKerpaAROD/", "StoryUI", void 0);
            var ap, up, sp, cp, dp, mp, pp, hp = u.ccclass;
            u.property,
            hp("StoryUI")(np = function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {}
                ,
                o.update = function(e) {}
                ,
                o.onClickClose = function() {
                    yi.playClick(),
                    this.setNotNewUser(),
                    this.node.removeFromParent()
                }
                ,
                o.setNotNewUser = function() {
                    Ze.inst.setConfigNumber("is_not_new_user", 1)
                }
                ,
                o.onClickStart = function() {
                    yi.playClick(),
                    this.setNotNewUser(),
                    this.node.removeFromParent(),
                    ne.emit(le.GuideStoryStartGame)
                }
                ,
                t
            }(C));
            o._RF.pop(),
            o._RF.push({}, "e3c25H6lxVOfYhKcHEBtX3z", "Test", void 0);
            var yp = u.ccclass
              , Np = u.property;
            ap = yp("Test"),
            up = Np(v),
            sp = Np(w),
            ap((mp = be((dp = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "imgSprite", mp, ye(t)),
                    fe(t, "userInfo", pp, ye(t)),
                    t.clickCount = 0,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {}
                ,
                i.update = function(e) {}
                ,
                i.onClickGetUserInfo = function() {}
                ,
                i.onClickSF = function() {
                    this.clickCount++,
                    this.clickCount % 2 != 0 ? (this.imgSprite.node.parent || this.node.addChild(this.imgSprite.node),
                    Ve.loadSpriteFrame(this.imgSprite, "texture/splash/splash_age_tip"),
                    t.log("hit percent = " + Oe.hitPercent() + "%")) : this.imgSprite.node.removeFromParent()
                }
                ,
                i.onClickDialog = function() {
                    Tt.showScale(kt.ToolDialog)
                }
                ,
                o
            }(C)).prototype, "imgSprite", [up], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            pp = be(dp.prototype, "userInfo", [sp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            cp = dp));
            o._RF.pop(),
            o._RF.push({}, "6392cvYx+ZGJJS2jFjzg2gY", "AdConfig", void 0),
            o._RF.pop(),
            o._RF.push({}, "ceed8aPZ69K4I35/V158nVb", "EggInfo", void 0),
            o._RF.pop(),
            o._RF.push({}, "10fa3Df5uZF5LBn3l4mdxlV", "GameInfo", void 0),
            o._RF.pop(),
            o._RF.push({}, "030a1LhgNVIEYYOb/N0xQK9", "GameResult", void 0),
            o._RF.pop(),
            o._RF.push({}, "99cf5lPJF9JHbsTaKqi2Uxw", "HomeData", void 0),
            o._RF.pop(),
            o._RF.push({}, "1fc32Vud+ZKc56WqjjkkvGo", "MapInfo", void 0);
            u.ccclass,
            u.property;
            o._RF.pop(),
            o._RF.push({}, "17762AgdvFHGpuz/Z/ZC0G6", "PictureInfo", void 0);
            var gp, fp, bp, wp, vp, kp, Tp, Cp, _p, Sp, Rp, Bp, Ip, Pp, Fp, Ep, Mp, Dp, Lp, Ap, xp, zp, Gp, Op, Hp, Up, Vp, Wp, qp, jp, Jp, Xp, Zp, Yp, Kp, Qp, $p, eh, th, oh, ih, rh, nh, lh, ah;
            u.ccclass,
            u.property;
            o._RF.pop(),
            o._RF.push({}, "12615qwUwlBXL6CQfhhUXGW", "RewardInfo", void 0),
            o._RF.pop(),
            o._RF.push({}, "bc351yj3pREkKF6G/MjlAPN", "RewardResult", void 0),
            o._RF.pop(),
            o._RF.push({}, "0311bZD36VHAqRHCmObfydM", "ShareInfo", void 0),
            o._RF.pop(),
            o._RF.push({}, "fee3b2zxrlDlrkIYrEyfB2Z", "BridgeTest", void 0);
            var uh, sh, ch, dh, mh, ph, hh, yh, Nh, gh, fh, bh, wh, vh, kh, Th, Ch, _h, Sh, Rh, Bh, Ih, Ph, Fh, Eh, Mh, Dh, Lh, Ah, xh, zh, Gh, Oh = u.ccclass, Hh = u.property;
            gp = Oh("BridgeTest"),
            fp = Hh(T),
            bp = Hh(T),
            wp = Hh(T),
            vp = Hh(T),
            kp = Hh(T),
            Tp = Hh(T),
            Cp = Hh(T),
            _p = Hh(T),
            Sp = Hh(T),
            Rp = Hh(T),
            Bp = Hh(T),
            Ip = Hh(T),
            Pp = Hh(T),
            Fp = Hh(T),
            Ep = Hh(T),
            Mp = Hh(T),
            Dp = Hh(v),
            Lp = Hh(T),
            Ap = Hh(T),
            xp = Hh(T),
            zp = Hh(T),
            gp((Hp = be((Op = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "shareBtn", Hp, ye(t)),
                    fe(t, "screenshotBtn", Up, ye(t)),
                    fe(t, "saveImgBtn", Vp, ye(t)),
                    fe(t, "httpRequestPostHeaderBtn", Wp, ye(t)),
                    fe(t, "httpRequestPostBtn", qp, ye(t)),
                    fe(t, "httpRequestGetBtn", jp, ye(t)),
                    fe(t, "statActionBtn", Jp, ye(t)),
                    fe(t, "versionCheckBtn", Xp, ye(t)),
                    fe(t, "openMarketBtn", Zp, ye(t)),
                    fe(t, "showAdBtn", Yp, ye(t)),
                    fe(t, "musicBtn", Kp, ye(t)),
                    fe(t, "musicNode", Qp, ye(t)),
                    fe(t, "shareURLBtn", $p, ye(t)),
                    fe(t, "shareScreenShotBtn", eh, ye(t)),
                    fe(t, "shareBase64Btn", th, ye(t)),
                    fe(t, "startGameBtn", oh, ye(t)),
                    fe(t, "shareScreenShotImg", ih, ye(t)),
                    fe(t, "printInfoBtn", rh, ye(t)),
                    fe(t, "shareWebBtn", nh, ye(t)),
                    fe(t, "sharePicBtn", lh, ye(t)),
                    fe(t, "shareImgBtn", ah, ye(t)),
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.start = function() {
                    We.bindClick(this.shareBtn, this.onShareBtnClick, this),
                    We.bindClick(this.screenshotBtn, this.onScreenshotBtnClick, this),
                    We.bindClick(this.saveImgBtn, this.onSaveImgBtnClick, this),
                    We.bindClick(this.httpRequestPostHeaderBtn, this.onHttpRequestPostHeaderBtnClick, this),
                    We.bindClick(this.httpRequestPostBtn, this.onHttpRequestPostBtnClick, this),
                    We.bindClick(this.httpRequestGetBtn, this.onHttpRequestGetBtnClick, this),
                    We.bindClick(this.statActionBtn, this.onStatActionBtnClick, this),
                    We.bindClick(this.versionCheckBtn, this.onVersionCheckBtnClick, this),
                    We.bindClick(this.openMarketBtn, this.onOpenMarketBtnClick, this),
                    We.bindClick(this.showAdBtn, this.onShowAdBtnClick, this),
                    We.bindClick(this.musicBtn, this.onMusicBtnClick, this),
                    We.bindClick(this.shareURLBtn, this.onShareURLBtnClick, this),
                    We.bindClick(this.shareScreenShotBtn, this.onShareScreenShotBtnClick, this),
                    We.bindClick(this.shareBase64Btn, this.onShareBase64BtnClick, this),
                    We.bindClick(this.startGameBtn, this.onStartGameBtnClick, this),
                    We.bindClick(this.shareWebBtn, this.onShareWebBtnClick, this),
                    We.bindClick(this.sharePicBtn, this.onSharePicBtnClick, this),
                    We.bindClick(this.shareImgBtn, this.onShareImgBtnClick, this),
                    We.bindClick(this.printInfoBtn, this.onPrintInfoBtnClick, this),
                    t.log("start pressBack 111"),
                    qe.pressBack((function() {
                        t.log("back"),
                        Tt.showFade(kt.CommonDialog)
                    }
                    )),
                    this.musicNode.active = Ze.inst.musicOn
                }
                ,
                i.onPrintInfoBtnClick = function() {
                    t.log("url = " + window.location.href),
                    t.log("printInfoBtnClick isAndroid = " + qe.isAndroid() + ", isIOS = " + qe.isIOS())
                }
                ,
                i.onMusicBtnClick = function() {
                    t.log("onMusicBtnClick"),
                    Ze.inst.musicOn = !Ze.inst.musicOn,
                    We.updateButtonLabel(this.musicBtn, Ze.inst.musicOn ? "音乐:开" : "音乐:关"),
                    this.musicNode.active = Ze.inst.musicOn
                }
                ,
                i.onShowAdBtnClick = function() {
                    t.log("onShowAdBtnClick"),
                    qe.showRewardAd((function(e) {
                        t.log("showRewardAd rs = " + e),
                        si.showToast(e ? "广告播放成功" : "广告播放失败")
                    }
                    ))
                }
                ,
                i.onShareBtnClick = function() {
                    t.log("onShareBtnClick"),
                    qe.vibrate();
                    qe.shareWeb(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", "https://www.baidu.com", "https://file.ippzone.com/account/avatar/id/421983271/sz/src", !1, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    ))
                }
                ,
                i.onScreenshotBtnClick = function() {
                    var e = this;
                    this.shareScreenShotImg.spriteFrame = null,
                    We.captureScreenshotToRenderTexture().then((function(o) {
                        t.log("captureScreenshotToRenderTexture texture = ", o),
                        e.shareScreenShotImg.spriteFrame = new h,
                        e.shareScreenShotImg.spriteFrame.texture = o
                    }
                    )),
                    t.log("onScreenshotBtnClick"),
                    qe.saveScreenshot((function(e) {
                        t.log("httpRequestGet callback, typeof result = " + typeof e),
                        t.log("saveScreenshot result = " + JSON.stringify(e)),
                        si.showToast(1 == e.ret ? "保存成功" : "保存失败")
                    }
                    ))
                }
                ,
                i.onSaveImgBtnClick = function() {
                    t.log("onSaveImgBtnClick isAndroid = " + qe.isAndroid() + ", isIOS = " + qe.isIOS()),
                    qe.saveImage("https://file.izuiyou.com/img/view/id/2398220875", (function(e) {
                        t.log("httpRequestGet callback, typeof result = " + typeof e),
                        t.log("saveImage result = " + JSON.stringify(e)),
                        si.showToast(1 == e.ret ? "保存成功" : "保存失败")
                    }
                    ))
                }
                ,
                i.onHttpRequestPostHeaderBtnClick = function() {
                    t.log("onHttpRequestPostHeaderBtnClick"),
                    qe.httpRequestPost("https://api.izuiyou.com/config/special_topic_like", {
                        params1: "value1"
                    }, {
                        header1: "value1"
                    }, (function(e) {
                        t.log("httpRequestGet callback, typeof result = " + typeof e),
                        t.log("httpRequestPost result = " + JSON.stringify(e))
                    }
                    ))
                }
                ,
                i.onHttpRequestPostBtnClick = function() {
                    t.log("onHttpRequestPostBtnClick"),
                    qe.httpRequestPost("https://api.izuiyou.com/config/special_topic_like", {
                        params2: "value2"
                    }, {}, (function(e) {
                        t.log("httpRequestGet callback, typeof result = " + typeof e),
                        t.log("httpRequestPost result = " + JSON.stringify(e))
                    }
                    ))
                }
                ,
                i.onHttpRequestGetBtnClick = function() {
                    t.log("onHttpRequestGetBtnClick"),
                    qe.httpRequestGet("https://h5cdn.izuiyou.com/h5libs/@xc/jsbridge/index.js?ver=10", {}, (function(e) {
                        t.log("httpRequestGet callback, typeof result = " + typeof e),
                        t.log("httpRequestGet result = " + JSON.stringify(e))
                    }
                    ))
                }
                ,
                i.onStatActionBtnClick = function() {
                    t.log("onStatActionBtnClick"),
                    qe.statAction("type1", "stype1", "fromInfo1", {
                        data1: "value1",
                        data2: {
                            key2: "value2"
                        }
                    })
                }
                ,
                i.onVersionCheckBtnClick = function() {
                    t.log("onVersionCheckBtnClick"),
                    t.log("ZYHostHelper.isLessThanVersion(7.0.0) = " + qe.isLessThanVersion("7.0.0")),
                    qe.checkUpgrade()
                }
                ,
                i.onOpenMarketBtnClick = function() {
                    t.log("onOpenMarketBtnClick"),
                    qe.openMarket("cn.xiaochuankeji.tieba")
                }
                ,
                i.onShareURLBtnClick = function() {
                    t.log("onShareURLBtnClick"),
                    qe.vibrate();
                    var e = "https://file.izuiyou.com/img/view/id/2398220875"
                      , o = "https://www.baidu.com";
                    qe.isIOS() ? qe.shareImg(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", o, e, !1, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    )) : qe.sharePic(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", o, e, !1, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    ))
                }
                ,
                i.onShareScreenShotBtnClick = function() {
                    t.log("onShareScreenShotBtnClick"),
                    qe.vibrate();
                    var e = "https://www.baidu.com";
                    qe.isIOS() ? qe.shareImg(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", e, "", !0, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    )) : qe.sharePic(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", e, "", !0, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    ))
                }
                ,
                i.onShareBase64BtnClick = function() {
                    t.log("onShareBase64BtnClick");
                    var e = "https://www.baidu.com";
                    We.captureScreenshot().then((function(t) {
                        console.log("saveScreenshot base64", t),
                        qe.isIOS() ? qe.shareImg(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", e, "", !1, t, (function(e) {
                            qe.showToast(1 == e ? "分享成功" : "分享失败")
                        }
                        )) : qe.sharePic(Je.sharePlatforms, "十周年活动等你来", "来吧，一起玩，一起赢大奖", e, "", !1, t, (function(e) {
                            qe.showToast(1 == e ? "分享成功" : "分享失败")
                        }
                        ))
                    }
                    )).catch((function(e) {
                        console.error("saveScreenshot error", e)
                    }
                    ))
                }
                ,
                i.onStartGameBtnClick = function() {
                    t.log("onStartGameBtnClick"),
                    _t.loadScene("game")
                }
                ,
                i.onShareWebBtnClick = function() {
                    t.log("onShareWebBtnClick");
                    qe.shareWeb(Je.sharePlatformsOnlyZuiyou, "十周年活动等你来", "来吧，一起玩，一起赢大奖", "https://www.baidu.com", "https://file.izuiyou.com/img/view/id/2398220875", !1, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    ))
                }
                ,
                i.onSharePicBtnClick = function() {
                    t.log("onSharePicBtnClick");
                    qe.sharePic(Je.sharePlatformsOnlyZuiyou, "十周年活动等你来", "来吧，一起玩，一起赢大奖", "https://www.baidu.com", "https://file.izuiyou.com/img/view/id/2398220875", !1, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    ))
                }
                ,
                i.onShareImgBtnClick = function() {
                    t.log("onShareImgBtnClick");
                    qe.shareImg(Je.sharePlatformsOnlyZuiyou, "十周年活动等你来", "来吧，一起玩，一起赢大奖", "", "https://file.izuiyou.com/img/view/id/2398220875", !1, "", (function(e) {
                        qe.showToast(1 == e ? "分享成功" : "分享失败")
                    }
                    ))
                }
                ,
                o
            }(C)).prototype, "shareBtn", [fp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Up = be(Op.prototype, "screenshotBtn", [bp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Vp = be(Op.prototype, "saveImgBtn", [wp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Wp = be(Op.prototype, "httpRequestPostHeaderBtn", [vp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            qp = be(Op.prototype, "httpRequestPostBtn", [kp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            jp = be(Op.prototype, "httpRequestGetBtn", [Tp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Jp = be(Op.prototype, "statActionBtn", [Cp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Xp = be(Op.prototype, "versionCheckBtn", [_p], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Zp = be(Op.prototype, "openMarketBtn", [Sp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Yp = be(Op.prototype, "showAdBtn", [Rp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Kp = be(Op.prototype, "musicBtn", [Bp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Qp = be(Op.prototype, "musicNode", [Ip], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            $p = be(Op.prototype, "shareURLBtn", [Pp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            eh = be(Op.prototype, "shareScreenShotBtn", [Fp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            th = be(Op.prototype, "shareBase64Btn", [Ep], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            oh = be(Op.prototype, "startGameBtn", [Mp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ih = be(Op.prototype, "shareScreenShotImg", [Dp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            rh = be(Op.prototype, "printInfoBtn", [Lp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            nh = be(Op.prototype, "shareWebBtn", [Ap], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            lh = be(Op.prototype, "sharePicBtn", [xp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            ah = be(Op.prototype, "shareImgBtn", [zp], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Gp = Op));
            o._RF.pop(),
            o._RF.push({}, "72f1e8WsrlLgoRWEQG0WfP8", "Home", void 0);
            var Uh, Vh, Wh, qh, jh, Jh = u.ccclass, Xh = u.property;
            uh = Jh("Home"),
            sh = Xh(c),
            ch = Xh(T),
            dh = Xh(T),
            mh = Xh(T),
            ph = Xh([T]),
            hh = Xh(T),
            yh = Xh(T),
            Nh = Xh(T),
            gh = Xh(T),
            fh = Xh(T),
            bh = Xh(T),
            wh = Xh(T),
            vh = Xh(Z),
            kh = Xh(Z),
            uh(((Gh = function(e) {
                function o() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "storyPrefab", _h, ye(t)),
                    fe(t, "exitBtn", Sh, ye(t)),
                    fe(t, "shareBtn", Rh, ye(t)),
                    fe(t, "noticeContainerNode", Bh, ye(t)),
                    fe(t, "noticeNodes", Ih, ye(t)),
                    fe(t, "startGameBtn", Ph, ye(t)),
                    fe(t, "collectionsBtn", Fh, ye(t)),
                    fe(t, "collectionTipNode", Eh, ye(t)),
                    fe(t, "collectionRedNode", Mh, ye(t)),
                    fe(t, "rankBtn", Dh, ye(t)),
                    fe(t, "ruleBtn", Lh, ye(t)),
                    fe(t, "settingBtn", Ah, ye(t)),
                    fe(t, "gameSceneName", xh, ye(t)),
                    fe(t, "picListSceneName", zh, ye(t)),
                    t.homeData = null,
                    t.noticeIndex = 0,
                    t.collectionTipShowCount = 0,
                    t.isOpenedLogin = !1,
                    t.isLoading = !1,
                    t
                }
                pe(o, e);
                var i = o.prototype;
                return i.isNewUser = function() {
                    var e = Ze.inst.getConfigNumber("is_not_new_user");
                    return null == e || 0 == e
                }
                ,
                i.preloadDialog = function() {
                    Tt.preloadDialog(kt.SettingDialog),
                    Tt.preloadDialog(kt.ExitDialog),
                    Tt.preloadDialog(kt.RankDialog)
                }
                ,
                i.start = function() {
                    e.prototype.start.call(this),
                    this.preloadDialog(),
                    this.preloadGameCard();
                    var t = Ze.inst.getConfigNumber("is_first_unlock_pic")
                      , i = Ze.inst.getConfigNumber("is_showed_red");
                    if (this.collectionRedNode.active = t >= 1 && 0 == i,
                    this.collectionRedNode.active && Ze.inst.setConfigNumber("is_showed_red", 1),
                    !o.isStatViewed) {
                        var r = qe.isLogin()
                          , n = qe.getFrom();
                        Ee.viewGame({
                            is_login: r,
                            from: n
                        }),
                        o.isStatViewed = !0,
                        Qe.isStatViewedSt = Qe.getCurrentTimeMs(),
                        qe.statViewHome()
                    }
                    if (ne.on(le.GameExit, this.onGameExit, this),
                    ne.on(le.GuideStoryStartGame, this.onGuideStoryStartGame, this),
                    We.bindClick(this.exitBtn, this.onExitBtnClick, this),
                    We.bindClick(this.shareBtn, this.onShareBtnClick, this),
                    We.bindClick(this.startGameBtn, this.onStartGameBtnClick, this),
                    We.bindClick(this.collectionsBtn, this.onCollectionsBtnClick, this),
                    We.bindClick(this.rankBtn, this.onRankBtnClick, this),
                    We.bindClick(this.ruleBtn, this.onRuleBtnClick, this),
                    We.bindClick(this.settingBtn, this.onSettingBtnClick, this),
                    _t.registerBack("home"),
                    Ve.preloadScene(this.gameSceneName),
                    Ve.preloadScene(this.picListSceneName),
                    this.loadData(),
                    this.isNewUser()) {
                        var l = b(this.storyPrefab);
                        this.node.addChild(l)
                    }
                }
                ,
                i.onDestroy = function() {
                    e.prototype.onDestroy.call(this),
                    this.unschedule(this.runNextNotice),
                    this.unschedule(this.repeatShowHideCollectionTip),
                    ne.off(le.GameExit, this.onGameExit, this),
                    ne.off(le.GuideStoryStartGame, this.onGuideStoryStartGame, this)
                }
                ,
                i.onGuideStoryStartGame = function() {
                    t.log("onGuideStoryStartGame"),
                    this.onStartGameBtnClick(!0)
                }
                ,
                i.showRetryDialog = function(e) {
                    var o = this;
                    t.log("showRetryDialog msg = " + e),
                    Tt.showFade(kt.CommonDialog, null, "提示", e, "退出", (function() {
                        t.log("onclick cancel"),
                        o.onGameExit()
                    }
                    ), "重试", (function() {
                        t.log("onclick confirm reload data"),
                        o.loadData()
                    }
                    ))
                }
                ,
                i.loadData = function(e) {
                    var o = this;
                    void 0 === e && (e = null),
                    this.isLoading ? e && e() : (this.isLoading = !0,
                    this.showLoading(500),
                    qe.requestPost(je.getHomePageConfigURL(), {}, (function(i, r) {
                        if (We.isValid(o.node)) {
                            if (o.hideLoading(),
                            o.isLoading = !1,
                            e && e(),
                            i) {
                                var n = i.message;
                                return t.log("loadData error = " + i + ", error.message = " + n),
                                n = Xi.adapterErrorMsg(n, qe.isIOS()),
                                o.showRetryDialog(n),
                                void si.showToast(n)
                            }
                            o.homeData = r,
                            o.homeData.reward_list && o.homeData.reward_list.length > 0 ? (o.noticeContainerNode.active = !0,
                            o.runNotice()) : o.noticeContainerNode.active = !1,
                            o.mayShowHasLockPicNotice()
                        }
                    }
                    )))
                }
                ,
                i.curNoticeText = function(e) {
                    if (!this.homeData || !this.homeData.reward_list || 0 == this.homeData.reward_list.length)
                        return "";
                    var t = this.homeData.reward_list[e % this.homeData.reward_list.length]
                      , o = t.split(">")[1].split("<")[0]
                      , i = xe.getSubStringMid(o, 14);
                    return o != i && (t = t.replace(o, i)),
                    t
                }
                ,
                i.updateNotice = function(e) {
                    var t = this.noticeNodes[e % this.noticeNodes.length]
                      , o = t.getComponentInChildren(ie)
                      , i = this.curNoticeText(e);
                    return o.string = i,
                    t
                }
                ,
                i.runNextNotice = function() {
                    var e = this.noticeNodes[this.noticeIndex % this.noticeNodes.length];
                    this.noticeIndex++;
                    var t = this.updateNotice(this.noticeIndex);
                    Nt.uiOpacityAnimationSampleHide(e, .5, 0, (function() {
                        Nt.uiOpacityAnimationSampleShow(t, .5)
                    }
                    ))
                }
                ,
                i.runNotice = function() {
                    if (0 == this.noticeIndex) {
                        for (var e = 0; e < this.noticeNodes.length; e++) {
                            var t = this.noticeNodes[e].getComponent(D);
                            t.opacity = 0 == e ? 255 : 0
                        }
                        this.updateNotice(this.noticeIndex)
                    }
                    this.unschedule(this.runNextNotice),
                    this.schedule(this.runNextNotice, 5)
                }
                ,
                i.mayShowHasLockPicNotice = function() {
                    this.homeData && this.homeData.unlocked_picture_count < this.homeData.can_unlock_picture_count ? (this.repeatShowHideCollectionTip(),
                    this.schedule(this.repeatShowHideCollectionTip, 3)) : this.collectionTipNode.active = !1
                }
                ,
                i.repeatShowHideCollectionTip = function() {
                    this.collectionTipShowCount % 2 == 0 ? Nt.uiOpacityAnimationSampleShow(this.collectionTipNode, .3) : Nt.uiOpacityAnimationSampleHide(this.collectionTipNode, .3),
                    this.collectionTipShowCount++
                }
                ,
                i.onGameExit = function() {
                    t.log("onGameExit"),
                    qe.wrapperExit("home")
                }
                ,
                i.onExitBtnClick = function() {
                    t.log("onExitBtnClick"),
                    yi.playClick(),
                    Tt.showFade(kt.ExitDialog)
                }
                ,
                i.onShareBtnClick = function() {
                    if (yi.playClick(),
                    Ee.click(Le.sharebutton, "home"),
                    qe.statClick(Le.sharebutton, {
                        page: "activitypage"
                    }),
                    t.log("onShareBtnClick"),
                    this.homeData && this.homeData.share_info) {
                        var e = this.homeData.share_info;
                        Ze.inst.setConfigString("home_share_info", JSON.stringify(e)),
                        qe.shareWebWithInfo(e, (function(e) {
                            t.log("shareWeb result = " + e),
                            Ee.stat(Ae.statShare, "home", {
                                result: 1 == e ? 1 : 0
                            }),
                            qe.statShareSuccess({
                                result: 1 == e ? 1 : 0,
                                page: "activitypage"
                            })
                        }
                        ))
                    } else {
                        var o = null
                          , i = Ze.inst.getConfigString("home_share_info");
                        i && (o = JSON.parse(i)),
                        o ? qe.shareWebWithInfo(o, (function(e) {
                            t.log("shareWeb result = " + e),
                            Ee.stat(Ae.statShare, "home", {
                                result: 1 == e ? 1 : 0
                            }),
                            qe.statShareSuccess({
                                result: 1 == e ? 1 : 0,
                                page: "activitypage"
                            })
                        }
                        )) : si.showToast("数据加载中，请稍候")
                    }
                }
                ,
                i.refreshLogin = function(e) {
                    void 0 === e && (e = null),
                    this.loadData(e)
                }
                ,
                i.checkLogin = function(e) {
                    var o = this;
                    return void 0 === e && (e = null),
                    qe.isLogin() ? (e && e(),
                    !0) : (qe.getUserInfo((function(i) {
                        t.log("getUserInfo callback: " + JSON.stringify(i)),
                        i && 2 !== i.userstatus ? (qe.showToast("请先登录哦～"),
                        o.isOpenedLogin = !0,
                        qe.login()) : e && e()
                    }
                    )),
                    !1)
                }
                ,
                i.onStartGameBtnClick = function(e) {
                    var t = this;
                    void 0 === e && (e = !1),
                    yi.playClick(),
                    this.homeData && this.homeData.picture_id > 0 && (Je.currentPicId = this.homeData.picture_id),
                    e ? (Ee.click(Le.beginbutton, "homepage", {
                        level: Je.currentPicId,
                        is_first_guide: 1
                    }),
                    qe.statClick(Le.beginbutton, {
                        level: Je.currentPicId,
                        is_first_guide: 1,
                        from: "homepage"
                    })) : (Ee.click(Le.beginbutton, "homepage", {
                        level: Je.currentPicId,
                        is_first_guide: 0
                    }),
                    qe.statClick(Le.beginbutton, {
                        level: Je.currentPicId,
                        is_first_guide: 0,
                        from: "homepage"
                    })),
                    this.checkLogin((function() {
                       _t.gotoGame()
                    }
                    ))
                }
                ,
                i.onCollectionsBtnClick = function() {
                    var e = this;
                    yi.playClick(),
                    Ee.click(Le.storypage),
                    qe.statClick(Le.storypage),
                    this.checkLogin((function() {
                        e.isOpenedLogin ? (Je.reinitRequestHelper(),
                        e.refreshLogin((function() {
                            e.isLoading || (e.isOpenedLogin = !1,
                            _t.gotoPicList())
                        }
                        ))) : _t.gotoPicList()
                    }
                    ))
                }
                ,
                i.onRankBtnClick = function() {
                    yi.playClick(),
                    Ee.click(Le.rankbutton),
                    qe.statClick(Le.rankbutton),
                    Tt.showFade(kt.RankDialog)
                }
                ,
                i.onRuleBtnClick = function() {
                    yi.playClick(),
                    Ee.click(Le.rule),
                    qe.statClick(Le.rule),
                    Tt.showFade(kt.RuleDialog)
                }
                ,
                i.onSettingBtnClick = function() {
                    yi.playClick(),
                    qe.statClick(Le.settingbutton),
                    Tt.showFade(kt.SettingDialog, null, Nl.Setting)
                }
                ,
                i.preloadGameCard = function() {
                    Ve.loadSFFromAtlas(Je.bundleName, "resources/texture/game_cards/game_cards", "1", (function(e, o) {
                        e && t.logE("load sprite frame failed, err:" + e.message)
                    }
                    ))
                }
                ,
                o
            }(mo)).isStatViewed = !1,
            _h = be((Ch = Gh).prototype, "storyPrefab", [sh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Sh = be(Ch.prototype, "exitBtn", [ch], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Rh = be(Ch.prototype, "shareBtn", [dh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Bh = be(Ch.prototype, "noticeContainerNode", [mh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ih = be(Ch.prototype, "noticeNodes", [ph], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            Ph = be(Ch.prototype, "startGameBtn", [hh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Fh = be(Ch.prototype, "collectionsBtn", [yh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Eh = be(Ch.prototype, "collectionTipNode", [Nh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Mh = be(Ch.prototype, "collectionRedNode", [gh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Dh = be(Ch.prototype, "rankBtn", [fh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Lh = be(Ch.prototype, "ruleBtn", [bh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Ah = be(Ch.prototype, "settingBtn", [wh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            xh = be(Ch.prototype, "gameSceneName", [vh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            zh = be(Ch.prototype, "picListSceneName", [kh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return "pic_list"
                }
            }),
            Th = Ch));
            o._RF.pop(),
            o._RF.push({}, "b85f5HLdwZAL4Poma7bY13s", "AButton", void 0);
            var Zh, Yh, Kh, Qh, $h, ey = u.ccclass, ty = u.property;
            Uh = ey("AButton"),
            Vh = ty(T),
            Uh((jh = be((qh = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "redNode", jh, ye(t)),
                    t.show = !1,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o.start = function() {
                    this.showRed(this.show)
                }
                ,
                o.update = function(e) {}
                ,
                o.showRed = function(e) {
                    this.show = e,
                    this.redNode.active = e
                }
                ,
                t
            }(N)).prototype, "redNode", [Vh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }),
            Wh = qh));
            o._RF.pop(),
            o._RF.push({}, "6e5dcqYQFhOW42AhX/j/PRO", "BaseButton", void 0);
            var oy = u.ccclass
              , iy = u.property;
            Zh = oy("BaseButton"),
            Yh = iy(G),
            Zh(($h = be((Qh = function(e) {
                function t() {
                    for (var t, o = arguments.length, i = new Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    return fe(t = e.call.apply(e, [this].concat(i)) || this, "clickMoveToTop", $h, ye(t)),
                    t._siblingIndex = -1,
                    t
                }
                pe(t, e);
                var o = t.prototype;
                return o._onTouchBegan = function(t) {
                    e.prototype._onTouchBegan.call(this, t),
                    this.interactable && this.clickMoveToTop && (this._siblingIndex = this.node.getSiblingIndex(),
                    this.node.setSiblingIndex(1e3))
                }
                ,
                o._onTouchEnded = function(t) {
                    e.prototype._onTouchEnded.call(this, t),
                    this.interactable && this.clickMoveToTop && -1 != this._siblingIndex && this.node.setSiblingIndex(this._siblingIndex)
                }
                ,
                o._onTouchMove = function(t) {
                    e.prototype._onTouchMove.call(this, t)
                }
                ,
                o._onTouchCancel = function(t) {
                    e.prototype._onTouchCancel.call(this, t),
                    this.interactable && this.clickMoveToTop && -1 != this._siblingIndex && this.node.setSiblingIndex(this._siblingIndex)
                }
                ,
                t
            }(N)).prototype, "clickMoveToTop", [Yh], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }),
            Kh = Qh));
            o._RF.pop()
        }
    }
}
));

(function(r) {
    r('virtual:///prerequisite-imports/game_bundle', 'bundle://game_bundle/game_bundle.js');
}
)(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule")
                        _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }
            ],
            execute: function() {}
        };
    });
});
