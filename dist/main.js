(() => {
  "use strict";
  var t = {
      295: (t, e, n) => {
        n.d(e, { Z: () => u });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          t.id,
          "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&family=Mulish:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Qwitcher+Grypen:wght@400;700&display=swap);",
        ]),
          i.push([
            t.id,
            "*{\n    font-family: 'Mulish', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nbody{\n    height: 100vh;\n}\n\n\n#header{\n    background-color: grey;\n    font-style: italic;\n    display: flex; \n    justify-content: start; \n    align-items: center;\n    gap: 25px;\n    padding: 15px;\n    height: 15vh;\n    font-size: 35px;\n}\n\n#header>img{\n    max-width: 10%;\n    height: auto;\n}\n\n#center{\n    display: flex;\n    height: calc(85vh - 30px);\n}\n\n#sidebar{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    background-color: lightgray;\n    padding: 50px;\n    width: 15vw;\n}\n\n#projects{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 15px;\n}\n\n#projects>button{\n    background-color: lightgray;\n    font-weight: bold;  \n}\n\n#tasks>button{\n    background-color: #c0c0c0;\n}\n\n#tasks>button:hover, #projects>button:hover{\n     background-color: darkgrey;\n}\n\n#tasks{\n    display: flex;\n    flex-direction: column;\n    background-color: #c0c0c0;\n    width: 85vw;\n    padding: 50px;\n}\n\n#tasksText{\n    margin-bottom: 15px;\n}\n\n#addProject, #addTask{\n    border-radius: 5px;\n    border: 0;\n    padding: 10px; \n    text-align: start;\n}\n\n#addTask{\n    margin-top: 15px;\n}\n\n#projectList{\n    padding: 10px;\n}",
            "",
          ]);
        const u = i;
      },
      807: (t, e, n) => {
        n.d(e, { Z: () => u });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          t.id,
          "*{\n    margin: 0;\n    padding: 0;\n}\n\n#task > div{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#task > div > div{\n    display: flex;\n    gap: 10px;\n    margin-top: 15px;\n}\n\n#task > div > div > button{\n    border-radius: 5px;\n    background-color: lightgray;\n    border: 0;\n    padding: 5px;\n}\n\n#task > div > div > button:hover{\n    border: 2px solid grey;\n}\n\n#task > div > div > p{\n    margin-top: 4px;\n}\n\n.projectButton{\n    font-weight: bold;\n    background-color: lightgray;\n    border: 0;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.projectButton:hover{\n    background-color: grey;\n}\n\n#addT{\n    margin: 0 auto;\n    position: absolute;\n    top: 50%;\n    backdrop-filter: blur(15px);\n    padding: 10px;\n}\n\ndialog{\n    border: 0;\n    border-radius: 5px;\n}\n\nform>button, form>input{\n    border-radius: 5px;\n    background-color: #d3d3d3;\n    border: 0;\n    padding: 5px;\n    margin: 5px;\n    font-weight: bold;\n}\n\nform>button:hover{\n    background-color: lightcyan;\n}\n\ninput:focus{\n    outline: 1px solid grey;\n}\n",
          "",
        ]);
        const u = i;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, a, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var d = this[u][0];
                  null != d && (i[d] = !0);
                }
              for (var c = 0; c < t.length; c++) {
                var s = [].concat(t[c]);
                (r && i[s[0]]) ||
                  (void 0 !== o &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = o)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  a &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = a))
                      : (s[4] = "".concat(a))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var o = {}, i = [], u = 0; u < t.length; u++) {
            var d = t[u],
              c = r.base ? d[0] + r.base : d[0],
              s = o[c] || 0,
              l = "".concat(c, " ").concat(s);
            o[c] = s + 1;
            var m = n(l),
              h = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== m) e[m].references++, e[m].updater(h);
            else {
              var f = a(h, r);
              (r.byIndex = u),
                e.splice(u, 0, {
                  identifier: l,
                  updater: f,
                  references: 1,
                });
            }
            i.push(l);
          }
          return i;
        }
        function a(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, a) {
          var o = r((t = t || []), (a = a || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < o.length; i++) {
              var u = n(o[i]);
              e[u].references--;
            }
            for (var d = r(t, a), c = 0; c < o.length; c++) {
              var s = n(o[c]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            o = d;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return {
              update: function () {},
              remove: function () {},
            };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function n(r) {
    var a = e[r];
    if (void 0 !== a) return a.exports;
    var o = (e[r] = { id: r, exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var r = e.getElementsByTagName("script");
        if (r.length) for (var a = r.length - 1; a > -1 && !t; ) t = r[a--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.nc = void 0),
    (() => {
      function t(e) {
        return (
          (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          t(e)
        );
      }
      function e(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              " argument" +
              (t > 1 ? "s" : "") +
              " required, but only " +
              e.length +
              " present",
          );
      }
      function r(n) {
        e(1, arguments);
        var r = Object.prototype.toString.call(n);
        return n instanceof Date || ("object" === t(n) && "[object Date]" === r)
          ? new Date(n.getTime())
          : "number" == typeof n || "[object Number]" === r
          ? new Date(n)
          : (("string" != typeof n && "[object String]" !== r) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments",
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function a(t) {
        if (null === t || !0 === t || !1 === t) return NaN;
        var e = Number(t);
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function o(t) {
        e(1, arguments);
        var n = r(t),
          a = n.getUTCDay(),
          o = (a < 1 ? 7 : 0) + a - 1;
        return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
      }
      function i(t) {
        e(1, arguments);
        var n = r(t),
          a = n.getUTCFullYear(),
          i = new Date(0);
        i.setUTCFullYear(a + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
        var u = o(i),
          d = new Date(0);
        d.setUTCFullYear(a, 0, 4), d.setUTCHours(0, 0, 0, 0);
        var c = o(d);
        return n.getTime() >= u.getTime()
          ? a + 1
          : n.getTime() >= c.getTime()
          ? a
          : a - 1;
      }
      var u = {};
      function d() {
        return u;
      }
      function c(t, n) {
        var o, i, u, c, s, l, m, h;
        e(1, arguments);
        var f = d(),
          g = a(
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (u =
                        null !== (c = null == n ? void 0 : n.weekStartsOn) &&
                        void 0 !== c
                          ? c
                          : null == n ||
                            null === (s = n.locale) ||
                            void 0 === s ||
                            null === (l = s.options) ||
                            void 0 === l
                          ? void 0
                          : l.weekStartsOn) && void 0 !== u
                      ? u
                      : f.weekStartsOn) && void 0 !== i
                  ? i
                  : null === (m = f.locale) ||
                    void 0 === m ||
                    null === (h = m.options) ||
                    void 0 === h
                  ? void 0
                  : h.weekStartsOn) && void 0 !== o
              ? o
              : 0,
          );
        if (!(g >= 0 && g <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively",
          );
        var p = r(t),
          v = p.getUTCDay(),
          y = (v < g ? 7 : 0) + v - g;
        return p.setUTCDate(p.getUTCDate() - y), p.setUTCHours(0, 0, 0, 0), p;
      }
      function s(t, n) {
        var o, i, u, s, l, m, h, f;
        e(1, arguments);
        var g = r(t),
          p = g.getUTCFullYear(),
          v = d(),
          y = a(
            null !==
              (o =
                null !==
                  (i =
                    null !==
                      (u =
                        null !==
                          (s = null == n ? void 0 : n.firstWeekContainsDate) &&
                        void 0 !== s
                          ? s
                          : null == n ||
                            null === (l = n.locale) ||
                            void 0 === l ||
                            null === (m = l.options) ||
                            void 0 === m
                          ? void 0
                          : m.firstWeekContainsDate) && void 0 !== u
                      ? u
                      : v.firstWeekContainsDate) && void 0 !== i
                  ? i
                  : null === (h = v.locale) ||
                    void 0 === h ||
                    null === (f = h.options) ||
                    void 0 === f
                  ? void 0
                  : f.firstWeekContainsDate) && void 0 !== o
              ? o
              : 1,
          );
        if (!(y >= 1 && y <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively",
          );
        var b = new Date(0);
        b.setUTCFullYear(p + 1, 0, y), b.setUTCHours(0, 0, 0, 0);
        var w = c(b, n),
          C = new Date(0);
        C.setUTCFullYear(p, 0, y), C.setUTCHours(0, 0, 0, 0);
        var T = c(C, n);
        return g.getTime() >= w.getTime()
          ? p + 1
          : g.getTime() >= T.getTime()
          ? p
          : p - 1;
      }
      function l(t, e) {
        for (
          var n = t < 0 ? "-" : "", r = Math.abs(t).toString();
          r.length < e;

        )
          r = "0" + r;
        return n + r;
      }
      const m = function (t, e) {
          var n = t.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
          return l("yy" === e ? r % 100 : r, e.length);
        },
        h = function (t, e) {
          var n = t.getUTCMonth();
          return "M" === e ? String(n + 1) : l(n + 1, 2);
        },
        f = function (t, e) {
          return l(t.getUTCDate(), e.length);
        },
        g = function (t, e) {
          return l(t.getUTCHours() % 12 || 12, e.length);
        },
        p = function (t, e) {
          return l(t.getUTCHours(), e.length);
        },
        v = function (t, e) {
          return l(t.getUTCMinutes(), e.length);
        },
        y = function (t, e) {
          return l(t.getUTCSeconds(), e.length);
        },
        b = function (t, e) {
          var n = e.length,
            r = t.getUTCMilliseconds();
          return l(Math.floor(r * Math.pow(10, n - 3)), e.length);
        };
      var w = {
        G: function (t, e, n) {
          var r = t.getUTCFullYear() > 0 ? 1 : 0;
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return n.era(r, { width: "abbreviated" });
            case "GGGGG":
              return n.era(r, { width: "narrow" });
            default:
              return n.era(r, { width: "wide" });
          }
        },
        y: function (t, e, n) {
          if ("yo" === e) {
            var r = t.getUTCFullYear(),
              a = r > 0 ? r : 1 - r;
            return n.ordinalNumber(a, { unit: "year" });
          }
          return m(t, e);
        },
        Y: function (t, e, n, r) {
          var a = s(t, r),
            o = a > 0 ? a : 1 - a;
          return "YY" === e
            ? l(o % 100, 2)
            : "Yo" === e
            ? n.ordinalNumber(o, { unit: "year" })
            : l(o, e.length);
        },
        R: function (t, e) {
          return l(i(t), e.length);
        },
        u: function (t, e) {
          return l(t.getUTCFullYear(), e.length);
        },
        Q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "Q":
              return String(r);
            case "QQ":
              return l(r, 2);
            case "Qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "QQQ":
              return n.quarter(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "QQQQQ":
              return n.quarter(r, {
                width: "narrow",
                context: "formatting",
              });
            default:
              return n.quarter(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3);
          switch (e) {
            case "q":
              return String(r);
            case "qq":
              return l(r, 2);
            case "qo":
              return n.ordinalNumber(r, { unit: "quarter" });
            case "qqq":
              return n.quarter(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "qqqqq":
              return n.quarter(r, {
                width: "narrow",
                context: "standalone",
              });
            default:
              return n.quarter(r, {
                width: "wide",
                context: "standalone",
              });
          }
        },
        M: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "M":
            case "MM":
              return h(t, e);
            case "Mo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "MMM":
              return n.month(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "MMMMM":
              return n.month(r, {
                width: "narrow",
                context: "formatting",
              });
            default:
              return n.month(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        L: function (t, e, n) {
          var r = t.getUTCMonth();
          switch (e) {
            case "L":
              return String(r + 1);
            case "LL":
              return l(r + 1, 2);
            case "Lo":
              return n.ordinalNumber(r + 1, { unit: "month" });
            case "LLL":
              return n.month(r, {
                width: "abbreviated",
                context: "standalone",
              });
            case "LLLLL":
              return n.month(r, {
                width: "narrow",
                context: "standalone",
              });
            default:
              return n.month(r, {
                width: "wide",
                context: "standalone",
              });
          }
        },
        w: function (t, n, o, i) {
          var u = (function (t, n) {
            e(1, arguments);
            var o = r(t),
              i =
                c(o, n).getTime() -
                (function (t, n) {
                  var r, o, i, u, l, m, h, f;
                  e(1, arguments);
                  var g = d(),
                    p = a(
                      null !==
                        (r =
                          null !==
                            (o =
                              null !==
                                (i =
                                  null !==
                                    (u =
                                      null == n
                                        ? void 0
                                        : n.firstWeekContainsDate) &&
                                  void 0 !== u
                                    ? u
                                    : null == n ||
                                      null === (l = n.locale) ||
                                      void 0 === l ||
                                      null === (m = l.options) ||
                                      void 0 === m
                                    ? void 0
                                    : m.firstWeekContainsDate) && void 0 !== i
                                ? i
                                : g.firstWeekContainsDate) && void 0 !== o
                            ? o
                            : null === (h = g.locale) ||
                              void 0 === h ||
                              null === (f = h.options) ||
                              void 0 === f
                            ? void 0
                            : f.firstWeekContainsDate) && void 0 !== r
                        ? r
                        : 1,
                    ),
                    v = s(t, n),
                    y = new Date(0);
                  return (
                    y.setUTCFullYear(v, 0, p),
                    y.setUTCHours(0, 0, 0, 0),
                    c(y, n)
                  );
                })(o, n).getTime();
            return Math.round(i / 6048e5) + 1;
          })(t, i);
          return "wo" === n
            ? o.ordinalNumber(u, { unit: "week" })
            : l(u, n.length);
        },
        I: function (t, n, a) {
          var u = (function (t) {
            e(1, arguments);
            var n = r(t),
              a =
                o(n).getTime() -
                (function (t) {
                  e(1, arguments);
                  var n = i(t),
                    r = new Date(0);
                  return (
                    r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), o(r)
                  );
                })(n).getTime();
            return Math.round(a / 6048e5) + 1;
          })(t);
          return "Io" === n
            ? a.ordinalNumber(u, { unit: "week" })
            : l(u, n.length);
        },
        d: function (t, e, n) {
          return "do" === e
            ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
            : f(t, e);
        },
        D: function (t, n, a) {
          var o = (function (t) {
            e(1, arguments);
            var n = r(t),
              a = n.getTime();
            n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
            var o = a - n.getTime();
            return Math.floor(o / 864e5) + 1;
          })(t);
          return "Do" === n
            ? a.ordinalNumber(o, { unit: "dayOfYear" })
            : l(o, n.length);
        },
        E: function (t, e, n) {
          var r = t.getUTCDay();
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return n.day(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "EEEEE":
              return n.day(r, {
                width: "narrow",
                context: "formatting",
              });
            case "EEEEEE":
              return n.day(r, {
                width: "short",
                context: "formatting",
              });
            default:
              return n.day(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        e: function (t, e, n, r) {
          var a = t.getUTCDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "e":
              return String(o);
            case "ee":
              return l(o, 2);
            case "eo":
              return n.ordinalNumber(o, { unit: "day" });
            case "eee":
              return n.day(a, {
                width: "abbreviated",
                context: "formatting",
              });
            case "eeeee":
              return n.day(a, {
                width: "narrow",
                context: "formatting",
              });
            case "eeeeee":
              return n.day(a, {
                width: "short",
                context: "formatting",
              });
            default:
              return n.day(a, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        c: function (t, e, n, r) {
          var a = t.getUTCDay(),
            o = (a - r.weekStartsOn + 8) % 7 || 7;
          switch (e) {
            case "c":
              return String(o);
            case "cc":
              return l(o, e.length);
            case "co":
              return n.ordinalNumber(o, { unit: "day" });
            case "ccc":
              return n.day(a, {
                width: "abbreviated",
                context: "standalone",
              });
            case "ccccc":
              return n.day(a, {
                width: "narrow",
                context: "standalone",
              });
            case "cccccc":
              return n.day(a, {
                width: "short",
                context: "standalone",
              });
            default:
              return n.day(a, {
                width: "wide",
                context: "standalone",
              });
          }
        },
        i: function (t, e, n) {
          var r = t.getUTCDay(),
            a = 0 === r ? 7 : r;
          switch (e) {
            case "i":
              return String(a);
            case "ii":
              return l(a, e.length);
            case "io":
              return n.ordinalNumber(a, { unit: "day" });
            case "iii":
              return n.day(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "iiiii":
              return n.day(r, {
                width: "narrow",
                context: "formatting",
              });
            case "iiiiii":
              return n.day(r, {
                width: "short",
                context: "formatting",
              });
            default:
              return n.day(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        a: function (t, e, n) {
          var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
          switch (e) {
            case "a":
            case "aa":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "aaa":
              return n
                .dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                })
                .toLowerCase();
            case "aaaaa":
              return n.dayPeriod(r, {
                width: "narrow",
                context: "formatting",
              });
            default:
              return n.dayPeriod(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        b: function (t, e, n) {
          var r,
            a = t.getUTCHours();
          switch (
            ((r =
              12 === a
                ? "noon"
                : 0 === a
                ? "midnight"
                : a / 12 >= 1
                ? "pm"
                : "am"),
            e)
          ) {
            case "b":
            case "bb":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "bbb":
              return n
                .dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                })
                .toLowerCase();
            case "bbbbb":
              return n.dayPeriod(r, {
                width: "narrow",
                context: "formatting",
              });
            default:
              return n.dayPeriod(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        B: function (t, e, n) {
          var r,
            a = t.getUTCHours();
          switch (
            ((r =
              a >= 17
                ? "evening"
                : a >= 12
                ? "afternoon"
                : a >= 4
                ? "morning"
                : "night"),
            e)
          ) {
            case "B":
            case "BB":
            case "BBB":
              return n.dayPeriod(r, {
                width: "abbreviated",
                context: "formatting",
              });
            case "BBBBB":
              return n.dayPeriod(r, {
                width: "narrow",
                context: "formatting",
              });
            default:
              return n.dayPeriod(r, {
                width: "wide",
                context: "formatting",
              });
          }
        },
        h: function (t, e, n) {
          if ("ho" === e) {
            var r = t.getUTCHours() % 12;
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: "hour" });
          }
          return g(t, e);
        },
        H: function (t, e, n) {
          return "Ho" === e
            ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
            : p(t, e);
        },
        K: function (t, e, n) {
          var r = t.getUTCHours() % 12;
          return "Ko" === e
            ? n.ordinalNumber(r, { unit: "hour" })
            : l(r, e.length);
        },
        k: function (t, e, n) {
          var r = t.getUTCHours();
          return (
            0 === r && (r = 24),
            "ko" === e ? n.ordinalNumber(r, { unit: "hour" }) : l(r, e.length)
          );
        },
        m: function (t, e, n) {
          return "mo" === e
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
            : v(t, e);
        },
        s: function (t, e, n) {
          return "so" === e
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
            : y(t, e);
        },
        S: function (t, e) {
          return b(t, e);
        },
        X: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          if (0 === a) return "Z";
          switch (e) {
            case "X":
              return T(a);
            case "XXXX":
            case "XX":
              return x(a);
            default:
              return x(a, ":");
          }
        },
        x: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "x":
              return T(a);
            case "xxxx":
            case "xx":
              return x(a);
            default:
              return x(a, ":");
          }
        },
        O: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "O":
            case "OO":
            case "OOO":
              return "GMT" + C(a, ":");
            default:
              return "GMT" + x(a, ":");
          }
        },
        z: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset();
          switch (e) {
            case "z":
            case "zz":
            case "zzz":
              return "GMT" + C(a, ":");
            default:
              return "GMT" + x(a, ":");
          }
        },
        t: function (t, e, n, r) {
          var a = r._originalDate || t;
          return l(Math.floor(a.getTime() / 1e3), e.length);
        },
        T: function (t, e, n, r) {
          return l((r._originalDate || t).getTime(), e.length);
        },
      };
      function C(t, e) {
        var n = t > 0 ? "-" : "+",
          r = Math.abs(t),
          a = Math.floor(r / 60),
          o = r % 60;
        if (0 === o) return n + String(a);
        var i = e || "";
        return n + String(a) + i + l(o, 2);
      }
      function T(t, e) {
        return t % 60 == 0
          ? (t > 0 ? "-" : "+") + l(Math.abs(t) / 60, 2)
          : x(t, e);
      }
      function x(t, e) {
        var n = e || "",
          r = t > 0 ? "-" : "+",
          a = Math.abs(t);
        return r + l(Math.floor(a / 60), 2) + n + l(a % 60, 2);
      }
      const k = w;
      var M = function (t, e) {
          switch (t) {
            case "P":
              return e.date({ width: "short" });
            case "PP":
              return e.date({ width: "medium" });
            case "PPP":
              return e.date({ width: "long" });
            default:
              return e.date({ width: "full" });
          }
        },
        S = function (t, e) {
          switch (t) {
            case "p":
              return e.time({ width: "short" });
            case "pp":
              return e.time({ width: "medium" });
            case "ppp":
              return e.time({ width: "long" });
            default:
              return e.time({ width: "full" });
          }
        };
      const E = {
        p: S,
        P: function (t, e) {
          var n,
            r = t.match(/(P+)(p+)?/) || [],
            a = r[1],
            o = r[2];
          if (!o) return M(t, e);
          switch (a) {
            case "P":
              n = e.dateTime({ width: "short" });
              break;
            case "PP":
              n = e.dateTime({ width: "medium" });
              break;
            case "PPP":
              n = e.dateTime({ width: "long" });
              break;
            default:
              n = e.dateTime({ width: "full" });
          }
          return n.replace("{{date}}", M(a, e)).replace("{{time}}", S(o, e));
        },
      };
      var D = ["D", "DD"],
        P = ["YY", "YYYY"];
      function U(t, e, n) {
        if ("YYYY" === t)
          throw new RangeError(
            "Use `yyyy` instead of `YYYY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
        if ("YY" === t)
          throw new RangeError(
            "Use `yy` instead of `YY` (in `"
              .concat(e, "`) for formatting years to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
        if ("D" === t)
          throw new RangeError(
            "Use `d` instead of `D` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
        if ("DD" === t)
          throw new RangeError(
            "Use `dd` instead of `DD` (in `"
              .concat(e, "`) for formatting days of the month to the input `")
              .concat(
                n,
                "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
              ),
          );
      }
      var j = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: {
          one: "about 1 hour",
          other: "about {{count}} hours",
        },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: {
          one: "about 1 week",
          other: "about {{count}} weeks",
        },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: {
          one: "about 1 month",
          other: "about {{count}} months",
        },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: {
          one: "about 1 year",
          other: "about {{count}} years",
        },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: {
          one: "over 1 year",
          other: "over {{count}} years",
        },
        almostXYears: {
          one: "almost 1 year",
          other: "almost {{count}} years",
        },
      };
      function W(t) {
        return function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.width ? String(e.width) : t.defaultWidth;
          return t.formats[n] || t.formats[t.defaultWidth];
        };
      }
      const q = {
        date: W({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: W({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: W({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var N = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function Y(t) {
        return function (e, n) {
          var r;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            t.formattingValues
          ) {
            var a = t.defaultFormattingWidth || t.defaultWidth,
              o = null != n && n.width ? String(n.width) : a;
            r = t.formattingValues[o] || t.formattingValues[a];
          } else {
            var i = t.defaultWidth,
              u = null != n && n.width ? String(n.width) : t.defaultWidth;
            r = t.values[u] || t.values[i];
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e];
        };
      }
      const L = {
        ordinalNumber: function (t, e) {
          var n = Number(t),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: Y({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: Y({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (t) {
            return t - 1;
          },
        }),
        month: Y({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: Y({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: Y({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function O(t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            a =
              (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
            o = e.match(a);
          if (!o) return null;
          var i,
            u = o[0],
            d =
              (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
            c = Array.isArray(d)
              ? (function (t, e) {
                  for (var n = 0; n < t.length; n++) if (t[n].test(u)) return n;
                })(d)
              : (function (t, e) {
                  for (var n in t)
                    if (t.hasOwnProperty(n) && t[n].test(u)) return n;
                })(d);
          return (
            (i = t.valueCallback ? t.valueCallback(c) : c),
            {
              value: (i = n.valueCallback ? n.valueCallback(i) : i),
              rest: e.slice(u.length),
            }
          );
        };
      }
      var B,
        H = {
          ordinalNumber:
            ((B = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (t) {
                return parseInt(t, 10);
              },
            }),
            function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = t.match(B.matchPattern);
              if (!n) return null;
              var r = n[0],
                a = t.match(B.parsePattern);
              if (!a) return null;
              var o = B.valueCallback ? B.valueCallback(a[0]) : a[0];
              return {
                value: (o = e.valueCallback ? e.valueCallback(o) : o),
                rest: t.slice(r.length),
              };
            }),
          era: O({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: O({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (t) {
              return t + 1;
            },
          }),
          month: O({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: O({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: O({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      const A = {
        code: "en-US",
        formatDistance: function (t, e, n) {
          var r,
            a = j[t];
          return (
            (r =
              "string" == typeof a
                ? a
                : 1 === e
                ? a.one
                : a.other.replace("{{count}}", e.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: q,
        formatRelative: function (t, e, n, r) {
          return N[t];
        },
        localize: L,
        match: H,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var F = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        I = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        z = /^'([^]*?)'?$/,
        Q = /''/g,
        G = /[a-zA-Z]/;
      function R(n, o, i) {
        var u, c, s, l, m, h, f, g, p, v, y, b, w, C, T, x, M, S;
        e(2, arguments);
        var j = String(o),
          W = d(),
          q =
            null !==
              (u =
                null !== (c = null == i ? void 0 : i.locale) && void 0 !== c
                  ? c
                  : W.locale) && void 0 !== u
              ? u
              : A,
          N = a(
            null !==
              (s =
                null !==
                  (l =
                    null !==
                      (m =
                        null !==
                          (h = null == i ? void 0 : i.firstWeekContainsDate) &&
                        void 0 !== h
                          ? h
                          : null == i ||
                            null === (f = i.locale) ||
                            void 0 === f ||
                            null === (g = f.options) ||
                            void 0 === g
                          ? void 0
                          : g.firstWeekContainsDate) && void 0 !== m
                      ? m
                      : W.firstWeekContainsDate) && void 0 !== l
                  ? l
                  : null === (p = W.locale) ||
                    void 0 === p ||
                    null === (v = p.options) ||
                    void 0 === v
                  ? void 0
                  : v.firstWeekContainsDate) && void 0 !== s
              ? s
              : 1,
          );
        if (!(N >= 1 && N <= 7))
          throw new RangeError(
            "firstWeekContainsDate must be between 1 and 7 inclusively",
          );
        var Y = a(
          null !==
            (y =
              null !==
                (b =
                  null !==
                    (w =
                      null !== (C = null == i ? void 0 : i.weekStartsOn) &&
                      void 0 !== C
                        ? C
                        : null == i ||
                          null === (T = i.locale) ||
                          void 0 === T ||
                          null === (x = T.options) ||
                          void 0 === x
                        ? void 0
                        : x.weekStartsOn) && void 0 !== w
                    ? w
                    : W.weekStartsOn) && void 0 !== b
                ? b
                : null === (M = W.locale) ||
                  void 0 === M ||
                  null === (S = M.options) ||
                  void 0 === S
                ? void 0
                : S.weekStartsOn) && void 0 !== y
            ? y
            : 0,
        );
        if (!(Y >= 0 && Y <= 6))
          throw new RangeError(
            "weekStartsOn must be between 0 and 6 inclusively",
          );
        if (!q.localize)
          throw new RangeError("locale must contain localize property");
        if (!q.formatLong)
          throw new RangeError("locale must contain formatLong property");
        var L = r(n);
        if (
          !(function (n) {
            if (
              (e(1, arguments),
              !(function (n) {
                return (
                  e(1, arguments),
                  n instanceof Date ||
                    ("object" === t(n) &&
                      "[object Date]" === Object.prototype.toString.call(n))
                );
              })(n) && "number" != typeof n)
            )
              return !1;
            var a = r(n);
            return !isNaN(Number(a));
          })(L)
        )
          throw new RangeError("Invalid time value");
        var O = (function (t) {
            var e = new Date(
              Date.UTC(
                t.getFullYear(),
                t.getMonth(),
                t.getDate(),
                t.getHours(),
                t.getMinutes(),
                t.getSeconds(),
                t.getMilliseconds(),
              ),
            );
            return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
          })(L),
          B = (function (t, n) {
            return (
              e(2, arguments),
              (function (t, n) {
                e(2, arguments);
                var o = r(t).getTime(),
                  i = a(n);
                return new Date(o + i);
              })(t, -a(n))
            );
          })(L, O),
          H = {
            firstWeekContainsDate: N,
            weekStartsOn: Y,
            locale: q,
            _originalDate: L,
          };
        return j
          .match(I)
          .map(function (t) {
            var e = t[0];
            return "p" === e || "P" === e ? (0, E[e])(t, q.formatLong) : t;
          })
          .join("")
          .match(F)
          .map(function (t) {
            if ("''" === t) return "'";
            var e,
              r,
              a = t[0];
            if ("'" === a)
              return (r = (e = t).match(z)) ? r[1].replace(Q, "'") : e;
            var u,
              d = k[a];
            if (d)
              return (
                (null != i && i.useAdditionalWeekYearTokens) ||
                  ((u = t), -1 === P.indexOf(u)) ||
                  U(t, o, String(n)),
                (null != i && i.useAdditionalDayOfYearTokens) ||
                  !(function (t) {
                    return -1 !== D.indexOf(t);
                  })(t) ||
                  U(t, o, String(n)),
                d(B, t, q.localize, H)
              );
            if (a.match(G))
              throw new RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  a +
                  "`",
              );
            return t;
          })
          .join("");
      }
      const X = n.p + "6ab02702144b12ab122f.png";
      var J = n(379),
        Z = n.n(J),
        _ = n(795),
        $ = n.n(_),
        V = n(569),
        K = n.n(V),
        tt = n(565),
        et = n.n(tt),
        nt = n(216),
        rt = n.n(nt),
        at = n(589),
        ot = n.n(at),
        it = n(295),
        ut = {};
      function dt() {
        const t = document.createElement("div");
        (t.id = "header"), document.body.appendChild(t);
        const e = document.createElement("img");
        (e.id = "img"), (e.src = X), t.appendChild(e);
        const n = document.createElement("h2");
        (n.id = "text"), (n.textContent = "To-Do List"), t.appendChild(n);
        const r = document.createElement("div");
        (r.id = "center"), document.body.appendChild(r);
        const a = document.createElement("div");
        (a.id = "sidebar"), r.appendChild(a);
        const o = document.createElement("div");
        (o.id = "projects"), a.appendChild(o);
        const i = document.createElement("h2");
        (i.id = "projectText"), (i.textContent = "Projects"), o.appendChild(i);
        const u = document.createElement("div");
        (u.id = "projectList"), o.appendChild(u);
        const d = document.createElement("button");
        (d.textContent = "+ Add Project"),
          (d.id = "addProject"),
          o.appendChild(d);
        const c = document.createElement("div");
        (c.id = "tasks"), r.append(c);
        const s = document.createElement("h2");
        (s.id = "tasksText"), (s.textContent = "Inbox"), c.appendChild(s);
        const l = document.createElement("div");
        (l.id = "task"), c.appendChild(l);
        const m = document.createElement("button");
        (m.id = "addTask"), (m.textContent = "+ Add Task"), c.appendChild(m);
      }
      (ut.styleTagTransform = ot()),
        (ut.setAttributes = et()),
        (ut.insert = K().bind(null, "head")),
        (ut.domAPI = $()),
        (ut.insertStyleElement = rt()),
        Z()(it.Z, ut),
        it.Z && it.Z.locals && it.Z.locals;
      var ct = n(807),
        st = {};
      (st.styleTagTransform = ot()),
        (st.setAttributes = et()),
        (st.insert = K().bind(null, "head")),
        (st.domAPI = $()),
        (st.insertStyleElement = rt()),
        Z()(ct.Z, st),
        ct.Z && ct.Z.locals && ct.Z.locals;
      var lt,
        mt,
        ht,
        ft = [],
        gt = 0;
      const pt = localStorage.getItem("newProject");
      class vt {
        items = [];
        constructor(t) {
          this.name = t;
        }
      }
      class yt {
        constructor(t, e, n, r) {
          (this.title = t),
            (this.date = e),
            (this.priority = n),
            (this.complete = r);
        }
      }
      function bt(t) {
        (gt = t), console.log(gt), Tt(t);
      }
      function wt() {
        document.querySelector("#projectList").innerHTML = "";
        const t = document.querySelector("#projectList");
        for (let e = 0; e < ft.length; e++) {
          const n = document.createElement("button");
          (n.className = "projectButton"),
            (n.dataset.key = e),
            (n.textContent = ft[e].name),
            t.appendChild(n);
        }
        document.querySelectorAll(".projectButton").forEach((t) => {
          t.addEventListener("click", () => {
            bt(t.dataset.key);
          });
        });
      }
      function Ct() {
        localStorage.setItem("newProject", JSON.stringify(ft));
      }
      function Tt(t) {
        document.querySelector("#task").innerHTML = "";
        for (let e = 0; e < ft[t].items.length; ++e) {
          const n = document.createElement("div");
          n.id = "task" + e;
          const r = document.createElement("button");
          (r.className = "delete"),
            (r.dataset.key = e),
            (r.textContent = "Delete");
          const a = document.createElement("h2");
          (a.id = "title" + e), (a.textContent = ft[t].items[e].title);
          const o = document.createElement("p");
          (o.id = "date" + e),
            (o.textContent = R(
              new Date(
                ft[t].items[e].date[0],
                ft[t].items[e].date[1],
                ft[t].items[e].date[2],
              ),
              "MM/dd/yyyy",
            ));
          const i = document.createElement("button");
          (i.dataset.key = e),
            (i.className = "priority"),
            (i.textContent = ft[t].items[e].priority),
            "Low" == i.textContent
              ? (i.style.backgroundColor = "lightgreen")
              : "Medium" == i.textContent
              ? (i.style.backgroundColor = "gold")
              : "High" == i.textContent && (i.style.backgroundColor = "red");
          const u = document.createElement("button");
          (u.className = "complete"),
            (u.dataset.key = e),
            1 == ft[t].items[e].complete
              ? (u.textContent = "Done")
              : (u.textContent = "Not Done");
          const d = document.createElement("div");
          d.id = "left" + e;
          const c = document.createElement("div");
          (c.id = "right" + e),
            d.appendChild(a),
            c.appendChild(o),
            c.appendChild(i),
            c.appendChild(u),
            c.appendChild(r),
            n.appendChild(d),
            n.appendChild(c),
            document.querySelector("#task").appendChild(n),
            (lt = document.querySelectorAll(".complete")),
            (ht = document.querySelectorAll(".delete")),
            (mt = document.querySelectorAll(".priority"));
        }
        lt.forEach((t) => {
          "Done" == t.textContent
            ? (t.style.backgroundColor = "lightgreen")
            : (t.style.backgroundColor = "salmon"),
            t.addEventListener("click", () => {
              !(function (t) {
                1 == ft[gt].items[t].complete
                  ? (ft[gt].items[t].complete = !1)
                  : (ft[gt].items[t].complete = !0),
                  Tt(gt);
              })(t.dataset.key);
            });
        }),
          ht.forEach((t) => {
            t.addEventListener("click", () => {
              !(function (t) {
                ft[gt].items.splice(t, 1), Tt(gt);
              })(t.dataset.key);
            });
          }),
          mt.forEach((t) => {
            t.addEventListener("click", () => {
              !(function (t) {
                "Low" == ft[gt].items[t].priority
                  ? (ft[gt].items[t].priority = "Medium")
                  : "Medium" == ft[gt].items[t].priority
                  ? (ft[gt].items[t].priority = "High")
                  : (ft[gt].items[t].priority = "Low"),
                  Tt(gt);
              })(t.dataset.key);
            });
          });
      }
      null !== pt
        ? (function () {
            const t = JSON.parse(pt);
            (ft = t), dt(), wt(), bt(0);
          })()
        : ((function () {
            var t = new vt("Henry's Project");
            ft.push(t);
            var e = new yt("Visit Korea", [2023, 1, 11], "High", !1);
            t.items.push(e), Ct();
          })(),
          dt(),
          wt(),
          bt(0)),
        document.querySelector("#addTask").addEventListener("click", () => {
          document.querySelector("#addT").showModal();
        }),
        document
          .querySelector("#addTaskButton")
          .addEventListener("click", () => {
            const t = document.getElementById("title"),
              e = document.getElementById("year"),
              n = document.getElementById("day"),
              r = document.getElementById("month");
            "" != t.value &&
              "" != e.value &&
              "" != n.value &&
              "" != r.value &&
              4 == e.value.toString().length &&
              2 == n.value.toString().length &&
              2 == r.value.toString().length &&
              (function () {
                var t = document.querySelector("#title").value,
                  e = [
                    document.getElementById("year").value,
                    document.getElementById("day").value,
                    document.getElementById("month").value,
                  ],
                  n = document.querySelector("#priority").value;
                const r = new yt(t, e, n, !1);
                ft[gt].items.push(r), Ct(), Tt(gt);
              })();
          }),
        document.querySelector("#addProject").addEventListener("click", () => {
          document.querySelector("#addP").showModal();
        }),
        document
          .querySelector("#addNewProjectButton")
          .addEventListener("click", () => {
            "" != document.getElementById("project").value &&
              (function () {
                var t = document.querySelector("#project").value;
                const e = new vt(t);
                ft.push(e), Ct(), wt();
              })();
          }),
        document
          .getElementById("cancelTaskButton")
          .addEventListener("click", () => {
            document.querySelector("#addT").close();
          }),
        document
          .getElementById("cancelProjectButton")
          .addEventListener("click", () => {
            document.querySelector("#addP").close();
          });
    })();
})();
