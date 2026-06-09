import * as P from "react";
import Ke, { useState as W, useEffect as Oe, useRef as ve, useId as Qw, useMemo as er, useCallback as ke, isValidElement as Nt, forwardRef as ct, createContext as Et, useContext as qt, useImperativeHandle as Iy, useLayoutEffect as _t, cloneElement as ei, createElement as My, Children as e2, memo as gu, PureComponent as Dy, Fragment as t2 } from "react";
import { createPortal as Ny } from "react-dom";
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xo = { exports: {} }, di = {};
var df;
function r2() {
  if (df) return di;
  df = 1;
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
  return di.Fragment = t, di.jsx = r, di.jsxs = r, di;
}
var fi = {};
var ff;
function n2() {
  return ff || (ff = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(z) {
      if (z == null) return null;
      if (typeof z == "function")
        return z.$$typeof === $ ? null : z.displayName || z.name || null;
      if (typeof z == "string") return z;
      switch (z) {
        case y:
          return "Fragment";
        case x:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case C:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof z == "object")
        switch (typeof z.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), z.$$typeof) {
          case v:
            return "Portal";
          case w:
            return z.displayName || "Context";
          case b:
            return (z._context.displayName || "Context") + ".Consumer";
          case S:
            var B = z.render;
            return z = z.displayName, z || (z = B.displayName || B.name || "", z = z !== "" ? "ForwardRef(" + z + ")" : "ForwardRef"), z;
          case E:
            return B = z.displayName || null, B !== null ? B : e(z.type) || "Memo";
          case D:
            B = z._payload, z = z._init;
            try {
              return e(z(B));
            } catch {
            }
        }
      return null;
    }
    function t(z) {
      return "" + z;
    }
    function r(z) {
      try {
        t(z);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var L = B.error, K = typeof Symbol == "function" && Symbol.toStringTag && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return L.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(z);
      }
    }
    function n(z) {
      if (z === y) return "<>";
      if (typeof z == "object" && z !== null && z.$$typeof === D)
        return "<...>";
      try {
        var B = e(z);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var z = k.A;
      return z === null ? null : z.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a(z) {
      if (V.call(z, "key")) {
        var B = Object.getOwnPropertyDescriptor(z, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return z.key !== void 0;
    }
    function l(z, B) {
      function L() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(z, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var z = e(this.type);
      return Q[z] || (Q[z] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), z = this.props.ref, z !== void 0 ? z : null;
    }
    function s(z, B, L, K, le, me) {
      var de = L.ref;
      return z = {
        $$typeof: g,
        type: z,
        key: B,
        props: L,
        _owner: K
      }, (de !== void 0 ? de : null) !== null ? Object.defineProperty(z, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(z, "ref", { enumerable: !1, value: null }), z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(z, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(z, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty(z, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: me
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    }
    function u(z, B, L, K, le, me) {
      var de = B.children;
      if (de !== void 0)
        if (K)
          if (R(de)) {
            for (K = 0; K < de.length; K++)
              d(de[K]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(de);
      if (V.call(B, "key")) {
        de = e(z);
        var ue = Object.keys(B).filter(function(G) {
          return G !== "key";
        });
        K = 0 < ue.length ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}", te[de + K] || (ue = 0 < ue.length ? "{" + ue.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          de,
          ue,
          de
        ), te[de + K] = !0);
      }
      if (de = null, L !== void 0 && (r(L), de = "" + L), a(B) && (r(B.key), de = "" + B.key), "key" in B) {
        L = {};
        for (var X in B)
          X !== "key" && (L[X] = B[X]);
      } else L = B;
      return de && l(
        L,
        typeof z == "function" ? z.displayName || z.name || "Unknown" : z
      ), s(
        z,
        de,
        L,
        i(),
        le,
        me
      );
    }
    function d(z) {
      p(z) ? z._store && (z._store.validated = 1) : typeof z == "object" && z !== null && z.$$typeof === D && (z._payload.status === "fulfilled" ? p(z._payload.value) && z._payload.value._store && (z._payload.value._store.validated = 1) : z._store && (z._store.validated = 1));
    }
    function p(z) {
      return typeof z == "object" && z !== null && z.$$typeof === g;
    }
    var h = Ke, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), w = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, R = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(z) {
        return z();
      }
    };
    var Z, Q = {}, N = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), re = q(n(o)), te = {};
    fi.Fragment = y, fi.jsx = function(z, B, L) {
      var K = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        z,
        B,
        L,
        !1,
        K ? Error("react-stack-top-frame") : N,
        K ? q(n(z)) : re
      );
    }, fi.jsxs = function(z, B, L) {
      var K = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        z,
        B,
        L,
        !0,
        K ? Error("react-stack-top-frame") : N,
        K ? q(n(z)) : re
      );
    };
  })()), fi;
}
var pf;
function i2() {
  return pf || (pf = 1, process.env.NODE_ENV === "production" ? xo.exports = r2() : xo.exports = n2()), xo.exports;
}
var f = i2();
function fR({ children: e, onClick: t, color: r = "#007bff", textColor: n = "#fff" }) {
  return /* @__PURE__ */ f.jsx(
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
var Ry = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, hf = Ke.createContext && /* @__PURE__ */ Ke.createContext(Ry), o2 = ["attr", "size", "title"];
function a2(e, t) {
  if (e == null) return {};
  var r = l2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function l2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
function vf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vf(Object(r), !0).forEach(function(n) {
      s2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function s2(e, t, r) {
  return t = c2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c2(e) {
  var t = u2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function u2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $y(e) {
  return e && e.map((t, r) => /* @__PURE__ */ Ke.createElement(t.tag, Go({
    key: r
  }, t.attr), $y(t.child)));
}
function tt(e) {
  return (t) => /* @__PURE__ */ Ke.createElement(d2, Yo({
    attr: Go({}, e.attr)
  }, t), $y(e.child));
}
function d2(e) {
  var t = (r) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, a = a2(e, o2), l = i || r.size || "1em", c;
    return r.className && (c = r.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ Ke.createElement("svg", Yo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: c,
      style: Go(Go({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Ke.createElement("title", null, o), e.children);
  };
  return hf !== void 0 ? /* @__PURE__ */ Ke.createElement(hf.Consumer, null, (r) => t(r)) : t(Ry);
}
function gf(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(e);
}
function yf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, child: [] }] })(e);
}
function zy(e) {
  return tt({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(e);
}
function Ly(e) {
  return tt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(e);
}
function mf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function xf(e) {
  return tt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" }, child: [] }] })(e);
}
function f2(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function bf(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z" }, child: [] }] })(e);
}
function $l(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z" }, child: [] }] })(e);
}
function wf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" }, child: [] }] })(e);
}
function Ti(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" }, child: [] }] })(e);
}
const yt = {
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
}, zl = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), p2 = (e, t, r) => {
  if (!e || typeof e != "string") return "";
  try {
    let n = e;
    const i = n.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (i && i.forEach((a) => {
      const l = a.slice(1, -1), c = r.find((s) => s.name === l);
      if (c && t[c.id] !== null && t[c.id] !== void 0) {
        const s = parseFloat(t[c.id]) || 0;
        n = n.replace(a, s.toString());
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
function pR({ columns: e, initialData: t }) {
  const [r, n] = W(e), [i, o] = W(t), [a, l] = W(null), [c, s] = W(null), [u, d] = W(/* @__PURE__ */ new Set()), [p, h] = W(!1), [g, v] = W(!1), [y, m] = W(/* @__PURE__ */ new Set()), [x, b] = W(null), [w, S] = W(""), [O, C] = W(null), [E, D] = W(null), [I, $] = W(""), [k, V] = W({}), [R, q] = W(null), [Z, Q] = W({ key: null, direction: "ascending" }), [N] = W({}), re = (T) => {
    let U = "ascending";
    Z.key === T && Z.direction === "ascending" && (U = "descending"), Q({ key: T, direction: U });
  }, te = Ke.useMemo(() => {
    let T = [...i];
    return Z.key !== null && T.sort((U, H) => U[Z.key] < H[Z.key] ? Z.direction === "ascending" ? -1 : 1 : U[Z.key] > H[Z.key] ? Z.direction === "ascending" ? 1 : -1 : 0), T;
  }, [i, Z]);
  Oe(() => {
    const T = () => {
      v(!1), h(!1), b(null), q(null), C(null);
    }, U = (H) => {
      if (H.key === "Escape")
        H.preventDefault(), C(null), l(null);
      else if (a && (H.ctrlKey || H.metaKey))
        if (H.key === "c") {
          H.preventDefault();
          const pe = i.find((Te) => Te.id === a.rowId);
          pe && C({
            rowId: a.rowId,
            colId: a.colId,
            value: pe[a.colId]
          });
        } else H.key === "v" && O && (H.preventDefault(), L(a.rowId, a.colId, O.value));
    };
    return document.addEventListener("click", T), document.addEventListener("keydown", U), () => {
      document.removeEventListener("click", T), document.removeEventListener("keydown", U);
    };
  }, [a, O, i]);
  const z = () => {
    const T = zl(), U = `row-${Date.now()}`, H = {
      id: U,
      ...r.reduce((pe, Te) => ({
        ...pe,
        [Te.id]: Te.type === "createdTime" || Te.type === "lastEditedTime" ? T : Te.type === "formula" ? "" : Te.type === "id" ? U : null
      }), {})
    };
    o([...i, H]);
  }, B = (T) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((U) => U.id !== T));
  }, L = (T, U, H) => {
    const pe = zl();
    if (r.find((Ee) => Ee.id === U)?.type === "email" && H) {
      const Ee = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, fe = `${T}-${U}`;
      Ee.test(H) ? m((gt) => {
        const Tt = new Set(gt);
        return Tt.delete(fe), Tt;
      }) : m((gt) => new Set(gt).add(fe));
    }
    o(i.map((Ee) => {
      if (Ee.id === T) {
        const fe = { ...Ee, [U]: H };
        return r.forEach((gt) => {
          gt.type === "lastEditedTime" && (fe[gt.id] = pe);
        }), fe;
      }
      return Ee;
    })), l(null);
  }, K = (T = "text", U) => {
    const H = `col-${Date.now()}`, pe = zl(), Te = U || T.charAt(0).toUpperCase() + T.slice(1), Ee = {
      id: H,
      name: w.trim() || Te,
      type: T,
      options: T === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, Ee]), o(i.map((fe) => ({
      ...fe,
      [H]: T === "createdTime" || T === "lastEditedTime" ? pe : T === "formula" ? "" : T === "id" ? fe.id : null
    }))), v(!1), S("");
  }, le = (T, U) => {
    n(r.map((H) => H.id === T ? { ...H, name: U } : H)), s(null);
  }, me = (T) => {
    d((U) => {
      const H = new Set(U);
      return H.has(T) ? H.delete(T) : H.add(T), H;
    }), b(null);
  }, de = (T) => {
    n(r.filter((U) => U.id !== T)), o(i.map((U) => {
      const { [T]: H, ...pe } = U;
      return pe;
    })), b(null);
  }, ue = (T) => {
    const U = r.find((fe) => fe.id === T);
    if (!U) return;
    const H = r.findIndex((fe) => fe.id === T), pe = `col-${Date.now()}`, Te = {
      ...U,
      id: pe,
      name: `${U.name} Copy`
    }, Ee = [...r];
    Ee.splice(H + 1, 0, Te), n(Ee), o(i.map((fe) => ({
      ...fe,
      [pe]: fe[T]
    }))), b(null);
  }, X = (T, U, H) => {
    if (!U.trim()) return;
    const pe = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], Te = pe[Math.floor(Math.random() * pe.length)];
    n(r.map((Ee) => {
      if (Ee.id === T && Ee.type === "select") {
        const fe = Ee.options || [];
        if (!fe.some((Tt) => Tt.value.toLowerCase() === U.toLowerCase()))
          return {
            ...Ee,
            options: [...fe, { value: U, color: Te }]
          };
      }
      return Ee;
    })), L(H, T, U), D(null), $("");
  }, G = r.filter((T) => !u.has(T.id)), ae = te.filter((T) => Object.entries(k).every(([U, H]) => {
    if (!H.trim()) return !0;
    const pe = T[U];
    return pe == null ? !1 : String(pe).toLowerCase().includes(H.toLowerCase());
  })), F = (T) => Z.key === T ? Z.direction === "ascending" ? "▲" : "▼" : "↕", Me = (T) => {
    const U = T.color || "#f8f9fa", H = N[T.id] || 150;
    return {
      th: {
        ...yt.th,
        backgroundColor: U,
        color: T.color && T.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${H}px`,
        minWidth: `${H}px`,
        maxWidth: `${H}px`
      },
      td: {
        ...yt.td,
        backgroundColor: T.color ? `${U}33` : "#ffffff",
        width: `${H}px`,
        minWidth: `${H}px`,
        maxWidth: `${H}px`
      }
    };
  }, xe = (T, U, H, pe) => {
    const Te = `${H}-${T.id}`, Ee = y.has(Te);
    if (pe)
      switch (T.type) {
        case "checkbox":
          return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!U, onChange: (fe) => L(H, T.id, fe.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ f.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: U || "",
              onChange: (fe) => {
                fe.target.value === "__add_new__" ? (D({ columnId: T.id, rowId: H }), $("")) : fe.target.value === "__manage_options__" || L(H, T.id, fe.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "", children: "Select..." }),
                T.options?.map((fe) => /* @__PURE__ */ f.jsx("option", { value: fe.value, children: fe.value }, fe.value)),
                /* @__PURE__ */ f.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ f.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "date":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "date",
              defaultValue: U || "",
              onBlur: (fe) => L(H, T.id, fe.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "email":
          return /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "email",
                defaultValue: U || "",
                onBlur: (fe) => L(H, T.id, fe.target.value),
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
            Ee && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "number":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: U || "",
              onBlur: (fe) => L(H, T.id, fe.target.value),
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
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: U || "",
              onBlur: (fe) => L(H, T.id, fe.target.value),
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
    if (U == null) return /* @__PURE__ */ f.jsx("span", { style: { color: "#aaa" } });
    switch (T.type) {
      case "checkbox":
        return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!U, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(U).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888" }, children: U });
      case "select":
        const fe = T.options?.find((Gt) => Gt.value === U);
        return fe ? /* @__PURE__ */ f.jsx("span", { style: {
          backgroundColor: fe.color + "33",
          color: fe.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: U }) : U;
      case "number":
        return /* @__PURE__ */ f.jsx("span", { style: { textAlign: "right", display: "block" }, children: Number(U).toLocaleString() });
      case "email":
        return /* @__PURE__ */ f.jsxs("div", { children: [
          U,
          Ee && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const gt = i.find((Gt) => Gt.id === H), Tt = gt ? p2(U, gt, r) : "Error";
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: Tt }),
          /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: U, children: "Σ" })
        ] });
      case "id":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: U });
      default:
        return U;
    }
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    E && /* @__PURE__ */ f.jsx("div", { style: {
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
    }, children: /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "text",
          value: I,
          onChange: (T) => $(T.target.value),
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
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              D(null), $("");
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
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => X(E.columnId, I, E.rowId),
            disabled: !I.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: I.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: I.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.jsxs("table", { style: yt.table, children: [
      /* @__PURE__ */ f.jsxs("thead", { children: [
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...yt.th,
            width: "40px"
          } }),
          G.map((T) => {
            const U = c === T.id;
            return /* @__PURE__ */ f.jsxs(
              "th",
              {
                style: {
                  ...Me(T).th,
                  position: "relative"
                },
                title: `Sort by ${T.name}`,
                children: [
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (H) => {
                        H.stopPropagation(), H.detail === 1 ? (v(!1), h(!1), b(x === T.id ? null : T.id)) : H.detail === 2 && (s(T.id), b(null));
                      },
                      children: U ? /* @__PURE__ */ f.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: T.name,
                          onBlur: (H) => le(T.id, H.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                        /* @__PURE__ */ f.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: T.name }),
                        /* @__PURE__ */ f.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (H) => {
                              H.stopPropagation(), re(T.id);
                            },
                            children: F(T.id)
                          }
                        )
                      ] })
                    }
                  ),
                  x === T.id && /* @__PURE__ */ f.jsxs("div", { style: {
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
                    /* @__PURE__ */ f.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (H) => {
                          H.stopPropagation(), q(R === T.id ? null : T.id);
                        },
                        children: [
                          "Filter",
                          R === T.id && /* @__PURE__ */ f.jsx("div", { style: {
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
                          }, children: /* @__PURE__ */ f.jsx(
                            "input",
                            {
                              type: "text",
                              placeholder: `Filter ${T.name}...`,
                              value: k[T.id] || "",
                              onChange: (H) => {
                                V((pe) => ({
                                  ...pe,
                                  [T.id]: H.target.value
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
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (H) => {
                          H.stopPropagation(), ue(T.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (H) => {
                          H.stopPropagation(), me(T.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (H) => {
                          H.stopPropagation(), de(T.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ]
              },
              T.id
            );
          }),
          /* @__PURE__ */ f.jsxs(
            "th",
            {
              style: {
                ...yt.th,
                color: "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px"
              },
              children: [
                /* @__PURE__ */ f.jsx("button", { onClick: (T) => {
                  T.stopPropagation(), b(null), h(!1), v(!g);
                }, title: "Add column", style: { ...yt.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ f.jsx("button", { onClick: (T) => {
                  T.stopPropagation(), b(null), v(!1), h(!p);
                }, style: { ...yt.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ f.jsxs("div", { onClick: (T) => T.stopPropagation(), style: {
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
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: w,
                      onChange: (T) => S(T.target.value),
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
                  /* @__PURE__ */ f.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("text"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("number"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("select"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("checkbox"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("date"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("email"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("formula", "Formula"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("id", "ID"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("createdTime", "Created time"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => K("lastEditedTime", "Last edited time"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ f.jsxs("div", { onClick: (T) => T.stopPropagation(), style: {
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
                  /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((T) => /* @__PURE__ */ f.jsxs(
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
                      onClick: () => me(T.id),
                      children: [
                        /* @__PURE__ */ f.jsx("span", { children: T.name }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px" }, children: u.has(T.id) ? /* @__PURE__ */ f.jsx(zy, {}) : /* @__PURE__ */ f.jsx(Ly, {}) })
                      ]
                    },
                    T.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...yt.th,
            width: "40px",
            padding: "4px"
          } }),
          G.map((T) => /* @__PURE__ */ f.jsx(
            "th",
            {
              style: {
                ...Me(T).th,
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: k[T.id] || "",
                  onChange: (U) => {
                    V((H) => ({
                      ...H,
                      [T.id]: U.target.value
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
            `search-${T.id}`
          )),
          /* @__PURE__ */ f.jsx("th", { style: {
            ...yt.th,
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("tbody", { children: [
        ae.map((T, U) => /* @__PURE__ */ f.jsxs(
          "tr",
          {
            style: {
              ...yt.tr,
              backgroundColor: U % 2 === 0 ? "#f8f9fa" : "#ffffff"
            },
            onMouseEnter: (H) => {
              H.currentTarget.style.backgroundColor = yt.trHover.backgroundColor;
            },
            onMouseLeave: (H) => {
              const pe = U % 2 === 0 ? "#f8f9fa" : "#ffffff";
              H.currentTarget.style.backgroundColor = pe;
            },
            children: [
              /* @__PURE__ */ f.jsx("td", { style: {
                ...yt.td,
                textAlign: "center",
                color: "#aaa"
              }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                /* @__PURE__ */ f.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: "#999" }, children: "⋮⋮" }),
                /* @__PURE__ */ f.jsx("button", { onClick: (H) => {
                  H.stopPropagation(), B(T.id);
                }, style: { ...yt.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ f.jsx(Ti, {}) })
              ] }) }),
              G.map((H) => {
                const pe = a?.rowId === T.id && a?.colId === H.id;
                return /* @__PURE__ */ f.jsx(
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
                      Te.stopPropagation(), l({ rowId: T.id, colId: H.id });
                    },
                    children: xe(H, T[H.id], T.id, pe)
                  },
                  H.id
                );
              }),
              /* @__PURE__ */ f.jsx("td", { style: yt.td })
            ]
          },
          T.id
        )),
        /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: G.length + 2, style: {
          ...yt.td,
          textAlign: "center",
          color: "#aaa",
          cursor: "pointer"
        }, onClick: z, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
}
function h2(e) {
  return tt({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z" }, child: [] }] })(e);
}
function v2(e) {
  return tt({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z" }, child: [] }] })(e);
}
function jf(e) {
  return tt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, child: [] }, { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "15", x2: "12", y2: "3" }, child: [] }] })(e);
}
function g2(e, t) {
  const [r, n] = Ke.useState(t);
  return { items: Ke.useMemo(() => {
    const a = [...e];
    return r?.key && a.sort((l, c) => {
      const s = l[r.key], u = c[r.key];
      return s < u ? r.direction === "ascending" ? -1 : 1 : s > u ? r.direction === "ascending" ? 1 : -1 : 0;
    }), a;
  }, [e, r]), requestSort: (a) => {
    let l = "ascending";
    r?.key === a && r?.direction === "ascending" && (l = "descending"), n({ key: a, direction: l });
  }, sortConfig: r };
}
const Ve = {
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
}, pi = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), y2 = (e, t, r) => {
  if (!e || typeof e != "string") return "";
  try {
    let n = e;
    const i = n.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (i && i.forEach((a) => {
      const l = a.slice(1, -1), c = r.find((s) => s.name === l);
      if (c && t[c.id] !== null && t[c.id] !== void 0) {
        const s = parseFloat(t[c.id]) || 0;
        n = n.replace(a, s.toString());
      } else
        n = n.replace(a, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(n))
      return "Invalid formula";
    const o = Function('"use strict"; return (' + n + ")")();
    return isNaN(o) ? "Error" : o.toString();
  } catch {
    return "Error";
  }
}, Sf = ({ columns: e, initialData: t }) => {
  const [r, n] = W(e), [i, o] = W(t), [a, l] = W(null), [c, s] = W(null), [u, d] = W(/* @__PURE__ */ new Set()), [p, h] = W(!1), [g, v] = W(!1), [y, m] = W(/* @__PURE__ */ new Set()), [x, b] = W(null), [w, S] = W(""), [O, C] = W(!1), [E, D] = W(null), [I, $] = W(/* @__PURE__ */ new Set()), [k, V] = W(null), [R, q] = W(null), [Z, Q] = W(null), [N, re] = W(null), [te, z] = W(/* @__PURE__ */ new Set()), [B, L] = W({}), [K, le] = W(null), [me, de] = W(null), [ue, X] = W(null), [G, ae] = W(!1), [F, Me] = W(null), [xe, T] = W(/* @__PURE__ */ new Set()), [U, H] = W(null), [pe, Te] = W(""), [Ee, fe] = W(null), [gt, Tt] = W(null), [Gt, En] = W({}), [ci, ui] = W(null), [An, Nl] = W("#ffffff"), [vo, hw] = W("#f8f9fa"), [Zd, go] = W(!1), [Jd, yo] = W(!1), [Y, vw] = W(!1), [Qd, gw] = W({}), [Nr, ef] = W(null), [tf, yw] = W(0), [rf, mw] = W(0), {
    items: xw,
    sortConfig: nf,
    requestSort: bw
  } = g2(i, { key: null, direction: "ascending" });
  Oe(() => {
    const j = () => {
      v(!1), h(!1), b(null), ui(null), go(!1), yo(!1), X(null);
    }, _ = (A) => {
      if (A.key === "Escape")
        A.preventDefault(), X(null), l(null);
      else if (a && (A.ctrlKey || A.metaKey))
        if (A.key === "c") {
          A.preventDefault();
          const ee = i.find((se) => se.id === a.rowId) || Object.values(B).flat().find((se) => se.id === a.rowId);
          ee && X({
            rowId: a.rowId,
            colId: a.colId,
            value: ee[a.colId]
          });
        } else A.key === "v" && ue && (A.preventDefault(), St(a.rowId, a.colId, ue.value));
    };
    return document.addEventListener("click", j), document.addEventListener("keydown", _), () => {
      document.removeEventListener("click", j), document.removeEventListener("keydown", _);
    };
  }, [a, ue, i, B]), Oe(() => {
    const j = (_) => {
      U && _.key === "Enter" ? (_.preventDefault(), lf(U.columnId, pe, U.rowId)) : U && _.key === "Escape" && (H(null), Te(""));
    };
    if (U)
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [U, pe]);
  const ww = () => {
    const j = pi(), _ = `row-${Date.now()}`, A = {
      id: _,
      ...r.reduce((ee, se) => ({
        ...ee,
        [se.id]: se.type === "createdTime" || se.type === "lastEditedTime" ? j : se.type === "formula" ? "" : se.type === "id" ? _ : null
      }), {})
    };
    o([...i, A]);
  }, jw = (j) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((_) => _.id !== j));
  }, St = (j, _, A) => {
    const ee = pi();
    if (r.find((ce) => ce.id === _)?.type === "email" && A) {
      const ce = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, J = `${j}-${_}`;
      ce.test(A) ? m((ge) => {
        const Be = new Set(ge);
        return Be.delete(J), Be;
      }) : m((ge) => new Set(ge).add(J));
    }
    if (j.startsWith("subrow-")) {
      const ce = j.split("-")[1];
      L((J) => ({
        ...J,
        [ce]: J[ce]?.map((ge) => {
          if (ge.id === j) {
            const Be = { ...ge, [_]: A };
            return r.forEach((be) => {
              be.type === "lastEditedTime" && (Be[be.id] = ee);
            }), Be;
          }
          return ge;
        }) || []
      }));
    } else
      o(i.map((ce) => {
        if (ce.id === j) {
          const J = { ...ce, [_]: A };
          return r.forEach((ge) => {
            ge.type === "lastEditedTime" && (J[ge.id] = ee);
          }), J;
        }
        return ce;
      }));
    l(null);
  }, ut = (j = "text", _) => {
    const A = `col-${Date.now()}`, ee = pi(), se = _ || j.charAt(0).toUpperCase() + j.slice(1), ce = {
      id: A,
      name: w.trim() || se,
      type: j,
      options: j === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, ce]), o(i.map((ge) => ({
      ...ge,
      [A]: j === "createdTime" || j === "lastEditedTime" ? ee : j === "formula" ? "" : j === "id" ? ge.id : null
    })));
    const J = { ...B };
    Object.keys(J).forEach((ge) => {
      J[ge] = J[ge].map((Be) => ({
        ...Be,
        [A]: j === "createdTime" || j === "lastEditedTime" ? ee : j === "formula" ? "" : j === "id" ? Be.id : null
      }));
    }), L(J), v(!1), S("");
  }, Sw = (j, _) => {
    n(r.map((A) => A.id === j ? { ...A, name: _ } : A)), s(null);
  }, of = (j) => {
    d((_) => {
      const A = new Set(_);
      return A.has(j) ? A.delete(j) : A.add(j), A;
    }), b(null);
  }, Ow = (j) => {
    n(r.filter((_) => _.id !== j)), o(i.map((_) => {
      const { [j]: A, ...ee } = _;
      return ee;
    })), b(null);
  }, Pw = (j) => {
    const _ = r.find((ge) => ge.id === j);
    if (!_) return;
    const A = r.findIndex((ge) => ge.id === j), ee = `col-${Date.now()}`, se = {
      ..._,
      id: ee,
      name: `${_.name} Copy`
    }, ce = [...r];
    ce.splice(A + 1, 0, se), n(ce), o(i.map((ge) => ({
      ...ge,
      [ee]: ge[j]
    })));
    const J = { ...B };
    Object.keys(J).forEach((ge) => {
      J[ge] = J[ge].map((Be) => ({
        ...Be,
        [ee]: Be[j]
      }));
    }), L(J), b(null);
  }, Cw = (j, _, A) => {
    C(!0), D({ rowId: j, colId: _, value: A }), $(/* @__PURE__ */ new Set([`${j}-${_}`]));
  }, kw = (j, _) => {
    O && E && E.colId === _ && $((A) => new Set(A).add(`${j}-${_}`));
  }, _w = () => {
    if (O && E) {
      const j = i.map((_) => {
        const A = `${_.id}-${E.colId}`;
        return I.has(A) ? { ..._, [E.colId]: E.value } : _;
      });
      o(j);
    }
    C(!1), D(null), $(/* @__PURE__ */ new Set());
  }, Ew = (j) => {
    V(j);
  }, Aw = (j, _) => {
    j.preventDefault(), q(_);
  }, Tw = (j, _) => {
    if (j.preventDefault(), k && k !== _) {
      const A = r.findIndex((J) => J.id === k), ee = r.findIndex((J) => J.id === _), se = [...r], [ce] = se.splice(A, 1);
      se.splice(ee, 0, ce), n(se);
    }
    V(null), q(null);
  }, Iw = () => {
    V(null), q(null);
  }, Mw = (j) => {
    Q(j);
  }, Dw = (j, _) => {
    j.preventDefault(), re(_);
  }, Nw = (j, _) => {
    if (j.preventDefault(), Z && Z !== _) {
      const A = i.findIndex((J) => J.id === Z), ee = i.findIndex((J) => J.id === _), se = [...i], [ce] = se.splice(A, 1);
      se.splice(ee, 0, ce), o(se);
    }
    Q(null), re(null);
  }, Rw = () => {
    Q(null), re(null);
  }, $w = (j) => {
    te.has(j) ? z((A) => {
      const ee = new Set(A);
      return ee.delete(j), ee;
    }) : (z((A) => {
      const ee = new Set(A);
      return ee.add(j), ee;
    }), (!B[j] || B[j].length === 0) && af(j));
  }, af = (j) => {
    const _ = pi(), A = `subrow-${j}-${Date.now()}`, ee = {
      id: A,
      ...r.reduce((se, ce) => ({
        ...se,
        [ce.id]: ce.type === "createdTime" || ce.type === "lastEditedTime" ? _ : ce.type === "formula" ? "" : ce.type === "id" ? A : null
      }), {})
    };
    L((se) => ({
      ...se,
      [j]: [...se[j] || [], ee]
    }));
  }, zw = (j, _) => {
    window.confirm("Are you sure you want to delete this sub-row?") && L((A) => ({
      ...A,
      [j]: A[j]?.filter((ee) => ee.id !== _) || []
    }));
  }, Lw = (j, _) => {
    le({ subRowId: j, parentId: _ });
  }, Bw = (j, _) => {
    j.preventDefault(), de(_);
  }, Ww = (j, _, A) => {
    if (j.preventDefault(), K && K.subRowId !== _ && K.parentId === A) {
      const ee = B[A] || [], se = ee.findIndex((Be) => Be.id === K.subRowId), ce = ee.findIndex((Be) => Be.id === _), J = [...ee], [ge] = J.splice(se, 1);
      J.splice(ce, 0, ge), L((Be) => ({
        ...Be,
        [A]: J
      }));
    }
    le(null), de(null);
  }, Fw = () => {
    le(null), de(null);
  }, Vw = (j, _, A, ee) => {
    ae(!0), Me({ rowId: j, colId: _, value: A, parentId: ee }), T(/* @__PURE__ */ new Set([`${j}-${_}`]));
  }, Kw = (j, _, A) => {
    G && F && F.colId === _ && F.parentId === A && T((ee) => new Set(ee).add(`${j}-${_}`));
  }, Hw = () => {
    if (G && F) {
      const j = F.parentId, _ = pi(), A = {
        ...B,
        [j]: B[j]?.map((ee) => {
          const se = `${ee.id}-${F.colId}`;
          if (xe.has(se)) {
            const ce = { ...ee, [F.colId]: F.value };
            return r.forEach((J) => {
              J.type === "lastEditedTime" && (ce[J.id] = _);
            }), ce;
          }
          return ee;
        }) || []
      };
      L(A);
    }
    ae(!1), Me(null), T(/* @__PURE__ */ new Set());
  }, lf = (j, _, A) => {
    if (!_.trim()) return;
    const ee = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], se = ee[Math.floor(Math.random() * ee.length)];
    n(r.map((ce) => {
      if (ce.id === j && ce.type === "select") {
        const J = ce.options || [];
        if (!J.some((Be) => Be.value.toLowerCase() === _.toLowerCase()))
          return {
            ...ce,
            options: [...J, { value: _, color: se }]
          };
      }
      return ce;
    })), St(A, j, _), H(null), Te("");
  }, qw = (j, _) => {
    n(r.map((ee) => ee.id === j && ee.type === "select" ? {
      ...ee,
      options: ee.options?.filter((se) => se.value !== _) || []
    } : ee)), o(i.map((ee) => ee[j] === _ ? { ...ee, [j]: null } : ee));
    const A = { ...B };
    Object.keys(A).forEach((ee) => {
      A[ee] = A[ee].map((se) => se[j] === _ ? { ...se, [j]: null } : se);
    }), L(A);
  }, Uw = (j, _) => {
    n(r.map(
      (A) => A.id === j ? { ...A, color: _ } : A
    )), Tt(null), b(null);
  }, Rr = (j) => {
    const _ = j.color || "#f8f9fa", A = Qd[j.id] || 150;
    return {
      th: {
        ...Ve.th,
        backgroundColor: _,
        color: j.color && j.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${A}px`,
        minWidth: `${A}px`,
        maxWidth: `${A}px`
      },
      td: {
        ...Ve.td,
        backgroundColor: j.color ? `${_}33` : "#ffffff",
        width: `${A}px`,
        minWidth: `${A}px`,
        maxWidth: `${A}px`
      }
    };
  }, Yw = (j, _) => {
    j.preventDefault(), j.stopPropagation(), ef(_), yw(j.clientX), mw(Qd[_] || 150);
  }, sf = (j) => {
    if (!Nr) return;
    const _ = j.clientX - tf, A = Math.max(50, rf + _);
    gw((ee) => ({ ...ee, [Nr]: A }));
  }, cf = () => {
    ef(null);
  };
  Oe(() => {
    if (Nr)
      return document.addEventListener("mousemove", sf), document.addEventListener("mouseup", cf), () => {
        document.removeEventListener("mousemove", sf), document.removeEventListener("mouseup", cf);
      };
  }, [Nr, tf, rf]);
  const Tn = r.filter((j) => !u.has(j.id)), mo = xw.filter((j) => Object.entries(Gt).every(([_, A]) => {
    if (!A.trim()) return !0;
    const ee = j[_];
    return ee == null ? !1 : String(ee).toLowerCase().includes(A.toLowerCase());
  })), Gw = (j) => {
    En((_) => {
      const A = { ..._ };
      return delete A[j], A;
    });
  }, Xw = (j) => nf.key === j ? nf.direction === "ascending" ? "▲" : "▼" : "↕", uf = (j, _, A, ee) => {
    const se = `${A}-${j.id}`, ce = y.has(se);
    if (ee)
      switch (j.type) {
        case "checkbox":
          return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!_, onChange: (J) => St(A, j.id, J.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ f.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: _ || "",
              onChange: (J) => {
                J.target.value === "__add_new__" ? (H({ columnId: j.id, rowId: A }), Te("")) : J.target.value === "__manage_options__" ? fe({ columnId: j.id, rowId: A }) : St(A, j.id, J.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "", children: "Select..." }),
                j.options?.map((J) => /* @__PURE__ */ f.jsx("option", { value: J.value, children: J.value }, J.value)),
                /* @__PURE__ */ f.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ f.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "createdTime":
        case "lastEditedTime":
          return /* @__PURE__ */ f.jsx("span", { style: { color: "#888" }, children: _ });
        case "date":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "date",
              defaultValue: _ || "",
              onBlur: (J) => St(A, j.id, J.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "button":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: _ || "Click me",
              onBlur: (J) => St(A, j.id, J.target.value),
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
          return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => {
                const J = document.createElement("input");
                J.type = "file", J.multiple = !0, J.accept = "image/*,video/*", J.onchange = (ge) => {
                  const be = Array.from(ge.target.files || []).map((zt) => ({
                    name: zt.name,
                    url: URL.createObjectURL(zt),
                    type: zt.type
                  }));
                  St(A, j.id, be);
                }, J.click();
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
              children: /* @__PURE__ */ f.jsx(jf, {})
            }
          ) });
        case "number":
          return /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: _ || "",
              onBlur: (J) => St(A, j.id, J.target.value),
              onKeyPress: (J) => {
                j.name === "Phone" ? (!/[0-9]/.test(J.key) || J.currentTarget.value.replace(/\D/g, "").length >= 10) && J.preventDefault() : /[0-9\-+.,\s]/.test(J.key) || J.preventDefault();
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
          return /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "email",
                defaultValue: _ || "",
                onBlur: (J) => St(A, j.id, J.target.value),
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
            ce && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "formula":
          return /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: _ || "",
              placeholder: "e.g., [Column1] + [Column2] * 2",
              onBlur: (J) => St(A, j.id, J.target.value),
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
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: _ || "",
              placeholder: "Enter location",
              onBlur: (J) => St(A, j.id, J.target.value),
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
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "url",
              defaultValue: _ || "",
              placeholder: "Enter URL",
              onBlur: (J) => St(A, j.id, J.target.value),
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
          return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsx(
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
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => alert(`Viewing row ${A}`),
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
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => alert(`Calling for row ${A}`),
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
          return /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontFamily: "monospace" }, children: _ });
        case "text":
        default:
          return /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                defaultValue: _ || "",
                onBlur: (J) => St(A, j.id, J.target.value),
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
            ce && j.name === "Email" && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
      }
    if (_ == null) return /* @__PURE__ */ f.jsx("span", { style: { color: "#aaa" } });
    switch (j.type) {
      case "checkbox":
        return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!_, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(_).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888" }, children: _ });
      case "select":
        const J = j.options?.find((be) => be.value === _);
        return J ? /* @__PURE__ */ f.jsx("span", { style: {
          backgroundColor: J.color + "33",
          color: J.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: _ }) : _;
      case "number":
        return /* @__PURE__ */ f.jsx("span", { style: { textAlign: "right", display: "block" }, children: j.name === "Phone" ? _ : Number(_).toLocaleString() });
      case "button":
        return /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => alert(`Button clicked in row ${A}!`),
            style: {
              padding: "4px 8px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px"
            },
            children: _ || "Click me"
          }
        );
      case "files":
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", maxWidth: "200px", alignItems: "center" }, children: [
          Array.isArray(_) && _.length > 0 ? _.map((be, zt) => /* @__PURE__ */ f.jsx("div", { style: { position: "relative" }, children: be.type?.startsWith("image/") ? /* @__PURE__ */ f.jsx(
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
          ) : be.type?.startsWith("video/") ? /* @__PURE__ */ f.jsx(
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
          ) : /* @__PURE__ */ f.jsx(
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
          ) }, zt)) : null,
          /* @__PURE__ */ f.jsx(
            jf,
            {
              style: {
                fontSize: "16px",
                color: "#666",
                cursor: "pointer",
                marginLeft: Array.isArray(_) && _.length > 0 ? "4px" : "0"
              },
              onClick: () => {
                const be = document.createElement("input");
                be.type = "file", be.multiple = !0, be.accept = "image/*,video/*", be.onchange = (zt) => {
                  const Zw = Array.from(zt.target.files || []).map((Rl) => ({
                    name: Rl.name,
                    url: URL.createObjectURL(Rl),
                    type: Rl.type
                  })), Jw = Array.isArray(_) ? _ : [];
                  St(A, j.id, [...Jw, ...Zw]);
                }, be.click();
              },
              title: "Upload files"
            }
          )
        ] });
      case "email":
        return /* @__PURE__ */ f.jsxs("div", { children: [
          _,
          ce && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const ge = i.find((be) => be.id === A) || Object.values(B).flat().find((be) => be.id === A), Be = ge ? y2(_, ge, r) : "Error";
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: Be }),
          /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: _, children: "Σ" })
        ] });
      case "place":
        return /* @__PURE__ */ f.jsxs(
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
              if (_) {
                const zt = document.createElement("div");
                zt.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y931Pk&q=${encodeURIComponent(_)}" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`, zt.style.cssText = "position: absolute; top: -210px; left: 0; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;", zt.id = `map-tooltip-${A}-${j.id}`, be.currentTarget.appendChild(zt);
              }
            },
            onMouseLeave: () => {
              const be = document.getElementById(`map-tooltip-${A}-${j.id}`);
              be && be.remove();
            },
            children: [
              /* @__PURE__ */ f.jsx("span", { style: { marginRight: "4px" }, children: "📍" }),
              /* @__PURE__ */ f.jsx("span", { children: _ || "No location" })
            ]
          }
        );
      case "url":
        return _ ? /* @__PURE__ */ f.jsx(
          "a",
          {
            href: _.startsWith("http") ? _ : `https://${_}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              color: "#007bff",
              textDecoration: "underline",
              cursor: "pointer"
            },
            children: _
          }
        ) : /* @__PURE__ */ f.jsx("span", { style: { color: "#aaa" }, children: "No URL" });
      case "action":
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
          /* @__PURE__ */ f.jsx(
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
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => alert(`Viewing row ${A}`),
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
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => alert(`Calling for row ${A}`),
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
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: _ });
      case "text":
      default:
        return /* @__PURE__ */ f.jsxs("div", { children: [
          _,
          ce && j.name === "Email" && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
    }
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    U && /* @__PURE__ */ f.jsx("div", { style: {
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
    }, children: /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "text",
          value: pe,
          onChange: (j) => Te(j.target.value),
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
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ f.jsx(
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
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => lf(U.columnId, pe, U.rowId),
            disabled: !pe.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: pe.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: pe.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    Ee && /* @__PURE__ */ f.jsx("div", { style: {
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
    }, children: /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px",
      maxHeight: "400px",
      overflowY: "auto"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Manage Options" }),
      /* @__PURE__ */ f.jsx("div", { style: { marginBottom: "15px" }, children: r.find((j) => j.id === Ee.columnId)?.options?.map((j) => /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "4px",
        backgroundColor: j.color + "33",
        borderRadius: "4px",
        border: `1px solid ${j.color}44`
      }, children: [
        /* @__PURE__ */ f.jsx("span", { style: { color: j.color, fontWeight: "500" }, children: j.value }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              window.confirm(`Delete option "${j.value}"? This will clear the value from all cells using this option.`) && qw(Ee.columnId, j.value);
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
      ] }, j.value)) }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ f.jsx(
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
    /* @__PURE__ */ f.jsx("style", { children: `
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
    /* @__PURE__ */ f.jsxs("table", { style: {
      ...Ve.table,
      backgroundColor: Y ? "#1a1a1a" : "#ffffff",
      color: Y ? "#ffffff" : "#333333",
      border: Y ? "2px solid #333" : "2px solid #e1e5e9"
    }, children: [
      /* @__PURE__ */ f.jsxs("thead", { children: [
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...Ve.th,
            width: "40px",
            backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
            borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9"
          } }),
          Tn.map((j) => {
            const _ = c === j.id;
            return /* @__PURE__ */ f.jsxs(
              "th",
              {
                draggable: !Nr,
                onDragStart: () => !Nr && Ew(j.id),
                onDragOver: (A) => Aw(A, j.id),
                onDrop: (A) => Tw(A, j.id),
                onDragEnd: Iw,
                style: {
                  ...Rr(j).th,
                  position: "relative",
                  backgroundColor: R === j.id ? Y ? "#444" : "#e3f2fd" : Y ? "#2a2a2a" : Rr(j).th.backgroundColor,
                  color: Y ? "#ffffff" : Rr(j).th.color,
                  borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
                  borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
                  opacity: k === j.id ? 0.5 : 1,
                  cursor: Nr ? "col-resize" : "move"
                },
                title: `Sort by ${j.name}`,
                children: [
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (A) => {
                        A.stopPropagation(), A.detail === 1 ? (v(!1), h(!1), b(x === j.id ? null : j.id)) : A.detail === 2 && (s(j.id), b(null));
                      },
                      children: _ ? /* @__PURE__ */ f.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: j.name,
                          onBlur: (A) => Sw(j.id, A.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                        /* @__PURE__ */ f.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: j.name }),
                        /* @__PURE__ */ f.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (A) => {
                              A.stopPropagation(), bw(j.id);
                            },
                            children: Xw(j.id)
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      onMouseDown: (A) => Yw(A, j.id),
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
                      onMouseEnter: (A) => {
                        Nr || (A.currentTarget.style.backgroundColor = Y ? "#666" : "#ccc");
                      },
                      onMouseLeave: (A) => {
                        A.currentTarget.style.backgroundColor = "transparent";
                      }
                    }
                  ),
                  x === j.id && /* @__PURE__ */ f.jsxs("div", { style: {
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
                    /* @__PURE__ */ f.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (A) => {
                          A.stopPropagation(), ui(ci === j.id ? null : j.id);
                        },
                        children: [
                          "Filter",
                          ci === j.id && /* @__PURE__ */ f.jsxs("div", { style: {
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
                            /* @__PURE__ */ f.jsx(
                              "input",
                              {
                                type: "text",
                                placeholder: `Filter ${j.name}...`,
                                value: Gt[j.id] || "",
                                onChange: (A) => {
                                  En((ee) => ({
                                    ...ee,
                                    [j.id]: A.target.value
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
                            Gt[j.id] && /* @__PURE__ */ f.jsx(
                              "button",
                              {
                                onClick: (A) => {
                                  A.stopPropagation(), Gw(j.id);
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
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (A) => {
                          A.stopPropagation(), Pw(j.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (A) => {
                          A.stopPropagation(), of(j.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (A) => {
                          A.stopPropagation(), Ow(j.id);
                        },
                        children: "Delete"
                      }
                    ),
                    /* @__PURE__ */ f.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333", position: "relative" },
                        onClick: (A) => {
                          A.stopPropagation(), Tt(gt === j.id ? null : j.id);
                        },
                        children: [
                          "Column Color",
                          gt === j.id && /* @__PURE__ */ f.jsx("div", { style: {
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
                          }, children: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd", "#f8f9fa"].map((A) => /* @__PURE__ */ f.jsx(
                            "div",
                            {
                              onClick: (ee) => {
                                ee.stopPropagation(), Uw(j.id, A);
                              },
                              style: {
                                width: "20px",
                                height: "20px",
                                backgroundColor: A,
                                borderRadius: "3px",
                                cursor: "pointer",
                                border: j.color === A ? "2px solid #333" : "1px solid #ddd"
                              }
                            },
                            A
                          )) })
                        ]
                      }
                    )
                  ] })
                ]
              },
              j.id
            );
          }),
          /* @__PURE__ */ f.jsxs(
            "th",
            {
              style: {
                ...Ve.th,
                color: Y ? "#888" : "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px",
                backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
                borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9"
              },
              children: [
                /* @__PURE__ */ f.jsx("button", { onClick: (j) => {
                  j.stopPropagation(), b(null), h(!1), v(!g);
                }, title: "Add column", style: { ...Ve.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ f.jsx("button", { onClick: (j) => {
                  j.stopPropagation(), b(null), v(!1), h(!p);
                }, style: { ...Ve.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ f.jsxs("div", { onClick: (j) => j.stopPropagation(), style: {
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
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: w,
                      onChange: (j) => S(j.target.value),
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
                  /* @__PURE__ */ f.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("text"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("number"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("select"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("checkbox"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("date"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("number", "Phone"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📞" }),
                    " Phone"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("email"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("place", "Place"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📍" }),
                    " Place"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("url", "URL"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🔗" }),
                    " URL"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("formula", "Formula"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("button", "Button"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🖱️" }),
                    " Button"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("files", "Files"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📎" }),
                    " Files"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("id", "ID"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("action", "Action"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "⚡" }),
                    " Action"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("createdTime", "Created time"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: Y ? "#ffffff" : "#333333" }, onClick: () => ut("lastEditedTime", "Last edited time"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = Y ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ f.jsxs("div", { onClick: (j) => j.stopPropagation(), style: {
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
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 0", borderBottom: "1px solid #e1e5e9", marginBottom: "8px" }, children: [
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
                      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666" }, children: "Dark Mode" }),
                      /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: () => vw(!Y),
                          style: {
                            width: "40px",
                            height: "20px",
                            borderRadius: "10px",
                            backgroundColor: Y ? "#007bff" : "#ccc",
                            position: "relative",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                          },
                          children: /* @__PURE__ */ f.jsx(
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
                    /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666", marginBottom: "4px" }, children: "Row Colors" }),
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", position: "relative" }, children: [
                      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Odd:" }),
                      /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (j) => {
                            j.stopPropagation(), go(!Zd), yo(!1);
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
                      Zd && /* @__PURE__ */ f.jsx("div", { style: {
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
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((j) => /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (_) => {
                            _.stopPropagation(), Nl(j), go(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: j,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: An === j ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        j
                      )) })
                    ] }),
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", position: "relative" }, children: [
                      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Even:" }),
                      /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (j) => {
                            j.stopPropagation(), yo(!Jd), go(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: vo,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      Jd && /* @__PURE__ */ f.jsx("div", { style: {
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
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((j) => /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (_) => {
                            _.stopPropagation(), hw(j), yo(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: j,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: vo === j ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        j
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { borderTop: "1px solid #e1e5e9", marginTop: "8px", paddingTop: "8px" }, children: [
                    /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666", marginBottom: "8px", fontWeight: "500" }, children: "Active Users" }),
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
                      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px", backgroundColor: Y ? "#333" : "#f8f9fa" }, children: [
                        /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28a745" } }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: Y ? "#fff" : "#333" }, children: "Current User" }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "10px", color: Y ? "#888" : "#666", marginLeft: "auto" }, children: "Online" })
                      ] }),
                      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc3545" } }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: Y ? "#fff" : "#333" }, children: "Admin" }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "10px", color: Y ? "#888" : "#666", marginLeft: "auto" }, children: "Away" })
                      ] }),
                      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6c757d" } }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: Y ? "#fff" : "#333" }, children: "Guest" }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "10px", color: Y ? "#888" : "#666", marginLeft: "auto" }, children: "Offline" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: Y ? "#ccc" : "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((j) => /* @__PURE__ */ f.jsxs(
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
                      onClick: () => of(j.id),
                      children: [
                        /* @__PURE__ */ f.jsx("span", { children: j.name }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px" }, children: u.has(j.id) ? /* @__PURE__ */ f.jsx(zy, {}) : /* @__PURE__ */ f.jsx(Ly, {}) })
                      ]
                    },
                    j.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...Ve.th,
            width: "40px",
            backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
            borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } }),
          Tn.map((j) => /* @__PURE__ */ f.jsx(
            "th",
            {
              style: {
                ...Rr(j).th,
                backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
                color: Y ? "#ffffff" : "#666666",
                borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: Gt[j.id] || "",
                  onChange: (_) => {
                    En((A) => ({
                      ...A,
                      [j.id]: _.target.value
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
                  onClick: (_) => _.stopPropagation()
                }
              )
            },
            `search-${j.id}`
          )),
          /* @__PURE__ */ f.jsx("th", { style: {
            ...Ve.th,
            backgroundColor: Y ? "#2a2a2a" : "#f8f9fa",
            borderRight: Y ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: Y ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("tbody", { children: [
        mo.map((j) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
          /* @__PURE__ */ f.jsxs(
            "tr",
            {
              draggable: !0,
              onDragStart: () => Mw(j.id),
              onDragOver: (_) => Dw(_, j.id),
              onDrop: (_) => Nw(_, j.id),
              onDragEnd: Rw,
              style: {
                ...Ve.tr,
                backgroundColor: N === j.id ? Y ? "#444" : "#e3f2fd" : Y ? mo.indexOf(j) % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : mo.indexOf(j) % 2 === 0 ? vo : An,
                opacity: Z === j.id ? 0.5 : 1,
                cursor: "move"
              },
              onMouseEnter: (_) => {
                !Z && !Y && (_.currentTarget.style.backgroundColor = Ve.trHover.backgroundColor);
              },
              onMouseLeave: (_) => {
                if (!Z) {
                  const A = mo.indexOf(j), ee = Y ? A % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : A % 2 === 0 ? vo : An;
                  _.currentTarget.style.backgroundColor = N === j.id ? Y ? "#444" : "#e3f2fd" : ee;
                }
              },
              children: [
                /* @__PURE__ */ f.jsx("td", { style: {
                  ...Ve.td,
                  textAlign: "center",
                  color: Y ? "#888" : "#aaa",
                  backgroundColor: "inherit",
                  border: Y ? "1px solid #444" : "1px solid #cececeff"
                }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                  /* @__PURE__ */ f.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: Y ? "#888" : "#999" }, children: "⋮⋮" }),
                  /* @__PURE__ */ f.jsx("button", { onClick: (_) => {
                    _.stopPropagation(), jw(j.id);
                  }, style: { ...Ve.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ f.jsx(Ti, {}) }),
                  /* @__PURE__ */ f.jsx("button", { onClick: (_) => {
                    _.stopPropagation(), $w(j.id);
                  }, style: { ...Ve.button, cursor: "pointer", color: "#242424ff", backgroundColor: "transparent", fontSize: "12px" }, title: "Toggle sub-rows", children: te.has(j.id) ? /* @__PURE__ */ f.jsx(h2, {}) : /* @__PURE__ */ f.jsx(v2, {}) })
                ] }) }),
                Tn.map((_) => {
                  const A = a?.rowId === j.id && a?.colId === _.id, ee = `${j.id}-${_.id}`, se = I.has(ee);
                  return /* @__PURE__ */ f.jsx(
                    "td",
                    {
                      style: {
                        ...Rr(_).td,
                        backgroundColor: se ? Y ? "#444" : "#f0f0f0" : ue?.rowId === j.id && ue?.colId === _.id ? Y ? "#444" : "#e3f2fd" : _.color ? Rr(_).td.backgroundColor : "inherit",
                        color: Y ? "#ffffff" : "#333333",
                        border: ue?.rowId === j.id && ue?.colId === _.id ? "2px dashed #007bff" : Y ? "1px solid #444" : "1px solid #cececeff",
                        userSelect: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      onClick: (ce) => {
                        ce.stopPropagation(), l({ rowId: j.id, colId: _.id });
                      },
                      draggable: !A,
                      onDragStart: (ce) => {
                        ce.stopPropagation(), Cw(j.id, _.id, j[_.id]);
                      },
                      onDragEnter: (ce) => {
                        ce.stopPropagation(), kw(j.id, _.id);
                      },
                      onDragEnd: (ce) => {
                        ce.stopPropagation(), _w();
                      },
                      onDragOver: (ce) => {
                        ce.preventDefault(), ce.stopPropagation();
                      },
                      children: uf(_, j[_.id], j.id, A)
                    },
                    _.id
                  );
                }),
                /* @__PURE__ */ f.jsx("td", { style: {
                  ...Ve.td,
                  backgroundColor: "inherit",
                  border: Y ? "1px solid #444" : "1px solid #cececeff"
                } })
              ]
            }
          ),
          te.has(j.id) && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            B[j.id]?.map((_) => /* @__PURE__ */ f.jsxs(
              "tr",
              {
                draggable: !0,
                onDragStart: () => Lw(_.id, j.id),
                onDragOver: (A) => Bw(A, _.id),
                onDrop: (A) => Ww(A, _.id, j.id),
                onDragEnd: Fw,
                style: {
                  ...Ve.tr,
                  backgroundColor: me === _.id ? "#d1ecf1" : "#e9ecef",
                  opacity: K?.subRowId === _.id ? 0.5 : 1,
                  cursor: "move"
                },
                children: [
                  /* @__PURE__ */ f.jsx("td", { style: { ...Ve.td, textAlign: "center", color: "#aaa", backgroundColor: "#e9ecef" }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", paddingLeft: "20px" }, children: [
                    /* @__PURE__ */ f.jsx("span", { style: { cursor: "grab", fontSize: "10px", color: "#999" }, children: "⋮⋮" }),
                    /* @__PURE__ */ f.jsx("button", { onClick: (A) => {
                      A.stopPropagation(), zw(j.id, _.id);
                    }, style: { ...Ve.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff", fontSize: "10px" }, title: "Delete sub-row", children: /* @__PURE__ */ f.jsx(Ti, {}) })
                  ] }) }),
                  Tn.map((A) => {
                    const ee = a?.rowId === _.id && a?.colId === A.id;
                    return /* @__PURE__ */ f.jsx(
                      "td",
                      {
                        style: {
                          ...Rr(A).td,
                          backgroundColor: xe.has(`${_.id}-${A.id}`) ? "#f0f0f0" : ue?.rowId === _.id && ue?.colId === A.id ? "#e3f2fd" : A.color ? `${A.color}22` : "#ecececff",
                          border: ue?.rowId === _.id && ue?.colId === A.id ? "2px dashed #007bff" : Rr(A).td.border,
                          userSelect: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        onClick: (se) => {
                          se.stopPropagation(), l({ rowId: _.id, colId: A.id });
                        },
                        draggable: !ee,
                        onDragStart: (se) => {
                          se.stopPropagation(), Vw(_.id, A.id, _[A.id], j.id);
                        },
                        onDragEnter: (se) => {
                          se.stopPropagation(), Kw(_.id, A.id, j.id);
                        },
                        onDragEnd: (se) => {
                          se.stopPropagation(), Hw();
                        },
                        onDragOver: (se) => {
                          se.preventDefault(), se.stopPropagation();
                        },
                        children: uf(A, _[A.id], _.id, ee)
                      },
                      A.id
                    );
                  }),
                  /* @__PURE__ */ f.jsx("td", { style: { ...Ve.td, backgroundColor: "#e9ecef" } })
                ]
              },
              _.id
            )),
            /* @__PURE__ */ f.jsx("tr", { style: { backgroundColor: "#b7b8b9ff" }, children: /* @__PURE__ */ f.jsx("td", { colSpan: Tn.length + 2, style: { ...Ve.td, textAlign: "center", color: "#ffffffff", cursor: "pointer", backgroundColor: "#5b5b5bff", paddingLeft: "20px" }, onClick: () => af(j.id), children: "+ Add Sub Row" }) })
          ] })
        ] }, j.id)),
        /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: Tn.length + 2, style: {
          ...Ve.td,
          textAlign: "center",
          color: Y ? "#888" : "#aaa",
          cursor: "pointer",
          backgroundColor: "inherit",
          border: Y ? "1px solid #444" : "1px solid #cececeff"
        }, onClick: ww, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
};
function Of(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z" }, child: [] }] })(e);
}
function m2(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" }, child: [] }] })(e);
}
function Pf(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z" }, child: [] }] })(e);
}
function x2(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" }, child: [] }] })(e);
}
const hR = ({ columns: e, initialData: t }) => {
  const [r] = W(t), [n, i] = W("table"), [o, a] = W(!1), [l, c] = W(!1), [s, u] = W(null), [d] = W({}), [p, h] = W(null), [g, v] = W(!0), [y, m] = W(!0), [x, b] = W("Date"), [w, S] = W("Month"), [O, C] = W(!0), [E, D] = W("Center peek"), I = r;
  Oe(() => {
    const B = () => {
      a(!1), h(null);
    }, L = (K) => {
      K.key === "Escape" && (K.preventDefault(), h(null), u(null));
    };
    return document.addEventListener("click", B), document.addEventListener("keydown", L), () => {
      document.removeEventListener("click", B), document.removeEventListener("keydown", L);
    };
  }, [s, p, r, d]);
  const $ = (B) => {
    switch (B) {
      case "table":
        return /* @__PURE__ */ f.jsx($l, {});
      case "board":
        return /* @__PURE__ */ f.jsx(wf, {});
      case "timeline":
        return /* @__PURE__ */ f.jsx(Of, {});
      case "calendar":
        return /* @__PURE__ */ f.jsx(gf, {});
      case "list":
        return /* @__PURE__ */ f.jsx(mf, {});
      case "gallery":
        return /* @__PURE__ */ f.jsx(Pf, {});
      case "chart":
        return /* @__PURE__ */ f.jsx(yf, {});
      case "feed":
        return /* @__PURE__ */ f.jsx(bf, {});
      case "map":
        return /* @__PURE__ */ f.jsx(xf, {});
      default:
        return /* @__PURE__ */ f.jsx($l, {});
    }
  }, k = () => /* @__PURE__ */ f.jsxs("div", { style: {
    position: "relative",
    display: "inline-block",
    marginBottom: "16px"
  }, children: [
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        onClick: (B) => {
          B.stopPropagation(), a(!o);
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
          $(n),
          /* @__PURE__ */ f.jsx("span", { style: { textTransform: "capitalize" }, children: n }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px" }, children: "▼" })
        ]
      }
    ),
    o && /* @__PURE__ */ f.jsxs("div", { style: {
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
      /* @__PURE__ */ f.jsx("div", { style: {
        padding: "4px 0",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        marginBottom: "8px"
      }, children: /* @__PURE__ */ f.jsx("span", { style: {
        fontSize: "12px",
        color: l ? "#888" : "#666",
        fontWeight: "500",
        paddingLeft: "8px"
      }, children: "Layout" }) }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }, children: [
        { type: "table", label: "Table", icon: /* @__PURE__ */ f.jsx($l, {}) },
        { type: "board", label: "Board", icon: /* @__PURE__ */ f.jsx(wf, {}) },
        { type: "timeline", label: "Timeline", icon: /* @__PURE__ */ f.jsx(Of, {}) },
        { type: "calendar", label: "Calendar", icon: /* @__PURE__ */ f.jsx(gf, {}) },
        { type: "list", label: "List", icon: /* @__PURE__ */ f.jsx(mf, {}) },
        { type: "gallery", label: "Gallery", icon: /* @__PURE__ */ f.jsx(Pf, {}) },
        { type: "chart", label: "Chart", icon: /* @__PURE__ */ f.jsx(yf, {}) },
        { type: "feed", label: "Feed", icon: /* @__PURE__ */ f.jsx(bf, {}) },
        { type: "map", label: "Map", icon: /* @__PURE__ */ f.jsx(xf, {}) }
      ].map(({ type: B, label: L, icon: K }) => /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: () => {
            i(B), a(!1);
          },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "12px 8px",
            cursor: "pointer",
            borderRadius: "6px",
            backgroundColor: n === B ? l ? "#444" : "#e3f2fd" : "transparent",
            color: l ? "#ffffff" : "#333333",
            fontSize: "12px",
            border: n === B ? "2px solid #007bff" : "1px solid transparent"
          },
          onMouseEnter: (le) => {
            n !== B && (le.currentTarget.style.backgroundColor = l ? "#333" : "#f5f5f5");
          },
          onMouseLeave: (le) => {
            n !== B && (le.currentTarget.style.backgroundColor = "transparent");
          },
          children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "18px" }, children: K }),
            /* @__PURE__ */ f.jsx("span", { children: L })
          ]
        },
        B
      )) }),
      /* @__PURE__ */ f.jsx("div", { style: { borderTop: l ? "1px solid #444" : "1px solid #e1e5e9", paddingTop: "12px" }, children: /* @__PURE__ */ f.jsxs("div", { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show page icon" }),
          /* @__PURE__ */ f.jsx(
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
              children: /* @__PURE__ */ f.jsx(
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
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Wrap page titles" }),
          /* @__PURE__ */ f.jsx(
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
              children: /* @__PURE__ */ f.jsx(
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
        n === "calendar" && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show calendar by" }),
            /* @__PURE__ */ f.jsxs(
              "select",
              {
                value: x,
                onChange: (B) => b(B.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: l ? "#333" : "#fff",
                  color: l ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ f.jsx("option", { value: "Date", children: "Date" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Created", children: "Created" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Modified", children: "Modified" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show calendar as" }),
            /* @__PURE__ */ f.jsxs(
              "select",
              {
                value: w,
                onChange: (B) => S(B.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: l ? "#333" : "#fff",
                  color: l ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ f.jsx("option", { value: "Month", children: "Month" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Week", children: "Week" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Day", children: "Day" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show weekends" }),
            /* @__PURE__ */ f.jsx(
              "div",
              {
                onClick: () => C(!O),
                style: {
                  width: "40px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: O ? "#007bff" : "#ccc",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background-color 0.3s"
                },
                children: /* @__PURE__ */ f.jsx(
                  "div",
                  {
                    style: {
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "2px",
                      left: O ? "22px" : "2px",
                      transition: "left 0.3s"
                    }
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Open pages in" }),
          /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: E,
              onChange: (B) => D(B.target.value),
              style: {
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: l ? "#333" : "#fff",
                color: l ? "#fff" : "#333"
              },
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "Center peek", children: "Center peek" }),
                /* @__PURE__ */ f.jsx("option", { value: "Side peek", children: "Side peek" }),
                /* @__PURE__ */ f.jsx("option", { value: "Full page", children: "Full page" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] }), V = () => {
    const B = e.find((me) => me.type === "select") || e[0], L = B?.options || [{ value: "Default", color: "#007bff" }], K = e.length, le = Math.max(280, K * 40);
    return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", gap: "16px", overflowX: "auto", padding: "16px", minHeight: "400px" }, children: L.map((me) => /* @__PURE__ */ f.jsxs("div", { style: {
      flex: `1 1 ${le}px`,
      minWidth: `${le}px`,
      maxWidth: `${Math.max(400, K * 60)}px`,
      backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
      borderRadius: "8px",
      padding: "16px"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", color: l ? "#ffffff" : "#333333" }, children: me.value }),
      I.filter((de) => de[B?.id || ""] === me.value).map((de) => /* @__PURE__ */ f.jsx("div", { style: {
        backgroundColor: l ? "#1a1a1a" : "#ffffff",
        border: l ? "1px solid #444" : "1px solid #e1e5e9",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "8px",
        color: l ? "#ffffff" : "#333333",
        minHeight: Math.max(80, K * 20),
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }, children: e.map((ue) => {
        const X = de[ue.id];
        return !X || ue.id === B?.id ? null : /* @__PURE__ */ f.jsxs("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          alignItems: "center",
          minHeight: "20px"
        }, children: [
          /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "60px" }, children: [
            ue.name,
            ":"
          ] }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", flex: "1" }, children: String(X) })
        ] }, ue.id);
      }) }, de.id))
    ] }, me.value)) });
  }, R = () => {
    const B = e.length, L = Math.max(120, 800 / B);
    return /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", overflowX: "auto" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${L}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "2px solid #444" : "2px solid #e1e5e9",
        fontWeight: "600",
        backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${B * L}px`
      }, children: e.map((K) => /* @__PURE__ */ f.jsx("div", { style: { fontSize: "14px", minWidth: `${L}px` }, children: K.name }, K.id)) }),
      I.map((K) => /* @__PURE__ */ f.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${L}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${B * L}px`
      }, children: e.map((le) => /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", minWidth: `${L}px` }, children: K[le.id] ? String(K[le.id]) : "-" }, le.id)) }, K.id))
    ] });
  }, q = () => {
    const B = /* @__PURE__ */ new Date(), L = B.getFullYear(), K = B.getMonth(), le = new Date(L, K, 1), de = new Date(L, K + 1, 0).getDate(), ue = le.getDay(), X = [
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
    for (let ae = 0; ae < ue; ae++)
      G.push(/* @__PURE__ */ f.jsx("div", { style: { padding: "8px" } }, `empty-${ae}`));
    for (let ae = 1; ae <= de; ae++) {
      const F = new Date(L, K, ae).getDay() === 0 || new Date(L, K, ae).getDay() === 6;
      G.push(
        /* @__PURE__ */ f.jsx("div", { style: {
          padding: "8px",
          border: l ? "1px solid #444" : "1px solid #e1e5e9",
          minHeight: "80px",
          backgroundColor: F && !O ? "#f5f5f5" : "transparent",
          color: l ? "#ffffff" : "#333333"
        }, children: /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "500", marginBottom: "4px" }, children: ae }) }, ae)
      );
    }
    return /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px" }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        fontSize: "18px",
        fontWeight: "600",
        color: l ? "#ffffff" : "#333333"
      }, children: [
        X[K],
        " ",
        L
      ] }),
      /* @__PURE__ */ f.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "1px",
        backgroundColor: l ? "#444" : "#e1e5e9"
      }, children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((ae) => /* @__PURE__ */ f.jsx("div", { style: {
          padding: "8px",
          textAlign: "center",
          fontWeight: "600",
          backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
          color: l ? "#ffffff" : "#333333"
        }, children: ae }, ae)),
        G
      ] })
    ] });
  }, Z = () => /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px" }, children: [
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Timeline View" }),
    I.map((B) => /* @__PURE__ */ f.jsxs("div", { style: {
      display: "flex",
      gap: "16px",
      padding: "12px 0",
      borderLeft: l ? "2px solid #444" : "2px solid #e1e5e9",
      paddingLeft: "16px",
      marginLeft: "8px",
      position: "relative"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        position: "absolute",
        left: "-6px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: l ? "#666" : "#007bff"
      } }),
      /* @__PURE__ */ f.jsx("div", { style: { flex: 1, color: l ? "#ffffff" : "#333333" }, children: e.map((L) => {
        const K = B[L.id];
        return K ? /* @__PURE__ */ f.jsxs("div", { style: { marginBottom: "4px" }, children: [
          /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: [
            L.name,
            ":"
          ] }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px" }, children: String(K) })
        ] }, L.id) : null;
      }) })
    ] }, B.id))
  ] }), Q = () => {
    const B = e.length, L = Math.max(280, B * 35);
    return /* @__PURE__ */ f.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${L}px, 1fr))`,
      gap: "16px",
      padding: "16px"
    }, children: I.map((K) => /* @__PURE__ */ f.jsx("div", { style: {
      backgroundColor: l ? "#2a2a2a" : "#ffffff",
      border: l ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "16px",
      color: l ? "#ffffff" : "#333333",
      minHeight: Math.max(200, B * 25),
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }, children: e.map((le) => {
      const me = K[le.id];
      return me ? /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        minHeight: "24px"
      }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: le.name }),
        /* @__PURE__ */ f.jsx("div", { style: { fontSize: "14px", wordBreak: "break-word", flex: "1" }, children: String(me) })
      ] }, le.id) : null;
    }) }, K.id)) });
  }, N = () => /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Chart View" }),
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Chart view would display data visualizations. This is a placeholder for chart implementation." })
  ] }), re = () => /* @__PURE__ */ f.jsx("div", { style: { padding: "16px" }, children: I.map((B) => /* @__PURE__ */ f.jsxs("div", { style: {
    backgroundColor: l ? "#2a2a2a" : "#ffffff",
    border: l ? "1px solid #444" : "1px solid #e1e5e9",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    color: l ? "#ffffff" : "#333333"
  }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: l ? "#444" : "#e1e5e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px"
      }, children: "📝" }),
      /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "600", fontSize: "16px", marginBottom: "4px" }, children: B[e[0]?.id] || "Untitled" }),
        /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: l ? "#888" : "#666" }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "grid", gap: "8px" }, children: e.slice(1).map((L) => {
      const K = B[L.id];
      return K ? /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "80px" }, children: [
          L.name,
          ":"
        ] }),
        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", flex: 1 }, children: String(K) })
      ] }, L.id) : null;
    }) })
  ] }, B.id)) }), te = () => /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Map View" }),
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Map view would show location-based data. This is a placeholder for map implementation." })
  ] }), z = () => {
    switch (n) {
      case "table":
        return /* @__PURE__ */ f.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ f.jsx(Sf, { columns: e, initialData: r }) });
      case "board":
        return V();
      case "timeline":
        return Z();
      case "calendar":
        return q();
      case "list":
        return R();
      case "gallery":
        return Q();
      case "chart":
        return N();
      case "feed":
        return re();
      case "map":
        return te();
      default:
        return /* @__PURE__ */ f.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ f.jsx(Sf, { columns: e, initialData: r }) });
    }
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("style", { children: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        ` }),
    /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: l ? "#1a1a1a" : "#ffffff",
      color: l ? "#ffffff" : "#333333",
      padding: "20px",
      width: "100%",
      minHeight: "100vh",
      boxSizing: "border-box",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "10px"
      }, children: [
        k(),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => c(!l),
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
      /* @__PURE__ */ f.jsx("div", { style: { width: "100%", overflow: "hidden" }, children: z() })
    ] })
  ] });
}, vR = ({
  initialRows: e = 3,
  initialCols: t = 4,
  rows: r,
  cols: n
}) => {
  const [i, o] = W(r || e), [a, l] = W(n || t), [c, s] = W({}), [u, d] = W(null), [p, h] = W(null), [g, v] = W(null), y = (k, V) => `${k}-${V}`, m = (k, V) => c[y(k, V)] || "", x = (k, V, R) => {
    s((q) => ({ ...q, [y(k, V)]: R }));
  }, b = () => o((k) => k + 1), w = () => l((k) => k + 1), S = () => i > 1 && o((k) => k - 1), O = () => a > 1 && l((k) => k - 1), C = (k, V) => {
    d({ row: k, col: V });
  }, E = (k, V) => {
    h({ row: k, col: V });
  }, D = () => {
    h(null);
  }, I = (k) => {
    k.key === "Enter" && h(null);
  }, $ = (k, V) => {
    const R = p?.row === k && p?.col === V, q = m(k, V);
    return R ? /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "text",
        value: q,
        onChange: (Z) => x(k, V, Z.target.value),
        onBlur: D,
        onKeyDown: I,
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
    ) : /* @__PURE__ */ f.jsx(
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
          color: q ? "#1a1a1a" : "#9ca3af",
          cursor: "pointer",
          position: "relative",
          minHeight: "60px"
        },
        children: q || /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ f.jsx(f2, { size: 10, style: { opacity: 0.5 } }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px" }, children: "Click to edit" })
        ] })
      }
    );
  };
  return /* @__PURE__ */ f.jsxs("div", { style: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "24px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0"
    }, children: [
      /* @__PURE__ */ f.jsxs(
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
            /* @__PURE__ */ f.jsx(x2, { size: 14 }),
            "Add Row"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: w,
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
            /* @__PURE__ */ f.jsx(m2, { size: 14 }),
            "Add Column"
          ]
        }
      ),
      /* @__PURE__ */ f.jsx("div", { style: { width: "1px", height: "24px", backgroundColor: "#e2e8f0" } }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: S,
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
            /* @__PURE__ */ f.jsx(Ti, { size: 12 }),
            "Delete Row"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: O,
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
            /* @__PURE__ */ f.jsx(Ti, { size: 12 }),
            "Delete Column"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { style: { marginLeft: "auto", fontSize: "13px", color: "#64748b" }, children: [
        i,
        " × ",
        a,
        " grid"
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${a}, 1fr)`,
      gap: "2px",
      backgroundColor: "#e2e8f0",
      borderRadius: "8px",
      padding: "2px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    }, children: Array.from({ length: i * a }, (k, V) => {
      const R = Math.floor(V / a), q = V % a, Z = u?.row === R && u?.col === q, Q = g?.row === R && g?.col === q;
      return /* @__PURE__ */ f.jsx(
        "div",
        {
          onClick: () => C(R, q),
          onDoubleClick: () => E(R, q),
          onMouseEnter: () => v({ row: R, col: q }),
          onMouseLeave: () => v(null),
          style: {
            backgroundColor: Z ? "#dbeafe" : Q ? "#f1f5f9" : "#ffffff",
            borderRadius: "6px",
            border: Z ? "2px solid #3b82f6" : "2px solid transparent",
            transition: "all 0.2s ease",
            cursor: "pointer",
            position: "relative"
          },
          children: $(R, q)
        },
        y(R, q)
      );
    }) }),
    /* @__PURE__ */ f.jsx("div", { style: {
      marginTop: "16px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "6px",
      fontSize: "13px",
      color: "#64748b",
      textAlign: "center"
    }, children: "Click to select • Double-click to edit • Use toolbar to modify structure" })
  ] });
}, By = [
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
], gR = () => {
  const [e, t] = W([
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
  ]), [r, n] = W(null), [i, o] = W(""), a = By.filter(
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
  }, c = (p, h, g) => {
    t(e.map(
      (v) => v.id === p ? { ...v, [h]: g } : v
    ));
  }, s = (p, h, g) => {
    t(e.map(
      (v) => v.id === p ? {
        ...v,
        [h]: { bf: g === "bf", af: g === "af" }
      } : v
    ));
  }, u = (p, h) => {
    c(p, "name", h.name), n(null), o("");
  }, d = (p, h) => {
    c(p, "name", h), o(h), n(h ? p : null);
  };
  return /* @__PURE__ */ f.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => n(null), children: [
    /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: e.map((p) => /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ f.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
          /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              placeholder: "Type medicine name",
              value: p.name,
              onChange: (h) => d(p.id, h.target.value),
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
          r === p.id && /* @__PURE__ */ f.jsx("div", { style: {
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
          }, children: a.map((h) => /* @__PURE__ */ f.jsxs(
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
                /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: h.name }),
                /* @__PURE__ */ f.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                  "(",
                  h.generic,
                  ")"
                ] }),
                /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: h.dosage })
              ]
            },
            h.id
          )) })
        ] }),
        /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "number",
            value: p.days,
            onChange: (h) => c(p.id, "days", h.target.value),
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
        ["morning", "afternoon", "evening", "night"].map((h) => /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "radio",
                name: `${p.id}-${h}`,
                checked: p[h].bf,
                onChange: () => s(p.id, h, "bf"),
                style: { margin: 0 }
              }
            ),
            "BF"
          ] }),
          /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "radio",
                name: `${p.id}-${h}`,
                checked: p[h].af,
                onChange: () => s(p.id, h, "af"),
                style: { margin: 0 }
              }
            ),
            "AF"
          ] })
        ] }) }, h))
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ f.jsx(
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
}, yR = () => {
  const [e, t] = W(() => {
    const w = sessionStorage.getItem("medicines");
    return w ? JSON.parse(w) : [
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
  }), [r, n] = W(null), [i, o] = W(""), [a, l] = W(null), [c, s] = W(""), u = By.filter(
    (w) => w.name.toLowerCase().includes(i.toLowerCase()) || w.generic.toLowerCase().includes(i.toLowerCase())
  ), d = () => {
    const w = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    t([...e, w]);
  }, p = (w, S, O) => {
    t(e.map(
      (C) => C.id === w ? { ...C, [S]: O } : C
    ));
  }, h = (w, S, O) => {
    t(e.map(
      (C) => C.id === w ? {
        ...C,
        [S]: { bf: O === "bf", af: O === "af" }
      } : C
    ));
  }, g = (w, S) => {
    p(w, "name", S.name), n(null), o("");
  }, v = (w, S) => {
    p(w, "name", S), o(S), n(S ? w : null);
  }, y = (w) => {
    const S = e.find((O) => O.id === w);
    s(S?.comment || ""), l(w);
  }, m = (w) => {
    const S = e.map(
      (O) => O.id === w ? { ...O, comment: c } : O
    );
    t(S), sessionStorage.setItem("medicines", JSON.stringify(S)), l(null), s("");
  }, x = (w) => {
    const S = e.find((O) => O.id === w);
    s(S?.comment || ""), l(w);
  }, b = () => {
    l(null), s("");
  };
  return /* @__PURE__ */ f.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => n(null), children: [
    /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: e.map((w) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
        /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
          /* @__PURE__ */ f.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                placeholder: "Type medicine name",
                value: w.name,
                onChange: (S) => v(w.id, S.target.value),
                onFocus: () => n(w.id),
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
            w.comment && /* @__PURE__ */ f.jsxs("div", { style: {
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
              /* @__PURE__ */ f.jsx("span", { style: { flex: 1, wordBreak: "break-word" }, children: w.comment }),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  onClick: () => x(w.id),
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
            r === w.id && /* @__PURE__ */ f.jsx("div", { style: {
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
            }, children: u.map((S) => /* @__PURE__ */ f.jsxs(
              "div",
              {
                onClick: () => g(w.id, S),
                style: {
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0"
                },
                onMouseEnter: (O) => O.currentTarget.style.backgroundColor = "#f5f5f5",
                onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "white",
                children: [
                  /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: S.name }),
                  /* @__PURE__ */ f.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                    "(",
                    S.generic,
                    ")"
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: S.dosage })
                ]
              },
              S.id
            )) })
          ] }),
          /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "number",
              value: w.days,
              onChange: (S) => p(w.id, "days", S.target.value),
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
          ["morning", "afternoon", "evening", "night"].map((S) => /* @__PURE__ */ f.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: [
            /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${w.id}-${S}`,
                    checked: w[S].bf,
                    onChange: () => h(w.id, S, "bf"),
                    style: { margin: 0 }
                  }
                ),
                "BF"
              ] }),
              /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${w.id}-${S}`,
                    checked: w[S].af,
                    onChange: () => h(w.id, S, "af"),
                    style: { margin: 0 }
                  }
                ),
                "AF"
              ] })
            ] }),
            S === "night" && /* @__PURE__ */ f.jsx("div", { style: { marginTop: "8px" }, children: /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => y(w.id),
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
          ] }, S))
        ] }),
        a === w.id && /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: 6, style: { padding: "0", border: "1px solid #ddd" }, children: /* @__PURE__ */ f.jsxs("div", { style: {
          backgroundColor: "#e4e7fd",
          border: "2px solid #4f67ff",
          borderRadius: "4px",
          padding: "8px",
          margin: "4px"
        }, children: [
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: c,
              onChange: (S) => s(S.target.value),
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
          /* @__PURE__ */ f.jsxs("div", { style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            marginTop: "8px"
          }, children: [
            /* @__PURE__ */ f.jsx(
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
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => m(w.id),
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
      ] }, w.id)) })
    ] }),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        onClick: d,
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
function Ue() {
  const e = ve(null), [t, r] = W({ width: 0, height: 0 });
  Oe(() => {
    if (!e.current) return;
    const o = new ResizeObserver(([a]) => {
      const { width: l, height: c } = a.contentRect;
      r({ width: l, height: c });
    });
    return o.observe(e.current), () => o.disconnect();
  }, []);
  const n = t.width === 0 ? 1 : t.width < 300 ? 0.75 : t.width < 500 ? 0.875 : 1;
  return { ref: e, ...t, fs: (o) => `${Math.round(o * n)}px`, scale: n };
}
const mR = ({
  title: e,
  paymentMethods: t
}) => {
  const { ref: r, fs: n } = Ue();
  return /* @__PURE__ */ f.jsx("div", { ref: r, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: /* @__PURE__ */ f.jsxs("div", { style: { padding: "24px" }, children: [
    e && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: n(12), fontWeight: "bold", color: "#003357" }, children: e }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: t.map((i, o) => /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { color: "#7a8a99", fontSize: n(16), fontWeight: "600", minWidth: "70px", textAlign: "right" }, children: i.label }),
      /* @__PURE__ */ f.jsx("div", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ f.jsx("div", { style: { backgroundColor: "#e8e8e8", height: "24px", borderRadius: "12px", overflow: "hidden" }, children: /* @__PURE__ */ f.jsx("div", { style: { backgroundColor: i.color, height: "100%", width: `${i.percentage}%`, borderRadius: "12px" } }) }) }),
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: n(18), fontWeight: "400", minWidth: "110px", textAlign: "right", color: "#2c3e50" }, children: i.amount.toLocaleString("en-IN") })
    ] }, o)) })
  ] }) });
}, b2 = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  strokeWidth: n = 2,
  showDots: i = !0,
  showGrid: o = !0,
  title: a
}) => {
  const { ref: l, width: c, fs: s, scale: u } = Ue(), [d, p] = W(null), h = 20, g = 15, v = c || 600, y = Math.max(...e.map((R) => R.value)), x = ((R) => {
    const q = Math.pow(10, Math.floor(Math.log10(R))), Z = R / q;
    let Q;
    Z <= 1 ? Q = 0.2 * q : Z <= 2 ? Q = 0.5 * q : Z <= 5 ? Q = q : Q = 2 * q;
    const N = [];
    for (let re = 0; re <= Math.ceil(R / Q); re++) N.push(re * Q);
    return N;
  })(y), b = Math.max(...x.map((R) => R.toLocaleString("en-IN").length)), w = Math.max(65, b * 9 + 16), S = v - w * 2, O = t - h - g, C = S / (e.length - 1 || 1), E = 10 * u * 0.6, D = Math.max(...e.map((R) => R.label.length)), I = D * E > C, $ = I ? D * E * 0.7 : 20, k = e.map((R, q) => {
    const Z = w + S / (e.length - 1) * q, Q = h + O - R.value / (x[x.length - 1] || 1) * O;
    return { x: Z, y: Q, ...R };
  }), V = k.map((R, q) => `${q === 0 ? "M" : "L"} ${R.x} ${R.y}`).join(" ");
  return /* @__PURE__ */ f.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    a && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: a }),
    v > 0 && /* @__PURE__ */ f.jsxs("svg", { width: v, height: t + g + (I ? $ - 20 : 0), children: [
      o && /* @__PURE__ */ f.jsx("g", { children: x.map((R, q) => {
        const Z = h + O - R / (x[x.length - 1] || 1) * O;
        return /* @__PURE__ */ f.jsxs("g", { children: [
          /* @__PURE__ */ f.jsx("line", { x1: w, y1: Z, x2: v - w, y2: Z, stroke: "#e0e0e0", strokeWidth: "1" }),
          /* @__PURE__ */ f.jsx("text", { x: w - 6, y: Z + 4, textAnchor: "end", fontSize: s(9), fill: "#888", children: R.toLocaleString("en-IN") })
        ] }, q);
      }) }),
      /* @__PURE__ */ f.jsx("path", { d: V, fill: "none", stroke: r, strokeWidth: n }),
      i && k.map((R, q) => /* @__PURE__ */ f.jsxs("g", { children: [
        /* @__PURE__ */ f.jsx(
          "circle",
          {
            cx: R.x,
            cy: R.y,
            r: "4",
            fill: R.color || r,
            style: { cursor: "pointer" },
            onMouseEnter: (Z) => p({ x: Z.clientX, y: Z.clientY, label: R.label, value: R.value }),
            onMouseMove: (Z) => p((Q) => Q ? { ...Q, x: Z.clientX, y: Z.clientY } : null),
            onMouseLeave: () => p(null)
          }
        ),
        /* @__PURE__ */ f.jsx(
          "text",
          {
            x: q === 0 ? R.x + 4 : q === k.length - 1 ? R.x - 4 : R.x,
            y: R.y - 8,
            textAnchor: q === 0 ? "start" : q === k.length - 1 ? "end" : "middle",
            fontSize: s(9),
            fill: "#444",
            pointerEvents: "none",
            children: R.value.toLocaleString("en-IN")
          }
        )
      ] }, q)),
      k.map((R, q) => I ? /* @__PURE__ */ f.jsx(
        "text",
        {
          x: R.x,
          y: h + O + 8,
          fontSize: s(10),
          fill: "#666",
          textAnchor: "end",
          transform: `rotate(-40, ${R.x}, ${h + O + 8})`,
          children: R.label
        },
        q
      ) : /* @__PURE__ */ f.jsx("text", { x: R.x, y: h + O + 20, textAnchor: "middle", fontSize: s(10), fill: "#666", children: R.label }, q))
    ] }),
    d && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "fixed",
      left: d.x + 12,
      top: d.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: s(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: d.label }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Value: ",
        d.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
};
function yc(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function w2(e, t) {
  const r = yc(e);
  return Math.max(30, r.length * t + 10);
}
const j2 = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  showValues: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: c, scale: s } = Ue(), u = 20, d = 15, p = 10, h = e.length > 0 ? Math.max(...e.map((I) => I.value), 0) : 1, g = Math.max(6, 8 * s), v = w2(h, g), y = l || 600, m = y - v - p, x = t - u - d, b = m / (e.length || 1) * 0.7, w = m / (e.length || 1), S = 10 * s * 0.6, O = e.length > 0 ? Math.max(...e.map((I) => I.label.length)) : 0, C = O * S > w, E = C ? O * S * 0.7 : 20, D = [0, 0.25, 0.5, 0.75, 1];
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: c(12), fontWeight: "bold", color: "#003357" }, children: o }),
    y > 0 && /* @__PURE__ */ f.jsxs(
      "svg",
      {
        width: y,
        height: t + d + (C ? E - 20 : 0),
        children: [
          D.map((I, $) => {
            const k = u + x * (1 - I), V = h * I, R = yc(V);
            return /* @__PURE__ */ f.jsxs("g", { children: [
              i && /* @__PURE__ */ f.jsx(
                "line",
                {
                  x1: v,
                  y1: k,
                  x2: y - p,
                  y2: k,
                  stroke: "#e0e0e0",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ f.jsx(
                "text",
                {
                  x: v - 6,
                  y: k,
                  textAnchor: "end",
                  dominantBaseline: "middle",
                  fontSize: c(10),
                  fill: "#888",
                  children: R
                }
              )
            ] }, $);
          }),
          e.map((I, $) => {
            const k = h > 0 ? I.value / h * x : 0, V = v + w * $ + (w - b) / 2, R = u + x - k;
            return /* @__PURE__ */ f.jsxs("g", { children: [
              /* @__PURE__ */ f.jsx(
                "rect",
                {
                  x: V,
                  y: R,
                  width: b,
                  height: k,
                  fill: I.color || r,
                  rx: "4"
                }
              ),
              n && /* @__PURE__ */ f.jsx(
                "text",
                {
                  x: V + b / 2,
                  y: R - 5,
                  textAnchor: "middle",
                  fontSize: c(10),
                  fill: "#555",
                  fontWeight: "bold",
                  children: yc(I.value)
                }
              ),
              C ? /* @__PURE__ */ f.jsx(
                "text",
                {
                  x: V + b / 2,
                  y: u + x + 8,
                  fontSize: c(10),
                  fill: "#666",
                  textAnchor: "end",
                  transform: `rotate(-40, ${V + b / 2}, ${u + x + 8})`,
                  children: I.label
                }
              ) : /* @__PURE__ */ f.jsx(
                "text",
                {
                  x: V + b / 2,
                  y: u + x + 20,
                  textAnchor: "middle",
                  fontSize: c(10),
                  fill: "#666",
                  children: I.label
                }
              )
            ] }, $);
          })
        ]
      }
    )
  ] });
};
function S2(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16),
    parseInt(t.substring(2, 4), 16),
    parseInt(t.substring(4, 6), 16)
  ];
}
function O2(e, t) {
  const [r, n, i] = S2(e), o = [...t].sort((c, s) => c.value - s.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((c, s) => {
    const u = a === 1 ? 0.5 : s / (a - 1), d = (h) => Math.round(220 - u * (220 - h)), p = (h) => d(h).toString(16).padStart(2, "0");
    l.set(c, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((c) => l.get(c));
}
const P2 = ({
  data: e,
  showLegend: t = !0,
  title: r,
  baseColor: n
}) => {
  const { ref: i, width: o, fs: a } = Ue(), [l, c] = W(null), s = o || 400, u = Math.max(100, Math.min(s, 400)), d = s / 2, p = u / 2, h = u / 2 - 20, g = n ? O2(n, e) : null, v = e.reduce((x, b) => x + b.value, 0);
  let y = -90;
  const m = e.map((x) => {
    const b = x.value / v * 100, w = x.value / v * 360, S = y, O = y + w, C = S * Math.PI / 180, E = O * Math.PI / 180, D = d + h * Math.cos(C), I = p + h * Math.sin(C), $ = d + h * Math.cos(E), k = p + h * Math.sin(E), V = w > 180 ? 1 : 0, R = `M ${d} ${p} L ${D} ${I} A ${h} ${h} 0 ${V} 1 ${$} ${k} Z`;
    y = O;
    const q = g ? g[e.indexOf(x)] : x.color ?? "#4a90e2";
    return { ...x, path: R, percentage: b, color: q };
  });
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: a(12), fontWeight: "bold", color: "#003357" }, children: r }),
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }, children: [
      u > 0 && /* @__PURE__ */ f.jsx("svg", { width: s, height: u, style: { display: "block" }, children: e.length === 1 ? /* @__PURE__ */ f.jsx(
        "circle",
        {
          cx: d,
          cy: p,
          r: h,
          fill: m[0].color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (x) => c({ x: x.clientX, y: x.clientY, label: m[0].label, value: m[0].value, percentage: 100 }),
          onMouseMove: (x) => c((b) => b ? { ...b, x: x.clientX, y: x.clientY } : null),
          onMouseLeave: () => c(null),
          style: { cursor: "pointer" }
        }
      ) : m.map((x, b) => /* @__PURE__ */ f.jsx(
        "path",
        {
          d: x.path,
          fill: x.color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (w) => c({ x: w.clientX, y: w.clientY, label: x.label, value: x.value, percentage: x.percentage }),
          onMouseMove: (w) => c((S) => S ? { ...S, x: w.clientX, y: w.clientY } : null),
          onMouseLeave: () => c(null),
          style: { cursor: "pointer" }
        },
        b
      )) }),
      t && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 24px" }, children: m.map((x, b) => /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: "12px", height: "12px", backgroundColor: x.color, borderRadius: "3px", flexShrink: 0 } }),
        /* @__PURE__ */ f.jsxs("span", { style: { fontSize: a(12), color: "#333" }, children: [
          x.label,
          ": ",
          x.value.toLocaleString("en-IN")
        ] })
      ] }, b)) })
    ] }),
    l && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "fixed",
      left: l.x + 12,
      top: l.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: a(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: l.label }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Value: ",
        l.value.toLocaleString("en-IN")
      ] }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Percentage: ",
        l.percentage.toFixed(1),
        "%"
      ] })
    ] })
  ] });
}, xR = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  showLabels: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: c } = Ue(), s = 60, u = l || 600, d = u - s * 2, p = t - s * 2, h = Math.max(...e.map((m) => m.x)), g = Math.max(...e.map((m) => m.y)), v = Math.max(...e.map((m) => m.size)), y = e.map((m) => ({
    ...m,
    cx: s + m.x / h * d,
    cy: s + p - m.y / g * p,
    r: m.size / v * 40 + 10
  }));
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: c(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ f.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((m, x) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
        /* @__PURE__ */ f.jsx("line", { x1: s, y1: s + p * m, x2: u - s, y2: s + p * m, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ f.jsx("line", { x1: s + d * m, y1: s, x2: s + d * m, y2: t - s, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, x)) }),
      y.map((m, x) => /* @__PURE__ */ f.jsxs("g", { children: [
        /* @__PURE__ */ f.jsx("circle", { cx: m.cx, cy: m.cy, r: m.r, fill: m.color || r, opacity: "0.7", stroke: "#fff", strokeWidth: "2" }),
        n && /* @__PURE__ */ f.jsx("text", { x: m.cx, y: m.cy, textAnchor: "middle", dominantBaseline: "middle", fontSize: c(12), fill: "#fff", fontWeight: "bold", children: m.label })
      ] }, x))
    ] })
  ] });
}, bR = ({
  data: e,
  showValues: t = !0,
  colorScale: r = ["#e3f2fd", "#003357"],
  title: n
}) => {
  const { ref: i, width: o, fs: a } = Ue(), l = Array.from(new Set(e.map((x) => x.x))), c = Array.from(new Set(e.map((x) => x.y))), s = 80, u = (o || 600) - s - 48, d = Math.max(30, Math.floor(u / l.length)), p = Math.max(...e.map((x) => x.value)), h = Math.min(...e.map((x) => x.value)), g = (x) => {
    const b = (x - h) / (p - h || 1), w = parseInt(r[0].slice(1, 3), 16), S = parseInt(r[0].slice(3, 5), 16), O = parseInt(r[0].slice(5, 7), 16), C = parseInt(r[1].slice(1, 3), 16), E = parseInt(r[1].slice(3, 5), 16), D = parseInt(r[1].slice(5, 7), 16);
    return `rgb(${Math.round(w + (C - w) * b)}, ${Math.round(S + (E - S) * b)}, ${Math.round(O + (D - O) * b)})`;
  }, v = (x, b) => e.find((w) => w.x === x && w.y === b)?.value ?? 0, y = l.length * d + s, m = c.length * d + s;
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    n && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: a(20), fontWeight: "bold", color: "#003357" }, children: n }),
    y > 0 && /* @__PURE__ */ f.jsxs("svg", { width: y, height: m, children: [
      c.map((x, b) => /* @__PURE__ */ f.jsx(
        "text",
        {
          x: s - 10,
          y: b * d + d / 2 + s,
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: a(12),
          fill: "#666",
          children: x
        },
        `y-${b}`
      )),
      l.map((x, b) => /* @__PURE__ */ f.jsx(
        "text",
        {
          x: b * d + d / 2 + s,
          y: s - 10,
          textAnchor: "middle",
          fontSize: a(12),
          fill: "#666",
          children: x
        },
        `x-${b}`
      )),
      c.map(
        (x, b) => l.map((w, S) => {
          const O = v(w, x);
          return /* @__PURE__ */ f.jsxs("g", { children: [
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: S * d + s,
                y: b * d + s,
                width: d,
                height: d,
                fill: g(O),
                stroke: "#fff",
                strokeWidth: "2",
                rx: "4"
              }
            ),
            t && /* @__PURE__ */ f.jsx(
              "text",
              {
                x: S * d + d / 2 + s,
                y: b * d + d / 2 + s,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontSize: a(Math.max(10, d / 4)),
                fill: "#fff",
                fontWeight: "bold",
                children: O
              }
            )
          ] }, `${S}-${b}`);
        })
      )
    ] })
  ] });
}, wR = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  pointSize: n = 6,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: c } = Ue(), s = 60, u = l || 600, d = u - s * 2, p = t - s * 2, h = Math.max(...e.map((x) => x.x)), g = Math.max(...e.map((x) => x.y)), v = Math.min(...e.map((x) => x.x)), y = Math.min(...e.map((x) => x.y)), m = e.map((x) => ({
    ...x,
    cx: s + (x.x - v) / (h - v || 1) * d,
    cy: s + p - (x.y - y) / (g - y || 1) * p
  }));
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: c(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ f.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((x, b) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
        /* @__PURE__ */ f.jsx("line", { x1: s, y1: s + p * x, x2: u - s, y2: s + p * x, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ f.jsx("line", { x1: s + d * x, y1: s, x2: s + d * x, y2: t - s, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, b)) }),
      /* @__PURE__ */ f.jsx("line", { x1: s, y1: s, x2: s, y2: t - s, stroke: "#666", strokeWidth: "2" }),
      /* @__PURE__ */ f.jsx("line", { x1: s, y1: t - s, x2: u - s, y2: t - s, stroke: "#666", strokeWidth: "2" }),
      m.map((x, b) => /* @__PURE__ */ f.jsx("circle", { cx: x.cx, cy: x.cy, r: n, fill: x.color || r, opacity: "0.7" }, b))
    ] })
  ] });
};
function C2(e) {
  const t = e.replace("#", "");
  return [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)];
}
function k2(e, t) {
  const [r, n, i] = C2(e);
  return Array.from({ length: t }, (o, a) => {
    const l = t === 1 ? 0.5 : a / (t - 1), c = (u) => Math.round(220 - l * (220 - u)), s = (u) => c(u).toString(16).padStart(2, "0");
    return `#${s(r)}${s(n)}${s(i)}`;
  });
}
const jR = ({
  data: e,
  height: t = 200,
  showLegend: r = !0,
  showGrid: n = !0,
  title: i,
  color: o
}) => {
  const { ref: a, width: l, fs: c } = Ue(), [s, u] = W(null), p = Math.max(100, (l || 600) - (r ? 160 : 0) - 40), h = 20, g = 15, v = 30, y = p - v * 2, m = t - h - g, x = Math.max(...e.map((E) => E.stacks.reduce((D, I) => D + I.value, 0))), b = y / e.length * 0.7, w = y / e.length, S = Array.from(new Set(e.flatMap((E) => E.stacks.map((D) => D.label)))), O = o ? k2(o, S.length) : null, C = /* @__PURE__ */ new Map();
  return S.forEach((E, D) => {
    const I = e.flatMap(($) => $.stacks).find(($) => $.label === E)?.color;
    C.set(E, O ? O[D] : I ?? "#4a90e2");
  }), /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
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
    i && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: c(12), fontWeight: "bold", color: "#003357" }, children: i }),
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "40px", alignItems: "flex-start" }, children: [
      p > 0 && /* @__PURE__ */ f.jsxs("svg", { width: p, height: t + g, children: [
        n && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((E, D) => {
          const I = h + m * (1 - E);
          return /* @__PURE__ */ f.jsx("line", { x1: v, y1: I, x2: p - v, y2: I, stroke: "#e0e0e0", strokeWidth: "1" }, D);
        }) }),
        e.map((E, D) => {
          const I = v + w * D + (w - b) / 2;
          let $ = h + m;
          return /* @__PURE__ */ f.jsxs("g", { children: [
            E.stacks.map((k, V) => {
              const R = k.value / x * m, q = $ - R;
              return $ = q, /* @__PURE__ */ f.jsx(
                "rect",
                {
                  x: I,
                  y: q,
                  width: b,
                  height: R,
                  fill: C.get(k.label) ?? "#4a90e2",
                  onMouseEnter: (Z) => {
                    const Q = Z.currentTarget.getBoundingClientRect();
                    u({ x: Q.left + Q.width / 2, y: Q.top, label: k.label, value: k.value });
                  },
                  onMouseLeave: () => u(null),
                  style: { cursor: "pointer" }
                },
                V
              );
            }),
            /* @__PURE__ */ f.jsx("text", { x: I + b / 2, y: h + m + 20, textAnchor: "middle", fontSize: c(12), fill: "#666", children: E.category })
          ] }, D);
        })
      ] }),
      r && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }, children: S.map((E, D) => /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: C.get(E), borderRadius: "4px" } }),
        /* @__PURE__ */ f.jsx("span", { style: { fontSize: c(14), color: "#333" }, children: E })
      ] }, D)) })
    ] }),
    s && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "fixed",
      left: s.x,
      top: s.y - 10,
      transform: "translate(-50%, -100%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: c(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: s.label }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Value: ",
        s.value
      ] })
    ] })
  ] });
}, SR = ({
  title: e,
  value: t,
  prefix: r = "",
  suffix: n = "",
  trend: i,
  trendLabel: o,
  icon: a,
  color: l = "#003357",
  backgroundColor: c = "#ffffff"
}) => {
  const { ref: s, fs: u } = Ue(), d = i !== void 0 && i >= 0, h = Qw().replace(/:/g, "_"), g = l, y = ((D) => {
    const I = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(D);
    return I ? { r: parseInt(I[1], 16), g: parseInt(I[2], 16), b: parseInt(I[3], 16) } : { r: 255, g: 255, b: 255 };
  })(c), x = (0.299 * y.r + 0.587 * y.g + 0.114 * y.b) / 255 < 0.5, b = `rgba(${y.r}, ${y.g}, ${y.b}, 0.55)`, w = x ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)", S = x ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)", O = x ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.85)", C = "rgba(255,255,255,0.0)", E = `
    @keyframes kpi-shimmer-${h} {
      0%   { transform: translateX(-150%) skewX(-25deg); }
      100% { transform: translateX(250%) skewX(-25deg); }
    }
    @keyframes kpi-glow-pulse-${h} {
      0%, 100% { box-shadow: 0 0 18px 2px ${g}33, 0 8px 32px 0 rgba(0,0,0,0.15); }
      50%      { box-shadow: 0 0 35px 8px ${g}55, 0 12px 48px 0 rgba(0,0,0,0.2); }
    }
    @keyframes kpi-trend-bounce-${h} {
      0%, 100% { transform: translateY(0); }
      50%      { transform: translateY(-3px); }
    }
    @keyframes kpi-icon-float-${h} {
      0%, 100% { transform: translateY(0) scale(1); }
      50%      { transform: translateY(-5px) scale(1.1); }
    }
    @keyframes kpi-border-flow-${h} {
      0%   { background-position: 0% 50%; }
      50%  { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes kpi-value-in-${h} {
      0%   { opacity: 0; transform: translateY(10px) scale(0.95); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
  `;
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("style", { children: E }),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        ref: s,
        style: {
          position: "relative",
          borderRadius: "24px",
          padding: "2px",
          /* gradient border thickness */
          background: `linear-gradient(135deg, ${g}88, ${g}22, ${g}66)`,
          backgroundSize: "200% 200%",
          animation: `kpi-border-flow-${h} 4s ease infinite, kpi-glow-pulse-${h} 3s ease-in-out infinite`,
          width: "100%",
          boxSizing: "border-box",
          transition: "transform 0.4s cubic-bezier(.175, .885, .32, 1.275)",
          cursor: "default"
        },
        onMouseEnter: (D) => {
          D.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        },
        onMouseLeave: (D) => {
          D.currentTarget.style.transform = "translateY(0) scale(1)";
        },
        children: /* @__PURE__ */ f.jsxs(
          "div",
          {
            style: {
              background: b,
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: "22px",
              padding: "28px 26px 22px",
              fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              boxSizing: "border-box",
              border: `1px solid rgba(255, 255, 255, ${x ? 0.1 : 0.4})`,
              boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)"
            },
            children: [
              /* @__PURE__ */ f.jsx(
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
              /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "60%",
                    height: "100%",
                    background: `linear-gradient(90deg, ${C} 0%, ${O} 50%, ${C} 100%)`,
                    animation: `kpi-shimmer-${h} 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                    pointerEvents: "none",
                    zIndex: 3,
                    mixBlendMode: x ? "screen" : "overlay"
                  }
                }
              ),
              /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${g}33 0%, transparent 70%)`,
                    pointerEvents: "none",
                    zIndex: 0,
                    filter: "blur(10px)"
                  }
                }
              ),
              /* @__PURE__ */ f.jsxs(
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
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: {
                          fontSize: u(13),
                          color: w,
                          fontWeight: "600",
                          letterSpacing: "0.8px",
                          textTransform: "uppercase"
                        },
                        children: e
                      }
                    ),
                    a && /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: {
                          fontSize: u(28),
                          animation: `kpi-icon-float-${h} 3s ease-in-out infinite`,
                          filter: `drop-shadow(0 4px 8px ${g}66)`,
                          lineHeight: 1,
                          color: x ? "#fff" : l
                        },
                        children: a
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ f.jsxs(
                "div",
                {
                  style: {
                    fontSize: u(38),
                    fontWeight: "800",
                    color: l,
                    marginBottom: "12px",
                    letterSpacing: "-0.5px",
                    position: "relative",
                    zIndex: 4,
                    animation: `kpi-value-in-${h} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
                    textShadow: x ? `0 2px 10px ${g}44` : `0 1px 5px ${g}33`
                  },
                  children: [
                    r,
                    typeof t == "number" ? t.toLocaleString() : t,
                    n
                  ]
                }
              ),
              i !== void 0 && /* @__PURE__ */ f.jsxs(
                "div",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    position: "relative",
                    zIndex: 4,
                    background: d ? "rgba(76, 175, 80, 0.15)" : "rgba(244, 67, 54, 0.15)",
                    borderRadius: "20px",
                    padding: "5px 14px",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: `1px solid ${d ? "rgba(76, 175, 80, 0.3)" : "rgba(244, 67, 54, 0.3)"}`
                  },
                  children: [
                    /* @__PURE__ */ f.jsxs(
                      "span",
                      {
                        style: {
                          fontSize: u(13),
                          fontWeight: "800",
                          color: d ? "#4ade80" : "#f87171",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          animation: `kpi-trend-bounce-${h} 2s ease-in-out infinite`,
                          textShadow: "0 1px 3px rgba(0,0,0,0.1)"
                        },
                        children: [
                          /* @__PURE__ */ f.jsx("span", { style: { fontSize: u(15) }, children: d ? "▲" : "▼" }),
                          Math.abs(i),
                          "%"
                        ]
                      }
                    ),
                    o && /* @__PURE__ */ f.jsx(
                      "span",
                      {
                        style: {
                          fontSize: u(12),
                          color: S,
                          fontWeight: "600"
                        },
                        children: o
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    bottom: 0,
                    left: "20px",
                    right: "20px",
                    height: "4px",
                    borderRadius: "4px 4px 0 0",
                    background: `linear-gradient(90deg, transparent, ${g}88, transparent)`,
                    zIndex: 4,
                    boxShadow: `0 -2px 10px ${g}44`
                  }
                }
              )
            ]
          }
        )
      }
    )
  ] });
}, OR = ({
  value: e,
  max: t = 100,
  min: r = 0,
  title: n,
  unit: i = "%",
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0"
}) => {
  const { ref: l, width: c, fs: s } = Ue(), u = Math.max(120, Math.min(c || 220, 320)), d = Math.max(r, Math.min(t, e)), p = (d - r) / (t - r) * 100, h = 225, g = 315, v = g - h, y = h + p / 100 * v, m = u / 2, x = u / 2 + 10, b = u / 2 - 40, w = (I, $) => {
    const k = (I - 90) * Math.PI / 180;
    return { x: m + $ * Math.cos(k), y: x + $ * Math.sin(k) };
  }, S = (I, $) => {
    const k = w(I, b), V = w($, b), R = $ - I <= 180 ? 0 : 1;
    return `M ${k.x} ${k.y} A ${b} ${b} 0 ${R} 1 ${V.x} ${V.y}`;
  }, O = h + p / 100 * v, C = w(y, b - 15), E = w(y - 90, 6), D = w(y + 90, 6);
  return /* @__PURE__ */ f.jsxs("div", { ref: l, style: {
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
    n && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: s(18), fontWeight: "bold", color: "#003357", textAlign: "center" }, children: n }),
    u > 0 && /* @__PURE__ */ f.jsxs("svg", { width: u, height: u * 0.75, style: { overflow: "visible" }, children: [
      /* @__PURE__ */ f.jsx("defs", { children: /* @__PURE__ */ f.jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ f.jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodOpacity: "0.3" }) }) }),
      /* @__PURE__ */ f.jsx("path", { d: S(h, g), fill: "none", stroke: a, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ f.jsx("path", { d: S(h, O), fill: "none", stroke: o, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ f.jsx("polygon", { points: `${C.x},${C.y} ${E.x},${E.y} ${D.x},${D.y}`, fill: "#333", filter: "url(#shadow)" }),
      /* @__PURE__ */ f.jsx("circle", { cx: m, cy: x, r: "10", fill: "#333" }),
      /* @__PURE__ */ f.jsx("circle", { cx: m, cy: x, r: "6", fill: "#fff" }),
      /* @__PURE__ */ f.jsxs("text", { x: m, y: x + 45, textAnchor: "middle", fontSize: s(Math.max(16, u / 7)), fontWeight: "bold", fill: o, children: [
        d,
        i
      ] }),
      /* @__PURE__ */ f.jsx("text", { x: w(h, b + 20).x - 5, y: w(h, b + 20).y, textAnchor: "end", fontSize: s(14), fill: "#666", fontWeight: "500", children: r }),
      /* @__PURE__ */ f.jsx("text", { x: w(g, b + 20).x + 5, y: w(g, b + 20).y, textAnchor: "start", fontSize: s(14), fill: "#666", fontWeight: "500", children: t })
    ] })
  ] });
}, PR = ({
  value: e,
  max: t = 100,
  label: r,
  showPercentage: n = !0,
  height: i = 24,
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0",
  animated: l = !1
}) => {
  const { ref: c, fs: s } = Ue(), u = Math.min(100, Math.max(0, e / t * 100));
  return /* @__PURE__ */ f.jsxs("div", { ref: c, style: { width: "100%", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }, children: [
    r && /* @__PURE__ */ f.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: s(14),
      color: "#333",
      fontWeight: "500"
    }, children: [
      /* @__PURE__ */ f.jsx("span", { children: r }),
      n && /* @__PURE__ */ f.jsxs("span", { children: [
        u.toFixed(0),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: {
      width: "100%",
      height: `${i}px`,
      backgroundColor: a,
      borderRadius: `${i / 2}px`,
      overflow: "hidden",
      position: "relative"
    }, children: /* @__PURE__ */ f.jsx("div", { style: {
      width: `${u}%`,
      height: "100%",
      backgroundColor: o,
      borderRadius: `${i / 2}px`,
      transition: l ? "width 0.3s ease" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: u > 10 ? "8px" : "0"
    }, children: !r && n && u > 10 && /* @__PURE__ */ f.jsxs("span", { style: { color: "#fff", fontSize: s(12), fontWeight: "bold" }, children: [
      u.toFixed(0),
      "%"
    ] }) }) })
  ] });
}, CR = ({ data: e, title: t, maxHeight: r = 400 }) => {
  const { ref: n, fs: i } = Ue(), o = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  };
  if (!e || e.length === 0)
    return /* @__PURE__ */ f.jsxs("div", { ref: n, style: o, children: [
      t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: i(18), fontWeight: "bold", color: "#003357" }, children: t }),
      /* @__PURE__ */ f.jsx("p", { style: { color: "#666", textAlign: "center", fontSize: i(14) }, children: "No data available" })
    ] });
  const a = Object.keys(e[0]);
  return /* @__PURE__ */ f.jsxs("div", { ref: n, style: o, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: i(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { maxHeight: r, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ f.jsx("thead", { style: { position: "sticky", top: 0, backgroundColor: "#003357", color: "#fff", zIndex: 1 }, children: /* @__PURE__ */ f.jsx("tr", { children: a.map((l) => /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", fontSize: i(13), borderBottom: "2px solid #002a45" }, children: l }, l)) }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: e.map((l, c) => /* @__PURE__ */ f.jsx("tr", { style: { backgroundColor: c % 2 === 0 ? "#f9f9f9" : "#fff" }, children: a.map((s) => /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", borderBottom: "1px solid #e0e0e0", color: "#333", fontSize: i(13) }, children: l[s] !== null && l[s] !== void 0 ? String(l[s]) : "-" }, s)) }, c)) })
    ] }) })
  ] });
}, kR = ({
  data: e,
  rowField: t,
  columnField: r,
  valueField: n,
  aggregation: i = "sum",
  title: o
}) => {
  const a = er(() => {
    const l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), s = {};
    e.forEach((p) => {
      const h = String(p[t]), g = String(p[r]), v = Number(p[n]) || 0;
      l.add(h), c.add(g), s[h] || (s[h] = {}), s[h][g] || (s[h][g] = []), s[h][g].push(v);
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
    }, d = {};
    return l.forEach((p) => {
      d[p] = {}, c.forEach((h) => {
        d[p][h] = s[p]?.[h] ? u(s[p][h]) : 0;
      });
    }), { rows: Array.from(l), cols: Array.from(c), result: d };
  }, [e, t, r, n, i]);
  return /* @__PURE__ */ f.jsxs("div", { style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ f.jsx("div", { style: { overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ f.jsx("thead", { style: { backgroundColor: "#003357", color: "#fff" }, children: /* @__PURE__ */ f.jsxs("tr", { children: [
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", position: "sticky", left: 0, backgroundColor: "#003357" }, children: t }),
        a.cols.map((l) => /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", textAlign: "right", fontWeight: "600" }, children: l }, l))
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: a.rows.map((l, c) => /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: c % 2 === 0 ? "#f9f9f9" : "#fff" }, children: [
        /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", color: "#000000", fontWeight: "600", borderBottom: "1px solid #e0e0e0", position: "sticky", left: 0, backgroundColor: c % 2 === 0 ? "#f9f9f9" : "#fff" }, children: l }),
        a.cols.map((s) => /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", textAlign: "right", borderBottom: "1px solid #e0e0e0", color: "#333" }, children: a.result[l][s].toFixed(2) }, s))
      ] }, l)) })
    ] }) })
  ] });
}, _R = ({
  items: e,
  title: t,
  maxHeight: r = 400,
  showNumbers: n = !1,
  defaultColor: i = "#003357"
}) => {
  const { ref: o, fs: a } = Ue(), l = {
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    info: "#17a2b8"
  };
  return /* @__PURE__ */ f.jsxs("div", { ref: o, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: a(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: /* @__PURE__ */ f.jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: e.map((c, s) => /* @__PURE__ */ f.jsxs(
      "li",
      {
        style: {
          padding: "16px",
          borderBottom: s < e.length - 1 ? "1px solid #e0e0e0" : "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          transition: "background-color 0.2s",
          cursor: "pointer"
        },
        onMouseEnter: (u) => u.currentTarget.style.backgroundColor = "#f5f5f5",
        onMouseLeave: (u) => u.currentTarget.style.backgroundColor = "transparent",
        children: [
          n && /* @__PURE__ */ f.jsx("span", { style: {
            minWidth: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: c.color || i,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: a(12),
            fontWeight: "bold"
          }, children: s + 1 }),
          c.icon && /* @__PURE__ */ f.jsx("div", { style: { fontSize: a(20) }, children: c.icon }),
          c.status && /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: l[c.status] } }),
          /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "600", color: "#333", marginBottom: "4px", fontSize: a(14) }, children: c.title }),
            c.subtitle && /* @__PURE__ */ f.jsx("div", { style: { fontSize: a(13), color: "#666" }, children: c.subtitle })
          ] }),
          c.timestamp && /* @__PURE__ */ f.jsx("div", { style: { fontSize: a(12), color: "#999", whiteSpace: "nowrap" }, children: c.timestamp })
        ]
      },
      c.id
    )) }) })
  ] });
}, ER = ({
  markers: e,
  title: t,
  height: r = 400,
  centerLat: n = 0,
  centerLng: i = 0,
  zoom: o = 10,
  apiKey: a
}) => {
  const { ref: l, fs: c } = Ue(), s = `${n},${i}`, u = e.map((p) => `markers=color:red%7C${p.lat},${p.lng}`).join("&"), d = a ? `https://www.google.com/maps/embed/v1/view?key=${a}&center=${s}&zoom=${o}` : `https://maps.google.com/maps?q=${s}&z=${o}&output=embed${e.length > 0 ? "&" + u : ""}`;
  return /* @__PURE__ */ f.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: c(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0" }, children: /* @__PURE__ */ f.jsx(
      "iframe",
      {
        width: "100%",
        height: r,
        style: { border: 0, display: "block" },
        loading: "lazy",
        src: d,
        allowFullScreen: !0
      }
    ) })
  ] });
}, AR = ({
  content: e,
  title: t,
  variant: r = "description",
  align: n = "left",
  color: i,
  backgroundColor: o = "#ffffff"
}) => {
  const { ref: a, fs: l } = Ue(), c = {
    note: { fontSize: l(14), fontStyle: "italic", color: i || "#666", lineHeight: "1.6" },
    title: { fontSize: l(24), fontWeight: "bold", color: i || "#003357", lineHeight: "1.3" },
    description: { fontSize: l(16), color: i || "#333", lineHeight: "1.7" }
  };
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: o,
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: l(18), fontWeight: "bold", color: "#003357", textAlign: n }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { ...c[r], textAlign: n, whiteSpace: "pre-wrap" }, children: e })
  ] });
}, TR = ({
  src: e,
  type: t,
  title: r,
  alt: n = "Media content",
  width: i = "100%",
  height: o = "auto",
  autoPlay: a = !1,
  controls: l = !0,
  loop: c = !1
}) => {
  const { ref: s, fs: u } = Ue();
  return /* @__PURE__ */ f.jsxs("div", { ref: s, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: u(18), fontWeight: "bold", color: "#003357" }, children: r }),
    /* @__PURE__ */ f.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }, children: t === "image" ? /* @__PURE__ */ f.jsx("img", { src: e, alt: n, style: { width: i, height: o, display: "block", objectFit: "cover" } }) : /* @__PURE__ */ f.jsx("video", { src: e, width: i, height: o, autoPlay: a, controls: l, loop: c, style: { display: "block" }, children: "Your browser does not support the video tag." }) })
  ] });
}, IR = ({
  title: e,
  options: t = [],
  defaultValue: r,
  onChange: n,
  type: i = "dropdown",
  placeholder: o = "Select...",
  searchable: a = !1,
  clearable: l = !0,
  maxSelections: c,
  minValue: s = 0,
  maxValue: u = 100,
  step: d = 1
}) => {
  const [p, h] = W(r || (i === "multiselect" || i === "tags" ? [] : t[0]?.value || "")), [g, v] = W(""), [y, m] = W(/* @__PURE__ */ new Set()), [x, b] = W(r || { start: "", end: "" }), [w, S] = W(r || { min: s, max: u }), [O, C] = W(""), E = er(() => !a || !g ? t : t.filter(
    (N) => N.label.toLowerCase().includes(g.toLowerCase())
  ), [t, g, a]), D = (N) => {
    h(N), n(N);
  }, I = (N) => {
    const re = Array.isArray(p) ? p : [], te = re.includes(N) ? re.filter((z) => z !== N) : c && re.length >= c ? re : [...re, N];
    h(te), n(te);
  }, $ = () => {
    const N = i === "multiselect" || i === "tags" ? [] : "";
    h(N), n(N);
  }, k = (N) => {
    const re = new Set(y);
    re.has(N) ? re.delete(N) : re.add(N), m(re);
  }, V = (N, re) => {
    const te = { ...x, [N]: re };
    b(te), n(te);
  }, R = (N, re) => {
    const te = { ...w, [N]: re };
    S(te), n(te);
  }, q = (N) => {
    if (!N.trim()) return;
    const re = Array.isArray(p) ? p : [];
    if (!re.includes(N)) {
      const te = [...re, N.trim()];
      h(te), n(te);
    }
    C("");
  }, Z = (N) => {
    const te = (Array.isArray(p) ? p : []).filter((z) => z !== N);
    h(te), n(te);
  }, Q = (N, re = 0) => /* @__PURE__ */ f.jsx("div", { style: { marginLeft: re * 20 }, children: N.map((te) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        style: { display: "flex", alignItems: "center", padding: "8px", cursor: "pointer", borderRadius: "4px", backgroundColor: (Array.isArray(p) ? p.includes(te.value) : p === te.value) ? "#e6f2ff" : "transparent" },
        onClick: () => I(te.value),
        children: [
          te.children && /* @__PURE__ */ f.jsx("span", { onClick: (z) => {
            z.stopPropagation(), k(te.value);
          }, style: { marginRight: "8px", fontSize: "12px" }, children: y.has(te.value) ? "▼" : "▶" }),
          /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(te.value), onChange: () => {
          }, style: { marginRight: "8px" } }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: te.disabled ? "#999" : "#333" }, children: te.label }),
          te.count !== void 0 && /* @__PURE__ */ f.jsxs("span", { style: { marginLeft: "auto", fontSize: "12px", color: "#666" }, children: [
            "(",
            te.count,
            ")"
          ] })
        ]
      }
    ),
    te.children && y.has(te.value) && Q(te.children, re + 1)
  ] }, te.value)) });
  return /* @__PURE__ */ f.jsxs("div", { style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      e && /* @__PURE__ */ f.jsx("h3", { style: { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: e }),
      l && (i === "multiselect" || i === "tags" ? Array.isArray(p) && p.length > 0 : p) && /* @__PURE__ */ f.jsx("button", { onClick: $, style: { padding: "4px 12px", fontSize: "12px", border: "none", borderRadius: "4px", backgroundColor: "#f0f0f0", color: "#666", cursor: "pointer" }, children: "Clear" })
    ] }),
    a && i !== "daterange" && i !== "numericrange" && /* @__PURE__ */ f.jsx("input", { type: "text", value: g, onChange: (N) => v(N.target.value), placeholder: "Search...", style: { width: "90%", padding: "10px", marginBottom: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "dropdown" && /* @__PURE__ */ f.jsxs("select", { value: p, onChange: (N) => D(N.target.value), style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: "#fff", color: "#333", cursor: "pointer", outline: "none" }, children: [
      o && /* @__PURE__ */ f.jsx("option", { value: "", children: o }),
      E.map((N) => /* @__PURE__ */ f.jsxs("option", { value: N.value, disabled: N.disabled, children: [
        N.label,
        " ",
        N.count !== void 0 && `(${N.count})`
      ] }, N.value))
    ] }),
    i === "buttons" && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: E.map((N) => /* @__PURE__ */ f.jsxs("button", { onClick: () => D(N.value), disabled: N.disabled, style: { padding: "10px 20px", fontSize: "14px", fontWeight: "600", border: p === N.value ? "2px solid #003357" : "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: p === N.value ? "#003357" : "#fff", color: p === N.value ? "#fff" : "#333", cursor: N.disabled ? "not-allowed" : "pointer", opacity: N.disabled ? 0.5 : 1, transition: "all 0.2s" }, children: [
      N.label,
      " ",
      N.count !== void 0 && `(${N.count})`
    ] }, N.value)) }),
    i === "multiselect" && /* @__PURE__ */ f.jsx("div", { style: { maxHeight: "300px", overflowY: "auto", border: "1px solid #d0d0d0", borderRadius: "8px", padding: "8px" }, children: E.map((N) => /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", padding: "10px", cursor: N.disabled ? "not-allowed" : "pointer", borderRadius: "4px", transition: "background 0.2s", backgroundColor: Array.isArray(p) && p.includes(N.value) ? "#e6f2ff" : "transparent" }, children: [
      /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(N.value), onChange: () => I(N.value), disabled: N.disabled, style: { marginRight: "10px", cursor: N.disabled ? "not-allowed" : "pointer" } }),
      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: N.disabled ? "#999" : "#333", flex: 1 }, children: N.label }),
      N.count !== void 0 && /* @__PURE__ */ f.jsxs("span", { style: { fontSize: "12px", color: "#666" }, children: [
        "(",
        N.count,
        ")"
      ] })
    ] }, N.value)) }),
    i === "search" && /* @__PURE__ */ f.jsx("input", { type: "text", value: p, onChange: (N) => {
      h(N.target.value), n(N.target.value);
    }, placeholder: o, style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "daterange" && /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ f.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Start Date" }),
        /* @__PURE__ */ f.jsx("input", { type: "date", value: x.start, onChange: (N) => V("start", N.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] }),
      /* @__PURE__ */ f.jsx("span", { style: { marginTop: "20px", color: "#666" }, children: "—" }),
      /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ f.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "End Date" }),
        /* @__PURE__ */ f.jsx("input", { type: "date", value: x.end, onChange: (N) => V("end", N.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "numericrange" && /* @__PURE__ */ f.jsxs("div", { children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#666" }, children: [
        /* @__PURE__ */ f.jsxs("span", { children: [
          "Min: ",
          w.min
        ] }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          "Max: ",
          w.max
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: s, max: u, step: d, value: w.min, onChange: (N) => R("min", Number(N.target.value)), style: { flex: 1 } }),
        /* @__PURE__ */ f.jsx("input", { type: "range", min: s, max: u, step: d, value: w.max, onChange: (N) => R("max", Number(N.target.value)), style: { flex: 1 } })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "12px", marginTop: "12px" }, children: [
        /* @__PURE__ */ f.jsx("input", { type: "number", min: s, max: u, step: d, value: w.min, onChange: (N) => R("min", Number(N.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ f.jsx("input", { type: "number", min: s, max: u, step: d, value: w.max, onChange: (N) => R("max", Number(N.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "hierarchical" && Q(E),
    i === "tags" && /* @__PURE__ */ f.jsxs("div", { children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", marginBottom: "12px" }, children: [
        /* @__PURE__ */ f.jsx("input", { type: "text", value: O, onChange: (N) => C(N.target.value), onKeyDown: (N) => N.key === "Enter" && q(O), placeholder: "Add tag...", style: { flex: 1, padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ f.jsx("button", { onClick: () => q(O), style: { padding: "10px 20px", fontSize: "14px", border: "none", borderRadius: "8px", backgroundColor: "#003357", color: "#fff", cursor: "pointer" }, children: "Add" })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: Array.isArray(p) && p.map((N) => /* @__PURE__ */ f.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", fontSize: "14px", backgroundColor: "#e6f2ff", color: "#003357", borderRadius: "16px" }, children: [
        N,
        /* @__PURE__ */ f.jsx("button", { onClick: () => Z(N), style: { border: "none", background: "none", color: "#003357", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }, children: "×" })
      ] }, N)) })
    ] }),
    (i === "multiselect" || i === "hierarchical") && Array.isArray(p) && p.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { marginTop: "12px", padding: "8px", backgroundColor: "#f5f5f5", borderRadius: "8px", fontSize: "12px", color: "#666" }, children: [
      "Selected: ",
      p.length,
      " ",
      c && `/ ${c}`
    ] })
  ] });
}, MR = ({
  alerts: e,
  title: t,
  maxHeight: r = 400,
  onDismiss: n
}) => {
  const { ref: i, fs: o } = Ue(), a = {
    success: { bg: "#d4edda", border: "#28a745", icon: "✓" },
    warning: { bg: "#fff3cd", border: "#ffc107", icon: "⚠" },
    error: { bg: "#f8d7da", border: "#dc3545", icon: "✕" },
    info: { bg: "#d1ecf1", border: "#17a2b8", icon: "ℹ" }
  };
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: o(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: e.length === 0 ? /* @__PURE__ */ f.jsx("p", { style: { color: "#666", textAlign: "center", padding: "20px", fontSize: o(14) }, children: "No alerts" }) : /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: e.map((l) => {
      const c = a[l.type];
      return /* @__PURE__ */ f.jsxs(
        "div",
        {
          style: {
            padding: "16px",
            backgroundColor: c.bg,
            border: `1px solid ${c.border}`,
            borderLeft: `4px solid ${c.border}`,
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            opacity: l.read ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: o(18), fontWeight: "bold" }, children: c.icon }),
            /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ f.jsx("div", { style: { fontSize: o(14), color: "#333", marginBottom: "4px" }, children: l.message }),
              /* @__PURE__ */ f.jsx("div", { style: { fontSize: o(12), color: "#666" }, children: l.timestamp })
            ] }),
            n && /* @__PURE__ */ f.jsx(
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
let _2 = 0;
const Vo = [], DR = (e, t = "info", r = 3e3) => {
  const n = { id: `toast-${++_2}`, message: e, type: t, duration: r };
  Vo.forEach((i) => i(n));
}, NR = ({ position: e = "top-right", maxToasts: t = 5 }) => {
  const [r, n] = W([]), i = ke((s) => {
    n((u) => [s, ...u].slice(0, t)), s.duration && setTimeout(() => o(s.id), s.duration);
  }, [t]), o = (s) => {
    n((u) => u.filter((d) => d.id !== s));
  };
  Oe(() => (Vo.push(i), () => {
    const s = Vo.indexOf(i);
    s > -1 && Vo.splice(s, 1);
  }), [i]);
  const a = () => {
    const s = { position: "fixed", zIndex: 9999, display: "flex", flexDirection: "column", gap: "12px", padding: "16px" };
    switch (e) {
      case "top-left":
        return { ...s, top: 0, left: 0 };
      case "top-right":
        return { ...s, top: 0, right: 0 };
      case "bottom-left":
        return { ...s, bottom: 0, left: 0 };
      case "bottom-right":
        return { ...s, bottom: 0, right: 0 };
      case "top-center":
        return { ...s, top: 0, left: "50%", transform: "translateX(-50%)" };
      case "bottom-center":
        return { ...s, bottom: 0, left: "50%", transform: "translateX(-50%)" };
      default:
        return { ...s, top: 0, right: 0 };
    }
  }, l = (s) => ({ backgroundColor: {
    success: { bg: "#10b981", icon: "✓" },
    error: { bg: "#ef4444", icon: "✕" },
    warning: { bg: "#f59e0b", icon: "⚠" },
    info: { bg: "#3b82f6", icon: "ℹ" }
  }[s].bg }), c = (s) => ({ success: "✓", error: "✕", warning: "⚠", info: "ℹ" })[s];
  return /* @__PURE__ */ f.jsxs("div", { style: a(), children: [
    r.map((s) => /* @__PURE__ */ f.jsxs("div", { style: { ...l(s.type), color: "#fff", padding: "12px 16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "12px", minWidth: "300px", maxWidth: "500px", animation: "slideIn 0.3s ease-out", fontFamily: "Arial, sans-serif" }, children: [
      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "18px", fontWeight: "bold" }, children: c(s.type) }),
      /* @__PURE__ */ f.jsx("span", { style: { flex: 1, fontSize: "14px" }, children: s.message }),
      /* @__PURE__ */ f.jsx("button", { onClick: () => o(s.id), style: { background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px", padding: 0, lineHeight: 1 }, children: "×" })
    ] }, s.id)),
    /* @__PURE__ */ f.jsx("style", { children: `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      ` })
  ] });
}, RR = ({
  locations: e,
  title: t,
  height: r = 400,
  centerLat: n,
  centerLng: i,
  zoom: o = 12,
  bubbleScale: a = 1,
  showLabels: l = !0,
  mapStyle: c = "default"
}) => {
  const s = ve(null), u = ve(null), d = ve([]), { ref: p, fs: h } = Ue(), g = {
    lat: n ?? (e.length > 0 ? e.reduce((y, m) => y + m.lat, 0) / e.length : 51.5074),
    lng: i ?? (e.length > 0 ? e.reduce((y, m) => y + m.lng, 0) / e.length : -0.1278)
  }, v = (y) => {
    const m = Math.max(...e.map((w) => w.value)), x = 40;
    return (x + y / m * (100 - x)) * a;
  };
  return Oe(() => {
    const y = () => {
      if (window.L) {
        m();
        return;
      }
      const x = document.createElement("link");
      x.rel = "stylesheet", x.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(x);
      const b = document.createElement("script");
      b.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", b.async = !0, b.onload = m, document.head.appendChild(b);
    }, m = () => {
      if (!s.current || !window.L || u.current) return;
      const x = c === "satellite" ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : c === "terrain" ? "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      u.current = window.L.map(s.current).setView([g.lat, g.lng], o), window.L.tileLayer(x, {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(u.current), d.current.forEach((b) => b.remove()), d.current = [], e.forEach((b) => {
        const w = v(b.value), S = b.color || "#0066a1", O = window.L.divIcon({
          className: "custom-bubble-marker",
          html: `
            <div style="position: relative; width: ${w}px; height: ${w}px; margin-left: -${w / 2}px; margin-top: -${w / 2}px;">
              <div class="bubble-circle" style="width: ${w}px; height: ${w}px; border-radius: 50%; background-color: ${S}; opacity: 0.7; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: transform 0.3s;">
                <span style="color: #fff; font-size: ${w / 3.5}px; font-weight: bold; font-family: Arial, sans-serif;">${b.value >= 10 ? `${b.value}+` : b.value}</span>
              </div>
              ${l && b.label ? `<div style="position: absolute; top: ${w}px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #333; font-size: 12px; font-weight: 600; text-shadow: 0 0 3px #fff, 0 0 3px #fff; font-family: Arial, sans-serif;">${b.label}</div>` : ""}
            </div>
          `,
          iconSize: [w, w],
          iconAnchor: [w / 2, w / 2]
        }), C = window.L.marker([b.lat, b.lng], { icon: O });
        C.bindTooltip(`${b.label || `Location ${b.id}`}: ${b.value}`, {
          direction: "top",
          offset: [0, -w / 2],
          className: "custom-tooltip"
        }), C.on("mouseover", function(E) {
          const D = E.target.getElement()?.querySelector(".bubble-circle");
          D && (D.style.transform = "scale(1.1)");
        }), C.on("mouseout", function(E) {
          const D = E.target.getElement()?.querySelector(".bubble-circle");
          D && (D.style.transform = "scale(1)");
        }), C.addTo(u.current), d.current.push(C);
      });
    };
    return y(), () => {
      u.current && (u.current.remove(), u.current = null);
    };
  }, [e, g.lat, g.lng, o, c, a, l]), /* @__PURE__ */ f.jsxs("div", { ref: p, style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: h(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0", width: "100%", height: r }, children: /* @__PURE__ */ f.jsx("div", { ref: s, style: { width: "100%", height: "100%" } }) }),
    /* @__PURE__ */ f.jsx("style", { children: `
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
    e.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { marginTop: "16px", display: "flex", gap: "16px", flexWrap: "wrap", fontSize: h(12), color: "#666" }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#0066a1" } }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          "Total Locations: ",
          e.length
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ f.jsxs("span", { children: [
        "Total Count: ",
        e.reduce((y, m) => y + m.value, 0)
      ] }) })
    ] })
  ] });
};
function E2(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16),
    parseInt(t.substring(2, 4), 16),
    parseInt(t.substring(4, 6), 16)
  ];
}
function A2(e, t) {
  const [r, n, i] = E2(e), o = [...t].sort((c, s) => c.value - s.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((c, s) => {
    const u = a === 1 ? 0.5 : s / (a - 1), d = (h) => Math.round(220 - u * (220 - h)), p = (h) => d(h).toString(16).padStart(2, "0");
    l.set(c, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((c) => l.get(c));
}
const yr = (e) => e * Math.PI / 180;
function Cf(e, t) {
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
const bo = 28, kf = 24, _f = 15, T2 = 20, I2 = ({ data: e, title: t, total: r, baseColor: n }) => {
  const { ref: i, width: o, fs: a } = Ue(), [l, c] = W(null), s = o || 600, u = s, d = Math.max(160, s * 0.28), p = Math.min(s / 2 - d, 120), h = p * 0.52, g = p + T2, v = n ? A2(n, e) : null, y = e.reduce((L, K) => L + K.value, 0), m = r ?? y, x = u / 2, b = u / 2;
  let w = -90;
  const S = e.map((L, K) => {
    const le = L.value / y * 100, me = L.value / y * 360, de = w, ue = w + me, X = yr(de + me / 2), G = Math.cos(X) >= 0, ae = v ? v[K] : L.color ?? "#4a90e2", F = x + g * Math.cos(X), Me = b + g * Math.sin(X);
    return w = ue, { ...L, pct: le, sweep: me, start: de, end: ue, mid: X, isRight: G, ex: F, ey: Me, color: ae, idx: K };
  }), O = S.filter((L) => L.isRight), C = S.filter((L) => !L.isRight), E = Cf(O.map((L, K) => ({ idx: K, y: L.ey })), kf), D = Cf(C.map((L, K) => ({ idx: K, y: L.ey })), kf);
  let I = 0, $ = 0;
  const k = S.map((L) => {
    const K = L.isRight ? E[I++] : D[$++];
    return { ...L, labelY: K };
  }), V = k.map((L) => L.labelY), R = Math.min(...V) - bo, q = Math.max(...V) + bo, Z = R < 0 ? -R : 0, Q = x, N = b + Z, re = Math.min(R + Z, N - p - bo), z = Math.max(q + Z, N + p + bo) - re;
  w = -90;
  const B = e.map((L, K) => {
    const le = k[K], me = le.sweep, de = w, ue = w + me, X = le.mid, G = Q + p * Math.cos(yr(de)), ae = N + p * Math.sin(yr(de)), F = Q + p * Math.cos(yr(ue)), Me = N + p * Math.sin(yr(ue)), xe = Q + h * Math.cos(yr(ue)), T = N + h * Math.sin(yr(ue)), U = Q + h * Math.cos(yr(de)), H = N + h * Math.sin(yr(de)), pe = me > 180 ? 1 : 0, Te = `M ${G} ${ae} A ${p} ${p} 0 ${pe} 1 ${F} ${Me} L ${xe} ${T} A ${h} ${h} 0 ${pe} 0 ${U} ${H} Z`, Ee = Q + (p + 2) * Math.cos(X), fe = N + (p + 2) * Math.sin(X), gt = p + 30, Tt = Math.max(p + 50, y * 1.5), Gt = Math.max(N - Tt + 5, Math.min(N + Tt - 5, le.labelY + Z)), En = (Gt - N) / Tt, ci = Q + gt * Math.sqrt(Math.max(0, 1 - En * En)) * (le.isRight ? 1 : -1), ui = ci + (le.isRight ? _f : -_f), An = le.isRight ? "start" : "end", Nl = ui + (le.isRight ? 5 : -5);
    return w = ue, { ...le, path: Te, lineStartX: Ee, lineStartY: fe, ellipseX: ci, labelY: Gt, lx2: ui, textAnchor: An, textX: Nl };
  });
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: a(12), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ f.jsxs("svg", { width: u, height: z, viewBox: `0 ${re} ${u} ${z}`, style: { overflow: "visible", display: "block" }, children: [
        e.length === 1 ? /* @__PURE__ */ f.jsxs(
          "g",
          {
            onMouseEnter: (L) => c({ x: L.clientX, y: L.clientY, label: B[0].label, value: B[0].value, pct: 100 }),
            onMouseMove: (L) => c((K) => K ? { ...K, x: L.clientX, y: L.clientY } : null),
            onMouseLeave: () => c(null),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ f.jsx("circle", { cx: Q, cy: N, r: p, fill: B[0].color, stroke: "#fff", strokeWidth: "2" }),
              /* @__PURE__ */ f.jsx("circle", { cx: Q, cy: N, r: h, fill: "#fff" })
            ]
          }
        ) : B.map((L, K) => /* @__PURE__ */ f.jsx(
          "g",
          {
            onMouseEnter: (le) => c({ x: le.clientX, y: le.clientY, label: L.label, value: L.value, pct: L.pct }),
            onMouseMove: (le) => c((me) => me ? { ...me, x: le.clientX, y: le.clientY } : null),
            onMouseLeave: () => c(null),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ f.jsx("path", { d: L.path, fill: L.color, stroke: "#fff", strokeWidth: "2" })
          },
          K
        )),
        /* @__PURE__ */ f.jsx(
          "text",
          {
            x: Q,
            y: N - 8,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: a(13),
            fontWeight: "600",
            children: "TOTAL"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "text",
          {
            x: Q,
            y: N + 10,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: a(13),
            fontWeight: "700",
            children: m.toLocaleString("en-IN")
          }
        ),
        B.map((L, K) => /* @__PURE__ */ f.jsxs("g", { children: [
          /* @__PURE__ */ f.jsx(
            "polyline",
            {
              points: `${L.lineStartX},${L.lineStartY} ${L.ellipseX},${L.labelY} ${L.lx2},${L.labelY}`,
              stroke: L.color,
              strokeWidth: "1.2",
              fill: "none",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ f.jsxs(
            "text",
            {
              x: L.textX,
              y: L.labelY,
              textAnchor: L.textAnchor,
              dominantBaseline: "middle",
              fill: "#2c3e50",
              fontSize: a(11),
              fontWeight: "600",
              children: [
                L.label,
                ": ",
                L.value.toLocaleString("en-IN")
              ]
            }
          )
        ] }, `label-${K}`))
      ] }),
      l && /* @__PURE__ */ f.jsxs("div", { style: {
        position: "fixed",
        left: l.x + 12,
        top: l.y - 10,
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: a(12),
        pointerEvents: "none",
        zIndex: 1e3,
        whiteSpace: "nowrap"
      }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: l.label }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          "Value: ",
          l.value.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          "Percentage: ",
          l.pct.toFixed(1),
          "%"
        ] })
      ] })
    ] })
  ] });
}, Ef = ["#3b5fc0", "#2a9d5c", "#8b3fc8", "#e07b00"], $R = ({
  title: e,
  data: t,
  columns: r = 2,
  backgroundColor: n = "#f0f2f5",
  color: i
}) => {
  const o = Object.entries(t).map(([c, s]) => ({
    label: c.replace(/_/g, " "),
    value: s
  })), { ref: a, fs: l } = Ue();
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: n,
    borderRadius: "16px",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    e && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 12px 0", fontSize: l(12), fontWeight: "bold", color: "#003357" }, children: e }),
    /* @__PURE__ */ f.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${r}, 1fr)`,
      gap: "10px"
    }, children: o.map((c, s) => /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "14px 16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: l(28), fontWeight: "bold", color: i ?? Ef[s % Ef.length], lineHeight: 1 }, children: c.value }),
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: l(11), color: "#999", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "6px" }, children: c.label })
    ] }, s)) })
  ] });
};
function Wy(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Wy(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function _e() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Wy(e)) && (n && (n += " "), n += t);
  return n;
}
var M2 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function yu(e) {
  if (typeof e != "string")
    return !1;
  var t = M2;
  return t.includes(e);
}
var D2 = [
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
], N2 = new Set(D2);
function Fy(e) {
  return typeof e != "string" ? !1 : N2.has(e);
}
function Vy(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function Kt(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Fy(r) || Vy(r)) && (t[r] = e[r]);
  return t;
}
function Ui(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Nt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return Kt(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? Kt(e) : null;
}
function bt(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Fy(r) || Vy(r) || yu(r)) && (t[r] = e[r]);
  return t;
}
function R2(e) {
  return e == null ? null : /* @__PURE__ */ Nt(e) ? bt(e.props) : typeof e == "object" && !Array.isArray(e) ? bt(e) : null;
}
var $2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mc.apply(null, arguments);
}
function z2(e, t) {
  if (e == null) return {};
  var r, n, i = L2(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function L2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Ky = /* @__PURE__ */ ct((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: o,
    className: a,
    style: l,
    title: c,
    desc: s
  } = e, u = z2(e, $2), d = o || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, p = _e("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", mc({}, bt(u), {
    className: p,
    width: n,
    height: i,
    style: l,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
    ref: t
  }), /* @__PURE__ */ P.createElement("title", null, c), /* @__PURE__ */ P.createElement("desc", null, s), r);
}), B2 = ["children", "className"];
function xc() {
  return xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xc.apply(null, arguments);
}
function W2(e, t) {
  if (e == null) return {};
  var r, n, i = F2(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function F2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var pt = /* @__PURE__ */ P.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = W2(e, B2), o = _e("recharts-layer", n);
  return /* @__PURE__ */ P.createElement("g", xc({
    className: o
  }, bt(i), {
    ref: t
  }), r);
}), V2 = /* @__PURE__ */ Et(null);
function Ie(e) {
  return function() {
    return e;
  };
}
const Hy = Math.cos, Xo = Math.sin, tr = Math.sqrt, Zo = Math.PI, Ha = 2 * Zo, bc = Math.PI, wc = 2 * bc, en = 1e-6, K2 = wc - en;
function qy(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function H2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return qy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, o = n.length; i < o; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class q2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? qy : H2(t);
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
    let a = this._x1, l = this._y1, c = n - t, s = i - r, u = a - t, d = l - r, p = u * u + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > en) if (!(Math.abs(d * c - s * u) > en) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - a, g = i - l, v = c * c + s * s, y = h * h + g * g, m = Math.sqrt(v), x = Math.sqrt(p), b = o * Math.tan((bc - Math.acos((v + p - y) / (2 * m * x))) / 2), w = b / x, S = b / m;
      Math.abs(w - 1) > en && this._append`L${t + w * u},${r + w * d}`, this._append`A${o},${o},0,0,${+(d * h > u * g)},${this._x1 = t + S * c},${this._y1 = r + S * s}`;
    }
  }
  arc(t, r, n, i, o, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i), c = n * Math.sin(i), s = t + l, u = r + c, d = 1 ^ a, p = a ? i - o : o - i;
    this._x1 === null ? this._append`M${s},${u}` : (Math.abs(this._x1 - s) > en || Math.abs(this._y1 - u) > en) && this._append`L${s},${u}`, n && (p < 0 && (p = p % wc + wc), p > K2 ? this._append`A${n},${n},0,1,${d},${t - l},${r - c}A${n},${n},0,1,${d},${this._x1 = s},${this._y1 = u}` : p > en && this._append`A${n},${n},0,${+(p >= bc)},${d},${this._x1 = t + n * Math.cos(o)},${this._y1 = r + n * Math.sin(o)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function mu(e) {
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
  }, () => new q2(t);
}
function xu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Uy(e) {
  this._context = e;
}
Uy.prototype = {
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
function qa(e) {
  return new Uy(e);
}
function Yy(e) {
  return e[0];
}
function Gy(e) {
  return e[1];
}
function Xy(e, t) {
  var r = Ie(!0), n = null, i = qa, o = null, a = mu(l);
  e = typeof e == "function" ? e : e === void 0 ? Yy : Ie(e), t = typeof t == "function" ? t : t === void 0 ? Gy : Ie(t);
  function l(c) {
    var s, u = (c = xu(c)).length, d, p = !1, h;
    for (n == null && (o = i(h = a())), s = 0; s <= u; ++s)
      !(s < u && r(d = c[s], s, c)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()), p && o.point(+e(d, s, c), +t(d, s, c));
    if (h) return o = null, h + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : Ie(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : Ie(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : Ie(!!c), l) : r;
  }, l.curve = function(c) {
    return arguments.length ? (i = c, n != null && (o = i(n)), l) : i;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? n = o = null : o = i(n = c), l) : n;
  }, l;
}
function wo(e, t, r) {
  var n = null, i = Ie(!0), o = null, a = qa, l = null, c = mu(s);
  e = typeof e == "function" ? e : e === void 0 ? Yy : Ie(+e), t = typeof t == "function" ? t : Ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Gy : Ie(+r);
  function s(d) {
    var p, h, g, v = (d = xu(d)).length, y, m = !1, x, b = new Array(v), w = new Array(v);
    for (o == null && (l = a(x = c())), p = 0; p <= v; ++p) {
      if (!(p < v && i(y = d[p], p, d)) === m)
        if (m = !m)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), g = p - 1; g >= h; --g)
            l.point(b[g], w[g]);
          l.lineEnd(), l.areaEnd();
        }
      m && (b[p] = +e(y, p, d), w[p] = +t(y, p, d), l.point(n ? +n(y, p, d) : b[p], r ? +r(y, p, d) : w[p]));
    }
    if (x) return l = null, x + "" || null;
  }
  function u() {
    return Xy().defined(i).curve(a).context(o);
  }
  return s.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ie(+d), n = null, s) : e;
  }, s.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ie(+d), s) : e;
  }, s.x1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Ie(+d), s) : n;
  }, s.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ie(+d), r = null, s) : t;
  }, s.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ie(+d), s) : t;
  }, s.y1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : Ie(+d), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return u().x(e).y(t);
  }, s.lineY1 = function() {
    return u().x(e).y(r);
  }, s.lineX1 = function() {
    return u().x(n).y(t);
  }, s.defined = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : Ie(!!d), s) : i;
  }, s.curve = function(d) {
    return arguments.length ? (a = d, o != null && (l = a(o)), s) : a;
  }, s.context = function(d) {
    return arguments.length ? (d == null ? o = l = null : l = a(o = d), s) : o;
  }, s;
}
class Zy {
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
function U2(e) {
  return new Zy(e, !0);
}
function Y2(e) {
  return new Zy(e, !1);
}
const bu = {
  draw(e, t) {
    const r = tr(t / Zo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ha);
  }
}, G2 = {
  draw(e, t) {
    const r = tr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Jy = tr(1 / 3), X2 = Jy * 2, Z2 = {
  draw(e, t) {
    const r = tr(t / X2), n = r * Jy;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, J2 = {
  draw(e, t) {
    const r = tr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Q2 = 0.8908130915292852, Qy = Xo(Zo / 10) / Xo(7 * Zo / 10), ej = Xo(Ha / 10) * Qy, tj = -Hy(Ha / 10) * Qy, rj = {
  draw(e, t) {
    const r = tr(t * Q2), n = ej * r, i = tj * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let o = 1; o < 5; ++o) {
      const a = Ha * o / 5, l = Hy(a), c = Xo(a);
      e.lineTo(c * r, -l * r), e.lineTo(l * n - c * i, c * n + l * i);
    }
    e.closePath();
  }
}, Ll = tr(3), nj = {
  draw(e, t) {
    const r = -tr(t / (Ll * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ll * r, -r), e.lineTo(Ll * r, -r), e.closePath();
  }
}, Lt = -0.5, Bt = tr(3) / 2, jc = 1 / tr(12), ij = (jc / 2 + 1) * 3, oj = {
  draw(e, t) {
    const r = tr(t / ij), n = r / 2, i = r * jc, o = n, a = r * jc + r, l = -o, c = a;
    e.moveTo(n, i), e.lineTo(o, a), e.lineTo(l, c), e.lineTo(Lt * n - Bt * i, Bt * n + Lt * i), e.lineTo(Lt * o - Bt * a, Bt * o + Lt * a), e.lineTo(Lt * l - Bt * c, Bt * l + Lt * c), e.lineTo(Lt * n + Bt * i, Lt * i - Bt * n), e.lineTo(Lt * o + Bt * a, Lt * a - Bt * o), e.lineTo(Lt * l + Bt * c, Lt * c - Bt * l), e.closePath();
  }
};
function aj(e, t) {
  let r = null, n = mu(i);
  e = typeof e == "function" ? e : Ie(e || bu), t = typeof t == "function" ? t : Ie(t === void 0 ? 64 : +t);
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
function Jo() {
}
function Qo(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function e0(e) {
  this._context = e;
}
e0.prototype = {
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
        Qo(this, this._x1, this._y1);
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
        Qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function lj(e) {
  return new e0(e);
}
function t0(e) {
  this._context = e;
}
t0.prototype = {
  areaStart: Jo,
  areaEnd: Jo,
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
        Qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function sj(e) {
  return new t0(e);
}
function r0(e) {
  this._context = e;
}
r0.prototype = {
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
        Qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function cj(e) {
  return new r0(e);
}
function n0(e) {
  this._context = e;
}
n0.prototype = {
  areaStart: Jo,
  areaEnd: Jo,
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
function uj(e) {
  return new n0(e);
}
function Af(e) {
  return e < 0 ? -1 : 1;
}
function Tf(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, o = (e._y1 - e._y0) / (n || i < 0 && -0), a = (r - e._y1) / (i || n < 0 && -0), l = (o * i + a * n) / (n + i);
  return (Af(o) + Af(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
function If(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Bl(e, t, r) {
  var n = e._x0, i = e._y0, o = e._x1, a = e._y1, l = (o - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, o - l, a - l * r, o, a);
}
function ea(e) {
  this._context = e;
}
ea.prototype = {
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
        Bl(this, this._t0, If(this, this._t0));
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
          this._point = 3, Bl(this, If(this, r = Tf(this, e, t)), r);
          break;
        default:
          Bl(this, this._t0, r = Tf(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function i0(e) {
  this._context = new o0(e);
}
(i0.prototype = Object.create(ea.prototype)).point = function(e, t) {
  ea.prototype.point.call(this, t, e);
};
function o0(e) {
  this._context = e;
}
o0.prototype = {
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
function dj(e) {
  return new ea(e);
}
function fj(e) {
  return new i0(e);
}
function a0(e) {
  this._context = e;
}
a0.prototype = {
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
        for (var n = Mf(e), i = Mf(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(n[0][o], i[0][o], n[1][o], i[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Mf(e) {
  var t, r = e.length - 1, n, i = new Array(r), o = new Array(r), a = new Array(r);
  for (i[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / o[t - 1], o[t] -= n, a[t] -= n * a[t - 1];
  for (i[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - i[t + 1];
  return [i, o];
}
function pj(e) {
  return new a0(e);
}
function Ua(e, t) {
  this._context = e, this._t = t;
}
Ua.prototype = {
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
function hj(e) {
  return new Ua(e, 0.5);
}
function vj(e) {
  return new Ua(e, 0);
}
function gj(e) {
  return new Ua(e, 1);
}
function hn(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, i, o = e[t[0]], a, l = o.length; r < a; ++r)
      for (i = o, o = e[t[r]], n = 0; n < l; ++n)
        o[n][1] += o[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Sc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function yj(e, t) {
  return e[t];
}
function mj(e) {
  const t = [];
  return t.key = e, t;
}
function xj() {
  var e = Ie([]), t = Sc, r = hn, n = yj;
  function i(o) {
    var a = Array.from(e.apply(this, arguments), mj), l, c = a.length, s = -1, u;
    for (const d of o)
      for (l = 0, ++s; l < c; ++l)
        (a[l][s] = [0, +n(d, a[l].key, s, o)]).data = d;
    for (l = 0, u = xu(t(a)); l < c; ++l)
      a[u[l]].index = l;
    return r(a, u), a;
  }
  return i.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(Array.from(o)), i) : e;
  }, i.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Ie(+o), i) : n;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? Sc : typeof o == "function" ? o : Ie(Array.from(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (r = o ?? hn, i) : r;
  }, i;
}
function bj(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, o = e[0].length, a; i < o; ++i) {
      for (a = r = 0; r < n; ++r) a += e[r][i][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][i][1] /= a;
    }
    hn(e, t);
  }
}
function wj(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, o = n.length; r < o; ++r) {
      for (var a = 0, l = 0; a < i; ++a) l += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    hn(e, t);
  }
}
function jj(e, t) {
  if (!(!((a = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, o, a; n < o; ++n) {
      for (var l = 0, c = 0, s = 0; l < a; ++l) {
        for (var u = e[t[l]], d = u[n][1] || 0, p = u[n - 1][1] || 0, h = (d - p) / 2, g = 0; g < l; ++g) {
          var v = e[t[g]], y = v[n][1] || 0, m = v[n - 1][1] || 0;
          h += y - m;
        }
        c += d, s += h * d;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= s / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, hn(e, t);
  }
}
var Wl = {}, Fl = {}, Df;
function Sj() {
  return Df || (Df = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Fl)), Fl;
}
var Vl = {}, Nf;
function l0() {
  return Nf || (Nf = 1, (function(e) {
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
  })(Vl)), Vl;
}
var Kl = {}, Rf;
function wu() {
  return Rf || (Rf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(Kl)), Kl;
}
var Hl = {}, ql = {}, $f;
function Oj() {
  return $f || ($f = 1, (function(e) {
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
  })(ql)), ql;
}
var zf;
function ju() {
  return zf || (zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Oj(), r = /* @__PURE__ */ wu();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const o = [], a = i.length;
      if (a === 0)
        return o;
      let l = 0, c = "", s = "", u = !1;
      for (i.charCodeAt(0) === 46 && (o.push(""), l++); l < a; ) {
        const d = i[l];
        s ? d === "\\" && l + 1 < a ? (l++, c += i[l]) : d === s ? s = "" : c += d : u ? d === '"' || d === "'" ? s = d : d === "]" ? (u = !1, o.push(c), c = "") : c += d : d === "[" ? (u = !0, c && (o.push(c), c = "")) : d === "." ? c && (o.push(c), c = "") : c += d, l++;
      }
      return c && o.push(c), o;
    }
    e.toPath = n;
  })(Hl)), Hl;
}
var Lf;
function Su() {
  return Lf || (Lf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Sj(), r = /* @__PURE__ */ l0(), n = /* @__PURE__ */ wu(), i = /* @__PURE__ */ ju();
    function o(l, c, s) {
      if (l == null)
        return s;
      switch (typeof c) {
        case "string": {
          if (t.isUnsafeProperty(c))
            return s;
          const u = l[c];
          return u === void 0 ? r.isDeepKey(c) ? o(l, i.toPath(c), s) : s : u;
        }
        case "number":
        case "symbol": {
          typeof c == "number" && (c = n.toKey(c));
          const u = l[c];
          return u === void 0 ? s : u;
        }
        default: {
          if (Array.isArray(c))
            return a(l, c, s);
          if (Object.is(c?.valueOf(), -0) ? c = "-0" : c = String(c), t.isUnsafeProperty(c))
            return s;
          const u = l[c];
          return u === void 0 ? s : u;
        }
      }
    }
    function a(l, c, s) {
      if (c.length === 0)
        return s;
      let u = l;
      for (let d = 0; d < c.length; d++) {
        if (u == null || t.isUnsafeProperty(c[d]))
          return s;
        u = u[c[d]];
      }
      return u === void 0 ? s : u;
    }
    e.get = o;
  })(Wl)), Wl;
}
var Ul, Bf;
function Pj() {
  return Bf || (Bf = 1, Ul = Su().get), Ul;
}
var Cj = /* @__PURE__ */ Pj();
const Hn = /* @__PURE__ */ Sn(Cj);
var kj = 4;
function Fr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : kj, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function Fe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, o, a) => {
    var l = r[a - 1];
    return typeof l == "string" ? i + l + o : l !== void 0 ? i + Fr(l) + o : i + o;
  }, "");
}
var Pt = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Zt = (e) => typeof e == "number" && e != +e, vn = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, ne = (e) => (typeof e == "number" || e instanceof Number) && !Zt(e), ur = (e) => ne(e) || typeof e == "string", _j = 0, Ii = (e) => {
  var t = ++_j;
  return "".concat(e || "").concat(t);
}, Jt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!ne(t) && typeof t != "string")
    return n;
  var o;
  if (vn(t)) {
    if (r == null)
      return n;
    var a = t.indexOf("%");
    o = r * parseFloat(t.slice(0, a)) / 100;
  } else
    o = +t;
  return Zt(o) && (o = n), i && r != null && o > r && (o = r), o;
}, s0 = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function $e(e, t, r) {
  return ne(e) && ne(t) ? Fr(e + r * (t - e)) : t;
}
function c0(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Hn(n, t)) === r);
}
var ze = (e) => e === null || typeof e > "u", Yi = (e) => ze(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function Ct(e) {
  return e != null;
}
function On() {
}
var Ej = ["type", "size", "sizeType"];
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oc.apply(null, arguments);
}
function Wf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wf(Object(r), !0).forEach(function(n) {
      Aj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Aj(e, t, r) {
  return (t = Tj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tj(e) {
  var t = Ij(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ij(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mj(e, t) {
  if (e == null) return {};
  var r, n, i = Dj(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Dj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var u0 = {
  symbolCircle: bu,
  symbolCross: G2,
  symbolDiamond: Z2,
  symbolSquare: J2,
  symbolStar: rj,
  symbolTriangle: nj,
  symbolWye: oj
}, Nj = Math.PI / 180, Rj = (e) => {
  var t = "symbol".concat(Yi(e));
  return u0[t] || bu;
}, $j = (e, t, r) => {
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
      var n = 18 * Nj;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, zj = (e, t) => {
  u0["symbol".concat(Yi(e))] = t;
}, d0 = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = Mj(e, Ej), o = Ff(Ff({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), a = "circle";
  typeof t == "string" && (a = t);
  var l = () => {
    var p = Rj(a), h = aj().type(p).size($j(r, n, a)), g = h();
    if (g !== null)
      return g;
  }, {
    className: c,
    cx: s,
    cy: u
  } = o, d = bt(o);
  return ne(s) && ne(u) && ne(r) ? /* @__PURE__ */ P.createElement("path", Oc({}, d, {
    className: _e("recharts-symbols", c),
    transform: "translate(".concat(s, ", ").concat(u, ")"),
    d: l()
  })) : null;
};
d0.registerSymbol = zj;
var f0 = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, Ou = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Nt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    yu(i) && typeof r[i] == "function" && (n[i] = ((o) => r[i](r, o)));
  }), n;
}, Lj = (e, t, r) => (n) => (e(t, r, n), null), Pu = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var o = e[i];
    yu(i) && typeof o == "function" && (n || (n = {}), n[i] = Lj(o, t, r));
  }), n;
};
function Vf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vf(Object(r), !0).forEach(function(n) {
      Wj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wj(e, t, r) {
  return (t = Fj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fj(e) {
  var t = Vj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function At(e, t) {
  var r = Bj({}, e), n = t, i = Object.keys(t), o = i.reduce((a, l) => (a[l] === void 0 && n[l] !== void 0 && (a[l] = n[l]), a), r);
  return o;
}
var Yl = {}, Gl = {}, Kf;
function Kj() {
  return Kf || (Kf = 1, (function(e) {
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
  })(Gl)), Gl;
}
var Xl = {}, Hf;
function Hj() {
  return Hf || (Hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(Xl)), Xl;
}
var Zl = {}, qf;
function p0() {
  return qf || (qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Zl)), Zl;
}
var Jl = {}, Ql = {}, es = {}, Uf;
function qj() {
  return Uf || (Uf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(es)), es;
}
var Yf;
function h0() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ qj();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(Ql)), Ql;
}
var ts = {}, Gf;
function Uj() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(ts)), ts;
}
var Xf;
function Yj() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ h0(), r = /* @__PURE__ */ Uj();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(Jl)), Jl;
}
var rs = {}, ns = {}, Zf;
function Gj() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Su();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(ns)), ns;
}
var is = {}, os = {}, as = {}, ls = {}, Jf;
function v0() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(ls)), ls;
}
var ss = {}, Qf;
function g0() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(ss)), ss;
}
var cs = {}, ep;
function y0() {
  return ep || (ep = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(cs)), cs;
}
var tp;
function Xj() {
  return tp || (tp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ v0(), r = /* @__PURE__ */ g0(), n = /* @__PURE__ */ y0();
    function i(u, d, p) {
      return typeof p != "function" ? i(u, d, () => {
      }) : o(u, d, function h(g, v, y, m, x, b) {
        const w = p(g, v, y, m, x, b);
        return w !== void 0 ? !!w : o(g, v, h, b);
      }, /* @__PURE__ */ new Map());
    }
    function o(u, d, p, h) {
      if (d === u)
        return !0;
      switch (typeof d) {
        case "object":
          return a(u, d, p, h);
        case "function":
          return Object.keys(d).length > 0 ? o(u, { ...d }, p, h) : n.isEqualsSameValueZero(u, d);
        default:
          return t.isObject(u) ? typeof d == "string" ? d === "" : !0 : n.isEqualsSameValueZero(u, d);
      }
    }
    function a(u, d, p, h) {
      if (d == null)
        return !0;
      if (Array.isArray(d))
        return c(u, d, p, h);
      if (d instanceof Map)
        return l(u, d, p, h);
      if (d instanceof Set)
        return s(u, d, p, h);
      const g = Object.keys(d);
      if (u == null || r.isPrimitive(u))
        return g.length === 0;
      if (g.length === 0)
        return !0;
      if (h?.has(d))
        return h.get(d) === u;
      h?.set(d, u);
      try {
        for (let v = 0; v < g.length; v++) {
          const y = g[v];
          if (!r.isPrimitive(u) && !(y in u) || d[y] === void 0 && u[y] !== void 0 || d[y] === null && u[y] !== null || !p(u[y], d[y], y, u, d, h))
            return !1;
        }
        return !0;
      } finally {
        h?.delete(d);
      }
    }
    function l(u, d, p, h) {
      if (d.size === 0)
        return !0;
      if (!(u instanceof Map))
        return !1;
      for (const [g, v] of d.entries()) {
        const y = u.get(g);
        if (p(y, v, g, u, d, h) === !1)
          return !1;
      }
      return !0;
    }
    function c(u, d, p, h) {
      if (d.length === 0)
        return !0;
      if (!Array.isArray(u))
        return !1;
      const g = /* @__PURE__ */ new Set();
      for (let v = 0; v < d.length; v++) {
        const y = d[v];
        let m = !1;
        for (let x = 0; x < u.length; x++) {
          if (g.has(x))
            continue;
          const b = u[x];
          let w = !1;
          if (p(b, y, v, u, d, h) && (w = !0), w) {
            g.add(x), m = !0;
            break;
          }
        }
        if (!m)
          return !1;
      }
      return !0;
    }
    function s(u, d, p, h) {
      return d.size === 0 ? !0 : u instanceof Set ? c([...u], [...d], p, h) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = s;
  })(as)), as;
}
var rp;
function m0() {
  return rp || (rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Xj();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(os)), os;
}
var us = {}, ds = {}, fs = {}, np;
function Zj() {
  return np || (np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(fs)), fs;
}
var ps = {}, ip;
function Cu() {
  return ip || (ip = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(ps)), ps;
}
var hs = {}, op;
function x0() {
  return op || (op = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", o = "[object Arguments]", a = "[object Symbol]", l = "[object Date]", c = "[object Map]", s = "[object Set]", u = "[object Array]", d = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", g = "[object Error]", v = "[object DataView]", y = "[object Uint8Array]", m = "[object Uint8ClampedArray]", x = "[object Uint16Array]", b = "[object Uint32Array]", w = "[object BigUint64Array]", S = "[object Int8Array]", O = "[object Int16Array]", C = "[object Int32Array]", E = "[object BigInt64Array]", D = "[object Float32Array]", I = "[object Float64Array]";
    e.argumentsTag = o, e.arrayBufferTag = p, e.arrayTag = u, e.bigInt64ArrayTag = E, e.bigUint64ArrayTag = w, e.booleanTag = i, e.dataViewTag = v, e.dateTag = l, e.errorTag = g, e.float32ArrayTag = D, e.float64ArrayTag = I, e.functionTag = d, e.int16ArrayTag = O, e.int32ArrayTag = C, e.int8ArrayTag = S, e.mapTag = c, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = s, e.stringTag = r, e.symbolTag = a, e.uint16ArrayTag = x, e.uint32ArrayTag = b, e.uint8ArrayTag = y, e.uint8ClampedArrayTag = m;
  })(hs)), hs;
}
var vs = {}, ap;
function Jj() {
  return ap || (ap = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(vs)), vs;
}
var lp;
function b0() {
  return lp || (lp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Zj(), r = /* @__PURE__ */ Cu(), n = /* @__PURE__ */ x0(), i = /* @__PURE__ */ g0(), o = /* @__PURE__ */ Jj();
    function a(u, d) {
      return l(u, void 0, u, /* @__PURE__ */ new Map(), d);
    }
    function l(u, d, p, h = /* @__PURE__ */ new Map(), g = void 0) {
      const v = g?.(u, d, p, h);
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
        for (const [m, x] of u)
          y.set(m, l(x, m, p, h, g));
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
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      if (typeof File < "u" && u instanceof File) {
        const y = new File([u], u.name, {
          type: u.type
        });
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      if (typeof Blob < "u" && u instanceof Blob) {
        const y = new Blob([u], { type: u.type });
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      if (u instanceof Error) {
        const y = structuredClone(u);
        return h.set(u, y), y.message = u.message, y.name = u.name, y.stack = u.stack, y.cause = u.cause, y.constructor = u.constructor, c(y, u, p, h, g), y;
      }
      if (u instanceof Boolean) {
        const y = new Boolean(u.valueOf());
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      if (u instanceof Number) {
        const y = new Number(u.valueOf());
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      if (u instanceof String) {
        const y = new String(u.valueOf());
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      if (typeof u == "object" && s(u)) {
        const y = Object.create(Object.getPrototypeOf(u));
        return h.set(u, y), c(y, u, p, h, g), y;
      }
      return u;
    }
    function c(u, d, p = u, h, g) {
      const v = [...Object.keys(d), ...t.getSymbols(d)];
      for (let y = 0; y < v.length; y++) {
        const m = v[y], x = Object.getOwnPropertyDescriptor(u, m);
        (x == null || x.writable) && (u[m] = l(d[m], m, p, h, g));
      }
    }
    function s(u) {
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
    e.cloneDeepWith = a, e.cloneDeepWithImpl = l, e.copyProperties = c;
  })(ds)), ds;
}
var sp;
function Qj() {
  return sp || (sp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ b0();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(us)), us;
}
var cp;
function eS() {
  return cp || (cp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ m0(), r = /* @__PURE__ */ Qj();
    function n(i) {
      return i = r.cloneDeep(i), (o) => t.isMatch(o, i);
    }
    e.matches = n;
  })(is)), is;
}
var gs = {}, ys = {}, ms = {}, up;
function tS() {
  return up || (up = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ b0(), r = /* @__PURE__ */ Cu(), n = /* @__PURE__ */ x0();
    function i(o, a) {
      return t.cloneDeepWith(o, (l, c, s, u) => {
        const d = a?.(l, c, s, u);
        if (d !== void 0)
          return d;
        if (typeof o == "object") {
          if (r.getTag(o) === n.objectTag && typeof o.constructor != "function") {
            const p = {};
            return u.set(o, p), t.copyProperties(p, o, s, u), p;
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
  })(ms)), ms;
}
var dp;
function rS() {
  return dp || (dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ tS();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(ys)), ys;
}
var xs = {}, bs = {}, fp;
function w0() {
  return fp || (fp = 1, (function(e) {
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
  })(bs)), bs;
}
var ws = {}, pp;
function nS() {
  return pp || (pp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Cu();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(ws)), ws;
}
var hp;
function iS() {
  return hp || (hp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ l0(), r = /* @__PURE__ */ w0(), n = /* @__PURE__ */ nS(), i = /* @__PURE__ */ ju();
    function o(a, l) {
      let c;
      if (Array.isArray(l) ? c = l : typeof l == "string" && t.isDeepKey(l) && a?.[l] == null ? c = i.toPath(l) : c = [l], c.length === 0)
        return !1;
      let s = a;
      for (let u = 0; u < c.length; u++) {
        const d = c[u];
        if ((s == null || !Object.hasOwn(s, d)) && !((Array.isArray(s) || n.isArguments(s)) && r.isIndex(d) && d < s.length))
          return !1;
        s = s[d];
      }
      return !0;
    }
    e.has = o;
  })(xs)), xs;
}
var vp;
function oS() {
  return vp || (vp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ m0(), r = /* @__PURE__ */ wu(), n = /* @__PURE__ */ rS(), i = /* @__PURE__ */ Su(), o = /* @__PURE__ */ iS();
    function a(l, c) {
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
      return c = n.cloneDeep(c), function(s) {
        const u = i.get(s, l);
        return u === void 0 ? o.has(s, l) : c === void 0 ? u === void 0 : t.isMatch(u, c);
      };
    }
    e.matchesProperty = a;
  })(gs)), gs;
}
var gp;
function aS() {
  return gp || (gp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ p0(), r = /* @__PURE__ */ Gj(), n = /* @__PURE__ */ eS(), i = /* @__PURE__ */ oS();
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
  })(rs)), rs;
}
var yp;
function lS() {
  return yp || (yp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Kj(), r = /* @__PURE__ */ Hj(), n = /* @__PURE__ */ p0(), i = /* @__PURE__ */ Yj(), o = /* @__PURE__ */ aS();
    function a(l, c = n.identity) {
      return i.isArrayLikeObject(l) ? t.uniqBy(Array.from(l), r.ary(o.iteratee(c), 1)) : [];
    }
    e.uniqBy = a;
  })(Yl)), Yl;
}
var js, mp;
function sS() {
  return mp || (mp = 1, js = lS().uniqBy), js;
}
var cS = /* @__PURE__ */ sS();
const xp = /* @__PURE__ */ Sn(cS);
function uS(e, t, r) {
  return t === !0 ? xp(e, r) : typeof t == "function" ? xp(e, t) : e;
}
var jo = { exports: {} }, Ss = {}, So = { exports: {} }, Os = {};
var bp;
function dS() {
  if (bp) return Os;
  bp = 1;
  var e = Ke;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function l(d, p) {
    var h = p(), g = n({ inst: { value: h, getSnapshot: p } }), v = g[0].inst, y = g[1];
    return o(
      function() {
        v.value = h, v.getSnapshot = p, c(v) && y({ inst: v });
      },
      [d, h, p]
    ), i(
      function() {
        return c(v) && y({ inst: v }), d(function() {
          c(v) && y({ inst: v });
        });
      },
      [d]
    ), a(h), h;
  }
  function c(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var h = p();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function s(d, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : l;
  return Os.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Os;
}
var Ps = {};
var wp;
function fS() {
  return wp || (wp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    function t(h, g) {
      u || i.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = g();
      if (!d) {
        var y = g();
        o(v, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      y = a({
        inst: { value: v, getSnapshot: g }
      });
      var m = y[0].inst, x = y[1];
      return c(
        function() {
          m.value = v, m.getSnapshot = g, r(m) && x({ inst: m });
        },
        [h, v, g]
      ), l(
        function() {
          return r(m) && x({ inst: m }), h(function() {
            r(m) && x({ inst: m });
          });
        },
        [h]
      ), s(v), v;
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
    var i = Ke, o = typeof Object.is == "function" ? Object.is : e, a = i.useState, l = i.useEffect, c = i.useLayoutEffect, s = i.useDebugValue, u = !1, d = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Ps.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ps;
}
var jp;
function j0() {
  return jp || (jp = 1, process.env.NODE_ENV === "production" ? So.exports = dS() : So.exports = fS()), So.exports;
}
var Sp;
function pS() {
  if (Sp) return Ss;
  Sp = 1;
  var e = Ke, t = j0();
  function r(s, u) {
    return s === u && (s !== 0 || 1 / s === 1 / u) || s !== s && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, l = e.useMemo, c = e.useDebugValue;
  return Ss.useSyncExternalStoreWithSelector = function(s, u, d, p, h) {
    var g = o(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else v = g.current;
    g = l(
      function() {
        function m(O) {
          if (!x) {
            if (x = !0, b = O, O = p(O), h !== void 0 && v.hasValue) {
              var C = v.value;
              if (h(C, O))
                return w = C;
            }
            return w = O;
          }
          if (C = w, n(b, O)) return C;
          var E = p(O);
          return h !== void 0 && h(C, E) ? (b = O, C) : (b = O, w = E);
        }
        var x = !1, b, w, S = d === void 0 ? null : d;
        return [
          function() {
            return m(u());
          },
          S === null ? void 0 : function() {
            return m(S());
          }
        ];
      },
      [u, d, p, h]
    );
    var y = i(s, g[0], g[1]);
    return a(
      function() {
        v.hasValue = !0, v.value = y;
      },
      [y]
    ), c(y), y;
  }, Ss;
}
var Cs = {};
var Op;
function hS() {
  return Op || (Op = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, u) {
      return s === u && (s !== 0 || 1 / s === 1 / u) || s !== s && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Ke, r = j0(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, o = t.useRef, a = t.useEffect, l = t.useMemo, c = t.useDebugValue;
    Cs.useSyncExternalStoreWithSelector = function(s, u, d, p, h) {
      var g = o(null);
      if (g.current === null) {
        var v = { hasValue: !1, value: null };
        g.current = v;
      } else v = g.current;
      g = l(
        function() {
          function m(O) {
            if (!x) {
              if (x = !0, b = O, O = p(O), h !== void 0 && v.hasValue) {
                var C = v.value;
                if (h(C, O))
                  return w = C;
              }
              return w = O;
            }
            if (C = w, n(b, O))
              return C;
            var E = p(O);
            return h !== void 0 && h(C, E) ? (b = O, C) : (b = O, w = E);
          }
          var x = !1, b, w, S = d === void 0 ? null : d;
          return [
            function() {
              return m(u());
            },
            S === null ? void 0 : function() {
              return m(S());
            }
          ];
        },
        [u, d, p, h]
      );
      var y = i(s, g[0], g[1]);
      return a(
        function() {
          v.hasValue = !0, v.value = y;
        },
        [y]
      ), c(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Cs;
}
var Pp;
function vS() {
  return Pp || (Pp = 1, process.env.NODE_ENV === "production" ? jo.exports = pS() : jo.exports = hS()), jo.exports;
}
var gS = vS(), ku = /* @__PURE__ */ Et(null), yS = (e) => e, Le = () => {
  var e = qt(ku);
  return e ? e.store.dispatch : yS;
}, Ko = () => {
}, mS = () => Ko, xS = (e, t) => e === t;
function oe(e) {
  var t = qt(ku), r = er(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : Ko, [t, e]);
  return gS.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : mS, t ? t.store.getState : Ko, t ? t.store.getState : Ko, r, xS);
}
var bS = (e, t, r) => {
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
}, wS = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: a } = e, l = n(() => ({}), ...i);
  if (!(l.apply(null, o) === l.apply(null, a))) {
    let s;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: s } = u);
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
        stack: s
      }
    );
  }
}, jS = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function SS(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function OS(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function PS(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Cp = (e) => Array.isArray(e) ? e : [e];
function CS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return PS(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function kp(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var kS = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...jS,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: bS
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: wS
    }
  };
}, _S = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ES = typeof WeakRef < "u" ? WeakRef : _S, AS = 0, _p = 1;
function Oo() {
  return {
    s: AS,
    v: void 0,
    o: null,
    p: null
  };
}
function S0(e, t = {}) {
  let r = Oo();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function a() {
    let l = r;
    const { length: c } = arguments;
    for (let d = 0, p = c; d < p; d++) {
      const h = arguments[d];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let g = l.o;
        g === null && (l.o = g = /* @__PURE__ */ new WeakMap());
        const v = g.get(h);
        v === void 0 ? (l = Oo(), g.set(h, l)) : l = v;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const v = g.get(h);
        v === void 0 ? (l = Oo(), g.set(h, l)) : l = v;
      }
    }
    const s = l;
    let u;
    if (l.s === _p)
      u = l.v;
    else if (u = e.apply(null, arguments), o++, n) {
      const d = i?.deref?.() ?? i;
      d != null && n(d, u) && (u = d, o !== 0 && o--), i = typeof u == "object" && u !== null || typeof u == "function" ? new ES(u) : u;
    }
    return s.s = _p, s.v = u, u;
  }
  return a.clearCache = () => {
    r = Oo(), a.resetResultsCount();
  }, a.resultsCount = () => o, a.resetResultsCount = () => {
    o = 0;
  }, a;
}
function TS(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, a = 0, l, c = {}, s = i.pop();
    typeof s == "object" && (c = s, s = i.pop()), SS(
      s,
      `createSelector expects an output function after the inputs, but received: [${typeof s}]`
    );
    const u = {
      ...r,
      ...c
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: h = S0,
      argsMemoizeOptions: g = [],
      devModeChecks: v = {}
    } = u, y = Cp(p), m = Cp(g), x = CS(i), b = d(function() {
      return o++, s.apply(
        null,
        arguments
      );
    }, ...y);
    let w = !0;
    const S = h(function() {
      a++;
      const C = kp(
        x,
        arguments
      );
      if (l = b.apply(null, C), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: E, inputStabilityCheck: D } = kS(w, v);
        if (E.shouldRun && E.run(
          s,
          C,
          l
        ), D.shouldRun) {
          const I = kp(
            x,
            arguments
          );
          D.run(
            { inputSelectorResults: C, inputSelectorResultsCopy: I },
            { memoize: d, memoizeOptions: y },
            arguments
          );
        }
        w && (w = !1);
      }
      return l;
    }, ...m);
    return Object.assign(S, {
      resultFunc: s,
      memoizedResultFunc: b,
      dependencies: x,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => l,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: d,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var M = /* @__PURE__ */ TS(S0), IS = Object.assign(
  (e, t = M) => {
    OS(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (o) => e[o]
    );
    return t(
      n,
      (...o) => o.reduce((a, l, c) => (a[r[c]] = l, a), {})
    );
  },
  { withTypes: () => IS }
), ks = {}, _s = {}, Es = {}, Ep;
function MS() {
  return Ep || (Ep = 1, (function(e) {
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
  })(Es)), Es;
}
var As = {}, Ts = {}, Ap;
function O0() {
  return Ap || (Ap = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Ts)), Ts;
}
var Tp;
function DS() {
  return Tp || (Tp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ O0(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(o, a) {
      return Array.isArray(o) ? !1 : typeof o == "number" || typeof o == "boolean" || o == null || t.isSymbol(o) ? !0 : typeof o == "string" && (n.test(o) || !r.test(o)) || a != null && Object.hasOwn(a, o);
    }
    e.isKey = i;
  })(As)), As;
}
var Ip;
function NS() {
  return Ip || (Ip = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ MS(), r = /* @__PURE__ */ DS(), n = /* @__PURE__ */ ju();
    function i(o, a, l, c) {
      if (o == null)
        return [];
      l = c ? void 0 : l, Array.isArray(o) || (o = Object.values(o)), Array.isArray(a) || (a = a == null ? [null] : [a]), a.length === 0 && (a = [null]), Array.isArray(l) || (l = l == null ? [] : [l]), l = l.map((h) => String(h));
      const s = (h, g) => {
        let v = h;
        for (let y = 0; y < g.length && v != null; ++y)
          v = v[g[y]];
        return v;
      }, u = (h, g) => g == null || h == null ? g : typeof h == "object" && "key" in h ? Object.hasOwn(g, h.key) ? g[h.key] : s(g, h.path) : typeof h == "function" ? h(g) : Array.isArray(h) ? s(g, h) : typeof g == "object" ? g[h] : g, d = a.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
      return o.map((h) => ({
        original: h,
        criteria: d.map((g) => u(g, h))
      })).slice().sort((h, g) => {
        for (let v = 0; v < d.length; v++) {
          const y = t.compareValues(h.criteria[v], g.criteria[v], l[v]);
          if (y !== 0)
            return y;
        }
        return 0;
      }).map((h) => h.original);
    }
    e.orderBy = i;
  })(_s)), _s;
}
var Is = {}, Mp;
function RS() {
  return Mp || (Mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], o = Math.floor(n), a = (l, c) => {
        for (let s = 0; s < l.length; s++) {
          const u = l[s];
          Array.isArray(u) && c < o ? a(u, c + 1) : i.push(u);
        }
      };
      return a(r, 0), i;
    }
    e.flatten = t;
  })(Is)), Is;
}
var Ms = {}, Dp;
function P0() {
  return Dp || (Dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ w0(), r = /* @__PURE__ */ h0(), n = /* @__PURE__ */ v0(), i = /* @__PURE__ */ y0();
    function o(a, l, c) {
      return n.isObject(c) && (typeof l == "number" && r.isArrayLike(c) && t.isIndex(l) && l < c.length || typeof l == "string" && l in c) ? i.isEqualsSameValueZero(c[l], a) : !1;
    }
    e.isIterateeCall = o;
  })(Ms)), Ms;
}
var Np;
function $S() {
  return Np || (Np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ NS(), r = /* @__PURE__ */ RS(), n = /* @__PURE__ */ P0();
    function i(o, ...a) {
      const l = a.length;
      return l > 1 && n.isIterateeCall(o, a[0], a[1]) ? a = [] : l > 2 && n.isIterateeCall(a[0], a[1], a[2]) && (a = [a[0]]), t.orderBy(o, r.flatten(a), ["asc"]);
    }
    e.sortBy = i;
  })(ks)), ks;
}
var Ds, Rp;
function zS() {
  return Rp || (Rp = 1, Ds = $S().sortBy), Ds;
}
var LS = /* @__PURE__ */ zS();
const Ya = /* @__PURE__ */ Sn(LS);
var C0 = (e) => e.legend.settings, BS = (e) => e.legend.size, WS = (e) => e.legend.payload;
M([WS, C0], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ya(n, r) : n;
});
var Po = 1;
function FS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = W({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = ke(
    (i) => {
      if (i != null) {
        var o = i.getBoundingClientRect(), a = {
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        };
        (Math.abs(a.height - t.height) > Po || Math.abs(a.left - t.left) > Po || Math.abs(a.top - t.top) > Po || Math.abs(a.width - t.width) > Po) && r({
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
var VS = typeof Symbol == "function" && Symbol.observable || "@@observable", $p = VS, Ns = () => Math.random().toString(36).substring(7).split("").join("."), KS = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ns()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ns()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ns()}`
}, cn = KS;
function Gi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function HS(e) {
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
  if (YS(e))
    return "date";
  if (US(e))
    return "error";
  const r = qS(e);
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
function qS(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function US(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function YS(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function zr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = HS(e)), t;
}
function k0(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(2) : `Expected the root reducer to be a function. Instead, received: '${zr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(1) : `Expected the enhancer to be a function. Instead, received: '${zr(r)}'`);
    return r(k0)(e, t);
  }
  let n = e, i = t, o = /* @__PURE__ */ new Map(), a = o, l = 0, c = !1;
  function s() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((y, m) => {
      a.set(m, y);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? at(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(4) : `Expected the listener to be a function. Instead, received: '${zr(y)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? at(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    s();
    const x = l++;
    return a.set(x, y), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? at(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, s(), a.delete(x), o = null;
      }
    };
  }
  function p(y) {
    if (!Gi(y))
      throw new Error(process.env.NODE_ENV === "production" ? at(7) : `Actions must be plain objects. Instead, the actual type was: '${zr(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? at(17) : `Action "type" property must be a string. Instead, the actual type was: '${zr(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? at(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = n(i, y);
    } finally {
      c = !1;
    }
    return (o = a).forEach((x) => {
      x();
    }), y;
  }
  function h(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(10) : `Expected the nextReducer to be a function. Instead, received: '${zr(y)}`);
    n = y, p({
      type: cn.REPLACE
    });
  }
  function g() {
    const y = d;
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
          throw new Error(process.env.NODE_ENV === "production" ? at(11) : `Expected the observer to be an object. Instead, received: '${zr(m)}'`);
        function x() {
          const w = m;
          w.next && w.next(u());
        }
        return x(), {
          unsubscribe: y(x)
        };
      },
      [$p]() {
        return this;
      }
    };
  }
  return p({
    type: cn.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: h,
    [$p]: g
  };
}
function zp(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function GS(e, t, r, n) {
  const i = Object.keys(t), o = r && r.type === cn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Gi(e))
    return `The ${o} has unexpected type of "${zr(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (a.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === cn.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function XS(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: cn.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: cn.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${cn.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function _0(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && zp(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    XS(r);
  } catch (a) {
    o = a;
  }
  return function(l = {}, c) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const d = GS(l, r, c, i);
      d && zp(d);
    }
    let s = !1;
    const u = {};
    for (let d = 0; d < n.length; d++) {
      const p = n[d], h = r[p], g = l[p], v = h(g, c);
      if (typeof v > "u") {
        const y = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? at(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = v, s = s || v !== g;
    }
    return s = s || n.length !== Object.keys(l).length, s ? u : l;
  };
}
function ta(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function ZS(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? at(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (c, ...s) => o(c, ...s)
    }, l = e.map((c) => c(a));
    return o = ta(...l)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function _u(e) {
  return Gi(e) && "type" in e && typeof e.type == "string";
}
var E0 = Symbol.for("immer-nothing"), Lp = Symbol.for("immer-draftable"), wt = Symbol.for("immer-state"), JS = process.env.NODE_ENV !== "production" ? [
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
function It(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = JS[e], n = nn(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Dt = Object, qn = Dt.getPrototypeOf, ra = "constructor", Ga = "prototype", Pc = "configurable", na = "enumerable", Ho = "writable", Mi = "value", Pr = (e) => !!e && !!e[wt];
function Qt(e) {
  return e ? A0(e) || Za(e) || !!e[Lp] || !!e[ra]?.[Lp] || Ja(e) || Qa(e) : !1;
}
var QS = Dt[Ga][ra].toString(), Bp = /* @__PURE__ */ new WeakMap();
function A0(e) {
  if (!e || !Eu(e))
    return !1;
  const t = qn(e);
  if (t === null || t === Dt[Ga])
    return !0;
  const r = Dt.hasOwnProperty.call(t, ra) && t[ra];
  if (r === Object)
    return !0;
  if (!nn(r))
    return !1;
  let n = Bp.get(r);
  return n === void 0 && (n = Function.toString.call(r), Bp.set(r, n)), n === QS;
}
function Xa(e, t, r = !0) {
  Xi(e) === 0 ? (r ? Reflect.ownKeys(e) : Dt.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Xi(e) {
  const t = e[wt];
  return t ? t.type_ : Za(e) ? 1 : Ja(e) ? 2 : Qa(e) ? 3 : 0;
}
var Wp = (e, t, r = Xi(e)) => r === 2 ? e.has(t) : Dt[Ga].hasOwnProperty.call(e, t), Cc = (e, t, r = Xi(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), ia = (e, t, r, n = Xi(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function eO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Za = Array.isArray, Ja = (e) => e instanceof Map, Qa = (e) => e instanceof Set, Eu = (e) => typeof e == "object", nn = (e) => typeof e == "function", Rs = (e) => typeof e == "boolean";
function tO(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var mr = (e) => e.copy_ || e.base_, Au = (e) => e.modified_ ? e.copy_ : e.base_;
function kc(e, t) {
  if (Ja(e))
    return new Map(e);
  if (Qa(e))
    return new Set(e);
  if (Za(e))
    return Array[Ga].slice.call(e);
  const r = A0(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Dt.getOwnPropertyDescriptors(e);
    delete n[wt];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], l = n[a];
      l[Ho] === !1 && (l[Ho] = !0, l[Pc] = !0), (l.get || l.set) && (n[a] = {
        [Pc]: !0,
        [Ho]: !0,
        // could live with !!desc.set as well here...
        [na]: l[na],
        [Mi]: e[a]
      });
    }
    return Dt.create(qn(e), n);
  } else {
    const n = qn(e);
    if (n !== null && r)
      return { ...e };
    const i = Dt.create(n);
    return Dt.assign(i, e);
  }
}
function Tu(e, t = !1) {
  return el(e) || Pr(e) || !Qt(e) || (Xi(e) > 1 && Dt.defineProperties(e, {
    set: Co,
    add: Co,
    clear: Co,
    delete: Co
  }), Dt.freeze(e), t && Xa(
    e,
    (r, n) => {
      Tu(n, !0);
    },
    !1
  )), e;
}
function rO() {
  It(2);
}
var Co = {
  [Mi]: rO
};
function el(e) {
  return e === null || !Eu(e) ? !0 : Dt.isFrozen(e);
}
var oa = "MapSet", _c = "Patches", Fp = "ArrayMethods", T0 = {};
function gn(e) {
  const t = T0[e];
  return t || It(0, e), t;
}
var Vp = (e) => !!T0[e], Di, I0 = () => Di, nO = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Vp(oa) ? gn(oa) : void 0,
  arrayMethodsPlugin_: Vp(Fp) ? gn(Fp) : void 0
});
function Kp(e, t) {
  t && (e.patchPlugin_ = gn(_c), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ec(e) {
  Ac(e), e.drafts_.forEach(iO), e.drafts_ = null;
}
function Ac(e) {
  e === Di && (Di = e.parent_);
}
var Hp = (e) => Di = nO(Di, e);
function iO(e) {
  const t = e[wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function qp(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[wt].modified_ && (Ec(t), It(4)), Qt(e) && (e = Up(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[wt].base_,
      e,
      t
    );
  } else
    e = Up(t, r);
  return oO(t, e, !0), Ec(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== E0 ? e : void 0;
}
function Up(e, t) {
  if (el(t))
    return t;
  const r = t[wt];
  if (!r)
    return aa(t, e.handledSet_, e);
  if (!tl(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    N0(r, e);
  }
  return r.copy_;
}
function oO(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Tu(t, r);
}
function M0(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var tl = (e, t) => e.scope_ === t, aO = [];
function D0(e, t, r, n) {
  const i = mr(e), o = e.type_;
  if (n !== void 0 && Cc(i, n, o) === t) {
    ia(i, n, r, o);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    Xa(i, (c, s) => {
      if (Pr(s)) {
        const u = l.get(s) || [];
        u.push(c), l.set(s, u);
      }
    });
  }
  const a = e.draftLocations_.get(t) ?? aO;
  for (const l of a)
    ia(i, l, r, o);
}
function lO(e, t, r) {
  e.callbacks_.push(function(i) {
    const o = t;
    if (!o || !tl(o, i))
      return;
    i.mapSetPlugin_?.fixSetContents(o);
    const a = Au(o);
    D0(e, o.draft_ ?? o, a, r), N0(o, i);
  });
}
function N0(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    M0(e);
  }
}
function sO(e, t, r) {
  const { scope_: n } = e;
  if (Pr(r)) {
    const i = r[wt];
    tl(i, n) && i.callbacks_.push(function() {
      qo(e);
      const a = Au(i);
      D0(e, r, a, t);
    });
  } else Qt(r) && e.callbacks_.push(function() {
    const o = mr(e);
    e.type_ === 3 ? o.has(r) && aa(r, n.handledSet_, n) : Cc(o, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && aa(
      Cc(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function aa(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Pr(e) || t.has(e) || !Qt(e) || el(e) || (t.add(e), Xa(e, (n, i) => {
    if (Pr(i)) {
      const o = i[wt];
      if (tl(o, r)) {
        const a = Au(o);
        ia(e, n, a, e.type_), M0(o);
      }
    } else Qt(i) && aa(i, t, r);
  })), e;
}
function cO(e, t) {
  const r = Za(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : I0(),
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
  let i = n, o = la;
  r && (i = [n], o = Ni);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, [l, n];
}
var la = {
  get(e, t) {
    if (t === wt)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r?.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = mr(e);
    if (!Wp(i, t, e.type_))
      return uO(e, i, t);
    const o = i[t];
    if (e.finalized_ || !Qt(o) || n && e.operationMethod && r?.isMutatingArrayMethod(
      e.operationMethod
    ) && tO(t))
      return o;
    if (o === $s(e.base_, t)) {
      qo(e);
      const a = e.type_ === 1 ? +t : t, l = Ic(e.scope_, o, e, a);
      return e.copy_[a] = l;
    }
    return o;
  },
  has(e, t) {
    return t in mr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(mr(e));
  },
  set(e, t, r) {
    const n = R0(mr(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = $s(mr(e), t), o = i?.[wt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (eO(r, i) && (r !== void 0 || Wp(e.base_, t, e.type_)))
        return !0;
      qo(e), Tc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), sO(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return qo(e), $s(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Tc(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = mr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Ho]: !0,
      [Pc]: e.type_ !== 1 || t !== "length",
      [na]: n[na],
      [Mi]: r[t]
    };
  },
  defineProperty() {
    It(11);
  },
  getPrototypeOf(e) {
    return qn(e.base_);
  },
  setPrototypeOf() {
    It(12);
  }
}, Ni = {};
for (let e in la) {
  let t = la[e];
  Ni[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
Ni.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && It(13), Ni.set.call(this, e, t, void 0);
};
Ni.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && It(14), la.set.call(this, e[0], t, r, e[0]);
};
function $s(e, t) {
  const r = e[wt];
  return (r ? mr(r) : e)[t];
}
function uO(e, t, r) {
  const n = R0(t, r);
  return n ? Mi in n ? n[Mi] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function R0(e, t) {
  if (!(t in e))
    return;
  let r = qn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = qn(r);
  }
}
function Tc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Tc(e.parent_));
}
function qo(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = kc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var dO = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (nn(r) && !nn(n)) {
        const a = n;
        n = r;
        const l = this;
        return function(s = a, ...u) {
          return l.produce(s, (d) => n.call(this, d, ...u));
        };
      }
      nn(n) || It(6), i !== void 0 && !nn(i) && It(7);
      let o;
      if (Qt(r)) {
        const a = Hp(this), l = Ic(a, r, void 0);
        let c = !0;
        try {
          o = n(l), c = !1;
        } finally {
          c ? Ec(a) : Ac(a);
        }
        return Kp(a, i), qp(o, a);
      } else if (!r || !Eu(r)) {
        if (o = n(r), o === void 0 && (o = r), o === E0 && (o = void 0), this.autoFreeze_ && Tu(o, !0), i) {
          const a = [], l = [];
          gn(_c).generateReplacementPatches_(r, o, {
            patches_: a,
            inversePatches_: l
          }), i(a, l);
        }
        return o;
      } else
        It(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (nn(r))
        return (l, ...c) => this.produceWithPatches(l, (s) => r(s, ...c));
      let i, o;
      return [this.produce(r, n, (l, c) => {
        i = l, o = c;
      }), i, o];
    }, Rs(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), Rs(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), Rs(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    Qt(t) || It(8), Pr(t) && (t = Ft(t));
    const r = Hp(this), n = Ic(r, t, void 0);
    return n[wt].isManual_ = !0, Ac(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[wt];
    (!n || !n.isManual_) && It(9);
    const { scope_: i } = n;
    return Kp(i, r), qp(void 0, i);
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
    const i = gn(_c).applyPatches_;
    return Pr(t) ? i(t, r) : this.produce(
      t,
      (o) => i(o, r)
    );
  }
};
function Ic(e, t, r, n) {
  const [i, o] = Ja(t) ? gn(oa).proxyMap_(t, r) : Qa(t) ? gn(oa).proxySet_(t, r) : cO(t, r);
  return (r?.scope_ ?? I0()).drafts_.push(i), o.callbacks_ = r?.callbacks_ ?? [], o.key_ = n, r && n !== void 0 ? lO(r, o, n) : o.callbacks_.push(function(c) {
    c.mapSetPlugin_?.fixSetContents(o);
    const { patchPlugin_: s } = c;
    o.modified_ && s && s.generatePatches_(o, [], c);
  }), i;
}
function Ft(e) {
  return Pr(e) || It(10, e), $0(e);
}
function $0(e) {
  if (!Qt(e) || el(e))
    return e;
  const t = e[wt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = kc(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = kc(e, !0);
  return Xa(
    r,
    (i, o) => {
      ia(r, i, $0(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var fO = new dO(), z0 = fO.produce;
function L0(e) {
  return ({ dispatch: r, getState: n }) => (i) => (o) => typeof o == "function" ? o(r, n, e) : i(o);
}
var pO = L0(), hO = L0, vO = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ta : ta.apply(null, arguments);
}, gO = (e) => e && typeof e.match == "function";
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => _u(n) && n.type === e, r;
}
function yO(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  gO(e);
}
function mO(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function xO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = yO
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(mO(n.type)), r(n));
}
function B0(e, t) {
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
var W0 = class Pi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Pi.prototype);
  }
  static get [Symbol.species]() {
    return Pi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Pi(...t[0].concat(this)) : new Pi(...t.concat(this));
  }
};
function Yp(e) {
  return Qt(e) ? z0(e, () => {
  }) : e;
}
function ko(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function bO(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function wO(e, t, r) {
  const n = F0(e, t, r);
  return {
    detectMutations() {
      return V0(e, t, n, r);
    }
  };
}
function F0(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), o.children = {};
    const a = t.length > 0;
    for (const l in r) {
      const c = n ? n + "." + l : l;
      a && t.some((u) => u instanceof RegExp ? u.test(c) : c === u) || (o.children[l] = F0(e, t, r[l], c));
    }
  }
  return o;
}
function V0(e, t = [], r, n, i = !1, o = "") {
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
  const c = {};
  for (let u in r.children)
    c[u] = !0;
  for (let u in n)
    c[u] = !0;
  const s = t.length > 0;
  for (let u in c) {
    const d = o ? o + "." + u : u;
    if (s && t.some((g) => g instanceof RegExp ? g.test(d) : d === g))
      continue;
    const p = V0(e, t, r.children[u], n[u], l, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function jO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, c, s, u) {
      return JSON.stringify(l, r(c, u), s);
    }, r = function(l, c) {
      let s = [], u = [];
      return c || (c = function(d, p) {
        return s[0] === p ? "[Circular ~]" : "[Circular ~." + u.slice(0, s.indexOf(p)).join(".") + "]";
      }), function(d, p) {
        if (s.length > 0) {
          var h = s.indexOf(this);
          ~h ? s.splice(h + 1) : s.push(this), ~h ? u.splice(h, 1 / 0, d) : u.push(d), ~s.indexOf(p) && (p = c.call(this, d, p));
        } else s.push(p);
        return l == null ? p : l.call(this, d, p);
      };
    }, {
      isImmutable: n = bO,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const a = wO.bind(null, n, i);
    return ({
      getState: l
    }) => {
      let c = l(), s = a(c), u;
      return (d) => (p) => {
        const h = B0(o, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (c = l(), u = s.detectMutations(), s = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = d(p);
        return h.measureTime(() => {
          if (c = l(), u = s.detectMutations(), s = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), g;
      };
    };
  }
}
function K0(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Gi(e);
}
function Mc(e, t = "", r = K0, n, i = [], o) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o?.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), c = i.length > 0;
  for (const [s, u] of l) {
    const d = t ? t + "." + s : s;
    if (!(c && i.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!r(u))
        return {
          keyPath: d,
          value: u
        };
      if (typeof u == "object" && (a = Mc(u, d, r, n, i, o), a))
        return a;
    }
  }
  return o && H0(e) && o.add(e), !1;
}
function H0(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !H0(t))
      return !1;
  return !0;
}
function SO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = K0,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: a = 32,
      ignoreState: l = !1,
      ignoreActions: c = !1,
      disableCache: s = !1
    } = e, u = !s && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (h) => {
      if (!_u(h))
        return p(h);
      const g = p(h), v = B0(a, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(h.type) !== -1) && v.measureTime(() => {
        const y = Mc(h, "", t, r, i, u);
        if (y) {
          const {
            keyPath: m,
            value: x
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, x, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (v.measureTime(() => {
        const y = d.getState(), m = Mc(y, "", t, r, o, u);
        if (m) {
          const {
            keyPath: x,
            value: b
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${x}\`. Value:`, b, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), g;
    };
  }
}
function _o(e) {
  return typeof e == "boolean";
}
var OO = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new W0();
  if (r && (_o(r) ? a.push(pO) : a.push(hO(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      _o(n) || (l = n), a.unshift(jO(l));
    }
    if (i) {
      let l = {};
      _o(i) || (l = i), a.push(SO(l));
    }
    if (o) {
      let l = {};
      _o(o) || (l = o), a.unshift(xO(l));
    }
  }
  return a;
}, q0 = "RTK_autoBatch", De = () => (e) => ({
  payload: e,
  meta: {
    [q0]: !0
  }
}), Gp = (e) => (t) => {
  setTimeout(t, e);
}, U0 = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, a = !1;
  const l = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Gp(10)
  ) : e.type === "callback" ? e.queueNotification : Gp(e.timeout), s = () => {
    a = !1, o && (o = !1, l.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => i && u(), p = n.subscribe(d);
      return l.add(u), () => {
        p(), l.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      try {
        return i = !u?.meta?.[q0], o = !i, o && (a || (a = !0, c(s))), n.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, PO = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new W0(e);
  return n && i.push(U0(typeof n == "object" ? n : void 0)), i;
};
function CO(e) {
  const t = OO(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: o = !0,
    preloadedState: a = void 0,
    enhancers: l = void 0
  } = e || {};
  let c;
  if (typeof r == "function")
    c = r;
  else if (Gi(r))
    c = _0(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? je(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(2) : "`middleware` field must be a callback");
  let s;
  if (typeof n == "function") {
    if (s = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(s))
      throw new Error(process.env.NODE_ENV === "production" ? je(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    s = t();
  if (process.env.NODE_ENV !== "production" && s.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && o) {
    let v = /* @__PURE__ */ new Set();
    s.forEach((y) => {
      if (v.has(y))
        throw new Error(process.env.NODE_ENV === "production" ? je(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      v.add(y);
    });
  }
  let u = ta;
  i && (u = vO({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const d = ZS(...s), p = PO(d);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(5) : "`enhancers` field must be a callback");
  let h = typeof l == "function" ? l(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? je(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && s.length && !h.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const g = u(...h);
  return k0(c, a, g);
}
function Y0(e) {
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
function kO(e) {
  return typeof e == "function";
}
function _O(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? je(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Y0(t), o;
  if (kO(e))
    o = () => Yp(e());
  else {
    const l = Yp(e);
    o = () => l;
  }
  function a(l = o(), c) {
    let s = [r[c.type], ...n.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return s.filter((u) => !!u).length === 0 && (s = [i]), s.reduce((u, d) => {
      if (d)
        if (Pr(u)) {
          const h = d(u, c);
          return h === void 0 ? u : h;
        } else {
          if (Qt(u))
            return z0(u, (p) => d(p, c));
          {
            const p = d(u, c);
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
var EO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", AO = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += EO[Math.random() * 64 | 0];
  return t;
}, TO = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function IO(e, t) {
  return `${e}/${t}`;
}
function MO({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[TO];
  return function(n) {
    const {
      name: i,
      reducerPath: o = i
    } = n;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? je(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof n.reducers == "function" ? n.reducers(NO()) : n.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, s = {
      addCase(b, w) {
        const S = typeof b == "string" ? b : b.type;
        if (!S)
          throw new Error(process.env.NODE_ENV === "production" ? je(12) : "`context.addCase` cannot be called with an empty action type");
        if (S in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? je(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + S);
        return c.sliceCaseReducersByType[S] = w, s;
      },
      addMatcher(b, w) {
        return c.sliceMatchers.push({
          matcher: b,
          reducer: w
        }), s;
      },
      exposeAction(b, w) {
        return c.actionCreators[b] = w, s;
      },
      exposeCaseReducer(b, w) {
        return c.sliceCaseReducersByName[b] = w, s;
      }
    };
    l.forEach((b) => {
      const w = a[b], S = {
        reducerName: b,
        type: IO(i, b),
        createNotation: typeof n.reducers == "function"
      };
      $O(w) ? LO(S, w, s, t) : RO(S, w, s);
    });
    function u() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? je(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [b = {}, w = [], S = void 0] = typeof n.extraReducers == "function" ? Y0(n.extraReducers) : [n.extraReducers], O = {
        ...b,
        ...c.sliceCaseReducersByType
      };
      return _O(n.initialState, (C) => {
        for (let E in O)
          C.addCase(E, O[E]);
        for (let E of c.sliceMatchers)
          C.addMatcher(E.matcher, E.reducer);
        for (let E of w)
          C.addMatcher(E.matcher, E.reducer);
        S && C.addDefaultCase(S);
      });
    }
    const d = (b) => b, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let g;
    function v(b, w) {
      return g || (g = u()), g(b, w);
    }
    function y() {
      return g || (g = u()), g.getInitialState();
    }
    function m(b, w = !1) {
      function S(C) {
        let E = C[b];
        if (typeof E > "u") {
          if (w)
            E = ko(h, S, y);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? je(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return E;
      }
      function O(C = d) {
        const E = ko(p, w, () => /* @__PURE__ */ new WeakMap());
        return ko(E, C, () => {
          const D = {};
          for (const [I, $] of Object.entries(n.selectors ?? {}))
            D[I] = DO($, C, () => ko(h, C, y), w);
          return D;
        });
      }
      return {
        reducerPath: b,
        getSelectors: O,
        get selectors() {
          return O(S);
        },
        selectSlice: S
      };
    }
    const x = {
      name: i,
      reducer: v,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: y,
      ...m(o),
      injectInto(b, {
        reducerPath: w,
        ...S
      } = {}) {
        const O = w ?? o;
        return b.inject({
          reducerPath: O,
          reducer: v
        }, S), {
          ...x,
          ...m(O, !0)
        };
      }
    };
    return x;
  };
}
function DO(e, t, r, n) {
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
var ht = /* @__PURE__ */ MO();
function NO() {
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
function RO({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, a;
  if ("reducer" in n) {
    if (r && !zO(n))
      throw new Error(process.env.NODE_ENV === "production" ? je(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, a = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? Rt(e, a) : Rt(e));
}
function $O(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function zO(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function LO({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? je(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: a,
    pending: l,
    rejected: c,
    settled: s,
    options: u
  } = r, d = i(e, o, u);
  n.exposeAction(t, d), a && n.addCase(d.fulfilled, a), l && n.addCase(d.pending, l), c && n.addCase(d.rejected, c), s && n.addMatcher(d.settled, s), n.exposeCaseReducer(t, {
    fulfilled: a || Eo,
    pending: l || Eo,
    rejected: c || Eo,
    settled: s || Eo
  });
}
function Eo() {
}
var BO = "task", G0 = "listener", X0 = "completed", Iu = "cancelled", WO = `task-${Iu}`, FO = `task-${X0}`, Dc = `${G0}-${Iu}`, VO = `${G0}-${X0}`, rl = class {
  constructor(e) {
    this.code = e, this.message = `${BO} ${Iu} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Mu = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? je(32) : `${t} is not a function`);
}, sa = () => {
}, Z0 = (e, t = sa) => (e.catch(t), e), J0 = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), un = (e) => {
  if (e.aborted)
    throw new rl(e.reason);
};
function Q0(e, t) {
  let r = sa;
  return new Promise((n, i) => {
    const o = () => i(new rl(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    r = J0(e, o), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = sa;
  });
}
var KO = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof rl ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, ca = (e) => (t) => Z0(Q0(e, t).then((r) => (un(e), r))), em = (e) => {
  const t = ca(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Fn
} = Object, Xp = {}, Zi = "listenerMiddleware", HO = (e, t) => {
  const r = (n) => J0(e, () => n.abort(e.reason));
  return (n, i) => {
    Mu(n, "taskExecutor");
    const o = new AbortController();
    r(o);
    const a = KO(async () => {
      un(e), un(o.signal);
      const l = await n({
        pause: ca(o.signal),
        delay: em(o.signal),
        signal: o.signal
      });
      return un(o.signal), l;
    }, () => o.abort(FO));
    return i?.autoJoin && t.push(a.catch(sa)), {
      result: ca(e)(a),
      cancel() {
        o.abort(WO);
      }
    };
  };
}, qO = (e, t) => {
  const r = async (n, i) => {
    un(t);
    let o = () => {
    };
    const l = [new Promise((c, s) => {
      let u = e({
        predicate: n,
        effect: (d, p) => {
          p.unsubscribe(), c([d, p.getState(), p.getOriginalState()]);
        }
      });
      o = () => {
        u(), s();
      };
    })];
    i != null && l.push(new Promise((c) => setTimeout(c, i, null)));
    try {
      const c = await Q0(t, Promise.race(l));
      return un(t), c;
    } finally {
      o();
    }
  };
  return (n, i) => Z0(r(n, i));
}, tm = (e) => {
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
  return Mu(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, rm = /* @__PURE__ */ Fn((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = tm(e);
  return {
    id: AO(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? je(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => rm
}), Zp = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = tm(t);
  return Array.from(e.values()).find((o) => (typeof r == "string" ? o.type === r : o.predicate === i) && o.effect === n);
}, Nc = (e) => {
  e.pending.forEach((t) => {
    t.abort(Dc);
  });
}, UO = (e, t) => () => {
  for (const r of t.keys())
    Nc(r);
  e.clear();
}, Jp = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, nm = /* @__PURE__ */ Fn(/* @__PURE__ */ Rt(`${Zi}/add`), {
  withTypes: () => nm
}), YO = /* @__PURE__ */ Rt(`${Zi}/removeAll`), im = /* @__PURE__ */ Fn(/* @__PURE__ */ Rt(`${Zi}/remove`), {
  withTypes: () => im
}), GO = (...e) => {
  console.error(`${Zi}/error`, ...e);
}, Ji = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const g = r.get(h) ?? 0;
    r.set(h, g + 1);
  }, i = (h) => {
    const g = r.get(h) ?? 1;
    g === 1 ? r.delete(h) : r.set(h, g - 1);
  }, {
    extra: o,
    onError: a = GO
  } = e;
  Mu(a, "onError");
  const l = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (g) => {
    h.unsubscribe(), g?.cancelActive && Nc(h);
  }), c = (h) => {
    const g = Zp(t, h) ?? rm(h);
    return l(g);
  };
  Fn(c, {
    withTypes: () => c
  });
  const s = (h) => {
    const g = Zp(t, h);
    return g && (g.unsubscribe(), h.cancelActive && Nc(g)), !!g;
  };
  Fn(s, {
    withTypes: () => s
  });
  const u = async (h, g, v, y) => {
    const m = new AbortController(), x = qO(c, m.signal), b = [];
    try {
      h.pending.add(m), n(h), await Promise.resolve(h.effect(
        g,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Fn({}, v, {
          getOriginalState: y,
          condition: (w, S) => x(w, S).then(Boolean),
          take: x,
          delay: em(m.signal),
          pause: ca(m.signal),
          extra: o,
          signal: m.signal,
          fork: HO(m.signal, b),
          unsubscribe: h.unsubscribe,
          subscribe: () => {
            t.set(h.id, h);
          },
          cancelActiveListeners: () => {
            h.pending.forEach((w, S, O) => {
              w !== m && (w.abort(Dc), O.delete(w));
            });
          },
          cancel: () => {
            m.abort(Dc), h.pending.delete(m);
          },
          throwIfCancelled: () => {
            un(m.signal);
          }
        })
      ));
    } catch (w) {
      w instanceof rl || Jp(a, w, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(b), m.abort(VO), i(h), h.pending.delete(m);
    }
  }, d = UO(t, r);
  return {
    middleware: (h) => (g) => (v) => {
      if (!_u(v))
        return g(v);
      if (nm.match(v))
        return c(v.payload);
      if (YO.match(v)) {
        d();
        return;
      }
      if (im.match(v))
        return s(v.payload);
      let y = h.getState();
      const m = () => {
        if (y === Xp)
          throw new Error(process.env.NODE_ENV === "production" ? je(23) : `${Zi}: getOriginalState can only be called synchronously`);
        return y;
      };
      let x;
      try {
        if (x = g(v), t.size > 0) {
          const b = h.getState(), w = Array.from(t.values());
          for (const S of w) {
            let O = !1;
            try {
              O = S.predicate(v, b, y);
            } catch (C) {
              O = !1, Jp(a, C, {
                raisedBy: "predicate"
              });
            }
            O && u(S, v, h, m);
          }
        }
      } finally {
        y = Xp;
      }
      return x;
    },
    startListening: c,
    stopListening: s,
    clearListeners: d
  };
};
function je(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var XO = {
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
}, om = ht({
  name: "chartLayout",
  initialState: XO,
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
  setMargin: ZO,
  setLayout: JO,
  setChartSize: QO,
  setScale: eP
} = om.actions, tP = om.reducer;
function am(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function he(e) {
  return Number.isFinite(e);
}
function dr(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function Qp(e, t) {
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
    t % 2 ? Qp(Object(r), !0).forEach(function(n) {
      rP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rP(e, t, r) {
  return (t = nP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nP(e) {
  var t = iP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function He(e, t, r) {
  return ze(e) || ze(t) ? r : ur(t) ? Hn(e, t, r) : typeof t == "function" ? t(e) : r;
}
var oP = (e, t, r) => {
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
}, hr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", lm = (e, t, r, n) => {
  if (n)
    return e.map((l) => l.coordinate);
  var i, o, a = e.map((l) => (l.coordinate === t && (i = !0), l.coordinate === r && (o = !0), l.coordinate));
  return i || a.push(t), o || a.push(r), a;
}, sm = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: o,
    scale: a,
    realScaleType: l,
    isCategorical: c,
    categoricalDomain: s,
    tickCount: u,
    ticks: d,
    niceTicks: p,
    axisType: h
  } = e;
  if (!a)
    return null;
  var g = l === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, v = i === "category" && a.bandwidth ? a.bandwidth() / g : 0;
  if (v = h === "angleAxis" && o && o.length >= 2 ? Pt(o[0] - o[1]) * 2 * v : v, d || p) {
    var y = (d || p || []).map((m, x) => {
      var b = n ? n.indexOf(m) : m, w = a.map(b);
      return he(w) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: w + v,
        value: m,
        offset: v,
        index: x
      } : null;
    }).filter(Ct);
    return y;
  }
  return c && s ? s.map((m, x) => {
    var b = a.map(m);
    return he(b) ? {
      coordinate: b + v,
      value: m,
      index: x,
      offset: v
    } : null;
  }).filter(Ct) : a.ticks && u != null ? a.ticks(u).map((m, x) => {
    var b = a.map(m);
    return he(b) ? {
      coordinate: b + v,
      value: m,
      index: x,
      offset: v
    } : null;
  }).filter(Ct) : a.domain().map((m, x) => {
    var b = a.map(m);
    return he(b) ? {
      coordinate: b + v,
      // @ts-expect-error can't use Date as an index
      value: n ? n[m] : m,
      index: x,
      offset: v
    } : null;
  }).filter(Ct);
}, aP = (e, t) => {
  if (!t || t.length !== 2 || !ne(t[0]) || !ne(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!ne(e[0]) || e[0] < r) && (i[0] = r), (!ne(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, lP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var o = 0, a = 0, l = 0; l < r; ++l) {
          var c = e[l], s = c?.[i];
          if (s != null) {
            var u = s[1], d = s[0], p = Zt(u) ? d : u;
            p >= 0 ? (s[0] = o, o += p, s[1] = o) : (s[0] = a, a += p, s[1] = a);
          }
        }
  }
}, sP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var o = 0, a = 0; a < r; ++a) {
          var l = e[a], c = l?.[i];
          if (c != null) {
            var s = Zt(c[1]) ? c[0] : c[1];
            s >= 0 ? (c[0] = o, o += s, c[1] = o) : (c[0] = 0, c[1] = 0);
          }
        }
  }
}, cP = {
  sign: lP,
  // @ts-expect-error definitelytyped types are incorrect
  expand: bj,
  // @ts-expect-error definitelytyped types are incorrect
  none: hn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: wj,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: jj,
  positive: sP
}, uP = (e, t, r) => {
  var n, i = (n = cP[r]) !== null && n !== void 0 ? n : hn, o = xj().keys(t).value((l, c) => Number(He(l, c, 0))).order(Sc).offset(i), a = o(e);
  return a.forEach((l, c) => {
    l.forEach((s, u) => {
      var d = He(e[u], t[c], 0);
      Array.isArray(d) && d.length === 2 && ne(d[0]) && ne(d[1]) && (s[0] = d[0], s[1] = d[1]);
    });
  }), a;
};
function cm(e) {
  return e == null ? void 0 : String(e);
}
function eh(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: o,
    dataKey: a
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ze(i[t.dataKey])) {
      var l = c0(r, "value", i[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r != null && r[o] ? r[o].coordinate + n / 2 : null;
  }
  var c = He(i, ze(a) ? t.dataKey : a), s = t.scale.map(c);
  return ne(s) ? s : null;
}
var th = (e) => {
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
  var l = He(o, t.dataKey, t.scale.domain()[a]);
  if (ze(l))
    return null;
  var c = t.scale.map(l);
  return ne(c) ? c - i / 2 + n : null;
}, dP = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, fP = (e) => {
  var t = e.flat(2).filter(ne);
  return [Math.min(...t), Math.max(...t)];
}, pP = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], hP = (e, t, r) => {
  if (e != null)
    return pP(Object.keys(e).reduce((n, i) => {
      var o = e[i];
      if (!o)
        return n;
      var {
        stackedData: a
      } = o, l = a.reduce((c, s) => {
        var u = am(s, t, r), d = fP(u);
        return !he(d[0]) || !he(d[1]) ? c : [Math.min(c[0], d[0]), Math.max(c[1], d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, rh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, nh = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Un = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = Ya(t, (u) => u.coordinate), o = 1 / 0, a = 1, l = i.length; a < l; a++) {
      var c = i[a], s = i[a - 1];
      o = Math.min((c?.coordinate || 0) - (s?.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return r ? void 0 : 0;
};
function ih(e) {
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
function nl(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var vP = (e, t) => {
  if (t === "horizontal")
    return e.relativeX;
  if (t === "vertical")
    return e.relativeY;
}, gP = (e, t) => t === "centric" ? e.angle : e.radius, Er = (e) => e.layout.width, Ar = (e) => e.layout.height, yP = (e) => e.layout.scale, um = (e) => e.layout.margin, il = M((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), ol = M((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), mP = "data-recharts-item-index", xP = "data-recharts-item-id", Qi = 60;
function oh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oh(Object(r), !0).forEach(function(n) {
      bP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bP(e, t, r) {
  return (t = wP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wP(e) {
  var t = jP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var SP = (e) => e.brush.height;
function OP(e) {
  var t = ol(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Qi;
      return r + i;
    }
    return r;
  }, 0);
}
function PP(e) {
  var t = ol(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Qi;
      return r + i;
    }
    return r;
  }, 0);
}
function CP(e) {
  var t = il(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function kP(e) {
  var t = il(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var rt = M([Er, Ar, um, SP, OP, PP, CP, kP, C0, BS], (e, t, r, n, i, o, a, l, c, s) => {
  var u = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + o
  }, d = {
    top: (r.top || 0) + a,
    bottom: (r.bottom || 0) + l
  }, p = Ao(Ao({}, d), u), h = p.bottom;
  p.bottom += n, p = oP(p, c, s);
  var g = e - p.left - p.right, v = t - p.top - p.bottom;
  return Ao(Ao({
    brushBottom: h
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(g, 0),
    height: Math.max(v, 0)
  });
}), _P = M(rt, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Du = M(Er, Ar, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), EP = /* @__PURE__ */ Et(null), vt = () => qt(EP) != null, al = (e) => e.brush, ll = M([al, rt, um], (e, t, r) => ({
  height: e.height,
  x: ne(e.x) ? e.x : t.left,
  y: ne(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: ne(e.width) ? e.width : t.width
})), zs = {}, Ls = {}, Bs = {}, ah;
function AP() {
  return ah || (ah = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: o } = {}) {
      let a, l = null;
      const c = o != null && o.includes("leading"), s = o == null || o.includes("trailing"), u = () => {
        l !== null && (r.apply(a, l), a = void 0, l = null);
      }, d = () => {
        s && u(), v();
      };
      let p = null;
      const h = () => {
        p != null && clearTimeout(p), p = setTimeout(() => {
          p = null, d();
        }, n);
      }, g = () => {
        p !== null && (clearTimeout(p), p = null);
      }, v = () => {
        g(), a = void 0, l = null;
      }, y = () => {
        u();
      }, m = function(...x) {
        if (i?.aborted)
          return;
        a = this, l = x;
        const b = p == null;
        h(), c && b && u();
      };
      return m.schedule = h, m.cancel = v, m.flush = y, i?.addEventListener("abort", v, { once: !0 }), m;
    }
    e.debounce = t;
  })(Bs)), Bs;
}
var lh;
function TP() {
  return lh || (lh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ AP();
    function r(n, i = 0, o = {}) {
      typeof o != "object" && (o = {});
      const { leading: a = !1, trailing: l = !0, maxWait: c } = o, s = Array(2);
      a && (s[0] = "leading"), l && (s[1] = "trailing");
      let u, d = null;
      const p = t.debounce(function(...v) {
        u = n.apply(this, v), d = null;
      }, i, { edges: s }), h = function(...v) {
        return c != null && (d === null && (d = Date.now()), Date.now() - d >= c) ? (u = n.apply(this, v), d = Date.now(), p.cancel(), p.schedule(), u) : (p.apply(this, v), u);
      }, g = () => (p.flush(), u);
      return h.cancel = p.cancel, h.flush = g, h;
    }
    e.debounce = r;
  })(Ls)), Ls;
}
var sh;
function IP() {
  return sh || (sh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ TP();
    function r(n, i = 0, o = {}) {
      const { leading: a = !0, trailing: l = !0 } = o;
      return t.debounce(n, i, {
        leading: a,
        maxWait: i,
        trailing: l
      });
    }
    e.throttle = r;
  })(zs)), zs;
}
var Ws, ch;
function MP() {
  return ch || (ch = 1, Ws = IP().throttle), Ws;
}
var DP = /* @__PURE__ */ MP();
const NP = /* @__PURE__ */ Sn(DP);
var ua = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      console.warn(r.replace(/%s/g, () => i[a++]));
    }
}, ar = {
  width: "100%",
  height: "100%",
  debounce: 0,
  minWidth: 0,
  initialDimension: {
    width: -1,
    height: -1
  }
}, dm = (e, t, r) => {
  var {
    width: n = ar.width,
    height: i = ar.height,
    aspect: o,
    maxHeight: a
  } = r, l = vn(n) ? e : Number(n), c = vn(i) ? t : Number(i);
  return o && o > 0 && (l ? c = l / o : c && (l = c * o), a && c != null && c > a && (c = a)), {
    calculatedWidth: l,
    calculatedHeight: c
  };
}, RP = {
  width: 0,
  height: 0,
  overflow: "visible"
}, $P = {
  width: 0,
  overflowX: "visible"
}, zP = {
  height: 0,
  overflowY: "visible"
}, LP = {}, BP = (e) => {
  var {
    width: t,
    height: r
  } = e, n = vn(t), i = vn(r);
  return n && i ? RP : n ? $P : i ? zP : LP;
};
function WP(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, o = r;
  return i === void 0 && o === void 0 ? (i = ar.width, o = ar.height) : i === void 0 ? i = n && n > 0 ? void 0 : ar.width : o === void 0 && (o = n && n > 0 ? void 0 : ar.height), {
    width: i,
    height: o
  };
}
function Rc() {
  return Rc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rc.apply(null, arguments);
}
function uh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uh(Object(r), !0).forEach(function(n) {
      FP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FP(e, t, r) {
  return (t = VP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VP(e) {
  var t = KP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fm = /* @__PURE__ */ Et(ar.initialDimension);
function HP(e) {
  return dr(e.width) && dr(e.height);
}
function pm(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = er(() => ({
    width: r,
    height: n
  }), [r, n]);
  return HP(i) ? /* @__PURE__ */ P.createElement(fm.Provider, {
    value: i
  }, t) : null;
}
var Nu = () => qt(fm), qP = /* @__PURE__ */ ct((e, t) => {
  var {
    aspect: r,
    initialDimension: n = ar.initialDimension,
    width: i,
    height: o,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: a = ar.minWidth,
    minHeight: l,
    maxHeight: c,
    children: s,
    debounce: u = ar.debounce,
    id: d,
    className: p,
    onResize: h,
    style: g = {}
  } = e, v = ve(null), y = ve();
  y.current = h, Iy(t, () => v.current);
  var [m, x] = W({
    containerWidth: n.width,
    containerHeight: n.height
  }), b = ke((E, D) => {
    x((I) => {
      var $ = Math.round(E), k = Math.round(D);
      return I.containerWidth === $ && I.containerHeight === k ? I : {
        containerWidth: $,
        containerHeight: k
      };
    });
  }, []);
  Oe(() => {
    if (v.current == null || typeof ResizeObserver > "u")
      return On;
    var E = (k) => {
      var V, R = k[0];
      if (R != null) {
        var {
          width: q,
          height: Z
        } = R.contentRect;
        b(q, Z), (V = y.current) === null || V === void 0 || V.call(y, q, Z);
      }
    };
    u > 0 && (E = NP(E, u, {
      trailing: !0,
      leading: !1
    }));
    var D = new ResizeObserver(E), {
      width: I,
      height: $
    } = v.current.getBoundingClientRect();
    return b(I, $), D.observe(v.current), () => {
      D.disconnect();
    };
  }, [b, u]);
  var {
    containerWidth: w,
    containerHeight: S
  } = m;
  ua(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: O,
    calculatedHeight: C
  } = dm(w, S, {
    width: i,
    height: o,
    aspect: r,
    maxHeight: c
  });
  return ua(O != null && O > 0 || C != null && C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, O, C, i, o, a, l, r), /* @__PURE__ */ P.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: _e("recharts-responsive-container", p),
    style: dh(dh({}, g), {}, {
      width: i,
      height: o,
      minWidth: a,
      minHeight: l,
      maxHeight: c
    }),
    ref: v
  }, /* @__PURE__ */ P.createElement("div", {
    style: BP({
      width: i,
      height: o
    })
  }, /* @__PURE__ */ P.createElement(pm, {
    width: O,
    height: C
  }, s)));
}), hm = /* @__PURE__ */ ct((e, t) => {
  var r = Nu();
  if (dr(r.width) && dr(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = WP({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: o,
    calculatedHeight: a
  } = dm(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return ne(o) && ne(a) ? /* @__PURE__ */ P.createElement(pm, {
    width: o,
    height: a
  }, e.children) : /* @__PURE__ */ P.createElement(qP, Rc({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function Ru(e) {
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
var sl = () => {
  var e, t = vt(), r = oe(_P), n = oe(ll), i = (e = oe(al)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, UP = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, vm = () => {
  var e;
  return (e = oe(rt)) !== null && e !== void 0 ? e : UP;
}, gm = () => oe(Er), ym = () => oe(Ar), Se = (e) => e.layout.layoutType, Pn = () => oe(Se), $u = () => {
  var e = Pn();
  if (e === "horizontal" || e === "vertical")
    return e;
}, mm = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, YP = () => {
  var e = Pn();
  return e !== void 0;
}, eo = (e) => {
  var t = Le(), r = vt(), {
    width: n,
    height: i
  } = e, o = Nu(), a = n, l = i;
  return o && (a = o.width > 0 ? o.width : n, l = o.height > 0 ? o.height : i), Oe(() => {
    !r && dr(a) && dr(l) && t(QO({
      width: a,
      height: l
    }));
  }, [t, r, a, l]), null;
}, xm = Symbol.for("immer-nothing"), fh = Symbol.for("immer-draftable"), $t = Symbol.for("immer-state"), GP = process.env.NODE_ENV !== "production" ? [
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
function Ot(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = GP[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Ri = Object.getPrototypeOf;
function Yn(e) {
  return !!e && !!e[$t];
}
function yn(e) {
  return e ? bm(e) || Array.isArray(e) || !!e[fh] || !!e.constructor?.[fh] || to(e) || ul(e) : !1;
}
var XP = Object.prototype.constructor.toString(), ph = /* @__PURE__ */ new WeakMap();
function bm(e) {
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
  let n = ph.get(r);
  return n === void 0 && (n = Function.toString.call(r), ph.set(r, n)), n === XP;
}
function da(e, t, r = !0) {
  cl(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function cl(e) {
  const t = e[$t];
  return t ? t.type_ : Array.isArray(e) ? 1 : to(e) ? 2 : ul(e) ? 3 : 0;
}
function $c(e, t) {
  return cl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function wm(e, t, r) {
  const n = cl(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function ZP(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function to(e) {
  return e instanceof Map;
}
function ul(e) {
  return e instanceof Set;
}
function tn(e) {
  return e.copy_ || e.base_;
}
function zc(e, t) {
  if (to(e))
    return new Map(e);
  if (ul(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = bm(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[$t];
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
    return Object.create(Ri(e), n);
  } else {
    const n = Ri(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function zu(e, t = !1) {
  return dl(e) || Yn(e) || !yn(e) || (cl(e) > 1 && Object.defineProperties(e, {
    set: To,
    add: To,
    clear: To,
    delete: To
  }), Object.freeze(e), t && Object.values(e).forEach((r) => zu(r, !0))), e;
}
function JP() {
  Ot(2);
}
var To = {
  value: JP
};
function dl(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var QP = {};
function mn(e) {
  const t = QP[e];
  return t || Ot(0, e), t;
}
var $i;
function jm() {
  return $i;
}
function eC(e, t) {
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
function hh(e, t) {
  t && (mn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Lc(e) {
  Bc(e), e.drafts_.forEach(tC), e.drafts_ = null;
}
function Bc(e) {
  e === $i && ($i = e.parent_);
}
function vh(e) {
  return $i = eC($i, e);
}
function tC(e) {
  const t = e[$t];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function gh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[$t].modified_ && (Lc(t), Ot(4)), yn(e) && (e = fa(t, e), t.parent_ || pa(t, e)), t.patches_ && mn("Patches").generateReplacementPatches_(
    r[$t].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = fa(t, r, []), Lc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== xm ? e : void 0;
}
function fa(e, t, r) {
  if (dl(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[$t];
  if (!i)
    return da(
      t,
      (o, a) => yh(e, i, t, o, a, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return pa(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const o = i.copy_;
    let a = o, l = !1;
    i.type_ === 3 && (a = new Set(o), o.clear(), l = !0), da(
      a,
      (c, s) => yh(
        e,
        i,
        o,
        c,
        s,
        r,
        l
      ),
      n
    ), pa(e, o, !1), r && e.patches_ && mn("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function yh(e, t, r, n, i, o, a) {
  if (i == null || typeof i != "object" && !a)
    return;
  const l = dl(i);
  if (!(l && !a)) {
    if (process.env.NODE_ENV !== "production" && i === r && Ot(5), Yn(i)) {
      const c = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !$c(t.assigned_, n) ? o.concat(n) : void 0, s = fa(e, i, c);
      if (wm(r, n, s), Yn(s))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else a && r.add(i);
    if (yn(i) && !l) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && l)
        return;
      fa(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (to(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && pa(e, i);
    }
  }
}
function pa(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && zu(t, r);
}
function rC(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : jm(),
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
  let i = n, o = Lu;
  r && (i = [n], o = zi);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, l;
}
var Lu = {
  get(e, t) {
    if (t === $t)
      return e;
    const r = tn(e);
    if (!$c(r, t))
      return nC(e, r, t);
    const n = r[t];
    return e.finalized_ || !yn(n) ? n : n === Fs(e.base_, t) ? (Vs(e), e.copy_[t] = Fc(n, e)) : n;
  },
  has(e, t) {
    return t in tn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(tn(e));
  },
  set(e, t, r) {
    const n = Sm(tn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Fs(tn(e), t), o = i?.[$t];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (ZP(r, i) && (r !== void 0 || $c(e.base_, t)))
        return !0;
      Vs(e), Wc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Fs(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Vs(e), Wc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = tn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Ot(11);
  },
  getPrototypeOf(e) {
    return Ri(e.base_);
  },
  setPrototypeOf() {
    Ot(12);
  }
}, zi = {};
da(Lu, (e, t) => {
  zi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
zi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Ot(13), zi.set.call(this, e, t, void 0);
};
zi.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Ot(14), Lu.set.call(this, e[0], t, r, e[0]);
};
function Fs(e, t) {
  const r = e[$t];
  return (r ? tn(r) : e)[t];
}
function nC(e, t, r) {
  const n = Sm(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Sm(e, t) {
  if (!(t in e))
    return;
  let r = Ri(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Ri(r);
  }
}
function Wc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Wc(e.parent_));
}
function Vs(e) {
  e.copy_ || (e.copy_ = zc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var iC = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const a = this;
        return function(c = o, ...s) {
          return a.produce(c, (u) => r.call(this, u, ...s));
        };
      }
      typeof r != "function" && Ot(6), n !== void 0 && typeof n != "function" && Ot(7);
      let i;
      if (yn(t)) {
        const o = vh(this), a = Fc(t, void 0);
        let l = !0;
        try {
          i = r(a), l = !1;
        } finally {
          l ? Lc(o) : Bc(o);
        }
        return hh(o, n), gh(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === xm && (i = void 0), this.autoFreeze_ && zu(i, !0), n) {
          const o = [], a = [];
          mn("Patches").generateReplacementPatches_(t, i, o, a), n(o, a);
        }
        return i;
      } else
        Ot(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...l) => this.produceWithPatches(a, (c) => t(c, ...l));
      let n, i;
      return [this.produce(t, r, (a, l) => {
        n = a, i = l;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    yn(e) || Ot(8), Yn(e) && (e = oC(e));
    const t = vh(this), r = Fc(e, void 0);
    return r[$t].isManual_ = !0, Bc(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[$t];
    (!r || !r.isManual_) && Ot(9);
    const { scope_: n } = r;
    return hh(n, t), gh(void 0, n);
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
    const n = mn("Patches").applyPatches_;
    return Yn(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Fc(e, t) {
  const r = to(e) ? mn("MapSet").proxyMap_(e, t) : ul(e) ? mn("MapSet").proxySet_(e, t) : rC(e, t);
  return (t ? t.scope_ : jm()).drafts_.push(r), r;
}
function oC(e) {
  return Yn(e) || Ot(10, e), Om(e);
}
function Om(e) {
  if (!yn(e) || dl(e))
    return e;
  const t = e[$t];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = zc(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = zc(e, !0);
  return da(
    r,
    (i, o) => {
      wm(r, i, Om(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var aC = new iC();
aC.produce;
var lC = {
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
}, Pm = ht({
  name: "legend",
  initialState: lC,
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
        } = t.payload, i = Ft(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: De()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = Ft(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: De()
    }
  }
}), {
  setLegendSize: LR,
  setLegendSettings: BR,
  addLegendPayload: sC,
  replaceLegendPayload: cC,
  removeLegendPayload: uC
} = Pm.actions, dC = Pm.reducer, Io = { exports: {} }, Ks = {};
var mh;
function fC() {
  if (mh) return Ks;
  mh = 1;
  var e = Ke;
  function t(c, s) {
    return c === s && (c !== 0 || 1 / c === 1 / s) || c !== c && s !== s;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Ks.useSyncExternalStoreWithSelector = function(c, s, u, d, p) {
    var h = i(null);
    if (h.current === null) {
      var g = { hasValue: !1, value: null };
      h.current = g;
    } else g = h.current;
    h = a(
      function() {
        function y(S) {
          if (!m) {
            if (m = !0, x = S, S = d(S), p !== void 0 && g.hasValue) {
              var O = g.value;
              if (p(O, S))
                return b = O;
            }
            return b = S;
          }
          if (O = b, r(x, S)) return O;
          var C = d(S);
          return p !== void 0 && p(O, C) ? (x = S, O) : (x = S, b = C);
        }
        var m = !1, x, b, w = u === void 0 ? null : u;
        return [
          function() {
            return y(s());
          },
          w === null ? void 0 : function() {
            return y(w());
          }
        ];
      },
      [s, u, d, p]
    );
    var v = n(c, h[0], h[1]);
    return o(
      function() {
        g.hasValue = !0, g.value = v;
      },
      [v]
    ), l(v), v;
  }, Ks;
}
var Hs = {};
var xh;
function pC() {
  return xh || (xh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, s) {
      return c === s && (c !== 0 || 1 / c === 1 / s) || c !== c && s !== s;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Ke, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    Hs.useSyncExternalStoreWithSelector = function(c, s, u, d, p) {
      var h = i(null);
      if (h.current === null) {
        var g = { hasValue: !1, value: null };
        h.current = g;
      } else g = h.current;
      h = a(
        function() {
          function y(S) {
            if (!m) {
              if (m = !0, x = S, S = d(S), p !== void 0 && g.hasValue) {
                var O = g.value;
                if (p(O, S))
                  return b = O;
              }
              return b = S;
            }
            if (O = b, r(x, S))
              return O;
            var C = d(S);
            return p !== void 0 && p(O, C) ? (x = S, O) : (x = S, b = C);
          }
          var m = !1, x, b, w = u === void 0 ? null : u;
          return [
            function() {
              return y(s());
            },
            w === null ? void 0 : function() {
              return y(w());
            }
          ];
        },
        [s, u, d, p]
      );
      var v = n(c, h[0], h[1]);
      return o(
        function() {
          g.hasValue = !0, g.value = v;
        },
        [v]
      ), l(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Hs;
}
var bh;
function hC() {
  return bh || (bh = 1, process.env.NODE_ENV === "production" ? Io.exports = fC() : Io.exports = pC()), Io.exports;
}
hC();
function vC(e) {
  e();
}
function gC() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      vC(() => {
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
var wh = {
  notify() {
  },
  get: () => []
};
function yC(e, t) {
  let r, n = wh, i = 0, o = !1;
  function a(v) {
    u();
    const y = n.subscribe(v);
    let m = !1;
    return () => {
      m || (m = !0, y(), d());
    };
  }
  function l() {
    n.notify();
  }
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function s() {
    return o;
  }
  function u() {
    i++, r || (r = e.subscribe(c), n = gC());
  }
  function d() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = wh);
  }
  function p() {
    o || (o = !0, u());
  }
  function h() {
    o && (o = !1, d());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: l,
    handleChangeWrapper: c,
    isSubscribed: s,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return g;
}
var mC = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xC = /* @__PURE__ */ mC(), bC = () => typeof navigator < "u" && navigator.product === "ReactNative", wC = /* @__PURE__ */ bC(), jC = () => xC || wC ? P.useLayoutEffect : P.useEffect, SC = /* @__PURE__ */ jC();
function jh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function OC(e, t) {
  if (jh(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !jh(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var PC = /* @__PURE__ */ Symbol.for("react-redux-context"), CC = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function kC() {
  if (!P.createContext) return {};
  const e = CC[PC] ??= /* @__PURE__ */ new Map();
  let t = e.get(P.createContext);
  return t || (t = P.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(P.createContext, t)), t;
}
var _C = /* @__PURE__ */ kC();
function EC(e) {
  const { children: t, context: r, serverState: n, store: i } = e, o = P.useMemo(() => {
    const c = yC(i), s = {
      store: i,
      subscription: c,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return s;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: d = "once" } = e;
      return /* @__PURE__ */ Object.assign(s, {
        stabilityCheck: d,
        identityFunctionCheck: u
      });
    }
  }, [i, n]), a = P.useMemo(() => i.getState(), [i]);
  SC(() => {
    const { subscription: c } = o;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== i.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [o, a]);
  const l = r || _C;
  return /* @__PURE__ */ P.createElement(l.Provider, { value: o }, t);
}
var AC = EC, TC = /* @__PURE__ */ new Set([
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
function IC(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function ro(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (TC.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!OC(e[n], t[n]))
        return !1;
    } else if (!IC(e[n], t[n]))
      return !1;
  return !0;
}
function Vc() {
  return Vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vc.apply(null, arguments);
}
function Sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(r), !0).forEach(function(n) {
      MC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MC(e, t, r) {
  return (t = DC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DC(e) {
  var t = NC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function RC(e) {
  return Array.isArray(e) && ur(e[0]) && ur(e[1]) ? e.join(" ~ ") : e;
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
function $C(e, t) {
  return t == null ? e : Ya(e, t);
}
var zC = (e) => {
  var {
    separator: t = In.separator,
    contentStyle: r,
    itemStyle: n,
    labelStyle: i = In.labelStyle,
    payload: o,
    formatter: a,
    itemSorter: l,
    wrapperClassName: c,
    labelClassName: s,
    label: u,
    labelFormatter: d,
    accessibilityLayer: p = In.accessibilityLayer
  } = e, h = () => {
    if (o && o.length) {
      var S = {
        padding: 0,
        margin: 0
      }, O = $C(o, l), C = O.map((E, D) => {
        if (!E || E.type === "none")
          return null;
        var I = E.formatter || a || RC, {
          value: $,
          name: k
        } = E, V = $, R = k;
        if (I) {
          var q = I($, k, E, D, o);
          if (Array.isArray(q))
            [V, R] = q;
          else if (q != null)
            V = q;
          else
            return null;
        }
        var Z = hi(hi({}, In.itemStyle), {}, {
          color: E.color || In.itemStyle.color
        }, n);
        return /* @__PURE__ */ P.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(D),
          style: Z
        }, ur(R) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, R) : null, ur(R) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, V), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, E.unit || ""));
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: S
      }, C);
    }
    return null;
  }, g = hi(hi({}, In.contentStyle), r), v = hi({
    margin: 0
  }, i), y = !ze(u), m = y ? u : "", x = _e("recharts-default-tooltip", c), b = _e("recharts-tooltip-label", s);
  y && d && o !== void 0 && o !== null && (m = d(u, o));
  var w = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", Vc({
    className: x,
    style: g
  }, w), /* @__PURE__ */ P.createElement("p", {
    className: b,
    style: v
  }, /* @__PURE__ */ P.isValidElement(m) ? m : "".concat(m)), h());
}, vi = "recharts-tooltip-wrapper", LC = {
  visibility: "hidden"
};
function BC(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return _e(vi, {
    ["".concat(vi, "-right")]: ne(r) && t && ne(t.x) && r >= t.x,
    ["".concat(vi, "-left")]: ne(r) && t && ne(t.x) && r < t.x,
    ["".concat(vi, "-bottom")]: ne(n) && t && ne(t.y) && n >= t.y,
    ["".concat(vi, "-top")]: ne(n) && t && ne(t.y) && n < t.y
  });
}
function Oh(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l,
    viewBox: c,
    viewBoxDimension: s
  } = e;
  if (o && ne(o[n]))
    return o[n];
  var u = r[n] - l - (i > 0 ? i : 0), d = r[n] + i;
  if (t[n])
    return a[n] ? u : d;
  var p = c[n];
  if (p == null)
    return 0;
  if (a[n]) {
    var h = u, g = p;
    return h < g ? Math.max(d, p) : Math.max(u, p);
  }
  if (s == null)
    return 0;
  var v = d + l, y = p + s;
  return v > y ? Math.max(u, p) : Math.max(d, p);
}
function WC(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function FC(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTop: n,
    offsetLeft: i,
    position: o,
    reverseDirection: a,
    tooltipBox: l,
    useTranslate3d: c,
    viewBox: s
  } = e, u, d, p;
  return l.height > 0 && l.width > 0 && r ? (d = Oh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), p = Oh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), u = WC({
    translateX: d,
    translateY: p,
    useTranslate3d: c
  })) : u = LC, {
    cssProperties: u,
    cssClasses: BC({
      translateX: d,
      translateY: p,
      coordinate: r
    })
  };
}
var VC = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), no = {
  isSsr: VC()
};
function Cm() {
  var [e, t] = W(() => no.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return Oe(() => {
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
function Ph(e, t) {
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
    t % 2 ? Ph(Object(r), !0).forEach(function(n) {
      KC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ph(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KC(e, t, r) {
  return (t = HC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HC(e) {
  var t = qC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UC(e) {
  if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active)
    return "transform ".concat(e.animationDuration, "ms ").concat(e.animationEasing);
}
function YC(e) {
  var t, r, n, i, o, a, l = Cm(), [c, s] = P.useState(() => ({
    dismissed: !1,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  P.useEffect(() => {
    var g = (v) => {
      if (v.key === "Escape") {
        var y, m, x, b;
        s({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (y = (m = e.coordinate) === null || m === void 0 ? void 0 : m.x) !== null && y !== void 0 ? y : 0,
            y: (x = (b = e.coordinate) === null || b === void 0 ? void 0 : b.y) !== null && x !== void 0 ? x : 0
          }
        });
      }
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [(t = e.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e.coordinate) === null || r === void 0 ? void 0 : r.y]), c.dismissed && (((n = (i = e.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== c.dismissedAtCoordinate.x || ((o = (a = e.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && o !== void 0 ? o : 0) !== c.dismissedAtCoordinate.y) && s(Mn(Mn({}, c), {}, {
    dismissed: !1
  }));
  var {
    cssClasses: u,
    cssProperties: d
  } = FC({
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
    transition: UC({
      prefersReducedMotion: l,
      isAnimationActive: e.isAnimationActive,
      active: e.active,
      animationDuration: e.animationDuration,
      animationEasing: e.animationEasing
    })
  }, d), {}, {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    left: 0
  }), h = Mn(Mn({}, p), {}, {
    visibility: !c.dismissed && e.active && e.hasPayload ? "visible" : "hidden"
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
var GC = /* @__PURE__ */ P.memo(YC), km = () => {
  var e;
  return (e = oe((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kc.apply(null, arguments);
}
function Ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ch(Object(r), !0).forEach(function(n) {
      XC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XC(e, t, r) {
  return (t = ZC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZC(e) {
  var t = JC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _h = {
  curveBasisClosed: sj,
  curveBasisOpen: cj,
  curveBasis: lj,
  curveBumpX: U2,
  curveBumpY: Y2,
  curveLinearClosed: uj,
  curveLinear: qa,
  curveMonotoneX: dj,
  curveMonotoneY: fj,
  curveNatural: pj,
  curveStep: hj,
  curveStepAfter: gj,
  curveStepBefore: vj
}, ha = (e) => he(e.x) && he(e.y), Eh = (e) => e.base != null && ha(e.base) && ha(e), gi = (e) => e.x, yi = (e) => e.y, QC = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Yi(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = _h["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return _h[r] || qa;
}, Ah = {
  connectNulls: !1,
  type: "linear"
}, ek = (e) => {
  var {
    type: t = Ah.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: o = Ah.connectNulls
  } = e, a = QC(t, i), l = o ? r.filter(ha) : r;
  if (Array.isArray(n)) {
    var c, s = r.map((g, v) => kh(kh({}, g), {}, {
      base: n[v]
    }));
    i === "vertical" ? c = wo().y(yi).x1(gi).x0((g) => g.base.x) : c = wo().x(gi).y1(yi).y0((g) => g.base.y);
    var u = c.defined(Eh).curve(a), d = o ? s.filter(Eh) : s;
    return u(d);
  }
  var p;
  i === "vertical" && ne(n) ? p = wo().y(yi).x1(gi).x0(n) : ne(n) ? p = wo().x(gi).y1(yi).y0(n) : p = Xy().x(gi).y(yi);
  var h = p.defined(ha).curve(a);
  return h(l);
}, _i = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, o = Pn();
  if ((!r || !r.length) && !n)
    return null;
  var a = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || o,
    connectNulls: e.connectNulls
  }, l = r && r.length ? ek(a) : n;
  return /* @__PURE__ */ P.createElement("path", Kc({}, Kt(e), Ou(e), {
    className: _e("recharts-curve", t),
    d: l === null ? void 0 : l,
    ref: i
  }));
}, tk = ["x", "y", "top", "left", "width", "height", "className"];
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hc.apply(null, arguments);
}
function Th(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Th(Object(r), !0).forEach(function(n) {
      nk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Th(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nk(e, t, r) {
  return (t = ik(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ik(e) {
  var t = ok(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ok(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ak(e, t) {
  if (e == null) return {};
  var r, n, i = lk(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function lk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var sk = (e, t, r, n, i, o) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(o, ",").concat(t, "h").concat(r), ck = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: o = 0,
    height: a = 0,
    className: l
  } = e, c = ak(e, tk), s = rk({
    x: t,
    y: r,
    top: n,
    left: i,
    width: o,
    height: a
  }, c);
  return !ne(t) || !ne(r) || !ne(o) || !ne(a) || !ne(n) || !ne(i) ? null : /* @__PURE__ */ P.createElement("path", Hc({}, bt(s), {
    className: _e("recharts-cross", l),
    d: sk(t, r, o, a, n, i)
  }));
};
function uk(e, t, r, n) {
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
function Ih(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ih(Object(r), !0).forEach(function(n) {
      dk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ih(Object(r)).forEach(function(n) {
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
var hk = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), _m = (e, t, r) => e.map((n) => "".concat(hk(n), " ").concat(t, "ms ").concat(r)).join(","), vk = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Li = (e, t) => Object.keys(t).reduce((r, n) => Mh(Mh({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dh(Object(r), !0).forEach(function(n) {
      gk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gk(e, t, r) {
  return (t = yk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yk(e) {
  var t = mk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var va = (e, t, r) => e + (t - e) * r, qc = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, Em = (e, t, r) => {
  var n = Li((i, o) => {
    if (qc(o)) {
      var [a, l] = e(o.from, o.to, o.velocity);
      return Xe(Xe({}, o), {}, {
        from: a,
        velocity: l
      });
    }
    return o;
  }, t);
  return r < 1 ? Li((i, o) => qc(o) && n[i] != null ? Xe(Xe({}, o), {}, {
    velocity: va(o.velocity, n[i].velocity, r),
    from: va(o.from, n[i].from, r)
  }) : o, t) : Em(e, n, r - 1);
};
function xk(e, t, r, n, i, o) {
  var a, l = n.reduce((p, h) => Xe(Xe({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), c = () => Li((p, h) => h.from, l), s = () => !Object.values(l).filter(qc).length, u = null, d = (p) => {
    a || (a = p);
    var h = p - a, g = h / r.dt;
    l = Em(r, l, g), i(Xe(Xe(Xe({}, e), t), c())), a = p, s() || (u = o.setTimeout(d));
  };
  return () => (u = o.setTimeout(d), () => {
    var p;
    (p = u) === null || p === void 0 || p();
  });
}
function bk(e, t, r, n, i, o, a) {
  var l = null, c = i.reduce((d, p) => {
    var h = e[p], g = t[p];
    return h == null || g == null ? d : Xe(Xe({}, d), {}, {
      [p]: [h, g]
    });
  }, {}), s, u = (d) => {
    s || (s = d);
    var p = (d - s) / n, h = Li((v, y) => va(...y, r(p)), c);
    if (o(Xe(Xe(Xe({}, e), t), h)), p < 1)
      l = a.setTimeout(u);
    else {
      var g = Li((v, y) => va(...y, r(1)), c);
      o(Xe(Xe(Xe({}, e), t), g));
    }
  };
  return () => (l = a.setTimeout(u), () => {
    var d;
    (d = l) === null || d === void 0 || d();
  });
}
const wk = (e, t, r, n, i, o) => {
  var a = vk(e, t);
  return r == null ? () => (i(Xe(Xe({}, e), t)), () => {
  }) : r.isStepper === !0 ? xk(e, t, r, a, i, o) : bk(e, t, r, n, a, i, o);
};
var ga = 1e-4, Am = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], Tm = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Nh = (e, t) => (r) => {
  var n = Am(e, t);
  return Tm(n, r);
}, jk = (e, t) => (r) => {
  var n = Am(e, t), i = [...n.map((o, a) => o * a).slice(1), 0];
  return Tm(i, r);
}, Sk = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((o) => parseFloat(o));
  return [i[0], i[1], i[2], i[3]];
}, Ok = function() {
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
        var i = Sk(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, Pk = (e, t, r, n) => {
  var i = Nh(e, r), o = Nh(t, n), a = jk(e, r), l = (s) => s > 1 ? 1 : s < 0 ? 0 : s, c = (s) => {
    for (var u = s > 1 ? 1 : s, d = u, p = 0; p < 8; ++p) {
      var h = i(d) - u, g = a(d);
      if (Math.abs(h - u) < ga || g < ga)
        return o(d);
      d = l(d - h / g);
    }
    return o(d);
  };
  return c.isStepper = !1, c;
}, Rh = function() {
  return Pk(...Ok(...arguments));
}, Ck = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, o = (a, l, c) => {
    var s = -(a - l) * r, u = c * n, d = c + (s - u) * i / 1e3, p = c * i / 1e3 + a;
    return Math.abs(p - l) < ga && Math.abs(d) < ga ? [l, 0] : [p, d];
  };
  return o.isStepper = !0, o.dt = i, o;
}, kk = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Rh(e);
      case "spring":
        return Ck();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return Rh(e);
    }
  return typeof e == "function" ? e : null;
};
function _k(e) {
  var t, r = () => null, n = !1, i = null, o = (a) => {
    if (!n) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var l = a, [c, ...s] = l;
        if (typeof c == "number") {
          i = e.setTimeout(o.bind(null, s), c);
          return;
        }
        o(c), i = e.setTimeout(o.bind(null, s));
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
class Ek {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, o = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(o));
    };
    return i = requestAnimationFrame(o), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function Ak() {
  return _k(new Ek());
}
var Tk = /* @__PURE__ */ Et(Ak);
function Ik(e, t) {
  var r = qt(Tk);
  return er(() => t ?? r(e), [e, t, r]);
}
var Mk = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, $h = {
  t: 0
}, qs = {
  t: 1
};
function fl(e) {
  var t = At(e, Mk), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: o,
    begin: a,
    onAnimationEnd: l,
    onAnimationStart: c,
    children: s
  } = t, u = Cm(), d = r === "auto" ? !no.isSsr && !u : r, p = Ik(t.animationId, t.animationManager), [h, g] = W(d ? $h : qs), v = ve(null);
  return Oe(() => {
    d || g(qs);
  }, [d]), Oe(() => {
    if (!d || !n)
      return On;
    var y = wk($h, qs, kk(o), i, g, p.getTimeoutController()), m = () => {
      v.current = y();
    };
    return p.start([c, a, m, i, l]), () => {
      p.stop(), v.current && v.current(), l();
    };
  }, [d, n, i, o, a, c, l, p]), s(h.t);
}
function pl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = ve(Ii(t)), n = ve(e);
  return n.current !== e && (r.current = Ii(t), n.current = e), r.current;
}
var Dk = ["radius"], Nk = ["radius"], zh, Lh, Bh, Wh, Fh, Vh, Kh, Hh, qh, Uh;
function Yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yh(Object(r), !0).forEach(function(n) {
      Rk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rk(e, t, r) {
  return (t = $k(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $k(e) {
  var t = zk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ya() {
  return ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ya.apply(null, arguments);
}
function Xh(e, t) {
  if (e == null) return {};
  var r, n, i = Lk(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Lk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function nr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Zh = (e, t, r, n, i) => {
  var o = Fr(r), a = Fr(n), l = Math.min(Math.abs(o) / 2, Math.abs(a) / 2), c = a >= 0 ? 1 : -1, s = o >= 0 ? 1 : -1, u = a >= 0 && o >= 0 || a < 0 && o < 0 ? 1 : 0, d;
  if (l > 0 && Array.isArray(i)) {
    for (var p = [0, 0, 0, 0], h = 0, g = 4; h < g; h++) {
      var v, y = (v = i[h]) !== null && v !== void 0 ? v : 0;
      p[h] = y > l ? l : y;
    }
    d = Fe(zh || (zh = nr(["M", ",", ""])), e, t + c * p[0]), p[0] > 0 && (d += Fe(Lh || (Lh = nr(["A ", ",", ",0,0,", ",", ",", ""])), p[0], p[0], u, e + s * p[0], t)), d += Fe(Bh || (Bh = nr(["L ", ",", ""])), e + r - s * p[1], t), p[1] > 0 && (d += Fe(Wh || (Wh = nr(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[1], p[1], u, e + r, t + c * p[1])), d += Fe(Fh || (Fh = nr(["L ", ",", ""])), e + r, t + n - c * p[2]), p[2] > 0 && (d += Fe(Vh || (Vh = nr(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[2], p[2], u, e + r - s * p[2], t + n)), d += Fe(Kh || (Kh = nr(["L ", ",", ""])), e + s * p[3], t + n), p[3] > 0 && (d += Fe(Hh || (Hh = nr(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[3], p[3], u, e, t + n - c * p[3])), d += "Z";
  } else if (l > 0 && i === +i && i > 0) {
    var m = Math.min(l, i);
    d = Fe(qh || (qh = nr(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + c * m, m, m, u, e + s * m, t, e + r - s * m, t, m, m, u, e + r, t + c * m, e + r, t + n - c * m, m, m, u, e + r - s * m, t + n, e + s * m, t + n, m, m, u, e, t + n - c * m);
  } else
    d = Fe(Uh || (Uh = nr(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return d;
}, Jh = {
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
}, Im = (e) => {
  var t = At(e, Jh), r = ve(null), [n, i] = W(-1);
  Oe(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var Q = r.current.getTotalLength();
        Q && i(Q);
      } catch {
      }
  }, []);
  var {
    x: o,
    y: a,
    width: l,
    height: c,
    radius: s,
    className: u
  } = t, {
    animationEasing: d,
    animationDuration: p,
    animationBegin: h,
    isAnimationActive: g,
    isUpdateAnimationActive: v
  } = t, y = ve(l), m = ve(c), x = ve(o), b = ve(a), w = er(() => ({
    x: o,
    y: a,
    width: l,
    height: c,
    radius: s
  }), [o, a, l, c, s]), S = pl(w, "rectangle-");
  if (o !== +o || a !== +a || l !== +l || c !== +c || l === 0 || c === 0)
    return null;
  var O = _e("recharts-rectangle", u);
  if (!v) {
    var C = bt(t), {
      radius: E
    } = C, D = Xh(C, Dk);
    return /* @__PURE__ */ P.createElement("path", ya({}, D, {
      x: Fr(o),
      y: Fr(a),
      width: Fr(l),
      height: Fr(c),
      radius: typeof s == "number" ? s : void 0,
      className: O,
      d: Zh(o, a, l, c, s)
    }));
  }
  var I = y.current, $ = m.current, k = x.current, V = b.current, R = "0px ".concat(n === -1 ? 1 : n, "px"), q = "".concat(n, "px ").concat(n, "px"), Z = _m(["strokeDasharray"], p, typeof d == "string" ? d : Jh.animationEasing);
  return /* @__PURE__ */ P.createElement(fl, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: p,
    easing: d,
    isActive: v,
    begin: h
  }, (Q) => {
    var N = $e(I, l, Q), re = $e($, c, Q), te = $e(k, o, Q), z = $e(V, a, Q);
    r.current && (y.current = N, m.current = re, x.current = te, b.current = z);
    var B;
    g ? Q > 0 ? B = {
      transition: Z,
      strokeDasharray: q
    } : B = {
      strokeDasharray: R
    } : B = {
      strokeDasharray: q
    };
    var L = bt(t), {
      radius: K
    } = L, le = Xh(L, Nk);
    return /* @__PURE__ */ P.createElement("path", ya({}, le, {
      radius: typeof s == "number" ? s : void 0,
      className: O,
      d: Zh(te, z, N, re, s),
      ref: r,
      style: Gh(Gh({}, B), t.style)
    }));
  });
};
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(n) {
      Bk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bk(e, t, r) {
  return (t = Wk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wk(e) {
  var t = Fk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Fk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ma = Math.PI / 180, Vk = (e) => e * 180 / Math.PI, st = (e, t, r, n) => ({
  x: e + Math.cos(-ma * n) * r,
  y: t + Math.sin(-ma * n) * r
}), Kk = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Hk = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: o
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - o) ** 2);
}, qk = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: o
  } = t, a = Hk({
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
  var l = (r - i) / a, c = Math.acos(l);
  return n > o && (c = 2 * Math.PI - c), {
    radius: a,
    angle: Vk(c),
    angleInRadian: c
  };
}, Uk = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), o = Math.min(n, i);
  return {
    startAngle: t - o * 360,
    endAngle: r - o * 360
  };
}, Yk = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), o = Math.floor(n / 360), a = Math.min(i, o);
  return e + a * 360;
}, Gk = (e, t) => {
  var {
    relativeX: r,
    relativeY: n
  } = e, {
    radius: i,
    angle: o
  } = qk({
    x: r,
    y: n
  }, t), {
    innerRadius: a,
    outerRadius: l
  } = t;
  if (i < a || i > l || i === 0)
    return null;
  var {
    startAngle: c,
    endAngle: s
  } = Uk(t), u = o, d;
  if (c <= s) {
    for (; u > s; )
      u -= 360;
    for (; u < c; )
      u += 360;
    d = u >= c && u <= s;
  } else {
    for (; u > c; )
      u -= 360;
    for (; u < s; )
      u += 360;
    d = u >= s && u <= c;
  }
  return d ? ev(ev({}, t), {}, {
    radius: i,
    angle: Yk(u, t)
  }) : null;
};
function Mm(e) {
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
var tv, rv, nv, iv, ov, av, lv;
function Uc() {
  return Uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Uc.apply(null, arguments);
}
function on(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Xk = (e, t) => {
  var r = Pt(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Mo = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: o,
    isExternal: a,
    cornerRadius: l,
    cornerIsExternal: c
  } = e, s = l * (a ? 1 : -1) + n, u = Math.asin(l / s) / ma, d = c ? i : i + o * u, p = st(t, r, s, d), h = st(t, r, n, d), g = c ? i - o * u : i, v = st(t, r, s * Math.cos(u * ma), g);
  return {
    center: p,
    circleTangency: h,
    lineTangency: v,
    theta: u
  };
}, Dm = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: o,
    endAngle: a
  } = e, l = Xk(o, a), c = o + l, s = st(t, r, i, o), u = st(t, r, i, c), d = Fe(tv || (tv = on(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), s.x, s.y, i, i, +(Math.abs(l) > 180), +(o > c), u.x, u.y);
  if (n > 0) {
    var p = st(t, r, n, o), h = st(t, r, n, c);
    d += Fe(rv || (rv = on(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), h.x, h.y, n, n, +(Math.abs(l) > 180), +(o <= c), p.x, p.y);
  } else
    d += Fe(nv || (nv = on(["L ", ",", " Z"])), t, r);
  return d;
}, Zk = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: o,
    forceCornerRadius: a,
    cornerIsExternal: l,
    startAngle: c,
    endAngle: s
  } = e, u = Pt(s - c), {
    circleTangency: d,
    lineTangency: p,
    theta: h
  } = Mo({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: u,
    cornerRadius: o,
    cornerIsExternal: l
  }), {
    circleTangency: g,
    lineTangency: v,
    theta: y
  } = Mo({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: -u,
    cornerRadius: o,
    cornerIsExternal: l
  }), m = l ? Math.abs(c - s) : Math.abs(c - s) - h - y;
  if (m < 0)
    return a ? Fe(iv || (iv = on(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), p.x, p.y, o, o, o * 2, o, o, -o * 2) : Dm({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: c,
      endAngle: s
    });
  var x = Fe(ov || (ov = on(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), p.x, p.y, o, o, +(u < 0), d.x, d.y, i, i, +(m > 180), +(u < 0), g.x, g.y, o, o, +(u < 0), v.x, v.y);
  if (n > 0) {
    var {
      circleTangency: b,
      lineTangency: w,
      theta: S
    } = Mo({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), {
      circleTangency: O,
      lineTangency: C,
      theta: E
    } = Mo({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: -u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), D = l ? Math.abs(c - s) : Math.abs(c - s) - S - E;
    if (D < 0 && o === 0)
      return "".concat(x, "L").concat(t, ",").concat(r, "Z");
    x += Fe(av || (av = on(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), C.x, C.y, o, o, +(u < 0), O.x, O.y, n, n, +(D > 180), +(u > 0), b.x, b.y, o, o, +(u < 0), w.x, w.y);
  } else
    x += Fe(lv || (lv = on(["L", ",", "Z"])), t, r);
  return x;
}, Jk = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Nm = (e) => {
  var t = At(e, Jk), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: a,
    forceCornerRadius: l,
    cornerIsExternal: c,
    startAngle: s,
    endAngle: u,
    className: d
  } = t;
  if (o < i || s === u)
    return null;
  var p = _e("recharts-sector", d), h = o - i, g = Jt(a, h, 0, !0), v;
  return g > 0 && Math.abs(s - u) < 360 ? v = Zk({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(g, h / 2),
    forceCornerRadius: l,
    cornerIsExternal: c,
    startAngle: s,
    endAngle: u
  }) : v = Dm({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    startAngle: s,
    endAngle: u
  }), /* @__PURE__ */ P.createElement("path", Uc({}, bt(t), {
    className: p,
    d: v
  }));
};
function Qk(e, t, r) {
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
  if (f0(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: o,
        outerRadius: a,
        angle: l
      } = t, c = st(n, i, o, l), s = st(n, i, a, l);
      return [{
        x: c.x,
        y: c.y
      }, {
        x: s.x,
        y: s.y
      }];
    }
    return Mm(t);
  }
}
var Us = {}, Ys = {}, Gs = {}, sv;
function e_() {
  return sv || (sv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ O0();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Gs)), Gs;
}
var cv;
function t_() {
  return cv || (cv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ e_();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(Ys)), Ys;
}
var uv;
function r_() {
  return uv || (uv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ P0(), r = /* @__PURE__ */ t_();
    function n(i, o, a) {
      a && typeof a != "number" && t.isIterateeCall(i, o, a) && (o = a = void 0), i = r.toFinite(i), o === void 0 ? (o = i, i = 0) : o = r.toFinite(o), a = a === void 0 ? i < o ? 1 : -1 : r.toFinite(a);
      const l = Math.max(Math.ceil((o - i) / (a || 1)), 0), c = new Array(l);
      for (let s = 0; s < l; s++)
        c[s] = i, i += a;
      return c;
    }
    e.range = n;
  })(Us)), Us;
}
var Xs, dv;
function n_() {
  return dv || (dv = 1, Xs = r_().range), Xs;
}
var i_ = /* @__PURE__ */ n_();
const Rm = /* @__PURE__ */ Sn(i_);
var rr = (e) => e.chartData, Bu = M([rr], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), hl = (e, t, r, n) => n ? Bu(e) : rr(e), $m = (e, t, r) => r ? Bu(e) : rr(e), o_ = M([hl], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
M([Bu], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
var a_ = M([rr], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
function sr(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (he(t) && he(r))
      return !0;
  }
  return !1;
}
function fv(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function zm(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, o;
    if (he(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (he(n))
      o = n;
    else if (typeof n == "function")
      return;
    var a = [i, o];
    if (sr(a))
      return a;
  }
}
function l_(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (sr(n))
          return fv(n, t, r);
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
      else if (typeof i == "string" && rh.test(i)) {
        var c = rh.exec(i);
        if (c == null || c[1] == null || t == null)
          a = void 0;
        else {
          var s = +c[1];
          a = t[0] - s;
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
      else if (typeof o == "string" && nh.test(o)) {
        var u = nh.exec(o);
        if (u == null || u[1] == null || t == null)
          l = void 0;
        else {
          var d = +u[1];
          l = t[1] + d;
        }
      } else
        l = t?.[1];
      var p = [a, l];
      if (sr(p))
        return t == null ? p : fv(p, t, r);
    }
  }
}
var ti = 1e9, s_ = {
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
}, Fu, Re = !0, Ht = "[DecimalError] ", dn = Ht + "Invalid argument: ", Wu = Ht + "Exponent out of range: ", ri = Math.floor, rn = Math.pow, c_ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mt, Qe = 1e7, Ne = 7, Lm = 9007199254740991, xa = ri(Lm / Ne), ie = {};
ie.absoluteValue = ie.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ie.comparedTo = ie.cmp = function(e) {
  var t, r, n, i, o = this;
  if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
  if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
  for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
};
ie.decimalPlaces = ie.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Ne;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ie.dividedBy = ie.div = function(e) {
  return jr(this, new this.constructor(e));
};
ie.dividedToIntegerBy = ie.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ae(jr(t, new r(e), 0, 1), r.precision);
};
ie.equals = ie.eq = function(e) {
  return !this.cmp(e);
};
ie.exponent = function() {
  return qe(this);
};
ie.greaterThan = ie.gt = function(e) {
  return this.cmp(e) > 0;
};
ie.greaterThanOrEqualTo = ie.gte = function(e) {
  return this.cmp(e) >= 0;
};
ie.isInteger = ie.isint = function() {
  return this.e > this.d.length - 2;
};
ie.isNegative = ie.isneg = function() {
  return this.s < 0;
};
ie.isPositive = ie.ispos = function() {
  return this.s > 0;
};
ie.isZero = function() {
  return this.s === 0;
};
ie.lessThan = ie.lt = function(e) {
  return this.cmp(e) < 0;
};
ie.lessThanOrEqualTo = ie.lte = function(e) {
  return this.cmp(e) < 1;
};
ie.logarithm = ie.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Mt)) throw Error(Ht + "NaN");
  if (r.s < 1) throw Error(Ht + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Mt) ? new n(0) : (Re = !1, t = jr(Bi(r, o), Bi(e, o), o), Re = !0, Ae(t, i));
};
ie.minus = ie.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Fm(t, e) : Bm(t, (e.s = -e.s, e));
};
ie.modulo = ie.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Ht + "NaN");
  return r.s ? (Re = !1, t = jr(r, e, 0, 1).times(e), Re = !0, r.minus(t)) : Ae(new n(r), i);
};
ie.naturalExponential = ie.exp = function() {
  return Wm(this);
};
ie.naturalLogarithm = ie.ln = function() {
  return Bi(this);
};
ie.negated = ie.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ie.plus = ie.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Bm(t, e) : Fm(t, (e.s = -e.s, e));
};
ie.precision = ie.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(dn + e);
  if (t = qe(i) + 1, n = i.d.length - 1, r = n * Ne + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ie.squareRoot = ie.sqrt = function() {
  var e, t, r, n, i, o, a, l = this, c = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new c(0);
    throw Error(Ht + "NaN");
  }
  for (e = qe(l), Re = !1, i = Math.sqrt(+l), i == 0 || i == 1 / 0 ? (t = lr(l.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ri((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = a = r + 3; ; )
    if (o = n, n = o.plus(jr(l, o, a + 2)).times(0.5), lr(o.d).slice(0, a) === (t = lr(n.d)).slice(0, a)) {
      if (t = t.slice(a - 3, a + 1), i == a && t == "4999") {
        if (Ae(o, r + 1, 0), o.times(o).eq(l)) {
          n = o;
          break;
        }
      } else if (t != "9999")
        break;
      a += 4;
    }
  return Re = !0, Ae(n, r);
};
ie.times = ie.mul = function(e) {
  var t, r, n, i, o, a, l, c, s, u = this, d = u.constructor, p = u.d, h = (e = new d(e)).d;
  if (!u.s || !e.s) return new d(0);
  for (e.s *= u.s, r = u.e + e.e, c = p.length, s = h.length, c < s && (o = p, p = h, h = o, a = c, c = s, s = a), o = [], a = c + s, n = a; n--; ) o.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      l = o[i] + h[n] * p[i - n - 1] + t, o[i--] = l % Qe | 0, t = l / Qe | 0;
    o[i] = (o[i] + t) % Qe | 0;
  }
  for (; !o[--a]; ) o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = r, Re ? Ae(e, d.precision) : e;
};
ie.toDecimalPlaces = ie.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fr(e, 0, ti), t === void 0 ? t = n.rounding : fr(t, 0, 8), Ae(r, e + qe(r) + 1, t));
};
ie.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = xn(n, !0) : (fr(e, 0, ti), t === void 0 ? t = i.rounding : fr(t, 0, 8), n = Ae(new i(n), e + 1, t), r = xn(n, !0, e + 1)), r;
};
ie.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? xn(i) : (fr(e, 0, ti), t === void 0 ? t = o.rounding : fr(t, 0, 8), n = Ae(new o(i), e + qe(i) + 1, t), r = xn(n.abs(), !1, e + qe(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
ie.toInteger = ie.toint = function() {
  var e = this, t = e.constructor;
  return Ae(new t(e), qe(e) + 1, t.rounding);
};
ie.toNumber = function() {
  return +this;
};
ie.toPower = ie.pow = function(e) {
  var t, r, n, i, o, a, l = this, c = l.constructor, s = 12, u = +(e = new c(e));
  if (!e.s) return new c(Mt);
  if (l = new c(l), !l.s) {
    if (e.s < 1) throw Error(Ht + "Infinity");
    return l;
  }
  if (l.eq(Mt)) return l;
  if (n = c.precision, e.eq(Mt)) return Ae(l, n);
  if (t = e.e, r = e.d.length - 1, a = t >= r, o = l.s, a) {
    if ((r = u < 0 ? -u : u) <= Lm) {
      for (i = new c(Mt), t = Math.ceil(n / Ne + 4), Re = !1; r % 2 && (i = i.times(l), hv(i.d, t)), r = ri(r / 2), r !== 0; )
        l = l.times(l), hv(l.d, t);
      return Re = !0, e.s < 0 ? new c(Mt).div(i) : Ae(i, n);
    }
  } else if (o < 0) throw Error(Ht + "NaN");
  return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, Re = !1, i = e.times(Bi(l, n + s)), Re = !0, i = Wm(i), i.s = o, i;
};
ie.toPrecision = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? (r = qe(i), n = xn(i, r <= o.toExpNeg || r >= o.toExpPos)) : (fr(e, 1, ti), t === void 0 ? t = o.rounding : fr(t, 0, 8), i = Ae(new o(i), e, t), r = qe(i), n = xn(i, e <= r || r <= o.toExpNeg, e)), n;
};
ie.toSignificantDigits = ie.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fr(e, 1, ti), t === void 0 ? t = n.rounding : fr(t, 0, 8)), Ae(new n(r), e, t);
};
ie.toString = ie.valueOf = ie.val = ie.toJSON = ie[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = qe(e), r = e.constructor;
  return xn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Bm(e, t) {
  var r, n, i, o, a, l, c, s, u = e.constructor, d = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), Re ? Ae(t, d) : t;
  if (c = e.d, s = t.d, a = e.e, i = t.e, c = c.slice(), o = a - i, o) {
    for (o < 0 ? (n = c, o = -o, l = s.length) : (n = s, i = a, l = c.length), a = Math.ceil(d / Ne), l = a > l ? a + 1 : l + 1, o > l && (o = l, n.length = 1), n.reverse(); o--; ) n.push(0);
    n.reverse();
  }
  for (l = c.length, o = s.length, l - o < 0 && (o = l, n = s, s = c, c = n), r = 0; o; )
    r = (c[--o] = c[o] + s[o] + r) / Qe | 0, c[o] %= Qe;
  for (r && (c.unshift(r), ++i), l = c.length; c[--l] == 0; ) c.pop();
  return t.d = c, t.e = i, Re ? Ae(t, d) : t;
}
function fr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(dn + e);
}
function lr(e) {
  var t, r, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, t = 1; t < i; t++)
      n = e[t] + "", r = Ne - n.length, r && (o += Lr(r)), o += n;
    a = e[t], n = a + "", r = Ne - n.length, r && (o += Lr(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return o + a;
}
var jr = /* @__PURE__ */ (function() {
  function e(n, i) {
    var o, a = 0, l = n.length;
    for (n = n.slice(); l--; )
      o = n[l] * i + a, n[l] = o % Qe | 0, a = o / Qe | 0;
    return a && n.unshift(a), n;
  }
  function t(n, i, o, a) {
    var l, c;
    if (o != a)
      c = o > a ? 1 : -1;
    else
      for (l = c = 0; l < o; l++)
        if (n[l] != i[l]) {
          c = n[l] > i[l] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, o) {
    for (var a = 0; o--; )
      n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * Qe + n[o] - i[o];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, o, a) {
    var l, c, s, u, d, p, h, g, v, y, m, x, b, w, S, O, C, E, D = n.constructor, I = n.s == i.s ? 1 : -1, $ = n.d, k = i.d;
    if (!n.s) return new D(n);
    if (!i.s) throw Error(Ht + "Division by zero");
    for (c = n.e - i.e, C = k.length, S = $.length, h = new D(I), g = h.d = [], s = 0; k[s] == ($[s] || 0); ) ++s;
    if (k[s] > ($[s] || 0) && --c, o == null ? x = o = D.precision : a ? x = o + (qe(n) - qe(i)) + 1 : x = o, x < 0) return new D(0);
    if (x = x / Ne + 2 | 0, s = 0, C == 1)
      for (u = 0, k = k[0], x++; (s < S || u) && x--; s++)
        b = u * Qe + ($[s] || 0), g[s] = b / k | 0, u = b % k | 0;
    else {
      for (u = Qe / (k[0] + 1) | 0, u > 1 && (k = e(k, u), $ = e($, u), C = k.length, S = $.length), w = C, v = $.slice(0, C), y = v.length; y < C; ) v[y++] = 0;
      E = k.slice(), E.unshift(0), O = k[0], k[1] >= Qe / 2 && ++O;
      do
        u = 0, l = t(k, v, C, y), l < 0 ? (m = v[0], C != y && (m = m * Qe + (v[1] || 0)), u = m / O | 0, u > 1 ? (u >= Qe && (u = Qe - 1), d = e(k, u), p = d.length, y = v.length, l = t(d, v, p, y), l == 1 && (u--, r(d, C < p ? E : k, p))) : (u == 0 && (l = u = 1), d = k.slice()), p = d.length, p < y && d.unshift(0), r(v, d, y), l == -1 && (y = v.length, l = t(k, v, C, y), l < 1 && (u++, r(v, C < y ? E : k, y))), y = v.length) : l === 0 && (u++, v = [0]), g[s++] = u, l && v[0] ? v[y++] = $[w] || 0 : (v = [$[w]], y = 1);
      while ((w++ < S || v[0] !== void 0) && x--);
    }
    return g[0] || g.shift(), h.e = c, Ae(h, a ? o + qe(h) + 1 : o);
  };
})();
function Wm(e, t) {
  var r, n, i, o, a, l, c = 0, s = 0, u = e.constructor, d = u.precision;
  if (qe(e) > 16) throw Error(Wu + qe(e));
  if (!e.s) return new u(Mt);
  for (Re = !1, l = d, a = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(a), s += 5;
  for (n = Math.log(rn(2, s)) / Math.LN10 * 2 + 5 | 0, l += n, r = i = o = new u(Mt), u.precision = l; ; ) {
    if (i = Ae(i.times(e), l), r = r.times(++c), a = o.plus(jr(i, r, l)), lr(a.d).slice(0, l) === lr(o.d).slice(0, l)) {
      for (; s--; ) o = Ae(o.times(o), l);
      return u.precision = d, t == null ? (Re = !0, Ae(o, d)) : o;
    }
    o = a;
  }
}
function qe(e) {
  for (var t = e.e * Ne, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Zs(e, t, r) {
  if (t > e.LN10.sd())
    throw Re = !0, r && (e.precision = r), Error(Ht + "LN10 precision limit exceeded");
  return Ae(new e(e.LN10), t);
}
function Lr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Bi(e, t) {
  var r, n, i, o, a, l, c, s, u, d = 1, p = 10, h = e, g = h.d, v = h.constructor, y = v.precision;
  if (h.s < 1) throw Error(Ht + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Mt)) return new v(0);
  if (t == null ? (Re = !1, s = y) : s = t, h.eq(10))
    return t == null && (Re = !0), Zs(v, s);
  if (s += p, v.precision = s, r = lr(g), n = r.charAt(0), o = qe(h), Math.abs(o) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = lr(h.d), n = r.charAt(0), d++;
    o = qe(h), n > 1 ? (h = new v("0." + r), o++) : h = new v(n + "." + r.slice(1));
  } else
    return c = Zs(v, s + 2, y).times(o + ""), h = Bi(new v(n + "." + r.slice(1)), s - p).plus(c), v.precision = y, t == null ? (Re = !0, Ae(h, y)) : h;
  for (l = a = h = jr(h.minus(Mt), h.plus(Mt), s), u = Ae(h.times(h), s), i = 3; ; ) {
    if (a = Ae(a.times(u), s), c = l.plus(jr(a, new v(i), s)), lr(c.d).slice(0, s) === lr(l.d).slice(0, s))
      return l = l.times(2), o !== 0 && (l = l.plus(Zs(v, s + 2, y).times(o + ""))), l = jr(l, new v(d), s), v.precision = y, t == null ? (Re = !0, Ae(l, y)) : l;
    l = c, i += 2;
  }
}
function pv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = ri(r / Ne), e.d = [], n = (r + 1) % Ne, r < 0 && (n += Ne), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= Ne; n < i; ) e.d.push(+t.slice(n, n += Ne));
      t = t.slice(n), n = Ne - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Re && (e.e > xa || e.e < -xa)) throw Error(Wu + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ae(e, t, r) {
  var n, i, o, a, l, c, s, u, d = e.d;
  for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
  if (n = t - a, n < 0)
    n += Ne, i = t, s = d[u = 0];
  else {
    if (u = Math.ceil((n + 1) / Ne), o = d.length, u >= o) return e;
    for (s = o = d[u], a = 1; o >= 10; o /= 10) a++;
    n %= Ne, i = n - Ne + a;
  }
  if (r !== void 0 && (o = rn(10, a - i - 1), l = s / o % 10 | 0, c = t < 0 || d[u + 1] !== void 0 || s % o, c = r < 4 ? (l || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? s / rn(10, a - i) : 0 : d[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !d[0])
    return c ? (o = qe(e), d.length = 1, t = t - o - 1, d[0] = rn(10, (Ne - t % Ne) % Ne), e.e = ri(-t / Ne) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
  if (n == 0 ? (d.length = u, o = 1, u--) : (d.length = u + 1, o = rn(10, Ne - n), d[u] = i > 0 ? (s / rn(10, a - i) % rn(10, i) | 0) * o : 0), c)
    for (; ; )
      if (u == 0) {
        (d[0] += o) == Qe && (d[0] = 1, ++e.e);
        break;
      } else {
        if (d[u] += o, d[u] != Qe) break;
        d[u--] = 0, o = 1;
      }
  for (n = d.length; d[--n] === 0; ) d.pop();
  if (Re && (e.e > xa || e.e < -xa))
    throw Error(Wu + qe(e));
  return e;
}
function Fm(e, t) {
  var r, n, i, o, a, l, c, s, u, d, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), Re ? Ae(t, h) : t;
  if (c = e.d, d = t.d, n = t.e, s = e.e, c = c.slice(), a = s - n, a) {
    for (u = a < 0, u ? (r = c, a = -a, l = d.length) : (r = d, n = s, l = c.length), i = Math.max(Math.ceil(h / Ne), l) + 2, a > i && (a = i, r.length = 1), r.reverse(), i = a; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, l = d.length, u = i < l, u && (l = i), i = 0; i < l; i++)
      if (c[i] != d[i]) {
        u = c[i] < d[i];
        break;
      }
    a = 0;
  }
  for (u && (r = c, c = d, d = r, t.s = -t.s), l = c.length, i = d.length - l; i > 0; --i) c[l++] = 0;
  for (i = d.length; i > a; ) {
    if (c[--i] < d[i]) {
      for (o = i; o && c[--o] === 0; ) c[o] = Qe - 1;
      --c[o], c[i] += Qe;
    }
    c[i] -= d[i];
  }
  for (; c[--l] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Re ? Ae(t, h) : t) : new p(0);
}
function xn(e, t, r) {
  var n, i = qe(e), o = lr(e.d), a = o.length;
  return t ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Lr(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Lr(-i - 1) + o, r && (n = r - a) > 0 && (o += Lr(n))) : i >= a ? (o += Lr(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + Lr(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += Lr(n))), e.s < 0 ? "-" + o : o;
}
function hv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Vm(e) {
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
        throw Error(dn + o);
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
      return pv(a, o.toString());
    } else if (typeof o != "string")
      throw Error(dn + o);
    if (o.charCodeAt(0) === 45 ? (o = o.slice(1), a.s = -1) : a.s = 1, c_.test(o)) pv(a, o);
    else throw Error(dn + o);
  }
  if (i.prototype = ie, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Vm, i.config = i.set = u_, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function u_(e) {
  if (!e || typeof e != "object")
    throw Error(Ht + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    ti,
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
      if (ri(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(dn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(dn + r + ": " + n);
  return this;
}
var Fu = Vm(s_);
Mt = new Fu(1);
const ye = Fu;
function Km(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ye(e).abs().log(10).toNumber()) + 1, t;
}
function Hm(e, t, r) {
  for (var n = new ye(e), i = 0, o = []; n.lt(t) && i < 1e5; )
    o.push(n.toNumber()), n = n.add(r), i++;
  return o;
}
var qm = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Vu = (e, t, r) => {
  if (e.lte(0))
    return new ye(0);
  var n = Km(e.toNumber()), i = new ye(10).pow(n), o = e.div(i), a = n !== 1 ? 0.05 : 0.1, l = new ye(Math.ceil(o.div(a).toNumber())).add(r).mul(a), c = l.mul(i);
  return t ? new ye(c.toNumber()) : new ye(Math.ceil(c.toNumber()));
}, Um = (e, t, r) => {
  var n;
  if (e.lte(0))
    return new ye(0);
  var i = [1, 2, 2.5, 5], o = e.toNumber(), a = Math.floor(new ye(o).abs().log(10).toNumber()), l = new ye(10).pow(a), c = e.div(l).toNumber(), s = i.findIndex((h) => h >= c - 1e-10);
  if (s === -1 && (l = l.mul(10), s = 0), s += r, s >= i.length) {
    var u = Math.floor(s / i.length);
    s %= i.length, l = l.mul(new ye(10).pow(u));
  }
  var d = (n = i[s]) !== null && n !== void 0 ? n : 1, p = new ye(d).mul(l);
  return t ? p : new ye(Math.ceil(p.toNumber()));
}, d_ = (e, t, r) => {
  var n = new ye(1), i = new ye(e);
  if (!i.isint() && r) {
    var o = Math.abs(e);
    o < 1 ? (n = new ye(10).pow(Km(e) - 1), i = new ye(Math.floor(i.div(n).toNumber())).mul(n)) : o > 1 && (i = new ye(Math.floor(e)));
  } else e === 0 ? i = new ye(Math.floor((t - 1) / 2)) : r || (i = new ye(Math.floor(e)));
  for (var a = Math.floor((t - 1) / 2), l = [], c = 0; c < t; c++)
    l.push(i.add(new ye(c - a).mul(n)).toNumber());
  return l;
}, Ym = function(t, r, n, i) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Vu;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ye(0),
      tickMin: new ye(0),
      tickMax: new ye(0)
    };
  var l = a(new ye(r).sub(t).div(n - 1), i, o), c;
  t <= 0 && r >= 0 ? c = new ye(0) : (c = new ye(t).add(r).div(2), c = c.sub(new ye(c).mod(l)));
  var s = Math.ceil(c.sub(t).div(l).toNumber()), u = Math.ceil(new ye(r).sub(c).div(l).toNumber()), d = s + u + 1;
  return d > n ? Ym(t, r, n, i, o + 1, a) : (d < n && (u = r > 0 ? u + (n - d) : u, s = r > 0 ? s : s + (n - d)), {
    step: l,
    tickMin: c.sub(new ye(s).mul(l)),
    tickMax: c.add(new ye(u).mul(l))
  });
}, vv = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", l = Math.max(i, 2), [c, s] = qm([r, n]);
  if (c === -1 / 0 || s === 1 / 0) {
    var u = s === 1 / 0 ? [c, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), s];
    return r > n ? u.reverse() : u;
  }
  if (c === s)
    return d_(c, i, o);
  var d = a === "snap125" ? Um : Vu, {
    step: p,
    tickMin: h,
    tickMax: g
  } = Ym(c, s, l, o, 0, d), v = Hm(h, g.add(new ye(0.1).mul(p)), p);
  return r > n ? v.reverse() : v;
}, gv = function(t, r) {
  var [n, i] = t, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [l, c] = qm([n, i]);
  if (l === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (l === c)
    return [l];
  var s = a === "snap125" ? Um : Vu, u = Math.max(r, 2), d = s(new ye(c).sub(l).div(u - 1), o, 0), p = [...Hm(new ye(l), new ye(c), d), c];
  return o === !1 && (p = p.map((h) => Math.round(h))), n > i ? p.reverse() : p;
}, Gm = (e) => e.rootProps.maxBarSize, f_ = (e) => e.rootProps.barGap, Xm = (e) => e.rootProps.barCategoryGap, p_ = (e) => e.rootProps.barSize, vl = (e) => e.rootProps.stackOffset, Zm = (e) => e.rootProps.reverseStackOrder, Ku = (e) => e.options.chartName, Hu = (e) => e.rootProps.syncId, Jm = (e) => e.rootProps.syncMethod, qu = (e) => e.options.eventEmitter, h_ = (e) => e.rootProps.baseValue, et = {
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
}, Xr = {
  allowDecimals: !1,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: !1,
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "auto"
}, ir = {
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
}, gl = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function yl(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return hr(e, t) ? "category" : "number";
}
function yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yv(Object(r), !0).forEach(function(n) {
      v_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v_(e, t, r) {
  return (t = g_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g_(e) {
  var t = y_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function y_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mv = {
  allowDataOverflow: Xr.allowDataOverflow,
  allowDecimals: Xr.allowDecimals,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: Xr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: Xr.reversed,
  scale: Xr.scale,
  tick: Xr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: Xr.type,
  unit: void 0,
  niceTicks: "auto"
}, xv = {
  allowDataOverflow: ir.allowDataOverflow,
  allowDecimals: ir.allowDecimals,
  allowDuplicatedCategory: ir.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: ir.radiusAxisId,
  includeHidden: ir.includeHidden,
  name: void 0,
  reversed: ir.reversed,
  scale: ir.scale,
  tick: ir.tick,
  tickCount: ir.tickCount,
  ticks: void 0,
  type: ir.type,
  unit: void 0,
  niceTicks: "auto"
}, m_ = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, Uu = M([m_, mm], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = yl(t, "angleAxis", mv.type)) !== null && r !== void 0 ? r : "category";
  return ba(ba({}, mv), {}, {
    type: n
  });
}), x_ = (e, t) => e.polarAxis.radiusAxis[t], Yu = M([x_, mm], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = yl(t, "radiusAxis", xv.type)) !== null && r !== void 0 ? r : "category";
  return ba(ba({}, xv), {}, {
    type: n
  });
}), ml = (e) => e.polarOptions, Gu = M([Er, Ar, rt], Kk), Qm = M([ml, Gu], (e, t) => {
  if (e != null)
    return Jt(e.innerRadius, t, 0);
}), ex = M([ml, Gu], (e, t) => {
  if (e != null)
    return Jt(e.outerRadius, t, t * 0.8);
}), b_ = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, tx = M([ml], b_);
M([Uu, tx], gl);
var rx = M([Gu, Qm, ex], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
M([Yu, rx], gl);
var nx = M([Se, ml, Qm, ex, Er, Ar], (e, t, r, n, i, o) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: a,
      cy: l,
      startAngle: c,
      endAngle: s
    } = t;
    return {
      cx: Jt(a, i, i / 2),
      cy: Jt(l, o, o / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: c,
      endAngle: s,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), nt = (e, t) => t, xl = (e, t, r) => r;
function bl(e) {
  return e?.id;
}
function ix(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: o
  } = r, a = /* @__PURE__ */ new Map();
  return e.forEach((l) => {
    var c, s = (c = l.data) !== null && c !== void 0 ? c : n;
    if (!(s == null || s.length === 0)) {
      var u = bl(l);
      s.forEach((d, p) => {
        var h = o == null || i ? p : String(He(d, o, null)), g = He(d, l.dataKey, 0), v;
        a.has(h) ? v = a.get(h) : v = {}, Object.assign(v, {
          [u]: g
        }), a.set(h, v);
      });
    }
  }), Array.from(a.values());
}
function wl(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var jl = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Sl(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function w_(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var it = (e) => {
  var t = Se(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, ni = (e) => e.tooltip.settings.axisId;
function Xu(e) {
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
            var c = e.bandwidth();
            switch (a.position) {
              case "middle":
                l += c / 2;
                break;
              case "end":
                l += c;
                break;
            }
          }
          return l;
        }
      }
    };
  }
}
var j_ = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!sr(t)) {
          for (var r, n, i = 0; i < t.length; i++) {
            var o = t[i];
            he(o) && ((r === void 0 || o < r) && (r = o), (n === void 0 || o > n) && (n = o));
          }
          return r !== void 0 && n !== void 0 ? [r, n] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function Vr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function S_(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zu(e) {
  let t, r, n;
  e.length !== 2 ? (t = Vr, r = (l, c) => Vr(e(l), c), n = (l, c) => e(l) - c) : (t = e === Vr || e === S_ ? e : O_, r = e, n = e);
  function i(l, c, s = 0, u = l.length) {
    if (s < u) {
      if (t(c, c) !== 0) return u;
      do {
        const d = s + u >>> 1;
        r(l[d], c) < 0 ? s = d + 1 : u = d;
      } while (s < u);
    }
    return s;
  }
  function o(l, c, s = 0, u = l.length) {
    if (s < u) {
      if (t(c, c) !== 0) return u;
      do {
        const d = s + u >>> 1;
        r(l[d], c) <= 0 ? s = d + 1 : u = d;
      } while (s < u);
    }
    return s;
  }
  function a(l, c, s = 0, u = l.length) {
    const d = i(l, c, s, u - 1);
    return d > s && n(l[d - 1], c) > -n(l[d], c) ? d - 1 : d;
  }
  return { left: i, center: a, right: o };
}
function O_() {
  return 0;
}
function ox(e) {
  return e === null ? NaN : +e;
}
function* P_(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const C_ = Zu(Vr), io = C_.right;
Zu(ox).center;
class bv extends Map {
  constructor(t, r = E_) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(wv(this, t));
  }
  has(t) {
    return super.has(wv(this, t));
  }
  set(t, r) {
    return super.set(k_(this, t), r);
  }
  delete(t) {
    return super.delete(__(this, t));
  }
}
function wv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function k_({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function __({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function E_(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function A_(e = Vr) {
  if (e === Vr) return ax;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function ax(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const T_ = Math.sqrt(50), I_ = Math.sqrt(10), M_ = Math.sqrt(2);
function wa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), o = n / Math.pow(10, i), a = o >= T_ ? 10 : o >= I_ ? 5 : o >= M_ ? 2 : 1;
  let l, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, l = Math.round(e * s), c = Math.round(t * s), l / s < e && ++l, c / s > t && --c, s = -s) : (s = Math.pow(10, i) * a, l = Math.round(e / s), c = Math.round(t / s), l * s < e && ++l, c * s > t && --c), c < l && 0.5 <= r && r < 2 ? wa(e, t, r * 2) : [l, c, s];
}
function Yc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, o, a] = n ? wa(t, e, r) : wa(e, t, r);
  if (!(o >= i)) return [];
  const l = o - i + 1, c = new Array(l);
  if (n)
    if (a < 0) for (let s = 0; s < l; ++s) c[s] = (o - s) / -a;
    else for (let s = 0; s < l; ++s) c[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < l; ++s) c[s] = (i + s) / -a;
  else for (let s = 0; s < l; ++s) c[s] = (i + s) * a;
  return c;
}
function Gc(e, t, r) {
  return t = +t, e = +e, r = +r, wa(e, t, r)[2];
}
function Xc(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Gc(t, e, r) : Gc(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function jv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Sv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function lx(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? ax : A_(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, u = Math.log(c), d = 0.5 * Math.exp(2 * u / 3), p = 0.5 * Math.sqrt(u * d * (c - d) / c) * (s - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * d / c + p)), g = Math.min(n, Math.floor(t + (c - s) * d / c + p));
      lx(e, t, h, g, i);
    }
    const o = e[t];
    let a = r, l = n;
    for (mi(e, r, t), i(e[n], o) > 0 && mi(e, r, n); a < l; ) {
      for (mi(e, a, l), ++a, --l; i(e[a], o) < 0; ) ++a;
      for (; i(e[l], o) > 0; ) --l;
    }
    i(e[r], o) === 0 ? mi(e, r, l) : (++l, mi(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
  return e;
}
function mi(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function D_(e, t, r) {
  if (e = Float64Array.from(P_(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Sv(e);
    if (t >= 1) return jv(e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = jv(lx(e, o).subarray(0, o + 1)), l = Sv(e.subarray(o + 1));
    return a + (l - a) * (i - o);
  }
}
function N_(e, t, r = ox) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = +r(e[o], o, e), l = +r(e[o + 1], o + 1, e);
    return a + (l - a) * (i - o);
  }
}
function R_(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(i); ++n < i; )
    o[n] = e + n * r;
  return o;
}
function Ut(e, t) {
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
function Tr(e, t) {
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
const Zc = Symbol("implicit");
function Ju() {
  var e = new bv(), t = [], r = [], n = Zc;
  function i(o) {
    let a = e.get(o);
    if (a === void 0) {
      if (n !== Zc) return n;
      e.set(o, a = t.push(o) - 1);
    }
    return r[a % r.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new bv();
    for (const a of o)
      e.has(a) || e.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (r = Array.from(o), i) : r.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return Ju(t, r).unknown(n);
  }, Ut.apply(i, arguments), i;
}
function Qu() {
  var e = Ju().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, o, a, l = !1, c = 0, s = 0, u = 0.5;
  delete e.unknown;
  function d() {
    var p = t().length, h = i < n, g = h ? i : n, v = h ? n : i;
    o = (v - g) / Math.max(1, p - c + s * 2), l && (o = Math.floor(o)), g += (v - g - o * (p - c)) * u, a = o * (1 - c), l && (g = Math.round(g), a = Math.round(a));
    var y = R_(p).map(function(m) {
      return g + o * m;
    });
    return r(h ? y.reverse() : y);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), d()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([n, i] = p, n = +n, i = +i, d()) : [n, i];
  }, e.rangeRound = function(p) {
    return [n, i] = p, n = +n, i = +i, l = !0, d();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return o;
  }, e.round = function(p) {
    return arguments.length ? (l = !!p, d()) : l;
  }, e.padding = function(p) {
    return arguments.length ? (c = Math.min(1, s = +p), d()) : c;
  }, e.paddingInner = function(p) {
    return arguments.length ? (c = Math.min(1, p), d()) : c;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (s = +p, d()) : s;
  }, e.align = function(p) {
    return arguments.length ? (u = Math.max(0, Math.min(1, p)), d()) : u;
  }, e.copy = function() {
    return Qu(t(), [n, i]).round(l).paddingInner(c).paddingOuter(s).align(u);
  }, Ut.apply(d(), arguments);
}
function sx(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return sx(t());
  }, e;
}
function $_() {
  return sx(Qu.apply(null, arguments).paddingInner(1));
}
function ed(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function cx(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function oo() {
}
var Wi = 0.7, ja = 1 / Wi, Vn = "\\s*([+-]?\\d+)\\s*", Fi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", z_ = /^#([0-9a-f]{3,8})$/, L_ = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), B_ = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), W_ = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Fi}\\)$`), F_ = new RegExp(`^rgba\\(${cr},${cr},${cr},${Fi}\\)$`), V_ = new RegExp(`^hsl\\(${Fi},${cr},${cr}\\)$`), K_ = new RegExp(`^hsla\\(${Fi},${cr},${cr},${Fi}\\)$`), Ov = {
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
ed(oo, Vi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pv,
  // Deprecated! Use color.formatHex.
  formatHex: Pv,
  formatHex8: H_,
  formatHsl: q_,
  formatRgb: Cv,
  toString: Cv
});
function Pv() {
  return this.rgb().formatHex();
}
function H_() {
  return this.rgb().formatHex8();
}
function q_() {
  return ux(this).formatHsl();
}
function Cv() {
  return this.rgb().formatRgb();
}
function Vi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = z_.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? kv(t) : r === 3 ? new kt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Do(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Do(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = L_.exec(e)) ? new kt(t[1], t[2], t[3], 1) : (t = B_.exec(e)) ? new kt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = W_.exec(e)) ? Do(t[1], t[2], t[3], t[4]) : (t = F_.exec(e)) ? Do(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = V_.exec(e)) ? Av(t[1], t[2] / 100, t[3] / 100, 1) : (t = K_.exec(e)) ? Av(t[1], t[2] / 100, t[3] / 100, t[4]) : Ov.hasOwnProperty(e) ? kv(Ov[e]) : e === "transparent" ? new kt(NaN, NaN, NaN, 0) : null;
}
function kv(e) {
  return new kt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Do(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new kt(e, t, r, n);
}
function U_(e) {
  return e instanceof oo || (e = Vi(e)), e ? (e = e.rgb(), new kt(e.r, e.g, e.b, e.opacity)) : new kt();
}
function Jc(e, t, r, n) {
  return arguments.length === 1 ? U_(e) : new kt(e, t, r, n ?? 1);
}
function kt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
ed(kt, Jc, cx(oo, {
  brighter(e) {
    return e = e == null ? ja : Math.pow(ja, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wi : Math.pow(Wi, e), new kt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new kt(fn(this.r), fn(this.g), fn(this.b), Sa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _v,
  // Deprecated! Use color.formatHex.
  formatHex: _v,
  formatHex8: Y_,
  formatRgb: Ev,
  toString: Ev
}));
function _v() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}`;
}
function Y_() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}${an((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ev() {
  const e = Sa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fn(this.r)}, ${fn(this.g)}, ${fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Sa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function an(e) {
  return e = fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Av(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, r, n);
}
function ux(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof oo || (e = Vi(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), a = NaN, l = o - i, c = (o + i) / 2;
  return l ? (t === o ? a = (r - n) / l + (r < n) * 6 : r === o ? a = (n - t) / l + 2 : a = (t - r) / l + 4, l /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : l = c > 0 && c < 1 ? 0 : a, new Xt(a, l, c, e.opacity);
}
function G_(e, t, r, n) {
  return arguments.length === 1 ? ux(e) : new Xt(e, t, r, n ?? 1);
}
function Xt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
ed(Xt, G_, cx(oo, {
  brighter(e) {
    return e = e == null ? ja : Math.pow(ja, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Wi : Math.pow(Wi, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new kt(
      Js(e >= 240 ? e - 240 : e + 120, i, n),
      Js(e, i, n),
      Js(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Xt(Tv(this.h), No(this.s), No(this.l), Sa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Sa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Tv(this.h)}, ${No(this.s) * 100}%, ${No(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Tv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function No(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Js(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const td = (e) => () => e;
function X_(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Z_(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function J_(e) {
  return (e = +e) == 1 ? dx : function(t, r) {
    return r - t ? Z_(t, r, e) : td(isNaN(t) ? r : t);
  };
}
function dx(e, t) {
  var r = t - e;
  return r ? X_(e, r) : td(isNaN(e) ? t : e);
}
const Iv = (function e(t) {
  var r = J_(t);
  function n(i, o) {
    var a = r((i = Jc(i)).r, (o = Jc(o)).r), l = r(i.g, o.g), c = r(i.b, o.b), s = dx(i.opacity, o.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = c(u), i.opacity = s(u), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function Q_(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(o) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - o) + t[i] * o;
    return n;
  };
}
function eE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function tE(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), o = new Array(r), a;
  for (a = 0; a < n; ++a) i[a] = ii(e[a], t[a]);
  for (; a < r; ++a) o[a] = t[a];
  return function(l) {
    for (a = 0; a < n; ++a) o[a] = i[a](l);
    return o;
  };
}
function rE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Oa(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function nE(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = ii(e[i], t[i]) : n[i] = t[i];
  return function(o) {
    for (i in r) n[i] = r[i](o);
    return n;
  };
}
var Qc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qs = new RegExp(Qc.source, "g");
function iE(e) {
  return function() {
    return e;
  };
}
function oE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function aE(e, t) {
  var r = Qc.lastIndex = Qs.lastIndex = 0, n, i, o, a = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (n = Qc.exec(e)) && (i = Qs.exec(t)); )
    (o = i.index) > r && (o = t.slice(r, o), l[a] ? l[a] += o : l[++a] = o), (n = n[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, c.push({ i: a, x: Oa(n, i) })), r = Qs.lastIndex;
  return r < t.length && (o = t.slice(r), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? c[0] ? oE(c[0].x) : iE(t) : (t = c.length, function(s) {
    for (var u = 0, d; u < t; ++u) l[(d = c[u]).i] = d.x(s);
    return l.join("");
  });
}
function ii(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? td(t) : (r === "number" ? Oa : r === "string" ? (n = Vi(t)) ? (t = n, Iv) : aE : t instanceof Vi ? Iv : t instanceof Date ? rE : eE(t) ? Q_ : Array.isArray(t) ? tE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? nE : Oa)(e, t);
}
function rd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function lE(e, t) {
  t === void 0 && (t = e, e = ii);
  for (var r = 0, n = t.length - 1, i = t[0], o = new Array(n < 0 ? 0 : n); r < n; ) o[r] = e(i, i = t[++r]);
  return function(a) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return o[l](a - l);
  };
}
function sE(e) {
  return function() {
    return e;
  };
}
function Pa(e) {
  return +e;
}
var Mv = [0, 1];
function xt(e) {
  return e;
}
function eu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : sE(isNaN(t) ? NaN : 0.5);
}
function cE(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function uE(e, t, r) {
  var n = e[0], i = e[1], o = t[0], a = t[1];
  return i < n ? (n = eu(i, n), o = r(a, o)) : (n = eu(n, i), o = r(o, a)), function(l) {
    return o(n(l));
  };
}
function dE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), o = new Array(n), a = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < n; )
    i[a] = eu(e[a], e[a + 1]), o[a] = r(t[a], t[a + 1]);
  return function(l) {
    var c = io(e, l, 1, n) - 1;
    return o[c](i[c](l));
  };
}
function ao(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ol() {
  var e = Mv, t = Mv, r = ii, n, i, o, a = xt, l, c, s;
  function u() {
    var p = Math.min(e.length, t.length);
    return a !== xt && (a = cE(e[0], e[p - 1])), l = p > 2 ? dE : uE, c = s = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? o : (c || (c = l(e.map(n), t, r)))(n(a(p)));
  }
  return d.invert = function(p) {
    return a(i((s || (s = l(t, e.map(n), Oa)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Pa), u()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), r = rd, u();
  }, d.clamp = function(p) {
    return arguments.length ? (a = p ? !0 : xt, u()) : a !== xt;
  }, d.interpolate = function(p) {
    return arguments.length ? (r = p, u()) : r;
  }, d.unknown = function(p) {
    return arguments.length ? (o = p, d) : o;
  }, function(p, h) {
    return n = p, i = h, u();
  };
}
function nd() {
  return Ol()(xt, xt);
}
function fE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ca(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Gn(e) {
  return e = Ca(Math.abs(e)), e ? e[1] : NaN;
}
function pE(e, t) {
  return function(r, n) {
    for (var i = r.length, o = [], a = 0, l = e[0], c = 0; i > 0 && l > 0 && (c + l + 1 > n && (l = Math.max(1, n - c)), o.push(r.substring(i -= l, i + l)), !((c += l + 1) > n)); )
      l = e[a = (a + 1) % e.length];
    return o.reverse().join(t);
  };
}
function hE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var vE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ki(e) {
  if (!(t = vE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new id({
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
Ki.prototype = id.prototype;
function id(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
id.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function gE(e) {
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
var ka;
function yE(e, t) {
  var r = Ca(e, t);
  if (!r) return ka = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], o = i - (ka = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = n.length;
  return o === a ? n : o > a ? n + new Array(o - a + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + Ca(e, Math.max(0, t + o - 1))[0];
}
function Dv(e, t) {
  var r = Ca(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Nv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: fE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Dv(e * 100, t),
  r: Dv,
  s: yE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Rv(e) {
  return e;
}
var $v = Array.prototype.map, zv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function mE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Rv : pE($v.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Rv : hE($v.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(d, p) {
    d = Ki(d);
    var h = d.fill, g = d.align, v = d.sign, y = d.symbol, m = d.zero, x = d.width, b = d.comma, w = d.precision, S = d.trim, O = d.type;
    O === "n" ? (b = !0, O = "g") : Nv[O] || (w === void 0 && (w = 12), S = !0, O = "g"), (m || h === "0" && g === "=") && (m = !0, h = "0", g = "=");
    var C = (p && p.prefix !== void 0 ? p.prefix : "") + (y === "$" ? r : y === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : ""), E = (y === "$" ? n : /[%p]/.test(O) ? a : "") + (p && p.suffix !== void 0 ? p.suffix : ""), D = Nv[O], I = /[defgprs%]/.test(O);
    w = w === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function $(k) {
      var V = C, R = E, q, Z, Q;
      if (O === "c")
        R = D(k) + R, k = "";
      else {
        k = +k;
        var N = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? c : D(Math.abs(k), w), S && (k = gE(k)), N && +k == 0 && v !== "+" && (N = !1), V = (N ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + V, R = (O === "s" && !isNaN(k) && ka !== void 0 ? zv[8 + ka / 3] : "") + R + (N && v === "(" ? ")" : ""), I) {
          for (q = -1, Z = k.length; ++q < Z; )
            if (Q = k.charCodeAt(q), 48 > Q || Q > 57) {
              R = (Q === 46 ? i + k.slice(q + 1) : k.slice(q)) + R, k = k.slice(0, q);
              break;
            }
        }
      }
      b && !m && (k = t(k, 1 / 0));
      var re = V.length + k.length + R.length, te = re < x ? new Array(x - re + 1).join(h) : "";
      switch (b && m && (k = t(te + k, te.length ? x - R.length : 1 / 0), te = ""), g) {
        case "<":
          k = V + k + R + te;
          break;
        case "=":
          k = V + te + k + R;
          break;
        case "^":
          k = te.slice(0, re = te.length >> 1) + V + k + R + te.slice(re);
          break;
        default:
          k = te + V + k + R;
          break;
      }
      return o(k);
    }
    return $.toString = function() {
      return d + "";
    }, $;
  }
  function u(d, p) {
    var h = Math.max(-8, Math.min(8, Math.floor(Gn(p) / 3))) * 3, g = Math.pow(10, -h), v = s((d = Ki(d), d.type = "f", d), { suffix: zv[8 + h / 3] });
    return function(y) {
      return v(g * y);
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var Ro, od, fx;
xE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function xE(e) {
  return Ro = mE(e), od = Ro.format, fx = Ro.formatPrefix, Ro;
}
function bE(e) {
  return Math.max(0, -Gn(Math.abs(e)));
}
function wE(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Gn(t) / 3))) * 3 - Gn(Math.abs(e)));
}
function jE(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Gn(t) - Gn(e)) + 1;
}
function px(e, t, r, n) {
  var i = Xc(e, t, r), o;
  switch (n = Ki(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(o = wE(i, a)) && (n.precision = o), fx(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(o = jE(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = o - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(o = bE(i)) && (n.precision = o - (n.type === "%") * 2);
      break;
    }
  }
  return od(n);
}
function Yr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Yc(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return px(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, o = n.length - 1, a = n[i], l = n[o], c, s, u = 10;
    for (l < a && (s = a, a = l, l = s, s = i, i = o, o = s); u-- > 0; ) {
      if (s = Gc(a, l, r), s === c)
        return n[i] = a, n[o] = l, t(n);
      if (s > 0)
        a = Math.floor(a / s) * s, l = Math.ceil(l / s) * s;
      else if (s < 0)
        a = Math.ceil(a * s) / s, l = Math.floor(l * s) / s;
      else
        break;
      c = s;
    }
    return e;
  }, e;
}
function hx() {
  var e = nd();
  return e.copy = function() {
    return ao(e, hx());
  }, Ut.apply(e, arguments), Yr(e);
}
function vx(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Pa), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return vx(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Pa) : [0, 1], Yr(r);
}
function gx(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], o = e[n], a;
  return o < i && (a = r, r = n, n = a, a = i, i = o, o = a), e[r] = t.floor(i), e[n] = t.ceil(o), e;
}
function Lv(e) {
  return Math.log(e);
}
function Bv(e) {
  return Math.exp(e);
}
function SE(e) {
  return -Math.log(-e);
}
function OE(e) {
  return -Math.exp(-e);
}
function PE(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function CE(e) {
  return e === 10 ? PE : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function kE(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Wv(e) {
  return (t, r) => -e(-t, r);
}
function ad(e) {
  const t = e(Lv, Bv), r = t.domain;
  let n = 10, i, o;
  function a() {
    return i = kE(n), o = CE(n), r()[0] < 0 ? (i = Wv(i), o = Wv(o), e(SE, OE)) : e(Lv, Bv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, a()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), a()) : r();
  }, t.ticks = (l) => {
    const c = r();
    let s = c[0], u = c[c.length - 1];
    const d = u < s;
    d && ([s, u] = [u, s]);
    let p = i(s), h = i(u), g, v;
    const y = l == null ? 10 : +l;
    let m = [];
    if (!(n % 1) && h - p < y) {
      if (p = Math.floor(p), h = Math.ceil(h), s > 0) {
        for (; p <= h; ++p)
          for (g = 1; g < n; ++g)
            if (v = p < 0 ? g / o(-p) : g * o(p), !(v < s)) {
              if (v > u) break;
              m.push(v);
            }
      } else for (; p <= h; ++p)
        for (g = n - 1; g >= 1; --g)
          if (v = p > 0 ? g / o(-p) : g * o(p), !(v < s)) {
            if (v > u) break;
            m.push(v);
          }
      m.length * 2 < y && (m = Yc(s, u, y));
    } else
      m = Yc(p, h, Math.min(h - p, y)).map(o);
    return d ? m.reverse() : m;
  }, t.tickFormat = (l, c) => {
    if (l == null && (l = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = Ki(c)).precision == null && (c.trim = !0), c = od(c)), l === 1 / 0) return c;
    const s = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let d = u / o(Math.round(i(u)));
      return d * n < n - 0.5 && (d *= n), d <= s ? c(u) : "";
    };
  }, t.nice = () => r(gx(r(), {
    floor: (l) => o(Math.floor(i(l))),
    ceil: (l) => o(Math.ceil(i(l)))
  })), t;
}
function yx() {
  const e = ad(Ol()).domain([1, 10]);
  return e.copy = () => ao(e, yx()).base(e.base()), Ut.apply(e, arguments), e;
}
function Fv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Vv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ld(e) {
  var t = 1, r = e(Fv(t), Vv(t));
  return r.constant = function(n) {
    return arguments.length ? e(Fv(t = +n), Vv(t)) : t;
  }, Yr(r);
}
function mx() {
  var e = ld(Ol());
  return e.copy = function() {
    return ao(e, mx()).constant(e.constant());
  }, Ut.apply(e, arguments);
}
function Kv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function _E(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function EE(e) {
  return e < 0 ? -e * e : e * e;
}
function sd(e) {
  var t = e(xt, xt), r = 1;
  function n() {
    return r === 1 ? e(xt, xt) : r === 0.5 ? e(_E, EE) : e(Kv(r), Kv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yr(t);
}
function cd() {
  var e = sd(Ol());
  return e.copy = function() {
    return ao(e, cd()).exponent(e.exponent());
  }, Ut.apply(e, arguments), e;
}
function AE() {
  return cd.apply(null, arguments).exponent(0.5);
}
function Hv(e) {
  return Math.sign(e) * e * e;
}
function TE(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function xx() {
  var e = nd(), t = [0, 1], r = !1, n;
  function i(o) {
    var a = TE(e(o));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return i.invert = function(o) {
    return e.invert(Hv(o));
  }, i.domain = function(o) {
    return arguments.length ? (e.domain(o), i) : e.domain();
  }, i.range = function(o) {
    return arguments.length ? (e.range((t = Array.from(o, Pa)).map(Hv)), i) : t.slice();
  }, i.rangeRound = function(o) {
    return i.range(o).round(!0);
  }, i.round = function(o) {
    return arguments.length ? (r = !!o, i) : r;
  }, i.clamp = function(o) {
    return arguments.length ? (e.clamp(o), i) : e.clamp();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return xx(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Ut.apply(i, arguments), Yr(i);
}
function bx() {
  var e = [], t = [], r = [], n;
  function i() {
    var a = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++a < l; ) r[a - 1] = N_(e, a / l);
    return o;
  }
  function o(a) {
    return a == null || isNaN(a = +a) ? n : t[io(r, a)];
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
    return e.sort(Vr), i();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.quantiles = function() {
    return r.slice();
  }, o.copy = function() {
    return bx().domain(e).range(t).unknown(n);
  }, Ut.apply(o, arguments);
}
function wx() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], o;
  function a(c) {
    return c != null && c <= c ? i[io(n, c, 0, r)] : o;
  }
  function l() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return a;
  }
  return a.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, l()) : [e, t];
  }, a.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, l()) : i.slice();
  }, a.invertExtent = function(c) {
    var s = i.indexOf(c);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, a.unknown = function(c) {
    return arguments.length && (o = c), a;
  }, a.thresholds = function() {
    return n.slice();
  }, a.copy = function() {
    return wx().domain([e, t]).range(i).unknown(o);
  }, Ut.apply(Yr(a), arguments);
}
function jx() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(o) {
    return o != null && o <= o ? t[io(e, o, 0, n)] : r;
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
    return jx().domain(e).range(t).unknown(r);
  }, Ut.apply(i, arguments);
}
const ec = /* @__PURE__ */ new Date(), tc = /* @__PURE__ */ new Date();
function Ze(e, t, r, n) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), i.round = (o) => {
    const a = i(o), l = i.ceil(o);
    return o - a < l - o ? a : l;
  }, i.offset = (o, a) => (t(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, l) => {
    const c = [];
    if (o = i.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < a) || !(l > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (s < o && o < a);
    return c;
  }, i.filter = (o) => Ze((a) => {
    if (a >= a) for (; e(a), !o(a); ) a.setTime(a - 1);
  }, (a, l) => {
    if (a >= a)
      if (l < 0) for (; ++l <= 0; )
        for (; t(a, -1), !o(a); )
          ;
      else for (; --l >= 0; )
        for (; t(a, 1), !o(a); )
          ;
  }), r && (i.count = (o, a) => (ec.setTime(+o), tc.setTime(+a), e(ec), e(tc), Math.floor(r(ec, tc))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(n ? (a) => n(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const _a = Ze(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
_a.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ze((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : _a);
_a.range;
const br = 1e3, Vt = br * 60, wr = Vt * 60, Cr = wr * 24, ud = Cr * 7, qv = Cr * 30, rc = Cr * 365, ln = Ze((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * br);
}, (e, t) => (t - e) / br, (e) => e.getUTCSeconds());
ln.range;
const dd = Ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * br);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getMinutes());
dd.range;
const fd = Ze((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getUTCMinutes());
fd.range;
const pd = Ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * br - e.getMinutes() * Vt);
}, (e, t) => {
  e.setTime(+e + t * wr);
}, (e, t) => (t - e) / wr, (e) => e.getHours());
pd.range;
const hd = Ze((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * wr);
}, (e, t) => (t - e) / wr, (e) => e.getUTCHours());
hd.range;
const lo = Ze(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Vt) / Cr,
  (e) => e.getDate() - 1
);
lo.range;
const Pl = Ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Cr, (e) => e.getUTCDate() - 1);
Pl.range;
const Sx = Ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Cr, (e) => Math.floor(e / Cr));
Sx.range;
function Cn(e) {
  return Ze((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Vt) / ud);
}
const Cl = Cn(0), Ea = Cn(1), IE = Cn(2), ME = Cn(3), Xn = Cn(4), DE = Cn(5), NE = Cn(6);
Cl.range;
Ea.range;
IE.range;
ME.range;
Xn.range;
DE.range;
NE.range;
function kn(e) {
  return Ze((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ud);
}
const kl = kn(0), Aa = kn(1), RE = kn(2), $E = kn(3), Zn = kn(4), zE = kn(5), LE = kn(6);
kl.range;
Aa.range;
RE.range;
$E.range;
Zn.range;
zE.range;
LE.range;
const vd = Ze((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
vd.range;
const gd = Ze((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
gd.range;
const kr = Ze((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
kr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ze((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
kr.range;
const _r = Ze((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
_r.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ze((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
_r.range;
function Ox(e, t, r, n, i, o) {
  const a = [
    [ln, 1, br],
    [ln, 5, 5 * br],
    [ln, 15, 15 * br],
    [ln, 30, 30 * br],
    [o, 1, Vt],
    [o, 5, 5 * Vt],
    [o, 15, 15 * Vt],
    [o, 30, 30 * Vt],
    [i, 1, wr],
    [i, 3, 3 * wr],
    [i, 6, 6 * wr],
    [i, 12, 12 * wr],
    [n, 1, Cr],
    [n, 2, 2 * Cr],
    [r, 1, ud],
    [t, 1, qv],
    [t, 3, 3 * qv],
    [e, 1, rc]
  ];
  function l(s, u, d) {
    const p = u < s;
    p && ([s, u] = [u, s]);
    const h = d && typeof d.range == "function" ? d : c(s, u, d), g = h ? h.range(s, +u + 1) : [];
    return p ? g.reverse() : g;
  }
  function c(s, u, d) {
    const p = Math.abs(u - s) / d, h = Zu(([, , y]) => y).right(a, p);
    if (h === a.length) return e.every(Xc(s / rc, u / rc, d));
    if (h === 0) return _a.every(Math.max(Xc(s, u, d), 1));
    const [g, v] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return g.every(v);
  }
  return [l, c];
}
const [BE, WE] = Ox(_r, gd, kl, Sx, hd, fd), [FE, VE] = Ox(kr, vd, Cl, lo, pd, dd);
function nc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ic(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xi(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function KE(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, o = e.days, a = e.shortDays, l = e.months, c = e.shortMonths, s = bi(i), u = wi(i), d = bi(o), p = wi(o), h = bi(a), g = wi(a), v = bi(l), y = wi(l), m = bi(c), x = wi(c), b = {
    a: Q,
    A: N,
    b: re,
    B: te,
    c: null,
    d: Jv,
    e: Jv,
    f: pA,
    g: SA,
    G: PA,
    H: uA,
    I: dA,
    j: fA,
    L: Px,
    m: hA,
    M: vA,
    p: z,
    q: B,
    Q: tg,
    s: rg,
    S: gA,
    u: yA,
    U: mA,
    V: xA,
    w: bA,
    W: wA,
    x: null,
    X: null,
    y: jA,
    Y: OA,
    Z: CA,
    "%": eg
  }, w = {
    a: L,
    A: K,
    b: le,
    B: me,
    c: null,
    d: Qv,
    e: Qv,
    f: AA,
    g: BA,
    G: FA,
    H: kA,
    I: _A,
    j: EA,
    L: kx,
    m: TA,
    M: IA,
    p: de,
    q: ue,
    Q: tg,
    s: rg,
    S: MA,
    u: DA,
    U: NA,
    V: RA,
    w: $A,
    W: zA,
    x: null,
    X: null,
    y: LA,
    Y: WA,
    Z: VA,
    "%": eg
  }, S = {
    a: I,
    A: $,
    b: k,
    B: V,
    c: R,
    d: Xv,
    e: Xv,
    f: aA,
    g: Gv,
    G: Yv,
    H: Zv,
    I: Zv,
    j: rA,
    L: oA,
    m: tA,
    M: nA,
    p: D,
    q: eA,
    Q: sA,
    s: cA,
    S: iA,
    u: GE,
    U: XE,
    V: ZE,
    w: YE,
    W: JE,
    x: q,
    X: Z,
    y: Gv,
    Y: Yv,
    Z: QE,
    "%": lA
  };
  b.x = O(r, b), b.X = O(n, b), b.c = O(t, b), w.x = O(r, w), w.X = O(n, w), w.c = O(t, w);
  function O(X, G) {
    return function(ae) {
      var F = [], Me = -1, xe = 0, T = X.length, U, H, pe;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++Me < T; )
        X.charCodeAt(Me) === 37 && (F.push(X.slice(xe, Me)), (H = Uv[U = X.charAt(++Me)]) != null ? U = X.charAt(++Me) : H = U === "e" ? " " : "0", (pe = G[U]) && (U = pe(ae, H)), F.push(U), xe = Me + 1);
      return F.push(X.slice(xe, Me)), F.join("");
    };
  }
  function C(X, G) {
    return function(ae) {
      var F = xi(1900, void 0, 1), Me = E(F, X, ae += "", 0), xe, T;
      if (Me != ae.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (G && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1), "Z" in F ? (xe = ic(xi(F.y, 0, 1)), T = xe.getUTCDay(), xe = T > 4 || T === 0 ? Aa.ceil(xe) : Aa(xe), xe = Pl.offset(xe, (F.V - 1) * 7), F.y = xe.getUTCFullYear(), F.m = xe.getUTCMonth(), F.d = xe.getUTCDate() + (F.w + 6) % 7) : (xe = nc(xi(F.y, 0, 1)), T = xe.getDay(), xe = T > 4 || T === 0 ? Ea.ceil(xe) : Ea(xe), xe = lo.offset(xe, (F.V - 1) * 7), F.y = xe.getFullYear(), F.m = xe.getMonth(), F.d = xe.getDate() + (F.w + 6) % 7);
      } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), T = "Z" in F ? ic(xi(F.y, 0, 1)).getUTCDay() : nc(xi(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (T + 5) % 7 : F.w + F.U * 7 - (T + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, ic(F)) : nc(F);
    };
  }
  function E(X, G, ae, F) {
    for (var Me = 0, xe = G.length, T = ae.length, U, H; Me < xe; ) {
      if (F >= T) return -1;
      if (U = G.charCodeAt(Me++), U === 37) {
        if (U = G.charAt(Me++), H = S[U in Uv ? G.charAt(Me++) : U], !H || (F = H(X, ae, F)) < 0) return -1;
      } else if (U != ae.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function D(X, G, ae) {
    var F = s.exec(G.slice(ae));
    return F ? (X.p = u.get(F[0].toLowerCase()), ae + F[0].length) : -1;
  }
  function I(X, G, ae) {
    var F = h.exec(G.slice(ae));
    return F ? (X.w = g.get(F[0].toLowerCase()), ae + F[0].length) : -1;
  }
  function $(X, G, ae) {
    var F = d.exec(G.slice(ae));
    return F ? (X.w = p.get(F[0].toLowerCase()), ae + F[0].length) : -1;
  }
  function k(X, G, ae) {
    var F = m.exec(G.slice(ae));
    return F ? (X.m = x.get(F[0].toLowerCase()), ae + F[0].length) : -1;
  }
  function V(X, G, ae) {
    var F = v.exec(G.slice(ae));
    return F ? (X.m = y.get(F[0].toLowerCase()), ae + F[0].length) : -1;
  }
  function R(X, G, ae) {
    return E(X, t, G, ae);
  }
  function q(X, G, ae) {
    return E(X, r, G, ae);
  }
  function Z(X, G, ae) {
    return E(X, n, G, ae);
  }
  function Q(X) {
    return a[X.getDay()];
  }
  function N(X) {
    return o[X.getDay()];
  }
  function re(X) {
    return c[X.getMonth()];
  }
  function te(X) {
    return l[X.getMonth()];
  }
  function z(X) {
    return i[+(X.getHours() >= 12)];
  }
  function B(X) {
    return 1 + ~~(X.getMonth() / 3);
  }
  function L(X) {
    return a[X.getUTCDay()];
  }
  function K(X) {
    return o[X.getUTCDay()];
  }
  function le(X) {
    return c[X.getUTCMonth()];
  }
  function me(X) {
    return l[X.getUTCMonth()];
  }
  function de(X) {
    return i[+(X.getUTCHours() >= 12)];
  }
  function ue(X) {
    return 1 + ~~(X.getUTCMonth() / 3);
  }
  return {
    format: function(X) {
      var G = O(X += "", b);
      return G.toString = function() {
        return X;
      }, G;
    },
    parse: function(X) {
      var G = C(X += "", !1);
      return G.toString = function() {
        return X;
      }, G;
    },
    utcFormat: function(X) {
      var G = O(X += "", w);
      return G.toString = function() {
        return X;
      }, G;
    },
    utcParse: function(X) {
      var G = C(X += "", !0);
      return G.toString = function() {
        return X;
      }, G;
    }
  };
}
var Uv = { "-": "", _: " ", 0: "0" }, ot = /^\s*\d+/, HE = /^%/, qE = /[\\^$*+?|[\]().{}]/g;
function we(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", o = i.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + i : i);
}
function UE(e) {
  return e.replace(qE, "\\$&");
}
function bi(e) {
  return new RegExp("^(?:" + e.map(UE).join("|") + ")", "i");
}
function wi(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function YE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function GE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function XE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function ZE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function JE(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Yv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Gv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function QE(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function eA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function tA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Xv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function rA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Zv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function nA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function iA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function oA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function aA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function lA(e, t, r) {
  var n = HE.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function sA(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function cA(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Jv(e, t) {
  return we(e.getDate(), t, 2);
}
function uA(e, t) {
  return we(e.getHours(), t, 2);
}
function dA(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function fA(e, t) {
  return we(1 + lo.count(kr(e), e), t, 3);
}
function Px(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function pA(e, t) {
  return Px(e, t) + "000";
}
function hA(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function vA(e, t) {
  return we(e.getMinutes(), t, 2);
}
function gA(e, t) {
  return we(e.getSeconds(), t, 2);
}
function yA(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function mA(e, t) {
  return we(Cl.count(kr(e) - 1, e), t, 2);
}
function Cx(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Xn(e) : Xn.ceil(e);
}
function xA(e, t) {
  return e = Cx(e), we(Xn.count(kr(e), e) + (kr(e).getDay() === 4), t, 2);
}
function bA(e) {
  return e.getDay();
}
function wA(e, t) {
  return we(Ea.count(kr(e) - 1, e), t, 2);
}
function jA(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function SA(e, t) {
  return e = Cx(e), we(e.getFullYear() % 100, t, 2);
}
function OA(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function PA(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Xn(e) : Xn.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function CA(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function Qv(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function kA(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function _A(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function EA(e, t) {
  return we(1 + Pl.count(_r(e), e), t, 3);
}
function kx(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function AA(e, t) {
  return kx(e, t) + "000";
}
function TA(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function IA(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function MA(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function DA(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function NA(e, t) {
  return we(kl.count(_r(e) - 1, e), t, 2);
}
function _x(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Zn(e) : Zn.ceil(e);
}
function RA(e, t) {
  return e = _x(e), we(Zn.count(_r(e), e) + (_r(e).getUTCDay() === 4), t, 2);
}
function $A(e) {
  return e.getUTCDay();
}
function zA(e, t) {
  return we(Aa.count(_r(e) - 1, e), t, 2);
}
function LA(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function BA(e, t) {
  return e = _x(e), we(e.getUTCFullYear() % 100, t, 2);
}
function WA(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function FA(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Zn(e) : Zn.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function VA() {
  return "+0000";
}
function eg() {
  return "%";
}
function tg(e) {
  return +e;
}
function rg(e) {
  return Math.floor(+e / 1e3);
}
var Dn, Ex, Ax;
KA({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function KA(e) {
  return Dn = KE(e), Ex = Dn.format, Dn.parse, Ax = Dn.utcFormat, Dn.utcParse, Dn;
}
function HA(e) {
  return new Date(e);
}
function qA(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function yd(e, t, r, n, i, o, a, l, c, s) {
  var u = nd(), d = u.invert, p = u.domain, h = s(".%L"), g = s(":%S"), v = s("%I:%M"), y = s("%I %p"), m = s("%a %d"), x = s("%b %d"), b = s("%B"), w = s("%Y");
  function S(O) {
    return (c(O) < O ? h : l(O) < O ? g : a(O) < O ? v : o(O) < O ? y : n(O) < O ? i(O) < O ? m : x : r(O) < O ? b : w)(O);
  }
  return u.invert = function(O) {
    return new Date(d(O));
  }, u.domain = function(O) {
    return arguments.length ? p(Array.from(O, qA)) : p().map(HA);
  }, u.ticks = function(O) {
    var C = p();
    return e(C[0], C[C.length - 1], O ?? 10);
  }, u.tickFormat = function(O, C) {
    return C == null ? S : s(C);
  }, u.nice = function(O) {
    var C = p();
    return (!O || typeof O.range != "function") && (O = t(C[0], C[C.length - 1], O ?? 10)), O ? p(gx(C, O)) : u;
  }, u.copy = function() {
    return ao(u, yd(e, t, r, n, i, o, a, l, c, s));
  }, u;
}
function UA() {
  return Ut.apply(yd(FE, VE, kr, vd, Cl, lo, pd, dd, ln, Ex).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function YA() {
  return Ut.apply(yd(BE, WE, _r, gd, kl, Pl, hd, fd, ln, Ax).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function _l() {
  var e = 0, t = 1, r, n, i, o, a = xt, l = !1, c;
  function s(d) {
    return d == null || isNaN(d = +d) ? c : a(i === 0 ? 0.5 : (d = (o(d) - r) * i, l ? Math.max(0, Math.min(1, d)) : d));
  }
  s.domain = function(d) {
    return arguments.length ? ([e, t] = d, r = o(e = +e), n = o(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(d) {
    return arguments.length ? (l = !!d, s) : l;
  }, s.interpolator = function(d) {
    return arguments.length ? (a = d, s) : a;
  };
  function u(d) {
    return function(p) {
      var h, g;
      return arguments.length ? ([h, g] = p, a = d(h, g), s) : [a(0), a(1)];
    };
  }
  return s.range = u(ii), s.rangeRound = u(rd), s.unknown = function(d) {
    return arguments.length ? (c = d, s) : c;
  }, function(d) {
    return o = d, r = d(e), n = d(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function Gr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Tx() {
  var e = Yr(_l()(xt));
  return e.copy = function() {
    return Gr(e, Tx());
  }, Tr.apply(e, arguments);
}
function Ix() {
  var e = ad(_l()).domain([1, 10]);
  return e.copy = function() {
    return Gr(e, Ix()).base(e.base());
  }, Tr.apply(e, arguments);
}
function Mx() {
  var e = ld(_l());
  return e.copy = function() {
    return Gr(e, Mx()).constant(e.constant());
  }, Tr.apply(e, arguments);
}
function md() {
  var e = sd(_l());
  return e.copy = function() {
    return Gr(e, md()).exponent(e.exponent());
  }, Tr.apply(e, arguments);
}
function GA() {
  return md.apply(null, arguments).exponent(0.5);
}
function Dx() {
  var e = [], t = xt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((io(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Vr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, o) => D_(e, o / n));
  }, r.copy = function() {
    return Dx(t).domain(e);
  }, Tr.apply(r, arguments);
}
function El() {
  var e = 0, t = 0.5, r = 1, n = 1, i, o, a, l, c, s = xt, u, d = !1, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +u(v)) - o) * (n * v < n * o ? l : c), s(d ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = u(e = +e), o = u(t = +t), a = u(r = +r), l = i === o ? 0 : 0.5 / (o - i), c = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (d = !!v, h) : d;
  }, h.interpolator = function(v) {
    return arguments.length ? (s = v, h) : s;
  };
  function g(v) {
    return function(y) {
      var m, x, b;
      return arguments.length ? ([m, x, b] = y, s = lE(v, [m, x, b]), h) : [s(0), s(0.5), s(1)];
    };
  }
  return h.range = g(ii), h.rangeRound = g(rd), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return u = v, i = v(e), o = v(t), a = v(r), l = i === o ? 0 : 0.5 / (o - i), c = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h;
  };
}
function Nx() {
  var e = Yr(El()(xt));
  return e.copy = function() {
    return Gr(e, Nx());
  }, Tr.apply(e, arguments);
}
function Rx() {
  var e = ad(El()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Gr(e, Rx()).base(e.base());
  }, Tr.apply(e, arguments);
}
function $x() {
  var e = ld(El());
  return e.copy = function() {
    return Gr(e, $x()).constant(e.constant());
  }, Tr.apply(e, arguments);
}
function xd() {
  var e = sd(El());
  return e.copy = function() {
    return Gr(e, xd()).exponent(e.exponent());
  }, Tr.apply(e, arguments);
}
function XA() {
  return xd.apply(null, arguments).exponent(0.5);
}
const zx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Qu,
  scaleDiverging: Nx,
  scaleDivergingLog: Rx,
  scaleDivergingPow: xd,
  scaleDivergingSqrt: XA,
  scaleDivergingSymlog: $x,
  scaleIdentity: vx,
  scaleImplicit: Zc,
  scaleLinear: hx,
  scaleLog: yx,
  scaleOrdinal: Ju,
  scalePoint: $_,
  scalePow: cd,
  scaleQuantile: bx,
  scaleQuantize: wx,
  scaleRadial: xx,
  scaleSequential: Tx,
  scaleSequentialLog: Ix,
  scaleSequentialPow: md,
  scaleSequentialQuantile: Dx,
  scaleSequentialSqrt: GA,
  scaleSequentialSymlog: Mx,
  scaleSqrt: AE,
  scaleSymlog: mx,
  scaleThreshold: jx,
  scaleTime: UA,
  scaleUtc: YA,
  tickFormat: px
}, Symbol.toStringTag, { value: "Module" }));
function ZA(e) {
  var t = zx;
  if (e in t && typeof t[e] == "function")
    return t[e]();
  var r = "scale".concat(Yi(e));
  if (r in t && typeof t[r] == "function")
    return t[r]();
}
function ng(e, t, r) {
  if (typeof e == "function")
    return e.copy().domain(t).range(r);
  if (e != null) {
    var n = ZA(e);
    if (n != null)
      return n.domain(t).range(r), n;
  }
}
function bd(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? ng(e.scale, r, n) : ng(t, r, n);
}
function JA(e) {
  return "scale".concat(Yi(e));
}
function QA(e) {
  return JA(e) in zx;
}
var Lx = (e, t, r) => {
  if (e != null) {
    var {
      scale: n,
      type: i
    } = e;
    if (n === "auto")
      return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string")
      return QA(n) ? n : "point";
  }
};
function e4(e, t) {
  for (var r = 0, n = e.length, i = e[0] < e[e.length - 1]; r < n; ) {
    var o = Math.floor((r + n) / 2);
    (i ? e[o] < t : e[o] > t) ? r = o + 1 : n = o;
  }
  return r;
}
function Bx(e, t) {
  if (e) {
    var r = t ?? e.domain(), n = r.map((o) => {
      var a;
      return (a = e(o)) !== null && a !== void 0 ? a : 0;
    }), i = e.range();
    if (!(r.length === 0 || i.length < 2))
      return (o) => {
        var a, l, c = e4(n, o);
        if (c <= 0)
          return r[0];
        if (c >= r.length)
          return r[r.length - 1];
        var s = (a = n[c - 1]) !== null && a !== void 0 ? a : 0, u = (l = n[c]) !== null && l !== void 0 ? l : 0;
        return Math.abs(o - s) <= Math.abs(o - u) ? r[c - 1] : r[c];
      };
  }
}
function t4(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : Bx(e, void 0);
}
function ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ig(Object(r), !0).forEach(function(n) {
      r4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r4(e, t, r) {
  return (t = n4(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n4(e) {
  var t = i4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function i4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tu = [0, "auto"], Ye = {
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
}, Wx = (e, t) => e.cartesianAxis.xAxis[t], Ir = (e, t) => {
  var r = Wx(e, t);
  return r ?? Ye;
}, Ge = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: tu,
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
  width: Qi
}, Fx = (e, t) => e.cartesianAxis.yAxis[t], Mr = (e, t) => {
  var r = Fx(e, t);
  return r ?? Ge;
}, o4 = {
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
}, wd = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? o4;
}, jt = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Ir(e, r);
    case "yAxis":
      return Mr(e, r);
    case "zAxis":
      return wd(e, r);
    case "angleAxis":
      return Uu(e, r);
    case "radiusAxis":
      return Yu(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, a4 = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Ir(e, r);
    case "yAxis":
      return Mr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, so = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Ir(e, r);
    case "yAxis":
      return Mr(e, r);
    case "angleAxis":
      return Uu(e, r);
    case "radiusAxis":
      return Yu(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Vx = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Kx(e, t) {
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
var Al = (e) => e.graphicalItems.cartesianItems, l4 = M([nt, xl], Kx), Hx = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), oi = M([Al, jt, l4], Hx, {
  memoizeOptions: {
    resultEqualityCheck: Sl
  }
}), qx = M([oi], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(wl)), Ux = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), s4 = M([oi], Ux), Yx = (e) => e.map((t) => t.data).filter(Boolean).flat(1), c4 = M([oi], (e) => e.some((t) => !t.data)), Gx = M([oi], Yx, {
  memoizeOptions: {
    resultEqualityCheck: Sl
  }
}), Xx = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, jd = M([Gx, hl], Xx), u4 = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: He(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: He(i, n)
}))) : e.map((n) => ({
  value: n
})), Zx = (e, t, r, n, i, o) => {
  var {
    chartData: a = [],
    dataStartIndex: l,
    dataEndIndex: c
  } = n, s = u4(e, t, r);
  if (i && t?.dataKey != null && o.length > 0) {
    var u = a.slice(l, c + 1), d = u.map((p) => ({
      value: He(p, t.dataKey)
    })).filter((p) => p.value != null);
    return [...d, ...s];
  }
  return s;
}, co = M([jd, jt, oi, hl, c4, Gx], Zx);
function Kn(e) {
  if (ur(e) || e instanceof Date) {
    var t = Number(e);
    if (he(t))
      return t;
  }
}
function og(e) {
  if (Array.isArray(e)) {
    var t = [Kn(e[0]), Kn(e[1])];
    return sr(t) ? t : void 0;
  }
  var r = Kn(e);
  if (r != null)
    return [r, r];
}
function pr(e) {
  return e.map(Kn).filter(Ct);
}
function d4(e, t) {
  var r = Kn(e), n = Kn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var f4 = M([co], (e) => e?.map((t) => t.value).sort(d4));
function Jx(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function p4(e, t, r) {
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
    var a = He(e, o.dataKey), l, c;
    if (Array.isArray(a) ? [l, c] = a : l = c = a, !(!he(l) || !he(c)))
      return [n - l, n + c];
  }));
}
var Je = (e) => {
  var t = it(e), r = ni(e);
  return so(e, t, r);
}, Jn = M([Je], (e) => e?.dataKey), h4 = M([qx, hl, Je], ix), Qx = (e, t, r, n) => {
  var i = {}, o = t.reduce((a, l) => {
    if (l.stackId == null)
      return a;
    var c = a[l.stackId];
    return c == null && (c = []), c.push(l), a[l.stackId] = c, a;
  }, i);
  return Object.fromEntries(Object.entries(o).map((a) => {
    var [l, c] = a, s = n ? [...c].reverse() : c, u = s.map(bl);
    return [l, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: uP(e, u, r),
      graphicalItems: s
    }];
  }));
}, Ia = M([h4, qx, vl, Zm], Qx), eb = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: o
  } = t;
  if (n == null && r !== "zAxis") {
    var a = hP(e, i, o);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, v4 = M([jt], (e) => e.allowDataOverflow), Sd = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return tu;
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
  return (t = e?.domain) !== null && t !== void 0 ? t : tu;
}, tb = M([jt], Sd), rb = M([tb, v4], zm), g4 = M([Ia, rr, nt, rb], eb, {
  memoizeOptions: {
    resultEqualityCheck: jl
  }
}), Od = (e) => e.errorBars, y4 = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Jx(r, n)), Ma = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var o = i.flat(), a = Math.min(...o), l = Math.max(...o);
    return [a, l];
  }
}, nb = function(t, r, n, i, o) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], l, c;
  if (n.length > 0 && n.forEach((s) => {
    var u, d = s.data != null ? [...s.data] : a, p = (u = i[s.id]) === null || u === void 0 ? void 0 : u.filter((h) => Jx(o, h));
    d.forEach((h) => {
      var g, v = He(h, (g = r.dataKey) !== null && g !== void 0 ? g : s.dataKey), y = p4(h, v, p);
      if (y.length >= 2) {
        var m = Math.min(...y), x = Math.max(...y);
        (l == null || m < l) && (l = m), (c == null || x > c) && (c = x);
      }
      var b = og(v);
      b != null && (l = l == null ? b[0] : Math.min(l, b[0]), c = c == null ? b[1] : Math.max(c, b[1]));
    });
  }), r?.dataKey != null && n.length === 0 && t.forEach((s) => {
    var u = og(He(s, r.dataKey));
    u != null && (l = l == null ? u[0] : Math.min(l, u[0]), c = c == null ? u[1] : Math.max(c, u[1]));
  }), he(l) && he(c))
    return [l, c];
}, m4 = M([jd, jt, s4, Od, nt, o_], nb, {
  memoizeOptions: {
    resultEqualityCheck: jl
  }
});
function x4(e) {
  var {
    value: t
  } = e;
  if (ur(t) || t instanceof Date)
    return t;
}
var b4 = (e, t, r) => {
  var n = e.map(x4).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && s0(n)) ? Rm(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, ib = (e) => e.referenceElements.dots, ai = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), w4 = M([ib, nt, xl], ai), ob = (e) => e.referenceElements.areas, j4 = M([ob, nt, xl], ai), ab = (e) => e.referenceElements.lines, S4 = M([ab, nt, xl], ai), lb = (e, t) => {
  if (e != null) {
    var r = pr(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, O4 = M(w4, nt, lb), sb = (e, t) => {
  if (e != null) {
    var r = pr(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, P4 = M([j4, nt], sb);
function C4(e) {
  var t;
  if (e.x != null)
    return pr([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : pr(r);
}
function k4(e) {
  var t;
  if (e.y != null)
    return pr([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : pr(r);
}
var cb = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? C4(n) : k4(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, _4 = M([S4, nt], cb), E4 = M(O4, _4, P4, (e, t, r) => Ma(e, r, t)), ub = (e, t, r, n, i, o, a, l) => {
  if (r != null)
    return r;
  var c = a === "vertical" && l === "xAxis" || a === "horizontal" && l === "yAxis", s = c ? Ma(n, o, i) : Ma(o, i);
  return l_(t, s, e.allowDataOverflow);
}, A4 = M([jt, tb, rb, g4, m4, E4, Se, nt], ub, {
  memoizeOptions: {
    resultEqualityCheck: jl
  }
}), T4 = [0, 1], db = (e, t, r, n, i, o, a) => {
  if (!((e == null || r == null || r.length === 0) && a === void 0)) {
    var {
      dataKey: l,
      type: c
    } = e, s = hr(t, o);
    if (s && l == null) {
      var u;
      return Rm(0, (u = r?.length) !== null && u !== void 0 ? u : 0);
    }
    return c === "category" ? b4(n, e, s) : i === "expand" && !s ? T4 : a;
  }
}, Pd = M([jt, Se, jd, co, vl, nt, A4], db), li = M([jt, Vx, Ku], Lx), fb = (e, t, r) => {
  var {
    niceTicks: n
  } = t;
  if (n !== "none") {
    var i = Sd(t), o = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && sr(e)) {
      if (o)
        return vv(e, t.tickCount, t.allowDecimals, n);
      if (t.type === "number")
        return gv(e, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (o && sr(e))
        return vv(e, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && sr(e))
        return gv(e, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Cd = M([Pd, so, li], fb), pb = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && sr(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, o, a = t[0], l = (i = r[0]) !== null && i !== void 0 ? i : 0, c = t[1], s = (o = r[r.length - 1]) !== null && o !== void 0 ? o : 0;
    return [Math.min(a, l), Math.max(c, s)];
  }
  return t;
}, I4 = M([jt, Pd, Cd, nt], pb), M4 = M(co, jt, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(pr(e.map((d) => d.value))).sort((d, p) => d - p), i = n[0], o = n[n.length - 1];
    if (i == null || o == null)
      return 1 / 0;
    var a = o - i;
    if (a === 0)
      return 1 / 0;
    for (var l = 0; l < n.length - 1; l++) {
      var c = n[l], s = n[l + 1];
      if (!(c == null || s == null)) {
        var u = s - c;
        r = Math.min(r, u);
      }
    }
    return r / a;
  }
}), hb = M(M4, Se, Xm, rt, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!he(e))
    return 0;
  var o = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * o / 2;
  if (i === "no-gap") {
    var a = Jt(r, e * o), l = e * o / 2;
    return l - a - (l - a) / o * a;
  }
  return 0;
}), D4 = (e, t, r) => {
  var n = Ir(e, t);
  return n == null || typeof n.padding != "string" ? 0 : hb(e, "xAxis", t, r, n.padding);
}, N4 = (e, t, r) => {
  var n = Mr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : hb(e, "yAxis", t, r, n.padding);
}, R4 = M(Ir, D4, (e, t) => {
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
}), $4 = M(Mr, N4, (e, t) => {
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
}), z4 = M([rt, R4, ll, al, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: o
  } = n;
  return i ? [o.left, r.width - o.right] : [e.left + t.left, e.left + e.width - t.right];
}), L4 = M([rt, Se, $4, ll, al, (e, t, r) => r], (e, t, r, n, i, o) => {
  var {
    padding: a
  } = i;
  return o ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), uo = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return z4(e, r, n);
    case "yAxis":
      return L4(e, r, n);
    case "zAxis":
      return (i = wd(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return tx(e);
    case "radiusAxis":
      return rx(e, r);
    default:
      return;
  }
}, vb = M([jt, uo], gl), B4 = M([li, I4], j_), kd = M([jt, li, B4, vb], bd), gb = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: o
    } = r, a = hr(e, n);
    if (a && (i === "number" || o !== "auto"))
      return t.map((l) => l.value);
  }
}, _d = M([Se, co, so, nt], gb), Tl = M([kd], Xu);
M([kd], t4);
M([kd, f4], Bx);
M([oi, Od, nt], y4);
function yb(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Il = (e, t) => t, Ml = (e, t, r) => r, W4 = M(il, Il, Ml, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(yb)), F4 = M(ol, Il, Ml, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(yb)), mb = (e, t) => ({
  width: e.width,
  height: t.height
}), V4 = (e, t) => {
  var r = typeof t.width == "number" ? t.width : Qi;
  return {
    width: r,
    height: e.height
  };
}, xb = M(rt, Ir, mb), K4 = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, H4 = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, q4 = M(Ar, rt, W4, Il, Ml, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var c = mb(t, l);
    a == null && (a = K4(t, n, e));
    var s = n === "top" && !i || n === "bottom" && i;
    o[l.id] = a - Number(s) * c.height, a += (s ? -1 : 1) * c.height;
  }), o;
}), U4 = M(Er, rt, F4, Il, Ml, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var c = V4(t, l);
    a == null && (a = H4(t, n, e));
    var s = n === "left" && !i || n === "right" && i;
    o[l.id] = a - Number(s) * c.width, a += (s ? -1 : 1) * c.width;
  }), o;
}), Y4 = (e, t) => {
  var r = Ir(e, t);
  if (r != null)
    return q4(e, r.orientation, r.mirror);
}, G4 = M([rt, Ir, Y4, (e, t) => t], (e, t, r, n) => {
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
}), X4 = (e, t) => {
  var r = Mr(e, t);
  if (r != null)
    return U4(e, r.orientation, r.mirror);
}, Z4 = M([rt, Mr, X4, (e, t) => t], (e, t, r, n) => {
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
}), bb = M(rt, Mr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : Qi;
  return {
    width: r,
    height: e.height
  };
}), ag = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return xb(e, r).width;
    case "yAxis":
      return bb(e, r).height;
    default:
      return;
  }
}, wb = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: o,
      dataKey: a
    } = r, l = hr(e, n), c = t.map((u) => u.value), s = c.filter((u) => u != null);
    if (a && l && o === "category" && i && s0(s))
      return c;
  }
}, Ed = M([Se, co, jt, nt], wb), lg = M([Se, a4, li, Tl, Ed, _d, uo, Cd, nt], (e, t, r, n, i, o, a, l, c) => {
  if (t != null) {
    var s = hr(e, c);
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
      axisType: c,
      categoricalDomain: o,
      duplicateDomain: i,
      isCategorical: s,
      niceTicks: l,
      range: a,
      realScaleType: r,
      scale: n
    };
  }
}), J4 = (e, t, r, n, i, o, a, l, c) => {
  if (!(t == null || n == null)) {
    var s = hr(e, c), {
      type: u,
      ticks: d,
      tickCount: p
    } = t, h = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), g = u === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    g = c === "angleAxis" && o != null && o.length >= 2 ? Pt(o[0] - o[1]) * 2 * g : g;
    var v = d || i;
    return v ? v.map((y, m) => {
      var x = a ? a.indexOf(y) : y, b = n.map(x);
      return he(b) ? {
        index: m,
        coordinate: b + g,
        value: y,
        offset: g
      } : null;
    }).filter(Ct) : s && l ? l.map((y, m) => {
      var x = n.map(y);
      return he(x) ? {
        coordinate: x + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(Ct) : n.ticks ? n.ticks(p).map((y, m) => {
      var x = n.map(y);
      return he(x) ? {
        coordinate: x + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(Ct) : n.domain().map((y, m) => {
      var x = n.map(y);
      return he(x) ? {
        coordinate: x + g,
        // @ts-expect-error can't use Date as index
        value: a ? a[y] : y,
        index: m,
        offset: g
      } : null;
    }).filter(Ct);
  }
}, jb = M([Se, so, li, Tl, Cd, uo, Ed, _d, nt], J4), Q4 = (e, t, r, n, i, o, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var l = hr(e, a), {
      tickCount: c
    } = t, s = 0;
    return s = a === "angleAxis" && n?.length >= 2 ? Pt(n[0] - n[1]) * 2 * s : s, l && o ? o.map((u, d) => {
      var p = r.map(u);
      return he(p) ? {
        coordinate: p + s,
        value: u,
        index: d,
        offset: s
      } : null;
    }).filter(Ct) : r.ticks ? r.ticks(c).map((u, d) => {
      var p = r.map(u);
      return he(p) ? {
        coordinate: p + s,
        value: u,
        index: d,
        offset: s
      } : null;
    }).filter(Ct) : r.domain().map((u, d) => {
      var p = r.map(u);
      return he(p) ? {
        coordinate: p + s,
        // @ts-expect-error can't use unknown as index
        value: i ? i[u] : u,
        index: d,
        offset: s
      } : null;
    }).filter(Ct);
  }
}, Hr = M([Se, so, Tl, uo, Ed, _d, nt], Q4), qr = M(jt, Tl, (e, t) => {
  if (!(e == null || t == null))
    return Ta(Ta({}, e), {}, {
      scale: t
    });
}), e3 = M([jt, li, Pd, vb], bd), t3 = M([e3], Xu);
M((e, t, r) => wd(e, r), t3, (e, t) => {
  if (!(e == null || t == null))
    return Ta(Ta({}, e), {}, {
      scale: t
    });
});
var r3 = M([Se, il, ol], (e, t, r) => {
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
}), n3 = (e, t, r) => {
  var n;
  return (n = e.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
M([n3], (e) => {
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
var Sb = (e) => e.options.defaultTooltipEventType, Ob = (e) => e.options.validateTooltipEventTypes;
function Pb(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function fo(e, t) {
  var r = Sb(e), n = Ob(e);
  return Pb(t, r, n);
}
function i3(e) {
  return oe((t) => fo(t, e));
}
var Cb = (e, t) => {
  var r, n = Number(t);
  if (!(Zt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, o3 = (e) => e.tooltip.settings, Wr = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, a3 = {
  itemInteraction: {
    click: Wr,
    hover: Wr
  },
  axisInteraction: {
    click: Wr,
    hover: Wr
  },
  keyboardInteraction: Wr,
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
}, kb = ht({
  name: "tooltip",
  initialState: a3,
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
        } = t.payload, i = Ft(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: De()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Ft(e).tooltipItemPayloads.indexOf(t.payload);
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
  addTooltipEntrySettings: l3,
  replaceTooltipEntrySettings: s3,
  removeTooltipEntrySettings: c3,
  setTooltipSettingsState: u3,
  setActiveMouseOverItemIndex: _b,
  mouseLeaveItem: d3,
  mouseLeaveChart: Eb,
  setActiveClickItemIndex: f3,
  setMouseOverAxisIndex: Ab,
  setMouseClickAxisIndex: p3,
  setSyncInteraction: Ci,
  setKeyboardInteraction: Da
} = kb.actions, h3 = kb.reducer;
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
function $o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), !0).forEach(function(n) {
      v3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v3(e, t, r) {
  return (t = g3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g3(e) {
  var t = y3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function y3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m3(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function x3(e) {
  return e.index != null;
}
var Tb = (e, t, r, n) => {
  if (t == null)
    return Wr;
  var i = m3(e, t, r);
  if (i == null)
    return Wr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var o = e.settings.active === !0;
  if (x3(i)) {
    if (o)
      return $o($o({}, i), {}, {
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
  return $o($o({}, Wr), {}, {
    coordinate: i.coordinate
  });
};
function b3(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function w3(e, t) {
  var r = b3(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var o = Math.min(n, i), a = Math.max(n, i);
  return r >= o && r <= a;
}
function j3(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = He(e, t);
  return n == null || !sr(r) ? !0 : w3(n, r);
}
var Ei = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var o = Number(i);
  if (!he(o))
    return i;
  var a = 0, l = 1 / 0;
  t.length > 0 && (l = t.length - 1);
  var c = Math.max(a, Math.min(o, l)), s = t[c];
  return s == null || j3(s, r, n) ? String(c) : null;
}, Ib = (e, t, r, n, i, o, a) => {
  if (o != null) {
    var l = a[0], c = l?.getPosition(o);
    if (c != null)
      return c;
    var s = i?.[Number(o)];
    if (s)
      switch (r) {
        case "horizontal":
          return {
            x: s.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: s.coordinate
          };
      }
  }
}, Mb = (e, t, r, n) => {
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
}, Db = (e) => e.options.tooltipPayloadSearcher, si = (e) => e.tooltip;
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ug(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      S3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
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
function C3(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
}
function k3(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
}
function _3(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
  if (typeof e == "function")
    return (t) => e(t);
}
function dg(e) {
  if (typeof e == "string")
    return e;
}
function E3(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? C3(e.name) : void 0, r = "unit" in e ? k3(e.unit) : void 0, n = "dataKey" in e ? _3(e.dataKey) : void 0, i = "payload" in e ? e.payload : void 0, o = "color" in e ? dg(e.color) : void 0, a = "fill" in e ? dg(e.fill) : void 0;
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
function A3(e, t) {
  return e ?? t;
}
var Nb = (e, t, r, n, i, o, a) => {
  if (!(t == null || o == null)) {
    var {
      chartData: l,
      computedData: c,
      dataStartIndex: s,
      dataEndIndex: u
    } = r, d = [];
    return e.reduce((p, h) => {
      var g, {
        dataDefinedOnItem: v,
        settings: y
      } = h, m = A3(v, l), x = Array.isArray(m) ? am(m, s, u) : m, b = (g = y?.dataKey) !== null && g !== void 0 ? g : n, w = y?.nameKey, S;
      if (n && Array.isArray(x) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(x[0]) && /*
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
      a === "axis" ? S = c0(x, n, i) : S = o(x, t, c, w), Array.isArray(S))
        S.forEach((C) => {
          var E, D, I = E3(C), $ = I?.name, k = I?.dataKey, V = I?.payload, R = ug(ug({}, y), {}, {
            name: $,
            unit: I?.unit,
            // Preserve item-level color/fill from graphical items.
            color: (E = I?.color) !== null && E !== void 0 ? E : y?.color,
            fill: (D = I?.fill) !== null && D !== void 0 ? D : y?.fill
          });
          p.push(ih({
            tooltipEntrySettings: R,
            dataKey: k,
            payload: V,
            value: He(V, k),
            name: $ == null ? void 0 : String($)
          }));
        });
      else {
        var O;
        p.push(ih({
          tooltipEntrySettings: y,
          dataKey: b,
          payload: S,
          // getValueByDataKey does not validate the output type
          value: He(S, b),
          // getValueByDataKey does not validate the output type
          name: (O = He(S, w)) !== null && O !== void 0 ? O : y?.name
        }));
      }
      return p;
    }, d);
  }
}, Ad = M([Je, Vx, Ku], Lx), T3 = M([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), I3 = M([it, ni], Kx), _n = M([T3, Je, I3], Hx, {
  memoizeOptions: {
    resultEqualityCheck: Sl
  }
}), M3 = M([_n], (e) => e.filter(wl)), Rb = M([_n], Yx, {
  memoizeOptions: {
    resultEqualityCheck: Sl
  }
}), D3 = M([_n], (e) => e.some((t) => !t.data)), bn = M([Rb, rr], Xx), N3 = M([M3, rr, Je], ix), Td = M([bn, Je, _n, rr, D3, Rb], Zx), $b = M([Je], Sd), R3 = M([Je], (e) => e.allowDataOverflow), zb = M([$b, R3], zm), $3 = M([_n], (e) => e.filter(wl)), z3 = M([N3, $3, vl, Zm], Qx), L3 = M([z3, rr, it, zb], eb), B3 = M([_n], Ux), W3 = M([bn, Je, B3, Od, it, a_], nb, {
  memoizeOptions: {
    resultEqualityCheck: jl
  }
}), F3 = M([ib, it, ni], ai), V3 = M([F3, it], lb), K3 = M([ob, it, ni], ai), H3 = M([K3, it], sb), q3 = M([ab, it, ni], ai), U3 = M([q3, it], cb), Y3 = M([V3, U3, H3], Ma), G3 = M([Je, $b, zb, L3, W3, Y3, Se, it], ub), Qn = M([Je, Se, bn, Td, vl, it, G3], db), X3 = M([Qn, Je, Ad], fb), Z3 = M([Je, Qn, X3, it], pb), Lb = (e) => {
  var t = it(e), r = ni(e), n = !1;
  return uo(e, t, r, n);
}, Bb = M([Je, Lb], gl), J3 = M([Je, Ad, Z3, Bb], bd), Wb = M([J3], Xu), Q3 = M([Se, Td, Je, it], wb), eT = M([Se, Td, Je, it], gb), tT = (e, t, r, n, i, o, a, l) => {
  if (t) {
    var {
      type: c
    } = t, s = hr(e, l);
    if (n) {
      var u = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, d = c === "category" && n.bandwidth ? n.bandwidth() / u : 0;
      return d = l === "angleAxis" && i != null && i?.length >= 2 ? Pt(i[0] - i[1]) * 2 * d : d, s && a ? a.map((p, h) => {
        var g = n.map(p);
        return he(g) ? {
          coordinate: g + d,
          value: p,
          index: h,
          offset: d
        } : null;
      }).filter(Ct) : n.domain().map((p, h) => {
        var g = n.map(p);
        return he(g) ? {
          coordinate: g + d,
          // @ts-expect-error can't use Date as an index
          value: o ? o[p] : p,
          index: h,
          offset: d
        } : null;
      }).filter(Ct);
    }
  }
}, Dr = M([Se, Je, Ad, Wb, Lb, Q3, eT, it], tT), Id = M([Sb, Ob, o3], (e, t, r) => Pb(r.shared, e, t)), Fb = (e) => e.tooltip.settings.trigger, Md = (e) => e.tooltip.settings.defaultIndex, po = M([si, Id, Fb, Md], Tb), wn = M([po, bn, Jn, Qn], Ei), Vb = M([Dr, wn], Cb), Kb = M([po], (e) => {
  if (e)
    return e.dataKey;
}), rT = M([po], (e) => {
  if (e)
    return e.graphicalItemId;
}), Hb = M([si, Id, Fb, Md], Mb), nT = M([Er, Ar, Se, rt, Dr, Md, Hb], Ib), iT = M([po, nT], (e, t) => e != null && e.coordinate ? e.coordinate : t), oT = M([po], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), aT = M([Hb, wn, rr, Jn, Vb, Db, Id], Nb), lT = M([aT], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
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
function pg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fg(Object(r), !0).forEach(function(n) {
      sT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sT(e, t, r) {
  return (t = cT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cT(e) {
  var t = uT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dT = () => oe(Je), fT = () => {
  var e = dT(), t = oe(Dr), r = oe(Wb);
  return Un(!e || !r ? void 0 : pg(pg({}, e), {}, {
    scale: r
  }), t);
};
function hg(e, t) {
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
    t % 2 ? hg(Object(r), !0).forEach(function(n) {
      pT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pT(e, t, r) {
  return (t = hT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hT(e) {
  var t = vT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gT = (e, t, r, n) => {
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
}, yT = (e, t, r, n) => {
  var i = t.find((s) => s && s.index === r);
  if (i) {
    if (e === "centric") {
      var o = i.coordinate, {
        radius: a
      } = n;
      return Nn(Nn(Nn({}, n), st(n.cx, n.cy, a, o)), {}, {
        angle: o,
        radius: a
      });
    }
    var l = i.coordinate, {
      angle: c
    } = n;
    return Nn(Nn(Nn({}, n), st(n.cx, n.cy, l, c)), {}, {
      angle: c,
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
function mT(e, t) {
  var {
    relativeX: r,
    relativeY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var qb = (e, t, r, n, i) => {
  var o, a = (o = t?.length) !== null && o !== void 0 ? o : 0;
  if (a <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var l = 0; l < a; l++) {
      var c, s, u, d, p, h = l > 0 ? (c = r[l - 1]) === null || c === void 0 ? void 0 : c.coordinate : (s = r[a - 1]) === null || s === void 0 ? void 0 : s.coordinate, g = (u = r[l]) === null || u === void 0 ? void 0 : u.coordinate, v = l >= a - 1 ? (d = r[0]) === null || d === void 0 ? void 0 : d.coordinate : (p = r[l + 1]) === null || p === void 0 ? void 0 : p.coordinate, y = void 0;
      if (!(h == null || g == null || v == null))
        if (Pt(g - h) !== Pt(v - g)) {
          var m = [];
          if (Pt(v - g) === Pt(i[1] - i[0])) {
            y = v;
            var x = g + i[1] - i[0];
            m[0] = Math.min(x, (x + h) / 2), m[1] = Math.max(x, (x + h) / 2);
          } else {
            y = h;
            var b = v + i[1] - i[0];
            m[0] = Math.min(g, (b + g) / 2), m[1] = Math.max(g, (b + g) / 2);
          }
          var w = [Math.min(g, (y + g) / 2), Math.max(g, (y + g) / 2)];
          if (e > w[0] && e <= w[1] || e >= m[0] && e <= m[1]) {
            var S;
            return (S = r[l]) === null || S === void 0 ? void 0 : S.index;
          }
        } else {
          var O = Math.min(h, v), C = Math.max(h, v);
          if (e > (O + g) / 2 && e <= (C + g) / 2) {
            var E;
            return (E = r[l]) === null || E === void 0 ? void 0 : E.index;
          }
        }
    }
  else if (t)
    for (var D = 0; D < a; D++) {
      var I = t[D];
      if (I != null) {
        var $ = t[D + 1], k = t[D - 1];
        if (D === 0 && $ != null && e <= (I.coordinate + $.coordinate) / 2 || D === a - 1 && k != null && e > (I.coordinate + k.coordinate) / 2 || D > 0 && D < a - 1 && k != null && $ != null && e > (I.coordinate + k.coordinate) / 2 && e <= (I.coordinate + $.coordinate) / 2)
          return I.index;
      }
    }
  return -1;
}, Ub = () => oe(Ku), Dd = (e, t) => t, Yb = (e, t, r) => r, Nd = (e, t, r, n) => n, xT = M(Dr, (e) => Ya(e, (t) => t.coordinate)), Rd = M([si, Dd, Yb, Nd], Tb), $d = M([Rd, bn, Jn, Qn], Ei), bT = (e, t, r) => {
  if (t != null) {
    var n = si(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Gb = M([si, Dd, Yb, Nd], Mb), Na = M([Er, Ar, Se, rt, Dr, Nd, Gb], Ib), wT = M([Rd, Na], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), Xb = M([Dr, $d], Cb), jT = M([Gb, $d, rr, Jn, Xb, Db, Dd], Nb), ST = M([Rd, $d], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), OT = (e, t, r, n, i, o, a) => {
  if (!(!e || !r || !n || !i) && mT(e, a)) {
    var l = vP(e, t), c = qb(l, o, i, r, n), s = gT(t, i, c, e);
    return {
      activeIndex: String(c),
      activeCoordinate: s
    };
  }
}, PT = (e, t, r, n, i, o, a) => {
  if (!(!e || !n || !i || !o || !r)) {
    var l = Gk(e, r);
    if (l) {
      var c = gP(l, t), s = qb(c, a, o, n, i), u = yT(t, o, s, l);
      return {
        activeIndex: String(s),
        activeCoordinate: u
      };
    }
  }
}, CT = (e, t, r, n, i, o, a, l) => {
  if (!(!e || !t || !n || !i || !o))
    return t === "horizontal" || t === "vertical" ? OT(e, t, n, i, o, a, l) : PT(e, t, r, n, i, o, a);
}, kT = M((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), _T = M((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(et)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: w_
  }
});
function vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vg(Object(r), !0).forEach(function(n) {
      ET(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ET(e, t, r) {
  return (t = AT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AT(e) {
  var t = TT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IT = {}, MT = {
  zIndexMap: Object.values(et).reduce((e, t) => gg(gg({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), IT)
}, DT = new Set(Object.values(et));
function NT(e) {
  return DT.has(e);
}
var Zb = ht({
  name: "zIndex",
  initialState: MT,
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
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !NT(r) && delete e.zIndexMap[r]);
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
  registerZIndexPortal: RT,
  unregisterZIndexPortal: oc,
  registerZIndexPortalElement: $T,
  unregisterZIndexPortalElement: zT
} = Zb.actions, LT = Zb.reducer;
function Yt(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = YP(), i = n && t !== void 0 && t !== 0, o = vt(), a = ve(void 0), l = ve(/* @__PURE__ */ new Set()), c = Le(), s = oe((d) => kT(d, t, o));
  if (_t(() => {
    if (!i) {
      var d = l.current;
      d.forEach((h) => {
        c(oc({
          zIndex: h
        }));
      }), d.clear(), a.current = void 0;
      return;
    }
    if (l.current.has(t) || (c(RT({
      zIndex: t
    })), l.current.add(t)), s) {
      a.current = s;
      var p = l.current;
      p.forEach((h) => {
        h !== t && (c(oc({
          zIndex: h
        })), p.delete(h));
      });
    }
  }, [c, t, i, s]), _t(() => {
    var d = l.current;
    return () => {
      d.forEach((p) => {
        c(oc({
          zIndex: p
        }));
      }), d.clear();
    };
  }, [c]), !i)
    return r;
  var u = s ?? a.current;
  return u ? /* @__PURE__ */ Ny(r, u) : null;
}
function ru() {
  return ru = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ru.apply(null, arguments);
}
function yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yg(Object(r), !0).forEach(function(n) {
      BT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BT(e, t, r) {
  return (t = WT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WT(e) {
  var t = FT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VT(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ Nt(t) ? /* @__PURE__ */ ei(t, n) : /* @__PURE__ */ My(r, n);
}
function KT(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: o,
    tooltipAxisBandSize: a,
    layout: l,
    cursor: c,
    tooltipEventType: s,
    chartName: u
  } = e, d = r, p = n, h = i;
  if (!c || !d || u !== "ScatterChart" && s !== "axis")
    return null;
  var g, v, y;
  if (u === "ScatterChart")
    g = d, v = ck, y = et.cursorLine;
  else if (u === "BarChart")
    g = uk(l, d, o, a), v = Im, y = et.cursorRectangle;
  else if (l === "radial" && f0(d)) {
    var {
      cx: m,
      cy: x,
      radius: b,
      startAngle: w,
      endAngle: S
    } = Mm(d);
    g = {
      cx: m,
      cy: x,
      startAngle: w,
      endAngle: S,
      innerRadius: b,
      outerRadius: b
    }, v = Nm, y = et.cursorLine;
  } else
    g = {
      points: Qk(l, d, o)
    }, v = _i, y = et.cursorLine;
  var O = typeof c == "object" && "className" in c ? c.className : void 0, C = zo(zo(zo(zo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), g), Ui(c)), {}, {
    payload: p,
    payloadIndex: h,
    className: _e("recharts-tooltip-cursor", O)
  });
  return /* @__PURE__ */ P.createElement(Yt, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : y
  }, /* @__PURE__ */ P.createElement(VT, {
    cursor: c,
    cursorComp: v,
    cursorProps: C
  }));
}
function HT(e) {
  var t = fT(), r = vm(), n = Pn(), i = Ub();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ P.createElement(KT, ru({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var Jb = /* @__PURE__ */ Et(null), qT = () => qt(Jb), ac = { exports: {} }, mg;
function UT() {
  return mg || (mg = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(c, s, u) {
      this.fn = c, this.context = s, this.once = u || !1;
    }
    function o(c, s, u, d, p) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(u, d || c, p), g = r ? r + s : s;
      return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], h] : c._events[g].push(h) : (c._events[g] = h, c._eventsCount++), c;
    }
    function a(c, s) {
      --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
    }
    function l() {
      this._events = new n(), this._eventsCount = 0;
    }
    l.prototype.eventNames = function() {
      var s = [], u, d;
      if (this._eventsCount === 0) return s;
      for (d in u = this._events)
        t.call(u, d) && s.push(r ? d.slice(1) : d);
      return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(u)) : s;
    }, l.prototype.listeners = function(s) {
      var u = r ? r + s : s, d = this._events[u];
      if (!d) return [];
      if (d.fn) return [d.fn];
      for (var p = 0, h = d.length, g = new Array(h); p < h; p++)
        g[p] = d[p].fn;
      return g;
    }, l.prototype.listenerCount = function(s) {
      var u = r ? r + s : s, d = this._events[u];
      return d ? d.fn ? 1 : d.length : 0;
    }, l.prototype.emit = function(s, u, d, p, h, g) {
      var v = r ? r + s : s;
      if (!this._events[v]) return !1;
      var y = this._events[v], m = arguments.length, x, b;
      if (y.fn) {
        switch (y.once && this.removeListener(s, y.fn, void 0, !0), m) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, u), !0;
          case 3:
            return y.fn.call(y.context, u, d), !0;
          case 4:
            return y.fn.call(y.context, u, d, p), !0;
          case 5:
            return y.fn.call(y.context, u, d, p, h), !0;
          case 6:
            return y.fn.call(y.context, u, d, p, h, g), !0;
        }
        for (b = 1, x = new Array(m - 1); b < m; b++)
          x[b - 1] = arguments[b];
        y.fn.apply(y.context, x);
      } else {
        var w = y.length, S;
        for (b = 0; b < w; b++)
          switch (y[b].once && this.removeListener(s, y[b].fn, void 0, !0), m) {
            case 1:
              y[b].fn.call(y[b].context);
              break;
            case 2:
              y[b].fn.call(y[b].context, u);
              break;
            case 3:
              y[b].fn.call(y[b].context, u, d);
              break;
            case 4:
              y[b].fn.call(y[b].context, u, d, p);
              break;
            default:
              if (!x) for (S = 1, x = new Array(m - 1); S < m; S++)
                x[S - 1] = arguments[S];
              y[b].fn.apply(y[b].context, x);
          }
      }
      return !0;
    }, l.prototype.on = function(s, u, d) {
      return o(this, s, u, d, !1);
    }, l.prototype.once = function(s, u, d) {
      return o(this, s, u, d, !0);
    }, l.prototype.removeListener = function(s, u, d, p) {
      var h = r ? r + s : s;
      if (!this._events[h]) return this;
      if (!u)
        return a(this, h), this;
      var g = this._events[h];
      if (g.fn)
        g.fn === u && (!p || g.once) && (!d || g.context === d) && a(this, h);
      else {
        for (var v = 0, y = [], m = g.length; v < m; v++)
          (g[v].fn !== u || p && !g[v].once || d && g[v].context !== d) && y.push(g[v]);
        y.length ? this._events[h] = y.length === 1 ? y[0] : y : a(this, h);
      }
      return this;
    }, l.prototype.removeAllListeners = function(s) {
      var u;
      return s ? (u = r ? r + s : s, this._events[u] && a(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
  })(ac)), ac.exports;
}
var YT = UT();
const GT = /* @__PURE__ */ Sn(YT);
var Hi = new GT(), nu = "recharts.syncEvent.tooltip", xg = "recharts.syncEvent.brush", Qb = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!Zt(r))
      return e[r];
  }
}, XT = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, e1 = ht({
  name: "options",
  initialState: XT,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), ZT = e1.reducer, {
  createEventEmitter: JT
} = e1.actions;
function QT(e) {
  return e.tooltip.syncInteraction;
}
var e6 = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, t1 = ht({
  name: "chartData",
  initialState: e6,
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
  setChartData: bg,
  setDataStartEndIndexes: t6,
  setComputedData: WR
} = t1.actions, r6 = t1.reducer, n6 = ["x", "y"];
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
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wg(Object(r), !0).forEach(function(n) {
      i6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i6(e, t, r) {
  return (t = o6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o6(e) {
  var t = a6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function a6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l6(e, t) {
  if (e == null) return {};
  var r, n, i = s6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function s6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function c6() {
  var e = oe(Hu), t = oe(qu), r = Le(), n = oe(Jm), i = oe(Dr), o = Pn(), a = sl(), l = oe((c) => c.rootProps.className);
  Oe(() => {
    if (e == null)
      return On;
    var c = (s, u, d) => {
      if (t !== d && e === s) {
        if (u.payload.active === !1) {
          r(Ci({
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
            } = h, y = l6(h, n6), {
              x: m,
              y: x,
              width: b,
              height: w
            } = u.payload.sourceViewBox, S = Rn(Rn({}, y), {}, {
              x: a.x + (b ? (g - m) / b : 0) * a.width,
              y: a.y + (w ? (v - x) / w : 0) * a.height
            });
            r(Rn(Rn({}, u), {}, {
              payload: Rn(Rn({}, u.payload), {}, {
                coordinate: S
              })
            }));
          } else
            r(u);
          return;
        }
        if (i != null) {
          var O;
          if (typeof n == "function") {
            var C = {
              activeTooltipIndex: u.payload.index == null ? void 0 : Number(u.payload.index),
              isTooltipActive: u.payload.active,
              activeIndex: u.payload.index == null ? void 0 : Number(u.payload.index),
              activeLabel: u.payload.label,
              activeDataKey: u.payload.dataKey,
              activeCoordinate: u.payload.coordinate
            }, E = n(i, C);
            O = i[E];
          } else n === "value" && (O = i.find((Z) => String(Z.value) === u.payload.label));
          var {
            coordinate: D
          } = u.payload;
          if (D == null || a == null) {
            r(Ci({
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
          if (O == null) {
            r(Ci({
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
            x: I,
            y: $
          } = D, k = Math.min(I, a.x + a.width), V = Math.min($, a.y + a.height), R = {
            x: o === "horizontal" ? O.coordinate : k,
            y: o === "horizontal" ? V : O.coordinate
          }, q = Ci({
            active: u.payload.active,
            coordinate: R,
            dataKey: u.payload.dataKey,
            index: String(O.index),
            label: u.payload.label,
            sourceViewBox: u.payload.sourceViewBox,
            graphicalItemId: u.payload.graphicalItemId
          });
          r(q);
        }
      }
    };
    return Hi.on(nu, c), () => {
      Hi.off(nu, c);
    };
  }, [l, r, t, e, n, i, o, a]);
}
function u6() {
  var e = oe(Hu), t = oe(qu), r = Le();
  Oe(() => {
    if (e == null)
      return On;
    var n = (i, o, a) => {
      t !== a && e === i && r(t6(o));
    };
    return Hi.on(xg, n), () => {
      Hi.off(xg, n);
    };
  }, [r, t, e]);
}
function d6() {
  var e = Le();
  Oe(() => {
    e(JT());
  }, [e]), c6(), u6();
}
function f6(e, t, r, n, i, o) {
  var a = oe((g) => bT(g, e, t)), l = oe(rT), c = oe(qu), s = oe(Hu), u = oe(Jm), d = oe(QT), p = d?.sourceViewBox != null, h = sl();
  Oe(() => {
    if (!p && s != null && c != null) {
      var g = Ci({
        active: o,
        coordinate: r,
        dataKey: a,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: h,
        graphicalItemId: l
      });
      Hi.emit(nu, s, g, c);
    }
  }, [p, r, a, l, i, n, c, s, u, o, h]);
}
function jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jg(Object(r), !0).forEach(function(n) {
      p6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p6(e, t, r) {
  return (t = h6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h6(e) {
  var t = v6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function v6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g6(e) {
  return e.dataKey;
}
function y6(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(zC, t);
}
var Og = [], m6 = {
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
function r1(e) {
  var t, r, n = At(e, m6), {
    active: i,
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    content: c,
    filterNull: s,
    isAnimationActive: u,
    offset: d,
    payloadUniqBy: p,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    wrapperStyle: y,
    cursor: m,
    shared: x,
    trigger: b,
    defaultIndex: w,
    portal: S,
    axisId: O
  } = n, C = Le(), E = typeof w == "number" ? String(w) : w;
  Oe(() => {
    C(u3({
      shared: x,
      trigger: b,
      axisId: O,
      active: i,
      defaultIndex: E
    }));
  }, [C, x, b, O, i, E]);
  var D = sl(), I = km(), $ = i3(x), {
    activeIndex: k,
    isActive: V
  } = (t = oe((ue) => ST(ue, $, b, E))) !== null && t !== void 0 ? t : {}, R = oe((ue) => jT(ue, $, b, E)), q = oe((ue) => Xb(ue, $, b, E)), Z = oe((ue) => wT(ue, $, b, E)), Q = R, N = qT(), re = (r = i ?? V) !== null && r !== void 0 ? r : !1, [te, z] = FS([Q, re]), B = $ === "axis" ? q : void 0;
  f6($, b, Z, B, k, re);
  var L = S ?? N;
  if (L == null || D == null || $ == null)
    return null;
  var K = Q ?? Og;
  re || (K = Og), s && K.length && (K = uS(K.filter((ue) => ue.value != null && (ue.hide !== !0 || n.includeHidden)), p, g6));
  var le = K.length > 0, me = Sg(Sg({}, n), {}, {
    payload: K,
    label: B,
    active: re,
    activeIndex: k,
    coordinate: Z,
    accessibilityLayer: I
  }), de = /* @__PURE__ */ P.createElement(GC, {
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    isAnimationActive: u,
    active: re,
    coordinate: Z,
    hasPayload: le,
    offset: d,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    viewBox: D,
    wrapperStyle: y,
    lastBoundingBox: te,
    innerRef: z,
    hasPortalFromProps: !!S
  }, y6(c, me));
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ Ny(de, L), re && /* @__PURE__ */ P.createElement(HT, {
    cursor: m,
    tooltipEventType: $,
    coordinate: Z,
    payload: K,
    index: k
  }));
}
var zd = (e) => null;
zd.displayName = "Cell";
function x6(e, t, r) {
  return (t = b6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b6(e) {
  var t = w6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function w6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class j6 {
  constructor(t) {
    x6(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
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
function S6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), !0).forEach(function(n) {
      O6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O6(e, t, r) {
  return (t = P6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P6(e) {
  var t = C6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function C6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var k6 = {
  cacheSize: 2e3,
  enableCache: !0
}, n1 = S6({}, k6), Cg = new j6(n1.cacheSize), _6 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, kg = "recharts_measurement_span";
function E6(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", o = t.fontStyle || "", a = t.letterSpacing || "", l = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(o, "|").concat(a, "|").concat(l);
}
var _g = (e, t) => {
  try {
    var r = document.getElementById(kg);
    r || (r = document.createElement("span"), r.setAttribute("id", kg), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, _6, t), r.textContent = "".concat(e);
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
}, Ai = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || no.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!n1.enableCache)
    return _g(t, r);
  var n = E6(t, r), i = Cg.get(n);
  if (i)
    return i;
  var o = _g(t, r);
  return Cg.set(n, o), o;
}, i1;
function A6(e, t, r) {
  return (t = T6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T6(e) {
  var t = I6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Eg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Ag = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, M6 = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, D6 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, N6 = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, R6 = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function $6(e) {
  return R6.includes(e);
}
var Bn = "NaN";
function z6(e, t) {
  return e * N6[t];
}
class lt {
  static parse(t) {
    var r, [, n, i] = (r = D6.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? lt.NaN : new lt(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Zt(t) && (this.unit = ""), r !== "" && !M6.test(r) && (this.num = NaN, this.unit = ""), $6(r) && (this.num = z6(t, r), this.unit = "px");
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
i1 = lt;
A6(lt, "NaN", new i1(NaN, ""));
function o1(e) {
  if (e == null || e.includes(Bn))
    return Bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, o] = (r = Eg.exec(t)) !== null && r !== void 0 ? r : [], a = lt.parse(n ?? ""), l = lt.parse(o ?? ""), c = i === "*" ? a.multiply(l) : a.divide(l);
    if (c.isNaN())
      return Bn;
    t = t.replace(Eg, c.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var s, [, u, d, p] = (s = Ag.exec(t)) !== null && s !== void 0 ? s : [], h = lt.parse(u ?? ""), g = lt.parse(p ?? ""), v = d === "+" ? h.add(g) : h.subtract(g);
    if (v.isNaN())
      return Bn;
    t = t.replace(Ag, v.toString());
  }
  return t;
}
var Tg = /\(([^()]*)\)/;
function L6(e) {
  for (var t = e, r; (r = Tg.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Tg, o1(n));
  }
  return t;
}
function B6(e) {
  var t = e.replace(/\s+/g, "");
  return t = L6(t), t = o1(t), t;
}
function W6(e) {
  try {
    return B6(e);
  } catch {
    return Bn;
  }
}
function lc(e) {
  var t = W6(e.slice(5, -1));
  return t === Bn ? "" : t;
}
var F6 = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], V6 = ["dx", "dy", "angle", "className", "breakAll"];
function iu() {
  return iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, iu.apply(null, arguments);
}
function Ig(e, t) {
  if (e == null) return {};
  var r, n, i = K6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function K6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var a1 = /[ \f\n\r\t\v\u2028\u2029]+/, l1 = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    ze(t) || (r ? i = t.toString().split("") : i = t.toString().split(a1));
    var o = i.map((l) => ({
      word: l,
      width: Ai(l, n).width
    })), a = r ? 0 : Ai(" ", n).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: a
    };
  } catch {
    return null;
  }
};
function s1(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function H6(e) {
  return ze(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var c1 = (e, t, r, n) => e.reduce((i, o) => {
  var {
    word: a,
    width: l
  } = o, c = i[i.length - 1];
  if (c && l != null && (t == null || n || c.width + l + r < Number(t)))
    c.words.push(a), c.width += l + r;
  else {
    var s = {
      words: [a],
      width: l
    };
    i.push(s);
  }
  return i;
}, []), u1 = (e) => e.reduce((t, r) => t.width > r.width ? t : r), q6 = "…", Mg = (e, t, r, n, i, o, a, l) => {
  var c = e.slice(0, t), s = l1({
    breakAll: r,
    style: n,
    children: c + q6
  });
  if (!s)
    return [!1, []];
  var u = c1(s.wordsWithComputedWidth, o, a, l), d = u.length > i || u1(u).width > Number(o);
  return [d, u];
}, U6 = (e, t, r, n, i) => {
  var {
    maxLines: o,
    children: a,
    style: l,
    breakAll: c
  } = e, s = ne(o), u = String(a), d = c1(t, n, r, i);
  if (!s || i)
    return d;
  var p = d.length > o || u1(d).width > Number(n);
  if (!p)
    return d;
  for (var h = 0, g = u.length - 1, v = 0, y; h <= g && v <= u.length - 1; ) {
    var m = Math.floor((h + g) / 2), x = m - 1, [b, w] = Mg(u, x, c, l, o, n, r, i), [S] = Mg(u, m, c, l, o, n, r, i);
    if (!b && !S && (h = m + 1), b && S && (g = m - 1), !b && S) {
      y = w;
      break;
    }
    v++;
  }
  return y || d;
}, Dg = (e) => {
  var t = ze(e) ? [] : e.toString().split(a1);
  return [{
    words: t,
    width: void 0
  }];
}, Y6 = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: o,
    maxLines: a
  } = e;
  if ((t || r) && !no.isSsr) {
    var l, c, s = l1({
      breakAll: o,
      children: n,
      style: i
    });
    if (s) {
      var {
        wordsWithComputedWidth: u,
        spaceWidth: d
      } = s;
      l = u, c = d;
    } else
      return Dg(n);
    return U6({
      breakAll: o,
      children: n,
      maxLines: a,
      style: i
    }, l, c, t, !!r);
  }
  return Dg(n);
}, d1 = "#808080", G6 = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: d1,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, Ld = /* @__PURE__ */ ct((e, t) => {
  var r = At(e, G6), {
    x: n,
    y: i,
    lineHeight: o,
    capHeight: a,
    fill: l,
    scaleToFit: c,
    textAnchor: s,
    verticalAnchor: u
  } = r, d = Ig(r, F6), p = er(() => Y6({
    breakAll: d.breakAll,
    children: d.children,
    maxLines: d.maxLines,
    scaleToFit: c,
    style: d.style,
    width: d.width
  }), [d.breakAll, d.children, d.maxLines, c, d.style, d.width]), {
    dx: h,
    dy: g,
    angle: v,
    className: y,
    breakAll: m
  } = d, x = Ig(d, V6);
  if (!ur(n) || !ur(i) || p.length === 0)
    return null;
  var b = Number(n) + (ne(h) ? h : 0), w = Number(i) + (ne(g) ? g : 0);
  if (!he(b) || !he(w))
    return null;
  var S;
  switch (u) {
    case "start":
      S = lc("calc(".concat(a, ")"));
      break;
    case "middle":
      S = lc("calc(".concat((p.length - 1) / 2, " * -").concat(o, " + (").concat(a, " / 2))"));
      break;
    default:
      S = lc("calc(".concat(p.length - 1, " * -").concat(o, ")"));
      break;
  }
  var O = [], C = p[0];
  if (c && C != null) {
    var E = C.width, {
      width: D
    } = d;
    O.push("scale(".concat(ne(D) && ne(E) ? D / E : 1, ")"));
  }
  return v && O.push("rotate(".concat(v, ", ").concat(b, ", ").concat(w, ")")), O.length && (x.transform = O.join(" ")), /* @__PURE__ */ P.createElement("text", iu({}, bt(x), {
    ref: t,
    x: b,
    y: w,
    className: _e("recharts-text", y),
    textAnchor: s,
    fill: l.includes("url") ? d1 : l
  }), p.map((I, $) => {
    var k = I.words.join(m ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ P.createElement("tspan", {
        x: b,
        dy: $ === 0 ? S : o,
        key: "".concat(k, "-").concat($)
      }, k)
    );
  }));
});
Ld.displayName = "Text";
function Ng(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function or(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ng(Object(r), !0).forEach(function(n) {
      X6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ng(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X6(e, t, r) {
  return (t = Z6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z6(e) {
  var t = J6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function J6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Q6 = (e) => {
  var {
    viewBox: t,
    position: r,
    offset: n = 0,
    parentViewBox: i
  } = e, {
    x: o,
    y: a,
    height: l,
    upperWidth: c,
    lowerWidth: s
  } = Ru(t), u = o, d = o + (c - s) / 2, p = (u + d) / 2, h = (c + s) / 2, g = u + c / 2, v = l >= 0 ? 1 : -1, y = v * n, m = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end", b = c >= 0 ? 1 : -1, w = b * n, S = b > 0 ? "end" : "start", O = b > 0 ? "start" : "end", C = i;
  if (r === "top") {
    var E = {
      x: u + c / 2,
      y: a - y,
      horizontalAnchor: "middle",
      verticalAnchor: m
    };
    return C && (E.height = Math.max(a - C.y, 0), E.width = c), E;
  }
  if (r === "bottom") {
    var D = {
      x: d + s / 2,
      y: a + l + y,
      horizontalAnchor: "middle",
      verticalAnchor: x
    };
    return C && (D.height = Math.max(C.y + C.height - (a + l), 0), D.width = s), D;
  }
  if (r === "left") {
    var I = {
      x: p - w,
      y: a + l / 2,
      horizontalAnchor: S,
      verticalAnchor: "middle"
    };
    return C && (I.width = Math.max(I.x - C.x, 0), I.height = l), I;
  }
  if (r === "right") {
    var $ = {
      x: p + h + w,
      y: a + l / 2,
      horizontalAnchor: O,
      verticalAnchor: "middle"
    };
    return C && ($.width = Math.max(C.x + C.width - $.x, 0), $.height = l), $;
  }
  var k = C ? {
    width: h,
    height: l
  } : {};
  return r === "insideLeft" ? or({
    x: p + w,
    y: a + l / 2,
    horizontalAnchor: O,
    verticalAnchor: "middle"
  }, k) : r === "insideRight" ? or({
    x: p + h - w,
    y: a + l / 2,
    horizontalAnchor: S,
    verticalAnchor: "middle"
  }, k) : r === "insideTop" ? or({
    x: u + c / 2,
    y: a + y,
    horizontalAnchor: "middle",
    verticalAnchor: x
  }, k) : r === "insideBottom" ? or({
    x: d + s / 2,
    y: a + l - y,
    horizontalAnchor: "middle",
    verticalAnchor: m
  }, k) : r === "insideTopLeft" ? or({
    x: u + w,
    y: a + y,
    horizontalAnchor: O,
    verticalAnchor: x
  }, k) : r === "insideTopRight" ? or({
    x: u + c - w,
    y: a + y,
    horizontalAnchor: S,
    verticalAnchor: x
  }, k) : r === "insideBottomLeft" ? or({
    x: d + w,
    y: a + l - y,
    horizontalAnchor: O,
    verticalAnchor: m
  }, k) : r === "insideBottomRight" ? or({
    x: d + s - w,
    y: a + l - y,
    horizontalAnchor: S,
    verticalAnchor: m
  }, k) : r && typeof r == "object" && (ne(r.x) || vn(r.x)) && (ne(r.y) || vn(r.y)) ? or({
    x: o + Jt(r.x, h),
    y: a + Jt(r.y, l),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, k) : or({
    x: g,
    y: a + l / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, k);
}, eI = ["labelRef"], tI = ["content"];
function Rg(e, t) {
  if (e == null) return {};
  var r, n, i = rI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function rI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $g(Object(r), !0).forEach(function(n) {
      nI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $g(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nI(e, t, r) {
  return (t = iI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iI(e) {
  var t = oI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xr.apply(null, arguments);
}
var f1 = /* @__PURE__ */ Et(null), aI = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a,
    children: l
  } = e, c = er(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a
  }), [t, r, n, i, o, a]);
  return /* @__PURE__ */ P.createElement(f1.Provider, {
    value: c
  }, l);
}, p1 = () => {
  var e = qt(f1), t = sl();
  return e || (t ? Ru(t) : void 0);
}, lI = /* @__PURE__ */ Et(null), sI = () => {
  var e = qt(lI), t = oe(nx);
  return e || t;
}, cI = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = ze(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, Bd = (e) => e != null && typeof e == "function", uI = (e, t) => {
  var r = Pt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, dI = (e, t, r, n, i) => {
  var {
    offset: o,
    className: a
  } = e, {
    cx: l,
    cy: c,
    innerRadius: s,
    outerRadius: u,
    startAngle: d,
    endAngle: p,
    clockWise: h
  } = i, g = (s + u) / 2, v = uI(d, p), y = v >= 0 ? 1 : -1, m, x;
  switch (t) {
    case "insideStart":
      m = d + y * o, x = h;
      break;
    case "insideEnd":
      m = p - y * o, x = !h;
      break;
    case "end":
      m = p + y * o, x = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  x = v <= 0 ? x : !x;
  var b = st(l, c, g, m), w = st(l, c, g, m + (x ? 1 : -1) * 359), S = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(x ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), O = ze(e.id) ? Ii("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ P.createElement("text", xr({}, n, {
    dominantBaseline: "central",
    className: _e("recharts-radial-bar-label", a)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: O,
    d: S
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(O)
  }, r));
}, fI = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: o,
    outerRadius: a,
    startAngle: l,
    endAngle: c
  } = e, s = (l + c) / 2;
  if (r === "outside") {
    var {
      x: u,
      y: d
    } = st(n, i, a + t, s);
    return {
      x: u,
      y: d,
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
  } = st(n, i, p, s);
  return {
    x: h,
    y: g,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Uo = (e) => e != null && "cx" in e && ne(e.cx), pI = {
  angle: 0,
  offset: 5,
  zIndex: et.label,
  position: "middle",
  textBreakAll: !1
};
function hI(e) {
  if (!Uo(e))
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
function Br(e) {
  var t = At(e, pI), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: o,
    children: a,
    content: l,
    className: c = "",
    textBreakAll: s,
    labelRef: u
  } = t, d = sI(), p = p1(), h = i === "center" ? p : d ?? p, g, v, y;
  r == null ? g = h : Uo(r) ? g = r : g = Ru(r);
  var m = hI(g);
  if (!g || ze(o) && ze(a) && !/* @__PURE__ */ Nt(l) && typeof l != "function")
    return null;
  var x = ki(ki({}, t), {}, {
    viewBox: g
  });
  if (/* @__PURE__ */ Nt(l)) {
    var {
      labelRef: b
    } = x, w = Rg(x, eI);
    return /* @__PURE__ */ ei(l, w);
  }
  if (typeof l == "function") {
    var {
      content: S
    } = x, O = Rg(x, tI);
    if (v = /* @__PURE__ */ My(l, O), /* @__PURE__ */ Nt(v))
      return v;
  } else
    v = cI(t);
  var C = bt(t);
  if (Uo(g)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return dI(t, i, v, C, g);
    y = fI(g, t.offset, t.position);
  } else {
    if (!m)
      return null;
    var E = Q6({
      viewBox: m,
      position: i,
      offset: t.offset,
      parentViewBox: Uo(n) ? void 0 : n
    });
    y = ki(ki({
      x: E.x,
      y: E.y,
      textAnchor: E.horizontalAnchor,
      verticalAnchor: E.verticalAnchor
    }, E.width !== void 0 ? {
      width: E.width
    } : {}), E.height !== void 0 ? {
      height: E.height
    } : {});
  }
  return /* @__PURE__ */ P.createElement(Yt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(Ld, xr({
    ref: u,
    className: _e("recharts-label", c)
  }, C, y, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: s1(C.textAnchor) ? C.textAnchor : y.textAnchor,
    breakAll: s
  }), v));
}
Br.displayName = "Label";
var vI = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ P.createElement(Br, xr({
    key: "label-implicit"
  }, n)) : ur(e) ? /* @__PURE__ */ P.createElement(Br, xr({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Nt(e) ? e.type === Br ? /* @__PURE__ */ ei(e, ki({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ P.createElement(Br, xr({
    key: "label-implicit",
    content: e
  }, n)) : Bd(e) ? /* @__PURE__ */ P.createElement(Br, xr({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ P.createElement(Br, xr({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function gI(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = p1();
  return vI(t, n, r) || null;
}
var yI = ["valueAccessor"], mI = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ra.apply(null, arguments);
}
function zg(e, t) {
  if (e == null) return {};
  var r, n, i = xI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function xI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var bI = (e) => {
  var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
  if (H6(t))
    return t;
}, h1 = /* @__PURE__ */ Et(void 0), v1 = h1.Provider, g1 = /* @__PURE__ */ Et(void 0);
g1.Provider;
function wI() {
  return qt(h1);
}
function jI() {
  return qt(g1);
}
function Sr(e) {
  var {
    valueAccessor: t = bI
  } = e, r = zg(e, yI), {
    dataKey: n,
    clockWise: i,
    id: o,
    textBreakAll: a,
    zIndex: l
  } = r, c = zg(r, mI), s = wI(), u = jI(), d = s || u;
  return !d || !d.length ? null : /* @__PURE__ */ P.createElement(Yt, {
    zIndex: l ?? et.label
  }, /* @__PURE__ */ P.createElement(pt, {
    className: "recharts-label-list"
  }, d.map((p, h) => {
    var g, v = ze(n) ? t(p, h) : He(p.payload, n), y = ze(o) ? {} : {
      id: "".concat(o, "-").concat(h)
    };
    return /* @__PURE__ */ P.createElement(Br, Ra({
      key: "label-".concat(h)
    }, bt(p), c, y, {
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
Sr.displayName = "LabelList";
function y1(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(Sr, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ P.isValidElement(t) || Bd(t) ? /* @__PURE__ */ P.createElement(Sr, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ P.createElement(Sr, Ra({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function ou() {
  return ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ou.apply(null, arguments);
}
var m1 = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, o = _e("recharts-dot", i);
  return ne(t) && ne(r) && ne(n) ? /* @__PURE__ */ P.createElement("circle", ou({}, Kt(e), Ou(e), {
    className: o,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, SI = {
  radiusAxis: {},
  angleAxis: {}
}, x1 = ht({
  name: "polarAxis",
  initialState: SI,
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
  addRadiusAxis: FR,
  removeRadiusAxis: VR,
  addAngleAxis: KR,
  removeAngleAxis: HR
} = x1.actions, OI = x1.reducer;
function PI(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var Lo = { exports: {} }, Pe = {};
var Lg;
function CI() {
  if (Lg) return Pe;
  Lg = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function g(v) {
    if (typeof v == "object" && v !== null) {
      var y = v.$$typeof;
      switch (y) {
        case e:
          switch (v = v.type, v) {
            case r:
            case i:
            case n:
            case c:
            case s:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case l:
                case d:
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
  return Pe.ContextConsumer = o, Pe.ContextProvider = a, Pe.Element = e, Pe.ForwardRef = l, Pe.Fragment = r, Pe.Lazy = d, Pe.Memo = u, Pe.Portal = t, Pe.Profiler = i, Pe.StrictMode = n, Pe.Suspense = c, Pe.SuspenseList = s, Pe.isContextConsumer = function(v) {
    return g(v) === o;
  }, Pe.isContextProvider = function(v) {
    return g(v) === a;
  }, Pe.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, Pe.isForwardRef = function(v) {
    return g(v) === l;
  }, Pe.isFragment = function(v) {
    return g(v) === r;
  }, Pe.isLazy = function(v) {
    return g(v) === d;
  }, Pe.isMemo = function(v) {
    return g(v) === u;
  }, Pe.isPortal = function(v) {
    return g(v) === t;
  }, Pe.isProfiler = function(v) {
    return g(v) === i;
  }, Pe.isStrictMode = function(v) {
    return g(v) === n;
  }, Pe.isSuspense = function(v) {
    return g(v) === c;
  }, Pe.isSuspenseList = function(v) {
    return g(v) === s;
  }, Pe.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === i || v === n || v === c || v === s || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === u || v.$$typeof === a || v.$$typeof === o || v.$$typeof === l || v.$$typeof === h || v.getModuleId !== void 0);
  }, Pe.typeOf = g, Pe;
}
var Ce = {};
var Bg;
function kI() {
  return Bg || (Bg = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v) {
      if (typeof v == "object" && v !== null) {
        var y = v.$$typeof;
        switch (y) {
          case t:
            switch (v = v.type, v) {
              case n:
              case o:
              case i:
              case s:
              case u:
              case h:
                return v;
              default:
                switch (v = v && v.$$typeof, v) {
                  case l:
                  case c:
                  case p:
                  case d:
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    Ce.ContextConsumer = a, Ce.ContextProvider = l, Ce.Element = t, Ce.ForwardRef = c, Ce.Fragment = n, Ce.Lazy = p, Ce.Memo = d, Ce.Portal = r, Ce.Profiler = o, Ce.StrictMode = i, Ce.Suspense = s, Ce.SuspenseList = u, Ce.isContextConsumer = function(v) {
      return e(v) === a;
    }, Ce.isContextProvider = function(v) {
      return e(v) === l;
    }, Ce.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }, Ce.isForwardRef = function(v) {
      return e(v) === c;
    }, Ce.isFragment = function(v) {
      return e(v) === n;
    }, Ce.isLazy = function(v) {
      return e(v) === p;
    }, Ce.isMemo = function(v) {
      return e(v) === d;
    }, Ce.isPortal = function(v) {
      return e(v) === r;
    }, Ce.isProfiler = function(v) {
      return e(v) === o;
    }, Ce.isStrictMode = function(v) {
      return e(v) === i;
    }, Ce.isSuspense = function(v) {
      return e(v) === s;
    }, Ce.isSuspenseList = function(v) {
      return e(v) === u;
    }, Ce.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === n || v === o || v === i || v === s || v === u || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === d || v.$$typeof === l || v.$$typeof === a || v.$$typeof === c || v.$$typeof === g || v.getModuleId !== void 0);
    }, Ce.typeOf = e;
  })()), Ce;
}
var Wg;
function _I() {
  return Wg || (Wg = 1, process.env.NODE_ENV === "production" ? Lo.exports = /* @__PURE__ */ CI() : Lo.exports = /* @__PURE__ */ kI()), Lo.exports;
}
var EI = /* @__PURE__ */ _I(), Fg = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Vg = null, sc = null, b1 = (e) => {
  if (e === Vg && Array.isArray(sc))
    return sc;
  var t = [];
  return e2.forEach(e, (r) => {
    ze(r) || (EI.isFragment(r) ? t = t.concat(b1(r.props.children)) : t.push(r));
  }), sc = t, Vg = e, t;
};
function AI(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => Fg(i)) : n = [Fg(t)], b1(e).forEach((i) => {
    var o = Hn(i, "type.displayName") || Hn(i, "type.name");
    o && n.indexOf(o) !== -1 && r.push(i);
  }), r;
}
var w1 = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, cc = {}, Kg;
function TI() {
  return Kg || (Kg = 1, (function(e) {
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
  })(cc)), cc;
}
var uc, Hg;
function II() {
  return Hg || (Hg = 1, uc = TI().isPlainObject), uc;
}
var MI = /* @__PURE__ */ II();
const DI = /* @__PURE__ */ Sn(MI);
var qg, Ug, Yg, Gg, Xg;
function Zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zg(Object(r), !0).forEach(function(n) {
      NI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NI(e, t, r) {
  return (t = RI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RI(e) {
  var t = $I(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $I(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(null, arguments);
}
function ji(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Qg = (e, t, r, n, i) => {
  var o = r - n, a;
  return a = Fe(qg || (qg = ji(["M ", ",", ""])), e, t), a += Fe(Ug || (Ug = ji(["L ", ",", ""])), e + r, t), a += Fe(Yg || (Yg = ji(["L ", ",", ""])), e + r - o / 2, t + i), a += Fe(Gg || (Gg = ji(["L ", ",", ""])), e + r - o / 2 - n, t + i), a += Fe(Xg || (Xg = ji(["L ", ",", " Z"])), e, t), a;
}, zI = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, LI = (e) => {
  var t = At(e, zI), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: o,
    height: a,
    className: l
  } = t, {
    animationEasing: c,
    animationDuration: s,
    animationBegin: u,
    isUpdateAnimationActive: d
  } = t, p = ve(null), [h, g] = W(-1), v = ve(i), y = ve(o), m = ve(a), x = ve(r), b = ve(n), w = pl(e, "trapezoid-");
  if (Oe(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var R = p.current.getTotalLength();
        R && g(R);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || o !== +o || a !== +a || i === 0 && o === 0 || a === 0)
    return null;
  var S = _e("recharts-trapezoid", l);
  if (!d)
    return /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", $a({}, bt(t), {
      className: S,
      d: Qg(r, n, i, o, a)
    })));
  var O = v.current, C = y.current, E = m.current, D = x.current, I = b.current, $ = "0px ".concat(h === -1 ? 1 : h, "px"), k = "".concat(h, "px ").concat(h, "px"), V = _m(["strokeDasharray"], s, c);
  return /* @__PURE__ */ P.createElement(fl, {
    animationId: w,
    key: w,
    canBegin: h > 0,
    duration: s,
    easing: c,
    isActive: d,
    begin: u
  }, (R) => {
    var q = $e(O, i, R), Z = $e(C, o, R), Q = $e(E, a, R), N = $e(D, r, R), re = $e(I, n, R);
    p.current && (v.current = q, y.current = Z, m.current = Q, x.current = N, b.current = re);
    var te = R > 0 ? {
      transition: V,
      strokeDasharray: k
    } : {
      strokeDasharray: $
    };
    return /* @__PURE__ */ P.createElement("path", $a({}, bt(t), {
      className: S,
      d: Qg(N, re, q, Z, Q),
      ref: p,
      style: Jg(Jg({}, te), t.style)
    }));
  });
}, BI = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function WI(e, t) {
  if (e == null) return {};
  var r, n, i = FI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function FI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ey(Object(r), !0).forEach(function(n) {
      VI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VI(e, t, r) {
  return (t = KI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KI(e) {
  var t = HI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qI(e, t) {
  return za(za({}, t), e);
}
function UI(e, t) {
  return e === "symbols";
}
function ty(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement(Im, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(LI, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(Nm, r);
    case "symbols":
      if (UI(t))
        return /* @__PURE__ */ P.createElement(d0, r);
      break;
    case "curve":
      return /* @__PURE__ */ P.createElement(_i, r);
    default:
      return null;
  }
}
function YI(e) {
  return /* @__PURE__ */ Nt(e) ? e.props : e;
}
function GI(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape",
    inActiveClassName: i = "recharts-shape"
  } = e, o = WI(e, BI), a;
  if (/* @__PURE__ */ Nt(t))
    a = /* @__PURE__ */ ei(t, za(za({}, o), YI(t)));
  else if (typeof t == "function")
    a = t(o, o.index);
  else if (DI(t) && typeof t != "boolean") {
    var l = qI(t, o);
    a = /* @__PURE__ */ P.createElement(ty, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var c = o;
    a = /* @__PURE__ */ P.createElement(ty, {
      shapeType: r,
      elementProps: c
    });
  }
  return o.isActive ? /* @__PURE__ */ P.createElement(pt, {
    className: n
  }, a) : /* @__PURE__ */ P.createElement(pt, {
    className: i
  }, a);
}
var j1 = (e, t, r) => {
  var n = Le();
  return (i, o) => (a) => {
    e?.(i, o, a), n(_b({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, S1 = (e) => {
  var t = Le();
  return (r, n) => (i) => {
    e?.(r, n, i), t(d3());
  };
}, O1 = (e, t, r) => {
  var n = Le();
  return (i, o) => (a) => {
    e?.(i, o, a), n(f3({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function P1(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = Le(), n = vt(), i = ve(null);
  return _t(() => {
    n || (i.current === null ? r(l3(t)) : i.current !== t && r(s3({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), _t(() => () => {
    i.current && (r(c3(i.current)), i.current = null);
  }, [r]), null;
}
function C1(e) {
  var {
    legendPayload: t
  } = e, r = Le(), n = vt(), i = ve(null);
  return _t(() => {
    n || (i.current === null ? r(sC(t)) : i.current !== t && r(cC({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), _t(() => () => {
    i.current && (r(uC(i.current)), i.current = null);
  }, [r]), null;
}
var dc, XI = () => {
  var [e] = P.useState(() => Ii("uid-"));
  return e;
}, ZI = (dc = P.useId) !== null && dc !== void 0 ? dc : XI;
function JI(e, t) {
  var r = ZI();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var QI = /* @__PURE__ */ Et(void 0), k1 = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = JI("recharts-".concat(r), t);
  return /* @__PURE__ */ P.createElement(QI.Provider, {
    value: i
  }, n(i));
}, eM = {
  cartesianItems: [],
  polarItems: []
}, _1 = ht({
  name: "graphicalItems",
  initialState: eM,
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
        } = t.payload, i = Ft(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: De()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Ft(e).cartesianItems.indexOf(t.payload);
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
        var r = Ft(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: De()
    },
    replacePolarGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Ft(e).polarItems.indexOf(r);
        i > -1 && (e.polarItems[i] = n);
      },
      prepare: De()
    }
  }
}), {
  addCartesianGraphicalItem: tM,
  replaceCartesianGraphicalItem: rM,
  removeCartesianGraphicalItem: nM,
  addPolarGraphicalItem: qR,
  removePolarGraphicalItem: UR,
  replacePolarGraphicalItem: YR
} = _1.actions, iM = _1.reducer, oM = (e) => {
  var t = Le(), r = ve(null);
  return _t(() => {
    r.current === null ? t(tM(e)) : r.current !== e && t(rM({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), _t(() => () => {
    r.current && (t(nM(r.current)), r.current = null);
  }, [t]), null;
}, E1 = /* @__PURE__ */ gu(oM), aM = ["points"];
function ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ry(Object(r), !0).forEach(function(n) {
      lM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ry(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lM(e, t, r) {
  return (t = sM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sM(e) {
  var t = cM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(null, arguments);
}
function uM(e, t) {
  if (e == null) return {};
  var r, n, i = dM(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function dM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function fM(e) {
  var {
    option: t,
    dotProps: r,
    className: n
  } = e;
  if (/* @__PURE__ */ Nt(t))
    return /* @__PURE__ */ ei(t, r);
  if (typeof t == "function")
    return t(r);
  var i = _e(n, typeof t != "boolean" ? t.className : ""), o = r ?? {}, {
    points: a
  } = o, l = uM(o, aM);
  return /* @__PURE__ */ P.createElement(m1, La({}, l, {
    className: i
  }));
}
function pM(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function hM(e) {
  var {
    points: t,
    dot: r,
    className: n,
    dotClassName: i,
    dataKey: o,
    baseProps: a,
    needClip: l,
    clipPathId: c,
    zIndex: s = et.scatter
  } = e;
  if (!pM(t, r))
    return null;
  var u = w1(r), d = R2(r), p = t.map((g, v) => {
    var y, m, x = fc(fc(fc({
      r: 3
    }, a), d), {}, {
      index: v,
      cx: (y = g.x) !== null && y !== void 0 ? y : void 0,
      cy: (m = g.y) !== null && m !== void 0 ? m : void 0,
      dataKey: o,
      value: g.value,
      payload: g.payload,
      points: t
    });
    return /* @__PURE__ */ P.createElement(fM, {
      key: "dot-".concat(v),
      option: r,
      dotProps: x,
      className: i
    });
  }), h = {};
  return l && c != null && (h.clipPath = "url(#clipPath-".concat(u ? "" : "dots-").concat(c, ")")), /* @__PURE__ */ P.createElement(Yt, {
    zIndex: s
  }, /* @__PURE__ */ P.createElement(pt, La({
    className: n
  }, h), p));
}
function ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(n) {
      vM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vM(e, t, r) {
  return (t = gM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gM(e) {
  var t = yM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var A1 = 0, mM = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, T1 = ht({
  name: "cartesianAxis",
  initialState: mM,
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
        e.yAxis[r] = iy(iy({}, i), {}, {
          width: n,
          widthHistory: l
        });
      }
    }
  }
}), {
  addXAxis: xM,
  replaceXAxis: bM,
  removeXAxis: wM,
  addYAxis: jM,
  replaceYAxis: SM,
  removeYAxis: OM,
  addZAxis: GR,
  replaceZAxis: XR,
  removeZAxis: ZR,
  updateYAxisWidth: PM
} = T1.actions, CM = T1.reducer, kM = M([rt], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), _M = M([kM, Er, Ar], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), Wd = () => oe(_M), EM = () => oe(lT);
function oy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oy(Object(r), !0).forEach(function(n) {
      AM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AM(e, t, r) {
  return (t = TM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TM(e) {
  var t = IM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var MM = (e) => {
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
  }, c = pc(pc(pc({}, l), Ui(i)), Ou(i)), s;
  return /* @__PURE__ */ Nt(i) ? s = /* @__PURE__ */ ei(i, c) : typeof i == "function" ? s = i(c) : s = /* @__PURE__ */ P.createElement(m1, c), /* @__PURE__ */ P.createElement(pt, {
    className: "recharts-active-dot",
    clipPath: a
  }, s);
};
function ay(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i,
    clipPath: o,
    zIndex: a = et.activeDot
  } = e, l = oe(wn), c = EM();
  if (t == null || c == null)
    return null;
  var s = t.find((u) => c.includes(u.payload));
  return ze(s) ? null : /* @__PURE__ */ P.createElement(Yt, {
    zIndex: a
  }, /* @__PURE__ */ P.createElement(MM, {
    point: s,
    childIndex: Number(l),
    mainColor: r,
    dataKey: i,
    activeDot: n,
    clipPath: o
  }));
}
var ly = (e, t, r) => {
  var n = r ?? e;
  if (!ze(n))
    return Jt(n, t, 0);
}, DM = (e, t, r) => {
  var n = {}, i = e.filter(wl), o = e.filter((s) => s.stackId == null), a = i.reduce((s, u) => {
    var d = s[u.stackId];
    return d == null && (d = []), d.push(u), s[u.stackId] = d, s;
  }, n), l = Object.entries(a).map((s) => {
    var u, [d, p] = s, h = p.map((v) => v.dataKey), g = ly(t, r, (u = p[0]) === null || u === void 0 ? void 0 : u.barSize);
    return {
      stackId: d,
      dataKeys: h,
      barSize: g
    };
  }), c = o.map((s) => {
    var u = [s.dataKey].filter((p) => p != null), d = ly(t, r, s.barSize);
    return {
      stackId: void 0,
      dataKeys: u,
      barSize: d
    };
  });
  return [...l, ...c];
};
function sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sy(Object(r), !0).forEach(function(n) {
      NM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NM(e, t, r) {
  return (t = RM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RM(e) {
  var t = $M(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $M(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zM(e, t, r, n, i) {
  var o, a = n.length;
  if (!(a < 1)) {
    var l = Jt(e, r, 0, !0), c, s = [];
    if (he((o = n[0]) === null || o === void 0 ? void 0 : o.barSize)) {
      var u = !1, d = r / a, p = n.reduce((x, b) => x + (b.barSize || 0), 0);
      p += (a - 1) * l, p >= r && (p -= (a - 1) * l, l = 0), p >= r && d > 0 && (u = !0, d *= 0.9, p = a * d);
      var h = (r - p) / 2 >> 0, g = {
        offset: h - l,
        size: 0
      };
      c = n.reduce((x, b) => {
        var w, S = {
          stackId: b.stackId,
          dataKeys: b.dataKeys,
          position: {
            offset: g.offset + g.size + l,
            size: u ? d : (w = b.barSize) !== null && w !== void 0 ? w : 0
          }
        }, O = [...x, S];
        return g = S.position, O;
      }, s);
    } else {
      var v = Jt(t, r, 0, !0);
      r - 2 * v - (a - 1) * l <= 0 && (l = 0);
      var y = (r - 2 * v - (a - 1) * l) / a;
      y > 1 && (y >>= 0);
      var m = he(i) ? Math.min(y, i) : y;
      c = n.reduce((x, b, w) => [...x, {
        stackId: b.stackId,
        dataKeys: b.dataKeys,
        position: {
          offset: v + (y + l) * w + (y - m) / 2,
          size: m
        }
      }], s);
    }
    return c;
  }
}
var LM = (e, t, r, n, i, o, a) => {
  var l = ze(a) ? t : a, c = zM(r, n, i !== o ? i : o, e, l);
  return i !== o && c != null && (c = c.map((s) => Bo(Bo({}, s), {}, {
    position: Bo(Bo({}, s.position), {}, {
      offset: s.position.offset - i / 2
    })
  }))), c;
}, BM = (e, t) => {
  var r = bl(t);
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
}, WM = (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
};
function FM(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && he(e.zIndex) ? e.zIndex : t;
}
var VM = (e) => {
  var {
    chartData: t
  } = e, r = Le(), n = vt();
  return Oe(() => n ? () => {
  } : (r(bg(t)), () => {
    r(bg(void 0));
  }), [t, r, n]), null;
}, cy = {
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
}, I1 = ht({
  name: "brush",
  initialState: cy,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? cy : t.payload;
    }
  }
}), {
  setBrushSettings: JR
} = I1.actions, KM = I1.reducer;
function HM(e) {
  return (e % 180 + 180) % 180;
}
var qM = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = HM(i), a = o * Math.PI / 180, l = Math.atan(n / r), c = a > l && a < Math.PI - l ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(c);
}, UM = {
  dots: [],
  areas: [],
  lines: []
}, M1 = ht({
  name: "referenceElements",
  initialState: UM,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Ft(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Ft(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Ft(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: QR,
  removeDot: e$,
  addArea: t$,
  removeArea: r$,
  addLine: n$,
  removeLine: i$
} = M1.actions, YM = M1.reducer, GM = /* @__PURE__ */ Et(void 0), XM = (e) => {
  var {
    children: t
  } = e, [r] = W("".concat(Ii("recharts"), "-clip")), n = Wd();
  if (n == null)
    return null;
  var {
    x: i,
    y: o,
    width: a,
    height: l
  } = n;
  return /* @__PURE__ */ P.createElement(GM.Provider, {
    value: r
  }, /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: o,
    height: l,
    width: a
  }))), t);
};
function D1(e, t) {
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
function ZM(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return qM(n, r);
}
function JM(e, t, r) {
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
function qi(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var o = r();
  return e * (t - e * o / 2 - n) >= 0 && e * (t + e * o / 2 - i) <= 0;
}
function QM(e, t) {
  return D1(e, t + 1);
}
function e5(e, t, r, n, i) {
  for (var o = (n || []).slice(), {
    start: a,
    end: l
  } = t, c = 0, s = 1, u = a, d = function() {
    var g = n?.[c];
    if (g === void 0)
      return {
        v: D1(n, s)
      };
    var v = c, y, m = () => (y === void 0 && (y = r(g, v)), y), x = g.coordinate, b = c === 0 || qi(e, x, m, u, l);
    b || (c = 0, u = a, s += 1), b && (u = x + e * (m() / 2 + i), c += s);
  }, p; s <= o.length; )
    if (p = d(), p) return p.v;
  return [];
}
function t5(e, t, r, n, i) {
  var o = (n || []).slice(), a = o.length;
  if (a === 0)
    return [];
  for (var {
    start: l,
    end: c
  } = t, s = 1; s <= a; s++) {
    for (var u = (a - 1) % s, d = l, p = !0, h = function() {
      var w = n[v];
      if (w == null)
        return 0;
      var S = v, O, C = () => (O === void 0 && (O = r(w, S)), O), E = w.coordinate, D = v === u || qi(e, E, C, d, c);
      if (!D)
        return p = !1, 1;
      D && (d = E + e * (C() / 2 + i));
    }, g, v = u; v < a && (g = h(), !(g !== 0 && g === 1)); v += s)
      ;
    if (p) {
      for (var y = [], m = u; m < a; m += s) {
        var x = n[m];
        x != null && y.push(x);
      }
      return y;
    }
  }
  return [];
}
function uy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uy(Object(r), !0).forEach(function(n) {
      r5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r5(e, t, r) {
  return (t = n5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n5(e) {
  var t = i5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function i5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o5(e, t, r, n, i) {
  for (var o = (n || []).slice(), a = o.length, {
    start: l
  } = t, {
    end: c
  } = t, s = function(p) {
    var h = o[p];
    if (h == null)
      return 1;
    var g = h, v, y = () => (v === void 0 && (v = r(h, p)), v);
    if (p === a - 1) {
      var m = e * (g.coordinate + e * y() / 2 - c);
      o[p] = g = dt(dt({}, g), {}, {
        tickCoord: m > 0 ? g.coordinate - m * e : g.coordinate
      });
    } else
      o[p] = g = dt(dt({}, g), {}, {
        tickCoord: g.coordinate
      });
    if (g.tickCoord != null) {
      var x = qi(e, g.tickCoord, y, l, c);
      x && (c = g.tickCoord - e * (y() / 2 + i), o[p] = dt(dt({}, g), {}, {
        isShow: !0
      }));
    }
  }, u = a - 1; u >= 0; u--)
    s(u);
  return o;
}
function a5(e, t, r, n, i, o) {
  var a = (n || []).slice(), l = a.length, {
    start: c,
    end: s
  } = t;
  if (o) {
    var u = n[l - 1];
    if (u != null) {
      var d = r(u, l - 1), p = e * (u.coordinate + e * d / 2 - s);
      if (a[l - 1] = u = dt(dt({}, u), {}, {
        tickCoord: p > 0 ? u.coordinate - p * e : u.coordinate
      }), u.tickCoord != null) {
        var h = qi(e, u.tickCoord, () => d, c, s);
        h && (s = u.tickCoord - e * (d / 2 + i), a[l - 1] = dt(dt({}, u), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var g = o ? l - 1 : l, v = function(x) {
    var b = a[x];
    if (b == null)
      return 1;
    var w = b, S, O = () => (S === void 0 && (S = r(b, x)), S);
    if (x === 0) {
      var C = e * (w.coordinate - e * O() / 2 - c);
      a[x] = w = dt(dt({}, w), {}, {
        tickCoord: C < 0 ? w.coordinate - C * e : w.coordinate
      });
    } else
      a[x] = w = dt(dt({}, w), {}, {
        tickCoord: w.coordinate
      });
    if (w.tickCoord != null) {
      var E = qi(e, w.tickCoord, O, c, s);
      E && (c = w.tickCoord + e * (O() / 2 + i), a[x] = dt(dt({}, w), {}, {
        isShow: !0
      }));
    }
  }, y = 0; y < g; y++)
    v(y);
  return a;
}
function Fd(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: o,
    minTickGap: a,
    orientation: l,
    interval: c,
    tickFormatter: s,
    unit: u,
    angle: d
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (ne(c) || no.isSsr) {
    var p;
    return (p = QM(i, ne(c) ? c : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], g = l === "top" || l === "bottom" ? "width" : "height", v = u && g === "width" ? Ai(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = (S, O) => {
    var C = typeof s == "function" ? s(S.value, O) : S.value;
    return g === "width" ? ZM(Ai(C, {
      fontSize: t,
      letterSpacing: r
    }), v, d) : Ai(C, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, m = i[0], x = i[1], b = i.length >= 2 && m != null && x != null ? Pt(x.coordinate - m.coordinate) : 1, w = JM(o, b, g);
  return c === "equidistantPreserveStart" ? e5(b, w, y, i, a) : c === "equidistantPreserveEnd" ? t5(b, w, y, i, a) : (c === "preserveStart" || c === "preserveStartEnd" ? h = a5(b, w, y, i, a, c === "preserveStartEnd") : h = o5(b, w, y, i, a), h.filter((S) => S.isShow));
}
var l5 = (e) => {
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
        var d = u.getBoundingClientRect();
        d.width > a && (a = d.width);
      }
    });
    var l = r ? r.getBoundingClientRect().width : 0, c = i + o, s = a + c + l + (r ? n : 0);
    return Math.round(s);
  }
  return 0;
}, s5 = {
  xAxis: {},
  yAxis: {}
}, N1 = ht({
  name: "renderedTicks",
  initialState: s5,
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
  setRenderedTicks: c5,
  removeRenderedTicks: u5
} = N1.actions, d5 = N1.reducer, f5 = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function p5(e, t) {
  if (e == null) return {};
  var r, n, i = h5(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function h5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jn.apply(null, arguments);
}
function dy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dy(Object(r), !0).forEach(function(n) {
      v5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v5(e, t, r) {
  return (t = g5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g5(e) {
  var t = y5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function y5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Or = {
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
  zIndex: et.axis
};
function m5(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: o,
    mirror: a,
    axisLine: l,
    otherSvgProps: c
  } = e;
  if (!l)
    return null;
  var s = We(We(We({}, c), Kt(l)), {}, {
    fill: "none"
  });
  if (o === "top" || o === "bottom") {
    var u = +(o === "top" && !a || o === "bottom" && a);
    s = We(We({}, s), {}, {
      x1: t,
      y1: r + u * i,
      x2: t + n,
      y2: r + u * i
    });
  } else {
    var d = +(o === "left" && !a || o === "right" && a);
    s = We(We({}, s), {}, {
      x1: t + d * n,
      y1: r,
      x2: t + d * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ P.createElement("line", jn({}, s, {
    className: _e("recharts-cartesian-axis-line", Hn(l, "className"))
  }));
}
function x5(e, t, r, n, i, o, a, l, c) {
  var s, u, d, p, h, g, v = l ? -1 : 1, y = e.tickSize || a, m = ne(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (o) {
    case "top":
      s = u = e.coordinate, p = r + +!l * i, d = p - v * y, g = d - v * c, h = m;
      break;
    case "left":
      d = p = e.coordinate, u = t + +!l * n, s = u - v * y, h = s - v * c, g = m;
      break;
    case "right":
      d = p = e.coordinate, u = t + +l * n, s = u + v * y, h = s + v * c, g = m;
      break;
    default:
      s = u = e.coordinate, p = r + +l * i, d = p + v * y, g = d + v * c, h = m;
      break;
  }
  return {
    line: {
      x1: s,
      y1: d,
      x2: u,
      y2: p
    },
    tick: {
      x: h,
      y: g
    }
  };
}
function b5(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function w5(e, t) {
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
function j5(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, o = _e(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ P.isValidElement(t))
    i = /* @__PURE__ */ P.cloneElement(t, We(We({}, r), {}, {
      className: o
    }));
  else if (typeof t == "function")
    i = t(We(We({}, r), {}, {
      className: o
    }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = _e(a, PI(t))), i = /* @__PURE__ */ P.createElement(Ld, jn({}, r, {
      className: a
    }), n);
  }
  return i;
}
function S5(e) {
  var {
    ticks: t,
    axisType: r,
    axisId: n
  } = e, i = Le();
  return Oe(() => {
    if (n == null || r == null)
      return On;
    var o = t.map((a) => ({
      value: a.value,
      coordinate: a.coordinate,
      offset: a.offset,
      index: a.index
    }));
    return i(c5({
      ticks: o,
      axisId: n,
      axisType: r
    })), () => {
      i(u5({
        axisId: n,
        axisType: r
      }));
    };
  }, [i, t, n, r]), null;
}
var O5 = /* @__PURE__ */ ct((e, t) => {
  var {
    ticks: r = [],
    tick: n,
    tickLine: i,
    stroke: o,
    tickFormatter: a,
    unit: l,
    padding: c,
    tickTextProps: s,
    orientation: u,
    mirror: d,
    x: p,
    y: h,
    width: g,
    height: v,
    tickSize: y,
    tickMargin: m,
    fontSize: x,
    letterSpacing: b,
    getTicksConfig: w,
    events: S,
    axisType: O,
    axisId: C
  } = e, E = Fd(We(We({}, w), {}, {
    ticks: r
  }), x, b), D = Kt(w), I = Ui(n), $ = s1(D.textAnchor) ? D.textAnchor : b5(u, d), k = w5(u, d), V = {};
  typeof i == "object" && (V = i);
  var R = We(We({}, D), {}, {
    fill: "none"
  }, V), q = E.map((N) => We({
    entry: N
  }, x5(N, p, h, g, v, u, y, d, m))), Z = q.map((N) => {
    var {
      entry: re,
      line: te
    } = N;
    return /* @__PURE__ */ P.createElement(pt, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(re.value, "-").concat(re.coordinate, "-").concat(re.tickCoord)
    }, i && /* @__PURE__ */ P.createElement("line", jn({}, R, te, {
      className: _e("recharts-cartesian-axis-tick-line", Hn(i, "className"))
    })));
  }), Q = q.map((N, re) => {
    var te, z, {
      entry: B,
      tick: L
    } = N, K = We(We(We(We({
      verticalAnchor: k
    }, D), {}, {
      textAnchor: $,
      stroke: "none",
      fill: o
    }, L), {}, {
      index: re,
      payload: B,
      visibleTicksCount: E.length,
      tickFormatter: a,
      padding: c
    }, s), {}, {
      angle: (te = (z = s?.angle) !== null && z !== void 0 ? z : D.angle) !== null && te !== void 0 ? te : 0
    }), le = We(We({}, K), I);
    return /* @__PURE__ */ P.createElement(pt, jn({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(B.value, "-").concat(B.coordinate, "-").concat(B.tickCoord)
    }, Pu(S, B, re)), n && /* @__PURE__ */ P.createElement(j5, {
      option: n,
      tickProps: le,
      value: "".concat(typeof a == "function" ? a(B.value, re) : B.value).concat(l || "")
    }));
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(O, "-ticks")
  }, /* @__PURE__ */ P.createElement(S5, {
    ticks: E,
    axisId: C,
    axisType: O
  }), Q.length > 0 && /* @__PURE__ */ P.createElement(Yt, {
    zIndex: et.label
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(O, "-tick-labels"),
    ref: t
  }, Q)), Z.length > 0 && /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(O, "-tick-lines")
  }, Z));
}), P5 = /* @__PURE__ */ ct((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: o,
    hide: a,
    ticks: l,
    axisType: c,
    axisId: s
  } = e, u = p5(e, f5), [d, p] = W(""), [h, g] = W(""), v = ve(null);
  Iy(t, () => ({
    getCalculatedWidth: () => {
      var m;
      return l5({
        ticks: v.current,
        label: (m = e.labelRef) === null || m === void 0 ? void 0 : m.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var y = ke((m) => {
    if (m) {
      var x = m.getElementsByClassName("recharts-cartesian-axis-tick-value");
      v.current = x;
      var b = x[0];
      if (b) {
        var w = window.getComputedStyle(b), S = w.fontSize, O = w.letterSpacing;
        (S !== d || O !== h) && (p(S), g(O));
      }
    }
  }, [d, h]);
  return a || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ P.createElement(Yt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(pt, {
    className: _e("recharts-cartesian-axis", o)
  }, /* @__PURE__ */ P.createElement(m5, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: Kt(e)
  }), /* @__PURE__ */ P.createElement(O5, {
    ref: y,
    axisType: c,
    events: u,
    fontSize: d,
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
    axisId: s
  }), /* @__PURE__ */ P.createElement(aI, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ P.createElement(gI, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), Vd = /* @__PURE__ */ P.forwardRef((e, t) => {
  var r = At(e, Or);
  return /* @__PURE__ */ P.createElement(P5, jn({}, r, {
    ref: t
  }));
});
Vd.displayName = "CartesianAxis";
var C5 = ["x1", "y1", "x2", "y2", "key"], k5 = ["offset"], _5 = ["xAxisId", "yAxisId"], E5 = ["xAxisId", "yAxisId"];
function fy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fy(Object(r), !0).forEach(function(n) {
      A5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A5(e, t, r) {
  return (t = T5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T5(e) {
  var t = I5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sn() {
  return sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sn.apply(null, arguments);
}
function Ba(e, t) {
  if (e == null) return {};
  var r, n, i = M5(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function M5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var D5 = (e) => {
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
function R1(e) {
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
      y2: c,
      key: s
    } = r, u = Ba(r, C5), d = (i = Kt(u)) !== null && i !== void 0 ? i : {}, {
      offset: p
    } = d, h = Ba(d, k5);
    n = /* @__PURE__ */ P.createElement("line", sn({}, h, {
      x1: o,
      y1: a,
      x2: l,
      y2: c,
      fill: "none",
      key: s
    }));
  }
  return n;
}
function N5(e) {
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
  } = e, l = Ba(e, _5), c = i.map((s, u) => {
    var d = ft(ft({}, l), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(R1, {
      key: "line-".concat(u),
      option: n,
      lineItemProps: d
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function R5(e) {
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
  } = e, l = Ba(e, E5), c = i.map((s, u) => {
    var d = ft(ft({}, l), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(R1, {
      option: n,
      lineItemProps: d,
      key: "line-".concat(u)
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function $5(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: o,
    height: a,
    horizontalPoints: l,
    horizontal: c = !0
  } = e;
  if (!c || !t || !t.length || l == null)
    return null;
  var s = l.map((d) => Math.round(d + i - i)).sort((d, p) => d - p);
  i !== s[0] && s.unshift(0);
  var u = s.map((d, p) => {
    var h = s[p + 1], g = h == null, v = g ? i + a - d : h - d;
    if (v <= 0)
      return null;
    var y = p % t.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(p),
      y: d,
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
function z5(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: o,
    width: a,
    height: l,
    verticalPoints: c
  } = e;
  if (!t || !r || !r.length)
    return null;
  var s = c.map((d) => Math.round(d + i - i)).sort((d, p) => d - p);
  i !== s[0] && s.unshift(0);
  var u = s.map((d, p) => {
    var h = s[p + 1], g = h == null, v = g ? i + a - d : h - d;
    if (v <= 0)
      return null;
    var y = p % r.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(p),
      x: d,
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
var L5 = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return lm(Fd(ft(ft(ft({}, Or), r), {}, {
    ticks: sm(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.left, o.left + o.width, t);
}, B5 = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return lm(Fd(ft(ft(ft({}, Or), r), {}, {
    ticks: sm(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.top, o.top + o.height, t);
}, W5 = {
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
  zIndex: et.grid
};
function Kd(e) {
  var t = gm(), r = ym(), n = vm(), i = ft(ft({}, At(e, W5)), {}, {
    x: ne(e.x) ? e.x : n.left,
    y: ne(e.y) ? e.y : n.top,
    width: ne(e.width) ? e.width : n.width,
    height: ne(e.height) ? e.height : n.height
  }), {
    xAxisId: o,
    yAxisId: a,
    x: l,
    y: c,
    width: s,
    height: u,
    syncWithTicks: d,
    horizontalValues: p,
    verticalValues: h
  } = i, g = vt(), v = oe((D) => lg(D, "xAxis", o, g)), y = oe((D) => lg(D, "yAxis", a, g));
  if (!dr(s) || !dr(u) || !ne(l) || !ne(c))
    return null;
  var m = i.verticalCoordinatesGenerator || L5, x = i.horizontalCoordinatesGenerator || B5, {
    horizontalPoints: b,
    verticalPoints: w
  } = i;
  if ((!b || !b.length) && typeof x == "function") {
    var S = p && p.length, O = x({
      yAxis: y ? ft(ft({}, y), {}, {
        ticks: S ? p : y.ticks
      }) : void 0,
      width: t ?? s,
      height: r ?? u,
      offset: n
    }, S ? !0 : d);
    ua(Array.isArray(O), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O, "]")), Array.isArray(O) && (b = O);
  }
  if ((!w || !w.length) && typeof m == "function") {
    var C = h && h.length, E = m({
      xAxis: v ? ft(ft({}, v), {}, {
        ticks: C ? h : v.ticks
      }) : void 0,
      width: t ?? s,
      height: r ?? u,
      offset: n
    }, C ? !0 : d);
    ua(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof E, "]")), Array.isArray(E) && (w = E);
  }
  return /* @__PURE__ */ P.createElement(Yt, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ P.createElement(D5, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ P.createElement($5, sn({}, i, {
    horizontalPoints: b
  })), /* @__PURE__ */ P.createElement(z5, sn({}, i, {
    verticalPoints: w
  })), /* @__PURE__ */ P.createElement(N5, sn({}, i, {
    offset: n,
    horizontalPoints: b,
    xAxis: v,
    yAxis: y
  })), /* @__PURE__ */ P.createElement(R5, sn({}, i, {
    offset: n,
    verticalPoints: w,
    xAxis: v,
    yAxis: y
  }))));
}
Kd.displayName = "CartesianGrid";
var F5 = {}, $1 = ht({
  name: "errorBars",
  initialState: F5,
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
  addErrorBar: o$,
  replaceErrorBar: a$,
  removeErrorBar: l$
} = $1.actions, V5 = $1.reducer, K5 = ["children"];
function H5(e, t) {
  if (e == null) return {};
  var r, n, i = q5(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function q5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var U5 = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, Y5 = /* @__PURE__ */ Et(U5);
function G5(e) {
  var {
    children: t
  } = e, r = H5(e, K5);
  return /* @__PURE__ */ P.createElement(Y5.Provider, {
    value: r
  }, t);
}
function Hd(e, t) {
  var r, n, i = oe((s) => Ir(s, e)), o = oe((s) => Mr(s, t)), a = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : Ye.allowDataOverflow, l = (n = o?.allowDataOverflow) !== null && n !== void 0 ? n : Ge.allowDataOverflow, c = a || l;
  return {
    needClip: c,
    needClipX: a,
    needClipY: l
  };
}
function z1(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = Wd(), {
    needClipX: o,
    needClipY: a,
    needClip: l
  } = Hd(t, r);
  if (!l || !i)
    return null;
  var {
    x: c,
    y: s,
    width: u,
    height: d
  } = i;
  return /* @__PURE__ */ P.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ P.createElement("rect", {
    x: o ? c : c - u / 2,
    y: a ? s : s - d / 2,
    width: o ? u : u * 2,
    height: a ? d : d * 2
  }));
}
function X5(e) {
  var t = Ui(e), r = 3, n = 2;
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
function vr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : A1;
}
function gr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : A1;
}
var L1 = (e, t, r) => qr(e, "xAxis", vr(e, t), r), B1 = (e, t, r) => Hr(e, "xAxis", vr(e, t), r), W1 = (e, t, r) => qr(e, "yAxis", gr(e, t), r), F1 = (e, t, r) => Hr(e, "yAxis", gr(e, t), r), Z5 = M([Se, L1, W1, B1, F1], (e, t, r, n, i) => hr(e, "xAxis") ? Un(t, n, !1) : Un(r, i, !1)), J5 = (e, t) => t, V1 = M([Al, J5], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), K1 = (e) => {
  var t = Se(e), r = hr(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, Q5 = (e, t) => {
  var r = K1(e);
  return r === "yAxis" ? gr(e, t) : vr(e, t);
}, eD = (e, t, r) => Ia(e, K1(e), Q5(e, t), r), tD = M([V1, eD], (e, t) => {
  var r;
  if (!(e == null || t == null)) {
    var {
      stackId: n
    } = e, i = bl(e);
    if (!(n == null || i == null)) {
      var o = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, a = o?.find((l) => l.key === i);
      if (a != null)
        return a.map((l) => [l[0], l[1]]);
    }
  }
}), rD = M([Se, L1, W1, B1, F1, tD, $m, Z5, V1, h_], (e, t, r, n, i, o, a, l, c, s) => {
  var {
    chartData: u,
    dataStartIndex: d,
    dataEndIndex: p
  } = a;
  if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || l == null)) {
    var {
      data: h
    } = c, g;
    if (h && h.length > 0 ? g = h : g = u?.slice(d, p + 1), g != null)
      return jD({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataStartIndex: d,
        areaSettings: c,
        stackedData: o,
        displayedData: g,
        chartBaseValue: s,
        bandSize: l
      });
  }
}), nD = ["id"], iD = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pn.apply(null, arguments);
}
function H1(e, t) {
  if (e == null) return {};
  var r, n, i = oD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function oD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function py(e, t) {
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
    t % 2 ? py(Object(r), !0).forEach(function(n) {
      aD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : py(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function aD(e, t, r) {
  return (t = lD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lD(e) {
  var t = sD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wa(e, t) {
  return e && e !== "none" ? e : t;
}
var cD = (e) => {
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
    color: Wa(n, i),
    value: nl(r, t),
    payload: e
  }];
}, uD = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: o,
    name: a,
    hide: l,
    unit: c,
    tooltipType: s,
    id: u
  } = e, d = {
    dataDefinedOnItem: r,
    getPosition: On,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: o,
      dataKey: t,
      nameKey: void 0,
      name: nl(a, t),
      hide: l,
      type: s,
      color: Wa(n, o),
      unit: c,
      graphicalItemId: u
    }
  };
  return /* @__PURE__ */ P.createElement(P1, {
    tooltipEntrySettings: d
  });
});
function dD(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: i,
    dot: o,
    dataKey: a
  } = n, l = Kt(n);
  return /* @__PURE__ */ P.createElement(hM, {
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
function fD(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = n.map((o) => {
    var a, l, c = {
      x: (a = o.x) !== null && a !== void 0 ? a : 0,
      y: (l = o.y) !== null && l !== void 0 ? l : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return Wn(Wn({}, c), {}, {
      value: o.value,
      payload: o.payload,
      parentViewBox: void 0,
      viewBox: c,
      fill: void 0
    });
  });
  return /* @__PURE__ */ P.createElement(v1, {
    value: t ? i : void 0
  }, r);
}
function hy(e) {
  var {
    points: t,
    baseLine: r,
    needClip: n,
    clipPathId: i,
    props: o
  } = e, {
    layout: a,
    type: l,
    stroke: c,
    connectNulls: s,
    isRange: u
  } = o, {
    id: d
  } = o, p = H1(o, nD), h = Kt(p), g = bt(p);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, t?.length > 1 && /* @__PURE__ */ P.createElement(pt, {
    clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0
  }, /* @__PURE__ */ P.createElement(_i, pn({}, g, {
    id: d,
    points: t,
    connectNulls: s,
    type: l,
    baseLine: r,
    layout: a,
    stroke: "none",
    className: "recharts-area-area"
  })), c !== "none" && /* @__PURE__ */ P.createElement(_i, pn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: s,
    fill: "none",
    points: t
  })), c !== "none" && u && Array.isArray(r) && /* @__PURE__ */ P.createElement(_i, pn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: s,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ P.createElement(dD, {
    points: t,
    props: p,
    clipPathId: i
  }));
}
function pD(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.y, c = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!he(l) || !he(c))
    return null;
  var s = n * Math.abs(l - c), u = Math.max(...o.map((d) => d.x || 0));
  return ne(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((d) => d.x || 0), u)), ne(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: 0,
    y: l < c ? l : l - s,
    width: u + (a ? parseInt("".concat(a), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function hD(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.x, c = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!he(l) || !he(c))
    return null;
  var s = n * Math.abs(l - c), u = Math.max(...o.map((d) => d.y || 0));
  return ne(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((d) => d.y || 0), u)), ne(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: l < c ? l : l - s,
    y: 0,
    width: s,
    height: Math.floor(u + (a ? parseInt("".concat(a), 10) : 1))
  }) : null;
}
function vD(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: i,
    strokeWidth: o
  } = e;
  return r === "vertical" ? /* @__PURE__ */ P.createElement(pD, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  }) : /* @__PURE__ */ P.createElement(hD, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  });
}
function gD(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  } = e, {
    points: a,
    baseLine: l,
    isAnimationActive: c,
    animationBegin: s,
    animationDuration: u,
    animationEasing: d,
    onAnimationStart: p,
    onAnimationEnd: h
  } = n, g = er(() => ({
    points: a,
    baseLine: l
  }), [a, l]), v = pl(g, "recharts-area-"), y = $u(), [m, x] = W(!1), b = !m, w = ke(() => {
    typeof h == "function" && h(), x(!1);
  }, [h]), S = ke(() => {
    typeof p == "function" && p(), x(!0);
  }, [p]);
  if (y == null)
    return null;
  var O = i.current, C = o.current;
  return /* @__PURE__ */ P.createElement(fD, {
    showLabels: b,
    points: a
  }, n.children, /* @__PURE__ */ P.createElement(fl, {
    animationId: v,
    begin: s,
    duration: u,
    isActive: c,
    easing: d,
    onAnimationEnd: w,
    onAnimationStart: S,
    key: v
  }, (E) => {
    if (O) {
      var D = O.length / a.length, I = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        E === 1 ? a : a.map((k, V) => {
          var R = Math.floor(V * D);
          if (O[R]) {
            var q = O[R];
            return Wn(Wn({}, k), {}, {
              x: $e(q.x, k.x, E),
              y: $e(q.y, k.y, E)
            });
          }
          return k;
        })
      ), $;
      return ne(l) ? $ = $e(C, l, E) : ze(l) || Zt(l) ? $ = $e(C, 0, E) : $ = l.map((k, V) => {
        var R = Math.floor(V * D);
        if (Array.isArray(C) && C[R]) {
          var q = C[R];
          return Wn(Wn({}, k), {}, {
            x: $e(q.x, k.x, E),
            y: $e(q.y, k.y, E)
          });
        }
        return k;
      }), E > 0 && (i.current = I, o.current = $), /* @__PURE__ */ P.createElement(hy, {
        points: I,
        baseLine: $,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return E > 0 && (i.current = a, o.current = l), /* @__PURE__ */ P.createElement(pt, null, c && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ P.createElement(vD, {
      alpha: E,
      points: a,
      baseLine: l,
      layout: y,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ P.createElement(pt, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ P.createElement(hy, {
      points: a,
      baseLine: l,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ P.createElement(y1, {
    label: n.label
  }));
}
function yD(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, i = ve(null), o = ve();
  return /* @__PURE__ */ P.createElement(gD, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  });
}
class mD extends Dy {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: i,
      top: o,
      left: a,
      needClip: l,
      xAxisId: c,
      yAxisId: s,
      width: u,
      height: d,
      id: p,
      baseLine: h,
      zIndex: g
    } = this.props;
    if (t)
      return null;
    var v = _e("recharts-area", i), y = p, {
      r: m,
      strokeWidth: x
    } = X5(r), b = w1(r), w = m * 2 + x, S = l ? "url(#clipPath-".concat(b ? "" : "dots-").concat(y, ")") : void 0;
    return /* @__PURE__ */ P.createElement(Yt, {
      zIndex: g
    }, /* @__PURE__ */ P.createElement(pt, {
      className: v
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(z1, {
      clipPathId: y,
      xAxisId: c,
      yAxisId: s
    }), !b && /* @__PURE__ */ P.createElement("clipPath", {
      id: "clipPath-dots-".concat(y)
    }, /* @__PURE__ */ P.createElement("rect", {
      x: a - w / 2,
      y: o - w / 2,
      width: u + w,
      height: d + w
    }))), /* @__PURE__ */ P.createElement(yD, {
      needClip: l,
      clipPathId: y,
      props: this.props
    })), /* @__PURE__ */ P.createElement(ay, {
      points: n,
      mainColor: Wa(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: S
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ P.createElement(ay, {
      points: h,
      mainColor: Wa(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: S
    }));
  }
}
var xD = {
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
  zIndex: et.area
};
function bD(e) {
  var t, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    connectNulls: a,
    dot: l,
    fill: c,
    fillOpacity: s,
    hide: u,
    isAnimationActive: d,
    legendType: p,
    stroke: h,
    xAxisId: g,
    yAxisId: v
  } = e, y = H1(e, iD), m = Pn(), x = Ub(), {
    needClip: b
  } = Hd(g, v), w = vt(), {
    points: S,
    isRange: O,
    baseLine: C
  } = (t = oe((V) => rD(V, e.id, w))) !== null && t !== void 0 ? t : {}, E = Wd();
  if (m !== "horizontal" && m !== "vertical" || E == null || x !== "AreaChart" && x !== "ComposedChart")
    return null;
  var {
    height: D,
    width: I,
    x: $,
    y: k
  } = E;
  return !S || !S.length ? null : /* @__PURE__ */ P.createElement(mD, pn({}, y, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    baseLine: C,
    connectNulls: a,
    dot: l,
    fill: c,
    fillOpacity: s,
    height: D,
    hide: u,
    layout: m,
    isAnimationActive: d,
    isRange: O,
    legendType: p,
    needClip: b,
    points: S,
    stroke: h,
    width: I,
    left: $,
    top: k,
    xAxisId: g,
    yAxisId: v
  }));
}
var wD = (e, t, r, n, i) => {
  var o = r ?? t;
  if (ne(o))
    return o;
  var a = e === "horizontal" ? i : n, l = a.scale.domain();
  if (a.type === "number") {
    var c = Math.max(l[0], l[1]), s = Math.min(l[0], l[1]);
    return o === "dataMin" ? s : o === "dataMax" || c < 0 ? c : Math.max(Math.min(l[0], l[1]), 0);
  }
  return o === "dataMin" ? l[0] : o === "dataMax" ? l[1] : l[0];
};
function jD(e) {
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
    yAxis: c,
    displayedData: s,
    dataStartIndex: u,
    xAxisTicks: d,
    yAxisTicks: p,
    bandSize: h
  } = e, g = i && i.length, v = wD(o, a, r, l, c), y = o === "horizontal", m = !1, x = s.map((w, S) => {
    var O, C, E, D;
    if (g)
      D = i[u + S];
    else {
      var I = He(w, n);
      Array.isArray(I) ? (D = I, m = !0) : D = [v, I];
    }
    var $ = (O = (C = D) === null || C === void 0 ? void 0 : C[1]) !== null && O !== void 0 ? O : null, k = $ == null || g && !t && He(w, n) == null;
    if (y) {
      var V;
      return {
        x: eh({
          axis: l,
          ticks: d,
          bandSize: h,
          entry: w,
          index: S
        }),
        y: k ? null : (V = c.scale.map($)) !== null && V !== void 0 ? V : null,
        value: D,
        payload: w
      };
    }
    return {
      x: k ? null : (E = l.scale.map($)) !== null && E !== void 0 ? E : null,
      y: eh({
        axis: c,
        ticks: p,
        bandSize: h,
        entry: w,
        index: S
      }),
      value: D,
      payload: w
    };
  }), b;
  return g || m ? b = x.map((w) => {
    var S, O = Array.isArray(w.value) ? w.value[0] : null;
    if (y) {
      var C;
      return {
        x: w.x,
        y: O != null && w.y != null && (C = c.scale.map(O)) !== null && C !== void 0 ? C : null,
        payload: w.payload
      };
    }
    return {
      x: O != null && (S = l.scale.map(O)) !== null && S !== void 0 ? S : null,
      y: w.y,
      payload: w.payload
    };
  }) : b = y ? c.scale.map(v) : l.scale.map(v), {
    points: x,
    baseLine: b ?? 0,
    isRange: m
  };
}
function SD(e) {
  var t = At(e, xD), r = vt();
  return /* @__PURE__ */ P.createElement(k1, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(C1, {
    legendPayload: cD(t)
  }), /* @__PURE__ */ P.createElement(uD, {
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
  }), /* @__PURE__ */ P.createElement(E1, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: cm(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ P.createElement(bD, pn({}, t, {
    id: n
  }))));
}
var au = /* @__PURE__ */ P.memo(SD, ro);
au.displayName = "Area";
var OD = process.env.NODE_ENV === "production", hc = "Invariant failed";
function PD(e, t) {
  if (OD)
    throw new Error(hc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(hc, ": ").concat(r) : hc;
  throw new Error(n);
}
function lu() {
  return lu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lu.apply(null, arguments);
}
function qd(e) {
  return /* @__PURE__ */ P.createElement(GI, lu({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, e));
}
var CD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (ne(t)) return t;
    var o = ne(n) || ze(n);
    return o ? t(n, i) : (o || PD(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")), r);
  };
}, kD = (e, t, r) => r, _D = (e, t) => t, ho = M([Al, _D], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), ED = M([ho], (e) => e?.maxBarSize), AD = (e, t, r, n) => n, TD = M([Se, Al, vr, gr, kD], (e, t, r, n, i) => t.filter((o) => e === "horizontal" ? o.xAxisId === r : o.yAxisId === n).filter((o) => o.isPanorama === i).filter((o) => o.hide === !1).filter((o) => o.type === "bar")), ID = (e, t, r) => {
  var n = Se(e), i = vr(e, t), o = gr(e, t);
  if (!(i == null || o == null))
    return n === "horizontal" ? Ia(e, "yAxis", o, r) : Ia(e, "xAxis", i, r);
}, MD = (e, t) => {
  var r = Se(e), n = vr(e, t), i = gr(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? ag(e, "xAxis", n) : ag(e, "yAxis", i);
}, DD = M([TD, p_, MD], DM), ND = (e, t, r) => {
  var n, i, o = ho(e, t);
  if (o == null)
    return 0;
  var a = vr(e, t), l = gr(e, t);
  if (a == null || l == null)
    return 0;
  var c = Se(e), s = Gm(e), {
    maxBarSize: u
  } = o, d = ze(u) ? s : u, p, h;
  return c === "horizontal" ? (p = qr(e, "xAxis", a, r), h = Hr(e, "xAxis", a, r)) : (p = qr(e, "yAxis", l, r), h = Hr(e, "yAxis", l, r)), (n = (i = Un(p, h, !0)) !== null && i !== void 0 ? i : d) !== null && n !== void 0 ? n : 0;
}, q1 = (e, t, r) => {
  var n = Se(e), i = vr(e, t), o = gr(e, t);
  if (!(i == null || o == null)) {
    var a, l;
    return n === "horizontal" ? (a = qr(e, "xAxis", i, r), l = Hr(e, "xAxis", i, r)) : (a = qr(e, "yAxis", o, r), l = Hr(e, "yAxis", o, r)), Un(a, l);
  }
}, RD = M([DD, Gm, f_, Xm, ND, q1, ED], LM), $D = (e, t, r) => {
  var n = vr(e, t);
  if (n != null)
    return qr(e, "xAxis", n, r);
}, zD = (e, t, r) => {
  var n = gr(e, t);
  if (n != null)
    return qr(e, "yAxis", n, r);
}, LD = (e, t, r) => {
  var n = vr(e, t);
  if (n != null)
    return Hr(e, "xAxis", n, r);
}, BD = (e, t, r) => {
  var n = gr(e, t);
  if (n != null)
    return Hr(e, "yAxis", n, r);
}, WD = M([RD, ho], WM), FD = M([ID, ho], BM), VD = M([rt, Du, $D, zD, LD, BD, WD, Se, $m, q1, FD, ho, AD], (e, t, r, n, i, o, a, l, c, s, u, d, p) => {
  var {
    chartData: h,
    dataStartIndex: g,
    dataEndIndex: v
  } = c;
  if (!(d == null || a == null || t == null || l !== "horizontal" && l !== "vertical" || r == null || n == null || i == null || o == null || s == null)) {
    var {
      data: y
    } = d, m;
    if (y != null && y.length > 0 ? m = y : m = h?.slice(g, v + 1), m != null)
      return y8({
        layout: l,
        barSettings: d,
        pos: a,
        parentViewBox: t,
        bandSize: s,
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
}), KD = ["index"];
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, su.apply(null, arguments);
}
function HD(e, t) {
  if (e == null) return {};
  var r, n, i = qD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function qD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var U1 = /* @__PURE__ */ Et(void 0), UD = (e) => {
  var t = qt(U1);
  if (t != null)
    return t.stackId;
  if (e != null)
    return cm(e);
}, YD = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), GD = (e) => {
  var t = qt(U1);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(YD(r, e), ")");
  }
}, Y1 = (e) => {
  var {
    index: t
  } = e, r = HD(e, KD), n = GD(t);
  return /* @__PURE__ */ P.createElement(pt, su({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, XD = ["onMouseEnter", "onMouseLeave", "onClick"], ZD = ["value", "background", "tooltipPosition"], JD = ["id"], QD = ["onMouseEnter", "onClick", "onMouseLeave"];
function Ur() {
  return Ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ur.apply(null, arguments);
}
function vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vy(Object(r), !0).forEach(function(n) {
      e8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e8(e, t, r) {
  return (t = t8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t8(e) {
  var t = r8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fa(e, t) {
  if (e == null) return {};
  var r, n, i = n8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function n8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var i8 = (e) => {
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
    value: nl(r, t),
    payload: e
  }];
}, o8 = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: o,
    hide: a,
    unit: l,
    tooltipType: c,
    id: s
  } = e, u = {
    dataDefinedOnItem: void 0,
    getPosition: On,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: nl(o, t),
      hide: a,
      type: c,
      color: i,
      unit: l,
      graphicalItemId: s
    }
  };
  return /* @__PURE__ */ P.createElement(P1, {
    tooltipEntrySettings: u
  });
});
function a8(e) {
  var t = oe(wn), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: o
  } = e, {
    onMouseEnter: a,
    onMouseLeave: l,
    onClick: c
  } = o, s = Fa(o, XD), u = j1(a, n, o.id), d = S1(l), p = O1(c, n, o.id);
  if (!i || r == null)
    return null;
  var h = Ui(i);
  return /* @__PURE__ */ P.createElement(Yt, {
    zIndex: FM(i, et.barBackground)
  }, r.map((g, v) => {
    var {
      value: y,
      background: m,
      tooltipPosition: x
    } = g, b = Fa(g, ZD);
    if (!m)
      return null;
    var w = u(g, v), S = d(g, v), O = p(g, v), C = mt(mt(mt(mt(mt({
      option: i,
      isActive: String(v) === t
    }, b), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, m), h), Pu(s, g, v)), {}, {
      onMouseEnter: w,
      onMouseLeave: S,
      onClick: O,
      dataKey: n,
      index: v,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ P.createElement(qd, Ur({
      key: "background-bar-".concat(v)
    }, C));
  }));
}
function l8(e) {
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
    return mt(mt({}, a), {}, {
      value: o.value,
      payload: o.payload,
      parentViewBox: o.parentViewBox,
      viewBox: a,
      fill: o.fill
    });
  });
  return /* @__PURE__ */ P.createElement(v1, {
    value: t ? i : void 0
  }, r);
}
function s8(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: o,
    dataKey: a
  } = e, l = oe(wn), c = oe(Kb), s = r && String(i.originalDataIndex) === l && (c == null || a === c), [u, d] = W(!1), [p, h] = W(!1);
  Oe(() => {
    var b;
    return s ? (d(!0), b = requestAnimationFrame(() => {
      h(!0);
    })) : h(!1), () => {
      cancelAnimationFrame(b);
    };
  }, [s]);
  var g = ke(() => {
    s || d(!1);
  }, [s]), v = s && p, y = s || u, m;
  s ? r === !0 ? m = t : m = r : m = t;
  var x = /* @__PURE__ */ P.createElement(qd, Ur({}, n, {
    name: String(n.name)
  }, i, {
    isActive: v,
    option: m,
    index: o,
    dataKey: a,
    onTransitionEnd: g
  }));
  return y ? /* @__PURE__ */ P.createElement(Yt, {
    zIndex: et.activeBar
  }, /* @__PURE__ */ P.createElement(Y1, {
    index: i.originalDataIndex
  }, x)) : x;
}
function c8(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: o
  } = e;
  return /* @__PURE__ */ P.createElement(qd, Ur({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: o
  }));
}
function u8(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = Kt(n)) !== null && t !== void 0 ? t : {}, {
    id: o
  } = i, a = Fa(i, JD), {
    shape: l,
    dataKey: c,
    activeBar: s
  } = n, {
    onMouseEnter: u,
    onClick: d,
    onMouseLeave: p
  } = n, h = Fa(n, QD), g = j1(u, c, o), v = S1(p), y = O1(d, c, o);
  return r ? /* @__PURE__ */ P.createElement(P.Fragment, null, r.map((m, x) => /* @__PURE__ */ P.createElement(Y1, Ur({
    index: m.originalDataIndex,
    key: "rectangle-".concat(m?.x, "-").concat(m?.y, "-").concat(m?.value, "-").concat(x),
    className: "recharts-bar-rectangle"
  }, Pu(h, m, x), {
    onMouseEnter: g(m, x),
    onMouseLeave: v(m, x),
    onClick: y(m, x)
  }), s ? /* @__PURE__ */ P.createElement(s8, {
    shape: l,
    activeBar: s,
    baseProps: a,
    entry: m,
    index: x,
    dataKey: c
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
    /* @__PURE__ */ P.createElement(c8, {
      shape: l,
      baseProps: a,
      entry: m,
      index: x,
      dataKey: c
    })
  )))) : null;
}
function d8(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: o,
    animationBegin: a,
    animationDuration: l,
    animationEasing: c,
    onAnimationEnd: s,
    onAnimationStart: u
  } = t, d = r.current, p = pl(t, "recharts-bar-"), [h, g] = W(!1), v = !h, y = ke(() => {
    typeof s == "function" && s(), g(!1);
  }, [s]), m = ke(() => {
    typeof u == "function" && u(), g(!0);
  }, [u]);
  return /* @__PURE__ */ P.createElement(l8, {
    showLabels: v,
    rects: n
  }, /* @__PURE__ */ P.createElement(fl, {
    animationId: p,
    begin: a,
    duration: l,
    isActive: o,
    easing: c,
    onAnimationEnd: y,
    onAnimationStart: m,
    key: p
  }, (x) => {
    var b = x === 1 ? n : n?.map((w, S) => {
      var O = d && d[S];
      if (O)
        return mt(mt({}, w), {}, {
          x: $e(O.x, w.x, x),
          y: $e(O.y, w.y, x),
          width: $e(O.width, w.width, x),
          height: $e(O.height, w.height, x)
        });
      if (i === "horizontal") {
        var C = $e(0, w.height, x), E = $e(w.stackedBarStart, w.y, x);
        return mt(mt({}, w), {}, {
          y: E,
          height: C
        });
      }
      var D = $e(0, w.width, x), I = $e(w.stackedBarStart, w.x, x);
      return mt(mt({}, w), {}, {
        width: D,
        x: I
      });
    });
    return x > 0 && (r.current = b ?? null), b == null ? null : /* @__PURE__ */ P.createElement(pt, null, /* @__PURE__ */ P.createElement(u8, {
      props: t,
      data: b
    }));
  }), /* @__PURE__ */ P.createElement(y1, {
    label: t.label
  }), t.children);
}
function f8(e) {
  var t = ve(null);
  return /* @__PURE__ */ P.createElement(d8, {
    previousRectanglesRef: t,
    props: e
  });
}
var G1 = 0, p8 = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // getValueByDataKey does not validate the output type
    errorVal: He(e, t)
  };
};
class h8 extends Dy {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: o,
      yAxisId: a,
      needClip: l,
      background: c,
      id: s
    } = this.props;
    if (t || r == null)
      return null;
    var u = _e("recharts-bar", i), d = s;
    return /* @__PURE__ */ P.createElement(pt, {
      className: u,
      id: s
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(z1, {
      clipPathId: d,
      xAxisId: o,
      yAxisId: a
    })), /* @__PURE__ */ P.createElement(pt, {
      className: "recharts-bar-rectangles",
      clipPath: l ? "url(#clipPath-".concat(d, ")") : void 0
    }, /* @__PURE__ */ P.createElement(a8, {
      data: r,
      dataKey: n,
      background: c,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ P.createElement(f8, this.props)));
  }
}
var v8 = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: G1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: et.bar
};
function g8(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: o,
    activeBar: a,
    animationBegin: l,
    animationDuration: c,
    animationEasing: s,
    isAnimationActive: u
  } = e, {
    needClip: d
  } = Hd(t, r), p = Pn(), h = vt(), g = AI(e.children, zd), v = oe((x) => VD(x, e.id, h, g));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var y, m = v?.[0];
  return m == null || m.height == null || m.width == null ? y = 0 : y = p === "vertical" ? m.height / 2 : m.width / 2, /* @__PURE__ */ P.createElement(G5, {
    xAxisId: t,
    yAxisId: r,
    data: v,
    dataPointFormatter: p8,
    errorBarOffset: y
  }, /* @__PURE__ */ P.createElement(h8, Ur({}, e, {
    layout: p,
    needClip: d,
    data: v,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: o,
    activeBar: a,
    animationBegin: l,
    animationDuration: c,
    animationEasing: s,
    isAnimationActive: u
  })));
}
function y8(e) {
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
    yAxis: c,
    xAxisTicks: s,
    yAxisTicks: u,
    stackedData: d,
    displayedData: p,
    offset: h,
    cells: g,
    parentViewBox: v,
    dataStartIndex: y
  } = e, m = t === "horizontal" ? c : l, x = d ? m.scale.domain() : null, b = dP({
    numericAxis: m
  }), w = m.scale.map(b);
  return p.map((S, O) => {
    var C, E, D, I, $, k;
    if (d) {
      var V = d[O + y];
      if (V == null)
        return null;
      C = aP(V, x);
    } else
      C = He(S, r), Array.isArray(C) || (C = [b, C]);
    var R = CD(n, G1)(C[1], O);
    if (t === "horizontal") {
      var q, Z = c.scale.map(C[0]), Q = c.scale.map(C[1]);
      if (Z == null || Q == null)
        return null;
      E = th({
        axis: l,
        ticks: s,
        bandSize: a,
        offset: o.offset,
        entry: S,
        index: O
      }), D = (q = Q ?? Z) !== null && q !== void 0 ? q : void 0, I = o.size;
      var N = Z - Q;
      if ($ = Zt(N) ? 0 : N, k = {
        x: E,
        y: h.top,
        width: I,
        height: h.height
      }, Math.abs(R) > 0 && Math.abs($) < Math.abs(R)) {
        var re = Pt($ || R) * (Math.abs(R) - Math.abs($));
        D -= re, $ += re;
      }
    } else {
      var te = l.scale.map(C[0]), z = l.scale.map(C[1]);
      if (te == null || z == null)
        return null;
      if (E = te, D = th({
        axis: c,
        ticks: u,
        bandSize: a,
        offset: o.offset,
        entry: S,
        index: O
      }), I = z - te, $ = o.size, k = {
        x: h.left,
        y: D,
        width: h.width,
        height: $
      }, Math.abs(R) > 0 && Math.abs(I) < Math.abs(R)) {
        var B = Pt(I || R) * (Math.abs(R) - Math.abs(I));
        I += B;
      }
    }
    if (E == null || D == null || I == null || $ == null || !i && (I === 0 || $ === 0))
      return null;
    var L = mt(mt({}, S), {}, {
      stackedBarStart: w,
      x: E,
      y: D,
      width: I,
      height: $,
      value: d ? C : C[1],
      payload: S,
      background: k,
      tooltipPosition: {
        x: E + I / 2,
        y: D + $ / 2
      },
      parentViewBox: v,
      originalDataIndex: O
    }, g && g[O] && g[O].props);
    return L;
  }).filter(Boolean);
}
function m8(e) {
  var t = At(e, v8), r = UD(t.stackId), n = vt();
  return /* @__PURE__ */ P.createElement(k1, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(C1, {
    legendPayload: i8(t)
  }), /* @__PURE__ */ P.createElement(o8, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ P.createElement(E1, {
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
  }), /* @__PURE__ */ P.createElement(Yt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(g8, Ur({}, t, {
    id: i
  })))));
}
var cu = /* @__PURE__ */ P.memo(m8, ro);
cu.displayName = "Bar";
var x8 = ["domain", "range"], b8 = ["domain", "range"];
function gy(e, t) {
  if (e == null) return {};
  var r, n, i = w8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function w8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function yy(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function X1(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = gy(e, x8), {
    domain: o,
    range: a
  } = t, l = gy(t, b8);
  return !yy(r, o) || !yy(n, a) ? !1 : ro(i, l);
}
var j8 = ["type"], S8 = ["dangerouslySetInnerHTML", "ticks", "scale"], O8 = ["id", "scale"];
function uu() {
  return uu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uu.apply(null, arguments);
}
function my(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      P8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P8(e, t, r) {
  return (t = C8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C8(e) {
  var t = k8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function k8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function du(e, t) {
  if (e == null) return {};
  var r, n, i = _8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function _8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function E8(e) {
  var t = Le(), r = ve(null), n = $u(), {
    type: i
  } = e, o = du(e, j8), a = yl(n, "xAxis", i), l = er(() => {
    if (a != null)
      return xy(xy({}, o), {}, {
        type: a
      });
  }, [o, a]);
  return _t(() => {
    l != null && (r.current === null ? t(xM(l)) : r.current !== l && t(bM({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), _t(() => () => {
    r.current && (t(wM(r.current)), r.current = null);
  }, [t]), null;
}
var A8 = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = oe(Du), i = vt(), o = "xAxis", a = oe((m) => jb(m, o, t, i)), l = oe((m) => xb(m, t)), c = oe((m) => G4(m, t)), s = oe((m) => Wx(m, t));
  if (l == null || c == null || s == null)
    return null;
  var {
    dangerouslySetInnerHTML: u,
    ticks: d,
    scale: p
  } = e, h = du(e, S8), {
    id: g,
    scale: v
  } = s, y = du(s, O8);
  return /* @__PURE__ */ P.createElement(Vd, uu({}, h, y, {
    x: c.x,
    y: c.y,
    width: l.width,
    height: l.height,
    className: _e("recharts-".concat(o, " ").concat(o), r),
    viewBox: n,
    ticks: a,
    axisType: o,
    axisId: t
  }));
}, T8 = {
  allowDataOverflow: Ye.allowDataOverflow,
  allowDecimals: Ye.allowDecimals,
  allowDuplicatedCategory: Ye.allowDuplicatedCategory,
  angle: Ye.angle,
  axisLine: Or.axisLine,
  height: Ye.height,
  hide: !1,
  includeHidden: Ye.includeHidden,
  interval: Ye.interval,
  label: !1,
  minTickGap: Ye.minTickGap,
  mirror: Ye.mirror,
  orientation: Ye.orientation,
  padding: Ye.padding,
  reversed: Ye.reversed,
  scale: Ye.scale,
  tick: Ye.tick,
  tickCount: Ye.tickCount,
  tickLine: Or.tickLine,
  tickSize: Or.tickSize,
  type: Ye.type,
  niceTicks: Ye.niceTicks,
  xAxisId: 0
}, I8 = (e) => {
  var t = At(e, T8);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(E8, {
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
  }), /* @__PURE__ */ P.createElement(A8, t));
}, Ud = /* @__PURE__ */ P.memo(I8, X1);
Ud.displayName = "XAxis";
var M8 = ["type"], D8 = ["dangerouslySetInnerHTML", "ticks", "scale"], N8 = ["id", "scale"];
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fu.apply(null, arguments);
}
function by(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? by(Object(r), !0).forEach(function(n) {
      R8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : by(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R8(e, t, r) {
  return (t = $8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $8(e) {
  var t = z8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pu(e, t) {
  if (e == null) return {};
  var r, n, i = L8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function L8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function B8(e) {
  var t = Le(), r = ve(null), n = $u(), {
    type: i
  } = e, o = pu(e, M8), a = yl(n, "yAxis", i), l = er(() => {
    if (a != null)
      return wy(wy({}, o), {}, {
        type: a
      });
  }, [a, o]);
  return _t(() => {
    l != null && (r.current === null ? t(jM(l)) : r.current !== l && t(SM({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), _t(() => () => {
    r.current && (t(OM(r.current)), r.current = null);
  }, [t]), null;
}
function W8(e) {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, o = ve(null), a = ve(null), l = oe(Du), c = vt(), s = Le(), u = "yAxis", d = oe((O) => bb(O, t)), p = oe((O) => Z4(O, t)), h = oe((O) => jb(O, u, t, c)), g = oe((O) => Fx(O, t));
  if (_t(() => {
    if (!(n !== "auto" || !d || Bd(i) || /* @__PURE__ */ Nt(i) || g == null)) {
      var O = o.current;
      if (O) {
        var C = O.getCalculatedWidth();
        Math.round(d.width) !== Math.round(C) && s(PM({
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
    d,
    s,
    i,
    t,
    n,
    g
  ]), d == null || p == null || g == null)
    return null;
  var {
    dangerouslySetInnerHTML: v,
    ticks: y,
    scale: m
  } = e, x = pu(e, D8), {
    id: b,
    scale: w
  } = g, S = pu(g, N8);
  return /* @__PURE__ */ P.createElement(Vd, fu({}, x, S, {
    ref: o,
    labelRef: a,
    x: p.x,
    y: p.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: d.width,
    height: d.height,
    className: _e("recharts-".concat(u, " ").concat(u), r),
    viewBox: l,
    ticks: h,
    axisType: u,
    axisId: t
  }));
}
var F8 = {
  allowDataOverflow: Ge.allowDataOverflow,
  allowDecimals: Ge.allowDecimals,
  allowDuplicatedCategory: Ge.allowDuplicatedCategory,
  angle: Ge.angle,
  axisLine: Or.axisLine,
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
  tickLine: Or.tickLine,
  tickSize: Or.tickSize,
  type: Ge.type,
  niceTicks: Ge.niceTicks,
  width: Ge.width,
  yAxisId: 0
}, V8 = (e) => {
  var t = At(e, F8);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(B8, {
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
  }), /* @__PURE__ */ P.createElement(W8, t));
}, Yd = /* @__PURE__ */ P.memo(V8, X1);
Yd.displayName = "YAxis";
var K8 = (e, t) => t, Gd = M([K8, Se, nx, it, Bb, Dr, xT, rt], CT);
function H8(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function Xd(e) {
  var t = e.currentTarget.getBoundingClientRect(), r, n;
  if (H8(e)) {
    var i = e.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var o = e.currentTarget;
    r = o.offsetWidth > 0 ? t.width / o.offsetWidth : 1, n = o.offsetHeight > 0 ? t.height / o.offsetHeight : 1;
  }
  var a = (l, c) => ({
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
    relativeY: Math.round((c - t.top) / n)
  });
  return "touches" in e ? Array.from(e.touches).map((l) => a(l.clientX, l.clientY)) : a(e.clientX, e.clientY);
}
var Z1 = Rt("mouseClick"), J1 = Ji();
J1.startListening({
  actionCreator: Z1,
  effect: (e, t) => {
    var r = e.payload, n = Gd(t.getState(), Xd(r));
    n?.activeIndex != null && t.dispatch(p3({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var hu = Rt("mouseMove"), Q1 = Ji(), $n = null, Zr = null, vc = null;
Q1.startListening({
  actionCreator: hu,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), {
      throttleDelay: i,
      throttledEvents: o
    } = n.eventSettings, a = o === "all" || o?.includes("mousemove");
    $n !== null && (cancelAnimationFrame($n), $n = null), Zr !== null && (typeof i != "number" || !a) && (clearTimeout(Zr), Zr = null), vc = Xd(r);
    var l = () => {
      var c = t.getState(), s = fo(c, c.tooltip.settings.shared);
      if (!vc) {
        $n = null, Zr = null;
        return;
      }
      if (s === "axis") {
        var u = Gd(c, vc);
        u?.activeIndex != null ? t.dispatch(Ab({
          activeIndex: u.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: u.activeCoordinate
        })) : t.dispatch(Eb());
      }
      $n = null, Zr = null;
    };
    if (!a) {
      l();
      return;
    }
    i === "raf" ? $n = requestAnimationFrame(l) : typeof i == "number" && Zr === null && (Zr = setTimeout(l, i));
  }
});
function q8(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var jy = {
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
}, ew = ht({
  name: "rootProps",
  initialState: jy,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : jy.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), U8 = ew.reducer, {
  updateOptions: Y8
} = ew.actions, G8 = null, X8 = {
  updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
}, tw = ht({
  name: "polarOptions",
  initialState: G8,
  reducers: X8
}), {
  updatePolarOptions: s$
} = tw.actions, Z8 = tw.reducer, rw = Rt("keyDown"), nw = Rt("focus"), iw = Rt("blur"), Dl = Ji(), zn = null, Jr = null, Wo = null;
Dl.startListening({
  actionCreator: rw,
  effect: (e, t) => {
    Wo = e.payload, zn !== null && (cancelAnimationFrame(zn), zn = null);
    var r = t.getState(), {
      throttleDelay: n,
      throttledEvents: i
    } = r.eventSettings, o = i === "all" || i.includes("keydown");
    Jr !== null && (typeof n != "number" || !o) && (clearTimeout(Jr), Jr = null);
    var a = () => {
      try {
        var l = t.getState(), c = l.rootProps.accessibilityLayer !== !1;
        if (!c)
          return;
        var {
          keyboardInteraction: s
        } = l.tooltip, u = Wo;
        if (u !== "ArrowRight" && u !== "ArrowLeft" && u !== "Enter")
          return;
        var d = Ei(s, bn(l), Jn(l), Qn(l)), p = d == null ? -1 : Number(d), h = !Number.isFinite(p) || p < 0, g = Dr(l), v = bn(l), y = fo(l, l.tooltip.settings.shared);
        if (u === "Enter") {
          if (h)
            return;
          var m = Na(l, y, "hover", String(s.index));
          t.dispatch(Da({
            active: !s.active,
            activeIndex: s.index,
            activeCoordinate: m
          }));
          return;
        }
        var x = r3(l), b = x === "left-to-right" ? 1 : -1, w = u === "ArrowRight" ? 1 : -1, S;
        if (h) {
          var O = Jn(l), C = Qn(l), E = w * b, D = (R) => ({
            active: !1,
            index: String(R),
            dataKey: void 0,
            graphicalItemId: void 0,
            coordinate: void 0
          });
          if (S = -1, E > 0) {
            for (var I = 0; I < v.length; I++)
              if (Ei(D(I), v, O, C) != null) {
                S = I;
                break;
              }
          } else
            for (var $ = v.length - 1; $ >= 0; $--)
              if (Ei(D($), v, O, C) != null) {
                S = $;
                break;
              }
          if (S < 0)
            return;
        } else {
          S = p + w * b;
          var k = g?.length || v.length;
          if (k === 0 || S >= k || S < 0)
            return;
        }
        var V = Na(l, y, "hover", String(S));
        t.dispatch(Da({
          active: !0,
          activeIndex: S.toString(),
          activeCoordinate: V
        }));
      } finally {
        zn = null, Jr = null;
      }
    };
    if (!o) {
      a();
      return;
    }
    n === "raf" ? zn = requestAnimationFrame(a) : typeof n == "number" && Jr === null && (a(), Wo = null, Jr = setTimeout(() => {
      Wo ? a() : (Jr = null, zn = null);
    }, n));
  }
});
Dl.startListening({
  actionCreator: nw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var o = "0", a = fo(r, r.tooltip.settings.shared), l = Na(r, a, "hover", String(o));
        t.dispatch(Da({
          active: !0,
          activeIndex: o,
          activeCoordinate: l
        }));
      }
    }
  }
});
Dl.startListening({
  actionCreator: iw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      i.active && t.dispatch(Da({
        active: !1,
        activeIndex: i.index,
        activeCoordinate: i.coordinate
      }));
    }
  }
});
function ow(e) {
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
var Wt = Rt("externalEvent"), aw = Ji(), Fo = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), gc = /* @__PURE__ */ new Map();
aw.startListening({
  actionCreator: Wt,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      var i = n.type, o = ow(n);
      gc.set(i, {
        handler: r,
        reactEvent: o
      });
      var a = Fo.get(i);
      a !== void 0 && (cancelAnimationFrame(a), Fo.delete(i));
      var l = t.getState(), {
        throttleDelay: c,
        throttledEvents: s
      } = l.eventSettings, u = s, d = u === "all" || u?.includes(i), p = Si.get(i);
      p !== void 0 && (typeof c != "number" || !d) && (clearTimeout(p), Si.delete(i));
      var h = () => {
        var y = gc.get(i);
        try {
          if (!y)
            return;
          var {
            handler: m,
            reactEvent: x
          } = y, b = t.getState(), w = {
            activeCoordinate: iT(b),
            activeDataKey: Kb(b),
            activeIndex: wn(b),
            activeLabel: Vb(b),
            activeTooltipIndex: wn(b),
            isTooltipActive: oT(b)
          };
          m && m(w, x);
        } finally {
          Fo.delete(i), Si.delete(i), gc.delete(i);
        }
      };
      if (!d) {
        h();
        return;
      }
      if (c === "raf") {
        var g = requestAnimationFrame(h);
        Fo.set(i, g);
      } else if (typeof c == "number") {
        if (!Si.has(i)) {
          h();
          var v = setTimeout(h, c);
          Si.set(i, v);
        }
      } else
        h();
    }
  }
});
var J8 = M([si], (e) => e.tooltipItemPayloads), Q8 = M([J8, (e, t) => t, (e, t, r) => r], (e, t, r) => {
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
}), lw = Rt("touchMove"), sw = Ji(), Qr = null, $r = null, Sy = null, Oi = null;
sw.startListening({
  actionCreator: lw,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      Oi = ow(r);
      var n = t.getState(), {
        throttleDelay: i,
        throttledEvents: o
      } = n.eventSettings, a = o === "all" || o.includes("touchmove");
      Qr !== null && (cancelAnimationFrame(Qr), Qr = null), $r !== null && (typeof i != "number" || !a) && (clearTimeout($r), $r = null), Sy = Array.from(r.touches).map((c) => Xd({
        clientX: c.clientX,
        clientY: c.clientY,
        currentTarget: r.currentTarget
      }));
      var l = () => {
        if (Oi != null) {
          var c = t.getState(), s = fo(c, c.tooltip.settings.shared);
          if (s === "axis") {
            var u, d = (u = Sy) === null || u === void 0 ? void 0 : u[0];
            if (d == null) {
              Qr = null, $r = null;
              return;
            }
            var p = Gd(c, d);
            p?.activeIndex != null && t.dispatch(Ab({
              activeIndex: p.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: p.activeCoordinate
            }));
          } else if (s === "item") {
            var h, g = Oi.touches[0];
            if (document.elementFromPoint == null || g == null)
              return;
            var v = document.elementFromPoint(g.clientX, g.clientY);
            if (!v || !v.getAttribute)
              return;
            var y = v.getAttribute(mP), m = (h = v.getAttribute(xP)) !== null && h !== void 0 ? h : void 0, x = _n(c).find((S) => S.id === m);
            if (y == null || x == null || m == null)
              return;
            var {
              dataKey: b
            } = x, w = Q8(c, y, m);
            t.dispatch(_b({
              activeDataKey: b,
              activeIndex: y,
              activeCoordinate: w,
              activeGraphicalItemId: m
            }));
          }
          Qr = null, $r = null;
        }
      };
      if (!a) {
        l();
        return;
      }
      i === "raf" ? Qr = requestAnimationFrame(l) : typeof i == "number" && $r === null && (l(), Oi = null, $r = setTimeout(() => {
        Oi ? l() : ($r = null, Qr = null);
      }, i));
    }
  }
});
var cw = {
  throttleDelay: "raf",
  throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
}, uw = ht({
  name: "eventSettings",
  initialState: cw,
  reducers: {
    setEventSettings: (e, t) => {
      t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents);
    }
  }
}), {
  setEventSettings: eN
} = uw.actions, tN = uw.reducer, rN = _0({
  brush: KM,
  cartesianAxis: CM,
  chartData: r6,
  errorBars: V5,
  eventSettings: tN,
  graphicalItems: iM,
  layout: tP,
  legend: dC,
  options: ZT,
  polarAxis: OI,
  polarOptions: Z8,
  referenceElements: YM,
  renderedTicks: d5,
  rootProps: U8,
  tooltip: h3,
  zIndex: LT
}), nN = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return CO({
    reducer: rN,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([J1.middleware, Q1.middleware, Dl.middleware, aw.middleware, sw.middleware]);
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
      return typeof n == "function" && (i = n()), i.concat(U0({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: q8
      },
      name: "recharts-".concat(r)
    }
  });
};
function iN(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = vt(), o = ve(null);
  if (i)
    return r;
  o.current == null && (o.current = nN(t, n));
  var a = ku;
  return /* @__PURE__ */ P.createElement(AC, {
    context: a,
    store: o.current
  }, r);
}
function oN(e) {
  var {
    layout: t,
    margin: r
  } = e, n = Le(), i = vt();
  return Oe(() => {
    i || (n(JO(t)), n(ZO(r)));
  }, [n, i, t, r]), null;
}
var aN = /* @__PURE__ */ gu(oN, ro);
function lN(e) {
  var t = Le();
  return Oe(() => {
    t(Y8(e));
  }, [t, e]), null;
}
var sN = (e) => {
  var t = Le();
  return Oe(() => {
    t(eN(e));
  }, [t, e]), null;
}, cN = /* @__PURE__ */ gu(sN, ro);
function Oy(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = ve(null), i = Le();
  return _t(() => (n.current && i($T({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i(zT({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ P.createElement("g", {
    tabIndex: -1,
    ref: n,
    className: "recharts-zIndex-layer_".concat(t)
  });
}
function Py(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = oe(_T);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((a) => a < 0), o = n.filter((a) => a > 0);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, i.map((a) => /* @__PURE__ */ P.createElement(Oy, {
    key: a,
    zIndex: a,
    isPanorama: r
  })), t, o.map((a) => /* @__PURE__ */ P.createElement(Oy, {
    key: a,
    zIndex: a,
    isPanorama: r
  })));
}
var uN = ["children"];
function dN(e, t) {
  if (e == null) return {};
  var r, n, i = fN(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function fN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
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
var pN = {
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
}, hN = /* @__PURE__ */ ct((e, t) => {
  var r = gm(), n = ym(), i = km();
  if (!dr(r) || !dr(n))
    return null;
  var {
    children: o,
    otherAttributes: a,
    title: l,
    desc: c
  } = e, s, u;
  return a != null && (typeof a.tabIndex == "number" ? s = a.tabIndex : s = i ? 0 : void 0, typeof a.role == "string" ? u = a.role : u = i ? "application" : void 0), /* @__PURE__ */ P.createElement(Ky, Va({}, a, {
    title: l,
    desc: c,
    role: u,
    tabIndex: s,
    width: r,
    height: n,
    style: pN,
    ref: t
  }), o);
}), vN = (e) => {
  var {
    children: t
  } = e, r = oe(ll);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: o,
    x: a
  } = r;
  return /* @__PURE__ */ P.createElement(Ky, {
    width: n,
    height: i,
    x: a,
    y: o
  }, t);
}, Cy = /* @__PURE__ */ ct((e, t) => {
  var {
    children: r
  } = e, n = dN(e, uN), i = vt();
  return i ? /* @__PURE__ */ P.createElement(vN, null, /* @__PURE__ */ P.createElement(Py, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ P.createElement(hN, Va({
    ref: t
  }, n), /* @__PURE__ */ P.createElement(Py, {
    isPanorama: !1
  }, r));
});
function gN() {
  var e = Le(), [t, r] = W(null), n = oe(yP);
  return Oe(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), o = i.width / t.offsetWidth;
      he(o) && o !== n && e(eP(o));
    }
  }, [t, e, n]), r;
}
function ky(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ky(Object(r), !0).forEach(function(n) {
      mN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ky(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mN(e, t, r) {
  return (t = xN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xN(e) {
  var t = bN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kr.apply(null, arguments);
}
var wN = () => (d6(), null);
function Ka(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var jN = /* @__PURE__ */ ct((e, t) => {
  var r, n, i = ve(null), [o, a] = W({
    containerWidth: Ka((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ka((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), l = ke((s, u) => {
    a((d) => {
      var p = Math.round(s), h = Math.round(u);
      return d.containerWidth === p && d.containerHeight === h ? d : {
        containerWidth: p,
        containerHeight: h
      };
    });
  }, []), c = ke((s) => {
    if (typeof t == "function" && t(s), i.current != null && (i.current.disconnect(), i.current = null), s != null && typeof ResizeObserver < "u") {
      var {
        width: u,
        height: d
      } = s.getBoundingClientRect();
      l(u, d);
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
      h.observe(s), i.current = h;
    }
  }, [t, l]);
  return Oe(() => () => {
    var s = i.current;
    s?.disconnect();
  }, [l]), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(eo, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: c
  }, e)));
}), SN = /* @__PURE__ */ ct((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, o] = W({
    containerWidth: Ka(r),
    containerHeight: Ka(n)
  }), a = ke((c, s) => {
    o((u) => {
      var d = Math.round(c), p = Math.round(s);
      return u.containerWidth === d && u.containerHeight === p ? u : {
        containerWidth: d,
        containerHeight: p
      };
    });
  }, []), l = ke((c) => {
    if (typeof t == "function" && t(c), c != null) {
      var {
        width: s,
        height: u
      } = c.getBoundingClientRect();
      a(s, u);
    }
  }, [t, a]);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(eo, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: l
  }, e)));
}), ON = /* @__PURE__ */ ct((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(eo, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: t
  }, e)));
}), PN = /* @__PURE__ */ ct((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ P.createElement(SN, Kr({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ P.createElement(ON, Kr({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(eo, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: t
  }, e)));
});
function CN(e) {
  return e ? jN : PN;
}
var kN = /* @__PURE__ */ ct((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: o,
    onContextMenu: a,
    onDoubleClick: l,
    onMouseDown: c,
    onMouseEnter: s,
    onMouseLeave: u,
    onMouseMove: d,
    onMouseUp: p,
    onTouchEnd: h,
    onTouchMove: g,
    onTouchStart: v,
    style: y,
    width: m,
    responsive: x,
    dispatchTouchEvents: b = !0
  } = e, w = ve(null), S = Le(), [O, C] = W(null), [E, D] = W(null), I = gN(), $ = Nu(), k = $?.width > 0 ? $.width : m, V = $?.height > 0 ? $.height : i, R = ke((G) => {
    I(G), typeof t == "function" && t(G), C(G), D(G), G != null && (w.current = G);
  }, [I, t, C, D]), q = ke((G) => {
    S(Z1(G)), S(Wt({
      handler: o,
      reactEvent: G
    }));
  }, [S, o]), Z = ke((G) => {
    S(hu(G)), S(Wt({
      handler: s,
      reactEvent: G
    }));
  }, [S, s]), Q = ke((G) => {
    S(Eb()), S(Wt({
      handler: u,
      reactEvent: G
    }));
  }, [S, u]), N = ke((G) => {
    S(hu(G)), S(Wt({
      handler: d,
      reactEvent: G
    }));
  }, [S, d]), re = ke(() => {
    S(nw());
  }, [S]), te = ke(() => {
    S(iw());
  }, [S]), z = ke((G) => {
    S(rw(G.key));
  }, [S]), B = ke((G) => {
    S(Wt({
      handler: a,
      reactEvent: G
    }));
  }, [S, a]), L = ke((G) => {
    S(Wt({
      handler: l,
      reactEvent: G
    }));
  }, [S, l]), K = ke((G) => {
    S(Wt({
      handler: c,
      reactEvent: G
    }));
  }, [S, c]), le = ke((G) => {
    S(Wt({
      handler: p,
      reactEvent: G
    }));
  }, [S, p]), me = ke((G) => {
    S(Wt({
      handler: v,
      reactEvent: G
    }));
  }, [S, v]), de = ke((G) => {
    b && S(lw(G)), S(Wt({
      handler: g,
      reactEvent: G
    }));
  }, [S, b, g]), ue = ke((G) => {
    S(Wt({
      handler: h,
      reactEvent: G
    }));
  }, [S, h]), X = CN(x);
  return /* @__PURE__ */ P.createElement(Jb.Provider, {
    value: O
  }, /* @__PURE__ */ P.createElement(V2.Provider, {
    value: E
  }, /* @__PURE__ */ P.createElement(X, {
    width: k ?? y?.width,
    height: V ?? y?.height,
    className: _e("recharts-wrapper", n),
    style: yN({
      position: "relative",
      cursor: "default",
      width: k,
      height: V
    }, y),
    onClick: q,
    onContextMenu: B,
    onDoubleClick: L,
    onFocus: re,
    onBlur: te,
    onKeyDown: z,
    onMouseDown: K,
    onMouseEnter: Z,
    onMouseLeave: Q,
    onMouseMove: N,
    onMouseUp: le,
    onTouchEnd: ue,
    onTouchMove: de,
    onTouchStart: me,
    ref: R
  }, /* @__PURE__ */ P.createElement(wN, null), r)));
}), _N = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function EN(e, t) {
  if (e == null) return {};
  var r, n, i = AN(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function AN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var TN = /* @__PURE__ */ ct((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: o,
    className: a,
    style: l,
    compact: c,
    title: s,
    desc: u
  } = e, d = EN(e, _N), p = Kt(d);
  return c ? /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(eo, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement(Cy, {
    otherAttributes: p,
    title: s,
    desc: u
  }, o)) : /* @__PURE__ */ P.createElement(kN, {
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
  }, /* @__PURE__ */ P.createElement(Cy, {
    otherAttributes: p,
    title: s,
    desc: u,
    ref: t
  }, /* @__PURE__ */ P.createElement(XM, null, o)));
});
function vu() {
  return vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vu.apply(null, arguments);
}
function _y(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function IN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _y(Object(r), !0).forEach(function(n) {
      MN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _y(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MN(e, t, r) {
  return (t = DN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DN(e) {
  var t = NN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RN = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, $N = IN({
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  layout: "horizontal",
  margin: RN,
  responsive: !1,
  reverseStackOrder: !1,
  stackOffset: "none",
  syncMethod: "index"
}, cw), dw = /* @__PURE__ */ ct(function(t, r) {
  var n, i = At(t.categoricalChartProps, $N), {
    chartName: o,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: c,
    categoricalChartProps: s
  } = t, u = {
    chartName: o,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: c,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ P.createElement(iN, {
    preloadedState: {
      options: u
    },
    reduxStoreName: (n = s.id) !== null && n !== void 0 ? n : o
  }, /* @__PURE__ */ P.createElement(VM, {
    chartData: s.data
  }), /* @__PURE__ */ P.createElement(aN, {
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ P.createElement(cN, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ P.createElement(lN, {
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
  }), /* @__PURE__ */ P.createElement(TN, vu({}, i, {
    ref: r
  })));
}), zN = ["axis", "item"], LN = /* @__PURE__ */ ct((e, t) => /* @__PURE__ */ P.createElement(dw, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: zN,
  tooltipPayloadSearcher: Qb,
  categoricalChartProps: e,
  ref: t
})), BN = ["axis"], WN = /* @__PURE__ */ ct((e, t) => /* @__PURE__ */ P.createElement(dw, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: BN,
  tooltipPayloadSearcher: Qb,
  categoricalChartProps: e,
  ref: t
}));
const FN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ f.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ f.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ f.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), VN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: /* @__PURE__ */ f.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), KN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ f.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ f.jsx("path", { d: "M7 16h10" })
] }), HN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ f.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ f.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), Ey = [
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
], qN = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: FN },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: VN },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: KN },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: HN }
}, UN = {
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
function fw(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function Ay(e, t) {
  let r = 0;
  e.forEach((i) => {
    Object.keys(t).forEach((o) => {
      const a = Number(i[o] ?? i[`${o}_Proj`] ?? 0);
      a > r && (r = a);
    });
  });
  const n = fw(r);
  return Math.max(40, n.length * 7 + 16);
}
const YN = ({ active: e, payload: t, label: r, metricsConfig: n }) => {
  if (e && t && t.length) {
    const i = t.filter((o) => {
      if (o.dataKey.endsWith("_Proj")) {
        const a = o.dataKey.replace("_Proj", "");
        if (t.some((l) => l.dataKey === a)) return !1;
      }
      return !0;
    });
    return /* @__PURE__ */ f.jsxs("div", { style: { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", zIndex: 50, position: "relative", color: "#0f172a" }, children: [
      /* @__PURE__ */ f.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid #f1f5f9", paddingBottom: "4px", fontSize: "14px", color: "#1e293b" }, children: r }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: i.map((o, a) => {
        const l = o.dataKey.endsWith("_Proj"), c = l ? o.dataKey.replace("_Proj", "") : o.dataKey, s = n[c] || { label: c, color: o.color };
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ f.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: o.color } }),
            /* @__PURE__ */ f.jsxs("span", { style: { color: "#475569", fontSize: "12px", fontWeight: 500 }, children: [
              s.label,
              " ",
              l && /* @__PURE__ */ f.jsx("span", { style: { color: "#94a3b8", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("span", { style: { color: "#0f172a", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
            o.value,
            null
          ] })
        ] }, a);
      }) })
    ] });
  }
  return null;
}, c$ = ({
  title: e = "Annual Patient Trends",
  // subtitle = 'Aug 2025 - Dec 2026 Volume & Projections',
  // dateRangeBadge = 'Aug 25 - Dec 26',
  data: t = Ey,
  xAxisKey: r = "month",
  metricsConfig: n = qN,
  // referenceLineValue = 200,
  // referenceLineLabel = 'Beds (200)',
  daysInMonthMap: i = UN
}) => {
  const o = t ?? Ey, [a, l] = W(() => {
    const s = {};
    return Object.keys(n).forEach((u) => s[u] = !0), s;
  }), c = (s) => {
    l((u) => ({
      ...u,
      [s]: !u[s]
    }));
  };
  return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "#ffffff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid #e2e8f0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "#0f172a" }, children: e }) }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(n).map(([s, u]) => {
        const d = a[s], p = u.icon;
        return /* @__PURE__ */ f.jsxs(
          "button",
          {
            onClick: () => c(s),
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
              backgroundColor: d ? `${u.color}18` : "transparent",
              color: d ? u.color : "#64748b",
              borderColor: d ? u.color : "#e2e8f0",
              transition: "all 0.2s ease-out"
            },
            children: [
              p && /* @__PURE__ */ f.jsx(
                p,
                {
                  size: 14,
                  style: { color: d ? u.color : "currentColor", opacity: d ? 1 : 0.5, transition: "all 0.2s ease-out" }
                }
              ),
              u.shortLabel
            ]
          },
          s
        );
      }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { padding: "16px", minHeight: 320, flexShrink: 0, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsx(hm, { width: "99%", height: 320, children: /* @__PURE__ */ f.jsxs(
      WN,
      {
        data: o,
        margin: { top: 20, right: 30, left: Ay(o, n) - 40, bottom: 0 },
        children: [
          /* @__PURE__ */ f.jsx("defs", { children: Object.entries(n).map(([s, u]) => /* @__PURE__ */ f.jsxs("linearGradient", { id: `color${s}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ f.jsx("stop", { offset: "5%", stopColor: u.color, stopOpacity: 0.3 }),
            /* @__PURE__ */ f.jsx("stop", { offset: "95%", stopColor: u.color, stopOpacity: 0 })
          ] }, `color${s}`)) }),
          /* @__PURE__ */ f.jsx(Kd, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: !1 }),
          /* @__PURE__ */ f.jsx(
            Ud,
            {
              dataKey: r,
              stroke: "#64748b",
              tick: { fill: "#64748b", fontSize: 10 },
              tickMargin: 8,
              axisLine: !1,
              tickLine: !1
            }
          ),
          /* @__PURE__ */ f.jsx(
            Yd,
            {
              stroke: "#64748b",
              tick: { fill: "#64748b", fontSize: 10 },
              tickMargin: 8,
              axisLine: !1,
              tickLine: !1,
              width: Ay(o, n),
              tickFormatter: fw
            }
          ),
          /* @__PURE__ */ f.jsx(r1, { content: /* @__PURE__ */ f.jsx(YN, { metricsConfig: n, daysInMonthMap: i }) }),
          Object.entries(n).map(([s, u]) => a[s] && /* @__PURE__ */ f.jsxs(t2, { children: [
            /* @__PURE__ */ f.jsx(
              au,
              {
                type: "monotone",
                dataKey: s,
                stroke: u.color,
                strokeWidth: 3,
                fillOpacity: 1,
                fill: `url(#color${s})`,
                dot: { r: 3, fill: "#ffffff", strokeWidth: 2, stroke: u.color },
                activeDot: { r: 5, strokeWidth: 0, fill: u.color },
                animationDuration: 1e3,
                animationEasing: "ease-in-out",
                children: /* @__PURE__ */ f.jsx(Sr, { dataKey: s, position: "top", offset: 6, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } })
              }
            ),
            /* @__PURE__ */ f.jsxs(
              au,
              {
                type: "monotone",
                dataKey: `${s}_Proj`,
                stroke: u.color,
                strokeWidth: 3,
                strokeDasharray: "4 4",
                fillOpacity: 0.3,
                fill: `url(#color${s})`,
                dot: { r: 3, fill: "#ffffff", strokeWidth: 2, stroke: u.color },
                activeDot: { r: 5, strokeWidth: 0, fill: u.color },
                animationDuration: 1e3,
                animationEasing: "ease-in-out",
                children: [
                  /* @__PURE__ */ f.jsx(Sr, { dataKey: `${s}_Proj`, position: "top", offset: 6, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } }),
                  /* @__PURE__ */ f.jsx(
                    Sr,
                    {
                      content: (d) => {
                        const { x: p, y: h, index: g } = d;
                        return g === o.length - 1 ? /* @__PURE__ */ f.jsx(
                          "text",
                          {
                            x: p + 10,
                            y: h,
                            fill: u.color,
                            fontSize: 11,
                            fontWeight: 700,
                            alignmentBaseline: "middle",
                            children: u.shortLabel
                          }
                        ) : null;
                      }
                    }
                  )
                ]
              }
            )
          ] }, s))
        ]
      }
    ) }) }),
    o.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0f172a" }, children: [
      /* @__PURE__ */ f.jsx("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: e }),
      /* @__PURE__ */ f.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", border: "1px solid #e2e8f0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ f.jsx("thead", { style: { fontSize: "10px", color: "#64748b", textTransform: "uppercase", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid #e2e8f0", width: "80px", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Metric" }),
          o.map((s, u) => {
            const d = Object.keys(n)[0], p = d && !s.hasOwnProperty(d) && s.hasOwnProperty(`${d}_Proj`);
            return /* @__PURE__ */ f.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: p ? "rgba(241, 245, 249, 0.5)" : "transparent" }, children: [
              /* @__PURE__ */ f.jsx("div", { style: { letterSpacing: "-0.05em" }, children: s[r] }),
              /* @__PURE__ */ f.jsx("div", { style: { marginTop: "2px" } })
            ] }, u);
          })
        ] }) }),
        /* @__PURE__ */ f.jsxs("tbody", { children: [
          Object.entries(n).map(([s, u]) => a[s] ? /* @__PURE__ */ f.jsxs("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#ffffff", zIndex: 10 }, children: u.shortLabel }),
            o.map((d, p) => {
              const h = d[s] ?? d[`${s}_Proj`], g = !d.hasOwnProperty(s) && d.hasOwnProperty(`${s}_Proj`);
              return /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: g ? "#64748b" : "#0f172a", backgroundColor: g ? "rgba(248, 250, 252, 0.3)" : "transparent", fontWeight: g ? 400 : 500 }, children: h !== void 0 ? h : "-" }, p);
            })
          ] }, s) : null),
          /* @__PURE__ */ f.jsxs("tr", { style: { borderTop: "2px solid #e2e8f0", backgroundColor: "#f8fafc", fontWeight: 700 }, children: [
            /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 8px", color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Total" }),
            o.map((s, u) => {
              const d = Object.keys(n).reduce((h, g) => a[g] ? h + Number(s[g] ?? s[`${g}_Proj`] ?? 0) : h, 0), p = Object.keys(n).every((h) => !s.hasOwnProperty(h) && s.hasOwnProperty(`${h}_Proj`));
              return /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: p ? "#64748b" : "#0f172a" }, children: d || "-" }, u);
            })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}, GN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ f.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ f.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ f.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), XN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: /* @__PURE__ */ f.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), ZN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ f.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ f.jsx("path", { d: "M7 16h10" })
] }), JN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ f.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ f.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), QN = [
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
], eR = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: GN },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: XN },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: ZN },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: JN }
}, tR = {
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
function pw(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function Ty(e, t) {
  let r = 0;
  e.forEach((i) => {
    Object.keys(t).forEach((o) => {
      const a = Number(i[o] ?? i[`${o}_Proj`] ?? 0);
      a > r && (r = a);
    });
  });
  const n = pw(r);
  return Math.max(40, n.length * 7 + 16);
}
const rR = ({ active: e, payload: t, label: r, metricsConfig: n }) => {
  if (!e || !t?.length) return null;
  const i = t.filter((o) => {
    if (o.dataKey.endsWith("_Proj")) {
      const a = o.dataKey.replace("_Proj", "");
      if (t.some((l) => l.dataKey === a)) return !1;
    }
    return !0;
  });
  return /* @__PURE__ */ f.jsxs("div", { style: { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)", zIndex: 50, position: "relative", color: "#0f172a" }, children: [
    /* @__PURE__ */ f.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid #f1f5f9", paddingBottom: "4px", fontSize: "14px", color: "#1e293b" }, children: r }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: i.map((o, a) => {
      const l = o.dataKey.endsWith("_Proj"), c = l ? o.dataKey.replace("_Proj", "") : o.dataKey, s = n[c] || { label: c, color: o.color };
      return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ f.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: o.color } }),
          /* @__PURE__ */ f.jsxs("span", { style: { color: "#475569", fontSize: "12px", fontWeight: 500 }, children: [
            s.label,
            " ",
            l && /* @__PURE__ */ f.jsx("span", { style: { color: "#94a3b8", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("span", { style: { color: "#0f172a", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
          o.value,
          " ",
          null
        ] })
      ] }, a);
    }) })
  ] });
}, nR = (e) => {
  const { x: t, y: r, width: n, height: i, fill: o, patternId: a } = e;
  return !i || i <= 0 ? null : /* @__PURE__ */ f.jsx("rect", { x: t, y: r, width: n, height: i, fill: `url(#${a})`, stroke: o, strokeWidth: 1.5, strokeDasharray: "4 2", opacity: 0.7 });
}, u$ = ({
  title: e = "Annual Patient Trends",
  // subtitle = 'Aug 2025 - Dec 2026 Volume & Projections',
  // dateRangeBadge = 'Aug 25 - Dec 26',
  data: t = QN,
  xAxisKey: r = "month",
  metricsConfig: n = eR,
  // referenceLineValue = 200,
  // referenceLineLabel = 'Beds (200)',
  daysInMonthMap: i = tR
}) => {
  const [o, a] = W(() => {
    const s = {};
    return Object.keys(n).forEach((u) => s[u] = !0), s;
  }), l = (s) => a((u) => ({ ...u, [s]: !u[s] })), c = Object.keys(n).filter((s) => o[s]);
  return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "#ffffff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid #e2e8f0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "#0f172a" }, children: e }) }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(n).map(([s, u]) => {
        const d = o[s], p = u.icon;
        return /* @__PURE__ */ f.jsxs(
          "button",
          {
            onClick: () => l(s),
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
              backgroundColor: d ? `${u.color}18` : "transparent",
              color: d ? u.color : "#64748b",
              borderColor: d ? u.color : "#e2e8f0",
              transition: "all 0.2s ease-out"
            },
            children: [
              p && /* @__PURE__ */ f.jsx(p, { size: 14, style: { color: d ? u.color : "currentColor", opacity: d ? 1 : 0.5, transition: "all 0.2s ease-out" } }),
              u.shortLabel
            ]
          },
          s
        );
      }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { padding: "16px", minHeight: 320, flexShrink: 0, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsx(hm, { width: "99%", height: 320, children: /* @__PURE__ */ f.jsxs(LN, { data: t, margin: { top: 20, right: 30, left: Ty(t, n) - 40, bottom: 0 }, barCategoryGap: "20%", barGap: 2, children: [
      /* @__PURE__ */ f.jsx("defs", { children: Object.entries(n).map(([s, u]) => /* @__PURE__ */ f.jsx("pattern", { id: `pat${s}`, patternUnits: "userSpaceOnUse", width: "6", height: "6", patternTransform: "rotate(45)", children: /* @__PURE__ */ f.jsx("rect", { width: "3", height: "6", fill: u.color, fillOpacity: 0.25 }) }, `pat${s}`)) }),
      /* @__PURE__ */ f.jsx(Kd, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: !1 }),
      /* @__PURE__ */ f.jsx(Ud, { dataKey: r, stroke: "#64748b", tick: { fill: "#64748b", fontSize: 10 }, tickMargin: 8, axisLine: !1, tickLine: !1 }),
      /* @__PURE__ */ f.jsx(
        Yd,
        {
          stroke: "#64748b",
          tick: { fill: "#64748b", fontSize: 10 },
          tickMargin: 8,
          axisLine: !1,
          tickLine: !1,
          width: Ty(t, n),
          tickFormatter: pw
        }
      ),
      /* @__PURE__ */ f.jsx(r1, { content: /* @__PURE__ */ f.jsx(rR, { metricsConfig: n, daysInMonthMap: i }) }),
      c.map((s) => {
        const u = n[s];
        return [
          /* @__PURE__ */ f.jsxs(cu, { dataKey: s, fill: u.color, radius: [3, 3, 0, 0], maxBarSize: 18, animationDuration: 1e3, animationEasing: "ease-in-out", children: [
            /* @__PURE__ */ f.jsx(Sr, { dataKey: s, position: "top", offset: 4, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } }),
            t.map((d, p) => /* @__PURE__ */ f.jsx(zd, { fill: u.color, fillOpacity: d[s] !== void 0 ? 1 : 0 }, p))
          ] }, s),
          /* @__PURE__ */ f.jsx(
            cu,
            {
              dataKey: `${s}_Proj`,
              maxBarSize: 18,
              animationDuration: 1e3,
              animationEasing: "ease-in-out",
              shape: (d) => /* @__PURE__ */ f.jsx(nR, { ...d, fill: u.color, patternId: `pat${s}` }),
              children: /* @__PURE__ */ f.jsx(Sr, { dataKey: `${s}_Proj`, position: "top", offset: 4, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } })
            },
            `${s}_Proj`
          )
        ];
      })
    ] }) }) }),
    t.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0f172a" }, children: [
      /* @__PURE__ */ f.jsx("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: e }),
      /* @__PURE__ */ f.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ f.jsx("thead", { style: { fontSize: "10px", color: "#64748b", textTransform: "uppercase", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid #e2e8f0", width: "80px", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Metric" }),
          t.map((s, u) => {
            const d = Object.keys(n)[0], p = d && !s.hasOwnProperty(d) && s.hasOwnProperty(`${d}_Proj`);
            return /* @__PURE__ */ f.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: p ? "rgba(241,245,249,0.5)" : "transparent" }, children: [
              /* @__PURE__ */ f.jsx("div", { style: { letterSpacing: "-0.05em" }, children: s[r] }),
              /* @__PURE__ */ f.jsx("div", { style: { marginTop: "2px" } })
            ] }, u);
          })
        ] }) }),
        /* @__PURE__ */ f.jsxs("tbody", { children: [
          Object.entries(n).map(([s, u]) => o[s] ? /* @__PURE__ */ f.jsxs("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#ffffff", zIndex: 10 }, children: u.shortLabel }),
            t.map((d, p) => {
              const h = d[s] ?? d[`${s}_Proj`], g = !d.hasOwnProperty(s) && d.hasOwnProperty(`${s}_Proj`);
              return /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: g ? "#64748b" : "#0f172a", backgroundColor: g ? "rgba(248,250,252,0.3)" : "transparent", fontWeight: g ? 400 : 500 }, children: h !== void 0 ? h : "-" }, p);
            })
          ] }, s) : null),
          /* @__PURE__ */ f.jsxs("tr", { style: { borderTop: "2px solid #e2e8f0", backgroundColor: "#f8fafc", fontWeight: 700 }, children: [
            /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 8px", color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Total" }),
            t.map((s, u) => {
              const d = Object.keys(n).reduce((h, g) => o[g] ? h + Number(s[g] ?? s[`${g}_Proj`] ?? 0) : h, 0), p = Object.keys(n).every((h) => !s.hasOwnProperty(h) && s.hasOwnProperty(`${h}_Proj`));
              return /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: p ? "#64748b" : "#0f172a" }, children: d || "-" }, u);
            })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}, iR = () => /* @__PURE__ */ f.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ f.jsx("rect", { x: "3", y: "12", width: "4", height: "9" }),
  /* @__PURE__ */ f.jsx("rect", { x: "10", y: "7", width: "4", height: "14" }),
  /* @__PURE__ */ f.jsx("rect", { x: "17", y: "3", width: "4", height: "18" })
] }), oR = () => /* @__PURE__ */ f.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ f.jsx("polyline", { points: "3 17 9 11 13 15 21 7" }) }), aR = () => /* @__PURE__ */ f.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ f.jsx("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
  /* @__PURE__ */ f.jsx("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
] }), lR = () => /* @__PURE__ */ f.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ f.jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ f.jsx("circle", { cx: "12", cy: "12", r: "4" })
] }), sR = [
  { type: "bar", label: "Bar", icon: /* @__PURE__ */ f.jsx(iR, {}) },
  { type: "line", label: "Line", icon: /* @__PURE__ */ f.jsx(oR, {}) },
  { type: "pie", label: "Pie", icon: /* @__PURE__ */ f.jsx(aR, {}) },
  { type: "donut", label: "Donut", icon: /* @__PURE__ */ f.jsx(lR, {}) }
], d$ = ({
  data: e = [],
  apis: t = [],
  activeEndpoint: r,
  onEndpointSelect: n,
  isLoading: i = !1,
  defaultChart: o = "bar",
  height: a = 220,
  defaultColor: l = "#003357"
}) => {
  const [c, s] = W(o);
  Oe(() => {
    !r && t.length > 0 && n?.(t[0].endpoint);
  }, []);
  const u = (h) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "5px 11px",
    borderRadius: "8px",
    fontSize: "11px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    border: h ? "1.5px solid #3b82f6" : "1.5px solid #e2e8f0",
    backgroundColor: h ? "#eff6ff" : "#ffffff",
    color: h ? "#2563eb" : "#94a3b8",
    boxShadow: h ? "0 1px 4px rgba(59,130,246,0.15)" : "none",
    transition: "all 0.18s ease-out"
  }), d = (h) => ({
    display: "flex",
    alignItems: "center",
    padding: "4px 12px",
    borderRadius: "6px",
    fontSize: "11px",
    fontWeight: 600,
    cursor: "pointer",
    border: "none",
    fontFamily: "inherit",
    background: h ? "linear-gradient(135deg,#6366f1,#4f46e5)" : "#f1f5f9",
    color: h ? "#ffffff" : "#64748b",
    boxShadow: h ? "0 2px 6px rgba(99,102,241,0.35)" : "none",
    transition: "all 0.18s ease-out",
    whiteSpace: "nowrap",
    letterSpacing: h ? "0.01em" : "normal"
  }), p = () => {
    if (i) return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: a, color: "#94a3b8", fontSize: 12, gap: 8 }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        width: 18,
        height: 18,
        border: "2px solid #e2e8f0",
        borderTopColor: l,
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite"
      } }),
      "Loading..."
    ] });
    if (!e.length) return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: a, color: "#94a3b8", fontSize: 13 }, children: r ? "No data" : "Select an endpoint above" });
    switch (c) {
      case "bar":
        return /* @__PURE__ */ f.jsx(j2, { data: e, height: a, defaultColor: l });
      case "line":
        return /* @__PURE__ */ f.jsx(b2, { data: e, height: a, defaultColor: l });
      case "pie":
        return /* @__PURE__ */ f.jsx(P2, { data: e });
      case "donut":
        return /* @__PURE__ */ f.jsx(I2, { data: e });
    }
  };
  return /* @__PURE__ */ f.jsxs("div", { style: { width: "100%", fontFamily: "sans-serif", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }, children: sR.map(({ type: h, label: g, icon: v }) => /* @__PURE__ */ f.jsxs("button", { onClick: () => s(h), style: u(c === h), children: [
        /* @__PURE__ */ f.jsx("span", { style: { display: "flex", opacity: c === h ? 1 : 0.5 }, children: v }),
        g
      ] }, h)) }),
      t.length > 0 && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }, children: t.map((h) => /* @__PURE__ */ f.jsx(
        "button",
        {
          onClick: () => n?.(h.endpoint),
          style: d(r === h.endpoint),
          children: h.label
        },
        h.endpoint
      )) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { width: "100%", boxSizing: "border-box" }, children: p() }),
    /* @__PURE__ */ f.jsx("style", { children: "@keyframes spin { to { transform: rotate(360deg); } }" })
  ] });
};
export {
  RR as AdvanceMapWidget,
  yR as AdvancePrescription,
  MR as AlertWidget,
  j2 as BarChart,
  xR as BubbleChart,
  fR as Button,
  CR as DataWidget,
  I2 as DonutChart,
  IR as FilterWidget,
  OR as GaugeWidget,
  bR as HeatMap,
  SR as KpiWidget,
  b2 as LineChart,
  _R as ListWidget,
  ER as MapWidget,
  TR as MediaWidget,
  d$ as MultiChart,
  Sf as NotionTable,
  hR as NotionTableWithLayout,
  P2 as PieChart,
  kR as PivotTable,
  PR as ProgressBar,
  vR as ScaffoldTable,
  wR as ScatterPlot,
  gR as SimplePrescription,
  jR as StackedChart,
  $R as StatGrid,
  mR as StatusWidget,
  pR as Table,
  AR as TextWidget,
  NR as Toaster,
  u$ as TrendBarChart,
  c$ as TrendLinechart,
  DR as showToast,
  Ue as useContainerSize
};
