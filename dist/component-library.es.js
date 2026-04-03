import je, { useState as k, useEffect as Ee, useRef as Ue, useMemo as Wt, useCallback as wn } from "react";
var Ye = { exports: {} }, Oe = {};
var ut;
function Sn() {
  if (ut) return Oe;
  ut = 1;
  var n = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function i(c, a, h) {
    var x = null;
    if (h !== void 0 && (x = "" + h), a.key !== void 0 && (x = "" + a.key), "key" in a) {
      h = {};
      for (var r in a)
        r !== "key" && (h[r] = a[r]);
    } else h = a;
    return a = h.ref, {
      $$typeof: n,
      type: c,
      key: x,
      ref: a !== void 0 ? a : null,
      props: h
    };
  }
  return Oe.Fragment = o, Oe.jsx = i, Oe.jsxs = i, Oe;
}
var Be = {};
var gt;
function zn() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === G ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case H:
          return "Fragment";
        case S:
          return "Profiler";
        case T:
          return "StrictMode";
        case _:
          return "Suspense";
        case N:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case P:
            return "Portal";
          case g:
            return m.displayName || "Context";
          case w:
            return (m._context.displayName || "Context") + ".Consumer";
          case M:
            var C = m.render;
            return m = m.displayName, m || (m = C.displayName || C.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case O:
            return C = m.displayName || null, C !== null ? C : n(m.type) || "Memo";
          case F:
            C = m._payload, m = m._init;
            try {
              return n(m(C));
            } catch {
            }
        }
      return null;
    }
    function o(m) {
      return "" + m;
    }
    function i(m) {
      try {
        o(m);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var j = C.error, E = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return j.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), o(m);
      }
    }
    function c(m) {
      if (m === H) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === F)
        return "<...>";
      try {
        var C = n(m);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var m = $.A;
      return m === null ? null : m.getOwner();
    }
    function h() {
      return Error("react-stack-top-frame");
    }
    function x(m) {
      if (D.call(m, "key")) {
        var C = Object.getOwnPropertyDescriptor(m, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function r(m, C) {
      function j() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: j,
        configurable: !0
      });
    }
    function u() {
      var m = n(this.type);
      return se[m] || (se[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function s(m, C, j, E, Z, le) {
      var ee = j.ref;
      return m = {
        $$typeof: B,
        type: m,
        key: C,
        props: j,
        _owner: E
      }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function y(m, C, j, E, Z, le) {
      var ee = C.children;
      if (ee !== void 0)
        if (E)
          if (q(ee)) {
            for (E = 0; E < ee.length; E++)
              W(ee[E]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(ee);
      if (D.call(C, "key")) {
        ee = n(m);
        var re = Object.keys(C).filter(function(he) {
          return he !== "key";
        });
        E = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", Q[ee + E] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          ee,
          re,
          ee
        ), Q[ee + E] = !0);
      }
      if (ee = null, j !== void 0 && (i(j), ee = "" + j), x(C) && (i(C.key), ee = "" + C.key), "key" in C) {
        j = {};
        for (var ce in C)
          ce !== "key" && (j[ce] = C[ce]);
      } else j = C;
      return ee && r(
        j,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), s(
        m,
        ee,
        j,
        a(),
        Z,
        le
      );
    }
    function W(m) {
      f(m) ? m._store && (m._store.validated = 1) : typeof m == "object" && m !== null && m.$$typeof === F && (m._payload.status === "fulfilled" ? f(m._payload.value) && m._payload.value._store && (m._payload.value._store.validated = 1) : m._store && (m._store.validated = 1));
    }
    function f(m) {
      return typeof m == "object" && m !== null && m.$$typeof === B;
    }
    var b = je, B = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), g = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), $ = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, q = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(m) {
        return m();
      }
    };
    var U, se = {}, v = b.react_stack_bottom_frame.bind(
      b,
      h
    )(), ne = X(c(h)), Q = {};
    Be.Fragment = H, Be.jsx = function(m, C, j) {
      var E = 1e4 > $.recentlyCreatedOwnerStacks++;
      return y(
        m,
        C,
        j,
        !1,
        E ? Error("react-stack-top-frame") : v,
        E ? X(c(m)) : ne
      );
    }, Be.jsxs = function(m, C, j) {
      var E = 1e4 > $.recentlyCreatedOwnerStacks++;
      return y(
        m,
        C,
        j,
        !0,
        E ? Error("react-stack-top-frame") : v,
        E ? X(c(m)) : ne
      );
    };
  })()), Be;
}
var ht;
function Rn() {
  return ht || (ht = 1, process.env.NODE_ENV === "production" ? Ye.exports = Sn() : Ye.exports = zn()), Ye.exports;
}
var e = Rn();
function tr({ children: n, onClick: o, color: i = "#007bff", textColor: c = "#fff" }) {
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      style: {
        padding: "10px 20px",
        background: i,
        color: c,
        borderRadius: "6px",
        border: "none"
      },
      onClick: o,
      children: n
    }
  );
}
var $t = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, bt = je.createContext && /* @__PURE__ */ je.createContext($t), Mn = ["attr", "size", "title"];
function Tn(n, o) {
  if (n == null) return {};
  var i = En(n, o), c, a;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(n);
    for (a = 0; a < h.length; a++)
      c = h[a], !(o.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(n, c) && (i[c] = n[c]);
  }
  return i;
}
function En(n, o) {
  if (n == null) return {};
  var i = {};
  for (var c in n)
    if (Object.prototype.hasOwnProperty.call(n, c)) {
      if (o.indexOf(c) >= 0) continue;
      i[c] = n[c];
    }
  return i;
}
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var i = arguments[o];
      for (var c in i)
        Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c]);
    }
    return n;
  }, qe.apply(this, arguments);
}
function yt(n, o) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    o && (c = c.filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    })), i.push.apply(i, c);
  }
  return i;
}
function Ge(n) {
  for (var o = 1; o < arguments.length; o++) {
    var i = arguments[o] != null ? arguments[o] : {};
    o % 2 ? yt(Object(i), !0).forEach(function(c) {
      An(n, c, i[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : yt(Object(i)).forEach(function(c) {
      Object.defineProperty(n, c, Object.getOwnPropertyDescriptor(i, c));
    });
  }
  return n;
}
function An(n, o, i) {
  return o = Wn(o), o in n ? Object.defineProperty(n, o, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : n[o] = i, n;
}
function Wn(n) {
  var o = $n(n, "string");
  return typeof o == "symbol" ? o : o + "";
}
function $n(n, o) {
  if (typeof n != "object" || !n) return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var c = i.call(n, o);
    if (typeof c != "object") return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(n);
}
function It(n) {
  return n && n.map((o, i) => /* @__PURE__ */ je.createElement(o.tag, Ge({
    key: i
  }, o.attr), It(o.child)));
}
function ge(n) {
  return (o) => /* @__PURE__ */ je.createElement(In, qe({
    attr: Ge({}, n.attr)
  }, o), It(n.child));
}
function In(n) {
  var o = (i) => {
    var {
      attr: c,
      size: a,
      title: h
    } = n, x = Tn(n, Mn), r = a || i.size || "1em", u;
    return i.className && (u = i.className), n.className && (u = (u ? u + " " : "") + n.className), /* @__PURE__ */ je.createElement("svg", qe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, c, x, {
      className: u,
      style: Ge(Ge({
        color: n.color || i.color
      }, i.style), n.style),
      height: r,
      width: r,
      xmlns: "http://www.w3.org/2000/svg"
    }), h && /* @__PURE__ */ je.createElement("title", null, h), n.children);
  };
  return bt !== void 0 ? /* @__PURE__ */ je.createElement(bt.Consumer, null, (i) => o(i)) : o($t);
}
function mt(n) {
  return ge({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(n);
}
function vt(n) {
  return ge({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, child: [] }] })(n);
}
function Dt(n) {
  return ge({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(n);
}
function Lt(n) {
  return ge({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(n);
}
function jt(n) {
  return ge({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(n);
}
function Ct(n) {
  return ge({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" }, child: [] }] })(n);
}
function Dn(n) {
  return ge({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(n);
}
function kt(n) {
  return ge({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z" }, child: [] }] })(n);
}
function Qe(n) {
  return ge({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z" }, child: [] }] })(n);
}
function wt(n) {
  return ge({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" }, child: [] }] })(n);
}
function Fe(n) {
  return ge({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" }, child: [] }] })(n);
}
const ve = {
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
}, et = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), Ln = (n, o, i) => {
  if (!n || typeof n != "string") return "";
  try {
    let c = n;
    const a = c.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (a && a.forEach((x) => {
      const r = x.slice(1, -1), u = i.find((s) => s.name === r);
      if (u && o[u.id] !== null && o[u.id] !== void 0) {
        const s = parseFloat(o[u.id]) || 0;
        c = c.replace(x, s.toString());
      } else
        c = c.replace(x, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(c))
      return "Invalid formula";
    const h = Function('"use strict"; return (' + c + ")")();
    return isNaN(h) ? "Error" : h.toString();
  } catch {
    return "Error";
  }
};
function nr({ columns: n, initialData: o }) {
  const [i, c] = k(n), [a, h] = k(o), [x, r] = k(null), [u, s] = k(null), [y, W] = k(/* @__PURE__ */ new Set()), [f, b] = k(!1), [B, P] = k(!1), [H, T] = k(/* @__PURE__ */ new Set()), [S, w] = k(null), [g, M] = k(""), [_, N] = k(null), [O, F] = k(null), [V, G] = k(""), [$, D] = k({}), [q, X] = k(null), [U, se] = k({ key: null, direction: "ascending" }), [v] = k({}), ne = (p) => {
    let A = "ascending";
    U.key === p && U.direction === "ascending" && (A = "descending"), se({ key: p, direction: A });
  }, Q = je.useMemo(() => {
    let p = [...a];
    return U.key !== null && p.sort((A, R) => A[U.key] < R[U.key] ? U.direction === "ascending" ? -1 : 1 : A[U.key] > R[U.key] ? U.direction === "ascending" ? 1 : -1 : 0), p;
  }, [a, U]);
  Ee(() => {
    const p = () => {
      P(!1), b(!1), w(null), X(null), N(null);
    }, A = (R) => {
      if (R.key === "Escape")
        R.preventDefault(), N(null), r(null);
      else if (x && (R.ctrlKey || R.metaKey))
        if (R.key === "c") {
          R.preventDefault();
          const te = a.find((de) => de.id === x.rowId);
          te && N({
            rowId: x.rowId,
            colId: x.colId,
            value: te[x.colId]
          });
        } else R.key === "v" && _ && (R.preventDefault(), j(x.rowId, x.colId, _.value));
    };
    return document.addEventListener("click", p), document.addEventListener("keydown", A), () => {
      document.removeEventListener("click", p), document.removeEventListener("keydown", A);
    };
  }, [x, _, a]);
  const m = () => {
    const p = et(), A = `row-${Date.now()}`, R = {
      id: A,
      ...i.reduce((te, de) => ({
        ...te,
        [de.id]: de.type === "createdTime" || de.type === "lastEditedTime" ? p : de.type === "formula" ? "" : de.type === "id" ? A : null
      }), {})
    };
    h([...a, R]);
  }, C = (p) => {
    window.confirm("Are you sure you want to delete this row?") && h(a.filter((A) => A.id !== p));
  }, j = (p, A, R) => {
    const te = et();
    if (i.find((ae) => ae.id === A)?.type === "email" && R) {
      const ae = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, J = `${p}-${A}`;
      ae.test(R) ? T((me) => {
        const ke = new Set(me);
        return ke.delete(J), ke;
      }) : T((me) => new Set(me).add(J));
    }
    h(a.map((ae) => {
      if (ae.id === p) {
        const J = { ...ae, [A]: R };
        return i.forEach((me) => {
          me.type === "lastEditedTime" && (J[me.id] = te);
        }), J;
      }
      return ae;
    })), r(null);
  }, E = (p = "text", A) => {
    const R = `col-${Date.now()}`, te = et(), de = A || p.charAt(0).toUpperCase() + p.slice(1), ae = {
      id: R,
      name: g.trim() || de,
      type: p,
      options: p === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    c([...i, ae]), h(a.map((J) => ({
      ...J,
      [R]: p === "createdTime" || p === "lastEditedTime" ? te : p === "formula" ? "" : p === "id" ? J.id : null
    }))), P(!1), M("");
  }, Z = (p, A) => {
    c(i.map((R) => R.id === p ? { ...R, name: A } : R)), s(null);
  }, le = (p) => {
    W((A) => {
      const R = new Set(A);
      return R.has(p) ? R.delete(p) : R.add(p), R;
    }), w(null);
  }, ee = (p) => {
    c(i.filter((A) => A.id !== p)), h(a.map((A) => {
      const { [p]: R, ...te } = A;
      return te;
    })), w(null);
  }, re = (p) => {
    const A = i.find((J) => J.id === p);
    if (!A) return;
    const R = i.findIndex((J) => J.id === p), te = `col-${Date.now()}`, de = {
      ...A,
      id: te,
      name: `${A.name} Copy`
    }, ae = [...i];
    ae.splice(R + 1, 0, de), c(ae), h(a.map((J) => ({
      ...J,
      [te]: J[p]
    }))), w(null);
  }, ce = (p, A, R) => {
    if (!A.trim()) return;
    const te = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], de = te[Math.floor(Math.random() * te.length)];
    c(i.map((ae) => {
      if (ae.id === p && ae.type === "select") {
        const J = ae.options || [];
        if (!J.some((ke) => ke.value.toLowerCase() === A.toLowerCase()))
          return {
            ...ae,
            options: [...J, { value: A, color: de }]
          };
      }
      return ae;
    })), j(R, p, A), F(null), G("");
  }, he = i.filter((p) => !y.has(p.id)), pe = Q.filter((p) => Object.entries($).every(([A, R]) => {
    if (!R.trim()) return !0;
    const te = p[A];
    return te == null ? !1 : String(te).toLowerCase().includes(R.toLowerCase());
  })), be = (p) => U.key === p ? U.direction === "ascending" ? "▲" : "▼" : "↕", ze = (p) => {
    const A = p.color || "#f8f9fa", R = v[p.id] || 150;
    return {
      th: {
        ...ve.th,
        backgroundColor: A,
        color: p.color && p.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${R}px`,
        minWidth: `${R}px`,
        maxWidth: `${R}px`
      },
      td: {
        ...ve.td,
        backgroundColor: p.color ? `${A}33` : "#ffffff",
        width: `${R}px`,
        minWidth: `${R}px`,
        maxWidth: `${R}px`
      }
    };
  }, Ae = (p, A, R, te) => {
    const de = `${R}-${p.id}`, ae = H.has(de);
    if (te)
      switch (p.type) {
        case "checkbox":
          return /* @__PURE__ */ e.jsx("input", { type: "checkbox", checked: !!A, onChange: (J) => j(R, p.id, J.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ e.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: A || "",
              onChange: (J) => {
                J.target.value === "__add_new__" ? (F({ columnId: p.id, rowId: R }), G("")) : J.target.value === "__manage_options__" || j(R, p.id, J.target.value);
              },
              autoFocus: !0,
              onBlur: () => r(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", children: "Select..." }),
                p.options?.map((J) => /* @__PURE__ */ e.jsx("option", { value: J.value, children: J.value }, J.value)),
                /* @__PURE__ */ e.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ e.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "date":
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "date",
              defaultValue: A || "",
              onBlur: (J) => j(R, p.id, J.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "email":
          return /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "email",
                defaultValue: A || "",
                onBlur: (J) => j(R, p.id, J.target.value),
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
            ae && /* @__PURE__ */ e.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "number":
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              onBlur: (J) => j(R, p.id, J.target.value),
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
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              defaultValue: A || "",
              onBlur: (J) => j(R, p.id, J.target.value),
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
    if (A == null) return /* @__PURE__ */ e.jsx("span", { style: { color: "#aaa" } });
    switch (p.type) {
      case "checkbox":
        return /* @__PURE__ */ e.jsx("input", { type: "checkbox", checked: !!A, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(A).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ e.jsx("span", { style: { color: "#888" }, children: A });
      case "select":
        const J = p.options?.find((Se) => Se.value === A);
        return J ? /* @__PURE__ */ e.jsx("span", { style: {
          backgroundColor: J.color + "33",
          color: J.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: A }) : A;
      case "number":
        return /* @__PURE__ */ e.jsx("span", { style: { textAlign: "right", display: "block" }, children: Number(A).toLocaleString() });
      case "email":
        return /* @__PURE__ */ e.jsxs("div", { children: [
          A,
          ae && /* @__PURE__ */ e.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const me = a.find((Se) => Se.id === R), ke = me ? Ln(A, me, i) : "Error";
        return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ e.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: ke }),
          /* @__PURE__ */ e.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: A, children: "Σ" })
        ] });
      case "id":
        return /* @__PURE__ */ e.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: A });
      default:
        return A;
    }
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    O && /* @__PURE__ */ e.jsx("div", { style: {
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
    }, children: /* @__PURE__ */ e.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: V,
          onChange: (p) => G(p.target.value),
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
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              F(null), G("");
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
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => ce(O.columnId, V, O.rowId),
            disabled: !V.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: V.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: V.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("table", { style: ve.table, children: [
      /* @__PURE__ */ e.jsxs("thead", { children: [
        /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("th", { style: {
            ...ve.th,
            width: "40px"
          } }),
          he.map((p) => {
            const A = u === p.id;
            return /* @__PURE__ */ e.jsxs(
              "th",
              {
                style: {
                  ...ze(p).th,
                  position: "relative"
                },
                title: `Sort by ${p.name}`,
                children: [
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (R) => {
                        R.stopPropagation(), R.detail === 1 ? (P(!1), b(!1), w(S === p.id ? null : p.id)) : R.detail === 2 && (s(p.id), w(null));
                      },
                      children: A ? /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: p.name,
                          onBlur: (R) => Z(p.id, R.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                        /* @__PURE__ */ e.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: p.name }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (R) => {
                              R.stopPropagation(), ne(p.id);
                            },
                            children: be(p.id)
                          }
                        )
                      ] })
                    }
                  ),
                  S === p.id && /* @__PURE__ */ e.jsxs("div", { style: {
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
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (R) => {
                          R.stopPropagation(), X(q === p.id ? null : p.id);
                        },
                        children: [
                          "Filter",
                          q === p.id && /* @__PURE__ */ e.jsx("div", { style: {
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
                          }, children: /* @__PURE__ */ e.jsx(
                            "input",
                            {
                              type: "text",
                              placeholder: `Filter ${p.name}...`,
                              value: $[p.id] || "",
                              onChange: (R) => {
                                D((te) => ({
                                  ...te,
                                  [p.id]: R.target.value
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
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (R) => {
                          R.stopPropagation(), re(p.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (R) => {
                          R.stopPropagation(), le(p.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (R) => {
                          R.stopPropagation(), ee(p.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ]
              },
              p.id
            );
          }),
          /* @__PURE__ */ e.jsxs(
            "th",
            {
              style: {
                ...ve.th,
                color: "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px"
              },
              children: [
                /* @__PURE__ */ e.jsx("button", { onClick: (p) => {
                  p.stopPropagation(), w(null), b(!1), P(!B);
                }, title: "Add column", style: { ...ve.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ e.jsx("button", { onClick: (p) => {
                  p.stopPropagation(), w(null), P(!1), b(!f);
                }, style: { ...ve.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                B && /* @__PURE__ */ e.jsxs("div", { onClick: (p) => p.stopPropagation(), style: {
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
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: g,
                      onChange: (p) => M(p.target.value),
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
                  /* @__PURE__ */ e.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("text"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("number"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("select"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("checkbox"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("date"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("email"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("formula", "Formula"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("id", "ID"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("createdTime", "Created time"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => E("lastEditedTime", "Last edited time"), onMouseEnter: (p) => p.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (p) => p.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                f && /* @__PURE__ */ e.jsxs("div", { onClick: (p) => p.stopPropagation(), style: {
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
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Columns" }),
                  i.map((p) => /* @__PURE__ */ e.jsxs(
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
                      onClick: () => le(p.id),
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: p.name }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: y.has(p.id) ? /* @__PURE__ */ e.jsx(Dt, {}) : /* @__PURE__ */ e.jsx(Lt, {}) })
                      ]
                    },
                    p.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("th", { style: {
            ...ve.th,
            width: "40px",
            padding: "4px"
          } }),
          he.map((p) => /* @__PURE__ */ e.jsx(
            "th",
            {
              style: {
                ...ze(p).th,
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: $[p.id] || "",
                  onChange: (A) => {
                    D((R) => ({
                      ...R,
                      [p.id]: A.target.value
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
                  onClick: (A) => A.stopPropagation()
                }
              )
            },
            `search-${p.id}`
          )),
          /* @__PURE__ */ e.jsx("th", { style: {
            ...ve.th,
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("tbody", { children: [
        pe.map((p, A) => /* @__PURE__ */ e.jsxs(
          "tr",
          {
            style: {
              ...ve.tr,
              backgroundColor: A % 2 === 0 ? "#f8f9fa" : "#ffffff"
            },
            onMouseEnter: (R) => {
              R.currentTarget.style.backgroundColor = ve.trHover.backgroundColor;
            },
            onMouseLeave: (R) => {
              const te = A % 2 === 0 ? "#f8f9fa" : "#ffffff";
              R.currentTarget.style.backgroundColor = te;
            },
            children: [
              /* @__PURE__ */ e.jsx("td", { style: {
                ...ve.td,
                textAlign: "center",
                color: "#aaa"
              }, children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                /* @__PURE__ */ e.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: "#999" }, children: "⋮⋮" }),
                /* @__PURE__ */ e.jsx("button", { onClick: (R) => {
                  R.stopPropagation(), C(p.id);
                }, style: { ...ve.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ e.jsx(Fe, {}) })
              ] }) }),
              he.map((R) => {
                const te = x?.rowId === p.id && x?.colId === R.id;
                return /* @__PURE__ */ e.jsx(
                  "td",
                  {
                    style: {
                      ...ze(R).td,
                      userSelect: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    onClick: (de) => {
                      de.stopPropagation(), r({ rowId: p.id, colId: R.id });
                    },
                    children: Ae(R, p[R.id], p.id, te)
                  },
                  R.id
                );
              }),
              /* @__PURE__ */ e.jsx("td", { style: ve.td })
            ]
          },
          p.id
        )),
        /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: he.length + 2, style: {
          ...ve.td,
          textAlign: "center",
          color: "#aaa",
          cursor: "pointer"
        }, onClick: m, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
}
function On(n) {
  return ge({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z" }, child: [] }] })(n);
}
function Bn(n) {
  return ge({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z" }, child: [] }] })(n);
}
function St(n) {
  return ge({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, child: [] }, { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "15", x2: "12", y2: "3" }, child: [] }] })(n);
}
function Pn(n, o) {
  const [i, c] = je.useState(o);
  return { items: je.useMemo(() => {
    const x = [...n];
    return i?.key && x.sort((r, u) => {
      const s = r[i.key], y = u[i.key];
      return s < y ? i.direction === "ascending" ? -1 : 1 : s > y ? i.direction === "ascending" ? 1 : -1 : 0;
    }), x;
  }, [n, i]), requestSort: (x) => {
    let r = "ascending";
    i?.key === x && i?.direction === "ascending" && (r = "descending"), c({ key: x, direction: r });
  }, sortConfig: i };
}
const xe = {
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
}, Pe = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), Fn = (n, o, i) => {
  if (!n || typeof n != "string") return "";
  try {
    let c = n;
    const a = c.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (a && a.forEach((x) => {
      const r = x.slice(1, -1), u = i.find((s) => s.name === r);
      if (u && o[u.id] !== null && o[u.id] !== void 0) {
        const s = parseFloat(o[u.id]) || 0;
        c = c.replace(x, s.toString());
      } else
        c = c.replace(x, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(c))
      return "Invalid formula";
    const h = Function('"use strict"; return (' + c + ")")();
    return isNaN(h) ? "Error" : h.toString();
  } catch {
    return "Error";
  }
}, zt = ({ columns: n, initialData: o }) => {
  const [i, c] = k(n), [a, h] = k(o), [x, r] = k(null), [u, s] = k(null), [y, W] = k(/* @__PURE__ */ new Set()), [f, b] = k(!1), [B, P] = k(!1), [H, T] = k(/* @__PURE__ */ new Set()), [S, w] = k(null), [g, M] = k(""), [_, N] = k(!1), [O, F] = k(null), [V, G] = k(/* @__PURE__ */ new Set()), [$, D] = k(null), [q, X] = k(null), [U, se] = k(null), [v, ne] = k(null), [Q, m] = k(/* @__PURE__ */ new Set()), [C, j] = k({}), [E, Z] = k(null), [le, ee] = k(null), [re, ce] = k(null), [he, pe] = k(!1), [be, ze] = k(null), [Ae, p] = k(/* @__PURE__ */ new Set()), [A, R] = k(null), [te, de] = k(""), [ae, J] = k(null), [me, ke] = k(null), [Se, We] = k({}), [De, Le] = k(null), [$e, Je] = k("#ffffff"), [_e, Bt] = k("#f8f9fa"), [tt, He] = k(!1), [nt, Ne] = k(!1), [z, Pt] = k(!1), [rt, Ft] = k({}), [Me, ot] = k(null), [it, _t] = k(0), [st, Ht] = k(0), {
    items: Nt,
    sortConfig: lt,
    requestSort: Vt
  } = Pn(a, { key: null, direction: "ascending" });
  Ee(() => {
    const t = () => {
      P(!1), b(!1), w(null), Le(null), He(!1), Ne(!1), ce(null);
    }, l = (d) => {
      if (d.key === "Escape")
        d.preventDefault(), ce(null), r(null);
      else if (x && (d.ctrlKey || d.metaKey))
        if (d.key === "c") {
          d.preventDefault();
          const L = a.find((Y) => Y.id === x.rowId) || Object.values(C).flat().find((Y) => Y.id === x.rowId);
          L && ce({
            rowId: x.rowId,
            colId: x.colId,
            value: L[x.colId]
          });
        } else d.key === "v" && re && (d.preventDefault(), Ce(x.rowId, x.colId, re.value));
    };
    return document.addEventListener("click", t), document.addEventListener("keydown", l), () => {
      document.removeEventListener("click", t), document.removeEventListener("keydown", l);
    };
  }, [x, re, a, C]), Ee(() => {
    const t = (l) => {
      A && l.key === "Enter" ? (l.preventDefault(), ct(A.columnId, te, A.rowId)) : A && l.key === "Escape" && (R(null), de(""));
    };
    if (A)
      return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
  }, [A, te]);
  const Yt = () => {
    const t = Pe(), l = `row-${Date.now()}`, d = {
      id: l,
      ...i.reduce((L, Y) => ({
        ...L,
        [Y.id]: Y.type === "createdTime" || Y.type === "lastEditedTime" ? t : Y.type === "formula" ? "" : Y.type === "id" ? l : null
      }), {})
    };
    h([...a, d]);
  }, Xt = (t) => {
    window.confirm("Are you sure you want to delete this row?") && h(a.filter((l) => l.id !== t));
  }, Ce = (t, l, d) => {
    const L = Pe();
    if (i.find((K) => K.id === l)?.type === "email" && d) {
      const K = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, I = `${t}-${l}`;
      K.test(d) ? T((oe) => {
        const fe = new Set(oe);
        return fe.delete(I), fe;
      }) : T((oe) => new Set(oe).add(I));
    }
    if (t.startsWith("subrow-")) {
      const K = t.split("-")[1];
      j((I) => ({
        ...I,
        [K]: I[K]?.map((oe) => {
          if (oe.id === t) {
            const fe = { ...oe, [l]: d };
            return i.forEach((ie) => {
              ie.type === "lastEditedTime" && (fe[ie.id] = L);
            }), fe;
          }
          return oe;
        }) || []
      }));
    } else
      h(a.map((K) => {
        if (K.id === t) {
          const I = { ...K, [l]: d };
          return i.forEach((oe) => {
            oe.type === "lastEditedTime" && (I[oe.id] = L);
          }), I;
        }
        return K;
      }));
    r(null);
  }, ye = (t = "text", l) => {
    const d = `col-${Date.now()}`, L = Pe(), Y = l || t.charAt(0).toUpperCase() + t.slice(1), K = {
      id: d,
      name: g.trim() || Y,
      type: t,
      options: t === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    c([...i, K]), h(a.map((oe) => ({
      ...oe,
      [d]: t === "createdTime" || t === "lastEditedTime" ? L : t === "formula" ? "" : t === "id" ? oe.id : null
    })));
    const I = { ...C };
    Object.keys(I).forEach((oe) => {
      I[oe] = I[oe].map((fe) => ({
        ...fe,
        [d]: t === "createdTime" || t === "lastEditedTime" ? L : t === "formula" ? "" : t === "id" ? fe.id : null
      }));
    }), j(I), P(!1), M("");
  }, Ut = (t, l) => {
    c(i.map((d) => d.id === t ? { ...d, name: l } : d)), s(null);
  }, at = (t) => {
    W((l) => {
      const d = new Set(l);
      return d.has(t) ? d.delete(t) : d.add(t), d;
    }), w(null);
  }, Kt = (t) => {
    c(i.filter((l) => l.id !== t)), h(a.map((l) => {
      const { [t]: d, ...L } = l;
      return L;
    })), w(null);
  }, qt = (t) => {
    const l = i.find((oe) => oe.id === t);
    if (!l) return;
    const d = i.findIndex((oe) => oe.id === t), L = `col-${Date.now()}`, Y = {
      ...l,
      id: L,
      name: `${l.name} Copy`
    }, K = [...i];
    K.splice(d + 1, 0, Y), c(K), h(a.map((oe) => ({
      ...oe,
      [L]: oe[t]
    })));
    const I = { ...C };
    Object.keys(I).forEach((oe) => {
      I[oe] = I[oe].map((fe) => ({
        ...fe,
        [L]: fe[t]
      }));
    }), j(I), w(null);
  }, Gt = (t, l, d) => {
    N(!0), F({ rowId: t, colId: l, value: d }), G(/* @__PURE__ */ new Set([`${t}-${l}`]));
  }, Jt = (t, l) => {
    _ && O && O.colId === l && G((d) => new Set(d).add(`${t}-${l}`));
  }, Zt = () => {
    if (_ && O) {
      const t = a.map((l) => {
        const d = `${l.id}-${O.colId}`;
        return V.has(d) ? { ...l, [O.colId]: O.value } : l;
      });
      h(t);
    }
    N(!1), F(null), G(/* @__PURE__ */ new Set());
  }, Qt = (t) => {
    D(t);
  }, en = (t, l) => {
    t.preventDefault(), X(l);
  }, tn = (t, l) => {
    if (t.preventDefault(), $ && $ !== l) {
      const d = i.findIndex((I) => I.id === $), L = i.findIndex((I) => I.id === l), Y = [...i], [K] = Y.splice(d, 1);
      Y.splice(L, 0, K), c(Y);
    }
    D(null), X(null);
  }, nn = () => {
    D(null), X(null);
  }, rn = (t) => {
    se(t);
  }, on = (t, l) => {
    t.preventDefault(), ne(l);
  }, sn = (t, l) => {
    if (t.preventDefault(), U && U !== l) {
      const d = a.findIndex((I) => I.id === U), L = a.findIndex((I) => I.id === l), Y = [...a], [K] = Y.splice(d, 1);
      Y.splice(L, 0, K), h(Y);
    }
    se(null), ne(null);
  }, ln = () => {
    se(null), ne(null);
  }, an = (t) => {
    Q.has(t) ? m((d) => {
      const L = new Set(d);
      return L.delete(t), L;
    }) : (m((d) => {
      const L = new Set(d);
      return L.add(t), L;
    }), (!C[t] || C[t].length === 0) && dt(t));
  }, dt = (t) => {
    const l = Pe(), d = `subrow-${t}-${Date.now()}`, L = {
      id: d,
      ...i.reduce((Y, K) => ({
        ...Y,
        [K.id]: K.type === "createdTime" || K.type === "lastEditedTime" ? l : K.type === "formula" ? "" : K.type === "id" ? d : null
      }), {})
    };
    j((Y) => ({
      ...Y,
      [t]: [...Y[t] || [], L]
    }));
  }, dn = (t, l) => {
    window.confirm("Are you sure you want to delete this sub-row?") && j((d) => ({
      ...d,
      [t]: d[t]?.filter((L) => L.id !== l) || []
    }));
  }, cn = (t, l) => {
    Z({ subRowId: t, parentId: l });
  }, pn = (t, l) => {
    t.preventDefault(), ee(l);
  }, fn = (t, l, d) => {
    if (t.preventDefault(), E && E.subRowId !== l && E.parentId === d) {
      const L = C[d] || [], Y = L.findIndex((fe) => fe.id === E.subRowId), K = L.findIndex((fe) => fe.id === l), I = [...L], [oe] = I.splice(Y, 1);
      I.splice(K, 0, oe), j((fe) => ({
        ...fe,
        [d]: I
      }));
    }
    Z(null), ee(null);
  }, xn = () => {
    Z(null), ee(null);
  }, un = (t, l, d, L) => {
    pe(!0), ze({ rowId: t, colId: l, value: d, parentId: L }), p(/* @__PURE__ */ new Set([`${t}-${l}`]));
  }, gn = (t, l, d) => {
    he && be && be.colId === l && be.parentId === d && p((L) => new Set(L).add(`${t}-${l}`));
  }, hn = () => {
    if (he && be) {
      const t = be.parentId, l = Pe(), d = {
        ...C,
        [t]: C[t]?.map((L) => {
          const Y = `${L.id}-${be.colId}`;
          if (Ae.has(Y)) {
            const K = { ...L, [be.colId]: be.value };
            return i.forEach((I) => {
              I.type === "lastEditedTime" && (K[I.id] = l);
            }), K;
          }
          return L;
        }) || []
      };
      j(d);
    }
    pe(!1), ze(null), p(/* @__PURE__ */ new Set());
  }, ct = (t, l, d) => {
    if (!l.trim()) return;
    const L = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], Y = L[Math.floor(Math.random() * L.length)];
    c(i.map((K) => {
      if (K.id === t && K.type === "select") {
        const I = K.options || [];
        if (!I.some((fe) => fe.value.toLowerCase() === l.toLowerCase()))
          return {
            ...K,
            options: [...I, { value: l, color: Y }]
          };
      }
      return K;
    })), Ce(d, t, l), R(null), de("");
  }, bn = (t, l) => {
    c(i.map((L) => L.id === t && L.type === "select" ? {
      ...L,
      options: L.options?.filter((Y) => Y.value !== l) || []
    } : L)), h(a.map((L) => L[t] === l ? { ...L, [t]: null } : L));
    const d = { ...C };
    Object.keys(d).forEach((L) => {
      d[L] = d[L].map((Y) => Y[t] === l ? { ...Y, [t]: null } : Y);
    }), j(d);
  }, yn = (t, l) => {
    c(i.map(
      (d) => d.id === t ? { ...d, color: l } : d
    )), ke(null), w(null);
  }, Te = (t) => {
    const l = t.color || "#f8f9fa", d = rt[t.id] || 150;
    return {
      th: {
        ...xe.th,
        backgroundColor: l,
        color: t.color && t.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${d}px`,
        minWidth: `${d}px`,
        maxWidth: `${d}px`
      },
      td: {
        ...xe.td,
        backgroundColor: t.color ? `${l}33` : "#ffffff",
        width: `${d}px`,
        minWidth: `${d}px`,
        maxWidth: `${d}px`
      }
    };
  }, mn = (t, l) => {
    t.preventDefault(), t.stopPropagation(), ot(l), _t(t.clientX), Ht(rt[l] || 150);
  }, pt = (t) => {
    if (!Me) return;
    const l = t.clientX - it, d = Math.max(50, st + l);
    Ft((L) => ({ ...L, [Me]: d }));
  }, ft = () => {
    ot(null);
  };
  Ee(() => {
    if (Me)
      return document.addEventListener("mousemove", pt), document.addEventListener("mouseup", ft), () => {
        document.removeEventListener("mousemove", pt), document.removeEventListener("mouseup", ft);
      };
  }, [Me, it, st]);
  const Ie = i.filter((t) => !y.has(t.id)), Ve = Nt.filter((t) => Object.entries(Se).every(([l, d]) => {
    if (!d.trim()) return !0;
    const L = t[l];
    return L == null ? !1 : String(L).toLowerCase().includes(d.toLowerCase());
  })), vn = (t) => {
    We((l) => {
      const d = { ...l };
      return delete d[t], d;
    });
  }, jn = (t) => lt.key === t ? lt.direction === "ascending" ? "▲" : "▼" : "↕", xt = (t, l, d, L) => {
    const Y = `${d}-${t.id}`, K = H.has(Y);
    if (L)
      switch (t.type) {
        case "checkbox":
          return /* @__PURE__ */ e.jsx("input", { type: "checkbox", checked: !!l, onChange: (I) => Ce(d, t.id, I.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ e.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: l || "",
              onChange: (I) => {
                I.target.value === "__add_new__" ? (R({ columnId: t.id, rowId: d }), de("")) : I.target.value === "__manage_options__" ? J({ columnId: t.id, rowId: d }) : Ce(d, t.id, I.target.value);
              },
              autoFocus: !0,
              onBlur: () => r(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "", children: "Select..." }),
                t.options?.map((I) => /* @__PURE__ */ e.jsx("option", { value: I.value, children: I.value }, I.value)),
                /* @__PURE__ */ e.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ e.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "createdTime":
        case "lastEditedTime":
          return /* @__PURE__ */ e.jsx("span", { style: { color: "#888" }, children: l });
        case "date":
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "date",
              defaultValue: l || "",
              onBlur: (I) => Ce(d, t.id, I.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "button":
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              defaultValue: l || "Click me",
              onBlur: (I) => Ce(d, t.id, I.target.value),
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
          return /* @__PURE__ */ e.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => {
                const I = document.createElement("input");
                I.type = "file", I.multiple = !0, I.accept = "image/*,video/*", I.onchange = (oe) => {
                  const ie = Array.from(oe.target.files || []).map((we) => ({
                    name: we.name,
                    url: URL.createObjectURL(we),
                    type: we.type
                  }));
                  Ce(d, t.id, ie);
                }, I.click();
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
              children: /* @__PURE__ */ e.jsx(St, {})
            }
          ) });
        case "number":
          return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              defaultValue: l || "",
              onBlur: (I) => Ce(d, t.id, I.target.value),
              onKeyPress: (I) => {
                t.name === "Phone" ? (!/[0-9]/.test(I.key) || I.currentTarget.value.replace(/\D/g, "").length >= 10) && I.preventDefault() : /[0-9\-+.,\s]/.test(I.key) || I.preventDefault();
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
          return /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "email",
                defaultValue: l || "",
                onBlur: (I) => Ce(d, t.id, I.target.value),
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
            K && /* @__PURE__ */ e.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "formula":
          return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              defaultValue: l || "",
              placeholder: "e.g., [Column1] + [Column2] * 2",
              onBlur: (I) => Ce(d, t.id, I.target.value),
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
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              defaultValue: l || "",
              placeholder: "Enter location",
              onBlur: (I) => Ce(d, t.id, I.target.value),
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
          return /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "url",
              defaultValue: l || "",
              placeholder: "Enter URL",
              onBlur: (I) => Ce(d, t.id, I.target.value),
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
          return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
            /* @__PURE__ */ e.jsx(
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
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => alert(`Viewing row ${d}`),
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
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => alert(`Calling for row ${d}`),
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
          return /* @__PURE__ */ e.jsx("span", { style: { color: "#888", fontFamily: "monospace" }, children: l });
        case "text":
        default:
          return /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                defaultValue: l || "",
                onBlur: (I) => Ce(d, t.id, I.target.value),
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
            K && t.name === "Email" && /* @__PURE__ */ e.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
      }
    if (l == null) return /* @__PURE__ */ e.jsx("span", { style: { color: "#aaa" } });
    switch (t.type) {
      case "checkbox":
        return /* @__PURE__ */ e.jsx("input", { type: "checkbox", checked: !!l, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(l).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ e.jsx("span", { style: { color: "#888" }, children: l });
      case "select":
        const I = t.options?.find((ie) => ie.value === l);
        return I ? /* @__PURE__ */ e.jsx("span", { style: {
          backgroundColor: I.color + "33",
          color: I.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: l }) : l;
      case "number":
        return /* @__PURE__ */ e.jsx("span", { style: { textAlign: "right", display: "block" }, children: t.name === "Phone" ? l : Number(l).toLocaleString() });
      case "button":
        return /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => alert(`Button clicked in row ${d}!`),
            style: {
              padding: "4px 8px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px"
            },
            children: l || "Click me"
          }
        );
      case "files":
        return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", maxWidth: "200px", alignItems: "center" }, children: [
          Array.isArray(l) && l.length > 0 ? l.map((ie, we) => /* @__PURE__ */ e.jsx("div", { style: { position: "relative" }, children: ie.type?.startsWith("image/") ? /* @__PURE__ */ e.jsx(
            "img",
            {
              src: ie.url,
              alt: ie.name,
              style: {
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer"
              },
              onClick: () => window.open(ie.url, "_blank"),
              title: ie.name
            }
          ) : ie.type?.startsWith("video/") ? /* @__PURE__ */ e.jsx(
            "video",
            {
              src: ie.url,
              style: {
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer"
              },
              onClick: () => window.open(ie.url, "_blank"),
              title: ie.name
            }
          ) : /* @__PURE__ */ e.jsx(
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
              onClick: () => window.open(ie.url, "_blank"),
              title: ie.name,
              children: "📄"
            }
          ) }, we)) : null,
          /* @__PURE__ */ e.jsx(
            St,
            {
              style: {
                fontSize: "16px",
                color: "#666",
                cursor: "pointer",
                marginLeft: Array.isArray(l) && l.length > 0 ? "4px" : "0"
              },
              onClick: () => {
                const ie = document.createElement("input");
                ie.type = "file", ie.multiple = !0, ie.accept = "image/*,video/*", ie.onchange = (we) => {
                  const Cn = Array.from(we.target.files || []).map((Ze) => ({
                    name: Ze.name,
                    url: URL.createObjectURL(Ze),
                    type: Ze.type
                  })), kn = Array.isArray(l) ? l : [];
                  Ce(d, t.id, [...kn, ...Cn]);
                }, ie.click();
              },
              title: "Upload files"
            }
          )
        ] });
      case "email":
        return /* @__PURE__ */ e.jsxs("div", { children: [
          l,
          K && /* @__PURE__ */ e.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const oe = a.find((ie) => ie.id === d) || Object.values(C).flat().find((ie) => ie.id === d), fe = oe ? Fn(l, oe, i) : "Error";
        return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ e.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: fe }),
          /* @__PURE__ */ e.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: l, children: "Σ" })
        ] });
      case "place":
        return /* @__PURE__ */ e.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              position: "relative",
              cursor: "pointer"
            },
            onMouseEnter: (ie) => {
              if (l) {
                const we = document.createElement("div");
                we.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y931Pk&q=${encodeURIComponent(l)}" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`, we.style.cssText = "position: absolute; top: -210px; left: 0; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;", we.id = `map-tooltip-${d}-${t.id}`, ie.currentTarget.appendChild(we);
              }
            },
            onMouseLeave: () => {
              const ie = document.getElementById(`map-tooltip-${d}-${t.id}`);
              ie && ie.remove();
            },
            children: [
              /* @__PURE__ */ e.jsx("span", { style: { marginRight: "4px" }, children: "📍" }),
              /* @__PURE__ */ e.jsx("span", { children: l || "No location" })
            ]
          }
        );
      case "url":
        return l ? /* @__PURE__ */ e.jsx(
          "a",
          {
            href: l.startsWith("http") ? l : `https://${l}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              color: "#007bff",
              textDecoration: "underline",
              cursor: "pointer"
            },
            children: l
          }
        ) : /* @__PURE__ */ e.jsx("span", { style: { color: "#aaa" }, children: "No URL" });
      case "action":
        return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
          /* @__PURE__ */ e.jsx(
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
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => alert(`Viewing row ${d}`),
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
          /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => alert(`Calling for row ${d}`),
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
        return /* @__PURE__ */ e.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: l });
      case "text":
      default:
        return /* @__PURE__ */ e.jsxs("div", { children: [
          l,
          K && t.name === "Email" && /* @__PURE__ */ e.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
    }
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    A && /* @__PURE__ */ e.jsx("div", { style: {
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
    }, children: /* @__PURE__ */ e.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: te,
          onChange: (t) => de(t.target.value),
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
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              R(null), de("");
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
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => ct(A.columnId, te, A.rowId),
            disabled: !te.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: te.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: te.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    ae && /* @__PURE__ */ e.jsx("div", { style: {
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
    }, children: /* @__PURE__ */ e.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px",
      maxHeight: "400px",
      overflowY: "auto"
    }, children: [
      /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Manage Options" }),
      /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "15px" }, children: i.find((t) => t.id === ae.columnId)?.options?.map((t) => /* @__PURE__ */ e.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "4px",
        backgroundColor: t.color + "33",
        borderRadius: "4px",
        border: `1px solid ${t.color}44`
      }, children: [
        /* @__PURE__ */ e.jsx("span", { style: { color: t.color, fontWeight: "500" }, children: t.value }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => {
              window.confirm(`Delete option "${t.value}"? This will clear the value from all cells using this option.`) && bn(ae.columnId, t.value);
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
      ] }, t.value)) }),
      /* @__PURE__ */ e.jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => J(null),
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
    /* @__PURE__ */ e.jsx("style", { children: `
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
    /* @__PURE__ */ e.jsxs("table", { style: {
      ...xe.table,
      backgroundColor: z ? "#1a1a1a" : "#ffffff",
      color: z ? "#ffffff" : "#333333",
      border: z ? "2px solid #333" : "2px solid #e1e5e9"
    }, children: [
      /* @__PURE__ */ e.jsxs("thead", { children: [
        /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("th", { style: {
            ...xe.th,
            width: "40px",
            backgroundColor: z ? "#2a2a2a" : "#f8f9fa",
            borderRight: z ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: z ? "2px solid #444" : "2px solid #e1e5e9"
          } }),
          Ie.map((t) => {
            const l = u === t.id;
            return /* @__PURE__ */ e.jsxs(
              "th",
              {
                draggable: !Me,
                onDragStart: () => !Me && Qt(t.id),
                onDragOver: (d) => en(d, t.id),
                onDrop: (d) => tn(d, t.id),
                onDragEnd: nn,
                style: {
                  ...Te(t).th,
                  position: "relative",
                  backgroundColor: q === t.id ? z ? "#444" : "#e3f2fd" : z ? "#2a2a2a" : Te(t).th.backgroundColor,
                  color: z ? "#ffffff" : Te(t).th.color,
                  borderRight: z ? "1px solid #444" : "1px solid #e1e5e9",
                  borderBottom: z ? "2px solid #444" : "2px solid #e1e5e9",
                  opacity: $ === t.id ? 0.5 : 1,
                  cursor: Me ? "col-resize" : "move"
                },
                title: `Sort by ${t.name}`,
                children: [
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (d) => {
                        d.stopPropagation(), d.detail === 1 ? (P(!1), b(!1), w(S === t.id ? null : t.id)) : d.detail === 2 && (s(t.id), w(null));
                      },
                      children: l ? /* @__PURE__ */ e.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: t.name,
                          onBlur: (d) => Ut(t.id, d.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                        /* @__PURE__ */ e.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: t.name }),
                        /* @__PURE__ */ e.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (d) => {
                              d.stopPropagation(), Vt(t.id);
                            },
                            children: jn(t.id)
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      onMouseDown: (d) => mn(d, t.id),
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
                      onMouseEnter: (d) => {
                        Me || (d.currentTarget.style.backgroundColor = z ? "#666" : "#ccc");
                      },
                      onMouseLeave: (d) => {
                        d.currentTarget.style.backgroundColor = "transparent";
                      }
                    }
                  ),
                  S === t.id && /* @__PURE__ */ e.jsxs("div", { style: {
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
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (d) => {
                          d.stopPropagation(), Le(De === t.id ? null : t.id);
                        },
                        children: [
                          "Filter",
                          De === t.id && /* @__PURE__ */ e.jsxs("div", { style: {
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
                            /* @__PURE__ */ e.jsx(
                              "input",
                              {
                                type: "text",
                                placeholder: `Filter ${t.name}...`,
                                value: Se[t.id] || "",
                                onChange: (d) => {
                                  We((L) => ({
                                    ...L,
                                    [t.id]: d.target.value
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
                            Se[t.id] && /* @__PURE__ */ e.jsx(
                              "button",
                              {
                                onClick: (d) => {
                                  d.stopPropagation(), vn(t.id);
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
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (d) => {
                          d.stopPropagation(), qt(t.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (d) => {
                          d.stopPropagation(), at(t.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ e.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (d) => {
                          d.stopPropagation(), Kt(t.id);
                        },
                        children: "Delete"
                      }
                    ),
                    /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333", position: "relative" },
                        onClick: (d) => {
                          d.stopPropagation(), ke(me === t.id ? null : t.id);
                        },
                        children: [
                          "Column Color",
                          me === t.id && /* @__PURE__ */ e.jsx("div", { style: {
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
                          }, children: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd", "#f8f9fa"].map((d) => /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              onClick: (L) => {
                                L.stopPropagation(), yn(t.id, d);
                              },
                              style: {
                                width: "20px",
                                height: "20px",
                                backgroundColor: d,
                                borderRadius: "3px",
                                cursor: "pointer",
                                border: t.color === d ? "2px solid #333" : "1px solid #ddd"
                              }
                            },
                            d
                          )) })
                        ]
                      }
                    )
                  ] })
                ]
              },
              t.id
            );
          }),
          /* @__PURE__ */ e.jsxs(
            "th",
            {
              style: {
                ...xe.th,
                color: z ? "#888" : "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px",
                backgroundColor: z ? "#2a2a2a" : "#f8f9fa",
                borderRight: z ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: z ? "2px solid #444" : "2px solid #e1e5e9"
              },
              children: [
                /* @__PURE__ */ e.jsx("button", { onClick: (t) => {
                  t.stopPropagation(), w(null), b(!1), P(!B);
                }, title: "Add column", style: { ...xe.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ e.jsx("button", { onClick: (t) => {
                  t.stopPropagation(), w(null), P(!1), b(!f);
                }, style: { ...xe.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                B && /* @__PURE__ */ e.jsxs("div", { onClick: (t) => t.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: z ? "#2a2a2a" : "#ffffff",
                  border: z ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "180px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ e.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: g,
                      onChange: (t) => M(t.target.value),
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
                  /* @__PURE__ */ e.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("text"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("number"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("select"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("checkbox"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("date"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("number", "Phone"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "📞" }),
                    " Phone"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("email"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("place", "Place"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "📍" }),
                    " Place"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("url", "URL"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "🔗" }),
                    " URL"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("formula", "Formula"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("button", "Button"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "🖱️" }),
                    " Button"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("files", "Files"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "📎" }),
                    " Files"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("id", "ID"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("action", "Action"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "⚡" }),
                    " Action"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("createdTime", "Created time"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: z ? "#ffffff" : "#333333" }, onClick: () => ye("lastEditedTime", "Last edited time"), onMouseEnter: (t) => t.currentTarget.style.backgroundColor = z ? "#444" : "#d3d3d3ff", onMouseLeave: (t) => t.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ e.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                f && /* @__PURE__ */ e.jsxs("div", { onClick: (t) => t.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: z ? "#2a2a2a" : "#ffffff",
                  border: z ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ e.jsxs("div", { style: { padding: "4px 0", borderBottom: "1px solid #e1e5e9", marginBottom: "8px" }, children: [
                    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", color: z ? "#ccc" : "#666" }, children: "Dark Mode" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          onClick: () => Pt(!z),
                          style: {
                            width: "40px",
                            height: "20px",
                            borderRadius: "10px",
                            backgroundColor: z ? "#007bff" : "#ccc",
                            position: "relative",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                          },
                          children: /* @__PURE__ */ e.jsx(
                            "div",
                            {
                              style: {
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                position: "absolute",
                                top: "2px",
                                left: z ? "22px" : "2px",
                                transition: "left 0.3s"
                              }
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: z ? "#ccc" : "#666", marginBottom: "4px" }, children: "Row Colors" }),
                    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", position: "relative" }, children: [
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Odd:" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          onClick: (t) => {
                            t.stopPropagation(), He(!tt), Ne(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: $e,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      tt && /* @__PURE__ */ e.jsx("div", { style: {
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
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((t) => /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          onClick: (l) => {
                            l.stopPropagation(), Je(t), He(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: t,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: $e === t ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        t
                      )) })
                    ] }),
                    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", position: "relative" }, children: [
                      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Even:" }),
                      /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          onClick: (t) => {
                            t.stopPropagation(), Ne(!nt), He(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: _e,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      nt && /* @__PURE__ */ e.jsx("div", { style: {
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
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((t) => /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          onClick: (l) => {
                            l.stopPropagation(), Bt(t), Ne(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: t,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: _e === t ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        t
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { borderTop: "1px solid #e1e5e9", marginTop: "8px", paddingTop: "8px" }, children: [
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: z ? "#ccc" : "#666", marginBottom: "8px", fontWeight: "500" }, children: "Active Users" }),
                    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
                      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px", backgroundColor: z ? "#333" : "#f8f9fa" }, children: [
                        /* @__PURE__ */ e.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28a745" } }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", color: z ? "#fff" : "#333" }, children: "Current User" }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "10px", color: z ? "#888" : "#666", marginLeft: "auto" }, children: "Online" })
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ e.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc3545" } }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", color: z ? "#fff" : "#333" }, children: "Admin" }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "10px", color: z ? "#888" : "#666", marginLeft: "auto" }, children: "Away" })
                      ] }),
                      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ e.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6c757d" } }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", color: z ? "#fff" : "#333" }, children: "Guest" }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "10px", color: z ? "#888" : "#666", marginLeft: "auto" }, children: "Offline" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: z ? "#ccc" : "#666", marginBottom: "4px" }, children: "Columns" }),
                  i.map((t) => /* @__PURE__ */ e.jsxs(
                    "div",
                    {
                      style: {
                        padding: "4px 8px",
                        cursor: "pointer",
                        color: z ? "#ffffff" : "#333333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "13px"
                      },
                      onClick: () => at(t.id),
                      children: [
                        /* @__PURE__ */ e.jsx("span", { children: t.name }),
                        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: y.has(t.id) ? /* @__PURE__ */ e.jsx(Dt, {}) : /* @__PURE__ */ e.jsx(Lt, {}) })
                      ]
                    },
                    t.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("tr", { children: [
          /* @__PURE__ */ e.jsx("th", { style: {
            ...xe.th,
            width: "40px",
            backgroundColor: z ? "#2a2a2a" : "#f8f9fa",
            borderRight: z ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: z ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } }),
          Ie.map((t) => /* @__PURE__ */ e.jsx(
            "th",
            {
              style: {
                ...Te(t).th,
                backgroundColor: z ? "#2a2a2a" : "#f8f9fa",
                color: z ? "#ffffff" : "#666666",
                borderRight: z ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: z ? "2px solid #444" : "2px solid #e1e5e9",
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: Se[t.id] || "",
                  onChange: (l) => {
                    We((d) => ({
                      ...d,
                      [t.id]: l.target.value
                    }));
                  },
                  style: {
                    width: "90%",
                    padding: "4px 6px",
                    border: z ? "1px solid #444" : "1px solid #e1e5e9",
                    borderRadius: "4px",
                    fontSize: "12px",
                    outline: "none",
                    backgroundColor: z ? "#1a1a1a" : "#ffffff",
                    color: z ? "#ffffff" : "#333333"
                  },
                  onClick: (l) => l.stopPropagation()
                }
              )
            },
            `search-${t.id}`
          )),
          /* @__PURE__ */ e.jsx("th", { style: {
            ...xe.th,
            backgroundColor: z ? "#2a2a2a" : "#f8f9fa",
            borderRight: z ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: z ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("tbody", { children: [
        Ve.map((t) => /* @__PURE__ */ e.jsxs(je.Fragment, { children: [
          /* @__PURE__ */ e.jsxs(
            "tr",
            {
              draggable: !0,
              onDragStart: () => rn(t.id),
              onDragOver: (l) => on(l, t.id),
              onDrop: (l) => sn(l, t.id),
              onDragEnd: ln,
              style: {
                ...xe.tr,
                backgroundColor: v === t.id ? z ? "#444" : "#e3f2fd" : z ? Ve.indexOf(t) % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : Ve.indexOf(t) % 2 === 0 ? _e : $e,
                opacity: U === t.id ? 0.5 : 1,
                cursor: "move"
              },
              onMouseEnter: (l) => {
                !U && !z && (l.currentTarget.style.backgroundColor = xe.trHover.backgroundColor);
              },
              onMouseLeave: (l) => {
                if (!U) {
                  const d = Ve.indexOf(t), L = z ? d % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : d % 2 === 0 ? _e : $e;
                  l.currentTarget.style.backgroundColor = v === t.id ? z ? "#444" : "#e3f2fd" : L;
                }
              },
              children: [
                /* @__PURE__ */ e.jsx("td", { style: {
                  ...xe.td,
                  textAlign: "center",
                  color: z ? "#888" : "#aaa",
                  backgroundColor: "inherit",
                  border: z ? "1px solid #444" : "1px solid #cececeff"
                }, children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                  /* @__PURE__ */ e.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: z ? "#888" : "#999" }, children: "⋮⋮" }),
                  /* @__PURE__ */ e.jsx("button", { onClick: (l) => {
                    l.stopPropagation(), Xt(t.id);
                  }, style: { ...xe.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ e.jsx(Fe, {}) }),
                  /* @__PURE__ */ e.jsx("button", { onClick: (l) => {
                    l.stopPropagation(), an(t.id);
                  }, style: { ...xe.button, cursor: "pointer", color: "#242424ff", backgroundColor: "transparent", fontSize: "12px" }, title: "Toggle sub-rows", children: Q.has(t.id) ? /* @__PURE__ */ e.jsx(On, {}) : /* @__PURE__ */ e.jsx(Bn, {}) })
                ] }) }),
                Ie.map((l) => {
                  const d = x?.rowId === t.id && x?.colId === l.id, L = `${t.id}-${l.id}`, Y = V.has(L);
                  return /* @__PURE__ */ e.jsx(
                    "td",
                    {
                      style: {
                        ...Te(l).td,
                        backgroundColor: Y ? z ? "#444" : "#f0f0f0" : re?.rowId === t.id && re?.colId === l.id ? z ? "#444" : "#e3f2fd" : l.color ? Te(l).td.backgroundColor : "inherit",
                        color: z ? "#ffffff" : "#333333",
                        border: re?.rowId === t.id && re?.colId === l.id ? "2px dashed #007bff" : z ? "1px solid #444" : "1px solid #cececeff",
                        userSelect: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      onClick: (K) => {
                        K.stopPropagation(), r({ rowId: t.id, colId: l.id });
                      },
                      draggable: !d,
                      onDragStart: (K) => {
                        K.stopPropagation(), Gt(t.id, l.id, t[l.id]);
                      },
                      onDragEnter: (K) => {
                        K.stopPropagation(), Jt(t.id, l.id);
                      },
                      onDragEnd: (K) => {
                        K.stopPropagation(), Zt();
                      },
                      onDragOver: (K) => {
                        K.preventDefault(), K.stopPropagation();
                      },
                      children: xt(l, t[l.id], t.id, d)
                    },
                    l.id
                  );
                }),
                /* @__PURE__ */ e.jsx("td", { style: {
                  ...xe.td,
                  backgroundColor: "inherit",
                  border: z ? "1px solid #444" : "1px solid #cececeff"
                } })
              ]
            }
          ),
          Q.has(t.id) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            C[t.id]?.map((l) => /* @__PURE__ */ e.jsxs(
              "tr",
              {
                draggable: !0,
                onDragStart: () => cn(l.id, t.id),
                onDragOver: (d) => pn(d, l.id),
                onDrop: (d) => fn(d, l.id, t.id),
                onDragEnd: xn,
                style: {
                  ...xe.tr,
                  backgroundColor: le === l.id ? "#d1ecf1" : "#e9ecef",
                  opacity: E?.subRowId === l.id ? 0.5 : 1,
                  cursor: "move"
                },
                children: [
                  /* @__PURE__ */ e.jsx("td", { style: { ...xe.td, textAlign: "center", color: "#aaa", backgroundColor: "#e9ecef" }, children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", paddingLeft: "20px" }, children: [
                    /* @__PURE__ */ e.jsx("span", { style: { cursor: "grab", fontSize: "10px", color: "#999" }, children: "⋮⋮" }),
                    /* @__PURE__ */ e.jsx("button", { onClick: (d) => {
                      d.stopPropagation(), dn(t.id, l.id);
                    }, style: { ...xe.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff", fontSize: "10px" }, title: "Delete sub-row", children: /* @__PURE__ */ e.jsx(Fe, {}) })
                  ] }) }),
                  Ie.map((d) => {
                    const L = x?.rowId === l.id && x?.colId === d.id;
                    return /* @__PURE__ */ e.jsx(
                      "td",
                      {
                        style: {
                          ...Te(d).td,
                          backgroundColor: Ae.has(`${l.id}-${d.id}`) ? "#f0f0f0" : re?.rowId === l.id && re?.colId === d.id ? "#e3f2fd" : d.color ? `${d.color}22` : "#ecececff",
                          border: re?.rowId === l.id && re?.colId === d.id ? "2px dashed #007bff" : Te(d).td.border,
                          userSelect: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        onClick: (Y) => {
                          Y.stopPropagation(), r({ rowId: l.id, colId: d.id });
                        },
                        draggable: !L,
                        onDragStart: (Y) => {
                          Y.stopPropagation(), un(l.id, d.id, l[d.id], t.id);
                        },
                        onDragEnter: (Y) => {
                          Y.stopPropagation(), gn(l.id, d.id, t.id);
                        },
                        onDragEnd: (Y) => {
                          Y.stopPropagation(), hn();
                        },
                        onDragOver: (Y) => {
                          Y.preventDefault(), Y.stopPropagation();
                        },
                        children: xt(d, l[d.id], l.id, L)
                      },
                      d.id
                    );
                  }),
                  /* @__PURE__ */ e.jsx("td", { style: { ...xe.td, backgroundColor: "#e9ecef" } })
                ]
              },
              l.id
            )),
            /* @__PURE__ */ e.jsx("tr", { style: { backgroundColor: "#b7b8b9ff" }, children: /* @__PURE__ */ e.jsx("td", { colSpan: Ie.length + 2, style: { ...xe.td, textAlign: "center", color: "#ffffffff", cursor: "pointer", backgroundColor: "#5b5b5bff", paddingLeft: "20px" }, onClick: () => dt(t.id), children: "+ Add Sub Row" }) })
          ] })
        ] }, t.id)),
        /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: Ie.length + 2, style: {
          ...xe.td,
          textAlign: "center",
          color: z ? "#888" : "#aaa",
          cursor: "pointer",
          backgroundColor: "inherit",
          border: z ? "1px solid #444" : "1px solid #cececeff"
        }, onClick: Yt, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
};
function Rt(n) {
  return ge({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z" }, child: [] }] })(n);
}
function _n(n) {
  return ge({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" }, child: [] }] })(n);
}
function Mt(n) {
  return ge({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z" }, child: [] }] })(n);
}
function Hn(n) {
  return ge({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" }, child: [] }] })(n);
}
const rr = ({ columns: n, initialData: o }) => {
  const [i] = k(o), [c, a] = k("table"), [h, x] = k(!1), [r, u] = k(!1), [s, y] = k(null), [W] = k({}), [f, b] = k(null), [B, P] = k(!0), [H, T] = k(!0), [S, w] = k("Date"), [g, M] = k("Month"), [_, N] = k(!0), [O, F] = k("Center peek"), V = i;
  Ee(() => {
    const C = () => {
      x(!1), b(null);
    }, j = (E) => {
      E.key === "Escape" && (E.preventDefault(), b(null), y(null));
    };
    return document.addEventListener("click", C), document.addEventListener("keydown", j), () => {
      document.removeEventListener("click", C), document.removeEventListener("keydown", j);
    };
  }, [s, f, i, W]);
  const G = (C) => {
    switch (C) {
      case "table":
        return /* @__PURE__ */ e.jsx(Qe, {});
      case "board":
        return /* @__PURE__ */ e.jsx(wt, {});
      case "timeline":
        return /* @__PURE__ */ e.jsx(Rt, {});
      case "calendar":
        return /* @__PURE__ */ e.jsx(mt, {});
      case "list":
        return /* @__PURE__ */ e.jsx(jt, {});
      case "gallery":
        return /* @__PURE__ */ e.jsx(Mt, {});
      case "chart":
        return /* @__PURE__ */ e.jsx(vt, {});
      case "feed":
        return /* @__PURE__ */ e.jsx(kt, {});
      case "map":
        return /* @__PURE__ */ e.jsx(Ct, {});
      default:
        return /* @__PURE__ */ e.jsx(Qe, {});
    }
  }, $ = () => /* @__PURE__ */ e.jsxs("div", { style: {
    position: "relative",
    display: "inline-block",
    marginBottom: "16px"
  }, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        onClick: (C) => {
          C.stopPropagation(), x(!h);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 12px",
          backgroundColor: r ? "#2a2a2a" : "#ffffff",
          border: r ? "1px solid #444" : "1px solid #e1e5e9",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          color: r ? "#ffffff" : "#333333",
          outline: "none"
        },
        children: [
          G(c),
          /* @__PURE__ */ e.jsx("span", { style: { textTransform: "capitalize" }, children: c }),
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px" }, children: "▼" })
        ]
      }
    ),
    h && /* @__PURE__ */ e.jsxs("div", { style: {
      position: "absolute",
      top: "100%",
      left: 0,
      backgroundColor: r ? "#2a2a2a" : "#ffffff",
      border: r ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "8px",
      zIndex: 1e3,
      minWidth: "300px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      marginTop: "4px"
    }, children: [
      /* @__PURE__ */ e.jsx("div", { style: {
        padding: "4px 0",
        borderBottom: r ? "1px solid #444" : "1px solid #e1e5e9",
        marginBottom: "8px"
      }, children: /* @__PURE__ */ e.jsx("span", { style: {
        fontSize: "12px",
        color: r ? "#888" : "#666",
        fontWeight: "500",
        paddingLeft: "8px"
      }, children: "Layout" }) }),
      /* @__PURE__ */ e.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }, children: [
        { type: "table", label: "Table", icon: /* @__PURE__ */ e.jsx(Qe, {}) },
        { type: "board", label: "Board", icon: /* @__PURE__ */ e.jsx(wt, {}) },
        { type: "timeline", label: "Timeline", icon: /* @__PURE__ */ e.jsx(Rt, {}) },
        { type: "calendar", label: "Calendar", icon: /* @__PURE__ */ e.jsx(mt, {}) },
        { type: "list", label: "List", icon: /* @__PURE__ */ e.jsx(jt, {}) },
        { type: "gallery", label: "Gallery", icon: /* @__PURE__ */ e.jsx(Mt, {}) },
        { type: "chart", label: "Chart", icon: /* @__PURE__ */ e.jsx(vt, {}) },
        { type: "feed", label: "Feed", icon: /* @__PURE__ */ e.jsx(kt, {}) },
        { type: "map", label: "Map", icon: /* @__PURE__ */ e.jsx(Ct, {}) }
      ].map(({ type: C, label: j, icon: E }) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          onClick: () => {
            a(C), x(!1);
          },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "12px 8px",
            cursor: "pointer",
            borderRadius: "6px",
            backgroundColor: c === C ? r ? "#444" : "#e3f2fd" : "transparent",
            color: r ? "#ffffff" : "#333333",
            fontSize: "12px",
            border: c === C ? "2px solid #007bff" : "1px solid transparent"
          },
          onMouseEnter: (Z) => {
            c !== C && (Z.currentTarget.style.backgroundColor = r ? "#333" : "#f5f5f5");
          },
          onMouseLeave: (Z) => {
            c !== C && (Z.currentTarget.style.backgroundColor = "transparent");
          },
          children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "18px" }, children: E }),
            /* @__PURE__ */ e.jsx("span", { children: j })
          ]
        },
        C
      )) }),
      /* @__PURE__ */ e.jsx("div", { style: { borderTop: r ? "1px solid #444" : "1px solid #e1e5e9", paddingTop: "12px" }, children: /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: r ? "#ffffff" : "#333333" }, children: "Show page icon" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              onClick: () => P(!B),
              style: {
                width: "40px",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: B ? "#007bff" : "#ccc",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.3s"
              },
              children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: B ? "22px" : "2px",
                    transition: "left 0.3s"
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: r ? "#ffffff" : "#333333" }, children: "Wrap page titles" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              onClick: () => T(!H),
              style: {
                width: "40px",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: H ? "#007bff" : "#ccc",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.3s"
              },
              children: /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: H ? "22px" : "2px",
                    transition: "left 0.3s"
                  }
                }
              )
            }
          )
        ] }),
        c === "calendar" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: r ? "#ffffff" : "#333333" }, children: "Show calendar by" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: S,
                onChange: (C) => w(C.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: r ? "#333" : "#fff",
                  color: r ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "Date", children: "Date" }),
                  /* @__PURE__ */ e.jsx("option", { value: "Created", children: "Created" }),
                  /* @__PURE__ */ e.jsx("option", { value: "Modified", children: "Modified" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: r ? "#ffffff" : "#333333" }, children: "Show calendar as" }),
            /* @__PURE__ */ e.jsxs(
              "select",
              {
                value: g,
                onChange: (C) => M(C.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: r ? "#333" : "#fff",
                  color: r ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ e.jsx("option", { value: "Month", children: "Month" }),
                  /* @__PURE__ */ e.jsx("option", { value: "Week", children: "Week" }),
                  /* @__PURE__ */ e.jsx("option", { value: "Day", children: "Day" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: r ? "#ffffff" : "#333333" }, children: "Show weekends" }),
            /* @__PURE__ */ e.jsx(
              "div",
              {
                onClick: () => N(!_),
                style: {
                  width: "40px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: _ ? "#007bff" : "#ccc",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background-color 0.3s"
                },
                children: /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "2px",
                      left: _ ? "22px" : "2px",
                      transition: "left 0.3s"
                    }
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: r ? "#ffffff" : "#333333" }, children: "Open pages in" }),
          /* @__PURE__ */ e.jsxs(
            "select",
            {
              value: O,
              onChange: (C) => F(C.target.value),
              style: {
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: r ? "#333" : "#fff",
                color: r ? "#fff" : "#333"
              },
              children: [
                /* @__PURE__ */ e.jsx("option", { value: "Center peek", children: "Center peek" }),
                /* @__PURE__ */ e.jsx("option", { value: "Side peek", children: "Side peek" }),
                /* @__PURE__ */ e.jsx("option", { value: "Full page", children: "Full page" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] }), D = () => {
    const C = n.find((le) => le.type === "select") || n[0], j = C?.options || [{ value: "Default", color: "#007bff" }], E = n.length, Z = Math.max(280, E * 40);
    return /* @__PURE__ */ e.jsx("div", { style: { display: "flex", gap: "16px", overflowX: "auto", padding: "16px", minHeight: "400px" }, children: j.map((le) => /* @__PURE__ */ e.jsxs("div", { style: {
      flex: `1 1 ${Z}px`,
      minWidth: `${Z}px`,
      maxWidth: `${Math.max(400, E * 60)}px`,
      backgroundColor: r ? "#2a2a2a" : "#f8f9fa",
      borderRadius: "8px",
      padding: "16px"
    }, children: [
      /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", color: r ? "#ffffff" : "#333333" }, children: le.value }),
      V.filter((ee) => ee[C?.id || ""] === le.value).map((ee) => /* @__PURE__ */ e.jsx("div", { style: {
        backgroundColor: r ? "#1a1a1a" : "#ffffff",
        border: r ? "1px solid #444" : "1px solid #e1e5e9",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "8px",
        color: r ? "#ffffff" : "#333333",
        minHeight: Math.max(80, E * 20),
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }, children: n.map((re) => {
        const ce = ee[re.id];
        return !ce || re.id === C?.id ? null : /* @__PURE__ */ e.jsxs("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          alignItems: "center",
          minHeight: "20px"
        }, children: [
          /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: r ? "#888" : "#666", minWidth: "60px" }, children: [
            re.name,
            ":"
          ] }),
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px", flex: "1" }, children: String(ce) })
        ] }, re.id);
      }) }, ee.id))
    ] }, le.value)) });
  }, q = () => {
    const C = n.length, j = Math.max(120, 800 / C);
    return /* @__PURE__ */ e.jsxs("div", { style: { padding: "16px", overflowX: "auto" }, children: [
      /* @__PURE__ */ e.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${n.length}, minmax(${j}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: r ? "2px solid #444" : "2px solid #e1e5e9",
        fontWeight: "600",
        backgroundColor: r ? "#2a2a2a" : "#f8f9fa",
        color: r ? "#ffffff" : "#333333",
        minWidth: `${C * j}px`
      }, children: n.map((E) => /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", minWidth: `${j}px` }, children: E.name }, E.id)) }),
      V.map((E) => /* @__PURE__ */ e.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${n.length}, minmax(${j}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: r ? "1px solid #444" : "1px solid #e1e5e9",
        color: r ? "#ffffff" : "#333333",
        minWidth: `${C * j}px`
      }, children: n.map((Z) => /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", minWidth: `${j}px` }, children: E[Z.id] ? String(E[Z.id]) : "-" }, Z.id)) }, E.id))
    ] });
  }, X = () => {
    const C = /* @__PURE__ */ new Date(), j = C.getFullYear(), E = C.getMonth(), Z = new Date(j, E, 1), ee = new Date(j, E + 1, 0).getDate(), re = Z.getDay(), ce = [
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
    ], he = [];
    for (let pe = 0; pe < re; pe++)
      he.push(/* @__PURE__ */ e.jsx("div", { style: { padding: "8px" } }, `empty-${pe}`));
    for (let pe = 1; pe <= ee; pe++) {
      const be = new Date(j, E, pe).getDay() === 0 || new Date(j, E, pe).getDay() === 6;
      he.push(
        /* @__PURE__ */ e.jsx("div", { style: {
          padding: "8px",
          border: r ? "1px solid #444" : "1px solid #e1e5e9",
          minHeight: "80px",
          backgroundColor: be && !_ ? "#f5f5f5" : "transparent",
          color: r ? "#ffffff" : "#333333"
        }, children: /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "500", marginBottom: "4px" }, children: pe }) }, pe)
      );
    }
    return /* @__PURE__ */ e.jsxs("div", { style: { padding: "16px" }, children: [
      /* @__PURE__ */ e.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        fontSize: "18px",
        fontWeight: "600",
        color: r ? "#ffffff" : "#333333"
      }, children: [
        ce[E],
        " ",
        j
      ] }),
      /* @__PURE__ */ e.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "1px",
        backgroundColor: r ? "#444" : "#e1e5e9"
      }, children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((pe) => /* @__PURE__ */ e.jsx("div", { style: {
          padding: "8px",
          textAlign: "center",
          fontWeight: "600",
          backgroundColor: r ? "#2a2a2a" : "#f8f9fa",
          color: r ? "#ffffff" : "#333333"
        }, children: pe }, pe)),
        he
      ] })
    ] });
  }, U = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "16px" }, children: [
    /* @__PURE__ */ e.jsx("div", { style: {
      color: r ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Timeline View" }),
    V.map((C) => /* @__PURE__ */ e.jsxs("div", { style: {
      display: "flex",
      gap: "16px",
      padding: "12px 0",
      borderLeft: r ? "2px solid #444" : "2px solid #e1e5e9",
      paddingLeft: "16px",
      marginLeft: "8px",
      position: "relative"
    }, children: [
      /* @__PURE__ */ e.jsx("div", { style: {
        position: "absolute",
        left: "-6px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: r ? "#666" : "#007bff"
      } }),
      /* @__PURE__ */ e.jsx("div", { style: { flex: 1, color: r ? "#ffffff" : "#333333" }, children: n.map((j) => {
        const E = C[j.id];
        return E ? /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "4px" }, children: [
          /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: "600", fontSize: "12px", color: r ? "#888" : "#666" }, children: [
            j.name,
            ":"
          ] }),
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px" }, children: String(E) })
        ] }, j.id) : null;
      }) })
    ] }, C.id))
  ] }), se = () => {
    const C = n.length, j = Math.max(280, C * 35);
    return /* @__PURE__ */ e.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${j}px, 1fr))`,
      gap: "16px",
      padding: "16px"
    }, children: V.map((E) => /* @__PURE__ */ e.jsx("div", { style: {
      backgroundColor: r ? "#2a2a2a" : "#ffffff",
      border: r ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "16px",
      color: r ? "#ffffff" : "#333333",
      minHeight: Math.max(200, C * 25),
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }, children: n.map((Z) => {
      const le = E[Z.id];
      return le ? /* @__PURE__ */ e.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        minHeight: "24px"
      }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", fontSize: "12px", color: r ? "#888" : "#666" }, children: Z.name }),
        /* @__PURE__ */ e.jsx("div", { style: { fontSize: "14px", wordBreak: "break-word", flex: "1" }, children: String(le) })
      ] }, Z.id) : null;
    }) }, E.id)) });
  }, v = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ e.jsx("div", { style: {
      color: r ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Chart View" }),
    /* @__PURE__ */ e.jsx("div", { style: {
      color: r ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Chart view would display data visualizations. This is a placeholder for chart implementation." })
  ] }), ne = () => /* @__PURE__ */ e.jsx("div", { style: { padding: "16px" }, children: V.map((C) => /* @__PURE__ */ e.jsxs("div", { style: {
    backgroundColor: r ? "#2a2a2a" : "#ffffff",
    border: r ? "1px solid #444" : "1px solid #e1e5e9",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    color: r ? "#ffffff" : "#333333"
  }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }, children: [
      /* @__PURE__ */ e.jsx("div", { style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: r ? "#444" : "#e1e5e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px"
      }, children: "📝" }),
      /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", fontSize: "16px", marginBottom: "4px" }, children: C[n[0]?.id] || "Untitled" }),
        /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: r ? "#888" : "#666" }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { style: { display: "grid", gap: "8px" }, children: n.slice(1).map((j) => {
      const E = C[j.id];
      return E ? /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: r ? "#888" : "#666", minWidth: "80px" }, children: [
          j.name,
          ":"
        ] }),
        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", flex: 1 }, children: String(E) })
      ] }, j.id) : null;
    }) })
  ] }, C.id)) }), Q = () => /* @__PURE__ */ e.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ e.jsx("div", { style: {
      color: r ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Map View" }),
    /* @__PURE__ */ e.jsx("div", { style: {
      color: r ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Map view would show location-based data. This is a placeholder for map implementation." })
  ] }), m = () => {
    switch (c) {
      case "table":
        return /* @__PURE__ */ e.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ e.jsx(zt, { columns: n, initialData: i }) });
      case "board":
        return D();
      case "timeline":
        return U();
      case "calendar":
        return X();
      case "list":
        return q();
      case "gallery":
        return se();
      case "chart":
        return v();
      case "feed":
        return ne();
      case "map":
        return Q();
      default:
        return /* @__PURE__ */ e.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ e.jsx(zt, { columns: n, initialData: i }) });
    }
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("style", { children: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        ` }),
    /* @__PURE__ */ e.jsxs("div", { style: {
      backgroundColor: r ? "#1a1a1a" : "#ffffff",
      color: r ? "#ffffff" : "#333333",
      padding: "20px",
      width: "100%",
      minHeight: "100vh",
      boxSizing: "border-box",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ e.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "10px"
      }, children: [
        $(),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => u(!r),
            style: {
              padding: "8px 12px",
              backgroundColor: r ? "#444" : "#f8f9fa",
              border: r ? "1px solid #666" : "1px solid #e1e5e9",
              borderRadius: "6px",
              color: r ? "#ffffff" : "#333333",
              cursor: "pointer",
              flexShrink: 0
            },
            children: r ? "☀️" : "🌙"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { style: { width: "100%", overflow: "hidden" }, children: m() })
    ] })
  ] });
}, or = ({
  initialRows: n = 3,
  initialCols: o = 4,
  rows: i,
  cols: c
}) => {
  const [a, h] = k(i || n), [x, r] = k(c || o), [u, s] = k({}), [y, W] = k(null), [f, b] = k(null), [B, P] = k(null), H = ($, D) => `${$}-${D}`, T = ($, D) => u[H($, D)] || "", S = ($, D, q) => {
    s((X) => ({ ...X, [H($, D)]: q }));
  }, w = () => h(($) => $ + 1), g = () => r(($) => $ + 1), M = () => a > 1 && h(($) => $ - 1), _ = () => x > 1 && r(($) => $ - 1), N = ($, D) => {
    W({ row: $, col: D });
  }, O = ($, D) => {
    b({ row: $, col: D });
  }, F = () => {
    b(null);
  }, V = ($) => {
    $.key === "Enter" && b(null);
  }, G = ($, D) => {
    const q = f?.row === $ && f?.col === D, X = T($, D);
    return q ? /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "text",
        value: X,
        onChange: (U) => S($, D, U.target.value),
        onBlur: F,
        onKeyDown: V,
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
    ) : /* @__PURE__ */ e.jsx(
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
          color: X ? "#1a1a1a" : "#9ca3af",
          cursor: "pointer",
          position: "relative",
          minHeight: "60px"
        },
        children: X || /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ e.jsx(Dn, { size: 10, style: { opacity: 0.5 } }),
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "12px" }, children: "Click to edit" })
        ] })
      }
    );
  };
  return /* @__PURE__ */ e.jsxs("div", { style: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "24px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0"
    }, children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: w,
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
          onMouseEnter: ($) => $.currentTarget.style.backgroundColor = "#2563eb",
          onMouseLeave: ($) => $.currentTarget.style.backgroundColor = "#3b82f6",
          children: [
            /* @__PURE__ */ e.jsx(Hn, { size: 14 }),
            "Add Row"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: g,
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
          onMouseEnter: ($) => $.currentTarget.style.backgroundColor = "#059669",
          onMouseLeave: ($) => $.currentTarget.style.backgroundColor = "#10b981",
          children: [
            /* @__PURE__ */ e.jsx(_n, { size: 14 }),
            "Add Column"
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("div", { style: { width: "1px", height: "24px", backgroundColor: "#e2e8f0" } }),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: M,
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
          onMouseEnter: ($) => {
            a > 1 && ($.currentTarget.style.backgroundColor = "#dc2626");
          },
          onMouseLeave: ($) => {
            a > 1 && ($.currentTarget.style.backgroundColor = "#ef4444");
          },
          children: [
            /* @__PURE__ */ e.jsx(Fe, { size: 12 }),
            "Delete Row"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: _,
          disabled: x <= 1,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: x <= 1 ? "#f1f5f9" : "#ef4444",
            color: x <= 1 ? "#94a3b8" : "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: x <= 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: ($) => {
            x > 1 && ($.currentTarget.style.backgroundColor = "#dc2626");
          },
          onMouseLeave: ($) => {
            x > 1 && ($.currentTarget.style.backgroundColor = "#ef4444");
          },
          children: [
            /* @__PURE__ */ e.jsx(Fe, { size: 12 }),
            "Delete Column"
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { style: { marginLeft: "auto", fontSize: "13px", color: "#64748b" }, children: [
        a,
        " × ",
        x,
        " grid"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${x}, 1fr)`,
      gap: "2px",
      backgroundColor: "#e2e8f0",
      borderRadius: "8px",
      padding: "2px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    }, children: Array.from({ length: a * x }, ($, D) => {
      const q = Math.floor(D / x), X = D % x, U = y?.row === q && y?.col === X, se = B?.row === q && B?.col === X;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          onClick: () => N(q, X),
          onDoubleClick: () => O(q, X),
          onMouseEnter: () => P({ row: q, col: X }),
          onMouseLeave: () => P(null),
          style: {
            backgroundColor: U ? "#dbeafe" : se ? "#f1f5f9" : "#ffffff",
            borderRadius: "6px",
            border: U ? "2px solid #3b82f6" : "2px solid transparent",
            transition: "all 0.2s ease",
            cursor: "pointer",
            position: "relative"
          },
          children: G(q, X)
        },
        H(q, X)
      );
    }) }),
    /* @__PURE__ */ e.jsx("div", { style: {
      marginTop: "16px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "6px",
      fontSize: "13px",
      color: "#64748b",
      textAlign: "center"
    }, children: "Click to select • Double-click to edit • Use toolbar to modify structure" })
  ] });
}, Ot = [
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
], ir = () => {
  const [n, o] = k([
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
  ]), [i, c] = k(null), [a, h] = k(""), x = Ot.filter(
    (f) => f.name.toLowerCase().includes(a.toLowerCase()) || f.generic.toLowerCase().includes(a.toLowerCase())
  ), r = () => {
    const f = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    o([...n, f]);
  }, u = (f, b, B) => {
    o(n.map(
      (P) => P.id === f ? { ...P, [b]: B } : P
    ));
  }, s = (f, b, B) => {
    o(n.map(
      (P) => P.id === f ? {
        ...P,
        [b]: { bf: B === "bf", af: B === "af" }
      } : P
    ));
  }, y = (f, b) => {
    u(f, "name", b.name), c(null), h("");
  }, W = (f, b) => {
    u(f, "name", b), h(b), c(b ? f : null);
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => c(null), children: [
    /* @__PURE__ */ e.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: n.map((f) => /* @__PURE__ */ e.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ e.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              placeholder: "Type medicine name",
              value: f.name,
              onChange: (b) => W(f.id, b.target.value),
              onFocus: () => c(f.id),
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
          i === f.id && /* @__PURE__ */ e.jsx("div", { style: {
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
          }, children: x.map((b) => /* @__PURE__ */ e.jsxs(
            "div",
            {
              onClick: () => y(f.id, b),
              style: {
                padding: "8px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0"
              },
              onMouseEnter: (B) => B.currentTarget.style.backgroundColor = "#f5f5f5",
              onMouseLeave: (B) => B.currentTarget.style.backgroundColor = "white",
              children: [
                /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: b.name }),
                /* @__PURE__ */ e.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                  "(",
                  b.generic,
                  ")"
                ] }),
                /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: b.dosage })
              ]
            },
            b.id
          )) })
        ] }),
        /* @__PURE__ */ e.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "number",
            value: f.days,
            onChange: (b) => u(f.id, "days", b.target.value),
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
        ["morning", "afternoon", "evening", "night"].map((b) => /* @__PURE__ */ e.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "radio",
                name: `${f.id}-${b}`,
                checked: f[b].bf,
                onChange: () => s(f.id, b, "bf"),
                style: { margin: 0 }
              }
            ),
            "BF"
          ] }),
          /* @__PURE__ */ e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "radio",
                name: `${f.id}-${b}`,
                checked: f[b].af,
                onChange: () => s(f.id, b, "af"),
                style: { margin: 0 }
              }
            ),
            "AF"
          ] })
        ] }) }, b))
      ] }, f.id)) })
    ] }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: r,
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
}, sr = () => {
  const [n, o] = k(() => {
    const g = sessionStorage.getItem("medicines");
    return g ? JSON.parse(g) : [
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
  }), [i, c] = k(null), [a, h] = k(""), [x, r] = k(null), [u, s] = k(""), y = Ot.filter(
    (g) => g.name.toLowerCase().includes(a.toLowerCase()) || g.generic.toLowerCase().includes(a.toLowerCase())
  ), W = () => {
    const g = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    o([...n, g]);
  }, f = (g, M, _) => {
    o(n.map(
      (N) => N.id === g ? { ...N, [M]: _ } : N
    ));
  }, b = (g, M, _) => {
    o(n.map(
      (N) => N.id === g ? {
        ...N,
        [M]: { bf: _ === "bf", af: _ === "af" }
      } : N
    ));
  }, B = (g, M) => {
    f(g, "name", M.name), c(null), h("");
  }, P = (g, M) => {
    f(g, "name", M), h(M), c(M ? g : null);
  }, H = (g) => {
    const M = n.find((_) => _.id === g);
    s(M?.comment || ""), r(g);
  }, T = (g) => {
    const M = n.map(
      (_) => _.id === g ? { ..._, comment: u } : _
    );
    o(M), sessionStorage.setItem("medicines", JSON.stringify(M)), r(null), s("");
  }, S = (g) => {
    const M = n.find((_) => _.id === g);
    s(M?.comment || ""), r(g);
  }, w = () => {
    r(null), s("");
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => c(null), children: [
    /* @__PURE__ */ e.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: n.map((g) => /* @__PURE__ */ e.jsxs(je.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("tr", { style: { backgroundColor: "white" }, children: [
          /* @__PURE__ */ e.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "text",
                placeholder: "Type medicine name",
                value: g.name,
                onChange: (M) => P(g.id, M.target.value),
                onFocus: () => c(g.id),
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
            g.comment && /* @__PURE__ */ e.jsxs("div", { style: {
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
              /* @__PURE__ */ e.jsx("span", { style: { flex: 1, wordBreak: "break-word" }, children: g.comment }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  onClick: () => S(g.id),
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
            i === g.id && /* @__PURE__ */ e.jsx("div", { style: {
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
            }, children: y.map((M) => /* @__PURE__ */ e.jsxs(
              "div",
              {
                onClick: () => B(g.id, M),
                style: {
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0"
                },
                onMouseEnter: (_) => _.currentTarget.style.backgroundColor = "#f5f5f5",
                onMouseLeave: (_) => _.currentTarget.style.backgroundColor = "white",
                children: [
                  /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: M.name }),
                  /* @__PURE__ */ e.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                    "(",
                    M.generic,
                    ")"
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: M.dosage })
                ]
              },
              M.id
            )) })
          ] }),
          /* @__PURE__ */ e.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "number",
              value: g.days,
              onChange: (M) => f(g.id, "days", M.target.value),
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
          ["morning", "afternoon", "evening", "night"].map((M) => /* @__PURE__ */ e.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: [
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
              /* @__PURE__ */ e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${g.id}-${M}`,
                    checked: g[M].bf,
                    onChange: () => b(g.id, M, "bf"),
                    style: { margin: 0 }
                  }
                ),
                "BF"
              ] }),
              /* @__PURE__ */ e.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${g.id}-${M}`,
                    checked: g[M].af,
                    onChange: () => b(g.id, M, "af"),
                    style: { margin: 0 }
                  }
                ),
                "AF"
              ] })
            ] }),
            M === "night" && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "8px" }, children: /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => H(g.id),
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
          ] }, M))
        ] }),
        x === g.id && /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: 6, style: { padding: "0", border: "1px solid #ddd" }, children: /* @__PURE__ */ e.jsxs("div", { style: {
          backgroundColor: "#e4e7fd",
          border: "2px solid #4f67ff",
          borderRadius: "4px",
          padding: "8px",
          margin: "4px"
        }, children: [
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              value: u,
              onChange: (M) => s(M.target.value),
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
          /* @__PURE__ */ e.jsxs("div", { style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            marginTop: "8px"
          }, children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: w,
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
            /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => T(g.id),
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
      ] }, g.id)) })
    ] }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: W,
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
function ue() {
  const n = Ue(null), [o, i] = k({ width: 0, height: 0 });
  Ee(() => {
    if (!n.current) return;
    const h = new ResizeObserver(([x]) => {
      const { width: r, height: u } = x.contentRect;
      i({ width: r, height: u });
    });
    return h.observe(n.current), () => h.disconnect();
  }, []);
  const c = o.width === 0 ? 1 : o.width < 300 ? 0.75 : o.width < 500 ? 0.875 : 1;
  return { ref: n, ...o, fs: (h) => `${Math.round(h * c)}px`, scale: c };
}
const lr = ({
  title: n,
  paymentMethods: o
}) => {
  const { ref: i, fs: c } = ue();
  return /* @__PURE__ */ e.jsx("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "0",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }, children: /* @__PURE__ */ e.jsxs("div", { style: { padding: "24px" }, children: [
    /* @__PURE__ */ e.jsx("h4", { style: { color: "#003357" }, children: n }),
    /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: o.map((a, h) => /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
      /* @__PURE__ */ e.jsx("div", { style: { color: "#7a8a99", fontSize: c(16), fontWeight: "600", minWidth: "70px", textAlign: "right" }, children: a.label }),
      /* @__PURE__ */ e.jsx("div", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ e.jsx("div", { style: { backgroundColor: "#e8e8e8", height: "24px", borderRadius: "12px", overflow: "hidden" }, children: /* @__PURE__ */ e.jsx("div", { style: { backgroundColor: a.color, height: "100%", width: `${a.percentage}%`, borderRadius: "12px" } }) }) }),
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: c(18), fontWeight: "400", minWidth: "110px", textAlign: "right", color: "#2c3e50" }, children: a.amount.toLocaleString("en-IN") })
    ] }, h)) })
  ] }) });
}, ar = ({
  data: n,
  height: o = 200,
  defaultColor: i = "#003357",
  strokeWidth: c = 2,
  showDots: a = !0,
  showGrid: h = !0,
  title: x
}) => {
  const { ref: r, width: u, fs: s, scale: y } = ue(), [W, f] = k(null), b = 20, B = 15, P = 50, H = u || 600, T = H - P * 2, S = o - b - B, w = Math.max(...n.map((D) => D.value)), g = Math.min(...n.map((D) => D.value)), M = w - g || 1, _ = T / (n.length - 1 || 1), N = 10 * y * 0.6, O = Math.max(...n.map((D) => D.label.length)), F = O * N > _, V = F ? O * N * 0.7 : 20, G = n.map((D, q) => {
    const X = P + T / (n.length - 1) * q, U = b + S - (D.value - g) / M * S;
    return { x: X, y: U, ...D };
  }), $ = G.map((D, q) => `${q === 0 ? "M" : "L"} ${D.x} ${D.y}`).join(" ");
  return /* @__PURE__ */ e.jsxs("div", { ref: r, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    x && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: x }),
    H > 0 && /* @__PURE__ */ e.jsxs("svg", { width: H, height: o + B + (F ? V - 20 : 0), children: [
      h && /* @__PURE__ */ e.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((D, q) => {
        const X = b + S * (1 - D);
        return /* @__PURE__ */ e.jsx("line", { x1: P, y1: X, x2: H - P, y2: X, stroke: "#e0e0e0", strokeWidth: "1" }, q);
      }) }),
      /* @__PURE__ */ e.jsx("path", { d: $, fill: "none", stroke: i, strokeWidth: c }),
      a && G.map((D, q) => /* @__PURE__ */ e.jsx(
        "circle",
        {
          cx: D.x,
          cy: D.y,
          r: "4",
          fill: D.color || i,
          style: { cursor: "pointer" },
          onMouseEnter: (X) => f({ x: X.clientX, y: X.clientY, label: D.label, value: D.value }),
          onMouseMove: (X) => f((U) => U ? { ...U, x: X.clientX, y: X.clientY } : null),
          onMouseLeave: () => f(null)
        },
        q
      )),
      G.map((D, q) => F ? /* @__PURE__ */ e.jsx(
        "text",
        {
          x: D.x,
          y: b + S + 8,
          fontSize: s(10),
          fill: "#666",
          textAnchor: "end",
          transform: `rotate(-40, ${D.x}, ${b + S + 8})`,
          children: D.label
        },
        q
      ) : /* @__PURE__ */ e.jsx("text", { x: D.x, y: b + S + 20, textAnchor: "middle", fontSize: s(10), fill: "#666", children: D.label }, q))
    ] }),
    W && /* @__PURE__ */ e.jsxs("div", { style: {
      position: "fixed",
      left: W.x + 12,
      top: W.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: s(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold" }, children: W.label }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Value: ",
        W.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
}, dr = ({
  data: n,
  height: o = 200,
  defaultColor: i = "#003357",
  showValues: c = !0,
  showGrid: a = !0,
  title: h
}) => {
  const { ref: x, width: r, fs: u, scale: s } = ue(), y = 20, W = 15, f = 30, b = r || 600, B = b - f * 2, P = o - y - W, H = Math.max(...n.map((N) => N.value)), T = B / n.length * 0.7, S = B / n.length, w = 10 * s * 0.6, g = Math.max(...n.map((N) => N.label.length)), M = g * w > S, _ = M ? g * w * 0.7 : 20;
  return /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    h && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: u(12), fontWeight: "bold", color: "#003357" }, children: h }),
    b > 0 && /* @__PURE__ */ e.jsxs("svg", { width: b, height: o + W + (M ? _ - 20 : 0), children: [
      a && /* @__PURE__ */ e.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((N, O) => {
        const F = y + P * (1 - N);
        return /* @__PURE__ */ e.jsx("line", { x1: f, y1: F, x2: b - f, y2: F, stroke: "#e0e0e0", strokeWidth: "1" }, O);
      }) }),
      n.map((N, O) => {
        const F = N.value / H * P, V = f + S * O + (S - T) / 2, G = y + P - F;
        return /* @__PURE__ */ e.jsxs("g", { children: [
          /* @__PURE__ */ e.jsx("rect", { x: V, y: G, width: T, height: F, fill: N.color || i, rx: "4" }),
          c && /* @__PURE__ */ e.jsx("text", { x: V + T / 2, y: G - 5, textAnchor: "middle", fontSize: u(12), fill: "#666", fontWeight: "bold", children: N.value }),
          M ? /* @__PURE__ */ e.jsx(
            "text",
            {
              x: V + T / 2,
              y: y + P + 8,
              fontSize: u(10),
              fill: "#666",
              textAnchor: "end",
              transform: `rotate(-40, ${V + T / 2}, ${y + P + 8})`,
              children: N.label
            }
          ) : /* @__PURE__ */ e.jsx("text", { x: V + T / 2, y: y + P + 20, textAnchor: "middle", fontSize: u(10), fill: "#666", children: N.label })
        ] }, O);
      })
    ] })
  ] });
};
function Nn(n) {
  const o = n.replace("#", "");
  return [
    parseInt(o.substring(0, 2), 16),
    parseInt(o.substring(2, 4), 16),
    parseInt(o.substring(4, 6), 16)
  ];
}
function Vn(n, o) {
  const [i, c, a] = Nn(n), h = [...o].sort((u, s) => u.value - s.value), x = o.length, r = /* @__PURE__ */ new Map();
  return h.forEach((u, s) => {
    const y = x === 1 ? 0.5 : s / (x - 1), W = (b) => Math.round(220 - y * (220 - b)), f = (b) => W(b).toString(16).padStart(2, "0");
    r.set(u, `#${f(i)}${f(c)}${f(a)}`);
  }), o.map((u) => r.get(u));
}
const cr = ({
  data: n,
  showLegend: o = !0,
  showPercentages: i = !0,
  title: c,
  baseColor: a
}) => {
  const { ref: h, width: x, fs: r } = ue(), [u, s] = k(null), W = (x || 400) - (o ? 160 : 0) - 40, f = Math.max(100, Math.min(W, 400)), b = a ? Vn(a, n) : null, B = n.reduce((g, M) => g + M.value, 0), P = f / 2, H = f / 2, T = f / 2 - 20;
  let S = -90;
  const w = n.map((g) => {
    const M = g.value / B * 100, _ = g.value / B * 360, N = S, O = S + _, F = N * Math.PI / 180, V = O * Math.PI / 180, G = P + T * Math.cos(F), $ = H + T * Math.sin(F), D = P + T * Math.cos(V), q = H + T * Math.sin(V), X = _ > 180 ? 1 : 0, U = `M ${P} ${H} L ${G} ${$} A ${T} ${T} 0 ${X} 1 ${D} ${q} Z`;
    S = O;
    const se = b ? b[n.indexOf(g)] : g.color ?? "#4a90e2";
    return { ...g, path: U, percentage: M, color: se };
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: h, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    c && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: r(12), fontWeight: "bold", color: "#003357" }, children: c }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }, children: [
      f > 0 && /* @__PURE__ */ e.jsx("svg", { width: f, height: f, children: w.map((g, M) => /* @__PURE__ */ e.jsx(
        "path",
        {
          d: g.path,
          fill: g.color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (_) => s({ x: _.clientX, y: _.clientY, label: g.label, value: g.value, percentage: g.percentage }),
          onMouseMove: (_) => s((N) => N ? { ...N, x: _.clientX, y: _.clientY } : null),
          onMouseLeave: () => s(null),
          style: { cursor: "pointer" }
        },
        M
      )) }),
      o && /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: w.map((g, M) => /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: g.color, borderRadius: "4px", flexShrink: 0 } }),
        /* @__PURE__ */ e.jsxs("span", { style: { fontSize: r(14), color: "#333" }, children: [
          g.label,
          i && ` (${g.percentage.toFixed(1)}%)`
        ] })
      ] }, M)) })
    ] }),
    u && /* @__PURE__ */ e.jsxs("div", { style: {
      position: "fixed",
      left: u.x + 12,
      top: u.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: r(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold" }, children: u.label }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Value: ",
        u.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
}, pr = ({
  data: n,
  height: o = 400,
  defaultColor: i = "#003357",
  showLabels: c = !0,
  showGrid: a = !0,
  title: h
}) => {
  const { ref: x, width: r, fs: u } = ue(), s = 60, y = r || 600, W = y - s * 2, f = o - s * 2, b = Math.max(...n.map((T) => T.x)), B = Math.max(...n.map((T) => T.y)), P = Math.max(...n.map((T) => T.size)), H = n.map((T) => ({
    ...T,
    cx: s + T.x / b * W,
    cy: s + f - T.y / B * f,
    r: T.size / P * 40 + 10
  }));
  return /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    h && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: u(20), fontWeight: "bold", color: "#003357" }, children: h }),
    y > 0 && /* @__PURE__ */ e.jsxs("svg", { width: y, height: o, children: [
      a && /* @__PURE__ */ e.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((T, S) => /* @__PURE__ */ e.jsxs(je.Fragment, { children: [
        /* @__PURE__ */ e.jsx("line", { x1: s, y1: s + f * T, x2: y - s, y2: s + f * T, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ e.jsx("line", { x1: s + W * T, y1: s, x2: s + W * T, y2: o - s, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, S)) }),
      H.map((T, S) => /* @__PURE__ */ e.jsxs("g", { children: [
        /* @__PURE__ */ e.jsx("circle", { cx: T.cx, cy: T.cy, r: T.r, fill: T.color || i, opacity: "0.7", stroke: "#fff", strokeWidth: "2" }),
        c && /* @__PURE__ */ e.jsx("text", { x: T.cx, y: T.cy, textAnchor: "middle", dominantBaseline: "middle", fontSize: u(12), fill: "#fff", fontWeight: "bold", children: T.label })
      ] }, S))
    ] })
  ] });
}, fr = ({
  data: n,
  showValues: o = !0,
  colorScale: i = ["#e3f2fd", "#003357"],
  title: c
}) => {
  const { ref: a, width: h, fs: x } = ue(), r = Array.from(new Set(n.map((S) => S.x))), u = Array.from(new Set(n.map((S) => S.y))), s = 80, y = (h || 600) - s - 48, W = Math.max(30, Math.floor(y / r.length)), f = Math.max(...n.map((S) => S.value)), b = Math.min(...n.map((S) => S.value)), B = (S) => {
    const w = (S - b) / (f - b || 1), g = parseInt(i[0].slice(1, 3), 16), M = parseInt(i[0].slice(3, 5), 16), _ = parseInt(i[0].slice(5, 7), 16), N = parseInt(i[1].slice(1, 3), 16), O = parseInt(i[1].slice(3, 5), 16), F = parseInt(i[1].slice(5, 7), 16);
    return `rgb(${Math.round(g + (N - g) * w)}, ${Math.round(M + (O - M) * w)}, ${Math.round(_ + (F - _) * w)})`;
  }, P = (S, w) => n.find((g) => g.x === S && g.y === w)?.value ?? 0, H = r.length * W + s, T = u.length * W + s;
  return /* @__PURE__ */ e.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    c && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: x(20), fontWeight: "bold", color: "#003357" }, children: c }),
    H > 0 && /* @__PURE__ */ e.jsxs("svg", { width: H, height: T, children: [
      u.map((S, w) => /* @__PURE__ */ e.jsx(
        "text",
        {
          x: s - 10,
          y: w * W + W / 2 + s,
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: x(12),
          fill: "#666",
          children: S
        },
        `y-${w}`
      )),
      r.map((S, w) => /* @__PURE__ */ e.jsx(
        "text",
        {
          x: w * W + W / 2 + s,
          y: s - 10,
          textAnchor: "middle",
          fontSize: x(12),
          fill: "#666",
          children: S
        },
        `x-${w}`
      )),
      u.map(
        (S, w) => r.map((g, M) => {
          const _ = P(g, S);
          return /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx(
              "rect",
              {
                x: M * W + s,
                y: w * W + s,
                width: W,
                height: W,
                fill: B(_),
                stroke: "#fff",
                strokeWidth: "2",
                rx: "4"
              }
            ),
            o && /* @__PURE__ */ e.jsx(
              "text",
              {
                x: M * W + W / 2 + s,
                y: w * W + W / 2 + s,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontSize: x(Math.max(10, W / 4)),
                fill: "#fff",
                fontWeight: "bold",
                children: _
              }
            )
          ] }, `${M}-${w}`);
        })
      )
    ] })
  ] });
}, xr = ({
  data: n,
  height: o = 400,
  defaultColor: i = "#003357",
  pointSize: c = 6,
  showGrid: a = !0,
  title: h
}) => {
  const { ref: x, width: r, fs: u } = ue(), s = 60, y = r || 600, W = y - s * 2, f = o - s * 2, b = Math.max(...n.map((S) => S.x)), B = Math.max(...n.map((S) => S.y)), P = Math.min(...n.map((S) => S.x)), H = Math.min(...n.map((S) => S.y)), T = n.map((S) => ({
    ...S,
    cx: s + (S.x - P) / (b - P || 1) * W,
    cy: s + f - (S.y - H) / (B - H || 1) * f
  }));
  return /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    h && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: u(20), fontWeight: "bold", color: "#003357" }, children: h }),
    y > 0 && /* @__PURE__ */ e.jsxs("svg", { width: y, height: o, children: [
      a && /* @__PURE__ */ e.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((S, w) => /* @__PURE__ */ e.jsxs(je.Fragment, { children: [
        /* @__PURE__ */ e.jsx("line", { x1: s, y1: s + f * S, x2: y - s, y2: s + f * S, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ e.jsx("line", { x1: s + W * S, y1: s, x2: s + W * S, y2: o - s, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, w)) }),
      /* @__PURE__ */ e.jsx("line", { x1: s, y1: s, x2: s, y2: o - s, stroke: "#666", strokeWidth: "2" }),
      /* @__PURE__ */ e.jsx("line", { x1: s, y1: o - s, x2: y - s, y2: o - s, stroke: "#666", strokeWidth: "2" }),
      T.map((S, w) => /* @__PURE__ */ e.jsx("circle", { cx: S.cx, cy: S.cy, r: c, fill: S.color || i, opacity: "0.7" }, w))
    ] })
  ] });
};
function Yn(n) {
  const o = n.replace("#", "");
  return [parseInt(o.substring(0, 2), 16), parseInt(o.substring(2, 4), 16), parseInt(o.substring(4, 6), 16)];
}
function Xn(n, o) {
  const [i, c, a] = Yn(n);
  return Array.from({ length: o }, (h, x) => {
    const r = o === 1 ? 0.5 : x / (o - 1), u = (y) => Math.round(220 - r * (220 - y)), s = (y) => u(y).toString(16).padStart(2, "0");
    return `#${s(i)}${s(c)}${s(a)}`;
  });
}
const ur = ({
  data: n,
  height: o = 200,
  showLegend: i = !0,
  showGrid: c = !0,
  title: a,
  color: h
}) => {
  const { ref: x, width: r, fs: u } = ue(), [s, y] = k(null), f = Math.max(100, (r || 600) - (i ? 160 : 0) - 40), b = 20, B = 15, P = 30, H = f - P * 2, T = o - b - B, S = Math.max(...n.map((O) => O.stacks.reduce((F, V) => F + V.value, 0))), w = H / n.length * 0.7, g = H / n.length, M = Array.from(new Set(n.flatMap((O) => O.stacks.map((F) => F.label)))), _ = h ? Xn(h, M.length) : null, N = /* @__PURE__ */ new Map();
  return M.forEach((O, F) => {
    const V = n.flatMap((G) => G.stacks).find((G) => G.label === O)?.color;
    N.set(O, _ ? _[F] : V ?? "#4a90e2");
  }), /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
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
    a && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: u(12), fontWeight: "bold", color: "#003357" }, children: a }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "40px", alignItems: "flex-start" }, children: [
      f > 0 && /* @__PURE__ */ e.jsxs("svg", { width: f, height: o + B, children: [
        c && /* @__PURE__ */ e.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((O, F) => {
          const V = b + T * (1 - O);
          return /* @__PURE__ */ e.jsx("line", { x1: P, y1: V, x2: f - P, y2: V, stroke: "#e0e0e0", strokeWidth: "1" }, F);
        }) }),
        n.map((O, F) => {
          const V = P + g * F + (g - w) / 2;
          let G = b + T;
          return /* @__PURE__ */ e.jsxs("g", { children: [
            O.stacks.map(($, D) => {
              const q = $.value / S * T, X = G - q;
              return G = X, /* @__PURE__ */ e.jsx(
                "rect",
                {
                  x: V,
                  y: X,
                  width: w,
                  height: q,
                  fill: N.get($.label) ?? "#4a90e2",
                  onMouseEnter: (U) => {
                    const se = U.currentTarget.getBoundingClientRect();
                    y({ x: se.left + se.width / 2, y: se.top, label: $.label, value: $.value });
                  },
                  onMouseLeave: () => y(null),
                  style: { cursor: "pointer" }
                },
                D
              );
            }),
            /* @__PURE__ */ e.jsx("text", { x: V + w / 2, y: b + T + 20, textAnchor: "middle", fontSize: u(12), fill: "#666", children: O.category })
          ] }, F);
        })
      ] }),
      i && /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }, children: M.map((O, F) => /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: N.get(O), borderRadius: "4px" } }),
        /* @__PURE__ */ e.jsx("span", { style: { fontSize: u(14), color: "#333" }, children: O })
      ] }, F)) })
    ] }),
    s && /* @__PURE__ */ e.jsxs("div", { style: {
      position: "fixed",
      left: s.x,
      top: s.y - 10,
      transform: "translate(-50%, -100%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: u(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold" }, children: s.label }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Value: ",
        s.value
      ] })
    ] })
  ] });
}, gr = ({
  title: n,
  value: o,
  prefix: i = "",
  suffix: c = "",
  trend: a,
  trendLabel: h,
  icon: x,
  color: r = "#003357",
  backgroundColor: u = "#ffffff"
}) => {
  const { ref: s, fs: y } = ue(), W = a !== void 0 && a >= 0;
  return /* @__PURE__ */ e.jsxs("div", { ref: s, style: {
    backgroundColor: u,
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }, children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: y(14), color: "#666", fontWeight: "500" }, children: n }),
      x && /* @__PURE__ */ e.jsx("div", { style: { fontSize: y(24) }, children: x })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { style: { fontSize: y(32), fontWeight: "bold", color: r, marginBottom: "8px" }, children: [
      i,
      typeof o == "number" ? o.toLocaleString() : o,
      c
    ] }),
    a !== void 0 && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
      /* @__PURE__ */ e.jsxs("span", { style: { fontSize: y(14), fontWeight: "bold", color: W ? "#4caf50" : "#f44336" }, children: [
        W ? "↑" : "↓",
        " ",
        Math.abs(a),
        "%"
      ] }),
      h && /* @__PURE__ */ e.jsx("span", { style: { fontSize: y(12), color: "#999" }, children: h })
    ] })
  ] });
}, hr = ({
  value: n,
  max: o = 100,
  min: i = 0,
  title: c,
  unit: a = "%",
  color: h = "#003357",
  backgroundColor: x = "#e0e0e0"
}) => {
  const { ref: r, width: u, fs: s } = ue(), y = Math.max(120, Math.min(u || 220, 320)), W = Math.max(i, Math.min(o, n)), f = (W - i) / (o - i) * 100, b = 225, B = 315, P = B - b, H = b + f / 100 * P, T = y / 2, S = y / 2 + 10, w = y / 2 - 40, g = (V, G) => {
    const $ = (V - 90) * Math.PI / 180;
    return { x: T + G * Math.cos($), y: S + G * Math.sin($) };
  }, M = (V, G) => {
    const $ = g(V, w), D = g(G, w), q = G - V <= 180 ? 0 : 1;
    return `M ${$.x} ${$.y} A ${w} ${w} 0 ${q} 1 ${D.x} ${D.y}`;
  }, _ = b + f / 100 * P, N = g(H, w - 15), O = g(H - 90, 6), F = g(H + 90, 6);
  return /* @__PURE__ */ e.jsxs("div", { ref: r, style: {
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
    c && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: s(18), fontWeight: "bold", color: "#003357", textAlign: "center" }, children: c }),
    y > 0 && /* @__PURE__ */ e.jsxs("svg", { width: y, height: y * 0.75, style: { overflow: "visible" }, children: [
      /* @__PURE__ */ e.jsx("defs", { children: /* @__PURE__ */ e.jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ e.jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodOpacity: "0.3" }) }) }),
      /* @__PURE__ */ e.jsx("path", { d: M(b, B), fill: "none", stroke: x, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ e.jsx("path", { d: M(b, _), fill: "none", stroke: h, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ e.jsx("polygon", { points: `${N.x},${N.y} ${O.x},${O.y} ${F.x},${F.y}`, fill: "#333", filter: "url(#shadow)" }),
      /* @__PURE__ */ e.jsx("circle", { cx: T, cy: S, r: "10", fill: "#333" }),
      /* @__PURE__ */ e.jsx("circle", { cx: T, cy: S, r: "6", fill: "#fff" }),
      /* @__PURE__ */ e.jsxs("text", { x: T, y: S + 45, textAnchor: "middle", fontSize: s(Math.max(16, y / 7)), fontWeight: "bold", fill: h, children: [
        W,
        a
      ] }),
      /* @__PURE__ */ e.jsx("text", { x: g(b, w + 20).x - 5, y: g(b, w + 20).y, textAnchor: "end", fontSize: s(14), fill: "#666", fontWeight: "500", children: i }),
      /* @__PURE__ */ e.jsx("text", { x: g(B, w + 20).x + 5, y: g(B, w + 20).y, textAnchor: "start", fontSize: s(14), fill: "#666", fontWeight: "500", children: o })
    ] })
  ] });
}, br = ({
  value: n,
  max: o = 100,
  label: i,
  showPercentage: c = !0,
  height: a = 24,
  color: h = "#003357",
  backgroundColor: x = "#e0e0e0",
  animated: r = !1
}) => {
  const { ref: u, fs: s } = ue(), y = Math.min(100, Math.max(0, n / o * 100));
  return /* @__PURE__ */ e.jsxs("div", { ref: u, style: { width: "100%", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }, children: [
    i && /* @__PURE__ */ e.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: s(14),
      color: "#333",
      fontWeight: "500"
    }, children: [
      /* @__PURE__ */ e.jsx("span", { children: i }),
      c && /* @__PURE__ */ e.jsxs("span", { children: [
        y.toFixed(0),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { style: {
      width: "100%",
      height: `${a}px`,
      backgroundColor: x,
      borderRadius: `${a / 2}px`,
      overflow: "hidden",
      position: "relative"
    }, children: /* @__PURE__ */ e.jsx("div", { style: {
      width: `${y}%`,
      height: "100%",
      backgroundColor: h,
      borderRadius: `${a / 2}px`,
      transition: r ? "width 0.3s ease" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: y > 10 ? "8px" : "0"
    }, children: !i && c && y > 10 && /* @__PURE__ */ e.jsxs("span", { style: { color: "#fff", fontSize: s(12), fontWeight: "bold" }, children: [
      y.toFixed(0),
      "%"
    ] }) }) })
  ] });
}, yr = ({ data: n, title: o, maxHeight: i = 400 }) => {
  const { ref: c, fs: a } = ue(), h = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  };
  if (!n || n.length === 0)
    return /* @__PURE__ */ e.jsxs("div", { ref: c, style: h, children: [
      o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: a(18), fontWeight: "bold", color: "#003357" }, children: o }),
      /* @__PURE__ */ e.jsx("p", { style: { color: "#666", textAlign: "center", fontSize: a(14) }, children: "No data available" })
    ] });
  const x = Object.keys(n[0]);
  return /* @__PURE__ */ e.jsxs("div", { ref: c, style: h, children: [
    o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: a(18), fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ e.jsx("div", { style: { maxHeight: i, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ e.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ e.jsx("thead", { style: { position: "sticky", top: 0, backgroundColor: "#003357", color: "#fff", zIndex: 1 }, children: /* @__PURE__ */ e.jsx("tr", { children: x.map((r) => /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", fontSize: a(13), borderBottom: "2px solid #002a45" }, children: r }, r)) }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: n.map((r, u) => /* @__PURE__ */ e.jsx("tr", { style: { backgroundColor: u % 2 === 0 ? "#f9f9f9" : "#fff" }, children: x.map((s) => /* @__PURE__ */ e.jsx("td", { style: { padding: "12px", borderBottom: "1px solid #e0e0e0", color: "#333", fontSize: a(13) }, children: r[s] !== null && r[s] !== void 0 ? String(r[s]) : "-" }, s)) }, u)) })
    ] }) })
  ] });
}, mr = ({
  data: n,
  rowField: o,
  columnField: i,
  valueField: c,
  aggregation: a = "sum",
  title: h
}) => {
  const x = Wt(() => {
    const r = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), s = {};
    n.forEach((f) => {
      const b = String(f[o]), B = String(f[i]), P = Number(f[c]) || 0;
      r.add(b), u.add(B), s[b] || (s[b] = {}), s[b][B] || (s[b][B] = []), s[b][B].push(P);
    });
    const y = (f) => {
      if (f.length === 0) return 0;
      switch (a) {
        case "sum":
          return f.reduce((b, B) => b + B, 0);
        case "avg":
          return f.reduce((b, B) => b + B, 0) / f.length;
        case "count":
          return f.length;
        case "min":
          return Math.min(...f);
        case "max":
          return Math.max(...f);
        default:
          return 0;
      }
    }, W = {};
    return r.forEach((f) => {
      W[f] = {}, u.forEach((b) => {
        W[f][b] = s[f]?.[b] ? y(s[f][b]) : 0;
      });
    }), { rows: Array.from(r), cols: Array.from(u), result: W };
  }, [n, o, i, c, a]);
  return /* @__PURE__ */ e.jsxs("div", { style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }, children: [
    h && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: h }),
    /* @__PURE__ */ e.jsx("div", { style: { overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ e.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ e.jsx("thead", { style: { backgroundColor: "#003357", color: "#fff" }, children: /* @__PURE__ */ e.jsxs("tr", { children: [
        /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", position: "sticky", left: 0, backgroundColor: "#003357" }, children: o }),
        x.cols.map((r) => /* @__PURE__ */ e.jsx("th", { style: { padding: "12px", textAlign: "right", fontWeight: "600" }, children: r }, r))
      ] }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: x.rows.map((r, u) => /* @__PURE__ */ e.jsxs("tr", { style: { backgroundColor: u % 2 === 0 ? "#f9f9f9" : "#fff" }, children: [
        /* @__PURE__ */ e.jsx("td", { style: { padding: "12px", color: "#000000", fontWeight: "600", borderBottom: "1px solid #e0e0e0", position: "sticky", left: 0, backgroundColor: u % 2 === 0 ? "#f9f9f9" : "#fff" }, children: r }),
        x.cols.map((s) => /* @__PURE__ */ e.jsx("td", { style: { padding: "12px", textAlign: "right", borderBottom: "1px solid #e0e0e0", color: "#333" }, children: x.result[r][s].toFixed(2) }, s))
      ] }, r)) })
    ] }) })
  ] });
}, vr = ({
  items: n,
  title: o,
  maxHeight: i = 400,
  showNumbers: c = !1,
  defaultColor: a = "#003357"
}) => {
  const { ref: h, fs: x } = ue(), r = {
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    info: "#17a2b8"
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: h, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: x(18), fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ e.jsx("div", { style: { maxHeight: i, overflow: "auto" }, children: /* @__PURE__ */ e.jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((u, s) => /* @__PURE__ */ e.jsxs(
      "li",
      {
        style: {
          padding: "16px",
          borderBottom: s < n.length - 1 ? "1px solid #e0e0e0" : "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          transition: "background-color 0.2s",
          cursor: "pointer"
        },
        onMouseEnter: (y) => y.currentTarget.style.backgroundColor = "#f5f5f5",
        onMouseLeave: (y) => y.currentTarget.style.backgroundColor = "transparent",
        children: [
          c && /* @__PURE__ */ e.jsx("span", { style: {
            minWidth: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: u.color || a,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: x(12),
            fontWeight: "bold"
          }, children: s + 1 }),
          u.icon && /* @__PURE__ */ e.jsx("div", { style: { fontSize: x(20) }, children: u.icon }),
          u.status && /* @__PURE__ */ e.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: r[u.status] } }),
          /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "600", color: "#333", marginBottom: "4px", fontSize: x(14) }, children: u.title }),
            u.subtitle && /* @__PURE__ */ e.jsx("div", { style: { fontSize: x(13), color: "#666" }, children: u.subtitle })
          ] }),
          u.timestamp && /* @__PURE__ */ e.jsx("div", { style: { fontSize: x(12), color: "#999", whiteSpace: "nowrap" }, children: u.timestamp })
        ]
      },
      u.id
    )) }) })
  ] });
}, jr = ({
  markers: n,
  title: o,
  height: i = 400,
  centerLat: c = 0,
  centerLng: a = 0,
  zoom: h = 10,
  apiKey: x
}) => {
  const { ref: r, fs: u } = ue(), s = `${c},${a}`, y = n.map((f) => `markers=color:red%7C${f.lat},${f.lng}`).join("&"), W = x ? `https://www.google.com/maps/embed/v1/view?key=${x}&center=${s}&zoom=${h}` : `https://maps.google.com/maps?q=${s}&z=${h}&output=embed${n.length > 0 ? "&" + y : ""}`;
  return /* @__PURE__ */ e.jsxs("div", { ref: r, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: u(18), fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ e.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0" }, children: /* @__PURE__ */ e.jsx(
      "iframe",
      {
        width: "100%",
        height: i,
        style: { border: 0, display: "block" },
        loading: "lazy",
        src: W,
        allowFullScreen: !0
      }
    ) })
  ] });
}, Cr = ({
  content: n,
  title: o,
  variant: i = "description",
  align: c = "left",
  color: a,
  backgroundColor: h = "#ffffff"
}) => {
  const { ref: x, fs: r } = ue(), u = {
    note: { fontSize: r(14), fontStyle: "italic", color: a || "#666", lineHeight: "1.6" },
    title: { fontSize: r(24), fontWeight: "bold", color: a || "#003357", lineHeight: "1.3" },
    description: { fontSize: r(16), color: a || "#333", lineHeight: "1.7" }
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
    backgroundColor: h,
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: r(18), fontWeight: "bold", color: "#003357", textAlign: c }, children: o }),
    /* @__PURE__ */ e.jsx("div", { style: { ...u[i], textAlign: c, whiteSpace: "pre-wrap" }, children: n })
  ] });
}, kr = ({
  src: n,
  type: o,
  title: i,
  alt: c = "Media content",
  width: a = "100%",
  height: h = "auto",
  autoPlay: x = !1,
  controls: r = !0,
  loop: u = !1
}) => {
  const { ref: s, fs: y } = ue();
  return /* @__PURE__ */ e.jsxs("div", { ref: s, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    i && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: y(18), fontWeight: "bold", color: "#003357" }, children: i }),
    /* @__PURE__ */ e.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }, children: o === "image" ? /* @__PURE__ */ e.jsx("img", { src: n, alt: c, style: { width: a, height: h, display: "block", objectFit: "cover" } }) : /* @__PURE__ */ e.jsx("video", { src: n, width: a, height: h, autoPlay: x, controls: r, loop: u, style: { display: "block" }, children: "Your browser does not support the video tag." }) })
  ] });
}, wr = ({
  title: n,
  options: o = [],
  defaultValue: i,
  onChange: c,
  type: a = "dropdown",
  placeholder: h = "Select...",
  searchable: x = !1,
  clearable: r = !0,
  maxSelections: u,
  minValue: s = 0,
  maxValue: y = 100,
  step: W = 1
}) => {
  const [f, b] = k(i || (a === "multiselect" || a === "tags" ? [] : o[0]?.value || "")), [B, P] = k(""), [H, T] = k(/* @__PURE__ */ new Set()), [S, w] = k(i || { start: "", end: "" }), [g, M] = k(i || { min: s, max: y }), [_, N] = k(""), O = Wt(() => !x || !B ? o : o.filter(
    (v) => v.label.toLowerCase().includes(B.toLowerCase())
  ), [o, B, x]), F = (v) => {
    b(v), c(v);
  }, V = (v) => {
    const ne = Array.isArray(f) ? f : [], Q = ne.includes(v) ? ne.filter((m) => m !== v) : u && ne.length >= u ? ne : [...ne, v];
    b(Q), c(Q);
  }, G = () => {
    const v = a === "multiselect" || a === "tags" ? [] : "";
    b(v), c(v);
  }, $ = (v) => {
    const ne = new Set(H);
    ne.has(v) ? ne.delete(v) : ne.add(v), T(ne);
  }, D = (v, ne) => {
    const Q = { ...S, [v]: ne };
    w(Q), c(Q);
  }, q = (v, ne) => {
    const Q = { ...g, [v]: ne };
    M(Q), c(Q);
  }, X = (v) => {
    if (!v.trim()) return;
    const ne = Array.isArray(f) ? f : [];
    if (!ne.includes(v)) {
      const Q = [...ne, v.trim()];
      b(Q), c(Q);
    }
    N("");
  }, U = (v) => {
    const Q = (Array.isArray(f) ? f : []).filter((m) => m !== v);
    b(Q), c(Q);
  }, se = (v, ne = 0) => /* @__PURE__ */ e.jsx("div", { style: { marginLeft: ne * 20 }, children: v.map((Q) => /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: { display: "flex", alignItems: "center", padding: "8px", cursor: "pointer", borderRadius: "4px", backgroundColor: (Array.isArray(f) ? f.includes(Q.value) : f === Q.value) ? "#e6f2ff" : "transparent" },
        onClick: () => V(Q.value),
        children: [
          Q.children && /* @__PURE__ */ e.jsx("span", { onClick: (m) => {
            m.stopPropagation(), $(Q.value);
          }, style: { marginRight: "8px", fontSize: "12px" }, children: H.has(Q.value) ? "▼" : "▶" }),
          /* @__PURE__ */ e.jsx("input", { type: "checkbox", checked: Array.isArray(f) && f.includes(Q.value), onChange: () => {
          }, style: { marginRight: "8px" } }),
          /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: Q.disabled ? "#999" : "#333" }, children: Q.label }),
          Q.count !== void 0 && /* @__PURE__ */ e.jsxs("span", { style: { marginLeft: "auto", fontSize: "12px", color: "#666" }, children: [
            "(",
            Q.count,
            ")"
          ] })
        ]
      }
    ),
    Q.children && H.has(Q.value) && se(Q.children, ne + 1)
  ] }, Q.value)) });
  return /* @__PURE__ */ e.jsxs("div", { style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      n && /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: n }),
      r && (a === "multiselect" || a === "tags" ? Array.isArray(f) && f.length > 0 : f) && /* @__PURE__ */ e.jsx("button", { onClick: G, style: { padding: "4px 12px", fontSize: "12px", border: "none", borderRadius: "4px", backgroundColor: "#f0f0f0", color: "#666", cursor: "pointer" }, children: "Clear" })
    ] }),
    x && a !== "daterange" && a !== "numericrange" && /* @__PURE__ */ e.jsx("input", { type: "text", value: B, onChange: (v) => P(v.target.value), placeholder: "Search...", style: { width: "90%", padding: "10px", marginBottom: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    a === "dropdown" && /* @__PURE__ */ e.jsxs("select", { value: f, onChange: (v) => F(v.target.value), style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: "#fff", color: "#333", cursor: "pointer", outline: "none" }, children: [
      h && /* @__PURE__ */ e.jsx("option", { value: "", children: h }),
      O.map((v) => /* @__PURE__ */ e.jsxs("option", { value: v.value, disabled: v.disabled, children: [
        v.label,
        " ",
        v.count !== void 0 && `(${v.count})`
      ] }, v.value))
    ] }),
    a === "buttons" && /* @__PURE__ */ e.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: O.map((v) => /* @__PURE__ */ e.jsxs("button", { onClick: () => F(v.value), disabled: v.disabled, style: { padding: "10px 20px", fontSize: "14px", fontWeight: "600", border: f === v.value ? "2px solid #003357" : "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: f === v.value ? "#003357" : "#fff", color: f === v.value ? "#fff" : "#333", cursor: v.disabled ? "not-allowed" : "pointer", opacity: v.disabled ? 0.5 : 1, transition: "all 0.2s" }, children: [
      v.label,
      " ",
      v.count !== void 0 && `(${v.count})`
    ] }, v.value)) }),
    a === "multiselect" && /* @__PURE__ */ e.jsx("div", { style: { maxHeight: "300px", overflowY: "auto", border: "1px solid #d0d0d0", borderRadius: "8px", padding: "8px" }, children: O.map((v) => /* @__PURE__ */ e.jsxs("label", { style: { display: "flex", alignItems: "center", padding: "10px", cursor: v.disabled ? "not-allowed" : "pointer", borderRadius: "4px", transition: "background 0.2s", backgroundColor: Array.isArray(f) && f.includes(v.value) ? "#e6f2ff" : "transparent" }, children: [
      /* @__PURE__ */ e.jsx("input", { type: "checkbox", checked: Array.isArray(f) && f.includes(v.value), onChange: () => V(v.value), disabled: v.disabled, style: { marginRight: "10px", cursor: v.disabled ? "not-allowed" : "pointer" } }),
      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "14px", color: v.disabled ? "#999" : "#333", flex: 1 }, children: v.label }),
      v.count !== void 0 && /* @__PURE__ */ e.jsxs("span", { style: { fontSize: "12px", color: "#666" }, children: [
        "(",
        v.count,
        ")"
      ] })
    ] }, v.value)) }),
    a === "search" && /* @__PURE__ */ e.jsx("input", { type: "text", value: f, onChange: (v) => {
      b(v.target.value), c(v.target.value);
    }, placeholder: h, style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    a === "daterange" && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: [
      /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ e.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Start Date" }),
        /* @__PURE__ */ e.jsx("input", { type: "date", value: S.start, onChange: (v) => D("start", v.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] }),
      /* @__PURE__ */ e.jsx("span", { style: { marginTop: "20px", color: "#666" }, children: "—" }),
      /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ e.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "End Date" }),
        /* @__PURE__ */ e.jsx("input", { type: "date", value: S.end, onChange: (v) => D("end", v.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    a === "numericrange" && /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#666" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Min: ",
          g.min
        ] }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Max: ",
          g.max
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ e.jsx("input", { type: "range", min: s, max: y, step: W, value: g.min, onChange: (v) => q("min", Number(v.target.value)), style: { flex: 1 } }),
        /* @__PURE__ */ e.jsx("input", { type: "range", min: s, max: y, step: W, value: g.max, onChange: (v) => q("max", Number(v.target.value)), style: { flex: 1 } })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "12px", marginTop: "12px" }, children: [
        /* @__PURE__ */ e.jsx("input", { type: "number", min: s, max: y, step: W, value: g.min, onChange: (v) => q("min", Number(v.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ e.jsx("input", { type: "number", min: s, max: y, step: W, value: g.max, onChange: (v) => q("max", Number(v.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    a === "hierarchical" && se(O),
    a === "tags" && /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px", marginBottom: "12px" }, children: [
        /* @__PURE__ */ e.jsx("input", { type: "text", value: _, onChange: (v) => N(v.target.value), onKeyDown: (v) => v.key === "Enter" && X(_), placeholder: "Add tag...", style: { flex: 1, padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ e.jsx("button", { onClick: () => X(_), style: { padding: "10px 20px", fontSize: "14px", border: "none", borderRadius: "8px", backgroundColor: "#003357", color: "#fff", cursor: "pointer" }, children: "Add" })
      ] }),
      /* @__PURE__ */ e.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: Array.isArray(f) && f.map((v) => /* @__PURE__ */ e.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", fontSize: "14px", backgroundColor: "#e6f2ff", color: "#003357", borderRadius: "16px" }, children: [
        v,
        /* @__PURE__ */ e.jsx("button", { onClick: () => U(v), style: { border: "none", background: "none", color: "#003357", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }, children: "×" })
      ] }, v)) })
    ] }),
    (a === "multiselect" || a === "hierarchical") && Array.isArray(f) && f.length > 0 && /* @__PURE__ */ e.jsxs("div", { style: { marginTop: "12px", padding: "8px", backgroundColor: "#f5f5f5", borderRadius: "8px", fontSize: "12px", color: "#666" }, children: [
      "Selected: ",
      f.length,
      " ",
      u && `/ ${u}`
    ] })
  ] });
}, Sr = ({
  alerts: n,
  title: o,
  maxHeight: i = 400,
  onDismiss: c
}) => {
  const { ref: a, fs: h } = ue(), x = {
    success: { bg: "#d4edda", border: "#28a745", icon: "✓" },
    warning: { bg: "#fff3cd", border: "#ffc107", icon: "⚠" },
    error: { bg: "#f8d7da", border: "#dc3545", icon: "✕" },
    info: { bg: "#d1ecf1", border: "#17a2b8", icon: "ℹ" }
  };
  return /* @__PURE__ */ e.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: h(18), fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ e.jsx("div", { style: { maxHeight: i, overflow: "auto" }, children: n.length === 0 ? /* @__PURE__ */ e.jsx("p", { style: { color: "#666", textAlign: "center", padding: "20px", fontSize: h(14) }, children: "No alerts" }) : /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: n.map((r) => {
      const u = x[r.type];
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          style: {
            padding: "16px",
            backgroundColor: u.bg,
            border: `1px solid ${u.border}`,
            borderLeft: `4px solid ${u.border}`,
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            opacity: r.read ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: h(18), fontWeight: "bold" }, children: u.icon }),
            /* @__PURE__ */ e.jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ e.jsx("div", { style: { fontSize: h(14), color: "#333", marginBottom: "4px" }, children: r.message }),
              /* @__PURE__ */ e.jsx("div", { style: { fontSize: h(12), color: "#666" }, children: r.timestamp })
            ] }),
            c && /* @__PURE__ */ e.jsx(
              "button",
              {
                onClick: () => c(r.id),
                style: { background: "none", border: "none", fontSize: h(18), cursor: "pointer", color: "#666", padding: "0 4px" },
                children: "×"
              }
            )
          ]
        },
        r.id
      );
    }) }) })
  ] });
};
let Un = 0;
const Ke = [], zr = (n, o = "info", i = 3e3) => {
  const c = { id: `toast-${++Un}`, message: n, type: o, duration: i };
  Ke.forEach((a) => a(c));
}, Rr = ({ position: n = "top-right", maxToasts: o = 5 }) => {
  const [i, c] = k([]), a = wn((s) => {
    c((y) => [s, ...y].slice(0, o)), s.duration && setTimeout(() => h(s.id), s.duration);
  }, [o]), h = (s) => {
    c((y) => y.filter((W) => W.id !== s));
  };
  Ee(() => (Ke.push(a), () => {
    const s = Ke.indexOf(a);
    s > -1 && Ke.splice(s, 1);
  }), [a]);
  const x = () => {
    const s = { position: "fixed", zIndex: 9999, display: "flex", flexDirection: "column", gap: "12px", padding: "16px" };
    switch (n) {
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
  }, r = (s) => ({ backgroundColor: {
    success: { bg: "#10b981", icon: "✓" },
    error: { bg: "#ef4444", icon: "✕" },
    warning: { bg: "#f59e0b", icon: "⚠" },
    info: { bg: "#3b82f6", icon: "ℹ" }
  }[s].bg }), u = (s) => ({ success: "✓", error: "✕", warning: "⚠", info: "ℹ" })[s];
  return /* @__PURE__ */ e.jsxs("div", { style: x(), children: [
    i.map((s) => /* @__PURE__ */ e.jsxs("div", { style: { ...r(s.type), color: "#fff", padding: "12px 16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "12px", minWidth: "300px", maxWidth: "500px", animation: "slideIn 0.3s ease-out", fontFamily: "Arial, sans-serif" }, children: [
      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "18px", fontWeight: "bold" }, children: u(s.type) }),
      /* @__PURE__ */ e.jsx("span", { style: { flex: 1, fontSize: "14px" }, children: s.message }),
      /* @__PURE__ */ e.jsx("button", { onClick: () => h(s.id), style: { background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px", padding: 0, lineHeight: 1 }, children: "×" })
    ] }, s.id)),
    /* @__PURE__ */ e.jsx("style", { children: `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      ` })
  ] });
}, Mr = ({
  locations: n,
  title: o,
  height: i = 400,
  centerLat: c,
  centerLng: a,
  zoom: h = 12,
  bubbleScale: x = 1,
  showLabels: r = !0,
  mapStyle: u = "default"
}) => {
  const s = Ue(null), y = Ue(null), W = Ue([]), { ref: f, fs: b } = ue(), B = {
    lat: c ?? (n.length > 0 ? n.reduce((H, T) => H + T.lat, 0) / n.length : 51.5074),
    lng: a ?? (n.length > 0 ? n.reduce((H, T) => H + T.lng, 0) / n.length : -0.1278)
  }, P = (H) => {
    const T = Math.max(...n.map((g) => g.value)), S = 40;
    return (S + H / T * (100 - S)) * x;
  };
  return Ee(() => {
    const H = () => {
      if (window.L) {
        T();
        return;
      }
      const S = document.createElement("link");
      S.rel = "stylesheet", S.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(S);
      const w = document.createElement("script");
      w.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", w.async = !0, w.onload = T, document.head.appendChild(w);
    }, T = () => {
      if (!s.current || !window.L || y.current) return;
      const S = u === "satellite" ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : u === "terrain" ? "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      y.current = window.L.map(s.current).setView([B.lat, B.lng], h), window.L.tileLayer(S, {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(y.current), W.current.forEach((w) => w.remove()), W.current = [], n.forEach((w) => {
        const g = P(w.value), M = w.color || "#0066a1", _ = window.L.divIcon({
          className: "custom-bubble-marker",
          html: `
            <div style="position: relative; width: ${g}px; height: ${g}px; margin-left: -${g / 2}px; margin-top: -${g / 2}px;">
              <div class="bubble-circle" style="width: ${g}px; height: ${g}px; border-radius: 50%; background-color: ${M}; opacity: 0.7; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: transform 0.3s;">
                <span style="color: #fff; font-size: ${g / 3.5}px; font-weight: bold; font-family: Arial, sans-serif;">${w.value >= 10 ? `${w.value}+` : w.value}</span>
              </div>
              ${r && w.label ? `<div style="position: absolute; top: ${g}px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #333; font-size: 12px; font-weight: 600; text-shadow: 0 0 3px #fff, 0 0 3px #fff; font-family: Arial, sans-serif;">${w.label}</div>` : ""}
            </div>
          `,
          iconSize: [g, g],
          iconAnchor: [g / 2, g / 2]
        }), N = window.L.marker([w.lat, w.lng], { icon: _ });
        N.bindTooltip(`${w.label || `Location ${w.id}`}: ${w.value}`, {
          direction: "top",
          offset: [0, -g / 2],
          className: "custom-tooltip"
        }), N.on("mouseover", function(O) {
          const F = O.target.getElement()?.querySelector(".bubble-circle");
          F && (F.style.transform = "scale(1.1)");
        }), N.on("mouseout", function(O) {
          const F = O.target.getElement()?.querySelector(".bubble-circle");
          F && (F.style.transform = "scale(1)");
        }), N.addTo(y.current), W.current.push(N);
      });
    };
    return H(), () => {
      y.current && (y.current.remove(), y.current = null);
    };
  }, [n, B.lat, B.lng, h, u, x, r]), /* @__PURE__ */ e.jsxs("div", { ref: f, style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    o && /* @__PURE__ */ e.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: b(18), fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ e.jsx("div", { style: { position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0", width: "100%", height: i }, children: /* @__PURE__ */ e.jsx("div", { ref: s, style: { width: "100%", height: "100%" } }) }),
    /* @__PURE__ */ e.jsx("style", { children: `
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
    n.length > 0 && /* @__PURE__ */ e.jsxs("div", { style: { marginTop: "16px", display: "flex", gap: "16px", flexWrap: "wrap", fontSize: b(12), color: "#666" }, children: [
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#0066a1" } }),
        /* @__PURE__ */ e.jsxs("span", { children: [
          "Total Locations: ",
          n.length
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ e.jsxs("span", { children: [
        "Total Count: ",
        n.reduce((H, T) => H + T.value, 0)
      ] }) })
    ] })
  ] });
};
function Kn(n) {
  const o = n.replace("#", "");
  return [
    parseInt(o.substring(0, 2), 16),
    parseInt(o.substring(2, 4), 16),
    parseInt(o.substring(4, 6), 16)
  ];
}
function qn(n, o) {
  const [i, c, a] = Kn(n), h = [...o].sort((u, s) => u.value - s.value), x = o.length, r = /* @__PURE__ */ new Map();
  return h.forEach((u, s) => {
    const y = x === 1 ? 0.5 : s / (x - 1), W = (b) => Math.round(220 - y * (220 - b)), f = (b) => W(b).toString(16).padStart(2, "0");
    r.set(u, `#${f(i)}${f(c)}${f(a)}`);
  }), o.map((u) => r.get(u));
}
const Re = (n) => n * Math.PI / 180;
function Tt(n, o) {
  const i = [...n].sort((a, h) => a.y - h.y);
  for (let a = 1; a < i.length; a++)
    i[a].y - i[a - 1].y < o && (i[a].y = i[a - 1].y + o);
  for (let a = i.length - 2; a >= 0; a--)
    i[a + 1].y - i[a].y < o && (i[a].y = i[a + 1].y - o);
  const c = new Array(n.length);
  return i.forEach((a) => {
    c[a.idx] = a.y;
  }), c;
}
const Xe = 28, Et = 24, At = 15, Gn = 20, Tr = ({ data: n, title: o, total: i, baseColor: c }) => {
  const { ref: a, width: h, fs: x } = ue(), [r, u] = k(null), y = Math.max(280, Math.min(h || 600, 500)), f = y / 2 - 130, b = f * 0.52, B = f + Gn, P = c ? qn(c, n) : null, H = n.reduce((j, E) => j + E.value, 0), T = i ?? H, S = y / 2, w = y / 2;
  let g = -90;
  const M = n.map((j, E) => {
    const Z = j.value / H * 100, le = j.value / H * 360, ee = g, re = g + le, ce = Re(ee + le / 2), he = Math.cos(ce) >= 0, pe = P ? P[E] : j.color ?? "#4a90e2", be = S + B * Math.cos(ce), ze = w + B * Math.sin(ce);
    return g = re, { ...j, pct: Z, sweep: le, start: ee, end: re, mid: ce, isRight: he, ex: be, ey: ze, color: pe, idx: E };
  }), _ = M.filter((j) => j.isRight), N = M.filter((j) => !j.isRight), O = Tt(_.map((j, E) => ({ idx: E, y: j.ey })), Et), F = Tt(N.map((j, E) => ({ idx: E, y: j.ey })), Et);
  let V = 0, G = 0;
  const $ = M.map((j) => {
    const E = j.isRight ? O[V++] : F[G++];
    return { ...j, labelY: E };
  }), D = $.map((j) => j.labelY), q = Math.min(...D) - Xe, X = Math.max(...D) + Xe, U = q < 0 ? -q : 0, se = S, v = w + U, ne = Math.min(q + U, v - f - Xe), m = Math.max(X + U, v + f + Xe) - ne;
  g = -90;
  const C = n.map((j, E) => {
    const Z = $[E], le = Z.sweep, ee = g, re = g + le, ce = Z.mid, he = se + f * Math.cos(Re(ee)), pe = v + f * Math.sin(Re(ee)), be = se + f * Math.cos(Re(re)), ze = v + f * Math.sin(Re(re)), Ae = se + b * Math.cos(Re(re)), p = v + b * Math.sin(Re(re)), A = se + b * Math.cos(Re(ee)), R = v + b * Math.sin(Re(ee)), te = le > 180 ? 1 : 0, de = `M ${he} ${pe} A ${f} ${f} 0 ${te} 1 ${be} ${ze} L ${Ae} ${p} A ${b} ${b} 0 ${te} 0 ${A} ${R} Z`, ae = se + (f + 2) * Math.cos(ce), J = v + (f + 2) * Math.sin(ce), me = f + 30, ke = Math.max(f + 50, H * 1.5), Se = Math.max(v - ke + 5, Math.min(v + ke - 5, Z.labelY + U)), We = (Se - v) / ke, De = se + me * Math.sqrt(Math.max(0, 1 - We * We)) * (Z.isRight ? 1 : -1), Le = De + (Z.isRight ? At : -At), $e = Z.isRight ? "start" : "end", Je = Le + (Z.isRight ? 5 : -5);
    return g = re, { ...Z, path: de, lineStartX: ae, lineStartY: J, ellipseX: De, labelY: Se, lx2: Le, textAnchor: $e, textX: Je };
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: x(12), fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ e.jsxs("svg", { width: y, height: m, viewBox: `0 ${ne} ${y} ${m}`, style: { overflow: "visible", display: "block" }, children: [
        C.map((j, E) => /* @__PURE__ */ e.jsx(
          "g",
          {
            onMouseEnter: (Z) => u({ x: Z.clientX, y: Z.clientY, label: j.label, value: j.value, pct: j.pct }),
            onMouseMove: (Z) => u((le) => le ? { ...le, x: Z.clientX, y: Z.clientY } : null),
            onMouseLeave: () => u(null),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ e.jsx("path", { d: j.path, fill: j.color, stroke: "#fff", strokeWidth: "2" })
          },
          E
        )),
        /* @__PURE__ */ e.jsx(
          "text",
          {
            x: se,
            y: v - 8,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: x(13),
            fontWeight: "600",
            children: "TOTAL"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "text",
          {
            x: se,
            y: v + 10,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: x(13),
            fontWeight: "700",
            children: T.toLocaleString("en-IN")
          }
        ),
        C.map((j, E) => /* @__PURE__ */ e.jsxs("g", { children: [
          /* @__PURE__ */ e.jsx(
            "polyline",
            {
              points: `${j.lineStartX},${j.lineStartY} ${j.ellipseX},${j.labelY} ${j.lx2},${j.labelY}`,
              stroke: j.color,
              strokeWidth: "1.2",
              fill: "none",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "text",
            {
              x: j.textX,
              y: j.labelY,
              textAnchor: j.textAnchor,
              dominantBaseline: "middle",
              fill: "#2c3e50",
              fontSize: x(11),
              fontWeight: "600",
              children: [
                j.label,
                ": ",
                j.pct.toFixed(1),
                "%"
              ]
            }
          )
        ] }, `label-${E}`))
      ] }),
      r && /* @__PURE__ */ e.jsxs("div", { style: {
        position: "fixed",
        left: r.x + 12,
        top: r.y - 10,
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: x(12),
        pointerEvents: "none",
        zIndex: 1e3,
        whiteSpace: "nowrap"
      }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold" }, children: r.label }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          "Value: ",
          r.value.toLocaleString("en-IN")
        ] })
      ] })
    ] })
  ] });
}, Er = ({
  title: n,
  data: o,
  columns: i = 2,
  backgroundColor: c = "#ffffff",
  color: a
}) => {
  const h = Object.entries(o).map(([u, s]) => ({
    label: u.replace(/_/g, " "),
    value: s
  })), { ref: x, fs: r } = ue();
  return /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
    backgroundColor: c,
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    n && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: r(12), fontWeight: "bold", color: "#003357" }, children: n }),
    /* @__PURE__ */ e.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${i}, 1fr)`,
      gap: "24px 16px"
    }, children: h.map((u, s) => /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: r(30), fontWeight: "bold", color: a ?? "#6c3fc5", lineHeight: 1 }, children: u.value }),
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: r(11), color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }, children: u.label })
    ] }, s)) })
  ] });
};
function Jn(n) {
  const o = n.replace("#", "");
  return [parseInt(o.substring(0, 2), 16), parseInt(o.substring(2, 4), 16), parseInt(o.substring(4, 6), 16)];
}
function Zn(n, o) {
  const [i, c, a] = Jn(n);
  return Array.from({ length: o }, (h, x) => {
    const r = o === 1 ? 0.5 : x / (o - 1), u = (y) => Math.round(220 - r * (220 - y)), s = (y) => u(y).toString(16).padStart(2, "0");
    return `#${s(i)}${s(c)}${s(a)}`;
  });
}
const Ar = ({
  data: n,
  height: o = 200,
  showLegend: i = !0,
  showGrid: c = !0,
  title: a,
  color: h
}) => {
  const { ref: x, width: r, fs: u } = ue(), [s, y] = k(null), f = Math.max(100, (r || 600) - (i ? 160 : 0) - 40), b = 20, B = 15, P = 30, H = f - P * 2, T = o - b - B, w = Math.max(...n.flatMap((O) => O.lines.map((F) => F.value)), 0) || 1, g = H / (n.length || 1), M = Array.from(new Set(n.flatMap((O) => O.lines.map((F) => F.label)))), _ = h ? Zn(h, M.length) : null, N = /* @__PURE__ */ new Map();
  return M.forEach((O, F) => {
    const V = n.flatMap((G) => G.lines).find((G) => G.label === O)?.color;
    N.set(O, _ ? _[F] : V ?? "#4a90e2");
  }), /* @__PURE__ */ e.jsxs("div", { ref: x, style: {
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
    a && /* @__PURE__ */ e.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: u(12), fontWeight: "bold", color: "#003357" }, children: a }),
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "40px", alignItems: "flex-start" }, children: [
      f > 0 && /* @__PURE__ */ e.jsxs("svg", { width: f, height: o + B, children: [
        c && /* @__PURE__ */ e.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((O, F) => {
          const V = b + T * (1 - O);
          return /* @__PURE__ */ e.jsx("line", { x1: P, y1: V, x2: f - P, y2: V, stroke: "#e0e0e0", strokeWidth: "1" }, F);
        }) }),
        M.map((O, F) => {
          const V = n.map((D, q) => {
            const X = D.lines.find((ne) => ne.label === O), U = X ? X.value : 0, se = P + g * q + g / 2, v = b + T - U / w * T;
            return { x: se, y: v, value: U, category: D.category };
          }), G = `M ${V.map((D) => `${D.x},${D.y}`).join(" L ")}`, $ = N.get(O) ?? "#4a90e2";
          return /* @__PURE__ */ e.jsxs("g", { children: [
            /* @__PURE__ */ e.jsx("path", { d: G, fill: "none", stroke: $, strokeWidth: "2" }),
            V.map((D, q) => /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: D.x,
                cy: D.y,
                r: 4,
                fill: $,
                onMouseEnter: (X) => {
                  const U = X.currentTarget.getBoundingClientRect();
                  y({ x: U.left + U.width / 2, y: U.top, label: O, value: D.value });
                },
                onMouseLeave: () => y(null),
                style: { cursor: "pointer" }
              },
              q
            ))
          ] }, F);
        }),
        n.map((O, F) => {
          const V = P + g * F + g / 2;
          return /* @__PURE__ */ e.jsx("text", { x: V, y: b + T + 20, textAnchor: "middle", fontSize: u(12), fill: "#666", children: O.category }, F);
        })
      ] }),
      i && /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }, children: M.map((O, F) => /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ e.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: N.get(O), borderRadius: "4px" } }),
        /* @__PURE__ */ e.jsx("span", { style: { fontSize: u(14), color: "#333" }, children: O })
      ] }, F)) })
    ] }),
    s && /* @__PURE__ */ e.jsxs("div", { style: {
      position: "fixed",
      left: s.x,
      top: s.y - 10,
      transform: "translate(-50%, -100%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: u(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ e.jsx("div", { style: { fontWeight: "bold" }, children: s.label }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        "Value: ",
        s.value
      ] })
    ] })
  ] });
};
export {
  Mr as AdvanceMapWidget,
  sr as AdvancePrescription,
  Sr as AlertWidget,
  dr as BarChart,
  pr as BubbleChart,
  tr as Button,
  yr as DataWidget,
  Tr as DonutChart,
  wr as FilterWidget,
  hr as GaugeWidget,
  fr as HeatMap,
  gr as KpiWidget,
  ar as LineChart,
  vr as ListWidget,
  jr as MapWidget,
  kr as MediaWidget,
  zt as NotionTable,
  rr as NotionTableWithLayout,
  cr as PieChart,
  mr as PivotTable,
  br as ProgressBar,
  or as ScaffoldTable,
  xr as ScatterPlot,
  ir as SimplePrescription,
  ur as StackedChart,
  Er as StatGrid,
  lr as StatusWidget,
  nr as Table,
  Cr as TextWidget,
  Rr as Toaster,
  Ar as TrendLinechart,
  zr as showToast,
  ue as useContainerSize
};
