function ij(e, t) {
  for (var r = 0; r < t.length; r++) {
    const a = t[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a)
        if (u !== "default" && !(u in e)) {
          const o = Object.getOwnPropertyDescriptor(a, u);
          o &&
            Object.defineProperty(
              e,
              u,
              o.get ? o : { enumerable: !0, get: () => a[u] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const o of u)
      if (o.type === "childList")
        for (const f of o.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && a(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(u) {
    const o = {};
    return (
      u.integrity && (o.integrity = u.integrity),
      u.referrerPolicy && (o.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const o = r(u);
    fetch(u.href, o);
  }
})();
function Zn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sv = { exports: {} },
  uu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var P1;
function lj() {
  if (P1) return uu;
  P1 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(a, u, o) {
    var f = null;
    if (
      (o !== void 0 && (f = "" + o),
      u.key !== void 0 && (f = "" + u.key),
      "key" in u)
    ) {
      o = {};
      for (var s in u) s !== "key" && (o[s] = u[s]);
    } else o = u;
    return (
      (u = o.ref),
      { $$typeof: e, type: a, key: f, ref: u !== void 0 ? u : null, props: o }
    );
  }
  return ((uu.Fragment = t), (uu.jsx = r), (uu.jsxs = r), uu);
}
var N1;
function uj() {
  return (N1 || ((N1 = 1), (Sv.exports = lj())), Sv.exports);
}
var xe = uj(),
  Ov = { exports: {} },
  Se = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z1;
function oj() {
  if (z1) return Se;
  z1 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    s = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    m = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    g = Symbol.iterator;
  function b(D) {
    return D === null || typeof D != "object"
      ? null
      : ((D = (g && D[g]) || D["@@iterator"]),
        typeof D == "function" ? D : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    w = {};
  function _(D, L, te) {
    ((this.props = D),
      (this.context = L),
      (this.refs = w),
      (this.updater = te || O));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (D, L) {
      if (typeof D != "object" && typeof D != "function" && D != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, D, L, "setState");
    }),
    (_.prototype.forceUpdate = function (D) {
      this.updater.enqueueForceUpdate(this, D, "forceUpdate");
    }));
  function M() {}
  M.prototype = _.prototype;
  function T(D, L, te) {
    ((this.props = D),
      (this.context = L),
      (this.refs = w),
      (this.updater = te || O));
  }
  var N = (T.prototype = new M());
  ((N.constructor = T), S(N, _.prototype), (N.isPureReactComponent = !0));
  var z = Array.isArray;
  function R() {}
  var B = { H: null, A: null, T: null, S: null },
    X = Object.prototype.hasOwnProperty;
  function le(D, L, te) {
    var ie = te.ref;
    return {
      $$typeof: e,
      type: D,
      key: L,
      ref: ie !== void 0 ? ie : null,
      props: te,
    };
  }
  function ae(D, L) {
    return le(D.type, L, D.props);
  }
  function V(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function ne(D) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      D.replace(/[=:]/g, function (te) {
        return L[te];
      })
    );
  }
  var se = /\/+/g;
  function F(D, L) {
    return typeof D == "object" && D !== null && D.key != null
      ? ne("" + D.key)
      : L.toString(36);
  }
  function W(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (
          (typeof D.status == "string"
            ? D.then(R, R)
            : ((D.status = "pending"),
              D.then(
                function (L) {
                  D.status === "pending" &&
                    ((D.status = "fulfilled"), (D.value = L));
                },
                function (L) {
                  D.status === "pending" &&
                    ((D.status = "rejected"), (D.reason = L));
                },
              )),
          D.status)
        ) {
          case "fulfilled":
            return D.value;
          case "rejected":
            throw D.reason;
        }
    }
    throw D;
  }
  function C(D, L, te, ie, oe) {
    var ge = typeof D;
    (ge === "undefined" || ge === "boolean") && (D = null);
    var we = !1;
    if (D === null) we = !0;
    else
      switch (ge) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case e:
            case t:
              we = !0;
              break;
            case m:
              return ((we = D._init), C(we(D._payload), L, te, ie, oe));
          }
      }
    if (we)
      return (
        (oe = oe(D)),
        (we = ie === "" ? "." + F(D, 0) : ie),
        z(oe)
          ? ((te = ""),
            we != null && (te = we.replace(se, "$&/") + "/"),
            C(oe, L, te, "", function (he) {
              return he;
            }))
          : oe != null &&
            (V(oe) &&
              (oe = ae(
                oe,
                te +
                  (oe.key == null || (D && D.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(se, "$&/") + "/") +
                  we,
              )),
            L.push(oe)),
        1
      );
    we = 0;
    var Je = ie === "" ? "." : ie + ":";
    if (z(D))
      for (var re = 0; re < D.length; re++)
        ((ie = D[re]), (ge = Je + F(ie, re)), (we += C(ie, L, te, ge, oe)));
    else if (((re = b(D)), typeof re == "function"))
      for (D = re.call(D), re = 0; !(ie = D.next()).done; )
        ((ie = ie.value),
          (ge = Je + F(ie, re++)),
          (we += C(ie, L, te, ge, oe)));
    else if (ge === "object") {
      if (typeof D.then == "function") return C(W(D), L, te, ie, oe);
      throw (
        (L = String(D)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(D).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return we;
  }
  function U(D, L, te) {
    if (D == null) return D;
    var ie = [],
      oe = 0;
    return (
      C(D, ie, "", "", function (ge) {
        return L.call(te, ge, oe++);
      }),
      ie
    );
  }
  function I(D) {
    if (D._status === -1) {
      var L = D._result;
      ((L = L()),
        L.then(
          function (te) {
            (D._status === 0 || D._status === -1) &&
              ((D._status = 1), (D._result = te));
          },
          function (te) {
            (D._status === 0 || D._status === -1) &&
              ((D._status = 2), (D._result = te));
          },
        ),
        D._status === -1 && ((D._status = 0), (D._result = L)));
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ee =
      typeof reportError == "function"
        ? reportError
        : function (D) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var L = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof D == "object" &&
                  D !== null &&
                  typeof D.message == "string"
                    ? String(D.message)
                    : String(D),
                error: D,
              });
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", D);
              return;
            }
            console.error(D);
          },
    ue = {
      map: U,
      forEach: function (D, L, te) {
        U(
          D,
          function () {
            L.apply(this, arguments);
          },
          te,
        );
      },
      count: function (D) {
        var L = 0;
        return (
          U(D, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (D) {
        return (
          U(D, function (L) {
            return L;
          }) || []
        );
      },
      only: function (D) {
        if (!V(D))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return D;
      },
    };
  return (
    (Se.Activity = p),
    (Se.Children = ue),
    (Se.Component = _),
    (Se.Fragment = r),
    (Se.Profiler = u),
    (Se.PureComponent = T),
    (Se.StrictMode = a),
    (Se.Suspense = v),
    (Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (Se.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (D) {
        return B.H.useMemoCache(D);
      },
    }),
    (Se.cache = function (D) {
      return function () {
        return D.apply(null, arguments);
      };
    }),
    (Se.cacheSignal = function () {
      return null;
    }),
    (Se.cloneElement = function (D, L, te) {
      if (D == null)
        throw Error(
          "The argument must be a React element, but you passed " + D + ".",
        );
      var ie = S({}, D.props),
        oe = D.key;
      if (L != null)
        for (ge in (L.key !== void 0 && (oe = "" + L.key), L))
          !X.call(L, ge) ||
            ge === "key" ||
            ge === "__self" ||
            ge === "__source" ||
            (ge === "ref" && L.ref === void 0) ||
            (ie[ge] = L[ge]);
      var ge = arguments.length - 2;
      if (ge === 1) ie.children = te;
      else if (1 < ge) {
        for (var we = Array(ge), Je = 0; Je < ge; Je++)
          we[Je] = arguments[Je + 2];
        ie.children = we;
      }
      return le(D.type, oe, ie);
    }),
    (Se.createContext = function (D) {
      return (
        (D = {
          $$typeof: f,
          _currentValue: D,
          _currentValue2: D,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (D.Provider = D),
        (D.Consumer = { $$typeof: o, _context: D }),
        D
      );
    }),
    (Se.createElement = function (D, L, te) {
      var ie,
        oe = {},
        ge = null;
      if (L != null)
        for (ie in (L.key !== void 0 && (ge = "" + L.key), L))
          X.call(L, ie) &&
            ie !== "key" &&
            ie !== "__self" &&
            ie !== "__source" &&
            (oe[ie] = L[ie]);
      var we = arguments.length - 2;
      if (we === 1) oe.children = te;
      else if (1 < we) {
        for (var Je = Array(we), re = 0; re < we; re++)
          Je[re] = arguments[re + 2];
        oe.children = Je;
      }
      if (D && D.defaultProps)
        for (ie in ((we = D.defaultProps), we))
          oe[ie] === void 0 && (oe[ie] = we[ie]);
      return le(D, ge, oe);
    }),
    (Se.createRef = function () {
      return { current: null };
    }),
    (Se.forwardRef = function (D) {
      return { $$typeof: s, render: D };
    }),
    (Se.isValidElement = V),
    (Se.lazy = function (D) {
      return { $$typeof: m, _payload: { _status: -1, _result: D }, _init: I };
    }),
    (Se.memo = function (D, L) {
      return { $$typeof: h, type: D, compare: L === void 0 ? null : L };
    }),
    (Se.startTransition = function (D) {
      var L = B.T,
        te = {};
      B.T = te;
      try {
        var ie = D(),
          oe = B.S;
        (oe !== null && oe(te, ie),
          typeof ie == "object" &&
            ie !== null &&
            typeof ie.then == "function" &&
            ie.then(R, ee));
      } catch (ge) {
        ee(ge);
      } finally {
        (L !== null && te.types !== null && (L.types = te.types), (B.T = L));
      }
    }),
    (Se.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (Se.use = function (D) {
      return B.H.use(D);
    }),
    (Se.useActionState = function (D, L, te) {
      return B.H.useActionState(D, L, te);
    }),
    (Se.useCallback = function (D, L) {
      return B.H.useCallback(D, L);
    }),
    (Se.useContext = function (D) {
      return B.H.useContext(D);
    }),
    (Se.useDebugValue = function () {}),
    (Se.useDeferredValue = function (D, L) {
      return B.H.useDeferredValue(D, L);
    }),
    (Se.useEffect = function (D, L) {
      return B.H.useEffect(D, L);
    }),
    (Se.useEffectEvent = function (D) {
      return B.H.useEffectEvent(D);
    }),
    (Se.useId = function () {
      return B.H.useId();
    }),
    (Se.useImperativeHandle = function (D, L, te) {
      return B.H.useImperativeHandle(D, L, te);
    }),
    (Se.useInsertionEffect = function (D, L) {
      return B.H.useInsertionEffect(D, L);
    }),
    (Se.useLayoutEffect = function (D, L) {
      return B.H.useLayoutEffect(D, L);
    }),
    (Se.useMemo = function (D, L) {
      return B.H.useMemo(D, L);
    }),
    (Se.useOptimistic = function (D, L) {
      return B.H.useOptimistic(D, L);
    }),
    (Se.useReducer = function (D, L, te) {
      return B.H.useReducer(D, L, te);
    }),
    (Se.useRef = function (D) {
      return B.H.useRef(D);
    }),
    (Se.useState = function (D) {
      return B.H.useState(D);
    }),
    (Se.useSyncExternalStore = function (D, L, te) {
      return B.H.useSyncExternalStore(D, L, te);
    }),
    (Se.useTransition = function () {
      return B.H.useTransition();
    }),
    (Se.version = "19.2.0"),
    Se
  );
}
var R1;
function ll() {
  return (R1 || ((R1 = 1), (Ov.exports = oj())), Ov.exports);
}
var A = ll();
const IA = Zn(A),
  cj = ij({ __proto__: null, default: IA }, [A]);
var Av = { exports: {} },
  ou = {},
  wv = { exports: {} },
  Ev = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k1;
function fj() {
  return (
    k1 ||
      ((k1 = 1),
      (function (e) {
        function t(C, U) {
          var I = C.length;
          C.push(U);
          e: for (; 0 < I; ) {
            var ee = (I - 1) >>> 1,
              ue = C[ee];
            if (0 < u(ue, U)) ((C[ee] = U), (C[I] = ue), (I = ee));
            else break e;
          }
        }
        function r(C) {
          return C.length === 0 ? null : C[0];
        }
        function a(C) {
          if (C.length === 0) return null;
          var U = C[0],
            I = C.pop();
          if (I !== U) {
            C[0] = I;
            e: for (var ee = 0, ue = C.length, D = ue >>> 1; ee < D; ) {
              var L = 2 * (ee + 1) - 1,
                te = C[L],
                ie = L + 1,
                oe = C[ie];
              if (0 > u(te, I))
                ie < ue && 0 > u(oe, te)
                  ? ((C[ee] = oe), (C[ie] = I), (ee = ie))
                  : ((C[ee] = te), (C[L] = I), (ee = L));
              else if (ie < ue && 0 > u(oe, I))
                ((C[ee] = oe), (C[ie] = I), (ee = ie));
              else break e;
            }
          }
          return U;
        }
        function u(C, U) {
          var I = C.sortIndex - U.sortIndex;
          return I !== 0 ? I : C.id - U.id;
        }
        if (
          ((e.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var o = performance;
          e.unstable_now = function () {
            return o.now();
          };
        } else {
          var f = Date,
            s = f.now();
          e.unstable_now = function () {
            return f.now() - s;
          };
        }
        var v = [],
          h = [],
          m = 1,
          p = null,
          g = 3,
          b = !1,
          O = !1,
          S = !1,
          w = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          T = typeof setImmediate < "u" ? setImmediate : null;
        function N(C) {
          for (var U = r(h); U !== null; ) {
            if (U.callback === null) a(h);
            else if (U.startTime <= C)
              (a(h), (U.sortIndex = U.expirationTime), t(v, U));
            else break;
            U = r(h);
          }
        }
        function z(C) {
          if (((S = !1), N(C), !O))
            if (r(v) !== null) ((O = !0), R || ((R = !0), ne()));
            else {
              var U = r(h);
              U !== null && W(z, U.startTime - C);
            }
        }
        var R = !1,
          B = -1,
          X = 5,
          le = -1;
        function ae() {
          return w ? !0 : !(e.unstable_now() - le < X);
        }
        function V() {
          if (((w = !1), R)) {
            var C = e.unstable_now();
            le = C;
            var U = !0;
            try {
              e: {
                ((O = !1), S && ((S = !1), M(B), (B = -1)), (b = !0));
                var I = g;
                try {
                  t: {
                    for (
                      N(C), p = r(v);
                      p !== null && !(p.expirationTime > C && ae());
                    ) {
                      var ee = p.callback;
                      if (typeof ee == "function") {
                        ((p.callback = null), (g = p.priorityLevel));
                        var ue = ee(p.expirationTime <= C);
                        if (((C = e.unstable_now()), typeof ue == "function")) {
                          ((p.callback = ue), N(C), (U = !0));
                          break t;
                        }
                        (p === r(v) && a(v), N(C));
                      } else a(v);
                      p = r(v);
                    }
                    if (p !== null) U = !0;
                    else {
                      var D = r(h);
                      (D !== null && W(z, D.startTime - C), (U = !1));
                    }
                  }
                  break e;
                } finally {
                  ((p = null), (g = I), (b = !1));
                }
                U = void 0;
              }
            } finally {
              U ? ne() : (R = !1);
            }
          }
        }
        var ne;
        if (typeof T == "function")
          ne = function () {
            T(V);
          };
        else if (typeof MessageChannel < "u") {
          var se = new MessageChannel(),
            F = se.port2;
          ((se.port1.onmessage = V),
            (ne = function () {
              F.postMessage(null);
            }));
        } else
          ne = function () {
            _(V, 0);
          };
        function W(C, U) {
          B = _(function () {
            C(e.unstable_now());
          }, U);
        }
        ((e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (C) {
            C.callback = null;
          }),
          (e.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (X = 0 < C ? Math.floor(1e3 / C) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return g;
          }),
          (e.unstable_next = function (C) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = g;
            }
            var I = g;
            g = U;
            try {
              return C();
            } finally {
              g = I;
            }
          }),
          (e.unstable_requestPaint = function () {
            w = !0;
          }),
          (e.unstable_runWithPriority = function (C, U) {
            switch (C) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                C = 3;
            }
            var I = g;
            g = C;
            try {
              return U();
            } finally {
              g = I;
            }
          }),
          (e.unstable_scheduleCallback = function (C, U, I) {
            var ee = e.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? ee + I : ee))
                : (I = ee),
              C)
            ) {
              case 1:
                var ue = -1;
                break;
              case 2:
                ue = 250;
                break;
              case 5:
                ue = 1073741823;
                break;
              case 4:
                ue = 1e4;
                break;
              default:
                ue = 5e3;
            }
            return (
              (ue = I + ue),
              (C = {
                id: m++,
                callback: U,
                priorityLevel: C,
                startTime: I,
                expirationTime: ue,
                sortIndex: -1,
              }),
              I > ee
                ? ((C.sortIndex = I),
                  t(h, C),
                  r(v) === null &&
                    C === r(h) &&
                    (S ? (M(B), (B = -1)) : (S = !0), W(z, I - ee)))
                : ((C.sortIndex = ue),
                  t(v, C),
                  O || b || ((O = !0), R || ((R = !0), ne()))),
              C
            );
          }),
          (e.unstable_shouldYield = ae),
          (e.unstable_wrapCallback = function (C) {
            var U = g;
            return function () {
              var I = g;
              g = U;
              try {
                return C.apply(this, arguments);
              } finally {
                g = I;
              }
            };
          }));
      })(Ev)),
    Ev
  );
}
var L1;
function sj() {
  return (L1 || ((L1 = 1), (wv.exports = fj())), wv.exports);
}
var _v = { exports: {} },
  kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B1;
function dj() {
  if (B1) return kt;
  B1 = 1;
  var e = ll();
  function t(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var m = 2; m < arguments.length; m++)
        h += "&args[]=" + encodeURIComponent(arguments[m]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var a = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function o(v, h, m) {
    var p =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: p == null ? null : "" + p,
      children: v,
      containerInfo: h,
      implementation: m,
    };
  }
  var f = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function s(v, h) {
    if (v === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
    (kt.createPortal = function (v, h) {
      var m =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(t(299));
      return o(v, h, null, m);
    }),
    (kt.flushSync = function (v) {
      var h = f.T,
        m = a.p;
      try {
        if (((f.T = null), (a.p = 2), v)) return v();
      } finally {
        ((f.T = h), (a.p = m), a.d.f());
      }
    }),
    (kt.preconnect = function (v, h) {
      typeof v == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        a.d.C(v, h));
    }),
    (kt.prefetchDNS = function (v) {
      typeof v == "string" && a.d.D(v);
    }),
    (kt.preinit = function (v, h) {
      if (typeof v == "string" && h && typeof h.as == "string") {
        var m = h.as,
          p = s(m, h.crossOrigin),
          g = typeof h.integrity == "string" ? h.integrity : void 0,
          b = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        m === "style"
          ? a.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: p,
              integrity: g,
              fetchPriority: b,
            })
          : m === "script" &&
            a.d.X(v, {
              crossOrigin: p,
              integrity: g,
              fetchPriority: b,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (kt.preinitModule = function (v, h) {
      if (typeof v == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var m = s(h.as, h.crossOrigin);
            a.d.M(v, {
              crossOrigin: m,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && a.d.M(v);
    }),
    (kt.preload = function (v, h) {
      if (
        typeof v == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var m = h.as,
          p = s(m, h.crossOrigin);
        a.d.L(v, m, {
          crossOrigin: p,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (kt.preloadModule = function (v, h) {
      if (typeof v == "string")
        if (h) {
          var m = s(h.as, h.crossOrigin);
          a.d.m(v, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: m,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else a.d.m(v);
    }),
    (kt.requestFormReset = function (v) {
      a.d.r(v);
    }),
    (kt.unstable_batchedUpdates = function (v, h) {
      return v(h);
    }),
    (kt.useFormState = function (v, h, m) {
      return f.H.useFormState(v, h, m);
    }),
    (kt.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (kt.version = "19.2.0"),
    kt
  );
}
var U1;
function KA() {
  if (U1) return _v.exports;
  U1 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (_v.exports = dj()), _v.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $1;
function vj() {
  if ($1) return ou;
  $1 = 1;
  var e = sj(),
    t = ll(),
    r = KA();
  function a(n) {
    var i = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        i += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      n +
      "; visit " +
      i +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(n) {
    return !(!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11));
  }
  function o(n) {
    var i = n,
      l = n;
    if (n.alternate) for (; i.return; ) i = i.return;
    else {
      n = i;
      do ((i = n), (i.flags & 4098) !== 0 && (l = i.return), (n = i.return));
      while (n);
    }
    return i.tag === 3 ? l : null;
  }
  function f(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (
        (i === null && ((n = n.alternate), n !== null && (i = n.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function s(n) {
    if (n.tag === 31) {
      var i = n.memoizedState;
      if (
        (i === null && ((n = n.alternate), n !== null && (i = n.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function v(n) {
    if (o(n) !== n) throw Error(a(188));
  }
  function h(n) {
    var i = n.alternate;
    if (!i) {
      if (((i = o(n)), i === null)) throw Error(a(188));
      return i !== n ? null : n;
    }
    for (var l = n, c = i; ; ) {
      var d = l.return;
      if (d === null) break;
      var y = d.alternate;
      if (y === null) {
        if (((c = d.return), c !== null)) {
          l = c;
          continue;
        }
        break;
      }
      if (d.child === y.child) {
        for (y = d.child; y; ) {
          if (y === l) return (v(d), n);
          if (y === c) return (v(d), i);
          y = y.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== c.return) ((l = d), (c = y));
      else {
        for (var x = !1, E = d.child; E; ) {
          if (E === l) {
            ((x = !0), (l = d), (c = y));
            break;
          }
          if (E === c) {
            ((x = !0), (c = d), (l = y));
            break;
          }
          E = E.sibling;
        }
        if (!x) {
          for (E = y.child; E; ) {
            if (E === l) {
              ((x = !0), (l = y), (c = d));
              break;
            }
            if (E === c) {
              ((x = !0), (c = y), (l = d));
              break;
            }
            E = E.sibling;
          }
          if (!x) throw Error(a(189));
        }
      }
      if (l.alternate !== c) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? n : i;
  }
  function m(n) {
    var i = n.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return n;
    for (n = n.child; n !== null; ) {
      if (((i = m(n)), i !== null)) return i;
      n = n.sibling;
    }
    return null;
  }
  var p = Object.assign,
    g = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    M = Symbol.for("react.consumer"),
    T = Symbol.for("react.context"),
    N = Symbol.for("react.forward_ref"),
    z = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    le = Symbol.for("react.activity"),
    ae = Symbol.for("react.memo_cache_sentinel"),
    V = Symbol.iterator;
  function ne(n) {
    return n === null || typeof n != "object"
      ? null
      : ((n = (V && n[V]) || n["@@iterator"]),
        typeof n == "function" ? n : null);
  }
  var se = Symbol.for("react.client.reference");
  function F(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === se ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case S:
        return "Fragment";
      case _:
        return "Profiler";
      case w:
        return "StrictMode";
      case z:
        return "Suspense";
      case R:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case O:
          return "Portal";
        case T:
          return n.displayName || "Context";
        case M:
          return (n._context.displayName || "Context") + ".Consumer";
        case N:
          var i = n.render;
          return (
            (n = n.displayName),
            n ||
              ((n = i.displayName || i.name || ""),
              (n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")),
            n
          );
        case B:
          return (
            (i = n.displayName || null),
            i !== null ? i : F(n.type) || "Memo"
          );
        case X:
          ((i = n._payload), (n = n._init));
          try {
            return F(n(i));
          } catch {}
      }
    return null;
  }
  var W = Array.isArray,
    C = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    ee = [],
    ue = -1;
  function D(n) {
    return { current: n };
  }
  function L(n) {
    0 > ue || ((n.current = ee[ue]), (ee[ue] = null), ue--);
  }
  function te(n, i) {
    (ue++, (ee[ue] = n.current), (n.current = i));
  }
  var ie = D(null),
    oe = D(null),
    ge = D(null),
    we = D(null);
  function Je(n, i) {
    switch ((te(ge, i), te(oe, n), te(ie, null), i.nodeType)) {
      case 9:
      case 11:
        n = (n = i.documentElement) && (n = n.namespaceURI) ? t1(n) : 0;
        break;
      default:
        if (((n = i.tagName), (i = i.namespaceURI)))
          ((i = t1(i)), (n = n1(i, n)));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    (L(ie), te(ie, n));
  }
  function re() {
    (L(ie), L(oe), L(ge));
  }
  function he(n) {
    n.memoizedState !== null && te(we, n);
    var i = ie.current,
      l = n1(i, n.type);
    i !== l && (te(oe, n), te(ie, l));
  }
  function be(n) {
    (oe.current === n && (L(ie), L(oe)),
      we.current === n && (L(we), (ru._currentValue = I)));
  }
  var J, et;
  function je(n) {
    if (J === void 0)
      try {
        throw Error();
      } catch (l) {
        var i = l.stack.trim().match(/\n( *(at )?)/);
        ((J = (i && i[1]) || ""),
          (et =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      J +
      n +
      et
    );
  }
  var _t = !1;
  function Tt(n, i) {
    if (!n || _t) return "";
    _t = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function () {
          try {
            if (i) {
              var Q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Q, []);
                } catch (Y) {
                  var H = Y;
                }
                Reflect.construct(n, [], Q);
              } else {
                try {
                  Q.call();
                } catch (Y) {
                  H = Y;
                }
                n.call(Q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                H = Y;
              }
              (Q = n()) &&
                typeof Q.catch == "function" &&
                Q.catch(function () {});
            }
          } catch (Y) {
            if (Y && H && typeof Y.stack == "string") return [Y.stack, H.stack];
          }
          return [null, null];
        },
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name",
      );
      d &&
        d.configurable &&
        Object.defineProperty(c.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var y = c.DetermineComponentFrameRoot(),
        x = y[0],
        E = y[1];
      if (x && E) {
        var j = x.split(`
`),
          q = E.split(`
`);
        for (
          d = c = 0;
          c < j.length && !j[c].includes("DetermineComponentFrameRoot");
        )
          c++;
        for (; d < q.length && !q[d].includes("DetermineComponentFrameRoot"); )
          d++;
        if (c === j.length || d === q.length)
          for (
            c = j.length - 1, d = q.length - 1;
            1 <= c && 0 <= d && j[c] !== q[d];
          )
            d--;
        for (; 1 <= c && 0 <= d; c--, d--)
          if (j[c] !== q[d]) {
            if (c !== 1 || d !== 1)
              do
                if ((c--, d--, 0 > d || j[c] !== q[d])) {
                  var G =
                    `
` + j[c].replace(" at new ", " at ");
                  return (
                    n.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", n.displayName)),
                    G
                  );
                }
              while (1 <= c && 0 <= d);
            break;
          }
      }
    } finally {
      ((_t = !1), (Error.prepareStackTrace = l));
    }
    return (l = n ? n.displayName || n.name : "") ? je(l) : "";
  }
  function ar(n, i) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return je(n.type);
      case 16:
        return je("Lazy");
      case 13:
        return n.child !== i && i !== null
          ? je("Suspense Fallback")
          : je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 15:
        return Tt(n.type, !1);
      case 11:
        return Tt(n.type.render, !1);
      case 1:
        return Tt(n.type, !0);
      case 31:
        return je("Activity");
      default:
        return "";
    }
  }
  function hl(n) {
    try {
      var i = "",
        l = null;
      do ((i += ar(n, l)), (l = n), (n = n.return));
      while (n);
      return i;
    } catch (c) {
      return (
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack
      );
    }
  }
  var ls = Object.prototype.hasOwnProperty,
    us = e.unstable_scheduleCallback,
    os = e.unstable_cancelCallback,
    LT = e.unstable_shouldYield,
    BT = e.unstable_requestPaint,
    nn = e.unstable_now,
    UT = e.unstable_getCurrentPriorityLevel,
    Np = e.unstable_ImmediatePriority,
    zp = e.unstable_UserBlockingPriority,
    Zu = e.unstable_NormalPriority,
    $T = e.unstable_LowPriority,
    Rp = e.unstable_IdlePriority,
    qT = e.log,
    HT = e.unstable_setDisableYieldValue,
    ml = null,
    rn = null;
  function Ur(n) {
    if (
      (typeof qT == "function" && HT(n),
      rn && typeof rn.setStrictMode == "function")
    )
      try {
        rn.setStrictMode(ml, n);
      } catch {}
  }
  var an = Math.clz32 ? Math.clz32 : KT,
    YT = Math.log,
    IT = Math.LN2;
  function KT(n) {
    return ((n >>>= 0), n === 0 ? 32 : (31 - ((YT(n) / IT) | 0)) | 0);
  }
  var Qu = 256,
    Wu = 262144,
    Fu = 4194304;
  function Aa(n) {
    var i = n & 42;
    if (i !== 0) return i;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return n & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function Ju(n, i, l) {
    var c = n.pendingLanes;
    if (c === 0) return 0;
    var d = 0,
      y = n.suspendedLanes,
      x = n.pingedLanes;
    n = n.warmLanes;
    var E = c & 134217727;
    return (
      E !== 0
        ? ((c = E & ~y),
          c !== 0
            ? (d = Aa(c))
            : ((x &= E),
              x !== 0
                ? (d = Aa(x))
                : l || ((l = E & ~n), l !== 0 && (d = Aa(l)))))
        : ((E = c & ~y),
          E !== 0
            ? (d = Aa(E))
            : x !== 0
              ? (d = Aa(x))
              : l || ((l = c & ~n), l !== 0 && (d = Aa(l)))),
      d === 0
        ? 0
        : i !== 0 &&
            i !== d &&
            (i & y) === 0 &&
            ((y = d & -d),
            (l = i & -i),
            y >= l || (y === 32 && (l & 4194048) !== 0))
          ? i
          : d
    );
  }
  function yl(n, i) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & i) === 0;
  }
  function GT(n, i) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function kp() {
    var n = Fu;
    return ((Fu <<= 1), (Fu & 62914560) === 0 && (Fu = 4194304), n);
  }
  function cs(n) {
    for (var i = [], l = 0; 31 > l; l++) i.push(n);
    return i;
  }
  function pl(n, i) {
    ((n.pendingLanes |= i),
      i !== 268435456 &&
        ((n.suspendedLanes = 0), (n.pingedLanes = 0), (n.warmLanes = 0)));
  }
  function XT(n, i, l, c, d, y) {
    var x = n.pendingLanes;
    ((n.pendingLanes = l),
      (n.suspendedLanes = 0),
      (n.pingedLanes = 0),
      (n.warmLanes = 0),
      (n.expiredLanes &= l),
      (n.entangledLanes &= l),
      (n.errorRecoveryDisabledLanes &= l),
      (n.shellSuspendCounter = 0));
    var E = n.entanglements,
      j = n.expirationTimes,
      q = n.hiddenUpdates;
    for (l = x & ~l; 0 < l; ) {
      var G = 31 - an(l),
        Q = 1 << G;
      ((E[G] = 0), (j[G] = -1));
      var H = q[G];
      if (H !== null)
        for (q[G] = null, G = 0; G < H.length; G++) {
          var Y = H[G];
          Y !== null && (Y.lane &= -536870913);
        }
      l &= ~Q;
    }
    (c !== 0 && Lp(n, c, 0),
      y !== 0 && d === 0 && n.tag !== 0 && (n.suspendedLanes |= y & ~(x & ~i)));
  }
  function Lp(n, i, l) {
    ((n.pendingLanes |= i), (n.suspendedLanes &= ~i));
    var c = 31 - an(i);
    ((n.entangledLanes |= i),
      (n.entanglements[c] = n.entanglements[c] | 1073741824 | (l & 261930)));
  }
  function Bp(n, i) {
    var l = (n.entangledLanes |= i);
    for (n = n.entanglements; l; ) {
      var c = 31 - an(l),
        d = 1 << c;
      ((d & i) | (n[c] & i) && (n[c] |= i), (l &= ~d));
    }
  }
  function Up(n, i) {
    var l = i & -i;
    return (
      (l = (l & 42) !== 0 ? 1 : fs(l)),
      (l & (n.suspendedLanes | i)) !== 0 ? 0 : l
    );
  }
  function fs(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function ss(n) {
    return (
      (n &= -n),
      2 < n ? (8 < n ? ((n & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function $p() {
    var n = U.p;
    return n !== 0 ? n : ((n = window.event), n === void 0 ? 32 : E1(n.type));
  }
  function qp(n, i) {
    var l = U.p;
    try {
      return ((U.p = n), i());
    } finally {
      U.p = l;
    }
  }
  var $r = Math.random().toString(36).slice(2),
    Mt = "__reactFiber$" + $r,
    Yt = "__reactProps$" + $r,
    ci = "__reactContainer$" + $r,
    ds = "__reactEvents$" + $r,
    VT = "__reactListeners$" + $r,
    ZT = "__reactHandles$" + $r,
    Hp = "__reactResources$" + $r,
    gl = "__reactMarker$" + $r;
  function vs(n) {
    (delete n[Mt], delete n[Yt], delete n[ds], delete n[VT], delete n[ZT]);
  }
  function fi(n) {
    var i = n[Mt];
    if (i) return i;
    for (var l = n.parentNode; l; ) {
      if ((i = l[ci] || l[Mt])) {
        if (
          ((l = i.alternate),
          i.child !== null || (l !== null && l.child !== null))
        )
          for (n = c1(n); n !== null; ) {
            if ((l = n[Mt])) return l;
            n = c1(n);
          }
        return i;
      }
      ((n = l), (l = n.parentNode));
    }
    return null;
  }
  function si(n) {
    if ((n = n[Mt] || n[ci])) {
      var i = n.tag;
      if (
        i === 5 ||
        i === 6 ||
        i === 13 ||
        i === 31 ||
        i === 26 ||
        i === 27 ||
        i === 3
      )
        return n;
    }
    return null;
  }
  function bl(n) {
    var i = n.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return n.stateNode;
    throw Error(a(33));
  }
  function di(n) {
    var i = n[Hp];
    return (
      i ||
        (i = n[Hp] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      i
    );
  }
  function bt(n) {
    n[gl] = !0;
  }
  var Yp = new Set(),
    Ip = {};
  function wa(n, i) {
    (vi(n, i), vi(n + "Capture", i));
  }
  function vi(n, i) {
    for (Ip[n] = i, n = 0; n < i.length; n++) Yp.add(i[n]);
  }
  var QT = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Kp = {},
    Gp = {};
  function WT(n) {
    return ls.call(Gp, n)
      ? !0
      : ls.call(Kp, n)
        ? !1
        : QT.test(n)
          ? (Gp[n] = !0)
          : ((Kp[n] = !0), !1);
  }
  function eo(n, i, l) {
    if (WT(i))
      if (l === null) n.removeAttribute(i);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(i);
            return;
          case "boolean":
            var c = i.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              n.removeAttribute(i);
              return;
            }
        }
        n.setAttribute(i, "" + l);
      }
  }
  function to(n, i, l) {
    if (l === null) n.removeAttribute(i);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(i);
          return;
      }
      n.setAttribute(i, "" + l);
    }
  }
  function ir(n, i, l, c) {
    if (c === null) n.removeAttribute(l);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(l);
          return;
      }
      n.setAttributeNS(i, l, "" + c);
    }
  }
  function An(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Xp(n) {
    var i = n.type;
    return (
      (n = n.nodeName) &&
      n.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function FT(n, i, l) {
    var c = Object.getOwnPropertyDescriptor(n.constructor.prototype, i);
    if (
      !n.hasOwnProperty(i) &&
      typeof c < "u" &&
      typeof c.get == "function" &&
      typeof c.set == "function"
    ) {
      var d = c.get,
        y = c.set;
      return (
        Object.defineProperty(n, i, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (x) {
            ((l = "" + x), y.call(this, x));
          },
        }),
        Object.defineProperty(n, i, { enumerable: c.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (x) {
            l = "" + x;
          },
          stopTracking: function () {
            ((n._valueTracker = null), delete n[i]);
          },
        }
      );
    }
  }
  function hs(n) {
    if (!n._valueTracker) {
      var i = Xp(n) ? "checked" : "value";
      n._valueTracker = FT(n, i, "" + n[i]);
    }
  }
  function Vp(n) {
    if (!n) return !1;
    var i = n._valueTracker;
    if (!i) return !0;
    var l = i.getValue(),
      c = "";
    return (
      n && (c = Xp(n) ? (n.checked ? "true" : "false") : n.value),
      (n = c),
      n !== l ? (i.setValue(n), !0) : !1
    );
  }
  function no(n) {
    if (
      ((n = n || (typeof document < "u" ? document : void 0)), typeof n > "u")
    )
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var JT = /[\n"\\]/g;
  function wn(n) {
    return n.replace(JT, function (i) {
      return "\\" + i.charCodeAt(0).toString(16) + " ";
    });
  }
  function ms(n, i, l, c, d, y, x, E) {
    ((n.name = ""),
      x != null &&
      typeof x != "function" &&
      typeof x != "symbol" &&
      typeof x != "boolean"
        ? (n.type = x)
        : n.removeAttribute("type"),
      i != null
        ? x === "number"
          ? ((i === 0 && n.value === "") || n.value != i) &&
            (n.value = "" + An(i))
          : n.value !== "" + An(i) && (n.value = "" + An(i))
        : (x !== "submit" && x !== "reset") || n.removeAttribute("value"),
      i != null
        ? ys(n, x, An(i))
        : l != null
          ? ys(n, x, An(l))
          : c != null && n.removeAttribute("value"),
      d == null && y != null && (n.defaultChecked = !!y),
      d != null &&
        (n.checked = d && typeof d != "function" && typeof d != "symbol"),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (n.name = "" + An(E))
        : n.removeAttribute("name"));
  }
  function Zp(n, i, l, c, d, y, x, E) {
    if (
      (y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (n.type = y),
      i != null || l != null)
    ) {
      if (!((y !== "submit" && y !== "reset") || i != null)) {
        hs(n);
        return;
      }
      ((l = l != null ? "" + An(l) : ""),
        (i = i != null ? "" + An(i) : l),
        E || i === n.value || (n.value = i),
        (n.defaultValue = i));
    }
    ((c = c ?? d),
      (c = typeof c != "function" && typeof c != "symbol" && !!c),
      (n.checked = E ? n.checked : !!c),
      (n.defaultChecked = !!c),
      x != null &&
        typeof x != "function" &&
        typeof x != "symbol" &&
        typeof x != "boolean" &&
        (n.name = x),
      hs(n));
  }
  function ys(n, i, l) {
    (i === "number" && no(n.ownerDocument) === n) ||
      n.defaultValue === "" + l ||
      (n.defaultValue = "" + l);
  }
  function hi(n, i, l, c) {
    if (((n = n.options), i)) {
      i = {};
      for (var d = 0; d < l.length; d++) i["$" + l[d]] = !0;
      for (l = 0; l < n.length; l++)
        ((d = i.hasOwnProperty("$" + n[l].value)),
          n[l].selected !== d && (n[l].selected = d),
          d && c && (n[l].defaultSelected = !0));
    } else {
      for (l = "" + An(l), i = null, d = 0; d < n.length; d++) {
        if (n[d].value === l) {
          ((n[d].selected = !0), c && (n[d].defaultSelected = !0));
          return;
        }
        i !== null || n[d].disabled || (i = n[d]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Qp(n, i, l) {
    if (
      i != null &&
      ((i = "" + An(i)), i !== n.value && (n.value = i), l == null)
    ) {
      n.defaultValue !== i && (n.defaultValue = i);
      return;
    }
    n.defaultValue = l != null ? "" + An(l) : "";
  }
  function Wp(n, i, l, c) {
    if (i == null) {
      if (c != null) {
        if (l != null) throw Error(a(92));
        if (W(c)) {
          if (1 < c.length) throw Error(a(93));
          c = c[0];
        }
        l = c;
      }
      (l == null && (l = ""), (i = l));
    }
    ((l = An(i)),
      (n.defaultValue = l),
      (c = n.textContent),
      c === l && c !== "" && c !== null && (n.value = c),
      hs(n));
  }
  function mi(n, i) {
    if (i) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = i;
        return;
      }
    }
    n.textContent = i;
  }
  var eM = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Fp(n, i, l) {
    var c = i.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? c
        ? n.setProperty(i, "")
        : i === "float"
          ? (n.cssFloat = "")
          : (n[i] = "")
      : c
        ? n.setProperty(i, l)
        : typeof l != "number" || l === 0 || eM.has(i)
          ? i === "float"
            ? (n.cssFloat = l)
            : (n[i] = ("" + l).trim())
          : (n[i] = l + "px");
  }
  function Jp(n, i, l) {
    if (i != null && typeof i != "object") throw Error(a(62));
    if (((n = n.style), l != null)) {
      for (var c in l)
        !l.hasOwnProperty(c) ||
          (i != null && i.hasOwnProperty(c)) ||
          (c.indexOf("--") === 0
            ? n.setProperty(c, "")
            : c === "float"
              ? (n.cssFloat = "")
              : (n[c] = ""));
      for (var d in i)
        ((c = i[d]), i.hasOwnProperty(d) && l[d] !== c && Fp(n, d, c));
    } else for (var y in i) i.hasOwnProperty(y) && Fp(n, y, i[y]);
  }
  function ps(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var tM = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    nM =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ro(n) {
    return nM.test("" + n)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : n;
  }
  function lr() {}
  var gs = null;
  function bs(n) {
    return (
      (n = n.target || n.srcElement || window),
      n.correspondingUseElement && (n = n.correspondingUseElement),
      n.nodeType === 3 ? n.parentNode : n
    );
  }
  var yi = null,
    pi = null;
  function eg(n) {
    var i = si(n);
    if (i && (n = i.stateNode)) {
      var l = n[Yt] || null;
      e: switch (((n = i.stateNode), i.type)) {
        case "input":
          if (
            (ms(
              n,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (i = l.name),
            l.type === "radio" && i != null)
          ) {
            for (l = n; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + wn("" + i) + '"][type="radio"]',
              ),
                i = 0;
              i < l.length;
              i++
            ) {
              var c = l[i];
              if (c !== n && c.form === n.form) {
                var d = c[Yt] || null;
                if (!d) throw Error(a(90));
                ms(
                  c,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name,
                );
              }
            }
            for (i = 0; i < l.length; i++)
              ((c = l[i]), c.form === n.form && Vp(c));
          }
          break e;
        case "textarea":
          Qp(n, l.value, l.defaultValue);
          break e;
        case "select":
          ((i = l.value), i != null && hi(n, !!l.multiple, i, !1));
      }
    }
  }
  var xs = !1;
  function tg(n, i, l) {
    if (xs) return n(i, l);
    xs = !0;
    try {
      var c = n(i);
      return c;
    } finally {
      if (
        ((xs = !1),
        (yi !== null || pi !== null) &&
          (Ko(), yi && ((i = yi), (n = pi), (pi = yi = null), eg(i), n)))
      )
        for (i = 0; i < n.length; i++) eg(n[i]);
    }
  }
  function xl(n, i) {
    var l = n.stateNode;
    if (l === null) return null;
    var c = l[Yt] || null;
    if (c === null) return null;
    l = c[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((c = !c.disabled) ||
          ((n = n.type),
          (c = !(
            n === "button" ||
            n === "input" ||
            n === "select" ||
            n === "textarea"
          ))),
          (n = !c));
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(a(231, i, typeof l));
    return l;
  }
  var ur = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ss = !1;
  if (ur)
    try {
      var Sl = {};
      (Object.defineProperty(Sl, "passive", {
        get: function () {
          Ss = !0;
        },
      }),
        window.addEventListener("test", Sl, Sl),
        window.removeEventListener("test", Sl, Sl));
    } catch {
      Ss = !1;
    }
  var qr = null,
    Os = null,
    ao = null;
  function ng() {
    if (ao) return ao;
    var n,
      i = Os,
      l = i.length,
      c,
      d = "value" in qr ? qr.value : qr.textContent,
      y = d.length;
    for (n = 0; n < l && i[n] === d[n]; n++);
    var x = l - n;
    for (c = 1; c <= x && i[l - c] === d[y - c]; c++);
    return (ao = d.slice(n, 1 < c ? 1 - c : void 0));
  }
  function io(n) {
    var i = n.keyCode;
    return (
      "charCode" in n
        ? ((n = n.charCode), n === 0 && i === 13 && (n = 13))
        : (n = i),
      n === 10 && (n = 13),
      32 <= n || n === 13 ? n : 0
    );
  }
  function lo() {
    return !0;
  }
  function rg() {
    return !1;
  }
  function It(n) {
    function i(l, c, d, y, x) {
      ((this._reactName = l),
        (this._targetInst = d),
        (this.type = c),
        (this.nativeEvent = y),
        (this.target = x),
        (this.currentTarget = null));
      for (var E in n)
        n.hasOwnProperty(E) && ((l = n[E]), (this[E] = l ? l(y) : y[E]));
      return (
        (this.isDefaultPrevented = (
          y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1
        )
          ? lo
          : rg),
        (this.isPropagationStopped = rg),
        this
      );
    }
    return (
      p(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = lo));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = lo));
        },
        persist: function () {},
        isPersistent: lo,
      }),
      i
    );
  }
  var Ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (n) {
        return n.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    uo = It(Ea),
    Ol = p({}, Ea, { view: 0, detail: 0 }),
    rM = It(Ol),
    As,
    ws,
    Al,
    oo = p({}, Ol, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: _s,
      button: 0,
      buttons: 0,
      relatedTarget: function (n) {
        return n.relatedTarget === void 0
          ? n.fromElement === n.srcElement
            ? n.toElement
            : n.fromElement
          : n.relatedTarget;
      },
      movementX: function (n) {
        return "movementX" in n
          ? n.movementX
          : (n !== Al &&
              (Al && n.type === "mousemove"
                ? ((As = n.screenX - Al.screenX), (ws = n.screenY - Al.screenY))
                : (ws = As = 0),
              (Al = n)),
            As);
      },
      movementY: function (n) {
        return "movementY" in n ? n.movementY : ws;
      },
    }),
    ag = It(oo),
    aM = p({}, oo, { dataTransfer: 0 }),
    iM = It(aM),
    lM = p({}, Ol, { relatedTarget: 0 }),
    Es = It(lM),
    uM = p({}, Ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oM = It(uM),
    cM = p({}, Ea, {
      clipboardData: function (n) {
        return "clipboardData" in n ? n.clipboardData : window.clipboardData;
      },
    }),
    fM = It(cM),
    sM = p({}, Ea, { data: 0 }),
    ig = It(sM),
    dM = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    vM = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    hM = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mM(n) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(n)
      : (n = hM[n])
        ? !!i[n]
        : !1;
  }
  function _s() {
    return mM;
  }
  var yM = p({}, Ol, {
      key: function (n) {
        if (n.key) {
          var i = dM[n.key] || n.key;
          if (i !== "Unidentified") return i;
        }
        return n.type === "keypress"
          ? ((n = io(n)), n === 13 ? "Enter" : String.fromCharCode(n))
          : n.type === "keydown" || n.type === "keyup"
            ? vM[n.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: _s,
      charCode: function (n) {
        return n.type === "keypress" ? io(n) : 0;
      },
      keyCode: function (n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
      },
      which: function (n) {
        return n.type === "keypress"
          ? io(n)
          : n.type === "keydown" || n.type === "keyup"
            ? n.keyCode
            : 0;
      },
    }),
    pM = It(yM),
    gM = p({}, oo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    lg = It(gM),
    bM = p({}, Ol, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: _s,
    }),
    xM = It(bM),
    SM = p({}, Ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    OM = It(SM),
    AM = p({}, oo, {
      deltaX: function (n) {
        return "deltaX" in n
          ? n.deltaX
          : "wheelDeltaX" in n
            ? -n.wheelDeltaX
            : 0;
      },
      deltaY: function (n) {
        return "deltaY" in n
          ? n.deltaY
          : "wheelDeltaY" in n
            ? -n.wheelDeltaY
            : "wheelDelta" in n
              ? -n.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    wM = It(AM),
    EM = p({}, Ea, { newState: 0, oldState: 0 }),
    _M = It(EM),
    TM = [9, 13, 27, 32],
    Ts = ur && "CompositionEvent" in window,
    wl = null;
  ur && "documentMode" in document && (wl = document.documentMode);
  var MM = ur && "TextEvent" in window && !wl,
    ug = ur && (!Ts || (wl && 8 < wl && 11 >= wl)),
    og = " ",
    cg = !1;
  function fg(n, i) {
    switch (n) {
      case "keyup":
        return TM.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sg(n) {
    return (
      (n = n.detail),
      typeof n == "object" && "data" in n ? n.data : null
    );
  }
  var gi = !1;
  function DM(n, i) {
    switch (n) {
      case "compositionend":
        return sg(i);
      case "keypress":
        return i.which !== 32 ? null : ((cg = !0), og);
      case "textInput":
        return ((n = i.data), n === og && cg ? null : n);
      default:
        return null;
    }
  }
  function jM(n, i) {
    if (gi)
      return n === "compositionend" || (!Ts && fg(n, i))
        ? ((n = ng()), (ao = Os = qr = null), (gi = !1), n)
        : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return ug && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var CM = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function dg(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!CM[n.type] : i === "textarea";
  }
  function vg(n, i, l, c) {
    (yi ? (pi ? pi.push(c) : (pi = [c])) : (yi = c),
      (i = Fo(i, "onChange")),
      0 < i.length &&
        ((l = new uo("onChange", "change", null, l, c)),
        n.push({ event: l, listeners: i })));
  }
  var El = null,
    _l = null;
  function PM(n) {
    Zb(n, 0);
  }
  function co(n) {
    var i = bl(n);
    if (Vp(i)) return n;
  }
  function hg(n, i) {
    if (n === "change") return i;
  }
  var mg = !1;
  if (ur) {
    var Ms;
    if (ur) {
      var Ds = "oninput" in document;
      if (!Ds) {
        var yg = document.createElement("div");
        (yg.setAttribute("oninput", "return;"),
          (Ds = typeof yg.oninput == "function"));
      }
      Ms = Ds;
    } else Ms = !1;
    mg = Ms && (!document.documentMode || 9 < document.documentMode);
  }
  function pg() {
    El && (El.detachEvent("onpropertychange", gg), (_l = El = null));
  }
  function gg(n) {
    if (n.propertyName === "value" && co(_l)) {
      var i = [];
      (vg(i, _l, n, bs(n)), tg(PM, i));
    }
  }
  function NM(n, i, l) {
    n === "focusin"
      ? (pg(), (El = i), (_l = l), El.attachEvent("onpropertychange", gg))
      : n === "focusout" && pg();
  }
  function zM(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return co(_l);
  }
  function RM(n, i) {
    if (n === "click") return co(i);
  }
  function kM(n, i) {
    if (n === "input" || n === "change") return co(i);
  }
  function LM(n, i) {
    return (n === i && (n !== 0 || 1 / n === 1 / i)) || (n !== n && i !== i);
  }
  var ln = typeof Object.is == "function" ? Object.is : LM;
  function Tl(n, i) {
    if (ln(n, i)) return !0;
    if (
      typeof n != "object" ||
      n === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var l = Object.keys(n),
      c = Object.keys(i);
    if (l.length !== c.length) return !1;
    for (c = 0; c < l.length; c++) {
      var d = l[c];
      if (!ls.call(i, d) || !ln(n[d], i[d])) return !1;
    }
    return !0;
  }
  function bg(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function xg(n, i) {
    var l = bg(n);
    n = 0;
    for (var c; l; ) {
      if (l.nodeType === 3) {
        if (((c = n + l.textContent.length), n <= i && c >= i))
          return { node: l, offset: i - n };
        n = c;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = bg(l);
    }
  }
  function Sg(n, i) {
    return n && i
      ? n === i
        ? !0
        : n && n.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? Sg(n, i.parentNode)
            : "contains" in n
              ? n.contains(i)
              : n.compareDocumentPosition
                ? !!(n.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function Og(n) {
    n =
      n != null &&
      n.ownerDocument != null &&
      n.ownerDocument.defaultView != null
        ? n.ownerDocument.defaultView
        : window;
    for (var i = no(n.document); i instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof i.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = i.contentWindow;
      else break;
      i = no(n.document);
    }
    return i;
  }
  function js(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return (
      i &&
      ((i === "input" &&
        (n.type === "text" ||
          n.type === "search" ||
          n.type === "tel" ||
          n.type === "url" ||
          n.type === "password")) ||
        i === "textarea" ||
        n.contentEditable === "true")
    );
  }
  var BM = ur && "documentMode" in document && 11 >= document.documentMode,
    bi = null,
    Cs = null,
    Ml = null,
    Ps = !1;
  function Ag(n, i, l) {
    var c =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Ps ||
      bi == null ||
      bi !== no(c) ||
      ((c = bi),
      "selectionStart" in c && js(c)
        ? (c = { start: c.selectionStart, end: c.selectionEnd })
        : ((c = (
            (c.ownerDocument && c.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset,
          })),
      (Ml && Tl(Ml, c)) ||
        ((Ml = c),
        (c = Fo(Cs, "onSelect")),
        0 < c.length &&
          ((i = new uo("onSelect", "select", null, i, l)),
          n.push({ event: i, listeners: c }),
          (i.target = bi))));
  }
  function _a(n, i) {
    var l = {};
    return (
      (l[n.toLowerCase()] = i.toLowerCase()),
      (l["Webkit" + n] = "webkit" + i),
      (l["Moz" + n] = "moz" + i),
      l
    );
  }
  var xi = {
      animationend: _a("Animation", "AnimationEnd"),
      animationiteration: _a("Animation", "AnimationIteration"),
      animationstart: _a("Animation", "AnimationStart"),
      transitionrun: _a("Transition", "TransitionRun"),
      transitionstart: _a("Transition", "TransitionStart"),
      transitioncancel: _a("Transition", "TransitionCancel"),
      transitionend: _a("Transition", "TransitionEnd"),
    },
    Ns = {},
    wg = {};
  ur &&
    ((wg = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xi.animationend.animation,
      delete xi.animationiteration.animation,
      delete xi.animationstart.animation),
    "TransitionEvent" in window || delete xi.transitionend.transition);
  function Ta(n) {
    if (Ns[n]) return Ns[n];
    if (!xi[n]) return n;
    var i = xi[n],
      l;
    for (l in i) if (i.hasOwnProperty(l) && l in wg) return (Ns[n] = i[l]);
    return n;
  }
  var Eg = Ta("animationend"),
    _g = Ta("animationiteration"),
    Tg = Ta("animationstart"),
    UM = Ta("transitionrun"),
    $M = Ta("transitionstart"),
    qM = Ta("transitioncancel"),
    Mg = Ta("transitionend"),
    Dg = new Map(),
    zs =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  zs.push("scrollEnd");
  function Yn(n, i) {
    (Dg.set(n, i), wa(i, [n]));
  }
  var fo =
      typeof reportError == "function"
        ? reportError
        : function (n) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var i = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof n == "object" &&
                  n !== null &&
                  typeof n.message == "string"
                    ? String(n.message)
                    : String(n),
                error: n,
              });
              if (!window.dispatchEvent(i)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", n);
              return;
            }
            console.error(n);
          },
    En = [],
    Si = 0,
    Rs = 0;
  function so() {
    for (var n = Si, i = (Rs = Si = 0); i < n; ) {
      var l = En[i];
      En[i++] = null;
      var c = En[i];
      En[i++] = null;
      var d = En[i];
      En[i++] = null;
      var y = En[i];
      if (((En[i++] = null), c !== null && d !== null)) {
        var x = c.pending;
        (x === null ? (d.next = d) : ((d.next = x.next), (x.next = d)),
          (c.pending = d));
      }
      y !== 0 && jg(l, d, y);
    }
  }
  function vo(n, i, l, c) {
    ((En[Si++] = n),
      (En[Si++] = i),
      (En[Si++] = l),
      (En[Si++] = c),
      (Rs |= c),
      (n.lanes |= c),
      (n = n.alternate),
      n !== null && (n.lanes |= c));
  }
  function ks(n, i, l, c) {
    return (vo(n, i, l, c), ho(n));
  }
  function Ma(n, i) {
    return (vo(n, null, null, i), ho(n));
  }
  function jg(n, i, l) {
    n.lanes |= l;
    var c = n.alternate;
    c !== null && (c.lanes |= l);
    for (var d = !1, y = n.return; y !== null; )
      ((y.childLanes |= l),
        (c = y.alternate),
        c !== null && (c.childLanes |= l),
        y.tag === 22 &&
          ((n = y.stateNode), n === null || n._visibility & 1 || (d = !0)),
        (n = y),
        (y = y.return));
    return n.tag === 3
      ? ((y = n.stateNode),
        d &&
          i !== null &&
          ((d = 31 - an(l)),
          (n = y.hiddenUpdates),
          (c = n[d]),
          c === null ? (n[d] = [i]) : c.push(i),
          (i.lane = l | 536870912)),
        y)
      : null;
  }
  function ho(n) {
    if (50 < Ql) throw ((Ql = 0), (Kd = null), Error(a(185)));
    for (var i = n.return; i !== null; ) ((n = i), (i = n.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Oi = {};
  function HM(n, i, l, c) {
    ((this.tag = n),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = i),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = c),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function un(n, i, l, c) {
    return new HM(n, i, l, c);
  }
  function Ls(n) {
    return ((n = n.prototype), !(!n || !n.isReactComponent));
  }
  function or(n, i) {
    var l = n.alternate;
    return (
      l === null
        ? ((l = un(n.tag, i, n.key, n.mode)),
          (l.elementType = n.elementType),
          (l.type = n.type),
          (l.stateNode = n.stateNode),
          (l.alternate = n),
          (n.alternate = l))
        : ((l.pendingProps = i),
          (l.type = n.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = n.flags & 65011712),
      (l.childLanes = n.childLanes),
      (l.lanes = n.lanes),
      (l.child = n.child),
      (l.memoizedProps = n.memoizedProps),
      (l.memoizedState = n.memoizedState),
      (l.updateQueue = n.updateQueue),
      (i = n.dependencies),
      (l.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (l.sibling = n.sibling),
      (l.index = n.index),
      (l.ref = n.ref),
      (l.refCleanup = n.refCleanup),
      l
    );
  }
  function Cg(n, i) {
    n.flags &= 65011714;
    var l = n.alternate;
    return (
      l === null
        ? ((n.childLanes = 0),
          (n.lanes = i),
          (n.child = null),
          (n.subtreeFlags = 0),
          (n.memoizedProps = null),
          (n.memoizedState = null),
          (n.updateQueue = null),
          (n.dependencies = null),
          (n.stateNode = null))
        : ((n.childLanes = l.childLanes),
          (n.lanes = l.lanes),
          (n.child = l.child),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.memoizedProps = l.memoizedProps),
          (n.memoizedState = l.memoizedState),
          (n.updateQueue = l.updateQueue),
          (n.type = l.type),
          (i = l.dependencies),
          (n.dependencies =
            i === null
              ? null
              : { lanes: i.lanes, firstContext: i.firstContext })),
      n
    );
  }
  function mo(n, i, l, c, d, y) {
    var x = 0;
    if (((c = n), typeof n == "function")) Ls(n) && (x = 1);
    else if (typeof n == "string")
      x = XD(n, l, ie.current)
        ? 26
        : n === "html" || n === "head" || n === "body"
          ? 27
          : 5;
    else
      e: switch (n) {
        case le:
          return (
            (n = un(31, l, i, d)),
            (n.elementType = le),
            (n.lanes = y),
            n
          );
        case S:
          return Da(l.children, d, y, i);
        case w:
          ((x = 8), (d |= 24));
          break;
        case _:
          return (
            (n = un(12, l, i, d | 2)),
            (n.elementType = _),
            (n.lanes = y),
            n
          );
        case z:
          return ((n = un(13, l, i, d)), (n.elementType = z), (n.lanes = y), n);
        case R:
          return ((n = un(19, l, i, d)), (n.elementType = R), (n.lanes = y), n);
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case T:
                x = 10;
                break e;
              case M:
                x = 9;
                break e;
              case N:
                x = 11;
                break e;
              case B:
                x = 14;
                break e;
              case X:
                ((x = 16), (c = null));
                break e;
            }
          ((x = 29),
            (l = Error(a(130, n === null ? "null" : typeof n, ""))),
            (c = null));
      }
    return (
      (i = un(x, l, i, d)),
      (i.elementType = n),
      (i.type = c),
      (i.lanes = y),
      i
    );
  }
  function Da(n, i, l, c) {
    return ((n = un(7, n, c, i)), (n.lanes = l), n);
  }
  function Bs(n, i, l) {
    return ((n = un(6, n, null, i)), (n.lanes = l), n);
  }
  function Pg(n) {
    var i = un(18, null, null, 0);
    return ((i.stateNode = n), i);
  }
  function Us(n, i, l) {
    return (
      (i = un(4, n.children !== null ? n.children : [], n.key, i)),
      (i.lanes = l),
      (i.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation,
      }),
      i
    );
  }
  var Ng = new WeakMap();
  function _n(n, i) {
    if (typeof n == "object" && n !== null) {
      var l = Ng.get(n);
      return l !== void 0
        ? l
        : ((i = { value: n, source: i, stack: hl(i) }), Ng.set(n, i), i);
    }
    return { value: n, source: i, stack: hl(i) };
  }
  var Ai = [],
    wi = 0,
    yo = null,
    Dl = 0,
    Tn = [],
    Mn = 0,
    Hr = null,
    Wn = 1,
    Fn = "";
  function cr(n, i) {
    ((Ai[wi++] = Dl), (Ai[wi++] = yo), (yo = n), (Dl = i));
  }
  function zg(n, i, l) {
    ((Tn[Mn++] = Wn), (Tn[Mn++] = Fn), (Tn[Mn++] = Hr), (Hr = n));
    var c = Wn;
    n = Fn;
    var d = 32 - an(c) - 1;
    ((c &= ~(1 << d)), (l += 1));
    var y = 32 - an(i) + d;
    if (30 < y) {
      var x = d - (d % 5);
      ((y = (c & ((1 << x) - 1)).toString(32)),
        (c >>= x),
        (d -= x),
        (Wn = (1 << (32 - an(i) + d)) | (l << d) | c),
        (Fn = y + n));
    } else ((Wn = (1 << y) | (l << d) | c), (Fn = n));
  }
  function $s(n) {
    n.return !== null && (cr(n, 1), zg(n, 1, 0));
  }
  function qs(n) {
    for (; n === yo; )
      ((yo = Ai[--wi]), (Ai[wi] = null), (Dl = Ai[--wi]), (Ai[wi] = null));
    for (; n === Hr; )
      ((Hr = Tn[--Mn]),
        (Tn[Mn] = null),
        (Fn = Tn[--Mn]),
        (Tn[Mn] = null),
        (Wn = Tn[--Mn]),
        (Tn[Mn] = null));
  }
  function Rg(n, i) {
    ((Tn[Mn++] = Wn),
      (Tn[Mn++] = Fn),
      (Tn[Mn++] = Hr),
      (Wn = i.id),
      (Fn = i.overflow),
      (Hr = n));
  }
  var Dt = null,
    Xe = null,
    De = !1,
    Yr = null,
    Dn = !1,
    Hs = Error(a(519));
  function Ir(n) {
    var i = Error(
      a(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (jl(_n(i, n)), Hs);
  }
  function kg(n) {
    var i = n.stateNode,
      l = n.type,
      c = n.memoizedProps;
    switch (((i[Mt] = n), (i[Yt] = c), l)) {
      case "dialog":
        (_e("cancel", i), _e("close", i));
        break;
      case "iframe":
      case "object":
      case "embed":
        _e("load", i);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Fl.length; l++) _e(Fl[l], i);
        break;
      case "source":
        _e("error", i);
        break;
      case "img":
      case "image":
      case "link":
        (_e("error", i), _e("load", i));
        break;
      case "details":
        _e("toggle", i);
        break;
      case "input":
        (_e("invalid", i),
          Zp(
            i,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0,
          ));
        break;
      case "select":
        _e("invalid", i);
        break;
      case "textarea":
        (_e("invalid", i), Wp(i, c.value, c.defaultValue, c.children));
    }
    ((l = c.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      i.textContent === "" + l ||
      c.suppressHydrationWarning === !0 ||
      Jb(i.textContent, l)
        ? (c.popover != null && (_e("beforetoggle", i), _e("toggle", i)),
          c.onScroll != null && _e("scroll", i),
          c.onScrollEnd != null && _e("scrollend", i),
          c.onClick != null && (i.onclick = lr),
          (i = !0))
        : (i = !1),
      i || Ir(n, !0));
  }
  function Lg(n) {
    for (Dt = n.return; Dt; )
      switch (Dt.tag) {
        case 5:
        case 31:
        case 13:
          Dn = !1;
          return;
        case 27:
        case 3:
          Dn = !0;
          return;
        default:
          Dt = Dt.return;
      }
  }
  function Ei(n) {
    if (n !== Dt) return !1;
    if (!De) return (Lg(n), (De = !0), !1);
    var i = n.tag,
      l;
    if (
      ((l = i !== 3 && i !== 27) &&
        ((l = i === 5) &&
          ((l = n.type),
          (l =
            !(l !== "form" && l !== "button") || lv(n.type, n.memoizedProps))),
        (l = !l)),
      l && Xe && Ir(n),
      Lg(n),
      i === 13)
    ) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(a(317));
      Xe = o1(n);
    } else if (i === 31) {
      if (((n = n.memoizedState), (n = n !== null ? n.dehydrated : null), !n))
        throw Error(a(317));
      Xe = o1(n);
    } else
      i === 27
        ? ((i = Xe), aa(n.type) ? ((n = sv), (sv = null), (Xe = n)) : (Xe = i))
        : (Xe = Dt ? Cn(n.stateNode.nextSibling) : null);
    return !0;
  }
  function ja() {
    ((Xe = Dt = null), (De = !1));
  }
  function Ys() {
    var n = Yr;
    return (
      n !== null &&
        (Vt === null ? (Vt = n) : Vt.push.apply(Vt, n), (Yr = null)),
      n
    );
  }
  function jl(n) {
    Yr === null ? (Yr = [n]) : Yr.push(n);
  }
  var Is = D(null),
    Ca = null,
    fr = null;
  function Kr(n, i, l) {
    (te(Is, i._currentValue), (i._currentValue = l));
  }
  function sr(n) {
    ((n._currentValue = Is.current), L(Is));
  }
  function Ks(n, i, l) {
    for (; n !== null; ) {
      var c = n.alternate;
      if (
        ((n.childLanes & i) !== i
          ? ((n.childLanes |= i), c !== null && (c.childLanes |= i))
          : c !== null && (c.childLanes & i) !== i && (c.childLanes |= i),
        n === l)
      )
        break;
      n = n.return;
    }
  }
  function Gs(n, i, l, c) {
    var d = n.child;
    for (d !== null && (d.return = n); d !== null; ) {
      var y = d.dependencies;
      if (y !== null) {
        var x = d.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var E = y;
          y = d;
          for (var j = 0; j < i.length; j++)
            if (E.context === i[j]) {
              ((y.lanes |= l),
                (E = y.alternate),
                E !== null && (E.lanes |= l),
                Ks(y.return, l, n),
                c || (x = null));
              break e;
            }
          y = E.next;
        }
      } else if (d.tag === 18) {
        if (((x = d.return), x === null)) throw Error(a(341));
        ((x.lanes |= l),
          (y = x.alternate),
          y !== null && (y.lanes |= l),
          Ks(x, l, n),
          (x = null));
      } else x = d.child;
      if (x !== null) x.return = d;
      else
        for (x = d; x !== null; ) {
          if (x === n) {
            x = null;
            break;
          }
          if (((d = x.sibling), d !== null)) {
            ((d.return = x.return), (x = d));
            break;
          }
          x = x.return;
        }
      d = x;
    }
  }
  function _i(n, i, l, c) {
    n = null;
    for (var d = i, y = !1; d !== null; ) {
      if (!y) {
        if ((d.flags & 524288) !== 0) y = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var x = d.alternate;
        if (x === null) throw Error(a(387));
        if (((x = x.memoizedProps), x !== null)) {
          var E = d.type;
          ln(d.pendingProps.value, x.value) ||
            (n !== null ? n.push(E) : (n = [E]));
        }
      } else if (d === we.current) {
        if (((x = d.alternate), x === null)) throw Error(a(387));
        x.memoizedState.memoizedState !== d.memoizedState.memoizedState &&
          (n !== null ? n.push(ru) : (n = [ru]));
      }
      d = d.return;
    }
    (n !== null && Gs(i, n, l, c), (i.flags |= 262144));
  }
  function po(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!ln(n.context._currentValue, n.memoizedValue)) return !0;
      n = n.next;
    }
    return !1;
  }
  function Pa(n) {
    ((Ca = n),
      (fr = null),
      (n = n.dependencies),
      n !== null && (n.firstContext = null));
  }
  function jt(n) {
    return Bg(Ca, n);
  }
  function go(n, i) {
    return (Ca === null && Pa(n), Bg(n, i));
  }
  function Bg(n, i) {
    var l = i._currentValue;
    if (((i = { context: i, memoizedValue: l, next: null }), fr === null)) {
      if (n === null) throw Error(a(308));
      ((fr = i),
        (n.dependencies = { lanes: 0, firstContext: i }),
        (n.flags |= 524288));
    } else fr = fr.next = i;
    return l;
  }
  var YM =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var n = [],
              i = (this.signal = {
                aborted: !1,
                addEventListener: function (l, c) {
                  n.push(c);
                },
              });
            this.abort = function () {
              ((i.aborted = !0),
                n.forEach(function (l) {
                  return l();
                }));
            };
          },
    IM = e.unstable_scheduleCallback,
    KM = e.unstable_NormalPriority,
    ot = {
      $$typeof: T,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xs() {
    return { controller: new YM(), data: new Map(), refCount: 0 };
  }
  function Cl(n) {
    (n.refCount--,
      n.refCount === 0 &&
        IM(KM, function () {
          n.controller.abort();
        }));
  }
  var Pl = null,
    Vs = 0,
    Ti = 0,
    Mi = null;
  function GM(n, i) {
    if (Pl === null) {
      var l = (Pl = []);
      ((Vs = 0),
        (Ti = Wd()),
        (Mi = {
          status: "pending",
          value: void 0,
          then: function (c) {
            l.push(c);
          },
        }));
    }
    return (Vs++, i.then(Ug, Ug), i);
  }
  function Ug() {
    if (--Vs === 0 && Pl !== null) {
      Mi !== null && (Mi.status = "fulfilled");
      var n = Pl;
      ((Pl = null), (Ti = 0), (Mi = null));
      for (var i = 0; i < n.length; i++) (0, n[i])();
    }
  }
  function XM(n, i) {
    var l = [],
      c = {
        status: "pending",
        value: null,
        reason: null,
        then: function (d) {
          l.push(d);
        },
      };
    return (
      n.then(
        function () {
          ((c.status = "fulfilled"), (c.value = i));
          for (var d = 0; d < l.length; d++) (0, l[d])(i);
        },
        function (d) {
          for (c.status = "rejected", c.reason = d, d = 0; d < l.length; d++)
            (0, l[d])(void 0);
        },
      ),
      c
    );
  }
  var $g = C.S;
  C.S = function (n, i) {
    ((Ab = nn()),
      typeof i == "object" &&
        i !== null &&
        typeof i.then == "function" &&
        GM(n, i),
      $g !== null && $g(n, i));
  };
  var Na = D(null);
  function Zs() {
    var n = Na.current;
    return n !== null ? n : Ie.pooledCache;
  }
  function bo(n, i) {
    i === null ? te(Na, Na.current) : te(Na, i.pool);
  }
  function qg() {
    var n = Zs();
    return n === null ? null : { parent: ot._currentValue, pool: n };
  }
  var Di = Error(a(460)),
    Qs = Error(a(474)),
    xo = Error(a(542)),
    So = { then: function () {} };
  function Hg(n) {
    return ((n = n.status), n === "fulfilled" || n === "rejected");
  }
  function Yg(n, i, l) {
    switch (
      ((l = n[l]),
      l === void 0 ? n.push(i) : l !== i && (i.then(lr, lr), (i = l)),
      i.status)
    ) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw ((n = i.reason), Kg(n), n);
      default:
        if (typeof i.status == "string") i.then(lr, lr);
        else {
          if (((n = Ie), n !== null && 100 < n.shellSuspendCounter))
            throw Error(a(482));
          ((n = i),
            (n.status = "pending"),
            n.then(
              function (c) {
                if (i.status === "pending") {
                  var d = i;
                  ((d.status = "fulfilled"), (d.value = c));
                }
              },
              function (c) {
                if (i.status === "pending") {
                  var d = i;
                  ((d.status = "rejected"), (d.reason = c));
                }
              },
            ));
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw ((n = i.reason), Kg(n), n);
        }
        throw ((Ra = i), Di);
    }
  }
  function za(n) {
    try {
      var i = n._init;
      return i(n._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Ra = l), Di)
        : l;
    }
  }
  var Ra = null;
  function Ig() {
    if (Ra === null) throw Error(a(459));
    var n = Ra;
    return ((Ra = null), n);
  }
  function Kg(n) {
    if (n === Di || n === xo) throw Error(a(483));
  }
  var ji = null,
    Nl = 0;
  function Oo(n) {
    var i = Nl;
    return ((Nl += 1), ji === null && (ji = []), Yg(ji, n, i));
  }
  function zl(n, i) {
    ((i = i.props.ref), (n.ref = i !== void 0 ? i : null));
  }
  function Ao(n, i) {
    throw i.$$typeof === g
      ? Error(a(525))
      : ((n = Object.prototype.toString.call(i)),
        Error(
          a(
            31,
            n === "[object Object]"
              ? "object with keys {" + Object.keys(i).join(", ") + "}"
              : n,
          ),
        ));
  }
  function Gg(n) {
    function i(k, P) {
      if (n) {
        var $ = k.deletions;
        $ === null ? ((k.deletions = [P]), (k.flags |= 16)) : $.push(P);
      }
    }
    function l(k, P) {
      if (!n) return null;
      for (; P !== null; ) (i(k, P), (P = P.sibling));
      return null;
    }
    function c(k) {
      for (var P = new Map(); k !== null; )
        (k.key !== null ? P.set(k.key, k) : P.set(k.index, k), (k = k.sibling));
      return P;
    }
    function d(k, P) {
      return ((k = or(k, P)), (k.index = 0), (k.sibling = null), k);
    }
    function y(k, P, $) {
      return (
        (k.index = $),
        n
          ? (($ = k.alternate),
            $ !== null
              ? (($ = $.index), $ < P ? ((k.flags |= 67108866), P) : $)
              : ((k.flags |= 67108866), P))
          : ((k.flags |= 1048576), P)
      );
    }
    function x(k) {
      return (n && k.alternate === null && (k.flags |= 67108866), k);
    }
    function E(k, P, $, Z) {
      return P === null || P.tag !== 6
        ? ((P = Bs($, k.mode, Z)), (P.return = k), P)
        : ((P = d(P, $)), (P.return = k), P);
    }
    function j(k, P, $, Z) {
      var me = $.type;
      return me === S
        ? G(k, P, $.props.children, Z, $.key)
        : P !== null &&
            (P.elementType === me ||
              (typeof me == "object" &&
                me !== null &&
                me.$$typeof === X &&
                za(me) === P.type))
          ? ((P = d(P, $.props)), zl(P, $), (P.return = k), P)
          : ((P = mo($.type, $.key, $.props, null, k.mode, Z)),
            zl(P, $),
            (P.return = k),
            P);
    }
    function q(k, P, $, Z) {
      return P === null ||
        P.tag !== 4 ||
        P.stateNode.containerInfo !== $.containerInfo ||
        P.stateNode.implementation !== $.implementation
        ? ((P = Us($, k.mode, Z)), (P.return = k), P)
        : ((P = d(P, $.children || [])), (P.return = k), P);
    }
    function G(k, P, $, Z, me) {
      return P === null || P.tag !== 7
        ? ((P = Da($, k.mode, Z, me)), (P.return = k), P)
        : ((P = d(P, $)), (P.return = k), P);
    }
    function Q(k, P, $) {
      if (
        (typeof P == "string" && P !== "") ||
        typeof P == "number" ||
        typeof P == "bigint"
      )
        return ((P = Bs("" + P, k.mode, $)), (P.return = k), P);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case b:
            return (
              ($ = mo(P.type, P.key, P.props, null, k.mode, $)),
              zl($, P),
              ($.return = k),
              $
            );
          case O:
            return ((P = Us(P, k.mode, $)), (P.return = k), P);
          case X:
            return ((P = za(P)), Q(k, P, $));
        }
        if (W(P) || ne(P))
          return ((P = Da(P, k.mode, $, null)), (P.return = k), P);
        if (typeof P.then == "function") return Q(k, Oo(P), $);
        if (P.$$typeof === T) return Q(k, go(k, P), $);
        Ao(k, P);
      }
      return null;
    }
    function H(k, P, $, Z) {
      var me = P !== null ? P.key : null;
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return me !== null ? null : E(k, P, "" + $, Z);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case b:
            return $.key === me ? j(k, P, $, Z) : null;
          case O:
            return $.key === me ? q(k, P, $, Z) : null;
          case X:
            return (($ = za($)), H(k, P, $, Z));
        }
        if (W($) || ne($)) return me !== null ? null : G(k, P, $, Z, null);
        if (typeof $.then == "function") return H(k, P, Oo($), Z);
        if ($.$$typeof === T) return H(k, P, go(k, $), Z);
        Ao(k, $);
      }
      return null;
    }
    function Y(k, P, $, Z, me) {
      if (
        (typeof Z == "string" && Z !== "") ||
        typeof Z == "number" ||
        typeof Z == "bigint"
      )
        return ((k = k.get($) || null), E(P, k, "" + Z, me));
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case b:
            return (
              (k = k.get(Z.key === null ? $ : Z.key) || null),
              j(P, k, Z, me)
            );
          case O:
            return (
              (k = k.get(Z.key === null ? $ : Z.key) || null),
              q(P, k, Z, me)
            );
          case X:
            return ((Z = za(Z)), Y(k, P, $, Z, me));
        }
        if (W(Z) || ne(Z))
          return ((k = k.get($) || null), G(P, k, Z, me, null));
        if (typeof Z.then == "function") return Y(k, P, $, Oo(Z), me);
        if (Z.$$typeof === T) return Y(k, P, $, go(P, Z), me);
        Ao(P, Z);
      }
      return null;
    }
    function fe(k, P, $, Z) {
      for (
        var me = null, Ce = null, de = P, Ae = (P = 0), Me = null;
        de !== null && Ae < $.length;
        Ae++
      ) {
        de.index > Ae ? ((Me = de), (de = null)) : (Me = de.sibling);
        var Pe = H(k, de, $[Ae], Z);
        if (Pe === null) {
          de === null && (de = Me);
          break;
        }
        (n && de && Pe.alternate === null && i(k, de),
          (P = y(Pe, P, Ae)),
          Ce === null ? (me = Pe) : (Ce.sibling = Pe),
          (Ce = Pe),
          (de = Me));
      }
      if (Ae === $.length) return (l(k, de), De && cr(k, Ae), me);
      if (de === null) {
        for (; Ae < $.length; Ae++)
          ((de = Q(k, $[Ae], Z)),
            de !== null &&
              ((P = y(de, P, Ae)),
              Ce === null ? (me = de) : (Ce.sibling = de),
              (Ce = de)));
        return (De && cr(k, Ae), me);
      }
      for (de = c(de); Ae < $.length; Ae++)
        ((Me = Y(de, k, Ae, $[Ae], Z)),
          Me !== null &&
            (n &&
              Me.alternate !== null &&
              de.delete(Me.key === null ? Ae : Me.key),
            (P = y(Me, P, Ae)),
            Ce === null ? (me = Me) : (Ce.sibling = Me),
            (Ce = Me)));
      return (
        n &&
          de.forEach(function (ca) {
            return i(k, ca);
          }),
        De && cr(k, Ae),
        me
      );
    }
    function pe(k, P, $, Z) {
      if ($ == null) throw Error(a(151));
      for (
        var me = null,
          Ce = null,
          de = P,
          Ae = (P = 0),
          Me = null,
          Pe = $.next();
        de !== null && !Pe.done;
        Ae++, Pe = $.next()
      ) {
        de.index > Ae ? ((Me = de), (de = null)) : (Me = de.sibling);
        var ca = H(k, de, Pe.value, Z);
        if (ca === null) {
          de === null && (de = Me);
          break;
        }
        (n && de && ca.alternate === null && i(k, de),
          (P = y(ca, P, Ae)),
          Ce === null ? (me = ca) : (Ce.sibling = ca),
          (Ce = ca),
          (de = Me));
      }
      if (Pe.done) return (l(k, de), De && cr(k, Ae), me);
      if (de === null) {
        for (; !Pe.done; Ae++, Pe = $.next())
          ((Pe = Q(k, Pe.value, Z)),
            Pe !== null &&
              ((P = y(Pe, P, Ae)),
              Ce === null ? (me = Pe) : (Ce.sibling = Pe),
              (Ce = Pe)));
        return (De && cr(k, Ae), me);
      }
      for (de = c(de); !Pe.done; Ae++, Pe = $.next())
        ((Pe = Y(de, k, Ae, Pe.value, Z)),
          Pe !== null &&
            (n &&
              Pe.alternate !== null &&
              de.delete(Pe.key === null ? Ae : Pe.key),
            (P = y(Pe, P, Ae)),
            Ce === null ? (me = Pe) : (Ce.sibling = Pe),
            (Ce = Pe)));
      return (
        n &&
          de.forEach(function (aj) {
            return i(k, aj);
          }),
        De && cr(k, Ae),
        me
      );
    }
    function He(k, P, $, Z) {
      if (
        (typeof $ == "object" &&
          $ !== null &&
          $.type === S &&
          $.key === null &&
          ($ = $.props.children),
        typeof $ == "object" && $ !== null)
      ) {
        switch ($.$$typeof) {
          case b:
            e: {
              for (var me = $.key; P !== null; ) {
                if (P.key === me) {
                  if (((me = $.type), me === S)) {
                    if (P.tag === 7) {
                      (l(k, P.sibling),
                        (Z = d(P, $.props.children)),
                        (Z.return = k),
                        (k = Z));
                      break e;
                    }
                  } else if (
                    P.elementType === me ||
                    (typeof me == "object" &&
                      me !== null &&
                      me.$$typeof === X &&
                      za(me) === P.type)
                  ) {
                    (l(k, P.sibling),
                      (Z = d(P, $.props)),
                      zl(Z, $),
                      (Z.return = k),
                      (k = Z));
                    break e;
                  }
                  l(k, P);
                  break;
                } else i(k, P);
                P = P.sibling;
              }
              $.type === S
                ? ((Z = Da($.props.children, k.mode, Z, $.key)),
                  (Z.return = k),
                  (k = Z))
                : ((Z = mo($.type, $.key, $.props, null, k.mode, Z)),
                  zl(Z, $),
                  (Z.return = k),
                  (k = Z));
            }
            return x(k);
          case O:
            e: {
              for (me = $.key; P !== null; ) {
                if (P.key === me)
                  if (
                    P.tag === 4 &&
                    P.stateNode.containerInfo === $.containerInfo &&
                    P.stateNode.implementation === $.implementation
                  ) {
                    (l(k, P.sibling),
                      (Z = d(P, $.children || [])),
                      (Z.return = k),
                      (k = Z));
                    break e;
                  } else {
                    l(k, P);
                    break;
                  }
                else i(k, P);
                P = P.sibling;
              }
              ((Z = Us($, k.mode, Z)), (Z.return = k), (k = Z));
            }
            return x(k);
          case X:
            return (($ = za($)), He(k, P, $, Z));
        }
        if (W($)) return fe(k, P, $, Z);
        if (ne($)) {
          if (((me = ne($)), typeof me != "function")) throw Error(a(150));
          return (($ = me.call($)), pe(k, P, $, Z));
        }
        if (typeof $.then == "function") return He(k, P, Oo($), Z);
        if ($.$$typeof === T) return He(k, P, go(k, $), Z);
        Ao(k, $);
      }
      return (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
        ? (($ = "" + $),
          P !== null && P.tag === 6
            ? (l(k, P.sibling), (Z = d(P, $)), (Z.return = k), (k = Z))
            : (l(k, P), (Z = Bs($, k.mode, Z)), (Z.return = k), (k = Z)),
          x(k))
        : l(k, P);
    }
    return function (k, P, $, Z) {
      try {
        Nl = 0;
        var me = He(k, P, $, Z);
        return ((ji = null), me);
      } catch (de) {
        if (de === Di || de === xo) throw de;
        var Ce = un(29, de, null, k.mode);
        return ((Ce.lanes = Z), (Ce.return = k), Ce);
      } finally {
      }
    };
  }
  var ka = Gg(!0),
    Xg = Gg(!1),
    Gr = !1;
  function Ws(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Fs(n, i) {
    ((n = n.updateQueue),
      i.updateQueue === n &&
        (i.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null,
        }));
  }
  function Xr(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Vr(n, i, l) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (((c = c.shared), (ze & 2) !== 0)) {
      var d = c.pending;
      return (
        d === null ? (i.next = i) : ((i.next = d.next), (d.next = i)),
        (c.pending = i),
        (i = ho(n)),
        jg(n, null, l),
        i
      );
    }
    return (vo(n, c, i, l), ho(n));
  }
  function Rl(n, i, l) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (l & 4194048) !== 0))
    ) {
      var c = i.lanes;
      ((c &= n.pendingLanes), (l |= c), (i.lanes = l), Bp(n, l));
    }
  }
  function Js(n, i) {
    var l = n.updateQueue,
      c = n.alternate;
    if (c !== null && ((c = c.updateQueue), l === c)) {
      var d = null,
        y = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var x = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (y === null ? (d = y = x) : (y = y.next = x), (l = l.next));
        } while (l !== null);
        y === null ? (d = y = i) : (y = y.next = i);
      } else d = y = i;
      ((l = {
        baseState: c.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: y,
        shared: c.shared,
        callbacks: c.callbacks,
      }),
        (n.updateQueue = l));
      return;
    }
    ((n = l.lastBaseUpdate),
      n === null ? (l.firstBaseUpdate = i) : (n.next = i),
      (l.lastBaseUpdate = i));
  }
  var ed = !1;
  function kl() {
    if (ed) {
      var n = Mi;
      if (n !== null) throw n;
    }
  }
  function Ll(n, i, l, c) {
    ed = !1;
    var d = n.updateQueue;
    Gr = !1;
    var y = d.firstBaseUpdate,
      x = d.lastBaseUpdate,
      E = d.shared.pending;
    if (E !== null) {
      d.shared.pending = null;
      var j = E,
        q = j.next;
      ((j.next = null), x === null ? (y = q) : (x.next = q), (x = j));
      var G = n.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (E = G.lastBaseUpdate),
        E !== x &&
          (E === null ? (G.firstBaseUpdate = q) : (E.next = q),
          (G.lastBaseUpdate = j)));
    }
    if (y !== null) {
      var Q = d.baseState;
      ((x = 0), (G = q = j = null), (E = y));
      do {
        var H = E.lane & -536870913,
          Y = H !== E.lane;
        if (Y ? (Te & H) === H : (c & H) === H) {
          (H !== 0 && H === Ti && (ed = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: E.tag,
                  payload: E.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var fe = n,
              pe = E;
            H = i;
            var He = l;
            switch (pe.tag) {
              case 1:
                if (((fe = pe.payload), typeof fe == "function")) {
                  Q = fe.call(He, Q, H);
                  break e;
                }
                Q = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = pe.payload),
                  (H = typeof fe == "function" ? fe.call(He, Q, H) : fe),
                  H == null)
                )
                  break e;
                Q = p({}, Q, H);
                break e;
              case 2:
                Gr = !0;
            }
          }
          ((H = E.callback),
            H !== null &&
              ((n.flags |= 64),
              Y && (n.flags |= 8192),
              (Y = d.callbacks),
              Y === null ? (d.callbacks = [H]) : Y.push(H)));
        } else
          ((Y = {
            lane: H,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            G === null ? ((q = G = Y), (j = Q)) : (G = G.next = Y),
            (x |= H));
        if (((E = E.next), E === null)) {
          if (((E = d.shared.pending), E === null)) break;
          ((Y = E),
            (E = Y.next),
            (Y.next = null),
            (d.lastBaseUpdate = Y),
            (d.shared.pending = null));
        }
      } while (!0);
      (G === null && (j = Q),
        (d.baseState = j),
        (d.firstBaseUpdate = q),
        (d.lastBaseUpdate = G),
        y === null && (d.shared.lanes = 0),
        (Jr |= x),
        (n.lanes = x),
        (n.memoizedState = Q));
    }
  }
  function Vg(n, i) {
    if (typeof n != "function") throw Error(a(191, n));
    n.call(i);
  }
  function Zg(n, i) {
    var l = n.callbacks;
    if (l !== null)
      for (n.callbacks = null, n = 0; n < l.length; n++) Vg(l[n], i);
  }
  var Ci = D(null),
    wo = D(0);
  function Qg(n, i) {
    ((n = xr), te(wo, n), te(Ci, i), (xr = n | i.baseLanes));
  }
  function td() {
    (te(wo, xr), te(Ci, Ci.current));
  }
  function nd() {
    ((xr = wo.current), L(Ci), L(wo));
  }
  var on = D(null),
    jn = null;
  function Zr(n) {
    var i = n.alternate;
    (te(at, at.current & 1),
      te(on, n),
      jn === null &&
        (i === null || Ci.current !== null || i.memoizedState !== null) &&
        (jn = n));
  }
  function rd(n) {
    (te(at, at.current), te(on, n), jn === null && (jn = n));
  }
  function Wg(n) {
    n.tag === 22
      ? (te(at, at.current), te(on, n), jn === null && (jn = n))
      : Qr();
  }
  function Qr() {
    (te(at, at.current), te(on, on.current));
  }
  function cn(n) {
    (L(on), jn === n && (jn = null), L(at));
  }
  var at = D(0);
  function Eo(n) {
    for (var i = n; i !== null; ) {
      if (i.tag === 13) {
        var l = i.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || cv(l) || fv(l)))
          return i;
      } else if (
        i.tag === 19 &&
        (i.memoizedProps.revealOrder === "forwards" ||
          i.memoizedProps.revealOrder === "backwards" ||
          i.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          i.memoizedProps.revealOrder === "together")
      ) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return null;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
    return null;
  }
  var dr = 0,
    Oe = null,
    $e = null,
    ct = null,
    _o = !1,
    Pi = !1,
    La = !1,
    To = 0,
    Bl = 0,
    Ni = null,
    VM = 0;
  function tt() {
    throw Error(a(321));
  }
  function ad(n, i) {
    if (i === null) return !1;
    for (var l = 0; l < i.length && l < n.length; l++)
      if (!ln(n[l], i[l])) return !1;
    return !0;
  }
  function id(n, i, l, c, d, y) {
    return (
      (dr = y),
      (Oe = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      (C.H = n === null || n.memoizedState === null ? z0 : xd),
      (La = !1),
      (y = l(c, d)),
      (La = !1),
      Pi && (y = Jg(i, l, c, d)),
      Fg(n),
      y
    );
  }
  function Fg(n) {
    C.H = ql;
    var i = $e !== null && $e.next !== null;
    if (((dr = 0), (ct = $e = Oe = null), (_o = !1), (Bl = 0), (Ni = null), i))
      throw Error(a(300));
    n === null ||
      ft ||
      ((n = n.dependencies), n !== null && po(n) && (ft = !0));
  }
  function Jg(n, i, l, c) {
    Oe = n;
    var d = 0;
    do {
      if ((Pi && (Ni = null), (Bl = 0), (Pi = !1), 25 <= d))
        throw Error(a(301));
      if (((d += 1), (ct = $e = null), n.updateQueue != null)) {
        var y = n.updateQueue;
        ((y.lastEffect = null),
          (y.events = null),
          (y.stores = null),
          y.memoCache != null && (y.memoCache.index = 0));
      }
      ((C.H = R0), (y = i(l, c)));
    } while (Pi);
    return y;
  }
  function ZM() {
    var n = C.H,
      i = n.useState()[0];
    return (
      (i = typeof i.then == "function" ? Ul(i) : i),
      (n = n.useState()[0]),
      ($e !== null ? $e.memoizedState : null) !== n && (Oe.flags |= 1024),
      i
    );
  }
  function ld() {
    var n = To !== 0;
    return ((To = 0), n);
  }
  function ud(n, i, l) {
    ((i.updateQueue = n.updateQueue), (i.flags &= -2053), (n.lanes &= ~l));
  }
  function od(n) {
    if (_o) {
      for (n = n.memoizedState; n !== null; ) {
        var i = n.queue;
        (i !== null && (i.pending = null), (n = n.next));
      }
      _o = !1;
    }
    ((dr = 0), (ct = $e = Oe = null), (Pi = !1), (Bl = To = 0), (Ni = null));
  }
  function Ut() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ct === null ? (Oe.memoizedState = ct = n) : (ct = ct.next = n), ct);
  }
  function it() {
    if ($e === null) {
      var n = Oe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = $e.next;
    var i = ct === null ? Oe.memoizedState : ct.next;
    if (i !== null) ((ct = i), ($e = n));
    else {
      if (n === null)
        throw Oe.alternate === null ? Error(a(467)) : Error(a(310));
      (($e = n),
        (n = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        ct === null ? (Oe.memoizedState = ct = n) : (ct = ct.next = n));
    }
    return ct;
  }
  function Mo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ul(n) {
    var i = Bl;
    return (
      (Bl += 1),
      Ni === null && (Ni = []),
      (n = Yg(Ni, n, i)),
      (i = Oe),
      (ct === null ? i.memoizedState : ct.next) === null &&
        ((i = i.alternate),
        (C.H = i === null || i.memoizedState === null ? z0 : xd)),
      n
    );
  }
  function Do(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return Ul(n);
      if (n.$$typeof === T) return jt(n);
    }
    throw Error(a(438, String(n)));
  }
  function cd(n) {
    var i = null,
      l = Oe.updateQueue;
    if ((l !== null && (i = l.memoCache), i == null)) {
      var c = Oe.alternate;
      c !== null &&
        ((c = c.updateQueue),
        c !== null &&
          ((c = c.memoCache),
          c != null &&
            (i = {
              data: c.data.map(function (d) {
                return d.slice();
              }),
              index: 0,
            })));
    }
    if (
      (i == null && (i = { data: [], index: 0 }),
      l === null && ((l = Mo()), (Oe.updateQueue = l)),
      (l.memoCache = i),
      (l = i.data[i.index]),
      l === void 0)
    )
      for (l = i.data[i.index] = Array(n), c = 0; c < n; c++) l[c] = ae;
    return (i.index++, l);
  }
  function vr(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function jo(n) {
    var i = it();
    return fd(i, $e, n);
  }
  function fd(n, i, l) {
    var c = n.queue;
    if (c === null) throw Error(a(311));
    c.lastRenderedReducer = l;
    var d = n.baseQueue,
      y = c.pending;
    if (y !== null) {
      if (d !== null) {
        var x = d.next;
        ((d.next = y.next), (y.next = x));
      }
      ((i.baseQueue = d = y), (c.pending = null));
    }
    if (((y = n.baseState), d === null)) n.memoizedState = y;
    else {
      i = d.next;
      var E = (x = null),
        j = null,
        q = i,
        G = !1;
      do {
        var Q = q.lane & -536870913;
        if (Q !== q.lane ? (Te & Q) === Q : (dr & Q) === Q) {
          var H = q.revertLane;
          if (H === 0)
            (j !== null &&
              (j = j.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: q.action,
                  hasEagerState: q.hasEagerState,
                  eagerState: q.eagerState,
                  next: null,
                }),
              Q === Ti && (G = !0));
          else if ((dr & H) === H) {
            ((q = q.next), H === Ti && (G = !0));
            continue;
          } else
            ((Q = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null,
            }),
              j === null ? ((E = j = Q), (x = y)) : (j = j.next = Q),
              (Oe.lanes |= H),
              (Jr |= H));
          ((Q = q.action),
            La && l(y, Q),
            (y = q.hasEagerState ? q.eagerState : l(y, Q)));
        } else
          ((H = {
            lane: Q,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null,
          }),
            j === null ? ((E = j = H), (x = y)) : (j = j.next = H),
            (Oe.lanes |= Q),
            (Jr |= Q));
        q = q.next;
      } while (q !== null && q !== i);
      if (
        (j === null ? (x = y) : (j.next = E),
        !ln(y, n.memoizedState) && ((ft = !0), G && ((l = Mi), l !== null)))
      )
        throw l;
      ((n.memoizedState = y),
        (n.baseState = x),
        (n.baseQueue = j),
        (c.lastRenderedState = y));
    }
    return (d === null && (c.lanes = 0), [n.memoizedState, c.dispatch]);
  }
  function sd(n) {
    var i = it(),
      l = i.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = n;
    var c = l.dispatch,
      d = l.pending,
      y = i.memoizedState;
    if (d !== null) {
      l.pending = null;
      var x = (d = d.next);
      do ((y = n(y, x.action)), (x = x.next));
      while (x !== d);
      (ln(y, i.memoizedState) || (ft = !0),
        (i.memoizedState = y),
        i.baseQueue === null && (i.baseState = y),
        (l.lastRenderedState = y));
    }
    return [y, c];
  }
  function e0(n, i, l) {
    var c = Oe,
      d = it(),
      y = De;
    if (y) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = i();
    var x = !ln(($e || d).memoizedState, l);
    if (
      (x && ((d.memoizedState = l), (ft = !0)),
      (d = d.queue),
      hd(r0.bind(null, c, d, n), [n]),
      d.getSnapshot !== i || x || (ct !== null && ct.memoizedState.tag & 1))
    ) {
      if (
        ((c.flags |= 2048),
        zi(9, { destroy: void 0 }, n0.bind(null, c, d, l, i), null),
        Ie === null)
      )
        throw Error(a(349));
      y || (dr & 127) !== 0 || t0(c, i, l);
    }
    return l;
  }
  function t0(n, i, l) {
    ((n.flags |= 16384),
      (n = { getSnapshot: i, value: l }),
      (i = Oe.updateQueue),
      i === null
        ? ((i = Mo()), (Oe.updateQueue = i), (i.stores = [n]))
        : ((l = i.stores), l === null ? (i.stores = [n]) : l.push(n)));
  }
  function n0(n, i, l, c) {
    ((i.value = l), (i.getSnapshot = c), a0(i) && i0(n));
  }
  function r0(n, i, l) {
    return l(function () {
      a0(i) && i0(n);
    });
  }
  function a0(n) {
    var i = n.getSnapshot;
    n = n.value;
    try {
      var l = i();
      return !ln(n, l);
    } catch {
      return !0;
    }
  }
  function i0(n) {
    var i = Ma(n, 2);
    i !== null && Zt(i, n, 2);
  }
  function dd(n) {
    var i = Ut();
    if (typeof n == "function") {
      var l = n;
      if (((n = l()), La)) {
        Ur(!0);
        try {
          l();
        } finally {
          Ur(!1);
        }
      }
    }
    return (
      (i.memoizedState = i.baseState = n),
      (i.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: n,
      }),
      i
    );
  }
  function l0(n, i, l, c) {
    return ((n.baseState = l), fd(n, $e, typeof c == "function" ? c : vr));
  }
  function QM(n, i, l, c, d) {
    if (No(n)) throw Error(a(485));
    if (((n = i.action), n !== null)) {
      var y = {
        payload: d,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (x) {
          y.listeners.push(x);
        },
      };
      (C.T !== null ? l(!0) : (y.isTransition = !1),
        c(y),
        (l = i.pending),
        l === null
          ? ((y.next = i.pending = y), u0(i, y))
          : ((y.next = l.next), (i.pending = l.next = y)));
    }
  }
  function u0(n, i) {
    var l = i.action,
      c = i.payload,
      d = n.state;
    if (i.isTransition) {
      var y = C.T,
        x = {};
      C.T = x;
      try {
        var E = l(d, c),
          j = C.S;
        (j !== null && j(x, E), o0(n, i, E));
      } catch (q) {
        vd(n, i, q);
      } finally {
        (y !== null && x.types !== null && (y.types = x.types), (C.T = y));
      }
    } else
      try {
        ((y = l(d, c)), o0(n, i, y));
      } catch (q) {
        vd(n, i, q);
      }
  }
  function o0(n, i, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (c) {
            c0(n, i, c);
          },
          function (c) {
            return vd(n, i, c);
          },
        )
      : c0(n, i, l);
  }
  function c0(n, i, l) {
    ((i.status = "fulfilled"),
      (i.value = l),
      f0(i),
      (n.state = l),
      (i = n.pending),
      i !== null &&
        ((l = i.next),
        l === i ? (n.pending = null) : ((l = l.next), (i.next = l), u0(n, l))));
  }
  function vd(n, i, l) {
    var c = n.pending;
    if (((n.pending = null), c !== null)) {
      c = c.next;
      do ((i.status = "rejected"), (i.reason = l), f0(i), (i = i.next));
      while (i !== c);
    }
    n.action = null;
  }
  function f0(n) {
    n = n.listeners;
    for (var i = 0; i < n.length; i++) (0, n[i])();
  }
  function s0(n, i) {
    return i;
  }
  function d0(n, i) {
    if (De) {
      var l = Ie.formState;
      if (l !== null) {
        e: {
          var c = Oe;
          if (De) {
            if (Xe) {
              t: {
                for (var d = Xe, y = Dn; d.nodeType !== 8; ) {
                  if (!y) {
                    d = null;
                    break t;
                  }
                  if (((d = Cn(d.nextSibling)), d === null)) {
                    d = null;
                    break t;
                  }
                }
                ((y = d.data), (d = y === "F!" || y === "F" ? d : null));
              }
              if (d) {
                ((Xe = Cn(d.nextSibling)), (c = d.data === "F!"));
                break e;
              }
            }
            Ir(c);
          }
          c = !1;
        }
        c && (i = l[0]);
      }
    }
    return (
      (l = Ut()),
      (l.memoizedState = l.baseState = i),
      (c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: s0,
        lastRenderedState: i,
      }),
      (l.queue = c),
      (l = C0.bind(null, Oe, c)),
      (c.dispatch = l),
      (c = dd(!1)),
      (y = bd.bind(null, Oe, !1, c.queue)),
      (c = Ut()),
      (d = { state: i, dispatch: null, action: n, pending: null }),
      (c.queue = d),
      (l = QM.bind(null, Oe, d, y, l)),
      (d.dispatch = l),
      (c.memoizedState = n),
      [i, l, !1]
    );
  }
  function v0(n) {
    var i = it();
    return h0(i, $e, n);
  }
  function h0(n, i, l) {
    if (
      ((i = fd(n, i, s0)[0]),
      (n = jo(vr)[0]),
      typeof i == "object" && i !== null && typeof i.then == "function")
    )
      try {
        var c = Ul(i);
      } catch (x) {
        throw x === Di ? xo : x;
      }
    else c = i;
    i = it();
    var d = i.queue,
      y = d.dispatch;
    return (
      l !== i.memoizedState &&
        ((Oe.flags |= 2048),
        zi(9, { destroy: void 0 }, WM.bind(null, d, l), null)),
      [c, y, n]
    );
  }
  function WM(n, i) {
    n.action = i;
  }
  function m0(n) {
    var i = it(),
      l = $e;
    if (l !== null) return h0(i, l, n);
    (it(), (i = i.memoizedState), (l = it()));
    var c = l.queue.dispatch;
    return ((l.memoizedState = n), [i, c, !1]);
  }
  function zi(n, i, l, c) {
    return (
      (n = { tag: n, create: l, deps: c, inst: i, next: null }),
      (i = Oe.updateQueue),
      i === null && ((i = Mo()), (Oe.updateQueue = i)),
      (l = i.lastEffect),
      l === null
        ? (i.lastEffect = n.next = n)
        : ((c = l.next), (l.next = n), (n.next = c), (i.lastEffect = n)),
      n
    );
  }
  function y0() {
    return it().memoizedState;
  }
  function Co(n, i, l, c) {
    var d = Ut();
    ((Oe.flags |= n),
      (d.memoizedState = zi(
        1 | i,
        { destroy: void 0 },
        l,
        c === void 0 ? null : c,
      )));
  }
  function Po(n, i, l, c) {
    var d = it();
    c = c === void 0 ? null : c;
    var y = d.memoizedState.inst;
    $e !== null && c !== null && ad(c, $e.memoizedState.deps)
      ? (d.memoizedState = zi(i, y, l, c))
      : ((Oe.flags |= n), (d.memoizedState = zi(1 | i, y, l, c)));
  }
  function p0(n, i) {
    Co(8390656, 8, n, i);
  }
  function hd(n, i) {
    Po(2048, 8, n, i);
  }
  function FM(n) {
    Oe.flags |= 4;
    var i = Oe.updateQueue;
    if (i === null) ((i = Mo()), (Oe.updateQueue = i), (i.events = [n]));
    else {
      var l = i.events;
      l === null ? (i.events = [n]) : l.push(n);
    }
  }
  function g0(n) {
    var i = it().memoizedState;
    return (
      FM({ ref: i, nextImpl: n }),
      function () {
        if ((ze & 2) !== 0) throw Error(a(440));
        return i.impl.apply(void 0, arguments);
      }
    );
  }
  function b0(n, i) {
    return Po(4, 2, n, i);
  }
  function x0(n, i) {
    return Po(4, 4, n, i);
  }
  function S0(n, i) {
    if (typeof i == "function") {
      n = n();
      var l = i(n);
      return function () {
        typeof l == "function" ? l() : i(null);
      };
    }
    if (i != null)
      return (
        (n = n()),
        (i.current = n),
        function () {
          i.current = null;
        }
      );
  }
  function O0(n, i, l) {
    ((l = l != null ? l.concat([n]) : null), Po(4, 4, S0.bind(null, i, n), l));
  }
  function md() {}
  function A0(n, i) {
    var l = it();
    i = i === void 0 ? null : i;
    var c = l.memoizedState;
    return i !== null && ad(i, c[1]) ? c[0] : ((l.memoizedState = [n, i]), n);
  }
  function w0(n, i) {
    var l = it();
    i = i === void 0 ? null : i;
    var c = l.memoizedState;
    if (i !== null && ad(i, c[1])) return c[0];
    if (((c = n()), La)) {
      Ur(!0);
      try {
        n();
      } finally {
        Ur(!1);
      }
    }
    return ((l.memoizedState = [c, i]), c);
  }
  function yd(n, i, l) {
    return l === void 0 || ((dr & 1073741824) !== 0 && (Te & 261930) === 0)
      ? (n.memoizedState = i)
      : ((n.memoizedState = l), (n = Eb()), (Oe.lanes |= n), (Jr |= n), l);
  }
  function E0(n, i, l, c) {
    return ln(l, i)
      ? l
      : Ci.current !== null
        ? ((n = yd(n, l, c)), ln(n, i) || (ft = !0), n)
        : (dr & 42) === 0 || ((dr & 1073741824) !== 0 && (Te & 261930) === 0)
          ? ((ft = !0), (n.memoizedState = l))
          : ((n = Eb()), (Oe.lanes |= n), (Jr |= n), i);
  }
  function _0(n, i, l, c, d) {
    var y = U.p;
    U.p = y !== 0 && 8 > y ? y : 8;
    var x = C.T,
      E = {};
    ((C.T = E), bd(n, !1, i, l));
    try {
      var j = d(),
        q = C.S;
      if (
        (q !== null && q(E, j),
        j !== null && typeof j == "object" && typeof j.then == "function")
      ) {
        var G = XM(j, c);
        $l(n, i, G, dn(n));
      } else $l(n, i, c, dn(n));
    } catch (Q) {
      $l(n, i, { then: function () {}, status: "rejected", reason: Q }, dn());
    } finally {
      ((U.p = y),
        x !== null && E.types !== null && (x.types = E.types),
        (C.T = x));
    }
  }
  function JM() {}
  function pd(n, i, l, c) {
    if (n.tag !== 5) throw Error(a(476));
    var d = T0(n).queue;
    _0(
      n,
      d,
      i,
      I,
      l === null
        ? JM
        : function () {
            return (M0(n), l(c));
          },
    );
  }
  function T0(n) {
    var i = n.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: I,
      },
      next: null,
    };
    var l = {};
    return (
      (i.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vr,
          lastRenderedState: l,
        },
        next: null,
      }),
      (n.memoizedState = i),
      (n = n.alternate),
      n !== null && (n.memoizedState = i),
      i
    );
  }
  function M0(n) {
    var i = T0(n);
    (i.next === null && (i = n.alternate.memoizedState),
      $l(n, i.next.queue, {}, dn()));
  }
  function gd() {
    return jt(ru);
  }
  function D0() {
    return it().memoizedState;
  }
  function j0() {
    return it().memoizedState;
  }
  function eD(n) {
    for (var i = n.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var l = dn();
          n = Xr(l);
          var c = Vr(i, n, l);
          (c !== null && (Zt(c, i, l), Rl(c, i, l)),
            (i = { cache: Xs() }),
            (n.payload = i));
          return;
      }
      i = i.return;
    }
  }
  function tD(n, i, l) {
    var c = dn();
    ((l = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      No(n)
        ? P0(i, l)
        : ((l = ks(n, i, l, c)), l !== null && (Zt(l, n, c), N0(l, i, c))));
  }
  function C0(n, i, l) {
    var c = dn();
    $l(n, i, l, c);
  }
  function $l(n, i, l, c) {
    var d = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (No(n)) P0(i, d);
    else {
      var y = n.alternate;
      if (
        n.lanes === 0 &&
        (y === null || y.lanes === 0) &&
        ((y = i.lastRenderedReducer), y !== null)
      )
        try {
          var x = i.lastRenderedState,
            E = y(x, l);
          if (((d.hasEagerState = !0), (d.eagerState = E), ln(E, x)))
            return (vo(n, i, d, 0), Ie === null && so(), !1);
        } catch {
        } finally {
        }
      if (((l = ks(n, i, d, c)), l !== null))
        return (Zt(l, n, c), N0(l, i, c), !0);
    }
    return !1;
  }
  function bd(n, i, l, c) {
    if (
      ((c = {
        lane: 2,
        revertLane: Wd(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      No(n))
    ) {
      if (i) throw Error(a(479));
    } else ((i = ks(n, l, c, 2)), i !== null && Zt(i, n, 2));
  }
  function No(n) {
    var i = n.alternate;
    return n === Oe || (i !== null && i === Oe);
  }
  function P0(n, i) {
    Pi = _o = !0;
    var l = n.pending;
    (l === null ? (i.next = i) : ((i.next = l.next), (l.next = i)),
      (n.pending = i));
  }
  function N0(n, i, l) {
    if ((l & 4194048) !== 0) {
      var c = i.lanes;
      ((c &= n.pendingLanes), (l |= c), (i.lanes = l), Bp(n, l));
    }
  }
  var ql = {
    readContext: jt,
    use: Do,
    useCallback: tt,
    useContext: tt,
    useEffect: tt,
    useImperativeHandle: tt,
    useLayoutEffect: tt,
    useInsertionEffect: tt,
    useMemo: tt,
    useReducer: tt,
    useRef: tt,
    useState: tt,
    useDebugValue: tt,
    useDeferredValue: tt,
    useTransition: tt,
    useSyncExternalStore: tt,
    useId: tt,
    useHostTransitionStatus: tt,
    useFormState: tt,
    useActionState: tt,
    useOptimistic: tt,
    useMemoCache: tt,
    useCacheRefresh: tt,
  };
  ql.useEffectEvent = tt;
  var z0 = {
      readContext: jt,
      use: Do,
      useCallback: function (n, i) {
        return ((Ut().memoizedState = [n, i === void 0 ? null : i]), n);
      },
      useContext: jt,
      useEffect: p0,
      useImperativeHandle: function (n, i, l) {
        ((l = l != null ? l.concat([n]) : null),
          Co(4194308, 4, S0.bind(null, i, n), l));
      },
      useLayoutEffect: function (n, i) {
        return Co(4194308, 4, n, i);
      },
      useInsertionEffect: function (n, i) {
        Co(4, 2, n, i);
      },
      useMemo: function (n, i) {
        var l = Ut();
        i = i === void 0 ? null : i;
        var c = n();
        if (La) {
          Ur(!0);
          try {
            n();
          } finally {
            Ur(!1);
          }
        }
        return ((l.memoizedState = [c, i]), c);
      },
      useReducer: function (n, i, l) {
        var c = Ut();
        if (l !== void 0) {
          var d = l(i);
          if (La) {
            Ur(!0);
            try {
              l(i);
            } finally {
              Ur(!1);
            }
          }
        } else d = i;
        return (
          (c.memoizedState = c.baseState = d),
          (n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: d,
          }),
          (c.queue = n),
          (n = n.dispatch = tD.bind(null, Oe, n)),
          [c.memoizedState, n]
        );
      },
      useRef: function (n) {
        var i = Ut();
        return ((n = { current: n }), (i.memoizedState = n));
      },
      useState: function (n) {
        n = dd(n);
        var i = n.queue,
          l = C0.bind(null, Oe, i);
        return ((i.dispatch = l), [n.memoizedState, l]);
      },
      useDebugValue: md,
      useDeferredValue: function (n, i) {
        var l = Ut();
        return yd(l, n, i);
      },
      useTransition: function () {
        var n = dd(!1);
        return (
          (n = _0.bind(null, Oe, n.queue, !0, !1)),
          (Ut().memoizedState = n),
          [!1, n]
        );
      },
      useSyncExternalStore: function (n, i, l) {
        var c = Oe,
          d = Ut();
        if (De) {
          if (l === void 0) throw Error(a(407));
          l = l();
        } else {
          if (((l = i()), Ie === null)) throw Error(a(349));
          (Te & 127) !== 0 || t0(c, i, l);
        }
        d.memoizedState = l;
        var y = { value: l, getSnapshot: i };
        return (
          (d.queue = y),
          p0(r0.bind(null, c, y, n), [n]),
          (c.flags |= 2048),
          zi(9, { destroy: void 0 }, n0.bind(null, c, y, l, i), null),
          l
        );
      },
      useId: function () {
        var n = Ut(),
          i = Ie.identifierPrefix;
        if (De) {
          var l = Fn,
            c = Wn;
          ((l = (c & ~(1 << (32 - an(c) - 1))).toString(32) + l),
            (i = "_" + i + "R_" + l),
            (l = To++),
            0 < l && (i += "H" + l.toString(32)),
            (i += "_"));
        } else ((l = VM++), (i = "_" + i + "r_" + l.toString(32) + "_"));
        return (n.memoizedState = i);
      },
      useHostTransitionStatus: gd,
      useFormState: d0,
      useActionState: d0,
      useOptimistic: function (n) {
        var i = Ut();
        i.memoizedState = i.baseState = n;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (i.queue = l),
          (i = bd.bind(null, Oe, !0, l)),
          (l.dispatch = i),
          [n, i]
        );
      },
      useMemoCache: cd,
      useCacheRefresh: function () {
        return (Ut().memoizedState = eD.bind(null, Oe));
      },
      useEffectEvent: function (n) {
        var i = Ut(),
          l = { impl: n };
        return (
          (i.memoizedState = l),
          function () {
            if ((ze & 2) !== 0) throw Error(a(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    xd = {
      readContext: jt,
      use: Do,
      useCallback: A0,
      useContext: jt,
      useEffect: hd,
      useImperativeHandle: O0,
      useInsertionEffect: b0,
      useLayoutEffect: x0,
      useMemo: w0,
      useReducer: jo,
      useRef: y0,
      useState: function () {
        return jo(vr);
      },
      useDebugValue: md,
      useDeferredValue: function (n, i) {
        var l = it();
        return E0(l, $e.memoizedState, n, i);
      },
      useTransition: function () {
        var n = jo(vr)[0],
          i = it().memoizedState;
        return [typeof n == "boolean" ? n : Ul(n), i];
      },
      useSyncExternalStore: e0,
      useId: D0,
      useHostTransitionStatus: gd,
      useFormState: v0,
      useActionState: v0,
      useOptimistic: function (n, i) {
        var l = it();
        return l0(l, $e, n, i);
      },
      useMemoCache: cd,
      useCacheRefresh: j0,
    };
  xd.useEffectEvent = g0;
  var R0 = {
    readContext: jt,
    use: Do,
    useCallback: A0,
    useContext: jt,
    useEffect: hd,
    useImperativeHandle: O0,
    useInsertionEffect: b0,
    useLayoutEffect: x0,
    useMemo: w0,
    useReducer: sd,
    useRef: y0,
    useState: function () {
      return sd(vr);
    },
    useDebugValue: md,
    useDeferredValue: function (n, i) {
      var l = it();
      return $e === null ? yd(l, n, i) : E0(l, $e.memoizedState, n, i);
    },
    useTransition: function () {
      var n = sd(vr)[0],
        i = it().memoizedState;
      return [typeof n == "boolean" ? n : Ul(n), i];
    },
    useSyncExternalStore: e0,
    useId: D0,
    useHostTransitionStatus: gd,
    useFormState: m0,
    useActionState: m0,
    useOptimistic: function (n, i) {
      var l = it();
      return $e !== null
        ? l0(l, $e, n, i)
        : ((l.baseState = n), [n, l.queue.dispatch]);
    },
    useMemoCache: cd,
    useCacheRefresh: j0,
  };
  R0.useEffectEvent = g0;
  function Sd(n, i, l, c) {
    ((i = n.memoizedState),
      (l = l(c, i)),
      (l = l == null ? i : p({}, i, l)),
      (n.memoizedState = l),
      n.lanes === 0 && (n.updateQueue.baseState = l));
  }
  var Od = {
    enqueueSetState: function (n, i, l) {
      n = n._reactInternals;
      var c = dn(),
        d = Xr(c);
      ((d.payload = i),
        l != null && (d.callback = l),
        (i = Vr(n, d, c)),
        i !== null && (Zt(i, n, c), Rl(i, n, c)));
    },
    enqueueReplaceState: function (n, i, l) {
      n = n._reactInternals;
      var c = dn(),
        d = Xr(c);
      ((d.tag = 1),
        (d.payload = i),
        l != null && (d.callback = l),
        (i = Vr(n, d, c)),
        i !== null && (Zt(i, n, c), Rl(i, n, c)));
    },
    enqueueForceUpdate: function (n, i) {
      n = n._reactInternals;
      var l = dn(),
        c = Xr(l);
      ((c.tag = 2),
        i != null && (c.callback = i),
        (i = Vr(n, c, l)),
        i !== null && (Zt(i, n, l), Rl(i, n, l)));
    },
  };
  function k0(n, i, l, c, d, y, x) {
    return (
      (n = n.stateNode),
      typeof n.shouldComponentUpdate == "function"
        ? n.shouldComponentUpdate(c, y, x)
        : i.prototype && i.prototype.isPureReactComponent
          ? !Tl(l, c) || !Tl(d, y)
          : !0
    );
  }
  function L0(n, i, l, c) {
    ((n = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(l, c),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(l, c),
      i.state !== n && Od.enqueueReplaceState(i, i.state, null));
  }
  function Ba(n, i) {
    var l = i;
    if ("ref" in i) {
      l = {};
      for (var c in i) c !== "ref" && (l[c] = i[c]);
    }
    if ((n = n.defaultProps)) {
      l === i && (l = p({}, l));
      for (var d in n) l[d] === void 0 && (l[d] = n[d]);
    }
    return l;
  }
  function B0(n) {
    fo(n);
  }
  function U0(n) {
    console.error(n);
  }
  function $0(n) {
    fo(n);
  }
  function zo(n, i) {
    try {
      var l = n.onUncaughtError;
      l(i.value, { componentStack: i.stack });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function q0(n, i, l) {
    try {
      var c = n.onCaughtError;
      c(l.value, {
        componentStack: l.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null,
      });
    } catch (d) {
      setTimeout(function () {
        throw d;
      });
    }
  }
  function Ad(n, i, l) {
    return (
      (l = Xr(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        zo(n, i);
      }),
      l
    );
  }
  function H0(n) {
    return ((n = Xr(n)), (n.tag = 3), n);
  }
  function Y0(n, i, l, c) {
    var d = l.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var y = c.value;
      ((n.payload = function () {
        return d(y);
      }),
        (n.callback = function () {
          q0(i, l, c);
        }));
    }
    var x = l.stateNode;
    x !== null &&
      typeof x.componentDidCatch == "function" &&
      (n.callback = function () {
        (q0(i, l, c),
          typeof d != "function" &&
            (ea === null ? (ea = new Set([this])) : ea.add(this)));
        var E = c.stack;
        this.componentDidCatch(c.value, {
          componentStack: E !== null ? E : "",
        });
      });
  }
  function nD(n, i, l, c, d) {
    if (
      ((l.flags |= 32768),
      c !== null && typeof c == "object" && typeof c.then == "function")
    ) {
      if (
        ((i = l.alternate),
        i !== null && _i(i, l, d, !0),
        (l = on.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              jn === null ? Go() : l.alternate === null && nt === 0 && (nt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = d),
              c === So
                ? (l.flags |= 16384)
                : ((i = l.updateQueue),
                  i === null ? (l.updateQueue = new Set([c])) : i.add(c),
                  Vd(n, c, d)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              c === So
                ? (l.flags |= 16384)
                : ((i = l.updateQueue),
                  i === null
                    ? ((i = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([c]),
                      }),
                      (l.updateQueue = i))
                    : ((l = i.retryQueue),
                      l === null ? (i.retryQueue = new Set([c])) : l.add(c)),
                  Vd(n, c, d)),
              !1
            );
        }
        throw Error(a(435, l.tag));
      }
      return (Vd(n, c, d), Go(), !1);
    }
    if (De)
      return (
        (i = on.current),
        i !== null
          ? ((i.flags & 65536) === 0 && (i.flags |= 256),
            (i.flags |= 65536),
            (i.lanes = d),
            c !== Hs && ((n = Error(a(422), { cause: c })), jl(_n(n, l))))
          : (c !== Hs && ((i = Error(a(423), { cause: c })), jl(_n(i, l))),
            (n = n.current.alternate),
            (n.flags |= 65536),
            (d &= -d),
            (n.lanes |= d),
            (c = _n(c, l)),
            (d = Ad(n.stateNode, c, d)),
            Js(n, d),
            nt !== 4 && (nt = 2)),
        !1
      );
    var y = Error(a(520), { cause: c });
    if (
      ((y = _n(y, l)),
      Zl === null ? (Zl = [y]) : Zl.push(y),
      nt !== 4 && (nt = 2),
      i === null)
    )
      return !0;
    ((c = _n(c, l)), (l = i));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (n = d & -d),
            (l.lanes |= n),
            (n = Ad(l.stateNode, c, n)),
            Js(l, n),
            !1
          );
        case 1:
          if (
            ((i = l.type),
            (y = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof i.getDerivedStateFromError == "function" ||
                (y !== null &&
                  typeof y.componentDidCatch == "function" &&
                  (ea === null || !ea.has(y)))))
          )
            return (
              (l.flags |= 65536),
              (d &= -d),
              (l.lanes |= d),
              (d = H0(d)),
              Y0(d, n, l, c),
              Js(l, d),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var wd = Error(a(461)),
    ft = !1;
  function Ct(n, i, l, c) {
    i.child = n === null ? Xg(i, null, l, c) : ka(i, n.child, l, c);
  }
  function I0(n, i, l, c, d) {
    l = l.render;
    var y = i.ref;
    if ("ref" in c) {
      var x = {};
      for (var E in c) E !== "ref" && (x[E] = c[E]);
    } else x = c;
    return (
      Pa(i),
      (c = id(n, i, l, x, y, d)),
      (E = ld()),
      n !== null && !ft
        ? (ud(n, i, d), hr(n, i, d))
        : (De && E && $s(i), (i.flags |= 1), Ct(n, i, c, d), i.child)
    );
  }
  function K0(n, i, l, c, d) {
    if (n === null) {
      var y = l.type;
      return typeof y == "function" &&
        !Ls(y) &&
        y.defaultProps === void 0 &&
        l.compare === null
        ? ((i.tag = 15), (i.type = y), G0(n, i, y, c, d))
        : ((n = mo(l.type, null, c, i, i.mode, d)),
          (n.ref = i.ref),
          (n.return = i),
          (i.child = n));
    }
    if (((y = n.child), !Pd(n, d))) {
      var x = y.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Tl), l(x, c) && n.ref === i.ref)
      )
        return hr(n, i, d);
    }
    return (
      (i.flags |= 1),
      (n = or(y, c)),
      (n.ref = i.ref),
      (n.return = i),
      (i.child = n)
    );
  }
  function G0(n, i, l, c, d) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (Tl(y, c) && n.ref === i.ref)
        if (((ft = !1), (i.pendingProps = c = y), Pd(n, d)))
          (n.flags & 131072) !== 0 && (ft = !0);
        else return ((i.lanes = n.lanes), hr(n, i, d));
    }
    return Ed(n, i, l, c, d);
  }
  function X0(n, i, l, c) {
    var d = c.children,
      y = n !== null ? n.memoizedState : null;
    if (
      (n === null &&
        i.stateNode === null &&
        (i.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      c.mode === "hidden")
    ) {
      if ((i.flags & 128) !== 0) {
        if (((y = y !== null ? y.baseLanes | l : l), n !== null)) {
          for (c = i.child = n.child, d = 0; c !== null; )
            ((d = d | c.lanes | c.childLanes), (c = c.sibling));
          c = d & ~y;
        } else ((c = 0), (i.child = null));
        return V0(n, i, y, l, c);
      }
      if ((l & 536870912) !== 0)
        ((i.memoizedState = { baseLanes: 0, cachePool: null }),
          n !== null && bo(i, y !== null ? y.cachePool : null),
          y !== null ? Qg(i, y) : td(),
          Wg(i));
      else
        return (
          (c = i.lanes = 536870912),
          V0(n, i, y !== null ? y.baseLanes | l : l, l, c)
        );
    } else
      y !== null
        ? (bo(i, y.cachePool), Qg(i, y), Qr(), (i.memoizedState = null))
        : (n !== null && bo(i, null), td(), Qr());
    return (Ct(n, i, d, l), i.child);
  }
  function Hl(n, i) {
    return (
      (n !== null && n.tag === 22) ||
        i.stateNode !== null ||
        (i.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.sibling
    );
  }
  function V0(n, i, l, c, d) {
    var y = Zs();
    return (
      (y = y === null ? null : { parent: ot._currentValue, pool: y }),
      (i.memoizedState = { baseLanes: l, cachePool: y }),
      n !== null && bo(i, null),
      td(),
      Wg(i),
      n !== null && _i(n, i, c, !0),
      (i.childLanes = d),
      null
    );
  }
  function Ro(n, i) {
    return (
      (i = Lo({ mode: i.mode, children: i.children }, n.mode)),
      (i.ref = n.ref),
      (n.child = i),
      (i.return = n),
      i
    );
  }
  function Z0(n, i, l) {
    return (
      ka(i, n.child, null, l),
      (n = Ro(i, i.pendingProps)),
      (n.flags |= 2),
      cn(i),
      (i.memoizedState = null),
      n
    );
  }
  function rD(n, i, l) {
    var c = i.pendingProps,
      d = (i.flags & 128) !== 0;
    if (((i.flags &= -129), n === null)) {
      if (De) {
        if (c.mode === "hidden")
          return ((n = Ro(i, c)), (i.lanes = 536870912), Hl(null, n));
        if (
          (rd(i),
          (n = Xe)
            ? ((n = u1(n, Dn)),
              (n = n !== null && n.data === "&" ? n : null),
              n !== null &&
                ((i.memoizedState = {
                  dehydrated: n,
                  treeContext: Hr !== null ? { id: Wn, overflow: Fn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Pg(n)),
                (l.return = i),
                (i.child = l),
                (Dt = i),
                (Xe = null)))
            : (n = null),
          n === null)
        )
          throw Ir(i);
        return ((i.lanes = 536870912), null);
      }
      return Ro(i, c);
    }
    var y = n.memoizedState;
    if (y !== null) {
      var x = y.dehydrated;
      if ((rd(i), d))
        if (i.flags & 256) ((i.flags &= -257), (i = Z0(n, i, l)));
        else if (i.memoizedState !== null)
          ((i.child = n.child), (i.flags |= 128), (i = null));
        else throw Error(a(558));
      else if (
        (ft || _i(n, i, l, !1), (d = (l & n.childLanes) !== 0), ft || d)
      ) {
        if (
          ((c = Ie),
          c !== null && ((x = Up(c, l)), x !== 0 && x !== y.retryLane))
        )
          throw ((y.retryLane = x), Ma(n, x), Zt(c, n, x), wd);
        (Go(), (i = Z0(n, i, l)));
      } else
        ((n = y.treeContext),
          (Xe = Cn(x.nextSibling)),
          (Dt = i),
          (De = !0),
          (Yr = null),
          (Dn = !1),
          n !== null && Rg(i, n),
          (i = Ro(i, c)),
          (i.flags |= 4096));
      return i;
    }
    return (
      (n = or(n.child, { mode: c.mode, children: c.children })),
      (n.ref = i.ref),
      (i.child = n),
      (n.return = i),
      n
    );
  }
  function ko(n, i) {
    var l = i.ref;
    if (l === null) n !== null && n.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(a(284));
      (n === null || n.ref !== l) && (i.flags |= 4194816);
    }
  }
  function Ed(n, i, l, c, d) {
    return (
      Pa(i),
      (l = id(n, i, l, c, void 0, d)),
      (c = ld()),
      n !== null && !ft
        ? (ud(n, i, d), hr(n, i, d))
        : (De && c && $s(i), (i.flags |= 1), Ct(n, i, l, d), i.child)
    );
  }
  function Q0(n, i, l, c, d, y) {
    return (
      Pa(i),
      (i.updateQueue = null),
      (l = Jg(i, c, l, d)),
      Fg(n),
      (c = ld()),
      n !== null && !ft
        ? (ud(n, i, y), hr(n, i, y))
        : (De && c && $s(i), (i.flags |= 1), Ct(n, i, l, y), i.child)
    );
  }
  function W0(n, i, l, c, d) {
    if ((Pa(i), i.stateNode === null)) {
      var y = Oi,
        x = l.contextType;
      (typeof x == "object" && x !== null && (y = jt(x)),
        (y = new l(c, y)),
        (i.memoizedState =
          y.state !== null && y.state !== void 0 ? y.state : null),
        (y.updater = Od),
        (i.stateNode = y),
        (y._reactInternals = i),
        (y = i.stateNode),
        (y.props = c),
        (y.state = i.memoizedState),
        (y.refs = {}),
        Ws(i),
        (x = l.contextType),
        (y.context = typeof x == "object" && x !== null ? jt(x) : Oi),
        (y.state = i.memoizedState),
        (x = l.getDerivedStateFromProps),
        typeof x == "function" && (Sd(i, l, x, c), (y.state = i.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function" ||
          (typeof y.UNSAFE_componentWillMount != "function" &&
            typeof y.componentWillMount != "function") ||
          ((x = y.state),
          typeof y.componentWillMount == "function" && y.componentWillMount(),
          typeof y.UNSAFE_componentWillMount == "function" &&
            y.UNSAFE_componentWillMount(),
          x !== y.state && Od.enqueueReplaceState(y, y.state, null),
          Ll(i, c, y, d),
          kl(),
          (y.state = i.memoizedState)),
        typeof y.componentDidMount == "function" && (i.flags |= 4194308),
        (c = !0));
    } else if (n === null) {
      y = i.stateNode;
      var E = i.memoizedProps,
        j = Ba(l, E);
      y.props = j;
      var q = y.context,
        G = l.contextType;
      ((x = Oi), typeof G == "object" && G !== null && (x = jt(G)));
      var Q = l.getDerivedStateFromProps;
      ((G =
        typeof Q == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function"),
        (E = i.pendingProps !== E),
        G ||
          (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
            typeof y.componentWillReceiveProps != "function") ||
          ((E || q !== x) && L0(i, y, c, x)),
        (Gr = !1));
      var H = i.memoizedState;
      ((y.state = H),
        Ll(i, c, y, d),
        kl(),
        (q = i.memoizedState),
        E || H !== q || Gr
          ? (typeof Q == "function" && (Sd(i, l, Q, c), (q = i.memoizedState)),
            (j = Gr || k0(i, l, j, c, H, q, x))
              ? (G ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = c),
                (i.memoizedState = q)),
            (y.props = c),
            (y.state = q),
            (y.context = x),
            (c = j))
          : (typeof y.componentDidMount == "function" && (i.flags |= 4194308),
            (c = !1)));
    } else {
      ((y = i.stateNode),
        Fs(n, i),
        (x = i.memoizedProps),
        (G = Ba(l, x)),
        (y.props = G),
        (Q = i.pendingProps),
        (H = y.context),
        (q = l.contextType),
        (j = Oi),
        typeof q == "object" && q !== null && (j = jt(q)),
        (E = l.getDerivedStateFromProps),
        (q =
          typeof E == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function") ||
          (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
            typeof y.componentWillReceiveProps != "function") ||
          ((x !== Q || H !== j) && L0(i, y, c, j)),
        (Gr = !1),
        (H = i.memoizedState),
        (y.state = H),
        Ll(i, c, y, d),
        kl());
      var Y = i.memoizedState;
      x !== Q ||
      H !== Y ||
      Gr ||
      (n !== null && n.dependencies !== null && po(n.dependencies))
        ? (typeof E == "function" && (Sd(i, l, E, c), (Y = i.memoizedState)),
          (G =
            Gr ||
            k0(i, l, G, c, H, Y, j) ||
            (n !== null && n.dependencies !== null && po(n.dependencies)))
            ? (q ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(c, Y, j),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(c, Y, j)),
              typeof y.componentDidUpdate == "function" && (i.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (x === n.memoizedProps && H === n.memoizedState) ||
                (i.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (x === n.memoizedProps && H === n.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = c),
              (i.memoizedState = Y)),
          (y.props = c),
          (y.state = Y),
          (y.context = j),
          (c = G))
        : (typeof y.componentDidUpdate != "function" ||
            (x === n.memoizedProps && H === n.memoizedState) ||
            (i.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (x === n.memoizedProps && H === n.memoizedState) ||
            (i.flags |= 1024),
          (c = !1));
    }
    return (
      (y = c),
      ko(n, i),
      (c = (i.flags & 128) !== 0),
      y || c
        ? ((y = i.stateNode),
          (l =
            c && typeof l.getDerivedStateFromError != "function"
              ? null
              : y.render()),
          (i.flags |= 1),
          n !== null && c
            ? ((i.child = ka(i, n.child, null, d)),
              (i.child = ka(i, null, l, d)))
            : Ct(n, i, l, d),
          (i.memoizedState = y.state),
          (n = i.child))
        : (n = hr(n, i, d)),
      n
    );
  }
  function F0(n, i, l, c) {
    return (ja(), (i.flags |= 256), Ct(n, i, l, c), i.child);
  }
  var _d = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Td(n) {
    return { baseLanes: n, cachePool: qg() };
  }
  function Md(n, i, l) {
    return ((n = n !== null ? n.childLanes & ~l : 0), i && (n |= sn), n);
  }
  function J0(n, i, l) {
    var c = i.pendingProps,
      d = !1,
      y = (i.flags & 128) !== 0,
      x;
    if (
      ((x = y) ||
        (x =
          n !== null && n.memoizedState === null ? !1 : (at.current & 2) !== 0),
      x && ((d = !0), (i.flags &= -129)),
      (x = (i.flags & 32) !== 0),
      (i.flags &= -33),
      n === null)
    ) {
      if (De) {
        if (
          (d ? Zr(i) : Qr(),
          (n = Xe)
            ? ((n = u1(n, Dn)),
              (n = n !== null && n.data !== "&" ? n : null),
              n !== null &&
                ((i.memoizedState = {
                  dehydrated: n,
                  treeContext: Hr !== null ? { id: Wn, overflow: Fn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Pg(n)),
                (l.return = i),
                (i.child = l),
                (Dt = i),
                (Xe = null)))
            : (n = null),
          n === null)
        )
          throw Ir(i);
        return (fv(n) ? (i.lanes = 32) : (i.lanes = 536870912), null);
      }
      var E = c.children;
      return (
        (c = c.fallback),
        d
          ? (Qr(),
            (d = i.mode),
            (E = Lo({ mode: "hidden", children: E }, d)),
            (c = Da(c, d, l, null)),
            (E.return = i),
            (c.return = i),
            (E.sibling = c),
            (i.child = E),
            (c = i.child),
            (c.memoizedState = Td(l)),
            (c.childLanes = Md(n, x, l)),
            (i.memoizedState = _d),
            Hl(null, c))
          : (Zr(i), Dd(i, E))
      );
    }
    var j = n.memoizedState;
    if (j !== null && ((E = j.dehydrated), E !== null)) {
      if (y)
        i.flags & 256
          ? (Zr(i), (i.flags &= -257), (i = jd(n, i, l)))
          : i.memoizedState !== null
            ? (Qr(), (i.child = n.child), (i.flags |= 128), (i = null))
            : (Qr(),
              (E = c.fallback),
              (d = i.mode),
              (c = Lo({ mode: "visible", children: c.children }, d)),
              (E = Da(E, d, l, null)),
              (E.flags |= 2),
              (c.return = i),
              (E.return = i),
              (c.sibling = E),
              (i.child = c),
              ka(i, n.child, null, l),
              (c = i.child),
              (c.memoizedState = Td(l)),
              (c.childLanes = Md(n, x, l)),
              (i.memoizedState = _d),
              (i = Hl(null, c)));
      else if ((Zr(i), fv(E))) {
        if (((x = E.nextSibling && E.nextSibling.dataset), x)) var q = x.dgst;
        ((x = q),
          (c = Error(a(419))),
          (c.stack = ""),
          (c.digest = x),
          jl({ value: c, source: null, stack: null }),
          (i = jd(n, i, l)));
      } else if (
        (ft || _i(n, i, l, !1), (x = (l & n.childLanes) !== 0), ft || x)
      ) {
        if (
          ((x = Ie),
          x !== null && ((c = Up(x, l)), c !== 0 && c !== j.retryLane))
        )
          throw ((j.retryLane = c), Ma(n, c), Zt(x, n, c), wd);
        (cv(E) || Go(), (i = jd(n, i, l)));
      } else
        cv(E)
          ? ((i.flags |= 192), (i.child = n.child), (i = null))
          : ((n = j.treeContext),
            (Xe = Cn(E.nextSibling)),
            (Dt = i),
            (De = !0),
            (Yr = null),
            (Dn = !1),
            n !== null && Rg(i, n),
            (i = Dd(i, c.children)),
            (i.flags |= 4096));
      return i;
    }
    return d
      ? (Qr(),
        (E = c.fallback),
        (d = i.mode),
        (j = n.child),
        (q = j.sibling),
        (c = or(j, { mode: "hidden", children: c.children })),
        (c.subtreeFlags = j.subtreeFlags & 65011712),
        q !== null ? (E = or(q, E)) : ((E = Da(E, d, l, null)), (E.flags |= 2)),
        (E.return = i),
        (c.return = i),
        (c.sibling = E),
        (i.child = c),
        Hl(null, c),
        (c = i.child),
        (E = n.child.memoizedState),
        E === null
          ? (E = Td(l))
          : ((d = E.cachePool),
            d !== null
              ? ((j = ot._currentValue),
                (d = d.parent !== j ? { parent: j, pool: j } : d))
              : (d = qg()),
            (E = { baseLanes: E.baseLanes | l, cachePool: d })),
        (c.memoizedState = E),
        (c.childLanes = Md(n, x, l)),
        (i.memoizedState = _d),
        Hl(n.child, c))
      : (Zr(i),
        (l = n.child),
        (n = l.sibling),
        (l = or(l, { mode: "visible", children: c.children })),
        (l.return = i),
        (l.sibling = null),
        n !== null &&
          ((x = i.deletions),
          x === null ? ((i.deletions = [n]), (i.flags |= 16)) : x.push(n)),
        (i.child = l),
        (i.memoizedState = null),
        l);
  }
  function Dd(n, i) {
    return (
      (i = Lo({ mode: "visible", children: i }, n.mode)),
      (i.return = n),
      (n.child = i)
    );
  }
  function Lo(n, i) {
    return ((n = un(22, n, null, i)), (n.lanes = 0), n);
  }
  function jd(n, i, l) {
    return (
      ka(i, n.child, null, l),
      (n = Dd(i, i.pendingProps.children)),
      (n.flags |= 2),
      (i.memoizedState = null),
      n
    );
  }
  function eb(n, i, l) {
    n.lanes |= i;
    var c = n.alternate;
    (c !== null && (c.lanes |= i), Ks(n.return, i, l));
  }
  function Cd(n, i, l, c, d, y) {
    var x = n.memoizedState;
    x === null
      ? (n.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: l,
          tailMode: d,
          treeForkCount: y,
        })
      : ((x.isBackwards = i),
        (x.rendering = null),
        (x.renderingStartTime = 0),
        (x.last = c),
        (x.tail = l),
        (x.tailMode = d),
        (x.treeForkCount = y));
  }
  function tb(n, i, l) {
    var c = i.pendingProps,
      d = c.revealOrder,
      y = c.tail;
    c = c.children;
    var x = at.current,
      E = (x & 2) !== 0;
    if (
      (E ? ((x = (x & 1) | 2), (i.flags |= 128)) : (x &= 1),
      te(at, x),
      Ct(n, i, c, l),
      (c = De ? Dl : 0),
      !E && n !== null && (n.flags & 128) !== 0)
    )
      e: for (n = i.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && eb(n, l, i);
        else if (n.tag === 19) eb(n, l, i);
        else if (n.child !== null) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === i) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === i) break e;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    switch (d) {
      case "forwards":
        for (l = i.child, d = null; l !== null; )
          ((n = l.alternate),
            n !== null && Eo(n) === null && (d = l),
            (l = l.sibling));
        ((l = d),
          l === null
            ? ((d = i.child), (i.child = null))
            : ((d = l.sibling), (l.sibling = null)),
          Cd(i, !1, d, l, y, c));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, d = i.child, i.child = null; d !== null; ) {
          if (((n = d.alternate), n !== null && Eo(n) === null)) {
            i.child = d;
            break;
          }
          ((n = d.sibling), (d.sibling = l), (l = d), (d = n));
        }
        Cd(i, !0, l, null, y, c);
        break;
      case "together":
        Cd(i, !1, null, null, void 0, c);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function hr(n, i, l) {
    if (
      (n !== null && (i.dependencies = n.dependencies),
      (Jr |= i.lanes),
      (l & i.childLanes) === 0)
    )
      if (n !== null) {
        if ((_i(n, i, l, !1), (l & i.childLanes) === 0)) return null;
      } else return null;
    if (n !== null && i.child !== n.child) throw Error(a(153));
    if (i.child !== null) {
      for (
        n = i.child, l = or(n, n.pendingProps), i.child = l, l.return = i;
        n.sibling !== null;
      )
        ((n = n.sibling),
          (l = l.sibling = or(n, n.pendingProps)),
          (l.return = i));
      l.sibling = null;
    }
    return i.child;
  }
  function Pd(n, i) {
    return (n.lanes & i) !== 0
      ? !0
      : ((n = n.dependencies), !!(n !== null && po(n)));
  }
  function aD(n, i, l) {
    switch (i.tag) {
      case 3:
        (Je(i, i.stateNode.containerInfo),
          Kr(i, ot, n.memoizedState.cache),
          ja());
        break;
      case 27:
      case 5:
        he(i);
        break;
      case 4:
        Je(i, i.stateNode.containerInfo);
        break;
      case 10:
        Kr(i, i.type, i.memoizedProps.value);
        break;
      case 31:
        if (i.memoizedState !== null) return ((i.flags |= 128), rd(i), null);
        break;
      case 13:
        var c = i.memoizedState;
        if (c !== null)
          return c.dehydrated !== null
            ? (Zr(i), (i.flags |= 128), null)
            : (l & i.child.childLanes) !== 0
              ? J0(n, i, l)
              : (Zr(i), (n = hr(n, i, l)), n !== null ? n.sibling : null);
        Zr(i);
        break;
      case 19:
        var d = (n.flags & 128) !== 0;
        if (
          ((c = (l & i.childLanes) !== 0),
          c || (_i(n, i, l, !1), (c = (l & i.childLanes) !== 0)),
          d)
        ) {
          if (c) return tb(n, i, l);
          i.flags |= 128;
        }
        if (
          ((d = i.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          te(at, at.current),
          c)
        )
          break;
        return null;
      case 22:
        return ((i.lanes = 0), X0(n, i, l, i.pendingProps));
      case 24:
        Kr(i, ot, n.memoizedState.cache);
    }
    return hr(n, i, l);
  }
  function nb(n, i, l) {
    if (n !== null)
      if (n.memoizedProps !== i.pendingProps) ft = !0;
      else {
        if (!Pd(n, l) && (i.flags & 128) === 0) return ((ft = !1), aD(n, i, l));
        ft = (n.flags & 131072) !== 0;
      }
    else ((ft = !1), De && (i.flags & 1048576) !== 0 && zg(i, Dl, i.index));
    switch (((i.lanes = 0), i.tag)) {
      case 16:
        e: {
          var c = i.pendingProps;
          if (((n = za(i.elementType)), (i.type = n), typeof n == "function"))
            Ls(n)
              ? ((c = Ba(n, c)), (i.tag = 1), (i = W0(null, i, n, c, l)))
              : ((i.tag = 0), (i = Ed(null, i, n, c, l)));
          else {
            if (n != null) {
              var d = n.$$typeof;
              if (d === N) {
                ((i.tag = 11), (i = I0(null, i, n, c, l)));
                break e;
              } else if (d === B) {
                ((i.tag = 14), (i = K0(null, i, n, c, l)));
                break e;
              }
            }
            throw ((i = F(n) || n), Error(a(306, i, "")));
          }
        }
        return i;
      case 0:
        return Ed(n, i, i.type, i.pendingProps, l);
      case 1:
        return ((c = i.type), (d = Ba(c, i.pendingProps)), W0(n, i, c, d, l));
      case 3:
        e: {
          if ((Je(i, i.stateNode.containerInfo), n === null))
            throw Error(a(387));
          c = i.pendingProps;
          var y = i.memoizedState;
          ((d = y.element), Fs(n, i), Ll(i, c, null, l));
          var x = i.memoizedState;
          if (
            ((c = x.cache),
            Kr(i, ot, c),
            c !== y.cache && Gs(i, [ot], l, !0),
            kl(),
            (c = x.element),
            y.isDehydrated)
          )
            if (
              ((y = { element: c, isDehydrated: !1, cache: x.cache }),
              (i.updateQueue.baseState = y),
              (i.memoizedState = y),
              i.flags & 256)
            ) {
              i = F0(n, i, c, l);
              break e;
            } else if (c !== d) {
              ((d = _n(Error(a(424)), i)), jl(d), (i = F0(n, i, c, l)));
              break e;
            } else {
              switch (((n = i.stateNode.containerInfo), n.nodeType)) {
                case 9:
                  n = n.body;
                  break;
                default:
                  n = n.nodeName === "HTML" ? n.ownerDocument.body : n;
              }
              for (
                Xe = Cn(n.firstChild),
                  Dt = i,
                  De = !0,
                  Yr = null,
                  Dn = !0,
                  l = Xg(i, null, c, l),
                  i.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((ja(), c === d)) {
              i = hr(n, i, l);
              break e;
            }
            Ct(n, i, c, l);
          }
          i = i.child;
        }
        return i;
      case 26:
        return (
          ko(n, i),
          n === null
            ? (l = v1(i.type, null, i.pendingProps, null))
              ? (i.memoizedState = l)
              : De ||
                ((l = i.type),
                (n = i.pendingProps),
                (c = Jo(ge.current).createElement(l)),
                (c[Mt] = i),
                (c[Yt] = n),
                Pt(c, l, n),
                bt(c),
                (i.stateNode = c))
            : (i.memoizedState = v1(
                i.type,
                n.memoizedProps,
                i.pendingProps,
                n.memoizedState,
              )),
          null
        );
      case 27:
        return (
          he(i),
          n === null &&
            De &&
            ((c = i.stateNode = f1(i.type, i.pendingProps, ge.current)),
            (Dt = i),
            (Dn = !0),
            (d = Xe),
            aa(i.type) ? ((sv = d), (Xe = Cn(c.firstChild))) : (Xe = d)),
          Ct(n, i, i.pendingProps.children, l),
          ko(n, i),
          n === null && (i.flags |= 4194304),
          i.child
        );
      case 5:
        return (
          n === null &&
            De &&
            ((d = c = Xe) &&
              ((c = zD(c, i.type, i.pendingProps, Dn)),
              c !== null
                ? ((i.stateNode = c),
                  (Dt = i),
                  (Xe = Cn(c.firstChild)),
                  (Dn = !1),
                  (d = !0))
                : (d = !1)),
            d || Ir(i)),
          he(i),
          (d = i.type),
          (y = i.pendingProps),
          (x = n !== null ? n.memoizedProps : null),
          (c = y.children),
          lv(d, y) ? (c = null) : x !== null && lv(d, x) && (i.flags |= 32),
          i.memoizedState !== null &&
            ((d = id(n, i, ZM, null, null, l)), (ru._currentValue = d)),
          ko(n, i),
          Ct(n, i, c, l),
          i.child
        );
      case 6:
        return (
          n === null &&
            De &&
            ((n = l = Xe) &&
              ((l = RD(l, i.pendingProps, Dn)),
              l !== null
                ? ((i.stateNode = l), (Dt = i), (Xe = null), (n = !0))
                : (n = !1)),
            n || Ir(i)),
          null
        );
      case 13:
        return J0(n, i, l);
      case 4:
        return (
          Je(i, i.stateNode.containerInfo),
          (c = i.pendingProps),
          n === null ? (i.child = ka(i, null, c, l)) : Ct(n, i, c, l),
          i.child
        );
      case 11:
        return I0(n, i, i.type, i.pendingProps, l);
      case 7:
        return (Ct(n, i, i.pendingProps, l), i.child);
      case 8:
        return (Ct(n, i, i.pendingProps.children, l), i.child);
      case 12:
        return (Ct(n, i, i.pendingProps.children, l), i.child);
      case 10:
        return (
          (c = i.pendingProps),
          Kr(i, i.type, c.value),
          Ct(n, i, c.children, l),
          i.child
        );
      case 9:
        return (
          (d = i.type._context),
          (c = i.pendingProps.children),
          Pa(i),
          (d = jt(d)),
          (c = c(d)),
          (i.flags |= 1),
          Ct(n, i, c, l),
          i.child
        );
      case 14:
        return K0(n, i, i.type, i.pendingProps, l);
      case 15:
        return G0(n, i, i.type, i.pendingProps, l);
      case 19:
        return tb(n, i, l);
      case 31:
        return rD(n, i, l);
      case 22:
        return X0(n, i, l, i.pendingProps);
      case 24:
        return (
          Pa(i),
          (c = jt(ot)),
          n === null
            ? ((d = Zs()),
              d === null &&
                ((d = Ie),
                (y = Xs()),
                (d.pooledCache = y),
                y.refCount++,
                y !== null && (d.pooledCacheLanes |= l),
                (d = y)),
              (i.memoizedState = { parent: c, cache: d }),
              Ws(i),
              Kr(i, ot, d))
            : ((n.lanes & l) !== 0 && (Fs(n, i), Ll(i, null, null, l), kl()),
              (d = n.memoizedState),
              (y = i.memoizedState),
              d.parent !== c
                ? ((d = { parent: c, cache: c }),
                  (i.memoizedState = d),
                  i.lanes === 0 &&
                    (i.memoizedState = i.updateQueue.baseState = d),
                  Kr(i, ot, c))
                : ((c = y.cache),
                  Kr(i, ot, c),
                  c !== d.cache && Gs(i, [ot], l, !0))),
          Ct(n, i, i.pendingProps.children, l),
          i.child
        );
      case 29:
        throw i.pendingProps;
    }
    throw Error(a(156, i.tag));
  }
  function mr(n) {
    n.flags |= 4;
  }
  function Nd(n, i, l, c, d) {
    if (((i = (n.mode & 32) !== 0) && (i = !1), i)) {
      if (((n.flags |= 16777216), (d & 335544128) === d))
        if (n.stateNode.complete) n.flags |= 8192;
        else if (Db()) n.flags |= 8192;
        else throw ((Ra = So), Qs);
    } else n.flags &= -16777217;
  }
  function rb(n, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (((n.flags |= 16777216), !g1(i)))
      if (Db()) n.flags |= 8192;
      else throw ((Ra = So), Qs);
  }
  function Bo(n, i) {
    (i !== null && (n.flags |= 4),
      n.flags & 16384 &&
        ((i = n.tag !== 22 ? kp() : 536870912), (n.lanes |= i), (Bi |= i)));
  }
  function Yl(n, i) {
    if (!De)
      switch (n.tailMode) {
        case "hidden":
          i = n.tail;
          for (var l = null; i !== null; )
            (i.alternate !== null && (l = i), (i = i.sibling));
          l === null ? (n.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = n.tail;
          for (var c = null; l !== null; )
            (l.alternate !== null && (c = l), (l = l.sibling));
          c === null
            ? i || n.tail === null
              ? (n.tail = null)
              : (n.tail.sibling = null)
            : (c.sibling = null);
      }
  }
  function Ve(n) {
    var i = n.alternate !== null && n.alternate.child === n.child,
      l = 0,
      c = 0;
    if (i)
      for (var d = n.child; d !== null; )
        ((l |= d.lanes | d.childLanes),
          (c |= d.subtreeFlags & 65011712),
          (c |= d.flags & 65011712),
          (d.return = n),
          (d = d.sibling));
    else
      for (d = n.child; d !== null; )
        ((l |= d.lanes | d.childLanes),
          (c |= d.subtreeFlags),
          (c |= d.flags),
          (d.return = n),
          (d = d.sibling));
    return ((n.subtreeFlags |= c), (n.childLanes = l), i);
  }
  function iD(n, i, l) {
    var c = i.pendingProps;
    switch ((qs(i), i.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ve(i), null);
      case 1:
        return (Ve(i), null);
      case 3:
        return (
          (l = i.stateNode),
          (c = null),
          n !== null && (c = n.memoizedState.cache),
          i.memoizedState.cache !== c && (i.flags |= 2048),
          sr(ot),
          re(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (n === null || n.child === null) &&
            (Ei(i)
              ? mr(i)
              : n === null ||
                (n.memoizedState.isDehydrated && (i.flags & 256) === 0) ||
                ((i.flags |= 1024), Ys())),
          Ve(i),
          null
        );
      case 26:
        var d = i.type,
          y = i.memoizedState;
        return (
          n === null
            ? (mr(i),
              y !== null ? (Ve(i), rb(i, y)) : (Ve(i), Nd(i, d, null, c, l)))
            : y
              ? y !== n.memoizedState
                ? (mr(i), Ve(i), rb(i, y))
                : (Ve(i), (i.flags &= -16777217))
              : ((n = n.memoizedProps),
                n !== c && mr(i),
                Ve(i),
                Nd(i, d, n, c, l)),
          null
        );
      case 27:
        if (
          (be(i),
          (l = ge.current),
          (d = i.type),
          n !== null && i.stateNode != null)
        )
          n.memoizedProps !== c && mr(i);
        else {
          if (!c) {
            if (i.stateNode === null) throw Error(a(166));
            return (Ve(i), null);
          }
          ((n = ie.current),
            Ei(i) ? kg(i) : ((n = f1(d, c, l)), (i.stateNode = n), mr(i)));
        }
        return (Ve(i), null);
      case 5:
        if ((be(i), (d = i.type), n !== null && i.stateNode != null))
          n.memoizedProps !== c && mr(i);
        else {
          if (!c) {
            if (i.stateNode === null) throw Error(a(166));
            return (Ve(i), null);
          }
          if (((y = ie.current), Ei(i))) kg(i);
          else {
            var x = Jo(ge.current);
            switch (y) {
              case 1:
                y = x.createElementNS("http://www.w3.org/2000/svg", d);
                break;
              case 2:
                y = x.createElementNS("http://www.w3.org/1998/Math/MathML", d);
                break;
              default:
                switch (d) {
                  case "svg":
                    y = x.createElementNS("http://www.w3.org/2000/svg", d);
                    break;
                  case "math":
                    y = x.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      d,
                    );
                    break;
                  case "script":
                    ((y = x.createElement("div")),
                      (y.innerHTML = "<script><\/script>"),
                      (y = y.removeChild(y.firstChild)));
                    break;
                  case "select":
                    ((y =
                      typeof c.is == "string"
                        ? x.createElement("select", { is: c.is })
                        : x.createElement("select")),
                      c.multiple
                        ? (y.multiple = !0)
                        : c.size && (y.size = c.size));
                    break;
                  default:
                    y =
                      typeof c.is == "string"
                        ? x.createElement(d, { is: c.is })
                        : x.createElement(d);
                }
            }
            ((y[Mt] = i), (y[Yt] = c));
            e: for (x = i.child; x !== null; ) {
              if (x.tag === 5 || x.tag === 6) y.appendChild(x.stateNode);
              else if (x.tag !== 4 && x.tag !== 27 && x.child !== null) {
                ((x.child.return = x), (x = x.child));
                continue;
              }
              if (x === i) break e;
              for (; x.sibling === null; ) {
                if (x.return === null || x.return === i) break e;
                x = x.return;
              }
              ((x.sibling.return = x.return), (x = x.sibling));
            }
            i.stateNode = y;
            e: switch ((Pt(y, d, c), d)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && mr(i);
          }
        }
        return (
          Ve(i),
          Nd(i, i.type, n === null ? null : n.memoizedProps, i.pendingProps, l),
          null
        );
      case 6:
        if (n && i.stateNode != null) n.memoizedProps !== c && mr(i);
        else {
          if (typeof c != "string" && i.stateNode === null) throw Error(a(166));
          if (((n = ge.current), Ei(i))) {
            if (
              ((n = i.stateNode),
              (l = i.memoizedProps),
              (c = null),
              (d = Dt),
              d !== null)
            )
              switch (d.tag) {
                case 27:
                case 5:
                  c = d.memoizedProps;
              }
            ((n[Mt] = i),
              (n = !!(
                n.nodeValue === l ||
                (c !== null && c.suppressHydrationWarning === !0) ||
                Jb(n.nodeValue, l)
              )),
              n || Ir(i, !0));
          } else
            ((n = Jo(n).createTextNode(c)), (n[Mt] = i), (i.stateNode = n));
        }
        return (Ve(i), null);
      case 31:
        if (((l = i.memoizedState), n === null || n.memoizedState !== null)) {
          if (((c = Ei(i)), l !== null)) {
            if (n === null) {
              if (!c) throw Error(a(318));
              if (
                ((n = i.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(a(557));
              n[Mt] = i;
            } else
              (ja(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4));
            (Ve(i), (n = !1));
          } else
            ((l = Ys()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = l),
              (n = !0));
          if (!n) return i.flags & 256 ? (cn(i), i) : (cn(i), null);
          if ((i.flags & 128) !== 0) throw Error(a(558));
        }
        return (Ve(i), null);
      case 13:
        if (
          ((c = i.memoizedState),
          n === null ||
            (n.memoizedState !== null && n.memoizedState.dehydrated !== null))
        ) {
          if (((d = Ei(i)), c !== null && c.dehydrated !== null)) {
            if (n === null) {
              if (!d) throw Error(a(318));
              if (
                ((d = i.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(a(317));
              d[Mt] = i;
            } else
              (ja(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4));
            (Ve(i), (d = !1));
          } else
            ((d = Ys()),
              n !== null &&
                n.memoizedState !== null &&
                (n.memoizedState.hydrationErrors = d),
              (d = !0));
          if (!d) return i.flags & 256 ? (cn(i), i) : (cn(i), null);
        }
        return (
          cn(i),
          (i.flags & 128) !== 0
            ? ((i.lanes = l), i)
            : ((l = c !== null),
              (n = n !== null && n.memoizedState !== null),
              l &&
                ((c = i.child),
                (d = null),
                c.alternate !== null &&
                  c.alternate.memoizedState !== null &&
                  c.alternate.memoizedState.cachePool !== null &&
                  (d = c.alternate.memoizedState.cachePool.pool),
                (y = null),
                c.memoizedState !== null &&
                  c.memoizedState.cachePool !== null &&
                  (y = c.memoizedState.cachePool.pool),
                y !== d && (c.flags |= 2048)),
              l !== n && l && (i.child.flags |= 8192),
              Bo(i, i.updateQueue),
              Ve(i),
              null)
        );
      case 4:
        return (re(), n === null && tv(i.stateNode.containerInfo), Ve(i), null);
      case 10:
        return (sr(i.type), Ve(i), null);
      case 19:
        if ((L(at), (c = i.memoizedState), c === null)) return (Ve(i), null);
        if (((d = (i.flags & 128) !== 0), (y = c.rendering), y === null))
          if (d) Yl(c, !1);
          else {
            if (nt !== 0 || (n !== null && (n.flags & 128) !== 0))
              for (n = i.child; n !== null; ) {
                if (((y = Eo(n)), y !== null)) {
                  for (
                    i.flags |= 128,
                      Yl(c, !1),
                      n = y.updateQueue,
                      i.updateQueue = n,
                      Bo(i, n),
                      i.subtreeFlags = 0,
                      n = l,
                      l = i.child;
                    l !== null;
                  )
                    (Cg(l, n), (l = l.sibling));
                  return (
                    te(at, (at.current & 1) | 2),
                    De && cr(i, c.treeForkCount),
                    i.child
                  );
                }
                n = n.sibling;
              }
            c.tail !== null &&
              nn() > Yo &&
              ((i.flags |= 128), (d = !0), Yl(c, !1), (i.lanes = 4194304));
          }
        else {
          if (!d)
            if (((n = Eo(y)), n !== null)) {
              if (
                ((i.flags |= 128),
                (d = !0),
                (n = n.updateQueue),
                (i.updateQueue = n),
                Bo(i, n),
                Yl(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !y.alternate &&
                  !De)
              )
                return (Ve(i), null);
            } else
              2 * nn() - c.renderingStartTime > Yo &&
                l !== 536870912 &&
                ((i.flags |= 128), (d = !0), Yl(c, !1), (i.lanes = 4194304));
          c.isBackwards
            ? ((y.sibling = i.child), (i.child = y))
            : ((n = c.last),
              n !== null ? (n.sibling = y) : (i.child = y),
              (c.last = y));
        }
        return c.tail !== null
          ? ((n = c.tail),
            (c.rendering = n),
            (c.tail = n.sibling),
            (c.renderingStartTime = nn()),
            (n.sibling = null),
            (l = at.current),
            te(at, d ? (l & 1) | 2 : l & 1),
            De && cr(i, c.treeForkCount),
            n)
          : (Ve(i), null);
      case 22:
      case 23:
        return (
          cn(i),
          nd(),
          (c = i.memoizedState !== null),
          n !== null
            ? (n.memoizedState !== null) !== c && (i.flags |= 8192)
            : c && (i.flags |= 8192),
          c
            ? (l & 536870912) !== 0 &&
              (i.flags & 128) === 0 &&
              (Ve(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : Ve(i),
          (l = i.updateQueue),
          l !== null && Bo(i, l.retryQueue),
          (l = null),
          n !== null &&
            n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (l = n.memoizedState.cachePool.pool),
          (c = null),
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (c = i.memoizedState.cachePool.pool),
          c !== l && (i.flags |= 2048),
          n !== null && L(Na),
          null
        );
      case 24:
        return (
          (l = null),
          n !== null && (l = n.memoizedState.cache),
          i.memoizedState.cache !== l && (i.flags |= 2048),
          sr(ot),
          Ve(i),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, i.tag));
  }
  function lD(n, i) {
    switch ((qs(i), i.tag)) {
      case 1:
        return (
          (n = i.flags),
          n & 65536 ? ((i.flags = (n & -65537) | 128), i) : null
        );
      case 3:
        return (
          sr(ot),
          re(),
          (n = i.flags),
          (n & 65536) !== 0 && (n & 128) === 0
            ? ((i.flags = (n & -65537) | 128), i)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (be(i), null);
      case 31:
        if (i.memoizedState !== null) {
          if ((cn(i), i.alternate === null)) throw Error(a(340));
          ja();
        }
        return (
          (n = i.flags),
          n & 65536 ? ((i.flags = (n & -65537) | 128), i) : null
        );
      case 13:
        if (
          (cn(i), (n = i.memoizedState), n !== null && n.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(a(340));
          ja();
        }
        return (
          (n = i.flags),
          n & 65536 ? ((i.flags = (n & -65537) | 128), i) : null
        );
      case 19:
        return (L(at), null);
      case 4:
        return (re(), null);
      case 10:
        return (sr(i.type), null);
      case 22:
      case 23:
        return (
          cn(i),
          nd(),
          n !== null && L(Na),
          (n = i.flags),
          n & 65536 ? ((i.flags = (n & -65537) | 128), i) : null
        );
      case 24:
        return (sr(ot), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ab(n, i) {
    switch ((qs(i), i.tag)) {
      case 3:
        (sr(ot), re());
        break;
      case 26:
      case 27:
      case 5:
        be(i);
        break;
      case 4:
        re();
        break;
      case 31:
        i.memoizedState !== null && cn(i);
        break;
      case 13:
        cn(i);
        break;
      case 19:
        L(at);
        break;
      case 10:
        sr(i.type);
        break;
      case 22:
      case 23:
        (cn(i), nd(), n !== null && L(Na));
        break;
      case 24:
        sr(ot);
    }
  }
  function Il(n, i) {
    try {
      var l = i.updateQueue,
        c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var d = c.next;
        l = d;
        do {
          if ((l.tag & n) === n) {
            c = void 0;
            var y = l.create,
              x = l.inst;
            ((c = y()), (x.destroy = c));
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (E) {
      Be(i, i.return, E);
    }
  }
  function Wr(n, i, l) {
    try {
      var c = i.updateQueue,
        d = c !== null ? c.lastEffect : null;
      if (d !== null) {
        var y = d.next;
        c = y;
        do {
          if ((c.tag & n) === n) {
            var x = c.inst,
              E = x.destroy;
            if (E !== void 0) {
              ((x.destroy = void 0), (d = i));
              var j = l,
                q = E;
              try {
                q();
              } catch (G) {
                Be(d, j, G);
              }
            }
          }
          c = c.next;
        } while (c !== y);
      }
    } catch (G) {
      Be(i, i.return, G);
    }
  }
  function ib(n) {
    var i = n.updateQueue;
    if (i !== null) {
      var l = n.stateNode;
      try {
        Zg(i, l);
      } catch (c) {
        Be(n, n.return, c);
      }
    }
  }
  function lb(n, i, l) {
    ((l.props = Ba(n.type, n.memoizedProps)), (l.state = n.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (c) {
      Be(n, i, c);
    }
  }
  function Kl(n, i) {
    try {
      var l = n.ref;
      if (l !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var c = n.stateNode;
            break;
          case 30:
            c = n.stateNode;
            break;
          default:
            c = n.stateNode;
        }
        typeof l == "function" ? (n.refCleanup = l(c)) : (l.current = c);
      }
    } catch (d) {
      Be(n, i, d);
    }
  }
  function Jn(n, i) {
    var l = n.ref,
      c = n.refCleanup;
    if (l !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (d) {
          Be(n, i, d);
        } finally {
          ((n.refCleanup = null),
            (n = n.alternate),
            n != null && (n.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (d) {
          Be(n, i, d);
        }
      else l.current = null;
  }
  function ub(n) {
    var i = n.type,
      l = n.memoizedProps,
      c = n.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && c.focus();
          break e;
        case "img":
          l.src ? (c.src = l.src) : l.srcSet && (c.srcset = l.srcSet);
      }
    } catch (d) {
      Be(n, n.return, d);
    }
  }
  function zd(n, i, l) {
    try {
      var c = n.stateNode;
      (MD(c, n.type, l, i), (c[Yt] = i));
    } catch (d) {
      Be(n, n.return, d);
    }
  }
  function ob(n) {
    return (
      n.tag === 5 ||
      n.tag === 3 ||
      n.tag === 26 ||
      (n.tag === 27 && aa(n.type)) ||
      n.tag === 4
    );
  }
  function Rd(n) {
    e: for (;;) {
      for (; n.sibling === null; ) {
        if (n.return === null || ob(n.return)) return null;
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;
      ) {
        if (
          (n.tag === 27 && aa(n.type)) ||
          n.flags & 2 ||
          n.child === null ||
          n.tag === 4
        )
          continue e;
        ((n.child.return = n), (n = n.child));
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function kd(n, i, l) {
    var c = n.tag;
    if (c === 5 || c === 6)
      ((n = n.stateNode),
        i
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(n, i)
          : ((i =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            i.appendChild(n),
            (l = l._reactRootContainer),
            l != null || i.onclick !== null || (i.onclick = lr)));
    else if (
      c !== 4 &&
      (c === 27 && aa(n.type) && ((l = n.stateNode), (i = null)),
      (n = n.child),
      n !== null)
    )
      for (kd(n, i, l), n = n.sibling; n !== null; )
        (kd(n, i, l), (n = n.sibling));
  }
  function Uo(n, i, l) {
    var c = n.tag;
    if (c === 5 || c === 6)
      ((n = n.stateNode), i ? l.insertBefore(n, i) : l.appendChild(n));
    else if (
      c !== 4 &&
      (c === 27 && aa(n.type) && (l = n.stateNode), (n = n.child), n !== null)
    )
      for (Uo(n, i, l), n = n.sibling; n !== null; )
        (Uo(n, i, l), (n = n.sibling));
  }
  function cb(n) {
    var i = n.stateNode,
      l = n.memoizedProps;
    try {
      for (var c = n.type, d = i.attributes; d.length; )
        i.removeAttributeNode(d[0]);
      (Pt(i, c, l), (i[Mt] = n), (i[Yt] = l));
    } catch (y) {
      Be(n, n.return, y);
    }
  }
  var yr = !1,
    st = !1,
    Ld = !1,
    fb = typeof WeakSet == "function" ? WeakSet : Set,
    xt = null;
  function uD(n, i) {
    if (((n = n.containerInfo), (av = lc), (n = Og(n)), js(n))) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = ((l = n.ownerDocument) && l.defaultView) || window;
          var c = l.getSelection && l.getSelection();
          if (c && c.rangeCount !== 0) {
            l = c.anchorNode;
            var d = c.anchorOffset,
              y = c.focusNode;
            c = c.focusOffset;
            try {
              (l.nodeType, y.nodeType);
            } catch {
              l = null;
              break e;
            }
            var x = 0,
              E = -1,
              j = -1,
              q = 0,
              G = 0,
              Q = n,
              H = null;
            t: for (;;) {
              for (
                var Y;
                Q !== l || (d !== 0 && Q.nodeType !== 3) || (E = x + d),
                  Q !== y || (c !== 0 && Q.nodeType !== 3) || (j = x + c),
                  Q.nodeType === 3 && (x += Q.nodeValue.length),
                  (Y = Q.firstChild) !== null;
              )
                ((H = Q), (Q = Y));
              for (;;) {
                if (Q === n) break t;
                if (
                  (H === l && ++q === d && (E = x),
                  H === y && ++G === c && (j = x),
                  (Y = Q.nextSibling) !== null)
                )
                  break;
                ((Q = H), (H = Q.parentNode));
              }
              Q = Y;
            }
            l = E === -1 || j === -1 ? null : { start: E, end: j };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      iv = { focusedElem: n, selectionRange: l }, lc = !1, xt = i;
      xt !== null;
    )
      if (
        ((i = xt), (n = i.child), (i.subtreeFlags & 1028) !== 0 && n !== null)
      )
        ((n.return = i), (xt = n));
      else
        for (; xt !== null; ) {
          switch (((i = xt), (y = i.alternate), (n = i.flags), i.tag)) {
            case 0:
              if (
                (n & 4) !== 0 &&
                ((n = i.updateQueue),
                (n = n !== null ? n.events : null),
                n !== null)
              )
                for (l = 0; l < n.length; l++)
                  ((d = n[l]), (d.ref.impl = d.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && y !== null) {
                ((n = void 0),
                  (l = i),
                  (d = y.memoizedProps),
                  (y = y.memoizedState),
                  (c = l.stateNode));
                try {
                  var fe = Ba(l.type, d);
                  ((n = c.getSnapshotBeforeUpdate(fe, y)),
                    (c.__reactInternalSnapshotBeforeUpdate = n));
                } catch (pe) {
                  Be(l, l.return, pe);
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (
                  ((n = i.stateNode.containerInfo), (l = n.nodeType), l === 9)
                )
                  ov(n);
                else if (l === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ov(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(a(163));
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (xt = n));
            break;
          }
          xt = i.return;
        }
  }
  function sb(n, i, l) {
    var c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (gr(n, l), c & 4 && Il(5, l));
        break;
      case 1:
        if ((gr(n, l), c & 4))
          if (((n = l.stateNode), i === null))
            try {
              n.componentDidMount();
            } catch (x) {
              Be(l, l.return, x);
            }
          else {
            var d = Ba(l.type, i.memoizedProps);
            i = i.memoizedState;
            try {
              n.componentDidUpdate(d, i, n.__reactInternalSnapshotBeforeUpdate);
            } catch (x) {
              Be(l, l.return, x);
            }
          }
        (c & 64 && ib(l), c & 512 && Kl(l, l.return));
        break;
      case 3:
        if ((gr(n, l), c & 64 && ((n = l.updateQueue), n !== null))) {
          if (((i = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                i = l.child.stateNode;
                break;
              case 1:
                i = l.child.stateNode;
            }
          try {
            Zg(n, i);
          } catch (x) {
            Be(l, l.return, x);
          }
        }
        break;
      case 27:
        i === null && c & 4 && cb(l);
      case 26:
      case 5:
        (gr(n, l), i === null && c & 4 && ub(l), c & 512 && Kl(l, l.return));
        break;
      case 12:
        gr(n, l);
        break;
      case 31:
        (gr(n, l), c & 4 && hb(n, l));
        break;
      case 13:
        (gr(n, l),
          c & 4 && mb(n, l),
          c & 64 &&
            ((n = l.memoizedState),
            n !== null &&
              ((n = n.dehydrated),
              n !== null && ((l = yD.bind(null, l)), kD(n, l)))));
        break;
      case 22:
        if (((c = l.memoizedState !== null || yr), !c)) {
          ((i = (i !== null && i.memoizedState !== null) || st), (d = yr));
          var y = st;
          ((yr = c),
            (st = i) && !y ? br(n, l, (l.subtreeFlags & 8772) !== 0) : gr(n, l),
            (yr = d),
            (st = y));
        }
        break;
      case 30:
        break;
      default:
        gr(n, l);
    }
  }
  function db(n) {
    var i = n.alternate;
    (i !== null && ((n.alternate = null), db(i)),
      (n.child = null),
      (n.deletions = null),
      (n.sibling = null),
      n.tag === 5 && ((i = n.stateNode), i !== null && vs(i)),
      (n.stateNode = null),
      (n.return = null),
      (n.dependencies = null),
      (n.memoizedProps = null),
      (n.memoizedState = null),
      (n.pendingProps = null),
      (n.stateNode = null),
      (n.updateQueue = null));
  }
  var Qe = null,
    Kt = !1;
  function pr(n, i, l) {
    for (l = l.child; l !== null; ) (vb(n, i, l), (l = l.sibling));
  }
  function vb(n, i, l) {
    if (rn && typeof rn.onCommitFiberUnmount == "function")
      try {
        rn.onCommitFiberUnmount(ml, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (st || Jn(l, i),
          pr(n, i, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        st || Jn(l, i);
        var c = Qe,
          d = Kt;
        (aa(l.type) && ((Qe = l.stateNode), (Kt = !1)),
          pr(n, i, l),
          eu(l.stateNode),
          (Qe = c),
          (Kt = d));
        break;
      case 5:
        st || Jn(l, i);
      case 6:
        if (
          ((c = Qe),
          (d = Kt),
          (Qe = null),
          pr(n, i, l),
          (Qe = c),
          (Kt = d),
          Qe !== null)
        )
          if (Kt)
            try {
              (Qe.nodeType === 9
                ? Qe.body
                : Qe.nodeName === "HTML"
                  ? Qe.ownerDocument.body
                  : Qe
              ).removeChild(l.stateNode);
            } catch (y) {
              Be(l, i, y);
            }
          else
            try {
              Qe.removeChild(l.stateNode);
            } catch (y) {
              Be(l, i, y);
            }
        break;
      case 18:
        Qe !== null &&
          (Kt
            ? ((n = Qe),
              i1(
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === "HTML"
                    ? n.ownerDocument.body
                    : n,
                l.stateNode,
              ),
              Gi(n))
            : i1(Qe, l.stateNode));
        break;
      case 4:
        ((c = Qe),
          (d = Kt),
          (Qe = l.stateNode.containerInfo),
          (Kt = !0),
          pr(n, i, l),
          (Qe = c),
          (Kt = d));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Wr(2, l, i), st || Wr(4, l, i), pr(n, i, l));
        break;
      case 1:
        (st ||
          (Jn(l, i),
          (c = l.stateNode),
          typeof c.componentWillUnmount == "function" && lb(l, i, c)),
          pr(n, i, l));
        break;
      case 21:
        pr(n, i, l);
        break;
      case 22:
        ((st = (c = st) || l.memoizedState !== null), pr(n, i, l), (st = c));
        break;
      default:
        pr(n, i, l);
    }
  }
  function hb(n, i) {
    if (
      i.memoizedState === null &&
      ((n = i.alternate), n !== null && ((n = n.memoizedState), n !== null))
    ) {
      n = n.dehydrated;
      try {
        Gi(n);
      } catch (l) {
        Be(i, i.return, l);
      }
    }
  }
  function mb(n, i) {
    if (
      i.memoizedState === null &&
      ((n = i.alternate),
      n !== null &&
        ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null)))
    )
      try {
        Gi(n);
      } catch (l) {
        Be(i, i.return, l);
      }
  }
  function oD(n) {
    switch (n.tag) {
      case 31:
      case 13:
      case 19:
        var i = n.stateNode;
        return (i === null && (i = n.stateNode = new fb()), i);
      case 22:
        return (
          (n = n.stateNode),
          (i = n._retryCache),
          i === null && (i = n._retryCache = new fb()),
          i
        );
      default:
        throw Error(a(435, n.tag));
    }
  }
  function $o(n, i) {
    var l = oD(n);
    i.forEach(function (c) {
      if (!l.has(c)) {
        l.add(c);
        var d = pD.bind(null, n, c);
        c.then(d, d);
      }
    });
  }
  function Gt(n, i) {
    var l = i.deletions;
    if (l !== null)
      for (var c = 0; c < l.length; c++) {
        var d = l[c],
          y = n,
          x = i,
          E = x;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
              if (aa(E.type)) {
                ((Qe = E.stateNode), (Kt = !1));
                break e;
              }
              break;
            case 5:
              ((Qe = E.stateNode), (Kt = !1));
              break e;
            case 3:
            case 4:
              ((Qe = E.stateNode.containerInfo), (Kt = !0));
              break e;
          }
          E = E.return;
        }
        if (Qe === null) throw Error(a(160));
        (vb(y, x, d),
          (Qe = null),
          (Kt = !1),
          (y = d.alternate),
          y !== null && (y.return = null),
          (d.return = null));
      }
    if (i.subtreeFlags & 13886)
      for (i = i.child; i !== null; ) (yb(i, n), (i = i.sibling));
  }
  var In = null;
  function yb(n, i) {
    var l = n.alternate,
      c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Gt(i, n),
          Xt(n),
          c & 4 && (Wr(3, n, n.return), Il(3, n), Wr(5, n, n.return)));
        break;
      case 1:
        (Gt(i, n),
          Xt(n),
          c & 512 && (st || l === null || Jn(l, l.return)),
          c & 64 &&
            yr &&
            ((n = n.updateQueue),
            n !== null &&
              ((c = n.callbacks),
              c !== null &&
                ((l = n.shared.hiddenCallbacks),
                (n.shared.hiddenCallbacks = l === null ? c : l.concat(c))))));
        break;
      case 26:
        var d = In;
        if (
          (Gt(i, n),
          Xt(n),
          c & 512 && (st || l === null || Jn(l, l.return)),
          c & 4)
        ) {
          var y = l !== null ? l.memoizedState : null;
          if (((c = n.memoizedState), l === null))
            if (c === null)
              if (n.stateNode === null) {
                e: {
                  ((c = n.type),
                    (l = n.memoizedProps),
                    (d = d.ownerDocument || d));
                  t: switch (c) {
                    case "title":
                      ((y = d.getElementsByTagName("title")[0]),
                        (!y ||
                          y[gl] ||
                          y[Mt] ||
                          y.namespaceURI === "http://www.w3.org/2000/svg" ||
                          y.hasAttribute("itemprop")) &&
                          ((y = d.createElement(c)),
                          d.head.insertBefore(
                            y,
                            d.querySelector("head > title"),
                          )),
                        Pt(y, c, l),
                        (y[Mt] = n),
                        bt(y),
                        (c = y));
                      break e;
                    case "link":
                      var x = y1("link", "href", d).get(c + (l.href || ""));
                      if (x) {
                        for (var E = 0; E < x.length; E++)
                          if (
                            ((y = x[E]),
                            y.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              y.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              y.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              y.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            x.splice(E, 1);
                            break t;
                          }
                      }
                      ((y = d.createElement(c)),
                        Pt(y, c, l),
                        d.head.appendChild(y));
                      break;
                    case "meta":
                      if (
                        (x = y1("meta", "content", d).get(
                          c + (l.content || ""),
                        ))
                      ) {
                        for (E = 0; E < x.length; E++)
                          if (
                            ((y = x[E]),
                            y.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              y.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              y.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              y.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              y.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            x.splice(E, 1);
                            break t;
                          }
                      }
                      ((y = d.createElement(c)),
                        Pt(y, c, l),
                        d.head.appendChild(y));
                      break;
                    default:
                      throw Error(a(468, c));
                  }
                  ((y[Mt] = n), bt(y), (c = y));
                }
                n.stateNode = c;
              } else p1(d, n.type, n.stateNode);
            else n.stateNode = m1(d, c, n.memoizedProps);
          else
            y !== c
              ? (y === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : y.count--,
                c === null
                  ? p1(d, n.type, n.stateNode)
                  : m1(d, c, n.memoizedProps))
              : c === null &&
                n.stateNode !== null &&
                zd(n, n.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Gt(i, n),
          Xt(n),
          c & 512 && (st || l === null || Jn(l, l.return)),
          l !== null && c & 4 && zd(n, n.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Gt(i, n),
          Xt(n),
          c & 512 && (st || l === null || Jn(l, l.return)),
          n.flags & 32)
        ) {
          d = n.stateNode;
          try {
            mi(d, "");
          } catch (fe) {
            Be(n, n.return, fe);
          }
        }
        (c & 4 &&
          n.stateNode != null &&
          ((d = n.memoizedProps), zd(n, d, l !== null ? l.memoizedProps : d)),
          c & 1024 && (Ld = !0));
        break;
      case 6:
        if ((Gt(i, n), Xt(n), c & 4)) {
          if (n.stateNode === null) throw Error(a(162));
          ((c = n.memoizedProps), (l = n.stateNode));
          try {
            l.nodeValue = c;
          } catch (fe) {
            Be(n, n.return, fe);
          }
        }
        break;
      case 3:
        if (
          ((nc = null),
          (d = In),
          (In = ec(i.containerInfo)),
          Gt(i, n),
          (In = d),
          Xt(n),
          c & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Gi(i.containerInfo);
          } catch (fe) {
            Be(n, n.return, fe);
          }
        Ld && ((Ld = !1), pb(n));
        break;
      case 4:
        ((c = In),
          (In = ec(n.stateNode.containerInfo)),
          Gt(i, n),
          Xt(n),
          (In = c));
        break;
      case 12:
        (Gt(i, n), Xt(n));
        break;
      case 31:
        (Gt(i, n),
          Xt(n),
          c & 4 &&
            ((c = n.updateQueue),
            c !== null && ((n.updateQueue = null), $o(n, c))));
        break;
      case 13:
        (Gt(i, n),
          Xt(n),
          n.child.flags & 8192 &&
            (n.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Ho = nn()),
          c & 4 &&
            ((c = n.updateQueue),
            c !== null && ((n.updateQueue = null), $o(n, c))));
        break;
      case 22:
        d = n.memoizedState !== null;
        var j = l !== null && l.memoizedState !== null,
          q = yr,
          G = st;
        if (
          ((yr = q || d),
          (st = G || j),
          Gt(i, n),
          (st = G),
          (yr = q),
          Xt(n),
          c & 8192)
        )
          e: for (
            i = n.stateNode,
              i._visibility = d ? i._visibility & -2 : i._visibility | 1,
              d && (l === null || j || yr || st || Ua(n)),
              l = null,
              i = n;
            ;
          ) {
            if (i.tag === 5 || i.tag === 26) {
              if (l === null) {
                j = l = i;
                try {
                  if (((y = j.stateNode), d))
                    ((x = y.style),
                      typeof x.setProperty == "function"
                        ? x.setProperty("display", "none", "important")
                        : (x.display = "none"));
                  else {
                    E = j.stateNode;
                    var Q = j.memoizedProps.style,
                      H =
                        Q != null && Q.hasOwnProperty("display")
                          ? Q.display
                          : null;
                    E.style.display =
                      H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (fe) {
                  Be(j, j.return, fe);
                }
              }
            } else if (i.tag === 6) {
              if (l === null) {
                j = i;
                try {
                  j.stateNode.nodeValue = d ? "" : j.memoizedProps;
                } catch (fe) {
                  Be(j, j.return, fe);
                }
              }
            } else if (i.tag === 18) {
              if (l === null) {
                j = i;
                try {
                  var Y = j.stateNode;
                  d ? l1(Y, !0) : l1(j.stateNode, !1);
                } catch (fe) {
                  Be(j, j.return, fe);
                }
              }
            } else if (
              ((i.tag !== 22 && i.tag !== 23) ||
                i.memoizedState === null ||
                i === n) &&
              i.child !== null
            ) {
              ((i.child.return = i), (i = i.child));
              continue;
            }
            if (i === n) break e;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === n) break e;
              (l === i && (l = null), (i = i.return));
            }
            (l === i && (l = null),
              (i.sibling.return = i.return),
              (i = i.sibling));
          }
        c & 4 &&
          ((c = n.updateQueue),
          c !== null &&
            ((l = c.retryQueue),
            l !== null && ((c.retryQueue = null), $o(n, l))));
        break;
      case 19:
        (Gt(i, n),
          Xt(n),
          c & 4 &&
            ((c = n.updateQueue),
            c !== null && ((n.updateQueue = null), $o(n, c))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Gt(i, n), Xt(n));
    }
  }
  function Xt(n) {
    var i = n.flags;
    if (i & 2) {
      try {
        for (var l, c = n.return; c !== null; ) {
          if (ob(c)) {
            l = c;
            break;
          }
          c = c.return;
        }
        if (l == null) throw Error(a(160));
        switch (l.tag) {
          case 27:
            var d = l.stateNode,
              y = Rd(n);
            Uo(n, y, d);
            break;
          case 5:
            var x = l.stateNode;
            l.flags & 32 && (mi(x, ""), (l.flags &= -33));
            var E = Rd(n);
            Uo(n, E, x);
            break;
          case 3:
          case 4:
            var j = l.stateNode.containerInfo,
              q = Rd(n);
            kd(n, q, j);
            break;
          default:
            throw Error(a(161));
        }
      } catch (G) {
        Be(n, n.return, G);
      }
      n.flags &= -3;
    }
    i & 4096 && (n.flags &= -4097);
  }
  function pb(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var i = n;
        (pb(i),
          i.tag === 5 && i.flags & 1024 && i.stateNode.reset(),
          (n = n.sibling));
      }
  }
  function gr(n, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; ) (sb(n, i.alternate, i), (i = i.sibling));
  }
  function Ua(n) {
    for (n = n.child; n !== null; ) {
      var i = n;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Wr(4, i, i.return), Ua(i));
          break;
        case 1:
          Jn(i, i.return);
          var l = i.stateNode;
          (typeof l.componentWillUnmount == "function" && lb(i, i.return, l),
            Ua(i));
          break;
        case 27:
          eu(i.stateNode);
        case 26:
        case 5:
          (Jn(i, i.return), Ua(i));
          break;
        case 22:
          i.memoizedState === null && Ua(i);
          break;
        case 30:
          Ua(i);
          break;
        default:
          Ua(i);
      }
      n = n.sibling;
    }
  }
  function br(n, i, l) {
    for (l = l && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var c = i.alternate,
        d = n,
        y = i,
        x = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (br(d, y, l), Il(4, y));
          break;
        case 1:
          if (
            (br(d, y, l),
            (c = y),
            (d = c.stateNode),
            typeof d.componentDidMount == "function")
          )
            try {
              d.componentDidMount();
            } catch (q) {
              Be(c, c.return, q);
            }
          if (((c = y), (d = c.updateQueue), d !== null)) {
            var E = c.stateNode;
            try {
              var j = d.shared.hiddenCallbacks;
              if (j !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < j.length; d++)
                  Vg(j[d], E);
            } catch (q) {
              Be(c, c.return, q);
            }
          }
          (l && x & 64 && ib(y), Kl(y, y.return));
          break;
        case 27:
          cb(y);
        case 26:
        case 5:
          (br(d, y, l), l && c === null && x & 4 && ub(y), Kl(y, y.return));
          break;
        case 12:
          br(d, y, l);
          break;
        case 31:
          (br(d, y, l), l && x & 4 && hb(d, y));
          break;
        case 13:
          (br(d, y, l), l && x & 4 && mb(d, y));
          break;
        case 22:
          (y.memoizedState === null && br(d, y, l), Kl(y, y.return));
          break;
        case 30:
          break;
        default:
          br(d, y, l);
      }
      i = i.sibling;
    }
  }
  function Bd(n, i) {
    var l = null;
    (n !== null &&
      n.memoizedState !== null &&
      n.memoizedState.cachePool !== null &&
      (l = n.memoizedState.cachePool.pool),
      (n = null),
      i.memoizedState !== null &&
        i.memoizedState.cachePool !== null &&
        (n = i.memoizedState.cachePool.pool),
      n !== l && (n != null && n.refCount++, l != null && Cl(l)));
  }
  function Ud(n, i) {
    ((n = null),
      i.alternate !== null && (n = i.alternate.memoizedState.cache),
      (i = i.memoizedState.cache),
      i !== n && (i.refCount++, n != null && Cl(n)));
  }
  function Kn(n, i, l, c) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) (gb(n, i, l, c), (i = i.sibling));
  }
  function gb(n, i, l, c) {
    var d = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Kn(n, i, l, c), d & 2048 && Il(9, i));
        break;
      case 1:
        Kn(n, i, l, c);
        break;
      case 3:
        (Kn(n, i, l, c),
          d & 2048 &&
            ((n = null),
            i.alternate !== null && (n = i.alternate.memoizedState.cache),
            (i = i.memoizedState.cache),
            i !== n && (i.refCount++, n != null && Cl(n))));
        break;
      case 12:
        if (d & 2048) {
          (Kn(n, i, l, c), (n = i.stateNode));
          try {
            var y = i.memoizedProps,
              x = y.id,
              E = y.onPostCommit;
            typeof E == "function" &&
              E(
                x,
                i.alternate === null ? "mount" : "update",
                n.passiveEffectDuration,
                -0,
              );
          } catch (j) {
            Be(i, i.return, j);
          }
        } else Kn(n, i, l, c);
        break;
      case 31:
        Kn(n, i, l, c);
        break;
      case 13:
        Kn(n, i, l, c);
        break;
      case 23:
        break;
      case 22:
        ((y = i.stateNode),
          (x = i.alternate),
          i.memoizedState !== null
            ? y._visibility & 2
              ? Kn(n, i, l, c)
              : Gl(n, i)
            : y._visibility & 2
              ? Kn(n, i, l, c)
              : ((y._visibility |= 2),
                Ri(n, i, l, c, (i.subtreeFlags & 10256) !== 0 || !1)),
          d & 2048 && Bd(x, i));
        break;
      case 24:
        (Kn(n, i, l, c), d & 2048 && Ud(i.alternate, i));
        break;
      default:
        Kn(n, i, l, c);
    }
  }
  function Ri(n, i, l, c, d) {
    for (
      d = d && ((i.subtreeFlags & 10256) !== 0 || !1), i = i.child;
      i !== null;
    ) {
      var y = n,
        x = i,
        E = l,
        j = c,
        q = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          (Ri(y, x, E, j, d), Il(8, x));
          break;
        case 23:
          break;
        case 22:
          var G = x.stateNode;
          (x.memoizedState !== null
            ? G._visibility & 2
              ? Ri(y, x, E, j, d)
              : Gl(y, x)
            : ((G._visibility |= 2), Ri(y, x, E, j, d)),
            d && q & 2048 && Bd(x.alternate, x));
          break;
        case 24:
          (Ri(y, x, E, j, d), d && q & 2048 && Ud(x.alternate, x));
          break;
        default:
          Ri(y, x, E, j, d);
      }
      i = i.sibling;
    }
  }
  function Gl(n, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var l = n,
          c = i,
          d = c.flags;
        switch (c.tag) {
          case 22:
            (Gl(l, c), d & 2048 && Bd(c.alternate, c));
            break;
          case 24:
            (Gl(l, c), d & 2048 && Ud(c.alternate, c));
            break;
          default:
            Gl(l, c);
        }
        i = i.sibling;
      }
  }
  var Xl = 8192;
  function ki(n, i, l) {
    if (n.subtreeFlags & Xl)
      for (n = n.child; n !== null; ) (bb(n, i, l), (n = n.sibling));
  }
  function bb(n, i, l) {
    switch (n.tag) {
      case 26:
        (ki(n, i, l),
          n.flags & Xl &&
            n.memoizedState !== null &&
            VD(l, In, n.memoizedState, n.memoizedProps));
        break;
      case 5:
        ki(n, i, l);
        break;
      case 3:
      case 4:
        var c = In;
        ((In = ec(n.stateNode.containerInfo)), ki(n, i, l), (In = c));
        break;
      case 22:
        n.memoizedState === null &&
          ((c = n.alternate),
          c !== null && c.memoizedState !== null
            ? ((c = Xl), (Xl = 16777216), ki(n, i, l), (Xl = c))
            : ki(n, i, l));
        break;
      default:
        ki(n, i, l);
    }
  }
  function xb(n) {
    var i = n.alternate;
    if (i !== null && ((n = i.child), n !== null)) {
      i.child = null;
      do ((i = n.sibling), (n.sibling = null), (n = i));
      while (n !== null);
    }
  }
  function Vl(n) {
    var i = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          ((xt = c), Ob(c, n));
        }
      xb(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Sb(n), (n = n.sibling));
  }
  function Sb(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Vl(n), n.flags & 2048 && Wr(9, n, n.return));
        break;
      case 3:
        Vl(n);
        break;
      case 12:
        Vl(n);
        break;
      case 22:
        var i = n.stateNode;
        n.memoizedState !== null &&
        i._visibility & 2 &&
        (n.return === null || n.return.tag !== 13)
          ? ((i._visibility &= -3), qo(n))
          : Vl(n);
        break;
      default:
        Vl(n);
    }
  }
  function qo(n) {
    var i = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var c = i[l];
          ((xt = c), Ob(c, n));
        }
      xb(n);
    }
    for (n = n.child; n !== null; ) {
      switch (((i = n), i.tag)) {
        case 0:
        case 11:
        case 15:
          (Wr(8, i, i.return), qo(i));
          break;
        case 22:
          ((l = i.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), qo(i)));
          break;
        default:
          qo(i);
      }
      n = n.sibling;
    }
  }
  function Ob(n, i) {
    for (; xt !== null; ) {
      var l = xt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Wr(8, l, i);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var c = l.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Cl(l.memoizedState.cache);
      }
      if (((c = l.child), c !== null)) ((c.return = l), (xt = c));
      else
        e: for (l = n; xt !== null; ) {
          c = xt;
          var d = c.sibling,
            y = c.return;
          if ((db(c), c === l)) {
            xt = null;
            break e;
          }
          if (d !== null) {
            ((d.return = y), (xt = d));
            break e;
          }
          xt = y;
        }
    }
  }
  var cD = {
      getCacheForType: function (n) {
        var i = jt(ot),
          l = i.data.get(n);
        return (l === void 0 && ((l = n()), i.data.set(n, l)), l);
      },
      cacheSignal: function () {
        return jt(ot).controller.signal;
      },
    },
    fD = typeof WeakMap == "function" ? WeakMap : Map,
    ze = 0,
    Ie = null,
    Ee = null,
    Te = 0,
    Le = 0,
    fn = null,
    Fr = !1,
    Li = !1,
    $d = !1,
    xr = 0,
    nt = 0,
    Jr = 0,
    $a = 0,
    qd = 0,
    sn = 0,
    Bi = 0,
    Zl = null,
    Vt = null,
    Hd = !1,
    Ho = 0,
    Ab = 0,
    Yo = 1 / 0,
    Io = null,
    ea = null,
    mt = 0,
    ta = null,
    Ui = null,
    Sr = 0,
    Yd = 0,
    Id = null,
    wb = null,
    Ql = 0,
    Kd = null;
  function dn() {
    return (ze & 2) !== 0 && Te !== 0 ? Te & -Te : C.T !== null ? Wd() : $p();
  }
  function Eb() {
    if (sn === 0)
      if ((Te & 536870912) === 0 || De) {
        var n = Wu;
        ((Wu <<= 1), (Wu & 3932160) === 0 && (Wu = 262144), (sn = n));
      } else sn = 536870912;
    return ((n = on.current), n !== null && (n.flags |= 32), sn);
  }
  function Zt(n, i, l) {
    (((n === Ie && (Le === 2 || Le === 9)) || n.cancelPendingCommit !== null) &&
      ($i(n, 0), na(n, Te, sn, !1)),
      pl(n, l),
      ((ze & 2) === 0 || n !== Ie) &&
        (n === Ie &&
          ((ze & 2) === 0 && ($a |= l), nt === 4 && na(n, Te, sn, !1)),
        er(n)));
  }
  function _b(n, i, l) {
    if ((ze & 6) !== 0) throw Error(a(327));
    var c = (!l && (i & 127) === 0 && (i & n.expiredLanes) === 0) || yl(n, i),
      d = c ? vD(n, i) : Xd(n, i, !0),
      y = c;
    do {
      if (d === 0) {
        Li && !c && na(n, i, 0, !1);
        break;
      } else {
        if (((l = n.current.alternate), y && !sD(l))) {
          ((d = Xd(n, i, !1)), (y = !1));
          continue;
        }
        if (d === 2) {
          if (((y = i), n.errorRecoveryDisabledLanes & y)) var x = 0;
          else
            ((x = n.pendingLanes & -536870913),
              (x = x !== 0 ? x : x & 536870912 ? 536870912 : 0));
          if (x !== 0) {
            i = x;
            e: {
              var E = n;
              d = Zl;
              var j = E.current.memoizedState.isDehydrated;
              if ((j && ($i(E, x).flags |= 256), (x = Xd(E, x, !1)), x !== 2)) {
                if ($d && !j) {
                  ((E.errorRecoveryDisabledLanes |= y), ($a |= y), (d = 4));
                  break e;
                }
                ((y = Vt),
                  (Vt = d),
                  y !== null &&
                    (Vt === null ? (Vt = y) : Vt.push.apply(Vt, y)));
              }
              d = x;
            }
            if (((y = !1), d !== 2)) continue;
          }
        }
        if (d === 1) {
          ($i(n, 0), na(n, i, 0, !0));
          break;
        }
        e: {
          switch (((c = n), (y = d), y)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              na(c, i, sn, !Fr);
              break e;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((i & 62914560) === i && ((d = Ho + 300 - nn()), 10 < d)) {
            if ((na(c, i, sn, !Fr), Ju(c, 0, !0) !== 0)) break e;
            ((Sr = i),
              (c.timeoutHandle = r1(
                Tb.bind(
                  null,
                  c,
                  l,
                  Vt,
                  Io,
                  Hd,
                  i,
                  sn,
                  $a,
                  Bi,
                  Fr,
                  y,
                  "Throttled",
                  -0,
                  0,
                ),
                d,
              )));
            break e;
          }
          Tb(c, l, Vt, Io, Hd, i, sn, $a, Bi, Fr, y, null, -0, 0);
        }
      }
      break;
    } while (!0);
    er(n);
  }
  function Tb(n, i, l, c, d, y, x, E, j, q, G, Q, H, Y) {
    if (
      ((n.timeoutHandle = -1),
      (Q = i.subtreeFlags),
      Q & 8192 || (Q & 16785408) === 16785408)
    ) {
      ((Q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: lr,
      }),
        bb(i, y, Q));
      var fe =
        (y & 62914560) === y ? Ho - nn() : (y & 4194048) === y ? Ab - nn() : 0;
      if (((fe = ZD(Q, fe)), fe !== null)) {
        ((Sr = y),
          (n.cancelPendingCommit = fe(
            Rb.bind(null, n, i, y, l, c, d, x, E, j, G, Q, null, H, Y),
          )),
          na(n, y, x, !q));
        return;
      }
    }
    Rb(n, i, y, l, c, d, x, E, j);
  }
  function sD(n) {
    for (var i = n; ; ) {
      var l = i.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        i.flags & 16384 &&
        ((l = i.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var c = 0; c < l.length; c++) {
          var d = l[c],
            y = d.getSnapshot;
          d = d.value;
          try {
            if (!ln(y(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = i.child), i.subtreeFlags & 16384 && l !== null))
        ((l.return = i), (i = l));
      else {
        if (i === n) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === n) return !0;
          i = i.return;
        }
        ((i.sibling.return = i.return), (i = i.sibling));
      }
    }
    return !0;
  }
  function na(n, i, l, c) {
    ((i &= ~qd),
      (i &= ~$a),
      (n.suspendedLanes |= i),
      (n.pingedLanes &= ~i),
      c && (n.warmLanes |= i),
      (c = n.expirationTimes));
    for (var d = i; 0 < d; ) {
      var y = 31 - an(d),
        x = 1 << y;
      ((c[y] = -1), (d &= ~x));
    }
    l !== 0 && Lp(n, l, i);
  }
  function Ko() {
    return (ze & 6) === 0 ? (Wl(0), !1) : !0;
  }
  function Gd() {
    if (Ee !== null) {
      if (Le === 0) var n = Ee.return;
      else ((n = Ee), (fr = Ca = null), od(n), (ji = null), (Nl = 0), (n = Ee));
      for (; n !== null; ) (ab(n.alternate, n), (n = n.return));
      Ee = null;
    }
  }
  function $i(n, i) {
    var l = n.timeoutHandle;
    (l !== -1 && ((n.timeoutHandle = -1), CD(l)),
      (l = n.cancelPendingCommit),
      l !== null && ((n.cancelPendingCommit = null), l()),
      (Sr = 0),
      Gd(),
      (Ie = n),
      (Ee = l = or(n.current, null)),
      (Te = i),
      (Le = 0),
      (fn = null),
      (Fr = !1),
      (Li = yl(n, i)),
      ($d = !1),
      (Bi = sn = qd = $a = Jr = nt = 0),
      (Vt = Zl = null),
      (Hd = !1),
      (i & 8) !== 0 && (i |= i & 32));
    var c = n.entangledLanes;
    if (c !== 0)
      for (n = n.entanglements, c &= i; 0 < c; ) {
        var d = 31 - an(c),
          y = 1 << d;
        ((i |= n[d]), (c &= ~y));
      }
    return ((xr = i), so(), l);
  }
  function Mb(n, i) {
    ((Oe = null),
      (C.H = ql),
      i === Di || i === xo
        ? ((i = Ig()), (Le = 3))
        : i === Qs
          ? ((i = Ig()), (Le = 4))
          : (Le =
              i === wd
                ? 8
                : i !== null &&
                    typeof i == "object" &&
                    typeof i.then == "function"
                  ? 6
                  : 1),
      (fn = i),
      Ee === null && ((nt = 1), zo(n, _n(i, n.current))));
  }
  function Db() {
    var n = on.current;
    return n === null
      ? !0
      : (Te & 4194048) === Te
        ? jn === null
        : (Te & 62914560) === Te || (Te & 536870912) !== 0
          ? n === jn
          : !1;
  }
  function jb() {
    var n = C.H;
    return ((C.H = ql), n === null ? ql : n);
  }
  function Cb() {
    var n = C.A;
    return ((C.A = cD), n);
  }
  function Go() {
    ((nt = 4),
      Fr || ((Te & 4194048) !== Te && on.current !== null) || (Li = !0),
      ((Jr & 134217727) === 0 && ($a & 134217727) === 0) ||
        Ie === null ||
        na(Ie, Te, sn, !1));
  }
  function Xd(n, i, l) {
    var c = ze;
    ze |= 2;
    var d = jb(),
      y = Cb();
    ((Ie !== n || Te !== i) && ((Io = null), $i(n, i)), (i = !1));
    var x = nt;
    e: do
      try {
        if (Le !== 0 && Ee !== null) {
          var E = Ee,
            j = fn;
          switch (Le) {
            case 8:
              (Gd(), (x = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              on.current === null && (i = !0);
              var q = Le;
              if (((Le = 0), (fn = null), qi(n, E, j, q), l && Li)) {
                x = 0;
                break e;
              }
              break;
            default:
              ((q = Le), (Le = 0), (fn = null), qi(n, E, j, q));
          }
        }
        (dD(), (x = nt));
        break;
      } catch (G) {
        Mb(n, G);
      }
    while (!0);
    return (
      i && n.shellSuspendCounter++,
      (fr = Ca = null),
      (ze = c),
      (C.H = d),
      (C.A = y),
      Ee === null && ((Ie = null), (Te = 0), so()),
      x
    );
  }
  function dD() {
    for (; Ee !== null; ) Pb(Ee);
  }
  function vD(n, i) {
    var l = ze;
    ze |= 2;
    var c = jb(),
      d = Cb();
    Ie !== n || Te !== i
      ? ((Io = null), (Yo = nn() + 500), $i(n, i))
      : (Li = yl(n, i));
    e: do
      try {
        if (Le !== 0 && Ee !== null) {
          i = Ee;
          var y = fn;
          t: switch (Le) {
            case 1:
              ((Le = 0), (fn = null), qi(n, i, y, 1));
              break;
            case 2:
            case 9:
              if (Hg(y)) {
                ((Le = 0), (fn = null), Nb(i));
                break;
              }
              ((i = function () {
                ((Le !== 2 && Le !== 9) || Ie !== n || (Le = 7), er(n));
              }),
                y.then(i, i));
              break e;
            case 3:
              Le = 7;
              break e;
            case 4:
              Le = 5;
              break e;
            case 7:
              Hg(y)
                ? ((Le = 0), (fn = null), Nb(i))
                : ((Le = 0), (fn = null), qi(n, i, y, 7));
              break;
            case 5:
              var x = null;
              switch (Ee.tag) {
                case 26:
                  x = Ee.memoizedState;
                case 5:
                case 27:
                  var E = Ee;
                  if (x ? g1(x) : E.stateNode.complete) {
                    ((Le = 0), (fn = null));
                    var j = E.sibling;
                    if (j !== null) Ee = j;
                    else {
                      var q = E.return;
                      q !== null ? ((Ee = q), Xo(q)) : (Ee = null);
                    }
                    break t;
                  }
              }
              ((Le = 0), (fn = null), qi(n, i, y, 5));
              break;
            case 6:
              ((Le = 0), (fn = null), qi(n, i, y, 6));
              break;
            case 8:
              (Gd(), (nt = 6));
              break e;
            default:
              throw Error(a(462));
          }
        }
        hD();
        break;
      } catch (G) {
        Mb(n, G);
      }
    while (!0);
    return (
      (fr = Ca = null),
      (C.H = c),
      (C.A = d),
      (ze = l),
      Ee !== null ? 0 : ((Ie = null), (Te = 0), so(), nt)
    );
  }
  function hD() {
    for (; Ee !== null && !LT(); ) Pb(Ee);
  }
  function Pb(n) {
    var i = nb(n.alternate, n, xr);
    ((n.memoizedProps = n.pendingProps), i === null ? Xo(n) : (Ee = i));
  }
  function Nb(n) {
    var i = n,
      l = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = Q0(l, i, i.pendingProps, i.type, void 0, Te);
        break;
      case 11:
        i = Q0(l, i, i.pendingProps, i.type.render, i.ref, Te);
        break;
      case 5:
        od(i);
      default:
        (ab(l, i), (i = Ee = Cg(i, xr)), (i = nb(l, i, xr)));
    }
    ((n.memoizedProps = n.pendingProps), i === null ? Xo(n) : (Ee = i));
  }
  function qi(n, i, l, c) {
    ((fr = Ca = null), od(i), (ji = null), (Nl = 0));
    var d = i.return;
    try {
      if (nD(n, d, i, l, Te)) {
        ((nt = 1), zo(n, _n(l, n.current)), (Ee = null));
        return;
      }
    } catch (y) {
      if (d !== null) throw ((Ee = d), y);
      ((nt = 1), zo(n, _n(l, n.current)), (Ee = null));
      return;
    }
    i.flags & 32768
      ? (De || c === 1
          ? (n = !0)
          : Li || (Te & 536870912) !== 0
            ? (n = !1)
            : ((Fr = n = !0),
              (c === 2 || c === 9 || c === 3 || c === 6) &&
                ((c = on.current),
                c !== null && c.tag === 13 && (c.flags |= 16384))),
        zb(i, n))
      : Xo(i);
  }
  function Xo(n) {
    var i = n;
    do {
      if ((i.flags & 32768) !== 0) {
        zb(i, Fr);
        return;
      }
      n = i.return;
      var l = iD(i.alternate, i, xr);
      if (l !== null) {
        Ee = l;
        return;
      }
      if (((i = i.sibling), i !== null)) {
        Ee = i;
        return;
      }
      Ee = i = n;
    } while (i !== null);
    nt === 0 && (nt = 5);
  }
  function zb(n, i) {
    do {
      var l = lD(n.alternate, n);
      if (l !== null) {
        ((l.flags &= 32767), (Ee = l));
        return;
      }
      if (
        ((l = n.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !i && ((n = n.sibling), n !== null))
      ) {
        Ee = n;
        return;
      }
      Ee = n = l;
    } while (n !== null);
    ((nt = 6), (Ee = null));
  }
  function Rb(n, i, l, c, d, y, x, E, j) {
    n.cancelPendingCommit = null;
    do Vo();
    while (mt !== 0);
    if ((ze & 6) !== 0) throw Error(a(327));
    if (i !== null) {
      if (i === n.current) throw Error(a(177));
      if (
        ((y = i.lanes | i.childLanes),
        (y |= Rs),
        XT(n, l, y, x, E, j),
        n === Ie && ((Ee = Ie = null), (Te = 0)),
        (Ui = i),
        (ta = n),
        (Sr = l),
        (Yd = y),
        (Id = d),
        (wb = c),
        (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0
          ? ((n.callbackNode = null),
            (n.callbackPriority = 0),
            gD(Zu, function () {
              return ($b(), null);
            }))
          : ((n.callbackNode = null), (n.callbackPriority = 0)),
        (c = (i.flags & 13878) !== 0),
        (i.subtreeFlags & 13878) !== 0 || c)
      ) {
        ((c = C.T), (C.T = null), (d = U.p), (U.p = 2), (x = ze), (ze |= 4));
        try {
          uD(n, i, l);
        } finally {
          ((ze = x), (U.p = d), (C.T = c));
        }
      }
      ((mt = 1), kb(), Lb(), Bb());
    }
  }
  function kb() {
    if (mt === 1) {
      mt = 0;
      var n = ta,
        i = Ui,
        l = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var c = U.p;
        U.p = 2;
        var d = ze;
        ze |= 4;
        try {
          yb(i, n);
          var y = iv,
            x = Og(n.containerInfo),
            E = y.focusedElem,
            j = y.selectionRange;
          if (
            x !== E &&
            E &&
            E.ownerDocument &&
            Sg(E.ownerDocument.documentElement, E)
          ) {
            if (j !== null && js(E)) {
              var q = j.start,
                G = j.end;
              if ((G === void 0 && (G = q), "selectionStart" in E))
                ((E.selectionStart = q),
                  (E.selectionEnd = Math.min(G, E.value.length)));
              else {
                var Q = E.ownerDocument || document,
                  H = (Q && Q.defaultView) || window;
                if (H.getSelection) {
                  var Y = H.getSelection(),
                    fe = E.textContent.length,
                    pe = Math.min(j.start, fe),
                    He = j.end === void 0 ? pe : Math.min(j.end, fe);
                  !Y.extend && pe > He && ((x = He), (He = pe), (pe = x));
                  var k = xg(E, pe),
                    P = xg(E, He);
                  if (
                    k &&
                    P &&
                    (Y.rangeCount !== 1 ||
                      Y.anchorNode !== k.node ||
                      Y.anchorOffset !== k.offset ||
                      Y.focusNode !== P.node ||
                      Y.focusOffset !== P.offset)
                  ) {
                    var $ = Q.createRange();
                    ($.setStart(k.node, k.offset),
                      Y.removeAllRanges(),
                      pe > He
                        ? (Y.addRange($), Y.extend(P.node, P.offset))
                        : ($.setEnd(P.node, P.offset), Y.addRange($)));
                  }
                }
              }
            }
            for (Q = [], Y = E; (Y = Y.parentNode); )
              Y.nodeType === 1 &&
                Q.push({ element: Y, left: Y.scrollLeft, top: Y.scrollTop });
            for (
              typeof E.focus == "function" && E.focus(), E = 0;
              E < Q.length;
              E++
            ) {
              var Z = Q[E];
              ((Z.element.scrollLeft = Z.left), (Z.element.scrollTop = Z.top));
            }
          }
          ((lc = !!av), (iv = av = null));
        } finally {
          ((ze = d), (U.p = c), (C.T = l));
        }
      }
      ((n.current = i), (mt = 2));
    }
  }
  function Lb() {
    if (mt === 2) {
      mt = 0;
      var n = ta,
        i = Ui,
        l = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || l) {
        ((l = C.T), (C.T = null));
        var c = U.p;
        U.p = 2;
        var d = ze;
        ze |= 4;
        try {
          sb(n, i.alternate, i);
        } finally {
          ((ze = d), (U.p = c), (C.T = l));
        }
      }
      mt = 3;
    }
  }
  function Bb() {
    if (mt === 4 || mt === 3) {
      ((mt = 0), BT());
      var n = ta,
        i = Ui,
        l = Sr,
        c = wb;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0
        ? (mt = 5)
        : ((mt = 0), (Ui = ta = null), Ub(n, n.pendingLanes));
      var d = n.pendingLanes;
      if (
        (d === 0 && (ea = null),
        ss(l),
        (i = i.stateNode),
        rn && typeof rn.onCommitFiberRoot == "function")
      )
        try {
          rn.onCommitFiberRoot(ml, i, void 0, (i.current.flags & 128) === 128);
        } catch {}
      if (c !== null) {
        ((i = C.T), (d = U.p), (U.p = 2), (C.T = null));
        try {
          for (var y = n.onRecoverableError, x = 0; x < c.length; x++) {
            var E = c[x];
            y(E.value, { componentStack: E.stack });
          }
        } finally {
          ((C.T = i), (U.p = d));
        }
      }
      ((Sr & 3) !== 0 && Vo(),
        er(n),
        (d = n.pendingLanes),
        (l & 261930) !== 0 && (d & 42) !== 0
          ? n === Kd
            ? Ql++
            : ((Ql = 0), (Kd = n))
          : (Ql = 0),
        Wl(0));
    }
  }
  function Ub(n, i) {
    (n.pooledCacheLanes &= i) === 0 &&
      ((i = n.pooledCache), i != null && ((n.pooledCache = null), Cl(i)));
  }
  function Vo() {
    return (kb(), Lb(), Bb(), $b());
  }
  function $b() {
    if (mt !== 5) return !1;
    var n = ta,
      i = Yd;
    Yd = 0;
    var l = ss(Sr),
      c = C.T,
      d = U.p;
    try {
      ((U.p = 32 > l ? 32 : l), (C.T = null), (l = Id), (Id = null));
      var y = ta,
        x = Sr;
      if (((mt = 0), (Ui = ta = null), (Sr = 0), (ze & 6) !== 0))
        throw Error(a(331));
      var E = ze;
      if (
        ((ze |= 4),
        Sb(y.current),
        gb(y, y.current, x, l),
        (ze = E),
        Wl(0, !1),
        rn && typeof rn.onPostCommitFiberRoot == "function")
      )
        try {
          rn.onPostCommitFiberRoot(ml, y);
        } catch {}
      return !0;
    } finally {
      ((U.p = d), (C.T = c), Ub(n, i));
    }
  }
  function qb(n, i, l) {
    ((i = _n(l, i)),
      (i = Ad(n.stateNode, i, 2)),
      (n = Vr(n, i, 2)),
      n !== null && (pl(n, 2), er(n)));
  }
  function Be(n, i, l) {
    if (n.tag === 3) qb(n, n, l);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          qb(i, n, l);
          break;
        } else if (i.tag === 1) {
          var c = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof c.componentDidCatch == "function" &&
              (ea === null || !ea.has(c)))
          ) {
            ((n = _n(l, n)),
              (l = H0(2)),
              (c = Vr(i, l, 2)),
              c !== null && (Y0(l, c, i, n), pl(c, 2), er(c)));
            break;
          }
        }
        i = i.return;
      }
  }
  function Vd(n, i, l) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new fD();
      var d = new Set();
      c.set(i, d);
    } else ((d = c.get(i)), d === void 0 && ((d = new Set()), c.set(i, d)));
    d.has(l) ||
      (($d = !0), d.add(l), (n = mD.bind(null, n, i, l)), i.then(n, n));
  }
  function mD(n, i, l) {
    var c = n.pingCache;
    (c !== null && c.delete(i),
      (n.pingedLanes |= n.suspendedLanes & l),
      (n.warmLanes &= ~l),
      Ie === n &&
        (Te & l) === l &&
        (nt === 4 || (nt === 3 && (Te & 62914560) === Te && 300 > nn() - Ho)
          ? (ze & 2) === 0 && $i(n, 0)
          : (qd |= l),
        Bi === Te && (Bi = 0)),
      er(n));
  }
  function Hb(n, i) {
    (i === 0 && (i = kp()), (n = Ma(n, i)), n !== null && (pl(n, i), er(n)));
  }
  function yD(n) {
    var i = n.memoizedState,
      l = 0;
    (i !== null && (l = i.retryLane), Hb(n, l));
  }
  function pD(n, i) {
    var l = 0;
    switch (n.tag) {
      case 31:
      case 13:
        var c = n.stateNode,
          d = n.memoizedState;
        d !== null && (l = d.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      case 22:
        c = n.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    (c !== null && c.delete(i), Hb(n, l));
  }
  function gD(n, i) {
    return us(n, i);
  }
  var Zo = null,
    Hi = null,
    Zd = !1,
    Qo = !1,
    Qd = !1,
    ra = 0;
  function er(n) {
    (n !== Hi &&
      n.next === null &&
      (Hi === null ? (Zo = Hi = n) : (Hi = Hi.next = n)),
      (Qo = !0),
      Zd || ((Zd = !0), xD()));
  }
  function Wl(n, i) {
    if (!Qd && Qo) {
      Qd = !0;
      do
        for (var l = !1, c = Zo; c !== null; ) {
          if (n !== 0) {
            var d = c.pendingLanes;
            if (d === 0) var y = 0;
            else {
              var x = c.suspendedLanes,
                E = c.pingedLanes;
              ((y = (1 << (31 - an(42 | n) + 1)) - 1),
                (y &= d & ~(x & ~E)),
                (y = y & 201326741 ? (y & 201326741) | 1 : y ? y | 2 : 0));
            }
            y !== 0 && ((l = !0), Gb(c, y));
          } else
            ((y = Te),
              (y = Ju(
                c,
                c === Ie ? y : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== -1,
              )),
              (y & 3) === 0 || yl(c, y) || ((l = !0), Gb(c, y)));
          c = c.next;
        }
      while (l);
      Qd = !1;
    }
  }
  function bD() {
    Yb();
  }
  function Yb() {
    Qo = Zd = !1;
    var n = 0;
    ra !== 0 && jD() && (n = ra);
    for (var i = nn(), l = null, c = Zo; c !== null; ) {
      var d = c.next,
        y = Ib(c, i);
      (y === 0
        ? ((c.next = null),
          l === null ? (Zo = d) : (l.next = d),
          d === null && (Hi = l))
        : ((l = c), (n !== 0 || (y & 3) !== 0) && (Qo = !0)),
        (c = d));
    }
    ((mt !== 0 && mt !== 5) || Wl(n), ra !== 0 && (ra = 0));
  }
  function Ib(n, i) {
    for (
      var l = n.suspendedLanes,
        c = n.pingedLanes,
        d = n.expirationTimes,
        y = n.pendingLanes & -62914561;
      0 < y;
    ) {
      var x = 31 - an(y),
        E = 1 << x,
        j = d[x];
      (j === -1
        ? ((E & l) === 0 || (E & c) !== 0) && (d[x] = GT(E, i))
        : j <= i && (n.expiredLanes |= E),
        (y &= ~E));
    }
    if (
      ((i = Ie),
      (l = Te),
      (l = Ju(
        n,
        n === i ? l : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      (c = n.callbackNode),
      l === 0 ||
        (n === i && (Le === 2 || Le === 9)) ||
        n.cancelPendingCommit !== null)
    )
      return (
        c !== null && c !== null && os(c),
        (n.callbackNode = null),
        (n.callbackPriority = 0)
      );
    if ((l & 3) === 0 || yl(n, l)) {
      if (((i = l & -l), i === n.callbackPriority)) return i;
      switch ((c !== null && os(c), ss(l))) {
        case 2:
        case 8:
          l = zp;
          break;
        case 32:
          l = Zu;
          break;
        case 268435456:
          l = Rp;
          break;
        default:
          l = Zu;
      }
      return (
        (c = Kb.bind(null, n)),
        (l = us(l, c)),
        (n.callbackPriority = i),
        (n.callbackNode = l),
        i
      );
    }
    return (
      c !== null && c !== null && os(c),
      (n.callbackPriority = 2),
      (n.callbackNode = null),
      2
    );
  }
  function Kb(n, i) {
    if (mt !== 0 && mt !== 5)
      return ((n.callbackNode = null), (n.callbackPriority = 0), null);
    var l = n.callbackNode;
    if (Vo() && n.callbackNode !== l) return null;
    var c = Te;
    return (
      (c = Ju(
        n,
        n === Ie ? c : 0,
        n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
      )),
      c === 0
        ? null
        : (_b(n, c, i),
          Ib(n, nn()),
          n.callbackNode != null && n.callbackNode === l
            ? Kb.bind(null, n)
            : null)
    );
  }
  function Gb(n, i) {
    if (Vo()) return null;
    _b(n, i, !0);
  }
  function xD() {
    PD(function () {
      (ze & 6) !== 0 ? us(Np, bD) : Yb();
    });
  }
  function Wd() {
    if (ra === 0) {
      var n = Ti;
      (n === 0 && ((n = Qu), (Qu <<= 1), (Qu & 261888) === 0 && (Qu = 256)),
        (ra = n));
    }
    return ra;
  }
  function Xb(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean"
      ? null
      : typeof n == "function"
        ? n
        : ro("" + n);
  }
  function Vb(n, i) {
    var l = i.ownerDocument.createElement("input");
    return (
      (l.name = i.name),
      (l.value = i.value),
      n.id && l.setAttribute("form", n.id),
      i.parentNode.insertBefore(l, i),
      (n = new FormData(n)),
      l.parentNode.removeChild(l),
      n
    );
  }
  function SD(n, i, l, c, d) {
    if (i === "submit" && l && l.stateNode === d) {
      var y = Xb((d[Yt] || null).action),
        x = c.submitter;
      x &&
        ((i = (i = x[Yt] || null)
          ? Xb(i.formAction)
          : x.getAttribute("formAction")),
        i !== null && ((y = i), (x = null)));
      var E = new uo("action", "action", null, c, d);
      n.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (c.defaultPrevented) {
                if (ra !== 0) {
                  var j = x ? Vb(d, x) : new FormData(d);
                  pd(
                    l,
                    { pending: !0, data: j, method: d.method, action: y },
                    null,
                    j,
                  );
                }
              } else
                typeof y == "function" &&
                  (E.preventDefault(),
                  (j = x ? Vb(d, x) : new FormData(d)),
                  pd(
                    l,
                    { pending: !0, data: j, method: d.method, action: y },
                    y,
                    j,
                  ));
            },
            currentTarget: d,
          },
        ],
      });
    }
  }
  for (var Fd = 0; Fd < zs.length; Fd++) {
    var Jd = zs[Fd],
      OD = Jd.toLowerCase(),
      AD = Jd[0].toUpperCase() + Jd.slice(1);
    Yn(OD, "on" + AD);
  }
  (Yn(Eg, "onAnimationEnd"),
    Yn(_g, "onAnimationIteration"),
    Yn(Tg, "onAnimationStart"),
    Yn("dblclick", "onDoubleClick"),
    Yn("focusin", "onFocus"),
    Yn("focusout", "onBlur"),
    Yn(UM, "onTransitionRun"),
    Yn($M, "onTransitionStart"),
    Yn(qM, "onTransitionCancel"),
    Yn(Mg, "onTransitionEnd"),
    vi("onMouseEnter", ["mouseout", "mouseover"]),
    vi("onMouseLeave", ["mouseout", "mouseover"]),
    vi("onPointerEnter", ["pointerout", "pointerover"]),
    vi("onPointerLeave", ["pointerout", "pointerover"]),
    wa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    wa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    wa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    wa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    wa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    wa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Fl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wD = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Fl),
    );
  function Zb(n, i) {
    i = (i & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var c = n[l],
        d = c.event;
      c = c.listeners;
      e: {
        var y = void 0;
        if (i)
          for (var x = c.length - 1; 0 <= x; x--) {
            var E = c[x],
              j = E.instance,
              q = E.currentTarget;
            if (((E = E.listener), j !== y && d.isPropagationStopped()))
              break e;
            ((y = E), (d.currentTarget = q));
            try {
              y(d);
            } catch (G) {
              fo(G);
            }
            ((d.currentTarget = null), (y = j));
          }
        else
          for (x = 0; x < c.length; x++) {
            if (
              ((E = c[x]),
              (j = E.instance),
              (q = E.currentTarget),
              (E = E.listener),
              j !== y && d.isPropagationStopped())
            )
              break e;
            ((y = E), (d.currentTarget = q));
            try {
              y(d);
            } catch (G) {
              fo(G);
            }
            ((d.currentTarget = null), (y = j));
          }
      }
    }
  }
  function _e(n, i) {
    var l = i[ds];
    l === void 0 && (l = i[ds] = new Set());
    var c = n + "__bubble";
    l.has(c) || (Qb(i, n, 2, !1), l.add(c));
  }
  function ev(n, i, l) {
    var c = 0;
    (i && (c |= 4), Qb(l, n, c, i));
  }
  var Wo = "_reactListening" + Math.random().toString(36).slice(2);
  function tv(n) {
    if (!n[Wo]) {
      ((n[Wo] = !0),
        Yp.forEach(function (l) {
          l !== "selectionchange" && (wD.has(l) || ev(l, !1, n), ev(l, !0, n));
        }));
      var i = n.nodeType === 9 ? n : n.ownerDocument;
      i === null || i[Wo] || ((i[Wo] = !0), ev("selectionchange", !1, i));
    }
  }
  function Qb(n, i, l, c) {
    switch (E1(i)) {
      case 2:
        var d = FD;
        break;
      case 8:
        d = JD;
        break;
      default:
        d = yv;
    }
    ((l = d.bind(null, i, l, n)),
      (d = void 0),
      !Ss ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (d = !0),
      c
        ? d !== void 0
          ? n.addEventListener(i, l, { capture: !0, passive: d })
          : n.addEventListener(i, l, !0)
        : d !== void 0
          ? n.addEventListener(i, l, { passive: d })
          : n.addEventListener(i, l, !1));
  }
  function nv(n, i, l, c, d) {
    var y = c;
    if ((i & 1) === 0 && (i & 2) === 0 && c !== null)
      e: for (;;) {
        if (c === null) return;
        var x = c.tag;
        if (x === 3 || x === 4) {
          var E = c.stateNode.containerInfo;
          if (E === d) break;
          if (x === 4)
            for (x = c.return; x !== null; ) {
              var j = x.tag;
              if ((j === 3 || j === 4) && x.stateNode.containerInfo === d)
                return;
              x = x.return;
            }
          for (; E !== null; ) {
            if (((x = fi(E)), x === null)) return;
            if (((j = x.tag), j === 5 || j === 6 || j === 26 || j === 27)) {
              c = y = x;
              continue e;
            }
            E = E.parentNode;
          }
        }
        c = c.return;
      }
    tg(function () {
      var q = y,
        G = bs(l),
        Q = [];
      e: {
        var H = Dg.get(n);
        if (H !== void 0) {
          var Y = uo,
            fe = n;
          switch (n) {
            case "keypress":
              if (io(l) === 0) break e;
            case "keydown":
            case "keyup":
              Y = pM;
              break;
            case "focusin":
              ((fe = "focus"), (Y = Es));
              break;
            case "focusout":
              ((fe = "blur"), (Y = Es));
              break;
            case "beforeblur":
            case "afterblur":
              Y = Es;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = ag;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = iM;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = xM;
              break;
            case Eg:
            case _g:
            case Tg:
              Y = oM;
              break;
            case Mg:
              Y = OM;
              break;
            case "scroll":
            case "scrollend":
              Y = rM;
              break;
            case "wheel":
              Y = wM;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = fM;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = lg;
              break;
            case "toggle":
            case "beforetoggle":
              Y = _M;
          }
          var pe = (i & 4) !== 0,
            He = !pe && (n === "scroll" || n === "scrollend"),
            k = pe ? (H !== null ? H + "Capture" : null) : H;
          pe = [];
          for (var P = q, $; P !== null; ) {
            var Z = P;
            if (
              (($ = Z.stateNode),
              (Z = Z.tag),
              (Z !== 5 && Z !== 26 && Z !== 27) ||
                $ === null ||
                k === null ||
                ((Z = xl(P, k)), Z != null && pe.push(Jl(P, Z, $))),
              He)
            )
              break;
            P = P.return;
          }
          0 < pe.length &&
            ((H = new Y(H, fe, null, l, G)),
            Q.push({ event: H, listeners: pe }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (
            ((H = n === "mouseover" || n === "pointerover"),
            (Y = n === "mouseout" || n === "pointerout"),
            H &&
              l !== gs &&
              (fe = l.relatedTarget || l.fromElement) &&
              (fi(fe) || fe[ci]))
          )
            break e;
          if (
            (Y || H) &&
            ((H =
              G.window === G
                ? G
                : (H = G.ownerDocument)
                  ? H.defaultView || H.parentWindow
                  : window),
            Y
              ? ((fe = l.relatedTarget || l.toElement),
                (Y = q),
                (fe = fe ? fi(fe) : null),
                fe !== null &&
                  ((He = o(fe)),
                  (pe = fe.tag),
                  fe !== He || (pe !== 5 && pe !== 27 && pe !== 6)) &&
                  (fe = null))
              : ((Y = null), (fe = q)),
            Y !== fe)
          ) {
            if (
              ((pe = ag),
              (Z = "onMouseLeave"),
              (k = "onMouseEnter"),
              (P = "mouse"),
              (n === "pointerout" || n === "pointerover") &&
                ((pe = lg),
                (Z = "onPointerLeave"),
                (k = "onPointerEnter"),
                (P = "pointer")),
              (He = Y == null ? H : bl(Y)),
              ($ = fe == null ? H : bl(fe)),
              (H = new pe(Z, P + "leave", Y, l, G)),
              (H.target = He),
              (H.relatedTarget = $),
              (Z = null),
              fi(G) === q &&
                ((pe = new pe(k, P + "enter", fe, l, G)),
                (pe.target = $),
                (pe.relatedTarget = He),
                (Z = pe)),
              (He = Z),
              Y && fe)
            )
              t: {
                for (pe = ED, k = Y, P = fe, $ = 0, Z = k; Z; Z = pe(Z)) $++;
                Z = 0;
                for (var me = P; me; me = pe(me)) Z++;
                for (; 0 < $ - Z; ) ((k = pe(k)), $--);
                for (; 0 < Z - $; ) ((P = pe(P)), Z--);
                for (; $--; ) {
                  if (k === P || (P !== null && k === P.alternate)) {
                    pe = k;
                    break t;
                  }
                  ((k = pe(k)), (P = pe(P)));
                }
                pe = null;
              }
            else pe = null;
            (Y !== null && Wb(Q, H, Y, pe, !1),
              fe !== null && He !== null && Wb(Q, He, fe, pe, !0));
          }
        }
        e: {
          if (
            ((H = q ? bl(q) : window),
            (Y = H.nodeName && H.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && H.type === "file"))
          )
            var Ce = hg;
          else if (dg(H))
            if (mg) Ce = kM;
            else {
              Ce = zM;
              var de = NM;
            }
          else
            ((Y = H.nodeName),
              !Y ||
              Y.toLowerCase() !== "input" ||
              (H.type !== "checkbox" && H.type !== "radio")
                ? q && ps(q.elementType) && (Ce = hg)
                : (Ce = RM));
          if (Ce && (Ce = Ce(n, q))) {
            vg(Q, Ce, l, G);
            break e;
          }
          (de && de(n, H, q),
            n === "focusout" &&
              q &&
              H.type === "number" &&
              q.memoizedProps.value != null &&
              ys(H, "number", H.value));
        }
        switch (((de = q ? bl(q) : window), n)) {
          case "focusin":
            (dg(de) || de.contentEditable === "true") &&
              ((bi = de), (Cs = q), (Ml = null));
            break;
          case "focusout":
            Ml = Cs = bi = null;
            break;
          case "mousedown":
            Ps = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ps = !1), Ag(Q, l, G));
            break;
          case "selectionchange":
            if (BM) break;
          case "keydown":
          case "keyup":
            Ag(Q, l, G);
        }
        var Ae;
        if (Ts)
          e: {
            switch (n) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
        else
          gi
            ? fg(n, l) && (Me = "onCompositionEnd")
            : n === "keydown" &&
              l.keyCode === 229 &&
              (Me = "onCompositionStart");
        (Me &&
          (ug &&
            l.locale !== "ko" &&
            (gi || Me !== "onCompositionStart"
              ? Me === "onCompositionEnd" && gi && (Ae = ng())
              : ((qr = G),
                (Os = "value" in qr ? qr.value : qr.textContent),
                (gi = !0))),
          (de = Fo(q, Me)),
          0 < de.length &&
            ((Me = new ig(Me, n, null, l, G)),
            Q.push({ event: Me, listeners: de }),
            Ae
              ? (Me.data = Ae)
              : ((Ae = sg(l)), Ae !== null && (Me.data = Ae)))),
          (Ae = MM ? DM(n, l) : jM(n, l)) &&
            ((Me = Fo(q, "onBeforeInput")),
            0 < Me.length &&
              ((de = new ig("onBeforeInput", "beforeinput", null, l, G)),
              Q.push({ event: de, listeners: Me }),
              (de.data = Ae))),
          SD(Q, n, q, l, G));
      }
      Zb(Q, i);
    });
  }
  function Jl(n, i, l) {
    return { instance: n, listener: i, currentTarget: l };
  }
  function Fo(n, i) {
    for (var l = i + "Capture", c = []; n !== null; ) {
      var d = n,
        y = d.stateNode;
      if (
        ((d = d.tag),
        (d !== 5 && d !== 26 && d !== 27) ||
          y === null ||
          ((d = xl(n, l)),
          d != null && c.unshift(Jl(n, d, y)),
          (d = xl(n, i)),
          d != null && c.push(Jl(n, d, y))),
        n.tag === 3)
      )
        return c;
      n = n.return;
    }
    return [];
  }
  function ED(n) {
    if (n === null) return null;
    do n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function Wb(n, i, l, c, d) {
    for (var y = i._reactName, x = []; l !== null && l !== c; ) {
      var E = l,
        j = E.alternate,
        q = E.stateNode;
      if (((E = E.tag), j !== null && j === c)) break;
      ((E !== 5 && E !== 26 && E !== 27) ||
        q === null ||
        ((j = q),
        d
          ? ((q = xl(l, y)), q != null && x.unshift(Jl(l, q, j)))
          : d || ((q = xl(l, y)), q != null && x.push(Jl(l, q, j)))),
        (l = l.return));
    }
    x.length !== 0 && n.push({ event: i, listeners: x });
  }
  var _D = /\r\n?/g,
    TD = /\u0000|\uFFFD/g;
  function Fb(n) {
    return (typeof n == "string" ? n : "" + n)
      .replace(
        _D,
        `
`,
      )
      .replace(TD, "");
  }
  function Jb(n, i) {
    return ((i = Fb(i)), Fb(n) === i);
  }
  function qe(n, i, l, c, d, y) {
    switch (l) {
      case "children":
        typeof c == "string"
          ? i === "body" || (i === "textarea" && c === "") || mi(n, c)
          : (typeof c == "number" || typeof c == "bigint") &&
            i !== "body" &&
            mi(n, "" + c);
        break;
      case "className":
        to(n, "class", c);
        break;
      case "tabIndex":
        to(n, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        to(n, l, c);
        break;
      case "style":
        Jp(n, c, y);
        break;
      case "data":
        if (i !== "object") {
          to(n, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (i !== "a" || l !== "href")) {
          n.removeAttribute(l);
          break;
        }
        if (
          c == null ||
          typeof c == "function" ||
          typeof c == "symbol" ||
          typeof c == "boolean"
        ) {
          n.removeAttribute(l);
          break;
        }
        ((c = ro("" + c)), n.setAttribute(l, c));
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          n.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof y == "function" &&
            (l === "formAction"
              ? (i !== "input" && qe(n, i, "name", d.name, d, null),
                qe(n, i, "formEncType", d.formEncType, d, null),
                qe(n, i, "formMethod", d.formMethod, d, null),
                qe(n, i, "formTarget", d.formTarget, d, null))
              : (qe(n, i, "encType", d.encType, d, null),
                qe(n, i, "method", d.method, d, null),
                qe(n, i, "target", d.target, d, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          n.removeAttribute(l);
          break;
        }
        ((c = ro("" + c)), n.setAttribute(l, c));
        break;
      case "onClick":
        c != null && (n.onclick = lr);
        break;
      case "onScroll":
        c != null && _e("scroll", n);
        break;
      case "onScrollEnd":
        c != null && _e("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(a(61));
          if (((l = c.__html), l != null)) {
            if (d.children != null) throw Error(a(60));
            n.innerHTML = l;
          }
        }
        break;
      case "multiple":
        n.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        n.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          c == null ||
          typeof c == "function" ||
          typeof c == "boolean" ||
          typeof c == "symbol"
        ) {
          n.removeAttribute("xlink:href");
          break;
        }
        ((l = ro("" + c)),
          n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol"
          ? n.setAttribute(l, "" + c)
          : n.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol"
          ? n.setAttribute(l, "")
          : n.removeAttribute(l);
        break;
      case "capture":
      case "download":
        c === !0
          ? n.setAttribute(l, "")
          : c !== !1 &&
              c != null &&
              typeof c != "function" &&
              typeof c != "symbol"
            ? n.setAttribute(l, c)
            : n.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        !isNaN(c) &&
        1 <= c
          ? n.setAttribute(l, c)
          : n.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c)
          ? n.removeAttribute(l)
          : n.setAttribute(l, c);
        break;
      case "popover":
        (_e("beforetoggle", n), _e("toggle", n), eo(n, "popover", c));
        break;
      case "xlinkActuate":
        ir(n, "http://www.w3.org/1999/xlink", "xlink:actuate", c);
        break;
      case "xlinkArcrole":
        ir(n, "http://www.w3.org/1999/xlink", "xlink:arcrole", c);
        break;
      case "xlinkRole":
        ir(n, "http://www.w3.org/1999/xlink", "xlink:role", c);
        break;
      case "xlinkShow":
        ir(n, "http://www.w3.org/1999/xlink", "xlink:show", c);
        break;
      case "xlinkTitle":
        ir(n, "http://www.w3.org/1999/xlink", "xlink:title", c);
        break;
      case "xlinkType":
        ir(n, "http://www.w3.org/1999/xlink", "xlink:type", c);
        break;
      case "xmlBase":
        ir(n, "http://www.w3.org/XML/1998/namespace", "xml:base", c);
        break;
      case "xmlLang":
        ir(n, "http://www.w3.org/XML/1998/namespace", "xml:lang", c);
        break;
      case "xmlSpace":
        ir(n, "http://www.w3.org/XML/1998/namespace", "xml:space", c);
        break;
      case "is":
        eo(n, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = tM.get(l) || l), eo(n, l, c));
    }
  }
  function rv(n, i, l, c, d, y) {
    switch (l) {
      case "style":
        Jp(n, c, y);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c)) throw Error(a(61));
          if (((l = c.__html), l != null)) {
            if (d.children != null) throw Error(a(60));
            n.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof c == "string"
          ? mi(n, c)
          : (typeof c == "number" || typeof c == "bigint") && mi(n, "" + c);
        break;
      case "onScroll":
        c != null && _e("scroll", n);
        break;
      case "onScrollEnd":
        c != null && _e("scrollend", n);
        break;
      case "onClick":
        c != null && (n.onclick = lr);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ip.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((d = l.endsWith("Capture")),
              (i = l.slice(2, d ? l.length - 7 : void 0)),
              (y = n[Yt] || null),
              (y = y != null ? y[l] : null),
              typeof y == "function" && n.removeEventListener(i, y, d),
              typeof c == "function")
            ) {
              (typeof y != "function" &&
                y !== null &&
                (l in n
                  ? (n[l] = null)
                  : n.hasAttribute(l) && n.removeAttribute(l)),
                n.addEventListener(i, c, d));
              break e;
            }
            l in n
              ? (n[l] = c)
              : c === !0
                ? n.setAttribute(l, "")
                : eo(n, l, c);
          }
    }
  }
  function Pt(n, i, l) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (_e("error", n), _e("load", n));
        var c = !1,
          d = !1,
          y;
        for (y in l)
          if (l.hasOwnProperty(y)) {
            var x = l[y];
            if (x != null)
              switch (y) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, i));
                default:
                  qe(n, i, y, x, l, null);
              }
          }
        (d && qe(n, i, "srcSet", l.srcSet, l, null),
          c && qe(n, i, "src", l.src, l, null));
        return;
      case "input":
        _e("invalid", n);
        var E = (y = x = d = null),
          j = null,
          q = null;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var G = l[c];
            if (G != null)
              switch (c) {
                case "name":
                  d = G;
                  break;
                case "type":
                  x = G;
                  break;
                case "checked":
                  j = G;
                  break;
                case "defaultChecked":
                  q = G;
                  break;
                case "value":
                  y = G;
                  break;
                case "defaultValue":
                  E = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(a(137, i));
                  break;
                default:
                  qe(n, i, c, G, l, null);
              }
          }
        Zp(n, y, E, j, q, x, d, !1);
        return;
      case "select":
        (_e("invalid", n), (c = x = y = null));
        for (d in l)
          if (l.hasOwnProperty(d) && ((E = l[d]), E != null))
            switch (d) {
              case "value":
                y = E;
                break;
              case "defaultValue":
                x = E;
                break;
              case "multiple":
                c = E;
              default:
                qe(n, i, d, E, l, null);
            }
        ((i = y),
          (l = x),
          (n.multiple = !!c),
          i != null ? hi(n, !!c, i, !1) : l != null && hi(n, !!c, l, !0));
        return;
      case "textarea":
        (_e("invalid", n), (y = d = c = null));
        for (x in l)
          if (l.hasOwnProperty(x) && ((E = l[x]), E != null))
            switch (x) {
              case "value":
                c = E;
                break;
              case "defaultValue":
                d = E;
                break;
              case "children":
                y = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(a(91));
                break;
              default:
                qe(n, i, x, E, l, null);
            }
        Wp(n, c, d, y);
        return;
      case "option":
        for (j in l)
          if (l.hasOwnProperty(j) && ((c = l[j]), c != null))
            switch (j) {
              case "selected":
                n.selected =
                  c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                qe(n, i, j, c, l, null);
            }
        return;
      case "dialog":
        (_e("beforetoggle", n),
          _e("toggle", n),
          _e("cancel", n),
          _e("close", n));
        break;
      case "iframe":
      case "object":
        _e("load", n);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Fl.length; c++) _e(Fl[c], n);
        break;
      case "image":
        (_e("error", n), _e("load", n));
        break;
      case "details":
        _e("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        (_e("error", n), _e("load", n));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in l)
          if (l.hasOwnProperty(q) && ((c = l[q]), c != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, i));
              default:
                qe(n, i, q, c, l, null);
            }
        return;
      default:
        if (ps(i)) {
          for (G in l)
            l.hasOwnProperty(G) &&
              ((c = l[G]), c !== void 0 && rv(n, i, G, c, l, void 0));
          return;
        }
    }
    for (E in l)
      l.hasOwnProperty(E) && ((c = l[E]), c != null && qe(n, i, E, c, l, null));
  }
  function MD(n, i, l, c) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null,
          y = null,
          x = null,
          E = null,
          j = null,
          q = null,
          G = null;
        for (Y in l) {
          var Q = l[Y];
          if (l.hasOwnProperty(Y) && Q != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = Q;
              default:
                c.hasOwnProperty(Y) || qe(n, i, Y, null, c, Q);
            }
        }
        for (var H in c) {
          var Y = c[H];
          if (((Q = l[H]), c.hasOwnProperty(H) && (Y != null || Q != null)))
            switch (H) {
              case "type":
                y = Y;
                break;
              case "name":
                d = Y;
                break;
              case "checked":
                q = Y;
                break;
              case "defaultChecked":
                G = Y;
                break;
              case "value":
                x = Y;
                break;
              case "defaultValue":
                E = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(a(137, i));
                break;
              default:
                Y !== Q && qe(n, i, H, Y, c, Q);
            }
        }
        ms(n, x, E, j, q, G, y, d);
        return;
      case "select":
        Y = x = E = H = null;
        for (y in l)
          if (((j = l[y]), l.hasOwnProperty(y) && j != null))
            switch (y) {
              case "value":
                break;
              case "multiple":
                Y = j;
              default:
                c.hasOwnProperty(y) || qe(n, i, y, null, c, j);
            }
        for (d in c)
          if (
            ((y = c[d]),
            (j = l[d]),
            c.hasOwnProperty(d) && (y != null || j != null))
          )
            switch (d) {
              case "value":
                H = y;
                break;
              case "defaultValue":
                E = y;
                break;
              case "multiple":
                x = y;
              default:
                y !== j && qe(n, i, d, y, c, j);
            }
        ((i = E),
          (l = x),
          (c = Y),
          H != null
            ? hi(n, !!l, H, !1)
            : !!c != !!l &&
              (i != null ? hi(n, !!l, i, !0) : hi(n, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        Y = H = null;
        for (E in l)
          if (
            ((d = l[E]),
            l.hasOwnProperty(E) && d != null && !c.hasOwnProperty(E))
          )
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                qe(n, i, E, null, c, d);
            }
        for (x in c)
          if (
            ((d = c[x]),
            (y = l[x]),
            c.hasOwnProperty(x) && (d != null || y != null))
          )
            switch (x) {
              case "value":
                H = d;
                break;
              case "defaultValue":
                Y = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(a(91));
                break;
              default:
                d !== y && qe(n, i, x, d, c, y);
            }
        Qp(n, H, Y);
        return;
      case "option":
        for (var fe in l)
          if (
            ((H = l[fe]),
            l.hasOwnProperty(fe) && H != null && !c.hasOwnProperty(fe))
          )
            switch (fe) {
              case "selected":
                n.selected = !1;
                break;
              default:
                qe(n, i, fe, null, c, H);
            }
        for (j in c)
          if (
            ((H = c[j]),
            (Y = l[j]),
            c.hasOwnProperty(j) && H !== Y && (H != null || Y != null))
          )
            switch (j) {
              case "selected":
                n.selected =
                  H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                qe(n, i, j, H, c, Y);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var pe in l)
          ((H = l[pe]),
            l.hasOwnProperty(pe) &&
              H != null &&
              !c.hasOwnProperty(pe) &&
              qe(n, i, pe, null, c, H));
        for (q in c)
          if (
            ((H = c[q]),
            (Y = l[q]),
            c.hasOwnProperty(q) && H !== Y && (H != null || Y != null))
          )
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(a(137, i));
                break;
              default:
                qe(n, i, q, H, c, Y);
            }
        return;
      default:
        if (ps(i)) {
          for (var He in l)
            ((H = l[He]),
              l.hasOwnProperty(He) &&
                H !== void 0 &&
                !c.hasOwnProperty(He) &&
                rv(n, i, He, void 0, c, H));
          for (G in c)
            ((H = c[G]),
              (Y = l[G]),
              !c.hasOwnProperty(G) ||
                H === Y ||
                (H === void 0 && Y === void 0) ||
                rv(n, i, G, H, c, Y));
          return;
        }
    }
    for (var k in l)
      ((H = l[k]),
        l.hasOwnProperty(k) &&
          H != null &&
          !c.hasOwnProperty(k) &&
          qe(n, i, k, null, c, H));
    for (Q in c)
      ((H = c[Q]),
        (Y = l[Q]),
        !c.hasOwnProperty(Q) ||
          H === Y ||
          (H == null && Y == null) ||
          qe(n, i, Q, H, c, Y));
  }
  function e1(n) {
    switch (n) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function DD() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var n = 0, i = 0, l = performance.getEntriesByType("resource"), c = 0;
        c < l.length;
        c++
      ) {
        var d = l[c],
          y = d.transferSize,
          x = d.initiatorType,
          E = d.duration;
        if (y && E && e1(x)) {
          for (x = 0, E = d.responseEnd, c += 1; c < l.length; c++) {
            var j = l[c],
              q = j.startTime;
            if (q > E) break;
            var G = j.transferSize,
              Q = j.initiatorType;
            G &&
              e1(Q) &&
              ((j = j.responseEnd), (x += G * (j < E ? 1 : (E - q) / (j - q))));
          }
          if ((--c, (i += (8 * (y + x)) / (d.duration / 1e3)), n++, 10 < n))
            break;
        }
      }
      if (0 < n) return i / n / 1e6;
    }
    return navigator.connection &&
      ((n = navigator.connection.downlink), typeof n == "number")
      ? n
      : 5;
  }
  var av = null,
    iv = null;
  function Jo(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function t1(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function n1(n, i) {
    if (n === 0)
      switch (i) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && i === "foreignObject" ? 0 : n;
  }
  function lv(n, i) {
    return (
      n === "textarea" ||
      n === "noscript" ||
      typeof i.children == "string" ||
      typeof i.children == "number" ||
      typeof i.children == "bigint" ||
      (typeof i.dangerouslySetInnerHTML == "object" &&
        i.dangerouslySetInnerHTML !== null &&
        i.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uv = null;
  function jD() {
    var n = window.event;
    return n && n.type === "popstate"
      ? n === uv
        ? !1
        : ((uv = n), !0)
      : ((uv = null), !1);
  }
  var r1 = typeof setTimeout == "function" ? setTimeout : void 0,
    CD = typeof clearTimeout == "function" ? clearTimeout : void 0,
    a1 = typeof Promise == "function" ? Promise : void 0,
    PD =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof a1 < "u"
          ? function (n) {
              return a1.resolve(null).then(n).catch(ND);
            }
          : r1;
  function ND(n) {
    setTimeout(function () {
      throw n;
    });
  }
  function aa(n) {
    return n === "head";
  }
  function i1(n, i) {
    var l = i,
      c = 0;
    do {
      var d = l.nextSibling;
      if ((n.removeChild(l), d && d.nodeType === 8))
        if (((l = d.data), l === "/$" || l === "/&")) {
          if (c === 0) {
            (n.removeChild(d), Gi(i));
            return;
          }
          c--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          c++;
        else if (l === "html") eu(n.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = n.ownerDocument.head), eu(l));
          for (var y = l.firstChild; y; ) {
            var x = y.nextSibling,
              E = y.nodeName;
            (y[gl] ||
              E === "SCRIPT" ||
              E === "STYLE" ||
              (E === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(y),
              (y = x));
          }
        } else l === "body" && eu(n.ownerDocument.body);
      l = d;
    } while (l);
    Gi(i);
  }
  function l1(n, i) {
    var l = n;
    n = 0;
    do {
      var c = l.nextSibling;
      if (
        (l.nodeType === 1
          ? i
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (i
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        c && c.nodeType === 8)
      )
        if (((l = c.data), l === "/$")) {
          if (n === 0) break;
          n--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || n++;
      l = c;
    } while (l);
  }
  function ov(n) {
    var i = n.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var l = i;
      switch (((i = i.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ov(l), vs(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(l);
    }
  }
  function zD(n, i, l, c) {
    for (; n.nodeType === 1; ) {
      var d = l;
      if (n.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!c && (n.nodeName !== "INPUT" || n.type !== "hidden")) break;
      } else if (c) {
        if (!n[gl])
          switch (i) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (
                ((y = n.getAttribute("rel")),
                y === "stylesheet" && n.hasAttribute("data-precedence"))
              )
                break;
              if (
                y !== d.rel ||
                n.getAttribute("href") !==
                  (d.href == null || d.href === "" ? null : d.href) ||
                n.getAttribute("crossorigin") !==
                  (d.crossOrigin == null ? null : d.crossOrigin) ||
                n.getAttribute("title") !== (d.title == null ? null : d.title)
              )
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (
                ((y = n.getAttribute("src")),
                (y !== (d.src == null ? null : d.src) ||
                  n.getAttribute("type") !== (d.type == null ? null : d.type) ||
                  n.getAttribute("crossorigin") !==
                    (d.crossOrigin == null ? null : d.crossOrigin)) &&
                  y &&
                  n.hasAttribute("async") &&
                  !n.hasAttribute("itemprop"))
              )
                break;
              return n;
            default:
              return n;
          }
      } else if (i === "input" && n.type === "hidden") {
        var y = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && n.getAttribute("name") === y) return n;
      } else return n;
      if (((n = Cn(n.nextSibling)), n === null)) break;
    }
    return null;
  }
  function RD(n, i, l) {
    if (i === "") return null;
    for (; n.nodeType !== 3; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !l) ||
        ((n = Cn(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function u1(n, i) {
    for (; n.nodeType !== 8; )
      if (
        ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") &&
          !i) ||
        ((n = Cn(n.nextSibling)), n === null)
      )
        return null;
    return n;
  }
  function cv(n) {
    return n.data === "$?" || n.data === "$~";
  }
  function fv(n) {
    return (
      n.data === "$!" ||
      (n.data === "$?" && n.ownerDocument.readyState !== "loading")
    );
  }
  function kD(n, i) {
    var l = n.ownerDocument;
    if (n.data === "$~") n._reactRetry = i;
    else if (n.data !== "$?" || l.readyState !== "loading") i();
    else {
      var c = function () {
        (i(), l.removeEventListener("DOMContentLoaded", c));
      };
      (l.addEventListener("DOMContentLoaded", c), (n._reactRetry = c));
    }
  }
  function Cn(n) {
    for (; n != null; n = n.nextSibling) {
      var i = n.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (
          ((i = n.data),
          i === "$" ||
            i === "$!" ||
            i === "$?" ||
            i === "$~" ||
            i === "&" ||
            i === "F!" ||
            i === "F")
        )
          break;
        if (i === "/$" || i === "/&") return null;
      }
    }
    return n;
  }
  var sv = null;
  function o1(n) {
    n = n.nextSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "/$" || l === "/&") {
          if (i === 0) return Cn(n.nextSibling);
          i--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            i++;
      }
      n = n.nextSibling;
    }
    return null;
  }
  function c1(n) {
    n = n.previousSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (i === 0) return n;
          i--;
        } else (l !== "/$" && l !== "/&") || i++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function f1(n, i, l) {
    switch (((i = Jo(l)), n)) {
      case "html":
        if (((n = i.documentElement), !n)) throw Error(a(452));
        return n;
      case "head":
        if (((n = i.head), !n)) throw Error(a(453));
        return n;
      case "body":
        if (((n = i.body), !n)) throw Error(a(454));
        return n;
      default:
        throw Error(a(451));
    }
  }
  function eu(n) {
    for (var i = n.attributes; i.length; ) n.removeAttributeNode(i[0]);
    vs(n);
  }
  var Pn = new Map(),
    s1 = new Set();
  function ec(n) {
    return typeof n.getRootNode == "function"
      ? n.getRootNode()
      : n.nodeType === 9
        ? n
        : n.ownerDocument;
  }
  var Or = U.d;
  U.d = { f: LD, r: BD, D: UD, C: $D, L: qD, m: HD, X: ID, S: YD, M: KD };
  function LD() {
    var n = Or.f(),
      i = Ko();
    return n || i;
  }
  function BD(n) {
    var i = si(n);
    i !== null && i.tag === 5 && i.type === "form" ? M0(i) : Or.r(n);
  }
  var Yi = typeof document > "u" ? null : document;
  function d1(n, i, l) {
    var c = Yi;
    if (c && typeof i == "string" && i) {
      var d = wn(i);
      ((d = 'link[rel="' + n + '"][href="' + d + '"]'),
        typeof l == "string" && (d += '[crossorigin="' + l + '"]'),
        s1.has(d) ||
          (s1.add(d),
          (n = { rel: n, crossOrigin: l, href: i }),
          c.querySelector(d) === null &&
            ((i = c.createElement("link")),
            Pt(i, "link", n),
            bt(i),
            c.head.appendChild(i))));
    }
  }
  function UD(n) {
    (Or.D(n), d1("dns-prefetch", n, null));
  }
  function $D(n, i) {
    (Or.C(n, i), d1("preconnect", n, i));
  }
  function qD(n, i, l) {
    Or.L(n, i, l);
    var c = Yi;
    if (c && n && i) {
      var d = 'link[rel="preload"][as="' + wn(i) + '"]';
      i === "image" && l && l.imageSrcSet
        ? ((d += '[imagesrcset="' + wn(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (d += '[imagesizes="' + wn(l.imageSizes) + '"]'))
        : (d += '[href="' + wn(n) + '"]');
      var y = d;
      switch (i) {
        case "style":
          y = Ii(n);
          break;
        case "script":
          y = Ki(n);
      }
      Pn.has(y) ||
        ((n = p(
          {
            rel: "preload",
            href: i === "image" && l && l.imageSrcSet ? void 0 : n,
            as: i,
          },
          l,
        )),
        Pn.set(y, n),
        c.querySelector(d) !== null ||
          (i === "style" && c.querySelector(tu(y))) ||
          (i === "script" && c.querySelector(nu(y))) ||
          ((i = c.createElement("link")),
          Pt(i, "link", n),
          bt(i),
          c.head.appendChild(i)));
    }
  }
  function HD(n, i) {
    Or.m(n, i);
    var l = Yi;
    if (l && n) {
      var c = i && typeof i.as == "string" ? i.as : "script",
        d =
          'link[rel="modulepreload"][as="' + wn(c) + '"][href="' + wn(n) + '"]',
        y = d;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Ki(n);
      }
      if (
        !Pn.has(y) &&
        ((n = p({ rel: "modulepreload", href: n }, i)),
        Pn.set(y, n),
        l.querySelector(d) === null)
      ) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(nu(y))) return;
        }
        ((c = l.createElement("link")),
          Pt(c, "link", n),
          bt(c),
          l.head.appendChild(c));
      }
    }
  }
  function YD(n, i, l) {
    Or.S(n, i, l);
    var c = Yi;
    if (c && n) {
      var d = di(c).hoistableStyles,
        y = Ii(n);
      i = i || "default";
      var x = d.get(y);
      if (!x) {
        var E = { loading: 0, preload: null };
        if ((x = c.querySelector(tu(y)))) E.loading = 5;
        else {
          ((n = p({ rel: "stylesheet", href: n, "data-precedence": i }, l)),
            (l = Pn.get(y)) && dv(n, l));
          var j = (x = c.createElement("link"));
          (bt(j),
            Pt(j, "link", n),
            (j._p = new Promise(function (q, G) {
              ((j.onload = q), (j.onerror = G));
            })),
            j.addEventListener("load", function () {
              E.loading |= 1;
            }),
            j.addEventListener("error", function () {
              E.loading |= 2;
            }),
            (E.loading |= 4),
            tc(x, i, c));
        }
        ((x = { type: "stylesheet", instance: x, count: 1, state: E }),
          d.set(y, x));
      }
    }
  }
  function ID(n, i) {
    Or.X(n, i);
    var l = Yi;
    if (l && n) {
      var c = di(l).hoistableScripts,
        d = Ki(n),
        y = c.get(d);
      y ||
        ((y = l.querySelector(nu(d))),
        y ||
          ((n = p({ src: n, async: !0 }, i)),
          (i = Pn.get(d)) && vv(n, i),
          (y = l.createElement("script")),
          bt(y),
          Pt(y, "link", n),
          l.head.appendChild(y)),
        (y = { type: "script", instance: y, count: 1, state: null }),
        c.set(d, y));
    }
  }
  function KD(n, i) {
    Or.M(n, i);
    var l = Yi;
    if (l && n) {
      var c = di(l).hoistableScripts,
        d = Ki(n),
        y = c.get(d);
      y ||
        ((y = l.querySelector(nu(d))),
        y ||
          ((n = p({ src: n, async: !0, type: "module" }, i)),
          (i = Pn.get(d)) && vv(n, i),
          (y = l.createElement("script")),
          bt(y),
          Pt(y, "link", n),
          l.head.appendChild(y)),
        (y = { type: "script", instance: y, count: 1, state: null }),
        c.set(d, y));
    }
  }
  function v1(n, i, l, c) {
    var d = (d = ge.current) ? ec(d) : null;
    if (!d) throw Error(a(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((i = Ii(l.href)),
            (l = di(d).hoistableStyles),
            (c = l.get(i)),
            c ||
              ((c = { type: "style", instance: null, count: 0, state: null }),
              l.set(i, c)),
            c)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          n = Ii(l.href);
          var y = di(d).hoistableStyles,
            x = y.get(n);
          if (
            (x ||
              ((d = d.ownerDocument || d),
              (x = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              y.set(n, x),
              (y = d.querySelector(tu(n))) &&
                !y._p &&
                ((x.instance = y), (x.state.loading = 5)),
              Pn.has(n) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Pn.set(n, l),
                y || GD(d, n, l, x.state))),
            i && c === null)
          )
            throw Error(a(528, ""));
          return x;
        }
        if (i && c !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return (
          (i = l.async),
          (l = l.src),
          typeof l == "string" &&
          i &&
          typeof i != "function" &&
          typeof i != "symbol"
            ? ((i = Ki(l)),
              (l = di(d).hoistableScripts),
              (c = l.get(i)),
              c ||
                ((c = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(i, c)),
              c)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(a(444, n));
    }
  }
  function Ii(n) {
    return 'href="' + wn(n) + '"';
  }
  function tu(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function h1(n) {
    return p({}, n, { "data-precedence": n.precedence, precedence: null });
  }
  function GD(n, i, l, c) {
    n.querySelector('link[rel="preload"][as="style"][' + i + "]")
      ? (c.loading = 1)
      : ((i = n.createElement("link")),
        (c.preload = i),
        i.addEventListener("load", function () {
          return (c.loading |= 1);
        }),
        i.addEventListener("error", function () {
          return (c.loading |= 2);
        }),
        Pt(i, "link", l),
        bt(i),
        n.head.appendChild(i));
  }
  function Ki(n) {
    return '[src="' + wn(n) + '"]';
  }
  function nu(n) {
    return "script[async]" + n;
  }
  function m1(n, i, l) {
    if ((i.count++, i.instance === null))
      switch (i.type) {
        case "style":
          var c = n.querySelector('style[data-href~="' + wn(l.href) + '"]');
          if (c) return ((i.instance = c), bt(c), c);
          var d = p({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (c = (n.ownerDocument || n).createElement("style")),
            bt(c),
            Pt(c, "style", d),
            tc(c, l.precedence, n),
            (i.instance = c)
          );
        case "stylesheet":
          d = Ii(l.href);
          var y = n.querySelector(tu(d));
          if (y) return ((i.state.loading |= 4), (i.instance = y), bt(y), y);
          ((c = h1(l)),
            (d = Pn.get(d)) && dv(c, d),
            (y = (n.ownerDocument || n).createElement("link")),
            bt(y));
          var x = y;
          return (
            (x._p = new Promise(function (E, j) {
              ((x.onload = E), (x.onerror = j));
            })),
            Pt(y, "link", c),
            (i.state.loading |= 4),
            tc(y, l.precedence, n),
            (i.instance = y)
          );
        case "script":
          return (
            (y = Ki(l.src)),
            (d = n.querySelector(nu(y)))
              ? ((i.instance = d), bt(d), d)
              : ((c = l),
                (d = Pn.get(y)) && ((c = p({}, l)), vv(c, d)),
                (n = n.ownerDocument || n),
                (d = n.createElement("script")),
                bt(d),
                Pt(d, "link", c),
                n.head.appendChild(d),
                (i.instance = d))
          );
        case "void":
          return null;
        default:
          throw Error(a(443, i.type));
      }
    else
      i.type === "stylesheet" &&
        (i.state.loading & 4) === 0 &&
        ((c = i.instance), (i.state.loading |= 4), tc(c, l.precedence, n));
    return i.instance;
  }
  function tc(n, i, l) {
    for (
      var c = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        d = c.length ? c[c.length - 1] : null,
        y = d,
        x = 0;
      x < c.length;
      x++
    ) {
      var E = c[x];
      if (E.dataset.precedence === i) y = E;
      else if (y !== d) break;
    }
    y
      ? y.parentNode.insertBefore(n, y.nextSibling)
      : ((i = l.nodeType === 9 ? l.head : l), i.insertBefore(n, i.firstChild));
  }
  function dv(n, i) {
    (n.crossOrigin == null && (n.crossOrigin = i.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = i.referrerPolicy),
      n.title == null && (n.title = i.title));
  }
  function vv(n, i) {
    (n.crossOrigin == null && (n.crossOrigin = i.crossOrigin),
      n.referrerPolicy == null && (n.referrerPolicy = i.referrerPolicy),
      n.integrity == null && (n.integrity = i.integrity));
  }
  var nc = null;
  function y1(n, i, l) {
    if (nc === null) {
      var c = new Map(),
        d = (nc = new Map());
      d.set(l, c);
    } else ((d = nc), (c = d.get(l)), c || ((c = new Map()), d.set(l, c)));
    if (c.has(n)) return c;
    for (
      c.set(n, null), l = l.getElementsByTagName(n), d = 0;
      d < l.length;
      d++
    ) {
      var y = l[d];
      if (
        !(
          y[gl] ||
          y[Mt] ||
          (n === "link" && y.getAttribute("rel") === "stylesheet")
        ) &&
        y.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var x = y.getAttribute(i) || "";
        x = n + x;
        var E = c.get(x);
        E ? E.push(y) : c.set(x, [y]);
      }
    }
    return c;
  }
  function p1(n, i, l) {
    ((n = n.ownerDocument || n),
      n.head.insertBefore(
        l,
        i === "title" ? n.querySelector("head > title") : null,
      ));
  }
  function XD(n, i, l) {
    if (l === 1 || i.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof i.precedence != "string" ||
          typeof i.href != "string" ||
          i.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof i.rel != "string" ||
          typeof i.href != "string" ||
          i.href === "" ||
          i.onLoad ||
          i.onError
        )
          break;
        switch (i.rel) {
          case "stylesheet":
            return (
              (n = i.disabled),
              typeof i.precedence == "string" && n == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          i.async &&
          typeof i.async != "function" &&
          typeof i.async != "symbol" &&
          !i.onLoad &&
          !i.onError &&
          i.src &&
          typeof i.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function g1(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  function VD(n, i, l, c) {
    if (
      l.type === "stylesheet" &&
      (typeof c.media != "string" || matchMedia(c.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var d = Ii(c.href),
          y = i.querySelector(tu(d));
        if (y) {
          ((i = y._p),
            i !== null &&
              typeof i == "object" &&
              typeof i.then == "function" &&
              (n.count++, (n = rc.bind(n)), i.then(n, n)),
            (l.state.loading |= 4),
            (l.instance = y),
            bt(y));
          return;
        }
        ((y = i.ownerDocument || i),
          (c = h1(c)),
          (d = Pn.get(d)) && dv(c, d),
          (y = y.createElement("link")),
          bt(y));
        var x = y;
        ((x._p = new Promise(function (E, j) {
          ((x.onload = E), (x.onerror = j));
        })),
          Pt(y, "link", c),
          (l.instance = y));
      }
      (n.stylesheets === null && (n.stylesheets = new Map()),
        n.stylesheets.set(l, i),
        (i = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (n.count++,
          (l = rc.bind(n)),
          i.addEventListener("load", l),
          i.addEventListener("error", l)));
    }
  }
  var hv = 0;
  function ZD(n, i) {
    return (
      n.stylesheets && n.count === 0 && ic(n, n.stylesheets),
      0 < n.count || 0 < n.imgCount
        ? function (l) {
            var c = setTimeout(function () {
              if ((n.stylesheets && ic(n, n.stylesheets), n.unsuspend)) {
                var y = n.unsuspend;
                ((n.unsuspend = null), y());
              }
            }, 6e4 + i);
            0 < n.imgBytes && hv === 0 && (hv = 62500 * DD());
            var d = setTimeout(
              function () {
                if (
                  ((n.waitingForImages = !1),
                  n.count === 0 &&
                    (n.stylesheets && ic(n, n.stylesheets), n.unsuspend))
                ) {
                  var y = n.unsuspend;
                  ((n.unsuspend = null), y());
                }
              },
              (n.imgBytes > hv ? 50 : 800) + i,
            );
            return (
              (n.unsuspend = l),
              function () {
                ((n.unsuspend = null), clearTimeout(c), clearTimeout(d));
              }
            );
          }
        : null
    );
  }
  function rc() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ic(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        ((this.unsuspend = null), n());
      }
    }
  }
  var ac = null;
  function ic(n, i) {
    ((n.stylesheets = null),
      n.unsuspend !== null &&
        (n.count++,
        (ac = new Map()),
        i.forEach(QD, n),
        (ac = null),
        rc.call(n)));
  }
  function QD(n, i) {
    if (!(i.state.loading & 4)) {
      var l = ac.get(n);
      if (l) var c = l.get(null);
      else {
        ((l = new Map()), ac.set(n, l));
        for (
          var d = n.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            y = 0;
          y < d.length;
          y++
        ) {
          var x = d[y];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") &&
            (l.set(x.dataset.precedence, x), (c = x));
        }
        c && l.set(null, c);
      }
      ((d = i.instance),
        (x = d.getAttribute("data-precedence")),
        (y = l.get(x) || c),
        y === c && l.set(null, d),
        l.set(x, d),
        this.count++,
        (c = rc.bind(this)),
        d.addEventListener("load", c),
        d.addEventListener("error", c),
        y
          ? y.parentNode.insertBefore(d, y.nextSibling)
          : ((n = n.nodeType === 9 ? n.head : n),
            n.insertBefore(d, n.firstChild)),
        (i.state.loading |= 4));
    }
  }
  var ru = {
    $$typeof: T,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function WD(n, i, l, c, d, y, x, E, j) {
    ((this.tag = 1),
      (this.containerInfo = n),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = cs(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = cs(0)),
      (this.hiddenUpdates = cs(null)),
      (this.identifierPrefix = c),
      (this.onUncaughtError = d),
      (this.onCaughtError = y),
      (this.onRecoverableError = x),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = j),
      (this.incompleteTransitions = new Map()));
  }
  function b1(n, i, l, c, d, y, x, E, j, q, G, Q) {
    return (
      (n = new WD(n, i, l, x, j, q, G, Q, E)),
      (i = 1),
      y === !0 && (i |= 24),
      (y = un(3, null, null, i)),
      (n.current = y),
      (y.stateNode = n),
      (i = Xs()),
      i.refCount++,
      (n.pooledCache = i),
      i.refCount++,
      (y.memoizedState = { element: c, isDehydrated: l, cache: i }),
      Ws(y),
      n
    );
  }
  function x1(n) {
    return n ? ((n = Oi), n) : Oi;
  }
  function S1(n, i, l, c, d, y) {
    ((d = x1(d)),
      c.context === null ? (c.context = d) : (c.pendingContext = d),
      (c = Xr(i)),
      (c.payload = { element: l }),
      (y = y === void 0 ? null : y),
      y !== null && (c.callback = y),
      (l = Vr(n, c, i)),
      l !== null && (Zt(l, n, i), Rl(l, n, i)));
  }
  function O1(n, i) {
    if (((n = n.memoizedState), n !== null && n.dehydrated !== null)) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < i ? l : i;
    }
  }
  function mv(n, i) {
    (O1(n, i), (n = n.alternate) && O1(n, i));
  }
  function A1(n) {
    if (n.tag === 13 || n.tag === 31) {
      var i = Ma(n, 67108864);
      (i !== null && Zt(i, n, 67108864), mv(n, 67108864));
    }
  }
  function w1(n) {
    if (n.tag === 13 || n.tag === 31) {
      var i = dn();
      i = fs(i);
      var l = Ma(n, i);
      (l !== null && Zt(l, n, i), mv(n, i));
    }
  }
  var lc = !0;
  function FD(n, i, l, c) {
    var d = C.T;
    C.T = null;
    var y = U.p;
    try {
      ((U.p = 2), yv(n, i, l, c));
    } finally {
      ((U.p = y), (C.T = d));
    }
  }
  function JD(n, i, l, c) {
    var d = C.T;
    C.T = null;
    var y = U.p;
    try {
      ((U.p = 8), yv(n, i, l, c));
    } finally {
      ((U.p = y), (C.T = d));
    }
  }
  function yv(n, i, l, c) {
    if (lc) {
      var d = pv(c);
      if (d === null) (nv(n, i, c, uc, l), _1(n, c));
      else if (tj(d, n, i, l, c)) c.stopPropagation();
      else if ((_1(n, c), i & 4 && -1 < ej.indexOf(n))) {
        for (; d !== null; ) {
          var y = si(d);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (((y = y.stateNode), y.current.memoizedState.isDehydrated)) {
                  var x = Aa(y.pendingLanes);
                  if (x !== 0) {
                    var E = y;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; x; ) {
                      var j = 1 << (31 - an(x));
                      ((E.entanglements[1] |= j), (x &= ~j));
                    }
                    (er(y), (ze & 6) === 0 && ((Yo = nn() + 500), Wl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((E = Ma(y, 2)), E !== null && Zt(E, y, 2), Ko(), mv(y, 2));
            }
          if (((y = pv(c)), y === null && nv(n, i, c, uc, l), y === d)) break;
          d = y;
        }
        d !== null && c.stopPropagation();
      } else nv(n, i, c, null, l);
    }
  }
  function pv(n) {
    return ((n = bs(n)), gv(n));
  }
  var uc = null;
  function gv(n) {
    if (((uc = null), (n = fi(n)), n !== null)) {
      var i = o(n);
      if (i === null) n = null;
      else {
        var l = i.tag;
        if (l === 13) {
          if (((n = f(i)), n !== null)) return n;
          n = null;
        } else if (l === 31) {
          if (((n = s(i)), n !== null)) return n;
          n = null;
        } else if (l === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          n = null;
        } else i !== n && (n = null);
      }
    }
    return ((uc = n), null);
  }
  function E1(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (UT()) {
          case Np:
            return 2;
          case zp:
            return 8;
          case Zu:
          case $T:
            return 32;
          case Rp:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bv = !1,
    ia = null,
    la = null,
    ua = null,
    au = new Map(),
    iu = new Map(),
    oa = [],
    ej =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function _1(n, i) {
    switch (n) {
      case "focusin":
      case "focusout":
        ia = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        au.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        iu.delete(i.pointerId);
    }
  }
  function lu(n, i, l, c, d, y) {
    return n === null || n.nativeEvent !== y
      ? ((n = {
          blockedOn: i,
          domEventName: l,
          eventSystemFlags: c,
          nativeEvent: y,
          targetContainers: [d],
        }),
        i !== null && ((i = si(i)), i !== null && A1(i)),
        n)
      : ((n.eventSystemFlags |= c),
        (i = n.targetContainers),
        d !== null && i.indexOf(d) === -1 && i.push(d),
        n);
  }
  function tj(n, i, l, c, d) {
    switch (i) {
      case "focusin":
        return ((ia = lu(ia, n, i, l, c, d)), !0);
      case "dragenter":
        return ((la = lu(la, n, i, l, c, d)), !0);
      case "mouseover":
        return ((ua = lu(ua, n, i, l, c, d)), !0);
      case "pointerover":
        var y = d.pointerId;
        return (au.set(y, lu(au.get(y) || null, n, i, l, c, d)), !0);
      case "gotpointercapture":
        return (
          (y = d.pointerId),
          iu.set(y, lu(iu.get(y) || null, n, i, l, c, d)),
          !0
        );
    }
    return !1;
  }
  function T1(n) {
    var i = fi(n.target);
    if (i !== null) {
      var l = o(i);
      if (l !== null) {
        if (((i = l.tag), i === 13)) {
          if (((i = f(l)), i !== null)) {
            ((n.blockedOn = i),
              qp(n.priority, function () {
                w1(l);
              }));
            return;
          }
        } else if (i === 31) {
          if (((i = s(l)), i !== null)) {
            ((n.blockedOn = i),
              qp(n.priority, function () {
                w1(l);
              }));
            return;
          }
        } else if (i === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function oc(n) {
    if (n.blockedOn !== null) return !1;
    for (var i = n.targetContainers; 0 < i.length; ) {
      var l = pv(n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var c = new l.constructor(l.type, l);
        ((gs = c), l.target.dispatchEvent(c), (gs = null));
      } else return ((i = si(l)), i !== null && A1(i), (n.blockedOn = l), !1);
      i.shift();
    }
    return !0;
  }
  function M1(n, i, l) {
    oc(n) && l.delete(i);
  }
  function nj() {
    ((bv = !1),
      ia !== null && oc(ia) && (ia = null),
      la !== null && oc(la) && (la = null),
      ua !== null && oc(ua) && (ua = null),
      au.forEach(M1),
      iu.forEach(M1));
  }
  function cc(n, i) {
    n.blockedOn === i &&
      ((n.blockedOn = null),
      bv ||
        ((bv = !0),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, nj)));
  }
  var fc = null;
  function D1(n) {
    fc !== n &&
      ((fc = n),
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        fc === n && (fc = null);
        for (var i = 0; i < n.length; i += 3) {
          var l = n[i],
            c = n[i + 1],
            d = n[i + 2];
          if (typeof c != "function") {
            if (gv(c || l) === null) continue;
            break;
          }
          var y = si(l);
          y !== null &&
            (n.splice(i, 3),
            (i -= 3),
            pd(y, { pending: !0, data: d, method: l.method, action: c }, c, d));
        }
      }));
  }
  function Gi(n) {
    function i(j) {
      return cc(j, n);
    }
    (ia !== null && cc(ia, n),
      la !== null && cc(la, n),
      ua !== null && cc(ua, n),
      au.forEach(i),
      iu.forEach(i));
    for (var l = 0; l < oa.length; l++) {
      var c = oa[l];
      c.blockedOn === n && (c.blockedOn = null);
    }
    for (; 0 < oa.length && ((l = oa[0]), l.blockedOn === null); )
      (T1(l), l.blockedOn === null && oa.shift());
    if (((l = (n.ownerDocument || n).$$reactFormReplay), l != null))
      for (c = 0; c < l.length; c += 3) {
        var d = l[c],
          y = l[c + 1],
          x = d[Yt] || null;
        if (typeof y == "function") x || D1(l);
        else if (x) {
          var E = null;
          if (y && y.hasAttribute("formAction")) {
            if (((d = y), (x = y[Yt] || null))) E = x.formAction;
            else if (gv(d) !== null) continue;
          } else E = x.action;
          (typeof E == "function" ? (l[c + 1] = E) : (l.splice(c, 3), (c -= 3)),
            D1(l));
        }
      }
  }
  function j1() {
    function n(y) {
      y.canIntercept &&
        y.info === "react-transition" &&
        y.intercept({
          handler: function () {
            return new Promise(function (x) {
              return (d = x);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function i() {
      (d !== null && (d(), (d = null)), c || setTimeout(l, 20));
    }
    function l() {
      if (!c && !navigation.transition) {
        var y = navigation.currentEntry;
        y &&
          y.url != null &&
          navigation.navigate(y.url, {
            state: y.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var c = !1,
        d = null;
      return (
        navigation.addEventListener("navigate", n),
        navigation.addEventListener("navigatesuccess", i),
        navigation.addEventListener("navigateerror", i),
        setTimeout(l, 100),
        function () {
          ((c = !0),
            navigation.removeEventListener("navigate", n),
            navigation.removeEventListener("navigatesuccess", i),
            navigation.removeEventListener("navigateerror", i),
            d !== null && (d(), (d = null)));
        }
      );
    }
  }
  function xv(n) {
    this._internalRoot = n;
  }
  ((sc.prototype.render = xv.prototype.render =
    function (n) {
      var i = this._internalRoot;
      if (i === null) throw Error(a(409));
      var l = i.current,
        c = dn();
      S1(l, c, n, i, null, null);
    }),
    (sc.prototype.unmount = xv.prototype.unmount =
      function () {
        var n = this._internalRoot;
        if (n !== null) {
          this._internalRoot = null;
          var i = n.containerInfo;
          (S1(n.current, 2, null, n, null, null), Ko(), (i[ci] = null));
        }
      }));
  function sc(n) {
    this._internalRoot = n;
  }
  sc.prototype.unstable_scheduleHydration = function (n) {
    if (n) {
      var i = $p();
      n = { blockedOn: null, target: n, priority: i };
      for (var l = 0; l < oa.length && i !== 0 && i < oa[l].priority; l++);
      (oa.splice(l, 0, n), l === 0 && T1(n));
    }
  };
  var C1 = t.version;
  if (C1 !== "19.2.0") throw Error(a(527, C1, "19.2.0"));
  U.findDOMNode = function (n) {
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function"
        ? Error(a(188))
        : ((n = Object.keys(n).join(",")), Error(a(268, n)));
    return (
      (n = h(i)),
      (n = n !== null ? m(n) : null),
      (n = n === null ? null : n.stateNode),
      n
    );
  };
  var rj = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dc.isDisabled && dc.supportsFiber)
      try {
        ((ml = dc.inject(rj)), (rn = dc));
      } catch {}
  }
  return (
    (ou.createRoot = function (n, i) {
      if (!u(n)) throw Error(a(299));
      var l = !1,
        c = "",
        d = B0,
        y = U0,
        x = $0;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (l = !0),
          i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (d = i.onUncaughtError),
          i.onCaughtError !== void 0 && (y = i.onCaughtError),
          i.onRecoverableError !== void 0 && (x = i.onRecoverableError)),
        (i = b1(n, 1, !1, null, null, l, c, null, d, y, x, j1)),
        (n[ci] = i.current),
        tv(n),
        new xv(i)
      );
    }),
    (ou.hydrateRoot = function (n, i, l) {
      if (!u(n)) throw Error(a(299));
      var c = !1,
        d = "",
        y = B0,
        x = U0,
        E = $0,
        j = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (c = !0),
          l.identifierPrefix !== void 0 && (d = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (y = l.onUncaughtError),
          l.onCaughtError !== void 0 && (x = l.onCaughtError),
          l.onRecoverableError !== void 0 && (E = l.onRecoverableError),
          l.formState !== void 0 && (j = l.formState)),
        (i = b1(n, 1, !0, i, l ?? null, c, d, j, y, x, E, j1)),
        (i.context = x1(null)),
        (l = i.current),
        (c = dn()),
        (c = fs(c)),
        (d = Xr(c)),
        (d.callback = null),
        Vr(l, d, c),
        (l = c),
        (i.current.lanes = l),
        pl(i, l),
        er(i),
        (n[ci] = i.current),
        tv(n),
        new sc(i)
      );
    }),
    (ou.version = "19.2.0"),
    ou
  );
}
var q1;
function hj() {
  if (q1) return Av.exports;
  q1 = 1;
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return (e(), (Av.exports = vj()), Av.exports);
}
var mj = hj();
const yj = Zn(mj);
function GA(e) {
  var t,
    r,
    a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var u = e.length;
      for (t = 0; t < u; t++)
        e[t] && (r = GA(e[t])) && (a && (a += " "), (a += r));
    } else for (r in e) e[r] && (a && (a += " "), (a += r));
  return a;
}
function ke() {
  for (var e, t, r = 0, a = "", u = arguments.length; r < u; r++)
    (e = arguments[r]) && (t = GA(e)) && (a && (a += " "), (a += t));
  return a;
}
var Tv = {},
  Mv = {},
  H1;
function pj() {
  return (
    H1 ||
      ((H1 = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return r === "__proto__";
        }
        e.isUnsafeProperty = t;
      })(Mv)),
    Mv
  );
}
var Dv = {},
  Y1;
function XA() {
  return (
    Y1 ||
      ((Y1 = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          switch (typeof r) {
            case "number":
            case "symbol":
              return !1;
            case "string":
              return r.includes(".") || r.includes("[") || r.includes("]");
          }
        }
        e.isDeepKey = t;
      })(Dv)),
    Dv
  );
}
var jv = {},
  I1;
function VA() {
  return (
    I1 ||
      ((I1 = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return typeof r == "string" || typeof r == "symbol"
            ? r
            : Object.is(r?.valueOf?.(), -0)
              ? "-0"
              : String(r);
        }
        e.toKey = t;
      })(jv)),
    jv
  );
}
var Cv = {},
  K1;
function Fm() {
  return (
    K1 ||
      ((K1 = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          const a = [],
            u = r.length;
          if (u === 0) return a;
          let o = 0,
            f = "",
            s = "",
            v = !1;
          for (r.charCodeAt(0) === 46 && (a.push(""), o++); o < u; ) {
            const h = r[o];
            (s
              ? h === "\\" && o + 1 < u
                ? (o++, (f += r[o]))
                : h === s
                  ? (s = "")
                  : (f += h)
              : v
                ? h === '"' || h === "'"
                  ? (s = h)
                  : h === "]"
                    ? ((v = !1), a.push(f), (f = ""))
                    : (f += h)
                : h === "["
                  ? ((v = !0), f && (a.push(f), (f = "")))
                  : h === "."
                    ? f && (a.push(f), (f = ""))
                    : (f += h),
              o++);
          }
          return (f && a.push(f), a);
        }
        e.toPath = t;
      })(Cv)),
    Cv
  );
}
var G1;
function Jm() {
  return (
    G1 ||
      ((G1 = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = pj(),
          r = XA(),
          a = VA(),
          u = Fm();
        function o(s, v, h) {
          if (s == null) return h;
          switch (typeof v) {
            case "string": {
              if (t.isUnsafeProperty(v)) return h;
              const m = s[v];
              return m === void 0
                ? r.isDeepKey(v)
                  ? o(s, u.toPath(v), h)
                  : h
                : m;
            }
            case "number":
            case "symbol": {
              typeof v == "number" && (v = a.toKey(v));
              const m = s[v];
              return m === void 0 ? h : m;
            }
            default: {
              if (Array.isArray(v)) return f(s, v, h);
              if (
                (Object.is(v?.valueOf(), -0) ? (v = "-0") : (v = String(v)),
                t.isUnsafeProperty(v))
              )
                return h;
              const m = s[v];
              return m === void 0 ? h : m;
            }
          }
        }
        function f(s, v, h) {
          if (v.length === 0) return h;
          let m = s;
          for (let p = 0; p < v.length; p++) {
            if (m == null || t.isUnsafeProperty(v[p])) return h;
            m = m[v[p]];
          }
          return m === void 0 ? h : m;
        }
        e.get = o;
      })(Tv)),
    Tv
  );
}
var Pv, X1;
function gj() {
  return (X1 || ((X1 = 1), (Pv = Jm().get)), Pv);
}
var bj = gj();
const Wi = Zn(bj);
var Nv = { exports: {} },
  Ye = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V1;
function xj() {
  if (V1) return Ye;
  V1 = 1;
  var e = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    o = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    s = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.suspense_list"),
    m = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    g = Symbol.for("react.view_transition"),
    b = Symbol.for("react.client.reference");
  function O(S) {
    if (typeof S == "object" && S !== null) {
      var w = S.$$typeof;
      switch (w) {
        case e:
          switch (((S = S.type), S)) {
            case r:
            case u:
            case a:
            case v:
            case h:
            case g:
              return S;
            default:
              switch (((S = S && S.$$typeof), S)) {
                case f:
                case s:
                case p:
                case m:
                  return S;
                case o:
                  return S;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return (
    (Ye.ContextConsumer = o),
    (Ye.ContextProvider = f),
    (Ye.Element = e),
    (Ye.ForwardRef = s),
    (Ye.Fragment = r),
    (Ye.Lazy = p),
    (Ye.Memo = m),
    (Ye.Portal = t),
    (Ye.Profiler = u),
    (Ye.StrictMode = a),
    (Ye.Suspense = v),
    (Ye.SuspenseList = h),
    (Ye.isContextConsumer = function (S) {
      return O(S) === o;
    }),
    (Ye.isContextProvider = function (S) {
      return O(S) === f;
    }),
    (Ye.isElement = function (S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }),
    (Ye.isForwardRef = function (S) {
      return O(S) === s;
    }),
    (Ye.isFragment = function (S) {
      return O(S) === r;
    }),
    (Ye.isLazy = function (S) {
      return O(S) === p;
    }),
    (Ye.isMemo = function (S) {
      return O(S) === m;
    }),
    (Ye.isPortal = function (S) {
      return O(S) === t;
    }),
    (Ye.isProfiler = function (S) {
      return O(S) === u;
    }),
    (Ye.isStrictMode = function (S) {
      return O(S) === a;
    }),
    (Ye.isSuspense = function (S) {
      return O(S) === v;
    }),
    (Ye.isSuspenseList = function (S) {
      return O(S) === h;
    }),
    (Ye.isValidElementType = function (S) {
      return (
        typeof S == "string" ||
        typeof S == "function" ||
        S === r ||
        S === u ||
        S === a ||
        S === v ||
        S === h ||
        (typeof S == "object" &&
          S !== null &&
          (S.$$typeof === p ||
            S.$$typeof === m ||
            S.$$typeof === f ||
            S.$$typeof === o ||
            S.$$typeof === s ||
            S.$$typeof === b ||
            S.getModuleId !== void 0))
      );
    }),
    (Ye.typeOf = O),
    Ye
  );
}
var Z1;
function Sj() {
  return (Z1 || ((Z1 = 1), (Nv.exports = xj())), Nv.exports);
}
var Oj = Sj(),
  Wt = (e) => (e === 0 ? 0 : e > 0 ? 1 : -1),
  bn = (e) => typeof e == "number" && e != +e,
  Ka = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1,
  ye = (e) => (typeof e == "number" || e instanceof Number) && !bn(e),
  Ft = (e) => ye(e) || typeof e == "string",
  Aj = 0,
  Au = (e) => {
    var t = ++Aj;
    return "".concat(e || "").concat(t);
  },
  Vn = function (t, r) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!ye(t) && typeof t != "string") return a;
    var o;
    if (Ka(t)) {
      if (r == null) return a;
      var f = t.indexOf("%");
      o = (r * parseFloat(t.slice(0, f))) / 100;
    } else o = +t;
    return (bn(o) && (o = a), u && r != null && o > r && (o = r), o);
  },
  ZA = (e) => {
    if (!Array.isArray(e)) return !1;
    for (var t = e.length, r = {}, a = 0; a < t; a++)
      if (!r[e[a]]) r[e[a]] = !0;
      else return !0;
    return !1;
  };
function dt(e, t, r) {
  return ye(e) && ye(t) ? e + r * (t - e) : t;
}
function QA(e, t, r) {
  if (!(!e || !e.length))
    return e.find((a) => a && (typeof t == "function" ? t(a) : Wi(a, t)) === r);
}
var Fe = (e) => e === null || typeof e > "u",
  zu = (e) =>
    Fe(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)),
  wj = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ];
function ey(e) {
  if (typeof e != "string") return !1;
  var t = wj;
  return t.includes(e);
}
var Ej = ["viewBox", "children"],
  Q1 = ["points", "pathLength"],
  zv = { svg: Ej, polygon: Q1, polyline: Q1 },
  ty = (e, t) => {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var r = e;
    if (
      (A.isValidElement(e) && (r = e.props),
      typeof r != "object" && typeof r != "function")
    )
      return null;
    var a = {};
    return (
      Object.keys(r).forEach((u) => {
        ey(u) && (a[u] = (o) => r[u](r, o));
      }),
      a
    );
  },
  _j = (e, t, r) => (a) => (e(t, r, a), null),
  Sf = (e, t, r) => {
    if (e === null || (typeof e != "object" && typeof e != "function"))
      return null;
    var a = null;
    return (
      Object.keys(e).forEach((u) => {
        var o = e[u];
        ey(u) &&
          typeof o == "function" &&
          (a || (a = {}), (a[u] = _j(o, t, r)));
      }),
      a
    );
  },
  Tj = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ];
function WA(e) {
  if (typeof e != "string") return !1;
  var t = Tj;
  return t.includes(e);
}
function ga(e) {
  var t = Object.entries(e).filter((r) => {
    var [a] = r;
    return WA(a);
  });
  return Object.fromEntries(t);
}
var W1 = (e) =>
    typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "",
  F1 = null,
  Rv = null,
  FA = (e) => {
    if (e === F1 && Array.isArray(Rv)) return Rv;
    var t = [];
    return (
      A.Children.forEach(e, (r) => {
        Fe(r) ||
          (Oj.isFragment(r) ? (t = t.concat(FA(r.props.children))) : t.push(r));
      }),
      (Rv = t),
      (F1 = e),
      t
    );
  };
function Mj(e, t) {
  var r = [],
    a = [];
  return (
    Array.isArray(t) ? (a = t.map((u) => W1(u))) : (a = [W1(t)]),
    FA(e).forEach((u) => {
      var o = Wi(u, "type.displayName") || Wi(u, "type.name");
      a.indexOf(o) !== -1 && r.push(u);
    }),
    r
  );
}
var JA = (e) =>
    e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0,
  Dj = (e, t, r, a) => {
    var u;
    if (typeof t == "symbol" || typeof t == "number") return !0;
    var o = (u = a && zv?.[a]) !== null && u !== void 0 ? u : [],
      f = t.startsWith("data-"),
      s = typeof e != "function" && ((!!a && o.includes(t)) || WA(t)),
      v = !!r && ey(t);
    return f || s || v;
  },
  rt = (e, t, r) => {
    if (!e || typeof e == "function" || typeof e == "boolean") return null;
    var a = e;
    if (
      (A.isValidElement(e) && (a = e.props),
      typeof a != "object" && typeof a != "function")
    )
      return null;
    var u = {};
    return (
      Object.keys(a).forEach((o) => {
        var f;
        Dj((f = a) === null || f === void 0 ? void 0 : f[o], o, t, r) &&
          (u[o] = a[o]);
      }),
      u
    );
  },
  jj = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function am() {
  return (
    (am = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    am.apply(null, arguments)
  );
}
function Cj(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = Pj(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function Pj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var ny = A.forwardRef((e, t) => {
    var {
        children: r,
        width: a,
        height: u,
        viewBox: o,
        className: f,
        style: s,
        title: v,
        desc: h,
      } = e,
      m = Cj(e, jj),
      p = o || { width: a, height: u, x: 0, y: 0 },
      g = ke("recharts-surface", f);
    return A.createElement(
      "svg",
      am({}, rt(m, !0, "svg"), {
        className: g,
        width: a,
        height: u,
        style: s,
        viewBox: ""
          .concat(p.x, " ")
          .concat(p.y, " ")
          .concat(p.width, " ")
          .concat(p.height),
        ref: t,
      }),
      A.createElement("title", null, v),
      A.createElement("desc", null, h),
      r,
    );
  }),
  Nj = ["children", "className"];
function im() {
  return (
    (im = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    im.apply(null, arguments)
  );
}
function zj(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = Rj(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function Rj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var Un = A.forwardRef((e, t) => {
    var { children: r, className: a } = e,
      u = zj(e, Nj),
      o = ke("recharts-layer", a);
    return A.createElement("g", im({ className: o }, rt(u, !0), { ref: t }), r);
  }),
  ew = KA(),
  tw = A.createContext(null),
  kj = () => A.useContext(tw);
function Ge(e) {
  return function () {
    return e;
  };
}
const nw = Math.cos,
  Rc = Math.sin,
  Qn = Math.sqrt,
  kc = Math.PI,
  Of = 2 * kc,
  lm = Math.PI,
  um = 2 * lm,
  Ha = 1e-6,
  Lj = um - Ha;
function rw(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function Bj(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return rw;
  const r = 10 ** t;
  return function (a) {
    this._ += a[0];
    for (let u = 1, o = a.length; u < o; ++u)
      this._ += Math.round(arguments[u] * r) / r + a[u];
  };
}
class Uj {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? rw : Bj(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, a, u) {
    this._append`Q${+t},${+r},${(this._x1 = +a)},${(this._y1 = +u)}`;
  }
  bezierCurveTo(t, r, a, u, o, f) {
    this
      ._append`C${+t},${+r},${+a},${+u},${(this._x1 = +o)},${(this._y1 = +f)}`;
  }
  arcTo(t, r, a, u, o) {
    if (((t = +t), (r = +r), (a = +a), (u = +u), (o = +o), o < 0))
      throw new Error(`negative radius: ${o}`);
    let f = this._x1,
      s = this._y1,
      v = a - t,
      h = u - r,
      m = f - t,
      p = s - r,
      g = m * m + p * p;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (g > Ha)
      if (!(Math.abs(p * v - h * m) > Ha) || !o)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let b = a - f,
          O = u - s,
          S = v * v + h * h,
          w = b * b + O * O,
          _ = Math.sqrt(S),
          M = Math.sqrt(g),
          T = o * Math.tan((lm - Math.acos((S + g - w) / (2 * _ * M))) / 2),
          N = T / M,
          z = T / _;
        (Math.abs(N - 1) > Ha && this._append`L${t + N * m},${r + N * p}`,
          this
            ._append`A${o},${o},0,0,${+(p * b > m * O)},${(this._x1 = t + z * v)},${(this._y1 = r + z * h)}`);
      }
  }
  arc(t, r, a, u, o, f) {
    if (((t = +t), (r = +r), (a = +a), (f = !!f), a < 0))
      throw new Error(`negative radius: ${a}`);
    let s = a * Math.cos(u),
      v = a * Math.sin(u),
      h = t + s,
      m = r + v,
      p = 1 ^ f,
      g = f ? u - o : o - u;
    (this._x1 === null
      ? this._append`M${h},${m}`
      : (Math.abs(this._x1 - h) > Ha || Math.abs(this._y1 - m) > Ha) &&
        this._append`L${h},${m}`,
      a &&
        (g < 0 && (g = (g % um) + um),
        g > Lj
          ? this
              ._append`A${a},${a},0,1,${p},${t - s},${r - v}A${a},${a},0,1,${p},${(this._x1 = h)},${(this._y1 = m)}`
          : g > Ha &&
            this
              ._append`A${a},${a},0,${+(g >= lm)},${p},${(this._x1 = t + a * Math.cos(o))},${(this._y1 = r + a * Math.sin(o))}`));
  }
  rect(t, r, a, u) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(a = +a)}v${+u}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function ry(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const a = Math.floor(r);
        if (!(a >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = a;
      }
      return e;
    }),
    () => new Uj(t)
  );
}
function ay(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function aw(e) {
  this._context = e;
}
aw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function Af(e) {
  return new aw(e);
}
function iw(e) {
  return e[0];
}
function lw(e) {
  return e[1];
}
function uw(e, t) {
  var r = Ge(!0),
    a = null,
    u = Af,
    o = null,
    f = ry(s);
  ((e = typeof e == "function" ? e : e === void 0 ? iw : Ge(e)),
    (t = typeof t == "function" ? t : t === void 0 ? lw : Ge(t)));
  function s(v) {
    var h,
      m = (v = ay(v)).length,
      p,
      g = !1,
      b;
    for (a == null && (o = u((b = f()))), h = 0; h <= m; ++h)
      (!(h < m && r((p = v[h]), h, v)) === g &&
        ((g = !g) ? o.lineStart() : o.lineEnd()),
        g && o.point(+e(p, h, v), +t(p, h, v)));
    if (b) return ((o = null), b + "" || null);
  }
  return (
    (s.x = function (v) {
      return arguments.length
        ? ((e = typeof v == "function" ? v : Ge(+v)), s)
        : e;
    }),
    (s.y = function (v) {
      return arguments.length
        ? ((t = typeof v == "function" ? v : Ge(+v)), s)
        : t;
    }),
    (s.defined = function (v) {
      return arguments.length
        ? ((r = typeof v == "function" ? v : Ge(!!v)), s)
        : r;
    }),
    (s.curve = function (v) {
      return arguments.length ? ((u = v), a != null && (o = u(a)), s) : u;
    }),
    (s.context = function (v) {
      return arguments.length
        ? (v == null ? (a = o = null) : (o = u((a = v))), s)
        : a;
    }),
    s
  );
}
function vc(e, t, r) {
  var a = null,
    u = Ge(!0),
    o = null,
    f = Af,
    s = null,
    v = ry(h);
  ((e = typeof e == "function" ? e : e === void 0 ? iw : Ge(+e)),
    (t = typeof t == "function" ? t : Ge(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? lw : Ge(+r)));
  function h(p) {
    var g,
      b,
      O,
      S = (p = ay(p)).length,
      w,
      _ = !1,
      M,
      T = new Array(S),
      N = new Array(S);
    for (o == null && (s = f((M = v()))), g = 0; g <= S; ++g) {
      if (!(g < S && u((w = p[g]), g, p)) === _)
        if ((_ = !_)) ((b = g), s.areaStart(), s.lineStart());
        else {
          for (s.lineEnd(), s.lineStart(), O = g - 1; O >= b; --O)
            s.point(T[O], N[O]);
          (s.lineEnd(), s.areaEnd());
        }
      _ &&
        ((T[g] = +e(w, g, p)),
        (N[g] = +t(w, g, p)),
        s.point(a ? +a(w, g, p) : T[g], r ? +r(w, g, p) : N[g]));
    }
    if (M) return ((s = null), M + "" || null);
  }
  function m() {
    return uw().defined(u).curve(f).context(o);
  }
  return (
    (h.x = function (p) {
      return arguments.length
        ? ((e = typeof p == "function" ? p : Ge(+p)), (a = null), h)
        : e;
    }),
    (h.x0 = function (p) {
      return arguments.length
        ? ((e = typeof p == "function" ? p : Ge(+p)), h)
        : e;
    }),
    (h.x1 = function (p) {
      return arguments.length
        ? ((a = p == null ? null : typeof p == "function" ? p : Ge(+p)), h)
        : a;
    }),
    (h.y = function (p) {
      return arguments.length
        ? ((t = typeof p == "function" ? p : Ge(+p)), (r = null), h)
        : t;
    }),
    (h.y0 = function (p) {
      return arguments.length
        ? ((t = typeof p == "function" ? p : Ge(+p)), h)
        : t;
    }),
    (h.y1 = function (p) {
      return arguments.length
        ? ((r = p == null ? null : typeof p == "function" ? p : Ge(+p)), h)
        : r;
    }),
    (h.lineX0 = h.lineY0 =
      function () {
        return m().x(e).y(t);
      }),
    (h.lineY1 = function () {
      return m().x(e).y(r);
    }),
    (h.lineX1 = function () {
      return m().x(a).y(t);
    }),
    (h.defined = function (p) {
      return arguments.length
        ? ((u = typeof p == "function" ? p : Ge(!!p)), h)
        : u;
    }),
    (h.curve = function (p) {
      return arguments.length ? ((f = p), o != null && (s = f(o)), h) : f;
    }),
    (h.context = function (p) {
      return arguments.length
        ? (p == null ? (o = s = null) : (s = f((o = p))), h)
        : o;
    }),
    h
  );
}
class ow {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function $j(e) {
  return new ow(e, !0);
}
function qj(e) {
  return new ow(e, !1);
}
const iy = {
    draw(e, t) {
      const r = Qn(t / kc);
      (e.moveTo(r, 0), e.arc(0, 0, r, 0, Of));
    },
  },
  Hj = {
    draw(e, t) {
      const r = Qn(t / 5) / 2;
      (e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath());
    },
  },
  cw = Qn(1 / 3),
  Yj = cw * 2,
  Ij = {
    draw(e, t) {
      const r = Qn(t / Yj),
        a = r * cw;
      (e.moveTo(0, -r),
        e.lineTo(a, 0),
        e.lineTo(0, r),
        e.lineTo(-a, 0),
        e.closePath());
    },
  },
  Kj = {
    draw(e, t) {
      const r = Qn(t),
        a = -r / 2;
      e.rect(a, a, r, r);
    },
  },
  Gj = 0.8908130915292852,
  fw = Rc(kc / 10) / Rc((7 * kc) / 10),
  Xj = Rc(Of / 10) * fw,
  Vj = -nw(Of / 10) * fw,
  Zj = {
    draw(e, t) {
      const r = Qn(t * Gj),
        a = Xj * r,
        u = Vj * r;
      (e.moveTo(0, -r), e.lineTo(a, u));
      for (let o = 1; o < 5; ++o) {
        const f = (Of * o) / 5,
          s = nw(f),
          v = Rc(f);
        (e.lineTo(v * r, -s * r), e.lineTo(s * a - v * u, v * a + s * u));
      }
      e.closePath();
    },
  },
  kv = Qn(3),
  Qj = {
    draw(e, t) {
      const r = -Qn(t / (kv * 3));
      (e.moveTo(0, r * 2),
        e.lineTo(-kv * r, -r),
        e.lineTo(kv * r, -r),
        e.closePath());
    },
  },
  Nn = -0.5,
  zn = Qn(3) / 2,
  om = 1 / Qn(12),
  Wj = (om / 2 + 1) * 3,
  Fj = {
    draw(e, t) {
      const r = Qn(t / Wj),
        a = r / 2,
        u = r * om,
        o = a,
        f = r * om + r,
        s = -o,
        v = f;
      (e.moveTo(a, u),
        e.lineTo(o, f),
        e.lineTo(s, v),
        e.lineTo(Nn * a - zn * u, zn * a + Nn * u),
        e.lineTo(Nn * o - zn * f, zn * o + Nn * f),
        e.lineTo(Nn * s - zn * v, zn * s + Nn * v),
        e.lineTo(Nn * a + zn * u, Nn * u - zn * a),
        e.lineTo(Nn * o + zn * f, Nn * f - zn * o),
        e.lineTo(Nn * s + zn * v, Nn * v - zn * s),
        e.closePath());
    },
  };
function Jj(e, t) {
  let r = null,
    a = ry(u);
  ((e = typeof e == "function" ? e : Ge(e || iy)),
    (t = typeof t == "function" ? t : Ge(t === void 0 ? 64 : +t)));
  function u() {
    let o;
    if (
      (r || (r = o = a()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      o)
    )
      return ((r = null), o + "" || null);
  }
  return (
    (u.type = function (o) {
      return arguments.length
        ? ((e = typeof o == "function" ? o : Ge(o)), u)
        : e;
    }),
    (u.size = function (o) {
      return arguments.length
        ? ((t = typeof o == "function" ? o : Ge(+o)), u)
        : t;
    }),
    (u.context = function (o) {
      return arguments.length ? ((r = o ?? null), u) : r;
    }),
    u
  );
}
function Lc() {}
function Bc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function sw(e) {
  this._context = e;
}
sw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        Bc(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        Bc(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function eC(e) {
  return new sw(e);
}
function dw(e) {
  this._context = e;
}
dw.prototype = {
  areaStart: Lc,
  areaEnd: Lc,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        Bc(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function tC(e) {
  return new dw(e);
}
function vw(e) {
  this._context = e;
}
vw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          a = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, a) : this._context.moveTo(r, a);
        break;
      case 3:
        this._point = 4;
      default:
        Bc(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function nC(e) {
  return new vw(e);
}
function hw(e) {
  this._context = e;
}
hw.prototype = {
  areaStart: Lc,
  areaEnd: Lc,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function rC(e) {
  return new hw(e);
}
function J1(e) {
  return e < 0 ? -1 : 1;
}
function ex(e, t, r) {
  var a = e._x1 - e._x0,
    u = t - e._x1,
    o = (e._y1 - e._y0) / (a || (u < 0 && -0)),
    f = (r - e._y1) / (u || (a < 0 && -0)),
    s = (o * u + f * a) / (a + u);
  return (
    (J1(o) + J1(f)) * Math.min(Math.abs(o), Math.abs(f), 0.5 * Math.abs(s)) || 0
  );
}
function tx(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Lv(e, t, r) {
  var a = e._x0,
    u = e._y0,
    o = e._x1,
    f = e._y1,
    s = (o - a) / 3;
  e._context.bezierCurveTo(a + s, u + s * t, o - s, f - s * r, o, f);
}
function Uc(e) {
  this._context = e;
}
Uc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Lv(this, this._t0, tx(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), Lv(this, tx(this, (r = ex(this, e, t))), r));
          break;
        default:
          Lv(this, this._t0, (r = ex(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function mw(e) {
  this._context = new yw(e);
}
(mw.prototype = Object.create(Uc.prototype)).point = function (e, t) {
  Uc.prototype.point.call(this, t, e);
};
function yw(e) {
  this._context = e;
}
yw.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, a, u, o) {
    this._context.bezierCurveTo(t, e, a, r, o, u);
  },
};
function aC(e) {
  return new Uc(e);
}
function iC(e) {
  return new mw(e);
}
function pw(e) {
  this._context = e;
}
pw.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var a = nx(e), u = nx(t), o = 0, f = 1; f < r; ++o, ++f)
          this._context.bezierCurveTo(
            a[0][o],
            u[0][o],
            a[1][o],
            u[1][o],
            e[f],
            t[f],
          );
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function nx(e) {
  var t,
    r = e.length - 1,
    a,
    u = new Array(r),
    o = new Array(r),
    f = new Array(r);
  for (u[0] = 0, o[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((u[t] = 1), (o[t] = 4), (f[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    u[r - 1] = 2, o[r - 1] = 7, f[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    ((a = u[t] / o[t - 1]), (o[t] -= a), (f[t] -= a * f[t - 1]));
  for (u[r - 1] = f[r - 1] / o[r - 1], t = r - 2; t >= 0; --t)
    u[t] = (f[t] - u[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + u[r - 1]) / 2, t = 0; t < r - 1; ++t)
    o[t] = 2 * e[t + 1] - u[t + 1];
  return [u, o];
}
function lC(e) {
  return new pw(e);
}
function wf(e, t) {
  ((this._context = e), (this._t = t));
}
wf.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function uC(e) {
  return new wf(e, 0.5);
}
function oC(e) {
  return new wf(e, 0);
}
function cC(e) {
  return new wf(e, 1);
}
function Fi(e, t) {
  if ((f = e.length) > 1)
    for (var r = 1, a, u, o = e[t[0]], f, s = o.length; r < f; ++r)
      for (u = o, o = e[t[r]], a = 0; a < s; ++a)
        o[a][1] += o[a][0] = isNaN(u[a][1]) ? u[a][0] : u[a][1];
}
function cm(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function fC(e, t) {
  return e[t];
}
function sC(e) {
  const t = [];
  return ((t.key = e), t);
}
function dC() {
  var e = Ge([]),
    t = cm,
    r = Fi,
    a = fC;
  function u(o) {
    var f = Array.from(e.apply(this, arguments), sC),
      s,
      v = f.length,
      h = -1,
      m;
    for (const p of o)
      for (s = 0, ++h; s < v; ++s)
        (f[s][h] = [0, +a(p, f[s].key, h, o)]).data = p;
    for (s = 0, m = ay(t(f)); s < v; ++s) f[m[s]].index = s;
    return (r(f, m), f);
  }
  return (
    (u.keys = function (o) {
      return arguments.length
        ? ((e = typeof o == "function" ? o : Ge(Array.from(o))), u)
        : e;
    }),
    (u.value = function (o) {
      return arguments.length
        ? ((a = typeof o == "function" ? o : Ge(+o)), u)
        : a;
    }),
    (u.order = function (o) {
      return arguments.length
        ? ((t =
            o == null ? cm : typeof o == "function" ? o : Ge(Array.from(o))),
          u)
        : t;
    }),
    (u.offset = function (o) {
      return arguments.length ? ((r = o ?? Fi), u) : r;
    }),
    u
  );
}
function vC(e, t) {
  if ((a = e.length) > 0) {
    for (var r, a, u = 0, o = e[0].length, f; u < o; ++u) {
      for (f = r = 0; r < a; ++r) f += e[r][u][1] || 0;
      if (f) for (r = 0; r < a; ++r) e[r][u][1] /= f;
    }
    Fi(e, t);
  }
}
function hC(e, t) {
  if ((u = e.length) > 0) {
    for (var r = 0, a = e[t[0]], u, o = a.length; r < o; ++r) {
      for (var f = 0, s = 0; f < u; ++f) s += e[f][r][1] || 0;
      a[r][1] += a[r][0] = -s / 2;
    }
    Fi(e, t);
  }
}
function mC(e, t) {
  if (!(!((f = e.length) > 0) || !((o = (u = e[t[0]]).length) > 0))) {
    for (var r = 0, a = 1, u, o, f; a < o; ++a) {
      for (var s = 0, v = 0, h = 0; s < f; ++s) {
        for (
          var m = e[t[s]],
            p = m[a][1] || 0,
            g = m[a - 1][1] || 0,
            b = (p - g) / 2,
            O = 0;
          O < s;
          ++O
        ) {
          var S = e[t[O]],
            w = S[a][1] || 0,
            _ = S[a - 1][1] || 0;
          b += w - _;
        }
        ((v += p), (h += b * p));
      }
      ((u[a - 1][1] += u[a - 1][0] = r), v && (r -= h / v));
    }
    ((u[a - 1][1] += u[a - 1][0] = r), Fi(e, t));
  }
}
var yC = ["type", "size", "sizeType"];
function fm() {
  return (
    (fm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    fm.apply(null, arguments)
  );
}
function rx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function ax(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rx(Object(r), !0).forEach(function (a) {
          pC(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rx(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function pC(e, t, r) {
  return (
    (t = gC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function gC(e) {
  var t = bC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xC(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = SC(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function SC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var gw = {
    symbolCircle: iy,
    symbolCross: Hj,
    symbolDiamond: Ij,
    symbolSquare: Kj,
    symbolStar: Zj,
    symbolTriangle: Qj,
    symbolWye: Fj,
  },
  OC = Math.PI / 180,
  AC = (e) => {
    var t = "symbol".concat(zu(e));
    return gw[t] || iy;
  },
  wC = (e, t, r) => {
    if (t === "area") return e;
    switch (r) {
      case "cross":
        return (5 * e * e) / 9;
      case "diamond":
        return (0.5 * e * e) / Math.sqrt(3);
      case "square":
        return e * e;
      case "star": {
        var a = 18 * OC;
        return (
          1.25 * e * e * (Math.tan(a) - Math.tan(a * 2) * Math.tan(a) ** 2)
        );
      }
      case "triangle":
        return (Math.sqrt(3) * e * e) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
      default:
        return (Math.PI * e * e) / 4;
    }
  },
  EC = (e, t) => {
    gw["symbol".concat(zu(e))] = t;
  },
  ly = (e) => {
    var { type: t = "circle", size: r = 64, sizeType: a = "area" } = e,
      u = xC(e, yC),
      o = ax(ax({}, u), {}, { type: t, size: r, sizeType: a }),
      f = "circle";
    typeof t == "string" && (f = t);
    var s = () => {
        var g = AC(f),
          b = Jj()
            .type(g)
            .size(wC(r, a, f));
        return b();
      },
      { className: v, cx: h, cy: m } = o,
      p = rt(o, !0);
    return h === +h && m === +m && r === +r
      ? A.createElement(
          "path",
          fm({}, p, {
            className: ke("recharts-symbols", v),
            transform: "translate(".concat(h, ", ").concat(m, ")"),
            d: s(),
          }),
        )
      : null;
  };
ly.registerSymbol = EC;
function sm() {
  return (
    (sm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    sm.apply(null, arguments)
  );
}
function ix(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function _C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ix(Object(r), !0).forEach(function (a) {
          uy(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ix(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function uy(e, t, r) {
  return (
    (t = TC(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TC(e) {
  var t = MC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rn = 32;
class oy extends A.PureComponent {
  renderIcon(t, r) {
    var { inactiveColor: a } = this.props,
      u = Rn / 2,
      o = Rn / 6,
      f = Rn / 3,
      s = t.inactive ? a : t.color,
      v = r ?? t.type;
    if (v === "none") return null;
    if (v === "plainline")
      return A.createElement("line", {
        strokeWidth: 4,
        fill: "none",
        stroke: s,
        strokeDasharray: t.payload.strokeDasharray,
        x1: 0,
        y1: u,
        x2: Rn,
        y2: u,
        className: "recharts-legend-icon",
      });
    if (v === "line")
      return A.createElement("path", {
        strokeWidth: 4,
        fill: "none",
        stroke: s,
        d: "M0,"
          .concat(u, "h")
          .concat(
            f,
            `
            A`,
          )
          .concat(o, ",")
          .concat(o, ",0,1,1,")
          .concat(2 * f, ",")
          .concat(
            u,
            `
            H`,
          )
          .concat(Rn, "M")
          .concat(2 * f, ",")
          .concat(
            u,
            `
            A`,
          )
          .concat(o, ",")
          .concat(o, ",0,1,1,")
          .concat(f, ",")
          .concat(u),
        className: "recharts-legend-icon",
      });
    if (v === "rect")
      return A.createElement("path", {
        stroke: "none",
        fill: s,
        d: "M0,"
          .concat(Rn / 8, "h")
          .concat(Rn, "v")
          .concat((Rn * 3) / 4, "h")
          .concat(-Rn, "z"),
        className: "recharts-legend-icon",
      });
    if (A.isValidElement(t.legendIcon)) {
      var h = _C({}, t);
      return (delete h.legendIcon, A.cloneElement(t.legendIcon, h));
    }
    return A.createElement(ly, {
      fill: s,
      cx: u,
      cy: u,
      size: Rn,
      sizeType: "diameter",
      type: v,
    });
  }
  renderItems() {
    var {
        payload: t,
        iconSize: r,
        layout: a,
        formatter: u,
        inactiveColor: o,
        iconType: f,
      } = this.props,
      s = { x: 0, y: 0, width: Rn, height: Rn },
      v = {
        display: a === "horizontal" ? "inline-block" : "block",
        marginRight: 10,
      },
      h = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return t.map((m, p) => {
      var g = m.formatter || u,
        b = ke({
          "recharts-legend-item": !0,
          ["legend-item-".concat(p)]: !0,
          inactive: m.inactive,
        });
      if (m.type === "none") return null;
      var O = m.inactive ? o : m.color,
        S = g ? g(m.value, m, p) : m.value;
      return A.createElement(
        "li",
        sm(
          { className: b, style: v, key: "legend-item-".concat(p) },
          Sf(this.props, m, p),
        ),
        A.createElement(
          ny,
          {
            width: r,
            height: r,
            viewBox: s,
            style: h,
            "aria-label": "".concat(S, " legend icon"),
          },
          this.renderIcon(m, f),
        ),
        A.createElement(
          "span",
          { className: "recharts-legend-item-text", style: { color: O } },
          S,
        ),
      );
    });
  }
  render() {
    var { payload: t, layout: r, align: a } = this.props;
    if (!t || !t.length) return null;
    var u = {
      padding: 0,
      margin: 0,
      textAlign: r === "horizontal" ? a : "left",
    };
    return A.createElement(
      "ul",
      { className: "recharts-default-legend", style: u },
      this.renderItems(),
    );
  }
}
uy(oy, "displayName", "Legend");
uy(oy, "defaultProps", {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle",
});
var Bv = {},
  Uv = {},
  lx;
function DC() {
  return (
    lx ||
      ((lx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r, a) {
          const u = new Map();
          for (let o = 0; o < r.length; o++) {
            const f = r[o],
              s = a(f);
            u.has(s) || u.set(s, f);
          }
          return Array.from(u.values());
        }
        e.uniqBy = t;
      })(Uv)),
    Uv
  );
}
var $v = {},
  ux;
function bw() {
  return (
    ux ||
      ((ux = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return r;
        }
        e.identity = t;
      })($v)),
    $v
  );
}
var qv = {},
  Hv = {},
  Yv = {},
  ox;
function jC() {
  return (
    ox ||
      ((ox = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return Number.isSafeInteger(r) && r >= 0;
        }
        e.isLength = t;
      })(Yv)),
    Yv
  );
}
var cx;
function cy() {
  return (
    cx ||
      ((cx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = jC();
        function r(a) {
          return a != null && typeof a != "function" && t.isLength(a.length);
        }
        e.isArrayLike = r;
      })(Hv)),
    Hv
  );
}
var Iv = {},
  fx;
function CC() {
  return (
    fx ||
      ((fx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return typeof r == "object" && r !== null;
        }
        e.isObjectLike = t;
      })(Iv)),
    Iv
  );
}
var sx;
function PC() {
  return (
    sx ||
      ((sx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = cy(),
          r = CC();
        function a(u) {
          return r.isObjectLike(u) && t.isArrayLike(u);
        }
        e.isArrayLikeObject = a;
      })(qv)),
    qv
  );
}
var Kv = {},
  Gv = {},
  dx;
function NC() {
  return (
    dx ||
      ((dx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Jm();
        function r(a) {
          return function (u) {
            return t.get(u, a);
          };
        }
        e.property = r;
      })(Gv)),
    Gv
  );
}
var Xv = {},
  Vv = {},
  Zv = {},
  Qv = {},
  vx;
function xw() {
  return (
    vx ||
      ((vx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return r !== null && (typeof r == "object" || typeof r == "function");
        }
        e.isObject = t;
      })(Qv)),
    Qv
  );
}
var Wv = {},
  hx;
function Sw() {
  return (
    hx ||
      ((hx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return r == null || (typeof r != "object" && typeof r != "function");
        }
        e.isPrimitive = t;
      })(Wv)),
    Wv
  );
}
var Fv = {},
  mx;
function Ow() {
  return (
    mx ||
      ((mx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r, a) {
          return r === a || (Number.isNaN(r) && Number.isNaN(a));
        }
        e.eq = t;
      })(Fv)),
    Fv
  );
}
var yx;
function zC() {
  return (
    yx ||
      ((yx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = fy(),
          r = xw(),
          a = Sw(),
          u = Ow();
        function o(p, g, b) {
          return typeof b != "function"
            ? t.isMatch(p, g)
            : f(
                p,
                g,
                function O(S, w, _, M, T, N) {
                  const z = b(S, w, _, M, T, N);
                  return z !== void 0 ? !!z : f(S, w, O, N);
                },
                new Map(),
              );
        }
        function f(p, g, b, O) {
          if (g === p) return !0;
          switch (typeof g) {
            case "object":
              return s(p, g, b, O);
            case "function":
              return Object.keys(g).length > 0
                ? f(p, { ...g }, b, O)
                : u.eq(p, g);
            default:
              return r.isObject(p)
                ? typeof g == "string"
                  ? g === ""
                  : !0
                : u.eq(p, g);
          }
        }
        function s(p, g, b, O) {
          if (g == null) return !0;
          if (Array.isArray(g)) return h(p, g, b, O);
          if (g instanceof Map) return v(p, g, b, O);
          if (g instanceof Set) return m(p, g, b, O);
          const S = Object.keys(g);
          if (p == null) return S.length === 0;
          if (S.length === 0) return !0;
          if (O && O.has(g)) return O.get(g) === p;
          O && O.set(g, p);
          try {
            for (let w = 0; w < S.length; w++) {
              const _ = S[w];
              if (
                (!a.isPrimitive(p) && !(_ in p)) ||
                (g[_] === void 0 && p[_] !== void 0) ||
                (g[_] === null && p[_] !== null) ||
                !b(p[_], g[_], _, p, g, O)
              )
                return !1;
            }
            return !0;
          } finally {
            O && O.delete(g);
          }
        }
        function v(p, g, b, O) {
          if (g.size === 0) return !0;
          if (!(p instanceof Map)) return !1;
          for (const [S, w] of g.entries()) {
            const _ = p.get(S);
            if (b(_, w, S, p, g, O) === !1) return !1;
          }
          return !0;
        }
        function h(p, g, b, O) {
          if (g.length === 0) return !0;
          if (!Array.isArray(p)) return !1;
          const S = new Set();
          for (let w = 0; w < g.length; w++) {
            const _ = g[w];
            let M = !1;
            for (let T = 0; T < p.length; T++) {
              if (S.has(T)) continue;
              const N = p[T];
              let z = !1;
              if ((b(N, _, w, p, g, O) && (z = !0), z)) {
                (S.add(T), (M = !0));
                break;
              }
            }
            if (!M) return !1;
          }
          return !0;
        }
        function m(p, g, b, O) {
          return g.size === 0
            ? !0
            : p instanceof Set
              ? h([...p], [...g], b, O)
              : !1;
        }
        ((e.isMatchWith = o), (e.isSetMatch = m));
      })(Zv)),
    Zv
  );
}
var px;
function fy() {
  return (
    px ||
      ((px = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = zC();
        function r(a, u) {
          return t.isMatchWith(a, u, () => {});
        }
        e.isMatch = r;
      })(Vv)),
    Vv
  );
}
var Jv = {},
  eh = {},
  th = {},
  gx;
function RC() {
  return (
    gx ||
      ((gx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return Object.getOwnPropertySymbols(r).filter((a) =>
            Object.prototype.propertyIsEnumerable.call(r, a),
          );
        }
        e.getSymbols = t;
      })(th)),
    th
  );
}
var nh = {},
  bx;
function Aw() {
  return (
    bx ||
      ((bx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return r == null
            ? r === void 0
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(r);
        }
        e.getTag = t;
      })(nh)),
    nh
  );
}
var rh = {},
  xx;
function ww() {
  return (
    xx ||
      ((xx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = "[object RegExp]",
          r = "[object String]",
          a = "[object Number]",
          u = "[object Boolean]",
          o = "[object Arguments]",
          f = "[object Symbol]",
          s = "[object Date]",
          v = "[object Map]",
          h = "[object Set]",
          m = "[object Array]",
          p = "[object Function]",
          g = "[object ArrayBuffer]",
          b = "[object Object]",
          O = "[object Error]",
          S = "[object DataView]",
          w = "[object Uint8Array]",
          _ = "[object Uint8ClampedArray]",
          M = "[object Uint16Array]",
          T = "[object Uint32Array]",
          N = "[object BigUint64Array]",
          z = "[object Int8Array]",
          R = "[object Int16Array]",
          B = "[object Int32Array]",
          X = "[object BigInt64Array]",
          le = "[object Float32Array]",
          ae = "[object Float64Array]";
        ((e.argumentsTag = o),
          (e.arrayBufferTag = g),
          (e.arrayTag = m),
          (e.bigInt64ArrayTag = X),
          (e.bigUint64ArrayTag = N),
          (e.booleanTag = u),
          (e.dataViewTag = S),
          (e.dateTag = s),
          (e.errorTag = O),
          (e.float32ArrayTag = le),
          (e.float64ArrayTag = ae),
          (e.functionTag = p),
          (e.int16ArrayTag = R),
          (e.int32ArrayTag = B),
          (e.int8ArrayTag = z),
          (e.mapTag = v),
          (e.numberTag = a),
          (e.objectTag = b),
          (e.regexpTag = t),
          (e.setTag = h),
          (e.stringTag = r),
          (e.symbolTag = f),
          (e.uint16ArrayTag = M),
          (e.uint32ArrayTag = T),
          (e.uint8ArrayTag = w),
          (e.uint8ClampedArrayTag = _));
      })(rh)),
    rh
  );
}
var ah = {},
  Sx;
function kC() {
  return (
    Sx ||
      ((Sx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return ArrayBuffer.isView(r) && !(r instanceof DataView);
        }
        e.isTypedArray = t;
      })(ah)),
    ah
  );
}
var Ox;
function Ew() {
  return (
    Ox ||
      ((Ox = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = RC(),
          r = Aw(),
          a = ww(),
          u = Sw(),
          o = kC();
        function f(m, p) {
          return s(m, void 0, m, new Map(), p);
        }
        function s(m, p, g, b = new Map(), O = void 0) {
          const S = O?.(m, p, g, b);
          if (S !== void 0) return S;
          if (u.isPrimitive(m)) return m;
          if (b.has(m)) return b.get(m);
          if (Array.isArray(m)) {
            const w = new Array(m.length);
            b.set(m, w);
            for (let _ = 0; _ < m.length; _++) w[_] = s(m[_], _, g, b, O);
            return (
              Object.hasOwn(m, "index") && (w.index = m.index),
              Object.hasOwn(m, "input") && (w.input = m.input),
              w
            );
          }
          if (m instanceof Date) return new Date(m.getTime());
          if (m instanceof RegExp) {
            const w = new RegExp(m.source, m.flags);
            return ((w.lastIndex = m.lastIndex), w);
          }
          if (m instanceof Map) {
            const w = new Map();
            b.set(m, w);
            for (const [_, M] of m) w.set(_, s(M, _, g, b, O));
            return w;
          }
          if (m instanceof Set) {
            const w = new Set();
            b.set(m, w);
            for (const _ of m) w.add(s(_, void 0, g, b, O));
            return w;
          }
          if (typeof Buffer < "u" && Buffer.isBuffer(m)) return m.subarray();
          if (o.isTypedArray(m)) {
            const w = new (Object.getPrototypeOf(m).constructor)(m.length);
            b.set(m, w);
            for (let _ = 0; _ < m.length; _++) w[_] = s(m[_], _, g, b, O);
            return w;
          }
          if (
            m instanceof ArrayBuffer ||
            (typeof SharedArrayBuffer < "u" && m instanceof SharedArrayBuffer)
          )
            return m.slice(0);
          if (m instanceof DataView) {
            const w = new DataView(
              m.buffer.slice(0),
              m.byteOffset,
              m.byteLength,
            );
            return (b.set(m, w), v(w, m, g, b, O), w);
          }
          if (typeof File < "u" && m instanceof File) {
            const w = new File([m], m.name, { type: m.type });
            return (b.set(m, w), v(w, m, g, b, O), w);
          }
          if (m instanceof Blob) {
            const w = new Blob([m], { type: m.type });
            return (b.set(m, w), v(w, m, g, b, O), w);
          }
          if (m instanceof Error) {
            const w = new m.constructor();
            return (
              b.set(m, w),
              (w.message = m.message),
              (w.name = m.name),
              (w.stack = m.stack),
              (w.cause = m.cause),
              v(w, m, g, b, O),
              w
            );
          }
          if (typeof m == "object" && h(m)) {
            const w = Object.create(Object.getPrototypeOf(m));
            return (b.set(m, w), v(w, m, g, b, O), w);
          }
          return m;
        }
        function v(m, p, g = m, b, O) {
          const S = [...Object.keys(p), ...t.getSymbols(p)];
          for (let w = 0; w < S.length; w++) {
            const _ = S[w],
              M = Object.getOwnPropertyDescriptor(m, _);
            (M == null || M.writable) && (m[_] = s(p[_], _, g, b, O));
          }
        }
        function h(m) {
          switch (r.getTag(m)) {
            case a.argumentsTag:
            case a.arrayTag:
            case a.arrayBufferTag:
            case a.dataViewTag:
            case a.booleanTag:
            case a.dateTag:
            case a.float32ArrayTag:
            case a.float64ArrayTag:
            case a.int8ArrayTag:
            case a.int16ArrayTag:
            case a.int32ArrayTag:
            case a.mapTag:
            case a.numberTag:
            case a.objectTag:
            case a.regexpTag:
            case a.setTag:
            case a.stringTag:
            case a.symbolTag:
            case a.uint8ArrayTag:
            case a.uint8ClampedArrayTag:
            case a.uint16ArrayTag:
            case a.uint32ArrayTag:
              return !0;
            default:
              return !1;
          }
        }
        ((e.cloneDeepWith = f),
          (e.cloneDeepWithImpl = s),
          (e.copyProperties = v));
      })(eh)),
    eh
  );
}
var Ax;
function LC() {
  return (
    Ax ||
      ((Ax = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Ew();
        function r(a) {
          return t.cloneDeepWithImpl(a, void 0, a, new Map(), void 0);
        }
        e.cloneDeep = r;
      })(Jv)),
    Jv
  );
}
var wx;
function BC() {
  return (
    wx ||
      ((wx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = fy(),
          r = LC();
        function a(u) {
          return ((u = r.cloneDeep(u)), (o) => t.isMatch(o, u));
        }
        e.matches = a;
      })(Xv)),
    Xv
  );
}
var ih = {},
  lh = {},
  uh = {},
  Ex;
function UC() {
  return (
    Ex ||
      ((Ex = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Ew(),
          r = ww();
        function a(u, o) {
          return t.cloneDeepWith(u, (f, s, v, h) => {
            const m = o?.(f, s, v, h);
            if (m !== void 0) return m;
            if (typeof u == "object")
              switch (Object.prototype.toString.call(u)) {
                case r.numberTag:
                case r.stringTag:
                case r.booleanTag: {
                  const p = new u.constructor(u?.valueOf());
                  return (t.copyProperties(p, u), p);
                }
                case r.argumentsTag: {
                  const p = {};
                  return (
                    t.copyProperties(p, u),
                    (p.length = u.length),
                    (p[Symbol.iterator] = u[Symbol.iterator]),
                    p
                  );
                }
                default:
                  return;
              }
          });
        }
        e.cloneDeepWith = a;
      })(uh)),
    uh
  );
}
var _x;
function $C() {
  return (
    _x ||
      ((_x = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = UC();
        function r(a) {
          return t.cloneDeepWith(a);
        }
        e.cloneDeep = r;
      })(lh)),
    lh
  );
}
var oh = {},
  ch = {},
  Tx;
function _w() {
  return (
    Tx ||
      ((Tx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = /^(?:0|[1-9]\d*)$/;
        function r(a, u = Number.MAX_SAFE_INTEGER) {
          switch (typeof a) {
            case "number":
              return Number.isInteger(a) && a >= 0 && a < u;
            case "symbol":
              return !1;
            case "string":
              return t.test(a);
          }
        }
        e.isIndex = r;
      })(ch)),
    ch
  );
}
var fh = {},
  Mx;
function qC() {
  return (
    Mx ||
      ((Mx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Aw();
        function r(a) {
          return (
            a !== null &&
            typeof a == "object" &&
            t.getTag(a) === "[object Arguments]"
          );
        }
        e.isArguments = r;
      })(fh)),
    fh
  );
}
var Dx;
function HC() {
  return (
    Dx ||
      ((Dx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = XA(),
          r = _w(),
          a = qC(),
          u = Fm();
        function o(f, s) {
          let v;
          if (
            (Array.isArray(s)
              ? (v = s)
              : typeof s == "string" && t.isDeepKey(s) && f?.[s] == null
                ? (v = u.toPath(s))
                : (v = [s]),
            v.length === 0)
          )
            return !1;
          let h = f;
          for (let m = 0; m < v.length; m++) {
            const p = v[m];
            if (
              (h == null || !Object.hasOwn(h, p)) &&
              !(
                (Array.isArray(h) || a.isArguments(h)) &&
                r.isIndex(p) &&
                p < h.length
              )
            )
              return !1;
            h = h[p];
          }
          return !0;
        }
        e.has = o;
      })(oh)),
    oh
  );
}
var jx;
function YC() {
  return (
    jx ||
      ((jx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = fy(),
          r = VA(),
          a = $C(),
          u = Jm(),
          o = HC();
        function f(s, v) {
          switch (typeof s) {
            case "object": {
              Object.is(s?.valueOf(), -0) && (s = "-0");
              break;
            }
            case "number": {
              s = r.toKey(s);
              break;
            }
          }
          return (
            (v = a.cloneDeep(v)),
            function (h) {
              const m = u.get(h, s);
              return m === void 0
                ? o.has(h, s)
                : v === void 0
                  ? m === void 0
                  : t.isMatch(m, v);
            }
          );
        }
        e.matchesProperty = f;
      })(ih)),
    ih
  );
}
var Cx;
function IC() {
  return (
    Cx ||
      ((Cx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = bw(),
          r = NC(),
          a = BC(),
          u = YC();
        function o(f) {
          if (f == null) return t.identity;
          switch (typeof f) {
            case "function":
              return f;
            case "object":
              return Array.isArray(f) && f.length === 2
                ? u.matchesProperty(f[0], f[1])
                : a.matches(f);
            case "string":
            case "symbol":
            case "number":
              return r.property(f);
          }
        }
        e.iteratee = o;
      })(Kv)),
    Kv
  );
}
var Px;
function KC() {
  return (
    Px ||
      ((Px = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = DC(),
          r = bw(),
          a = PC(),
          u = IC();
        function o(f, s = r.identity) {
          return a.isArrayLikeObject(f)
            ? t.uniqBy(Array.from(f), u.iteratee(s))
            : [];
        }
        e.uniqBy = o;
      })(Bv)),
    Bv
  );
}
var sh, Nx;
function GC() {
  return (Nx || ((Nx = 1), (sh = KC().uniqBy)), sh);
}
var XC = GC();
const zx = Zn(XC);
function Tw(e, t, r) {
  return t === !0 ? zx(e, r) : typeof t == "function" ? zx(e, t) : e;
}
var dh = { exports: {} },
  vh = {},
  hh = { exports: {} },
  mh = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rx;
function VC() {
  if (Rx) return mh;
  Rx = 1;
  var e = ll();
  function t(p, g) {
    return (p === g && (p !== 0 || 1 / p === 1 / g)) || (p !== p && g !== g);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    a = e.useState,
    u = e.useEffect,
    o = e.useLayoutEffect,
    f = e.useDebugValue;
  function s(p, g) {
    var b = g(),
      O = a({ inst: { value: b, getSnapshot: g } }),
      S = O[0].inst,
      w = O[1];
    return (
      o(
        function () {
          ((S.value = b), (S.getSnapshot = g), v(S) && w({ inst: S }));
        },
        [p, b, g],
      ),
      u(
        function () {
          return (
            v(S) && w({ inst: S }),
            p(function () {
              v(S) && w({ inst: S });
            })
          );
        },
        [p],
      ),
      f(b),
      b
    );
  }
  function v(p) {
    var g = p.getSnapshot;
    p = p.value;
    try {
      var b = g();
      return !r(p, b);
    } catch {
      return !0;
    }
  }
  function h(p, g) {
    return g();
  }
  var m =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : s;
  return (
    (mh.useSyncExternalStore =
      e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : m),
    mh
  );
}
var kx;
function ZC() {
  return (kx || ((kx = 1), (hh.exports = VC())), hh.exports);
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lx;
function QC() {
  if (Lx) return vh;
  Lx = 1;
  var e = ll(),
    t = ZC();
  function r(h, m) {
    return (h === m && (h !== 0 || 1 / h === 1 / m)) || (h !== h && m !== m);
  }
  var a = typeof Object.is == "function" ? Object.is : r,
    u = t.useSyncExternalStore,
    o = e.useRef,
    f = e.useEffect,
    s = e.useMemo,
    v = e.useDebugValue;
  return (
    (vh.useSyncExternalStoreWithSelector = function (h, m, p, g, b) {
      var O = o(null);
      if (O.current === null) {
        var S = { hasValue: !1, value: null };
        O.current = S;
      } else S = O.current;
      O = s(
        function () {
          function _(R) {
            if (!M) {
              if (((M = !0), (T = R), (R = g(R)), b !== void 0 && S.hasValue)) {
                var B = S.value;
                if (b(B, R)) return (N = B);
              }
              return (N = R);
            }
            if (((B = N), a(T, R))) return B;
            var X = g(R);
            return b !== void 0 && b(B, X) ? ((T = R), B) : ((T = R), (N = X));
          }
          var M = !1,
            T,
            N,
            z = p === void 0 ? null : p;
          return [
            function () {
              return _(m());
            },
            z === null
              ? void 0
              : function () {
                  return _(z());
                },
          ];
        },
        [m, p, g, b],
      );
      var w = u(h, O[0], O[1]);
      return (
        f(
          function () {
            ((S.hasValue = !0), (S.value = w));
          },
          [w],
        ),
        v(w),
        w
      );
    }),
    vh
  );
}
var Bx;
function WC() {
  return (Bx || ((Bx = 1), (dh.exports = QC())), dh.exports);
}
var FC = WC(),
  sy = A.createContext(null),
  JC = (e) => e,
  ut = () => {
    var e = A.useContext(sy);
    return e ? e.store.dispatch : JC;
  },
  jc = () => {},
  eP = () => jc,
  tP = (e, t) => e === t;
function ve(e) {
  var t = A.useContext(sy);
  return FC.useSyncExternalStoreWithSelector(
    t ? t.subscription.addNestedSub : eP,
    t ? t.store.getState : jc,
    t ? t.store.getState : jc,
    t ? e : jc,
    tP,
  );
}
function nP(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function rP(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function aP(
  e,
  t = "expected all items to be functions, instead received the following types: ",
) {
  if (!e.every((r) => typeof r == "function")) {
    const r = e
      .map((a) =>
        typeof a == "function" ? `function ${a.name || "unnamed"}()` : typeof a,
      )
      .join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Ux = (e) => (Array.isArray(e) ? e : [e]);
function iP(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    aP(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    t
  );
}
function lP(e, t) {
  const r = [],
    { length: a } = e;
  for (let u = 0; u < a; u++) r.push(e[u].apply(null, t));
  return r;
}
var uP = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  oP = typeof WeakRef < "u" ? WeakRef : uP,
  cP = 0,
  $x = 1;
function hc() {
  return { s: cP, v: void 0, o: null, p: null };
}
function Mw(e, t = {}) {
  let r = hc();
  const { resultEqualityCheck: a } = t;
  let u,
    o = 0;
  function f() {
    let s = r;
    const { length: v } = arguments;
    for (let p = 0, g = v; p < g; p++) {
      const b = arguments[p];
      if (typeof b == "function" || (typeof b == "object" && b !== null)) {
        let O = s.o;
        O === null && (s.o = O = new WeakMap());
        const S = O.get(b);
        S === void 0 ? ((s = hc()), O.set(b, s)) : (s = S);
      } else {
        let O = s.p;
        O === null && (s.p = O = new Map());
        const S = O.get(b);
        S === void 0 ? ((s = hc()), O.set(b, s)) : (s = S);
      }
    }
    const h = s;
    let m;
    if (s.s === $x) m = s.v;
    else if (((m = e.apply(null, arguments)), o++, a)) {
      const p = u?.deref?.() ?? u;
      (p != null && a(p, m) && ((m = p), o !== 0 && o--),
        (u =
          (typeof m == "object" && m !== null) || typeof m == "function"
            ? new oP(m)
            : m));
    }
    return ((h.s = $x), (h.v = m), m);
  }
  return (
    (f.clearCache = () => {
      ((r = hc()), f.resetResultsCount());
    }),
    (f.resultsCount = () => o),
    (f.resetResultsCount = () => {
      o = 0;
    }),
    f
  );
}
function fP(e, ...t) {
  const r = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    a = (...u) => {
      let o = 0,
        f = 0,
        s,
        v = {},
        h = u.pop();
      (typeof h == "object" && ((v = h), (h = u.pop())),
        nP(
          h,
          `createSelector expects an output function after the inputs, but received: [${typeof h}]`,
        ));
      const m = { ...r, ...v },
        {
          memoize: p,
          memoizeOptions: g = [],
          argsMemoize: b = Mw,
          argsMemoizeOptions: O = [],
        } = m,
        S = Ux(g),
        w = Ux(O),
        _ = iP(u),
        M = p(
          function () {
            return (o++, h.apply(null, arguments));
          },
          ...S,
        ),
        T = b(
          function () {
            f++;
            const z = lP(_, arguments);
            return ((s = M.apply(null, z)), s);
          },
          ...w,
        );
      return Object.assign(T, {
        resultFunc: h,
        memoizedResultFunc: M,
        dependencies: _,
        dependencyRecomputations: () => f,
        resetDependencyRecomputations: () => {
          f = 0;
        },
        lastResult: () => s,
        recomputations: () => o,
        resetRecomputations: () => {
          o = 0;
        },
        memoize: p,
        argsMemoize: b,
      });
    };
  return (Object.assign(a, { withTypes: () => a }), a);
}
var K = fP(Mw),
  sP = Object.assign(
    (e, t = K) => {
      rP(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`,
      );
      const r = Object.keys(e),
        a = r.map((o) => e[o]);
      return t(a, (...o) => o.reduce((f, s, v) => ((f[r[v]] = s), f), {}));
    },
    { withTypes: () => sP },
  ),
  yh = {},
  ph = {},
  gh = {},
  qx;
function dP() {
  return (
    qx ||
      ((qx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(a) {
          return typeof a == "symbol"
            ? 1
            : a === null
              ? 2
              : a === void 0
                ? 3
                : a !== a
                  ? 4
                  : 0;
        }
        const r = (a, u, o) => {
          if (a !== u) {
            const f = t(a),
              s = t(u);
            if (f === s && f === 0) {
              if (a < u) return o === "desc" ? 1 : -1;
              if (a > u) return o === "desc" ? -1 : 1;
            }
            return o === "desc" ? s - f : f - s;
          }
          return 0;
        };
        e.compareValues = r;
      })(gh)),
    gh
  );
}
var bh = {},
  xh = {},
  Hx;
function Dw() {
  return (
    Hx ||
      ((Hx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return typeof r == "symbol" || r instanceof Symbol;
        }
        e.isSymbol = t;
      })(xh)),
    xh
  );
}
var Yx;
function vP() {
  return (
    Yx ||
      ((Yx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Dw(),
          r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          a = /^\w*$/;
        function u(o, f) {
          return Array.isArray(o)
            ? !1
            : typeof o == "number" ||
                typeof o == "boolean" ||
                o == null ||
                t.isSymbol(o)
              ? !0
              : (typeof o == "string" && (a.test(o) || !r.test(o))) ||
                (f != null && Object.hasOwn(f, o));
        }
        e.isKey = u;
      })(bh)),
    bh
  );
}
var Ix;
function hP() {
  return (
    Ix ||
      ((Ix = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = dP(),
          r = vP(),
          a = Fm();
        function u(o, f, s, v) {
          if (o == null) return [];
          ((s = v ? void 0 : s),
            Array.isArray(o) || (o = Object.values(o)),
            Array.isArray(f) || (f = f == null ? [null] : [f]),
            f.length === 0 && (f = [null]),
            Array.isArray(s) || (s = s == null ? [] : [s]),
            (s = s.map((b) => String(b))));
          const h = (b, O) => {
              let S = b;
              for (let w = 0; w < O.length && S != null; ++w) S = S[O[w]];
              return S;
            },
            m = (b, O) =>
              O == null || b == null
                ? O
                : typeof b == "object" && "key" in b
                  ? Object.hasOwn(O, b.key)
                    ? O[b.key]
                    : h(O, b.path)
                  : typeof b == "function"
                    ? b(O)
                    : Array.isArray(b)
                      ? h(O, b)
                      : typeof O == "object"
                        ? O[b]
                        : O,
            p = f.map(
              (b) => (
                Array.isArray(b) && b.length === 1 && (b = b[0]),
                b == null ||
                typeof b == "function" ||
                Array.isArray(b) ||
                r.isKey(b)
                  ? b
                  : { key: b, path: a.toPath(b) }
              ),
            );
          return o
            .map((b) => ({ original: b, criteria: p.map((O) => m(O, b)) }))
            .slice()
            .sort((b, O) => {
              for (let S = 0; S < p.length; S++) {
                const w = t.compareValues(b.criteria[S], O.criteria[S], s[S]);
                if (w !== 0) return w;
              }
              return 0;
            })
            .map((b) => b.original);
        }
        e.orderBy = u;
      })(ph)),
    ph
  );
}
var Sh = {},
  Kx;
function mP() {
  return (
    Kx ||
      ((Kx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r, a = 1) {
          const u = [],
            o = Math.floor(a),
            f = (s, v) => {
              for (let h = 0; h < s.length; h++) {
                const m = s[h];
                Array.isArray(m) && v < o ? f(m, v + 1) : u.push(m);
              }
            };
          return (f(r, 0), u);
        }
        e.flatten = t;
      })(Sh)),
    Sh
  );
}
var Oh = {},
  Gx;
function jw() {
  return (
    Gx ||
      ((Gx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = _w(),
          r = cy(),
          a = xw(),
          u = Ow();
        function o(f, s, v) {
          return a.isObject(v) &&
            ((typeof s == "number" &&
              r.isArrayLike(v) &&
              t.isIndex(s) &&
              s < v.length) ||
              (typeof s == "string" && s in v))
            ? u.eq(v[s], f)
            : !1;
        }
        e.isIterateeCall = o;
      })(Oh)),
    Oh
  );
}
var Xx;
function yP() {
  return (
    Xx ||
      ((Xx = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = hP(),
          r = mP(),
          a = jw();
        function u(o, ...f) {
          const s = f.length;
          return (
            s > 1 && a.isIterateeCall(o, f[0], f[1])
              ? (f = [])
              : s > 2 && a.isIterateeCall(f[0], f[1], f[2]) && (f = [f[0]]),
            t.orderBy(o, r.flatten(f), ["asc"])
          );
        }
        e.sortBy = u;
      })(yh)),
    yh
  );
}
var Ah, Vx;
function pP() {
  return (Vx || ((Vx = 1), (Ah = yP().sortBy)), Ah);
}
var gP = pP();
const Ef = Zn(gP);
var Cw = (e) => e.legend.settings,
  bP = (e) => e.legend.size,
  xP = (e) => e.legend.payload,
  SP = K([xP, Cw], (e, t) => {
    var { itemSorter: r } = t,
      a = e.flat(1);
    return r ? Ef(a, r) : a;
  });
function OP() {
  return ve(SP);
}
var mc = 1;
function Pw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    [t, r] = A.useState({ height: 0, left: 0, top: 0, width: 0 }),
    a = A.useCallback(
      (u) => {
        if (u != null) {
          var o = u.getBoundingClientRect(),
            f = { height: o.height, left: o.left, top: o.top, width: o.width };
          (Math.abs(f.height - t.height) > mc ||
            Math.abs(f.left - t.left) > mc ||
            Math.abs(f.top - t.top) > mc ||
            Math.abs(f.width - t.width) > mc) &&
            r({ height: f.height, left: f.left, top: f.top, width: f.width });
        }
      },
      [t.width, t.height, t.top, t.left, ...e],
    );
  return [t, a];
}
function Nt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var AP = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Zx = AP,
  wh = () => Math.random().toString(36).substring(7).split("").join("."),
  wP = {
    INIT: `@@redux/INIT${wh()}`,
    REPLACE: `@@redux/REPLACE${wh()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${wh()}`,
  },
  $c = wP;
function dy(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Nw(e, t, r) {
  if (typeof e != "function") throw new Error(Nt(2));
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Nt(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(Nt(1));
    return r(Nw)(e, t);
  }
  let a = e,
    u = t,
    o = new Map(),
    f = o,
    s = 0,
    v = !1;
  function h() {
    f === o &&
      ((f = new Map()),
      o.forEach((w, _) => {
        f.set(_, w);
      }));
  }
  function m() {
    if (v) throw new Error(Nt(3));
    return u;
  }
  function p(w) {
    if (typeof w != "function") throw new Error(Nt(4));
    if (v) throw new Error(Nt(5));
    let _ = !0;
    h();
    const M = s++;
    return (
      f.set(M, w),
      function () {
        if (_) {
          if (v) throw new Error(Nt(6));
          ((_ = !1), h(), f.delete(M), (o = null));
        }
      }
    );
  }
  function g(w) {
    if (!dy(w)) throw new Error(Nt(7));
    if (typeof w.type > "u") throw new Error(Nt(8));
    if (typeof w.type != "string") throw new Error(Nt(17));
    if (v) throw new Error(Nt(9));
    try {
      ((v = !0), (u = a(u, w)));
    } finally {
      v = !1;
    }
    return (
      (o = f).forEach((M) => {
        M();
      }),
      w
    );
  }
  function b(w) {
    if (typeof w != "function") throw new Error(Nt(10));
    ((a = w), g({ type: $c.REPLACE }));
  }
  function O() {
    const w = p;
    return {
      subscribe(_) {
        if (typeof _ != "object" || _ === null) throw new Error(Nt(11));
        function M() {
          const N = _;
          N.next && N.next(m());
        }
        return (M(), { unsubscribe: w(M) });
      },
      [Zx]() {
        return this;
      },
    };
  }
  return (
    g({ type: $c.INIT }),
    { dispatch: g, subscribe: p, getState: m, replaceReducer: b, [Zx]: O }
  );
}
function EP(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, { type: $c.INIT }) > "u") throw new Error(Nt(12));
    if (typeof r(void 0, { type: $c.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Nt(13));
  });
}
function zw(e) {
  const t = Object.keys(e),
    r = {};
  for (let o = 0; o < t.length; o++) {
    const f = t[o];
    typeof e[f] == "function" && (r[f] = e[f]);
  }
  const a = Object.keys(r);
  let u;
  try {
    EP(r);
  } catch (o) {
    u = o;
  }
  return function (f = {}, s) {
    if (u) throw u;
    let v = !1;
    const h = {};
    for (let m = 0; m < a.length; m++) {
      const p = a[m],
        g = r[p],
        b = f[p],
        O = g(b, s);
      if (typeof O > "u") throw (s && s.type, new Error(Nt(14)));
      ((h[p] = O), (v = v || O !== b));
    }
    return ((v = v || a.length !== Object.keys(f).length), v ? h : f);
  };
}
function qc(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...a) =>
              t(r(...a)),
        );
}
function _P(...e) {
  return (t) => (r, a) => {
    const u = t(r, a);
    let o = () => {
      throw new Error(Nt(15));
    };
    const f = { getState: u.getState, dispatch: (v, ...h) => o(v, ...h) },
      s = e.map((v) => v(f));
    return ((o = qc(...s)(u.dispatch)), { ...u, dispatch: o });
  };
}
function Rw(e) {
  return dy(e) && "type" in e && typeof e.type == "string";
}
var kw = Symbol.for("immer-nothing"),
  Qx = Symbol.for("immer-draftable"),
  xn = Symbol.for("immer-state");
function Gn(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Ji = Object.getPrototypeOf;
function Ja(e) {
  return !!e && !!e[xn];
}
function Dr(e) {
  return e
    ? Lw(e) ||
        Array.isArray(e) ||
        !!e[Qx] ||
        !!e.constructor?.[Qx] ||
        Ru(e) ||
        Tf(e)
    : !1;
}
var TP = Object.prototype.constructor.toString();
function Lw(e) {
  if (!e || typeof e != "object") return !1;
  const t = Ji(e);
  if (t === null) return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object
    ? !0
    : typeof r == "function" && Function.toString.call(r) === TP;
}
function Hc(e, t) {
  _f(e) === 0
    ? Reflect.ownKeys(e).forEach((r) => {
        t(r, e[r], e);
      })
    : e.forEach((r, a) => t(a, r, e));
}
function _f(e) {
  const t = e[xn];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ru(e) ? 2 : Tf(e) ? 3 : 0;
}
function dm(e, t) {
  return _f(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Bw(e, t, r) {
  const a = _f(e);
  a === 2 ? e.set(t, r) : a === 3 ? e.add(r) : (e[t] = r);
}
function MP(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ru(e) {
  return e instanceof Map;
}
function Tf(e) {
  return e instanceof Set;
}
function Ya(e) {
  return e.copy_ || e.base_;
}
function vm(e, t) {
  if (Ru(e)) return new Map(e);
  if (Tf(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const r = Lw(e);
  if (t === !0 || (t === "class_only" && !r)) {
    const a = Object.getOwnPropertyDescriptors(e);
    delete a[xn];
    let u = Reflect.ownKeys(a);
    for (let o = 0; o < u.length; o++) {
      const f = u[o],
        s = a[f];
      (s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (a[f] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[f],
          }));
    }
    return Object.create(Ji(e), a);
  } else {
    const a = Ji(e);
    if (a !== null && r) return { ...e };
    const u = Object.create(a);
    return Object.assign(u, e);
  }
}
function vy(e, t = !1) {
  return (
    Mf(e) ||
      Ja(e) ||
      !Dr(e) ||
      (_f(e) > 1 &&
        Object.defineProperties(e, {
          set: { value: yc },
          add: { value: yc },
          clear: { value: yc },
          delete: { value: yc },
        }),
      Object.freeze(e),
      t && Object.values(e).forEach((r) => vy(r, !0))),
    e
  );
}
function yc() {
  Gn(2);
}
function Mf(e) {
  return Object.isFrozen(e);
}
var DP = {};
function ei(e) {
  const t = DP[e];
  return (t || Gn(0, e), t);
}
var wu;
function Uw() {
  return wu;
}
function jP(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Wx(e, t) {
  t &&
    (ei("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function hm(e) {
  (mm(e), e.drafts_.forEach(CP), (e.drafts_ = null));
}
function mm(e) {
  e === wu && (wu = e.parent_);
}
function Fx(e) {
  return (wu = jP(wu, e));
}
function CP(e) {
  const t = e[xn];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Jx(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return (
    e !== void 0 && e !== r
      ? (r[xn].modified_ && (hm(t), Gn(4)),
        Dr(e) && ((e = Yc(t, e)), t.parent_ || Ic(t, e)),
        t.patches_ &&
          ei("Patches").generateReplacementPatches_(
            r[xn].base_,
            e,
            t.patches_,
            t.inversePatches_,
          ))
      : (e = Yc(t, r, [])),
    hm(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== kw ? e : void 0
  );
}
function Yc(e, t, r) {
  if (Mf(t)) return t;
  const a = t[xn];
  if (!a) return (Hc(t, (u, o) => eS(e, a, t, u, o, r)), t);
  if (a.scope_ !== e) return t;
  if (!a.modified_) return (Ic(e, a.base_, !0), a.base_);
  if (!a.finalized_) {
    ((a.finalized_ = !0), a.scope_.unfinalizedDrafts_--);
    const u = a.copy_;
    let o = u,
      f = !1;
    (a.type_ === 3 && ((o = new Set(u)), u.clear(), (f = !0)),
      Hc(o, (s, v) => eS(e, a, u, s, v, r, f)),
      Ic(e, u, !1),
      r &&
        e.patches_ &&
        ei("Patches").generatePatches_(a, r, e.patches_, e.inversePatches_));
  }
  return a.copy_;
}
function eS(e, t, r, a, u, o, f) {
  if (Ja(u)) {
    const s =
        o && t && t.type_ !== 3 && !dm(t.assigned_, a) ? o.concat(a) : void 0,
      v = Yc(e, u, s);
    if ((Bw(r, a, v), Ja(v))) e.canAutoFreeze_ = !1;
    else return;
  } else f && r.add(u);
  if (Dr(u) && !Mf(u)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    (Yc(e, u),
      (!t || !t.scope_.parent_) &&
        typeof a != "symbol" &&
        (Ru(r) ? r.has(a) : Object.prototype.propertyIsEnumerable.call(r, a)) &&
        Ic(e, u));
  }
}
function Ic(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && vy(t, r);
}
function PP(e, t) {
  const r = Array.isArray(e),
    a = {
      type_: r ? 1 : 0,
      scope_: t ? t.scope_ : Uw(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let u = a,
    o = hy;
  r && ((u = [a]), (o = Eu));
  const { revoke: f, proxy: s } = Proxy.revocable(u, o);
  return ((a.draft_ = s), (a.revoke_ = f), s);
}
var hy = {
    get(e, t) {
      if (t === xn) return e;
      const r = Ya(e);
      if (!dm(r, t)) return NP(e, r, t);
      const a = r[t];
      return e.finalized_ || !Dr(a)
        ? a
        : a === Eh(e.base_, t)
          ? (_h(e), (e.copy_[t] = pm(a, e)))
          : a;
    },
    has(e, t) {
      return t in Ya(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Ya(e));
    },
    set(e, t, r) {
      const a = $w(Ya(e), t);
      if (a?.set) return (a.set.call(e.draft_, r), !0);
      if (!e.modified_) {
        const u = Eh(Ya(e), t),
          o = u?.[xn];
        if (o && o.base_ === r)
          return ((e.copy_[t] = r), (e.assigned_[t] = !1), !0);
        if (MP(r, u) && (r !== void 0 || dm(e.base_, t))) return !0;
        (_h(e), ym(e));
      }
      return (
        (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
          (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = r), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        Eh(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), _h(e), ym(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const r = Ya(e),
        a = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        a && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: a.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty() {
      Gn(11);
    },
    getPrototypeOf(e) {
      return Ji(e.base_);
    },
    setPrototypeOf() {
      Gn(12);
    },
  },
  Eu = {};
Hc(hy, (e, t) => {
  Eu[e] = function () {
    return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
  };
});
Eu.deleteProperty = function (e, t) {
  return Eu.set.call(this, e, t, void 0);
};
Eu.set = function (e, t, r) {
  return hy.set.call(this, e[0], t, r, e[0]);
};
function Eh(e, t) {
  const r = e[xn];
  return (r ? Ya(r) : e)[t];
}
function NP(e, t, r) {
  const a = $w(t, r);
  return a ? ("value" in a ? a.value : a.get?.call(e.draft_)) : void 0;
}
function $w(e, t) {
  if (!(t in e)) return;
  let r = Ji(e);
  for (; r; ) {
    const a = Object.getOwnPropertyDescriptor(r, t);
    if (a) return a;
    r = Ji(r);
  }
}
function ym(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && ym(e.parent_));
}
function _h(e) {
  e.copy_ || (e.copy_ = vm(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var zP = class {
  constructor(e) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, r, a) => {
        if (typeof t == "function" && typeof r != "function") {
          const o = r;
          r = t;
          const f = this;
          return function (v = o, ...h) {
            return f.produce(v, (m) => r.call(this, m, ...h));
          };
        }
        (typeof r != "function" && Gn(6),
          a !== void 0 && typeof a != "function" && Gn(7));
        let u;
        if (Dr(t)) {
          const o = Fx(this),
            f = pm(t, void 0);
          let s = !0;
          try {
            ((u = r(f)), (s = !1));
          } finally {
            s ? hm(o) : mm(o);
          }
          return (Wx(o, a), Jx(u, o));
        } else if (!t || typeof t != "object") {
          if (
            ((u = r(t)),
            u === void 0 && (u = t),
            u === kw && (u = void 0),
            this.autoFreeze_ && vy(u, !0),
            a)
          ) {
            const o = [],
              f = [];
            (ei("Patches").generateReplacementPatches_(t, u, o, f), a(o, f));
          }
          return u;
        } else Gn(1, t);
      }),
      (this.produceWithPatches = (t, r) => {
        if (typeof t == "function")
          return (f, ...s) => this.produceWithPatches(f, (v) => t(v, ...s));
        let a, u;
        return [
          this.produce(t, r, (f, s) => {
            ((a = f), (u = s));
          }),
          a,
          u,
        ];
      }),
      typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze),
      typeof e?.useStrictShallowCopy == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy));
  }
  createDraft(e) {
    (Dr(e) || Gn(8), Ja(e) && (e = Tr(e)));
    const t = Fx(this),
      r = pm(e, void 0);
    return ((r[xn].isManual_ = !0), mm(t), r);
  }
  finishDraft(e, t) {
    const r = e && e[xn];
    (!r || !r.isManual_) && Gn(9);
    const { scope_: a } = r;
    return (Wx(a, t), Jx(void 0, a));
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const u = t[r];
      if (u.path.length === 0 && u.op === "replace") {
        e = u.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const a = ei("Patches").applyPatches_;
    return Ja(e) ? a(e, t) : this.produce(e, (u) => a(u, t));
  }
};
function pm(e, t) {
  const r = Ru(e)
    ? ei("MapSet").proxyMap_(e, t)
    : Tf(e)
      ? ei("MapSet").proxySet_(e, t)
      : PP(e, t);
  return ((t ? t.scope_ : Uw()).drafts_.push(r), r);
}
function Tr(e) {
  return (Ja(e) || Gn(10, e), qw(e));
}
function qw(e) {
  if (!Dr(e) || Mf(e)) return e;
  const t = e[xn];
  let r;
  if (t) {
    if (!t.modified_) return t.base_;
    ((t.finalized_ = !0), (r = vm(e, t.scope_.immer_.useStrictShallowCopy_)));
  } else r = vm(e, !0);
  return (
    Hc(r, (a, u) => {
      Bw(r, a, qw(u));
    }),
    t && (t.finalized_ = !1),
    r
  );
}
var RP = new zP(),
  Hw = RP.produce;
function Yw(e) {
  return ({ dispatch: r, getState: a }) =>
    (u) =>
    (o) =>
      typeof o == "function" ? o(r, a, e) : u(o);
}
var kP = Yw(),
  LP = Yw,
  BP =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? qc
              : qc.apply(null, arguments);
        };
function $n(e, t) {
  function r(...a) {
    if (t) {
      let u = t(...a);
      if (!u) throw new Error(gn(0));
      return {
        type: e,
        payload: u.payload,
        ...("meta" in u && { meta: u.meta }),
        ...("error" in u && { error: u.error }),
      };
    }
    return { type: e, payload: a[0] };
  }
  return (
    (r.toString = () => `${e}`),
    (r.type = e),
    (r.match = (a) => Rw(a) && a.type === e),
    r
  );
}
var Iw = class bu extends Array {
  constructor(...t) {
    (super(...t), Object.setPrototypeOf(this, bu.prototype));
  }
  static get [Symbol.species]() {
    return bu;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new bu(...t[0].concat(this))
      : new bu(...t.concat(this));
  }
};
function tS(e) {
  return Dr(e) ? Hw(e, () => {}) : e;
}
function pc(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function UP(e) {
  return typeof e == "boolean";
}
var $P = () =>
    function (t) {
      const {
        thunk: r = !0,
        immutableCheck: a = !0,
        serializableCheck: u = !0,
        actionCreatorCheck: o = !0,
      } = t ?? {};
      let f = new Iw();
      return (r && (UP(r) ? f.push(kP) : f.push(LP(r.extraArgument))), f);
    },
  qP = "RTK_autoBatch",
  nS = (e) => (t) => {
    setTimeout(t, e);
  },
  HP =
    (e = { type: "raf" }) =>
    (t) =>
    (...r) => {
      const a = t(...r);
      let u = !0,
        o = !1,
        f = !1;
      const s = new Set(),
        v =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : nS(10)
              : e.type === "callback"
                ? e.queueNotification
                : nS(e.timeout),
        h = () => {
          ((f = !1), o && ((o = !1), s.forEach((m) => m())));
        };
      return Object.assign({}, a, {
        subscribe(m) {
          const p = () => u && m(),
            g = a.subscribe(p);
          return (
            s.add(m),
            () => {
              (g(), s.delete(m));
            }
          );
        },
        dispatch(m) {
          try {
            return (
              (u = !m?.meta?.[qP]),
              (o = !u),
              o && (f || ((f = !0), v(h))),
              a.dispatch(m)
            );
          } finally {
            u = !0;
          }
        },
      });
    },
  YP = (e) =>
    function (r) {
      const { autoBatch: a = !0 } = r ?? {};
      let u = new Iw(e);
      return (a && u.push(HP(typeof a == "object" ? a : void 0)), u);
    };
function IP(e) {
  const t = $P(),
    {
      reducer: r = void 0,
      middleware: a,
      devTools: u = !0,
      preloadedState: o = void 0,
      enhancers: f = void 0,
    } = e || {};
  let s;
  if (typeof r == "function") s = r;
  else if (dy(r)) s = zw(r);
  else throw new Error(gn(1));
  let v;
  typeof a == "function" ? (v = a(t)) : (v = t());
  let h = qc;
  u && (h = BP({ trace: !1, ...(typeof u == "object" && u) }));
  const m = _P(...v),
    p = YP(m);
  let g = typeof f == "function" ? f(p) : p();
  const b = h(...g);
  return Nw(s, o, b);
}
function Kw(e) {
  const t = {},
    r = [];
  let a;
  const u = {
    addCase(o, f) {
      const s = typeof o == "string" ? o : o.type;
      if (!s) throw new Error(gn(28));
      if (s in t) throw new Error(gn(29));
      return ((t[s] = f), u);
    },
    addAsyncThunk(o, f) {
      return (
        f.pending && (t[o.pending.type] = f.pending),
        f.rejected && (t[o.rejected.type] = f.rejected),
        f.fulfilled && (t[o.fulfilled.type] = f.fulfilled),
        f.settled && r.push({ matcher: o.settled, reducer: f.settled }),
        u
      );
    },
    addMatcher(o, f) {
      return (r.push({ matcher: o, reducer: f }), u);
    },
    addDefaultCase(o) {
      return ((a = o), u);
    },
  };
  return (e(u), [t, r, a]);
}
function KP(e) {
  return typeof e == "function";
}
function GP(e, t) {
  let [r, a, u] = Kw(t),
    o;
  if (KP(e)) o = () => tS(e());
  else {
    const s = tS(e);
    o = () => s;
  }
  function f(s = o(), v) {
    let h = [
      r[v.type],
      ...a.filter(({ matcher: m }) => m(v)).map(({ reducer: m }) => m),
    ];
    return (
      h.filter((m) => !!m).length === 0 && (h = [u]),
      h.reduce((m, p) => {
        if (p)
          if (Ja(m)) {
            const b = p(m, v);
            return b === void 0 ? m : b;
          } else {
            if (Dr(m)) return Hw(m, (g) => p(g, v));
            {
              const g = p(m, v);
              if (g === void 0) {
                if (m === null) return m;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return g;
            }
          }
        return m;
      }, s)
    );
  }
  return ((f.getInitialState = o), f);
}
var XP = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  VP = (e = 21) => {
    let t = "",
      r = e;
    for (; r--; ) t += XP[(Math.random() * 64) | 0];
    return t;
  },
  ZP = Symbol.for("rtk-slice-createasyncthunk");
function QP(e, t) {
  return `${e}/${t}`;
}
function WP({ creators: e } = {}) {
  const t = e?.asyncThunk?.[ZP];
  return function (a) {
    const { name: u, reducerPath: o = u } = a;
    if (!u) throw new Error(gn(11));
    const f =
        (typeof a.reducers == "function" ? a.reducers(JP()) : a.reducers) || {},
      s = Object.keys(f),
      v = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      h = {
        addCase(T, N) {
          const z = typeof T == "string" ? T : T.type;
          if (!z) throw new Error(gn(12));
          if (z in v.sliceCaseReducersByType) throw new Error(gn(13));
          return ((v.sliceCaseReducersByType[z] = N), h);
        },
        addMatcher(T, N) {
          return (v.sliceMatchers.push({ matcher: T, reducer: N }), h);
        },
        exposeAction(T, N) {
          return ((v.actionCreators[T] = N), h);
        },
        exposeCaseReducer(T, N) {
          return ((v.sliceCaseReducersByName[T] = N), h);
        },
      };
    s.forEach((T) => {
      const N = f[T],
        z = {
          reducerName: T,
          type: QP(u, T),
          createNotation: typeof a.reducers == "function",
        };
      tN(N) ? rN(z, N, h, t) : eN(z, N, h);
    });
    function m() {
      const [T = {}, N = [], z = void 0] =
          typeof a.extraReducers == "function"
            ? Kw(a.extraReducers)
            : [a.extraReducers],
        R = { ...T, ...v.sliceCaseReducersByType };
      return GP(a.initialState, (B) => {
        for (let X in R) B.addCase(X, R[X]);
        for (let X of v.sliceMatchers) B.addMatcher(X.matcher, X.reducer);
        for (let X of N) B.addMatcher(X.matcher, X.reducer);
        z && B.addDefaultCase(z);
      });
    }
    const p = (T) => T,
      g = new Map(),
      b = new WeakMap();
    let O;
    function S(T, N) {
      return (O || (O = m()), O(T, N));
    }
    function w() {
      return (O || (O = m()), O.getInitialState());
    }
    function _(T, N = !1) {
      function z(B) {
        let X = B[T];
        return (typeof X > "u" && N && (X = pc(b, z, w)), X);
      }
      function R(B = p) {
        const X = pc(g, N, () => new WeakMap());
        return pc(X, B, () => {
          const le = {};
          for (const [ae, V] of Object.entries(a.selectors ?? {}))
            le[ae] = FP(V, B, () => pc(b, B, w), N);
          return le;
        });
      }
      return {
        reducerPath: T,
        getSelectors: R,
        get selectors() {
          return R(z);
        },
        selectSlice: z,
      };
    }
    const M = {
      name: u,
      reducer: S,
      actions: v.actionCreators,
      caseReducers: v.sliceCaseReducersByName,
      getInitialState: w,
      ..._(o),
      injectInto(T, { reducerPath: N, ...z } = {}) {
        const R = N ?? o;
        return (
          T.inject({ reducerPath: R, reducer: S }, z),
          { ...M, ..._(R, !0) }
        );
      },
    };
    return M;
  };
}
function FP(e, t, r, a) {
  function u(o, ...f) {
    let s = t(o);
    return (typeof s > "u" && a && (s = r()), e(s, ...f));
  }
  return ((u.unwrapped = e), u);
}
var On = WP();
function JP() {
  function e(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...r) {
              return t(...r);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(t, r) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: r,
        };
      },
      asyncThunk: e,
    }
  );
}
function eN({ type: e, reducerName: t, createNotation: r }, a, u) {
  let o, f;
  if ("reducer" in a) {
    if (r && !nN(a)) throw new Error(gn(17));
    ((o = a.reducer), (f = a.prepare));
  } else o = a;
  u.addCase(e, o)
    .exposeCaseReducer(t, o)
    .exposeAction(t, f ? $n(e, f) : $n(e));
}
function tN(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function nN(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function rN({ type: e, reducerName: t }, r, a, u) {
  if (!u) throw new Error(gn(18));
  const {
      payloadCreator: o,
      fulfilled: f,
      pending: s,
      rejected: v,
      settled: h,
      options: m,
    } = r,
    p = u(e, o, m);
  (a.exposeAction(t, p),
    f && a.addCase(p.fulfilled, f),
    s && a.addCase(p.pending, s),
    v && a.addCase(p.rejected, v),
    h && a.addMatcher(p.settled, h),
    a.exposeCaseReducer(t, {
      fulfilled: f || gc,
      pending: s || gc,
      rejected: v || gc,
      settled: h || gc,
    }));
}
function gc() {}
var aN = "task",
  Gw = "listener",
  Xw = "completed",
  my = "cancelled",
  iN = `task-${my}`,
  lN = `task-${Xw}`,
  gm = `${Gw}-${my}`,
  uN = `${Gw}-${Xw}`,
  Df = class {
    constructor(e) {
      ((this.code = e), (this.message = `${aN} ${my} (reason: ${e})`));
    }
    name = "TaskAbortError";
    message;
  },
  yy = (e, t) => {
    if (typeof e != "function") throw new TypeError(gn(32));
  },
  Kc = () => {},
  Vw = (e, t = Kc) => (e.catch(t), e),
  Zw = (e, t) => (
    e.addEventListener("abort", t, { once: !0 }),
    () => e.removeEventListener("abort", t)
  ),
  Za = (e, t) => {
    const r = e.signal;
    r.aborted ||
      ("reason" in r ||
        Object.defineProperty(r, "reason", {
          enumerable: !0,
          value: t,
          configurable: !0,
          writable: !0,
        }),
      e.abort(t));
  },
  Qa = (e) => {
    if (e.aborted) {
      const { reason: t } = e;
      throw new Df(t);
    }
  };
function Qw(e, t) {
  let r = Kc;
  return new Promise((a, u) => {
    const o = () => u(new Df(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    ((r = Zw(e, o)), t.finally(() => r()).then(a, u));
  }).finally(() => {
    r = Kc;
  });
}
var oN = async (e, t) => {
    try {
      return (await Promise.resolve(), { status: "ok", value: await e() });
    } catch (r) {
      return { status: r instanceof Df ? "cancelled" : "rejected", error: r };
    } finally {
      t?.();
    }
  },
  Gc = (e) => (t) => Vw(Qw(e, t).then((r) => (Qa(e), r))),
  Ww = (e) => {
    const t = Gc(e);
    return (r) => t(new Promise((a) => setTimeout(a, r)));
  },
  { assign: Zi } = Object,
  rS = {},
  jf = "listenerMiddleware",
  cN = (e, t) => {
    const r = (a) => Zw(e, () => Za(a, e.reason));
    return (a, u) => {
      yy(a);
      const o = new AbortController();
      r(o);
      const f = oN(
        async () => {
          (Qa(e), Qa(o.signal));
          const s = await a({
            pause: Gc(o.signal),
            delay: Ww(o.signal),
            signal: o.signal,
          });
          return (Qa(o.signal), s);
        },
        () => Za(o, lN),
      );
      return (
        u?.autoJoin && t.push(f.catch(Kc)),
        {
          result: Gc(e)(f),
          cancel() {
            Za(o, iN);
          },
        }
      );
    };
  },
  fN = (e, t) => {
    const r = async (a, u) => {
      Qa(t);
      let o = () => {};
      const s = [
        new Promise((v, h) => {
          let m = e({
            predicate: a,
            effect: (p, g) => {
              (g.unsubscribe(), v([p, g.getState(), g.getOriginalState()]));
            },
          });
          o = () => {
            (m(), h());
          };
        }),
      ];
      u != null && s.push(new Promise((v) => setTimeout(v, u, null)));
      try {
        const v = await Qw(t, Promise.race(s));
        return (Qa(t), v);
      } finally {
        o();
      }
    };
    return (a, u) => Vw(r(a, u));
  },
  Fw = (e) => {
    let { type: t, actionCreator: r, matcher: a, predicate: u, effect: o } = e;
    if (t) u = $n(t).match;
    else if (r) ((t = r.type), (u = r.match));
    else if (a) u = a;
    else if (!u) throw new Error(gn(21));
    return (yy(o), { predicate: u, type: t, effect: o });
  },
  Jw = Zi(
    (e) => {
      const { type: t, predicate: r, effect: a } = Fw(e);
      return {
        id: VP(),
        effect: a,
        type: t,
        predicate: r,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(gn(22));
        },
      };
    },
    { withTypes: () => Jw },
  ),
  aS = (e, t) => {
    const { type: r, effect: a, predicate: u } = Fw(t);
    return Array.from(e.values()).find(
      (o) =>
        (typeof r == "string" ? o.type === r : o.predicate === u) &&
        o.effect === a,
    );
  },
  bm = (e) => {
    e.pending.forEach((t) => {
      Za(t, gm);
    });
  },
  sN = (e) => () => {
    (e.forEach(bm), e.clear());
  },
  iS = (e, t, r) => {
    try {
      e(t, r);
    } catch (a) {
      setTimeout(() => {
        throw a;
      }, 0);
    }
  },
  eE = Zi($n(`${jf}/add`), { withTypes: () => eE }),
  dN = $n(`${jf}/removeAll`),
  tE = Zi($n(`${jf}/remove`), { withTypes: () => tE }),
  vN = (...e) => {
    console.error(`${jf}/error`, ...e);
  },
  ku = (e = {}) => {
    const t = new Map(),
      { extra: r, onError: a = vN } = e;
    yy(a);
    const u = (m) => (
        (m.unsubscribe = () => t.delete(m.id)),
        t.set(m.id, m),
        (p) => {
          (m.unsubscribe(), p?.cancelActive && bm(m));
        }
      ),
      o = (m) => {
        const p = aS(t, m) ?? Jw(m);
        return u(p);
      };
    Zi(o, { withTypes: () => o });
    const f = (m) => {
      const p = aS(t, m);
      return (p && (p.unsubscribe(), m.cancelActive && bm(p)), !!p);
    };
    Zi(f, { withTypes: () => f });
    const s = async (m, p, g, b) => {
        const O = new AbortController(),
          S = fN(o, O.signal),
          w = [];
        try {
          (m.pending.add(O),
            await Promise.resolve(
              m.effect(
                p,
                Zi({}, g, {
                  getOriginalState: b,
                  condition: (_, M) => S(_, M).then(Boolean),
                  take: S,
                  delay: Ww(O.signal),
                  pause: Gc(O.signal),
                  extra: r,
                  signal: O.signal,
                  fork: cN(O.signal, w),
                  unsubscribe: m.unsubscribe,
                  subscribe: () => {
                    t.set(m.id, m);
                  },
                  cancelActiveListeners: () => {
                    m.pending.forEach((_, M, T) => {
                      _ !== O && (Za(_, gm), T.delete(_));
                    });
                  },
                  cancel: () => {
                    (Za(O, gm), m.pending.delete(O));
                  },
                  throwIfCancelled: () => {
                    Qa(O.signal);
                  },
                }),
              ),
            ));
        } catch (_) {
          _ instanceof Df || iS(a, _, { raisedBy: "effect" });
        } finally {
          (await Promise.all(w), Za(O, uN), m.pending.delete(O));
        }
      },
      v = sN(t);
    return {
      middleware: (m) => (p) => (g) => {
        if (!Rw(g)) return p(g);
        if (eE.match(g)) return o(g.payload);
        if (dN.match(g)) {
          v();
          return;
        }
        if (tE.match(g)) return f(g.payload);
        let b = m.getState();
        const O = () => {
          if (b === rS) throw new Error(gn(23));
          return b;
        };
        let S;
        try {
          if (((S = p(g)), t.size > 0)) {
            const w = m.getState(),
              _ = Array.from(t.values());
            for (const M of _) {
              let T = !1;
              try {
                T = M.predicate(g, w, b);
              } catch (N) {
                ((T = !1), iS(a, N, { raisedBy: "predicate" }));
              }
              T && s(M, g, m, O);
            }
          }
        } finally {
          b = rS;
        }
        return S;
      },
      startListening: o,
      stopListening: f,
      clearListeners: v,
    };
  };
function gn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var hN = {
    layoutType: "horizontal",
    width: 0,
    height: 0,
    margin: { top: 5, right: 5, bottom: 5, left: 5 },
    scale: 1,
  },
  nE = On({
    name: "chartLayout",
    initialState: hN,
    reducers: {
      setLayout(e, t) {
        e.layoutType = t.payload;
      },
      setChartSize(e, t) {
        ((e.width = t.payload.width), (e.height = t.payload.height));
      },
      setMargin(e, t) {
        var r, a, u, o;
        ((e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0),
          (e.margin.right =
            (a = t.payload.right) !== null && a !== void 0 ? a : 0),
          (e.margin.bottom =
            (u = t.payload.bottom) !== null && u !== void 0 ? u : 0),
          (e.margin.left =
            (o = t.payload.left) !== null && o !== void 0 ? o : 0));
      },
      setScale(e, t) {
        e.scale = t.payload;
      },
    },
  }),
  { setMargin: mN, setLayout: yN, setChartSize: pN, setScale: gN } = nE.actions,
  bN = nE.reducer;
function lS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function uS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lS(Object(r), !0).forEach(function (a) {
          xN(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : lS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function xN(e, t, r) {
  return (
    (t = SN(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function SN(e) {
  var t = ON(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ON(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xc = Math.PI / 180,
  AN = (e) => (e * 180) / Math.PI,
  Rt = (e, t, r, a) => ({
    x: e + Math.cos(-Xc * a) * r,
    y: t + Math.sin(-Xc * a) * r,
  }),
  wN = function (t, r) {
    var a =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { top: 0, right: 0, bottom: 0, left: 0 };
    return (
      Math.min(
        Math.abs(t - (a.left || 0) - (a.right || 0)),
        Math.abs(r - (a.top || 0) - (a.bottom || 0)),
      ) / 2
    );
  },
  EN = (e, t) => {
    var { x: r, y: a } = e,
      { x: u, y: o } = t;
    return Math.sqrt((r - u) ** 2 + (a - o) ** 2);
  },
  _N = (e, t) => {
    var { x: r, y: a } = e,
      { cx: u, cy: o } = t,
      f = EN({ x: r, y: a }, { x: u, y: o });
    if (f <= 0) return { radius: f, angle: 0 };
    var s = (r - u) / f,
      v = Math.acos(s);
    return (
      a > o && (v = 2 * Math.PI - v),
      { radius: f, angle: AN(v), angleInRadian: v }
    );
  },
  TN = (e) => {
    var { startAngle: t, endAngle: r } = e,
      a = Math.floor(t / 360),
      u = Math.floor(r / 360),
      o = Math.min(a, u);
    return { startAngle: t - o * 360, endAngle: r - o * 360 };
  },
  MN = (e, t) => {
    var { startAngle: r, endAngle: a } = t,
      u = Math.floor(r / 360),
      o = Math.floor(a / 360),
      f = Math.min(u, o);
    return e + f * 360;
  },
  DN = (e, t) => {
    var { x: r, y: a } = e,
      { radius: u, angle: o } = _N({ x: r, y: a }, t),
      { innerRadius: f, outerRadius: s } = t;
    if (u < f || u > s || u === 0) return null;
    var { startAngle: v, endAngle: h } = TN(t),
      m = o,
      p;
    if (v <= h) {
      for (; m > h; ) m -= 360;
      for (; m < v; ) m += 360;
      p = m >= v && m <= h;
    } else {
      for (; m > v; ) m -= 360;
      for (; m < h; ) m += 360;
      p = m >= h && m <= v;
    }
    return p ? uS(uS({}, t), {}, { radius: u, angle: MN(m, t) }) : null;
  };
function rE(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function oS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? oS(Object(r), !0).forEach(function (a) {
          jN(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : oS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function jN(e, t, r) {
  return (
    (t = CN(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function CN(e) {
  var t = PN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ot(e, t, r) {
  return Fe(e) || Fe(t)
    ? r
    : Ft(t)
      ? Wi(e, t, r)
      : typeof t == "function"
        ? t(e)
        : r;
}
var NN = (e, t, r, a, u) => {
    var o,
      f = -1,
      s = (o = t?.length) !== null && o !== void 0 ? o : 0;
    if (s <= 1 || e == null) return 0;
    if (
      a === "angleAxis" &&
      u != null &&
      Math.abs(Math.abs(u[1] - u[0]) - 360) <= 1e-6
    )
      for (var v = 0; v < s; v++) {
        var h = v > 0 ? r[v - 1].coordinate : r[s - 1].coordinate,
          m = r[v].coordinate,
          p = v >= s - 1 ? r[0].coordinate : r[v + 1].coordinate,
          g = void 0;
        if (Wt(m - h) !== Wt(p - m)) {
          var b = [];
          if (Wt(p - m) === Wt(u[1] - u[0])) {
            g = p;
            var O = m + u[1] - u[0];
            ((b[0] = Math.min(O, (O + h) / 2)),
              (b[1] = Math.max(O, (O + h) / 2)));
          } else {
            g = h;
            var S = p + u[1] - u[0];
            ((b[0] = Math.min(m, (S + m) / 2)),
              (b[1] = Math.max(m, (S + m) / 2)));
          }
          var w = [Math.min(m, (g + m) / 2), Math.max(m, (g + m) / 2)];
          if ((e > w[0] && e <= w[1]) || (e >= b[0] && e <= b[1])) {
            ({ index: f } = r[v]);
            break;
          }
        } else {
          var _ = Math.min(h, p),
            M = Math.max(h, p);
          if (e > (_ + m) / 2 && e <= (M + m) / 2) {
            ({ index: f } = r[v]);
            break;
          }
        }
      }
    else if (t) {
      for (var T = 0; T < s; T++)
        if (
          (T === 0 && e <= (t[T].coordinate + t[T + 1].coordinate) / 2) ||
          (T > 0 &&
            T < s - 1 &&
            e > (t[T].coordinate + t[T - 1].coordinate) / 2 &&
            e <= (t[T].coordinate + t[T + 1].coordinate) / 2) ||
          (T === s - 1 && e > (t[T].coordinate + t[T - 1].coordinate) / 2)
        ) {
          ({ index: f } = t[T]);
          break;
        }
    }
    return f;
  },
  zN = (e, t, r) => {
    if (t && r) {
      var { width: a, height: u } = r,
        { align: o, verticalAlign: f, layout: s } = t;
      if (
        (s === "vertical" || (s === "horizontal" && f === "middle")) &&
        o !== "center" &&
        ye(e[o])
      )
        return Ln(Ln({}, e), {}, { [o]: e[o] + (a || 0) });
      if (
        (s === "horizontal" || (s === "vertical" && o === "center")) &&
        f !== "middle" &&
        ye(e[f])
      )
        return Ln(Ln({}, e), {}, { [f]: e[f] + (u || 0) });
    }
    return e;
  },
  ba = (e, t) =>
    (e === "horizontal" && t === "xAxis") ||
    (e === "vertical" && t === "yAxis") ||
    (e === "centric" && t === "angleAxis") ||
    (e === "radial" && t === "radiusAxis"),
  aE = (e, t, r, a) => {
    if (a) return e.map((s) => s.coordinate);
    var u,
      o,
      f = e.map(
        (s) => (
          s.coordinate === t && (u = !0),
          s.coordinate === r && (o = !0),
          s.coordinate
        ),
      );
    return (u || f.push(t), o || f.push(r), f);
  },
  iE = (e, t, r) => {
    if (!e) return null;
    var {
      duplicateDomain: a,
      type: u,
      range: o,
      scale: f,
      realScaleType: s,
      isCategorical: v,
      categoricalDomain: h,
      tickCount: m,
      ticks: p,
      niceTicks: g,
      axisType: b,
    } = e;
    if (!f) return null;
    var O = s === "scaleBand" && f.bandwidth ? f.bandwidth() / 2 : 2,
      S = u === "category" && f.bandwidth ? f.bandwidth() / O : 0;
    if (
      ((S =
        b === "angleAxis" && o && o.length >= 2 ? Wt(o[0] - o[1]) * 2 * S : S),
      p || g)
    ) {
      var w = (p || g || []).map((_, M) => {
        var T = a ? a.indexOf(_) : _;
        return { coordinate: f(T) + S, value: _, offset: S, index: M };
      });
      return w.filter((_) => !bn(_.coordinate));
    }
    return v && h
      ? h.map((_, M) => ({
          coordinate: f(_) + S,
          value: _,
          index: M,
          offset: S,
        }))
      : f.ticks && m != null
        ? f
            .ticks(m)
            .map((_, M) => ({
              coordinate: f(_) + S,
              value: _,
              offset: S,
              index: M,
            }))
        : f
            .domain()
            .map((_, M) => ({
              coordinate: f(_) + S,
              value: a ? a[_] : _,
              index: M,
              offset: S,
            }));
  },
  cS = 1e-4,
  RN = (e) => {
    var t = e.domain();
    if (!(!t || t.length <= 2)) {
      var r = t.length,
        a = e.range(),
        u = Math.min(a[0], a[1]) - cS,
        o = Math.max(a[0], a[1]) + cS,
        f = e(t[0]),
        s = e(t[r - 1]);
      (f < u || f > o || s < u || s > o) && e.domain([t[0], t[r - 1]]);
    }
  },
  kN = (e, t) => {
    if (!t || t.length !== 2 || !ye(t[0]) || !ye(t[1])) return e;
    var r = Math.min(t[0], t[1]),
      a = Math.max(t[0], t[1]),
      u = [e[0], e[1]];
    return (
      (!ye(e[0]) || e[0] < r) && (u[0] = r),
      (!ye(e[1]) || e[1] > a) && (u[1] = a),
      u[0] > a && (u[0] = a),
      u[1] < r && (u[1] = r),
      u
    );
  },
  LN = (e) => {
    var t = e.length;
    if (!(t <= 0))
      for (var r = 0, a = e[0].length; r < a; ++r)
        for (var u = 0, o = 0, f = 0; f < t; ++f) {
          var s = bn(e[f][r][1]) ? e[f][r][0] : e[f][r][1];
          s >= 0
            ? ((e[f][r][0] = u), (e[f][r][1] = u + s), (u = e[f][r][1]))
            : ((e[f][r][0] = o), (e[f][r][1] = o + s), (o = e[f][r][1]));
        }
  },
  BN = (e) => {
    var t = e.length;
    if (!(t <= 0))
      for (var r = 0, a = e[0].length; r < a; ++r)
        for (var u = 0, o = 0; o < t; ++o) {
          var f = bn(e[o][r][1]) ? e[o][r][0] : e[o][r][1];
          f >= 0
            ? ((e[o][r][0] = u), (e[o][r][1] = u + f), (u = e[o][r][1]))
            : ((e[o][r][0] = 0), (e[o][r][1] = 0));
        }
  },
  UN = {
    sign: LN,
    expand: vC,
    none: Fi,
    silhouette: hC,
    wiggle: mC,
    positive: BN,
  },
  $N = (e, t, r) => {
    var a = UN[r],
      u = dC()
        .keys(t)
        .value((o, f) => +Ot(o, f, 0))
        .order(cm)
        .offset(a);
    return u(e);
  };
function qN(e) {
  return e == null ? void 0 : String(e);
}
function fS(e) {
  var { axis: t, ticks: r, bandSize: a, entry: u, index: o, dataKey: f } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Fe(u[t.dataKey])) {
      var s = QA(r, "value", u[t.dataKey]);
      if (s) return s.coordinate + a / 2;
    }
    return r[o] ? r[o].coordinate + a / 2 : null;
  }
  var v = Ot(u, Fe(f) ? t.dataKey : f);
  return Fe(v) ? null : t.scale(v);
}
var sS = (e) => {
    var { axis: t, ticks: r, offset: a, bandSize: u, entry: o, index: f } = e;
    if (t.type === "category") return r[f] ? r[f].coordinate + a : null;
    var s = Ot(o, t.dataKey, t.scale.domain()[f]);
    return Fe(s) ? null : t.scale(s) - u / 2 + a;
  },
  HN = (e) => {
    var { numericAxis: t } = e,
      r = t.scale.domain();
    if (t.type === "number") {
      var a = Math.min(r[0], r[1]),
        u = Math.max(r[0], r[1]);
      return a <= 0 && u >= 0 ? 0 : u < 0 ? u : a;
    }
    return r[0];
  },
  YN = (e) => {
    var t = e.flat(2).filter(ye);
    return [Math.min(...t), Math.max(...t)];
  },
  IN = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]],
  KN = (e, t, r) => {
    if (e != null)
      return IN(
        Object.keys(e).reduce(
          (a, u) => {
            var o = e[u],
              { stackedData: f } = o,
              s = f.reduce(
                (v, h) => {
                  var m = rE(h, t, r),
                    p = YN(m);
                  return [Math.min(v[0], p[0]), Math.max(v[1], p[1])];
                },
                [1 / 0, -1 / 0],
              );
            return [Math.min(s[0], a[0]), Math.max(s[1], a[1])];
          },
          [1 / 0, -1 / 0],
        ),
      );
  },
  dS = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  vS = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  _u = (e, t, r) => {
    if (e && e.scale && e.scale.bandwidth) {
      var a = e.scale.bandwidth();
      if (!r || a > 0) return a;
    }
    if (e && t && t.length >= 2) {
      for (
        var u = Ef(t, (m) => m.coordinate), o = 1 / 0, f = 1, s = u.length;
        f < s;
        f++
      ) {
        var v = u[f],
          h = u[f - 1];
        o = Math.min((v.coordinate || 0) - (h.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return r ? void 0 : 0;
  };
function hS(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: a,
    value: u,
    name: o,
  } = e;
  return Ln(Ln({}, t), {}, { dataKey: r, payload: a, value: u, name: o });
}
function Cf(e, t) {
  if (e) return String(e);
  if (typeof t == "string") return t;
}
function GN(e, t, r, a, u) {
  if (r === "horizontal" || r === "vertical") {
    var o =
      e >= u.left &&
      e <= u.left + u.width &&
      t >= u.top &&
      t <= u.top + u.height;
    return o ? { x: e, y: t } : null;
  }
  return a ? DN({ x: e, y: t }, a) : null;
}
var XN = (e, t, r, a) => {
    var u = t.find((h) => h && h.index === r);
    if (u) {
      if (e === "horizontal") return { x: u.coordinate, y: a.y };
      if (e === "vertical") return { x: a.x, y: u.coordinate };
      if (e === "centric") {
        var o = u.coordinate,
          { radius: f } = a;
        return Ln(
          Ln(Ln({}, a), Rt(a.cx, a.cy, f, o)),
          {},
          { angle: o, radius: f },
        );
      }
      var s = u.coordinate,
        { angle: v } = a;
      return Ln(
        Ln(Ln({}, a), Rt(a.cx, a.cy, s, v)),
        {},
        { angle: v, radius: s },
      );
    }
    return { x: 0, y: 0 };
  },
  VN = (e, t) =>
    t === "horizontal"
      ? e.x
      : t === "vertical"
        ? e.y
        : t === "centric"
          ? e.angle
          : e.radius,
  Nr = (e) => e.layout.width,
  zr = (e) => e.layout.height,
  ZN = (e) => e.layout.scale,
  lE = (e) => e.layout.margin,
  Pf = K(
    (e) => e.cartesianAxis.xAxis,
    (e) => Object.values(e),
  ),
  Nf = K(
    (e) => e.cartesianAxis.yAxis,
    (e) => Object.values(e),
  ),
  QN = "data-recharts-item-index",
  WN = "data-recharts-item-data-key",
  Lu = 60;
function mS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function bc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mS(Object(r), !0).forEach(function (a) {
          FN(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function FN(e, t, r) {
  return (
    (t = JN(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function JN(e) {
  var t = e3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var t3 = (e) => e.brush.height;
function n3(e) {
  var t = Nf(e);
  return t.reduce((r, a) => {
    if (a.orientation === "left" && !a.mirror && !a.hide) {
      var u = typeof a.width == "number" ? a.width : Lu;
      return r + u;
    }
    return r;
  }, 0);
}
function r3(e) {
  var t = Nf(e);
  return t.reduce((r, a) => {
    if (a.orientation === "right" && !a.mirror && !a.hide) {
      var u = typeof a.width == "number" ? a.width : Lu;
      return r + u;
    }
    return r;
  }, 0);
}
function a3(e) {
  var t = Pf(e);
  return t.reduce(
    (r, a) =>
      a.orientation === "top" && !a.mirror && !a.hide ? r + a.height : r,
    0,
  );
}
function i3(e) {
  var t = Pf(e);
  return t.reduce(
    (r, a) =>
      a.orientation === "bottom" && !a.mirror && !a.hide ? r + a.height : r,
    0,
  );
}
var At = K(
    [Nr, zr, lE, t3, n3, r3, a3, i3, Cw, bP],
    (e, t, r, a, u, o, f, s, v, h) => {
      var m = { left: (r.left || 0) + u, right: (r.right || 0) + o },
        p = { top: (r.top || 0) + f, bottom: (r.bottom || 0) + s },
        g = bc(bc({}, p), m),
        b = g.bottom;
      ((g.bottom += a), (g = zN(g, v, h)));
      var O = e - g.left - g.right,
        S = t - g.top - g.bottom;
      return bc(
        bc({ brushBottom: b }, g),
        {},
        { width: Math.max(O, 0), height: Math.max(S, 0) },
      );
    },
  ),
  l3 = K(At, (e) => ({
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height,
  })),
  py = K(Nr, zr, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
  u3 = A.createContext(null),
  Ht = () => A.useContext(u3) != null,
  zf = (e) => e.brush,
  Rf = K([zf, At, lE], (e, t, r) => ({
    height: e.height,
    x: ye(e.x) ? e.x : t.left,
    y: ye(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
    width: ye(e.width) ? e.width : t.width,
  })),
  gy = () => {
    var e,
      t = Ht(),
      r = ve(l3),
      a = ve(Rf),
      u = (e = ve(zf)) === null || e === void 0 ? void 0 : e.padding;
    return !t || !a || !u
      ? r
      : {
          width: a.width - u.left - u.right,
          height: a.height - u.top - u.bottom,
          x: u.left,
          y: u.top,
        };
  },
  o3 = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0,
  },
  uE = () => {
    var e;
    return (e = ve(At)) !== null && e !== void 0 ? e : o3;
  },
  by = () => ve(Nr),
  xy = () => ve(zr),
  c3 = () => ve((e) => e.layout.margin),
  Re = (e) => e.layout.layoutType,
  kf = () => ve(Re),
  f3 = {
    settings: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      itemSorter: "value",
    },
    size: { width: 0, height: 0 },
    payload: [],
  },
  oE = On({
    name: "legend",
    initialState: f3,
    reducers: {
      setLegendSize(e, t) {
        ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
      },
      setLegendSettings(e, t) {
        ((e.settings.align = t.payload.align),
          (e.settings.layout = t.payload.layout),
          (e.settings.verticalAlign = t.payload.verticalAlign),
          (e.settings.itemSorter = t.payload.itemSorter));
      },
      addLegendPayload(e, t) {
        e.payload.push(t.payload);
      },
      removeLegendPayload(e, t) {
        var r = Tr(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
    },
  }),
  {
    setLegendSize: yS,
    setLegendSettings: s3,
    addLegendPayload: d3,
    removeLegendPayload: v3,
  } = oE.actions,
  h3 = oE.reducer,
  m3 = ["contextPayload"];
function xm() {
  return (
    (xm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    xm.apply(null, arguments)
  );
}
function pS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pS(Object(r), !0).forEach(function (a) {
          Sy(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function Sy(e, t, r) {
  return (
    (t = y3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function y3(e) {
  var t = p3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function p3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g3(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = b3(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function b3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function x3(e) {
  return e.value;
}
function S3(e) {
  var { contextPayload: t } = e,
    r = g3(e, m3),
    a = Tw(t, e.payloadUniqBy, x3),
    u = el(el({}, r), {}, { payload: a });
  return A.isValidElement(e.content)
    ? A.cloneElement(e.content, u)
    : typeof e.content == "function"
      ? A.createElement(e.content, u)
      : A.createElement(oy, u);
}
function O3(e, t, r, a, u, o) {
  var { layout: f, align: s, verticalAlign: v } = t,
    h,
    m;
  return (
    (!e ||
      ((e.left === void 0 || e.left === null) &&
        (e.right === void 0 || e.right === null))) &&
      (s === "center" && f === "vertical"
        ? (h = { left: ((a || 0) - o.width) / 2 })
        : (h =
            s === "right"
              ? { right: (r && r.right) || 0 }
              : { left: (r && r.left) || 0 })),
    (!e ||
      ((e.top === void 0 || e.top === null) &&
        (e.bottom === void 0 || e.bottom === null))) &&
      (v === "middle"
        ? (m = { top: ((u || 0) - o.height) / 2 })
        : (m =
            v === "bottom"
              ? { bottom: (r && r.bottom) || 0 }
              : { top: (r && r.top) || 0 })),
    el(el({}, h), m)
  );
}
function A3(e) {
  var t = ut();
  return (
    A.useEffect(() => {
      t(s3(e));
    }, [t, e]),
    null
  );
}
function w3(e) {
  var t = ut();
  return (
    A.useEffect(
      () => (
        t(yS(e)),
        () => {
          t(yS({ width: 0, height: 0 }));
        }
      ),
      [t, e],
    ),
    null
  );
}
function E3(e) {
  var t = OP(),
    r = kj(),
    a = c3(),
    { width: u, height: o, wrapperStyle: f, portal: s } = e,
    [v, h] = Pw([t]),
    m = by(),
    p = xy();
  if (m == null || p == null) return null;
  var g = m - (a.left || 0) - (a.right || 0),
    b = Lf.getWidthOrHeight(e.layout, o, u, g),
    O = s
      ? f
      : el(
          el(
            {
              position: "absolute",
              width: b?.width || u || "auto",
              height: b?.height || o || "auto",
            },
            O3(f, e, a, m, p, v),
          ),
          f,
        ),
    S = s ?? r;
  if (S == null) return null;
  var w = A.createElement(
    "div",
    { className: "recharts-legend-wrapper", style: O, ref: h },
    A.createElement(A3, {
      layout: e.layout,
      align: e.align,
      verticalAlign: e.verticalAlign,
      itemSorter: e.itemSorter,
    }),
    A.createElement(w3, { width: v.width, height: v.height }),
    A.createElement(
      S3,
      xm({}, e, b, {
        margin: a,
        chartWidth: m,
        chartHeight: p,
        contextPayload: t,
      }),
    ),
  );
  return ew.createPortal(w, S);
}
class Lf extends A.PureComponent {
  static getWidthOrHeight(t, r, a, u) {
    return t === "vertical" && ye(r)
      ? { height: r }
      : t === "horizontal"
        ? { width: a || u }
        : null;
  }
  render() {
    return A.createElement(E3, this.props);
  }
}
Sy(Lf, "displayName", "Legend");
Sy(Lf, "defaultProps", {
  align: "center",
  iconSize: 14,
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom",
});
function Sm() {
  return (
    (Sm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Sm.apply(null, arguments)
  );
}
function gS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gS(Object(r), !0).forEach(function (a) {
          _3(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function _3(e, t, r) {
  return (
    (t = T3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function T3(e) {
  var t = M3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function M3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D3(e) {
  return Array.isArray(e) && Ft(e[0]) && Ft(e[1]) ? e.join(" ~ ") : e;
}
var j3 = (e) => {
    var {
        separator: t = " : ",
        contentStyle: r = {},
        itemStyle: a = {},
        labelStyle: u = {},
        payload: o,
        formatter: f,
        itemSorter: s,
        wrapperClassName: v,
        labelClassName: h,
        label: m,
        labelFormatter: p,
        accessibilityLayer: g = !1,
      } = e,
      b = () => {
        if (o && o.length) {
          var z = { padding: 0, margin: 0 },
            R = (s ? Ef(o, s) : o).map((B, X) => {
              if (B.type === "none") return null;
              var le = B.formatter || f || D3,
                { value: ae, name: V } = B,
                ne = ae,
                se = V;
              if (le) {
                var F = le(ae, V, B, X, o);
                if (Array.isArray(F)) [ne, se] = F;
                else if (F != null) ne = F;
                else return null;
              }
              var W = Th(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: B.color || "#000",
                },
                a,
              );
              return A.createElement(
                "li",
                {
                  className: "recharts-tooltip-item",
                  key: "tooltip-item-".concat(X),
                  style: W,
                },
                Ft(se)
                  ? A.createElement(
                      "span",
                      { className: "recharts-tooltip-item-name" },
                      se,
                    )
                  : null,
                Ft(se)
                  ? A.createElement(
                      "span",
                      { className: "recharts-tooltip-item-separator" },
                      t,
                    )
                  : null,
                A.createElement(
                  "span",
                  { className: "recharts-tooltip-item-value" },
                  ne,
                ),
                A.createElement(
                  "span",
                  { className: "recharts-tooltip-item-unit" },
                  B.unit || "",
                ),
              );
            });
          return A.createElement(
            "ul",
            { className: "recharts-tooltip-item-list", style: z },
            R,
          );
        }
        return null;
      },
      O = Th(
        {
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap",
        },
        r,
      ),
      S = Th({ margin: 0 }, u),
      w = !Fe(m),
      _ = w ? m : "",
      M = ke("recharts-default-tooltip", v),
      T = ke("recharts-tooltip-label", h);
    w && p && o !== void 0 && o !== null && (_ = p(m, o));
    var N = g ? { role: "status", "aria-live": "assertive" } : {};
    return A.createElement(
      "div",
      Sm({ className: M, style: O }, N),
      A.createElement(
        "p",
        { className: T, style: S },
        A.isValidElement(_) ? _ : "".concat(_),
      ),
      b(),
    );
  },
  cu = "recharts-tooltip-wrapper",
  C3 = { visibility: "hidden" };
function P3(e) {
  var { coordinate: t, translateX: r, translateY: a } = e;
  return ke(cu, {
    ["".concat(cu, "-right")]: ye(r) && t && ye(t.x) && r >= t.x,
    ["".concat(cu, "-left")]: ye(r) && t && ye(t.x) && r < t.x,
    ["".concat(cu, "-bottom")]: ye(a) && t && ye(t.y) && a >= t.y,
    ["".concat(cu, "-top")]: ye(a) && t && ye(t.y) && a < t.y,
  });
}
function bS(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: a,
    offsetTopLeft: u,
    position: o,
    reverseDirection: f,
    tooltipDimension: s,
    viewBox: v,
    viewBoxDimension: h,
  } = e;
  if (o && ye(o[a])) return o[a];
  var m = r[a] - s - (u > 0 ? u : 0),
    p = r[a] + u;
  if (t[a]) return f[a] ? m : p;
  var g = v[a];
  if (g == null) return 0;
  if (f[a]) {
    var b = m,
      O = g;
    return b < O ? Math.max(p, g) : Math.max(m, g);
  }
  if (h == null) return 0;
  var S = p + s,
    w = g + h;
  return S > w ? Math.max(m, g) : Math.max(p, g);
}
function N3(e) {
  var { translateX: t, translateY: r, useTranslate3d: a } = e;
  return {
    transform: a
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function z3(e) {
  var {
      allowEscapeViewBox: t,
      coordinate: r,
      offsetTopLeft: a,
      position: u,
      reverseDirection: o,
      tooltipBox: f,
      useTranslate3d: s,
      viewBox: v,
    } = e,
    h,
    m,
    p;
  return (
    f.height > 0 && f.width > 0 && r
      ? ((m = bS({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: a,
          position: u,
          reverseDirection: o,
          tooltipDimension: f.width,
          viewBox: v,
          viewBoxDimension: v.width,
        })),
        (p = bS({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: a,
          position: u,
          reverseDirection: o,
          tooltipDimension: f.height,
          viewBox: v,
          viewBoxDimension: v.height,
        })),
        (h = N3({ translateX: m, translateY: p, useTranslate3d: s })))
      : (h = C3),
    {
      cssProperties: h,
      cssClasses: P3({ translateX: m, translateY: p, coordinate: r }),
    }
  );
}
function xS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xS(Object(r), !0).forEach(function (a) {
          Om(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function Om(e, t, r) {
  return (
    (t = R3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function R3(e) {
  var t = k3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function k3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class L3 extends A.PureComponent {
  constructor() {
    (super(...arguments),
      Om(this, "state", {
        dismissed: !1,
        dismissedAtCoordinate: { x: 0, y: 0 },
      }),
      Om(this, "handleKeyDown", (t) => {
        if (t.key === "Escape") {
          var r, a, u, o;
          this.setState({
            dismissed: !0,
            dismissedAtCoordinate: {
              x:
                (r =
                  (a = this.props.coordinate) === null || a === void 0
                    ? void 0
                    : a.x) !== null && r !== void 0
                  ? r
                  : 0,
              y:
                (u =
                  (o = this.props.coordinate) === null || o === void 0
                    ? void 0
                    : o.y) !== null && u !== void 0
                  ? u
                  : 0,
            },
          });
        }
      }));
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed &&
      (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !==
        this.state.dismissedAtCoordinate.x ||
        ((r = this.props.coordinate) === null || r === void 0
          ? void 0
          : r.y) !== this.state.dismissedAtCoordinate.y) &&
      (this.state.dismissed = !1);
  }
  render() {
    var {
        active: t,
        allowEscapeViewBox: r,
        animationDuration: a,
        animationEasing: u,
        children: o,
        coordinate: f,
        hasPayload: s,
        isAnimationActive: v,
        offset: h,
        position: m,
        reverseDirection: p,
        useTranslate3d: g,
        viewBox: b,
        wrapperStyle: O,
        lastBoundingBox: S,
        innerRef: w,
        hasPortalFromProps: _,
      } = this.props,
      { cssClasses: M, cssProperties: T } = z3({
        allowEscapeViewBox: r,
        coordinate: f,
        offsetTopLeft: h,
        position: m,
        reverseDirection: p,
        tooltipBox: { height: S.height, width: S.width },
        useTranslate3d: g,
        viewBox: b,
      }),
      N = _
        ? {}
        : xc(
            xc(
              {
                transition:
                  v && t ? "transform ".concat(a, "ms ").concat(u) : void 0,
              },
              T,
            ),
            {},
            {
              pointerEvents: "none",
              visibility:
                !this.state.dismissed && t && s ? "visible" : "hidden",
              position: "absolute",
              top: 0,
              left: 0,
            },
          ),
      z = xc(
        xc({}, N),
        {},
        { visibility: !this.state.dismissed && t && s ? "visible" : "hidden" },
        O,
      );
    return A.createElement(
      "div",
      {
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: M,
        style: z,
        ref: w,
      },
      o,
    );
  }
}
var B3 = () =>
    !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    ),
  ii = { devToolsEnabled: !1, isSsr: B3() },
  cE = () => ve((e) => e.rootProps.accessibilityLayer);
function Sn(e) {
  return Number.isFinite(e);
}
function Vc(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function Am() {
  return (
    (Am = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Am.apply(null, arguments)
  );
}
function SS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function OS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? SS(Object(r), !0).forEach(function (a) {
          U3(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : SS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function U3(e, t, r) {
  return (
    (t = $3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $3(e) {
  var t = q3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var AS = {
    curveBasisClosed: tC,
    curveBasisOpen: nC,
    curveBasis: eC,
    curveBumpX: $j,
    curveBumpY: qj,
    curveLinearClosed: rC,
    curveLinear: Af,
    curveMonotoneX: aC,
    curveMonotoneY: iC,
    curveNatural: lC,
    curveStep: uC,
    curveStepAfter: cC,
    curveStepBefore: oC,
  },
  Sc = (e) => Sn(e.x) && Sn(e.y),
  fu = (e) => e.x,
  su = (e) => e.y,
  H3 = (e, t) => {
    if (typeof e == "function") return e;
    var r = "curve".concat(zu(e));
    return (r === "curveMonotone" || r === "curveBump") && t
      ? AS["".concat(r).concat(t === "vertical" ? "Y" : "X")]
      : AS[r] || Af;
  },
  Y3 = (e) => {
    var {
        type: t = "linear",
        points: r = [],
        baseLine: a,
        layout: u,
        connectNulls: o = !1,
      } = e,
      f = H3(t, u),
      s = o ? r.filter(Sc) : r,
      v;
    if (Array.isArray(a)) {
      var h = o ? a.filter((p) => Sc(p)) : a,
        m = s.map((p, g) => OS(OS({}, p), {}, { base: h[g] }));
      return (
        u === "vertical"
          ? (v = vc()
              .y(su)
              .x1(fu)
              .x0((p) => p.base.x))
          : (v = vc()
              .x(fu)
              .y1(su)
              .y0((p) => p.base.y)),
        v.defined(Sc).curve(f),
        v(m)
      );
    }
    return (
      u === "vertical" && ye(a)
        ? (v = vc().y(su).x1(fu).x0(a))
        : ye(a)
          ? (v = vc().x(fu).y1(su).y0(a))
          : (v = uw().x(fu).y(su)),
      v.defined(Sc).curve(f),
      v(s)
    );
  },
  fE = (e) => {
    var { className: t, points: r, path: a, pathRef: u } = e;
    if ((!r || !r.length) && !a) return null;
    var o = r && r.length ? Y3(e) : a;
    return A.createElement(
      "path",
      Am({}, ga(e), ty(e), {
        className: ke("recharts-curve", t),
        d: o === null ? void 0 : o,
        ref: u,
      }),
    );
  },
  I3 = ["x", "y", "top", "left", "width", "height", "className"];
function wm() {
  return (
    (wm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    wm.apply(null, arguments)
  );
}
function wS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function K3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wS(Object(r), !0).forEach(function (a) {
          G3(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : wS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function G3(e, t, r) {
  return (
    (t = X3(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function X3(e) {
  var t = V3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Z3(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = Q3(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function Q3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var W3 = (e, t, r, a, u, o) =>
    "M"
      .concat(e, ",")
      .concat(u, "v")
      .concat(a, "M")
      .concat(o, ",")
      .concat(t, "h")
      .concat(r),
  F3 = (e) => {
    var {
        x: t = 0,
        y: r = 0,
        top: a = 0,
        left: u = 0,
        width: o = 0,
        height: f = 0,
        className: s,
      } = e,
      v = Z3(e, I3),
      h = K3({ x: t, y: r, top: a, left: u, width: o, height: f }, v);
    return !ye(t) || !ye(r) || !ye(o) || !ye(f) || !ye(a) || !ye(u)
      ? null
      : A.createElement(
          "path",
          wm({}, rt(h, !0), {
            className: ke("recharts-cross", s),
            d: W3(t, r, o, f, a, u),
          }),
        );
  };
function J3(e, t, r, a) {
  var u = a / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - u : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - u,
    width: e === "horizontal" ? a : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : a,
  };
}
function ES(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function ez(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ES(Object(r), !0).forEach(function (a) {
          tz(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ES(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function tz(e, t, r) {
  return (
    (t = nz(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function nz(e) {
  var t = rz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function en(e, t) {
  var r = ez({}, e),
    a = t,
    u = Object.keys(t),
    o = u.reduce(
      (f, s) => (f[s] === void 0 && a[s] !== void 0 && (f[s] = a[s]), f),
      r,
    );
  return o;
}
function az() {}
function _S(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function TS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _S(Object(r), !0).forEach(function (a) {
          iz(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _S(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function iz(e, t, r) {
  return (
    (t = lz(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function lz(e) {
  var t = uz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var oz = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())),
  sE = (e, t, r) =>
    e.map((a) => "".concat(oz(a), " ").concat(t, "ms ").concat(r)).join(","),
  cz = (e, t) =>
    [Object.keys(e), Object.keys(t)].reduce((r, a) =>
      r.filter((u) => a.includes(u)),
    ),
  Tu = (e, t) =>
    Object.keys(t).reduce((r, a) => TS(TS({}, r), {}, { [a]: e(a, t[a]) }), {});
function MS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? MS(Object(r), !0).forEach(function (a) {
          fz(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : MS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function fz(e, t, r) {
  return (
    (t = sz(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function sz(e) {
  var t = dz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zc = (e, t, r) => e + (t - e) * r,
  Em = (e) => {
    var { from: t, to: r } = e;
    return t !== r;
  },
  dE = (e, t, r) => {
    var a = Tu((u, o) => {
      if (Em(o)) {
        var [f, s] = e(o.from, o.to, o.velocity);
        return zt(zt({}, o), {}, { from: f, velocity: s });
      }
      return o;
    }, t);
    return r < 1
      ? Tu(
          (u, o) =>
            Em(o)
              ? zt(
                  zt({}, o),
                  {},
                  {
                    velocity: Zc(o.velocity, a[u].velocity, r),
                    from: Zc(o.from, a[u].from, r),
                  },
                )
              : o,
          t,
        )
      : dE(e, a, r - 1);
  };
function vz(e, t, r, a, u, o) {
  var f,
    s = a.reduce(
      (g, b) =>
        zt(zt({}, g), {}, { [b]: { from: e[b], velocity: 0, to: t[b] } }),
      {},
    ),
    v = () => Tu((g, b) => b.from, s),
    h = () => !Object.values(s).filter(Em).length,
    m = null,
    p = (g) => {
      f || (f = g);
      var b = g - f,
        O = b / r.dt;
      ((s = dE(r, s, O)),
        u(zt(zt(zt({}, e), t), v())),
        (f = g),
        h() || (m = o.setTimeout(p)));
    };
  return () => (
    (m = o.setTimeout(p)),
    () => {
      m();
    }
  );
}
function hz(e, t, r, a, u, o, f) {
  var s = null,
    v = u.reduce((p, g) => zt(zt({}, p), {}, { [g]: [e[g], t[g]] }), {}),
    h,
    m = (p) => {
      h || (h = p);
      var g = (p - h) / a,
        b = Tu((S, w) => Zc(...w, r(g)), v);
      if ((o(zt(zt(zt({}, e), t), b)), g < 1)) s = f.setTimeout(m);
      else {
        var O = Tu((S, w) => Zc(...w, r(1)), v);
        o(zt(zt(zt({}, e), t), O));
      }
    };
  return () => (
    (s = f.setTimeout(m)),
    () => {
      s();
    }
  );
}
const mz = (e, t, r, a, u, o) => {
  var f = cz(e, t);
  return r.isStepper === !0 ? vz(e, t, r, f, u, o) : hz(e, t, r, a, f, u, o);
};
var Qc = 1e-4,
  vE = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
  hE = (e, t) => e.map((r, a) => r * t ** a).reduce((r, a) => r + a),
  DS = (e, t) => (r) => {
    var a = vE(e, t);
    return hE(a, r);
  },
  yz = (e, t) => (r) => {
    var a = vE(e, t),
      u = [...a.map((o, f) => o * f).slice(1), 0];
    return hE(u, r);
  },
  jS = function () {
    for (
      var t, r, a, u, o = arguments.length, f = new Array(o), s = 0;
      s < o;
      s++
    )
      f[s] = arguments[s];
    if (f.length === 1)
      switch (f[0]) {
        case "linear":
          [t, a, r, u] = [0, 0, 1, 1];
          break;
        case "ease":
          [t, a, r, u] = [0.25, 0.1, 0.25, 1];
          break;
        case "ease-in":
          [t, a, r, u] = [0.42, 0, 1, 1];
          break;
        case "ease-out":
          [t, a, r, u] = [0.42, 0, 0.58, 1];
          break;
        case "ease-in-out":
          [t, a, r, u] = [0, 0, 0.58, 1];
          break;
        default: {
          var v = f[0].split("(");
          v[0] === "cubic-bezier" &&
            v[1].split(")")[0].split(",").length === 4 &&
            ([t, a, r, u] = v[1]
              .split(")")[0]
              .split(",")
              .map((O) => parseFloat(O)));
        }
      }
    else f.length === 4 && ([t, a, r, u] = f);
    var h = DS(t, r),
      m = DS(a, u),
      p = yz(t, r),
      g = (O) => (O > 1 ? 1 : O < 0 ? 0 : O),
      b = (O) => {
        for (var S = O > 1 ? 1 : O, w = S, _ = 0; _ < 8; ++_) {
          var M = h(w) - S,
            T = p(w);
          if (Math.abs(M - S) < Qc || T < Qc) return m(w);
          w = g(w - M / T);
        }
        return m(w);
      };
    return ((b.isStepper = !1), b);
  },
  pz = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { stiff: r = 100, damping: a = 8, dt: u = 17 } = t,
      o = (f, s, v) => {
        var h = -(f - s) * r,
          m = v * a,
          p = v + ((h - m) * u) / 1e3,
          g = (v * u) / 1e3 + f;
        return Math.abs(g - s) < Qc && Math.abs(p) < Qc ? [s, 0] : [g, p];
      };
    return ((o.isStepper = !0), (o.dt = u), o);
  },
  gz = (e) => {
    if (typeof e == "string")
      switch (e) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return jS(e);
        case "spring":
          return pz();
        default:
          if (e.split("(")[0] === "cubic-bezier") return jS(e);
      }
    return typeof e == "function" ? e : null;
  };
function bz(e) {
  var t,
    r = () => null,
    a = !1,
    u = null,
    o = (f) => {
      if (!a) {
        if (Array.isArray(f)) {
          if (!f.length) return;
          var s = f,
            [v, ...h] = s;
          if (typeof v == "number") {
            u = e.setTimeout(o.bind(null, h), v);
            return;
          }
          (o(v), (u = e.setTimeout(o.bind(null, h))));
          return;
        }
        (typeof f == "string" && ((t = f), r(t)),
          typeof f == "object" && ((t = f), r(t)),
          typeof f == "function" && f());
      }
    };
  return {
    stop: () => {
      a = !0;
    },
    start: (f) => {
      ((a = !1), u && (u(), (u = null)), o(f));
    },
    subscribe: (f) => (
      (r = f),
      () => {
        r = () => null;
      }
    ),
    getTimeoutController: () => e,
  };
}
class xz {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = performance.now(),
      u = null,
      o = (f) => {
        f - a >= r
          ? t(f)
          : typeof requestAnimationFrame == "function" &&
            (u = requestAnimationFrame(o));
      };
    return (
      (u = requestAnimationFrame(o)),
      () => {
        cancelAnimationFrame(u);
      }
    );
  }
}
function Sz() {
  return bz(new xz());
}
var Oz = A.createContext(Sz);
function Az(e, t) {
  var r = A.useContext(Oz);
  return A.useMemo(() => t ?? r(e), [e, t, r]);
}
var wz = {
    begin: 0,
    duration: 1e3,
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    onAnimationEnd: () => {},
    onAnimationStart: () => {},
  },
  CS = { t: 0 },
  Mh = { t: 1 };
function Bf(e) {
  var t = en(e, wz),
    {
      isActive: r,
      canBegin: a,
      duration: u,
      easing: o,
      begin: f,
      onAnimationEnd: s,
      onAnimationStart: v,
      children: h,
    } = t,
    m = Az(t.animationId, t.animationManager),
    [p, g] = A.useState(r ? CS : Mh),
    b = A.useRef(null);
  return (
    A.useEffect(() => {
      r || g(Mh);
    }, [r]),
    A.useEffect(() => {
      if (!r || !a) return az;
      var O = mz(CS, Mh, gz(o), u, g, m.getTimeoutController()),
        S = () => {
          b.current = O();
        };
      return (
        m.start([v, f, S, u, s]),
        () => {
          (m.stop(), b.current && b.current(), s());
        }
      );
    }, [r, a, u, o, f, v, s, m]),
    h(p.t)
  );
}
function Uf(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "animation-",
    r = A.useRef(Au(t)),
    a = A.useRef(e);
  return (a.current !== e && ((r.current = Au(t)), (a.current = e)), r.current);
}
function PS(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function NS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? PS(Object(r), !0).forEach(function (a) {
          Ez(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : PS(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function Ez(e, t, r) {
  return (
    (t = _z(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _z(e) {
  var t = Tz(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tz(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wc() {
  return (
    (Wc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Wc.apply(null, arguments)
  );
}
var zS = (e, t, r, a, u) => {
    var o = Math.min(Math.abs(r) / 2, Math.abs(a) / 2),
      f = a >= 0 ? 1 : -1,
      s = r >= 0 ? 1 : -1,
      v = (a >= 0 && r >= 0) || (a < 0 && r < 0) ? 1 : 0,
      h;
    if (o > 0 && u instanceof Array) {
      for (var m = [0, 0, 0, 0], p = 0, g = 4; p < g; p++)
        m[p] = u[p] > o ? o : u[p];
      ((h = "M".concat(e, ",").concat(t + f * m[0])),
        m[0] > 0 &&
          (h += "A "
            .concat(m[0], ",")
            .concat(m[0], ",0,0,")
            .concat(v, ",")
            .concat(e + s * m[0], ",")
            .concat(t)),
        (h += "L ".concat(e + r - s * m[1], ",").concat(t)),
        m[1] > 0 &&
          (h += "A "
            .concat(m[1], ",")
            .concat(m[1], ",0,0,")
            .concat(
              v,
              `,
        `,
            )
            .concat(e + r, ",")
            .concat(t + f * m[1])),
        (h += "L ".concat(e + r, ",").concat(t + a - f * m[2])),
        m[2] > 0 &&
          (h += "A "
            .concat(m[2], ",")
            .concat(m[2], ",0,0,")
            .concat(
              v,
              `,
        `,
            )
            .concat(e + r - s * m[2], ",")
            .concat(t + a)),
        (h += "L ".concat(e + s * m[3], ",").concat(t + a)),
        m[3] > 0 &&
          (h += "A "
            .concat(m[3], ",")
            .concat(m[3], ",0,0,")
            .concat(
              v,
              `,
        `,
            )
            .concat(e, ",")
            .concat(t + a - f * m[3])),
        (h += "Z"));
    } else if (o > 0 && u === +u && u > 0) {
      var b = Math.min(o, u);
      h = "M "
        .concat(e, ",")
        .concat(
          t + f * b,
          `
            A `,
        )
        .concat(b, ",")
        .concat(b, ",0,0,")
        .concat(v, ",")
        .concat(e + s * b, ",")
        .concat(
          t,
          `
            L `,
        )
        .concat(e + r - s * b, ",")
        .concat(
          t,
          `
            A `,
        )
        .concat(b, ",")
        .concat(b, ",0,0,")
        .concat(v, ",")
        .concat(e + r, ",")
        .concat(
          t + f * b,
          `
            L `,
        )
        .concat(e + r, ",")
        .concat(
          t + a - f * b,
          `
            A `,
        )
        .concat(b, ",")
        .concat(b, ",0,0,")
        .concat(v, ",")
        .concat(e + r - s * b, ",")
        .concat(
          t + a,
          `
            L `,
        )
        .concat(e + s * b, ",")
        .concat(
          t + a,
          `
            A `,
        )
        .concat(b, ",")
        .concat(b, ",0,0,")
        .concat(v, ",")
        .concat(e, ",")
        .concat(t + a - f * b, " Z");
    } else
      h = "M "
        .concat(e, ",")
        .concat(t, " h ")
        .concat(r, " v ")
        .concat(a, " h ")
        .concat(-r, " Z");
    return h;
  },
  Mz = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  Oy = (e) => {
    var t = en(e, Mz),
      r = A.useRef(null),
      [a, u] = A.useState(-1);
    A.useEffect(() => {
      if (r.current && r.current.getTotalLength)
        try {
          var F = r.current.getTotalLength();
          F && u(F);
        } catch {}
    }, []);
    var { x: o, y: f, width: s, height: v, radius: h, className: m } = t,
      {
        animationEasing: p,
        animationDuration: g,
        animationBegin: b,
        isAnimationActive: O,
        isUpdateAnimationActive: S,
      } = t,
      w = A.useRef(s),
      _ = A.useRef(v),
      M = A.useRef(o),
      T = A.useRef(f),
      N = A.useMemo(
        () => ({ x: o, y: f, width: s, height: v, radius: h }),
        [o, f, s, v, h],
      ),
      z = Uf(N, "rectangle-");
    if (o !== +o || f !== +f || s !== +s || v !== +v || s === 0 || v === 0)
      return null;
    var R = ke("recharts-rectangle", m);
    if (!S)
      return A.createElement(
        "path",
        Wc({}, rt(t, !0), { className: R, d: zS(o, f, s, v, h) }),
      );
    var B = w.current,
      X = _.current,
      le = M.current,
      ae = T.current,
      V = "0px ".concat(a === -1 ? 1 : a, "px"),
      ne = "".concat(a, "px 0px"),
      se = sE(["strokeDasharray"], g, typeof p == "string" ? p : void 0);
    return A.createElement(
      Bf,
      {
        animationId: z,
        key: z,
        canBegin: a > 0,
        duration: g,
        easing: p,
        isActive: S,
        begin: b,
      },
      (F) => {
        var W = dt(B, s, F),
          C = dt(X, v, F),
          U = dt(le, o, F),
          I = dt(ae, f, F);
        r.current &&
          ((w.current = W), (_.current = C), (M.current = U), (T.current = I));
        var ee;
        return (
          O
            ? F > 0
              ? (ee = { transition: se, strokeDasharray: ne })
              : (ee = { strokeDasharray: V })
            : (ee = { strokeDasharray: ne }),
          A.createElement(
            "path",
            Wc({}, rt(t, !0), {
              className: R,
              d: zS(U, I, W, C, h),
              ref: r,
              style: NS(NS({}, ee), t.style),
            }),
          )
        );
      },
    );
  };
function mE(e) {
  var { cx: t, cy: r, radius: a, startAngle: u, endAngle: o } = e,
    f = Rt(t, r, a, u),
    s = Rt(t, r, a, o);
  return {
    points: [f, s],
    cx: t,
    cy: r,
    radius: a,
    startAngle: u,
    endAngle: o,
  };
}
function _m() {
  return (
    (_m = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    _m.apply(null, arguments)
  );
}
var Dz = (e, t) => {
    var r = Wt(t - e),
      a = Math.min(Math.abs(t - e), 359.999);
    return r * a;
  },
  Oc = (e) => {
    var {
        cx: t,
        cy: r,
        radius: a,
        angle: u,
        sign: o,
        isExternal: f,
        cornerRadius: s,
        cornerIsExternal: v,
      } = e,
      h = s * (f ? 1 : -1) + a,
      m = Math.asin(s / h) / Xc,
      p = v ? u : u + o * m,
      g = Rt(t, r, h, p),
      b = Rt(t, r, a, p),
      O = v ? u - o * m : u,
      S = Rt(t, r, h * Math.cos(m * Xc), O);
    return { center: g, circleTangency: b, lineTangency: S, theta: m };
  },
  yE = (e) => {
    var {
        cx: t,
        cy: r,
        innerRadius: a,
        outerRadius: u,
        startAngle: o,
        endAngle: f,
      } = e,
      s = Dz(o, f),
      v = o + s,
      h = Rt(t, r, u, o),
      m = Rt(t, r, u, v),
      p = "M "
        .concat(h.x, ",")
        .concat(
          h.y,
          `
    A `,
        )
        .concat(u, ",")
        .concat(
          u,
          `,0,
    `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o > v),
          `,
    `,
        )
        .concat(m.x, ",")
        .concat(
          m.y,
          `
  `,
        );
    if (a > 0) {
      var g = Rt(t, r, a, o),
        b = Rt(t, r, a, v);
      p += "L "
        .concat(b.x, ",")
        .concat(
          b.y,
          `
            A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
            `,
        )
        .concat(+(Math.abs(s) > 180), ",")
        .concat(
          +(o <= v),
          `,
            `,
        )
        .concat(g.x, ",")
        .concat(g.y, " Z");
    } else p += "L ".concat(t, ",").concat(r, " Z");
    return p;
  },
  jz = (e) => {
    var {
        cx: t,
        cy: r,
        innerRadius: a,
        outerRadius: u,
        cornerRadius: o,
        forceCornerRadius: f,
        cornerIsExternal: s,
        startAngle: v,
        endAngle: h,
      } = e,
      m = Wt(h - v),
      {
        circleTangency: p,
        lineTangency: g,
        theta: b,
      } = Oc({
        cx: t,
        cy: r,
        radius: u,
        angle: v,
        sign: m,
        cornerRadius: o,
        cornerIsExternal: s,
      }),
      {
        circleTangency: O,
        lineTangency: S,
        theta: w,
      } = Oc({
        cx: t,
        cy: r,
        radius: u,
        angle: h,
        sign: -m,
        cornerRadius: o,
        cornerIsExternal: s,
      }),
      _ = s ? Math.abs(v - h) : Math.abs(v - h) - b - w;
    if (_ < 0)
      return f
        ? "M "
            .concat(g.x, ",")
            .concat(
              g.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : yE({
            cx: t,
            cy: r,
            innerRadius: a,
            outerRadius: u,
            startAngle: v,
            endAngle: h,
          });
    var M = "M "
      .concat(g.x, ",")
      .concat(
        g.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(m < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(u, ",")
      .concat(u, ",0,")
      .concat(+(_ > 180), ",")
      .concat(+(m < 0), ",")
      .concat(O.x, ",")
      .concat(
        O.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(m < 0), ",")
      .concat(S.x, ",")
      .concat(
        S.y,
        `
  `,
      );
    if (a > 0) {
      var {
          circleTangency: T,
          lineTangency: N,
          theta: z,
        } = Oc({
          cx: t,
          cy: r,
          radius: a,
          angle: v,
          sign: m,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        {
          circleTangency: R,
          lineTangency: B,
          theta: X,
        } = Oc({
          cx: t,
          cy: r,
          radius: a,
          angle: h,
          sign: -m,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: s,
        }),
        le = s ? Math.abs(v - h) : Math.abs(v - h) - z - X;
      if (le < 0 && o === 0)
        return "".concat(M, "L").concat(t, ",").concat(r, "Z");
      M += "L"
        .concat(B.x, ",")
        .concat(
          B.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(m < 0), ",")
        .concat(R.x, ",")
        .concat(
          R.y,
          `
      A`,
        )
        .concat(a, ",")
        .concat(a, ",0,")
        .concat(+(le > 180), ",")
        .concat(+(m > 0), ",")
        .concat(T.x, ",")
        .concat(
          T.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(m < 0), ",")
        .concat(N.x, ",")
        .concat(N.y, "Z");
    } else M += "L".concat(t, ",").concat(r, "Z");
    return M;
  },
  Cz = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  pE = (e) => {
    var t = en(e, Cz),
      {
        cx: r,
        cy: a,
        innerRadius: u,
        outerRadius: o,
        cornerRadius: f,
        forceCornerRadius: s,
        cornerIsExternal: v,
        startAngle: h,
        endAngle: m,
        className: p,
      } = t;
    if (o < u || h === m) return null;
    var g = ke("recharts-sector", p),
      b = o - u,
      O = Vn(f, b, 0, !0),
      S;
    return (
      O > 0 && Math.abs(h - m) < 360
        ? (S = jz({
            cx: r,
            cy: a,
            innerRadius: u,
            outerRadius: o,
            cornerRadius: Math.min(O, b / 2),
            forceCornerRadius: s,
            cornerIsExternal: v,
            startAngle: h,
            endAngle: m,
          }))
        : (S = yE({
            cx: r,
            cy: a,
            innerRadius: u,
            outerRadius: o,
            startAngle: h,
            endAngle: m,
          })),
      A.createElement("path", _m({}, rt(t, !0), { className: g, d: S }))
    );
  };
function Pz(e, t, r) {
  var a, u, o, f;
  if (e === "horizontal")
    ((a = t.x), (o = a), (u = r.top), (f = r.top + r.height));
  else if (e === "vertical")
    ((u = t.y), (f = u), (a = r.left), (o = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var { cx: s, cy: v, innerRadius: h, outerRadius: m, angle: p } = t,
        g = Rt(s, v, h, p),
        b = Rt(s, v, m, p);
      ((a = g.x), (u = g.y), (o = b.x), (f = b.y));
    } else return mE(t);
  return [
    { x: a, y: u },
    { x: o, y: f },
  ];
}
var Dh = {},
  jh = {},
  Ch = {},
  RS;
function Nz() {
  return (
    RS ||
      ((RS = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Dw();
        function r(a) {
          return t.isSymbol(a) ? NaN : Number(a);
        }
        e.toNumber = r;
      })(Ch)),
    Ch
  );
}
var kS;
function zz() {
  return (
    kS ||
      ((kS = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = Nz();
        function r(a) {
          return a
            ? ((a = t.toNumber(a)),
              a === 1 / 0 || a === -1 / 0
                ? (a < 0 ? -1 : 1) * Number.MAX_VALUE
                : a === a
                  ? a
                  : 0)
            : a === 0
              ? a
              : 0;
        }
        e.toFinite = r;
      })(jh)),
    jh
  );
}
var LS;
function Rz() {
  return (
    LS ||
      ((LS = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = jw(),
          r = zz();
        function a(u, o, f) {
          (f &&
            typeof f != "number" &&
            t.isIterateeCall(u, o, f) &&
            (o = f = void 0),
            (u = r.toFinite(u)),
            o === void 0 ? ((o = u), (u = 0)) : (o = r.toFinite(o)),
            (f = f === void 0 ? (u < o ? 1 : -1) : r.toFinite(f)));
          const s = Math.max(Math.ceil((o - u) / (f || 1)), 0),
            v = new Array(s);
          for (let h = 0; h < s; h++) ((v[h] = u), (u += f));
          return v;
        }
        e.range = a;
      })(Dh)),
    Dh
  );
}
var Ph, BS;
function kz() {
  return (BS || ((BS = 1), (Ph = Rz().range)), Ph);
}
var Lz = kz();
const gE = Zn(Lz);
function va(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function Bz(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Ay(e) {
  let t, r, a;
  e.length !== 2
    ? ((t = va), (r = (s, v) => va(e(s), v)), (a = (s, v) => e(s) - v))
    : ((t = e === va || e === Bz ? e : Uz), (r = e), (a = e));
  function u(s, v, h = 0, m = s.length) {
    if (h < m) {
      if (t(v, v) !== 0) return m;
      do {
        const p = (h + m) >>> 1;
        r(s[p], v) < 0 ? (h = p + 1) : (m = p);
      } while (h < m);
    }
    return h;
  }
  function o(s, v, h = 0, m = s.length) {
    if (h < m) {
      if (t(v, v) !== 0) return m;
      do {
        const p = (h + m) >>> 1;
        r(s[p], v) <= 0 ? (h = p + 1) : (m = p);
      } while (h < m);
    }
    return h;
  }
  function f(s, v, h = 0, m = s.length) {
    const p = u(s, v, h, m - 1);
    return p > h && a(s[p - 1], v) > -a(s[p], v) ? p - 1 : p;
  }
  return { left: u, center: f, right: o };
}
function Uz() {
  return 0;
}
function bE(e) {
  return e === null ? NaN : +e;
}
function* $z(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const qz = Ay(va),
  Bu = qz.right;
Ay(bE).center;
class US extends Map {
  constructor(t, r = Iz) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [a, u] of t) this.set(a, u);
  }
  get(t) {
    return super.get($S(this, t));
  }
  has(t) {
    return super.has($S(this, t));
  }
  set(t, r) {
    return super.set(Hz(this, t), r);
  }
  delete(t) {
    return super.delete(Yz(this, t));
  }
}
function $S({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function Hz({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function Yz({ _intern: e, _key: t }, r) {
  const a = t(r);
  return (e.has(a) && ((r = e.get(a)), e.delete(a)), r);
}
function Iz(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function Kz(e = va) {
  if (e === va) return xE;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const a = e(t, r);
    return a || a === 0 ? a : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function xE(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const Gz = Math.sqrt(50),
  Xz = Math.sqrt(10),
  Vz = Math.sqrt(2);
function Fc(e, t, r) {
  const a = (t - e) / Math.max(0, r),
    u = Math.floor(Math.log10(a)),
    o = a / Math.pow(10, u),
    f = o >= Gz ? 10 : o >= Xz ? 5 : o >= Vz ? 2 : 1;
  let s, v, h;
  return (
    u < 0
      ? ((h = Math.pow(10, -u) / f),
        (s = Math.round(e * h)),
        (v = Math.round(t * h)),
        s / h < e && ++s,
        v / h > t && --v,
        (h = -h))
      : ((h = Math.pow(10, u) * f),
        (s = Math.round(e / h)),
        (v = Math.round(t / h)),
        s * h < e && ++s,
        v * h > t && --v),
    v < s && 0.5 <= r && r < 2 ? Fc(e, t, r * 2) : [s, v, h]
  );
}
function Tm(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const a = t < e,
    [u, o, f] = a ? Fc(t, e, r) : Fc(e, t, r);
  if (!(o >= u)) return [];
  const s = o - u + 1,
    v = new Array(s);
  if (a)
    if (f < 0) for (let h = 0; h < s; ++h) v[h] = (o - h) / -f;
    else for (let h = 0; h < s; ++h) v[h] = (o - h) * f;
  else if (f < 0) for (let h = 0; h < s; ++h) v[h] = (u + h) / -f;
  else for (let h = 0; h < s; ++h) v[h] = (u + h) * f;
  return v;
}
function Mm(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), Fc(e, t, r)[2]);
}
function Dm(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const a = t < e,
    u = a ? Mm(t, e, r) : Mm(e, t, r);
  return (a ? -1 : 1) * (u < 0 ? 1 / -u : u);
}
function qS(e, t) {
  let r;
  for (const a of e)
    a != null && (r < a || (r === void 0 && a >= a)) && (r = a);
  return r;
}
function HS(e, t) {
  let r;
  for (const a of e)
    a != null && (r > a || (r === void 0 && a >= a)) && (r = a);
  return r;
}
function SE(e, t, r = 0, a = 1 / 0, u) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (a = Math.floor(Math.min(e.length - 1, a))),
    !(r <= t && t <= a))
  )
    return e;
  for (u = u === void 0 ? xE : Kz(u); a > r; ) {
    if (a - r > 600) {
      const v = a - r + 1,
        h = t - r + 1,
        m = Math.log(v),
        p = 0.5 * Math.exp((2 * m) / 3),
        g = 0.5 * Math.sqrt((m * p * (v - p)) / v) * (h - v / 2 < 0 ? -1 : 1),
        b = Math.max(r, Math.floor(t - (h * p) / v + g)),
        O = Math.min(a, Math.floor(t + ((v - h) * p) / v + g));
      SE(e, t, b, O, u);
    }
    const o = e[t];
    let f = r,
      s = a;
    for (du(e, r, t), u(e[a], o) > 0 && du(e, r, a); f < s; ) {
      for (du(e, f, s), ++f, --s; u(e[f], o) < 0; ) ++f;
      for (; u(e[s], o) > 0; ) --s;
    }
    (u(e[r], o) === 0 ? du(e, r, s) : (++s, du(e, s, a)),
      s <= t && (r = s + 1),
      t <= s && (a = s - 1));
  }
  return e;
}
function du(e, t, r) {
  const a = e[t];
  ((e[t] = e[r]), (e[r] = a));
}
function Zz(e, t, r) {
  if (((e = Float64Array.from($z(e))), !(!(a = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || a < 2) return HS(e);
    if (t >= 1) return qS(e);
    var a,
      u = (a - 1) * t,
      o = Math.floor(u),
      f = qS(SE(e, o).subarray(0, o + 1)),
      s = HS(e.subarray(o + 1));
    return f + (s - f) * (u - o);
  }
}
function Qz(e, t, r = bE) {
  if (!(!(a = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || a < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[a - 1], a - 1, e);
    var a,
      u = (a - 1) * t,
      o = Math.floor(u),
      f = +r(e[o], o, e),
      s = +r(e[o + 1], o + 1, e);
    return f + (s - f) * (u - o);
  }
}
function Wz(e, t, r) {
  ((e = +e),
    (t = +t),
    (r = (u = arguments.length) < 2 ? ((t = e), (e = 0), 1) : u < 3 ? 1 : +r));
  for (
    var a = -1, u = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(u);
    ++a < u;
  )
    o[a] = e + a * r;
  return o;
}
function Hn(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Rr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const jm = Symbol("implicit");
function wy() {
  var e = new US(),
    t = [],
    r = [],
    a = jm;
  function u(o) {
    let f = e.get(o);
    if (f === void 0) {
      if (a !== jm) return a;
      e.set(o, (f = t.push(o) - 1));
    }
    return r[f % r.length];
  }
  return (
    (u.domain = function (o) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new US()));
      for (const f of o) e.has(f) || e.set(f, t.push(f) - 1);
      return u;
    }),
    (u.range = function (o) {
      return arguments.length ? ((r = Array.from(o)), u) : r.slice();
    }),
    (u.unknown = function (o) {
      return arguments.length ? ((a = o), u) : a;
    }),
    (u.copy = function () {
      return wy(t, r).unknown(a);
    }),
    Hn.apply(u, arguments),
    u
  );
}
function Ey() {
  var e = wy().unknown(void 0),
    t = e.domain,
    r = e.range,
    a = 0,
    u = 1,
    o,
    f,
    s = !1,
    v = 0,
    h = 0,
    m = 0.5;
  delete e.unknown;
  function p() {
    var g = t().length,
      b = u < a,
      O = b ? u : a,
      S = b ? a : u;
    ((o = (S - O) / Math.max(1, g - v + h * 2)),
      s && (o = Math.floor(o)),
      (O += (S - O - o * (g - v)) * m),
      (f = o * (1 - v)),
      s && ((O = Math.round(O)), (f = Math.round(f))));
    var w = Wz(g).map(function (_) {
      return O + o * _;
    });
    return r(b ? w.reverse() : w);
  }
  return (
    (e.domain = function (g) {
      return arguments.length ? (t(g), p()) : t();
    }),
    (e.range = function (g) {
      return arguments.length
        ? (([a, u] = g), (a = +a), (u = +u), p())
        : [a, u];
    }),
    (e.rangeRound = function (g) {
      return (([a, u] = g), (a = +a), (u = +u), (s = !0), p());
    }),
    (e.bandwidth = function () {
      return f;
    }),
    (e.step = function () {
      return o;
    }),
    (e.round = function (g) {
      return arguments.length ? ((s = !!g), p()) : s;
    }),
    (e.padding = function (g) {
      return arguments.length ? ((v = Math.min(1, (h = +g))), p()) : v;
    }),
    (e.paddingInner = function (g) {
      return arguments.length ? ((v = Math.min(1, g)), p()) : v;
    }),
    (e.paddingOuter = function (g) {
      return arguments.length ? ((h = +g), p()) : h;
    }),
    (e.align = function (g) {
      return arguments.length ? ((m = Math.max(0, Math.min(1, g))), p()) : m;
    }),
    (e.copy = function () {
      return Ey(t(), [a, u]).round(s).paddingInner(v).paddingOuter(h).align(m);
    }),
    Hn.apply(p(), arguments)
  );
}
function OE(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return OE(t());
    }),
    e
  );
}
function Fz() {
  return OE(Ey.apply(null, arguments).paddingInner(1));
}
function _y(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function AE(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Uu() {}
var Mu = 0.7,
  Jc = 1 / Mu,
  Qi = "\\s*([+-]?\\d+)\\s*",
  Du = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  nr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Jz = /^#([0-9a-f]{3,8})$/,
  eR = new RegExp(`^rgb\\(${Qi},${Qi},${Qi}\\)$`),
  tR = new RegExp(`^rgb\\(${nr},${nr},${nr}\\)$`),
  nR = new RegExp(`^rgba\\(${Qi},${Qi},${Qi},${Du}\\)$`),
  rR = new RegExp(`^rgba\\(${nr},${nr},${nr},${Du}\\)$`),
  aR = new RegExp(`^hsl\\(${Du},${nr},${nr}\\)$`),
  iR = new RegExp(`^hsla\\(${Du},${nr},${nr},${Du}\\)$`),
  YS = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
_y(Uu, ju, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: IS,
  formatHex: IS,
  formatHex8: lR,
  formatHsl: uR,
  formatRgb: KS,
  toString: KS,
});
function IS() {
  return this.rgb().formatHex();
}
function lR() {
  return this.rgb().formatHex8();
}
function uR() {
  return wE(this).formatHsl();
}
function KS() {
  return this.rgb().formatRgb();
}
function ju(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = Jz.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? GS(t)
          : r === 3
            ? new Jt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? Ac(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? Ac(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = eR.exec(e))
        ? new Jt(t[1], t[2], t[3], 1)
        : (t = tR.exec(e))
          ? new Jt(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = nR.exec(e))
            ? Ac(t[1], t[2], t[3], t[4])
            : (t = rR.exec(e))
              ? Ac(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = aR.exec(e))
                ? ZS(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = iR.exec(e))
                  ? ZS(t[1], t[2] / 100, t[3] / 100, t[4])
                  : YS.hasOwnProperty(e)
                    ? GS(YS[e])
                    : e === "transparent"
                      ? new Jt(NaN, NaN, NaN, 0)
                      : null
  );
}
function GS(e) {
  return new Jt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Ac(e, t, r, a) {
  return (a <= 0 && (e = t = r = NaN), new Jt(e, t, r, a));
}
function oR(e) {
  return (
    e instanceof Uu || (e = ju(e)),
    e ? ((e = e.rgb()), new Jt(e.r, e.g, e.b, e.opacity)) : new Jt()
  );
}
function Cm(e, t, r, a) {
  return arguments.length === 1 ? oR(e) : new Jt(e, t, r, a ?? 1);
}
function Jt(e, t, r, a) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +a));
}
_y(
  Jt,
  Cm,
  AE(Uu, {
    brighter(e) {
      return (
        (e = e == null ? Jc : Math.pow(Jc, e)),
        new Jt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Mu : Math.pow(Mu, e)),
        new Jt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Jt(Wa(this.r), Wa(this.g), Wa(this.b), ef(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: XS,
    formatHex: XS,
    formatHex8: cR,
    formatRgb: VS,
    toString: VS,
  }),
);
function XS() {
  return `#${Ga(this.r)}${Ga(this.g)}${Ga(this.b)}`;
}
function cR() {
  return `#${Ga(this.r)}${Ga(this.g)}${Ga(this.b)}${Ga((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function VS() {
  const e = ef(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Wa(this.r)}, ${Wa(this.g)}, ${Wa(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ef(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Wa(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ga(e) {
  return ((e = Wa(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function ZS(e, t, r, a) {
  return (
    a <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new Xn(e, t, r, a)
  );
}
function wE(e) {
  if (e instanceof Xn) return new Xn(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Uu || (e = ju(e)), !e)) return new Xn();
  if (e instanceof Xn) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    a = e.b / 255,
    u = Math.min(t, r, a),
    o = Math.max(t, r, a),
    f = NaN,
    s = o - u,
    v = (o + u) / 2;
  return (
    s
      ? (t === o
          ? (f = (r - a) / s + (r < a) * 6)
          : r === o
            ? (f = (a - t) / s + 2)
            : (f = (t - r) / s + 4),
        (s /= v < 0.5 ? o + u : 2 - o - u),
        (f *= 60))
      : (s = v > 0 && v < 1 ? 0 : f),
    new Xn(f, s, v, e.opacity)
  );
}
function fR(e, t, r, a) {
  return arguments.length === 1 ? wE(e) : new Xn(e, t, r, a ?? 1);
}
function Xn(e, t, r, a) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +a));
}
_y(
  Xn,
  fR,
  AE(Uu, {
    brighter(e) {
      return (
        (e = e == null ? Jc : Math.pow(Jc, e)),
        new Xn(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Mu : Math.pow(Mu, e)),
        new Xn(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        a = r + (r < 0.5 ? r : 1 - r) * t,
        u = 2 * r - a;
      return new Jt(
        Nh(e >= 240 ? e - 240 : e + 120, u, a),
        Nh(e, u, a),
        Nh(e < 120 ? e + 240 : e - 120, u, a),
        this.opacity,
      );
    },
    clamp() {
      return new Xn(QS(this.h), wc(this.s), wc(this.l), ef(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = ef(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${QS(this.h)}, ${wc(this.s) * 100}%, ${wc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function QS(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function wc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Nh(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Ty = (e) => () => e;
function sR(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function dR(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (a) {
      return Math.pow(e + a * t, r);
    }
  );
}
function vR(e) {
  return (e = +e) == 1
    ? EE
    : function (t, r) {
        return r - t ? dR(t, r, e) : Ty(isNaN(t) ? r : t);
      };
}
function EE(e, t) {
  var r = t - e;
  return r ? sR(e, r) : Ty(isNaN(e) ? t : e);
}
const WS = (function e(t) {
  var r = vR(t);
  function a(u, o) {
    var f = r((u = Cm(u)).r, (o = Cm(o)).r),
      s = r(u.g, o.g),
      v = r(u.b, o.b),
      h = EE(u.opacity, o.opacity);
    return function (m) {
      return (
        (u.r = f(m)),
        (u.g = s(m)),
        (u.b = v(m)),
        (u.opacity = h(m)),
        u + ""
      );
    };
  }
  return ((a.gamma = e), a);
})(1);
function hR(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    a = t.slice(),
    u;
  return function (o) {
    for (u = 0; u < r; ++u) a[u] = e[u] * (1 - o) + t[u] * o;
    return a;
  };
}
function mR(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function yR(e, t) {
  var r = t ? t.length : 0,
    a = e ? Math.min(r, e.length) : 0,
    u = new Array(a),
    o = new Array(r),
    f;
  for (f = 0; f < a; ++f) u[f] = ul(e[f], t[f]);
  for (; f < r; ++f) o[f] = t[f];
  return function (s) {
    for (f = 0; f < a; ++f) o[f] = u[f](s);
    return o;
  };
}
function pR(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (a) {
      return (r.setTime(e * (1 - a) + t * a), r);
    }
  );
}
function tf(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function gR(e, t) {
  var r = {},
    a = {},
    u;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (u in t) u in e ? (r[u] = ul(e[u], t[u])) : (a[u] = t[u]);
  return function (o) {
    for (u in r) a[u] = r[u](o);
    return a;
  };
}
var Pm = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  zh = new RegExp(Pm.source, "g");
function bR(e) {
  return function () {
    return e;
  };
}
function xR(e) {
  return function (t) {
    return e(t) + "";
  };
}
function SR(e, t) {
  var r = (Pm.lastIndex = zh.lastIndex = 0),
    a,
    u,
    o,
    f = -1,
    s = [],
    v = [];
  for (e = e + "", t = t + ""; (a = Pm.exec(e)) && (u = zh.exec(t)); )
    ((o = u.index) > r &&
      ((o = t.slice(r, o)), s[f] ? (s[f] += o) : (s[++f] = o)),
      (a = a[0]) === (u = u[0])
        ? s[f]
          ? (s[f] += u)
          : (s[++f] = u)
        : ((s[++f] = null), v.push({ i: f, x: tf(a, u) })),
      (r = zh.lastIndex));
  return (
    r < t.length && ((o = t.slice(r)), s[f] ? (s[f] += o) : (s[++f] = o)),
    s.length < 2
      ? v[0]
        ? xR(v[0].x)
        : bR(t)
      : ((t = v.length),
        function (h) {
          for (var m = 0, p; m < t; ++m) s[(p = v[m]).i] = p.x(h);
          return s.join("");
        })
  );
}
function ul(e, t) {
  var r = typeof t,
    a;
  return t == null || r === "boolean"
    ? Ty(t)
    : (r === "number"
        ? tf
        : r === "string"
          ? (a = ju(t))
            ? ((t = a), WS)
            : SR
          : t instanceof ju
            ? WS
            : t instanceof Date
              ? pR
              : mR(t)
                ? hR
                : Array.isArray(t)
                  ? yR
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? gR
                    : tf)(e, t);
}
function My(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function OR(e, t) {
  t === void 0 && ((t = e), (e = ul));
  for (
    var r = 0, a = t.length - 1, u = t[0], o = new Array(a < 0 ? 0 : a);
    r < a;
  )
    o[r] = e(u, (u = t[++r]));
  return function (f) {
    var s = Math.max(0, Math.min(a - 1, Math.floor((f *= a))));
    return o[s](f - s);
  };
}
function AR(e) {
  return function () {
    return e;
  };
}
function nf(e) {
  return +e;
}
var FS = [0, 1];
function qt(e) {
  return e;
}
function Nm(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : AR(isNaN(t) ? NaN : 0.5);
}
function wR(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (a) {
      return Math.max(e, Math.min(t, a));
    }
  );
}
function ER(e, t, r) {
  var a = e[0],
    u = e[1],
    o = t[0],
    f = t[1];
  return (
    u < a ? ((a = Nm(u, a)), (o = r(f, o))) : ((a = Nm(a, u)), (o = r(o, f))),
    function (s) {
      return o(a(s));
    }
  );
}
function _R(e, t, r) {
  var a = Math.min(e.length, t.length) - 1,
    u = new Array(a),
    o = new Array(a),
    f = -1;
  for (
    e[a] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++f < a;
  )
    ((u[f] = Nm(e[f], e[f + 1])), (o[f] = r(t[f], t[f + 1])));
  return function (s) {
    var v = Bu(e, s, 1, a) - 1;
    return o[v](u[v](s));
  };
}
function $u(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function $f() {
  var e = FS,
    t = FS,
    r = ul,
    a,
    u,
    o,
    f = qt,
    s,
    v,
    h;
  function m() {
    var g = Math.min(e.length, t.length);
    return (
      f !== qt && (f = wR(e[0], e[g - 1])),
      (s = g > 2 ? _R : ER),
      (v = h = null),
      p
    );
  }
  function p(g) {
    return g == null || isNaN((g = +g))
      ? o
      : (v || (v = s(e.map(a), t, r)))(a(f(g)));
  }
  return (
    (p.invert = function (g) {
      return f(u((h || (h = s(t, e.map(a), tf)))(g)));
    }),
    (p.domain = function (g) {
      return arguments.length ? ((e = Array.from(g, nf)), m()) : e.slice();
    }),
    (p.range = function (g) {
      return arguments.length ? ((t = Array.from(g)), m()) : t.slice();
    }),
    (p.rangeRound = function (g) {
      return ((t = Array.from(g)), (r = My), m());
    }),
    (p.clamp = function (g) {
      return arguments.length ? ((f = g ? !0 : qt), m()) : f !== qt;
    }),
    (p.interpolate = function (g) {
      return arguments.length ? ((r = g), m()) : r;
    }),
    (p.unknown = function (g) {
      return arguments.length ? ((o = g), p) : o;
    }),
    function (g, b) {
      return ((a = g), (u = b), m());
    }
  );
}
function Dy() {
  return $f()(qt, qt);
}
function TR(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function rf(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0
  )
    return null;
  var r,
    a = e.slice(0, r);
  return [a.length > 1 ? a[0] + a.slice(2) : a, +e.slice(r + 1)];
}
function tl(e) {
  return ((e = rf(Math.abs(e))), e ? e[1] : NaN);
}
function MR(e, t) {
  return function (r, a) {
    for (
      var u = r.length, o = [], f = 0, s = e[0], v = 0;
      u > 0 &&
      s > 0 &&
      (v + s + 1 > a && (s = Math.max(1, a - v)),
      o.push(r.substring((u -= s), u + s)),
      !((v += s + 1) > a));
    )
      s = e[(f = (f + 1) % e.length)];
    return o.reverse().join(t);
  };
}
function DR(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var jR =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Cu(e) {
  if (!(t = jR.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new jy({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Cu.prototype = jy.prototype;
function jy(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
jy.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function CR(e) {
  e: for (var t = e.length, r = 1, a = -1, u; r < t; ++r)
    switch (e[r]) {
      case ".":
        a = u = r;
        break;
      case "0":
        (a === 0 && (a = r), (u = r));
        break;
      default:
        if (!+e[r]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(u + 1) : e;
}
var _E;
function PR(e, t) {
  var r = rf(e, t);
  if (!r) return e + "";
  var a = r[0],
    u = r[1],
    o = u - (_E = Math.max(-8, Math.min(8, Math.floor(u / 3))) * 3) + 1,
    f = a.length;
  return o === f
    ? a
    : o > f
      ? a + new Array(o - f + 1).join("0")
      : o > 0
        ? a.slice(0, o) + "." + a.slice(o)
        : "0." + new Array(1 - o).join("0") + rf(e, Math.max(0, t + o - 1))[0];
}
function JS(e, t) {
  var r = rf(e, t);
  if (!r) return e + "";
  var a = r[0],
    u = r[1];
  return u < 0
    ? "0." + new Array(-u).join("0") + a
    : a.length > u + 1
      ? a.slice(0, u + 1) + "." + a.slice(u + 1)
      : a + new Array(u - a.length + 2).join("0");
}
const eO = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: TR,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => JS(e * 100, t),
  r: JS,
  s: PR,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function tO(e) {
  return e;
}
var nO = Array.prototype.map,
  rO = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function NR(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? tO
        : MR(nO.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    a = e.currency === void 0 ? "" : e.currency[1] + "",
    u = e.decimal === void 0 ? "." : e.decimal + "",
    o = e.numerals === void 0 ? tO : DR(nO.call(e.numerals, String)),
    f = e.percent === void 0 ? "%" : e.percent + "",
    s = e.minus === void 0 ? "−" : e.minus + "",
    v = e.nan === void 0 ? "NaN" : e.nan + "";
  function h(p) {
    p = Cu(p);
    var g = p.fill,
      b = p.align,
      O = p.sign,
      S = p.symbol,
      w = p.zero,
      _ = p.width,
      M = p.comma,
      T = p.precision,
      N = p.trim,
      z = p.type;
    (z === "n"
      ? ((M = !0), (z = "g"))
      : eO[z] || (T === void 0 && (T = 12), (N = !0), (z = "g")),
      (w || (g === "0" && b === "=")) && ((w = !0), (g = "0"), (b = "=")));
    var R =
        S === "$"
          ? r
          : S === "#" && /[boxX]/.test(z)
            ? "0" + z.toLowerCase()
            : "",
      B = S === "$" ? a : /[%p]/.test(z) ? f : "",
      X = eO[z],
      le = /[defgprs%]/.test(z);
    T =
      T === void 0
        ? 6
        : /[gprs]/.test(z)
          ? Math.max(1, Math.min(21, T))
          : Math.max(0, Math.min(20, T));
    function ae(V) {
      var ne = R,
        se = B,
        F,
        W,
        C;
      if (z === "c") ((se = X(V) + se), (V = ""));
      else {
        V = +V;
        var U = V < 0 || 1 / V < 0;
        if (
          ((V = isNaN(V) ? v : X(Math.abs(V), T)),
          N && (V = CR(V)),
          U && +V == 0 && O !== "+" && (U = !1),
          (ne =
            (U ? (O === "(" ? O : s) : O === "-" || O === "(" ? "" : O) + ne),
          (se =
            (z === "s" ? rO[8 + _E / 3] : "") +
            se +
            (U && O === "(" ? ")" : "")),
          le)
        ) {
          for (F = -1, W = V.length; ++F < W; )
            if (((C = V.charCodeAt(F)), 48 > C || C > 57)) {
              ((se = (C === 46 ? u + V.slice(F + 1) : V.slice(F)) + se),
                (V = V.slice(0, F)));
              break;
            }
        }
      }
      M && !w && (V = t(V, 1 / 0));
      var I = ne.length + V.length + se.length,
        ee = I < _ ? new Array(_ - I + 1).join(g) : "";
      switch (
        (M &&
          w &&
          ((V = t(ee + V, ee.length ? _ - se.length : 1 / 0)), (ee = "")),
        b)
      ) {
        case "<":
          V = ne + V + se + ee;
          break;
        case "=":
          V = ne + ee + V + se;
          break;
        case "^":
          V = ee.slice(0, (I = ee.length >> 1)) + ne + V + se + ee.slice(I);
          break;
        default:
          V = ee + ne + V + se;
          break;
      }
      return o(V);
    }
    return (
      (ae.toString = function () {
        return p + "";
      }),
      ae
    );
  }
  function m(p, g) {
    var b = h(((p = Cu(p)), (p.type = "f"), p)),
      O = Math.max(-8, Math.min(8, Math.floor(tl(g) / 3))) * 3,
      S = Math.pow(10, -O),
      w = rO[8 + O / 3];
    return function (_) {
      return b(S * _) + w;
    };
  }
  return { format: h, formatPrefix: m };
}
var Ec, Cy, TE;
zR({ thousands: ",", grouping: [3], currency: ["$", ""] });
function zR(e) {
  return ((Ec = NR(e)), (Cy = Ec.format), (TE = Ec.formatPrefix), Ec);
}
function RR(e) {
  return Math.max(0, -tl(Math.abs(e)));
}
function kR(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(tl(t) / 3))) * 3 - tl(Math.abs(e)),
  );
}
function LR(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, tl(t) - tl(e)) + 1
  );
}
function ME(e, t, r, a) {
  var u = Dm(e, t, r),
    o;
  switch (((a = Cu(a ?? ",f")), a.type)) {
    case "s": {
      var f = Math.max(Math.abs(e), Math.abs(t));
      return (
        a.precision == null && !isNaN((o = kR(u, f))) && (a.precision = o),
        TE(a, f)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null &&
        !isNaN((o = LR(u, Math.max(Math.abs(e), Math.abs(t))))) &&
        (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null &&
        !isNaN((o = RR(u))) &&
        (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return Cy(a);
}
function xa(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var a = t();
      return Tm(a[0], a[a.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, a) {
      var u = t();
      return ME(u[0], u[u.length - 1], r ?? 10, a);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var a = t(),
        u = 0,
        o = a.length - 1,
        f = a[u],
        s = a[o],
        v,
        h,
        m = 10;
      for (
        s < f && ((h = f), (f = s), (s = h), (h = u), (u = o), (o = h));
        m-- > 0;
      ) {
        if (((h = Mm(f, s, r)), h === v)) return ((a[u] = f), (a[o] = s), t(a));
        if (h > 0) ((f = Math.floor(f / h) * h), (s = Math.ceil(s / h) * h));
        else if (h < 0)
          ((f = Math.ceil(f * h) / h), (s = Math.floor(s * h) / h));
        else break;
        v = h;
      }
      return e;
    }),
    e
  );
}
function DE() {
  var e = Dy();
  return (
    (e.copy = function () {
      return $u(e, DE());
    }),
    Hn.apply(e, arguments),
    xa(e)
  );
}
function jE(e) {
  var t;
  function r(a) {
    return a == null || isNaN((a = +a)) ? t : a;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (a) {
        return arguments.length ? ((e = Array.from(a, nf)), r) : e.slice();
      }),
    (r.unknown = function (a) {
      return arguments.length ? ((t = a), r) : t;
    }),
    (r.copy = function () {
      return jE(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, nf) : [0, 1]),
    xa(r)
  );
}
function CE(e, t) {
  e = e.slice();
  var r = 0,
    a = e.length - 1,
    u = e[r],
    o = e[a],
    f;
  return (
    o < u && ((f = r), (r = a), (a = f), (f = u), (u = o), (o = f)),
    (e[r] = t.floor(u)),
    (e[a] = t.ceil(o)),
    e
  );
}
function aO(e) {
  return Math.log(e);
}
function iO(e) {
  return Math.exp(e);
}
function BR(e) {
  return -Math.log(-e);
}
function UR(e) {
  return -Math.exp(-e);
}
function $R(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function qR(e) {
  return e === 10 ? $R : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function HR(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function lO(e) {
  return (t, r) => -e(-t, r);
}
function Py(e) {
  const t = e(aO, iO),
    r = t.domain;
  let a = 10,
    u,
    o;
  function f() {
    return (
      (u = HR(a)),
      (o = qR(a)),
      r()[0] < 0 ? ((u = lO(u)), (o = lO(o)), e(BR, UR)) : e(aO, iO),
      t
    );
  }
  return (
    (t.base = function (s) {
      return arguments.length ? ((a = +s), f()) : a;
    }),
    (t.domain = function (s) {
      return arguments.length ? (r(s), f()) : r();
    }),
    (t.ticks = (s) => {
      const v = r();
      let h = v[0],
        m = v[v.length - 1];
      const p = m < h;
      p && ([h, m] = [m, h]);
      let g = u(h),
        b = u(m),
        O,
        S;
      const w = s == null ? 10 : +s;
      let _ = [];
      if (!(a % 1) && b - g < w) {
        if (((g = Math.floor(g)), (b = Math.ceil(b)), h > 0)) {
          for (; g <= b; ++g)
            for (O = 1; O < a; ++O)
              if (((S = g < 0 ? O / o(-g) : O * o(g)), !(S < h))) {
                if (S > m) break;
                _.push(S);
              }
        } else
          for (; g <= b; ++g)
            for (O = a - 1; O >= 1; --O)
              if (((S = g > 0 ? O / o(-g) : O * o(g)), !(S < h))) {
                if (S > m) break;
                _.push(S);
              }
        _.length * 2 < w && (_ = Tm(h, m, w));
      } else _ = Tm(g, b, Math.min(b - g, w)).map(o);
      return p ? _.reverse() : _;
    }),
    (t.tickFormat = (s, v) => {
      if (
        (s == null && (s = 10),
        v == null && (v = a === 10 ? "s" : ","),
        typeof v != "function" &&
          (!(a % 1) && (v = Cu(v)).precision == null && (v.trim = !0),
          (v = Cy(v))),
        s === 1 / 0)
      )
        return v;
      const h = Math.max(1, (a * s) / t.ticks().length);
      return (m) => {
        let p = m / o(Math.round(u(m)));
        return (p * a < a - 0.5 && (p *= a), p <= h ? v(m) : "");
      };
    }),
    (t.nice = () =>
      r(
        CE(r(), {
          floor: (s) => o(Math.floor(u(s))),
          ceil: (s) => o(Math.ceil(u(s))),
        }),
      )),
    t
  );
}
function PE() {
  const e = Py($f()).domain([1, 10]);
  return (
    (e.copy = () => $u(e, PE()).base(e.base())),
    Hn.apply(e, arguments),
    e
  );
}
function uO(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function oO(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Ny(e) {
  var t = 1,
    r = e(uO(t), oO(t));
  return (
    (r.constant = function (a) {
      return arguments.length ? e(uO((t = +a)), oO(t)) : t;
    }),
    xa(r)
  );
}
function NE() {
  var e = Ny($f());
  return (
    (e.copy = function () {
      return $u(e, NE()).constant(e.constant());
    }),
    Hn.apply(e, arguments)
  );
}
function cO(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function YR(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function IR(e) {
  return e < 0 ? -e * e : e * e;
}
function zy(e) {
  var t = e(qt, qt),
    r = 1;
  function a() {
    return r === 1 ? e(qt, qt) : r === 0.5 ? e(YR, IR) : e(cO(r), cO(1 / r));
  }
  return (
    (t.exponent = function (u) {
      return arguments.length ? ((r = +u), a()) : r;
    }),
    xa(t)
  );
}
function Ry() {
  var e = zy($f());
  return (
    (e.copy = function () {
      return $u(e, Ry()).exponent(e.exponent());
    }),
    Hn.apply(e, arguments),
    e
  );
}
function KR() {
  return Ry.apply(null, arguments).exponent(0.5);
}
function fO(e) {
  return Math.sign(e) * e * e;
}
function GR(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function zE() {
  var e = Dy(),
    t = [0, 1],
    r = !1,
    a;
  function u(o) {
    var f = GR(e(o));
    return isNaN(f) ? a : r ? Math.round(f) : f;
  }
  return (
    (u.invert = function (o) {
      return e.invert(fO(o));
    }),
    (u.domain = function (o) {
      return arguments.length ? (e.domain(o), u) : e.domain();
    }),
    (u.range = function (o) {
      return arguments.length
        ? (e.range((t = Array.from(o, nf)).map(fO)), u)
        : t.slice();
    }),
    (u.rangeRound = function (o) {
      return u.range(o).round(!0);
    }),
    (u.round = function (o) {
      return arguments.length ? ((r = !!o), u) : r;
    }),
    (u.clamp = function (o) {
      return arguments.length ? (e.clamp(o), u) : e.clamp();
    }),
    (u.unknown = function (o) {
      return arguments.length ? ((a = o), u) : a;
    }),
    (u.copy = function () {
      return zE(e.domain(), t).round(r).clamp(e.clamp()).unknown(a);
    }),
    Hn.apply(u, arguments),
    xa(u)
  );
}
function RE() {
  var e = [],
    t = [],
    r = [],
    a;
  function u() {
    var f = 0,
      s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++f < s; ) r[f - 1] = Qz(e, f / s);
    return o;
  }
  function o(f) {
    return f == null || isNaN((f = +f)) ? a : t[Bu(r, f)];
  }
  return (
    (o.invertExtent = function (f) {
      var s = t.indexOf(f);
      return s < 0
        ? [NaN, NaN]
        : [s > 0 ? r[s - 1] : e[0], s < r.length ? r[s] : e[e.length - 1]];
    }),
    (o.domain = function (f) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let s of f) s != null && !isNaN((s = +s)) && e.push(s);
      return (e.sort(va), u());
    }),
    (o.range = function (f) {
      return arguments.length ? ((t = Array.from(f)), u()) : t.slice();
    }),
    (o.unknown = function (f) {
      return arguments.length ? ((a = f), o) : a;
    }),
    (o.quantiles = function () {
      return r.slice();
    }),
    (o.copy = function () {
      return RE().domain(e).range(t).unknown(a);
    }),
    Hn.apply(o, arguments)
  );
}
function kE() {
  var e = 0,
    t = 1,
    r = 1,
    a = [0.5],
    u = [0, 1],
    o;
  function f(v) {
    return v != null && v <= v ? u[Bu(a, v, 0, r)] : o;
  }
  function s() {
    var v = -1;
    for (a = new Array(r); ++v < r; )
      a[v] = ((v + 1) * t - (v - r) * e) / (r + 1);
    return f;
  }
  return (
    (f.domain = function (v) {
      return arguments.length
        ? (([e, t] = v), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (f.range = function (v) {
      return arguments.length
        ? ((r = (u = Array.from(v)).length - 1), s())
        : u.slice();
    }),
    (f.invertExtent = function (v) {
      var h = u.indexOf(v);
      return h < 0
        ? [NaN, NaN]
        : h < 1
          ? [e, a[0]]
          : h >= r
            ? [a[r - 1], t]
            : [a[h - 1], a[h]];
    }),
    (f.unknown = function (v) {
      return (arguments.length && (o = v), f);
    }),
    (f.thresholds = function () {
      return a.slice();
    }),
    (f.copy = function () {
      return kE().domain([e, t]).range(u).unknown(o);
    }),
    Hn.apply(xa(f), arguments)
  );
}
function LE() {
  var e = [0.5],
    t = [0, 1],
    r,
    a = 1;
  function u(o) {
    return o != null && o <= o ? t[Bu(e, o, 0, a)] : r;
  }
  return (
    (u.domain = function (o) {
      return arguments.length
        ? ((e = Array.from(o)), (a = Math.min(e.length, t.length - 1)), u)
        : e.slice();
    }),
    (u.range = function (o) {
      return arguments.length
        ? ((t = Array.from(o)), (a = Math.min(e.length, t.length - 1)), u)
        : t.slice();
    }),
    (u.invertExtent = function (o) {
      var f = t.indexOf(o);
      return [e[f - 1], e[f]];
    }),
    (u.unknown = function (o) {
      return arguments.length ? ((r = o), u) : r;
    }),
    (u.copy = function () {
      return LE().domain(e).range(t).unknown(r);
    }),
    Hn.apply(u, arguments)
  );
}
const Rh = new Date(),
  kh = new Date();
function pt(e, t, r, a) {
  function u(o) {
    return (e((o = arguments.length === 0 ? new Date() : new Date(+o))), o);
  }
  return (
    (u.floor = (o) => (e((o = new Date(+o))), o)),
    (u.ceil = (o) => (e((o = new Date(o - 1))), t(o, 1), e(o), o)),
    (u.round = (o) => {
      const f = u(o),
        s = u.ceil(o);
      return o - f < s - o ? f : s;
    }),
    (u.offset = (o, f) => (
      t((o = new Date(+o)), f == null ? 1 : Math.floor(f)),
      o
    )),
    (u.range = (o, f, s) => {
      const v = [];
      if (
        ((o = u.ceil(o)),
        (s = s == null ? 1 : Math.floor(s)),
        !(o < f) || !(s > 0))
      )
        return v;
      let h;
      do (v.push((h = new Date(+o))), t(o, s), e(o));
      while (h < o && o < f);
      return v;
    }),
    (u.filter = (o) =>
      pt(
        (f) => {
          if (f >= f) for (; e(f), !o(f); ) f.setTime(f - 1);
        },
        (f, s) => {
          if (f >= f)
            if (s < 0) for (; ++s <= 0; ) for (; t(f, -1), !o(f); );
            else for (; --s >= 0; ) for (; t(f, 1), !o(f); );
        },
      )),
    r &&
      ((u.count = (o, f) => (
        Rh.setTime(+o),
        kh.setTime(+f),
        e(Rh),
        e(kh),
        Math.floor(r(Rh, kh))
      )),
      (u.every = (o) => (
        (o = Math.floor(o)),
        !isFinite(o) || !(o > 0)
          ? null
          : o > 1
            ? u.filter(
                a ? (f) => a(f) % o === 0 : (f) => u.count(0, f) % o === 0,
              )
            : u
      ))),
    u
  );
}
const af = pt(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
af.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? pt(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : af
);
af.range;
const Er = 1e3,
  Bn = Er * 60,
  _r = Bn * 60,
  jr = _r * 24,
  ky = jr * 7,
  sO = jr * 30,
  Lh = jr * 365,
  Xa = pt(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Er);
    },
    (e, t) => (t - e) / Er,
    (e) => e.getUTCSeconds(),
  );
Xa.range;
const Ly = pt(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Er);
  },
  (e, t) => {
    e.setTime(+e + t * Bn);
  },
  (e, t) => (t - e) / Bn,
  (e) => e.getMinutes(),
);
Ly.range;
const By = pt(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Bn);
  },
  (e, t) => (t - e) / Bn,
  (e) => e.getUTCMinutes(),
);
By.range;
const Uy = pt(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Er - e.getMinutes() * Bn,
    );
  },
  (e, t) => {
    e.setTime(+e + t * _r);
  },
  (e, t) => (t - e) / _r,
  (e) => e.getHours(),
);
Uy.range;
const $y = pt(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * _r);
  },
  (e, t) => (t - e) / _r,
  (e) => e.getUTCHours(),
);
$y.range;
const qu = pt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Bn) / jr,
  (e) => e.getDate() - 1,
);
qu.range;
const qf = pt(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / jr,
  (e) => e.getUTCDate() - 1,
);
qf.range;
const BE = pt(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / jr,
  (e) => Math.floor(e / jr),
);
BE.range;
function li(e) {
  return pt(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Bn) / ky,
  );
}
const Hf = li(0),
  lf = li(1),
  XR = li(2),
  VR = li(3),
  nl = li(4),
  ZR = li(5),
  QR = li(6);
Hf.range;
lf.range;
XR.range;
VR.range;
nl.range;
ZR.range;
QR.range;
function ui(e) {
  return pt(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / ky,
  );
}
const Yf = ui(0),
  uf = ui(1),
  WR = ui(2),
  FR = ui(3),
  rl = ui(4),
  JR = ui(5),
  e4 = ui(6);
Yf.range;
uf.range;
WR.range;
FR.range;
rl.range;
JR.range;
e4.range;
const qy = pt(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
qy.range;
const Hy = pt(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
Hy.range;
const Cr = pt(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
Cr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : pt(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
Cr.range;
const Pr = pt(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
Pr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : pt(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
Pr.range;
function UE(e, t, r, a, u, o) {
  const f = [
    [Xa, 1, Er],
    [Xa, 5, 5 * Er],
    [Xa, 15, 15 * Er],
    [Xa, 30, 30 * Er],
    [o, 1, Bn],
    [o, 5, 5 * Bn],
    [o, 15, 15 * Bn],
    [o, 30, 30 * Bn],
    [u, 1, _r],
    [u, 3, 3 * _r],
    [u, 6, 6 * _r],
    [u, 12, 12 * _r],
    [a, 1, jr],
    [a, 2, 2 * jr],
    [r, 1, ky],
    [t, 1, sO],
    [t, 3, 3 * sO],
    [e, 1, Lh],
  ];
  function s(h, m, p) {
    const g = m < h;
    g && ([h, m] = [m, h]);
    const b = p && typeof p.range == "function" ? p : v(h, m, p),
      O = b ? b.range(h, +m + 1) : [];
    return g ? O.reverse() : O;
  }
  function v(h, m, p) {
    const g = Math.abs(m - h) / p,
      b = Ay(([, , w]) => w).right(f, g);
    if (b === f.length) return e.every(Dm(h / Lh, m / Lh, p));
    if (b === 0) return af.every(Math.max(Dm(h, m, p), 1));
    const [O, S] = f[g / f[b - 1][2] < f[b][2] / g ? b - 1 : b];
    return O.every(S);
  }
  return [s, v];
}
const [t4, n4] = UE(Pr, Hy, Yf, BE, $y, By),
  [r4, a4] = UE(Cr, qy, Hf, qu, Uy, Ly);
function Bh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Uh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function vu(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function i4(e) {
  var t = e.dateTime,
    r = e.date,
    a = e.time,
    u = e.periods,
    o = e.days,
    f = e.shortDays,
    s = e.months,
    v = e.shortMonths,
    h = hu(u),
    m = mu(u),
    p = hu(o),
    g = mu(o),
    b = hu(f),
    O = mu(f),
    S = hu(s),
    w = mu(s),
    _ = hu(v),
    M = mu(v),
    T = {
      a: U,
      A: I,
      b: ee,
      B: ue,
      c: null,
      d: pO,
      e: pO,
      f: M4,
      g: B4,
      G: $4,
      H: E4,
      I: _4,
      j: T4,
      L: $E,
      m: D4,
      M: j4,
      p: D,
      q: L,
      Q: xO,
      s: SO,
      S: C4,
      u: P4,
      U: N4,
      V: z4,
      w: R4,
      W: k4,
      x: null,
      X: null,
      y: L4,
      Y: U4,
      Z: q4,
      "%": bO,
    },
    N = {
      a: te,
      A: ie,
      b: oe,
      B: ge,
      c: null,
      d: gO,
      e: gO,
      f: K4,
      g: t6,
      G: r6,
      H: H4,
      I: Y4,
      j: I4,
      L: HE,
      m: G4,
      M: X4,
      p: we,
      q: Je,
      Q: xO,
      s: SO,
      S: V4,
      u: Z4,
      U: Q4,
      V: W4,
      w: F4,
      W: J4,
      x: null,
      X: null,
      y: e6,
      Y: n6,
      Z: a6,
      "%": bO,
    },
    z = {
      a: ae,
      A: V,
      b: ne,
      B: se,
      c: F,
      d: mO,
      e: mO,
      f: S4,
      g: hO,
      G: vO,
      H: yO,
      I: yO,
      j: p4,
      L: x4,
      m: y4,
      M: g4,
      p: le,
      q: m4,
      Q: A4,
      s: w4,
      S: b4,
      u: f4,
      U: s4,
      V: d4,
      w: c4,
      W: v4,
      x: W,
      X: C,
      y: hO,
      Y: vO,
      Z: h4,
      "%": O4,
    };
  ((T.x = R(r, T)),
    (T.X = R(a, T)),
    (T.c = R(t, T)),
    (N.x = R(r, N)),
    (N.X = R(a, N)),
    (N.c = R(t, N)));
  function R(re, he) {
    return function (be) {
      var J = [],
        et = -1,
        je = 0,
        _t = re.length,
        Tt,
        ar,
        hl;
      for (be instanceof Date || (be = new Date(+be)); ++et < _t; )
        re.charCodeAt(et) === 37 &&
          (J.push(re.slice(je, et)),
          (ar = dO[(Tt = re.charAt(++et))]) != null
            ? (Tt = re.charAt(++et))
            : (ar = Tt === "e" ? " " : "0"),
          (hl = he[Tt]) && (Tt = hl(be, ar)),
          J.push(Tt),
          (je = et + 1));
      return (J.push(re.slice(je, et)), J.join(""));
    };
  }
  function B(re, he) {
    return function (be) {
      var J = vu(1900, void 0, 1),
        et = X(J, re, (be += ""), 0),
        je,
        _t;
      if (et != be.length) return null;
      if ("Q" in J) return new Date(J.Q);
      if ("s" in J) return new Date(J.s * 1e3 + ("L" in J ? J.L : 0));
      if (
        (he && !("Z" in J) && (J.Z = 0),
        "p" in J && (J.H = (J.H % 12) + J.p * 12),
        J.m === void 0 && (J.m = "q" in J ? J.q : 0),
        "V" in J)
      ) {
        if (J.V < 1 || J.V > 53) return null;
        ("w" in J || (J.w = 1),
          "Z" in J
            ? ((je = Uh(vu(J.y, 0, 1))),
              (_t = je.getUTCDay()),
              (je = _t > 4 || _t === 0 ? uf.ceil(je) : uf(je)),
              (je = qf.offset(je, (J.V - 1) * 7)),
              (J.y = je.getUTCFullYear()),
              (J.m = je.getUTCMonth()),
              (J.d = je.getUTCDate() + ((J.w + 6) % 7)))
            : ((je = Bh(vu(J.y, 0, 1))),
              (_t = je.getDay()),
              (je = _t > 4 || _t === 0 ? lf.ceil(je) : lf(je)),
              (je = qu.offset(je, (J.V - 1) * 7)),
              (J.y = je.getFullYear()),
              (J.m = je.getMonth()),
              (J.d = je.getDate() + ((J.w + 6) % 7))));
      } else
        ("W" in J || "U" in J) &&
          ("w" in J || (J.w = "u" in J ? J.u % 7 : "W" in J ? 1 : 0),
          (_t =
            "Z" in J
              ? Uh(vu(J.y, 0, 1)).getUTCDay()
              : Bh(vu(J.y, 0, 1)).getDay()),
          (J.m = 0),
          (J.d =
            "W" in J
              ? ((J.w + 6) % 7) + J.W * 7 - ((_t + 5) % 7)
              : J.w + J.U * 7 - ((_t + 6) % 7)));
      return "Z" in J
        ? ((J.H += (J.Z / 100) | 0), (J.M += J.Z % 100), Uh(J))
        : Bh(J);
    };
  }
  function X(re, he, be, J) {
    for (var et = 0, je = he.length, _t = be.length, Tt, ar; et < je; ) {
      if (J >= _t) return -1;
      if (((Tt = he.charCodeAt(et++)), Tt === 37)) {
        if (
          ((Tt = he.charAt(et++)),
          (ar = z[Tt in dO ? he.charAt(et++) : Tt]),
          !ar || (J = ar(re, be, J)) < 0)
        )
          return -1;
      } else if (Tt != be.charCodeAt(J++)) return -1;
    }
    return J;
  }
  function le(re, he, be) {
    var J = h.exec(he.slice(be));
    return J ? ((re.p = m.get(J[0].toLowerCase())), be + J[0].length) : -1;
  }
  function ae(re, he, be) {
    var J = b.exec(he.slice(be));
    return J ? ((re.w = O.get(J[0].toLowerCase())), be + J[0].length) : -1;
  }
  function V(re, he, be) {
    var J = p.exec(he.slice(be));
    return J ? ((re.w = g.get(J[0].toLowerCase())), be + J[0].length) : -1;
  }
  function ne(re, he, be) {
    var J = _.exec(he.slice(be));
    return J ? ((re.m = M.get(J[0].toLowerCase())), be + J[0].length) : -1;
  }
  function se(re, he, be) {
    var J = S.exec(he.slice(be));
    return J ? ((re.m = w.get(J[0].toLowerCase())), be + J[0].length) : -1;
  }
  function F(re, he, be) {
    return X(re, t, he, be);
  }
  function W(re, he, be) {
    return X(re, r, he, be);
  }
  function C(re, he, be) {
    return X(re, a, he, be);
  }
  function U(re) {
    return f[re.getDay()];
  }
  function I(re) {
    return o[re.getDay()];
  }
  function ee(re) {
    return v[re.getMonth()];
  }
  function ue(re) {
    return s[re.getMonth()];
  }
  function D(re) {
    return u[+(re.getHours() >= 12)];
  }
  function L(re) {
    return 1 + ~~(re.getMonth() / 3);
  }
  function te(re) {
    return f[re.getUTCDay()];
  }
  function ie(re) {
    return o[re.getUTCDay()];
  }
  function oe(re) {
    return v[re.getUTCMonth()];
  }
  function ge(re) {
    return s[re.getUTCMonth()];
  }
  function we(re) {
    return u[+(re.getUTCHours() >= 12)];
  }
  function Je(re) {
    return 1 + ~~(re.getUTCMonth() / 3);
  }
  return {
    format: function (re) {
      var he = R((re += ""), T);
      return (
        (he.toString = function () {
          return re;
        }),
        he
      );
    },
    parse: function (re) {
      var he = B((re += ""), !1);
      return (
        (he.toString = function () {
          return re;
        }),
        he
      );
    },
    utcFormat: function (re) {
      var he = R((re += ""), N);
      return (
        (he.toString = function () {
          return re;
        }),
        he
      );
    },
    utcParse: function (re) {
      var he = B((re += ""), !0);
      return (
        (he.toString = function () {
          return re;
        }),
        he
      );
    },
  };
}
var dO = { "-": "", _: " ", 0: "0" },
  wt = /^\s*\d+/,
  l4 = /^%/,
  u4 = /[\\^$*+?|[\]().{}]/g;
function Ne(e, t, r) {
  var a = e < 0 ? "-" : "",
    u = (a ? -e : e) + "",
    o = u.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + u : u);
}
function o4(e) {
  return e.replace(u4, "\\$&");
}
function hu(e) {
  return new RegExp("^(?:" + e.map(o4).join("|") + ")", "i");
}
function mu(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function c4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 1));
  return a ? ((e.w = +a[0]), r + a[0].length) : -1;
}
function f4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 1));
  return a ? ((e.u = +a[0]), r + a[0].length) : -1;
}
function s4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.U = +a[0]), r + a[0].length) : -1;
}
function d4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.V = +a[0]), r + a[0].length) : -1;
}
function v4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.W = +a[0]), r + a[0].length) : -1;
}
function vO(e, t, r) {
  var a = wt.exec(t.slice(r, r + 4));
  return a ? ((e.y = +a[0]), r + a[0].length) : -1;
}
function hO(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3)), r + a[0].length) : -1;
}
function h4(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a
    ? ((e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00"))), r + a[0].length)
    : -1;
}
function m4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 1));
  return a ? ((e.q = a[0] * 3 - 3), r + a[0].length) : -1;
}
function y4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.m = a[0] - 1), r + a[0].length) : -1;
}
function mO(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.d = +a[0]), r + a[0].length) : -1;
}
function p4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 3));
  return a ? ((e.m = 0), (e.d = +a[0]), r + a[0].length) : -1;
}
function yO(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.H = +a[0]), r + a[0].length) : -1;
}
function g4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.M = +a[0]), r + a[0].length) : -1;
}
function b4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 2));
  return a ? ((e.S = +a[0]), r + a[0].length) : -1;
}
function x4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 3));
  return a ? ((e.L = +a[0]), r + a[0].length) : -1;
}
function S4(e, t, r) {
  var a = wt.exec(t.slice(r, r + 6));
  return a ? ((e.L = Math.floor(a[0] / 1e3)), r + a[0].length) : -1;
}
function O4(e, t, r) {
  var a = l4.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function A4(e, t, r) {
  var a = wt.exec(t.slice(r));
  return a ? ((e.Q = +a[0]), r + a[0].length) : -1;
}
function w4(e, t, r) {
  var a = wt.exec(t.slice(r));
  return a ? ((e.s = +a[0]), r + a[0].length) : -1;
}
function pO(e, t) {
  return Ne(e.getDate(), t, 2);
}
function E4(e, t) {
  return Ne(e.getHours(), t, 2);
}
function _4(e, t) {
  return Ne(e.getHours() % 12 || 12, t, 2);
}
function T4(e, t) {
  return Ne(1 + qu.count(Cr(e), e), t, 3);
}
function $E(e, t) {
  return Ne(e.getMilliseconds(), t, 3);
}
function M4(e, t) {
  return $E(e, t) + "000";
}
function D4(e, t) {
  return Ne(e.getMonth() + 1, t, 2);
}
function j4(e, t) {
  return Ne(e.getMinutes(), t, 2);
}
function C4(e, t) {
  return Ne(e.getSeconds(), t, 2);
}
function P4(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function N4(e, t) {
  return Ne(Hf.count(Cr(e) - 1, e), t, 2);
}
function qE(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? nl(e) : nl.ceil(e);
}
function z4(e, t) {
  return ((e = qE(e)), Ne(nl.count(Cr(e), e) + (Cr(e).getDay() === 4), t, 2));
}
function R4(e) {
  return e.getDay();
}
function k4(e, t) {
  return Ne(lf.count(Cr(e) - 1, e), t, 2);
}
function L4(e, t) {
  return Ne(e.getFullYear() % 100, t, 2);
}
function B4(e, t) {
  return ((e = qE(e)), Ne(e.getFullYear() % 100, t, 2));
}
function U4(e, t) {
  return Ne(e.getFullYear() % 1e4, t, 4);
}
function $4(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? nl(e) : nl.ceil(e)),
    Ne(e.getFullYear() % 1e4, t, 4)
  );
}
function q4(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    Ne((t / 60) | 0, "0", 2) +
    Ne(t % 60, "0", 2)
  );
}
function gO(e, t) {
  return Ne(e.getUTCDate(), t, 2);
}
function H4(e, t) {
  return Ne(e.getUTCHours(), t, 2);
}
function Y4(e, t) {
  return Ne(e.getUTCHours() % 12 || 12, t, 2);
}
function I4(e, t) {
  return Ne(1 + qf.count(Pr(e), e), t, 3);
}
function HE(e, t) {
  return Ne(e.getUTCMilliseconds(), t, 3);
}
function K4(e, t) {
  return HE(e, t) + "000";
}
function G4(e, t) {
  return Ne(e.getUTCMonth() + 1, t, 2);
}
function X4(e, t) {
  return Ne(e.getUTCMinutes(), t, 2);
}
function V4(e, t) {
  return Ne(e.getUTCSeconds(), t, 2);
}
function Z4(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Q4(e, t) {
  return Ne(Yf.count(Pr(e) - 1, e), t, 2);
}
function YE(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? rl(e) : rl.ceil(e);
}
function W4(e, t) {
  return (
    (e = YE(e)),
    Ne(rl.count(Pr(e), e) + (Pr(e).getUTCDay() === 4), t, 2)
  );
}
function F4(e) {
  return e.getUTCDay();
}
function J4(e, t) {
  return Ne(uf.count(Pr(e) - 1, e), t, 2);
}
function e6(e, t) {
  return Ne(e.getUTCFullYear() % 100, t, 2);
}
function t6(e, t) {
  return ((e = YE(e)), Ne(e.getUTCFullYear() % 100, t, 2));
}
function n6(e, t) {
  return Ne(e.getUTCFullYear() % 1e4, t, 4);
}
function r6(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? rl(e) : rl.ceil(e)),
    Ne(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function a6() {
  return "+0000";
}
function bO() {
  return "%";
}
function xO(e) {
  return +e;
}
function SO(e) {
  return Math.floor(+e / 1e3);
}
var Xi, IE, KE;
i6({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
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
  shortMonths: [
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
});
function i6(e) {
  return (
    (Xi = i4(e)),
    (IE = Xi.format),
    Xi.parse,
    (KE = Xi.utcFormat),
    Xi.utcParse,
    Xi
  );
}
function l6(e) {
  return new Date(e);
}
function u6(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Yy(e, t, r, a, u, o, f, s, v, h) {
  var m = Dy(),
    p = m.invert,
    g = m.domain,
    b = h(".%L"),
    O = h(":%S"),
    S = h("%I:%M"),
    w = h("%I %p"),
    _ = h("%a %d"),
    M = h("%b %d"),
    T = h("%B"),
    N = h("%Y");
  function z(R) {
    return (
      v(R) < R
        ? b
        : s(R) < R
          ? O
          : f(R) < R
            ? S
            : o(R) < R
              ? w
              : a(R) < R
                ? u(R) < R
                  ? _
                  : M
                : r(R) < R
                  ? T
                  : N
    )(R);
  }
  return (
    (m.invert = function (R) {
      return new Date(p(R));
    }),
    (m.domain = function (R) {
      return arguments.length ? g(Array.from(R, u6)) : g().map(l6);
    }),
    (m.ticks = function (R) {
      var B = g();
      return e(B[0], B[B.length - 1], R ?? 10);
    }),
    (m.tickFormat = function (R, B) {
      return B == null ? z : h(B);
    }),
    (m.nice = function (R) {
      var B = g();
      return (
        (!R || typeof R.range != "function") &&
          (R = t(B[0], B[B.length - 1], R ?? 10)),
        R ? g(CE(B, R)) : m
      );
    }),
    (m.copy = function () {
      return $u(m, Yy(e, t, r, a, u, o, f, s, v, h));
    }),
    m
  );
}
function o6() {
  return Hn.apply(
    Yy(r4, a4, Cr, qy, Hf, qu, Uy, Ly, Xa, IE).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function c6() {
  return Hn.apply(
    Yy(t4, n4, Pr, Hy, Yf, qf, $y, By, Xa, KE).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function If() {
  var e = 0,
    t = 1,
    r,
    a,
    u,
    o,
    f = qt,
    s = !1,
    v;
  function h(p) {
    return p == null || isNaN((p = +p))
      ? v
      : f(
          u === 0
            ? 0.5
            : ((p = (o(p) - r) * u), s ? Math.max(0, Math.min(1, p)) : p),
        );
  }
  ((h.domain = function (p) {
    return arguments.length
      ? (([e, t] = p),
        (r = o((e = +e))),
        (a = o((t = +t))),
        (u = r === a ? 0 : 1 / (a - r)),
        h)
      : [e, t];
  }),
    (h.clamp = function (p) {
      return arguments.length ? ((s = !!p), h) : s;
    }),
    (h.interpolator = function (p) {
      return arguments.length ? ((f = p), h) : f;
    }));
  function m(p) {
    return function (g) {
      var b, O;
      return arguments.length ? (([b, O] = g), (f = p(b, O)), h) : [f(0), f(1)];
    };
  }
  return (
    (h.range = m(ul)),
    (h.rangeRound = m(My)),
    (h.unknown = function (p) {
      return arguments.length ? ((v = p), h) : v;
    }),
    function (p) {
      return (
        (o = p),
        (r = p(e)),
        (a = p(t)),
        (u = r === a ? 0 : 1 / (a - r)),
        h
      );
    }
  );
}
function Sa(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function GE() {
  var e = xa(If()(qt));
  return (
    (e.copy = function () {
      return Sa(e, GE());
    }),
    Rr.apply(e, arguments)
  );
}
function XE() {
  var e = Py(If()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Sa(e, XE()).base(e.base());
    }),
    Rr.apply(e, arguments)
  );
}
function VE() {
  var e = Ny(If());
  return (
    (e.copy = function () {
      return Sa(e, VE()).constant(e.constant());
    }),
    Rr.apply(e, arguments)
  );
}
function Iy() {
  var e = zy(If());
  return (
    (e.copy = function () {
      return Sa(e, Iy()).exponent(e.exponent());
    }),
    Rr.apply(e, arguments)
  );
}
function f6() {
  return Iy.apply(null, arguments).exponent(0.5);
}
function ZE() {
  var e = [],
    t = qt;
  function r(a) {
    if (a != null && !isNaN((a = +a)))
      return t((Bu(e, a, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (a) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let u of a) u != null && !isNaN((u = +u)) && e.push(u);
      return (e.sort(va), r);
    }),
    (r.interpolator = function (a) {
      return arguments.length ? ((t = a), r) : t;
    }),
    (r.range = function () {
      return e.map((a, u) => t(u / (e.length - 1)));
    }),
    (r.quantiles = function (a) {
      return Array.from({ length: a + 1 }, (u, o) => Zz(e, o / a));
    }),
    (r.copy = function () {
      return ZE(t).domain(e);
    }),
    Rr.apply(r, arguments)
  );
}
function Kf() {
  var e = 0,
    t = 0.5,
    r = 1,
    a = 1,
    u,
    o,
    f,
    s,
    v,
    h = qt,
    m,
    p = !1,
    g;
  function b(S) {
    return isNaN((S = +S))
      ? g
      : ((S = 0.5 + ((S = +m(S)) - o) * (a * S < a * o ? s : v)),
        h(p ? Math.max(0, Math.min(1, S)) : S));
  }
  ((b.domain = function (S) {
    return arguments.length
      ? (([e, t, r] = S),
        (u = m((e = +e))),
        (o = m((t = +t))),
        (f = m((r = +r))),
        (s = u === o ? 0 : 0.5 / (o - u)),
        (v = o === f ? 0 : 0.5 / (f - o)),
        (a = o < u ? -1 : 1),
        b)
      : [e, t, r];
  }),
    (b.clamp = function (S) {
      return arguments.length ? ((p = !!S), b) : p;
    }),
    (b.interpolator = function (S) {
      return arguments.length ? ((h = S), b) : h;
    }));
  function O(S) {
    return function (w) {
      var _, M, T;
      return arguments.length
        ? (([_, M, T] = w), (h = OR(S, [_, M, T])), b)
        : [h(0), h(0.5), h(1)];
    };
  }
  return (
    (b.range = O(ul)),
    (b.rangeRound = O(My)),
    (b.unknown = function (S) {
      return arguments.length ? ((g = S), b) : g;
    }),
    function (S) {
      return (
        (m = S),
        (u = S(e)),
        (o = S(t)),
        (f = S(r)),
        (s = u === o ? 0 : 0.5 / (o - u)),
        (v = o === f ? 0 : 0.5 / (f - o)),
        (a = o < u ? -1 : 1),
        b
      );
    }
  );
}
function QE() {
  var e = xa(Kf()(qt));
  return (
    (e.copy = function () {
      return Sa(e, QE());
    }),
    Rr.apply(e, arguments)
  );
}
function WE() {
  var e = Py(Kf()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return Sa(e, WE()).base(e.base());
    }),
    Rr.apply(e, arguments)
  );
}
function FE() {
  var e = Ny(Kf());
  return (
    (e.copy = function () {
      return Sa(e, FE()).constant(e.constant());
    }),
    Rr.apply(e, arguments)
  );
}
function Ky() {
  var e = zy(Kf());
  return (
    (e.copy = function () {
      return Sa(e, Ky()).exponent(e.exponent());
    }),
    Rr.apply(e, arguments)
  );
}
function s6() {
  return Ky.apply(null, arguments).exponent(0.5);
}
const xu = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Ey,
      scaleDiverging: QE,
      scaleDivergingLog: WE,
      scaleDivergingPow: Ky,
      scaleDivergingSqrt: s6,
      scaleDivergingSymlog: FE,
      scaleIdentity: jE,
      scaleImplicit: jm,
      scaleLinear: DE,
      scaleLog: PE,
      scaleOrdinal: wy,
      scalePoint: Fz,
      scalePow: Ry,
      scaleQuantile: RE,
      scaleQuantize: kE,
      scaleRadial: zE,
      scaleSequential: GE,
      scaleSequentialLog: XE,
      scaleSequentialPow: Iy,
      scaleSequentialQuantile: ZE,
      scaleSequentialSqrt: f6,
      scaleSequentialSymlog: VE,
      scaleSqrt: KR,
      scaleSymlog: NE,
      scaleThreshold: LE,
      scaleTime: o6,
      scaleUtc: c6,
      tickFormat: ME,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var Oa = (e) => e.chartData,
  d6 = K([Oa], (e) => {
    var t = e.chartData != null ? e.chartData.length - 1 : 0;
    return {
      chartData: e.chartData,
      computedData: e.computedData,
      dataEndIndex: t,
      dataStartIndex: 0,
    };
  }),
  Gf = (e, t, r, a) => (a ? d6(e) : Oa(e));
function al(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (Sn(t) && Sn(r)) return !0;
  }
  return !1;
}
function OO(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function v6(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, a] = e,
      u,
      o;
    if (Sn(r)) u = r;
    else if (typeof r == "function") return;
    if (Sn(a)) o = a;
    else if (typeof a == "function") return;
    var f = [u, o];
    if (al(f)) return f;
  }
}
function h6(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var a = e(t, r);
        if (al(a)) return OO(a, t, r);
      } catch {}
    if (Array.isArray(e) && e.length === 2) {
      var [u, o] = e,
        f,
        s;
      if (u === "auto") t != null && (f = Math.min(...t));
      else if (ye(u)) f = u;
      else if (typeof u == "function")
        try {
          t != null && (f = u(t?.[0]));
        } catch {}
      else if (typeof u == "string" && dS.test(u)) {
        var v = dS.exec(u);
        if (v == null || t == null) f = void 0;
        else {
          var h = +v[1];
          f = t[0] - h;
        }
      } else f = t?.[0];
      if (o === "auto") t != null && (s = Math.max(...t));
      else if (ye(o)) s = o;
      else if (typeof o == "function")
        try {
          t != null && (s = o(t?.[1]));
        } catch {}
      else if (typeof o == "string" && vS.test(o)) {
        var m = vS.exec(o);
        if (m == null || t == null) s = void 0;
        else {
          var p = +m[1];
          s = t[1] + p;
        }
      } else s = t?.[1];
      var g = [f, s];
      if (al(g)) return t == null ? g : OO(g, t, r);
    }
  }
}
var ol = 1e9,
  m6 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  Xy,
  We = !0,
  qn = "[DecimalError] ",
  Fa = qn + "Invalid argument: ",
  Gy = qn + "Exponent out of range: ",
  cl = Math.floor,
  Ia = Math.pow,
  y6 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  pn,
  St = 1e7,
  Ze = 7,
  JE = 9007199254740991,
  of = cl(JE / Ze),
  ce = {};
ce.absoluteValue = ce.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
ce.comparedTo = ce.cmp = function (e) {
  var t,
    r,
    a,
    u,
    o = this;
  if (((e = new o.constructor(e)), o.s !== e.s)) return o.s || -e.s;
  if (o.e !== e.e) return (o.e > e.e) ^ (o.s < 0) ? 1 : -1;
  for (a = o.d.length, u = e.d.length, t = 0, r = a < u ? a : u; t < r; ++t)
    if (o.d[t] !== e.d[t]) return (o.d[t] > e.d[t]) ^ (o.s < 0) ? 1 : -1;
  return a === u ? 0 : (a > u) ^ (o.s < 0) ? 1 : -1;
};
ce.decimalPlaces = ce.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * Ze;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ce.dividedBy = ce.div = function (e) {
  return Mr(this, new this.constructor(e));
};
ce.dividedToIntegerBy = ce.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return Ke(Mr(t, new r(e), 0, 1), r.precision);
};
ce.equals = ce.eq = function (e) {
  return !this.cmp(e);
};
ce.exponent = function () {
  return vt(this);
};
ce.greaterThan = ce.gt = function (e) {
  return this.cmp(e) > 0;
};
ce.greaterThanOrEqualTo = ce.gte = function (e) {
  return this.cmp(e) >= 0;
};
ce.isInteger = ce.isint = function () {
  return this.e > this.d.length - 2;
};
ce.isNegative = ce.isneg = function () {
  return this.s < 0;
};
ce.isPositive = ce.ispos = function () {
  return this.s > 0;
};
ce.isZero = function () {
  return this.s === 0;
};
ce.lessThan = ce.lt = function (e) {
  return this.cmp(e) < 0;
};
ce.lessThanOrEqualTo = ce.lte = function (e) {
  return this.cmp(e) < 1;
};
ce.logarithm = ce.log = function (e) {
  var t,
    r = this,
    a = r.constructor,
    u = a.precision,
    o = u + 5;
  if (e === void 0) e = new a(10);
  else if (((e = new a(e)), e.s < 1 || e.eq(pn))) throw Error(qn + "NaN");
  if (r.s < 1) throw Error(qn + (r.s ? "NaN" : "-Infinity"));
  return r.eq(pn)
    ? new a(0)
    : ((We = !1), (t = Mr(Pu(r, o), Pu(e, o), o)), (We = !0), Ke(t, u));
};
ce.minus = ce.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? n_(t, e) : e_(t, ((e.s = -e.s), e))
  );
};
ce.modulo = ce.mod = function (e) {
  var t,
    r = this,
    a = r.constructor,
    u = a.precision;
  if (((e = new a(e)), !e.s)) throw Error(qn + "NaN");
  return r.s
    ? ((We = !1), (t = Mr(r, e, 0, 1).times(e)), (We = !0), r.minus(t))
    : Ke(new a(r), u);
};
ce.naturalExponential = ce.exp = function () {
  return t_(this);
};
ce.naturalLogarithm = ce.ln = function () {
  return Pu(this);
};
ce.negated = ce.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
ce.plus = ce.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? e_(t, e) : n_(t, ((e.s = -e.s), e))
  );
};
ce.precision = ce.sd = function (e) {
  var t,
    r,
    a,
    u = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Fa + e);
  if (
    ((t = vt(u) + 1), (a = u.d.length - 1), (r = a * Ze + 1), (a = u.d[a]), a)
  ) {
    for (; a % 10 == 0; a /= 10) r--;
    for (a = u.d[0]; a >= 10; a /= 10) r++;
  }
  return e && t > r ? t : r;
};
ce.squareRoot = ce.sqrt = function () {
  var e,
    t,
    r,
    a,
    u,
    o,
    f,
    s = this,
    v = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new v(0);
    throw Error(qn + "NaN");
  }
  for (
    e = vt(s),
      We = !1,
      u = Math.sqrt(+s),
      u == 0 || u == 1 / 0
        ? ((t = tr(s.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (u = Math.sqrt(t)),
          (e = cl((e + 1) / 2) - (e < 0 || e % 2)),
          u == 1 / 0
            ? (t = "5e" + e)
            : ((t = u.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (a = new v(t)))
        : (a = new v(u.toString())),
      r = v.precision,
      u = f = r + 3;
    ;
  )
    if (
      ((o = a),
      (a = o.plus(Mr(s, o, f + 2)).times(0.5)),
      tr(o.d).slice(0, f) === (t = tr(a.d)).slice(0, f))
    ) {
      if (((t = t.slice(f - 3, f + 1)), u == f && t == "4999")) {
        if ((Ke(o, r + 1, 0), o.times(o).eq(s))) {
          a = o;
          break;
        }
      } else if (t != "9999") break;
      f += 4;
    }
  return ((We = !0), Ke(a, r));
};
ce.times = ce.mul = function (e) {
  var t,
    r,
    a,
    u,
    o,
    f,
    s,
    v,
    h,
    m = this,
    p = m.constructor,
    g = m.d,
    b = (e = new p(e)).d;
  if (!m.s || !e.s) return new p(0);
  for (
    e.s *= m.s,
      r = m.e + e.e,
      v = g.length,
      h = b.length,
      v < h && ((o = g), (g = b), (b = o), (f = v), (v = h), (h = f)),
      o = [],
      f = v + h,
      a = f;
    a--;
  )
    o.push(0);
  for (a = h; --a >= 0; ) {
    for (t = 0, u = v + a; u > a; )
      ((s = o[u] + b[a] * g[u - a - 1] + t),
        (o[u--] = (s % St) | 0),
        (t = (s / St) | 0));
    o[u] = ((o[u] + t) % St) | 0;
  }
  for (; !o[--f]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = r),
    We ? Ke(e, p.precision) : e
  );
};
ce.toDecimalPlaces = ce.todp = function (e, t) {
  var r = this,
    a = r.constructor;
  return (
    (r = new a(r)),
    e === void 0
      ? r
      : (rr(e, 0, ol),
        t === void 0 ? (t = a.rounding) : rr(t, 0, 8),
        Ke(r, e + vt(r) + 1, t))
  );
};
ce.toExponential = function (e, t) {
  var r,
    a = this,
    u = a.constructor;
  return (
    e === void 0
      ? (r = ti(a, !0))
      : (rr(e, 0, ol),
        t === void 0 ? (t = u.rounding) : rr(t, 0, 8),
        (a = Ke(new u(a), e + 1, t)),
        (r = ti(a, !0, e + 1))),
    r
  );
};
ce.toFixed = function (e, t) {
  var r,
    a,
    u = this,
    o = u.constructor;
  return e === void 0
    ? ti(u)
    : (rr(e, 0, ol),
      t === void 0 ? (t = o.rounding) : rr(t, 0, 8),
      (a = Ke(new o(u), e + vt(u) + 1, t)),
      (r = ti(a.abs(), !1, e + vt(a) + 1)),
      u.isneg() && !u.isZero() ? "-" + r : r);
};
ce.toInteger = ce.toint = function () {
  var e = this,
    t = e.constructor;
  return Ke(new t(e), vt(e) + 1, t.rounding);
};
ce.toNumber = function () {
  return +this;
};
ce.toPower = ce.pow = function (e) {
  var t,
    r,
    a,
    u,
    o,
    f,
    s = this,
    v = s.constructor,
    h = 12,
    m = +(e = new v(e));
  if (!e.s) return new v(pn);
  if (((s = new v(s)), !s.s)) {
    if (e.s < 1) throw Error(qn + "Infinity");
    return s;
  }
  if (s.eq(pn)) return s;
  if (((a = v.precision), e.eq(pn))) return Ke(s, a);
  if (((t = e.e), (r = e.d.length - 1), (f = t >= r), (o = s.s), f)) {
    if ((r = m < 0 ? -m : m) <= JE) {
      for (
        u = new v(pn), t = Math.ceil(a / Ze + 4), We = !1;
        r % 2 && ((u = u.times(s)), wO(u.d, t)), (r = cl(r / 2)), r !== 0;
      )
        ((s = s.times(s)), wO(s.d, t));
      return ((We = !0), e.s < 0 ? new v(pn).div(u) : Ke(u, a));
    }
  } else if (o < 0) throw Error(qn + "NaN");
  return (
    (o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (s.s = 1),
    (We = !1),
    (u = e.times(Pu(s, a + h))),
    (We = !0),
    (u = t_(u)),
    (u.s = o),
    u
  );
};
ce.toPrecision = function (e, t) {
  var r,
    a,
    u = this,
    o = u.constructor;
  return (
    e === void 0
      ? ((r = vt(u)), (a = ti(u, r <= o.toExpNeg || r >= o.toExpPos)))
      : (rr(e, 1, ol),
        t === void 0 ? (t = o.rounding) : rr(t, 0, 8),
        (u = Ke(new o(u), e, t)),
        (r = vt(u)),
        (a = ti(u, e <= r || r <= o.toExpNeg, e))),
    a
  );
};
ce.toSignificantDigits = ce.tosd = function (e, t) {
  var r = this,
    a = r.constructor;
  return (
    e === void 0
      ? ((e = a.precision), (t = a.rounding))
      : (rr(e, 1, ol), t === void 0 ? (t = a.rounding) : rr(t, 0, 8)),
    Ke(new a(r), e, t)
  );
};
ce.toString =
  ce.valueOf =
  ce.val =
  ce.toJSON =
  ce[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = vt(e),
        r = e.constructor;
      return ti(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function e_(e, t) {
  var r,
    a,
    u,
    o,
    f,
    s,
    v,
    h,
    m = e.constructor,
    p = m.precision;
  if (!e.s || !t.s) return (t.s || (t = new m(e)), We ? Ke(t, p) : t);
  if (
    ((v = e.d),
    (h = t.d),
    (f = e.e),
    (u = t.e),
    (v = v.slice()),
    (o = f - u),
    o)
  ) {
    for (
      o < 0
        ? ((a = v), (o = -o), (s = h.length))
        : ((a = h), (u = f), (s = v.length)),
        f = Math.ceil(p / Ze),
        s = f > s ? f + 1 : s + 1,
        o > s && ((o = s), (a.length = 1)),
        a.reverse();
      o--;
    )
      a.push(0);
    a.reverse();
  }
  for (
    s = v.length,
      o = h.length,
      s - o < 0 && ((o = s), (a = h), (h = v), (v = a)),
      r = 0;
    o;
  )
    ((r = ((v[--o] = v[o] + h[o] + r) / St) | 0), (v[o] %= St));
  for (r && (v.unshift(r), ++u), s = v.length; v[--s] == 0; ) v.pop();
  return ((t.d = v), (t.e = u), We ? Ke(t, p) : t);
}
function rr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Fa + e);
}
function tr(e) {
  var t,
    r,
    a,
    u = e.length - 1,
    o = "",
    f = e[0];
  if (u > 0) {
    for (o += f, t = 1; t < u; t++)
      ((a = e[t] + ""), (r = Ze - a.length), r && (o += fa(r)), (o += a));
    ((f = e[t]), (a = f + ""), (r = Ze - a.length), r && (o += fa(r)));
  } else if (f === 0) return "0";
  for (; f % 10 === 0; ) f /= 10;
  return o + f;
}
var Mr = (function () {
  function e(a, u) {
    var o,
      f = 0,
      s = a.length;
    for (a = a.slice(); s--; )
      ((o = a[s] * u + f), (a[s] = (o % St) | 0), (f = (o / St) | 0));
    return (f && a.unshift(f), a);
  }
  function t(a, u, o, f) {
    var s, v;
    if (o != f) v = o > f ? 1 : -1;
    else
      for (s = v = 0; s < o; s++)
        if (a[s] != u[s]) {
          v = a[s] > u[s] ? 1 : -1;
          break;
        }
    return v;
  }
  function r(a, u, o) {
    for (var f = 0; o--; )
      ((a[o] -= f), (f = a[o] < u[o] ? 1 : 0), (a[o] = f * St + a[o] - u[o]));
    for (; !a[0] && a.length > 1; ) a.shift();
  }
  return function (a, u, o, f) {
    var s,
      v,
      h,
      m,
      p,
      g,
      b,
      O,
      S,
      w,
      _,
      M,
      T,
      N,
      z,
      R,
      B,
      X,
      le = a.constructor,
      ae = a.s == u.s ? 1 : -1,
      V = a.d,
      ne = u.d;
    if (!a.s) return new le(a);
    if (!u.s) throw Error(qn + "Division by zero");
    for (
      v = a.e - u.e,
        B = ne.length,
        z = V.length,
        b = new le(ae),
        O = b.d = [],
        h = 0;
      ne[h] == (V[h] || 0);
    )
      ++h;
    if (
      (ne[h] > (V[h] || 0) && --v,
      o == null
        ? (M = o = le.precision)
        : f
          ? (M = o + (vt(a) - vt(u)) + 1)
          : (M = o),
      M < 0)
    )
      return new le(0);
    if (((M = (M / Ze + 2) | 0), (h = 0), B == 1))
      for (m = 0, ne = ne[0], M++; (h < z || m) && M--; h++)
        ((T = m * St + (V[h] || 0)), (O[h] = (T / ne) | 0), (m = (T % ne) | 0));
    else {
      for (
        m = (St / (ne[0] + 1)) | 0,
          m > 1 &&
            ((ne = e(ne, m)), (V = e(V, m)), (B = ne.length), (z = V.length)),
          N = B,
          S = V.slice(0, B),
          w = S.length;
        w < B;
      )
        S[w++] = 0;
      ((X = ne.slice()), X.unshift(0), (R = ne[0]), ne[1] >= St / 2 && ++R);
      do
        ((m = 0),
          (s = t(ne, S, B, w)),
          s < 0
            ? ((_ = S[0]),
              B != w && (_ = _ * St + (S[1] || 0)),
              (m = (_ / R) | 0),
              m > 1
                ? (m >= St && (m = St - 1),
                  (p = e(ne, m)),
                  (g = p.length),
                  (w = S.length),
                  (s = t(p, S, g, w)),
                  s == 1 && (m--, r(p, B < g ? X : ne, g)))
                : (m == 0 && (s = m = 1), (p = ne.slice())),
              (g = p.length),
              g < w && p.unshift(0),
              r(S, p, w),
              s == -1 &&
                ((w = S.length),
                (s = t(ne, S, B, w)),
                s < 1 && (m++, r(S, B < w ? X : ne, w))),
              (w = S.length))
            : s === 0 && (m++, (S = [0])),
          (O[h++] = m),
          s && S[0] ? (S[w++] = V[N] || 0) : ((S = [V[N]]), (w = 1)));
      while ((N++ < z || S[0] !== void 0) && M--);
    }
    return (O[0] || O.shift(), (b.e = v), Ke(b, f ? o + vt(b) + 1 : o));
  };
})();
function t_(e, t) {
  var r,
    a,
    u,
    o,
    f,
    s,
    v = 0,
    h = 0,
    m = e.constructor,
    p = m.precision;
  if (vt(e) > 16) throw Error(Gy + vt(e));
  if (!e.s) return new m(pn);
  for (We = !1, s = p, f = new m(0.03125); e.abs().gte(0.1); )
    ((e = e.times(f)), (h += 5));
  for (
    a = ((Math.log(Ia(2, h)) / Math.LN10) * 2 + 5) | 0,
      s += a,
      r = u = o = new m(pn),
      m.precision = s;
    ;
  ) {
    if (
      ((u = Ke(u.times(e), s)),
      (r = r.times(++v)),
      (f = o.plus(Mr(u, r, s))),
      tr(f.d).slice(0, s) === tr(o.d).slice(0, s))
    ) {
      for (; h--; ) o = Ke(o.times(o), s);
      return ((m.precision = p), t == null ? ((We = !0), Ke(o, p)) : o);
    }
    o = f;
  }
}
function vt(e) {
  for (var t = e.e * Ze, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function $h(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      (We = !0),
      r && (e.precision = r),
      Error(qn + "LN10 precision limit exceeded")
    );
  return Ke(new e(e.LN10), t);
}
function fa(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Pu(e, t) {
  var r,
    a,
    u,
    o,
    f,
    s,
    v,
    h,
    m,
    p = 1,
    g = 10,
    b = e,
    O = b.d,
    S = b.constructor,
    w = S.precision;
  if (b.s < 1) throw Error(qn + (b.s ? "NaN" : "-Infinity"));
  if (b.eq(pn)) return new S(0);
  if ((t == null ? ((We = !1), (h = w)) : (h = t), b.eq(10)))
    return (t == null && (We = !0), $h(S, h));
  if (
    ((h += g),
    (S.precision = h),
    (r = tr(O)),
    (a = r.charAt(0)),
    (o = vt(b)),
    Math.abs(o) < 15e14)
  ) {
    for (; (a < 7 && a != 1) || (a == 1 && r.charAt(1) > 3); )
      ((b = b.times(e)), (r = tr(b.d)), (a = r.charAt(0)), p++);
    ((o = vt(b)),
      a > 1 ? ((b = new S("0." + r)), o++) : (b = new S(a + "." + r.slice(1))));
  } else
    return (
      (v = $h(S, h + 2, w).times(o + "")),
      (b = Pu(new S(a + "." + r.slice(1)), h - g).plus(v)),
      (S.precision = w),
      t == null ? ((We = !0), Ke(b, w)) : b
    );
  for (
    s = f = b = Mr(b.minus(pn), b.plus(pn), h), m = Ke(b.times(b), h), u = 3;
    ;
  ) {
    if (
      ((f = Ke(f.times(m), h)),
      (v = s.plus(Mr(f, new S(u), h))),
      tr(v.d).slice(0, h) === tr(s.d).slice(0, h))
    )
      return (
        (s = s.times(2)),
        o !== 0 && (s = s.plus($h(S, h + 2, w).times(o + ""))),
        (s = Mr(s, new S(p), h)),
        (S.precision = w),
        t == null ? ((We = !0), Ke(s, w)) : s
      );
    ((s = v), (u += 2));
  }
}
function AO(e, t) {
  var r, a, u;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (a = t.search(/e/i)) > 0
        ? (r < 0 && (r = a), (r += +t.slice(a + 1)), (t = t.substring(0, a)))
        : r < 0 && (r = t.length),
      a = 0;
    t.charCodeAt(a) === 48;
  )
    ++a;
  for (u = t.length; t.charCodeAt(u - 1) === 48; ) --u;
  if (((t = t.slice(a, u)), t)) {
    if (
      ((u -= a),
      (r = r - a - 1),
      (e.e = cl(r / Ze)),
      (e.d = []),
      (a = (r + 1) % Ze),
      r < 0 && (a += Ze),
      a < u)
    ) {
      for (a && e.d.push(+t.slice(0, a)), u -= Ze; a < u; )
        e.d.push(+t.slice(a, (a += Ze)));
      ((t = t.slice(a)), (a = Ze - t.length));
    } else a -= u;
    for (; a--; ) t += "0";
    if ((e.d.push(+t), We && (e.e > of || e.e < -of))) throw Error(Gy + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function Ke(e, t, r) {
  var a,
    u,
    o,
    f,
    s,
    v,
    h,
    m,
    p = e.d;
  for (f = 1, o = p[0]; o >= 10; o /= 10) f++;
  if (((a = t - f), a < 0)) ((a += Ze), (u = t), (h = p[(m = 0)]));
  else {
    if (((m = Math.ceil((a + 1) / Ze)), (o = p.length), m >= o)) return e;
    for (h = o = p[m], f = 1; o >= 10; o /= 10) f++;
    ((a %= Ze), (u = a - Ze + f));
  }
  if (
    (r !== void 0 &&
      ((o = Ia(10, f - u - 1)),
      (s = ((h / o) % 10) | 0),
      (v = t < 0 || p[m + 1] !== void 0 || h % o),
      (v =
        r < 4
          ? (s || v) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : s > 5 ||
            (s == 5 &&
              (r == 4 ||
                v ||
                (r == 6 &&
                  ((a > 0 ? (u > 0 ? h / Ia(10, f - u) : 0) : p[m - 1]) % 10) &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !p[0])
  )
    return (
      v
        ? ((o = vt(e)),
          (p.length = 1),
          (t = t - o - 1),
          (p[0] = Ia(10, (Ze - (t % Ze)) % Ze)),
          (e.e = cl(-t / Ze) || 0))
        : ((p.length = 1), (p[0] = e.e = e.s = 0)),
      e
    );
  if (
    (a == 0
      ? ((p.length = m), (o = 1), m--)
      : ((p.length = m + 1),
        (o = Ia(10, Ze - a)),
        (p[m] = u > 0 ? (((h / Ia(10, f - u)) % Ia(10, u)) | 0) * o : 0)),
    v)
  )
    for (;;)
      if (m == 0) {
        (p[0] += o) == St && ((p[0] = 1), ++e.e);
        break;
      } else {
        if (((p[m] += o), p[m] != St)) break;
        ((p[m--] = 0), (o = 1));
      }
  for (a = p.length; p[--a] === 0; ) p.pop();
  if (We && (e.e > of || e.e < -of)) throw Error(Gy + vt(e));
  return e;
}
function n_(e, t) {
  var r,
    a,
    u,
    o,
    f,
    s,
    v,
    h,
    m,
    p,
    g = e.constructor,
    b = g.precision;
  if (!e.s || !t.s)
    return (t.s ? (t.s = -t.s) : (t = new g(e)), We ? Ke(t, b) : t);
  if (
    ((v = e.d),
    (p = t.d),
    (a = t.e),
    (h = e.e),
    (v = v.slice()),
    (f = h - a),
    f)
  ) {
    for (
      m = f < 0,
        m
          ? ((r = v), (f = -f), (s = p.length))
          : ((r = p), (a = h), (s = v.length)),
        u = Math.max(Math.ceil(b / Ze), s) + 2,
        f > u && ((f = u), (r.length = 1)),
        r.reverse(),
        u = f;
      u--;
    )
      r.push(0);
    r.reverse();
  } else {
    for (u = v.length, s = p.length, m = u < s, m && (s = u), u = 0; u < s; u++)
      if (v[u] != p[u]) {
        m = v[u] < p[u];
        break;
      }
    f = 0;
  }
  for (
    m && ((r = v), (v = p), (p = r), (t.s = -t.s)),
      s = v.length,
      u = p.length - s;
    u > 0;
    --u
  )
    v[s++] = 0;
  for (u = p.length; u > f; ) {
    if (v[--u] < p[u]) {
      for (o = u; o && v[--o] === 0; ) v[o] = St - 1;
      (--v[o], (v[u] += St));
    }
    v[u] -= p[u];
  }
  for (; v[--s] === 0; ) v.pop();
  for (; v[0] === 0; v.shift()) --a;
  return v[0] ? ((t.d = v), (t.e = a), We ? Ke(t, b) : t) : new g(0);
}
function ti(e, t, r) {
  var a,
    u = vt(e),
    o = tr(e.d),
    f = o.length;
  return (
    t
      ? (r && (a = r - f) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + fa(a))
          : f > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (u < 0 ? "e" : "e+") + u))
      : u < 0
        ? ((o = "0." + fa(-u - 1) + o), r && (a = r - f) > 0 && (o += fa(a)))
        : u >= f
          ? ((o += fa(u + 1 - f)),
            r && (a = r - u - 1) > 0 && (o = o + "." + fa(a)))
          : ((a = u + 1) < f && (o = o.slice(0, a) + "." + o.slice(a)),
            r && (a = r - f) > 0 && (u + 1 === f && (o += "."), (o += fa(a)))),
    e.s < 0 ? "-" + o : o
  );
}
function wO(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function r_(e) {
  var t, r, a;
  function u(o) {
    var f = this;
    if (!(f instanceof u)) return new u(o);
    if (((f.constructor = u), o instanceof u)) {
      ((f.s = o.s), (f.e = o.e), (f.d = (o = o.d) ? o.slice() : o));
      return;
    }
    if (typeof o == "number") {
      if (o * 0 !== 0) throw Error(Fa + o);
      if (o > 0) f.s = 1;
      else if (o < 0) ((o = -o), (f.s = -1));
      else {
        ((f.s = 0), (f.e = 0), (f.d = [0]));
        return;
      }
      if (o === ~~o && o < 1e7) {
        ((f.e = 0), (f.d = [o]));
        return;
      }
      return AO(f, o.toString());
    } else if (typeof o != "string") throw Error(Fa + o);
    if (
      (o.charCodeAt(0) === 45 ? ((o = o.slice(1)), (f.s = -1)) : (f.s = 1),
      y6.test(o))
    )
      AO(f, o);
    else throw Error(Fa + o);
  }
  if (
    ((u.prototype = ce),
    (u.ROUND_UP = 0),
    (u.ROUND_DOWN = 1),
    (u.ROUND_CEIL = 2),
    (u.ROUND_FLOOR = 3),
    (u.ROUND_HALF_UP = 4),
    (u.ROUND_HALF_DOWN = 5),
    (u.ROUND_HALF_EVEN = 6),
    (u.ROUND_HALF_CEIL = 7),
    (u.ROUND_HALF_FLOOR = 8),
    (u.clone = r_),
    (u.config = u.set = p6),
    e === void 0 && (e = {}),
    e)
  )
    for (
      a = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < a.length;
    )
      e.hasOwnProperty((r = a[t++])) || (e[r] = this[r]);
  return (u.config(e), u);
}
function p6(e) {
  if (!e || typeof e != "object") throw Error(qn + "Object expected");
  var t,
    r,
    a,
    u = [
      "precision",
      1,
      ol,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < u.length; t += 3)
    if ((a = e[(r = u[t])]) !== void 0)
      if (cl(a) === a && a >= u[t + 1] && a <= u[t + 2]) this[r] = a;
      else throw Error(Fa + r + ": " + a);
  if ((a = e[(r = "LN10")]) !== void 0)
    if (a == Math.LN10) this[r] = new this(a);
    else throw Error(Fa + r + ": " + a);
  return this;
}
var Xy = r_(m6);
pn = new Xy(1);
const Ue = Xy;
var g6 = (e) => e,
  a_ = {},
  i_ = (e) => e === a_,
  EO = (e) =>
    function t() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          i_(arguments.length <= 0 ? void 0 : arguments[0]))
        ? t
        : e(...arguments);
    },
  l_ = (e, t) =>
    e === 1
      ? t
      : EO(function () {
          for (var r = arguments.length, a = new Array(r), u = 0; u < r; u++)
            a[u] = arguments[u];
          var o = a.filter((f) => f !== a_).length;
          return o >= e
            ? t(...a)
            : l_(
                e - o,
                EO(function () {
                  for (
                    var f = arguments.length, s = new Array(f), v = 0;
                    v < f;
                    v++
                  )
                    s[v] = arguments[v];
                  var h = a.map((m) => (i_(m) ? s.shift() : m));
                  return t(...h, ...s);
                }),
              );
        }),
  Xf = (e) => l_(e.length, e),
  zm = (e, t) => {
    for (var r = [], a = e; a < t; ++a) r[a - e] = a;
    return r;
  },
  b6 = Xf((e, t) =>
    Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map((r) => t[r])
          .map(e),
  ),
  x6 = function () {
    for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
      r[a] = arguments[a];
    if (!r.length) return g6;
    var u = r.reverse(),
      o = u[0],
      f = u.slice(1);
    return function () {
      return f.reduce((s, v) => v(s), o(...arguments));
    };
  },
  Rm = (e) => (Array.isArray(e) ? e.reverse() : e.split("").reverse().join("")),
  u_ = (e) => {
    var t = null,
      r = null;
    return function () {
      for (var a = arguments.length, u = new Array(a), o = 0; o < a; o++)
        u[o] = arguments[o];
      return (
        (t &&
          u.every((f, s) => {
            var v;
            return f === ((v = t) === null || v === void 0 ? void 0 : v[s]);
          })) ||
          ((t = u), (r = e(...u))),
        r
      );
    };
  };
function o_(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new Ue(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function c_(e, t, r) {
  for (var a = new Ue(e), u = 0, o = []; a.lt(t) && u < 1e5; )
    (o.push(a.toNumber()), (a = a.add(r)), u++);
  return o;
}
Xf((e, t, r) => {
  var a = +e,
    u = +t;
  return a + r * (u - a);
});
Xf((e, t, r) => {
  var a = t - +e;
  return ((a = a || 1 / 0), (r - e) / a);
});
Xf((e, t, r) => {
  var a = t - +e;
  return ((a = a || 1 / 0), Math.max(0, Math.min(1, (r - e) / a)));
});
var f_ = (e) => {
    var [t, r] = e,
      [a, u] = [t, r];
    return (t > r && ([a, u] = [r, t]), [a, u]);
  },
  s_ = (e, t, r) => {
    if (e.lte(0)) return new Ue(0);
    var a = o_(e.toNumber()),
      u = new Ue(10).pow(a),
      o = e.div(u),
      f = a !== 1 ? 0.05 : 0.1,
      s = new Ue(Math.ceil(o.div(f).toNumber())).add(r).mul(f),
      v = s.mul(u);
    return t ? new Ue(v.toNumber()) : new Ue(Math.ceil(v.toNumber()));
  },
  S6 = (e, t, r) => {
    var a = new Ue(1),
      u = new Ue(e);
    if (!u.isint() && r) {
      var o = Math.abs(e);
      o < 1
        ? ((a = new Ue(10).pow(o_(e) - 1)),
          (u = new Ue(Math.floor(u.div(a).toNumber())).mul(a)))
        : o > 1 && (u = new Ue(Math.floor(e)));
    } else
      e === 0
        ? (u = new Ue(Math.floor((t - 1) / 2)))
        : r || (u = new Ue(Math.floor(e)));
    var f = Math.floor((t - 1) / 2),
      s = x6(
        b6((v) => u.add(new Ue(v - f).mul(a)).toNumber()),
        zm,
      );
    return s(0, t);
  },
  d_ = function (t, r, a, u) {
    var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((r - t) / (a - 1)))
      return { step: new Ue(0), tickMin: new Ue(0), tickMax: new Ue(0) };
    var f = s_(new Ue(r).sub(t).div(a - 1), u, o),
      s;
    t <= 0 && r >= 0
      ? (s = new Ue(0))
      : ((s = new Ue(t).add(r).div(2)), (s = s.sub(new Ue(s).mod(f))));
    var v = Math.ceil(s.sub(t).div(f).toNumber()),
      h = Math.ceil(new Ue(r).sub(s).div(f).toNumber()),
      m = v + h + 1;
    return m > a
      ? d_(t, r, a, u, o + 1)
      : (m < a &&
          ((h = r > 0 ? h + (a - m) : h), (v = r > 0 ? v : v + (a - m))),
        {
          step: f,
          tickMin: s.sub(new Ue(v).mul(f)),
          tickMax: s.add(new Ue(h).mul(f)),
        });
  };
function O6(e) {
  var [t, r] = e,
    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(a, 2),
    [f, s] = f_([t, r]);
  if (f === -1 / 0 || s === 1 / 0) {
    var v =
      s === 1 / 0
        ? [f, ...zm(0, a - 1).map(() => 1 / 0)]
        : [...zm(0, a - 1).map(() => -1 / 0), s];
    return t > r ? Rm(v) : v;
  }
  if (f === s) return S6(f, a, u);
  var { step: h, tickMin: m, tickMax: p } = d_(f, s, o, u, 0),
    g = c_(m, p.add(new Ue(0.1).mul(h)), h);
  return t > r ? Rm(g) : g;
}
function A6(e, t) {
  var [r, a] = e,
    u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    [o, f] = f_([r, a]);
  if (o === -1 / 0 || f === 1 / 0) return [r, a];
  if (o === f) return [o];
  var s = Math.max(t, 2),
    v = s_(new Ue(f).sub(o).div(s - 1), u, 0),
    h = [...c_(new Ue(o), new Ue(f), v), f];
  return (u === !1 && (h = h.map((m) => Math.round(m))), r > a ? Rm(h) : h);
}
var w6 = u_(O6),
  E6 = u_(A6),
  v_ = (e) => e.rootProps.maxBarSize,
  _6 = (e) => e.rootProps.barGap,
  h_ = (e) => e.rootProps.barCategoryGap,
  T6 = (e) => e.rootProps.barSize,
  Vf = (e) => e.rootProps.stackOffset,
  Vy = (e) => e.options.chartName,
  Zy = (e) => e.rootProps.syncId,
  m_ = (e) => e.rootProps.syncMethod,
  Qy = (e) => e.options.eventEmitter,
  Ar = {
    allowDuplicatedCategory: !0,
    angleAxisId: 0,
    reversed: !1,
    scale: "auto",
    tick: !0,
    type: "category",
  },
  mn = {
    allowDataOverflow: !1,
    allowDuplicatedCategory: !0,
    radiusAxisId: 0,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    type: "number",
  },
  Zf = (e, t) => {
    if (!(!e || !t)) return e != null && e.reversed ? [t[1], t[0]] : t;
  },
  M6 = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    domain: void 0,
    id: Ar.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: Ar.reversed,
    scale: Ar.scale,
    tick: Ar.tick,
    tickCount: void 0,
    ticks: void 0,
    type: Ar.type,
    unit: void 0,
  },
  D6 = {
    allowDataOverflow: mn.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: mn.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: mn.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: mn.scale,
    tick: mn.tick,
    tickCount: mn.tickCount,
    ticks: void 0,
    type: mn.type,
    unit: void 0,
  },
  j6 = {
    allowDataOverflow: !1,
    allowDecimals: !1,
    allowDuplicatedCategory: Ar.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: Ar.angleAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: Ar.scale,
    tick: Ar.tick,
    tickCount: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0,
  },
  C6 = {
    allowDataOverflow: mn.allowDataOverflow,
    allowDecimals: !1,
    allowDuplicatedCategory: mn.allowDuplicatedCategory,
    dataKey: void 0,
    domain: void 0,
    id: mn.radiusAxisId,
    includeHidden: !1,
    name: void 0,
    reversed: !1,
    scale: mn.scale,
    tick: mn.tick,
    tickCount: mn.tickCount,
    ticks: void 0,
    type: "category",
    unit: void 0,
  },
  Wy = (e, t) =>
    e.polarAxis.angleAxis[t] != null
      ? e.polarAxis.angleAxis[t]
      : e.layout.layoutType === "radial"
        ? j6
        : M6,
  Fy = (e, t) =>
    e.polarAxis.radiusAxis[t] != null
      ? e.polarAxis.radiusAxis[t]
      : e.layout.layoutType === "radial"
        ? C6
        : D6,
  Qf = (e) => e.polarOptions,
  Jy = K([Nr, zr, At], wN),
  y_ = K([Qf, Jy], (e, t) => {
    if (e != null) return Vn(e.innerRadius, t, 0);
  }),
  p_ = K([Qf, Jy], (e, t) => {
    if (e != null) return Vn(e.outerRadius, t, t * 0.8);
  }),
  P6 = (e) => {
    if (e == null) return [0, 0];
    var { startAngle: t, endAngle: r } = e;
    return [t, r];
  },
  g_ = K([Qf], P6);
K([Wy, g_], Zf);
var b_ = K([Jy, y_, p_], (e, t, r) => {
  if (!(e == null || t == null || r == null)) return [t, r];
});
K([Fy, b_], Zf);
var x_ = K([Re, Qf, y_, p_, Nr, zr], (e, t, r, a, u, o) => {
    if (
      !(
        (e !== "centric" && e !== "radial") ||
        t == null ||
        r == null ||
        a == null
      )
    ) {
      var { cx: f, cy: s, startAngle: v, endAngle: h } = t;
      return {
        cx: Vn(f, u, u / 2),
        cy: Vn(s, o, o / 2),
        innerRadius: r,
        outerRadius: a,
        startAngle: v,
        endAngle: h,
        clockWise: !1,
      };
    }
  }),
  ht = (e, t) => t,
  Wf = (e, t, r) => r;
function ep(e) {
  return e?.id;
}
var gt = (e) => {
    var t = Re(e);
    return t === "horizontal"
      ? "xAxis"
      : t === "vertical"
        ? "yAxis"
        : t === "centric"
          ? "angleAxis"
          : "radiusAxis";
  },
  fl = (e) => e.tooltip.settings.axisId,
  Et = (e) => {
    var t = gt(e),
      r = fl(e);
    return Hu(e, t, r);
  },
  S_ = K([Et], (e) => e?.dataKey);
function O_(e, t, r) {
  var { chartData: a = [] } = t,
    { allowDuplicatedCategory: u, dataKey: o } = r,
    f = new Map();
  return (
    e.forEach((s) => {
      var v,
        h = (v = s.data) !== null && v !== void 0 ? v : a;
      if (!(h == null || h.length === 0)) {
        var m = ep(s);
        h.forEach((p, g) => {
          var b = o == null || u ? g : String(Ot(p, o, null)),
            O = Ot(p, s.dataKey, 0),
            S;
          (f.has(b) ? (S = f.get(b)) : (S = {}),
            Object.assign(S, { [m]: O }),
            f.set(b, S));
        });
      }
    }),
    Array.from(f.values())
  );
}
function Ff(e) {
  return e.stackId != null && e.dataKey != null;
}
function _O(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _O(Object(r), !0).forEach(function (a) {
          N6(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _O(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function N6(e, t, r) {
  return (
    (t = z6(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function z6(e) {
  var t = R6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function R6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var km = [0, "auto"],
  vn = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: void 0,
    height: 30,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: "bottom",
    padding: { left: 0, right: 0 },
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "category",
    unit: void 0,
  },
  A_ = (e, t) => e.cartesianAxis.xAxis[t],
  kr = (e, t) => {
    var r = A_(e, t);
    return r ?? vn;
  },
  hn = {
    allowDataOverflow: !1,
    allowDecimals: !0,
    allowDuplicatedCategory: !0,
    angle: 0,
    dataKey: void 0,
    domain: km,
    hide: !0,
    id: 0,
    includeHidden: !1,
    interval: "preserveEnd",
    minTickGap: 5,
    mirror: !1,
    name: void 0,
    orientation: "left",
    padding: { top: 0, bottom: 0 },
    reversed: !1,
    scale: "auto",
    tick: !0,
    tickCount: 5,
    tickFormatter: void 0,
    ticks: void 0,
    type: "number",
    unit: void 0,
    width: Lu,
  },
  w_ = (e, t) => e.cartesianAxis.yAxis[t],
  Lr = (e, t) => {
    var r = w_(e, t);
    return r ?? hn;
  },
  k6 = {
    domain: [0, "auto"],
    includeHidden: !1,
    reversed: !1,
    allowDataOverflow: !1,
    allowDuplicatedCategory: !1,
    dataKey: void 0,
    id: 0,
    name: "",
    range: [64, 64],
    scale: "auto",
    type: "number",
    unit: "",
  },
  tp = (e, t) => {
    var r = e.cartesianAxis.zAxis[t];
    return r ?? k6;
  },
  tn = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return kr(e, r);
      case "yAxis":
        return Lr(e, r);
      case "zAxis":
        return tp(e, r);
      case "angleAxis":
        return Wy(e, r);
      case "radiusAxis":
        return Fy(e, r);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  L6 = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return kr(e, r);
      case "yAxis":
        return Lr(e, r);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  Hu = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return kr(e, r);
      case "yAxis":
        return Lr(e, r);
      case "angleAxis":
        return Wy(e, r);
      case "radiusAxis":
        return Fy(e, r);
      default:
        throw new Error("Unexpected axis type: ".concat(t));
    }
  },
  E_ = (e) =>
    e.graphicalItems.cartesianItems.some((t) => t.type === "bar") ||
    e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function __(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var Jf = (e) => e.graphicalItems.cartesianItems,
  B6 = K([ht, Wf], __),
  T_ = (e, t, r) =>
    e.filter(r).filter((a) => (t?.includeHidden === !0 ? !0 : !a.hide)),
  Yu = K([Jf, tn, B6], T_),
  M_ = K([Yu], (e) =>
    e.filter((t) => t.type === "area" || t.type === "bar").filter(Ff),
  ),
  D_ = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0),
  j_ = K([Yu], D_),
  C_ = (e) =>
    e
      .map((t) => t.data)
      .filter(Boolean)
      .flat(1),
  U6 = K([Yu], C_),
  P_ = (e, t) => {
    var { chartData: r = [], dataStartIndex: a, dataEndIndex: u } = t;
    return e.length > 0 ? e : r.slice(a, u + 1);
  },
  np = K([U6, Gf], P_),
  N_ = (e, t, r) =>
    t?.dataKey != null
      ? e.map((a) => ({ value: Ot(a, t.dataKey) }))
      : r.length > 0
        ? r
            .map((a) => a.dataKey)
            .flatMap((a) => e.map((u) => ({ value: Ot(u, a) })))
        : e.map((a) => ({ value: a })),
  es = K([np, tn, Yu], N_);
function z_(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function oi(e) {
  return e
    .filter((t) => Ft(t) || t instanceof Date)
    .map(Number)
    .filter((t) => bn(t) === !1);
}
function $6(e, t, r) {
  return !r || typeof t != "number" || bn(t)
    ? []
    : r.length
      ? oi(
          r.flatMap((a) => {
            var u = Ot(e, a.dataKey),
              o,
              f;
            if (
              (Array.isArray(u) ? ([o, f] = u) : (o = f = u),
              !(!Sn(o) || !Sn(f)))
            )
              return [t - o, t + f];
          }),
        )
      : [];
}
var q6 = K([M_, Gf, Et], O_),
  R_ = (e, t, r) => {
    var a = {},
      u = t.reduce(
        (o, f) => (
          f.stackId == null ||
            (o[f.stackId] == null && (o[f.stackId] = []), o[f.stackId].push(f)),
          o
        ),
        a,
      );
    return Object.fromEntries(
      Object.entries(u).map((o) => {
        var [f, s] = o,
          v = s.map(ep);
        return [f, { stackedData: $N(e, v, r), graphicalItems: s }];
      }),
    );
  },
  Lm = K([q6, M_, Vf], R_),
  k_ = (e, t, r) => {
    var { dataStartIndex: a, dataEndIndex: u } = t;
    if (r !== "zAxis") {
      var o = KN(e, a, u);
      if (!(o != null && o[0] === 0 && o[1] === 0)) return o;
    }
  },
  H6 = K([Lm, Oa, ht], k_),
  L_ = (e, t, r, a, u) =>
    r.length > 0
      ? e
          .flatMap((o) =>
            r.flatMap((f) => {
              var s,
                v,
                h =
                  (s = a[f.id]) === null || s === void 0
                    ? void 0
                    : s.filter((p) => z_(u, p)),
                m = Ot(
                  o,
                  (v = t.dataKey) !== null && v !== void 0 ? v : f.dataKey,
                );
              return { value: m, errorDomain: $6(o, m, h) };
            }),
          )
          .filter(Boolean)
      : t?.dataKey != null
        ? e.map((o) => ({ value: Ot(o, t.dataKey), errorDomain: [] }))
        : e.map((o) => ({ value: o, errorDomain: [] })),
  ts = (e) => e.errorBars,
  B_ = (e, t, r) =>
    e
      .flatMap((a) => t[a.id])
      .filter(Boolean)
      .filter((a) => z_(r, a));
K([j_, ts, ht], B_);
var Y6 = K([np, tn, j_, ts, ht], L_);
function I6(e) {
  var { value: t } = e;
  if (Ft(t) || t instanceof Date) return t;
}
var TO = (e) => {
    var t = e.flatMap((a) => [a.value, a.errorDomain]).flat(1),
      r = oi(t);
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  K6 = (e, t, r) => {
    var a = e.map(I6).filter((u) => u != null);
    return r && (t.dataKey == null || (t.allowDuplicatedCategory && ZA(a)))
      ? gE(0, e.length)
      : t.allowDuplicatedCategory
        ? a
        : Array.from(new Set(a));
  },
  rp = (e) => {
    var t;
    if (e == null || !("domain" in e)) return km;
    if (e.domain != null) return e.domain;
    if (e.ticks != null) {
      if (e.type === "number") {
        var r = oi(e.ticks);
        return [Math.min(...r), Math.max(...r)];
      }
      if (e.type === "category") return e.ticks.map(String);
    }
    return (t = e?.domain) !== null && t !== void 0 ? t : km;
  },
  ff = function () {
    for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
      r[a] = arguments[a];
    var u = r.filter(Boolean);
    if (u.length !== 0) {
      var o = u.flat(),
        f = Math.min(...o),
        s = Math.max(...o);
      return [f, s];
    }
  },
  U_ = (e) => e.referenceElements.dots,
  sl = (e, t, r) =>
    e
      .filter((a) => a.ifOverflow === "extendDomain")
      .filter((a) => (t === "xAxis" ? a.xAxisId === r : a.yAxisId === r)),
  G6 = K([U_, ht, Wf], sl),
  $_ = (e) => e.referenceElements.areas,
  X6 = K([$_, ht, Wf], sl),
  q_ = (e) => e.referenceElements.lines,
  V6 = K([q_, ht, Wf], sl),
  H_ = (e, t) => {
    var r = oi(e.map((a) => (t === "xAxis" ? a.x : a.y)));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  Z6 = K(G6, ht, H_),
  Y_ = (e, t) => {
    var r = oi(
      e.flatMap((a) => [
        t === "xAxis" ? a.x1 : a.y1,
        t === "xAxis" ? a.x2 : a.y2,
      ]),
    );
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  Q6 = K([X6, ht], Y_),
  I_ = (e, t) => {
    var r = oi(e.map((a) => (t === "xAxis" ? a.x : a.y)));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  },
  W6 = K(V6, ht, I_),
  F6 = K(Z6, W6, Q6, (e, t, r) => ff(e, r, t)),
  J6 = K([tn], rp),
  K_ = (e, t, r, a, u, o, f) => {
    var s = v6(t, e.allowDataOverflow);
    if (s != null) return s;
    var v =
        (o === "vertical" && f === "xAxis") ||
        (o === "horizontal" && f === "yAxis"),
      h = v ? ff(r, u, TO(a)) : ff(u, TO(a));
    return h6(t, h, e.allowDataOverflow);
  },
  e5 = K([tn, J6, H6, Y6, F6, Re, ht], K_),
  t5 = [0, 1],
  G_ = (e, t, r, a, u, o, f) => {
    if (!((e == null || r == null || r.length === 0) && f === void 0)) {
      var { dataKey: s, type: v } = e,
        h = ba(t, o);
      return h && s == null
        ? gE(0, r.length)
        : v === "category"
          ? K6(a, e, h)
          : u === "expand"
            ? t5
            : f;
    }
  },
  ap = K([tn, Re, np, es, Vf, ht, e5], G_),
  X_ = (e, t, r, a, u) => {
    if (e != null) {
      var { scale: o, type: f } = e;
      if (o === "auto")
        return t === "radial" && u === "radiusAxis"
          ? "band"
          : t === "radial" && u === "angleAxis"
            ? "linear"
            : f === "category" &&
                a &&
                (a.indexOf("LineChart") >= 0 ||
                  a.indexOf("AreaChart") >= 0 ||
                  (a.indexOf("ComposedChart") >= 0 && !r))
              ? "point"
              : f === "category"
                ? "band"
                : "linear";
      if (typeof o == "string") {
        var s = "scale".concat(zu(o));
        return s in xu ? s : "point";
      }
    }
  },
  Iu = K([tn, Re, E_, Vy, ht], X_);
function n5(e) {
  if (e != null) {
    if (e in xu) return xu[e]();
    var t = "scale".concat(zu(e));
    if (t in xu) return xu[t]();
  }
}
function ip(e, t, r, a) {
  if (!(r == null || a == null)) {
    if (typeof e.scale == "function") return e.scale.copy().domain(r).range(a);
    var u = n5(t);
    if (u != null) {
      var o = u.domain(r).range(a);
      return (RN(o), o);
    }
  }
}
var V_ = (e, t, r) => {
    var a = rp(t);
    if (!(r !== "auto" && r !== "linear")) {
      if (
        t != null &&
        t.tickCount &&
        Array.isArray(a) &&
        (a[0] === "auto" || a[1] === "auto") &&
        al(e)
      )
        return w6(e, t.tickCount, t.allowDecimals);
      if (t != null && t.tickCount && t.type === "number" && al(e))
        return E6(e, t.tickCount, t.allowDecimals);
    }
  },
  lp = K([ap, Hu, Iu], V_),
  Z_ = (e, t, r, a) => {
    if (
      a !== "angleAxis" &&
      e?.type === "number" &&
      al(t) &&
      Array.isArray(r) &&
      r.length > 0
    ) {
      var u = t[0],
        o = r[0],
        f = t[1],
        s = r[r.length - 1];
      return [Math.min(u, o), Math.max(f, s)];
    }
    return t;
  },
  r5 = K([tn, ap, lp, ht], Z_),
  a5 = K(es, tn, (e, t) => {
    if (!(!t || t.type !== "number")) {
      var r = 1 / 0,
        a = Array.from(oi(e.map((s) => s.value))).sort((s, v) => s - v);
      if (a.length < 2) return 1 / 0;
      var u = a[a.length - 1] - a[0];
      if (u === 0) return 1 / 0;
      for (var o = 0; o < a.length - 1; o++) {
        var f = a[o + 1] - a[o];
        r = Math.min(r, f);
      }
      return r / u;
    }
  }),
  Q_ = K(
    a5,
    Re,
    h_,
    At,
    (e, t, r, a) => a,
    (e, t, r, a, u) => {
      if (!Sn(e)) return 0;
      var o = t === "vertical" ? a.height : a.width;
      if (u === "gap") return (e * o) / 2;
      if (u === "no-gap") {
        var f = Vn(r, e * o),
          s = (e * o) / 2;
        return s - f - ((s - f) / o) * f;
      }
      return 0;
    },
  ),
  i5 = (e, t) => {
    var r = kr(e, t);
    return r == null || typeof r.padding != "string"
      ? 0
      : Q_(e, "xAxis", t, r.padding);
  },
  l5 = (e, t) => {
    var r = Lr(e, t);
    return r == null || typeof r.padding != "string"
      ? 0
      : Q_(e, "yAxis", t, r.padding);
  },
  u5 = K(kr, i5, (e, t) => {
    var r, a;
    if (e == null) return { left: 0, right: 0 };
    var { padding: u } = e;
    return typeof u == "string"
      ? { left: t, right: t }
      : {
          left: ((r = u.left) !== null && r !== void 0 ? r : 0) + t,
          right: ((a = u.right) !== null && a !== void 0 ? a : 0) + t,
        };
  }),
  o5 = K(Lr, l5, (e, t) => {
    var r, a;
    if (e == null) return { top: 0, bottom: 0 };
    var { padding: u } = e;
    return typeof u == "string"
      ? { top: t, bottom: t }
      : {
          top: ((r = u.top) !== null && r !== void 0 ? r : 0) + t,
          bottom: ((a = u.bottom) !== null && a !== void 0 ? a : 0) + t,
        };
  }),
  c5 = K([At, u5, Rf, zf, (e, t, r) => r], (e, t, r, a, u) => {
    var { padding: o } = a;
    return u
      ? [o.left, r.width - o.right]
      : [e.left + t.left, e.left + e.width - t.right];
  }),
  f5 = K([At, Re, o5, Rf, zf, (e, t, r) => r], (e, t, r, a, u, o) => {
    var { padding: f } = u;
    return o
      ? [a.height - f.bottom, f.top]
      : t === "horizontal"
        ? [e.top + e.height - r.bottom, e.top + r.top]
        : [e.top + r.top, e.top + e.height - r.bottom];
  }),
  Ku = (e, t, r, a) => {
    var u;
    switch (t) {
      case "xAxis":
        return c5(e, r, a);
      case "yAxis":
        return f5(e, r, a);
      case "zAxis":
        return (u = tp(e, r)) === null || u === void 0 ? void 0 : u.range;
      case "angleAxis":
        return g_(e);
      case "radiusAxis":
        return b_(e, r);
      default:
        return;
    }
  },
  W_ = K([tn, Ku], Zf),
  ha = K([tn, Iu, r5, W_], ip);
K([Yu, ts, ht], B_);
function F_(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var ns = (e, t) => t,
  rs = (e, t, r) => r,
  s5 = K(Pf, ns, rs, (e, t, r) =>
    e
      .filter((a) => a.orientation === t)
      .filter((a) => a.mirror === r)
      .sort(F_),
  ),
  d5 = K(Nf, ns, rs, (e, t, r) =>
    e
      .filter((a) => a.orientation === t)
      .filter((a) => a.mirror === r)
      .sort(F_),
  ),
  J_ = (e, t) => ({ width: e.width, height: t.height }),
  v5 = (e, t) => {
    var r = typeof t.width == "number" ? t.width : Lu;
    return { width: r, height: e.height };
  },
  e2 = K(At, kr, J_),
  h5 = (e, t, r) => {
    switch (t) {
      case "top":
        return e.top;
      case "bottom":
        return r - e.bottom;
      default:
        return 0;
    }
  },
  m5 = (e, t, r) => {
    switch (t) {
      case "left":
        return e.left;
      case "right":
        return r - e.right;
      default:
        return 0;
    }
  },
  y5 = K(zr, At, s5, ns, rs, (e, t, r, a, u) => {
    var o = {},
      f;
    return (
      r.forEach((s) => {
        var v = J_(t, s);
        f == null && (f = h5(t, a, e));
        var h = (a === "top" && !u) || (a === "bottom" && u);
        ((o[s.id] = f - Number(h) * v.height), (f += (h ? -1 : 1) * v.height));
      }),
      o
    );
  }),
  p5 = K(Nr, At, d5, ns, rs, (e, t, r, a, u) => {
    var o = {},
      f;
    return (
      r.forEach((s) => {
        var v = v5(t, s);
        f == null && (f = m5(t, a, e));
        var h = (a === "left" && !u) || (a === "right" && u);
        ((o[s.id] = f - Number(h) * v.width), (f += (h ? -1 : 1) * v.width));
      }),
      o
    );
  }),
  g5 = (e, t) => {
    var r = kr(e, t);
    if (r != null) return y5(e, r.orientation, r.mirror);
  },
  b5 = K([At, kr, g5, (e, t) => t], (e, t, r, a) => {
    if (t != null) {
      var u = r?.[a];
      return u == null ? { x: e.left, y: 0 } : { x: e.left, y: u };
    }
  }),
  x5 = (e, t) => {
    var r = Lr(e, t);
    if (r != null) return p5(e, r.orientation, r.mirror);
  },
  S5 = K([At, Lr, x5, (e, t) => t], (e, t, r, a) => {
    if (t != null) {
      var u = r?.[a];
      return u == null ? { x: 0, y: e.top } : { x: u, y: e.top };
    }
  }),
  t2 = K(At, Lr, (e, t) => {
    var r = typeof t.width == "number" ? t.width : Lu;
    return { width: r, height: e.height };
  }),
  MO = (e, t, r) => {
    switch (t) {
      case "xAxis":
        return e2(e, r).width;
      case "yAxis":
        return t2(e, r).height;
      default:
        return;
    }
  },
  n2 = (e, t, r, a) => {
    if (r != null) {
      var { allowDuplicatedCategory: u, type: o, dataKey: f } = r,
        s = ba(e, a),
        v = t.map((h) => h.value);
      if (f && s && o === "category" && u && ZA(v)) return v;
    }
  },
  up = K([Re, es, tn, ht], n2),
  r2 = (e, t, r, a) => {
    if (!(r == null || r.dataKey == null)) {
      var { type: u, scale: o } = r,
        f = ba(e, a);
      if (f && (u === "number" || o !== "auto")) return t.map((s) => s.value);
    }
  },
  op = K([Re, es, Hu, ht], r2),
  DO = K([Re, L6, Iu, ha, up, op, Ku, lp, ht], (e, t, r, a, u, o, f, s, v) => {
    if (t == null) return null;
    var h = ba(e, v);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: v,
      categoricalDomain: o,
      duplicateDomain: u,
      isCategorical: h,
      niceTicks: s,
      range: f,
      realScaleType: r,
      scale: a,
    };
  }),
  O5 = (e, t, r, a, u, o, f, s, v) => {
    if (!(t == null || a == null)) {
      var h = ba(e, v),
        { type: m, ticks: p, tickCount: g } = t,
        b =
          r === "scaleBand" && typeof a.bandwidth == "function"
            ? a.bandwidth() / 2
            : 2,
        O = m === "category" && a.bandwidth ? a.bandwidth() / b : 0;
      O =
        v === "angleAxis" && o != null && o.length >= 2
          ? Wt(o[0] - o[1]) * 2 * O
          : O;
      var S = p || u;
      if (S) {
        var w = S.map((_, M) => {
          var T = f ? f.indexOf(_) : _;
          return { index: M, coordinate: a(T) + O, value: _, offset: O };
        });
        return w.filter((_) => !bn(_.coordinate));
      }
      return h && s
        ? s.map((_, M) => ({
            coordinate: a(_) + O,
            value: _,
            index: M,
            offset: O,
          }))
        : a.ticks
          ? a
              .ticks(g)
              .map((_) => ({ coordinate: a(_) + O, value: _, offset: O }))
          : a
              .domain()
              .map((_, M) => ({
                coordinate: a(_) + O,
                value: f ? f[_] : _,
                index: M,
                offset: O,
              }));
    }
  },
  a2 = K([Re, Hu, Iu, ha, lp, Ku, up, op, ht], O5),
  A5 = (e, t, r, a, u, o, f) => {
    if (!(t == null || r == null || a == null || a[0] === a[1])) {
      var s = ba(e, f),
        { tickCount: v } = t,
        h = 0;
      return (
        (h = f === "angleAxis" && a?.length >= 2 ? Wt(a[0] - a[1]) * 2 * h : h),
        s && o
          ? o.map((m, p) => ({
              coordinate: r(m) + h,
              value: m,
              index: p,
              offset: h,
            }))
          : r.ticks
            ? r
                .ticks(v)
                .map((m) => ({ coordinate: r(m) + h, value: m, offset: h }))
            : r
                .domain()
                .map((m, p) => ({
                  coordinate: r(m) + h,
                  value: u ? u[m] : m,
                  index: p,
                  offset: h,
                }))
      );
    }
  },
  ma = K([Re, Hu, ha, Ku, up, op, ht], A5),
  ya = K(tn, ha, (e, t) => {
    if (!(e == null || t == null)) return cf(cf({}, e), {}, { scale: t });
  }),
  w5 = K([tn, Iu, ap, W_], ip);
K(
  (e, t, r) => tp(e, r),
  w5,
  (e, t) => {
    if (!(e == null || t == null)) return cf(cf({}, e), {}, { scale: t });
  },
);
var E5 = K([Re, Pf, Nf], (e, t, r) => {
    switch (e) {
      case "horizontal":
        return t.some((a) => a.reversed) ? "right-to-left" : "left-to-right";
      case "vertical":
        return r.some((a) => a.reversed) ? "bottom-to-top" : "top-to-bottom";
      case "centric":
      case "radial":
        return "left-to-right";
      default:
        return;
    }
  }),
  i2 = (e) => e.options.defaultTooltipEventType,
  l2 = (e) => e.options.validateTooltipEventTypes;
function u2(e, t, r) {
  if (e == null) return t;
  var a = e ? "axis" : "item";
  return r == null ? t : r.includes(a) ? a : t;
}
function cp(e, t) {
  var r = i2(e),
    a = l2(e);
  return u2(t, r, a);
}
function _5(e) {
  return ve((t) => cp(t, e));
}
var o2 = (e, t) => {
    var r,
      a = Number(t);
    if (!(bn(a) || t == null))
      return a >= 0
        ? e == null || (r = e[a]) === null || r === void 0
          ? void 0
          : r.value
        : void 0;
  },
  T5 = (e) => e.tooltip.settings,
  da = { active: !1, index: null, dataKey: void 0, coordinate: void 0 },
  M5 = {
    itemInteraction: { click: da, hover: da },
    axisInteraction: { click: da, hover: da },
    keyboardInteraction: da,
    syncInteraction: {
      active: !1,
      index: null,
      dataKey: void 0,
      label: void 0,
      coordinate: void 0,
    },
    tooltipItemPayloads: [],
    settings: {
      shared: void 0,
      trigger: "hover",
      axisId: 0,
      active: !1,
      defaultIndex: void 0,
    },
  },
  c2 = On({
    name: "tooltip",
    initialState: M5,
    reducers: {
      addTooltipEntrySettings(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      removeTooltipEntrySettings(e, t) {
        var r = Tr(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      setTooltipSettingsState(e, t) {
        e.settings = t.payload;
      },
      setActiveMouseOverItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.hover.active = !0),
          (e.itemInteraction.hover.index = t.payload.activeIndex),
          (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      mouseLeaveChart(e) {
        ((e.itemInteraction.hover.active = !1),
          (e.axisInteraction.hover.active = !1));
      },
      mouseLeaveItem(e) {
        e.itemInteraction.hover.active = !1;
      },
      setActiveClickItemIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.itemInteraction.click.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.itemInteraction.click.index = t.payload.activeIndex),
          (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
          (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setMouseOverAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.axisInteraction.hover.active = !0),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.hover.index = t.payload.activeIndex),
          (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
      },
      setMouseClickAxisIndex(e, t) {
        ((e.syncInteraction.active = !1),
          (e.keyboardInteraction.active = !1),
          (e.axisInteraction.click.active = !0),
          (e.axisInteraction.click.index = t.payload.activeIndex),
          (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
          (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
      },
      setSyncInteraction(e, t) {
        e.syncInteraction = t.payload;
      },
      setKeyboardInteraction(e, t) {
        ((e.keyboardInteraction.active = t.payload.active),
          (e.keyboardInteraction.index = t.payload.activeIndex),
          (e.keyboardInteraction.coordinate = t.payload.activeCoordinate),
          (e.keyboardInteraction.dataKey = t.payload.activeDataKey));
      },
    },
  }),
  {
    addTooltipEntrySettings: D5,
    removeTooltipEntrySettings: j5,
    setTooltipSettingsState: C5,
    setActiveMouseOverItemIndex: f2,
    mouseLeaveItem: P5,
    mouseLeaveChart: s2,
    setActiveClickItemIndex: N5,
    setMouseOverAxisIndex: d2,
    setMouseClickAxisIndex: z5,
    setSyncInteraction: Bm,
    setKeyboardInteraction: Um,
  } = c2.actions,
  R5 = c2.reducer;
function jO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function _c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jO(Object(r), !0).forEach(function (a) {
          k5(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function k5(e, t, r) {
  return (
    (t = L5(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function L5(e) {
  var t = B5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function U5(e, t, r) {
  return t === "axis"
    ? r === "click"
      ? e.axisInteraction.click
      : e.axisInteraction.hover
    : r === "click"
      ? e.itemInteraction.click
      : e.itemInteraction.hover;
}
function $5(e) {
  return e.index != null;
}
var v2 = (e, t, r, a) => {
    if (t == null) return da;
    var u = U5(e, t, r);
    if (u == null) return da;
    if (u.active) return u;
    if (e.keyboardInteraction.active) return e.keyboardInteraction;
    if (e.syncInteraction.active && e.syncInteraction.index != null)
      return e.syncInteraction;
    var o = e.settings.active === !0;
    if ($5(u)) {
      if (o) return _c(_c({}, u), {}, { active: !0 });
    } else if (a != null)
      return { active: !0, coordinate: void 0, dataKey: void 0, index: a };
    return _c(_c({}, da), {}, { coordinate: u.coordinate });
  },
  fp = (e, t) => {
    var r = e?.index;
    if (r == null) return null;
    var a = Number(r);
    if (!Sn(a)) return r;
    var u = 0,
      o = 1 / 0;
    return (
      t.length > 0 && (o = t.length - 1),
      String(Math.max(u, Math.min(a, o)))
    );
  },
  h2 = (e, t, r, a, u, o, f, s) => {
    if (!(o == null || s == null)) {
      var v = f[0],
        h = v == null ? void 0 : s(v.positions, o);
      if (h != null) return h;
      var m = u?.[Number(o)];
      if (m)
        switch (r) {
          case "horizontal":
            return { x: m.coordinate, y: (a.top + t) / 2 };
          default:
            return { x: (a.left + e) / 2, y: m.coordinate };
        }
    }
  },
  m2 = (e, t, r, a) => {
    if (t === "axis") return e.tooltipItemPayloads;
    if (e.tooltipItemPayloads.length === 0) return [];
    var u;
    return (
      r === "hover"
        ? (u = e.itemInteraction.hover.dataKey)
        : (u = e.itemInteraction.click.dataKey),
      u == null && a != null
        ? [e.tooltipItemPayloads[0]]
        : e.tooltipItemPayloads.filter((o) => {
            var f;
            return (
              ((f = o.settings) === null || f === void 0
                ? void 0
                : f.dataKey) === u
            );
          })
    );
  },
  Gu = (e) => e.options.tooltipPayloadSearcher,
  dl = (e) => e.tooltip;
function CO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function PO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? CO(Object(r), !0).forEach(function (a) {
          q5(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : CO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function q5(e, t, r) {
  return (
    (t = H5(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function H5(e) {
  var t = Y5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Y5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I5(e, t) {
  return e ?? t;
}
var y2 = (e, t, r, a, u, o, f) => {
    if (!(t == null || o == null)) {
      var {
          chartData: s,
          computedData: v,
          dataStartIndex: h,
          dataEndIndex: m,
        } = r,
        p = [];
      return e.reduce((g, b) => {
        var O,
          { dataDefinedOnItem: S, settings: w } = b,
          _ = I5(S, s),
          M = Array.isArray(_) ? rE(_, h, m) : _,
          T = (O = w?.dataKey) !== null && O !== void 0 ? O : a,
          N = w?.nameKey,
          z;
        if (
          (a && Array.isArray(M) && !Array.isArray(M[0]) && f === "axis"
            ? (z = QA(M, a, u))
            : (z = o(M, t, v, N)),
          Array.isArray(z))
        )
          z.forEach((B) => {
            var X = PO(
              PO({}, w),
              {},
              { name: B.name, unit: B.unit, color: void 0, fill: void 0 },
            );
            g.push(
              hS({
                tooltipEntrySettings: X,
                dataKey: B.dataKey,
                payload: B.payload,
                value: Ot(B.payload, B.dataKey),
                name: B.name,
              }),
            );
          });
        else {
          var R;
          g.push(
            hS({
              tooltipEntrySettings: w,
              dataKey: T,
              payload: z,
              value: Ot(z, T),
              name: (R = Ot(z, N)) !== null && R !== void 0 ? R : w?.name,
            }),
          );
        }
        return g;
      }, p);
    }
  },
  sp = K([Et, Re, E_, Vy, gt], X_),
  K5 = K(
    [
      (e) => e.graphicalItems.cartesianItems,
      (e) => e.graphicalItems.polarItems,
    ],
    (e, t) => [...e, ...t],
  ),
  G5 = K([gt, fl], __),
  Xu = K([K5, Et, G5], T_),
  X5 = K([Xu], (e) => e.filter(Ff)),
  V5 = K([Xu], C_),
  vl = K([V5, Oa], P_),
  Z5 = K([X5, Oa, Et], O_),
  dp = K([vl, Et, Xu], N_),
  Q5 = K([Et], rp),
  W5 = K([Xu], (e) => e.filter(Ff)),
  F5 = K([Z5, W5, Vf], R_),
  J5 = K([F5, Oa, gt], k_),
  ek = K([Xu], D_),
  tk = K([vl, Et, ek, ts, gt], L_),
  nk = K([U_, gt, fl], sl),
  rk = K([nk, gt], H_),
  ak = K([$_, gt, fl], sl),
  ik = K([ak, gt], Y_),
  lk = K([q_, gt, fl], sl),
  uk = K([lk, gt], I_),
  ok = K([rk, uk, ik], ff),
  ck = K([Et, Q5, J5, tk, ok, Re, gt], K_),
  p2 = K([Et, Re, vl, dp, Vf, gt, ck], G_),
  fk = K([p2, Et, sp], V_),
  sk = K([Et, p2, fk, gt], Z_),
  g2 = (e) => {
    var t = gt(e),
      r = fl(e),
      a = !1;
    return Ku(e, t, r, a);
  },
  b2 = K([Et, g2], Zf),
  x2 = K([Et, sp, sk, b2], ip),
  dk = K([Re, dp, Et, gt], n2),
  vk = K([Re, dp, Et, gt], r2),
  hk = (e, t, r, a, u, o, f, s) => {
    if (t) {
      var { type: v } = t,
        h = ba(e, s);
      if (a) {
        var m = r === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2,
          p = v === "category" && a.bandwidth ? a.bandwidth() / m : 0;
        return (
          (p =
            s === "angleAxis" && u != null && u?.length >= 2
              ? Wt(u[0] - u[1]) * 2 * p
              : p),
          h && f
            ? f.map((g, b) => ({
                coordinate: a(g) + p,
                value: g,
                index: b,
                offset: p,
              }))
            : a
                .domain()
                .map((g, b) => ({
                  coordinate: a(g) + p,
                  value: o ? o[g] : g,
                  index: b,
                  offset: p,
                }))
        );
      }
    }
  },
  Br = K([Re, Et, sp, x2, g2, dk, vk, gt], hk),
  vp = K([i2, l2, T5], (e, t, r) => u2(r.shared, e, t)),
  S2 = (e) => e.tooltip.settings.trigger,
  hp = (e) => e.tooltip.settings.defaultIndex,
  as = K([dl, vp, S2, hp], v2),
  ni = K([as, vl], fp),
  O2 = K([Br, ni], o2),
  A2 = K([as], (e) => {
    if (e) return e.dataKey;
  }),
  w2 = K([dl, vp, S2, hp], m2),
  mk = K([Nr, zr, Re, At, Br, hp, w2, Gu], h2),
  yk = K([as, mk], (e, t) => (e != null && e.coordinate ? e.coordinate : t)),
  pk = K([as], (e) => e.active),
  gk = K([w2, ni, Oa, S_, O2, Gu, vp], y2),
  bk = K([gk], (e) => {
    if (e != null) {
      var t = e.map((r) => r.payload).filter((r) => r != null);
      return Array.from(new Set(t));
    }
  });
function NO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function zO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? NO(Object(r), !0).forEach(function (a) {
          xk(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : NO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function xk(e, t, r) {
  return (
    (t = Sk(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Sk(e) {
  var t = Ok(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ok(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ak = () => ve(Et),
  wk = () => {
    var e = Ak(),
      t = ve(Br),
      r = ve(x2);
    return _u(zO(zO({}, e), {}, { scale: r }), t);
  },
  Ek = () => ve(Vy),
  mp = (e, t) => t,
  E2 = (e, t, r) => r,
  yp = (e, t, r, a) => a,
  _k = K(Br, (e) => Ef(e, (t) => t.coordinate)),
  pp = K([dl, mp, E2, yp], v2),
  _2 = K([pp, vl], fp),
  Tk = (e, t, r) => {
    if (t != null) {
      var a = dl(e);
      return t === "axis"
        ? r === "hover"
          ? a.axisInteraction.hover.dataKey
          : a.axisInteraction.click.dataKey
        : r === "hover"
          ? a.itemInteraction.hover.dataKey
          : a.itemInteraction.click.dataKey;
    }
  },
  T2 = K([dl, mp, E2, yp], m2),
  sf = K([Nr, zr, Re, At, Br, yp, T2, Gu], h2),
  Mk = K([pp, sf], (e, t) => {
    var r;
    return (r = e.coordinate) !== null && r !== void 0 ? r : t;
  }),
  M2 = K(Br, _2, o2),
  Dk = K([T2, _2, Oa, S_, M2, Gu, mp], y2),
  jk = K([pp], (e) => ({ isActive: e.active, activeIndex: e.index })),
  Ck = (e, t, r, a, u, o, f, s) => {
    if (!(!e || !t || !a || !u || !o)) {
      var v = GN(e.chartX, e.chartY, t, r, s);
      if (v) {
        var h = VN(v, t),
          m = NN(h, f, o, a, u),
          p = XN(t, o, m, v);
        return { activeIndex: String(m), activeCoordinate: p };
      }
    }
  };
function $m() {
  return (
    ($m = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    $m.apply(null, arguments)
  );
}
function RO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Tc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? RO(Object(r), !0).forEach(function (a) {
          Pk(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : RO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function Pk(e, t, r) {
  return (
    (t = Nk(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Nk(e) {
  var t = zk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rk(e) {
  var {
      coordinate: t,
      payload: r,
      index: a,
      offset: u,
      tooltipAxisBandSize: o,
      layout: f,
      cursor: s,
      tooltipEventType: v,
      chartName: h,
    } = e,
    m = t,
    p = r,
    g = a;
  if (!s || !m || (h !== "ScatterChart" && v !== "axis")) return null;
  var b, O;
  if (h === "ScatterChart") ((b = m), (O = F3));
  else if (h === "BarChart") ((b = J3(f, m, u, o)), (O = Oy));
  else if (f === "radial") {
    var { cx: S, cy: w, radius: _, startAngle: M, endAngle: T } = mE(m);
    ((b = {
      cx: S,
      cy: w,
      startAngle: M,
      endAngle: T,
      innerRadius: _,
      outerRadius: _,
    }),
      (O = pE));
  } else ((b = { points: Pz(f, m, u) }), (O = fE));
  var N = typeof s == "object" && "className" in s ? s.className : void 0,
    z = Tc(
      Tc(Tc(Tc({ stroke: "#ccc", pointerEvents: "none" }, u), b), rt(s, !1)),
      {},
      {
        payload: p,
        payloadIndex: g,
        className: ke("recharts-tooltip-cursor", N),
      },
    );
  return A.isValidElement(s) ? A.cloneElement(s, z) : A.createElement(O, z);
}
function kk(e) {
  var t = wk(),
    r = uE(),
    a = kf(),
    u = Ek();
  return A.createElement(
    Rk,
    $m({}, e, {
      coordinate: e.coordinate,
      index: e.index,
      payload: e.payload,
      offset: r,
      layout: a,
      tooltipAxisBandSize: t,
      chartName: u,
    }),
  );
}
var D2 = A.createContext(null),
  Lk = () => A.useContext(D2),
  qh = { exports: {} },
  kO;
function Bk() {
  return (
    kO ||
      ((kO = 1),
      (function (e) {
        var t = Object.prototype.hasOwnProperty,
          r = "~";
        function a() {}
        Object.create &&
          ((a.prototype = Object.create(null)), new a().__proto__ || (r = !1));
        function u(v, h, m) {
          ((this.fn = v), (this.context = h), (this.once = m || !1));
        }
        function o(v, h, m, p, g) {
          if (typeof m != "function")
            throw new TypeError("The listener must be a function");
          var b = new u(m, p || v, g),
            O = r ? r + h : h;
          return (
            v._events[O]
              ? v._events[O].fn
                ? (v._events[O] = [v._events[O], b])
                : v._events[O].push(b)
              : ((v._events[O] = b), v._eventsCount++),
            v
          );
        }
        function f(v, h) {
          --v._eventsCount === 0 ? (v._events = new a()) : delete v._events[h];
        }
        function s() {
          ((this._events = new a()), (this._eventsCount = 0));
        }
        ((s.prototype.eventNames = function () {
          var h = [],
            m,
            p;
          if (this._eventsCount === 0) return h;
          for (p in (m = this._events))
            t.call(m, p) && h.push(r ? p.slice(1) : p);
          return Object.getOwnPropertySymbols
            ? h.concat(Object.getOwnPropertySymbols(m))
            : h;
        }),
          (s.prototype.listeners = function (h) {
            var m = r ? r + h : h,
              p = this._events[m];
            if (!p) return [];
            if (p.fn) return [p.fn];
            for (var g = 0, b = p.length, O = new Array(b); g < b; g++)
              O[g] = p[g].fn;
            return O;
          }),
          (s.prototype.listenerCount = function (h) {
            var m = r ? r + h : h,
              p = this._events[m];
            return p ? (p.fn ? 1 : p.length) : 0;
          }),
          (s.prototype.emit = function (h, m, p, g, b, O) {
            var S = r ? r + h : h;
            if (!this._events[S]) return !1;
            var w = this._events[S],
              _ = arguments.length,
              M,
              T;
            if (w.fn) {
              switch ((w.once && this.removeListener(h, w.fn, void 0, !0), _)) {
                case 1:
                  return (w.fn.call(w.context), !0);
                case 2:
                  return (w.fn.call(w.context, m), !0);
                case 3:
                  return (w.fn.call(w.context, m, p), !0);
                case 4:
                  return (w.fn.call(w.context, m, p, g), !0);
                case 5:
                  return (w.fn.call(w.context, m, p, g, b), !0);
                case 6:
                  return (w.fn.call(w.context, m, p, g, b, O), !0);
              }
              for (T = 1, M = new Array(_ - 1); T < _; T++)
                M[T - 1] = arguments[T];
              w.fn.apply(w.context, M);
            } else {
              var N = w.length,
                z;
              for (T = 0; T < N; T++)
                switch (
                  (w[T].once && this.removeListener(h, w[T].fn, void 0, !0), _)
                ) {
                  case 1:
                    w[T].fn.call(w[T].context);
                    break;
                  case 2:
                    w[T].fn.call(w[T].context, m);
                    break;
                  case 3:
                    w[T].fn.call(w[T].context, m, p);
                    break;
                  case 4:
                    w[T].fn.call(w[T].context, m, p, g);
                    break;
                  default:
                    if (!M)
                      for (z = 1, M = new Array(_ - 1); z < _; z++)
                        M[z - 1] = arguments[z];
                    w[T].fn.apply(w[T].context, M);
                }
            }
            return !0;
          }),
          (s.prototype.on = function (h, m, p) {
            return o(this, h, m, p, !1);
          }),
          (s.prototype.once = function (h, m, p) {
            return o(this, h, m, p, !0);
          }),
          (s.prototype.removeListener = function (h, m, p, g) {
            var b = r ? r + h : h;
            if (!this._events[b]) return this;
            if (!m) return (f(this, b), this);
            var O = this._events[b];
            if (O.fn)
              O.fn === m &&
                (!g || O.once) &&
                (!p || O.context === p) &&
                f(this, b);
            else {
              for (var S = 0, w = [], _ = O.length; S < _; S++)
                (O[S].fn !== m ||
                  (g && !O[S].once) ||
                  (p && O[S].context !== p)) &&
                  w.push(O[S]);
              w.length
                ? (this._events[b] = w.length === 1 ? w[0] : w)
                : f(this, b);
            }
            return this;
          }),
          (s.prototype.removeAllListeners = function (h) {
            var m;
            return (
              h
                ? ((m = r ? r + h : h), this._events[m] && f(this, m))
                : ((this._events = new a()), (this._eventsCount = 0)),
              this
            );
          }),
          (s.prototype.off = s.prototype.removeListener),
          (s.prototype.addListener = s.prototype.on),
          (s.prefixed = r),
          (s.EventEmitter = s),
          (e.exports = s));
      })(qh)),
    qh.exports
  );
}
var Uk = Bk();
const $k = Zn(Uk);
var Nu = new $k(),
  qm = "recharts.syncEvent.tooltip",
  LO = "recharts.syncEvent.brush";
function qk(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!bn(r)) return e?.[r];
  }
}
var Hk = {
    chartName: "",
    tooltipPayloadSearcher: void 0,
    eventEmitter: void 0,
    defaultTooltipEventType: "axis",
  },
  j2 = On({
    name: "options",
    initialState: Hk,
    reducers: {
      createEventEmitter: (e) => {
        e.eventEmitter == null &&
          (e.eventEmitter = Symbol("rechartsEventEmitter"));
      },
    },
  }),
  Yk = j2.reducer,
  { createEventEmitter: Ik } = j2.actions;
function Kk(e) {
  return e.tooltip.syncInteraction;
}
var Gk = {
    chartData: void 0,
    computedData: void 0,
    dataStartIndex: 0,
    dataEndIndex: 0,
  },
  C2 = On({
    name: "chartData",
    initialState: Gk,
    reducers: {
      setChartData(e, t) {
        if (((e.chartData = t.payload), t.payload == null)) {
          ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
          return;
        }
        t.payload.length > 0 &&
          e.dataEndIndex !== t.payload.length - 1 &&
          (e.dataEndIndex = t.payload.length - 1);
      },
      setComputedData(e, t) {
        e.computedData = t.payload;
      },
      setDataStartEndIndexes(e, t) {
        var { startIndex: r, endIndex: a } = t.payload;
        (r != null && (e.dataStartIndex = r),
          a != null && (e.dataEndIndex = a));
      },
    },
  }),
  {
    setChartData: BO,
    setDataStartEndIndexes: Xk,
    setComputedData: X9,
  } = C2.actions,
  Vk = C2.reducer,
  Zk = ["x", "y"];
function UO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function qa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? UO(Object(r), !0).forEach(function (a) {
          Qk(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : UO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function Qk(e, t, r) {
  return (
    (t = Wk(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Wk(e) {
  var t = Fk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Fk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jk(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = e8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function e8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var P2 = () => {};
function t8() {
  var e = ve(Zy),
    t = ve(Qy),
    r = ut(),
    a = ve(m_),
    u = ve(Br),
    o = kf(),
    f = gy(),
    s = ve((v) => v.rootProps.className);
  A.useEffect(() => {
    if (e == null) return P2;
    var v = (h, m, p) => {
      if (t !== p && e === h) {
        if (a === "index") {
          var g;
          if (
            f &&
            m !== null &&
            m !== void 0 &&
            (g = m.payload) !== null &&
            g !== void 0 &&
            g.coordinate
          ) {
            var b = m.payload.coordinate,
              { x: O, y: S } = b,
              w = Jk(b, Zk),
              _ = qa(
                qa(
                  qa({}, w),
                  typeof O == "number" && {
                    x: Math.max(f.x, Math.min(O, f.x + f.width)),
                  },
                ),
                typeof S == "number" && {
                  y: Math.max(f.y, Math.min(S, f.y + f.height)),
                },
              ),
              M = qa(
                qa({}, m),
                {},
                { payload: qa(qa({}, m.payload), {}, { coordinate: _ }) },
              );
            r(M);
          } else r(m);
          return;
        }
        if (u != null) {
          var T;
          if (typeof a == "function") {
            var N = {
                activeTooltipIndex:
                  m.payload.index == null ? void 0 : Number(m.payload.index),
                isTooltipActive: m.payload.active,
                activeIndex:
                  m.payload.index == null ? void 0 : Number(m.payload.index),
                activeLabel: m.payload.label,
                activeDataKey: m.payload.dataKey,
                activeCoordinate: m.payload.coordinate,
              },
              z = a(u, N);
            T = u[z];
          } else
            a === "value" &&
              (T = u.find((se) => String(se.value) === m.payload.label));
          var { coordinate: R } = m.payload;
          if (T == null || m.payload.active === !1 || R == null || f == null) {
            r(
              Bm({
                active: !1,
                coordinate: void 0,
                dataKey: void 0,
                index: null,
                label: void 0,
              }),
            );
            return;
          }
          var { x: B, y: X } = R,
            le = Math.min(B, f.x + f.width),
            ae = Math.min(X, f.y + f.height),
            V = {
              x: o === "horizontal" ? T.coordinate : le,
              y: o === "horizontal" ? ae : T.coordinate,
            },
            ne = Bm({
              active: m.payload.active,
              coordinate: V,
              dataKey: m.payload.dataKey,
              index: String(T.index),
              label: m.payload.label,
            });
          r(ne);
        }
      }
    };
    return (
      Nu.on(qm, v),
      () => {
        Nu.off(qm, v);
      }
    );
  }, [s, r, t, e, a, u, o, f]);
}
function n8() {
  var e = ve(Zy),
    t = ve(Qy),
    r = ut();
  A.useEffect(() => {
    if (e == null) return P2;
    var a = (u, o, f) => {
      t !== f && e === u && r(Xk(o));
    };
    return (
      Nu.on(LO, a),
      () => {
        Nu.off(LO, a);
      }
    );
  }, [r, t, e]);
}
function r8() {
  var e = ut();
  (A.useEffect(() => {
    e(Ik());
  }, [e]),
    t8(),
    n8());
}
function a8(e, t, r, a, u, o) {
  var f = ve((g) => Tk(g, e, t)),
    s = ve(Qy),
    v = ve(Zy),
    h = ve(m_),
    m = ve(Kk),
    p = m?.active;
  A.useEffect(() => {
    if (!p && v != null && s != null) {
      var g = Bm({
        active: o,
        coordinate: r,
        dataKey: f,
        index: u,
        label: typeof a == "number" ? String(a) : a,
      });
      Nu.emit(qm, v, g, s);
    }
  }, [p, r, f, u, a, s, v, h, o]);
}
function $O(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function qO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $O(Object(r), !0).forEach(function (a) {
          i8(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $O(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function i8(e, t, r) {
  return (
    (t = l8(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function l8(e) {
  var t = u8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function u8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o8(e) {
  return e.dataKey;
}
function c8(e, t) {
  return A.isValidElement(e)
    ? A.cloneElement(e, t)
    : typeof e == "function"
      ? A.createElement(e, t)
      : A.createElement(j3, t);
}
var HO = [],
  f8 = {
    allowEscapeViewBox: { x: !1, y: !1 },
    animationDuration: 400,
    animationEasing: "ease",
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !ii.isSsr,
    itemSorter: "name",
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: { x: !1, y: !1 },
    separator: " : ",
    trigger: "hover",
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function s8(e) {
  var t = en(e, f8),
    {
      active: r,
      allowEscapeViewBox: a,
      animationDuration: u,
      animationEasing: o,
      content: f,
      filterNull: s,
      isAnimationActive: v,
      offset: h,
      payloadUniqBy: m,
      position: p,
      reverseDirection: g,
      useTranslate3d: b,
      wrapperStyle: O,
      cursor: S,
      shared: w,
      trigger: _,
      defaultIndex: M,
      portal: T,
      axisId: N,
    } = t,
    z = ut(),
    R = typeof M == "number" ? String(M) : M;
  A.useEffect(() => {
    z(C5({ shared: w, trigger: _, axisId: N, active: r, defaultIndex: R }));
  }, [z, w, _, N, r, R]);
  var B = gy(),
    X = cE(),
    le = _5(w),
    { activeIndex: ae, isActive: V } = ve((oe) => jk(oe, le, _, R)),
    ne = ve((oe) => Dk(oe, le, _, R)),
    se = ve((oe) => M2(oe, le, _, R)),
    F = ve((oe) => Mk(oe, le, _, R)),
    W = ne,
    C = Lk(),
    U = r ?? V,
    [I, ee] = Pw([W, U]),
    ue = le === "axis" ? se : void 0;
  a8(le, _, F, ue, ae, U);
  var D = T ?? C;
  if (D == null) return null;
  var L = W ?? HO;
  (U || (L = HO),
    s &&
      L.length &&
      (L = Tw(
        W.filter(
          (oe) => oe.value != null && (oe.hide !== !0 || t.includeHidden),
        ),
        m,
        o8,
      )));
  var te = L.length > 0,
    ie = A.createElement(
      L3,
      {
        allowEscapeViewBox: a,
        animationDuration: u,
        animationEasing: o,
        isAnimationActive: v,
        active: U,
        coordinate: F,
        hasPayload: te,
        offset: h,
        position: p,
        reverseDirection: g,
        useTranslate3d: b,
        viewBox: B,
        wrapperStyle: O,
        lastBoundingBox: I,
        innerRef: ee,
        hasPortalFromProps: !!T,
      },
      c8(
        f,
        qO(
          qO({}, t),
          {},
          {
            payload: L,
            label: ue,
            active: U,
            coordinate: F,
            accessibilityLayer: X,
          },
        ),
      ),
    );
  return A.createElement(
    A.Fragment,
    null,
    ew.createPortal(ie, D),
    U &&
      A.createElement(kk, {
        cursor: S,
        tooltipEventType: le,
        coordinate: F,
        payload: W,
        index: ae,
      }),
  );
}
var Hh = {},
  Yh = {},
  Ih = {},
  YO;
function d8() {
  return (
    YO ||
      ((YO = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r, a, { signal: u, edges: o } = {}) {
          let f,
            s = null;
          const v = o != null && o.includes("leading"),
            h = o == null || o.includes("trailing"),
            m = () => {
              s !== null && (r.apply(f, s), (f = void 0), (s = null));
            },
            p = () => {
              (h && m(), S());
            };
          let g = null;
          const b = () => {
              (g != null && clearTimeout(g),
                (g = setTimeout(() => {
                  ((g = null), p());
                }, a)));
            },
            O = () => {
              g !== null && (clearTimeout(g), (g = null));
            },
            S = () => {
              (O(), (f = void 0), (s = null));
            },
            w = () => {
              m();
            },
            _ = function (...M) {
              if (u?.aborted) return;
              ((f = this), (s = M));
              const T = g == null;
              (b(), v && T && m());
            };
          return (
            (_.schedule = b),
            (_.cancel = S),
            (_.flush = w),
            u?.addEventListener("abort", S, { once: !0 }),
            _
          );
        }
        e.debounce = t;
      })(Ih)),
    Ih
  );
}
var IO;
function v8() {
  return (
    IO ||
      ((IO = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = d8();
        function r(a, u = 0, o = {}) {
          typeof o != "object" && (o = {});
          const { leading: f = !1, trailing: s = !0, maxWait: v } = o,
            h = Array(2);
          (f && (h[0] = "leading"), s && (h[1] = "trailing"));
          let m,
            p = null;
          const g = t.debounce(
              function (...S) {
                ((m = a.apply(this, S)), (p = null));
              },
              u,
              { edges: h },
            ),
            b = function (...S) {
              return v != null &&
                (p === null && (p = Date.now()), Date.now() - p >= v)
                ? ((m = a.apply(this, S)),
                  (p = Date.now()),
                  g.cancel(),
                  g.schedule(),
                  m)
                : (g.apply(this, S), m);
            },
            O = () => (g.flush(), m);
          return ((b.cancel = g.cancel), (b.flush = O), b);
        }
        e.debounce = r;
      })(Yh)),
    Yh
  );
}
var KO;
function h8() {
  return (
    KO ||
      ((KO = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = v8();
        function r(a, u = 0, o = {}) {
          const { leading: f = !0, trailing: s = !0 } = o;
          return t.debounce(a, u, { leading: f, maxWait: u, trailing: s });
        }
        e.throttle = r;
      })(Hh)),
    Hh
  );
}
var Kh, GO;
function m8() {
  return (GO || ((GO = 1), (Kh = h8().throttle)), Kh);
}
var y8 = m8();
const p8 = Zn(y8);
var Su = function (t, r) {
  for (
    var a = arguments.length, u = new Array(a > 2 ? a - 2 : 0), o = 2;
    o < a;
    o++
  )
    u[o - 2] = arguments[o];
};
function XO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? XO(Object(r), !0).forEach(function (a) {
          g8(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : XO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function g8(e, t, r) {
  return (
    (t = b8(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function b8(e) {
  var t = x8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var S8 = A.forwardRef((e, t) => {
    var {
        aspect: r,
        initialDimension: a = { width: -1, height: -1 },
        width: u = "100%",
        height: o = "100%",
        minWidth: f = 0,
        minHeight: s,
        maxHeight: v,
        children: h,
        debounce: m = 0,
        id: p,
        className: g,
        onResize: b,
        style: O = {},
      } = e,
      S = A.useRef(null),
      w = A.useRef();
    ((w.current = b), A.useImperativeHandle(t, () => S.current));
    var [_, M] = A.useState({
        containerWidth: a.width,
        containerHeight: a.height,
      }),
      T = A.useCallback((z, R) => {
        M((B) => {
          var X = Math.round(z),
            le = Math.round(R);
          return B.containerWidth === X && B.containerHeight === le
            ? B
            : { containerWidth: X, containerHeight: le };
        });
      }, []);
    A.useEffect(() => {
      var z = (le) => {
        var ae,
          { width: V, height: ne } = le[0].contentRect;
        (T(V, ne),
          (ae = w.current) === null || ae === void 0 || ae.call(w, V, ne));
      };
      m > 0 && (z = p8(z, m, { trailing: !0, leading: !1 }));
      var R = new ResizeObserver(z),
        { width: B, height: X } = S.current.getBoundingClientRect();
      return (
        T(B, X),
        R.observe(S.current),
        () => {
          R.disconnect();
        }
      );
    }, [T, m]);
    var N = A.useMemo(() => {
      var { containerWidth: z, containerHeight: R } = _;
      if (z < 0 || R < 0) return null;
      (Su(
        Ka(u) || Ka(o),
        `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
        u,
        o,
      ),
        Su(!r || r > 0, "The aspect(%s) must be greater than zero.", r));
      var B = Ka(u) ? z : u,
        X = Ka(o) ? R : o;
      return (
        r &&
          r > 0 &&
          (B ? (X = B / r) : X && (B = X * r), v && X > v && (X = v)),
        Su(
          B > 0 || X > 0,
          `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
          B,
          X,
          u,
          o,
          f,
          s,
          r,
        ),
        A.Children.map(h, (le) =>
          A.cloneElement(le, {
            width: B,
            height: X,
            style: Gh({ width: B, height: X }, le.props.style),
          }),
        )
      );
    }, [r, h, o, v, s, f, _, u]);
    return A.createElement(
      "div",
      {
        id: p ? "".concat(p) : void 0,
        className: ke("recharts-responsive-container", g),
        style: Gh(
          Gh({}, O),
          {},
          { width: u, height: o, minWidth: f, minHeight: s, maxHeight: v },
        ),
        ref: S,
      },
      A.createElement(
        "div",
        { style: { width: 0, height: 0, overflow: "visible" } },
        N,
      ),
    );
  }),
  N2 = (e) => null;
N2.displayName = "Cell";
function O8(e, t, r) {
  return (
    (t = A8(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function A8(e) {
  var t = w8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function w8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class E8 {
  constructor(t) {
    (O8(this, "cache", new Map()), (this.maxSize = t));
  }
  get(t) {
    var r = this.cache.get(t);
    return (r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r);
  }
  set(t, r) {
    if (this.cache.has(t)) this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var a = this.cache.keys().next().value;
      this.cache.delete(a);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function VO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function _8(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? VO(Object(r), !0).forEach(function (a) {
          T8(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : VO(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function T8(e, t, r) {
  return (
    (t = M8(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function M8(e) {
  var t = D8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function D8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var j8 = { cacheSize: 2e3, enableCache: !0 },
  z2 = _8({}, j8),
  ZO = new E8(z2.cacheSize),
  C8 = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  QO = "recharts_measurement_span";
function P8(e, t) {
  var r = t.fontSize || "",
    a = t.fontFamily || "",
    u = t.fontWeight || "",
    o = t.fontStyle || "",
    f = t.letterSpacing || "",
    s = t.textTransform || "";
  return ""
    .concat(e, "|")
    .concat(r, "|")
    .concat(a, "|")
    .concat(u, "|")
    .concat(o, "|")
    .concat(f, "|")
    .concat(s);
}
var WO = (e, t) => {
    try {
      var r = document.getElementById(QO);
      (r ||
        ((r = document.createElement("span")),
        r.setAttribute("id", QO),
        r.setAttribute("aria-hidden", "true"),
        document.body.appendChild(r)),
        Object.assign(r.style, C8, t),
        (r.textContent = "".concat(e)));
      var a = r.getBoundingClientRect();
      return { width: a.width, height: a.height };
    } catch {
      return { width: 0, height: 0 };
    }
  },
  Ou = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || ii.isSsr) return { width: 0, height: 0 };
    if (!z2.enableCache) return WO(t, r);
    var a = P8(t, r),
      u = ZO.get(a);
    if (u) return u;
    var o = WO(t, r);
    return (ZO.set(a, o), o);
  },
  FO = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  JO = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  N8 = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  z8 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  R2 = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  R8 = Object.keys(R2),
  Vi = "NaN";
function k8(e, t) {
  return e * R2[t];
}
class Qt {
  static parse(t) {
    var r,
      [, a, u] = (r = z8.exec(t)) !== null && r !== void 0 ? r : [];
    return new Qt(parseFloat(a), u ?? "");
  }
  constructor(t, r) {
    ((this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      bn(t) && (this.unit = ""),
      r !== "" && !N8.test(r) && ((this.num = NaN), (this.unit = "")),
      R8.includes(r) && ((this.num = k8(t, r)), (this.unit = "px")));
  }
  add(t) {
    return this.unit !== t.unit
      ? new Qt(NaN, "")
      : new Qt(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit
      ? new Qt(NaN, "")
      : new Qt(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
      ? new Qt(NaN, "")
      : new Qt(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit
      ? new Qt(NaN, "")
      : new Qt(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return bn(this.num);
  }
}
function k2(e) {
  if (e.includes(Vi)) return Vi;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      [, a, u, o] = (r = FO.exec(t)) !== null && r !== void 0 ? r : [],
      f = Qt.parse(a ?? ""),
      s = Qt.parse(o ?? ""),
      v = u === "*" ? f.multiply(s) : f.divide(s);
    if (v.isNaN()) return Vi;
    t = t.replace(FO, v.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h,
      [, m, p, g] = (h = JO.exec(t)) !== null && h !== void 0 ? h : [],
      b = Qt.parse(m ?? ""),
      O = Qt.parse(g ?? ""),
      S = p === "+" ? b.add(O) : b.subtract(O);
    if (S.isNaN()) return Vi;
    t = t.replace(JO, S.toString());
  }
  return t;
}
var eA = /\(([^()]*)\)/;
function L8(e) {
  for (var t = e, r; (r = eA.exec(t)) != null; ) {
    var [, a] = r;
    t = t.replace(eA, k2(a));
  }
  return t;
}
function B8(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = L8(t)), (t = k2(t)), t);
}
function U8(e) {
  try {
    return B8(e);
  } catch {
    return Vi;
  }
}
function Xh(e) {
  var t = U8(e.slice(5, -1));
  return t === Vi ? "" : t;
}
var $8 = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  q8 = ["dx", "dy", "angle", "className", "breakAll"];
function Hm() {
  return (
    (Hm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Hm.apply(null, arguments)
  );
}
function tA(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = H8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function H8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var L2 = /[ \f\n\r\t\v\u2028\u2029]+/,
  B2 = (e) => {
    var { children: t, breakAll: r, style: a } = e;
    try {
      var u = [];
      Fe(t) ||
        (r ? (u = t.toString().split("")) : (u = t.toString().split(L2)));
      var o = u.map((s) => ({ word: s, width: Ou(s, a).width })),
        f = r ? 0 : Ou(" ", a).width;
      return { wordsWithComputedWidth: o, spaceWidth: f };
    } catch {
      return null;
    }
  },
  Y8 = (e, t, r, a, u) => {
    var { maxLines: o, children: f, style: s, breakAll: v } = e,
      h = ye(o),
      m = f,
      p = function () {
        var V =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return V.reduce((ne, se) => {
          var { word: F, width: W } = se,
            C = ne[ne.length - 1];
          if (C && (a == null || u || C.width + W + r < Number(a)))
            (C.words.push(F), (C.width += W + r));
          else {
            var U = { words: [F], width: W };
            ne.push(U);
          }
          return ne;
        }, []);
      },
      g = p(t),
      b = (ae) => ae.reduce((V, ne) => (V.width > ne.width ? V : ne));
    if (!h || u) return g;
    var O = g.length > o || b(g).width > Number(a);
    if (!O) return g;
    for (
      var S = "…",
        w = (ae) => {
          var V = m.slice(0, ae),
            ne = B2({
              breakAll: v,
              style: s,
              children: V + S,
            }).wordsWithComputedWidth,
            se = p(ne),
            F = se.length > o || b(se).width > Number(a);
          return [F, se];
        },
        _ = 0,
        M = m.length - 1,
        T = 0,
        N;
      _ <= M && T <= m.length - 1;
    ) {
      var z = Math.floor((_ + M) / 2),
        R = z - 1,
        [B, X] = w(R),
        [le] = w(z);
      if ((!B && !le && (_ = z + 1), B && le && (M = z - 1), !B && le)) {
        N = X;
        break;
      }
      T++;
    }
    return N || g;
  },
  nA = (e) => {
    var t = Fe(e) ? [] : e.toString().split(L2);
    return [{ words: t }];
  },
  I8 = (e) => {
    var {
      width: t,
      scaleToFit: r,
      children: a,
      style: u,
      breakAll: o,
      maxLines: f,
    } = e;
    if ((t || r) && !ii.isSsr) {
      var s,
        v,
        h = B2({ breakAll: o, children: a, style: u });
      if (h) {
        var { wordsWithComputedWidth: m, spaceWidth: p } = h;
        ((s = m), (v = p));
      } else return nA(a);
      return Y8(
        { breakAll: o, children: a, maxLines: f, style: u },
        s,
        v,
        t,
        r,
      );
    }
    return nA(a);
  },
  rA = "#808080",
  gp = A.forwardRef((e, t) => {
    var {
        x: r = 0,
        y: a = 0,
        lineHeight: u = "1em",
        capHeight: o = "0.71em",
        scaleToFit: f = !1,
        textAnchor: s = "start",
        verticalAnchor: v = "end",
        fill: h = rA,
      } = e,
      m = tA(e, $8),
      p = A.useMemo(
        () =>
          I8({
            breakAll: m.breakAll,
            children: m.children,
            maxLines: m.maxLines,
            scaleToFit: f,
            style: m.style,
            width: m.width,
          }),
        [m.breakAll, m.children, m.maxLines, f, m.style, m.width],
      ),
      { dx: g, dy: b, angle: O, className: S, breakAll: w } = m,
      _ = tA(m, q8);
    if (!Ft(r) || !Ft(a) || p.length === 0) return null;
    var M = r + (ye(g) ? g : 0),
      T = a + (ye(b) ? b : 0),
      N;
    switch (v) {
      case "start":
        N = Xh("calc(".concat(o, ")"));
        break;
      case "middle":
        N = Xh(
          "calc("
            .concat((p.length - 1) / 2, " * -")
            .concat(u, " + (")
            .concat(o, " / 2))"),
        );
        break;
      default:
        N = Xh("calc(".concat(p.length - 1, " * -").concat(u, ")"));
        break;
    }
    var z = [];
    if (f) {
      var R = p[0].width,
        { width: B } = m;
      z.push("scale(".concat(ye(B) ? B / R : 1, ")"));
    }
    return (
      O && z.push("rotate(".concat(O, ", ").concat(M, ", ").concat(T, ")")),
      z.length && (_.transform = z.join(" ")),
      A.createElement(
        "text",
        Hm({}, rt(_, !0), {
          ref: t,
          x: M,
          y: T,
          className: ke("recharts-text", S),
          textAnchor: s,
          fill: h.includes("url") ? rA : h,
        }),
        p.map((X, le) => {
          var ae = X.words.join(w ? "" : " ");
          return A.createElement(
            "tspan",
            { x: M, dy: le === 0 ? N : u, key: "".concat(ae, "-").concat(le) },
            ae,
          );
        }),
      )
    );
  });
gp.displayName = "Text";
var K8 = ["labelRef"];
function G8(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = X8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function X8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function aA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? aA(Object(r), !0).forEach(function (a) {
          V8(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : aA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function V8(e, t, r) {
  return (
    (t = Z8(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Z8(e) {
  var t = Q8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Q8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wr() {
  return (
    (wr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    wr.apply(null, arguments)
  );
}
var U2 = A.createContext(null),
  $2 = (e) => {
    var { x: t, y: r, width: a, height: u, children: o } = e,
      f = A.useMemo(() => ({ x: t, y: r, width: a, height: u }), [t, r, a, u]);
    return A.createElement(U2.Provider, { value: f }, o);
  },
  q2 = () => {
    var e = A.useContext(U2),
      t = gy();
    return e || t;
  },
  W8 = A.createContext(null),
  F8 = () => {
    var e = A.useContext(W8),
      t = ve(x_);
    return e || t;
  },
  J8 = (e) => {
    var { value: t, formatter: r } = e,
      a = Fe(e.children) ? t : e.children;
    return typeof r == "function" ? r(a) : a;
  },
  bp = (e) => e != null && typeof e == "function",
  eL = (e, t) => {
    var r = Wt(t - e),
      a = Math.min(Math.abs(t - e), 360);
    return r * a;
  },
  tL = (e, t, r, a, u) => {
    var { offset: o, className: f } = e,
      {
        cx: s,
        cy: v,
        innerRadius: h,
        outerRadius: m,
        startAngle: p,
        endAngle: g,
        clockWise: b,
      } = u,
      O = (h + m) / 2,
      S = eL(p, g),
      w = S >= 0 ? 1 : -1,
      _,
      M;
    switch (t) {
      case "insideStart":
        ((_ = p + w * o), (M = b));
        break;
      case "insideEnd":
        ((_ = g - w * o), (M = !b));
        break;
      case "end":
        ((_ = g + w * o), (M = b));
        break;
      default:
        throw new Error("Unsupported position ".concat(t));
    }
    M = S <= 0 ? M : !M;
    var T = Rt(s, v, O, _),
      N = Rt(s, v, O, _ + (M ? 1 : -1) * 359),
      z = "M"
        .concat(T.x, ",")
        .concat(
          T.y,
          `
    A`,
        )
        .concat(O, ",")
        .concat(O, ",0,1,")
        .concat(
          M ? 0 : 1,
          `,
    `,
        )
        .concat(N.x, ",")
        .concat(N.y),
      R = Fe(e.id) ? Au("recharts-radial-line-") : e.id;
    return A.createElement(
      "text",
      wr({}, a, {
        dominantBaseline: "central",
        className: ke("recharts-radial-bar-label", f),
      }),
      A.createElement("defs", null, A.createElement("path", { id: R, d: z })),
      A.createElement("textPath", { xlinkHref: "#".concat(R) }, r),
    );
  },
  nL = (e, t, r) => {
    var {
        cx: a,
        cy: u,
        innerRadius: o,
        outerRadius: f,
        startAngle: s,
        endAngle: v,
      } = e,
      h = (s + v) / 2;
    if (r === "outside") {
      var { x: m, y: p } = Rt(a, u, f + t, h);
      return {
        x: m,
        y: p,
        textAnchor: m >= a ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (r === "center")
      return { x: a, y: u, textAnchor: "middle", verticalAnchor: "middle" };
    if (r === "centerTop")
      return { x: a, y: u, textAnchor: "middle", verticalAnchor: "start" };
    if (r === "centerBottom")
      return { x: a, y: u, textAnchor: "middle", verticalAnchor: "end" };
    var g = (o + f) / 2,
      { x: b, y: O } = Rt(a, u, g, h);
    return { x: b, y: O, textAnchor: "middle", verticalAnchor: "middle" };
  },
  H2 = (e) => "cx" in e && ye(e.cx),
  rL = (e, t) => {
    var { parentViewBox: r, offset: a, position: u } = e,
      o;
    r != null && !H2(r) && (o = r);
    var { x: f, y: s, width: v, height: h } = t,
      m = h >= 0 ? 1 : -1,
      p = m * a,
      g = m > 0 ? "end" : "start",
      b = m > 0 ? "start" : "end",
      O = v >= 0 ? 1 : -1,
      S = O * a,
      w = O > 0 ? "end" : "start",
      _ = O > 0 ? "start" : "end";
    if (u === "top") {
      var M = {
        x: f + v / 2,
        y: s - m * a,
        textAnchor: "middle",
        verticalAnchor: g,
      };
      return lt(lt({}, M), o ? { height: Math.max(s - o.y, 0), width: v } : {});
    }
    if (u === "bottom") {
      var T = {
        x: f + v / 2,
        y: s + h + p,
        textAnchor: "middle",
        verticalAnchor: b,
      };
      return lt(
        lt({}, T),
        o ? { height: Math.max(o.y + o.height - (s + h), 0), width: v } : {},
      );
    }
    if (u === "left") {
      var N = {
        x: f - S,
        y: s + h / 2,
        textAnchor: w,
        verticalAnchor: "middle",
      };
      return lt(
        lt({}, N),
        o ? { width: Math.max(N.x - o.x, 0), height: h } : {},
      );
    }
    if (u === "right") {
      var z = {
        x: f + v + S,
        y: s + h / 2,
        textAnchor: _,
        verticalAnchor: "middle",
      };
      return lt(
        lt({}, z),
        o ? { width: Math.max(o.x + o.width - z.x, 0), height: h } : {},
      );
    }
    var R = o ? { width: v, height: h } : {};
    return u === "insideLeft"
      ? lt(
          { x: f + S, y: s + h / 2, textAnchor: _, verticalAnchor: "middle" },
          R,
        )
      : u === "insideRight"
        ? lt(
            {
              x: f + v - S,
              y: s + h / 2,
              textAnchor: w,
              verticalAnchor: "middle",
            },
            R,
          )
        : u === "insideTop"
          ? lt(
              {
                x: f + v / 2,
                y: s + p,
                textAnchor: "middle",
                verticalAnchor: b,
              },
              R,
            )
          : u === "insideBottom"
            ? lt(
                {
                  x: f + v / 2,
                  y: s + h - p,
                  textAnchor: "middle",
                  verticalAnchor: g,
                },
                R,
              )
            : u === "insideTopLeft"
              ? lt({ x: f + S, y: s + p, textAnchor: _, verticalAnchor: b }, R)
              : u === "insideTopRight"
                ? lt(
                    {
                      x: f + v - S,
                      y: s + p,
                      textAnchor: w,
                      verticalAnchor: b,
                    },
                    R,
                  )
                : u === "insideBottomLeft"
                  ? lt(
                      {
                        x: f + S,
                        y: s + h - p,
                        textAnchor: _,
                        verticalAnchor: g,
                      },
                      R,
                    )
                  : u === "insideBottomRight"
                    ? lt(
                        {
                          x: f + v - S,
                          y: s + h - p,
                          textAnchor: w,
                          verticalAnchor: g,
                        },
                        R,
                      )
                    : u &&
                        typeof u == "object" &&
                        (ye(u.x) || Ka(u.x)) &&
                        (ye(u.y) || Ka(u.y))
                      ? lt(
                          {
                            x: f + Vn(u.x, v),
                            y: s + Vn(u.y, h),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          R,
                        )
                      : lt(
                          {
                            x: f + v / 2,
                            y: s + h / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          R,
                        );
  },
  aL = { offset: 5 };
function sa(e) {
  var t = en(e, aL),
    {
      viewBox: r,
      position: a,
      value: u,
      children: o,
      content: f,
      className: s = "",
      textBreakAll: v,
      labelRef: h,
    } = t,
    m = F8(),
    p = q2(),
    g = a === "center" ? p : (m ?? p),
    b = r || g;
  if (!b || (Fe(u) && Fe(o) && !A.isValidElement(f) && typeof f != "function"))
    return null;
  var O = lt(lt({}, t), {}, { viewBox: b });
  if (A.isValidElement(f)) {
    var { labelRef: S } = O,
      w = G8(O, K8);
    return A.cloneElement(f, w);
  }
  var _;
  if (typeof f == "function") {
    if (((_ = A.createElement(f, O)), A.isValidElement(_))) return _;
  } else _ = J8(t);
  var M = H2(b),
    T = rt(t, !0);
  if (M && (a === "insideStart" || a === "insideEnd" || a === "end"))
    return tL(t, a, _, T, b);
  var N = M ? nL(b, t.offset, t.position) : rL(t, b);
  return A.createElement(
    gp,
    wr({ ref: h, className: ke("recharts-label", s) }, T, N, { breakAll: v }),
    _,
  );
}
sa.displayName = "Label";
var iL = (e, t, r) => {
  if (!e) return null;
  var a = { viewBox: t, labelRef: r };
  return e === !0
    ? A.createElement(sa, wr({ key: "label-implicit" }, a))
    : Ft(e)
      ? A.createElement(sa, wr({ key: "label-implicit", value: e }, a))
      : A.isValidElement(e)
        ? e.type === sa
          ? A.cloneElement(e, lt({ key: "label-implicit" }, a))
          : A.createElement(sa, wr({ key: "label-implicit", content: e }, a))
        : bp(e)
          ? A.createElement(sa, wr({ key: "label-implicit", content: e }, a))
          : e && typeof e == "object"
            ? A.createElement(sa, wr({}, e, { key: "label-implicit" }, a))
            : null;
};
function Y2(e) {
  var { label: t } = e,
    r = q2();
  return iL(t, r) || null;
}
var Vh = {},
  Zh = {},
  iA;
function lL() {
  return (
    iA ||
      ((iA = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return r[r.length - 1];
        }
        e.last = t;
      })(Zh)),
    Zh
  );
}
var Qh = {},
  lA;
function uL() {
  return (
    lA ||
      ((lA = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          return Array.isArray(r) ? r : Array.from(r);
        }
        e.toArray = t;
      })(Qh)),
    Qh
  );
}
var uA;
function oL() {
  return (
    uA ||
      ((uA = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        const t = lL(),
          r = uL(),
          a = cy();
        function u(o) {
          if (a.isArrayLike(o)) return t.last(r.toArray(o));
        }
        e.last = u;
      })(Vh)),
    Vh
  );
}
var Wh, oA;
function cL() {
  return (oA || ((oA = 1), (Wh = oL().last)), Wh);
}
var fL = cL();
const sL = Zn(fL);
var dL = ["valueAccessor"],
  vL = ["dataKey", "clockWise", "id", "textBreakAll"];
function df() {
  return (
    (df = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    df.apply(null, arguments)
  );
}
function cA(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = hL(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function hL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var mL = (e) => (Array.isArray(e.value) ? sL(e.value) : e.value),
  I2 = A.createContext(void 0),
  K2 = I2.Provider,
  G2 = A.createContext(void 0);
G2.Provider;
function yL() {
  return A.useContext(I2);
}
function pL() {
  return A.useContext(G2);
}
function Cc(e) {
  var { valueAccessor: t = mL } = e,
    r = cA(e, dL),
    { dataKey: a, clockWise: u, id: o, textBreakAll: f } = r,
    s = cA(r, vL),
    v = yL(),
    h = pL(),
    m = v || h;
  return !m || !m.length
    ? null
    : A.createElement(
        Un,
        { className: "recharts-label-list" },
        m.map((p, g) => {
          var b,
            O = Fe(a) ? t(p, g) : Ot(p && p.payload, a),
            S = Fe(o) ? {} : { id: "".concat(o, "-").concat(g) };
          return A.createElement(
            sa,
            df({}, rt(p, !0), s, S, {
              fill: (b = r.fill) !== null && b !== void 0 ? b : p.fill,
              parentViewBox: p.parentViewBox,
              value: O,
              textBreakAll: f,
              viewBox: p.viewBox,
              key: "label-".concat(g),
              index: g,
            }),
          );
        }),
      );
}
Cc.displayName = "LabelList";
function X2(e) {
  var { label: t } = e;
  return t
    ? t === !0
      ? A.createElement(Cc, { key: "labelList-implicit" })
      : A.isValidElement(t) || bp(t)
        ? A.createElement(Cc, { key: "labelList-implicit", content: t })
        : typeof t == "object"
          ? A.createElement(
              Cc,
              df({ key: "labelList-implicit" }, t, { type: String(t.type) }),
            )
          : null
    : null;
}
function Ym() {
  return (
    (Ym = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Ym.apply(null, arguments)
  );
}
var V2 = (e) => {
    var { cx: t, cy: r, r: a, className: u } = e,
      o = ke("recharts-dot", u);
    return t === +t && r === +r && a === +a
      ? A.createElement(
          "circle",
          Ym({}, ga(e), ty(e), { className: o, cx: t, cy: r, r: a }),
        )
      : null;
  },
  gL = { radiusAxis: {}, angleAxis: {} },
  Z2 = On({
    name: "polarAxis",
    initialState: gL,
    reducers: {
      addRadiusAxis(e, t) {
        e.radiusAxis[t.payload.id] = t.payload;
      },
      removeRadiusAxis(e, t) {
        delete e.radiusAxis[t.payload.id];
      },
      addAngleAxis(e, t) {
        e.angleAxis[t.payload.id] = t.payload;
      },
      removeAngleAxis(e, t) {
        delete e.angleAxis[t.payload.id];
      },
    },
  }),
  {
    addRadiusAxis: V9,
    removeRadiusAxis: Z9,
    addAngleAxis: Q9,
    removeAngleAxis: W9,
  } = Z2.actions,
  bL = Z2.reducer,
  Fh = {},
  fA;
function xL() {
  return (
    fA ||
      ((fA = 1),
      (function (e) {
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        function t(r) {
          if (typeof r != "object" || r == null) return !1;
          if (Object.getPrototypeOf(r) === null) return !0;
          if (Object.prototype.toString.call(r) !== "[object Object]") {
            const u = r[Symbol.toStringTag];
            return u == null ||
              !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable
              ? !1
              : r.toString() === `[object ${u}]`;
          }
          let a = r;
          for (; Object.getPrototypeOf(a) !== null; )
            a = Object.getPrototypeOf(a);
          return Object.getPrototypeOf(r) === a;
        }
        e.isPlainObject = t;
      })(Fh)),
    Fh
  );
}
var Jh, sA;
function SL() {
  return (sA || ((sA = 1), (Jh = xL().isPlainObject)), Jh);
}
var OL = SL();
const AL = Zn(OL);
function dA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function vA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dA(Object(r), !0).forEach(function (a) {
          wL(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : dA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function wL(e, t, r) {
  return (
    (t = EL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function EL(e) {
  var t = _L(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _L(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vf() {
  return (
    (vf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    vf.apply(null, arguments)
  );
}
var hA = (e, t, r, a, u) => {
    var o = r - a,
      f;
    return (
      (f = "M ".concat(e, ",").concat(t)),
      (f += "L ".concat(e + r, ",").concat(t)),
      (f += "L ".concat(e + r - o / 2, ",").concat(t + u)),
      (f += "L ".concat(e + r - o / 2 - a, ",").concat(t + u)),
      (f += "L ".concat(e, ",").concat(t, " Z")),
      f
    );
  },
  TL = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  ML = (e) => {
    var t = en(e, TL),
      { x: r, y: a, upperWidth: u, lowerWidth: o, height: f, className: s } = t,
      {
        animationEasing: v,
        animationDuration: h,
        animationBegin: m,
        isUpdateAnimationActive: p,
      } = t,
      g = A.useRef(),
      [b, O] = A.useState(-1),
      S = A.useRef(u),
      w = A.useRef(o),
      _ = A.useRef(f),
      M = A.useRef(r),
      T = A.useRef(a),
      N = Uf(e, "trapezoid-");
    if (
      (A.useEffect(() => {
        if (g.current && g.current.getTotalLength)
          try {
            var F = g.current.getTotalLength();
            F && O(F);
          } catch {}
      }, []),
      r !== +r ||
        a !== +a ||
        u !== +u ||
        o !== +o ||
        f !== +f ||
        (u === 0 && o === 0) ||
        f === 0)
    )
      return null;
    var z = ke("recharts-trapezoid", s);
    if (!p)
      return A.createElement(
        "g",
        null,
        A.createElement(
          "path",
          vf({}, rt(t, !0), { className: z, d: hA(r, a, u, o, f) }),
        ),
      );
    var R = S.current,
      B = w.current,
      X = _.current,
      le = M.current,
      ae = T.current,
      V = "0px ".concat(b === -1 ? 1 : b, "px"),
      ne = "".concat(b, "px 0px"),
      se = sE(["strokeDasharray"], h, v);
    return A.createElement(
      Bf,
      {
        animationId: N,
        key: N,
        canBegin: b > 0,
        duration: h,
        easing: v,
        isActive: p,
        begin: m,
      },
      (F) => {
        var W = dt(R, u, F),
          C = dt(B, o, F),
          U = dt(X, f, F),
          I = dt(le, r, F),
          ee = dt(ae, a, F);
        g.current &&
          ((S.current = W),
          (w.current = C),
          (_.current = U),
          (M.current = I),
          (T.current = ee));
        var ue =
          F > 0
            ? { transition: se, strokeDasharray: ne }
            : { strokeDasharray: V };
        return A.createElement(
          "path",
          vf({}, rt(t, !0), {
            className: z,
            d: hA(I, ee, W, C, U),
            ref: g,
            style: vA(vA({}, ue), t.style),
          }),
        );
      },
    );
  },
  DL = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function jL(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = CL(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function CL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function mA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mA(Object(r), !0).forEach(function (a) {
          PL(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function PL(e, t, r) {
  return (
    (t = NL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function NL(e) {
  var t = zL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RL(e, t) {
  return hf(hf({}, t), e);
}
function kL(e, t) {
  return e === "symbols";
}
function yA(e) {
  var { shapeType: t, elementProps: r } = e;
  switch (t) {
    case "rectangle":
      return A.createElement(Oy, r);
    case "trapezoid":
      return A.createElement(ML, r);
    case "sector":
      return A.createElement(pE, r);
    case "symbols":
      if (kL(t)) return A.createElement(ly, r);
      break;
    default:
      return null;
  }
}
function LL(e) {
  return A.isValidElement(e) ? e.props : e;
}
function BL(e) {
  var {
      option: t,
      shapeType: r,
      propTransformer: a = RL,
      activeClassName: u = "recharts-active-shape",
      isActive: o,
    } = e,
    f = jL(e, DL),
    s;
  if (A.isValidElement(t)) s = A.cloneElement(t, hf(hf({}, f), LL(t)));
  else if (typeof t == "function") s = t(f);
  else if (AL(t) && typeof t != "boolean") {
    var v = a(t, f);
    s = A.createElement(yA, { shapeType: r, elementProps: v });
  } else {
    var h = f;
    s = A.createElement(yA, { shapeType: r, elementProps: h });
  }
  return o ? A.createElement(Un, { className: u }, s) : s;
}
var Q2 = (e, t) => {
    var r = ut();
    return (a, u) => (o) => {
      (e?.(a, u, o),
        r(
          f2({
            activeIndex: String(u),
            activeDataKey: t,
            activeCoordinate: a.tooltipPosition,
          }),
        ));
    };
  },
  W2 = (e) => {
    var t = ut();
    return (r, a) => (u) => {
      (e?.(r, a, u), t(P5()));
    };
  },
  F2 = (e, t) => {
    var r = ut();
    return (a, u) => (o) => {
      (e?.(a, u, o),
        r(
          N5({
            activeIndex: String(u),
            activeDataKey: t,
            activeCoordinate: a.tooltipPosition,
          }),
        ));
    };
  };
function J2(e) {
  var { fn: t, args: r } = e,
    a = ut(),
    u = Ht();
  return (
    A.useEffect(() => {
      if (!u) {
        var o = t(r);
        return (
          a(D5(o)),
          () => {
            a(j5(o));
          }
        );
      }
    }, [t, r, a, u]),
    null
  );
}
var UL = () => {};
function eT(e) {
  var { legendPayload: t } = e,
    r = ut(),
    a = Ht();
  return (
    A.useEffect(
      () =>
        a
          ? UL
          : (r(d3(t)),
            () => {
              r(v3(t));
            }),
      [r, a, t],
    ),
    null
  );
}
var em,
  $L = () => {
    var [e] = A.useState(() => Au("uid-"));
    return e;
  },
  qL = (em = cj.useId) !== null && em !== void 0 ? em : $L;
function HL(e, t) {
  var r = qL();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var YL = A.createContext(void 0),
  tT = (e) => {
    var { id: t, type: r, children: a } = e,
      u = HL("recharts-".concat(r), t);
    return A.createElement(YL.Provider, { value: u }, a(u));
  },
  IL = { cartesianItems: [], polarItems: [] },
  nT = On({
    name: "graphicalItems",
    initialState: IL,
    reducers: {
      addCartesianGraphicalItem(e, t) {
        e.cartesianItems.push(t.payload);
      },
      replaceCartesianGraphicalItem(e, t) {
        var { prev: r, next: a } = t.payload,
          u = Tr(e).cartesianItems.indexOf(r);
        u > -1 && (e.cartesianItems[u] = a);
      },
      removeCartesianGraphicalItem(e, t) {
        var r = Tr(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      addPolarGraphicalItem(e, t) {
        e.polarItems.push(t.payload);
      },
      removePolarGraphicalItem(e, t) {
        var r = Tr(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
    },
  }),
  {
    addCartesianGraphicalItem: KL,
    replaceCartesianGraphicalItem: GL,
    removeCartesianGraphicalItem: XL,
    addPolarGraphicalItem: F9,
    removePolarGraphicalItem: J9,
  } = nT.actions,
  VL = nT.reducer;
function rT(e) {
  var t = ut(),
    r = A.useRef(null);
  return (
    A.useEffect(() => {
      (r.current === null
        ? t(KL(e))
        : r.current !== e && t(GL({ prev: r.current, next: e })),
        (r.current = e));
    }, [t, e]),
    A.useEffect(
      () => () => {
        r.current && (t(XL(r.current)), (r.current = null));
      },
      [t],
    ),
    null
  );
}
function pA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function gA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pA(Object(r), !0).forEach(function (a) {
          ZL(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function ZL(e, t, r) {
  return (
    (t = QL(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function QL(e) {
  var t = WL(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WL(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var FL = { xAxis: {}, yAxis: {}, zAxis: {} },
  aT = On({
    name: "cartesianAxis",
    initialState: FL,
    reducers: {
      addXAxis(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      removeXAxis(e, t) {
        delete e.xAxis[t.payload.id];
      },
      addYAxis(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      removeYAxis(e, t) {
        delete e.yAxis[t.payload.id];
      },
      addZAxis(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      removeZAxis(e, t) {
        delete e.zAxis[t.payload.id];
      },
      updateYAxisWidth(e, t) {
        var { id: r, width: a } = t.payload;
        e.yAxis[r] && (e.yAxis[r] = gA(gA({}, e.yAxis[r]), {}, { width: a }));
      },
    },
  }),
  {
    addXAxis: JL,
    removeXAxis: eB,
    addYAxis: tB,
    removeYAxis: nB,
    addZAxis: eH,
    removeZAxis: tH,
    updateYAxisWidth: rB,
  } = aT.actions,
  aB = aT.reducer,
  iB = K([At], (e) => {
    if (e)
      return { top: e.top, bottom: e.bottom, left: e.left, right: e.right };
  }),
  lB = K([iB, Nr, zr], (e, t, r) => {
    if (!(!e || t == null || r == null))
      return {
        x: e.left,
        y: e.top,
        width: Math.max(0, t - e.left - e.right),
        height: Math.max(0, r - e.top - e.bottom),
      };
  }),
  xp = () => ve(lB),
  uB = () => ve(bk);
function bA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function xA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bA(Object(r), !0).forEach(function (a) {
          oB(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function oB(e, t, r) {
  return (
    (t = cB(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function cB(e) {
  var t = fB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sB = (e) => {
  var { point: t, childIndex: r, mainColor: a, activeDot: u, dataKey: o } = e;
  if (u === !1 || t.x == null || t.y == null) return null;
  var f = xA(
      xA(
        {
          index: r,
          dataKey: o,
          cx: t.x,
          cy: t.y,
          r: 4,
          fill: a ?? "none",
          strokeWidth: 2,
          stroke: "#fff",
          payload: t.payload,
          value: t.value,
        },
        rt(u, !1),
      ),
      ty(u),
    ),
    s;
  return (
    A.isValidElement(u)
      ? (s = A.cloneElement(u, f))
      : typeof u == "function"
        ? (s = u(f))
        : (s = A.createElement(V2, f)),
    A.createElement(Un, { className: "recharts-active-dot" }, s)
  );
};
function dB(e) {
  var { points: t, mainColor: r, activeDot: a, itemDataKey: u } = e,
    o = ve(ni),
    f = uB();
  if (t == null || f == null) return null;
  var s = t.find((v) => f.includes(v.payload));
  return Fe(s)
    ? null
    : sB({
        point: s,
        childIndex: Number(o),
        mainColor: r,
        dataKey: u,
        activeDot: a,
      });
}
var vB = "Invariant failed";
function hB(e, t) {
  throw new Error(vB);
}
var mB = ["x", "y"];
function Im() {
  return (
    (Im = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Im.apply(null, arguments)
  );
}
function SA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? SA(Object(r), !0).forEach(function (a) {
          yB(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : SA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function yB(e, t, r) {
  return (
    (t = pB(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pB(e) {
  var t = gB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bB(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = xB(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function xB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function SB(e, t) {
  var { x: r, y: a } = e,
    u = bB(e, mB),
    o = "".concat(r),
    f = parseInt(o, 10),
    s = "".concat(a),
    v = parseInt(s, 10),
    h = "".concat(t.height || u.height),
    m = parseInt(h, 10),
    p = "".concat(t.width || u.width),
    g = parseInt(p, 10);
  return yu(
    yu(yu(yu(yu({}, t), u), f ? { x: f } : {}), v ? { y: v } : {}),
    {},
    { height: m, width: g, name: t.name, radius: t.radius },
  );
}
function Sp(e) {
  return A.createElement(
    BL,
    Im(
      {
        shapeType: "rectangle",
        propTransformer: SB,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var OB = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return (a, u) => {
      if (ye(t)) return t;
      var o = ye(a) || Fe(a);
      return o ? t(a, u) : (o || hB(), r);
    };
  },
  AB = {},
  iT = On({
    name: "errorBars",
    initialState: AB,
    reducers: {
      addErrorBar: (e, t) => {
        var { itemId: r, errorBar: a } = t.payload;
        (e[r] || (e[r] = []), e[r].push(a));
      },
      replaceErrorBar: (e, t) => {
        var { itemId: r, prev: a, next: u } = t.payload;
        e[r] &&
          (e[r] = e[r].map((o) =>
            o.dataKey === a.dataKey && o.direction === a.direction ? u : o,
          ));
      },
      removeErrorBar: (e, t) => {
        var { itemId: r, errorBar: a } = t.payload;
        e[r] &&
          (e[r] = e[r].filter(
            (u) => u.dataKey !== a.dataKey || u.direction !== a.direction,
          ));
      },
    },
  }),
  { addErrorBar: nH, replaceErrorBar: rH, removeErrorBar: aH } = iT.actions,
  wB = iT.reducer,
  EB = ["children"];
function _B(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = TB(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function TB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var MB = {
    data: [],
    xAxisId: "xAxis-0",
    yAxisId: "yAxis-0",
    dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
    errorBarOffset: 0,
  },
  DB = A.createContext(MB);
function lT(e) {
  var { children: t } = e,
    r = _B(e, EB);
  return A.createElement(DB.Provider, { value: r }, t);
}
function Op(e, t) {
  var r,
    a,
    u = ve((h) => kr(h, e)),
    o = ve((h) => Lr(h, t)),
    f =
      (r = u?.allowDataOverflow) !== null && r !== void 0
        ? r
        : vn.allowDataOverflow,
    s =
      (a = o?.allowDataOverflow) !== null && a !== void 0
        ? a
        : hn.allowDataOverflow,
    v = f || s;
  return { needClip: v, needClipX: f, needClipY: s };
}
function uT(e) {
  var { xAxisId: t, yAxisId: r, clipPathId: a } = e,
    u = xp(),
    { needClipX: o, needClipY: f, needClip: s } = Op(t, r);
  if (!s) return null;
  var { x: v, y: h, width: m, height: p } = u;
  return A.createElement(
    "clipPath",
    { id: "clipPath-".concat(a) },
    A.createElement("rect", {
      x: o ? v : v - m / 2,
      y: f ? h : h - p / 2,
      width: o ? m : m * 2,
      height: f ? p : p * 2,
    }),
  );
}
var jB = ["onMouseEnter", "onMouseLeave", "onClick"],
  CB = ["value", "background", "tooltipPosition"],
  PB = ["id"],
  NB = ["onMouseEnter", "onClick", "onMouseLeave"];
function pa() {
  return (
    (pa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    pa.apply(null, arguments)
  );
}
function OA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? OA(Object(r), !0).forEach(function (a) {
          zB(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : OA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function zB(e, t, r) {
  return (
    (t = RB(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function RB(e) {
  var t = kB(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kB(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mf(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = LB(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function LB(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var BB = (e) => {
  var { dataKey: t, name: r, fill: a, legendType: u, hide: o } = e;
  return [
    { inactive: o, dataKey: t, type: u, color: a, value: Cf(r, t), payload: e },
  ];
};
function UB(e) {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: a,
    fill: u,
    name: o,
    hide: f,
    unit: s,
  } = e;
  return {
    dataDefinedOnItem: void 0,
    positions: void 0,
    settings: {
      stroke: r,
      strokeWidth: a,
      fill: u,
      dataKey: t,
      nameKey: void 0,
      name: Cf(o, t),
      hide: f,
      type: e.tooltipType,
      color: e.fill,
      unit: s,
    },
  };
}
function $B(e) {
  var t = ve(ni),
    { data: r, dataKey: a, background: u, allOtherBarProps: o } = e,
    { onMouseEnter: f, onMouseLeave: s, onClick: v } = o,
    h = mf(o, jB),
    m = Q2(f, a),
    p = W2(s),
    g = F2(v, a);
  if (!u || r == null) return null;
  var b = rt(u, !1);
  return A.createElement(
    A.Fragment,
    null,
    r.map((O, S) => {
      var { value: w, background: _, tooltipPosition: M } = O,
        T = mf(O, CB);
      if (!_) return null;
      var N = m(O, S),
        z = p(O, S),
        R = g(O, S),
        B = $t(
          $t(
            $t(
              $t(
                $t({ option: u, isActive: String(S) === t }, T),
                {},
                { fill: "#eee" },
                _,
              ),
              b,
            ),
            Sf(h, O, S),
          ),
          {},
          {
            onMouseEnter: N,
            onMouseLeave: z,
            onClick: R,
            dataKey: a,
            index: S,
            className: "recharts-bar-background-rectangle",
          },
        );
      return A.createElement(
        Sp,
        pa({ key: "background-bar-".concat(B.index) }, B),
      );
    }),
  );
}
function qB(e) {
  var { showLabels: t, children: r, rects: a } = e,
    u = a?.map((o) => {
      var f = { x: o.x, y: o.y, width: o.width, height: o.height };
      return $t(
        $t({}, f),
        {},
        {
          value: o.value,
          payload: o.payload,
          parentViewBox: o.parentViewBox,
          viewBox: f,
          fill: o.fill,
        },
      );
    });
  return A.createElement(K2, { value: t ? u : void 0 }, r);
}
function HB(e) {
  var {
      shape: t,
      activeBar: r,
      baseProps: a,
      entry: u,
      index: o,
      dataKey: f,
    } = e,
    s = ve(ni),
    v = ve(A2),
    h = r && String(o) === s && (v == null || f === v),
    m = h ? r : t;
  return A.createElement(
    Sp,
    pa({}, a, u, { isActive: h, option: m, index: o, dataKey: f }),
  );
}
function YB(e) {
  var { shape: t, baseProps: r, entry: a, index: u, dataKey: o } = e;
  return A.createElement(
    Sp,
    pa({}, r, a, { isActive: !1, option: t, index: u, dataKey: o }),
  );
}
function IB(e) {
  var { data: t, props: r } = e,
    a = ga(r),
    { id: u } = a,
    o = mf(a, PB),
    { shape: f, dataKey: s, activeBar: v } = r,
    { onMouseEnter: h, onClick: m, onMouseLeave: p } = r,
    g = mf(r, NB),
    b = Q2(h, s),
    O = W2(p),
    S = F2(m, s);
  return t
    ? A.createElement(
        A.Fragment,
        null,
        t.map((w, _) =>
          A.createElement(
            Un,
            pa({ className: "recharts-bar-rectangle" }, Sf(g, w, _), {
              onMouseEnter: b(w, _),
              onMouseLeave: O(w, _),
              onClick: S(w, _),
              key: "rectangle-"
                .concat(w?.x, "-")
                .concat(w?.y, "-")
                .concat(w?.value, "-")
                .concat(_),
            }),
            v
              ? A.createElement(HB, {
                  shape: f,
                  activeBar: v,
                  baseProps: o,
                  entry: w,
                  index: _,
                  dataKey: s,
                })
              : A.createElement(YB, {
                  shape: f,
                  baseProps: o,
                  entry: w,
                  index: _,
                  dataKey: s,
                }),
          ),
        ),
      )
    : null;
}
function KB(e) {
  var { props: t, previousRectanglesRef: r } = e,
    {
      data: a,
      layout: u,
      isAnimationActive: o,
      animationBegin: f,
      animationDuration: s,
      animationEasing: v,
      onAnimationEnd: h,
      onAnimationStart: m,
    } = t,
    p = r.current,
    g = Uf(t, "recharts-bar-"),
    [b, O] = A.useState(!1),
    S = !b,
    w = A.useCallback(() => {
      (typeof h == "function" && h(), O(!1));
    }, [h]),
    _ = A.useCallback(() => {
      (typeof m == "function" && m(), O(!0));
    }, [m]);
  return A.createElement(
    qB,
    { showLabels: S, rects: a },
    A.createElement(
      Bf,
      {
        animationId: g,
        begin: f,
        duration: s,
        isActive: o,
        easing: v,
        onAnimationEnd: w,
        onAnimationStart: _,
        key: g,
      },
      (M) => {
        var T =
          M === 1
            ? a
            : a?.map((N, z) => {
                var R = p && p[z];
                if (R)
                  return $t(
                    $t({}, N),
                    {},
                    {
                      x: dt(R.x, N.x, M),
                      y: dt(R.y, N.y, M),
                      width: dt(R.width, N.width, M),
                      height: dt(R.height, N.height, M),
                    },
                  );
                if (u === "horizontal") {
                  var B = dt(0, N.height, M);
                  return $t(
                    $t({}, N),
                    {},
                    { y: N.y + N.height - B, height: B },
                  );
                }
                var X = dt(0, N.width, M);
                return $t($t({}, N), {}, { width: X });
              });
        return (
          M > 0 && (r.current = T ?? null),
          T == null
            ? null
            : A.createElement(
                Un,
                null,
                A.createElement(IB, { props: t, data: T }),
              )
        );
      },
    ),
    A.createElement(X2, { label: t.label }),
    t.children,
  );
}
function GB(e) {
  var t = A.useRef(null);
  return A.createElement(KB, { previousRectanglesRef: t, props: e });
}
var oT = 0,
  XB = (e, t) => {
    var r = Array.isArray(e.value) ? e.value[1] : e.value;
    return { x: e.x, y: e.y, value: r, errorVal: Ot(e, t) };
  };
class VB extends A.PureComponent {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: a,
      className: u,
      xAxisId: o,
      yAxisId: f,
      needClip: s,
      background: v,
      id: h,
    } = this.props;
    if (t || r == null) return null;
    var m = ke("recharts-bar", u),
      p = h;
    return A.createElement(
      Un,
      { className: m, id: h },
      s &&
        A.createElement(
          "defs",
          null,
          A.createElement(uT, { clipPathId: p, xAxisId: o, yAxisId: f }),
        ),
      A.createElement(
        Un,
        {
          className: "recharts-bar-rectangles",
          clipPath: s ? "url(#clipPath-".concat(p, ")") : void 0,
        },
        A.createElement($B, {
          data: r,
          dataKey: a,
          background: v,
          allOtherBarProps: this.props,
        }),
        A.createElement(GB, this.props),
      ),
    );
  }
}
var ZB = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  hide: !1,
  isAnimationActive: !ii.isSsr,
  legendType: "rect",
  minPointSize: oT,
  xAxisId: 0,
  yAxisId: 0,
};
function QB(e) {
  var {
      xAxisId: t,
      yAxisId: r,
      hide: a,
      legendType: u,
      minPointSize: o,
      activeBar: f,
      animationBegin: s,
      animationDuration: v,
      animationEasing: h,
      isAnimationActive: m,
    } = e,
    { needClip: p } = Op(t, r),
    g = kf(),
    b = Ht(),
    O = Mj(e.children, N2),
    S = ve((M) => wU(M, t, r, b, e.id, O));
  if (g !== "vertical" && g !== "horizontal") return null;
  var w,
    _ = S?.[0];
  return (
    _ == null || _.height == null || _.width == null
      ? (w = 0)
      : (w = g === "vertical" ? _.height / 2 : _.width / 2),
    A.createElement(
      lT,
      {
        xAxisId: t,
        yAxisId: r,
        data: S,
        dataPointFormatter: XB,
        errorBarOffset: w,
      },
      A.createElement(
        VB,
        pa({}, e, {
          layout: g,
          needClip: p,
          data: S,
          xAxisId: t,
          yAxisId: r,
          hide: a,
          legendType: u,
          minPointSize: o,
          activeBar: f,
          animationBegin: s,
          animationDuration: v,
          animationEasing: h,
          isAnimationActive: m,
        }),
      ),
    )
  );
}
function WB(e) {
  var {
      layout: t,
      barSettings: { dataKey: r, minPointSize: a },
      pos: u,
      bandSize: o,
      xAxis: f,
      yAxis: s,
      xAxisTicks: v,
      yAxisTicks: h,
      stackedData: m,
      displayedData: p,
      offset: g,
      cells: b,
      parentViewBox: O,
    } = e,
    S = t === "horizontal" ? s : f,
    w = m ? S.scale.domain() : null,
    _ = HN({ numericAxis: S });
  return p
    .map((M, T) => {
      var N, z, R, B, X, le;
      m
        ? (N = kN(m[T], w))
        : ((N = Ot(M, r)), Array.isArray(N) || (N = [_, N]));
      var ae = OB(a, oT)(N[1], T);
      if (t === "horizontal") {
        var V,
          [ne, se] = [s.scale(N[0]), s.scale(N[1])];
        ((z = sS({
          axis: f,
          ticks: v,
          bandSize: o,
          offset: u.offset,
          entry: M,
          index: T,
        })),
          (R = (V = se ?? ne) !== null && V !== void 0 ? V : void 0),
          (B = u.size));
        var F = ne - se;
        if (
          ((X = bn(F) ? 0 : F),
          (le = { x: z, y: g.top, width: B, height: g.height }),
          Math.abs(ae) > 0 && Math.abs(X) < Math.abs(ae))
        ) {
          var W = Wt(X || ae) * (Math.abs(ae) - Math.abs(X));
          ((R -= W), (X += W));
        }
      } else {
        var [C, U] = [f.scale(N[0]), f.scale(N[1])];
        if (
          ((z = C),
          (R = sS({
            axis: s,
            ticks: h,
            bandSize: o,
            offset: u.offset,
            entry: M,
            index: T,
          })),
          (B = U - C),
          (X = u.size),
          (le = { x: g.left, y: R, width: g.width, height: X }),
          Math.abs(ae) > 0 && Math.abs(B) < Math.abs(ae))
        ) {
          var I = Wt(B || ae) * (Math.abs(ae) - Math.abs(B));
          B += I;
        }
      }
      if (z == null || R == null || B == null || X == null) return null;
      var ee = $t(
        $t({}, M),
        {},
        {
          x: z,
          y: R,
          width: B,
          height: X,
          value: m ? N : N[1],
          payload: M,
          background: le,
          tooltipPosition: { x: z + B / 2, y: R + X / 2 },
          parentViewBox: O,
        },
        b && b[T] && b[T].props,
      );
      return ee;
    })
    .filter(Boolean);
}
function FB(e) {
  var t = en(e, ZB),
    r = Ht();
  return A.createElement(tT, { id: t.id, type: "bar" }, (a) =>
    A.createElement(
      A.Fragment,
      null,
      A.createElement(eT, { legendPayload: BB(t) }),
      A.createElement(J2, { fn: UB, args: t }),
      A.createElement(rT, {
        type: "bar",
        id: a,
        data: void 0,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        stackId: qN(t.stackId),
        hide: t.hide,
        barSize: t.barSize,
        minPointSize: t.minPointSize,
        maxBarSize: t.maxBarSize,
        isPanorama: r,
      }),
      A.createElement(QB, pa({}, t, { id: a })),
    ),
  );
}
var cT = A.memo(FB);
cT.displayName = "Bar";
function AA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Mc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? AA(Object(r), !0).forEach(function (a) {
          JB(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : AA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function JB(e, t, r) {
  return (
    (t = eU(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function eU(e) {
  var t = tU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nU = (e, t) => t,
  rU = (e, t, r) => r,
  aU = (e, t, r, a) => a,
  iU = (e, t, r, a, u) => u,
  Vu = K([Jf, iU], (e, t) =>
    e.filter((r) => r.type === "bar").find((r) => r.id === t),
  ),
  lU = K([Vu], (e) => e?.maxBarSize),
  uU = (e, t, r, a, u, o) => o,
  wA = (e, t, r) => {
    var a = r ?? e;
    if (!Fe(a)) return Vn(a, t, 0);
  },
  oU = K([Re, Jf, nU, rU, aU], (e, t, r, a, u) =>
    t
      .filter((o) => (e === "horizontal" ? o.xAxisId === r : o.yAxisId === a))
      .filter((o) => o.isPanorama === u)
      .filter((o) => o.hide === !1)
      .filter((o) => o.type === "bar"),
  ),
  cU = (e, t, r, a) => {
    var u = Re(e);
    return u === "horizontal" ? Lm(e, "yAxis", r, a) : Lm(e, "xAxis", t, a);
  },
  fU = (e, t, r) => {
    var a = Re(e);
    return a === "horizontal" ? MO(e, "xAxis", t) : MO(e, "yAxis", r);
  },
  sU = (e, t, r) => {
    var a = {},
      u = e.filter(Ff),
      o = e.filter((h) => h.stackId == null),
      f = u.reduce(
        (h, m) => (
          h[m.stackId] || (h[m.stackId] = []),
          h[m.stackId].push(m),
          h
        ),
        a,
      ),
      s = Object.entries(f).map((h) => {
        var [m, p] = h,
          g = p.map((O) => O.dataKey),
          b = wA(t, r, p[0].barSize);
        return { stackId: m, dataKeys: g, barSize: b };
      }),
      v = o.map((h) => {
        var m = [h.dataKey].filter((g) => g != null),
          p = wA(t, r, h.barSize);
        return { stackId: void 0, dataKeys: m, barSize: p };
      });
    return [...s, ...v];
  },
  dU = K([oU, T6, fU], sU),
  vU = (e, t, r, a, u) => {
    var o,
      f,
      s = Vu(e, t, r, a, u);
    if (s != null) {
      var v = Re(e),
        h = v_(e),
        { maxBarSize: m } = s,
        p = Fe(m) ? h : m,
        g,
        b;
      return (
        v === "horizontal"
          ? ((g = ya(e, "xAxis", t, a)), (b = ma(e, "xAxis", t, a)))
          : ((g = ya(e, "yAxis", r, a)), (b = ma(e, "yAxis", r, a))),
        (o = (f = _u(g, b, !0)) !== null && f !== void 0 ? f : p) !== null &&
        o !== void 0
          ? o
          : 0
      );
    }
  },
  fT = (e, t, r, a) => {
    var u = Re(e),
      o,
      f;
    return (
      u === "horizontal"
        ? ((o = ya(e, "xAxis", t, a)), (f = ma(e, "xAxis", t, a)))
        : ((o = ya(e, "yAxis", r, a)), (f = ma(e, "yAxis", r, a))),
      _u(o, f)
    );
  };
function hU(e, t, r, a, u) {
  var o = a.length;
  if (!(o < 1)) {
    var f = Vn(e, r, 0, !0),
      s,
      v = [];
    if (Sn(a[0].barSize)) {
      var h = !1,
        m = r / o,
        p = a.reduce((_, M) => _ + (M.barSize || 0), 0);
      ((p += (o - 1) * f),
        p >= r && ((p -= (o - 1) * f), (f = 0)),
        p >= r && m > 0 && ((h = !0), (m *= 0.9), (p = o * m)));
      var g = ((r - p) / 2) >> 0,
        b = { offset: g - f, size: 0 };
      s = a.reduce((_, M) => {
        var T,
          N = {
            stackId: M.stackId,
            dataKeys: M.dataKeys,
            position: {
              offset: b.offset + b.size + f,
              size: h ? m : (T = M.barSize) !== null && T !== void 0 ? T : 0,
            },
          },
          z = [..._, N];
        return ((b = z[z.length - 1].position), z);
      }, v);
    } else {
      var O = Vn(t, r, 0, !0);
      r - 2 * O - (o - 1) * f <= 0 && (f = 0);
      var S = (r - 2 * O - (o - 1) * f) / o;
      S > 1 && (S >>= 0);
      var w = Sn(u) ? Math.min(S, u) : S;
      s = a.reduce(
        (_, M, T) => [
          ..._,
          {
            stackId: M.stackId,
            dataKeys: M.dataKeys,
            position: { offset: O + (S + f) * T + (S - w) / 2, size: w },
          },
        ],
        v,
      );
    }
    return s;
  }
}
var mU = (e, t, r, a, u, o, f) => {
    var s = Fe(f) ? t : f,
      v = hU(r, a, u !== o ? u : o, e, s);
    return (
      u !== o &&
        v != null &&
        (v = v.map((h) =>
          Mc(
            Mc({}, h),
            {},
            {
              position: Mc(
                Mc({}, h.position),
                {},
                { offset: h.position.offset - u / 2 },
              ),
            },
          ),
        )),
      v
    );
  },
  yU = K([dU, v_, _6, h_, vU, fT, lU], mU),
  pU = (e, t, r, a) => ya(e, "xAxis", t, a),
  gU = (e, t, r, a) => ya(e, "yAxis", r, a),
  bU = (e, t, r, a) => ma(e, "xAxis", t, a),
  xU = (e, t, r, a) => ma(e, "yAxis", r, a),
  SU = K([yU, Vu], (e, t) => {
    if (!(e == null || t == null)) {
      var r = e.find(
        (a) =>
          a.stackId === t.stackId &&
          t.dataKey != null &&
          a.dataKeys.includes(t.dataKey),
      );
      if (r != null) return r.position;
    }
  }),
  OU = (e, t) => {
    var r = ep(t);
    if (!(!e || r == null || t == null)) {
      var { stackId: a } = t;
      if (a != null) {
        var u = e[a];
        if (u) {
          var { stackedData: o } = u;
          if (o) return o.find((f) => f.key === r);
        }
      }
    }
  },
  AU = K([cU, Vu], OU),
  wU = K(
    [At, py, pU, gU, bU, xU, SU, Re, Gf, fT, AU, Vu, uU],
    (e, t, r, a, u, o, f, s, v, h, m, p, g) => {
      var { chartData: b, dataStartIndex: O, dataEndIndex: S } = v;
      if (
        !(
          p == null ||
          f == null ||
          t == null ||
          (s !== "horizontal" && s !== "vertical") ||
          r == null ||
          a == null ||
          u == null ||
          o == null ||
          h == null
        )
      ) {
        var { data: w } = p,
          _;
        if (
          (w != null && w.length > 0 ? (_ = w) : (_ = b?.slice(O, S + 1)),
          _ != null)
        )
          return WB({
            layout: s,
            barSettings: p,
            pos: f,
            parentViewBox: t,
            bandSize: h,
            xAxis: r,
            yAxis: a,
            xAxisTicks: u,
            yAxisTicks: o,
            stackedData: m,
            displayedData: _,
            offset: e,
            cells: g,
          });
      }
    },
  ),
  EU = (e) => {
    var { chartData: t } = e,
      r = ut(),
      a = Ht();
    return (
      A.useEffect(
        () =>
          a
            ? () => {}
            : (r(BO(t)),
              () => {
                r(BO(void 0));
              }),
        [t, r, a],
      ),
      null
    );
  },
  EA = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  sT = On({
    name: "brush",
    initialState: EA,
    reducers: {
      setBrushSettings(e, t) {
        return t.payload == null ? EA : t.payload;
      },
    },
  }),
  { setBrushSettings: iH } = sT.actions,
  _U = sT.reducer;
function _A(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Dc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _A(Object(r), !0).forEach(function (a) {
          dT(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _A(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function dT(e, t, r) {
  return (
    (t = TU(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TU(e) {
  var t = MU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var DU = (e, t) => {
  var { x: r, y: a } = e,
    { x: u, y: o } = t;
  return {
    x: Math.min(r, u),
    y: Math.min(a, o),
    width: Math.abs(u - r),
    height: Math.abs(o - a),
  };
};
class is {
  static create(t) {
    return new is(t);
  }
  constructor(t) {
    this.scale = t;
  }
  get domain() {
    return this.scale.domain;
  }
  get range() {
    return this.scale.range;
  }
  get rangeMin() {
    return this.range()[0];
  }
  get rangeMax() {
    return this.range()[1];
  }
  get bandwidth() {
    return this.scale.bandwidth;
  }
  apply(t) {
    var { bandAware: r, position: a } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t !== void 0) {
      if (a)
        switch (a) {
          case "start":
            return this.scale(t);
          case "middle": {
            var u = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(t) + u;
          }
          case "end": {
            var o = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(t) + o;
          }
          default:
            return this.scale(t);
        }
      if (r) {
        var f = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + f;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(),
      a = r[0],
      u = r[r.length - 1];
    return a <= u ? t >= a && t <= u : t >= u && t <= a;
  }
}
dT(is, "EPS", 1e-4);
var jU = (e) => {
  var t = Object.keys(e).reduce(
    (r, a) => Dc(Dc({}, r), {}, { [a]: is.create(e[a]) }),
    {},
  );
  return Dc(
    Dc({}, t),
    {},
    {
      apply(r) {
        var { bandAware: a, position: u } =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.fromEntries(
          Object.entries(r).map((o) => {
            var [f, s] = o;
            return [f, t[f].apply(s, { bandAware: a, position: u })];
          }),
        );
      },
      isInRange(r) {
        return Object.keys(r).every((a) => t[a].isInRange(r[a]));
      },
    },
  );
};
function CU(e) {
  return ((e % 180) + 180) % 180;
}
var PU = function (t) {
    var { width: r, height: a } = t,
      u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      o = CU(u),
      f = (o * Math.PI) / 180,
      s = Math.atan(a / r),
      v = f > s && f < Math.PI - s ? a / Math.sin(f) : r / Math.cos(f);
    return Math.abs(v);
  },
  NU = { dots: [], areas: [], lines: [] },
  vT = On({
    name: "referenceElements",
    initialState: NU,
    reducers: {
      addDot: (e, t) => {
        e.dots.push(t.payload);
      },
      removeDot: (e, t) => {
        var r = Tr(e).dots.findIndex((a) => a === t.payload);
        r !== -1 && e.dots.splice(r, 1);
      },
      addArea: (e, t) => {
        e.areas.push(t.payload);
      },
      removeArea: (e, t) => {
        var r = Tr(e).areas.findIndex((a) => a === t.payload);
        r !== -1 && e.areas.splice(r, 1);
      },
      addLine: (e, t) => {
        e.lines.push(t.payload);
      },
      removeLine: (e, t) => {
        var r = Tr(e).lines.findIndex((a) => a === t.payload);
        r !== -1 && e.lines.splice(r, 1);
      },
    },
  }),
  {
    addDot: lH,
    removeDot: uH,
    addArea: zU,
    removeArea: RU,
    addLine: oH,
    removeLine: cH,
  } = vT.actions,
  kU = vT.reducer,
  hT = A.createContext(void 0),
  LU = (e) => {
    var { children: t } = e,
      [r] = A.useState("".concat(Au("recharts"), "-clip")),
      a = xp();
    if (a == null) return null;
    var { x: u, y: o, width: f, height: s } = a;
    return A.createElement(
      hT.Provider,
      { value: r },
      A.createElement(
        "defs",
        null,
        A.createElement(
          "clipPath",
          { id: r },
          A.createElement("rect", { x: u, y: o, height: s, width: f }),
        ),
      ),
      t,
    );
  },
  BU = () => A.useContext(hT);
function TA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function MA(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? TA(Object(r), !0).forEach(function (a) {
          Ap(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : TA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function Ap(e, t, r) {
  return (
    (t = UU(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function UU(e) {
  var t = $U(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $U(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Km() {
  return (
    (Km = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Km.apply(null, arguments)
  );
}
var qU = (e, t, r, a, u, o, f) => {
    var { x1: s, x2: v, y1: h, y2: m } = f;
    if (u == null || o == null) return null;
    var p = jU({ x: u, y: o }),
      g = {
        x: e ? p.x.apply(s, { position: "start" }) : p.x.rangeMin,
        y: r ? p.y.apply(h, { position: "start" }) : p.y.rangeMin,
      },
      b = {
        x: t ? p.x.apply(v, { position: "end" }) : p.x.rangeMax,
        y: a ? p.y.apply(m, { position: "end" }) : p.y.rangeMax,
      };
    return f.ifOverflow === "discard" && (!p.isInRange(g) || !p.isInRange(b))
      ? null
      : DU(g, b);
  },
  HU = (e, t) => {
    var r;
    return (
      A.isValidElement(e)
        ? (r = A.cloneElement(e, t))
        : typeof e == "function"
          ? (r = e(t))
          : (r = A.createElement(
              Oy,
              Km({}, t, { className: "recharts-reference-area-rect" }),
            )),
      r
    );
  };
function YU(e) {
  var t = ut();
  return (
    A.useEffect(
      () => (
        t(zU(e)),
        () => {
          t(RU(e));
        }
      ),
    ),
    null
  );
}
function IU(e) {
  var {
      x1: t,
      x2: r,
      y1: a,
      y2: u,
      className: o,
      shape: f,
      xAxisId: s,
      yAxisId: v,
    } = e,
    h = BU(),
    m = Ht(),
    p = ve((N) => ha(N, "xAxis", s, m)),
    g = ve((N) => ha(N, "yAxis", v, m));
  if (p == null || !g == null) return null;
  var b = Ft(t),
    O = Ft(r),
    S = Ft(a),
    w = Ft(u);
  if (!b && !O && !S && !w && !f) return null;
  var _ = qU(b, O, S, w, p, g, e);
  if (!_ && !f) return null;
  var M = e.ifOverflow === "hidden",
    T = M ? "url(#".concat(h, ")") : void 0;
  return A.createElement(
    Un,
    { className: ke("recharts-reference-area", o) },
    HU(f, MA(MA({ clipPath: T }, rt(e, !0)), _)),
    A.createElement($2, _, A.createElement(Y2, { label: e.label }), e.children),
  );
}
function KU(e) {
  return A.createElement(
    A.Fragment,
    null,
    A.createElement(YU, {
      yAxisId: e.yAxisId,
      xAxisId: e.xAxisId,
      ifOverflow: e.ifOverflow,
      x1: e.x1,
      x2: e.x2,
      y1: e.y1,
      y2: e.y2,
    }),
    A.createElement(IU, e),
  );
}
class wp extends A.Component {
  render() {
    return A.createElement(KU, this.props);
  }
}
Ap(wp, "displayName", "ReferenceArea");
Ap(wp, "defaultProps", {
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
function il(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var a in t)
    if ({}.hasOwnProperty.call(t, a) && !{}.hasOwnProperty.call(e, a))
      return !1;
  return !0;
}
function mT(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var a = [], u = 0; u < e.length; u += t) a.push(e[u]);
  return a;
}
function GU(e, t, r) {
  var a = { width: e.width + t.width, height: e.height + t.height };
  return PU(a, r);
}
function XU(e, t, r) {
  var a = r === "width",
    { x: u, y: o, width: f, height: s } = e;
  return t === 1
    ? { start: a ? u : o, end: a ? u + f : o + s }
    : { start: a ? u + f : o + s, end: a ? u : o };
}
function yf(e, t, r, a, u) {
  if (e * t < e * a || e * t > e * u) return !1;
  var o = r();
  return e * (t - (e * o) / 2 - a) >= 0 && e * (t + (e * o) / 2 - u) <= 0;
}
function VU(e, t) {
  return mT(e, t + 1);
}
function ZU(e, t, r, a, u) {
  for (
    var o = (a || []).slice(),
      { start: f, end: s } = t,
      v = 0,
      h = 1,
      m = f,
      p = function () {
        var O = a?.[v];
        if (O === void 0) return { v: mT(a, h) };
        var S = v,
          w,
          _ = () => (w === void 0 && (w = r(O, S)), w),
          M = O.coordinate,
          T = v === 0 || yf(e, M, _, m, s);
        (T || ((v = 0), (m = f), (h += 1)),
          T && ((m = M + e * (_() / 2 + u)), (v += h)));
      },
      g;
    h <= o.length;
  )
    if (((g = p()), g)) return g.v;
  return [];
}
function DA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? DA(Object(r), !0).forEach(function (a) {
          QU(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : DA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function QU(e, t, r) {
  return (
    (t = WU(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function WU(e) {
  var t = FU(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FU(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JU(e, t, r, a, u) {
  for (
    var o = (a || []).slice(),
      f = o.length,
      { start: s } = t,
      { end: v } = t,
      h = function (g) {
        var b = o[g],
          O,
          S = () => (O === void 0 && (O = r(b, g)), O);
        if (g === f - 1) {
          var w = e * (b.coordinate + (e * S()) / 2 - v);
          o[g] = b = Lt(
            Lt({}, b),
            {},
            { tickCoord: w > 0 ? b.coordinate - w * e : b.coordinate },
          );
        } else o[g] = b = Lt(Lt({}, b), {}, { tickCoord: b.coordinate });
        var _ = yf(e, b.tickCoord, S, s, v);
        _ &&
          ((v = b.tickCoord - e * (S() / 2 + u)),
          (o[g] = Lt(Lt({}, b), {}, { isShow: !0 })));
      },
      m = f - 1;
    m >= 0;
    m--
  )
    h(m);
  return o;
}
function e$(e, t, r, a, u, o) {
  var f = (a || []).slice(),
    s = f.length,
    { start: v, end: h } = t;
  if (o) {
    var m = a[s - 1],
      p = r(m, s - 1),
      g = e * (m.coordinate + (e * p) / 2 - h);
    f[s - 1] = m = Lt(
      Lt({}, m),
      {},
      { tickCoord: g > 0 ? m.coordinate - g * e : m.coordinate },
    );
    var b = yf(e, m.tickCoord, () => p, v, h);
    b &&
      ((h = m.tickCoord - e * (p / 2 + u)),
      (f[s - 1] = Lt(Lt({}, m), {}, { isShow: !0 })));
  }
  for (
    var O = o ? s - 1 : s,
      S = function (M) {
        var T = f[M],
          N,
          z = () => (N === void 0 && (N = r(T, M)), N);
        if (M === 0) {
          var R = e * (T.coordinate - (e * z()) / 2 - v);
          f[M] = T = Lt(
            Lt({}, T),
            {},
            { tickCoord: R < 0 ? T.coordinate - R * e : T.coordinate },
          );
        } else f[M] = T = Lt(Lt({}, T), {}, { tickCoord: T.coordinate });
        var B = yf(e, T.tickCoord, z, v, h);
        B &&
          ((v = T.tickCoord + e * (z() / 2 + u)),
          (f[M] = Lt(Lt({}, T), {}, { isShow: !0 })));
      },
      w = 0;
    w < O;
    w++
  )
    S(w);
  return f;
}
function Ep(e, t, r) {
  var {
    tick: a,
    ticks: u,
    viewBox: o,
    minTickGap: f,
    orientation: s,
    interval: v,
    tickFormatter: h,
    unit: m,
    angle: p,
  } = e;
  if (!u || !u.length || !a) return [];
  if (ye(v) || ii.isSsr) {
    var g;
    return (g = VU(u, ye(v) ? v : 0)) !== null && g !== void 0 ? g : [];
  }
  var b = [],
    O = s === "top" || s === "bottom" ? "width" : "height",
    S =
      m && O === "width"
        ? Ou(m, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    w = (T, N) => {
      var z = typeof h == "function" ? h(T.value, N) : T.value;
      return O === "width"
        ? GU(Ou(z, { fontSize: t, letterSpacing: r }), S, p)
        : Ou(z, { fontSize: t, letterSpacing: r })[O];
    },
    _ = u.length >= 2 ? Wt(u[1].coordinate - u[0].coordinate) : 1,
    M = XU(o, _, O);
  return v === "equidistantPreserveStart"
    ? ZU(_, M, w, u, f)
    : (v === "preserveStart" || v === "preserveStartEnd"
        ? (b = e$(_, M, w, u, f, v === "preserveStartEnd"))
        : (b = JU(_, M, w, u, f)),
      b.filter((T) => T.isShow));
}
var t$ = (e) => {
    var {
        ticks: t,
        label: r,
        labelGapWithTick: a = 5,
        tickSize: u = 0,
        tickMargin: o = 0,
      } = e,
      f = 0;
    if (t) {
      t.forEach((m) => {
        if (m) {
          var p = m.getBoundingClientRect();
          p.width > f && (f = p.width);
        }
      });
      var s = r ? r.getBoundingClientRect().width : 0,
        v = u + o,
        h = f + v + s + (r ? a : 0);
      return Math.round(h);
    }
    return 0;
  },
  n$ = ["axisLine", "width", "height", "className", "hide", "ticks"],
  r$ = ["viewBox"],
  a$ = ["viewBox"];
function Gm(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = i$(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function i$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function ri() {
  return (
    (ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    ri.apply(null, arguments)
  );
}
function jA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? jA(Object(r), !0).forEach(function (a) {
          l$(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : jA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function l$(e, t, r) {
  return (
    (t = u$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function u$(e) {
  var t = o$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function o$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _p = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
};
function c$(e) {
  var {
    x: t,
    y: r,
    width: a,
    height: u,
    orientation: o,
    mirror: f,
    axisLine: s,
    otherSvgProps: v,
  } = e;
  if (!s) return null;
  var h = yt(yt(yt({}, v), rt(s, !1)), {}, { fill: "none" });
  if (o === "top" || o === "bottom") {
    var m = +((o === "top" && !f) || (o === "bottom" && f));
    h = yt(yt({}, h), {}, { x1: t, y1: r + m * u, x2: t + a, y2: r + m * u });
  } else {
    var p = +((o === "left" && !f) || (o === "right" && f));
    h = yt(yt({}, h), {}, { x1: t + p * a, y1: r, x2: t + p * a, y2: r + u });
  }
  return A.createElement(
    "line",
    ri({}, h, {
      className: ke("recharts-cartesian-axis-line", Wi(s, "className")),
    }),
  );
}
function f$(e, t, r, a, u, o, f, s, v) {
  var h,
    m,
    p,
    g,
    b,
    O,
    S = s ? -1 : 1,
    w = e.tickSize || f,
    _ = ye(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (o) {
    case "top":
      ((h = m = e.coordinate),
        (g = r + +!s * u),
        (p = g - S * w),
        (O = p - S * v),
        (b = _));
      break;
    case "left":
      ((p = g = e.coordinate),
        (m = t + +!s * a),
        (h = m - S * w),
        (b = h - S * v),
        (O = _));
      break;
    case "right":
      ((p = g = e.coordinate),
        (m = t + +s * a),
        (h = m + S * w),
        (b = h + S * v),
        (O = _));
      break;
    default:
      ((h = m = e.coordinate),
        (g = r + +s * u),
        (p = g + S * w),
        (O = p + S * v),
        (b = _));
      break;
  }
  return { line: { x1: h, y1: p, x2: m, y2: g }, tick: { x: b, y: O } };
}
function s$(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function d$(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function v$(e) {
  var { option: t, tickProps: r, value: a } = e,
    u,
    o = ke(r.className, "recharts-cartesian-axis-tick-value");
  if (A.isValidElement(t))
    u = A.cloneElement(t, yt(yt({}, r), {}, { className: o }));
  else if (typeof t == "function") u = t(yt(yt({}, r), {}, { className: o }));
  else {
    var f = "recharts-cartesian-axis-tick-value";
    (typeof t != "boolean" && (f = ke(f, t?.className)),
      (u = A.createElement(gp, ri({}, r, { className: f }), a)));
  }
  return u;
}
function h$(e) {
  var {
      ticks: t = [],
      tick: r,
      tickLine: a,
      stroke: u,
      tickFormatter: o,
      unit: f,
      padding: s,
      tickTextProps: v,
      orientation: h,
      mirror: m,
      x: p,
      y: g,
      width: b,
      height: O,
      tickSize: S,
      tickMargin: w,
      fontSize: _,
      letterSpacing: M,
      getTicksConfig: T,
      events: N,
    } = e,
    z = Ep(yt(yt({}, T), {}, { ticks: t }), _, M),
    R = s$(h, m),
    B = d$(h, m),
    X = ga(T),
    le = rt(r, !1),
    ae = yt(yt({}, X), {}, { fill: "none" }, rt(a, !1)),
    V = z.map((ne, se) => {
      var { line: F, tick: W } = f$(ne, p, g, b, O, h, S, m, w),
        C = yt(
          yt(
            yt(
              yt({ textAnchor: R, verticalAnchor: B }, X),
              {},
              { stroke: "none", fill: u },
              le,
            ),
            W,
          ),
          {},
          {
            index: se,
            payload: ne,
            visibleTicksCount: z.length,
            tickFormatter: o,
            padding: s,
          },
          v,
        );
      return A.createElement(
        Un,
        ri(
          {
            className: "recharts-cartesian-axis-tick",
            key: "tick-"
              .concat(ne.value, "-")
              .concat(ne.coordinate, "-")
              .concat(ne.tickCoord),
          },
          Sf(N, ne, se),
        ),
        a &&
          A.createElement(
            "line",
            ri({}, ae, F, {
              className: ke(
                "recharts-cartesian-axis-tick-line",
                Wi(a, "className"),
              ),
            }),
          ),
        r &&
          A.createElement(v$, {
            option: r,
            tickProps: C,
            value: ""
              .concat(typeof o == "function" ? o(ne.value, se) : ne.value)
              .concat(f || ""),
          }),
      );
    });
  return V.length > 0
    ? A.createElement("g", { className: "recharts-cartesian-axis-ticks" }, V)
    : null;
}
var m$ = A.forwardRef((e, t) => {
    var {
        axisLine: r,
        width: a,
        height: u,
        className: o,
        hide: f,
        ticks: s,
      } = e,
      v = Gm(e, n$),
      [h, m] = A.useState(""),
      [p, g] = A.useState(""),
      b = A.useRef([]);
    A.useImperativeHandle(t, () => ({
      getCalculatedWidth: () => {
        var S;
        return t$({
          ticks: b.current,
          label: (S = e.labelRef) === null || S === void 0 ? void 0 : S.current,
          labelGapWithTick: 5,
          tickSize: e.tickSize,
          tickMargin: e.tickMargin,
        });
      },
    }));
    var O = A.useCallback(
      (S) => {
        if (S) {
          var w = S.getElementsByClassName(
            "recharts-cartesian-axis-tick-value",
          );
          b.current = Array.from(w);
          var _ = w[0];
          if (_) {
            var M = window.getComputedStyle(_),
              T = M.fontSize,
              N = M.letterSpacing;
            (T !== h || N !== p) && (m(T), g(N));
          }
        }
      },
      [h, p],
    );
    return f || (a != null && a <= 0) || (u != null && u <= 0)
      ? null
      : A.createElement(
          Un,
          { className: ke("recharts-cartesian-axis", o), ref: O },
          A.createElement(c$, {
            x: e.x,
            y: e.y,
            width: a,
            height: u,
            orientation: e.orientation,
            mirror: e.mirror,
            axisLine: r,
            otherSvgProps: ga(e),
          }),
          A.createElement(h$, {
            ticks: s,
            tick: e.tick,
            tickLine: e.tickLine,
            stroke: e.stroke,
            tickFormatter: e.tickFormatter,
            unit: e.unit,
            padding: e.padding,
            tickTextProps: e.tickTextProps,
            orientation: e.orientation,
            mirror: e.mirror,
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            tickSize: e.tickSize,
            tickMargin: e.tickMargin,
            fontSize: h,
            letterSpacing: p,
            getTicksConfig: e,
            events: v,
          }),
          A.createElement(
            $2,
            { x: e.x, y: e.y, width: e.width, height: e.height },
            A.createElement(Y2, { label: e.label }),
            e.children,
          ),
        );
  }),
  y$ = A.memo(m$, (e, t) => {
    var { viewBox: r } = e,
      a = Gm(e, r$),
      { viewBox: u } = t,
      o = Gm(t, a$);
    return il(r, u) && il(a, o);
  }),
  Tp = A.forwardRef((e, t) => {
    var r = en(e, _p);
    return A.createElement(y$, ri({}, r, { ref: t }));
  });
Tp.displayName = "CartesianAxis";
var p$ = ["x1", "y1", "x2", "y2", "key"],
  g$ = ["offset"],
  b$ = ["xAxisId", "yAxisId"],
  x$ = ["xAxisId", "yAxisId"];
function CA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? CA(Object(r), !0).forEach(function (a) {
          S$(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : CA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function S$(e, t, r) {
  return (
    (t = O$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function O$(e) {
  var t = A$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function A$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Va() {
  return (
    (Va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Va.apply(null, arguments)
  );
}
function pf(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = w$(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function w$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var E$ = (e) => {
  var { fill: t } = e;
  if (!t || t === "none") return null;
  var { fillOpacity: r, x: a, y: u, width: o, height: f, ry: s } = e;
  return A.createElement("rect", {
    x: a,
    y: u,
    ry: s,
    width: o,
    height: f,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg",
  });
};
function yT(e, t) {
  var r;
  if (A.isValidElement(e)) r = A.cloneElement(e, t);
  else if (typeof e == "function") r = e(t);
  else {
    var { x1: a, y1: u, x2: o, y2: f, key: s } = t,
      v = pf(t, p$),
      h = ga(v),
      { offset: m } = h,
      p = pf(h, g$);
    r = A.createElement(
      "line",
      Va({}, p, { x1: a, y1: u, x2: o, y2: f, fill: "none", key: s }),
    );
  }
  return r;
}
function _$(e) {
  var { x: t, width: r, horizontal: a = !0, horizontalPoints: u } = e;
  if (!a || !u || !u.length) return null;
  var { xAxisId: o, yAxisId: f } = e,
    s = pf(e, b$),
    v = u.map((h, m) => {
      var p = Bt(
        Bt({}, s),
        {},
        { x1: t, y1: h, x2: t + r, y2: h, key: "line-".concat(m), index: m },
      );
      return yT(a, p);
    });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    v,
  );
}
function T$(e) {
  var { y: t, height: r, vertical: a = !0, verticalPoints: u } = e;
  if (!a || !u || !u.length) return null;
  var { xAxisId: o, yAxisId: f } = e,
    s = pf(e, x$),
    v = u.map((h, m) => {
      var p = Bt(
        Bt({}, s),
        {},
        { x1: h, y1: t, x2: h, y2: t + r, key: "line-".concat(m), index: m },
      );
      return yT(a, p);
    });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    v,
  );
}
function M$(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: a,
    y: u,
    width: o,
    height: f,
    horizontalPoints: s,
    horizontal: v = !0,
  } = e;
  if (!v || !t || !t.length) return null;
  var h = s.map((p) => Math.round(p + u - u)).sort((p, g) => p - g);
  u !== h[0] && h.unshift(0);
  var m = h.map((p, g) => {
    var b = !h[g + 1],
      O = b ? u + f - p : h[g + 1] - p;
    if (O <= 0) return null;
    var S = g % t.length;
    return A.createElement("rect", {
      key: "react-".concat(g),
      y: p,
      x: a,
      height: O,
      width: o,
      stroke: "none",
      fill: t[S],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    m,
  );
}
function D$(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: a,
    x: u,
    y: o,
    width: f,
    height: s,
    verticalPoints: v,
  } = e;
  if (!t || !r || !r.length) return null;
  var h = v.map((p) => Math.round(p + u - u)).sort((p, g) => p - g);
  u !== h[0] && h.unshift(0);
  var m = h.map((p, g) => {
    var b = !h[g + 1],
      O = b ? u + f - p : h[g + 1] - p;
    if (O <= 0) return null;
    var S = g % r.length;
    return A.createElement("rect", {
      key: "react-".concat(g),
      x: p,
      y: o,
      width: O,
      height: s,
      stroke: "none",
      fill: r[S],
      fillOpacity: a,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return A.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    m,
  );
}
var j$ = (e, t) => {
    var { xAxis: r, width: a, height: u, offset: o } = e;
    return aE(
      Ep(
        Bt(
          Bt(Bt({}, _p), r),
          {},
          { ticks: iE(r), viewBox: { x: 0, y: 0, width: a, height: u } },
        ),
      ),
      o.left,
      o.left + o.width,
      t,
    );
  },
  C$ = (e, t) => {
    var { yAxis: r, width: a, height: u, offset: o } = e;
    return aE(
      Ep(
        Bt(
          Bt(Bt({}, _p), r),
          {},
          { ticks: iE(r), viewBox: { x: 0, y: 0, width: a, height: u } },
        ),
      ),
      o.top,
      o.top + o.height,
      t,
    );
  },
  P$ = {
    horizontal: !0,
    vertical: !0,
    horizontalPoints: [],
    verticalPoints: [],
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
    xAxisId: 0,
    yAxisId: 0,
  };
function pT(e) {
  var t = by(),
    r = xy(),
    a = uE(),
    u = Bt(
      Bt({}, en(e, P$)),
      {},
      {
        x: ye(e.x) ? e.x : a.left,
        y: ye(e.y) ? e.y : a.top,
        width: ye(e.width) ? e.width : a.width,
        height: ye(e.height) ? e.height : a.height,
      },
    ),
    {
      xAxisId: o,
      yAxisId: f,
      x: s,
      y: v,
      width: h,
      height: m,
      syncWithTicks: p,
      horizontalValues: g,
      verticalValues: b,
    } = u,
    O = Ht(),
    S = ve((le) => DO(le, "xAxis", o, O)),
    w = ve((le) => DO(le, "yAxis", f, O));
  if (
    !ye(h) ||
    h <= 0 ||
    !ye(m) ||
    m <= 0 ||
    !ye(s) ||
    s !== +s ||
    !ye(v) ||
    v !== +v
  )
    return null;
  var _ = u.verticalCoordinatesGenerator || j$,
    M = u.horizontalCoordinatesGenerator || C$,
    { horizontalPoints: T, verticalPoints: N } = u;
  if ((!T || !T.length) && typeof M == "function") {
    var z = g && g.length,
      R = M(
        {
          yAxis: w ? Bt(Bt({}, w), {}, { ticks: z ? g : w.ticks }) : void 0,
          width: t,
          height: r,
          offset: a,
        },
        z ? !0 : p,
      );
    (Su(
      Array.isArray(R),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        typeof R,
        "]",
      ),
    ),
      Array.isArray(R) && (T = R));
  }
  if ((!N || !N.length) && typeof _ == "function") {
    var B = b && b.length,
      X = _(
        {
          xAxis: S ? Bt(Bt({}, S), {}, { ticks: B ? b : S.ticks }) : void 0,
          width: t,
          height: r,
          offset: a,
        },
        B ? !0 : p,
      );
    (Su(
      Array.isArray(X),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        typeof X,
        "]",
      ),
    ),
      Array.isArray(X) && (N = X));
  }
  return A.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    A.createElement(E$, {
      fill: u.fill,
      fillOpacity: u.fillOpacity,
      x: u.x,
      y: u.y,
      width: u.width,
      height: u.height,
      ry: u.ry,
    }),
    A.createElement(M$, Va({}, u, { horizontalPoints: T })),
    A.createElement(D$, Va({}, u, { verticalPoints: N })),
    A.createElement(
      _$,
      Va({}, u, { offset: a, horizontalPoints: T, xAxis: S, yAxis: w }),
    ),
    A.createElement(
      T$,
      Va({}, u, { offset: a, verticalPoints: N, xAxis: S, yAxis: w }),
    ),
  );
}
pT.displayName = "CartesianGrid";
var gT = (e, t, r, a) => ya(e, "xAxis", t, a),
  bT = (e, t, r, a) => ma(e, "xAxis", t, a),
  xT = (e, t, r, a) => ya(e, "yAxis", r, a),
  ST = (e, t, r, a) => ma(e, "yAxis", r, a),
  N$ = K([Re, gT, xT, bT, ST], (e, t, r, a, u) =>
    ba(e, "xAxis") ? _u(t, a, !1) : _u(r, u, !1),
  ),
  z$ = (e, t, r, a, u) => u;
function R$(e) {
  return e.type === "line";
}
var k$ = K([Jf, z$], (e, t) => e.filter(R$).find((r) => r.id === t)),
  L$ = K([Re, gT, xT, bT, ST, k$, N$, Gf], (e, t, r, a, u, o, f, s) => {
    var { chartData: v, dataStartIndex: h, dataEndIndex: m } = s;
    if (
      !(
        o == null ||
        t == null ||
        r == null ||
        a == null ||
        u == null ||
        a.length === 0 ||
        u.length === 0 ||
        f == null
      )
    ) {
      var { dataKey: p, data: g } = o,
        b;
      if (
        (g != null && g.length > 0 ? (b = g) : (b = v?.slice(h, m + 1)),
        b != null)
      )
        return iq({
          layout: e,
          xAxis: t,
          yAxis: r,
          xAxisTicks: a,
          yAxisTicks: u,
          dataKey: p,
          bandSize: f,
          displayedData: b,
        });
    }
  }),
  B$ = ["id"],
  U$ = ["type", "layout", "connectNulls", "needClip"],
  $$ = [
    "activeDot",
    "animateNewValues",
    "animationBegin",
    "animationDuration",
    "animationEasing",
    "connectNulls",
    "dot",
    "hide",
    "isAnimationActive",
    "label",
    "legendType",
    "xAxisId",
    "yAxisId",
    "id",
  ];
function PA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? PA(Object(r), !0).forEach(function (a) {
          q$(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : PA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function q$(e, t, r) {
  return (
    (t = H$(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function H$(e) {
  var t = Y$(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Y$(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mp(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = I$(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function I$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function ai() {
  return (
    (ai = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    ai.apply(null, arguments)
  );
}
var K$ = (e) => {
  var { dataKey: t, name: r, stroke: a, legendType: u, hide: o } = e;
  return [
    { inactive: o, dataKey: t, type: u, color: a, value: Cf(r, t), payload: e },
  ];
};
function G$(e) {
  var {
    dataKey: t,
    data: r,
    stroke: a,
    strokeWidth: u,
    fill: o,
    name: f,
    hide: s,
    unit: v,
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: a,
      strokeWidth: u,
      fill: o,
      dataKey: t,
      nameKey: void 0,
      name: Cf(f, t),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: v,
    },
  };
}
var OT = (e, t) => "".concat(t, "px ").concat(e - t, "px");
function X$(e, t) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, a = [], u = 0; u < t; ++u)
    a = [...a, ...r];
  return a;
}
var V$ = (e, t, r) => {
  var a = r.reduce((p, g) => p + g);
  if (!a) return OT(t, e);
  for (
    var u = Math.floor(e / a), o = e % a, f = t - e, s = [], v = 0, h = 0;
    v < r.length;
    h += r[v], ++v
  )
    if (h + r[v] > o) {
      s = [...r.slice(0, v), o - h];
      break;
    }
  var m = s.length % 2 === 0 ? [0, f] : [f];
  return [...X$(r, u), ...s, ...m].map((p) => "".concat(p, "px")).join(", ");
};
function Z$(e, t) {
  var r;
  if (A.isValidElement(e)) r = A.cloneElement(e, t);
  else if (typeof e == "function") r = e(t);
  else {
    var a = ke("recharts-line-dot", typeof e != "boolean" ? e.className : "");
    r = A.createElement(V2, ai({}, t, { className: a }));
  }
  return r;
}
function Q$(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function W$(e) {
  var { clipPathId: t, points: r, props: a } = e,
    { dot: u, dataKey: o, needClip: f } = a;
  if (!Q$(r, u)) return null;
  var { id: s } = a,
    v = Mp(a, B$),
    h = JA(u),
    m = ga(v),
    p = rt(u, !0),
    g = r.map((O, S) => {
      var w = yn(
        yn(yn({ key: "dot-".concat(S), r: 3 }, m), p),
        {},
        {
          index: S,
          cx: O.x,
          cy: O.y,
          dataKey: o,
          value: O.value,
          payload: O.payload,
          points: r,
        },
      );
      return Z$(u, w);
    }),
    b = {
      clipPath: f
        ? "url(#clipPath-".concat(h ? "" : "dots-").concat(t, ")")
        : void 0,
    };
  return A.createElement(
    Un,
    ai({ className: "recharts-line-dots", key: "dots" }, b),
    g,
  );
}
function F$(e) {
  var { showLabels: t, children: r, points: a } = e,
    u = A.useMemo(
      () =>
        a?.map((o) => {
          var f = { x: o.x, y: o.y, width: 0, height: 0 };
          return yn(
            yn({}, f),
            {},
            {
              value: o.value,
              payload: o.payload,
              viewBox: f,
              parentViewBox: void 0,
              fill: void 0,
            },
          );
        }),
      [a],
    );
  return A.createElement(K2, { value: t ? u : null }, r);
}
function NA(e) {
  var {
      clipPathId: t,
      pathRef: r,
      points: a,
      strokeDasharray: u,
      props: o,
    } = e,
    { type: f, layout: s, connectNulls: v, needClip: h } = o,
    m = Mp(o, U$),
    p = yn(
      yn({}, rt(m, !0)),
      {},
      {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: h ? "url(#clipPath-".concat(t, ")") : void 0,
        points: a,
        type: f,
        layout: s,
        connectNulls: v,
        strokeDasharray: u ?? o.strokeDasharray,
      },
    );
  return A.createElement(
    A.Fragment,
    null,
    a?.length > 1 && A.createElement(fE, ai({}, p, { pathRef: r })),
    A.createElement(W$, { points: a, clipPathId: t, props: o }),
  );
}
function J$(e) {
  try {
    return (e && e.getTotalLength && e.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function eq(e) {
  var {
      clipPathId: t,
      props: r,
      pathRef: a,
      previousPointsRef: u,
      longestAnimatedLengthRef: o,
    } = e,
    {
      points: f,
      strokeDasharray: s,
      isAnimationActive: v,
      animationBegin: h,
      animationDuration: m,
      animationEasing: p,
      animateNewValues: g,
      width: b,
      height: O,
      onAnimationEnd: S,
      onAnimationStart: w,
    } = r,
    _ = u.current,
    M = Uf(r, "recharts-line-"),
    [T, N] = A.useState(!1),
    z = !T,
    R = A.useCallback(() => {
      (typeof S == "function" && S(), N(!1));
    }, [S]),
    B = A.useCallback(() => {
      (typeof w == "function" && w(), N(!0));
    }, [w]),
    X = J$(a.current),
    le = o.current;
  return A.createElement(
    F$,
    { points: f, showLabels: z },
    r.children,
    A.createElement(
      Bf,
      {
        animationId: M,
        begin: h,
        duration: m,
        isActive: v,
        easing: p,
        onAnimationEnd: R,
        onAnimationStart: B,
        key: M,
      },
      (ae) => {
        var V = dt(le, X + le, ae),
          ne = Math.min(V, X),
          se;
        if (v)
          if (s) {
            var F = ""
              .concat(s)
              .split(/[,\s]+/gim)
              .map((U) => parseFloat(U));
            se = V$(ne, X, F);
          } else se = OT(X, ne);
        else se = s == null ? void 0 : String(s);
        if (_) {
          var W = _.length / f.length,
            C =
              ae === 1
                ? f
                : f.map((U, I) => {
                    var ee = Math.floor(I * W);
                    if (_[ee]) {
                      var ue = _[ee];
                      return yn(
                        yn({}, U),
                        {},
                        { x: dt(ue.x, U.x, ae), y: dt(ue.y, U.y, ae) },
                      );
                    }
                    return g
                      ? yn(
                          yn({}, U),
                          {},
                          { x: dt(b * 2, U.x, ae), y: dt(O / 2, U.y, ae) },
                        )
                      : yn(yn({}, U), {}, { x: U.x, y: U.y });
                  });
          return (
            (u.current = C),
            A.createElement(NA, {
              props: r,
              points: C,
              clipPathId: t,
              pathRef: a,
              strokeDasharray: se,
            })
          );
        }
        return (
          ae > 0 && X > 0 && ((u.current = f), (o.current = ne)),
          A.createElement(NA, {
            props: r,
            points: f,
            clipPathId: t,
            pathRef: a,
            strokeDasharray: se,
          })
        );
      },
    ),
    A.createElement(X2, { label: r.label }),
  );
}
function tq(e) {
  var { clipPathId: t, props: r } = e,
    a = A.useRef(null),
    u = A.useRef(0),
    o = A.useRef(null);
  return A.createElement(eq, {
    props: r,
    clipPathId: t,
    previousPointsRef: a,
    longestAnimatedLengthRef: u,
    pathRef: o,
  });
}
var nq = (e, t) => ({
  x: e.x,
  y: e.y,
  value: e.value,
  errorVal: Ot(e.payload, t),
});
class rq extends A.Component {
  render() {
    var t,
      {
        hide: r,
        dot: a,
        points: u,
        className: o,
        xAxisId: f,
        yAxisId: s,
        top: v,
        left: h,
        width: m,
        height: p,
        id: g,
        needClip: b,
      } = this.props;
    if (r) return null;
    var O = ke("recharts-line", o),
      S = g,
      { r: w = 3, strokeWidth: _ = 2 } =
        (t = rt(a, !1)) !== null && t !== void 0 ? t : { r: 3, strokeWidth: 2 },
      M = JA(a),
      T = w * 2 + _;
    return A.createElement(
      A.Fragment,
      null,
      A.createElement(
        Un,
        { className: O },
        b &&
          A.createElement(
            "defs",
            null,
            A.createElement(uT, { clipPathId: S, xAxisId: f, yAxisId: s }),
            !M &&
              A.createElement(
                "clipPath",
                { id: "clipPath-dots-".concat(S) },
                A.createElement("rect", {
                  x: h - T / 2,
                  y: v - T / 2,
                  width: m + T,
                  height: p + T,
                }),
              ),
          ),
        A.createElement(
          lT,
          {
            xAxisId: f,
            yAxisId: s,
            data: u,
            dataPointFormatter: nq,
            errorBarOffset: 0,
          },
          A.createElement(tq, { props: this.props, clipPathId: S }),
        ),
      ),
      A.createElement(dB, {
        activeDot: this.props.activeDot,
        points: u,
        mainColor: this.props.stroke,
        itemDataKey: this.props.dataKey,
      }),
    );
  }
}
var AT = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !ii.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
};
function aq(e) {
  var t = en(e, AT),
    {
      activeDot: r,
      animateNewValues: a,
      animationBegin: u,
      animationDuration: o,
      animationEasing: f,
      connectNulls: s,
      dot: v,
      hide: h,
      isAnimationActive: m,
      label: p,
      legendType: g,
      xAxisId: b,
      yAxisId: O,
      id: S,
    } = t,
    w = Mp(t, $$),
    { needClip: _ } = Op(b, O),
    M = xp(),
    T = kf(),
    N = Ht(),
    z = ve((ae) => L$(ae, b, O, N, S));
  if ((T !== "horizontal" && T !== "vertical") || z == null || M == null)
    return null;
  var { height: R, width: B, x: X, y: le } = M;
  return A.createElement(
    rq,
    ai({}, w, {
      id: S,
      connectNulls: s,
      dot: v,
      activeDot: r,
      animateNewValues: a,
      animationBegin: u,
      animationDuration: o,
      animationEasing: f,
      isAnimationActive: m,
      hide: h,
      label: p,
      legendType: g,
      xAxisId: b,
      yAxisId: O,
      points: z,
      layout: T,
      height: R,
      width: B,
      left: X,
      top: le,
      needClip: _,
    }),
  );
}
function iq(e) {
  var {
    layout: t,
    xAxis: r,
    yAxis: a,
    xAxisTicks: u,
    yAxisTicks: o,
    dataKey: f,
    bandSize: s,
    displayedData: v,
  } = e;
  return v
    .map((h, m) => {
      var p = Ot(h, f);
      if (t === "horizontal") {
        var g = fS({ axis: r, ticks: u, bandSize: s, entry: h, index: m }),
          b = Fe(p) ? null : a.scale(p);
        return { x: g, y: b, value: p, payload: h };
      }
      var O = Fe(p) ? null : r.scale(p),
        S = fS({ axis: a, ticks: o, bandSize: s, entry: h, index: m });
      return O == null || S == null
        ? null
        : { x: O, y: S, value: p, payload: h };
    })
    .filter(Boolean);
}
function lq(e) {
  var t = en(e, AT),
    r = Ht();
  return A.createElement(tT, { id: t.id, type: "line" }, (a) =>
    A.createElement(
      A.Fragment,
      null,
      A.createElement(eT, { legendPayload: K$(t) }),
      A.createElement(J2, { fn: G$, args: t }),
      A.createElement(rT, {
        type: "line",
        id: a,
        data: t.data,
        xAxisId: t.xAxisId,
        yAxisId: t.yAxisId,
        zAxisId: 0,
        dataKey: t.dataKey,
        hide: t.hide,
        isPanorama: r,
      }),
      A.createElement(aq, ai({}, t, { id: a })),
    ),
  );
}
var Pc = A.memo(lq);
Pc.displayName = "Line";
var uq = ["dangerouslySetInnerHTML", "ticks"],
  oq = ["id"],
  cq = ["domain"],
  fq = ["domain"];
function Xm() {
  return (
    (Xm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Xm.apply(null, arguments)
  );
}
function gf(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = sq(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function sq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function dq(e) {
  var t = ut();
  return (
    A.useEffect(
      () => (
        t(JL(e)),
        () => {
          t(eB(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var vq = (e) => {
    var { xAxisId: t, className: r } = e,
      a = ve(py),
      u = Ht(),
      o = "xAxis",
      f = ve((w) => ha(w, o, t, u)),
      s = ve((w) => a2(w, o, t, u)),
      v = ve((w) => e2(w, t)),
      h = ve((w) => b5(w, t)),
      m = ve((w) => A_(w, t));
    if (v == null || h == null || m == null) return null;
    var { dangerouslySetInnerHTML: p, ticks: g } = e,
      b = gf(e, uq),
      { id: O } = m,
      S = gf(m, oq);
    return A.createElement(
      Tp,
      Xm({}, b, S, {
        scale: f,
        x: h.x,
        y: h.y,
        width: v.width,
        height: v.height,
        className: ke("recharts-".concat(o, " ").concat(o), r),
        viewBox: a,
        ticks: s,
      }),
    );
  },
  hq = {
    allowDataOverflow: vn.allowDataOverflow,
    allowDecimals: vn.allowDecimals,
    allowDuplicatedCategory: vn.allowDuplicatedCategory,
    height: vn.height,
    hide: !1,
    mirror: vn.mirror,
    orientation: vn.orientation,
    padding: vn.padding,
    reversed: vn.reversed,
    scale: vn.scale,
    tickCount: vn.tickCount,
    type: vn.type,
    xAxisId: 0,
  },
  mq = (e) => {
    var t,
      r,
      a,
      u,
      o,
      f = en(e, hq);
    return A.createElement(
      A.Fragment,
      null,
      A.createElement(dq, {
        interval: (t = f.interval) !== null && t !== void 0 ? t : "preserveEnd",
        id: f.xAxisId,
        scale: f.scale,
        type: f.type,
        padding: f.padding,
        allowDataOverflow: f.allowDataOverflow,
        domain: f.domain,
        dataKey: f.dataKey,
        allowDuplicatedCategory: f.allowDuplicatedCategory,
        allowDecimals: f.allowDecimals,
        tickCount: f.tickCount,
        includeHidden: (r = f.includeHidden) !== null && r !== void 0 ? r : !1,
        reversed: f.reversed,
        ticks: f.ticks,
        height: f.height,
        orientation: f.orientation,
        mirror: f.mirror,
        hide: f.hide,
        unit: f.unit,
        name: f.name,
        angle: (a = f.angle) !== null && a !== void 0 ? a : 0,
        minTickGap: (u = f.minTickGap) !== null && u !== void 0 ? u : 5,
        tick: (o = f.tick) !== null && o !== void 0 ? o : !0,
        tickFormatter: f.tickFormatter,
      }),
      A.createElement(vq, f),
    );
  },
  yq = (e, t) => {
    var { domain: r } = e,
      a = gf(e, cq),
      { domain: u } = t,
      o = gf(t, fq);
    return il(a, o)
      ? Array.isArray(r) && r.length === 2 && Array.isArray(u) && u.length === 2
        ? r[0] === u[0] && r[1] === u[1]
        : il({ domain: r }, { domain: u })
      : !1;
  },
  wT = A.memo(mq, yq);
wT.displayName = "XAxis";
var pq = ["dangerouslySetInnerHTML", "ticks"],
  gq = ["id"],
  bq = ["domain"],
  xq = ["domain"];
function Vm() {
  return (
    (Vm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Vm.apply(null, arguments)
  );
}
function bf(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = Sq(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function Sq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function Oq(e) {
  var t = ut();
  return (
    A.useEffect(
      () => (
        t(tB(e)),
        () => {
          t(nB(e));
        }
      ),
      [e, t],
    ),
    null
  );
}
var Aq = (e) => {
    var { yAxisId: t, className: r, width: a, label: u } = e,
      o = A.useRef(null),
      f = A.useRef(null),
      s = ve(py),
      v = Ht(),
      h = ut(),
      m = "yAxis",
      p = ve((z) => ha(z, m, t, v)),
      g = ve((z) => t2(z, t)),
      b = ve((z) => S5(z, t)),
      O = ve((z) => a2(z, m, t, v)),
      S = ve((z) => w_(z, t));
    if (
      (A.useLayoutEffect(() => {
        if (
          !(a !== "auto" || !g || bp(u) || A.isValidElement(u) || S == null)
        ) {
          var z = o.current;
          if (z) {
            var R = z.getCalculatedWidth();
            Math.round(g.width) !== Math.round(R) && h(rB({ id: t, width: R }));
          }
        }
      }, [O, g, h, u, t, a, S]),
      g == null || b == null || S == null)
    )
      return null;
    var { dangerouslySetInnerHTML: w, ticks: _ } = e,
      M = bf(e, pq),
      { id: T } = S,
      N = bf(S, gq);
    return A.createElement(
      Tp,
      Vm({}, M, N, {
        ref: o,
        labelRef: f,
        scale: p,
        x: b.x,
        y: b.y,
        tickTextProps: a === "auto" ? { width: void 0 } : { width: a },
        width: g.width,
        height: g.height,
        className: ke("recharts-".concat(m, " ").concat(m), r),
        viewBox: s,
        ticks: O,
      }),
    );
  },
  wq = {
    allowDataOverflow: hn.allowDataOverflow,
    allowDecimals: hn.allowDecimals,
    allowDuplicatedCategory: hn.allowDuplicatedCategory,
    hide: !1,
    mirror: hn.mirror,
    orientation: hn.orientation,
    padding: hn.padding,
    reversed: hn.reversed,
    scale: hn.scale,
    tickCount: hn.tickCount,
    type: hn.type,
    width: hn.width,
    yAxisId: 0,
  },
  Eq = (e) => {
    var t,
      r,
      a,
      u,
      o,
      f = en(e, wq);
    return A.createElement(
      A.Fragment,
      null,
      A.createElement(Oq, {
        interval: (t = f.interval) !== null && t !== void 0 ? t : "preserveEnd",
        id: f.yAxisId,
        scale: f.scale,
        type: f.type,
        domain: f.domain,
        allowDataOverflow: f.allowDataOverflow,
        dataKey: f.dataKey,
        allowDuplicatedCategory: f.allowDuplicatedCategory,
        allowDecimals: f.allowDecimals,
        tickCount: f.tickCount,
        padding: f.padding,
        includeHidden: (r = f.includeHidden) !== null && r !== void 0 ? r : !1,
        reversed: f.reversed,
        ticks: f.ticks,
        width: f.width,
        orientation: f.orientation,
        mirror: f.mirror,
        hide: f.hide,
        unit: f.unit,
        name: f.name,
        angle: (a = f.angle) !== null && a !== void 0 ? a : 0,
        minTickGap: (u = f.minTickGap) !== null && u !== void 0 ? u : 5,
        tick: (o = f.tick) !== null && o !== void 0 ? o : !0,
        tickFormatter: f.tickFormatter,
      }),
      A.createElement(Aq, f),
    );
  },
  _q = (e, t) => {
    var { domain: r } = e,
      a = bf(e, bq),
      { domain: u } = t,
      o = bf(t, xq);
    return il(a, o)
      ? Array.isArray(r) && r.length === 2 && Array.isArray(u) && u.length === 2
        ? r[0] === u[0] && r[1] === u[1]
        : il({ domain: r }, { domain: u })
      : !1;
  },
  ET = A.memo(Eq, _q);
ET.displayName = "YAxis";
var tm = { exports: {} },
  nm = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zA;
function Tq() {
  if (zA) return nm;
  zA = 1;
  var e = ll();
  function t(v, h) {
    return (v === h && (v !== 0 || 1 / v === 1 / h)) || (v !== v && h !== h);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    a = e.useSyncExternalStore,
    u = e.useRef,
    o = e.useEffect,
    f = e.useMemo,
    s = e.useDebugValue;
  return (
    (nm.useSyncExternalStoreWithSelector = function (v, h, m, p, g) {
      var b = u(null);
      if (b.current === null) {
        var O = { hasValue: !1, value: null };
        b.current = O;
      } else O = b.current;
      b = f(
        function () {
          function w(z) {
            if (!_) {
              if (((_ = !0), (M = z), (z = p(z)), g !== void 0 && O.hasValue)) {
                var R = O.value;
                if (g(R, z)) return (T = R);
              }
              return (T = z);
            }
            if (((R = T), r(M, z))) return R;
            var B = p(z);
            return g !== void 0 && g(R, B) ? ((M = z), R) : ((M = z), (T = B));
          }
          var _ = !1,
            M,
            T,
            N = m === void 0 ? null : m;
          return [
            function () {
              return w(h());
            },
            N === null
              ? void 0
              : function () {
                  return w(N());
                },
          ];
        },
        [h, m, p, g],
      );
      var S = a(v, b[0], b[1]);
      return (
        o(
          function () {
            ((O.hasValue = !0), (O.value = S));
          },
          [S],
        ),
        s(S),
        S
      );
    }),
    nm
  );
}
var RA;
function Mq() {
  return (RA || ((RA = 1), (tm.exports = Tq())), tm.exports);
}
Mq();
function Dq(e) {
  e();
}
function jq() {
  let e = null,
    t = null;
  return {
    clear() {
      ((e = null), (t = null));
    },
    notify() {
      Dq(() => {
        let r = e;
        for (; r; ) (r.callback(), (r = r.next));
      });
    },
    get() {
      const r = [];
      let a = e;
      for (; a; ) (r.push(a), (a = a.next));
      return r;
    },
    subscribe(r) {
      let a = !0;
      const u = (t = { callback: r, next: null, prev: t });
      return (
        u.prev ? (u.prev.next = u) : (e = u),
        function () {
          !a ||
            e === null ||
            ((a = !1),
            u.next ? (u.next.prev = u.prev) : (t = u.prev),
            u.prev ? (u.prev.next = u.next) : (e = u.next));
        }
      );
    },
  };
}
var kA = { notify() {}, get: () => [] };
function Cq(e, t) {
  let r,
    a = kA,
    u = 0,
    o = !1;
  function f(S) {
    m();
    const w = a.subscribe(S);
    let _ = !1;
    return () => {
      _ || ((_ = !0), w(), p());
    };
  }
  function s() {
    a.notify();
  }
  function v() {
    O.onStateChange && O.onStateChange();
  }
  function h() {
    return o;
  }
  function m() {
    (u++, r || ((r = e.subscribe(v)), (a = jq())));
  }
  function p() {
    (u--, r && u === 0 && (r(), (r = void 0), a.clear(), (a = kA)));
  }
  function g() {
    o || ((o = !0), m());
  }
  function b() {
    o && ((o = !1), p());
  }
  const O = {
    addNestedSub: f,
    notifyNestedSubs: s,
    handleChangeWrapper: v,
    isSubscribed: h,
    trySubscribe: g,
    tryUnsubscribe: b,
    getListeners: () => a,
  };
  return O;
}
var Pq = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Nq = Pq(),
  zq = () => typeof navigator < "u" && navigator.product === "ReactNative",
  Rq = zq(),
  kq = () => (Nq || Rq ? A.useLayoutEffect : A.useEffect),
  Lq = kq(),
  Bq = Symbol.for("react-redux-context"),
  Uq = typeof globalThis < "u" ? globalThis : {};
function $q() {
  if (!A.createContext) return {};
  const e = (Uq[Bq] ??= new Map());
  let t = e.get(A.createContext);
  return (t || ((t = A.createContext(null)), e.set(A.createContext, t)), t);
}
var qq = $q();
function Hq(e) {
  const { children: t, context: r, serverState: a, store: u } = e,
    o = A.useMemo(() => {
      const v = Cq(u);
      return {
        store: u,
        subscription: v,
        getServerState: a ? () => a : void 0,
      };
    }, [u, a]),
    f = A.useMemo(() => u.getState(), [u]);
  Lq(() => {
    const { subscription: v } = o;
    return (
      (v.onStateChange = v.notifyNestedSubs),
      v.trySubscribe(),
      f !== u.getState() && v.notifyNestedSubs(),
      () => {
        (v.tryUnsubscribe(), (v.onStateChange = void 0));
      }
    );
  }, [o, f]);
  const s = r || qq;
  return A.createElement(s.Provider, { value: o }, t);
}
var Yq = Hq,
  Iq = (e, t) => t,
  Dp = K([Iq, Re, x_, gt, b2, Br, _k, At], Ck),
  jp = (e) => {
    var t = e.currentTarget.getBoundingClientRect(),
      r = t.width / e.currentTarget.offsetWidth,
      a = t.height / e.currentTarget.offsetHeight;
    return {
      chartX: Math.round((e.clientX - t.left) / r),
      chartY: Math.round((e.clientY - t.top) / a),
    };
  },
  _T = $n("mouseClick"),
  TT = ku();
TT.startListening({
  actionCreator: _T,
  effect: (e, t) => {
    var r = e.payload,
      a = Dp(t.getState(), jp(r));
    a?.activeIndex != null &&
      t.dispatch(
        z5({
          activeIndex: a.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: a.activeCoordinate,
        }),
      );
  },
});
var Zm = $n("mouseMove"),
  MT = ku();
MT.startListening({
  actionCreator: Zm,
  effect: (e, t) => {
    var r = e.payload,
      a = t.getState(),
      u = cp(a, a.tooltip.settings.shared),
      o = Dp(a, jp(r));
    u === "axis" &&
      (o?.activeIndex != null
        ? t.dispatch(
            d2({
              activeIndex: o.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: o.activeCoordinate,
            }),
          )
        : t.dispatch(s2()));
  },
});
var LA = {
    accessibilityLayer: !0,
    barCategoryGap: "10%",
    barGap: 4,
    barSize: void 0,
    className: void 0,
    maxBarSize: void 0,
    stackOffset: "none",
    syncId: void 0,
    syncMethod: "index",
  },
  DT = On({
    name: "rootProps",
    initialState: LA,
    reducers: {
      updateOptions: (e, t) => {
        var r;
        ((e.accessibilityLayer = t.payload.accessibilityLayer),
          (e.barCategoryGap = t.payload.barCategoryGap),
          (e.barGap =
            (r = t.payload.barGap) !== null && r !== void 0 ? r : LA.barGap),
          (e.barSize = t.payload.barSize),
          (e.maxBarSize = t.payload.maxBarSize),
          (e.stackOffset = t.payload.stackOffset),
          (e.syncId = t.payload.syncId),
          (e.syncMethod = t.payload.syncMethod),
          (e.className = t.payload.className));
      },
    },
  }),
  Kq = DT.reducer,
  { updateOptions: Gq } = DT.actions,
  jT = On({
    name: "polarOptions",
    initialState: null,
    reducers: { updatePolarOptions: (e, t) => t.payload },
  }),
  { updatePolarOptions: fH } = jT.actions,
  Xq = jT.reducer,
  CT = $n("keyDown"),
  PT = $n("focus"),
  Cp = ku();
Cp.startListening({
  actionCreator: CT,
  effect: (e, t) => {
    var r = t.getState(),
      a = r.rootProps.accessibilityLayer !== !1;
    if (a) {
      var { keyboardInteraction: u } = r.tooltip,
        o = e.payload;
      if (!(o !== "ArrowRight" && o !== "ArrowLeft" && o !== "Enter")) {
        var f = Number(fp(u, vl(r))),
          s = Br(r);
        if (o === "Enter") {
          var v = sf(r, "axis", "hover", String(u.index));
          t.dispatch(
            Um({
              active: !u.active,
              activeIndex: u.index,
              activeDataKey: u.dataKey,
              activeCoordinate: v,
            }),
          );
          return;
        }
        var h = E5(r),
          m = h === "left-to-right" ? 1 : -1,
          p = o === "ArrowRight" ? 1 : -1,
          g = f + p * m;
        if (!(s == null || g >= s.length || g < 0)) {
          var b = sf(r, "axis", "hover", String(g));
          t.dispatch(
            Um({
              active: !0,
              activeIndex: g.toString(),
              activeDataKey: void 0,
              activeCoordinate: b,
            }),
          );
        }
      }
    }
  },
});
Cp.startListening({
  actionCreator: PT,
  effect: (e, t) => {
    var r = t.getState(),
      a = r.rootProps.accessibilityLayer !== !1;
    if (a) {
      var { keyboardInteraction: u } = r.tooltip;
      if (!u.active && u.index == null) {
        var o = "0",
          f = sf(r, "axis", "hover", String(o));
        t.dispatch(
          Um({
            activeDataKey: void 0,
            active: !0,
            activeIndex: o,
            activeCoordinate: f,
          }),
        );
      }
    }
  },
});
var kn = $n("externalEvent"),
  NT = ku();
NT.startListening({
  actionCreator: kn,
  effect: (e, t) => {
    if (e.payload.handler != null) {
      var r = t.getState(),
        a = {
          activeCoordinate: yk(r),
          activeDataKey: A2(r),
          activeIndex: ni(r),
          activeLabel: O2(r),
          activeTooltipIndex: ni(r),
          isTooltipActive: pk(r),
        };
      e.payload.handler(a, e.payload.reactEvent);
    }
  },
});
var Vq = K([dl], (e) => e.tooltipItemPayloads),
  Zq = K([Vq, Gu, (e, t, r) => t, (e, t, r) => r], (e, t, r, a) => {
    var u = e.find((s) => s.settings.dataKey === a);
    if (u != null) {
      var { positions: o } = u;
      if (o != null) {
        var f = t(o, r);
        return f;
      }
    }
  }),
  zT = $n("touchMove"),
  RT = ku();
RT.startListening({
  actionCreator: zT,
  effect: (e, t) => {
    var r = e.payload,
      a = t.getState(),
      u = cp(a, a.tooltip.settings.shared);
    if (u === "axis") {
      var o = Dp(
        a,
        jp({
          clientX: r.touches[0].clientX,
          clientY: r.touches[0].clientY,
          currentTarget: r.currentTarget,
        }),
      );
      o?.activeIndex != null &&
        t.dispatch(
          d2({
            activeIndex: o.activeIndex,
            activeDataKey: void 0,
            activeCoordinate: o.activeCoordinate,
          }),
        );
    } else if (u === "item") {
      var f,
        s = r.touches[0],
        v = document.elementFromPoint(s.clientX, s.clientY);
      if (!v || !v.getAttribute) return;
      var h = v.getAttribute(QN),
        m = (f = v.getAttribute(WN)) !== null && f !== void 0 ? f : void 0,
        p = Zq(t.getState(), h, m);
      t.dispatch(f2({ activeDataKey: m, activeIndex: h, activeCoordinate: p }));
    }
  },
});
var Qq = zw({
    brush: _U,
    cartesianAxis: aB,
    chartData: Vk,
    errorBars: wB,
    graphicalItems: VL,
    layout: bN,
    legend: h3,
    options: Yk,
    polarAxis: bL,
    polarOptions: Xq,
    referenceElements: kU,
    rootProps: Kq,
    tooltip: R5,
  }),
  Wq = function (t) {
    return IP({
      reducer: Qq,
      preloadedState: t,
      middleware: (r) =>
        r({ serializableCheck: !1 }).concat([
          TT.middleware,
          MT.middleware,
          Cp.middleware,
          NT.middleware,
          RT.middleware,
        ]),
      devTools: ii.devToolsEnabled,
    });
  };
function Fq(e) {
  var { preloadedState: t, children: r, reduxStoreName: a } = e,
    u = Ht(),
    o = A.useRef(null);
  if (u) return r;
  o.current == null && (o.current = Wq(t));
  var f = sy;
  return A.createElement(Yq, { context: f, store: o.current }, r);
}
function Jq(e) {
  var { layout: t, width: r, height: a, margin: u } = e,
    o = ut(),
    f = Ht();
  return (
    A.useEffect(() => {
      f || (o(yN(t)), o(pN({ width: r, height: a })), o(mN(u)));
    }, [o, f, t, r, a, u]),
    null
  );
}
function e9(e) {
  var t = ut();
  return (
    A.useEffect(() => {
      t(Gq(e));
    }, [t, e]),
    null
  );
}
var t9 = ["children"];
function n9(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = r9(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function r9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
function xf() {
  return (
    (xf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    xf.apply(null, arguments)
  );
}
var a9 = { width: "100%", height: "100%" },
  i9 = A.forwardRef((e, t) => {
    var r = by(),
      a = xy(),
      u = cE();
    if (!Vc(r) || !Vc(a)) return null;
    var { children: o, otherAttributes: f, title: s, desc: v } = e,
      h,
      m;
    return (
      typeof f.tabIndex == "number" ? (h = f.tabIndex) : (h = u ? 0 : void 0),
      typeof f.role == "string"
        ? (m = f.role)
        : (m = u ? "application" : void 0),
      A.createElement(
        ny,
        xf({}, f, {
          title: s,
          desc: v,
          role: m,
          tabIndex: h,
          width: r,
          height: a,
          style: a9,
          ref: t,
        }),
        o,
      )
    );
  }),
  l9 = (e) => {
    var { children: t } = e,
      r = ve(Rf);
    if (!r) return null;
    var { width: a, height: u, y: o, x: f } = r;
    return A.createElement(ny, { width: a, height: u, x: f, y: o }, t);
  },
  BA = A.forwardRef((e, t) => {
    var { children: r } = e,
      a = n9(e, t9),
      u = Ht();
    return u
      ? A.createElement(l9, null, r)
      : A.createElement(i9, xf({ ref: t }, a), r);
  });
function u9() {
  var e = ut(),
    [t, r] = A.useState(null),
    a = ve(ZN);
  return (
    A.useEffect(() => {
      if (t != null) {
        var u = t.getBoundingClientRect(),
          o = u.width / t.offsetWidth;
        Sn(o) && o !== a && e(gN(o));
      }
    }, [t, e, a]),
    r
  );
}
function UA(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (u) {
        return Object.getOwnPropertyDescriptor(e, u).enumerable;
      })),
      r.push.apply(r, a));
  }
  return r;
}
function o9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? UA(Object(r), !0).forEach(function (a) {
          c9(e, a, r[a]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : UA(Object(r)).forEach(function (a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
          });
  }
  return e;
}
function c9(e, t, r) {
  return (
    (t = f9(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function f9(e) {
  var t = s9(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s9(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var d9 = A.forwardRef((e, t) => {
    var {
        children: r,
        className: a,
        height: u,
        onClick: o,
        onContextMenu: f,
        onDoubleClick: s,
        onMouseDown: v,
        onMouseEnter: h,
        onMouseLeave: m,
        onMouseMove: p,
        onMouseUp: g,
        onTouchEnd: b,
        onTouchMove: O,
        onTouchStart: S,
        style: w,
        width: _,
      } = e,
      M = ut(),
      [T, N] = A.useState(null),
      [z, R] = A.useState(null);
    r8();
    var B = u9(),
      X = A.useCallback(
        (L) => {
          (B(L), typeof t == "function" && t(L), N(L), R(L));
        },
        [B, t, N, R],
      ),
      le = A.useCallback(
        (L) => {
          (M(_T(L)), M(kn({ handler: o, reactEvent: L })));
        },
        [M, o],
      ),
      ae = A.useCallback(
        (L) => {
          (M(Zm(L)), M(kn({ handler: h, reactEvent: L })));
        },
        [M, h],
      ),
      V = A.useCallback(
        (L) => {
          (M(s2()), M(kn({ handler: m, reactEvent: L })));
        },
        [M, m],
      ),
      ne = A.useCallback(
        (L) => {
          (M(Zm(L)), M(kn({ handler: p, reactEvent: L })));
        },
        [M, p],
      ),
      se = A.useCallback(() => {
        M(PT());
      }, [M]),
      F = A.useCallback(
        (L) => {
          M(CT(L.key));
        },
        [M],
      ),
      W = A.useCallback(
        (L) => {
          M(kn({ handler: f, reactEvent: L }));
        },
        [M, f],
      ),
      C = A.useCallback(
        (L) => {
          M(kn({ handler: s, reactEvent: L }));
        },
        [M, s],
      ),
      U = A.useCallback(
        (L) => {
          M(kn({ handler: v, reactEvent: L }));
        },
        [M, v],
      ),
      I = A.useCallback(
        (L) => {
          M(kn({ handler: g, reactEvent: L }));
        },
        [M, g],
      ),
      ee = A.useCallback(
        (L) => {
          M(kn({ handler: S, reactEvent: L }));
        },
        [M, S],
      ),
      ue = A.useCallback(
        (L) => {
          (M(zT(L)), M(kn({ handler: O, reactEvent: L })));
        },
        [M, O],
      ),
      D = A.useCallback(
        (L) => {
          M(kn({ handler: b, reactEvent: L }));
        },
        [M, b],
      );
    return A.createElement(
      D2.Provider,
      { value: T },
      A.createElement(
        tw.Provider,
        { value: z },
        A.createElement(
          "div",
          {
            className: ke("recharts-wrapper", a),
            style: o9(
              { position: "relative", cursor: "default", width: _, height: u },
              w,
            ),
            onClick: le,
            onContextMenu: W,
            onDoubleClick: C,
            onFocus: se,
            onKeyDown: F,
            onMouseDown: U,
            onMouseEnter: ae,
            onMouseLeave: V,
            onMouseMove: ne,
            onMouseUp: I,
            onTouchEnd: D,
            onTouchMove: ue,
            onTouchStart: ee,
            ref: X,
          },
          r,
        ),
      ),
    );
  }),
  v9 = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function h9(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = m9(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function m9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var y9 = A.forwardRef((e, t) => {
    var {
        children: r,
        className: a,
        width: u,
        height: o,
        style: f,
        compact: s,
        title: v,
        desc: h,
      } = e,
      m = h9(e, v9),
      p = ga(m);
    return s
      ? A.createElement(BA, { otherAttributes: p, title: v, desc: h }, r)
      : A.createElement(
          d9,
          {
            className: a,
            style: f,
            width: u,
            height: o,
            onClick: e.onClick,
            onMouseLeave: e.onMouseLeave,
            onMouseEnter: e.onMouseEnter,
            onMouseMove: e.onMouseMove,
            onMouseDown: e.onMouseDown,
            onMouseUp: e.onMouseUp,
            onContextMenu: e.onContextMenu,
            onDoubleClick: e.onDoubleClick,
            onTouchStart: e.onTouchStart,
            onTouchMove: e.onTouchMove,
            onTouchEnd: e.onTouchEnd,
          },
          A.createElement(
            BA,
            { otherAttributes: p, title: v, desc: h, ref: t },
            A.createElement(LU, null, r),
          ),
        );
  }),
  p9 = ["width", "height"];
function Qm() {
  return (
    (Qm = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r) ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }),
    Qm.apply(null, arguments)
  );
}
function g9(e, t) {
  if (e == null) return {};
  var r,
    a,
    u = b9(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      ((r = o[a]),
        t.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (u[r] = e[r]));
  }
  return u;
}
function b9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if ({}.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) !== -1) continue;
      r[a] = e[a];
    }
  return r;
}
var x9 = { top: 5, right: 5, bottom: 5, left: 5 },
  S9 = {
    accessibilityLayer: !0,
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: x9,
    reverseStackOrder: !1,
    syncMethod: "index",
  },
  O9 = A.forwardRef(function (t, r) {
    var a,
      u = en(t.categoricalChartProps, S9),
      { width: o, height: f } = u,
      s = g9(u, p9);
    if (!Vc(o) || !Vc(f)) return null;
    var {
        chartName: v,
        defaultTooltipEventType: h,
        validateTooltipEventTypes: m,
        tooltipPayloadSearcher: p,
        categoricalChartProps: g,
      } = t,
      b = {
        chartName: v,
        defaultTooltipEventType: h,
        validateTooltipEventTypes: m,
        tooltipPayloadSearcher: p,
        eventEmitter: void 0,
      };
    return A.createElement(
      Fq,
      {
        preloadedState: { options: b },
        reduxStoreName: (a = g.id) !== null && a !== void 0 ? a : v,
      },
      A.createElement(EU, { chartData: g.data }),
      A.createElement(Jq, {
        width: o,
        height: f,
        layout: u.layout,
        margin: u.margin,
      }),
      A.createElement(e9, {
        accessibilityLayer: u.accessibilityLayer,
        barCategoryGap: u.barCategoryGap,
        maxBarSize: u.maxBarSize,
        stackOffset: u.stackOffset,
        barGap: u.barGap,
        barSize: u.barSize,
        syncId: u.syncId,
        syncMethod: u.syncMethod,
        className: u.className,
      }),
      A.createElement(y9, Qm({}, s, { width: o, height: f, ref: r })),
    );
  }),
  A9 = ["axis"],
  w9 = A.forwardRef((e, t) =>
    A.createElement(O9, {
      chartName: "ComposedChart",
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: A9,
      tooltipPayloadSearcher: qk,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  Nc = { exports: {} },
  E9 = Nc.exports,
  $A;
function kT() {
  return (
    $A ||
      (($A = 1),
      (function (e, t) {
        (function (r, a) {
          e.exports = a();
        })(E9, function () {
          var r = 1e3,
            a = 6e4,
            u = 36e5,
            o = "millisecond",
            f = "second",
            s = "minute",
            v = "hour",
            h = "day",
            m = "week",
            p = "month",
            g = "quarter",
            b = "year",
            O = "date",
            S = "Invalid Date",
            w =
              /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            _ =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            M = {
              name: "en",
              weekdays:
                "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                  "_",
                ),
              months:
                "January_February_March_April_May_June_July_August_September_October_November_December".split(
                  "_",
                ),
              ordinal: function (F) {
                var W = ["th", "st", "nd", "rd"],
                  C = F % 100;
                return "[" + F + (W[(C - 20) % 10] || W[C] || W[0]) + "]";
              },
            },
            T = function (F, W, C) {
              var U = String(F);
              return !U || U.length >= W
                ? F
                : "" + Array(W + 1 - U.length).join(C) + F;
            },
            N = {
              s: T,
              z: function (F) {
                var W = -F.utcOffset(),
                  C = Math.abs(W),
                  U = Math.floor(C / 60),
                  I = C % 60;
                return (W <= 0 ? "+" : "-") + T(U, 2, "0") + ":" + T(I, 2, "0");
              },
              m: function F(W, C) {
                if (W.date() < C.date()) return -F(C, W);
                var U = 12 * (C.year() - W.year()) + (C.month() - W.month()),
                  I = W.clone().add(U, p),
                  ee = C - I < 0,
                  ue = W.clone().add(U + (ee ? -1 : 1), p);
                return +(-(U + (C - I) / (ee ? I - ue : ue - I)) || 0);
              },
              a: function (F) {
                return F < 0 ? Math.ceil(F) || 0 : Math.floor(F);
              },
              p: function (F) {
                return (
                  {
                    M: p,
                    y: b,
                    w: m,
                    d: h,
                    D: O,
                    h: v,
                    m: s,
                    s: f,
                    ms: o,
                    Q: g,
                  }[F] ||
                  String(F || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (F) {
                return F === void 0;
              },
            },
            z = "en",
            R = {};
          R[z] = M;
          var B = "$isDayjsObject",
            X = function (F) {
              return F instanceof ne || !(!F || !F[B]);
            },
            le = function F(W, C, U) {
              var I;
              if (!W) return z;
              if (typeof W == "string") {
                var ee = W.toLowerCase();
                (R[ee] && (I = ee), C && ((R[ee] = C), (I = ee)));
                var ue = W.split("-");
                if (!I && ue.length > 1) return F(ue[0]);
              } else {
                var D = W.name;
                ((R[D] = W), (I = D));
              }
              return (!U && I && (z = I), I || (!U && z));
            },
            ae = function (F, W) {
              if (X(F)) return F.clone();
              var C = typeof W == "object" ? W : {};
              return ((C.date = F), (C.args = arguments), new ne(C));
            },
            V = N;
          ((V.l = le),
            (V.i = X),
            (V.w = function (F, W) {
              return ae(F, {
                locale: W.$L,
                utc: W.$u,
                x: W.$x,
                $offset: W.$offset,
              });
            }));
          var ne = (function () {
              function F(C) {
                ((this.$L = le(C.locale, null, !0)),
                  this.parse(C),
                  (this.$x = this.$x || C.x || {}),
                  (this[B] = !0));
              }
              var W = F.prototype;
              return (
                (W.parse = function (C) {
                  ((this.$d = (function (U) {
                    var I = U.date,
                      ee = U.utc;
                    if (I === null) return new Date(NaN);
                    if (V.u(I)) return new Date();
                    if (I instanceof Date) return new Date(I);
                    if (typeof I == "string" && !/Z$/i.test(I)) {
                      var ue = I.match(w);
                      if (ue) {
                        var D = ue[2] - 1 || 0,
                          L = (ue[7] || "0").substring(0, 3);
                        return ee
                          ? new Date(
                              Date.UTC(
                                ue[1],
                                D,
                                ue[3] || 1,
                                ue[4] || 0,
                                ue[5] || 0,
                                ue[6] || 0,
                                L,
                              ),
                            )
                          : new Date(
                              ue[1],
                              D,
                              ue[3] || 1,
                              ue[4] || 0,
                              ue[5] || 0,
                              ue[6] || 0,
                              L,
                            );
                      }
                    }
                    return new Date(I);
                  })(C)),
                    this.init());
                }),
                (W.init = function () {
                  var C = this.$d;
                  ((this.$y = C.getFullYear()),
                    (this.$M = C.getMonth()),
                    (this.$D = C.getDate()),
                    (this.$W = C.getDay()),
                    (this.$H = C.getHours()),
                    (this.$m = C.getMinutes()),
                    (this.$s = C.getSeconds()),
                    (this.$ms = C.getMilliseconds()));
                }),
                (W.$utils = function () {
                  return V;
                }),
                (W.isValid = function () {
                  return this.$d.toString() !== S;
                }),
                (W.isSame = function (C, U) {
                  var I = ae(C);
                  return this.startOf(U) <= I && I <= this.endOf(U);
                }),
                (W.isAfter = function (C, U) {
                  return ae(C) < this.startOf(U);
                }),
                (W.isBefore = function (C, U) {
                  return this.endOf(U) < ae(C);
                }),
                (W.$g = function (C, U, I) {
                  return V.u(C) ? this[U] : this.set(I, C);
                }),
                (W.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (W.valueOf = function () {
                  return this.$d.getTime();
                }),
                (W.startOf = function (C, U) {
                  var I = this,
                    ee = !!V.u(U) || U,
                    ue = V.p(C),
                    D = function (re, he) {
                      var be = V.w(
                        I.$u ? Date.UTC(I.$y, he, re) : new Date(I.$y, he, re),
                        I,
                      );
                      return ee ? be : be.endOf(h);
                    },
                    L = function (re, he) {
                      return V.w(
                        I.toDate()[re].apply(
                          I.toDate("s"),
                          (ee ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(he),
                        ),
                        I,
                      );
                    },
                    te = this.$W,
                    ie = this.$M,
                    oe = this.$D,
                    ge = "set" + (this.$u ? "UTC" : "");
                  switch (ue) {
                    case b:
                      return ee ? D(1, 0) : D(31, 11);
                    case p:
                      return ee ? D(1, ie) : D(0, ie + 1);
                    case m:
                      var we = this.$locale().weekStart || 0,
                        Je = (te < we ? te + 7 : te) - we;
                      return D(ee ? oe - Je : oe + (6 - Je), ie);
                    case h:
                    case O:
                      return L(ge + "Hours", 0);
                    case v:
                      return L(ge + "Minutes", 1);
                    case s:
                      return L(ge + "Seconds", 2);
                    case f:
                      return L(ge + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (W.endOf = function (C) {
                  return this.startOf(C, !1);
                }),
                (W.$set = function (C, U) {
                  var I,
                    ee = V.p(C),
                    ue = "set" + (this.$u ? "UTC" : ""),
                    D = ((I = {}),
                    (I[h] = ue + "Date"),
                    (I[O] = ue + "Date"),
                    (I[p] = ue + "Month"),
                    (I[b] = ue + "FullYear"),
                    (I[v] = ue + "Hours"),
                    (I[s] = ue + "Minutes"),
                    (I[f] = ue + "Seconds"),
                    (I[o] = ue + "Milliseconds"),
                    I)[ee],
                    L = ee === h ? this.$D + (U - this.$W) : U;
                  if (ee === p || ee === b) {
                    var te = this.clone().set(O, 1);
                    (te.$d[D](L),
                      te.init(),
                      (this.$d = te.set(
                        O,
                        Math.min(this.$D, te.daysInMonth()),
                      ).$d));
                  } else D && this.$d[D](L);
                  return (this.init(), this);
                }),
                (W.set = function (C, U) {
                  return this.clone().$set(C, U);
                }),
                (W.get = function (C) {
                  return this[V.p(C)]();
                }),
                (W.add = function (C, U) {
                  var I,
                    ee = this;
                  C = Number(C);
                  var ue = V.p(U),
                    D = function (ie) {
                      var oe = ae(ee);
                      return V.w(oe.date(oe.date() + Math.round(ie * C)), ee);
                    };
                  if (ue === p) return this.set(p, this.$M + C);
                  if (ue === b) return this.set(b, this.$y + C);
                  if (ue === h) return D(1);
                  if (ue === m) return D(7);
                  var L =
                      ((I = {}), (I[s] = a), (I[v] = u), (I[f] = r), I)[ue] ||
                      1,
                    te = this.$d.getTime() + C * L;
                  return V.w(te, this);
                }),
                (W.subtract = function (C, U) {
                  return this.add(-1 * C, U);
                }),
                (W.format = function (C) {
                  var U = this,
                    I = this.$locale();
                  if (!this.isValid()) return I.invalidDate || S;
                  var ee = C || "YYYY-MM-DDTHH:mm:ssZ",
                    ue = V.z(this),
                    D = this.$H,
                    L = this.$m,
                    te = this.$M,
                    ie = I.weekdays,
                    oe = I.months,
                    ge = I.meridiem,
                    we = function (he, be, J, et) {
                      return (
                        (he && (he[be] || he(U, ee))) || J[be].slice(0, et)
                      );
                    },
                    Je = function (he) {
                      return V.s(D % 12 || 12, he, "0");
                    },
                    re =
                      ge ||
                      function (he, be, J) {
                        var et = he < 12 ? "AM" : "PM";
                        return J ? et.toLowerCase() : et;
                      };
                  return ee.replace(_, function (he, be) {
                    return (
                      be ||
                      (function (J) {
                        switch (J) {
                          case "YY":
                            return String(U.$y).slice(-2);
                          case "YYYY":
                            return V.s(U.$y, 4, "0");
                          case "M":
                            return te + 1;
                          case "MM":
                            return V.s(te + 1, 2, "0");
                          case "MMM":
                            return we(I.monthsShort, te, oe, 3);
                          case "MMMM":
                            return we(oe, te);
                          case "D":
                            return U.$D;
                          case "DD":
                            return V.s(U.$D, 2, "0");
                          case "d":
                            return String(U.$W);
                          case "dd":
                            return we(I.weekdaysMin, U.$W, ie, 2);
                          case "ddd":
                            return we(I.weekdaysShort, U.$W, ie, 3);
                          case "dddd":
                            return ie[U.$W];
                          case "H":
                            return String(D);
                          case "HH":
                            return V.s(D, 2, "0");
                          case "h":
                            return Je(1);
                          case "hh":
                            return Je(2);
                          case "a":
                            return re(D, L, !0);
                          case "A":
                            return re(D, L, !1);
                          case "m":
                            return String(L);
                          case "mm":
                            return V.s(L, 2, "0");
                          case "s":
                            return String(U.$s);
                          case "ss":
                            return V.s(U.$s, 2, "0");
                          case "SSS":
                            return V.s(U.$ms, 3, "0");
                          case "Z":
                            return ue;
                        }
                        return null;
                      })(he) ||
                      ue.replace(":", "")
                    );
                  });
                }),
                (W.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (W.diff = function (C, U, I) {
                  var ee,
                    ue = this,
                    D = V.p(U),
                    L = ae(C),
                    te = (L.utcOffset() - this.utcOffset()) * a,
                    ie = this - L,
                    oe = function () {
                      return V.m(ue, L);
                    };
                  switch (D) {
                    case b:
                      ee = oe() / 12;
                      break;
                    case p:
                      ee = oe();
                      break;
                    case g:
                      ee = oe() / 3;
                      break;
                    case m:
                      ee = (ie - te) / 6048e5;
                      break;
                    case h:
                      ee = (ie - te) / 864e5;
                      break;
                    case v:
                      ee = ie / u;
                      break;
                    case s:
                      ee = ie / a;
                      break;
                    case f:
                      ee = ie / r;
                      break;
                    default:
                      ee = ie;
                  }
                  return I ? ee : V.a(ee);
                }),
                (W.daysInMonth = function () {
                  return this.endOf(p).$D;
                }),
                (W.$locale = function () {
                  return R[this.$L];
                }),
                (W.locale = function (C, U) {
                  if (!C) return this.$L;
                  var I = this.clone(),
                    ee = le(C, U, !0);
                  return (ee && (I.$L = ee), I);
                }),
                (W.clone = function () {
                  return V.w(this.$d, this);
                }),
                (W.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (W.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (W.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (W.toString = function () {
                  return this.$d.toUTCString();
                }),
                F
              );
            })(),
            se = ne.prototype;
          return (
            (ae.prototype = se),
            [
              ["$ms", o],
              ["$s", f],
              ["$m", s],
              ["$H", v],
              ["$W", h],
              ["$M", p],
              ["$y", b],
              ["$D", O],
            ].forEach(function (F) {
              se[F[1]] = function (W) {
                return this.$g(W, F[0], F[1]);
              };
            }),
            (ae.extend = function (F, W) {
              return (F.$i || (F(W, ne, ae), (F.$i = !0)), ae);
            }),
            (ae.locale = le),
            (ae.isDayjs = X),
            (ae.unix = function (F) {
              return ae(1e3 * F);
            }),
            (ae.en = R[z]),
            (ae.Ls = R),
            (ae.p = {}),
            ae
          );
        });
      })(Nc)),
    Nc.exports
  );
}
var _9 = kT();
const Pp = Zn(_9);
var zc = { exports: {} },
  T9 = zc.exports,
  qA;
function M9() {
  return (
    qA ||
      ((qA = 1),
      (function (e, t) {
        (function (r, a) {
          e.exports = a(kT());
        })(T9, function (r) {
          function a(f) {
            return f && typeof f == "object" && "default" in f
              ? f
              : { default: f };
          }
          var u = a(r),
            o = {
              name: "pt-br",
              weekdays:
                "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
                  "_",
                ),
              weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
              weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
              months:
                "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                  "_",
                ),
              monthsShort:
                "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
              ordinal: function (f) {
                return f + "º";
              },
              formats: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
              },
              relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "poucos segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos",
              },
            };
          return (u.default.locale(o, null, !0), o);
        });
      })(zc)),
    zc.exports
  );
}
M9();
const D9 = "1Ha6T5YHUrV80qqUgmV7C1uVCxsyKyW0uMt51W1zhQf0",
  j9 = "Dados",
  rm = 120,
  C9 = "Bodas de Ouro — Fundo dos Filhos",
  pu = {
    barInterest: "#A1D6E2",
    lineCumContrib: "#CDECCD",
    lineCumInterest: "#F1C6E7",
    lineTotal: "#C6C5F0",
    projection: "#F9E2AE",
  };
function Wm(e) {
  if (e == null) return 0;
  if (typeof e === "number") return Number.isFinite(e) ? e : 0;
  const t = String(e).trim().replace(/\s/g, "");
  if (t === "") return 0;
  if (t.includes(",")) {
    const a = t.replace(/\./g, "").replace(",", ".");
    const u = Number(a);
    return Number.isFinite(u) ? u : 0;
  }
  const r = Number(t);
  return Number.isFinite(r) ? r : 0;
}
function P9(e) {
  return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
}
function N9(e) {
  if (e == null) return NaN;
  const t = String(e).trim(),
    r = t.includes("%"),
    a = Wm(t.replace("%", ""));
  return Number.isFinite(a) ? (r || a > 1.5 ? a / 100 : a) : NaN;
}
function z9(e) {
  return Object.values(e).reduce((t, r) => t + (Number.isFinite(r) ? r : 0), 0);
}
function HA(e, t = 0.1) {
  const r = e
    .filter(Number.isFinite)
    .slice()
    .sort((o, f) => o - f);
  if (!r.length) return NaN;
  const a = Math.floor(r.length * t),
    u = r.slice(a, r.length - a || r.length);
  return u.reduce((o, f) => o + f, 0) / u.length;
}
function R9(e) {
  const t = e.filter((a) => Number.isFinite(a) && a > -0.95);
  if (!t.length) return NaN;
  const r = t.reduce((a, u) => a * (1 + u), 1);
  return Math.pow(r, 1 / t.length) - 1;
}
function gu(e) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(e || 0);
}
function k9(e, t) {
  if (!e?.length) return { points: [] };
  const r = e.slice().sort((p, g) => p.date.getTime() - g.date.getTime());
  let a = 0,
    u = 0,
    o = 0;
  const f = [],
    s = [],
    v = [];
  for (const p of r) {
    const g = P9(p.date),
      b = z9(p.aportes);
    let O = Number.isFinite(p.saldo) ? p.saldo : NaN,
      S;
    if (Number.isFinite(O)) S = O - a - b;
    else {
      const w = N9(p.rendimento_percent),
        _ = Number.isFinite(w) ? a * w : 0;
      ((S = _), (O = a + b + _));
    }
    if (a > 0) {
      const w = S / a;
      Number.isFinite(w) && s.push(w);
    }
    (b > 0 && v.push(b),
      (u += b),
      (o += S),
      (a = O),
      f.push({
        date: g,
        monthContrib: b,
        monthInterest: S,
        cumContrib: u,
        cumInterest: o,
        total: O,
        isProjection: !1,
      }));
  }
  const h = f.length,
    m = Math.max(0, t - h);
  if (m > 0 && f.length) {
    let p = R9(s);
    const g = HA(s);
    Number.isFinite(p) || (p = g);
    const b = 0.05;
    Number.isFinite(p) ? (p = Math.max(-b, Math.min(b, p))) : (p = 0);
    let O = HA(v);
    Number.isFinite(O) || (O = 0);
    let S = f[f.length - 1].total,
      w = f[f.length - 1].cumContrib,
      _ = f[f.length - 1].cumInterest;
    const M = new Date(r[r.length - 1].date);
    let T = M.getFullYear(),
      N = M.getMonth() + 1;
    for (let z = 0; z < m; z++) {
      ((N += 1), N > 12 && ((N = 1), (T += 1)));
      const R = `${T}-${String(N).padStart(2, "0")}`,
        B = S * p,
        X = S + O + B;
      ((w += O),
        (_ += B),
        (S = X),
        f.push({
          date: R,
          monthContrib: O,
          monthInterest: B,
          cumContrib: w,
          cumInterest: _,
          total: X,
          isProjection: !0,
        }));
    }
  }
  return { points: f };
}
Pp.locale("pt-br");
function L9(e) {
  if (!e || isNaN(e.getTime())) return "—";
  const t = Pp(e).format("MMMM/YYYY");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function YA(e) {
  if (!e) return "";
  const [t, r] = e.split("-");
  return `${r}/${t}`;
}
function B9(e) {
  const [t, r] = e.split("-").map(Number),
    a = r + 1;
  return a > 12 ? `${t + 1}-01` : `${t}-${String(a).padStart(2, "0")}`;
}
function U9(e) {
  const t = e.filter((r) => Number.isFinite(r));
  return t.length ? t.reduce((r, a) => r + a, 0) / t.length : 0;
}
const $9 = 0.1,
  q9 = $9 / 12;
function H9(e, t) {
  const r = [...e];
  if (!e.length) return r;
  const a = Math.max(0, t - e.length);
  if (a === 0) return r;
  const u = U9(e.map((h) => h.monthContrib));
  let { total: o, cumContrib: f, cumInterest: s } = e[e.length - 1],
    v = e[e.length - 1].date;
  for (let h = 0; h < a; h++) {
    v = B9(v);
    const m = o * q9,
      p = o + u + m;
    ((f += u),
      (s += m),
      (o = p),
      r.push({
        date: v,
        monthContrib: u,
        monthInterest: m,
        cumContrib: f,
        cumInterest: s,
        total: p,
        isProjection: !0,
      }));
  }
  return r;
}
function Y9(e, t) {
  if (typeof e == "string" && e.startsWith("Date(")) {
    const u = e.match(/Date\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (u) return new Date(Number(u[1]), Number(u[2]), Number(u[3]));
  }
  if (typeof e == "number")
    return new Date(Math.round((e - 25569) * 86400 * 1e3));
  const r = String(t ?? e ?? "").trim();
  if (r) {
    let u = r.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (u) return new Date(Number(u[3]), Number(u[2]) - 1, Number(u[1]));
    if (((u = r.match(/^(\d{4})-(\d{2})-(\d{2})$/)), u))
      return new Date(Number(u[1]), Number(u[2]) - 1, Number(u[3]));
    if (((u = r.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)), u))
      return new Date(Number(u[3]), Number(u[1]) - 1, Number(u[2]));
  }
  const a = new Date(r);
  return isNaN(a.getTime()) ? new Date() : a;
}
async function I9(e, t) {
  const r = `https://docs.google.com/spreadsheets/d/${e}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(t)}`,
    a = await fetch(r, { cache: "no-store" });
  if (!a.ok)
    throw new Error(
      "Falha ao ler planilha (HTTP " +
        a.status +
        "). Verifique permissões/compartilhamento e o nome da aba.",
    );
  const u = await a.text(),
    o = JSON.parse(u.substring(u.indexOf("(") + 1, u.lastIndexOf(")"))),
    f = o.table.cols.map((v) => (v.label || v.id || "").toString().trim()),
    s = [];
  for (const v of o.table.rows) {
    const h = {};
    v.c?.forEach((p, g) => {
      const b = (f[g] || "").toString().trim(),
        O = p?.v ?? null,
        S = p?.f ?? null;
      b.toLowerCase() === "date" ? (h[b] = Y9(O, S)) : (h[b] = O ?? S ?? null);
    });
    const m = {};
    (Object.keys(h).forEach((p) => {
      p.toLowerCase().startsWith("aporte_") && (m[p] = Wm(h[p]) ?? 0);
    }),
      s.push({
        date: h.date ? new Date(h.date) : new Date(),
        saldo: Wm(h.saldo),
        rendimento_percent: h.rendimento_percent,
        aportes: m,
      }));
  }
  return s.filter((v) => !isNaN(v.date.getTime()));
}
function K9() {
  A.useEffect(() => {
    const e = "gf-poppins";
    if (document.getElementById(e)) return;
    const t = document.createElement("link");
    ((t.id = e),
      (t.rel = "stylesheet"),
      (t.href =
        "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&display=swap"),
      document.head.appendChild(t));
  }, []);
}
function G9() {
  K9();
  const [e, t] = A.useState("idle"),
    [r, a] = A.useState([]),
    [u, o] = A.useState(!1);
  A.useEffect(() => {
    (t("loading"),
      I9(D9, j9)
        .then((O) => {
          (a(O), t("ok"));
        })
        .catch((O) => t("error")));
  }, []);
  const f = A.useMemo(() => k9(r, rm), [r]),
    s = A.useMemo(() => f.points.filter((O) => !O.isProjection), [f]),
    v = A.useMemo(() => H9(s, rm), [s]),
    h = A.useMemo(() => (u ? v : s), [v, s, u]),
    m = A.useMemo(() => (u ? h.findIndex((O) => O.isProjection) : -1), [h, u]),
    p = s.at(-1),
    g = p
      ? { total: p.total, cumContrib: p.cumContrib, cumInterest: p.cumInterest }
      : { total: 0, cumContrib: 0, cumInterest: 0 },
    b = p?.date ? L9(Pp(`${p.date}-01`).toDate()) : "—";
  return xe.jsxs("div", {
    className: "container",
    children: [
      xe.jsxs("div", {
        className: "header",
        children: [
          xe.jsx("h1", {
            style: {
              fontFamily:
                "'Poppins', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
              letterSpacing: ".2px",
            },
            children: C9,
          }),
          xe.jsx("div", {
            className: "subtle",
            children:
              "Investimento para comemorarmos o casamento dos nossos pais! 😎💕",
          }),
        ],
      }),
      xe.jsxs("div", {
        className: "row",
        style: { margin: "12px 0" },
        children: [
          xe.jsxs("div", {
            className: "kpi",
            style: { padding: 0, borderRadius: 14, overflow: "hidden" },
            children: [
              xe.jsx("div", {
                style: {
                  backgroundColor: "var(--pastel1)",
                  color: "#202225",
                  fontWeight: 700,
                  padding: "6px 10px",
                  fontSize: "0.85rem",
                },
                children: "Total acumulado",
              }),
              xe.jsx("div", {
                style: {
                  padding: "8px 10px",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                },
                children: gu(g.total),
              }),
            ],
          }),
          xe.jsxs("div", {
            className: "kpi",
            style: { padding: 0, borderRadius: 14, overflow: "hidden" },
            children: [
              xe.jsx("div", {
                style: {
                  backgroundColor: "var(--pastel3)",
                  color: "#202225",
                  fontWeight: 700,
                  padding: "6px 10px",
                  fontSize: "0.85rem",
                },
                children: "Acumulado dos aportes",
              }),
              xe.jsx("div", {
                style: {
                  padding: "8px 10px",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                },
                children: gu(g.cumContrib),
              }),
            ],
          }),
          xe.jsxs("div", {
            className: "kpi",
            style: { padding: 0, borderRadius: 14, overflow: "hidden" },
            children: [
              xe.jsx("div", {
                style: {
                  backgroundColor: "var(--pastel4)",
                  color: "#202225",
                  fontWeight: 700,
                  padding: "6px 10px",
                  fontSize: "0.85rem",
                },
                children: "Acumulado de juros",
              }),
              xe.jsx("div", {
                style: {
                  padding: "8px 10px",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                },
                children: gu(g.cumInterest),
              }),
            ],
          }),
        ],
      }),
      xe.jsxs("div", {
        className: "card",
        style: { marginTop: 12, padding: 12 },
        children: [
          xe.jsxs("div", {
            style: {
              background: "var(--pastel5)",
              color: "#202225",
              fontWeight: 800,
              padding: "6px 10px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            },
            children: [
              xe.jsx("span", {
                style: { fontSize: ".95rem" },
                children: "Evolução do fundo",
              }),
              xe.jsx("span", {
                style: {
                  padding: "4px 10px",
                  background: "rgba(255,255,255,.7)",
                  borderRadius: 999,
                  fontSize: ".8rem",
                  fontWeight: 700,
                },
                children: "10 anos",
              }),
            ],
          }),
          xe.jsxs("div", {
            className: "toolbar",
            style: {
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
            },
            children: [
              xe.jsxs("span", {
                className: "chip",
                style: {
                  backgroundColor: "var(--pastel2)",
                  color: "#202225",
                  borderRadius: 999,
                  padding: "6px 10px",
                  fontWeight: 600,
                },
                children: ["Última atualização: ", b],
              }),
              xe.jsxs("label", {
                className: "chip",
                style: {
                  backgroundColor: "var(--pastel2)",
                  color: "#202225",
                  borderRadius: 999,
                  padding: "6px 10px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                },
                children: [
                  xe.jsx("input", {
                    type: "checkbox",
                    checked: u,
                    onChange: () => o((O) => !O),
                    style: { width: 18, height: 18 },
                  }),
                  xe.jsxs("span", {
                    children: [
                      "Exibir projeção de ",
                      rm / 12,
                      " anos (10% a.a.)",
                    ],
                  }),
                ],
              }),
            ],
          }),
          xe.jsxs("div", {
            style: { width: "100%", height: 400 },
            children: [
              e === "loading" &&
                xe.jsx("div", {
                  className: "subtle",
                  children: "Carregando dados…",
                }),
              e === "error" &&
                xe.jsx("div", {
                  className: "subtle",
                  children:
                    "Não foi possível ler a planilha. Verifique se está publicada.",
                }),
              e === "ok" &&
                xe.jsx(S8, {
                  width: "100%",
                  height: "100%",
                  children: xe.jsxs(w9, {
                    data: h,
                    margin: { top: 16, right: 32, bottom: 12, left: 12 },
                    barCategoryGap: "24%",
                    barGap: 4,
                    children: [
                      xe.jsx(pT, { stroke: "#eef2f7" }),
                      xe.jsx(wT, {
                        dataKey: "date",
                        tick: { fontSize: 12 },
                        padding: { left: 28, right: 28 },
                        tickFormatter: YA,
                      }),
                      xe.jsx(ET, {
                        tickFormatter: (O) => gu(O).replace("R$", "R$ "),
                        tick: { fontSize: 12 },
                      }),
                      xe.jsx(s8, {
                        formatter: (O, S) => {
                          const w = {
                            monthContrib: "Aporte do mês",
                            monthInterest: "Juros do mês",
                            cumContrib: "Ac. Aportado",
                            cumInterest: "Ac. Juros",
                            total: "Total",
                          };
                          return [gu(O), w[S] || S];
                        },
                        labelFormatter: (O) => `Mês: ${YA(String(O))}`,
                      }),
                      xe.jsx(Lf, {}),
                      m > 0 &&
                        xe.jsx(wp, {
                          x1: h[m].date,
                          x2: h.at(-1).date,
                          fill: pu.projection,
                          fillOpacity: 0.12,
                        }),
                      xe.jsx(cT, {
                        dataKey: "monthInterest",
                        name: "Juros do mês",
                        fill: pu.barInterest,
                      }),
                      xe.jsx(Pc, {
                        type: "monotone",
                        dataKey: "cumContrib",
                        name: "Ac. Aportado",
                        stroke: pu.lineCumContrib,
                        strokeWidth: 2,
                        dot: !1,
                      }),
                      xe.jsx(Pc, {
                        type: "monotone",
                        dataKey: "cumInterest",
                        name: "Ac. Juros",
                        stroke: pu.lineCumInterest,
                        strokeWidth: 2,
                        dot: !1,
                      }),
                      xe.jsx(Pc, {
                        type: "monotone",
                        dataKey: "total",
                        name: "Total",
                        stroke: pu.lineTotal,
                        strokeWidth: 3,
                        dot: !1,
                      }),
                    ],
                  }),
                }),
            ],
          }),
          xe.jsx("div", {
            className: "footer",
            children: xe.jsxs("div", {
              children: [
                xe.jsx("strong", { children: "Como calculamos:" }),
                " os meses reais seguem a regra do saldo/rendimento. A ",
                xe.jsx("em", { children: "projeção" }),
                " foi recalculada aqui com taxa fixa de ",
                xe.jsx("strong", { children: "10% ao ano" }),
                " (≈ 0,833% a.m.) e com ",
                xe.jsx("em", { children: "aporte médio" }),
                " dos meses reais.",
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
yj.createRoot(document.getElementById("root")).render(
  xe.jsx(IA.StrictMode, { children: xe.jsx(G9, {}) }),
);
