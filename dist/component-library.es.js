import * as P from "react";
import Le, { useState as W, useEffect as Se, useRef as ve, useId as l2, useMemo as tr, useCallback as _e, isValidElement as Rt, forwardRef as ut, createContext as At, useContext as zt, useImperativeHandle as $0, useLayoutEffect as Et, cloneElement as ti, createElement as z0, Children as s2, memo as bu, PureComponent as L0, Fragment as c2 } from "react";
import { createPortal as B0 } from "react-dom";
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jo = { exports: {} }, fi = {};
var hf;
function u2() {
  if (hf) return fi;
  hf = 1;
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
  return fi.Fragment = t, fi.jsx = r, fi.jsxs = r, fi;
}
var pi = {};
var vf;
function d2() {
  return vf || (vf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(z) {
      if (z == null) return null;
      if (typeof z == "function")
        return z.$$typeof === D ? null : z.displayName || z.name || null;
      if (typeof z == "string") return z;
      switch (z) {
        case y:
          return "Fragment";
        case b:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case C:
          return "SuspenseList";
        case _:
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
          case x:
            return (z._context.displayName || "Context") + ".Consumer";
          case S:
            var B = z.render;
            return z = z.displayName, z || (z = B.displayName || B.name || "", z = z !== "" ? "ForwardRef(" + z + ")" : "ForwardRef"), z;
          case T:
            return B = z.displayName || null, B !== null ? B : e(z.type) || "Memo";
          case E:
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
        var L = B.error, H = typeof Symbol == "function" && Symbol.toStringTag && z[Symbol.toStringTag] || z.constructor.name || "Object";
        return L.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t(z);
      }
    }
    function n(z) {
      if (z === y) return "<>";
      if (typeof z == "object" && z !== null && z.$$typeof === E)
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
      if (F.call(z, "key")) {
        var B = Object.getOwnPropertyDescriptor(z, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return z.key !== void 0;
    }
    function l(z, B) {
      function L() {
        U || (U = !0, console.error(
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
      return J[z] || (J[z] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), z = this.props.ref, z !== void 0 ? z : null;
    }
    function s(z, B, L, H, le, me) {
      var de = L.ref;
      return z = {
        $$typeof: g,
        type: z,
        key: B,
        props: L,
        _owner: H
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
    function u(z, B, L, H, le, me) {
      var de = B.children;
      if (de !== void 0)
        if (H)
          if (N(de)) {
            for (H = 0; H < de.length; H++)
              f(de[H]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(de);
      if (F.call(B, "key")) {
        de = e(z);
        var ue = Object.keys(B).filter(function(X) {
          return X !== "key";
        });
        H = 0 < ue.length ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}", te[de + H] || (ue = 0 < ue.length ? "{" + ue.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          de,
          ue,
          de
        ), te[de + H] = !0);
      }
      if (de = null, L !== void 0 && (r(L), de = "" + L), a(B) && (r(B.key), de = "" + B.key), "key" in B) {
        L = {};
        for (var Z in B)
          Z !== "key" && (L[Z] = B[Z]);
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
    function f(z) {
      p(z) ? z._store && (z._store.validated = 1) : typeof z == "object" && z !== null && z.$$typeof === E && (z._payload.status === "fulfilled" ? p(z._payload.value) && z._payload.value._store && (z._payload.value._store.validated = 1) : z._store && (z._store.validated = 1));
    }
    function p(z) {
      return typeof z == "object" && z !== null && z.$$typeof === g;
    }
    var h = Le, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), w = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, N = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(z) {
        return z();
      }
    };
    var U, J = {}, $ = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), re = V(n(o)), te = {};
    pi.Fragment = y, pi.jsx = function(z, B, L) {
      var H = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        z,
        B,
        L,
        !1,
        H ? Error("react-stack-top-frame") : $,
        H ? V(n(z)) : re
      );
    }, pi.jsxs = function(z, B, L) {
      var H = 1e4 > k.recentlyCreatedOwnerStacks++;
      return u(
        z,
        B,
        L,
        !0,
        H ? Error("react-stack-top-frame") : $,
        H ? V(n(z)) : re
      );
    };
  })()), pi;
}
var gf;
function f2() {
  return gf || (gf = 1, process.env.NODE_ENV === "production" ? jo.exports = u2() : jo.exports = d2()), jo.exports;
}
var d = f2();
function RN({ children: e, onClick: t, color: r = "#007bff", textColor: n = "#fff" }) {
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
var W0 = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, yf = Le.createContext && /* @__PURE__ */ Le.createContext(W0), p2 = ["attr", "size", "title"];
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
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
function mf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mf(Object(r), !0).forEach(function(n) {
      g2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mf(Object(r)).forEach(function(n) {
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
function F0(e) {
  return e && e.map((t, r) => /* @__PURE__ */ Le.createElement(t.tag, Jo({
    key: r
  }, t.attr), F0(t.child)));
}
function tt(e) {
  return (t) => /* @__PURE__ */ Le.createElement(x2, Zo({
    attr: Jo({}, e.attr)
  }, t), F0(e.child));
}
function x2(e) {
  var t = (r) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, a = h2(e, p2), l = i || r.size || "1em", c;
    return r.className && (c = r.className), e.className && (c = (c ? c + " " : "") + e.className), /* @__PURE__ */ Le.createElement("svg", Zo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: c,
      style: Jo(Jo({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Le.createElement("title", null, o), e.children);
  };
  return yf !== void 0 ? /* @__PURE__ */ Le.createElement(yf.Consumer, null, (r) => t(r)) : t(W0);
}
function xf(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(e);
}
function bf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, child: [] }] })(e);
}
function V0(e) {
  return tt({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(e);
}
function K0(e) {
  return tt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(e);
}
function wf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function jf(e) {
  return tt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" }, child: [] }] })(e);
}
function b2(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function Sf(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z" }, child: [] }] })(e);
}
function Fl(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z" }, child: [] }] })(e);
}
function Of(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" }, child: [] }] })(e);
}
function Ii(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" }, child: [] }] })(e);
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
}, Vl = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), w2 = (e, t, r) => {
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
function NN({ columns: e, initialData: t }) {
  const [r, n] = W(e), [i, o] = W(t), [a, l] = W(null), [c, s] = W(null), [u, f] = W(/* @__PURE__ */ new Set()), [p, h] = W(!1), [g, v] = W(!1), [y, m] = W(/* @__PURE__ */ new Set()), [b, x] = W(null), [w, S] = W(""), [O, C] = W(null), [T, E] = W(null), [_, D] = W(""), [k, F] = W({}), [N, V] = W(null), [U, J] = W({ key: null, direction: "ascending" }), [$] = W({}), re = (M) => {
    let Y = "ascending";
    U.key === M && U.direction === "ascending" && (Y = "descending"), J({ key: M, direction: Y });
  }, te = Le.useMemo(() => {
    let M = [...i];
    return U.key !== null && M.sort((Y, q) => Y[U.key] < q[U.key] ? U.direction === "ascending" ? -1 : 1 : Y[U.key] > q[U.key] ? U.direction === "ascending" ? 1 : -1 : 0), M;
  }, [i, U]);
  Se(() => {
    const M = () => {
      v(!1), h(!1), x(null), V(null), C(null);
    }, Y = (q) => {
      if (q.key === "Escape")
        q.preventDefault(), C(null), l(null);
      else if (a && (q.ctrlKey || q.metaKey))
        if (q.key === "c") {
          q.preventDefault();
          const he = i.find((Te) => Te.id === a.rowId);
          he && C({
            rowId: a.rowId,
            colId: a.colId,
            value: he[a.colId]
          });
        } else q.key === "v" && O && (q.preventDefault(), L(a.rowId, a.colId, O.value));
    };
    return document.addEventListener("click", M), document.addEventListener("keydown", Y), () => {
      document.removeEventListener("click", M), document.removeEventListener("keydown", Y);
    };
  }, [a, O, i]);
  const z = () => {
    const M = Vl(), Y = `row-${Date.now()}`, q = {
      id: Y,
      ...r.reduce((he, Te) => ({
        ...he,
        [Te.id]: Te.type === "createdTime" || Te.type === "lastEditedTime" ? M : Te.type === "formula" ? "" : Te.type === "id" ? Y : null
      }), {})
    };
    o([...i, q]);
  }, B = (M) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((Y) => Y.id !== M));
  }, L = (M, Y, q) => {
    const he = Vl();
    if (r.find((Ee) => Ee.id === Y)?.type === "email" && q) {
      const Ee = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, fe = `${M}-${Y}`;
      Ee.test(q) ? m((yt) => {
        const Tt = new Set(yt);
        return Tt.delete(fe), Tt;
      }) : m((yt) => new Set(yt).add(fe));
    }
    o(i.map((Ee) => {
      if (Ee.id === M) {
        const fe = { ...Ee, [Y]: q };
        return r.forEach((yt) => {
          yt.type === "lastEditedTime" && (fe[yt.id] = he);
        }), fe;
      }
      return Ee;
    })), l(null);
  }, H = (M = "text", Y) => {
    const q = `col-${Date.now()}`, he = Vl(), Te = Y || M.charAt(0).toUpperCase() + M.slice(1), Ee = {
      id: q,
      name: w.trim() || Te,
      type: M,
      options: M === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, Ee]), o(i.map((fe) => ({
      ...fe,
      [q]: M === "createdTime" || M === "lastEditedTime" ? he : M === "formula" ? "" : M === "id" ? fe.id : null
    }))), v(!1), S("");
  }, le = (M, Y) => {
    n(r.map((q) => q.id === M ? { ...q, name: Y } : q)), s(null);
  }, me = (M) => {
    f((Y) => {
      const q = new Set(Y);
      return q.has(M) ? q.delete(M) : q.add(M), q;
    }), x(null);
  }, de = (M) => {
    n(r.filter((Y) => Y.id !== M)), o(i.map((Y) => {
      const { [M]: q, ...he } = Y;
      return he;
    })), x(null);
  }, ue = (M) => {
    const Y = r.find((fe) => fe.id === M);
    if (!Y) return;
    const q = r.findIndex((fe) => fe.id === M), he = `col-${Date.now()}`, Te = {
      ...Y,
      id: he,
      name: `${Y.name} Copy`
    }, Ee = [...r];
    Ee.splice(q + 1, 0, Te), n(Ee), o(i.map((fe) => ({
      ...fe,
      [he]: fe[M]
    }))), x(null);
  }, Z = (M, Y, q) => {
    if (!Y.trim()) return;
    const he = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], Te = he[Math.floor(Math.random() * he.length)];
    n(r.map((Ee) => {
      if (Ee.id === M && Ee.type === "select") {
        const fe = Ee.options || [];
        if (!fe.some((Tt) => Tt.value.toLowerCase() === Y.toLowerCase()))
          return {
            ...Ee,
            options: [...fe, { value: Y, color: Te }]
          };
      }
      return Ee;
    })), L(q, M, Y), E(null), D("");
  }, X = r.filter((M) => !u.has(M.id)), ae = te.filter((M) => Object.entries(k).every(([Y, q]) => {
    if (!q.trim()) return !0;
    const he = M[Y];
    return he == null ? !1 : String(he).toLowerCase().includes(q.toLowerCase());
  })), K = (M) => U.key === M ? U.direction === "ascending" ? "▲" : "▼" : "↕", Me = (M) => {
    const Y = M.color || "#f8f9fa", q = $[M.id] || 150;
    return {
      th: {
        ...mt.th,
        backgroundColor: Y,
        color: M.color && M.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${q}px`,
        minWidth: `${q}px`,
        maxWidth: `${q}px`
      },
      td: {
        ...mt.td,
        backgroundColor: M.color ? `${Y}33` : "#ffffff",
        width: `${q}px`,
        minWidth: `${q}px`,
        maxWidth: `${q}px`
      }
    };
  }, xe = (M, Y, q, he) => {
    const Te = `${q}-${M.id}`, Ee = y.has(Te);
    if (he)
      switch (M.type) {
        case "checkbox":
          return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!Y, onChange: (fe) => L(q, M.id, fe.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ d.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ d.jsxs(
            "select",
            {
              value: Y || "",
              onChange: (fe) => {
                fe.target.value === "__add_new__" ? (E({ columnId: M.id, rowId: q }), D("")) : fe.target.value === "__manage_options__" || L(q, M.id, fe.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "", children: "Select..." }),
                M.options?.map((fe) => /* @__PURE__ */ d.jsx("option", { value: fe.value, children: fe.value }, fe.value)),
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
              defaultValue: Y || "",
              onBlur: (fe) => L(q, M.id, fe.target.value),
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
                defaultValue: Y || "",
                onBlur: (fe) => L(q, M.id, fe.target.value),
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
            Ee && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "number":
          return /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: Y || "",
              onBlur: (fe) => L(q, M.id, fe.target.value),
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
              defaultValue: Y || "",
              onBlur: (fe) => L(q, M.id, fe.target.value),
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
    if (Y == null) return /* @__PURE__ */ d.jsx("span", { style: { color: "#aaa" } });
    switch (M.type) {
      case "checkbox":
        return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!Y, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(Y).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888" }, children: Y });
      case "select":
        const fe = M.options?.find((Xt) => Xt.value === Y);
        return fe ? /* @__PURE__ */ d.jsx("span", { style: {
          backgroundColor: fe.color + "33",
          color: fe.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: Y }) : Y;
      case "number":
        return /* @__PURE__ */ d.jsx("span", { style: { textAlign: "right", display: "block" }, children: Number(Y).toLocaleString() });
      case "email":
        return /* @__PURE__ */ d.jsxs("div", { children: [
          Y,
          Ee && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const yt = i.find((Xt) => Xt.id === q), Tt = yt ? w2(Y, yt, r) : "Error";
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ d.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: Tt }),
          /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: Y, children: "Σ" })
        ] });
      case "id":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: Y });
      default:
        return Y;
    }
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    T && /* @__PURE__ */ d.jsx("div", { style: {
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
          value: _,
          onChange: (M) => D(M.target.value),
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
            onClick: () => Z(T.columnId, _, T.rowId),
            disabled: !_.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: _.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: _.trim() ? "pointer" : "not-allowed",
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
          X.map((M) => {
            const Y = c === M.id;
            return /* @__PURE__ */ d.jsxs(
              "th",
              {
                style: {
                  ...Me(M).th,
                  position: "relative"
                },
                title: `Sort by ${M.name}`,
                children: [
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (q) => {
                        q.stopPropagation(), q.detail === 1 ? (v(!1), h(!1), x(b === M.id ? null : M.id)) : q.detail === 2 && (s(M.id), x(null));
                      },
                      children: Y ? /* @__PURE__ */ d.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: M.name,
                          onBlur: (q) => le(M.id, q.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                        /* @__PURE__ */ d.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: M.name }),
                        /* @__PURE__ */ d.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (q) => {
                              q.stopPropagation(), re(M.id);
                            },
                            children: K(M.id)
                          }
                        )
                      ] })
                    }
                  ),
                  b === M.id && /* @__PURE__ */ d.jsxs("div", { style: {
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
                        onClick: (q) => {
                          q.stopPropagation(), V(N === M.id ? null : M.id);
                        },
                        children: [
                          "Filter",
                          N === M.id && /* @__PURE__ */ d.jsx("div", { style: {
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
                              placeholder: `Filter ${M.name}...`,
                              value: k[M.id] || "",
                              onChange: (q) => {
                                F((he) => ({
                                  ...he,
                                  [M.id]: q.target.value
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
                        onClick: (q) => {
                          q.stopPropagation(), ue(M.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (q) => {
                          q.stopPropagation(), me(M.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (q) => {
                          q.stopPropagation(), de(M.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ]
              },
              M.id
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
                /* @__PURE__ */ d.jsx("button", { onClick: (M) => {
                  M.stopPropagation(), x(null), h(!1), v(!g);
                }, title: "Add column", style: { ...mt.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ d.jsx("button", { onClick: (M) => {
                  M.stopPropagation(), x(null), v(!1), h(!p);
                }, style: { ...mt.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ d.jsxs("div", { onClick: (M) => M.stopPropagation(), style: {
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
                      value: w,
                      onChange: (M) => S(M.target.value),
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
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("text"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("number"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("select"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("checkbox"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("date"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("email"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("formula", "Formula"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("id", "ID"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("createdTime", "Created time"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("lastEditedTime", "Last edited time"), onMouseEnter: (M) => M.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (M) => M.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ d.jsxs("div", { onClick: (M) => M.stopPropagation(), style: {
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
                  r.map((M) => /* @__PURE__ */ d.jsxs(
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
                      onClick: () => me(M.id),
                      children: [
                        /* @__PURE__ */ d.jsx("span", { children: M.name }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px" }, children: u.has(M.id) ? /* @__PURE__ */ d.jsx(V0, {}) : /* @__PURE__ */ d.jsx(K0, {}) })
                      ]
                    },
                    M.id
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
          X.map((M) => /* @__PURE__ */ d.jsx(
            "th",
            {
              style: {
                ...Me(M).th,
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: k[M.id] || "",
                  onChange: (Y) => {
                    F((q) => ({
                      ...q,
                      [M.id]: Y.target.value
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
                  onClick: (Y) => Y.stopPropagation()
                }
              )
            },
            `search-${M.id}`
          )),
          /* @__PURE__ */ d.jsx("th", { style: {
            ...mt.th,
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("tbody", { children: [
        ae.map((M, Y) => /* @__PURE__ */ d.jsxs(
          "tr",
          {
            style: {
              ...mt.tr,
              backgroundColor: Y % 2 === 0 ? "#f8f9fa" : "#ffffff"
            },
            onMouseEnter: (q) => {
              q.currentTarget.style.backgroundColor = mt.trHover.backgroundColor;
            },
            onMouseLeave: (q) => {
              const he = Y % 2 === 0 ? "#f8f9fa" : "#ffffff";
              q.currentTarget.style.backgroundColor = he;
            },
            children: [
              /* @__PURE__ */ d.jsx("td", { style: {
                ...mt.td,
                textAlign: "center",
                color: "#aaa"
              }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                /* @__PURE__ */ d.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: "#999" }, children: "⋮⋮" }),
                /* @__PURE__ */ d.jsx("button", { onClick: (q) => {
                  q.stopPropagation(), B(M.id);
                }, style: { ...mt.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ d.jsx(Ii, {}) })
              ] }) }),
              X.map((q) => {
                const he = a?.rowId === M.id && a?.colId === q.id;
                return /* @__PURE__ */ d.jsx(
                  "td",
                  {
                    style: {
                      ...Me(q).td,
                      userSelect: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    onClick: (Te) => {
                      Te.stopPropagation(), l({ rowId: M.id, colId: q.id });
                    },
                    children: xe(q, M[q.id], M.id, he)
                  },
                  q.id
                );
              }),
              /* @__PURE__ */ d.jsx("td", { style: mt.td })
            ]
          },
          M.id
        )),
        /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: X.length + 2, style: {
          ...mt.td,
          textAlign: "center",
          color: "#aaa",
          cursor: "pointer"
        }, onClick: z, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
}
function j2(e) {
  return tt({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z" }, child: [] }] })(e);
}
function S2(e) {
  return tt({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z" }, child: [] }] })(e);
}
function Pf(e) {
  return tt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, child: [] }, { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "15", x2: "12", y2: "3" }, child: [] }] })(e);
}
function O2(e, t) {
  const [r, n] = Le.useState(t);
  return { items: Le.useMemo(() => {
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
const Ke = {
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
}, hi = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), P2 = (e, t, r) => {
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
}, Cf = ({ columns: e, initialData: t }) => {
  const [r, n] = W(e), [i, o] = W(t), [a, l] = W(null), [c, s] = W(null), [u, f] = W(/* @__PURE__ */ new Set()), [p, h] = W(!1), [g, v] = W(!1), [y, m] = W(/* @__PURE__ */ new Set()), [b, x] = W(null), [w, S] = W(""), [O, C] = W(!1), [T, E] = W(null), [_, D] = W(/* @__PURE__ */ new Set()), [k, F] = W(null), [N, V] = W(null), [U, J] = W(null), [$, re] = W(null), [te, z] = W(/* @__PURE__ */ new Set()), [B, L] = W({}), [H, le] = W(null), [me, de] = W(null), [ue, Z] = W(null), [X, ae] = W(!1), [K, Me] = W(null), [xe, M] = W(/* @__PURE__ */ new Set()), [Y, q] = W(null), [he, Te] = W(""), [Ee, fe] = W(null), [yt, Tt] = W(null), [Xt, En] = W({}), [ui, di] = W(null), [An, Bl] = W("#ffffff"), [mo, jw] = W("#f8f9fa"), [ef, xo] = W(!1), [tf, bo] = W(!1), [G, Sw] = W(!1), [rf, Ow] = W({}), [Rr, nf] = W(null), [of, Pw] = W(0), [af, Cw] = W(0), {
    items: kw,
    sortConfig: lf,
    requestSort: _w
  } = O2(i, { key: null, direction: "ascending" });
  Se(() => {
    const j = () => {
      v(!1), h(!1), x(null), di(null), xo(!1), bo(!1), Z(null);
    }, A = (I) => {
      if (I.key === "Escape")
        I.preventDefault(), Z(null), l(null);
      else if (a && (I.ctrlKey || I.metaKey))
        if (I.key === "c") {
          I.preventDefault();
          const ee = i.find((se) => se.id === a.rowId) || Object.values(B).flat().find((se) => se.id === a.rowId);
          ee && Z({
            rowId: a.rowId,
            colId: a.colId,
            value: ee[a.colId]
          });
        } else I.key === "v" && ue && (I.preventDefault(), Ot(a.rowId, a.colId, ue.value));
    };
    return document.addEventListener("click", j), document.addEventListener("keydown", A), () => {
      document.removeEventListener("click", j), document.removeEventListener("keydown", A);
    };
  }, [a, ue, i, B]), Se(() => {
    const j = (A) => {
      Y && A.key === "Enter" ? (A.preventDefault(), uf(Y.columnId, he, Y.rowId)) : Y && A.key === "Escape" && (q(null), Te(""));
    };
    if (Y)
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [Y, he]);
  const Ew = () => {
    const j = hi(), A = `row-${Date.now()}`, I = {
      id: A,
      ...r.reduce((ee, se) => ({
        ...ee,
        [se.id]: se.type === "createdTime" || se.type === "lastEditedTime" ? j : se.type === "formula" ? "" : se.type === "id" ? A : null
      }), {})
    };
    o([...i, I]);
  }, Aw = (j) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((A) => A.id !== j));
  }, Ot = (j, A, I) => {
    const ee = hi();
    if (r.find((ce) => ce.id === A)?.type === "email" && I) {
      const ce = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Q = `${j}-${A}`;
      ce.test(I) ? m((ge) => {
        const We = new Set(ge);
        return We.delete(Q), We;
      }) : m((ge) => new Set(ge).add(Q));
    }
    if (j.startsWith("subrow-")) {
      const ce = j.split("-")[1];
      L((Q) => ({
        ...Q,
        [ce]: Q[ce]?.map((ge) => {
          if (ge.id === j) {
            const We = { ...ge, [A]: I };
            return r.forEach((be) => {
              be.type === "lastEditedTime" && (We[be.id] = ee);
            }), We;
          }
          return ge;
        }) || []
      }));
    } else
      o(i.map((ce) => {
        if (ce.id === j) {
          const Q = { ...ce, [A]: I };
          return r.forEach((ge) => {
            ge.type === "lastEditedTime" && (Q[ge.id] = ee);
          }), Q;
        }
        return ce;
      }));
    l(null);
  }, ft = (j = "text", A) => {
    const I = `col-${Date.now()}`, ee = hi(), se = A || j.charAt(0).toUpperCase() + j.slice(1), ce = {
      id: I,
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
      [I]: j === "createdTime" || j === "lastEditedTime" ? ee : j === "formula" ? "" : j === "id" ? ge.id : null
    })));
    const Q = { ...B };
    Object.keys(Q).forEach((ge) => {
      Q[ge] = Q[ge].map((We) => ({
        ...We,
        [I]: j === "createdTime" || j === "lastEditedTime" ? ee : j === "formula" ? "" : j === "id" ? We.id : null
      }));
    }), L(Q), v(!1), S("");
  }, Tw = (j, A) => {
    n(r.map((I) => I.id === j ? { ...I, name: A } : I)), s(null);
  }, sf = (j) => {
    f((A) => {
      const I = new Set(A);
      return I.has(j) ? I.delete(j) : I.add(j), I;
    }), x(null);
  }, Iw = (j) => {
    n(r.filter((A) => A.id !== j)), o(i.map((A) => {
      const { [j]: I, ...ee } = A;
      return ee;
    })), x(null);
  }, Mw = (j) => {
    const A = r.find((ge) => ge.id === j);
    if (!A) return;
    const I = r.findIndex((ge) => ge.id === j), ee = `col-${Date.now()}`, se = {
      ...A,
      id: ee,
      name: `${A.name} Copy`
    }, ce = [...r];
    ce.splice(I + 1, 0, se), n(ce), o(i.map((ge) => ({
      ...ge,
      [ee]: ge[j]
    })));
    const Q = { ...B };
    Object.keys(Q).forEach((ge) => {
      Q[ge] = Q[ge].map((We) => ({
        ...We,
        [ee]: We[j]
      }));
    }), L(Q), x(null);
  }, Dw = (j, A, I) => {
    C(!0), E({ rowId: j, colId: A, value: I }), D(/* @__PURE__ */ new Set([`${j}-${A}`]));
  }, Rw = (j, A) => {
    O && T && T.colId === A && D((I) => new Set(I).add(`${j}-${A}`));
  }, Nw = () => {
    if (O && T) {
      const j = i.map((A) => {
        const I = `${A.id}-${T.colId}`;
        return _.has(I) ? { ...A, [T.colId]: T.value } : A;
      });
      o(j);
    }
    C(!1), E(null), D(/* @__PURE__ */ new Set());
  }, $w = (j) => {
    F(j);
  }, zw = (j, A) => {
    j.preventDefault(), V(A);
  }, Lw = (j, A) => {
    if (j.preventDefault(), k && k !== A) {
      const I = r.findIndex((Q) => Q.id === k), ee = r.findIndex((Q) => Q.id === A), se = [...r], [ce] = se.splice(I, 1);
      se.splice(ee, 0, ce), n(se);
    }
    F(null), V(null);
  }, Bw = () => {
    F(null), V(null);
  }, Ww = (j) => {
    J(j);
  }, Fw = (j, A) => {
    j.preventDefault(), re(A);
  }, Vw = (j, A) => {
    if (j.preventDefault(), U && U !== A) {
      const I = i.findIndex((Q) => Q.id === U), ee = i.findIndex((Q) => Q.id === A), se = [...i], [ce] = se.splice(I, 1);
      se.splice(ee, 0, ce), o(se);
    }
    J(null), re(null);
  }, Kw = () => {
    J(null), re(null);
  }, Hw = (j) => {
    te.has(j) ? z((I) => {
      const ee = new Set(I);
      return ee.delete(j), ee;
    }) : (z((I) => {
      const ee = new Set(I);
      return ee.add(j), ee;
    }), (!B[j] || B[j].length === 0) && cf(j));
  }, cf = (j) => {
    const A = hi(), I = `subrow-${j}-${Date.now()}`, ee = {
      id: I,
      ...r.reduce((se, ce) => ({
        ...se,
        [ce.id]: ce.type === "createdTime" || ce.type === "lastEditedTime" ? A : ce.type === "formula" ? "" : ce.type === "id" ? I : null
      }), {})
    };
    L((se) => ({
      ...se,
      [j]: [...se[j] || [], ee]
    }));
  }, qw = (j, A) => {
    window.confirm("Are you sure you want to delete this sub-row?") && L((I) => ({
      ...I,
      [j]: I[j]?.filter((ee) => ee.id !== A) || []
    }));
  }, Uw = (j, A) => {
    le({ subRowId: j, parentId: A });
  }, Yw = (j, A) => {
    j.preventDefault(), de(A);
  }, Gw = (j, A, I) => {
    if (j.preventDefault(), H && H.subRowId !== A && H.parentId === I) {
      const ee = B[I] || [], se = ee.findIndex((We) => We.id === H.subRowId), ce = ee.findIndex((We) => We.id === A), Q = [...ee], [ge] = Q.splice(se, 1);
      Q.splice(ce, 0, ge), L((We) => ({
        ...We,
        [I]: Q
      }));
    }
    le(null), de(null);
  }, Xw = () => {
    le(null), de(null);
  }, Zw = (j, A, I, ee) => {
    ae(!0), Me({ rowId: j, colId: A, value: I, parentId: ee }), M(/* @__PURE__ */ new Set([`${j}-${A}`]));
  }, Jw = (j, A, I) => {
    X && K && K.colId === A && K.parentId === I && M((ee) => new Set(ee).add(`${j}-${A}`));
  }, Qw = () => {
    if (X && K) {
      const j = K.parentId, A = hi(), I = {
        ...B,
        [j]: B[j]?.map((ee) => {
          const se = `${ee.id}-${K.colId}`;
          if (xe.has(se)) {
            const ce = { ...ee, [K.colId]: K.value };
            return r.forEach((Q) => {
              Q.type === "lastEditedTime" && (ce[Q.id] = A);
            }), ce;
          }
          return ee;
        }) || []
      };
      L(I);
    }
    ae(!1), Me(null), M(/* @__PURE__ */ new Set());
  }, uf = (j, A, I) => {
    if (!A.trim()) return;
    const ee = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], se = ee[Math.floor(Math.random() * ee.length)];
    n(r.map((ce) => {
      if (ce.id === j && ce.type === "select") {
        const Q = ce.options || [];
        if (!Q.some((We) => We.value.toLowerCase() === A.toLowerCase()))
          return {
            ...ce,
            options: [...Q, { value: A, color: se }]
          };
      }
      return ce;
    })), Ot(I, j, A), q(null), Te("");
  }, e2 = (j, A) => {
    n(r.map((ee) => ee.id === j && ee.type === "select" ? {
      ...ee,
      options: ee.options?.filter((se) => se.value !== A) || []
    } : ee)), o(i.map((ee) => ee[j] === A ? { ...ee, [j]: null } : ee));
    const I = { ...B };
    Object.keys(I).forEach((ee) => {
      I[ee] = I[ee].map((se) => se[j] === A ? { ...se, [j]: null } : se);
    }), L(I);
  }, t2 = (j, A) => {
    n(r.map(
      (I) => I.id === j ? { ...I, color: A } : I
    )), Tt(null), x(null);
  }, Nr = (j) => {
    const A = j.color || "#f8f9fa", I = rf[j.id] || 150;
    return {
      th: {
        ...Ke.th,
        backgroundColor: A,
        color: j.color && j.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${I}px`,
        minWidth: `${I}px`,
        maxWidth: `${I}px`
      },
      td: {
        ...Ke.td,
        backgroundColor: j.color ? `${A}33` : "#ffffff",
        width: `${I}px`,
        minWidth: `${I}px`,
        maxWidth: `${I}px`
      }
    };
  }, r2 = (j, A) => {
    j.preventDefault(), j.stopPropagation(), nf(A), Pw(j.clientX), Cw(rf[A] || 150);
  }, df = (j) => {
    if (!Rr) return;
    const A = j.clientX - of, I = Math.max(50, af + A);
    Ow((ee) => ({ ...ee, [Rr]: I }));
  }, ff = () => {
    nf(null);
  };
  Se(() => {
    if (Rr)
      return document.addEventListener("mousemove", df), document.addEventListener("mouseup", ff), () => {
        document.removeEventListener("mousemove", df), document.removeEventListener("mouseup", ff);
      };
  }, [Rr, of, af]);
  const Tn = r.filter((j) => !u.has(j.id)), wo = kw.filter((j) => Object.entries(Xt).every(([A, I]) => {
    if (!I.trim()) return !0;
    const ee = j[A];
    return ee == null ? !1 : String(ee).toLowerCase().includes(I.toLowerCase());
  })), n2 = (j) => {
    En((A) => {
      const I = { ...A };
      return delete I[j], I;
    });
  }, i2 = (j) => lf.key === j ? lf.direction === "ascending" ? "▲" : "▼" : "↕", pf = (j, A, I, ee) => {
    const se = `${I}-${j.id}`, ce = y.has(se);
    if (ee)
      switch (j.type) {
        case "checkbox":
          return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!A, onChange: (Q) => Ot(I, j.id, Q.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ d.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ d.jsxs(
            "select",
            {
              value: A || "",
              onChange: (Q) => {
                Q.target.value === "__add_new__" ? (q({ columnId: j.id, rowId: I }), Te("")) : Q.target.value === "__manage_options__" ? fe({ columnId: j.id, rowId: I }) : Ot(I, j.id, Q.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "", children: "Select..." }),
                j.options?.map((Q) => /* @__PURE__ */ d.jsx("option", { value: Q.value, children: Q.value }, Q.value)),
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
              onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
              onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
                const Q = document.createElement("input");
                Q.type = "file", Q.multiple = !0, Q.accept = "image/*,video/*", Q.onchange = (ge) => {
                  const be = Array.from(ge.target.files || []).map((Bt) => ({
                    name: Bt.name,
                    url: URL.createObjectURL(Bt),
                    type: Bt.type
                  }));
                  Ot(I, j.id, be);
                }, Q.click();
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
              children: /* @__PURE__ */ d.jsx(Pf, {})
            }
          ) });
        case "number":
          return /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              onBlur: (Q) => Ot(I, j.id, Q.target.value),
              onKeyPress: (Q) => {
                j.name === "Phone" ? (!/[0-9]/.test(Q.key) || Q.currentTarget.value.replace(/\D/g, "").length >= 10) && Q.preventDefault() : /[0-9\-+.,\s]/.test(Q.key) || Q.preventDefault();
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
                onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
            ce && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "formula":
          return /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              placeholder: "e.g., [Column1] + [Column2] * 2",
              onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
              onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
              onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
                onClick: () => alert(`Viewing row ${I}`),
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
                onClick: () => alert(`Calling for row ${I}`),
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
                onBlur: (Q) => Ot(I, j.id, Q.target.value),
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
            ce && j.name === "Email" && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
      }
    if (A == null) return /* @__PURE__ */ d.jsx("span", { style: { color: "#aaa" } });
    switch (j.type) {
      case "checkbox":
        return /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: !!A, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(A).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ d.jsx("span", { style: { color: "#888" }, children: A });
      case "select":
        const Q = j.options?.find((be) => be.value === A);
        return Q ? /* @__PURE__ */ d.jsx("span", { style: {
          backgroundColor: Q.color + "33",
          color: Q.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: A }) : A;
      case "number":
        return /* @__PURE__ */ d.jsx("span", { style: { textAlign: "right", display: "block" }, children: j.name === "Phone" ? A : Number(A).toLocaleString() });
      case "button":
        return /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => alert(`Button clicked in row ${I}!`),
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
          Array.isArray(A) && A.length > 0 ? A.map((be, Bt) => /* @__PURE__ */ d.jsx("div", { style: { position: "relative" }, children: be.type?.startsWith("image/") ? /* @__PURE__ */ d.jsx(
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
          ) }, Bt)) : null,
          /* @__PURE__ */ d.jsx(
            Pf,
            {
              style: {
                fontSize: "16px",
                color: "#666",
                cursor: "pointer",
                marginLeft: Array.isArray(A) && A.length > 0 ? "4px" : "0"
              },
              onClick: () => {
                const be = document.createElement("input");
                be.type = "file", be.multiple = !0, be.accept = "image/*,video/*", be.onchange = (Bt) => {
                  const o2 = Array.from(Bt.target.files || []).map((Wl) => ({
                    name: Wl.name,
                    url: URL.createObjectURL(Wl),
                    type: Wl.type
                  })), a2 = Array.isArray(A) ? A : [];
                  Ot(I, j.id, [...a2, ...o2]);
                }, be.click();
              },
              title: "Upload files"
            }
          )
        ] });
      case "email":
        return /* @__PURE__ */ d.jsxs("div", { children: [
          A,
          ce && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const ge = i.find((be) => be.id === I) || Object.values(B).flat().find((be) => be.id === I), We = ge ? P2(A, ge, r) : "Error";
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
                const Bt = document.createElement("div");
                Bt.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y931Pk&q=${encodeURIComponent(A)}" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`, Bt.style.cssText = "position: absolute; top: -210px; left: 0; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;", Bt.id = `map-tooltip-${I}-${j.id}`, be.currentTarget.appendChild(Bt);
              }
            },
            onMouseLeave: () => {
              const be = document.getElementById(`map-tooltip-${I}-${j.id}`);
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
              onClick: () => alert(`Viewing row ${I}`),
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
              onClick: () => alert(`Calling for row ${I}`),
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
          ce && j.name === "Email" && /* @__PURE__ */ d.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
    }
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    Y && /* @__PURE__ */ d.jsx("div", { style: {
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
          value: he,
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
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => {
              q(null), Te("");
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
            onClick: () => uf(Y.columnId, he, Y.rowId),
            disabled: !he.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: he.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: he.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    Ee && /* @__PURE__ */ d.jsx("div", { style: {
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
      /* @__PURE__ */ d.jsx("div", { style: { marginBottom: "15px" }, children: r.find((j) => j.id === Ee.columnId)?.options?.map((j) => /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "4px",
        backgroundColor: j.color + "33",
        borderRadius: "4px",
        border: `1px solid ${j.color}44`
      }, children: [
        /* @__PURE__ */ d.jsx("span", { style: { color: j.color, fontWeight: "500" }, children: j.value }),
        /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => {
              window.confirm(`Delete option "${j.value}"? This will clear the value from all cells using this option.`) && e2(Ee.columnId, j.value);
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
      ...Ke.table,
      backgroundColor: G ? "#1a1a1a" : "#ffffff",
      color: G ? "#ffffff" : "#333333",
      border: G ? "2px solid #333" : "2px solid #e1e5e9"
    }, children: [
      /* @__PURE__ */ d.jsxs("thead", { children: [
        /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: {
            ...Ke.th,
            width: "40px",
            backgroundColor: G ? "#2a2a2a" : "#f8f9fa",
            borderRight: G ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: G ? "2px solid #444" : "2px solid #e1e5e9"
          } }),
          Tn.map((j) => {
            const A = c === j.id;
            return /* @__PURE__ */ d.jsxs(
              "th",
              {
                draggable: !Rr,
                onDragStart: () => !Rr && $w(j.id),
                onDragOver: (I) => zw(I, j.id),
                onDrop: (I) => Lw(I, j.id),
                onDragEnd: Bw,
                style: {
                  ...Nr(j).th,
                  position: "relative",
                  backgroundColor: N === j.id ? G ? "#444" : "#e3f2fd" : G ? "#2a2a2a" : Nr(j).th.backgroundColor,
                  color: G ? "#ffffff" : Nr(j).th.color,
                  borderRight: G ? "1px solid #444" : "1px solid #e1e5e9",
                  borderBottom: G ? "2px solid #444" : "2px solid #e1e5e9",
                  opacity: k === j.id ? 0.5 : 1,
                  cursor: Rr ? "col-resize" : "move"
                },
                title: `Sort by ${j.name}`,
                children: [
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (I) => {
                        I.stopPropagation(), I.detail === 1 ? (v(!1), h(!1), x(b === j.id ? null : j.id)) : I.detail === 2 && (s(j.id), x(null));
                      },
                      children: A ? /* @__PURE__ */ d.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: j.name,
                          onBlur: (I) => Tw(j.id, I.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
                        /* @__PURE__ */ d.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: j.name }),
                        /* @__PURE__ */ d.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (I) => {
                              I.stopPropagation(), _w(j.id);
                            },
                            children: i2(j.id)
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ d.jsx(
                    "div",
                    {
                      onMouseDown: (I) => r2(I, j.id),
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
                      onMouseEnter: (I) => {
                        Rr || (I.currentTarget.style.backgroundColor = G ? "#666" : "#ccc");
                      },
                      onMouseLeave: (I) => {
                        I.currentTarget.style.backgroundColor = "transparent";
                      }
                    }
                  ),
                  b === j.id && /* @__PURE__ */ d.jsxs("div", { style: {
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
                        onClick: (I) => {
                          I.stopPropagation(), di(ui === j.id ? null : j.id);
                        },
                        children: [
                          "Filter",
                          ui === j.id && /* @__PURE__ */ d.jsxs("div", { style: {
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
                                placeholder: `Filter ${j.name}...`,
                                value: Xt[j.id] || "",
                                onChange: (I) => {
                                  En((ee) => ({
                                    ...ee,
                                    [j.id]: I.target.value
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
                            Xt[j.id] && /* @__PURE__ */ d.jsx(
                              "button",
                              {
                                onClick: (I) => {
                                  I.stopPropagation(), n2(j.id);
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
                        onClick: (I) => {
                          I.stopPropagation(), Mw(j.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (I) => {
                          I.stopPropagation(), sf(j.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ d.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (I) => {
                          I.stopPropagation(), Iw(j.id);
                        },
                        children: "Delete"
                      }
                    ),
                    /* @__PURE__ */ d.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333", position: "relative" },
                        onClick: (I) => {
                          I.stopPropagation(), Tt(yt === j.id ? null : j.id);
                        },
                        children: [
                          "Column Color",
                          yt === j.id && /* @__PURE__ */ d.jsx("div", { style: {
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
                          }, children: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd", "#f8f9fa"].map((I) => /* @__PURE__ */ d.jsx(
                            "div",
                            {
                              onClick: (ee) => {
                                ee.stopPropagation(), t2(j.id, I);
                              },
                              style: {
                                width: "20px",
                                height: "20px",
                                backgroundColor: I,
                                borderRadius: "3px",
                                cursor: "pointer",
                                border: j.color === I ? "2px solid #333" : "1px solid #ddd"
                              }
                            },
                            I
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
          /* @__PURE__ */ d.jsxs(
            "th",
            {
              style: {
                ...Ke.th,
                color: G ? "#888" : "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px",
                backgroundColor: G ? "#2a2a2a" : "#f8f9fa",
                borderRight: G ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: G ? "2px solid #444" : "2px solid #e1e5e9"
              },
              children: [
                /* @__PURE__ */ d.jsx("button", { onClick: (j) => {
                  j.stopPropagation(), x(null), h(!1), v(!g);
                }, title: "Add column", style: { ...Ke.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ d.jsx("button", { onClick: (j) => {
                  j.stopPropagation(), x(null), v(!1), h(!p);
                }, style: { ...Ke.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ d.jsxs("div", { onClick: (j) => j.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: G ? "#2a2a2a" : "#ffffff",
                  border: G ? "1px solid #444" : "1px solid #e1e5e9",
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
                  /* @__PURE__ */ d.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("text"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("number"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("select"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("checkbox"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("date"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("number", "Phone"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📞" }),
                    " Phone"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("email"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("place", "Place"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📍" }),
                    " Place"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("url", "URL"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🔗" }),
                    " URL"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("formula", "Formula"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("button", "Button"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🖱️" }),
                    " Button"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("files", "Files"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "📎" }),
                    " Files"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("id", "ID"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("action", "Action"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "⚡" }),
                    " Action"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("createdTime", "Created time"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: G ? "#ffffff" : "#333333" }, onClick: () => ft("lastEditedTime", "Last edited time"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = G ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ d.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ d.jsxs("div", { onClick: (j) => j.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: G ? "#2a2a2a" : "#ffffff",
                  border: G ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ d.jsxs("div", { style: { padding: "4px 0", borderBottom: "1px solid #e1e5e9", marginBottom: "8px" }, children: [
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
                      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: G ? "#ccc" : "#666" }, children: "Dark Mode" }),
                      /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: () => Sw(!G),
                          style: {
                            width: "40px",
                            height: "20px",
                            borderRadius: "10px",
                            backgroundColor: G ? "#007bff" : "#ccc",
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
                                left: G ? "22px" : "2px",
                                transition: "left 0.3s"
                              }
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: G ? "#ccc" : "#666", marginBottom: "4px" }, children: "Row Colors" }),
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", position: "relative" }, children: [
                      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Odd:" }),
                      /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (j) => {
                            j.stopPropagation(), xo(!ef), bo(!1);
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
                      ef && /* @__PURE__ */ d.jsx("div", { style: {
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
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((j) => /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (A) => {
                            A.stopPropagation(), Bl(j), xo(!1);
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
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", position: "relative" }, children: [
                      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Even:" }),
                      /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (j) => {
                            j.stopPropagation(), bo(!tf), xo(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: mo,
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
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((j) => /* @__PURE__ */ d.jsx(
                        "div",
                        {
                          onClick: (A) => {
                            A.stopPropagation(), jw(j), bo(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: j,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: mo === j ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        j
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ d.jsxs("div", { style: { borderTop: "1px solid #e1e5e9", marginTop: "8px", paddingTop: "8px" }, children: [
                    /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: G ? "#ccc" : "#666", marginBottom: "8px", fontWeight: "500" }, children: "Active Users" }),
                    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
                      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px", backgroundColor: G ? "#333" : "#f8f9fa" }, children: [
                        /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28a745" } }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: G ? "#fff" : "#333" }, children: "Current User" }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "10px", color: G ? "#888" : "#666", marginLeft: "auto" }, children: "Online" })
                      ] }),
                      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc3545" } }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: G ? "#fff" : "#333" }, children: "Admin" }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "10px", color: G ? "#888" : "#666", marginLeft: "auto" }, children: "Away" })
                      ] }),
                      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6c757d" } }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", color: G ? "#fff" : "#333" }, children: "Guest" }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "10px", color: G ? "#888" : "#666", marginLeft: "auto" }, children: "Offline" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: G ? "#ccc" : "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((j) => /* @__PURE__ */ d.jsxs(
                    "div",
                    {
                      style: {
                        padding: "4px 8px",
                        cursor: "pointer",
                        color: G ? "#ffffff" : "#333333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "13px"
                      },
                      onClick: () => sf(j.id),
                      children: [
                        /* @__PURE__ */ d.jsx("span", { children: j.name }),
                        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px" }, children: u.has(j.id) ? /* @__PURE__ */ d.jsx(V0, {}) : /* @__PURE__ */ d.jsx(K0, {}) })
                      ]
                    },
                    j.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: {
            ...Ke.th,
            width: "40px",
            backgroundColor: G ? "#2a2a2a" : "#f8f9fa",
            borderRight: G ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: G ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } }),
          Tn.map((j) => /* @__PURE__ */ d.jsx(
            "th",
            {
              style: {
                ...Nr(j).th,
                backgroundColor: G ? "#2a2a2a" : "#f8f9fa",
                color: G ? "#ffffff" : "#666666",
                borderRight: G ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: G ? "2px solid #444" : "2px solid #e1e5e9",
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ d.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: Xt[j.id] || "",
                  onChange: (A) => {
                    En((I) => ({
                      ...I,
                      [j.id]: A.target.value
                    }));
                  },
                  style: {
                    width: "90%",
                    padding: "4px 6px",
                    border: G ? "1px solid #444" : "1px solid #e1e5e9",
                    borderRadius: "4px",
                    fontSize: "12px",
                    outline: "none",
                    backgroundColor: G ? "#1a1a1a" : "#ffffff",
                    color: G ? "#ffffff" : "#333333"
                  },
                  onClick: (A) => A.stopPropagation()
                }
              )
            },
            `search-${j.id}`
          )),
          /* @__PURE__ */ d.jsx("th", { style: {
            ...Ke.th,
            backgroundColor: G ? "#2a2a2a" : "#f8f9fa",
            borderRight: G ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: G ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("tbody", { children: [
        wo.map((j) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
          /* @__PURE__ */ d.jsxs(
            "tr",
            {
              draggable: !0,
              onDragStart: () => Ww(j.id),
              onDragOver: (A) => Fw(A, j.id),
              onDrop: (A) => Vw(A, j.id),
              onDragEnd: Kw,
              style: {
                ...Ke.tr,
                backgroundColor: $ === j.id ? G ? "#444" : "#e3f2fd" : G ? wo.indexOf(j) % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : wo.indexOf(j) % 2 === 0 ? mo : An,
                opacity: U === j.id ? 0.5 : 1,
                cursor: "move"
              },
              onMouseEnter: (A) => {
                !U && !G && (A.currentTarget.style.backgroundColor = Ke.trHover.backgroundColor);
              },
              onMouseLeave: (A) => {
                if (!U) {
                  const I = wo.indexOf(j), ee = G ? I % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : I % 2 === 0 ? mo : An;
                  A.currentTarget.style.backgroundColor = $ === j.id ? G ? "#444" : "#e3f2fd" : ee;
                }
              },
              children: [
                /* @__PURE__ */ d.jsx("td", { style: {
                  ...Ke.td,
                  textAlign: "center",
                  color: G ? "#888" : "#aaa",
                  backgroundColor: "inherit",
                  border: G ? "1px solid #444" : "1px solid #cececeff"
                }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                  /* @__PURE__ */ d.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: G ? "#888" : "#999" }, children: "⋮⋮" }),
                  /* @__PURE__ */ d.jsx("button", { onClick: (A) => {
                    A.stopPropagation(), Aw(j.id);
                  }, style: { ...Ke.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ d.jsx(Ii, {}) }),
                  /* @__PURE__ */ d.jsx("button", { onClick: (A) => {
                    A.stopPropagation(), Hw(j.id);
                  }, style: { ...Ke.button, cursor: "pointer", color: "#242424ff", backgroundColor: "transparent", fontSize: "12px" }, title: "Toggle sub-rows", children: te.has(j.id) ? /* @__PURE__ */ d.jsx(j2, {}) : /* @__PURE__ */ d.jsx(S2, {}) })
                ] }) }),
                Tn.map((A) => {
                  const I = a?.rowId === j.id && a?.colId === A.id, ee = `${j.id}-${A.id}`, se = _.has(ee);
                  return /* @__PURE__ */ d.jsx(
                    "td",
                    {
                      style: {
                        ...Nr(A).td,
                        backgroundColor: se ? G ? "#444" : "#f0f0f0" : ue?.rowId === j.id && ue?.colId === A.id ? G ? "#444" : "#e3f2fd" : A.color ? Nr(A).td.backgroundColor : "inherit",
                        color: G ? "#ffffff" : "#333333",
                        border: ue?.rowId === j.id && ue?.colId === A.id ? "2px dashed #007bff" : G ? "1px solid #444" : "1px solid #cececeff",
                        userSelect: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      onClick: (ce) => {
                        ce.stopPropagation(), l({ rowId: j.id, colId: A.id });
                      },
                      draggable: !I,
                      onDragStart: (ce) => {
                        ce.stopPropagation(), Dw(j.id, A.id, j[A.id]);
                      },
                      onDragEnter: (ce) => {
                        ce.stopPropagation(), Rw(j.id, A.id);
                      },
                      onDragEnd: (ce) => {
                        ce.stopPropagation(), Nw();
                      },
                      onDragOver: (ce) => {
                        ce.preventDefault(), ce.stopPropagation();
                      },
                      children: pf(A, j[A.id], j.id, I)
                    },
                    A.id
                  );
                }),
                /* @__PURE__ */ d.jsx("td", { style: {
                  ...Ke.td,
                  backgroundColor: "inherit",
                  border: G ? "1px solid #444" : "1px solid #cececeff"
                } })
              ]
            }
          ),
          te.has(j.id) && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
            B[j.id]?.map((A) => /* @__PURE__ */ d.jsxs(
              "tr",
              {
                draggable: !0,
                onDragStart: () => Uw(A.id, j.id),
                onDragOver: (I) => Yw(I, A.id),
                onDrop: (I) => Gw(I, A.id, j.id),
                onDragEnd: Xw,
                style: {
                  ...Ke.tr,
                  backgroundColor: me === A.id ? "#d1ecf1" : "#e9ecef",
                  opacity: H?.subRowId === A.id ? 0.5 : 1,
                  cursor: "move"
                },
                children: [
                  /* @__PURE__ */ d.jsx("td", { style: { ...Ke.td, textAlign: "center", color: "#aaa", backgroundColor: "#e9ecef" }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", paddingLeft: "20px" }, children: [
                    /* @__PURE__ */ d.jsx("span", { style: { cursor: "grab", fontSize: "10px", color: "#999" }, children: "⋮⋮" }),
                    /* @__PURE__ */ d.jsx("button", { onClick: (I) => {
                      I.stopPropagation(), qw(j.id, A.id);
                    }, style: { ...Ke.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff", fontSize: "10px" }, title: "Delete sub-row", children: /* @__PURE__ */ d.jsx(Ii, {}) })
                  ] }) }),
                  Tn.map((I) => {
                    const ee = a?.rowId === A.id && a?.colId === I.id;
                    return /* @__PURE__ */ d.jsx(
                      "td",
                      {
                        style: {
                          ...Nr(I).td,
                          backgroundColor: xe.has(`${A.id}-${I.id}`) ? "#f0f0f0" : ue?.rowId === A.id && ue?.colId === I.id ? "#e3f2fd" : I.color ? `${I.color}22` : "#ecececff",
                          border: ue?.rowId === A.id && ue?.colId === I.id ? "2px dashed #007bff" : Nr(I).td.border,
                          userSelect: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        onClick: (se) => {
                          se.stopPropagation(), l({ rowId: A.id, colId: I.id });
                        },
                        draggable: !ee,
                        onDragStart: (se) => {
                          se.stopPropagation(), Zw(A.id, I.id, A[I.id], j.id);
                        },
                        onDragEnter: (se) => {
                          se.stopPropagation(), Jw(A.id, I.id, j.id);
                        },
                        onDragEnd: (se) => {
                          se.stopPropagation(), Qw();
                        },
                        onDragOver: (se) => {
                          se.preventDefault(), se.stopPropagation();
                        },
                        children: pf(I, A[I.id], A.id, ee)
                      },
                      I.id
                    );
                  }),
                  /* @__PURE__ */ d.jsx("td", { style: { ...Ke.td, backgroundColor: "#e9ecef" } })
                ]
              },
              A.id
            )),
            /* @__PURE__ */ d.jsx("tr", { style: { backgroundColor: "#b7b8b9ff" }, children: /* @__PURE__ */ d.jsx("td", { colSpan: Tn.length + 2, style: { ...Ke.td, textAlign: "center", color: "#ffffffff", cursor: "pointer", backgroundColor: "#5b5b5bff", paddingLeft: "20px" }, onClick: () => cf(j.id), children: "+ Add Sub Row" }) })
          ] })
        ] }, j.id)),
        /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: Tn.length + 2, style: {
          ...Ke.td,
          textAlign: "center",
          color: G ? "#888" : "#aaa",
          cursor: "pointer",
          backgroundColor: "inherit",
          border: G ? "1px solid #444" : "1px solid #cececeff"
        }, onClick: Ew, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
};
function kf(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z" }, child: [] }] })(e);
}
function C2(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" }, child: [] }] })(e);
}
function _f(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z" }, child: [] }] })(e);
}
function k2(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" }, child: [] }] })(e);
}
const $N = ({ columns: e, initialData: t }) => {
  const [r] = W(t), [n, i] = W("table"), [o, a] = W(!1), [l, c] = W(!1), [s, u] = W(null), [f] = W({}), [p, h] = W(null), [g, v] = W(!0), [y, m] = W(!0), [b, x] = W("Date"), [w, S] = W("Month"), [O, C] = W(!0), [T, E] = W("Center peek"), _ = r;
  Se(() => {
    const B = () => {
      a(!1), h(null);
    }, L = (H) => {
      H.key === "Escape" && (H.preventDefault(), h(null), u(null));
    };
    return document.addEventListener("click", B), document.addEventListener("keydown", L), () => {
      document.removeEventListener("click", B), document.removeEventListener("keydown", L);
    };
  }, [s, p, r, f]);
  const D = (B) => {
    switch (B) {
      case "table":
        return /* @__PURE__ */ d.jsx(Fl, {});
      case "board":
        return /* @__PURE__ */ d.jsx(Of, {});
      case "timeline":
        return /* @__PURE__ */ d.jsx(kf, {});
      case "calendar":
        return /* @__PURE__ */ d.jsx(xf, {});
      case "list":
        return /* @__PURE__ */ d.jsx(wf, {});
      case "gallery":
        return /* @__PURE__ */ d.jsx(_f, {});
      case "chart":
        return /* @__PURE__ */ d.jsx(bf, {});
      case "feed":
        return /* @__PURE__ */ d.jsx(Sf, {});
      case "map":
        return /* @__PURE__ */ d.jsx(jf, {});
      default:
        return /* @__PURE__ */ d.jsx(Fl, {});
    }
  }, k = () => /* @__PURE__ */ d.jsxs("div", { style: {
    position: "relative",
    display: "inline-block",
    marginBottom: "16px"
  }, children: [
    /* @__PURE__ */ d.jsxs(
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
        { type: "table", label: "Table", icon: /* @__PURE__ */ d.jsx(Fl, {}) },
        { type: "board", label: "Board", icon: /* @__PURE__ */ d.jsx(Of, {}) },
        { type: "timeline", label: "Timeline", icon: /* @__PURE__ */ d.jsx(kf, {}) },
        { type: "calendar", label: "Calendar", icon: /* @__PURE__ */ d.jsx(xf, {}) },
        { type: "list", label: "List", icon: /* @__PURE__ */ d.jsx(wf, {}) },
        { type: "gallery", label: "Gallery", icon: /* @__PURE__ */ d.jsx(_f, {}) },
        { type: "chart", label: "Chart", icon: /* @__PURE__ */ d.jsx(bf, {}) },
        { type: "feed", label: "Feed", icon: /* @__PURE__ */ d.jsx(Sf, {}) },
        { type: "map", label: "Map", icon: /* @__PURE__ */ d.jsx(jf, {}) }
      ].map(({ type: B, label: L, icon: H }) => /* @__PURE__ */ d.jsxs(
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
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: "18px" }, children: H }),
            /* @__PURE__ */ d.jsx("span", { children: L })
          ]
        },
        B
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
                value: b,
                onChange: (B) => x(B.target.value),
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
                      left: O ? "22px" : "2px",
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
              value: T,
              onChange: (B) => E(B.target.value),
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
  ] }), F = () => {
    const B = e.find((me) => me.type === "select") || e[0], L = B?.options || [{ value: "Default", color: "#007bff" }], H = e.length, le = Math.max(280, H * 40);
    return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: "16px", overflowX: "auto", padding: "16px", minHeight: "400px" }, children: L.map((me) => /* @__PURE__ */ d.jsxs("div", { style: {
      flex: `1 1 ${le}px`,
      minWidth: `${le}px`,
      maxWidth: `${Math.max(400, H * 60)}px`,
      backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
      borderRadius: "8px",
      padding: "16px"
    }, children: [
      /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", color: l ? "#ffffff" : "#333333" }, children: me.value }),
      _.filter((de) => de[B?.id || ""] === me.value).map((de) => /* @__PURE__ */ d.jsx("div", { style: {
        backgroundColor: l ? "#1a1a1a" : "#ffffff",
        border: l ? "1px solid #444" : "1px solid #e1e5e9",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "8px",
        color: l ? "#ffffff" : "#333333",
        minHeight: Math.max(80, H * 20),
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }, children: e.map((ue) => {
        const Z = de[ue.id];
        return !Z || ue.id === B?.id ? null : /* @__PURE__ */ d.jsxs("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          alignItems: "center",
          minHeight: "20px"
        }, children: [
          /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "60px" }, children: [
            ue.name,
            ":"
          ] }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "12px", flex: "1" }, children: String(Z) })
        ] }, ue.id);
      }) }, de.id))
    ] }, me.value)) });
  }, N = () => {
    const B = e.length, L = Math.max(120, 800 / B);
    return /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", overflowX: "auto" }, children: [
      /* @__PURE__ */ d.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${L}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "2px solid #444" : "2px solid #e1e5e9",
        fontWeight: "600",
        backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${B * L}px`
      }, children: e.map((H) => /* @__PURE__ */ d.jsx("div", { style: { fontSize: "14px", minWidth: `${L}px` }, children: H.name }, H.id)) }),
      _.map((H) => /* @__PURE__ */ d.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${L}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${B * L}px`
      }, children: e.map((le) => /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", minWidth: `${L}px` }, children: H[le.id] ? String(H[le.id]) : "-" }, le.id)) }, H.id))
    ] });
  }, V = () => {
    const B = /* @__PURE__ */ new Date(), L = B.getFullYear(), H = B.getMonth(), le = new Date(L, H, 1), de = new Date(L, H + 1, 0).getDate(), ue = le.getDay(), Z = [
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
    ], X = [];
    for (let ae = 0; ae < ue; ae++)
      X.push(/* @__PURE__ */ d.jsx("div", { style: { padding: "8px" } }, `empty-${ae}`));
    for (let ae = 1; ae <= de; ae++) {
      const K = new Date(L, H, ae).getDay() === 0 || new Date(L, H, ae).getDay() === 6;
      X.push(
        /* @__PURE__ */ d.jsx("div", { style: {
          padding: "8px",
          border: l ? "1px solid #444" : "1px solid #e1e5e9",
          minHeight: "80px",
          backgroundColor: K && !O ? "#f5f5f5" : "transparent",
          color: l ? "#ffffff" : "#333333"
        }, children: /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "500", marginBottom: "4px" }, children: ae }) }, ae)
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
        Z[H],
        " ",
        L
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "1px",
        backgroundColor: l ? "#444" : "#e1e5e9"
      }, children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((ae) => /* @__PURE__ */ d.jsx("div", { style: {
          padding: "8px",
          textAlign: "center",
          fontWeight: "600",
          backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
          color: l ? "#ffffff" : "#333333"
        }, children: ae }, ae)),
        X
      ] })
    ] });
  }, U = () => /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px" }, children: [
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Timeline View" }),
    _.map((B) => /* @__PURE__ */ d.jsxs("div", { style: {
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
      /* @__PURE__ */ d.jsx("div", { style: { flex: 1, color: l ? "#ffffff" : "#333333" }, children: e.map((L) => {
        const H = B[L.id];
        return H ? /* @__PURE__ */ d.jsxs("div", { style: { marginBottom: "4px" }, children: [
          /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: [
            L.name,
            ":"
          ] }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px" }, children: String(H) })
        ] }, L.id) : null;
      }) })
    ] }, B.id))
  ] }), J = () => {
    const B = e.length, L = Math.max(280, B * 35);
    return /* @__PURE__ */ d.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${L}px, 1fr))`,
      gap: "16px",
      padding: "16px"
    }, children: _.map((H) => /* @__PURE__ */ d.jsx("div", { style: {
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
      const me = H[le.id];
      return me ? /* @__PURE__ */ d.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        minHeight: "24px"
      }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: le.name }),
        /* @__PURE__ */ d.jsx("div", { style: { fontSize: "14px", wordBreak: "break-word", flex: "1" }, children: String(me) })
      ] }, le.id) : null;
    }) }, H.id)) });
  }, $ = () => /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Chart View" }),
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Chart view would display data visualizations. This is a placeholder for chart implementation." })
  ] }), re = () => /* @__PURE__ */ d.jsx("div", { style: { padding: "16px" }, children: _.map((B) => /* @__PURE__ */ d.jsxs("div", { style: {
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
        /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "600", fontSize: "16px", marginBottom: "4px" }, children: B[e[0]?.id] || "Untitled" }),
        /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: l ? "#888" : "#666" }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "grid", gap: "8px" }, children: e.slice(1).map((L) => {
      const H = B[L.id];
      return H ? /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "80px" }, children: [
          L.name,
          ":"
        ] }),
        /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", flex: 1 }, children: String(H) })
      ] }, L.id) : null;
    }) })
  ] }, B.id)) }), te = () => /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Map View" }),
    /* @__PURE__ */ d.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Map view would show location-based data. This is a placeholder for map implementation." })
  ] }), z = () => {
    switch (n) {
      case "table":
        return /* @__PURE__ */ d.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ d.jsx(Cf, { columns: e, initialData: r }) });
      case "board":
        return F();
      case "timeline":
        return U();
      case "calendar":
        return V();
      case "list":
        return N();
      case "gallery":
        return J();
      case "chart":
        return $();
      case "feed":
        return re();
      case "map":
        return te();
      default:
        return /* @__PURE__ */ d.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ d.jsx(Cf, { columns: e, initialData: r }) });
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
      /* @__PURE__ */ d.jsx("div", { style: { width: "100%", overflow: "hidden" }, children: z() })
    ] })
  ] });
}, zN = ({
  initialRows: e = 3,
  initialCols: t = 4,
  rows: r,
  cols: n
}) => {
  const [i, o] = W(r || e), [a, l] = W(n || t), [c, s] = W({}), [u, f] = W(null), [p, h] = W(null), [g, v] = W(null), y = (k, F) => `${k}-${F}`, m = (k, F) => c[y(k, F)] || "", b = (k, F, N) => {
    s((V) => ({ ...V, [y(k, F)]: N }));
  }, x = () => o((k) => k + 1), w = () => l((k) => k + 1), S = () => i > 1 && o((k) => k - 1), O = () => a > 1 && l((k) => k - 1), C = (k, F) => {
    f({ row: k, col: F });
  }, T = (k, F) => {
    h({ row: k, col: F });
  }, E = () => {
    h(null);
  }, _ = (k) => {
    k.key === "Enter" && h(null);
  }, D = (k, F) => {
    const N = p?.row === k && p?.col === F, V = m(k, F);
    return N ? /* @__PURE__ */ d.jsx(
      "input",
      {
        type: "text",
        value: V,
        onChange: (U) => b(k, F, U.target.value),
        onBlur: E,
        onKeyDown: _,
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
          color: V ? "#1a1a1a" : "#9ca3af",
          cursor: "pointer",
          position: "relative",
          minHeight: "60px"
        },
        children: V || /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
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
          onClick: x,
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
            /* @__PURE__ */ d.jsx(C2, { size: 14 }),
            "Add Column"
          ]
        }
      ),
      /* @__PURE__ */ d.jsx("div", { style: { width: "1px", height: "24px", backgroundColor: "#e2e8f0" } }),
      /* @__PURE__ */ d.jsxs(
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
            /* @__PURE__ */ d.jsx(Ii, { size: 12 }),
            "Delete Row"
          ]
        }
      ),
      /* @__PURE__ */ d.jsxs(
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
            /* @__PURE__ */ d.jsx(Ii, { size: 12 }),
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
    }, children: Array.from({ length: i * a }, (k, F) => {
      const N = Math.floor(F / a), V = F % a, U = u?.row === N && u?.col === V, J = g?.row === N && g?.col === V;
      return /* @__PURE__ */ d.jsx(
        "div",
        {
          onClick: () => C(N, V),
          onDoubleClick: () => T(N, V),
          onMouseEnter: () => v({ row: N, col: V }),
          onMouseLeave: () => v(null),
          style: {
            backgroundColor: U ? "#dbeafe" : J ? "#f1f5f9" : "#ffffff",
            borderRadius: "6px",
            border: U ? "2px solid #3b82f6" : "2px solid transparent",
            transition: "all 0.2s ease",
            cursor: "pointer",
            position: "relative"
          },
          children: D(N, V)
        },
        y(N, V)
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
}, H0 = [
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
], LN = () => {
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
  ]), [r, n] = W(null), [i, o] = W(""), a = H0.filter(
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
  }, f = (p, h) => {
    c(p, "name", h), o(h), n(h ? p : null);
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
        ["morning", "afternoon", "evening", "night"].map((h) => /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ d.jsx(
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
          /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ d.jsx(
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
}, BN = () => {
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
  }), [r, n] = W(null), [i, o] = W(""), [a, l] = W(null), [c, s] = W(""), u = H0.filter(
    (w) => w.name.toLowerCase().includes(i.toLowerCase()) || w.generic.toLowerCase().includes(i.toLowerCase())
  ), f = () => {
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
  }, b = (w) => {
    const S = e.find((O) => O.id === w);
    s(S?.comment || ""), l(w);
  }, x = () => {
    l(null), s("");
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
      /* @__PURE__ */ d.jsx("tbody", { children: e.map((w) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
        /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: "white" }, children: [
          /* @__PURE__ */ d.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
            /* @__PURE__ */ d.jsx(
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
            w.comment && /* @__PURE__ */ d.jsxs("div", { style: {
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
              /* @__PURE__ */ d.jsx("span", { style: { flex: 1, wordBreak: "break-word" }, children: w.comment }),
              /* @__PURE__ */ d.jsx(
                "button",
                {
                  onClick: () => b(w.id),
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
            r === w.id && /* @__PURE__ */ d.jsx("div", { style: {
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
            }, children: u.map((S) => /* @__PURE__ */ d.jsxs(
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
                  /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: S.name }),
                  /* @__PURE__ */ d.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                    "(",
                    S.generic,
                    ")"
                  ] }),
                  /* @__PURE__ */ d.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: S.dosage })
                ]
              },
              S.id
            )) })
          ] }),
          /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ d.jsx(
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
          ["morning", "afternoon", "evening", "night"].map((S) => /* @__PURE__ */ d.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: [
            /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
              /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ d.jsx(
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
              /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ d.jsx(
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
            S === "night" && /* @__PURE__ */ d.jsx("div", { style: { marginTop: "8px" }, children: /* @__PURE__ */ d.jsx(
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
        a === w.id && /* @__PURE__ */ d.jsx("tr", { children: /* @__PURE__ */ d.jsx("td", { colSpan: 6, style: { padding: "0", border: "1px solid #ddd" }, children: /* @__PURE__ */ d.jsxs("div", { style: {
          backgroundColor: "#e4e7fd",
          border: "2px solid #4f67ff",
          borderRadius: "4px",
          padding: "8px",
          margin: "4px"
        }, children: [
          /* @__PURE__ */ d.jsx(
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
          /* @__PURE__ */ d.jsxs("div", { style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            marginTop: "8px"
          }, children: [
            /* @__PURE__ */ d.jsx(
              "button",
              {
                onClick: x,
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
function qe() {
  const e = ve(null), [t, r] = W({ width: 0, height: 0 });
  Se(() => {
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
const WN = ({
  title: e,
  paymentMethods: t
}) => {
  const { ref: r, fs: n } = qe();
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
  title: a
}) => {
  const { ref: l, width: c, fs: s, scale: u } = qe(), [f, p] = W(null), h = 20, g = 15, v = c || 600, y = Math.max(...e.map((N) => N.value)), b = ((N) => {
    const V = Math.pow(10, Math.floor(Math.log10(N))), U = N / V;
    let J;
    U <= 1 ? J = 0.2 * V : U <= 2 ? J = 0.5 * V : U <= 5 ? J = V : J = 2 * V;
    const $ = [];
    for (let re = 0; re <= Math.ceil(N / J); re++) $.push(re * J);
    return $;
  })(y), x = Math.max(...b.map((N) => N.toLocaleString("en-IN").length)), w = Math.max(65, x * 9 + 16), S = v - w * 2, O = t - h - g, C = S / (e.length - 1 || 1), T = 10 * u * 0.6, E = Math.max(...e.map((N) => N.label.length)), _ = E * T > C, D = _ ? E * T * 0.7 : 20, k = e.map((N, V) => {
    const U = w + S / (e.length - 1) * V, J = h + O - N.value / (b[b.length - 1] || 1) * O;
    return { x: U, y: J, ...N };
  }), F = k.map((N, V) => `${V === 0 ? "M" : "L"} ${N.x} ${N.y}`).join(" ");
  return /* @__PURE__ */ d.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    a && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: a }),
    v > 0 && /* @__PURE__ */ d.jsxs("svg", { width: v, height: t + g + (_ ? D - 20 : 0), children: [
      o && /* @__PURE__ */ d.jsx("g", { children: b.map((N, V) => {
        const U = h + O - N / (b[b.length - 1] || 1) * O;
        return /* @__PURE__ */ d.jsxs("g", { children: [
          /* @__PURE__ */ d.jsx("line", { x1: w, y1: U, x2: v - w, y2: U, stroke: "#e0e0e0", strokeWidth: "1" }),
          /* @__PURE__ */ d.jsx("text", { x: w - 6, y: U + 4, textAnchor: "end", fontSize: s(9), fill: "#888", children: N.toLocaleString("en-IN") })
        ] }, V);
      }) }),
      /* @__PURE__ */ d.jsx("path", { d: F, fill: "none", stroke: r, strokeWidth: n }),
      i && k.map((N, V) => /* @__PURE__ */ d.jsxs("g", { children: [
        /* @__PURE__ */ d.jsx(
          "circle",
          {
            cx: N.x,
            cy: N.y,
            r: "4",
            fill: N.color || r,
            style: { cursor: "pointer" },
            onMouseEnter: (U) => p({ x: U.clientX, y: U.clientY, label: N.label, value: N.value }),
            onMouseMove: (U) => p((J) => J ? { ...J, x: U.clientX, y: U.clientY } : null),
            onMouseLeave: () => p(null)
          }
        ),
        /* @__PURE__ */ d.jsx(
          "text",
          {
            x: V === 0 ? N.x + 4 : V === k.length - 1 ? N.x - 4 : N.x,
            y: N.y - 8,
            textAnchor: V === 0 ? "start" : V === k.length - 1 ? "end" : "middle",
            fontSize: s(9),
            fill: "#444",
            pointerEvents: "none",
            children: N.value.toLocaleString("en-IN")
          }
        )
      ] }, V)),
      k.map((N, V) => _ ? /* @__PURE__ */ d.jsx(
        "text",
        {
          x: N.x,
          y: h + O + 8,
          fontSize: s(10),
          fill: "#666",
          textAnchor: "end",
          transform: `rotate(-40, ${N.x}, ${h + O + 8})`,
          children: N.label.includes(" | ") ? N.label.split(" | ").map((U, J) => /* @__PURE__ */ d.jsx("tspan", { x: N.x, dy: J === 0 ? 0 : 12, children: U }, J)) : N.label
        },
        V
      ) : /* @__PURE__ */ d.jsx("text", { x: N.x, y: h + O + 20, textAnchor: "middle", fontSize: s(10), fill: "#666", children: N.label.includes(" | ") ? N.label.split(" | ").map((U, J) => /* @__PURE__ */ d.jsx("tspan", { x: N.x, dy: J === 0 ? 0 : 12, children: U }, J)) : N.label }, V))
    ] }),
    f && /* @__PURE__ */ d.jsxs("div", { style: {
      position: "fixed",
      left: f.x + 12,
      top: f.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: s(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: f.label }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Value: ",
        f.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
};
function jc(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function E2(e, t) {
  const r = jc(e);
  return Math.max(30, r.length * t + 10);
}
const A2 = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  showValues: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: c, scale: s } = qe(), u = 20, f = 15, p = 10, h = e.length > 0 ? Math.max(...e.map((_) => _.value), 0) : 1, g = Math.max(6, 8 * s), v = E2(h, g), y = l || 600, m = y - v - p, b = t - u - f, x = m / (e.length || 1) * 0.7, w = m / (e.length || 1), S = 10 * s * 0.6, O = e.length > 0 ? Math.max(...e.map((_) => _.label.length)) : 0, C = O * S > w, T = C ? O * S * 0.7 : 20, E = [0, 0.25, 0.5, 0.75, 1];
  return /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: c(12), fontWeight: "bold", color: "#003357" }, children: o }),
    y > 0 && /* @__PURE__ */ d.jsxs(
      "svg",
      {
        width: y,
        height: t + f + (C ? T - 20 : 0),
        children: [
          E.map((_, D) => {
            const k = u + b * (1 - _), F = h * _, N = jc(F);
            return /* @__PURE__ */ d.jsxs("g", { children: [
              i && /* @__PURE__ */ d.jsx(
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
              /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: v - 6,
                  y: k,
                  textAnchor: "end",
                  dominantBaseline: "middle",
                  fontSize: c(10),
                  fill: "#888",
                  children: N
                }
              )
            ] }, D);
          }),
          e.map((_, D) => {
            const k = h > 0 ? _.value / h * b : 0, F = v + w * D + (w - x) / 2, N = u + b - k;
            return /* @__PURE__ */ d.jsxs("g", { children: [
              /* @__PURE__ */ d.jsx(
                "rect",
                {
                  x: F,
                  y: N,
                  width: x,
                  height: k,
                  fill: _.color || r,
                  rx: "4"
                }
              ),
              n && /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: F + x / 2,
                  y: N - 5,
                  textAnchor: "middle",
                  fontSize: c(10),
                  fill: "#555",
                  fontWeight: "bold",
                  children: jc(_.value)
                }
              ),
              C ? /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: F + x / 2,
                  y: u + b + 8,
                  fontSize: c(10),
                  fill: "#666",
                  textAnchor: "end",
                  transform: `rotate(-40, ${F + x / 2}, ${u + b + 8})`,
                  children: _.label.includes(" | ") ? _.label.split(" | ").map((V, U) => /* @__PURE__ */ d.jsx("tspan", { x: F + x / 2, dy: U === 0 ? 0 : 12, children: V }, U)) : _.label
                }
              ) : /* @__PURE__ */ d.jsx(
                "text",
                {
                  x: F + x / 2,
                  y: u + b + 20,
                  textAnchor: "middle",
                  fontSize: c(10),
                  fill: "#666",
                  children: _.label.includes(" | ") ? _.label.split(" | ").map((V, U) => /* @__PURE__ */ d.jsx("tspan", { x: F + x / 2, dy: U === 0 ? 0 : 12, children: V }, U)) : _.label
                }
              )
            ] }, D);
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
  const [r, n, i] = T2(e), o = [...t].sort((c, s) => c.value - s.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((c, s) => {
    const u = a === 1 ? 0.5 : s / (a - 1), f = (h) => Math.round(220 - u * (220 - h)), p = (h) => f(h).toString(16).padStart(2, "0");
    l.set(c, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((c) => l.get(c));
}
const M2 = ({
  data: e,
  showLegend: t = !0,
  title: r,
  baseColor: n
}) => {
  const { ref: i, width: o, fs: a } = qe(), [l, c] = W(null), s = o || 400, u = Math.max(100, Math.min(s, 400)), f = s / 2, p = u / 2, h = u / 2 - 20, g = n ? I2(n, e) : null, v = e.reduce((b, x) => b + x.value, 0);
  let y = -90;
  const m = e.map((b) => {
    const x = b.value / v * 100, w = b.value / v * 360, S = y, O = y + w, C = S * Math.PI / 180, T = O * Math.PI / 180, E = f + h * Math.cos(C), _ = p + h * Math.sin(C), D = f + h * Math.cos(T), k = p + h * Math.sin(T), F = w > 180 ? 1 : 0, N = `M ${f} ${p} L ${E} ${_} A ${h} ${h} 0 ${F} 1 ${D} ${k} Z`;
    y = O;
    const V = g ? g[e.indexOf(b)] : b.color ?? "#4a90e2";
    return { ...b, path: N, percentage: x, color: V };
  });
  return /* @__PURE__ */ d.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: a(12), fontWeight: "bold", color: "#003357" }, children: r }),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }, children: [
      u > 0 && /* @__PURE__ */ d.jsx("svg", { width: s, height: u, style: { display: "block" }, children: e.length === 1 ? /* @__PURE__ */ d.jsx(
        "circle",
        {
          cx: f,
          cy: p,
          r: h,
          fill: m[0].color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (b) => c({ x: b.clientX, y: b.clientY, label: m[0].label, value: m[0].value, percentage: 100 }),
          onMouseMove: (b) => c((x) => x ? { ...x, x: b.clientX, y: b.clientY } : null),
          onMouseLeave: () => c(null),
          style: { cursor: "pointer" }
        }
      ) : m.map((b, x) => /* @__PURE__ */ d.jsx(
        "path",
        {
          d: b.path,
          fill: b.color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (w) => c({ x: w.clientX, y: w.clientY, label: b.label, value: b.value, percentage: b.percentage }),
          onMouseMove: (w) => c((S) => S ? { ...S, x: w.clientX, y: w.clientY } : null),
          onMouseLeave: () => c(null),
          style: { cursor: "pointer" }
        },
        x
      )) }),
      t && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 24px" }, children: m.map((b, x) => /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: "12px", height: "12px", backgroundColor: b.color, borderRadius: "3px", flexShrink: 0 } }),
        /* @__PURE__ */ d.jsxs("span", { style: { fontSize: a(12), color: "#333" }, children: [
          b.label,
          ": ",
          b.value.toLocaleString("en-IN")
        ] })
      ] }, x)) })
    ] }),
    l && /* @__PURE__ */ d.jsxs("div", { style: {
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
      /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: l.label }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Value: ",
        l.value.toLocaleString("en-IN")
      ] }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Percentage: ",
        l.percentage.toFixed(1),
        "%"
      ] })
    ] })
  ] });
}, FN = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  showLabels: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: c } = qe(), s = 60, u = l || 600, f = u - s * 2, p = t - s * 2, h = Math.max(...e.map((m) => m.x)), g = Math.max(...e.map((m) => m.y)), v = Math.max(...e.map((m) => m.size)), y = e.map((m) => ({
    ...m,
    cx: s + m.x / h * f,
    cy: s + p - m.y / g * p,
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
    o && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: c(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ d.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ d.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((m, b) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
        /* @__PURE__ */ d.jsx("line", { x1: s, y1: s + p * m, x2: u - s, y2: s + p * m, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ d.jsx("line", { x1: s + f * m, y1: s, x2: s + f * m, y2: t - s, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, b)) }),
      y.map((m, b) => /* @__PURE__ */ d.jsxs("g", { children: [
        /* @__PURE__ */ d.jsx("circle", { cx: m.cx, cy: m.cy, r: m.r, fill: m.color || r, opacity: "0.7", stroke: "#fff", strokeWidth: "2" }),
        n && /* @__PURE__ */ d.jsx("text", { x: m.cx, y: m.cy, textAnchor: "middle", dominantBaseline: "middle", fontSize: c(12), fill: "#fff", fontWeight: "bold", children: m.label })
      ] }, b))
    ] })
  ] });
}, VN = ({
  data: e,
  showValues: t = !0,
  colorScale: r = ["#e3f2fd", "#003357"],
  title: n
}) => {
  const { ref: i, width: o, fs: a } = qe(), l = Array.from(new Set(e.map((b) => b.x))), c = Array.from(new Set(e.map((b) => b.y))), s = 80, u = (o || 600) - s - 48, f = Math.max(30, Math.floor(u / l.length)), p = Math.max(...e.map((b) => b.value)), h = Math.min(...e.map((b) => b.value)), g = (b) => {
    const x = (b - h) / (p - h || 1), w = parseInt(r[0].slice(1, 3), 16), S = parseInt(r[0].slice(3, 5), 16), O = parseInt(r[0].slice(5, 7), 16), C = parseInt(r[1].slice(1, 3), 16), T = parseInt(r[1].slice(3, 5), 16), E = parseInt(r[1].slice(5, 7), 16);
    return `rgb(${Math.round(w + (C - w) * x)}, ${Math.round(S + (T - S) * x)}, ${Math.round(O + (E - O) * x)})`;
  }, v = (b, x) => e.find((w) => w.x === b && w.y === x)?.value ?? 0, y = l.length * f + s, m = c.length * f + s;
  return /* @__PURE__ */ d.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    n && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: a(20), fontWeight: "bold", color: "#003357" }, children: n }),
    y > 0 && /* @__PURE__ */ d.jsxs("svg", { width: y, height: m, children: [
      c.map((b, x) => /* @__PURE__ */ d.jsx(
        "text",
        {
          x: s - 10,
          y: x * f + f / 2 + s,
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: a(12),
          fill: "#666",
          children: b
        },
        `y-${x}`
      )),
      l.map((b, x) => /* @__PURE__ */ d.jsx(
        "text",
        {
          x: x * f + f / 2 + s,
          y: s - 10,
          textAnchor: "middle",
          fontSize: a(12),
          fill: "#666",
          children: b
        },
        `x-${x}`
      )),
      c.map(
        (b, x) => l.map((w, S) => {
          const O = v(w, b);
          return /* @__PURE__ */ d.jsxs("g", { children: [
            /* @__PURE__ */ d.jsx(
              "rect",
              {
                x: S * f + s,
                y: x * f + s,
                width: f,
                height: f,
                fill: g(O),
                stroke: "#fff",
                strokeWidth: "2",
                rx: "4"
              }
            ),
            t && /* @__PURE__ */ d.jsx(
              "text",
              {
                x: S * f + f / 2 + s,
                y: x * f + f / 2 + s,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontSize: a(Math.max(10, f / 4)),
                fill: "#fff",
                fontWeight: "bold",
                children: O
              }
            )
          ] }, `${S}-${x}`);
        })
      )
    ] })
  ] });
}, KN = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  pointSize: n = 6,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: c } = qe(), s = 60, u = l || 600, f = u - s * 2, p = t - s * 2, h = Math.max(...e.map((b) => b.x)), g = Math.max(...e.map((b) => b.y)), v = Math.min(...e.map((b) => b.x)), y = Math.min(...e.map((b) => b.y)), m = e.map((b) => ({
    ...b,
    cx: s + (b.x - v) / (h - v || 1) * f,
    cy: s + p - (b.y - y) / (g - y || 1) * p
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
    o && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: c(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ d.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ d.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((b, x) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
        /* @__PURE__ */ d.jsx("line", { x1: s, y1: s + p * b, x2: u - s, y2: s + p * b, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ d.jsx("line", { x1: s + f * b, y1: s, x2: s + f * b, y2: t - s, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, x)) }),
      /* @__PURE__ */ d.jsx("line", { x1: s, y1: s, x2: s, y2: t - s, stroke: "#666", strokeWidth: "2" }),
      /* @__PURE__ */ d.jsx("line", { x1: s, y1: t - s, x2: u - s, y2: t - s, stroke: "#666", strokeWidth: "2" }),
      m.map((b, x) => /* @__PURE__ */ d.jsx("circle", { cx: b.cx, cy: b.cy, r: n, fill: b.color || r, opacity: "0.7" }, x))
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
    const l = t === 1 ? 0.5 : a / (t - 1), c = (u) => Math.round(220 - l * (220 - u)), s = (u) => c(u).toString(16).padStart(2, "0");
    return `#${s(r)}${s(n)}${s(i)}`;
  });
}
const HN = ({
  data: e,
  height: t = 200,
  showLegend: r = !0,
  showGrid: n = !0,
  title: i,
  color: o
}) => {
  const { ref: a, width: l, fs: c } = qe(), [s, u] = W(null), p = Math.max(100, (l || 600) - (r ? 160 : 0) - 40), h = 20, g = 15, v = 30, y = p - v * 2, m = t - h - g, b = Math.max(...e.map((T) => T.stacks.reduce((E, _) => E + _.value, 0))), x = y / e.length * 0.7, w = y / e.length, S = Array.from(new Set(e.flatMap((T) => T.stacks.map((E) => E.label)))), O = o ? R2(o, S.length) : null, C = /* @__PURE__ */ new Map();
  return S.forEach((T, E) => {
    const _ = e.flatMap((D) => D.stacks).find((D) => D.label === T)?.color;
    C.set(T, O ? O[E] : _ ?? "#4a90e2");
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
    i && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: c(12), fontWeight: "bold", color: "#003357" }, children: i }),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "40px", alignItems: "flex-start" }, children: [
      p > 0 && /* @__PURE__ */ d.jsxs("svg", { width: p, height: t + g, children: [
        n && /* @__PURE__ */ d.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((T, E) => {
          const _ = h + m * (1 - T);
          return /* @__PURE__ */ d.jsx("line", { x1: v, y1: _, x2: p - v, y2: _, stroke: "#e0e0e0", strokeWidth: "1" }, E);
        }) }),
        e.map((T, E) => {
          const _ = v + w * E + (w - x) / 2;
          let D = h + m;
          return /* @__PURE__ */ d.jsxs("g", { children: [
            T.stacks.map((k, F) => {
              const N = k.value / b * m, V = D - N;
              return D = V, /* @__PURE__ */ d.jsx(
                "rect",
                {
                  x: _,
                  y: V,
                  width: x,
                  height: N,
                  fill: C.get(k.label) ?? "#4a90e2",
                  onMouseEnter: (U) => {
                    const J = U.currentTarget.getBoundingClientRect();
                    u({ x: J.left + J.width / 2, y: J.top, label: k.label, value: k.value });
                  },
                  onMouseLeave: () => u(null),
                  style: { cursor: "pointer" }
                },
                F
              );
            }),
            /* @__PURE__ */ d.jsx("text", { x: _ + x / 2, y: h + m + 20, textAnchor: "middle", fontSize: c(12), fill: "#666", children: T.category })
          ] }, E);
        })
      ] }),
      r && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }, children: S.map((T, E) => /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ d.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: C.get(T), borderRadius: "4px" } }),
        /* @__PURE__ */ d.jsx("span", { style: { fontSize: c(14), color: "#333" }, children: T })
      ] }, E)) })
    ] }),
    s && /* @__PURE__ */ d.jsxs("div", { style: {
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
      /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: s.label }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        "Value: ",
        s.value
      ] })
    ] })
  ] });
}, qN = ({
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
  const { ref: l, fs: c } = qe(), u = l2().replace(/:/g, "_"), f = o, h = ((S) => {
    const O = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(S);
    return O ? { r: parseInt(O[1], 16), g: parseInt(O[2], 16), b: parseInt(O[3], 16) } : { r: 255, g: 255, b: 255 };
  })(a), v = (0.299 * h.r + 0.587 * h.g + 0.114 * h.b) / 255 < 0.5, y = `rgba(${h.r}, ${h.g}, ${h.b}, 0.55)`, m = v ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)", b = v ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.85)", x = "rgba(255,255,255,0.0)", w = `
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
    /* @__PURE__ */ d.jsx("style", { children: w }),
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
        onMouseEnter: (S) => {
          S.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        },
        onMouseLeave: (S) => {
          S.currentTarget.style.transform = "translateY(0) scale(1)";
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
                    background: `linear-gradient(90deg, ${x} 0%, ${b} 50%, ${x} 100%)`,
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
                          fontSize: c(13),
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
                          fontSize: c(28),
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
                    fontSize: c(38),
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
}, UN = ({
  value: e,
  max: t = 100,
  min: r = 0,
  title: n,
  unit: i = "%",
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0"
}) => {
  const { ref: l, width: c, fs: s } = qe(), u = Math.max(120, Math.min(c || 220, 320)), f = Math.max(r, Math.min(t, e)), p = (f - r) / (t - r) * 100, h = 225, g = 315, v = g - h, y = h + p / 100 * v, m = u / 2, b = u / 2 + 10, x = u / 2 - 40, w = (_, D) => {
    const k = (_ - 90) * Math.PI / 180;
    return { x: m + D * Math.cos(k), y: b + D * Math.sin(k) };
  }, S = (_, D) => {
    const k = w(_, x), F = w(D, x), N = D - _ <= 180 ? 0 : 1;
    return `M ${k.x} ${k.y} A ${x} ${x} 0 ${N} 1 ${F.x} ${F.y}`;
  }, O = h + p / 100 * v, C = w(y, x - 15), T = w(y - 90, 6), E = w(y + 90, 6);
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
    n && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: s(18), fontWeight: "bold", color: "#003357", textAlign: "center" }, children: n }),
    u > 0 && /* @__PURE__ */ d.jsxs("svg", { width: u, height: u * 0.75, style: { overflow: "visible" }, children: [
      /* @__PURE__ */ d.jsx("defs", { children: /* @__PURE__ */ d.jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ d.jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodOpacity: "0.3" }) }) }),
      /* @__PURE__ */ d.jsx("path", { d: S(h, g), fill: "none", stroke: a, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ d.jsx("path", { d: S(h, O), fill: "none", stroke: o, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ d.jsx("polygon", { points: `${C.x},${C.y} ${T.x},${T.y} ${E.x},${E.y}`, fill: "#333", filter: "url(#shadow)" }),
      /* @__PURE__ */ d.jsx("circle", { cx: m, cy: b, r: "10", fill: "#333" }),
      /* @__PURE__ */ d.jsx("circle", { cx: m, cy: b, r: "6", fill: "#fff" }),
      /* @__PURE__ */ d.jsxs("text", { x: m, y: b + 45, textAnchor: "middle", fontSize: s(Math.max(16, u / 7)), fontWeight: "bold", fill: o, children: [
        f,
        i
      ] }),
      /* @__PURE__ */ d.jsx("text", { x: w(h, x + 20).x - 5, y: w(h, x + 20).y, textAnchor: "end", fontSize: s(14), fill: "#666", fontWeight: "500", children: r }),
      /* @__PURE__ */ d.jsx("text", { x: w(g, x + 20).x + 5, y: w(g, x + 20).y, textAnchor: "start", fontSize: s(14), fill: "#666", fontWeight: "500", children: t })
    ] })
  ] });
}, YN = ({
  value: e,
  max: t = 100,
  label: r,
  showPercentage: n = !0,
  height: i = 24,
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0",
  animated: l = !1
}) => {
  const { ref: c, fs: s } = qe(), u = Math.min(100, Math.max(0, e / t * 100));
  return /* @__PURE__ */ d.jsxs("div", { ref: c, style: { width: "100%", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }, children: [
    r && /* @__PURE__ */ d.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: s(14),
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
    }, children: !r && n && u > 10 && /* @__PURE__ */ d.jsxs("span", { style: { color: "#fff", fontSize: s(12), fontWeight: "bold" }, children: [
      u.toFixed(0),
      "%"
    ] }) }) })
  ] });
}, GN = ({ data: e, title: t, maxHeight: r = 400 }) => {
  const { ref: n, fs: i } = qe(), o = {
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
      /* @__PURE__ */ d.jsx("tbody", { children: e.map((l, c) => /* @__PURE__ */ d.jsx("tr", { style: { backgroundColor: c % 2 === 0 ? "#f9f9f9" : "#fff" }, children: a.map((s) => /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", borderBottom: "1px solid #e0e0e0", color: "#333", fontSize: i(13) }, children: l[s] !== null && l[s] !== void 0 ? String(l[s]) : "-" }, s)) }, c)) })
    ] }) })
  ] });
}, XN = ({
  data: e,
  rowField: t,
  columnField: r,
  valueField: n,
  aggregation: i = "sum",
  title: o
}) => {
  const a = tr(() => {
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
    }, f = {};
    return l.forEach((p) => {
      f[p] = {}, c.forEach((h) => {
        f[p][h] = s[p]?.[h] ? u(s[p][h]) : 0;
      });
    }), { rows: Array.from(l), cols: Array.from(c), result: f };
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
      /* @__PURE__ */ d.jsx("tbody", { children: a.rows.map((l, c) => /* @__PURE__ */ d.jsxs("tr", { style: { backgroundColor: c % 2 === 0 ? "#f9f9f9" : "#fff" }, children: [
        /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", color: "#000000", fontWeight: "600", borderBottom: "1px solid #e0e0e0", position: "sticky", left: 0, backgroundColor: c % 2 === 0 ? "#f9f9f9" : "#fff" }, children: l }),
        a.cols.map((s) => /* @__PURE__ */ d.jsx("td", { style: { padding: "12px", textAlign: "right", borderBottom: "1px solid #e0e0e0", color: "#333" }, children: a.result[l][s].toFixed(2) }, s))
      ] }, l)) })
    ] }) })
  ] });
}, ZN = ({
  items: e,
  title: t,
  maxHeight: r = 400,
  showNumbers: n = !1,
  defaultColor: i = "#003357"
}) => {
  const { ref: o, fs: a } = qe(), l = {
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
    /* @__PURE__ */ d.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: /* @__PURE__ */ d.jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: e.map((c, s) => /* @__PURE__ */ d.jsxs(
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
          n && /* @__PURE__ */ d.jsx("span", { style: {
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
          c.icon && /* @__PURE__ */ d.jsx("div", { style: { fontSize: a(20) }, children: c.icon }),
          c.status && /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: l[c.status] } }),
          /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "600", color: "#333", marginBottom: "4px", fontSize: a(14) }, children: c.title }),
            c.subtitle && /* @__PURE__ */ d.jsx("div", { style: { fontSize: a(13), color: "#666" }, children: c.subtitle })
          ] }),
          c.timestamp && /* @__PURE__ */ d.jsx("div", { style: { fontSize: a(12), color: "#999", whiteSpace: "nowrap" }, children: c.timestamp })
        ]
      },
      c.id
    )) }) })
  ] });
}, JN = ({
  markers: e,
  title: t,
  height: r = 400,
  centerLat: n = 0,
  centerLng: i = 0,
  zoom: o = 10,
  apiKey: a
}) => {
  const { ref: l, fs: c } = qe(), s = `${n},${i}`, u = e.map((p) => `markers=color:red%7C${p.lat},${p.lng}`).join("&"), f = a ? `https://www.google.com/maps/embed/v1/view?key=${a}&center=${s}&zoom=${o}` : `https://maps.google.com/maps?q=${s}&z=${o}&output=embed${e.length > 0 ? "&" + u : ""}`;
  return /* @__PURE__ */ d.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: c(18), fontWeight: "bold", color: "#003357" }, children: t }),
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
}, QN = ({
  content: e,
  title: t,
  variant: r = "description",
  align: n = "left",
  color: i,
  backgroundColor: o = "#ffffff"
}) => {
  const { ref: a, fs: l } = qe(), c = {
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
    /* @__PURE__ */ d.jsx("div", { style: { ...c[r], textAlign: n, whiteSpace: "pre-wrap" }, children: e })
  ] });
}, e$ = ({
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
  const { ref: s, fs: u } = qe();
  return /* @__PURE__ */ d.jsxs("div", { ref: s, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: u(18), fontWeight: "bold", color: "#003357" }, children: r }),
    /* @__PURE__ */ d.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }, children: t === "image" ? /* @__PURE__ */ d.jsx("img", { src: e, alt: n, style: { width: i, height: o, display: "block", objectFit: "cover" } }) : /* @__PURE__ */ d.jsx("video", { src: e, width: i, height: o, autoPlay: a, controls: l, loop: c, style: { display: "block" }, children: "Your browser does not support the video tag." }) })
  ] });
}, t$ = ({
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
  step: f = 1
}) => {
  const [p, h] = W(r || (i === "multiselect" || i === "tags" ? [] : t[0]?.value || "")), [g, v] = W(""), [y, m] = W(/* @__PURE__ */ new Set()), [b, x] = W(r || { start: "", end: "" }), [w, S] = W(r || { min: s, max: u }), [O, C] = W(""), T = tr(() => !a || !g ? t : t.filter(
    ($) => $.label.toLowerCase().includes(g.toLowerCase())
  ), [t, g, a]), E = ($) => {
    h($), n($);
  }, _ = ($) => {
    const re = Array.isArray(p) ? p : [], te = re.includes($) ? re.filter((z) => z !== $) : c && re.length >= c ? re : [...re, $];
    h(te), n(te);
  }, D = () => {
    const $ = i === "multiselect" || i === "tags" ? [] : "";
    h($), n($);
  }, k = ($) => {
    const re = new Set(y);
    re.has($) ? re.delete($) : re.add($), m(re);
  }, F = ($, re) => {
    const te = { ...b, [$]: re };
    x(te), n(te);
  }, N = ($, re) => {
    const te = { ...w, [$]: re };
    S(te), n(te);
  }, V = ($) => {
    if (!$.trim()) return;
    const re = Array.isArray(p) ? p : [];
    if (!re.includes($)) {
      const te = [...re, $.trim()];
      h(te), n(te);
    }
    C("");
  }, U = ($) => {
    const te = (Array.isArray(p) ? p : []).filter((z) => z !== $);
    h(te), n(te);
  }, J = ($, re = 0) => /* @__PURE__ */ d.jsx("div", { style: { marginLeft: re * 20 }, children: $.map((te) => /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        style: { display: "flex", alignItems: "center", padding: "8px", cursor: "pointer", borderRadius: "4px", backgroundColor: (Array.isArray(p) ? p.includes(te.value) : p === te.value) ? "#e6f2ff" : "transparent" },
        onClick: () => _(te.value),
        children: [
          te.children && /* @__PURE__ */ d.jsx("span", { onClick: (z) => {
            z.stopPropagation(), k(te.value);
          }, style: { marginRight: "8px", fontSize: "12px" }, children: y.has(te.value) ? "▼" : "▶" }),
          /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(te.value), onChange: () => {
          }, style: { marginRight: "8px" } }),
          /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: te.disabled ? "#999" : "#333" }, children: te.label }),
          te.count !== void 0 && /* @__PURE__ */ d.jsxs("span", { style: { marginLeft: "auto", fontSize: "12px", color: "#666" }, children: [
            "(",
            te.count,
            ")"
          ] })
        ]
      }
    ),
    te.children && y.has(te.value) && J(te.children, re + 1)
  ] }, te.value)) });
  return /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      e && /* @__PURE__ */ d.jsx("h3", { style: { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: e }),
      l && (i === "multiselect" || i === "tags" ? Array.isArray(p) && p.length > 0 : p) && /* @__PURE__ */ d.jsx("button", { onClick: D, style: { padding: "4px 12px", fontSize: "12px", border: "none", borderRadius: "4px", backgroundColor: "#f0f0f0", color: "#666", cursor: "pointer" }, children: "Clear" })
    ] }),
    a && i !== "daterange" && i !== "numericrange" && /* @__PURE__ */ d.jsx("input", { type: "text", value: g, onChange: ($) => v($.target.value), placeholder: "Search...", style: { width: "90%", padding: "10px", marginBottom: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "dropdown" && /* @__PURE__ */ d.jsxs("select", { value: p, onChange: ($) => E($.target.value), style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: "#fff", color: "#333", cursor: "pointer", outline: "none" }, children: [
      o && /* @__PURE__ */ d.jsx("option", { value: "", children: o }),
      T.map(($) => /* @__PURE__ */ d.jsxs("option", { value: $.value, disabled: $.disabled, children: [
        $.label,
        " ",
        $.count !== void 0 && `(${$.count})`
      ] }, $.value))
    ] }),
    i === "buttons" && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: T.map(($) => /* @__PURE__ */ d.jsxs("button", { onClick: () => E($.value), disabled: $.disabled, style: { padding: "10px 20px", fontSize: "14px", fontWeight: "600", border: p === $.value ? "2px solid #003357" : "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: p === $.value ? "#003357" : "#fff", color: p === $.value ? "#fff" : "#333", cursor: $.disabled ? "not-allowed" : "pointer", opacity: $.disabled ? 0.5 : 1, transition: "all 0.2s" }, children: [
      $.label,
      " ",
      $.count !== void 0 && `(${$.count})`
    ] }, $.value)) }),
    i === "multiselect" && /* @__PURE__ */ d.jsx("div", { style: { maxHeight: "300px", overflowY: "auto", border: "1px solid #d0d0d0", borderRadius: "8px", padding: "8px" }, children: T.map(($) => /* @__PURE__ */ d.jsxs("label", { style: { display: "flex", alignItems: "center", padding: "10px", cursor: $.disabled ? "not-allowed" : "pointer", borderRadius: "4px", transition: "background 0.2s", backgroundColor: Array.isArray(p) && p.includes($.value) ? "#e6f2ff" : "transparent" }, children: [
      /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes($.value), onChange: () => _($.value), disabled: $.disabled, style: { marginRight: "10px", cursor: $.disabled ? "not-allowed" : "pointer" } }),
      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "14px", color: $.disabled ? "#999" : "#333", flex: 1 }, children: $.label }),
      $.count !== void 0 && /* @__PURE__ */ d.jsxs("span", { style: { fontSize: "12px", color: "#666" }, children: [
        "(",
        $.count,
        ")"
      ] })
    ] }, $.value)) }),
    i === "search" && /* @__PURE__ */ d.jsx("input", { type: "text", value: p, onChange: ($) => {
      h($.target.value), n($.target.value);
    }, placeholder: o, style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "daterange" && /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: [
      /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ d.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Start Date" }),
        /* @__PURE__ */ d.jsx("input", { type: "date", value: b.start, onChange: ($) => F("start", $.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] }),
      /* @__PURE__ */ d.jsx("span", { style: { marginTop: "20px", color: "#666" }, children: "—" }),
      /* @__PURE__ */ d.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ d.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "End Date" }),
        /* @__PURE__ */ d.jsx("input", { type: "date", value: b.end, onChange: ($) => F("end", $.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "numericrange" && /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#666" }, children: [
        /* @__PURE__ */ d.jsxs("span", { children: [
          "Min: ",
          w.min
        ] }),
        /* @__PURE__ */ d.jsxs("span", { children: [
          "Max: ",
          w.max
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ d.jsx("input", { type: "range", min: s, max: u, step: f, value: w.min, onChange: ($) => N("min", Number($.target.value)), style: { flex: 1 } }),
        /* @__PURE__ */ d.jsx("input", { type: "range", min: s, max: u, step: f, value: w.max, onChange: ($) => N("max", Number($.target.value)), style: { flex: 1 } })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "12px", marginTop: "12px" }, children: [
        /* @__PURE__ */ d.jsx("input", { type: "number", min: s, max: u, step: f, value: w.min, onChange: ($) => N("min", Number($.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ d.jsx("input", { type: "number", min: s, max: u, step: f, value: w.max, onChange: ($) => N("max", Number($.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "hierarchical" && J(T),
    i === "tags" && /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", gap: "8px", marginBottom: "12px" }, children: [
        /* @__PURE__ */ d.jsx("input", { type: "text", value: O, onChange: ($) => C($.target.value), onKeyDown: ($) => $.key === "Enter" && V(O), placeholder: "Add tag...", style: { flex: 1, padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ d.jsx("button", { onClick: () => V(O), style: { padding: "10px 20px", fontSize: "14px", border: "none", borderRadius: "8px", backgroundColor: "#003357", color: "#fff", cursor: "pointer" }, children: "Add" })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: Array.isArray(p) && p.map(($) => /* @__PURE__ */ d.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", fontSize: "14px", backgroundColor: "#e6f2ff", color: "#003357", borderRadius: "16px" }, children: [
        $,
        /* @__PURE__ */ d.jsx("button", { onClick: () => U($), style: { border: "none", background: "none", color: "#003357", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }, children: "×" })
      ] }, $)) })
    ] }),
    (i === "multiselect" || i === "hierarchical") && Array.isArray(p) && p.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { marginTop: "12px", padding: "8px", backgroundColor: "#f5f5f5", borderRadius: "8px", fontSize: "12px", color: "#666" }, children: [
      "Selected: ",
      p.length,
      " ",
      c && `/ ${c}`
    ] })
  ] });
}, r$ = ({
  alerts: e,
  title: t,
  maxHeight: r = 400,
  onDismiss: n
}) => {
  const { ref: i, fs: o } = qe(), a = {
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
      const c = a[l.type];
      return /* @__PURE__ */ d.jsxs(
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
            /* @__PURE__ */ d.jsx("span", { style: { fontSize: o(18), fontWeight: "bold" }, children: c.icon }),
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
const qo = [], n$ = (e, t = "info", r = 3e3) => {
  const n = { id: `toast-${++N2}`, message: e, type: t, duration: r };
  qo.forEach((i) => i(n));
}, i$ = ({ position: e = "top-right", maxToasts: t = 5 }) => {
  const [r, n] = W([]), i = _e((s) => {
    n((u) => [s, ...u].slice(0, t)), s.duration && setTimeout(() => o(s.id), s.duration);
  }, [t]), o = (s) => {
    n((u) => u.filter((f) => f.id !== s));
  };
  Se(() => (qo.push(i), () => {
    const s = qo.indexOf(i);
    s > -1 && qo.splice(s, 1);
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
  return /* @__PURE__ */ d.jsxs("div", { style: a(), children: [
    r.map((s) => /* @__PURE__ */ d.jsxs("div", { style: { ...l(s.type), color: "#fff", padding: "12px 16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "12px", minWidth: "300px", maxWidth: "500px", animation: "slideIn 0.3s ease-out", fontFamily: "Arial, sans-serif" }, children: [
      /* @__PURE__ */ d.jsx("span", { style: { fontSize: "18px", fontWeight: "bold" }, children: c(s.type) }),
      /* @__PURE__ */ d.jsx("span", { style: { flex: 1, fontSize: "14px" }, children: s.message }),
      /* @__PURE__ */ d.jsx("button", { onClick: () => o(s.id), style: { background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px", padding: 0, lineHeight: 1 }, children: "×" })
    ] }, s.id)),
    /* @__PURE__ */ d.jsx("style", { children: `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      ` })
  ] });
}, o$ = ({
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
  const s = ve(null), u = ve(null), f = ve([]), { ref: p, fs: h } = qe(), g = {
    lat: n ?? (e.length > 0 ? e.reduce((y, m) => y + m.lat, 0) / e.length : 51.5074),
    lng: i ?? (e.length > 0 ? e.reduce((y, m) => y + m.lng, 0) / e.length : -0.1278)
  }, v = (y) => {
    const m = Math.max(...e.map((w) => w.value)), b = 40;
    return (b + y / m * (100 - b)) * a;
  };
  return Se(() => {
    const y = () => {
      if (window.L) {
        m();
        return;
      }
      const b = document.createElement("link");
      b.rel = "stylesheet", b.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(b);
      const x = document.createElement("script");
      x.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", x.async = !0, x.onload = m, document.head.appendChild(x);
    }, m = () => {
      if (!s.current || !window.L || u.current) return;
      const b = c === "satellite" ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : c === "terrain" ? "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      u.current = window.L.map(s.current).setView([g.lat, g.lng], o), window.L.tileLayer(b, {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(u.current), f.current.forEach((x) => x.remove()), f.current = [], e.forEach((x) => {
        const w = v(x.value), S = x.color || "#0066a1", O = window.L.divIcon({
          className: "custom-bubble-marker",
          html: `
            <div style="position: relative; width: ${w}px; height: ${w}px; margin-left: -${w / 2}px; margin-top: -${w / 2}px;">
              <div class="bubble-circle" style="width: ${w}px; height: ${w}px; border-radius: 50%; background-color: ${S}; opacity: 0.7; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: transform 0.3s;">
                <span style="color: #fff; font-size: ${w / 3.5}px; font-weight: bold; font-family: Arial, sans-serif;">${x.value >= 10 ? `${x.value}+` : x.value}</span>
              </div>
              ${l && x.label ? `<div style="position: absolute; top: ${w}px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #333; font-size: 12px; font-weight: 600; text-shadow: 0 0 3px #fff, 0 0 3px #fff; font-family: Arial, sans-serif;">${x.label}</div>` : ""}
            </div>
          `,
          iconSize: [w, w],
          iconAnchor: [w / 2, w / 2]
        }), C = window.L.marker([x.lat, x.lng], { icon: O });
        C.bindTooltip(`${x.label || `Location ${x.id}`}: ${x.value}`, {
          direction: "top",
          offset: [0, -w / 2],
          className: "custom-tooltip"
        }), C.on("mouseover", function(T) {
          const E = T.target.getElement()?.querySelector(".bubble-circle");
          E && (E.style.transform = "scale(1.1)");
        }), C.on("mouseout", function(T) {
          const E = T.target.getElement()?.querySelector(".bubble-circle");
          E && (E.style.transform = "scale(1)");
        }), C.addTo(u.current), f.current.push(C);
      });
    };
    return y(), () => {
      u.current && (u.current.remove(), u.current = null);
    };
  }, [e, g.lat, g.lng, o, c, a, l]), /* @__PURE__ */ d.jsxs("div", { ref: p, style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    t && /* @__PURE__ */ d.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: h(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsx("div", { style: { position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0", width: "100%", height: r }, children: /* @__PURE__ */ d.jsx("div", { ref: s, style: { width: "100%", height: "100%" } }) }),
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
  const [r, n, i] = $2(e), o = [...t].sort((c, s) => c.value - s.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((c, s) => {
    const u = a === 1 ? 0.5 : s / (a - 1), f = (h) => Math.round(220 - u * (220 - h)), p = (h) => f(h).toString(16).padStart(2, "0");
    l.set(c, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((c) => l.get(c));
}
const xr = (e) => e * Math.PI / 180;
function Ef(e, t) {
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
const So = 28, Af = 24, Tf = 15, L2 = 20, B2 = ({ data: e, title: t, total: r, baseColor: n }) => {
  const { ref: i, width: o, fs: a } = qe(), [l, c] = W(null), s = o || 600, u = s, f = Math.max(160, s * 0.28), p = Math.min(s / 2 - f, 120), h = p * 0.52, g = p + L2, v = n ? z2(n, e) : null, y = e.reduce((L, H) => L + H.value, 0), m = r ?? y, b = u / 2, x = u / 2;
  let w = -90;
  const S = e.map((L, H) => {
    const le = L.value / y * 100, me = L.value / y * 360, de = w, ue = w + me, Z = xr(de + me / 2), X = Math.cos(Z) >= 0, ae = v ? v[H] : L.color ?? "#4a90e2", K = b + g * Math.cos(Z), Me = x + g * Math.sin(Z);
    return w = ue, { ...L, pct: le, sweep: me, start: de, end: ue, mid: Z, isRight: X, ex: K, ey: Me, color: ae, idx: H };
  }), O = S.filter((L) => L.isRight), C = S.filter((L) => !L.isRight), T = Ef(O.map((L, H) => ({ idx: H, y: L.ey })), Af), E = Ef(C.map((L, H) => ({ idx: H, y: L.ey })), Af);
  let _ = 0, D = 0;
  const k = S.map((L) => {
    const H = L.isRight ? T[_++] : E[D++];
    return { ...L, labelY: H };
  }), F = k.map((L) => L.labelY), N = Math.min(...F) - So, V = Math.max(...F) + So, U = N < 0 ? -N : 0, J = b, $ = x + U, re = Math.min(N + U, $ - p - So), z = Math.max(V + U, $ + p + So) - re;
  w = -90;
  const B = e.map((L, H) => {
    const le = k[H], me = le.sweep, de = w, ue = w + me, Z = le.mid, X = J + p * Math.cos(xr(de)), ae = $ + p * Math.sin(xr(de)), K = J + p * Math.cos(xr(ue)), Me = $ + p * Math.sin(xr(ue)), xe = J + h * Math.cos(xr(ue)), M = $ + h * Math.sin(xr(ue)), Y = J + h * Math.cos(xr(de)), q = $ + h * Math.sin(xr(de)), he = me > 180 ? 1 : 0, Te = `M ${X} ${ae} A ${p} ${p} 0 ${he} 1 ${K} ${Me} L ${xe} ${M} A ${h} ${h} 0 ${he} 0 ${Y} ${q} Z`, Ee = J + (p + 2) * Math.cos(Z), fe = $ + (p + 2) * Math.sin(Z), yt = p + 30, Tt = Math.max(p + 50, y * 1.5), Xt = Math.max($ - Tt + 5, Math.min($ + Tt - 5, le.labelY + U)), En = (Xt - $) / Tt, ui = J + yt * Math.sqrt(Math.max(0, 1 - En * En)) * (le.isRight ? 1 : -1), di = ui + (le.isRight ? Tf : -Tf), An = le.isRight ? "start" : "end", Bl = di + (le.isRight ? 5 : -5);
    return w = ue, { ...le, path: Te, lineStartX: Ee, lineStartY: fe, ellipseX: ui, labelY: Xt, lx2: di, textAnchor: An, textX: Bl };
  });
  return /* @__PURE__ */ d.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ d.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: a(12), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ d.jsxs("svg", { width: u, height: z, viewBox: `0 ${re} ${u} ${z}`, style: { overflow: "visible", display: "block" }, children: [
        e.length === 1 ? /* @__PURE__ */ d.jsxs(
          "g",
          {
            onMouseEnter: (L) => c({ x: L.clientX, y: L.clientY, label: B[0].label, value: B[0].value, pct: 100 }),
            onMouseMove: (L) => c((H) => H ? { ...H, x: L.clientX, y: L.clientY } : null),
            onMouseLeave: () => c(null),
            style: { cursor: "pointer" },
            children: [
              /* @__PURE__ */ d.jsx("circle", { cx: J, cy: $, r: p, fill: B[0].color, stroke: "#fff", strokeWidth: "2" }),
              /* @__PURE__ */ d.jsx("circle", { cx: J, cy: $, r: h, fill: "#fff" })
            ]
          }
        ) : B.map((L, H) => /* @__PURE__ */ d.jsx(
          "g",
          {
            onMouseEnter: (le) => c({ x: le.clientX, y: le.clientY, label: L.label, value: L.value, pct: L.pct }),
            onMouseMove: (le) => c((me) => me ? { ...me, x: le.clientX, y: le.clientY } : null),
            onMouseLeave: () => c(null),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ d.jsx("path", { d: L.path, fill: L.color, stroke: "#fff", strokeWidth: "2" })
          },
          H
        )),
        /* @__PURE__ */ d.jsx(
          "text",
          {
            x: J,
            y: $ - 8,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: a(13),
            fontWeight: "600",
            children: "TOTAL"
          }
        ),
        /* @__PURE__ */ d.jsx(
          "text",
          {
            x: J,
            y: $ + 10,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: a(13),
            fontWeight: "700",
            children: m.toLocaleString("en-IN")
          }
        ),
        B.map((L, H) => /* @__PURE__ */ d.jsxs("g", { children: [
          /* @__PURE__ */ d.jsx(
            "polyline",
            {
              points: `${L.lineStartX},${L.lineStartY} ${L.ellipseX},${L.labelY} ${L.lx2},${L.labelY}`,
              stroke: L.color,
              strokeWidth: "1.2",
              fill: "none",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ d.jsxs(
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
        ] }, `label-${H}`))
      ] }),
      l && /* @__PURE__ */ d.jsxs("div", { style: {
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
        /* @__PURE__ */ d.jsx("div", { style: { fontWeight: "bold" }, children: l.label }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          "Value: ",
          l.value.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          "Percentage: ",
          l.pct.toFixed(1),
          "%"
        ] })
      ] })
    ] })
  ] });
}, If = ["#3b5fc0", "#2a9d5c", "#8b3fc8", "#e07b00"], a$ = ({
  title: e,
  data: t,
  columns: r = 2,
  backgroundColor: n = "#f0f2f5",
  color: i
}) => {
  const o = Object.entries(t).map(([c, s]) => ({
    label: c.replace(/_/g, " "),
    value: s
  })), { ref: a, fs: l } = qe();
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
    }, children: o.map((c, s) => /* @__PURE__ */ d.jsxs("div", { style: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "14px 16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { fontSize: l(28), fontWeight: "bold", color: i ?? If[s % If.length], lineHeight: 1 }, children: c.value }),
      /* @__PURE__ */ d.jsx("div", { style: { fontSize: l(11), color: "#999", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "6px" }, children: c.label })
    ] }, s)) })
  ] });
};
function q0(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = q0(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Pe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = q0(e)) && (n && (n += " "), n += t);
  return n;
}
var W2 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function wu(e) {
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
function U0(e) {
  return typeof e != "string" ? !1 : V2.has(e);
}
function Y0(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function qt(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (U0(r) || Y0(r)) && (t[r] = e[r]);
  return t;
}
function Gi(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Rt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return qt(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? qt(e) : null;
}
function vt(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (U0(r) || Y0(r) || wu(r)) && (t[r] = e[r]);
  return t;
}
function K2(e) {
  return e == null ? null : /* @__PURE__ */ Rt(e) ? vt(e.props) : typeof e == "object" && !Array.isArray(e) ? vt(e) : null;
}
var H2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Sc() {
  return Sc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sc.apply(null, arguments);
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
var G0 = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: o,
    className: a,
    style: l,
    title: c,
    desc: s
  } = e, u = q2(e, H2), f = o || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, p = Pe("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", Sc({}, vt(u), {
    className: p,
    width: n,
    height: i,
    style: l,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ P.createElement("title", null, c), /* @__PURE__ */ P.createElement("desc", null, s), r);
}), Y2 = ["children", "className"];
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oc.apply(null, arguments);
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
  return /* @__PURE__ */ P.createElement("g", Oc({
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
const X0 = Math.cos, Qo = Math.sin, rr = Math.sqrt, ea = Math.PI, Ga = 2 * ea, Pc = Math.PI, Cc = 2 * Pc, en = 1e-6, J2 = Cc - en;
function Z0(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Q2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Z0;
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
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Z0 : Q2(t);
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
    let a = this._x1, l = this._y1, c = n - t, s = i - r, u = a - t, f = l - r, p = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > en) if (!(Math.abs(f * c - s * u) > en) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - a, g = i - l, v = c * c + s * s, y = h * h + g * g, m = Math.sqrt(v), b = Math.sqrt(p), x = o * Math.tan((Pc - Math.acos((v + p - y) / (2 * m * b))) / 2), w = x / b, S = x / m;
      Math.abs(w - 1) > en && this._append`L${t + w * u},${r + w * f}`, this._append`A${o},${o},0,0,${+(f * h > u * g)},${this._x1 = t + S * c},${this._y1 = r + S * s}`;
    }
  }
  arc(t, r, n, i, o, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i), c = n * Math.sin(i), s = t + l, u = r + c, f = 1 ^ a, p = a ? i - o : o - i;
    this._x1 === null ? this._append`M${s},${u}` : (Math.abs(this._x1 - s) > en || Math.abs(this._y1 - u) > en) && this._append`L${s},${u}`, n && (p < 0 && (p = p % Cc + Cc), p > J2 ? this._append`A${n},${n},0,1,${f},${t - l},${r - c}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = u}` : p > en && this._append`A${n},${n},0,${+(p >= Pc)},${f},${this._x1 = t + n * Math.cos(o)},${this._y1 = r + n * Math.sin(o)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function ju(e) {
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
function Su(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function J0(e) {
  this._context = e;
}
J0.prototype = {
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
function Xa(e) {
  return new J0(e);
}
function Q0(e) {
  return e[0];
}
function ey(e) {
  return e[1];
}
function ty(e, t) {
  var r = Ie(!0), n = null, i = Xa, o = null, a = ju(l);
  e = typeof e == "function" ? e : e === void 0 ? Q0 : Ie(e), t = typeof t == "function" ? t : t === void 0 ? ey : Ie(t);
  function l(c) {
    var s, u = (c = Su(c)).length, f, p = !1, h;
    for (n == null && (o = i(h = a())), s = 0; s <= u; ++s)
      !(s < u && r(f = c[s], s, c)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()), p && o.point(+e(f, s, c), +t(f, s, c));
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
function Oo(e, t, r) {
  var n = null, i = Ie(!0), o = null, a = Xa, l = null, c = ju(s);
  e = typeof e == "function" ? e : e === void 0 ? Q0 : Ie(+e), t = typeof t == "function" ? t : Ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? ey : Ie(+r);
  function s(f) {
    var p, h, g, v = (f = Su(f)).length, y, m = !1, b, x = new Array(v), w = new Array(v);
    for (o == null && (l = a(b = c())), p = 0; p <= v; ++p) {
      if (!(p < v && i(y = f[p], p, f)) === m)
        if (m = !m)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), g = p - 1; g >= h; --g)
            l.point(x[g], w[g]);
          l.lineEnd(), l.areaEnd();
        }
      m && (x[p] = +e(y, p, f), w[p] = +t(y, p, f), l.point(n ? +n(y, p, f) : x[p], r ? +r(y, p, f) : w[p]));
    }
    if (b) return l = null, b + "" || null;
  }
  function u() {
    return ty().defined(i).curve(a).context(o);
  }
  return s.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), n = null, s) : e;
  }, s.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ie(+f), s) : e;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ie(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ie(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ie(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return u().x(e).y(t);
  }, s.lineY1 = function() {
    return u().x(e).y(r);
  }, s.lineX1 = function() {
    return u().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Ie(!!f), s) : i;
  }, s.curve = function(f) {
    return arguments.length ? (a = f, o != null && (l = a(o)), s) : a;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = a(o = f), s) : o;
  }, s;
}
class ry {
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
  return new ry(e, !0);
}
function rj(e) {
  return new ry(e, !1);
}
const Ou = {
  draw(e, t) {
    const r = rr(t / ea);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ga);
  }
}, nj = {
  draw(e, t) {
    const r = rr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, ny = rr(1 / 3), ij = ny * 2, oj = {
  draw(e, t) {
    const r = rr(t / ij), n = r * ny;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, aj = {
  draw(e, t) {
    const r = rr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, lj = 0.8908130915292852, iy = Qo(ea / 10) / Qo(7 * ea / 10), sj = Qo(Ga / 10) * iy, cj = -X0(Ga / 10) * iy, uj = {
  draw(e, t) {
    const r = rr(t * lj), n = sj * r, i = cj * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let o = 1; o < 5; ++o) {
      const a = Ga * o / 5, l = X0(a), c = Qo(a);
      e.lineTo(c * r, -l * r), e.lineTo(l * n - c * i, c * n + l * i);
    }
    e.closePath();
  }
}, Kl = rr(3), dj = {
  draw(e, t) {
    const r = -rr(t / (Kl * 3));
    e.moveTo(0, r * 2), e.lineTo(-Kl * r, -r), e.lineTo(Kl * r, -r), e.closePath();
  }
}, Wt = -0.5, Ft = rr(3) / 2, kc = 1 / rr(12), fj = (kc / 2 + 1) * 3, pj = {
  draw(e, t) {
    const r = rr(t / fj), n = r / 2, i = r * kc, o = n, a = r * kc + r, l = -o, c = a;
    e.moveTo(n, i), e.lineTo(o, a), e.lineTo(l, c), e.lineTo(Wt * n - Ft * i, Ft * n + Wt * i), e.lineTo(Wt * o - Ft * a, Ft * o + Wt * a), e.lineTo(Wt * l - Ft * c, Ft * l + Wt * c), e.lineTo(Wt * n + Ft * i, Wt * i - Ft * n), e.lineTo(Wt * o + Ft * a, Wt * a - Ft * o), e.lineTo(Wt * l + Ft * c, Wt * c - Ft * l), e.closePath();
  }
};
function hj(e, t) {
  let r = null, n = ju(i);
  e = typeof e == "function" ? e : Ie(e || Ou), t = typeof t == "function" ? t : Ie(t === void 0 ? 64 : +t);
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
function ta() {
}
function ra(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function oy(e) {
  this._context = e;
}
oy.prototype = {
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
        ra(this, this._x1, this._y1);
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
        ra(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function vj(e) {
  return new oy(e);
}
function ay(e) {
  this._context = e;
}
ay.prototype = {
  areaStart: ta,
  areaEnd: ta,
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
        ra(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function gj(e) {
  return new ay(e);
}
function ly(e) {
  this._context = e;
}
ly.prototype = {
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
        ra(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function yj(e) {
  return new ly(e);
}
function sy(e) {
  this._context = e;
}
sy.prototype = {
  areaStart: ta,
  areaEnd: ta,
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
  return new sy(e);
}
function Mf(e) {
  return e < 0 ? -1 : 1;
}
function Df(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, o = (e._y1 - e._y0) / (n || i < 0 && -0), a = (r - e._y1) / (i || n < 0 && -0), l = (o * i + a * n) / (n + i);
  return (Mf(o) + Mf(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
function Rf(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Hl(e, t, r) {
  var n = e._x0, i = e._y0, o = e._x1, a = e._y1, l = (o - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, o - l, a - l * r, o, a);
}
function na(e) {
  this._context = e;
}
na.prototype = {
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
        Hl(this, this._t0, Rf(this, this._t0));
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
          this._point = 3, Hl(this, Rf(this, r = Df(this, e, t)), r);
          break;
        default:
          Hl(this, this._t0, r = Df(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function cy(e) {
  this._context = new uy(e);
}
(cy.prototype = Object.create(na.prototype)).point = function(e, t) {
  na.prototype.point.call(this, t, e);
};
function uy(e) {
  this._context = e;
}
uy.prototype = {
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
  return new na(e);
}
function bj(e) {
  return new cy(e);
}
function dy(e) {
  this._context = e;
}
dy.prototype = {
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
        for (var n = Nf(e), i = Nf(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(n[0][o], i[0][o], n[1][o], i[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Nf(e) {
  var t, r = e.length - 1, n, i = new Array(r), o = new Array(r), a = new Array(r);
  for (i[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / o[t - 1], o[t] -= n, a[t] -= n * a[t - 1];
  for (i[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - i[t + 1];
  return [i, o];
}
function wj(e) {
  return new dy(e);
}
function Za(e, t) {
  this._context = e, this._t = t;
}
Za.prototype = {
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
  return new Za(e, 0.5);
}
function Sj(e) {
  return new Za(e, 0);
}
function Oj(e) {
  return new Za(e, 1);
}
function hn(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, i, o = e[t[0]], a, l = o.length; r < a; ++r)
      for (i = o, o = e[t[r]], n = 0; n < l; ++n)
        o[n][1] += o[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function _c(e) {
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
  var e = Ie([]), t = _c, r = hn, n = Pj;
  function i(o) {
    var a = Array.from(e.apply(this, arguments), Cj), l, c = a.length, s = -1, u;
    for (const f of o)
      for (l = 0, ++s; l < c; ++l)
        (a[l][s] = [0, +n(f, a[l].key, s, o)]).data = f;
    for (l = 0, u = Su(t(a)); l < c; ++l)
      a[u[l]].index = l;
    return r(a, u), a;
  }
  return i.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(Array.from(o)), i) : e;
  }, i.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Ie(+o), i) : n;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? _c : typeof o == "function" ? o : Ie(Array.from(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (r = o ?? hn, i) : r;
  }, i;
}
function _j(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, o = e[0].length, a; i < o; ++i) {
      for (a = r = 0; r < n; ++r) a += e[r][i][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][i][1] /= a;
    }
    hn(e, t);
  }
}
function Ej(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, o = n.length; r < o; ++r) {
      for (var a = 0, l = 0; a < i; ++a) l += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    hn(e, t);
  }
}
function Aj(e, t) {
  if (!(!((a = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, o, a; n < o; ++n) {
      for (var l = 0, c = 0, s = 0; l < a; ++l) {
        for (var u = e[t[l]], f = u[n][1] || 0, p = u[n - 1][1] || 0, h = (f - p) / 2, g = 0; g < l; ++g) {
          var v = e[t[g]], y = v[n][1] || 0, m = v[n - 1][1] || 0;
          h += y - m;
        }
        c += f, s += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= s / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, hn(e, t);
  }
}
var ql = {}, Ul = {}, $f;
function Tj() {
  return $f || ($f = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Ul)), Ul;
}
var Yl = {}, zf;
function fy() {
  return zf || (zf = 1, (function(e) {
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
  })(Yl)), Yl;
}
var Gl = {}, Lf;
function Pu() {
  return Lf || (Lf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(Gl)), Gl;
}
var Xl = {}, Zl = {}, Bf;
function Ij() {
  return Bf || (Bf = 1, (function(e) {
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
  })(Zl)), Zl;
}
var Wf;
function Cu() {
  return Wf || (Wf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ij(), r = /* @__PURE__ */ Pu();
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
        const f = i[l];
        s ? f === "\\" && l + 1 < a ? (l++, c += i[l]) : f === s ? s = "" : c += f : u ? f === '"' || f === "'" ? s = f : f === "]" ? (u = !1, o.push(c), c = "") : c += f : f === "[" ? (u = !0, c && (o.push(c), c = "")) : f === "." ? c && (o.push(c), c = "") : c += f, l++;
      }
      return c && o.push(c), o;
    }
    e.toPath = n;
  })(Xl)), Xl;
}
var Ff;
function ku() {
  return Ff || (Ff = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Tj(), r = /* @__PURE__ */ fy(), n = /* @__PURE__ */ Pu(), i = /* @__PURE__ */ Cu();
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
      for (let f = 0; f < c.length; f++) {
        if (u == null || t.isUnsafeProperty(c[f]))
          return s;
        u = u[c[f]];
      }
      return u === void 0 ? s : u;
    }
    e.get = o;
  })(ql)), ql;
}
var Jl, Vf;
function Mj() {
  return Vf || (Vf = 1, Jl = ku().get), Jl;
}
var Dj = /* @__PURE__ */ Mj();
const Hn = /* @__PURE__ */ Sn(Dj);
var Rj = 4;
function Fr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rj, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function Ve(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, o, a) => {
    var l = r[a - 1];
    return typeof l == "string" ? i + l + o : l !== void 0 ? i + Fr(l) + o : i + o;
  }, "");
}
var Ct = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Jt = (e) => typeof e == "number" && e != +e, vn = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, ne = (e) => (typeof e == "number" || e instanceof Number) && !Jt(e), Ut = (e) => ne(e) || typeof e == "string", Nj = 0, Mi = (e) => {
  var t = ++Nj;
  return "".concat(e || "").concat(t);
}, Qt = function(t, r) {
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
  return Jt(o) && (o = n), i && r != null && o > r && (o = r), o;
}, py = (e) => {
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
  return ne(e) && ne(t) ? Fr(e + r * (t - e)) : t;
}
function hy(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Hn(n, t)) === r);
}
var Be = (e) => e === null || typeof e > "u", Xi = (e) => Be(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function kt(e) {
  return e != null;
}
function On() {
}
var $j = ["type", "size", "sizeType"];
function Ec() {
  return Ec = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ec.apply(null, arguments);
}
function Kf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kf(Object(r), !0).forEach(function(n) {
      zj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kf(Object(r)).forEach(function(n) {
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
var vy = {
  symbolCircle: Ou,
  symbolCross: nj,
  symbolDiamond: oj,
  symbolSquare: aj,
  symbolStar: uj,
  symbolTriangle: dj,
  symbolWye: pj
}, Vj = Math.PI / 180, Kj = (e) => {
  var t = "symbol".concat(Xi(e));
  return vy[t] || Ou;
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
  vy["symbol".concat(Xi(e))] = t;
}, gy = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = Wj(e, $j), o = Hf(Hf({}, i), {}, {
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
    className: c,
    cx: s,
    cy: u
  } = o, f = vt(o);
  return ne(s) && ne(u) && ne(r) ? /* @__PURE__ */ P.createElement("path", Ec({}, f, {
    className: Pe("recharts-symbols", c),
    transform: "translate(".concat(s, ", ").concat(u, ")"),
    d: l()
  })) : null;
};
gy.registerSymbol = qj;
var yy = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, _u = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Rt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    wu(i) && typeof r[i] == "function" && (n[i] = ((o) => r[i](r, o)));
  }), n;
}, Uj = (e, t, r) => (n) => (e(t, r, n), null), Eu = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var o = e[i];
    wu(i) && typeof o == "function" && (n || (n = {}), n[i] = Uj(o, t, r));
  }), n;
};
function qf(e, t) {
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
    t % 2 ? qf(Object(r), !0).forEach(function(n) {
      Gj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qf(Object(r)).forEach(function(n) {
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
var Ql = {}, es = {}, Uf;
function Jj() {
  return Uf || (Uf = 1, (function(e) {
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
  })(es)), es;
}
var ts = {}, Yf;
function Qj() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(ts)), ts;
}
var rs = {}, Gf;
function my() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(rs)), rs;
}
var ns = {}, is = {}, os = {}, Xf;
function eS() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(os)), os;
}
var Zf;
function xy() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ eS();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(is)), is;
}
var as = {}, Jf;
function tS() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(as)), as;
}
var Qf;
function rS() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xy(), r = /* @__PURE__ */ tS();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(ns)), ns;
}
var ls = {}, ss = {}, ep;
function nS() {
  return ep || (ep = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ ku();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(ss)), ss;
}
var cs = {}, us = {}, ds = {}, fs = {}, tp;
function by() {
  return tp || (tp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(fs)), fs;
}
var ps = {}, rp;
function wy() {
  return rp || (rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(ps)), ps;
}
var hs = {}, np;
function jy() {
  return np || (np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(hs)), hs;
}
var ip;
function iS() {
  return ip || (ip = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ by(), r = /* @__PURE__ */ wy(), n = /* @__PURE__ */ jy();
    function i(u, f, p) {
      return typeof p != "function" ? i(u, f, () => {
      }) : o(u, f, function h(g, v, y, m, b, x) {
        const w = p(g, v, y, m, b, x);
        return w !== void 0 ? !!w : o(g, v, h, x);
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
        return c(u, f, p, h);
      if (f instanceof Map)
        return l(u, f, p, h);
      if (f instanceof Set)
        return s(u, f, p, h);
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
    function c(u, f, p, h) {
      if (f.length === 0)
        return !0;
      if (!Array.isArray(u))
        return !1;
      const g = /* @__PURE__ */ new Set();
      for (let v = 0; v < f.length; v++) {
        const y = f[v];
        let m = !1;
        for (let b = 0; b < u.length; b++) {
          if (g.has(b))
            continue;
          const x = u[b];
          let w = !1;
          if (p(x, y, v, u, f, h) && (w = !0), w) {
            g.add(b), m = !0;
            break;
          }
        }
        if (!m)
          return !1;
      }
      return !0;
    }
    function s(u, f, p, h) {
      return f.size === 0 ? !0 : u instanceof Set ? c([...u], [...f], p, h) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = s;
  })(ds)), ds;
}
var op;
function Sy() {
  return op || (op = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ iS();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(us)), us;
}
var vs = {}, gs = {}, ys = {}, ap;
function oS() {
  return ap || (ap = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(ys)), ys;
}
var ms = {}, lp;
function Au() {
  return lp || (lp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(ms)), ms;
}
var xs = {}, sp;
function Oy() {
  return sp || (sp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", o = "[object Arguments]", a = "[object Symbol]", l = "[object Date]", c = "[object Map]", s = "[object Set]", u = "[object Array]", f = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", g = "[object Error]", v = "[object DataView]", y = "[object Uint8Array]", m = "[object Uint8ClampedArray]", b = "[object Uint16Array]", x = "[object Uint32Array]", w = "[object BigUint64Array]", S = "[object Int8Array]", O = "[object Int16Array]", C = "[object Int32Array]", T = "[object BigInt64Array]", E = "[object Float32Array]", _ = "[object Float64Array]";
    e.argumentsTag = o, e.arrayBufferTag = p, e.arrayTag = u, e.bigInt64ArrayTag = T, e.bigUint64ArrayTag = w, e.booleanTag = i, e.dataViewTag = v, e.dateTag = l, e.errorTag = g, e.float32ArrayTag = E, e.float64ArrayTag = _, e.functionTag = f, e.int16ArrayTag = O, e.int32ArrayTag = C, e.int8ArrayTag = S, e.mapTag = c, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = s, e.stringTag = r, e.symbolTag = a, e.uint16ArrayTag = b, e.uint32ArrayTag = x, e.uint8ArrayTag = y, e.uint8ClampedArrayTag = m;
  })(xs)), xs;
}
var bs = {}, cp;
function aS() {
  return cp || (cp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(bs)), bs;
}
var up;
function Py() {
  return up || (up = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oS(), r = /* @__PURE__ */ Au(), n = /* @__PURE__ */ Oy(), i = /* @__PURE__ */ wy(), o = /* @__PURE__ */ aS();
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
        for (const [m, b] of u)
          y.set(m, l(b, m, p, h, g));
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
    function c(u, f, p = u, h, g) {
      const v = [...Object.keys(f), ...t.getSymbols(f)];
      for (let y = 0; y < v.length; y++) {
        const m = v[y], b = Object.getOwnPropertyDescriptor(u, m);
        (b == null || b.writable) && (u[m] = l(f[m], m, p, h, g));
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
  })(gs)), gs;
}
var dp;
function lS() {
  return dp || (dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Py();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(vs)), vs;
}
var fp;
function sS() {
  return fp || (fp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Sy(), r = /* @__PURE__ */ lS();
    function n(i) {
      return i = r.cloneDeep(i), (o) => t.isMatch(o, i);
    }
    e.matches = n;
  })(cs)), cs;
}
var ws = {}, js = {}, Ss = {}, pp;
function cS() {
  return pp || (pp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Py(), r = /* @__PURE__ */ Au(), n = /* @__PURE__ */ Oy();
    function i(o, a) {
      return t.cloneDeepWith(o, (l, c, s, u) => {
        const f = a?.(l, c, s, u);
        if (f !== void 0)
          return f;
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
  })(Ss)), Ss;
}
var hp;
function uS() {
  return hp || (hp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cS();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(js)), js;
}
var Os = {}, Ps = {}, vp;
function Cy() {
  return vp || (vp = 1, (function(e) {
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
  })(Ps)), Ps;
}
var Cs = {}, gp;
function dS() {
  return gp || (gp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Au();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(Cs)), Cs;
}
var yp;
function fS() {
  return yp || (yp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fy(), r = /* @__PURE__ */ Cy(), n = /* @__PURE__ */ dS(), i = /* @__PURE__ */ Cu();
    function o(a, l) {
      let c;
      if (Array.isArray(l) ? c = l : typeof l == "string" && t.isDeepKey(l) && a?.[l] == null ? c = i.toPath(l) : c = [l], c.length === 0)
        return !1;
      let s = a;
      for (let u = 0; u < c.length; u++) {
        const f = c[u];
        if ((s == null || !Object.hasOwn(s, f)) && !((Array.isArray(s) || n.isArguments(s)) && r.isIndex(f) && f < s.length))
          return !1;
        s = s[f];
      }
      return !0;
    }
    e.has = o;
  })(Os)), Os;
}
var mp;
function pS() {
  return mp || (mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Sy(), r = /* @__PURE__ */ Pu(), n = /* @__PURE__ */ uS(), i = /* @__PURE__ */ ku(), o = /* @__PURE__ */ fS();
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
  })(ws)), ws;
}
var xp;
function hS() {
  return xp || (xp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ my(), r = /* @__PURE__ */ nS(), n = /* @__PURE__ */ sS(), i = /* @__PURE__ */ pS();
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
  })(ls)), ls;
}
var bp;
function vS() {
  return bp || (bp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Jj(), r = /* @__PURE__ */ Qj(), n = /* @__PURE__ */ my(), i = /* @__PURE__ */ rS(), o = /* @__PURE__ */ hS();
    function a(l, c = n.identity) {
      return i.isArrayLikeObject(l) ? t.uniqBy(Array.from(l), r.ary(o.iteratee(c), 1)) : [];
    }
    e.uniqBy = a;
  })(Ql)), Ql;
}
var ks, wp;
function gS() {
  return wp || (wp = 1, ks = vS().uniqBy), ks;
}
var yS = /* @__PURE__ */ gS();
const jp = /* @__PURE__ */ Sn(yS);
function mS(e, t, r) {
  return t === !0 ? jp(e, r) : typeof t == "function" ? jp(e, t) : e;
}
var Po = { exports: {} }, _s = {}, Co = { exports: {} }, Es = {};
var Sp;
function xS() {
  if (Sp) return Es;
  Sp = 1;
  var e = Le;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function l(f, p) {
    var h = p(), g = n({ inst: { value: h, getSnapshot: p } }), v = g[0].inst, y = g[1];
    return o(
      function() {
        v.value = h, v.getSnapshot = p, c(v) && y({ inst: v });
      },
      [f, h, p]
    ), i(
      function() {
        return c(v) && y({ inst: v }), f(function() {
          c(v) && y({ inst: v });
        });
      },
      [f]
    ), a(h), h;
  }
  function c(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var h = p();
      return !r(f, h);
    } catch {
      return !0;
    }
  }
  function s(f, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : l;
  return Es.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Es;
}
var As = {};
var Op;
function bS() {
  return Op || (Op = 1, process.env.NODE_ENV !== "production" && (function() {
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
      var m = y[0].inst, b = y[1];
      return c(
        function() {
          m.value = v, m.getSnapshot = g, r(m) && b({ inst: m });
        },
        [h, v, g]
      ), l(
        function() {
          return r(m) && b({ inst: m }), h(function() {
            r(m) && b({ inst: m });
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
    var i = Le, o = typeof Object.is == "function" ? Object.is : e, a = i.useState, l = i.useEffect, c = i.useLayoutEffect, s = i.useDebugValue, u = !1, f = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    As.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), As;
}
var Pp;
function ky() {
  return Pp || (Pp = 1, process.env.NODE_ENV === "production" ? Co.exports = xS() : Co.exports = bS()), Co.exports;
}
var Cp;
function wS() {
  if (Cp) return _s;
  Cp = 1;
  var e = Le, t = ky();
  function r(s, u) {
    return s === u && (s !== 0 || 1 / s === 1 / u) || s !== s && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, l = e.useMemo, c = e.useDebugValue;
  return _s.useSyncExternalStoreWithSelector = function(s, u, f, p, h) {
    var g = o(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else v = g.current;
    g = l(
      function() {
        function m(O) {
          if (!b) {
            if (b = !0, x = O, O = p(O), h !== void 0 && v.hasValue) {
              var C = v.value;
              if (h(C, O))
                return w = C;
            }
            return w = O;
          }
          if (C = w, n(x, O)) return C;
          var T = p(O);
          return h !== void 0 && h(C, T) ? (x = O, C) : (x = O, w = T);
        }
        var b = !1, x, w, S = f === void 0 ? null : f;
        return [
          function() {
            return m(u());
          },
          S === null ? void 0 : function() {
            return m(S());
          }
        ];
      },
      [u, f, p, h]
    );
    var y = i(s, g[0], g[1]);
    return a(
      function() {
        v.hasValue = !0, v.value = y;
      },
      [y]
    ), c(y), y;
  }, _s;
}
var Ts = {};
var kp;
function jS() {
  return kp || (kp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, u) {
      return s === u && (s !== 0 || 1 / s === 1 / u) || s !== s && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Le, r = ky(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, o = t.useRef, a = t.useEffect, l = t.useMemo, c = t.useDebugValue;
    Ts.useSyncExternalStoreWithSelector = function(s, u, f, p, h) {
      var g = o(null);
      if (g.current === null) {
        var v = { hasValue: !1, value: null };
        g.current = v;
      } else v = g.current;
      g = l(
        function() {
          function m(O) {
            if (!b) {
              if (b = !0, x = O, O = p(O), h !== void 0 && v.hasValue) {
                var C = v.value;
                if (h(C, O))
                  return w = C;
              }
              return w = O;
            }
            if (C = w, n(x, O))
              return C;
            var T = p(O);
            return h !== void 0 && h(C, T) ? (x = O, C) : (x = O, w = T);
          }
          var b = !1, x, w, S = f === void 0 ? null : f;
          return [
            function() {
              return m(u());
            },
            S === null ? void 0 : function() {
              return m(S());
            }
          ];
        },
        [u, f, p, h]
      );
      var y = i(s, g[0], g[1]);
      return a(
        function() {
          v.hasValue = !0, v.value = y;
        },
        [y]
      ), c(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Ts;
}
var _p;
function SS() {
  return _p || (_p = 1, process.env.NODE_ENV === "production" ? Po.exports = wS() : Po.exports = jS()), Po.exports;
}
var OS = SS(), Tu = /* @__PURE__ */ At(null), PS = (e) => e, $e = () => {
  var e = zt(Tu);
  return e ? e.store.dispatch : PS;
}, Uo = () => {
}, CS = () => Uo, kS = (e, t) => e === t;
function oe(e) {
  var t = zt(Tu), r = tr(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : Uo, [t, e]);
  return OS.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : CS, t ? t.store.getState : Uo, t ? t.store.getState : Uo, r, kS);
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
var Ep = (e) => Array.isArray(e) ? e : [e];
function DS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return MS(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Ap(e, t) {
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
}, $S = typeof WeakRef < "u" ? WeakRef : NS, zS = 0, Tp = 1;
function ko() {
  return {
    s: zS,
    v: void 0,
    o: null,
    p: null
  };
}
function _y(e, t = {}) {
  let r = ko();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function a() {
    let l = r;
    const { length: c } = arguments;
    for (let f = 0, p = c; f < p; f++) {
      const h = arguments[f];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let g = l.o;
        g === null && (l.o = g = /* @__PURE__ */ new WeakMap());
        const v = g.get(h);
        v === void 0 ? (l = ko(), g.set(h, l)) : l = v;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const v = g.get(h);
        v === void 0 ? (l = ko(), g.set(h, l)) : l = v;
      }
    }
    const s = l;
    let u;
    if (l.s === Tp)
      u = l.v;
    else if (u = e.apply(null, arguments), o++, n) {
      const f = i?.deref?.() ?? i;
      f != null && n(f, u) && (u = f, o !== 0 && o--), i = typeof u == "object" && u !== null || typeof u == "function" ? new $S(u) : u;
    }
    return s.s = Tp, s.v = u, u;
  }
  return a.clearCache = () => {
    r = ko(), a.resetResultsCount();
  }, a.resultsCount = () => o, a.resetResultsCount = () => {
    o = 0;
  }, a;
}
function LS(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, a = 0, l, c = {}, s = i.pop();
    typeof s == "object" && (c = s, s = i.pop()), TS(
      s,
      `createSelector expects an output function after the inputs, but received: [${typeof s}]`
    );
    const u = {
      ...r,
      ...c
    }, {
      memoize: f,
      memoizeOptions: p = [],
      argsMemoize: h = _y,
      argsMemoizeOptions: g = [],
      devModeChecks: v = {}
    } = u, y = Ep(p), m = Ep(g), b = DS(i), x = f(function() {
      return o++, s.apply(
        null,
        arguments
      );
    }, ...y);
    let w = !0;
    const S = h(function() {
      a++;
      const C = Ap(
        b,
        arguments
      );
      if (l = x.apply(null, C), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: T, inputStabilityCheck: E } = RS(w, v);
        if (T.shouldRun && T.run(
          s,
          C,
          l
        ), E.shouldRun) {
          const _ = Ap(
            b,
            arguments
          );
          E.run(
            { inputSelectorResults: C, inputSelectorResultsCopy: _ },
            { memoize: f, memoizeOptions: y },
            arguments
          );
        }
        w && (w = !1);
      }
      return l;
    }, ...m);
    return Object.assign(S, {
      resultFunc: s,
      memoizedResultFunc: x,
      dependencies: b,
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
var R = /* @__PURE__ */ LS(_y), BS = Object.assign(
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
      (...o) => o.reduce((a, l, c) => (a[r[c]] = l, a), {})
    );
  },
  { withTypes: () => BS }
), Is = {}, Ms = {}, Ds = {}, Ip;
function WS() {
  return Ip || (Ip = 1, (function(e) {
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
  })(Ds)), Ds;
}
var Rs = {}, Ns = {}, Mp;
function Ey() {
  return Mp || (Mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Ns)), Ns;
}
var Dp;
function FS() {
  return Dp || (Dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ey(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(o, a) {
      return Array.isArray(o) ? !1 : typeof o == "number" || typeof o == "boolean" || o == null || t.isSymbol(o) ? !0 : typeof o == "string" && (n.test(o) || !r.test(o)) || a != null && Object.hasOwn(a, o);
    }
    e.isKey = i;
  })(Rs)), Rs;
}
var Rp;
function VS() {
  return Rp || (Rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ WS(), r = /* @__PURE__ */ FS(), n = /* @__PURE__ */ Cu();
    function i(o, a, l, c) {
      if (o == null)
        return [];
      l = c ? void 0 : l, Array.isArray(o) || (o = Object.values(o)), Array.isArray(a) || (a = a == null ? [null] : [a]), a.length === 0 && (a = [null]), Array.isArray(l) || (l = l == null ? [] : [l]), l = l.map((h) => String(h));
      const s = (h, g) => {
        let v = h;
        for (let y = 0; y < g.length && v != null; ++y)
          v = v[g[y]];
        return v;
      }, u = (h, g) => g == null || h == null ? g : typeof h == "object" && "key" in h ? Object.hasOwn(g, h.key) ? g[h.key] : s(g, h.path) : typeof h == "function" ? h(g) : Array.isArray(h) ? s(g, h) : typeof g == "object" ? g[h] : g, f = a.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
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
  })(Ms)), Ms;
}
var $s = {}, Np;
function KS() {
  return Np || (Np = 1, (function(e) {
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
  })($s)), $s;
}
var zs = {}, $p;
function Ay() {
  return $p || ($p = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Cy(), r = /* @__PURE__ */ xy(), n = /* @__PURE__ */ by(), i = /* @__PURE__ */ jy();
    function o(a, l, c) {
      return n.isObject(c) && (typeof l == "number" && r.isArrayLike(c) && t.isIndex(l) && l < c.length || typeof l == "string" && l in c) ? i.isEqualsSameValueZero(c[l], a) : !1;
    }
    e.isIterateeCall = o;
  })(zs)), zs;
}
var zp;
function HS() {
  return zp || (zp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ VS(), r = /* @__PURE__ */ KS(), n = /* @__PURE__ */ Ay();
    function i(o, ...a) {
      const l = a.length;
      return l > 1 && n.isIterateeCall(o, a[0], a[1]) ? a = [] : l > 2 && n.isIterateeCall(a[0], a[1], a[2]) && (a = [a[0]]), t.orderBy(o, r.flatten(a), ["asc"]);
    }
    e.sortBy = i;
  })(Is)), Is;
}
var Ls, Lp;
function qS() {
  return Lp || (Lp = 1, Ls = HS().sortBy), Ls;
}
var US = /* @__PURE__ */ qS();
const Ja = /* @__PURE__ */ Sn(US);
var Ty = (e) => e.legend.settings, YS = (e) => e.legend.size, GS = (e) => e.legend.payload;
R([GS, Ty], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ja(n, r) : n;
});
var _o = 1;
function XS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = W({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = _e(
    (i) => {
      if (i != null) {
        var o = i.getBoundingClientRect(), a = {
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        };
        (Math.abs(a.height - t.height) > _o || Math.abs(a.left - t.left) > _o || Math.abs(a.top - t.top) > _o || Math.abs(a.width - t.width) > _o) && r({
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
var ZS = typeof Symbol == "function" && Symbol.observable || "@@observable", Bp = ZS, Bs = () => Math.random().toString(36).substring(7).split("").join("."), JS = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Bs()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Bs()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bs()}`
}, cn = JS;
function Zi(e) {
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
function zr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = QS(e)), t;
}
function Iy(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(2) : `Expected the root reducer to be a function. Instead, received: '${zr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(1) : `Expected the enhancer to be a function. Instead, received: '${zr(r)}'`);
    return r(Iy)(e, t);
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
  function f(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(4) : `Expected the listener to be a function. Instead, received: '${zr(y)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? at(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    s();
    const b = l++;
    return a.set(b, y), function() {
      if (m) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? at(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, s(), a.delete(b), o = null;
      }
    };
  }
  function p(y) {
    if (!Zi(y))
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
    return (o = a).forEach((b) => {
      b();
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
          throw new Error(process.env.NODE_ENV === "production" ? at(11) : `Expected the observer to be an object. Instead, received: '${zr(m)}'`);
        function b() {
          const w = m;
          w.next && w.next(u());
        }
        return b(), {
          unsubscribe: y(b)
        };
      },
      [Bp]() {
        return this;
      }
    };
  }
  return p({
    type: cn.INIT
  }), {
    dispatch: p,
    subscribe: f,
    getState: u,
    replaceReducer: h,
    [Bp]: g
  };
}
function Wp(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function nO(e, t, r, n) {
  const i = Object.keys(t), o = r && r.type === cn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Zi(e))
    return `The ${o} has unexpected type of "${zr(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (a.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === cn.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function iO(e) {
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
function My(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && Wp(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
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
  return function(l = {}, c) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const f = nO(l, r, c, i);
      f && Wp(f);
    }
    let s = !1;
    const u = {};
    for (let f = 0; f < n.length; f++) {
      const p = n[f], h = r[p], g = l[p], v = h(g, c);
      if (typeof v > "u") {
        const y = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? at(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = v, s = s || v !== g;
    }
    return s = s || n.length !== Object.keys(l).length, s ? u : l;
  };
}
function ia(...e) {
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
      dispatch: (c, ...s) => o(c, ...s)
    }, l = e.map((c) => c(a));
    return o = ia(...l)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Iu(e) {
  return Zi(e) && "type" in e && typeof e.type == "string";
}
var Dy = Symbol.for("immer-nothing"), Fp = Symbol.for("immer-draftable"), wt = Symbol.for("immer-state"), aO = process.env.NODE_ENV !== "production" ? [
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
    const r = aO[e], n = nn(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Dt = Object, qn = Dt.getPrototypeOf, oa = "constructor", Qa = "prototype", Ac = "configurable", aa = "enumerable", Yo = "writable", Di = "value", kr = (e) => !!e && !!e[wt];
function er(e) {
  return e ? Ry(e) || tl(e) || !!e[Fp] || !!e[oa]?.[Fp] || rl(e) || nl(e) : !1;
}
var lO = Dt[Qa][oa].toString(), Vp = /* @__PURE__ */ new WeakMap();
function Ry(e) {
  if (!e || !Mu(e))
    return !1;
  const t = qn(e);
  if (t === null || t === Dt[Qa])
    return !0;
  const r = Dt.hasOwnProperty.call(t, oa) && t[oa];
  if (r === Object)
    return !0;
  if (!nn(r))
    return !1;
  let n = Vp.get(r);
  return n === void 0 && (n = Function.toString.call(r), Vp.set(r, n)), n === lO;
}
function el(e, t, r = !0) {
  Ji(e) === 0 ? (r ? Reflect.ownKeys(e) : Dt.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Ji(e) {
  const t = e[wt];
  return t ? t.type_ : tl(e) ? 1 : rl(e) ? 2 : nl(e) ? 3 : 0;
}
var Kp = (e, t, r = Ji(e)) => r === 2 ? e.has(t) : Dt[Qa].hasOwnProperty.call(e, t), Tc = (e, t, r = Ji(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), la = (e, t, r, n = Ji(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function sO(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var tl = Array.isArray, rl = (e) => e instanceof Map, nl = (e) => e instanceof Set, Mu = (e) => typeof e == "object", nn = (e) => typeof e == "function", Ws = (e) => typeof e == "boolean";
function cO(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var br = (e) => e.copy_ || e.base_, Du = (e) => e.modified_ ? e.copy_ : e.base_;
function Ic(e, t) {
  if (rl(e))
    return new Map(e);
  if (nl(e))
    return new Set(e);
  if (tl(e))
    return Array[Qa].slice.call(e);
  const r = Ry(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Dt.getOwnPropertyDescriptors(e);
    delete n[wt];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], l = n[a];
      l[Yo] === !1 && (l[Yo] = !0, l[Ac] = !0), (l.get || l.set) && (n[a] = {
        [Ac]: !0,
        [Yo]: !0,
        // could live with !!desc.set as well here...
        [aa]: l[aa],
        [Di]: e[a]
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
function Ru(e, t = !1) {
  return il(e) || kr(e) || !er(e) || (Ji(e) > 1 && Dt.defineProperties(e, {
    set: Eo,
    add: Eo,
    clear: Eo,
    delete: Eo
  }), Dt.freeze(e), t && el(
    e,
    (r, n) => {
      Ru(n, !0);
    },
    !1
  )), e;
}
function uO() {
  It(2);
}
var Eo = {
  [Di]: uO
};
function il(e) {
  return e === null || !Mu(e) ? !0 : Dt.isFrozen(e);
}
var sa = "MapSet", Mc = "Patches", Hp = "ArrayMethods", Ny = {};
function gn(e) {
  const t = Ny[e];
  return t || It(0, e), t;
}
var qp = (e) => !!Ny[e], Ri, $y = () => Ri, dO = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: qp(sa) ? gn(sa) : void 0,
  arrayMethodsPlugin_: qp(Hp) ? gn(Hp) : void 0
});
function Up(e, t) {
  t && (e.patchPlugin_ = gn(Mc), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Dc(e) {
  Rc(e), e.drafts_.forEach(fO), e.drafts_ = null;
}
function Rc(e) {
  e === Ri && (Ri = e.parent_);
}
var Yp = (e) => Ri = dO(Ri, e);
function fO(e) {
  const t = e[wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Gp(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[wt].modified_ && (Dc(t), It(4)), er(e) && (e = Xp(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[wt].base_,
      e,
      t
    );
  } else
    e = Xp(t, r);
  return pO(t, e, !0), Dc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Dy ? e : void 0;
}
function Xp(e, t) {
  if (il(t))
    return t;
  const r = t[wt];
  if (!r)
    return ca(t, e.handledSet_, e);
  if (!ol(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    By(r, e);
  }
  return r.copy_;
}
function pO(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ru(t, r);
}
function zy(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var ol = (e, t) => e.scope_ === t, hO = [];
function Ly(e, t, r, n) {
  const i = br(e), o = e.type_;
  if (n !== void 0 && Tc(i, n, o) === t) {
    la(i, n, r, o);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    el(i, (c, s) => {
      if (kr(s)) {
        const u = l.get(s) || [];
        u.push(c), l.set(s, u);
      }
    });
  }
  const a = e.draftLocations_.get(t) ?? hO;
  for (const l of a)
    la(i, l, r, o);
}
function vO(e, t, r) {
  e.callbacks_.push(function(i) {
    const o = t;
    if (!o || !ol(o, i))
      return;
    i.mapSetPlugin_?.fixSetContents(o);
    const a = Du(o);
    Ly(e, o.draft_ ?? o, a, r), By(o, i);
  });
}
function By(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    zy(e);
  }
}
function gO(e, t, r) {
  const { scope_: n } = e;
  if (kr(r)) {
    const i = r[wt];
    ol(i, n) && i.callbacks_.push(function() {
      Go(e);
      const a = Du(i);
      Ly(e, r, a, t);
    });
  } else er(r) && e.callbacks_.push(function() {
    const o = br(e);
    e.type_ === 3 ? o.has(r) && ca(r, n.handledSet_, n) : Tc(o, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && ca(
      Tc(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function ca(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || kr(e) || t.has(e) || !er(e) || il(e) || (t.add(e), el(e, (n, i) => {
    if (kr(i)) {
      const o = i[wt];
      if (ol(o, r)) {
        const a = Du(o);
        la(e, n, a, e.type_), zy(o);
      }
    } else er(i) && ca(i, t, r);
  })), e;
}
function yO(e, t) {
  const r = tl(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : $y(),
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
  let i = n, o = ua;
  r && (i = [n], o = Ni);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, [l, n];
}
var ua = {
  get(e, t) {
    if (t === wt)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r?.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = br(e);
    if (!Kp(i, t, e.type_))
      return mO(e, i, t);
    const o = i[t];
    if (e.finalized_ || !er(o) || n && e.operationMethod && r?.isMutatingArrayMethod(
      e.operationMethod
    ) && cO(t))
      return o;
    if (o === Fs(e.base_, t)) {
      Go(e);
      const a = e.type_ === 1 ? +t : t, l = $c(e.scope_, o, e, a);
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
    const n = Wy(br(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Fs(br(e), t), o = i?.[wt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (sO(r, i) && (r !== void 0 || Kp(e.base_, t, e.type_)))
        return !0;
      Go(e), Nc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), gO(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return Go(e), Fs(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Nc(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = br(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Yo]: !0,
      [Ac]: e.type_ !== 1 || t !== "length",
      [aa]: n[aa],
      [Di]: r[t]
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
for (let e in ua) {
  let t = ua[e];
  Ni[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
Ni.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && It(13), Ni.set.call(this, e, t, void 0);
};
Ni.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && It(14), ua.set.call(this, e[0], t, r, e[0]);
};
function Fs(e, t) {
  const r = e[wt];
  return (r ? br(r) : e)[t];
}
function mO(e, t, r) {
  const n = Wy(t, r);
  return n ? Di in n ? n[Di] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Wy(e, t) {
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
function Nc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Nc(e.parent_));
}
function Go(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = Ic(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var xO = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (nn(r) && !nn(n)) {
        const a = n;
        n = r;
        const l = this;
        return function(s = a, ...u) {
          return l.produce(s, (f) => n.call(this, f, ...u));
        };
      }
      nn(n) || It(6), i !== void 0 && !nn(i) && It(7);
      let o;
      if (er(r)) {
        const a = Yp(this), l = $c(a, r, void 0);
        let c = !0;
        try {
          o = n(l), c = !1;
        } finally {
          c ? Dc(a) : Rc(a);
        }
        return Up(a, i), Gp(o, a);
      } else if (!r || !Mu(r)) {
        if (o = n(r), o === void 0 && (o = r), o === Dy && (o = void 0), this.autoFreeze_ && Ru(o, !0), i) {
          const a = [], l = [];
          gn(Mc).generateReplacementPatches_(r, o, {
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
    }, Ws(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), Ws(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), Ws(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    er(t) || It(8), kr(t) && (t = Kt(t));
    const r = Yp(this), n = $c(r, t, void 0);
    return n[wt].isManual_ = !0, Rc(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[wt];
    (!n || !n.isManual_) && It(9);
    const { scope_: i } = n;
    return Up(i, r), Gp(void 0, i);
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
    const i = gn(Mc).applyPatches_;
    return kr(t) ? i(t, r) : this.produce(
      t,
      (o) => i(o, r)
    );
  }
};
function $c(e, t, r, n) {
  const [i, o] = rl(t) ? gn(sa).proxyMap_(t, r) : nl(t) ? gn(sa).proxySet_(t, r) : yO(t, r);
  return (r?.scope_ ?? $y()).drafts_.push(i), o.callbacks_ = r?.callbacks_ ?? [], o.key_ = n, r && n !== void 0 ? vO(r, o, n) : o.callbacks_.push(function(c) {
    c.mapSetPlugin_?.fixSetContents(o);
    const { patchPlugin_: s } = c;
    o.modified_ && s && s.generatePatches_(o, [], c);
  }), i;
}
function Kt(e) {
  return kr(e) || It(10, e), Fy(e);
}
function Fy(e) {
  if (!er(e) || il(e))
    return e;
  const t = e[wt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Ic(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Ic(e, !0);
  return el(
    r,
    (i, o) => {
      la(r, i, Fy(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var bO = new xO(), Vy = bO.produce;
function Ky(e) {
  return ({ dispatch: r, getState: n }) => (i) => (o) => typeof o == "function" ? o(r, n, e) : i(o);
}
var wO = Ky(), jO = Ky, SO = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ia : ia.apply(null, arguments);
}, OO = (e) => e && typeof e.match == "function";
function Nt(e, t) {
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
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Iu(n) && n.type === e, r;
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
function Hy(e, t) {
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
var qy = class Ci extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ci.prototype);
  }
  static get [Symbol.species]() {
    return Ci;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ci(...t[0].concat(this)) : new Ci(...t.concat(this));
  }
};
function Zp(e) {
  return er(e) ? Vy(e, () => {
  }) : e;
}
function Ao(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function _O(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function EO(e, t, r) {
  const n = Uy(e, t, r);
  return {
    detectMutations() {
      return Yy(e, t, n, r);
    }
  };
}
function Uy(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), o.children = {};
    const a = t.length > 0;
    for (const l in r) {
      const c = n ? n + "." + l : l;
      a && t.some((u) => u instanceof RegExp ? u.test(c) : c === u) || (o.children[l] = Uy(e, t, r[l], c));
    }
  }
  return o;
}
function Yy(e, t = [], r, n, i = !1, o = "") {
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
    const f = o ? o + "." + u : u;
    if (s && t.some((g) => g instanceof RegExp ? g.test(f) : f === g))
      continue;
    const p = Yy(e, t, r.children[u], n[u], l, f);
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
    let t = function(l, c, s, u) {
      return JSON.stringify(l, r(c, u), s);
    }, r = function(l, c) {
      let s = [], u = [];
      return c || (c = function(f, p) {
        return s[0] === p ? "[Circular ~]" : "[Circular ~." + u.slice(0, s.indexOf(p)).join(".") + "]";
      }), function(f, p) {
        if (s.length > 0) {
          var h = s.indexOf(this);
          ~h ? s.splice(h + 1) : s.push(this), ~h ? u.splice(h, 1 / 0, f) : u.push(f), ~s.indexOf(p) && (p = c.call(this, f, p));
        } else s.push(p);
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
      let c = l(), s = a(c), u;
      return (f) => (p) => {
        const h = Hy(o, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (c = l(), u = s.detectMutations(), s = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = f(p);
        return h.measureTime(() => {
          if (c = l(), u = s.detectMutations(), s = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), g;
      };
    };
  }
}
function Gy(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Zi(e);
}
function zc(e, t = "", r = Gy, n, i = [], o) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o?.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), c = i.length > 0;
  for (const [s, u] of l) {
    const f = t ? t + "." + s : s;
    if (!(c && i.some((h) => h instanceof RegExp ? h.test(f) : f === h))) {
      if (!r(u))
        return {
          keyPath: f,
          value: u
        };
      if (typeof u == "object" && (a = zc(u, f, r, n, i, o), a))
        return a;
    }
  }
  return o && Xy(e) && o.add(e), !1;
}
function Xy(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Xy(t))
      return !1;
  return !0;
}
function TO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Gy,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: a = 32,
      ignoreState: l = !1,
      ignoreActions: c = !1,
      disableCache: s = !1
    } = e, u = !s && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (p) => (h) => {
      if (!Iu(h))
        return p(h);
      const g = p(h), v = Hy(a, "SerializableStateInvariantMiddleware");
      return !c && !(n.length && n.indexOf(h.type) !== -1) && v.measureTime(() => {
        const y = zc(h, "", t, r, i, u);
        if (y) {
          const {
            keyPath: m,
            value: b
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (v.measureTime(() => {
        const y = f.getState(), m = zc(y, "", t, r, o, u);
        if (m) {
          const {
            keyPath: b,
            value: x
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, x, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), g;
    };
  }
}
function To(e) {
  return typeof e == "boolean";
}
var IO = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new qy();
  if (r && (To(r) ? a.push(wO) : a.push(jO(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      To(n) || (l = n), a.unshift(AO(l));
    }
    if (i) {
      let l = {};
      To(i) || (l = i), a.push(TO(l));
    }
    if (o) {
      let l = {};
      To(o) || (l = o), a.unshift(kO(l));
    }
  }
  return a;
}, Zy = "RTK_autoBatch", De = () => (e) => ({
  payload: e,
  meta: {
    [Zy]: !0
  }
}), Jp = (e) => (t) => {
  setTimeout(t, e);
}, Jy = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, a = !1;
  const l = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Jp(10)
  ) : e.type === "callback" ? e.queueNotification : Jp(e.timeout), s = () => {
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
        return i = !u?.meta?.[Zy], o = !i, o && (a || (a = !0, c(s))), n.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, MO = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new qy(e);
  return n && i.push(Jy(typeof n == "object" ? n : void 0)), i;
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
  let c;
  if (typeof r == "function")
    c = r;
  else if (Zi(r))
    c = My(r);
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
  let u = ia;
  i && (u = SO({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = oO(...s), p = MO(f);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(5) : "`enhancers` field must be a callback");
  let h = typeof l == "function" ? l(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? je(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && s.length && !h.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const g = u(...h);
  return Iy(c, a, g);
}
function Qy(e) {
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
  let [r, n, i] = Qy(t), o;
  if (RO(e))
    o = () => Zp(e());
  else {
    const l = Zp(e);
    o = () => l;
  }
  function a(l = o(), c) {
    let s = [r[c.type], ...n.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return s.filter((u) => !!u).length === 0 && (s = [i]), s.reduce((u, f) => {
      if (f)
        if (kr(u)) {
          const h = f(u, c);
          return h === void 0 ? u : h;
        } else {
          if (er(u))
            return Vy(u, (p) => f(p, c));
          {
            const p = f(u, c);
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
    const a = (typeof n.reducers == "function" ? n.reducers(VO()) : n.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, s = {
      addCase(x, w) {
        const S = typeof x == "string" ? x : x.type;
        if (!S)
          throw new Error(process.env.NODE_ENV === "production" ? je(12) : "`context.addCase` cannot be called with an empty action type");
        if (S in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? je(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + S);
        return c.sliceCaseReducersByType[S] = w, s;
      },
      addMatcher(x, w) {
        return c.sliceMatchers.push({
          matcher: x,
          reducer: w
        }), s;
      },
      exposeAction(x, w) {
        return c.actionCreators[x] = w, s;
      },
      exposeCaseReducer(x, w) {
        return c.sliceCaseReducersByName[x] = w, s;
      }
    };
    l.forEach((x) => {
      const w = a[x], S = {
        reducerName: x,
        type: BO(i, x),
        createNotation: typeof n.reducers == "function"
      };
      HO(w) ? UO(S, w, s, t) : KO(S, w, s);
    });
    function u() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? je(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [x = {}, w = [], S = void 0] = typeof n.extraReducers == "function" ? Qy(n.extraReducers) : [n.extraReducers], O = {
        ...x,
        ...c.sliceCaseReducersByType
      };
      return NO(n.initialState, (C) => {
        for (let T in O)
          C.addCase(T, O[T]);
        for (let T of c.sliceMatchers)
          C.addMatcher(T.matcher, T.reducer);
        for (let T of w)
          C.addMatcher(T.matcher, T.reducer);
        S && C.addDefaultCase(S);
      });
    }
    const f = (x) => x, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let g;
    function v(x, w) {
      return g || (g = u()), g(x, w);
    }
    function y() {
      return g || (g = u()), g.getInitialState();
    }
    function m(x, w = !1) {
      function S(C) {
        let T = C[x];
        if (typeof T > "u") {
          if (w)
            T = Ao(h, S, y);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? je(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return T;
      }
      function O(C = f) {
        const T = Ao(p, w, () => /* @__PURE__ */ new WeakMap());
        return Ao(T, C, () => {
          const E = {};
          for (const [_, D] of Object.entries(n.selectors ?? {}))
            E[_] = FO(D, C, () => Ao(h, C, y), w);
          return E;
        });
      }
      return {
        reducerPath: x,
        getSelectors: O,
        get selectors() {
          return O(S);
        },
        selectSlice: S
      };
    }
    const b = {
      name: i,
      reducer: v,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: y,
      ...m(o),
      injectInto(x, {
        reducerPath: w,
        ...S
      } = {}) {
        const O = w ?? o;
        return x.inject({
          reducerPath: O,
          reducer: v
        }, S), {
          ...b,
          ...m(O, !0)
        };
      }
    };
    return b;
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
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? Nt(e, a) : Nt(e));
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
    rejected: c,
    settled: s,
    options: u
  } = r, f = i(e, o, u);
  n.exposeAction(t, f), a && n.addCase(f.fulfilled, a), l && n.addCase(f.pending, l), c && n.addCase(f.rejected, c), s && n.addMatcher(f.settled, s), n.exposeCaseReducer(t, {
    fulfilled: a || Io,
    pending: l || Io,
    rejected: c || Io,
    settled: s || Io
  });
}
function Io() {
}
var YO = "task", em = "listener", tm = "completed", Nu = "cancelled", GO = `task-${Nu}`, XO = `task-${tm}`, Lc = `${em}-${Nu}`, ZO = `${em}-${tm}`, al = class {
  constructor(e) {
    this.code = e, this.message = `${YO} ${Nu} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, $u = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? je(32) : `${t} is not a function`);
}, da = () => {
}, rm = (e, t = da) => (e.catch(t), e), nm = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), un = (e) => {
  if (e.aborted)
    throw new al(e.reason);
};
function im(e, t) {
  let r = da;
  return new Promise((n, i) => {
    const o = () => i(new al(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    r = nm(e, o), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = da;
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
      status: r instanceof al ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, fa = (e) => (t) => rm(im(e, t).then((r) => (un(e), r))), om = (e) => {
  const t = fa(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Fn
} = Object, Qp = {}, Qi = "listenerMiddleware", QO = (e, t) => {
  const r = (n) => nm(e, () => n.abort(e.reason));
  return (n, i) => {
    $u(n, "taskExecutor");
    const o = new AbortController();
    r(o);
    const a = JO(async () => {
      un(e), un(o.signal);
      const l = await n({
        pause: fa(o.signal),
        delay: om(o.signal),
        signal: o.signal
      });
      return un(o.signal), l;
    }, () => o.abort(XO));
    return i?.autoJoin && t.push(a.catch(da)), {
      result: fa(e)(a),
      cancel() {
        o.abort(GO);
      }
    };
  };
}, eP = (e, t) => {
  const r = async (n, i) => {
    un(t);
    let o = () => {
    };
    const l = [new Promise((c, s) => {
      let u = e({
        predicate: n,
        effect: (f, p) => {
          p.unsubscribe(), c([f, p.getState(), p.getOriginalState()]);
        }
      });
      o = () => {
        u(), s();
      };
    })];
    i != null && l.push(new Promise((c) => setTimeout(c, i, null)));
    try {
      const c = await im(t, Promise.race(l));
      return un(t), c;
    } finally {
      o();
    }
  };
  return (n, i) => rm(r(n, i));
}, am = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = Nt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? je(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return $u(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, lm = /* @__PURE__ */ Fn((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = am(e);
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
  withTypes: () => lm
}), eh = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = am(t);
  return Array.from(e.values()).find((o) => (typeof r == "string" ? o.type === r : o.predicate === i) && o.effect === n);
}, Bc = (e) => {
  e.pending.forEach((t) => {
    t.abort(Lc);
  });
}, tP = (e, t) => () => {
  for (const r of t.keys())
    Bc(r);
  e.clear();
}, th = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, sm = /* @__PURE__ */ Fn(/* @__PURE__ */ Nt(`${Qi}/add`), {
  withTypes: () => sm
}), rP = /* @__PURE__ */ Nt(`${Qi}/removeAll`), cm = /* @__PURE__ */ Fn(/* @__PURE__ */ Nt(`${Qi}/remove`), {
  withTypes: () => cm
}), nP = (...e) => {
  console.error(`${Qi}/error`, ...e);
}, eo = (e = {}) => {
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
  $u(a, "onError");
  const l = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (g) => {
    h.unsubscribe(), g?.cancelActive && Bc(h);
  }), c = (h) => {
    const g = eh(t, h) ?? lm(h);
    return l(g);
  };
  Fn(c, {
    withTypes: () => c
  });
  const s = (h) => {
    const g = eh(t, h);
    return g && (g.unsubscribe(), h.cancelActive && Bc(g)), !!g;
  };
  Fn(s, {
    withTypes: () => s
  });
  const u = async (h, g, v, y) => {
    const m = new AbortController(), b = eP(c, m.signal), x = [];
    try {
      h.pending.add(m), n(h), await Promise.resolve(h.effect(
        g,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Fn({}, v, {
          getOriginalState: y,
          condition: (w, S) => b(w, S).then(Boolean),
          take: b,
          delay: om(m.signal),
          pause: fa(m.signal),
          extra: o,
          signal: m.signal,
          fork: QO(m.signal, x),
          unsubscribe: h.unsubscribe,
          subscribe: () => {
            t.set(h.id, h);
          },
          cancelActiveListeners: () => {
            h.pending.forEach((w, S, O) => {
              w !== m && (w.abort(Lc), O.delete(w));
            });
          },
          cancel: () => {
            m.abort(Lc), h.pending.delete(m);
          },
          throwIfCancelled: () => {
            un(m.signal);
          }
        })
      ));
    } catch (w) {
      w instanceof al || th(a, w, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(x), m.abort(ZO), i(h), h.pending.delete(m);
    }
  }, f = tP(t, r);
  return {
    middleware: (h) => (g) => (v) => {
      if (!Iu(v))
        return g(v);
      if (sm.match(v))
        return c(v.payload);
      if (rP.match(v)) {
        f();
        return;
      }
      if (cm.match(v))
        return s(v.payload);
      let y = h.getState();
      const m = () => {
        if (y === Qp)
          throw new Error(process.env.NODE_ENV === "production" ? je(23) : `${Qi}: getOriginalState can only be called synchronously`);
        return y;
      };
      let b;
      try {
        if (b = g(v), t.size > 0) {
          const x = h.getState(), w = Array.from(t.values());
          for (const S of w) {
            let O = !1;
            try {
              O = S.predicate(v, x, y);
            } catch (C) {
              O = !1, th(a, C, {
                raisedBy: "predicate"
              });
            }
            O && u(S, v, h, m);
          }
        }
      } finally {
        y = Qp;
      }
      return b;
    },
    startListening: c,
    stopListening: s,
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
}, um = gt({
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
} = um.actions, cP = um.reducer;
function dm(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function pe(e) {
  return Number.isFinite(e);
}
function dr(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function rh(e, t) {
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
    t % 2 ? rh(Object(r), !0).forEach(function(n) {
      uP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rh(Object(r)).forEach(function(n) {
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
function He(e, t, r) {
  return Be(e) || Be(t) ? r : Ut(t) ? Hn(e, t, r) : typeof t == "function" ? t(e) : r;
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
}, hr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", fm = (e, t, r, n) => {
  if (n)
    return e.map((l) => l.coordinate);
  var i, o, a = e.map((l) => (l.coordinate === t && (i = !0), l.coordinate === r && (o = !0), l.coordinate));
  return i || a.push(t), o || a.push(r), a;
}, pm = (e, t, r) => {
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
    ticks: f,
    niceTicks: p,
    axisType: h
  } = e;
  if (!a)
    return null;
  var g = l === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, v = i === "category" && a.bandwidth ? a.bandwidth() / g : 0;
  if (v = h === "angleAxis" && o && o.length >= 2 ? Ct(o[0] - o[1]) * 2 * v : v, f || p) {
    var y = (f || p || []).map((m, b) => {
      var x = n ? n.indexOf(m) : m, w = a.map(x);
      return pe(w) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: w + v,
        value: m,
        offset: v,
        index: b
      } : null;
    }).filter(kt);
    return y;
  }
  return c && s ? s.map((m, b) => {
    var x = a.map(m);
    return pe(x) ? {
      coordinate: x + v,
      value: m,
      index: b,
      offset: v
    } : null;
  }).filter(kt) : a.ticks && u != null ? a.ticks(u).map((m, b) => {
    var x = a.map(m);
    return pe(x) ? {
      coordinate: x + v,
      value: m,
      index: b,
      offset: v
    } : null;
  }).filter(kt) : a.domain().map((m, b) => {
    var x = a.map(m);
    return pe(x) ? {
      coordinate: x + v,
      // @ts-expect-error can't use Date as an index
      value: n ? n[m] : m,
      index: b,
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
          var c = e[l], s = c?.[i];
          if (s != null) {
            var u = s[1], f = s[0], p = Jt(u) ? f : u;
            p >= 0 ? (s[0] = o, o += p, s[1] = o) : (s[0] = a, a += p, s[1] = a);
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
          var l = e[a], c = l?.[i];
          if (c != null) {
            var s = Jt(c[1]) ? c[0] : c[1];
            s >= 0 ? (c[0] = o, o += s, c[1] = o) : (c[0] = 0, c[1] = 0);
          }
        }
  }
}, yP = {
  sign: vP,
  // @ts-expect-error definitelytyped types are incorrect
  expand: _j,
  // @ts-expect-error definitelytyped types are incorrect
  none: hn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Ej,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: Aj,
  positive: gP
}, mP = (e, t, r) => {
  var n, i = (n = yP[r]) !== null && n !== void 0 ? n : hn, o = kj().keys(t).value((l, c) => Number(He(l, c, 0))).order(_c).offset(i), a = o(e);
  return a.forEach((l, c) => {
    l.forEach((s, u) => {
      var f = He(e[u], t[c], 0);
      Array.isArray(f) && f.length === 2 && ne(f[0]) && ne(f[1]) && (s[0] = f[0], s[1] = f[1]);
    });
  }), a;
};
function hm(e) {
  return e == null ? void 0 : String(e);
}
function nh(e) {
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
      var l = hy(r, "value", i[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r != null && r[o] ? r[o].coordinate + n / 2 : null;
  }
  var c = He(i, Be(a) ? t.dataKey : a), s = t.scale.map(c);
  return ne(s) ? s : null;
}
var ih = (e) => {
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
  if (Be(l))
    return null;
  var c = t.scale.map(l);
  return ne(c) ? c - i / 2 + n : null;
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
      } = o, l = a.reduce((c, s) => {
        var u = dm(s, t, r), f = bP(u);
        return !pe(f[0]) || !pe(f[1]) ? c : [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, oh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ah = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Un = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = Ja(t, (u) => u.coordinate), o = 1 / 0, a = 1, l = i.length; a < l; a++) {
      var c = i[a], s = i[a - 1];
      o = Math.min((c?.coordinate || 0) - (s?.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return r ? void 0 : 0;
};
function lh(e) {
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
function ll(e, t) {
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
}, OP = (e, t) => t === "centric" ? e.angle : e.radius, Tr = (e) => e.layout.width, Ir = (e) => e.layout.height, PP = (e) => e.layout.scale, vm = (e) => e.layout.margin, sl = R((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), cl = R((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), CP = "data-recharts-item-index", kP = "data-recharts-item-id", to = 60;
function sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sh(Object(r), !0).forEach(function(n) {
      _P(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sh(Object(r)).forEach(function(n) {
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
  var t = cl(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : to;
      return r + i;
    }
    return r;
  }, 0);
}
function MP(e) {
  var t = cl(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : to;
      return r + i;
    }
    return r;
  }, 0);
}
function DP(e) {
  var t = sl(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function RP(e) {
  var t = sl(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var rt = R([Tr, Ir, vm, TP, IP, MP, DP, RP, Ty, YS], (e, t, r, n, i, o, a, l, c, s) => {
  var u = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + o
  }, f = {
    top: (r.top || 0) + a,
    bottom: (r.bottom || 0) + l
  }, p = Mo(Mo({}, f), u), h = p.bottom;
  p.bottom += n, p = pP(p, c, s);
  var g = e - p.left - p.right, v = t - p.top - p.bottom;
  return Mo(Mo({
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
})), zu = R(Tr, Ir, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), $P = /* @__PURE__ */ At(null), dt = () => zt($P) != null, ul = (e) => e.brush, dl = R([ul, rt, vm], (e, t, r) => ({
  height: e.height,
  x: ne(e.x) ? e.x : t.left,
  y: ne(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: ne(e.width) ? e.width : t.width
})), Vs = {}, Ks = {}, Hs = {}, ch;
function zP() {
  return ch || (ch = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: o } = {}) {
      let a, l = null;
      const c = o != null && o.includes("leading"), s = o == null || o.includes("trailing"), u = () => {
        l !== null && (r.apply(a, l), a = void 0, l = null);
      }, f = () => {
        s && u(), v();
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
      }, m = function(...b) {
        if (i?.aborted)
          return;
        a = this, l = b;
        const x = p == null;
        h(), c && x && u();
      };
      return m.schedule = h, m.cancel = v, m.flush = y, i?.addEventListener("abort", v, { once: !0 }), m;
    }
    e.debounce = t;
  })(Hs)), Hs;
}
var uh;
function LP() {
  return uh || (uh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ zP();
    function r(n, i = 0, o = {}) {
      typeof o != "object" && (o = {});
      const { leading: a = !1, trailing: l = !0, maxWait: c } = o, s = Array(2);
      a && (s[0] = "leading"), l && (s[1] = "trailing");
      let u, f = null;
      const p = t.debounce(function(...v) {
        u = n.apply(this, v), f = null;
      }, i, { edges: s }), h = function(...v) {
        return c != null && (f === null && (f = Date.now()), Date.now() - f >= c) ? (u = n.apply(this, v), f = Date.now(), p.cancel(), p.schedule(), u) : (p.apply(this, v), u);
      }, g = () => (p.flush(), u);
      return h.cancel = p.cancel, h.flush = g, h;
    }
    e.debounce = r;
  })(Ks)), Ks;
}
var dh;
function BP() {
  return dh || (dh = 1, (function(e) {
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
  })(Vs)), Vs;
}
var qs, fh;
function WP() {
  return fh || (fh = 1, qs = BP().throttle), qs;
}
var FP = /* @__PURE__ */ WP();
const VP = /* @__PURE__ */ Sn(FP);
var pa = function(t, r) {
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
}, gm = (e, t, r) => {
  var {
    width: n = lr.width,
    height: i = lr.height,
    aspect: o,
    maxHeight: a
  } = r, l = vn(n) ? e : Number(n), c = vn(i) ? t : Number(i);
  return o && o > 0 && (l ? c = l / o : c && (l = c * o), a && c != null && c > a && (c = a)), {
    calculatedWidth: l,
    calculatedHeight: c
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
  } = e, n = vn(t), i = vn(r);
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
function Wc() {
  return Wc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wc.apply(null, arguments);
}
function ph(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ph(Object(r), !0).forEach(function(n) {
      XP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ph(Object(r)).forEach(function(n) {
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
var ym = /* @__PURE__ */ At(lr.initialDimension);
function QP(e) {
  return dr(e.width) && dr(e.height);
}
function mm(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = tr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return QP(i) ? /* @__PURE__ */ P.createElement(ym.Provider, {
    value: i
  }, t) : null;
}
var Lu = () => zt(ym), eC = /* @__PURE__ */ ut((e, t) => {
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
    maxHeight: c,
    children: s,
    debounce: u = lr.debounce,
    id: f,
    className: p,
    onResize: h,
    style: g = {}
  } = e, v = ve(null), y = ve();
  y.current = h, $0(t, () => v.current);
  var [m, b] = W({
    containerWidth: n.width,
    containerHeight: n.height
  }), x = _e((T, E) => {
    b((_) => {
      var D = Math.round(T), k = Math.round(E);
      return _.containerWidth === D && _.containerHeight === k ? _ : {
        containerWidth: D,
        containerHeight: k
      };
    });
  }, []);
  Se(() => {
    if (v.current == null || typeof ResizeObserver > "u")
      return On;
    var T = (k) => {
      var F, N = k[0];
      if (N != null) {
        var {
          width: V,
          height: U
        } = N.contentRect;
        x(V, U), (F = y.current) === null || F === void 0 || F.call(y, V, U);
      }
    };
    u > 0 && (T = VP(T, u, {
      trailing: !0,
      leading: !1
    }));
    var E = new ResizeObserver(T), {
      width: _,
      height: D
    } = v.current.getBoundingClientRect();
    return x(_, D), E.observe(v.current), () => {
      E.disconnect();
    };
  }, [x, u]);
  var {
    containerWidth: w,
    containerHeight: S
  } = m;
  pa(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: O,
    calculatedHeight: C
  } = gm(w, S, {
    width: i,
    height: o,
    aspect: r,
    maxHeight: c
  });
  return pa(O != null && O > 0 || C != null && C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, O, C, i, o, a, l, r), /* @__PURE__ */ P.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: Pe("recharts-responsive-container", p),
    style: hh(hh({}, g), {}, {
      width: i,
      height: o,
      minWidth: a,
      minHeight: l,
      maxHeight: c
    }),
    ref: v
  }, /* @__PURE__ */ P.createElement("div", {
    style: YP({
      width: i,
      height: o
    })
  }, /* @__PURE__ */ P.createElement(mm, {
    width: O,
    height: C
  }, s)));
}), Bu = /* @__PURE__ */ ut((e, t) => {
  var r = Lu();
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
  } = gm(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return ne(o) && ne(a) ? /* @__PURE__ */ P.createElement(mm, {
    width: o,
    height: a
  }, e.children) : /* @__PURE__ */ P.createElement(eC, Wc({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function Wu(e) {
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
var ro = () => {
  var e, t = dt(), r = oe(NP), n = oe(dl), i = (e = oe(ul)) === null || e === void 0 ? void 0 : e.padding;
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
}, xm = () => {
  var e;
  return (e = oe(rt)) !== null && e !== void 0 ? e : tC;
}, bm = () => oe(Tr), wm = () => oe(Ir), Oe = (e) => e.layout.layoutType, Pn = () => oe(Oe), Fu = () => {
  var e = Pn();
  if (e === "horizontal" || e === "vertical")
    return e;
}, jm = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, rC = () => {
  var e = Pn();
  return e !== void 0;
}, no = (e) => {
  var t = $e(), r = dt(), {
    width: n,
    height: i
  } = e, o = Lu(), a = n, l = i;
  return o && (a = o.width > 0 ? o.width : n, l = o.height > 0 ? o.height : i), Se(() => {
    !r && dr(a) && dr(l) && t(lP({
      width: a,
      height: l
    }));
  }, [t, r, a, l]), null;
}, Sm = Symbol.for("immer-nothing"), vh = Symbol.for("immer-draftable"), $t = Symbol.for("immer-state"), nC = process.env.NODE_ENV !== "production" ? [
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
var $i = Object.getPrototypeOf;
function Yn(e) {
  return !!e && !!e[$t];
}
function yn(e) {
  return e ? Om(e) || Array.isArray(e) || !!e[vh] || !!e.constructor?.[vh] || io(e) || pl(e) : !1;
}
var iC = Object.prototype.constructor.toString(), gh = /* @__PURE__ */ new WeakMap();
function Om(e) {
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
  let n = gh.get(r);
  return n === void 0 && (n = Function.toString.call(r), gh.set(r, n)), n === iC;
}
function ha(e, t, r = !0) {
  fl(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function fl(e) {
  const t = e[$t];
  return t ? t.type_ : Array.isArray(e) ? 1 : io(e) ? 2 : pl(e) ? 3 : 0;
}
function Fc(e, t) {
  return fl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Pm(e, t, r) {
  const n = fl(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function oC(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function io(e) {
  return e instanceof Map;
}
function pl(e) {
  return e instanceof Set;
}
function tn(e) {
  return e.copy_ || e.base_;
}
function Vc(e, t) {
  if (io(e))
    return new Map(e);
  if (pl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Om(e);
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
    return Object.create($i(e), n);
  } else {
    const n = $i(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function Vu(e, t = !1) {
  return hl(e) || Yn(e) || !yn(e) || (fl(e) > 1 && Object.defineProperties(e, {
    set: Do,
    add: Do,
    clear: Do,
    delete: Do
  }), Object.freeze(e), t && Object.values(e).forEach((r) => Vu(r, !0))), e;
}
function aC() {
  Pt(2);
}
var Do = {
  value: aC
};
function hl(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var lC = {};
function mn(e) {
  const t = lC[e];
  return t || Pt(0, e), t;
}
var zi;
function Cm() {
  return zi;
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
function yh(e, t) {
  t && (mn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Kc(e) {
  Hc(e), e.drafts_.forEach(cC), e.drafts_ = null;
}
function Hc(e) {
  e === zi && (zi = e.parent_);
}
function mh(e) {
  return zi = sC(zi, e);
}
function cC(e) {
  const t = e[$t];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function xh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[$t].modified_ && (Kc(t), Pt(4)), yn(e) && (e = va(t, e), t.parent_ || ga(t, e)), t.patches_ && mn("Patches").generateReplacementPatches_(
    r[$t].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = va(t, r, []), Kc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Sm ? e : void 0;
}
function va(e, t, r) {
  if (hl(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[$t];
  if (!i)
    return ha(
      t,
      (o, a) => bh(e, i, t, o, a, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return ga(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const o = i.copy_;
    let a = o, l = !1;
    i.type_ === 3 && (a = new Set(o), o.clear(), l = !0), ha(
      a,
      (c, s) => bh(
        e,
        i,
        o,
        c,
        s,
        r,
        l
      ),
      n
    ), ga(e, o, !1), r && e.patches_ && mn("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function bh(e, t, r, n, i, o, a) {
  if (i == null || typeof i != "object" && !a)
    return;
  const l = hl(i);
  if (!(l && !a)) {
    if (process.env.NODE_ENV !== "production" && i === r && Pt(5), Yn(i)) {
      const c = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !Fc(t.assigned_, n) ? o.concat(n) : void 0, s = va(e, i, c);
      if (Pm(r, n, s), Yn(s))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else a && r.add(i);
    if (yn(i) && !l) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && l)
        return;
      va(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (io(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && ga(e, i);
    }
  }
}
function ga(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Vu(t, r);
}
function uC(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Cm(),
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
  let i = n, o = Ku;
  r && (i = [n], o = Li);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, l;
}
var Ku = {
  get(e, t) {
    if (t === $t)
      return e;
    const r = tn(e);
    if (!Fc(r, t))
      return dC(e, r, t);
    const n = r[t];
    return e.finalized_ || !yn(n) ? n : n === Us(e.base_, t) ? (Ys(e), e.copy_[t] = Uc(n, e)) : n;
  },
  has(e, t) {
    return t in tn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(tn(e));
  },
  set(e, t, r) {
    const n = km(tn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Us(tn(e), t), o = i?.[$t];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (oC(r, i) && (r !== void 0 || Fc(e.base_, t)))
        return !0;
      Ys(e), qc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Us(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ys(e), qc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    Pt(11);
  },
  getPrototypeOf(e) {
    return $i(e.base_);
  },
  setPrototypeOf() {
    Pt(12);
  }
}, Li = {};
ha(Ku, (e, t) => {
  Li[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Li.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Pt(13), Li.set.call(this, e, t, void 0);
};
Li.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Pt(14), Ku.set.call(this, e[0], t, r, e[0]);
};
function Us(e, t) {
  const r = e[$t];
  return (r ? tn(r) : e)[t];
}
function dC(e, t, r) {
  const n = km(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function km(e, t) {
  if (!(t in e))
    return;
  let r = $i(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = $i(r);
  }
}
function qc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && qc(e.parent_));
}
function Ys(e) {
  e.copy_ || (e.copy_ = Vc(
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
        return function(c = o, ...s) {
          return a.produce(c, (u) => r.call(this, u, ...s));
        };
      }
      typeof r != "function" && Pt(6), n !== void 0 && typeof n != "function" && Pt(7);
      let i;
      if (yn(t)) {
        const o = mh(this), a = Uc(t, void 0);
        let l = !0;
        try {
          i = r(a), l = !1;
        } finally {
          l ? Kc(o) : Hc(o);
        }
        return yh(o, n), xh(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === Sm && (i = void 0), this.autoFreeze_ && Vu(i, !0), n) {
          const o = [], a = [];
          mn("Patches").generateReplacementPatches_(t, i, o, a), n(o, a);
        }
        return i;
      } else
        Pt(1, t);
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
    yn(e) || Pt(8), Yn(e) && (e = pC(e));
    const t = mh(this), r = Uc(e, void 0);
    return r[$t].isManual_ = !0, Hc(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[$t];
    (!r || !r.isManual_) && Pt(9);
    const { scope_: n } = r;
    return yh(n, t), xh(void 0, n);
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
function Uc(e, t) {
  const r = io(e) ? mn("MapSet").proxyMap_(e, t) : pl(e) ? mn("MapSet").proxySet_(e, t) : uC(e, t);
  return (t ? t.scope_ : Cm()).drafts_.push(r), r;
}
function pC(e) {
  return Yn(e) || Pt(10, e), _m(e);
}
function _m(e) {
  if (!yn(e) || hl(e))
    return e;
  const t = e[$t];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Vc(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = Vc(e, !0);
  return ha(
    r,
    (i, o) => {
      Pm(r, i, _m(o));
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
}, Em = gt({
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
        } = t.payload, i = Kt(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: De()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = Kt(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: De()
    }
  }
}), {
  setLegendSize: s$,
  setLegendSettings: c$,
  addLegendPayload: gC,
  replaceLegendPayload: yC,
  removeLegendPayload: mC
} = Em.actions, xC = Em.reducer, Ro = { exports: {} }, Gs = {};
var wh;
function bC() {
  if (wh) return Gs;
  wh = 1;
  var e = Le;
  function t(c, s) {
    return c === s && (c !== 0 || 1 / c === 1 / s) || c !== c && s !== s;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Gs.useSyncExternalStoreWithSelector = function(c, s, u, f, p) {
    var h = i(null);
    if (h.current === null) {
      var g = { hasValue: !1, value: null };
      h.current = g;
    } else g = h.current;
    h = a(
      function() {
        function y(S) {
          if (!m) {
            if (m = !0, b = S, S = f(S), p !== void 0 && g.hasValue) {
              var O = g.value;
              if (p(O, S))
                return x = O;
            }
            return x = S;
          }
          if (O = x, r(b, S)) return O;
          var C = f(S);
          return p !== void 0 && p(O, C) ? (b = S, O) : (b = S, x = C);
        }
        var m = !1, b, x, w = u === void 0 ? null : u;
        return [
          function() {
            return y(s());
          },
          w === null ? void 0 : function() {
            return y(w());
          }
        ];
      },
      [s, u, f, p]
    );
    var v = n(c, h[0], h[1]);
    return o(
      function() {
        g.hasValue = !0, g.value = v;
      },
      [v]
    ), l(v), v;
  }, Gs;
}
var Xs = {};
var jh;
function wC() {
  return jh || (jh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, s) {
      return c === s && (c !== 0 || 1 / c === 1 / s) || c !== c && s !== s;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Le, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    Xs.useSyncExternalStoreWithSelector = function(c, s, u, f, p) {
      var h = i(null);
      if (h.current === null) {
        var g = { hasValue: !1, value: null };
        h.current = g;
      } else g = h.current;
      h = a(
        function() {
          function y(S) {
            if (!m) {
              if (m = !0, b = S, S = f(S), p !== void 0 && g.hasValue) {
                var O = g.value;
                if (p(O, S))
                  return x = O;
              }
              return x = S;
            }
            if (O = x, r(b, S))
              return O;
            var C = f(S);
            return p !== void 0 && p(O, C) ? (b = S, O) : (b = S, x = C);
          }
          var m = !1, b, x, w = u === void 0 ? null : u;
          return [
            function() {
              return y(s());
            },
            w === null ? void 0 : function() {
              return y(w());
            }
          ];
        },
        [s, u, f, p]
      );
      var v = n(c, h[0], h[1]);
      return o(
        function() {
          g.hasValue = !0, g.value = v;
        },
        [v]
      ), l(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Xs;
}
var Sh;
function jC() {
  return Sh || (Sh = 1, process.env.NODE_ENV === "production" ? Ro.exports = bC() : Ro.exports = wC()), Ro.exports;
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
var Oh = {
  notify() {
  },
  get: () => []
};
function PC(e, t) {
  let r, n = Oh, i = 0, o = !1;
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
  function c() {
    g.onStateChange && g.onStateChange();
  }
  function s() {
    return o;
  }
  function u() {
    i++, r || (r = e.subscribe(c), n = OC());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Oh);
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
    handleChangeWrapper: c,
    isSubscribed: s,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return g;
}
var CC = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kC = /* @__PURE__ */ CC(), _C = () => typeof navigator < "u" && navigator.product === "ReactNative", EC = /* @__PURE__ */ _C(), AC = () => kC || EC ? P.useLayoutEffect : P.useEffect, TC = /* @__PURE__ */ AC();
function Ph(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function IC(e, t) {
  if (Ph(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Ph(e[r[i]], t[r[i]]))
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
    const c = PC(i), s = {
      store: i,
      subscription: c,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return s;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: f = "once" } = e;
      return /* @__PURE__ */ Object.assign(s, {
        stabilityCheck: f,
        identityFunctionCheck: u
      });
    }
  }, [i, n]), a = P.useMemo(() => i.getState(), [i]);
  TC(() => {
    const { subscription: c } = o;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== i.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
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
function oo(e, t) {
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
function Yc() {
  return Yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yc.apply(null, arguments);
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
function vi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ch(Object(r), !0).forEach(function(n) {
      WC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ch(Object(r)).forEach(function(n) {
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
  return Array.isArray(e) && Ut(e[0]) && Ut(e[1]) ? e.join(" ~ ") : e;
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
  return t == null ? e : Ja(e, t);
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
    wrapperClassName: c,
    labelClassName: s,
    label: u,
    labelFormatter: f,
    accessibilityLayer: p = In.accessibilityLayer
  } = e, h = () => {
    if (o && o.length) {
      var S = {
        padding: 0,
        margin: 0
      }, O = HC(o, l), C = O.map((T, E) => {
        if (!T || T.type === "none")
          return null;
        var _ = T.formatter || a || KC, {
          value: D,
          name: k
        } = T, F = D, N = k;
        if (_) {
          var V = _(D, k, T, E, o);
          if (Array.isArray(V))
            [F, N] = V;
          else if (V != null)
            F = V;
          else
            return null;
        }
        var U = vi(vi({}, In.itemStyle), {}, {
          color: T.color || In.itemStyle.color
        }, n);
        return /* @__PURE__ */ P.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(E),
          style: U
        }, Ut(N) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, N) : null, Ut(N) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, F), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, T.unit || ""));
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: S
      }, C);
    }
    return null;
  }, g = vi(vi({}, In.contentStyle), r), v = vi({
    margin: 0
  }, i), y = !Be(u), m = y ? u : "", b = Pe("recharts-default-tooltip", c), x = Pe("recharts-tooltip-label", s);
  y && f && o !== void 0 && o !== null && (m = f(u, o));
  var w = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", Yc({
    className: b,
    style: g
  }, w), /* @__PURE__ */ P.createElement("p", {
    className: x,
    style: v
  }, /* @__PURE__ */ P.isValidElement(m) ? m : "".concat(m)), h());
}, gi = "recharts-tooltip-wrapper", UC = {
  visibility: "hidden"
};
function YC(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return Pe(gi, {
    ["".concat(gi, "-right")]: ne(r) && t && ne(t.x) && r >= t.x,
    ["".concat(gi, "-left")]: ne(r) && t && ne(t.x) && r < t.x,
    ["".concat(gi, "-bottom")]: ne(n) && t && ne(t.y) && n >= t.y,
    ["".concat(gi, "-top")]: ne(n) && t && ne(t.y) && n < t.y
  });
}
function kh(e) {
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
  var u = r[n] - l - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return a[n] ? u : f;
  var p = c[n];
  if (p == null)
    return 0;
  if (a[n]) {
    var h = u, g = p;
    return h < g ? Math.max(f, p) : Math.max(u, p);
  }
  if (s == null)
    return 0;
  var v = f + l, y = p + s;
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
    useTranslate3d: c,
    viewBox: s
  } = e, u, f, p;
  return l.height > 0 && l.width > 0 && r ? (f = kh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), p = kh({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), u = GC({
    translateX: f,
    translateY: p,
    useTranslate3d: c
  })) : u = UC, {
    cssProperties: u,
    cssClasses: YC({
      translateX: f,
      translateY: p,
      coordinate: r
    })
  };
}
var ZC = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), ao = {
  isSsr: ZC()
};
function Am() {
  var [e, t] = W(() => ao.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
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
function _h(e, t) {
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
    t % 2 ? _h(Object(r), !0).forEach(function(n) {
      JC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(n) {
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
  var t, r, n, i, o, a, l = Am(), [c, s] = P.useState(() => ({
    dismissed: !1,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  P.useEffect(() => {
    var g = (v) => {
      if (v.key === "Escape") {
        var y, m, b, x;
        s({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (y = (m = e.coordinate) === null || m === void 0 ? void 0 : m.x) !== null && y !== void 0 ? y : 0,
            y: (b = (x = e.coordinate) === null || x === void 0 ? void 0 : x.y) !== null && b !== void 0 ? b : 0
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
var nk = /* @__PURE__ */ P.memo(rk), Tm = () => {
  var e;
  return (e = oe((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function Gc() {
  return Gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gc.apply(null, arguments);
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
function Ah(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eh(Object(r), !0).forEach(function(n) {
      ik(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eh(Object(r)).forEach(function(n) {
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
var Th = {
  curveBasisClosed: gj,
  curveBasisOpen: yj,
  curveBasis: vj,
  curveBumpX: tj,
  curveBumpY: rj,
  curveLinearClosed: mj,
  curveLinear: Xa,
  curveMonotoneX: xj,
  curveMonotoneY: bj,
  curveNatural: wj,
  curveStep: jj,
  curveStepAfter: Oj,
  curveStepBefore: Sj
}, ya = (e) => pe(e.x) && pe(e.y), Ih = (e) => e.base != null && ya(e.base) && ya(e), yi = (e) => e.x, mi = (e) => e.y, lk = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Xi(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = Th["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return Th[r] || Xa;
}, Mh = {
  connectNulls: !1,
  type: "linear"
}, sk = (e) => {
  var {
    type: t = Mh.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: o = Mh.connectNulls
  } = e, a = lk(t, i), l = o ? r.filter(ya) : r;
  if (Array.isArray(n)) {
    var c, s = r.map((g, v) => Ah(Ah({}, g), {}, {
      base: n[v]
    }));
    i === "vertical" ? c = Oo().y(mi).x1(yi).x0((g) => g.base.x) : c = Oo().x(yi).y1(mi).y0((g) => g.base.y);
    var u = c.defined(Ih).curve(a), f = o ? s.filter(Ih) : s;
    return u(f);
  }
  var p;
  i === "vertical" && ne(n) ? p = Oo().y(mi).x1(yi).x0(n) : ne(n) ? p = Oo().x(yi).y1(mi).y0(n) : p = ty().x(yi).y(mi);
  var h = p.defined(ya).curve(a);
  return h(l);
}, Ei = (e) => {
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
  }, l = r && r.length ? sk(a) : n;
  return /* @__PURE__ */ P.createElement("path", Gc({}, qt(e), _u(e), {
    className: Pe("recharts-curve", t),
    d: l === null ? void 0 : l,
    ref: i
  }));
}, ck = ["x", "y", "top", "left", "width", "height", "className"];
function Xc() {
  return Xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xc.apply(null, arguments);
}
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
function uk(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dh(Object(r), !0).forEach(function(n) {
      dk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach(function(n) {
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
  } = e, c = hk(e, ck), s = uk({
    x: t,
    y: r,
    top: n,
    left: i,
    width: o,
    height: a
  }, c);
  return !ne(t) || !ne(r) || !ne(o) || !ne(a) || !ne(n) || !ne(i) ? null : /* @__PURE__ */ P.createElement("path", Xc({}, vt(s), {
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
function Nh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rh(Object(r), !0).forEach(function(n) {
      xk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rh(Object(r)).forEach(function(n) {
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
var jk = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), Im = (e, t, r) => e.map((n) => "".concat(jk(n), " ").concat(t, "ms ").concat(r)).join(","), Sk = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Bi = (e, t) => Object.keys(t).reduce((r, n) => Nh(Nh({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function $h(e, t) {
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
    t % 2 ? $h(Object(r), !0).forEach(function(n) {
      Ok(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $h(Object(r)).forEach(function(n) {
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
var ma = (e, t, r) => e + (t - e) * r, Zc = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, Mm = (e, t, r) => {
  var n = Bi((i, o) => {
    if (Zc(o)) {
      var [a, l] = e(o.from, o.to, o.velocity);
      return Xe(Xe({}, o), {}, {
        from: a,
        velocity: l
      });
    }
    return o;
  }, t);
  return r < 1 ? Bi((i, o) => Zc(o) && n[i] != null ? Xe(Xe({}, o), {}, {
    velocity: ma(o.velocity, n[i].velocity, r),
    from: ma(o.from, n[i].from, r)
  }) : o, t) : Mm(e, n, r - 1);
};
function kk(e, t, r, n, i, o) {
  var a, l = n.reduce((p, h) => Xe(Xe({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), c = () => Bi((p, h) => h.from, l), s = () => !Object.values(l).filter(Zc).length, u = null, f = (p) => {
    a || (a = p);
    var h = p - a, g = h / r.dt;
    l = Mm(r, l, g), i(Xe(Xe(Xe({}, e), t), c())), a = p, s() || (u = o.setTimeout(f));
  };
  return () => (u = o.setTimeout(f), () => {
    var p;
    (p = u) === null || p === void 0 || p();
  });
}
function _k(e, t, r, n, i, o, a) {
  var l = null, c = i.reduce((f, p) => {
    var h = e[p], g = t[p];
    return h == null || g == null ? f : Xe(Xe({}, f), {}, {
      [p]: [h, g]
    });
  }, {}), s, u = (f) => {
    s || (s = f);
    var p = (f - s) / n, h = Bi((v, y) => ma(...y, r(p)), c);
    if (o(Xe(Xe(Xe({}, e), t), h)), p < 1)
      l = a.setTimeout(u);
    else {
      var g = Bi((v, y) => ma(...y, r(1)), c);
      o(Xe(Xe(Xe({}, e), t), g));
    }
  };
  return () => (l = a.setTimeout(u), () => {
    var f;
    (f = l) === null || f === void 0 || f();
  });
}
const Ek = (e, t, r, n, i, o) => {
  var a = Sk(e, t);
  return r == null ? () => (i(Xe(Xe({}, e), t)), () => {
  }) : r.isStepper === !0 ? kk(e, t, r, a, i, o) : _k(e, t, r, n, a, i, o);
};
var xa = 1e-4, Dm = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], Rm = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), zh = (e, t) => (r) => {
  var n = Dm(e, t);
  return Rm(n, r);
}, Ak = (e, t) => (r) => {
  var n = Dm(e, t), i = [...n.map((o, a) => o * a).slice(1), 0];
  return Rm(i, r);
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
  var i = zh(e, r), o = zh(t, n), a = Ak(e, r), l = (s) => s > 1 ? 1 : s < 0 ? 0 : s, c = (s) => {
    for (var u = s > 1 ? 1 : s, f = u, p = 0; p < 8; ++p) {
      var h = i(f) - u, g = a(f);
      if (Math.abs(h - u) < xa || g < xa)
        return o(f);
      f = l(f - h / g);
    }
    return o(f);
  };
  return c.isStepper = !1, c;
}, Lh = function() {
  return Mk(...Ik(...arguments));
}, Dk = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, o = (a, l, c) => {
    var s = -(a - l) * r, u = c * n, f = c + (s - u) * i / 1e3, p = c * i / 1e3 + a;
    return Math.abs(p - l) < xa && Math.abs(f) < xa ? [l, 0] : [p, f];
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
        return Lh(e);
      case "spring":
        return Dk();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return Lh(e);
    }
  return typeof e == "function" ? e : null;
};
function Nk(e) {
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
  var r = zt(Lk);
  return tr(() => t ?? r(e), [e, t, r]);
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
}, Bh = {
  t: 0
}, Zs = {
  t: 1
};
function vl(e) {
  var t = jt(e, Wk), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: o,
    begin: a,
    onAnimationEnd: l,
    onAnimationStart: c,
    children: s
  } = t, u = Am(), f = r === "auto" ? !ao.isSsr && !u : r, p = Bk(t.animationId, t.animationManager), [h, g] = W(f ? Bh : Zs), v = ve(null);
  return Se(() => {
    f || g(Zs);
  }, [f]), Se(() => {
    if (!f || !n)
      return On;
    var y = Ek(Bh, Zs, Rk(o), i, g, p.getTimeoutController()), m = () => {
      v.current = y();
    };
    return p.start([c, a, m, i, l]), () => {
      p.stop(), v.current && v.current(), l();
    };
  }, [f, n, i, o, a, c, l, p]), s(h.t);
}
function gl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = ve(Mi(t)), n = ve(e);
  return n.current !== e && (r.current = Mi(t), n.current = e), r.current;
}
var Fk = ["radius"], Vk = ["radius"], Wh, Fh, Vh, Kh, Hh, qh, Uh, Yh, Gh, Xh;
function Zh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zh(Object(r), !0).forEach(function(n) {
      Kk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zh(Object(r)).forEach(function(n) {
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
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ba.apply(null, arguments);
}
function Qh(e, t) {
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
var ev = (e, t, r, n, i) => {
  var o = Fr(r), a = Fr(n), l = Math.min(Math.abs(o) / 2, Math.abs(a) / 2), c = a >= 0 ? 1 : -1, s = o >= 0 ? 1 : -1, u = a >= 0 && o >= 0 || a < 0 && o < 0 ? 1 : 0, f;
  if (l > 0 && Array.isArray(i)) {
    for (var p = [0, 0, 0, 0], h = 0, g = 4; h < g; h++) {
      var v, y = (v = i[h]) !== null && v !== void 0 ? v : 0;
      p[h] = y > l ? l : y;
    }
    f = Ve(Wh || (Wh = ir(["M", ",", ""])), e, t + c * p[0]), p[0] > 0 && (f += Ve(Fh || (Fh = ir(["A ", ",", ",0,0,", ",", ",", ""])), p[0], p[0], u, e + s * p[0], t)), f += Ve(Vh || (Vh = ir(["L ", ",", ""])), e + r - s * p[1], t), p[1] > 0 && (f += Ve(Kh || (Kh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[1], p[1], u, e + r, t + c * p[1])), f += Ve(Hh || (Hh = ir(["L ", ",", ""])), e + r, t + n - c * p[2]), p[2] > 0 && (f += Ve(qh || (qh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[2], p[2], u, e + r - s * p[2], t + n)), f += Ve(Uh || (Uh = ir(["L ", ",", ""])), e + s * p[3], t + n), p[3] > 0 && (f += Ve(Yh || (Yh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[3], p[3], u, e, t + n - c * p[3])), f += "Z";
  } else if (l > 0 && i === +i && i > 0) {
    var m = Math.min(l, i);
    f = Ve(Gh || (Gh = ir(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + c * m, m, m, u, e + s * m, t, e + r - s * m, t, m, m, u, e + r, t + c * m, e + r, t + n - c * m, m, m, u, e + r - s * m, t + n, e + s * m, t + n, m, m, u, e, t + n - c * m);
  } else
    f = Ve(Xh || (Xh = ir(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return f;
}, tv = {
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
}, Nm = (e) => {
  var t = jt(e, tv), r = ve(null), [n, i] = W(-1);
  Se(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var J = r.current.getTotalLength();
        J && i(J);
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
    animationEasing: f,
    animationDuration: p,
    animationBegin: h,
    isAnimationActive: g,
    isUpdateAnimationActive: v
  } = t, y = ve(l), m = ve(c), b = ve(o), x = ve(a), w = tr(() => ({
    x: o,
    y: a,
    width: l,
    height: c,
    radius: s
  }), [o, a, l, c, s]), S = gl(w, "rectangle-");
  if (o !== +o || a !== +a || l !== +l || c !== +c || l === 0 || c === 0)
    return null;
  var O = Pe("recharts-rectangle", u);
  if (!v) {
    var C = vt(t), {
      radius: T
    } = C, E = Qh(C, Fk);
    return /* @__PURE__ */ P.createElement("path", ba({}, E, {
      x: Fr(o),
      y: Fr(a),
      width: Fr(l),
      height: Fr(c),
      radius: typeof s == "number" ? s : void 0,
      className: O,
      d: ev(o, a, l, c, s)
    }));
  }
  var _ = y.current, D = m.current, k = b.current, F = x.current, N = "0px ".concat(n === -1 ? 1 : n, "px"), V = "".concat(n, "px ").concat(n, "px"), U = Im(["strokeDasharray"], p, typeof f == "string" ? f : tv.animationEasing);
  return /* @__PURE__ */ P.createElement(vl, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: p,
    easing: f,
    isActive: v,
    begin: h
  }, (J) => {
    var $ = ze(_, l, J), re = ze(D, c, J), te = ze(k, o, J), z = ze(F, a, J);
    r.current && (y.current = $, m.current = re, b.current = te, x.current = z);
    var B;
    g ? J > 0 ? B = {
      transition: U,
      strokeDasharray: V
    } : B = {
      strokeDasharray: N
    } : B = {
      strokeDasharray: V
    };
    var L = vt(t), {
      radius: H
    } = L, le = Qh(L, Vk);
    return /* @__PURE__ */ P.createElement("path", ba({}, le, {
      radius: typeof s == "number" ? s : void 0,
      className: O,
      d: ev(te, z, $, re, s),
      ref: r,
      style: Jh(Jh({}, B), t.style)
    }));
  });
};
function rv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rv(Object(r), !0).forEach(function(n) {
      Yk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rv(Object(r)).forEach(function(n) {
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
var wa = Math.PI / 180, Zk = (e) => e * 180 / Math.PI, st = (e, t, r, n) => ({
  x: e + Math.cos(-wa * n) * r,
  y: t + Math.sin(-wa * n) * r
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
}, e_ = (e, t) => {
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
  var l = (r - i) / a, c = Math.acos(l);
  return n > o && (c = 2 * Math.PI - c), {
    radius: a,
    angle: Zk(c),
    angleInRadian: c
  };
}, t_ = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), o = Math.min(n, i);
  return {
    startAngle: t - o * 360,
    endAngle: r - o * 360
  };
}, r_ = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), o = Math.floor(n / 360), a = Math.min(i, o);
  return e + a * 360;
}, n_ = (e, t) => {
  var {
    relativeX: r,
    relativeY: n
  } = e, {
    radius: i,
    angle: o
  } = e_({
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
  } = t_(t), u = o, f;
  if (c <= s) {
    for (; u > s; )
      u -= 360;
    for (; u < c; )
      u += 360;
    f = u >= c && u <= s;
  } else {
    for (; u > c; )
      u -= 360;
    for (; u < s; )
      u += 360;
    f = u >= s && u <= c;
  }
  return f ? nv(nv({}, t), {}, {
    radius: i,
    angle: r_(u, t)
  }) : null;
};
function $m(e) {
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
var iv, ov, av, lv, sv, cv, uv;
function Jc() {
  return Jc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jc.apply(null, arguments);
}
function on(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var i_ = (e, t) => {
  var r = Ct(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, No = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: o,
    isExternal: a,
    cornerRadius: l,
    cornerIsExternal: c
  } = e, s = l * (a ? 1 : -1) + n, u = Math.asin(l / s) / wa, f = c ? i : i + o * u, p = st(t, r, s, f), h = st(t, r, n, f), g = c ? i - o * u : i, v = st(t, r, s * Math.cos(u * wa), g);
  return {
    center: p,
    circleTangency: h,
    lineTangency: v,
    theta: u
  };
}, zm = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: o,
    endAngle: a
  } = e, l = i_(o, a), c = o + l, s = st(t, r, i, o), u = st(t, r, i, c), f = Ve(iv || (iv = on(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), s.x, s.y, i, i, +(Math.abs(l) > 180), +(o > c), u.x, u.y);
  if (n > 0) {
    var p = st(t, r, n, o), h = st(t, r, n, c);
    f += Ve(ov || (ov = on(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), h.x, h.y, n, n, +(Math.abs(l) > 180), +(o <= c), p.x, p.y);
  } else
    f += Ve(av || (av = on(["L ", ",", " Z"])), t, r);
  return f;
}, o_ = (e) => {
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
  } = e, u = Ct(s - c), {
    circleTangency: f,
    lineTangency: p,
    theta: h
  } = No({
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
  } = No({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: -u,
    cornerRadius: o,
    cornerIsExternal: l
  }), m = l ? Math.abs(c - s) : Math.abs(c - s) - h - y;
  if (m < 0)
    return a ? Ve(lv || (lv = on(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), p.x, p.y, o, o, o * 2, o, o, -o * 2) : zm({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: c,
      endAngle: s
    });
  var b = Ve(sv || (sv = on(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), p.x, p.y, o, o, +(u < 0), f.x, f.y, i, i, +(m > 180), +(u < 0), g.x, g.y, o, o, +(u < 0), v.x, v.y);
  if (n > 0) {
    var {
      circleTangency: x,
      lineTangency: w,
      theta: S
    } = No({
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
      theta: T
    } = No({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: -u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), E = l ? Math.abs(c - s) : Math.abs(c - s) - S - T;
    if (E < 0 && o === 0)
      return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += Ve(cv || (cv = on(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), C.x, C.y, o, o, +(u < 0), O.x, O.y, n, n, +(E > 180), +(u > 0), x.x, x.y, o, o, +(u < 0), w.x, w.y);
  } else
    b += Ve(uv || (uv = on(["L", ",", "Z"])), t, r);
  return b;
}, a_ = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Lm = (e) => {
  var t = jt(e, a_), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: a,
    forceCornerRadius: l,
    cornerIsExternal: c,
    startAngle: s,
    endAngle: u,
    className: f
  } = t;
  if (o < i || s === u)
    return null;
  var p = Pe("recharts-sector", f), h = o - i, g = Qt(a, h, 0, !0), v;
  return g > 0 && Math.abs(s - u) < 360 ? v = o_({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(g, h / 2),
    forceCornerRadius: l,
    cornerIsExternal: c,
    startAngle: s,
    endAngle: u
  }) : v = zm({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    startAngle: s,
    endAngle: u
  }), /* @__PURE__ */ P.createElement("path", Jc({}, vt(t), {
    className: p,
    d: v
  }));
};
function l_(e, t, r) {
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
  if (yy(t)) {
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
    return $m(t);
  }
}
var Js = {}, Qs = {}, ec = {}, dv;
function s_() {
  return dv || (dv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ey();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(ec)), ec;
}
var fv;
function c_() {
  return fv || (fv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ s_();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(Qs)), Qs;
}
var pv;
function u_() {
  return pv || (pv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Ay(), r = /* @__PURE__ */ c_();
    function n(i, o, a) {
      a && typeof a != "number" && t.isIterateeCall(i, o, a) && (o = a = void 0), i = r.toFinite(i), o === void 0 ? (o = i, i = 0) : o = r.toFinite(o), a = a === void 0 ? i < o ? 1 : -1 : r.toFinite(a);
      const l = Math.max(Math.ceil((o - i) / (a || 1)), 0), c = new Array(l);
      for (let s = 0; s < l; s++)
        c[s] = i, i += a;
      return c;
    }
    e.range = n;
  })(Js)), Js;
}
var tc, hv;
function d_() {
  return hv || (hv = 1, tc = u_().range), tc;
}
var f_ = /* @__PURE__ */ d_();
const Bm = /* @__PURE__ */ Sn(f_);
var nr = (e) => e.chartData, Hu = R([nr], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), yl = (e, t, r, n) => n ? Hu(e) : nr(e), Wm = (e, t, r) => r ? Hu(e) : nr(e), p_ = R([yl], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
R([Hu], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
var h_ = R([nr], (e) => {
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
function vv(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function Fm(e, t) {
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
function v_(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (cr(n))
          return vv(n, t, r);
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
      else if (typeof i == "string" && oh.test(i)) {
        var c = oh.exec(i);
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
      else if (typeof o == "string" && ah.test(o)) {
        var u = ah.exec(o);
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
        return t == null ? p : vv(p, t, r);
    }
  }
}
var ri = 1e9, g_ = {
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
}, Uu, Ne = !0, Yt = "[DecimalError] ", dn = Yt + "Invalid argument: ", qu = Yt + "Exponent out of range: ", ni = Math.floor, rn = Math.pow, y_ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mt, et = 1e7, Re = 7, Vm = 9007199254740991, ja = ni(Vm / Re), ie = {};
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
  var e = this, t = e.d.length - 1, r = (t - e.e) * Re;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ie.dividedBy = ie.div = function(e) {
  return Or(this, new this.constructor(e));
};
ie.dividedToIntegerBy = ie.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ae(Or(t, new r(e), 0, 1), r.precision);
};
ie.equals = ie.eq = function(e) {
  return !this.cmp(e);
};
ie.exponent = function() {
  return Ue(this);
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
  else if (e = new n(e), e.s < 1 || e.eq(Mt)) throw Error(Yt + "NaN");
  if (r.s < 1) throw Error(Yt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Mt) ? new n(0) : (Ne = !1, t = Or(Wi(r, o), Wi(e, o), o), Ne = !0, Ae(t, i));
};
ie.minus = ie.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? qm(t, e) : Km(t, (e.s = -e.s, e));
};
ie.modulo = ie.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Yt + "NaN");
  return r.s ? (Ne = !1, t = Or(r, e, 0, 1).times(e), Ne = !0, r.minus(t)) : Ae(new n(r), i);
};
ie.naturalExponential = ie.exp = function() {
  return Hm(this);
};
ie.naturalLogarithm = ie.ln = function() {
  return Wi(this);
};
ie.negated = ie.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ie.plus = ie.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Km(t, e) : qm(t, (e.s = -e.s, e));
};
ie.precision = ie.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(dn + e);
  if (t = Ue(i) + 1, n = i.d.length - 1, r = n * Re + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ie.squareRoot = ie.sqrt = function() {
  var e, t, r, n, i, o, a, l = this, c = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new c(0);
    throw Error(Yt + "NaN");
  }
  for (e = Ue(l), Ne = !1, i = Math.sqrt(+l), i == 0 || i == 1 / 0 ? (t = sr(l.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ni((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = a = r + 3; ; )
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
ie.times = ie.mul = function(e) {
  var t, r, n, i, o, a, l, c, s, u = this, f = u.constructor, p = u.d, h = (e = new f(e)).d;
  if (!u.s || !e.s) return new f(0);
  for (e.s *= u.s, r = u.e + e.e, c = p.length, s = h.length, c < s && (o = p, p = h, h = o, a = c, c = s, s = a), o = [], a = c + s, n = a; n--; ) o.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      l = o[i] + h[n] * p[i - n - 1] + t, o[i--] = l % et | 0, t = l / et | 0;
    o[i] = (o[i] + t) % et | 0;
  }
  for (; !o[--a]; ) o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = r, Ne ? Ae(e, f.precision) : e;
};
ie.toDecimalPlaces = ie.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fr(e, 0, ri), t === void 0 ? t = n.rounding : fr(t, 0, 8), Ae(r, e + Ue(r) + 1, t));
};
ie.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = xn(n, !0) : (fr(e, 0, ri), t === void 0 ? t = i.rounding : fr(t, 0, 8), n = Ae(new i(n), e + 1, t), r = xn(n, !0, e + 1)), r;
};
ie.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? xn(i) : (fr(e, 0, ri), t === void 0 ? t = o.rounding : fr(t, 0, 8), n = Ae(new o(i), e + Ue(i) + 1, t), r = xn(n.abs(), !1, e + Ue(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
ie.toInteger = ie.toint = function() {
  var e = this, t = e.constructor;
  return Ae(new t(e), Ue(e) + 1, t.rounding);
};
ie.toNumber = function() {
  return +this;
};
ie.toPower = ie.pow = function(e) {
  var t, r, n, i, o, a, l = this, c = l.constructor, s = 12, u = +(e = new c(e));
  if (!e.s) return new c(Mt);
  if (l = new c(l), !l.s) {
    if (e.s < 1) throw Error(Yt + "Infinity");
    return l;
  }
  if (l.eq(Mt)) return l;
  if (n = c.precision, e.eq(Mt)) return Ae(l, n);
  if (t = e.e, r = e.d.length - 1, a = t >= r, o = l.s, a) {
    if ((r = u < 0 ? -u : u) <= Vm) {
      for (i = new c(Mt), t = Math.ceil(n / Re + 4), Ne = !1; r % 2 && (i = i.times(l), yv(i.d, t)), r = ni(r / 2), r !== 0; )
        l = l.times(l), yv(l.d, t);
      return Ne = !0, e.s < 0 ? new c(Mt).div(i) : Ae(i, n);
    }
  } else if (o < 0) throw Error(Yt + "NaN");
  return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, Ne = !1, i = e.times(Wi(l, n + s)), Ne = !0, i = Hm(i), i.s = o, i;
};
ie.toPrecision = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? (r = Ue(i), n = xn(i, r <= o.toExpNeg || r >= o.toExpPos)) : (fr(e, 1, ri), t === void 0 ? t = o.rounding : fr(t, 0, 8), i = Ae(new o(i), e, t), r = Ue(i), n = xn(i, e <= r || r <= o.toExpNeg, e)), n;
};
ie.toSignificantDigits = ie.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fr(e, 1, ri), t === void 0 ? t = n.rounding : fr(t, 0, 8)), Ae(new n(r), e, t);
};
ie.toString = ie.valueOf = ie.val = ie.toJSON = ie[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Ue(e), r = e.constructor;
  return xn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function Km(e, t) {
  var r, n, i, o, a, l, c, s, u = e.constructor, f = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), Ne ? Ae(t, f) : t;
  if (c = e.d, s = t.d, a = e.e, i = t.e, c = c.slice(), o = a - i, o) {
    for (o < 0 ? (n = c, o = -o, l = s.length) : (n = s, i = a, l = c.length), a = Math.ceil(f / Re), l = a > l ? a + 1 : l + 1, o > l && (o = l, n.length = 1), n.reverse(); o--; ) n.push(0);
    n.reverse();
  }
  for (l = c.length, o = s.length, l - o < 0 && (o = l, n = s, s = c, c = n), r = 0; o; )
    r = (c[--o] = c[o] + s[o] + r) / et | 0, c[o] %= et;
  for (r && (c.unshift(r), ++i), l = c.length; c[--l] == 0; ) c.pop();
  return t.d = c, t.e = i, Ne ? Ae(t, f) : t;
}
function fr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(dn + e);
}
function sr(e) {
  var t, r, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, t = 1; t < i; t++)
      n = e[t] + "", r = Re - n.length, r && (o += Lr(r)), o += n;
    a = e[t], n = a + "", r = Re - n.length, r && (o += Lr(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return o + a;
}
var Or = /* @__PURE__ */ (function() {
  function e(n, i) {
    var o, a = 0, l = n.length;
    for (n = n.slice(); l--; )
      o = n[l] * i + a, n[l] = o % et | 0, a = o / et | 0;
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
      n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * et + n[o] - i[o];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, o, a) {
    var l, c, s, u, f, p, h, g, v, y, m, b, x, w, S, O, C, T, E = n.constructor, _ = n.s == i.s ? 1 : -1, D = n.d, k = i.d;
    if (!n.s) return new E(n);
    if (!i.s) throw Error(Yt + "Division by zero");
    for (c = n.e - i.e, C = k.length, S = D.length, h = new E(_), g = h.d = [], s = 0; k[s] == (D[s] || 0); ) ++s;
    if (k[s] > (D[s] || 0) && --c, o == null ? b = o = E.precision : a ? b = o + (Ue(n) - Ue(i)) + 1 : b = o, b < 0) return new E(0);
    if (b = b / Re + 2 | 0, s = 0, C == 1)
      for (u = 0, k = k[0], b++; (s < S || u) && b--; s++)
        x = u * et + (D[s] || 0), g[s] = x / k | 0, u = x % k | 0;
    else {
      for (u = et / (k[0] + 1) | 0, u > 1 && (k = e(k, u), D = e(D, u), C = k.length, S = D.length), w = C, v = D.slice(0, C), y = v.length; y < C; ) v[y++] = 0;
      T = k.slice(), T.unshift(0), O = k[0], k[1] >= et / 2 && ++O;
      do
        u = 0, l = t(k, v, C, y), l < 0 ? (m = v[0], C != y && (m = m * et + (v[1] || 0)), u = m / O | 0, u > 1 ? (u >= et && (u = et - 1), f = e(k, u), p = f.length, y = v.length, l = t(f, v, p, y), l == 1 && (u--, r(f, C < p ? T : k, p))) : (u == 0 && (l = u = 1), f = k.slice()), p = f.length, p < y && f.unshift(0), r(v, f, y), l == -1 && (y = v.length, l = t(k, v, C, y), l < 1 && (u++, r(v, C < y ? T : k, y))), y = v.length) : l === 0 && (u++, v = [0]), g[s++] = u, l && v[0] ? v[y++] = D[w] || 0 : (v = [D[w]], y = 1);
      while ((w++ < S || v[0] !== void 0) && b--);
    }
    return g[0] || g.shift(), h.e = c, Ae(h, a ? o + Ue(h) + 1 : o);
  };
})();
function Hm(e, t) {
  var r, n, i, o, a, l, c = 0, s = 0, u = e.constructor, f = u.precision;
  if (Ue(e) > 16) throw Error(qu + Ue(e));
  if (!e.s) return new u(Mt);
  for (Ne = !1, l = f, a = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(a), s += 5;
  for (n = Math.log(rn(2, s)) / Math.LN10 * 2 + 5 | 0, l += n, r = i = o = new u(Mt), u.precision = l; ; ) {
    if (i = Ae(i.times(e), l), r = r.times(++c), a = o.plus(Or(i, r, l)), sr(a.d).slice(0, l) === sr(o.d).slice(0, l)) {
      for (; s--; ) o = Ae(o.times(o), l);
      return u.precision = f, t == null ? (Ne = !0, Ae(o, f)) : o;
    }
    o = a;
  }
}
function Ue(e) {
  for (var t = e.e * Re, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function rc(e, t, r) {
  if (t > e.LN10.sd())
    throw Ne = !0, r && (e.precision = r), Error(Yt + "LN10 precision limit exceeded");
  return Ae(new e(e.LN10), t);
}
function Lr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Wi(e, t) {
  var r, n, i, o, a, l, c, s, u, f = 1, p = 10, h = e, g = h.d, v = h.constructor, y = v.precision;
  if (h.s < 1) throw Error(Yt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Mt)) return new v(0);
  if (t == null ? (Ne = !1, s = y) : s = t, h.eq(10))
    return t == null && (Ne = !0), rc(v, s);
  if (s += p, v.precision = s, r = sr(g), n = r.charAt(0), o = Ue(h), Math.abs(o) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = sr(h.d), n = r.charAt(0), f++;
    o = Ue(h), n > 1 ? (h = new v("0." + r), o++) : h = new v(n + "." + r.slice(1));
  } else
    return c = rc(v, s + 2, y).times(o + ""), h = Wi(new v(n + "." + r.slice(1)), s - p).plus(c), v.precision = y, t == null ? (Ne = !0, Ae(h, y)) : h;
  for (l = a = h = Or(h.minus(Mt), h.plus(Mt), s), u = Ae(h.times(h), s), i = 3; ; ) {
    if (a = Ae(a.times(u), s), c = l.plus(Or(a, new v(i), s)), sr(c.d).slice(0, s) === sr(l.d).slice(0, s))
      return l = l.times(2), o !== 0 && (l = l.plus(rc(v, s + 2, y).times(o + ""))), l = Or(l, new v(f), s), v.precision = y, t == null ? (Ne = !0, Ae(l, y)) : l;
    l = c, i += 2;
  }
}
function gv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = ni(r / Re), e.d = [], n = (r + 1) % Re, r < 0 && (n += Re), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= Re; n < i; ) e.d.push(+t.slice(n, n += Re));
      t = t.slice(n), n = Re - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ne && (e.e > ja || e.e < -ja)) throw Error(qu + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ae(e, t, r) {
  var n, i, o, a, l, c, s, u, f = e.d;
  for (a = 1, o = f[0]; o >= 10; o /= 10) a++;
  if (n = t - a, n < 0)
    n += Re, i = t, s = f[u = 0];
  else {
    if (u = Math.ceil((n + 1) / Re), o = f.length, u >= o) return e;
    for (s = o = f[u], a = 1; o >= 10; o /= 10) a++;
    n %= Re, i = n - Re + a;
  }
  if (r !== void 0 && (o = rn(10, a - i - 1), l = s / o % 10 | 0, c = t < 0 || f[u + 1] !== void 0 || s % o, c = r < 4 ? (l || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? s / rn(10, a - i) : 0 : f[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (o = Ue(e), f.length = 1, t = t - o - 1, f[0] = rn(10, (Re - t % Re) % Re), e.e = ni(-t / Re) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = u, o = 1, u--) : (f.length = u + 1, o = rn(10, Re - n), f[u] = i > 0 ? (s / rn(10, a - i) % rn(10, i) | 0) * o : 0), c)
    for (; ; )
      if (u == 0) {
        (f[0] += o) == et && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[u] += o, f[u] != et) break;
        f[u--] = 0, o = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ne && (e.e > ja || e.e < -ja))
    throw Error(qu + Ue(e));
  return e;
}
function qm(e, t) {
  var r, n, i, o, a, l, c, s, u, f, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), Ne ? Ae(t, h) : t;
  if (c = e.d, f = t.d, n = t.e, s = e.e, c = c.slice(), a = s - n, a) {
    for (u = a < 0, u ? (r = c, a = -a, l = f.length) : (r = f, n = s, l = c.length), i = Math.max(Math.ceil(h / Re), l) + 2, a > i && (a = i, r.length = 1), r.reverse(), i = a; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, l = f.length, u = i < l, u && (l = i), i = 0; i < l; i++)
      if (c[i] != f[i]) {
        u = c[i] < f[i];
        break;
      }
    a = 0;
  }
  for (u && (r = c, c = f, f = r, t.s = -t.s), l = c.length, i = f.length - l; i > 0; --i) c[l++] = 0;
  for (i = f.length; i > a; ) {
    if (c[--i] < f[i]) {
      for (o = i; o && c[--o] === 0; ) c[o] = et - 1;
      --c[o], c[i] += et;
    }
    c[i] -= f[i];
  }
  for (; c[--l] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Ne ? Ae(t, h) : t) : new p(0);
}
function xn(e, t, r) {
  var n, i = Ue(e), o = sr(e.d), a = o.length;
  return t ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Lr(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Lr(-i - 1) + o, r && (n = r - a) > 0 && (o += Lr(n))) : i >= a ? (o += Lr(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + Lr(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += Lr(n))), e.s < 0 ? "-" + o : o;
}
function yv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Um(e) {
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
      return gv(a, o.toString());
    } else if (typeof o != "string")
      throw Error(dn + o);
    if (o.charCodeAt(0) === 45 ? (o = o.slice(1), a.s = -1) : a.s = 1, y_.test(o)) gv(a, o);
    else throw Error(dn + o);
  }
  if (i.prototype = ie, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Um, i.config = i.set = m_, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function m_(e) {
  if (!e || typeof e != "object")
    throw Error(Yt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    ri,
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
      if (ni(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(dn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(dn + r + ": " + n);
  return this;
}
var Uu = Um(g_);
Mt = new Uu(1);
const ye = Uu;
function Ym(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ye(e).abs().log(10).toNumber()) + 1, t;
}
function Gm(e, t, r) {
  for (var n = new ye(e), i = 0, o = []; n.lt(t) && i < 1e5; )
    o.push(n.toNumber()), n = n.add(r), i++;
  return o;
}
var Xm = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Yu = (e, t, r) => {
  if (e.lte(0))
    return new ye(0);
  var n = Ym(e.toNumber()), i = new ye(10).pow(n), o = e.div(i), a = n !== 1 ? 0.05 : 0.1, l = new ye(Math.ceil(o.div(a).toNumber())).add(r).mul(a), c = l.mul(i);
  return t ? new ye(c.toNumber()) : new ye(Math.ceil(c.toNumber()));
}, Zm = (e, t, r) => {
  var n;
  if (e.lte(0))
    return new ye(0);
  var i = [1, 2, 2.5, 5], o = e.toNumber(), a = Math.floor(new ye(o).abs().log(10).toNumber()), l = new ye(10).pow(a), c = e.div(l).toNumber(), s = i.findIndex((h) => h >= c - 1e-10);
  if (s === -1 && (l = l.mul(10), s = 0), s += r, s >= i.length) {
    var u = Math.floor(s / i.length);
    s %= i.length, l = l.mul(new ye(10).pow(u));
  }
  var f = (n = i[s]) !== null && n !== void 0 ? n : 1, p = new ye(f).mul(l);
  return t ? p : new ye(Math.ceil(p.toNumber()));
}, x_ = (e, t, r) => {
  var n = new ye(1), i = new ye(e);
  if (!i.isint() && r) {
    var o = Math.abs(e);
    o < 1 ? (n = new ye(10).pow(Ym(e) - 1), i = new ye(Math.floor(i.div(n).toNumber())).mul(n)) : o > 1 && (i = new ye(Math.floor(e)));
  } else e === 0 ? i = new ye(Math.floor((t - 1) / 2)) : r || (i = new ye(Math.floor(e)));
  for (var a = Math.floor((t - 1) / 2), l = [], c = 0; c < t; c++)
    l.push(i.add(new ye(c - a).mul(n)).toNumber());
  return l;
}, Jm = function(t, r, n, i) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Yu;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ye(0),
      tickMin: new ye(0),
      tickMax: new ye(0)
    };
  var l = a(new ye(r).sub(t).div(n - 1), i, o), c;
  t <= 0 && r >= 0 ? c = new ye(0) : (c = new ye(t).add(r).div(2), c = c.sub(new ye(c).mod(l)));
  var s = Math.ceil(c.sub(t).div(l).toNumber()), u = Math.ceil(new ye(r).sub(c).div(l).toNumber()), f = s + u + 1;
  return f > n ? Jm(t, r, n, i, o + 1, a) : (f < n && (u = r > 0 ? u + (n - f) : u, s = r > 0 ? s : s + (n - f)), {
    step: l,
    tickMin: c.sub(new ye(s).mul(l)),
    tickMax: c.add(new ye(u).mul(l))
  });
}, mv = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", l = Math.max(i, 2), [c, s] = Xm([r, n]);
  if (c === -1 / 0 || s === 1 / 0) {
    var u = s === 1 / 0 ? [c, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), s];
    return r > n ? u.reverse() : u;
  }
  if (c === s)
    return x_(c, i, o);
  var f = a === "snap125" ? Zm : Yu, {
    step: p,
    tickMin: h,
    tickMax: g
  } = Jm(c, s, l, o, 0, f), v = Gm(h, g.add(new ye(0.1).mul(p)), p);
  return r > n ? v.reverse() : v;
}, xv = function(t, r) {
  var [n, i] = t, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [l, c] = Xm([n, i]);
  if (l === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (l === c)
    return [l];
  var s = a === "snap125" ? Zm : Yu, u = Math.max(r, 2), f = s(new ye(c).sub(l).div(u - 1), o, 0), p = [...Gm(new ye(l), new ye(c), f), c];
  return o === !1 && (p = p.map((h) => Math.round(h))), n > i ? p.reverse() : p;
}, Qm = (e) => e.rootProps.maxBarSize, b_ = (e) => e.rootProps.barGap, ex = (e) => e.rootProps.barCategoryGap, w_ = (e) => e.rootProps.barSize, ml = (e) => e.rootProps.stackOffset, tx = (e) => e.rootProps.reverseStackOrder, Gu = (e) => e.options.chartName, Xu = (e) => e.rootProps.syncId, rx = (e) => e.rootProps.syncMethod, Zu = (e) => e.options.eventEmitter, j_ = (e) => e.rootProps.baseValue, Ze = {
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
}, xl = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function bl(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return hr(e, t) ? "category" : "number";
}
function bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bv(Object(r), !0).forEach(function(n) {
      S_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S_(e, t, r) {
  return (t = O_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O_(e) {
  var t = P_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function P_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wv = {
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
}, jv = {
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
}, C_ = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, Ju = R([C_, jm], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = bl(t, "angleAxis", wv.type)) !== null && r !== void 0 ? r : "category";
  return Sa(Sa({}, wv), {}, {
    type: n
  });
}), k_ = (e, t) => e.polarAxis.radiusAxis[t], Qu = R([k_, jm], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = bl(t, "radiusAxis", jv.type)) !== null && r !== void 0 ? r : "category";
  return Sa(Sa({}, jv), {}, {
    type: n
  });
}), wl = (e) => e.polarOptions, ed = R([Tr, Ir, rt], Jk), nx = R([wl, ed], (e, t) => {
  if (e != null)
    return Qt(e.innerRadius, t, 0);
}), ix = R([wl, ed], (e, t) => {
  if (e != null)
    return Qt(e.outerRadius, t, t * 0.8);
}), __ = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, ox = R([wl], __);
R([Ju, ox], xl);
var ax = R([ed, nx, ix], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
R([Qu, ax], xl);
var lx = R([Oe, wl, nx, ix, Tr, Ir], (e, t, r, n, i, o) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: a,
      cy: l,
      startAngle: c,
      endAngle: s
    } = t;
    return {
      cx: Qt(a, i, i / 2),
      cy: Qt(l, o, o / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: c,
      endAngle: s,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), nt = (e, t) => t, jl = (e, t, r) => r;
function Sl(e) {
  return e?.id;
}
function sx(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: o
  } = r, a = /* @__PURE__ */ new Map();
  return e.forEach((l) => {
    var c, s = (c = l.data) !== null && c !== void 0 ? c : n;
    if (!(s == null || s.length === 0)) {
      var u = Sl(l);
      s.forEach((f, p) => {
        var h = o == null || i ? p : String(He(f, o, null)), g = He(f, l.dataKey, 0), v;
        a.has(h) ? v = a.get(h) : v = {}, Object.assign(v, {
          [u]: g
        }), a.set(h, v);
      });
    }
  }), Array.from(a.values());
}
function Ol(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var Pl = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Cl(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function E_(e, t) {
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
}, ii = (e) => e.tooltip.settings.axisId;
function td(e) {
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
var A_ = (e, t) => {
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
function Vr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function T_(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function rd(e) {
  let t, r, n;
  e.length !== 2 ? (t = Vr, r = (l, c) => Vr(e(l), c), n = (l, c) => e(l) - c) : (t = e === Vr || e === T_ ? e : I_, r = e, n = e);
  function i(l, c, s = 0, u = l.length) {
    if (s < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = s + u >>> 1;
        r(l[f], c) < 0 ? s = f + 1 : u = f;
      } while (s < u);
    }
    return s;
  }
  function o(l, c, s = 0, u = l.length) {
    if (s < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = s + u >>> 1;
        r(l[f], c) <= 0 ? s = f + 1 : u = f;
      } while (s < u);
    }
    return s;
  }
  function a(l, c, s = 0, u = l.length) {
    const f = i(l, c, s, u - 1);
    return f > s && n(l[f - 1], c) > -n(l[f], c) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function I_() {
  return 0;
}
function cx(e) {
  return e === null ? NaN : +e;
}
function* M_(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const D_ = rd(Vr), lo = D_.right;
rd(cx).center;
class Sv extends Map {
  constructor(t, r = $_) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Ov(this, t));
  }
  has(t) {
    return super.has(Ov(this, t));
  }
  set(t, r) {
    return super.set(R_(this, t), r);
  }
  delete(t) {
    return super.delete(N_(this, t));
  }
}
function Ov({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function R_({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function N_({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function $_(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function z_(e = Vr) {
  if (e === Vr) return ux;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function ux(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const L_ = Math.sqrt(50), B_ = Math.sqrt(10), W_ = Math.sqrt(2);
function Oa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), o = n / Math.pow(10, i), a = o >= L_ ? 10 : o >= B_ ? 5 : o >= W_ ? 2 : 1;
  let l, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / a, l = Math.round(e * s), c = Math.round(t * s), l / s < e && ++l, c / s > t && --c, s = -s) : (s = Math.pow(10, i) * a, l = Math.round(e / s), c = Math.round(t / s), l * s < e && ++l, c * s > t && --c), c < l && 0.5 <= r && r < 2 ? Oa(e, t, r * 2) : [l, c, s];
}
function Qc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, o, a] = n ? Oa(t, e, r) : Oa(e, t, r);
  if (!(o >= i)) return [];
  const l = o - i + 1, c = new Array(l);
  if (n)
    if (a < 0) for (let s = 0; s < l; ++s) c[s] = (o - s) / -a;
    else for (let s = 0; s < l; ++s) c[s] = (o - s) * a;
  else if (a < 0) for (let s = 0; s < l; ++s) c[s] = (i + s) / -a;
  else for (let s = 0; s < l; ++s) c[s] = (i + s) * a;
  return c;
}
function eu(e, t, r) {
  return t = +t, e = +e, r = +r, Oa(e, t, r)[2];
}
function tu(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? eu(t, e, r) : eu(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Pv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Cv(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function dx(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? ux : z_(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, u = Math.log(c), f = 0.5 * Math.exp(2 * u / 3), p = 0.5 * Math.sqrt(u * f * (c - f) / c) * (s - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * f / c + p)), g = Math.min(n, Math.floor(t + (c - s) * f / c + p));
      dx(e, t, h, g, i);
    }
    const o = e[t];
    let a = r, l = n;
    for (xi(e, r, t), i(e[n], o) > 0 && xi(e, r, n); a < l; ) {
      for (xi(e, a, l), ++a, --l; i(e[a], o) < 0; ) ++a;
      for (; i(e[l], o) > 0; ) --l;
    }
    i(e[r], o) === 0 ? xi(e, r, l) : (++l, xi(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
  return e;
}
function xi(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function F_(e, t, r) {
  if (e = Float64Array.from(M_(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Cv(e);
    if (t >= 1) return Pv(e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = Pv(dx(e, o).subarray(0, o + 1)), l = Cv(e.subarray(o + 1));
    return a + (l - a) * (i - o);
  }
}
function V_(e, t, r = cx) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = +r(e[o], o, e), l = +r(e[o + 1], o + 1, e);
    return a + (l - a) * (i - o);
  }
}
function K_(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(i); ++n < i; )
    o[n] = e + n * r;
  return o;
}
function Gt(e, t) {
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
function Mr(e, t) {
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
const ru = Symbol("implicit");
function nd() {
  var e = new Sv(), t = [], r = [], n = ru;
  function i(o) {
    let a = e.get(o);
    if (a === void 0) {
      if (n !== ru) return n;
      e.set(o, a = t.push(o) - 1);
    }
    return r[a % r.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Sv();
    for (const a of o)
      e.has(a) || e.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (r = Array.from(o), i) : r.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return nd(t, r).unknown(n);
  }, Gt.apply(i, arguments), i;
}
function id() {
  var e = nd().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, o, a, l = !1, c = 0, s = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = i < n, g = h ? i : n, v = h ? n : i;
    o = (v - g) / Math.max(1, p - c + s * 2), l && (o = Math.floor(o)), g += (v - g - o * (p - c)) * u, a = o * (1 - c), l && (g = Math.round(g), a = Math.round(a));
    var y = K_(p).map(function(m) {
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
    return arguments.length ? (c = Math.min(1, s = +p), f()) : c;
  }, e.paddingInner = function(p) {
    return arguments.length ? (c = Math.min(1, p), f()) : c;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (s = +p, f()) : s;
  }, e.align = function(p) {
    return arguments.length ? (u = Math.max(0, Math.min(1, p)), f()) : u;
  }, e.copy = function() {
    return id(t(), [n, i]).round(l).paddingInner(c).paddingOuter(s).align(u);
  }, Gt.apply(f(), arguments);
}
function fx(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return fx(t());
  }, e;
}
function H_() {
  return fx(id.apply(null, arguments).paddingInner(1));
}
function od(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function px(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function so() {
}
var Fi = 0.7, Pa = 1 / Fi, Vn = "\\s*([+-]?\\d+)\\s*", Vi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", q_ = /^#([0-9a-f]{3,8})$/, U_ = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), Y_ = new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`), G_ = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Vi}\\)$`), X_ = new RegExp(`^rgba\\(${ur},${ur},${ur},${Vi}\\)$`), Z_ = new RegExp(`^hsl\\(${Vi},${ur},${ur}\\)$`), J_ = new RegExp(`^hsla\\(${Vi},${ur},${ur},${Vi}\\)$`), kv = {
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
od(so, Ki, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _v,
  // Deprecated! Use color.formatHex.
  formatHex: _v,
  formatHex8: Q_,
  formatHsl: eE,
  formatRgb: Ev,
  toString: Ev
});
function _v() {
  return this.rgb().formatHex();
}
function Q_() {
  return this.rgb().formatHex8();
}
function eE() {
  return hx(this).formatHsl();
}
function Ev() {
  return this.rgb().formatRgb();
}
function Ki(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = q_.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Av(t) : r === 3 ? new _t(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? $o(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? $o(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = U_.exec(e)) ? new _t(t[1], t[2], t[3], 1) : (t = Y_.exec(e)) ? new _t(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = G_.exec(e)) ? $o(t[1], t[2], t[3], t[4]) : (t = X_.exec(e)) ? $o(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Z_.exec(e)) ? Mv(t[1], t[2] / 100, t[3] / 100, 1) : (t = J_.exec(e)) ? Mv(t[1], t[2] / 100, t[3] / 100, t[4]) : kv.hasOwnProperty(e) ? Av(kv[e]) : e === "transparent" ? new _t(NaN, NaN, NaN, 0) : null;
}
function Av(e) {
  return new _t(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function $o(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new _t(e, t, r, n);
}
function tE(e) {
  return e instanceof so || (e = Ki(e)), e ? (e = e.rgb(), new _t(e.r, e.g, e.b, e.opacity)) : new _t();
}
function nu(e, t, r, n) {
  return arguments.length === 1 ? tE(e) : new _t(e, t, r, n ?? 1);
}
function _t(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
od(_t, nu, px(so, {
  brighter(e) {
    return e = e == null ? Pa : Math.pow(Pa, e), new _t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new _t(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new _t(fn(this.r), fn(this.g), fn(this.b), Ca(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Tv,
  // Deprecated! Use color.formatHex.
  formatHex: Tv,
  formatHex8: rE,
  formatRgb: Iv,
  toString: Iv
}));
function Tv() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}`;
}
function rE() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}${an((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Iv() {
  const e = Ca(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fn(this.r)}, ${fn(this.g)}, ${fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ca(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function an(e) {
  return e = fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Mv(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Zt(e, t, r, n);
}
function hx(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if (e instanceof so || (e = Ki(e)), !e) return new Zt();
  if (e instanceof Zt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), a = NaN, l = o - i, c = (o + i) / 2;
  return l ? (t === o ? a = (r - n) / l + (r < n) * 6 : r === o ? a = (n - t) / l + 2 : a = (t - r) / l + 4, l /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : l = c > 0 && c < 1 ? 0 : a, new Zt(a, l, c, e.opacity);
}
function nE(e, t, r, n) {
  return arguments.length === 1 ? hx(e) : new Zt(e, t, r, n ?? 1);
}
function Zt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
od(Zt, nE, px(so, {
  brighter(e) {
    return e = e == null ? Pa : Math.pow(Pa, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new _t(
      nc(e >= 240 ? e - 240 : e + 120, i, n),
      nc(e, i, n),
      nc(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Zt(Dv(this.h), zo(this.s), zo(this.l), Ca(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ca(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Dv(this.h)}, ${zo(this.s) * 100}%, ${zo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Dv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function zo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function nc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ad = (e) => () => e;
function iE(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function oE(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function aE(e) {
  return (e = +e) == 1 ? vx : function(t, r) {
    return r - t ? oE(t, r, e) : ad(isNaN(t) ? r : t);
  };
}
function vx(e, t) {
  var r = t - e;
  return r ? iE(e, r) : ad(isNaN(e) ? t : e);
}
const Rv = (function e(t) {
  var r = aE(t);
  function n(i, o) {
    var a = r((i = nu(i)).r, (o = nu(o)).r), l = r(i.g, o.g), c = r(i.b, o.b), s = vx(i.opacity, o.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = c(u), i.opacity = s(u), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function lE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(o) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - o) + t[i] * o;
    return n;
  };
}
function sE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function cE(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), o = new Array(r), a;
  for (a = 0; a < n; ++a) i[a] = oi(e[a], t[a]);
  for (; a < r; ++a) o[a] = t[a];
  return function(l) {
    for (a = 0; a < n; ++a) o[a] = i[a](l);
    return o;
  };
}
function uE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ka(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function dE(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = oi(e[i], t[i]) : n[i] = t[i];
  return function(o) {
    for (i in r) n[i] = r[i](o);
    return n;
  };
}
var iu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ic = new RegExp(iu.source, "g");
function fE(e) {
  return function() {
    return e;
  };
}
function pE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function hE(e, t) {
  var r = iu.lastIndex = ic.lastIndex = 0, n, i, o, a = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (n = iu.exec(e)) && (i = ic.exec(t)); )
    (o = i.index) > r && (o = t.slice(r, o), l[a] ? l[a] += o : l[++a] = o), (n = n[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, c.push({ i: a, x: ka(n, i) })), r = ic.lastIndex;
  return r < t.length && (o = t.slice(r), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? c[0] ? pE(c[0].x) : fE(t) : (t = c.length, function(s) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(s);
    return l.join("");
  });
}
function oi(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? ad(t) : (r === "number" ? ka : r === "string" ? (n = Ki(t)) ? (t = n, Rv) : hE : t instanceof Ki ? Rv : t instanceof Date ? uE : sE(t) ? lE : Array.isArray(t) ? cE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? dE : ka)(e, t);
}
function ld(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function vE(e, t) {
  t === void 0 && (t = e, e = oi);
  for (var r = 0, n = t.length - 1, i = t[0], o = new Array(n < 0 ? 0 : n); r < n; ) o[r] = e(i, i = t[++r]);
  return function(a) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return o[l](a - l);
  };
}
function gE(e) {
  return function() {
    return e;
  };
}
function _a(e) {
  return +e;
}
var Nv = [0, 1];
function bt(e) {
  return e;
}
function ou(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : gE(isNaN(t) ? NaN : 0.5);
}
function yE(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function mE(e, t, r) {
  var n = e[0], i = e[1], o = t[0], a = t[1];
  return i < n ? (n = ou(i, n), o = r(a, o)) : (n = ou(n, i), o = r(o, a)), function(l) {
    return o(n(l));
  };
}
function xE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), o = new Array(n), a = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < n; )
    i[a] = ou(e[a], e[a + 1]), o[a] = r(t[a], t[a + 1]);
  return function(l) {
    var c = lo(e, l, 1, n) - 1;
    return o[c](i[c](l));
  };
}
function co(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function kl() {
  var e = Nv, t = Nv, r = oi, n, i, o, a = bt, l, c, s;
  function u() {
    var p = Math.min(e.length, t.length);
    return a !== bt && (a = yE(e[0], e[p - 1])), l = p > 2 ? xE : mE, c = s = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? o : (c || (c = l(e.map(n), t, r)))(n(a(p)));
  }
  return f.invert = function(p) {
    return a(i((s || (s = l(t, e.map(n), ka)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, _a), u()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = ld, u();
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
function sd() {
  return kl()(bt, bt);
}
function bE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ea(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Gn(e) {
  return e = Ea(Math.abs(e)), e ? e[1] : NaN;
}
function wE(e, t) {
  return function(r, n) {
    for (var i = r.length, o = [], a = 0, l = e[0], c = 0; i > 0 && l > 0 && (c + l + 1 > n && (l = Math.max(1, n - c)), o.push(r.substring(i -= l, i + l)), !((c += l + 1) > n)); )
      l = e[a = (a + 1) % e.length];
    return o.reverse().join(t);
  };
}
function jE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var SE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Hi(e) {
  if (!(t = SE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new cd({
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
Hi.prototype = cd.prototype;
function cd(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
cd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function OE(e) {
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
var Aa;
function PE(e, t) {
  var r = Ea(e, t);
  if (!r) return Aa = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], o = i - (Aa = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = n.length;
  return o === a ? n : o > a ? n + new Array(o - a + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + Ea(e, Math.max(0, t + o - 1))[0];
}
function $v(e, t) {
  var r = Ea(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const zv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: bE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => $v(e * 100, t),
  r: $v,
  s: PE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Lv(e) {
  return e;
}
var Bv = Array.prototype.map, Wv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function CE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Lv : wE(Bv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? Lv : jE(Bv.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f, p) {
    f = Hi(f);
    var h = f.fill, g = f.align, v = f.sign, y = f.symbol, m = f.zero, b = f.width, x = f.comma, w = f.precision, S = f.trim, O = f.type;
    O === "n" ? (x = !0, O = "g") : zv[O] || (w === void 0 && (w = 12), S = !0, O = "g"), (m || h === "0" && g === "=") && (m = !0, h = "0", g = "=");
    var C = (p && p.prefix !== void 0 ? p.prefix : "") + (y === "$" ? r : y === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : ""), T = (y === "$" ? n : /[%p]/.test(O) ? a : "") + (p && p.suffix !== void 0 ? p.suffix : ""), E = zv[O], _ = /[defgprs%]/.test(O);
    w = w === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function D(k) {
      var F = C, N = T, V, U, J;
      if (O === "c")
        N = E(k) + N, k = "";
      else {
        k = +k;
        var $ = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? c : E(Math.abs(k), w), S && (k = OE(k)), $ && +k == 0 && v !== "+" && ($ = !1), F = ($ ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + F, N = (O === "s" && !isNaN(k) && Aa !== void 0 ? Wv[8 + Aa / 3] : "") + N + ($ && v === "(" ? ")" : ""), _) {
          for (V = -1, U = k.length; ++V < U; )
            if (J = k.charCodeAt(V), 48 > J || J > 57) {
              N = (J === 46 ? i + k.slice(V + 1) : k.slice(V)) + N, k = k.slice(0, V);
              break;
            }
        }
      }
      x && !m && (k = t(k, 1 / 0));
      var re = F.length + k.length + N.length, te = re < b ? new Array(b - re + 1).join(h) : "";
      switch (x && m && (k = t(te + k, te.length ? b - N.length : 1 / 0), te = ""), g) {
        case "<":
          k = F + k + N + te;
          break;
        case "=":
          k = F + te + k + N;
          break;
        case "^":
          k = te.slice(0, re = te.length >> 1) + F + k + N + te.slice(re);
          break;
        default:
          k = te + F + k + N;
          break;
      }
      return o(k);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function u(f, p) {
    var h = Math.max(-8, Math.min(8, Math.floor(Gn(p) / 3))) * 3, g = Math.pow(10, -h), v = s((f = Hi(f), f.type = "f", f), { suffix: Wv[8 + h / 3] });
    return function(y) {
      return v(g * y);
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var Lo, ud, gx;
kE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function kE(e) {
  return Lo = CE(e), ud = Lo.format, gx = Lo.formatPrefix, Lo;
}
function _E(e) {
  return Math.max(0, -Gn(Math.abs(e)));
}
function EE(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Gn(t) / 3))) * 3 - Gn(Math.abs(e)));
}
function AE(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Gn(t) - Gn(e)) + 1;
}
function yx(e, t, r, n) {
  var i = tu(e, t, r), o;
  switch (n = Hi(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(o = EE(i, a)) && (n.precision = o), gx(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(o = AE(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = o - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(o = _E(i)) && (n.precision = o - (n.type === "%") * 2);
      break;
    }
  }
  return ud(n);
}
function Yr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Qc(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return yx(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, o = n.length - 1, a = n[i], l = n[o], c, s, u = 10;
    for (l < a && (s = a, a = l, l = s, s = i, i = o, o = s); u-- > 0; ) {
      if (s = eu(a, l, r), s === c)
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
function mx() {
  var e = sd();
  return e.copy = function() {
    return co(e, mx());
  }, Gt.apply(e, arguments), Yr(e);
}
function xx(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, _a), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return xx(e).unknown(t);
  }, e = arguments.length ? Array.from(e, _a) : [0, 1], Yr(r);
}
function bx(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], o = e[n], a;
  return o < i && (a = r, r = n, n = a, a = i, i = o, o = a), e[r] = t.floor(i), e[n] = t.ceil(o), e;
}
function Fv(e) {
  return Math.log(e);
}
function Vv(e) {
  return Math.exp(e);
}
function TE(e) {
  return -Math.log(-e);
}
function IE(e) {
  return -Math.exp(-e);
}
function ME(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function DE(e) {
  return e === 10 ? ME : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function RE(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Kv(e) {
  return (t, r) => -e(-t, r);
}
function dd(e) {
  const t = e(Fv, Vv), r = t.domain;
  let n = 10, i, o;
  function a() {
    return i = RE(n), o = DE(n), r()[0] < 0 ? (i = Kv(i), o = Kv(o), e(TE, IE)) : e(Fv, Vv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, a()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), a()) : r();
  }, t.ticks = (l) => {
    const c = r();
    let s = c[0], u = c[c.length - 1];
    const f = u < s;
    f && ([s, u] = [u, s]);
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
      m.length * 2 < y && (m = Qc(s, u, y));
    } else
      m = Qc(p, h, Math.min(h - p, y)).map(o);
    return f ? m.reverse() : m;
  }, t.tickFormat = (l, c) => {
    if (l == null && (l = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = Hi(c)).precision == null && (c.trim = !0), c = ud(c)), l === 1 / 0) return c;
    const s = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let f = u / o(Math.round(i(u)));
      return f * n < n - 0.5 && (f *= n), f <= s ? c(u) : "";
    };
  }, t.nice = () => r(bx(r(), {
    floor: (l) => o(Math.floor(i(l))),
    ceil: (l) => o(Math.ceil(i(l)))
  })), t;
}
function wx() {
  const e = dd(kl()).domain([1, 10]);
  return e.copy = () => co(e, wx()).base(e.base()), Gt.apply(e, arguments), e;
}
function Hv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function qv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function fd(e) {
  var t = 1, r = e(Hv(t), qv(t));
  return r.constant = function(n) {
    return arguments.length ? e(Hv(t = +n), qv(t)) : t;
  }, Yr(r);
}
function jx() {
  var e = fd(kl());
  return e.copy = function() {
    return co(e, jx()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function Uv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function NE(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function $E(e) {
  return e < 0 ? -e * e : e * e;
}
function pd(e) {
  var t = e(bt, bt), r = 1;
  function n() {
    return r === 1 ? e(bt, bt) : r === 0.5 ? e(NE, $E) : e(Uv(r), Uv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yr(t);
}
function hd() {
  var e = pd(kl());
  return e.copy = function() {
    return co(e, hd()).exponent(e.exponent());
  }, Gt.apply(e, arguments), e;
}
function zE() {
  return hd.apply(null, arguments).exponent(0.5);
}
function Yv(e) {
  return Math.sign(e) * e * e;
}
function LE(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Sx() {
  var e = sd(), t = [0, 1], r = !1, n;
  function i(o) {
    var a = LE(e(o));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return i.invert = function(o) {
    return e.invert(Yv(o));
  }, i.domain = function(o) {
    return arguments.length ? (e.domain(o), i) : e.domain();
  }, i.range = function(o) {
    return arguments.length ? (e.range((t = Array.from(o, _a)).map(Yv)), i) : t.slice();
  }, i.rangeRound = function(o) {
    return i.range(o).round(!0);
  }, i.round = function(o) {
    return arguments.length ? (r = !!o, i) : r;
  }, i.clamp = function(o) {
    return arguments.length ? (e.clamp(o), i) : e.clamp();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return Sx(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Gt.apply(i, arguments), Yr(i);
}
function Ox() {
  var e = [], t = [], r = [], n;
  function i() {
    var a = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++a < l; ) r[a - 1] = V_(e, a / l);
    return o;
  }
  function o(a) {
    return a == null || isNaN(a = +a) ? n : t[lo(r, a)];
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
    return Ox().domain(e).range(t).unknown(n);
  }, Gt.apply(o, arguments);
}
function Px() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], o;
  function a(c) {
    return c != null && c <= c ? i[lo(n, c, 0, r)] : o;
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
    return Px().domain([e, t]).range(i).unknown(o);
  }, Gt.apply(Yr(a), arguments);
}
function Cx() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(o) {
    return o != null && o <= o ? t[lo(e, o, 0, n)] : r;
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
    return Cx().domain(e).range(t).unknown(r);
  }, Gt.apply(i, arguments);
}
const oc = /* @__PURE__ */ new Date(), ac = /* @__PURE__ */ new Date();
function Je(e, t, r, n) {
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
  }, i.filter = (o) => Je((a) => {
    if (a >= a) for (; e(a), !o(a); ) a.setTime(a - 1);
  }, (a, l) => {
    if (a >= a)
      if (l < 0) for (; ++l <= 0; )
        for (; t(a, -1), !o(a); )
          ;
      else for (; --l >= 0; )
        for (; t(a, 1), !o(a); )
          ;
  }), r && (i.count = (o, a) => (oc.setTime(+o), ac.setTime(+a), e(oc), e(ac), Math.floor(r(oc, ac))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(n ? (a) => n(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const Ta = Je(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ta.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Je((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ta);
Ta.range;
const jr = 1e3, Ht = jr * 60, Sr = Ht * 60, _r = Sr * 24, vd = _r * 7, Gv = _r * 30, lc = _r * 365, ln = Je((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * jr);
}, (e, t) => (t - e) / jr, (e) => e.getUTCSeconds());
ln.range;
const gd = Je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jr);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getMinutes());
gd.range;
const yd = Je((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCMinutes());
yd.range;
const md = Je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jr - e.getMinutes() * Ht);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getHours());
md.range;
const xd = Je((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getUTCHours());
xd.range;
const uo = Je(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ht) / _r,
  (e) => e.getDate() - 1
);
uo.range;
const _l = Je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / _r, (e) => e.getUTCDate() - 1);
_l.range;
const kx = Je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / _r, (e) => Math.floor(e / _r));
kx.range;
function Cn(e) {
  return Je((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ht) / vd);
}
const El = Cn(0), Ia = Cn(1), BE = Cn(2), WE = Cn(3), Xn = Cn(4), FE = Cn(5), VE = Cn(6);
El.range;
Ia.range;
BE.range;
WE.range;
Xn.range;
FE.range;
VE.range;
function kn(e) {
  return Je((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / vd);
}
const Al = kn(0), Ma = kn(1), KE = kn(2), HE = kn(3), Zn = kn(4), qE = kn(5), UE = kn(6);
Al.range;
Ma.range;
KE.range;
HE.range;
Zn.range;
qE.range;
UE.range;
const bd = Je((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
bd.range;
const wd = Je((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
wd.range;
const Er = Je((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Er.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Je((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Er.range;
const Ar = Je((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ar.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Je((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ar.range;
function _x(e, t, r, n, i, o) {
  const a = [
    [ln, 1, jr],
    [ln, 5, 5 * jr],
    [ln, 15, 15 * jr],
    [ln, 30, 30 * jr],
    [o, 1, Ht],
    [o, 5, 5 * Ht],
    [o, 15, 15 * Ht],
    [o, 30, 30 * Ht],
    [i, 1, Sr],
    [i, 3, 3 * Sr],
    [i, 6, 6 * Sr],
    [i, 12, 12 * Sr],
    [n, 1, _r],
    [n, 2, 2 * _r],
    [r, 1, vd],
    [t, 1, Gv],
    [t, 3, 3 * Gv],
    [e, 1, lc]
  ];
  function l(s, u, f) {
    const p = u < s;
    p && ([s, u] = [u, s]);
    const h = f && typeof f.range == "function" ? f : c(s, u, f), g = h ? h.range(s, +u + 1) : [];
    return p ? g.reverse() : g;
  }
  function c(s, u, f) {
    const p = Math.abs(u - s) / f, h = rd(([, , y]) => y).right(a, p);
    if (h === a.length) return e.every(tu(s / lc, u / lc, f));
    if (h === 0) return Ta.every(Math.max(tu(s, u, f), 1));
    const [g, v] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return g.every(v);
  }
  return [l, c];
}
const [YE, GE] = _x(Ar, wd, Al, kx, xd, yd), [XE, ZE] = _x(Er, bd, El, uo, md, gd);
function sc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function cc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function bi(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function JE(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, o = e.days, a = e.shortDays, l = e.months, c = e.shortMonths, s = wi(i), u = ji(i), f = wi(o), p = ji(o), h = wi(a), g = ji(a), v = wi(l), y = ji(l), m = wi(c), b = ji(c), x = {
    a: J,
    A: $,
    b: re,
    B: te,
    c: null,
    d: tg,
    e: tg,
    f: w4,
    g: T4,
    G: M4,
    H: m4,
    I: x4,
    j: b4,
    L: Ex,
    m: j4,
    M: S4,
    p: z,
    q: B,
    Q: ig,
    s: og,
    S: O4,
    u: P4,
    U: C4,
    V: k4,
    w: _4,
    W: E4,
    x: null,
    X: null,
    y: A4,
    Y: I4,
    Z: D4,
    "%": ng
  }, w = {
    a: L,
    A: H,
    b: le,
    B: me,
    c: null,
    d: rg,
    e: rg,
    f: z4,
    g: Y4,
    G: X4,
    H: R4,
    I: N4,
    j: $4,
    L: Tx,
    m: L4,
    M: B4,
    p: de,
    q: ue,
    Q: ig,
    s: og,
    S: W4,
    u: F4,
    U: V4,
    V: K4,
    w: H4,
    W: q4,
    x: null,
    X: null,
    y: U4,
    Y: G4,
    Z: Z4,
    "%": ng
  }, S = {
    a: _,
    A: D,
    b: k,
    B: F,
    c: N,
    d: Qv,
    e: Qv,
    f: h4,
    g: Jv,
    G: Zv,
    H: eg,
    I: eg,
    j: u4,
    L: p4,
    m: c4,
    M: d4,
    p: E,
    q: s4,
    Q: g4,
    s: y4,
    S: f4,
    u: n4,
    U: i4,
    V: o4,
    w: r4,
    W: a4,
    x: V,
    X: U,
    y: Jv,
    Y: Zv,
    Z: l4,
    "%": v4
  };
  x.x = O(r, x), x.X = O(n, x), x.c = O(t, x), w.x = O(r, w), w.X = O(n, w), w.c = O(t, w);
  function O(Z, X) {
    return function(ae) {
      var K = [], Me = -1, xe = 0, M = Z.length, Y, q, he;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++Me < M; )
        Z.charCodeAt(Me) === 37 && (K.push(Z.slice(xe, Me)), (q = Xv[Y = Z.charAt(++Me)]) != null ? Y = Z.charAt(++Me) : q = Y === "e" ? " " : "0", (he = X[Y]) && (Y = he(ae, q)), K.push(Y), xe = Me + 1);
      return K.push(Z.slice(xe, Me)), K.join("");
    };
  }
  function C(Z, X) {
    return function(ae) {
      var K = bi(1900, void 0, 1), Me = T(K, Z, ae += "", 0), xe, M;
      if (Me != ae.length) return null;
      if ("Q" in K) return new Date(K.Q);
      if ("s" in K) return new Date(K.s * 1e3 + ("L" in K ? K.L : 0));
      if (X && !("Z" in K) && (K.Z = 0), "p" in K && (K.H = K.H % 12 + K.p * 12), K.m === void 0 && (K.m = "q" in K ? K.q : 0), "V" in K) {
        if (K.V < 1 || K.V > 53) return null;
        "w" in K || (K.w = 1), "Z" in K ? (xe = cc(bi(K.y, 0, 1)), M = xe.getUTCDay(), xe = M > 4 || M === 0 ? Ma.ceil(xe) : Ma(xe), xe = _l.offset(xe, (K.V - 1) * 7), K.y = xe.getUTCFullYear(), K.m = xe.getUTCMonth(), K.d = xe.getUTCDate() + (K.w + 6) % 7) : (xe = sc(bi(K.y, 0, 1)), M = xe.getDay(), xe = M > 4 || M === 0 ? Ia.ceil(xe) : Ia(xe), xe = uo.offset(xe, (K.V - 1) * 7), K.y = xe.getFullYear(), K.m = xe.getMonth(), K.d = xe.getDate() + (K.w + 6) % 7);
      } else ("W" in K || "U" in K) && ("w" in K || (K.w = "u" in K ? K.u % 7 : "W" in K ? 1 : 0), M = "Z" in K ? cc(bi(K.y, 0, 1)).getUTCDay() : sc(bi(K.y, 0, 1)).getDay(), K.m = 0, K.d = "W" in K ? (K.w + 6) % 7 + K.W * 7 - (M + 5) % 7 : K.w + K.U * 7 - (M + 6) % 7);
      return "Z" in K ? (K.H += K.Z / 100 | 0, K.M += K.Z % 100, cc(K)) : sc(K);
    };
  }
  function T(Z, X, ae, K) {
    for (var Me = 0, xe = X.length, M = ae.length, Y, q; Me < xe; ) {
      if (K >= M) return -1;
      if (Y = X.charCodeAt(Me++), Y === 37) {
        if (Y = X.charAt(Me++), q = S[Y in Xv ? X.charAt(Me++) : Y], !q || (K = q(Z, ae, K)) < 0) return -1;
      } else if (Y != ae.charCodeAt(K++))
        return -1;
    }
    return K;
  }
  function E(Z, X, ae) {
    var K = s.exec(X.slice(ae));
    return K ? (Z.p = u.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function _(Z, X, ae) {
    var K = h.exec(X.slice(ae));
    return K ? (Z.w = g.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function D(Z, X, ae) {
    var K = f.exec(X.slice(ae));
    return K ? (Z.w = p.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function k(Z, X, ae) {
    var K = m.exec(X.slice(ae));
    return K ? (Z.m = b.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function F(Z, X, ae) {
    var K = v.exec(X.slice(ae));
    return K ? (Z.m = y.get(K[0].toLowerCase()), ae + K[0].length) : -1;
  }
  function N(Z, X, ae) {
    return T(Z, t, X, ae);
  }
  function V(Z, X, ae) {
    return T(Z, r, X, ae);
  }
  function U(Z, X, ae) {
    return T(Z, n, X, ae);
  }
  function J(Z) {
    return a[Z.getDay()];
  }
  function $(Z) {
    return o[Z.getDay()];
  }
  function re(Z) {
    return c[Z.getMonth()];
  }
  function te(Z) {
    return l[Z.getMonth()];
  }
  function z(Z) {
    return i[+(Z.getHours() >= 12)];
  }
  function B(Z) {
    return 1 + ~~(Z.getMonth() / 3);
  }
  function L(Z) {
    return a[Z.getUTCDay()];
  }
  function H(Z) {
    return o[Z.getUTCDay()];
  }
  function le(Z) {
    return c[Z.getUTCMonth()];
  }
  function me(Z) {
    return l[Z.getUTCMonth()];
  }
  function de(Z) {
    return i[+(Z.getUTCHours() >= 12)];
  }
  function ue(Z) {
    return 1 + ~~(Z.getUTCMonth() / 3);
  }
  return {
    format: function(Z) {
      var X = O(Z += "", x);
      return X.toString = function() {
        return Z;
      }, X;
    },
    parse: function(Z) {
      var X = C(Z += "", !1);
      return X.toString = function() {
        return Z;
      }, X;
    },
    utcFormat: function(Z) {
      var X = O(Z += "", w);
      return X.toString = function() {
        return Z;
      }, X;
    },
    utcParse: function(Z) {
      var X = C(Z += "", !0);
      return X.toString = function() {
        return Z;
      }, X;
    }
  };
}
var Xv = { "-": "", _: " ", 0: "0" }, ot = /^\s*\d+/, QE = /^%/, e4 = /[\\^$*+?|[\]().{}]/g;
function we(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", o = i.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + i : i);
}
function t4(e) {
  return e.replace(e4, "\\$&");
}
function wi(e) {
  return new RegExp("^(?:" + e.map(t4).join("|") + ")", "i");
}
function ji(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function r4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function n4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function i4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function o4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function a4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Zv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Jv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function l4(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function s4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function c4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Qv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function u4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function eg(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function d4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function f4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function p4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function h4(e, t, r) {
  var n = ot.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function v4(e, t, r) {
  var n = QE.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function g4(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function y4(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function tg(e, t) {
  return we(e.getDate(), t, 2);
}
function m4(e, t) {
  return we(e.getHours(), t, 2);
}
function x4(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function b4(e, t) {
  return we(1 + uo.count(Er(e), e), t, 3);
}
function Ex(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function w4(e, t) {
  return Ex(e, t) + "000";
}
function j4(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function S4(e, t) {
  return we(e.getMinutes(), t, 2);
}
function O4(e, t) {
  return we(e.getSeconds(), t, 2);
}
function P4(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function C4(e, t) {
  return we(El.count(Er(e) - 1, e), t, 2);
}
function Ax(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Xn(e) : Xn.ceil(e);
}
function k4(e, t) {
  return e = Ax(e), we(Xn.count(Er(e), e) + (Er(e).getDay() === 4), t, 2);
}
function _4(e) {
  return e.getDay();
}
function E4(e, t) {
  return we(Ia.count(Er(e) - 1, e), t, 2);
}
function A4(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function T4(e, t) {
  return e = Ax(e), we(e.getFullYear() % 100, t, 2);
}
function I4(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function M4(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Xn(e) : Xn.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function D4(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function rg(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function R4(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function N4(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function $4(e, t) {
  return we(1 + _l.count(Ar(e), e), t, 3);
}
function Tx(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function z4(e, t) {
  return Tx(e, t) + "000";
}
function L4(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function B4(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function W4(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function F4(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function V4(e, t) {
  return we(Al.count(Ar(e) - 1, e), t, 2);
}
function Ix(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Zn(e) : Zn.ceil(e);
}
function K4(e, t) {
  return e = Ix(e), we(Zn.count(Ar(e), e) + (Ar(e).getUTCDay() === 4), t, 2);
}
function H4(e) {
  return e.getUTCDay();
}
function q4(e, t) {
  return we(Ma.count(Ar(e) - 1, e), t, 2);
}
function U4(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function Y4(e, t) {
  return e = Ix(e), we(e.getUTCFullYear() % 100, t, 2);
}
function G4(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function X4(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Zn(e) : Zn.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function Z4() {
  return "+0000";
}
function ng() {
  return "%";
}
function ig(e) {
  return +e;
}
function og(e) {
  return Math.floor(+e / 1e3);
}
var Dn, Mx, Dx;
J4({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function J4(e) {
  return Dn = JE(e), Mx = Dn.format, Dn.parse, Dx = Dn.utcFormat, Dn.utcParse, Dn;
}
function Q4(e) {
  return new Date(e);
}
function eA(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function jd(e, t, r, n, i, o, a, l, c, s) {
  var u = sd(), f = u.invert, p = u.domain, h = s(".%L"), g = s(":%S"), v = s("%I:%M"), y = s("%I %p"), m = s("%a %d"), b = s("%b %d"), x = s("%B"), w = s("%Y");
  function S(O) {
    return (c(O) < O ? h : l(O) < O ? g : a(O) < O ? v : o(O) < O ? y : n(O) < O ? i(O) < O ? m : b : r(O) < O ? x : w)(O);
  }
  return u.invert = function(O) {
    return new Date(f(O));
  }, u.domain = function(O) {
    return arguments.length ? p(Array.from(O, eA)) : p().map(Q4);
  }, u.ticks = function(O) {
    var C = p();
    return e(C[0], C[C.length - 1], O ?? 10);
  }, u.tickFormat = function(O, C) {
    return C == null ? S : s(C);
  }, u.nice = function(O) {
    var C = p();
    return (!O || typeof O.range != "function") && (O = t(C[0], C[C.length - 1], O ?? 10)), O ? p(bx(C, O)) : u;
  }, u.copy = function() {
    return co(u, jd(e, t, r, n, i, o, a, l, c, s));
  }, u;
}
function tA() {
  return Gt.apply(jd(XE, ZE, Er, bd, El, uo, md, gd, ln, Mx).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function rA() {
  return Gt.apply(jd(YE, GE, Ar, wd, Al, _l, xd, yd, ln, Dx).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Tl() {
  var e = 0, t = 1, r, n, i, o, a = bt, l = !1, c;
  function s(f) {
    return f == null || isNaN(f = +f) ? c : a(i === 0 ? 0.5 : (f = (o(f) - r) * i, l ? Math.max(0, Math.min(1, f)) : f));
  }
  s.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = o(e = +e), n = o(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(f) {
    return arguments.length ? (l = !!f, s) : l;
  }, s.interpolator = function(f) {
    return arguments.length ? (a = f, s) : a;
  };
  function u(f) {
    return function(p) {
      var h, g;
      return arguments.length ? ([h, g] = p, a = f(h, g), s) : [a(0), a(1)];
    };
  }
  return s.range = u(oi), s.rangeRound = u(ld), s.unknown = function(f) {
    return arguments.length ? (c = f, s) : c;
  }, function(f) {
    return o = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function Gr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Rx() {
  var e = Yr(Tl()(bt));
  return e.copy = function() {
    return Gr(e, Rx());
  }, Mr.apply(e, arguments);
}
function Nx() {
  var e = dd(Tl()).domain([1, 10]);
  return e.copy = function() {
    return Gr(e, Nx()).base(e.base());
  }, Mr.apply(e, arguments);
}
function $x() {
  var e = fd(Tl());
  return e.copy = function() {
    return Gr(e, $x()).constant(e.constant());
  }, Mr.apply(e, arguments);
}
function Sd() {
  var e = pd(Tl());
  return e.copy = function() {
    return Gr(e, Sd()).exponent(e.exponent());
  }, Mr.apply(e, arguments);
}
function nA() {
  return Sd.apply(null, arguments).exponent(0.5);
}
function zx() {
  var e = [], t = bt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((lo(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (i, o) => F_(e, o / n));
  }, r.copy = function() {
    return zx(t).domain(e);
  }, Mr.apply(r, arguments);
}
function Il() {
  var e = 0, t = 0.5, r = 1, n = 1, i, o, a, l, c, s = bt, u, f = !1, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +u(v)) - o) * (n * v < n * o ? l : c), s(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = u(e = +e), o = u(t = +t), a = u(r = +r), l = i === o ? 0 : 0.5 / (o - i), c = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (s = v, h) : s;
  };
  function g(v) {
    return function(y) {
      var m, b, x;
      return arguments.length ? ([m, b, x] = y, s = vE(v, [m, b, x]), h) : [s(0), s(0.5), s(1)];
    };
  }
  return h.range = g(oi), h.rangeRound = g(ld), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return u = v, i = v(e), o = v(t), a = v(r), l = i === o ? 0 : 0.5 / (o - i), c = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h;
  };
}
function Lx() {
  var e = Yr(Il()(bt));
  return e.copy = function() {
    return Gr(e, Lx());
  }, Mr.apply(e, arguments);
}
function Bx() {
  var e = dd(Il()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Gr(e, Bx()).base(e.base());
  }, Mr.apply(e, arguments);
}
function Wx() {
  var e = fd(Il());
  return e.copy = function() {
    return Gr(e, Wx()).constant(e.constant());
  }, Mr.apply(e, arguments);
}
function Od() {
  var e = pd(Il());
  return e.copy = function() {
    return Gr(e, Od()).exponent(e.exponent());
  }, Mr.apply(e, arguments);
}
function iA() {
  return Od.apply(null, arguments).exponent(0.5);
}
const Fx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: id,
  scaleDiverging: Lx,
  scaleDivergingLog: Bx,
  scaleDivergingPow: Od,
  scaleDivergingSqrt: iA,
  scaleDivergingSymlog: Wx,
  scaleIdentity: xx,
  scaleImplicit: ru,
  scaleLinear: mx,
  scaleLog: wx,
  scaleOrdinal: nd,
  scalePoint: H_,
  scalePow: hd,
  scaleQuantile: Ox,
  scaleQuantize: Px,
  scaleRadial: Sx,
  scaleSequential: Rx,
  scaleSequentialLog: Nx,
  scaleSequentialPow: Sd,
  scaleSequentialQuantile: zx,
  scaleSequentialSqrt: nA,
  scaleSequentialSymlog: $x,
  scaleSqrt: zE,
  scaleSymlog: jx,
  scaleThreshold: Cx,
  scaleTime: tA,
  scaleUtc: rA,
  tickFormat: yx
}, Symbol.toStringTag, { value: "Module" }));
function oA(e) {
  var t = Fx;
  if (e in t && typeof t[e] == "function")
    return t[e]();
  var r = "scale".concat(Xi(e));
  if (r in t && typeof t[r] == "function")
    return t[r]();
}
function ag(e, t, r) {
  if (typeof e == "function")
    return e.copy().domain(t).range(r);
  if (e != null) {
    var n = oA(e);
    if (n != null)
      return n.domain(t).range(r), n;
  }
}
function Pd(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? ag(e.scale, r, n) : ag(t, r, n);
}
function aA(e) {
  return "scale".concat(Xi(e));
}
function lA(e) {
  return aA(e) in Fx;
}
var Vx = (e, t, r) => {
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
function Kx(e, t) {
  if (e) {
    var r = t ?? e.domain(), n = r.map((o) => {
      var a;
      return (a = e(o)) !== null && a !== void 0 ? a : 0;
    }), i = e.range();
    if (!(r.length === 0 || i.length < 2))
      return (o) => {
        var a, l, c = sA(n, o);
        if (c <= 0)
          return r[0];
        if (c >= r.length)
          return r[r.length - 1];
        var s = (a = n[c - 1]) !== null && a !== void 0 ? a : 0, u = (l = n[c]) !== null && l !== void 0 ? l : 0;
        return Math.abs(o - s) <= Math.abs(o - u) ? r[c - 1] : r[c];
      };
  }
}
function cA(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : Kx(e, void 0);
}
function lg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lg(Object(r), !0).forEach(function(n) {
      uA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lg(Object(r)).forEach(function(n) {
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
var au = [0, "auto"], Ye = {
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
}, Hx = (e, t) => e.cartesianAxis.xAxis[t], vr = (e, t) => {
  var r = Hx(e, t);
  return r ?? Ye;
}, Ge = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: au,
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
  width: to
}, qx = (e, t) => e.cartesianAxis.yAxis[t], gr = (e, t) => {
  var r = qx(e, t);
  return r ?? Ge;
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
}, Cd = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? pA;
}, St = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    case "zAxis":
      return Cd(e, r);
    case "angleAxis":
      return Ju(e, r);
    case "radiusAxis":
      return Qu(e, r);
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
}, fo = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    case "angleAxis":
      return Ju(e, r);
    case "radiusAxis":
      return Qu(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Ux = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Yx(e, t) {
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
var Ml = (e) => e.graphicalItems.cartesianItems, vA = R([nt, jl], Yx), Gx = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), ai = R([Ml, St, vA], Gx, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), Xx = R([ai], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Ol)), Zx = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), gA = R([ai], Zx), Jx = (e) => e.map((t) => t.data).filter(Boolean).flat(1), yA = R([ai], (e) => e.some((t) => !t.data)), Qx = R([ai], Jx, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), eb = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, kd = R([Qx, yl], eb), mA = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: He(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: He(i, n)
}))) : e.map((n) => ({
  value: n
})), tb = (e, t, r, n, i, o) => {
  var {
    chartData: a = [],
    dataStartIndex: l,
    dataEndIndex: c
  } = n, s = mA(e, t, r);
  if (i && t?.dataKey != null && o.length > 0) {
    var u = a.slice(l, c + 1), f = u.map((p) => ({
      value: He(p, t.dataKey)
    })).filter((p) => p.value != null);
    return [...f, ...s];
  }
  return s;
}, po = R([kd, St, ai, yl, yA, Qx], tb);
function Kn(e) {
  if (Ut(e) || e instanceof Date) {
    var t = Number(e);
    if (pe(t))
      return t;
  }
}
function sg(e) {
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
var bA = R([po], (e) => e?.map((t) => t.value).sort(xA));
function rb(e, t) {
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
  if (typeof t == "number" && !Jt(t))
    n = t;
  else if (Array.isArray(t)) {
    var i = pr(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : pr(r.flatMap((o) => {
    var a = He(e, o.dataKey), l, c;
    if (Array.isArray(a) ? [l, c] = a : l = c = a, !(!pe(l) || !pe(c)))
      return [n - l, n + c];
  }));
}
var Qe = (e) => {
  var t = it(e), r = ii(e);
  return fo(e, t, r);
}, Jn = R([Qe], (e) => e?.dataKey), jA = R([Xx, yl, Qe], sx), nb = (e, t, r, n) => {
  var i = {}, o = t.reduce((a, l) => {
    if (l.stackId == null)
      return a;
    var c = a[l.stackId];
    return c == null && (c = []), c.push(l), a[l.stackId] = c, a;
  }, i);
  return Object.fromEntries(Object.entries(o).map((a) => {
    var [l, c] = a, s = n ? [...c].reverse() : c, u = s.map(Sl);
    return [l, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: mP(e, u, r),
      graphicalItems: s
    }];
  }));
}, Ra = R([jA, Xx, ml, tx], nb), ib = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: o
  } = t;
  if (n == null && r !== "zAxis") {
    var a = jP(e, i, o);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, SA = R([St], (e) => e.allowDataOverflow), _d = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return au;
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
  return (t = e?.domain) !== null && t !== void 0 ? t : au;
}, ob = R([St], _d), ab = R([ob, SA], Fm), OA = R([Ra, nr, nt, ab], ib, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), Ed = (e) => e.errorBars, PA = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => rb(r, n)), Na = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var o = i.flat(), a = Math.min(...o), l = Math.max(...o);
    return [a, l];
  }
}, lb = function(t, r, n, i, o) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], l, c;
  if (n.length > 0 && n.forEach((s) => {
    var u, f = s.data != null ? [...s.data] : a, p = (u = i[s.id]) === null || u === void 0 ? void 0 : u.filter((h) => rb(o, h));
    f.forEach((h) => {
      var g, v = He(h, (g = r.dataKey) !== null && g !== void 0 ? g : s.dataKey), y = wA(h, v, p);
      if (y.length >= 2) {
        var m = Math.min(...y), b = Math.max(...y);
        (l == null || m < l) && (l = m), (c == null || b > c) && (c = b);
      }
      var x = sg(v);
      x != null && (l = l == null ? x[0] : Math.min(l, x[0]), c = c == null ? x[1] : Math.max(c, x[1]));
    });
  }), r?.dataKey != null && n.length === 0 && t.forEach((s) => {
    var u = sg(He(s, r.dataKey));
    u != null && (l = l == null ? u[0] : Math.min(l, u[0]), c = c == null ? u[1] : Math.max(c, u[1]));
  }), pe(l) && pe(c))
    return [l, c];
}, CA = R([kd, St, gA, Ed, nt, p_], lb, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
});
function kA(e) {
  var {
    value: t
  } = e;
  if (Ut(t) || t instanceof Date)
    return t;
}
var _A = (e, t, r) => {
  var n = e.map(kA).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && py(n)) ? Bm(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, sb = (e) => e.referenceElements.dots, li = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), EA = R([sb, nt, jl], li), cb = (e) => e.referenceElements.areas, AA = R([cb, nt, jl], li), ub = (e) => e.referenceElements.lines, TA = R([ub, nt, jl], li), db = (e, t) => {
  if (e != null) {
    var r = pr(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, IA = R(EA, nt, db), fb = (e, t) => {
  if (e != null) {
    var r = pr(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, MA = R([AA, nt], fb);
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
var pb = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? DA(n) : RA(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, NA = R([TA, nt], pb), $A = R(IA, NA, MA, (e, t, r) => Na(e, r, t)), hb = (e, t, r, n, i, o, a, l) => {
  if (r != null)
    return r;
  var c = a === "vertical" && l === "xAxis" || a === "horizontal" && l === "yAxis", s = c ? Na(n, o, i) : Na(o, i);
  return v_(t, s, e.allowDataOverflow);
}, zA = R([St, ob, ab, OA, CA, $A, Oe, nt], hb, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), LA = [0, 1], vb = (e, t, r, n, i, o, a) => {
  if (!((e == null || r == null || r.length === 0) && a === void 0)) {
    var {
      dataKey: l,
      type: c
    } = e, s = hr(t, o);
    if (s && l == null) {
      var u;
      return Bm(0, (u = r?.length) !== null && u !== void 0 ? u : 0);
    }
    return c === "category" ? _A(n, e, s) : i === "expand" && !s ? LA : a;
  }
}, Ad = R([St, Oe, kd, po, ml, nt, zA], vb), si = R([St, Ux, Gu], Vx), gb = (e, t, r) => {
  var {
    niceTicks: n
  } = t;
  if (n !== "none") {
    var i = _d(t), o = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && cr(e)) {
      if (o)
        return mv(e, t.tickCount, t.allowDecimals, n);
      if (t.type === "number")
        return xv(e, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (o && cr(e))
        return mv(e, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && cr(e))
        return xv(e, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Td = R([Ad, fo, si], gb), yb = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && cr(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, o, a = t[0], l = (i = r[0]) !== null && i !== void 0 ? i : 0, c = t[1], s = (o = r[r.length - 1]) !== null && o !== void 0 ? o : 0;
    return [Math.min(a, l), Math.max(c, s)];
  }
  return t;
}, BA = R([St, Ad, Td, nt], yb), WA = R(po, St, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(pr(e.map((f) => f.value))).sort((f, p) => f - p), i = n[0], o = n[n.length - 1];
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
}), mb = R(WA, Oe, ex, rt, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!pe(e))
    return 0;
  var o = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * o / 2;
  if (i === "no-gap") {
    var a = Qt(r, e * o), l = e * o / 2;
    return l - a - (l - a) / o * a;
  }
  return 0;
}), FA = (e, t, r) => {
  var n = vr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : mb(e, "xAxis", t, r, n.padding);
}, VA = (e, t, r) => {
  var n = gr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : mb(e, "yAxis", t, r, n.padding);
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
}), qA = R([rt, KA, dl, ul, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: o
  } = n;
  return i ? [o.left, r.width - o.right] : [e.left + t.left, e.left + e.width - t.right];
}), UA = R([rt, Oe, HA, dl, ul, (e, t, r) => r], (e, t, r, n, i, o) => {
  var {
    padding: a
  } = i;
  return o ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), ho = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return qA(e, r, n);
    case "yAxis":
      return UA(e, r, n);
    case "zAxis":
      return (i = Cd(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return ox(e);
    case "radiusAxis":
      return ax(e, r);
    default:
      return;
  }
}, xb = R([St, ho], xl), YA = R([si, BA], A_), Id = R([St, si, YA, xb], Pd), bb = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: o
    } = r, a = hr(e, n);
    if (a && (i === "number" || o !== "auto"))
      return t.map((l) => l.value);
  }
}, Md = R([Oe, po, fo, nt], bb), Qn = R([Id], td);
R([Id], cA);
R([Id, bA], Kx);
R([ai, Ed, nt], PA);
function wb(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Dl = (e, t) => t, Rl = (e, t, r) => r, GA = R(sl, Dl, Rl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(wb)), XA = R(cl, Dl, Rl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(wb)), jb = (e, t) => ({
  width: e.width,
  height: t.height
}), ZA = (e, t) => {
  var r = typeof t.width == "number" ? t.width : to;
  return {
    width: r,
    height: e.height
  };
}, Sb = R(rt, vr, jb), JA = (e, t, r) => {
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
}, e3 = R(Ir, rt, GA, Dl, Rl, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var c = jb(t, l);
    a == null && (a = JA(t, n, e));
    var s = n === "top" && !i || n === "bottom" && i;
    o[l.id] = a - Number(s) * c.height, a += (s ? -1 : 1) * c.height;
  }), o;
}), t3 = R(Tr, rt, XA, Dl, Rl, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var c = ZA(t, l);
    a == null && (a = QA(t, n, e));
    var s = n === "left" && !i || n === "right" && i;
    o[l.id] = a - Number(s) * c.width, a += (s ? -1 : 1) * c.width;
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
}), Ob = R(rt, gr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : to;
  return {
    width: r,
    height: e.height
  };
}), cg = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return Sb(e, r).width;
    case "yAxis":
      return Ob(e, r).height;
    default:
      return;
  }
}, Pb = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: o,
      dataKey: a
    } = r, l = hr(e, n), c = t.map((u) => u.value), s = c.filter((u) => u != null);
    if (a && l && o === "category" && i && py(s))
      return c;
  }
}, Dd = R([Oe, po, St, nt], Pb), ug = R([Oe, hA, si, Qn, Dd, Md, ho, Td, nt], (e, t, r, n, i, o, a, l, c) => {
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
}), a3 = (e, t, r, n, i, o, a, l, c) => {
  if (!(t == null || n == null)) {
    var s = hr(e, c), {
      type: u,
      ticks: f,
      tickCount: p
    } = t, h = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), g = u === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    g = c === "angleAxis" && o != null && o.length >= 2 ? Ct(o[0] - o[1]) * 2 * g : g;
    var v = f || i;
    return v ? v.map((y, m) => {
      var b = a ? a.indexOf(y) : y, x = n.map(b);
      return pe(x) ? {
        index: m,
        coordinate: x + g,
        value: y,
        offset: g
      } : null;
    }).filter(kt) : s && l ? l.map((y, m) => {
      var b = n.map(y);
      return pe(b) ? {
        coordinate: b + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(kt) : n.ticks ? n.ticks(p).map((y, m) => {
      var b = n.map(y);
      return pe(b) ? {
        coordinate: b + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(kt) : n.domain().map((y, m) => {
      var b = n.map(y);
      return pe(b) ? {
        coordinate: b + g,
        // @ts-expect-error can't use Date as index
        value: a ? a[y] : y,
        index: m,
        offset: g
      } : null;
    }).filter(kt);
  }
}, Cb = R([Oe, fo, si, Qn, Td, ho, Dd, Md, nt], a3), l3 = (e, t, r, n, i, o, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var l = hr(e, a), {
      tickCount: c
    } = t, s = 0;
    return s = a === "angleAxis" && n?.length >= 2 ? Ct(n[0] - n[1]) * 2 * s : s, l && o ? o.map((u, f) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + s,
        value: u,
        index: f,
        offset: s
      } : null;
    }).filter(kt) : r.ticks ? r.ticks(c).map((u, f) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + s,
        value: u,
        index: f,
        offset: s
      } : null;
    }).filter(kt) : r.domain().map((u, f) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + s,
        // @ts-expect-error can't use unknown as index
        value: i ? i[u] : u,
        index: f,
        offset: s
      } : null;
    }).filter(kt);
  }
}, Hr = R([Oe, fo, Qn, ho, Dd, Md, nt], l3), qr = R(St, Qn, (e, t) => {
  if (!(e == null || t == null))
    return Da(Da({}, e), {}, {
      scale: t
    });
}), s3 = R([St, si, Ad, xb], Pd), c3 = R([s3], td);
R((e, t, r) => Cd(e, r), c3, (e, t) => {
  if (!(e == null || t == null))
    return Da(Da({}, e), {}, {
      scale: t
    });
});
var u3 = R([Oe, sl, cl], (e, t, r) => {
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
var kb = (e) => e.options.defaultTooltipEventType, _b = (e) => e.options.validateTooltipEventTypes;
function Eb(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function vo(e, t) {
  var r = kb(e), n = _b(e);
  return Eb(t, r, n);
}
function f3(e) {
  return oe((t) => vo(t, e));
}
var Ab = (e, t) => {
  var r, n = Number(t);
  if (!(Jt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, p3 = (e) => e.tooltip.settings, Wr = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, h3 = {
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
}, Tb = gt({
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
        } = t.payload, i = Kt(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: De()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Kt(e).tooltipItemPayloads.indexOf(t.payload);
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
  setActiveMouseOverItemIndex: Ib,
  mouseLeaveItem: x3,
  mouseLeaveChart: Mb,
  setActiveClickItemIndex: b3,
  setMouseOverAxisIndex: Db,
  setMouseClickAxisIndex: w3,
  setSyncInteraction: ki,
  setKeyboardInteraction: $a
} = Tb.actions, j3 = Tb.reducer;
function dg(e, t) {
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
    t % 2 ? dg(Object(r), !0).forEach(function(n) {
      S3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dg(Object(r)).forEach(function(n) {
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
var Rb = (e, t, r, n) => {
  if (t == null)
    return Wr;
  var i = C3(e, t, r);
  if (i == null)
    return Wr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var o = e.settings.active === !0;
  if (k3(i)) {
    if (o)
      return Bo(Bo({}, i), {}, {
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
  return Bo(Bo({}, Wr), {}, {
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
  var n = He(e, t);
  return n == null || !cr(r) ? !0 : E3(n, r);
}
var Ai = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var o = Number(i);
  if (!pe(o))
    return i;
  var a = 0, l = 1 / 0;
  t.length > 0 && (l = t.length - 1);
  var c = Math.max(a, Math.min(o, l)), s = t[c];
  return s == null || A3(s, r, n) ? String(c) : null;
}, Nb = (e, t, r, n, i, o, a) => {
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
}, $b = (e, t, r, n) => {
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
}, zb = (e) => e.options.tooltipPayloadSearcher, ci = (e) => e.tooltip;
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
      T3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fg(Object(r)).forEach(function(n) {
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
function hg(e) {
  if (typeof e == "string")
    return e;
}
function $3(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? D3(e.name) : void 0, r = "unit" in e ? R3(e.unit) : void 0, n = "dataKey" in e ? N3(e.dataKey) : void 0, i = "payload" in e ? e.payload : void 0, o = "color" in e ? hg(e.color) : void 0, a = "fill" in e ? hg(e.fill) : void 0;
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
var Lb = (e, t, r, n, i, o, a) => {
  if (!(t == null || o == null)) {
    var {
      chartData: l,
      computedData: c,
      dataStartIndex: s,
      dataEndIndex: u
    } = r, f = [];
    return e.reduce((p, h) => {
      var g, {
        dataDefinedOnItem: v,
        settings: y
      } = h, m = z3(v, l), b = Array.isArray(m) ? dm(m, s, u) : m, x = (g = y?.dataKey) !== null && g !== void 0 ? g : n, w = y?.nameKey, S;
      if (n && Array.isArray(b) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(b[0]) && /*
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
      a === "axis" ? S = hy(b, n, i) : S = o(b, t, c, w), Array.isArray(S))
        S.forEach((C) => {
          var T, E, _ = $3(C), D = _?.name, k = _?.dataKey, F = _?.payload, N = pg(pg({}, y), {}, {
            name: D,
            unit: _?.unit,
            // Preserve item-level color/fill from graphical items.
            color: (T = _?.color) !== null && T !== void 0 ? T : y?.color,
            fill: (E = _?.fill) !== null && E !== void 0 ? E : y?.fill
          });
          p.push(lh({
            tooltipEntrySettings: N,
            dataKey: k,
            payload: F,
            value: He(F, k),
            name: D == null ? void 0 : String(D)
          }));
        });
      else {
        var O;
        p.push(lh({
          tooltipEntrySettings: y,
          dataKey: x,
          payload: S,
          // getValueByDataKey does not validate the output type
          value: He(S, x),
          // getValueByDataKey does not validate the output type
          name: (O = He(S, w)) !== null && O !== void 0 ? O : y?.name
        }));
      }
      return p;
    }, f);
  }
}, Rd = R([Qe, Ux, Gu], Vx), L3 = R([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), B3 = R([it, ii], Yx), _n = R([L3, Qe, B3], Gx, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), W3 = R([_n], (e) => e.filter(Ol)), Bb = R([_n], Jx, {
  memoizeOptions: {
    resultEqualityCheck: Cl
  }
}), F3 = R([_n], (e) => e.some((t) => !t.data)), bn = R([Bb, nr], eb), V3 = R([W3, nr, Qe], sx), Nd = R([bn, Qe, _n, nr, F3, Bb], tb), Wb = R([Qe], _d), K3 = R([Qe], (e) => e.allowDataOverflow), Fb = R([Wb, K3], Fm), H3 = R([_n], (e) => e.filter(Ol)), q3 = R([V3, H3, ml, tx], nb), U3 = R([q3, nr, it, Fb], ib), Y3 = R([_n], Zx), G3 = R([bn, Qe, Y3, Ed, it, h_], lb, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), X3 = R([sb, it, ii], li), Z3 = R([X3, it], db), J3 = R([cb, it, ii], li), Q3 = R([J3, it], fb), eT = R([ub, it, ii], li), tT = R([eT, it], pb), rT = R([Z3, tT, Q3], Na), nT = R([Qe, Wb, Fb, U3, G3, rT, Oe, it], hb), ei = R([Qe, Oe, bn, Nd, ml, it, nT], vb), iT = R([ei, Qe, Rd], gb), oT = R([Qe, ei, iT, it], yb), Vb = (e) => {
  var t = it(e), r = ii(e), n = !1;
  return ho(e, t, r, n);
}, Kb = R([Qe, Vb], xl), aT = R([Qe, Rd, oT, Kb], Pd), Hb = R([aT], td), lT = R([Oe, Nd, Qe, it], Pb), sT = R([Oe, Nd, Qe, it], bb), cT = (e, t, r, n, i, o, a, l) => {
  if (t) {
    var {
      type: c
    } = t, s = hr(e, l);
    if (n) {
      var u = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = c === "category" && n.bandwidth ? n.bandwidth() / u : 0;
      return f = l === "angleAxis" && i != null && i?.length >= 2 ? Ct(i[0] - i[1]) * 2 * f : f, s && a ? a.map((p, h) => {
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
}, Dr = R([Oe, Qe, Rd, Hb, Vb, lT, sT, it], cT), $d = R([kb, _b, p3], (e, t, r) => Eb(r.shared, e, t)), qb = (e) => e.tooltip.settings.trigger, zd = (e) => e.tooltip.settings.defaultIndex, go = R([ci, $d, qb, zd], Rb), wn = R([go, bn, Jn, ei], Ai), Ub = R([Dr, wn], Ab), Yb = R([go], (e) => {
  if (e)
    return e.dataKey;
}), uT = R([go], (e) => {
  if (e)
    return e.graphicalItemId;
}), Gb = R([ci, $d, qb, zd], $b), dT = R([Tr, Ir, Oe, rt, Dr, zd, Gb], Nb), fT = R([go, dT], (e, t) => e != null && e.coordinate ? e.coordinate : t), pT = R([go], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), hT = R([Gb, wn, nr, Jn, Ub, zb, $d], Lb), vT = R([hT], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
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
      gT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
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
var xT = () => oe(Qe), bT = () => {
  var e = xT(), t = oe(Dr), r = oe(Hb);
  return Un(!e || !r ? void 0 : gg(gg({}, e), {}, {
    scale: r
  }), t);
};
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
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yg(Object(r), !0).forEach(function(n) {
      wT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yg(Object(r)).forEach(function(n) {
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
  var i = t.find((s) => s && s.index === r);
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
      angle: c
    } = n;
    return Rn(Rn(Rn({}, n), st(n.cx, n.cy, l, c)), {}, {
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
function CT(e, t) {
  var {
    relativeX: r,
    relativeY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var Xb = (e, t, r, n, i) => {
  var o, a = (o = t?.length) !== null && o !== void 0 ? o : 0;
  if (a <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var l = 0; l < a; l++) {
      var c, s, u, f, p, h = l > 0 ? (c = r[l - 1]) === null || c === void 0 ? void 0 : c.coordinate : (s = r[a - 1]) === null || s === void 0 ? void 0 : s.coordinate, g = (u = r[l]) === null || u === void 0 ? void 0 : u.coordinate, v = l >= a - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (p = r[l + 1]) === null || p === void 0 ? void 0 : p.coordinate, y = void 0;
      if (!(h == null || g == null || v == null))
        if (Ct(g - h) !== Ct(v - g)) {
          var m = [];
          if (Ct(v - g) === Ct(i[1] - i[0])) {
            y = v;
            var b = g + i[1] - i[0];
            m[0] = Math.min(b, (b + h) / 2), m[1] = Math.max(b, (b + h) / 2);
          } else {
            y = h;
            var x = v + i[1] - i[0];
            m[0] = Math.min(g, (x + g) / 2), m[1] = Math.max(g, (x + g) / 2);
          }
          var w = [Math.min(g, (y + g) / 2), Math.max(g, (y + g) / 2)];
          if (e > w[0] && e <= w[1] || e >= m[0] && e <= m[1]) {
            var S;
            return (S = r[l]) === null || S === void 0 ? void 0 : S.index;
          }
        } else {
          var O = Math.min(h, v), C = Math.max(h, v);
          if (e > (O + g) / 2 && e <= (C + g) / 2) {
            var T;
            return (T = r[l]) === null || T === void 0 ? void 0 : T.index;
          }
        }
    }
  else if (t)
    for (var E = 0; E < a; E++) {
      var _ = t[E];
      if (_ != null) {
        var D = t[E + 1], k = t[E - 1];
        if (E === 0 && D != null && e <= (_.coordinate + D.coordinate) / 2 || E === a - 1 && k != null && e > (_.coordinate + k.coordinate) / 2 || E > 0 && E < a - 1 && k != null && D != null && e > (_.coordinate + k.coordinate) / 2 && e <= (_.coordinate + D.coordinate) / 2)
          return _.index;
      }
    }
  return -1;
}, Zb = () => oe(Gu), Ld = (e, t) => t, Jb = (e, t, r) => r, Bd = (e, t, r, n) => n, kT = R(Dr, (e) => Ja(e, (t) => t.coordinate)), Wd = R([ci, Ld, Jb, Bd], Rb), Fd = R([Wd, bn, Jn, ei], Ai), _T = (e, t, r) => {
  if (t != null) {
    var n = ci(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Qb = R([ci, Ld, Jb, Bd], $b), za = R([Tr, Ir, Oe, rt, Dr, Bd, Qb], Nb), ET = R([Wd, za], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), e1 = R([Dr, Fd], Ab), AT = R([Qb, Fd, nr, Jn, e1, zb, Ld], Lb), TT = R([Wd, Fd], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), IT = (e, t, r, n, i, o, a) => {
  if (!(!e || !r || !n || !i) && CT(e, a)) {
    var l = SP(e, t), c = Xb(l, o, i, r, n), s = OT(t, i, c, e);
    return {
      activeIndex: String(c),
      activeCoordinate: s
    };
  }
}, MT = (e, t, r, n, i, o, a) => {
  if (!(!e || !n || !i || !o || !r)) {
    var l = n_(e, r);
    if (l) {
      var c = OP(l, t), s = Xb(c, a, o, n, i), u = PT(t, o, s, l);
      return {
        activeIndex: String(s),
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
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(Ze)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: E_
  }
});
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
function xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), !0).forEach(function(n) {
      $T(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
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
  zIndexMap: Object.values(Ze).reduce((e, t) => xg(xg({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), BT)
}, FT = new Set(Object.values(Ze));
function VT(e) {
  return FT.has(e);
}
var t1 = gt({
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
  unregisterZIndexPortal: uc,
  registerZIndexPortalElement: HT,
  unregisterZIndexPortalElement: qT
} = t1.actions, UT = t1.reducer;
function Lt(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = rC(), i = n && t !== void 0 && t !== 0, o = dt(), a = ve(void 0), l = ve(/* @__PURE__ */ new Set()), c = $e(), s = oe((f) => RT(f, t, o));
  if (Et(() => {
    if (!i) {
      var f = l.current;
      f.forEach((h) => {
        c(uc({
          zIndex: h
        }));
      }), f.clear(), a.current = void 0;
      return;
    }
    if (l.current.has(t) || (c(KT({
      zIndex: t
    })), l.current.add(t)), s) {
      a.current = s;
      var p = l.current;
      p.forEach((h) => {
        h !== t && (c(uc({
          zIndex: h
        })), p.delete(h));
      });
    }
  }, [c, t, i, s]), Et(() => {
    var f = l.current;
    return () => {
      f.forEach((p) => {
        c(uc({
          zIndex: p
        }));
      }), f.clear();
    };
  }, [c]), !i)
    return r;
  var u = s ?? a.current;
  return u ? /* @__PURE__ */ B0(r, u) : null;
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
function bg(e, t) {
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
    t % 2 ? bg(Object(r), !0).forEach(function(n) {
      YT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bg(Object(r)).forEach(function(n) {
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
  return /* @__PURE__ */ Rt(t) ? /* @__PURE__ */ ti(t, n) : /* @__PURE__ */ z0(r, n);
}
function JT(e) {
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
  } = e, f = r, p = n, h = i;
  if (!c || !f || u !== "ScatterChart" && s !== "axis")
    return null;
  var g, v, y;
  if (u === "ScatterChart")
    g = f, v = yk, y = Ze.cursorLine;
  else if (u === "BarChart")
    g = mk(l, f, o, a), v = Nm, y = Ze.cursorRectangle;
  else if (l === "radial" && yy(f)) {
    var {
      cx: m,
      cy: b,
      radius: x,
      startAngle: w,
      endAngle: S
    } = $m(f);
    g = {
      cx: m,
      cy: b,
      startAngle: w,
      endAngle: S,
      innerRadius: x,
      outerRadius: x
    }, v = Lm, y = Ze.cursorLine;
  } else
    g = {
      points: l_(l, f, o)
    }, v = Ei, y = Ze.cursorLine;
  var O = typeof c == "object" && "className" in c ? c.className : void 0, C = Wo(Wo(Wo(Wo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), g), Gi(c)), {}, {
    payload: p,
    payloadIndex: h,
    className: Pe("recharts-tooltip-cursor", O)
  });
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : y
  }, /* @__PURE__ */ P.createElement(ZT, {
    cursor: c,
    cursorComp: v,
    cursorProps: C
  }));
}
function QT(e) {
  var t = bT(), r = xm(), n = Pn(), i = Zb();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ P.createElement(JT, lu({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var r1 = /* @__PURE__ */ At(null), e6 = () => zt(r1), dc = { exports: {} }, wg;
function t6() {
  return wg || (wg = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(c, s, u) {
      this.fn = c, this.context = s, this.once = u || !1;
    }
    function o(c, s, u, f, p) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(u, f || c, p), g = r ? r + s : s;
      return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], h] : c._events[g].push(h) : (c._events[g] = h, c._eventsCount++), c;
    }
    function a(c, s) {
      --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
    }
    function l() {
      this._events = new n(), this._eventsCount = 0;
    }
    l.prototype.eventNames = function() {
      var s = [], u, f;
      if (this._eventsCount === 0) return s;
      for (f in u = this._events)
        t.call(u, f) && s.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(u)) : s;
    }, l.prototype.listeners = function(s) {
      var u = r ? r + s : s, f = this._events[u];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var p = 0, h = f.length, g = new Array(h); p < h; p++)
        g[p] = f[p].fn;
      return g;
    }, l.prototype.listenerCount = function(s) {
      var u = r ? r + s : s, f = this._events[u];
      return f ? f.fn ? 1 : f.length : 0;
    }, l.prototype.emit = function(s, u, f, p, h, g) {
      var v = r ? r + s : s;
      if (!this._events[v]) return !1;
      var y = this._events[v], m = arguments.length, b, x;
      if (y.fn) {
        switch (y.once && this.removeListener(s, y.fn, void 0, !0), m) {
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
        for (x = 1, b = new Array(m - 1); x < m; x++)
          b[x - 1] = arguments[x];
        y.fn.apply(y.context, b);
      } else {
        var w = y.length, S;
        for (x = 0; x < w; x++)
          switch (y[x].once && this.removeListener(s, y[x].fn, void 0, !0), m) {
            case 1:
              y[x].fn.call(y[x].context);
              break;
            case 2:
              y[x].fn.call(y[x].context, u);
              break;
            case 3:
              y[x].fn.call(y[x].context, u, f);
              break;
            case 4:
              y[x].fn.call(y[x].context, u, f, p);
              break;
            default:
              if (!b) for (S = 1, b = new Array(m - 1); S < m; S++)
                b[S - 1] = arguments[S];
              y[x].fn.apply(y[x].context, b);
          }
      }
      return !0;
    }, l.prototype.on = function(s, u, f) {
      return o(this, s, u, f, !1);
    }, l.prototype.once = function(s, u, f) {
      return o(this, s, u, f, !0);
    }, l.prototype.removeListener = function(s, u, f, p) {
      var h = r ? r + s : s;
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
    }, l.prototype.removeAllListeners = function(s) {
      var u;
      return s ? (u = r ? r + s : s, this._events[u] && a(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
  })(dc)), dc.exports;
}
var r6 = t6();
const n6 = /* @__PURE__ */ Sn(r6);
var qi = new n6(), su = "recharts.syncEvent.tooltip", jg = "recharts.syncEvent.brush", n1 = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!Jt(r))
      return e[r];
  }
}, i6 = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, i1 = gt({
  name: "options",
  initialState: i6,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), o6 = i1.reducer, {
  createEventEmitter: a6
} = i1.actions;
function l6(e) {
  return e.tooltip.syncInteraction;
}
var s6 = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, o1 = gt({
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
  setChartData: Sg,
  setDataStartEndIndexes: c6,
  setComputedData: u$
} = o1.actions, u6 = o1.reducer, d6 = ["x", "y"];
function Og(e, t) {
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
    t % 2 ? Og(Object(r), !0).forEach(function(n) {
      f6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Og(Object(r)).forEach(function(n) {
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
  var e = oe(Xu), t = oe(Zu), r = $e(), n = oe(rx), i = oe(Dr), o = Pn(), a = ro(), l = oe((c) => c.rootProps.className);
  Se(() => {
    if (e == null)
      return On;
    var c = (s, u, f) => {
      if (t !== f && e === s) {
        if (u.payload.active === !1) {
          r(ki({
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
              y: b,
              width: x,
              height: w
            } = u.payload.sourceViewBox, S = Nn(Nn({}, y), {}, {
              x: a.x + (x ? (g - m) / x : 0) * a.width,
              y: a.y + (w ? (v - b) / w : 0) * a.height
            });
            r(Nn(Nn({}, u), {}, {
              payload: Nn(Nn({}, u.payload), {}, {
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
            }, T = n(i, C);
            O = i[T];
          } else n === "value" && (O = i.find((U) => String(U.value) === u.payload.label));
          var {
            coordinate: E
          } = u.payload;
          if (E == null || a == null) {
            r(ki({
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
            r(ki({
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
            x: _,
            y: D
          } = E, k = Math.min(_, a.x + a.width), F = Math.min(D, a.y + a.height), N = {
            x: o === "horizontal" ? O.coordinate : k,
            y: o === "horizontal" ? F : O.coordinate
          }, V = ki({
            active: u.payload.active,
            coordinate: N,
            dataKey: u.payload.dataKey,
            index: String(O.index),
            label: u.payload.label,
            sourceViewBox: u.payload.sourceViewBox,
            graphicalItemId: u.payload.graphicalItemId
          });
          r(V);
        }
      }
    };
    return qi.on(su, c), () => {
      qi.off(su, c);
    };
  }, [l, r, t, e, n, i, o, a]);
}
function m6() {
  var e = oe(Xu), t = oe(Zu), r = $e();
  Se(() => {
    if (e == null)
      return On;
    var n = (i, o, a) => {
      t !== a && e === i && r(c6(o));
    };
    return qi.on(jg, n), () => {
      qi.off(jg, n);
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
  var a = oe((g) => _T(g, e, t)), l = oe(uT), c = oe(Zu), s = oe(Xu), u = oe(rx), f = oe(l6), p = f?.sourceViewBox != null, h = ro();
  Se(() => {
    if (!p && s != null && c != null) {
      var g = ki({
        active: o,
        coordinate: r,
        dataKey: a,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: h,
        graphicalItemId: l
      });
      qi.emit(su, s, g, c);
    }
  }, [p, r, a, l, i, n, c, s, u, o, h]);
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
function Cg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pg(Object(r), !0).forEach(function(n) {
      w6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pg(Object(r)).forEach(function(n) {
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
var kg = [], C6 = {
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
function Vd(e) {
  var t, r, n = jt(e, C6), {
    active: i,
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    content: c,
    filterNull: s,
    isAnimationActive: u,
    offset: f,
    payloadUniqBy: p,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    wrapperStyle: y,
    cursor: m,
    shared: b,
    trigger: x,
    defaultIndex: w,
    portal: S,
    axisId: O
  } = n, C = $e(), T = typeof w == "number" ? String(w) : w;
  Se(() => {
    C(m3({
      shared: b,
      trigger: x,
      axisId: O,
      active: i,
      defaultIndex: T
    }));
  }, [C, b, x, O, i, T]);
  var E = ro(), _ = Tm(), D = f3(b), {
    activeIndex: k,
    isActive: F
  } = (t = oe((ue) => TT(ue, D, x, T))) !== null && t !== void 0 ? t : {}, N = oe((ue) => AT(ue, D, x, T)), V = oe((ue) => e1(ue, D, x, T)), U = oe((ue) => ET(ue, D, x, T)), J = N, $ = e6(), re = (r = i ?? F) !== null && r !== void 0 ? r : !1, [te, z] = XS([J, re]), B = D === "axis" ? V : void 0;
  b6(D, x, U, B, k, re);
  var L = S ?? $;
  if (L == null || E == null || D == null)
    return null;
  var H = J ?? kg;
  re || (H = kg), s && H.length && (H = mS(H.filter((ue) => ue.value != null && (ue.hide !== !0 || n.includeHidden)), p, O6));
  var le = H.length > 0, me = Cg(Cg({}, n), {}, {
    payload: H,
    label: B,
    active: re,
    activeIndex: k,
    coordinate: U,
    accessibilityLayer: _
  }), de = /* @__PURE__ */ P.createElement(nk, {
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    isAnimationActive: u,
    active: re,
    coordinate: U,
    hasPayload: le,
    offset: f,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    viewBox: E,
    wrapperStyle: y,
    lastBoundingBox: te,
    innerRef: z,
    hasPortalFromProps: !!S
  }, P6(c, me));
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ B0(de, L), re && /* @__PURE__ */ P.createElement(QT, {
    cursor: m,
    tooltipEventType: D,
    coordinate: U,
    payload: H,
    index: k
  }));
}
var Kd = (e) => null;
Kd.displayName = "Cell";
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
function _g(e, t) {
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
    t % 2 ? _g(Object(r), !0).forEach(function(n) {
      I6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(n) {
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
}, a1 = T6({}, R6), Eg = new A6(a1.cacheSize), N6 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Ag = "recharts_measurement_span";
function $6(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", o = t.fontStyle || "", a = t.letterSpacing || "", l = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(o, "|").concat(a, "|").concat(l);
}
var Tg = (e, t) => {
  try {
    var r = document.getElementById(Ag);
    r || (r = document.createElement("span"), r.setAttribute("id", Ag), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, N6, t), r.textContent = "".concat(e);
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
}, Ti = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || ao.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!a1.enableCache)
    return Tg(t, r);
  var n = $6(t, r), i = Eg.get(n);
  if (i)
    return i;
  var o = Tg(t, r);
  return Eg.set(n, o), o;
}, l1;
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
var Ig = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Mg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, W6 = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, F6 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, V6 = {
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
    this.num = t, this.unit = r, this.num = t, this.unit = r, Jt(t) && (this.unit = ""), r !== "" && !W6.test(r) && (this.num = NaN, this.unit = ""), H6(r) && (this.num = q6(t, r), this.unit = "px");
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
    return Jt(this.num);
  }
}
l1 = lt;
z6(lt, "NaN", new l1(NaN, ""));
function s1(e) {
  if (e == null || e.includes(Bn))
    return Bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, o] = (r = Ig.exec(t)) !== null && r !== void 0 ? r : [], a = lt.parse(n ?? ""), l = lt.parse(o ?? ""), c = i === "*" ? a.multiply(l) : a.divide(l);
    if (c.isNaN())
      return Bn;
    t = t.replace(Ig, c.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var s, [, u, f, p] = (s = Mg.exec(t)) !== null && s !== void 0 ? s : [], h = lt.parse(u ?? ""), g = lt.parse(p ?? ""), v = f === "+" ? h.add(g) : h.subtract(g);
    if (v.isNaN())
      return Bn;
    t = t.replace(Mg, v.toString());
  }
  return t;
}
var Dg = /\(([^()]*)\)/;
function U6(e) {
  for (var t = e, r; (r = Dg.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Dg, s1(n));
  }
  return t;
}
function Y6(e) {
  var t = e.replace(/\s+/g, "");
  return t = U6(t), t = s1(t), t;
}
function G6(e) {
  try {
    return Y6(e);
  } catch {
    return Bn;
  }
}
function fc(e) {
  var t = G6(e.slice(5, -1));
  return t === Bn ? "" : t;
}
var X6 = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], Z6 = ["dx", "dy", "angle", "className", "breakAll"];
function cu() {
  return cu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cu.apply(null, arguments);
}
function Rg(e, t) {
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
var c1 = /[ \f\n\r\t\v\u2028\u2029]+/, u1 = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    Be(t) || (r ? i = t.toString().split("") : i = t.toString().split(c1));
    var o = i.map((l) => ({
      word: l,
      width: Ti(l, n).width
    })), a = r ? 0 : Ti(" ", n).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: a
    };
  } catch {
    return null;
  }
};
function d1(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function Q6(e) {
  return Be(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var f1 = (e, t, r, n) => e.reduce((i, o) => {
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
}, []), p1 = (e) => e.reduce((t, r) => t.width > r.width ? t : r), eI = "…", Ng = (e, t, r, n, i, o, a, l) => {
  var c = e.slice(0, t), s = u1({
    breakAll: r,
    style: n,
    children: c + eI
  });
  if (!s)
    return [!1, []];
  var u = f1(s.wordsWithComputedWidth, o, a, l), f = u.length > i || p1(u).width > Number(o);
  return [f, u];
}, tI = (e, t, r, n, i) => {
  var {
    maxLines: o,
    children: a,
    style: l,
    breakAll: c
  } = e, s = ne(o), u = String(a), f = f1(t, n, r, i);
  if (!s || i)
    return f;
  var p = f.length > o || p1(f).width > Number(n);
  if (!p)
    return f;
  for (var h = 0, g = u.length - 1, v = 0, y; h <= g && v <= u.length - 1; ) {
    var m = Math.floor((h + g) / 2), b = m - 1, [x, w] = Ng(u, b, c, l, o, n, r, i), [S] = Ng(u, m, c, l, o, n, r, i);
    if (!x && !S && (h = m + 1), x && S && (g = m - 1), !x && S) {
      y = w;
      break;
    }
    v++;
  }
  return y || f;
}, $g = (e) => {
  var t = Be(e) ? [] : e.toString().split(c1);
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
  if ((t || r) && !ao.isSsr) {
    var l, c, s = u1({
      breakAll: o,
      children: n,
      style: i
    });
    if (s) {
      var {
        wordsWithComputedWidth: u,
        spaceWidth: f
      } = s;
      l = u, c = f;
    } else
      return $g(n);
    return tI({
      breakAll: o,
      children: n,
      maxLines: a,
      style: i
    }, l, c, t, !!r);
  }
  return $g(n);
}, h1 = "#808080", nI = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: h1,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, Hd = /* @__PURE__ */ ut((e, t) => {
  var r = jt(e, nI), {
    x: n,
    y: i,
    lineHeight: o,
    capHeight: a,
    fill: l,
    scaleToFit: c,
    textAnchor: s,
    verticalAnchor: u
  } = r, f = Rg(r, X6), p = tr(() => rI({
    breakAll: f.breakAll,
    children: f.children,
    maxLines: f.maxLines,
    scaleToFit: c,
    style: f.style,
    width: f.width
  }), [f.breakAll, f.children, f.maxLines, c, f.style, f.width]), {
    dx: h,
    dy: g,
    angle: v,
    className: y,
    breakAll: m
  } = f, b = Rg(f, Z6);
  if (!Ut(n) || !Ut(i) || p.length === 0)
    return null;
  var x = Number(n) + (ne(h) ? h : 0), w = Number(i) + (ne(g) ? g : 0);
  if (!pe(x) || !pe(w))
    return null;
  var S;
  switch (u) {
    case "start":
      S = fc("calc(".concat(a, ")"));
      break;
    case "middle":
      S = fc("calc(".concat((p.length - 1) / 2, " * -").concat(o, " + (").concat(a, " / 2))"));
      break;
    default:
      S = fc("calc(".concat(p.length - 1, " * -").concat(o, ")"));
      break;
  }
  var O = [], C = p[0];
  if (c && C != null) {
    var T = C.width, {
      width: E
    } = f;
    O.push("scale(".concat(ne(E) && ne(T) ? E / T : 1, ")"));
  }
  return v && O.push("rotate(".concat(v, ", ").concat(x, ", ").concat(w, ")")), O.length && (b.transform = O.join(" ")), /* @__PURE__ */ P.createElement("text", cu({}, vt(b), {
    ref: t,
    x,
    y: w,
    className: Pe("recharts-text", y),
    textAnchor: s,
    fill: l.includes("url") ? h1 : l
  }), p.map((_, D) => {
    var k = _.words.join(m ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ P.createElement("tspan", {
        x,
        dy: D === 0 ? S : o,
        key: "".concat(k, "-").concat(D)
      }, k)
    );
  }));
});
Hd.displayName = "Text";
function zg(e, t) {
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
    t % 2 ? zg(Object(r), !0).forEach(function(n) {
      iI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
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
    upperWidth: c,
    lowerWidth: s
  } = Wu(t), u = o, f = o + (c - s) / 2, p = (u + f) / 2, h = (c + s) / 2, g = u + c / 2, v = l >= 0 ? 1 : -1, y = v * n, m = v > 0 ? "end" : "start", b = v > 0 ? "start" : "end", x = c >= 0 ? 1 : -1, w = x * n, S = x > 0 ? "end" : "start", O = x > 0 ? "start" : "end", C = i;
  if (r === "top") {
    var T = {
      x: u + c / 2,
      y: a - y,
      horizontalAnchor: "middle",
      verticalAnchor: m
    };
    return C && (T.height = Math.max(a - C.y, 0), T.width = c), T;
  }
  if (r === "bottom") {
    var E = {
      x: f + s / 2,
      y: a + l + y,
      horizontalAnchor: "middle",
      verticalAnchor: b
    };
    return C && (E.height = Math.max(C.y + C.height - (a + l), 0), E.width = s), E;
  }
  if (r === "left") {
    var _ = {
      x: p - w,
      y: a + l / 2,
      horizontalAnchor: S,
      verticalAnchor: "middle"
    };
    return C && (_.width = Math.max(_.x - C.x, 0), _.height = l), _;
  }
  if (r === "right") {
    var D = {
      x: p + h + w,
      y: a + l / 2,
      horizontalAnchor: O,
      verticalAnchor: "middle"
    };
    return C && (D.width = Math.max(C.x + C.width - D.x, 0), D.height = l), D;
  }
  var k = C ? {
    width: h,
    height: l
  } : {};
  return r === "insideLeft" ? ar({
    x: p + w,
    y: a + l / 2,
    horizontalAnchor: O,
    verticalAnchor: "middle"
  }, k) : r === "insideRight" ? ar({
    x: p + h - w,
    y: a + l / 2,
    horizontalAnchor: S,
    verticalAnchor: "middle"
  }, k) : r === "insideTop" ? ar({
    x: u + c / 2,
    y: a + y,
    horizontalAnchor: "middle",
    verticalAnchor: b
  }, k) : r === "insideBottom" ? ar({
    x: f + s / 2,
    y: a + l - y,
    horizontalAnchor: "middle",
    verticalAnchor: m
  }, k) : r === "insideTopLeft" ? ar({
    x: u + w,
    y: a + y,
    horizontalAnchor: O,
    verticalAnchor: b
  }, k) : r === "insideTopRight" ? ar({
    x: u + c - w,
    y: a + y,
    horizontalAnchor: S,
    verticalAnchor: b
  }, k) : r === "insideBottomLeft" ? ar({
    x: f + w,
    y: a + l - y,
    horizontalAnchor: O,
    verticalAnchor: m
  }, k) : r === "insideBottomRight" ? ar({
    x: f + s - w,
    y: a + l - y,
    horizontalAnchor: S,
    verticalAnchor: m
  }, k) : r && typeof r == "object" && (ne(r.x) || vn(r.x)) && (ne(r.y) || vn(r.y)) ? ar({
    x: o + Qt(r.x, h),
    y: a + Qt(r.y, l),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, k) : ar({
    x: g,
    y: a + l / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, k);
}, sI = ["labelRef"], cI = ["content"];
function Lg(e, t) {
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
function Bg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bg(Object(r), !0).forEach(function(n) {
      dI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bg(Object(r)).forEach(function(n) {
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
var v1 = /* @__PURE__ */ At(null), g1 = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a,
    children: l
  } = e, c = tr(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a
  }), [t, r, n, i, o, a]);
  return /* @__PURE__ */ P.createElement(v1.Provider, {
    value: c
  }, l);
}, y1 = () => {
  var e = zt(v1), t = ro();
  return e || (t ? Wu(t) : void 0);
}, hI = /* @__PURE__ */ At(null), vI = () => {
  var e = zt(hI), t = oe(lx);
  return e || t;
}, gI = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Be(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, qd = (e) => e != null && typeof e == "function", yI = (e, t) => {
  var r = Ct(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, mI = (e, t, r, n, i) => {
  var {
    offset: o,
    className: a
  } = e, {
    cx: l,
    cy: c,
    innerRadius: s,
    outerRadius: u,
    startAngle: f,
    endAngle: p,
    clockWise: h
  } = i, g = (s + u) / 2, v = yI(f, p), y = v >= 0 ? 1 : -1, m, b;
  switch (t) {
    case "insideStart":
      m = f + y * o, b = h;
      break;
    case "insideEnd":
      m = p - y * o, b = !h;
      break;
    case "end":
      m = p + y * o, b = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = v <= 0 ? b : !b;
  var x = st(l, c, g, m), w = st(l, c, g, m + (b ? 1 : -1) * 359), S = "M".concat(x.x, ",").concat(x.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), O = Be(e.id) ? Mi("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ P.createElement("text", wr({}, n, {
    dominantBaseline: "central",
    className: Pe("recharts-radial-bar-label", a)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: O,
    d: S
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(O)
  }, r));
}, xI = (e, t, r) => {
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
      y: f
    } = st(n, i, a + t, s);
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
  } = st(n, i, p, s);
  return {
    x: h,
    y: g,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Xo = (e) => e != null && "cx" in e && ne(e.cx), bI = {
  angle: 0,
  offset: 5,
  zIndex: Ze.label,
  position: "middle",
  textBreakAll: !1
};
function wI(e) {
  if (!Xo(e))
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
  var t = jt(e, bI), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: o,
    children: a,
    content: l,
    className: c = "",
    textBreakAll: s,
    labelRef: u
  } = t, f = vI(), p = y1(), h = i === "center" ? p : f ?? p, g, v, y;
  r == null ? g = h : Xo(r) ? g = r : g = Wu(r);
  var m = wI(g);
  if (!g || Be(o) && Be(a) && !/* @__PURE__ */ Rt(l) && typeof l != "function")
    return null;
  var b = _i(_i({}, t), {}, {
    viewBox: g
  });
  if (/* @__PURE__ */ Rt(l)) {
    var {
      labelRef: x
    } = b, w = Lg(b, sI);
    return /* @__PURE__ */ ti(l, w);
  }
  if (typeof l == "function") {
    var {
      content: S
    } = b, O = Lg(b, cI);
    if (v = /* @__PURE__ */ z0(l, O), /* @__PURE__ */ Rt(v))
      return v;
  } else
    v = gI(t);
  var C = vt(t);
  if (Xo(g)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return mI(t, i, v, C, g);
    y = xI(g, t.offset, t.position);
  } else {
    if (!m)
      return null;
    var T = lI({
      viewBox: m,
      position: i,
      offset: t.offset,
      parentViewBox: Xo(n) ? void 0 : n
    });
    y = _i(_i({
      x: T.x,
      y: T.y,
      textAnchor: T.horizontalAnchor,
      verticalAnchor: T.verticalAnchor
    }, T.width !== void 0 ? {
      width: T.width
    } : {}), T.height !== void 0 ? {
      height: T.height
    } : {});
  }
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(Hd, wr({
    ref: u,
    className: Pe("recharts-label", c)
  }, C, y, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: d1(C.textAnchor) ? C.textAnchor : y.textAnchor,
    breakAll: s
  }), v));
}
Br.displayName = "Label";
var jI = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit"
  }, n)) : Ut(e) ? /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Rt(e) ? e.type === Br ? /* @__PURE__ */ ti(e, _i({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit",
    content: e
  }, n)) : qd(e) ? /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ P.createElement(Br, wr({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function m1(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = y1();
  return jI(t, n, r) || null;
}
var SI = ["valueAccessor"], OI = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(null, arguments);
}
function Wg(e, t) {
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
}, x1 = /* @__PURE__ */ At(void 0), b1 = x1.Provider, w1 = /* @__PURE__ */ At(void 0);
w1.Provider;
function kI() {
  return zt(x1);
}
function _I() {
  return zt(w1);
}
function Pr(e) {
  var {
    valueAccessor: t = CI
  } = e, r = Wg(e, SI), {
    dataKey: n,
    clockWise: i,
    id: o,
    textBreakAll: a,
    zIndex: l
  } = r, c = Wg(r, OI), s = kI(), u = _I(), f = s || u;
  return !f || !f.length ? null : /* @__PURE__ */ P.createElement(Lt, {
    zIndex: l ?? Ze.label
  }, /* @__PURE__ */ P.createElement(ct, {
    className: "recharts-label-list"
  }, f.map((p, h) => {
    var g, v = Be(n) ? t(p, h) : He(p.payload, n), y = Be(o) ? {} : {
      id: "".concat(o, "-").concat(h)
    };
    return /* @__PURE__ */ P.createElement(Br, La({
      key: "label-".concat(h)
    }, vt(p), c, y, {
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
Pr.displayName = "LabelList";
function j1(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(Pr, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ P.isValidElement(t) || qd(t) ? /* @__PURE__ */ P.createElement(Pr, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ P.createElement(Pr, La({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function uu() {
  return uu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uu.apply(null, arguments);
}
var S1 = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, o = Pe("recharts-dot", i);
  return ne(t) && ne(r) && ne(n) ? /* @__PURE__ */ P.createElement("circle", uu({}, qt(e), _u(e), {
    className: o,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, EI = {
  radiusAxis: {},
  angleAxis: {}
}, O1 = gt({
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
  addRadiusAxis: d$,
  removeRadiusAxis: f$,
  addAngleAxis: p$,
  removeAngleAxis: h$
} = O1.actions, AI = O1.reducer;
function TI(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var Fo = { exports: {} }, Ce = {};
var Fg;
function II() {
  if (Fg) return Ce;
  Fg = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
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
  return Ce.ContextConsumer = o, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = r, Ce.Lazy = f, Ce.Memo = u, Ce.Portal = t, Ce.Profiler = i, Ce.StrictMode = n, Ce.Suspense = c, Ce.SuspenseList = s, Ce.isContextConsumer = function(v) {
    return g(v) === o;
  }, Ce.isContextProvider = function(v) {
    return g(v) === a;
  }, Ce.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, Ce.isForwardRef = function(v) {
    return g(v) === l;
  }, Ce.isFragment = function(v) {
    return g(v) === r;
  }, Ce.isLazy = function(v) {
    return g(v) === f;
  }, Ce.isMemo = function(v) {
    return g(v) === u;
  }, Ce.isPortal = function(v) {
    return g(v) === t;
  }, Ce.isProfiler = function(v) {
    return g(v) === i;
  }, Ce.isStrictMode = function(v) {
    return g(v) === n;
  }, Ce.isSuspense = function(v) {
    return g(v) === c;
  }, Ce.isSuspenseList = function(v) {
    return g(v) === s;
  }, Ce.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === i || v === n || v === c || v === s || typeof v == "object" && v !== null && (v.$$typeof === f || v.$$typeof === u || v.$$typeof === a || v.$$typeof === o || v.$$typeof === l || v.$$typeof === h || v.getModuleId !== void 0);
  }, Ce.typeOf = g, Ce;
}
var ke = {};
var Vg;
function MI() {
  return Vg || (Vg = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    ke.ContextConsumer = a, ke.ContextProvider = l, ke.Element = t, ke.ForwardRef = c, ke.Fragment = n, ke.Lazy = p, ke.Memo = f, ke.Portal = r, ke.Profiler = o, ke.StrictMode = i, ke.Suspense = s, ke.SuspenseList = u, ke.isContextConsumer = function(v) {
      return e(v) === a;
    }, ke.isContextProvider = function(v) {
      return e(v) === l;
    }, ke.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }, ke.isForwardRef = function(v) {
      return e(v) === c;
    }, ke.isFragment = function(v) {
      return e(v) === n;
    }, ke.isLazy = function(v) {
      return e(v) === p;
    }, ke.isMemo = function(v) {
      return e(v) === f;
    }, ke.isPortal = function(v) {
      return e(v) === r;
    }, ke.isProfiler = function(v) {
      return e(v) === o;
    }, ke.isStrictMode = function(v) {
      return e(v) === i;
    }, ke.isSuspense = function(v) {
      return e(v) === s;
    }, ke.isSuspenseList = function(v) {
      return e(v) === u;
    }, ke.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === n || v === o || v === i || v === s || v === u || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === f || v.$$typeof === l || v.$$typeof === a || v.$$typeof === c || v.$$typeof === g || v.getModuleId !== void 0);
    }, ke.typeOf = e;
  })()), ke;
}
var Kg;
function DI() {
  return Kg || (Kg = 1, process.env.NODE_ENV === "production" ? Fo.exports = /* @__PURE__ */ II() : Fo.exports = /* @__PURE__ */ MI()), Fo.exports;
}
var RI = /* @__PURE__ */ DI(), Hg = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", qg = null, pc = null, P1 = (e) => {
  if (e === qg && Array.isArray(pc))
    return pc;
  var t = [];
  return s2.forEach(e, (r) => {
    Be(r) || (RI.isFragment(r) ? t = t.concat(P1(r.props.children)) : t.push(r));
  }), pc = t, qg = e, t;
};
function NI(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => Hg(i)) : n = [Hg(t)], P1(e).forEach((i) => {
    var o = Hn(i, "type.displayName") || Hn(i, "type.name");
    o && n.indexOf(o) !== -1 && r.push(i);
  }), r;
}
var C1 = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, hc = {}, Ug;
function $I() {
  return Ug || (Ug = 1, (function(e) {
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
  })(hc)), hc;
}
var vc, Yg;
function zI() {
  return Yg || (Yg = 1, vc = $I().isPlainObject), vc;
}
var LI = /* @__PURE__ */ zI();
const BI = /* @__PURE__ */ Sn(LI);
var Gg, Xg, Zg, Jg, Qg;
function e0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function t0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? e0(Object(r), !0).forEach(function(n) {
      WI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e0(Object(r)).forEach(function(n) {
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
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ba.apply(null, arguments);
}
function Si(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var r0 = (e, t, r, n, i) => {
  var o = r - n, a;
  return a = Ve(Gg || (Gg = Si(["M ", ",", ""])), e, t), a += Ve(Xg || (Xg = Si(["L ", ",", ""])), e + r, t), a += Ve(Zg || (Zg = Si(["L ", ",", ""])), e + r - o / 2, t + i), a += Ve(Jg || (Jg = Si(["L ", ",", ""])), e + r - o / 2 - n, t + i), a += Ve(Qg || (Qg = Si(["L ", ",", " Z"])), e, t), a;
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
    animationEasing: c,
    animationDuration: s,
    animationBegin: u,
    isUpdateAnimationActive: f
  } = t, p = ve(null), [h, g] = W(-1), v = ve(i), y = ve(o), m = ve(a), b = ve(r), x = ve(n), w = gl(e, "trapezoid-");
  if (Se(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var N = p.current.getTotalLength();
        N && g(N);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || o !== +o || a !== +a || i === 0 && o === 0 || a === 0)
    return null;
  var S = Pe("recharts-trapezoid", l);
  if (!f)
    return /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", Ba({}, vt(t), {
      className: S,
      d: r0(r, n, i, o, a)
    })));
  var O = v.current, C = y.current, T = m.current, E = b.current, _ = x.current, D = "0px ".concat(h === -1 ? 1 : h, "px"), k = "".concat(h, "px ").concat(h, "px"), F = Im(["strokeDasharray"], s, c);
  return /* @__PURE__ */ P.createElement(vl, {
    animationId: w,
    key: w,
    canBegin: h > 0,
    duration: s,
    easing: c,
    isActive: f,
    begin: u
  }, (N) => {
    var V = ze(O, i, N), U = ze(C, o, N), J = ze(T, a, N), $ = ze(E, r, N), re = ze(_, n, N);
    p.current && (v.current = V, y.current = U, m.current = J, b.current = $, x.current = re);
    var te = N > 0 ? {
      transition: F,
      strokeDasharray: k
    } : {
      strokeDasharray: D
    };
    return /* @__PURE__ */ P.createElement("path", Ba({}, vt(t), {
      className: S,
      d: r0($, re, V, U, J),
      ref: p,
      style: t0(t0({}, te), t.style)
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
function n0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? n0(Object(r), !0).forEach(function(n) {
      GI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n0(Object(r)).forEach(function(n) {
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
  return Wa(Wa({}, t), e);
}
function QI(e, t) {
  return e === "symbols";
}
function i0(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement(Nm, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(HI, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(Lm, r);
    case "symbols":
      if (QI(t))
        return /* @__PURE__ */ P.createElement(gy, r);
      break;
    case "curve":
      return /* @__PURE__ */ P.createElement(Ei, r);
    default:
      return null;
  }
}
function eM(e) {
  return /* @__PURE__ */ Rt(e) ? e.props : e;
}
function tM(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape",
    inActiveClassName: i = "recharts-shape"
  } = e, o = UI(e, qI), a;
  if (/* @__PURE__ */ Rt(t))
    a = /* @__PURE__ */ ti(t, Wa(Wa({}, o), eM(t)));
  else if (typeof t == "function")
    a = t(o, o.index);
  else if (BI(t) && typeof t != "boolean") {
    var l = JI(t, o);
    a = /* @__PURE__ */ P.createElement(i0, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var c = o;
    a = /* @__PURE__ */ P.createElement(i0, {
      shapeType: r,
      elementProps: c
    });
  }
  return o.isActive ? /* @__PURE__ */ P.createElement(ct, {
    className: n
  }, a) : /* @__PURE__ */ P.createElement(ct, {
    className: i
  }, a);
}
var k1 = (e, t, r) => {
  var n = $e();
  return (i, o) => (a) => {
    e?.(i, o, a), n(Ib({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, _1 = (e) => {
  var t = $e();
  return (r, n) => (i) => {
    e?.(r, n, i), t(x3());
  };
}, E1 = (e, t, r) => {
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
function A1(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = $e(), n = dt(), i = ve(null);
  return Et(() => {
    n || (i.current === null ? r(v3(t)) : i.current !== t && r(g3({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), Et(() => () => {
    i.current && (r(y3(i.current)), i.current = null);
  }, [r]), null;
}
function T1(e) {
  var {
    legendPayload: t
  } = e, r = $e(), n = dt(), i = ve(null);
  return Et(() => {
    n || (i.current === null ? r(gC(t)) : i.current !== t && r(yC({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), Et(() => () => {
    i.current && (r(mC(i.current)), i.current = null);
  }, [r]), null;
}
var gc, rM = () => {
  var [e] = P.useState(() => Mi("uid-"));
  return e;
}, nM = (gc = P.useId) !== null && gc !== void 0 ? gc : rM;
function iM(e, t) {
  var r = nM();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var oM = /* @__PURE__ */ At(void 0), I1 = (e) => {
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
}, M1 = gt({
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
        } = t.payload, i = Kt(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: De()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Kt(e).cartesianItems.indexOf(t.payload);
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
        var r = Kt(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: De()
    },
    replacePolarGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Kt(e).polarItems.indexOf(r);
        i > -1 && (e.polarItems[i] = n);
      },
      prepare: De()
    }
  }
}), {
  addCartesianGraphicalItem: lM,
  replaceCartesianGraphicalItem: sM,
  removeCartesianGraphicalItem: cM,
  addPolarGraphicalItem: v$,
  removePolarGraphicalItem: g$,
  replacePolarGraphicalItem: y$
} = M1.actions, uM = M1.reducer, dM = (e) => {
  var t = $e(), r = ve(null);
  return Et(() => {
    r.current === null ? t(lM(e)) : r.current !== e && t(sM({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), Et(() => () => {
    r.current && (t(cM(r.current)), r.current = null);
  }, [t]), null;
}, D1 = /* @__PURE__ */ bu(dM), fM = ["points"];
function o0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o0(Object(r), !0).forEach(function(n) {
      pM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o0(Object(r)).forEach(function(n) {
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
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(null, arguments);
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
  if (/* @__PURE__ */ Rt(t))
    return /* @__PURE__ */ ti(t, r);
  if (typeof t == "function")
    return t(r);
  var i = Pe(n, typeof t != "boolean" ? t.className : ""), o = r ?? {}, {
    points: a
  } = o, l = gM(o, fM);
  return /* @__PURE__ */ P.createElement(S1, Fa({}, l, {
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
    clipPathId: c,
    zIndex: s = Ze.scatter
  } = e;
  if (!xM(t, r))
    return null;
  var u = C1(r), f = K2(r), p = t.map((g, v) => {
    var y, m, b = yc(yc(yc({
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
      dotProps: b,
      className: i
    });
  }), h = {};
  return l && c != null && (h.clipPath = "url(#clipPath-".concat(u ? "" : "dots-").concat(c, ")")), /* @__PURE__ */ P.createElement(Lt, {
    zIndex: s
  }, /* @__PURE__ */ P.createElement(ct, Fa({
    className: n
  }, h), p));
}
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
function l0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a0(Object(r), !0).forEach(function(n) {
      wM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a0(Object(r)).forEach(function(n) {
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
var R1 = 0, OM = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, N1 = gt({
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
        e.yAxis[r] = l0(l0({}, i), {}, {
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
  addZAxis: m$,
  replaceZAxis: x$,
  removeZAxis: b$,
  updateYAxisWidth: TM
} = N1.actions, IM = N1.reducer, MM = R([rt], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), DM = R([MM, Tr, Ir], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), Ud = () => oe(DM), RM = () => oe(vT);
function s0(e, t) {
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
    t % 2 ? s0(Object(r), !0).forEach(function(n) {
      NM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s0(Object(r)).forEach(function(n) {
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
  }, c = mc(mc(mc({}, l), Gi(i)), _u(i)), s;
  return /* @__PURE__ */ Rt(i) ? s = /* @__PURE__ */ ti(i, c) : typeof i == "function" ? s = i(c) : s = /* @__PURE__ */ P.createElement(S1, c), /* @__PURE__ */ P.createElement(ct, {
    className: "recharts-active-dot",
    clipPath: a
  }, s);
};
function c0(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i,
    clipPath: o,
    zIndex: a = Ze.activeDot
  } = e, l = oe(wn), c = RM();
  if (t == null || c == null)
    return null;
  var s = t.find((u) => c.includes(u.payload));
  return Be(s) ? null : /* @__PURE__ */ P.createElement(Lt, {
    zIndex: a
  }, /* @__PURE__ */ P.createElement(LM, {
    point: s,
    childIndex: Number(l),
    mainColor: r,
    dataKey: i,
    activeDot: n,
    clipPath: o
  }));
}
var u0 = (e, t, r) => {
  var n = r ?? e;
  if (!Be(n))
    return Qt(n, t, 0);
}, BM = (e, t, r) => {
  var n = {}, i = e.filter(Ol), o = e.filter((s) => s.stackId == null), a = i.reduce((s, u) => {
    var f = s[u.stackId];
    return f == null && (f = []), f.push(u), s[u.stackId] = f, s;
  }, n), l = Object.entries(a).map((s) => {
    var u, [f, p] = s, h = p.map((v) => v.dataKey), g = u0(t, r, (u = p[0]) === null || u === void 0 ? void 0 : u.barSize);
    return {
      stackId: f,
      dataKeys: h,
      barSize: g
    };
  }), c = o.map((s) => {
    var u = [s.dataKey].filter((p) => p != null), f = u0(t, r, s.barSize);
    return {
      stackId: void 0,
      dataKeys: u,
      barSize: f
    };
  });
  return [...l, ...c];
};
function d0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? d0(Object(r), !0).forEach(function(n) {
      WM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d0(Object(r)).forEach(function(n) {
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
    var l = Qt(e, r, 0, !0), c, s = [];
    if (pe((o = n[0]) === null || o === void 0 ? void 0 : o.barSize)) {
      var u = !1, f = r / a, p = n.reduce((b, x) => b + (x.barSize || 0), 0);
      p += (a - 1) * l, p >= r && (p -= (a - 1) * l, l = 0), p >= r && f > 0 && (u = !0, f *= 0.9, p = a * f);
      var h = (r - p) / 2 >> 0, g = {
        offset: h - l,
        size: 0
      };
      c = n.reduce((b, x) => {
        var w, S = {
          stackId: x.stackId,
          dataKeys: x.dataKeys,
          position: {
            offset: g.offset + g.size + l,
            size: u ? f : (w = x.barSize) !== null && w !== void 0 ? w : 0
          }
        }, O = [...b, S];
        return g = S.position, O;
      }, s);
    } else {
      var v = Qt(t, r, 0, !0);
      r - 2 * v - (a - 1) * l <= 0 && (l = 0);
      var y = (r - 2 * v - (a - 1) * l) / a;
      y > 1 && (y >>= 0);
      var m = pe(i) ? Math.min(y, i) : y;
      c = n.reduce((b, x, w) => [...b, {
        stackId: x.stackId,
        dataKeys: x.dataKeys,
        position: {
          offset: v + (y + l) * w + (y - m) / 2,
          size: m
        }
      }], s);
    }
    return c;
  }
}
var HM = (e, t, r, n, i, o, a) => {
  var l = Be(a) ? t : a, c = KM(r, n, i !== o ? i : o, e, l);
  return i !== o && c != null && (c = c.map((s) => Vo(Vo({}, s), {}, {
    position: Vo(Vo({}, s.position), {}, {
      offset: s.position.offset - i / 2
    })
  }))), c;
}, qM = (e, t) => {
  var r = Sl(t);
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
  } : (r(Sg(t)), () => {
    r(Sg(void 0));
  }), [t, r, n]), null;
}, f0 = {
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
}, $1 = gt({
  name: "brush",
  initialState: f0,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? f0 : t.payload;
    }
  }
}), {
  setBrushSettings: w$
} = $1.actions, XM = $1.reducer, ZM = (e, t) => {
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
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = QM(i), a = o * Math.PI / 180, l = Math.atan(n / r), c = a > l && a < Math.PI - l ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(c);
}, t5 = {
  dots: [],
  areas: [],
  lines: []
}, z1 = gt({
  name: "referenceElements",
  initialState: t5,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Kt(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Kt(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Kt(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: j$,
  removeDot: S$,
  addArea: O$,
  removeArea: P$,
  addLine: r5,
  removeLine: n5
} = z1.actions, i5 = z1.reducer, L1 = /* @__PURE__ */ At(void 0), o5 = (e) => {
  var {
    children: t
  } = e, [r] = W("".concat(Mi("recharts"), "-clip")), n = Ud();
  if (n == null)
    return null;
  var {
    x: i,
    y: o,
    width: a,
    height: l
  } = n;
  return /* @__PURE__ */ P.createElement(L1.Provider, {
    value: r
  }, /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: o,
    height: l,
    width: a
  }))), t);
}, a5 = () => zt(L1);
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
    } = r, l, c;
    return a === "rangeMin" ? l = this.yAxisScale.rangeMin() : a === "rangeMax" ? l = this.yAxisScale.rangeMax() : l = 0, a === "rangeMin" ? c = this.xAxisScale.rangeMin() : a === "rangeMax" ? c = this.xAxisScale.rangeMax() : c = 0, {
      x: (n = this.xAxisScale.map(t.x, {
        position: o
      })) !== null && n !== void 0 ? n : c,
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
function p0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function h0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p0(Object(r), !0).forEach(function(n) {
      s5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p0(Object(r)).forEach(function(n) {
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
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Va.apply(null, arguments);
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
    r = /* @__PURE__ */ P.createElement("line", Va({}, t, {
      className: "recharts-reference-line-line"
    }));
  }
  return r;
}, f5 = (e, t, r, n, i, o) => {
  var {
    x: a,
    width: l
  } = o, c = i.map(e, {
    position: r
  });
  if (!pe(c) || t === "discard" && !i.isInRange(c))
    return null;
  var s = [{
    x: a + l,
    y: c
  }, {
    x: a,
    y: c
  }];
  return n === "left" ? s.reverse() : s;
}, p5 = (e, t, r, n, i, o) => {
  var {
    y: a,
    height: l
  } = o, c = i.map(e, {
    position: r
  });
  if (!pe(c) || t === "discard" && !i.isInRange(c))
    return null;
  var s = [{
    x: c,
    y: a + l
  }, {
    x: c,
    y: a
  }];
  return n === "top" ? s.reverse() : s;
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
    y: c,
    segment: s,
    ifOverflow: u
  } = a, f = Ut(l), p = Ut(c);
  return p ? f5(c, u, n, o, t, r) : f ? p5(l, u, n, i, e, r) : s != null && s.length === 2 ? h5(s, u, n, new l5({
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
  } = e, a = dt(), l = a5(), c = oe((C) => vr(C, t)), s = oe((C) => gr(C, r)), u = oe((C) => Qn(C, "xAxis", t, a)), f = oe((C) => Qn(C, "yAxis", r, a)), p = ro();
  if (!l || !p || c == null || s == null || u == null || f == null)
    return null;
  var h = v5(u, f, p, e.position, c.orientation, s.orientation, e);
  if (!h)
    return null;
  var g = h[0], v = h[1];
  if (g == null || v == null)
    return null;
  var {
    x: y,
    y: m
  } = g, {
    x: b,
    y: x
  } = v, w = o === "hidden" ? "url(#".concat(l, ")") : void 0, S = h0(h0({
    clipPath: w
  }, vt(e)), {}, {
    x1: y,
    y1: m,
    x2: b,
    y2: x
  }), O = JM({
    x1: y,
    y1: m,
    x2: b,
    y2: x
  });
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(ct, {
    className: Pe("recharts-reference-line", i)
  }, d5(n, S), /* @__PURE__ */ P.createElement(g1, Va({}, O, {
    lowerWidth: O.width,
    upperWidth: O.width
  }), /* @__PURE__ */ P.createElement(m1, {
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
  zIndex: Ze.line
};
function B1(e) {
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
B1.displayName = "ReferenceLine";
function W1(e, t) {
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
function Ui(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var o = r();
  return e * (t - e * o / 2 - n) >= 0 && e * (t + e * o / 2 - i) <= 0;
}
function w5(e, t) {
  return W1(e, t + 1);
}
function j5(e, t, r, n, i) {
  for (var o = (n || []).slice(), {
    start: a,
    end: l
  } = t, c = 0, s = 1, u = a, f = function() {
    var g = n?.[c];
    if (g === void 0)
      return {
        v: W1(n, s)
      };
    var v = c, y, m = () => (y === void 0 && (y = r(g, v)), y), b = g.coordinate, x = c === 0 || Ui(e, b, m, u, l);
    x || (c = 0, u = a, s += 1), x && (u = b + e * (m() / 2 + i), c += s);
  }, p; s <= o.length; )
    if (p = f(), p) return p.v;
  return [];
}
function S5(e, t, r, n, i) {
  var o = (n || []).slice(), a = o.length;
  if (a === 0)
    return [];
  for (var {
    start: l,
    end: c
  } = t, s = 1; s <= a; s++) {
    for (var u = (a - 1) % s, f = l, p = !0, h = function() {
      var w = n[v];
      if (w == null)
        return 0;
      var S = v, O, C = () => (O === void 0 && (O = r(w, S)), O), T = w.coordinate, E = v === u || Ui(e, T, C, f, c);
      if (!E)
        return p = !1, 1;
      E && (f = T + e * (C() / 2 + i));
    }, g, v = u; v < a && (g = h(), !(g !== 0 && g === 1)); v += s)
      ;
    if (p) {
      for (var y = [], m = u; m < a; m += s) {
        var b = n[m];
        b != null && y.push(b);
      }
      return y;
    }
  }
  return [];
}
function v0(e, t) {
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
    t % 2 ? v0(Object(r), !0).forEach(function(n) {
      O5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v0(Object(r)).forEach(function(n) {
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
    end: c
  } = t, s = function(p) {
    var h = o[p];
    if (h == null)
      return 1;
    var g = h, v, y = () => (v === void 0 && (v = r(h, p)), v);
    if (p === a - 1) {
      var m = e * (g.coordinate + e * y() / 2 - c);
      o[p] = g = pt(pt({}, g), {}, {
        tickCoord: m > 0 ? g.coordinate - m * e : g.coordinate
      });
    } else
      o[p] = g = pt(pt({}, g), {}, {
        tickCoord: g.coordinate
      });
    if (g.tickCoord != null) {
      var b = Ui(e, g.tickCoord, y, l, c);
      b && (c = g.tickCoord - e * (y() / 2 + i), o[p] = pt(pt({}, g), {}, {
        isShow: !0
      }));
    }
  }, u = a - 1; u >= 0; u--)
    s(u);
  return o;
}
function _5(e, t, r, n, i, o) {
  var a = (n || []).slice(), l = a.length, {
    start: c,
    end: s
  } = t;
  if (o) {
    var u = n[l - 1];
    if (u != null) {
      var f = r(u, l - 1), p = e * (u.coordinate + e * f / 2 - s);
      if (a[l - 1] = u = pt(pt({}, u), {}, {
        tickCoord: p > 0 ? u.coordinate - p * e : u.coordinate
      }), u.tickCoord != null) {
        var h = Ui(e, u.tickCoord, () => f, c, s);
        h && (s = u.tickCoord - e * (f / 2 + i), a[l - 1] = pt(pt({}, u), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var g = o ? l - 1 : l, v = function(b) {
    var x = a[b];
    if (x == null)
      return 1;
    var w = x, S, O = () => (S === void 0 && (S = r(x, b)), S);
    if (b === 0) {
      var C = e * (w.coordinate - e * O() / 2 - c);
      a[b] = w = pt(pt({}, w), {}, {
        tickCoord: C < 0 ? w.coordinate - C * e : w.coordinate
      });
    } else
      a[b] = w = pt(pt({}, w), {}, {
        tickCoord: w.coordinate
      });
    if (w.tickCoord != null) {
      var T = Ui(e, w.tickCoord, O, c, s);
      T && (c = w.tickCoord + e * (O() / 2 + i), a[b] = pt(pt({}, w), {}, {
        isShow: !0
      }));
    }
  }, y = 0; y < g; y++)
    v(y);
  return a;
}
function Yd(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: o,
    minTickGap: a,
    orientation: l,
    interval: c,
    tickFormatter: s,
    unit: u,
    angle: f
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (ne(c) || ao.isSsr) {
    var p;
    return (p = w5(i, ne(c) ? c : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], g = l === "top" || l === "bottom" ? "width" : "height", v = u && g === "width" ? Ti(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = (S, O) => {
    var C = typeof s == "function" ? s(S.value, O) : S.value;
    return g === "width" ? x5(Ti(C, {
      fontSize: t,
      letterSpacing: r
    }), v, f) : Ti(C, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, m = i[0], b = i[1], x = i.length >= 2 && m != null && b != null ? Ct(b.coordinate - m.coordinate) : 1, w = b5(o, x, g);
  return c === "equidistantPreserveStart" ? j5(x, w, y, i, a) : c === "equidistantPreserveEnd" ? S5(x, w, y, i, a) : (c === "preserveStart" || c === "preserveStartEnd" ? h = _5(x, w, y, i, a, c === "preserveStartEnd") : h = k5(x, w, y, i, a), h.filter((S) => S.isShow));
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
    var l = r ? r.getBoundingClientRect().width : 0, c = i + o, s = a + c + l + (r ? n : 0);
    return Math.round(s);
  }
  return 0;
}, A5 = {
  xAxis: {},
  yAxis: {}
}, F1 = gt({
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
} = F1.actions, M5 = F1.reducer, D5 = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
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
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jn.apply(null, arguments);
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
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g0(Object(r), !0).forEach(function(n) {
      $5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g0(Object(r)).forEach(function(n) {
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
var Cr = {
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
  zIndex: Ze.axis
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
    otherSvgProps: c
  } = e;
  if (!l)
    return null;
  var s = Fe(Fe(Fe({}, c), qt(l)), {}, {
    fill: "none"
  });
  if (o === "top" || o === "bottom") {
    var u = +(o === "top" && !a || o === "bottom" && a);
    s = Fe(Fe({}, s), {}, {
      x1: t,
      y1: r + u * i,
      x2: t + n,
      y2: r + u * i
    });
  } else {
    var f = +(o === "left" && !a || o === "right" && a);
    s = Fe(Fe({}, s), {}, {
      x1: t + f * n,
      y1: r,
      x2: t + f * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ P.createElement("line", jn({}, s, {
    className: Pe("recharts-cartesian-axis-line", Hn(l, "className"))
  }));
}
function W5(e, t, r, n, i, o, a, l, c) {
  var s, u, f, p, h, g, v = l ? -1 : 1, y = e.tickSize || a, m = ne(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (o) {
    case "top":
      s = u = e.coordinate, p = r + +!l * i, f = p - v * y, g = f - v * c, h = m;
      break;
    case "left":
      f = p = e.coordinate, u = t + +!l * n, s = u - v * y, h = s - v * c, g = m;
      break;
    case "right":
      f = p = e.coordinate, u = t + +l * n, s = u + v * y, h = s + v * c, g = m;
      break;
    default:
      s = u = e.coordinate, p = r + +l * i, f = p + v * y, g = f + v * c, h = m;
      break;
  }
  return {
    line: {
      x1: s,
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
    typeof t != "boolean" && (a = Pe(a, TI(t))), i = /* @__PURE__ */ P.createElement(Hd, jn({}, r, {
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
      return On;
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
    padding: c,
    tickTextProps: s,
    orientation: u,
    mirror: f,
    x: p,
    y: h,
    width: g,
    height: v,
    tickSize: y,
    tickMargin: m,
    fontSize: b,
    letterSpacing: x,
    getTicksConfig: w,
    events: S,
    axisType: O,
    axisId: C
  } = e, T = Yd(Fe(Fe({}, w), {}, {
    ticks: r
  }), b, x), E = qt(w), _ = Gi(n), D = d1(E.textAnchor) ? E.textAnchor : F5(u, f), k = V5(u, f), F = {};
  typeof i == "object" && (F = i);
  var N = Fe(Fe({}, E), {}, {
    fill: "none"
  }, F), V = T.map(($) => Fe({
    entry: $
  }, W5($, p, h, g, v, u, y, f, m))), U = V.map(($) => {
    var {
      entry: re,
      line: te
    } = $;
    return /* @__PURE__ */ P.createElement(ct, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(re.value, "-").concat(re.coordinate, "-").concat(re.tickCoord)
    }, i && /* @__PURE__ */ P.createElement("line", jn({}, N, te, {
      className: Pe("recharts-cartesian-axis-tick-line", Hn(i, "className"))
    })));
  }), J = V.map(($, re) => {
    var te, z, {
      entry: B,
      tick: L
    } = $, H = Fe(Fe(Fe(Fe({
      verticalAnchor: k
    }, E), {}, {
      textAnchor: D,
      stroke: "none",
      fill: o
    }, L), {}, {
      index: re,
      payload: B,
      visibleTicksCount: T.length,
      tickFormatter: a,
      padding: c
    }, s), {}, {
      angle: (te = (z = s?.angle) !== null && z !== void 0 ? z : E.angle) !== null && te !== void 0 ? te : 0
    }), le = Fe(Fe({}, H), _);
    return /* @__PURE__ */ P.createElement(ct, jn({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(B.value, "-").concat(B.coordinate, "-").concat(B.tickCoord)
    }, Eu(S, B, re)), n && /* @__PURE__ */ P.createElement(K5, {
      option: n,
      tickProps: le,
      value: "".concat(typeof a == "function" ? a(B.value, re) : B.value).concat(l || "")
    }));
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(O, "-ticks")
  }, /* @__PURE__ */ P.createElement(H5, {
    ticks: T,
    axisId: C,
    axisType: O
  }), J.length > 0 && /* @__PURE__ */ P.createElement(Lt, {
    zIndex: Ze.label
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(O, "-tick-labels"),
    ref: t
  }, J)), U.length > 0 && /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(O, "-tick-lines")
  }, U));
}), U5 = /* @__PURE__ */ ut((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: o,
    hide: a,
    ticks: l,
    axisType: c,
    axisId: s
  } = e, u = R5(e, D5), [f, p] = W(""), [h, g] = W(""), v = ve(null);
  $0(t, () => ({
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
  var y = _e((m) => {
    if (m) {
      var b = m.getElementsByClassName("recharts-cartesian-axis-tick-value");
      v.current = b;
      var x = b[0];
      if (x) {
        var w = window.getComputedStyle(x), S = w.fontSize, O = w.letterSpacing;
        (S !== f || O !== h) && (p(S), g(O));
      }
    }
  }, [f, h]);
  return a || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ P.createElement(Lt, {
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
    otherSvgProps: qt(e)
  }), /* @__PURE__ */ P.createElement(q5, {
    ref: y,
    axisType: c,
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
    axisId: s
  }), /* @__PURE__ */ P.createElement(g1, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ P.createElement(m1, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), Gd = /* @__PURE__ */ P.forwardRef((e, t) => {
  var r = jt(e, Cr);
  return /* @__PURE__ */ P.createElement(U5, jn({}, r, {
    ref: t
  }));
});
Gd.displayName = "CartesianAxis";
var Y5 = ["x1", "y1", "x2", "y2", "key"], G5 = ["offset"], X5 = ["xAxisId", "yAxisId"], Z5 = ["xAxisId", "yAxisId"];
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
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? y0(Object(r), !0).forEach(function(n) {
      J5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J5(e, t, r) {
  return (t = Q5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q5(e) {
  var t = eD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eD(e, t) {
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
function Ka(e, t) {
  if (e == null) return {};
  var r, n, i = tD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function tD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var rD = (e) => {
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
function V1(e) {
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
    } = r, u = Ka(r, Y5), f = (i = qt(u)) !== null && i !== void 0 ? i : {}, {
      offset: p
    } = f, h = Ka(f, G5);
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
function nD(e) {
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
  } = e, l = Ka(e, X5), c = i.map((s, u) => {
    var f = ht(ht({}, l), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(V1, {
      key: "line-".concat(u),
      option: n,
      lineItemProps: f
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, c);
}
function iD(e) {
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
  } = e, l = Ka(e, Z5), c = i.map((s, u) => {
    var f = ht(ht({}, l), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(V1, {
      option: n,
      lineItemProps: f,
      key: "line-".concat(u)
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, c);
}
function oD(e) {
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
  var s = l.map((f) => Math.round(f + i - i)).sort((f, p) => f - p);
  i !== s[0] && s.unshift(0);
  var u = s.map((f, p) => {
    var h = s[p + 1], g = h == null, v = g ? i + a - f : h - f;
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
function aD(e) {
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
  var s = c.map((f) => Math.round(f + i - i)).sort((f, p) => f - p);
  i !== s[0] && s.unshift(0);
  var u = s.map((f, p) => {
    var h = s[p + 1], g = h == null, v = g ? i + a - f : h - f;
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
var lD = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return fm(Yd(ht(ht(ht({}, Cr), r), {}, {
    ticks: pm(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.left, o.left + o.width, t);
}, sD = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return fm(Yd(ht(ht(ht({}, Cr), r), {}, {
    ticks: pm(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.top, o.top + o.height, t);
}, cD = {
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
  zIndex: Ze.grid
};
function Nl(e) {
  var t = bm(), r = wm(), n = xm(), i = ht(ht({}, jt(e, cD)), {}, {
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
    syncWithTicks: f,
    horizontalValues: p,
    verticalValues: h
  } = i, g = dt(), v = oe((E) => ug(E, "xAxis", o, g)), y = oe((E) => ug(E, "yAxis", a, g));
  if (!dr(s) || !dr(u) || !ne(l) || !ne(c))
    return null;
  var m = i.verticalCoordinatesGenerator || lD, b = i.horizontalCoordinatesGenerator || sD, {
    horizontalPoints: x,
    verticalPoints: w
  } = i;
  if ((!x || !x.length) && typeof b == "function") {
    var S = p && p.length, O = b({
      yAxis: y ? ht(ht({}, y), {}, {
        ticks: S ? p : y.ticks
      }) : void 0,
      width: t ?? s,
      height: r ?? u,
      offset: n
    }, S ? !0 : f);
    pa(Array.isArray(O), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O, "]")), Array.isArray(O) && (x = O);
  }
  if ((!w || !w.length) && typeof m == "function") {
    var C = h && h.length, T = m({
      xAxis: v ? ht(ht({}, v), {}, {
        ticks: C ? h : v.ticks
      }) : void 0,
      width: t ?? s,
      height: r ?? u,
      offset: n
    }, C ? !0 : f);
    pa(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof T, "]")), Array.isArray(T) && (w = T);
  }
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ P.createElement(rD, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ P.createElement(oD, sn({}, i, {
    horizontalPoints: x
  })), /* @__PURE__ */ P.createElement(aD, sn({}, i, {
    verticalPoints: w
  })), /* @__PURE__ */ P.createElement(nD, sn({}, i, {
    offset: n,
    horizontalPoints: x,
    xAxis: v,
    yAxis: y
  })), /* @__PURE__ */ P.createElement(iD, sn({}, i, {
    offset: n,
    verticalPoints: w,
    xAxis: v,
    yAxis: y
  }))));
}
Nl.displayName = "CartesianGrid";
var uD = {}, K1 = gt({
  name: "errorBars",
  initialState: uD,
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
  addErrorBar: C$,
  replaceErrorBar: k$,
  removeErrorBar: _$
} = K1.actions, dD = K1.reducer, fD = ["children"];
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
var vD = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, gD = /* @__PURE__ */ At(vD);
function yD(e) {
  var {
    children: t
  } = e, r = pD(e, fD);
  return /* @__PURE__ */ P.createElement(gD.Provider, {
    value: r
  }, t);
}
function Xd(e, t) {
  var r, n, i = oe((s) => vr(s, e)), o = oe((s) => gr(s, t)), a = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : Ye.allowDataOverflow, l = (n = o?.allowDataOverflow) !== null && n !== void 0 ? n : Ge.allowDataOverflow, c = a || l;
  return {
    needClip: c,
    needClipX: a,
    needClipY: l
  };
}
function H1(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = Ud(), {
    needClipX: o,
    needClipY: a,
    needClip: l
  } = Xd(t, r);
  if (!l || !i)
    return null;
  var {
    x: c,
    y: s,
    width: u,
    height: f
  } = i;
  return /* @__PURE__ */ P.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ P.createElement("rect", {
    x: o ? c : c - u / 2,
    y: a ? s : s - f / 2,
    width: o ? u : u * 2,
    height: a ? f : f * 2
  }));
}
function mD(e) {
  var t = Gi(e), r = 3, n = 2;
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
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : R1;
}
function mr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : R1;
}
var q1 = (e, t, r) => qr(e, "xAxis", yr(e, t), r), U1 = (e, t, r) => Hr(e, "xAxis", yr(e, t), r), Y1 = (e, t, r) => qr(e, "yAxis", mr(e, t), r), G1 = (e, t, r) => Hr(e, "yAxis", mr(e, t), r), xD = R([Oe, q1, Y1, U1, G1], (e, t, r, n, i) => hr(e, "xAxis") ? Un(t, n, !1) : Un(r, i, !1)), bD = (e, t) => t, X1 = R([Ml, bD], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), Z1 = (e) => {
  var t = Oe(e), r = hr(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, wD = (e, t) => {
  var r = Z1(e);
  return r === "yAxis" ? mr(e, t) : yr(e, t);
}, jD = (e, t, r) => Ra(e, Z1(e), wD(e, t), r), SD = R([X1, jD], (e, t) => {
  var r;
  if (!(e == null || t == null)) {
    var {
      stackId: n
    } = e, i = Sl(e);
    if (!(n == null || i == null)) {
      var o = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, a = o?.find((l) => l.key === i);
      if (a != null)
        return a.map((l) => [l[0], l[1]]);
    }
  }
}), OD = R([Oe, q1, Y1, U1, G1, SD, Wm, xD, X1, j_], (e, t, r, n, i, o, a, l, c, s) => {
  var {
    chartData: u,
    dataStartIndex: f,
    dataEndIndex: p
  } = a;
  if (!(c == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || l == null)) {
    var {
      data: h
    } = c, g;
    if (h && h.length > 0 ? g = h : g = u?.slice(f, p + 1), g != null)
      return KD({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataStartIndex: f,
        areaSettings: c,
        stackedData: o,
        displayedData: g,
        chartBaseValue: s,
        bandSize: l
      });
  }
}), PD = ["id"], CD = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pn.apply(null, arguments);
}
function J1(e, t) {
  if (e == null) return {};
  var r, n, i = kD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function kD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
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
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m0(Object(r), !0).forEach(function(n) {
      _D(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _D(e, t, r) {
  return (t = ED(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ED(e) {
  var t = AD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ha(e, t) {
  return e && e !== "none" ? e : t;
}
var TD = (e) => {
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
    color: Ha(n, i),
    value: ll(r, t),
    payload: e
  }];
}, ID = /* @__PURE__ */ P.memo((e) => {
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
  } = e, f = {
    dataDefinedOnItem: r,
    getPosition: On,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: o,
      dataKey: t,
      nameKey: void 0,
      name: ll(a, t),
      hide: l,
      type: s,
      color: Ha(n, o),
      unit: c,
      graphicalItemId: u
    }
  };
  return /* @__PURE__ */ P.createElement(A1, {
    tooltipEntrySettings: f
  });
});
function MD(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: i,
    dot: o,
    dataKey: a
  } = n, l = qt(n);
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
function DD(e) {
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
  return /* @__PURE__ */ P.createElement(b1, {
    value: t ? i : void 0
  }, r);
}
function x0(e) {
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
    id: f
  } = o, p = J1(o, PD), h = qt(p), g = vt(p);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, t?.length > 1 && /* @__PURE__ */ P.createElement(ct, {
    clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0
  }, /* @__PURE__ */ P.createElement(Ei, pn({}, g, {
    id: f,
    points: t,
    connectNulls: s,
    type: l,
    baseLine: r,
    layout: a,
    stroke: "none",
    className: "recharts-area-area"
  })), c !== "none" && /* @__PURE__ */ P.createElement(Ei, pn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: s,
    fill: "none",
    points: t
  })), c !== "none" && u && Array.isArray(r) && /* @__PURE__ */ P.createElement(Ei, pn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: s,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ P.createElement(MD, {
    points: t,
    props: p,
    clipPathId: i
  }));
}
function RD(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.y, c = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!pe(l) || !pe(c))
    return null;
  var s = n * Math.abs(l - c), u = Math.max(...o.map((f) => f.x || 0));
  return ne(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((f) => f.x || 0), u)), ne(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: 0,
    y: l < c ? l : l - s,
    width: u + (a ? parseInt("".concat(a), 10) : 1),
    height: Math.floor(s)
  }) : null;
}
function ND(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.x, c = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!pe(l) || !pe(c))
    return null;
  var s = n * Math.abs(l - c), u = Math.max(...o.map((f) => f.y || 0));
  return ne(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((f) => f.y || 0), u)), ne(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: l < c ? l : l - s,
    y: 0,
    width: s,
    height: Math.floor(u + (a ? parseInt("".concat(a), 10) : 1))
  }) : null;
}
function $D(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: i,
    strokeWidth: o
  } = e;
  return r === "vertical" ? /* @__PURE__ */ P.createElement(RD, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  }) : /* @__PURE__ */ P.createElement(ND, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  });
}
function zD(e) {
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
    animationEasing: f,
    onAnimationStart: p,
    onAnimationEnd: h
  } = n, g = tr(() => ({
    points: a,
    baseLine: l
  }), [a, l]), v = gl(g, "recharts-area-"), y = Fu(), [m, b] = W(!1), x = !m, w = _e(() => {
    typeof h == "function" && h(), b(!1);
  }, [h]), S = _e(() => {
    typeof p == "function" && p(), b(!0);
  }, [p]);
  if (y == null)
    return null;
  var O = i.current, C = o.current;
  return /* @__PURE__ */ P.createElement(DD, {
    showLabels: x,
    points: a
  }, n.children, /* @__PURE__ */ P.createElement(vl, {
    animationId: v,
    begin: s,
    duration: u,
    isActive: c,
    easing: f,
    onAnimationEnd: w,
    onAnimationStart: S,
    key: v
  }, (T) => {
    if (O) {
      var E = O.length / a.length, _ = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        T === 1 ? a : a.map((k, F) => {
          var N = Math.floor(F * E);
          if (O[N]) {
            var V = O[N];
            return Wn(Wn({}, k), {}, {
              x: ze(V.x, k.x, T),
              y: ze(V.y, k.y, T)
            });
          }
          return k;
        })
      ), D;
      return ne(l) ? D = ze(C, l, T) : Be(l) || Jt(l) ? D = ze(C, 0, T) : D = l.map((k, F) => {
        var N = Math.floor(F * E);
        if (Array.isArray(C) && C[N]) {
          var V = C[N];
          return Wn(Wn({}, k), {}, {
            x: ze(V.x, k.x, T),
            y: ze(V.y, k.y, T)
          });
        }
        return k;
      }), T > 0 && (i.current = _, o.current = D), /* @__PURE__ */ P.createElement(x0, {
        points: _,
        baseLine: D,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return T > 0 && (i.current = a, o.current = l), /* @__PURE__ */ P.createElement(ct, null, c && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ P.createElement($D, {
      alpha: T,
      points: a,
      baseLine: l,
      layout: y,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ P.createElement(ct, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ P.createElement(x0, {
      points: a,
      baseLine: l,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ P.createElement(j1, {
    label: n.label
  }));
}
function LD(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, i = ve(null), o = ve();
  return /* @__PURE__ */ P.createElement(zD, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  });
}
class BD extends L0 {
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
      height: f,
      id: p,
      baseLine: h,
      zIndex: g
    } = this.props;
    if (t)
      return null;
    var v = Pe("recharts-area", i), y = p, {
      r: m,
      strokeWidth: b
    } = mD(r), x = C1(r), w = m * 2 + b, S = l ? "url(#clipPath-".concat(x ? "" : "dots-").concat(y, ")") : void 0;
    return /* @__PURE__ */ P.createElement(Lt, {
      zIndex: g
    }, /* @__PURE__ */ P.createElement(ct, {
      className: v
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(H1, {
      clipPathId: y,
      xAxisId: c,
      yAxisId: s
    }), !x && /* @__PURE__ */ P.createElement("clipPath", {
      id: "clipPath-dots-".concat(y)
    }, /* @__PURE__ */ P.createElement("rect", {
      x: a - w / 2,
      y: o - w / 2,
      width: u + w,
      height: f + w
    }))), /* @__PURE__ */ P.createElement(LD, {
      needClip: l,
      clipPathId: y,
      props: this.props
    })), /* @__PURE__ */ P.createElement(c0, {
      points: n,
      mainColor: Ha(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: S
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ P.createElement(c0, {
      points: h,
      mainColor: Ha(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: S
    }));
  }
}
var WD = {
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
  zIndex: Ze.area
};
function FD(e) {
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
    isAnimationActive: f,
    legendType: p,
    stroke: h,
    xAxisId: g,
    yAxisId: v
  } = e, y = J1(e, CD), m = Pn(), b = Zb(), {
    needClip: x
  } = Xd(g, v), w = dt(), {
    points: S,
    isRange: O,
    baseLine: C
  } = (t = oe((F) => OD(F, e.id, w))) !== null && t !== void 0 ? t : {}, T = Ud();
  if (m !== "horizontal" && m !== "vertical" || T == null || b !== "AreaChart" && b !== "ComposedChart")
    return null;
  var {
    height: E,
    width: _,
    x: D,
    y: k
  } = T;
  return !S || !S.length ? null : /* @__PURE__ */ P.createElement(BD, pn({}, y, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    baseLine: C,
    connectNulls: a,
    dot: l,
    fill: c,
    fillOpacity: s,
    height: E,
    hide: u,
    layout: m,
    isAnimationActive: f,
    isRange: O,
    legendType: p,
    needClip: x,
    points: S,
    stroke: h,
    width: _,
    left: D,
    top: k,
    xAxisId: g,
    yAxisId: v
  }));
}
var VD = (e, t, r, n, i) => {
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
function KD(e) {
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
    xAxisTicks: f,
    yAxisTicks: p,
    bandSize: h
  } = e, g = i && i.length, v = VD(o, a, r, l, c), y = o === "horizontal", m = !1, b = s.map((w, S) => {
    var O, C, T, E;
    if (g)
      E = i[u + S];
    else {
      var _ = He(w, n);
      Array.isArray(_) ? (E = _, m = !0) : E = [v, _];
    }
    var D = (O = (C = E) === null || C === void 0 ? void 0 : C[1]) !== null && O !== void 0 ? O : null, k = D == null || g && !t && He(w, n) == null;
    if (y) {
      var F;
      return {
        x: nh({
          axis: l,
          ticks: f,
          bandSize: h,
          entry: w,
          index: S
        }),
        y: k ? null : (F = c.scale.map(D)) !== null && F !== void 0 ? F : null,
        value: E,
        payload: w
      };
    }
    return {
      x: k ? null : (T = l.scale.map(D)) !== null && T !== void 0 ? T : null,
      y: nh({
        axis: c,
        ticks: p,
        bandSize: h,
        entry: w,
        index: S
      }),
      value: E,
      payload: w
    };
  }), x;
  return g || m ? x = b.map((w) => {
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
  }) : x = y ? c.scale.map(v) : l.scale.map(v), {
    points: b,
    baseLine: x ?? 0,
    isRange: m
  };
}
function HD(e) {
  var t = jt(e, WD), r = dt();
  return /* @__PURE__ */ P.createElement(I1, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(T1, {
    legendPayload: TD(t)
  }), /* @__PURE__ */ P.createElement(ID, {
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
  }), /* @__PURE__ */ P.createElement(D1, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: hm(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ P.createElement(FD, pn({}, t, {
    id: n
  }))));
}
var Yi = /* @__PURE__ */ P.memo(HD, oo);
Yi.displayName = "Area";
var qD = process.env.NODE_ENV === "production", xc = "Invariant failed";
function UD(e, t) {
  if (qD)
    throw new Error(xc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(xc, ": ").concat(r) : xc;
  throw new Error(n);
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
function Zd(e) {
  return /* @__PURE__ */ P.createElement(tM, du({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, e));
}
var YD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (ne(t)) return t;
    var o = ne(n) || Be(n);
    return o ? t(n, i) : (o || UD(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")), r);
  };
}, GD = (e, t, r) => r, XD = (e, t) => t, yo = R([Ml, XD], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), ZD = R([yo], (e) => e?.maxBarSize), JD = (e, t, r, n) => n, QD = R([Oe, Ml, yr, mr, GD], (e, t, r, n, i) => t.filter((o) => e === "horizontal" ? o.xAxisId === r : o.yAxisId === n).filter((o) => o.isPanorama === i).filter((o) => o.hide === !1).filter((o) => o.type === "bar")), e8 = (e, t, r) => {
  var n = Oe(e), i = yr(e, t), o = mr(e, t);
  if (!(i == null || o == null))
    return n === "horizontal" ? Ra(e, "yAxis", o, r) : Ra(e, "xAxis", i, r);
}, t8 = (e, t) => {
  var r = Oe(e), n = yr(e, t), i = mr(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? cg(e, "xAxis", n) : cg(e, "yAxis", i);
}, r8 = R([QD, w_, t8], BM), n8 = (e, t, r) => {
  var n, i, o = yo(e, t);
  if (o == null)
    return 0;
  var a = yr(e, t), l = mr(e, t);
  if (a == null || l == null)
    return 0;
  var c = Oe(e), s = Qm(e), {
    maxBarSize: u
  } = o, f = Be(u) ? s : u, p, h;
  return c === "horizontal" ? (p = qr(e, "xAxis", a, r), h = Hr(e, "xAxis", a, r)) : (p = qr(e, "yAxis", l, r), h = Hr(e, "yAxis", l, r)), (n = (i = Un(p, h, !0)) !== null && i !== void 0 ? i : f) !== null && n !== void 0 ? n : 0;
}, Q1 = (e, t, r) => {
  var n = Oe(e), i = yr(e, t), o = mr(e, t);
  if (!(i == null || o == null)) {
    var a, l;
    return n === "horizontal" ? (a = qr(e, "xAxis", i, r), l = Hr(e, "xAxis", i, r)) : (a = qr(e, "yAxis", o, r), l = Hr(e, "yAxis", o, r)), Un(a, l);
  }
}, i8 = R([r8, Qm, b_, ex, n8, Q1, ZD], HM), o8 = (e, t, r) => {
  var n = yr(e, t);
  if (n != null)
    return qr(e, "xAxis", n, r);
}, a8 = (e, t, r) => {
  var n = mr(e, t);
  if (n != null)
    return qr(e, "yAxis", n, r);
}, l8 = (e, t, r) => {
  var n = yr(e, t);
  if (n != null)
    return Hr(e, "xAxis", n, r);
}, s8 = (e, t, r) => {
  var n = mr(e, t);
  if (n != null)
    return Hr(e, "yAxis", n, r);
}, c8 = R([i8, yo], UM), u8 = R([e8, yo], qM), d8 = R([rt, zu, o8, a8, l8, s8, c8, Oe, Wm, Q1, u8, yo, JD], (e, t, r, n, i, o, a, l, c, s, u, f, p) => {
  var {
    chartData: h,
    dataStartIndex: g,
    dataEndIndex: v
  } = c;
  if (!(f == null || a == null || t == null || l !== "horizontal" && l !== "vertical" || r == null || n == null || i == null || o == null || s == null)) {
    var {
      data: y
    } = f, m;
    if (y != null && y.length > 0 ? m = y : m = h?.slice(g, v + 1), m != null)
      return L8({
        layout: l,
        barSettings: f,
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
}), f8 = ["index"];
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fu.apply(null, arguments);
}
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
var ew = /* @__PURE__ */ At(void 0), v8 = (e) => {
  var t = zt(ew);
  if (t != null)
    return t.stackId;
  if (e != null)
    return hm(e);
}, g8 = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), y8 = (e) => {
  var t = zt(ew);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(g8(r, e), ")");
  }
}, tw = (e) => {
  var {
    index: t
  } = e, r = p8(e, f8), n = y8(t);
  return /* @__PURE__ */ P.createElement(ct, fu({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, m8 = ["onMouseEnter", "onMouseLeave", "onClick"], x8 = ["value", "background", "tooltipPosition"], b8 = ["id"], w8 = ["onMouseEnter", "onClick", "onMouseLeave"];
function Ur() {
  return Ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ur.apply(null, arguments);
}
function b0(e, t) {
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
    t % 2 ? b0(Object(r), !0).forEach(function(n) {
      j8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function j8(e, t, r) {
  return (t = S8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S8(e) {
  var t = O8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function O8(e, t) {
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
  if (e == null) return {};
  var r, n, i = P8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function P8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var C8 = (e) => {
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
    value: ll(r, t),
    payload: e
  }];
}, k8 = /* @__PURE__ */ P.memo((e) => {
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
      name: ll(o, t),
      hide: a,
      type: c,
      color: i,
      unit: l,
      graphicalItemId: s
    }
  };
  return /* @__PURE__ */ P.createElement(A1, {
    tooltipEntrySettings: u
  });
});
function _8(e) {
  var t = oe(wn), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: o
  } = e, {
    onMouseEnter: a,
    onMouseLeave: l,
    onClick: c
  } = o, s = qa(o, m8), u = k1(a, n, o.id), f = _1(l), p = E1(c, n, o.id);
  if (!i || r == null)
    return null;
  var h = Gi(i);
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: YM(i, Ze.barBackground)
  }, r.map((g, v) => {
    var {
      value: y,
      background: m,
      tooltipPosition: b
    } = g, x = qa(g, x8);
    if (!m)
      return null;
    var w = u(g, v), S = f(g, v), O = p(g, v), C = xt(xt(xt(xt(xt({
      option: i,
      isActive: String(v) === t
    }, x), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, m), h), Eu(s, g, v)), {}, {
      onMouseEnter: w,
      onMouseLeave: S,
      onClick: O,
      dataKey: n,
      index: v,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ P.createElement(Zd, Ur({
      key: "background-bar-".concat(v)
    }, C));
  }));
}
function E8(e) {
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
  return /* @__PURE__ */ P.createElement(b1, {
    value: t ? i : void 0
  }, r);
}
function A8(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: o,
    dataKey: a
  } = e, l = oe(wn), c = oe(Yb), s = r && String(i.originalDataIndex) === l && (c == null || a === c), [u, f] = W(!1), [p, h] = W(!1);
  Se(() => {
    var x;
    return s ? (f(!0), x = requestAnimationFrame(() => {
      h(!0);
    })) : h(!1), () => {
      cancelAnimationFrame(x);
    };
  }, [s]);
  var g = _e(() => {
    s || f(!1);
  }, [s]), v = s && p, y = s || u, m;
  s ? r === !0 ? m = t : m = r : m = t;
  var b = /* @__PURE__ */ P.createElement(Zd, Ur({}, n, {
    name: String(n.name)
  }, i, {
    isActive: v,
    option: m,
    index: o,
    dataKey: a,
    onTransitionEnd: g
  }));
  return y ? /* @__PURE__ */ P.createElement(Lt, {
    zIndex: Ze.activeBar
  }, /* @__PURE__ */ P.createElement(tw, {
    index: i.originalDataIndex
  }, b)) : b;
}
function T8(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: o
  } = e;
  return /* @__PURE__ */ P.createElement(Zd, Ur({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: o
  }));
}
function I8(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = qt(n)) !== null && t !== void 0 ? t : {}, {
    id: o
  } = i, a = qa(i, b8), {
    shape: l,
    dataKey: c,
    activeBar: s
  } = n, {
    onMouseEnter: u,
    onClick: f,
    onMouseLeave: p
  } = n, h = qa(n, w8), g = k1(u, c, o), v = _1(p), y = E1(f, c, o);
  return r ? /* @__PURE__ */ P.createElement(P.Fragment, null, r.map((m, b) => /* @__PURE__ */ P.createElement(tw, Ur({
    index: m.originalDataIndex,
    key: "rectangle-".concat(m?.x, "-").concat(m?.y, "-").concat(m?.value, "-").concat(b),
    className: "recharts-bar-rectangle"
  }, Eu(h, m, b), {
    onMouseEnter: g(m, b),
    onMouseLeave: v(m, b),
    onClick: y(m, b)
  }), s ? /* @__PURE__ */ P.createElement(A8, {
    shape: l,
    activeBar: s,
    baseProps: a,
    entry: m,
    index: b,
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
    /* @__PURE__ */ P.createElement(T8, {
      shape: l,
      baseProps: a,
      entry: m,
      index: b,
      dataKey: c
    })
  )))) : null;
}
function M8(e) {
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
  } = t, f = r.current, p = gl(t, "recharts-bar-"), [h, g] = W(!1), v = !h, y = _e(() => {
    typeof s == "function" && s(), g(!1);
  }, [s]), m = _e(() => {
    typeof u == "function" && u(), g(!0);
  }, [u]);
  return /* @__PURE__ */ P.createElement(E8, {
    showLabels: v,
    rects: n
  }, /* @__PURE__ */ P.createElement(vl, {
    animationId: p,
    begin: a,
    duration: l,
    isActive: o,
    easing: c,
    onAnimationEnd: y,
    onAnimationStart: m,
    key: p
  }, (b) => {
    var x = b === 1 ? n : n?.map((w, S) => {
      var O = f && f[S];
      if (O)
        return xt(xt({}, w), {}, {
          x: ze(O.x, w.x, b),
          y: ze(O.y, w.y, b),
          width: ze(O.width, w.width, b),
          height: ze(O.height, w.height, b)
        });
      if (i === "horizontal") {
        var C = ze(0, w.height, b), T = ze(w.stackedBarStart, w.y, b);
        return xt(xt({}, w), {}, {
          y: T,
          height: C
        });
      }
      var E = ze(0, w.width, b), _ = ze(w.stackedBarStart, w.x, b);
      return xt(xt({}, w), {}, {
        width: E,
        x: _
      });
    });
    return b > 0 && (r.current = x ?? null), x == null ? null : /* @__PURE__ */ P.createElement(ct, null, /* @__PURE__ */ P.createElement(I8, {
      props: t,
      data: x
    }));
  }), /* @__PURE__ */ P.createElement(j1, {
    label: t.label
  }), t.children);
}
function D8(e) {
  var t = ve(null);
  return /* @__PURE__ */ P.createElement(M8, {
    previousRectanglesRef: t,
    props: e
  });
}
var rw = 0, R8 = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // getValueByDataKey does not validate the output type
    errorVal: He(e, t)
  };
};
class N8 extends L0 {
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
    var u = Pe("recharts-bar", i), f = s;
    return /* @__PURE__ */ P.createElement(ct, {
      className: u,
      id: s
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(H1, {
      clipPathId: f,
      xAxisId: o,
      yAxisId: a
    })), /* @__PURE__ */ P.createElement(ct, {
      className: "recharts-bar-rectangles",
      clipPath: l ? "url(#clipPath-".concat(f, ")") : void 0
    }, /* @__PURE__ */ P.createElement(_8, {
      data: r,
      dataKey: n,
      background: c,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ P.createElement(D8, this.props)));
  }
}
var $8 = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: rw,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Ze.bar
};
function z8(e) {
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
    needClip: f
  } = Xd(t, r), p = Pn(), h = dt(), g = NI(e.children, Kd), v = oe((b) => d8(b, e.id, h, g));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var y, m = v?.[0];
  return m == null || m.height == null || m.width == null ? y = 0 : y = p === "vertical" ? m.height / 2 : m.width / 2, /* @__PURE__ */ P.createElement(yD, {
    xAxisId: t,
    yAxisId: r,
    data: v,
    dataPointFormatter: R8,
    errorBarOffset: y
  }, /* @__PURE__ */ P.createElement(N8, Ur({}, e, {
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
    animationDuration: c,
    animationEasing: s,
    isAnimationActive: u
  })));
}
function L8(e) {
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
    stackedData: f,
    displayedData: p,
    offset: h,
    cells: g,
    parentViewBox: v,
    dataStartIndex: y
  } = e, m = t === "horizontal" ? c : l, b = f ? m.scale.domain() : null, x = xP({
    numericAxis: m
  }), w = m.scale.map(x);
  return p.map((S, O) => {
    var C, T, E, _, D, k;
    if (f) {
      var F = f[O + y];
      if (F == null)
        return null;
      C = hP(F, b);
    } else
      C = He(S, r), Array.isArray(C) || (C = [x, C]);
    var N = YD(n, rw)(C[1], O);
    if (t === "horizontal") {
      var V, U = c.scale.map(C[0]), J = c.scale.map(C[1]);
      if (U == null || J == null)
        return null;
      T = ih({
        axis: l,
        ticks: s,
        bandSize: a,
        offset: o.offset,
        entry: S,
        index: O
      }), E = (V = J ?? U) !== null && V !== void 0 ? V : void 0, _ = o.size;
      var $ = U - J;
      if (D = Jt($) ? 0 : $, k = {
        x: T,
        y: h.top,
        width: _,
        height: h.height
      }, Math.abs(N) > 0 && Math.abs(D) < Math.abs(N)) {
        var re = Ct(D || N) * (Math.abs(N) - Math.abs(D));
        E -= re, D += re;
      }
    } else {
      var te = l.scale.map(C[0]), z = l.scale.map(C[1]);
      if (te == null || z == null)
        return null;
      if (T = te, E = ih({
        axis: c,
        ticks: u,
        bandSize: a,
        offset: o.offset,
        entry: S,
        index: O
      }), _ = z - te, D = o.size, k = {
        x: h.left,
        y: E,
        width: h.width,
        height: D
      }, Math.abs(N) > 0 && Math.abs(_) < Math.abs(N)) {
        var B = Ct(_ || N) * (Math.abs(N) - Math.abs(_));
        _ += B;
      }
    }
    if (T == null || E == null || _ == null || D == null || !i && (_ === 0 || D === 0))
      return null;
    var L = xt(xt({}, S), {}, {
      stackedBarStart: w,
      x: T,
      y: E,
      width: _,
      height: D,
      value: f ? C : C[1],
      payload: S,
      background: k,
      tooltipPosition: {
        x: T + _ / 2,
        y: E + D / 2
      },
      parentViewBox: v,
      originalDataIndex: O
    }, g && g[O] && g[O].props);
    return L;
  }).filter(Boolean);
}
function B8(e) {
  var t = jt(e, $8), r = v8(t.stackId), n = dt();
  return /* @__PURE__ */ P.createElement(I1, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(T1, {
    legendPayload: C8(t)
  }), /* @__PURE__ */ P.createElement(k8, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ P.createElement(D1, {
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
  }), /* @__PURE__ */ P.createElement(Lt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(z8, Ur({}, t, {
    id: i
  })))));
}
var pu = /* @__PURE__ */ P.memo(B8, oo);
pu.displayName = "Bar";
var W8 = ["domain", "range"], F8 = ["domain", "range"];
function w0(e, t) {
  if (e == null) return {};
  var r, n, i = V8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function V8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function j0(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function nw(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = w0(e, W8), {
    domain: o,
    range: a
  } = t, l = w0(t, F8);
  return !j0(r, o) || !j0(n, a) ? !1 : oo(i, l);
}
var K8 = ["type"], H8 = ["dangerouslySetInnerHTML", "ticks", "scale"], q8 = ["id", "scale"];
function hu() {
  return hu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hu.apply(null, arguments);
}
function S0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function O0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? S0(Object(r), !0).forEach(function(n) {
      U8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U8(e, t, r) {
  return (t = Y8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y8(e) {
  var t = G8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function G8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vu(e, t) {
  if (e == null) return {};
  var r, n, i = X8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function X8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Z8(e) {
  var t = $e(), r = ve(null), n = Fu(), {
    type: i
  } = e, o = vu(e, K8), a = bl(n, "xAxis", i), l = tr(() => {
    if (a != null)
      return O0(O0({}, o), {}, {
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
var J8 = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = oe(zu), i = dt(), o = "xAxis", a = oe((m) => Cb(m, o, t, i)), l = oe((m) => Sb(m, t)), c = oe((m) => n3(m, t)), s = oe((m) => Hx(m, t));
  if (l == null || c == null || s == null)
    return null;
  var {
    dangerouslySetInnerHTML: u,
    ticks: f,
    scale: p
  } = e, h = vu(e, H8), {
    id: g,
    scale: v
  } = s, y = vu(s, q8);
  return /* @__PURE__ */ P.createElement(Gd, hu({}, h, y, {
    x: c.x,
    y: c.y,
    width: l.width,
    height: l.height,
    className: Pe("recharts-".concat(o, " ").concat(o), r),
    viewBox: n,
    ticks: a,
    axisType: o,
    axisId: t
  }));
}, Q8 = {
  allowDataOverflow: Ye.allowDataOverflow,
  allowDecimals: Ye.allowDecimals,
  allowDuplicatedCategory: Ye.allowDuplicatedCategory,
  angle: Ye.angle,
  axisLine: Cr.axisLine,
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
  tickLine: Cr.tickLine,
  tickSize: Cr.tickSize,
  type: Ye.type,
  niceTicks: Ye.niceTicks,
  xAxisId: 0
}, eR = (e) => {
  var t = jt(e, Q8);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Z8, {
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
  }), /* @__PURE__ */ P.createElement(J8, t));
}, $l = /* @__PURE__ */ P.memo(eR, nw);
$l.displayName = "XAxis";
var tR = ["type"], rR = ["dangerouslySetInnerHTML", "ticks", "scale"], nR = ["id", "scale"];
function gu() {
  return gu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gu.apply(null, arguments);
}
function P0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P0(Object(r), !0).forEach(function(n) {
      iR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P0(Object(r)).forEach(function(n) {
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
function yu(e, t) {
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
  var t = $e(), r = ve(null), n = Fu(), {
    type: i
  } = e, o = yu(e, tR), a = bl(n, "yAxis", i), l = tr(() => {
    if (a != null)
      return C0(C0({}, o), {}, {
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
  } = e, o = ve(null), a = ve(null), l = oe(zu), c = dt(), s = $e(), u = "yAxis", f = oe((O) => Ob(O, t)), p = oe((O) => o3(O, t)), h = oe((O) => Cb(O, u, t, c)), g = oe((O) => qx(O, t));
  if (Et(() => {
    if (!(n !== "auto" || !f || qd(i) || /* @__PURE__ */ Rt(i) || g == null)) {
      var O = o.current;
      if (O) {
        var C = O.getCalculatedWidth();
        Math.round(f.width) !== Math.round(C) && s(TM({
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
    s,
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
  } = e, b = yu(e, rR), {
    id: x,
    scale: w
  } = g, S = yu(g, nR);
  return /* @__PURE__ */ P.createElement(Gd, gu({}, b, S, {
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
  allowDataOverflow: Ge.allowDataOverflow,
  allowDecimals: Ge.allowDecimals,
  allowDuplicatedCategory: Ge.allowDuplicatedCategory,
  angle: Ge.angle,
  axisLine: Cr.axisLine,
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
  tickLine: Cr.tickLine,
  tickSize: Cr.tickSize,
  type: Ge.type,
  niceTicks: Ge.niceTicks,
  width: Ge.width,
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
}, zl = /* @__PURE__ */ P.memo(dR, nw);
zl.displayName = "YAxis";
var fR = (e, t) => t, Jd = R([fR, Oe, lx, it, Kb, Dr, kT, rt], DT);
function pR(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function Qd(e) {
  var t = e.currentTarget.getBoundingClientRect(), r, n;
  if (pR(e)) {
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
var iw = Nt("mouseClick"), ow = eo();
ow.startListening({
  actionCreator: iw,
  effect: (e, t) => {
    var r = e.payload, n = Jd(t.getState(), Qd(r));
    n?.activeIndex != null && t.dispatch(w3({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var mu = Nt("mouseMove"), aw = eo(), $n = null, Zr = null, bc = null;
aw.startListening({
  actionCreator: mu,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), {
      throttleDelay: i,
      throttledEvents: o
    } = n.eventSettings, a = o === "all" || o?.includes("mousemove");
    $n !== null && (cancelAnimationFrame($n), $n = null), Zr !== null && (typeof i != "number" || !a) && (clearTimeout(Zr), Zr = null), bc = Qd(r);
    var l = () => {
      var c = t.getState(), s = vo(c, c.tooltip.settings.shared);
      if (!bc) {
        $n = null, Zr = null;
        return;
      }
      if (s === "axis") {
        var u = Jd(c, bc);
        u?.activeIndex != null ? t.dispatch(Db({
          activeIndex: u.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: u.activeCoordinate
        })) : t.dispatch(Mb());
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
function hR(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var k0 = {
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
}, lw = gt({
  name: "rootProps",
  initialState: k0,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : k0.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), vR = lw.reducer, {
  updateOptions: gR
} = lw.actions, yR = null, mR = {
  updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
}, sw = gt({
  name: "polarOptions",
  initialState: yR,
  reducers: mR
}), {
  updatePolarOptions: E$
} = sw.actions, xR = sw.reducer, cw = Nt("keyDown"), uw = Nt("focus"), dw = Nt("blur"), Ll = eo(), zn = null, Jr = null, Ko = null;
Ll.startListening({
  actionCreator: cw,
  effect: (e, t) => {
    Ko = e.payload, zn !== null && (cancelAnimationFrame(zn), zn = null);
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
        } = l.tooltip, u = Ko;
        if (u !== "ArrowRight" && u !== "ArrowLeft" && u !== "Enter")
          return;
        var f = Ai(s, bn(l), Jn(l), ei(l)), p = f == null ? -1 : Number(f), h = !Number.isFinite(p) || p < 0, g = Dr(l), v = bn(l), y = vo(l, l.tooltip.settings.shared);
        if (u === "Enter") {
          if (h)
            return;
          var m = za(l, y, "hover", String(s.index));
          t.dispatch($a({
            active: !s.active,
            activeIndex: s.index,
            activeCoordinate: m
          }));
          return;
        }
        var b = u3(l), x = b === "left-to-right" ? 1 : -1, w = u === "ArrowRight" ? 1 : -1, S;
        if (h) {
          var O = Jn(l), C = ei(l), T = w * x, E = (N) => ({
            active: !1,
            index: String(N),
            dataKey: void 0,
            graphicalItemId: void 0,
            coordinate: void 0
          });
          if (S = -1, T > 0) {
            for (var _ = 0; _ < v.length; _++)
              if (Ai(E(_), v, O, C) != null) {
                S = _;
                break;
              }
          } else
            for (var D = v.length - 1; D >= 0; D--)
              if (Ai(E(D), v, O, C) != null) {
                S = D;
                break;
              }
          if (S < 0)
            return;
        } else {
          S = p + w * x;
          var k = g?.length || v.length;
          if (k === 0 || S >= k || S < 0)
            return;
        }
        var F = za(l, y, "hover", String(S));
        t.dispatch($a({
          active: !0,
          activeIndex: S.toString(),
          activeCoordinate: F
        }));
      } finally {
        zn = null, Jr = null;
      }
    };
    if (!o) {
      a();
      return;
    }
    n === "raf" ? zn = requestAnimationFrame(a) : typeof n == "number" && Jr === null && (a(), Ko = null, Jr = setTimeout(() => {
      Ko ? a() : (Jr = null, zn = null);
    }, n));
  }
});
Ll.startListening({
  actionCreator: uw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var o = "0", a = vo(r, r.tooltip.settings.shared), l = za(r, a, "hover", String(o));
        t.dispatch($a({
          active: !0,
          activeIndex: o,
          activeCoordinate: l
        }));
      }
    }
  }
});
Ll.startListening({
  actionCreator: dw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      i.active && t.dispatch($a({
        active: !1,
        activeIndex: i.index,
        activeCoordinate: i.coordinate
      }));
    }
  }
});
function fw(e) {
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
var Vt = Nt("externalEvent"), pw = eo(), Ho = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), wc = /* @__PURE__ */ new Map();
pw.startListening({
  actionCreator: Vt,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      var i = n.type, o = fw(n);
      wc.set(i, {
        handler: r,
        reactEvent: o
      });
      var a = Ho.get(i);
      a !== void 0 && (cancelAnimationFrame(a), Ho.delete(i));
      var l = t.getState(), {
        throttleDelay: c,
        throttledEvents: s
      } = l.eventSettings, u = s, f = u === "all" || u?.includes(i), p = Oi.get(i);
      p !== void 0 && (typeof c != "number" || !f) && (clearTimeout(p), Oi.delete(i));
      var h = () => {
        var y = wc.get(i);
        try {
          if (!y)
            return;
          var {
            handler: m,
            reactEvent: b
          } = y, x = t.getState(), w = {
            activeCoordinate: fT(x),
            activeDataKey: Yb(x),
            activeIndex: wn(x),
            activeLabel: Ub(x),
            activeTooltipIndex: wn(x),
            isTooltipActive: pT(x)
          };
          m && m(w, b);
        } finally {
          Ho.delete(i), Oi.delete(i), wc.delete(i);
        }
      };
      if (!f) {
        h();
        return;
      }
      if (c === "raf") {
        var g = requestAnimationFrame(h);
        Ho.set(i, g);
      } else if (typeof c == "number") {
        if (!Oi.has(i)) {
          h();
          var v = setTimeout(h, c);
          Oi.set(i, v);
        }
      } else
        h();
    }
  }
});
var bR = R([ci], (e) => e.tooltipItemPayloads), wR = R([bR, (e, t) => t, (e, t, r) => r], (e, t, r) => {
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
}), hw = Nt("touchMove"), vw = eo(), Qr = null, $r = null, _0 = null, Pi = null;
vw.startListening({
  actionCreator: hw,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      Pi = fw(r);
      var n = t.getState(), {
        throttleDelay: i,
        throttledEvents: o
      } = n.eventSettings, a = o === "all" || o.includes("touchmove");
      Qr !== null && (cancelAnimationFrame(Qr), Qr = null), $r !== null && (typeof i != "number" || !a) && (clearTimeout($r), $r = null), _0 = Array.from(r.touches).map((c) => Qd({
        clientX: c.clientX,
        clientY: c.clientY,
        currentTarget: r.currentTarget
      }));
      var l = () => {
        if (Pi != null) {
          var c = t.getState(), s = vo(c, c.tooltip.settings.shared);
          if (s === "axis") {
            var u, f = (u = _0) === null || u === void 0 ? void 0 : u[0];
            if (f == null) {
              Qr = null, $r = null;
              return;
            }
            var p = Jd(c, f);
            p?.activeIndex != null && t.dispatch(Db({
              activeIndex: p.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: p.activeCoordinate
            }));
          } else if (s === "item") {
            var h, g = Pi.touches[0];
            if (document.elementFromPoint == null || g == null)
              return;
            var v = document.elementFromPoint(g.clientX, g.clientY);
            if (!v || !v.getAttribute)
              return;
            var y = v.getAttribute(CP), m = (h = v.getAttribute(kP)) !== null && h !== void 0 ? h : void 0, b = _n(c).find((S) => S.id === m);
            if (y == null || b == null || m == null)
              return;
            var {
              dataKey: x
            } = b, w = wR(c, y, m);
            t.dispatch(Ib({
              activeDataKey: x,
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
      i === "raf" ? Qr = requestAnimationFrame(l) : typeof i == "number" && $r === null && (l(), Pi = null, $r = setTimeout(() => {
        Pi ? l() : ($r = null, Qr = null);
      }, i));
    }
  }
});
var gw = {
  throttleDelay: "raf",
  throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
}, yw = gt({
  name: "eventSettings",
  initialState: gw,
  reducers: {
    setEventSettings: (e, t) => {
      t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents);
    }
  }
}), {
  setEventSettings: jR
} = yw.actions, SR = yw.reducer, OR = My({
  brush: XM,
  cartesianAxis: IM,
  chartData: u6,
  errorBars: dD,
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
      }).concat([ow.middleware, aw.middleware, Ll.middleware, pw.middleware, vw.middleware]);
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
      return typeof n == "function" && (i = n()), i.concat(Jy({
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
  } = e, i = dt(), o = ve(null);
  if (i)
    return r;
  o.current == null && (o.current = PR(t, n));
  var a = Tu;
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
var _R = /* @__PURE__ */ bu(kR, oo);
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
}, TR = /* @__PURE__ */ bu(AR, oo);
function E0(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = ve(null), i = $e();
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
function A0(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = oe(NT);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((a) => a < 0), o = n.filter((a) => a > 0);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, i.map((a) => /* @__PURE__ */ P.createElement(E0, {
    key: a,
    zIndex: a,
    isPanorama: r
  })), t, o.map((a) => /* @__PURE__ */ P.createElement(E0, {
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
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ua.apply(null, arguments);
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
  var r = bm(), n = wm(), i = Tm();
  if (!dr(r) || !dr(n))
    return null;
  var {
    children: o,
    otherAttributes: a,
    title: l,
    desc: c
  } = e, s, u;
  return a != null && (typeof a.tabIndex == "number" ? s = a.tabIndex : s = i ? 0 : void 0, typeof a.role == "string" ? u = a.role : u = i ? "application" : void 0), /* @__PURE__ */ P.createElement(G0, Ua({}, a, {
    title: l,
    desc: c,
    role: u,
    tabIndex: s,
    width: r,
    height: n,
    style: RR,
    ref: t
  }), o);
}), $R = (e) => {
  var {
    children: t
  } = e, r = oe(dl);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: o,
    x: a
  } = r;
  return /* @__PURE__ */ P.createElement(G0, {
    width: n,
    height: i,
    x: a,
    y: o
  }, t);
}, T0 = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r
  } = e, n = MR(e, IR), i = dt();
  return i ? /* @__PURE__ */ P.createElement($R, null, /* @__PURE__ */ P.createElement(A0, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ P.createElement(NR, Ua({
    ref: t
  }, n), /* @__PURE__ */ P.createElement(A0, {
    isPanorama: !1
  }, r));
});
function zR() {
  var e = $e(), [t, r] = W(null), n = oe(PP);
  return Se(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), o = i.width / t.offsetWidth;
      pe(o) && o !== n && e(sP(o));
    }
  }, [t, e, n]), r;
}
function I0(e, t) {
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
    t % 2 ? I0(Object(r), !0).forEach(function(n) {
      BR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I0(Object(r)).forEach(function(n) {
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
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kr.apply(null, arguments);
}
var VR = () => (x6(), null);
function Ya(e) {
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
  var r, n, i = ve(null), [o, a] = W({
    containerWidth: Ya((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ya((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), l = _e((s, u) => {
    a((f) => {
      var p = Math.round(s), h = Math.round(u);
      return f.containerWidth === p && f.containerHeight === h ? f : {
        containerWidth: p,
        containerHeight: h
      };
    });
  }, []), c = _e((s) => {
    if (typeof t == "function" && t(s), i.current != null && (i.current.disconnect(), i.current = null), s != null && typeof ResizeObserver < "u") {
      var {
        width: u,
        height: f
      } = s.getBoundingClientRect();
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
      h.observe(s), i.current = h;
    }
  }, [t, l]);
  return Se(() => () => {
    var s = i.current;
    s?.disconnect();
  }, [l]), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(no, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: c
  }, e)));
}), HR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, o] = W({
    containerWidth: Ya(r),
    containerHeight: Ya(n)
  }), a = _e((c, s) => {
    o((u) => {
      var f = Math.round(c), p = Math.round(s);
      return u.containerWidth === f && u.containerHeight === p ? u : {
        containerWidth: f,
        containerHeight: p
      };
    });
  }, []), l = _e((c) => {
    if (typeof t == "function" && t(c), c != null) {
      var {
        width: s,
        height: u
      } = c.getBoundingClientRect();
      a(s, u);
    }
  }, [t, a]);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(no, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: l
  }, e)));
}), qR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(no, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: t
  }, e)));
}), UR = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ P.createElement(HR, Kr({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ P.createElement(qR, Kr({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(no, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Kr({
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
    onMouseDown: c,
    onMouseEnter: s,
    onMouseLeave: u,
    onMouseMove: f,
    onMouseUp: p,
    onTouchEnd: h,
    onTouchMove: g,
    onTouchStart: v,
    style: y,
    width: m,
    responsive: b,
    dispatchTouchEvents: x = !0
  } = e, w = ve(null), S = $e(), [O, C] = W(null), [T, E] = W(null), _ = zR(), D = Lu(), k = D?.width > 0 ? D.width : m, F = D?.height > 0 ? D.height : i, N = _e((X) => {
    _(X), typeof t == "function" && t(X), C(X), E(X), X != null && (w.current = X);
  }, [_, t, C, E]), V = _e((X) => {
    S(iw(X)), S(Vt({
      handler: o,
      reactEvent: X
    }));
  }, [S, o]), U = _e((X) => {
    S(mu(X)), S(Vt({
      handler: s,
      reactEvent: X
    }));
  }, [S, s]), J = _e((X) => {
    S(Mb()), S(Vt({
      handler: u,
      reactEvent: X
    }));
  }, [S, u]), $ = _e((X) => {
    S(mu(X)), S(Vt({
      handler: f,
      reactEvent: X
    }));
  }, [S, f]), re = _e(() => {
    S(uw());
  }, [S]), te = _e(() => {
    S(dw());
  }, [S]), z = _e((X) => {
    S(cw(X.key));
  }, [S]), B = _e((X) => {
    S(Vt({
      handler: a,
      reactEvent: X
    }));
  }, [S, a]), L = _e((X) => {
    S(Vt({
      handler: l,
      reactEvent: X
    }));
  }, [S, l]), H = _e((X) => {
    S(Vt({
      handler: c,
      reactEvent: X
    }));
  }, [S, c]), le = _e((X) => {
    S(Vt({
      handler: p,
      reactEvent: X
    }));
  }, [S, p]), me = _e((X) => {
    S(Vt({
      handler: v,
      reactEvent: X
    }));
  }, [S, v]), de = _e((X) => {
    x && S(hw(X)), S(Vt({
      handler: g,
      reactEvent: X
    }));
  }, [S, x, g]), ue = _e((X) => {
    S(Vt({
      handler: h,
      reactEvent: X
    }));
  }, [S, h]), Z = YR(b);
  return /* @__PURE__ */ P.createElement(r1.Provider, {
    value: O
  }, /* @__PURE__ */ P.createElement(Z2.Provider, {
    value: T
  }, /* @__PURE__ */ P.createElement(Z, {
    width: k ?? y?.width,
    height: F ?? y?.height,
    className: Pe("recharts-wrapper", n),
    style: LR({
      position: "relative",
      cursor: "default",
      width: k,
      height: F
    }, y),
    onClick: V,
    onContextMenu: B,
    onDoubleClick: L,
    onFocus: re,
    onBlur: te,
    onKeyDown: z,
    onMouseDown: H,
    onMouseEnter: U,
    onMouseLeave: J,
    onMouseMove: $,
    onMouseUp: le,
    onTouchEnd: ue,
    onTouchMove: de,
    onTouchStart: me,
    ref: N
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
    compact: c,
    title: s,
    desc: u
  } = e, f = ZR(e, XR), p = qt(f);
  return c ? /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(no, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement(T0, {
    otherAttributes: p,
    title: s,
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
  }, /* @__PURE__ */ P.createElement(T0, {
    otherAttributes: p,
    title: s,
    desc: u,
    ref: t
  }, /* @__PURE__ */ P.createElement(o5, null, o)));
});
function xu() {
  return xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xu.apply(null, arguments);
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
function eN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? M0(Object(r), !0).forEach(function(n) {
      tN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M0(Object(r)).forEach(function(n) {
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
}, gw), mw = /* @__PURE__ */ ut(function(t, r) {
  var n, i = jt(t.categoricalChartProps, oN), {
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
  return /* @__PURE__ */ P.createElement(CR, {
    preloadedState: {
      options: u
    },
    reduxStoreName: (n = s.id) !== null && n !== void 0 ? n : o
  }, /* @__PURE__ */ P.createElement(GM, {
    chartData: s.data
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
  }), /* @__PURE__ */ P.createElement(QR, xu({}, i, {
    ref: r
  })));
}), aN = ["axis", "item"], lN = /* @__PURE__ */ ut((e, t) => /* @__PURE__ */ P.createElement(mw, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: aN,
  tooltipPayloadSearcher: n1,
  categoricalChartProps: e,
  ref: t
})), sN = ["axis"], xw = /* @__PURE__ */ ut((e, t) => /* @__PURE__ */ P.createElement(mw, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: sN,
  tooltipPayloadSearcher: n1,
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
] }), D0 = [
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
}, hN = {
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
function bw(e) {
  return Math.abs(e) >= 1e9 ? `${(e / 1e9).toFixed(1)}B` : Math.abs(e) >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : Math.abs(e) >= 1e3 ? `${(e / 1e3).toFixed(1)}K` : String(e);
}
function R0(e, t) {
  let r = 0;
  e.forEach((i) => {
    Object.keys(t).forEach((o) => {
      const a = Number(i[o] ?? i[`${o}_Proj`] ?? 0);
      a > r && (r = a);
    });
  });
  const n = bw(r);
  return Math.max(40, n.length * 7 + 16);
}
const vN = ({ active: e, payload: t, label: r, metricsConfig: n }) => {
  if (e && t && t.length) {
    const i = t.filter((o) => {
      if (o.dataKey.endsWith("_Proj")) {
        const a = o.dataKey.replace("_Proj", "");
        if (t.some((l) => l.dataKey === a)) return !1;
      }
      return !0;
    });
    return /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", zIndex: 50, position: "relative", color: "#0f172a" }, children: [
      /* @__PURE__ */ d.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid #f1f5f9", paddingBottom: "4px", fontSize: "14px", color: "#1e293b" }, children: r }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: i.map((o, a) => {
        const l = o.dataKey.endsWith("_Proj"), c = l ? o.dataKey.replace("_Proj", "") : o.dataKey, s = n[c] || { label: c, color: o.color };
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ d.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: o.color } }),
            /* @__PURE__ */ d.jsxs("span", { style: { color: "#475569", fontSize: "12px", fontWeight: 500 }, children: [
              s.label,
              " ",
              l && /* @__PURE__ */ d.jsx("span", { style: { color: "#94a3b8", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
            ] })
          ] }),
          /* @__PURE__ */ d.jsxs("span", { style: { color: "#0f172a", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
            o.value,
            null
          ] })
        ] }, a);
      }) })
    ] });
  }
  return null;
}, A$ = ({
  title: e = "Annual Patient Trends",
  // subtitle = 'Aug 2025 - Dec 2026 Volume & Projections',
  // dateRangeBadge = 'Aug 25 - Dec 26',
  data: t = D0,
  xAxisKey: r = "month",
  metricsConfig: n = pN,
  // referenceLineValue = 200,
  // referenceLineLabel = 'Beds (200)',
  daysInMonthMap: i = hN
}) => {
  const o = t ?? D0, [a, l] = W(() => {
    const s = {};
    return Object.keys(n).forEach((u) => s[u] = !0), s;
  }), c = (s) => {
    l((u) => ({
      ...u,
      [s]: !u[s]
    }));
  };
  return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box" }, children: /* @__PURE__ */ d.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "#ffffff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid #e2e8f0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "#0f172a" }, children: e }) }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(n).map(([s, u]) => {
        const f = a[s], p = u.icon;
        return /* @__PURE__ */ d.jsxs(
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
              backgroundColor: f ? `${u.color}18` : "transparent",
              color: f ? u.color : "#64748b",
              borderColor: f ? u.color : "#e2e8f0",
              transition: "all 0.2s ease-out"
            },
            children: [
              p && /* @__PURE__ */ d.jsx(
                p,
                {
                  size: 14,
                  style: { color: f ? u.color : "currentColor", opacity: f ? 1 : 0.5, transition: "all 0.2s ease-out" }
                }
              ),
              u.shortLabel
            ]
          },
          s
        );
      }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { padding: "16px", minHeight: 320, flexShrink: 0, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ d.jsx(Bu, { width: "99%", height: 320, children: /* @__PURE__ */ d.jsxs(
      xw,
      {
        data: o,
        margin: { top: 20, right: 30, left: R0(o, n) - 40, bottom: 0 },
        children: [
          /* @__PURE__ */ d.jsx("defs", { children: Object.entries(n).map(([s, u]) => /* @__PURE__ */ d.jsxs("linearGradient", { id: `color${s}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ d.jsx("stop", { offset: "5%", stopColor: u.color, stopOpacity: 0.3 }),
            /* @__PURE__ */ d.jsx("stop", { offset: "95%", stopColor: u.color, stopOpacity: 0 })
          ] }, `color${s}`)) }),
          /* @__PURE__ */ d.jsx(Nl, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: !1 }),
          /* @__PURE__ */ d.jsx(
            $l,
            {
              dataKey: r,
              stroke: "#64748b",
              tick: { fill: "#64748b", fontSize: 10 },
              tickMargin: 8,
              axisLine: !1,
              tickLine: !1
            }
          ),
          /* @__PURE__ */ d.jsx(
            zl,
            {
              stroke: "#64748b",
              tick: { fill: "#64748b", fontSize: 10 },
              tickMargin: 8,
              axisLine: !1,
              tickLine: !1,
              width: R0(o, n),
              tickFormatter: bw
            }
          ),
          /* @__PURE__ */ d.jsx(Vd, { content: /* @__PURE__ */ d.jsx(vN, { metricsConfig: n, daysInMonthMap: i }) }),
          Object.entries(n).map(([s, u]) => a[s] && /* @__PURE__ */ d.jsxs(c2, { children: [
            /* @__PURE__ */ d.jsx(
              Yi,
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
                children: /* @__PURE__ */ d.jsx(Pr, { dataKey: s, position: "top", offset: 6, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } })
              }
            ),
            /* @__PURE__ */ d.jsxs(
              Yi,
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
                  /* @__PURE__ */ d.jsx(Pr, { dataKey: `${s}_Proj`, position: "top", offset: 6, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } }),
                  /* @__PURE__ */ d.jsx(
                    Pr,
                    {
                      content: (f) => {
                        const { x: p, y: h, index: g } = f;
                        return g === o.length - 1 ? /* @__PURE__ */ d.jsx(
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
    o.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0f172a" }, children: [
      /* @__PURE__ */ d.jsx("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: e }),
      /* @__PURE__ */ d.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", border: "1px solid #e2e8f0", borderRadius: "8px" }, children: /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ d.jsx("thead", { style: { fontSize: "10px", color: "#64748b", textTransform: "uppercase", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid #e2e8f0", width: "80px", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Metric" }),
          o.map((s, u) => {
            const f = Object.keys(n)[0], p = f && !s.hasOwnProperty(f) && s.hasOwnProperty(`${f}_Proj`);
            return /* @__PURE__ */ d.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: p ? "rgba(241, 245, 249, 0.5)" : "transparent" }, children: [
              /* @__PURE__ */ d.jsx("div", { style: { letterSpacing: "-0.05em" }, children: s[r] }),
              /* @__PURE__ */ d.jsx("div", { style: { marginTop: "2px" } })
            ] }, u);
          })
        ] }) }),
        /* @__PURE__ */ d.jsxs("tbody", { children: [
          Object.entries(n).map(([s, u]) => a[s] ? /* @__PURE__ */ d.jsxs("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#ffffff", zIndex: 10 }, children: u.shortLabel }),
            o.map((f, p) => {
              const h = f[s] ?? f[`${s}_Proj`], g = !f.hasOwnProperty(s) && f.hasOwnProperty(`${s}_Proj`);
              return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: g ? "#64748b" : "#0f172a", backgroundColor: g ? "rgba(248, 250, 252, 0.3)" : "transparent", fontWeight: g ? 400 : 500 }, children: h !== void 0 ? h : "-" }, p);
            })
          ] }, s) : null),
          /* @__PURE__ */ d.jsxs("tr", { style: { borderTop: "2px solid #e2e8f0", backgroundColor: "#f8fafc", fontWeight: 700 }, children: [
            /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Total" }),
            o.map((s, u) => {
              const f = Object.keys(n).reduce((h, g) => a[g] ? h + Number(s[g] ?? s[`${g}_Proj`] ?? 0) : h, 0), p = Object.keys(n).every((h) => !s.hasOwnProperty(h) && s.hasOwnProperty(`${h}_Proj`));
              return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: p ? "#64748b" : "#0f172a" }, children: f || "-" }, u);
            })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}, gN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ d.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ d.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ d.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), yN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: /* @__PURE__ */ d.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), mN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ d.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ d.jsx("path", { d: "M7 16h10" })
] }), xN = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ d.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ d.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ d.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ d.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ d.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ d.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), bN = [
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
], wN = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: gN },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: yN },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: mN },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: xN }
}, jN = {
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
const SN = ({ active: e, payload: t, label: r, metricsConfig: n }) => {
  if (!e || !t?.length) return null;
  const i = t.filter((o) => {
    if (o.dataKey.endsWith("_Proj")) {
      const a = o.dataKey.replace("_Proj", "");
      if (t.some((l) => l.dataKey === a)) return !1;
    }
    return !0;
  });
  return /* @__PURE__ */ d.jsxs("div", { style: { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)", zIndex: 50, position: "relative", color: "#0f172a" }, children: [
    /* @__PURE__ */ d.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid #f1f5f9", paddingBottom: "4px", fontSize: "14px", color: "#1e293b" }, children: r }),
    /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: i.map((o, a) => {
      const l = o.dataKey.endsWith("_Proj"), c = l ? o.dataKey.replace("_Proj", "") : o.dataKey, s = n[c] || { label: c, color: o.color };
      return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
        /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: o.color } }),
          /* @__PURE__ */ d.jsxs("span", { style: { color: "#475569", fontSize: "12px", fontWeight: 500 }, children: [
            s.label,
            " ",
            l && /* @__PURE__ */ d.jsx("span", { style: { color: "#94a3b8", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("span", { style: { color: "#0f172a", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
          o.value,
          " ",
          null
        ] })
      ] }, a);
    }) })
  ] });
}, ON = (e) => {
  const { x: t, y: r, width: n, height: i, fill: o, patternId: a } = e;
  return !i || i <= 0 ? null : /* @__PURE__ */ d.jsx("rect", { x: t, y: r, width: n, height: i, fill: `url(#${a})`, stroke: o, strokeWidth: 1.5, strokeDasharray: "4 2", opacity: 0.7 });
}, T$ = ({
  title: e = "Annual Patient Trends",
  // subtitle = 'Aug 2025 - Dec 2026 Volume & Projections',
  // dateRangeBadge = 'Aug 25 - Dec 26',
  data: t = bN,
  xAxisKey: r = "month",
  metricsConfig: n = wN,
  // referenceLineValue = 200,
  // referenceLineLabel = 'Beds (200)',
  daysInMonthMap: i = jN
}) => {
  const [o, a] = W(() => {
    const s = {};
    return Object.keys(n).forEach((u) => s[u] = !0), s;
  }), l = (s) => a((u) => ({ ...u, [s]: !u[s] })), c = Object.keys(n).filter((s) => o[s]);
  return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box" }, children: /* @__PURE__ */ d.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "#ffffff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid #e2e8f0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ d.jsx("div", { children: /* @__PURE__ */ d.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "#0f172a" }, children: e }) }),
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(n).map(([s, u]) => {
        const f = o[s], p = u.icon;
        return /* @__PURE__ */ d.jsxs(
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
              backgroundColor: f ? `${u.color}18` : "transparent",
              color: f ? u.color : "#64748b",
              borderColor: f ? u.color : "#e2e8f0",
              transition: "all 0.2s ease-out"
            },
            children: [
              p && /* @__PURE__ */ d.jsx(p, { size: 14, style: { color: f ? u.color : "currentColor", opacity: f ? 1 : 0.5, transition: "all 0.2s ease-out" } }),
              u.shortLabel
            ]
          },
          s
        );
      }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { padding: "16px", minHeight: 320, flexShrink: 0, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ d.jsx(Bu, { width: "99%", height: 320, children: /* @__PURE__ */ d.jsxs(lN, { data: t, margin: { top: 20, right: 30, left: N0(t, n) - 40, bottom: 0 }, barCategoryGap: "20%", barGap: 2, children: [
      /* @__PURE__ */ d.jsx("defs", { children: Object.entries(n).map(([s, u]) => /* @__PURE__ */ d.jsx("pattern", { id: `pat${s}`, patternUnits: "userSpaceOnUse", width: "6", height: "6", patternTransform: "rotate(45)", children: /* @__PURE__ */ d.jsx("rect", { width: "3", height: "6", fill: u.color, fillOpacity: 0.25 }) }, `pat${s}`)) }),
      /* @__PURE__ */ d.jsx(Nl, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: !1 }),
      /* @__PURE__ */ d.jsx($l, { dataKey: r, stroke: "#64748b", tick: { fill: "#64748b", fontSize: 10 }, tickMargin: 8, axisLine: !1, tickLine: !1 }),
      /* @__PURE__ */ d.jsx(
        zl,
        {
          stroke: "#64748b",
          tick: { fill: "#64748b", fontSize: 10 },
          tickMargin: 8,
          axisLine: !1,
          tickLine: !1,
          width: N0(t, n),
          tickFormatter: ww
        }
      ),
      /* @__PURE__ */ d.jsx(Vd, { content: /* @__PURE__ */ d.jsx(SN, { metricsConfig: n, daysInMonthMap: i }) }),
      c.map((s) => {
        const u = n[s];
        return [
          /* @__PURE__ */ d.jsxs(pu, { dataKey: s, fill: u.color, radius: [3, 3, 0, 0], maxBarSize: 18, animationDuration: 1e3, animationEasing: "ease-in-out", children: [
            /* @__PURE__ */ d.jsx(Pr, { dataKey: s, position: "top", offset: 4, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } }),
            t.map((f, p) => /* @__PURE__ */ d.jsx(Kd, { fill: u.color, fillOpacity: f[s] !== void 0 ? 1 : 0 }, p))
          ] }, s),
          /* @__PURE__ */ d.jsx(
            pu,
            {
              dataKey: `${s}_Proj`,
              maxBarSize: 18,
              animationDuration: 1e3,
              animationEasing: "ease-in-out",
              shape: (f) => /* @__PURE__ */ d.jsx(ON, { ...f, fill: u.color, patternId: `pat${s}` }),
              children: /* @__PURE__ */ d.jsx(Pr, { dataKey: `${s}_Proj`, position: "top", offset: 4, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } })
            },
            `${s}_Proj`
          )
        ];
      })
    ] }) }) }),
    t.length > 0 && /* @__PURE__ */ d.jsxs("div", { style: { padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0f172a" }, children: [
      /* @__PURE__ */ d.jsx("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: e }),
      /* @__PURE__ */ d.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", borderRadius: "8px" }, children: /* @__PURE__ */ d.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ d.jsx("thead", { style: { fontSize: "10px", color: "#64748b", textTransform: "uppercase", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: /* @__PURE__ */ d.jsxs("tr", { children: [
          /* @__PURE__ */ d.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid #e2e8f0", width: "80px", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Metric" }),
          t.map((s, u) => {
            const f = Object.keys(n)[0], p = f && !s.hasOwnProperty(f) && s.hasOwnProperty(`${f}_Proj`);
            return /* @__PURE__ */ d.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: p ? "rgba(241,245,249,0.5)" : "transparent" }, children: [
              /* @__PURE__ */ d.jsx("div", { style: { letterSpacing: "-0.05em" }, children: s[r] }),
              /* @__PURE__ */ d.jsx("div", { style: { marginTop: "2px" } })
            ] }, u);
          })
        ] }) }),
        /* @__PURE__ */ d.jsxs("tbody", { children: [
          Object.entries(n).map(([s, u]) => o[s] ? /* @__PURE__ */ d.jsxs("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
            /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#ffffff", zIndex: 10 }, children: u.shortLabel }),
            t.map((f, p) => {
              const h = f[s] ?? f[`${s}_Proj`], g = !f.hasOwnProperty(s) && f.hasOwnProperty(`${s}_Proj`);
              return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: g ? "#64748b" : "#0f172a", backgroundColor: g ? "rgba(248,250,252,0.3)" : "transparent", fontWeight: g ? 400 : 500 }, children: h !== void 0 ? h : "-" }, p);
            })
          ] }, s) : null),
          /* @__PURE__ */ d.jsxs("tr", { style: { borderTop: "2px solid #e2e8f0", backgroundColor: "#f8fafc", fontWeight: 700 }, children: [
            /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 8px", color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Total" }),
            t.map((s, u) => {
              const f = Object.keys(n).reduce((h, g) => o[g] ? h + Number(s[g] ?? s[`${g}_Proj`] ?? 0) : h, 0), p = Object.keys(n).every((h) => !s.hasOwnProperty(h) && s.hasOwnProperty(`${h}_Proj`));
              return /* @__PURE__ */ d.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: p ? "#64748b" : "#0f172a" }, children: f || "-" }, u);
            })
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
}, PN = () => /* @__PURE__ */ d.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d.jsx("rect", { x: "3", y: "12", width: "4", height: "9" }),
  /* @__PURE__ */ d.jsx("rect", { x: "10", y: "7", width: "4", height: "14" }),
  /* @__PURE__ */ d.jsx("rect", { x: "17", y: "3", width: "4", height: "18" })
] }), CN = () => /* @__PURE__ */ d.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ d.jsx("polyline", { points: "3 17 9 11 13 15 21 7" }) }), kN = () => /* @__PURE__ */ d.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d.jsx("path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }),
  /* @__PURE__ */ d.jsx("path", { d: "M22 12A10 10 0 0 0 12 2v10z" })
] }), _N = () => /* @__PURE__ */ d.jsxs("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d.jsx("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ d.jsx("circle", { cx: "12", cy: "12", r: "4" })
] }), EN = [
  { type: "bar", label: "Bar", icon: /* @__PURE__ */ d.jsx(PN, {}) },
  { type: "line", label: "Line", icon: /* @__PURE__ */ d.jsx(CN, {}) },
  { type: "pie", label: "Pie", icon: /* @__PURE__ */ d.jsx(kN, {}) },
  { type: "donut", label: "Donut", icon: /* @__PURE__ */ d.jsx(_N, {}) }
], I$ = ({
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
  Se(() => {
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
  }), f = (h) => ({
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
    if (i) return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: a, color: "#94a3b8", fontSize: 12, gap: 8 }, children: [
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
    if (!e.length) return /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: a, color: "#94a3b8", fontSize: 13 }, children: r ? "No data" : "Select an endpoint above" });
    switch (c) {
      case "bar":
        return /* @__PURE__ */ d.jsx(A2, { data: e, height: a, defaultColor: l });
      case "line":
        return /* @__PURE__ */ d.jsx(_2, { data: e, height: a, defaultColor: l });
      case "pie":
        return /* @__PURE__ */ d.jsx(M2, { data: e });
      case "donut":
        return /* @__PURE__ */ d.jsx(B2, { data: e });
    }
  };
  return /* @__PURE__ */ d.jsxs("div", { style: { width: "100%", fontFamily: "sans-serif", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }, children: [
      /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }, children: EN.map(({ type: h, label: g, icon: v }) => /* @__PURE__ */ d.jsxs("button", { onClick: () => s(h), style: u(c === h), children: [
        /* @__PURE__ */ d.jsx("span", { style: { display: "flex", opacity: c === h ? 1 : 0.5 }, children: v }),
        g
      ] }, h)) }),
      t.length > 0 && /* @__PURE__ */ d.jsx("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }, children: t.map((h) => /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => n?.(h.endpoint),
          style: f(r === h.endpoint),
          children: h.label
        },
        h.endpoint
      )) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { style: { width: "100%", boxSizing: "border-box" }, children: p() }),
    /* @__PURE__ */ d.jsx("style", { children: "@keyframes spin { to { transform: rotate(360deg); } }" })
  ] });
}, AN = ({ color: e = "currentColor" }) => /* @__PURE__ */ d.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: e, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ d.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), TN = ({ active: e, payload: t, label: r, currentMetrics: n, daysInMonthMap: i }) => {
  if (e && t && t.length) {
    const o = i?.[r] || 30, a = t.reduce((l, c) => {
      const s = c.dataKey.replace("_Proj", "");
      return l.find((f) => f.dataKey.replace("_Proj", "") === s) ? c.dataKey.includes("_Proj") || (l = l.filter((f) => f.dataKey !== `${s}_Proj`), l.push(c)) : l.push(c), l;
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
      a.map((l, c) => {
        const s = l.dataKey.includes("_Proj"), u = l.dataKey.replace("_Proj", ""), f = n[u];
        if (!f) return null;
        const p = f.format || ((v) => v), h = l.value, g = Math.ceil(h / o);
        return /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", gap: "6px" }, children: [
          /* @__PURE__ */ d.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: l.stroke } }),
          /* @__PURE__ */ d.jsxs("span", { style: { fontWeight: 500 }, children: [
            f.label,
            " ",
            s ? /* @__PURE__ */ d.jsx("span", { style: { fontStyle: "italic", fontSize: "9px", color: "#94a3b8" }, children: "(Proj)" }) : "",
            ":"
          ] }),
          /* @__PURE__ */ d.jsx("span", { style: { fontWeight: "bold", color: "#0f172a" }, children: p(h) }),
          /* @__PURE__ */ d.jsxs("span", { style: { color: "#64748b", fontSize: "10px" }, children: [
            "(DA - ",
            p(g),
            ")"
          ] })
        ] }, `item-${c}`);
      })
    ] });
  }
  return null;
}, M$ = ({
  config: e,
  defaultTab: t,
  defaultView: r,
  subtitle: n = "Monthly Volume & Projections",
  xAxisKey: i = "month",
  daysInMonthMap: o = {}
}) => {
  const { ref: a, width: l, fs: c } = qe(), s = l < 768, u = Object.keys(e), [f, p] = W(t || u[0] || ""), [h, g] = W(r || "count"), [v, y] = W({});
  Se(() => {
    const E = {};
    Object.entries(e).forEach(([_, D]) => {
      E[_] = {}, Object.entries(D.views).forEach(([k, F]) => {
        E[_][k] = {}, Object.keys(F.metrics).forEach((N) => {
          E[_][k][N] = !0;
        });
      });
    }), y(E);
  }, [e]);
  const m = (E) => {
    y((_) => ({
      ..._,
      [f]: {
        ..._[f],
        [h]: {
          ..._[f][h],
          [E]: !_[f][h][E]
        }
      }
    }));
  }, b = e[f], x = b?.views[h], w = v[f]?.[h] || {}, S = x?.data || [], O = x?.metrics || {}, C = (E) => {
    const _ = Object.keys(O).filter((D) => w[D]);
    if (_.length > 0) {
      const D = O[_[0]];
      if (D.format) return D.format(E);
    }
    return E;
  }, T = () => {
    if (!S || S.length === 0) return 40;
    const E = Object.keys(O).filter((k) => w[k]);
    if (E.length === 0) return 40;
    let _ = 0;
    S.forEach((k) => {
      E.forEach((F) => {
        const N = k[F] !== void 0 ? Number(k[F]) : 0, V = k[`${F}_Proj`] !== void 0 ? Number(k[`${F}_Proj`]) : 0;
        N > _ && (_ = N), V > _ && (_ = V);
      });
    });
    const D = C(_);
    return Math.max(40, D.toString().length * (s ? 6 : 7));
  };
  return !b || !x ? null : /* @__PURE__ */ d.jsxs("div", { ref: a, style: {
    width: "100%",
    backgroundColor: "#f8fafc",
    fontFamily: "sans-serif",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ d.jsxs("div", { style: {
      width: "100%",
      marginBottom: "16px",
      display: "flex",
      flexDirection: s ? "column" : "row",
      justifyContent: "space-between",
      alignItems: s ? "stretch" : "center",
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
        const _ = E === f;
        return /* @__PURE__ */ d.jsx(
          "button",
          {
            onClick: () => p(E),
            style: {
              flex: s ? "1" : "none",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: c(14),
              fontWeight: 600,
              transition: "all 0.2s",
              border: "none",
              cursor: "pointer",
              backgroundColor: _ ? "#1e293b" : "transparent",
              color: _ ? "#ffffff" : "#64748b",
              boxShadow: _ ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none"
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
              flex: s ? "1" : "none",
              padding: "6px 24px",
              borderRadius: "4px",
              fontSize: c(12),
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
              flex: s ? "1" : "none",
              padding: "6px 24px",
              borderRadius: "4px",
              fontSize: c(12),
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
        padding: s ? "12px" : "16px",
        borderBottom: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: s ? "column" : "row",
        justifyContent: "space-between",
        alignItems: s ? "flex-start" : "center",
        gap: "12px"
      }, children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
            /* @__PURE__ */ d.jsx("h1", { style: { margin: 0, fontSize: c(24), fontWeight: 700, color: "#0f172a", letterSpacing: "-0.025em" }, children: b.title }),
            /* @__PURE__ */ d.jsx("span", { style: {
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: c(10),
              fontWeight: 700,
              border: `1px solid ${h === "revenue" ? "#a7f3d0" : "#c7d2fe"}`,
              backgroundColor: h === "revenue" ? "#ecfdf5" : "#eef2ff",
              color: h === "revenue" ? "#047857" : "#4338ca",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
            }, children: h === "revenue" ? "Revenue View" : "Count View" })
          ] }),
          /* @__PURE__ */ d.jsx("p", { style: { margin: "4px 0 0 0", color: "#64748b", fontSize: c(14) }, children: n })
        ] }),
        /* @__PURE__ */ d.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(O).map(([E, _]) => {
          const D = w[E];
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
                fontSize: c(12),
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
                  color: D ? _.color : "currentColor",
                  opacity: D ? 1 : 0.5,
                  display: "flex",
                  alignItems: "center"
                }, children: _.icon || /* @__PURE__ */ d.jsx(AN, {}) }),
                _.shortLabel
              ]
            },
            E
          );
        }) })
      ] }),
      /* @__PURE__ */ d.jsx("div", { style: { padding: s ? "12px" : "16px", height: "320px", width: "100%", position: "relative" }, children: /* @__PURE__ */ d.jsx(Bu, { width: "100%", height: "100%", children: /* @__PURE__ */ d.jsxs(xw, { data: S, margin: { top: 15, right: 25, left: 0, bottom: 0 }, children: [
        /* @__PURE__ */ d.jsx("defs", { children: Object.entries(O).map(([E, _]) => /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
          /* @__PURE__ */ d.jsxs("linearGradient", { id: `color-${E}-actual`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ d.jsx("stop", { offset: "5%", stopColor: _.color, stopOpacity: 0.25 }),
            /* @__PURE__ */ d.jsx("stop", { offset: "95%", stopColor: _.color, stopOpacity: 0 })
          ] }),
          /* @__PURE__ */ d.jsxs("linearGradient", { id: `color-${E}-proj`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ d.jsx("stop", { offset: "5%", stopColor: _.color, stopOpacity: 0.05 }),
            /* @__PURE__ */ d.jsx("stop", { offset: "95%", stopColor: _.color, stopOpacity: 0 })
          ] })
        ] }, `grad-${E}`)) }),
        /* @__PURE__ */ d.jsx(Nl, { strokeDasharray: "3 3", vertical: !1, stroke: "#e2e8f0" }),
        /* @__PURE__ */ d.jsx(
          $l,
          {
            dataKey: i,
            axisLine: !1,
            tickLine: !1,
            tick: { fill: "#64748b", fontSize: c(10), fontFamily: "sans-serif" },
            dy: 10
          }
        ),
        /* @__PURE__ */ d.jsx(
          zl,
          {
            axisLine: !1,
            tickLine: !1,
            tick: { fill: "#64748b", fontSize: c(10), fontFamily: "sans-serif" },
            width: T(),
            tickFormatter: C,
            dx: -10
          }
        ),
        /* @__PURE__ */ d.jsx(
          Vd,
          {
            content: /* @__PURE__ */ d.jsx(TN, { currentMetrics: O, daysInMonthMap: o })
          }
        ),
        x.threshold && /* @__PURE__ */ d.jsx(
          B1,
          {
            y: x.threshold.value,
            stroke: x.threshold.color,
            strokeDasharray: "6 6",
            strokeWidth: 1.5,
            label: {
              position: "insideTopLeft",
              value: x.threshold.label,
              fill: x.threshold.color,
              fontSize: 9,
              fontWeight: "bold"
            }
          }
        ),
        Object.entries(O).map(([E, _]) => w[E] ? /* @__PURE__ */ d.jsxs(Le.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            Yi,
            {
              type: "monotone",
              dataKey: E,
              stroke: _.color,
              strokeWidth: 3,
              fillOpacity: 1,
              fill: `url(#color-${E}-actual)`,
              activeDot: { r: 5, strokeWidth: 2, stroke: _.color, fill: "#fff" },
              isAnimationActive: !0
            }
          ),
          /* @__PURE__ */ d.jsx(
            Yi,
            {
              type: "monotone",
              dataKey: `${E}_Proj`,
              stroke: _.color,
              strokeWidth: 3,
              strokeDasharray: "5 5",
              fillOpacity: 1,
              fill: `url(#color-${E}-proj)`,
              activeDot: { r: 5, strokeWidth: 2, stroke: _.color, fill: "#fff" },
              isAnimationActive: !0
            }
          )
        ] }, `series-${E}`) : null)
      ] }) }) }),
      /* @__PURE__ */ d.jsxs("div", { style: { padding: s ? "12px" : "16px", borderTop: "1px solid #e2e8f0" }, children: [
        /* @__PURE__ */ d.jsxs("h2", { style: {
          fontSize: c(14),
          fontWeight: 700,
          color: "#0f172a",
          margin: "0 0 8px 0",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }, children: [
          "YTD & Projections Data Table",
          /* @__PURE__ */ d.jsxs("span", { style: {
            fontSize: c(9),
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
          fontSize: c(12),
          textAlign: "left",
          whiteSpace: "nowrap",
          borderCollapse: "collapse",
          tableLayout: "fixed"
        }, children: [
          /* @__PURE__ */ d.jsx("thead", { style: {
            fontSize: c(10),
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
              width: s ? "80px" : "112px",
              verticalAlign: "bottom",
              boxShadow: "1px 0 0 0 #e2e8f0"
            }, children: "Metric" }),
            S.map((E, _) => {
              const D = Object.keys(O)[0], k = E[D] === void 0 && E[`${D}_Proj`] !== void 0;
              return /* @__PURE__ */ d.jsxs("th", { style: {
                padding: "6px 2px",
                fontWeight: 600,
                textAlign: "center",
                backgroundColor: k ? "rgba(241, 245, 249, 0.5)" : "transparent"
              }, children: [
                /* @__PURE__ */ d.jsx("div", { style: { letterSpacing: "-0.05em" }, children: E[i] }),
                /* @__PURE__ */ d.jsx("div", { style: { marginTop: "2px" }, children: /* @__PURE__ */ d.jsx("span", { style: {
                  padding: "1px 4px",
                  fontSize: c(8),
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  fontWeight: 700,
                  borderRadius: "2px",
                  backgroundColor: k ? "#e2e8f0" : "#d1fae5",
                  color: k ? "#64748b" : "#047857"
                }, children: k ? "Prj" : "Act" }) })
              ] }, `th-${_}`);
            })
          ] }) }),
          /* @__PURE__ */ d.jsx("tbody", { children: Object.entries(O).map(([E, _], D) => {
            if (!w[E]) return null;
            const k = _.format || ((F) => F);
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
              }, children: _.shortLabel }),
              S.map((F, N) => {
                const V = F[E] !== void 0 ? F[E] : F[`${E}_Proj`], U = F[E] === void 0;
                return /* @__PURE__ */ d.jsx("td", { style: {
                  padding: "4px 2px",
                  textAlign: "center",
                  color: U ? "#64748b" : "#0f172a",
                  fontWeight: U ? 400 : 500,
                  backgroundColor: U ? "rgba(248, 250, 252, 0.3)" : "transparent"
                }, children: V !== void 0 ? k(V) : "-" }, `cell-${D}-${N}`);
              })
            ] }, `row-${E}`);
          }) })
        ] }) })
      ] })
    ] })
  ] });
};
export {
  o$ as AdvanceMapWidget,
  BN as AdvancePrescription,
  r$ as AlertWidget,
  A2 as BarChart,
  FN as BubbleChart,
  RN as Button,
  GN as DataWidget,
  B2 as DonutChart,
  t$ as FilterWidget,
  UN as GaugeWidget,
  VN as HeatMap,
  qN as KpiWidget,
  _2 as LineChart,
  ZN as ListWidget,
  JN as MapWidget,
  e$ as MediaWidget,
  I$ as MultiChart,
  M$ as MultiTrendChart,
  Cf as NotionTable,
  $N as NotionTableWithLayout,
  M2 as PieChart,
  XN as PivotTable,
  YN as ProgressBar,
  zN as ScaffoldTable,
  KN as ScatterPlot,
  LN as SimplePrescription,
  HN as StackedChart,
  a$ as StatGrid,
  WN as StatusWidget,
  NN as Table,
  QN as TextWidget,
  i$ as Toaster,
  T$ as TrendBarChart,
  A$ as TrendLinechart,
  n$ as showToast,
  qe as useContainerSize
};
