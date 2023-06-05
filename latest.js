// Copyrights C-EGG inc.
(function() {
    var aa;
    (function(a) {
        function m(c) {
            var b = c & 7
              , k = 0
              , d = 0;
            1 == b || 4 == b ? k = d = 1 : 2 == b && (k = d = 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 > b)
                return !1;
            k = d;
            d = 0;
            1 == b || 4 == b ? (k += 1,
            d += 1) : 2 == b && (k += 2,
            d += 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 > b)
                return !1;
            k = d;
            d = 0;
            1 == b || 4 == b ? (k += 1,
            d += 1) : 2 == b && (k += 2,
            d += 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 > b)
                return !1;
            k = d;
            d = 0;
            1 == b || 4 == b ? (k += 1,
            d += 1) : 2 == b && (k += 2,
            d += 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 > b)
                return !1;
            k = d;
            d = 0;
            1 == b || 4 == b ? (k += 1,
            d += 1) : 2 == b && (k += 2,
            d += 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 > b)
                return !1;
            k = d;
            d = 0;
            1 == b || 4 == b ? (k += 1,
            d += 1) : 2 == b && (k += 2,
            d += 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 > b)
                return !1;
            k = d;
            d = 0;
            1 == b || 4 == b ? (k += 1,
            d += 1) : 2 == b && (k += 2,
            d += 2);
            c >>= 3;
            b = (c & 7) - k;
            if (0 != b && 3 != b)
                return !1;
            b = (c >> 3 & 7) - d;
            return 0 == b || 3 == b
        }
        function g(c, b) {
            if (0 == c) {
                if (128 <= (b & 448) && m(b - 128) || 65536 <= (b & 229376) && m(b - 65536) || 33554432 <= (b & 117440512) && m(b - 33554432))
                    return !0
            } else if (1 == c) {
                if (16 <= (b & 56) && m(b - 16) || 8192 <= (b & 28672) && m(b - 8192) || 4194304 <= (b & 14680064) && m(b - 4194304))
                    return !0
            } else if (2 == c && (2 <= (b & 7) && m(b - 2) || 1024 <= (b & 3584) && m(b - 1024) || 524288 <= (b & 1835008) && m(b - 524288)))
                return !0;
            return !1
        }
        function e(c, b) {
            return c[b + 0] << 0 | c[b + 1] << 3 | c[b + 2] << 6 | c[b + 3] << 9 | c[b + 4] << 12 | c[b + 5] << 15 | c[b + 6] << 18 | c[b + 7] << 21 | c[b + 8] << 24
        }
        a.qc = function(c) {
            var b = 1 << c[27] | 1 << c[28] | 1 << c[29] | 1 << c[30] | 1 << c[31] | 1 << c[32] | 1 << c[33];
            if (16 <= b)
                return !1;
            if (2 == (b & 3) && 2 == c[0] * c[8] * c[9] * c[17] * c[18] * c[26] * c[27] * c[28] * c[29] * c[30] * c[31] * c[32] * c[33] || !(b & 10) && 7 == +(2 == c[0]) + +(2 == c[1]) + +(2 == c[2]) + +(2 == c[3]) + +(2 == c[4]) + +(2 == c[5]) + +(2 == c[6]) + +(2 == c[7]) + +(2 == c[8]) + +(2 == c[9]) + +(2 == c[10]) + +(2 == c[11]) + +(2 == c[12]) + +(2 == c[13]) + +(2 == c[14]) + +(2 == c[15]) + +(2 == c[16]) + +(2 == c[17]) + +(2 == c[18]) + +(2 == c[19]) + +(2 == c[20]) + +(2 == c[21]) + +(2 == c[22]) + +(2 == c[23]) + +(2 == c[24]) + +(2 == c[25]) + +(2 == c[26]) + +(2 == c[27]) + +(2 == c[28]) + +(2 == c[29]) + +(2 == c[30]) + +(2 == c[31]) + +(2 == c[32]) + +(2 == c[33]))
                return !0;
            if (b & 2)
                return !1;
            var k = c[0] + c[3] + c[6]
              , d = c[1] + c[4] + c[7]
              , f = c[9] + c[12] + c[15]
              , l = c[10] + c[13] + c[16]
              , p = c[18] + c[21] + c[24]
              , h = c[19] + c[22] + c[25]
              , n = (k + d + (c[2] + c[5] + c[8])) % 3;
            if (1 == n)
                return !1;
            var x = (f + l + (c[11] + c[14] + c[17])) % 3;
            if (1 == x)
                return !1;
            var u = (p + h + (c[20] + c[23] + c[26])) % 3;
            if (1 == u || 1 != +(2 == n) + +(2 == x) + +(2 == u) + +(2 == c[27]) + +(2 == c[28]) + +(2 == c[29]) + +(2 == c[30]) + +(2 == c[31]) + +(2 == c[32]) + +(2 == c[33]))
                return !1;
            k = (1 * k + 2 * d) % 3;
            d = e(c, 0);
            f = (1 * f + 2 * l) % 3;
            l = e(c, 9);
            p = (1 * p + 2 * h) % 3;
            c = e(c, 18);
            return b & 4 ? !(n | k | x | f | u | p) && m(d) && m(l) && m(c) : 2 == n ? !(x | f | u | p) && m(l) && m(c) && g(k, d) : 2 == x ? !(u | p | n | k) && m(c) && m(d) && g(f, l) : 2 == u ? !(n | k | x | f) && m(d) && m(l) && g(p, c) : !1
        }
        ;
        a.uc = function(c, b) {
            var k = []
              , d = 0;
            if (12 <= +(0 !== c[0]) + +(0 !== c[8]) + +(0 !== c[9]) + +(0 !== c[17]) + +(0 !== c[18]) + +(0 !== c[26]) + +(0 !== c[27]) + +(0 !== c[28]) + +(0 !== c[29]) + +(0 !== c[30]) + +(0 !== c[31]) + +(0 !== c[32]) + +(0 !== c[33]))
                for (; 34 > d; ++d)
                    3 >= c[d] && (++c[d],
                    a.qc(c) && k.push(d),
                    --c[d]);
            else {
                for (; 27 > d; ++d)
                    3 >= c[d] && (c[d] || 0 < d % 9 && c[d - 1] || 8 > d % 9 && c[d + 1]) && !(b && 4 <= c[d] + b[d]) && (++c[d],
                    a.qc(c) && k.push(d),
                    --c[d]);
                for (; 34 > d; ++d)
                    3 >= c[d] && c[d] && (++c[d],
                    a.qc(c) && k.push(d),
                    --c[d])
            }
            return k
        }
        ;
        a.fk = function() {
            for (var c = q[48], b = q[80], k = {}, d = 0; 34 > d; ++d)
                c[d] && (--c[d],
                k[d] = a.uc(c, b),
                ++c[d]);
            return k
        }
    }
    )(aa || (aa = {}));
    var t;
    (function(a) {
        function m(b) {
            return 0 != (b & a.Ob)
        }
        function g(b) {
            return 0 != (b & (a.ea | a.da))
        }
        function e(b) {
            return (b & 32) >> 4 | (b & 128) >> 7
        }
        function c(b) {
            return e(b) + 4 * ~~g(b)
        }
        a.h = 1;
        a.sa = 2;
        a.ab = 4;
        a.B = 8;
        a.c = 16;
        a.v = 32;
        a.pa = 64;
        a.Z = 128;
        a.Ba = 256;
        a.ea = 512;
        a.da = 1024;
        a.Vf = 2048;
        a.Ob = 2048;
        a.cc = 4096;
        a.Wg = 8192;
        a.Xg = 16384;
        a.Jc = function(b) {
            return !(b & (a.ea | a.da | a.Vf))
        }
        ;
        a.fe = function(b) {
            return 0 != (b & a.Vf)
        }
        ;
        a.Kc = m;
        a.vl = function(b) {
            return 0 != (b & a.cc)
        }
        ;
        a.Yb = g;
        a.ed = function(b, k) {
            return 0 != (0 == b ? g(k) ? ~k & a.B : k & a.pa : k & a.pa)
        }
        ;
        a.ce = e;
        a.ef = c;
        a.Yg = function() {
            var b = z.H;
            return ~b & a.ea ? 0 : b & a.da ? 5 : 2
        }
        ;
        a.Bm = function(b) {
            return (b & 1) << 7 | (b & 2) << 4
        }
        ;
        a.pm = function(b) {
            return g(b) ? "PF" + ("00" + ((b & a.c ? 20 : 0) + (b & a.B ? 10 : 0) + (~b & a.ea ? 0 : b & a.da ? 5 : 2))).slice(-2) + "C" : b & a.c ? "PF3" : "PF4"
        }
        ;
        a.Aa = function(b, k) {
            return k ? b & a.cc ? (b & a.c ? "３人" : "４人") + (b & a.B ? "東南戦" : "東風戦") : "イベント卓" : m(b) ? "東天紅" : b & a.Wg || b & a.Xg ? "拡張" : (b & a.c ? "三" : "四") + "般上特鳳若銀琥孔".substr(c(b), 1) + (b & a.B ? "南" : "東") + (g(b) ? (b & a.B ? "" : "速") + (~b & a.ea ? "祝０" : b & a.da ? "祝５" : "祝２") : (b & a.ab ? "" : "喰") + (b & a.sa ? "" : "赤") + (b & a.pa ? "速" : "") + (b & a.Ba ? "暗" : "") + (b & a.ea ? "祝" : ""))
        }
        ;
        (function(b) {
            b.Vl = 1;
            b.Hl = 2;
            b.$l = 4;
            b.Fl = 8;
            b.Ol = 16;
            b.Pl = 32;
            b.Ql = 64;
            b.Rl = 128;
            b.bm = 256;
            b.am = 512;
            b.cm = 1024;
            b.em = 2048;
            b.dm = 4096;
            b.Fk = 8192;
            b.gm = 16384;
            b.hm = 32768;
            b.Xl = 65536;
            b.Yl = 131072;
            b.tm = 262144;
            b.Sl = 524288;
            b.hl = 1048576;
            b.Zl = 2097152;
            b.md = 4194304;
            b.ij = 8388608;
            b.hj = 16777216;
            b.fm = 33554432;
            b.gj = 67108864;
            b.Nj = 134217728;
            b.Li = 1073741824
        }
        )(a.Bb || (a.Bb = {}));
        (function(b) {
            b.qm = 1;
            b.Bl = 2;
            b.Ul = 4;
            b.lm = 8;
            b.Tl = 16;
            b.vk = 32;
            b.wk = 64;
            b.Wl = 128;
            b.xk = 256;
            b.uk = 512;
            b.Oc = 1024
        }
        )(a.kc || (a.kc = {}))
    }
    )(t || (t = {}));
    var ba;
    (function(a) {
        (function(m) {
            m.Mc = 1;
            m.Zb = 2;
            m.Fc = 4;
            m.bc = 8;
            m.Nb = 16;
            m.ne = 32;
            m.ag = 64;
            m.ke = 128
        }
        )(a.ca || (a.ca = {}));
        (function(m) {
            m.mm = 0;
            m.Mc = 1;
            m.Ei = 2;
            m.Fc = 3;
            m.Gg = 4;
            m.El = 5;
            m.bc = 6;
            m.Nb = 7;
            m.ne = 8;
            m.ag = 9;
            m.ke = 10;
            m.km = 11
        }
        )(a.Hg || (a.Hg = {}))
    }
    )(ba || (ba = {}));
    var ca, da = ca || (ca = {});
    da.Nb = 0;
    da.ne = 1;
    da.ul = 2;
    da.Mk = 3;
    da.sm = 4;
    da.ml = 5;
    da.sl = 6;
    da.om = 7;
    da.Tm = 8;
    da.tl = 9;
    da.Al = 10;
    da.xl = 11;
    da.zl = 12;
    da.yl = 13;
    da.Kk = 14;
    da.Hk = 15;
    da.Jk = 16;
    da.Ik = 17;
    da.nl = 18;
    da.ol = 19;
    da.al = 20;
    da.il = 21;
    da.Yk = 22;
    da.Nk = 23;
    da.wl = 24;
    da.ym = 25;
    da.zm = 26;
    da.xm = 27;
    da.Vm = 28;
    da.wm = 29;
    da.Qm = 30;
    da.rl = 31;
    da.um = 32;
    da.Cl = 33;
    da.ql = 34;
    da.Zk = 35;
    da.hj = 36;
    da.Um = 37;
    da.Xk = 38;
    da.cl = 39;
    da.Nm = 40;
    da.Om = 41;
    da.Wm = 42;
    da.vm = 43;
    da.$k = 44;
    da.bl = 45;
    da.Dl = 46;
    da.Il = 47;
    da.Jl = 48;
    da.dl = 49;
    da.Rm = 50;
    da.Pm = 51;
    da.dd = 52;
    da.gl = 53;
    da.fl = 54;
    da.jm = 55;
    da.Nl = 56;
    da.bc = 57;
    da.pl = 58;
    da.Ei = 59;
    da.Gg = 60;
    da.kl = 61;
    da.jl = 62;
    da.Am = 63;
    da.Gl = 64;
    da.Ym = 65;
    da.Lk = 66;
    da.im = 67;
    da.Xm = 68;
    da.Ek = 69;
    da.el = 70;
    da.MAX = 71;
    var fa, ia = fa || (fa = {});
    ia.ll = "一二三四五六七八九➀➁➂➃➄➅➆➇➈１２３４５６７８９東南西北白發中";
    ia.Yf = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
    ia.$a = "新人 ９級 ８級 ７級 ６級 ５級 ４級 ３級 ２級 １級 初段 二段 三段 四段 五段 六段 七段 八段 九段 十段 天鳳".split(" ");
    ia.je = " 滿貫 跳滿 倍滿 三倍滿 役滿".split(" ");
    ia.Sf = {
        kaze4: "四風連打",
        yao9: "九種九牌",
        ron3: "三家和了",
        reach4: "四家立直",
        kan4: "四槓散了",
        nm: "流局滿貫"
    };
    ia.Fg = [{
        800: "300-500",
        1100: "400-700",
        1200: "400-800",
        1500: "500-1000",
        1800: "600-1200",
        2E3: "700-1300",
        2300: "800-1500",
        2400: "800-1600",
        2700: "900-1800",
        3E3: "1000-2000",
        3500: "1200-2300",
        3900: "1300-2600",
        4400: "1500-2900",
        4800: "1600-3200",
        5400: "1800-3600",
        5900: "2000-3900",
        6E3: "2000-4000",
        9E3: "3000-6000",
        12E3: "4000-8000",
        18E3: "6000-12000",
        24E3: "8000-16000",
        48E3: "16000-32000",
        72E3: "24000-48000"
    }, {
        1E3: "500",
        1400: "700",
        1600: "800",
        2E3: "1000",
        2400: "1200",
        2600: "1300",
        3E3: "1500",
        3200: "1600",
        3600: "1800",
        4E3: "2000",
        4600: "2300",
        5200: "2600",
        5800: "2900",
        6400: "3200",
        7200: "3600",
        7800: "3900",
        8E3: "4000",
        12E3: "6000",
        16E3: "8000",
        24E3: "12000",
        32E3: "16000",
        64E3: "32000",
        96E3: "48000"
    }, {
        1100: "300-500",
        1500: "400-700",
        1600: "400-800",
        2E3: "500-1000",
        2400: "600-1200",
        2700: "700-1300",
        3100: "800-1500",
        3200: "800-1600",
        3600: "900-1800",
        4E3: "1000-2000",
        4700: "1200-2300",
        5200: "1300-2600",
        5900: "1500-2900",
        6400: "1600-3200",
        7200: "1800-3600",
        7900: "2000-3900",
        8E3: "2000-4000",
        12E3: "3000-6000",
        16E3: "4000-8000",
        24E3: "6000-12000",
        32E3: "8000-16000",
        64E3: "16000-32000",
        96E3: "24000-48000"
    }, {
        1500: "500",
        2100: "700",
        2400: "800",
        3E3: "1000",
        3600: "1200",
        3900: "1300",
        4500: "1500",
        4800: "1600",
        5400: "1800",
        6E3: "2000",
        6900: "2300",
        7800: "2600",
        8700: "2900",
        9600: "3200",
        10800: "3600",
        11700: "3900",
        12E3: "4000",
        18E3: "6000",
        24E3: "8000",
        36E3: "12000",
        48E3: "16000",
        96E3: "32000",
        144E3: "48000"
    }];
    ia.ze = "門前清自摸和;立直;一發;槍槓;嶺上開花;海底摸月;河底撈魚;平和;斷么九;一盃口;自風 東;自風 南;自風 西;自風 北;場風 東;場風 南;場風 西;場風 北;役牌 白;役牌 發;役牌 中;兩立直;七對子;混全帶么九;一氣通貫;三色同順;三色同刻;三槓子;對對和;三暗刻;小三元;混老頭;二盃口;純全帶么九;混一色;清一色;人和;天和;地和;大三元;四暗刻;四暗刻單騎;字一色;綠一色;清老頭;九蓮寶燈;純正九蓮寶燈;國士無雙;國士無雙13面;大四喜;小四喜;四槓子;ドラ;裏ドラ;赤ドラ;親;門前;榮和;本場;明槓;暗槓;五;ガリ;セット;カラス;全ガリ;バンバン".split(";");
    function ja(a) {
        if (!a || !a.length)
            return !1;
        a = a.charCodeAt(0);
        return 9372 <= a && 9397 >= a || 9398 <= a && 9423 >= a || 9424 <= a && 9449 >= a
    }
    ;var ka = 1;
    function la(a, m) {
        return ("000" + m).slice(-a)
    }
    function pa(a) {
        return (0 < a ? "+" : "") + a
    }
    function qa(a, m) {
        if (void 0 === a || "" === a)
            return [];
        m = m || 1;
        a = Array.isArray(a) ? a : a.split(",");
        for (var g = Array(a.length), e = 0; e < a.length; ++e)
            g[e] = m * ~~a[e];
        return g
    }
    function ta(a) {
        a = a.split(",");
        for (var m = Array(a.length), g = 0; g < a.length; ++g)
            m[g] = Number(a[g]);
        return m
    }
    function ua(a) {
        for (var m = a.length - 1; 0 < m; --m) {
            var g = Math.floor(Math.random() * (m + 1))
              , e = a[m];
            a[m] = a[g];
            a[g] = e
        }
        return a
    }
    function va(a, m) {
        var g;
        return function() {
            clearTimeout(g);
            g = setTimeout(function() {
                g = void 0;
                a()
            }, m)
        }
    }
    function xa() {
        var a = ya("canvas", za, "", {}, {
            position: "absolute",
            pointerEvents: "none"
        }).getContext("2d");
        if (a)
            return a;
        throw console.trace("NonNull");
    }
    function Aa(a) {
        return a ? encodeURIComponent(a).replace(/%[0-9A-Fa-f]{2}|./g, function(m) {
            return 3 == m.length ? m : "%" + ("0" + m.charCodeAt(0).toString(16)).substr(-2)
        }) : ""
    }
    function Ca(a) {
        return a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
    }
    var Da = Object.assign;
    function Fa(a, m, g) {
        a.addEventListener(m, g, !1)
    }
    function Ga(a, m) {
        for (var g in m)
            Fa(a, g, m[g]);
        return a
    }
    function Ha(a, m, g) {
        a.addEventListener(m, g, {
            once: !0,
            passive: !0,
            capture: !0
        })
    }
    var Ja = document.querySelector.bind(document);
    function Ka(a) {
        try {
            return decodeURIComponent(a)
        } catch (m) {
            return a
        }
    }
    function ya(a, m, g, e, c) {
        a = Ma.createElement(a);
        g && (a.className = g);
        Da(a, e);
        Da(a.style, c);
        return m ? m.insertBefore(a, null) : a
    }
    function Na(a) {
        a.querySelectorAll("SCRIPT").forEach(function(m) {
            var g = Ma.createElement("script");
            g.textContent = m.textContent;
            m.replaceWith(g)
        })
    }
    var Oa = window
      , Ma = document
      , Qa = Ma.body
      , Ra = !!Oa.cordova
      , Ta = ""
      , Ua = 0
      , Va = !1
      , Za = navigator.userAgent;
    Za.match(/iP(hone|od|ad)/) && Za.match(/OS (\d+)_(\d+)/) && (Ta = RegExp.$1 + "." + RegExp.$2);
    Za.match(/Android (\d+\.\d+|\d+)/) && (Ua = parseFloat(RegExp.$1));
    Va = 4.4 > Ua && 0 < Za.indexOf(" Chrome/") && 0 < Za.indexOf(" Version/");
    navigator.maxTouchPoints && 2 < navigator.maxTouchPoints && /MacIntel/.test(navigator.platform) && (Ta = "13");
    var cb, db = "ontouchstart"in Ma.documentElement && !navigator.msPointerEnabled, eb = Ra || "standalone"in navigator && navigator.standalone || "matchMedia"in window && window.matchMedia("(display-mode: standalone)").matches, ib = !!Oa.oemLoginEmail;
    function lb(a, m) {
        var g = new XMLHttpRequest;
        g.onload = function(e) {
            200 == this.status ? m.call(this) : m.call(this, e)
        }
        ;
        g.onerror = function(e) {
            m.call(this, e)
        }
        ;
        g.open("GET", a, !0);
        g.send("")
    }
    function mb(a, m) {
        lb(a, m)
    }
    ;var nb;
    (function(a) {
        var m = function() {
            function g() {
                this.S = Array(624);
                this.Ya = 625
            }
            g.prototype.lg = function(e) {
                this.S[0] = e >>> 0;
                for (this.Ya = 1; 624 > this.Ya; this.Ya++)
                    e = this.S[this.Ya - 1] ^ this.S[this.Ya - 1] >>> 30,
                    this.S[this.Ya] = (1812433253 * ((e & 4294901760) >>> 16) << 16) + 1812433253 * (e & 65535) + this.Ya,
                    this.S[this.Ya] >>>= 0
            }
            ;
            g.prototype.kg = function(e, c) {
                var b;
                this.lg(19650218);
                var k = 1;
                var d = 0;
                for (b = 624 > c ? 624 : c; b; b--) {
                    var f = this.S[k - 1] ^ this.S[k - 1] >>> 30;
                    this.S[k] = (this.S[k] ^ (1664525 * ((f & 4294901760) >>> 16) << 16) + 1664525 * (f & 65535)) + e[d] + d;
                    this.S[k] >>>= 0;
                    k++;
                    d++;
                    624 <= k && (this.S[0] = this.S[623],
                    k = 1);
                    d >= c && (d = 0)
                }
                for (b = 623; b; b--)
                    f = this.S[k - 1] ^ this.S[k - 1] >>> 30,
                    this.S[k] = (this.S[k] ^ (1566083941 * ((f & 4294901760) >>> 16) << 16) + 1566083941 * (f & 65535)) - k,
                    this.S[k] >>>= 0,
                    k++,
                    624 <= k && (this.S[0] = this.S[623],
                    k = 1);
                this.S[0] = 2147483648
            }
            ;
            g.prototype.De = function() {
                var e = [0, 2567483615];
                if (624 <= this.Ya) {
                    var c;
                    625 == this.Ya && this.lg(5489);
                    for (c = 0; 227 > c; c++) {
                        var b = this.S[c] & 2147483648 | this.S[c + 1] & 2147483647;
                        this.S[c] = this.S[c + 397] ^ b >>> 1 ^ e[b & 1]
                    }
                    for (; 623 > c; c++)
                        b = this.S[c] & 2147483648 | this.S[c + 1] & 2147483647,
                        this.S[c] = this.S[c + -227] ^ b >>> 1 ^ e[b & 1];
                    b = this.S[623] & 2147483648 | this.S[0] & 2147483647;
                    this.S[623] = this.S[396] ^ b >>> 1 ^ e[b & 1];
                    this.Ya = 0
                }
                b = this.S[this.Ya++];
                b ^= b >>> 11;
                b ^= b << 7 & 2636928640;
                b ^= b << 15 & 4022730752;
                return (b ^ b >>> 18) >>> 0
            }
            ;
            g.prototype.random = function() {
                return this.De() * (1 / 4294967296)
            }
            ;
            return g
        }();
        a.tf = m
    }
    )(nb || (nb = {}));
    var ob = function() {
        var a = [-2147483648, 8388608, 32768, 128]
          , m = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
          , g = [];
        return function(e) {
            var c = !1, b, k = 0, d = 0, f = 0, l = e.length;
            var p = 1779033703;
            var h = 4089235720;
            var n = 3144134277;
            var x = 2227873595;
            var u = 1013904242;
            var y = 4271175723;
            var r = 2773480762;
            var w = 1595750129;
            var A = 1359893119;
            var I = 2917565137;
            var Y = 2600822924;
            var T = 725511199;
            var R = 528734635;
            var ma = 4215389547;
            var Ba = 1541459225;
            var jb = 327033209;
            var Pa = 0;
            do {
                g[0] = Pa;
                g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = g[16] = g[17] = g[18] = g[19] = g[20] = g[21] = g[22] = g[23] = g[24] = g[25] = g[26] = g[27] = g[28] = g[29] = g[30] = g[31] = g[32] = 0;
                for (b = d; k < l && 128 > b; ++k)
                    g[b >> 2] |= e[k],
                    b += 4;
                f += b - d;
                d = b - 128;
                k == l && (g[b >> 2] |= a[b & 3],
                ++k);
                Pa = g[32];
                k > l && 112 > b && (g[31] = f << 3,
                c = !0);
                for (b = 32; 160 > b; b += 2) {
                    var ra = g[b - 30];
                    var sa = g[b - 29];
                    var $a = (ra >>> 1 | sa << 31) ^ (ra >>> 8 | sa << 24) ^ ra >>> 7;
                    var v = (sa >>> 1 | ra << 31) ^ (sa >>> 8 | ra << 24) ^ (sa >>> 7 | ra << 25);
                    ra = g[b - 4];
                    sa = g[b - 3];
                    var C = (ra >>> 19 | sa << 13) ^ (sa >>> 29 | ra << 3) ^ ra >>> 6;
                    var E = (sa >>> 19 | ra << 13) ^ (ra >>> 29 | sa << 3) ^ (sa >>> 6 | ra << 26);
                    ra = g[b - 32];
                    sa = g[b - 31];
                    var S = g[b - 14];
                    var N = g[b - 13];
                    var M = (N & 65535) + (sa & 65535) + (v & 65535) + (E & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (v >>> 16) + (E >>> 16) + (M >>> 16);
                    var G = (S & 65535) + (ra & 65535) + ($a & 65535) + (C & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + ($a >>> 16) + (C >>> 16) + (G >>> 16);
                    g[b] = C << 16 | G & 65535;
                    g[b + 1] = E << 16 | M & 65535
                }
                var V = p
                  , na = h
                  , ha = n
                  , ea = x
                  , oa = u
                  , wa = y
                  , Ea = r
                  , Wa = w
                  , Ia = A
                  , La = I
                  , Sa = Y
                  , Xa = T
                  , ab = R
                  , bb = ma
                  , fb = Ba
                  , gb = jb;
                var Cb = ha & oa;
                var Db = ea & wa;
                for (b = 0; 160 > b; b += 8) {
                    $a = (V >>> 28 | na << 4) ^ (na >>> 2 | V << 30) ^ (na >>> 7 | V << 25);
                    v = (na >>> 28 | V << 4) ^ (V >>> 2 | na << 30) ^ (V >>> 7 | na << 25);
                    C = (Ia >>> 14 | La << 18) ^ (Ia >>> 18 | La << 14) ^ (La >>> 9 | Ia << 23);
                    E = (La >>> 14 | Ia << 18) ^ (La >>> 18 | Ia << 14) ^ (Ia >>> 9 | La << 23);
                    var Lb = V & ha;
                    var Eb = na & ea;
                    var kb = Lb ^ V & oa ^ Cb;
                    var hb = Eb ^ na & wa ^ Db;
                    var Ya = Ia & Sa ^ ~Ia & ab;
                    G = La & Xa ^ ~La & bb;
                    ra = g[b];
                    sa = g[b + 1];
                    S = m[b];
                    N = m[b + 1];
                    M = (N & 65535) + (sa & 65535) + (G & 65535) + (E & 65535) + (gb & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (G >>> 16) + (E >>> 16) + (gb >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (Ya & 65535) + (C & 65535) + (fb & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (Ya >>> 16) + (C >>> 16) + (fb >>> 16) + (G >>> 16);
                    ra = C << 16 | G & 65535;
                    sa = E << 16 | M & 65535;
                    M = (hb & 65535) + (v & 65535);
                    E = (hb >>> 16) + (v >>> 16) + (M >>> 16);
                    G = (kb & 65535) + ($a & 65535) + (E >>> 16);
                    C = (kb >>> 16) + ($a >>> 16) + (G >>> 16);
                    S = C << 16 | G & 65535;
                    N = E << 16 | M & 65535;
                    M = (Wa & 65535) + (sa & 65535);
                    E = (Wa >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (Ea & 65535) + (ra & 65535) + (E >>> 16);
                    C = (Ea >>> 16) + (ra >>> 16) + (G >>> 16);
                    fb = C << 16 | G & 65535;
                    gb = E << 16 | M & 65535;
                    M = (N & 65535) + (sa & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (G >>> 16);
                    Ea = C << 16 | G & 65535;
                    Wa = E << 16 | M & 65535;
                    $a = (Ea >>> 28 | Wa << 4) ^ (Wa >>> 2 | Ea << 30) ^ (Wa >>> 7 | Ea << 25);
                    v = (Wa >>> 28 | Ea << 4) ^ (Ea >>> 2 | Wa << 30) ^ (Ea >>> 7 | Wa << 25);
                    C = (fb >>> 14 | gb << 18) ^ (fb >>> 18 | gb << 14) ^ (gb >>> 9 | fb << 23);
                    E = (gb >>> 14 | fb << 18) ^ (gb >>> 18 | fb << 14) ^ (fb >>> 9 | gb << 23);
                    Cb = Ea & V;
                    Db = Wa & na;
                    kb = Cb ^ Ea & ha ^ Lb;
                    hb = Db ^ Wa & ea ^ Eb;
                    Ya = fb & Ia ^ ~fb & Sa;
                    G = gb & La ^ ~gb & Xa;
                    ra = g[b + 2];
                    sa = g[b + 3];
                    S = m[b + 2];
                    N = m[b + 3];
                    M = (N & 65535) + (sa & 65535) + (G & 65535) + (E & 65535) + (bb & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (G >>> 16) + (E >>> 16) + (bb >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (Ya & 65535) + (C & 65535) + (ab & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (Ya >>> 16) + (C >>> 16) + (ab >>> 16) + (G >>> 16);
                    ra = C << 16 | G & 65535;
                    sa = E << 16 | M & 65535;
                    M = (hb & 65535) + (v & 65535);
                    E = (hb >>> 16) + (v >>> 16) + (M >>> 16);
                    G = (kb & 65535) + ($a & 65535) + (E >>> 16);
                    C = (kb >>> 16) + ($a >>> 16) + (G >>> 16);
                    S = C << 16 | G & 65535;
                    N = E << 16 | M & 65535;
                    M = (wa & 65535) + (sa & 65535);
                    E = (wa >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (oa & 65535) + (ra & 65535) + (E >>> 16);
                    C = (oa >>> 16) + (ra >>> 16) + (G >>> 16);
                    ab = C << 16 | G & 65535;
                    bb = E << 16 | M & 65535;
                    M = (N & 65535) + (sa & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (G >>> 16);
                    oa = C << 16 | G & 65535;
                    wa = E << 16 | M & 65535;
                    $a = (oa >>> 28 | wa << 4) ^ (wa >>> 2 | oa << 30) ^ (wa >>> 7 | oa << 25);
                    v = (wa >>> 28 | oa << 4) ^ (oa >>> 2 | wa << 30) ^ (oa >>> 7 | wa << 25);
                    C = (ab >>> 14 | bb << 18) ^ (ab >>> 18 | bb << 14) ^ (bb >>> 9 | ab << 23);
                    E = (bb >>> 14 | ab << 18) ^ (bb >>> 18 | ab << 14) ^ (ab >>> 9 | bb << 23);
                    Lb = oa & Ea;
                    Eb = wa & Wa;
                    kb = Lb ^ oa & V ^ Cb;
                    hb = Eb ^ wa & na ^ Db;
                    Ya = ab & fb ^ ~ab & Ia;
                    G = bb & gb ^ ~bb & La;
                    ra = g[b + 4];
                    sa = g[b + 5];
                    S = m[b + 4];
                    N = m[b + 5];
                    M = (N & 65535) + (sa & 65535) + (G & 65535) + (E & 65535) + (Xa & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (G >>> 16) + (E >>> 16) + (Xa >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (Ya & 65535) + (C & 65535) + (Sa & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (Ya >>> 16) + (C >>> 16) + (Sa >>> 16) + (G >>> 16);
                    ra = C << 16 | G & 65535;
                    sa = E << 16 | M & 65535;
                    M = (hb & 65535) + (v & 65535);
                    E = (hb >>> 16) + (v >>> 16) + (M >>> 16);
                    G = (kb & 65535) + ($a & 65535) + (E >>> 16);
                    C = (kb >>> 16) + ($a >>> 16) + (G >>> 16);
                    S = C << 16 | G & 65535;
                    N = E << 16 | M & 65535;
                    M = (ea & 65535) + (sa & 65535);
                    E = (ea >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (ha & 65535) + (ra & 65535) + (E >>> 16);
                    C = (ha >>> 16) + (ra >>> 16) + (G >>> 16);
                    Sa = C << 16 | G & 65535;
                    Xa = E << 16 | M & 65535;
                    M = (N & 65535) + (sa & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (G >>> 16);
                    ha = C << 16 | G & 65535;
                    ea = E << 16 | M & 65535;
                    $a = (ha >>> 28 | ea << 4) ^ (ea >>> 2 | ha << 30) ^ (ea >>> 7 | ha << 25);
                    v = (ea >>> 28 | ha << 4) ^ (ha >>> 2 | ea << 30) ^ (ha >>> 7 | ea << 25);
                    C = (Sa >>> 14 | Xa << 18) ^ (Sa >>> 18 | Xa << 14) ^ (Xa >>> 9 | Sa << 23);
                    E = (Xa >>> 14 | Sa << 18) ^ (Xa >>> 18 | Sa << 14) ^ (Sa >>> 9 | Xa << 23);
                    Cb = ha & oa;
                    Db = ea & wa;
                    kb = Cb ^ ha & Ea ^ Lb;
                    hb = Db ^ ea & Wa ^ Eb;
                    Ya = Sa & ab ^ ~Sa & fb;
                    G = Xa & bb ^ ~Xa & gb;
                    ra = g[b + 6];
                    sa = g[b + 7];
                    S = m[b + 6];
                    N = m[b + 7];
                    M = (N & 65535) + (sa & 65535) + (G & 65535) + (E & 65535) + (La & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (G >>> 16) + (E >>> 16) + (La >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (Ya & 65535) + (C & 65535) + (Ia & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (Ya >>> 16) + (C >>> 16) + (Ia >>> 16) + (G >>> 16);
                    ra = C << 16 | G & 65535;
                    sa = E << 16 | M & 65535;
                    M = (hb & 65535) + (v & 65535);
                    E = (hb >>> 16) + (v >>> 16) + (M >>> 16);
                    G = (kb & 65535) + ($a & 65535) + (E >>> 16);
                    C = (kb >>> 16) + ($a >>> 16) + (G >>> 16);
                    S = C << 16 | G & 65535;
                    N = E << 16 | M & 65535;
                    M = (na & 65535) + (sa & 65535);
                    E = (na >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (V & 65535) + (ra & 65535) + (E >>> 16);
                    C = (V >>> 16) + (ra >>> 16) + (G >>> 16);
                    Ia = C << 16 | G & 65535;
                    La = E << 16 | M & 65535;
                    M = (N & 65535) + (sa & 65535);
                    E = (N >>> 16) + (sa >>> 16) + (M >>> 16);
                    G = (S & 65535) + (ra & 65535) + (E >>> 16);
                    C = (S >>> 16) + (ra >>> 16) + (G >>> 16);
                    V = C << 16 | G & 65535;
                    na = E << 16 | M & 65535
                }
                M = (h & 65535) + (na & 65535);
                E = (h >>> 16) + (na >>> 16) + (M >>> 16);
                G = (p & 65535) + (V & 65535) + (E >>> 16);
                C = (p >>> 16) + (V >>> 16) + (G >>> 16);
                p = C << 16 | G & 65535;
                h = E << 16 | M & 65535;
                M = (x & 65535) + (ea & 65535);
                E = (x >>> 16) + (ea >>> 16) + (M >>> 16);
                G = (n & 65535) + (ha & 65535) + (E >>> 16);
                C = (n >>> 16) + (ha >>> 16) + (G >>> 16);
                n = C << 16 | G & 65535;
                x = E << 16 | M & 65535;
                M = (y & 65535) + (wa & 65535);
                E = (y >>> 16) + (wa >>> 16) + (M >>> 16);
                G = (u & 65535) + (oa & 65535) + (E >>> 16);
                C = (u >>> 16) + (oa >>> 16) + (G >>> 16);
                u = C << 16 | G & 65535;
                y = E << 16 | M & 65535;
                M = (w & 65535) + (Wa & 65535);
                E = (w >>> 16) + (Wa >>> 16) + (M >>> 16);
                G = (r & 65535) + (Ea & 65535) + (E >>> 16);
                C = (r >>> 16) + (Ea >>> 16) + (G >>> 16);
                r = C << 16 | G & 65535;
                w = E << 16 | M & 65535;
                M = (I & 65535) + (La & 65535);
                E = (I >>> 16) + (La >>> 16) + (M >>> 16);
                G = (A & 65535) + (Ia & 65535) + (E >>> 16);
                C = (A >>> 16) + (Ia >>> 16) + (G >>> 16);
                A = C << 16 | G & 65535;
                I = E << 16 | M & 65535;
                M = (T & 65535) + (Xa & 65535);
                E = (T >>> 16) + (Xa >>> 16) + (M >>> 16);
                G = (Y & 65535) + (Sa & 65535) + (E >>> 16);
                C = (Y >>> 16) + (Sa >>> 16) + (G >>> 16);
                Y = C << 16 | G & 65535;
                T = E << 16 | M & 65535;
                M = (ma & 65535) + (bb & 65535);
                E = (ma >>> 16) + (bb >>> 16) + (M >>> 16);
                G = (R & 65535) + (ab & 65535) + (E >>> 16);
                C = (R >>> 16) + (ab >>> 16) + (G >>> 16);
                R = C << 16 | G & 65535;
                ma = E << 16 | M & 65535;
                M = (jb & 65535) + (gb & 65535);
                E = (jb >>> 16) + (gb >>> 16) + (M >>> 16);
                G = (Ba & 65535) + (fb & 65535) + (E >>> 16);
                C = (Ba >>> 16) + (fb >>> 16) + (G >>> 16);
                Ba = C << 16 | G & 65535;
                jb = E << 16 | M & 65535
            } while (!c);
            return [p, h, n, x, u, y, r, w, A, I, Y, T, R, ma, Ba, jb]
        }
    }();
    Oa.requestAnimationFrame = Oa.requestAnimationFrame || Oa.webkitRequestAnimationFrame || Oa.mozRequestAnimationFrame || Oa.oRequestAnimationFrame || Oa.msRequestAnimationFrame || function(a) {
        Oa.setTimeout(a, 1E3 / 60)
    }
    ;
    var pb = function() {
        function a() {}
        var m = {}, g, e = 0, c = 0, b = Date.now(), k = requestAnimationFrame;
        setInterval(function() {
            var d = Date.now();
            e && c && e == c && requestAnimationFrame == k && (Oa.requestAnimationFrame = a,
            g(e + d - b),
            Oa.requestAnimationFrame = k);
            c = e;
            b = d
        }, 250);
        requestAnimationFrame(function(d) {
            d ? g = function(f) {
                var l = 0, p = 1 >= e ? 0 : f - e, h;
                for (h in m)
                    m[h](p) ? ++l : delete m[h];
                if (!l)
                    for (h in m)
                        ++l;
                l ? (e = f,
                requestAnimationFrame(g)) : e = 0
            }
            : g = window.performance && window.performance.now ? function() {
                var f = performance.now(), l = 0, p = 1 >= e ? 0 : f - e, h;
                for (h in m)
                    m[h](p) ? ++l : delete m[h];
                if (!l)
                    for (h in m)
                        ++l;
                l ? (e = f,
                requestAnimationFrame(g)) : e = 0
            }
            : function() {
                var f = Date.now(), l = 0, p = 1 >= e ? 0 : f - e, h;
                for (h in m)
                    m[h](p) ? ++l : delete m[h];
                if (!l)
                    for (h in m)
                        ++l;
                l ? (e = f,
                requestAnimationFrame(g)) : e = 0
            }
            ;
            requestAnimationFrame(g)
        });
        return function() {
            !e && g && (requestAnimationFrame(g),
            e = 1);
            return m
        }
    }();
    function qb(a, m) {
        if (0 < m)
            return pb()[ka++] = function(g) {
                return 0 < (m -= g) ? !0 : (a(),
                !1)
            }
            ,
            "" + (ka - 1);
        a();
        return ""
    }
    function rb(a) {
        a.style.transition = "none"
    }
    function sb(a, m) {
        var g = ~~(a.style.transitionDelay.match(/^(\d+)ms$/) ? RegExp.$1 : 0)
          , e = ~~(a.style.transitionDuration.match(/^(\d+)ms$/) ? RegExp.$1 : 0);
        qb(function() {
            return m(a)
        }, g + e)
    }
    ;var B;
    (function(a) {
        a.eb = "yama";
        a.oc = "se";
        a.sb = "sevol";
        a.Ia = "desktop";
        a.ee = "hideid";
        a.ve = "scro";
        a.$d = "cptype";
        a.ie = "lthai";
        a.fa = "uname";
        a.Gb = "sx";
        a.jf = "lang";
        a.Lb = "gpid";
        a.ue = "rule";
        a.hd = "lognext";
        a.gd = "log";
        a.Sd = "autowin";
        a.Dc = "check";
        a.Xd = 1;
        a.Yd = 2;
        a.Zd = 4;
        a.Ec = 8;
        a.Pk = 16;
        a.Ok = 32;
        a.Wk = 64;
        a.Uk = 128;
        a.Vk = 256;
        a.Qk = 512;
        a.Rk = 1024;
        a.Sk = 2048;
        a.Tk = 4096;
        a.Va = "backgroundImage";
        a.Gk = "backgroundMask";
        a.jd = "msk";
        a.we = "swar";
        a.he = "lastreload";
        a.Sm = "tabsel";
        a.Ma = "tsssessionid";
        a.td = "skin";
        a.Ua = function(m, g, e) {
            D && (g != e ? D.setItem(m, g) : D.removeItem(m))
        }
    }
    )(B || (B = {}));
    var D;
    (function() {
        try {
            D = Oa.localStorage,
            D.setItem("a", "1"),
            D.removeItem("a")
        } catch (e) {
            D = {
                setItem: function(c, b) {
                    D[c] = b
                },
                removeItem: function(c) {
                    delete D[c]
                }
            };
            var a = navigator.languages
              , m = 0;
            navigator.userAgent.match(/TwitterAndroid/) && (m |= 1);
            for (var g in a)
                a[g].match(/(ja|JP)/) && (m |= 2);
            a = "";
            switch (m) {
            case 0:
                a = "This browser(private browsing etc.) won't let you save game logs, IDs or other settings.";
                break;
            case 1:
                a = "The Twitter browser will not let you save your settings (game logs, IDs, etc). Open the menu and select Open in Browser.";
                break;
            default:
            case 2:
                a = "このブラウザ環境(プライベートブラウズなど)では、牌譜の記録やIDの保存などが行えません。";
                break;
            case 3:
                a = "Twitterの専用ブラウザでは、設定の保存(牌譜の記録/IDの保存/など)が行えません。メニューの「ブラウザで開く」から通常のブラウザで開いてください。"
            }
            alert(a)
        }
    }
    )();
    (function() {
        var a = D[B.ve];
        if (Ra && Oa.screen && Oa.screen.orientation && Oa.screen.orientation.lock) {
            var m = screen.orientation
              , g = m.type;
            if (Ta && ("landscape-primary" == g || "landscape-secondary" == g)) {
                var e = Ma.getElementById("loading");
                e && (e.style.display = "none");
                Oa.StatusBar.overlaysWebView(!0);
                Oa.StatusBar.hide();
                m.lock("portrait");
                "landscape-primary" == g ? m.lock("landscape-secondary") : "landscape-secondary" == g && m.lock("landscape-primary");
                e && setTimeout(function() {
                    e && (e.style.display = "table")
                }, 1E3)
            }
            Ta && 2 == a ? m.lock("landscape-primary" == g ? "landscape-secondary" : "landscape-secondary" == g ? "landscape-primary" : "landscape") : m.lock(1 == a ? "portrait" : 2 == a ? "landscape" : "any")
        }
    }
    )();
    if (Ra && Oa.cordova && D && (!D[B.fa] || !D[B.fa].match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/)))
        try {
            Oa.cordova.exec(function(a) {
                !D[B.fa] && a && (D[B.fa] = a)
            }, function() {}, "restoreid20211015", "restore", [])
        } catch (a) {}
    D.nose && (D[B.sb] = "0",
    D.removeItem("nose"));
    var F, H = F || (F = {});
    H.jj = 0;
    H.oj = 10;
    H.qj = 11;
    H.Uf = 12;
    H.uj = 13;
    H.tj = 14;
    H.sd = 15;
    H.Gj = 16;
    H.nj = 17;
    H.Dj = 18;
    H.kj = 19;
    H.rd = 20;
    H.Bj = 21;
    H.pj = 22;
    H.Cj = 23;
    H.xj = 24;
    H.bb = 25;
    H.rj = 26;
    H.Ej = 27;
    H.wj = 28;
    H.mj = 29;
    H.vj = 30;
    H.yj = 31;
    H.qd = 32;
    H.zj = 33;
    H.Em = 34;
    H.Fj = 35;
    H.Tf = 36;
    H.Aj = 37;
    H.Ij = 38;
    H.Cm = 39;
    H.Dm = 40;
    H.Fm = 41;
    H.sj = 42;
    H.lj = 43;
    H.Hj = 44;
    H.Gm = 45;
    H.Lm = 46;
    H.Mm = 47;
    H.Hm = 48;
    H.Im = 49;
    H.Jm = 50;
    H.Km = 51;
    H.rf = 150;
    H.oi = 151;
    H.ni = 152;
    H.mi = 153;
    H.pi = 154;
    H.ki = 155;
    H.li = 156;
    H.zi = 157;
    H.wi = 158;
    H.yi = 159;
    H.xi = 160;
    H.Ai = 161;
    H.ri = 162;
    H.si = 163;
    H.ti = 164;
    H.ui = 165;
    H.sf = 166;
    H.Bi = 167;
    H.Ci = 168;
    H.Di = 169;
    H.ld = 180;
    H.Lc = 181;
    H.Ki = 182;
    H.Ji = 183;
    H.vf = 184;
    H.wf = 185;
    H.Uj = 190;
    H.ff = 200;
    H.dh = 201;
    H.$g = 202;
    H.bh = 203;
    H.ah = 204;
    H.Zg = 205;
    H.gf = 210;
    H.fh = 211;
    H.gh = 212;
    H.oh = 213;
    H.Ll = 214;
    H.sh = 215;
    H.fd = 216;
    H.vh = 217;
    H.xh = 218;
    H.Ah = 219;
    H.Eh = 220;
    H.Fh = 221;
    H.Dh = 222;
    H.ph = 223;
    H.th = 224;
    H.qh = 225;
    H.rh = 226;
    H.Gh = 230;
    H.Hh = 231;
    H.Ih = 232;
    H.Ch = 240;
    H.Bh = 241;
    H.Sg = 250;
    H.cf = 251;
    H.df = 252;
    H.bf = 253;
    H.af = 254;
    H.Ye = 255;
    H.$e = 256;
    H.Ug = 257;
    H.be = 258;
    H.Tg = 259;
    H.ae = 260;
    H.Ze = 261;
    H.Pg = 262;
    H.Qg = 263;
    H.Ue = 264;
    H.Ve = 265;
    H.Xe = 266;
    H.Rg = 267;
    H.Ic = 268;
    H.Hc = 269;
    H.rb = 270;
    H.Lg = 271;
    H.Kg = 272;
    H.We = 273;
    H.Ng = 274;
    H.Og = 275;
    H.Te = 276;
    H.Mg = 277;
    H.Gc = 278;
    H.Af = 280;
    H.nd = 281;
    H.Mi = 282;
    H.Pa = 283;
    H.Ni = 284;
    H.Ka = 285;
    H.uh = 286;
    H.wh = 287;
    H.kf = 288;
    H.yh = 289;
    H.Kl = 290;
    H.Ml = 291;
    H.mf = 300;
    H.lf = 301;
    H.Oh = 310;
    H.nf = 311;
    H.Nh = 312;
    H.Xh = 313;
    H.Rh = 314;
    H.Kh = 320;
    H.Qh = 321;
    H.Ph = 322;
    H.qf = 323;
    H.pf = 324;
    H.Lh = 325;
    H.Mh = 326;
    H.Vh = 327;
    H.Wh = 328;
    H.Yh = 329;
    H.Uh = 330;
    H.Jh = 331;
    H.ei = 340;
    H.fi = 341;
    H.Zh = 342;
    H.$h = 343;
    H.ai = 344;
    H.bi = 345;
    H.ci = 346;
    H.di = 347;
    H.ii = 348;
    H.ji = 349;
    H.gi = 350;
    H.hi = 351;
    H.Th = 360;
    H.Sh = 361;
    H.cj = 362;
    H.dj = 363;
    H.Mj = 364;
    H.Jj = 365;
    var tb;
    (function(a) {
        function m(k, d) {
            a.Pb[k] ? Object.keys(a.Pb[k]).length ? d(k, a.Pb[k]) : mb("https://cdn.tenhou.net/4/res/lang/string20220614_ja.json".replace("ja", k), function(f) {
                if (f)
                    throw f;
                f = this.response;
                try {
                    var l = JSON.parse(f)
                } catch (p) {
                    return
                }
                a.assign(k, l);
                d(k, l)
            }) : d(k, {})
        }
        function g(k) {
            void 0 !== k && B.Ua(B.jf, k, c);
            b = (D[B.jf] || c).split("-")[0];
            switch (b) {
            case "JP":
                b = "ja";
                break;
            case "EN":
                b = "en"
            }
            return b
        }
        function e(k) {
            var d = a.Pb[b];
            return d && d[k] || a.Pb.en[k] || a.Pb.ja[k] || "[str:" + b + k + "]"
        }
        a.Pb = {
            ja: {},
            en: {},
            zh: {},
            ko: {},
            ru: {},
            fr: {},
            it: {},
            es: {},
            vi: {},
            pt: {},
            de: {}
        };
        var c = (navigator.language || "ja").split("-")[0]
          , b = "";
        a.assign = function(k, d) {
            k = a.Pb[k];
            if (d.length)
                for (var f = 0; f < d.length; f += 2)
                    k[~~d[f]] = d[f + 1];
            else
                for (f in d)
                    k[f] = d[f]
        }
        ;
        a.wc = g;
        a.Xj = function(k) {
            function d() {
                --f || k()
            }
            b = g();
            var f = 0;
            ++f;
            m("en", d);
            ++f;
            m("ja", d);
            ++f;
            m(b, d)
        }
        ;
        a.jk = e;
        a.nb = function(k) {
            var d = k % 10;
            k %= 100;
            return 1 == d && 11 != k ? e(F.nd)[0] : 2 == d && 12 != k ? e(F.nd)[1] : 3 == d && 13 != k ? e(F.nd)[2] : e(F.nd)[3]
        }
    }
    )(tb || (tb = {}));
    var J = tb.jk;
    function ub(a) {
        if ("254" == a)
            return "a";
        if ("255" == a)
            return "r";
        if ("136" == a)
            return "0z";
        var m = a >> 2;
        return (27 > m && 16 == a % 36 ? "0" : m % 9 + 1) + "mpsz".substr(m / 9, 1)
    }
    function vb(a) {
        for (var m = "", g = 0; g < a.length; ++g)
            m += ub(a[g]);
        return m.replace(/\d(m|p|s|z)(\d\1)*/g, "$&:").replace(/(m|p|s|z)([^:])/g, "$2").replace(/:/g, "")
    }
    function wb(a) {
        return a.replace(/(\d)(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{0,8})(\d{8})(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(\d?)(\d?)(\d?)(\d?)(\d?)(\d?)(\d)(\d)(m|p|s|z)/g, "$1$9$2$9$3$9$4$9$5$9$6$9$7$9$8$9").replace(/(m|p|s|z)(m|p|s|z)+/g, "$1").replace(/([^0-9]|^)[mpsz](\d[mpsz\d]*)/g, "$1$2")
    }
    function yb(a) {
        if (!a)
            return "";
        for (var m = [], g = 0; 34 > g; ++g)
            m[g] = 0;
        return wb(a).replace(/r/g, "255,").replace(/a/g, "254,").replace(/(\d)([mpsz])(?![mpsz])/g, function(e, c, b) {
            c = ~~c;
            if ("z" == b && 0 == c)
                return "136,";
            e = "m" == b ? 0 : "p" == b ? 1 : "s" == b ? 2 : 3;
            return c ? 36 * e + 4 * (c - 1) + ++m[9 * e + (c - 1)] % 4 + "," : 4 * (9 * e + 4) + ","
        }).replace(/,$/, "")
    }
    ;var zb = [0, 0, 0, 0, 0, 0, 0, 0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, 0]
      , Ab = [20, 20, 20, 20, 40, 60, 80, 100, 100, 100, 400, 800, 1200, 1600, 2E3, 2400, 2800, 3200, 3600, 4E3, 0]
      , Bb = [1, 3, 0, 7, 9, 11, 0, 15, 65, 0, 0, 0, 73, 0, 0, 0, 129, 131, 0, 135, 137, 139, 0, 143, 193, 0, 0, 0, 201, 0, 0, 0, 33, 35, 0, 39, 41, 43, 0, 47, 97, 0, 0, 0, 105, 0, 0, 0, 161, 163, 0, 167, 169, 171, 0, 175, 225, 0, 0, 0, 233, 0, 0, 0, 17, 25, 145, 153, 49, 57, 177, 185, 81, 89, 209, 217, 113, 121, 241, 249, 1025, 1033, 513, 521, 1537, 1545, 1553, 1561, 1153, 1161, 641, 649, 1665, 1673, 1681, 1689, 1057, 1065, 545, 553, 1569, 1577, 1585, 1593, 1185, 1193, 673, 681, 1697, 1705, 1713, 1721, 2065, 4353, 4361, 4377, 257, 265, 281, 4481, 4489, 4505];
    function Fb(a) {
        var m = document.createElement("style");
        m.innerHTML = a;
        Qa.appendChild(m)
    }
    Fb("@font-face{font-family:cwTeX-Q-Kai-T;src: url(https://cdn.tenhou.net/3/res/font/cwTeXQKaiT-Medium_20200430.ttf) format('truetype');}@font-face{font-family:icons2;src: url(https://cdn.tenhou.net/3/res/font/icons_20200502.ttf) format('truetype');}*{-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1;}:focus{outline:0;}HTML{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}HTML{touch-action:pan-y;}BODY{font-family:sans-serif;overflow-x:hidden;-webkit-text-size-adjust:100%;}HR{border-color:#444;border-width:1px 0 0 0;border-style:solid;margin:0.5em 0;}TEXTAREA{margin:0px;word-break:break-all;}SELECT{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.5em;}SELECT::-ms-expand{display:none;}BUTTON,SELECT,INPUT,.bth{height:2em;font-size:175%;margin:0;}BUTTON,SELECT,INPUT[type=checkbox].checkboxt+LABEL,A.bt3{padding:0 0.5em;color:inherit;border:solid 1px #444;}BUTTON,SELECT,INPUT[type=checkbox].checkboxt+LABEL{background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(167,147,127,0.4) 50%,rgba(31,31,31,0.4) 51%,rgba(0,0,0,0.4) 100%);}A.bt3{display:block;width:100%;height:100%;padding:0 1em;border:solid 1px #444;background:linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(47,47,47,0.4) 100%);}A.bt3:hover,SELECT:hover{background-color:#030;color:#FFF;}SELECT:disabled,BUTTON:disabled{color:#888;background:#444;pointer-events:none;}OPTION{background-color:#FFF;color:#000;}BUTTON *{pointer-events:none;}.sscl{-webkit-overflow-scrolling:touch;}.rot000{position:absolute;}.rot090{position:absolute;transform:rotate( 90deg);-webkit-transform:rotate( 90deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);}.rot180{position:absolute;transform:rotate(180deg);-webkit-transform:rotate(180deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);}.rot270{position:absolute;transform:rotate(270deg);-webkit-transform:rotate(270deg);filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);}.ts0,sblink{text-shadow:#000 -1px 0px 0px, #000 1px 0px 0px, #000 1px 1px 1px,#000 -1px -1px 1px;}.ts1{text-shadow:#000 -1px 0px 0px, #000 1px 0px 0px, #000 0px 1px 0px,#000 0px -1px 0px;}.ts1e{text-shadow:#000 -0.1em 0px 0.05em, #000 0.1em 0px 0.05em, #000 0px 0.1em 0.05em,#000 0px -0.1em 0.05em;}.tsv{text-shadow:#000 -1px -1px 0px, #000 0px 1px 0px, #000 3px 3px 0px;}.nosel{-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-user-select:none;}.tbl{display:table;}.tbc{display:table-cell;}.gray{color:#666;}.nobr{word-break:keep-all;white-space:nowrap;}.bgb40{background-color:rgba(0,0,0,0.4);}.bgb60{background-color:rgba(0,0,0,0.6);}.bgb80{background-color:rgba(0,0,0,0.8);}.bgb{background-color:#000;}.ra0{border-radius:0.5em;}.ra1{border-radius:0.5em 0 0 0.5em;}.ra2{border-radius:0 0.5em 0.5em 0;}.dan18,.dan19,.dan20{font-weight:bold;}.n2r{display:inline-block;width:2em;text-align:right;}._selected_{border-left:0.1em solid #CCC;}.bbg5{border:solid 0.05em #222;border-image:linear-gradient(-10deg,#000, #333) 1;background:linear-gradient(-10deg,rgba(63,63,63,0.3), rgba(0,0,0,0.3));}.desc{color:#666;font-size:50%;}.gmark{position:relative;z-index:0;}.gmark:before{z-index:-1;position:absolute;display:block;content:'';left:50%;top:50%;width:0.9em;height:0.9em;border-radius:50%;background-color:#F93;transform:translate(-50%,-55%);opacity:0.4;}SELECT{padding-right:1em;}.select-wrapper{position:relative;display:inline-block;}.select-wrapper:after{content:'';position:absolute;right:0.5em;top:45%;width:0;height:0;border-left:0.3em solid transparent;border-right:0.3em solid transparent;border-top: 0.3em solid #FFF;pointer-events:none;animation:_tblink 0.5s linear 0s infinite alternate;}.select-wrapper>BUTTON:first-child{padding-right:1em;border-radius:0.5em;}.fixed-select{min-width:10em;max-width:90vw;max-height:85vh;overflow-y:auto;}.fixed-select .A{font-size:150%;color:#000;padding:0.5em;text-decoration:none;display:block;}.fixed-select .A{border-bottom:1px solid #DDD;cursor:pointer;}.fixed-select .A:nth-child(1){border-top:1px solid #DDD;}.fixed-select .A:hover{background-color:#CCC}.fixed-select .A DIV.desc{color:#666;font-size:50%;}.fixed-select .A *{pointer-events:none;}.vscl::-webkit-scrollbar{background:#CCC;width:0.5em;}.vscl::-webkit-scrollbar-thumb{background:#AAA;}INPUT[type=checkbox].checkboxt{display:none;}INPUT[type=checkbox].checkboxt+LABEL{position:relative;cursor:pointer;display:inline-block;border-radius:0.5em;}INPUT[type=checkbox].checkboxt+LABEL{padding:0.5em 0.5em 0.5em 1.8em;}INPUT[type=checkbox].checkboxt+LABEL::before{font-family:icons2;content:'';position:absolute;left:0.5em;top:25%;}INPUT[type=checkbox].checkboxt:checked+LABEL::before{content:'';}INPUT[type=checkbox].checkboxt:disabled+LABEL{color:#888;background:#444;pointer-events:none;}.radio,.checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0.3em;}.radio,.checkbox{font-size:1.25rem;padding:0.75rem;border:solid 1px #444;}.radio:hover,.checkbox:hover{background-color:#030;color:#FFF;}INPUT[type=radio].radio,INPUT[type=checkbox].checkbox{display:none;}.radio,.checkbox{box-sizing:border-box;position:relative;display:inline-block;padding:0.75rem 0.75rem 0.75rem 3.0rem;vertical-align: middle;}.radio:after,.checkbox:after{position:absolute;display:block;content:'';top:50%;left:0.9rem;margin-top:-0.6rem;width:1.0rem;height:1.0rem;border:0.1rem solid #CCC;border-radius:0.3rem;}.radio:before{position:absolute;display:block;content:'';opacity:0;top:50%;left:1.1rem;margin-top:-0.4rem;width:0.6rem;height:0.6rem;border-radius:50%;background-color:#444;}.checkbox:before{position:absolute;display:block;content:'';opacity:0;top:50%;left:1.25rem;margin-top:-0.5rem;width:0.3rem;height:0.6rem;border-right:0.2rem solid #4C4;border-bottom:0.2rem solid #4C4;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}INPUT[type=radio].radio:checked+.radio:before,INPUT[type=checkbox].checkbox:checked+.checkbox:before{opacity:1;}.bblink{animation:_bblink 0.5s ease 0s infinite alternate;}@keyframes _bblink{0%{background-color:rgba(255,255,255,0.3);}30%{background-color:rgba(0,0,0,0.3);}100%{background-color:rgba(0,0,0,0.3);}}.cblink{animation:_cblink 1.75s linear 0s infinite alternate;}@keyframes _cblink{0%{color:#FFF;}80%{color:#FFF;}100%{color:#666;}}.sblink{animation:_sblink 0.5s linear 0s infinite alternate;position:absolute;bottom:0;right:0.25em;color:#888;font-size:300%;pointer-events:none;}@keyframes _sblink{0%{color:transparent;}30%{color:#888;}100%{color:#888;}}.tblink{animation:_tblink 0.7s linear 0s infinite alternate;}@keyframes _tblink{0%{opacity:0;}40%{opacity:1;}100%{opacity:1;}}.flip{perspective:100px;opacity:0;transform:rotateX(-90deg);transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flip.show{opacity:1;transform:none;transition:all 0.5s cubic-bezier(.36,-0.64,.34,1.76);}.flipinqs{animation:_flipin 0.25s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipinhs{animation:_flipin 0.5s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}.flipin1s{animation:_flipin 1s cubic-bezier(0.175, 0.885, 0.320, 1) 0s 1 normal;}@keyframes _flipin{0%{opacity:0;transform:rotateX(-90deg);}100%{opacity:1;transform:none;}}.flipinqs.hide{animation:_flipout 0.25s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}.flipinhs.hide{animation:_flipout 0.5s cubic-bezier(0.600, 0, 0.735, 0.045) 0s 1 normal;}@keyframes _flipout{0%{opacity:1;transform:none;}100%{opacity:0;transform:rotateX(-90deg);}}.arrow-box-left,.arrow-box-right{position:relative;background:#FFF;color:#000;border-radius:0.2em;padding:0.5em;}.arrow-box-left:after{right:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-right-color:#FFF;border-width:0.5em;margin-top:-0.5em;}.arrow-box-right:after {left:100%;top:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(255, 255, 255, 0);border-left-color:#FFF;border-width:0.5em;margin-top:-0.5em;}.b20:before{content:'';position:absolute;top:100%;left:50%;margin-left:-0.2rem;border:0.2rem solid transparent;border-top:0.2rem solid rgba(143,143,143,1.0);}.b21:before{content:'';position:absolute;top:40%;left:100%;margin-top:-0.2rem;border:0.2rem solid transparent;border-left:0.2rem solid rgba(143,143,143,1.0);}.b22:before{content:'';position:absolute;top:-0.4rem;left:50%;margin-left:-0.2rem;border:0.2rem solid transparent;border-bottom:0.2rem solid rgba(143,143,143,1.0);}.b23:before{content:'';position:absolute;top:60%;left:-0.4rem;margin-top:-0.2rem;border:0.2rem solid transparent;border-right:0.2rem solid rgba(143,143,143,1.0);}#pftab TD,#rnktab TD{padding-top:0.35em;}#pftab SMALL,#rnktab SMALL{font-size:60%;}.trtab TD{padding:0.5em 0.25em;}.c15>DIV{background-color:rgba(0,0,0,0.85);color:#FFF;border:solid 1px #444;padding:1em 0.5em;}.c16{background:#000;}.c17>DIV{color:#000;padding:1em 0.5em;}[data-pane=d0]{padding:1em;}");
    function K(a) {
        return "<span class=gray>" + a + "</span>"
    }
    function Gb(a) {
        return "<span class=nobr>" + a + "</span>"
    }
    ya("span", Qa, "", {
        innerHTML: "FontLoader&#xe800;"
    }, {
        position: "absolute",
        fontFamily: "cwTeX-Q-Kai-T,icons2",
        visibility: "hidden"
    });
    setInterval(function() {
        for (var a = Ma.querySelectorAll(".sblink"), m = 0; m < a.length; ++m) {
            var g = a[m];
            if (g.previousSibling) {
                var e = g.previousSibling;
                g.style.visibility = e.scrollTop + e.offsetHeight < e.scrollHeight - .25 * g.offsetHeight ? "" : "hidden"
            }
        }
    }, 1E3);
    function Hb(a) {
        a.sort(function(m, g) {
            return m - g
        })
    }
    function Ib(a, m) {
        a.sort(function(g, e) {
            return (m[g] << 8 | g) - (m[e] << 8 | e)
        })
    }
    function Jb(a) {
        a && a.getFullYear || (a = new Date(a));
        return a.getFullYear() + ("0" + (a.getMonth() + 1)).slice(-2) + ("0" + a.getDate()).slice(-2) + ("0" + a.getHours()).slice(-2) + ("0" + a.getMinutes()).slice(-2) + ("0" + a.getSeconds()).slice(-2)
    }
    function Kb(a) {
        a = a.split("&");
        var m = {}, g;
        for (g in a)
            if (a[g].length) {
                var e = a[g].split("=");
                m[e.shift()] = decodeURIComponent(e.join("="))
            }
        return m
    }
    function Mb(a) {
        return ja(a) ? "<span class=gmark>" + a.substr(0, 1) + "</span>" + a.substr(1) : a
    }
    function Nb(a, m, g) {
        var e = new XMLHttpRequest;
        e.onload = function(c) {
            200 == this.status ? g.call(this) : g.call(this, c)
        }
        ;
        e.onerror = function(c) {
            g.call(this, c)
        }
        ;
        e.open(m ? "POST" : "GET", a, !0);
        e.setRequestHeader("Tenhou-Client-Type", Ra ? "C" : "W");
        e.setRequestHeader("Tenhou-Client-Lang", tb.wc());
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        e.send(m)
    }
    var Ob = !1
      , Pb = {};
    Da(Pb, Kb(location.search.substr(1)));
    Da(Pb, Kb(location.hash.substr(1)));
    Pb.TW = Pb.tw = ~~Pb.tw % 4;
    Pb.Vc = !(!Pb.wg && !Pb.log);
    Pb.hc = !1;
    Pb.lk = function(a) {
        function m(g, e) {
            return (g = a.match(g)) ? g[1] : e
        }
        Pb.log = m(/\?log=([^&]*)/, "");
        Pb.TW = Pb.tw = ~~m(/&tw=(\d)/, 0);
        Pb.ts = ~~m(/&ts=(\d+)/, 0);
        Pb.wg = m(/\?wg=([^&]*)/, "");
        (Pb.log || Pb.wg) && L.Na(11)
    }
    ;
    function Qb(a) {
        for (var m = 1; m < arguments.length; ++m) {
            var g = arguments[m];
            if (0 === g)
                Array.prototype.push.apply(arguments, "regid clearid idcont uname sx mvlb ok regemail".split(" "));
            else if (1 === g)
                Array.prototype.push.apply(arguments, "cfg testplay haifu kansen openurl help hairi purchase".split(" "));
            else if (2 === g)
                Array.prototype.push.apply(arguments, ["iap", "storePurchase", "exit"]);
            else if (3 === g)
                Array.prototype.push.apply(arguments, ["rule", "join", "cancel", "logout"]);
            else {
                g = Ma.getElementsByName(g);
                for (var e = 0; e < g.length; ++e) {
                    var c = g[e];
                    c && (c.disabled = a)
                }
            }
        }
    }
    function Rb(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[%\w-]+\.)+[%\w-]+(?:\/[%\w-]+)+\.(?:jpg|png|gif)$/)
    }
    function Sb(a) {
        if (!a)
            return !1;
        a = a.replace(/\?.*$/, "");
        return a.match(/^https?:\/\/(?:[%\w-]+\.)+[%\w-]+(?:\/[%\w-]+)+\.(?:json|txt)$/)
    }
    var Tb = function() {
        var a = []
          , m = new XMLHttpRequest;
        m.onload = function() {
            a.length && 1 != m.readyState && (m.open("POST", "https://tenhou.net/3/err.cgi", !0),
            m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            m.send(a.shift()))
        }
        ;
        return function() {
            for (var g = arguments[0], e = 1; e < arguments.length; ++e)
                g += " " + arguments[e];
            a.push(g);
            m.onload()
        }
    }()
      , Ub = "";
    Oa.onerror = function(a, m, g, e, c) {
        a = a + " " + m + ":" + g + ":" + e + " " + c;
        Ub != a && Tb(a);
        Ub = a
    }
    ;
    var Vb = function() {
        var a, m, g;
        return {
            qa: function(e) {
                g && (clearInterval(g),
                g = null);
                m && m[e] && 0 == m[e](a) || !a || (a.parentNode.removeChild(a),
                a = null)
            },
            o: function(e, c, b, k, d, f, l) {
                f = f || "OK";
                l = l || "CANCEL";
                1 == arguments.length && (c = 1);
                m = [k, b];
                var p = a = ya("div", Qa, "tbl", {}, {
                    position: "fixed",
                    zIndex: 2,
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.75)",
                    opacity: "0"
                });
                qb(function() {
                    Da(p.style, {
                        transition: "all 250ms ease-out 0ms",
                        opacity: ""
                    });
                    sb(p, rb);
                    0 == c && Fa(p, "click", function() {
                        Vb.qa(0)
                    });
                    p = ya("div", p, "tbc", {}, {
                        textAlign: "center",
                        verticalAlign: "middle"
                    });
                    p = ya("form", p, "", {
                        innerHTML: "<div id=a22 style='position:relative;font-size:150%;" + (0 != c ? "padding:1em 0;" : "") + "'>" + e + "</div><input type=button style='width:6em;' /><input type=submit style='width:6em;' />",
                        onsubmit: function() {
                            return !1
                        }
                    }, {
                        display: "inline-block",
                        background: "#FFF",
                        color: "#000",
                        borderRadius: "0.6em",
                        maxWidth: "90vw",
                        padding: "1em"
                    });
                    Na(p);
                    var h = p.querySelectorAll("FORM>INPUT");
                    h[0].onclick = function() {
                        Vb.qa(0)
                    }
                    ;
                    h[0].style.display = c & 2 ? "" : "none";
                    h[0].value = l;
                    h[1].onclick = function() {
                        Vb.qa(1)
                    }
                    ;
                    h[1].style.display = c & 1 ? "" : "none";
                    h[1].value = f;
                    if (Ua && Ra)
                        for (var n = 0; n < h.length; ++n)
                            Ga(h[n], {
                                focus: function() {
                                    Wb(1)
                                },
                                blur: function() {
                                    Wb()
                                }
                            });
                    h.length && h[0].focus();
                    if (d) {
                        Xb(O.Fb, 0, 0);
                        var x = ya("div", p, "", {
                            innerHTML: "<div style='position:absolute;right:0;bottom:0;padding:0 0.1em;font-size:70%;'></div>"
                        }, {
                            color: "#000",
                            position: "absolute",
                            pointerEvents: "none"
                        });
                        g = setInterval(function() {
                            var u = x.style
                              , y = h[0].getBoundingClientRect();
                            u.left = y.left + "px";
                            u.top = y.top + "px";
                            u.width = y.width + "px";
                            u.height = y.height + "px";
                            x.firstChild.innerHTML = --d;
                            0 < d && Xb(O.re, 0, 0);
                            0 > d && Vb.qa(0)
                        }, 1E3)
                    }
                    if (p = p.querySelector("._selected_"))
                        p.parentNode.scrollTop = p.offsetTop - (p.parentNode.offsetHeight - p.offsetHeight) / 2
                }, 1)
            },
            ia: function(e, c, b, k, d) {
                return Vb.o("<div class='fixed-select sscl' style='position:relative;" + (c || "") + "'>" + e + "</div><div class=sblink style='visibility:hidden;'>▼</div>", b, k, d)
            },
            wb: function() {
                return !!a
            }
        }
    }();
    Fa(Oa, "click", function(a) {
        var m = a.target;
        if (m.classList.contains("A") && m.id && m.parentNode.classList.contains("fixed-select"))
            if ("A" == m.tagName && a.preventDefault(),
            a = m.id.split("-"),
            P.b && P[a[0]])
                P[a[0]](a[0], a[1]);
            else
                switch (a[0]) {
                case "#tw":
                    3 == z.a ? Yb.Cd(a[0], a[1]) : 2 == z.a && Zb.Cd(a[0], a[1]);
                    break;
                case "#ts":
                    Yb.tg(a[0], a[1]);
                    break;
                case "#tj":
                    Yb.ug(a[0], a[1]);
                    break;
                case "#edit":
                    if ("M" == a[1])
                        Oa.open("https://tenhou.net/6/?log=" + Pb.log + "&tw=" + ~~Pb.tw);
                    else if ("T" == a[1])
                        return alert("本機能はクローズド公開中のため使用できません")
                }
    });
    var $b = 108
      , ac = ya("div", Qa, "nosel", {}, {
        display: "none",
        color: "#CCC",
        backgroundColor: "#444",
        height: $b + "px"
    })
      , bc = ya("div", Qa, "nosel", {}, {
        display: "none",
        overflow: "hidden",
        position: "absolute"
    })
      , cc = ya("div", Qa, "", {}, {
        position: "absolute"
    });
    db && !eb ? ac.innerHTML = "<div style='width:100%;height:100%;display:table;pointer-events:none;'><div style='display:table-cell;text-align:center;vertical-align:middle;'>上にゆっくりスクロールしてください</div></div>" : ($b = 0,
    ac.style.height = "" + $b,
    Qa.style.overflow = "hidden");
    function dc() {
        function a() {
            g = null;
            var c = Ma.documentElement.clientWidth
              , b = Oa.innerHeight
              , k = (~~Oa.orientation + 360) % 360
              , d = e[0];
            db && ((~~k + 360) % 180 && (d = e[1]),
            Ua && c == d[1] && (bc.style.display = ac.style.display = "none",
            d[0] = d[1] = 0),
            c < d[0] && (c = d[0]),
            b < d[1] && (b = d[1]));
            c == parseInt(bc.style.width) && b == parseInt(bc.style.height) ? (d[0] = c,
            d[1] = b,
            Qa.style.height = parseInt(ac.style.height) + b + "px",
            bc.style.display = ac.style.display = "",
            ec()) : (m(),
            Wb(),
            Oa.scrollTo(0, parseInt(ac.style.height)),
            bc.style.width = c + "px",
            bc.style.height = b + "px")
        }
        function m(c) {
            cb = Oa.devicePixelRatio || 1;
            Ta && (bc.style.display = ac.style.display = "none");
            c && "resize" == c.type || (Qa.style.height = 2 * Oa.innerHeight + "px");
            clearTimeout(g);
            g = setTimeout(a, 250)
        }
        var g, e = [[0, 0], [0, 0]];
        Fa(Oa, "orientationchange", Ta ? m : function() {
            bc.style.display = ac.style.display = "none";
            var c = e[(~~((~~Oa.orientation + 360) % 360) + 360) % 180 ? 1 : 0];
            c[0] = c[1] = 0;
            m()
        }
        );
        Fa(Oa, "resize", m);
        m()
    }
    function fc(a, m, g) {
        var e = m / cb + "px"
          , c = g / cb + "px";
        if (a.width != m || a.height != g)
            a.width = m,
            a.height = g;
        a = a.style;
        if (a.width != e || a.height != c)
            a.width = e,
            a.height = c
    }
    function gc() {
        hc.a = 2;
        hc.a = 3 == z.a ? D[B.Dc] & B.Ec ? 3 : ~~D[B.eb] : ~~D[B.eb];
        0 == hc.a && D[B.Ia] && (hc.a = 1);
        Q.aa(bc.offsetWidth * cb, bc.offsetHeight * cb, D[B.Ia] & 1);
        ic.ik();
        var a = Q.lb
          , m = Q.Ab;
        Qa.parentNode.style.fontSize = ~~((a - 2 * Q.I[1]) / cb / 30) + "px";
        za.style.width = (a + 0) / cb + "px";
        za.style.height = m / cb + "px";
        fc(jc.P.canvas, a, m);
        fc(kc.P.canvas, Q.Hd, m);
        fc(lc.P.canvas, Q.Hd, m);
        a = -~~((Q.Hd - a) / 2 / cb);
        kc.P.canvas.style.marginLeft = lc.P.canvas.style.marginLeft = a + "px";
        mc.va();
        U.aa();
        nc.aa();
        oc.style.left = ~~(U[W.La] / cb) + a + "px";
        oc.style.top = ~~(U[W.cb] / cb) + "px";
        m = pc.P.canvas;
        m.style.marginLeft = ~~(U[W.zf] / cb) + a + "px";
        m.style.marginTop = ~~(U[W.le] / cb) + "px";
        fc(m, U[W.yf], U[W.xf]);
        jc.na();
        pc.na();
        kc.Yc();
        qc.aa();
        L.aa();
        P.aa();
        rc.aa();
        cc.style.top = za.offsetHeight + qc.b.offsetHeight + "px";
        (a = Ma.getElementById("loading")) && a.parentNode.removeChild(a)
    }
    function ec() {
        ec = gc;
        L.Na(11, Oa.tenhouEventInfo && !Ma.referrer.match(/^https?:\/\/tenhou.net\/0\/(\?|$)/))
    }
    function Wb(a) {
        var m = Oa.StatusBar;
        if (m) {
            Ra && Ua && m.backgroundColorByHexString("#000");
            var g = Ma.documentElement.clientWidth
              , e = Oa.innerHeight;
            !a && e < g ? (m.overlaysWebView(!0),
            m.hide()) : (m.overlaysWebView(!1),
            m.show())
        }
    }
    Ra && Fa(Ma, "resume", va(function() {
        jc.na();
        pc.na();
        kc.Yc();
        var a = lc.P;
        a.clearRect(0, 0, a.canvas.width + 1, a.canvas.height + 1)
    }, 1));
    var za = ya("div", bc, "nosel tbl", {}, {
        margin: "0 auto",
        position: "relative"
    });
    function sc(a, m) {
        var g = arguments;
        a.beginPath();
        a.moveTo(g[2], g[3]);
        for (var e = 4; e < g.length; )
            switch (g[e++]) {
            case 0:
                e += 2;
                break;
            case 1:
                a.lineTo(g[e++], g[e++]);
                break;
            case 2:
                a.arcTo(g[e++], g[e++], g[e + 1], g[e + 2], m)
            }
        a.closePath()
    }
    function tc(a, m, g, e, c) {
        var b = ~~(.5 * Q.Y[0]);
        sc(a, b, m + b, g + c, 2, m + e, g + c, 2, m + e, g, 2, m, g, 2, m, g + c, 0, m + e, g + c + .01)
    }
    var jc = function() {
        function a(g, e) {
            g.globalAlpha = e;
            g.fill();
            g.globalAlpha = 1
        }
        function m(g, e, c, b, k, d) {
            d && (g.fillStyle = d,
            g.fillText(e, c + 1, b + 0),
            g.fillText(e, c - 1, b + 0),
            g.fillText(e, c + 0, b + 1),
            g.fillText(e, c + 0, b - 1),
            g.fillText(e, c + 1, b + 1),
            g.fillText(e, c - 1, b + 1),
            g.fillText(e, c + 1, b - 1),
            g.fillText(e, c - 1, b - 1));
            k && (g.fillStyle = k,
            g.fillText(e, c, b))
        }
        return {
            P: ya("canvas", za, "", {}, {
                position: "absolute",
                pointerEvents: "none"
            }).getContext("2d"),
            Ie: [ya("div", za, "", {}, {
                position: "absolute",
                display: "none"
            }), ya("div", za, "", {}, {
                position: "absolute",
                display: "none"
            }), ya("div", za, "", {}, {
                position: "absolute",
                display: "none"
            }), ya("div", za, "", {}, {
                position: "absolute",
                display: "none"
            })],
            na: va(function() {
                var g = jc.P;
                if (g)
                    if (g.setTransform(1, 0, 0, 1, 0, 0),
                    g.clearRect(0, 0, g.canvas.width + 1, g.canvas.height + 1),
                    -1 == z.Fa)
                        for (var e = 0; 4 > e; ++e)
                            jc.Ie[e].style.display = "none";
                    else {
                        var c = Math.round(kc.P.canvas.offsetLeft * cb);
                        e = U[W.Vd] + c;
                        var b = U[W.Wd]
                          , k = U[W.Ud]
                          , d = U[W.Td]
                          , f = Q.Y[0]
                          , l = ~~(.5 * f);
                        g.fillStyle = "#000";
                        tc(g, e, b, k, d);
                        a(g, .2);
                        var p = 3 * Q.I[1]
                          , h = 3 * Q.J[0];
                        if (!ib) {
                            var n = [g];
                            n.push(l, e, b + d);
                            z.O[0] && n.push(2, e, b + d + h, 2, e + k + p, b + d + h, 2, e + k + p, b + d + f, 1, e + k, b + d + f);
                            n.push(1, e + k, b + d);
                            z.O[1] && n.push(2, e + k + p, b + d, 2, e + k + p, b - h, 2, e + k + f, b - h, 1, e + k + f, b);
                            n.push(1, e + k, b);
                            z.O[2] && n.push(2, e + k, b - h, 2, e - p, b - h, 2, e - p, b - f, 1, e, b - f);
                            n.push(1, e, b);
                            z.O[3] && n.push(2, e - p, b, 2, e - p, b + d + h, 2, e - f, b + d + h, 1, e - f, b + d);
                            sc.apply(this, n);
                            a(g, .15)
                        }
                        if (ib)
                            for (e = 0; 4 > e; ++e) {
                                if (p = jc.Ie[e],
                                p.style.display = "none",
                                z.O[e]) {
                                    p.innerHTML = "<div></div><div style='position:relative;overflow:hidden;'><img/><div></div><div style='position:absolute;'></div></div><div></div>";
                                    p.className = "ts1 b2" + e;
                                    h = ~~(.25 * l);
                                    n = 2 * Q.I[1];
                                    var x = 2 * Q.J[0] - f;
                                    b = Math.min(n, x);
                                    var u = W.ge + 2 * e
                                      , y = U[u + 0] + c;
                                    u = U[u + 1];
                                    0 == e && (y += 0 * Q.I[0],
                                    u += 3 * Q.J[0] + l,
                                    p.style.transform = "translate(-100%,-100%)",
                                    p.style.borderBottom = "0.2rem solid rgb(31,31,31,0.7)");
                                    1 == e && (y += 3 * Q.I[1],
                                    u += 1 * Q.J[1] + f,
                                    p.style.transform = "translate(-100%,   0%)",
                                    p.style.borderRight = "0.2rem solid rgb(31,31,31,0.7)");
                                    2 == e && (y += 1 * Q.I[0],
                                    u += -2 * Q.J[0] + l,
                                    p.style.transform = "translate(   0%,   0%)",
                                    p.style.borderTop = "0.2rem solid rgb(31,31,31,0.7)");
                                    3 == e && (y += -2 * Q.I[1],
                                    u += 0 * Q.J[1],
                                    p.style.transform = "translate(   0%,-100%)",
                                    p.style.borderLeft = "0.2rem solid rgb(31,31,31,0.7)");
                                    u = Math.min(u, U[W.cb]);
                                    Object.assign(p.style, {
                                        background: "rgba(0,0,0,0.25)",
                                        borderRadius: l / cb + "px",
                                        left: y / cb + "px",
                                        top: u / cb + "px",
                                        padding: "0 " + h / cb + "px",
                                        fontSize: .2 * b / cb + "px",
                                        color: "#888"
                                    });
                                    Object.assign(p.childNodes[0].style, {
                                        margin: h / cb + "px 0",
                                        textAlign: 1 == e || 2 == e ? "right" : "left"
                                    });
                                    Object.assign(p.childNodes[1].style, {
                                        borderRadius: l / cb + "px",
                                        margin: h / cb + "px 0",
                                        width: (n - 2 * h) / cb + "px",
                                        height: (x - 2 * h) / cb + "px",
                                        border: "1px solid #000"
                                    });
                                    Object.assign(p.childNodes[2].style, {
                                        margin: h / cb + "px 0",
                                        textAlign: 1 == e || 2 == e ? "right" : "left"
                                    });
                                    var r = ib || 1800 <= z.rate[e] ? " R" + ~~z.rate[e] : "";
                                    console.log(e, z.vc[e]);
                                    z.vc[e].EMG0 && z.vc[e].EMG0.match(/^\d{3}$/) && (r += "<img src='https://cdn.tenhou.net/ron2/3/res/group/" + z.vc[e].EMG0 + "g25.png' style='margin:0 0.1em;border-radius:0.2em;border:0.05em #000 solid;height:1.0em;float:" + (0 == e || 3 == e ? "right" : "left") + ";' />");
                                    p.childNodes[2 == e || 3 == e ? 0 : 2].innerHTML = r;
                                    p = p.childNodes[1].childNodes;
                                    p[0].onload = function() {
                                        this.parentNode.parentNode.style.display = ""
                                    }
                                    ;
                                    p[0].src = "https://cdn.tenhou.net/ron2/3/res/480x480/_" + Aa(z.O[e]).replace(/%/g, "").toUpperCase() + ".jpg";
                                    Object.assign(p[0].style, {
                                        position: "absolute",
                                        transform: "translate(-50%,-50%) translate(" + (n - 2 * h) / cb / 2 + "px," + (x - 2 * h) / cb / 2 + "px)",
                                        width: "100%"
                                    });
                                    Object.assign(p[1].style, {
                                        position: "absolute",
                                        background: "rgba(0,0,0,0.25)",
                                        width: "100%",
                                        height: "100%"
                                    });
                                    g.setTransform(1, 0, 0, 1, y, u);
                                    g.rotate(270 * e * Math.PI / 180);
                                    g.fillStyle = Pb.hc ? "#000" : "#444";
                                    tc(g, 0, .4 * -b, e & 1 ? d : k, .4 * b);
                                    a(g, Pb.hc ? .15 : .4);
                                    p = 0 == e ? "rgba(255,255,255,0.30)" : 2 == e ? "rgba(191,191,191,0.25)" : "rgba(255,255,255,0.25)";
                                    h = void 0;
                                    Pb.hc || (p = "rgba(255,255,255,0.70)",
                                    h = "rgba(0,0,0,0.50)");
                                    g.textBaseline = "middle";
                                    g.font = "normal " + .32 * b + "px sans-serif";
                                    g.textAlign = "center";
                                    m(g, z.O[e], (e & 1 ? d : k) / 2, .4 * -b / 2, p, h)
                                }
                            }
                        else
                            for (e = 0; 4 > e; ++e)
                                if (z.O[e]) {
                                    u = W.Bf + 4 * e;
                                    g.setTransform(1, 0, 0, 1, c, 0);
                                    g.fillStyle = "#000";
                                    tc(g, U[u + 0], U[u + 1], U[u + 2], U[u + 3]);
                                    a(g, .15);
                                    g.textAlign = "center";
                                    g.textBaseline = "middle";
                                    g.setTransform(1, 0, 0, 1, U[u + 0] + ~~(U[u + 2] / 2) + c, U[u + 1] + ~~(U[u + 3] / 2));
                                    g.rotate(270 * e * Math.PI / 180);
                                    b = Math.min(U[u + 2] / 2, U[u + 3] / 2);
                                    p = 0 == e || 3 == e ? "rgba(255,255,255,0.25)" : "rgba(191,191,191,0.25)";
                                    h = void 0;
                                    Pb.hc || (p = 0 == e || 3 == e ? "rgba(255,255,255,0.80)" : "rgba(191,191,191,0.80)",
                                    h = "rgba(0,0,0,0.50)");
                                    k = -.1;
                                    if (ib || 1800 <= z.rate[e])
                                        g.font = "normal " + .3 * b + "px sans-serif",
                                        m(g, "R" + ~~z.rate[e], 0, -.55 * b, p, h),
                                        k = 0;
                                    g.font = "normal " + .9 * b + "px cwTeX-Q-Kai-T,icons2,serif";
                                    m(g, fa.$a[z.tc[e]], 0, b * k, p, h);
                                    g.font = "normal " + .25 * b + "px sans-serif";
                                    m(g, z.O[e], 0, b * (.55 + k), p, h)
                                }
                        g.fillStyle = "#000";
                        g.setTransform(1, 0, 0, 1, c, 0);
                        for (e = 0; 4 > e; ++e)
                            z.O[e] && (c = e ? 0 : Q.Y[4],
                            k = U[W.La + 2 * e],
                            d = U[W.cb + 2 * e],
                            f = U[W.lc + 2 * e],
                            l = U[W.kd + 2 * e],
                            tc(g, Math.min(k, f), Math.min(d, l) + c, Math.abs(k - f) + Q.I[e], Math.abs(d - l) + Q.J[e] + Q.Y[e] - c),
                            a(g, .2))
                    }
            })
        }
    }();
    var uc = function() {
        function a() {
            this.Sb = this.w = this.y = this.x = 0
        }
        a.prototype.Zj = function() {
            this.Sb = this.w = this.y = this.x = 0
        }
        ;
        a.prototype.$j = function(m, g, e, c) {
            this.w && this.Sb ? (m < this.x ? (this.w += this.x - m,
            this.x = m) : e += m - this.x,
            this.w < e && (this.w = e),
            g < this.y ? (this.Sb += this.y - g,
            this.y = g) : c += g - this.y,
            this.Sb < c && (this.Sb = c)) : (this.x = m,
            this.y = g,
            this.w = e,
            this.Sb = c)
        }
        ;
        return a
    }(), kc;
    (function(a) {
        function m(c, b, k, d) {
            if (k && d) {
                var f = a.P;
                f.clearRect(c, b, k, d);
                k = c + k;
                d = b + d;
                for (var l, p = 0; l = U.Xa[p]; ++p) {
                    var h = l.s;
                    if (void 0 !== h && 0 !== l.K && h.ob.height) {
                        var n = l.Za.i + h.offsetX
                          , x = l.Za.l - l.Za.pb + h.offsetY;
                        if (!(k <= n || d <= x)) {
                            var u = n + h.xa;
                            if (!(u <= c)) {
                                var y = x + h.Ta;
                                if (!(y <= b)) {
                                    var r = c - n;
                                    0 < r ? n = c : r = 0;
                                    k < u && (u = k);
                                    u -= n;
                                    var w = b - x;
                                    0 < w ? x = b : w = 0;
                                    d < y && (y = d);
                                    y -= x;
                                    f.globalAlpha = l.K;
                                    f.drawImage(h.ob, h.Tb + r, h.Ub + w, u, y, n, x, u, y);
                                    h = l.Ca;
                                    l.ra && h && (f.globalAlpha = l.ra,
                                    f.drawImage(h.ob, h.Tb + r, h.Ub + w, u, y, n, x, u, y))
                                }
                            }
                        }
                    }
                }
                f.globalAlpha = 1
            }
        }
        var g = new uc;
        a.P = xa();
        var e = va(function() {
            var c = a.P;
            c.clearRect(0, 0, c.canvas.width + 1, c.canvas.height + 1);
            for (var b, k = 0; b = U.Xa[k]; ++k) {
                var d = b.s;
                if (void 0 !== d && 0 !== b.K && d.ob.height) {
                    var f = b.Za.i + d.offsetX
                      , l = b.Za.l - b.Za.pb + d.offsetY;
                    c.globalAlpha = b.K;
                    c.drawImage(d.ob, d.Tb, d.Ub, d.xa, d.Ta, f, l, d.xa, d.Ta);
                    var p = b.Ca;
                    b.ra && p && (c.globalAlpha = b.ra,
                    c.drawImage(p.ob, p.Tb, p.Ub, d.xa, d.Ta, f, l, d.xa, d.Ta))
                }
            }
            a.Qb = m
        }, 1);
        a.Yc = function() {
            (a.Qb = e)()
        }
        ;
        a.gb = function() {
            g.Zj();
            a.Qb = function(c, b, k, d) {
                g.$j(c, b, k, d)
            }
        }
        ;
        a.hb = function() {
            m(g.x, g.y, g.w, g.Sb);
            a.Qb = m
        }
        ;
        a.Qb = m
    }
    )(kc || (kc = {}));
    var pc = function() {
        function a(c, b) {
            for (var k = pc.P, d = [], f = 2; f < arguments.length; f += 5) {
                k.font = arguments[f];
                var l = k.measureText(arguments[f + 3]).width;
                d.push(l);
                c -= l / 2
            }
            for (f = 2; f < arguments.length; f += 5)
                k.font = arguments[f],
                k.fillStyle = m[arguments[f + 1]],
                (l = m[arguments[f + 2]]) ? (k.shadowBlur = 2 * cb,
                k.shadowColor = l,
                k.shadowOffsetX = cb,
                k.shadowOffsetY = cb) : (k.shadowBlur = 0,
                k.shadowColor = "#000",
                k.shadowOffsetX = 0,
                k.shadowOffsetY = 0),
                l = d.shift(),
                k.fillText(arguments[f + 3], c + l / 2, b + arguments[f + 4]),
                c += l
        }
        var m = "#FFF #666 #000 #00F #F00 #AAA".split(" ")
          , g = 0
          , e = 0;
        return {
            P: ya("canvas", za, "", {}, {
                position: "absolute",
                display: "none"
            }).getContext("2d"),
            na: function(c, b) {
                void 0 !== c && (g = c);
                void 0 !== b && (e = b);
                c = pc.P;
                b = c.canvas.width;
                var k = c.canvas.height
                  , d = Math.min(.18 * b, .18 * k);
                if (1 == hc.a || 3 == hc.a)
                    d *= .9;
                c.save();
                c.setTransform(1, 0, 0, 1, 0, 0);
                c.clearRect(0, 0, b + 1, k + 1);
                tc(c, 1, 1, b - 2, k - 2);
                Pb.hc ? (c.fillStyle = "#222",
                c.fill()) : (c.globalAlpha = .75,
                c.fillStyle = "#222",
                c.fill(),
                c.globalAlpha = 1);
                c.strokeStyle = "#111";
                c.lineWidth = 1;
                c.stroke();
                var f = e
                  , l = .24 * d
                  , p = .02 * d
                  , h = pc.P
                  , n = h.canvas.width
                  , x = h.canvas.height
                  , u = h.createLinearGradient(0, 0, f & 1 ? 0 : n, f & 1 ? x : 0);
                u.addColorStop(0, "rgba(0,127,0,0)");
                u.addColorStop(.12, "rgba(0,127,0,255)");
                u.addColorStop(.88, "rgba(0,127,0,255)");
                u.addColorStop(1, "rgba(0,127,0,0)");
                h.fillStyle = u;
                switch (f) {
                case 0:
                    h.fillRect(0, x - l - p, n, l);
                    break;
                case 1:
                    h.fillRect(n - l - p, 0, l, x);
                    break;
                case 2:
                    h.fillRect(0, p, n, l);
                    break;
                case 3:
                    h.fillRect(p, 0, l, x)
                }
                f = "normal " + 1.2 * d + "px cwTeX-Q-Kai-T,icons2,serif";
                l = "normal " + .8 * d + "px cwTeX-Q-Kai-T,icons2,serif";
                p = .15 * d;
                c.textAlign = "center";
                c.textBaseline = "middle";
                c.setTransform(1, 0, 0, 1, b / 2, k / 2);
                h = [[0, k / 2 - .7 * d], [0, b / 2 - .7 * d], [0, k / 2 - .7 * d], [0, b / 2 - .7 * d]];
                if (3 != g)
                    if (0 == g)
                        for (n = 0; 4 > n; ++n)
                            h[n].push(f, (4 + n - z.Fa) % 4 ? 1 : 0, -1, z.Sc[n] + " ", 0, f, z.connected & 1 << n ? 0 : 4, 2, void 0 === z.Oa[n] ? "-" : z.Oa[n] / 100, 0, l, 1, -1, "00", p);
                    else if (h[0].push(f, 0, 2, z.Sc[0] + " ", 0, f, 0, 2, void 0 === z.Oa[0] ? "" : z.Oa[0] / 100, 0),
                    h[1].push(f, 0, 2, void 0 === z.Oa[1] ? "" : pa((z.Oa[1] - z.Oa[0]) / 100), 0),
                    h[2].push(f, 0, 2, void 0 === z.Oa[2] ? "" : pa((z.Oa[2] - z.Oa[0]) / 100), 0),
                    h[3].push(f, 0, 2, void 0 === z.Oa[3] ? "" : pa((z.Oa[3] - z.Oa[0]) / 100), 0),
                    t.Yg())
                        for (n = 0; 4 > n; ++n)
                            h[n].push(f, 0, 2, " " + z.ig[n], 0);
                    else
                        h[0].push(l, 1, -1, "00", p);
                z.O[0] && a.apply(this, h[0]);
                c.rotate(270 * Math.PI / 180);
                z.O[1] && a.apply(this, h[1]);
                c.rotate(270 * Math.PI / 180);
                z.O[2] && a.apply(this, h[2]);
                c.rotate(270 * Math.PI / 180);
                z.O[3] && a.apply(this, h[3]);
                3 == g ? (c.setTransform(1, 0, 0, 1, b / 2, k / 2),
                c.fillStyle = "#FFF",
                a(0, 0, f, 0, 2, "天鳳", 0)) : 0 == g ? (c.setTransform(1, 0, 0, 1, b / 2, k / 2 - .75 * d / 2),
                c.fillStyle = "#FFF",
                f = "normal " + 1.7 * d + "px cwTeX-Q-Kai-T,icons2,serif",
                l = z.ha[0],
                a(0, 0, f, 0, ~~(l / 4) & 1 ? 4 : 3, "東南西北".substr(~~(l / 4), 1), 0, f, 0, l % 4 == (z.H & t.c ? 2 : 3) ? 4 : 2, l % 4 + 1, 0, f, 1, -1, "局", 0),
                n = (b - 2.8 * d) / 2,
                c.beginPath(),
                c.moveTo(-n, .75 * +d),
                c.lineTo(+n, .75 * +d),
                f = c.createLinearGradient(-n, 0, +n, 0),
                f.addColorStop("0.0", "rgba(15,15,15,0)"),
                f.addColorStop("0.5", "rgba(15,15,15,1)"),
                f.addColorStop("1.0", "rgba(15,15,15,0)"),
                c.strokeStyle = f,
                c.lineWidth = 1,
                c.stroke(),
                c.setTransform(1, 0, 0, 1, b / 2, k / 2 + 1.7 * d / 2 - .75 * d / 2 + .3 * d),
                f = "normal " + .75 * d + "px cwTeX-Q-Kai-T,icons2,serif",
                l = "normal " + .5 * d + "px cwTeX-Q-Kai-T,icons2,serif",
                p = .12 * d,
                b = hc.rg(e),
                a(0, 0, f, 0, b < (z.H & t.c ? 6 : 8) ? 4 : 2, b + " ", 0, l, 5, -1, "", p, f, 0, 2, z.ha[1], 0, l, 5, -1, "", p, f, 0, 2, z.ha[2], 0)) : (f = "normal bold " + .75 * d + "px sans-serif",
                c.setTransform(1, 0, 0, 1, b / 2, k / 2),
                c.fillStyle = "#FFF",
                a(0, 0, f, 0, 2, 4 == z.a ? "天鳳" : t.Aa(z.H, ib), 0));
                c.restore()
            },
            Na: function() {}
        }
    }();
    (function() {
        function a(e, c) {
            pc.na(c || 1);
            g && (e = g,
            delete pb()[e],
            g = void 0)
        }
        function m(e) {
            a(e, 2);
            g = qb(function() {
                g = void 0;
                pc.na(0)
            }, 2E3)
        }
        var g = void 0;
        Ga(pc.P.canvas, {
            touchstart: function() {
                pc.na(1)
            },
            touchend: m,
            touchcancel: function() {
                pc.na(0)
            },
            mouseover: a,
            mouseout: m
        })
    }
    )();
    var lc;
    (lc || (lc = {})).oa = !1;
    Da(lc, function() {
        function a(d) {
            var f = lc.P;
            0 < b && 0 < k && f.clearRect(e, c, b, k);
            var l = e = c = b = k = 0, p;
            for (p in m) {
                var h = m[p];
                if (0 > h.t)
                    h.t += d;
                else if (h.t < h.Ga) {
                    var n = h.s
                      , x = ~~(h.qb + (h.ub - h.qb) * h.t / h.Ga)
                      , u = ~~(h.Ed + (h.vb - h.Ed) * h.t / h.Ga)
                      , y = n.xa
                      , r = n.Ta;
                    n.ob.height && (f.globalAlpha = h.K,
                    f.drawImage(n.ob, n.Tb, n.Ub, y, r, x, u, y, r));
                    h.t += d;
                    b && k ? (x < e ? (b += e - x,
                    e = x) : y += x - e,
                    b < y && (b = y),
                    u < c ? (k += c - u,
                    c = u) : r += u - c,
                    k < r && (k = r)) : (e = x,
                    c = u,
                    b = y,
                    k = r)
                } else
                    h.Qc && h.Qc.Da(h.eg),
                    delete m[p];
                ++l
            }
            f.globalAlpha = 1;
            l || (wc(O.bg, 0, 0),
            g && g.length && (g.shift()(),
            ++l));
            return l
        }
        var m, g, e, c, b, k;
        return {
            P: xa(),
            Ea: function() {
                g = [];
                m = {};
                e = c = b = k = 0;
                var d = lc.P;
                d.clearRect(0, 0, d.canvas.width + 1, d.canvas.height + 1)
            },
            dc: function(d) {
                lc.oa ? d() : (pb().fg = a,
                g.push(d))
            },
            vd: function(d, f, l) {
                if (lc.oa)
                    return f.Da(l),
                    0;
                pb().fg = a;
                f = m[ka++] = {
                    t: -d,
                    Ga: 0,
                    Qc: f,
                    eg: l
                };
                return d + f.Ga
            },
            Ra: function(d, f, l, p, h, n, x, u, y, r) {
                if (lc.oa)
                    return y && y.Da(r),
                    0;
                pb().fg = a;
                x = m[ka++] = {
                    t: -d,
                    K: u,
                    s: x,
                    qb: f,
                    Ed: l,
                    ub: p,
                    vb: h
                };
                0 < n ? (f = p - f,
                l = h - l,
                x.Ga = ~~(Math.sqrt(f * f + l * l) / (Q.I[0] * n))) : x.Ga = -n;
                y && (x.Qc = y,
                x.eg = r);
                return d + x.Ga
            },
            tb: function() {
                for (; a(1E4); )
                    ;
            }
        }
    }());
    var nc = function() {
        for (var a = [], m = 0; 4 > m; ++m)
            a[m] = ya("div", za, "nosel tbl ts0 rot" + la(3, 270 * m % 360), {}, {
                fontSize: "80%",
                pointerEvents: "none",
                textAlign: "right",
                display: "none"
            });
        var g = [1, 2, 3, 4, 5, 6, 7, 8, 0, 10, 11, 12, 13, 14, 15, 16, 17, 9, 19, 20, 21, 22, 23, 24, 25, 26, 18, 28, 29, 30, 27, 32, 33, 31];
        return {
            Ea: function() {
                for (var e = 0; 4 > e; ++e)
                    a[e].style.display = "none"
            },
            ad: function(e) {
                var c = a[e]
                  , b = q[16 | e].length;
                if (b) {
                    for (var k = b, d = [], f = 0; f < q[16 | e].length; ++f) {
                        var l = q[16 | e][f];
                        16 == l && (k += 1);
                        d[l] = 1
                    }
                    d[0] && d[1] && d[2] && d[3] && (k += 4);
                    d[16] && d[17] && d[18] && d[19] && (k += 4);
                    d[32] && d[33] && d[34] && d[35] && (k += 4);
                    d[120] && d[121] && d[122] && d[123] && (k += 4);
                    for (f = 5; f < z.ha.length; ++f)
                        e = d,
                        l = g[z.ha[f] >> 2],
                        t.Kc(z.H) ? 1 == l ? l = 4 : 5 == l && (l = 8) : z.H & t.c && 1 == l && (l = 8),
                        l *= 4,
                        k += ~~e[l] + ~~e[l + 1] + ~~e[l + 2] + ~~e[l + 3];
                    d = "";
                    t.Kc(z.H) && (d += k + "<span style='font-size:50%;'>+</span><br>");
                    c.style.display = "";
                    c.innerHTML = "<div class=tbc style='vertical-align:bottom;padding:0 0.1em;'>" + (d + ("<span style='font-size:60%;'>x</span>" + b + "<br></div>"))
                } else
                    c.style.display = "none"
            },
            aa: function() {
                for (var e = 0; 4 > e; ++e) {
                    var c = a[e].style;
                    c.width = c.height = ~~(Math.min(Q.I[e], Q.J[e]) / cb) + "px";
                    var b = -(0 == e ? Q.I[0] : Q.zc[e]);
                    c.left = ~~((U[W.lc + 2 * e] + -(1 == e ? Q.J[1] : Q.yc[e])) / cb) + kc.P.canvas.offsetLeft + "px";
                    c.top = ~~((U[W.kd + 2 * e] + b) / cb) + "px"
                }
            }
        }
    }()
      , zc = function() {
        function a(e) {
            return "<span style='pointer-events:none;vertical-align:middle;'>" + e + "</span>"
        }
        function m() {
            for (var e in L)
                if (!(~e & 262144) && (L[e].parentNode.style.visibility = g[e] ? "" : "hidden",
                g[e] && 2 === g[e].length)) {
                    var c = g[e][0]
                      , b = g[e][1];
                    ic.fb(L[e], "", 4, .8, c, b);
                    g[2098693] = g[e] = {
                        tag: "N",
                        type: c >> 2 == b >> 2 ? 1 : 3,
                        hai0: c,
                        hai1: b
                    }
                }
        }
        var g = {};
        return {
            ck: function(e, c) {
                if (1 == z.a || 4 == z.a) {
                    var b = 0;
                    g = {};
                    e & ba.ca.ne && (g[2359814] = {
                        tag: "REACH"
                    });
                    e & ba.ca.Nb && (g[2359816] = {
                        tag: "N",
                        type: 7
                    });
                    e & ba.ca.ag && (g[2359815] = {
                        tag: "N",
                        type: 9
                    });
                    0 < hc.rg(0) && 4 > hc.Ac - q[16].length - q[17].length - q[18].length - q[19].length && (e |= ba.ca.Zb);
                    var k = [];
                    if (e & ba.ca.Zb)
                        for (var d, f = (z.H & t.c && ~z.ka[0] & t.Bb.md ? 16 : 17) - 1; d = U[2048 | f]; --f)
                            if (void 0 !== d.Jb.Rc) {
                                for (var l = 0; l < q[32].length && q[32][l] != d.Jb.Rc; ++l)
                                    ;
                                l < q[32].length && k.push({
                                    tag: "N",
                                    type: 5,
                                    hai: q[32][l]
                                })
                            }
                    if (e & ba.ca.Zb) {
                        d = q[48];
                        var p = q[80];
                        if (q[64])
                            if (l = c >> 2,
                            z.ka[0] & t.Bb.gj) {
                                f = l;
                                for (var h = 0, n = 0; 34 > n; ++n)
                                    h += d[n];
                                2 != h && 5 != h && 8 != h && 11 != h && 14 != h || --d[f];
                                if (108 > f && 3 == d[f]) {
                                    var x = aa.uc(d, p);
                                    p = !0;
                                    n = f;
                                    for (var u = 0; p && u < x.length; ++u) {
                                        var y = x[u];
                                        ++d[y];
                                        var r = !1
                                          , w = n % 9;
                                        !r && 0 <= w && 6 >= w && 0 < d[n + 1] && 0 < d[n + 2] && (--d[n + 0],
                                        --d[n + 1],
                                        --d[n + 2],
                                        r = aa.qc(d),
                                        ++d[n + 0],
                                        ++d[n + 1],
                                        ++d[n + 2]);
                                        !r && 1 <= w && 7 >= w && 0 < d[n - 1] && 0 < d[n + 1] && (--d[n - 1],
                                        --d[n + 0],
                                        --d[n + 1],
                                        r = aa.qc(d),
                                        ++d[n - 1],
                                        ++d[n + 0],
                                        ++d[n + 1]);
                                        !r && 2 <= w && 8 >= w && 0 < d[n - 2] && 0 < d[n - 1] && (--d[n - 2],
                                        --d[n - 1],
                                        --d[n + 0],
                                        r = aa.qc(d),
                                        ++d[n - 2],
                                        ++d[n - 1],
                                        ++d[n + 0]);
                                        r && (p = !1);
                                        --d[y]
                                    }
                                } else
                                    p = 3 == d[f];
                                2 != h && 5 != h && 8 != h && 11 != h && 14 != h || ++d[f];
                                p && k.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * l
                                })
                            } else
                                f = "" + q[64],
                                4 == d[l] && (d[l] -= 4,
                                "" + aa.uc(d, p) == f && k.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * l
                                }),
                                d[l] += 4);
                        else
                            for (l = 0; 34 > l; ++l)
                                4 > d[l] || k.push({
                                    tag: "N",
                                    type: 4,
                                    hai: 4 * l
                                })
                    }
                    k.length || (e &= ~ba.ca.Zb);
                    k.length && (g[2098693] = g[401412] = k[0],
                    ic.fb(L[401412], a(J(F.ld)) + " ", 4, .7, k[0].hai),
                    k.shift(),
                    ++b);
                    k.length && (g[2098693] = g[401416] = k[0],
                    ic.fb(L[401416], a(J(F.ld)) + " ", 4, .7, k[0].hai),
                    k.shift(),
                    ++b);
                    k.length && (g[2098693] = g[401417] = k[0],
                    ic.fb(L[401417], a(J(F.ld)) + " ", 4, .7, k[0].hai),
                    k.shift(),
                    ++b);
                    if (e & ba.ca.ke)
                        if (t.Kc(z.H) && !q[64]) {
                            d = [];
                            for (f = 0; f < q[32].length; ++f)
                                if (c = q[32][f],
                                l = c >> 2,
                                0 == l || 4 == l || 8 == l || 30 == l)
                                    d[c] = {
                                        tag: "N",
                                        type: 10,
                                        hai: c
                                    };
                            c = [401414, 401415, 401418, 401419, 401417];
                            if (k = d[120] || d[121] || d[122] || d[123])
                                g[2098693] = g[c[0]] = k,
                                ic.fb(L[c[0]], a(J(F.Lc)) + " ", 4, .7, k.hai),
                                c.shift(),
                                ++b;
                            if (k = d[0] || d[1] || d[2] || d[3])
                                g[2098693] = g[c[0]] = k,
                                ic.fb(L[c[0]], a(J(F.Lc)) + " ", 4, .7, k.hai),
                                c.shift(),
                                ++b;
                            if (k = d[16])
                                g[2098693] = g[c[0]] = k,
                                ic.fb(L[c[0]], a(J(F.Lc)) + " ", 4, .7, k.hai),
                                c.shift(),
                                ++b;
                            if (k = d[17] || d[18] || d[19])
                                g[2098693] = g[c[0]] = k,
                                ic.fb(L[c[0]], a(J(F.Lc)) + " ", 4, .7, k.hai),
                                c.shift(),
                                ++b;
                            if (k = d[32] || d[33] || d[34] || d[35])
                                g[2098693] = g[c[0]] = k,
                                ic.fb(L[c[0]], a(J(F.Lc)) + " ", 4, .7, k.hai),
                                c.shift(),
                                ++b
                        } else
                            d = {
                                tag: "N",
                                type: 10
                            },
                            q[64] && (d.hai = c),
                            g[2098693] = g[401414] = d,
                            L[401414].innerHTML = J(F.wf),
                            ++b;
                    m();
                    L.ta(512);
                    L[2098693].parentNode.style.visibility = 1 == b ? "" : "hidden";
                    L[3670533].parentNode.style.visibility = 1 < b ? "" : "hidden";
                    1 == b && (L[2098693].innerHTML = e & ba.ca.ke ? J(F.wf) : e & ba.ca.Zb ? J(F.vf) : "?");
                    e && Xb(O.Fb, 0, 0);
                    return e
                }
            },
            ak: function(e, c) {
                if (1 == z.a || 4 == z.a) {
                    var b = ~~(c / 4 / 9);
                    c = ~~(c / 4) % 9;
                    for (var k = {}, d = 0; d < q[32].length; ++d) {
                        var f = q[32][d]
                          , l = f >> 2;
                        if (3 > b && 2 <= c && l == 9 * b + c - 2 || 3 > b && 1 <= c && l == 9 * b + c - 1 || l == 9 * b + c || 3 > b && 7 >= c && l == 9 * b + c + 1 || 3 > b && 6 >= c && l == 9 * b + c + 2)
                            l |= hc.zd(f) << 8,
                            k[l] ? k[l].push(f) : k[l] = [f]
                    }
                    d = 0;
                    g = {
                        2360326: {
                            tag: "N"
                        }
                    };
                    e & ba.ca.bc && (g[2360328] = {
                        tag: "N",
                        type: 6
                    });
                    f = k[0 | 9 * b + c] || [];
                    l = k[256 | 9 * b + c] || [];
                    e & ba.ca.Zb && 3 == f.length + l.length && (ic.fb(L[409604], a(J(F.ld)) + " ", 4, .8, (l.length ? l : f)[0]),
                    g[2098693] = g[409604] = {
                        tag: "N",
                        type: 2
                    },
                    ++d);
                    e & ba.ca.Mc && (1 == l.length && 2 == f.length ? (g[409606] = [f[0], f[1]],
                    g[409607] = [l[0], f[0]],
                    d += 2) : 2 <= f.length ? (g[409607] = [f[0], f[1]],
                    ++d) : 1 == l.length && 1 == f.length && (g[409607] = [l[0], f[0]],
                    ++d));
                    if (e & ba.ca.Fc)
                        for (var p = 0; 3 > p; ++p) {
                            var h = (p & 1) << 8
                              , n = (p & 2) << 7;
                            (f = k[h | 9 * b + c - 2]) && (l = k[n | 9 * b + c - 1]) && (g[p ? 409614 : 409610] = [f[0], l[0]],
                            ++d);
                            (f = k[h | 9 * b + c - 1]) && (l = k[n | 9 * b + c + 1]) && (g[p ? 409613 : 409609] = [f[0], l[0]],
                            ++d);
                            (f = k[h | 9 * b + c + 1]) && (l = k[n | 9 * b + c + 2]) && (g[p ? 409612 : 409608] = [f[0], l[0]],
                            ++d)
                        }
                    g[409607] && !g[409606] && (g[409606] = g[409607],
                    delete g[409607]);
                    g[409614] && !g[409610] && (g[409610] = g[409614],
                    delete g[409614]);
                    g[409613] && !g[409609] && (g[409609] = g[409613],
                    delete g[409613]);
                    g[409612] && !g[409608] && (g[409608] = g[409612],
                    delete g[409612]);
                    m();
                    L.ta(1024);
                    rc.o(0, L[2360326]);
                    L[2098693].parentNode.style.visibility = 1 == d ? "" : "hidden";
                    L[3671045].parentNode.style.visibility = 1 < d ? "" : "hidden";
                    1 == d && (L[2098693].innerHTML = e & ba.ca.Fc ? J(F.Ji) : e & ba.ca.Mc ? J(F.Ki) : e & ba.ca.Zb ? J(F.vf) : "?");
                    e && Xb(O.Fb, 0, 0)
                }
            },
            bk: function(e) {
                if (1 == z.a || 4 == z.a)
                    g = {
                        2360326: {
                            tag: "N"
                        }
                    },
                    e & ba.ca.bc && (g[2360328] = {
                        tag: "N",
                        type: 6
                    }),
                    m(),
                    L.ta(1024),
                    rc.o(0, L[2360326]),
                    L[2098693].parentNode.style.visibility = L[3671045].parentNode.style.visibility = "hidden",
                    e && Xb(O.Fb, 0, 0)
            },
            dg: function(e) {
                if (4 == z.a)
                    xc(),
                    P.xg(g[e]);
                else if (g[e]) {
                    var c = rc.wb();
                    xc();
                    if (!c)
                        return;
                    yc.R(g[e])
                }
                g = {}
            },
            mk: function() {
                if (1 == z.a) {
                    for (var e = [], c = 0; c < q[32].length; ++c)
                        U[1024 | c].la & X.Eb && e.push(q[32][c]);
                    if (!(2 > e.length)) {
                        var b = [g[409606], g[409610], g[409609], g[409608]];
                        for (c = 0; c < b.length && (!b[c] || !(b[c].hai0 >> 2 == e[0] >> 2 && b[c].hai1 >> 2 == e[1] >> 2 || b[c].hai0 >> 2 == e[1] >> 2 && b[c].hai1 >> 2 == e[0] >> 2)); ++c)
                            ;
                        if (c < b.length)
                            c = rc.wb(),
                            xc(),
                            c && yc.R({
                                tag: "N",
                                type: e[0] >> 2 == e[1] >> 2 ? 1 : 3,
                                hai0: e[0],
                                hai1: e[1]
                            });
                        else
                            for (c = 0; c < q[32].length; ++c)
                                U[1024 | c].la & X.Eb && qc.zb(c, ~X.Eb, 0)
                    }
                }
            }
        }
    }();
    function Ac(a) {
        var m = ~~a.m
          , g = m & 3;
        if (m & 4) {
            a[2] = 3;
            var e = (m & 64512) >> 10;
            var c = e % 3;
            e = ~~(e / 3);
            e = 4 * (9 * ~~(e / 7) + e % 7);
            e = [e + ((m & 24) >> 3), e + 4 + ((m & 96) >> 5), e + 8 + ((m & 384) >> 7)];
            e.splice(0, 0, e.splice(c, 1)[0])
        } else
            m & 24 ? (a[2] = m & 16 ? 5 : 1,
            a[4] = (m & 96) >> 5,
            e = (m & 65024) >> 9,
            c = e % 3,
            e = 4 * ~~(e / 3),
            e = [e, e + 1, e + 2, e + 3],
            a[4] = e.splice(a[4], 1)[0],
            e.splice(g ^ 3, 0, e.splice(c, 1)[0]),
            m & 16 && (e = [a[4]])) : m & 32 ? (a[2] = 10,
            e = [(m & 65280) >> 8]) : 0 == g ? (a[2] = 4,
            e = (m & 65280) >> 8 & -4,
            e = [e + 2, e, e + 1, e + 3]) : (a[2] = 2,
            m = (m & 65280) >> 8,
            e = m & -4,
            e = [e, e + 1, e + 2, e + 3],
            e.splice(m & 3, 1),
            e.splice(1 == g ? 3 : g ^ 3, 0, m));
        a[3] = g;
        a[0] = e
    }
    ;var L = function() {
        function a(c, b, k) {
            var d = L[c];
            k ? d.innerHTML = "<span class=nobr style='pointer-events:none;" + (L.u[c] ? "" : "color:#888;") + "'>" + (L.u[c] ? "" : "") + b + "</span>" : (d.innerHTML = "<span style='pointer-events:none;" + (L.u[c] ? "" : "color:#888;") + "'>" + b + "<br>" + (L.u[c] ? "" : "") + "</span>",
            d.parentNode.style.fontSize = "85%")
        }
        function m(c) {
            c && (L.u[c] = !L.u[c]);
            var b = D[B.Ia] & 1;
            a(1183749, J(F.zi), b);
            a(1183750, J(F.wi), b);
            a(1183751, J(F.yi), b);
            a(1183752, J(F.xi), b);
            a(1183753, J(F.Ai), b);
            1183750 == c && L.u[1183750] && (q.Xc(0),
            q.Wc())
        }
        function g(c) {
            c && (L.u[c] = !L.u[c]);
            a(1277961, J(F.ri));
            a(1277957, J(F.si));
            a(1277960, J(F.ti));
            a(1212429, J(F.ui));
            D[B.Dc] = D[B.Dc] & ~(B.Xd | B.Yd | B.Zd | B.Ec) | (L.u[1277961] ? 0 : B.Xd) | (L.u[1277957] ? 0 : B.Yd) | (L.u[1277960] ? 0 : B.Zd) | (L.u[1212429] ? B.Ec : 0);
            1212429 == c && (hc.a = D[B.Dc] & B.Ec ? 3 : ~~D[B.eb],
            0 == hc.a && D[B.Ia] && (hc.a = 1),
            ec());
            c && (3 == z.a && Yb.ec(0),
            2 == z.a && Zb.Cd())
        }
        function e(c) {
            for (var b = 1; b < arguments.length; ++b)
                arguments[b].parentNode.style.visibility = c
        }
        return {
            b: ya("div", bc, "nosel", {}, {
                position: "absolute",
                display: "none",
                color: "#FFF",
                fontFamily: "icons2,sans-serif",
                fontSize: "140%"
            }),
            a: 0,
            u: {},
            Ea: function() {
                for (var c = [2360326, "&times;", 2098693, "", 3670533, " " + J(F.rf), 3671045, " " + J(F.rf), 1572868, "", 3678213, "&times;", 3686405, "&times;", 1675268, "&times;", 2359816, J(F.oi), 2360328, J(F.ni), 2359814, J(F.mi), 401414, "", 401415, "", 401418, "", 401419, "", 2359815, J(F.pi), 401412, "", 401416, "", 401417, "", 409610, "", 409609, "", 409608, "", 409614, "", 409613, "", 409612, "", 409606, "", 409607, "", 409604, "", 1574918, "", 1574917, "", 425995, "?", 495623, J(F.li), 1183749, "", 1183750, "", 1183751, "", 1183752, "", 1183753, "", 1277961, "", 1277957, "", 1277960, "", 1212429, "", 1802246, J(F.Bi) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>", 1736714, J(F.Ci) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>", 1736718, J(F.Di) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>", 1736716, J(F.ki) + " <span style='font-size:25%;vertical-align:50%;'>▼</span>"], b = 0; b < c.length; b += 2) {
                    var k = c[b]
                      , d = ya("div", L.b, "tbl", {
                        draggable: "false"
                    }, {
                        position: "absolute"
                    });
                    L[k] = ya("div", d, "tbc" + (k & 2097152 ? " bblink" : ""), {
                        id: "m" + k,
                        innerHTML: c[b + 1]
                    }, {
                        textAlign: "center",
                        verticalAlign: "middle",
                        pointerEvents: "none"
                    });
                    k & 262144 && (d.style.display = "none");
                    k & 524288 && (L[k].style.borderRadius = "0.6em")
                }
                c = D[B.Dc];
                L.u[1277961] = !(c & B.Xd);
                L.u[1277957] = !(c & B.Yd);
                L.u[1277960] = !(c & B.Zd);
                L.u[1212429] = !!(c & B.Ec);
                L[1572868].classList.add("cblink")
            },
            ta: function(c) {
                L.a = 126976 == c ? L.a & 3840 : c & 126976 ? c | L.a & 3840 : c | L.a & 102400;
                c = L.a & 126976 ? L.a & 126976 : L.a & 3840;
                256 == c && 3 == z.a && (c = 2048);
                for (var b in L)
                    if (1572868 != b) {
                        var k = L[b];
                        k != L.b && k.tagName && (k.parentNode != L.b && (k = k.parentNode),
                        k.style.display = !c || ~b & c ? "none" : "")
                    }
                L[1572868].parentNode.style.display = L.a & 126976 ? "none" : "";
                b = D[B.Ia] & 1;
                if (4096 == c || b)
                    m(),
                    e(1 == z.a && ~z.H & t.h ? "" : "hidden", L[495623]),
                    e("hidden", L[1183751]);
                32768 == c || 65536 == c ? (e(!Ra && Pb.Vc ? "hidden" : "", L[495623]),
                g()) : 256 == c && e("hidden", L[2360326]);
                Bc.jc && Bc.jc();
                if (1 == z.a && b) {
                    L[1572868].parentNode.style.display = "none";
                    c = [L[495623], L[1183749], L[1183750], L[1183752], L[1183753]];
                    for (b = 0; b < c.length; ++b)
                        c[b].parentNode.style.display = "";
                    m()
                }
            },
            aa: function() {
                za.style.left = "";
                var c = ~~(U[W.ud] / cb)
                  , b = ~~(U[W.cb] / cb)
                  , k = ~~((U[W.ud] - U[W.xe] - Q.I[1]) / 4 / cb)
                  , d = ~~((U[W.cb] - U[W.le]) / 2.5 / cb);
                d = Math.max(d, ~~((Q.J[4] + Q.Y[4]) / cb));
                var f = 0;
                3 == z.a && (bc.offsetHeight < bc.offsetWidth && .5 * ~~(.5 * k) <= bc.offsetWidth - ~~(Q.lb / cb) ? (f = 1,
                c = ~~(Q.lb / cb) + ~~(.5 * k)) : bc.offsetWidth <= bc.offsetHeight && d <= bc.offsetHeight - ~~(Q.Ab / cb) && (f = 2,
                b = ~~(Q.Ab / cb) + d));
                var l = D[B.Ia] & 1, p;
                for (p in L) {
                    var h = L[p];
                    if (h != L.b && h.parentNode) {
                        var n = h.style;
                        h.parentNode.parentNode == L.b && (n = h.parentNode.style);
                        var x = ((p & 3) >> 0) + 1
                          , u = (p & 12) >> 2;
                        l && 2360326 == p && (x = 1);
                        n.left = c - k * x + "px";
                        n.top = b - d * u + "px";
                        n.width = k + "px";
                        n.height = d + "px";
                        n.fontSize = "";
                        h.style.border = "solid 1px " + (p & 131072 ? "#222" : "rgba(0,0,0,0.25)");
                        p & 131072 ? (h.classList.remove("ts0"),
                        h.classList.add("bgb")) : (h.classList.remove("bgb"),
                        h.classList.add("ts0"))
                    }
                }
                if (1 == z.a) {
                    if (f = [L[1183749], L[1183753], L[1183752], L[1183751], L[1183750], null, L[495623]],
                    l)
                        for (k = ~~(Q.lb / cb / 8),
                        d = ~~(Q.J[1] / cb),
                        c = (U[W.La] + 13 * Q.I[4]) / cb + kc.P.canvas.offsetLeft,
                        b = za.offsetHeight - d,
                        l = 0; l < f.length; ++l)
                            f[l] && (n = f[l].parentNode.style,
                            n.left = c - k * (l + 1) + "px",
                            n.top = b + "px",
                            n.width = k + "px",
                            n.height = d + "px",
                            n.fontSize = "50%",
                            f[l].classList.remove("bgb"),
                            f[l].classList.add("ts0"),
                            f[l].style.borderStyle = "none")
                } else if (3 == z.a) {
                    if (1 == f || 2 == f)
                        L[1572868].style.borderColor = L[1574918].style.borderColor = L[1574917].style.borderColor = 3 == z.a ? "#444" : "rgba(0,0,0,0.25)";
                    2 == f ? L[1572868].parentNode.style.top = L[1574918].parentNode.style.top = L[1574917].parentNode.style.top = b - d + "px" : 1 == f ? (l = ~~(1.5 * d),
                    k = ~~(.5 * k),
                    bc.offsetWidth < c && (c = ~~bc.offsetWidth,
                    k = bc.offsetWidth - ~~(Q.lb / cb)),
                    za.style.left = "-" + ~~(k / 2) + "px",
                    n = L[1574918].parentNode.style,
                    n.left = c - k + "px",
                    n.top = b - d - 2 * l + "px",
                    n.width = k + "px",
                    n.height = l + "px",
                    n = L[1574917].parentNode.style,
                    n.left = c - k + "px",
                    n.top = b - d - l + "px",
                    n.width = k + "px",
                    n.height = l + "px",
                    n = L[1572868].parentNode.style,
                    n.left = c - k + "px",
                    n.top = b - d - 0 * l + "px",
                    n.width = k + "px",
                    n.height = d + "px") : (n = L[1574918].parentNode.style,
                    n.left = c - 4 * k + "px",
                    n.top = b - d - 2 * d + "px",
                    n.width = k / 2 + "px",
                    n.height = 2 * d + "px",
                    n = L[1574917].parentNode.style,
                    n.left = c - .5 * k + "px",
                    n.top = b - d - 2 * d + "px",
                    n.width = k / 2 + "px",
                    n.height = 2 * d + "px")
                }
                L.b.style.left = za.offsetLeft + "px";
                L.b.style.top = za.offsetTop + "px"
            },
            Na: function(c, b) {
                switch (c) {
                case 2360326:
                    rc.hg();
                    break;
                case 409606:
                case 409607:
                case 409604:
                case 409610:
                case 409609:
                case 409608:
                case 409614:
                case 409613:
                case 409612:
                case 401412:
                case 401416:
                case 401417:
                case 401414:
                case 401415:
                case 401418:
                case 401419:
                case 2359815:
                case 2360328:
                case 2359816:
                case 2359814:
                case 2098693:
                    zc.dg(c);
                    break;
                case 3670533:
                    L.ta(8192);
                    break;
                case 3671045:
                    L.ta(16384);
                    break;
                case 1572868:
                    4 == z.a ? P.Se(1) : L.ta(3 == z.a ? 32768 : 2 == z.a ? 65536 : 4096);
                    break;
                case 3678213:
                case 3686405:
                case 1675268:
                    L.ta(126976);
                    break;
                case 1574917:
                    Yb.ec(1);
                    break;
                case 1574918:
                    Yb.ec(-1);
                    break;
                case 1802246:
                    L.ta(126976);
                    c = "";
                    for (b = 0; 4 > b; ++b)
                        z.O[b] && (c += "<div class='A" + (0 == b ? " _selected_" : "") + "' id='#tw-" + b + "'><span class=dan" + ~~z.tc[b] + ">" + fa.$a[~~z.tc[b]] + "</span>" + (ib || 1800 <= z.rate[b] ? "R" + ~~z.rate[b] : "") + "　" + z.O[b] + "</div>");
                    !1 === L.u[14] && (c += "<div class=A id='#tw-4'>(" + J(F.sf) + " ON)</div>");
                    !0 === L.u[14] && (c += "<div class=A id='#tw-4'>(" + J(F.sf) + " OFF)</div>");
                    Vb.ia(c, "font-size:75%;text-align:left;", 0);
                    break;
                case 1736718:
                    L.ta(126976);
                    Yb.ug();
                    break;
                case 1736714:
                    L.ta(126976);
                    Yb.tg();
                    break;
                case 1183749:
                case 1183750:
                case 1183751:
                case 1183752:
                case 1183753:
                    m(c);
                    break;
                case 1277961:
                case 1277957:
                case 1277960:
                case 1212429:
                    g(c);
                    break;
                case 1736716:
                    if (3 != z.a)
                        break;
                    L.ta(126976);
                    Vb.ia("<div class=A id='#edit-T'>TRANING editor</div><div class=A id='#edit-M'>MJLOG editor</div>", "", 0);
                    break;
                case 425995:
                    3 == z.a && Vb.o("<div style='text-align:left;font-size:75%;'>" + J(F.Zg) + "</div>");
                    break;
                case 495623:
                    if (Pb.Vc) {
                        location.reload();
                        break
                    }
                case 11:
                    L.ta(126976),
                    -1 != z.Fa && (Pb.Vc || (delete Pb.log,
                    delete Pb.wg),
                    Yb.va(),
                    Zb.va(),
                    z.va()),
                    L.u[14] = !1,
                    z.a = 0,
                    Pb.log ? (z.a = 3,
                    yc.qa()) : Pb.wg ? z.a = 2 : (L.b.style.display = "none",
                    z.a = 1),
                    ec(),
                    b ? P.o({
                        tag: "SPLASH"
                    }) : Pb.log ? (Yb.Yj(Pb.log),
                    L.aa(),
                    qc.aa()) : Pb.wg ? (yc.Pc(),
                    c = D[B.Gb] || "M",
                    ib ? yc.R({
                        tag: "HELO",
                        tsssessionid: D[B.Ma],
                        sx: c
                    }) : yc.R({
                        tag: "HELO",
                        name: D[B.fa] || "NoName",
                        sx: c
                    })) : (yc.Pc(),
                    P.o({
                        tag: 495623 == c ? "AUTOLOGIN" : "LOGIN"
                    }))
                }
            }
        }
    }();
    var rc = function() {
        var a, m, g, e, c, b, k, d = 0, f = ya("div", null, "nosel tbl ts0", {}, {
            position: "absolute",
            pointerEvents: "none",
            fontFamily: "sans-serif",
            textAlign: "right"
        });
        f.innerHTML = "<div class=tbc style='vertical-align:bottom;padding:0 0.1em;'></div>";
        return {
            hk: function() {
                var l = (z.H & t.B ? 7 : 3) - (z.H & t.c ? 1 : 0);
                0 == z.ha[0] && 0 == z.ha[1] ? (m = z.Me,
                g = e = z.Ne) : l <= z.ha[0] ? (m = z.Qe,
                g = e = z.Re) : (m = z.Oe,
                g = e = z.Pe);
                z.ka[1] & t.kc.Oc && (m = 1E3,
                g = 0)
            },
            o: function(l, p, h) {
                f.firstChild.innerHTML = "";
                p || (p = Ja("[name=ok]"));
                rc.aa(p, h);
                1 == z.a && (("BUTTON" == k.tagName ? k.parentNode : k instanceof Cc ? za : k).appendChild(f),
                0 > l ? a = -l + 1E3 : a = (l || m) + g + 1E3,
                b = a - 1E3,
                c = a - 1E3,
                pb().count = function(n) {
                    if (0 > c)
                        return rc.qa(),
                        !1;
                    a -= n;
                    if (0 <= a && ~~(1 + c / 1E3) == ~~(1 + a / 1E3))
                        return !0;
                    c = a;
                    0 <= a ? (0 > l ? Xb(1E3 > a ? O.Wa : O.Ef, 0, 0) : 3E3 > a && Xb(O.re, 0, 0),
                    f.firstChild.innerText = ~~(a / 1E3)) : rc.hg();
                    return !0
                }
                )
            },
            aa: function(l, p) {
                if (!(k && l && k instanceof Cc ^ l instanceof Cc)) {
                    l && (k = l);
                    k instanceof Cc && ~k.la & X.za && (k = void 0);
                    if (!k)
                        for (l = 13; (k = U[1024 | l]) && (!k.K || (U[1024 | l].la & (X.za | X.Ja)) != (X.za | X.Ja)); --l)
                            ;
                    if (!k)
                        for (l = 13; (k = U[1024 | l]) && !(k.K && U[1024 | l].la & X.za); --l)
                            ;
                    k && (l = f.style,
                    l.fontSize = Qa.style.fontSize,
                    k instanceof Cc ? Da(l, {
                        left: ~~((p ? k.i : k.X) / cb) + kc.P.canvas.offsetLeft + "px",
                        top: ~~((p ? k.l : k.$) / cb) + "px",
                        width: ~~(Q.I[4] / cb) + "px",
                        height: ~~((Q.J[4] + Q.Y[4]) / cb) + "px"
                    }) : Da(l, {
                        left: k.offsetLeft + "px",
                        top: k.offsetTop + "px",
                        width: (k.offsetWidth || parseInt(k.parentNode.style.width)) + "px",
                        height: (k.offsetHeight || parseInt(k.parentNode.style.height)) + "px"
                    }))
                }
            },
            hg: function() {
                if (k instanceof Cc)
                    z.vg(k.ma);
                else if (k && k.name) {
                    if (!k.disabled)
                        P[k.name]()
                } else
                    zc.dg(2360326)
            },
            sg: function() {
                g < e && (g += 1E3);
                if (z.ka[1] & t.kc.Oc && f.parentNode && k instanceof Cc) {
                    var l = Qa.getBoundingClientRect()
                      , p = f.getBoundingClientRect()
                      , h = ya("div", Qa, "nosel ts0", {
                        innerText: "+1"
                    }, {
                        position: "absolute",
                        fontSize: Qa.style.fontSize,
                        pointerEvents: "none"
                    });
                    Da(h.style, {
                        left: p.left - l.left + "px",
                        top: p.top - l.top + "px",
                        width: p.width + "px",
                        height: p.height + "px",
                        textAlign: "center",
                        opacity: 1,
                        transform: "translate(0,20%)"
                    });
                    setTimeout(function() {
                        Da(h.style, {
                            transition: "all 250ms ease-in-out 500ms",
                            opacity: 0,
                            transform: "translate(-25%,20%)"
                        });
                        sb(h, function(n) {
                            n.parentNode && n.parentNode.removeChild(n)
                        })
                    }, 1)
                }
            },
            gk: function() {
                return k
            },
            wb: function() {
                return !!f.parentNode
            },
            qa: function() {
                f.parentNode && (0 > a ? ++d : d = 0,
                0 < z.ng && z.ng <= d && location.reload(),
                a < g && (g = 1E3 * ~~(0 > a ? 0 : a / 1E3)),
                b < a && rc.sg(),
                f.parentNode.removeChild(f));
                k = void 0;
                c = -1;
                delete pb().count
            }
        }
    }();
    for (var qc = {
        b: ya("div", za, "", {}, {
            position: "absolute"
        }),
        aa: function() {
            var a = qc.b.style
              , m = Q.I[4] / cb
              , g = ~~Math.min(~~(2 * m), (bc.offsetHeight - Q.Ab / cb) / 2);
            3 == z.a && (g = 0);
            if (Ob || g < m || D[B.Ia] & 1)
                qc.b.style.display = "none";
            else
                switch (a.top = za.offsetTop + (U[W.cb] + Q.J[4] + Q.Y[4]) / cb + "px",
                a.display = "",
                ~~D[B.$d]) {
                case 1:
                    var e = Math.min(2.25 * g, bc.offsetHeight - za.offsetHeight);
                    a.width = za.offsetWidth + "px";
                    a.height = e + "px";
                    a.background = "linear-gradient(to bottom, rgba(0,0,0,1.0) 0%,rgba(0,0,0,1.0) 50%,rgba(24,24,24,1.0) 100%)";
                    a.borderTop = a.borderBottom = "solid 1px #222";
                    for (var c = 0; 13 >= c; ++c)
                        qc[c].style.display = "none";
                    for (c = 20; 28 >= c; ++c)
                        a = qc[c].style,
                        a.top = "0px",
                        a.width = 3 * m + "px",
                        a.height = e - g + "px",
                        a.display = "";
                    qc.Ge(0);
                    qc[30].style.display = qc[31].style.display = "none";
                    a = qc[30].style;
                    a.width = "50%";
                    a.height = g + "px";
                    a.display = "";
                    a.marginTop = e - g + "px";
                    a = qc[31].style;
                    a.width = "50%";
                    a.height = g + "px";
                    a.display = "";
                    a.marginTop = e - g + "px";
                    break;
                default:
                case 2:
                    e = 2 * m;
                    a.width = 7.5 * e + 1 + "px";
                    a.height = 2 * g + 1 + "px";
                    a.background = "";
                    a.borderTop = a.borderBottom = "none";
                    var b = q[32];
                    b = b && b.length ? 3 * ~~(b.length / 3) + 1 : 13;
                    for (c = 20; 28 >= c; ++c)
                        qc[c].style.display = "none";
                    for (c = 0; 13 >= c; ++c)
                        a = qc[c].style,
                        a.width = e + 1 + "px",
                        a.height = g + 1 + "px",
                        a.top = g * (c & 1) + "px",
                        a.left = U[W.La] / cb + m * c + "px",
                        a.display = c < b ? "" : "none";
                    qc[30].style.display = qc[31].style.display = "none"
                }
        },
        zb: function(a, m, g) {
            var e = U[1024 | a];
            if (e && (e.Ha(m, g, !0),
            (g = !!(e.la & (X.za | X.Eb)) && e.K) && e.la & X.Qa && rc.aa(e),
            !(e.la & X.Cb))) {
                if (!qc[20].style.display) {
                    var c = Q.I[4] / cb;
                    e.la & (X.Qa | X.Ja) && qc.Ke(U[W.La] / cb + c * (a + .5))
                }
                c = "";
                e.la & X.Qa ? c = g ? "#060" : "#600" : e.la & X.Ja && (c = g ? "#030" : "#300");
                !c && m & (X.Ja | X.Qa) || (qc[0 + a].style.backgroundColor = qc[24].style.backgroundColor = c)
            }
        },
        Ke: function(a) {
            var m = Q.I[4] / cb;
            a < U[W.La] / cb + 0 * m && (a += 3 * m);
            U[W.La] / cb + 14 * m < a && (a -= 3 * m);
            a = (~~((a - U[W.La] / cb) / m) + .5) * m + U[W.La] / cb;
            for (var g = 20; 28 >= g; ++g)
                qc[g].style.left = ~~(a + 3 * m * (g - 24 - .5)) + "px";
            return a
        },
        Ge: function(a) {
            qc.Ke(~~(qc[24].offsetLeft + qc[24].offsetWidth / 2 + Q.I[4] / cb * a))
        }
    }, Dc = 0; 13 >= Dc; ++Dc)
        qc[Dc] = ya("div", qc.b, "", {}, {
            position: "absolute",
            border: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.15) 100%)"
        }),
        ya("div", qc[Dc], "", {}, {
            width: "50%",
            height: Dc & 1 ? "25%" : "20%",
            backgroundColor: Dc & 1 ? "#333" : "#555",
            pointerEvents: "none"
        });
    qc[13].parentNode.removeChild(qc[13]);
    for (Dc = 20; 28 >= Dc; ++Dc)
        qc[Dc] = ya("div", qc.b, "", {}, {
            position: "absolute",
            borderLeftStyle: "none",
            borderLeft: "solid 1px #333",
            background: "linear-gradient(135deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgba(255,255,255,0.10) 100%)"
        }),
        ya("div", qc[Dc], "", {}, {
            position: "absolute",
            marginLeft: "50%",
            width: "1px",
            height: "50%",
            pointerEvents: "none",
            background: "linear-gradient(to bottom, rgba(195,0,0,1.0) 0%,rgba(255,0,0,1.0) 10%,rgba(0,0,0,0) 100%)"
        });
    qc[28].style.borderRight = "solid 1px #333";
    qc[30] = ya("button", qc.b, "gray", {
        innerHTML: "&#12296;",
        name: "CP_L"
    }, {
        background: "none"
    });
    qc[31] = ya("button", qc.b, "gray", {
        innerHTML: "&#12297;",
        name: "CP_R"
    }, {
        background: "none"
    });
    qc[30].style.borderRight = "none";
    var O, Ec = O || (O = {});
    Ec.bg = -1;
    Ec.Wa = 0;
    Ec.od = 1;
    Ec.rm = 2;
    Ec.Ef = 3;
    Ec.Mb = 4;
    Ec.Gf = 5;
    Ec.Ff = 6;
    Ec.re = 7;
    Ec.Fb = 8;
    Ec.pd = 9;
    Ec.oe = 10;
    Ec.Rf = 11;
    Ec.pe = 24;
    Ec.Kf = 25;
    Ec.Jf = 26;
    Ec.If = 27;
    Ec.Hf = 28;
    Ec.Df = 29;
    Ec.Cf = 30;
    Ec.Mf = 31;
    Ec.Lf = 32;
    Ec.Of = 33;
    Ec.Nf = 34;
    Ec.Qf = 35;
    Ec.Pf = 36;
    Ec.Nc = 37;
    Ec.ac = 38;
    Ec.qe = 39;
    Ec.Ak = 1010;
    Ec.Ld = 1011;
    Ec.Kd = 1012;
    Ec.zk = 1013;
    Ec.Cc = 1014;
    Ec.Bc = 1015;
    Ec.yk = 1016;
    Ec.Jd = 1017;
    Ec.Id = 1018;
    Ec.Bk = 1019;
    Ec.Nd = 1020;
    Ec.Md = 1021;
    Ec.Ck = 1022;
    Ec.Pd = 1023;
    Ec.Od = 1024;
    Ec.Dk = 1025;
    Ec.Rd = 1026;
    Ec.Qd = 1027;
    Ec.bd = 1028;
    Ec.cd = 1029;
    function Xb() {}
    function Fc() {}
    function Gc() {}
    var wc = function() {
        var a = {};
        return function(m, g, e) {
            if (m == O.bg)
                a = {};
            else {
                for (var c in a)
                    if (a[c] == m && e - 5 < ~~c && ~~c < e + 10)
                        return;
                a[e] = m;
                Xb(m, g, e)
            }
        }
    }();
    var Hc, Ic = Hc || (Hc = {});
    Ic.me = 1;
    Ic.Aa = 2;
    Ic.pc = 4;
    Ic.nc = Ic.Aa | Ic.pc;
    var mc;
    (function(a) {
        var m = {
            M: [O.Wa, O.Ld, O.Cc, O.Jd, O.Cc, O.Cc, O.Pd, O.Rd, O.Nd, O.Wa, O.pd, O.Wa],
            F: [O.Wa, O.Kd, O.Bc, O.Id, O.Bc, O.Bc, O.Od, O.Qd, O.Md, O.Wa, O.pd, O.Wa]
        };
        m[""] = m.C = m.M;
        var g = {};
        a.xb = {};
        a.b = ya("div", bc, "", {}, {
            position: "absolute",
            pointerEvents: "none",
            top: "0px"
        });
        a.Ra = function(e, c, b) {
            if (!lc.oa) {
                var k = J(F.Uj)[c];
                if (k) {
                    var d = 10 * -e
                      , f = ya("span", a.b, "tsv nosel", {
                        innerHTML: k
                    }, {
                        position: "absolute",
                        fontWeight: "bold",
                        color: "#FFF",
                        opacity: "0",
                        whiteSpace: "nowrap"
                    })
                      , l = za.offsetWidth / 40
                      , p = ~~(a.xb[W.Zf + 2 * e] / cb) + za.offsetLeft + kc.P.canvas.offsetLeft
                      , h = ~~(a.xb[W.$f + 2 * e] / cb) + za.offsetTop
                      , n = f.style
                      , x = ka++;
                    b & Hc.me && (g[x] = !0);
                    ~b & Hc.Aa && (n.display = "none");
                    pb()[x] = function(u) {
                        if (!f.parentNode)
                            return !1;
                        if (0 > d)
                            return d += u,
                            0 < d && (d = 0),
                            !0;
                        0 == d && b & Hc.pc && (Xb(m[z.qb[e]][c], e, 0),
                        ++d);
                        d += u;
                        if (250 > d)
                            return n.opacity = "" + d / 250,
                            n.fontSize = l * (4 + (250 - d) / 250 * 4) + "px",
                            n.left = p - f.offsetWidth / 2 + "px",
                            n.top = h - f.offsetHeight / 2 + "px",
                            !0;
                        if (750 > d) {
                            if ("1" == n.opacity)
                                return !0;
                            n.opacity = "1";
                            n.fontSize = 4 * l + "px";
                            n.left = p - f.offsetWidth / 2 + "px";
                            n.top = h - f.offsetHeight / 2 + "px";
                            return !0
                        }
                        return g[x] ? (d -= u,
                        !0) : 1250 > d ? (n.opacity = "" + (1250 - d) / 500,
                        !0) : (f.parentNode.removeChild(f),
                        !1)
                    }
                }
            }
        }
        ;
        a.va = function() {
            for (; a.b.firstChild; )
                a.b.removeChild(a.b.firstChild)
        }
        ;
        a.Ae = function() {
            g = {}
        }
    }
    )(mc || (mc = {}));
    Oa.AudioContext = Oa.AudioContext || Oa.webkitAudioContext;
    (function() {
        function a(r) {
            function w() {
                Ma.removeEventListener("touchend", r, !1);
                Ma.removeEventListener("mousedown", r, !1);
                r && (r(),
                r = void 0)
            }
            Fa(Ma, "touchend", w);
            Fa(Ma, "mousedown", w)
        }
        if (AudioContext) {
            var m = {}, g = new AudioContext, e, c, b = function(r, w, A) {
                w = g.createBufferSource();
                w.buffer = m[r].gg;
                w.connect(e);
                w.start ? w.start(g.currentTime + A / 1E3) : w.noteOn(g.currentTime + A / 1E3);
                return w
            }, k = function() {
                Xb = function(r, w, A) {
                    if ("0" != D[B.sb] && !lc.oa && r != O.Wa && e) {
                        if (m[r])
                            return b(r, w, A);
                        switch (r) {
                        case O.Ld:
                            Xb(O.Kf, w, A);
                            Xb(O.ac, w, A);
                            break;
                        case O.Kd:
                            Xb(O.Jf, w, A);
                            Xb(O.ac, w, A);
                            break;
                        case O.Cc:
                            Xb(O.If, w, A);
                            Xb(O.ac, w, A);
                            break;
                        case O.Bc:
                            Xb(O.Hf, w, A);
                            Xb(O.ac, w, A);
                            break;
                        case O.Jd:
                            Xb(O.Df, w, A);
                            Xb(O.ac, w, A);
                            break;
                        case O.Id:
                            Xb(O.Cf, w, A);
                            Xb(O.ac, w, A);
                            break;
                        case O.Nd:
                            Xb(O.Mf, w, A);
                            Xb(O.qe, w, A);
                            break;
                        case O.Md:
                            Xb(O.Lf, w, A);
                            Xb(O.qe, w, A);
                            break;
                        case O.Pd:
                            Xb(O.Of, w, A);
                            Xb(O.Nc, w, A);
                            break;
                        case O.Od:
                            Xb(O.Nf, w, A);
                            Xb(O.Nc, w, A);
                            break;
                        case O.Rd:
                            Xb(O.Qf, w, A);
                            Xb(O.Nc, w, A);
                            break;
                        case O.Qd:
                            Xb(O.Pf, w, A),
                            Xb(O.Nc, w, A)
                        }
                    }
                }
            }, d = 0, f = function(r, w, A) {
                ++d;
                var I = new XMLHttpRequest;
                I.open("GET", r, !0);
                I.responseType = "arraybuffer";
                I.onload = function() {
                    200 == this.status && g.decodeAudioData(this.response, function(Y) {
                        for (var T in w)
                            m[w[T]].gg = Y;
                        --d || k();
                        A && A(Y)
                    })
                }
                ;
                I.send()
            };
            Ta && ya("audio", Qa, "", {}, {
                position: "absolute",
                display: "none"
            });
            Fc = function() {
                e.gain.value = ~~(D[B.sb] || 5) / 10
            }
            ;
            a(function() {
                var r = ~~(D[B.sb] || 5) / 10;
                e = g.createGain ? g.createGain() : g.createGainNode();
                e.connect(g.destination);
                e.gain.value = r;
                c = g.createGain ? g.createGain() : g.createGainNode();
                c.connect(g.destination);
                c.gain.value = 0;
                e.gain.value = .001;
                b(O.Mb, 0, 0);
                setTimeout(function() {
                    e.gain.value = r
                }, 1E3)
            });
            var l = function() {
                var r = {}, w;
                for (w in m)
                    (r[m[w].url] = r[m[w].url] || []).push(w);
                for (var A in r)
                    f(A, r[A])
            };
            Gc = function() {
                var r = [O.od, O.Ef, O.Mb, O.Gf, O.Ff, O.re, O.Fb, O.pd, O.oe, O.Rf, O.Kf, O.If, O.Df, O.Mf, O.Of, O.Qf, O.Jf, O.Hf, O.Cf, O.Lf, O.Nf, O.Pf, O.Nc, O.ac, O.qe, O.pe, O.bd, O.cd], w;
                for (w in r)
                    m[r[w]] = {
                        gg: void 0,
                        url: "https://cdn.tenhou.net/3/res/snd/" + la(2, r[w]) + ".wav"
                    };
                m[O.bd].url = m[O.cd].url = m[O.od].url;
                var A = D[B.oc];
                Sb(A) ? mb(A, function(I) {
                    if (I)
                        console.log("err", I);
                    else {
                        I = this.response;
                        try {
                            A = JSON.parse(I)
                        } catch (T) {
                            alert(T)
                        }
                        for (var Y in A.se)
                            m[Y] && (m[Y].url = A.se[Y].url)
                    }
                    l()
                }) : l()
            }
            ;
            Gc()
        } else {
            var p = {};
            p[O.od] = p[O.Fb] = p[O.pd] = p[O.oe] = p[O.Ld] = p[O.Kd] = p[O.Cc] = p[O.Bc] = p[O.Jd] = p[O.Id] = p[O.Nd] = p[O.Md] = p[O.Pd] = p[O.Od] = p[O.Rd] = p[O.Qd] = p[O.pe] = 1;
            for (var h = 5, n = function() {
                this.currentTime && (this.removeEventListener("timeupdate", n, !1),
                this.pause(),
                Fa(this, "timeupdate", function() {
                    this.endTime < this.currentTime && (this.pause(),
                    this.Je = O.Wa)
                }),
                --h || (Xb = function(r, w, A) {
                    if (r == O.bd || r == O.cd)
                        r = O.od;
                    "0" == D[B.sb] || lc.oa || r == O.Wa || setTimeout(function() {
                        for (var I = 0; 5 > I && (h = (h + 1) % 5,
                        !u[h].paused && p[u[h].Je] && !p[r]); ++I)
                            ;
                        5 != I && (I = u[h],
                        I.paused || I.pause(),
                        I.currentTime = 2 * r,
                        I.endTime = 2 * r + (1 == r ? 3 : 1),
                        I.Je = r,
                        I.play())
                    }, A)
                }
                ))
            }, x = ~~(D[B.sb] || 5) / 10, u = [], y = 0; 5 > y; ++y)
                u[y] = ya("audio", Qa, "", {
                    src: "https://cdn.tenhou.net/3/res/snd/se.m4a"
                }, {
                    position: "absolute",
                    display: "none"
                }),
                u[y].endTime = 0,
                u[y].Je = O.Wa,
                u[y].volume = x,
                Fa(u[y], "timeupdate", n);
            Fc = function() {
                for (var r = ~~(D[B.sb] || 5) / 10, w = 0; w < u.length; ++w)
                    u[w].volume = r
            }
            ;
            a(function() {
                for (var r = 0; r < u.length; ++r)
                    u[r].play()
            });
            Gc = function() {
                D[B.oc] && Vb.o(J(F.jj))
            }
        }
    }
    )();
    if (Oa.gr && Oa.gr.eworx && Oa.gr.eworx.AVAudioSessionAdapter) {
        var Jc = Oa.gr.eworx.AVAudioSessionAdapter;
        (new Jc).setCategoryWithOptions(Jc.Categories.PLAYBACK, Jc.CategoryOptions.MIX_WITH_OTHERS, function() {}, function() {})
    }
    ;var Kc = ib ? {
        iH: 24,
        iS: 10,
        iV: 6,
        hR: 0,
        hG: 0,
        hB: 0
    } : {
        iH: 0,
        iS: 10,
        iV: 7,
        hR: 0,
        hG: 0,
        hB: 0
    }
      , Lc = function() {
        function a() {
            this.ob = new Image;
            this.offsetY = this.offsetX = this.Ta = this.xa = this.Ub = this.Tb = 0
        }
        a.prototype.Fe = function(m, g, e, c, b, k, d) {
            this.ob = m;
            this.Tb = g;
            this.Ub = e;
            this.xa = c;
            this.Ta = b;
            this.offsetX = k;
            this.offsetY = d;
            return this
        }
        ;
        return a
    }()
      , Mc = {}
      , Nc = function() {
        function a() {
            this.ob = new Image;
            this.offsetY = this.offsetX = this.Ta = this.xa = this.Ub = this.Tb = 0;
            this.Ee = -1
        }
        a.prototype.Fe = function(m, g, e, c, b, k) {
            this.ob = m;
            this.Tb = g;
            this.Ub = e;
            this.xa = c;
            this.Ta = b;
            this.offsetY = this.offsetX = 0;
            this.Ee = k;
            return this
        }
        ;
        return a
    }();
    Fb("");
    var Z = {};
    function Oc(a, m) {
        var g = [a];
        for (m = m || {}; g.length; ) {
            a = g[g.length - 1];
            g.pop();
            for (var e = 0; e < a.childNodes.length; ++e)
                g.push(a.childNodes[e]);
            a.id ? m[a.id] = a : a.name && (m[a.name] = a)
        }
        Z = m
    }
    var Pc = {
        SPLASH: {
            ya: ["c18", "c15"],
            wa: "#000"
        },
        AUTOLOGIN: {
            ya: ["c19", "c16"],
            wa: "#000"
        },
        LOGIN: {
            ya: ["c19", "c16"],
            wa: "#000"
        },
        LOBBY: {
            ya: ["c20", "c15"],
            wa: "#000"
        },
        STORE: {
            ya: ["c21", "c15"],
            wa: "#000"
        },
        CONFIG: {
            ya: ["c22", "c15"],
            wa: "#000"
        },
        TAIKYOKU: {
            ya: ["c23", "c15"],
            wa: "#000"
        },
        SAIKAI: {
            ya: ["c23", "c15"],
            wa: "#000"
        },
        KANSEN: {
            ya: ["c23", "c15"],
            wa: "#000"
        },
        AGARI: {
            ya: ["c24", "c15"],
            wa: "#000"
        },
        RYUUKYOKU: {
            ya: ["c25", "c15"],
            wa: "#000"
        },
        OWARI: {
            ya: ["c26", "c15"],
            wa: "#000"
        },
        TRAINING: {
            ya: ["c27", "c15"],
            wa: "#000"
        },
        NINTEI: {
            ya: ["c28", "c15"],
            wa: "#000"
        }
    }
      , P = {};
    var X, Qc = X || (X = {});
    Qc.NONE = 0;
    Qc.Db = 1;
    Qc.Ja = 2;
    Qc.Qa = 4;
    Qc.Cb = 8;
    Qc.za = 16;
    Qc.Eb = 32;
    Qc.Ba = 256;
    Qc.dd = 512;
    Qc.mb = 1024;
    Qc.Nb = 2048;
    Qc.eb = 4096;
    Qc.ye = 8192;
    function Cc(a) {
        this.K = 0;
        this.L = -1;
        this.$ = this.X = this.pb = this.l = this.i = 0;
        this.ra = 1;
        this.Za = this;
        this.ga = {
            Za: this,
            K: 0
        };
        this.L = a
    }
    var W, Rc = W || (W = {});
    Rc.Vd = 16;
    Rc.Wd = 17;
    Rc.Ud = 18;
    Rc.Td = 19;
    Rc.zf = 32;
    Rc.le = 33;
    Rc.yf = 34;
    Rc.xf = 35;
    Rc.Bf = 48;
    Rc.Qi = 49;
    Rc.Pi = 50;
    Rc.Oi = 51;
    Rc.Ti = 52;
    Rc.Ui = 53;
    Rc.Si = 54;
    Rc.Ri = 55;
    Rc.Xi = 56;
    Rc.Yi = 57;
    Rc.Wi = 58;
    Rc.Vi = 59;
    Rc.aj = 60;
    Rc.bj = 61;
    Rc.$i = 62;
    Rc.Zi = 63;
    Rc.Zf = 64;
    Rc.$f = 65;
    Rc.Oj = 66;
    Rc.Pj = 67;
    Rc.Qj = 68;
    Rc.Rj = 69;
    Rc.Sj = 70;
    Rc.Tj = 71;
    Rc.La = 80;
    Rc.cb = 81;
    Rc.ud = 82;
    Rc.Kj = 83;
    Rc.Lj = 84;
    Rc.Wf = 85;
    Rc.xe = 86;
    Rc.Xf = 87;
    Rc.lc = 96;
    Rc.kd = 97;
    Rc.Fi = 98;
    Rc.uf = 99;
    Rc.mc = 100;
    Rc.Gi = 101;
    Rc.Hi = 102;
    Rc.Ii = 103;
    Rc.ge = 112;
    Rc.hf = 113;
    Rc.hh = 114;
    Rc.ih = 115;
    Rc.jh = 116;
    Rc.kh = 117;
    Rc.lh = 118;
    Rc.mh = 119;
    var U = {
        Xa: []
    };
    var hc;
    (hc || (hc = {})).a = 0;
    var z, Sc = z || (z = {});
    Sc.a = 0;
    Sc.H = 0;
    Sc.Tc = 0;
    Sc.ka = [0, 0, 0, 0];
    Sc.qb = ["", "", "", ""];
    Sc.tc = [0, 0, 0, 0];
    Sc.rate = [1500, 1500, 1500, 1500];
    var Yb = function() {
        function a(l) {
            if (l) {
                var p = /<([a-zA-Z0-9]+)[^>]*>|[^<]+|<\/(.*)>/g
                  , h = p.exec(l);
                if (h) {
                    var n = {};
                    n.tag = h[1];
                    for (var x = / ([a-zA-Z0-9]+)="([^"]*)"/g, u; u = x.exec(h[0]); )
                        n[u[1]] = u[2];
                    for (; (h = p.exec(l)) && !h[2]; )
                        n.childNodes || (n.childNodes = []),
                        n.childNodes.push(h[1] ? a(h[0]) : ~~h[0]);
                    return n
                }
            }
        }
        function m(l) {
            for (var p = -1, h = k; 0 <= --h; ) {
                switch (c[h].tag) {
                case "INIT":
                    return h + 1;
                case "N":
                    l = c[h][2];
                    if (2 == l || 4 == l || 5 == l)
                        p = -1;
                    break;
                case "D":
                case "E":
                case "F":
                case "G":
                    if (-1 != p)
                        return p;
                    break;
                case "T":
                case "U":
                case "V":
                case "W":
                    l || (p = h)
                }
                l = !1
            }
            return -1
        }
        function g(l, p) {
            p && (c = a(p).childNodes);
            if (!p || !c)
                return Vb.o(J(2003), 1, function() {
                    Pb.Vc ? location.reload() : delete Pb.log
                });
            var h = !1;
            for (p = 0; 40 > p; ++p) {
                var n = D[B.gd + p];
                try {
                    n = JSON.parse(n)
                } catch (A) {
                    continue
                }
                if (n.log == l) {
                    h = !0;
                    break
                }
            }
            h || (L.u[14] = void 0);
            for (p = 0; p < c.length; ++p) {
                switch (c[p].tag) {
                case "SHUFFLE":
                    var x = hc.ek(c[p].seed);
                    break;
                case "GO":
                    yc.Sa(c[p])
                }
                if ("UN" == c[p].tag)
                    break
            }
            for (b = []; p < c.length; ++p) {
                n = c[p];
                h = [0, 0, 0, 0];
                var u = p;
                switch (n.tag) {
                case "INIT":
                    b.push(p);
                    break;
                case "RYUUKYOKU":
                    if ("ron3" == n.type)
                        for (l = 0; 4 > l; ++l)
                            n["hai" + l] && (h[l] = 6);
                    break;
                case "AGARI":
                    for (; n = c[p],
                    h[~~n.who] = n.who == n.fromWho ? 7 : 6,
                    n.paoWho && (h[~~n.paoWho] = 11),
                    p + 1 < c.length && "AGARI" == c[p + 1].tag; ++p)
                        ;
                    break;
                case "N":
                    Ac(n);
                    h[~~n.who] = n[2];
                    break;
                default:
                    Yb.Zc(n)
                }
                if (h[0] || h[1] || h[2] || h[3])
                    c.splice(u, 0, {
                        tag: "VOICE",
                        type: h
                    }),
                    ++p
            }
            if (x)
                for (p = 0; p < b.length; ++p) {
                    n = c[b[p]];
                    l = qa(n.seed);
                    l = 6 == l[3] && 0 == l[4];
                    var y;
                    x && (y = n[5] = x(~~n.oya, l));
                    if (y)
                        if (l) {
                            if (z.H & t.c)
                                for (var r = 0; 6 > r; ++r)
                                    y[r] |= 1280;
                            for (l = 0; l < (z.H & t.c ? 3 : 4); ++l) {
                                for (r = 0; 4 > r; ++r)
                                    y[34 * l + r] |= 1280;
                                for (; 34 > r; ++r)
                                    y[34 * l + r] |= l + 1 << 8
                            }
                            h = 0;
                            for (r = b[p] + 1; r < c.length && "INIT" != c[r].tag; ++r)
                                n = c[r],
                                "N" != n.tag || 4 != n[2] && 2 != n[2] && 5 != n[2] && 10 != n[2] || (l = ~~n.who,
                                y[h / 4 * 34 + h % 4 ^ 1] |= l + 1 << 8,
                                ++h)
                        } else {
                            var w = !1;
                            u = 13 * (z.H & t.c ? 3 : 4);
                            h = 0;
                            l = -1;
                            for (r = b[p] + 1; r < c.length && "INIT" != c[r].tag; ++r)
                                switch (n = c[r],
                                n.tag) {
                                case "N":
                                    w = 4 == n[2] || 2 == n[2] || 5 == n[2] || 10 == n[2];
                                    break;
                                case "T":
                                case "U":
                                case "V":
                                case "W":
                                    l = n.tag.charCodeAt(0) - 84,
                                    y[w ? h++ ^ 1 : y.length - 1 - u++] |= l + 1 << 8,
                                    w = !1
                                }
                            for (n = z.H & t.c ? 3 : 4; u < y.length - 14 - h; ++u)
                                l = (l + 1) % n,
                                y[y.length - 1 - u] |= l + 1 << 8;
                            for (; u < y.length; ++u)
                                y[y.length - 1 - u] |= 1280
                        }
                }
            for (p = 0; p < c.length; ++p)
                Zb.Bd(Pb.tw, c[p]);
            for (p = 0; "INIT" != c[p].tag; ++p)
                switch (c[p].tag) {
                case "BYE":
                case "SHUFFLE":
                case "GO":
                    break;
                case "UN":
                case "TAIKYOKU":
                    yc.Sa(c[p]);
                    break;
                default:
                    throw console.log(p, c[p]);
                }
            k = b[~~Pb.ts];
            delete Pb.ts
        }
        function e(l) {
            var p = l.split("-");
            if (4 != p.length)
                return l;
            if (120 == p[3].charCodeAt(0)) {
                l = parseInt(p[3].substr(1, 4), 16);
                var h = parseInt(p[3].substr(5, 4), 16)
                  , n = parseInt(p[3].substr(9, 4), 16)
                  , x = 0;
                "2010041111gm" <= p[0] && (x = ~~("3" + p[0].substr(4, 6)) % (34 - ~~p[0].substr(9, 1) - 1));
                p[3] = la(4, (l ^ h ^ f[x]).toString(16)) + la(4, (h ^ f[x] ^ n ^ f[x + 1]).toString(16))
            }
            return p.join("-")
        }
        var c, b, k, d = {
            D: !0,
            E: !0,
            F: !0,
            G: !0,
            T: !0,
            U: !0,
            V: !0,
            W: !0,
            N: !0,
            RYUUKYOKU: !0,
            VOICE: !0
        }, f = [22136, 52719, 55146, 42104, 59591, 46934, 9248, 28891, 49597, 52974, 62844, 4015, 18311, 50730, 43056, 17939, 64838, 38145, 27008, 39128, 35652, 63407, 65535, 23473, 35164, 55230, 27536, 4386, 64920, 29075, 42617, 17294, 18868, 2081];
        return {
            Zc: function(l) {
                var p = l.tag;
                if (1 < p.length) {
                    var h = l.tag.charCodeAt(1);
                    48 <= h && 57 >= h && (l[0] = ~~p.substr(1),
                    l.tag = p.substr(0, 1))
                }
                return l
            },
            Yj: function(l) {
                l = e(l);
                mb("https://tenhou.net/0/log/?" + l, function(p) {
                    g(l, p ? void 0 : this.response)
                })
            },
            ec: function(l) {
                if (c) {
                    if (0 == arguments.length) {
                        for (var p = k; 0 <= p && "INIT" != c[p].tag; --p)
                            ;
                        if (0 <= p)
                            return Yb.jg(c, p, k - p)
                    } else if (0 >= l) {
                        var h = m(0 > l);
                        if (-1 == h)
                            return;
                        if (0 > l && k == h + 1)
                            for (h = h - 1 == b[0] ? c.length - 1 : h - 2; "AGARI" == c[h - 1].tag; --h)
                                ;
                        var n = [];
                        for (p = 0; p < b.length && !(h < b[p]); ++p)
                            ;
                        var x = b[p - 1];
                        for (p = x; p < h; ++p)
                            n.push(c[p]);
                        yc.Sa(Yb.jg(c, x, h - x));
                        k = h;
                        1 == h - x && Tc.set()
                    } else if ((p = Ja("[name=ok]")) && !p.disabled) {
                        P.ok();
                        return
                    }
                    if (!(c.length <= k))
                        for (lc.tb(),
                        p = !1; !p && k < c.length; ++k) {
                            switch (c[k].tag) {
                            case "REACH":
                                2 != c[k].step && (p = !0);
                                break;
                            case "AGARI":
                                k + 1 < c.length && "AGARI" != c[k + 1].tag && (p = !0);
                                break;
                            default:
                                d[c[k].tag] && (p = !0)
                            }
                            yc.Sa(c[k])
                        }
                }
            },
            va: function() {
                k = 0;
                c = void 0
            },
            ug: function(l, p) {
                if (c && c.length)
                    if (l)
                        k = ~~p + 1,
                        Yb.ec(0);
                    else {
                        l = -1;
                        for (p = k; 0 <= p && (-1 == l && "T" == c[p].tag && (l = p),
                        "INIT" != c[p].tag); --p)
                            ;
                        if (!(0 > p)) {
                            var h = ""
                              , n = 0;
                            for (++p; p < c.length; ++p) {
                                var x = c[p];
                                if ("INIT" == x.tag)
                                    break;
                                "T" == x.tag && (h += "<div class='A" + (p == l ? " _selected_" : "") + "' id='#tj-" + p + "'>" + ++n + "巡目</div>")
                            }
                            Vb.ia(h, "", 0)
                        }
                    }
            },
            tg: function(l, p) {
                if (c && c.length)
                    if (l)
                        k = ~~p + 1,
                        Yb.ec(0);
                    else {
                        l = 0;
                        for (p = k; 0 <= p; --p)
                            if ("INIT" == c[p].tag) {
                                l = p;
                                break
                            }
                        var h = ""
                          , n = -1
                          , x = "";
                        for (p = 0; p < c.length; ++p) {
                            var u = c[p];
                            switch (u.tag) {
                            case "INIT":
                                n = qa(u.seed);
                                x = n[0];
                                x = "東南西北".substr(~~(x / 4), 1) + (x % 4 + 1) + K("局") + n[1] + K("本場");
                                n = p;
                                break;
                            case "RYUUKYOKU":
                                var y = fa.Sf[u.type];
                                h += "<div class='A" + (n == l ? " _selected_" : "") + "' id='#ts-" + n + "'>" + x + "<br>流局" + (y ? " " + y : "") + "</div>";
                                break;
                            case "AGARI":
                                y = ~~u.who;
                                var r = ~~u.fromWho;
                                u = qa(u.ten);
                                h += "<div class='A" + (n == l ? " _selected_" : "") + "' id='#ts-" + n + "'>" + x + "<br>" + K(y == r ? "ツモ:" : "ロン:") + z.O[y] + " " + u[1] + (y != r ? "<br>" + K("放銃:") + z.O[r] : "") + "</div>"
                            }
                        }
                        Vb.ia(h, "font-size:70%;text-align:left;", 0)
                    }
            },
            Cd: function(l, p) {
                l = ~~p;
                if (4 == l)
                    L.u[14] = !L.u[14];
                else if (4 > l) {
                    for (p = 0; p < c.length; ++p)
                        Zb.Bd(l, c[p]);
                    Pb.tw = (Pb.tw + l) % 4
                }
                for (p = 0; p < c.length; ++p)
                    if ("UN" == c[p].tag) {
                        yc.Sa(c[p]);
                        jc.na();
                        Yb.ec(0);
                        break
                    }
            },
            jg: function(l, p, h) {
                var n = l[p];
                if ("INIT" != n.tag)
                    return null;
                for (var x = [], u = qa(n.hai0); u.length; )
                    x[u.pop()] = 1;
                for (u = qa(n.hai1); u.length; )
                    x[u.pop()] = 2;
                for (u = qa(n.hai2); u.length; )
                    x[u.pop()] = 3;
                for (u = qa(n.hai3); u.length; )
                    x[u.pop()] = 4;
                var y = qa(n.seed)
                  , r = qa(n.ten);
                u = qa(n.chip);
                for (var w = ~~n.oya, A = n[5], I = [[], [], [], []], Y = [[], [], [], []], T = -1; p < l.length && h; ++p,
                --h)
                    switch (n = l[p],
                    n.tag) {
                    case "D":
                    case "E":
                    case "F":
                    case "G":
                        var R = n.tag.charCodeAt(0) - 68
                          , ma = n[0] == T;
                        T = n[0];
                        x[T] = 0;
                        ma && Y[R].push(254);
                        Y[R].push(T);
                        break;
                    case "T":
                    case "U":
                    case "V":
                    case "W":
                        R = n.tag.charCodeAt(0) - 84;
                        T = n[0];
                        x[T] = R + 1;
                        break;
                    case "N":
                        T = -1;
                        R = ~~n.who;
                        ma = ~~n.m;
                        for (var Ba = n[3], jb = n[0], Pa = 0; Pa < jb.length; ++Pa)
                            x[jb[Pa]] = 0;
                        5 != n[2] && 4 != n[2] && 10 != n[2] && (Ba = Y[(R + Ba) % 4],
                        Ba.pop(),
                        254 == Ba[Ba.length - 1] && Ba.pop());
                        if (5 == n[2]) {
                            for (Pa = 0; Pa < I[R].length && I[R][Pa] != (ma ^ 24); ++Pa)
                                ;
                            if (Pa == I[R].length)
                                throw console.log("Log2ReiniXML INVALID KAKAN");
                            I[R][Pa] = ma
                        } else
                            I[R].unshift(ma);
                        break;
                    case "REACH":
                        R = ~~n.who;
                        ma = ~~n.step;
                        2 == ma ? (n = qa(n.ten),
                        n.length ? r = n : r[R] -= 10) : (1 == ma ? Y[R].push(255) : (Y[R].push(255),
                        r[R] -= 10),
                        ++y[2]);
                        break;
                    case "DORA":
                        y.push(~~n.hai)
                    }
                n = l[p];
                "AGARI" == n.tag && n.who == n.fromWho && (x[~~n.machi] = 0);
                l = {
                    tag: "REINIT",
                    seed: "" + y,
                    ten: "" + r,
                    oya: w,
                    hai0: [],
                    hai1: [],
                    hai2: [],
                    hai3: []
                };
                for (p = 0; 136 > p; ++p)
                    x[p] && l["hai" + (x[p] - 1 & 3)].push(p);
                A && (l[5] = A);
                u.length && (l.chip = u);
                for (R = 0; 4 > R; ++R)
                    I[R].length && (l["m" + R] = I[R]);
                for (R = 0; 4 > R; ++R)
                    Y[R].length && (l["kawa" + R] = Y[R]);
                return l
            }
        }
    }();
    var ic = function() {
        function a(h, n, x) {
            for (var u = 3; u < arguments.length; ++u) {
                var y = arguments[u]
                  , r = y >> 8 & 7;
                ic[y] = (ic[y] || new Nc).Fe(h, n % 10 * Q.I[r], (Q.J[r] + Q.Y[r]) * ~~(n / 10), Q.I[r], Q.J[r] + Q.Y[r], x);
                if (5 == r || 7 == r)
                    ic[y].offsetY += Q.J[r % 4] + Q.Y[r % 4] - (Q.J[r] + Q.Y[r]);
                5 == r && (ic[y].offsetX += Q.I[r % 4] - Q.I[r])
            }
        }
        function m(h, n, x, u, y) {
            for (var r = 5; r < arguments.length; ++r) {
                var w = arguments[r]
                  , A = w >> 8 & 7;
                Mc[w] = (Mc[w] || new Lc).Fe(h, n, x, u, y, Q.qb[A], Q.J[A] + Q.Y[A] - y);
                if (5 == A || 7 == A)
                    Mc[w].offsetY += Q.J[A % 4] + Q.Y[A % 4] - (Q.J[A] + Q.Y[A]);
                5 == A && (Mc[w].offsetX += Q.I[A % 4] - Q.I[A])
            }
        }
        function g(h, n, x, u, y) {
            var r = ic[12288 | h]
              , w = ic[4096 | n]
              , A = ic[4096 | y];
            n = A.width;
            var I = A.height
              , Y = r.getContext("2d");
            if (l[h]) {
                var T = ic[4096 | h];
                Y.clearRect(0, 0, r.width, r.height);
                Y.drawImage(T, 0, 0);
                delete l[h]
            }
            r = Y.getImageData(n * x, I * u, n, I);
            T = Ma.createElement("CANVAS").getContext("2d");
            T.canvas.width = n;
            T.canvas.height = I;
            T.clearRect(0, 0, n + 1, I + 1);
            T.drawImage(w, n * x, I * u, n, I, 0, 0, n, I);
            w = T.getImageData(0, 0, n, I);
            T.clearRect(0, 0, n + 1, I + 1);
            T.drawImage(A, 0, 0);
            T = T.getImageData(0, 0, n, I);
            var R = I * n * 4;
            for (A = 0; A < R; A += 4)
                T.data[A] != w.data[A] && (r.data[A] += (T.data[A] - w.data[A]) * k,
                r.data[A + 1] += (T.data[A + 1] - w.data[A + 1]) * d,
                r.data[A + 2] += (T.data[A + 2] - w.data[A + 2]) * f);
            if (95 == y % 100)
                for (h = ~~(h / 100),
                A = 0; 38 > A; ++A)
                    30 != A && Y.putImageData(r, A % 10 * n, I * ~~(A / 10), 0, Q.J[h] * (4 == h ? 0 : 1), n, I - Q.J[h]);
            else
                Y.putImageData(r, n * x, I * u)
        }
        function e() {
            for (var h = 0; h < p.length; ++h) {
                var n = p[h];
                if (n.length) {
                    for (var x = 0; x < n.length && ic[4096 | n[x]].complete; ++x)
                        ;
                    x == n.length && (598 == n[1] || 798 == n[1] ? g(n[0], n[0], 0, 0, n[1]) : 98 == n[1] % 100 ? g(n[0], n[0], 0, 3, n[1]) : 95 == n[1] % 100 && g(n[0], n[0], 5, 3, n[1]),
                    n.splice(0))
                }
            }
        }
        function c(h, n) {
            if (2 == h && 99 == n)
                return ic[4195];
            var x = Q.I[h]
              , u = Q.J[h] + Q.Y[h];
            1 == h && 99 == n && (x = Q.I[0],
            u = Q.J[0] + Q.Y[0]);
            8 == h && 99 == n && (x = Q.I[0],
            u = Q.J[0] + Q.Y[0]);
            var y = 0
              , r = ic[4096 | 100 * h + n];
            r || (r = ic[4096 | 100 * h + n] = Ga(new Image, {
                load: function() {
                    e();
                    kc.Yc()
                },
                error: function() {
                    Tb("IMAGE ONERROR", y++, this.src);
                    10 > y && setTimeout(function() {
                        r.src = r.src
                    }, 2E3)
                }
            }));
            var w = "https://cdn.tenhou.net/5/img/vieww" + (2 == h && 98 == n ? 4 : h) + la(2, n) + la(3, x) + ".png";
            if (x && r.src != w) {
                var A = ic[12288 | 100 * h + n];
                if (99 != n && 95 != n && 98 != n && (!A || A.width != x * (0 == n ? 10 : 1) || A.height != u * (0 == n ? 4 : 1))) {
                    var I = Ma.createElement("CANVAS").getContext("2d");
                    I.canvas.width = x * (0 == n ? 10 : 1);
                    I.canvas.height = u * (0 == n ? 4 : 1);
                    A && I.drawImage(A, 0, 0, A.width, A.height, 0, 0, I.canvas.width, I.canvas.height);
                    ic[12288 | 100 * h + n] = I.canvas
                }
                r.crossOrigin = "Anonymous";
                r.src = w
            }
            A = ic[12288 | 100 * h + n];
            if (!A)
                return r;
            l[100 * h + n] = !0;
            return A
        }
        var b, k = -1, d = -1, f = -1, l = {}, p = [];
        return {
            ik: function() {
                b = la(3, 10 * Kc.iH) + la(3, 10 * Kc.iS) + la(3, 10 * Kc.iV);
                var h = D[B.Va];
                ib && !h && (h = "2");
                switch (h) {
                case "2":
                    h = "https://cdn.tenhou.net/ron2/3/res/bg/bg1_1024x768.png";
                    break;
                case "3":
                    h = "https://cdn.tenhou.net/3/res/img/phx_web_00.jpg";
                    break;
                case "4":
                    h = "https://cdn.tenhou.net/3/res/img/drg_web_00.jpg"
                }
                Rb(h) ? (Pb.hc = !1,
                za.style.background = "url('https://cdn.tenhou.net/4/res/img/1/_bg9_1024x0768_080000.png') center center /cover no-repeat,url('" + h + "') center center /cover no-repeat") : (h && h.match(/^([0-9]{9})$/) && (b = h),
                Pb.hc = !0,
                za.style.background = "url('https://cdn.tenhou.net/4/res/img/1/_bg9_1024x0768_080000.png') center center /cover no-repeat,url('https://cdn.tenhou.net/4/res/img/3/_bg0_1024x0768_" + b + ".jpg') center center /cover no-repeat");
                a(c(5, 48), 0, -1, 1328);
                a(c(7, 48), 0, -1, 1840);
                for (var n = 0; 4 >= n; ++n) {
                    h = c(n, 0);
                    for (var x = 0; 34 > x; ++x) {
                        var u = 10 * (~~(x / 9) + 1) + x % 9 + 1;
                        a(h, u - 10, x, n << 8 | u)
                    }
                    a(h, 0, 4, n << 8 | 51);
                    a(h, 10, 13, n << 8 | 52);
                    a(h, 20, 22, n << 8 | 53)
                }
                h = ic[12288];
                a(h, 30, -1, 48, 560);
                a(h, 38, -1, 49, 561);
                a(h, 39, -1, 50, 562);
                h = ic[12388];
                a(h, 30, -1, 304, 816);
                a(h, 38, -1, 305, 817);
                a(h, 39, -1, 306, 818);
                h = ic[12488];
                a(h, 30, -1, 1584);
                a(h, 38, -1, 60, 572);
                h = ic[12588];
                a(h, 38, -1, 316, 828);
                h = ic[12688];
                a(h, 30, -1, 1084);
                a(h, 38, -1, 1073);
                a(h, 39, -1, 1074);
                for (n = 0; 8 > n; n += 2) {
                    h = c(n, 99);
                    x = Q.I[n] + Q.Y[n];
                    u = 0;
                    if (0 == n || 2 == n)
                        u = ~~(47 * x / 43);
                    if (4 == n || 6 == n)
                        u = ~~(24 * x / 43);
                    var y = ~~(Q.Y[n] / 12 * 5);
                    m(h, 0, 0, x - Q.qb[n], u, n << 8 | 0);
                    m(h, 0, u - y, 2 * y, y, n << 8 | 3, n << 8 | 2)
                }
                n = Q.J[1] + Q.Y[1];
                x = 2 * ~~(47 * (Q.I[0] + Q.Y[0]) / 43);
                u = Q.Y[0] / 12;
                y = Q.Y[0] + ~~(5 * u);
                h = c(8, 99);
                var r = 0;
                m(h, 0, r + x - Q.J[0], y, Q.J[0], 1, 513);
                m(h, 0, r + ~~(17 * u), y, Q.J[0], 5, 517);
                m(h, 0, r, y, Q.J[0] + ~~(12 * u), 4, 516);
                m(h, 0, r + x - Q.J[1], y, Q.J[1], 257, 769, 1281, 1793);
                m(h, 0, r + ~~(17 * u), y, Q.J[1], 261, 773, 1285, 1797);
                m(h, 0, r, y, Q.J[1] + ~~(12 * u), 260, 772, 1284, 1796);
                h = c(1, 99);
                r = 0;
                m(h, 0, r, y, n, 256, 768, 1280, 1792);
                m(h, 0, r + n - ~~(5 * u), 2 * ~~(5 * u), ~~(5 * u), 259, 771, 1283, 1795, 258, 770, 1282, 1794);
                p = [[0, 95], [100, 195], [200, 95], [300, 195], [400, 495], [0, 98], [100, 198], [200, 298], [548, 598], [748, 798]];
                a(c(0, 95), 0, -1, 95);
                a(c(1, 95), 0, -1, 351);
                a(c(4, 95), 0, -1, 1119);
                a(c(0, 98), 0, -1, 98);
                a(c(1, 98), 0, -1, 354);
                a(c(2, 98), 0, -1, 610);
                a(c(5, 98), 0, -1, 1378);
                a(c(7, 98), 0, -1, 1890);
                x = h = n = 0;
                (u = D[B.jd]) && u.match(/^([0-9a-f]{6})$/) && (n = parseInt(u.slice(0, 2), 16) / 255,
                h = parseInt(u.slice(2, 4), 16) / 255,
                x = parseInt(u.slice(4, 6), 16) / 255);
                if (k != n || d != h || f != x)
                    k = n,
                    d = h,
                    f = x,
                    e(),
                    kc.Yc()
            },
            fb: function(h, n, x, u) {
                var y = ic[12288 | 100 * x];
                if (y.height) {
                    var r = Q.I[x]
                      , w = Q.J[x] + Q.Y[x]
                      , A = r * (arguments.length - 4)
                      , I = 1 * w;
                    h.innerHTML = n + "<canvas width=" + A + " height=" + I + " style='width:" + A / cb + "px;height:" + I / cb + "px;pointer-events:none;vertical-align:middle;'></canvas>";
                    A = h.getElementsByTagName("CANVAS")[0].getContext("2d");
                    A.clearRect(0, 0, A.canvas.width + 1, A.canvas.height + 1);
                    A.globalAlpha = u;
                    for (I = 4; I < arguments.length; ++I) {
                        var Y = arguments[I];
                        if (hc.zd(Y)) {
                            var T = 0;
                            Y = ~~(Y / 4 / 9)
                        } else
                            Y = hc.xc[Y],
                            48 == Y && (Y = 40),
                            T = Y % 10,
                            Y = ~~(Y / 10) - 1;
                        A.drawImage(y, T * r, Y * w, r, w, r * (I - 4), 0, r, w)
                    }
                }
            }
        }
    }();
    var Zb = function() {
        function a(f, l) {
            l = l.split(",");
            8 == l.length ? l = [l[(0 + f) % 4 * 2], l[(0 + f) % 4 * 2 + 1], l[(1 + f) % 4 * 2], l[(1 + f) % 4 * 2 + 1], l[(2 + f) % 4 * 2], l[(2 + f) % 4 * 2 + 1], l[(3 + f) % 4 * 2], l[(3 + f) % 4 * 2 + 1]] : 16 == l.length && (l = [l[(0 + f) % 4 * 2], l[(0 + f) % 4 * 2 + 1], l[(1 + f) % 4 * 2], l[(1 + f) % 4 * 2 + 1], l[(2 + f) % 4 * 2], l[(2 + f) % 4 * 2 + 1], l[(3 + f) % 4 * 2], l[(3 + f) % 4 * 2 + 1], l[8 + (0 + f) % 4 * 2], l[(0 + f) % 4 * 2 + 9], l[8 + (1 + f) % 4 * 2], l[(1 + f) % 4 * 2 + 9], l[8 + (2 + f) % 4 * 2], l[(2 + f) % 4 * 2 + 9], l[8 + (3 + f) % 4 * 2], l[(3 + f) % 4 * 2 + 9]]);
            return l.join(",")
        }
        function m(f) {
            if (!c.length)
                return 0;
            g += f;
            if (g < e)
                return 1;
            f = c.shift();
            f.tag ? yc.Sa(f) : e += f;
            return 1
        }
        var g, e, c = [], b = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], k = ["", "", "", ""], d = ["", "", "", ""];
        return {
            Bd: function(f, l) {
                if (!f)
                    return l;
                var p = l.tag
                  , h = p.charCodeAt(1);
                if (1 == p.length || 48 <= h && 57 >= h)
                    h = p.charCodeAt(0),
                    78 == h ? l.who = (4 + ~~l.who - f) % 4 : 68 <= h && 71 >= h ? l.tag = "DEFG".substr((4 + (h - 68) - f) % 4, 1) + p.substr(1) : 84 <= h && 87 >= h && (l.tag = "TUVW".substr((4 + (h - 84) - f) % 4, 1) + p.substr(1));
                else
                    switch (p) {
                    case "UN":
                        p = [l.n0, l.n1, l.n2, l.n3];
                        l.n0 = p[(f + 0) % 4];
                        l.n1 = p[(f + 1) % 4];
                        l.n2 = p[(f + 2) % 4];
                        l.n3 = p[(f + 3) % 4];
                        l.dan && (p = l.dan.split(","),
                        l.dan = p.concat(p.splice(0, f)).join(","));
                        l.rate && (p = l.rate.split(","),
                        l.rate = p.concat(p.splice(0, f)).join(","));
                        l.sx && (p = l.sx.split(","),
                        l.sx = p.concat(p.splice(0, f)).join(","));
                        l.rc && (p = l.rc.split(","),
                        l.rc = p.concat(p.splice(0, f)).join(","));
                        l.gold && (p = l.gold.split(","),
                        l.gold = p.concat(p.splice(0, f)).join(","));
                        break;
                    case "TAIKYOKU":
                    case "KANSEN":
                        l.oya = (4 + ~~l.oya - f) % 4;
                        break;
                    case "REINIT":
                        p = [l.m0, l.m1, l.m2, l.m3],
                        l.m0 = p[(f + 0) % 4],
                        l.m1 = p[(f + 1) % 4],
                        l.m2 = p[(f + 2) % 4],
                        l.m3 = p[(f + 3) % 4],
                        p = [l.kawa0, l.kawa1, l.kawa2, l.kawa3],
                        l.kawa0 = p[(f + 0) % 4],
                        l.kawa1 = p[(f + 1) % 4],
                        l.kawa2 = p[(f + 2) % 4],
                        l.kawa3 = p[(f + 3) % 4];
                    case "INIT":
                        l.oya = (4 + ~~l.oya - f) % 4;
                        p = [l.hai0, l.hai1, l.hai2, l.hai3];
                        l.hai0 = p[(f + 0) % 4];
                        l.hai1 = p[(f + 1) % 4];
                        l.hai2 = p[(f + 2) % 4];
                        l.hai3 = p[(f + 3) % 4];
                        p = l.ten.split(",");
                        l.ten = p.concat(p.splice(0, f)).join(",");
                        void 0 != l.chip && (p = l.chip.split(","),
                        l.chip = p.concat(p.splice(0, f)).join(","));
                        break;
                    case "REACH":
                        l.who = (4 + ~~l.who - f) % 4;
                        l.ten && (p = l.ten.split(","),
                        l.ten = p.concat(p.splice(0, f)).join(","));
                        break;
                    case "RYUUKYOKU":
                        p = [l.hai0, l.hai1, l.hai2, l.hai3];
                        l.hai0 = p[(f + 0) % 4];
                        l.hai1 = p[(f + 1) % 4];
                        l.hai2 = p[(f + 2) % 4];
                        l.hai3 = p[(f + 3) % 4];
                        l.sc = a(f, l.sc);
                        void 0 != l.owari && (l.owari = a(f, l.owari));
                        break;
                    case "AGARI":
                        l.who = (4 + ~~l.who - f) % 4;
                        l.fromWho = (4 + ~~l.fromWho - f) % 4;
                        void 0 != l.paoWho && (l.paoWho = (4 + ~~l.paoWho - f) % 4);
                        l.sc = a(f, l.sc);
                        void 0 != l.owari && (l.owari = a(f, l.owari));
                        break;
                    case "VOICE":
                        p = l.type;
                        l.type = p.concat(p.splice(0, f));
                        break;
                    case "BYE":
                        l.who = (4 + ~~l.who - f) % 4
                    }
                if (l.childNodes)
                    for (p = l.childNodes,
                    h = 0; h < p.length; ++h)
                        p[h].tag && Zb.Bd(f, p[h]);
                return l
            },
            eh: function(f) {
                if (f = f.childNodes) {
                    lc.oa = !0;
                    for (var l = 0; l < f.length; ++l)
                        yc.Sa(Yb.Zc(f[l]));
                    yc.Sa({
                        tag: "INITBYLOG"
                    })
                } else
                    lc.oa = !1;
                return 1
            },
            Vj: function(f) {
                pb().tk || (g = e = 0,
                pb().tk = m);
                f = f.childNodes;
                for (var l = 0; l < f.length; ++l)
                    f[l].tag && Yb.Zc(f[l]);
                Array.prototype.push.apply(c, f);
                return 1
            },
            dk: function() {
                for (var f = 0; f < b.length; ++f)
                    b[f] = 0;
                for (f = 0; 4 > f; ++f)
                    d[f] = k[f] = ""
            },
            va: function() {
                for (; c.length; )
                    c.pop()
            },
            Cd: function(f, l) {
                f && (f = ~~l,
                4 == f ? L.u[14] = !L.u[14] : 4 > f && (Pb.tw = (Pb.tw + f) % 4));
                Zb.va();
                z.va();
                yc.Pc();
                f = D[B.Gb] || "M";
                ib ? yc.R({
                    tag: "HELO",
                    tsssessionid: D[B.Ma],
                    sx: f
                }) : yc.R({
                    tag: "HELO",
                    name: D[B.fa] || "NoName",
                    sx: f
                })
            },
            Bg: function(f) {
                var l = "" + q[48 | f];
                if (d[f] != l && (d[f] = l,
                q[64 | f] = aa.uc(q[48 | f], q[80 | f]),
                l = "" + q[64 | f],
                k[f] != l)) {
                    k[f] = l;
                    for (f = 0; f < b.length; ++f)
                        b[f] = 0;
                    for (l = 0; 4 > l; ++l)
                        if (q[64 | l])
                            for (f = 0; f < q[64 | l].length; ++f)
                                b[q[64 | l][f]] = 1;
                    for (f = 0; f < U.Xa.length; ++f)
                        l = U.Xa[f],
                        l.s && l.Ha && l.Ha(~X.mb, b[l.s.Ee] ? X.mb : X.NONE, !0)
                }
            },
            Cg: function(f) {
                f.s && f.Ha && f.Ha(~X.mb, b[f.s.Ee] ? X.mb : X.NONE, !0)
            }
        }
    }();
    Da(P, function() {
        var a = [], m, g = {
            SPLASH: 1,
            LOGIN: 1,
            LOBBY: 1,
            STORE: 1
        };
        return {
            b: null,
            o: function(e, c) {
                if (P.b)
                    "RYUUKYOKU" == m.tag && "OWARI" == e.tag || "AGARI" == m.tag && "OWARI" == e.tag || "AGARI" == m.tag && "AGARI" == e.tag ? a.push(e) : P.qa(e, c);
                else {
                    m = e;
                    e = P.b = ya("div", za, "tbc", {
                        innerHTML: "<div></div>"
                    }, {
                        position: "relative",
                        textAlign: "center",
                        verticalAlign: "middle"
                    });
                    if (Pc[m.tag]) {
                        var b = Pc[m.tag].ya;
                        if (b)
                            for (var k = 0; k < b.length; ++k)
                                e.classList.toggle(b[k], !0);
                        if (b = Pc[m.tag].wa)
                            Qa.style.background = b
                    }
                    P.aa();
                    P[m.tag](m, e.firstChild);
                    c && c()
                }
            },
            aa: function() {
                if (P.b) {
                    var e = ~~(Q.I[1] / cb);
                    if (e) {
                        g[m.tag] && (e = 0);
                        var c = P.b.style;
                        c.paddingLeft = e + "px";
                        c.paddingRight = ~~(za.offsetWidth - Q.lb / cb + e) + "px"
                    }
                }
            },
            qa: function(e, c) {
                function b() {
                    for (var k in Z)
                        delete Z[k];
                    P.b && (rb(P.b),
                    P.b.parentNode.removeChild(P.b),
                    P.b = null,
                    Z = {});
                    e instanceof Function ? e() : e && P.o(e);
                    Bc.jc && Bc.jc();
                    c && c()
                }
                P.b && "none" != P.b.style.display ? (Da(P.b.style, {
                    transition: "all 250ms ease-out 0ms",
                    opacity: "0"
                }),
                sb(P.b, b)) : b()
            },
            va: function() {
                a = []
            },
            nop: function() {},
            ok: function(e) {
                Qb(!0, "ok");
                rc.qa();
                if (a.length)
                    P.qa(a.shift());
                else if ("TRAINING" == m.tag)
                    P.pk(e);
                else if ("SPLASH" == m.tag)
                    L.Na(11);
                else if ("LOGIN" == m.tag || "AUTOLOGIN" == m.tag) {
                    var c = D[B.Gb] || "M";
                    D[B.Lb] ? (ib ? yc.R({
                        tag: "HELO",
                        tsssessionid: D[B.Ma],
                        sx: c,
                        gpid: D[B.Lb]
                    }) : yc.R({
                        tag: "HELO",
                        name: D[B.fa] || "NoName",
                        sx: c,
                        gpid: D[B.Lb]
                    }),
                    D.removeItem(B.Lb)) : ib ? "AUTOLOGIN" == m.tag && D[B.Ma] ? yc.R({
                        tag: "HELO",
                        tsssessionid: D[B.Ma],
                        sx: c
                    }) : Vb.o("<table align=center cellpadding=0 cellspacing=0 style='padding:auto;'><tr><td align=right>Email:</td><td align=left><input name=email placeholder=\"メールアドレス\" style='font-size:100%;' value='" + (D[B.Ma] ? "######@###########" : "") + "'/></td></tr><tr><td align=right>Password:</td><td align=left><input type=password name=password placeholder=\"パスワード\" style='font-size:100%;' value='" + (D[B.Ma] ? "##########" : "") + "'/></td></tr><tr><td align=right>Voice:</td><td align=left><input id=sxm class=radio type=radio name=sx value=M " + ("F" != c ? "checked" : "") + "/><label class=radio for=sxm>" + J(F.qf) + "</label><input id=sxf class=radio type=radio name=sx value=F " + ("F" == c ? "checked" : "") + "/><label class=radio for=sxf>" + J(F.pf) + "</label></td></tr></table>", 3, function(b) {
                        b = b.getElementsByTagName("INPUT");
                        var k = b[0].value
                          , d = b[1].value;
                        b[2].checked ? (D.removeItem(B.Gb),
                        c = "M") : D[B.Gb] = c = "F";
                        if ("######@###########" == k && "##########" == d)
                            yc.R({
                                tag: "HELO",
                                tsssessionid: D[B.Ma],
                                sx: c
                            });
                        else {
                            if (!k && !d)
                                return yc.R({
                                    tag: "HELO",
                                    sx: c
                                });
                            Nb("//ron2.jp/3/member/", "email=" + encodeURIComponent(k) + "&password=" + encodeURIComponent(d), function(f) {
                                if (f || !this.response.match(/^tsssessionid=([0-9a-f]{32})$/))
                                    return z.ERR({
                                        code: 1029
                                    });
                                D[B.Ma] = RegExp.$1;
                                yc.R({
                                    tag: "HELO",
                                    tsssessionid: D[B.Ma],
                                    sx: c
                                })
                            })
                        }
                    }, function() {
                        Qb(!1, 0)
                    }) : yc.R({
                        tag: "HELO",
                        name: D[B.fa] || "NoName",
                        sx: c
                    });
                    Qb(!0, 0)
                } else
                    "OWARI" == m.tag ? (2 != z.a || Pb.Vc || delete Pb.wg,
                    L.Na(495623)) : "NINTEI" == m.tag ? P.wd() : (1 == z.a && yc.R({
                        tag: "NEXTREADY"
                    }),
                    3 == z.a && Yb.ec(1))
            },
            lang: function() {
                var e = "", c;
                for (c in tb.Pb)
                    e += "<div class=A id='#lang-" + c + "'>" + c + "</div>";
                Vb.ia(e, "", 0)
            },
            "#lang": function(e, c) {
                var b = tb.wc();
                e = e ? c : tb.wc();
                Uc.firstChild.innerHTML = e;
                tb.wc(e);
                b != e && location.reload()
            },
            cfg: function() {
                yc.Pc();
                P.o({
                    tag: "CONFIG"
                })
            },
            exit: function() {
                L.Na(495623)
            }
        }
    }());
    Da(P, function() {
        function a(b, k) {
            return b ? "<span style='color:" + (0 < b ? "#0FF" : "#F00") + ";'>" + (0 < b ? "+" : "") + b + (void 0 != k ? k : "") + "</span>" : ""
        }
        function m(b) {
            for (var k = b.sc ? qa(b.sc) : [], d = ["", "", "", ""], f = 0; 4 > f; ++f)
                d[f] += "<span style='font-weight:bold;color:#888;'>" + z.Sc[f] + "</span> ",
                k.length || (d[f] += (ib ? "" : fa.$a[z.tc[f]]) + (ib || 1800 <= z.rate[f] ? " <span style='color:#888;'>R</span>" + ~~z.rate[f] : "") + "<br>"),
                d[f] += "<span class=popup_un" + f + " style='font-weight:bold;color:#CCC;'>" + Ca(z.O[f]) + "</span><br>";
            f = 2.4;
            if (8 == k.length || 16 == k.length)
                d[0] += k[0] + "<span style='font-size:80%;opacity:0.70;'>00</span>" + (k[1] ? " " + a(k[1], "<span style='font-size:80%;opacity:0.70;'>00</span>") : ""),
                d[1] += k[2] + "<span style='font-size:80%;opacity:0.70;'>00</span>" + (k[3] ? " " + a(k[3], "<span style='font-size:80%;opacity:0.70;'>00</span>") : ""),
                d[2] += k[4] + "<span style='font-size:80%;opacity:0.70;'>00</span>" + (k[5] ? " " + a(k[5], "<span style='font-size:80%;opacity:0.70;'>00</span>") : ""),
                d[3] += k[6] + "<span style='font-size:80%;opacity:0.70;'>00</span>" + (k[7] ? " " + a(k[7], "<span style='font-size:80%;opacity:0.70;'>00</span>") : "");
            16 == k.length && (++f,
            d[0] += "<br>" + k[8] + "枚" + (k[9] ? " " + a(k[9], "枚") : ""),
            d[1] += "<br>" + k[10] + "枚" + (k[9] ? " " + a(k[11], "枚") : ""),
            d[2] += "<br>" + k[12] + "枚" + (k[9] ? " " + a(k[13], "枚") : ""),
            d[3] += "<br>" + k[14] + "枚" + (k[9] ? " " + a(k[15], "枚") : ""));
            k = "";
            b.ba && (k = qa(b.ba),
            k = K("") + k[0] + " " + K("") + k[1]);
            return "<table cellpadding=0 cellspacing=0 style='margin:0.5em 0;width:100%;text-align:center;'><tr><td rowspan=1 style='width:33%;height:" + f / 2 + "em;font-family:icons2,sans-serif;'>" + k + "</td><td rowspan=2 style='width:34%;'><div id=sc02 style='height:" + f + "em;padding:0.2em 0;'" + (z.O[2] ? " class=bbg5>" + d[2] : "'>") + "</div></td><td rowspan=1 style='width:33%;height:" + f / 2 + "em;' class=gray>" + t.Aa(z.H, ib) + "</td></tr><tr><td rowspan=2><div id=sc03 style='height:" + f + "em;padding:0.2em 0;'" + (z.O[3] ? " class=bbg5>" + d[3] : "'>") + "</div></td><td rowspan=2><div id=sc01 style='height:" + f + "em;padding:0.2em 0;'" + (z.O[1] ? " class=bbg5>" + d[1] : "'>") + "</div></td></tr><tr><td rowspan=2><div id=sc00 style='height:" + f + "em;padding:0.2em 0;'" + (z.O[0] ? " class=bbg5>" + d[0] : "'>") + "</div></td></tr><tr><td rowspan=1 id=d34 style='height:" + f / 2 + "em;'></td><td rowspan=1 id=d35 style='height:" + f / 2 + "em;'></td></tr></table>"
        }
        function g(b, k) {
            return z.O[k].length ? "<tr><td align=center class=bbg5 style='padding:0.5em;'>" + Ca(z.O[k]) + "<table cellpadding=0 cellspacing=0 align=center><tr><td align=right style='width:6em;'>" + b[2 * k] + "<span style='font-size:80%;opacity:0.70;'>00</span></td><td align=right style='width:5em;'>" + a(b[2 * k + 1].toFixed(1)) + "</td>" + (16 == b.length ? "<td align=right style='width:4em;'>" + a(b[2 * k + 8], "枚") + "</td>" : "") + "<td style='width:3em;'></td></tr></table></td></tr>" : ""
        }
        function e(b, k) {
            for (var d, f = 0; d = Z["yaku" + f]; ++f)
                d.childNodes[0].style.opacity = d.childNodes[1].style.opacity = 0;
            Z.sc00.style.opacity = Z.sc01.style.opacity = Z.sc02.style.opacity = Z.sc03.style.opacity = Z.total.style.opacity = 0;
            Z.ok.disabled = !0;
            var l = !!b.doraHaiUra;
            l && (Z.d35.style.opacity = 0);
            var p = !!b.yakuman
              , h = -(p ? 3E3 : 750)
              , n = 0;
            pb().Zm = function(x) {
                if (0 > h)
                    return h += x,
                    0 < h && (h = 0),
                    1;
                0 == h && Xb(p && 0 == n ? O.cd : O.Rf, 0, 0);
                var u = Math.min(1, h / (p ? 3E3 : 600))
                  , y = Z["yaku" + n];
                y.childNodes[0].style.opacity = y.childNodes[1].style.opacity = u;
                n == f - 1 && (l && (Z.d35.style.opacity = u),
                Z.sc00.style.opacity = Z.sc01.style.opacity = Z.sc02.style.opacity = Z.sc03.style.opacity = Z.total.style.opacity = u);
                h += x;
                1 == u && (n++,
                h = -(~z.H & t.Ob && l && n == f - 1 ? 1200 : 250));
                return n < f ? 1 : (k(),
                0)
            }
        }
        var c = {
            TAIKYOKU: "對局",
            SAIKAI: "再開",
            KANSEN: "觀戰"
        };
        return {
            TAIKYOKU: function(b, k) {
                var d = "TAIKYOKU" == b.tag;
                k.innerHTML = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>" + c[b.tag] + "</div>" + m(b) + (d ? "<button name=ok style='padding:0 2em;'>OK</button>" : "<button disabled>" + decodeURIComponent(b.msg || "WAIT") + "</button>");
                Oc(k);
                d && rc.o(-z.$c - 5E3)
            },
            AGARI: function(b, k) {
                var d = "";
                Xb(O.oe, 0, 0);
                b.ten = qa(b.ten);
                b.chip = qa(b.chip);
                for (var f = b.who != b.fromWho, l = 0, p = 0; p < b.chip.length; p += 2)
                    l += b.chip[p + 1];
                l = l ? l + K(f ? "枚" : "枚∀") : "";
                var h;
                f ? h = b.ten[1] + K("点") : z.H & t.c && z.ka[0] & t.Bb.ij ? h = ~~(b.ten[1] / 2) + "点∀" : h = fa.Fg[(z.H & t.c ? 0 : 2) + (z.Fa == b.who ? 1 : 0)][b.ten[1]] + K(z.Fa == b.who ? "点∀" : "点");
                d += "<div id=total style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:250%;'>";
                var n = [];
                if (b.yakuman) {
                    b.yakuman = qa(b.yakuman);
                    d += K("役滿") + h + l;
                    for (p = 0; p < b.yakuman.length; p += 1)
                        n.push([fa.ze[b.yakuman[p]], 2 * p < b.chip.length ? b.chip[2 * p + 1] + K("枚") : ""]);
                    for (p *= 2; p < b.chip.length; p += 2)
                        n.push([fa.ze[b.chip[p]], b.chip[p + 1] + K("枚")])
                } else {
                    b.yaku = qa(b.yaku);
                    var x = fa.je[b.ten[2]]
                      , u = 0;
                    for (p = 0; p < b.yaku.length; p += 2)
                        u += b.yaku[p + 1];
                    if (30 == b.ten[0] && 4 == u || 60 == b.ten[0] && 3 == u)
                        !f && z.H & t.c ? b.ten[1] == (z.Fa == b.who ? 8E3 : 6E3) && (x = fa.je[1]) : b.ten[1] == (z.Fa == b.who ? 12E3 : 8E3) && (x = fa.je[1]);
                    ~z.H & t.Ob && (d += (x ? "" : b.ten[0] + K("符") + u + K("飜")) + K(x) + h + l);
                    for (f = p = 0; p < b.yaku.length; p += 2)
                        l = b.yaku[p + 1] + K(z.H & t.Ob ? "点" : "飜"),
                        f < b.chip.length && b.yaku[p] == b.chip[f] && (l += b.chip[f + 1] + K("枚"),
                        f += 2),
                        n.push([fa.ze[b.yaku[p]], l])
                }
                d += "</div><table cellpadding=0 cellspacing=0 style='width:100%;font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:150%;'><tr>";
                p = 4 > n.length ? 0 : Math.ceil(n.length / 2);
                for (f = 0; f < n.length; ++f) {
                    if (0 == f || f == p)
                        d += "<td width=50% align=center valign=top><table cellpadding=0 cellspacing=0>";
                    d += "<tr id=yaku" + f + ">";
                    d += "<td align=left style='position:relative;'>" + n[f][0] + "</td>";
                    d += "<td align=left style='position:relative;'>　" + n[f][1] + "</td>";
                    d += "</tr>";
                    if (f == p - 1 || f == n.length - 1)
                        d += "</table></td>"
                }
                d += "</tr></table>";
                n = qa(b.doraHai);
                for (p = b.doraHaiUra ? qa(b.doraHaiUra) : []; 5 > n.length; )
                    n.push(136);
                for (; 5 > p.length; )
                    p.push(136);
                d += m(b) + "<button name=ok style='padding:0 2em;'>OK</button>";
                k.innerHTML = d;
                Oc(k);
                ic.fb(Z.d34, "", 0, 1, n[0], n[1], n[2], n[3], n[4]);
                ic.fb(Z.d35, "", 0, 1, p[0], p[1], p[2], p[3], p[4]);
                3 != z.a && e(b, function() {
                    Z.ok.disabled = !1;
                    if (!b.owari) {
                        var y = (z.H & t.B ? 7 : 3) - (z.H & t.c ? 1 : 0);
                        rc.o(0 == z.ha[0] && 0 == z.ha[1] ? -z.$c : y <= z.ha[0] ? -z.Gd : -z.Fd)
                    }
                })
            },
            RYUUKYOKU: function(b, k) {
                k.innerHTML = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>" + (b.type ? fa.Sf[b.type] : "流局") + "</div>" + m(b) + "<button name=ok style='padding:0 2em;'>OK</button>";
                Oc(k);
                2 != z.a || b.owari || (Z.ok.disabled = !0);
                b.owari || (b = (z.H & t.B ? 7 : 3) - (z.H & t.c ? 1 : 0),
                rc.o(0 == z.ha[0] && 0 == z.ha[1] ? -z.$c : b <= z.ha[0] ? -z.Gd : -z.Fd))
            },
            OWARI: function(b, k) {
                z.va();
                jc.na();
                b = ta(b.sc);
                for (var d = [0, 1, 2, 3], f = 1; 4 > f; ++f)
                    if (!(b[2 * d[f - 1] + 1] >= b[2 * d[f] + 1])) {
                        var l = d[f];
                        d[f] = d[f - 1];
                        d[f - 1] = l;
                        f = 0
                    }
                b = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>終局</div><table cellpadding=0 cellspacing=0 width=75% align=center style='text-align:center;margin-top:1m;margin-bottom:0.5em;'>" + g(b, d[0]) + g(b, d[1]) + g(b, d[2]) + g(b, d[3]) + "</table>";
                k.innerHTML = b + "<button name=ok style='padding:0 2em;'>OK</button>";
                Oc(k);
                P.b.style.opacity = "0";
                qb(function() {
                    Da(P.b.style, {
                        transition: "all 1500ms ease-out 0ms",
                        opacity: ""
                    });
                    sb(P.b, rb)
                }, 1)
            }
        }
    }());
    P.KANSEN = P.SAIKAI = P.TAIKYOKU;
    Da(P, function() {
        function a(d) {
            var f = Ja("#a29").childNodes
              , l = f.length;
            b = (b + d + l) % l;
            for (d = 0; d < l; ++d)
                f[d].style.display = d == b ? "" : "none";
            Ja("#a30").innerHTML = f[b].firstChild.innerHTML + K(" / " + J(F.oj))
        }
        function m(d) {
            B.Ua(B.ee, ~~d.target.checked, 0)
        }
        function g() {
            Ja("#cfgDefaultSE").checked ? (Z.cfgUseDefaultSE0.style.display = "none",
            Z.cfgSE.value = "",
            e()) : Z.cfgUseDefaultSE0.style.display = ""
        }
        function e() {
            var d = Z.cfgSE.value;
            Sb(d) ? (D[B.oc] = d,
            Gc()) : (D.removeItem(B.oc),
            Gc(),
            d && Vb.o(J(F.Tf)))
        }
        function c(d) {
            B.Ua(B.Sd, ~~d.target.checked, 0)
        }
        var b = 0
          , k = va(function() {
            hc.a = ~~D[B.eb];
            0 == hc.a && D[B.Ia] && (hc.a = 1);
            ec();
            z.va();
            z.connected = 15;
            for (var d = [], f = ~~(Date.now() / 1E3), l = 0; 65 > l; ++l)
                d.push((f + l) % 34 * 4 + (f & 1));
            f = [0, 1, 14, 22][f % 4];
            z.H = 1;
            z.UN({
                tag: "UN",
                n0: "COM",
                n1: "COM",
                n2: "COM",
                n3: "COM",
                sx: ",,,"
            });
            z.Ea({
                tag: "REINIT",
                seed: "2,1,1," + ~~(6 * Math.random()) + "," + ~~(6 * Math.random()) + "," + ~~(137 * Math.random()),
                ten: "123,234,345,456",
                oya: "0",
                hai0: d.slice(0, 10).join(","),
                hai1: d.slice(13, 23).join(","),
                hai2: d.slice(26, 36).join(","),
                hai3: d.slice(39, 49).join(","),
                m0: "27905",
                m1: "28929",
                m2: "29953",
                m3: "30977",
                kawa0: d.slice(26, 26 + f).join(","),
                kawa1: d.slice(39, 39 + f).join(","),
                kawa2: d.slice(0, 0 + f).join(","),
                kawa3: d.slice(13, 13 + f).join(",")
            });
            U.aa();
            D[B.Ia] & 1 ? (L.b.style.display = "",
            L[1572868].innerHTML = "",
            L.ta(126976)) : L.b.style.display = "none"
        }, 1);
        return {
            CONFIG: function(d, f) {
                Vc.style.display = "none";
                k();
                d = "<div id=a30 style='font-size:125%;pointer-events:none;'>　</div><hr><div id=a29 style='height:12em;'><div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + (J(F.qj) + "</span><span class=bth>" + J(F.tj) + ":</span><div class=select-wrapper><button name=sco></button></div><br>" + K(J(F.Gj)) + "<br><br><input class=checkboxt type=checkbox id=cfgSelShowID /><label class=bth for=cfgSelShowID>" + J(F.nj) + "</label><br>" + K(J(F.Dj)) + "<br></div>");
                d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + J(F.Uf) + "</span><span class=bth>" + J(F.kj) + ":</span><div class=select-wrapper><button name=cpt></button></div><br>" + K(J(F.Bj)) + "<br><br><span class=bth>" + J(F.pj) + ":</span><div class=select-wrapper><button name=dtp></button></div><br>" + K(J(F.Cj)) + "<br></div>";
                d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + J(F.Uf) + "</span><span class=bth>" + J(F.rj) + ":</span><div class=select-wrapper><button name=lth></button></div><br>" + K(J(F.Ej)) + "<br><br><br><span class=bth>" + J(F.xj) + ":</span><div class=select-wrapper><button name=yam></button></div><br></div>";
                d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + J(F.uj) + "</span><br><input class=checkboxt type=checkbox id=cfgDefaultSE /><label class=bth for=cfgDefaultSE>" + J(F.mj) + "</label> <div class=select-wrapper><button name=sevol></button></div><br><br><div id=cfgUseDefaultSE0>" + J(F.vj) + "<input name=cfgSE style='width:100%;font-size:125%;'/><br></div></div>";
                d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + J(F.yj) + "</span><br><div class=select-wrapper><button name=tblimg></button></div><br><br><div id=cfgUseDefaultIMG0>" + J(F.zj) + ":" + K("(.jpg|.png|.gif)") + "<input name=cfgBGIMG style='width:100%;font-size:125%;' placeHolder='https://your.domain.com/file.(jpg|png|gif)'/><br></div><div id=cfgUseDefaultIMG1><div class=select-wrapper><button name=iH style='width:4em;'></button></div><div class=select-wrapper><button name=iS style='width:4em;'></button></div><div class=select-wrapper><button name=iV style='width:4em;'></button></div><br></div></div>";
                d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + J(F.Aj) + "</span><br><br><div class=bth>" + J(F.Ij) + ":</div><div class=select-wrapper><button name=hR style='width:4em;'></button></div><div class=select-wrapper><button name=hG style='width:4em;'></button></div><div class=select-wrapper><button name=hB style='width:4em;'></button></div><br>" + K(J(F.Fj)) + "<br></div>";
                ib && (d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>スキンβ</span><br><br><div class=select-wrapper><button name=skin></button></div><br><br>※予告なく仕様が変更される場合があります<br></div>");
                d += "<div style='display:none;padding:0.5em;text-align:left;'><span style='display:none;'>" + J(F.sj) + "</span><br><input class=checkboxt type=checkbox id=cfgDefaultAutoWin /><label class=bth for=cfgDefaultAutoWin>" + J(F.lj) + "</label> <br><br></div>";
                f.innerHTML = d + "</div><hr><button name=cfgPrev class=ra1 style='width:33%;'>&laquo;</button><button name=cfgNext class=ra2 style='width:33%;'>&raquo;</button><button name=cfgClose style='width:34%;'>CLOSE</button>";
                Oc(f);
                Ja("#cfgSelShowID").checked = !!D[B.ee];
                Z.sco.disabled = !Ra;
                Fa(Z.cfgSE, "change", e);
                Fa(Ja("[name=cfgBGIMG]"), "change", P["#iV"]);
                Fa(Ja("#cfgSelShowID"), "change", m);
                Fa(Ja("#cfgDefaultSE"), "change", g);
                Fa(Ja("#cfgDefaultAutoWin"), "change", c);
                D[B.oc] ? Z.cfgSE.value = D[B.oc] : Ja("#cfgDefaultSE").checked = !0;
                Rb(D[B.Va]) && (Ja("[name=cfgBGIMG]").value = D[B.Va]);
                Ja("#cfgDefaultAutoWin").checked = !!D[B.Sd];
                P["#sco"]();
                P["#yam"]();
                P["#sevol"]();
                P["#tblimg"]();
                P["#cpt"]();
                P["#hB"]();
                P["#iV"]();
                P["#dtp"]();
                P["#lth"]();
                if (ib)
                    P["#skin"]();
                a(0);
                g()
            },
            sco: function() {
                Vb.ia("<div class=A id='#sco-0'>" + J(F.sd)[0] + "</div><div class=A id='#sco-1'>" + J(F.sd)[1] + "</div><div class=A id='#sco-2'>" + J(F.sd)[2] + "</div>", "", 0)
            },
            "#sco": function(d, f) {
                var l = D[B.ve];
                d = ~~(d ? f : l);
                B.Ua(B.ve, d, 0);
                Ra && Oa.screen.orientation.lock && Oa.screen.orientation.lock(1 == d ? "portrait" : 2 == d ? "landscape" : "any");
                Z.sco.innerHTML = J(F.sd)[d]
            },
            yam: function() {
                Vb.ia("<div class=A id='#yam-0'>" + J(F.bb)[0] + "</div><div class=A id='#yam-1'>" + J(F.bb)[1] + "</div><div class=A id='#yam-2'>" + J(F.bb)[2] + "</div>", "", 0)
            },
            "#yam": function(d, f) {
                var l = D[B.eb];
                d = ~~(d ? f : l);
                B.Ua(B.eb, d, 0);
                Z.yam.innerHTML = J(F.bb)[d];
                l != d && k()
            },
            sevol: function(d) {
                for (var f = "", l = ~~(D[B.sb] || 5), p = 0; 10 >= p; ++p)
                    f += "<div class='A" + (p == l ? " _selected_" : "") + "' id='#" + d.name + "-" + p + "'>" + p + (0 == p ? "<div class=desc>(off)</div>" : 5 == p ? "<div class=desc>(default)</div>" : "") + "</div>";
                Vb.ia(f, "", 0)
            },
            "#sevol": function(d, f) {
                var l = ~~(D[B.sb] || 5);
                l = ~~(d ? f : l);
                B.Ua(B.sb, l, 5);
                Z.sevol.innerHTML = J(F.wj) + ":" + l;
                Fc();
                arguments.length && Xb(O.Fb, 0, 0)
            },
            hB: function(d) {
                for (var f = "iH" == d.name ? 36 : 16, l = ~~Z[d.name].innerText.substr(2), p = "", h = 0; h < f; ++h)
                    p += "<div class='A" + (h == l ? " _selected_" : "") + "' id='#" + d.name + "-" + h + "'>" + h + (h == Kc[d.name] ? "<div class=desc>(default)</div>" : "") + "</div>";
                Vb.ia(p, "", 0)
            },
            "#iV": function(d, f) {
                var l = D[B.Va] || "";
                if (Ja("#cfgUseDefaultIMG1").style.display)
                    if (Ja("#cfgUseDefaultIMG0").style.display)
                        l.match(/^\d$/) || (D.removeItem(B.Va),
                        l = "2"),
                        Z.tblimg.innerHTML = J(F.qd) + l;
                    else {
                        var p = Ja("[name=cfgBGIMG]").value;
                        p ? Rb(p) ? D[B.Va] = p : d && d.target == Ja("[name=cfgBGIMG]") && Vb.o(J(F.Tf)) : D.removeItem(B.Va)
                    }
                else {
                    var h = la(3, 10 * Kc.iH) + la(3, 10 * Kc.iS) + la(3, 10 * Kc.iV)
                      , n = l && l.match(/^\d{9}$/) ? l : h;
                    p = ~~n.substr(0, 3);
                    var x = ~~n.substr(3, 3)
                      , u = ~~n.substr(6, 3);
                    if (d)
                        switch (f = 10 * ~~f,
                        d) {
                        case "#iH":
                            p = f;
                            break;
                        case "#iS":
                            x = f;
                            break;
                        case "#iV":
                            u = f
                        }
                    n = la(3, p) + la(3, x) + la(3, u);
                    D[B.Va] = n;
                    Z.iH.innerHTML = K("H:") + ~~(p / 10);
                    Z.iS.innerHTML = K("S:") + ~~(x / 10);
                    Z.iV.innerHTML = K("V:") + ~~(u / 10)
                }
                D[B.Va] == (ib ? 2 : h) && D.removeItem(B.Va);
                l != D[B.Va] && ec()
            },
            "#hB": function(d, f) {
                var l = D[B.jd]
                  , p = l || "000000"
                  , h = parseInt(p.substr(0, 2), 16)
                  , n = parseInt(p.substr(2, 2), 16)
                  , x = parseInt(p.substr(4, 2), 16);
                if (d)
                    switch (f = 17 * ~~f,
                    d) {
                    case "#hR":
                        h = f;
                        break;
                    case "#hG":
                        n = f;
                        break;
                    case "#hB":
                        x = f
                    }
                p = la(2, h.toString(16)) + la(2, n.toString(16)) + la(2, x.toString(16));
                B.Ua(B.jd, p, "000000");
                Z.hR.innerHTML = K("R:") + ~~(h / 17);
                Z.hG.innerHTML = K("G:") + ~~(n / 17);
                Z.hB.innerHTML = K("B:") + ~~(x / 17);
                l != D[B.jd] && ec()
            },
            tblimg: function() {
                Vb.ia("<div class=A id='#tblimg-1'>" + J(F.qd) + "1</div>" + (ib ? "<div class=A id='#tblimg-2'>" + J(F.qd) + "2</div>" : "") + "<div class=A id='#tblimg-0'>URL</div>", "", 0)
            },
            "#tblimg": function(d, f) {
                var l = ib ? 2 : 1
                  , p = D[B.Va] || "";
                Rb(p) ? l = 0 : p.match(/^\d{9}$/) ? l = 1 : p.match(/^\d$/) && (l = ~~p);
                d = ~~(d ? f : l);
                Ja("#cfgUseDefaultIMG0").style.display = 0 == d ? "" : "none";
                Ja("#cfgUseDefaultIMG1").style.display = 1 == d ? "" : "none";
                Z.tblimg.innerHTML = 0 == d ? "URL" : J(F.qd) + d;
                if (2 > d)
                    P["#iV"]();
                else
                    B.Ua(B.Va, d, ib ? "2" : ""),
                    ec()
            },
            cpt: function() {
                Vb.ia("<div class=A id='#cpt-0'>" + J(F.rd)[0] + "</div><div class=A id='#cpt-1'>" + J(F.rd)[1] + "</div><div class=A id='#cpt-2'>" + J(F.rd)[2] + "</div>", "", 0)
            },
            "#cpt": function(d, f) {
                d = ~~(d ? f : D[B.$d]);
                B.Ua(B.$d, d, 0);
                qc.aa();
                Z.cpt.innerHTML = J(F.rd)[d]
            },
            dtp: function() {
                Vb.ia("<div class=A id='#dtp-0'>" + J(F.bb)[0] + "</div><div class=A id='#dtp-1'>" + J(F.bb)[1] + "</div><div class=A id='#dtp-2'>" + J(F.bb)[2] + "</div>", "", 0)
            },
            "#dtp": function(d, f) {
                var l = D[B.Ia];
                3 == l && (l = 0);
                d = ~~(d ? f : l);
                Z.dtp.innerHTML = J(F.bb)[d];
                0 == d && Ob && (d = 3);
                B.Ua(B.Ia, d, 0);
                l != d && k()
            },
            lth: function() {
                Vb.ia("<div class=A id='#lth-0'>" + J(F.bb)[0] + "</div><div class=A id='#lth-1'>" + J(F.bb)[1] + "</div><div class=A id='#lth-2'>" + J(F.bb)[2] + "</div>", "", 0)
            },
            "#lth": function(d, f) {
                var l = D[B.ie];
                d = ~~(d ? f : l);
                B.Ua(B.ie, d, 0);
                Z.lth.innerHTML = J(F.bb)[d];
                l != d && k()
            },
            skin: function() {
                Vb.ia("<div class=A id='#skin-none'>なし</div><div class=A id='#skin-takamiya20221224'>高宮プロ(βテスト版)</div>", "", 0)
            },
            "#skin": function(d, f) {
                var l = D[B.td] || "takamiya20221224";
                d = d ? f : l;
                B.Ua(B.td, d, "takamiya20221224");
                Z.skin.innerHTML = "takamiya20221224" == d ? "高宮プロ(βテスト版)" : "なし";
                l != d && Vb.o(J(F.Hj), 3, function() {
                    location.reload()
                })
            },
            cfgPrev: function() {
                a(-1)
            },
            cfgNext: function() {
                a(1)
            },
            cfgClose: function() {
                P.o({
                    tag: "AUTOLOGIN"
                })
            }
        }
    }());
    P["#iH"] = P["#iS"] = P["#iV"];
    P.iH = P.iS = P.iV = P.hR = P.hG = P.hB;
    P["#hR"] = P["#hG"] = P["#hB"];
    Da(P, function() {
        function a() {
            for (var e = [], c = ~~D[B.hd], b = 0; 40 > b; ++b) {
                var k = (c + 40 - 1 - b) % 40;
                try {
                    e.push(JSON.parse(D["log" + k]))
                } catch (d) {}
            }
            return e
        }
        function m(e, c) {
            for (var b, k = 0; k < c.length; ++k) {
                var d = c[k];
                b = "";
                d && (b = (ib ? "https://ron2.jp/3/?log=" : "https://tenhou.net/0/?log=") + d.log + "&tw=" + (4 - ~~(d && d.oya)) % 4);
                var f = "";
                b && (f += "<a href='" + b + "' class=bt3 target=_blank style='padding:0;margin:0;border-style:none;'>");
                f += "<div style='position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;border:solid 1px #000;'>";
                f += "<table cellpadding=0 cellspacing=0 width=100% height=100%><tr>";
                f += "<td rowspan=3 class=gray width=6% >" + (k + 1) + ".</td>";
                if (d) {
                    f += "<td colspan=2>";
                    f += K(J(F.ff) + " | ") + d.log.substr(4, 2) + "/" + d.log.substr(6, 2) + K(" | ");
                    f += t.Aa(d.type, ib);
                    var l = d.lobby;
                    l && (f += " " + (1E4 > l ? "L" : "C") + la(4, l));
                    f += "</td>";
                    f += "</tr><tr>";
                    l = d.uname;
                    var p = ~~d.oya;
                    if (d = d.sc) {
                        d = d.split(",");
                        for (var h = 0; h < d.length; ++h)
                            d[h] = Number(d[h]);
                        for (h = 0; 4 > h; ++h)
                            f += "<td width=47% >",
                            l[h] && (f = h ? f + ("ABCD".substr((h + 4 - p) % 4, 1) + ":") : f + (~~(l[1] && d[3] > d[1]) + ~~(l[2] && d[5] > d[1]) + ~~(l[3] && d[7] > d[1]) + 1 + "位 "),
                            f += Mb(Ca(l[h])) + "(" + pa(d[2 * h + 1].toFixed(1)) + ")"),
                            f += "</td>",
                            1 == h && (f += "</tr><tr>")
                    } else if (l)
                        for (h = 0; 4 > h; ++h)
                            f += "<td width=47% >" + Mb(Ca(l[h])) + "</td>",
                            1 == h && (f += "</tr><tr>")
                }
                f += "</tr></table>";
                f += "</div>";
                b && (f += "</a>");
                ya("div", e, "", {
                    innerHTML: f
                }, {
                    height: "3.4em",
                    position: "relative",
                    textAlign: "left"
                }).childNodes[0].onclick = P.logOpen
            }
            ya("div", e, "gray", {
                innerHTML: J(F.dh)
            }, {
                fontSize: "75%",
                align: "left",
                padding: "1em 0 6em 0"
            })
        }
        function g(e, c) {
            c = c.split("\n");
            c[b - 1] || c.pop();
            for (var b = 0; b < c.length; ++b) {
                var k = c[b].split(" ")
                  , d = k[0]
                  , f = ~~k[1];
                c[b] = {
                    type: parseInt(d.split("-")[1], 16),
                    lobby: ~~d.split("-")[2],
                    log: d,
                    oya: (4 - f) % 4,
                    uname: [k[2 + f % 4], k[2 + (1 + f) % 4], k[2 + (2 + f) % 4], k[2 + (3 + f) % 4]],
                    sc: [0, k[6 + f % 4], 0, k[6 + (1 + f) % 4], 0, k[6 + (2 + f) % 4], 0, k[6 + (3 + f) % 4]].join()
                }
            }
            e.innerHTML = "";
            b = ya("div", e, "", {
                innerHTML: "<a class=bt3 href='https://tenhou.net/mjlog.html' target=_blank style='padding:1em 0;'>" + J(F.ah) + "</a>"
            }, {
                textAlign: "center"
            });
            b.childNodes[0].onclick = function() {
                P.zg(e);
                return !1
            }
            ;
            b = ya("div", e, "bt3", {
                innerHTML: J(F.bh)
            }, {
                textAlign: "center",
                padding: "0.5em 0"
            });
            m(e, c.reverse())
        }
        return {
            zg: function(e) {
                e.innerHTML = "";
                var c = ya("div", e, "select-wrapper", {
                    innerHTML: "<button name=exana style='height:1.75em;'>Analyze/AI</button>"
                }, {
                    "float": "right"
                });
                c = ya("div", e, "", {
                    innerHTML: "<a class=bt3 href='https://tenhou.net/mjlog.html' target=_blank style='padding:1em 0;'>" + J(F.$g) + "</a>"
                }, {
                    textAlign: "center"
                });
                c.childNodes[0].onclick = function() {
                    e.innerHTML = "<br>L O A D I N G ...";
                    mb("https://tenhou.net/0/log/find.cgi" + (ib ? "?tsssessionid=" + D[B.Ma] : "?un=" + D[B.fa]) + "&raw=1", function(b) {
                        if (b)
                            return alert("DOWNLOAD ERROR");
                        g(e, this.response)
                    });
                    return !1
                }
                ;
                m(e, a())
            },
            logOpen: function(e) {
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) && (e = e.target,
                e = e.href.split(/\?log=|&tw=/),
                1 != e.length))
                    return Pb.log = e[1],
                    Pb.TW = Pb.tw = ~~e[2],
                    Pb.ts = 0,
                    L.Na(11),
                    !1
            },
            exana: function(e) {
                Vb.ia("<div class='A' id='#" + e.name + "-0'>NAGA<div class=desc>© 2021 DWANGO Co., Ltd.</div></div><div class='A' id='#" + e.name + "-1'>Custom URL</div>", "", 0)
            },
            "#exana": function(e, c) {
                function b(k) {
                    for (var d = a(), f = [], l = 0; l < d.length; ++l)
                        f.push(d[l].log + "%25tw=" + (4 - ~~d[l].oya) % 4);
                    Oa.open(k + "?lang=" + tb.wc() + "&tenhou=" + f.join(","), Ra ? "_system" : "_blank")
                }
                0 == c ? b("https://naga.dmv.nico/naga_report/order_form/") : 1 == c && Vb.o("Analyzer URL:<input type=text size=22 value='https://' style='font-size:100%;margin:0.25em'/><br>", 3, function(k) {
                    k = k.getElementsByTagName("INPUT")[0];
                    b(k.value);
                    return !0
                })
            }
        }
    }());
    Da(P, function() {
        function a() {
            Z.wgF0.innerText = c & 8 ? "Ⓟ" : c & 2 ? "四" : c & 4 ? "三" : "－";
            Z.wgF1.innerText = c & 16 ? "東" : c & 32 ? "南" : "－";
            Z.wgF2.innerText = c & 64 ? "雀" : c & 128 ? "特" : c & 256 ? "鳳" : "－"
        }
        function m() {
            var b = Ja("#klist");
            if (b) {
                b.innerHTML = "";
                var k = 0;
                if (e)
                    for (var d = 0; d < e.length; ++d) {
                        var f = e[d]
                          , l = ~~f[3]
                          , p = [f[4], f[7], f[10], f[13]];
                        if (c & 14) {
                            if (c & 2 && l & t.c)
                                continue;
                            if (c & 4 && ~l & t.c)
                                continue;
                            if (c & 8 && !ja(p[0]) && !ja(p[1]) && !ja(p[2]) && !ja(p[3]))
                                continue
                        }
                        if (c & 48) {
                            if (c & 16 && l & t.B)
                                continue;
                            if (c & 32 && ~l & t.B)
                                continue
                        }
                        if (c & 448 && 0 == g) {
                            if (c & 64 && !t.Yb(l))
                                continue;
                            if (c & 128 && t.Jc(l) && 2 != t.ce(l))
                                continue;
                            if (c & 256 && t.Jc(l) && 3 != t.ce(l))
                                continue
                        }
                        var h = "";
                        h += "<a href='" + ((ib ? "https://ron2.jp/3/?wg=" : "https://tenhou.net/0/?wg=") + f[0]) + "' class=bt3 target=_blank style='padding:0;margin:0;border-style:none;'>";
                        h += "<div style='position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;border:solid 1px #000;'>";
                        h += "<table cellpadding=0 cellspacing=0 width=100% height=100%>";
                        h += "<tr><td rowspan=3 class=gray width=6%>" + (k + 1) + ".</td>";
                        var n = [~~f[5], ~~f[8], ~~f[11], ~~f[14]]
                          , x = [~~f[6], ~~f[9], ~~f[12], ~~f[15]];
                        h += "<td colspan=2>" + K(J(F.gf) + " | ") + f[2] + K(" | ") + t.Aa(l, ib) + "</td></tr><tr>";
                        for (f = 0; 4 > f; ++f)
                            p[f] && (h += "<td width=47%>",
                            ib || (h += "<span class=dan" + n[f] + ">" + fa.$a[n[f]] + "</span>"),
                            h += K("R") + x[f] + K("/"),
                            h += Mb(p[f]),
                            h += "</td>",
                            1 == f && (h += "</tr><tr>"));
                        h += "</tr></table>";
                        h += "</div>";
                        h += "</a>";
                        ya("div", b, "", {
                            innerHTML: h
                        }, {
                            height: "3.4em",
                            position: "relative",
                            textAlign: "left"
                        }).childNodes[0].onclick = P.wgOpen;
                        ++k
                    }
                k || (b.innerHTML = "<br>" + J(F.fh));
                ya("div", b, "gray", {
                    innerHTML: J(F.gh)
                }, {
                    fontSize: "75%",
                    align: "left",
                    padding: "1em 0 6em 0"
                })
            }
        }
        var g, e, c = ib ? 8 : 256;
        return {
            rk: function(b) {
                g = b;
                a();
                Z.wgF2.style.display = 0 == g ? "" : "none";
                mb("https://mjv.jp/0/wg/" + (1E4 > g ? la(4, g) : g) + ".js", function(k) {
                    if (k)
                        return console.log(k);
                    k = this.response;
                    e = k.substr(3, k.length - 3 - 2);
                    try {
                        e = JSON.parse(e)
                    } catch (f) {
                        return
                    }
                    for (k = 0; k < e.length; ++k) {
                        e[k] = e[k].split(",");
                        for (var d = 0; 4 > d; ++d)
                            e[k][4 + 3 * d] && (e[k][4 + 3 * d] = decodeURIComponent(escape(atob(e[k][4 + 3 * d]))))
                    }
                    m();
                    ib && P.sk(e)
                })
            },
            wgF0: function() {
                c = c & -15 | (c & 2 ? 4 : c & 4 ? 8 : c & 8 ? 0 : 2);
                a();
                m()
            },
            wgF1: function() {
                c = c & -49 | (c & 16 ? 32 : c & 32 ? 0 : 16);
                a();
                m()
            },
            wgF2: function() {
                c = c & -449 | (c & 64 ? 128 : c & 128 ? 256 : c & 256 ? 0 : 64);
                a();
                m()
            },
            wgOpen: function(b) {
                if (!(b.shiftKey || b.altKey || b.ctrlKey || b.metaKey))
                    return b = b.target,
                    Pb.wg = b.href.split("?wg=")[1],
                    Pb.TW = Pb.tw = 0,
                    L.Na(11),
                    !1
            }
        }
    }());
    var Wc = ib ? [t.h | t.Ba | t.cc, t.h | t.B | t.Ba | t.cc, t.h | t.c | t.B | t.Ba | t.cc] : [t.h | 0, t.h | t.pa | 0, t.h | t.B | 0, t.h | t.B | t.pa | 0, t.h | t.c | 0, t.h | t.c | t.pa | 0, t.h | t.c | t.B | 0, t.h | t.c | t.B | t.pa | 0, t.h | t.Z, t.h | t.pa | t.Z, t.h | t.B | t.Z, t.h | t.B | t.pa | t.Z, t.h | t.c | t.Z, t.h | t.c | t.pa | t.Z, t.h | t.c | t.B | t.Z, t.h | t.c | t.B | t.pa | t.Z, t.h | t.v, t.h | t.pa | t.v, t.h | t.B | t.v, t.h | t.B | t.pa | t.v, t.h | t.c | t.v, t.h | t.c | t.pa | t.v, t.h | t.c | t.B | t.v, t.h | t.c | t.B | t.pa | t.v, t.h | t.Z | t.v, t.h | t.pa | t.Z | t.v, t.h | t.B | t.Z | t.v, t.h | t.B | t.pa | t.Z | t.v, t.h | t.c | t.Z | t.v, t.h | t.c | t.pa | t.Z | t.v, t.h | t.c | t.B | t.Z | t.v, t.h | t.c | t.B | t.pa | t.Z | t.v, t.h | t.v | t.da, t.h | t.v | t.ea, t.h | t.v | t.da | t.ea, t.h | t.v | t.B | t.da, t.h | t.v | t.B | t.ea, t.h | t.v | t.B | t.da | t.ea, t.h | t.v | t.c | t.da | t.ea, t.h | t.v | t.B | t.c | t.da | t.ea]
      , Xc = [t.h | t.sa | t.ab | 0, t.h | t.sa | 0, t.h | t.B | t.sa | t.ab | 0, t.h | t.B | t.sa | 0, t.h | t.sa | t.ab | t.Z, t.h | t.sa | t.Z, t.h | t.B | t.sa | t.ab | t.Z, t.h | t.B | t.sa | t.Z, t.h | t.sa | t.ab | t.v, t.h | t.sa | t.v, t.h | t.B | t.sa | t.ab | t.v, t.h | t.B | t.sa | t.v, t.h | t.sa | t.ab | t.Z | t.v, t.h | t.sa | t.Z | t.v, t.h | t.B | t.sa | t.ab | t.Z | t.v, t.h | t.B | t.sa | t.Z | t.v]
      , Yc = ib ? "4353,4361,4377" : "1,9";
    Da(P, function() {
        function a(v, C) {
            return (v = v.replace(new RegExp("[^" + fa.Yf + "]","g"), "")) && v != C.replace(new RegExp("[^" + fa.Yf + "]","g"), "")
        }
        function m() {
            return ("" + (D[B.ue] || Yc)).split(",")
        }
        function g(v) {
            if (ic[4096] && ic[4096].complete && ic[4196] && ic[4196].complete && ic[4296] && ic[4296].complete && ic[4396] && ic[4396].complete && ic[4496] && ic[4496].complete)
                return !0;
            v && Vb.o(J(F.sh));
            return !1
        }
        function e(v) {
            var C = Ja("#a29").childNodes
              , E = C.length;
            Pa = (Pa - 1 + v + E - 1) % (E - 1) + 1;
            for (v = 1; v < E; ++v)
                C[v].style.display = v == Pa ? "" : "none";
            Ja("#a30").innerHTML = C[Pa].firstChild.innerHTML;
            Ja("[name=panePrev]").innerHTML = 2 > Pa ? "<span class=tblink>&laquo;</span>" : "　";
            Ja("[name=paneNext]").innerHTML = 2 > Pa ? "<span class=tblink>&raquo;</span>" : "　";
            Ja("#a31").style.display = C[Pa].classList.contains("nohdr") ? "none" : "";
            E = C[Pa].classList;
            E.contains("init_tlist") && (E.remove("init_tlist"),
            P.Eg(Z.tlist));
            E.contains("init_hlist") && (E.remove("init_hlist"),
            P.zg(Z.hlist));
            E.contains("init_klist") && (E.remove("init_klist"),
            n());
            Ja(".c20").dataset.panesel = C[Pa].dataset.pane || ""
        }
        function c(v) {
            v = v.replace(/[^\d]/g, "");
            return (new Date(v.substr(0, 4),v.substr(4, 2) - 1,v.substr(6, 2),v.substr(8, 2),v.substr(10, 2),v.substr(12, 2))).getTime()
        }
        function b(v) {
            v = v.replace(/[^\d]/g, "");
            return v.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)/, function(C, E, S, N, M, G) {
                return E + "." + S + "." + N + "(" + J(F.Sg)[(new Date(E,S - 1,N)).getDay()] + ") " + M + ":" + G
            })
        }
        function k() {
            var v = P[1];
            Z.expdisp.innerHTML = K(J(F.xh) + ":") + (v ? v.replace(/(\d\d\d\d)(\d\d)(\d\d)/, "$1.$2.$3") : "- - - -")
        }
        function d() {
            function v(na, ha) {
                na = E[na].childNodes[1];
                na.className = "";
                na.innerHTML = ha
            }
            function C(na, ha, ea) {
                v(na, ha == ea ? "1.00" : (ha / ea).toFixed(3).substr(1))
            }
            if (Z.pftab) {
                Z.pftab.style.display = "none";
                Z.pftab_.style.display = "";
                for (var E = Z.pftab.getElementsByTagName("TR"), S = 1; S < E.length; ++S)
                    if (!(2 > E[S].childNodes.length)) {
                        var N = E[S];
                        N.style.borderBottom = "1px solid #444";
                        N = E[S].childNodes[0];
                        N.className = "gray";
                        N.style.textAlign = "left";
                        N = E[S].childNodes[1];
                        N.innerHTML = "-";
                        N.className = "gray";
                        N.style.textAlign = "right"
                    }
                E[16].childNodes[0].innerHTML = "";
                if (S = ~~m()[4]) {
                    N = 4;
                    var M = 0
                      , G = "";
                    switch (r(T, S)) {
                    case 4:
                        N = 4;
                        M = 0;
                        var V = P[17];
                        G = J(F.Ch);
                        break;
                    case 3:
                        N = 3;
                        M = 0;
                        V = P[16];
                        G = J(F.Bh);
                        break;
                    case 601:
                        N = 4;
                        M = 0;
                        V = P[18];
                        break;
                    case 602:
                        N = 4;
                        M = 2;
                        V = P[19];
                        break;
                    case 603:
                        N = 4;
                        M = 5;
                        V = P[20];
                        break;
                    case 611:
                        N = 4;
                        M = 0;
                        V = P[21];
                        break;
                    case 612:
                        N = 4;
                        M = 2;
                        V = P[22];
                        break;
                    case 613:
                        N = 4;
                        M = 5;
                        V = P[23];
                        break;
                    case 623:
                        N = 3;
                        M = 5;
                        V = P[24];
                        break;
                    case 633:
                        N = 3;
                        M = 5;
                        V = P[25];
                        break;
                    case 2004:
                        N = 4;
                        M = 0;
                        V = P[33];
                        break;
                    case 2003:
                        N = 3,
                        M = 0,
                        V = P[32]
                    }
                    E[16].childNodes[0].innerHTML = G;
                    V && (Z.pftab.style.display = "",
                    Z.pftab_.style.display = "none",
                    G = ~~V[4] + ~~V[5] + ~~V[6] + ~~V[7]) && (C(1, V[4], G),
                    C(2, V[5], G),
                    C(3, V[6], G),
                    4 == N && C(4, V[7], G),
                    C(5, V[8], G),
                    v(6, G),
                    v(7, (0 < V[3] ? "+" : "") + (V[3] / G).toFixed(1)),
                    v(8, ((~~V[4] + 2 * ~~V[5] + 3 * ~~V[6] + 4 * ~~V[7]) / G).toFixed(2)),
                    t.Yb(S) && (S = 1 * V[3] + V[0] * M,
                    v(9, (0 < S ? "+" : "") + (S / G).toFixed(1)),
                    v(10, (~~V[0] / G).toFixed(2))),
                    C(11, V[10], V[9]),
                    C(12, V[11], V[9]),
                    C(13, V[12], V[9]),
                    C(14, V[13], V[9]),
                    v(15, ~~V[2]))
                }
            }
        }
        function f(v) {
            function C(hb) {
                for (var Ya, xb = 1; xb < arguments.length; ++xb)
                    Ya = M[hb].childNodes[xb],
                    Ya.className = "",
                    Ya.innerHTML = arguments[xb]
            }
            function E(hb, Ya, xb) {
                C(hb, Ya, (xb ? xb : "- ") + K(tb.nb(xb)))
            }
            function S(hb, Ya, xb, vc) {
                C(hb, Ya == xb ? "1.00" : (Ya / xb).toFixed(3).substr(1), (vc ? vc : "- ") + K(tb.nb(vc)))
            }
            var N = Z.rnktab;
            if (N) {
                Z.rnktab.style.display = "none";
                Z.rnktab_.style.display = "";
                for (var M = N.getElementsByTagName("TR"), G = 1; G < M.length; ++G) {
                    N = M[G];
                    var V = N.childNodes;
                    if (!(2 > V.length)) {
                        16 != G && 18 != G && (N.style.borderBottom = "solid 1px #444");
                        V[0].style.textAlign = "left";
                        V[0].className = "gray";
                        for (var na = 1; na < V.length; ++na)
                            N = V[na],
                            N.className = "gray",
                            N.style.textAlign = "right",
                            N.style.paddingLeft = "0.5em",
                            1 != G && 6 != G && (N.innerHTML = "-")
                    }
                }
                C(18, K("-"));
                N = ~~m()[3];
                yc.$b != N && (yc.$b = N,
                yc.R('<PXR V="' + N + '" />'));
                if (N && (Z.rnktab.style.display = "",
                Z.rnktab_.style.display = "none",
                v && (v = v.v2.split(","),
                15 == v.length || 21 == v.length))) {
                    G = ~~v[0];
                    V = ~~v[1];
                    na = ~~v[2];
                    var ha = ~~v[3]
                      , ea = G + V + na + ha
                      , oa = v[4]
                      , wa = 1500;
                    switch (r(T, N)) {
                    case 4:
                        wa = P[17][2];
                        break;
                    case 3:
                        wa = P[16][2];
                        break;
                    case 601:
                        wa = P[18][2];
                        break;
                    case 602:
                        wa = P[19][2];
                        break;
                    case 603:
                        wa = P[20][2];
                        break;
                    case 611:
                        wa = P[21][2];
                        break;
                    case 612:
                        wa = P[22][2];
                        break;
                    case 613:
                        wa = P[23][2];
                        break;
                    case 623:
                        wa = P[24][2];
                        break;
                    case 633:
                        wa = P[25][2];
                        break;
                    case 2004:
                        wa = P[33][2] || wa;
                        break;
                    case 2003:
                        wa = P[32][2] || wa
                    }
                    var Ea = ~~v[6]
                      , Wa = ~~v[7]
                      , Ia = ~~v[8]
                      , La = ~~v[9]
                      , Sa = ~~v[10]
                      , Xa = ~~v[11]
                      , ab = ~~v[12]
                      , bb = ~~v[13]
                      , fb = ~~v[14];
                    if (ea) {
                        var gb = N & t.c ? 30 * G + 0 * V + -30 * na : 30 * G + 10 * V + -10 * na + -30 * ha
                          , Cb = N & t.c ? G + 2 * V + 3 * na : G + 2 * V + 3 * na + 4 * ha
                          , Db = G + V
                          , Lb = N & t.c ? na : ha;
                        E(2, pa(oa), Wa);
                        E(7, pa((oa / ea).toFixed(1)), Ia);
                        E(3, pa(gb), La);
                        E(8, (Cb / ea).toFixed(2), Sa);
                        S(11, G, ea, Xa);
                        ~N & t.c && S(12, Db, ea, ab);
                        S(13, Lb, ea, bb)
                    }
                    if (21 == v.length) {
                        oa = v[15];
                        Xa = v[16];
                        var Eb = ~~v[17]
                          , kb = ~~v[18];
                        ab = ~~v[19];
                        bb = ~~v[20];
                        E(4, pa(oa), Eb);
                        E(9, pa((oa / ea).toFixed(1)), kb);
                        E(5, pa(Xa), ab);
                        E(10, pa((Xa / ea).toFixed(2)), bb)
                    }
                    oa = "-";
                    15 == v.length && Ia && (oa = Wa + Ia + La + Sa);
                    21 == v.length && kb && (oa = Eb + kb);
                    E(15, ~~wa, fb);
                    E(16, oa, Ea);
                    C(18, G + K(" + ") + V + K(" + ") + na + (N & t.c ? "" : K(" + ") + ha) + K(" = ") + ea)
                }
            }
        }
        function l(v, C) {
            var E = Ma.getElementById(v);
            if (E) {
                C = ma[C];
                var S = C.gt
                  , N = "-";
                S && (N = S & t.B ? "東南" : "東風",
                N += S & t.c ? "サンマ" : "戦",
                N = N + " " + (S & t.ab ? "喰ナシ" : "喰あり"),
                N += S & t.sa ? "赤ナシ" : "赤あり",
                N += " ",
                t.ed(T, S) && (N += "速"),
                S & t.Ba && (N += "暗"),
                S & t.ea && (N += "祝"));
                var M = "【-】"
                  , G = K(J(F.$e))
                  , V = C.gspan;
                M = J(F.ae).replace("5", V);
                G = J(F.be).replace("5", V);
                var na = C.ts ? b(C.ts) : "-"
                  , ha = C.te ? b(C.te) : "-";
                S = "<div class='nobr' style='font-size:150%;padding-top:0.25em;width:22em;overflow:hidden;'>" + C.title + "</div><hr>";
                S += "<table cellpadding=0 cellspacing=0 style='margin:0 auto;text-align:left;'><tr><td><table cellpadding=0 cellspacing=0><tr><td colspan=3>" + K(J(F.cf) + "JST") + "<br></td></tr><tr><td>" + K(J(F.df)) + "</td><td>&nbsp;</td><td>" + na + "</td></tr><td>" + K(J(F.bf)) + "</td><td></td><td>" + ha + "</td></tr></td></tr></table></td><td style='padding:0 0 0 1em;'><table cellpadding=0 cellspacing=0><tr><td>" + K(J(F.af)) + "<br>" + N + "</td></tr><tr><td style='padding-top:0.25em;'>" + K(J(F.Xe)) + " " + K("なし") + "<br></td></tr></table></td></tr></table>";
                S += K(J(F.Ye)) + G + "<br>";
                G = N = "- -";
                na = "-";
                ha = [];
                if (C && C.sc) {
                    ha = C.sc;
                    for (var ea = 0; ea < ha.length; ++ea)
                        ha[ea] = pa(Number(ha[ea]).toFixed(1))
                }
                C && C.rank && (N = Math.max(1, C.rank[0]),
                G = C.rank[2],
                void 0 !== C.max && (na = pa(Number(C.max).toFixed(1))));
                N = "<span class=c13>" + N + "</span>" + tb.nb(N);
                ha.length && ha.length < V && (N = K("(" + N + ")"));
                N += K("<span style='font-size:50%;'> /" + G + "</span>");
                S = S + ("<div style='display:inline-block;font-size:300%;padding:0.1em 0;'>" + N + "</div>　<div style='display:inline-block;'>") + (K(J(F.Ze)) + "<br>" + na + "</div><br>");
                S += K(M) + ha.join(" ") + "<br>";
                var oa = Ja("#" + v + " .c13");
                M = oa ? ~~oa.innerText : "-";
                E.innerHTML = S;
                if (C && C.rank && M != C.rank[0]) {
                    oa = Ja("#" + v + " .c13");
                    oa.style.opacity = 0;
                    oa.innerText = ~~oa.innerText + 50;
                    var wa = function() {
                        var Ea = Number(oa.style.opacity) + .02;
                        oa.style.opacity = 1 < Ea ? 1 : Ea;
                        oa.innerText = ~~oa.innerText - 1;
                        1 > Ea && setTimeout(wa, 20)
                    };
                    wa()
                }
            }
        }
        function p(v, C) {
            var E = ma[C];
            if (!E || T != E.lobby)
                return !1;
            mb("//wp.ron2.jp/3/ranking?lobby=" + E.lobby + "&rule=" + E.gt + "&ts=" + E.ts + "&te=" + E.te + "&gspan=" + E.gspan + "&un=" + encodeURIComponent(P[0]), function(S) {
                if (S)
                    return console.log(this);
                S = this.response;
                try {
                    var N = JSON.parse(S)
                } catch (M) {
                    return
                }
                ma[C].rank = N.rank;
                ma[C].sc = N.sc;
                ma[C].max = N.max;
                l(v, C);
                u(R, C)
            });
            return !0
        }
        function h() {
            ra && (clearTimeout(ra),
            ra = void 0);
            l("a25", 0);
            l("a26", 1);
            Z.ev0info && (Z.ev0info.disabled = !ma[0].href);
            Z.ev1info && (Z.ev1info.disabled = !ma[1].href);
            var v = 0 | p("a25", 0);
            v |= p("a26", 1);
            10100 <= T && 10109 >= T && (v |= p("a26", T));
            v && (ra = setTimeout(h, 6E4))
        }
        function n() {
            sa && (clearTimeout(sa),
            sa = void 0);
            Ja("#klist") && (P.rk(T),
            sa = setTimeout(n, 6E4))
        }
        function x(v) {
            if (Z.csmain) {
                var C = ~~v.players
                  , E = ~~v.premiumonly
                  , S = ~~v.joinfee
                  , N = v.rule
                  , M = parseInt(N[2], 16);
                var G = M & t.B ? "東南" : "東風";
                G += M & t.c ? "サンマ" : "戦";
                G = G + " " + (M & t.ab ? "喰ナシ" : "喰あり");
                G += M & t.sa ? "赤ナシ" : "赤あり";
                G += " ";
                t.ed(T, M) && (G += "速");
                M & t.Ba && (G += "暗");
                M & t.ea && (G += "祝");
                var V = ""
                  , na = ~~N[3]
                  , ha = ~~N[4]
                  , ea = ~~N[5]
                  , oa = ~~N[6]
                  , wa = P[0];
                v.ib = !!v.join;
                ib && !v.ib && v.premiumonly && ja(wa) && (v.ib = !0);
                v.ib && (wa = (M & t.c ? P[16] : P[17])[0],
                na && ha ? v.ib = na <= wa && wa <= ha : na ? v.ib = na <= wa : ha && (v.ib = wa <= ha));
                v.ib && (M = (M & t.c ? P[16] : P[17])[2],
                ea && oa ? v.ib = ea <= M && M <= oa : ea ? v.ib = ea <= M : oa && (v.ib = M <= oa));
                na && ha && na == ha ? V += fa.$a[na] + "限定" : na && ha ? V += fa.$a[na] + "～" + fa.$a[ha] : na ? V += fa.$a[na] + "以上" : ha && (V += fa.$a[ha] + "以下");
                V.length && (ea || oa) && (V += " & ");
                ea && oa ? V += "R" + ea + "～R" + oa : ea ? V += "R" + ea + "以上" : oa && (V += "R" + oa + "以下");
                V.length || (V += "段位R指定なし");
                V += "<br>";
                V = S ? V + "だれでもOK" : E ? V + (C ? "固定 " + C + " 名(有効期限3日以上)" : "有効期限3日以上") : V + (C ? "固定 " + C + " 名" : "だれでもOK");
                C = S ? "有効期限" + S + "日分" : C ? "- - -" : E ? "なし" : "無料";
                v = "<div style='font-size:150%;padding-top:0.25em;'>" + Ka(v.title) + "</div><hr><table cellpadding=0 cellspacing=0 style='margin:0 auto;text-align:left;'><tr><td><table cellpadding=0 cellspacing=0><tr><td colspan=3>" + K(J(F.cf) + "JST") + "<br></td></tr><tr><td>" + K(J(F.df)) + "</td><td>&nbsp;</td><td>" + b(N[0]) + "</td></tr><td>" + K(J(F.bf)) + "</td><td></td><td>" + b(N[1]) + "</td></tr></td></tr><tr><td colspan=3 style='padding-top:0.25em;'>" + K(J(F.af)) + "<br>" + G + "</td></tr></table></td><td style='padding:0 0 0 1em;'><table cellpadding=0 cellspacing=0><tr><td>" + K(J(F.Xe)) + "<br>" + C + "<br></td></tr><tr><td style='padding-top:0.25em;'>" + K(J(F.Rg)) + "<br>" + V + "</td></tr></table></td></tr></table>";
                Z.csmain.innerHTML = v
            }
        }
        function u(v, C) {
            if (Z.csranking) {
                var E = J(F.$e)
                  , S = J(F.Qg)
                  , N = ""
                  , M = "-"
                  , G = []
                  , V = "- -";
                if ("object" === typeof C)
                    if (C = (C.rankingcs || "").split(","),
                    C[0] = C[0] || v.ranking,
                    "sc3m" == C[0] || "sc3c0m" == C[0] || "sc3c2m" == C[0] || "sc3c5m" == C[0])
                        E = J(F.Ug),
                        "sc3c2m" == C[0] && (S = J(F.Ue)),
                        "sc3c5m" == C[0] && (S = J(F.Ve)),
                        N = J(F.Tg),
                        C[8] && (V = C[8]),
                        C[6] && (M = pa(Number(C[6]).toFixed(1))),
                        C[3] && G.push(pa(Number(C[3]).toFixed(1))),
                        C[2] && G.push(pa(Number(C[2]).toFixed(1))),
                        C[1] && G.push(pa(Number(C[1]).toFixed(1))),
                        G.length && G.push("= " + pa((1 * C[1] + 1 * C[2] + 1 * C[3]).toFixed(1)));
                    else {
                        if ("sc5m" == C[0] || "sc5c0m" == C[0] || "sc5c2m" == C[0] || "sc5c5m" == C[0])
                            E = J(F.be),
                            "sc5c2m" == C[0] && (S = J(F.Ue)),
                            "sc5c5m" == C[0] && (S = J(F.Ve)),
                            N = J(F.ae),
                            C[9] && (V = C[9]),
                            C[7] && (M = pa(Number(C[7]).toFixed(1))),
                            C[5] && G.push(pa(Number(C[5]).toFixed(1))),
                            C[4] && G.push(pa(Number(C[4]).toFixed(1))),
                            C[3] && G.push(pa(Number(C[3]).toFixed(1))),
                            C[2] && G.push(pa(Number(C[2]).toFixed(1))),
                            C[1] && G.push(pa(Number(C[1]).toFixed(1))),
                            G.length && G.push("= " + pa((1 * C[1] + 1 * C[2] + 1 * C[3] + 1 * C[4] + 1 * C[5]).toFixed(1)))
                    }
                else {
                    v = ma[C];
                    E = v.gspan;
                    N = J(F.ae).replace("5", E);
                    E = J(F.be).replace("5", E);
                    v.max && (M = pa(Number(v.max).toFixed(1)));
                    if (v.sc)
                        for (C = 0; C < v.sc.length; ++C)
                            G[C] = pa(Number(v.sc[C]).toFixed(1));
                    v.rank && (V = Math.max(1, v.rank[0]))
                }
                G = G.length ? G.join(" ") : "--";
                S = "<div style='display:inline-block;text-align:left;'>" + K(J(F.Ye)) + "　" + E + "<br>" + K(J(F.Ze)) + "　" + M + "　" + K(J(F.Pg)) + "　" + S + "</div>";
                S += "<div style='font-size:375%;padding:0.1em 0;'>" + V + tb.nb(V) + "</div>";
                S += K(N) + " " + G + "<br>";
                Z.csranking.innerHTML = S
            }
        }
        function y(v) {
            return "<div style='margin:0.5em 0;'><div class=select-wrapper><button name=rule id=rule" + v + " style='width:11.5em;text-align:left;'></button></div><button name=join id=join" + v + " disabled>" + J(F.fd) + "</button></div>"
        }
        function r(v, C) {
            if (1 == v)
                return C & t.c ? 2003 : 2004;
            if (t.Yb(C))
                switch (C) {
                case t.h | t.v | t.da:
                    return 601;
                case t.h | t.v | t.ea:
                    return 602;
                case t.h | t.v | t.da | t.ea:
                    return 603;
                case t.h | t.v | t.B | t.da:
                    return 611;
                case t.h | t.v | t.B | t.ea:
                    return 612;
                case t.h | t.v | t.B | t.da | t.ea:
                    return 613;
                case t.h | t.v | t.c | t.da | t.ea:
                    return 623;
                case t.h | t.v | t.B | t.c | t.da | t.ea:
                    return 633
                }
            else
                return C & t.c ? 3 : 4
        }
        function w(v) {
            return v ? (t.Aa(v, ib) + "　　　").substr(0, 6) + "&nbsp;&nbsp;" + Ba[v] : "SELECT GAME"
        }
        function A(v) {
            return v.replace(/,/g, "</td><td>").replace(/\|/g, "</td></tr><tr><td>").replace(/>\(/g, "><table cellpadding=0 cellspacing=0 width=100% style='border-collapse:collapse;'><tr><td>").replace(/\)</g, "</td></tr></table><")
        }
        function I() {
            P["#rule0"]();
            for (var v = 0; 3 > v; ++v)
                Z["lnj" + v] && (Z["lnj" + v].innerText = ~~Ba.Vb[0]),
                Z["lng" + v] && (Z["lng" + v].innerText = ~~Ba.Rb[0]);
            for (v = 0; v < Bb.length; ++v) {
                var C = Bb[v];
                ma[0].gt == C && (Z.ev0lnj && (Z.ev0lnj.innerText = ~~Ba.Vb[v]),
                Z.ev0lng && (Z.ev0lng.innerText = ~~Ba.Rb[v]));
                ma[1].gt == C && (Z.ev1lnj && (Z.ev1lnj.innerText = ~~Ba.Vb[v]),
                Z.ev1lng && (Z.ev1lng.innerText = ~~Ba.Rb[v]))
            }
        }
        function Y(v, C, E, S, N, M, G, V, na, ha) {
            if (!C)
                return 0;
            v = c(v.t);
            E = c(E);
            S = c(S);
            S <= v ? (C.innerText = J(F.Mg),
            C.disabled = !0) : G ? (C.innerText = J(F.Te),
            C.disabled = !0) : V ? v < E ? (N = (E - v) / 1E3,
            C.innerText = J(F.Gc)[0] + (86400 < N ? (N / 24 / 60 / 60).toFixed(1) + J(F.Gc)[1] : 3600 < N ? (N / 60 / 60).toFixed(1) + J(F.Gc)[2] : 60 < N ? (N / 60).toFixed(1) + J(F.Gc)[3] : 5 * ~~(N / 5) + J(F.Gc)[4]),
            C.disabled = !0) : M ? (C.innerText = "- - -",
            C.disabled = !0) : (C.innerText = J(F.fd),
            C.disabled = !!jb[N]) : na ? (C.innerText = J(F.Ng),
            C.disabled = !1) : ha ? (C.innerText = J(F.Og),
            C.disabled = !1) : (C.innerText = J(F.Te),
            C.disabled = !0);
            return v < E - 6E4 || S < v || E < v && v < S - 3E4 ? 3E4 : 5E3
        }
        var T, R, ma = {
            0: {
                title: "準備中",
                ts: "",
                te: "",
                gt: 0,
                gspan: 0,
                href: ""
            },
            1: {
                title: "準備中",
                ts: "",
                te: "",
                gt: 0,
                gspan: 0,
                href: ""
            }
        }, Ba = {
            n: [],
            Vb: [],
            Rb: []
        }, jb = {}, Pa = location.search.match(/^\?(C[0-9]{8})/) ? 2 : ib ? 3 : 2, ra, sa, $a;
        return {
            wd: function() {
                jb = {};
                location.search.match(/^\?L([1-9][0-9]{3})/) ? (yc.R({
                    tag: "LOBBY",
                    id: RegExp.$1
                }),
                T = ~~RegExp.$1) : location.search.match(/^\?(C[0-9]{8})/) ? (T = ~~("1" + RegExp.$1.substr(1, 4)),
                yc.R({
                    tag: "CS",
                    lobby: RegExp.$1
                })) : (T = 0,
                ib && (T = 1),
                P.o({
                    tag: "LOBBY"
                }))
            },
            LOBBY: function(v, C) {
                Uc.style.display = "none";
                Vc.style.display = "";
                Vc.disabled = !1;
                yc.$b = 0;
                if (Pb.tr || Pb.tredit)
                    return P.TRAINING({
                        file: Pb.tr || Pb.tredit
                    }, C);
                v = "<div id=a29 style='height:16em;'><div id=a31><table cellpadding=0 cellspacing=0 style='width:100%;white-space:nowrap;text-align:right;'><tr><td><table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td style='text-align:left;'>" + (K(J(F.Eh) + ":") + "<span id=lnn0>" + ~~Ba.n[0] + "</span> " + K(J(F.Fh) + ":") + "<span id=lnn2>" + ~~Ba.n[2] + "</span> " + K(J(F.Dh) + ":") + "<span id=lnn3>" + ~~Ba.n[3] + "</span> </td><td class=c11></td></tr><tr><td colspan=2> <span id=iddisp>" + Ca(P[0]) + "</span>  <span id=expdisp></span> <span class=c12></span></td></tr></table></td><td rowspan=2 style='width:1px;padding-left:0.25em;' class=c10></td></tr></table><div style='display:none;'></div><hr></div>");
                v += "<div data-pane=d0 style='display:none;'><span style='display:none;'>　</span><div id=lbinfo style='height:3em;'>" + K((Ra ? "" : J(F.Gh)) + " " + J(F.Hh)) + "</div><br><div class=select-wrapper><button name=testplay>" + J(F.vh) + "</button></div><br><br><br>" + K(J(F.Ih)) + "</div>";
                ib && 1 == T && (v += "<div data-pane=d1 style='display:none;height:13rem;'><span style='display:none;'>プロ情報</span><div style='position:relative;height:100%;'><div class=sscl id=plist style='position:relative;height:100%;border:solid 1px #444;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div></div></div>");
                0 <= T && 1E4 > T && (v += "<div data-pane=d2 style='display:none;padding:0.25em 0;'><span style='display:none;'>" + (1 < T ? "個室L" + la(4, T) : 1 == T ? "公式卓" : "対戦") + "</span>" + y(0) + y(1) + y(2) + "</div>");
                1E4 <= T && 2E4 > T && (v += "<div data-pane=d3 style='display:none;'><span style='display:none;'>大会C" + la(4, T % 1E4) + "</span><div id=csmain style='height:9em;'></div><span style='font-size:150%;padding:0 1em;'>" + K(J(F.Ic)) + "<span id=lnj0>" + ~~Ba.Vb[0] + "</span>" + K(J(F.rb)) + " " + K(J(F.Hc)) + "<span id=lng0>" + ~~Ba.Rb[0] + "</span>" + K(J(F.rb)) + "</span>",
                v += "<button name=join id=joincs0 disabled>　</button></div>");
                1E4 <= T && 2E4 > T && (v += "<div data-pane=d3 style='display:none;'><span style='display:none;'>大会C" + la(4, T % 1E4) + "</span><div id=csranking style='height:9em;'></div><span style='font-size:150%;padding:0 1em;'>" + K(J(F.Ic)) + "<span id=lnj1>" + ~~Ba.Vb[0] + "</span>" + K(J(F.rb)) + " " + K(J(F.Hc)) + "<span id=lng1>" + ~~Ba.Rb[0] + "</span>" + K(J(F.rb)) + "</span>",
                v += "<button name=join id=joincs1 disabled>　</button></div>");
                1 < T && (v += "<div data-pane=d4 style='display:none;'><span style='display:none;'>" + (1E4 > T ? "個室L" : "大会C") + la(4, T % 1E4) + "</span><div style='height:8.5em;border:1px solid #444;text-align:left;margin-bottom:0.5em;position: relative;'><button name=chatInput style='font-size:100%;position:absolute;right:0;top:8.5em;'>&middot;&middot;&middot;</button><div id=chat style='height:100%;font-size:75%;overflow-y:scroll;user-select:text;'><div>#ENTER LOBBY " + T + "</div></div></div>",
                1E4 > T ? v += y(3) : 2E4 > T && (v += "<span style='font-size:150%;padding:0 1em;'>" + K(J(F.Ic)) + "<span id=lnj2>" + ~~Ba.Vb[0] + "</span>" + K(J(F.rb)) + " " + K(J(F.Hc)) + "<span id=lng2>" + ~~Ba.Rb[0] + "</span>" + K(J(F.rb)) + "</span><button name=join id=joincs2 disabled>　</button>"),
                v += "</div>");
                ib && 1 == T && (v += "<div data-pane=d5 class='nohdr' style='display:none;'><span style='display:none;'>イベントA</span><div id=a25 style='height:12em;'></div><button name=ev0info disabled>詳細</button><span style='font-size:150%;padding:0 0.5em;'>" + K(J(F.Ic)) + "<span id=ev0lnj>-</span>" + K(J(F.rb)) + " " + K(J(F.Hc)) + "<span id=ev0lng>-</span>" + K(J(F.rb)) + "</span><button name=join id=a23 disabled>" + J(F.fd) + "</button></div>",
                v += "<div data-pane=d6 class='nohdr' style='display:none;'><span style='display:none;'>イベントB</span><div id=a26 style='height:12em;'></div><button name=ev1info disabled>詳細</button><span style='font-size:150%;padding:0 0.5em;'>" + K(J(F.Ic)) + "<span id=ev1lnj>-</span>" + K(J(F.rb)) + " " + K(J(F.Hc)) + "<span id=ev1lng>-</span>" + K(J(F.rb)) + "</span><button name=join id=a24 disabled>" + J(F.fd) + "</button></div>");
                1 >= T && (v += A("<div data-pane=d7 style='display:none;'><span style='display:none;'>" + J(F.Mi) + "</span>" + y(3) + "<table cellpadding=0 cellspacing=0 id=rnktab style='margin:0 auto;'><tr><td valign=top style='min-width:10em;'>(," + J(F.Pa)[0] + "," + J(F.Pa)[1] + "|" + J(F.Pa)[2] + ",,|" + J(F.Pa)[3] + ",,|" + J(F.Pa)[4] + ",,|" + J(F.Pa)[5] + ",,)</td><td style='width:0.5em;'></td><td valign=top style='min-width:7em;'>(," + J(F.Pa)[6] + "," + J(F.Pa)[7] + "|,,|,,|,,|,,)</td><td rowspan=2 style='width:1em;'></td><td rowspan=2 valign=top style='min-width:11em;'>(" + J(F.Pa)[8] + ",,|" + J(F.Pa)[9] + ",,|" + J(F.Pa)[10] + ",,|<div style='border-bottom:1px solid transparent;'>&nbsp;</div>|" + J(F.Pa)[12] + ",,|" + J(F.Pa)[13] + ",,)</td></tr><tr><td colspan=3 align=right style='padding:0;'><table cellpadding=0 cellspacing=0 style='border-collapse:collapse;'><tr><td style='padding-right:0.5em;'>" + J(F.Pa)[14] + ",</td></tr></table></tr></table><div id=rnktab_><br><br>" + K(J(F.Af)) + "</div></div>"));
                if (0 == T || 1 == T)
                    v += A("<div data-pane=d8 style='display:none;'><span style='display:none;'>" + J(F.Ni) + "</span>" + y(4) + "<table cellpadding=0 cellspacing=0 id=pftab style='margin:0 auto;'><tr><td valign=top style='min-width:6.5em;'>(" + J(F.Ka)[0] + ",|" + J(F.Ka)[1] + ",|" + J(F.Ka)[2] + ",|" + J(F.Ka)[3] + ",|" + J(F.Ka)[4] + ",)</td><td style='width:1em;'></td><td valign=top style='min-width:8em;'>(" + J(F.Ka)[5] + ",|" + J(F.Ka)[6] + ",|" + J(F.Ka)[7] + ",|" + J(F.Ka)[8] + ",|" + J(F.Ka)[9] + ",)</td><td style='width:1em;'></td><td valign=top style='min-width:6.5em;'>(" + J(F.Ka)[10] + ",|" + J(F.Ka)[11] + ",|" + J(F.Ka)[12] + ",|" + J(F.Ka)[13] + ",|" + J(F.Ka)[14] + ",)</td></tr><tr><td colspan=5 class=gray style='font-size:75%;padding:0.2em;'></td></tr></table><div id=pftab_><br><br>" + K(J(F.Af)) + "</div></div>");
                v += "<div data-pane=d9 class='nohdr init_hlist' style='display:none;height:100%;'><span style='display:none;'>" + J(F.ff) + "</span><div style='position:relative;height:100%;'><div class=sscl id=hlist style='position:relative;height:100%;border:solid 1px #444;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div></div></div>";
                v += "<div data-pane=d10 class='nohdr init_klist' style='display:none;height:100%;'><span style='display:none;'>" + J(F.gf) + "</span><div style='position:relative;height:100%;'><div class=sscl id=klist style='position:relative;height:100%;border:solid 1px #444;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div><button name=wgF0 class='ra0 bgb' style='position:absolute;left:0em;bottom:0em;'>－</button><button name=wgF1 class='ra0 bgb' style='position:absolute;left:2em;bottom:0em;'>－</button><button name=wgF2 class='ra0 bgb' style='position:absolute;left:4em;bottom:0em;'>－</button></div></div>";
                ib || (v += "<div data-pane=d11 class='nohdr init_tlist' style='display:none;height:100%;'><span style='display:none;'>Trainingβ</span><div style='position:relative;height:100%;'><div class=sscl id=tlist style='position:relative;height:100%;border:solid 1px #444;overflow-y:scroll;'></div><div class=sblink style='visibility:hidden;'>▼</div></div></div>");
                v = ib ? v + ("<div data-pane=d12 style='display:none;padding-top:2em;'><span style='display:none;'>Tools</span> <button name=openurl>OpenURL</button> <button name=openmember>会員ページ</button><br><br> <button name=webranking>ランキング</button> <button name=purchase>" + J(F.kf) + "</button><div style='font-size:75%;margin:1em;'>" + K("Powered by tenhou.net") + "</div></div>") : v + ("<div data-pane=d12 style='display:none;padding-top:2em;'><span style='display:none;'>Tools</span> <button name=openurl>OpenURL</button> <button name=help>" + J(F.uh) + "</button> <button name=hairi>" + J(F.wh) + "</button><br><br><button name=webranking>ランキング</button> <button name=purchase>" + J(F.kf) + "</button><br></div>");
                Va && (v += "<div data-pane=d13style='display:none;'><span style='display:none;'>Caution</span><div style='padding:1em 4em;'>" + J(F.oh) + "</div></div>");
                v += "</div><hr>";
                var E = !!Object.keys(jb).length;
                C.innerHTML = v + ("<table cellpadding=0 cellspacing=0 style='width:100%;'><tr><td style='position:relative;vertical-align:middle;'><button name=panePrev class=ra1 style='font-size:300%;width:50%;height:1.5em;'>　</button><button name=paneNext class=ra2 style='font-size:300%;width:50%;height:1.5em;'>　</button><div id=a30 style='position:absolute;top:0;font-size:300%;width:100%;padding:0.25em 0;pointer-events:none;'>　</div></td><td style='width:9.5em;'><button name=cancel style='width:100%;height:2.5em;" + (E ? "" : "display:none;") + "'>CANCEL</button><button name=logout style='width:100%;height:2.5em;" + (E ? "display:none;" : "") + "'>LOGOUT</button></td></tr></table>");
                v = P[2];
                E = P[ib ? 33 : 17];
                var S = P[ib ? 32 : 16];
                ib ? (E.length || (E = [0, 0, 1500]),
                S.length || (S = [0, 0, 1500]),
                Ja(".c11").innerHTML = K("四麻R") + ~~E[2] + " " + K("三麻R") + ~~S[2],
                Ja(".c12").innerHTML = K("BP:") + P[34],
                v = P[0],
                Ja(".c10").innerHTML = "<div style='position:relative;display:inline-block;overflow:hidden;width:2rem;height:2rem;border-radius:10%;border:0.08rem solid #444;vertical-align:middle;font-size:0.2rem;'><img src='https://cdn.tenhou.net/ron2/3/res/480x480/_" + Aa(v).replace(/%/g, "").toUpperCase() + ".jpg' style='height:100%;'/><div style='position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.1);'></div></div>") : v || E.length || S.length ? (E.length || (E = [0, 0, 1500]),
                S.length || (S = [0, 0, 1500]),
                Ja(".c10").innerHTML = "<table cellpadding=0 cellspacing=0 align=right><tr><td class=gray>四麻:</td><td>" + fa.$a[E[0]] + "</td><td class=gray>R</td><td>" + ~~E[2] + "</td><td style='padding:0 0 0 0.25em;'>" + E[1] + "</td><td class=gray>/</td><td>" + Ab[~~E[0]] + "</td><td class=gray>pt</td></tr><tr><td class=gray>三麻:</td><td>" + fa.$a[S[0]] + "</td><td class=gray>R</td><td>" + ~~S[2] + "</td><td style='padding:0 0 0 0.25em;'>" + S[1] + "</td><td class=gray>/</td><td>" + Ab[~~S[0]] + "</td><td class=gray>pt</td></tr></table>") : Ja(".c10").innerHTML = "<table cellpadding=0 cellspacing=0 align=right><tr><td class=gray>" + J(F.Ah) + "</td></tr></table>";
                Oc(C);
                P["#rule0"]();
                d();
                f();
                k();
                I();
                e(0);
                1E4 <= T && 2E4 > T && (x(R),
                yc.R("<DATE />"),
                u(R, {
                    rankingcs: ""
                }),
                yc.$b = -1,
                yc.R('<PXR V="-1" />'));
                ib && (Ja(".init_klist") && (n(),
                Ja(".init_klist").classList.remove("init_klist")),
                h(),
                mb("//wp.ron2.jp/3/eventconfig.json", function(N) {
                    if (N)
                        return console.log(N);
                    N = this.response;
                    try {
                        ma = JSON.parse(N)
                    } catch (G) {
                        console.trace(G, N)
                    }
                    for (N = 0; 2 > N; ++N) {
                        var M = ma[N];
                        M.href || (M.href = "//ron2.jp/3/sc/?" + [(1E4 > M.lobby ? "L" : "C") + ("0000" + M.lobby % 1E4).substr(-4), ("0000" + M.gt.toString(16)).substr(-4), Jb(new Date(M.ts)).substr(0, 12), Jb(new Date(M.te)).substr(0, 12), M.gspan].join("-"))
                    }
                    h();
                    I();
                    yc.R("<DATE />")
                }))
            },
            nh: function(v) {
                Ba.n = v.n.split(",");
                Ba.Vb = v.j.split(",");
                Ba.Rb = v.g.split(",");
                Z.lnn0 && (Z.lnn0.innerText = ~~Ba.n[0],
                Z.lnn2.innerText = ~~Ba.n[2],
                Z.lnn3.innerText = ~~Ba.n[3]);
                I();
                return 1
            },
            Ig: function(v) {
                var C = v.lobby;
                C && (4 == C.length ? (T = ~~C,
                P.o({
                    tag: "LOBBY"
                })) : 9 == C.length && (T = ~~("1" + C.substr(1, 4))));
                C = Ma.getElementById("chat");
                var E = v.text;
                E && E.length && (E = decodeURIComponent(E));
                var S = v.hidden;
                if (C && E && E.length && "1" != S) {
                    S = v.uname;
                    var N = v.color && v.color.match(/[0-9A-Fa-f]{6}/) ? "#" + v.color : S ? "" : "#FF0";
                    S && S.length && (E = decodeURIComponent(S) + ": " + E);
                    v = Ma.createElement("DIV");
                    N && (v.style.color = N);
                    v.innerText = E;
                    S = C.scrollHeight;
                    N = C.scrollTop + 1.1 * C.clientHeight;
                    C.appendChild(v);
                    S <= N && (C.scrollTop = C.scrollHeight)
                }
                if (E && E.match(/^\/prompt /)) {
                    C = E.split(" ");
                    var M = C[1];
                    E = ~~C[2];
                    var G = C[3]
                      , V = C[4];
                    v = "";
                    for (S = 5; S < C.length; ++S)
                        v += C[S] + (S != C.length - 1 ? " " : "");
                    v = Ca(v).replace(/&lt;br&gt;/g, "<br>");
                    Vb.o(v, 3, function() {
                        yc.R({
                            tag: "CHAT",
                            text: "/prompt " + M + " " + G
                        })
                    }, function() {
                        yc.R({
                            tag: "CHAT",
                            text: "/prompt " + M + " " + V
                        })
                    }, E, G, V)
                } else
                    "/attention please" == E && (Pa = 4,
                    e(0));
                return 1
            },
            Jg: function(v) {
                v && (R = v,
                R.rule = ("" + (R.rule || "")).split(","),
                R.csrule = ("" + (R.csrule || "")).split(","),
                R.join = ~~R.join,
                R.joinfee = ~~R.joinfee,
                R.players = ~~R.players,
                R.premiumonly = ~~R.premiumonly);
                if (Z.joincs0)
                    return x(R),
                    yc.R("<DATE />"),
                    1;
                P.o({
                    tag: "LOBBY"
                }, function() {
                    yc.tb()
                })
            },
            Vg: function(v) {
                var C = 0
                  , E = Z.joincs0;
                E && (C = Y(v, E, R.rule[0], R.rule[1], parseInt(R.rule[2], 16), parseInt(R.csrule[0], 16) & t.Bb.Li, a(Ka(R.title), P[0]), R.ib, R.joinfee, R.premiumonly),
                Z.joincs1.innerText = Z.joincs2.innerText = E.innerText,
                Z.joincs1.disabled = Z.joincs2.disabled = E.disabled);
                E = [0, 0];
                for (var S = 0; 2 > S; ++S) {
                    var N = Ja("#" + ["a23", "a24"][S]);
                    if (N) {
                        var M = ma[S];
                        T == M.lobby ? E[S] = Y(v, N, M.ts, M.te, M.gt, !1, !1, !0, 0, !1) : (N.innerText = "ENTER",
                        N.disabled = !1)
                    }
                }
                v = Math.max(C, E[0], E[1]);
                C && (v = Math.min(v, C));
                E[0] && (v = Math.min(v, E[0]));
                E[1] && (v = Math.min(v, E[1]));
                v && ($a && (clearTimeout($a),
                $a = void 0),
                $a = setTimeout(function() {
                    Z.testplay && yc.R("<DATE />")
                }, v));
                return 1
            },
            ej: f,
            fj: function(v) {
                Z.joincs0 && u(R, v)
            },
            panePrev: function() {
                e(-1)
            },
            paneNext: function() {
                e(1)
            },
            testplay: function() {
                Vb.ia(ib ? "<div class=A id='#testplay-" + (t.Ba | t.cc) + "'>４人打ち 東風戦</div><div class=A id='#testplay-" + (t.Ba | t.cc | t.c) + "'>３人打ち 東風戦</div>" : "<div class=A id='#testplay-" + t.pa + "'>" + t.Aa(t.pa, ib) + "<div class=desc>(４人打 東風 喰断アリ 赤アリ 速)</div></div><div class=A id='#testplay-0'>" + t.Aa(0, ib) + "<div class=desc>(４人打 東風 喰断アリ 赤アリ)</div></div><div class=A id='#testplay-" + t.c + "'>" + t.Aa(t.c, ib) + "<div class=desc>(３人打 東風 喰断アリ 赤アリ)</div></div><div class=A id='#testplay-" + (t.da | t.ea) + "'>" + t.Aa(t.da | t.ea, ib) + "<div class=desc>(４人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id='#testplay-" + (t.c | t.da | t.ea) + "'>" + t.Aa(t.c | t.da | t.ea, ib) + "<div class=desc>(３人打 東風 喰断アリ 赤アリ 祝儀)</div></div><div class=A id='#testplay-" + (t.c | t.Ob) + "'>東天紅 三麻β<div class=desc>(３人打 東天紅)</div></div>", "font-size:80%;text-align:left;", 0)
            },
            "#testplay": function(v, C) {
                g(!0) && (v = ~~C,
                Qb(!0, 3, 1),
                Z.cancel.style.display = "",
                Z.logout.style.display = "none",
                yc.R({
                    tag: "JOIN",
                    t: T + "," + v
                }))
            },
            rule: function(v) {
                P["#rule0"]("#" + v.id)
            },
            "#rule0": function(v, C) {
                for (var E = 0; E < Bb.length; ++E)
                    Ba[Bb[E]] = ~~Ba.Vb[E] + ":<div class=n2r>" + ~~Ba.Rb[E] + "</div>";
                var S = []
                  , N = P[2]
                  , M = P[ib ? 33 : 17]
                  , G = P[ib ? 32 : 16]
                  , V = "";
                v && void 0 === C && (V += "<div class=A id='" + v + "-0'>SELECT GAME</div>");
                var na = Wc;
                ~~D[B.we] && (na = na.concat(Xc));
                for (E = 0; E < na.length; ++E) {
                    var ha = !0
                      , ea = na[E]
                      , oa = ea & t.c ? G : M;
                    if (0 == T)
                        switch (t.ef(ea)) {
                        case 0:
                            ha = 13 <= oa[0] && 1800 <= oa[2] ? !1 : !0;
                            break;
                        case 1:
                            ha = 16 <= oa[0] && 2E3 <= oa[2] ? !1 : 9 <= oa[0] || 60 <= N;
                            break;
                        case 2:
                            ha = 13 <= oa[0] && 1800 <= oa[2] ? !0 : !1;
                            break;
                        case 3:
                            ha = 16 <= oa[0] && 2E3 <= oa[2] ? N : !1;
                            break;
                        case 6:
                            ha = 13 <= oa[0] && 1800 <= oa[2] ? N : !1
                        }
                    else if (1 != T && 1E4 > T && t.ef(ea))
                        continue;
                    ha ? (S[ea] = 1,
                    V && (V += "<div class='A nobr' id='" + v + "-" + ea + "'>" + w(ea) + "</div>")) : V && "#rule3" == v && (V += "<div class='A nobr' id='" + v + "-" + ea + "'>" + t.Aa(ea, ib) + "</div>")
                }
                0 == T && v && "#rule3" != v && V && (9 <= M[0] || 60 <= N || (V += "<div class=A id='" + v + "-" + t.Z + "'>※四麻上級卓</div>"),
                9 <= G[0] || 60 <= N || (V += "<div class=A id='" + v + "-" + (t.c | t.Z) + "'>※三麻上級卓</div>"),
                13 <= M[0] && 1800 <= M[2] || (V += "<div class=A id='" + v + "-" + t.v + "'>※四麻特上卓</div>"),
                13 <= G[0] && 1800 <= G[2] || (V += "<div class=A id='" + v + "-" + (t.c | t.v) + "'>※三麻特上卓</div>"),
                13 <= M[0] && 1800 <= M[2] && N || (V += "<div class=A id='" + v + "-" + (t.da | t.v) + "'>※四麻雀荘戦</div>"),
                13 <= G[0] && 1800 <= G[2] && N || (V += "<div class=A id='" + v + "-" + (t.c | t.da | t.v) + "'>※三麻雀荘戦</div>"),
                16 <= M[0] && 2E3 <= M[2] && N || (V += "<div class=A id='" + v + "-" + (t.Z | t.v) + "'>※四麻鳳凰卓</div>"),
                16 <= G[0] && 2E3 <= G[2] && N || (V += "<div class=A id='" + v + "-" + (t.c | t.Z | t.v) + "'>※三麻鳳凰卓</div>"));
                1 != T && v && void 0 === C && (V += "<div class=A id='" + v + "-showall'>※喰断ナシON/OFF</div>");
                if (V)
                    Vb.ia(V, "text-align:left;", 0);
                else if (v && "showall" == C)
                    B.Ua(B.we, ~~!~~D[B.we], 0);
                else {
                    N = m();
                    if (v) {
                        if (N[~~v.slice(-1)] == C)
                            return;
                        N[~~v.slice(-1)] = ~~C
                    }
                    for (E = 0; 6 > E; ++E)
                        if (Z["rule" + E] && Z["join" + E]) {
                            ea = ~~N[E];
                            if (!t.Kc(ea) && ~ea & t.h) {
                                switch (ea) {
                                case t.Z:
                                case t.c | t.Z:
                                    Vb.o(J(F.ph));
                                    break;
                                case t.v:
                                case t.c | t.v:
                                    Vb.o(J(F.th));
                                    break;
                                case t.Z | t.v:
                                case t.c | t.Z | t.v:
                                    Vb.o(J(F.qh));
                                    break;
                                case t.da | t.v:
                                case t.c | t.da | t.v:
                                    Vb.o(J(F.rh))
                                }
                                ea = 0
                            }
                            3 == E && ea && !S[ea] ? (N[E] = ea,
                            Z["join" + E].disabled = !0,
                            Z["rule" + E].innerHTML = t.Aa(ea, ib)) : (S[ea] || (ea = 0),
                            jb[ea] || (Z["join" + E].disabled = !ea),
                            N[E] = ea,
                            Z["rule" + E].innerHTML = w(ea))
                        }
                    D[B.ue] = N;
                    "#rule3" == v && f();
                    "#rule4" == v && d()
                }
            },
            join: function(v) {
                if (g(!0)) {
                    for (var C = P[2], E = P[0], S, N = 0; 2 > N; ++N)
                        if (v.id == ["a23", "a24"][N])
                            if (S = ~~ma[N].lobby,
                            T == S) {
                                if (!ja(E) && 3 >= C)
                                    return z.ERR({
                                        code: 1020
                                    });
                                S = ma[N].gt;
                                v.disabled = !0
                            } else {
                                S = 10001 == S ? "C00014237" : 10002 == S ? "C00215628" : "";
                                9 == S.length && yc.R({
                                    tag: "CS",
                                    lobby: S
                                });
                                Pa = 2;
                                v.disabled = !0;
                                return
                            }
                    if (!S)
                        if ("joincs0" != v.id && "joincs1" != v.id && "joincs2" != v.id)
                            for (C = m(),
                            S = C[~~v.id.slice(-1)],
                            N = 0; 6 > N; ++N)
                                S == C[N] && Z["rule" + N] && (Z["rule" + N].disabled = Z["join" + N].disabled = !0);
                        else if (R.ib)
                            S = parseInt(R.rule[2], 16),
                            Z.joincs0.disabled = Z.joincs1.disabled = Z.joincs2.disabled = !0;
                        else {
                            if (R.joinfee && ib) {
                                Vb.o(J(F.We).replace("###", R.joinfee), 3, function() {
                                    mb("//b.ron2.jp/csreg?lobby=" + T + "&tsssessionid=" + D[B.Ma], function(G) {
                                        if (G)
                                            return console.log(G);
                                        G = Kb(this.response);
                                        z.ERR({
                                            code: G.res
                                        });
                                        1027 == G.res && (P[1] = G.expire,
                                        k(),
                                        P.wd())
                                    })
                                });
                                return
                            }
                            if (R.joinfee) {
                                var M = D[B.fa];
                                if (!M || !M.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                    Vb.o(J(F.Kg));
                                    return
                                }
                                Vb.o(J(F.We).replace("###", R.joinfee), 3, function() {
                                    mb("https://b.mjv.jp/csreg?lobby=" + T + "&uname=" + M, function(G) {
                                        if (G)
                                            return console.log(G);
                                        G = Kb(this.response);
                                        z.ERR({
                                            code: G.res
                                        });
                                        1027 == G.res && (P[1] = G.expire,
                                        k(),
                                        P.wd())
                                    })
                                });
                                return
                            }
                            if (R.premiumonly && ib) {
                                z.ERR({
                                    code: 1020
                                });
                                return
                            }
                            if (R.premiumonly) {
                                M = D[B.fa];
                                if (!M || !M.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/)) {
                                    Vb.o(J(F.Lg));
                                    return
                                }
                                z.ERR({
                                    code: 1020
                                });
                                return
                            }
                        }
                    Qb(!0, 1);
                    Z.cancel.style.display = "";
                    Z.logout.style.display = "none";
                    yc.R({
                        tag: "JOIN",
                        t: T + "," + S
                    });
                    jb[S] = 1
                }
            },
            openurl: function() {
                Vb.o(J(F.yh) + "<br><input type=text size=20 style='font-size:100%;'/>", 3, function(v) {
                    v = v.getElementsByTagName("INPUT")[0];
                    Pb.lk(v.value)
                })
            },
            cancel: function() {
                Qb(!1, "rule", "join", 1);
                Z.cancel.style.display = "none";
                Z.logout.style.display = "";
                jb = {};
                P["#rule0"]();
                yc.R({
                    tag: "JOIN"
                })
            },
            logout: function() {
                Qb(!0, 3, 1);
                L.Na(11)
            },
            openmember: function() {
                Oa.open("//ron2.jp/3/member/?tsssessionid=" + D[B.Ma], "_blank")
            },
            purchase: function() {
                if (ib)
                    Oa.open("//ron2.jp/3/member/?tsssessionid=" + D[B.Ma], "_blank");
                else {
                    var v = D[B.fa];
                    v && v.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? Ra && Oa.store ? P.o({
                        tag: "STORE"
                    }) : Oa.open("https://tenhou.net/reg/?ID" + RegExp.$1, "_blank") : Vb.o("ログイン画面の「新規ID」からIDを取得してください")
                }
            },
            hairi: function() {
                Oa.open("https://tenhou.net/2/", Ra ? "_system" : "_blank")
            },
            help: function() {
                Oa.open("https://tenhou.net/man/", Ra ? "_system" : "_blank")
            },
            chatInput: function() {
                Vb.o("CHAT:<input type=text size=15 style='font-size:100%;'/>", 3, function(v) {
                    v = v.getElementsByTagName("INPUT")[0];
                    (v = v.value) && yc.R({
                        tag: "CHAT",
                        text: v
                    })
                })
            },
            ev0info: function() {
                Oa.open(ma[0].href, "_blank")
            },
            ev1info: function() {
                Oa.open(ma[1].href, "_blank")
            },
            webranking: function() {
                Oa.open(ib ? "//ron2.jp/3/ranking.html" : "https://tenhou.net/sc/", "_blank")
            },
            kk: function(v) {
                if (!ib && !Z.joincs0 && Ja("#a31")) {
                    var C = Ja("#a31").childNodes;
                    if (C && !(2 > C.length))
                        if (v && "join" == v.name) {
                            v = ~~v.id.slice(-1);
                            v = ~~m()[v];
                            var E = C[1]
                              , S = ~~P[17][0]
                              , N = ~~P[16][0]
                              , M = "";
                            if (t.Jc(v)) {
                                var G = [0, 0, 0, 0];
                                switch (t.ce(v)) {
                                case 0:
                                    G[0] = 20;
                                    G[1] = 10;
                                    break;
                                case 1:
                                    G[0] = 40;
                                    G[1] = 10;
                                    break;
                                case 2:
                                    G[0] = 50;
                                    G[1] = 20;
                                    break;
                                case 3:
                                    G[0] = 60,
                                    G[1] = 30
                                }
                                v & t.c ? (G[0] += G[1],
                                G[1] = 0,
                                G[2] = zb[N]) : G[3] = zb[S];
                                v & t.B && (G[0] *= 1.5,
                                G[1] *= 1.5,
                                G[2] *= 1.5,
                                G[3] *= 1.5);
                                M += fa.$a[v & t.c ? N : S] + K("[");
                                M = v & t.c ? M + (K("1" + tb.nb(1)) + "+" + G[0] + "   " + K("2" + tb.nb(2)) + "+" + G[1] + "   " + K("3" + tb.nb(3)) + (0 > G[2] ? "" : "+") + G[2]) : M + (K("1" + tb.nb(1)) + "+" + G[0] + "   " + K("2" + tb.nb(2)) + "+" + G[1] + "   " + K("3" + tb.nb(3)) + "+0   " + K("4" + tb.nb(4)) + (0 > G[3] ? "" : "+") + G[3]);
                                M += K("]") + " "
                            }
                            M += Gb((t.fe(v) ? "１局" : v & t.B ? "東南" : "東風") + (t.Jc(v) ? v & t.c ? "+3局サドンデス" : "+4局サドンデス" : "打ち切り"));
                            M += " " + Gb(K("ウマ") + (t.fe(v) ? "×" : t.Yb(v) ? v & t.c ? "0-30" : "10-30" : v & t.c ? "0-20" : "10-20"));
                            M += " " + Gb(K("1本場") + (t.fe(v) ? "--" : t.Yb(v) && ~v & t.B ? v & t.c ? "1000" : "1500" : v & t.c ? "200" : "300"));
                            M += " " + Gb(K("明槓ドラ") + (t.Jc(v) ? "後" : "先"));
                            M += " " + Gb(K("喰断") + (v & t.ab ? "×" : "○"));
                            M += " " + Gb(K("祝儀") + (~v & t.ea ? "×" : v & t.da ? "1枚5000点" : "1枚2000点"));
                            M += " " + Gb(K("東西場") + (t.Yb(v) && ~v & t.B ? "○" : "×"));
                            M += " " + Gb(K("和了止め") + "○");
                            M += " " + Gb(K("聴牌止め") + "○");
                            t.Yb(v) && (M += " " + Gb(K("段位変動") + "ナシ"));
                            E.innerHTML = M;
                            C[0].style.display = "none";
                            C[1].style.display = ""
                        } else
                            C[1].innerHTML = "",
                            C[0].style.display = "",
                            C[1].style.display = "none"
                }
            },
            qk: function(v) {
                var C = m();
                C[3] = C[4] = v;
                D[B.ue] = C
            },
            sk: function(v) {
                var C = {};
                if (v)
                    for (var E = 0; E < v.length; ++E)
                        for (var S = v[E], N = S[3], M = 0; 4 > M; ++M)
                            ja(S[4 + 3 * M]) && (C[S[4 + 3 * M]] = N);
                var G = Ja("#plist");
                G && mb("//wp.ron2.jp/3/lobby_stat_live/L0001.ini", function(V) {
                    function na(Ia, La, Sa) {
                        Sa = "G" != Sa ? K("待機中") : C[La] ? t.Aa(C[La], ib) : "対戦中";
                        return (Ia && 0 == Ia % wa ? "</tr><tr>" : "") + "<td style='color:#FFF;" + (4 >= ha.length ? "text-align:left;" : "") + (12 >= ha.length || 1 > Ia / wa ? "" : "padding-top:0.4em;") + (4 >= ha.length && Ia % wa ? "padding-left:1em;'" : "") + "'><div style='position:relative;display:inline-block;overflow:hidden;width:" + ea + "rem;height:" + ea + "rem;border-radius:10%;border:0.08rem solid #444;vertical-align:middle;font-size:" + ea / 10 + "rem;'><img src='https://cdn.tenhou.net/ron2/3/res/480x480/_" + Aa(La).replace(/%/g, "").toUpperCase() + ".jpg' style='height:100%;'/>" + (!La || 4 >= ha.length ? "" : "<div class=ts1 style='position:absolute;width:100%;padding:" + ea / 10 * .15 + "rem 0 0 0;bottom:0;background:rgba(0,0,0,0.8);text-align:center;'>" + La + "</div><div class=ts1 style='position:absolute;width:100%;padding:" + ea / 10 * .15 + "rem " + ea / 10 * .5 + "rem;top:0;background:rgba(0,0,0,0.5);'>" + Sa + "</div>") + "</div>" + (4 >= ha.length ? "<div class=ts1e style='display:inline-block;font-size:" + oa + "rem;vertical-align:middle;'>" + La + (La ? "<br>" : "") + Sa + "</div>" : "") + "</td>"
                    }
                    if (V)
                        return console.log(V);
                    var ha = (this.response || "").split(/\r?\n/).map(function(Ia) {
                        return Ka(Ia)
                    }).filter(function(Ia) {
                        return ja(Ia)
                    })
                      , ea = 10 >= ha.length ? 6 : 5.1
                      , oa = 2 >= ha.length ? 1.2 : 4 >= ha.length ? 1 : ea / 9
                      , wa = 4 >= ha.length ? 2 : 12 >= ha.length ? ha.length + 1 >> 1 : 6;
                    V = "<table cellpadding=0 cellspacing=0 style='" + (4 >= ha.length ? "margin:auto;" : "width:100%;") + "height:100%;'><tr>";
                    for (var Ea = 0; Ea < ha.length; ++Ea)
                        V += na(Ea, ha[Ea].slice(0, -2), ha[Ea].slice(-1));
                    for (var Wa = Math.max(1, Math.ceil(ha.length / wa)); Ea < wa * Wa; ++Ea)
                        V += na(Ea, "", K("準備中"));
                    G.innerHTML = V + "</tr></table>"
                })
            }
        }
    }());
    P["#rule1"] = P["#rule2"] = P["#rule3"] = P["#rule4"] = P["#rule5"] = P["#rule0"];
    Da(P, {
        NINTEI: function(a, m) {
            a = a.nintei;
            var g = "%E6%96%B0%E4%BA%BA %EF%BC%99%E7%B4%9A %EF%BC%98%E7%B4%9A %EF%BC%97%E7%B4%9A %EF%BC%96%E7%B4%9A %EF%BC%95%E7%B4%9A %EF%BC%94%E7%B4%9A %EF%BC%93%E7%B4%9A %EF%BC%92%E7%B4%9A %EF%BC%91%E7%B4%9A %E5%88%9D%E6%AE%B5 %E4%BA%8C%E6%AE%B5 %E4%B8%89%E6%AE%B5 %E5%9B%9B%E6%AE%B5 %E4%BA%94%E6%AE%B5 %E5%85%AD%E6%AE%B5 %E4%B8%83%E6%AE%B5 %E5%85%AB%E6%AE%B5 %E4%B9%9D%E6%AE%B5 %E5%8D%81%E6%AE%B5 %E5%A4%A9%E9%B3%B3%E4%BD%8D".split(" ")
              , e = !1
              , c = -1
              , b = ""
              , k = "20201010";
            a.match(/%E3%82%B5%E3%83%B3%E3%83%9E/) && (e = !0);
            a.match(/ ((?:%[0-9A-F]{2})+)%0A%0A/) && (c = g.indexOf(RegExp.$1));
            a.match(/%0A%0A([^ ]+) %E6%AE%BF%0A/) && (b = decodeURIComponent(RegExp.$1));
            a.match(/%0A%0A(\d{4})%E5%B9%B4(\d{2})%E6%9C%88(\d{2})%E6%97%A5%0A/) && (k = RegExp.$1 + RegExp.$2 + RegExp.$3);
            a = decodeURIComponent(a);
            0 < c && b && (a = (e ? J(F.Sh) : J(F.Th)).replace(/\$UNAME/g, b).replace(/\$DAN/g, decodeURIComponent(g[c])).replace(/\$YYYY/g, k.substr(0, 4)).replace(/\$MM/g, k.substr(4, 2)).replace(/\$DD/g, k.substr(6, 2)));
            a = a.replace(/\n/g, "<br>");
            m.innerHTML = "<div style='font-family:cwTeX-Q-Kai-T,icons2,serif;font-size:400%;'>認定</div><div style='text-align:left;margin:1em 0;display:inline-block;'>" + a + "</div><button name=ok style='padding:0 2em;'>OK</button>";
            Oc(m);
            P.b.style.opacity = "0";
            qb(function() {
                Da(P.b.style, {
                    transition: "all 3000ms ease-out 0ms",
                    opacity: ""
                });
                sb(P.b, rb)
            }, 1)
        }
    });
    Da(P, function() {
        function a(g) {
            for (var e = 0; 3 > e; ++e)
                Z["pane" + e].style.display = e == g ? "" : "none"
        }
        var m = new Image;
        setTimeout(function() {
            m.src = "https://cdn.tenhou.net" + (ib ? "/ron2/3/res/logo_20220719.png" : "/3/res/img/bglogow_0921x0651.png")
        }, 1);
        return {
            LOGIN: function(g, e) {
                Uc.style.display = "";
                Vc.style.display = "none";
                for (var c = 0; 4 > c; ++c)
                    jc.Ie[c].style.display = "none";
                L.b.style.display = "none";
                z.va();
                c = "";
                location.search.match(/^\?(L[1-9][0-9]{3})/) ? c = K(J(F.mf)) + RegExp.$1 : location.search.match(/^\?(C[0-9]{8})/) && (c = K(J(F.lf)) + RegExp.$1.substr(0, 5));
                c = "<div style='position:relative;padding:0.5em 0em;'><img id=a27 src='" + m.src + "' style='width:18em;'/><span style='position:absolute;bottom:2em;'>" + c + "</span></div><div id=pane0><button name=clearid>" + J(F.Kh) + "</button><div class=select-wrapper><button name=sx></button></div><div class=select-wrapper><button name=mvlb>" + (c ? J(F.Mh) : J(F.Lh)) + "</button></div><button name=ok style='padding:0 1em;'>OK</button></div><div id=pane1><button class=w100 name=ok>" + J(F.Oh) + "</button><br><button name=regid>" + J(F.nf) + "</button><button name=idcont>" + J(F.Nh) + "</button><br></div><div id=pane2><button name=regemail>" + J(F.nf) + "</button><button name=ok>LOGIN</button><br></div>";
                e.innerHTML = c;
                Oc(e);
                a(-1);
                Z["pane" + (ib ? 2 : D[B.fa] ? 0 : 1)].style.display = "";
                P["#sx"]();
                if ("AUTOLOGIN" == g.tag || D[B.Lb])
                    P.b.style.display = "none",
                    P.ok()
            },
            clearid: function() {
                Vb.o("<hr><input type=text readonly value='" + (D[B.ee] ? "ID########-########" : D[B.fa]) + "' style='border:none;width:100%;text-align:center;font-size:100%;'/><hr>" + J(F.Jh), 3, function() {
                    D.removeItem(B.fa);
                    a(1)
                })
            },
            sx: function() {
                Vb.ia("<div class=A id='#sx-M'>" + J(F.qf) + "</div><div class=A id='#sx-F'>" + J(F.pf) + "</div>", "", 0)
            },
            "#sx": function(g, e) {
                "F" == (g ? e : "F" == D[B.Gb] ? "F" : "") ? (Z.sx.innerHTML = J(F.Ph),
                D[B.Gb] = "F") : (Z.sx.innerHTML = J(F.Qh),
                D.removeItem(B.Gb))
            },
            mvlb: function() {
                Vb.ia("<a class=A href='?L0000' >" + J(F.ei) + J(F.fi) + "</a><a class=A href='?C00112233' >" + J(F.Zh) + J(F.$h) + "</a><a class=A href='?C00223344' >" + J(F.ai) + J(F.bi) + "</a><a class=A href='?C00334455' >" + J(F.ci) + J(F.di) + "</a><div class=A id='#sellb' >" + J(F.ii) + J(F.ji) + "</div><a class=A href='https://tenhou.net/make_lobby.html' target=_blank>" + J(F.gi) + J(F.hi) + "</a>", "font-size:80%;", 0)
            },
            "#sellb": function() {
                var g = "0000";
                location.search.match(/^\?(L[1-9][0-9]{3}|C[0-9]{8})/) && (g = RegExp.$1.substr(1));
                Vb.o(J(F.Uh) + "<div style='font-size:75%;'>" + J(F.mf) + "L<span style='color:#F00;'>8141</span> / " + J(F.lf) + "C<span style='color:#F00;'>00112233</span></div><input type=text size=15 value='" + g + "' style='font-size:100%;'/><br>", 3, function(e) {
                    e = e.getElementsByTagName("INPUT")[0];
                    e = e.value;
                    e.match(/^L?(\d{4})$/) ? location.href = "?L" + RegExp.$1 : e.match(/^C?(\d{8})$/) && (location.href = "?C" + RegExp.$1)
                })
            },
            regid: function() {
                Vb.o(J(F.Xh) + "<br><input type=text size=22 style='font-size:100%;'/><br>", 3, function(g) {
                    g = g.getElementsByTagName("INPUT")[0];
                    var e = g.value;
                    if (e)
                        return mb("https://b.mjv.jp/regid?q=1&uname=" + encodeURIComponent(e), function(c) {
                            if (c)
                                return console.log(c);
                            c = Kb(this.response);
                            0 != c.res ? z.ERR({
                                code: c.res
                            }) : (e = decodeURIComponent(c.uname),
                            Vb.o(e + "<br><br>" + J(F.Rh), 3, function() {
                                mb("https://b.mjv.jp/regid?uname=" + encodeURIComponent(e), function(b) {
                                    if (b)
                                        return console.log(b);
                                    b = Kb(this.response);
                                    1012 != b.res ? z.ERR({
                                        code: b.res
                                    }) : (D[B.fa] = b.id,
                                    Vb.o("<hr><input type=text readonly value='" + D[B.fa] + "' style='border:none;width:100%;text-align:center;font-size:100%;'/><hr>" + J(1012)),
                                    a(0))
                                })
                            }))
                        }),
                        !0
                })
            },
            idcont: function() {
                Vb.o(J(F.Vh) + "<br><input type=text size=22 placeholder='ID00000000-aabbccdd' style='font-size:100%;margin:0.25em'/><br><div id=info></div><small class=gray>" + J(F.Wh) + "</small>", 3, function(g) {
                    g = g.getElementsByTagName("INPUT")[0];
                    var e = g.value;
                    g = Ma.getElementById("info");
                    if ("ID00000000" != e.substr(0, 10) && e.match(/^ID[0-9A-F]{8}\-[0-9a-zA-Z]{8}$/))
                        g.innerHTML = "";
                    else
                        return g.innerHTML = "<span style='font-size:75%;color:#F00'>" + J(F.Yh) + "</span>",
                        !1;
                    D[B.fa] = e;
                    a(0);
                    return !0
                })
            },
            regemail: function() {
                function g(b, k) {
                    var d = Ja("#a22");
                    d.innerHTML = "loading";
                    var f = Ja("INPUT[type=submit]");
                    f.disable = !0;
                    Nb(b, k, function(l) {
                        if (l)
                            return alert(l);
                        d.innerHTML = this.response;
                        f.value = "//ron2.jp/3/member/?tos" != b ? "OK" : "ja" == tb.wc() ? "同意する" : "AGREE";
                        Na(d);
                        if (l = Ja("INPUT[name=tsssessionid]"))
                            D[B.Ma] = l.value
                    })
                }
                function e() {
                    P.o({
                        tag: "LOGIN"
                    })
                }
                var c = "";
                Vb.o("loading", 3, function(b) {
                    for (var k = b.getElementsByTagName("INPUT"), d = {}, f = 0; f < k.length; ++f)
                        k[f].name && k[f].value && (d[k[f].name] = encodeURIComponent(k[f].value));
                    if (d.email && d.email_) {
                        if (!/^[a-z0-9]+[a-z0-9\._-]*@[a-z0-9_-]+[a-z0-9\._-]+$/.test(Ka(d.email)) || d.email != d.email_)
                            return alert("メールアドレスを確認してください。+記号や大文字は使用できません。"),
                            !1;
                        g("//ron2.jp/3/member/?email=", "email=" + d.email + "&email_=" + d.email_)
                    } else if (d.digit6 && d.eid)
                        g("//ron2.jp/3/member/?mailsended=" + d.eid, "digit6=" + d.digit6);
                    else if (d.uname && d.eid)
                        g("//ron2.jp/3/member/?" + d.eid, "uname=" + d.uname),
                        c = d.uname;
                    else if (d.password && d.password_ && d.eid) {
                        if (6 > Ka(d.password).length || d.password != d.password_)
                            return alert("パスワードをもう一度確認してください"),
                            !1;
                        g("//ron2.jp/3/member/?" + d.eid, "password=" + d.password + "&password_=" + d.password_ + "&uname=" + c)
                    } else if (d.eid)
                        g("//ron2.jp/3/member/?mailsended=" + d.eid);
                    else if (b.getElementsByTagName("TEXTAREA").length)
                        g("//ron2.jp/3/member/?email=", null);
                    else
                        return e();
                    return !1
                }, e);
                P.qa(function() {
                    g("//ron2.jp/3/member/?tos")
                })
            }
        }
    }());
    P.AUTOLOGIN = P.LOGIN;
    Da(P, {
        SPLASH: function(a, m) {
            var g = Oa.tenhouEventInfo
              , e = 4 > g.length ? 2 : 5
              , c = .5 > Math.random() ? 0 : 2;
            a = "<table cellpadding=0 cellspacing=0 align=center width=100% style='font-size:0;'><tr>";
            for (var b = 0; b < e; ++b) {
                var k = g.splice(Math.floor(Math.random() * g.length), 1)[0]
                  , d = b != c && 5 == e ? 1 : 2
                  , f = k.href
                  , l = k.img ? k.img : k.href + "title.jpg";
                "https://" != f.substr(0, 8) && (f = "https://tenhou.net" + f);
                "https://" != l.substr(0, 8) && (l = "https://cdn.tenhou.net" + l);
                a += "<td rowspan=" + d + " colspan=" + d + " width=" + 25 * d + "% ><a href='" + f + "' target=_blank><img src='" + l + "' border=0 style='width:100%;'/></a></td>";
                2 == b && (a += "</tr><tr>");
                g.length < e - b - 1 && g.push(k)
            }
            a += "</tr></table><div style='padding:0.75em 0;'><small>";
            Oa.info && (a += Oa.info);
            Oa.tenhouAnnounce && (a += Oa.tenhouAnnounce);
            g = location.href.replace(/^https?:/, "tenhouapp:");
            e = "https://tenhou.net/4/" + location.search;
            a += "</small></div><div style='position:relative;'><button disabled name=ok style='width:6em;'>OK</button>";
            Ra || ib || (a += "<a href='" + g + "' style='position:absolute;border:1px solid #444;border-radius: 0.2em;top:0.75em;padding:0.5em;color:#888;right:0;'>アプリで開く</a>");
            Ra || ib || (a += "<div style='position:absolute;left:0;top:1.25em;'><span style='position:absolute;color:#F00;font-weight:bold;font-size:75%;top:-2em;'>NEW!</span><a href='" + e + "' style='border:1px solid #444;border-radius:0.2em;padding:0.5em;color:#888;'>Desktop4K版で開く</a></div>");
            m.innerHTML = a + "</div>";
            Oc(m);
            setTimeout(function() {
                Ja("[name=ok]").disabled = !1
            }, 1E3)
        }
    });
    Da(P, function() {
        var a, m = Oa.store;
        return {
            STORE: function(g, e) {
                a = -1;
                g = "<div><br><br>" + J(F.cj) + "<br><br><div class=select-wrapper><button name=iap>SELECT PRODUCT</button></div><br><br><button name=storePurchase style='width:8em;'>" + J(F.dj) + "</button><br></div><br><br><hr><button name=exit style='width:6em;'>CLOSE</button>";
                e.innerHTML = g;
                Oc(e)
            },
            storePurchase: function() {
                if (-1 != a) {
                    var g = D[B.fa];
                    g.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) && (g = RegExp.$1,
                    m.order(a).then(function() {
                        Qb(!0, 2)
                    }).error(function(e) {
                        Qb(!1, 2);
                        Vb.o("STORE ERROR " + e.code + ": " + e.message)
                    }))
                }
            },
            iap: function() {
                var g = "", e;
                for (e in m.products) {
                    var c = m.products[e];
                    c.valid && (g += "<div class=A id='#iap-" + e + "'>" + Gb(c.title) + "<br>" + c.price + "</div>")
                }
                Vb.ia(g, "font-size:75%;", 0)
            },
            "#iap": function(g, e) {
                g = m.products[~~e];
                a = g.id;
                Z.iap.innerHTML = g.title + " " + g.price
            }
        }
    }());
    Ra && Fa(Ma, "deviceready", function() {
        var a = Oa.store;
        if (1.3 > (Oa.storeVersion || 0)) {
            var m = "net.tenhou.catalog20170119.";
            a.register({
                id: m + "ex30",
                type: a.CONSUMABLE
            });
            a.register({
                id: m + "ex60",
                type: a.CONSUMABLE
            });
            a.register({
                id: m + "ex120",
                type: a.CONSUMABLE
            });
            a.register({
                id: m + "ex180",
                type: a.CONSUMABLE
            });
            a.register({
                id: m + "ex300",
                type: a.CONSUMABLE
            })
        } else
            m = "net.tenhou.catalog20170211.",
            a.register({
                id: m + "ex30",
                type: a.NON_RENEWING_SUBSCRIPTION
            }),
            a.register({
                id: m + "ex60",
                type: a.NON_RENEWING_SUBSCRIPTION
            }),
            a.register({
                id: m + "ex120",
                type: a.NON_RENEWING_SUBSCRIPTION
            }),
            a.register({
                id: m + "ex180",
                type: a.NON_RENEWING_SUBSCRIPTION
            }),
            a.register({
                id: m + "ex300",
                type: a.NON_RENEWING_SUBSCRIPTION
            }),
            a.register({
                id: m + "ex600",
                type: a.NON_RENEWING_SUBSCRIPTION
            });
        a.when("product").approved(function(g) {
            D[B.fa].match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? (a.validator = "https://tenhou.net/reg/via_cordova.cgi?id=" + RegExp.$1,
            g.verify()) : g.finish()
        });
        a.when("product").verified(function(g) {
            g.finish()
        });
        a.when("product").finished(function() {
            Qb(!1, 2)
        });
        a.when("product").cancelled(function() {
            Qb(!1, 2)
        });
        a.error(function(g) {
            "6777001" == g.code || "6777002" == g.code ? a = void 0 : Tb("------ error", JSON.stringify(g));
            Qb(!1, 2)
        });
        a.ready(function() {});
        a.refresh()
    });
    Da(P, function() {
        function a(u) {
            return u.replace(/\s+$/, "")
        }
        function m(u) {
            return wb(u).replace(/(\d)([mpsz])(?![mpsz])/g, function(y, r, w) {
                y = ("m" == w ? 10 : "p" == w ? 20 : "s" == w ? 30 : 40) + ~~r;
                10 == y && (y = 51);
                20 == y && (y = 52);
                30 == y && (y = 53);
                40 == y && (y = 69);
                r = ~~(.6 * Q.I[0]);
                return "<img src='https://cdn.tenhou.net/6/img/edit" + la(3, r) + 0 + la(2, y) + ".png' style='background:" + (69 == y ? "#444" : "#EEE") + ";vertical-align:middle;' width='" + r / cb + "px' />"
            })
        }
        function g(u) {
            var y = u >> 2;
            return (27 > y && 16 == u % 36 ? "0" : y % 9 + 1) + "mpsz".substr(y / 9, 1)
        }
        function e(u) {
            Z.trtitle.innerHTML = p.title || "天鳳トレーニング";
            Z.trprogress.innerHTML = "<span class=gray style='float:right;font-weight:bold;'>" + (u ? "A" : "Q") + la(2, l ? l[0] + 1 : 1) + "/" + la(2, l ? l.container.length : 1) + "</span>";
            Z.trmain.innerHTML = m((p[u ? "explanation" : "question"] || "").replace(/\n/g, "<br>"));
            Z.trmain.style.height = (u ? 14 : 8) + "em";
            Z.ok.disabled = !1;
            switch (u) {
            case 0:
                x = !1;
                P.b.classList.remove("hide");
                Z.ok.innerHTML = "OK";
                yc.Pc();
                z.va();
                z.connected = 15;
                u = P[17] || "";
                yc.Sa({
                    tag: "UN",
                    n0: P[0] || "自家",
                    n1: "下家",
                    n2: "対面",
                    n3: "上家",
                    dan: ~~u[0] + ",0,0,0",
                    rate: parseFloat(u[2]) + ",0,0,0",
                    sx: ("F" == D[B.Gb] ? "F" : "M") + ",M,M,M"
                });
                z.Fa = 0;
                jc.na();
                var y = [qa(yb(p.hai0)), qa(yb(p.hai1)), qa(yb(p.hai2)), qa(yb(p.hai3))];
                u = [];
                p.packet && Array.prototype.push.apply(u, JSON.parse(JSON.stringify(p.packet)));
                2 == y[0].length % 3 && u.push({
                    tag: "T" + y[0].pop()
                });
                var r = (p.seed ? p.seed : "0,0,0,0,0,").split(",");
                p.kyoku && (r[0] = p.kyoku);
                p.honba && (r[1] = p.honba);
                p.nagare && (r[2] = p.nagare);
                p.dora && (r[5] = r[5] = yb(p.dora));
                yc.Sa({
                    tag: "TRAININGINIT",
                    seed: "" + r,
                    ten: p.ten,
                    oya: ~~p.oya,
                    hai0: "" + ua(y[0]),
                    m0: p.m0,
                    kawa0: yb(p.kawa0),
                    hai1: "" + ua(y[1]),
                    m1: p.m1,
                    kawa1: yb(p.kawa1),
                    hai2: "" + ua(y[2]),
                    m2: p.m2,
                    kawa2: yb(p.kawa2),
                    hai3: "" + ua(y[3]),
                    m3: p.m3,
                    kawa3: yb(p.kawa3)
                });
                for (y = 0; y < u.length; ++y)
                    yc.Sa(Yb.Zc(u[y]));
                break;
            case 1:
                Z.ok.innerHTML = "NEXT"
            }
            P.Se(1)
        }
        function c(u) {
            if (h)
                return u();
            mb("https://tenhou.net/3/tr/auth.cgi?" + D[B.fa], function(y) {
                if (y)
                    return z.ERR({
                        code: 1200
                    });
                h = this.response;
                u()
            })
        }
        function b(u) {
            p = l = void 0;
            n = u.match(/\.json$/) ? u : "free-sample.json";
            mb("https://tenhou.net/3/tr/" + n + "?" + h, function(y) {
                if (y)
                    return alert("問題ファイルを読み込めませんでした");
                y = this.response;
                try {
                    p = JSON.parse(y)
                } catch (I) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + I);
                    return
                }
                if ("membersonly" == p.error || "subscribe" == p.error) {
                    y = D[B.fa];
                    if (!y || !y.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return z.ERR({
                            code: 1200
                        });
                    "membersonly" == p.error ? Vb.o("この問題は有料会員に公開されています。<br><br>会費のお支払いをお願いいたします。", 3, P.purchase, P.exit) : Vb.ia("<div style='margin:0.5em;'>購読期間と料金を選択してください。</div><div class=A id='#trs-1'>1日間 - 有効期限7日分</div><div class=A id='#trs-7'>7日間 - 有効期限8日分</div><div class=A id='#trs-21'>21日間 - 有効期限9日分</div>", "", 0)
                } else if (p.container)
                    l = p,
                    P["#trjump"](0, 0);
                else if (Pb.tredit) {
                    if (!Z.json)
                        if (90 > P[2])
                            alert("編集機能を利用するには有効期限の残り日数が90日以上必要です。");
                        else {
                            ac.style.height = $b = 0;
                            Qa.style.overflow = "";
                            for (var r = "<br><hr><br><table class=trtab width=100%><tr><td class=bth width=1>表題</td><td width=100%><input name=title style='width:100%;'></td></tr><tr><td class=bth width=1>問題</td><td width=100%><textarea name=question maxlength=1024 rows=10 style='width:100%;'></textarea></td></tr><tr><td class=bth width=1>回答</td><td width=100%><input name=answer style='width:100%;'><br>" + K("カンマ区切 例)8m,8p,r2p(リーチ2p)") + "</td></tr><tr><td class=bth width=1>解説</td><td width=100%><textarea name=explanation maxlength=4096 rows=10 style='width:100%;'></textarea></td></tr><tr><td class=bth width=1>補足</td><td width=100%><textarea name=comment maxlength=4096 rows=10 style='width:100%;'></textarea></td></tr></table><hr><table class=trtab width=100%><tr><td class=bth width=1>局</td><td><input name=kyoku><br>" + K("0:東1局 ... 7:南4局") + "</td></tr><tr><td class=bth width=1>本場</td><td><input name=honba></td></tr><tr><td class=bth width=1>供託</td><td><input name=nagare></td></tr><tr><td class=bth width=1>ドラ</td><td><input name=dora></td></tr><tr><td class=bth width=1>親</td><td><input name=oya><br>" + K("0:自家 1:下家 2:対面 3:上家") + "</td></tr></table>", w = ["自家", "下家", "対面", "上家"], A = 0; 4 > A; ++A)
                                r += "<br><hr><br><span class=bth>■" + w[A] + "</span><br><table class=trtab width=100%><tr><td class=bth width=1>点数</td><td width=100%><input name=ten" + A + " style='width:100%;'></td></tr>",
                                A || (r += "<tr><td class=bth width=1>手牌</td><td width=100%><input name=hai" + A + " style='width:100%;'></td></tr>"),
                                r += "<tr><td class=bth width=1>副露</td><td width=100%><input name=m" + A + " style='width:100%;'></td></tr><tr><td class=bth width=1>河</td><td width=100%><input name=kawa" + A + " style='width:100%;'></td></tr></table>";
                            r = r + "<br><hr><br><div id=verify></div><br><hr><br><span class=bth>■JSON</span><br><textarea name=json maxlength=8192 rows=40 style='width:100%;font-size:75%;'>" + (JSON.stringify(p, null, "\t") + "</textarea>");
                            cc.innerHTML = r;
                            r = cc.getElementsByTagName("TEXTAREA");
                            for (w = 0; w < r.length; ++w)
                                Fa(r[w], "change", "json" == r[w].name ? f : d);
                            r = cc.getElementsByTagName("INPUT");
                            for (w = 0; w < r.length; ++w)
                                Fa(r[w], "change", d);
                            Oc(cc, Z)
                        }
                    123 == u.charCodeAt(0) && (y = p,
                    p = JSON.parse(u),
                    p.title = p.title || y.title,
                    p.question = p.question || y.question,
                    p.answer = p.answer || y.answer,
                    p.explanation = p.explanation || y.explanation,
                    p.comment += y.comment,
                    y = JSON.stringify(p));
                    Z.json.value = y;
                    f()
                } else
                    P["#trjump"](0, 0)
            })
        }
        function k() {
            var u = "■合計得点<br>'" + (Z.ten0.value + "' + '" + Z.ten1.value + "' + '" + Z.ten2.value + "' + '" + Z.ten3.value + "' = " + (~~Z.ten0.value + ~~Z.ten1.value + ~~Z.ten2.value + ~~Z.ten3.value) + "<br><br>");
            u += "■使用枚数<br>";
            var y = yb(Z.hai0.value);
            y += "," + yb(Z.dora.value);
            for (var r = 0; 4 > r; ++r) {
                y += "," + yb(Z["kawa" + r].value);
                var w = Z["m" + r].value;
                if (w) {
                    w = w.split(",");
                    for (var A = 0; A < w.length; ++A) {
                        var I = {
                            m: w[A]
                        };
                        Ac(I);
                        var Y = I[0];
                        if (1 == Y.length)
                            switch (I[2]) {
                            case 4:
                            case 5:
                            case 2:
                                I = Y[0] >> 2,
                                Y = [I, I + 1, I + 2, I + 3]
                            }
                        Y && (y += "," + Y)
                    }
                }
            }
            r = [];
            for (A = 0; 38 > A; ++A)
                r[A] = 0;
            y = y.split(",");
            for (A = 0; A < y.length; ++A)
                I = y[A],
                "" != I && 255 != I && 254 != I && (136 == I ? r[30]++ : 16 == I ? r[0]++ : 52 == I ? r[1]++ : 88 == I ? r[2]++ : r[10 * ~~(I / 4 / 9) + ~~(I / 4) % 9 + 1]++);
            r[30] = "-";
            for (A = 0; 38 > A; ++A)
                u += m(30 == A ? "0z" : ub(36 * ~~(A / 10) + (A % 10 ? A % 10 * 4 - 1 : 16))) + r[A] + " ",
                9 == A % 10 && (u += "<br>");
            Z.verify.innerHTML = u
        }
        function d() {
            if (Z.json) {
                var u = p.packet;
                p = {};
                p.title = a(Z.title.value);
                p.question = a(Z.question.value);
                p.answer = a(Z.answer.value);
                p.explanation = a(Z.explanation.value);
                p.comment = a(Z.comment.value);
                "" == p.comment && delete p.comment;
                var y = "0 0 0 0 0 ".split(" ");
                "0" != Z.kyoku.value && (y[0] = Z.kyoku.value);
                "0" != Z.honba.value && (y[1] = Z.honba.value);
                "0" != Z.nagare.value && (y[2] = Z.nagare.value);
                "" != Z.dora.value && (y[5] = yb(Z.dora.value));
                p.seed = "" + y;
                p.oya = Z.oya.value;
                p.ten = [Z.ten0.value, Z.ten1.value, Z.ten2.value, Z.ten3.value];
                Z.hai0.value && (p.hai0 = vb(yb(Z.hai0.value).split(",")));
                for (y = 0; 4 > y; ++y)
                    "" != p.ten[y] && (p.ten[y] = ~~(p.ten[y] / 100)),
                    Z["m" + y].value && (p["m" + y] = Z["m" + y].value),
                    Z["kawa" + y].value && (p["kawa" + y] = vb(yb(Z["kawa" + y].value).split(",")));
                p.ten = "" + p.ten;
                u && (p.packet = u);
                Z.json.value = JSON.stringify(p, null, "\t").replace(/"packet": \[[^\]]*\]/, "'packet': " + JSON.stringify(u));
                e(0);
                k()
            }
        }
        function f() {
            if (Z.json) {
                try {
                    p = JSON.parse(Z.json.value)
                } catch (r) {
                    alert("JSONに不具合があるため読み込めませんでした\n\n" + r);
                    return
                }
                var u = (p.seed ? p.seed : "0,0,0,0,0,").split(",");
                Z.title.value = p.title || "";
                Z.question.value = p.question || "";
                Z.answer.value = p.answer || "";
                Z.explanation.value = p.explanation || p.description || "";
                Z.comment.value = p.comment || "";
                Z.kyoku.value = p.kyoku || u[0];
                Z.honba.value = p.honba || u[1];
                Z.nagare.value = p.nagare || u[2];
                Z.dora.value = p.dora || vb(u.slice(5));
                Z.oya.value = p.oya || 0;
                u = (p.ten ? p.ten : ",,,").split(",");
                for (var y = 0; 4 > y; ++y)
                    Z["ten" + y].value = "" != u[y] ? 100 * u[y] : "",
                    y || (Z["hai" + y].value = p["hai" + y] || ""),
                    Z["m" + y].value = p["m" + y] || "",
                    Z["kawa" + y].value = p["kawa" + y] || "";
                e(0);
                k()
            }
        }
        var l, p, h, n = "", x = !1;
        return {
            TRAINING: function(u, y) {
                z.a = 4;
                yc.qa();
                y.innerHTML = "<div style='width:100%;'><table width=100% cellpadding=0 cellspacing=0><tr><td align=left class=gray id=trtitle></td><td id=trprogress align=right></td></tr></table><hr><div style='position:relative;'><div id=trmain class=vscl style='line-height:1.2em;height:8em;overflow-y:scroll;text-align:left;'><br><br>" + K("<center>左下のメニューからトレーニングを終了して<br><br>もう一度開いてください。</center>") + "</div><div class=sblink style='visibility:hidden;'>▼</div></div><hr><table width=100% cellpadding=0 cellspacing=0><tr><td align=left width=1><button name=trmenu style='font-family:cwTeX-Q-Kai-T,icons2,serif;'></button></td><td class=ra0 style='border:1px solid #444;' width=100%><span class='bt3 ra0' style='color:#444;font-size:150%;'>卓表示<span></td><td align=right width=1><button name=ok style='width:6em;' disabled>OK</button></td></tr></table></div>";
                Oc(y);
                P.b.classList.add("flipinhs");
                c(function() {
                    b(u.file)
                })
            },
            Se: function(u) {
                Qb(!1, "ok");
                P.b.style.display = u ? "" : "none";
                L.b.style.display = u ? "none" : "";
                L[1572868].innerHTML = " 問題"
            },
            pk: function(u) {
                u && "NEXT" != Z.ok.innerHTML && !pc.P.canvas.style.display ? (P.Se(0),
                2 == q[32].length % 3 && xc({
                    tag: "T"
                }),
                Z.ok.innerHTML = "CLOSE") : (P.b.classList.add("hide"),
                Ha(P.b, "animationend", function() {
                    l && (l[0] = (l[0] + 1) % l.container.length,
                    p = l.container[l[0]]);
                    e(0)
                }))
            },
            xg: function(u) {
                console.log("sendTrainingAns", u);
                switch (u.tag) {
                case "REACH":
                    x = !0;
                    yc.Sa({
                        tag: "REACH",
                        who: 0,
                        step: 1
                    });
                    return;
                case "D":
                    var y = (x ? "r" : "") + g(u.p);
                    break;
                case "N":
                    y = "N",
                    u.type && (y += "-" + u.type),
                    u.hai0 && (y += "-" + u.hai0),
                    u.hai1 && (y += "-" + u.hai1),
                    u.hai2 && (y += "-" + u.hai2)
                }
                if (y) {
                    u = p.answer.split(",");
                    for (var r = 0; r < u.length && u[r] != y; ++r)
                        ;
                    r < u.length && (y = "")
                }
                setTimeout(function() {
                    if (y)
                        e(1);
                    else {
                        Xb(O.pe, 0, 0);
                        var w = ya("div", za, "flipinqs tsv", {
                            innerHTML: "○"
                        }, {
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            fontSize: "1600%",
                            fontWeight: "bold",
                            pointerEvents: "none",
                            marginTop: "-0.5em",
                            marginLeft: "-0.5em"
                        });
                        setTimeout(function() {
                            w.classList.add("hide");
                            Fa(w, "animationend", function() {
                                w.parentNode.removeChild(w);
                                e(1)
                            })
                        }, 1E3)
                    }
                }, 1E3)
            },
            trmenu: function() {
                Vb.ia("<div class=A id='#trmenu-0'>他の問題に移動</div><div class=A id='#trmenu-1'>トレーニング終了</div>", "", 0)
            },
            "#trmenu": function(u, y) {
                if ("1" == y)
                    Pb.tredit ? location.reload() : P.exit();
                else {
                    u = "";
                    if (l)
                        for (var r in l.container)
                            u += "<div class=A id='#trjump-" + r + "'>Q" + la(2, ~~r + 1) + "</div>";
                    else
                        p.title && (u += "<div class=A id='#trjump-0'>" + p.title + "</div>");
                    Vb.ia(u, "text-align:left;", 0)
                }
            },
            "#trjump": function(u, y) {
                l && (u = ~~y,
                p = l.container[u],
                l[0] = u);
                e(0)
            },
            "#trs": function(u, y) {
                mb("https://tenhou.net/3/tr/subscribe.cgi?file=" + n + "&auth=" + h + "&type=" + y, function(r) {
                    if (r)
                        return console.log(r);
                    r = this.response;
                    r = JSON.parse(r);
                    if ("insufficient" == r.error)
                        return z.ERR({
                            code: 1020
                        });
                    "ok" == r.error && b(n)
                })
            },
            Eg: function(u, y) {
                if (y) {
                    var r = {}
                      , w = y.subscribing;
                    if (w)
                        for (var A = 0; A < w.length; ++A)
                            r[w[A].file] = w[A].expire;
                    u.innerHTML = "";
                    var I = {
                        free: "<span style='color:#088;font-weight:bold;'>【無料】</span>",
                        member: "<span style='color:#088;font-weight:bold;'>【会員無料】</span>",
                        subscribing: "<span style='color:#880;font-weight:bold;'>【購読中】</span>"
                    };
                    w = y.all;
                    for (A = 0; A < w.length; ++A)
                        w[A].pg = 1E3 * (w[A].type || "undefined").length + A;
                    w.sort(function(ma, Ba) {
                        return ma.pg - Ba.pg
                    });
                    for (A = 0; A < w.length; ++A) {
                        y = w[A];
                        var Y = y.file
                          , T = r[Y];
                        Y = "https://tenhou.net/0/?training=" + Y;
                        var R = "<div style='position:absolute;width:100%;height:100%;padding:0.2em 0.5em;pointer-events:none;'>";
                        R += "<div class=nobr style='overflow:hidden;text-overflow:ellipsis;'>" + (I[T ? "subscribing" : y.type] || "") + " ";
                        y.tip && (R += "<span style='color:#F00;font-weight:bold;font-size:75%;'>" + y.tip + "</span> ");
                        R += y.title + "</div>";
                        R += "<div class=nobr style='color:#CCC;overflow:hidden;text-overflow:ellipsis;font-size:75%;'>";
                        R += "<span style='color:#000;background-color:#666;'>レベル:" + (y.level || "初中") + "</span> ";
                        R += "問題数:" + y.n + " ";
                        y.type && (R += "毎月２～３回更新 ");
                        T && (R += "購読終了:" + T + " ");
                        R += "</div>";
                        R += "<div class=nobr style='color:#666;overflow:hidden;text-overflow:ellipsis;'>" + (y.memo || "") + "</div>";
                        R += "</div>";
                        R += "<a href='" + Y + "' class=bt3 target=_blank></a>";
                        ya("div", u, "", {
                            innerHTML: R
                        }, {
                            height: "3.4em",
                            position: "relative",
                            textAlign: "left"
                        }).childNodes[1].onclick = P.trOpen
                    }
                    ya("div", u, "gray", {
                        innerHTML: "●「長押し」または「右クリック」から別タブで開く/URLのコピーなどが行えます"
                    }, {
                        fontSize: "75%",
                        align: "left",
                        padding: "1em 0 6em 0"
                    })
                } else
                    u.innerHTML = K("<br>Loading ..."),
                    r = (r = D[B.fa]) && r.match(/^ID([0-9A-F]{8})-[0-9A-Za-z]{8}$/) ? RegExp.$1 : "00000000",
                    mb("https://tenhou.net/3/tr/free-index.json?" + r, function(ma) {
                        if (ma)
                            return console.log(ma);
                        ma = this.response;
                        try {
                            ma = JSON.parse(ma)
                        } catch (Ba) {
                            return
                        }
                        P.Eg(u, ma)
                    })
            },
            trOpen: function(u) {
                if (!(u.shiftKey || u.altKey || u.ctrlKey || u.metaKey)) {
                    var y = D[B.fa];
                    if (!y || !y.match(/^ID[0-9A-F]{8}-[0-9A-Za-z]{8}$/))
                        return z.ERR({
                            code: 1200
                        }),
                        !1;
                    u = u.target;
                    u = u.href.split(/\?training=/);
                    if (1 != u.length)
                        return P.o({
                            tag: "TRAINING",
                            file: u[1]
                        }),
                        !1
                }
            }
        }
    }());
    (function() {
        function a() {
            g = 0
        }
        var m = null
          , g = 0;
        Ga(Oa, {
            touchstart: a,
            touchend: a,
            touchcancel: a,
            mousedown: a,
            mouseup: a,
            mouseover: a,
            mouseout: a,
            keydown: a,
            blur: a
        });
        setInterval(function() {
            var e = Date.now();
            g || (g = e);
            e = 36E5 - (e - g);
            0 > e && (location.reload(),
            g = e = 0);
            2E4 > e ? (m || (m = ya("div", za, "ts0", {}, {
                position: "absolute",
                left: "0px",
                top: "0px"
            })),
            m && (m.innerText = "ENTERING POWERSAVING MODE " + ~~(e / 1E3))) : m && m.parentNode && (m.parentNode.removeChild(m),
            m = null)
        }, 1E3)
    }
    )();
    var oc = ya("div", za, "nosel ts0", {}, {
        position: "absolute",
        fontSize: "60%",
        pointerEvents: "none",
        display: "none"
    })
      , q = function() {
        var a = 0;
        return {
            Ea: function() {
                oc.innerHTML = J(F.Mj);
                for (var m = 0; 4 > m; ++m)
                    q[32 | m] = [],
                    q[48 | m] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    q[80 | m] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    q[16 | m] = [],
                    delete q[64 | m]
            },
            nk: function(m) {
                for (var g = [], e = 0; e < q[32 | m].length; ++e)
                    g.push(e);
                Ib(g, q[32 | m]);
                for (e = 0; e < q[32 | m].length; ++e)
                    if (g[e] != e) {
                        var c = U[1024 | m << 8 | g[e]]
                          , b = U[1024 | m << 8 | e];
                        lc.vd(0, b, 0);
                        b.yb(!0, m && !L.u[1277960] ? 136 : q[32 | m][g[e]]);
                        c = lc.Ra(0, c.i + b.s.offsetX, c.l + b.s.offsetY, b.i + b.s.offsetX, b.l + b.s.offsetY, .04, b.s, .5, b, 1);
                        m || wc(O.Mb, 0, c)
                    }
                Hb(q[32 | m])
            },
            yg: function(m) {
                L.ta(256);
                rc.qa();
                if (1 == z.a || !L.u[1277960]) {
                    var g = 0;
                    m & 2 && (g = Math.max(g, q[33].length));
                    m & 4 && (g = Math.max(g, q[34].length));
                    m & 8 && (g = Math.max(g, q[35].length));
                    g *= 30;
                    for (var e = 0; e < g; e += 30)
                        Xb(O.Mb, 0, e);
                    var c = 0;
                    e = 0;
                    pb()[ka++] = function(b) {
                        for (e += b; c < e && c < g; c += 30)
                            for (b = 1; 4 > b; ++b)
                                if (!(~m & 1 << b)) {
                                    var k = ~~(c / 30)
                                      , d = U[1024 | b << 8 | k];
                                    d.K && (k = q[32 | b][k],
                                    kc.gb(),
                                    d.Da(0),
                                    d.L = b,
                                    d.s = ic[b << 8 | hc.xc[k]],
                                    d.Da(1),
                                    kc.hb())
                                }
                        return c < g
                    }
                }
            },
            Le: function(m) {
                kc.gb();
                for (var g = 0, e = q[32 | m], c = 0; 14 > c; ++c) {
                    var b = U[1024 | m << 8 | c];
                    if (b.K) {
                        var k = U[1024 | m << 8 | g];
                        k.yb(!0, m && !L.u[1277960] ? 136 : e[g]);
                        k.i = b.i;
                        k.l = b.l;
                        k.Ha(~X.mb, b.la & X.mb, !1);
                        k.Da(1);
                        ++g;
                        a |= 1 << m
                    } else
                        g < e.length && e.splice(g, 1)
                }
                for (; 14 > g; ++g)
                    b = U[1024 | m << 8 | g],
                    b.K && b.Da(0);
                kc.hb()
            },
            Xc: function(m) {
                if ((m || L.u[1183750]) && (!m || L.u[1277960])) {
                    kc.gb();
                    for (var g = q[32 | m], e = [], c = [], b = [], k = -1, d = 0; d < g.length; ++d) {
                        var f = U[1024 | m << 8 | d];
                        f.K && (b.push({
                            yd: d,
                            la: f.la,
                            i: f.i,
                            l: f.l
                        }),
                        c.push(g[d]),
                        0 == m && f == rc.gk() && (k = e.length),
                        e.push(e.length))
                    }
                    Ib(e, c);
                    for (d = 0; d < e.length; ++d)
                        if (g[b[d].yd] = c[e[d]],
                        f = U[1024 | m << 8 | b[e[d]].yd],
                        e[d] == d) {
                            if (f.i != f.X || f.l != f.$)
                                a |= 1 << m
                        } else {
                            var l = U[1024 | m << 8 | b[d].yd];
                            l.yb(!0, m && !L.u[1277960] ? 136 : c[e[d]]);
                            f = b[e[d]];
                            l.i = f.i;
                            l.l = f.l;
                            l.Ha(~(X.za | X.Db | X.mb), f.la & (X.za | X.Db | X.mb), !1);
                            l.Da(1);
                            a |= 1 << m
                        }
                    kc.hb();
                    -1 != k && rc.aa(U[1024 | m << 8 | b[e[k]].yd])
                }
            },
            Wc: function() {
                for (var m = 0; 4 > m; ++m)
                    if (!(~a & 1 << m)) {
                        for (var g = [], e = 0, c = 0, b = 0; 14 > b; ++b) {
                            var k = U[1024 | m << 8 | b];
                            if (k.K) {
                                var d = k.i - k.X
                                  , f = k.l - k.$;
                                if (0 != d || 0 != f)
                                    g.length && e != d && c != f && (U.ic(0, 200, g),
                                    g = []),
                                    e = d,
                                    c = f,
                                    g.push(k)
                            }
                        }
                        g.length && U.ic(0, 200, g)
                    }
                a = 0
            }
        }
    }();
    function xc(a) {
        if (1 == z.a || 4 == z.a)
            if (!P.b || P.b.style.display) {
                var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                if (a)
                    if ("REACH" == a.tag)
                        for (var g = aa.fk(), e = 0; e < q[32].length; ++e) {
                            var c = g[q[32][e] >> 2];
                            m[e] |= c && c.length ? X.za : X.Db
                        }
                    else if ("T" == a.tag && q[64])
                        for (e = q[32].length - 1,
                        m[e] |= X.za,
                        --e; 0 <= e; --e)
                            m[e] |= X.Db;
                    else if ("N" != a.tag || 3 != a[2] && 1 != a[2])
                        if ("e" == a.tag || "f" == a.tag || "g" == a.tag || "E" == a.tag || "F" == a.tag || "G" == a.tag) {
                            var b = ~~a.t
                              , k = a[0] >> 2;
                            g = ~~(k / 9);
                            c = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                            if (b & ba.ca.Mc)
                                for (e = 0; e < q[32].length; ++e) {
                                    var d = q[32][e] >> 2;
                                    k == d && (c[d % 9] |= 3)
                                }
                            if (b & ba.ca.Fc) {
                                if (3 > g)
                                    for (e = 0; e < q[32].length; ++e)
                                        d = q[32][e] >> 2,
                                        g == ~~(d / 9) && (c[d % 9] |= 1);
                                e = k % 9;
                                6 >= e && c[e + 1] && c[e + 2] && (c[e + 1] |= 2,
                                c[e + 2] |= 2);
                                1 <= e && 7 >= e && c[e - 1] && c[e + 1] && (c[e - 1] |= 2,
                                c[e + 1] |= 2);
                                2 <= e && c[e - 2] && c[e - 1] && (c[e - 2] |= 2,
                                c[e - 1] |= 2)
                            }
                            for (e = 0; e < q[32].length; ++e)
                                if (d = q[32][e] >> 2,
                                g != ~~(d / 9) || ~c[d % 9] & 2)
                                    m[e] |= X.Db
                        } else
                            for (e = 0; 14 > e; ++e)
                                m[e] |= X.za;
                    else
                        for (g = {},
                        1 == (a[0][2] >> 2) - (a[0][1] >> 2) ? (0 < (a[0][1] >> 2) % 9 && (g[(a[0][1] >> 2) - 1] = 1),
                        8 > (a[0][2] >> 2) % 9 && (g[(a[0][2] >> 2) + 1] = 1)) : g[a[0][0] >> 2] = 1,
                        e = 0; e < q[32].length; ++e)
                            m[e] |= g[q[32][e] >> 2] ? X.Db : X.za;
                else
                    rc.qa(),
                    L.ta(256);
                kc.gb();
                for (e = 0; 14 > e; ++e)
                    qc.zb(e, ~(X.za | X.Db | X.Eb), m[e]);
                kc.hb();
                a && rc.o(0, void 0, "T" == a.tag)
            }
    }
    ;var Q;
    (function(a) {
        a.I = [0, 0, 0, 0, 0, 0, 0, 0];
        a.J = [0, 0, 0, 0, 0, 0, 0, 0];
        a.Y = [0, 0, 0, 0, 0, 0, 0, 0];
        a.qb = [0, 0, 0, 0, 0, 0, 0, 0];
        a.ub = [0, 0, 0, 0, 0];
        a.vb = [0, 0, 0, 0, 0];
        a.yc = [0, 0, 0, 0];
        a.zc = [0, 0, 0, 0];
        a.Be = [0, 0, 0, 0];
        a.Ce = [0, 0, 0, 0];
        a.lb = 0;
        a.Ab = 0;
        a.Hd = 0;
        a.xd = 0;
        a.Ad = !1;
        a.aa = function(m, g, e) {
            function c() {
                b[1] = ~~(2360 * b[0] / 31 / 56);
                d[0] = d[1] = d[4] = Math.min(~~(12 * b[0] / 31), ~~(12 * b[1] / 40));
                k[0] = k[4] = ~~(47 * b[0] / 31) - d[0];
                k[1] = ~~(37 * b[1] / 40) - d[1];
                b[4] != b[0] && (d[4] = ~~(12 * b[4] / 31),
                k[4] = ~~(47 * b[4] / 31) - d[4]);
                b[2] = b[6] = b[0];
                d[2] = d[6] = d[0];
                k[2] = k[6] = k[0];
                b[3] = b[1];
                d[3] = d[1];
                k[3] = k[1];
                b[5] = b[7] = ~~(380 * k[1] / 460);
                d[5] = d[7] = ~~(44 * b[5] / 19) - k[1];
                k[5] = k[7] = k[1];
                var h = 2 * k[1]
                  , n = 2 * b[0];
                f = l = 0;
                1 == hc.a || 3 == hc.a ? (f = Math.max(f, n + 17 * b[0] + 2 * b[1] + n),
                l = Math.max(l, h + 17 * k[1] + 2 * k[0] + d[0] + k[4] + d[4] + (e ? k[1] : 0))) : (f = Math.max(f, n + 3 * b[1] + 6 * b[0] + 3 * b[1] + n),
                l = Math.max(l, h + 3 * k[0] + 6 * k[1] + 3 * k[0] + d[0] + k[4] + d[4] + (e ? k[1] : 0)));
                f = Math.max(f, ~~(14.1 * b[4]) + b[0]);
                a.xd = k[7] + d[7] - (k[3] + d[3]);
                l = Math.max(l, ~~(2.1 * k[1]) + a.xd + 4 * (2 * k[1] + k[0]) + k[1] + d[1] + k[4] + d[4]);
                l = Math.max(l, k[0] + 4 * (2 * k[1] + k[0]) + ~~(2.1 * k[1]) + a.xd + 2 * k[1] + d[1] + (e ? k[1] : 0));
                return f <= m && l <= g
            }
            var b = a.I
              , k = a.J
              , d = a.Y
              , f = 0
              , l = 0;
            for (b[0] = 200; 10 < b[0]; --b[0]) {
                a.Ad = !0;
                b[4] = ~~(31 * (2 * k[1] + d[0]) / 47);
                if (c())
                    break;
                a.Ad = !1;
                b[4] = ~~((m - b[0]) / 14.1);
                if (c())
                    break
            }
            b[4] = ~~((m - b[0]) / 14.1);
            for (b[4] = Math.min(b[4], ~~(1.7 * b[0])); 10 < b[4] && !c(); --b[4])
                ;
            2 == D[B.ie] || !a.Ad || e || 1 != z.a && 4 != z.a || 1 == hc.a || 3 == hc.a || (b[4] = ~~((m - b[0]) / 14.1),
            b[4] = Math.min(b[4], ~~(31 * (k[4] + d[4]) / 47) + d[0] + ~~(.3 * k[0])),
            d[4] = ~~(12 * b[4] / 31),
            k[4] = ~~(47 * b[4] / 31) - d[4]);
            for (var p = 0; 8 > p; ++p)
                a.qb[p] = a.I[p] - ~~(5 * a.Y[4 == p ? 4 : 0] / 12);
            g - l < m - f ? l = ~~g : f = ~~m;
            a.Hd = Math.max(f, ~~(14.1 * b[4]) + b[0]);
            a.lb = f;
            a.Ab = l
        }
    }
    )(Q || (Q = {}));
    Da(Cc.prototype, {
        Kb: function() {
            if (this.ga && !this.pb)
                if (this.s && 1 == this.K) {
                    var a = 0;
                    this.ua && this.ua.s && 1 == this.ua.K && this.i + Q.I[this.L] == this.ua.i + Q.I[this.ua.L] && this.l + Q.Y[this.L] == this.ua.l + Q.J[this.ua.L] + Q.Y[this.ua.L] && (a |= this.ua.jb && this.ua.jb.s && 1 == this.ua.jb.K && this.ua.i + Q.I[this.ua.L] == this.ua.jb.i && this.ua.l == this.ua.jb.l ? 0 : 1);
                    this.jb && this.jb.s && 1 == this.jb.K && this.i + Q.I[this.L] == this.jb.i && this.l + Q.J[this.L] == this.jb.l + Q.J[this.jb.L] && (a |= 2);
                    this.kb && this.kb.s && 1 == this.kb.K && this.i + Q.I[this.L] == this.kb.i + Q.I[this.kb.L] && this.l + Q.J[this.L] + Q.Y[this.L] == this.kb.l + Q.Y[this.kb.L] && (a |= 4);
                    Mc[this.L << 8 | a] ? (this.ga.s = Mc[this.L << 8 | a],
                    this.ga.K = 1) : (delete this.ga.s,
                    this.ga.K = 0)
                } else
                    delete this.ga.s
        },
        Ha: function(a, m, g) {
            var e = this.la;
            e = e & a | m;
            a = this.Ca;
            m = this.ra;
            e & X.Eb ? (this.Ca = ic[this.L << 8 | 60],
            this.ra = .3) : e & X.Qa ? (this.Ca = ic[this.L << 8 | (e & X.za ? 60 : 50)],
            this.ra = e & X.za ? .3 : .2) : e & X.Ja ? (this.Ca = ic[this.L << 8 | (e & X.za ? 60 : 50)],
            this.ra = e & X.za ? .2 : .1) : e & X.Db ? (this.Ca = ic[this.L << 8 | 49],
            this.ra = .3) : e & X.mb ? (this.Ca = ic[this.L << 8 | 50],
            this.ra = .2) : e & X.Nb ? (this.Ca = ic[this.L << 8 | 60],
            this.ra = .15) : e & X.Ba ? (this.Ca = ic[this.L << 8 | 49],
            this.ra = .3) : e & X.dd ? (delete this.Ca,
            delete this.ra) : e & X.eb ? (this.Ca = ic[this.L << 8 | 49],
            this.ra = e & X.ye ? .4 : .15) : (delete this.Ca,
            delete this.ra);
            this.la = e;
            !g || this.Ca == a && this.ra == m || this.qg();
            return this
        },
        Da: function(a) {
            if (!this.s)
                return this;
            var m = 0
              , g = 0;
            this.K && (m = this.ga.s ? this.ga.s.offsetX + this.ga.s.xa : this.s.xa,
            g = this.s.Ta);
            this.K = a;
            this.Kb();
            this.ua && this.ua.Kb();
            this.kb && this.kb.Kb();
            this.Uc && (this.Uc.Kb(),
            this.Uc.kb && this.Uc.kb.Kb());
            this.K && (m = this.ga.s ? this.ga.s.offsetX + this.ga.s.xa : m ? m : this.s.xa,
            g = this.s.Ta);
            kc.Qb(this.i + this.s.offsetX, this.l + this.s.offsetY - this.pb, m, g);
            return this
        },
        yb: function(a, m) {
            var g = this.L % 4;
            a && (g || (g += 4),
            g && 136 == m && (g += 4));
            this.s = ic[g << 8 | hc.xc[m]];
            this.L = g;
            this.s || Tb("PH.setImage noimg ", g, m, hc.xc[m]);
            return this
        },
        qg: function() {
            void 0 !== this.s && 0 !== this.K && kc.Qb(this.i, this.l - this.pb, this.s.xa, this.s.Ta)
        },
        Wb: function() {
            void 0 !== this.s && 0 !== this.K && kc.Qb(this.i, this.l - this.pb, this.ga.s ? this.ga.s.offsetX + this.ga.s.xa : this.s.xa, this.s.Ta)
        }
    });
    (function() {
        for (var a = [function(d, f) {
            d.jb = f;
            f.Uc = d
        }
        , function(d, f) {
            d.ua = f;
            f.kb = d
        }
        , function(d, f) {
            d.Uc = f;
            f.jb = d
        }
        , function(d, f) {
            d.kb = f;
            f.ua = d
        }
        ], m = [1024, 14, 2048, 34, 3072, 26, 4096, 34, 5120, 5]; m.length; )
            for (var g = m.shift(), e = m.shift(), c = 0; 4 > c; ++c) {
                for (var b = {}, k = 0; k < e; ++k)
                    U[g | c << 8 | k] = b[k] = new Cc(c),
                    U.Xa.push(b[k], b[k].ga);
                for (k = 1; k < e; ++k)
                    if (!(2048 == g && 17 == k || 3072 == g && 6 == k || 3072 == g && 12 == k || 4096 == g && 17 == k))
                        a[c](b[k - 1], b[k]);
                if (2048 == g)
                    for (k = 0; 17 > k; ++k)
                        a[(c + 1) % 4](b[k], b[k + 17]),
                        b[k].Jb = b[k + 17];
                if (3072 == g)
                    for (k = 6; 18 > k; ++k)
                        a[(c + 1) % 4](b[k], b[k - 6]);
                if (4096 == g)
                    for (k = 17; 34 > k; ++k)
                        a[(c + 1) % 4](b[k], b[k - 17]);
                if (5120 == g)
                    break
            }
        for (k = 0; a = U[1024 | k]; ++k)
            a.ma = k
    }
    )();
    Da(U, {
        aa: function() {
            var a = Q.I
              , m = Q.J
              , g = Q.Y
              , e = Da(Q.ub, [a[0], 0, -a[0], 0, a[4]])
              , c = Da(Q.vb, [0, -m[1], 0, m[1], 0])
              , b = Da(Q.yc, [0, a[1], 0, -a[1]])
              , k = Da(Q.zc, [m[0], 0, -m[0], 0]);
            Da(Q.Be, [0, a[1] - a[0], a[0] - a[1], 0]);
            Da(Q.Ce, [m[0] - m[1], m[1] - m[0], 0, 0]);
            var d = 2 * m[1]
              , f = kc.P.canvas.offsetWidth * cb
              , l = kc.P.canvas.offsetHeight * cb
              , p = ~~((f - Q.lb) / 2)
              , h = ~~((l - Q.Ab) / 2)
              , n = p + Q.lb
              , x = h + Q.Ab - (D[B.Ia] & 1 ? m[1] : 0)
              , u = 6 * a[0]
              , y = 6 * m[1]
              , r = p + ~~((n - p - u) / 2)
              , w = h + d + m[0] * (1 == hc.a || 3 == hc.a ? 5 : 3);
            if (1 == hc.a || 3 == hc.a)
                w = h + d + 2 * m[0] + ~~((17 * m[1] + 2 * m[0] - y - 4 * m[0]) / 2);
            U[W.ge] = r;
            U[W.hf] = w + y;
            U[W.hh] = r + u;
            U[W.ih] = w + y - m[1];
            U[W.jh] = r + u - a[0];
            U[W.kh] = w - m[0];
            U[W.lh] = r - a[1];
            U[W.mh] = w;
            for (var A = 0; 4 > A; ++A)
                U.Ag(A);
            for (var I, Y = 0; I = U[5120 | Y]; ++Y)
                I.i = I.X = r + ~~((u - 5 * a[0]) / 2) + a[0] * Y,
                I.l = I.$ = w;
            if (3 == hc.a) {
                A = 17 * a[0] + 2 * a[1];
                I = 17 * m[1] + 2 * m[0];
                var T = r + ~~((u - A) / 2);
                d = h + d;
                d = [{
                    Hb: T + A - a[0],
                    Ib: d + I - m[0]
                }, {
                    Hb: T + A - a[1],
                    Ib: d
                }, {
                    Hb: T,
                    Ib: d
                }, {
                    Hb: T,
                    Ib: d + I - m[1]
                }];
                for (A = 0; 4 > A; ++A)
                    for (Y = 0; I = U[4096 | A << 8 | Y]; ++Y)
                        I.i = I.X = d[A].Hb - e[A] * (16 - Y % 17) - (17 > Y ? 0 : b[A]),
                        I.l = I.$ = d[A].Ib - c[A] * (16 - Y % 17) - (17 > Y ? 0 : k[A]),
                        I.pb = 0
            } else if (1 == hc.a)
                for (A = 17 * a[0] + a[1],
                I = 17 * m[1] + m[0],
                T = r + ~~((u - A) / 2),
                d = w + ~~((y - I + g[0]) / 2),
                d = [{
                    Hb: T + A - a[0],
                    Ib: d + I - m[0]
                }, {
                    Hb: T + A - a[1],
                    Ib: d
                }, {
                    Hb: T,
                    Ib: d
                }, {
                    Hb: T,
                    Ib: d + I - m[1]
                }],
                A = 0; 4 > A; ++A)
                    for (Y = 0; I = U[4096 | A << 8 | Y]; ++Y)
                        I.i = I.X = d[A].Hb - e[A] * (16 - Y % 17),
                        I.l = I.$ = d[A].Ib - c[A] * (16 - Y % 17),
                        I.pb = 17 > Y ? 0 : g[A];
            else
                for (A = 0; 4 > A; ++A)
                    for (Y = 0; I = U[4096 | A << 8 | Y]; ++Y)
                        I.i = I.l = I.pb = 0;
            w += g[0];
            U[W.Vd] = r;
            U[W.Wd] = w;
            U[W.Ud] = u;
            U[W.Td] = y;
            e = 3 * Q.I[1];
            c = 3 * Q.J[0];
            U[W.Bf] = r + u + g[0];
            U[W.Qi] = w + y + g[0];
            U[W.Pi] = e - g[0];
            U[W.Oi] = c - g[0];
            U[W.Ti] = r + u + g[0];
            U[W.Ui] = w - c;
            U[W.Si] = e - g[0];
            U[W.Ri] = c - g[0];
            U[W.Xi] = r - e;
            U[W.Yi] = w - c;
            U[W.Wi] = e - g[0];
            U[W.Vi] = c - g[0];
            U[W.aj] = r - e;
            U[W.bj] = w + y + g[0];
            U[W.$i] = e - g[0];
            U[W.Zi] = c - g[0];
            d = 1 == hc.a || 3 == hc.a ? 0 : Q.J[0];
            U[W.zf] = r;
            U[W.le] = w + d;
            U[W.yf] = u;
            U[W.xf] = y - d - g[0];
            U[W.La] = n - ~~(14.1 * a[4]) - a[0];
            U[W.cb] = x - m[4] - g[4];
            U[W.ud] = U[W.Fi] = n - a[1];
            U[W.Wf] = U[W.Gi] = h;
            U[W.xe] = U[W.Hi] = p;
            U[W.lc] = n - a[0];
            U[W.kd] = x - g[0] - m[0];
            U[W.La] < p && (e = ~~((p - U[W.La]) / 2),
            U[W.La] += e,
            U[W.lc] += e);
            I = ~~(2.1 * m[1]) + Q.xd + 4 * (2 * m[1] + m[0]) + (z.H & t.c ? m[1] : 0);
            U[W.uf] = Math.max(h + ~~((x - Math.max(2 * m[1], m[4] + g[4]) - h - I) / 2), 0);
            U[W.Kj] = Math.min(U[W.uf] + (I - m[1] - g[1]), x - m[4] - g[4] - m[1]);
            I += g[1];
            U[W.Xf] = Math.max(h + ~~((x - m[4] - g[4] - h - I) / 2), 0);
            U[W.Ii] = Math.min(U[W.Xf] + (I - m[1] - g[1]), x - m[4] - g[4] - m[1]);
            A = ~~(2.1 * a[0]) + 4 * (2 * a[0] + a[1]) + (z.H & t.c ? a[0] : 0);
            3 == hc.a && (A = Math.max(A, 17 * a[0] + 2 * a[1]));
            1 == hc.a && (A = Math.max(A, 17 * a[0] + 1 * a[1]));
            U[W.mc] = r + ~~((u - A) / 2);
            ~z.H & t.c && !Q.Ad && (U[W.mc] = a[1]);
            z.H & t.c && (z.O[1] || (U[W.mc] += a[0]),
            z.O[3] || (U[W.mc] = p));
            U[W.Lj] = U[W.mc] + A - a[0];
            for (A = 0; 4 > A; ++A)
                for (U.Dg(A),
                Y = 0; I = U[1024 | A << 8 | Y]; ++Y)
                    I.i = I.X,
                    I.l = I.$;
            nc.aa();
            mc.xb[W.Zf] = mc.xb[W.Qj] = ~~(U[W.Vd] + U[W.Ud] / 2);
            mc.xb[W.Pj] = mc.xb[W.Tj] = ~~(U[W.Wd] + U[W.Td] / 2);
            mc.xb[W.$f] = ~~(U[W.cb] - 1.5 * Q.J[0]);
            mc.xb[W.Oj] = ~~(U[W.ud] - 1.5 * Q.I[1]);
            mc.xb[W.Rj] = ~~(U[W.Wf] + 2.5 * Q.J[2]);
            mc.xb[W.Sj] = ~~(U[W.xe] + 2.5 * Q.I[3]);
            for (Y in U.Xa)
                U.Xa[Y].ga && void 0 === U.Xa[Y].X && console.log(Y);
            U.Xa.sort(function(R, ma) {
                return (void 0 != R.ma ? 0 : -f * l) + (R.ga ? f * l : 0) + (R.Za.pb + R.Za.$) * f + R.Za.X - ((void 0 != ma.ma ? 0 : -f * l) + (ma.ga ? f * l : 0) + (ma.Za.pb + ma.Za.$) * f + ma.Za.X)
            })
        },
        va: function() {
            for (var a = 0; a < U.Xa.length; ++a) {
                var m = U.Xa[a];
                m.K = 0;
                m.ga && (void 0 !== m.X && (m.i = m.X),
                void 0 !== m.$ && (m.l = m.$),
                m.Ha(-1, X.NONE, !1),
                delete m.Rc)
            }
            for (a = 0; 4 > a; ++a)
                U.Dd(a, -2)
        },
        Dg: function(a) {
            for (var m = Q.ub, g = Q.vb, e = Q.yc, c = Q.zc, b = Q.Be, k = Q.Ce, d, f = 16; U[2048 | a << 8 | f]; --f)
                ;
            var l = 0
              , p = 0;
            for (f = 16; d = U[2048 | a << 8 | f]; --f) {
                d.X = U[W.lc + 2 * a] - m[a] * (16 - f);
                d.$ = U[W.kd + 2 * a] - g[a] * (16 - f);
                var h = d.Jb;
                h.X = d.X + m[(a + 1) % 4];
                h.$ = d.$ + g[(a + 1) % 4];
                d.L != a && (l += m[a] - e[(a + 1) % 4],
                p += g[a] - c[(a + 1) % 4]);
                d.i = d.X + l;
                d.l = d.$ + p;
                h.i = h.X + l;
                h.l = h.$ + p;
                d.L != a && (d.i += b[a],
                d.l += k[a],
                h.i += b[a],
                h.l += k[a])
            }
            for (f = 0; d = U[1024 | a << 8 | f]; ++f)
                d.X = 0 + U[W.La + 2 * a] + m[a ? a : 4] * f,
                d.$ = 0 + U[W.cb + 2 * a] + g[a ? a : 4] * f
        },
        Ag: function(a) {
            for (var m = Q.ub, g = Q.vb, e = Q.yc, c = Q.zc, b = 0, k = 0, d, f = 0; d = U[3072 | a << 8 | f]; ++f)
                if (d.X = U[W.ge + 2 * a] + m[a] * f + (e[a] - 6 * m[a]) * (12 < f ? 2 : ~~(f / 6)) + b,
                d.$ = U[W.hf + 2 * a] + g[a] * f + (c[a] - 6 * g[a]) * (12 < f ? 2 : ~~(f / 6)) + k,
                d.L != a && (d.X += Q.Be[a],
                d.$ += Q.Ce[a],
                b = -Q.ub[a] + Q.yc[(a + 1) % 4],
                k = -Q.vb[a] + Q.zc[(a + 1) % 4]),
                d.i = d.X,
                d.l = d.$,
                5 == f || 11 == f)
                    b = k = 0
        }
    });
    Da(U, {
        Dd: function(a, m) {
            for (var g, e = 0; g = U[3072 | a << 8 | e]; ++e)
                g.L != a && (g.L = a),
                -1 != m || g.K || (m = e);
            0 <= m && (U[3072 | a << 8 | m].L = (a + 1) % 4);
            U.Ag(a)
        }
    });
    Da(U, function() {
        function a(g) {
            var e = 0, c;
            for (c in m) {
                var b = m[c];
                if (0 <= b.t) {
                    b.Ga <= b.t && (b.t = b.Ga);
                    kc.gb();
                    var k;
                    for (k in b) {
                        var d = b[k]
                          , f = d.Qc;
                        if (f) {
                            var l = f.ga.s ? f.ga.s.offsetX + f.ga.s.xa : f.s.xa
                              , p = f.s.Ta
                              , h = ~~(f.X + (d.qb - f.X) * (b.Ga - b.t) / b.Ga);
                            if (h <= f.i)
                                l += f.i - h,
                                f.i = h;
                            else {
                                l += h - f.i;
                                var n = f.i;
                                f.i = h;
                                h = n
                            }
                            d = ~~(f.$ + (d.Ed - f.$) * (b.Ga - b.t) / b.Ga);
                            d <= f.l ? (p += f.l - d,
                            f.l = d) : (p += d - f.l,
                            n = f.l,
                            f.l = d,
                            d = n);
                            kc.Qb(h + f.s.offsetX, d + f.s.offsetY, l, p);
                            b.Ga <= b.t && f.Da(f.K)
                        }
                    }
                    kc.hb()
                }
                b.Ga <= b.t && delete m[c];
                b.t += g;
                ++e
            }
            0 == e && Bc.jc && Bc.jc();
            return e
        }
        var m = {};
        return {
            ic: function(g, e, c) {
                if (lc.oa) {
                    kc.gb();
                    for (g = 0; g < c.length; ++g)
                        e = c[g],
                        e.Wb(),
                        e.i = e.X,
                        e.l = e.$;
                    for (g = 0; g < c.length; ++g)
                        e = c[g],
                        e.Da(e.K),
                        e.Wb();
                    kc.hb()
                } else {
                    e = m[ka++] = {
                        t: -~~g,
                        Ga: e
                    };
                    for (g = 0; g < c.length; ++g)
                        e[g] = {
                            Qc: c[g],
                            qb: c[g].i,
                            Ed: c[g].l
                        };
                    pb().ic = a
                }
            }
        }
    }());
    Da(hc, function() {
        function a() {
            return !1
        }
        function m(d) {
            return 16 == d || 52 == d || 88 == d
        }
        function g(d) {
            d = (135 - d + c) % 136;
            return U[4096 | ~~(d / 34) << 8 | (d % 34 >> 1) + 17 * (d & 1)]
        }
        var e, c, b, k;
        return {
            a: 0,
            Ac: 0,
            fc: !1,
            xc: {
                136: 48
            },
            Ea: function(d) {
                for (var f = hc.xc, l = 0; 136 > l; ++l) {
                    var p = l >> 2;
                    f[l] = 10 * (~~(p / 9) + 1) + p % 9 + 1
                }
                z.H & t.sa ? hc.zd = a : (hc.zd = m,
                f[16] = 51,
                f[52] = 52,
                f[88] = 53);
                f = z.Fa;
                l = z.ha[3];
                p = z.ha[4];
                b = (4 + f - z.ha[0] % 4) % 4;
                hc.fc = 6 == l && 0 == p;
                c = ((f + (l + 1) + (p + 1) - 1) % 4 * 17 + 17 - 1 - (l + 1) - (p + 1)) % 68 * 2 + 2;
                hc.fc && (c = 34 * (b + 1));
                e = [0, 0, 0, 0];
                hc.Ac = 0;
                k = null;
                if (d)
                    for (k = [],
                    l = 0; 136 > l; ++l)
                        k[l] = d[135 - l]
            },
            cg: function(d) {
                if (!hc.fc)
                    return g(e[0]++);
                -1 == d && (d = (b + 3) % 4);
                var f = e[d]++;
                return U[4096 | d << 8 | 33 - (17 * (f & 1) + (f >> 1))]
            },
            Xb: function(d) {
                if (!hc.fc)
                    return g(135 - d ^ 1);
                var f = (b + (d >> 2)) % 4;
                d %= 4;
                return U[4096 | f << 8 | 17 * (~d & 1) + (d >> 1)]
            },
            He: function(d, f) {
                return k ? hc.fc ? k[135 - (34 * d + ~~(f % 34 / 17) + f % 17 * 2)] : k[(135 - (34 * d + ~~(f % 34 / 17) + f % 17 * 2) + c) % 136] : 136
            },
            rg: function(d) {
                if (!e)
                    return 0;
                if (t.Kc(z.H))
                    return 116 - e[0] - 2 * (z.ha.length - 5);
                if (!hc.fc)
                    return 122 - e[0] - hc.Ac;
                for (var f = 0, l = -1, p = 1; 4 >= p; ++p)
                    z.O[(d + p) % 4] && f < e[(d + p) % 4] && (f = e[(d + p) % 4],
                    l = p);
                return (30 - f) * (z.H & t.c ? 3 : 4) + l - 1
            },
            zd: a
        }
    }());
    hc.ek = function(a) {
        function m(b) {
            for (var k = 0; k < b.length; ++k)
                b[k] = (b[k] & 255) << 24 | (b[k] & 65280) << 8 | (b[k] & 16711680) >>> 8 | (b[k] & 4278190080) >>> 24;
            return b
        }
        a = a.split(",");
        if ("mt19937ar-sha512-n288-base64" == a[0]) {
            a = function(b) {
                b = atob(b);
                for (var k = [], d = 0; d < b.length; d += 4)
                    k.push(b.charCodeAt(d) << 0 | b.charCodeAt(d + 1) << 8 | b.charCodeAt(d + 2) << 16 | b.charCodeAt(d + 3) << 24);
                return k
            }(a[1]);
            var g = -1
              , e = new nb.tf;
            e.kg(a, a.length);
            var c = new nb.tf;
            return function(b, k) {
                if (k && g != b) {
                    var d = [];
                    for (p = 0; 624 > p; ++p)
                        d[p] = e.De();
                    c.kg(d, 624)
                }
                g = b;
                var f = k ? c : e;
                b = [];
                k = [];
                for (p = 0; 9 > p; ++p) {
                    var l = [];
                    for (d = 0; 32 > d; ++d)
                        l[d] = f.De();
                    Array.prototype.push.apply(k, m(ob(m(l))))
                }
                for (var p = 0; p < k.length; ++p)
                    k[p] >>>= 0;
                if (z.H & t.c)
                    for (p = 0; 136 > p; ++p)
                        (4 > p || 32 <= p) && b.push(p);
                else
                    for (p = 0; 136 > p; ++p)
                        b.push(p);
                d = b.length;
                for (p = 0; p < d - 1; ++p)
                    f = p + k[p] % (d - p),
                    l = b[p],
                    b[p] = b[f],
                    b[f] = l;
                return b
            }
        }
    }
    ;
    var Tc;
    (function(a) {
        function m(b) {
            if (void 0 === c)
                return !1;
            350 < g && 25 < g - e && (c(),
            e = g);
            g += b;
            return !0
        }
        var g = 0, e = 0, c;
        a.set = function(b, k) {
            c = b;
            g = e = 0;
            c ? (k && c(),
            pb()[-100] = m) : delete pb()[-100]
        }
    }
    )(Tc || (Tc = {}));
    Da(z, function() {
        function a(h) {
            if (1 == z.a) {
                var n = (~~D[B.hd] + 40 - 1) % 40
                  , x = D[B.gd + n];
                if (x) {
                    try {
                        x = JSON.parse(x)
                    } catch (u) {
                        return
                    }
                    x.sc || (x.sc = h,
                    D[B.gd + n] = JSON.stringify(x))
                }
            }
        }
        function m(h, n, x, u, y, r, w) {
            if (x instanceof Cc) {
                var A = u.L % 4;
                var I = u.i;
                var Y = u.l;
                u.Da(0);
                u = ic[x.L << 8 | hc.xc[y]]
            } else
                A = x,
                x = U[n | A << 8 | u],
                I = x.i,
                Y = x.l,
                u = ic[A << 8 | 48];
            switch (n) {
            case 5120:
                Y = 0;
                break;
            case 4096:
                0 == A ? Y = Q.Ab : 1 == A ? I = Q.lb : 2 == A ? Y = 0 : 3 == A && (I = 0);
                A & 1 && (I -= Math.round(kc.P.canvas.offsetLeft * cb));
                break;
            case 1024:
                var T = f ? hc.Xb(hc.Ac++) : hc.cg(A);
                1 == hc.a || 3 == hc.a ? (u = T.s,
                I = T.i,
                Y = T.l,
                lc.vd(h, T, 0)) : 0 == A ? Y = ~~(Q.Ab / 2) : 1 == A ? I = ~~(Q.lb / 2) : 2 == A ? Y = ~~(Q.Ab / 2) : 3 == A && (I = ~~(Q.lb / 2));
                f = !1;
                break;
            case 3072:
                x.i = x.X + (lc.oa ? 0 : ~~(.2 * Q.ub[A]) + ~~(.15 * Q.yc[A])),
                x.l = x.$ + (lc.oa ? 0 : ~~(.2 * Q.vb[A]) + ~~(.15 * Q.zc[A]))
            }
            x.yb(1024 == n, y);
            lc.Ra(h + 0, I, Y, x.i, x.l, r, u, .06);
            n = lc.Ra(h + 10, I, Y, x.i, x.l, r, u, .18, x, 1);
            lc.Ra(h + 20, I, Y, x.i, x.l, r, u, .06);
            w != O.Wa && wc(w, 0, n);
            return n
        }
        function g(h, n) {
            var x = {
                tag: "D",
                p: h
            };
            if (1 == z.a) {
                if (!n && (n = rc.wb(),
                xc(),
                !n))
                    return;
                yc.R(x)
            } else
                4 == z.a && (xc(),
                P.xg(x));
            x[0] = h;
            yc.Sa(x)
        }
        function e() {
            z.mg = [-1, -1, -1, -1];
            z.Sc = ["", "", "", ""];
            for (var h = 0, n = 0; 4 > n; ++n) {
                var x = (z.Fa + n) % 4;
                z.O[x] && (z.mg[x] = h,
                z.Sc[x] = "東南西北".substr(h, 1),
                ++h)
            }
        }
        var c = {
            84: 0,
            85: 1,
            86: 2,
            87: 3,
            116: 0,
            117: 1,
            118: 2,
            119: 3
        }, b = -1, k = -1, d = null, f, l = "", p = !1;
        return {
            Fa: -1,
            mg: [],
            Sc: [],
            ha: [],
            Oa: [],
            ig: [],
            O: [],
            ka: [],
            connected: 0,
            vc: [],
            Me: 0,
            Ne: 0,
            $c: 0,
            Oe: 0,
            Pe: 0,
            Fd: 0,
            Qe: 0,
            Re: 0,
            Gd: 0,
            ng: 3,
            va: function() {
                var h = pb(), n;
                for (n in h)
                    -100 != n && delete h[n];
                mc.va();
                lc.Ea();
                kc.Yc();
                for (n = 0; n < U.Xa.length; ++n)
                    h = U.Xa[n],
                    h.K = 0,
                    h.ga && (void 0 !== h.X && (h.i = h.X),
                    void 0 !== h.$ && (h.l = h.$),
                    h.Ha(0, X.NONE, !1),
                    delete h.Rc);
                for (n = 0; 4 > n; ++n)
                    U.Dd(n, -2);
                d = null;
                k = -1;
                b = z.Fa = -1;
                pc.na(0, -1);
                nc.Ea();
                q.Ea();
                oc.style.display = pc.P.canvas.style.display = "none";
                rc.qa();
                L.ta(256);
                xc();
                qc.aa();
                P.va()
            },
            Ea: function(h) {
                p && (Xb(O.bd, 0, 0),
                p = !1);
                if ("REINIT" == h.tag || 3 == z.a)
                    lc.oa = !0;
                f = !1;
                b = z.Fa = ~~h.oya;
                z.ha = qa(h.seed);
                z.Oa = qa(h.ten, 100);
                z.ig = qa(h.chip);
                e();
                hc.Ea(h[5]);
                nc.Ea();
                q.Ea();
                Zb.dk();
                pc.na(void 0, -1);
                rc.hk();
                for (var n = 0; 4 > n; ++n)
                    if (z.O[n])
                        for (var x = 0; 13 > x; ++x)
                            q[32 | n].push(136);
                var u = 0;
                if (1 == hc.a) {
                    for (n = 0; 4 > n; ++n)
                        for (x = 0; 34 > x; ++x)
                            U[4096 | n << 8 | x].ra = 0;
                    for (x = 0; 17 > x; ++x)
                        for (n = 0; 4 > n; ++n)
                            lc.vd(m(u, 4096, n, x, 136, .08, O.Mb), U[4096 | n << 8 | x + 17].yb(!1, 136), 1),
                            u += 12
                } else if (3 == hc.a) {
                    var y = Pb.tw + 1;
                    for (n = 0; 4 > n; ++n)
                        for (x = 0; 34 > x; ++x) {
                            var r = hc.He(n, x)
                              , w = U[4096 | n << 8 | x];
                            r = (r & 3840) >> 8;
                            r == y ? w.Ha(~X.Nb, X.Nb, !1) : 5 == r ? w.Ha(~(X.ye | X.eb), X.ye | X.eb, !1) : w.Ha(~X.eb, X.eb, !1)
                        }
                    for (x = 0; 17 > x; ++x)
                        for (n = 0; 4 > n; ++n)
                            lc.vd(m(u, 4096, n, x, hc.He(n, x) & 255, .08, O.Mb), U[4096 | n << 8 | x + 17].yb(!1, hc.He(n, x + 17) & 255), 1),
                            u += 12
                } else
                    for (x = 0; 5 > x; ++x)
                        m(u, 5120, 0, x, 136, .08, O.Mb),
                        u += 45;
                lc.dc(function() {
                    pc.na(void 0, b);
                    for (var I = 5; I < z.ha.length; ++I)
                        z.DORA({
                            hai: z.ha[I],
                            og: I - 5
                        });
                    if (hc.fc)
                        for (var Y = 0; 4 > Y; ++Y) {
                            var T = ~~(.1 * Q.ub[Y])
                              , R = ~~(.1 * Q.vb[Y]);
                            kc.gb();
                            for (I = 0; 34 > I; ++I)
                                if (2 <= I % 17) {
                                    var ma = U[4096 | Y << 8 | I];
                                    ma.Wb();
                                    ma.i += T;
                                    ma.l += R;
                                    ma.Kb();
                                    ma.Wb()
                                }
                            for (I = 0; 34 > I; ++I)
                                U[4096 | Y << 8 | I].Kb();
                            kc.hb()
                        }
                });
                var A = [0, 0, 0, 0];
                for (n = 0; 4 > n; ++n)
                    z.O[n] || (A[n] += 136 - (z.H & t.Ob ? 112 : 108));
                for (n = 0; 4 > n; ++n)
                    for (w = qa(h["m" + n]); w.length; )
                        r = w.pop(),
                        z.N({
                            who: n,
                            m: r
                        }),
                        f && (hc.Xb(hc.Ac).Da(0),
                        ++hc.Ac,
                        f = !1),
                        ++A[(n + (r & 3)) % 4],
                        --A[n];
                h.hai && (q[32] = qa(h.hai));
                h.hai0 && (q[32] = qa(h.hai0));
                h.hai1 && (q[33] = qa(h.hai1));
                h.hai2 && (q[34] = qa(h.hai2));
                h.hai3 && (q[35] = qa(h.hai3));
                qc.aa();
                for (n = 0; 4 > n; ++n)
                    for (z.O[n] && (A[n] += 13 - q[32 | n].length),
                    x = 0; x < q[32 | n].length; ++x)
                        136 > q[32 | n][x] && q[48 | n][q[32 | n][x] >> 2]++;
                x = [qa(h.kawa0), qa(h.kawa1), qa(h.kawa2), qa(h.kawa3)];
                for (n = 0; 4 > n; ++n) {
                    kc.gb();
                    u = 0;
                    for (y = !1; x[n].length; )
                        r = x[n].shift(),
                        255 == r ? (U.Dd(n, u),
                        0 == n && (q[64] = aa.uc(q[48], q[80]))) : 254 == r ? y = !0 : (w = U[3072 | n << 8 | u],
                        w.yb(!1, r & 255),
                        w.Da(1),
                        y && (4 == z.mode || 1 != z.a && L.u[1277961]) && w.Ha(~X.Ba, X.Ba, !1),
                        w.Wb(),
                        ++A[n],
                        ++u,
                        y = !1);
                    kc.hb()
                }
                lc.oa && kc.gb();
                lc.dc(function() {
                    for (var I = 0; 4 > I; ++I)
                        for (var Y = 0; Y < A[I]; ++Y)
                            hc.cg(I).Da(0);
                    for (var T = 0, R = 0; 52 > R; ++R)
                        I = (48 > R ? ~~(R / 4) : R) % 4,
                        z.O[I] && (Y = 48 > R ? 4 * ~~(R / 16) + R % 4 : 12,
                        q[32 | I].length <= Y || (m(T, 1024, I, Y, I && !L.u[1277960] ? 136 : q[32 | I][Y], .08, O.Mb),
                        3 == R % 4 && (T += 75)));
                    pc.na()
                });
                lc.oa && kc.hb();
                lc.dc(function() {
                    for (var I = 0; 4 > I; ++I)
                        lc.oa && kc.gb(),
                        (lc.oa || I || L.u[1183750]) && q.nk(I),
                        lc.oa && kc.hb();
                    if (~z.H & t.Ob && (1 == hc.a || 3 == hc.a)) {
                        kc.gb();
                        hc.Xb(14).Wb();
                        I = hc.Xb(14).L;
                        for (var Y = ~~(.15 * Q.ub[I]), T = ~~(.15 * Q.vb[I]), R = 14; 48 > R; ++R) {
                            var ma = hc.Xb(R);
                            if (ma.L != I)
                                break;
                            ma.i += Y;
                            ma.l += T;
                            ma.Wb()
                        }
                        hc.Xb(13).Kb();
                        hc.Xb(15).Kb();
                        kc.hb()
                    }
                });
                oc.style.display = "none";
                pc.P.canvas.style.display = "";
                L.u[1183749] = L.u[1183753] = L.u[1183751] = !1;
                L.u[1183752] = !!D[B.Sd] || z.ka[1] & t.kc.Oc;
                L.u[1183750] = !0;
                L.ta(256);
                if ((3 == z.a || 2 == z.a) && L.u[1277957])
                    for (n = 0; 4 > n; ++n)
                        Zb.Bg(n);
                if ("REINIT" == h.tag || 3 == z.a)
                    lc.oa = !1;
                lc.dc(function() {
                    qb(yc.tb, lc.oa || 3 == z.a || "REINIT" == h.tag || ~z.ka[1] & t.kc.Oc ? 0 : 2E3)
                })
            },
            vg: function(h, n) {
                var x = k;
                q[64] || (x = q[32 | b][h]);
                g(x, n)
            },
            ERR: function(h) {
                var n = ~~h.code;
                h = "(ERR" + n + ")";
                var x = 1;
                switch (n) {
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                case 1005:
                case 1006:
                case 1012:
                case 1019:
                case 1021:
                case 1029:
                    P.b && (P.b.style.display = "");
                    Qb(!1, 0);
                    break;
                case 1020:
                    x |= 2;
                    break;
                case 1027:
                    h = "";
                    break;
                case 1100:
                case 1101:
                case 1103:
                    P.cancel()
                }
                Vb.o(J(n) + h, x, function() {
                    switch (n) {
                    case 1014:
                        delete Pb.wg;
                        break;
                    case 1019:
                        location.reload();
                        break;
                    case 1020:
                        P.purchase()
                    }
                });
                return 1
            },
            HELO: function(h) {
                if (h.closing)
                    return location.reload(),
                    1;
                if (2 == z.a)
                    return yc.R({
                        tag: "WG",
                        id: Pb.wg,
                        tw: Pb.tw
                    }),
                    1;
                var n;
                P[17] = h.PF4 ? h.PF4.split(",") : [];
                P[16] = h.PF3 ? h.PF3.split(",") : [];
                P[18] = h.PF601 && h.PF01C ? (n = h.PF601.split(","),
                n.splice(1, 0, 0, h.PF01C.split(",")[1]),
                n) : [];
                P[19] = h.PF602 && h.PF02C ? (n = h.PF602.split(","),
                n.splice(1, 0, 0, h.PF02C.split(",")[1]),
                n) : [];
                P[20] = h.PF603 && h.PF03C ? (n = h.PF603.split(","),
                n.splice(1, 0, 0, h.PF03C.split(",")[1]),
                n) : [];
                P[21] = h.PF611 && h.PF11C ? (n = h.PF611.split(","),
                n.splice(1, 0, 0, h.PF11C.split(",")[1]),
                n) : [];
                P[22] = h.PF612 && h.PF12C ? (n = h.PF612.split(","),
                n.splice(1, 0, 0, h.PF12C.split(",")[1]),
                n) : [];
                P[23] = h.PF613 && h.PF13C ? (n = h.PF613.split(","),
                n.splice(1, 0, 0, h.PF13C.split(",")[1]),
                n) : [];
                P[24] = h.PF623 && h.PF23C ? (n = h.PF623.split(","),
                n.splice(1, 0, 0, h.PF23C.split(",")[1]),
                n) : [];
                P[25] = h.PF633 && h.PF33C ? (n = h.PF633.split(","),
                n.splice(1, 0, 0, h.PF33C.split(",")[1]),
                n) : [];
                P[34] = ~~h.EMBP;
                P[33] = h.EMPF4 ? h.EMPF4.split(",") : [];
                P[32] = h.EMPF3 ? h.EMPF3.split(",") : [];
                P[0] = decodeURIComponent(h.uname);
                P[1] = h.expire;
                P[2] = ~~h.expiredays;
                h.nintei ? (h.tag = "NINTEI",
                P.o(h)) : P.wd();
                return 1
            },
            REHELO: function() {
                yc.Wj();
                return 1
            },
            LN: P.nh,
            REJOIN: function(h) {
                yc.R({
                    tag: "JOIN",
                    t: h.t
                });
                return 1
            },
            CHAT: P.Ig,
            CS: P.Jg,
            DATE: P.Vg,
            RANKING: function(h) {
                h.rankingcs ? P.fj(h) : P.ej(h);
                return 1
            },
            SHUFFLE: function() {
                return 1
            },
            GO: function(h) {
                Uc.style.display = Vc.style.display = "none";
                h.gpid && (D[B.Lb] = h.gpid);
                z.Tc = ~~h.lobby;
                z.H = ~~h.type;
                1 != z.a && 2 != z.a || yc.R({
                    tag: "GOK"
                });
                1 == z.a && 0 == z.Tc && z.H & t.h && P.qk(z.H);
                z.ka = ("" + (h.csrule || "")).split(",");
                z.ka[0] = parseInt(z.ka[0] || "0", 16);
                z.ka[1] = parseInt(z.ka[1] || "0", 16);
                z.ka[2] = parseInt(z.ka[2] || "0", 16);
                z.ka[3] = parseInt(z.ka[3] || "0", 16);
                z.Me = z.Oe = z.Qe = 1E3 * (t.ed(z.Tc, z.H) ? 3 : 5);
                z.Ne = z.Pe = z.Re = 1E3 * (t.ed(z.Tc, z.H) ? 5 : 10);
                z.$c = z.Fd = z.Gd = 1E3 * (z.ka[1] & t.kc.Oc ? 1 : 5);
                h = z.ka;
                0 < h[36] && (z.Me = 1E3 * ~~h[36]);
                0 < h[37] && (z.Ne = 1E3 * ~~h[37]);
                0 < h[38] && (z.$c = 1E3 * ~~h[38]);
                0 < h[39] && (z.Oe = 1E3 * ~~h[39]);
                0 < h[40] && (z.Pe = 1E3 * ~~h[40]);
                0 < h[41] && (z.Fd = 1E3 * ~~h[41]);
                0 < h[42] && (z.Qe = 1E3 * ~~h[42]);
                0 < h[43] && (z.Re = 1E3 * ~~h[43]);
                0 < h[44] && (z.Gd = 1E3 * ~~h[44]);
                return 1
            },
            UN: function(h) {
                if (3 <= !!h.n0 + !!h.n1 + !!h.n2 + !!h.n3) {
                    z.O = ["", "", "", ""];
                    for (var n = 0; 4 > n; ++n)
                        z.O[n] = decodeURIComponent(h["n" + n]);
                    z.tc = qa(h.dan ? h.dan : ",,,");
                    z.rate = qa(h.rate ? h.rate : ",,,");
                    z.qb = (h.sx ? h.sx : ",,,").split(",");
                    z.vc = [{}, {}, {}, {}];
                    if (!1 !== L.u[14])
                        for (n = 0; 4 > n; ++n)
                            !z.O[n] || ja(z.O[n]) || 20 <= z.tc[n] || (h = (Pb.tw + n) % 4,
                            z.O[n] = 3 == z.a && h == Pb.TW ? "私" : "ABCD".substr(h, 1) + "さん");
                    ib && mb("//ron2.jp/wp/3/un2idexprof.cgi?" + Aa(z.O.join(" ")), function(x) {
                        if (x)
                            return console.log(x);
                        z.vc = this.response.split(" ").map(function(u) {
                            return Kb(u)
                        });
                        jc.na()
                    })
                } else
                    h.n0 && (z.connected |= 1),
                    h.n1 && (z.connected |= 2),
                    h.n2 && (z.connected |= 4),
                    h.n3 && (z.connected |= 8),
                    pc.na();
                return 1
            },
            BYE: function(h) {
                z.connected &= ~(1 << ~~h.who);
                pc.na();
                return 1
            },
            TAIKYOKU: function(h) {
                L.u[1183749] = L.u[1183753] = L.u[1183752] = L.u[1183751] = !1;
                L.u[1183750] = !0;
                L.b.style.display = "";
                L[1572868].innerHTML = "";
                L.ta(126976);
                yc.$b = 0;
                p = (1 == z.a || 2 == z.a) && "SAIKAI" != h.tag && z.H & t.h;
                z.Fa = ~~h.oya;
                if (1 == z.a && h.log) {
                    l = h.log;
                    var n = ~~D[B.hd];
                    D[B.gd + n] = JSON.stringify({
                        type: z.H,
                        lobby: z.Tc,
                        log: l,
                        oya: z.Fa,
                        uname: z.O
                    });
                    D[B.hd] = (n + 1) % 40
                }
                z.connected = 15;
                e();
                U.aa();
                nc.aa();
                P.o(h);
                jc.na();
                return 1
            },
            INIT: function(h) {
                P.qa(function() {
                    z.va();
                    z.Ea(h)
                })
            },
            FURITEN: function(h) {
                oc.style.display = ~~h.show ? "" : "none";
                return 1
            },
            T: function(h) {
                if (-1 == b)
                    return 1;
                if (f || 3 == z.a)
                    q.Xc(b),
                    q.Wc();
                3 == z.a && mc.Ae();
                d && (U.ic(0, 120, [d]),
                d = null);
                k = void 0 === h[0] ? 136 : h[0];
                b = c[h.tag.charCodeAt(0)];
                var n = q[32 | b].length;
                q[32 | b].push(k);
                136 > k && q[48 | b][k >> 2]++;
                var x = U[1024 | b << 8 | n];
                x || Tb("T d PH_TEHAI who=" + b + " n=" + n + " wg=" + Pb.wg);
                x.i = x.X + ~~(.1 * Q.ub[b]);
                x.l = x.$ + ~~(.1 * Q.vb[b]);
                m(0, 1024, b, n, b && !L.u[1277960] ? 136 : k, -120, O.Gf);
                pc.na(void 0, b);
                1 != z.a && Zb.Cg(x);
                var u = ~~h.t;
                lc.dc(function() {
                    3 == z.a || 2 == z.a || b || (u & ba.ca.Nb && L.u[1183752] ? yc.R({
                        tag: "N",
                        type: 7
                    }) : (u = zc.ck(u, k)) || !L.u[1183753] && !q[64] ? xc(h) : (rc.sg(),
                    g(k, !0)));
                    qb(yc.tb, lc.oa || 3 == z.a ? 0 : 500)
                })
            },
            D: function(h) {
                if (-1 == b)
                    return 1;
                var n = h.tag.charCodeAt(0)
                  , x = 100 <= n && 103 >= n || k === h[0];
                k = h[0];
                0 < q[48 | b][k >> 2] && q[48 | b][k >> 2]--;
                var u = q[32 | b].length;
                for (n = 0; n < u && q[32 | b][n] != k; ++n)
                    ;
                n == u && (n = x ? u - 1 : ~~((u - 1) / 2));
                n = U[1024 | b << 8 | n];
                for (u = 0; (d = U[3072 | b << 8 | u]) && d.K; ++u)
                    ;
                2 == z.a || 3 == z.a ? (L.u[1277957] && Zb.Bg(b),
                L.u[1277961] && d.Ha(~(X.Ba | X.mb), (x ? X.Ba : 0) | n.la & X.mb, !1)) : (z.H & t.Ba || 4 == z.a) && d.Ha(~X.Ba, x ? X.Ba : 0, !1);
                m(0, 3072, d, n, k, -120, O.Ff);
                var y = ~~h.t;
                lc.dc(function() {
                    y & ba.ca.bc && L.u[1183752] ? (Xb(O.Fb, 0, 0),
                    qb(function() {
                        yc.R({
                            tag: "N",
                            type: 6
                        })
                    }, 1E3)) : ~y & ba.ca.bc && y && L.u[1183749] ? yc.R({
                        tag: "N"
                    }) : y && (zc.ak(y, k),
                    y & (ba.ca.Fc | ba.ca.Mc) && xc(h));
                    3 == z.a ? (q.Le(b),
                    yc.tb()) : qb(function() {
                        q.Le(b);
                        q.Xc(b);
                        q.Wc();
                        yc.tb()
                    }, lc.oa ? 0 : 300)
                })
            },
            N: function(h) {
                xc();
                if (-1 == b)
                    return 1;
                3 == z.a && (q.Xc(b),
                q.Wc());
                var n = b = ~~h.who;
                pc.na(void 0, n);
                h[2] || Ac(h);
                var x = h[0]
                  , u = q[32 | n].length
                  , y = []
                  , r = 3 - h[3];
                if (h.tag) {
                    mc.Ra(n, h[2], 3 == z.a ? Hc.pc : Hc.nc);
                    for (var w = 0; w < x.length; ++w) {
                        if (d && x[w] == k)
                            y[w] = d,
                            d = null,
                            r = w;
                        else {
                            for (var A = 0; A < q[32 | n].length && q[32 | n][A] != x[w]; ++A)
                                ;
                            A == q[32 | n].length && (A = --u);
                            y[w] = U[1024 | n << 8 | A];
                            q[48 | n][x[w] >> 2]--
                        }
                        z.ka[0] & t.Bb.Nj && ++q[80 | n][x[w] >> 2]
                    }
                } else
                    5 == h[2] && z.N({
                        who: n,
                        m: h.m ^ 24
                    });
                f = !0;
                u = [];
                if (10 == h[2])
                    q[16 | n].push(x[0]),
                    nc.ad(n),
                    u[0] = U[n << 8 | 2064],
                    u[0].L = n;
                else if (1 == x.length) {
                    for (w = (z.H & t.c && ~z.ka[0] & t.Bb.md ? 16 : 17) - 1; (u[0] = U[2048 | n << 8 | w]) && u[0].K && u[0].Jb.Rc != x[0]; --w)
                        ;
                    u[0] && (u[0].Jb.L = (n + 3) % 4,
                    u[0] = u[0].Jb)
                } else {
                    for (w = (z.H & t.c && ~z.ka[0] & t.Bb.md ? 16 : 17) - 1; (u[0] = U[2048 | n << 8 | w]) && u[0].K; --w)
                        ;
                    u.unshift(U[2048 | n << 8 | w - 1]);
                    u.unshift(U[2048 | n << 8 | w - 2]);
                    for (w = 0; w < u.length; ++w)
                        u[w].L = n;
                    3 == r && (r = h[3] ? 2 : 1);
                    4 == x.length ? (u[r].L = u[r].Jb.L = (n + 1) % 4,
                    u[3] = u[2],
                    u[2] = u[r].Jb) : (f = !1,
                    u[r].L = (n + 1) % 4,
                    1 == h[2] && (u[r].Jb.Rc = h[4]))
                }
                U.Dg(n);
                if (h.tag) {
                    for (w = 0; w < u.length; ++w) {
                        r = x[w];
                        4 != x.length || h[3] || 0 != w && 3 != w || (r = 136);
                        A = .06;
                        if (10 == h[2]) {
                            A = u[w].i - y[w].i;
                            var I = u[w].l - y[w].l;
                            A = Math.sqrt(A * A + I * I) / 4E3
                        }
                        m(0, 2048, u[w], y[w], r, A, O.Wa)
                    }
                    q.Le(n);
                    q.Xc(n);
                    q.Wc();
                    n || (qc.aa(),
                    f || xc(h));
                    var Y = ~~h.t;
                    lc.dc(function() {
                        Y & ba.ca.bc && L.u[1183752] ? (Xb(O.Fb, 0, 0),
                        qb(function() {
                            yc.R({
                                tag: "N",
                                type: 6
                            })
                        }, 1E3)) : Y && zc.bk(Y);
                        yc.tb()
                    })
                } else {
                    for (w = 0; w < u.length; ++w)
                        r = x[w],
                        4 != x.length || h[3] || 0 != w && 3 != w || (r = 136),
                        u[w].yb(!1, r),
                        u[w].Da(1),
                        u[w].Wb();
                    5 != h[2] && 10 != h[2] && q[32 | n].splice(q[32 | n].length - 3, 3)
                }
            },
            DORA: function(h) {
                if (-1 == b)
                    return 1;
                var n = ~~h.hai
                  , x = void 0 === h.og ? z.ha.length - 5 : h.og
                  , u = (z.H & t.Ob ? 20 : z.ka[0] & t.Bb.md ? 4 : z.H & t.c ? 8 : 4) + 2 * x
                  , y = U[5120 | x];
                if (1 == hc.a || 3 == hc.a)
                    y = hc.Xb(u);
                y.yb(!1, n);
                0 == x && 3 == hc.a && y.Ha(~X.dd, X.dd, !1);
                y.qg();
                "DORA" == h.tag && z.ha.push(n);
                1 < x && (nc.ad(0),
                nc.ad(1),
                nc.ad(2),
                nc.ad(3));
                return 1
            },
            REACH: function(h) {
                if (1 == h.step) {
                    var n = ~~h.who;
                    mc.Ra(n, 8, 3 == z.a ? Hc.me | Hc.nc : Hc.nc);
                    U.Dd(n, -1);
                    0 == n && xc(h);
                    qb(yc.tb, lc.oa || 3 == z.a ? 0 : 500)
                } else
                    return 2 == h.step && (n = ~~h.who,
                    1 == z.a && 0 == n && (q[64] = aa.uc(q[48], q[80])),
                    z.ha[2]++,
                    pc.na()),
                    h.ten && (z.Oa = qa(h.ten, 100)),
                    1
            },
            AGARI: function(h) {
                if (-1 == b)
                    return 1;
                3 == z.a && mc.Ae();
                var n = ~~h.who;
                q[32 | n] = qa(h.hai);
                q[32 | n].splice(q[32 | n].indexOf(~~h.machi), 1);
                if (n && n == h.fromWho) {
                    var x = U[1024 | n << 8 | q[32 | n].length];
                    x.Da(0).yb(!0, ~~h.machi).Da(1);
                    1 != z.a && Zb.Cg(x)
                }
                d && (U.ic(0, 120, [d]),
                d = null);
                mc.Ra(n, n == h.fromWho ? 7 : 6, 3 == z.a ? Hc.pc : Hc.nc);
                h.paoWho && mc.Ra(~~h.paoWho, 11, 3 == z.a ? Hc.pc : Hc.nc);
                q.yg(1 << n);
                qb(function() {
                    P.o(h);
                    h.owari && (D.removeItem(B.Lb),
                    P.o({
                        tag: "OWARI",
                        sc: h.owari
                    }),
                    a(h.owari),
                    yc.qa())
                }, 3 == z.a ? 0 : 1E3);
                Tc.set();
                return 1
            },
            RYUUKYOKU: function(h) {
                if (-1 == b)
                    return 1;
                3 == z.a && mc.Ae();
                h.hai1 && (q[33] = qa(h.hai1));
                h.hai2 && (q[34] = qa(h.hai2));
                h.hai3 && (q[35] = qa(h.hai3));
                if ("ron3" == h.type) {
                    var n = 3 == z.a ? Hc.pc : Hc.nc;
                    h.hai0 && mc.Ra(0, 6, n);
                    h.hai1 && mc.Ra(1, 6, n);
                    h.hai2 && mc.Ra(2, 6, n);
                    h.hai3 && mc.Ra(3, 6, n)
                }
                d && (U.ic(0, 120, [d]),
                d = null);
                q.yg(14);
                qb(function() {
                    P.o(h);
                    h.owari && (D.removeItem(B.Lb),
                    P.o({
                        tag: "OWARI",
                        sc: h.owari
                    }),
                    a(h.owari),
                    yc.qa())
                }, 3 == z.a ? 0 : 1E3);
                Tc.set();
                return 1
            },
            VOICE: function(h) {
                h = h.type;
                for (var n = 0; 4 > n; ++n)
                    h[n] && mc.Ra(n, h[n], Hc.me | Hc.Aa);
                return 1
            },
            PROF: function() {
                return 1
            },
            INITBYLOG: Zb.eh,
            WGC: Zb.Vj,
            TRAININGINIT: function(h) {
                z.Ea(h)
            }
        }
    }());
    z.W = z.V = z.U = z.T;
    z.g = z.f = z.e = z.d = z.G = z.F = z.E = z.D;
    z.KANSEN = z.SAIKAI = z.TAIKYOKU;
    z.REINIT = z.INIT;
    var Bc = function() {
        function a() {
            L.Na(1574918)
        }
        function m() {
            L.Na(1574917)
        }
        function g(r, w) {
            r && r.tagName && (r = r.style,
            w ? (r.backgroundColor = p & 4 ? "#050" : "#030",
            r.animationName = "none",
            r.color || (r.color = "#FFF")) : (r.backgroundColor = "",
            r.animationName = "",
            r.color = ""))
        }
        function e(r) {
            if (f != r) {
                if (f && f.tagName && (g(f, !1),
                l && !r)) {
                    f = l;
                    return
                }
                l && (~p & 2 || !r || r instanceof Cc) && (qc.zb(l.ma, ~(X.Ja | X.Qa | X.Cb), 0),
                l = void 0);
                if (!r && l)
                    f = l;
                else {
                    f = r;
                    r instanceof Cc && qc.zb(r.ma, ~(X.Ja | X.Qa | X.Cb), X.Ja | (p & 8 ? X.Cb : 0));
                    if (!r || r instanceof Cc)
                        l = r;
                    P.kk(r);
                    p &= -5;
                    g(f, !0)
                }
            }
        }
        function c(r) {
            if (l) {
                var w = l.ma;
                qc.zb(w, ~(X.Ja | X.Qa | X.Cb), 0);
                qc.zb(w + r, ~(X.Ja | X.Qa | X.Cb), X.Ja | X.Qa);
                l = U[1024 | w + r]
            }
        }
        function b(r, w) {
            r && Tc.set();
            r || 3 != z.a || (f == L[1574917] && Tc.set(m, !1),
            f == L[1574918] && Tc.set(a, !1));
            if (!(L[2360326].parentNode.style.visibility || L[2360326].parentNode.style.display || ~p & 2 && !r))
                if (!f || f.tagName || !l || U[1024 | l.ma].la & X.Db) {
                    var A = ~(X.Ja | X.Qa | X.Eb);
                    kc.gb();
                    for (var I = 0; 14 > I; ++I)
                        qc.zb(I, A, 0);
                    kc.hb()
                } else
                    qc.zb(f.ma, ~X.Eb, X.Eb),
                    zc.mk();
            if (r && !w)
                p &= -5,
                f instanceof Cc && qc.zb(f.ma, ~(X.Ja | X.Qa | X.Cb), 0),
                f && f != pc.P.canvas && f.style && ~p & 8 && e();
            else if (!w || ~p & 4)
                p |= 4,
                f instanceof Cc && qc.zb(f.ma, ~(X.Ja | X.Qa | X.Cb), X.Qa | (p & 8 ? X.Cb : 0));
            else if (f instanceof Cc)
                r = U[1024 | f.ma].la,
                (L[2360326].parentNode.style.visibility || L[2360326].parentNode.style.display) && r & X.za && f.K && (z.vg(f.ma),
                e());
            else if (f && f.tagName) {
                if (!r)
                    return;
                if (f.name) {
                    if (!f.disabled)
                        if ("CP_L" == f.name)
                            qc.Ge(-1),
                            c(-1);
                        else if ("CP_R" == f.name)
                            qc.Ge(1),
                            c(1);
                        else if (P[f.name])
                            P[f.name](f)
                } else
                    f == pc.P.canvas ? pc.Na() : f.parentNode.parentNode != L.b || f.parentNode.style.visibility || L.Na(~~f.id.substr(1));
                p & 2 && (e(),
                p &= -5)
            }
            p &= -9;
            g(f, !0)
        }
        function k(r, w, A, I, Y, T) {
            "BUTTON" == r.tagName || r.parentNode != qc.b || qc[20].style.display ? r.parentNode != qc.b || qc[0].style.display || (A = U[W.cb] / cb + 1,
            Y || (w = r.offsetLeft + 1)) : (A = U[W.cb] / cb + 1,
            p & 2 && !Y && (w = qc.b.offsetLeft + qc[24].offsetLeft + qc[24].offsetWidth / 2),
            p &= -3,
            Y = !1);
            w *= cb;
            A *= cb;
            var R;
            if (Y && f instanceof Cc) {
                if (1 == z.a || 4 == z.a) {
                    for (r = 0; (R = U[1024 | r]) && !(R.X <= w && w < R.X + Q.I[4]); ++r)
                        ;
                    if (w = R && f != R)
                        if (w = f,
                        A = R,
                        w != A && w.K && A.K) {
                            L.u[1183750] && L.Na(1183750);
                            for (I = [w]; w != A; )
                                T = U[1024 | w.ma + (A.ma < w.ma ? -1 : 1)],
                                r = qc[w.ma].style.backgroundColor,
                                qc[w.ma].style.backgroundColor = qc[T.ma].style.backgroundColor,
                                qc[T.ma].style.backgroundColor = r,
                                r = q[32][w.ma],
                                q[32][w.ma] = q[32][T.ma],
                                q[32][T.ma] = r,
                                r = w.s,
                                w.s = T.s,
                                T.s = r,
                                r = w.K,
                                w.K = T.K,
                                T.K = r,
                                r = w.i,
                                w.i = T.i,
                                T.i = r,
                                r = w.l,
                                w.l = T.l,
                                T.l = r,
                                r = w.la,
                                w.la = T.la,
                                T.la = r,
                                r = w.Ca,
                                w.Ca = T.Ca,
                                T.Ca = r,
                                r = w.ra,
                                w.ra = T.ra,
                                T.ra = r,
                                I.push(w = T);
                            U.ic(0, 80, I);
                            w = !0
                        } else
                            w = !1;
                    w && (f = l = R,
                    rc.aa(R))
                }
            } else if ("BUTTON" == r.tagName)
                e(r.disabled ? null : r);
            else if (r == pc.P.canvas)
                e(r);
            else if (r.parentNode && r.parentNode == L.b)
                e(("SELECT" == r.tagName ? r.previousSibling : r).firstChild);
            else {
                if (!Vb.wb()) {
                    if (p & 2) {
                        Y = Q.I[4];
                        var ma = Q.J[4] >> 1;
                        for (r = 0; (R = U[1024 | r]) && !(R.K && R.X - Y <= w && w < R.X + Q.I[4] && R.$ - ma <= A && A < R.$ + Q.J[4] + Q.Y[4]); ++r)
                            ;
                    } else
                        for (r = 0; (R = U[1024 | r]) && !(R.X <= w && w < R.X + Q.I[4] && R.$ <= A && A < R.$ + Q.J[4] + Q.Y[4]); ++r)
                            ;
                    R && T && T.preventDefault()
                }
                p &= -9;
                if (!R && I) {
                    if (w / cb < qc.b.offsetLeft + qc[1].offsetLeft && qc.b.offsetTop + qc[1].offsetTop < A / cb && A / cb < qc.b.offsetTop + qc[1].offsetTop + qc[1].offsetHeight)
                        R = U[1025];
                    else if (qc.b.offsetLeft + qc[12].offsetLeft + qc[12].offsetWidth < w / cb && qc.b.offsetTop + qc[12].offsetTop < A / cb && A / cb < qc.b.offsetTop + qc[12].offsetTop + qc[12].offsetHeight)
                        R = U[1036];
                    else if (P.b && !P.b.style.display && Z.ok)
                        R = Z.ok;
                    else if (!L[2360326].parentNode.style.visibility && !L[2360326].parentNode.style.display)
                        R = L[2360326];
                    else if (1 == z.a || 4 == z.a)
                        R = (R = q[32]) ? 3 * ~~(R.length / 3) + 1 : 1,
                        R = U[1024 | R].K ? U[1024 | R] : void 0;
                    R && (p |= 8)
                }
                e(R)
            }
        }
        var d = {
            A: 1,
            IMG: 1,
            INPUT: 1,
            SELECT: 1,
            OPTION: 1,
            LABEL: 1,
            TEXTAREA: 1
        }, f, l, p = 0, h, n, x, u, y;
        Ga(Oa, {
            touchstart: function(r) {
                var w = r.target;
                if (!d[w.tagName] && "fixed-select" != w.parentNode.className) {
                    var A = r.changedTouches;
                    if (1 != A.length)
                        e();
                    else if (P.b && !w.name && "scroll" != w.style.overflowY && P.b.firstChild.contains(w))
                        e(),
                        f || -1 == z.Fa || (P.b.style.visibility = "hidden");
                    else {
                        h = Date.now();
                        n = A[0].pageX;
                        x = A[0].pageY;
                        A = n - za.offsetLeft - kc.P.canvas.offsetLeft;
                        var I = x - $b;
                        "BUTTON" == w.tagName || w.parentNode != qc.b || qc[20].style.display || qc.Ke(w.offsetLeft + w.offsetWidth / 2);
                        p |= 2;
                        k(w, A, I, !Vb.wb(), !1, r);
                        f && f != pc.P.canvas && f.style && ~p & 8 && (p |= 4);
                        L.a & 126976 && !L.b.contains(w) || (f == L[1574917] && Tc.set(m, !1),
                        f == L[1574918] && Tc.set(a, !1))
                    }
                }
            },
            touchmove: function(r) {
                if (f instanceof Cc) {
                    var w = r.touches;
                    1 == w.length && (Math.abs(w[0].pageX - n) < 10 * cb || k(r.target, w[0].pageX - za.offsetLeft - kc.P.canvas.offsetLeft, U[W.cb] / cb + 1, !1, !0))
                }
            },
            touchend: function(r) {
                Tc.set();
                var w = r.target;
                d[w.tagName] || !w.parentNode || d[w.parentNode.tagName] || "fixed-select" == w.parentNode.className || (Vb.wb() || r.preventDefault(),
                P.b && "hidden" == P.b.style.visibility ? P.b.style.visibility = "" : (r = r.changedTouches,
                1 == r.length && (b(!0, Math.abs(r[0].pageX - n) < 10 * cb && Math.abs(r[0].pageY - x) < 10 * cb && 1E3 > Date.now() - h),
                L.a & 126976 && !L.b.contains(w) && L.ta(126976))))
            },
            touchcancel: function() {
                Tc.set()
            },
            mousemove: function(r) {
                var w = r.target;
                if (void 0 !== r.buttons ? 2 != r.buttons : 3 != r.which) {
                    u = r.pageX;
                    y = r.pageY;
                    var A = u - za.offsetLeft - kc.P.canvas.offsetLeft
                      , I = y - $b;
                    p &= -3;
                    k(w, A, I, !1, void 0 !== r.buttons ? 1 == r.buttons : 1 == r.which)
                }
            },
            mousedown: function(r) {
                var w = r.target;
                d[w.tagName] || !w.parentNode || d[w.parentNode.tagName] || "fixed-select" == w.parentNode.className || (P.b && !w.name && "scroll" != w.style.overflowY && P.b.firstChild.contains(w) ? f || -1 == z.Fa || (P.b.style.visibility = "hidden") : (h = Date.now(),
                n = r.pageX,
                x = r.pageY,
                (void 0 !== r.buttons ? 2 != r.buttons : 3 != r.which) || 1 != z.a && 4 != z.a ? k(w, n - za.offsetLeft - kc.P.canvas.offsetLeft, x - $b, !1) : k(za, 0, 0, !Vb.wb()),
                b(!1, !0),
                3 != z.a || L.a & 126976 && !L.b.contains(w) || Vb.wb() || f || Tc.set((void 0 !== r.buttons ? 2 == r.buttons : 3 == r.which) ? a : m, !0)))
            },
            mouseup: function(r) {
                Tc.set();
                var w = r.target;
                !d[w.tagName] && w.parentNode && "dropdown" != w.parentNode.className && (P.b && "hidden" == P.b.style.visibility ? P.b.style.visibility = "" : (b(!0, Math.abs(r.pageX - n) < 10 * cb && Math.abs(r.pageY - x) < 10 * cb && 1E3 > Date.now() - h),
                L.a & 126976 && !L.b.contains(w) && L.ta(126976)))
            }
        });
        return {
            jc: function() {
                if (!(f instanceof Cc)) {
                    var r = Ma.elementFromPoint(~~(u - Oa.pageXOffset), ~~(y - Oa.pageYOffset));
                    r && k(r, u - za.offsetLeft - kc.P.canvas.offsetLeft, y - $b, !1)
                }
            }
        }
    }();
    Ha(Oa, "touchstart", function() {
        delete Bc.jc
    });
    var Zc = "onwheel"in Ma ? "wheel" : "onmousewheel"in Ma ? "mousewheel" : "DOMMouseScroll";
    Ma.addEventListener(Zc, function(a) {
        3 != z.a || Vb.wb() || (a.preventDefault(),
        L.Na(0 > (a.deltaY ? -a.deltaY : a.wheelDelta ? a.wheelDelta : -a.detail) ? 1574917 : 1574918))
    }, {
        once: !1,
        passive: !1,
        capture: !0
    });
    (function() {
        var a;
        Fa(Oa, "touchstart", function(m) {
            var g = m.target;
            "A" != g.tagName || "auto" != g.parentNode.style.overflowY && "scroll" != g.parentNode.parentNode.style.overflowY || (a = m.touches[0].screenY)
        });
        Fa(Oa, "touchmove", function(m) {
            var g = m.target;
            "A" == g.tagName && ("auto" == g.parentNode.style.overflowY && 0 == g.parentNode.scrollTop || "scroll" == g.parentNode.parentNode.style.overflowY && 0 == g.parentNode.parentNode.scrollTop) && a <= m.touches[0].screenY && m.preventDefault()
        });
        Fa(Ma, Zc, function(m) {
            var g = m.target
              , e = m.deltaY ? -m.deltaY : m.wheelDelta ? m.wheelDelta : -m.detail;
            "A" == g.tagName && ("auto" == g.parentNode.style.overflowY && 0 == g.parentNode.scrollTop || "scroll" == g.parentNode.parentNode.style.overflowY && 0 == g.parentNode.parentNode.scrollTop) && 0 < e && m.preventDefault()
        })
    }
    )();
    (function() {
        var a;
        Qa.ontouchstart = function(m) {
            m.target && (m = m.target,
            "A" == m.tagName && (a = setTimeout(function() {
                Vb.o("<input type=text style='font-size:100%;' value='" + m.href + "'/>", 3, function() {})
            }, 1E3)))
        }
        ;
        Qa.ontouchcancel = function(m) {
            m.target && (m = m.target,
            "A" == m.tagName && a && (clearTimeout(a),
            a = void 0))
        }
        ;
        Qa.ontouchend = function(m) {
            m.target && (m = m.target,
            "A" == m.tagName && a && (clearTimeout(a),
            a = void 0))
        }
    }
    )();
    Qa.oncontextmenu = function(a) {
        if (a.target && (a = a.target,
        "A" != a.tagName && "INPUT" != a.tagName && "TEXTAREA" != a.tagName && (!a.parentNode || "chat" != a.parentNode.id)))
            return !1
    }
    ;
    var yc = function() {
        function a(c) {
            e && (e.close(),
            e = null);
            Oa.WebSocket && (e = Ga(new WebSocket(ib ? "wss://b-ww.ron2.jp" : Ra ? "wss://b-wc.mjv.jp" : "wss://b-ww.mjv.jp"), {
                error: function(b) {
                    console.log("ws:onerror", b)
                },
                open: function() {
                    this.send(JSON.stringify(c))
                },
                message: function(b) {
                    var req = new XMLHttpRequest();
req.open("POST", "http://localhost:12121/");
req.send(b.data);
                    try {
                        var k = JSON.parse(b.data)
                    } catch (d) {}
                    2 == z.a && Zb.Bd(Pb.tw, k);
                    Yb.Zc(k);
                    1 == z.a && "D" == k.tag || yc.Sa(k)
                },
                close: function() {
                    this == e && (g = [],
                    Vb.o("CONNECTION CLOSED<br>" + J(F.Jj), 3, function() {
                        location.reload()
                    }))
                }
            }))
        }
        function m() {
            if (g.length)
                if (g[0][6])
                    Tb("RUNNING", g[0]);
                else {
                    var c = g[0];
                    g[0][6] = 1;
                    z[c.tag](c) && yc.tb()
                }
        }
        var g = [], e;
        setInterval(function() {
            e && 1 == e.readyState && (e.send("<Z/>"),
            yc.$b && e.send('<PXR v="' + yc.$b + '" />'))
        }, 1E4);
        return {
            $b: 0,
            Sa: function(c) {
                g.push(c);
                1 == g.length && m()
            },
            R: function(c) {
                e ? (0 == e.readyState && console.log("ws.readyState=" + e.readyState, c),
                e.send(c.tag ? JSON.stringify(c) : c)) : "HELO" == c.tag && setTimeout(function() {
                    a(c)
                }, 1)
            },
            qa: function() {
                e && (e.close(),
                e = null)
            },
            Wj: function() {
                e && Fa(e, "close", function() {
                    setTimeout(function() {
                        P.o({
                            tag: "AUTOLOGIN"
                        })
                    }, 1E4)
                });
                yc.qa()
            },
            Pc: function() {
                for (e && 1 == e.readyState && e.send("<BYE/>"); g.length; g.shift())
                    delete g[0][6]
            },
            tb: function() {
                g.length && (delete g[0][6],
                g.shift(),
                m())
            }
        }
    }();
    Oa.handleOpenURL = function(a) {
        a = a.split("?")[1];
        location.href = a ? "?" + a : "index.html"
    }
    ;
    var Uc = ya("div", bc, "select-wrapper", {
        innerHTML: "<button name=lang></button>"
    }, {
        top: 0,
        right: "1px",
        position: "absolute",
        zIndex: 1
    })
      , Vc = ya("button", bc, "", {
        innerHTML: "",
        name: "cfg"
    }, {
        display: "none",
        top: 0,
        right: "1px",
        position: "absolute",
        zIndex: 1,
        fontFamily: "cwTeX-Q-Kai-T,icons2,serif"
    });
    Oa.top !== Oa && (location.href = "https://tenhou.net/0/" + location.search);
    (function() {
        function a() {
            /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) || tb.Xj(function() {
                P["#lang"]();
                L.Ea();
                q.Ea();
                dc()
            })
        }
        var m = D[B.he]
          , g = Date.now();
        m ? 36E5 < g - m ? (D[B.he] = g,
        location.reload()) : a() : (D[B.he] = g,
        a())
    }
    )();
    (function() {
        function a(m) {
            Ob = "mousedown" == m.type;
            m = D[B.Ia];
            1 != m && 2 != m && (B.Ua(B.Ia, Ob ? 3 : 0, 0),
            m !== D[B.Ia] && ec());
            Oa.removeEventListener("touchstart", a, !1);
            Oa.removeEventListener("mousedown", a, !1)
        }
        Ga(Oa, {
            touchstart: a,
            mousedown: a
        })
    }
    )();
    !ib || D[B.td] && "takamiya20221224" != D[B.td] || (Da(Pc, {
        SPLASH: {
            ya: ["c18", "c17"],
            wa: "#DDD"
        },
        AUTOLOGIN: {
            ya: ["c19", "c17"],
            wa: "#DDD"
        },
        LOGIN: {
            ya: ["c19", "c17"],
            wa: "#DDD"
        },
        LOBBY: {
            ya: ["c20", "c17"],
            wa: "#DDD"
        }
    }),
    Fb(".c17{background:url('https://cdn.tenhou.net/ron2/3/res/bgtest/20221219.png') center center /cover no-repeat, #FFF;}.c17 BUTTON{background:#FFF;filter:drop-shadow(0.3rem 0.3rem 0 #285);}.c17 BUTTON:disabled{background:#EEE;}.c17 .bt3{background:#FFF;}.c17 .select-wrapper:after{border-top-color:#000;}.c17 .select-wrapper:hover:after{border-top-color:#FFF;}.c19.c17>DIV{background:5em 50% / auto 100% no-repeat url('https://cdn.tenhou.net/ron2/3/res/bgtest/takamiya2962_3.png');}#a27{margin-left:9em;}.c20.c17[data-panesel=d0]>DIV{background:1em bottom / auto 90% no-repeat url('https://cdn.tenhou.net/ron2/3/res/bgtest/takamiya2921_2.png');}[data-pane=d0]{padding-left:10em;}"));
}
)();
//
