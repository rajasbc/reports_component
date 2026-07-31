import * as P from "react";
import Le, { useState as B, useEffect as Se, useRef as ge, useId as l2, useMemo as er, useCallback as Ee, isValidElement as Dt, forwardRef as ut, createContext as At, useContext as $t, useImperativeHandle as z0, useLayoutEffect as Et, cloneElement as ri, createElement as L0, Children as s2, memo as wu, PureComponent as B0, Fragment as c2 } from "react";
import { createPortal as W0 } from "react-dom";
function On(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var So = { exports: {} }, pi = {};
var vf;
function u2() {
  if (vf) return pi;
  vf = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      o = {};
      for (var l in i)
        l !== "key" && (o[l] = i[l]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return pi.Fragment = t, pi.jsx = r, pi.jsxs = r, pi;
}
var hi = {};
var gf;
function d2() {
  return gf || (gf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === D ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case y:
          return "Fragment";
        case w:
          return "Profiler";
        case m:
          return "StrictMode";
        case S:
          return "Suspense";
        case C:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case v:
            return "Portal";
          case x:
            return N.displayName || "Context";
          case b:
            return (N._context.displayName || "Context") + ".Consumer";
          case j:
            var $ = N.render;
            return N = N.displayName, N || (N = $.displayName || $.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case _:
            return $ = N.displayName || null, $ !== null ? $ : e(N.type) || "Memo";
          case E:
            $ = N._payload, N = N._init;
            try {
              return e(N($));
            } catch {
            }
        }
      return null;
    }
    function t(N) {
      return "" + N;
    }
    function r(N) {
      try {
        t(N);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var J = $.error, X = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return J.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(N);
      }
    }
    function n(N) {
      if (N === y) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === E)
        return "<...>";
      try {
        var $ = e(N);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var N = k.A;
      return N === null ? null : N.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(N) {
      if (W.call(N, "key")) {
        var $ = Object.getOwnPropertyDescriptor(N, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function l(N, $) {
      function J() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      J.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: J,
        configurable: !0
      });
    }
    function s() {
      var N = e(this.type);
      return ie[N] || (ie[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function c(N, $, J, X, ee, he) {
      var se = J.ref;
      return N = {
        $$typeof: g,
        type: N,
        key: $,
        props: J,
        _owner: X
      }, (se !== void 0 ? se : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: s
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function u(N, $, J, X, ee, he) {
      var se = $.children;
      if (se !== void 0)
        if (X)
          if (F(se)) {
            for (X = 0; X < se.length; X++)
              f(se[X]);
            Object.freeze && Object.freeze(se);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(se);
      if (W.call($, "key")) {
        se = e(N);
        var de = Object.keys($).filter(function(G) {
          return G !== "key";
        });
        X = 0 < de.length ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}", V[se + X] || (de = 0 < de.length ? "{" + de.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          se,
          de,
          se
        ), V[se + X] = !0);
      }
      if (se = null, J !== void 0 && (r(J), se = "" + J), a($) && (r($.key), se = "" + $.key), "key" in $) {
        J = {};
        for (var Q in $)
          Q !== "key" && (J[Q] = $[Q]);
      } else J = $;
      return se && l(
        J,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), c(
        N,
        se,
        J,
        i(),
        ee,
        he
      );
    }
    function f(N) {
      p(N) ? N._store && (N._store.validated = 1) : typeof N == "object" && N !== null && N.$$typeof === E && (N._payload.status === "fulfilled" ? p(N._payload.value) && N._payload.value._store && (N._payload.value._store.validated = 1) : N._store && (N._store.validated = 1));
    }
    function p(N) {
      return typeof N == "object" && N !== null && N.$$typeof === g;
    }
    var h = Le, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, F = Array.isArray, Z = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var q, ie = {}, z = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), L = Z(n(o)), V = {};
    hi.Fragment = y, hi.jsx = function(N, $, J) {
      var X = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        N,
        $,
        J,
        !1,
        X ? Error("react-stack-top-frame") : z,
        X ? Z(n(N)) : L
      );
    }, hi.jsxs = function(N, $, J) {
      var X = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        N,
        $,
        J,
        !0,
        X ? Error("react-stack-top-frame") : z,
        X ? Z(n(N)) : L
      );
    };
  })()), hi;
}
var yf;
function f2() {
  return yf || (yf = 1, process.env.NODE_ENV === "production" ? So.exports = u2() : So.exports = d2()), So.exports;
}
var d = f2();
function $N({ children: e, onClick: t, color: r = "#007bff", textColor: n = "#fff" }) {
  return /* @__PURE__ */ d.jsx(
    "button",
    {
      style: {
        padding: "10px 20px",
        background: r,
        color: n,
        borderRadius: "6px",
        border: "none"
      },
      onClick: t,
      children: e
    }
  );
}
var F0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mf = Le.createContext && /* @__PURE__ */ Le.createContext(F0), p2 = ["attr", "size", "title"];
function h2(e, t) {
  if (e == null) return {};
  var r = v2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function v2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
function xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xf(Object(r), !0).forEach(function(n) {
      g2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g2(e, t, r) {
  return t = y2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y2(e) {
  var t = m2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function m2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function V0(e) {
  return e && e.map((t, r) => /* @__PURE__ */ Le.createElement(t.tag, Qo({
    key: r
  }, t.attr), V0(t.child)));
}
function Ue(e) {
  return (t) => /* @__PURE__ */ Le.createElement(x2, Jo({
    attr: Qo({}, e.attr)
  }, t), V0(e.child));
}
function x2(e) {
  var t = (r) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, a = h2(e, p2), l = i || r.size || "1em", s;
    return r.className && (s = r.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ Le.createElement("svg", Jo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: s,
      style: Qo(Qo({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Le.createElement("title", null, o), e.children);
  };
  return mf !== void 0 ? /* @__PURE__ */ Le.createElement(mf.Consumer, null, (r) => t(r)) : t(F0);
}
function bf(e) {
  return Ue({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(e);
}
function wf(e) {
  return Ue({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, child: [] }] })(e);
}
function K0(e) {
  return Ue({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(e);
}
function H0(e) {
  return Ue({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(e);
}
function jf(e) {
  return Ue({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function Sf(e) {
  return Ue({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" }, child: [] }] })(e);
}
function b2(e) {
  return Ue({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function Of(e) {
  return Ue({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z" }, child: [] }] })(e);
}
function Vl(e) {
  return Ue({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z" }, child: [] }] })(e);
}
function Pf(e) {
  return Ue({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" }, child: [] }] })(e);
}
function Mi(e) {
  return Ue({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" }, child: [] }] })(e);
}
const mt = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "sans-serif",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "2px solid #e1e5e9"
  },
  th: {
    padding: "8px 12px",
    textAlign: "left",
    cursor: "pointer",
    color: "#666666",
    backgroundColor: "#f8f9fa",
    borderRight: "1px solid #e1e5e9",
    borderBottom: "2px solid #e1e5e9",
    fontWeight: "600",
    fontSize: "13px",
    maxWidth: "100px"
  },
  td: {
    padding: "8px 12px",
    border: "1px solid #cececeff",
    whiteSpace: "normal",
    wordWrap: "break-word",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontSize: "14px",
    maxWidth: "200px",
    verticalAlign: "top"
  },
  tr: {
    transition: "background-color 0.1s",
    cursor: "pointer"
  },
  trHover: {
    backgroundColor: "#f5f5f5"
  },
  button: {
    borderRadius: "8px",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: "#989898",
    cursor: "pointer",
    outline: "none",
    border: "none"
  }
}, Kl = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), w2 = (e, t, r) => {
  if (!e || typeof e != "string") return "";
  try {
    let n = e;
    const i = n.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (i && i.forEach((a) => {
      const l = a.slice(1, -1), s = r.find((c) => c.name === l);
      if (s && t[s.id] !== null && t[s.id] !== void 0) {
        const c = parseFloat(t[s.id]) || 0;
        n = n.replace(a, c.toString());
      } else
        n = n.replace(a, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(n))
      return "Invalid formula";
    const o = Function('"use strict"; return (' + n + ")")();
    return isNaN(o) ? "Error" : o.toString();
  } catch {
    return "Error";
  }
};
function zN({ columns: e, initialData: t }) {
  const [r, n] = B(e), [i, o] = B(t), [a, l] = B(null), [s, c] = B(null), [u, f] = B(/* @__PURE__ */ new Set()), [p, h] = B(!1), [g, v] = B(!1), [y, m] = B(/* @__PURE__ */ new Set()), [w, b] = B(null), [x, j] = B(""), [S, C] = B(null), [_, E] = B(null), [T, D] = B(""), [k, W] = B({}), [F, Z] = B(null), [q, ie] = B({ key: null, direction: "ascending" }), [z] = B({}), L = (I) => {
    let U = "ascending";
    q.key === I && q.direction === "ascending" && (U = "descending"), ie({ key: I, direction: U });
  }, V = Le.useMemo(() => {
    let I = [...i];
    return q.key !== null && I.sort((U, H) => U[q.key] < H[q.key] ? q.direction === "ascending" ? -1 : 1 : U[q.key] > H[q.key] ? q.direction === "ascending" ? 1 : -1 : 0), I;
  }, [i, q]);
  Se(() => {
    const I = () => {
      v(!1), h(!1), b(null), Z(null), C(null);
    }, U = (H) => {
      if (H.key === "Escape")
        H.preventDefault(), C(null), l(null);
      else if (a && (H.ctrlKey || H.metaKey))
        if (H.key === "c") {
          H.preventDefault();
          const ve = i.find((Te) => Te.id === a.rowId);
          ve && C({
            rowId: a.rowId,
            colId: a.colId,
            value: ve[a.colId]
          });
        } else H.key === "v" && S && (H.preventDefault(), J(a.rowId, a.colId, S.value));
    };
    return document.addEventListener("click", I), document.addEventListener("keydown", U), () => {
      document.removeEventListener("click", I), document.removeEventListener("keydown", U);
    };
  }, [a, S, i]);
  const N = () => {
    const I = Kl(), U = `row-${Date.now()}`, H = {
      id: U,
      ...r.reduce((ve, Te) => ({
        ...ve,
        [Te.id]: Te.type === "createdTime" || Te.type === "lastEditedTime" ? I : Te.type === "formula" ? "" : Te.type === "id" ? U : null
      }), {})
    };
    o([...i, H]);
  }, $ = (I) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((U) => U.id !== I));
  }, J = (I, U, H) => {
    const ve = Kl();
    if (r.find((Ce) => Ce.id === U)?.type === "email" && H) {
      const Ce = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, fe = `${I}-${U}`;
      Ce.test(H) ? m((yt) => {
        const Gt = new Set(yt);
        return Gt.delete(fe), Gt;
      }) : m((yt) => new Set(yt).add(fe));
    }
    o(i.map((Ce) => {
      if (Ce.id === I) {
        const fe = { ...Ce, [U]: H };
        return r.forEach((yt) => {
          yt.type === "lastEditedTime" && (fe[yt.id] = ve);
        }), fe;
      }
      return Ce;
    })), l(null);
  }, X = (I = "text", U) => {
    const H = `col-${Date.now()}`, ve = Kl(), Te = U || I.charAt(0).toUpperCase() + I.slice(1), Ce = {
      id: H,
      name: x.trim() || Te,
      type: I,
      options: I === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, Ce]), o(i.map((fe) => ({
      ...fe,
      [H]: I === "createdTime" || I === "lastEditedTime" ? ve : I === "formula" ? "" : I === "id" ? fe.id : null
    }))), v(!1), j("");
  }, ee = (I, U) => {
    n(r.map((H) => H.id === I ? { ...H, name: U } : H)), c(null);
  }, he = (I) => {
    f((U) => {
      const H = new Set(U);
      return H.has(I) ? H.delete(I) : H.add(I), H;
    }), b(null);
  }, se = (I) => {
    n(r.filter((U) => U.id !== I)), o(i.map((U) => {
      const { [I]: H, ...ve } = U;
      return ve;
    })), b(null);
  }, de = (I) => {
    const U = r.find((fe) => fe.id === I);
    if (!U) return;
    const H = r.findIndex((fe) => fe.id === I), ve = `col-${Date.now()}`, Te = {
      ...U,
      id: ve,
      name: `${U.name} Copy`
    }, Ce = [...r];
    Ce.splice(H + 1, 0, Te), n(Ce), o(i.map((fe) => ({
      ...fe,
      [ve]: fe[I]
    }))), b(null);
  }, Q = (I, U, H) => {
    if (!U.trim()) return;
    const ve = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], Te = ve[Math.floor(Math.random() * ve.length)];
    n(r.map((Ce) => {
      if (Ce.id === I && Ce.type === "select") {
        const fe = Ce.options || [];
        if (!fe.some((Gt) => Gt.value.toLowerCase() === U.toLowerCase()))
          return {
            ...Ce,
            options: [...fe, { value: U, color: Te }]
          };
      }
      return Ce;
    })), J(H, I, U), E(null), D("");
  }, G = r.filter((I) => !u.has(I.id)), le = V.filter((I) => Object.entries(k).every(([U, H]) => {
    if (!H.trim()) return !0;
    const ve = I[U];
    return ve == null ? !1 : String(ve).toLowerCase().includes(H.toLowerCase());
  })), K = (I) => q.key === I ? q.direction === "ascending" ? "▲" : "▼" : "↕", Me = (I) => {
    const U = I.color || "#f8f9fa", H = z[I.id] || 150;
    return {
      th: {
        ...mt.th,
        backgroundColor: U,
        color: I.color && I.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${H}px`,
        minWidth: `${H}px`,
        maxWidth: `${H}px`
      },
      td: {
        ...mt.td,
        backgroundColor: I.color ? `${U}33` : "#ffffff",
        width: `${H}px`,
        minWidth: `${H}px`,
        maxWidth: `${H}px`
      }
    };
  }, me = (I, U, H, ve) => {
    const Te = `${H}-${I.id}`, Ce = y.has(Te);
    if (ve)
      switch (I.type) {
        case "checkbox":
          return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!U, onChange: (fe) => J(H, I.id, fe.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ d.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ d.jsxs(
            "select",
            {
              value: U || "",
              onChange: (fe) => {
                fe.target.value === "__add_new__" ? (E({ columnId: I.id, rowId: H }), D("")) : fe.target.value === "__manage_options__" || J(H, I.id, fe.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "", children: "Select..." }),
                I.options?.map((fe) => /* @__PURE__ */ d.jsx("option", { value: fe.value, children: fe.value }, fe.value)),
                /* @__PURE__ */ d.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ d.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "date":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "date",
              defaultValue: U || "",
              onBlur: (fe) => J(H, I.id, fe.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "email":
          return /* @__PURE__ */ d.jsxs("div", { children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "email",
                defaultValue: U || "",
                onBlur: (fe) => J(H, I.id, fe.target.value),
                autoFocus: !0,
                style: {
                  width: "100%",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  outline: "none"
                }
              }
            ),
            Ce && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "number":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: U || "",
              onBlur: (fe) => J(H, I.id, fe.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        default:
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: U || "",
              onBlur: (fe) => J(H, I.id, fe.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
      }
    if (U == null) return /* @__PURE__ */ d.jsx("span", { style: { color: "#aaa" } });
    switch (I.type) {
      case "checkbox":
        return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!U, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(U).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888" }, children: U });
      case "select":
        const fe = I.options?.find((nr) => nr.value === U);
        return fe ? /* @__PURE__ */ d.jsx("span", { style: {
          backgroundColor: fe.color + "33",
          color: fe.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: U }) : U;
      case "number":
        return /* @__PURE__ */ d.jsx("span", { style: { textAlign: "right", display: "block" }, children: Number(U).toLocaleString() });
      case "email":
        return /* @__PURE__ */ d.jsxs("div", { children: [
          U,
          Ce && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const yt = i.find((nr) => nr.id === H), Gt = yt ? w2(U, yt, r) : "Error";
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: Gt }),
          /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: U, children: "Σ" })
        ] });
      case "id":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: U });
      default:
        return U;
    }
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    _ && /* @__PURE__ */ d.jsx("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    }, children: /* @__PURE__ */ d.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ d.jsx(
        "input",
        {
          type: "text",
          value: T,
          onChange: (I) => D(I.target.value),
          placeholder: "Enter option name",
          autoFocus: !0,
          style: {
            width: "90%",
            padding: "8px 12px",
            border: "1px solid #e1e5e9",
            borderRadius: "4px",
            fontSize: "14px",
            outline: "none",
            marginBottom: "15px"
          }
        }
      ),
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => {
              E(null), D("");
            },
            style: {
              padding: "6px 12px",
              border: "1px solid #e1e5e9",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "#ffffffff",
              cursor: "pointer",
              fontSize: "14px"
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => Q(_.columnId, T, _.rowId),
            disabled: !T.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: T.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: T.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ d.jsxs("table", { style: mt.table, children: [
      /* @__PURE__ */ d.jsxs("thead", { children: [
        /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: {
            ...mt.th,
            width: "40px"
          } }),
          G.map((I) => {
            const U = s === I.id;
            return /* @__PURE__ */ d.jsxs(
              "th",
              {
                style: {
                  ...Me(I).th,
                  position: "relative"
                },
                title: `Sort by ${I.name}`,
                children: [
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (H) => {
                        H.stopPropagation(), H.detail === 1 ? (v(!1), h(!1), b(w === I.id ? null : I.id)) : H.detail === 2 && (c(I.id), b(null));
                      },
                      children: U ? /* @__PURE__ */ d.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: I.name,
                          onBlur: (H) => ee(I.id, H.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                        /* @__PURE__ */ d.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: I.name }),
                        /* @__PURE__ */ d.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (H) => {
                              H.stopPropagation(), L(I.id);
                            },
                            children: K(I.id)
                          }
                        )
                      ] })
                    }
                  ),
                  w === I.id && /* @__PURE__ */ d.jsxs("div", { style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e1e5e9",
                    borderRadius: "4px",
                    padding: "4px",
                    zIndex: 1e3,
                    minWidth: "120px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }, children: [
                    /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (H) => {
                          H.stopPropagation(), Z(F === I.id ? null : I.id);
                        },
                        children: [
                          "Filter",
                          F === I.id && /* @__PURE__ */ d.jsx("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e1e5e9",
                            borderRadius: "4px",
                            padding: "8px",
                            minWidth: "200px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            zIndex: 1001
                          }, children: /* @__PURE__ */ d.jsx(
                            "input",
                            {
                              type: "text",
                              placeholder: `Filter ${I.name}...`,
                              value: k[I.id] || "",
                              onChange: (H) => {
                                W((ve) => ({
                                  ...ve,
                                  [I.id]: H.target.value
                                }));
                              },
                              style: {
                                width: "90%",
                                padding: "6px 8px",
                                border: "1px solid #e1e5e9",
                                borderRadius: "4px",
                                fontSize: "14px",
                                outline: "none"
                              },
                              autoFocus: !0
                            }
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (H) => {
                          H.stopPropagation(), de(I.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (H) => {
                          H.stopPropagation(), he(I.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (H) => {
                          H.stopPropagation(), se(I.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ]
              },
              I.id
            );
          }),
          /* @__PURE__ */ d.jsxs(
            "th",
            {
              style: {
                ...mt.th,
                color: "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px"
              },
              children: [
                /* @__PURE__ */ d.jsx("button", { onClick: (I) => {
                  I.stopPropagation(), b(null), h(!1), v(!g);
                }, title: "Add column", style: { ...mt.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ d.jsx("button", { onClick: (I) => {
                  I.stopPropagation(), b(null), v(!1), h(!p);
                }, style: { ...mt.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ d.jsxs("div", { onClick: (I) => I.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "180px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: x,
                      onChange: (I) => j(I.target.value),
                      style: {
                        width: "90%",
                        padding: "6px 8px",
                        marginBottom: "8px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        color: "#333333",
                        fontSize: "14px"
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("text"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("number"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("select"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("checkbox"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("date"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("email"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("formula", "Formula"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("id", "ID"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("createdTime", "Created time"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => X("lastEditedTime", "Last edited time"), onMouseEnter: (I) => I.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (I) => I.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ d.jsxs("div", { onClick: (I) => I.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((I) => /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      style: {
                        padding: "4px 8px",
                        cursor: "pointer",
                        color: "#333333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "13px"
                      },
                      onClick: () => he(I.id),
                      children: [
                        /* @__PURE__ */ d.jsx("span", { children: I.name }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px" }, children: u.has(I.id) ? /* @__PURE__ */ d.jsx(K0, {}) : /* @__PURE__ */ d.jsx(H0, {}) })
                      ]
                    },
                    I.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: {
            ...mt.th,
            width: "40px",
            padding: "4px"
          } }),
          G.map((I) => /* @__PURE__ */ d.jsx(
            "th",
            {
              style: {
                ...Me(I).th,
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: k[I.id] || "",
                  onChange: (U) => {
                    W((H) => ({
                      ...H,
                      [I.id]: U.target.value
                    }));
                  },
                  style: {
                    width: "90%",
                    padding: "4px 6px",
                    border: "1px solid #e1e5e9",
                    borderRadius: "4px",
                    fontSize: "12px",
                    outline: "none",
                    backgroundColor: "#ffffff",
                    color: "#333333"
                  },
                  onClick: (U) => U.stopPropagation()
                }
              )
            },
            `search-${I.id}`
          )),
          /* @__PURE__ */ d.jsx("th", { style: {
            ...mt.th,
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("tbody", { children: [
        le.map((I, U) => /* @__PURE__ */ d.jsxs(
          "tr",
          {
            style: {
              ...mt.tr,
              backgroundColor: U % 2 === 0 ? "#f8f9fa" : "#ffffff"
            },
            onMouseEnter: (H) => {
              H.currentTarget.style.backgroundColor = mt.trHover.backgroundColor;
            },
            onMouseLeave: (H) => {
              const ve = U % 2 === 0 ? "#f8f9fa" : "#ffffff";
              H.currentTarget.style.backgroundColor = ve;
            },
            children: [
              /* @__PURE__ */ d.jsx("td", { style: {
                ...mt.td,
                textAlign: "center",
                color: "#aaa"
              }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                /* @__PURE__ */ d.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: "#999" }, children: "⋮⋮" }),
                /* @__PURE__ */ d.jsx("button", { onClick: (H) => {
                  H.stopPropagation(), $(I.id);
                }, style: { ...mt.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ d.jsx(Mi, {}) })
              ] }) }),
              G.map((H) => {
                const ve = a?.rowId === I.id && a?.colId === H.id;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    style: {
                      ...Me(H).td,
                      userSelect: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    onClick: (Te) => {
                      Te.stopPropagation(), l({ rowId: I.id, colId: H.id });
                    },
                    children: me(H, I[H.id], I.id, ve)
                  },
                  H.id
                );
              }),
              /* @__PURE__ */ d.jsx("td", { style: mt.td })
            ]
          },
          I.id
        )),
        /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: G.length + 2, style: {
          ...mt.td,
          textAlign: "center",
          color: "#aaa",
          cursor: "pointer"
        }, onClick: N, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
}
function j2(e) {
  return Ue({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z" }, child: [] }] })(e);
}
function S2(e) {
  return Ue({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z" }, child: [] }] })(e);
}
function Cf(e) {
  return Ue({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, child: [] }, { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "15", x2: "12", y2: "3" }, child: [] }] })(e);
}
function O2(e, t) {
  const [r, n] = Le.useState(t);
  return { items: Le.useMemo(() => {
    const a = [...e];
    return r?.key && a.sort((l, s) => {
      const c = l[r.key], u = s[r.key];
      return c < u ? r.direction === "ascending" ? -1 : 1 : c > u ? r.direction === "ascending" ? 1 : -1 : 0;
    }), a;
  }, [e, r]), requestSort: (a) => {
    let l = "ascending";
    r?.key === a && r?.direction === "ascending" && (l = "descending"), n({ key: a, direction: l });
  }, sortConfig: r };
}
const He = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "sans-serif",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "2px solid #e1e5e9"
  },
  th: {
    padding: "8px 12px",
    textAlign: "left",
    cursor: "pointer",
    color: "#666666",
    backgroundColor: "#f8f9fa",
    borderRight: "1px solid #e1e5e9",
    borderBottom: "2px solid #e1e5e9",
    fontWeight: "600",
    fontSize: "13px",
    maxWidth: "100px"
  },
  td: {
    padding: "8px 12px",
    border: "1px solid #cececeff",
    whiteSpace: "normal",
    wordWrap: "break-word",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontSize: "14px",
    maxWidth: "200px",
    verticalAlign: "top"
  },
  tr: {
    transition: "background-color 0.1s",
    cursor: "pointer"
  },
  trHover: {
    backgroundColor: "#f5f5f5"
  },
  button: {
    borderRadius: "8px",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: "#989898",
    cursor: "pointer",
    outline: "none",
    border: "none"
  }
}, vi = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), P2 = (e, t, r) => {
  if (!e || typeof e != "string") return "";
  try {
    let n = e;
    const i = n.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (i && i.forEach((a) => {
      const l = a.slice(1, -1), s = r.find((c) => c.name === l);
      if (s && t[s.id] !== null && t[s.id] !== void 0) {
        const c = parseFloat(t[s.id]) || 0;
        n = n.replace(a, c.toString());
      } else
        n = n.replace(a, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(n))
      return "Invalid formula";
    const o = Function('"use strict"; return (' + n + ")")();
    return isNaN(o) ? "Error" : o.toString();
  } catch {
    return "Error";
  }
}, kf = ({ columns: e, initialData: t }) => {
  const [r, n] = B(e), [i, o] = B(t), [a, l] = B(null), [s, c] = B(null), [u, f] = B(/* @__PURE__ */ new Set()), [p, h] = B(!1), [g, v] = B(!1), [y, m] = B(/* @__PURE__ */ new Set()), [w, b] = B(null), [x, j] = B(""), [S, C] = B(!1), [_, E] = B(null), [T, D] = B(/* @__PURE__ */ new Set()), [k, W] = B(null), [F, Z] = B(null), [q, ie] = B(null), [z, L] = B(null), [V, N] = B(/* @__PURE__ */ new Set()), [$, J] = B({}), [X, ee] = B(null), [he, se] = B(null), [de, Q] = B(null), [G, le] = B(!1), [K, Me] = B(null), [me, I] = B(/* @__PURE__ */ new Set()), [U, H] = B(null), [ve, Te] = B(""), [Ce, fe] = B(null), [yt, Gt] = B(null), [nr, Gr] = B({}), [di, fi] = B(null), [Xr, xo] = B("#ffffff"), [An, Wl] = B("#f8f9fa"), [tf, bo] = B(!1), [rf, wo] = B(!1), [Y, Sw] = B(!1), [nf, Ow] = B({}), [Dr, of] = B(null), [af, Pw] = B(0), [lf, Cw] = B(0), {
    items: kw,
    sortConfig: sf,
    requestSort: _w
  } = O2(i, { key: null, direction: "ascending" });
  Se(() => {
    const O = () => {
      v(!1), h(!1), b(null), fi(null), bo(!1), wo(!1), Q(null);
    }, A = (M) => {
      if (M.key === "Escape")
        M.preventDefault(), Q(null), l(null);
      else if (a && (M.ctrlKey || M.metaKey))
        if (M.key === "c") {
          M.preventDefault();
          const re = i.find((ce) => ce.id === a.rowId) || Object.values($).flat().find((ce) => ce.id === a.rowId);
          re && Q({
            rowId: a.rowId,
            colId: a.colId,
            value: re[a.colId]
          });
        } else M.key === "v" && de && (M.preventDefault(), Ot(a.rowId, a.colId, de.value));
    };
    return document.addEventListener("click", O), document.addEventListener("keydown", A), () => {
      document.removeEventListener("click", O), document.removeEventListener("keydown", A);
    };
  }, [a, de, i, $]), Se(() => {
    const O = (A) => {
      U && A.key === "Enter" ? (A.preventDefault(), df(U.columnId, ve, U.rowId)) : U && A.key === "Escape" && (H(null), Te(""));
    };
    if (U)
      return document.addEventListener("keydown", O), () => document.removeEventListener("keydown", O);
  }, [U, ve]);
  const Ew = () => {
    const O = vi(), A = `row-${Date.now()}`, M = {
      id: A,
      ...r.reduce((re, ce) => ({
        ...re,
        [ce.id]: ce.type === "createdTime" || ce.type === "lastEditedTime" ? O : ce.type === "formula" ? "" : ce.type === "id" ? A : null
      }), {})
    };
    o([...i, M]);
  }, Aw = (O) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((A) => A.id !== O));
  }, Ot = (O, A, M) => {
    const re = vi();
    if (r.find((ue) => ue.id === A)?.type === "email" && M) {
      const ue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, te = `${O}-${A}`;
      ue.test(M) ? m((ye) => {
        const We = new Set(ye);
        return We.delete(te), We;
      }) : m((ye) => new Set(ye).add(te));
    }
    if (O.startsWith("subrow-")) {
      const ue = O.split("-")[1];
      J((te) => ({
        ...te,
        [ue]: te[ue]?.map((ye) => {
          if (ye.id === O) {
            const We = { ...ye, [A]: M };
            return r.forEach((be) => {
              be.type === "lastEditedTime" && (We[be.id] = re);
            }), We;
          }
          return ye;
        }) || []
      }));
    } else
      o(i.map((ue) => {
        if (ue.id === O) {
          const te = { ...ue, [A]: M };
          return r.forEach((ye) => {
            ye.type === "lastEditedTime" && (te[ye.id] = re);
          }), te;
        }
        return ue;
      }));
    l(null);
  }, ft = (O = "text", A) => {
    const M = `col-${Date.now()}`, re = vi(), ce = A || O.charAt(0).toUpperCase() + O.slice(1), ue = {
      id: M,
      name: x.trim() || ce,
      type: O,
      options: O === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, ue]), o(i.map((ye) => ({
      ...ye,
      [M]: O === "createdTime" || O === "lastEditedTime" ? re : O === "formula" ? "" : O === "id" ? ye.id : null
    })));
    const te = { ...$ };
    Object.keys(te).forEach((ye) => {
      te[ye] = te[ye].map((We) => ({
        ...We,
        [M]: O === "createdTime" || O === "lastEditedTime" ? re : O === "formula" ? "" : O === "id" ? We.id : null
      }));
    }), J(te), v(!1), j("");
  }, Tw = (O, A) => {
    n(r.map((M) => M.id === O ? { ...M, name: A } : M)), c(null);
  }, cf = (O) => {
    f((A) => {
      const M = new Set(A);
      return M.has(O) ? M.delete(O) : M.add(O), M;
    }), b(null);
  }, Iw = (O) => {
    n(r.filter((A) => A.id !== O)), o(i.map((A) => {
      const { [O]: M, ...re } = A;
      return re;
    })), b(null);
  }, Mw = (O) => {
    const A = r.find((ye) => ye.id === O);
    if (!A) return;
    const M = r.findIndex((ye) => ye.id === O), re = `col-${Date.now()}`, ce = {
      ...A,
      id: re,
      name: `${A.name} Copy`
    }, ue = [...r];
    ue.splice(M + 1, 0, ce), n(ue), o(i.map((ye) => ({
      ...ye,
      [re]: ye[O]
    })));
    const te = { ...$ };
    Object.keys(te).forEach((ye) => {
      te[ye] = te[ye].map((We) => ({
        ...We,
        [re]: We[O]
      }));
    }), J(te), b(null);
  }, Dw = (O, A, M) => {
    C(!0), E({ rowId: O, colId: A, value: M }), D(/* @__PURE__ */ new Set([`${O}-${A}`]));
  }, Rw = (O, A) => {
    S && _ && _.colId === A && D((M) => new Set(M).add(`${O}-${A}`));
  }, Nw = () => {
    if (S && _) {
      const O = i.map((A) => {
        const M = `${A.id}-${_.colId}`;
        return T.has(M) ? { ...A, [_.colId]: _.value } : A;
      });
      o(O);
    }
    C(!1), E(null), D(/* @__PURE__ */ new Set());
  }, $w = (O) => {
    W(O);
  }, zw = (O, A) => {
    O.preventDefault(), Z(A);
  }, Lw = (O, A) => {
    if (O.preventDefault(), k && k !== A) {
      const M = r.findIndex((te) => te.id === k), re = r.findIndex((te) => te.id === A), ce = [...r], [ue] = ce.splice(M, 1);
      ce.splice(re, 0, ue), n(ce);
    }
    W(null), Z(null);
  }, Bw = () => {
    W(null), Z(null);
  }, Ww = (O) => {
    ie(O);
  }, Fw = (O, A) => {
    O.preventDefault(), L(A);
  }, Vw = (O, A) => {
    if (O.preventDefault(), q && q !== A) {
      const M = i.findIndex((te) => te.id === q), re = i.findIndex((te) => te.id === A), ce = [...i], [ue] = ce.splice(M, 1);
      ce.splice(re, 0, ue), o(ce);
    }
    ie(null), L(null);
  }, Kw = () => {
    ie(null), L(null);
  }, Hw = (O) => {
    V.has(O) ? N((M) => {
      const re = new Set(M);
      return re.delete(O), re;
    }) : (N((M) => {
      const re = new Set(M);
      return re.add(O), re;
    }), (!$[O] || $[O].length === 0) && uf(O));
  }, uf = (O) => {
    const A = vi(), M = `subrow-${O}-${Date.now()}`, re = {
      id: M,
      ...r.reduce((ce, ue) => ({
        ...ce,
        [ue.id]: ue.type === "createdTime" || ue.type === "lastEditedTime" ? A : ue.type === "formula" ? "" : ue.type === "id" ? M : null
      }), {})
    };
    J((ce) => ({
      ...ce,
      [O]: [...ce[O] || [], re]
    }));
  }, qw = (O, A) => {
    window.confirm("Are you sure you want to delete this sub-row?") && J((M) => ({
      ...M,
      [O]: M[O]?.filter((re) => re.id !== A) || []
    }));
  }, Uw = (O, A) => {
    ee({ subRowId: O, parentId: A });
  }, Yw = (O, A) => {
    O.preventDefault(), se(A);
  }, Gw = (O, A, M) => {
    if (O.preventDefault(), X && X.subRowId !== A && X.parentId === M) {
      const re = $[M] || [], ce = re.findIndex((We) => We.id === X.subRowId), ue = re.findIndex((We) => We.id === A), te = [...re], [ye] = te.splice(ce, 1);
      te.splice(ue, 0, ye), J((We) => ({
        ...We,
        [M]: te
      }));
    }
    ee(null), se(null);
  }, Xw = () => {
    ee(null), se(null);
  }, Zw = (O, A, M, re) => {
    le(!0), Me({ rowId: O, colId: A, value: M, parentId: re }), I(/* @__PURE__ */ new Set([`${O}-${A}`]));
  }, Jw = (O, A, M) => {
    G && K && K.colId === A && K.parentId === M && I((re) => new Set(re).add(`${O}-${A}`));
  }, Qw = () => {
    if (G && K) {
      const O = K.parentId, A = vi(), M = {
        ...$,
        [O]: $[O]?.map((re) => {
          const ce = `${re.id}-${K.colId}`;
          if (me.has(ce)) {
            const ue = { ...re, [K.colId]: K.value };
            return r.forEach((te) => {
              te.type === "lastEditedTime" && (ue[te.id] = A);
            }), ue;
          }
          return re;
        }) || []
      };
      J(M);
    }
    le(!1), Me(null), I(/* @__PURE__ */ new Set());
  }, df = (O, A, M) => {
    if (!A.trim()) return;
    const re = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], ce = re[Math.floor(Math.random() * re.length)];
    n(r.map((ue) => {
      if (ue.id === O && ue.type === "select") {
        const te = ue.options || [];
        if (!te.some((We) => We.value.toLowerCase() === A.toLowerCase()))
          return {
            ...ue,
            options: [...te, { value: A, color: ce }]
          };
      }
      return ue;
    })), Ot(M, O, A), H(null), Te("");
  }, e2 = (O, A) => {
    n(r.map((re) => re.id === O && re.type === "select" ? {
      ...re,
      options: re.options?.filter((ce) => ce.value !== A) || []
    } : re)), o(i.map((re) => re[O] === A ? { ...re, [O]: null } : re));
    const M = { ...$ };
    Object.keys(M).forEach((re) => {
      M[re] = M[re].map((ce) => ce[O] === A ? { ...ce, [O]: null } : ce);
    }), J(M);
  }, t2 = (O, A) => {
    n(r.map(
      (M) => M.id === O ? { ...M, color: A } : M
    )), Gt(null), b(null);
  }, Rr = (O) => {
    const A = O.color || "#f8f9fa", M = nf[O.id] || 150;
    return {
      th: {
        ...He.th,
        backgroundColor: A,
        color: O.color && O.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${M}px`,
        minWidth: `${M}px`,
        maxWidth: `${M}px`
      },
      td: {
        ...He.td,
        backgroundColor: O.color ? `${A}33` : "#ffffff",
        width: `${M}px`,
        minWidth: `${M}px`,
        maxWidth: `${M}px`
      }
    };
  }, r2 = (O, A) => {
    O.preventDefault(), O.stopPropagation(), of(A), Pw(O.clientX), Cw(nf[A] || 150);
  }, ff = (O) => {
    if (!Dr) return;
    const A = O.clientX - af, M = Math.max(50, lf + A);
    Ow((re) => ({ ...re, [Dr]: M }));
  }, pf = () => {
    of(null);
  };
  Se(() => {
    if (Dr)
      return document.addEventListener("mousemove", ff), document.addEventListener("mouseup", pf), () => {
        document.removeEventListener("mousemove", ff), document.removeEventListener("mouseup", pf);
      };
  }, [Dr, af, lf]);
  const Tn = r.filter((O) => !u.has(O.id)), jo = kw.filter((O) => Object.entries(nr).every(([A, M]) => {
    if (!M.trim()) return !0;
    const re = O[A];
    return re == null ? !1 : String(re).toLowerCase().includes(M.toLowerCase());
  })), n2 = (O) => {
    Gr((A) => {
      const M = { ...A };
      return delete M[O], M;
    });
  }, i2 = (O) => sf.key === O ? sf.direction === "ascending" ? "▲" : "▼" : "↕", hf = (O, A, M, re) => {
    const ce = `${M}-${O.id}`, ue = y.has(ce);
    if (re)
      switch (O.type) {
        case "checkbox":
          return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!A, onChange: (te) => Ot(M, O.id, te.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ d.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ d.jsxs(
            "select",
            {
              value: A || "",
              onChange: (te) => {
                te.target.value === "__add_new__" ? (H({ columnId: O.id, rowId: M }), Te("")) : te.target.value === "__manage_options__" ? fe({ columnId: O.id, rowId: M }) : Ot(M, O.id, te.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "", children: "Select..." }),
                O.options?.map((te) => /* @__PURE__ */ d.jsx("option", { value: te.value, children: te.value }, te.value)),
                /* @__PURE__ */ d.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ d.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "createdTime":
        case "lastEditedTime":
          return /* @__PURE__ */ d.jsx("span", { style: { color: "#888" }, children: A });
        case "date":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "date",
              defaultValue: A || "",
              onBlur: (te) => Ot(M, O.id, te.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "button":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "Click me",
              onBlur: (te) => Ot(M, O.id, te.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        case "files":
          return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ d.jsx(
            "button",
            {
              onClick: () => {
                const te = document.createElement("input");
                te.type = "file", te.multiple = !0, te.accept = "image/*,video/*", te.onchange = (ye) => {
                  const be = Array.from(ye.target.files || []).map((Lt) => ({
                    name: Lt.name,
                    url: URL.createObjectURL(Lt),
                    type: Lt.type
                  }));
                  Ot(M, O.id, be);
                }, te.click();
              },
              style: {
                background: "transparent",
                color: "black",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                padding: "4px",
                outline: "none"
              },
              title: "Upload files",
              children: /* @__PURE__ */ d.jsx(Cf, {})
            }
          ) });
        case "number":
          return /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              onBlur: (te) => Ot(M, O.id, te.target.value),
              onKeyPress: (te) => {
                O.name === "Phone" ? (!/[0-9]/.test(te.key) || te.currentTarget.value.replace(/\D/g, "").length >= 10) && te.preventDefault() : /[0-9\-+.,\s]/.test(te.key) || te.preventDefault();
              },
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          ) });
        case "email":
          return /* @__PURE__ */ d.jsxs("div", { children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "email",
                defaultValue: A || "",
                onBlur: (te) => Ot(M, O.id, te.target.value),
                autoFocus: !0,
                style: {
                  width: "100%",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  outline: "none"
                }
              }
            ),
            ue && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "formula":
          return /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              placeholder: "e.g., [Column1] + [Column2] * 2",
              onBlur: (te) => Ot(M, O.id, te.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          ) });
        case "place":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              placeholder: "Enter location",
              onBlur: (te) => Ot(M, O.id, te.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        case "url":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "url",
              defaultValue: A || "",
              placeholder: "Enter URL",
              onBlur: (te) => Ot(M, O.id, te.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        case "action":
          return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => window.print(),
                style: {
                  padding: "4px 6px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                },
                title: "Print",
                children: "🖨️"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => alert(`Viewing row ${M}`),
                style: {
                  padding: "4px 6px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                },
                title: "View",
                children: "👁️"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => alert(`Calling for row ${M}`),
                style: {
                  padding: "4px 6px",
                  backgroundColor: "#17a2b8",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                },
                title: "Call",
                children: "📞"
              }
            )
          ] });
        case "id":
          return /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontFamily: "monospace" }, children: A });
        case "text":
        default:
          return /* @__PURE__ */ d.jsxs("div", { children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "text",
                defaultValue: A || "",
                onBlur: (te) => Ot(M, O.id, te.target.value),
                autoFocus: !0,
                style: {
                  width: "100%",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  outline: "none"
                }
              }
            ),
            ue && O.name === "Email" && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
      }
    if (A == null) return /* @__PURE__ */ d.jsx("span", { style: { color: "#aaa" } });
    switch (O.type) {
      case "checkbox":
        return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!A, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(A).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888" }, children: A });
      case "select":
        const te = O.options?.find((be) => be.value === A);
        return te ? /* @__PURE__ */ d.jsx("span", { style: {
          backgroundColor: te.color + "33",
          color: te.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: A }) : A;
      case "number":
        return /* @__PURE__ */ d.jsx("span", { style: { textAlign: "right", display: "block" }, children: O.name === "Phone" ? A : Number(A).toLocaleString() });
      case "button":
        return /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => alert(`Button clicked in row ${M}!`),
            style: {
              padding: "4px 8px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px"
            },
            children: A || "Click me"
          }
        );
      case "files":
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", maxWidth: "200px", alignItems: "center" }, children: [
          Array.isArray(A) && A.length > 0 ? A.map((be, Lt) => /* @__PURE__ */ d.jsx("div", { style: { position: "relative" }, children: be.type?.startsWith("image/") ? /* @__PURE__ */ d.jsx(
            "img",
            {
              src: be.url,
              alt: be.name,
              style: {
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer"
              },
              onClick: () => window.open(be.url, "_blank"),
              title: be.name
            }
          ) : be.type?.startsWith("video/") ? /* @__PURE__ */ d.jsx(
            "video",
            {
              src: be.url,
              style: {
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer"
              },
              onClick: () => window.open(be.url, "_blank"),
              title: be.name
            }
          ) : /* @__PURE__ */ d.jsx(
            "div",
            {
              style: {
                width: "40px",
                height: "40px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                cursor: "pointer"
              },
              onClick: () => window.open(be.url, "_blank"),
              title: be.name,
              children: "📄"
            }
          ) }, Lt)) : null,
          /* @__PURE__ */ d.jsx(
            Cf,
            {
              style: {
                fontSize: "16px",
                color: "#666",
                cursor: "pointer",
                marginLeft: Array.isArray(A) && A.length > 0 ? "4px" : "0"
              },
              onClick: () => {
                const be = document.createElement("input");
                be.type = "file", be.multiple = !0, be.accept = "image/*,video/*", be.onchange = (Lt) => {
                  const o2 = Array.from(Lt.target.files || []).map((Fl) => ({
                    name: Fl.name,
                    url: URL.createObjectURL(Fl),
                    type: Fl.type
                  })), a2 = Array.isArray(A) ? A : [];
                  Ot(M, O.id, [...a2, ...o2]);
                }, be.click();
              },
              title: "Upload files"
            }
          )
        ] });
      case "email":
        return /* @__PURE__ */ d.jsxs("div", { children: [
          A,
          ue && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const ye = i.find((be) => be.id === M) || Object.values($).flat().find((be) => be.id === M), We = ye ? P2(A, ye, r) : "Error";
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: We }),
          /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: A, children: "Σ" })
        ] });
      case "place":
        return /* @__PURE__ */ d.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              position: "relative",
              cursor: "pointer"
            },
            onMouseEnter: (be) => {
              if (A) {
                const Lt = document.createElement("div");
                Lt.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y931Pk&q=${encodeURIComponent(A)}" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`, Lt.style.cssText = "position: absolute; top: -210px; left: 0; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;", Lt.id = `map-tooltip-${M}-${O.id}`, be.currentTarget.appendChild(Lt);
              }
            },
            onMouseLeave: () => {
              const be = document.getElementById(`map-tooltip-${M}-${O.id}`);
              be && be.remove();
            },
            children: [
              /* @__PURE__ */ d.jsx("span", { style: { marginRight: "4px" }, children: "📍" }),
              /* @__PURE__ */ d.jsx("span", { children: A || "No location" })
            ]
          }
        );
      case "url":
        return A ? /* @__PURE__ */ d.jsx(
          "a",
          {
            href: A.startsWith("http") ? A : `https://${A}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              color: "#007bff",
              textDecoration: "underline",
              cursor: "pointer"
            },
            children: A
          }
        ) : /* @__PURE__ */ d.jsx("span", { style: { color: "#aaa" }, children: "No URL" });
      case "action":
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
          /* @__PURE__ */ d.jsx(
            "button",
            {
              onClick: () => window.print(),
              style: {
                padding: "4px 6px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "10px"
              },
              title: "Print",
              children: "🖨️"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              onClick: () => alert(`Viewing row ${M}`),
              style: {
                padding: "4px 6px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "10px"
              },
              title: "View",
              children: "👁️"
            }
          ),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              onClick: () => alert(`Calling for row ${M}`),
              style: {
                padding: "4px 6px",
                backgroundColor: "#17a2b8",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "10px"
              },
              title: "Call",
              children: "📞"
            }
          )
        ] });
      case "id":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: A });
      case "text":
      default:
        return /* @__PURE__ */ d.jsxs("div", { children: [
          A,
          ue && O.name === "Email" && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
    }
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    U && /* @__PURE__ */ d.jsx("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    }, children: /* @__PURE__ */ d.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ d.jsx(
        "input",
        {
          type: "text",
          value: ve,
          onChange: (O) => Te(O.target.value),
          placeholder: "Enter option name",
          autoFocus: !0,
          style: {
            width: "90%",
            padding: "8px 12px",
            border: "1px solid #e1e5e9",
            borderRadius: "4px",
            fontSize: "14px",
            outline: "none",
            marginBottom: "15px"
          }
        }
      ),
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => {
              H(null), Te("");
            },
            style: {
              padding: "6px 12px",
              border: "1px solid #e1e5e9",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "#ffffffff",
              cursor: "pointer",
              fontSize: "14px"
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => df(U.columnId, ve, U.rowId),
            disabled: !ve.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: ve.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: ve.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    Ce && /* @__PURE__ */ d.jsx("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    }, children: /* @__PURE__ */ d.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px",
      maxHeight: "400px",
      overflowY: "auto"
    }, children: [
      /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Manage Options" }),
      /* @__PURE__ */ d.jsx("div", { style: { marginBottom: "15px" }, children: r.find((O) => O.id === Ce.columnId)?.options?.map((O) => /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "4px",
        backgroundColor: O.color + "33",
        borderRadius: "4px",
        border: `1px solid ${O.color}44`
      }, children: [
        /* @__PURE__ */ d.jsx("span", { style: { color: O.color, fontWeight: "500" }, children: O.value }),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => {
              window.confirm(`Delete option "${O.value}"? This will clear the value from all cells using this option.`) && e2(Ce.columnId, O.value);
            },
            style: {
              background: "none",
              border: "none",
              color: "#ff6b6b",
              cursor: "pointer",
              fontSize: "14px",
              padding: "2px"
            },
            title: "Delete option",
            children: "✕"
          }
        )
      ] }, O.value)) }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => fe(null),
          style: {
            padding: "6px 12px",
            border: "1px solid #e1e5e9",
            borderRadius: "4px",
            backgroundColor: "red",
            color: "#ffffffff",
            cursor: "pointer",
            fontSize: "14px"
          },
          children: "Close"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ d.jsx("style", { children: `
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            opacity: 1;
            width: 16px;
            height: 16px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="%23000000" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>');
            background-repeat: no-repeat;
            background-position:center;
            background-size: 12px 12px;
            outline: none;
            border: none;
           
          }
        
        ` }),
    /* @__PURE__ */ d.jsxs("table", { style: {
      ...He.table,
      backgroundColor: Y ? "#1a1a1a" : "#ffffff",
      color: Y ? "#ffffff" : "#333333",
      border: Y ? "2px solid #333" : "2px solid #e1e5e9"
    }, children: [
      /* @__PURE__ */ d.jsxs("thead", { children: [
        /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: {
            ...He.th,
            width: "40px",
            backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
            borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9"
          } }),
          Tn.map((O) => {
            const A = s === O.id;
            return /* @__PURE__ */ d.jsxs(
              "th",
              {
                draggable: !Dr,
                onDragStart: () => !Dr && $w(O.id),
                onDragOver: (M) => zw(M, O.id),
                onDrop: (M) => Lw(M, O.id),
                onDragEnd: Bw,
                style: {
                  ...Rr(O).th,
                  position: "relative",
                  backgroundColor: F === O.id ? Y ? "#444" : "#e3f2fd" : Y ? "#2a2a2a" : Rr(O).th.backgroundColor,
                  color: Y ? "#ffffff" : Rr(O).th.color,
                  borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
                  borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
                  opacity: k === O.id ? 0.5 : 1,
                  cursor: Dr ? "col-resize" : "move"
                },
                title: `Sort by ${O.name}`,
                children: [
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (M) => {
                        M.stopPropagation(), M.detail === 1 ? (v(!1), h(!1), b(w === O.id ? null : O.id)) : M.detail === 2 && (c(O.id), b(null));
                      },
                      children: A ? /* @__PURE__ */ d.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: O.name,
                          onBlur: (M) => Tw(O.id, M.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                        /* @__PURE__ */ d.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: O.name }),
                        /* @__PURE__ */ d.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (M) => {
                              M.stopPropagation(), _w(O.id);
                            },
                            children: i2(O.id)
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      onMouseDown: (M) => r2(M, O.id),
                      style: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "4px",
                        height: "100%",
                        cursor: "col-resize",
                        backgroundColor: "transparent",
                        zIndex: 10
                      },
                      onMouseEnter: (M) => {
                        Dr || (M.currentTarget.style.backgroundColor = Y ? "#666" : "#ccc");
                      },
                      onMouseLeave: (M) => {
                        M.currentTarget.style.backgroundColor = "transparent";
                      }
                    }
                  ),
                  w === O.id && /* @__PURE__ */ d.jsxs("div", { style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e1e5e9",
                    borderRadius: "4px",
                    padding: "4px",
                    zIndex: 1e3,
                    minWidth: "120px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }, children: [
                    /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (M) => {
                          M.stopPropagation(), fi(di === O.id ? null : O.id);
                        },
                        children: [
                          "Filter",
                          di === O.id && /* @__PURE__ */ d.jsxs("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e1e5e9",
                            borderRadius: "4px",
                            padding: "8px",
                            minWidth: "200px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            zIndex: 1001
                          }, children: [
                            /* @__PURE__ */ d.jsx(
                              "input",
                              {
                                type: "text",
                                placeholder: `Filter ${O.name}...`,
                                value: nr[O.id] || "",
                                onChange: (M) => {
                                  Gr((re) => ({
                                    ...re,
                                    [O.id]: M.target.value
                                  }));
                                },
                                style: {
                                  width: "90%",
                                  padding: "6px 8px",
                                  border: "1px solid #e1e5e9",
                                  borderRadius: "4px",
                                  fontSize: "14px",
                                  outline: "none"
                                },
                                autoFocus: !0
                              }
                            ),
                            nr[O.id] && /* @__PURE__ */ d.jsx(
                              "button",
                              {
                                onClick: (M) => {
                                  M.stopPropagation(), n2(O.id);
                                },
                                style: {
                                  marginTop: "8px",
                                  padding: "4px 8px",
                                  backgroundColor: "#ff6b6b",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                  fontSize: "12px"
                                },
                                children: "Clear Filter"
                              }
                            )
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (M) => {
                          M.stopPropagation(), Mw(O.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (M) => {
                          M.stopPropagation(), cf(O.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (M) => {
                          M.stopPropagation(), Iw(O.id);
                        },
                        children: "Delete"
                      }
                    ),
                    /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333", position: "relative" },
                        onClick: (M) => {
                          M.stopPropagation(), Gt(yt === O.id ? null : O.id);
                        },
                        children: [
                          "Column Color",
                          yt === O.id && /* @__PURE__ */ d.jsx("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e1e5e9",
                            borderRadius: "4px",
                            padding: "8px",
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: "4px",
                            minWidth: "120px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          }, children: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd", "#f8f9fa"].map((M) => /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              onClick: (re) => {
                                re.stopPropagation(), t2(O.id, M);
                              },
                              style: {
                                width: "20px",
                                height: "20px",
                                backgroundColor: M,
                                borderRadius: "3px",
                                cursor: "pointer",
                                border: O.color === M ? "2px solid #333" : "1px solid #ddd"
                              }
                            },
                            M
                          )) })
                        ]
                      }
                    )
                  ] })
                ]
              },
              O.id
            );
          }),
          /* @__PURE__ */ d.jsxs(
            "th",
            {
              style: {
                ...He.th,
                color: Y ? "#888" : "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px",
                backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
                borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9"
              },
              children: [
                /* @__PURE__ */ d.jsx("button", { onClick: (O) => {
                  O.stopPropagation(), b(null), h(!1), v(!g);
                }, title: "Add column", style: { ...He.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ d.jsx("button", { onClick: (O) => {
                  O.stopPropagation(), b(null), v(!1), h(!p);
                }, style: { ...He.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ d.jsxs("div", { onClick: (O) => O.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: Y ? "#2a2a2a" : "#ffffff",
                  border: Y ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "180px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ d.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: x,
                      onChange: (O) => j(O.target.value),
                      style: {
                        width: "90%",
                        padding: "6px 8px",
                        marginBottom: "8px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        color: "#333333",
                        fontSize: "14px"
                      }
                    }
                  ),
                  /* @__PURE__ */ d.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("text"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("number"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("select"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("checkbox"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("date"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("number", "Phone"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📞" }),
                    " Phone"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("email"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("place", "Place"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📍" }),
                    " Place"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("url", "URL"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🔗" }),
                    " URL"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("formula", "Formula"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("button", "Button"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🖱️" }),
                    " Button"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("files", "Files"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📎" }),
                    " Files"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("id", "ID"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("action", "Action"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "⚡" }),
                    " Action"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("createdTime", "Created time"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ft("lastEditedTime", "Last edited time"), onMouseEnter: (O) => O.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ d.jsxs("div", { onClick: (O) => O.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: Y ? "#2a2a2a" : "#ffffff",
                  border: Y ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 0", borderBottom: "1px solid #e1e5e9", marginBottom: "8px" }, children: [
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
                      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666" }, children: "Dark Mode" }),
                      /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: () => Sw(!Y),
                          style: {
                            width: "40px",
                            height: "20px",
                            borderRadius: "10px",
                            backgroundColor: Y ? "#007bff" : "#ccc",
                            position: "relative",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                          },
                          children: /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              style: {
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                position: "absolute",
                                top: "2px",
                                left: Y ? "22px" : "2px",
                                transition: "left 0.3s"
                              }
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666", marginBottom: "4px" }, children: "Row Colors" }),
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", position: "relative" }, children: [
                      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Odd:" }),
                      /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (O) => {
                            O.stopPropagation(), bo(!tf), wo(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: Xr,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      tf && /* @__PURE__ */ d.jsx("div", { style: {
                        position: "absolute",
                        top: "25px",
                        left: "50px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        padding: "8px",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "4px",
                        minWidth: "120px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 1002
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((O) => /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (A) => {
                            A.stopPropagation(), xo(O), bo(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: O,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: Xr === O ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        O
                      )) })
                    ] }),
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", position: "relative" }, children: [
                      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Even:" }),
                      /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (O) => {
                            O.stopPropagation(), wo(!rf), bo(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: An,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      rf && /* @__PURE__ */ d.jsx("div", { style: {
                        position: "absolute",
                        top: "25px",
                        left: "50px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        padding: "8px",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "4px",
                        minWidth: "120px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 1002
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((O) => /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (A) => {
                            A.stopPropagation(), Wl(O), wo(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: O,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: An === O ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        O
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { borderTop: "1px solid #e1e5e9", marginTop: "8px", paddingTop: "8px" }, children: [
                    /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666", marginBottom: "8px", fontWeight: "500" }, children: "Active Users" }),
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
                      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px", backgroundColor: Y ? "#333" : "#f8f9fa" }, children: [
                        /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28a745" } }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: Y ? "#fff" : "#333" }, children: "Current User" }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "10px", color: Y ? "#888" : "#666", marginLeft: "auto" }, children: "Online" })
                      ] }),
                      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc3545" } }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: Y ? "#fff" : "#333" }, children: "Admin" }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "10px", color: Y ? "#888" : "#666", marginLeft: "auto" }, children: "Away" })
                      ] }),
                      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6c757d" } }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: Y ? "#fff" : "#333" }, children: "Guest" }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "10px", color: Y ? "#888" : "#666", marginLeft: "auto" }, children: "Offline" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((O) => /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      style: {
                        padding: "4px 8px",
                        cursor: "pointer",
                        color: Y ? "#ffffff" : "#333333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "13px"
                      },
                      onClick: () => cf(O.id),
                      children: [
                        /* @__PURE__ */ d.jsx("span", { children: O.name }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px" }, children: u.has(O.id) ? /* @__PURE__ */ d.jsx(K0, {}) : /* @__PURE__ */ d.jsx(H0, {}) })
                      ]
                    },
                    O.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: {
            ...He.th,
            width: "40px",
            backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
            borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } }),
          Tn.map((O) => /* @__PURE__ */ d.jsx(
            "th",
            {
              style: {
                ...Rr(O).th,
                backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
                color: Y ? "#ffffff" : "#666666",
                borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: nr[O.id] || "",
                  onChange: (A) => {
                    Gr((M) => ({
                      ...M,
                      [O.id]: A.target.value
                    }));
                  },
                  style: {
                    width: "90%",
                    padding: "4px 6px",
                    border: Y ? "1px solid #444" : "1px solid #e1e5e9",
                    borderRadius: "4px",
                    fontSize: "12px",
                    outline: "none",
                    backgroundColor: Y ? "#1a1a1a" : "#ffffff",
                    color: Y ? "#ffffff" : "#333333"
                  },
                  onClick: (A) => A.stopPropagation()
                }
              )
            },
            `search-${O.id}`
          )),
          /* @__PURE__ */ d.jsx("th", { style: {
            ...He.th,
            backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
            borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("tbody", { children: [
        jo.map((O) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
          /* @__PURE__ */ d.jsxs(
            "tr",
            {
              draggable: !0,
              onDragStart: () => Ww(O.id),
              onDragOver: (A) => Fw(A, O.id),
              onDrop: (A) => Vw(A, O.id),
              onDragEnd: Kw,
              style: {
                ...He.tr,
                backgroundColor: z === O.id ? Y ? "#444" : "#e3f2fd" : Y ? jo.indexOf(O) % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : jo.indexOf(O) % 2 === 0 ? An : Xr,
                opacity: q === O.id ? 0.5 : 1,
                cursor: "move"
              },
              onMouseEnter: (A) => {
                !q && !Y && (A.currentTarget.style.backgroundColor = He.trHover.backgroundColor);
              },
              onMouseLeave: (A) => {
                if (!q) {
                  const M = jo.indexOf(O), re = Y ? M % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : M % 2 === 0 ? An : Xr;
                  A.currentTarget.style.backgroundColor = z === O.id ? Y ? "#444" : "#e3f2fd" : re;
                }
              },
              children: [
                /* @__PURE__ */ d.jsx("td", { style: {
                  ...He.td,
                  textAlign: "center",
                  color: Y ? "#888" : "#aaa",
                  backgroundColor: "inherit",
                  border: Y ? "1px solid #444" : "1px solid #cececeff"
                }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                  /* @__PURE__ */ d.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: Y ? "#888" : "#999" }, children: "⋮⋮" }),
                  /* @__PURE__ */ d.jsx("button", { onClick: (A) => {
                    A.stopPropagation(), Aw(O.id);
                  }, style: { ...He.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ d.jsx(Mi, {}) }),
                  /* @__PURE__ */ d.jsx("button", { onClick: (A) => {
                    A.stopPropagation(), Hw(O.id);
                  }, style: { ...He.button, cursor: "pointer", color: "#242424ff", backgroundColor: "transparent", fontSize: "12px" }, title: "Toggle sub-rows", children: V.has(O.id) ? /* @__PURE__ */ d.jsx(j2, {}) : /* @__PURE__ */ d.jsx(S2, {}) })
                ] }) }),
                Tn.map((A) => {
                  const M = a?.rowId === O.id && a?.colId === A.id, re = `${O.id}-${A.id}`, ce = T.has(re);
                  return /* @__PURE__ */ d.jsx(
                    "td",
                    {
                      style: {
                        ...Rr(A).td,
                        backgroundColor: ce ? Y ? "#444" : "#f0f0f0" : de?.rowId === O.id && de?.colId === A.id ? Y ? "#444" : "#e3f2fd" : A.color ? Rr(A).td.backgroundColor : "inherit",
                        color: Y ? "#ffffff" : "#333333",
                        border: de?.rowId === O.id && de?.colId === A.id ? "2px dashed #007bff" : Y ? "1px solid #444" : "1px solid #cececeff",
                        userSelect: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      onClick: (ue) => {
                        ue.stopPropagation(), l({ rowId: O.id, colId: A.id });
                      },
                      draggable: !M,
                      onDragStart: (ue) => {
                        ue.stopPropagation(), Dw(O.id, A.id, O[A.id]);
                      },
                      onDragEnter: (ue) => {
                        ue.stopPropagation(), Rw(O.id, A.id);
                      },
                      onDragEnd: (ue) => {
                        ue.stopPropagation(), Nw();
                      },
                      onDragOver: (ue) => {
                        ue.preventDefault(), ue.stopPropagation();
                      },
                      children: hf(A, O[A.id], O.id, M)
                    },
                    A.id
                  );
                }),
                /* @__PURE__ */ d.jsx("td", { style: {
                  ...He.td,
                  backgroundColor: "inherit",
                  border: Y ? "1px solid #444" : "1px solid #cececeff"
                } })
              ]
            }
          ),
          V.has(O.id) && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            $[O.id]?.map((A) => /* @__PURE__ */ d.jsxs(
              "tr",
              {
                draggable: !0,
                onDragStart: () => Uw(A.id, O.id),
                onDragOver: (M) => Yw(M, A.id),
                onDrop: (M) => Gw(M, A.id, O.id),
                onDragEnd: Xw,
                style: {
                  ...He.tr,
                  backgroundColor: he === A.id ? "#d1ecf1" : "#e9ecef",
                  opacity: X?.subRowId === A.id ? 0.5 : 1,
                  cursor: "move"
                },
                children: [
                  /* @__PURE__ */ d.jsx("td", { style: { ...He.td, textAlign: "center", color: "#aaa", backgroundColor: "#e9ecef" }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", paddingLeft: "20px" }, children: [
                    /* @__PURE__ */ d.jsx("span", { style: { cursor: "grab", fontSize: "10px", color: "#999" }, children: "⋮⋮" }),
                    /* @__PURE__ */ d.jsx("button", { onClick: (M) => {
                      M.stopPropagation(), qw(O.id, A.id);
                    }, style: { ...He.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff", fontSize: "10px" }, title: "Delete sub-row", children: /* @__PURE__ */ d.jsx(Mi, {}) })
                  ] }) }),
                  Tn.map((M) => {
                    const re = a?.rowId === A.id && a?.colId === M.id;
                    return /* @__PURE__ */ d.jsx(
                      "td",
                      {
                        style: {
                          ...Rr(M).td,
                          backgroundColor: me.has(`${A.id}-${M.id}`) ? "#f0f0f0" : de?.rowId === A.id && de?.colId === M.id ? "#e3f2fd" : M.color ? `${M.color}22` : "#ecececff",
                          border: de?.rowId === A.id && de?.colId === M.id ? "2px dashed #007bff" : Rr(M).td.border,
                          userSelect: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        onClick: (ce) => {
                          ce.stopPropagation(), l({ rowId: A.id, colId: M.id });
                        },
                        draggable: !re,
                        onDragStart: (ce) => {
                          ce.stopPropagation(), Zw(A.id, M.id, A[M.id], O.id);
                        },
                        onDragEnter: (ce) => {
                          ce.stopPropagation(), Jw(A.id, M.id, O.id);
                        },
                        onDragEnd: (ce) => {
                          ce.stopPropagation(), Qw();
                        },
                        onDragOver: (ce) => {
                          ce.preventDefault(), ce.stopPropagation();
                        },
                        children: hf(M, A[M.id], A.id, re)
                      },
                      M.id
                    );
                  }),
                  /* @__PURE__ */ d.jsx("td", { style: { ...He.td, backgroundColor: "#e9ecef" } })
                ]
              },
              A.id
            )),
            /* @__PURE__ */ d.jsx("tr", { style: { backgroundColor: "#b7b8b9ff" }, children: /* @__PURE__ */ d.jsx("td", { colSpan: Tn.length + 2, style: { ...He.td, textAlign: "center", color: "#ffffffff", cursor: "pointer", backgroundColor: "#5b5b5bff", paddingLeft: "20px" }, onClick: () => uf(O.id), children: "+ Add Sub Row" }) })
          ] })
        ] }, O.id)),
        /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: Tn.length + 2, style: {
          ...He.td,
          textAlign: "center",
          color: Y ? "#888" : "#aaa",
          cursor: "pointer",
          backgroundColor: "inherit",
          border: Y ? "1px solid #444" : "1px solid #cececeff"
        }, onClick: Ew, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
};
function _f(e) {
  return Ue({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z" }, child: [] }] })(e);
}
function C2(e) {
  return Ue({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" }, child: [] }] })(e);
}
function Ef(e) {
  return Ue({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z" }, child: [] }] })(e);
}
function k2(e) {
  return Ue({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" }, child: [] }] })(e);
}
const LN = ({ columns: e, initialData: t }) => {
  const [r] = B(t), [n, i] = B("table"), [o, a] = B(!1), [l, s] = B(!1), [c, u] = B(null), [f] = B({}), [p, h] = B(null), [g, v] = B(!0), [y, m] = B(!0), [w, b] = B("Date"), [x, j] = B("Month"), [S, C] = B(!0), [_, E] = B("Center peek"), T = r;
  Se(() => {
    const $ = () => {
      a(!1), h(null);
    }, J = (X) => {
      X.key === "Escape" && (X.preventDefault(), h(null), u(null));
    };
    return document.addEventListener("click", $), document.addEventListener("keydown", J), () => {
      document.removeEventListener("click", $), document.removeEventListener("keydown", J);
    };
  }, [c, p, r, f]);
  const D = ($) => {
    switch ($) {
      case "table":
        return /* @__PURE__ */ d.jsx(Vl, {});
      case "board":
        return /* @__PURE__ */ d.jsx(Pf, {});
      case "timeline":
        return /* @__PURE__ */ d.jsx(_f, {});
      case "calendar":
        return /* @__PURE__ */ d.jsx(bf, {});
      case "list":
        return /* @__PURE__ */ d.jsx(jf, {});
      case "gallery":
        return /* @__PURE__ */ d.jsx(Ef, {});
      case "chart":
        return /* @__PURE__ */ d.jsx(wf, {});
      case "feed":
        return /* @__PURE__ */ d.jsx(Of, {});
      case "map":
        return /* @__PURE__ */ d.jsx(Sf, {});
      default:
        return /* @__PURE__ */ d.jsx(Vl, {});
    }
  }, k = () => /* @__PURE__ */ d.jsxs("div", { style: {
    position: "relative",
    display: "inline-block",
    marginBottom: "16px"
  }, children: [
    /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: ($) => {
          $.stopPropagation(), a(!o);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 12px",
          backgroundColor: l ? "#2a2a2a" : "#ffffff",
          border: l ? "1px solid #444" : "1px solid #e1e5e9",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          color: l ? "#ffffff" : "#333333",
          outline: "none"
        },
        children: [
          D(n),
          /* @__PURE__ */ d.jsx("span", { style: { textTransform: "capitalize" }, children: n }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px" }, children: "▼" })
        ]
      }
    ),
    o && /* @__PURE__ */ d.jsxs("div", { style: {
      position: "absolute",
      top: "100%",
      left: 0,
      backgroundColor: l ? "#2a2a2a" : "#ffffff",
      border: l ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "8px",
      zIndex: 1e3,
      minWidth: "300px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      marginTop: "4px"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        padding: "4px 0",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        marginBottom: "8px"
      }, children: /* @__PURE__ */ d.jsx("span", { style: {
        fontSize: "12px",
        color: l ? "#888" : "#666",
        fontWeight: "500",
        paddingLeft: "8px"
      }, children: "Layout" }) }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }, children: [
        { type: "table", label: "Table", icon: /* @__PURE__ */ d.jsx(Vl, {}) },
        { type: "board", label: "Board", icon: /* @__PURE__ */ d.jsx(Pf, {}) },
        { type: "timeline", label: "Timeline", icon: /* @__PURE__ */ d.jsx(_f, {}) },
        { type: "calendar", label: "Calendar", icon: /* @__PURE__ */ d.jsx(bf, {}) },
        { type: "list", label: "List", icon: /* @__PURE__ */ d.jsx(jf, {}) },
        { type: "gallery", label: "Gallery", icon: /* @__PURE__ */ d.jsx(Ef, {}) },
        { type: "chart", label: "Chart", icon: /* @__PURE__ */ d.jsx(wf, {}) },
        { type: "feed", label: "Feed", icon: /* @__PURE__ */ d.jsx(Of, {}) },
        { type: "map", label: "Map", icon: /* @__PURE__ */ d.jsx(Sf, {}) }
      ].map(({ type: $, label: J, icon: X }) => /* @__PURE__ */ d.jsxs(
        "div",
        {
          onClick: () => {
            i($), a(!1);
          },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "12px 8px",
            cursor: "pointer",
            borderRadius: "6px",
            backgroundColor: n === $ ? l ? "#444" : "#e3f2fd" : "transparent",
            color: l ? "#ffffff" : "#333333",
            fontSize: "12px",
            border: n === $ ? "2px solid #007bff" : "1px solid transparent"
          },
          onMouseEnter: (ee) => {
            n !== $ && (ee.currentTarget.style.backgroundColor = l ? "#333" : "#f5f5f5");
          },
          onMouseLeave: (ee) => {
            n !== $ && (ee.currentTarget.style.backgroundColor = "transparent");
          },
          children: [
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: "18px" }, children: X }),
            /* @__PURE__ */ d.jsx("span", { children: J })
          ]
        },
        $
      )) }),
      /* @__PURE__ */ d.jsx("div", { style: { borderTop: l ? "1px solid #444" : "1px solid #e1e5e9", paddingTop: "12px" }, children: /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show page icon" }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              onClick: () => v(!g),
              style: {
                width: "40px",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: g ? "#007bff" : "#ccc",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.3s"
              },
              children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: g ? "22px" : "2px",
                    transition: "left 0.3s"
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Wrap page titles" }),
          /* @__PURE__ */ d.jsx(
            "div",
            {
              onClick: () => m(!y),
              style: {
                width: "40px",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: y ? "#007bff" : "#ccc",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.3s"
              },
              children: /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: y ? "22px" : "2px",
                    transition: "left 0.3s"
                  }
                }
              )
            }
          )
        ] }),
        n === "calendar" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show calendar by" }),
            /* @__PURE__ */ d.jsxs(
              "select",
              {
                value: w,
                onChange: ($) => b($.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: l ? "#333" : "#fff",
                  color: l ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ d.jsx("option", { value: "Date", children: "Date" }),
                  /* @__PURE__ */ d.jsx("option", { value: "Created", children: "Created" }),
                  /* @__PURE__ */ d.jsx("option", { value: "Modified", children: "Modified" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show calendar as" }),
            /* @__PURE__ */ d.jsxs(
              "select",
              {
                value: x,
                onChange: ($) => j($.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: l ? "#333" : "#fff",
                  color: l ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ d.jsx("option", { value: "Month", children: "Month" }),
                  /* @__PURE__ */ d.jsx("option", { value: "Week", children: "Week" }),
                  /* @__PURE__ */ d.jsx("option", { value: "Day", children: "Day" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show weekends" }),
            /* @__PURE__ */ d.jsx(
              "div",
              {
                onClick: () => C(!S),
                style: {
                  width: "40px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: S ? "#007bff" : "#ccc",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background-color 0.3s"
                },
                children: /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    style: {
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "2px",
                      left: S ? "22px" : "2px",
                      transition: "left 0.3s"
                    }
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Open pages in" }),
          /* @__PURE__ */ d.jsxs(
            "select",
            {
              value: _,
              onChange: ($) => E($.target.value),
              style: {
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: l ? "#333" : "#fff",
                color: l ? "#fff" : "#333"
              },
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "Center peek", children: "Center peek" }),
                /* @__PURE__ */ d.jsx("option", { value: "Side peek", children: "Side peek" }),
                /* @__PURE__ */ d.jsx("option", { value: "Full page", children: "Full page" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] }), W = () => {
    const $ = e.find((he) => he.type === "select") || e[0], J = $?.options || [{ value: "Default", color: "#007bff" }], X = e.length, ee = Math.max(280, X * 40);
    return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: "16px", overflowX: "auto", padding: "16px", minHeight: "400px" }, children: J.map((he) => /* @__PURE__ */ d.jsxs("div", { style: {
      flex: `1 1 ${ee}px`,
      minWidth: `${ee}px`,
      maxWidth: `${Math.max(400, X * 60)}px`,
      backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
      borderRadius: "8px",
      padding: "16px"
    }, children: [
      /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", color: l ? "#ffffff" : "#333333" }, children: he.value }),
      T.filter((se) => se[$?.id || ""] === he.value).map((se) => /* @__PURE__ */ d.jsx("div", { style: {
        backgroundColor: l ? "#1a1a1a" : "#ffffff",
        border: l ? "1px solid #444" : "1px solid #e1e5e9",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "8px",
        color: l ? "#ffffff" : "#333333",
        minHeight: Math.max(80, X * 20),
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }, children: e.map((de) => {
        const Q = se[de.id];
        return !Q || de.id === $?.id ? null : /* @__PURE__ */ d.jsxs("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          alignItems: "center",
          minHeight: "20px"
        }, children: [
          /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "60px" }, children: [
            de.name,
            ":"
          ] }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", flex: "1" }, children: String(Q) })
        ] }, de.id);
      }) }, se.id))
    ] }, he.value)) });
  }, F = () => {
    const $ = e.length, J = Math.max(120, 800 / $);
    return /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", overflowX: "auto" }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${J}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "2px solid #444" : "2px solid #e1e5e9",
        fontWeight: "600",
        backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${$ * J}px`
      }, children: e.map((X) => /* @__PURE__ */ d.jsx("div", { style: { fontSize: "14px", minWidth: `${J}px` }, children: X.name }, X.id)) }),
      T.map((X) => /* @__PURE__ */ d.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${J}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${$ * J}px`
      }, children: e.map((ee) => /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", minWidth: `${J}px` }, children: X[ee.id] ? String(X[ee.id]) : "-" }, ee.id)) }, X.id))
    ] });
  }, Z = () => {
    const $ = /* @__PURE__ */ new Date(), J = $.getFullYear(), X = $.getMonth(), ee = new Date(J, X, 1), se = new Date(J, X + 1, 0).getDate(), de = ee.getDay(), Q = [
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
      "December"
    ], G = [];
    for (let le = 0; le < de; le++)
      G.push(/* @__PURE__ */ d.jsx("div", { style: { padding: "8px" } }, `empty-${le}`));
    for (let le = 1; le <= se; le++) {
      const K = new Date(J, X, le).getDay() === 0 || new Date(J, X, le).getDay() === 6;
      G.push(
        /* @__PURE__ */ d.jsx("div", { style: {
          padding: "8px",
          border: l ? "1px solid #444" : "1px solid #e1e5e9",
          minHeight: "80px",
          backgroundColor: K && !S ? "#f5f5f5" : "transparent",
          color: l ? "#ffffff" : "#333333"
        }, children: /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "500", marginBottom: "4px" }, children: le }) }, le)
      );
    }
    return /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px" }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        fontSize: "18px",
        fontWeight: "600",
        color: l ? "#ffffff" : "#333333"
      }, children: [
        Q[X],
        " ",
        J
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "1px",
        backgroundColor: l ? "#444" : "#e1e5e9"
      }, children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((le) => /* @__PURE__ */ d.jsx("div", { style: {
          padding: "8px",
          textAlign: "center",
          fontWeight: "600",
          backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
          color: l ? "#ffffff" : "#333333"
        }, children: le }, le)),
        G
      ] })
    ] });
  }, q = () => /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px" }, children: [
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Timeline View" }),
    T.map(($) => /* @__PURE__ */ d.jsxs("div", { style: {
      display: "flex",
      gap: "16px",
      padding: "12px 0",
      borderLeft: l ? "2px solid #444" : "2px solid #e1e5e9",
      paddingLeft: "16px",
      marginLeft: "8px",
      position: "relative"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        position: "absolute",
        left: "-6px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: l ? "#666" : "#007bff"
      } }),
      /* @__PURE__ */ d.jsx("div", { style: { flex: 1, color: l ? "#ffffff" : "#333333" }, children: e.map((J) => {
        const X = $[J.id];
        return X ? /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: "4px" }, children: [
          /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: [
            J.name,
            ":"
          ] }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px" }, children: String(X) })
        ] }, J.id) : null;
      }) })
    ] }, $.id))
  ] }), ie = () => {
    const $ = e.length, J = Math.max(280, $ * 35);
    return /* @__PURE__ */ d.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${J}px, 1fr))`,
      gap: "16px",
      padding: "16px"
    }, children: T.map((X) => /* @__PURE__ */ d.jsx("div", { style: {
      backgroundColor: l ? "#2a2a2a" : "#ffffff",
      border: l ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "16px",
      color: l ? "#ffffff" : "#333333",
      minHeight: Math.max(200, $ * 25),
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }, children: e.map((ee) => {
      const he = X[ee.id];
      return he ? /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        minHeight: "24px"
      }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: ee.name }),
        /* @__PURE__ */ d.jsx("div", { style: { fontSize: "14px", wordBreak: "break-word", flex: "1" }, children: String(he) })
      ] }, ee.id) : null;
    }) }, X.id)) });
  }, z = () => /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Chart View" }),
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Chart view would display data visualizations. This is a placeholder for chart implementation." })
  ] }), L = () => /* @__PURE__ */ d.jsx("div", { style: { padding: "16px" }, children: T.map(($) => /* @__PURE__ */ d.jsxs("div", { style: {
    backgroundColor: l ? "#2a2a2a" : "#ffffff",
    border: l ? "1px solid #444" : "1px solid #e1e5e9",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    color: l ? "#ffffff" : "#333333"
  }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: l ? "#444" : "#e1e5e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px"
      }, children: "📝" }),
      /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "600", fontSize: "16px", marginBottom: "4px" }, children: $[e[0]?.id] || "Untitled" }),
        /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: l ? "#888" : "#666" }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "grid", gap: "8px" }, children: e.slice(1).map((J) => {
      const X = $[J.id];
      return X ? /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "80px" }, children: [
          J.name,
          ":"
        ] }),
        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", flex: 1 }, children: String(X) })
      ] }, J.id) : null;
    }) })
  ] }, $.id)) }), V = () => /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Map View" }),
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Map view would show location-based data. This is a placeholder for map implementation." })
  ] }), N = () => {
    switch (n) {
      case "table":
        return /* @__PURE__ */ d.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ d.jsx(kf, { columns: e, initialData: r }) });
      case "board":
        return W();
      case "timeline":
        return q();
      case "calendar":
        return Z();
      case "list":
        return F();
      case "gallery":
        return ie();
      case "chart":
        return z();
      case "feed":
        return L();
      case "map":
        return V();
      default:
        return /* @__PURE__ */ d.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ d.jsx(kf, { columns: e, initialData: r }) });
    }
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("style", { children: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        ` }),
    /* @__PURE__ */ d.jsxs("div", { style: {
      backgroundColor: l ? "#1a1a1a" : "#ffffff",
      color: l ? "#ffffff" : "#333333",
      padding: "20px",
      width: "100%",
      minHeight: "100vh",
      boxSizing: "border-box",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "10px"
      }, children: [
        k(),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => s(!l),
            style: {
              padding: "8px 12px",
              backgroundColor: l ? "#444" : "#f8f9fa",
              border: l ? "1px solid #666" : "1px solid #e1e5e9",
              borderRadius: "6px",
              color: l ? "#ffffff" : "#333333",
              cursor: "pointer",
              flexShrink: 0
            },
            children: l ? "☀️" : "🌙"
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { width: "100%", overflow: "hidden" }, children: N() })
    ] })
  ] });
}, BN = ({
  initialRows: e = 3,
  initialCols: t = 4,
  rows: r,
  cols: n
}) => {
  const [i, o] = B(r || e), [a, l] = B(n || t), [s, c] = B({}), [u, f] = B(null), [p, h] = B(null), [g, v] = B(null), y = (k, W) => `${k}-${W}`, m = (k, W) => s[y(k, W)] || "", w = (k, W, F) => {
    c((Z) => ({ ...Z, [y(k, W)]: F }));
  }, b = () => o((k) => k + 1), x = () => l((k) => k + 1), j = () => i > 1 && o((k) => k - 1), S = () => a > 1 && l((k) => k - 1), C = (k, W) => {
    f({ row: k, col: W });
  }, _ = (k, W) => {
    h({ row: k, col: W });
  }, E = () => {
    h(null);
  }, T = (k) => {
    k.key === "Enter" && h(null);
  }, D = (k, W) => {
    const F = p?.row === k && p?.col === W, Z = m(k, W);
    return F ? /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: Z,
        onChange: (q) => w(k, W, q.target.value),
        onBlur: E,
        onKeyDown: T,
        autoFocus: !0,
        style: {
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "14px",
          padding: "8px",
          textAlign: "center"
        }
      }
    ) : /* @__PURE__ */ d.jsx(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          fontSize: "14px",
          color: Z ? "#1a1a1a" : "#9ca3af",
          cursor: "pointer",
          position: "relative",
          minHeight: "60px"
        },
        children: Z || /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ d.jsx(b2, { size: 10, style: { opacity: 0.5 } }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px" }, children: "Click to edit" })
        ] })
      }
    );
  };
  return /* @__PURE__ */ d.jsxs("div", { style: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "24px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0"
    }, children: [
      /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: b,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (k) => k.currentTarget.style.backgroundColor = "#2563eb",
          onMouseLeave: (k) => k.currentTarget.style.backgroundColor = "#3b82f6",
          children: [
            /* @__PURE__ */ d.jsx(k2, { size: 14 }),
            "Add Row"
          ]
        }
      ),
      /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: x,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (k) => k.currentTarget.style.backgroundColor = "#059669",
          onMouseLeave: (k) => k.currentTarget.style.backgroundColor = "#10b981",
          children: [
            /* @__PURE__ */ d.jsx(C2, { size: 14 }),
            "Add Column"
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { style: { width: "1px", height: "24px", backgroundColor: "#e2e8f0" } }),
      /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: j,
          disabled: i <= 1,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: i <= 1 ? "#f1f5f9" : "#ef4444",
            color: i <= 1 ? "#94a3b8" : "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: i <= 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (k) => {
            i > 1 && (k.currentTarget.style.backgroundColor = "#dc2626");
          },
          onMouseLeave: (k) => {
            i > 1 && (k.currentTarget.style.backgroundColor = "#ef4444");
          },
          children: [
            /* @__PURE__ */ d.jsx(Mi, { size: 12 }),
            "Delete Row"
          ]
        }
      ),
      /* @__PURE__ */ d.jsxs(
        "button",
        {
          onClick: S,
          disabled: a <= 1,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: a <= 1 ? "#f1f5f9" : "#ef4444",
            color: a <= 1 ? "#94a3b8" : "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: a <= 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (k) => {
            a > 1 && (k.currentTarget.style.backgroundColor = "#dc2626");
          },
          onMouseLeave: (k) => {
            a > 1 && (k.currentTarget.style.backgroundColor = "#ef4444");
          },
          children: [
            /* @__PURE__ */ d.jsx(Mi, { size: 12 }),
            "Delete Column"
          ]
        }
      ),
      /* @__PURE__ */ d.jsxs("div", { style: { marginLeft: "auto", fontSize: "13px", color: "#64748b" }, children: [
        i,
        " × ",
        a,
        " grid"
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${a}, 1fr)`,
      gap: "2px",
      backgroundColor: "#e2e8f0",
      borderRadius: "8px",
      padding: "2px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    }, children: Array.from({ length: i * a }, (k, W) => {
      const F = Math.floor(W / a), Z = W % a, q = u?.row === F && u?.col === Z, ie = g?.row === F && g?.col === Z;
      return /* @__PURE__ */ d.jsx(
        "div",
        {
          onClick: () => C(F, Z),
          onDoubleClick: () => _(F, Z),
          onMouseEnter: () => v({ row: F, col: Z }),
          onMouseLeave: () => v(null),
          style: {
            backgroundColor: q ? "#dbeafe" : ie ? "#f1f5f9" : "#ffffff",
            borderRadius: "6px",
            border: q ? "2px solid #3b82f6" : "2px solid transparent",
            transition: "all 0.2s ease",
            cursor: "pointer",
            position: "relative"
          },
          children: D(F, Z)
        },
        y(F, Z)
      );
    }) }),
    /* @__PURE__ */ d.jsx("div", { style: {
      marginTop: "16px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "6px",
      fontSize: "13px",
      color: "#64748b",
      textAlign: "center"
    }, children: "Click to select • Double-click to edit • Use toolbar to modify structure" })
  ] });
}, q0 = [
  {
    id: 1,
    name: "Dolo 650 Tab",
    generic: "Paracetamol",
    dosage: "650mg"
  },
  {
    id: 2,
    name: "TRULOOP TL2215",
    generic: "ENDOLOOP",
    dosage: "500mg"
  },
  {
    id: 3,
    name: "DOLOPAR TABLET",
    generic: "Paracetamol",
    dosage: "500mg"
  },
  {
    id: 4,
    name: "Crocin 650",
    generic: "Paracetamol",
    dosage: "650mg"
  },
  {
    id: 5,
    name: "Aspirin 75mg",
    generic: "Acetylsalicylic acid",
    dosage: "75mg"
  },
  {
    id: 6,
    name: "Ibuprofen 400",
    generic: "Ibuprofen",
    dosage: "400mg"
  },
  {
    id: 7,
    name: "Amoxicillin 500",
    generic: "Amoxicillin",
    dosage: "500mg"
  },
  {
    id: 8,
    name: "Metformin 500",
    generic: "Metformin",
    dosage: "500mg"
  }
], WN = () => {
  const [e, t] = B([
    {
      id: "1",
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    }
  ]), [r, n] = B(null), [i, o] = B(""), a = q0.filter(
    (p) => p.name.toLowerCase().includes(i.toLowerCase()) || p.generic.toLowerCase().includes(i.toLowerCase())
  ), l = () => {
    const p = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    t([...e, p]);
  }, s = (p, h, g) => {
    t(e.map(
      (v) => v.id === p ? { ...v, [h]: g } : v
    ));
  }, c = (p, h, g) => {
    t(e.map(
      (v) => v.id === p ? {
        ...v,
        [h]: { bf: g === "bf", af: g === "af" }
      } : v
    ));
  }, u = (p, h) => {
    s(p, "name", h.name), n(null), o("");
  }, f = (p, h) => {
    s(p, "name", h), o(h), n(h ? p : null);
  };
  return /* @__PURE__ */ d.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => n(null), children: [
    /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: e.map((p) => /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ d.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              placeholder: "Type medicine name",
              value: p.name,
              onChange: (h) => f(p.id, h.target.value),
              onFocus: () => n(p.id),
              style: {
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white"
              }
            }
          ),
          r === p.id && /* @__PURE__ */ d.jsx("div", { style: {
            position: "absolute",
            top: "100%",
            left: "12px",
            right: "12px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1e3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }, children: a.map((h) => /* @__PURE__ */ d.jsxs(
            "div",
            {
              onClick: () => u(p.id, h),
              style: {
                padding: "8px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0"
              },
              onMouseEnter: (g) => g.currentTarget.style.backgroundColor = "#f5f5f5",
              onMouseLeave: (g) => g.currentTarget.style.backgroundColor = "white",
              children: [
                /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: h.name }),
                /* @__PURE__ */ d.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                  "(",
                  h.generic,
                  ")"
                ] }),
                /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: h.dosage })
              ]
            },
            h.id
          )) })
        ] }),
        /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ d.jsx(
          "input",
          {
            type: "number",
            value: p.days,
            onChange: (h) => s(p.id, "days", h.target.value),
            style: {
              width: "60px",
              border: "none",
              outline: "none",
              textAlign: "center",
              fontSize: "14px",
              color: "black",
              backgroundColor: "white"
            }
          }
        ) }),
        ["morning", "afternoon", "evening", "night"].map((h) => /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "radio",
                name: `${p.id}-${h}`,
                checked: p[h].bf,
                onChange: () => c(p.id, h, "bf"),
                style: { margin: 0 }
              }
            ),
            "BF"
          ] }),
          /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "radio",
                name: `${p.id}-${h}`,
                checked: p[h].af,
                onChange: () => c(p.id, h, "af"),
                style: { margin: 0 }
              }
            ),
            "AF"
          ] })
        ] }) }, h))
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ d.jsx(
      "button",
      {
        onClick: l,
        style: {
          marginTop: "16px",
          padding: "8px 16px",
          background: "none",
          border: "none",
          color: "#007bff",
          fontSize: "14px",
          cursor: "pointer",
          textDecoration: "none"
        },
        children: "+ Add Medicine"
      }
    )
  ] });
}, FN = () => {
  const [e, t] = B(() => {
    const x = sessionStorage.getItem("medicines");
    return x ? JSON.parse(x) : [
      {
        id: "1",
        name: "",
        days: "",
        morning: { bf: !1, af: !1 },
        afternoon: { bf: !1, af: !1 },
        evening: { bf: !1, af: !1 },
        night: { bf: !1, af: !1 },
        comment: ""
      }
    ];
  }), [r, n] = B(null), [i, o] = B(""), [a, l] = B(null), [s, c] = B(""), u = q0.filter(
    (x) => x.name.toLowerCase().includes(i.toLowerCase()) || x.generic.toLowerCase().includes(i.toLowerCase())
  ), f = () => {
    const x = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    t([...e, x]);
  }, p = (x, j, S) => {
    t(e.map(
      (C) => C.id === x ? { ...C, [j]: S } : C
    ));
  }, h = (x, j, S) => {
    t(e.map(
      (C) => C.id === x ? {
        ...C,
        [j]: { bf: S === "bf", af: S === "af" }
      } : C
    ));
  }, g = (x, j) => {
    p(x, "name", j.name), n(null), o("");
  }, v = (x, j) => {
    p(x, "name", j), o(j), n(j ? x : null);
  }, y = (x) => {
    const j = e.find((S) => S.id === x);
    c(j?.comment || ""), l(x);
  }, m = (x) => {
    const j = e.map(
      (S) => S.id === x ? { ...S, comment: s } : S
    );
    t(j), sessionStorage.setItem("medicines", JSON.stringify(j)), l(null), c("");
  }, w = (x) => {
    const j = e.find((S) => S.id === x);
    c(j?.comment || ""), l(x);
  }, b = () => {
    l(null), c("");
  };
  return /* @__PURE__ */ d.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => n(null), children: [
    /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ d.jsx("thead", { children: /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: e.map((x) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
        /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: "white" }, children: [
          /* @__PURE__ */ d.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "text",
                placeholder: "Type medicine name",
                value: x.name,
                onChange: (j) => v(x.id, j.target.value),
                onFocus: () => n(x.id),
                style: {
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white"
                }
              }
            ),
            x.comment && /* @__PURE__ */ d.jsxs("div", { style: {
              maxWidth: "200px",
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#e4e7fd",
              border: "1px solid #e0e0e0",
              borderLeft: "3px solid #4f67ff",
              borderRadius: "4px",
              fontSize: "13px",
              color: "#333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }, children: [
              /* @__PURE__ */ d.jsx("span", { style: { flex: 1, wordBreak: "break-word" }, children: x.comment }),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  onClick: () => w(x.id),
                  style: {
                    background: "none",
                    border: "none",
                    color: "#999",
                    fontSize: "12px",
                    cursor: "pointer",
                    marginLeft: "8px",
                    padding: "0",
                    textDecoration: "none",
                    flexShrink: 0
                  },
                  children: "✏️ Edit"
                }
              )
            ] }),
            r === x.id && /* @__PURE__ */ d.jsx("div", { style: {
              position: "absolute",
              top: "100%",
              left: "12px",
              right: "12px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 1e3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }, children: u.map((j) => /* @__PURE__ */ d.jsxs(
              "div",
              {
                onClick: () => g(x.id, j),
                style: {
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0"
                },
                onMouseEnter: (S) => S.currentTarget.style.backgroundColor = "#f5f5f5",
                onMouseLeave: (S) => S.currentTarget.style.backgroundColor = "white",
                children: [
                  /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: j.name }),
                  /* @__PURE__ */ d.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                    "(",
                    j.generic,
                    ")"
                  ] }),
                  /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: j.dosage })
                ]
              },
              j.id
            )) })
          ] }),
          /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "number",
              value: x.days,
              onChange: (j) => p(x.id, "days", j.target.value),
              style: {
                width: "60px",
                border: "none",
                outline: "none",
                textAlign: "center",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white"
              }
            }
          ) }),
          ["morning", "afternoon", "evening", "night"].map((j) => /* @__PURE__ */ d.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: [
            /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
              /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ d.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${x.id}-${j}`,
                    checked: x[j].bf,
                    onChange: () => h(x.id, j, "bf"),
                    style: { margin: 0 }
                  }
                ),
                "BF"
              ] }),
              /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ d.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${x.id}-${j}`,
                    checked: x[j].af,
                    onChange: () => h(x.id, j, "af"),
                    style: { margin: 0 }
                  }
                ),
                "AF"
              ] })
            ] }),
            j === "night" && /* @__PURE__ */ d.jsx("div", { style: { marginTop: "8px" }, children: /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => y(x.id),
                style: {
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  fontSize: "12px",
                  cursor: "pointer",
                  textDecoration: "none"
                },
                children: "+ Add Comment"
              }
            ) })
          ] }, j))
        ] }),
        a === x.id && /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: 6, style: { padding: "0", border: "1px solid #ddd" }, children: /* @__PURE__ */ d.jsxs("div", { style: {
          backgroundColor: "#e4e7fd",
          border: "2px solid #4f67ff",
          borderRadius: "4px",
          padding: "8px",
          margin: "4px"
        }, children: [
          /* @__PURE__ */ d.jsx(
            "textarea",
            {
              value: s,
              onChange: (j) => c(j.target.value),
              placeholder: "Add instructions or notes for this medicine...",
              style: {
                width: "95%",
                height: "50px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "8px",
                fontSize: "14px",
                resize: "none",
                outline: "none",
                backgroundColor: "white",
                color: "black"
              }
            }
          ),
          /* @__PURE__ */ d.jsxs("div", { style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            marginTop: "8px"
          }, children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: b,
                style: {
                  padding: "6px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  fontSize: "12px",
                  color: "black"
                },
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => m(x.id),
                style: {
                  padding: "6px 12px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "12px"
                },
                children: "Save Comment"
              }
            )
          ] })
        ] }) }) })
      ] }, x.id)) })
    ] }),
    /* @__PURE__ */ d.jsx(
      "button",
      {
        onClick: f,
        style: {
          marginTop: "16px",
          padding: "8px 16px",
          background: "none",
          border: "none",
          color: "#007bff",
          fontSize: "14px",
          cursor: "pointer",
          textDecoration: "none"
        },
        children: "+ Add Medicine"
      }
    )
  ] });
};
function Ke() {
  const e = ge(null), [t, r] = B({ width: 0, height: 0 });
  Se(() => {
    if (!e.current) return;
    const o = new ResizeObserver(([a]) => {
      const { width: l, height: s } = a.contentRect;
      r({ width: l, height: s });
    });
    return o.observe(e.current), () => o.disconnect();
  }, []);
  const n = t.width === 0 ? 1 : t.width < 300 ? 0.75 : t.width < 500 ? 0.875 : 1;
  return { ref: e, ...t, fs: (o) => `${Math.round(o * n)}px`, scale: n };
}
const VN = ({
  title: e,
  paymentMethods: t
}) => {
  const { ref: r, fs: n } = Ke();
  return /* @__PURE__ */ d.jsx("div", { ref: r, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: /* @__PURE__ */ d.jsxs("div", { style: { padding: "24px" }, children: [
    e && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: n(12), fontWeight: "bold", color: "#003357" }, children: e }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: t.map((i, o) => /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { color: "#7a8a99", fontSize: n(16), fontWeight: "600", minWidth: "70px", textAlign: "right" }, children: i.label }),
      /* @__PURE__ */ d.jsx("div", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ d.jsx("div", { style: { backgroundColor: "#e8e8e8", height: "24px", borderRadius: "12px", overflow: "hidden" }, children: /* @__PURE__ */ d.jsx("div", { style: { backgroundColor: i.color, height: "100%", width: `${i.percentage}%`, borderRadius: "12px" } }) }) }),
      /* @__PURE__ */ d.jsx("div", { style: { fontSize: n(18), fontWeight: "400", minWidth: "110px", textAlign: "right", color: "#2c3e50" }, children: i.amount.toLocaleString("en-IN") })
    ] }, o)) })
  ] }) });
}, _2 = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  strokeWidth: n = 2,
  showDots: i = !0,
  showGrid: o = !0,
  title: a,
  className: l
}) => {
  const { ref: s, width: c, height: u, fs: f, scale: p } = Ke(), [h, g] = B(null), v = typeof t == "string", y = v && a ? 48 : 0, m = v ? u > 0 ? u - y : 200 : t, w = 20, b = 15, x = Math.max(...e.map((L) => L.value)), S = ((L) => {
    const V = Math.pow(10, Math.floor(Math.log10(L || 1))), N = L / V;
    let $;
    N <= 1 ? $ = 0.2 * V : N <= 2 ? $ = 0.5 * V : N <= 5 ? $ = V : $ = 2 * V;
    const J = [];
    for (let X = 0; X <= Math.ceil(L / $); X++) J.push(X * $);
    return J;
  })(x), C = Math.max(...S.map((L) => L.toLocaleString("en-IN").length)), _ = Math.max(65, C * 9 + 16), E = (c || 600) - _ * 2, T = E / (e.length - 1 || 1), D = 10 * p * 0.6, k = Math.max(...e.map((L) => L.label.length)), W = k * D > T, F = W ? k * D * 1.2 : 20, Z = W ? F + 20 : b, q = Math.max(m - w - Z, 50), ie = e.map((L, V) => {
    const N = _ + E / (e.length - 1 || 1) * V, $ = w + q - L.value / (S[S.length - 1] || 1) * q;
    return { x: N, y: $, ...L };
  }), z = ie.map((L, V) => `${V === 0 ? "M" : "L"} ${L.x} ${L.y}`).join(" ");
  return /* @__PURE__ */ d.jsxs("div", { ref: s, className: l, style: {
    backgroundColor: "var(--chart-bg, #ffffff)",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    height: v ? "100%" : "auto",
    minHeight: v ? "250px" : void 0,
    boxSizing: "border-box"
  }, children: [
    a && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: f(12), lineHeight: 1.5, fontWeight: "bold", color: "var(--chart-text-strong, #003357)" }, children: a }),
    c > 0 && /* @__PURE__ */ d.jsxs(
      "svg",
      {
        width: c,
        height: m,
        style: { overflow: "visible" },
        children: [
          o && /* @__PURE__ */ d.jsx("g", { children: S.map((L, V) => {
            const N = w + q - L / (S[S.length - 1] || 1) * q;
            return /* @__PURE__ */ d.jsxs("g", { children: [
              /* @__PURE__ */ d.jsx("line", { x1: _, y1: N, x2: c - _, y2: N, stroke: "#e0e0e0", strokeWidth: "1" }),
              /* @__PURE__ */ d.jsx("text", { x: _ - 6, y: N + 4, textAnchor: "end", fontSize: f(9), fill: "#888", children: L.toLocaleString("en-IN") })
            ] }, V);
          }) }),
          /* @__PURE__ */ d.jsx("path", { d: z, fill: "none", stroke: r, strokeWidth: n }),
          i && ie.map((L, V) => /* @__PURE__ */ d.jsxs("g", { children: [
            /* @__PURE__ */ d.jsx(
              "circle",
              {
                cx: L.x,
                cy: L.y,
                r: "4",
                fill: L.color || r,
                style: { cursor: "pointer" },
                onMouseEnter: (N) => g({ x: N.clientX, y: N.clientY, label: L.label, value: L.value }),
                onMouseMove: (N) => g(($) => $ ? { ...$, x: N.clientX, y: N.clientY } : null),
                onMouseLeave: () => g(null)
              }
            ),
            /* @__PURE__ */ d.jsx(
              "text",
              {
                x: V === 0 ? L.x + 4 : V === ie.length - 1 ? L.x - 4 : L.x,
                y: L.y - 8,
                textAnchor: V === 0 ? "start" : V === ie.length - 1 ? "end" : "middle",
                fontSize: f(9),
                fill: "#444",
                pointerEvents: "none",
                children: L.value.toLocaleString("en-IN")
              }
            )
          ] }, V)),
          ie.map((L, V) => W ? /* @__PURE__ */ d.jsx(
            "text",
            {
              x: L.x,
              y: w + q + 8,
              fontSize: f(10),
              fill: "#000000",
              textAnchor: "end",
              transform: `rotate(-40, ${L.x}, ${w + q + 8})`,
              children: L.label.includes(" | ") ? L.label.split(" | ").map((N, $) => /* @__PURE__ */ d.jsx("tspan", { x: L.x, dy: $ === 0 ? 0 : 12, children: N }, $)) : L.label
            },
            V
          ) : /* @__PURE__ */ d.jsx("text", { x: L.x, y: w + q + 20, textAnchor: "middle", fontSize: f(10), fill: "#000000", children: L.label.includes(" | ") ? L.label.split(" | ").map((N, $) => /* @__PURE__ */ d.jsx("tspan", { x: L.x, dy: $ === 0 ? 0 : 12, children: N }, $)) : L.label }, V))
        ]
      }
    ),
    h && /* @__PURE__ */ d.jsxs("div", { style: {
      position: "fixed",
      left: h.x + 12,
      top: h.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: f(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: h.label }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Value: ",
        h.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
};
function Sc(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function E2(e, t) {
  const r = Sc(e);
  return Math.max(30, r.length * t + 10);
}
const A2 = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  showValues: n = !0,
  showGrid: i = !0,
  title: o,
  className: a
}) => {
  const { ref: l, width: s, height: c, fs: u, scale: f } = Ke(), p = 20, h = 15, g = 10, v = typeof t == "string", y = v && o ? 48 : 0, m = v ? c > 0 ? c - y : 200 : t, w = e.length > 0 ? Math.max(...e.map((q) => q.value), 0) : 1, b = Math.max(6, 8 * f), x = E2(w, b), j = s || 600, S = j - x - g, C = 10 * f * 0.6, _ = e.length > 0 ? Math.max(...e.map((q) => q.label.length)) : 0, E = S / (e.length || 1), T = _ * C > E, D = T ? _ * C * 1.2 : 20, k = T ? D + 20 : h, W = Math.max(m - p - k, 50), F = S / (e.length || 1) * 0.7, Z = [0, 0.25, 0.5, 0.75, 1];
  return /* @__PURE__ */ d.jsxs("div", { ref: l, className: a, style: {
    backgroundColor: "var(--chart-bg, #ffffff)",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    height: v ? "100%" : "auto",
    minHeight: v ? "250px" : void 0,
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: u(12), lineHeight: 1.5, fontWeight: "bold", color: "var(--chart-text-strong, #003357)" }, children: o }),
    j > 0 && /* @__PURE__ */ d.jsxs(
      "svg",
      {
        width: j,
        height: m,
        style: { overflow: "visible" },
        children: [
          Z.map((q, ie) => {
            const z = p + W * (1 - q), L = w * q, V = Sc(L);
            return /* @__PURE__ */ d.jsxs("g", { children: [
              i && /* @__PURE__ */ d.jsx(
                "line",
                {
                  x1: x,
                  y1: z,
                  x2: j - g,
                  y2: z,
                  stroke: "var(--chart-grid, #e0e0e0)",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: x - 6,
                  y: z,
                  textAnchor: "end",
                  dominantBaseline: "middle",
                  fontSize: u(10),
                  fill: "var(--chart-text-muted, #888)",
                  children: V
                }
              )
            ] }, ie);
          }),
          e.map((q, ie) => {
            const z = w > 0 ? q.value / w * W : 0, L = x + E * ie + (E - F) / 2, V = p + W - z;
            return /* @__PURE__ */ d.jsxs("g", { children: [
              /* @__PURE__ */ d.jsx(
                "rect",
                {
                  x: L,
                  y: V,
                  width: F,
                  height: z,
                  fill: q.color || r,
                  rx: "4"
                }
              ),
              n && /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: L + F / 2,
                  y: V - 5,
                  textAnchor: "middle",
                  fontSize: u(10),
                  fill: "var(--chart-text-muted, #555)",
                  fontWeight: "bold",
                  children: Sc(q.value)
                }
              ),
              T ? /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: L + F / 2,
                  y: p + W + 8,
                  fontSize: u(10),
                  fill: "#000000",
                  textAnchor: "end",
                  transform: `rotate(-40, ${L + F / 2}, ${p + W + 8})`,
                  children: q.label.includes(" | ") ? q.label.split(" | ").map((N, $) => /* @__PURE__ */ d.jsx("tspan", { x: L + F / 2, dy: $ === 0 ? 0 : 12, children: N }, $)) : q.label
                }
              ) : /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: L + F / 2,
                  y: p + W + 20,
                  textAnchor: "middle",
                  fontSize: u(10),
                  fill: "#000000",
                  children: q.label.includes(" | ") ? q.label.split(" | ").map((N, $) => /* @__PURE__ */ d.jsx("tspan", { x: L + F / 2, dy: $ === 0 ? 0 : 12, children: N }, $)) : q.label
                }
              )
            ] }, ie);
          })
        ]
      }
    )
  ] });
};
function T2(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16),
    parseInt(t.substring(2, 4), 16),
    parseInt(t.substring(4, 6), 16)
  ];
}
function I2(e, t) {
  const [r, n, i] = T2(e), o = [...t].sort((s, c) => s.value - c.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((s, c) => {
    const u = a === 1 ? 0.5 : c / (a - 1), f = (h) => Math.round(220 - u * (220 - h)), p = (h) => f(h).toString(16).padStart(2, "0");
    l.set(s, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((s) => l.get(s));
}
const M2 = ({
  data: e,
  showLegend: t = !0,
  title: r,
  baseColor: n,
  className: i
}) => {
  const { ref: o, width: a, height: l, fs: s } = Ke(), [c, u] = B(null), f = a || 400, p = l > 0 ? l - (r ? 40 : 0) - (t ? 60 : 0) : 400, h = Math.max(50, Math.min(f, p, 400)), g = f / 2, v = h / 2, y = h / 2 - 20, m = n ? I2(n, e) : null, w = e.reduce((j, S) => j + S.value, 0);
  let b = -90;
  const x = e.map((j) => {
    const S = j.value / w * 100, C = j.value / w * 360, _ = C === 360 ? 359.99 : C, E = b, T = b + _, D = E * Math.PI / 180, k = T * Math.PI / 180, W = g + y * Math.cos(D), F = v + y * Math.sin(D), Z = g + y * Math.cos(k), q = v + y * Math.sin(k), ie = _ > 180 ? 1 : 0, z = `M ${g} ${v} L ${W} ${F} A ${y} ${y} 0 ${ie} 1 ${Z} ${q} Z`;
    b = T;
    const L = m ? m[e.indexOf(j)] : j.color ?? "#4a90e2";
    return { ...j, path: z, percentage: S, color: L };
  });
  return /* @__PURE__ */ d.jsxs("div", { ref: o, className: i, style: {
    backgroundColor: "var(--chart-bg, #ffffff)",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    height: l > 0 ? "100%" : "auto",
    minHeight: "250px",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "var(--chart-text-strong, #003357)" }, children: r }),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }, children: [
      h > 0 && /* @__PURE__ */ d.jsx("svg", { width: f, height: h, style: { display: "block" }, children: e.length === 1 ? /* @__PURE__ */ d.jsx(
        "circle",
        {
          cx: g,
          cy: v,
          r: y,
          fill: x[0].color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (j) => u({ x: j.clientX, y: j.clientY, label: x[0].label, value: x[0].value, percentage: 100 }),
          onMouseMove: (j) => u((S) => S ? { ...S, x: j.clientX, y: j.clientY } : null),
          onMouseLeave: () => u(null),
          style: { cursor: "pointer" }
        }
      ) : x.map((j, S) => /* @__PURE__ */ d.jsx(
        "path",
        {
          d: j.path,
          fill: j.color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (C) => u({ x: C.clientX, y: C.clientY, label: j.label, value: j.value, percentage: j.percentage }),
          onMouseMove: (C) => u((_) => _ ? { ..._, x: C.clientX, y: C.clientY } : null),
          onMouseLeave: () => u(null),
          style: { cursor: "pointer" }
        },
        S
      )) }),
      t && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 24px" }, children: x.map((j, S) => /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: "12px", height: "12px", backgroundColor: j.color, borderRadius: "3px", flexShrink: 0 } }),
        /* @__PURE__ */ d.jsxs("span", { style: { fontSize: s(12), color: "#000000" }, children: [
          j.label,
          ": ",
          j.value.toLocaleString("en-IN")
        ] })
      ] }, S)) })
    ] }),
    c && /* @__PURE__ */ d.jsxs("div", { style: {
      position: "fixed",
      left: c.x + 12,
      top: c.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: s(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: c.label }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Value: ",
        c.value.toLocaleString("en-IN")
      ] }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Percentage: ",
        c.percentage.toFixed(1),
        "%"
      ] })
    ] })
  ] });
}, KN = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  showLabels: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: s } = Ke(), c = 60, u = l || 600, f = u - c * 2, p = t - c * 2, h = Math.max(...e.map((m) => m.x)), g = Math.max(...e.map((m) => m.y)), v = Math.max(...e.map((m) => m.size)), y = e.map((m) => ({
    ...m,
    cx: c + m.x / h * f,
    cy: c + p - m.y / g * p,
    r: m.size / v * 40 + 10
  }));
  return /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: s(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ d.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ d.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((m, w) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
        /* @__PURE__ */ d.jsx("line", { x1: c, y1: c + p * m, x2: u - c, y2: c + p * m, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ d.jsx("line", { x1: c + f * m, y1: c, x2: c + f * m, y2: t - c, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, w)) }),
      y.map((m, w) => /* @__PURE__ */ d.jsxs("g", { children: [
        /* @__PURE__ */ d.jsx("circle", { cx: m.cx, cy: m.cy, r: m.r, fill: m.color || r, opacity: "0.7", stroke: "#fff", strokeWidth: "2" }),
        n && /* @__PURE__ */ d.jsx("text", { x: m.cx, y: m.cy, textAnchor: "middle", dominantBaseline: "middle", fontSize: s(12), fill: "#fff", fontWeight: "bold", children: m.label })
      ] }, w))
    ] })
  ] });
}, HN = ({
  data: e,
  showValues: t = !0,
  colorScale: r = ["#e3f2fd", "#003357"],
  title: n,
  className: i
}) => {
  const { ref: o, width: a, height: l, fs: s } = Ke(), c = Array.from(new Set(e.map((x) => x.x))), u = Array.from(new Set(e.map((x) => x.y))), f = 80, p = (a || 600) - f - 48, h = Math.max(30, Math.floor(p / c.length)), g = Math.max(...e.map((x) => x.value)), v = Math.min(...e.map((x) => x.value)), y = (x) => {
    const j = (x - v) / (g - v || 1), S = parseInt(r[0].slice(1, 3), 16), C = parseInt(r[0].slice(3, 5), 16), _ = parseInt(r[0].slice(5, 7), 16), E = parseInt(r[1].slice(1, 3), 16), T = parseInt(r[1].slice(3, 5), 16), D = parseInt(r[1].slice(5, 7), 16);
    return `rgb(${Math.round(S + (E - S) * j)}, ${Math.round(C + (T - C) * j)}, ${Math.round(_ + (D - _) * j)})`;
  }, m = (x, j) => e.find((S) => S.x === x && S.y === j)?.value ?? 0, w = c.length * h + f, b = u.length * h + f;
  return /* @__PURE__ */ d.jsxs("div", { ref: o, className: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    height: l > 0 ? "100%" : "auto",
    boxSizing: "border-box"
  }, children: [
    n && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: s(20), fontWeight: "bold", color: "#003357" }, children: n }),
    w > 0 && /* @__PURE__ */ d.jsxs("svg", { width: w, height: b, children: [
      u.map((x, j) => /* @__PURE__ */ d.jsx(
        "text",
        {
          x: f - 10,
          y: j * h + h / 2 + f,
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: s(12),
          fill: "#666",
          children: x
        },
        `y-${j}`
      )),
      c.map((x, j) => /* @__PURE__ */ d.jsx(
        "text",
        {
          x: j * h + h / 2 + f,
          y: f - 10,
          textAnchor: "middle",
          fontSize: s(12),
          fill: "#666",
          children: x
        },
        `x-${j}`
      )),
      u.map(
        (x, j) => c.map((S, C) => {
          const _ = m(S, x);
          return /* @__PURE__ */ d.jsxs("g", { children: [
            /* @__PURE__ */ d.jsx(
              "rect",
              {
                x: C * h + f,
                y: j * h + f,
                width: h,
                height: h,
                fill: y(_),
                stroke: "#fff",
                strokeWidth: "2",
                rx: "4"
              }
            ),
            t && /* @__PURE__ */ d.jsx(
              "text",
              {
                x: C * h + h / 2 + f,
                y: j * h + h / 2 + f,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontSize: s(Math.max(10, h / 4)),
                fill: "#fff",
                fontWeight: "bold",
                children: _
              }
            )
          ] }, `${C}-${j}`);
        })
      )
    ] })
  ] });
}, qN = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  pointSize: n = 6,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: s } = Ke(), c = 60, u = l || 600, f = u - c * 2, p = t - c * 2, h = Math.max(...e.map((w) => w.x)), g = Math.max(...e.map((w) => w.y)), v = Math.min(...e.map((w) => w.x)), y = Math.min(...e.map((w) => w.y)), m = e.map((w) => ({
    ...w,
    cx: c + (w.x - v) / (h - v || 1) * f,
    cy: c + p - (w.y - y) / (g - y || 1) * p
  }));
  return /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: s(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ d.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ d.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((w, b) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
        /* @__PURE__ */ d.jsx("line", { x1: c, y1: c + p * w, x2: u - c, y2: c + p * w, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ d.jsx("line", { x1: c + f * w, y1: c, x2: c + f * w, y2: t - c, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, b)) }),
      /* @__PURE__ */ d.jsx("line", { x1: c, y1: c, x2: c, y2: t - c, stroke: "#666", strokeWidth: "2" }),
      /* @__PURE__ */ d.jsx("line", { x1: c, y1: t - c, x2: u - c, y2: t - c, stroke: "#666", strokeWidth: "2" }),
      m.map((w, b) => /* @__PURE__ */ d.jsx("circle", { cx: w.cx, cy: w.cy, r: n, fill: w.color || r, opacity: "0.7" }, b))
    ] })
  ] });
};
function D2(e) {
  const t = e.replace("#", "");
  return [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)];
}
function R2(e, t) {
  const [r, n, i] = D2(e);
  return Array.from({ length: t }, (o, a) => {
    const l = t === 1 ? 0.5 : a / (t - 1), s = (u) => Math.round(220 - l * (220 - u)), c = (u) => s(u).toString(16).padStart(2, "0");
    return `#${c(r)}${c(n)}${c(i)}`;
  });
}
const UN = ({
  data: e,
  height: t = 200,
  showLegend: r = !0,
  showGrid: n = !0,
  title: i,
  color: o
}) => {
  const { ref: a, width: l, fs: s } = Ke(), [c, u] = B(null), p = Math.max(100, (l || 600) - (r ? 160 : 0) - 40), h = 20, g = 15, v = 30, y = p - v * 2, m = t - h - g, w = Math.max(...e.map((_) => _.stacks.reduce((E, T) => E + T.value, 0))), b = y / e.length * 0.7, x = y / e.length, j = Array.from(new Set(e.flatMap((_) => _.stacks.map((E) => E.label)))), S = o ? R2(o, j.length) : null, C = /* @__PURE__ */ new Map();
  return j.forEach((_, E) => {
    const T = e.flatMap((D) => D.stacks).find((D) => D.label === _)?.color;
    C.set(_, S ? S[E] : T ?? "#4a90e2");
  }), /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    paddingBottom: "24px",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    i && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: i }),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "40px", alignItems: "flex-start" }, children: [
      p > 0 && /* @__PURE__ */ d.jsxs("svg", { width: p, height: t + g, children: [
        n && /* @__PURE__ */ d.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((_, E) => {
          const T = h + m * (1 - _);
          return /* @__PURE__ */ d.jsx("line", { x1: v, y1: T, x2: p - v, y2: T, stroke: "#e0e0e0", strokeWidth: "1" }, E);
        }) }),
        e.map((_, E) => {
          const T = v + x * E + (x - b) / 2;
          let D = h + m;
          return /* @__PURE__ */ d.jsxs("g", { children: [
            _.stacks.map((k, W) => {
              const F = k.value / w * m, Z = D - F;
              return D = Z, /* @__PURE__ */ d.jsx(
                "rect",
                {
                  x: T,
                  y: Z,
                  width: b,
                  height: F,
                  fill: C.get(k.label) ?? "#4a90e2",
                  onMouseEnter: (q) => {
                    const ie = q.currentTarget.getBoundingClientRect();
                    u({ x: ie.left + ie.width / 2, y: ie.top, label: k.label, value: k.value });
                  },
                  onMouseLeave: () => u(null),
                  style: { cursor: "pointer" }
                },
                W
              );
            }),
            /* @__PURE__ */ d.jsx("text", { x: T + b / 2, y: h + m + 20, textAnchor: "middle", fontSize: s(12), fill: "#666", children: _.category })
          ] }, E);
        })
      ] }),
      r && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }, children: j.map((_, E) => /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: C.get(_), borderRadius: "4px" } }),
        /* @__PURE__ */ d.jsx("span", { style: { fontSize: s(14), color: "#333" }, children: _ })
      ] }, E)) })
    ] }),
    c && /* @__PURE__ */ d.jsxs("div", { style: {
      position: "fixed",
      left: c.x,
      top: c.y - 10,
      transform: "translate(-50%, -100%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: s(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: c.label }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Value: ",
        c.value
      ] })
    ] })
  ] });
}, YN = ({
  title: e,
  value: t,
  prefix: r = "",
  suffix: n = "",
  // trend,
  // trendLabel,
  icon: i,
  color: o = "#003357",
  backgroundColor: a = "#ffffff"
}) => {
  const { ref: l, fs: s } = Ke(), u = l2().replace(/:/g, "_"), f = o, h = ((j) => {
    const S = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(j);
    return S ? { r: parseInt(S[1], 16), g: parseInt(S[2], 16), b: parseInt(S[3], 16) } : { r: 255, g: 255, b: 255 };
  })(a), v = (0.299 * h.r + 0.587 * h.g + 0.114 * h.b) / 255 < 0.5, y = `rgba(${h.r}, ${h.g}, ${h.b}, 0.55)`, m = v ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)", w = v ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.85)", b = "rgba(255,255,255,0.0)", x = `
    @keyframes kpi-shimmer-${u} {
      0%   { transform: translateX(-150%) skewX(-25deg); }
      100% { transform: translateX(250%) skewX(-25deg); }
    }
    @keyframes kpi-glow-pulse-${u} {
      0%, 100% { box-shadow: 0 0 18px 2px ${f}33, 0 8px 32px 0 rgba(0,0,0,0.15); }
      50%      { box-shadow: 0 0 35px 8px ${f}55, 0 12px 48px 0 rgba(0,0,0,0.2); }
    }
    @keyframes kpi-trend-bounce-${u} {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-3px); }
    }
    @keyframes kpi-icon-float-${u} {
      0%, 100% { transform: translateY(0) scale(1); }
      50%      { transform: translateY(-5px) scale(1.1); }
    }
    @keyframes kpi-border-flow-${u} {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes kpi-value-in-${u} {
      0%   { opacity: 0; transform: translateY(10px) scale(0.95); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx("style", { children: x }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: l,
        style: {
          position: "relative",
          borderRadius: "24px",
          padding: "2px",
          /* gradient border thickness */
          background: `linear-gradient(135deg, ${f}88, ${f}22, ${f}66)`,
          backgroundSize: "200% 200%",
          animation: `kpi-border-flow-${u} 4s ease infinite, kpi-glow-pulse-${u} 3s ease-in-out infinite`,
          width: "100%",
          boxSizing: "border-box",
          transition: "transform 0.4s cubic-bezier(.175, .885, .32, 1.275)",
          cursor: "default"
        },
        onMouseEnter: (j) => {
          j.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        },
        onMouseLeave: (j) => {
          j.currentTarget.style.transform = "translateY(0) scale(1)";
        },
        children: /* @__PURE__ */ d.jsxs(
          "div",
          {
            style: {
              background: y,
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: "22px",
              padding: "28px 26px 22px",
              fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              boxSizing: "border-box",
              border: `1px solid rgba(255, 255, 255, ${v ? 0.1 : 0.4})`,
              boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)"
            },
            children: [
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                    pointerEvents: "none",
                    zIndex: 1,
                    borderRadius: "22px 22px 0 0"
                  }
                }
              ),
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "60%",
                    height: "100%",
                    background: `linear-gradient(90deg, ${b} 0%, ${w} 50%, ${b} 100%)`,
                    animation: `kpi-shimmer-${u} 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                    pointerEvents: "none",
                    zIndex: 3,
                    mixBlendMode: v ? "screen" : "overlay"
                  }
                }
              ),
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${f}33 0%, transparent 70%)`,
                    pointerEvents: "none",
                    zIndex: 0,
                    filter: "blur(10px)"
                  }
                }
              ),
              /* @__PURE__ */ d.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "14px",
                    position: "relative",
                    zIndex: 4
                  },
                  children: [
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: {
                          fontSize: s(13),
                          color: m,
                          fontWeight: "600",
                          letterSpacing: "0.8px",
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    i && /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: {
                          fontSize: s(28),
                          animation: `kpi-icon-float-${u} 3s ease-in-out infinite`,
                          filter: `drop-shadow(0 4px 8px ${f}66)`,
                          lineHeight: 1,
                          color: v ? "#fff" : o
                        },
                        children: i
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ d.jsxs(
                "div",
                {
                  style: {
                    fontSize: s(38),
                    fontWeight: "800",
                    color: o,
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                    position: "relative",
                    zIndex: 4,
                    animation: `kpi-value-in-${u} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
                    textShadow: v ? `0 2px 10px ${f}44` : `0 1px 5px ${f}33`
                  },
                  children: [
                    r,
                    typeof t == "number" ? t.toLocaleString() : t,
                    n
                  ]
                }
              ),
              /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    left: "20px",
                    right: "20px",
                    height: "4px",
                    borderRadius: "4px 4px 0 0",
                    background: `linear-gradient(90deg, transparent, ${f}88, transparent)`,
                    zIndex: 4,
                    boxShadow: `0 -2px 10px ${f}44`
                  }
                }
              )
            ]
          }
        )
      }
    )
  ] });
}, GN = ({
  value: e,
  max: t = 100,
  min: r = 0,
  title: n,
  unit: i = "%",
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0"
}) => {
  const { ref: l, width: s, fs: c } = Ke(), u = Math.max(120, Math.min(s || 220, 320)), f = Math.max(r, Math.min(t, e)), p = (f - r) / (t - r) * 100, h = 225, g = 315, v = g - h, y = h + p / 100 * v, m = u / 2, w = u / 2 + 10, b = u / 2 - 40, x = (T, D) => {
    const k = (T - 90) * Math.PI / 180;
    return { x: m + D * Math.cos(k), y: w + D * Math.sin(k) };
  }, j = (T, D) => {
    const k = x(T, b), W = x(D, b), F = D - T <= 180 ? 0 : 1;
    return `M ${k.x} ${k.y} A ${b} ${b} 0 ${F} 1 ${W.x} ${W.y}`;
  }, S = h + p / 100 * v, C = x(y, b - 15), _ = x(y - 90, 6), E = x(y + 90, 6);
  return /* @__PURE__ */ d.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, children: [
    n && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: c(18), fontWeight: "bold", color: "#003357", textAlign: "center" }, children: n }),
    u > 0 && /* @__PURE__ */ d.jsxs("svg", { width: u, height: u * 0.75, style: { overflow: "visible" }, children: [
      /* @__PURE__ */ d.jsx("defs", { children: /* @__PURE__ */ d.jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ d.jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodOpacity: "0.3" }) }) }),
      /* @__PURE__ */ d.jsx("path", { d: j(h, g), fill: "none", stroke: a, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ d.jsx("path", { d: j(h, S), fill: "none", stroke: o, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ d.jsx("polygon", { points: `${C.x},${C.y} ${_.x},${_.y} ${E.x},${E.y}`, fill: "#333", filter: "url(#shadow)" }),
      /* @__PURE__ */ d.jsx("circle", { cx: m, cy: w, r: "10", fill: "#333" }),
      /* @__PURE__ */ d.jsx("circle", { cx: m, cy: w, r: "6", fill: "#fff" }),
      /* @__PURE__ */ d.jsxs("text", { x: m, y: w + 45, textAnchor: "middle", fontSize: c(Math.max(16, u / 7)), fontWeight: "bold", fill: o, children: [
        f,
        i
      ] }),
      /* @__PURE__ */ d.jsx("text", { x: x(h, b + 20).x - 5, y: x(h, b + 20).y, textAnchor: "end", fontSize: c(14), fill: "#666", fontWeight: "500", children: r }),
      /* @__PURE__ */ d.jsx("text", { x: x(g, b + 20).x + 5, y: x(g, b + 20).y, textAnchor: "start", fontSize: c(14), fill: "#666", fontWeight: "500", children: t })
    ] })
  ] });
}, XN = ({
  value: e,
  max: t = 100,
  label: r,
  showPercentage: n = !0,
  height: i = 24,
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0",
  animated: l = !1
}) => {
  const { ref: s, fs: c } = Ke(), u = Math.min(100, Math.max(0, e / t * 100));
  return /* @__PURE__ */ d.jsxs("div", { ref: s, style: { width: "100%", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }, children: [
    r && /* @__PURE__ */ d.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: c(14),
      color: "#333",
      fontWeight: "500"
    }, children: [
      /* @__PURE__ */ d.jsx("span", { children: r }),
      n && /* @__PURE__ */ d.jsxs("span", { children: [
        u.toFixed(0),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: {
      width: "100%",
      height: `${i}px`,
      backgroundColor: a,
      borderRadius: `${i / 2}px`,
      overflow: "hidden",
      position: "relative"
    }, children: /* @__PURE__ */ d.jsx("div", { style: {
      width: `${u}%`,
      height: "100%",
      backgroundColor: o,
      borderRadius: `${i / 2}px`,
      transition: l ? "width 0.3s ease" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: u > 10 ? "8px" : "0"
    }, children: !r && n && u > 10 && /* @__PURE__ */ d.jsxs("span", { style: { color: "#fff", fontSize: c(12), fontWeight: "bold" }, children: [
      u.toFixed(0),
      "%"
    ] }) }) })
  ] });
}, ZN = ({ data: e, title: t, maxHeight: r = 400 }) => {
  const { ref: n, fs: i } = Ke(), o = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  };
  if (!e || e.length === 0)
    return /* @__PURE__ */ d.jsxs("div", { ref: n, style: o, children: [
      t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: i(18), fontWeight: "bold", color: "#003357" }, children: t }),
      /* @__PURE__ */ d.jsx("p", { style: { color: "#666", textAlign: "center", fontSize: i(14) }, children: "No data available" })
    ] });
  const a = Object.keys(e[0]);
  return /* @__PURE__ */ d.jsxs("div", { ref: n, style: o, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: i(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { maxHeight: r, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ d.jsx("thead", { style: { position: "sticky", top: 0, backgroundColor: "#003357", color: "#fff", zIndex: 1 }, children: /* @__PURE__ */ d.jsx("tr", { children: a.map((l) => /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", fontSize: i(13), borderBottom: "2px solid #002a45" }, children: l }, l)) }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: e.map((l, s) => /* @__PURE__ */ d.jsx("tr", { style: { backgroundColor: s % 2 === 0 ? "#f9f9f9" : "#fff" }, children: a.map((c) => /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", borderBottom: "1px solid #e0e0e0", color: "#333", fontSize: i(13) }, children: l[c] !== null && l[c] !== void 0 ? String(l[c]) : "-" }, c)) }, s)) })
    ] }) })
  ] });
}, JN = ({
  data: e,
  rowField: t,
  columnField: r,
  valueField: n,
  aggregation: i = "sum",
  title: o
}) => {
  const a = er(() => {
    const l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), c = {};
    e.forEach((p) => {
      const h = String(p[t]), g = String(p[r]), v = Number(p[n]) || 0;
      l.add(h), s.add(g), c[h] || (c[h] = {}), c[h][g] || (c[h][g] = []), c[h][g].push(v);
    });
    const u = (p) => {
      if (p.length === 0) return 0;
      switch (i) {
        case "sum":
          return p.reduce((h, g) => h + g, 0);
        case "avg":
          return p.reduce((h, g) => h + g, 0) / p.length;
        case "count":
          return p.length;
        case "min":
          return Math.min(...p);
        case "max":
          return Math.max(...p);
        default:
          return 0;
      }
    }, f = {};
    return l.forEach((p) => {
      f[p] = {}, s.forEach((h) => {
        f[p][h] = c[p]?.[h] ? u(c[p][h]) : 0;
      });
    }), { rows: Array.from(l), cols: Array.from(s), result: f };
  }, [e, t, r, n, i]);
  return /* @__PURE__ */ d.jsxs("div", { style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }, children: [
    o && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ d.jsx("div", { style: { overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ d.jsx("thead", { style: { backgroundColor: "#003357", color: "#fff" }, children: /* @__PURE__ */ d.jsxs("tr", { children: [
        /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", position: "sticky", left: 0, backgroundColor: "#003357" }, children: t }),
        a.cols.map((l) => /* @__PURE__ */ d.jsx("th", { style: { padding: "12px", textAlign: "right", fontWeight: "600" }, children: l }, l))
      ] }) }),
      /* @__PURE__ */ d.jsx("tbody", { children: a.rows.map((l, s) => /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: s % 2 === 0 ? "#f9f9f9" : "#fff" }, children: [
        /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", color: "#000000", fontWeight: "600", borderBottom: "1px solid #e0e0e0", position: "sticky", left: 0, backgroundColor: s % 2 === 0 ? "#f9f9f9" : "#fff" }, children: l }),
        a.cols.map((c) => /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", textAlign: "right", borderBottom: "1px solid #e0e0e0", color: "#333" }, children: a.result[l][c].toFixed(2) }, c))
      ] }, l)) })
    ] }) })
  ] });
}, QN = ({
  items: e,
  title: t,
  maxHeight: r = 400,
  showNumbers: n = !1,
  defaultColor: i = "#003357"
}) => {
  const { ref: o, fs: a } = Ke(), l = {
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    info: "#17a2b8"
  };
  return /* @__PURE__ */ d.jsxs("div", { ref: o, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: a(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: /* @__PURE__ */ d.jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: e.map((s, c) => /* @__PURE__ */ d.jsxs(
      "li",
      {
        style: {
          padding: "16px",
          borderBottom: c < e.length - 1 ? "1px solid #e0e0e0" : "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          transition: "background-color 0.2s",
          cursor: "pointer"
        },
        onMouseEnter: (u) => u.currentTarget.style.backgroundColor = "#f5f5f5",
        onMouseLeave: (u) => u.currentTarget.style.backgroundColor = "transparent",
        children: [
          n && /* @__PURE__ */ d.jsx("span", { style: {
            minWidth: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: s.color || i,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: a(12),
            fontWeight: "bold"
          }, children: c + 1 }),
          s.icon && /* @__PURE__ */ d.jsx("div", { style: { fontSize: a(20) }, children: s.icon }),
          s.status && /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: l[s.status] } }),
          /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "600", color: "#333", marginBottom: "4px", fontSize: a(14) }, children: s.title }),
            s.subtitle && /* @__PURE__ */ d.jsx("div", { style: { fontSize: a(13), color: "#666", marginBottom: s.details ? "8px" : 0 }, children: s.subtitle }),
            s.details && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }, children: Object.entries(s.details).map(([u, f]) => /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "#f0f4f8", padding: "4px 8px", borderRadius: "4px", fontSize: a(11), color: "#475569" }, children: [
              /* @__PURE__ */ d.jsxs("strong", { style: { color: "#0f172a" }, children: [
                u.replace(/_/g, " "),
                ":"
              ] }),
              " ",
              String(f)
            ] }, u)) })
          ] }),
          s.timestamp && /* @__PURE__ */ d.jsx("div", { style: { fontSize: a(12), color: "#999", whiteSpace: "nowrap" }, children: s.timestamp })
        ]
      },
      s.id
    )) }) })
  ] });
}, e$ = ({
  markers: e,
  title: t,
  height: r = 400,
  centerLat: n = 0,
  centerLng: i = 0,
  zoom: o = 10,
  apiKey: a
}) => {
  const { ref: l, fs: s } = Ke(), c = `${n},${i}`, u = e.map((p) => `markers=color:red%7C${p.lat},${p.lng}`).join("&"), f = a ? `https://www.google.com/maps/embed/v1/view?key=${a}&center=${c}&zoom=${o}` : `https://maps.google.com/maps?q=${c}&z=${o}&output=embed${e.length > 0 ? "&" + u : ""}`;
  return /* @__PURE__ */ d.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: s(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0" }, children: /* @__PURE__ */ d.jsx(
      "iframe",
      {
        width: "100%",
        height: r,
        style: { border: 0, display: "block" },
        loading: "lazy",
        src: f,
        allowFullScreen: !0
      }
    ) })
  ] });
}, t$ = ({
  content: e,
  title: t,
  variant: r = "description",
  align: n = "left",
  color: i,
  backgroundColor: o = "#ffffff"
}) => {
  const { ref: a, fs: l } = Ke(), s = {
    note: { fontSize: l(14), fontStyle: "italic", color: i || "#666", lineHeight: "1.6" },
    title: { fontSize: l(24), fontWeight: "bold", color: i || "#003357", lineHeight: "1.3" },
    description: { fontSize: l(16), color: i || "#333", lineHeight: "1.7" }
  };
  return /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    backgroundColor: o,
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: l(18), fontWeight: "bold", color: "#003357", textAlign: n }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { ...s[r], textAlign: n, whiteSpace: "pre-wrap" }, children: e })
  ] });
}, r$ = ({
  src: e,
  type: t,
  title: r,
  alt: n = "Media content",
  width: i = "100%",
  height: o = "auto",
  autoPlay: a = !1,
  controls: l = !0,
  loop: s = !1
}) => {
  const { ref: c, fs: u } = Ke();
  return /* @__PURE__ */ d.jsxs("div", { ref: c, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: u(18), fontWeight: "bold", color: "#003357" }, children: r }),
    /* @__PURE__ */ d.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }, children: t === "image" ? /* @__PURE__ */ d.jsx("img", { src: e, alt: n, style: { width: i, height: o, display: "block", objectFit: "cover" } }) : /* @__PURE__ */ d.jsx("video", { src: e, width: i, height: o, autoPlay: a, controls: l, loop: s, style: { display: "block" }, children: "Your browser does not support the video tag." }) })
  ] });
}, n$ = ({
  title: e,
  options: t = [],
  defaultValue: r,
  onChange: n,
  type: i = "dropdown",
  placeholder: o = "Select...",
  searchable: a = !1,
  clearable: l = !0,
  maxSelections: s,
  minValue: c = 0,
  maxValue: u = 100,
  step: f = 1
}) => {
  const [p, h] = B(r || (i === "multiselect" || i === "tags" ? [] : t[0]?.value || "")), [g, v] = B(""), [y, m] = B(/* @__PURE__ */ new Set()), [w, b] = B(r || { start: "", end: "" }), [x, j] = B(r || { min: c, max: u }), [S, C] = B(""), _ = er(() => !a || !g ? t : t.filter(
    (z) => z.label.toLowerCase().includes(g.toLowerCase())
  ), [t, g, a]), E = (z) => {
    h(z), n(z);
  }, T = (z) => {
    const L = Array.isArray(p) ? p : [], V = L.includes(z) ? L.filter((N) => N !== z) : s && L.length >= s ? L : [...L, z];
    h(V), n(V);
  }, D = () => {
    const z = i === "multiselect" || i === "tags" ? [] : "";
    h(z), n(z);
  }, k = (z) => {
    const L = new Set(y);
    L.has(z) ? L.delete(z) : L.add(z), m(L);
  }, W = (z, L) => {
    const V = { ...w, [z]: L };
    b(V), n(V);
  }, F = (z, L) => {
    const V = { ...x, [z]: L };
    j(V), n(V);
  }, Z = (z) => {
    if (!z.trim()) return;
    const L = Array.isArray(p) ? p : [];
    if (!L.includes(z)) {
      const V = [...L, z.trim()];
      h(V), n(V);
    }
    C("");
  }, q = (z) => {
    const V = (Array.isArray(p) ? p : []).filter((N) => N !== z);
    h(V), n(V);
  }, ie = (z, L = 0) => /* @__PURE__ */ d.jsx("div", { style: { marginLeft: L * 20 }, children: z.map((V) => /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        style: { display: "flex", alignItems: "center", padding: "8px", cursor: "pointer", borderRadius: "4px", backgroundColor: (Array.isArray(p) ? p.includes(V.value) : p === V.value) ? "#e6f2ff" : "transparent" },
        onClick: () => T(V.value),
        children: [
          V.children && /* @__PURE__ */ d.jsx("span", { onClick: (N) => {
            N.stopPropagation(), k(V.value);
          }, style: { marginRight: "8px", fontSize: "12px" }, children: y.has(V.value) ? "▼" : "▶" }),
          /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(V.value), onChange: () => {
          }, style: { marginRight: "8px" } }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: V.disabled ? "#999" : "#333" }, children: V.label }),
          V.count !== void 0 && /* @__PURE__ */ d.jsxs("span", { style: { marginLeft: "auto", fontSize: "12px", color: "#666" }, children: [
            "(",
            V.count,
            ")"
          ] })
        ]
      }
    ),
    V.children && y.has(V.value) && ie(V.children, L + 1)
  ] }, V.value)) });
  return /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      e && /* @__PURE__ */ d.jsx("h3", { style: { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: e }),
      l && (i === "multiselect" || i === "tags" ? Array.isArray(p) && p.length > 0 : p) && /* @__PURE__ */ d.jsx("button", { onClick: D, style: { padding: "4px 12px", fontSize: "12px", border: "none", borderRadius: "4px", backgroundColor: "#f0f0f0", color: "#666", cursor: "pointer" }, children: "Clear" })
    ] }),
    a && i !== "daterange" && i !== "numericrange" && /* @__PURE__ */ d.jsx("input", { type: "text", value: g, onChange: (z) => v(z.target.value), placeholder: "Search...", style: { width: "90%", padding: "10px", marginBottom: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "dropdown" && /* @__PURE__ */ d.jsxs("select", { value: p, onChange: (z) => E(z.target.value), style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: "#fff", color: "#333", cursor: "pointer", outline: "none" }, children: [
      o && /* @__PURE__ */ d.jsx("option", { value: "", children: o }),
      _.map((z) => /* @__PURE__ */ d.jsxs("option", { value: z.value, disabled: z.disabled, children: [
        z.label,
        " ",
        z.count !== void 0 && `(${z.count})`
      ] }, z.value))
    ] }),
    i === "buttons" && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: _.map((z) => /* @__PURE__ */ d.jsxs("button", { onClick: () => E(z.value), disabled: z.disabled, style: { padding: "10px 20px", fontSize: "14px", fontWeight: "600", border: p === z.value ? "2px solid #003357" : "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: p === z.value ? "#003357" : "#fff", color: p === z.value ? "#fff" : "#333", cursor: z.disabled ? "not-allowed" : "pointer", opacity: z.disabled ? 0.5 : 1, transition: "all 0.2s" }, children: [
      z.label,
      " ",
      z.count !== void 0 && `(${z.count})`
    ] }, z.value)) }),
    i === "multiselect" && /* @__PURE__ */ d.jsx("div", { style: { maxHeight: "300px", overflowY: "auto", border: "1px solid #d0d0d0", borderRadius: "8px", padding: "8px" }, children: _.map((z) => /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", padding: "10px", cursor: z.disabled ? "not-allowed" : "pointer", borderRadius: "4px", transition: "background 0.2s", backgroundColor: Array.isArray(p) && p.includes(z.value) ? "#e6f2ff" : "transparent" }, children: [
      /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(z.value), onChange: () => T(z.value), disabled: z.disabled, style: { marginRight: "10px", cursor: z.disabled ? "not-allowed" : "pointer" } }),
      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: z.disabled ? "#999" : "#333", flex: 1 }, children: z.label }),
      z.count !== void 0 && /* @__PURE__ */ d.jsxs("span", { style: { fontSize: "12px", color: "#666" }, children: [
        "(",
        z.count,
        ")"
      ] })
    ] }, z.value)) }),
    i === "search" && /* @__PURE__ */ d.jsx("input", { type: "text", value: p, onChange: (z) => {
      h(z.target.value), n(z.target.value);
    }, placeholder: o, style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "daterange" && /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ d.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Start Date" }),
        /* @__PURE__ */ d.jsx("input", { type: "date", value: w.start, onChange: (z) => W("start", z.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] }),
      /* @__PURE__ */ d.jsx("span", { style: { marginTop: "20px", color: "#666" }, children: "—" }),
      /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ d.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "End Date" }),
        /* @__PURE__ */ d.jsx("input", { type: "date", value: w.end, onChange: (z) => W("end", z.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "numericrange" && /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#666" }, children: [
        /* @__PURE__ */ d.jsxs("span", { children: [
          "Min: ",
          x.min
        ] }),
        /* @__PURE__ */ d.jsxs("span", { children: [
          "Max: ",
          x.max
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ d.jsx("input", { type: "range", min: c, max: u, step: f, value: x.min, onChange: (z) => F("min", Number(z.target.value)), style: { flex: 1 } }),
        /* @__PURE__ */ d.jsx("input", { type: "range", min: c, max: u, step: f, value: x.max, onChange: (z) => F("max", Number(z.target.value)), style: { flex: 1 } })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "12px", marginTop: "12px" }, children: [
        /* @__PURE__ */ d.jsx("input", { type: "number", min: c, max: u, step: f, value: x.min, onChange: (z) => F("min", Number(z.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ d.jsx("input", { type: "number", min: c, max: u, step: f, value: x.max, onChange: (z) => F("max", Number(z.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "hierarchical" && ie(_),
    i === "tags" && /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", marginBottom: "12px" }, children: [
        /* @__PURE__ */ d.jsx("input", { type: "text", value: S, onChange: (z) => C(z.target.value), onKeyDown: (z) => z.key === "Enter" && Z(S), placeholder: "Add tag...", style: { flex: 1, padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ d.jsx("button", { onClick: () => Z(S), style: { padding: "10px 20px", fontSize: "14px", border: "none", borderRadius: "8px", backgroundColor: "#003357", color: "#fff", cursor: "pointer" }, children: "Add" })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: Array.isArray(p) && p.map((z) => /* @__PURE__ */ d.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", fontSize: "14px", backgroundColor: "#e6f2ff", color: "#003357", borderRadius: "16px" }, children: [
        z,
        /* @__PURE__ */ d.jsx("button", { onClick: () => q(z), style: { border: "none", background: "none", color: "#003357", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }, children: "×" })
      ] }, z)) })
    ] }),
    (i === "multiselect" || i === "hierarchical") && Array.isArray(p) && p.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { marginTop: "12px", padding: "8px", backgroundColor: "#f5f5f5", borderRadius: "8px", fontSize: "12px", color: "#666" }, children: [
      "Selected: ",
      p.length,
      " ",
      s && `/ ${s}`
    ] })
  ] });
}, i$ = ({
  alerts: e,
  title: t,
  maxHeight: r = 400,
  onDismiss: n
}) => {
  const { ref: i, fs: o } = Ke(), a = {
    success: { bg: "#d4edda", border: "#28a745", icon: "✓" },
    warning: { bg: "#fff3cd", border: "#ffc107", icon: "⚠" },
    error: { bg: "#f8d7da", border: "#dc3545", icon: "✕" },
    info: { bg: "#d1ecf1", border: "#17a2b8", icon: "ℹ" }
  };
  return /* @__PURE__ */ d.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: o(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: e.length === 0 ? /* @__PURE__ */ d.jsx("p", { style: { color: "#666", textAlign: "center", padding: "20px", fontSize: o(14) }, children: "No alerts" }) : /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: e.map((l) => {
      const s = a[l.type];
      return /* @__PURE__ */ d.jsxs(
        "div",
        {
          style: {
            padding: "16px",
            backgroundColor: s.bg,
            border: `1px solid ${s.border}`,
            borderLeft: `4px solid ${s.border}`,
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            opacity: l.read ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: o(18), fontWeight: "bold" }, children: s.icon }),
            /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ d.jsx("div", { style: { fontSize: o(14), color: "#333", marginBottom: "4px" }, children: l.message }),
              /* @__PURE__ */ d.jsx("div", { style: { fontSize: o(12), color: "#666" }, children: l.timestamp })
            ] }),
            n && /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: () => n(l.id),
                style: { background: "none", border: "none", fontSize: o(18), cursor: "pointer", color: "#666", padding: "0 4px" },
                children: "×"
              }
            )
          ]
        },
        l.id
      );
    }) }) })
  ] });
};
let N2 = 0;
const Uo = [], o$ = (e, t = "info", r = 3e3) => {
  const n = { id: `toast-${++N2}`, message: e, type: t, duration: r };
  Uo.forEach((i) => i(n));
}, a$ = ({ position: e = "top-right", maxToasts: t = 5 }) => {
  const [r, n] = B([]), i = Ee((c) => {
    n((u) => [c, ...u].slice(0, t)), c.duration && setTimeout(() => o(c.id), c.duration);
  }, [t]), o = (c) => {
    n((u) => u.filter((f) => f.id !== c));
  };
  Se(() => (Uo.push(i), () => {
    const c = Uo.indexOf(i);
    c > -1 && Uo.splice(c, 1);
  }), [i]);
  const a = () => {
    const c = { position: "fixed", zIndex: 9999, display: "flex", flexDirection: "column", gap: "12px", padding: "16px" };
    switch (e) {
      case "top-left":
        return { ...c, top: 0, left: 0 };
      case "top-right":
        return { ...c, top: 0, right: 0 };
      case "bottom-left":
        return { ...c, bottom: 0, left: 0 };
      case "bottom-right":
        return { ...c, bottom: 0, right: 0 };
      case "top-center":
        return { ...c, top: 0, left: "50%", transform: "translateX(-50%)" };
      case "bottom-center":
        return { ...c, bottom: 0, left: "50%", transform: "translateX(-50%)" };
      default:
        return { ...c, top: 0, right: 0 };
    }
  }, l = (c) => ({ backgroundColor: {
    success: { bg: "#10b981", icon: "✓" },
    error: { bg: "#ef4444", icon: "✕" },
    warning: { bg: "#f59e0b", icon: "⚠" },
    info: { bg: "#3b82f6", icon: "ℹ" }
  }[c].bg }), s = (c) => ({ success: "✓", error: "✕", warning: "⚠", info: "ℹ" })[c];
  return /* @__PURE__ */ d.jsxs("div", { style: a(), children: [
    r.map((c) => /* @__PURE__ */ d.jsxs("div", { style: { ...l(c.type), color: "#fff", padding: "12px 16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "12px", minWidth: "300px", maxWidth: "500px", animation: "slideIn 0.3s ease-out", fontFamily: "Arial, sans-serif" }, children: [
      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "18px", fontWeight: "bold" }, children: s(c.type) }),
      /* @__PURE__ */ d.jsx("span", { style: { flex: 1, fontSize: "14px" }, children: c.message }),
      /* @__PURE__ */ d.jsx("button", { onClick: () => o(c.id), style: { background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px", padding: 0, lineHeight: 1 }, children: "×" })
    ] }, c.id)),
    /* @__PURE__ */ d.jsx("style", { children: `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      ` })
  ] });
}, l$ = ({
  locations: e,
  title: t,
  height: r = 400,
  centerLat: n,
  centerLng: i,
  zoom: o = 12,
  bubbleScale: a = 1,
  showLabels: l = !0,
  mapStyle: s = "default"
}) => {
  const c = ge(null), u = ge(null), f = ge([]), { ref: p, fs: h } = Ke(), g = {
    lat: n ?? (e.length > 0 ? e.reduce((y, m) => y + m.lat, 0) / e.length : 51.5074),
    lng: i ?? (e.length > 0 ? e.reduce((y, m) => y + m.lng, 0) / e.length : -0.1278)
  }, v = (y) => {
    const m = Math.max(...e.map((x) => x.value)), w = 40;
    return (w + y / m * (100 - w)) * a;
  };
  return Se(() => {
    const y = () => {
      if (window.L) {
        m();
        return;
      }
      const w = document.createElement("link");
      w.rel = "stylesheet", w.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(w);
      const b = document.createElement("script");
      b.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", b.async = !0, b.onload = m, document.head.appendChild(b);
    }, m = () => {
      if (!c.current || !window.L || u.current) return;
      const w = s === "satellite" ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : s === "terrain" ? "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      u.current = window.L.map(c.current).setView([g.lat, g.lng], o), window.L.tileLayer(w, {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(u.current), f.current.forEach((b) => b.remove()), f.current = [], e.forEach((b) => {
        const x = v(b.value), j = b.color || "#0066a1", S = window.L.divIcon({
          className: "custom-bubble-marker",
          html: `
            <div style="position: relative; width: ${x}px; height: ${x}px; margin-left: -${x / 2}px; margin-top: -${x / 2}px;">
              <div class="bubble-circle" style="width: ${x}px; height: ${x}px; border-radius: 50%; background-color: ${j}; opacity: 0.7; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: transform 0.3s;">
                <span style="color: #fff; font-size: ${x / 3.5}px; font-weight: bold; font-family: Arial, sans-serif;">${b.value >= 10 ? `${b.value}+` : b.value}</span>
              </div>
              ${l && b.label ? `<div style="position: absolute; top: ${x}px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #333; font-size: 12px; font-weight: 600; text-shadow: 0 0 3px #fff, 0 0 3px #fff; font-family: Arial, sans-serif;">${b.label}</div>` : ""}
            </div>
          `,
          iconSize: [x, x],
          iconAnchor: [x / 2, x / 2]
        }), C = window.L.marker([b.lat, b.lng], { icon: S });
        C.bindTooltip(`${b.label || `Location ${b.id}`}: ${b.value}`, {
          direction: "top",
          offset: [0, -x / 2],
          className: "custom-tooltip"
        }), C.on("mouseover", function(_) {
          const E = _.target.getElement()?.querySelector(".bubble-circle");
          E && (E.style.transform = "scale(1.1)");
        }), C.on("mouseout", function(_) {
          const E = _.target.getElement()?.querySelector(".bubble-circle");
          E && (E.style.transform = "scale(1)");
        }), C.addTo(u.current), f.current.push(C);
      });
    };
    return y(), () => {
      u.current && (u.current.remove(), u.current = null);
    };
  }, [e, g.lat, g.lng, o, s, a, l]), /* @__PURE__ */ d.jsxs("div", { ref: p, style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: h(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0", width: "100%", height: r }, children: /* @__PURE__ */ d.jsx("div", { ref: c, style: { width: "100%", height: "100%" } }) }),
    /* @__PURE__ */ d.jsx("style", { children: `
        .custom-bubble-marker {
          background: none;
          border: none;
        }
        .custom-tooltip {
          background: rgba(51,51,51,0.9);
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .leaflet-tooltip-top:before {
          border-top-color: rgba(51,51,51,0.9);
        }
      ` }),
    e.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { marginTop: "16px", display: "flex", gap: "16px", flexWrap: "wrap", fontSize: h(12), color: "#666" }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#0066a1" } }),
        /* @__PURE__ */ d.jsxs("span", { children: [
          "Total Locations: ",
          e.length
        ] })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ d.jsxs("span", { children: [
        "Total Count: ",
        e.reduce((y, m) => y + m.value, 0)
      ] }) })
    ] })
  ] });
};
function $2(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16),
    parseInt(t.substring(2, 4), 16),
    parseInt(t.substring(4, 6), 16)
  ];
}
function z2(e, t) {
  const [r, n, i] = $2(e), o = [...t].sort((s, c) => s.value - c.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((s, c) => {
    const u = a === 1 ? 0.5 : c / (a - 1), f = (h) => Math.round(220 - u * (220 - h)), p = (h) => f(h).toString(16).padStart(2, "0");
    l.set(s, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((s) => l.get(s));
}
const xr = (e) => e * Math.PI / 180;
function Af(e, t) {
  const r = [...e].sort((i, o) => i.y - o.y);
  for (let i = 1; i < r.length; i++)
    r[i].y - r[i - 1].y < t && (r[i].y = r[i - 1].y + t);
  for (let i = r.length - 2; i >= 0; i--)
    r[i + 1].y - r[i].y < t && (r[i].y = r[i + 1].y - t);
  const n = new Array(e.length);
  return r.forEach((i) => {
    n[i.idx] = i.y;
  }), n;
}
const Oo = 28, Tf = 24, If = 15, L2 = 20, B2 = ({ data: e, title: t, total: r, baseColor: n, className: i }) => {
  const { ref: o, width: a, height: l, fs: s } = Ke(), [c, u] = B(null), f = a || 600, p = f, h = Math.max(160, f * 0.28), g = Math.min(f / 2 - h, 120), v = g * 0.52, y = g + L2, m = n ? z2(n, e) : null, w = e.reduce((ee, he) => ee + he.value, 0), b = r ?? w, x = p / 2, j = p / 2;
  let S = -90;
  const C = e.map((ee, he) => {
    const se = ee.value / w * 100, de = ee.value / w * 360, Q = de === 360 ? 359.99 : de, G = S, le = S + Q, K = xr(G + Q / 2), Me = Math.cos(K) >= 0, me = m ? m[he] : ee.color ?? "#4a90e2", I = x + y * Math.cos(K), U = j + y * Math.sin(K);
    return S = le, { ...ee, pct: se, sweep: Q, start: G, end: le, mid: K, isRight: Me, ex: I, ey: U, color: me, idx: he };
  }), _ = C.filter((ee) => ee.isRight), E = C.filter((ee) => !ee.isRight), T = Af(_.map((ee, he) => ({ idx: he, y: ee.ey })), Tf), D = Af(E.map((ee, he) => ({ idx: he, y: ee.ey })), Tf);
  let k = 0, W = 0;
  const F = C.map((ee) => {
    const he = ee.isRight ? T[k++] : D[W++];
    return { ...ee, labelY: he };
  }), Z = F.map((ee) => ee.labelY), q = Math.min(...Z) - Oo, ie = Math.max(...Z) + Oo, z = q < 0 ? -q : 0, L = x, V = j + z, N = Math.min(q + z, V - g - Oo), J = Math.max(ie + z, V + g + Oo) - N;
  S = -90;
  const X = e.map((ee, he) => {
    const se = F[he], de = se.sweep, Q = S, G = S + de, le = se.mid, K = L + g * Math.cos(xr(Q)), Me = V + g * Math.sin(xr(Q)), me = L + g * Math.cos(xr(G)), I = V + g * Math.sin(xr(G)), U = L + v * Math.cos(xr(G)), H = V + v * Math.sin(xr(G)), ve = L + v * Math.cos(xr(Q)), Te = V + v * Math.sin(xr(Q)), Ce = de > 180 ? 1 : 0, fe = `M ${K} ${Me} A ${g} ${g} 0 ${Ce} 1 ${me} ${I} L ${U} ${H} A ${v} ${v} 0 ${Ce} 0 ${ve} ${Te} Z`, yt = L + (g + 2) * Math.cos(le), Gt = V + (g + 2) * Math.sin(le), nr = g + 30, Gr = Math.max(g + 50, w * 1.5), di = Math.max(V - Gr + 5, Math.min(V + Gr - 5, se.labelY + z)), fi = (di - V) / Gr, Xr = L + nr * Math.sqrt(Math.max(0, 1 - fi * fi)) * (se.isRight ? 1 : -1), xo = Xr + (se.isRight ? If : -If), An = se.isRight ? "start" : "end", Wl = xo + (se.isRight ? 5 : -5);
    return S = G, { ...se, path: fe, lineStartX: yt, lineStartY: Gt, ellipseX: Xr, labelY: di, lx2: xo, textAnchor: An, textX: Wl };
  });
  return /* @__PURE__ */ d.jsxs("div", { ref: o, className: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    height: l > 0 ? "100%" : "auto",
    minHeight: "250px",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ d.jsxs("svg", { width: p, height: J, viewBox: `0 ${N} ${p} ${J}`, style: { overflow: "visible", display: "block" }, children: [
        e.length === 1 ? /* @__PURE__ */ d.jsxs(
          "g",
          {
            onMouseEnter: (ee) => u({ x: ee.clientX, y: ee.clientY, label: X[0].label, value: X[0].value, pct: 100 }),
            onMouseMove: (ee) => u((he) => he ? { ...he, x: ee.clientX, y: ee.clientY } : null),
            onMouseLeave: () => u(null),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ d.jsx("circle", { cx: L, cy: V, r: g, fill: X[0].color, stroke: "#fff", strokeWidth: "2" }),
              /* @__PURE__ */ d.jsx("circle", { cx: L, cy: V, r: v, fill: "#fff" })
            ]
          }
        ) : X.map((ee, he) => /* @__PURE__ */ d.jsx(
          "g",
          {
            onMouseEnter: (se) => u({ x: se.clientX, y: se.clientY, label: ee.label, value: ee.value, pct: ee.pct }),
            onMouseMove: (se) => u((de) => de ? { ...de, x: se.clientX, y: se.clientY } : null),
            onMouseLeave: () => u(null),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ d.jsx("path", { d: ee.path, fill: ee.color, stroke: "#fff", strokeWidth: "2" })
          },
          he
        )),
        /* @__PURE__ */ d.jsx(
          "text",
          {
            x: L,
            y: V - 8,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: s(13),
            fontWeight: "600",
            children: "TOTAL"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "text",
          {
            x: L,
            y: V + 10,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: s(13),
            fontWeight: "700",
            children: b.toLocaleString("en-IN")
          }
        ),
        X.map((ee, he) => /* @__PURE__ */ d.jsxs("g", { children: [
          /* @__PURE__ */ d.jsx(
            "polyline",
            {
              points: `${ee.lineStartX},${ee.lineStartY} ${ee.ellipseX},${ee.labelY} ${ee.lx2},${ee.labelY}`,
              stroke: ee.color,
              strokeWidth: "1.2",
              fill: "none",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ d.jsxs(
            "text",
            {
              x: ee.textX,
              y: ee.labelY,
              textAnchor: ee.textAnchor,
              dominantBaseline: "middle",
              fill: "#2c3e50",
              fontSize: s(11),
              fontWeight: "600",
              children: [
                ee.label,
                ": ",
                ee.value.toLocaleString("en-IN")
              ]
            }
          )
        ] }, `label-${he}`))
      ] }),
      c && /* @__PURE__ */ d.jsxs("div", { style: {
        position: "fixed",
        left: c.x + 12,
        top: c.y - 10,
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: s(12),
        pointerEvents: "none",
        zIndex: 1e3,
        whiteSpace: "nowrap"
      }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: c.label }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          "Value: ",
          c.value.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          "Percentage: ",
          c.pct.toFixed(1),
          "%"
        ] })
      ] })
    ] })
  ] });
}, Mf = ["#3b5fc0", "#2a9d5c", "#8b3fc8", "#e07b00"], s$ = ({
  title: e,
  data: t,
  columns: r = 2,
  backgroundColor: n = "#f0f2f5",
  color: i
}) => {
  const o = Array.isArray(t) ? t.map((c) => ({ ...c, label: c.label.replace(/_/g, " ") })) : Object.entries(t).map(([c, u]) => ({
    label: c.replace(/_/g, " "),
    value: u
  })), { ref: a, fs: l } = Ke(), s = (c) => c === 0 || c === "0" || c === null || c === void 0 || c === "";
  return /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    backgroundColor: n,
    borderRadius: "16px",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    e && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 12px 0", fontSize: l(12), fontWeight: "bold", color: "#003357" }, children: e }),
    /* @__PURE__ */ d.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${r}, 1fr)`,
      gap: "10px"
    }, children: o.map((c, u) => {
      const f = !s(c.value), p = c.details ? Object.entries(c.details).filter(([, h]) => !s(h)) : [];
      return /* @__PURE__ */ d.jsxs("div", { style: {
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "14px 16px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
      }, children: [
        f && /* @__PURE__ */ d.jsx("div", { style: { fontSize: l(28), fontWeight: "bold", color: i ?? Mf[u % Mf.length], lineHeight: 1 }, children: c.value }),
        /* @__PURE__ */ d.jsx("div", { style: { fontSize: l(11), color: "#999", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: f ? "6px" : "0px" }, children: c.label }),
        p.length > 0 && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px", borderTop: "1px solid #f0f0f0", paddingTop: "10px" }, children: p.map(([h, g]) => /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "#f4f6f8", padding: "3px 6px", borderRadius: "4px", fontSize: l(10), color: "#475569" }, children: [
          /* @__PURE__ */ d.jsxs("strong", { style: { color: "#0f172a" }, children: [
            h.replace(/_/g, " "),
            ":"
          ] }),
          " ",
          String(g)
        ] }, h)) })
      ] }, u);
    }) })
  ] });
};
function U0(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = U0(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Pe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = U0(e)) && (n && (n += " "), n += t);
  return n;
}
var W2 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function ju(e) {
  if (typeof e != "string")
    return !1;
  var t = W2;
  return t.includes(e);
}
var F2 = [
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
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
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
  "angle"
], V2 = new Set(F2);
function Y0(e) {
  return typeof e != "string" ? !1 : V2.has(e);
}
function G0(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function Ht(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Y0(r) || G0(r)) && (t[r] = e[r]);
  return t;
}
function Xi(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Dt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return Ht(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? Ht(e) : null;
}
function vt(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Y0(r) || G0(r) || ju(r)) && (t[r] = e[r]);
  return t;
}
function K2(e) {
  return e == null ? null : /* @__PURE__ */ Dt(e) ? vt(e.props) : typeof e == "object" && !Array.isArray(e) ? vt(e) : null;
}
var H2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oc.apply(null, arguments);
}
function q2(e, t) {
  if (e == null) return {};
  var r, n, i = U2(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function U2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var X0 = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: o,
    className: a,
    style: l,
    title: s,
    desc: c
  } = e, u = q2(e, H2), f = o || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, p = Pe("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", Oc({}, vt(u), {
    className: p,
    width: n,
    height: i,
    style: l,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ P.createElement("title", null, s), /* @__PURE__ */ P.createElement("desc", null, c), r);
}), Y2 = ["children", "className"];
function Pc() {
  return Pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pc.apply(null, arguments);
}
function G2(e, t) {
  if (e == null) return {};
  var r, n, i = X2(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function X2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ct = /* @__PURE__ */ P.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = G2(e, Y2), o = Pe("recharts-layer", n);
  return /* @__PURE__ */ P.createElement("g", Pc({
    className: o
  }, vt(i), {
    ref: t
  }), r);
}), Z2 = /* @__PURE__ */ At(null);
function Ie(e) {
  return function() {
    return e;
  };
}
const Z0 = Math.cos, ea = Math.sin, tr = Math.sqrt, ta = Math.PI, Xa = 2 * ta, Cc = Math.PI, kc = 2 * Cc, tn = 1e-6, J2 = kc - tn;
function J0(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Q2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return J0;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, o = n.length; i < o; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class ej {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? J0 : Q2(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, o, a) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, r, n, i, o) {
    if (t = +t, r = +r, n = +n, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, l = this._y1, s = n - t, c = i - r, u = a - t, f = l - r, p = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > tn) if (!(Math.abs(f * s - c * u) > tn) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - a, g = i - l, v = s * s + c * c, y = h * h + g * g, m = Math.sqrt(v), w = Math.sqrt(p), b = o * Math.tan((Cc - Math.acos((v + p - y) / (2 * m * w))) / 2), x = b / w, j = b / m;
      Math.abs(x - 1) > tn && this._append`L${t + x * u},${r + x * f}`, this._append`A${o},${o},0,0,${+(f * h > u * g)},${this._x1 = t + j * s},${this._y1 = r + j * c}`;
    }
  }
  arc(t, r, n, i, o, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i), s = n * Math.sin(i), c = t + l, u = r + s, f = 1 ^ a, p = a ? i - o : o - i;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > tn || Math.abs(this._y1 - u) > tn) && this._append`L${c},${u}`, n && (p < 0 && (p = p % kc + kc), p > J2 ? this._append`A${n},${n},0,1,${f},${t - l},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = u}` : p > tn && this._append`A${n},${n},0,${+(p >= Cc)},${f},${this._x1 = t + n * Math.cos(o)},${this._y1 = r + n * Math.sin(o)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Su(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new ej(t);
}
function Ou(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Q0(e) {
  this._context = e;
}
Q0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Za(e) {
  return new Q0(e);
}
function ey(e) {
  return e[0];
}
function ty(e) {
  return e[1];
}
function ry(e, t) {
  var r = Ie(!0), n = null, i = Za, o = null, a = Su(l);
  e = typeof e == "function" ? e : e === void 0 ? ey : Ie(e), t = typeof t == "function" ? t : t === void 0 ? ty : Ie(t);
  function l(s) {
    var c, u = (s = Ou(s)).length, f, p = !1, h;
    for (n == null && (o = i(h = a())), c = 0; c <= u; ++c)
      !(c < u && r(f = s[c], c, s)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()), p && o.point(+e(f, c, s), +t(f, c, s));
    if (h) return o = null, h + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Ie(+s), l) : e;
  }, l.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Ie(+s), l) : t;
  }, l.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Ie(!!s), l) : r;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, n != null && (o = i(n)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? n = o = null : o = i(n = s), l) : n;
  }, l;
}
function Po(e, t, r) {
  var n = null, i = Ie(!0), o = null, a = Za, l = null, s = Su(c);
  e = typeof e == "function" ? e : e === void 0 ? ey : Ie(+e), t = typeof t == "function" ? t : Ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? ty : Ie(+r);
  function c(f) {
    var p, h, g, v = (f = Ou(f)).length, y, m = !1, w, b = new Array(v), x = new Array(v);
    for (o == null && (l = a(w = s())), p = 0; p <= v; ++p) {
      if (!(p < v && i(y = f[p], p, f)) === m)
        if (m = !m)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), g = p - 1; g >= h; --g)
            l.point(b[g], x[g]);
          l.lineEnd(), l.areaEnd();
        }
      m && (b[p] = +e(y, p, f), x[p] = +t(y, p, f), l.point(n ? +n(y, p, f) : b[p], r ? +r(y, p, f) : x[p]));
    }
    if (w) return l = null, w + "" || null;
  }
  function u() {
    return ry().defined(i).curve(a).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ie(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ie(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ie(!!f), c) : i;
  }, c.curve = function(f) {
    return arguments.length ? (a = f, o != null && (l = a(o)), c) : a;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = a(o = f), c) : o;
  }, c;
}
class ny {
  constructor(t, r) {
    this._context = t, this._x = r;
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
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function tj(e) {
  return new ny(e, !0);
}
function rj(e) {
  return new ny(e, !1);
}
const Pu = {
  draw(e, t) {
    const r = tr(t / ta);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Xa);
  }
}, nj = {
  draw(e, t) {
    const r = tr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, iy = tr(1 / 3), ij = iy * 2, oj = {
  draw(e, t) {
    const r = tr(t / ij), n = r * iy;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, aj = {
  draw(e, t) {
    const r = tr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, lj = 0.8908130915292852, oy = ea(ta / 10) / ea(7 * ta / 10), sj = ea(Xa / 10) * oy, cj = -Z0(Xa / 10) * oy, uj = {
  draw(e, t) {
    const r = tr(t * lj), n = sj * r, i = cj * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let o = 1; o < 5; ++o) {
      const a = Xa * o / 5, l = Z0(a), s = ea(a);
      e.lineTo(s * r, -l * r), e.lineTo(l * n - s * i, s * n + l * i);
    }
    e.closePath();
  }
}, Hl = tr(3), dj = {
  draw(e, t) {
    const r = -tr(t / (Hl * 3));
    e.moveTo(0, r * 2), e.lineTo(-Hl * r, -r), e.lineTo(Hl * r, -r), e.closePath();
  }
}, Bt = -0.5, Wt = tr(3) / 2, _c = 1 / tr(12), fj = (_c / 2 + 1) * 3, pj = {
  draw(e, t) {
    const r = tr(t / fj), n = r / 2, i = r * _c, o = n, a = r * _c + r, l = -o, s = a;
    e.moveTo(n, i), e.lineTo(o, a), e.lineTo(l, s), e.lineTo(Bt * n - Wt * i, Wt * n + Bt * i), e.lineTo(Bt * o - Wt * a, Wt * o + Bt * a), e.lineTo(Bt * l - Wt * s, Wt * l + Bt * s), e.lineTo(Bt * n + Wt * i, Bt * i - Wt * n), e.lineTo(Bt * o + Wt * a, Bt * a - Wt * o), e.lineTo(Bt * l + Wt * s, Bt * s - Wt * l), e.closePath();
  }
};
function hj(e, t) {
  let r = null, n = Su(i);
  e = typeof e == "function" ? e : Ie(e || Pu), t = typeof t == "function" ? t : Ie(t === void 0 ? 64 : +t);
  function i() {
    let o;
    if (r || (r = o = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), o) return r = null, o + "" || null;
  }
  return i.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(o), i) : e;
  }, i.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Ie(+o), i) : t;
  }, i.context = function(o) {
    return arguments.length ? (r = o ?? null, i) : r;
  }, i;
}
function ra() {
}
function na(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function ay(e) {
  this._context = e;
}
ay.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        na(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        na(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function vj(e) {
  return new ay(e);
}
function ly(e) {
  this._context = e;
}
ly.prototype = {
  areaStart: ra,
  areaEnd: ra,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        na(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function gj(e) {
  return new ly(e);
}
function sy(e) {
  this._context = e;
}
sy.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        na(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function yj(e) {
  return new sy(e);
}
function cy(e) {
  this._context = e;
}
cy.prototype = {
  areaStart: ra,
  areaEnd: ra,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function mj(e) {
  return new cy(e);
}
function Df(e) {
  return e < 0 ? -1 : 1;
}
function Rf(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, o = (e._y1 - e._y0) / (n || i < 0 && -0), a = (r - e._y1) / (i || n < 0 && -0), l = (o * i + a * n) / (n + i);
  return (Df(o) + Df(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
function Nf(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ql(e, t, r) {
  var n = e._x0, i = e._y0, o = e._x1, a = e._y1, l = (o - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, o - l, a - l * r, o, a);
}
function ia(e) {
  this._context = e;
}
ia.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ql(this, this._t0, Nf(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ql(this, Nf(this, r = Rf(this, e, t)), r);
          break;
        default:
          ql(this, this._t0, r = Rf(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function uy(e) {
  this._context = new dy(e);
}
(uy.prototype = Object.create(ia.prototype)).point = function(e, t) {
  ia.prototype.point.call(this, t, e);
};
function dy(e) {
  this._context = e;
}
dy.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, o) {
    this._context.bezierCurveTo(t, e, n, r, o, i);
  }
};
function xj(e) {
  return new ia(e);
}
function bj(e) {
  return new uy(e);
}
function fy(e) {
  this._context = e;
}
fy.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = $f(e), i = $f(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(n[0][o], i[0][o], n[1][o], i[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function $f(e) {
  var t, r = e.length - 1, n, i = new Array(r), o = new Array(r), a = new Array(r);
  for (i[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / o[t - 1], o[t] -= n, a[t] -= n * a[t - 1];
  for (i[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - i[t + 1];
  return [i, o];
}
function wj(e) {
  return new fy(e);
}
function Ja(e, t) {
  this._context = e, this._t = t;
}
Ja.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function jj(e) {
  return new Ja(e, 0.5);
}
function Sj(e) {
  return new Ja(e, 0);
}
function Oj(e) {
  return new Ja(e, 1);
}
function vn(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, i, o = e[t[0]], a, l = o.length; r < a; ++r)
      for (i = o, o = e[t[r]], n = 0; n < l; ++n)
        o[n][1] += o[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Ec(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Pj(e, t) {
  return e[t];
}
function Cj(e) {
  const t = [];
  return t.key = e, t;
}
function kj() {
  var e = Ie([]), t = Ec, r = vn, n = Pj;
  function i(o) {
    var a = Array.from(e.apply(this, arguments), Cj), l, s = a.length, c = -1, u;
    for (const f of o)
      for (l = 0, ++c; l < s; ++l)
        (a[l][c] = [0, +n(f, a[l].key, c, o)]).data = f;
    for (l = 0, u = Ou(t(a)); l < s; ++l)
      a[u[l]].index = l;
    return r(a, u), a;
  }
  return i.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(Array.from(o)), i) : e;
  }, i.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Ie(+o), i) : n;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? Ec : typeof o == "function" ? o : Ie(Array.from(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (r = o ?? vn, i) : r;
  }, i;
}
function _j(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, o = e[0].length, a; i < o; ++i) {
      for (a = r = 0; r < n; ++r) a += e[r][i][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][i][1] /= a;
    }
    vn(e, t);
  }
}
function Ej(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, o = n.length; r < o; ++r) {
      for (var a = 0, l = 0; a < i; ++a) l += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    vn(e, t);
  }
}
function Aj(e, t) {
  if (!(!((a = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, o, a; n < o; ++n) {
      for (var l = 0, s = 0, c = 0; l < a; ++l) {
        for (var u = e[t[l]], f = u[n][1] || 0, p = u[n - 1][1] || 0, h = (f - p) / 2, g = 0; g < l; ++g) {
          var v = e[t[g]], y = v[n][1] || 0, m = v[n - 1][1] || 0;
          h += y - m;
        }
        s += f, c += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, vn(e, t);
  }
}
var Ul = {}, Yl = {}, zf;
function Tj() {
  return zf || (zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Yl)), Yl;
}
var Gl = {}, Lf;
function py() {
  return Lf || (Lf = 1, (function(e) {
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
  })(Gl)), Gl;
}
var Xl = {}, Bf;
function Cu() {
  return Bf || (Bf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(Xl)), Xl;
}
var Zl = {}, Jl = {}, Wf;
function Ij() {
  return Wf || (Wf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(Jl)), Jl;
}
var Ff;
function ku() {
  return Ff || (Ff = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ij(), r = /* @__PURE__ */ Cu();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const o = [], a = i.length;
      if (a === 0)
        return o;
      let l = 0, s = "", c = "", u = !1;
      for (i.charCodeAt(0) === 46 && (o.push(""), l++); l < a; ) {
        const f = i[l];
        c ? f === "\\" && l + 1 < a ? (l++, s += i[l]) : f === c ? c = "" : s += f : u ? f === '"' || f === "'" ? c = f : f === "]" ? (u = !1, o.push(s), s = "") : s += f : f === "[" ? (u = !0, s && (o.push(s), s = "")) : f === "." ? s && (o.push(s), s = "") : s += f, l++;
      }
      return s && o.push(s), o;
    }
    e.toPath = n;
  })(Zl)), Zl;
}
var Vf;
function _u() {
  return Vf || (Vf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Tj(), r = /* @__PURE__ */ py(), n = /* @__PURE__ */ Cu(), i = /* @__PURE__ */ ku();
    function o(l, s, c) {
      if (l == null)
        return c;
      switch (typeof s) {
        case "string": {
          if (t.isUnsafeProperty(s))
            return c;
          const u = l[s];
          return u === void 0 ? r.isDeepKey(s) ? o(l, i.toPath(s), c) : c : u;
        }
        case "number":
        case "symbol": {
          typeof s == "number" && (s = n.toKey(s));
          const u = l[s];
          return u === void 0 ? c : u;
        }
        default: {
          if (Array.isArray(s))
            return a(l, s, c);
          if (Object.is(s?.valueOf(), -0) ? s = "-0" : s = String(s), t.isUnsafeProperty(s))
            return c;
          const u = l[s];
          return u === void 0 ? c : u;
        }
      }
    }
    function a(l, s, c) {
      if (s.length === 0)
        return c;
      let u = l;
      for (let f = 0; f < s.length; f++) {
        if (u == null || t.isUnsafeProperty(s[f]))
          return c;
        u = u[s[f]];
      }
      return u === void 0 ? c : u;
    }
    e.get = o;
  })(Ul)), Ul;
}
var Ql, Kf;
function Mj() {
  return Kf || (Kf = 1, Ql = _u().get), Ql;
}
var Dj = /* @__PURE__ */ Mj();
const qn = /* @__PURE__ */ On(Dj);
var Rj = 4;
function Wr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rj, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function Ve(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, o, a) => {
    var l = r[a - 1];
    return typeof l == "string" ? i + l + o : l !== void 0 ? i + Wr(l) + o : i + o;
  }, "");
}
var Ct = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Zt = (e) => typeof e == "number" && e != +e, gn = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, ne = (e) => (typeof e == "number" || e instanceof Number) && !Zt(e), qt = (e) => ne(e) || typeof e == "string", Nj = 0, Di = (e) => {
  var t = ++Nj;
  return "".concat(e || "").concat(t);
}, Jt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!ne(t) && typeof t != "string")
    return n;
  var o;
  if (gn(t)) {
    if (r == null)
      return n;
    var a = t.indexOf("%");
    o = r * parseFloat(t.slice(0, a)) / 100;
  } else
    o = +t;
  return Zt(o) && (o = n), i && r != null && o > r && (o = r), o;
}, hy = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function ze(e, t, r) {
  return ne(e) && ne(t) ? Wr(e + r * (t - e)) : t;
}
function vy(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : qn(n, t)) === r);
}
var Be = (e) => e === null || typeof e > "u", Zi = (e) => Be(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function kt(e) {
  return e != null;
}
function Pn() {
}
var $j = ["type", "size", "sizeType"];
function Ac() {
  return Ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ac.apply(null, arguments);
}
function Hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hf(Object(r), !0).forEach(function(n) {
      zj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zj(e, t, r) {
  return (t = Lj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lj(e) {
  var t = Bj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Bj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wj(e, t) {
  if (e == null) return {};
  var r, n, i = Fj(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Fj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var gy = {
  symbolCircle: Pu,
  symbolCross: nj,
  symbolDiamond: oj,
  symbolSquare: aj,
  symbolStar: uj,
  symbolTriangle: dj,
  symbolWye: pj
}, Vj = Math.PI / 180, Kj = (e) => {
  var t = "symbol".concat(Zi(e));
  return gy[t] || Pu;
}, Hj = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * Vj;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, qj = (e, t) => {
  gy["symbol".concat(Zi(e))] = t;
}, yy = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = Wj(e, $j), o = qf(qf({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), a = "circle";
  typeof t == "string" && (a = t);
  var l = () => {
    var p = Kj(a), h = hj().type(p).size(Hj(r, n, a)), g = h();
    if (g !== null)
      return g;
  }, {
    className: s,
    cx: c,
    cy: u
  } = o, f = vt(o);
  return ne(c) && ne(u) && ne(r) ? /* @__PURE__ */ P.createElement("path", Ac({}, f, {
    className: Pe("recharts-symbols", s),
    transform: "translate(".concat(c, ", ").concat(u, ")"),
    d: l()
  })) : null;
};
yy.registerSymbol = qj;
var my = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, Eu = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Dt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    ju(i) && typeof r[i] == "function" && (n[i] = ((o) => r[i](r, o)));
  }), n;
}, Uj = (e, t, r) => (n) => (e(t, r, n), null), Au = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var o = e[i];
    ju(i) && typeof o == "function" && (n || (n = {}), n[i] = Uj(o, t, r));
  }), n;
};
function Uf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uf(Object(r), !0).forEach(function(n) {
      Gj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gj(e, t, r) {
  return (t = Xj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xj(e) {
  var t = Zj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Zj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jt(e, t) {
  var r = Yj({}, e), n = t, i = Object.keys(t), o = i.reduce((a, l) => (a[l] === void 0 && n[l] !== void 0 && (a[l] = n[l]), a), r);
  return o;
}
var es = {}, ts = {}, Yf;
function Jj() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let o = 0; o < r.length; o++) {
        const a = r[o], l = n(a, o, r);
        i.has(l) || i.set(l, a);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(ts)), ts;
}
var rs = {}, Gf;
function Qj() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(rs)), rs;
}
var ns = {}, Xf;
function xy() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(ns)), ns;
}
var is = {}, os = {}, as = {}, Zf;
function eS() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(as)), as;
}
var Jf;
function by() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eS();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(os)), os;
}
var ls = {}, Qf;
function tS() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(ls)), ls;
}
var ep;
function rS() {
  return ep || (ep = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ by(), r = /* @__PURE__ */ tS();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(is)), is;
}
var ss = {}, cs = {}, tp;
function nS() {
  return tp || (tp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ _u();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(cs)), cs;
}
var us = {}, ds = {}, fs = {}, ps = {}, rp;
function wy() {
  return rp || (rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(ps)), ps;
}
var hs = {}, np;
function jy() {
  return np || (np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(hs)), hs;
}
var vs = {}, ip;
function Sy() {
  return ip || (ip = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(vs)), vs;
}
var op;
function iS() {
  return op || (op = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ wy(), r = /* @__PURE__ */ jy(), n = /* @__PURE__ */ Sy();
    function i(u, f, p) {
      return typeof p != "function" ? i(u, f, () => {
      }) : o(u, f, function h(g, v, y, m, w, b) {
        const x = p(g, v, y, m, w, b);
        return x !== void 0 ? !!x : o(g, v, h, b);
      }, /* @__PURE__ */ new Map());
    }
    function o(u, f, p, h) {
      if (f === u)
        return !0;
      switch (typeof f) {
        case "object":
          return a(u, f, p, h);
        case "function":
          return Object.keys(f).length > 0 ? o(u, { ...f }, p, h) : n.isEqualsSameValueZero(u, f);
        default:
          return t.isObject(u) ? typeof f == "string" ? f === "" : !0 : n.isEqualsSameValueZero(u, f);
      }
    }
    function a(u, f, p, h) {
      if (f == null)
        return !0;
      if (Array.isArray(f))
        return s(u, f, p, h);
      if (f instanceof Map)
        return l(u, f, p, h);
      if (f instanceof Set)
        return c(u, f, p, h);
      const g = Object.keys(f);
      if (u == null || r.isPrimitive(u))
        return g.length === 0;
      if (g.length === 0)
        return !0;
      if (h?.has(f))
        return h.get(f) === u;
      h?.set(f, u);
      try {
        for (let v = 0; v < g.length; v++) {
          const y = g[v];
          if (!r.isPrimitive(u) && !(y in u) || f[y] === void 0 && u[y] !== void 0 || f[y] === null && u[y] !== null || !p(u[y], f[y], y, u, f, h))
            return !1;
        }
        return !0;
      } finally {
        h?.delete(f);
      }
    }
    function l(u, f, p, h) {
      if (f.size === 0)
        return !0;
      if (!(u instanceof Map))
        return !1;
      for (const [g, v] of f.entries()) {
        const y = u.get(g);
        if (p(y, v, g, u, f, h) === !1)
          return !1;
      }
      return !0;
    }
    function s(u, f, p, h) {
      if (f.length === 0)
        return !0;
      if (!Array.isArray(u))
        return !1;
      const g = /* @__PURE__ */ new Set();
      for (let v = 0; v < f.length; v++) {
        const y = f[v];
        let m = !1;
        for (let w = 0; w < u.length; w++) {
          if (g.has(w))
            continue;
          const b = u[w];
          let x = !1;
          if (p(b, y, v, u, f, h) && (x = !0), x) {
            g.add(w), m = !0;
            break;
          }
        }
        if (!m)
          return !1;
      }
      return !0;
    }
    function c(u, f, p, h) {
      return f.size === 0 ? !0 : u instanceof Set ? s([...u], [...f], p, h) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = c;
  })(fs)), fs;
}
var ap;
function Oy() {
  return ap || (ap = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ iS();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(ds)), ds;
}
var gs = {}, ys = {}, ms = {}, lp;
function oS() {
  return lp || (lp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(ms)), ms;
}
var xs = {}, sp;
function Tu() {
  return sp || (sp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(xs)), xs;
}
var bs = {}, cp;
function Py() {
  return cp || (cp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", o = "[object Arguments]", a = "[object Symbol]", l = "[object Date]", s = "[object Map]", c = "[object Set]", u = "[object Array]", f = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", g = "[object Error]", v = "[object DataView]", y = "[object Uint8Array]", m = "[object Uint8ClampedArray]", w = "[object Uint16Array]", b = "[object Uint32Array]", x = "[object BigUint64Array]", j = "[object Int8Array]", S = "[object Int16Array]", C = "[object Int32Array]", _ = "[object BigInt64Array]", E = "[object Float32Array]", T = "[object Float64Array]";
    e.argumentsTag = o, e.arrayBufferTag = p, e.arrayTag = u, e.bigInt64ArrayTag = _, e.bigUint64ArrayTag = x, e.booleanTag = i, e.dataViewTag = v, e.dateTag = l, e.errorTag = g, e.float32ArrayTag = E, e.float64ArrayTag = T, e.functionTag = f, e.int16ArrayTag = S, e.int32ArrayTag = C, e.int8ArrayTag = j, e.mapTag = s, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = a, e.uint16ArrayTag = w, e.uint32ArrayTag = b, e.uint8ArrayTag = y, e.uint8ClampedArrayTag = m;
  })(bs)), bs;
}
var ws = {}, up;
function aS() {
  return up || (up = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(ws)), ws;
}
var dp;
function Cy() {
  return dp || (dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oS(), r = /* @__PURE__ */ Tu(), n = /* @__PURE__ */ Py(), i = /* @__PURE__ */ jy(), o = /* @__PURE__ */ aS();
    function a(u, f) {
      return l(u, void 0, u, /* @__PURE__ */ new Map(), f);
    }
    function l(u, f, p, h = /* @__PURE__ */ new Map(), g = void 0) {
      const v = g?.(u, f, p, h);
      if (v !== void 0)
        return v;
      if (i.isPrimitive(u))
        return u;
      if (h.has(u))
        return h.get(u);
      if (Array.isArray(u)) {
        const y = new Array(u.length);
        h.set(u, y);
        for (let m = 0; m < u.length; m++)
          y[m] = l(u[m], m, p, h, g);
        return Object.hasOwn(u, "index") && (y.index = u.index), Object.hasOwn(u, "input") && (y.input = u.input), y;
      }
      if (u instanceof Date)
        return new Date(u.getTime());
      if (u instanceof RegExp) {
        const y = new RegExp(u.source, u.flags);
        return y.lastIndex = u.lastIndex, y;
      }
      if (u instanceof Map) {
        const y = /* @__PURE__ */ new Map();
        h.set(u, y);
        for (const [m, w] of u)
          y.set(m, l(w, m, p, h, g));
        return y;
      }
      if (u instanceof Set) {
        const y = /* @__PURE__ */ new Set();
        h.set(u, y);
        for (const m of u)
          y.add(l(m, void 0, p, h, g));
        return y;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(u))
        return u.subarray();
      if (o.isTypedArray(u)) {
        const y = new (Object.getPrototypeOf(u)).constructor(u.length);
        h.set(u, y);
        for (let m = 0; m < u.length; m++)
          y[m] = l(u[m], m, p, h, g);
        return y;
      }
      if (u instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && u instanceof SharedArrayBuffer)
        return u.slice(0);
      if (u instanceof DataView) {
        const y = new DataView(u.buffer.slice(0), u.byteOffset, u.byteLength);
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (typeof File < "u" && u instanceof File) {
        const y = new File([u], u.name, {
          type: u.type
        });
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (typeof Blob < "u" && u instanceof Blob) {
        const y = new Blob([u], { type: u.type });
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (u instanceof Error) {
        const y = structuredClone(u);
        return h.set(u, y), y.message = u.message, y.name = u.name, y.stack = u.stack, y.cause = u.cause, y.constructor = u.constructor, s(y, u, p, h, g), y;
      }
      if (u instanceof Boolean) {
        const y = new Boolean(u.valueOf());
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (u instanceof Number) {
        const y = new Number(u.valueOf());
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (u instanceof String) {
        const y = new String(u.valueOf());
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (typeof u == "object" && c(u)) {
        const y = Object.create(Object.getPrototypeOf(u));
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      return u;
    }
    function s(u, f, p = u, h, g) {
      const v = [...Object.keys(f), ...t.getSymbols(f)];
      for (let y = 0; y < v.length; y++) {
        const m = v[y], w = Object.getOwnPropertyDescriptor(u, m);
        (w == null || w.writable) && (u[m] = l(f[m], m, p, h, g));
      }
    }
    function c(u) {
      switch (r.getTag(u)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = a, e.cloneDeepWithImpl = l, e.copyProperties = s;
  })(ys)), ys;
}
var fp;
function lS() {
  return fp || (fp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Cy();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(gs)), gs;
}
var pp;
function sS() {
  return pp || (pp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Oy(), r = /* @__PURE__ */ lS();
    function n(i) {
      return i = r.cloneDeep(i), (o) => t.isMatch(o, i);
    }
    e.matches = n;
  })(us)), us;
}
var js = {}, Ss = {}, Os = {}, hp;
function cS() {
  return hp || (hp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Cy(), r = /* @__PURE__ */ Tu(), n = /* @__PURE__ */ Py();
    function i(o, a) {
      return t.cloneDeepWith(o, (l, s, c, u) => {
        const f = a?.(l, s, c, u);
        if (f !== void 0)
          return f;
        if (typeof o == "object") {
          if (r.getTag(o) === n.objectTag && typeof o.constructor != "function") {
            const p = {};
            return u.set(o, p), t.copyProperties(p, o, c, u), p;
          }
          switch (Object.prototype.toString.call(o)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              const p = new o.constructor(o?.valueOf());
              return t.copyProperties(p, o), p;
            }
            case n.argumentsTag: {
              const p = {};
              return t.copyProperties(p, o), p.length = o.length, p[Symbol.iterator] = o[Symbol.iterator], p;
            }
            default:
              return;
          }
        }
      });
    }
    e.cloneDeepWith = i;
  })(Os)), Os;
}
var vp;
function uS() {
  return vp || (vp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cS();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(Ss)), Ss;
}
var Ps = {}, Cs = {}, gp;
function ky() {
  return gp || (gp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(Cs)), Cs;
}
var ks = {}, yp;
function dS() {
  return yp || (yp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Tu();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(ks)), ks;
}
var mp;
function fS() {
  return mp || (mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ py(), r = /* @__PURE__ */ ky(), n = /* @__PURE__ */ dS(), i = /* @__PURE__ */ ku();
    function o(a, l) {
      let s;
      if (Array.isArray(l) ? s = l : typeof l == "string" && t.isDeepKey(l) && a?.[l] == null ? s = i.toPath(l) : s = [l], s.length === 0)
        return !1;
      let c = a;
      for (let u = 0; u < s.length; u++) {
        const f = s[u];
        if ((c == null || !Object.hasOwn(c, f)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(f) && f < c.length))
          return !1;
        c = c[f];
      }
      return !0;
    }
    e.has = o;
  })(Ps)), Ps;
}
var xp;
function pS() {
  return xp || (xp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Oy(), r = /* @__PURE__ */ Cu(), n = /* @__PURE__ */ uS(), i = /* @__PURE__ */ _u(), o = /* @__PURE__ */ fS();
    function a(l, s) {
      switch (typeof l) {
        case "object": {
          Object.is(l?.valueOf(), -0) && (l = "-0");
          break;
        }
        case "number": {
          l = r.toKey(l);
          break;
        }
      }
      return s = n.cloneDeep(s), function(c) {
        const u = i.get(c, l);
        return u === void 0 ? o.has(c, l) : s === void 0 ? u === void 0 : t.isMatch(u, s);
      };
    }
    e.matchesProperty = a;
  })(js)), js;
}
var bp;
function hS() {
  return bp || (bp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xy(), r = /* @__PURE__ */ nS(), n = /* @__PURE__ */ sS(), i = /* @__PURE__ */ pS();
    function o(a) {
      if (a == null)
        return t.identity;
      switch (typeof a) {
        case "function":
          return a;
        case "object":
          return Array.isArray(a) && a.length === 2 ? i.matchesProperty(a[0], a[1]) : n.matches(a);
        case "string":
        case "symbol":
        case "number":
          return r.property(a);
      }
    }
    e.iteratee = o;
  })(ss)), ss;
}
var wp;
function vS() {
  return wp || (wp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Jj(), r = /* @__PURE__ */ Qj(), n = /* @__PURE__ */ xy(), i = /* @__PURE__ */ rS(), o = /* @__PURE__ */ hS();
    function a(l, s = n.identity) {
      return i.isArrayLikeObject(l) ? t.uniqBy(Array.from(l), r.ary(o.iteratee(s), 1)) : [];
    }
    e.uniqBy = a;
  })(es)), es;
}
var _s, jp;
function gS() {
  return jp || (jp = 1, _s = vS().uniqBy), _s;
}
var yS = /* @__PURE__ */ gS();
const Sp = /* @__PURE__ */ On(yS);
function mS(e, t, r) {
  return t === !0 ? Sp(e, r) : typeof t == "function" ? Sp(e, t) : e;
}
var Co = { exports: {} }, Es = {}, ko = { exports: {} }, As = {};
var Op;
function xS() {
  if (Op) return As;
  Op = 1;
  var e = Le;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function l(f, p) {
    var h = p(), g = n({ inst: { value: h, getSnapshot: p } }), v = g[0].inst, y = g[1];
    return o(
      function() {
        v.value = h, v.getSnapshot = p, s(v) && y({ inst: v });
      },
      [f, h, p]
    ), i(
      function() {
        return s(v) && y({ inst: v }), f(function() {
          s(v) && y({ inst: v });
        });
      },
      [f]
    ), a(h), h;
  }
  function s(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !r(f, h);
    } catch {
      return !0;
    }
  }
  function c(f, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : l;
  return As.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, As;
}
var Ts = {};
var Pp;
function bS() {
  return Pp || (Pp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    function t(h, g) {
      u || i.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = g();
      if (!f) {
        var y = g();
        o(v, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      y = a({
        inst: { value: v, getSnapshot: g }
      });
      var m = y[0].inst, w = y[1];
      return s(
        function() {
          m.value = v, m.getSnapshot = g, r(m) && w({ inst: m });
        },
        [h, v, g]
      ), l(
        function() {
          return r(m) && w({ inst: m }), h(function() {
            r(m) && w({ inst: m });
          });
        },
        [h]
      ), c(v), v;
    }
    function r(h) {
      var g = h.getSnapshot;
      h = h.value;
      try {
        var v = g();
        return !o(h, v);
      } catch {
        return !0;
      }
    }
    function n(h, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Le, o = typeof Object.is == "function" ? Object.is : e, a = i.useState, l = i.useEffect, s = i.useLayoutEffect, c = i.useDebugValue, u = !1, f = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Ts.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ts;
}
var Cp;
function _y() {
  return Cp || (Cp = 1, process.env.NODE_ENV === "production" ? ko.exports = xS() : ko.exports = bS()), ko.exports;
}
var kp;
function wS() {
  if (kp) return Es;
  kp = 1;
  var e = Le, t = _y();
  function r(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, l = e.useMemo, s = e.useDebugValue;
  return Es.useSyncExternalStoreWithSelector = function(c, u, f, p, h) {
    var g = o(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else v = g.current;
    g = l(
      function() {
        function m(S) {
          if (!w) {
            if (w = !0, b = S, S = p(S), h !== void 0 && v.hasValue) {
              var C = v.value;
              if (h(C, S))
                return x = C;
            }
            return x = S;
          }
          if (C = x, n(b, S)) return C;
          var _ = p(S);
          return h !== void 0 && h(C, _) ? (b = S, C) : (b = S, x = _);
        }
        var w = !1, b, x, j = f === void 0 ? null : f;
        return [
          function() {
            return m(u());
          },
          j === null ? void 0 : function() {
            return m(j());
          }
        ];
      },
      [u, f, p, h]
    );
    var y = i(c, g[0], g[1]);
    return a(
      function() {
        v.hasValue = !0, v.value = y;
      },
      [y]
    ), s(y), y;
  }, Es;
}
var Is = {};
var _p;
function jS() {
  return _p || (_p = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Le, r = _y(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, o = t.useRef, a = t.useEffect, l = t.useMemo, s = t.useDebugValue;
    Is.useSyncExternalStoreWithSelector = function(c, u, f, p, h) {
      var g = o(null);
      if (g.current === null) {
        var v = { hasValue: !1, value: null };
        g.current = v;
      } else v = g.current;
      g = l(
        function() {
          function m(S) {
            if (!w) {
              if (w = !0, b = S, S = p(S), h !== void 0 && v.hasValue) {
                var C = v.value;
                if (h(C, S))
                  return x = C;
              }
              return x = S;
            }
            if (C = x, n(b, S))
              return C;
            var _ = p(S);
            return h !== void 0 && h(C, _) ? (b = S, C) : (b = S, x = _);
          }
          var w = !1, b, x, j = f === void 0 ? null : f;
          return [
            function() {
              return m(u());
            },
            j === null ? void 0 : function() {
              return m(j());
            }
          ];
        },
        [u, f, p, h]
      );
      var y = i(c, g[0], g[1]);
      return a(
        function() {
          v.hasValue = !0, v.value = y;
        },
        [y]
      ), s(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Is;
}
var Ep;
function SS() {
  return Ep || (Ep = 1, process.env.NODE_ENV === "production" ? Co.exports = wS() : Co.exports = jS()), Co.exports;
}
var OS = SS(), Iu = /* @__PURE__ */ At(null), PS = (e) => e, $e = () => {
  var e = $t(Iu);
  return e ? e.store.dispatch : PS;
}, Yo = () => {
}, CS = () => Yo, kS = (e, t) => e === t;
function ae(e) {
  var t = $t(Iu), r = er(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : Yo, [t, e]);
  return OS.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : CS, t ? t.store.getState : Yo, t ? t.store.getState : Yo, r, kS);
}
var _S = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (o) {
        ({ stack: i } = o);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, ES = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: a } = e, l = n(() => ({}), ...i);
  if (!(l.apply(null, o) === l.apply(null, a))) {
    let c;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: c } = u);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: o,
        secondInputs: a,
        stack: c
      }
    );
  }
}, AS = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function TS(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function IS(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function MS(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Ap = (e) => Array.isArray(e) ? e : [e];
function DS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return MS(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Tp(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var RS = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...AS,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: _S
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: ES
    }
  };
}, NS = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, $S = typeof WeakRef < "u" ? WeakRef : NS, zS = 0, Ip = 1;
function _o() {
  return {
    s: zS,
    v: void 0,
    o: null,
    p: null
  };
}
function Ey(e, t = {}) {
  let r = _o();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function a() {
    let l = r;
    const { length: s } = arguments;
    for (let f = 0, p = s; f < p; f++) {
      const h = arguments[f];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let g = l.o;
        g === null && (l.o = g = /* @__PURE__ */ new WeakMap());
        const v = g.get(h);
        v === void 0 ? (l = _o(), g.set(h, l)) : l = v;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const v = g.get(h);
        v === void 0 ? (l = _o(), g.set(h, l)) : l = v;
      }
    }
    const c = l;
    let u;
    if (l.s === Ip)
      u = l.v;
    else if (u = e.apply(null, arguments), o++, n) {
      const f = i?.deref?.() ?? i;
      f != null && n(f, u) && (u = f, o !== 0 && o--), i = typeof u == "object" && u !== null || typeof u == "function" ? new $S(u) : u;
    }
    return c.s = Ip, c.v = u, u;
  }
  return a.clearCache = () => {
    r = _o(), a.resetResultsCount();
  }, a.resultsCount = () => o, a.resetResultsCount = () => {
    o = 0;
  }, a;
}
function LS(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, a = 0, l, s = {}, c = i.pop();
    typeof c == "object" && (s = c, c = i.pop()), TS(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const u = {
      ...r,
      ...s
    }, {
      memoize: f,
      memoizeOptions: p = [],
      argsMemoize: h = Ey,
      argsMemoizeOptions: g = [],
      devModeChecks: v = {}
    } = u, y = Ap(p), m = Ap(g), w = DS(i), b = f(function() {
      return o++, c.apply(
        null,
        arguments
      );
    }, ...y);
    let x = !0;
    const j = h(function() {
      a++;
      const C = Tp(
        w,
        arguments
      );
      if (l = b.apply(null, C), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: _, inputStabilityCheck: E } = RS(x, v);
        if (_.shouldRun && _.run(
          c,
          C,
          l
        ), E.shouldRun) {
          const T = Tp(
            w,
            arguments
          );
          E.run(
            { inputSelectorResults: C, inputSelectorResultsCopy: T },
            { memoize: f, memoizeOptions: y },
            arguments
          );
        }
        x && (x = !1);
      }
      return l;
    }, ...m);
    return Object.assign(j, {
      resultFunc: c,
      memoizedResultFunc: b,
      dependencies: w,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => l,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: f,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var R = /* @__PURE__ */ LS(Ey), BS = Object.assign(
  (e, t = R) => {
    IS(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (o) => e[o]
    );
    return t(
      n,
      (...o) => o.reduce((a, l, s) => (a[r[s]] = l, a), {})
    );
  },
  { withTypes: () => BS }
), Ms = {}, Ds = {}, Rs = {}, Mp;
function WS() {
  return Mp || (Mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, o) => {
      if (n !== i) {
        const a = t(n), l = t(i);
        if (a === l && a === 0) {
          if (n < i)
            return o === "desc" ? 1 : -1;
          if (n > i)
            return o === "desc" ? -1 : 1;
        }
        return o === "desc" ? l - a : a - l;
      }
      return 0;
    };
    e.compareValues = r;
  })(Rs)), Rs;
}
var Ns = {}, $s = {}, Dp;
function Ay() {
  return Dp || (Dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })($s)), $s;
}
var Rp;
function FS() {
  return Rp || (Rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ay(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(o, a) {
      return Array.isArray(o) ? !1 : typeof o == "number" || typeof o == "boolean" || o == null || t.isSymbol(o) ? !0 : typeof o == "string" && (n.test(o) || !r.test(o)) || a != null && Object.hasOwn(a, o);
    }
    e.isKey = i;
  })(Ns)), Ns;
}
var Np;
function VS() {
  return Np || (Np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ WS(), r = /* @__PURE__ */ FS(), n = /* @__PURE__ */ ku();
    function i(o, a, l, s) {
      if (o == null)
        return [];
      l = s ? void 0 : l, Array.isArray(o) || (o = Object.values(o)), Array.isArray(a) || (a = a == null ? [null] : [a]), a.length === 0 && (a = [null]), Array.isArray(l) || (l = l == null ? [] : [l]), l = l.map((h) => String(h));
      const c = (h, g) => {
        let v = h;
        for (let y = 0; y < g.length && v != null; ++y)
          v = v[g[y]];
        return v;
      }, u = (h, g) => g == null || h == null ? g : typeof h == "object" && "key" in h ? Object.hasOwn(g, h.key) ? g[h.key] : c(g, h.path) : typeof h == "function" ? h(g) : Array.isArray(h) ? c(g, h) : typeof g == "object" ? g[h] : g, f = a.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
      return o.map((h) => ({
        original: h,
        criteria: f.map((g) => u(g, h))
      })).slice().sort((h, g) => {
        for (let v = 0; v < f.length; v++) {
          const y = t.compareValues(h.criteria[v], g.criteria[v], l[v]);
          if (y !== 0)
            return y;
        }
        return 0;
      }).map((h) => h.original);
    }
    e.orderBy = i;
  })(Ds)), Ds;
}
var zs = {}, $p;
function KS() {
  return $p || ($p = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], o = Math.floor(n), a = (l, s) => {
        for (let c = 0; c < l.length; c++) {
          const u = l[c];
          Array.isArray(u) && s < o ? a(u, s + 1) : i.push(u);
        }
      };
      return a(r, 0), i;
    }
    e.flatten = t;
  })(zs)), zs;
}
var Ls = {}, zp;
function Ty() {
  return zp || (zp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ky(), r = /* @__PURE__ */ by(), n = /* @__PURE__ */ wy(), i = /* @__PURE__ */ Sy();
    function o(a, l, s) {
      return n.isObject(s) && (typeof l == "number" && r.isArrayLike(s) && t.isIndex(l) && l < s.length || typeof l == "string" && l in s) ? i.isEqualsSameValueZero(s[l], a) : !1;
    }
    e.isIterateeCall = o;
  })(Ls)), Ls;
}
var Lp;
function HS() {
  return Lp || (Lp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ VS(), r = /* @__PURE__ */ KS(), n = /* @__PURE__ */ Ty();
    function i(o, ...a) {
      const l = a.length;
      return l > 1 && n.isIterateeCall(o, a[0], a[1]) ? a = [] : l > 2 && n.isIterateeCall(a[0], a[1], a[2]) && (a = [a[0]]), t.orderBy(o, r.flatten(a), ["asc"]);
    }
    e.sortBy = i;
  })(Ms)), Ms;
}
var Bs, Bp;
function qS() {
  return Bp || (Bp = 1, Bs = HS().sortBy), Bs;
}
var US = /* @__PURE__ */ qS();
const Qa = /* @__PURE__ */ On(US);
var Iy = (e) => e.legend.settings, YS = (e) => e.legend.size, GS = (e) => e.legend.payload;
R([GS, Iy], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Qa(n, r) : n;
});
var Eo = 1;
function XS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = B({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = Ee(
    (i) => {
      if (i != null) {
        var o = i.getBoundingClientRect(), a = {
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        };
        (Math.abs(a.height - t.height) > Eo || Math.abs(a.left - t.left) > Eo || Math.abs(a.top - t.top) > Eo || Math.abs(a.width - t.width) > Eo) && r({
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function at(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ZS = typeof Symbol == "function" && Symbol.observable || "@@observable", Wp = ZS, Ws = () => Math.random().toString(36).substring(7).split("").join("."), JS = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ws()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ws()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ws()}`
}, un = JS;
function Ji(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function QS(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (rO(e))
    return "date";
  if (tO(e))
    return "error";
  const r = eO(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function eO(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function tO(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function rO(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function $r(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = QS(e)), t;
}
function My(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(2) : `Expected the root reducer to be a function. Instead, received: '${$r(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(1) : `Expected the enhancer to be a function. Instead, received: '${$r(r)}'`);
    return r(My)(e, t);
  }
  let n = e, i = t, o = /* @__PURE__ */ new Map(), a = o, l = 0, s = !1;
  function c() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((y, m) => {
      a.set(m, y);
    }));
  }
  function u() {
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? at(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function f(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(4) : `Expected the listener to be a function. Instead, received: '${$r(y)}'`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? at(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    c();
    const w = l++;
    return a.set(w, y), function() {
      if (m) {
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? at(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, c(), a.delete(w), o = null;
      }
    };
  }
  function p(y) {
    if (!Ji(y))
      throw new Error(process.env.NODE_ENV === "production" ? at(7) : `Actions must be plain objects. Instead, the actual type was: '${$r(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? at(17) : `Action "type" property must be a string. Instead, the actual type was: '${$r(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? at(9) : "Reducers may not dispatch actions.");
    try {
      s = !0, i = n(i, y);
    } finally {
      s = !1;
    }
    return (o = a).forEach((w) => {
      w();
    }), y;
  }
  function h(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(10) : `Expected the nextReducer to be a function. Instead, received: '${$r(y)}`);
    n = y, p({
      type: un.REPLACE
    });
  }
  function g() {
    const y = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(m) {
        if (typeof m != "object" || m === null)
          throw new Error(process.env.NODE_ENV === "production" ? at(11) : `Expected the observer to be an object. Instead, received: '${$r(m)}'`);
        function w() {
          const x = m;
          x.next && x.next(u());
        }
        return w(), {
          unsubscribe: y(w)
        };
      },
      [Wp]() {
        return this;
      }
    };
  }
  return p({
    type: un.INIT
  }), {
    dispatch: p,
    subscribe: f,
    getState: u,
    replaceReducer: h,
    [Wp]: g
  };
}
function Fp(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function nO(e, t, r, n) {
  const i = Object.keys(t), o = r && r.type === un.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ji(e))
    return `The ${o} has unexpected type of "${$r(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (a.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === un.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function iO(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: un.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: un.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${un.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Dy(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && Fp(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    iO(r);
  } catch (a) {
    o = a;
  }
  return function(l = {}, s) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const f = nO(l, r, s, i);
      f && Fp(f);
    }
    let c = !1;
    const u = {};
    for (let f = 0; f < n.length; f++) {
      const p = n[f], h = r[p], g = l[p], v = h(g, s);
      if (typeof v > "u") {
        const y = s && s.type;
        throw new Error(process.env.NODE_ENV === "production" ? at(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = v, c = c || v !== g;
    }
    return c = c || n.length !== Object.keys(l).length, c ? u : l;
  };
}
function oa(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function oO(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? at(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (s, ...c) => o(s, ...c)
    }, l = e.map((s) => s(a));
    return o = oa(...l)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Mu(e) {
  return Ji(e) && "type" in e && typeof e.type == "string";
}
var Ry = Symbol.for("immer-nothing"), Vp = Symbol.for("immer-draftable"), wt = Symbol.for("immer-state"), aO = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Tt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = aO[e], n = on(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Mt = Object, Un = Mt.getPrototypeOf, aa = "constructor", el = "prototype", Tc = "configurable", la = "enumerable", Go = "writable", Ri = "value", Cr = (e) => !!e && !!e[wt];
function Qt(e) {
  return e ? Ny(e) || rl(e) || !!e[Vp] || !!e[aa]?.[Vp] || nl(e) || il(e) : !1;
}
var lO = Mt[el][aa].toString(), Kp = /* @__PURE__ */ new WeakMap();
function Ny(e) {
  if (!e || !Du(e))
    return !1;
  const t = Un(e);
  if (t === null || t === Mt[el])
    return !0;
  const r = Mt.hasOwnProperty.call(t, aa) && t[aa];
  if (r === Object)
    return !0;
  if (!on(r))
    return !1;
  let n = Kp.get(r);
  return n === void 0 && (n = Function.toString.call(r), Kp.set(r, n)), n === lO;
}
function tl(e, t, r = !0) {
  Qi(e) === 0 ? (r ? Reflect.ownKeys(e) : Mt.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Qi(e) {
  const t = e[wt];
  return t ? t.type_ : rl(e) ? 1 : nl(e) ? 2 : il(e) ? 3 : 0;
}
var Hp = (e, t, r = Qi(e)) => r === 2 ? e.has(t) : Mt[el].hasOwnProperty.call(e, t), Ic = (e, t, r = Qi(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), sa = (e, t, r, n = Qi(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function sO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var rl = Array.isArray, nl = (e) => e instanceof Map, il = (e) => e instanceof Set, Du = (e) => typeof e == "object", on = (e) => typeof e == "function", Fs = (e) => typeof e == "boolean";
function cO(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var br = (e) => e.copy_ || e.base_, Ru = (e) => e.modified_ ? e.copy_ : e.base_;
function Mc(e, t) {
  if (nl(e))
    return new Map(e);
  if (il(e))
    return new Set(e);
  if (rl(e))
    return Array[el].slice.call(e);
  const r = Ny(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Mt.getOwnPropertyDescriptors(e);
    delete n[wt];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], l = n[a];
      l[Go] === !1 && (l[Go] = !0, l[Tc] = !0), (l.get || l.set) && (n[a] = {
        [Tc]: !0,
        [Go]: !0,
        // could live with !!desc.set as well here...
        [la]: l[la],
        [Ri]: e[a]
      });
    }
    return Mt.create(Un(e), n);
  } else {
    const n = Un(e);
    if (n !== null && r)
      return { ...e };
    const i = Mt.create(n);
    return Mt.assign(i, e);
  }
}
function Nu(e, t = !1) {
  return ol(e) || Cr(e) || !Qt(e) || (Qi(e) > 1 && Mt.defineProperties(e, {
    set: Ao,
    add: Ao,
    clear: Ao,
    delete: Ao
  }), Mt.freeze(e), t && tl(
    e,
    (r, n) => {
      Nu(n, !0);
    },
    !1
  )), e;
}
function uO() {
  Tt(2);
}
var Ao = {
  [Ri]: uO
};
function ol(e) {
  return e === null || !Du(e) ? !0 : Mt.isFrozen(e);
}
var ca = "MapSet", Dc = "Patches", qp = "ArrayMethods", $y = {};
function yn(e) {
  const t = $y[e];
  return t || Tt(0, e), t;
}
var Up = (e) => !!$y[e], Ni, zy = () => Ni, dO = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Up(ca) ? yn(ca) : void 0,
  arrayMethodsPlugin_: Up(qp) ? yn(qp) : void 0
});
function Yp(e, t) {
  t && (e.patchPlugin_ = yn(Dc), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Rc(e) {
  Nc(e), e.drafts_.forEach(fO), e.drafts_ = null;
}
function Nc(e) {
  e === Ni && (Ni = e.parent_);
}
var Gp = (e) => Ni = dO(Ni, e);
function fO(e) {
  const t = e[wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Xp(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[wt].modified_ && (Rc(t), Tt(4)), Qt(e) && (e = Zp(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[wt].base_,
      e,
      t
    );
  } else
    e = Zp(t, r);
  return pO(t, e, !0), Rc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ry ? e : void 0;
}
function Zp(e, t) {
  if (ol(t))
    return t;
  const r = t[wt];
  if (!r)
    return ua(t, e.handledSet_, e);
  if (!al(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    Wy(r, e);
  }
  return r.copy_;
}
function pO(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Nu(t, r);
}
function Ly(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var al = (e, t) => e.scope_ === t, hO = [];
function By(e, t, r, n) {
  const i = br(e), o = e.type_;
  if (n !== void 0 && Ic(i, n, o) === t) {
    sa(i, n, r, o);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    tl(i, (s, c) => {
      if (Cr(c)) {
        const u = l.get(c) || [];
        u.push(s), l.set(c, u);
      }
    });
  }
  const a = e.draftLocations_.get(t) ?? hO;
  for (const l of a)
    sa(i, l, r, o);
}
function vO(e, t, r) {
  e.callbacks_.push(function(i) {
    const o = t;
    if (!o || !al(o, i))
      return;
    i.mapSetPlugin_?.fixSetContents(o);
    const a = Ru(o);
    By(e, o.draft_ ?? o, a, r), Wy(o, i);
  });
}
function Wy(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    Ly(e);
  }
}
function gO(e, t, r) {
  const { scope_: n } = e;
  if (Cr(r)) {
    const i = r[wt];
    al(i, n) && i.callbacks_.push(function() {
      Xo(e);
      const a = Ru(i);
      By(e, r, a, t);
    });
  } else Qt(r) && e.callbacks_.push(function() {
    const o = br(e);
    e.type_ === 3 ? o.has(r) && ua(r, n.handledSet_, n) : Ic(o, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && ua(
      Ic(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function ua(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Cr(e) || t.has(e) || !Qt(e) || ol(e) || (t.add(e), tl(e, (n, i) => {
    if (Cr(i)) {
      const o = i[wt];
      if (al(o, r)) {
        const a = Ru(o);
        sa(e, n, a, e.type_), Ly(o);
      }
    } else Qt(i) && ua(i, t, r);
  })), e;
}
function yO(e, t) {
  const r = rl(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : zy(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let i = n, o = da;
  r && (i = [n], o = $i);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, [l, n];
}
var da = {
  get(e, t) {
    if (t === wt)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r?.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = br(e);
    if (!Hp(i, t, e.type_))
      return mO(e, i, t);
    const o = i[t];
    if (e.finalized_ || !Qt(o) || n && e.operationMethod && r?.isMutatingArrayMethod(
      e.operationMethod
    ) && cO(t))
      return o;
    if (o === Vs(e.base_, t)) {
      Xo(e);
      const a = e.type_ === 1 ? +t : t, l = zc(e.scope_, o, e, a);
      return e.copy_[a] = l;
    }
    return o;
  },
  has(e, t) {
    return t in br(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(br(e));
  },
  set(e, t, r) {
    const n = Fy(br(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Vs(br(e), t), o = i?.[wt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (sO(r, i) && (r !== void 0 || Hp(e.base_, t, e.type_)))
        return !0;
      Xo(e), $c(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), gO(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return Xo(e), Vs(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), $c(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = br(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Go]: !0,
      [Tc]: e.type_ !== 1 || t !== "length",
      [la]: n[la],
      [Ri]: r[t]
    };
  },
  defineProperty() {
    Tt(11);
  },
  getPrototypeOf(e) {
    return Un(e.base_);
  },
  setPrototypeOf() {
    Tt(12);
  }
}, $i = {};
for (let e in da) {
  let t = da[e];
  $i[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
$i.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Tt(13), $i.set.call(this, e, t, void 0);
};
$i.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Tt(14), da.set.call(this, e[0], t, r, e[0]);
};
function Vs(e, t) {
  const r = e[wt];
  return (r ? br(r) : e)[t];
}
function mO(e, t, r) {
  const n = Fy(t, r);
  return n ? Ri in n ? n[Ri] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Fy(e, t) {
  if (!(t in e))
    return;
  let r = Un(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Un(r);
  }
}
function $c(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && $c(e.parent_));
}
function Xo(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = Mc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var xO = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (on(r) && !on(n)) {
        const a = n;
        n = r;
        const l = this;
        return function(c = a, ...u) {
          return l.produce(c, (f) => n.call(this, f, ...u));
        };
      }
      on(n) || Tt(6), i !== void 0 && !on(i) && Tt(7);
      let o;
      if (Qt(r)) {
        const a = Gp(this), l = zc(a, r, void 0);
        let s = !0;
        try {
          o = n(l), s = !1;
        } finally {
          s ? Rc(a) : Nc(a);
        }
        return Yp(a, i), Xp(o, a);
      } else if (!r || !Du(r)) {
        if (o = n(r), o === void 0 && (o = r), o === Ry && (o = void 0), this.autoFreeze_ && Nu(o, !0), i) {
          const a = [], l = [];
          yn(Dc).generateReplacementPatches_(r, o, {
            patches_: a,
            inversePatches_: l
          }), i(a, l);
        }
        return o;
      } else
        Tt(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (on(r))
        return (l, ...s) => this.produceWithPatches(l, (c) => r(c, ...s));
      let i, o;
      return [this.produce(r, n, (l, s) => {
        i = l, o = s;
      }), i, o];
    }, Fs(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), Fs(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), Fs(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    Qt(t) || Tt(8), Cr(t) && (t = Vt(t));
    const r = Gp(this), n = zc(r, t, void 0);
    return n[wt].isManual_ = !0, Nc(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[wt];
    (!n || !n.isManual_) && Tt(9);
    const { scope_: i } = n;
    return Yp(i, r), Xp(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const o = r[n];
      if (o.path.length === 0 && o.op === "replace") {
        t = o.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = yn(Dc).applyPatches_;
    return Cr(t) ? i(t, r) : this.produce(
      t,
      (o) => i(o, r)
    );
  }
};
function zc(e, t, r, n) {
  const [i, o] = nl(t) ? yn(ca).proxyMap_(t, r) : il(t) ? yn(ca).proxySet_(t, r) : yO(t, r);
  return (r?.scope_ ?? zy()).drafts_.push(i), o.callbacks_ = r?.callbacks_ ?? [], o.key_ = n, r && n !== void 0 ? vO(r, o, n) : o.callbacks_.push(function(s) {
    s.mapSetPlugin_?.fixSetContents(o);
    const { patchPlugin_: c } = s;
    o.modified_ && c && c.generatePatches_(o, [], s);
  }), i;
}
function Vt(e) {
  return Cr(e) || Tt(10, e), Vy(e);
}
function Vy(e) {
  if (!Qt(e) || ol(e))
    return e;
  const t = e[wt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Mc(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Mc(e, !0);
  return tl(
    r,
    (i, o) => {
      sa(r, i, Vy(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var bO = new xO(), Ky = bO.produce;
function Hy(e) {
  return ({ dispatch: r, getState: n }) => (i) => (o) => typeof o == "function" ? o(r, n, e) : i(o);
}
var wO = Hy(), jO = Hy, SO = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? oa : oa.apply(null, arguments);
}, OO = (e) => e && typeof e.match == "function";
function Rt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? je(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Mu(n) && n.type === e, r;
}
function PO(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  OO(e);
}
function CO(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function kO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = PO
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(CO(n.type)), r(n));
}
function qy(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const o = Date.now();
        r += o - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Uy = class ki extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ki.prototype);
  }
  static get [Symbol.species]() {
    return ki;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ki(...t[0].concat(this)) : new ki(...t.concat(this));
  }
};
function Jp(e) {
  return Qt(e) ? Ky(e, () => {
  }) : e;
}
function To(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function _O(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function EO(e, t, r) {
  const n = Yy(e, t, r);
  return {
    detectMutations() {
      return Gy(e, t, n, r);
    }
  };
}
function Yy(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), o.children = {};
    const a = t.length > 0;
    for (const l in r) {
      const s = n ? n + "." + l : l;
      a && t.some((u) => u instanceof RegExp ? u.test(s) : s === u) || (o.children[l] = Yy(e, t, r[l], s));
    }
  }
  return o;
}
function Gy(e, t = [], r, n, i = !1, o = "") {
  const a = r ? r.value : void 0, l = a === n;
  if (i && !l && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: o
    };
  if (e(a) || e(n))
    return {
      wasMutated: !1
    };
  const s = {};
  for (let u in r.children)
    s[u] = !0;
  for (let u in n)
    s[u] = !0;
  const c = t.length > 0;
  for (let u in s) {
    const f = o ? o + "." + u : u;
    if (c && t.some((g) => g instanceof RegExp ? g.test(f) : f === g))
      continue;
    const p = Gy(e, t, r.children[u], n[u], l, f);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function AO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, s, c, u) {
      return JSON.stringify(l, r(s, u), c);
    }, r = function(l, s) {
      let c = [], u = [];
      return s || (s = function(f, p) {
        return c[0] === p ? "[Circular ~]" : "[Circular ~." + u.slice(0, c.indexOf(p)).join(".") + "]";
      }), function(f, p) {
        if (c.length > 0) {
          var h = c.indexOf(this);
          ~h ? c.splice(h + 1) : c.push(this), ~h ? u.splice(h, 1 / 0, f) : u.push(f), ~c.indexOf(p) && (p = s.call(this, f, p));
        } else c.push(p);
        return l == null ? p : l.call(this, f, p);
      };
    }, {
      isImmutable: n = _O,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const a = EO.bind(null, n, i);
    return ({
      getState: l
    }) => {
      let s = l(), c = a(s), u;
      return (f) => (p) => {
        const h = qy(o, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (s = l(), u = c.detectMutations(), c = a(s), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = f(p);
        return h.measureTime(() => {
          if (s = l(), u = c.detectMutations(), c = a(s), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), g;
      };
    };
  }
}
function Xy(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ji(e);
}
function Lc(e, t = "", r = Xy, n, i = [], o) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o?.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), s = i.length > 0;
  for (const [c, u] of l) {
    const f = t ? t + "." + c : c;
    if (!(s && i.some((h) => h instanceof RegExp ? h.test(f) : f === h))) {
      if (!r(u))
        return {
          keyPath: f,
          value: u
        };
      if (typeof u == "object" && (a = Lc(u, f, r, n, i, o), a))
        return a;
    }
  }
  return o && Zy(e) && o.add(e), !1;
}
function Zy(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Zy(t))
      return !1;
  return !0;
}
function TO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Xy,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: a = 32,
      ignoreState: l = !1,
      ignoreActions: s = !1,
      disableCache: c = !1
    } = e, u = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (p) => (h) => {
      if (!Mu(h))
        return p(h);
      const g = p(h), v = qy(a, "SerializableStateInvariantMiddleware");
      return !s && !(n.length && n.indexOf(h.type) !== -1) && v.measureTime(() => {
        const y = Lc(h, "", t, r, i, u);
        if (y) {
          const {
            keyPath: m,
            value: w
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (v.measureTime(() => {
        const y = f.getState(), m = Lc(y, "", t, r, o, u);
        if (m) {
          const {
            keyPath: w,
            value: b
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), g;
    };
  }
}
function Io(e) {
  return typeof e == "boolean";
}
var IO = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new Uy();
  if (r && (Io(r) ? a.push(wO) : a.push(jO(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      Io(n) || (l = n), a.unshift(AO(l));
    }
    if (i) {
      let l = {};
      Io(i) || (l = i), a.push(TO(l));
    }
    if (o) {
      let l = {};
      Io(o) || (l = o), a.unshift(kO(l));
    }
  }
  return a;
}, Jy = "RTK_autoBatch", De = () => (e) => ({
  payload: e,
  meta: {
    [Jy]: !0
  }
}), Qp = (e) => (t) => {
  setTimeout(t, e);
}, Qy = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, a = !1;
  const l = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Qp(10)
  ) : e.type === "callback" ? e.queueNotification : Qp(e.timeout), c = () => {
    a = !1, o && (o = !1, l.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const f = () => i && u(), p = n.subscribe(f);
      return l.add(u), () => {
        p(), l.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      try {
        return i = !u?.meta?.[Jy], o = !i, o && (a || (a = !0, s(c))), n.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, MO = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Uy(e);
  return n && i.push(Qy(typeof n == "object" ? n : void 0)), i;
};
function DO(e) {
  const t = IO(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: o = !0,
    preloadedState: a = void 0,
    enhancers: l = void 0
  } = e || {};
  let s;
  if (typeof r == "function")
    s = r;
  else if (Ji(r))
    s = Dy(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? je(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? je(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && o) {
    let v = /* @__PURE__ */ new Set();
    c.forEach((y) => {
      if (v.has(y))
        throw new Error(process.env.NODE_ENV === "production" ? je(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      v.add(y);
    });
  }
  let u = oa;
  i && (u = SO({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = oO(...c), p = MO(f);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(5) : "`enhancers` field must be a callback");
  let h = typeof l == "function" ? l(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? je(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !h.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const g = u(...h);
  return My(s, a, g);
}
function em(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? je(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? je(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof o == "string" ? o : o.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? je(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? je(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = a, i;
    },
    addAsyncThunk(o, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? je(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return a.pending && (t[o.pending.type] = a.pending), a.rejected && (t[o.rejected.type] = a.rejected), a.fulfilled && (t[o.fulfilled.type] = a.fulfilled), a.settled && r.push({
        matcher: o.settled,
        reducer: a.settled
      }), i;
    },
    addMatcher(o, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? je(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: o,
        reducer: a
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? je(31) : "`builder.addDefaultCase` can only be called once");
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function RO(e) {
  return typeof e == "function";
}
function NO(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? je(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = em(t), o;
  if (RO(e))
    o = () => Jp(e());
  else {
    const l = Jp(e);
    o = () => l;
  }
  function a(l = o(), s) {
    let c = [r[s.type], ...n.filter(({
      matcher: u
    }) => u(s)).map(({
      reducer: u
    }) => u)];
    return c.filter((u) => !!u).length === 0 && (c = [i]), c.reduce((u, f) => {
      if (f)
        if (Cr(u)) {
          const h = f(u, s);
          return h === void 0 ? u : h;
        } else {
          if (Qt(u))
            return Ky(u, (p) => f(p, s));
          {
            const p = f(u, s);
            if (p === void 0) {
              if (u === null)
                return u;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return u;
    }, l);
  }
  return a.getInitialState = o, a;
}
var $O = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", zO = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += $O[Math.random() * 64 | 0];
  return t;
}, LO = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function BO(e, t) {
  return `${e}/${t}`;
}
function WO({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[LO];
  return function(n) {
    const {
      name: i,
      reducerPath: o = i
    } = n;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? je(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof n.reducers == "function" ? n.reducers(VO()) : n.reducers) || {}, l = Object.keys(a), s = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(b, x) {
        const j = typeof b == "string" ? b : b.type;
        if (!j)
          throw new Error(process.env.NODE_ENV === "production" ? je(12) : "`context.addCase` cannot be called with an empty action type");
        if (j in s.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? je(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + j);
        return s.sliceCaseReducersByType[j] = x, c;
      },
      addMatcher(b, x) {
        return s.sliceMatchers.push({
          matcher: b,
          reducer: x
        }), c;
      },
      exposeAction(b, x) {
        return s.actionCreators[b] = x, c;
      },
      exposeCaseReducer(b, x) {
        return s.sliceCaseReducersByName[b] = x, c;
      }
    };
    l.forEach((b) => {
      const x = a[b], j = {
        reducerName: b,
        type: BO(i, b),
        createNotation: typeof n.reducers == "function"
      };
      HO(x) ? UO(j, x, c, t) : KO(j, x, c);
    });
    function u() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? je(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, x = [], j = void 0] = typeof n.extraReducers == "function" ? em(n.extraReducers) : [n.extraReducers], S = {
        ...b,
        ...s.sliceCaseReducersByType
      };
      return NO(n.initialState, (C) => {
        for (let _ in S)
          C.addCase(_, S[_]);
        for (let _ of s.sliceMatchers)
          C.addMatcher(_.matcher, _.reducer);
        for (let _ of x)
          C.addMatcher(_.matcher, _.reducer);
        j && C.addDefaultCase(j);
      });
    }
    const f = (b) => b, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let g;
    function v(b, x) {
      return g || (g = u()), g(b, x);
    }
    function y() {
      return g || (g = u()), g.getInitialState();
    }
    function m(b, x = !1) {
      function j(C) {
        let _ = C[b];
        if (typeof _ > "u") {
          if (x)
            _ = To(h, j, y);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? je(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return _;
      }
      function S(C = f) {
        const _ = To(p, x, () => /* @__PURE__ */ new WeakMap());
        return To(_, C, () => {
          const E = {};
          for (const [T, D] of Object.entries(n.selectors ?? {}))
            E[T] = FO(D, C, () => To(h, C, y), x);
          return E;
        });
      }
      return {
        reducerPath: b,
        getSelectors: S,
        get selectors() {
          return S(j);
        },
        selectSlice: j
      };
    }
    const w = {
      name: i,
      reducer: v,
      actions: s.actionCreators,
      caseReducers: s.sliceCaseReducersByName,
      getInitialState: y,
      ...m(o),
      injectInto(b, {
        reducerPath: x,
        ...j
      } = {}) {
        const S = x ?? o;
        return b.inject({
          reducerPath: S,
          reducer: v
        }, j), {
          ...w,
          ...m(S, !0)
        };
      }
    };
    return w;
  };
}
function FO(e, t, r, n) {
  function i(o, ...a) {
    let l = t(o);
    if (typeof l > "u") {
      if (n)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? je(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...a);
  }
  return i.unwrapped = e, i;
}
var gt = /* @__PURE__ */ WO();
function VO() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function KO({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, a;
  if ("reducer" in n) {
    if (r && !qO(n))
      throw new Error(process.env.NODE_ENV === "production" ? je(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, a = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? Rt(e, a) : Rt(e));
}
function HO(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function qO(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function UO({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? je(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: a,
    pending: l,
    rejected: s,
    settled: c,
    options: u
  } = r, f = i(e, o, u);
  n.exposeAction(t, f), a && n.addCase(f.fulfilled, a), l && n.addCase(f.pending, l), s && n.addCase(f.rejected, s), c && n.addMatcher(f.settled, c), n.exposeCaseReducer(t, {
    fulfilled: a || Mo,
    pending: l || Mo,
    rejected: s || Mo,
    settled: c || Mo
  });
}
function Mo() {
}
var YO = "task", tm = "listener", rm = "completed", $u = "cancelled", GO = `task-${$u}`, XO = `task-${rm}`, Bc = `${tm}-${$u}`, ZO = `${tm}-${rm}`, ll = class {
  constructor(e) {
    this.code = e, this.message = `${YO} ${$u} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, zu = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? je(32) : `${t} is not a function`);
}, fa = () => {
}, nm = (e, t = fa) => (e.catch(t), e), im = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), dn = (e) => {
  if (e.aborted)
    throw new ll(e.reason);
};
function om(e, t) {
  let r = fa;
  return new Promise((n, i) => {
    const o = () => i(new ll(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    r = im(e, o), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = fa;
  });
}
var JO = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof ll ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, pa = (e) => (t) => nm(om(e, t).then((r) => (dn(e), r))), am = (e) => {
  const t = pa(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Fn
} = Object, eh = {}, eo = "listenerMiddleware", QO = (e, t) => {
  const r = (n) => im(e, () => n.abort(e.reason));
  return (n, i) => {
    zu(n, "taskExecutor");
    const o = new AbortController();
    r(o);
    const a = JO(async () => {
      dn(e), dn(o.signal);
      const l = await n({
        pause: pa(o.signal),
        delay: am(o.signal),
        signal: o.signal
      });
      return dn(o.signal), l;
    }, () => o.abort(XO));
    return i?.autoJoin && t.push(a.catch(fa)), {
      result: pa(e)(a),
      cancel() {
        o.abort(GO);
      }
    };
  };
}, eP = (e, t) => {
  const r = async (n, i) => {
    dn(t);
    let o = () => {
    };
    const l = [new Promise((s, c) => {
      let u = e({
        predicate: n,
        effect: (f, p) => {
          p.unsubscribe(), s([f, p.getState(), p.getOriginalState()]);
        }
      });
      o = () => {
        u(), c();
      };
    })];
    i != null && l.push(new Promise((s) => setTimeout(s, i, null)));
    try {
      const s = await om(t, Promise.race(l));
      return dn(t), s;
    } finally {
      o();
    }
  };
  return (n, i) => nm(r(n, i));
}, lm = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = Rt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? je(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return zu(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, sm = /* @__PURE__ */ Fn((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = lm(e);
  return {
    id: zO(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? je(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => sm
}), th = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = lm(t);
  return Array.from(e.values()).find((o) => (typeof r == "string" ? o.type === r : o.predicate === i) && o.effect === n);
}, Wc = (e) => {
  e.pending.forEach((t) => {
    t.abort(Bc);
  });
}, tP = (e, t) => () => {
  for (const r of t.keys())
    Wc(r);
  e.clear();
}, rh = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, cm = /* @__PURE__ */ Fn(/* @__PURE__ */ Rt(`${eo}/add`), {
  withTypes: () => cm
}), rP = /* @__PURE__ */ Rt(`${eo}/removeAll`), um = /* @__PURE__ */ Fn(/* @__PURE__ */ Rt(`${eo}/remove`), {
  withTypes: () => um
}), nP = (...e) => {
  console.error(`${eo}/error`, ...e);
}, to = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const g = r.get(h) ?? 0;
    r.set(h, g + 1);
  }, i = (h) => {
    const g = r.get(h) ?? 1;
    g === 1 ? r.delete(h) : r.set(h, g - 1);
  }, {
    extra: o,
    onError: a = nP
  } = e;
  zu(a, "onError");
  const l = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (g) => {
    h.unsubscribe(), g?.cancelActive && Wc(h);
  }), s = (h) => {
    const g = th(t, h) ?? sm(h);
    return l(g);
  };
  Fn(s, {
    withTypes: () => s
  });
  const c = (h) => {
    const g = th(t, h);
    return g && (g.unsubscribe(), h.cancelActive && Wc(g)), !!g;
  };
  Fn(c, {
    withTypes: () => c
  });
  const u = async (h, g, v, y) => {
    const m = new AbortController(), w = eP(s, m.signal), b = [];
    try {
      h.pending.add(m), n(h), await Promise.resolve(h.effect(
        g,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Fn({}, v, {
          getOriginalState: y,
          condition: (x, j) => w(x, j).then(Boolean),
          take: w,
          delay: am(m.signal),
          pause: pa(m.signal),
          extra: o,
          signal: m.signal,
          fork: QO(m.signal, b),
          unsubscribe: h.unsubscribe,
          subscribe: () => {
            t.set(h.id, h);
          },
          cancelActiveListeners: () => {
            h.pending.forEach((x, j, S) => {
              x !== m && (x.abort(Bc), S.delete(x));
            });
          },
          cancel: () => {
            m.abort(Bc), h.pending.delete(m);
          },
          throwIfCancelled: () => {
            dn(m.signal);
          }
        })
      ));
    } catch (x) {
      x instanceof ll || rh(a, x, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(b), m.abort(ZO), i(h), h.pending.delete(m);
    }
  }, f = tP(t, r);
  return {
    middleware: (h) => (g) => (v) => {
      if (!Mu(v))
        return g(v);
      if (cm.match(v))
        return s(v.payload);
      if (rP.match(v)) {
        f();
        return;
      }
      if (um.match(v))
        return c(v.payload);
      let y = h.getState();
      const m = () => {
        if (y === eh)
          throw new Error(process.env.NODE_ENV === "production" ? je(23) : `${eo}: getOriginalState can only be called synchronously`);
        return y;
      };
      let w;
      try {
        if (w = g(v), t.size > 0) {
          const b = h.getState(), x = Array.from(t.values());
          for (const j of x) {
            let S = !1;
            try {
              S = j.predicate(v, b, y);
            } catch (C) {
              S = !1, rh(a, C, {
                raisedBy: "predicate"
              });
            }
            S && u(j, v, h, m);
          }
        }
      } finally {
        y = eh;
      }
      return w;
    },
    startListening: s,
    stopListening: c,
    clearListeners: f
  };
};
function je(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var iP = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, dm = gt({
  name: "chartLayout",
  initialState: iP,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, o;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (o = t.payload.left) !== null && o !== void 0 ? o : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: oP,
  setLayout: aP,
  setChartSize: lP,
  setScale: sP
} = dm.actions, cP = dm.reducer;
function fm(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function pe(e) {
  return Number.isFinite(e);
}
function dr(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function nh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nh(Object(r), !0).forEach(function(n) {
      uP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uP(e, t, r) {
  return (t = dP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dP(e) {
  var t = fP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qe(e, t, r) {
  return Be(e) || Be(t) ? r : qt(t) ? qn(e, t, r) : typeof t == "function" ? t(e) : r;
}
var pP = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: o,
      verticalAlign: a,
      layout: l
    } = t;
    if ((l === "vertical" || l === "horizontal" && a === "middle") && o !== "center" && ne(e[o]))
      return Ln(Ln({}, e), {}, {
        [o]: e[o] + (n || 0)
      });
    if ((l === "horizontal" || l === "vertical" && o === "center") && a !== "middle" && ne(e[a]))
      return Ln(Ln({}, e), {}, {
        [a]: e[a] + (i || 0)
      });
  }
  return e;
}, hr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", pm = (e, t, r, n) => {
  if (n)
    return e.map((l) => l.coordinate);
  var i, o, a = e.map((l) => (l.coordinate === t && (i = !0), l.coordinate === r && (o = !0), l.coordinate));
  return i || a.push(t), o || a.push(r), a;
}, hm = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: o,
    scale: a,
    realScaleType: l,
    isCategorical: s,
    categoricalDomain: c,
    tickCount: u,
    ticks: f,
    niceTicks: p,
    axisType: h
  } = e;
  if (!a)
    return null;
  var g = l === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, v = i === "category" && a.bandwidth ? a.bandwidth() / g : 0;
  if (v = h === "angleAxis" && o && o.length >= 2 ? Ct(o[0] - o[1]) * 2 * v : v, f || p) {
    var y = (f || p || []).map((m, w) => {
      var b = n ? n.indexOf(m) : m, x = a.map(b);
      return pe(x) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: x + v,
        value: m,
        offset: v,
        index: w
      } : null;
    }).filter(kt);
    return y;
  }
  return s && c ? c.map((m, w) => {
    var b = a.map(m);
    return pe(b) ? {
      coordinate: b + v,
      value: m,
      index: w,
      offset: v
    } : null;
  }).filter(kt) : a.ticks && u != null ? a.ticks(u).map((m, w) => {
    var b = a.map(m);
    return pe(b) ? {
      coordinate: b + v,
      value: m,
      index: w,
      offset: v
    } : null;
  }).filter(kt) : a.domain().map((m, w) => {
    var b = a.map(m);
    return pe(b) ? {
      coordinate: b + v,
      // @ts-expect-error can't use Date as an index
      value: n ? n[m] : m,
      index: w,
      offset: v
    } : null;
  }).filter(kt);
}, hP = (e, t) => {
  if (!t || t.length !== 2 || !ne(t[0]) || !ne(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!ne(e[0]) || e[0] < r) && (i[0] = r), (!ne(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, vP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var o = 0, a = 0, l = 0; l < r; ++l) {
          var s = e[l], c = s?.[i];
          if (c != null) {
            var u = c[1], f = c[0], p = Zt(u) ? f : u;
            p >= 0 ? (c[0] = o, o += p, c[1] = o) : (c[0] = a, a += p, c[1] = a);
          }
        }
  }
}, gP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var o = 0, a = 0; a < r; ++a) {
          var l = e[a], s = l?.[i];
          if (s != null) {
            var c = Zt(s[1]) ? s[0] : s[1];
            c >= 0 ? (s[0] = o, o += c, s[1] = o) : (s[0] = 0, s[1] = 0);
          }
        }
  }
}, yP = {
  sign: vP,
  // @ts-expect-error definitelytyped types are incorrect
  expand: _j,
  // @ts-expect-error definitelytyped types are incorrect
  none: vn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Ej,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Aj,
  positive: gP
}, mP = (e, t, r) => {
  var n, i = (n = yP[r]) !== null && n !== void 0 ? n : vn, o = kj().keys(t).value((l, s) => Number(qe(l, s, 0))).order(Ec).offset(i), a = o(e);
  return a.forEach((l, s) => {
    l.forEach((c, u) => {
      var f = qe(e[u], t[s], 0);
      Array.isArray(f) && f.length === 2 && ne(f[0]) && ne(f[1]) && (c[0] = f[0], c[1] = f[1]);
    });
  }), a;
};
function vm(e) {
  return e == null ? void 0 : String(e);
}
function ih(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: o,
    dataKey: a
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Be(i[t.dataKey])) {
      var l = vy(r, "value", i[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r != null && r[o] ? r[o].coordinate + n / 2 : null;
  }
  var s = qe(i, Be(a) ? t.dataKey : a), c = t.scale.map(s);
  return ne(c) ? c : null;
}
var oh = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: i,
    entry: o,
    index: a
  } = e;
  if (t.type === "category")
    return r[a] ? r[a].coordinate + n : null;
  var l = qe(o, t.dataKey, t.scale.domain()[a]);
  if (Be(l))
    return null;
  var s = t.scale.map(l);
  return ne(s) ? s - i / 2 + n : null;
}, xP = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, bP = (e) => {
  var t = e.flat(2).filter(ne);
  return [Math.min(...t), Math.max(...t)];
}, wP = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], jP = (e, t, r) => {
  if (e != null)
    return wP(Object.keys(e).reduce((n, i) => {
      var o = e[i];
      if (!o)
        return n;
      var {
        stackedData: a
      } = o, l = a.reduce((s, c) => {
        var u = fm(c, t, r), f = bP(u);
        return !pe(f[0]) || !pe(f[1]) ? s : [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, ah = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, lh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Yn = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = Qa(t, (u) => u.coordinate), o = 1 / 0, a = 1, l = i.length; a < l; a++) {
      var s = i[a], c = i[a - 1];
      o = Math.min((s?.coordinate || 0) - (c?.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return r ? void 0 : 0;
};
function sh(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: o
  } = e;
  return Ln(Ln({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: o
  });
}
function sl(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var SP = (e, t) => {
  if (t === "horizontal")
    return e.relativeX;
  if (t === "vertical")
    return e.relativeY;
}, OP = (e, t) => t === "centric" ? e.angle : e.radius, Ar = (e) => e.layout.width, Tr = (e) => e.layout.height, PP = (e) => e.layout.scale, gm = (e) => e.layout.margin, cl = R((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), ul = R((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), CP = "data-recharts-item-index", kP = "data-recharts-item-id", ro = 60;
function ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Do(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ch(Object(r), !0).forEach(function(n) {
      _P(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _P(e, t, r) {
  return (t = EP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EP(e) {
  var t = AP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var TP = (e) => e.brush.height;
function IP(e) {
  var t = ul(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : ro;
      return r + i;
    }
    return r;
  }, 0);
}
function MP(e) {
  var t = ul(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : ro;
      return r + i;
    }
    return r;
  }, 0);
}
function DP(e) {
  var t = cl(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function RP(e) {
  var t = cl(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var rt = R([Ar, Tr, gm, TP, IP, MP, DP, RP, Iy, YS], (e, t, r, n, i, o, a, l, s, c) => {
  var u = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + o
  }, f = {
    top: (r.top || 0) + a,
    bottom: (r.bottom || 0) + l
  }, p = Do(Do({}, f), u), h = p.bottom;
  p.bottom += n, p = pP(p, s, c);
  var g = e - p.left - p.right, v = t - p.top - p.bottom;
  return Do(Do({
    brushBottom: h
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(g, 0),
    height: Math.max(v, 0)
  });
}), NP = R(rt, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Lu = R(Ar, Tr, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), $P = /* @__PURE__ */ At(null), dt = () => $t($P) != null, dl = (e) => e.brush, fl = R([dl, rt, gm], (e, t, r) => ({
  height: e.height,
  x: ne(e.x) ? e.x : t.left,
  y: ne(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: ne(e.width) ? e.width : t.width
})), Ks = {}, Hs = {}, qs = {}, uh;
function zP() {
  return uh || (uh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: o } = {}) {
      let a, l = null;
      const s = o != null && o.includes("leading"), c = o == null || o.includes("trailing"), u = () => {
        l !== null && (r.apply(a, l), a = void 0, l = null);
      }, f = () => {
        c && u(), v();
      };
      let p = null;
      const h = () => {
        p != null && clearTimeout(p), p = setTimeout(() => {
          p = null, f();
        }, n);
      }, g = () => {
        p !== null && (clearTimeout(p), p = null);
      }, v = () => {
        g(), a = void 0, l = null;
      }, y = () => {
        u();
      }, m = function(...w) {
        if (i?.aborted)
          return;
        a = this, l = w;
        const b = p == null;
        h(), s && b && u();
      };
      return m.schedule = h, m.cancel = v, m.flush = y, i?.addEventListener("abort", v, { once: !0 }), m;
    }
    e.debounce = t;
  })(qs)), qs;
}
var dh;
function LP() {
  return dh || (dh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ zP();
    function r(n, i = 0, o = {}) {
      typeof o != "object" && (o = {});
      const { leading: a = !1, trailing: l = !0, maxWait: s } = o, c = Array(2);
      a && (c[0] = "leading"), l && (c[1] = "trailing");
      let u, f = null;
      const p = t.debounce(function(...v) {
        u = n.apply(this, v), f = null;
      }, i, { edges: c }), h = function(...v) {
        return s != null && (f === null && (f = Date.now()), Date.now() - f >= s) ? (u = n.apply(this, v), f = Date.now(), p.cancel(), p.schedule(), u) : (p.apply(this, v), u);
      }, g = () => (p.flush(), u);
      return h.cancel = p.cancel, h.flush = g, h;
    }
    e.debounce = r;
  })(Hs)), Hs;
}
var fh;
function BP() {
  return fh || (fh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ LP();
    function r(n, i = 0, o = {}) {
      const { leading: a = !0, trailing: l = !0 } = o;
      return t.debounce(n, i, {
        leading: a,
        maxWait: i,
        trailing: l
      });
    }
    e.throttle = r;
  })(Ks)), Ks;
}
var Us, ph;
function WP() {
  return ph || (ph = 1, Us = BP().throttle), Us;
}
var FP = /* @__PURE__ */ WP();
const VP = /* @__PURE__ */ On(FP);
var ha = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      console.warn(r.replace(/%s/g, () => i[a++]));
    }
}, lr = {
  width: "100%",
  height: "100%",
  debounce: 0,
  minWidth: 0,
  initialDimension: {
    width: -1,
    height: -1
  }
}, ym = (e, t, r) => {
  var {
    width: n = lr.width,
    height: i = lr.height,
    aspect: o,
    maxHeight: a
  } = r, l = gn(n) ? e : Number(n), s = gn(i) ? t : Number(i);
  return o && o > 0 && (l ? s = l / o : s && (l = s * o), a && s != null && s > a && (s = a)), {
    calculatedWidth: l,
    calculatedHeight: s
  };
}, KP = {
  width: 0,
  height: 0,
  overflow: "visible"
}, HP = {
  width: 0,
  overflowX: "visible"
}, qP = {
  height: 0,
  overflowY: "visible"
}, UP = {}, YP = (e) => {
  var {
    width: t,
    height: r
  } = e, n = gn(t), i = gn(r);
  return n && i ? KP : n ? HP : i ? qP : UP;
};
function GP(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, o = r;
  return i === void 0 && o === void 0 ? (i = lr.width, o = lr.height) : i === void 0 ? i = n && n > 0 ? void 0 : lr.width : o === void 0 && (o = n && n > 0 ? void 0 : lr.height), {
    width: i,
    height: o
  };
}
function Fc() {
  return Fc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fc.apply(null, arguments);
}
function hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hh(Object(r), !0).forEach(function(n) {
      XP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XP(e, t, r) {
  return (t = ZP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZP(e) {
  var t = JP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mm = /* @__PURE__ */ At(lr.initialDimension);
function QP(e) {
  return dr(e.width) && dr(e.height);
}
function xm(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = er(() => ({
    width: r,
    height: n
  }), [r, n]);
  return QP(i) ? /* @__PURE__ */ P.createElement(mm.Provider, {
    value: i
  }, t) : null;
}
var Bu = () => $t(mm), eC = /* @__PURE__ */ ut((e, t) => {
  var {
    aspect: r,
    initialDimension: n = lr.initialDimension,
    width: i,
    height: o,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: a = lr.minWidth,
    minHeight: l,
    maxHeight: s,
    children: c,
    debounce: u = lr.debounce,
    id: f,
    className: p,
    onResize: h,
    style: g = {}
  } = e, v = ge(null), y = ge();
  y.current = h, z0(t, () => v.current);
  var [m, w] = B({
    containerWidth: n.width,
    containerHeight: n.height
  }), b = Ee((_, E) => {
    w((T) => {
      var D = Math.round(_), k = Math.round(E);
      return T.containerWidth === D && T.containerHeight === k ? T : {
        containerWidth: D,
        containerHeight: k
      };
    });
  }, []);
  Se(() => {
    if (v.current == null || typeof ResizeObserver > "u")
      return Pn;
    var _ = (k) => {
      var W, F = k[0];
      if (F != null) {
        var {
          width: Z,
          height: q
        } = F.contentRect;
        b(Z, q), (W = y.current) === null || W === void 0 || W.call(y, Z, q);
      }
    };
    u > 0 && (_ = VP(_, u, {
      trailing: !0,
      leading: !1
    }));
    var E = new ResizeObserver(_), {
      width: T,
      height: D
    } = v.current.getBoundingClientRect();
    return b(T, D), E.observe(v.current), () => {
      E.disconnect();
    };
  }, [b, u]);
  var {
    containerWidth: x,
    containerHeight: j
  } = m;
  ha(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: S,
    calculatedHeight: C
  } = ym(x, j, {
    width: i,
    height: o,
    aspect: r,
    maxHeight: s
  });
  return ha(S != null && S > 0 || C != null && C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, S, C, i, o, a, l, r), /* @__PURE__ */ P.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: Pe("recharts-responsive-container", p),
    style: vh(vh({}, g), {}, {
      width: i,
      height: o,
      minWidth: a,
      minHeight: l,
      maxHeight: s
    }),
    ref: v
  }, /* @__PURE__ */ P.createElement("div", {
    style: YP({
      width: i,
      height: o
    })
  }, /* @__PURE__ */ P.createElement(xm, {
    width: S,
    height: C
  }, c)));
}), Wu = /* @__PURE__ */ ut((e, t) => {
  var r = Bu();
  if (dr(r.width) && dr(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = GP({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: o,
    calculatedHeight: a
  } = ym(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return ne(o) && ne(a) ? /* @__PURE__ */ P.createElement(xm, {
    width: o,
    height: a
  }, e.children) : /* @__PURE__ */ P.createElement(eC, Fc({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function Fu(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height
    };
}
var no = () => {
  var e, t = dt(), r = ae(NP), n = ae(fl), i = (e = ae(dl)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, tC = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, bm = () => {
  var e;
  return (e = ae(rt)) !== null && e !== void 0 ? e : tC;
}, wm = () => ae(Ar), jm = () => ae(Tr), Oe = (e) => e.layout.layoutType, Cn = () => ae(Oe), Vu = () => {
  var e = Cn();
  if (e === "horizontal" || e === "vertical")
    return e;
}, Sm = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, rC = () => {
  var e = Cn();
  return e !== void 0;
}, io = (e) => {
  var t = $e(), r = dt(), {
    width: n,
    height: i
  } = e, o = Bu(), a = n, l = i;
  return o && (a = o.width > 0 ? o.width : n, l = o.height > 0 ? o.height : i), Se(() => {
    !r && dr(a) && dr(l) && t(lP({
      width: a,
      height: l
    }));
  }, [t, r, a, l]), null;
}, Om = Symbol.for("immer-nothing"), gh = Symbol.for("immer-draftable"), Nt = Symbol.for("immer-state"), nC = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Pt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = nC[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var zi = Object.getPrototypeOf;
function Gn(e) {
  return !!e && !!e[Nt];
}
function mn(e) {
  return e ? Pm(e) || Array.isArray(e) || !!e[gh] || !!e.constructor?.[gh] || oo(e) || hl(e) : !1;
}
var iC = Object.prototype.constructor.toString(), yh = /* @__PURE__ */ new WeakMap();
function Pm(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = yh.get(r);
  return n === void 0 && (n = Function.toString.call(r), yh.set(r, n)), n === iC;
}
function va(e, t, r = !0) {
  pl(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function pl(e) {
  const t = e[Nt];
  return t ? t.type_ : Array.isArray(e) ? 1 : oo(e) ? 2 : hl(e) ? 3 : 0;
}
function Vc(e, t) {
  return pl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Cm(e, t, r) {
  const n = pl(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function oC(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function oo(e) {
  return e instanceof Map;
}
function hl(e) {
  return e instanceof Set;
}
function rn(e) {
  return e.copy_ || e.base_;
}
function Kc(e, t) {
  if (oo(e))
    return new Map(e);
  if (hl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Pm(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[Nt];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], l = n[a];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[a]
      });
    }
    return Object.create(zi(e), n);
  } else {
    const n = zi(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Ku(e, t = !1) {
  return vl(e) || Gn(e) || !mn(e) || (pl(e) > 1 && Object.defineProperties(e, {
    set: Ro,
    add: Ro,
    clear: Ro,
    delete: Ro
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Ku(r, !0))), e;
}
function aC() {
  Pt(2);
}
var Ro = {
  value: aC
};
function vl(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var lC = {};
function xn(e) {
  const t = lC[e];
  return t || Pt(0, e), t;
}
var Li;
function km() {
  return Li;
}
function sC(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function mh(e, t) {
  t && (xn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Hc(e) {
  qc(e), e.drafts_.forEach(cC), e.drafts_ = null;
}
function qc(e) {
  e === Li && (Li = e.parent_);
}
function xh(e) {
  return Li = sC(Li, e);
}
function cC(e) {
  const t = e[Nt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function bh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Nt].modified_ && (Hc(t), Pt(4)), mn(e) && (e = ga(t, e), t.parent_ || ya(t, e)), t.patches_ && xn("Patches").generateReplacementPatches_(
    r[Nt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ga(t, r, []), Hc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Om ? e : void 0;
}
function ga(e, t, r) {
  if (vl(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[Nt];
  if (!i)
    return va(
      t,
      (o, a) => wh(e, i, t, o, a, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return ya(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const o = i.copy_;
    let a = o, l = !1;
    i.type_ === 3 && (a = new Set(o), o.clear(), l = !0), va(
      a,
      (s, c) => wh(
        e,
        i,
        o,
        s,
        c,
        r,
        l
      ),
      n
    ), ya(e, o, !1), r && e.patches_ && xn("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function wh(e, t, r, n, i, o, a) {
  if (i == null || typeof i != "object" && !a)
    return;
  const l = vl(i);
  if (!(l && !a)) {
    if (process.env.NODE_ENV !== "production" && i === r && Pt(5), Gn(i)) {
      const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Vc(t.assigned_, n) ? o.concat(n) : void 0, c = ga(e, i, s);
      if (Cm(r, n, c), Gn(c))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else a && r.add(i);
    if (mn(i) && !l) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && l)
        return;
      ga(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (oo(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && ya(e, i);
    }
  }
}
function ya(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ku(t, r);
}
function uC(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : km(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, o = Hu;
  r && (i = [n], o = Bi);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, l;
}
var Hu = {
  get(e, t) {
    if (t === Nt)
      return e;
    const r = rn(e);
    if (!Vc(r, t))
      return dC(e, r, t);
    const n = r[t];
    return e.finalized_ || !mn(n) ? n : n === Ys(e.base_, t) ? (Gs(e), e.copy_[t] = Yc(n, e)) : n;
  },
  has(e, t) {
    return t in rn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(rn(e));
  },
  set(e, t, r) {
    const n = _m(rn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Ys(rn(e), t), o = i?.[Nt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (oC(r, i) && (r !== void 0 || Vc(e.base_, t)))
        return !0;
      Gs(e), Uc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ys(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Gs(e), Uc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = rn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Pt(11);
  },
  getPrototypeOf(e) {
    return zi(e.base_);
  },
  setPrototypeOf() {
    Pt(12);
  }
}, Bi = {};
va(Hu, (e, t) => {
  Bi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Bi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Pt(13), Bi.set.call(this, e, t, void 0);
};
Bi.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Pt(14), Hu.set.call(this, e[0], t, r, e[0]);
};
function Ys(e, t) {
  const r = e[Nt];
  return (r ? rn(r) : e)[t];
}
function dC(e, t, r) {
  const n = _m(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function _m(e, t) {
  if (!(t in e))
    return;
  let r = zi(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = zi(r);
  }
}
function Uc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Uc(e.parent_));
}
function Gs(e) {
  e.copy_ || (e.copy_ = Kc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var fC = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const a = this;
        return function(s = o, ...c) {
          return a.produce(s, (u) => r.call(this, u, ...c));
        };
      }
      typeof r != "function" && Pt(6), n !== void 0 && typeof n != "function" && Pt(7);
      let i;
      if (mn(t)) {
        const o = xh(this), a = Yc(t, void 0);
        let l = !0;
        try {
          i = r(a), l = !1;
        } finally {
          l ? Hc(o) : qc(o);
        }
        return mh(o, n), bh(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Om && (i = void 0), this.autoFreeze_ && Ku(i, !0), n) {
          const o = [], a = [];
          xn("Patches").generateReplacementPatches_(t, i, o, a), n(o, a);
        }
        return i;
      } else
        Pt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...l) => this.produceWithPatches(a, (s) => t(s, ...l));
      let n, i;
      return [this.produce(t, r, (a, l) => {
        n = a, i = l;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    mn(e) || Pt(8), Gn(e) && (e = pC(e));
    const t = xh(this), r = Yc(e, void 0);
    return r[Nt].isManual_ = !0, qc(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Nt];
    (!r || !r.isManual_) && Pt(9);
    const { scope_: n } = r;
    return mh(n, t), bh(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = xn("Patches").applyPatches_;
    return Gn(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Yc(e, t) {
  const r = oo(e) ? xn("MapSet").proxyMap_(e, t) : hl(e) ? xn("MapSet").proxySet_(e, t) : uC(e, t);
  return (t ? t.scope_ : km()).drafts_.push(r), r;
}
function pC(e) {
  return Gn(e) || Pt(10, e), Em(e);
}
function Em(e) {
  if (!mn(e) || vl(e))
    return e;
  const t = e[Nt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Kc(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Kc(e, !0);
  return va(
    r,
    (i, o) => {
      Cm(r, i, Em(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var hC = new fC();
hC.produce;
var vC = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, Am = gt({
  name: "legend",
  initialState: vC,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: De()
    },
    replaceLegendPayload: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Vt(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: De()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = Vt(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: De()
    }
  }
}), {
  setLegendSize: u$,
  setLegendSettings: d$,
  addLegendPayload: gC,
  replaceLegendPayload: yC,
  removeLegendPayload: mC
} = Am.actions, xC = Am.reducer, No = { exports: {} }, Xs = {};
var jh;
function bC() {
  if (jh) return Xs;
  jh = 1;
  var e = Le;
  function t(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Xs.useSyncExternalStoreWithSelector = function(s, c, u, f, p) {
    var h = i(null);
    if (h.current === null) {
      var g = { hasValue: !1, value: null };
      h.current = g;
    } else g = h.current;
    h = a(
      function() {
        function y(j) {
          if (!m) {
            if (m = !0, w = j, j = f(j), p !== void 0 && g.hasValue) {
              var S = g.value;
              if (p(S, j))
                return b = S;
            }
            return b = j;
          }
          if (S = b, r(w, j)) return S;
          var C = f(j);
          return p !== void 0 && p(S, C) ? (w = j, S) : (w = j, b = C);
        }
        var m = !1, w, b, x = u === void 0 ? null : u;
        return [
          function() {
            return y(c());
          },
          x === null ? void 0 : function() {
            return y(x());
          }
        ];
      },
      [c, u, f, p]
    );
    var v = n(s, h[0], h[1]);
    return o(
      function() {
        g.hasValue = !0, g.value = v;
      },
      [v]
    ), l(v), v;
  }, Xs;
}
var Zs = {};
var Sh;
function wC() {
  return Sh || (Sh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, c) {
      return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Le, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    Zs.useSyncExternalStoreWithSelector = function(s, c, u, f, p) {
      var h = i(null);
      if (h.current === null) {
        var g = { hasValue: !1, value: null };
        h.current = g;
      } else g = h.current;
      h = a(
        function() {
          function y(j) {
            if (!m) {
              if (m = !0, w = j, j = f(j), p !== void 0 && g.hasValue) {
                var S = g.value;
                if (p(S, j))
                  return b = S;
              }
              return b = j;
            }
            if (S = b, r(w, j))
              return S;
            var C = f(j);
            return p !== void 0 && p(S, C) ? (w = j, S) : (w = j, b = C);
          }
          var m = !1, w, b, x = u === void 0 ? null : u;
          return [
            function() {
              return y(c());
            },
            x === null ? void 0 : function() {
              return y(x());
            }
          ];
        },
        [c, u, f, p]
      );
      var v = n(s, h[0], h[1]);
      return o(
        function() {
          g.hasValue = !0, g.value = v;
        },
        [v]
      ), l(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Zs;
}
var Oh;
function jC() {
  return Oh || (Oh = 1, process.env.NODE_ENV === "production" ? No.exports = bC() : No.exports = wC()), No.exports;
}
jC();
function SC(e) {
  e();
}
function OC() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      SC(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Ph = {
  notify() {
  },
  get: () => []
};
function PC(e, t) {
  let r, n = Ph, i = 0, o = !1;
  function a(v) {
    u();
    const y = n.subscribe(v);
    let m = !1;
    return () => {
      m || (m = !0, y(), f());
    };
  }
  function l() {
    n.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function c() {
    return o;
  }
  function u() {
    i++, r || (r = e.subscribe(s), n = OC());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Ph);
  }
  function p() {
    o || (o = !0, u());
  }
  function h() {
    o && (o = !1, f());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: l,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return g;
}
var CC = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kC = /* @__PURE__ */ CC(), _C = () => typeof navigator < "u" && navigator.product === "ReactNative", EC = /* @__PURE__ */ _C(), AC = () => kC || EC ? P.useLayoutEffect : P.useEffect, TC = /* @__PURE__ */ AC();
function Ch(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function IC(e, t) {
  if (Ch(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Ch(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var MC = /* @__PURE__ */ Symbol.for("react-redux-context"), DC = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function RC() {
  if (!P.createContext) return {};
  const e = DC[MC] ??= /* @__PURE__ */ new Map();
  let t = e.get(P.createContext);
  return t || (t = P.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(P.createContext, t)), t;
}
var NC = /* @__PURE__ */ RC();
function $C(e) {
  const { children: t, context: r, serverState: n, store: i } = e, o = P.useMemo(() => {
    const s = PC(i), c = {
      store: i,
      subscription: s,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return c;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: f = "once" } = e;
      return /* @__PURE__ */ Object.assign(c, {
        stabilityCheck: f,
        identityFunctionCheck: u
      });
    }
  }, [i, n]), a = P.useMemo(() => i.getState(), [i]);
  TC(() => {
    const { subscription: s } = o;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), a !== i.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [o, a]);
  const l = r || NC;
  return /* @__PURE__ */ P.createElement(l.Provider, { value: o }, t);
}
var zC = $C, LC = /* @__PURE__ */ new Set([
  "axisLine",
  "tickLine",
  "activeBar",
  "activeDot",
  "activeLabel",
  "activeShape",
  "allowEscapeViewBox",
  "background",
  "cursor",
  "dot",
  "label",
  "line",
  "margin",
  "padding",
  "position",
  "shape",
  "style",
  "tick",
  "wrapperStyle",
  // radius can be an array of 4 numbers, easy to compare shallowly
  "radius",
  "throttledEvents"
]);
function BC(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function ao(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (LC.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!IC(e[n], t[n]))
        return !1;
    } else if (!BC(e[n], t[n]))
      return !1;
  return !0;
}
function Gc() {
  return Gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gc.apply(null, arguments);
}
function kh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kh(Object(r), !0).forEach(function(n) {
      WC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WC(e, t, r) {
  return (t = FC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FC(e) {
  var t = VC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function KC(e) {
  return Array.isArray(e) && qt(e[0]) && qt(e[1]) ? e.join(" ~ ") : e;
}
var In = {
  separator: " : ",
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  },
  itemStyle: {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  },
  labelStyle: {},
  accessibilityLayer: !1
};
function HC(e, t) {
  return t == null ? e : Qa(e, t);
}
var qC = (e) => {
  var {
    separator: t = In.separator,
    contentStyle: r,
    itemStyle: n,
    labelStyle: i = In.labelStyle,
    payload: o,
    formatter: a,
    itemSorter: l,
    wrapperClassName: s,
    labelClassName: c,
    label: u,
    labelFormatter: f,
    accessibilityLayer: p = In.accessibilityLayer
  } = e, h = () => {
    if (o && o.length) {
      var j = {
        padding: 0,
        margin: 0
      }, S = HC(o, l), C = S.map((_, E) => {
        if (!_ || _.type === "none")
          return null;
        var T = _.formatter || a || KC, {
          value: D,
          name: k
        } = _, W = D, F = k;
        if (T) {
          var Z = T(D, k, _, E, o);
          if (Array.isArray(Z))
            [W, F] = Z;
          else if (Z != null)
            W = Z;
          else
            return null;
        }
        var q = gi(gi({}, In.itemStyle), {}, {
          color: _.color || In.itemStyle.color
        }, n);
        return /* @__PURE__ */ P.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(E),
          style: q
        }, qt(F) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, F) : null, qt(F) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, W), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, _.unit || ""));
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: j
      }, C);
    }
    return null;
  }, g = gi(gi({}, In.contentStyle), r), v = gi({
    margin: 0
  }, i), y = !Be(u), m = y ? u : "", w = Pe("recharts-default-tooltip", s), b = Pe("recharts-tooltip-label", c);
  y && f && o !== void 0 && o !== null && (m = f(u, o));
  var x = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", Gc({
    className: w,
    style: g
  }, x), /* @__PURE__ */ P.createElement("p", {
    className: b,
    style: v
  }, /* @__PURE__ */ P.isValidElement(m) ? m : "".concat(m)), h());
}, yi = "recharts-tooltip-wrapper", UC = {
  visibility: "hidden"
};
function YC(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return Pe(yi, {
    ["".concat(yi, "-right")]: ne(r) && t && ne(t.x) && r >= t.x,
    ["".concat(yi, "-left")]: ne(r) && t && ne(t.x) && r < t.x,
    ["".concat(yi, "-bottom")]: ne(n) && t && ne(t.y) && n >= t.y,
    ["".concat(yi, "-top")]: ne(n) && t && ne(t.y) && n < t.y
  });
}
function _h(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l,
    viewBox: s,
    viewBoxDimension: c
  } = e;
  if (o && ne(o[n]))
    return o[n];
  var u = r[n] - l - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return a[n] ? u : f;
  var p = s[n];
  if (p == null)
    return 0;
  if (a[n]) {
    var h = u, g = p;
    return h < g ? Math.max(f, p) : Math.max(u, p);
  }
  if (c == null)
    return 0;
  var v = f + l, y = p + c;
  return v > y ? Math.max(u, p) : Math.max(f, p);
}
function GC(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function XC(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTop: n,
    offsetLeft: i,
    position: o,
    reverseDirection: a,
    tooltipBox: l,
    useTranslate3d: s,
    viewBox: c
  } = e, u, f, p;
  return l.height > 0 && l.width > 0 && r ? (f = _h({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = _h({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = GC({
    translateX: f,
    translateY: p,
    useTranslate3d: s
  })) : u = UC, {
    cssProperties: u,
    cssClasses: YC({
      translateX: f,
      translateY: p,
      coordinate: r
    })
  };
}
var ZC = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), lo = {
  isSsr: ZC()
};
function Tm() {
  var [e, t] = B(() => lo.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return Se(() => {
    if (window.matchMedia) {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
        t(r.matches);
      };
      return r.addEventListener("change", n), () => {
        r.removeEventListener("change", n);
      };
    }
  }, []), e;
}
function Eh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eh(Object(r), !0).forEach(function(n) {
      JC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JC(e, t, r) {
  return (t = QC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QC(e) {
  var t = ek(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ek(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tk(e) {
  if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active)
    return "transform ".concat(e.animationDuration, "ms ").concat(e.animationEasing);
}
function rk(e) {
  var t, r, n, i, o, a, l = Tm(), [s, c] = P.useState(() => ({
    dismissed: !1,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  P.useEffect(() => {
    var g = (v) => {
      if (v.key === "Escape") {
        var y, m, w, b;
        c({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (y = (m = e.coordinate) === null || m === void 0 ? void 0 : m.x) !== null && y !== void 0 ? y : 0,
            y: (w = (b = e.coordinate) === null || b === void 0 ? void 0 : b.y) !== null && w !== void 0 ? w : 0
          }
        });
      }
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [(t = e.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e.coordinate) === null || r === void 0 ? void 0 : r.y]), s.dismissed && (((n = (i = e.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== s.dismissedAtCoordinate.x || ((o = (a = e.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && o !== void 0 ? o : 0) !== s.dismissedAtCoordinate.y) && c(Mn(Mn({}, s), {}, {
    dismissed: !1
  }));
  var {
    cssClasses: u,
    cssProperties: f
  } = XC({
    allowEscapeViewBox: e.allowEscapeViewBox,
    coordinate: e.coordinate,
    offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
    offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
    position: e.position,
    reverseDirection: e.reverseDirection,
    tooltipBox: {
      height: e.lastBoundingBox.height,
      width: e.lastBoundingBox.width
    },
    useTranslate3d: e.useTranslate3d,
    viewBox: e.viewBox
  }), p = e.hasPortalFromProps ? {} : Mn(Mn({
    transition: tk({
      prefersReducedMotion: l,
      isAnimationActive: e.isAnimationActive,
      active: e.active,
      animationDuration: e.animationDuration,
      animationEasing: e.animationEasing
    })
  }, f), {}, {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    left: 0
  }), h = Mn(Mn({}, p), {}, {
    visibility: !s.dismissed && e.active && e.hasPayload ? "visible" : "hidden"
  }, e.wrapperStyle);
  return /* @__PURE__ */ P.createElement("div", {
    // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
    xmlns: "http://www.w3.org/1999/xhtml",
    tabIndex: -1,
    className: u,
    style: h,
    ref: e.innerRef
  }, e.children);
}
var nk = /* @__PURE__ */ P.memo(rk), Im = () => {
  var e;
  return (e = ae((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function Xc() {
  return Xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xc.apply(null, arguments);
}
function Ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      ik(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ik(e, t, r) {
  return (t = ok(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ok(e) {
  var t = ak(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ak(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ih = {
  curveBasisClosed: gj,
  curveBasisOpen: yj,
  curveBasis: vj,
  curveBumpX: tj,
  curveBumpY: rj,
  curveLinearClosed: mj,
  curveLinear: Za,
  curveMonotoneX: xj,
  curveMonotoneY: bj,
  curveNatural: wj,
  curveStep: jj,
  curveStepAfter: Oj,
  curveStepBefore: Sj
}, ma = (e) => pe(e.x) && pe(e.y), Mh = (e) => e.base != null && ma(e.base) && ma(e), mi = (e) => e.x, xi = (e) => e.y, lk = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Zi(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = Ih["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return Ih[r] || Za;
}, Dh = {
  connectNulls: !1,
  type: "linear"
}, sk = (e) => {
  var {
    type: t = Dh.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: o = Dh.connectNulls
  } = e, a = lk(t, i), l = o ? r.filter(ma) : r;
  if (Array.isArray(n)) {
    var s, c = r.map((g, v) => Th(Th({}, g), {}, {
      base: n[v]
    }));
    i === "vertical" ? s = Po().y(xi).x1(mi).x0((g) => g.base.x) : s = Po().x(mi).y1(xi).y0((g) => g.base.y);
    var u = s.defined(Mh).curve(a), f = o ? c.filter(Mh) : c;
    return u(f);
  }
  var p;
  i === "vertical" && ne(n) ? p = Po().y(xi).x1(mi).x0(n) : ne(n) ? p = Po().x(mi).y1(xi).y0(n) : p = ry().x(mi).y(xi);
  var h = p.defined(ma).curve(a);
  return h(l);
}, Ai = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, o = Cn();
  if ((!r || !r.length) && !n)
    return null;
  var a = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || o,
    connectNulls: e.connectNulls
  }, l = r && r.length ? sk(a) : n;
  return /* @__PURE__ */ P.createElement("path", Xc({}, Ht(e), Eu(e), {
    className: Pe("recharts-curve", t),
    d: l === null ? void 0 : l,
    ref: i
  }));
}, ck = ["x", "y", "top", "left", "width", "height", "className"];
function Zc() {
  return Zc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zc.apply(null, arguments);
}
function Rh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rh(Object(r), !0).forEach(function(n) {
      dk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dk(e, t, r) {
  return (t = fk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fk(e) {
  var t = pk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hk(e, t) {
  if (e == null) return {};
  var r, n, i = vk(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function vk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var gk = (e, t, r, n, i, o) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(o, ",").concat(t, "h").concat(r), yk = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: o = 0,
    height: a = 0,
    className: l
  } = e, s = hk(e, ck), c = uk({
    x: t,
    y: r,
    top: n,
    left: i,
    width: o,
    height: a
  }, s);
  return !ne(t) || !ne(r) || !ne(o) || !ne(a) || !ne(n) || !ne(i) ? null : /* @__PURE__ */ P.createElement("path", Zc({}, vt(c), {
    className: Pe("recharts-cross", l),
    d: gk(t, r, o, a, n, i)
  }));
};
function mk(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Nh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nh(Object(r), !0).forEach(function(n) {
      xk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xk(e, t, r) {
  return (t = bk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bk(e) {
  var t = wk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jk = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), Mm = (e, t, r) => e.map((n) => "".concat(jk(n), " ").concat(t, "ms ").concat(r)).join(","), Sk = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Wi = (e, t) => Object.keys(t).reduce((r, n) => $h($h({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zh(Object(r), !0).forEach(function(n) {
      Ok(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ok(e, t, r) {
  return (t = Pk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pk(e) {
  var t = Ck(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ck(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xa = (e, t, r) => e + (t - e) * r, Jc = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, Dm = (e, t, r) => {
  var n = Wi((i, o) => {
    if (Jc(o)) {
      var [a, l] = e(o.from, o.to, o.velocity);
      return Ze(Ze({}, o), {}, {
        from: a,
        velocity: l
      });
    }
    return o;
  }, t);
  return r < 1 ? Wi((i, o) => Jc(o) && n[i] != null ? Ze(Ze({}, o), {}, {
    velocity: xa(o.velocity, n[i].velocity, r),
    from: xa(o.from, n[i].from, r)
  }) : o, t) : Dm(e, n, r - 1);
};
function kk(e, t, r, n, i, o) {
  var a, l = n.reduce((p, h) => Ze(Ze({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), s = () => Wi((p, h) => h.from, l), c = () => !Object.values(l).filter(Jc).length, u = null, f = (p) => {
    a || (a = p);
    var h = p - a, g = h / r.dt;
    l = Dm(r, l, g), i(Ze(Ze(Ze({}, e), t), s())), a = p, c() || (u = o.setTimeout(f));
  };
  return () => (u = o.setTimeout(f), () => {
    var p;
    (p = u) === null || p === void 0 || p();
  });
}
function _k(e, t, r, n, i, o, a) {
  var l = null, s = i.reduce((f, p) => {
    var h = e[p], g = t[p];
    return h == null || g == null ? f : Ze(Ze({}, f), {}, {
      [p]: [h, g]
    });
  }, {}), c, u = (f) => {
    c || (c = f);
    var p = (f - c) / n, h = Wi((v, y) => xa(...y, r(p)), s);
    if (o(Ze(Ze(Ze({}, e), t), h)), p < 1)
      l = a.setTimeout(u);
    else {
      var g = Wi((v, y) => xa(...y, r(1)), s);
      o(Ze(Ze(Ze({}, e), t), g));
    }
  };
  return () => (l = a.setTimeout(u), () => {
    var f;
    (f = l) === null || f === void 0 || f();
  });
}
const Ek = (e, t, r, n, i, o) => {
  var a = Sk(e, t);
  return r == null ? () => (i(Ze(Ze({}, e), t)), () => {
  }) : r.isStepper === !0 ? kk(e, t, r, a, i, o) : _k(e, t, r, n, a, i, o);
};
var ba = 1e-4, Rm = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], Nm = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Lh = (e, t) => (r) => {
  var n = Rm(e, t);
  return Nm(n, r);
}, Ak = (e, t) => (r) => {
  var n = Rm(e, t), i = [...n.map((o, a) => o * a).slice(1), 0];
  return Nm(i, r);
}, Tk = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((o) => parseFloat(o));
  return [i[0], i[1], i[2], i[3]];
}, Ik = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        return [0, 0, 1, 1];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "ease-in":
        return [0.42, 0, 1, 1];
      case "ease-out":
        return [0.42, 0, 0.58, 1];
      case "ease-in-out":
        return [0, 0, 0.58, 1];
      default: {
        var i = Tk(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, Mk = (e, t, r, n) => {
  var i = Lh(e, r), o = Lh(t, n), a = Ak(e, r), l = (c) => c > 1 ? 1 : c < 0 ? 0 : c, s = (c) => {
    for (var u = c > 1 ? 1 : c, f = u, p = 0; p < 8; ++p) {
      var h = i(f) - u, g = a(f);
      if (Math.abs(h - u) < ba || g < ba)
        return o(f);
      f = l(f - h / g);
    }
    return o(f);
  };
  return s.isStepper = !1, s;
}, Bh = function() {
  return Mk(...Ik(...arguments));
}, Dk = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, o = (a, l, s) => {
    var c = -(a - l) * r, u = s * n, f = s + (c - u) * i / 1e3, p = s * i / 1e3 + a;
    return Math.abs(p - l) < ba && Math.abs(f) < ba ? [l, 0] : [p, f];
  };
  return o.isStepper = !0, o.dt = i, o;
}, Rk = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Bh(e);
      case "spring":
        return Dk();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return Bh(e);
    }
  return typeof e == "function" ? e : null;
};
function Nk(e) {
  var t, r = () => null, n = !1, i = null, o = (a) => {
    if (!n) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var l = a, [s, ...c] = l;
        if (typeof s == "number") {
          i = e.setTimeout(o.bind(null, c), s);
          return;
        }
        o(s), i = e.setTimeout(o.bind(null, c));
        return;
      }
      typeof a == "string" && (t = a, r(t)), typeof a == "object" && (t = a, r(t)), typeof a == "function" && a();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (a) => {
      n = !1, i && (i(), i = null), o(a);
    },
    subscribe: (a) => (r = a, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class $k {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, o = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(o));
    };
    return i = requestAnimationFrame(o), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function zk() {
  return Nk(new $k());
}
var Lk = /* @__PURE__ */ At(zk);
function Bk(e, t) {
  var r = $t(Lk);
  return er(() => t ?? r(e), [e, t, r]);
}
var Wk = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, Wh = {
  t: 0
}, Js = {
  t: 1
};
function gl(e) {
  var t = jt(e, Wk), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: o,
    begin: a,
    onAnimationEnd: l,
    onAnimationStart: s,
    children: c
  } = t, u = Tm(), f = r === "auto" ? !lo.isSsr && !u : r, p = Bk(t.animationId, t.animationManager), [h, g] = B(f ? Wh : Js), v = ge(null);
  return Se(() => {
    f || g(Js);
  }, [f]), Se(() => {
    if (!f || !n)
      return Pn;
    var y = Ek(Wh, Js, Rk(o), i, g, p.getTimeoutController()), m = () => {
      v.current = y();
    };
    return p.start([s, a, m, i, l]), () => {
      p.stop(), v.current && v.current(), l();
    };
  }, [f, n, i, o, a, s, l, p]), c(h.t);
}
function yl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = ge(Di(t)), n = ge(e);
  return n.current !== e && (r.current = Di(t), n.current = e), r.current;
}
var Fk = ["radius"], Vk = ["radius"], Fh, Vh, Kh, Hh, qh, Uh, Yh, Gh, Xh, Zh;
function Jh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jh(Object(r), !0).forEach(function(n) {
      Kk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kk(e, t, r) {
  return (t = Hk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hk(e) {
  var t = qk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wa.apply(null, arguments);
}
function ev(e, t) {
  if (e == null) return {};
  var r, n, i = Uk(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Uk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ir(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var tv = (e, t, r, n, i) => {
  var o = Wr(r), a = Wr(n), l = Math.min(Math.abs(o) / 2, Math.abs(a) / 2), s = a >= 0 ? 1 : -1, c = o >= 0 ? 1 : -1, u = a >= 0 && o >= 0 || a < 0 && o < 0 ? 1 : 0, f;
  if (l > 0 && Array.isArray(i)) {
    for (var p = [0, 0, 0, 0], h = 0, g = 4; h < g; h++) {
      var v, y = (v = i[h]) !== null && v !== void 0 ? v : 0;
      p[h] = y > l ? l : y;
    }
    f = Ve(Fh || (Fh = ir(["M", ",", ""])), e, t + s * p[0]), p[0] > 0 && (f += Ve(Vh || (Vh = ir(["A ", ",", ",0,0,", ",", ",", ""])), p[0], p[0], u, e + c * p[0], t)), f += Ve(Kh || (Kh = ir(["L ", ",", ""])), e + r - c * p[1], t), p[1] > 0 && (f += Ve(Hh || (Hh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[1], p[1], u, e + r, t + s * p[1])), f += Ve(qh || (qh = ir(["L ", ",", ""])), e + r, t + n - s * p[2]), p[2] > 0 && (f += Ve(Uh || (Uh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[2], p[2], u, e + r - c * p[2], t + n)), f += Ve(Yh || (Yh = ir(["L ", ",", ""])), e + c * p[3], t + n), p[3] > 0 && (f += Ve(Gh || (Gh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[3], p[3], u, e, t + n - s * p[3])), f += "Z";
  } else if (l > 0 && i === +i && i > 0) {
    var m = Math.min(l, i);
    f = Ve(Xh || (Xh = ir(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + s * m, m, m, u, e + c * m, t, e + r - c * m, t, m, m, u, e + r, t + s * m, e + r, t + n - s * m, m, m, u, e + r - c * m, t + n, e + c * m, t + n, m, m, u, e, t + n - s * m);
  } else
    f = Ve(Zh || (Zh = ir(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return f;
}, rv = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, $m = (e) => {
  var t = jt(e, rv), r = ge(null), [n, i] = B(-1);
  Se(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var ie = r.current.getTotalLength();
        ie && i(ie);
      } catch {
      }
  }, []);
  var {
    x: o,
    y: a,
    width: l,
    height: s,
    radius: c,
    className: u
  } = t, {
    animationEasing: f,
    animationDuration: p,
    animationBegin: h,
    isAnimationActive: g,
    isUpdateAnimationActive: v
  } = t, y = ge(l), m = ge(s), w = ge(o), b = ge(a), x = er(() => ({
    x: o,
    y: a,
    width: l,
    height: s,
    radius: c
  }), [o, a, l, s, c]), j = yl(x, "rectangle-");
  if (o !== +o || a !== +a || l !== +l || s !== +s || l === 0 || s === 0)
    return null;
  var S = Pe("recharts-rectangle", u);
  if (!v) {
    var C = vt(t), {
      radius: _
    } = C, E = ev(C, Fk);
    return /* @__PURE__ */ P.createElement("path", wa({}, E, {
      x: Wr(o),
      y: Wr(a),
      width: Wr(l),
      height: Wr(s),
      radius: typeof c == "number" ? c : void 0,
      className: S,
      d: tv(o, a, l, s, c)
    }));
  }
  var T = y.current, D = m.current, k = w.current, W = b.current, F = "0px ".concat(n === -1 ? 1 : n, "px"), Z = "".concat(n, "px ").concat(n, "px"), q = Mm(["strokeDasharray"], p, typeof f == "string" ? f : rv.animationEasing);
  return /* @__PURE__ */ P.createElement(gl, {
    animationId: j,
    key: j,
    canBegin: n > 0,
    duration: p,
    easing: f,
    isActive: v,
    begin: h
  }, (ie) => {
    var z = ze(T, l, ie), L = ze(D, s, ie), V = ze(k, o, ie), N = ze(W, a, ie);
    r.current && (y.current = z, m.current = L, w.current = V, b.current = N);
    var $;
    g ? ie > 0 ? $ = {
      transition: q,
      strokeDasharray: Z
    } : $ = {
      strokeDasharray: F
    } : $ = {
      strokeDasharray: Z
    };
    var J = vt(t), {
      radius: X
    } = J, ee = ev(J, Vk);
    return /* @__PURE__ */ P.createElement("path", wa({}, ee, {
      radius: typeof c == "number" ? c : void 0,
      className: S,
      d: tv(V, N, z, L, c),
      ref: r,
      style: Qh(Qh({}, $), t.style)
    }));
  });
};
function nv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nv(Object(r), !0).forEach(function(n) {
      Yk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yk(e, t, r) {
  return (t = Gk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gk(e) {
  var t = Xk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ja = Math.PI / 180, Zk = (e) => e * 180 / Math.PI, st = (e, t, r, n) => ({
  x: e + Math.cos(-ja * n) * r,
  y: t + Math.sin(-ja * n) * r
}), Jk = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Qk = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: o
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - o) ** 2);
}, e4 = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: o
  } = t, a = Qk({
    x: r,
    y: n
  }, {
    x: i,
    y: o
  });
  if (a <= 0)
    return {
      radius: a,
      angle: 0
    };
  var l = (r - i) / a, s = Math.acos(l);
  return n > o && (s = 2 * Math.PI - s), {
    radius: a,
    angle: Zk(s),
    angleInRadian: s
  };
}, t4 = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), o = Math.min(n, i);
  return {
    startAngle: t - o * 360,
    endAngle: r - o * 360
  };
}, r4 = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), o = Math.floor(n / 360), a = Math.min(i, o);
  return e + a * 360;
}, n4 = (e, t) => {
  var {
    relativeX: r,
    relativeY: n
  } = e, {
    radius: i,
    angle: o
  } = e4({
    x: r,
    y: n
  }, t), {
    innerRadius: a,
    outerRadius: l
  } = t;
  if (i < a || i > l || i === 0)
    return null;
  var {
    startAngle: s,
    endAngle: c
  } = t4(t), u = o, f;
  if (s <= c) {
    for (; u > c; )
      u -= 360;
    for (; u < s; )
      u += 360;
    f = u >= s && u <= c;
  } else {
    for (; u > s; )
      u -= 360;
    for (; u < c; )
      u += 360;
    f = u >= c && u <= s;
  }
  return f ? iv(iv({}, t), {}, {
    radius: i,
    angle: r4(u, t)
  }) : null;
};
function zm(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: o
  } = e, a = st(t, r, n, i), l = st(t, r, n, o);
  return {
    points: [a, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: o
  };
}
var ov, av, lv, sv, cv, uv, dv;
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qc.apply(null, arguments);
}
function an(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var i4 = (e, t) => {
  var r = Ct(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, $o = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: o,
    isExternal: a,
    cornerRadius: l,
    cornerIsExternal: s
  } = e, c = l * (a ? 1 : -1) + n, u = Math.asin(l / c) / ja, f = s ? i : i + o * u, p = st(t, r, c, f), h = st(t, r, n, f), g = s ? i - o * u : i, v = st(t, r, c * Math.cos(u * ja), g);
  return {
    center: p,
    circleTangency: h,
    lineTangency: v,
    theta: u
  };
}, Lm = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: o,
    endAngle: a
  } = e, l = i4(o, a), s = o + l, c = st(t, r, i, o), u = st(t, r, i, s), f = Ve(ov || (ov = an(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), c.x, c.y, i, i, +(Math.abs(l) > 180), +(o > s), u.x, u.y);
  if (n > 0) {
    var p = st(t, r, n, o), h = st(t, r, n, s);
    f += Ve(av || (av = an(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), h.x, h.y, n, n, +(Math.abs(l) > 180), +(o <= s), p.x, p.y);
  } else
    f += Ve(lv || (lv = an(["L ", ",", " Z"])), t, r);
  return f;
}, o4 = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: o,
    forceCornerRadius: a,
    cornerIsExternal: l,
    startAngle: s,
    endAngle: c
  } = e, u = Ct(c - s), {
    circleTangency: f,
    lineTangency: p,
    theta: h
  } = $o({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: u,
    cornerRadius: o,
    cornerIsExternal: l
  }), {
    circleTangency: g,
    lineTangency: v,
    theta: y
  } = $o({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -u,
    cornerRadius: o,
    cornerIsExternal: l
  }), m = l ? Math.abs(s - c) : Math.abs(s - c) - h - y;
  if (m < 0)
    return a ? Ve(sv || (sv = an(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), p.x, p.y, o, o, o * 2, o, o, -o * 2) : Lm({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: s,
      endAngle: c
    });
  var w = Ve(cv || (cv = an(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), p.x, p.y, o, o, +(u < 0), f.x, f.y, i, i, +(m > 180), +(u < 0), g.x, g.y, o, o, +(u < 0), v.x, v.y);
  if (n > 0) {
    var {
      circleTangency: b,
      lineTangency: x,
      theta: j
    } = $o({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), {
      circleTangency: S,
      lineTangency: C,
      theta: _
    } = $o({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), E = l ? Math.abs(s - c) : Math.abs(s - c) - j - _;
    if (E < 0 && o === 0)
      return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += Ve(uv || (uv = an(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), C.x, C.y, o, o, +(u < 0), S.x, S.y, n, n, +(E > 180), +(u > 0), b.x, b.y, o, o, +(u < 0), x.x, x.y);
  } else
    w += Ve(dv || (dv = an(["L", ",", "Z"])), t, r);
  return w;
}, a4 = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Bm = (e) => {
  var t = jt(e, a4), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: a,
    forceCornerRadius: l,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: u,
    className: f
  } = t;
  if (o < i || c === u)
    return null;
  var p = Pe("recharts-sector", f), h = o - i, g = Jt(a, h, 0, !0), v;
  return g > 0 && Math.abs(c - u) < 360 ? v = o4({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(g, h / 2),
    forceCornerRadius: l,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: u
  }) : v = Lm({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    startAngle: c,
    endAngle: u
  }), /* @__PURE__ */ P.createElement("path", Qc({}, vt(t), {
    className: p,
    d: v
  }));
};
function l4(e, t, r) {
  if (e === "horizontal")
    return [{
      x: t.x,
      y: r.top
    }, {
      x: t.x,
      y: r.top + r.height
    }];
  if (e === "vertical")
    return [{
      x: r.left,
      y: t.y
    }, {
      x: r.left + r.width,
      y: t.y
    }];
  if (my(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: o,
        outerRadius: a,
        angle: l
      } = t, s = st(n, i, o, l), c = st(n, i, a, l);
      return [{
        x: s.x,
        y: s.y
      }, {
        x: c.x,
        y: c.y
      }];
    }
    return zm(t);
  }
}
var Qs = {}, ec = {}, tc = {}, fv;
function s4() {
  return fv || (fv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ay();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(tc)), tc;
}
var pv;
function c4() {
  return pv || (pv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ s4();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(ec)), ec;
}
var hv;
function u4() {
  return hv || (hv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ty(), r = /* @__PURE__ */ c4();
    function n(i, o, a) {
      a && typeof a != "number" && t.isIterateeCall(i, o, a) && (o = a = void 0), i = r.toFinite(i), o === void 0 ? (o = i, i = 0) : o = r.toFinite(o), a = a === void 0 ? i < o ? 1 : -1 : r.toFinite(a);
      const l = Math.max(Math.ceil((o - i) / (a || 1)), 0), s = new Array(l);
      for (let c = 0; c < l; c++)
        s[c] = i, i += a;
      return s;
    }
    e.range = n;
  })(Qs)), Qs;
}
var rc, vv;
function d4() {
  return vv || (vv = 1, rc = u4().range), rc;
}
var f4 = /* @__PURE__ */ d4();
const Wm = /* @__PURE__ */ On(f4);
var rr = (e) => e.chartData, qu = R([rr], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), ml = (e, t, r, n) => n ? qu(e) : rr(e), Fm = (e, t, r) => r ? qu(e) : rr(e), p4 = R([ml], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
R([qu], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
var h4 = R([rr], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
function cr(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (pe(t) && pe(r))
      return !0;
  }
  return !1;
}
function gv(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Vm(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, o;
    if (pe(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (pe(n))
      o = n;
    else if (typeof n == "function")
      return;
    var a = [i, o];
    if (cr(a))
      return a;
  }
}
function v4(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (cr(n))
          return gv(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, o] = e, a, l;
      if (i === "auto")
        t != null && (a = Math.min(...t));
      else if (ne(i))
        a = i;
      else if (typeof i == "function")
        try {
          t != null && (a = i(t?.[0]));
        } catch {
        }
      else if (typeof i == "string" && ah.test(i)) {
        var s = ah.exec(i);
        if (s == null || s[1] == null || t == null)
          a = void 0;
        else {
          var c = +s[1];
          a = t[0] - c;
        }
      } else
        a = t?.[0];
      if (o === "auto")
        t != null && (l = Math.max(...t));
      else if (ne(o))
        l = o;
      else if (typeof o == "function")
        try {
          t != null && (l = o(t?.[1]));
        } catch {
        }
      else if (typeof o == "string" && lh.test(o)) {
        var u = lh.exec(o);
        if (u == null || u[1] == null || t == null)
          l = void 0;
        else {
          var f = +u[1];
          l = t[1] + f;
        }
      } else
        l = t?.[1];
      var p = [a, l];
      if (cr(p))
        return t == null ? p : gv(p, t, r);
    }
  }
}
var ni = 1e9, g4 = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Yu, Ne = !0, Ut = "[DecimalError] ", fn = Ut + "Invalid argument: ", Uu = Ut + "Exponent out of range: ", ii = Math.floor, nn = Math.pow, y4 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, It, tt = 1e7, Re = 7, Km = 9007199254740991, Sa = ii(Km / Re), oe = {};
oe.absoluteValue = oe.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
oe.comparedTo = oe.cmp = function(e) {
  var t, r, n, i, o = this;
  if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
  if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
  for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
};
oe.decimalPlaces = oe.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Re;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
oe.dividedBy = oe.div = function(e) {
  return Or(this, new this.constructor(e));
};
oe.dividedToIntegerBy = oe.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ae(Or(t, new r(e), 0, 1), r.precision);
};
oe.equals = oe.eq = function(e) {
  return !this.cmp(e);
};
oe.exponent = function() {
  return Ye(this);
};
oe.greaterThan = oe.gt = function(e) {
  return this.cmp(e) > 0;
};
oe.greaterThanOrEqualTo = oe.gte = function(e) {
  return this.cmp(e) >= 0;
};
oe.isInteger = oe.isint = function() {
  return this.e > this.d.length - 2;
};
oe.isNegative = oe.isneg = function() {
  return this.s < 0;
};
oe.isPositive = oe.ispos = function() {
  return this.s > 0;
};
oe.isZero = function() {
  return this.s === 0;
};
oe.lessThan = oe.lt = function(e) {
  return this.cmp(e) < 0;
};
oe.lessThanOrEqualTo = oe.lte = function(e) {
  return this.cmp(e) < 1;
};
oe.logarithm = oe.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(It)) throw Error(Ut + "NaN");
  if (r.s < 1) throw Error(Ut + (r.s ? "NaN" : "-Infinity"));
  return r.eq(It) ? new n(0) : (Ne = !1, t = Or(Fi(r, o), Fi(e, o), o), Ne = !0, Ae(t, i));
};
oe.minus = oe.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Um(t, e) : Hm(t, (e.s = -e.s, e));
};
oe.modulo = oe.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Ut + "NaN");
  return r.s ? (Ne = !1, t = Or(r, e, 0, 1).times(e), Ne = !0, r.minus(t)) : Ae(new n(r), i);
};
oe.naturalExponential = oe.exp = function() {
  return qm(this);
};
oe.naturalLogarithm = oe.ln = function() {
  return Fi(this);
};
oe.negated = oe.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
oe.plus = oe.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Hm(t, e) : Um(t, (e.s = -e.s, e));
};
oe.precision = oe.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(fn + e);
  if (t = Ye(i) + 1, n = i.d.length - 1, r = n * Re + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
oe.squareRoot = oe.sqrt = function() {
  var e, t, r, n, i, o, a, l = this, s = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new s(0);
    throw Error(Ut + "NaN");
  }
  for (e = Ye(l), Ne = !1, i = Math.sqrt(+l), i == 0 || i == 1 / 0 ? (t = sr(l.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ii((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = a = r + 3; ; )
    if (o = n, n = o.plus(Or(l, o, a + 2)).times(0.5), sr(o.d).slice(0, a) === (t = sr(n.d)).slice(0, a)) {
      if (t = t.slice(a - 3, a + 1), i == a && t == "4999") {
        if (Ae(o, r + 1, 0), o.times(o).eq(l)) {
          n = o;
          break;
        }
      } else if (t != "9999")
        break;
      a += 4;
    }
  return Ne = !0, Ae(n, r);
};
oe.times = oe.mul = function(e) {
  var t, r, n, i, o, a, l, s, c, u = this, f = u.constructor, p = u.d, h = (e = new f(e)).d;
  if (!u.s || !e.s) return new f(0);
  for (e.s *= u.s, r = u.e + e.e, s = p.length, c = h.length, s < c && (o = p, p = h, h = o, a = s, s = c, c = a), o = [], a = s + c, n = a; n--; ) o.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      l = o[i] + h[n] * p[i - n - 1] + t, o[i--] = l % tt | 0, t = l / tt | 0;
    o[i] = (o[i] + t) % tt | 0;
  }
  for (; !o[--a]; ) o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = r, Ne ? Ae(e, f.precision) : e;
};
oe.toDecimalPlaces = oe.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fr(e, 0, ni), t === void 0 ? t = n.rounding : fr(t, 0, 8), Ae(r, e + Ye(r) + 1, t));
};
oe.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = bn(n, !0) : (fr(e, 0, ni), t === void 0 ? t = i.rounding : fr(t, 0, 8), n = Ae(new i(n), e + 1, t), r = bn(n, !0, e + 1)), r;
};
oe.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? bn(i) : (fr(e, 0, ni), t === void 0 ? t = o.rounding : fr(t, 0, 8), n = Ae(new o(i), e + Ye(i) + 1, t), r = bn(n.abs(), !1, e + Ye(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
oe.toInteger = oe.toint = function() {
  var e = this, t = e.constructor;
  return Ae(new t(e), Ye(e) + 1, t.rounding);
};
oe.toNumber = function() {
  return +this;
};
oe.toPower = oe.pow = function(e) {
  var t, r, n, i, o, a, l = this, s = l.constructor, c = 12, u = +(e = new s(e));
  if (!e.s) return new s(It);
  if (l = new s(l), !l.s) {
    if (e.s < 1) throw Error(Ut + "Infinity");
    return l;
  }
  if (l.eq(It)) return l;
  if (n = s.precision, e.eq(It)) return Ae(l, n);
  if (t = e.e, r = e.d.length - 1, a = t >= r, o = l.s, a) {
    if ((r = u < 0 ? -u : u) <= Km) {
      for (i = new s(It), t = Math.ceil(n / Re + 4), Ne = !1; r % 2 && (i = i.times(l), mv(i.d, t)), r = ii(r / 2), r !== 0; )
        l = l.times(l), mv(l.d, t);
      return Ne = !0, e.s < 0 ? new s(It).div(i) : Ae(i, n);
    }
  } else if (o < 0) throw Error(Ut + "NaN");
  return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, Ne = !1, i = e.times(Fi(l, n + c)), Ne = !0, i = qm(i), i.s = o, i;
};
oe.toPrecision = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? (r = Ye(i), n = bn(i, r <= o.toExpNeg || r >= o.toExpPos)) : (fr(e, 1, ni), t === void 0 ? t = o.rounding : fr(t, 0, 8), i = Ae(new o(i), e, t), r = Ye(i), n = bn(i, e <= r || r <= o.toExpNeg, e)), n;
};
oe.toSignificantDigits = oe.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fr(e, 1, ni), t === void 0 ? t = n.rounding : fr(t, 0, 8)), Ae(new n(r), e, t);
};
oe.toString = oe.valueOf = oe.val = oe.toJSON = oe[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Ye(e), r = e.constructor;
  return bn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Hm(e, t) {
  var r, n, i, o, a, l, s, c, u = e.constructor, f = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), Ne ? Ae(t, f) : t;
  if (s = e.d, c = t.d, a = e.e, i = t.e, s = s.slice(), o = a - i, o) {
    for (o < 0 ? (n = s, o = -o, l = c.length) : (n = c, i = a, l = s.length), a = Math.ceil(f / Re), l = a > l ? a + 1 : l + 1, o > l && (o = l, n.length = 1), n.reverse(); o--; ) n.push(0);
    n.reverse();
  }
  for (l = s.length, o = c.length, l - o < 0 && (o = l, n = c, c = s, s = n), r = 0; o; )
    r = (s[--o] = s[o] + c[o] + r) / tt | 0, s[o] %= tt;
  for (r && (s.unshift(r), ++i), l = s.length; s[--l] == 0; ) s.pop();
  return t.d = s, t.e = i, Ne ? Ae(t, f) : t;
}
function fr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(fn + e);
}
function sr(e) {
  var t, r, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, t = 1; t < i; t++)
      n = e[t] + "", r = Re - n.length, r && (o += zr(r)), o += n;
    a = e[t], n = a + "", r = Re - n.length, r && (o += zr(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return o + a;
}
var Or = /* @__PURE__ */ (function() {
  function e(n, i) {
    var o, a = 0, l = n.length;
    for (n = n.slice(); l--; )
      o = n[l] * i + a, n[l] = o % tt | 0, a = o / tt | 0;
    return a && n.unshift(a), n;
  }
  function t(n, i, o, a) {
    var l, s;
    if (o != a)
      s = o > a ? 1 : -1;
    else
      for (l = s = 0; l < o; l++)
        if (n[l] != i[l]) {
          s = n[l] > i[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, o) {
    for (var a = 0; o--; )
      n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * tt + n[o] - i[o];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, o, a) {
    var l, s, c, u, f, p, h, g, v, y, m, w, b, x, j, S, C, _, E = n.constructor, T = n.s == i.s ? 1 : -1, D = n.d, k = i.d;
    if (!n.s) return new E(n);
    if (!i.s) throw Error(Ut + "Division by zero");
    for (s = n.e - i.e, C = k.length, j = D.length, h = new E(T), g = h.d = [], c = 0; k[c] == (D[c] || 0); ) ++c;
    if (k[c] > (D[c] || 0) && --s, o == null ? w = o = E.precision : a ? w = o + (Ye(n) - Ye(i)) + 1 : w = o, w < 0) return new E(0);
    if (w = w / Re + 2 | 0, c = 0, C == 1)
      for (u = 0, k = k[0], w++; (c < j || u) && w--; c++)
        b = u * tt + (D[c] || 0), g[c] = b / k | 0, u = b % k | 0;
    else {
      for (u = tt / (k[0] + 1) | 0, u > 1 && (k = e(k, u), D = e(D, u), C = k.length, j = D.length), x = C, v = D.slice(0, C), y = v.length; y < C; ) v[y++] = 0;
      _ = k.slice(), _.unshift(0), S = k[0], k[1] >= tt / 2 && ++S;
      do
        u = 0, l = t(k, v, C, y), l < 0 ? (m = v[0], C != y && (m = m * tt + (v[1] || 0)), u = m / S | 0, u > 1 ? (u >= tt && (u = tt - 1), f = e(k, u), p = f.length, y = v.length, l = t(f, v, p, y), l == 1 && (u--, r(f, C < p ? _ : k, p))) : (u == 0 && (l = u = 1), f = k.slice()), p = f.length, p < y && f.unshift(0), r(v, f, y), l == -1 && (y = v.length, l = t(k, v, C, y), l < 1 && (u++, r(v, C < y ? _ : k, y))), y = v.length) : l === 0 && (u++, v = [0]), g[c++] = u, l && v[0] ? v[y++] = D[x] || 0 : (v = [D[x]], y = 1);
      while ((x++ < j || v[0] !== void 0) && w--);
    }
    return g[0] || g.shift(), h.e = s, Ae(h, a ? o + Ye(h) + 1 : o);
  };
})();
function qm(e, t) {
  var r, n, i, o, a, l, s = 0, c = 0, u = e.constructor, f = u.precision;
  if (Ye(e) > 16) throw Error(Uu + Ye(e));
  if (!e.s) return new u(It);
  for (Ne = !1, l = f, a = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(a), c += 5;
  for (n = Math.log(nn(2, c)) / Math.LN10 * 2 + 5 | 0, l += n, r = i = o = new u(It), u.precision = l; ; ) {
    if (i = Ae(i.times(e), l), r = r.times(++s), a = o.plus(Or(i, r, l)), sr(a.d).slice(0, l) === sr(o.d).slice(0, l)) {
      for (; c--; ) o = Ae(o.times(o), l);
      return u.precision = f, t == null ? (Ne = !0, Ae(o, f)) : o;
    }
    o = a;
  }
}
function Ye(e) {
  for (var t = e.e * Re, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function nc(e, t, r) {
  if (t > e.LN10.sd())
    throw Ne = !0, r && (e.precision = r), Error(Ut + "LN10 precision limit exceeded");
  return Ae(new e(e.LN10), t);
}
function zr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Fi(e, t) {
  var r, n, i, o, a, l, s, c, u, f = 1, p = 10, h = e, g = h.d, v = h.constructor, y = v.precision;
  if (h.s < 1) throw Error(Ut + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(It)) return new v(0);
  if (t == null ? (Ne = !1, c = y) : c = t, h.eq(10))
    return t == null && (Ne = !0), nc(v, c);
  if (c += p, v.precision = c, r = sr(g), n = r.charAt(0), o = Ye(h), Math.abs(o) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = sr(h.d), n = r.charAt(0), f++;
    o = Ye(h), n > 1 ? (h = new v("0." + r), o++) : h = new v(n + "." + r.slice(1));
  } else
    return s = nc(v, c + 2, y).times(o + ""), h = Fi(new v(n + "." + r.slice(1)), c - p).plus(s), v.precision = y, t == null ? (Ne = !0, Ae(h, y)) : h;
  for (l = a = h = Or(h.minus(It), h.plus(It), c), u = Ae(h.times(h), c), i = 3; ; ) {
    if (a = Ae(a.times(u), c), s = l.plus(Or(a, new v(i), c)), sr(s.d).slice(0, c) === sr(l.d).slice(0, c))
      return l = l.times(2), o !== 0 && (l = l.plus(nc(v, c + 2, y).times(o + ""))), l = Or(l, new v(f), c), v.precision = y, t == null ? (Ne = !0, Ae(l, y)) : l;
    l = s, i += 2;
  }
}
function yv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = ii(r / Re), e.d = [], n = (r + 1) % Re, r < 0 && (n += Re), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= Re; n < i; ) e.d.push(+t.slice(n, n += Re));
      t = t.slice(n), n = Re - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ne && (e.e > Sa || e.e < -Sa)) throw Error(Uu + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ae(e, t, r) {
  var n, i, o, a, l, s, c, u, f = e.d;
  for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
  if (n = t - a, n < 0)
    n += Re, i = t, c = f[u = 0];
  else {
    if (u = Math.ceil((n + 1) / Re), o = f.length, u >= o) return e;
    for (c = o = f[u], a = 1; o >= 10; o /= 10) a++;
    n %= Re, i = n - Re + a;
  }
  if (r !== void 0 && (o = nn(10, a - i - 1), l = c / o % 10 | 0, s = t < 0 || f[u + 1] !== void 0 || c % o, s = r < 4 ? (l || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / nn(10, a - i) : 0 : f[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return s ? (o = Ye(e), f.length = 1, t = t - o - 1, f[0] = nn(10, (Re - t % Re) % Re), e.e = ii(-t / Re) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = u, o = 1, u--) : (f.length = u + 1, o = nn(10, Re - n), f[u] = i > 0 ? (c / nn(10, a - i) % nn(10, i) | 0) * o : 0), s)
    for (; ; )
      if (u == 0) {
        (f[0] += o) == tt && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[u] += o, f[u] != tt) break;
        f[u--] = 0, o = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ne && (e.e > Sa || e.e < -Sa))
    throw Error(Uu + Ye(e));
  return e;
}
function Um(e, t) {
  var r, n, i, o, a, l, s, c, u, f, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), Ne ? Ae(t, h) : t;
  if (s = e.d, f = t.d, n = t.e, c = e.e, s = s.slice(), a = c - n, a) {
    for (u = a < 0, u ? (r = s, a = -a, l = f.length) : (r = f, n = c, l = s.length), i = Math.max(Math.ceil(h / Re), l) + 2, a > i && (a = i, r.length = 1), r.reverse(), i = a; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, l = f.length, u = i < l, u && (l = i), i = 0; i < l; i++)
      if (s[i] != f[i]) {
        u = s[i] < f[i];
        break;
      }
    a = 0;
  }
  for (u && (r = s, s = f, f = r, t.s = -t.s), l = s.length, i = f.length - l; i > 0; --i) s[l++] = 0;
  for (i = f.length; i > a; ) {
    if (s[--i] < f[i]) {
      for (o = i; o && s[--o] === 0; ) s[o] = tt - 1;
      --s[o], s[i] += tt;
    }
    s[i] -= f[i];
  }
  for (; s[--l] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, Ne ? Ae(t, h) : t) : new p(0);
}
function bn(e, t, r) {
  var n, i = Ye(e), o = sr(e.d), a = o.length;
  return t ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + zr(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + zr(-i - 1) + o, r && (n = r - a) > 0 && (o += zr(n))) : i >= a ? (o += zr(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + zr(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += zr(n))), e.s < 0 ? "-" + o : o;
}
function mv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Ym(e) {
  var t, r, n;
  function i(o) {
    var a = this;
    if (!(a instanceof i)) return new i(o);
    if (a.constructor = i, o instanceof i) {
      a.s = o.s, a.e = o.e, a.d = (o = o.d) ? o.slice() : o;
      return;
    }
    if (typeof o == "number") {
      if (o * 0 !== 0)
        throw Error(fn + o);
      if (o > 0)
        a.s = 1;
      else if (o < 0)
        o = -o, a.s = -1;
      else {
        a.s = 0, a.e = 0, a.d = [0];
        return;
      }
      if (o === ~~o && o < 1e7) {
        a.e = 0, a.d = [o];
        return;
      }
      return yv(a, o.toString());
    } else if (typeof o != "string")
      throw Error(fn + o);
    if (o.charCodeAt(0) === 45 ? (o = o.slice(1), a.s = -1) : a.s = 1, y4.test(o)) yv(a, o);
    else throw Error(fn + o);
  }
  if (i.prototype = oe, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Ym, i.config = i.set = m4, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function m4(e) {
  if (!e || typeof e != "object")
    throw Error(Ut + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    ni,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (ii(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(fn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(fn + r + ": " + n);
  return this;
}
var Yu = Ym(g4);
It = new Yu(1);
const xe = Yu;
function Gm(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new xe(e).abs().log(10).toNumber()) + 1, t;
}
function Xm(e, t, r) {
  for (var n = new xe(e), i = 0, o = []; n.lt(t) && i < 1e5; )
    o.push(n.toNumber()), n = n.add(r), i++;
  return o;
}
var Zm = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Gu = (e, t, r) => {
  if (e.lte(0))
    return new xe(0);
  var n = Gm(e.toNumber()), i = new xe(10).pow(n), o = e.div(i), a = n !== 1 ? 0.05 : 0.1, l = new xe(Math.ceil(o.div(a).toNumber())).add(r).mul(a), s = l.mul(i);
  return t ? new xe(s.toNumber()) : new xe(Math.ceil(s.toNumber()));
}, Jm = (e, t, r) => {
  var n;
  if (e.lte(0))
    return new xe(0);
  var i = [1, 2, 2.5, 5], o = e.toNumber(), a = Math.floor(new xe(o).abs().log(10).toNumber()), l = new xe(10).pow(a), s = e.div(l).toNumber(), c = i.findIndex((h) => h >= s - 1e-10);
  if (c === -1 && (l = l.mul(10), c = 0), c += r, c >= i.length) {
    var u = Math.floor(c / i.length);
    c %= i.length, l = l.mul(new xe(10).pow(u));
  }
  var f = (n = i[c]) !== null && n !== void 0 ? n : 1, p = new xe(f).mul(l);
  return t ? p : new xe(Math.ceil(p.toNumber()));
}, x4 = (e, t, r) => {
  var n = new xe(1), i = new xe(e);
  if (!i.isint() && r) {
    var o = Math.abs(e);
    o < 1 ? (n = new xe(10).pow(Gm(e) - 1), i = new xe(Math.floor(i.div(n).toNumber())).mul(n)) : o > 1 && (i = new xe(Math.floor(e)));
  } else e === 0 ? i = new xe(Math.floor((t - 1) / 2)) : r || (i = new xe(Math.floor(e)));
  for (var a = Math.floor((t - 1) / 2), l = [], s = 0; s < t; s++)
    l.push(i.add(new xe(s - a).mul(n)).toNumber());
  return l;
}, Qm = function(t, r, n, i) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Gu;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new xe(0),
      tickMin: new xe(0),
      tickMax: new xe(0)
    };
  var l = a(new xe(r).sub(t).div(n - 1), i, o), s;
  t <= 0 && r >= 0 ? s = new xe(0) : (s = new xe(t).add(r).div(2), s = s.sub(new xe(s).mod(l)));
  var c = Math.ceil(s.sub(t).div(l).toNumber()), u = Math.ceil(new xe(r).sub(s).div(l).toNumber()), f = c + u + 1;
  return f > n ? Qm(t, r, n, i, o + 1, a) : (f < n && (u = r > 0 ? u + (n - f) : u, c = r > 0 ? c : c + (n - f)), {
    step: l,
    tickMin: s.sub(new xe(c).mul(l)),
    tickMax: s.add(new xe(u).mul(l))
  });
}, xv = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", l = Math.max(i, 2), [s, c] = Zm([r, n]);
  if (s === -1 / 0 || c === 1 / 0) {
    var u = c === 1 / 0 ? [s, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), c];
    return r > n ? u.reverse() : u;
  }
  if (s === c)
    return x4(s, i, o);
  var f = a === "snap125" ? Jm : Gu, {
    step: p,
    tickMin: h,
    tickMax: g
  } = Qm(s, c, l, o, 0, f), v = Xm(h, g.add(new xe(0.1).mul(p)), p);
  return r > n ? v.reverse() : v;
}, bv = function(t, r) {
  var [n, i] = t, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [l, s] = Zm([n, i]);
  if (l === -1 / 0 || s === 1 / 0)
    return [n, i];
  if (l === s)
    return [l];
  var c = a === "snap125" ? Jm : Gu, u = Math.max(r, 2), f = c(new xe(s).sub(l).div(u - 1), o, 0), p = [...Xm(new xe(l), new xe(s), f), s];
  return o === !1 && (p = p.map((h) => Math.round(h))), n > i ? p.reverse() : p;
}, ex = (e) => e.rootProps.maxBarSize, b4 = (e) => e.rootProps.barGap, tx = (e) => e.rootProps.barCategoryGap, w4 = (e) => e.rootProps.barSize, xl = (e) => e.rootProps.stackOffset, rx = (e) => e.rootProps.reverseStackOrder, Xu = (e) => e.options.chartName, Zu = (e) => e.rootProps.syncId, nx = (e) => e.rootProps.syncMethod, Ju = (e) => e.options.eventEmitter, j4 = (e) => e.rootProps.baseValue, Je = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,
  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  cursorRectangle: 200,
  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1e3,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  cursorLine: 1100,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1200,
  /**
   * LabelList and Label, including Axis labels
   */
  label: 2e3
}, Zr = {
  allowDecimals: !1,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: !1,
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "auto"
}, or = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !0,
  includeHidden: !1,
  radiusAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "auto"
}, bl = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function wl(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return hr(e, t) ? "category" : "number";
}
function wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wv(Object(r), !0).forEach(function(n) {
      S4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S4(e, t, r) {
  return (t = O4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O4(e) {
  var t = P4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function P4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jv = {
  allowDataOverflow: Zr.allowDataOverflow,
  allowDecimals: Zr.allowDecimals,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: Zr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: Zr.reversed,
  scale: Zr.scale,
  tick: Zr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: Zr.type,
  unit: void 0,
  niceTicks: "auto"
}, Sv = {
  allowDataOverflow: or.allowDataOverflow,
  allowDecimals: or.allowDecimals,
  allowDuplicatedCategory: or.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: or.radiusAxisId,
  includeHidden: or.includeHidden,
  name: void 0,
  reversed: or.reversed,
  scale: or.scale,
  tick: or.tick,
  tickCount: or.tickCount,
  ticks: void 0,
  type: or.type,
  unit: void 0,
  niceTicks: "auto"
}, C4 = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, Qu = R([C4, Sm], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = wl(t, "angleAxis", jv.type)) !== null && r !== void 0 ? r : "category";
  return Oa(Oa({}, jv), {}, {
    type: n
  });
}), k4 = (e, t) => e.polarAxis.radiusAxis[t], ed = R([k4, Sm], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = wl(t, "radiusAxis", Sv.type)) !== null && r !== void 0 ? r : "category";
  return Oa(Oa({}, Sv), {}, {
    type: n
  });
}), jl = (e) => e.polarOptions, td = R([Ar, Tr, rt], Jk), ix = R([jl, td], (e, t) => {
  if (e != null)
    return Jt(e.innerRadius, t, 0);
}), ox = R([jl, td], (e, t) => {
  if (e != null)
    return Jt(e.outerRadius, t, t * 0.8);
}), _4 = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, ax = R([jl], _4);
R([Qu, ax], bl);
var lx = R([td, ix, ox], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
R([ed, lx], bl);
var sx = R([Oe, jl, ix, ox, Ar, Tr], (e, t, r, n, i, o) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: a,
      cy: l,
      startAngle: s,
      endAngle: c
    } = t;
    return {
      cx: Jt(a, i, i / 2),
      cy: Jt(l, o, o / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: s,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), nt = (e, t) => t, Sl = (e, t, r) => r;
function Ol(e) {
  return e?.id;
}
function cx(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: o
  } = r, a = /* @__PURE__ */ new Map();
  return e.forEach((l) => {
    var s, c = (s = l.data) !== null && s !== void 0 ? s : n;
    if (!(c == null || c.length === 0)) {
      var u = Ol(l);
      c.forEach((f, p) => {
        var h = o == null || i ? p : String(qe(f, o, null)), g = qe(f, l.dataKey, 0), v;
        a.has(h) ? v = a.get(h) : v = {}, Object.assign(v, {
          [u]: g
        }), a.set(h, v);
      });
    }
  }), Array.from(a.values());
}
function Pl(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var Cl = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function kl(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function E4(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var it = (e) => {
  var t = Oe(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, oi = (e) => e.tooltip.settings.axisId;
function rd(e) {
  if (e != null) {
    var t = e.ticks, r = e.bandwidth, n = e.range(), i = [Math.min(...n), Math.max(...n)];
    return {
      domain: () => e.domain(),
      range: (function(o) {
        function a() {
          return o.apply(this, arguments);
        }
        return a.toString = function() {
          return o.toString();
        }, a;
      })(() => i),
      rangeMin: () => i[0],
      rangeMax: () => i[1],
      isInRange(o) {
        var a = i[0], l = i[1];
        return a <= l ? o >= a && o <= l : o >= l && o <= a;
      },
      bandwidth: r ? () => r.call(e) : void 0,
      ticks: t ? (o) => t.call(e, o) : void 0,
      map: (o, a) => {
        var l = e(o);
        if (l != null) {
          if (e.bandwidth && a !== null && a !== void 0 && a.position) {
            var s = e.bandwidth();
            switch (a.position) {
              case "middle":
                l += s / 2;
                break;
              case "end":
                l += s;
                break;
            }
          }
          return l;
        }
      }
    };
  }
}
var A4 = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!cr(t)) {
          for (var r, n, i = 0; i < t.length; i++) {
            var o = t[i];
            pe(o) && ((r === void 0 || o < r) && (r = o), (n === void 0 || o > n) && (n = o));
          }
          return r !== void 0 && n !== void 0 ? [r, n] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function Fr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function T4(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function nd(e) {
  let t, r, n;
  e.length !== 2 ? (t = Fr, r = (l, s) => Fr(e(l), s), n = (l, s) => e(l) - s) : (t = e === Fr || e === T4 ? e : I4, r = e, n = e);
  function i(l, s, c = 0, u = l.length) {
    if (c < u) {
      if (t(s, s) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], s) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function o(l, s, c = 0, u = l.length) {
    if (c < u) {
      if (t(s, s) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], s) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function a(l, s, c = 0, u = l.length) {
    const f = i(l, s, c, u - 1);
    return f > c && n(l[f - 1], s) > -n(l[f], s) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function I4() {
  return 0;
}
function ux(e) {
  return e === null ? NaN : +e;
}
function* M4(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const D4 = nd(Fr), so = D4.right;
nd(ux).center;
class Ov extends Map {
  constructor(t, r = $4) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Pv(this, t));
  }
  has(t) {
    return super.has(Pv(this, t));
  }
  set(t, r) {
    return super.set(R4(this, t), r);
  }
  delete(t) {
    return super.delete(N4(this, t));
  }
}
function Pv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function R4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function N4({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function $4(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function z4(e = Fr) {
  if (e === Fr) return dx;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function dx(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const L4 = Math.sqrt(50), B4 = Math.sqrt(10), W4 = Math.sqrt(2);
function Pa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), o = n / Math.pow(10, i), a = o >= L4 ? 10 : o >= B4 ? 5 : o >= W4 ? 2 : 1;
  let l, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / a, l = Math.round(e * c), s = Math.round(t * c), l / c < e && ++l, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * a, l = Math.round(e / c), s = Math.round(t / c), l * c < e && ++l, s * c > t && --s), s < l && 0.5 <= r && r < 2 ? Pa(e, t, r * 2) : [l, s, c];
}
function eu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, o, a] = n ? Pa(t, e, r) : Pa(e, t, r);
  if (!(o >= i)) return [];
  const l = o - i + 1, s = new Array(l);
  if (n)
    if (a < 0) for (let c = 0; c < l; ++c) s[c] = (o - c) / -a;
    else for (let c = 0; c < l; ++c) s[c] = (o - c) * a;
  else if (a < 0) for (let c = 0; c < l; ++c) s[c] = (i + c) / -a;
  else for (let c = 0; c < l; ++c) s[c] = (i + c) * a;
  return s;
}
function tu(e, t, r) {
  return t = +t, e = +e, r = +r, Pa(e, t, r)[2];
}
function ru(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? tu(t, e, r) : tu(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Cv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function kv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function fx(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? dx : z4(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, u = Math.log(s), f = 0.5 * Math.exp(2 * u / 3), p = 0.5 * Math.sqrt(u * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - c * f / s + p)), g = Math.min(n, Math.floor(t + (s - c) * f / s + p));
      fx(e, t, h, g, i);
    }
    const o = e[t];
    let a = r, l = n;
    for (bi(e, r, t), i(e[n], o) > 0 && bi(e, r, n); a < l; ) {
      for (bi(e, a, l), ++a, --l; i(e[a], o) < 0; ) ++a;
      for (; i(e[l], o) > 0; ) --l;
    }
    i(e[r], o) === 0 ? bi(e, r, l) : (++l, bi(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
  return e;
}
function bi(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function F4(e, t, r) {
  if (e = Float64Array.from(M4(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return kv(e);
    if (t >= 1) return Cv(e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = Cv(fx(e, o).subarray(0, o + 1)), l = kv(e.subarray(o + 1));
    return a + (l - a) * (i - o);
  }
}
function V4(e, t, r = ux) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = +r(e[o], o, e), l = +r(e[o + 1], o + 1, e);
    return a + (l - a) * (i - o);
  }
}
function K4(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(i); ++n < i; )
    o[n] = e + n * r;
  return o;
}
function Yt(e, t) {
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
function Ir(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const nu = Symbol("implicit");
function id() {
  var e = new Ov(), t = [], r = [], n = nu;
  function i(o) {
    let a = e.get(o);
    if (a === void 0) {
      if (n !== nu) return n;
      e.set(o, a = t.push(o) - 1);
    }
    return r[a % r.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ov();
    for (const a of o)
      e.has(a) || e.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (r = Array.from(o), i) : r.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return id(t, r).unknown(n);
  }, Yt.apply(i, arguments), i;
}
function od() {
  var e = id().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, o, a, l = !1, s = 0, c = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = i < n, g = h ? i : n, v = h ? n : i;
    o = (v - g) / Math.max(1, p - s + c * 2), l && (o = Math.floor(o)), g += (v - g - o * (p - s)) * u, a = o * (1 - s), l && (g = Math.round(g), a = Math.round(a));
    var y = K4(p).map(function(m) {
      return g + o * m;
    });
    return r(h ? y.reverse() : y);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([n, i] = p, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(p) {
    return [n, i] = p, n = +n, i = +i, l = !0, f();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return o;
  }, e.round = function(p) {
    return arguments.length ? (l = !!p, f()) : l;
  }, e.padding = function(p) {
    return arguments.length ? (s = Math.min(1, c = +p), f()) : s;
  }, e.paddingInner = function(p) {
    return arguments.length ? (s = Math.min(1, p), f()) : s;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (c = +p, f()) : c;
  }, e.align = function(p) {
    return arguments.length ? (u = Math.max(0, Math.min(1, p)), f()) : u;
  }, e.copy = function() {
    return od(t(), [n, i]).round(l).paddingInner(s).paddingOuter(c).align(u);
  }, Yt.apply(f(), arguments);
}
function px(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return px(t());
  }, e;
}
function H4() {
  return px(od.apply(null, arguments).paddingInner(1));
}
function ad(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function hx(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function co() {
}
var Vi = 0.7, Ca = 1 / Vi, Vn = "\\s*([+-]?\\d+)\\s*", Ki = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", q4 = /^#([0-9a-f]{3,8})$/, U4 = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), Y4 = new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`), G4 = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Ki}\\)$`), X4 = new RegExp(`^rgba\\(${ur},${ur},${ur},${Ki}\\)$`), Z4 = new RegExp(`^hsl\\(${Ki},${ur},${ur}\\)$`), J4 = new RegExp(`^hsla\\(${Ki},${ur},${ur},${Ki}\\)$`), _v = {
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
  yellowgreen: 10145074
};
ad(co, Hi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ev,
  // Deprecated! Use color.formatHex.
  formatHex: Ev,
  formatHex8: Q4,
  formatHsl: e_,
  formatRgb: Av,
  toString: Av
});
function Ev() {
  return this.rgb().formatHex();
}
function Q4() {
  return this.rgb().formatHex8();
}
function e_() {
  return vx(this).formatHsl();
}
function Av() {
  return this.rgb().formatRgb();
}
function Hi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = q4.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Tv(t) : r === 3 ? new _t(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? zo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? zo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = U4.exec(e)) ? new _t(t[1], t[2], t[3], 1) : (t = Y4.exec(e)) ? new _t(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = G4.exec(e)) ? zo(t[1], t[2], t[3], t[4]) : (t = X4.exec(e)) ? zo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Z4.exec(e)) ? Dv(t[1], t[2] / 100, t[3] / 100, 1) : (t = J4.exec(e)) ? Dv(t[1], t[2] / 100, t[3] / 100, t[4]) : _v.hasOwnProperty(e) ? Tv(_v[e]) : e === "transparent" ? new _t(NaN, NaN, NaN, 0) : null;
}
function Tv(e) {
  return new _t(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function zo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new _t(e, t, r, n);
}
function t_(e) {
  return e instanceof co || (e = Hi(e)), e ? (e = e.rgb(), new _t(e.r, e.g, e.b, e.opacity)) : new _t();
}
function iu(e, t, r, n) {
  return arguments.length === 1 ? t_(e) : new _t(e, t, r, n ?? 1);
}
function _t(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
ad(_t, iu, hx(co, {
  brighter(e) {
    return e = e == null ? Ca : Math.pow(Ca, e), new _t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vi : Math.pow(Vi, e), new _t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new _t(pn(this.r), pn(this.g), pn(this.b), ka(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Iv,
  // Deprecated! Use color.formatHex.
  formatHex: Iv,
  formatHex8: r_,
  formatRgb: Mv,
  toString: Mv
}));
function Iv() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}`;
}
function r_() {
  return `#${ln(this.r)}${ln(this.g)}${ln(this.b)}${ln((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Mv() {
  const e = ka(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${pn(this.r)}, ${pn(this.g)}, ${pn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ka(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function pn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ln(e) {
  return e = pn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Dv(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, r, n);
}
function vx(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof co || (e = Hi(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), a = NaN, l = o - i, s = (o + i) / 2;
  return l ? (t === o ? a = (r - n) / l + (r < n) * 6 : r === o ? a = (n - t) / l + 2 : a = (t - r) / l + 4, l /= s < 0.5 ? o + i : 2 - o - i, a *= 60) : l = s > 0 && s < 1 ? 0 : a, new Xt(a, l, s, e.opacity);
}
function n_(e, t, r, n) {
  return arguments.length === 1 ? vx(e) : new Xt(e, t, r, n ?? 1);
}
function Xt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
ad(Xt, n_, hx(co, {
  brighter(e) {
    return e = e == null ? Ca : Math.pow(Ca, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vi : Math.pow(Vi, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new _t(
      ic(e >= 240 ? e - 240 : e + 120, i, n),
      ic(e, i, n),
      ic(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Xt(Rv(this.h), Lo(this.s), Lo(this.l), ka(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ka(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Rv(this.h)}, ${Lo(this.s) * 100}%, ${Lo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Rv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Lo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ic(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ld = (e) => () => e;
function i_(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function o_(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function a_(e) {
  return (e = +e) == 1 ? gx : function(t, r) {
    return r - t ? o_(t, r, e) : ld(isNaN(t) ? r : t);
  };
}
function gx(e, t) {
  var r = t - e;
  return r ? i_(e, r) : ld(isNaN(e) ? t : e);
}
const Nv = (function e(t) {
  var r = a_(t);
  function n(i, o) {
    var a = r((i = iu(i)).r, (o = iu(o)).r), l = r(i.g, o.g), s = r(i.b, o.b), c = gx(i.opacity, o.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = s(u), i.opacity = c(u), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function l_(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(o) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - o) + t[i] * o;
    return n;
  };
}
function s_(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function c_(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), o = new Array(r), a;
  for (a = 0; a < n; ++a) i[a] = ai(e[a], t[a]);
  for (; a < r; ++a) o[a] = t[a];
  return function(l) {
    for (a = 0; a < n; ++a) o[a] = i[a](l);
    return o;
  };
}
function u_(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function _a(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function d_(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = ai(e[i], t[i]) : n[i] = t[i];
  return function(o) {
    for (i in r) n[i] = r[i](o);
    return n;
  };
}
var ou = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, oc = new RegExp(ou.source, "g");
function f_(e) {
  return function() {
    return e;
  };
}
function p_(e) {
  return function(t) {
    return e(t) + "";
  };
}
function h_(e, t) {
  var r = ou.lastIndex = oc.lastIndex = 0, n, i, o, a = -1, l = [], s = [];
  for (e = e + "", t = t + ""; (n = ou.exec(e)) && (i = oc.exec(t)); )
    (o = i.index) > r && (o = t.slice(r, o), l[a] ? l[a] += o : l[++a] = o), (n = n[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, s.push({ i: a, x: _a(n, i) })), r = oc.lastIndex;
  return r < t.length && (o = t.slice(r), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? s[0] ? p_(s[0].x) : f_(t) : (t = s.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = s[u]).i] = f.x(c);
    return l.join("");
  });
}
function ai(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? ld(t) : (r === "number" ? _a : r === "string" ? (n = Hi(t)) ? (t = n, Nv) : h_ : t instanceof Hi ? Nv : t instanceof Date ? u_ : s_(t) ? l_ : Array.isArray(t) ? c_ : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? d_ : _a)(e, t);
}
function sd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function v_(e, t) {
  t === void 0 && (t = e, e = ai);
  for (var r = 0, n = t.length - 1, i = t[0], o = new Array(n < 0 ? 0 : n); r < n; ) o[r] = e(i, i = t[++r]);
  return function(a) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return o[l](a - l);
  };
}
function g_(e) {
  return function() {
    return e;
  };
}
function Ea(e) {
  return +e;
}
var $v = [0, 1];
function bt(e) {
  return e;
}
function au(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : g_(isNaN(t) ? NaN : 0.5);
}
function y_(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function m_(e, t, r) {
  var n = e[0], i = e[1], o = t[0], a = t[1];
  return i < n ? (n = au(i, n), o = r(a, o)) : (n = au(n, i), o = r(o, a)), function(l) {
    return o(n(l));
  };
}
function x_(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), o = new Array(n), a = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < n; )
    i[a] = au(e[a], e[a + 1]), o[a] = r(t[a], t[a + 1]);
  return function(l) {
    var s = so(e, l, 1, n) - 1;
    return o[s](i[s](l));
  };
}
function uo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function _l() {
  var e = $v, t = $v, r = ai, n, i, o, a = bt, l, s, c;
  function u() {
    var p = Math.min(e.length, t.length);
    return a !== bt && (a = y_(e[0], e[p - 1])), l = p > 2 ? x_ : m_, s = c = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? o : (s || (s = l(e.map(n), t, r)))(n(a(p)));
  }
  return f.invert = function(p) {
    return a(i((c || (c = l(t, e.map(n), _a)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Ea), u()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = sd, u();
  }, f.clamp = function(p) {
    return arguments.length ? (a = p ? !0 : bt, u()) : a !== bt;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, u()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (o = p, f) : o;
  }, function(p, h) {
    return n = p, i = h, u();
  };
}
function cd() {
  return _l()(bt, bt);
}
function b_(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Aa(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Xn(e) {
  return e = Aa(Math.abs(e)), e ? e[1] : NaN;
}
function w_(e, t) {
  return function(r, n) {
    for (var i = r.length, o = [], a = 0, l = e[0], s = 0; i > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), o.push(r.substring(i -= l, i + l)), !((s += l + 1) > n)); )
      l = e[a = (a + 1) % e.length];
    return o.reverse().join(t);
  };
}
function j_(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var S_ = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qi(e) {
  if (!(t = S_.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ud({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
qi.prototype = ud.prototype;
function ud(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ud.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function O_(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Ta;
function P_(e, t) {
  var r = Aa(e, t);
  if (!r) return Ta = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], o = i - (Ta = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = n.length;
  return o === a ? n : o > a ? n + new Array(o - a + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + Aa(e, Math.max(0, t + o - 1))[0];
}
function zv(e, t) {
  var r = Aa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Lv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: b_,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => zv(e * 100, t),
  r: zv,
  s: P_,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Bv(e) {
  return e;
}
var Wv = Array.prototype.map, Fv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function C_(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Bv : w_(Wv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Bv : j_(Wv.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f, p) {
    f = qi(f);
    var h = f.fill, g = f.align, v = f.sign, y = f.symbol, m = f.zero, w = f.width, b = f.comma, x = f.precision, j = f.trim, S = f.type;
    S === "n" ? (b = !0, S = "g") : Lv[S] || (x === void 0 && (x = 12), j = !0, S = "g"), (m || h === "0" && g === "=") && (m = !0, h = "0", g = "=");
    var C = (p && p.prefix !== void 0 ? p.prefix : "") + (y === "$" ? r : y === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : ""), _ = (y === "$" ? n : /[%p]/.test(S) ? a : "") + (p && p.suffix !== void 0 ? p.suffix : ""), E = Lv[S], T = /[defgprs%]/.test(S);
    x = x === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function D(k) {
      var W = C, F = _, Z, q, ie;
      if (S === "c")
        F = E(k) + F, k = "";
      else {
        k = +k;
        var z = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? s : E(Math.abs(k), x), j && (k = O_(k)), z && +k == 0 && v !== "+" && (z = !1), W = (z ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + W, F = (S === "s" && !isNaN(k) && Ta !== void 0 ? Fv[8 + Ta / 3] : "") + F + (z && v === "(" ? ")" : ""), T) {
          for (Z = -1, q = k.length; ++Z < q; )
            if (ie = k.charCodeAt(Z), 48 > ie || ie > 57) {
              F = (ie === 46 ? i + k.slice(Z + 1) : k.slice(Z)) + F, k = k.slice(0, Z);
              break;
            }
        }
      }
      b && !m && (k = t(k, 1 / 0));
      var L = W.length + k.length + F.length, V = L < w ? new Array(w - L + 1).join(h) : "";
      switch (b && m && (k = t(V + k, V.length ? w - F.length : 1 / 0), V = ""), g) {
        case "<":
          k = W + k + F + V;
          break;
        case "=":
          k = W + V + k + F;
          break;
        case "^":
          k = V.slice(0, L = V.length >> 1) + W + k + F + V.slice(L);
          break;
        default:
          k = V + W + k + F;
          break;
      }
      return o(k);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function u(f, p) {
    var h = Math.max(-8, Math.min(8, Math.floor(Xn(p) / 3))) * 3, g = Math.pow(10, -h), v = c((f = qi(f), f.type = "f", f), { suffix: Fv[8 + h / 3] });
    return function(y) {
      return v(g * y);
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var Bo, dd, yx;
k_({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function k_(e) {
  return Bo = C_(e), dd = Bo.format, yx = Bo.formatPrefix, Bo;
}
function __(e) {
  return Math.max(0, -Xn(Math.abs(e)));
}
function E_(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Xn(t) / 3))) * 3 - Xn(Math.abs(e)));
}
function A_(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Xn(t) - Xn(e)) + 1;
}
function mx(e, t, r, n) {
  var i = ru(e, t, r), o;
  switch (n = qi(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(o = E_(i, a)) && (n.precision = o), yx(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(o = A_(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = o - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(o = __(i)) && (n.precision = o - (n.type === "%") * 2);
      break;
    }
  }
  return dd(n);
}
function Ur(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return eu(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return mx(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, o = n.length - 1, a = n[i], l = n[o], s, c, u = 10;
    for (l < a && (c = a, a = l, l = c, c = i, i = o, o = c); u-- > 0; ) {
      if (c = tu(a, l, r), c === s)
        return n[i] = a, n[o] = l, t(n);
      if (c > 0)
        a = Math.floor(a / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        a = Math.ceil(a * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function xx() {
  var e = cd();
  return e.copy = function() {
    return uo(e, xx());
  }, Yt.apply(e, arguments), Ur(e);
}
function bx(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ea), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return bx(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ea) : [0, 1], Ur(r);
}
function wx(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], o = e[n], a;
  return o < i && (a = r, r = n, n = a, a = i, i = o, o = a), e[r] = t.floor(i), e[n] = t.ceil(o), e;
}
function Vv(e) {
  return Math.log(e);
}
function Kv(e) {
  return Math.exp(e);
}
function T_(e) {
  return -Math.log(-e);
}
function I_(e) {
  return -Math.exp(-e);
}
function M_(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function D_(e) {
  return e === 10 ? M_ : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function R_(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Hv(e) {
  return (t, r) => -e(-t, r);
}
function fd(e) {
  const t = e(Vv, Kv), r = t.domain;
  let n = 10, i, o;
  function a() {
    return i = R_(n), o = D_(n), r()[0] < 0 ? (i = Hv(i), o = Hv(o), e(T_, I_)) : e(Vv, Kv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, a()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), a()) : r();
  }, t.ticks = (l) => {
    const s = r();
    let c = s[0], u = s[s.length - 1];
    const f = u < c;
    f && ([c, u] = [u, c]);
    let p = i(c), h = i(u), g, v;
    const y = l == null ? 10 : +l;
    let m = [];
    if (!(n % 1) && h - p < y) {
      if (p = Math.floor(p), h = Math.ceil(h), c > 0) {
        for (; p <= h; ++p)
          for (g = 1; g < n; ++g)
            if (v = p < 0 ? g / o(-p) : g * o(p), !(v < c)) {
              if (v > u) break;
              m.push(v);
            }
      } else for (; p <= h; ++p)
        for (g = n - 1; g >= 1; --g)
          if (v = p > 0 ? g / o(-p) : g * o(p), !(v < c)) {
            if (v > u) break;
            m.push(v);
          }
      m.length * 2 < y && (m = eu(c, u, y));
    } else
      m = eu(p, h, Math.min(h - p, y)).map(o);
    return f ? m.reverse() : m;
  }, t.tickFormat = (l, s) => {
    if (l == null && (l = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = qi(s)).precision == null && (s.trim = !0), s = dd(s)), l === 1 / 0) return s;
    const c = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let f = u / o(Math.round(i(u)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(u) : "";
    };
  }, t.nice = () => r(wx(r(), {
    floor: (l) => o(Math.floor(i(l))),
    ceil: (l) => o(Math.ceil(i(l)))
  })), t;
}
function jx() {
  const e = fd(_l()).domain([1, 10]);
  return e.copy = () => uo(e, jx()).base(e.base()), Yt.apply(e, arguments), e;
}
function qv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Uv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function pd(e) {
  var t = 1, r = e(qv(t), Uv(t));
  return r.constant = function(n) {
    return arguments.length ? e(qv(t = +n), Uv(t)) : t;
  }, Ur(r);
}
function Sx() {
  var e = pd(_l());
  return e.copy = function() {
    return uo(e, Sx()).constant(e.constant());
  }, Yt.apply(e, arguments);
}
function Yv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function N_(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function $_(e) {
  return e < 0 ? -e * e : e * e;
}
function hd(e) {
  var t = e(bt, bt), r = 1;
  function n() {
    return r === 1 ? e(bt, bt) : r === 0.5 ? e(N_, $_) : e(Yv(r), Yv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Ur(t);
}
function vd() {
  var e = hd(_l());
  return e.copy = function() {
    return uo(e, vd()).exponent(e.exponent());
  }, Yt.apply(e, arguments), e;
}
function z_() {
  return vd.apply(null, arguments).exponent(0.5);
}
function Gv(e) {
  return Math.sign(e) * e * e;
}
function L_(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Ox() {
  var e = cd(), t = [0, 1], r = !1, n;
  function i(o) {
    var a = L_(e(o));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return i.invert = function(o) {
    return e.invert(Gv(o));
  }, i.domain = function(o) {
    return arguments.length ? (e.domain(o), i) : e.domain();
  }, i.range = function(o) {
    return arguments.length ? (e.range((t = Array.from(o, Ea)).map(Gv)), i) : t.slice();
  }, i.rangeRound = function(o) {
    return i.range(o).round(!0);
  }, i.round = function(o) {
    return arguments.length ? (r = !!o, i) : r;
  }, i.clamp = function(o) {
    return arguments.length ? (e.clamp(o), i) : e.clamp();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return Ox(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Yt.apply(i, arguments), Ur(i);
}
function Px() {
  var e = [], t = [], r = [], n;
  function i() {
    var a = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++a < l; ) r[a - 1] = V4(e, a / l);
    return o;
  }
  function o(a) {
    return a == null || isNaN(a = +a) ? n : t[so(r, a)];
  }
  return o.invertExtent = function(a) {
    var l = t.indexOf(a);
    return l < 0 ? [NaN, NaN] : [
      l > 0 ? r[l - 1] : e[0],
      l < r.length ? r[l] : e[e.length - 1]
    ];
  }, o.domain = function(a) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let l of a) l != null && !isNaN(l = +l) && e.push(l);
    return e.sort(Fr), i();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.quantiles = function() {
    return r.slice();
  }, o.copy = function() {
    return Px().domain(e).range(t).unknown(n);
  }, Yt.apply(o, arguments);
}
function Cx() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], o;
  function a(s) {
    return s != null && s <= s ? i[so(n, s, 0, r)] : o;
  }
  function l() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return a;
  }
  return a.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, l()) : [e, t];
  }, a.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, l()) : i.slice();
  }, a.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, a.unknown = function(s) {
    return arguments.length && (o = s), a;
  }, a.thresholds = function() {
    return n.slice();
  }, a.copy = function() {
    return Cx().domain([e, t]).range(i).unknown(o);
  }, Yt.apply(Ur(a), arguments);
}
function kx() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(o) {
    return o != null && o <= o ? t[so(e, o, 0, n)] : r;
  }
  return i.domain = function(o) {
    return arguments.length ? (e = Array.from(o), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(o) {
    var a = t.indexOf(o);
    return [e[a - 1], e[a]];
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return kx().domain(e).range(t).unknown(r);
  }, Yt.apply(i, arguments);
}
const ac = /* @__PURE__ */ new Date(), lc = /* @__PURE__ */ new Date();
function Qe(e, t, r, n) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), i.round = (o) => {
    const a = i(o), l = i.ceil(o);
    return o - a < l - o ? a : l;
  }, i.offset = (o, a) => (t(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, l) => {
    const s = [];
    if (o = i.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < a) || !(l > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (c < o && o < a);
    return s;
  }, i.filter = (o) => Qe((a) => {
    if (a >= a) for (; e(a), !o(a); ) a.setTime(a - 1);
  }, (a, l) => {
    if (a >= a)
      if (l < 0) for (; ++l <= 0; )
        for (; t(a, -1), !o(a); )
          ;
      else for (; --l >= 0; )
        for (; t(a, 1), !o(a); )
          ;
  }), r && (i.count = (o, a) => (ac.setTime(+o), lc.setTime(+a), e(ac), e(lc), Math.floor(r(ac, lc))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(n ? (a) => n(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const Ia = Qe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ia.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Qe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ia);
Ia.range;
const jr = 1e3, Kt = jr * 60, Sr = Kt * 60, kr = Sr * 24, gd = kr * 7, Xv = kr * 30, sc = kr * 365, sn = Qe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * jr);
}, (e, t) => (t - e) / jr, (e) => e.getUTCSeconds());
sn.range;
const yd = Qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jr);
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getMinutes());
yd.range;
const md = Qe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCMinutes());
md.range;
const xd = Qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jr - e.getMinutes() * Kt);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getHours());
xd.range;
const bd = Qe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getUTCHours());
bd.range;
const fo = Qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Kt) / kr,
  (e) => e.getDate() - 1
);
fo.range;
const El = Qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / kr, (e) => e.getUTCDate() - 1);
El.range;
const _x = Qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / kr, (e) => Math.floor(e / kr));
_x.range;
function kn(e) {
  return Qe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Kt) / gd);
}
const Al = kn(0), Ma = kn(1), B_ = kn(2), W_ = kn(3), Zn = kn(4), F_ = kn(5), V_ = kn(6);
Al.range;
Ma.range;
B_.range;
W_.range;
Zn.range;
F_.range;
V_.range;
function _n(e) {
  return Qe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / gd);
}
const Tl = _n(0), Da = _n(1), K_ = _n(2), H_ = _n(3), Jn = _n(4), q_ = _n(5), U_ = _n(6);
Tl.range;
Da.range;
K_.range;
H_.range;
Jn.range;
q_.range;
U_.range;
const wd = Qe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
wd.range;
const jd = Qe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
jd.range;
const _r = Qe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
_r.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Qe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
_r.range;
const Er = Qe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Er.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Qe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Er.range;
function Ex(e, t, r, n, i, o) {
  const a = [
    [sn, 1, jr],
    [sn, 5, 5 * jr],
    [sn, 15, 15 * jr],
    [sn, 30, 30 * jr],
    [o, 1, Kt],
    [o, 5, 5 * Kt],
    [o, 15, 15 * Kt],
    [o, 30, 30 * Kt],
    [i, 1, Sr],
    [i, 3, 3 * Sr],
    [i, 6, 6 * Sr],
    [i, 12, 12 * Sr],
    [n, 1, kr],
    [n, 2, 2 * kr],
    [r, 1, gd],
    [t, 1, Xv],
    [t, 3, 3 * Xv],
    [e, 1, sc]
  ];
  function l(c, u, f) {
    const p = u < c;
    p && ([c, u] = [u, c]);
    const h = f && typeof f.range == "function" ? f : s(c, u, f), g = h ? h.range(c, +u + 1) : [];
    return p ? g.reverse() : g;
  }
  function s(c, u, f) {
    const p = Math.abs(u - c) / f, h = nd(([, , y]) => y).right(a, p);
    if (h === a.length) return e.every(ru(c / sc, u / sc, f));
    if (h === 0) return Ia.every(Math.max(ru(c, u, f), 1));
    const [g, v] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return g.every(v);
  }
  return [l, s];
}
const [Y_, G_] = Ex(Er, jd, Tl, _x, bd, md), [X_, Z_] = Ex(_r, wd, Al, fo, xd, yd);
function cc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function uc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function wi(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function J_(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, o = e.days, a = e.shortDays, l = e.months, s = e.shortMonths, c = ji(i), u = Si(i), f = ji(o), p = Si(o), h = ji(a), g = Si(a), v = ji(l), y = Si(l), m = ji(s), w = Si(s), b = {
    a: ie,
    A: z,
    b: L,
    B: V,
    c: null,
    d: rg,
    e: rg,
    f: wE,
    g: TE,
    G: ME,
    H: mE,
    I: xE,
    j: bE,
    L: Ax,
    m: jE,
    M: SE,
    p: N,
    q: $,
    Q: og,
    s: ag,
    S: OE,
    u: PE,
    U: CE,
    V: kE,
    w: _E,
    W: EE,
    x: null,
    X: null,
    y: AE,
    Y: IE,
    Z: DE,
    "%": ig
  }, x = {
    a: J,
    A: X,
    b: ee,
    B: he,
    c: null,
    d: ng,
    e: ng,
    f: zE,
    g: YE,
    G: XE,
    H: RE,
    I: NE,
    j: $E,
    L: Ix,
    m: LE,
    M: BE,
    p: se,
    q: de,
    Q: og,
    s: ag,
    S: WE,
    u: FE,
    U: VE,
    V: KE,
    w: HE,
    W: qE,
    x: null,
    X: null,
    y: UE,
    Y: GE,
    Z: ZE,
    "%": ig
  }, j = {
    a: T,
    A: D,
    b: k,
    B: W,
    c: F,
    d: eg,
    e: eg,
    f: hE,
    g: Qv,
    G: Jv,
    H: tg,
    I: tg,
    j: uE,
    L: pE,
    m: cE,
    M: dE,
    p: E,
    q: sE,
    Q: gE,
    s: yE,
    S: fE,
    u: nE,
    U: iE,
    V: oE,
    w: rE,
    W: aE,
    x: Z,
    X: q,
    y: Qv,
    Y: Jv,
    Z: lE,
    "%": vE
  };
  b.x = S(r, b), b.X = S(n, b), b.c = S(t, b), x.x = S(r, x), x.X = S(n, x), x.c = S(t, x);
  function S(Q, G) {
    return function(le) {
      var K = [], Me = -1, me = 0, I = Q.length, U, H, ve;
      for (le instanceof Date || (le = /* @__PURE__ */ new Date(+le)); ++Me < I; )
        Q.charCodeAt(Me) === 37 && (K.push(Q.slice(me, Me)), (H = Zv[U = Q.charAt(++Me)]) != null ? U = Q.charAt(++Me) : H = U === "e" ? " " : "0", (ve = G[U]) && (U = ve(le, H)), K.push(U), me = Me + 1);
      return K.push(Q.slice(me, Me)), K.join("");
    };
  }
  function C(Q, G) {
    return function(le) {
      var K = wi(1900, void 0, 1), Me = _(K, Q, le += "", 0), me, I;
      if (Me != le.length) return null;
      if ("Q" in K) return new Date(K.Q);
      if ("s" in K) return new Date(K.s * 1e3 + ("L" in K ? K.L : 0));
      if (G && !("Z" in K) && (K.Z = 0), "p" in K && (K.H = K.H % 12 + K.p * 12), K.m === void 0 && (K.m = "q" in K ? K.q : 0), "V" in K) {
        if (K.V < 1 || K.V > 53) return null;
        "w" in K || (K.w = 1), "Z" in K ? (me = uc(wi(K.y, 0, 1)), I = me.getUTCDay(), me = I > 4 || I === 0 ? Da.ceil(me) : Da(me), me = El.offset(me, (K.V - 1) * 7), K.y = me.getUTCFullYear(), K.m = me.getUTCMonth(), K.d = me.getUTCDate() + (K.w + 6) % 7) : (me = cc(wi(K.y, 0, 1)), I = me.getDay(), me = I > 4 || I === 0 ? Ma.ceil(me) : Ma(me), me = fo.offset(me, (K.V - 1) * 7), K.y = me.getFullYear(), K.m = me.getMonth(), K.d = me.getDate() + (K.w + 6) % 7);
      } else ("W" in K || "U" in K) && ("w" in K || (K.w = "u" in K ? K.u % 7 : "W" in K ? 1 : 0), I = "Z" in K ? uc(wi(K.y, 0, 1)).getUTCDay() : cc(wi(K.y, 0, 1)).getDay(), K.m = 0, K.d = "W" in K ? (K.w + 6) % 7 + K.W * 7 - (I + 5) % 7 : K.w + K.U * 7 - (I + 6) % 7);
      return "Z" in K ? (K.H += K.Z / 100 | 0, K.M += K.Z % 100, uc(K)) : cc(K);
    };
  }
  function _(Q, G, le, K) {
    for (var Me = 0, me = G.length, I = le.length, U, H; Me < me; ) {
      if (K >= I) return -1;
      if (U = G.charCodeAt(Me++), U === 37) {
        if (U = G.charAt(Me++), H = j[U in Zv ? G.charAt(Me++) : U], !H || (K = H(Q, le, K)) < 0) return -1;
      } else if (U != le.charCodeAt(K++))
        return -1;
    }
    return K;
  }
  function E(Q, G, le) {
    var K = c.exec(G.slice(le));
    return K ? (Q.p = u.get(K[0].toLowerCase()), le + K[0].length) : -1;
  }
  function T(Q, G, le) {
    var K = h.exec(G.slice(le));
    return K ? (Q.w = g.get(K[0].toLowerCase()), le + K[0].length) : -1;
  }
  function D(Q, G, le) {
    var K = f.exec(G.slice(le));
    return K ? (Q.w = p.get(K[0].toLowerCase()), le + K[0].length) : -1;
  }
  function k(Q, G, le) {
    var K = m.exec(G.slice(le));
    return K ? (Q.m = w.get(K[0].toLowerCase()), le + K[0].length) : -1;
  }
  function W(Q, G, le) {
    var K = v.exec(G.slice(le));
    return K ? (Q.m = y.get(K[0].toLowerCase()), le + K[0].length) : -1;
  }
  function F(Q, G, le) {
    return _(Q, t, G, le);
  }
  function Z(Q, G, le) {
    return _(Q, r, G, le);
  }
  function q(Q, G, le) {
    return _(Q, n, G, le);
  }
  function ie(Q) {
    return a[Q.getDay()];
  }
  function z(Q) {
    return o[Q.getDay()];
  }
  function L(Q) {
    return s[Q.getMonth()];
  }
  function V(Q) {
    return l[Q.getMonth()];
  }
  function N(Q) {
    return i[+(Q.getHours() >= 12)];
  }
  function $(Q) {
    return 1 + ~~(Q.getMonth() / 3);
  }
  function J(Q) {
    return a[Q.getUTCDay()];
  }
  function X(Q) {
    return o[Q.getUTCDay()];
  }
  function ee(Q) {
    return s[Q.getUTCMonth()];
  }
  function he(Q) {
    return l[Q.getUTCMonth()];
  }
  function se(Q) {
    return i[+(Q.getUTCHours() >= 12)];
  }
  function de(Q) {
    return 1 + ~~(Q.getUTCMonth() / 3);
  }
  return {
    format: function(Q) {
      var G = S(Q += "", b);
      return G.toString = function() {
        return Q;
      }, G;
    },
    parse: function(Q) {
      var G = C(Q += "", !1);
      return G.toString = function() {
        return Q;
      }, G;
    },
    utcFormat: function(Q) {
      var G = S(Q += "", x);
      return G.toString = function() {
        return Q;
      }, G;
    },
    utcParse: function(Q) {
      var G = C(Q += "", !0);
      return G.toString = function() {
        return Q;
      }, G;
    }
  };
}
var Zv = { "-": "", _: " ", 0: "0" }, ot = /^\s*\d+/, Q_ = /^%/, eE = /[\\^$*+?|[\]().{}]/g;
function we(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", o = i.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + i : i);
}
function tE(e) {
  return e.replace(eE, "\\$&");
}
function ji(e) {
  return new RegExp("^(?:" + e.map(tE).join("|") + ")", "i");
}
function Si(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function rE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function nE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function iE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function oE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function aE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Jv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Qv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function lE(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function sE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function cE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function eg(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function uE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function tg(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function dE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function fE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function pE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function hE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function vE(e, t, r) {
  var n = Q_.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function gE(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function yE(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function rg(e, t) {
  return we(e.getDate(), t, 2);
}
function mE(e, t) {
  return we(e.getHours(), t, 2);
}
function xE(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function bE(e, t) {
  return we(1 + fo.count(_r(e), e), t, 3);
}
function Ax(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function wE(e, t) {
  return Ax(e, t) + "000";
}
function jE(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function SE(e, t) {
  return we(e.getMinutes(), t, 2);
}
function OE(e, t) {
  return we(e.getSeconds(), t, 2);
}
function PE(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function CE(e, t) {
  return we(Al.count(_r(e) - 1, e), t, 2);
}
function Tx(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Zn(e) : Zn.ceil(e);
}
function kE(e, t) {
  return e = Tx(e), we(Zn.count(_r(e), e) + (_r(e).getDay() === 4), t, 2);
}
function _E(e) {
  return e.getDay();
}
function EE(e, t) {
  return we(Ma.count(_r(e) - 1, e), t, 2);
}
function AE(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function TE(e, t) {
  return e = Tx(e), we(e.getFullYear() % 100, t, 2);
}
function IE(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function ME(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Zn(e) : Zn.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function DE(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function ng(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function RE(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function NE(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function $E(e, t) {
  return we(1 + El.count(Er(e), e), t, 3);
}
function Ix(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function zE(e, t) {
  return Ix(e, t) + "000";
}
function LE(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function BE(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function WE(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function FE(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function VE(e, t) {
  return we(Tl.count(Er(e) - 1, e), t, 2);
}
function Mx(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Jn(e) : Jn.ceil(e);
}
function KE(e, t) {
  return e = Mx(e), we(Jn.count(Er(e), e) + (Er(e).getUTCDay() === 4), t, 2);
}
function HE(e) {
  return e.getUTCDay();
}
function qE(e, t) {
  return we(Da.count(Er(e) - 1, e), t, 2);
}
function UE(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function YE(e, t) {
  return e = Mx(e), we(e.getUTCFullYear() % 100, t, 2);
}
function GE(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function XE(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Jn(e) : Jn.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function ZE() {
  return "+0000";
}
function ig() {
  return "%";
}
function og(e) {
  return +e;
}
function ag(e) {
  return Math.floor(+e / 1e3);
}
var Dn, Dx, Rx;
JE({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function JE(e) {
  return Dn = J_(e), Dx = Dn.format, Dn.parse, Rx = Dn.utcFormat, Dn.utcParse, Dn;
}
function QE(e) {
  return new Date(e);
}
function eA(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Sd(e, t, r, n, i, o, a, l, s, c) {
  var u = cd(), f = u.invert, p = u.domain, h = c(".%L"), g = c(":%S"), v = c("%I:%M"), y = c("%I %p"), m = c("%a %d"), w = c("%b %d"), b = c("%B"), x = c("%Y");
  function j(S) {
    return (s(S) < S ? h : l(S) < S ? g : a(S) < S ? v : o(S) < S ? y : n(S) < S ? i(S) < S ? m : w : r(S) < S ? b : x)(S);
  }
  return u.invert = function(S) {
    return new Date(f(S));
  }, u.domain = function(S) {
    return arguments.length ? p(Array.from(S, eA)) : p().map(QE);
  }, u.ticks = function(S) {
    var C = p();
    return e(C[0], C[C.length - 1], S ?? 10);
  }, u.tickFormat = function(S, C) {
    return C == null ? j : c(C);
  }, u.nice = function(S) {
    var C = p();
    return (!S || typeof S.range != "function") && (S = t(C[0], C[C.length - 1], S ?? 10)), S ? p(wx(C, S)) : u;
  }, u.copy = function() {
    return uo(u, Sd(e, t, r, n, i, o, a, l, s, c));
  }, u;
}
function tA() {
  return Yt.apply(Sd(X_, Z_, _r, wd, Al, fo, xd, yd, sn, Dx).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function rA() {
  return Yt.apply(Sd(Y_, G_, Er, jd, Tl, El, bd, md, sn, Rx).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Il() {
  var e = 0, t = 1, r, n, i, o, a = bt, l = !1, s;
  function c(f) {
    return f == null || isNaN(f = +f) ? s : a(i === 0 ? 0.5 : (f = (o(f) - r) * i, l ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = o(e = +e), n = o(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (l = !!f, c) : l;
  }, c.interpolator = function(f) {
    return arguments.length ? (a = f, c) : a;
  };
  function u(f) {
    return function(p) {
      var h, g;
      return arguments.length ? ([h, g] = p, a = f(h, g), c) : [a(0), a(1)];
    };
  }
  return c.range = u(ai), c.rangeRound = u(sd), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return o = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function Yr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Nx() {
  var e = Ur(Il()(bt));
  return e.copy = function() {
    return Yr(e, Nx());
  }, Ir.apply(e, arguments);
}
function $x() {
  var e = fd(Il()).domain([1, 10]);
  return e.copy = function() {
    return Yr(e, $x()).base(e.base());
  }, Ir.apply(e, arguments);
}
function zx() {
  var e = pd(Il());
  return e.copy = function() {
    return Yr(e, zx()).constant(e.constant());
  }, Ir.apply(e, arguments);
}
function Od() {
  var e = hd(Il());
  return e.copy = function() {
    return Yr(e, Od()).exponent(e.exponent());
  }, Ir.apply(e, arguments);
}
function nA() {
  return Od.apply(null, arguments).exponent(0.5);
}
function Lx() {
  var e = [], t = bt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((so(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Fr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, o) => F4(e, o / n));
  }, r.copy = function() {
    return Lx(t).domain(e);
  }, Ir.apply(r, arguments);
}
function Ml() {
  var e = 0, t = 0.5, r = 1, n = 1, i, o, a, l, s, c = bt, u, f = !1, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +u(v)) - o) * (n * v < n * o ? l : s), c(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = u(e = +e), o = u(t = +t), a = u(r = +r), l = i === o ? 0 : 0.5 / (o - i), s = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function g(v) {
    return function(y) {
      var m, w, b;
      return arguments.length ? ([m, w, b] = y, c = v_(v, [m, w, b]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = g(ai), h.rangeRound = g(sd), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return u = v, i = v(e), o = v(t), a = v(r), l = i === o ? 0 : 0.5 / (o - i), s = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h;
  };
}
function Bx() {
  var e = Ur(Ml()(bt));
  return e.copy = function() {
    return Yr(e, Bx());
  }, Ir.apply(e, arguments);
}
function Wx() {
  var e = fd(Ml()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Yr(e, Wx()).base(e.base());
  }, Ir.apply(e, arguments);
}
function Fx() {
  var e = pd(Ml());
  return e.copy = function() {
    return Yr(e, Fx()).constant(e.constant());
  }, Ir.apply(e, arguments);
}
function Pd() {
  var e = hd(Ml());
  return e.copy = function() {
    return Yr(e, Pd()).exponent(e.exponent());
  }, Ir.apply(e, arguments);
}
function iA() {
  return Pd.apply(null, arguments).exponent(0.5);
}
const Vx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: od,
  scaleDiverging: Bx,
  scaleDivergingLog: Wx,
  scaleDivergingPow: Pd,
  scaleDivergingSqrt: iA,
  scaleDivergingSymlog: Fx,
  scaleIdentity: bx,
  scaleImplicit: nu,
  scaleLinear: xx,
  scaleLog: jx,
  scaleOrdinal: id,
  scalePoint: H4,
  scalePow: vd,
  scaleQuantile: Px,
  scaleQuantize: Cx,
  scaleRadial: Ox,
  scaleSequential: Nx,
  scaleSequentialLog: $x,
  scaleSequentialPow: Od,
  scaleSequentialQuantile: Lx,
  scaleSequentialSqrt: nA,
  scaleSequentialSymlog: zx,
  scaleSqrt: z_,
  scaleSymlog: Sx,
  scaleThreshold: kx,
  scaleTime: tA,
  scaleUtc: rA,
  tickFormat: mx
}, Symbol.toStringTag, { value: "Module" }));
function oA(e) {
  var t = Vx;
  if (e in t && typeof t[e] == "function")
    return t[e]();
  var r = "scale".concat(Zi(e));
  if (r in t && typeof t[r] == "function")
    return t[r]();
}
function lg(e, t, r) {
  if (typeof e == "function")
    return e.copy().domain(t).range(r);
  if (e != null) {
    var n = oA(e);
    if (n != null)
      return n.domain(t).range(r), n;
  }
}
function Cd(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? lg(e.scale, r, n) : lg(t, r, n);
}
function aA(e) {
  return "scale".concat(Zi(e));
}
function lA(e) {
  return aA(e) in Vx;
}
var Kx = (e, t, r) => {
  if (e != null) {
    var {
      scale: n,
      type: i
    } = e;
    if (n === "auto")
      return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string")
      return lA(n) ? n : "point";
  }
};
function sA(e, t) {
  for (var r = 0, n = e.length, i = e[0] < e[e.length - 1]; r < n; ) {
    var o = Math.floor((r + n) / 2);
    (i ? e[o] < t : e[o] > t) ? r = o + 1 : n = o;
  }
  return r;
}
function Hx(e, t) {
  if (e) {
    var r = t ?? e.domain(), n = r.map((o) => {
      var a;
      return (a = e(o)) !== null && a !== void 0 ? a : 0;
    }), i = e.range();
    if (!(r.length === 0 || i.length < 2))
      return (o) => {
        var a, l, s = sA(n, o);
        if (s <= 0)
          return r[0];
        if (s >= r.length)
          return r[r.length - 1];
        var c = (a = n[s - 1]) !== null && a !== void 0 ? a : 0, u = (l = n[s]) !== null && l !== void 0 ? l : 0;
        return Math.abs(o - c) <= Math.abs(o - u) ? r[s - 1] : r[s];
      };
  }
}
function cA(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : Hx(e, void 0);
}
function sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), !0).forEach(function(n) {
      uA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uA(e, t, r) {
  return (t = dA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dA(e) {
  var t = fA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lu = [0, "auto"], Ge = {
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
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0,
  niceTicks: "auto"
}, qx = (e, t) => e.cartesianAxis.xAxis[t], vr = (e, t) => {
  var r = qx(e, t);
  return r ?? Ge;
}, Xe = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: lu,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  niceTicks: "auto",
  width: ro
}, Ux = (e, t) => e.cartesianAxis.yAxis[t], gr = (e, t) => {
  var r = Ux(e, t);
  return r ?? Xe;
}, pA = {
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
  unit: ""
}, kd = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? pA;
}, St = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    case "zAxis":
      return kd(e, r);
    case "angleAxis":
      return Qu(e, r);
    case "radiusAxis":
      return ed(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, hA = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, po = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    case "angleAxis":
      return Qu(e, r);
    case "radiusAxis":
      return ed(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Yx = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Gx(e, t) {
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
var Dl = (e) => e.graphicalItems.cartesianItems, vA = R([nt, Sl], Gx), Xx = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), li = R([Dl, St, vA], Xx, {
  memoizeOptions: {
    resultEqualityCheck: kl
  }
}), Zx = R([li], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Pl)), Jx = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), gA = R([li], Jx), Qx = (e) => e.map((t) => t.data).filter(Boolean).flat(1), yA = R([li], (e) => e.some((t) => !t.data)), eb = R([li], Qx, {
  memoizeOptions: {
    resultEqualityCheck: kl
  }
}), tb = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, _d = R([eb, ml], tb), mA = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: qe(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: qe(i, n)
}))) : e.map((n) => ({
  value: n
})), rb = (e, t, r, n, i, o) => {
  var {
    chartData: a = [],
    dataStartIndex: l,
    dataEndIndex: s
  } = n, c = mA(e, t, r);
  if (i && t?.dataKey != null && o.length > 0) {
    var u = a.slice(l, s + 1), f = u.map((p) => ({
      value: qe(p, t.dataKey)
    })).filter((p) => p.value != null);
    return [...f, ...c];
  }
  return c;
}, ho = R([_d, St, li, ml, yA, eb], rb);
function Kn(e) {
  if (qt(e) || e instanceof Date) {
    var t = Number(e);
    if (pe(t))
      return t;
  }
}
function cg(e) {
  if (Array.isArray(e)) {
    var t = [Kn(e[0]), Kn(e[1])];
    return cr(t) ? t : void 0;
  }
  var r = Kn(e);
  if (r != null)
    return [r, r];
}
function pr(e) {
  return e.map(Kn).filter(kt);
}
function xA(e, t) {
  var r = Kn(e), n = Kn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var bA = R([ho], (e) => e?.map((t) => t.value).sort(xA));
function nb(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function wA(e, t, r) {
  if (!r)
    return [];
  if (!r.length)
    return [];
  var n;
  if (typeof t == "number" && !Zt(t))
    n = t;
  else if (Array.isArray(t)) {
    var i = pr(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : pr(r.flatMap((o) => {
    var a = qe(e, o.dataKey), l, s;
    if (Array.isArray(a) ? [l, s] = a : l = s = a, !(!pe(l) || !pe(s)))
      return [n - l, n + s];
  }));
}
var et = (e) => {
  var t = it(e), r = oi(e);
  return po(e, t, r);
}, Qn = R([et], (e) => e?.dataKey), jA = R([Zx, ml, et], cx), ib = (e, t, r, n) => {
  var i = {}, o = t.reduce((a, l) => {
    if (l.stackId == null)
      return a;
    var s = a[l.stackId];
    return s == null && (s = []), s.push(l), a[l.stackId] = s, a;
  }, i);
  return Object.fromEntries(Object.entries(o).map((a) => {
    var [l, s] = a, c = n ? [...s].reverse() : s, u = c.map(Ol);
    return [l, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: mP(e, u, r),
      graphicalItems: c
    }];
  }));
}, Na = R([jA, Zx, xl, rx], ib), ob = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: o
  } = t;
  if (n == null && r !== "zAxis") {
    var a = jP(e, i, o);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, SA = R([St], (e) => e.allowDataOverflow), Ed = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return lu;
  if (e.domain != null)
    return e.domain;
  if ("ticks" in e && e.ticks != null) {
    if (e.type === "number") {
      var r = pr(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : lu;
}, ab = R([St], Ed), lb = R([ab, SA], Vm), OA = R([Na, rr, nt, lb], ob, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), Ad = (e) => e.errorBars, PA = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => nb(r, n)), $a = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var o = i.flat(), a = Math.min(...o), l = Math.max(...o);
    return [a, l];
  }
}, sb = function(t, r, n, i, o) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], l, s;
  if (n.length > 0 && n.forEach((c) => {
    var u, f = c.data != null ? [...c.data] : a, p = (u = i[c.id]) === null || u === void 0 ? void 0 : u.filter((h) => nb(o, h));
    f.forEach((h) => {
      var g, v = qe(h, (g = r.dataKey) !== null && g !== void 0 ? g : c.dataKey), y = wA(h, v, p);
      if (y.length >= 2) {
        var m = Math.min(...y), w = Math.max(...y);
        (l == null || m < l) && (l = m), (s == null || w > s) && (s = w);
      }
      var b = cg(v);
      b != null && (l = l == null ? b[0] : Math.min(l, b[0]), s = s == null ? b[1] : Math.max(s, b[1]));
    });
  }), r?.dataKey != null && n.length === 0 && t.forEach((c) => {
    var u = cg(qe(c, r.dataKey));
    u != null && (l = l == null ? u[0] : Math.min(l, u[0]), s = s == null ? u[1] : Math.max(s, u[1]));
  }), pe(l) && pe(s))
    return [l, s];
}, CA = R([_d, St, gA, Ad, nt, p4], sb, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
});
function kA(e) {
  var {
    value: t
  } = e;
  if (qt(t) || t instanceof Date)
    return t;
}
var _A = (e, t, r) => {
  var n = e.map(kA).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && hy(n)) ? Wm(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, cb = (e) => e.referenceElements.dots, si = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), EA = R([cb, nt, Sl], si), ub = (e) => e.referenceElements.areas, AA = R([ub, nt, Sl], si), db = (e) => e.referenceElements.lines, TA = R([db, nt, Sl], si), fb = (e, t) => {
  if (e != null) {
    var r = pr(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, IA = R(EA, nt, fb), pb = (e, t) => {
  if (e != null) {
    var r = pr(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, MA = R([AA, nt], pb);
function DA(e) {
  var t;
  if (e.x != null)
    return pr([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : pr(r);
}
function RA(e) {
  var t;
  if (e.y != null)
    return pr([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : pr(r);
}
var hb = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? DA(n) : RA(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, NA = R([TA, nt], hb), $A = R(IA, NA, MA, (e, t, r) => $a(e, r, t)), vb = (e, t, r, n, i, o, a, l) => {
  if (r != null)
    return r;
  var s = a === "vertical" && l === "xAxis" || a === "horizontal" && l === "yAxis", c = s ? $a(n, o, i) : $a(o, i);
  return v4(t, c, e.allowDataOverflow);
}, zA = R([St, ab, lb, OA, CA, $A, Oe, nt], vb, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), LA = [0, 1], gb = (e, t, r, n, i, o, a) => {
  if (!((e == null || r == null || r.length === 0) && a === void 0)) {
    var {
      dataKey: l,
      type: s
    } = e, c = hr(t, o);
    if (c && l == null) {
      var u;
      return Wm(0, (u = r?.length) !== null && u !== void 0 ? u : 0);
    }
    return s === "category" ? _A(n, e, c) : i === "expand" && !c ? LA : a;
  }
}, Td = R([St, Oe, _d, ho, xl, nt, zA], gb), ci = R([St, Yx, Xu], Kx), yb = (e, t, r) => {
  var {
    niceTicks: n
  } = t;
  if (n !== "none") {
    var i = Ed(t), o = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && cr(e)) {
      if (o)
        return xv(e, t.tickCount, t.allowDecimals, n);
      if (t.type === "number")
        return bv(e, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (o && cr(e))
        return xv(e, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && cr(e))
        return bv(e, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Id = R([Td, po, ci], yb), mb = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && cr(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, o, a = t[0], l = (i = r[0]) !== null && i !== void 0 ? i : 0, s = t[1], c = (o = r[r.length - 1]) !== null && o !== void 0 ? o : 0;
    return [Math.min(a, l), Math.max(s, c)];
  }
  return t;
}, BA = R([St, Td, Id, nt], mb), WA = R(ho, St, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(pr(e.map((f) => f.value))).sort((f, p) => f - p), i = n[0], o = n[n.length - 1];
    if (i == null || o == null)
      return 1 / 0;
    var a = o - i;
    if (a === 0)
      return 1 / 0;
    for (var l = 0; l < n.length - 1; l++) {
      var s = n[l], c = n[l + 1];
      if (!(s == null || c == null)) {
        var u = c - s;
        r = Math.min(r, u);
      }
    }
    return r / a;
  }
}), xb = R(WA, Oe, tx, rt, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!pe(e))
    return 0;
  var o = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * o / 2;
  if (i === "no-gap") {
    var a = Jt(r, e * o), l = e * o / 2;
    return l - a - (l - a) / o * a;
  }
  return 0;
}), FA = (e, t, r) => {
  var n = vr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : xb(e, "xAxis", t, r, n.padding);
}, VA = (e, t, r) => {
  var n = gr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : xb(e, "yAxis", t, r, n.padding);
}, KA = R(vr, FA, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), HA = R(gr, VA, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), qA = R([rt, KA, fl, dl, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: o
  } = n;
  return i ? [o.left, r.width - o.right] : [e.left + t.left, e.left + e.width - t.right];
}), UA = R([rt, Oe, HA, fl, dl, (e, t, r) => r], (e, t, r, n, i, o) => {
  var {
    padding: a
  } = i;
  return o ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), vo = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return qA(e, r, n);
    case "yAxis":
      return UA(e, r, n);
    case "zAxis":
      return (i = kd(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return ax(e);
    case "radiusAxis":
      return lx(e, r);
    default:
      return;
  }
}, bb = R([St, vo], bl), YA = R([ci, BA], A4), Md = R([St, ci, YA, bb], Cd), wb = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: o
    } = r, a = hr(e, n);
    if (a && (i === "number" || o !== "auto"))
      return t.map((l) => l.value);
  }
}, Dd = R([Oe, ho, po, nt], wb), ei = R([Md], rd);
R([Md], cA);
R([Md, bA], Hx);
R([li, Ad, nt], PA);
function jb(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Rl = (e, t) => t, Nl = (e, t, r) => r, GA = R(cl, Rl, Nl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(jb)), XA = R(ul, Rl, Nl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(jb)), Sb = (e, t) => ({
  width: e.width,
  height: t.height
}), ZA = (e, t) => {
  var r = typeof t.width == "number" ? t.width : ro;
  return {
    width: r,
    height: e.height
  };
}, Ob = R(rt, vr, Sb), JA = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, QA = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, e3 = R(Tr, rt, GA, Rl, Nl, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var s = Sb(t, l);
    a == null && (a = JA(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    o[l.id] = a - Number(c) * s.height, a += (c ? -1 : 1) * s.height;
  }), o;
}), t3 = R(Ar, rt, XA, Rl, Nl, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var s = ZA(t, l);
    a == null && (a = QA(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    o[l.id] = a - Number(c) * s.width, a += (c ? -1 : 1) * s.width;
  }), o;
}), r3 = (e, t) => {
  var r = vr(e, t);
  if (r != null)
    return e3(e, r.orientation, r.mirror);
}, n3 = R([rt, vr, r3, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), i3 = (e, t) => {
  var r = gr(e, t);
  if (r != null)
    return t3(e, r.orientation, r.mirror);
}, o3 = R([rt, gr, i3, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
}), Pb = R(rt, gr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : ro;
  return {
    width: r,
    height: e.height
  };
}), ug = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Ob(e, r).width;
    case "yAxis":
      return Pb(e, r).height;
    default:
      return;
  }
}, Cb = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: o,
      dataKey: a
    } = r, l = hr(e, n), s = t.map((u) => u.value), c = s.filter((u) => u != null);
    if (a && l && o === "category" && i && hy(c))
      return s;
  }
}, Rd = R([Oe, ho, St, nt], Cb), dg = R([Oe, hA, ci, ei, Rd, Dd, vo, Id, nt], (e, t, r, n, i, o, a, l, s) => {
  if (t != null) {
    var c = hr(e, s);
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
      axisType: s,
      categoricalDomain: o,
      duplicateDomain: i,
      isCategorical: c,
      niceTicks: l,
      range: a,
      realScaleType: r,
      scale: n
    };
  }
}), a3 = (e, t, r, n, i, o, a, l, s) => {
  if (!(t == null || n == null)) {
    var c = hr(e, s), {
      type: u,
      ticks: f,
      tickCount: p
    } = t, h = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), g = u === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    g = s === "angleAxis" && o != null && o.length >= 2 ? Ct(o[0] - o[1]) * 2 * g : g;
    var v = f || i;
    return v ? v.map((y, m) => {
      var w = a ? a.indexOf(y) : y, b = n.map(w);
      return pe(b) ? {
        index: m,
        coordinate: b + g,
        value: y,
        offset: g
      } : null;
    }).filter(kt) : c && l ? l.map((y, m) => {
      var w = n.map(y);
      return pe(w) ? {
        coordinate: w + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(kt) : n.ticks ? n.ticks(p).map((y, m) => {
      var w = n.map(y);
      return pe(w) ? {
        coordinate: w + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(kt) : n.domain().map((y, m) => {
      var w = n.map(y);
      return pe(w) ? {
        coordinate: w + g,
        // @ts-expect-error can't use Date as index
        value: a ? a[y] : y,
        index: m,
        offset: g
      } : null;
    }).filter(kt);
  }
}, kb = R([Oe, po, ci, ei, Id, vo, Rd, Dd, nt], a3), l3 = (e, t, r, n, i, o, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var l = hr(e, a), {
      tickCount: s
    } = t, c = 0;
    return c = a === "angleAxis" && n?.length >= 2 ? Ct(n[0] - n[1]) * 2 * c : c, l && o ? o.map((u, f) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + c,
        value: u,
        index: f,
        offset: c
      } : null;
    }).filter(kt) : r.ticks ? r.ticks(s).map((u, f) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + c,
        value: u,
        index: f,
        offset: c
      } : null;
    }).filter(kt) : r.domain().map((u, f) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + c,
        // @ts-expect-error can't use unknown as index
        value: i ? i[u] : u,
        index: f,
        offset: c
      } : null;
    }).filter(kt);
  }
}, Kr = R([Oe, po, ei, vo, Rd, Dd, nt], l3), Hr = R(St, ei, (e, t) => {
  if (!(e == null || t == null))
    return Ra(Ra({}, e), {}, {
      scale: t
    });
}), s3 = R([St, ci, Td, bb], Cd), c3 = R([s3], rd);
R((e, t, r) => kd(e, r), c3, (e, t) => {
  if (!(e == null || t == null))
    return Ra(Ra({}, e), {}, {
      scale: t
    });
});
var u3 = R([Oe, cl, ul], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), d3 = (e, t, r) => {
  var n;
  return (n = e.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
R([d3], (e) => {
  if (!(!e || e.length === 0))
    return (t) => {
      var r, n = 1 / 0, i = e[0];
      for (var o of e) {
        var a = Math.abs(o.coordinate - t);
        a < n && (n = a, i = o);
      }
      return (r = i) === null || r === void 0 ? void 0 : r.value;
    };
});
var _b = (e) => e.options.defaultTooltipEventType, Eb = (e) => e.options.validateTooltipEventTypes;
function Ab(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function go(e, t) {
  var r = _b(e), n = Eb(e);
  return Ab(t, r, n);
}
function f3(e) {
  return ae((t) => go(t, e));
}
var Tb = (e, t) => {
  var r, n = Number(t);
  if (!(Zt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, p3 = (e) => e.tooltip.settings, Br = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, h3 = {
  itemInteraction: {
    click: Br,
    hover: Br
  },
  axisInteraction: {
    click: Br,
    hover: Br
  },
  keyboardInteraction: Br,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0,
    graphicalItemId: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, Ib = gt({
  name: "tooltip",
  initialState: h3,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: De()
    },
    replaceTooltipEntrySettings: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Vt(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: De()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Vt(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: De()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
    }
  }
}), {
  addTooltipEntrySettings: v3,
  replaceTooltipEntrySettings: g3,
  removeTooltipEntrySettings: y3,
  setTooltipSettingsState: m3,
  setActiveMouseOverItemIndex: Mb,
  mouseLeaveItem: x3,
  mouseLeaveChart: Db,
  setActiveClickItemIndex: b3,
  setMouseOverAxisIndex: Rb,
  setMouseClickAxisIndex: w3,
  setSyncInteraction: _i,
  setKeyboardInteraction: za
} = Ib.actions, j3 = Ib.reducer;
function fg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), !0).forEach(function(n) {
      S3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S3(e, t, r) {
  return (t = O3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O3(e) {
  var t = P3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function P3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function C3(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function k3(e) {
  return e.index != null;
}
var Nb = (e, t, r, n) => {
  if (t == null)
    return Br;
  var i = C3(e, t, r);
  if (i == null)
    return Br;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var o = e.settings.active === !0;
  if (k3(i)) {
    if (o)
      return Wo(Wo({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n,
      graphicalItemId: void 0
    };
  return Wo(Wo({}, Br), {}, {
    coordinate: i.coordinate
  });
};
function _3(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function E3(e, t) {
  var r = _3(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var o = Math.min(n, i), a = Math.max(n, i);
  return r >= o && r <= a;
}
function A3(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = qe(e, t);
  return n == null || !cr(r) ? !0 : E3(n, r);
}
var Ti = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var o = Number(i);
  if (!pe(o))
    return i;
  var a = 0, l = 1 / 0;
  t.length > 0 && (l = t.length - 1);
  var s = Math.max(a, Math.min(o, l)), c = t[s];
  return c == null || A3(c, r, n) ? String(s) : null;
}, $b = (e, t, r, n, i, o, a) => {
  if (o != null) {
    var l = a[0], s = l?.getPosition(o);
    if (s != null)
      return s;
    var c = i?.[Number(o)];
    if (c)
      switch (r) {
        case "horizontal":
          return {
            x: c.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: c.coordinate
          };
      }
  }
}, zb = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  if (r === "hover" ? i = e.itemInteraction.hover.graphicalItemId : i = e.itemInteraction.click.graphicalItemId, e.syncInteraction.active && i == null)
    return e.tooltipItemPayloads;
  if (i == null && (n != null || e.keyboardInteraction.active)) {
    var o = e.tooltipItemPayloads[0];
    return o != null ? [o] : [];
  }
  return e.tooltipItemPayloads.filter((a) => {
    var l;
    return ((l = a.settings) === null || l === void 0 ? void 0 : l.graphicalItemId) === i;
  });
}, Lb = (e) => e.options.tooltipPayloadSearcher, ui = (e) => e.tooltip;
function pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pg(Object(r), !0).forEach(function(n) {
      T3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T3(e, t, r) {
  return (t = I3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I3(e) {
  var t = M3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function M3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D3(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
}
function R3(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
}
function N3(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
  if (typeof e == "function")
    return (t) => e(t);
}
function vg(e) {
  if (typeof e == "string")
    return e;
}
function $3(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? D3(e.name) : void 0, r = "unit" in e ? R3(e.unit) : void 0, n = "dataKey" in e ? N3(e.dataKey) : void 0, i = "payload" in e ? e.payload : void 0, o = "color" in e ? vg(e.color) : void 0, a = "fill" in e ? vg(e.fill) : void 0;
    return {
      name: t,
      unit: r,
      dataKey: n,
      payload: i,
      color: o,
      fill: a
    };
  }
}
function z3(e, t) {
  return e ?? t;
}
var Bb = (e, t, r, n, i, o, a) => {
  if (!(t == null || o == null)) {
    var {
      chartData: l,
      computedData: s,
      dataStartIndex: c,
      dataEndIndex: u
    } = r, f = [];
    return e.reduce((p, h) => {
      var g, {
        dataDefinedOnItem: v,
        settings: y
      } = h, m = z3(v, l), w = Array.isArray(m) ? fm(m, c, u) : m, b = (g = y?.dataKey) !== null && g !== void 0 ? g : n, x = y?.nameKey, j;
      if (n && Array.isArray(w) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(w[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      a === "axis" ? j = vy(w, n, i) : j = o(w, t, s, x), Array.isArray(j))
        j.forEach((C) => {
          var _, E, T = $3(C), D = T?.name, k = T?.dataKey, W = T?.payload, F = hg(hg({}, y), {}, {
            name: D,
            unit: T?.unit,
            // Preserve item-level color/fill from graphical items.
            color: (_ = T?.color) !== null && _ !== void 0 ? _ : y?.color,
            fill: (E = T?.fill) !== null && E !== void 0 ? E : y?.fill
          });
          p.push(sh({
            tooltipEntrySettings: F,
            dataKey: k,
            payload: W,
            value: qe(W, k),
            name: D == null ? void 0 : String(D)
          }));
        });
      else {
        var S;
        p.push(sh({
          tooltipEntrySettings: y,
          dataKey: b,
          payload: j,
          // getValueByDataKey does not validate the output type
          value: qe(j, b),
          // getValueByDataKey does not validate the output type
          name: (S = qe(j, x)) !== null && S !== void 0 ? S : y?.name
        }));
      }
      return p;
    }, f);
  }
}, Nd = R([et, Yx, Xu], Kx), L3 = R([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), B3 = R([it, oi], Gx), En = R([L3, et, B3], Xx, {
  memoizeOptions: {
    resultEqualityCheck: kl
  }
}), W3 = R([En], (e) => e.filter(Pl)), Wb = R([En], Qx, {
  memoizeOptions: {
    resultEqualityCheck: kl
  }
}), F3 = R([En], (e) => e.some((t) => !t.data)), wn = R([Wb, rr], tb), V3 = R([W3, rr, et], cx), $d = R([wn, et, En, rr, F3, Wb], rb), Fb = R([et], Ed), K3 = R([et], (e) => e.allowDataOverflow), Vb = R([Fb, K3], Vm), H3 = R([En], (e) => e.filter(Pl)), q3 = R([V3, H3, xl, rx], ib), U3 = R([q3, rr, it, Vb], ob), Y3 = R([En], Jx), G3 = R([wn, et, Y3, Ad, it, h4], sb, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), X3 = R([cb, it, oi], si), Z3 = R([X3, it], fb), J3 = R([ub, it, oi], si), Q3 = R([J3, it], pb), eT = R([db, it, oi], si), tT = R([eT, it], hb), rT = R([Z3, tT, Q3], $a), nT = R([et, Fb, Vb, U3, G3, rT, Oe, it], vb), ti = R([et, Oe, wn, $d, xl, it, nT], gb), iT = R([ti, et, Nd], yb), oT = R([et, ti, iT, it], mb), Kb = (e) => {
  var t = it(e), r = oi(e), n = !1;
  return vo(e, t, r, n);
}, Hb = R([et, Kb], bl), aT = R([et, Nd, oT, Hb], Cd), qb = R([aT], rd), lT = R([Oe, $d, et, it], Cb), sT = R([Oe, $d, et, it], wb), cT = (e, t, r, n, i, o, a, l) => {
  if (t) {
    var {
      type: s
    } = t, c = hr(e, l);
    if (n) {
      var u = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = s === "category" && n.bandwidth ? n.bandwidth() / u : 0;
      return f = l === "angleAxis" && i != null && i?.length >= 2 ? Ct(i[0] - i[1]) * 2 * f : f, c && a ? a.map((p, h) => {
        var g = n.map(p);
        return pe(g) ? {
          coordinate: g + f,
          value: p,
          index: h,
          offset: f
        } : null;
      }).filter(kt) : n.domain().map((p, h) => {
        var g = n.map(p);
        return pe(g) ? {
          coordinate: g + f,
          // @ts-expect-error can't use Date as an index
          value: o ? o[p] : p,
          index: h,
          offset: f
        } : null;
      }).filter(kt);
    }
  }
}, Mr = R([Oe, et, Nd, qb, Kb, lT, sT, it], cT), zd = R([_b, Eb, p3], (e, t, r) => Ab(r.shared, e, t)), Ub = (e) => e.tooltip.settings.trigger, Ld = (e) => e.tooltip.settings.defaultIndex, yo = R([ui, zd, Ub, Ld], Nb), jn = R([yo, wn, Qn, ti], Ti), Yb = R([Mr, jn], Tb), Gb = R([yo], (e) => {
  if (e)
    return e.dataKey;
}), uT = R([yo], (e) => {
  if (e)
    return e.graphicalItemId;
}), Xb = R([ui, zd, Ub, Ld], zb), dT = R([Ar, Tr, Oe, rt, Mr, Ld, Xb], $b), fT = R([yo, dT], (e, t) => e != null && e.coordinate ? e.coordinate : t), pT = R([yo], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), hT = R([Xb, jn, rr, Qn, Yb, Lb, zd], Bb), vT = R([hT], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), !0).forEach(function(n) {
      gT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gT(e, t, r) {
  return (t = yT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yT(e) {
  var t = mT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xT = () => ae(et), bT = () => {
  var e = xT(), t = ae(Mr), r = ae(qb);
  return Yn(!e || !r ? void 0 : yg(yg({}, e), {}, {
    scale: r
  }), t);
};
function mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), !0).forEach(function(n) {
      wT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wT(e, t, r) {
  return (t = jT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jT(e) {
  var t = ST(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ST(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var OT = (e, t, r, n) => {
  var i = t.find((o) => o && o.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.relativeY
      };
    if (e === "vertical")
      return {
        x: n.relativeX,
        y: i.coordinate
      };
  }
  return {
    x: 0,
    y: 0
  };
}, PT = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "centric") {
      var o = i.coordinate, {
        radius: a
      } = n;
      return Rn(Rn(Rn({}, n), st(n.cx, n.cy, a, o)), {}, {
        angle: o,
        radius: a
      });
    }
    var l = i.coordinate, {
      angle: s
    } = n;
    return Rn(Rn(Rn({}, n), st(n.cx, n.cy, l, s)), {}, {
      angle: s,
      radius: l
    });
  }
  return {
    angle: 0,
    clockWise: !1,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0
  };
};
function CT(e, t) {
  var {
    relativeX: r,
    relativeY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var Zb = (e, t, r, n, i) => {
  var o, a = (o = t?.length) !== null && o !== void 0 ? o : 0;
  if (a <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var l = 0; l < a; l++) {
      var s, c, u, f, p, h = l > 0 ? (s = r[l - 1]) === null || s === void 0 ? void 0 : s.coordinate : (c = r[a - 1]) === null || c === void 0 ? void 0 : c.coordinate, g = (u = r[l]) === null || u === void 0 ? void 0 : u.coordinate, v = l >= a - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (p = r[l + 1]) === null || p === void 0 ? void 0 : p.coordinate, y = void 0;
      if (!(h == null || g == null || v == null))
        if (Ct(g - h) !== Ct(v - g)) {
          var m = [];
          if (Ct(v - g) === Ct(i[1] - i[0])) {
            y = v;
            var w = g + i[1] - i[0];
            m[0] = Math.min(w, (w + h) / 2), m[1] = Math.max(w, (w + h) / 2);
          } else {
            y = h;
            var b = v + i[1] - i[0];
            m[0] = Math.min(g, (b + g) / 2), m[1] = Math.max(g, (b + g) / 2);
          }
          var x = [Math.min(g, (y + g) / 2), Math.max(g, (y + g) / 2)];
          if (e > x[0] && e <= x[1] || e >= m[0] && e <= m[1]) {
            var j;
            return (j = r[l]) === null || j === void 0 ? void 0 : j.index;
          }
        } else {
          var S = Math.min(h, v), C = Math.max(h, v);
          if (e > (S + g) / 2 && e <= (C + g) / 2) {
            var _;
            return (_ = r[l]) === null || _ === void 0 ? void 0 : _.index;
          }
        }
    }
  else if (t)
    for (var E = 0; E < a; E++) {
      var T = t[E];
      if (T != null) {
        var D = t[E + 1], k = t[E - 1];
        if (E === 0 && D != null && e <= (T.coordinate + D.coordinate) / 2 || E === a - 1 && k != null && e > (T.coordinate + k.coordinate) / 2 || E > 0 && E < a - 1 && k != null && D != null && e > (T.coordinate + k.coordinate) / 2 && e <= (T.coordinate + D.coordinate) / 2)
          return T.index;
      }
    }
  return -1;
}, Jb = () => ae(Xu), Bd = (e, t) => t, Qb = (e, t, r) => r, Wd = (e, t, r, n) => n, kT = R(Mr, (e) => Qa(e, (t) => t.coordinate)), Fd = R([ui, Bd, Qb, Wd], Nb), Vd = R([Fd, wn, Qn, ti], Ti), _T = (e, t, r) => {
  if (t != null) {
    var n = ui(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, e1 = R([ui, Bd, Qb, Wd], zb), La = R([Ar, Tr, Oe, rt, Mr, Wd, e1], $b), ET = R([Fd, La], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), t1 = R([Mr, Vd], Tb), AT = R([e1, Vd, rr, Qn, t1, Lb, Bd], Bb), TT = R([Fd, Vd], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), IT = (e, t, r, n, i, o, a) => {
  if (!(!e || !r || !n || !i) && CT(e, a)) {
    var l = SP(e, t), s = Zb(l, o, i, r, n), c = OT(t, i, s, e);
    return {
      activeIndex: String(s),
      activeCoordinate: c
    };
  }
}, MT = (e, t, r, n, i, o, a) => {
  if (!(!e || !n || !i || !o || !r)) {
    var l = n4(e, r);
    if (l) {
      var s = OP(l, t), c = Zb(s, a, o, n, i), u = PT(t, o, c, l);
      return {
        activeIndex: String(c),
        activeCoordinate: u
      };
    }
  }
}, DT = (e, t, r, n, i, o, a, l) => {
  if (!(!e || !t || !n || !i || !o))
    return t === "horizontal" || t === "vertical" ? IT(e, t, n, i, o, a, l) : MT(e, t, r, n, i, o, a);
}, RT = R((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), NT = R((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(Je)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: E4
  }
});
function xg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xg(Object(r), !0).forEach(function(n) {
      $T(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $T(e, t, r) {
  return (t = zT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zT(e) {
  var t = LT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var BT = {}, WT = {
  zIndexMap: Object.values(Je).reduce((e, t) => bg(bg({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), BT)
}, FT = new Set(Object.values(Je));
function VT(e) {
  return FT.has(e);
}
var r1 = gt({
  name: "zIndex",
  initialState: WT,
  reducers: {
    registerZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] ? e.zIndexMap[r].consumers += 1 : e.zIndexMap[r] = {
          consumers: 1,
          element: void 0,
          panoramaElement: void 0
        };
      },
      prepare: De()
    },
    unregisterZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !VT(r) && delete e.zIndexMap[r]);
      },
      prepare: De()
    },
    registerZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r,
          element: n,
          isPanorama: i
        } = t.payload;
        e.zIndexMap[r] ? i ? e.zIndexMap[r].panoramaElement = n : e.zIndexMap[r].element = n : e.zIndexMap[r] = {
          consumers: 0,
          element: i ? void 0 : n,
          panoramaElement: i ? n : void 0
        };
      },
      prepare: De()
    },
    unregisterZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (t.payload.isPanorama ? e.zIndexMap[r].panoramaElement = void 0 : e.zIndexMap[r].element = void 0);
      },
      prepare: De()
    }
  }
}), {
  registerZIndexPortal: KT,
  unregisterZIndexPortal: dc,
  registerZIndexPortalElement: HT,
  unregisterZIndexPortalElement: qT
} = r1.actions, UT = r1.reducer;
function zt(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = rC(), i = n && t !== void 0 && t !== 0, o = dt(), a = ge(void 0), l = ge(/* @__PURE__ */ new Set()), s = $e(), c = ae((f) => RT(f, t, o));
  if (Et(() => {
    if (!i) {
      var f = l.current;
      f.forEach((h) => {
        s(dc({
          zIndex: h
        }));
      }), f.clear(), a.current = void 0;
      return;
    }
    if (l.current.has(t) || (s(KT({
      zIndex: t
    })), l.current.add(t)), c) {
      a.current = c;
      var p = l.current;
      p.forEach((h) => {
        h !== t && (s(dc({
          zIndex: h
        })), p.delete(h));
      });
    }
  }, [s, t, i, c]), Et(() => {
    var f = l.current;
    return () => {
      f.forEach((p) => {
        s(dc({
          zIndex: p
        }));
      }), f.clear();
    };
  }, [s]), !i)
    return r;
  var u = c ?? a.current;
  return u ? /* @__PURE__ */ W0(r, u) : null;
}
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, su.apply(null, arguments);
}
function wg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wg(Object(r), !0).forEach(function(n) {
      YT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YT(e, t, r) {
  return (t = GT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GT(e) {
  var t = XT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZT(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ Dt(t) ? /* @__PURE__ */ ri(t, n) : /* @__PURE__ */ L0(r, n);
}
function JT(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: o,
    tooltipAxisBandSize: a,
    layout: l,
    cursor: s,
    tooltipEventType: c,
    chartName: u
  } = e, f = r, p = n, h = i;
  if (!s || !f || u !== "ScatterChart" && c !== "axis")
    return null;
  var g, v, y;
  if (u === "ScatterChart")
    g = f, v = yk, y = Je.cursorLine;
  else if (u === "BarChart")
    g = mk(l, f, o, a), v = $m, y = Je.cursorRectangle;
  else if (l === "radial" && my(f)) {
    var {
      cx: m,
      cy: w,
      radius: b,
      startAngle: x,
      endAngle: j
    } = zm(f);
    g = {
      cx: m,
      cy: w,
      startAngle: x,
      endAngle: j,
      innerRadius: b,
      outerRadius: b
    }, v = Bm, y = Je.cursorLine;
  } else
    g = {
      points: l4(l, f, o)
    }, v = Ai, y = Je.cursorLine;
  var S = typeof s == "object" && "className" in s ? s.className : void 0, C = Fo(Fo(Fo(Fo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), g), Xi(s)), {}, {
    payload: p,
    payloadIndex: h,
    className: Pe("recharts-tooltip-cursor", S)
  });
  return /* @__PURE__ */ P.createElement(zt, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : y
  }, /* @__PURE__ */ P.createElement(ZT, {
    cursor: s,
    cursorComp: v,
    cursorProps: C
  }));
}
function QT(e) {
  var t = bT(), r = bm(), n = Cn(), i = Jb();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ P.createElement(JT, su({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var n1 = /* @__PURE__ */ At(null), e6 = () => $t(n1), fc = { exports: {} }, jg;
function t6() {
  return jg || (jg = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(s, c, u) {
      this.fn = s, this.context = c, this.once = u || !1;
    }
    function o(s, c, u, f, p) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(u, f || s, p), g = r ? r + c : c;
      return s._events[g] ? s._events[g].fn ? s._events[g] = [s._events[g], h] : s._events[g].push(h) : (s._events[g] = h, s._eventsCount++), s;
    }
    function a(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function l() {
      this._events = new n(), this._eventsCount = 0;
    }
    l.prototype.eventNames = function() {
      var c = [], u, f;
      if (this._eventsCount === 0) return c;
      for (f in u = this._events)
        t.call(u, f) && c.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(u)) : c;
    }, l.prototype.listeners = function(c) {
      var u = r ? r + c : c, f = this._events[u];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var p = 0, h = f.length, g = new Array(h); p < h; p++)
        g[p] = f[p].fn;
      return g;
    }, l.prototype.listenerCount = function(c) {
      var u = r ? r + c : c, f = this._events[u];
      return f ? f.fn ? 1 : f.length : 0;
    }, l.prototype.emit = function(c, u, f, p, h, g) {
      var v = r ? r + c : c;
      if (!this._events[v]) return !1;
      var y = this._events[v], m = arguments.length, w, b;
      if (y.fn) {
        switch (y.once && this.removeListener(c, y.fn, void 0, !0), m) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, u), !0;
          case 3:
            return y.fn.call(y.context, u, f), !0;
          case 4:
            return y.fn.call(y.context, u, f, p), !0;
          case 5:
            return y.fn.call(y.context, u, f, p, h), !0;
          case 6:
            return y.fn.call(y.context, u, f, p, h, g), !0;
        }
        for (b = 1, w = new Array(m - 1); b < m; b++)
          w[b - 1] = arguments[b];
        y.fn.apply(y.context, w);
      } else {
        var x = y.length, j;
        for (b = 0; b < x; b++)
          switch (y[b].once && this.removeListener(c, y[b].fn, void 0, !0), m) {
            case 1:
              y[b].fn.call(y[b].context);
              break;
            case 2:
              y[b].fn.call(y[b].context, u);
              break;
            case 3:
              y[b].fn.call(y[b].context, u, f);
              break;
            case 4:
              y[b].fn.call(y[b].context, u, f, p);
              break;
            default:
              if (!w) for (j = 1, w = new Array(m - 1); j < m; j++)
                w[j - 1] = arguments[j];
              y[b].fn.apply(y[b].context, w);
          }
      }
      return !0;
    }, l.prototype.on = function(c, u, f) {
      return o(this, c, u, f, !1);
    }, l.prototype.once = function(c, u, f) {
      return o(this, c, u, f, !0);
    }, l.prototype.removeListener = function(c, u, f, p) {
      var h = r ? r + c : c;
      if (!this._events[h]) return this;
      if (!u)
        return a(this, h), this;
      var g = this._events[h];
      if (g.fn)
        g.fn === u && (!p || g.once) && (!f || g.context === f) && a(this, h);
      else {
        for (var v = 0, y = [], m = g.length; v < m; v++)
          (g[v].fn !== u || p && !g[v].once || f && g[v].context !== f) && y.push(g[v]);
        y.length ? this._events[h] = y.length === 1 ? y[0] : y : a(this, h);
      }
      return this;
    }, l.prototype.removeAllListeners = function(c) {
      var u;
      return c ? (u = r ? r + c : c, this._events[u] && a(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
  })(fc)), fc.exports;
}
var r6 = t6();
const n6 = /* @__PURE__ */ On(r6);
var Ui = new n6(), cu = "recharts.syncEvent.tooltip", Sg = "recharts.syncEvent.brush", i1 = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!Zt(r))
      return e[r];
  }
}, i6 = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, o1 = gt({
  name: "options",
  initialState: i6,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), o6 = o1.reducer, {
  createEventEmitter: a6
} = o1.actions;
function l6(e) {
  return e.tooltip.syncInteraction;
}
var s6 = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, a1 = gt({
  name: "chartData",
  initialState: s6,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: Og,
  setDataStartEndIndexes: c6,
  setComputedData: f$
} = a1.actions, u6 = a1.reducer, d6 = ["x", "y"];
function Pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), !0).forEach(function(n) {
      f6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f6(e, t, r) {
  return (t = p6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p6(e) {
  var t = h6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function h6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function v6(e, t) {
  if (e == null) return {};
  var r, n, i = g6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function g6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function y6() {
  var e = ae(Zu), t = ae(Ju), r = $e(), n = ae(nx), i = ae(Mr), o = Cn(), a = no(), l = ae((s) => s.rootProps.className);
  Se(() => {
    if (e == null)
      return Pn;
    var s = (c, u, f) => {
      if (t !== f && e === c) {
        if (u.payload.active === !1) {
          r(_i({
            active: !1,
            coordinate: void 0,
            dataKey: void 0,
            index: null,
            label: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0
          }));
          return;
        }
        if (n === "index") {
          var p;
          if (a && u !== null && u !== void 0 && (p = u.payload) !== null && p !== void 0 && p.coordinate && u.payload.sourceViewBox) {
            var h = u.payload.coordinate, {
              x: g,
              y: v
            } = h, y = v6(h, d6), {
              x: m,
              y: w,
              width: b,
              height: x
            } = u.payload.sourceViewBox, j = Nn(Nn({}, y), {}, {
              x: a.x + (b ? (g - m) / b : 0) * a.width,
              y: a.y + (x ? (v - w) / x : 0) * a.height
            });
            r(Nn(Nn({}, u), {}, {
              payload: Nn(Nn({}, u.payload), {}, {
                coordinate: j
              })
            }));
          } else
            r(u);
          return;
        }
        if (i != null) {
          var S;
          if (typeof n == "function") {
            var C = {
              activeTooltipIndex: u.payload.index == null ? void 0 : Number(u.payload.index),
              isTooltipActive: u.payload.active,
              activeIndex: u.payload.index == null ? void 0 : Number(u.payload.index),
              activeLabel: u.payload.label,
              activeDataKey: u.payload.dataKey,
              activeCoordinate: u.payload.coordinate
            }, _ = n(i, C);
            S = i[_];
          } else n === "value" && (S = i.find((q) => String(q.value) === u.payload.label));
          var {
            coordinate: E
          } = u.payload;
          if (E == null || a == null) {
            r(_i({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0
            }));
            return;
          }
          if (S == null) {
            r(_i({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: u.payload.sourceViewBox,
              graphicalItemId: void 0
            }));
            return;
          }
          var {
            x: T,
            y: D
          } = E, k = Math.min(T, a.x + a.width), W = Math.min(D, a.y + a.height), F = {
            x: o === "horizontal" ? S.coordinate : k,
            y: o === "horizontal" ? W : S.coordinate
          }, Z = _i({
            active: u.payload.active,
            coordinate: F,
            dataKey: u.payload.dataKey,
            index: String(S.index),
            label: u.payload.label,
            sourceViewBox: u.payload.sourceViewBox,
            graphicalItemId: u.payload.graphicalItemId
          });
          r(Z);
        }
      }
    };
    return Ui.on(cu, s), () => {
      Ui.off(cu, s);
    };
  }, [l, r, t, e, n, i, o, a]);
}
function m6() {
  var e = ae(Zu), t = ae(Ju), r = $e();
  Se(() => {
    if (e == null)
      return Pn;
    var n = (i, o, a) => {
      t !== a && e === i && r(c6(o));
    };
    return Ui.on(Sg, n), () => {
      Ui.off(Sg, n);
    };
  }, [r, t, e]);
}
function x6() {
  var e = $e();
  Se(() => {
    e(a6());
  }, [e]), y6(), m6();
}
function b6(e, t, r, n, i, o) {
  var a = ae((g) => _T(g, e, t)), l = ae(uT), s = ae(Ju), c = ae(Zu), u = ae(nx), f = ae(l6), p = f?.sourceViewBox != null, h = no();
  Se(() => {
    if (!p && c != null && s != null) {
      var g = _i({
        active: o,
        coordinate: r,
        dataKey: a,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: h,
        graphicalItemId: l
      });
      Ui.emit(cu, c, g, s);
    }
  }, [p, r, a, l, i, n, s, c, u, o, h]);
}
function Cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cg(Object(r), !0).forEach(function(n) {
      w6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function w6(e, t, r) {
  return (t = j6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j6(e) {
  var t = S6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function S6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O6(e) {
  return e.dataKey;
}
function P6(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(qC, t);
}
var _g = [], C6 = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  includeHidden: !1,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function Kd(e) {
  var t, r, n = jt(e, C6), {
    active: i,
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    content: s,
    filterNull: c,
    isAnimationActive: u,
    offset: f,
    payloadUniqBy: p,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    wrapperStyle: y,
    cursor: m,
    shared: w,
    trigger: b,
    defaultIndex: x,
    portal: j,
    axisId: S
  } = n, C = $e(), _ = typeof x == "number" ? String(x) : x;
  Se(() => {
    C(m3({
      shared: w,
      trigger: b,
      axisId: S,
      active: i,
      defaultIndex: _
    }));
  }, [C, w, b, S, i, _]);
  var E = no(), T = Im(), D = f3(w), {
    activeIndex: k,
    isActive: W
  } = (t = ae((de) => TT(de, D, b, _))) !== null && t !== void 0 ? t : {}, F = ae((de) => AT(de, D, b, _)), Z = ae((de) => t1(de, D, b, _)), q = ae((de) => ET(de, D, b, _)), ie = F, z = e6(), L = (r = i ?? W) !== null && r !== void 0 ? r : !1, [V, N] = XS([ie, L]), $ = D === "axis" ? Z : void 0;
  b6(D, b, q, $, k, L);
  var J = j ?? z;
  if (J == null || E == null || D == null)
    return null;
  var X = ie ?? _g;
  L || (X = _g), c && X.length && (X = mS(X.filter((de) => de.value != null && (de.hide !== !0 || n.includeHidden)), p, O6));
  var ee = X.length > 0, he = kg(kg({}, n), {}, {
    payload: X,
    label: $,
    active: L,
    activeIndex: k,
    coordinate: q,
    accessibilityLayer: T
  }), se = /* @__PURE__ */ P.createElement(nk, {
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    isAnimationActive: u,
    active: L,
    coordinate: q,
    hasPayload: ee,
    offset: f,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    viewBox: E,
    wrapperStyle: y,
    lastBoundingBox: V,
    innerRef: N,
    hasPortalFromProps: !!j
  }, P6(s, he));
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ W0(se, J), L && /* @__PURE__ */ P.createElement(QT, {
    cursor: m,
    tooltipEventType: D,
    coordinate: q,
    payload: X,
    index: k
  }));
}
var Hd = (e) => null;
Hd.displayName = "Cell";
function k6(e, t, r) {
  return (t = _6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _6(e) {
  var t = E6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function E6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class A6 {
  constructor(t) {
    k6(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
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
function Eg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function T6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eg(Object(r), !0).forEach(function(n) {
      I6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I6(e, t, r) {
  return (t = M6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M6(e) {
  var t = D6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function D6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var R6 = {
  cacheSize: 2e3,
  enableCache: !0
}, l1 = T6({}, R6), Ag = new A6(l1.cacheSize), N6 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Tg = "recharts_measurement_span";
function $6(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", o = t.fontStyle || "", a = t.letterSpacing || "", l = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(o, "|").concat(a, "|").concat(l);
}
var Ig = (e, t) => {
  try {
    var r = document.getElementById(Tg);
    r || (r = document.createElement("span"), r.setAttribute("id", Tg), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, N6, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Ii = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || lo.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!l1.enableCache)
    return Ig(t, r);
  var n = $6(t, r), i = Ag.get(n);
  if (i)
    return i;
  var o = Ig(t, r);
  return Ag.set(n, o), o;
}, s1;
function z6(e, t, r) {
  return (t = L6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L6(e) {
  var t = B6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Mg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Dg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, W6 = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, F6 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, V6 = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, K6 = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function H6(e) {
  return K6.includes(e);
}
var Bn = "NaN";
function q6(e, t) {
  return e * V6[t];
}
class lt {
  static parse(t) {
    var r, [, n, i] = (r = F6.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? lt.NaN : new lt(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Zt(t) && (this.unit = ""), r !== "" && !W6.test(r) && (this.num = NaN, this.unit = ""), H6(r) && (this.num = q6(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return Zt(this.num);
  }
}
s1 = lt;
z6(lt, "NaN", new s1(NaN, ""));
function c1(e) {
  if (e == null || e.includes(Bn))
    return Bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, o] = (r = Mg.exec(t)) !== null && r !== void 0 ? r : [], a = lt.parse(n ?? ""), l = lt.parse(o ?? ""), s = i === "*" ? a.multiply(l) : a.divide(l);
    if (s.isNaN())
      return Bn;
    t = t.replace(Mg, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, u, f, p] = (c = Dg.exec(t)) !== null && c !== void 0 ? c : [], h = lt.parse(u ?? ""), g = lt.parse(p ?? ""), v = f === "+" ? h.add(g) : h.subtract(g);
    if (v.isNaN())
      return Bn;
    t = t.replace(Dg, v.toString());
  }
  return t;
}
var Rg = /\(([^()]*)\)/;
function U6(e) {
  for (var t = e, r; (r = Rg.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Rg, c1(n));
  }
  return t;
}
function Y6(e) {
  var t = e.replace(/\s+/g, "");
  return t = U6(t), t = c1(t), t;
}
function G6(e) {
  try {
    return Y6(e);
  } catch {
    return Bn;
  }
}
function pc(e) {
  var t = G6(e.slice(5, -1));
  return t === Bn ? "" : t;
}
var X6 = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], Z6 = ["dx", "dy", "angle", "className", "breakAll"];
function uu() {
  return uu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uu.apply(null, arguments);
}
function Ng(e, t) {
  if (e == null) return {};
  var r, n, i = J6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function J6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var u1 = /[ \f\n\r\t\v\u2028\u2029]+/, d1 = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    Be(t) || (r ? i = t.toString().split("") : i = t.toString().split(u1));
    var o = i.map((l) => ({
      word: l,
      width: Ii(l, n).width
    })), a = r ? 0 : Ii(" ", n).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: a
    };
  } catch {
    return null;
  }
};
function f1(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function Q6(e) {
  return Be(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var p1 = (e, t, r, n) => e.reduce((i, o) => {
  var {
    word: a,
    width: l
  } = o, s = i[i.length - 1];
  if (s && l != null && (t == null || n || s.width + l + r < Number(t)))
    s.words.push(a), s.width += l + r;
  else {
    var c = {
      words: [a],
      width: l
    };
    i.push(c);
  }
  return i;
}, []), h1 = (e) => e.reduce((t, r) => t.width > r.width ? t : r), eI = "…", $g = (e, t, r, n, i, o, a, l) => {
  var s = e.slice(0, t), c = d1({
    breakAll: r,
    style: n,
    children: s + eI
  });
  if (!c)
    return [!1, []];
  var u = p1(c.wordsWithComputedWidth, o, a, l), f = u.length > i || h1(u).width > Number(o);
  return [f, u];
}, tI = (e, t, r, n, i) => {
  var {
    maxLines: o,
    children: a,
    style: l,
    breakAll: s
  } = e, c = ne(o), u = String(a), f = p1(t, n, r, i);
  if (!c || i)
    return f;
  var p = f.length > o || h1(f).width > Number(n);
  if (!p)
    return f;
  for (var h = 0, g = u.length - 1, v = 0, y; h <= g && v <= u.length - 1; ) {
    var m = Math.floor((h + g) / 2), w = m - 1, [b, x] = $g(u, w, s, l, o, n, r, i), [j] = $g(u, m, s, l, o, n, r, i);
    if (!b && !j && (h = m + 1), b && j && (g = m - 1), !b && j) {
      y = x;
      break;
    }
    v++;
  }
  return y || f;
}, zg = (e) => {
  var t = Be(e) ? [] : e.toString().split(u1);
  return [{
    words: t,
    width: void 0
  }];
}, rI = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: o,
    maxLines: a
  } = e;
  if ((t || r) && !lo.isSsr) {
    var l, s, c = d1({
      breakAll: o,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: u,
        spaceWidth: f
      } = c;
      l = u, s = f;
    } else
      return zg(n);
    return tI({
      breakAll: o,
      children: n,
      maxLines: a,
      style: i
    }, l, s, t, !!r);
  }
  return zg(n);
}, v1 = "#808080", nI = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: v1,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, qd = /* @__PURE__ */ ut((e, t) => {
  var r = jt(e, nI), {
    x: n,
    y: i,
    lineHeight: o,
    capHeight: a,
    fill: l,
    scaleToFit: s,
    textAnchor: c,
    verticalAnchor: u
  } = r, f = Ng(r, X6), p = er(() => rI({
    breakAll: f.breakAll,
    children: f.children,
    maxLines: f.maxLines,
    scaleToFit: s,
    style: f.style,
    width: f.width
  }), [f.breakAll, f.children, f.maxLines, s, f.style, f.width]), {
    dx: h,
    dy: g,
    angle: v,
    className: y,
    breakAll: m
  } = f, w = Ng(f, Z6);
  if (!qt(n) || !qt(i) || p.length === 0)
    return null;
  var b = Number(n) + (ne(h) ? h : 0), x = Number(i) + (ne(g) ? g : 0);
  if (!pe(b) || !pe(x))
    return null;
  var j;
  switch (u) {
    case "start":
      j = pc("calc(".concat(a, ")"));
      break;
    case "middle":
      j = pc("calc(".concat((p.length - 1) / 2, " * -").concat(o, " + (").concat(a, " / 2))"));
      break;
    default:
      j = pc("calc(".concat(p.length - 1, " * -").concat(o, ")"));
      break;
  }
  var S = [], C = p[0];
  if (s && C != null) {
    var _ = C.width, {
      width: E
    } = f;
    S.push("scale(".concat(ne(E) && ne(_) ? E / _ : 1, ")"));
  }
  return v && S.push("rotate(".concat(v, ", ").concat(b, ", ").concat(x, ")")), S.length && (w.transform = S.join(" ")), /* @__PURE__ */ P.createElement("text", uu({}, vt(w), {
    ref: t,
    x: b,
    y: x,
    className: Pe("recharts-text", y),
    textAnchor: c,
    fill: l.includes("url") ? v1 : l
  }), p.map((T, D) => {
    var k = T.words.join(m ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ P.createElement("tspan", {
        x: b,
        dy: D === 0 ? j : o,
        key: "".concat(k, "-").concat(D)
      }, k)
    );
  }));
});
qd.displayName = "Text";
function Lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lg(Object(r), !0).forEach(function(n) {
      iI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iI(e, t, r) {
  return (t = oI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oI(e) {
  var t = aI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lI = (e) => {
  var {
    viewBox: t,
    position: r,
    offset: n = 0,
    parentViewBox: i
  } = e, {
    x: o,
    y: a,
    height: l,
    upperWidth: s,
    lowerWidth: c
  } = Fu(t), u = o, f = o + (s - c) / 2, p = (u + f) / 2, h = (s + c) / 2, g = u + s / 2, v = l >= 0 ? 1 : -1, y = v * n, m = v > 0 ? "end" : "start", w = v > 0 ? "start" : "end", b = s >= 0 ? 1 : -1, x = b * n, j = b > 0 ? "end" : "start", S = b > 0 ? "start" : "end", C = i;
  if (r === "top") {
    var _ = {
      x: u + s / 2,
      y: a - y,
      horizontalAnchor: "middle",
      verticalAnchor: m
    };
    return C && (_.height = Math.max(a - C.y, 0), _.width = s), _;
  }
  if (r === "bottom") {
    var E = {
      x: f + c / 2,
      y: a + l + y,
      horizontalAnchor: "middle",
      verticalAnchor: w
    };
    return C && (E.height = Math.max(C.y + C.height - (a + l), 0), E.width = c), E;
  }
  if (r === "left") {
    var T = {
      x: p - x,
      y: a + l / 2,
      horizontalAnchor: j,
      verticalAnchor: "middle"
    };
    return C && (T.width = Math.max(T.x - C.x, 0), T.height = l), T;
  }
  if (r === "right") {
    var D = {
      x: p + h + x,
      y: a + l / 2,
      horizontalAnchor: S,
      verticalAnchor: "middle"
    };
    return C && (D.width = Math.max(C.x + C.width - D.x, 0), D.height = l), D;
  }
  var k = C ? {
    width: h,
    height: l
  } : {};
  return r === "insideLeft" ? ar({
    x: p + x,
    y: a + l / 2,
    horizontalAnchor: S,
    verticalAnchor: "middle"
  }, k) : r === "insideRight" ? ar({
    x: p + h - x,
    y: a + l / 2,
    horizontalAnchor: j,
    verticalAnchor: "middle"
  }, k) : r === "insideTop" ? ar({
    x: u + s / 2,
    y: a + y,
    horizontalAnchor: "middle",
    verticalAnchor: w
  }, k) : r === "insideBottom" ? ar({
    x: f + c / 2,
    y: a + l - y,
    horizontalAnchor: "middle",
    verticalAnchor: m
  }, k) : r === "insideTopLeft" ? ar({
    x: u + x,
    y: a + y,
    horizontalAnchor: S,
    verticalAnchor: w
  }, k) : r === "insideTopRight" ? ar({
    x: u + s - x,
    y: a + y,
    horizontalAnchor: j,
    verticalAnchor: w
  }, k) : r === "insideBottomLeft" ? ar({
    x: f + x,
    y: a + l - y,
    horizontalAnchor: S,
    verticalAnchor: m
  }, k) : r === "insideBottomRight" ? ar({
    x: f + c - x,
    y: a + l - y,
    horizontalAnchor: j,
    verticalAnchor: m
  }, k) : r && typeof r == "object" && (ne(r.x) || gn(r.x)) && (ne(r.y) || gn(r.y)) ? ar({
    x: o + Jt(r.x, h),
    y: a + Jt(r.y, l),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, k) : ar({
    x: g,
    y: a + l / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, k);
}, sI = ["labelRef"], cI = ["content"];
function Bg(e, t) {
  if (e == null) return {};
  var r, n, i = uI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function uI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Wg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wg(Object(r), !0).forEach(function(n) {
      dI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dI(e, t, r) {
  return (t = fI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fI(e) {
  var t = pI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wr.apply(null, arguments);
}
var g1 = /* @__PURE__ */ At(null), y1 = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a,
    children: l
  } = e, s = er(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a
  }), [t, r, n, i, o, a]);
  return /* @__PURE__ */ P.createElement(g1.Provider, {
    value: s
  }, l);
}, m1 = () => {
  var e = $t(g1), t = no();
  return e || (t ? Fu(t) : void 0);
}, hI = /* @__PURE__ */ At(null), vI = () => {
  var e = $t(hI), t = ae(sx);
  return e || t;
}, gI = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Be(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, Ud = (e) => e != null && typeof e == "function", yI = (e, t) => {
  var r = Ct(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, mI = (e, t, r, n, i) => {
  var {
    offset: o,
    className: a
  } = e, {
    cx: l,
    cy: s,
    innerRadius: c,
    outerRadius: u,
    startAngle: f,
    endAngle: p,
    clockWise: h
  } = i, g = (c + u) / 2, v = yI(f, p), y = v >= 0 ? 1 : -1, m, w;
  switch (t) {
    case "insideStart":
      m = f + y * o, w = h;
      break;
    case "insideEnd":
      m = p - y * o, w = !h;
      break;
    case "end":
      m = p + y * o, w = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = v <= 0 ? w : !w;
  var b = st(l, s, g, m), x = st(l, s, g, m + (w ? 1 : -1) * 359), j = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), S = Be(e.id) ? Di("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ P.createElement("text", wr({}, n, {
    dominantBaseline: "central",
    className: Pe("recharts-radial-bar-label", a)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: S,
    d: j
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, xI = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: o,
    outerRadius: a,
    startAngle: l,
    endAngle: s
  } = e, c = (l + s) / 2;
  if (r === "outside") {
    var {
      x: u,
      y: f
    } = st(n, i, a + t, c);
    return {
      x: u,
      y: f,
      textAnchor: u >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (o + a) / 2, {
    x: h,
    y: g
  } = st(n, i, p, c);
  return {
    x: h,
    y: g,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Zo = (e) => e != null && "cx" in e && ne(e.cx), bI = {
  angle: 0,
  offset: 5,
  zIndex: Je.label,
  position: "middle",
  textBreakAll: !1
};
function wI(e) {
  if (!Zo(e))
    return e;
  var {
    cx: t,
    cy: r,
    outerRadius: n
  } = e, i = n * 2;
  return {
    x: t - n,
    y: r - n,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i
  };
}
function Lr(e) {
  var t = jt(e, bI), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: o,
    children: a,
    content: l,
    className: s = "",
    textBreakAll: c,
    labelRef: u
  } = t, f = vI(), p = m1(), h = i === "center" ? p : f ?? p, g, v, y;
  r == null ? g = h : Zo(r) ? g = r : g = Fu(r);
  var m = wI(g);
  if (!g || Be(o) && Be(a) && !/* @__PURE__ */ Dt(l) && typeof l != "function")
    return null;
  var w = Ei(Ei({}, t), {}, {
    viewBox: g
  });
  if (/* @__PURE__ */ Dt(l)) {
    var {
      labelRef: b
    } = w, x = Bg(w, sI);
    return /* @__PURE__ */ ri(l, x);
  }
  if (typeof l == "function") {
    var {
      content: j
    } = w, S = Bg(w, cI);
    if (v = /* @__PURE__ */ L0(l, S), /* @__PURE__ */ Dt(v))
      return v;
  } else
    v = gI(t);
  var C = vt(t);
  if (Zo(g)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return mI(t, i, v, C, g);
    y = xI(g, t.offset, t.position);
  } else {
    if (!m)
      return null;
    var _ = lI({
      viewBox: m,
      position: i,
      offset: t.offset,
      parentViewBox: Zo(n) ? void 0 : n
    });
    y = Ei(Ei({
      x: _.x,
      y: _.y,
      textAnchor: _.horizontalAnchor,
      verticalAnchor: _.verticalAnchor
    }, _.width !== void 0 ? {
      width: _.width
    } : {}), _.height !== void 0 ? {
      height: _.height
    } : {});
  }
  return /* @__PURE__ */ P.createElement(zt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(qd, wr({
    ref: u,
    className: Pe("recharts-label", s)
  }, C, y, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: f1(C.textAnchor) ? C.textAnchor : y.textAnchor,
    breakAll: c
  }), v));
}
Lr.displayName = "Label";
var jI = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ P.createElement(Lr, wr({
    key: "label-implicit"
  }, n)) : qt(e) ? /* @__PURE__ */ P.createElement(Lr, wr({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Dt(e) ? e.type === Lr ? /* @__PURE__ */ ri(e, Ei({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ P.createElement(Lr, wr({
    key: "label-implicit",
    content: e
  }, n)) : Ud(e) ? /* @__PURE__ */ P.createElement(Lr, wr({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ P.createElement(Lr, wr({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function x1(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = m1();
  return jI(t, n, r) || null;
}
var SI = ["valueAccessor"], OI = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ba.apply(null, arguments);
}
function Fg(e, t) {
  if (e == null) return {};
  var r, n, i = PI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var CI = (e) => {
  var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
  if (Q6(t))
    return t;
}, b1 = /* @__PURE__ */ At(void 0), w1 = b1.Provider, j1 = /* @__PURE__ */ At(void 0);
j1.Provider;
function kI() {
  return $t(b1);
}
function _I() {
  return $t(j1);
}
function Hn(e) {
  var {
    valueAccessor: t = CI
  } = e, r = Fg(e, SI), {
    dataKey: n,
    clockWise: i,
    id: o,
    textBreakAll: a,
    zIndex: l
  } = r, s = Fg(r, OI), c = kI(), u = _I(), f = c || u;
  return !f || !f.length ? null : /* @__PURE__ */ P.createElement(zt, {
    zIndex: l ?? Je.label
  }, /* @__PURE__ */ P.createElement(ct, {
    className: "recharts-label-list"
  }, f.map((p, h) => {
    var g, v = Be(n) ? t(p, h) : qe(p.payload, n), y = Be(o) ? {} : {
      id: "".concat(o, "-").concat(h)
    };
    return /* @__PURE__ */ P.createElement(Lr, Ba({
      key: "label-".concat(h)
    }, vt(p), s, y, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (g = r.fill) !== null && g !== void 0 ? g : p.fill,
      parentViewBox: p.parentViewBox,
      value: v,
      textBreakAll: a,
      viewBox: p.viewBox,
      index: h,
      zIndex: 0
    }));
  })));
}
Hn.displayName = "LabelList";
function S1(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(Hn, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ P.isValidElement(t) || Ud(t) ? /* @__PURE__ */ P.createElement(Hn, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ P.createElement(Hn, Ba({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function du() {
  return du = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, du.apply(null, arguments);
}
var O1 = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, o = Pe("recharts-dot", i);
  return ne(t) && ne(r) && ne(n) ? /* @__PURE__ */ P.createElement("circle", du({}, Ht(e), Eu(e), {
    className: o,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, EI = {
  radiusAxis: {},
  angleAxis: {}
}, P1 = gt({
  name: "polarAxis",
  initialState: EI,
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
    }
  }
}), {
  addRadiusAxis: p$,
  removeRadiusAxis: h$,
  addAngleAxis: v$,
  removeAngleAxis: g$
} = P1.actions, AI = P1.reducer;
function TI(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var Vo = { exports: {} }, ke = {};
var Vg;
function II() {
  if (Vg) return ke;
  Vg = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function g(v) {
    if (typeof v == "object" && v !== null) {
      var y = v.$$typeof;
      switch (y) {
        case e:
          switch (v = v.type, v) {
            case r:
            case i:
            case n:
            case s:
            case c:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case l:
                case f:
                case u:
                  return v;
                case o:
                  return v;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return ke.ContextConsumer = o, ke.ContextProvider = a, ke.Element = e, ke.ForwardRef = l, ke.Fragment = r, ke.Lazy = f, ke.Memo = u, ke.Portal = t, ke.Profiler = i, ke.StrictMode = n, ke.Suspense = s, ke.SuspenseList = c, ke.isContextConsumer = function(v) {
    return g(v) === o;
  }, ke.isContextProvider = function(v) {
    return g(v) === a;
  }, ke.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ke.isForwardRef = function(v) {
    return g(v) === l;
  }, ke.isFragment = function(v) {
    return g(v) === r;
  }, ke.isLazy = function(v) {
    return g(v) === f;
  }, ke.isMemo = function(v) {
    return g(v) === u;
  }, ke.isPortal = function(v) {
    return g(v) === t;
  }, ke.isProfiler = function(v) {
    return g(v) === i;
  }, ke.isStrictMode = function(v) {
    return g(v) === n;
  }, ke.isSuspense = function(v) {
    return g(v) === s;
  }, ke.isSuspenseList = function(v) {
    return g(v) === c;
  }, ke.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === i || v === n || v === s || v === c || typeof v == "object" && v !== null && (v.$$typeof === f || v.$$typeof === u || v.$$typeof === a || v.$$typeof === o || v.$$typeof === l || v.$$typeof === h || v.getModuleId !== void 0);
  }, ke.typeOf = g, ke;
}
var _e = {};
var Kg;
function MI() {
  return Kg || (Kg = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v) {
      if (typeof v == "object" && v !== null) {
        var y = v.$$typeof;
        switch (y) {
          case t:
            switch (v = v.type, v) {
              case n:
              case o:
              case i:
              case c:
              case u:
              case h:
                return v;
              default:
                switch (v = v && v.$$typeof, v) {
                  case l:
                  case s:
                  case p:
                  case f:
                    return v;
                  case a:
                    return v;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    _e.ContextConsumer = a, _e.ContextProvider = l, _e.Element = t, _e.ForwardRef = s, _e.Fragment = n, _e.Lazy = p, _e.Memo = f, _e.Portal = r, _e.Profiler = o, _e.StrictMode = i, _e.Suspense = c, _e.SuspenseList = u, _e.isContextConsumer = function(v) {
      return e(v) === a;
    }, _e.isContextProvider = function(v) {
      return e(v) === l;
    }, _e.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }, _e.isForwardRef = function(v) {
      return e(v) === s;
    }, _e.isFragment = function(v) {
      return e(v) === n;
    }, _e.isLazy = function(v) {
      return e(v) === p;
    }, _e.isMemo = function(v) {
      return e(v) === f;
    }, _e.isPortal = function(v) {
      return e(v) === r;
    }, _e.isProfiler = function(v) {
      return e(v) === o;
    }, _e.isStrictMode = function(v) {
      return e(v) === i;
    }, _e.isSuspense = function(v) {
      return e(v) === c;
    }, _e.isSuspenseList = function(v) {
      return e(v) === u;
    }, _e.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === n || v === o || v === i || v === c || v === u || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === l || v.$$typeof === a || v.$$typeof === s || v.$$typeof === g || v.getModuleId !== void 0);
    }, _e.typeOf = e;
  })()), _e;
}
var Hg;
function DI() {
  return Hg || (Hg = 1, process.env.NODE_ENV === "production" ? Vo.exports = /* @__PURE__ */ II() : Vo.exports = /* @__PURE__ */ MI()), Vo.exports;
}
var RI = /* @__PURE__ */ DI(), qg = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Ug = null, hc = null, C1 = (e) => {
  if (e === Ug && Array.isArray(hc))
    return hc;
  var t = [];
  return s2.forEach(e, (r) => {
    Be(r) || (RI.isFragment(r) ? t = t.concat(C1(r.props.children)) : t.push(r));
  }), hc = t, Ug = e, t;
};
function NI(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => qg(i)) : n = [qg(t)], C1(e).forEach((i) => {
    var o = qn(i, "type.displayName") || qn(i, "type.name");
    o && n.indexOf(o) !== -1 && r.push(i);
  }), r;
}
var k1 = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, vc = {}, Yg;
function $I() {
  return Yg || (Yg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(vc)), vc;
}
var gc, Gg;
function zI() {
  return Gg || (Gg = 1, gc = $I().isPlainObject), gc;
}
var LI = /* @__PURE__ */ zI();
const BI = /* @__PURE__ */ On(LI);
var Xg, Zg, Jg, Qg, e0;
function t0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function r0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? t0(Object(r), !0).forEach(function(n) {
      WI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WI(e, t, r) {
  return (t = FI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FI(e) {
  var t = VI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wa.apply(null, arguments);
}
function Oi(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var n0 = (e, t, r, n, i) => {
  var o = r - n, a;
  return a = Ve(Xg || (Xg = Oi(["M ", ",", ""])), e, t), a += Ve(Zg || (Zg = Oi(["L ", ",", ""])), e + r, t), a += Ve(Jg || (Jg = Oi(["L ", ",", ""])), e + r - o / 2, t + i), a += Ve(Qg || (Qg = Oi(["L ", ",", ""])), e + r - o / 2 - n, t + i), a += Ve(e0 || (e0 = Oi(["L ", ",", " Z"])), e, t), a;
}, KI = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, HI = (e) => {
  var t = jt(e, KI), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: o,
    height: a,
    className: l
  } = t, {
    animationEasing: s,
    animationDuration: c,
    animationBegin: u,
    isUpdateAnimationActive: f
  } = t, p = ge(null), [h, g] = B(-1), v = ge(i), y = ge(o), m = ge(a), w = ge(r), b = ge(n), x = yl(e, "trapezoid-");
  if (Se(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var F = p.current.getTotalLength();
        F && g(F);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || o !== +o || a !== +a || i === 0 && o === 0 || a === 0)
    return null;
  var j = Pe("recharts-trapezoid", l);
  if (!f)
    return /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", Wa({}, vt(t), {
      className: j,
      d: n0(r, n, i, o, a)
    })));
  var S = v.current, C = y.current, _ = m.current, E = w.current, T = b.current, D = "0px ".concat(h === -1 ? 1 : h, "px"), k = "".concat(h, "px ").concat(h, "px"), W = Mm(["strokeDasharray"], c, s);
  return /* @__PURE__ */ P.createElement(gl, {
    animationId: x,
    key: x,
    canBegin: h > 0,
    duration: c,
    easing: s,
    isActive: f,
    begin: u
  }, (F) => {
    var Z = ze(S, i, F), q = ze(C, o, F), ie = ze(_, a, F), z = ze(E, r, F), L = ze(T, n, F);
    p.current && (v.current = Z, y.current = q, m.current = ie, w.current = z, b.current = L);
    var V = F > 0 ? {
      transition: W,
      strokeDasharray: k
    } : {
      strokeDasharray: D
    };
    return /* @__PURE__ */ P.createElement("path", Wa({}, vt(t), {
      className: j,
      d: n0(z, L, Z, q, ie),
      ref: p,
      style: r0(r0({}, V), t.style)
    }));
  });
}, qI = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function UI(e, t) {
  if (e == null) return {};
  var r, n, i = YI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function YI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function i0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i0(Object(r), !0).forEach(function(n) {
      GI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GI(e, t, r) {
  return (t = XI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XI(e) {
  var t = ZI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function JI(e, t) {
  return Fa(Fa({}, t), e);
}
function QI(e, t) {
  return e === "symbols";
}
function o0(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement($m, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(HI, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(Bm, r);
    case "symbols":
      if (QI(t))
        return /* @__PURE__ */ P.createElement(yy, r);
      break;
    case "curve":
      return /* @__PURE__ */ P.createElement(Ai, r);
    default:
      return null;
  }
}
function eM(e) {
  return /* @__PURE__ */ Dt(e) ? e.props : e;
}
function tM(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape",
    inActiveClassName: i = "recharts-shape"
  } = e, o = UI(e, qI), a;
  if (/* @__PURE__ */ Dt(t))
    a = /* @__PURE__ */ ri(t, Fa(Fa({}, o), eM(t)));
  else if (typeof t == "function")
    a = t(o, o.index);
  else if (BI(t) && typeof t != "boolean") {
    var l = JI(t, o);
    a = /* @__PURE__ */ P.createElement(o0, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var s = o;
    a = /* @__PURE__ */ P.createElement(o0, {
      shapeType: r,
      elementProps: s
    });
  }
  return o.isActive ? /* @__PURE__ */ P.createElement(ct, {
    className: n
  }, a) : /* @__PURE__ */ P.createElement(ct, {
    className: i
  }, a);
}
var _1 = (e, t, r) => {
  var n = $e();
  return (i, o) => (a) => {
    e?.(i, o, a), n(Mb({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, E1 = (e) => {
  var t = $e();
  return (r, n) => (i) => {
    e?.(r, n, i), t(x3());
  };
}, A1 = (e, t, r) => {
  var n = $e();
  return (i, o) => (a) => {
    e?.(i, o, a), n(b3({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function T1(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = $e(), n = dt(), i = ge(null);
  return Et(() => {
    n || (i.current === null ? r(v3(t)) : i.current !== t && r(g3({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), Et(() => () => {
    i.current && (r(y3(i.current)), i.current = null);
  }, [r]), null;
}
function I1(e) {
  var {
    legendPayload: t
  } = e, r = $e(), n = dt(), i = ge(null);
  return Et(() => {
    n || (i.current === null ? r(gC(t)) : i.current !== t && r(yC({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), Et(() => () => {
    i.current && (r(mC(i.current)), i.current = null);
  }, [r]), null;
}
var yc, rM = () => {
  var [e] = P.useState(() => Di("uid-"));
  return e;
}, nM = (yc = P.useId) !== null && yc !== void 0 ? yc : rM;
function iM(e, t) {
  var r = nM();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var oM = /* @__PURE__ */ At(void 0), M1 = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = iM("recharts-".concat(r), t);
  return /* @__PURE__ */ P.createElement(oM.Provider, {
    value: i
  }, n(i));
}, aM = {
  cartesianItems: [],
  polarItems: []
}, D1 = gt({
  name: "graphicalItems",
  initialState: aM,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: De()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Vt(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: De()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Vt(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: De()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: De()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = Vt(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: De()
    },
    replacePolarGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Vt(e).polarItems.indexOf(r);
        i > -1 && (e.polarItems[i] = n);
      },
      prepare: De()
    }
  }
}), {
  addCartesianGraphicalItem: lM,
  replaceCartesianGraphicalItem: sM,
  removeCartesianGraphicalItem: cM,
  addPolarGraphicalItem: y$,
  removePolarGraphicalItem: m$,
  replacePolarGraphicalItem: x$
} = D1.actions, uM = D1.reducer, dM = (e) => {
  var t = $e(), r = ge(null);
  return Et(() => {
    r.current === null ? t(lM(e)) : r.current !== e && t(sM({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), Et(() => () => {
    r.current && (t(cM(r.current)), r.current = null);
  }, [t]), null;
}, R1 = /* @__PURE__ */ wu(dM), fM = ["points"];
function a0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a0(Object(r), !0).forEach(function(n) {
      pM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pM(e, t, r) {
  return (t = hM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hM(e) {
  var t = vM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Va.apply(null, arguments);
}
function gM(e, t) {
  if (e == null) return {};
  var r, n, i = yM(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function yM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function mM(e) {
  var {
    option: t,
    dotProps: r,
    className: n
  } = e;
  if (/* @__PURE__ */ Dt(t))
    return /* @__PURE__ */ ri(t, r);
  if (typeof t == "function")
    return t(r);
  var i = Pe(n, typeof t != "boolean" ? t.className : ""), o = r ?? {}, {
    points: a
  } = o, l = gM(o, fM);
  return /* @__PURE__ */ P.createElement(O1, Va({}, l, {
    className: i
  }));
}
function xM(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function bM(e) {
  var {
    points: t,
    dot: r,
    className: n,
    dotClassName: i,
    dataKey: o,
    baseProps: a,
    needClip: l,
    clipPathId: s,
    zIndex: c = Je.scatter
  } = e;
  if (!xM(t, r))
    return null;
  var u = k1(r), f = K2(r), p = t.map((g, v) => {
    var y, m, w = mc(mc(mc({
      r: 3
    }, a), f), {}, {
      index: v,
      cx: (y = g.x) !== null && y !== void 0 ? y : void 0,
      cy: (m = g.y) !== null && m !== void 0 ? m : void 0,
      dataKey: o,
      value: g.value,
      payload: g.payload,
      points: t
    });
    return /* @__PURE__ */ P.createElement(mM, {
      key: "dot-".concat(v),
      option: r,
      dotProps: w,
      className: i
    });
  }), h = {};
  return l && s != null && (h.clipPath = "url(#clipPath-".concat(u ? "" : "dots-").concat(s, ")")), /* @__PURE__ */ P.createElement(zt, {
    zIndex: c
  }, /* @__PURE__ */ P.createElement(ct, Va({
    className: n
  }, h), p));
}
function l0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function s0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? l0(Object(r), !0).forEach(function(n) {
      wM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wM(e, t, r) {
  return (t = jM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jM(e) {
  var t = SM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var N1 = 0, OM = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, $1 = gt({
  name: "cartesianAxis",
  initialState: OM,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: De()
    },
    replaceXAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e.xAxis[r.id], e.xAxis[n.id] = n);
      },
      prepare: De()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: De()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: De()
    },
    replaceYAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e.yAxis[r.id], e.yAxis[n.id] = n);
      },
      prepare: De()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: De()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: De()
    },
    replaceZAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e.zAxis[r.id], e.zAxis[n.id] = n);
      },
      prepare: De()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: De()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, i = e.yAxis[r];
      if (i) {
        var o, a = i.widthHistory || [];
        if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - ((o = a[0]) !== null && o !== void 0 ? o : 0)) <= 1)
          return;
        var l = [...a, n].slice(-3);
        e.yAxis[r] = s0(s0({}, i), {}, {
          width: n,
          widthHistory: l
        });
      }
    }
  }
}), {
  addXAxis: PM,
  replaceXAxis: CM,
  removeXAxis: kM,
  addYAxis: _M,
  replaceYAxis: EM,
  removeYAxis: AM,
  addZAxis: b$,
  replaceZAxis: w$,
  removeZAxis: j$,
  updateYAxisWidth: TM
} = $1.actions, IM = $1.reducer, MM = R([rt], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), DM = R([MM, Ar, Tr], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), Yd = () => ae(DM), RM = () => ae(vT);
function c0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? c0(Object(r), !0).forEach(function(n) {
      NM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NM(e, t, r) {
  return (t = $M(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $M(e) {
  var t = zM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var LM = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: i,
    dataKey: o,
    clipPath: a
  } = e;
  if (i === !1 || t.x == null || t.y == null)
    return null;
  var l = {
    index: r,
    dataKey: o,
    cx: t.x,
    cy: t.y,
    r: 4,
    fill: n ?? "none",
    strokeWidth: 2,
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, s = xc(xc(xc({}, l), Xi(i)), Eu(i)), c;
  return /* @__PURE__ */ Dt(i) ? c = /* @__PURE__ */ ri(i, s) : typeof i == "function" ? c = i(s) : c = /* @__PURE__ */ P.createElement(O1, s), /* @__PURE__ */ P.createElement(ct, {
    className: "recharts-active-dot",
    clipPath: a
  }, c);
};
function u0(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i,
    clipPath: o,
    zIndex: a = Je.activeDot
  } = e, l = ae(jn), s = RM();
  if (t == null || s == null)
    return null;
  var c = t.find((u) => s.includes(u.payload));
  return Be(c) ? null : /* @__PURE__ */ P.createElement(zt, {
    zIndex: a
  }, /* @__PURE__ */ P.createElement(LM, {
    point: c,
    childIndex: Number(l),
    mainColor: r,
    dataKey: i,
    activeDot: n,
    clipPath: o
  }));
}
var d0 = (e, t, r) => {
  var n = r ?? e;
  if (!Be(n))
    return Jt(n, t, 0);
}, BM = (e, t, r) => {
  var n = {}, i = e.filter(Pl), o = e.filter((c) => c.stackId == null), a = i.reduce((c, u) => {
    var f = c[u.stackId];
    return f == null && (f = []), f.push(u), c[u.stackId] = f, c;
  }, n), l = Object.entries(a).map((c) => {
    var u, [f, p] = c, h = p.map((v) => v.dataKey), g = d0(t, r, (u = p[0]) === null || u === void 0 ? void 0 : u.barSize);
    return {
      stackId: f,
      dataKeys: h,
      barSize: g
    };
  }), s = o.map((c) => {
    var u = [c.dataKey].filter((p) => p != null), f = d0(t, r, c.barSize);
    return {
      stackId: void 0,
      dataKeys: u,
      barSize: f
    };
  });
  return [...l, ...s];
};
function f0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? f0(Object(r), !0).forEach(function(n) {
      WM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WM(e, t, r) {
  return (t = FM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FM(e) {
  var t = VM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function KM(e, t, r, n, i) {
  var o, a = n.length;
  if (!(a < 1)) {
    var l = Jt(e, r, 0, !0), s, c = [];
    if (pe((o = n[0]) === null || o === void 0 ? void 0 : o.barSize)) {
      var u = !1, f = r / a, p = n.reduce((w, b) => w + (b.barSize || 0), 0);
      p += (a - 1) * l, p >= r && (p -= (a - 1) * l, l = 0), p >= r && f > 0 && (u = !0, f *= 0.9, p = a * f);
      var h = (r - p) / 2 >> 0, g = {
        offset: h - l,
        size: 0
      };
      s = n.reduce((w, b) => {
        var x, j = {
          stackId: b.stackId,
          dataKeys: b.dataKeys,
          position: {
            offset: g.offset + g.size + l,
            size: u ? f : (x = b.barSize) !== null && x !== void 0 ? x : 0
          }
        }, S = [...w, j];
        return g = j.position, S;
      }, c);
    } else {
      var v = Jt(t, r, 0, !0);
      r - 2 * v - (a - 1) * l <= 0 && (l = 0);
      var y = (r - 2 * v - (a - 1) * l) / a;
      y > 1 && (y >>= 0);
      var m = pe(i) ? Math.min(y, i) : y;
      s = n.reduce((w, b, x) => [...w, {
        stackId: b.stackId,
        dataKeys: b.dataKeys,
        position: {
          offset: v + (y + l) * x + (y - m) / 2,
          size: m
        }
      }], c);
    }
    return s;
  }
}
var HM = (e, t, r, n, i, o, a) => {
  var l = Be(a) ? t : a, s = KM(r, n, i !== o ? i : o, e, l);
  return i !== o && s != null && (s = s.map((c) => Ko(Ko({}, c), {}, {
    position: Ko(Ko({}, c.position), {}, {
      offset: c.position.offset - i / 2
    })
  }))), s;
}, qM = (e, t) => {
  var r = Ol(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var i = e[n];
      if (i) {
        var {
          stackedData: o
        } = i;
        if (o)
          return o.find((a) => a.key === r);
      }
    }
  }
}, UM = (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
};
function YM(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && pe(e.zIndex) ? e.zIndex : t;
}
var GM = (e) => {
  var {
    chartData: t
  } = e, r = $e(), n = dt();
  return Se(() => n ? () => {
  } : (r(Og(t)), () => {
    r(Og(void 0));
  }), [t, r, n]), null;
}, p0 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, z1 = gt({
  name: "brush",
  initialState: p0,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? p0 : t.payload;
    }
  }
}), {
  setBrushSettings: S$
} = z1.actions, XM = z1.reducer, ZM = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: o
  } = t;
  return {
    x: Math.min(r, i),
    y: Math.min(n, o),
    width: Math.abs(i - r),
    height: Math.abs(o - n)
  };
}, JM = (e) => {
  var {
    x1: t,
    y1: r,
    x2: n,
    y2: i
  } = e;
  return ZM({
    x: t,
    y: r
  }, {
    x: n,
    y: i
  });
};
function QM(e) {
  return (e % 180 + 180) % 180;
}
var e5 = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = QM(i), a = o * Math.PI / 180, l = Math.atan(n / r), s = a > l && a < Math.PI - l ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(s);
}, t5 = {
  dots: [],
  areas: [],
  lines: []
}, L1 = gt({
  name: "referenceElements",
  initialState: t5,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Vt(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Vt(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Vt(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: O$,
  removeDot: P$,
  addArea: C$,
  removeArea: k$,
  addLine: r5,
  removeLine: n5
} = L1.actions, i5 = L1.reducer, B1 = /* @__PURE__ */ At(void 0), o5 = (e) => {
  var {
    children: t
  } = e, [r] = B("".concat(Di("recharts"), "-clip")), n = Yd();
  if (n == null)
    return null;
  var {
    x: i,
    y: o,
    width: a,
    height: l
  } = n;
  return /* @__PURE__ */ P.createElement(B1.Provider, {
    value: r
  }, /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: o,
    height: l,
    width: a
  }))), t);
}, a5 = () => $t(B1);
class l5 {
  constructor(t) {
    var {
      x: r,
      y: n
    } = t;
    this.xAxisScale = r, this.yAxisScale = n;
  }
  map(t, r) {
    var n, i, {
      position: o
    } = r;
    return {
      x: (n = this.xAxisScale.map(t.x, {
        position: o
      })) !== null && n !== void 0 ? n : 0,
      y: (i = this.yAxisScale.map(t.y, {
        position: o
      })) !== null && i !== void 0 ? i : 0
    };
  }
  mapWithFallback(t, r) {
    var n, i, {
      position: o,
      fallback: a
    } = r, l, s;
    return a === "rangeMin" ? l = this.yAxisScale.rangeMin() : a === "rangeMax" ? l = this.yAxisScale.rangeMax() : l = 0, a === "rangeMin" ? s = this.xAxisScale.rangeMin() : a === "rangeMax" ? s = this.xAxisScale.rangeMax() : s = 0, {
      x: (n = this.xAxisScale.map(t.x, {
        position: o
      })) !== null && n !== void 0 ? n : s,
      y: (i = this.yAxisScale.map(t.y, {
        position: o
      })) !== null && i !== void 0 ? i : l
    };
  }
  isInRange(t) {
    var {
      x: r,
      y: n
    } = t, i = r == null || this.xAxisScale.isInRange(r), o = n == null || this.yAxisScale.isInRange(n);
    return i && o;
  }
}
function h0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function v0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? h0(Object(r), !0).forEach(function(n) {
      s5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s5(e, t, r) {
  return (t = c5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c5(e) {
  var t = u5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function u5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ka() {
  return Ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ka.apply(null, arguments);
}
var d5 = (e, t) => {
  var r;
  if (/* @__PURE__ */ P.isValidElement(e))
    r = /* @__PURE__ */ P.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    if (!pe(t.x1) || !pe(t.y1) || !pe(t.x2) || !pe(t.y2))
      return null;
    r = /* @__PURE__ */ P.createElement("line", Ka({}, t, {
      className: "recharts-reference-line-line"
    }));
  }
  return r;
}, f5 = (e, t, r, n, i, o) => {
  var {
    x: a,
    width: l
  } = o, s = i.map(e, {
    position: r
  });
  if (!pe(s) || t === "discard" && !i.isInRange(s))
    return null;
  var c = [{
    x: a + l,
    y: s
  }, {
    x: a,
    y: s
  }];
  return n === "left" ? c.reverse() : c;
}, p5 = (e, t, r, n, i, o) => {
  var {
    y: a,
    height: l
  } = o, s = i.map(e, {
    position: r
  });
  if (!pe(s) || t === "discard" && !i.isInRange(s))
    return null;
  var c = [{
    x: s,
    y: a + l
  }, {
    x: s,
    y: a
  }];
  return n === "top" ? c.reverse() : c;
}, h5 = (e, t, r, n) => {
  var i = [n.mapWithFallback(e[0], {
    position: r,
    fallback: "rangeMin"
  }), n.mapWithFallback(e[1], {
    position: r,
    fallback: "rangeMax"
  })];
  return t === "discard" && i.some((o) => !n.isInRange(o)) ? null : i;
}, v5 = (e, t, r, n, i, o, a) => {
  var {
    x: l,
    y: s,
    segment: c,
    ifOverflow: u
  } = a, f = qt(l), p = qt(s);
  return p ? f5(s, u, n, o, t, r) : f ? p5(l, u, n, i, e, r) : c != null && c.length === 2 ? h5(c, u, n, new l5({
    x: e,
    y: t
  })) : null;
};
function g5(e) {
  var t = $e();
  return Se(() => (t(r5(e)), () => {
    t(n5(e));
  })), null;
}
function y5(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    shape: n,
    className: i,
    ifOverflow: o
  } = e, a = dt(), l = a5(), s = ae((C) => vr(C, t)), c = ae((C) => gr(C, r)), u = ae((C) => ei(C, "xAxis", t, a)), f = ae((C) => ei(C, "yAxis", r, a)), p = no();
  if (!l || !p || s == null || c == null || u == null || f == null)
    return null;
  var h = v5(u, f, p, e.position, s.orientation, c.orientation, e);
  if (!h)
    return null;
  var g = h[0], v = h[1];
  if (g == null || v == null)
    return null;
  var {
    x: y,
    y: m
  } = g, {
    x: w,
    y: b
  } = v, x = o === "hidden" ? "url(#".concat(l, ")") : void 0, j = v0(v0({
    clipPath: x
  }, vt(e)), {}, {
    x1: y,
    y1: m,
    x2: w,
    y2: b
  }), S = JM({
    x1: y,
    y1: m,
    x2: w,
    y2: b
  });
  return /* @__PURE__ */ P.createElement(zt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(ct, {
    className: Pe("recharts-reference-line", i)
  }, d5(n, j), /* @__PURE__ */ P.createElement(y1, Ka({}, S, {
    lowerWidth: S.width,
    upperWidth: S.width
  }), /* @__PURE__ */ P.createElement(x1, {
    label: e.label
  }), e.children)));
}
var m5 = {
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  label: !1,
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
  zIndex: Je.line
};
function W1(e) {
  var t = jt(e, m5);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(g5, {
    yAxisId: t.yAxisId,
    xAxisId: t.xAxisId,
    ifOverflow: t.ifOverflow,
    x: t.x,
    y: t.y,
    segment: t.segment
  }), /* @__PURE__ */ P.createElement(y5, t));
}
W1.displayName = "ReferenceLine";
function F1(e, t) {
  if (t < 1)
    return [];
  if (t === 1)
    return e;
  for (var r = [], n = 0; n < e.length; n += t) {
    var i = e[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function x5(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return e5(n, r);
}
function b5(e, t, r) {
  var n = r === "width", {
    x: i,
    y: o,
    width: a,
    height: l
  } = e;
  return t === 1 ? {
    start: n ? i : o,
    end: n ? i + a : o + l
  } : {
    start: n ? i + a : o + l,
    end: n ? i : o
  };
}
function Yi(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var o = r();
  return e * (t - e * o / 2 - n) >= 0 && e * (t + e * o / 2 - i) <= 0;
}
function w5(e, t) {
  return F1(e, t + 1);
}
function j5(e, t, r, n, i) {
  for (var o = (n || []).slice(), {
    start: a,
    end: l
  } = t, s = 0, c = 1, u = a, f = function() {
    var g = n?.[s];
    if (g === void 0)
      return {
        v: F1(n, c)
      };
    var v = s, y, m = () => (y === void 0 && (y = r(g, v)), y), w = g.coordinate, b = s === 0 || Yi(e, w, m, u, l);
    b || (s = 0, u = a, c += 1), b && (u = w + e * (m() / 2 + i), s += c);
  }, p; c <= o.length; )
    if (p = f(), p) return p.v;
  return [];
}
function S5(e, t, r, n, i) {
  var o = (n || []).slice(), a = o.length;
  if (a === 0)
    return [];
  for (var {
    start: l,
    end: s
  } = t, c = 1; c <= a; c++) {
    for (var u = (a - 1) % c, f = l, p = !0, h = function() {
      var x = n[v];
      if (x == null)
        return 0;
      var j = v, S, C = () => (S === void 0 && (S = r(x, j)), S), _ = x.coordinate, E = v === u || Yi(e, _, C, f, s);
      if (!E)
        return p = !1, 1;
      E && (f = _ + e * (C() / 2 + i));
    }, g, v = u; v < a && (g = h(), !(g !== 0 && g === 1)); v += c)
      ;
    if (p) {
      for (var y = [], m = u; m < a; m += c) {
        var w = n[m];
        w != null && y.push(w);
      }
      return y;
    }
  }
  return [];
}
function g0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g0(Object(r), !0).forEach(function(n) {
      O5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O5(e, t, r) {
  return (t = P5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P5(e) {
  var t = C5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function C5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function k5(e, t, r, n, i) {
  for (var o = (n || []).slice(), a = o.length, {
    start: l
  } = t, {
    end: s
  } = t, c = function(p) {
    var h = o[p];
    if (h == null)
      return 1;
    var g = h, v, y = () => (v === void 0 && (v = r(h, p)), v);
    if (p === a - 1) {
      var m = e * (g.coordinate + e * y() / 2 - s);
      o[p] = g = pt(pt({}, g), {}, {
        tickCoord: m > 0 ? g.coordinate - m * e : g.coordinate
      });
    } else
      o[p] = g = pt(pt({}, g), {}, {
        tickCoord: g.coordinate
      });
    if (g.tickCoord != null) {
      var w = Yi(e, g.tickCoord, y, l, s);
      w && (s = g.tickCoord - e * (y() / 2 + i), o[p] = pt(pt({}, g), {}, {
        isShow: !0
      }));
    }
  }, u = a - 1; u >= 0; u--)
    c(u);
  return o;
}
function _5(e, t, r, n, i, o) {
  var a = (n || []).slice(), l = a.length, {
    start: s,
    end: c
  } = t;
  if (o) {
    var u = n[l - 1];
    if (u != null) {
      var f = r(u, l - 1), p = e * (u.coordinate + e * f / 2 - c);
      if (a[l - 1] = u = pt(pt({}, u), {}, {
        tickCoord: p > 0 ? u.coordinate - p * e : u.coordinate
      }), u.tickCoord != null) {
        var h = Yi(e, u.tickCoord, () => f, s, c);
        h && (c = u.tickCoord - e * (f / 2 + i), a[l - 1] = pt(pt({}, u), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var g = o ? l - 1 : l, v = function(w) {
    var b = a[w];
    if (b == null)
      return 1;
    var x = b, j, S = () => (j === void 0 && (j = r(b, w)), j);
    if (w === 0) {
      var C = e * (x.coordinate - e * S() / 2 - s);
      a[w] = x = pt(pt({}, x), {}, {
        tickCoord: C < 0 ? x.coordinate - C * e : x.coordinate
      });
    } else
      a[w] = x = pt(pt({}, x), {}, {
        tickCoord: x.coordinate
      });
    if (x.tickCoord != null) {
      var _ = Yi(e, x.tickCoord, S, s, c);
      _ && (s = x.tickCoord + e * (S() / 2 + i), a[w] = pt(pt({}, x), {}, {
        isShow: !0
      }));
    }
  }, y = 0; y < g; y++)
    v(y);
  return a;
}
function Gd(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: o,
    minTickGap: a,
    orientation: l,
    interval: s,
    tickFormatter: c,
    unit: u,
    angle: f
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (ne(s) || lo.isSsr) {
    var p;
    return (p = w5(i, ne(s) ? s : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], g = l === "top" || l === "bottom" ? "width" : "height", v = u && g === "width" ? Ii(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = (j, S) => {
    var C = typeof c == "function" ? c(j.value, S) : j.value;
    return g === "width" ? x5(Ii(C, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : Ii(C, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, m = i[0], w = i[1], b = i.length >= 2 && m != null && w != null ? Ct(w.coordinate - m.coordinate) : 1, x = b5(o, b, g);
  return s === "equidistantPreserveStart" ? j5(b, x, y, i, a) : s === "equidistantPreserveEnd" ? S5(b, x, y, i, a) : (s === "preserveStart" || s === "preserveStartEnd" ? h = _5(b, x, y, i, a, s === "preserveStartEnd") : h = k5(b, x, y, i, a), h.filter((j) => j.isShow));
}
var E5 = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: o = 0
  } = e, a = 0;
  if (t) {
    Array.from(t).forEach((u) => {
      if (u) {
        var f = u.getBoundingClientRect();
        f.width > a && (a = f.width);
      }
    });
    var l = r ? r.getBoundingClientRect().width : 0, s = i + o, c = a + s + l + (r ? n : 0);
    return Math.round(c);
  }
  return 0;
}, A5 = {
  xAxis: {},
  yAxis: {}
}, V1 = gt({
  name: "renderedTicks",
  initialState: A5,
  reducers: {
    setRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n,
        ticks: i
      } = t.payload;
      e[r][n] = i;
    },
    removeRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n
      } = t.payload;
      delete e[r][n];
    }
  }
}), {
  setRenderedTicks: T5,
  removeRenderedTicks: I5
} = V1.actions, M5 = V1.reducer, D5 = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function R5(e, t) {
  if (e == null) return {};
  var r, n, i = N5(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function N5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sn.apply(null, arguments);
}
function y0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? y0(Object(r), !0).forEach(function(n) {
      $5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $5(e, t, r) {
  return (t = z5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z5(e) {
  var t = L5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function L5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pr = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
  zIndex: Je.axis
};
function B5(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: o,
    mirror: a,
    axisLine: l,
    otherSvgProps: s
  } = e;
  if (!l)
    return null;
  var c = Fe(Fe(Fe({}, s), Ht(l)), {}, {
    fill: "none"
  });
  if (o === "top" || o === "bottom") {
    var u = +(o === "top" && !a || o === "bottom" && a);
    c = Fe(Fe({}, c), {}, {
      x1: t,
      y1: r + u * i,
      x2: t + n,
      y2: r + u * i
    });
  } else {
    var f = +(o === "left" && !a || o === "right" && a);
    c = Fe(Fe({}, c), {}, {
      x1: t + f * n,
      y1: r,
      x2: t + f * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ P.createElement("line", Sn({}, c, {
    className: Pe("recharts-cartesian-axis-line", qn(l, "className"))
  }));
}
function W5(e, t, r, n, i, o, a, l, s) {
  var c, u, f, p, h, g, v = l ? -1 : 1, y = e.tickSize || a, m = ne(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (o) {
    case "top":
      c = u = e.coordinate, p = r + +!l * i, f = p - v * y, g = f - v * s, h = m;
      break;
    case "left":
      f = p = e.coordinate, u = t + +!l * n, c = u - v * y, h = c - v * s, g = m;
      break;
    case "right":
      f = p = e.coordinate, u = t + +l * n, c = u + v * y, h = c + v * s, g = m;
      break;
    default:
      c = u = e.coordinate, p = r + +l * i, f = p + v * y, g = f + v * s, h = m;
      break;
  }
  return {
    line: {
      x1: c,
      y1: f,
      x2: u,
      y2: p
    },
    tick: {
      x: h,
      y: g
    }
  };
}
function F5(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function V5(e, t) {
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
function K5(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, o = Pe(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ P.isValidElement(t))
    i = /* @__PURE__ */ P.cloneElement(t, Fe(Fe({}, r), {}, {
      className: o
    }));
  else if (typeof t == "function")
    i = t(Fe(Fe({}, r), {}, {
      className: o
    }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = Pe(a, TI(t))), i = /* @__PURE__ */ P.createElement(qd, Sn({}, r, {
      className: a
    }), n);
  }
  return i;
}
function H5(e) {
  var {
    ticks: t,
    axisType: r,
    axisId: n
  } = e, i = $e();
  return Se(() => {
    if (n == null || r == null)
      return Pn;
    var o = t.map((a) => ({
      value: a.value,
      coordinate: a.coordinate,
      offset: a.offset,
      index: a.index
    }));
    return i(T5({
      ticks: o,
      axisId: n,
      axisType: r
    })), () => {
      i(I5({
        axisId: n,
        axisType: r
      }));
    };
  }, [i, t, n, r]), null;
}
var q5 = /* @__PURE__ */ ut((e, t) => {
  var {
    ticks: r = [],
    tick: n,
    tickLine: i,
    stroke: o,
    tickFormatter: a,
    unit: l,
    padding: s,
    tickTextProps: c,
    orientation: u,
    mirror: f,
    x: p,
    y: h,
    width: g,
    height: v,
    tickSize: y,
    tickMargin: m,
    fontSize: w,
    letterSpacing: b,
    getTicksConfig: x,
    events: j,
    axisType: S,
    axisId: C
  } = e, _ = Gd(Fe(Fe({}, x), {}, {
    ticks: r
  }), w, b), E = Ht(x), T = Xi(n), D = f1(E.textAnchor) ? E.textAnchor : F5(u, f), k = V5(u, f), W = {};
  typeof i == "object" && (W = i);
  var F = Fe(Fe({}, E), {}, {
    fill: "none"
  }, W), Z = _.map((z) => Fe({
    entry: z
  }, W5(z, p, h, g, v, u, y, f, m))), q = Z.map((z) => {
    var {
      entry: L,
      line: V
    } = z;
    return /* @__PURE__ */ P.createElement(ct, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(L.value, "-").concat(L.coordinate, "-").concat(L.tickCoord)
    }, i && /* @__PURE__ */ P.createElement("line", Sn({}, F, V, {
      className: Pe("recharts-cartesian-axis-tick-line", qn(i, "className"))
    })));
  }), ie = Z.map((z, L) => {
    var V, N, {
      entry: $,
      tick: J
    } = z, X = Fe(Fe(Fe(Fe({
      verticalAnchor: k
    }, E), {}, {
      textAnchor: D,
      stroke: "none",
      fill: o
    }, J), {}, {
      index: L,
      payload: $,
      visibleTicksCount: _.length,
      tickFormatter: a,
      padding: s
    }, c), {}, {
      angle: (V = (N = c?.angle) !== null && N !== void 0 ? N : E.angle) !== null && V !== void 0 ? V : 0
    }), ee = Fe(Fe({}, X), T);
    return /* @__PURE__ */ P.createElement(ct, Sn({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat($.value, "-").concat($.coordinate, "-").concat($.tickCoord)
    }, Au(j, $, L)), n && /* @__PURE__ */ P.createElement(K5, {
      option: n,
      tickProps: ee,
      value: "".concat(typeof a == "function" ? a($.value, L) : $.value).concat(l || "")
    }));
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(S, "-ticks")
  }, /* @__PURE__ */ P.createElement(H5, {
    ticks: _,
    axisId: C,
    axisType: S
  }), ie.length > 0 && /* @__PURE__ */ P.createElement(zt, {
    zIndex: Je.label
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(S, "-tick-labels"),
    ref: t
  }, ie)), q.length > 0 && /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(S, "-tick-lines")
  }, q));
}), U5 = /* @__PURE__ */ ut((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: o,
    hide: a,
    ticks: l,
    axisType: s,
    axisId: c
  } = e, u = R5(e, D5), [f, p] = B(""), [h, g] = B(""), v = ge(null);
  z0(t, () => ({
    getCalculatedWidth: () => {
      var m;
      return E5({
        ticks: v.current,
        label: (m = e.labelRef) === null || m === void 0 ? void 0 : m.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var y = Ee((m) => {
    if (m) {
      var w = m.getElementsByClassName("recharts-cartesian-axis-tick-value");
      v.current = w;
      var b = w[0];
      if (b) {
        var x = window.getComputedStyle(b), j = x.fontSize, S = x.letterSpacing;
        (j !== f || S !== h) && (p(j), g(S));
      }
    }
  }, [f, h]);
  return a || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ P.createElement(zt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(ct, {
    className: Pe("recharts-cartesian-axis", o)
  }, /* @__PURE__ */ P.createElement(B5, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: Ht(e)
  }), /* @__PURE__ */ P.createElement(q5, {
    ref: y,
    axisType: s,
    events: u,
    fontSize: f,
    getTicksConfig: e,
    height: e.height,
    letterSpacing: h,
    mirror: e.mirror,
    orientation: e.orientation,
    padding: e.padding,
    stroke: e.stroke,
    tick: e.tick,
    tickFormatter: e.tickFormatter,
    tickLine: e.tickLine,
    tickMargin: e.tickMargin,
    tickSize: e.tickSize,
    tickTextProps: e.tickTextProps,
    ticks: l,
    unit: e.unit,
    width: e.width,
    x: e.x,
    y: e.y,
    axisId: c
  }), /* @__PURE__ */ P.createElement(y1, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ P.createElement(x1, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), Xd = /* @__PURE__ */ P.forwardRef((e, t) => {
  var r = jt(e, Pr);
  return /* @__PURE__ */ P.createElement(U5, Sn({}, r, {
    ref: t
  }));
});
Xd.displayName = "CartesianAxis";
var Y5 = ["x1", "y1", "x2", "y2", "key"], G5 = ["offset"], X5 = ["xAxisId", "yAxisId"], Z5 = ["xAxisId", "yAxisId"];
function m0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m0(Object(r), !0).forEach(function(n) {
      J5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J5(e, t, r) {
  return (t = Q5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q5(e) {
  var t = e8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cn() {
  return cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cn.apply(null, arguments);
}
function Ha(e, t) {
  if (e == null) return {};
  var r, n, i = t8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function t8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var r8 = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: o,
    height: a,
    ry: l
  } = e;
  return /* @__PURE__ */ P.createElement("rect", {
    x: n,
    y: i,
    ry: l,
    width: o,
    height: a,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function K1(e) {
  var {
    option: t,
    lineItemProps: r
  } = e, n;
  if (/* @__PURE__ */ P.isValidElement(t))
    n = /* @__PURE__ */ P.cloneElement(t, r);
  else if (typeof t == "function")
    n = t(r);
  else {
    var i, {
      x1: o,
      y1: a,
      x2: l,
      y2: s,
      key: c
    } = r, u = Ha(r, Y5), f = (i = Ht(u)) !== null && i !== void 0 ? i : {}, {
      offset: p
    } = f, h = Ha(f, G5);
    n = /* @__PURE__ */ P.createElement("line", cn({}, h, {
      x1: o,
      y1: a,
      x2: l,
      y2: s,
      fill: "none",
      key: c
    }));
  }
  return n;
}
function n8(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: o,
    yAxisId: a
  } = e, l = Ha(e, X5), s = i.map((c, u) => {
    var f = ht(ht({}, l), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(K1, {
      key: "line-".concat(u),
      option: n,
      lineItemProps: f
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function i8(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: o,
    yAxisId: a
  } = e, l = Ha(e, Z5), s = i.map((c, u) => {
    var f = ht(ht({}, l), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(K1, {
      option: n,
      lineItemProps: f,
      key: "line-".concat(u)
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function o8(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: o,
    height: a,
    horizontalPoints: l,
    horizontal: s = !0
  } = e;
  if (!s || !t || !t.length || l == null)
    return null;
  var c = l.map((f) => Math.round(f + i - i)).sort((f, p) => f - p);
  i !== c[0] && c.unshift(0);
  var u = c.map((f, p) => {
    var h = c[p + 1], g = h == null, v = g ? i + a - f : h - f;
    if (v <= 0)
      return null;
    var y = p % t.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(p),
      y: f,
      x: n,
      height: v,
      width: o,
      stroke: "none",
      fill: t[y],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, u);
}
function a8(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: o,
    width: a,
    height: l,
    verticalPoints: s
  } = e;
  if (!t || !r || !r.length)
    return null;
  var c = s.map((f) => Math.round(f + i - i)).sort((f, p) => f - p);
  i !== c[0] && c.unshift(0);
  var u = c.map((f, p) => {
    var h = c[p + 1], g = h == null, v = g ? i + a - f : h - f;
    if (v <= 0)
      return null;
    var y = p % r.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(p),
      x: f,
      y: o,
      width: v,
      height: l,
      stroke: "none",
      fill: r[y],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, u);
}
var l8 = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return pm(Gd(ht(ht(ht({}, Pr), r), {}, {
    ticks: hm(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.left, o.left + o.width, t);
}, s8 = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return pm(Gd(ht(ht(ht({}, Pr), r), {}, {
    ticks: hm(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.top, o.top + o.height, t);
}, c8 = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0,
  syncWithTicks: !1,
  zIndex: Je.grid
};
function $l(e) {
  var t = wm(), r = jm(), n = bm(), i = ht(ht({}, jt(e, c8)), {}, {
    x: ne(e.x) ? e.x : n.left,
    y: ne(e.y) ? e.y : n.top,
    width: ne(e.width) ? e.width : n.width,
    height: ne(e.height) ? e.height : n.height
  }), {
    xAxisId: o,
    yAxisId: a,
    x: l,
    y: s,
    width: c,
    height: u,
    syncWithTicks: f,
    horizontalValues: p,
    verticalValues: h
  } = i, g = dt(), v = ae((E) => dg(E, "xAxis", o, g)), y = ae((E) => dg(E, "yAxis", a, g));
  if (!dr(c) || !dr(u) || !ne(l) || !ne(s))
    return null;
  var m = i.verticalCoordinatesGenerator || l8, w = i.horizontalCoordinatesGenerator || s8, {
    horizontalPoints: b,
    verticalPoints: x
  } = i;
  if ((!b || !b.length) && typeof w == "function") {
    var j = p && p.length, S = w({
      yAxis: y ? ht(ht({}, y), {}, {
        ticks: j ? p : y.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? u,
      offset: n
    }, j ? !0 : f);
    ha(Array.isArray(S), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof S, "]")), Array.isArray(S) && (b = S);
  }
  if ((!x || !x.length) && typeof m == "function") {
    var C = h && h.length, _ = m({
      xAxis: v ? ht(ht({}, v), {}, {
        ticks: C ? h : v.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? u,
      offset: n
    }, C ? !0 : f);
    ha(Array.isArray(_), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _, "]")), Array.isArray(_) && (x = _);
  }
  return /* @__PURE__ */ P.createElement(zt, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ P.createElement(r8, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ P.createElement(o8, cn({}, i, {
    horizontalPoints: b
  })), /* @__PURE__ */ P.createElement(a8, cn({}, i, {
    verticalPoints: x
  })), /* @__PURE__ */ P.createElement(n8, cn({}, i, {
    offset: n,
    horizontalPoints: b,
    xAxis: v,
    yAxis: y
  })), /* @__PURE__ */ P.createElement(i8, cn({}, i, {
    offset: n,
    verticalPoints: x,
    xAxis: v,
    yAxis: y
  }))));
}
$l.displayName = "CartesianGrid";
var u8 = {}, H1 = gt({
  name: "errorBars",
  initialState: u8,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((o) => o.dataKey === n.dataKey && o.direction === n.direction ? i : o));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: _$,
  replaceErrorBar: E$,
  removeErrorBar: A$
} = H1.actions, d8 = H1.reducer, f8 = ["children"];
function p8(e, t) {
  if (e == null) return {};
  var r, n, i = h8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function h8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var v8 = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, g8 = /* @__PURE__ */ At(v8);
function y8(e) {
  var {
    children: t
  } = e, r = p8(e, f8);
  return /* @__PURE__ */ P.createElement(g8.Provider, {
    value: r
  }, t);
}
function Zd(e, t) {
  var r, n, i = ae((c) => vr(c, e)), o = ae((c) => gr(c, t)), a = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : Ge.allowDataOverflow, l = (n = o?.allowDataOverflow) !== null && n !== void 0 ? n : Xe.allowDataOverflow, s = a || l;
  return {
    needClip: s,
    needClipX: a,
    needClipY: l
  };
}
function q1(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = Yd(), {
    needClipX: o,
    needClipY: a,
    needClip: l
  } = Zd(t, r);
  if (!l || !i)
    return null;
  var {
    x: s,
    y: c,
    width: u,
    height: f
  } = i;
  return /* @__PURE__ */ P.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ P.createElement("rect", {
    x: o ? s : s - u / 2,
    y: a ? c : c - f / 2,
    width: o ? u : u * 2,
    height: a ? f : f * 2
  }));
}
function m8(e) {
  var t = Xi(e), r = 3, n = 2;
  if (t != null) {
    var {
      r: i,
      strokeWidth: o
    } = t, a = Number(i), l = Number(o);
    return (Number.isNaN(a) || a < 0) && (a = r), (Number.isNaN(l) || l < 0) && (l = n), {
      r: a,
      strokeWidth: l
    };
  }
  return {
    r,
    strokeWidth: n
  };
}
function yr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : N1;
}
function mr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : N1;
}
var U1 = (e, t, r) => Hr(e, "xAxis", yr(e, t), r), Y1 = (e, t, r) => Kr(e, "xAxis", yr(e, t), r), G1 = (e, t, r) => Hr(e, "yAxis", mr(e, t), r), X1 = (e, t, r) => Kr(e, "yAxis", mr(e, t), r), x8 = R([Oe, U1, G1, Y1, X1], (e, t, r, n, i) => hr(e, "xAxis") ? Yn(t, n, !1) : Yn(r, i, !1)), b8 = (e, t) => t, Z1 = R([Dl, b8], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), J1 = (e) => {
  var t = Oe(e), r = hr(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, w8 = (e, t) => {
  var r = J1(e);
  return r === "yAxis" ? mr(e, t) : yr(e, t);
}, j8 = (e, t, r) => Na(e, J1(e), w8(e, t), r), S8 = R([Z1, j8], (e, t) => {
  var r;
  if (!(e == null || t == null)) {
    var {
      stackId: n
    } = e, i = Ol(e);
    if (!(n == null || i == null)) {
      var o = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, a = o?.find((l) => l.key === i);
      if (a != null)
        return a.map((l) => [l[0], l[1]]);
    }
  }
}), O8 = R([Oe, U1, G1, Y1, X1, S8, Fm, x8, Z1, j4], (e, t, r, n, i, o, a, l, s, c) => {
  var {
    chartData: u,
    dataStartIndex: f,
    dataEndIndex: p
  } = a;
  if (!(s == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || l == null)) {
    var {
      data: h
    } = s, g;
    if (h && h.length > 0 ? g = h : g = u?.slice(f, p + 1), g != null)
      return K8({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataStartIndex: f,
        areaSettings: s,
        stackedData: o,
        displayedData: g,
        chartBaseValue: c,
        bandSize: l
      });
  }
}), P8 = ["id"], C8 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hn.apply(null, arguments);
}
function Q1(e, t) {
  if (e == null) return {};
  var r, n, i = k8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function k8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function x0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x0(Object(r), !0).forEach(function(n) {
      _8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _8(e, t, r) {
  return (t = E8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E8(e) {
  var t = A8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function A8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qa(e, t) {
  return e && e !== "none" ? e : t;
}
var T8 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    fill: i,
    legendType: o,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: o,
    color: qa(n, i),
    value: sl(r, t),
    payload: e
  }];
}, I8 = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: o,
    name: a,
    hide: l,
    unit: s,
    tooltipType: c,
    id: u
  } = e, f = {
    dataDefinedOnItem: r,
    getPosition: Pn,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: o,
      dataKey: t,
      nameKey: void 0,
      name: sl(a, t),
      hide: l,
      type: c,
      color: qa(n, o),
      unit: s,
      graphicalItemId: u
    }
  };
  return /* @__PURE__ */ P.createElement(T1, {
    tooltipEntrySettings: f
  });
});
function M8(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: i,
    dot: o,
    dataKey: a
  } = n, l = Ht(n);
  return /* @__PURE__ */ P.createElement(bM, {
    points: r,
    dot: o,
    className: "recharts-area-dots",
    dotClassName: "recharts-area-dot",
    dataKey: a,
    baseProps: l,
    needClip: i,
    clipPathId: t
  });
}
function D8(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = n.map((o) => {
    var a, l, s = {
      x: (a = o.x) !== null && a !== void 0 ? a : 0,
      y: (l = o.y) !== null && l !== void 0 ? l : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return Wn(Wn({}, s), {}, {
      value: o.value,
      payload: o.payload,
      parentViewBox: void 0,
      viewBox: s,
      fill: void 0
    });
  });
  return /* @__PURE__ */ P.createElement(w1, {
    value: t ? i : void 0
  }, r);
}
function b0(e) {
  var {
    points: t,
    baseLine: r,
    needClip: n,
    clipPathId: i,
    props: o
  } = e, {
    layout: a,
    type: l,
    stroke: s,
    connectNulls: c,
    isRange: u
  } = o, {
    id: f
  } = o, p = Q1(o, P8), h = Ht(p), g = vt(p);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, t?.length > 1 && /* @__PURE__ */ P.createElement(ct, {
    clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0
  }, /* @__PURE__ */ P.createElement(Ai, hn({}, g, {
    id: f,
    points: t,
    connectNulls: c,
    type: l,
    baseLine: r,
    layout: a,
    stroke: "none",
    className: "recharts-area-area"
  })), s !== "none" && /* @__PURE__ */ P.createElement(Ai, hn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: c,
    fill: "none",
    points: t
  })), s !== "none" && u && Array.isArray(r) && /* @__PURE__ */ P.createElement(Ai, hn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: c,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ P.createElement(M8, {
    points: t,
    props: p,
    clipPathId: i
  }));
}
function R8(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.y, s = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!pe(l) || !pe(s))
    return null;
  var c = n * Math.abs(l - s), u = Math.max(...o.map((f) => f.x || 0));
  return ne(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((f) => f.x || 0), u)), ne(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: 0,
    y: l < s ? l : l - c,
    width: u + (a ? parseInt("".concat(a), 10) : 1),
    height: Math.floor(c)
  }) : null;
}
function N8(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.x, s = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!pe(l) || !pe(s))
    return null;
  var c = n * Math.abs(l - s), u = Math.max(...o.map((f) => f.y || 0));
  return ne(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((f) => f.y || 0), u)), ne(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: l < s ? l : l - c,
    y: 0,
    width: c,
    height: Math.floor(u + (a ? parseInt("".concat(a), 10) : 1))
  }) : null;
}
function $8(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: i,
    strokeWidth: o
  } = e;
  return r === "vertical" ? /* @__PURE__ */ P.createElement(R8, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  }) : /* @__PURE__ */ P.createElement(N8, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  });
}
function z8(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  } = e, {
    points: a,
    baseLine: l,
    isAnimationActive: s,
    animationBegin: c,
    animationDuration: u,
    animationEasing: f,
    onAnimationStart: p,
    onAnimationEnd: h
  } = n, g = er(() => ({
    points: a,
    baseLine: l
  }), [a, l]), v = yl(g, "recharts-area-"), y = Vu(), [m, w] = B(!1), b = !m, x = Ee(() => {
    typeof h == "function" && h(), w(!1);
  }, [h]), j = Ee(() => {
    typeof p == "function" && p(), w(!0);
  }, [p]);
  if (y == null)
    return null;
  var S = i.current, C = o.current;
  return /* @__PURE__ */ P.createElement(D8, {
    showLabels: b,
    points: a
  }, n.children, /* @__PURE__ */ P.createElement(gl, {
    animationId: v,
    begin: c,
    duration: u,
    isActive: s,
    easing: f,
    onAnimationEnd: x,
    onAnimationStart: j,
    key: v
  }, (_) => {
    if (S) {
      var E = S.length / a.length, T = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        _ === 1 ? a : a.map((k, W) => {
          var F = Math.floor(W * E);
          if (S[F]) {
            var Z = S[F];
            return Wn(Wn({}, k), {}, {
              x: ze(Z.x, k.x, _),
              y: ze(Z.y, k.y, _)
            });
          }
          return k;
        })
      ), D;
      return ne(l) ? D = ze(C, l, _) : Be(l) || Zt(l) ? D = ze(C, 0, _) : D = l.map((k, W) => {
        var F = Math.floor(W * E);
        if (Array.isArray(C) && C[F]) {
          var Z = C[F];
          return Wn(Wn({}, k), {}, {
            x: ze(Z.x, k.x, _),
            y: ze(Z.y, k.y, _)
          });
        }
        return k;
      }), _ > 0 && (i.current = T, o.current = D), /* @__PURE__ */ P.createElement(b0, {
        points: T,
        baseLine: D,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return _ > 0 && (i.current = a, o.current = l), /* @__PURE__ */ P.createElement(ct, null, s && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ P.createElement($8, {
      alpha: _,
      points: a,
      baseLine: l,
      layout: y,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ P.createElement(ct, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ P.createElement(b0, {
      points: a,
      baseLine: l,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ P.createElement(S1, {
    label: n.label
  }));
}
function L8(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, i = ge(null), o = ge();
  return /* @__PURE__ */ P.createElement(z8, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  });
}
class B8 extends B0 {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: i,
      top: o,
      left: a,
      needClip: l,
      xAxisId: s,
      yAxisId: c,
      width: u,
      height: f,
      id: p,
      baseLine: h,
      zIndex: g
    } = this.props;
    if (t)
      return null;
    var v = Pe("recharts-area", i), y = p, {
      r: m,
      strokeWidth: w
    } = m8(r), b = k1(r), x = m * 2 + w, j = l ? "url(#clipPath-".concat(b ? "" : "dots-").concat(y, ")") : void 0;
    return /* @__PURE__ */ P.createElement(zt, {
      zIndex: g
    }, /* @__PURE__ */ P.createElement(ct, {
      className: v
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(q1, {
      clipPathId: y,
      xAxisId: s,
      yAxisId: c
    }), !b && /* @__PURE__ */ P.createElement("clipPath", {
      id: "clipPath-dots-".concat(y)
    }, /* @__PURE__ */ P.createElement("rect", {
      x: a - x / 2,
      y: o - x / 2,
      width: u + x,
      height: f + x
    }))), /* @__PURE__ */ P.createElement(L8, {
      needClip: l,
      clipPathId: y,
      props: this.props
    })), /* @__PURE__ */ P.createElement(u0, {
      points: n,
      mainColor: qa(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: j
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ P.createElement(u0, {
      points: h,
      mainColor: qa(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: j
    }));
  }
}
var W8 = {
  activeDot: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !1,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: !1,
  isAnimationActive: "auto",
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  type: "linear",
  label: !1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Je.area
};
function F8(e) {
  var t, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    connectNulls: a,
    dot: l,
    fill: s,
    fillOpacity: c,
    hide: u,
    isAnimationActive: f,
    legendType: p,
    stroke: h,
    xAxisId: g,
    yAxisId: v
  } = e, y = Q1(e, C8), m = Cn(), w = Jb(), {
    needClip: b
  } = Zd(g, v), x = dt(), {
    points: j,
    isRange: S,
    baseLine: C
  } = (t = ae((W) => O8(W, e.id, x))) !== null && t !== void 0 ? t : {}, _ = Yd();
  if (m !== "horizontal" && m !== "vertical" || _ == null || w !== "AreaChart" && w !== "ComposedChart")
    return null;
  var {
    height: E,
    width: T,
    x: D,
    y: k
  } = _;
  return !j || !j.length ? null : /* @__PURE__ */ P.createElement(B8, hn({}, y, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    baseLine: C,
    connectNulls: a,
    dot: l,
    fill: s,
    fillOpacity: c,
    height: E,
    hide: u,
    layout: m,
    isAnimationActive: f,
    isRange: S,
    legendType: p,
    needClip: b,
    points: j,
    stroke: h,
    width: T,
    left: D,
    top: k,
    xAxisId: g,
    yAxisId: v
  }));
}
var V8 = (e, t, r, n, i) => {
  var o = r ?? t;
  if (ne(o))
    return o;
  var a = e === "horizontal" ? i : n, l = a.scale.domain();
  if (a.type === "number") {
    var s = Math.max(l[0], l[1]), c = Math.min(l[0], l[1]);
    return o === "dataMin" ? c : o === "dataMax" || s < 0 ? s : Math.max(Math.min(l[0], l[1]), 0);
  }
  return o === "dataMin" ? l[0] : o === "dataMax" ? l[1] : l[0];
};
function K8(e) {
  var {
    areaSettings: {
      connectNulls: t,
      baseValue: r,
      dataKey: n
    },
    stackedData: i,
    layout: o,
    chartBaseValue: a,
    xAxis: l,
    yAxis: s,
    displayedData: c,
    dataStartIndex: u,
    xAxisTicks: f,
    yAxisTicks: p,
    bandSize: h
  } = e, g = i && i.length, v = V8(o, a, r, l, s), y = o === "horizontal", m = !1, w = c.map((x, j) => {
    var S, C, _, E;
    if (g)
      E = i[u + j];
    else {
      var T = qe(x, n);
      Array.isArray(T) ? (E = T, m = !0) : E = [v, T];
    }
    var D = (S = (C = E) === null || C === void 0 ? void 0 : C[1]) !== null && S !== void 0 ? S : null, k = D == null || g && !t && qe(x, n) == null;
    if (y) {
      var W;
      return {
        x: ih({
          axis: l,
          ticks: f,
          bandSize: h,
          entry: x,
          index: j
        }),
        y: k ? null : (W = s.scale.map(D)) !== null && W !== void 0 ? W : null,
        value: E,
        payload: x
      };
    }
    return {
      x: k ? null : (_ = l.scale.map(D)) !== null && _ !== void 0 ? _ : null,
      y: ih({
        axis: s,
        ticks: p,
        bandSize: h,
        entry: x,
        index: j
      }),
      value: E,
      payload: x
    };
  }), b;
  return g || m ? b = w.map((x) => {
    var j, S = Array.isArray(x.value) ? x.value[0] : null;
    if (y) {
      var C;
      return {
        x: x.x,
        y: S != null && x.y != null && (C = s.scale.map(S)) !== null && C !== void 0 ? C : null,
        payload: x.payload
      };
    }
    return {
      x: S != null && (j = l.scale.map(S)) !== null && j !== void 0 ? j : null,
      y: x.y,
      payload: x.payload
    };
  }) : b = y ? s.scale.map(v) : l.scale.map(v), {
    points: w,
    baseLine: b ?? 0,
    isRange: m
  };
}
function H8(e) {
  var t = jt(e, W8), r = dt();
  return /* @__PURE__ */ P.createElement(M1, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(I1, {
    legendPayload: T8(t)
  }), /* @__PURE__ */ P.createElement(I8, {
    dataKey: t.dataKey,
    data: t.data,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: n
  }), /* @__PURE__ */ P.createElement(R1, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: vm(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ P.createElement(F8, hn({}, t, {
    id: n
  }))));
}
var Gi = /* @__PURE__ */ P.memo(H8, ao);
Gi.displayName = "Area";
var q8 = process.env.NODE_ENV === "production", bc = "Invariant failed";
function U8(e, t) {
  if (q8)
    throw new Error(bc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(bc, ": ").concat(r) : bc;
  throw new Error(n);
}
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fu.apply(null, arguments);
}
function Jd(e) {
  return /* @__PURE__ */ P.createElement(tM, fu({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, e));
}
var Y8 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (ne(t)) return t;
    var o = ne(n) || Be(n);
    return o ? t(n, i) : (o || U8(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")), r);
  };
}, G8 = (e, t, r) => r, X8 = (e, t) => t, mo = R([Dl, X8], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), Z8 = R([mo], (e) => e?.maxBarSize), J8 = (e, t, r, n) => n, Q8 = R([Oe, Dl, yr, mr, G8], (e, t, r, n, i) => t.filter((o) => e === "horizontal" ? o.xAxisId === r : o.yAxisId === n).filter((o) => o.isPanorama === i).filter((o) => o.hide === !1).filter((o) => o.type === "bar")), eD = (e, t, r) => {
  var n = Oe(e), i = yr(e, t), o = mr(e, t);
  if (!(i == null || o == null))
    return n === "horizontal" ? Na(e, "yAxis", o, r) : Na(e, "xAxis", i, r);
}, tD = (e, t) => {
  var r = Oe(e), n = yr(e, t), i = mr(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? ug(e, "xAxis", n) : ug(e, "yAxis", i);
}, rD = R([Q8, w4, tD], BM), nD = (e, t, r) => {
  var n, i, o = mo(e, t);
  if (o == null)
    return 0;
  var a = yr(e, t), l = mr(e, t);
  if (a == null || l == null)
    return 0;
  var s = Oe(e), c = ex(e), {
    maxBarSize: u
  } = o, f = Be(u) ? c : u, p, h;
  return s === "horizontal" ? (p = Hr(e, "xAxis", a, r), h = Kr(e, "xAxis", a, r)) : (p = Hr(e, "yAxis", l, r), h = Kr(e, "yAxis", l, r)), (n = (i = Yn(p, h, !0)) !== null && i !== void 0 ? i : f) !== null && n !== void 0 ? n : 0;
}, ew = (e, t, r) => {
  var n = Oe(e), i = yr(e, t), o = mr(e, t);
  if (!(i == null || o == null)) {
    var a, l;
    return n === "horizontal" ? (a = Hr(e, "xAxis", i, r), l = Kr(e, "xAxis", i, r)) : (a = Hr(e, "yAxis", o, r), l = Kr(e, "yAxis", o, r)), Yn(a, l);
  }
}, iD = R([rD, ex, b4, tx, nD, ew, Z8], HM), oD = (e, t, r) => {
  var n = yr(e, t);
  if (n != null)
    return Hr(e, "xAxis", n, r);
}, aD = (e, t, r) => {
  var n = mr(e, t);
  if (n != null)
    return Hr(e, "yAxis", n, r);
}, lD = (e, t, r) => {
  var n = yr(e, t);
  if (n != null)
    return Kr(e, "xAxis", n, r);
}, sD = (e, t, r) => {
  var n = mr(e, t);
  if (n != null)
    return Kr(e, "yAxis", n, r);
}, cD = R([iD, mo], UM), uD = R([eD, mo], qM), dD = R([rt, Lu, oD, aD, lD, sD, cD, Oe, Fm, ew, uD, mo, J8], (e, t, r, n, i, o, a, l, s, c, u, f, p) => {
  var {
    chartData: h,
    dataStartIndex: g,
    dataEndIndex: v
  } = s;
  if (!(f == null || a == null || t == null || l !== "horizontal" && l !== "vertical" || r == null || n == null || i == null || o == null || c == null)) {
    var {
      data: y
    } = f, m;
    if (y != null && y.length > 0 ? m = y : m = h?.slice(g, v + 1), m != null)
      return LD({
        layout: l,
        barSettings: f,
        pos: a,
        parentViewBox: t,
        bandSize: c,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: o,
        stackedData: u,
        displayedData: m,
        offset: e,
        cells: p,
        dataStartIndex: g
      });
  }
}), fD = ["index"];
function pu() {
  return pu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pu.apply(null, arguments);
}
function pD(e, t) {
  if (e == null) return {};
  var r, n, i = hD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function hD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var tw = /* @__PURE__ */ At(void 0), vD = (e) => {
  var t = $t(tw);
  if (t != null)
    return t.stackId;
  if (e != null)
    return vm(e);
}, gD = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), yD = (e) => {
  var t = $t(tw);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(gD(r, e), ")");
  }
}, rw = (e) => {
  var {
    index: t
  } = e, r = pD(e, fD), n = yD(t);
  return /* @__PURE__ */ P.createElement(ct, pu({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, mD = ["onMouseEnter", "onMouseLeave", "onClick"], xD = ["value", "background", "tooltipPosition"], bD = ["id"], wD = ["onMouseEnter", "onClick", "onMouseLeave"];
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qr.apply(null, arguments);
}
function w0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? w0(Object(r), !0).forEach(function(n) {
      jD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jD(e, t, r) {
  return (t = SD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SD(e) {
  var t = OD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function OD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ua(e, t) {
  if (e == null) return {};
  var r, n, i = PD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var CD = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: o
  } = e;
  return [{
    inactive: o,
    dataKey: t,
    type: i,
    color: n,
    value: sl(r, t),
    payload: e
  }];
}, kD = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: o,
    hide: a,
    unit: l,
    tooltipType: s,
    id: c
  } = e, u = {
    dataDefinedOnItem: void 0,
    getPosition: Pn,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: sl(o, t),
      hide: a,
      type: s,
      color: i,
      unit: l,
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ P.createElement(T1, {
    tooltipEntrySettings: u
  });
});
function _D(e) {
  var t = ae(jn), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: o
  } = e, {
    onMouseEnter: a,
    onMouseLeave: l,
    onClick: s
  } = o, c = Ua(o, mD), u = _1(a, n, o.id), f = E1(l), p = A1(s, n, o.id);
  if (!i || r == null)
    return null;
  var h = Xi(i);
  return /* @__PURE__ */ P.createElement(zt, {
    zIndex: YM(i, Je.barBackground)
  }, r.map((g, v) => {
    var {
      value: y,
      background: m,
      tooltipPosition: w
    } = g, b = Ua(g, xD);
    if (!m)
      return null;
    var x = u(g, v), j = f(g, v), S = p(g, v), C = xt(xt(xt(xt(xt({
      option: i,
      isActive: String(v) === t
    }, b), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, m), h), Au(c, g, v)), {}, {
      onMouseEnter: x,
      onMouseLeave: j,
      onClick: S,
      dataKey: n,
      index: v,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ P.createElement(Jd, qr({
      key: "background-bar-".concat(v)
    }, C));
  }));
}
function ED(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, i = n?.map((o) => {
    var a = {
      x: o.x,
      y: o.y,
      width: o.width,
      lowerWidth: o.width,
      upperWidth: o.width,
      height: o.height
    };
    return xt(xt({}, a), {}, {
      value: o.value,
      payload: o.payload,
      parentViewBox: o.parentViewBox,
      viewBox: a,
      fill: o.fill
    });
  });
  return /* @__PURE__ */ P.createElement(w1, {
    value: t ? i : void 0
  }, r);
}
function AD(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: o,
    dataKey: a
  } = e, l = ae(jn), s = ae(Gb), c = r && String(i.originalDataIndex) === l && (s == null || a === s), [u, f] = B(!1), [p, h] = B(!1);
  Se(() => {
    var b;
    return c ? (f(!0), b = requestAnimationFrame(() => {
      h(!0);
    })) : h(!1), () => {
      cancelAnimationFrame(b);
    };
  }, [c]);
  var g = Ee(() => {
    c || f(!1);
  }, [c]), v = c && p, y = c || u, m;
  c ? r === !0 ? m = t : m = r : m = t;
  var w = /* @__PURE__ */ P.createElement(Jd, qr({}, n, {
    name: String(n.name)
  }, i, {
    isActive: v,
    option: m,
    index: o,
    dataKey: a,
    onTransitionEnd: g
  }));
  return y ? /* @__PURE__ */ P.createElement(zt, {
    zIndex: Je.activeBar
  }, /* @__PURE__ */ P.createElement(rw, {
    index: i.originalDataIndex
  }, w)) : w;
}
function TD(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: o
  } = e;
  return /* @__PURE__ */ P.createElement(Jd, qr({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: o
  }));
}
function ID(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = Ht(n)) !== null && t !== void 0 ? t : {}, {
    id: o
  } = i, a = Ua(i, bD), {
    shape: l,
    dataKey: s,
    activeBar: c
  } = n, {
    onMouseEnter: u,
    onClick: f,
    onMouseLeave: p
  } = n, h = Ua(n, wD), g = _1(u, s, o), v = E1(p), y = A1(f, s, o);
  return r ? /* @__PURE__ */ P.createElement(P.Fragment, null, r.map((m, w) => /* @__PURE__ */ P.createElement(rw, qr({
    index: m.originalDataIndex,
    key: "rectangle-".concat(m?.x, "-").concat(m?.y, "-").concat(m?.value, "-").concat(w),
    className: "recharts-bar-rectangle"
  }, Au(h, m, w), {
    onMouseEnter: g(m, w),
    onMouseLeave: v(m, w),
    onClick: y(m, w)
  }), c ? /* @__PURE__ */ P.createElement(AD, {
    shape: l,
    activeBar: c,
    baseProps: a,
    entry: m,
    index: w,
    dataKey: s
  }) : (
    /*
     * If the `activeBar` prop is falsy, then let's call the variant without hooks.
     * Using the `selectActiveTooltipIndex` selector is usually fast
     * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
     * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
     * So let's just skip the hooks altogether. That way, React can skip rendering the component,
     * and can skip the tree reconciliation for its children too.
     * Because we can't call hooks conditionally, we need to have a separate component for that.
     */
    /* @__PURE__ */ P.createElement(TD, {
      shape: l,
      baseProps: a,
      entry: m,
      index: w,
      dataKey: s
    })
  )))) : null;
}
function MD(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: o,
    animationBegin: a,
    animationDuration: l,
    animationEasing: s,
    onAnimationEnd: c,
    onAnimationStart: u
  } = t, f = r.current, p = yl(t, "recharts-bar-"), [h, g] = B(!1), v = !h, y = Ee(() => {
    typeof c == "function" && c(), g(!1);
  }, [c]), m = Ee(() => {
    typeof u == "function" && u(), g(!0);
  }, [u]);
  return /* @__PURE__ */ P.createElement(ED, {
    showLabels: v,
    rects: n
  }, /* @__PURE__ */ P.createElement(gl, {
    animationId: p,
    begin: a,
    duration: l,
    isActive: o,
    easing: s,
    onAnimationEnd: y,
    onAnimationStart: m,
    key: p
  }, (w) => {
    var b = w === 1 ? n : n?.map((x, j) => {
      var S = f && f[j];
      if (S)
        return xt(xt({}, x), {}, {
          x: ze(S.x, x.x, w),
          y: ze(S.y, x.y, w),
          width: ze(S.width, x.width, w),
          height: ze(S.height, x.height, w)
        });
      if (i === "horizontal") {
        var C = ze(0, x.height, w), _ = ze(x.stackedBarStart, x.y, w);
        return xt(xt({}, x), {}, {
          y: _,
          height: C
        });
      }
      var E = ze(0, x.width, w), T = ze(x.stackedBarStart, x.x, w);
      return xt(xt({}, x), {}, {
        width: E,
        x: T
      });
    });
    return w > 0 && (r.current = b ?? null), b == null ? null : /* @__PURE__ */ P.createElement(ct, null, /* @__PURE__ */ P.createElement(ID, {
      props: t,
      data: b
    }));
  }), /* @__PURE__ */ P.createElement(S1, {
    label: t.label
  }), t.children);
}
function DD(e) {
  var t = ge(null);
  return /* @__PURE__ */ P.createElement(MD, {
    previousRectanglesRef: t,
    props: e
  });
}
var nw = 0, RD = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // getValueByDataKey does not validate the output type
    errorVal: qe(e, t)
  };
};
class ND extends B0 {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: o,
      yAxisId: a,
      needClip: l,
      background: s,
      id: c
    } = this.props;
    if (t || r == null)
      return null;
    var u = Pe("recharts-bar", i), f = c;
    return /* @__PURE__ */ P.createElement(ct, {
      className: u,
      id: c
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(q1, {
      clipPathId: f,
      xAxisId: o,
      yAxisId: a
    })), /* @__PURE__ */ P.createElement(ct, {
      className: "recharts-bar-rectangles",
      clipPath: l ? "url(#clipPath-".concat(f, ")") : void 0
    }, /* @__PURE__ */ P.createElement(_D, {
      data: r,
      dataKey: n,
      background: s,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ P.createElement(DD, this.props)));
  }
}
var $D = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: nw,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Je.bar
};
function zD(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: o,
    activeBar: a,
    animationBegin: l,
    animationDuration: s,
    animationEasing: c,
    isAnimationActive: u
  } = e, {
    needClip: f
  } = Zd(t, r), p = Cn(), h = dt(), g = NI(e.children, Hd), v = ae((w) => dD(w, e.id, h, g));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var y, m = v?.[0];
  return m == null || m.height == null || m.width == null ? y = 0 : y = p === "vertical" ? m.height / 2 : m.width / 2, /* @__PURE__ */ P.createElement(y8, {
    xAxisId: t,
    yAxisId: r,
    data: v,
    dataPointFormatter: RD,
    errorBarOffset: y
  }, /* @__PURE__ */ P.createElement(ND, qr({}, e, {
    layout: p,
    needClip: f,
    data: v,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: o,
    activeBar: a,
    animationBegin: l,
    animationDuration: s,
    animationEasing: c,
    isAnimationActive: u
  })));
}
function LD(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n,
      hasCustomShape: i
    },
    pos: o,
    bandSize: a,
    xAxis: l,
    yAxis: s,
    xAxisTicks: c,
    yAxisTicks: u,
    stackedData: f,
    displayedData: p,
    offset: h,
    cells: g,
    parentViewBox: v,
    dataStartIndex: y
  } = e, m = t === "horizontal" ? s : l, w = f ? m.scale.domain() : null, b = xP({
    numericAxis: m
  }), x = m.scale.map(b);
  return p.map((j, S) => {
    var C, _, E, T, D, k;
    if (f) {
      var W = f[S + y];
      if (W == null)
        return null;
      C = hP(W, w);
    } else
      C = qe(j, r), Array.isArray(C) || (C = [b, C]);
    var F = Y8(n, nw)(C[1], S);
    if (t === "horizontal") {
      var Z, q = s.scale.map(C[0]), ie = s.scale.map(C[1]);
      if (q == null || ie == null)
        return null;
      _ = oh({
        axis: l,
        ticks: c,
        bandSize: a,
        offset: o.offset,
        entry: j,
        index: S
      }), E = (Z = ie ?? q) !== null && Z !== void 0 ? Z : void 0, T = o.size;
      var z = q - ie;
      if (D = Zt(z) ? 0 : z, k = {
        x: _,
        y: h.top,
        width: T,
        height: h.height
      }, Math.abs(F) > 0 && Math.abs(D) < Math.abs(F)) {
        var L = Ct(D || F) * (Math.abs(F) - Math.abs(D));
        E -= L, D += L;
      }
    } else {
      var V = l.scale.map(C[0]), N = l.scale.map(C[1]);
      if (V == null || N == null)
        return null;
      if (_ = V, E = oh({
        axis: s,
        ticks: u,
        bandSize: a,
        offset: o.offset,
        entry: j,
        index: S
      }), T = N - V, D = o.size, k = {
        x: h.left,
        y: E,
        width: h.width,
        height: D
      }, Math.abs(F) > 0 && Math.abs(T) < Math.abs(F)) {
        var $ = Ct(T || F) * (Math.abs(F) - Math.abs(T));
        T += $;
      }
    }
    if (_ == null || E == null || T == null || D == null || !i && (T === 0 || D === 0))
      return null;
    var J = xt(xt({}, j), {}, {
      stackedBarStart: x,
      x: _,
      y: E,
      width: T,
      height: D,
      value: f ? C : C[1],
      payload: j,
      background: k,
      tooltipPosition: {
        x: _ + T / 2,
        y: E + D / 2
      },
      parentViewBox: v,
      originalDataIndex: S
    }, g && g[S] && g[S].props);
    return J;
  }).filter(Boolean);
}
function BD(e) {
  var t = jt(e, $D), r = vD(t.stackId), n = dt();
  return /* @__PURE__ */ P.createElement(M1, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(I1, {
    legendPayload: CD(t)
  }), /* @__PURE__ */ P.createElement(kD, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ P.createElement(R1, {
    type: "bar",
    id: i,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: r,
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: n,
    hasCustomShape: t.shape != null
  }), /* @__PURE__ */ P.createElement(zt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(zD, qr({}, t, {
    id: i
  })))));
}
var hu = /* @__PURE__ */ P.memo(BD, ao);
hu.displayName = "Bar";
var WD = ["domain", "range"], FD = ["domain", "range"];
function j0(e, t) {
  if (e == null) return {};
  var r, n, i = VD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function VD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function S0(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function iw(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = j0(e, WD), {
    domain: o,
    range: a
  } = t, l = j0(t, FD);
  return !S0(r, o) || !S0(n, a) ? !1 : ao(i, l);
}
var KD = ["type"], HD = ["dangerouslySetInnerHTML", "ticks", "scale"], qD = ["id", "scale"];
function vu() {
  return vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vu.apply(null, arguments);
}
function O0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function P0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? O0(Object(r), !0).forEach(function(n) {
      UD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UD(e, t, r) {
  return (t = YD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YD(e) {
  var t = GD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gu(e, t) {
  if (e == null) return {};
  var r, n, i = XD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function XD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ZD(e) {
  var t = $e(), r = ge(null), n = Vu(), {
    type: i
  } = e, o = gu(e, KD), a = wl(n, "xAxis", i), l = er(() => {
    if (a != null)
      return P0(P0({}, o), {}, {
        type: a
      });
  }, [o, a]);
  return Et(() => {
    l != null && (r.current === null ? t(PM(l)) : r.current !== l && t(CM({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), Et(() => () => {
    r.current && (t(kM(r.current)), r.current = null);
  }, [t]), null;
}
var JD = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = ae(Lu), i = dt(), o = "xAxis", a = ae((m) => kb(m, o, t, i)), l = ae((m) => Ob(m, t)), s = ae((m) => n3(m, t)), c = ae((m) => qx(m, t));
  if (l == null || s == null || c == null)
    return null;
  var {
    dangerouslySetInnerHTML: u,
    ticks: f,
    scale: p
  } = e, h = gu(e, HD), {
    id: g,
    scale: v
  } = c, y = gu(c, qD);
  return /* @__PURE__ */ P.createElement(Xd, vu({}, h, y, {
    x: s.x,
    y: s.y,
    width: l.width,
    height: l.height,
    className: Pe("recharts-".concat(o, " ").concat(o), r),
    viewBox: n,
    ticks: a,
    axisType: o,
    axisId: t
  }));
}, QD = {
  allowDataOverflow: Ge.allowDataOverflow,
  allowDecimals: Ge.allowDecimals,
  allowDuplicatedCategory: Ge.allowDuplicatedCategory,
  angle: Ge.angle,
  axisLine: Pr.axisLine,
  height: Ge.height,
  hide: !1,
  includeHidden: Ge.includeHidden,
  interval: Ge.interval,
  label: !1,
  minTickGap: Ge.minTickGap,
  mirror: Ge.mirror,
  orientation: Ge.orientation,
  padding: Ge.padding,
  reversed: Ge.reversed,
  scale: Ge.scale,
  tick: Ge.tick,
  tickCount: Ge.tickCount,
  tickLine: Pr.tickLine,
  tickSize: Pr.tickSize,
  type: Ge.type,
  niceTicks: Ge.niceTicks,
  xAxisId: 0
}, eR = (e) => {
  var t = jt(e, QD);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(ZD, {
    allowDataOverflow: t.allowDataOverflow,
    allowDecimals: t.allowDecimals,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    angle: t.angle,
    dataKey: t.dataKey,
    domain: t.domain,
    height: t.height,
    hide: t.hide,
    id: t.xAxisId,
    includeHidden: t.includeHidden,
    interval: t.interval,
    minTickGap: t.minTickGap,
    mirror: t.mirror,
    name: t.name,
    orientation: t.orientation,
    padding: t.padding,
    reversed: t.reversed,
    scale: t.scale,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ P.createElement(JD, t));
}, zl = /* @__PURE__ */ P.memo(eR, iw);
zl.displayName = "XAxis";
var tR = ["type"], rR = ["dangerouslySetInnerHTML", "ticks", "scale"], nR = ["id", "scale"];
function yu() {
  return yu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yu.apply(null, arguments);
}
function C0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function k0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? C0(Object(r), !0).forEach(function(n) {
      iR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iR(e, t, r) {
  return (t = oR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oR(e) {
  var t = aR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mu(e, t) {
  if (e == null) return {};
  var r, n, i = lR(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function lR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function sR(e) {
  var t = $e(), r = ge(null), n = Vu(), {
    type: i
  } = e, o = mu(e, tR), a = wl(n, "yAxis", i), l = er(() => {
    if (a != null)
      return k0(k0({}, o), {}, {
        type: a
      });
  }, [a, o]);
  return Et(() => {
    l != null && (r.current === null ? t(_M(l)) : r.current !== l && t(EM({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), Et(() => () => {
    r.current && (t(AM(r.current)), r.current = null);
  }, [t]), null;
}
function cR(e) {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, o = ge(null), a = ge(null), l = ae(Lu), s = dt(), c = $e(), u = "yAxis", f = ae((S) => Pb(S, t)), p = ae((S) => o3(S, t)), h = ae((S) => kb(S, u, t, s)), g = ae((S) => Ux(S, t));
  if (Et(() => {
    if (!(n !== "auto" || !f || Ud(i) || /* @__PURE__ */ Dt(i) || g == null)) {
      var S = o.current;
      if (S) {
        var C = S.getCalculatedWidth();
        Math.round(f.width) !== Math.round(C) && c(TM({
          id: t,
          width: C
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    h,
    f,
    c,
    i,
    t,
    n,
    g
  ]), f == null || p == null || g == null)
    return null;
  var {
    dangerouslySetInnerHTML: v,
    ticks: y,
    scale: m
  } = e, w = mu(e, rR), {
    id: b,
    scale: x
  } = g, j = mu(g, nR);
  return /* @__PURE__ */ P.createElement(Xd, yu({}, w, j, {
    ref: o,
    labelRef: a,
    x: p.x,
    y: p.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: f.width,
    height: f.height,
    className: Pe("recharts-".concat(u, " ").concat(u), r),
    viewBox: l,
    ticks: h,
    axisType: u,
    axisId: t
  }));
}
var uR = {
  allowDataOverflow: Xe.allowDataOverflow,
  allowDecimals: Xe.allowDecimals,
  allowDuplicatedCategory: Xe.allowDuplicatedCategory,
  angle: Xe.angle,
  axisLine: Pr.axisLine,
  hide: !1,
  includeHidden: Xe.includeHidden,
  interval: Xe.interval,
  label: !1,
  minTickGap: Xe.minTickGap,
  mirror: Xe.mirror,
  orientation: Xe.orientation,
  padding: Xe.padding,
  reversed: Xe.reversed,
  scale: Xe.scale,
  tick: Xe.tick,
  tickCount: Xe.tickCount,
  tickLine: Pr.tickLine,
  tickSize: Pr.tickSize,
  type: Xe.type,
  niceTicks: Xe.niceTicks,
  width: Xe.width,
  yAxisId: 0
}, dR = (e) => {
  var t = jt(e, uR);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(sR, {
    interval: t.interval,
    id: t.yAxisId,
    scale: t.scale,
    type: t.type,
    domain: t.domain,
    allowDataOverflow: t.allowDataOverflow,
    dataKey: t.dataKey,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    allowDecimals: t.allowDecimals,
    tickCount: t.tickCount,
    padding: t.padding,
    includeHidden: t.includeHidden,
    reversed: t.reversed,
    ticks: t.ticks,
    width: t.width,
    orientation: t.orientation,
    mirror: t.mirror,
    hide: t.hide,
    unit: t.unit,
    name: t.name,
    angle: t.angle,
    minTickGap: t.minTickGap,
    tick: t.tick,
    tickFormatter: t.tickFormatter,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ P.createElement(cR, t));
}, Ll = /* @__PURE__ */ P.memo(dR, iw);
Ll.displayName = "YAxis";
var fR = (e, t) => t, Qd = R([fR, Oe, sx, it, Hb, Mr, kT, rt], DT);
function pR(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function ef(e) {
  var t = e.currentTarget.getBoundingClientRect(), r, n;
  if (pR(e)) {
    var i = e.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var o = e.currentTarget;
    r = o.offsetWidth > 0 ? t.width / o.offsetWidth : 1, n = o.offsetHeight > 0 ? t.height / o.offsetHeight : 1;
  }
  var a = (l, s) => ({
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    relativeX: Math.round((l - t.left) / r),
    relativeY: Math.round((s - t.top) / n)
  });
  return "touches" in e ? Array.from(e.touches).map((l) => a(l.clientX, l.clientY)) : a(e.clientX, e.clientY);
}
var ow = Rt("mouseClick"), aw = to();
aw.startListening({
  actionCreator: ow,
  effect: (e, t) => {
    var r = e.payload, n = Qd(t.getState(), ef(r));
    n?.activeIndex != null && t.dispatch(w3({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var xu = Rt("mouseMove"), lw = to(), $n = null, Jr = null, wc = null;
lw.startListening({
  actionCreator: xu,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), {
      throttleDelay: i,
      throttledEvents: o
    } = n.eventSettings, a = o === "all" || o?.includes("mousemove");
    $n !== null && (cancelAnimationFrame($n), $n = null), Jr !== null && (typeof i != "number" || !a) && (clearTimeout(Jr), Jr = null), wc = ef(r);
    var l = () => {
      var s = t.getState(), c = go(s, s.tooltip.settings.shared);
      if (!wc) {
        $n = null, Jr = null;
        return;
      }
      if (c === "axis") {
        var u = Qd(s, wc);
        u?.activeIndex != null ? t.dispatch(Rb({
          activeIndex: u.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: u.activeCoordinate
        })) : t.dispatch(Db());
      }
      $n = null, Jr = null;
    };
    if (!a) {
      l();
      return;
    }
    i === "raf" ? $n = requestAnimationFrame(l) : typeof i == "number" && Jr === null && (Jr = setTimeout(l, i));
  }
});
function hR(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var _0 = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index",
  baseValue: void 0,
  reverseStackOrder: !1
}, sw = gt({
  name: "rootProps",
  initialState: _0,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : _0.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), vR = sw.reducer, {
  updateOptions: gR
} = sw.actions, yR = null, mR = {
  updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
}, cw = gt({
  name: "polarOptions",
  initialState: yR,
  reducers: mR
}), {
  updatePolarOptions: T$
} = cw.actions, xR = cw.reducer, uw = Rt("keyDown"), dw = Rt("focus"), fw = Rt("blur"), Bl = to(), zn = null, Qr = null, Ho = null;
Bl.startListening({
  actionCreator: uw,
  effect: (e, t) => {
    Ho = e.payload, zn !== null && (cancelAnimationFrame(zn), zn = null);
    var r = t.getState(), {
      throttleDelay: n,
      throttledEvents: i
    } = r.eventSettings, o = i === "all" || i.includes("keydown");
    Qr !== null && (typeof n != "number" || !o) && (clearTimeout(Qr), Qr = null);
    var a = () => {
      try {
        var l = t.getState(), s = l.rootProps.accessibilityLayer !== !1;
        if (!s)
          return;
        var {
          keyboardInteraction: c
        } = l.tooltip, u = Ho;
        if (u !== "ArrowRight" && u !== "ArrowLeft" && u !== "Enter")
          return;
        var f = Ti(c, wn(l), Qn(l), ti(l)), p = f == null ? -1 : Number(f), h = !Number.isFinite(p) || p < 0, g = Mr(l), v = wn(l), y = go(l, l.tooltip.settings.shared);
        if (u === "Enter") {
          if (h)
            return;
          var m = La(l, y, "hover", String(c.index));
          t.dispatch(za({
            active: !c.active,
            activeIndex: c.index,
            activeCoordinate: m
          }));
          return;
        }
        var w = u3(l), b = w === "left-to-right" ? 1 : -1, x = u === "ArrowRight" ? 1 : -1, j;
        if (h) {
          var S = Qn(l), C = ti(l), _ = x * b, E = (F) => ({
            active: !1,
            index: String(F),
            dataKey: void 0,
            graphicalItemId: void 0,
            coordinate: void 0
          });
          if (j = -1, _ > 0) {
            for (var T = 0; T < v.length; T++)
              if (Ti(E(T), v, S, C) != null) {
                j = T;
                break;
              }
          } else
            for (var D = v.length - 1; D >= 0; D--)
              if (Ti(E(D), v, S, C) != null) {
                j = D;
                break;
              }
          if (j < 0)
            return;
        } else {
          j = p + x * b;
          var k = g?.length || v.length;
          if (k === 0 || j >= k || j < 0)
            return;
        }
        var W = La(l, y, "hover", String(j));
        t.dispatch(za({
          active: !0,
          activeIndex: j.toString(),
          activeCoordinate: W
        }));
      } finally {
        zn = null, Qr = null;
      }
    };
    if (!o) {
      a();
      return;
    }
    n === "raf" ? zn = requestAnimationFrame(a) : typeof n == "number" && Qr === null && (a(), Ho = null, Qr = setTimeout(() => {
      Ho ? a() : (Qr = null, zn = null);
    }, n));
  }
});
Bl.startListening({
  actionCreator: dw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var o = "0", a = go(r, r.tooltip.settings.shared), l = La(r, a, "hover", String(o));
        t.dispatch(za({
          active: !0,
          activeIndex: o,
          activeCoordinate: l
        }));
      }
    }
  }
});
Bl.startListening({
  actionCreator: fw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      i.active && t.dispatch(za({
        active: !1,
        activeIndex: i.index,
        activeCoordinate: i.coordinate
      }));
    }
  }
});
function pw(e) {
  e.persist();
  var {
    currentTarget: t
  } = e;
  return new Proxy(e, {
    get: (r, n) => {
      if (n === "currentTarget")
        return t;
      var i = Reflect.get(r, n);
      return typeof i == "function" ? i.bind(r) : i;
    }
  });
}
var Ft = Rt("externalEvent"), hw = to(), qo = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map(), jc = /* @__PURE__ */ new Map();
hw.startListening({
  actionCreator: Ft,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      var i = n.type, o = pw(n);
      jc.set(i, {
        handler: r,
        reactEvent: o
      });
      var a = qo.get(i);
      a !== void 0 && (cancelAnimationFrame(a), qo.delete(i));
      var l = t.getState(), {
        throttleDelay: s,
        throttledEvents: c
      } = l.eventSettings, u = c, f = u === "all" || u?.includes(i), p = Pi.get(i);
      p !== void 0 && (typeof s != "number" || !f) && (clearTimeout(p), Pi.delete(i));
      var h = () => {
        var y = jc.get(i);
        try {
          if (!y)
            return;
          var {
            handler: m,
            reactEvent: w
          } = y, b = t.getState(), x = {
            activeCoordinate: fT(b),
            activeDataKey: Gb(b),
            activeIndex: jn(b),
            activeLabel: Yb(b),
            activeTooltipIndex: jn(b),
            isTooltipActive: pT(b)
          };
          m && m(x, w);
        } finally {
          qo.delete(i), Pi.delete(i), jc.delete(i);
        }
      };
      if (!f) {
        h();
        return;
      }
      if (s === "raf") {
        var g = requestAnimationFrame(h);
        qo.set(i, g);
      } else if (typeof s == "number") {
        if (!Pi.has(i)) {
          h();
          var v = setTimeout(h, s);
          Pi.set(i, v);
        }
      } else
        h();
    }
  }
});
var bR = R([ui], (e) => e.tooltipItemPayloads), wR = R([bR, (e, t) => t, (e, t, r) => r], (e, t, r) => {
  if (t != null) {
    var n = e.find((o) => o.settings.graphicalItemId === r);
    if (n != null) {
      var {
        getPosition: i
      } = n;
      if (i != null)
        return i(t);
    }
  }
}), vw = Rt("touchMove"), gw = to(), en = null, Nr = null, E0 = null, Ci = null;
gw.startListening({
  actionCreator: vw,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      Ci = pw(r);
      var n = t.getState(), {
        throttleDelay: i,
        throttledEvents: o
      } = n.eventSettings, a = o === "all" || o.includes("touchmove");
      en !== null && (cancelAnimationFrame(en), en = null), Nr !== null && (typeof i != "number" || !a) && (clearTimeout(Nr), Nr = null), E0 = Array.from(r.touches).map((s) => ef({
        clientX: s.clientX,
        clientY: s.clientY,
        currentTarget: r.currentTarget
      }));
      var l = () => {
        if (Ci != null) {
          var s = t.getState(), c = go(s, s.tooltip.settings.shared);
          if (c === "axis") {
            var u, f = (u = E0) === null || u === void 0 ? void 0 : u[0];
            if (f == null) {
              en = null, Nr = null;
              return;
            }
            var p = Qd(s, f);
            p?.activeIndex != null && t.dispatch(Rb({
              activeIndex: p.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: p.activeCoordinate
            }));
          } else if (c === "item") {
            var h, g = Ci.touches[0];
            if (document.elementFromPoint == null || g == null)
              return;
            var v = document.elementFromPoint(g.clientX, g.clientY);
            if (!v || !v.getAttribute)
              return;
            var y = v.getAttribute(CP), m = (h = v.getAttribute(kP)) !== null && h !== void 0 ? h : void 0, w = En(s).find((j) => j.id === m);
            if (y == null || w == null || m == null)
              return;
            var {
              dataKey: b
            } = w, x = wR(s, y, m);
            t.dispatch(Mb({
              activeDataKey: b,
              activeIndex: y,
              activeCoordinate: x,
              activeGraphicalItemId: m
            }));
          }
          en = null, Nr = null;
        }
      };
      if (!a) {
        l();
        return;
      }
      i === "raf" ? en = requestAnimationFrame(l) : typeof i == "number" && Nr === null && (l(), Ci = null, Nr = setTimeout(() => {
        Ci ? l() : (Nr = null, en = null);
      }, i));
    }
  }
});
var yw = {
  throttleDelay: "raf",
  throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
}, mw = gt({
  name: "eventSettings",
  initialState: yw,
  reducers: {
    setEventSettings: (e, t) => {
      t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents);
    }
  }
}), {
  setEventSettings: jR
} = mw.actions, SR = mw.reducer, OR = Dy({
  brush: XM,
  cartesianAxis: IM,
  chartData: u6,
  errorBars: d8,
  eventSettings: SR,
  graphicalItems: uM,
  layout: cP,
  legend: xC,
  options: o6,
  polarAxis: AI,
  polarOptions: xR,
  referenceElements: i5,
  renderedTicks: M5,
  rootProps: vR,
  tooltip: j3,
  zIndex: UT
}), PR = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return DO({
    reducer: OR,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([aw.middleware, lw.middleware, Bl.middleware, hw.middleware, gw.middleware]);
    },
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (n) => {
      var i = n;
      return typeof n == "function" && (i = n()), i.concat(Qy({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: hR
      },
      name: "recharts-".concat(r)
    }
  });
};
function CR(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = dt(), o = ge(null);
  if (i)
    return r;
  o.current == null && (o.current = PR(t, n));
  var a = Iu;
  return /* @__PURE__ */ P.createElement(zC, {
    context: a,
    store: o.current
  }, r);
}
function kR(e) {
  var {
    layout: t,
    margin: r
  } = e, n = $e(), i = dt();
  return Se(() => {
    i || (n(aP(t)), n(oP(r)));
  }, [n, i, t, r]), null;
}
var _R = /* @__PURE__ */ wu(kR, ao);
function ER(e) {
  var t = $e();
  return Se(() => {
    t(gR(e));
  }, [t, e]), null;
}
var AR = (e) => {
  var t = $e();
  return Se(() => {
    t(jR(e));
  }, [t, e]), null;
}, TR = /* @__PURE__ */ wu(AR, ao);
function A0(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = ge(null), i = $e();
  return Et(() => (n.current && i(HT({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i(qT({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ P.createElement("g", {
    tabIndex: -1,
    ref: n,
    className: "recharts-zIndex-layer_".concat(t)
  });
}
function T0(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = ae(NT);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((a) => a < 0), o = n.filter((a) => a > 0);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, i.map((a) => /* @__PURE__ */ P.createElement(A0, {
    key: a,
    zIndex: a,
    isPanorama: r
  })), t, o.map((a) => /* @__PURE__ */ P.createElement(A0, {
    key: a,
    zIndex: a,
    isPanorama: r
  })));
}
var IR = ["children"];
function MR(e, t) {
  if (e == null) return {};
  var r, n, i = DR(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function DR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ya.apply(null, arguments);
}
var RR = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, NR = /* @__PURE__ */ ut((e, t) => {
  var r = wm(), n = jm(), i = Im();
  if (!dr(r) || !dr(n))
    return null;
  var {
    children: o,
    otherAttributes: a,
    title: l,
    desc: s
  } = e, c, u;
  return a != null && (typeof a.tabIndex == "number" ? c = a.tabIndex : c = i ? 0 : void 0, typeof a.role == "string" ? u = a.role : u = i ? "application" : void 0), /* @__PURE__ */ P.createElement(X0, Ya({}, a, {
    title: l,
    desc: s,
    role: u,
    tabIndex: c,
    width: r,
    height: n,
    style: RR,
    ref: t
  }), o);
}), $R = (e) => {
  var {
    children: t
  } = e, r = ae(fl);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: o,
    x: a
  } = r;
  return /* @__PURE__ */ P.createElement(X0, {
    width: n,
    height: i,
    x: a,
    y: o
  }, t);
}, I0 = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r
  } = e, n = MR(e, IR), i = dt();
  return i ? /* @__PURE__ */ P.createElement($R, null, /* @__PURE__ */ P.createElement(T0, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ P.createElement(NR, Ya({
    ref: t
  }, n), /* @__PURE__ */ P.createElement(T0, {
    isPanorama: !1
  }, r));
});
function zR() {
  var e = $e(), [t, r] = B(null), n = ae(PP);
  return Se(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), o = i.width / t.offsetWidth;
      pe(o) && o !== n && e(sP(o));
    }
  }, [t, e, n]), r;
}
function M0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function LR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? M0(Object(r), !0).forEach(function(n) {
      BR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BR(e, t, r) {
  return (t = WR(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WR(e) {
  var t = FR(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FR(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vr.apply(null, arguments);
}
var VR = () => (x6(), null);
function Ga(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var KR = /* @__PURE__ */ ut((e, t) => {
  var r, n, i = ge(null), [o, a] = B({
    containerWidth: Ga((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ga((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), l = Ee((c, u) => {
    a((f) => {
      var p = Math.round(c), h = Math.round(u);
      return f.containerWidth === p && f.containerHeight === h ? f : {
        containerWidth: p,
        containerHeight: h
      };
    });
  }, []), s = Ee((c) => {
    if (typeof t == "function" && t(c), i.current != null && (i.current.disconnect(), i.current = null), c != null && typeof ResizeObserver < "u") {
      var {
        width: u,
        height: f
      } = c.getBoundingClientRect();
      l(u, f);
      var p = (g) => {
        var v = g[0];
        if (v != null) {
          var {
            width: y,
            height: m
          } = v.contentRect;
          l(y, m);
        }
      }, h = new ResizeObserver(p);
      h.observe(c), i.current = h;
    }
  }, [t, l]);
  return Se(() => () => {
    var c = i.current;
    c?.disconnect();
  }, [l]), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(io, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Vr({
    ref: s
  }, e)));
}), HR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, o] = B({
    containerWidth: Ga(r),
    containerHeight: Ga(n)
  }), a = Ee((s, c) => {
    o((u) => {
      var f = Math.round(s), p = Math.round(c);
      return u.containerWidth === f && u.containerHeight === p ? u : {
        containerWidth: f,
        containerHeight: p
      };
    });
  }, []), l = Ee((s) => {
    if (typeof t == "function" && t(s), s != null) {
      var {
        width: c,
        height: u
      } = s.getBoundingClientRect();
      a(c, u);
    }
  }, [t, a]);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(io, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Vr({
    ref: l
  }, e)));
}), qR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(io, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Vr({
    ref: t
  }, e)));
}), UR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ P.createElement(HR, Vr({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ P.createElement(qR, Vr({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(io, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Vr({
    ref: t
  }, e)));
});
function YR(e) {
  return e ? KR : UR;
}
var GR = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: o,
    onContextMenu: a,
    onDoubleClick: l,
    onMouseDown: s,
    onMouseEnter: c,
    onMouseLeave: u,
    onMouseMove: f,
    onMouseUp: p,
    onTouchEnd: h,
    onTouchMove: g,
    onTouchStart: v,
    style: y,
    width: m,
    responsive: w,
    dispatchTouchEvents: b = !0
  } = e, x = ge(null), j = $e(), [S, C] = B(null), [_, E] = B(null), T = zR(), D = Bu(), k = D?.width > 0 ? D.width : m, W = D?.height > 0 ? D.height : i, F = Ee((G) => {
    T(G), typeof t == "function" && t(G), C(G), E(G), G != null && (x.current = G);
  }, [T, t, C, E]), Z = Ee((G) => {
    j(ow(G)), j(Ft({
      handler: o,
      reactEvent: G
    }));
  }, [j, o]), q = Ee((G) => {
    j(xu(G)), j(Ft({
      handler: c,
      reactEvent: G
    }));
  }, [j, c]), ie = Ee((G) => {
    j(Db()), j(Ft({
      handler: u,
      reactEvent: G
    }));
  }, [j, u]), z = Ee((G) => {
    j(xu(G)), j(Ft({
      handler: f,
      reactEvent: G
    }));
  }, [j, f]), L = Ee(() => {
    j(dw());
  }, [j]), V = Ee(() => {
    j(fw());
  }, [j]), N = Ee((G) => {
    j(uw(G.key));
  }, [j]), $ = Ee((G) => {
    j(Ft({
      handler: a,
      reactEvent: G
    }));
  }, [j, a]), J = Ee((G) => {
    j(Ft({
      handler: l,
      reactEvent: G
    }));
  }, [j, l]), X = Ee((G) => {
    j(Ft({
      handler: s,
      reactEvent: G
    }));
  }, [j, s]), ee = Ee((G) => {
    j(Ft({
      handler: p,
      reactEvent: G
    }));
  }, [j, p]), he = Ee((G) => {
    j(Ft({
      handler: v,
      reactEvent: G
    }));
  }, [j, v]), se = Ee((G) => {
    b && j(vw(G)), j(Ft({
      handler: g,
      reactEvent: G
    }));
  }, [j, b, g]), de = Ee((G) => {
    j(Ft({
      handler: h,
      reactEvent: G
    }));
  }, [j, h]), Q = YR(w);
  return /* @__PURE__ */ P.createElement(n1.Provider, {
    value: S
  }, /* @__PURE__ */ P.createElement(Z2.Provider, {
    value: _
  }, /* @__PURE__ */ P.createElement(Q, {
    width: k ?? y?.width,
    height: W ?? y?.height,
    className: Pe("recharts-wrapper", n),
    style: LR({
      position: "relative",
      cursor: "default",
      width: k,
      height: W
    }, y),
    onClick: Z,
    onContextMenu: $,
    onDoubleClick: J,
    onFocus: L,
    onBlur: V,
    onKeyDown: N,
    onMouseDown: X,
    onMouseEnter: q,
    onMouseLeave: ie,
    onMouseMove: z,
    onMouseUp: ee,
    onTouchEnd: de,
    onTouchMove: se,
    onTouchStart: he,
    ref: F
  }, /* @__PURE__ */ P.createElement(VR, null), r)));
}), XR = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function ZR(e, t) {
  if (e == null) return {};
  var r, n, i = JR(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function JR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var QR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: o,
    className: a,
    style: l,
    compact: s,
    title: c,
    desc: u
  } = e, f = ZR(e, XR), p = Ht(f);
  return s ? /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(io, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement(I0, {
    otherAttributes: p,
    title: c,
    desc: u
  }, o)) : /* @__PURE__ */ P.createElement(GR, {
    className: a,
    style: l,
    width: r,
    height: n,
    responsive: i ?? !1,
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
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ P.createElement(I0, {
    otherAttributes: p,
    title: c,
    desc: u,
    ref: t
  }, /* @__PURE__ */ P.createElement(o5, null, o)));
});
function bu() {
  return bu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bu.apply(null, arguments);
}
function D0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? D0(Object(r), !0).forEach(function(n) {
      tN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tN(e, t, r) {
  return (t = rN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rN(e) {
  var t = nN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iN = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, oN = eN({
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  layout: "horizontal",
  margin: iN,
  responsive: !1,
  reverseStackOrder: !1,
  stackOffset: "none",
  syncMethod: "index"
}, yw), xw = /* @__PURE__ */ ut(function(t, r) {
  var n, i = jt(t.categoricalChartProps, oN), {
    chartName: o,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: s,
    categoricalChartProps: c
  } = t, u = {
    chartName: o,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: s,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ P.createElement(CR, {
    preloadedState: {
      options: u
    },
    reduxStoreName: (n = c.id) !== null && n !== void 0 ? n : o
  }, /* @__PURE__ */ P.createElement(GM, {
    chartData: c.data
  }), /* @__PURE__ */ P.createElement(_R, {
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ P.createElement(TR, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ P.createElement(ER, {
    baseValue: i.baseValue,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ P.createElement(QR, bu({}, i, {
    ref: r
  })));
}), aN = ["axis", "item"], lN = /* @__PURE__ */ ut((e, t) => /* @__PURE__ */ P.createElement(xw, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: aN,
  tooltipPayloadSearcher: i1,
  categoricalChartProps: e,
  ref: t
})), sN = ["axis"], bw = /* @__PURE__ */ ut((e, t) => /* @__PURE__ */ P.createElement(xw, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: sN,
  tooltipPayloadSearcher: i1,
  categoricalChartProps: e,
  ref: t
}));
const cN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ d.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ d.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ d.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), uN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: /* @__PURE__ */ d.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), dN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ d.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ d.jsx("path", { d: "M7 16h10" })
] }), fN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ d.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ d.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ d.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ d.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), R0 = [
  { month: "Aug 25", IP_Count: 2, OP_Count: 19, Therapy_Tests: 0, Lab_Tests: 31 },
  { month: "Sep 25", IP_Count: 20, OP_Count: 385, Therapy_Tests: 33, Lab_Tests: 288 },
  { month: "Oct 25", IP_Count: 25, OP_Count: 430, Therapy_Tests: 56, Lab_Tests: 326 },
  { month: "Nov 25", IP_Count: 47, OP_Count: 522, Therapy_Tests: 64, Lab_Tests: 545 },
  { month: "Dec 25", IP_Count: 22, OP_Count: 459, Therapy_Tests: 51, Lab_Tests: 651 },
  { month: "Jan 26", IP_Count: 46, OP_Count: 445, Therapy_Tests: 21, Lab_Tests: 667 },
  { month: "Feb 26", IP_Count: 39, OP_Count: 532, Therapy_Tests: 51, Lab_Tests: 653 },
  { month: "Mar 26", IP_Count: 37, OP_Count: 529, Therapy_Tests: 40, Lab_Tests: 699, IP_Count_Proj: 37, OP_Count_Proj: 529, Therapy_Tests_Proj: 40, Lab_Tests_Proj: 699 },
  { month: "Apr 26", IP_Count_Proj: 35, OP_Count_Proj: 540, Therapy_Tests_Proj: 45, Lab_Tests_Proj: 710 },
  { month: "May 26", IP_Count_Proj: 38, OP_Count_Proj: 555, Therapy_Tests_Proj: 42, Lab_Tests_Proj: 730 },
  { month: "Jun 26", IP_Count_Proj: 40, OP_Count_Proj: 570, Therapy_Tests_Proj: 48, Lab_Tests_Proj: 745 },
  { month: "Jul 26", IP_Count_Proj: 42, OP_Count_Proj: 590, Therapy_Tests_Proj: 50, Lab_Tests_Proj: 760 },
  { month: "Aug 26", IP_Count_Proj: 45, OP_Count_Proj: 605, Therapy_Tests_Proj: 55, Lab_Tests_Proj: 780 },
  { month: "Sep 26", IP_Count_Proj: 43, OP_Count_Proj: 620, Therapy_Tests_Proj: 58, Lab_Tests_Proj: 795 },
  { month: "Oct 26", IP_Count_Proj: 46, OP_Count_Proj: 640, Therapy_Tests_Proj: 60, Lab_Tests_Proj: 810 },
  { month: "Nov 26", IP_Count_Proj: 50, OP_Count_Proj: 660, Therapy_Tests_Proj: 65, Lab_Tests_Proj: 830 },
  { month: "Dec 26", IP_Count_Proj: 55, OP_Count_Proj: 680, Therapy_Tests_Proj: 70, Lab_Tests_Proj: 850 }
], pN = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: cN },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: uN },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: dN },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: fN }
};
function ww(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function N0(e, t) {
  let r = 0;
  e.forEach((i) => {
    Object.keys(t).forEach((o) => {
      const a = Number(i[o] ?? i[`${o}_Proj`] ?? 0);
      a > r && (r = a);
    });
  });
  const n = ww(r);
  return Math.max(40, n.length * 7 + 16);
}
const hN = ({ active: e, payload: t, label: r, metricsConfig: n }) => {
  if (e && t && t.length) {
    const i = t.filter((o) => {
      if (o.dataKey.endsWith("_Proj")) {
        const a = o.dataKey.replace("_Proj", "");
        if (t.some((l) => l.dataKey === a)) return !1;
      }
      return !0;
    });
    return /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "var(--chart-bg, #ffffff)", border: "1px solid var(--chart-border, #e2e8f0)", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", zIndex: 50, position: "relative", color: "var(--chart-text, #0f172a)" }, children: [
      /* @__PURE__ */ d.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid var(--chart-border-light, #f1f5f9)", paddingBottom: "4px", fontSize: "14px", color: "var(--chart-text-strong, #1e293b)" }, children: r }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: i.map((o, a) => {
        const l = o.dataKey.endsWith("_Proj"), s = l ? o.dataKey.replace("_Proj", "") : o.dataKey, c = n[s] || { label: s, color: o.color };
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: o.color } }),
            /* @__PURE__ */ d.jsxs("span", { style: { color: "var(--chart-text-muted, #475569)", fontSize: "12px", fontWeight: 500 }, children: [
              c.label,
              " ",
              l && /* @__PURE__ */ d.jsx("span", { style: { color: "var(--chart-text-lighter, #94a3b8)", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
            ] })
          ] }),
          /* @__PURE__ */ d.jsxs("span", { style: { color: "var(--chart-text, #0f172a)", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
            o.value,
            null
          ] })
        ] }, a);
      }) })
    ] });
  }
  return null;
}, I$ = ({
  title: e = "Annual Patient Trends",
  subtitle: t,
  dateRangeBadge: r,
  data: n = R0,
  xAxisKey: i = "month",
  metricsConfig: o = pN,
  className: a,
  height: l
}) => {
  const s = n ?? R0, [c, u] = B(() => {
    const p = {};
    return Object.keys(o).forEach((h) => p[h] = !0), p;
  }), f = (p) => {
    u((h) => ({
      ...h,
      [p]: !h[p]
    }));
  };
  return /* @__PURE__ */ d.jsx("div", { className: a, style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box", height: l === "100%" ? "100%" : "auto" }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100%", width: "100%", backgroundColor: "var(--chart-bg, #ffffff)", borderRadius: "12px", border: "1px solid var(--chart-border, #e2e8f0)", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", overflow: "hidden" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { padding: "20px 24px", borderBottom: "1px solid var(--chart-border-light, #f1f5f9)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsxs("h2", { style: { fontSize: "18px", fontWeight: 700, margin: "0 0 4px 0", color: "var(--chart-text-strong, #0f172a)", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: "8px" }, children: [
          e,
          r && /* @__PURE__ */ d.jsx("span", { style: { fontSize: "11px", fontWeight: 500, color: "var(--chart-text-muted, #64748b)", backgroundColor: "var(--chart-bg-light, #f1f5f9)", padding: "2px 8px", borderRadius: "12px", letterSpacing: "0" }, children: r })
        ] }),
        t && /* @__PURE__ */ d.jsx("p", { style: { fontSize: "13px", color: "var(--chart-text-muted, #64748b)", margin: 0 }, children: t })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(o).map(([p, h]) => {
        const g = c[p], v = h.icon;
        return /* @__PURE__ */ d.jsxs(
          "button",
          {
            onClick: () => f(p),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 500,
              cursor: "pointer",
              border: "1px solid",
              backgroundColor: g ? `${h.color}18` : "transparent",
              color: g ? h.color : "var(--chart-text-muted, #64748b)",
              borderColor: g ? h.color : "var(--chart-border, #e2e8f0)",
              transition: "all 0.2s ease-out"
            },
            children: [
              v && /* @__PURE__ */ d.jsx(
                v,
                {
                  size: 14,
                  style: { color: g ? h.color : "currentColor", opacity: g ? 1 : 0.5, transition: "all 0.2s ease-out" }
                }
              ),
              h.shortLabel
            ]
          },
          p
        );
      }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { padding: "16px", minHeight: l === "100%" ? 250 : 320, flex: 1, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ d.jsx(Wu, { width: "99%", height: "100%", minHeight: 320, children: /* @__PURE__ */ d.jsxs(
      bw,
      {
        data: s,
        margin: { top: 20, right: 30, left: N0(s, o) - 40, bottom: 0 },
        children: [
          /* @__PURE__ */ d.jsx("defs", { children: Object.entries(o).map(([p, h]) => /* @__PURE__ */ d.jsxs("linearGradient", { id: `color${p}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ d.jsx("stop", { offset: "5%", stopColor: h.color, stopOpacity: 0.3 }),
            /* @__PURE__ */ d.jsx("stop", { offset: "95%", stopColor: h.color, stopOpacity: 0 })
          ] }, `color${p}`)) }),
          /* @__PURE__ */ d.jsx($l, { strokeDasharray: "3 3", vertical: !1, stroke: "var(--chart-grid, #e2e8f0)" }),
          /* @__PURE__ */ d.jsx(
            zl,
            {
              dataKey: i,
              axisLine: !1,
              tickLine: !1,
              tick: { fontSize: 11, fill: "var(--chart-text-muted, #64748b)", fontWeight: 500 },
              dy: 10
            }
          ),
          /* @__PURE__ */ d.jsx(
            Ll,
            {
              axisLine: !1,
              tickLine: !1,
              tick: { fontSize: 11, fill: "var(--chart-text-muted, #64748b)", fontWeight: 500 },
              tickFormatter: ww,
              dx: -10,
              width: N0(s, o)
            }
          ),
          /* @__PURE__ */ d.jsx(Kd, { content: /* @__PURE__ */ d.jsx(hN, { metricsConfig: o }) }),
          Object.entries(o).map(([p, h]) => c[p] && /* @__PURE__ */ d.jsxs(c2, { children: [
            /* @__PURE__ */ d.jsx(
              Gi,
              {
                type: "monotone",
                dataKey: p,
                stroke: h.color,
                strokeWidth: 3,
                fillOpacity: 1,
                fill: `url(#color${p})`,
                dot: { r: 3, fill: "#ffffff", strokeWidth: 2, stroke: h.color },
                activeDot: { r: 5, strokeWidth: 0, fill: h.color },
                animationDuration: 1e3,
                animationEasing: "ease-in-out"
              }
            ),
            /* @__PURE__ */ d.jsx(
              Gi,
              {
                type: "monotone",
                dataKey: `${p}_Proj`,
                stroke: h.color,
                strokeWidth: 3,
                strokeDasharray: "4 4",
                fillOpacity: 0.3,
                fill: `url(#color${p})`,
                dot: { r: 3, fill: "#ffffff", strokeWidth: 2, stroke: h.color },
                activeDot: { r: 5, strokeWidth: 0, fill: h.color },
                animationDuration: 1e3,
                animationEasing: "ease-in-out"
              }
            )
          ] }, p))
        ]
      }
    ) }) }),
    s.length > 0 && /* @__PURE__ */ d.jsx("div", { style: { padding: "16px", borderTop: "1px solid var(--chart-border, #e2e8f0)", color: "var(--chart-text, #0f172a)" }, children: /* @__PURE__ */ d.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", border: "1px solid var(--chart-border, #e2e8f0)", borderRadius: "8px" }, children: /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
      /* @__PURE__ */ d.jsx("thead", { style: { fontSize: "10px", color: "var(--chart-text-muted, #64748b)", textTransform: "uppercase", backgroundColor: "var(--chart-bg-light, #f8fafc)", borderBottom: "1px solid var(--chart-border, #e2e8f0)" }, children: /* @__PURE__ */ d.jsxs("tr", { children: [
        /* @__PURE__ */ d.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid var(--chart-border, #e2e8f0)", width: "80px", position: "sticky", left: 0, backgroundColor: "var(--chart-bg-light, #f8fafc)", zIndex: 10 }, children: "Metric" }),
        s.map((p, h) => {
          const g = Object.keys(o)[0], v = g && !p.hasOwnProperty(g) && p.hasOwnProperty(`${g}_Proj`);
          return /* @__PURE__ */ d.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: v ? "rgba(241, 245, 249, 0.5)" : "transparent" }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { letterSpacing: "-0.05em" }, children: p[i] }),
            /* @__PURE__ */ d.jsx("div", { style: { marginTop: "2px" } })
          ] }, h);
        })
      ] }) }),
      /* @__PURE__ */ d.jsxs("tbody", { children: [
        Object.entries(o).map(([p, h]) => c[p] ? /* @__PURE__ */ d.jsxs("tr", { style: { borderBottom: "1px solid var(--chart-border-light, #f1f5f9)" }, children: [
          /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "var(--chart-text, #0f172a)", borderRight: "1px solid var(--chart-border, #e2e8f0)", position: "sticky", left: 0, backgroundColor: "var(--chart-bg, #ffffff)", zIndex: 10 }, children: h.shortLabel }),
          s.map((g, v) => {
            const y = g[p] ?? g[`${p}_Proj`], m = !g.hasOwnProperty(p) && g.hasOwnProperty(`${p}_Proj`);
            return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: m ? "var(--chart-text-muted, #64748b)" : "var(--chart-text, #0f172a)", backgroundColor: m ? "var(--chart-bg-proj, rgba(248, 250, 252, 0.3))" : "transparent", fontWeight: m ? 400 : 500 }, children: y !== void 0 ? y : "-" }, v);
          })
        ] }, p) : null),
        /* @__PURE__ */ d.jsxs("tr", { style: { borderTop: "2px solid var(--chart-border, #e2e8f0)", backgroundColor: "var(--chart-bg-light, #f8fafc)", fontWeight: 700 }, children: [
          /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", color: "var(--chart-text, #0f172a)", borderRight: "1px solid var(--chart-border, #e2e8f0)", position: "sticky", left: 0, backgroundColor: "var(--chart-bg-light, #f8fafc)", zIndex: 10 }, children: "Total" }),
          s.map((p, h) => {
            const g = Object.keys(o).reduce((y, m) => c[m] ? y + Number(p[m] ?? p[`${m}_Proj`] ?? 0) : y, 0), v = Object.keys(o).every((y) => !p.hasOwnProperty(y) && p.hasOwnProperty(`${y}_Proj`));
            return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: v ? "var(--chart-text-muted, #64748b)" : "var(--chart-text, #0f172a)" }, children: g || "-" }, h);
          })
        ] })
      ] })
    ] }) }) })
  ] }) });
}, vN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ d.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ d.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ d.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), gN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: /* @__PURE__ */ d.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), yN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ d.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ d.jsx("path", { d: "M7 16h10" })
] }), mN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ d.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ d.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ d.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ d.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), xN = [
  { month: "Aug 25", IP_Count: 2, OP_Count: 19, Therapy_Tests: 0, Lab_Tests: 31 },
  { month: "Sep 25", IP_Count: 20, OP_Count: 385, Therapy_Tests: 33, Lab_Tests: 288 },
  { month: "Oct 25", IP_Count: 25, OP_Count: 430, Therapy_Tests: 56, Lab_Tests: 326 },
  { month: "Nov 25", IP_Count: 47, OP_Count: 522, Therapy_Tests: 64, Lab_Tests: 545 },
  { month: "Dec 25", IP_Count: 22, OP_Count: 459, Therapy_Tests: 51, Lab_Tests: 651 },
  { month: "Jan 26", IP_Count: 46, OP_Count: 445, Therapy_Tests: 21, Lab_Tests: 667 },
  { month: "Feb 26", IP_Count: 39, OP_Count: 532, Therapy_Tests: 51, Lab_Tests: 653 },
  { month: "Mar 26", IP_Count: 37, OP_Count: 529, Therapy_Tests: 40, Lab_Tests: 699, IP_Count_Proj: 37, OP_Count_Proj: 529, Therapy_Tests_Proj: 40, Lab_Tests_Proj: 699 },
  { month: "Apr 26", IP_Count_Proj: 35, OP_Count_Proj: 540, Therapy_Tests_Proj: 45, Lab_Tests_Proj: 710 },
  { month: "May 26", IP_Count_Proj: 38, OP_Count_Proj: 555, Therapy_Tests_Proj: 42, Lab_Tests_Proj: 730 },
  { month: "Jun 26", IP_Count_Proj: 40, OP_Count_Proj: 570, Therapy_Tests_Proj: 48, Lab_Tests_Proj: 745 },
  { month: "Jul 26", IP_Count_Proj: 42, OP_Count_Proj: 590, Therapy_Tests_Proj: 50, Lab_Tests_Proj: 760 },
  { month: "Aug 26", IP_Count_Proj: 45, OP_Count_Proj: 605, Therapy_Tests_Proj: 55, Lab_Tests_Proj: 780 },
  { month: "Sep 26", IP_Count_Proj: 43, OP_Count_Proj: 620, Therapy_Tests_Proj: 58, Lab_Tests_Proj: 795 },
  { month: "Oct 26", IP_Count_Proj: 46, OP_Count_Proj: 640, Therapy_Tests_Proj: 60, Lab_Tests_Proj: 810 },
  { month: "Nov 26", IP_Count_Proj: 50, OP_Count_Proj: 660, Therapy_Tests_Proj: 65, Lab_Tests_Proj: 830 },
  { month: "Dec 26", IP_Count_Proj: 55, OP_Count_Proj: 680, Therapy_Tests_Proj: 70, Lab_Tests_Proj: 850 }
], bN = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: vN },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: gN },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: yN },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: mN }
}, wN = {
  "Aug 25": 31,
  "Sep 25": 30,
  "Oct 25": 31,
  "Nov 25": 30,
  "Dec 25": 31,
  "Jan 26": 31,
  "Feb 26": 28,
  "Mar 26": 31,
  "Apr 26": 30,
  "May 26": 31,
  "Jun 26": 30,
  "Jul 26": 31,
  "Aug 26": 31,
  "Sep 26": 30,
  "Oct 26": 31,
  "Nov 26": 30,
  "Dec 26": 31
};
function jw(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function $0(e, t) {
  let r = 0;
  e.forEach((i) => {
    Object.keys(t).forEach((o) => {
      const a = Number(i[o] ?? i[`${o}_Proj`] ?? 0);
      a > r && (r = a);
    });
  });
  const n = jw(r);
  return Math.max(40, n.length * 7 + 16);
}
const jN = ({ active: e, payload: t, label: r, metricsConfig: n }) => {
  if (!e || !t?.length) return null;
  const i = t.filter((o) => {
    if (o.dataKey.endsWith("_Proj")) {
      const a = o.dataKey.replace("_Proj", "");
      if (t.some((l) => l.dataKey === a)) return !1;
    }
    return !0;
  });
  return /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "var(--chart-bg, #ffffff)", border: "1px solid var(--chart-border, #e2e8f0)", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)", zIndex: 50, position: "relative", color: "var(--chart-text, #0f172a)" }, children: [
    /* @__PURE__ */ d.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid var(--chart-border-light, #f1f5f9)", paddingBottom: "4px", fontSize: "14px", color: "var(--chart-text-strong, #1e293b)" }, children: r }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: i.map((o, a) => {
      const l = o.dataKey.endsWith("_Proj"), s = l ? o.dataKey.replace("_Proj", "") : o.dataKey, c = n[s] || { label: s, color: o.color };
      return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: o.color } }),
          /* @__PURE__ */ d.jsxs("span", { style: { color: "var(--chart-text-muted, #475569)", fontSize: "12px", fontWeight: 500 }, children: [
            c.label,
            " ",
            l && /* @__PURE__ */ d.jsx("span", { style: { color: "var(--chart-text-lighter, #94a3b8)", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("span", { style: { color: "var(--chart-text, #0f172a)", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
          o.value,
          " ",
          null
        ] })
      ] }, a);
    }) })
  ] });
}, SN = (e) => {
  const { x: t, y: r, width: n, height: i, fill: o, patternId: a } = e;
  return !i || i <= 0 ? null : /* @__PURE__ */ d.jsx("rect", { x: t, y: r, width: n, height: i, fill: `url(#${a})`, stroke: o, strokeWidth: 1.5, strokeDasharray: "4 2", opacity: 0.7 });
}, M$ = ({
  title: e = "Annual Patient Trends",
  data: t = xN,
  xAxisKey: r = "month",
  metricsConfig: n = bN,
  daysInMonthMap: i = wN,
  className: o,
  height: a
}) => {
  const [l, s] = B(() => {
    const f = {};
    return Object.keys(n).forEach((p) => f[p] = !0), f;
  }), c = (f) => s((p) => ({ ...p, [f]: !p[f] })), u = Object.keys(n).filter((f) => l[f]);
  return /* @__PURE__ */ d.jsx("div", { className: o, style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box", height: a === "100%" ? "100%" : "auto" }, children: /* @__PURE__ */ d.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "var(--chart-bg, #ffffff)", color: "var(--chart-text, #0f172a)", border: "1px solid var(--chart-border, #e2e8f0)", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid var(--chart-border-light, #e2e8f0)", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "var(--chart-text-strong, #0f172a)" }, children: e }) }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(n).map(([f, p]) => {
        const h = l[f], g = p.icon;
        return /* @__PURE__ */ d.jsxs(
          "button",
          {
            onClick: () => c(f),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 500,
              cursor: "pointer",
              border: "1px solid",
              backgroundColor: h ? `${p.color}18` : "transparent",
              color: h ? p.color : "var(--chart-text-muted, #64748b)",
              borderColor: h ? p.color : "var(--chart-border, #e2e8f0)",
              transition: "all 0.2s ease-out"
            },
            children: [
              g && /* @__PURE__ */ d.jsx(g, { size: 14, style: { color: h ? p.color : "currentColor", opacity: h ? 1 : 0.5, transition: "all 0.2s ease-out" } }),
              p.shortLabel
            ]
          },
          f
        );
      }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { padding: "16px", minHeight: a === "100%" ? 250 : 320, flex: 1, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ d.jsx(Wu, { width: "99%", height: "100%", minHeight: 320, children: /* @__PURE__ */ d.jsxs(lN, { data: t, margin: { top: 20, right: 30, left: $0(t, n) - 40, bottom: 0 }, barCategoryGap: "20%", barGap: 2, children: [
      /* @__PURE__ */ d.jsx("defs", { children: Object.entries(n).map(([f, p]) => /* @__PURE__ */ d.jsx("pattern", { id: `pat${f}`, patternUnits: "userSpaceOnUse", width: "6", height: "6", patternTransform: "rotate(45)", children: /* @__PURE__ */ d.jsx("rect", { width: "3", height: "6", fill: p.color, fillOpacity: 0.25 }) }, `pat${f}`)) }),
      /* @__PURE__ */ d.jsx($l, { strokeDasharray: "3 3", stroke: "var(--chart-grid, #e2e8f0)", vertical: !1 }),
      /* @__PURE__ */ d.jsx(zl, { dataKey: r, stroke: "var(--chart-text-muted, #64748b)", tick: { fill: "var(--chart-text-muted, #64748b)", fontSize: 10 }, tickMargin: 8, axisLine: !1, tickLine: !1 }),
      /* @__PURE__ */ d.jsx(
        Ll,
        {
          stroke: "var(--chart-text-muted, #64748b)",
          tick: { fill: "var(--chart-text-muted, #64748b)", fontSize: 10 },
          tickMargin: 8,
          axisLine: !1,
          tickLine: !1,
          width: $0(t, n),
          tickFormatter: jw
        }
      ),
      /* @__PURE__ */ d.jsx(Kd, { content: /* @__PURE__ */ d.jsx(jN, { metricsConfig: n, daysInMonthMap: i }) }),
      u.map((f) => {
        const p = n[f];
        return [
          /* @__PURE__ */ d.jsxs(hu, { dataKey: f, fill: p.color, radius: [3, 3, 0, 0], maxBarSize: 18, animationDuration: 1e3, animationEasing: "ease-in-out", children: [
            /* @__PURE__ */ d.jsx(Hn, { dataKey: f, position: "top", offset: 4, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } }),
            t.map((h, g) => /* @__PURE__ */ d.jsx(Hd, { fill: p.color, fillOpacity: h[f] !== void 0 ? 1 : 0 }, g))
          ] }, f),
          /* @__PURE__ */ d.jsx(
            hu,
            {
              dataKey: `${f}_Proj`,
              maxBarSize: 18,
              animationDuration: 1e3,
              animationEasing: "ease-in-out",
              shape: (h) => /* @__PURE__ */ d.jsx(SN, { ...h, fill: p.color, patternId: `pat${f}` }),
              children: /* @__PURE__ */ d.jsx(Hn, { dataKey: `${f}_Proj`, position: "top", offset: 4, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } })
            },
            `${f}_Proj`
          )
        ];
      })
    ] }) }) }),
    t.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", borderTop: "1px solid var(--chart-border, #e2e8f0)", color: "var(--chart-text, #0f172a)" }, children: [
      /* @__PURE__ */ d.jsx("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: e }),
      /* @__PURE__ */ d.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)", border: "1px solid var(--chart-border, #e2e8f0)", borderRadius: "8px" }, children: /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ d.jsx("thead", { style: { fontSize: "10px", color: "var(--chart-text-muted, #64748b)", textTransform: "uppercase", backgroundColor: "var(--chart-bg-light, #f8fafc)", borderBottom: "1px solid var(--chart-border, #e2e8f0)" }, children: /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid var(--chart-border, #e2e8f0)", width: "80px", position: "sticky", left: 0, backgroundColor: "var(--chart-bg-light, #f8fafc)", zIndex: 10 }, children: "Metric" }),
          t.map((f, p) => {
            const h = Object.keys(n)[0], g = h && !f.hasOwnProperty(h) && f.hasOwnProperty(`${h}_Proj`);
            return /* @__PURE__ */ d.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: g ? "var(--chart-bg-proj, rgba(241,245,249,0.5))" : "transparent" }, children: [
              /* @__PURE__ */ d.jsx("div", { style: { letterSpacing: "-0.05em" }, children: f[r] }),
              /* @__PURE__ */ d.jsx("div", { style: { marginTop: "2px" } })
            ] }, p);
          })
        ] }) }),
        /* @__PURE__ */ d.jsxs("tbody", { children: [
          Object.entries(n).map(([f, p]) => l[f] ? /* @__PURE__ */ d.jsxs("tr", { style: { borderBottom: "1px solid var(--chart-border-light, #f1f5f9)" }, children: [
            /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "var(--chart-text, #0f172a)", borderRight: "1px solid var(--chart-border, #e2e8f0)", position: "sticky", left: 0, backgroundColor: "var(--chart-bg, #ffffff)", zIndex: 10 }, children: p.shortLabel }),
            t.map((h, g) => {
              const v = h[f] ?? h[`${f}_Proj`], y = !h.hasOwnProperty(f) && h.hasOwnProperty(`${f}_Proj`);
              return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: y ? "var(--chart-text-muted, #64748b)" : "var(--chart-text, #0f172a)", backgroundColor: y ? "var(--chart-bg-proj, rgba(248,250,252,0.3))" : "transparent", fontWeight: y ? 400 : 500 }, children: v !== void 0 ? v : "-" }, g);
            })
          ] }, f) : null),
          /* @__PURE__ */ d.jsxs("tr", { style: { borderTop: "2px solid var(--chart-border, #e2e8f0)", backgroundColor: "var(--chart-bg-light, #f8fafc)", fontWeight: 700 }, children: [
            /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", color: "var(--chart-text, #0f172a)", borderRight: "1px solid var(--chart-border, #e2e8f0)", position: "sticky", left: 0, backgroundColor: "var(--chart-bg-light, #f8fafc)", zIndex: 10 }, children: "Total" }),
            t.map((f, p) => {
              const h = Object.keys(n).reduce((v, y) => l[y] ? v + Number(f[y] ?? f[`${y}_Proj`] ?? 0) : v, 0), g = Object.keys(n).every((v) => !f.hasOwnProperty(v) && f.hasOwnProperty(`${v}_Proj`));
              return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: g ? "var(--chart-text-muted, #64748b)" : "var(--chart-text, #0f172a)" }, children: h || "-" }, p);
            })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}, ON = () => /* @__PURE__ */ d.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d.jsx("rect", { x: "3", y: "12", width: "4", height: "9" }),
  /* @__PURE__ */ d.jsx("rect", { x: "10", y: "7", width: "4", height: "14" }),
  /* @__PURE__ */ d.jsx("rect", { x: "17", y: "3", width: "4", height: "18" })
] }), PN = () => /* @__PURE__ */ d.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ d.jsx("polyline", { points: "3 17 9 11 13 15 21 7" }) }), CN = () => /* @__PURE__ */ d.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d.jsx("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
  /* @__PURE__ */ d.jsx("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
] }), kN = () => /* @__PURE__ */ d.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d.jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ d.jsx("circle", { cx: "12", cy: "12", r: "4" })
] }), _N = [
  { type: "bar", label: "Bar", icon: /* @__PURE__ */ d.jsx(ON, {}) },
  { type: "line", label: "Line", icon: /* @__PURE__ */ d.jsx(PN, {}) },
  { type: "pie", label: "Pie", icon: /* @__PURE__ */ d.jsx(CN, {}) },
  { type: "donut", label: "Donut", icon: /* @__PURE__ */ d.jsx(kN, {}) }
], D$ = ({
  data: e = [],
  apis: t = [],
  activeEndpoint: r,
  onEndpointSelect: n,
  isLoading: i = !1,
  defaultChart: o = "bar",
  height: a = 220,
  defaultColor: l = "#003357",
  className: s
}) => {
  const [c, u] = B(o);
  Se(() => {
    !r && t.length > 0 && n?.(t[0].endpoint);
  }, []);
  const f = (g) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "5px 11px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    border: g ? "1.5px solid #3b82f6" : "1.5px solid #e2e8f0",
    backgroundColor: g ? "#eff6ff" : "#ffffff",
    color: g ? "#2563eb" : "#94a3b8",
    boxShadow: g ? "0 1px 4px rgba(59,130,246,0.15)" : "none",
    transition: "all 0.18s ease-out"
  }), p = (g) => ({
    display: "flex",
    alignItems: "center",
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "11px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    background: g ? "linear-gradient(135deg,#6366f1,#4f46e5)" : "#f1f5f9",
    color: g ? "#ffffff" : "#64748b",
    boxShadow: g ? "0 2px 6px rgba(99,102,241,0.35)" : "none",
    transition: "all 0.18s ease-out",
    whiteSpace: "nowrap",
    letterSpacing: g ? "0.01em" : "normal"
  }), h = () => {
    if (i) return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: a === "100%" ? "100%" : a, color: "#94a3b8", fontSize: 12, gap: 8 }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        width: 18,
        height: 18,
        border: "2px solid #e2e8f0",
        borderTopColor: l,
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      } }),
      "Loading..."
    ] });
    if (!e.length) return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: a === "100%" ? "100%" : a, color: "#94a3b8", fontSize: 13 }, children: r ? "No data" : "Select an endpoint above" });
    switch (c) {
      case "bar":
        return /* @__PURE__ */ d.jsx(A2, { data: e, height: a, defaultColor: l, className: a === "100%" ? "h-full flex-1" : "" });
      case "line":
        return /* @__PURE__ */ d.jsx(_2, { data: e, height: a, defaultColor: l, className: a === "100%" ? "h-full flex-1" : "" });
      case "pie":
        return /* @__PURE__ */ d.jsx(M2, { data: e, className: a === "100%" ? "h-full flex-1" : "" });
      case "donut":
        return /* @__PURE__ */ d.jsx(B2, { data: e, className: a === "100%" ? "h-full flex-1" : "" });
    }
  };
  return /* @__PURE__ */ d.jsxs("div", { className: s, style: { width: "100%", height: a === "100%" ? "100%" : "auto", fontFamily: "sans-serif", boxSizing: "border-box", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }, children: _N.map(({ type: g, label: v, icon: y }) => /* @__PURE__ */ d.jsxs("button", { onClick: () => u(g), style: f(c === g), children: [
        /* @__PURE__ */ d.jsx("span", { style: { display: "flex", opacity: c === g ? 1 : 0.5 }, children: y }),
        v
      ] }, g)) }),
      t.length > 0 && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }, children: t.map((g) => /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => n?.(g.endpoint),
          style: p(r === g.endpoint),
          children: g.label
        },
        g.endpoint
      )) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { width: "100%", boxSizing: "border-box", flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }, children: h() }),
    /* @__PURE__ */ d.jsx("style", { children: "@keyframes spin { to { transform: rotate(360deg); } }" })
  ] });
}, EN = ({ color: e = "currentColor" }) => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: e, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ d.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), AN = ({ active: e, payload: t, label: r, currentMetrics: n, daysInMonthMap: i }) => {
  if (e && t && t.length) {
    const o = i?.[r] || 30, a = t.reduce((l, s) => {
      const c = s.dataKey.replace("_Proj", "");
      return l.find((f) => f.dataKey.replace("_Proj", "") === c) ? s.dataKey.includes("_Proj") || (l = l.filter((f) => f.dataKey !== `${c}_Proj`), l.push(s)) : l.push(s), l;
    }, []);
    return /* @__PURE__ */ d.jsxs("div", { style: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      border: "1px solid #e2e8f0",
      borderRadius: "6px",
      padding: "10px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      color: "#475569",
      fontSize: "11px",
      fontFamily: "sans-serif"
    }, children: [
      /* @__PURE__ */ d.jsx("p", { style: { fontWeight: "bold", color: "#1e293b", marginBottom: "8px", fontSize: "12px" }, children: r }),
      a.map((l, s) => {
        const c = l.dataKey.includes("_Proj"), u = l.dataKey.replace("_Proj", ""), f = n[u];
        if (!f) return null;
        const p = f.format || ((v) => v), h = l.value, g = Math.ceil(h / o);
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", gap: "6px" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: l.stroke } }),
          /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: 500 }, children: [
            f.label,
            " ",
            c ? /* @__PURE__ */ d.jsx("span", { style: { fontStyle: "italic", fontSize: "9px", color: "#94a3b8" }, children: "(Proj)" }) : "",
            ":"
          ] }),
          /* @__PURE__ */ d.jsx("span", { style: { fontWeight: "bold", color: "#0f172a" }, children: p(h) }),
          /* @__PURE__ */ d.jsxs("span", { style: { color: "#64748b", fontSize: "10px" }, children: [
            "(DA - ",
            p(g),
            ")"
          ] })
        ] }, `item-${s}`);
      })
    ] });
  }
  return null;
}, R$ = ({
  config: e,
  defaultTab: t,
  defaultView: r,
  subtitle: n = "Monthly Volume & Projections",
  xAxisKey: i = "month",
  daysInMonthMap: o = {}
}) => {
  const { ref: a, width: l, fs: s } = Ke(), c = l < 768, u = Object.keys(e), [f, p] = B(t || u[0] || ""), [h, g] = B(r || "count"), [v, y] = B({});
  Se(() => {
    const E = {};
    Object.entries(e).forEach(([T, D]) => {
      E[T] = {}, Object.entries(D.views).forEach(([k, W]) => {
        E[T][k] = {}, Object.keys(W.metrics).forEach((F) => {
          E[T][k][F] = !0;
        });
      });
    }), y(E);
  }, [e]);
  const m = (E) => {
    y((T) => ({
      ...T,
      [f]: {
        ...T[f],
        [h]: {
          ...T[f][h],
          [E]: !T[f][h][E]
        }
      }
    }));
  }, w = e[f], b = w?.views[h], x = v[f]?.[h] || {}, j = b?.data || [], S = b?.metrics || {}, C = (E) => {
    const T = Object.keys(S).filter((D) => x[D]);
    if (T.length > 0) {
      const D = S[T[0]];
      if (D.format) return D.format(E);
    }
    return E;
  }, _ = () => {
    if (!j || j.length === 0) return 40;
    const E = Object.keys(S).filter((k) => x[k]);
    if (E.length === 0) return 40;
    let T = 0;
    j.forEach((k) => {
      E.forEach((W) => {
        const F = k[W] !== void 0 ? Number(k[W]) : 0, Z = k[`${W}_Proj`] !== void 0 ? Number(k[`${W}_Proj`]) : 0;
        F > T && (T = F), Z > T && (T = Z);
      });
    });
    const D = C(T);
    return Math.max(40, D.toString().length * (c ? 6 : 7));
  };
  return !w || !b ? null : /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    width: "100%",
    backgroundColor: "#f8fafc",
    fontFamily: "sans-serif",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: {
      width: "100%",
      marginBottom: "16px",
      display: "flex",
      flexDirection: c ? "column" : "row",
      justifyContent: "space-between",
      alignItems: c ? "stretch" : "center",
      gap: "16px"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        backgroundColor: "#ffffff",
        padding: "4px",
        borderRadius: "12px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        border: "1px solid #e2e8f0"
      }, children: u.map((E) => {
        const T = E === f;
        return /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => p(E),
            style: {
              flex: c ? "1" : "none",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: s(14),
              fontWeight: 600,
              transition: "all 0.2s",
              border: "none",
              cursor: "pointer",
              backgroundColor: T ? "#1e293b" : "transparent",
              color: T ? "#ffffff" : "#64748b",
              boxShadow: T ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
            },
            children: e[E].tabTitle
          },
          E
        );
      }) }),
      /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        backgroundColor: "#ffffff",
        padding: "2px",
        borderRadius: "6px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        border: "1px solid #e2e8f0",
        flexShrink: 0
      }, children: [
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => g("count"),
            style: {
              flex: c ? "1" : "none",
              padding: "6px 24px",
              borderRadius: "4px",
              fontSize: s(12),
              fontWeight: 700,
              border: h === "count" ? "1px solid #e0e7ff" : "1px solid transparent",
              backgroundColor: h === "count" ? "#eef2ff" : "transparent",
              color: h === "count" ? "#4338ca" : "#64748b",
              boxShadow: h === "count" ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: "Count"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => g("revenue"),
            style: {
              flex: c ? "1" : "none",
              padding: "6px 24px",
              borderRadius: "4px",
              fontSize: s(12),
              fontWeight: 700,
              border: h === "revenue" ? "1px solid #d1fae5" : "1px solid transparent",
              backgroundColor: h === "revenue" ? "#ecfdf5" : "transparent",
              color: h === "revenue" ? "#047857" : "#64748b",
              boxShadow: h === "revenue" ? "0 1px 2px rgba(0,0,0,0.05)" : "none",
              cursor: "pointer",
              transition: "all 0.2s"
            },
            children: "Revenue"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { style: {
      width: "100%",
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: {
        padding: c ? "12px" : "16px",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: c ? "column" : "row",
        justifyContent: "space-between",
        alignItems: c ? "flex-start" : "center",
        gap: "12px"
      }, children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
            /* @__PURE__ */ d.jsx("h1", { style: { margin: 0, fontSize: s(24), fontWeight: 700, color: "#0f172a", letterSpacing: "-0.025em" }, children: w.title }),
            /* @__PURE__ */ d.jsx("span", { style: {
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: s(10),
              fontWeight: 700,
              border: `1px solid ${h === "revenue" ? "#a7f3d0" : "#c7d2fe"}`,
              backgroundColor: h === "revenue" ? "#ecfdf5" : "#eef2ff",
              color: h === "revenue" ? "#047857" : "#4338ca",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }, children: h === "revenue" ? "Revenue View" : "Count View" })
          ] }),
          /* @__PURE__ */ d.jsx("p", { style: { margin: "4px 0 0 0", color: "#64748b", fontSize: s(14) }, children: n })
        ] }),
        /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(S).map(([E, T]) => {
          const D = x[E];
          return /* @__PURE__ */ d.jsxs(
            "button",
            {
              onClick: () => m(E),
              style: {
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                borderRadius: "9999px",
                fontSize: s(12),
                fontWeight: 500,
                border: D ? "1px solid #cbd5e1" : "1px solid #e2e8f0",
                backgroundColor: D ? "#f1f5f9" : "transparent",
                color: D ? "#0f172a" : "#64748b",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: D ? "0 1px 2px 0 rgba(0, 0, 0, 0.05)" : "none"
              },
              children: [
                /* @__PURE__ */ d.jsx("span", { style: {
                  color: D ? T.color : "currentColor",
                  opacity: D ? 1 : 0.5,
                  display: "flex",
                  alignItems: "center"
                }, children: T.icon || /* @__PURE__ */ d.jsx(EN, {}) }),
                T.shortLabel
              ]
            },
            E
          );
        }) })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { padding: c ? "12px" : "16px", height: "320px", width: "100%", position: "relative" }, children: /* @__PURE__ */ d.jsx(Wu, { width: "100%", height: "100%", children: /* @__PURE__ */ d.jsxs(bw, { data: j, margin: { top: 15, right: 25, left: 0, bottom: 0 }, children: [
        /* @__PURE__ */ d.jsx("defs", { children: Object.entries(S).map(([E, T]) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
          /* @__PURE__ */ d.jsxs("linearGradient", { id: `color-${E}-actual`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ d.jsx("stop", { offset: "5%", stopColor: T.color, stopOpacity: 0.25 }),
            /* @__PURE__ */ d.jsx("stop", { offset: "95%", stopColor: T.color, stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ d.jsxs("linearGradient", { id: `color-${E}-proj`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ d.jsx("stop", { offset: "5%", stopColor: T.color, stopOpacity: 0.05 }),
            /* @__PURE__ */ d.jsx("stop", { offset: "95%", stopColor: T.color, stopOpacity: 0 })
          ] })
        ] }, `grad-${E}`)) }),
        /* @__PURE__ */ d.jsx($l, { strokeDasharray: "3 3", vertical: !1, stroke: "#e2e8f0" }),
        /* @__PURE__ */ d.jsx(
          zl,
          {
            dataKey: i,
            axisLine: !1,
            tickLine: !1,
            tick: { fill: "#64748b", fontSize: s(10), fontFamily: "sans-serif" },
            dy: 10
          }
        ),
        /* @__PURE__ */ d.jsx(
          Ll,
          {
            axisLine: !1,
            tickLine: !1,
            tick: { fill: "#64748b", fontSize: s(10), fontFamily: "sans-serif" },
            width: _(),
            tickFormatter: C,
            dx: -10
          }
        ),
        /* @__PURE__ */ d.jsx(
          Kd,
          {
            content: /* @__PURE__ */ d.jsx(AN, { currentMetrics: S, daysInMonthMap: o })
          }
        ),
        b.threshold && /* @__PURE__ */ d.jsx(
          W1,
          {
            y: b.threshold.value,
            stroke: b.threshold.color,
            strokeDasharray: "6 6",
            strokeWidth: 1.5,
            label: {
              position: "insideTopLeft",
              value: b.threshold.label,
              fill: b.threshold.color,
              fontSize: 9,
              fontWeight: "bold"
            }
          }
        ),
        Object.entries(S).map(([E, T]) => x[E] ? /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            Gi,
            {
              type: "monotone",
              dataKey: E,
              stroke: T.color,
              strokeWidth: 3,
              fillOpacity: 1,
              fill: `url(#color-${E}-actual)`,
              activeDot: { r: 5, strokeWidth: 2, stroke: T.color, fill: "#fff" },
              isAnimationActive: !0
            }
          ),
          /* @__PURE__ */ d.jsx(
            Gi,
            {
              type: "monotone",
              dataKey: `${E}_Proj`,
              stroke: T.color,
              strokeWidth: 3,
              strokeDasharray: "5 5",
              fillOpacity: 1,
              fill: `url(#color-${E}-proj)`,
              activeDot: { r: 5, strokeWidth: 2, stroke: T.color, fill: "#fff" },
              isAnimationActive: !0
            }
          )
        ] }, `series-${E}`) : null)
      ] }) }) }),
      /* @__PURE__ */ d.jsxs("div", { style: { padding: c ? "12px" : "16px", borderTop: "1px solid #e2e8f0" }, children: [
        /* @__PURE__ */ d.jsxs("h2", { style: {
          fontSize: s(14),
          fontWeight: 700,
          color: "#0f172a",
          margin: "0 0 8px 0",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }, children: [
          "YTD & Projections Data Table",
          /* @__PURE__ */ d.jsxs("span", { style: {
            fontSize: s(9),
            fontWeight: 400,
            color: "#64748b",
            backgroundColor: "#f1f5f9",
            padding: "2px 6px",
            borderRadius: "4px",
            textTransform: "uppercase"
          }, children: [
            f,
            " - ",
            h
          ] })
        ] }),
        /* @__PURE__ */ d.jsx("div", { style: {
          overflowX: "auto",
          position: "relative",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          border: "1px solid #e2e8f0",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ d.jsxs("table", { style: {
          width: "100%",
          fontSize: s(12),
          textAlign: "left",
          whiteSpace: "nowrap",
          borderCollapse: "collapse",
          tableLayout: "fixed"
        }, children: [
          /* @__PURE__ */ d.jsx("thead", { style: {
            fontSize: s(10),
            color: "#64748b",
            textTransform: "uppercase",
            backgroundColor: "#f8fafc",
            borderBottom: "1px solid #e2e8f0"
          }, children: /* @__PURE__ */ d.jsxs("tr", { children: [
            /* @__PURE__ */ d.jsx("th", { style: {
              padding: "6px 8px",
              fontWeight: 600,
              position: "sticky",
              left: 0,
              backgroundColor: "#f8fafc",
              zIndex: 10,
              borderRight: "1px solid #e2e8f0",
              width: c ? "80px" : "112px",
              verticalAlign: "bottom",
              boxShadow: "1px 0 0 0 #e2e8f0"
            }, children: "Metric" }),
            j.map((E, T) => {
              const D = Object.keys(S)[0], k = E[D] === void 0 && E[`${D}_Proj`] !== void 0;
              return /* @__PURE__ */ d.jsxs("th", { style: {
                padding: "6px 2px",
                fontWeight: 600,
                textAlign: "center",
                backgroundColor: k ? "rgba(241, 245, 249, 0.5)" : "transparent"
              }, children: [
                /* @__PURE__ */ d.jsx("div", { style: { letterSpacing: "-0.05em" }, children: E[i] }),
                /* @__PURE__ */ d.jsx("div", { style: { marginTop: "2px" }, children: /* @__PURE__ */ d.jsx("span", { style: {
                  padding: "1px 4px",
                  fontSize: s(8),
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  fontWeight: 700,
                  borderRadius: "2px",
                  backgroundColor: k ? "#e2e8f0" : "#d1fae5",
                  color: k ? "#64748b" : "#047857"
                }, children: k ? "Prj" : "Act" }) })
              ] }, `th-${T}`);
            })
          ] }) }),
          /* @__PURE__ */ d.jsx("tbody", { children: Object.entries(S).map(([E, T], D) => {
            if (!x[E]) return null;
            const k = T.format || ((W) => W);
            return /* @__PURE__ */ d.jsxs("tr", { style: {
              borderBottom: "1px solid #f1f5f9",
              transition: "background-color 0.2s"
            }, children: [
              /* @__PURE__ */ d.jsx("td", { style: {
                padding: "4px 8px",
                fontWeight: 500,
                color: "#0f172a",
                position: "sticky",
                left: 0,
                backgroundColor: "#ffffff",
                zIndex: 10,
                borderRight: "1px solid #e2e8f0",
                boxShadow: "1px 0 0 0 #e2e8f0",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }, children: T.shortLabel }),
              j.map((W, F) => {
                const Z = W[E] !== void 0 ? W[E] : W[`${E}_Proj`], q = W[E] === void 0;
                return /* @__PURE__ */ d.jsx("td", { style: {
                  padding: "4px 2px",
                  textAlign: "center",
                  color: q ? "#64748b" : "#0f172a",
                  fontWeight: q ? 400 : 500,
                  backgroundColor: q ? "rgba(248, 250, 252, 0.3)" : "transparent"
                }, children: Z !== void 0 ? k(Z) : "-" }, `cell-${D}-${F}`);
              })
            ] }, `row-${E}`);
          }) })
        ] }) })
      ] })
    ] })
  ] });
};
function TN(e) {
  return Ue({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" }, child: [] }] })(e);
}
function IN(e) {
  return Ue({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001" }, child: [] }] })(e);
}
function MN(e) {
  return Ue({ attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" }, child: [] }] })(e);
}
const N$ = ({ contacts: e, title: t }) => {
  const { ref: r, fs: n } = Ke(), i = (a) => {
    const l = a.split(" ");
    return l.length >= 2 ? (l[0][0] + l[1][0]).toUpperCase() : a.slice(0, 2).toUpperCase();
  }, o = (a) => {
    if (!a) return "transparent";
    const l = a.toLowerCase();
    return l === "red" || l === "danger" ? "#e74c3c" : l === "yellow" || l === "warning" ? "#f1c40f" : l === "green" || l === "success" ? "#2ecc71" : a;
  };
  return /* @__PURE__ */ d.jsxs("div", { ref: r, style: { width: "100%", fontFamily: "Arial, sans-serif" }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: n(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          width: "100%"
        },
        children: e.map((a) => /* @__PURE__ */ d.jsxs(
          "div",
          {
            style: {
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              gap: "12px",
              position: "relative",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              border: "1px solid #e2e8f0"
            },
            children: [
              /* @__PURE__ */ d.jsx("div", { style: { flexShrink: 0 }, children: a.avatarUrl ? /* @__PURE__ */ d.jsx(
                "img",
                {
                  src: a.avatarUrl,
                  alt: a.name,
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }
                }
              ) : /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#1abc9c",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                    letterSpacing: "1px"
                  },
                  children: a.initials || i(a.name)
                }
              ) }),
              /* @__PURE__ */ d.jsxs("div", { style: { flex: 1, minWidth: 0, paddingRight: "12px" }, children: [
                /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    style: {
                      fontWeight: "700",
                      fontSize: "14px",
                      color: "#1e293b",
                      marginBottom: "2px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    },
                    children: a.name
                  }
                ),
                a.role && /* @__PURE__ */ d.jsx(
                  "div",
                  {
                    style: {
                      fontSize: "12px",
                      color: "#64748b",
                      marginBottom: "8px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    },
                    children: a.role
                  }
                ),
                a.phone && /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: "#334155",
                      marginBottom: "4px",
                      fontWeight: "600"
                    },
                    children: [
                      /* @__PURE__ */ d.jsx(MN, { size: 10, color: "#94a3b8" }),
                      /* @__PURE__ */ d.jsx("span", { children: a.phone })
                    ]
                  }
                ),
                a.email && /* @__PURE__ */ d.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: "#334155",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    },
                    children: [
                      /* @__PURE__ */ d.jsx(TN, { size: 10, color: "#94a3b8" }),
                      /* @__PURE__ */ d.jsx("span", { style: { overflow: "hidden", textOverflow: "ellipsis" }, children: a.email })
                    ]
                  }
                )
              ] }),
              a.flagColor && /* @__PURE__ */ d.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    color: o(a.flagColor)
                  },
                  children: /* @__PURE__ */ d.jsx(IN, { size: 14 })
                }
              )
            ]
          },
          a.id
        ))
      }
    )
  ] });
};
export {
  l$ as AdvanceMapWidget,
  FN as AdvancePrescription,
  i$ as AlertWidget,
  A2 as BarChart,
  KN as BubbleChart,
  $N as Button,
  N$ as ContactCardGrid,
  ZN as DataWidget,
  B2 as DonutChart,
  n$ as FilterWidget,
  GN as GaugeWidget,
  HN as HeatMap,
  YN as KpiWidget,
  _2 as LineChart,
  QN as ListWidget,
  e$ as MapWidget,
  r$ as MediaWidget,
  D$ as MultiChart,
  R$ as MultiTrendChart,
  kf as NotionTable,
  LN as NotionTableWithLayout,
  M2 as PieChart,
  JN as PivotTable,
  XN as ProgressBar,
  BN as ScaffoldTable,
  qN as ScatterPlot,
  WN as SimplePrescription,
  UN as StackedChart,
  s$ as StatGrid,
  VN as StatusWidget,
  zN as Table,
  t$ as TextWidget,
  a$ as Toaster,
  M$ as TrendBarChart,
  I$ as TrendLinechart,
  o$ as showToast,
  Ke as useContainerSize
};
