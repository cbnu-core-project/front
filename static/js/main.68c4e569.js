/*! For license information please see main.68c4e569.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          T = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          A = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var P = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var j = Symbol.iterator;
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (j && e[j]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          z = Object.assign;
        function U(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var F = !1;
        function I(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case _:
              return "Fragment";
            case k:
              return "Portal";
            case x:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
        var we = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          _e = null,
          Ee = null;
        function xe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Te(e) {
          _e ? (Ee ? Ee.push(e) : (Ee = [e])) : (_e = e);
        }
        function Ce() {
          if (_e) {
            var e = _e,
              t = Ee;
            if (((Ee = _e = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Ne() {}
        var Le = !1;
        function Oe(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Re(e, t, n);
          } finally {
            (Le = !1), (null !== _e || null !== Ee) && (Ne(), Ce());
          }
        }
        function Ae(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Sa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Pe = !1;
        if (c)
          try {
            var je = {};
            Object.defineProperty(je, "passive", {
              get: function () {
                Pe = !0;
              },
            }),
              window.addEventListener("test", je, je),
              window.removeEventListener("test", je, je);
          } catch (ce) {
            Pe = !1;
          }
        function Me(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          ze = null,
          Ue = !1,
          Fe = null,
          Ie = {
            onError: function (e) {
              (De = !0), (ze = e);
            },
          };
        function Ve(e, t, n, r, a, o, i, l, u) {
          (De = !1), (ze = null), Me.apply(Ie, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var qe = a.unstable_scheduleCallback,
          Qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          _t,
          Et,
          xt,
          Tt = !1,
          Ct = [],
          Rt = null,
          Nt = null,
          Lt = null,
          Ot = new Map(),
          At = new Map(),
          Pt = [],
          jt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              At.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function zt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      _t(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function It() {
          (Tt = !1),
            null !== Rt && Ut(Rt) && (Rt = null),
            null !== Nt && Ut(Nt) && (Nt = null),
            null !== Lt && Ut(Lt) && (Lt = null),
            Ot.forEach(Ft),
            At.forEach(Ft);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Tt ||
              ((Tt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function Bt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Ct.length) {
            Vt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Vt(Rt, e),
              null !== Nt && Vt(Nt, e),
              null !== Lt && Vt(Lt, e),
              Ot.forEach(t),
              At.forEach(t),
              n = 0;
            n < Pt.length;
            n++
          )
            (r = Pt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Pt.length && null === (n = Pt[0]).blockedOn; )
            zt(n), null === n.blockedOn && Pt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function qt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, Qt, n), Mt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Rt = Dt(Rt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Lt = Dt(Lt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Ot.set(o, Dt(Ot.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      At.set(o, Dt(At.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Mt(e, r), 4 & t && -1 < jt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && St(o),
                  null === (o = Gt(e, t, n, r)) && Hr(e, t, r, Qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Qt = null;
        function Gt(e, t, n, r) {
          if (((Qt = null), null !== (e = ga((e = Se(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Qt = e), null;
        }
        function Yt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = z({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = z({}, fn, {
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
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(z({}, pn, { dataTransfer: 0 })),
          mn = an(z({}, fn, { relatedTarget: 0 })),
          yn = an(
            z({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = z({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(z({}, sn, { data: 0 })),
          Sn = {
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
          kn = {
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
          _n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function xn() {
          return En;
        }
        var Tn = z({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Tn),
          Rn = an(
            z({}, pn, {
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
            })
          ),
          Nn = an(
            z({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          Ln = an(
            z({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = z({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = an(On),
          Pn = [9, 13, 27, 32],
          jn = c && "CompositionEvent" in window,
          Mn = null;
        c && "documentMode" in document && (Mn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Mn,
          zn = c && (!jn || (Mn && 8 < Mn && 11 >= Mn)),
          Un = String.fromCharCode(32),
          Fn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Pn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Te(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          qn = null;
        function Qn(e) {
          Ur(e, 0);
        }
        function Gn(e) {
          if (q(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (qn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(qn)) {
            var t = [];
            $n(t, qn, e, Se(e)), Oe(Qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(qn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Kr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          _r = {},
          Er = {};
        function xr(e) {
          if (_r[e]) return _r[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Tr = xr("animationend"),
          Cr = xr("animationiteration"),
          Rr = xr("animationstart"),
          Nr = xr("transitionend"),
          Lr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ar(e, t) {
          Lr.set(e, t), u(t, [e]);
        }
        for (var Pr = 0; Pr < Or.length; Pr++) {
          var jr = Or[Pr];
          Ar(jr.toLowerCase(), "on" + (jr[0].toUpperCase() + jr.slice(1)));
        }
        Ar(Tr, "onAnimationEnd"),
          Ar(Cr, "onAnimationIteration"),
          Ar(Rr, "onAnimationStart"),
          Ar("dblclick", "onDoubleClick"),
          Ar("focusin", "onFocus"),
          Ar("focusout", "onBlur"),
          Ar(Nr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, s) {
              if ((Ve.apply(this, arguments), De)) {
                if (!De) throw Error(o(198));
                var c = ze;
                (De = !1), (ze = null), Ue || ((Ue = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  zr(a, l, s), (o = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  zr(a, l, s), (o = u);
                }
            }
          }
          if (Ue) throw ((e = Fe), (Ue = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Pe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ga(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = o,
              a = Se(n),
              i = [];
            e: {
              var l = Lr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Cn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Nn;
                    break;
                  case Tr:
                  case Cr:
                  case Rr:
                    u = yn;
                    break;
                  case Nr:
                    u = Ln;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Rn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Ae(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : wa(u)),
                  (p = null == s ? l : wa(s)),
                  ((l = new c(v, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
                    for (p = 0, v = d; v; v = qr(v)) p++;
                    for (; 0 < h - p; ) (c = qr(c)), h--;
                    for (; 0 < p - h; ) (d = qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = qr(c)), (d = qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Qr(i, l, u, c, !1),
                  null !== s && null !== f && Qr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? wa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Yn;
              else if (Hn(l))
                if (Jn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? $n(i, m, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var g;
              if (jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (g = en())
                    : ((Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Bn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Vn(n)) && (b.data = g))),
                (g = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!jn && In(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Ur(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Ae(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Ae(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = Ae(n, o)) && i.unshift($r(n, u, l))
                : a || (null != (u = Ae(n, o)) && i.push($r(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function Sa(e) {
          return e[pa] || null;
        }
        var ka = [],
          _a = -1;
        function Ea(e) {
          return { current: e };
        }
        function xa(e) {
          0 > _a || ((e.current = ka[_a]), (ka[_a] = null), _a--);
        }
        function Ta(e, t) {
          _a++, (ka[_a] = e.current), (e.current = t);
        }
        var Ca = {},
          Ra = Ea(Ca),
          Na = Ea(!1),
          La = Ca;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Aa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Pa() {
          xa(Na), xa(Ra);
        }
        function ja(e, t, n) {
          if (Ra.current !== Ca) throw Error(o(168));
          Ta(Ra, t), Ta(Na, n);
        }
        function Ma(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return z({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (La = Ra.current),
            Ta(Ra, e),
            Ta(Na, Na.current),
            !0
          );
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ma(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xa(Na),
              xa(Ra),
              Ta(Ra, e))
            : xa(Na),
            Ta(Na, n);
        }
        var Ua = null,
          Fa = !1,
          Ia = !1;
        function Va(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function Ba() {
          if (!Ia && null !== Ua) {
            Ia = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ua;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Fa = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), qe(Ze, Ba), a);
            } finally {
              (bt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Ka = 0,
          qa = [],
          Qa = 0,
          Ga = null,
          Ya = 1,
          Ja = "";
        function Xa(e, t) {
          (Wa[Ha++] = Ka), (Wa[Ha++] = $a), ($a = e), (Ka = t);
        }
        function Za(e, t, n) {
          (qa[Qa++] = Ya), (qa[Qa++] = Ja), (qa[Qa++] = Ga), (Ga = e);
          var r = Ya;
          e = Ja;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ja = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ja = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Ka = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ga; )
            (Ga = qa[--Qa]),
              (qa[Qa] = null),
              (Ja = qa[--Qa]),
              (qa[Qa] = null),
              (Ya = qa[--Qa]),
              (qa[Qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = As(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Ya, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = As(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = w.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          wo = null,
          So = null;
        function ko() {
          So = wo = bo = null;
        }
        function _o(e) {
          var t = go.current;
          xa(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xo(e, t) {
          (bo = e),
            (So = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function To(e) {
          var t = e._currentValue;
          if (So !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var Co = null;
        function Ro(e) {
          null === Co ? (Co = [e]) : Co.push(e);
        }
        function No(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ro(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Lo(e, r)
          );
        }
        function Lo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Oo = !1;
        function Ao(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Po(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function jo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Lo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ro(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Lo(e, n)
          );
        }
        function Do(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function zo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Uo(e, t, n, r) {
          var a = e.updateQueue;
          Oo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = z({}, f, d);
                      break e;
                    case 2:
                      Oo = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (zu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Fo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Io = new r.Component().refs;
        function Vo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = jo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), Do(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = jo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Mo(e, o, a)) && (rs(t, e, a, r), Do(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = jo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mo(e, a, r)) && (rs(t, e, r, n), Do(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Ca,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = To(o))
              : ((a = Aa(t) ? La : Ra.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Ca)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Io), Ao(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = To(o))
            : ((o = Aa(t) ? La : Ra.current), (a.context = Oa(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Vo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
              Uo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Io && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = js(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Us(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === _
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === A &&
                    Go(o) === t.type))
              ? (((r = a(t, n.props)).ref = qo(e, t, n)), (r.return = e), r)
              : (((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ds(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Us("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Fs(t, e.mode, n)).return = e), t;
                case A:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || M(t))
                return ((t = Ds(t, e.mode, n, null)).return = e), t;
              Qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case A:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || M(n)) return null !== a ? null : f(e, t, n, r, null);
              Qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case A:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || M(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Qo(t, r);
            }
            return null;
          }
          function v(a, o, l, u) {
            for (
              var s = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, l[v], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === l.length) return n(a, f), ao && Xa(a, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], u)) &&
                  ((o = i(f, o, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, v), s;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              s
            );
          }
          function m(a, l, u, s) {
            var c = M(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), v = l, m = (l = 0), y = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, s);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = i(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Xa(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(a, g.value, s)) &&
                  ((l = i(g, l, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Xa(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = u.next())
              null !== (g = h(v, a, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              c
            );
          }
          return function e(r, o, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === _ &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === A &&
                            Go(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === _
                      ? (((o = Ds(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = o))
                      : (((u = Ms(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = qo(r, o, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Fs(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case A:
                  return e(r, o, (c = i._init)(i._payload), u);
              }
              if (te(i)) return v(r, o, i, u);
              if (M(i)) return m(r, o, i, u);
              Qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Us(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Jo = Yo(!0),
          Xo = Yo(!1),
          Zo = {},
          ei = Ea(Zo),
          ti = Ea(Zo),
          ni = Ea(Zo);
        function ri(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ta(ni, t), Ta(ti, e), Ta(ei, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xa(ei), Ta(ei, t);
        }
        function oi() {
          xa(ei), xa(ti), xa(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Ta(ti, e), Ta(ei, n));
        }
        function li(e) {
          ti.current === e && (xa(ei), xa(ti));
        }
        var ui = Ea(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          vi = null,
          mi = null,
          yi = null,
          gi = !1,
          bi = !1,
          wi = 0,
          Si = 0;
        function ki() {
          throw Error(o(321));
        }
        function _i(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = sl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function xi() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Ti() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ci() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Ri(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ni(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (vi.lanes |= f),
                  (zu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (zu |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Li(e) {
          var t = Ci(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Oi() {}
        function Ai(e, t) {
          var n = vi,
            r = Ci(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wl = !0)),
            (r = r.queue),
            Hi(Mi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fi(9, ji.bind(null, n, r, a, t), void 0, null),
              null === Lu)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Pi(n, t, a);
          }
          return a;
        }
        function Pi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function ji(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Di(t) && zi(e);
        }
        function Mi(e, t, n) {
          return n(function () {
            Di(t) && zi(e);
          });
        }
        function Di(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zi(e) {
          var t = Lo(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Ui(e) {
          var t = Ti();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ri,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ii() {
          return Ci().memoizedState;
        }
        function Vi(e, t, n, r) {
          var a = Ti();
          (vi.flags |= e),
            (a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bi(e, t, n, r) {
          var a = Ci();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && _i(r, i.deps)))
              return void (a.memoizedState = Fi(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Fi(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return Vi(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return Bi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Bi(4, 2, e, t);
        }
        function Ki(e, t) {
          return Bi(4, 4, e, t);
        }
        function qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bi(4, 4, qi.bind(null, t, e), n)
          );
        }
        function Gi() {}
        function Yi(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ji(e, t) {
          var n = Ci();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _i(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vi.lanes |= n), (zu |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ci().memoizedState;
        }
        function tl(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = No(e, t, n, r))) {
            rs(n, e, r, ts()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Ro(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = No(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function al(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: To,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: To,
            useCallback: function (e, t) {
              return (Ti().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: To,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vi(4194308, 4, qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ti();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ti();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ti().memoizedState = e);
            },
            useState: Ui,
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return (Ti().memoizedState = e);
            },
            useTransition: function () {
              var e = Ui(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ti().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = Ti();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Lu)) throw Error(o(349));
                0 !== (30 & hi) || Pi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Fi(9, ji.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ti(),
                t = Lu.identifierPrefix;
              if (ao) {
                var n = Ja;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = Si++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: To,
            useCallback: Yi,
            useContext: To,
            useEffect: Hi,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Ji,
            useReducer: Ni,
            useRef: Ii,
            useState: function () {
              return Ni(Ri);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              return Xi(Ci(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ni(Ri)[0], Ci().memoizedState];
            },
            useMutableSource: Oi,
            useSyncExternalStore: Ai,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: To,
            useCallback: Yi,
            useContext: To,
            useEffect: Hi,
            useImperativeHandle: Qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Ji,
            useReducer: Li,
            useRef: Ii,
            useState: function () {
              return Li(Ri);
            },
            useDebugValue: Gi,
            useDeferredValue: function (e) {
              var t = Ci();
              return null === mi
                ? (t.memoizedState = e)
                : Xi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Li(Ri)[0], Ci().memoizedState];
            },
            useMutableSource: Oi,
            useSyncExternalStore: Ai,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = jo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (Ku = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = jo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === qu ? (qu = new Set([this])) : qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ts.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = jo(-1, 1)).tag = 2), Mo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Jo(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            xo(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = xi()),
            null === e || wl
              ? (ao && n && eo(t), (t.flags |= 1), Sl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function _l(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ps(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = js(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Cl(e, t, n, r, a);
        }
        function xl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ta(ju, Pu),
                (Pu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ta(ju, Pu),
                  (Pu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ta(ju, Pu),
                (Pu |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ta(ju, Pu),
              (Pu |= r);
          return Sl(e, t, a, n), t.child;
        }
        function Tl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, a) {
          var o = Aa(n) ? La : Ra.current;
          return (
            (o = Oa(t, o)),
            xo(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = xi()),
            null === e || wl
              ? (ao && r && eo(t), (t.flags |= 1), Sl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Rl(e, t, n, r, a) {
          if (Aa(n)) {
            var o = !0;
            Da(t);
          } else o = !1;
          if ((xo(t, a), null === t.stateNode))
            Hl(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = To(s))
              : (s = Oa(t, (s = Aa(n) ? La : Ra.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && $o(t, i, r, s)),
              (Oo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Uo(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Na.current || Oo
                ? ("function" === typeof c &&
                    (Vo(t, n, c, r), (u = t.memoizedState)),
                  (l = Oo || Wo(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Po(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = To(u))
                : (u = Oa(t, (u = Aa(n) ? La : Ra.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && $o(t, i, r, u)),
              (Oo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Uo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Na.current || Oo
              ? ("function" === typeof p &&
                  (Vo(t, n, p, r), (h = t.memoizedState)),
                (s = Oo || Wo(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nl(e, t, n, r, o, a);
        }
        function Nl(e, t, n, r, a, o) {
          Tl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && za(t, n, !1), $l(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Jo(t, e.child, null, o)),
                (t.child = Jo(t, null, l, o)))
              : Sl(e, t, l, o),
            (t.memoizedState = r.state),
            a && za(t, n, !0),
            t.child
          );
        }
        function Ll(e) {
          var t = e.stateNode;
          t.pendingContext
            ? ja(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && ja(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Ol(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var Al,
          Pl,
          jl,
          Ml,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ul(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ta(ui, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = zs(u, a, 0, null)),
                      (e = Ds(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = zl(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Fl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Il(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = zs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ds(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jo(t, e.child, null, l),
                    (t.child.memoizedState = zl(l)),
                    (t.memoizedState = Dl),
                    i);
              if (0 === (1 & t.mode)) return Il(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Il(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), wl || u)) {
                if (null !== (r = Lu)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Lo(e, a), rs(r, e, a, -1));
                }
                return ms(), Il(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Rs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((qa[Qa++] = Ya),
                    (qa[Qa++] = Ja),
                    (qa[Qa++] = Ga),
                    (Ya = e.id),
                    (Ja = e.overflow),
                    (Ga = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = js(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = js(r, l))
                : ((l = Ds(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? zl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = js(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = zs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Il(e, t, n, r) {
          return (
            null !== r && vo(r),
            Jo(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vl(e, n, t);
                else if (19 === e.tag) Vl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ta(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, o);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = js((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = js(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ql(t), null;
            case 1:
            case 17:
              return Aa(t.type) && Pa(), ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                xa(Na),
                xa(Ra),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ls(oo), (oo = null)))),
                Pl(e, t),
                ql(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                jl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return ql(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Fr(Mr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Fr("invalid", r);
                  }
                  for (var u in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      K(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Al(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Fr(Mr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = G(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = z({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (i in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Fr("scroll", e)
                              : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        K(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        K(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ql(t), null;
            case 6:
              if (e && null != t.stateNode) Ml(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return ql(t), null;
            case 13:
              if (
                (xa(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  ql(t), (i = !1);
                } else null !== oo && (ls(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current)
                        ? 0 === Mu && (Mu = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  ql(t),
                  null);
            case 4:
              return (
                oi(),
                Pl(e, t),
                null === e && Br(t.stateNode.containerInfo),
                ql(t),
                null
              );
            case 10:
              return _o(t.type._context), ql(t), null;
            case 19:
              if ((xa(ui), null === (i = t.memoizedState))) return ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== Mu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ta(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Je() > Wu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Kl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return ql(t), null;
                  } else
                    2 * Je() - i.renderingStartTime > Wu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Kl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = ui.current),
                  Ta(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (ql(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Pu) &&
                    (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Aa(t.type) && Pa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                xa(Na),
                xa(Ra),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (xa(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(ui), null;
            case 4:
              return oi(), null;
            case 10:
              return _o(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Al = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Pl = function () {}),
          (jl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (i = []);
                  break;
                case "select":
                  (a = z({}, a, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Fr("scroll", e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ml = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Jl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xs(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            xs(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Jl || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Jl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Jl &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  xs(n, t, l);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Jl = (r = Jl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Jl = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Ns.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(i, l, a), (fu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                xs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (m) {
                  xs(e, e.return, m);
                }
                try {
                  ru(5, e, e.return);
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      J(a, i),
                      be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (m) {
                    xs(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  xs(e, e.return, m);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bu = Je())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Jl = (c = Jl) || f), mu(t, e), (Jl = c))
                  : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              xs(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        xs(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        xs(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              xs(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Zl = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Jl;
                l = Yl;
                var s = Jl;
                if (((Yl = i), (Jl = u) && !s))
                  for (Zl = a; null !== Zl; )
                    (u = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? _u(a)
                        : null !== u
                        ? ((u.return = i), (Zl = u))
                        : _u(a);
                for (; null !== o; ) (Zl = o), wu(o, t, n), (o = o.sibling);
                (Zl = a), (Yl = l), (Jl = s);
              }
              Su(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Zl = o))
                : Su(e);
          }
        }
        function Su(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Jl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fo(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Jl || (512 & t.flags && ou(t));
              } catch (p) {
                xs(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function _u(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    xs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xs(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    xs(t, o, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    xs(t, i, u);
                  }
              }
            } catch (u) {
              xs(t, t.return, u);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Eu,
          xu = Math.ceil,
          Tu = w.ReactCurrentDispatcher,
          Cu = w.ReactCurrentOwner,
          Ru = w.ReactCurrentBatchConfig,
          Nu = 0,
          Lu = null,
          Ou = null,
          Au = 0,
          Pu = 0,
          ju = Ea(0),
          Mu = 0,
          Du = null,
          zu = 0,
          Uu = 0,
          Fu = 0,
          Iu = null,
          Vu = null,
          Bu = 0,
          Wu = 1 / 0,
          Hu = null,
          $u = !1,
          Ku = null,
          qu = null,
          Qu = !1,
          Gu = null,
          Yu = 0,
          Ju = 0,
          Xu = null,
          Zu = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Nu) ? Je() : -1 !== Zu ? Zu : (Zu = Je());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nu) && 0 !== Au
            ? Au & -Au
            : null !== mo.transition
            ? (0 === es && (es = vt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Ju) throw ((Ju = 0), (Xu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Nu) && e === Lu) ||
              (e === Lu && (0 === (2 & Nu) && (Uu |= n), 4 === Mu && us(e, Au)),
              as(e, r),
              1 === n &&
                0 === Nu &&
                0 === (1 & t.mode) &&
                ((Wu = Je() + 500), Fa && Ba()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Lu ? Au : 0);
          if (0 === r)
            null !== n && Qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Va(e);
                  })(ss.bind(null, e))
                : Va(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Nu) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ls(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Zu = -1), (es = 0), 0 !== (6 & Nu))) throw Error(o(327));
          var n = e.callbackNode;
          if (_s() && e.callbackNode !== n) return null;
          var r = dt(e, e === Lu ? Au : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Nu;
            Nu |= 2;
            var i = vs();
            for (
              (Lu === e && Au === t) ||
              ((Hu = null), (Wu = Je() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            ko(),
              (Tu.current = i),
              (Nu = a),
              null !== Ou ? (t = 0) : ((Lu = null), (Au = 0), (t = Mu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Du), ps(e, 0), us(e, r), as(e, Je()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = Du), ps(e, 0), us(e, r), as(e, Je()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ks(e, Vu, Hu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Bu + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ks.bind(null, e, Vu, Hu), t);
                    break;
                  }
                  ks(e, Vu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ks.bind(null, e, Vu, Hu), r);
                    break;
                  }
                  ks(e, Vu, Hu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Je()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Iu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Vu), (Vu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
        }
        function us(e, t) {
          for (
            t &= ~Fu,
              t &= ~Uu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Nu)) throw Error(o(327));
          _s();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Je()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Du), ps(e, 0), us(e, t), as(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ks(e, Vu, Hu),
            as(e, Je()),
            null
          );
        }
        function cs(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && ((Wu = Je() + 500), Fa && Ba());
          }
        }
        function fs(e) {
          null !== Gu && 0 === Gu.tag && 0 === (6 & Nu) && _s();
          var t = Nu;
          Nu |= 1;
          var n = Ru.transition,
            r = bt;
          try {
            if (((Ru.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ru.transition = n), 0 === (6 & (Nu = t)) && Ba();
          }
        }
        function ds() {
          (Pu = ju.current), xa(ju);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ou))
            for (n = Ou.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Pa();
                  break;
                case 3:
                  oi(), xa(Na), xa(Ra), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  xa(ui);
                  break;
                case 10:
                  _o(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Lu = e),
            (Ou = e = js(e.current, null)),
            (Au = Pu = t),
            (Mu = 0),
            (Du = null),
            (Fu = Uu = zu = 0),
            (Vu = Iu = null),
            null !== Co)
          ) {
            for (t = 0; t < Co.length; t++)
              if (null !== (r = (n = Co[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Co = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Ou;
            try {
              if ((ko(), (di.current = il), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (wi = 0),
                (Cu.current = null),
                null === n || null === n.return)
              ) {
                (Mu = 1), (Du = t), (Ou = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Au),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && ml(i, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      vo(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Mu && (Mu = 2),
                  null === Iu ? (Iu = [i]) : Iu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        zo(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === qu || !qu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          zo(i, vl(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Ss(n);
            } catch (w) {
              (t = w), Ou === n && null !== n && (Ou = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = Tu.current;
          return (Tu.current = il), null === e ? il : e;
        }
        function ms() {
          (0 !== Mu && 3 !== Mu && 2 !== Mu) || (Mu = 4),
            null === Lu ||
              (0 === (268435455 & zu) && 0 === (268435455 & Uu)) ||
              us(Lu, Au);
        }
        function ys(e, t) {
          var n = Nu;
          Nu |= 2;
          var r = vs();
          for ((Lu === e && Au === t) || ((Hu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((ko(), (Nu = n), (Tu.current = r), null !== Ou))
            throw Error(o(261));
          return (Lu = null), (Au = 0), Mu;
        }
        function gs() {
          for (; null !== Ou; ) ws(Ou);
        }
        function bs() {
          for (; null !== Ou && !Ge(); ) ws(Ou);
        }
        function ws(e) {
          var t = Eu(e.alternate, e, Pu);
          (e.memoizedProps = e.pendingProps),
            null === t ? Ss(e) : (Ou = t),
            (Cu.current = null);
        }
        function Ss(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, Pu))) return void (Ou = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Ou = n);
              if (null === e) return (Mu = 6), void (Ou = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ou = t);
            Ou = t = e;
          } while (null !== t);
          0 === Mu && (Mu = 5);
        }
        function ks(e, t, n) {
          var r = bt,
            a = Ru.transition;
          try {
            (Ru.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  _s();
                } while (null !== Gu);
                if (0 !== (6 & Nu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Lu && ((Ou = Lu = null), (Au = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qu ||
                    ((Qu = !0),
                    Ls(tt, function () {
                      return _s(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ru.transition), (Ru.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Nu;
                  (Nu |= 4),
                    (Cu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (S) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = l),
                                    p === i && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (S) {
                              xs(t, t.return, S);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (v = nu), (nu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (Nu = u),
                    (bt = l),
                    (Ru.transition = i);
                } else e.current = n;
                if (
                  (Qu && ((Qu = !1), (Gu = e), (Yu = a)),
                  (i = e.pendingLanes),
                  0 === i && (qu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($u) throw (($u = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && _s(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xu
                      ? Ju++
                      : ((Ju = 0), (Xu = e))
                    : (Ju = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Ru.transition = a), (bt = r);
          }
          return null;
        }
        function _s() {
          if (null !== Gu) {
            var e = wt(Yu),
              t = Ru.transition,
              n = bt;
            try {
              if (((Ru.transition = null), (bt = 16 > e ? 16 : e), null === Gu))
                var r = !1;
              else {
                if (((e = Gu), (Gu = null), (Yu = 0), 0 !== (6 & Nu)))
                  throw Error(o(331));
                var a = Nu;
                for (Nu |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Zl = g);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var w = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Zl = w);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (u = Zl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (k) {
                          xs(u, u.return, k);
                        }
                      if (u === l) {
                        Zl = null;
                        break e;
                      }
                      var S = u.sibling;
                      if (null !== S) {
                        (S.return = u.return), (Zl = S);
                        break e;
                      }
                      Zl = u.return;
                    }
                }
                if (
                  ((Nu = a),
                  Ba(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ru.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Mo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
        }
        function xs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qu || !qu.has(r)))
                ) {
                  (t = Mo(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ts(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Lu === e &&
              (Au & n) === n &&
              (4 === Mu ||
              (3 === Mu && (130023424 & Au) === Au && 500 > Je() - Bu)
                ? ps(e, 0)
                : (Fu |= n)),
            as(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Lo(e, t)) && (yt(e, t, n), as(e, n));
        }
        function Rs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function Ns(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function Ls(e, t) {
          return qe(e, t);
        }
        function Os(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function As(e, t, n, r) {
          return new Os(e, t, n, r);
        }
        function Ps(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function js(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = As(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ms(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ps(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case _:
                return Ds(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = As(12, n, t, 2 | a)).elementType = x), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = As(13, n, t, a)).elementType = N), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = As(19, n, t, a)).elementType = L), (e.lanes = i), e
                );
              case P:
                return zs(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case A:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = As(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ds(e, t, n, r) {
          return ((e = As(7, e, r, t)).lanes = n), e;
        }
        function zs(e, t, n, r) {
          return (
            ((e = As(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Us(e, t, n) {
          return ((e = As(6, e, null, t)).lanes = n), e;
        }
        function Fs(e, t, n) {
          return (
            ((t = As(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Is(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new Is(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = As(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ao(o),
            e
          );
        }
        function Bs(e) {
          if (!e) return Ca;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Aa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Aa(n)) return Ma(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Vs(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null)),
            (n = e.current),
            ((o = jo((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = jo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mo(a, t, i)) && (rs(e, a, i, o), Do(e, a, i)),
            i
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ll(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Aa(t.type) && Da(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ta(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ta(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ul(e, t, n)
                            : (Ta(ui, 1 & ui.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Ta(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ta(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = Oa(t, Ra.current);
              xo(t, n), (a = Ei(null, t, r, e, a, n));
              var i = xi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Aa(r) ? ((i = !0), Da(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ao(t),
                    (a.updater = Bo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Nl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    Sl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ps(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Rl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = _l(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Rl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Ll(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Po(e, t),
                  Uo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ol(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ol(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Tl(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return Ul(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jo(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ta(go, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Na.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = jo(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Eo(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                Sl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                xo(t, n),
                (r = r((a = To(a)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                _l(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Hl(e, t),
                (t.tag = 1),
                Aa(r) ? ((e = !0), Da(t)) : (e = !1),
                xo(t, n),
                Ho(t, r, a),
                Ko(t, r, a, n),
                Nl(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return xl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $s(i);
                l.call(e);
              };
            }
            Hs(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $s(i);
                    o.call(e);
                  };
                }
                var i = Ws(t, r, e, 0, null, !1, 0, "", Zs);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $s(u);
                  l.call(e);
                };
              }
              var u = Vs(e, 0, !1, null, 0, !1, 0, "", Zs);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return $s(i);
        }
        (Ys.prototype.render = Gs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Gs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Pt.length && 0 !== t && t < Pt[n].priority;
                n++
              );
              Pt.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    as(t, Je()),
                    0 === (6 & Nu) && ((Wu = Je() + 500), Ba()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Lo(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  qs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Lo(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              qs(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Lo(e, t);
              if (null !== n) rs(n, e, t, ts());
              qs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Sa(r);
                      if (!a) throw Error(o(90));
                      q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = cs),
          (Ne = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Sa, Te, Ce, cs],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Js(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Js(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Gs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Js(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
        var S = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          _ = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: _.current,
          };
        }
        function T(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === o ? "." + R(u, 0) : o),
              S(i)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  N(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (T(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), S(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + R((l = e[s]), s);
              u += N(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += N((l = l.value), t, a, (c = o + R(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var A = { current: null },
          P = { transition: null },
          j = {
            ReactCurrentDispatcher: A,
            ReactCurrentBatchConfig: P,
            ReactCurrentOwner: _,
          };
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!T(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = _.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = T),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = P.transition;
            P.transition = {};
            try {
              e();
            } finally {
              P.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return A.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return A.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return A.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return A.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return A.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return A.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return A.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return A.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return A.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return A.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return A.current.useRef(e);
          }),
          (t.useState = function (e) {
            return A.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return A.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return A.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function S(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(s)) (v = !0), P(k);
            else {
              var t = r(c);
              null !== t && j(S, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), g(T), (T = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && j(S, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          E = !1,
          x = null,
          T = -1,
          C = 5,
          R = -1;
        function N() {
          return !(t.unstable_now() - R < C);
        }
        function L() {
          if (null !== x) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? _() : ((E = !1), (x = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          _ = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            A = O.port2;
          (O.port1.onmessage = L),
            (_ = function () {
              A.postMessage(null);
            });
        } else
          _ = function () {
            y(L, 0);
          };
        function P(e) {
          (x = e), E || ((E = !0), _());
        }
        function j(e, n) {
          T = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), P(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (g(T), (T = -1)) : (m = !0), j(S, o - i)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), P(k))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var o = Object.create(null);
      n.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & a && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach(function (e) {
          i[e] = function () {
            return r[e];
          };
        });
      return (
        (i.default = function () {
          return r;
        }),
        n.d(o, i),
        o
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function u(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          i(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function f(e) {
        var t = (function (e, t) {
          if ("object" !== c(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === c(t) ? t : String(t);
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, f(r.key), r);
        }
      }
      function p(e, t, n) {
        return (
          t && d(e.prototype, t),
          n && d(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          h(e, t)
        );
      }
      function v(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && h(e, t);
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function y() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function g(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function b(e) {
        var t = y();
        return function () {
          var n,
            r = m(e);
          if (t) {
            var a = m(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === c(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return g(e);
          })(this, n);
        };
      }
      function w(e) {
        if (Array.isArray(e)) return e;
      }
      function S() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function k(e, t) {
        return (
          w(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          l(e, t) ||
          S()
        );
      }
      function _(e, t, n) {
        return (
          (_ = y()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && h(a, n.prototype), a;
              }),
          _.apply(null, arguments)
        );
      }
      function E(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (E = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return _(e, arguments, m(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              h(r, e)
            );
          }),
          E(e)
        );
      }
      function x(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = l(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          T.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var C,
        R = "popstate";
      function N(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function L(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function O(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function A(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          T(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? j(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function P(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function j(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function M(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          u = o.v5Compat,
          s = void 0 !== u && u,
          c = l.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: y.location, delta: n });
        }
        function m(e) {
          var t =
              "null" !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = "string" === typeof e ? e : P(e);
          return (
            N(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(T({}, c.state, { idx: p }), ""));
        var y = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(R, v),
              (d = e),
              function () {
                l.removeEventListener(R, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = A(y.location, t, n);
            r && r(a, t);
            var o = O(a, (p = h() + 1)),
              i = y.createHref(a);
            try {
              c.pushState(o, "", i);
            } catch (u) {
              l.location.assign(i);
            }
            s && d && d({ action: f, location: y.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = A(y.location, t, n);
            r && r(a, t);
            var o = O(a, (p = h())),
              i = y.createHref(a);
            c.replaceState(o, "", i),
              s && d && d({ action: f, location: y.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return y;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(C || (C = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function D(e, t, n) {
        void 0 === n && (n = "/");
        var r = Y(("string" === typeof t ? j(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = z(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = q(a[i], G(r));
        return o;
      }
      function z(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (N(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var l = ee([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (N(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            z(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: K(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = x(U(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var i = r.value;
                  a(e, t, i);
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function U(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = w((n = t)) || i(n) || l(n) || S(),
          a = r[0],
          o = r.slice(1),
          s = a.endsWith("?"),
          c = a.replace(/\?$/, "");
        if (0 === o.length) return s ? [c, ""] : [c];
        var f = U(o.join("/")),
          d = [];
        return (
          d.push.apply(
            d,
            u(
              f.map(function (e) {
                return "" === e ? c : [c, e].join("/");
              })
            )
          ),
          s && d.push.apply(d, u(f)),
          d.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var F = /^:\w+$/,
        I = 3,
        V = 2,
        B = 1,
        W = 10,
        H = -2,
        $ = function (e) {
          return "*" === e;
        };
      function K(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some($) && (r += H),
          t && (r += V),
          n
            .filter(function (e) {
              return !$(e);
            })
            .reduce(function (e, t) {
              return e + (F.test(t) ? I : "" === t ? B : W);
            }, r)
        );
      }
      function q(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = Q(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: ee([a, c.pathname]),
            pathnameBase: te(ee([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = ee([a, c.pathnameBase]));
        }
        return o;
      }
      function Q(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            L(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = k(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var l = i[0],
          u = l.replace(/(.)\/+$/, "$1"),
          s = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = s[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    L(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(s[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: u,
          pattern: e,
        };
      }
      function G(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            L(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function Y(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function J(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function X(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function Z(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = j(e))
            : (N(
                !(a = T({}, e)).pathname || !a.pathname.includes("?"),
                J("?", "pathname", "search", a)
              ),
              N(
                !a.pathname || !a.pathname.includes("#"),
                J("#", "pathname", "hash", a)
              ),
              N(
                !a.search || !a.search.includes("#"),
                J("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          o = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? j(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              l = void 0 === i ? "" : i,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: ne(o), hash: re(l) };
          })(a, o),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var ee = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        te = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ne = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        re = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ae = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(E(Error));
      function oe(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var ie = ["post", "put", "patch", "delete"],
        le = (new Set(ie), ["get"].concat(ie));
      new Set(le),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      var ue =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        se = t.useState,
        ce = t.useEffect,
        fe = t.useLayoutEffect,
        de = t.useDebugValue;
      function pe(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !ue(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var he = t.createContext(null);
      var ve = t.createContext(null);
      var me = t.createContext(null);
      var ye = t.createContext(null);
      var ge = t.createContext(null);
      var be = t.createContext({ outlet: null, matches: [] });
      var we = t.createContext(null);
      function Se() {
        return (
          (Se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Se.apply(this, arguments)
        );
      }
      function ke() {
        return null != t.useContext(ge);
      }
      function _e() {
        return ke() || N(!1), t.useContext(ge).location;
      }
      function Ee() {
        ke() || N(!1);
        var e = t.useContext(ye),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(be).matches,
          o = _e().pathname,
          i = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = t.useRef(!1);
        return (
          t.useEffect(function () {
            l.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ("number" !== typeof e) {
                  var a = Z(e, JSON.parse(i), o, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : ee([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, i, o]
          )
        );
      }
      function xe(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(be).matches,
          o = _e().pathname,
          i = JSON.stringify(
            X(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return Z(e, JSON.parse(i), o, "path" === r);
          },
          [e, i, o, r]
        );
      }
      function Te() {
        var e = (function () {
            var e,
              n = t.useContext(we),
              r = Ae(Re.UseRouteError),
              a = Pe(Re.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = oe(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      var Ce,
        Re,
        Ne = (function (e) {
          v(r, e);
          var n = b(r);
          function r(e) {
            var t;
            return (
              s(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            p(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          be.Provider,
                          { value: this.props.routeContext },
                          t.createElement(we.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Le(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(he);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(be.Provider, { value: n }, a)
        );
      }
      function Oe(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var i = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          i >= 0 || N(!1), (a = a.slice(0, Math.min(a.length, i + 1)));
        }
        return a.reduceRight(function (e, i, l) {
          var u = i.route.id ? (null == o ? void 0 : o[i.route.id]) : null,
            s = null;
          r &&
            (s = i.route.ErrorBoundary
              ? t.createElement(i.route.ErrorBoundary, null)
              : i.route.errorElement
              ? i.route.errorElement
              : t.createElement(Te, null));
          var c = n.concat(a.slice(0, l + 1)),
            f = function () {
              var n = e;
              return (
                u
                  ? (n = s)
                  : i.route.Component
                  ? (n = t.createElement(i.route.Component, null))
                  : i.route.element && (n = i.route.element),
                t.createElement(Le, {
                  match: i,
                  routeContext: { outlet: e, matches: c },
                  children: n,
                })
              );
            };
          return r && (i.route.ErrorBoundary || i.route.errorElement || 0 === l)
            ? t.createElement(Ne, {
                location: r.location,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Ae(e) {
        var n = t.useContext(ve);
        return n || N(!1), n;
      }
      function Pe(e) {
        var n = (function (e) {
            var n = t.useContext(be);
            return n || N(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || N(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Ce || (Ce = {})),
        (function (e) {
          (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Re || (Re = {}));
      var je;
      function Me(e) {
        N(!1);
      }
      function De(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        ke() && N(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof l && (l = j(l));
        var v = l,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          w = v.hash,
          S = void 0 === w ? "" : w,
          k = v.state,
          _ = void 0 === k ? null : k,
          E = v.key,
          x = void 0 === E ? "default" : E,
          T = t.useMemo(
            function () {
              var e = Y(y, p);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: b,
                      hash: S,
                      state: _,
                      key: x,
                    },
                    navigationType: s,
                  };
            },
            [p, y, b, S, _, x, s]
          );
        return null == T
          ? null
          : t.createElement(
              ye.Provider,
              { value: h },
              t.createElement(ge.Provider, { children: i, value: T })
            );
      }
      function ze(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(he);
        return (function (n, r) {
          ke() || N(!1);
          var a,
            o = t.useContext(ye).navigator,
            i = t.useContext(ve),
            l = t.useContext(be).matches,
            u = l[l.length - 1],
            s = u ? u.params : {},
            c = (u && u.pathname, u ? u.pathnameBase : "/"),
            f = (u && u.route, _e());
          if (r) {
            var d,
              p = "string" === typeof r ? j(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              N(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            v = D(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            m = Oe(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: ee([
                      c,
                      o.encodeLocation
                        ? o.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : ee([
                            c,
                            o.encodeLocation
                              ? o.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              l,
              i || void 0
            );
          return r && m
            ? t.createElement(
                ge.Provider,
                {
                  value: {
                    location: Se(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(o && !r ? o.router.routes : Fe(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(je || (je = {}));
      var Ue = new Promise(function () {});
      t.Component;
      function Fe(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e)) {
              var o = [].concat(u(n), [a]);
              if (e.type !== t.Fragment) {
                e.type !== Me && N(!1),
                  e.props.index && e.props.children && N(!1);
                var i = {
                  id: e.props.id || o.join("-"),
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  Component: e.props.Component,
                  index: e.props.index,
                  path: e.props.path,
                  loader: e.props.loader,
                  action: e.props.action,
                  errorElement: e.props.errorElement,
                  ErrorBoundary: e.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != e.props.ErrorBoundary ||
                    null != e.props.errorElement,
                  shouldRevalidate: e.props.shouldRevalidate,
                  handle: e.props.handle,
                  lazy: e.props.lazy,
                };
                e.props.children && (i.children = Fe(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, Fe(e.props.children, o));
            }
          }),
          r
        );
      }
      function Ie() {
        return (
          (Ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ie.apply(this, arguments)
        );
      }
      function Ve(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Be = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        We = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function He(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            M(
              function (e, t) {
                var n = e.location;
                return A(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : P(t);
              },
              null,
              n
            )));
        var l = i.current,
          u = k(t.useState({ action: l.action, location: l.location }), 2),
          s = u[0],
          c = u[1];
        return (
          t.useLayoutEffect(
            function () {
              return l.listen(c);
            },
            [l]
          ),
          t.createElement(De, {
            basename: r,
            children: a,
            location: s.location,
            navigationType: s.action,
            navigator: l,
          })
        );
      }
      var $e =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Ke = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        qe = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            o = e.relative,
            i = e.reloadDocument,
            l = e.replace,
            u = e.state,
            s = e.target,
            c = e.to,
            f = e.preventScrollReset,
            d = Ve(e, Be),
            p = t.useContext(ye).basename,
            h = !1;
          if ("string" === typeof c && Ke.test(c) && ((r = c), $e)) {
            var v = new URL(window.location.href),
              m = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
              y = Y(m.pathname, p);
            m.origin === v.origin && null != y
              ? (c = y + m.search + m.hash)
              : (h = !0);
          }
          var g = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              ke() || N(!1);
              var a = t.useContext(ye),
                o = a.basename,
                i = a.navigator,
                l = xe(e, { relative: r }),
                u = l.hash,
                s = l.pathname,
                c = l.search,
                f = s;
              return (
                "/" !== o && (f = "/" === s ? o : ee([o, s])),
                i.createHref({ pathname: f, search: c, hash: u })
              );
            })(c, { relative: o }),
            b = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                o = r.replace,
                i = r.state,
                l = r.preventScrollReset,
                u = r.relative,
                s = Ee(),
                c = _e(),
                f = xe(e, { relative: u });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== o ? o : P(c) === P(f);
                    s(e, {
                      replace: n,
                      state: i,
                      preventScrollReset: l,
                      relative: u,
                    });
                  }
                },
                [c, s, f, o, i, a, e, l, u]
              );
            })(c, {
              replace: l,
              state: u,
              target: s,
              preventScrollReset: f,
              relative: o,
            });
          return t.createElement(
            "a",
            Ie({}, d, {
              href: r || g,
              onClick:
                h || i
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: s,
            })
          );
        });
      var Qe = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          o = e.caseSensitive,
          i = void 0 !== o && o,
          l = e.className,
          u = void 0 === l ? "" : l,
          s = e.end,
          c = void 0 !== s && s,
          f = e.style,
          d = e.to,
          p = e.children,
          h = Ve(e, We),
          v = xe(d, { relative: h.relative }),
          m = _e(),
          y = t.useContext(ve),
          g = t.useContext(ye).navigator,
          b = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname,
          w = m.pathname,
          S =
            y && y.navigation && y.navigation.location
              ? y.navigation.location.pathname
              : null;
        i ||
          ((w = w.toLowerCase()),
          (S = S ? S.toLowerCase() : null),
          (b = b.toLowerCase()));
        var k,
          _ = w === b || (!c && w.startsWith(b) && "/" === w.charAt(b.length)),
          E =
            null != S &&
            (S === b || (!c && S.startsWith(b) && "/" === S.charAt(b.length))),
          x = _ ? a : void 0;
        k =
          "function" === typeof u
            ? u({ isActive: _, isPending: E })
            : [u, _ ? "active" : null, E ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var T = "function" === typeof f ? f({ isActive: _, isPending: E }) : f;
        return t.createElement(
          qe,
          Ie({}, h, {
            "aria-current": x,
            className: k,
            ref: n,
            style: T,
            to: d,
          }),
          "function" === typeof p ? p({ isActive: _, isPending: E }) : p
        );
      });
      var Ge, Ye;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Ge || (Ge = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ye || (Ye = {}));
      var Je = n(184);
      function Xe() {
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsx)("div", {
            className:
              "w-home2 2xl:w-home h-[80px] bg-white bg-opacity-90 top-0 fixed",
            children: (0, Je.jsxs)("div", {
              className: "flex gap-5",
              children: [
                (0, Je.jsx)(Qe, {
                  to: "/",
                  className:
                    "ml-[72px] mt-[25.5px] text-[24px] text-main font-bold",
                  children: "\ub3d9\uc544\ub9ac \ub85c\uace0",
                }),
                (0, Je.jsxs)("div", {
                  className:
                    "space-x-[80px] text-sm ml-[48px] mt-[31px] text-gray2",
                  children: [
                    (0, Je.jsx)(Qe, {
                      to: "/club",
                      className:
                        "focus:font-black focus:opacity-100 focus:text-darkgray",
                      children: "\ub3d9\uc544\ub9ac",
                    }),
                    (0, Je.jsx)(Qe, {
                      to: "/promotion",
                      className: "focus:font-black focus:text-darkgray",
                      children: "\ud64d\ubcf4\uac8c\uc2dc\ud310",
                    }),
                    (0, Je.jsx)(Qe, {
                      to: "/notice",
                      className: "focus:font-black focus:text-darkgray",
                      children: "\uacf5\uc9c0\uc0ac\ud56d",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function Ze(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var et,
        tt = Object.prototype.toString,
        nt = Object.getPrototypeOf,
        rt =
          ((et = Object.create(null)),
          function (e) {
            var t = tt.call(e);
            return et[t] || (et[t] = t.slice(8, -1).toLowerCase());
          }),
        at = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return rt(t) === e;
            }
          );
        },
        ot = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        it = Array.isArray,
        lt = ot("undefined");
      var ut = at("ArrayBuffer");
      var st = ot("string"),
        ct = ot("function"),
        ft = ot("number"),
        dt = function (e) {
          return null !== e && "object" === typeof e;
        },
        pt = function (e) {
          if ("object" !== rt(e)) return !1;
          var t = nt(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        ht = at("Date"),
        vt = at("File"),
        mt = at("Blob"),
        yt = at("FileList"),
        gt = at("URLSearchParams");
      function bt(e, t) {
        var n,
          r,
          a = (
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ).allOwnKeys,
          o = void 0 !== a && a;
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), it(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            var i,
              l = o ? Object.getOwnPropertyNames(e) : Object.keys(e),
              u = l.length;
            for (n = 0; n < u; n++) (i = l[n]), t.call(null, e[i], i, e);
          }
      }
      function wt(e, t) {
        t = t.toLowerCase();
        for (var n, r = Object.keys(e), a = r.length; a-- > 0; )
          if (t === (n = r[a]).toLowerCase()) return n;
        return null;
      }
      var St =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        kt = function (e) {
          return !lt(e) && e !== St;
        };
      var _t,
        Et =
          ((_t = "undefined" !== typeof Uint8Array && nt(Uint8Array)),
          function (e) {
            return _t && e instanceof _t;
          }),
        xt = at("HTMLFormElement"),
        Tt = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, n) {
            return t.call(e, n);
          };
        })(),
        Ct = at("RegExp"),
        Rt = function (e, t) {
          var n = Object.getOwnPropertyDescriptors(e),
            r = {};
          bt(n, function (n, a) {
            !1 !== t(n, a, e) && (r[a] = n);
          }),
            Object.defineProperties(e, r);
        },
        Nt = "abcdefghijklmnopqrstuvwxyz",
        Lt = "0123456789",
        Ot = { DIGIT: Lt, ALPHA: Nt, ALPHA_DIGIT: Nt + Nt.toUpperCase() + Lt };
      var At = at("AsyncFunction"),
        Pt = {
          isArray: it,
          isArrayBuffer: ut,
          isBuffer: function (e) {
            return (
              null !== e &&
              !lt(e) &&
              null !== e.constructor &&
              !lt(e.constructor) &&
              ct(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (ct(e.append) &&
                  ("formdata" === (t = rt(e)) ||
                    ("object" === t &&
                      ct(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && ut(e.buffer);
          },
          isString: st,
          isNumber: ft,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: dt,
          isPlainObject: pt,
          isUndefined: lt,
          isDate: ht,
          isFile: vt,
          isBlob: mt,
          isRegExp: Ct,
          isFunction: ct,
          isStream: function (e) {
            return dt(e) && ct(e.pipe);
          },
          isURLSearchParams: gt,
          isTypedArray: Et,
          isFileList: yt,
          forEach: bt,
          merge: function e() {
            for (
              var t = ((kt(this) && this) || {}).caseless,
                n = {},
                r = function (r, a) {
                  var o = (t && wt(n, a)) || a;
                  pt(n[o]) && pt(r)
                    ? (n[o] = e(n[o], r))
                    : pt(r)
                    ? (n[o] = e({}, r))
                    : it(r)
                    ? (n[o] = r.slice())
                    : (n[o] = r);
                },
                a = 0,
                o = arguments.length;
              a < o;
              a++
            )
              arguments[a] && bt(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            return (
              bt(
                t,
                function (t, r) {
                  n && ct(t) ? (e[r] = Ze(t, n)) : (e[r] = t);
                },
                {
                  allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {}
                  ).allOwnKeys,
                }
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, n, r) {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: function (e, t, n, r) {
            var a,
              o,
              i,
              l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (o = (a = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== n && nt(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: rt,
          kindOfTest: at,
          endsWith: function (e, t, n) {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: function (e) {
            if (!e) return null;
            if (it(e)) return e;
            var t = e.length;
            if (!ft(t)) return null;
            for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: function (e, t) {
            for (
              var n, r = (e && e[Symbol.iterator]).call(e);
              (n = r.next()) && !n.done;

            ) {
              var a = n.value;
              t.call(e, a[0], a[1]);
            }
          },
          matchAll: function (e, t) {
            for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: xt,
          hasOwnProperty: Tt,
          hasOwnProp: Tt,
          reduceDescriptors: Rt,
          freezeMethods: function (e) {
            Rt(e, function (t, n) {
              if (ct(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              var r = e[n];
              ct(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var n = {},
              r = function (e) {
                e.forEach(function (e) {
                  n[e] = !0;
                });
              };
            return it(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: function (e) {
            return e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
          findKey: wt,
          global: St,
          isContextDefined: kt,
          ALPHABET: Ot,
          generateString: function () {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 16,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Ot.ALPHA_DIGIT,
                n = "",
                r = t.length;
              e--;

            )
              n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              ct(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: function (e) {
            var t = new Array(10);
            return (function e(n, r) {
              if (dt(n)) {
                if (t.indexOf(n) >= 0) return;
                if (!("toJSON" in n)) {
                  t[r] = n;
                  var a = it(n) ? [] : {};
                  return (
                    bt(n, function (t, n) {
                      var o = e(t, r + 1);
                      !lt(o) && (a[n] = o);
                    }),
                    (t[r] = void 0),
                    a
                  );
                }
              }
              return n;
            })(e, 0);
          },
          isAsyncFn: At,
          isThenable: function (e) {
            return e && (dt(e) || ct(e)) && ct(e.then) && ct(e.catch);
          },
        };
      function jt(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      Pt.inherits(jt, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Pt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var Mt = jt.prototype,
        Dt = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach(function (e) {
        Dt[e] = { value: e };
      }),
        Object.defineProperties(jt, Dt),
        Object.defineProperty(Mt, "isAxiosError", { value: !0 }),
        (jt.from = function (e, t, n, r, a, o) {
          var i = Object.create(Mt);
          return (
            Pt.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return "isAxiosError" !== e;
              }
            ),
            jt.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      var zt = jt,
        Ut = null;
      function Ft(e) {
        return Pt.isPlainObject(e) || Pt.isArray(e);
      }
      function It(e) {
        return Pt.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function Vt(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = It(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      var Bt = Pt.toFlatObject(Pt, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var Wt = function (e, t, n) {
        if (!Pt.isObject(e)) throw new TypeError("target must be an object");
        t = t || new (Ut || FormData)();
        var r = (n = Pt.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !Pt.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || s,
          o = n.dots,
          i = n.indexes,
          l =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            Pt.isSpecCompliantForm(t);
        if (!Pt.isFunction(a))
          throw new TypeError("visitor must be a function");
        function u(e) {
          if (null === e) return "";
          if (Pt.isDate(e)) return e.toISOString();
          if (!l && Pt.isBlob(e))
            throw new zt("Blob is not supported. Use a Buffer instead.");
          return Pt.isArrayBuffer(e) || Pt.isTypedArray(e)
            ? l && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function s(e, n, a) {
          var l = e;
          if (e && !a && "object" === typeof e)
            if (Pt.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (Pt.isArray(e) &&
                (function (e) {
                  return Pt.isArray(e) && !e.some(Ft);
                })(e)) ||
              ((Pt.isFileList(e) || Pt.endsWith(n, "[]")) &&
                (l = Pt.toArray(e)))
            )
              return (
                (n = It(n)),
                l.forEach(function (e, r) {
                  !Pt.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? Vt([n], r, o) : null === i ? n : n + "[]",
                      u(e)
                    );
                }),
                !1
              );
          return !!Ft(e) || (t.append(Vt(a, n, o), u(e)), !1);
        }
        var c = [],
          f = Object.assign(Bt, {
            defaultVisitor: s,
            convertValue: u,
            isVisitable: Ft,
          });
        if (!Pt.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!Pt.isUndefined(n)) {
              if (-1 !== c.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              c.push(n),
                Pt.forEach(n, function (n, o) {
                  !0 ===
                    (!(Pt.isUndefined(n) || null === n) &&
                      a.call(t, n, Pt.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function Ht(e) {
        var t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function $t(e, t) {
        (this._pairs = []), e && Wt(e, this, t);
      }
      var Kt = $t.prototype;
      (Kt.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (Kt.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, Ht);
              }
            : Ht;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      var qt = $t;
      function Qt(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Gt(e, t, n) {
        if (!t) return e;
        var r,
          a = (n && n.encode) || Qt,
          o = n && n.serialize;
        if (
          (r = o
            ? o(t, n)
            : Pt.isURLSearchParams(t)
            ? t.toString()
            : new qt(t, n).toString(a))
        ) {
          var i = e.indexOf("#");
          -1 !== i && (e = e.slice(0, i)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
        }
        return e;
      }
      var Yt = (function () {
          function e() {
            s(this, e), (this.handlers = []);
          }
          return (
            p(e, [
              {
                key: "use",
                value: function (e, t, n) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!n && n.synchronous,
                      runWhen: n ? n.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: "eject",
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: "clear",
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  Pt.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        Jt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        Xt = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : qt,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          isStandardBrowserEnv: (function () {
            var e;
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== (e = navigator.product) &&
                  "NativeScript" !== e &&
                  "NS" !== e)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          })(),
          isStandardBrowserWebWorkerEnv:
            "undefined" !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            "function" === typeof self.importScripts,
          protocols: ["http", "https", "file", "blob", "url", "data"],
        };
      var Zt = function (e) {
          function t(e, n, r, a) {
            var o = e[a++],
              i = Number.isFinite(+o),
              l = a >= e.length;
            return (
              (o = !o && Pt.isArray(r) ? r.length : o),
              l
                ? (Pt.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
                : ((r[o] && Pt.isObject(r[o])) || (r[o] = []),
                  t(e, n, r[o], a) &&
                    Pt.isArray(r[o]) &&
                    (r[o] = (function (e) {
                      var t,
                        n,
                        r = {},
                        a = Object.keys(e),
                        o = a.length;
                      for (t = 0; t < o; t++) r[(n = a[t])] = e[n];
                      return r;
                    })(r[o])),
                  !i)
            );
          }
          if (Pt.isFormData(e) && Pt.isFunction(e.entries)) {
            var n = {};
            return (
              Pt.forEachEntry(e, function (e, r) {
                t(
                  (function (e) {
                    return Pt.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                      return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        en = { "Content-Type": void 0 };
      var tn = {
        transitional: Jt,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, t) {
            var n,
              r = t.getContentType() || "",
              a = r.indexOf("application/json") > -1,
              o = Pt.isObject(e);
            if (
              (o && Pt.isHTMLForm(e) && (e = new FormData(e)), Pt.isFormData(e))
            )
              return a && a ? JSON.stringify(Zt(e)) : e;
            if (
              Pt.isArrayBuffer(e) ||
              Pt.isBuffer(e) ||
              Pt.isStream(e) ||
              Pt.isFile(e) ||
              Pt.isBlob(e)
            )
              return e;
            if (Pt.isArrayBufferView(e)) return e.buffer;
            if (Pt.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (o) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return Wt(
                    e,
                    new Xt.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Xt.isNode && Pt.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (n = Pt.isFileList(e)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                var i = this.env && this.env.FormData;
                return Wt(
                  n ? { "files[]": e } : e,
                  i && new i(),
                  this.formSerializer
                );
              }
            }
            return o || a
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (Pt.isString(e))
                    try {
                      return (t || JSON.parse)(e), Pt.trim(e);
                    } catch (r) {
                      if ("SyntaxError" !== r.name) throw r;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || tn.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (e && Pt.isString(e) && ((n && !this.responseType) || r)) {
              var a = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (o) {
                if (a) {
                  if ("SyntaxError" === o.name)
                    throw zt.from(
                      o,
                      zt.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw o;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Xt.classes.FormData, Blob: Xt.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      Pt.forEach(["delete", "get", "head"], function (e) {
        tn.headers[e] = {};
      }),
        Pt.forEach(["post", "put", "patch"], function (e) {
          tn.headers[e] = Pt.merge(en);
        });
      var nn = tn,
        rn = Pt.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        an = Symbol("internals");
      function on(e) {
        return e && String(e).trim().toLowerCase();
      }
      function ln(e) {
        return !1 === e || null == e
          ? e
          : Pt.isArray(e)
          ? e.map(ln)
          : String(e);
      }
      function un(e, t, n, r, a) {
        return Pt.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            Pt.isString(t)
              ? Pt.isString(r)
                ? -1 !== t.indexOf(r)
                : Pt.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      var sn = (function (e, t) {
        function n(e) {
          s(this, n), e && this.set(e);
        }
        return (
          p(
            n,
            [
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this;
                  function a(e, t, n) {
                    var a = on(t);
                    if (!a)
                      throw new Error("header name must be a non-empty string");
                    var o = Pt.findKey(r, a);
                    (!o ||
                      void 0 === r[o] ||
                      !0 === n ||
                      (void 0 === n && !1 !== r[o])) &&
                      (r[o || t] = ln(e));
                  }
                  var o = function (e, t) {
                    return Pt.forEach(e, function (e, n) {
                      return a(e, n, t);
                    });
                  };
                  return (
                    Pt.isPlainObject(e) || e instanceof this.constructor
                      ? o(e, t)
                      : Pt.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                      ? o(
                          (function (e) {
                            var t,
                              n,
                              r,
                              a = {};
                            return (
                              e &&
                                e.split("\n").forEach(function (e) {
                                  (r = e.indexOf(":")),
                                    (t = e
                                      .substring(0, r)
                                      .trim()
                                      .toLowerCase()),
                                    (n = e.substring(r + 1).trim()),
                                    !t ||
                                      (a[t] && rn[t]) ||
                                      ("set-cookie" === t
                                        ? a[t]
                                          ? a[t].push(n)
                                          : (a[t] = [n])
                                        : (a[t] = a[t] ? a[t] + ", " + n : n));
                                }),
                              a
                            );
                          })(e),
                          t
                        )
                      : null != e && a(t, e, n),
                    this
                  );
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  if ((e = on(e))) {
                    var n = Pt.findKey(this, e);
                    if (n) {
                      var r = this[n];
                      if (!t) return r;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t,
                              n = Object.create(null),
                              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = r.exec(e));

                          )
                            n[t[1]] = t[2];
                          return n;
                        })(r);
                      if (Pt.isFunction(t)) return t.call(this, r, n);
                      if (Pt.isRegExp(t)) return t.exec(r);
                      throw new TypeError(
                        "parser must be boolean|regexp|function"
                      );
                    }
                  }
                },
              },
              {
                key: "has",
                value: function (e, t) {
                  if ((e = on(e))) {
                    var n = Pt.findKey(this, e);
                    return !(
                      !n ||
                      void 0 === this[n] ||
                      (t && !un(0, this[n], n, t))
                    );
                  }
                  return !1;
                },
              },
              {
                key: "delete",
                value: function (e, t) {
                  var n = this,
                    r = !1;
                  function a(e) {
                    if ((e = on(e))) {
                      var a = Pt.findKey(n, e);
                      !a ||
                        (t && !un(0, n[a], a, t)) ||
                        (delete n[a], (r = !0));
                    }
                  }
                  return Pt.isArray(e) ? e.forEach(a) : a(e), r;
                },
              },
              {
                key: "clear",
                value: function (e) {
                  for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                    var a = t[n];
                    (e && !un(0, this[a], a, e, !0)) ||
                      (delete this[a], (r = !0));
                  }
                  return r;
                },
              },
              {
                key: "normalize",
                value: function (e) {
                  var t = this,
                    n = {};
                  return (
                    Pt.forEach(this, function (r, a) {
                      var o = Pt.findKey(n, a);
                      if (o) return (t[o] = ln(r)), void delete t[a];
                      var i = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                                return t.toUpperCase() + n;
                              });
                          })(a)
                        : String(a).trim();
                      i !== a && delete t[a], (t[i] = ln(r)), (n[i] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: "concat",
                value: function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (e = this.constructor).concat.apply(
                    e,
                    [this].concat(n)
                  );
                },
              },
              {
                key: "toJSON",
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    Pt.forEach(this, function (n, r) {
                      null != n &&
                        !1 !== n &&
                        (t[r] = e && Pt.isArray(n) ? n.join(", ") : n);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: "toString",
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = k(e, 2);
                      return t[0] + ": " + t[1];
                    })
                    .join("\n");
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "AxiosHeaders";
                },
              },
            ],
            [
              {
                key: "from",
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: "concat",
                value: function (e) {
                  for (
                    var t = new this(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  return (
                    r.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: "accessor",
                value: function (e) {
                  var t = (this[an] = this[an] = { accessors: {} }).accessors,
                    n = this.prototype;
                  function r(e) {
                    var r = on(e);
                    t[r] ||
                      (!(function (e, t) {
                        var n = Pt.toCamelCase(" " + t);
                        ["get", "set", "has"].forEach(function (r) {
                          Object.defineProperty(e, r + n, {
                            value: function (e, n, a) {
                              return this[r].call(this, t, e, n, a);
                            },
                            configurable: !0,
                          });
                        });
                      })(n, e),
                      (t[r] = !0));
                  }
                  return Pt.isArray(e) ? e.forEach(r) : r(e), this;
                },
              },
            ]
          ),
          n
        );
      })();
      sn.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        Pt.freezeMethods(sn.prototype),
        Pt.freezeMethods(sn);
      var cn = sn;
      function fn(e, t) {
        var n = this || nn,
          r = t || n,
          a = cn.from(r.headers),
          o = r.data;
        return (
          Pt.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function dn(e) {
        return !(!e || !e.__CANCEL__);
      }
      function pn(e, t, n) {
        zt.call(this, null == e ? "canceled" : e, zt.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      Pt.inherits(pn, zt, { __CANCEL__: !0 });
      var hn = pn;
      var vn = Xt.isStandardBrowserEnv
        ? {
            write: function (e, t, n, r, a, o) {
              var i = [];
              i.push(e + "=" + encodeURIComponent(t)),
                Pt.isNumber(n) &&
                  i.push("expires=" + new Date(n).toGMTString()),
                Pt.isString(r) && i.push("path=" + r),
                Pt.isString(a) && i.push("domain=" + a),
                !0 === o && i.push("secure"),
                (document.cookie = i.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function mn(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      var yn = Xt.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement("a");
            function r(e) {
              var r = e;
              return (
                t && (n.setAttribute("href", r), (r = n.href)),
                n.setAttribute("href", r),
                {
                  href: n.href,
                  protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                  host: n.host,
                  search: n.search ? n.search.replace(/^\?/, "") : "",
                  hash: n.hash ? n.hash.replace(/^#/, "") : "",
                  hostname: n.hostname,
                  port: n.port,
                  pathname:
                    "/" === n.pathname.charAt(0)
                      ? n.pathname
                      : "/" + n.pathname,
                }
              );
            }
            return (
              (e = r(window.location.href)),
              function (t) {
                var n = Pt.isString(t) ? r(t) : t;
                return n.protocol === e.protocol && n.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var gn = function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          a = new Array(e),
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            var u = Date.now(),
              s = a[i];
            n || (n = u), (r[o] = l), (a[o] = u);
            for (var c = i, f = 0; c !== o; ) (f += r[c++]), (c %= e);
            if (((o = (o + 1) % e) === i && (i = (i + 1) % e), !(u - n < t))) {
              var d = s && u - s;
              return d ? Math.round((1e3 * f) / d) : void 0;
            }
          }
        );
      };
      function bn(e, t) {
        var n = 0,
          r = gn(50, 250);
        return function (a) {
          var o = a.loaded,
            i = a.lengthComputable ? a.total : void 0,
            l = o - n,
            u = r(l);
          n = o;
          var s = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && i && o <= i ? (i - o) / u : void 0,
            event: a,
          };
          (s[t ? "download" : "upload"] = !0), e(s);
        };
      }
      var wn =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              var r,
                a = e.data,
                o = cn.from(e.headers).normalize(),
                i = e.responseType;
              function l() {
                e.cancelToken && e.cancelToken.unsubscribe(r),
                  e.signal && e.signal.removeEventListener("abort", r);
              }
              Pt.isFormData(a) &&
                (Xt.isStandardBrowserEnv || Xt.isStandardBrowserWebWorkerEnv
                  ? o.setContentType(!1)
                  : o.setContentType("multipart/form-data;", !1));
              var u = new XMLHttpRequest();
              if (e.auth) {
                var s = e.auth.username || "",
                  c = e.auth.password
                    ? unescape(encodeURIComponent(e.auth.password))
                    : "";
                o.set("Authorization", "Basic " + btoa(s + ":" + c));
              }
              var f = mn(e.baseURL, e.url);
              function d() {
                if (u) {
                  var r = cn.from(
                    "getAllResponseHeaders" in u && u.getAllResponseHeaders()
                  );
                  !(function (e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new zt(
                            "Request failed with status code " + n.status,
                            [zt.ERR_BAD_REQUEST, zt.ERR_BAD_RESPONSE][
                              Math.floor(n.status / 100) - 4
                            ],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), l();
                    },
                    function (e) {
                      n(e), l();
                    },
                    {
                      data:
                        i && "text" !== i && "json" !== i
                          ? u.response
                          : u.responseText,
                      status: u.status,
                      statusText: u.statusText,
                      headers: r,
                      config: e,
                      request: u,
                    }
                  ),
                    (u = null);
                }
              }
              if (
                (u.open(
                  e.method.toUpperCase(),
                  Gt(f, e.params, e.paramsSerializer),
                  !0
                ),
                (u.timeout = e.timeout),
                "onloadend" in u
                  ? (u.onloadend = d)
                  : (u.onreadystatechange = function () {
                      u &&
                        4 === u.readyState &&
                        (0 !== u.status ||
                          (u.responseURL &&
                            0 === u.responseURL.indexOf("file:"))) &&
                        setTimeout(d);
                    }),
                (u.onabort = function () {
                  u &&
                    (n(new zt("Request aborted", zt.ECONNABORTED, e, u)),
                    (u = null));
                }),
                (u.onerror = function () {
                  n(new zt("Network Error", zt.ERR_NETWORK, e, u)), (u = null);
                }),
                (u.ontimeout = function () {
                  var t = e.timeout
                      ? "timeout of " + e.timeout + "ms exceeded"
                      : "timeout exceeded",
                    r = e.transitional || Jt;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(
                      new zt(
                        t,
                        r.clarifyTimeoutError ? zt.ETIMEDOUT : zt.ECONNABORTED,
                        e,
                        u
                      )
                    ),
                    (u = null);
                }),
                Xt.isStandardBrowserEnv)
              ) {
                var p =
                  (e.withCredentials || yn(f)) &&
                  e.xsrfCookieName &&
                  vn.read(e.xsrfCookieName);
                p && o.set(e.xsrfHeaderName, p);
              }
              void 0 === a && o.setContentType(null),
                "setRequestHeader" in u &&
                  Pt.forEach(o.toJSON(), function (e, t) {
                    u.setRequestHeader(t, e);
                  }),
                Pt.isUndefined(e.withCredentials) ||
                  (u.withCredentials = !!e.withCredentials),
                i && "json" !== i && (u.responseType = e.responseType),
                "function" === typeof e.onDownloadProgress &&
                  u.addEventListener("progress", bn(e.onDownloadProgress, !0)),
                "function" === typeof e.onUploadProgress &&
                  u.upload &&
                  u.upload.addEventListener("progress", bn(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((r = function (t) {
                    u &&
                      (n(!t || t.type ? new hn(null, e, u) : t),
                      u.abort(),
                      (u = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(r),
                  e.signal &&
                    (e.signal.aborted
                      ? r()
                      : e.signal.addEventListener("abort", r)));
              var h = (function (e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(f);
              h && -1 === Xt.protocols.indexOf(h)
                ? n(
                    new zt(
                      "Unsupported protocol " + h + ":",
                      zt.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : u.send(a || null);
            });
          },
        Sn = { http: Ut, xhr: wn };
      Pt.forEach(Sn, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (n) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      var kn = function (e) {
        for (
          var t, n, r = (e = Pt.isArray(e) ? e : [e]).length, a = 0;
          a < r &&
          ((t = e[a]), !(n = Pt.isString(t) ? Sn[t.toLowerCase()] : t));
          a++
        );
        if (!n) {
          if (!1 === n)
            throw new zt(
              "Adapter ".concat(t, " is not supported by the environment"),
              "ERR_NOT_SUPPORT"
            );
          throw new Error(
            Pt.hasOwnProp(Sn, t)
              ? "Adapter '".concat(t, "' is not available in the build2")
              : "Unknown adapter '".concat(t, "'")
          );
        }
        if (!Pt.isFunction(n)) throw new TypeError("adapter is not a function");
        return n;
      };
      function _n(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new hn(null, e);
      }
      function En(e) {
        return (
          _n(e),
          (e.headers = cn.from(e.headers)),
          (e.data = fn.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
          kn(e.adapter || nn.adapter)(e).then(
            function (t) {
              return (
                _n(e),
                (t.data = fn.call(e, e.transformResponse, t)),
                (t.headers = cn.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                dn(t) ||
                  (_n(e),
                  t &&
                    t.response &&
                    ((t.response.data = fn.call(
                      e,
                      e.transformResponse,
                      t.response
                    )),
                    (t.response.headers = cn.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      var xn = function (e) {
        return e instanceof cn ? e.toJSON() : e;
      };
      function Tn(e, t) {
        t = t || {};
        var n = {};
        function r(e, t, n) {
          return Pt.isPlainObject(e) && Pt.isPlainObject(t)
            ? Pt.merge.call({ caseless: n }, e, t)
            : Pt.isPlainObject(t)
            ? Pt.merge({}, t)
            : Pt.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return Pt.isUndefined(t)
            ? Pt.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!Pt.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return Pt.isUndefined(t)
            ? Pt.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function l(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        var u = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: function (e, t) {
            return a(xn(e), xn(t), !0);
          },
        };
        return (
          Pt.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            var o = u[r] || a,
              i = o(e[r], t[r], r);
            (Pt.isUndefined(i) && o !== l) || (n[r] = i);
          }),
          n
        );
      }
      var Cn = "1.4.0",
        Rn = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          Rn[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var Nn = {};
      Rn.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.4.0] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return function (n, a, o) {
          if (!1 === e)
            throw new zt(
              r(a, " has been removed" + (t ? " in " + t : "")),
              zt.ERR_DEPRECATED
            );
          return (
            t &&
              !Nn[a] &&
              ((Nn[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      var Ln = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new zt(
                "options must be an object",
                zt.ERR_BAD_OPTION_VALUE
              );
            for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
              var o = r[a],
                i = t[o];
              if (i) {
                var l = e[o],
                  u = void 0 === l || i(l, o, e);
                if (!0 !== u)
                  throw new zt(
                    "option " + o + " must be " + u,
                    zt.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new zt("Unknown option " + o, zt.ERR_BAD_OPTION);
            }
          },
          validators: Rn,
        },
        On = Ln.validators,
        An = (function () {
          function e(t) {
            s(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new Yt(), response: new Yt() });
          }
          return (
            p(e, [
              {
                key: "request",
                value: function (e, t) {
                  "string" === typeof e
                    ? ((t = t || {}).url = e)
                    : (t = e || {});
                  var n,
                    r = (t = Tn(this.defaults, t)),
                    a = r.transitional,
                    o = r.paramsSerializer,
                    i = r.headers;
                  void 0 !== a &&
                    Ln.assertOptions(
                      a,
                      {
                        silentJSONParsing: On.transitional(On.boolean),
                        forcedJSONParsing: On.transitional(On.boolean),
                        clarifyTimeoutError: On.transitional(On.boolean),
                      },
                      !1
                    ),
                    null != o &&
                      (Pt.isFunction(o)
                        ? (t.paramsSerializer = { serialize: o })
                        : Ln.assertOptions(
                            o,
                            { encode: On.function, serialize: On.function },
                            !0
                          )),
                    (t.method = (
                      t.method ||
                      this.defaults.method ||
                      "get"
                    ).toLowerCase()),
                    (n = i && Pt.merge(i.common, i[t.method])) &&
                      Pt.forEach(
                        [
                          "delete",
                          "get",
                          "head",
                          "post",
                          "put",
                          "patch",
                          "common",
                        ],
                        function (e) {
                          delete i[e];
                        }
                      ),
                    (t.headers = cn.concat(n, i));
                  var l = [],
                    u = !0;
                  this.interceptors.request.forEach(function (e) {
                    ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((u = u && e.synchronous),
                      l.unshift(e.fulfilled, e.rejected));
                  });
                  var s,
                    c = [];
                  this.interceptors.response.forEach(function (e) {
                    c.push(e.fulfilled, e.rejected);
                  });
                  var f,
                    d = 0;
                  if (!u) {
                    var p = [En.bind(this), void 0];
                    for (
                      p.unshift.apply(p, l),
                        p.push.apply(p, c),
                        f = p.length,
                        s = Promise.resolve(t);
                      d < f;

                    )
                      s = s.then(p[d++], p[d++]);
                    return s;
                  }
                  f = l.length;
                  var h = t;
                  for (d = 0; d < f; ) {
                    var v = l[d++],
                      m = l[d++];
                    try {
                      h = v(h);
                    } catch (y) {
                      m.call(this, y);
                      break;
                    }
                  }
                  try {
                    s = En.call(this, h);
                  } catch (y) {
                    return Promise.reject(y);
                  }
                  for (d = 0, f = c.length; d < f; ) s = s.then(c[d++], c[d++]);
                  return s;
                },
              },
              {
                key: "getUri",
                value: function (e) {
                  return Gt(
                    mn((e = Tn(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer
                  );
                },
              },
            ]),
            e
          );
        })();
      Pt.forEach(["delete", "get", "head", "options"], function (e) {
        An.prototype[e] = function (t, n) {
          return this.request(
            Tn(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        Pt.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                Tn(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (An.prototype[e] = t()), (An.prototype[e + "Form"] = t(!0));
        });
      var Pn = An,
        jn = (function () {
          function e(t) {
            if ((s(this, e), "function" !== typeof t))
              throw new TypeError("executor must be a function.");
            var n;
            this.promise = new Promise(function (e) {
              n = e;
            });
            var r = this;
            this.promise.then(function (e) {
              if (r._listeners) {
                for (var t = r._listeners.length; t-- > 0; ) r._listeners[t](e);
                r._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  n = new Promise(function (e) {
                    r.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (n.cancel = function () {
                    r.unsubscribe(t);
                  }),
                  n
                );
              }),
              t(function (e, t, a) {
                r.reason || ((r.reason = new hn(e, t, a)), n(r.reason));
              });
          }
          return (
            p(
              e,
              [
                {
                  key: "throwIfRequested",
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: "source",
                  value: function () {
                    var t;
                    return {
                      token: new e(function (e) {
                        t = e;
                      }),
                      cancel: t,
                    };
                  },
                },
              ]
            ),
            e
          );
        })();
      var Mn = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Mn).forEach(function (e) {
        var t = k(e, 2),
          n = t[0],
          r = t[1];
        Mn[r] = n;
      });
      var Dn = Mn;
      var zn = (function e(t) {
        var n = new Pn(t),
          r = Ze(Pn.prototype.request, n);
        return (
          Pt.extend(r, Pn.prototype, n, { allOwnKeys: !0 }),
          Pt.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(Tn(t, n));
          }),
          r
        );
      })(nn);
      (zn.Axios = Pn),
        (zn.CanceledError = hn),
        (zn.CancelToken = jn),
        (zn.isCancel = dn),
        (zn.VERSION = Cn),
        (zn.toFormData = Wt),
        (zn.AxiosError = zt),
        (zn.Cancel = zn.CanceledError),
        (zn.all = function (e) {
          return Promise.all(e);
        }),
        (zn.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (zn.isAxiosError = function (e) {
          return Pt.isObject(e) && !0 === e.isAxiosError;
        }),
        (zn.mergeConfig = Tn),
        (zn.AxiosHeaders = cn),
        (zn.formToJSON = function (e) {
          return Zt(Pt.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (zn.HttpStatusCode = Dn),
        (zn.default = zn);
      var Un = zn;
      function Fn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function In(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function Vn() {
        Vn = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          l = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            l = new T(a || []);
          return r(i, "_invoke", { value: k(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = s;
        var d = {};
        function p() {}
        function h() {}
        function v() {}
        var m = {};
        u(m, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(C([])));
        g && g !== t && n.call(g, o) && (m = g);
        var b = (v.prototype = p.prototype = Object.create(m));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function S(e, t) {
          function a(r, o, i, l) {
            var u = f(e[r], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                d = s.value;
              return d && "object" == c(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      a("next", e, i, l);
                    },
                    function (e) {
                      a("throw", e, i, l);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return a("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return R();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = _(i, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = f(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === d)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = f(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function C(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          r(b, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(v, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(S.prototype),
          u(S.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = S),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new S(s(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          w(b),
          u(b, l, "Generator"),
          u(b, o, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = C),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      function Bn(e, t, n) {
        return (
          (t = f(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Wn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Hn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Wn(Object(n), !0).forEach(function (t) {
                Bn(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Wn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var $n = n(164),
        Kn = ["override"],
        qn = ["cachePolicyForParams_UNSTABLE"],
        Qn = Vn().mark(xa),
        Gn = Vn().mark(zo);
      var Yn = function (e) {
        var t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (n) {}
        return t;
      };
      var Jn = function (e) {
        return !!e && "function" === typeof e.then;
      };
      var Xn = function (e, t) {
        if (null != e) return e;
        throw Yn(
          null !== t && void 0 !== t ? t : "Got unexpected null or undefined"
        );
      };
      function Zn(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var er = (function () {
          function e() {
            s(this, e);
          }
          return (
            p(e, [
              {
                key: "getValue",
                value: function () {
                  throw Yn("BaseLoadable");
                },
              },
              {
                key: "toPromise",
                value: function () {
                  throw Yn("BaseLoadable");
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  throw Yn("BaseLoadable");
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  throw Yn(
                    'Loadable expected value, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "promiseMaybe",
                value: function () {
                  throw Yn("BaseLoadable");
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  throw Yn(
                    'Loadable expected promise, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "errorMaybe",
                value: function () {
                  throw Yn("BaseLoadable");
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  throw Yn(
                    'Loadable expected error, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "is",
                value: function (e) {
                  return e.state === this.state && e.contents === this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  throw Yn("BaseLoadable");
                },
              },
            ]),
            e
          );
        })(),
        tr = (function (e) {
          v(n, e);
          var t = b(n);
          function n(e) {
            var r;
            return (
              s(this, n),
              Zn(g((r = t.call(this))), "state", "hasValue"),
              Zn(g(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            p(n, [
              {
                key: "getValue",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.resolve(this.contents);
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "promiseMaybe", value: function () {} },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  try {
                    var n = e(this.contents);
                    return Jn(n) ? ir(n) : sr(n) ? n : ar(n);
                  } catch (r) {
                    return Jn(r)
                      ? ir(
                          r.next(function () {
                            return t.map(e);
                          })
                        )
                      : or(r);
                  }
                },
              },
            ]),
            n
          );
        })(er),
        nr = (function (e) {
          v(n, e);
          var t = b(n);
          function n(e) {
            var r;
            return (
              s(this, n),
              Zn(g((r = t.call(this))), "state", "hasError"),
              Zn(g(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            p(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.reject(this.contents);
                },
              },
              { key: "valueMaybe", value: function () {} },
              { key: "promiseMaybe", value: function () {} },
              {
                key: "errorMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  return this;
                },
              },
            ]),
            n
          );
        })(er),
        rr = (function (e) {
          v(n, e);
          var t = b(n);
          function n(e) {
            var r;
            return (
              s(this, n),
              Zn(g((r = t.call(this))), "state", "loading"),
              Zn(g(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            p(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return this.contents;
                },
              },
              { key: "valueMaybe", value: function () {} },
              {
                key: "promiseMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  return ir(
                    this.contents
                      .then(function (t) {
                        var n = e(t);
                        if (sr(n)) {
                          var r = n;
                          switch (r.state) {
                            case "hasValue":
                            case "loading":
                              return r.contents;
                            case "hasError":
                              throw r.contents;
                          }
                        }
                        return n;
                      })
                      .catch(function (n) {
                        if (Jn(n))
                          return n.then(function () {
                            return t.map(e).contents;
                          });
                        throw n;
                      })
                  );
                },
              },
            ]),
            n
          );
        })(er);
      function ar(e) {
        return Object.freeze(new tr(e));
      }
      function or(e) {
        return Object.freeze(new nr(e));
      }
      function ir(e) {
        return Object.freeze(new rr(e));
      }
      function lr() {
        return Object.freeze(new rr(new Promise(function () {})));
      }
      function ur(e) {
        var t = (function (e) {
          return e.every(function (e) {
            return "hasValue" === e.state;
          })
            ? ar(
                e.map(function (e) {
                  return e.contents;
                })
              )
            : e.some(function (e) {
                return "hasError" === e.state;
              })
            ? or(
                Xn(
                  e.find(function (e) {
                    return "hasError" === e.state;
                  }),
                  "Invalid loadable passed to loadableAll"
                ).contents
              )
            : ir(
                Promise.all(
                  e.map(function (e) {
                    return e.contents;
                  })
                )
              );
        })(
          (Array.isArray(e)
            ? e
            : Object.getOwnPropertyNames(e).map(function (t) {
                return e[t];
              })
          ).map(function (e) {
            return sr(e) ? e : Jn(e) ? ir(e) : ar(e);
          })
        );
        return Array.isArray(e)
          ? t
          : t.map(function (t) {
              return Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
                return Hn(Hn({}, e), {}, Bn({}, n, t[r]));
              }, {});
            });
      }
      function sr(e) {
        return e instanceof er;
      }
      var cr = {
          of: function (e) {
            return Jn(e) ? ir(e) : sr(e) ? e : ar(e);
          },
          error: function (e) {
            return or(e);
          },
          loading: function () {
            return lr();
          },
          all: ur,
          isLoadable: sr,
        },
        fr = {
          loadableWithValue: ar,
          loadableWithError: or,
          loadableWithPromise: ir,
          loadableLoading: lr,
          loadableAll: ur,
          isLoadable: sr,
          RecoilLoadable: cr,
        },
        dr = fr.loadableWithValue,
        pr = fr.loadableWithError,
        hr = fr.loadableWithPromise,
        vr = fr.loadableLoading,
        mr = fr.loadableAll,
        yr = fr.isLoadable,
        gr = fr.RecoilLoadable,
        br = Object.freeze({
          __proto__: null,
          loadableWithValue: dr,
          loadableWithError: pr,
          loadableWithPromise: hr,
          loadableLoading: vr,
          loadableAll: mr,
          isLoadable: yr,
          RecoilLoadable: gr,
        }),
        wr = {
          RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
          RECOIL_GKS_ENABLED: new Set([
            "recoil_hamt_2020",
            "recoil_sync_external_store",
            "recoil_suppress_rerender_in_callback",
            "recoil_memory_managament_2020",
          ]),
        };
      !(function () {
        var e;
        "undefined" !== typeof process &&
          null !=
            (null === (e = process) || void 0 === e
              ? void 0
              : {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }) &&
          ((function (e, t) {
            var n,
              r,
              a =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) ||
                void 0 === n ||
                null === (r = n.toLowerCase()) ||
                void 0 === r
                  ? void 0
                  : r.trim();
            if (null != a && "" !== a) {
              if (!["true", "false"].includes(a))
                throw Yn(
                  "process.env."
                    .concat(e, " value must be 'true', 'false', or empty: ")
                    .concat(a)
                );
              t("true" === a);
            }
          })("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", function (e) {
            wr.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
          }),
          (function (e, t) {
            var n,
              r =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) || void 0 === n
                  ? void 0
                  : n.trim();
            null != r && "" !== r && t(r.split(/\s*,\s*|\s+/));
          })("RECOIL_GKS_ENABLED", function (e) {
            e.forEach(function (e) {
              wr.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var Sr = wr;
      function kr(e) {
        return Sr.RECOIL_GKS_ENABLED.has(e);
      }
      (kr.setPass = function (e) {
        Sr.RECOIL_GKS_ENABLED.add(e);
      }),
        (kr.setFail = function (e) {
          Sr.RECOIL_GKS_ENABLED.delete(e);
        }),
        (kr.clear = function () {
          Sr.RECOIL_GKS_ENABLED.clear();
        });
      var _r = kr;
      var Er,
        xr,
        Tr,
        Cr = function (e, t) {
          return (
            (arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {}
            ).error,
            null
          );
        },
        Rr = Cr,
        Nr =
          null !== (Er = t.createMutableSource) && void 0 !== Er
            ? Er
            : t.unstable_createMutableSource,
        Lr =
          null !== (xr = t.useMutableSource) && void 0 !== xr
            ? xr
            : t.unstable_useMutableSource,
        Or =
          null !== (Tr = t.useSyncExternalStore) && void 0 !== Tr
            ? Tr
            : t.unstable_useSyncExternalStore,
        Ar = !1;
      var Pr = {
          createMutableSource: Nr,
          useMutableSource: Lr,
          useSyncExternalStore: Or,
          currentRendererSupportsUseSyncExternalStore: function () {
            var e,
              n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
              r = n.ReactCurrentDispatcher,
              a = n.ReactCurrentOwner,
              o =
                null !=
                (null !==
                  (e = null === r || void 0 === r ? void 0 : r.current) &&
                void 0 !== e
                  ? e
                  : a.currentDispatcher
                ).useSyncExternalStore;
            return (
              !Or ||
                o ||
                Ar ||
                ((Ar = !0),
                Rr(
                  "A React renderer without React 18+ API support is being used with React 18+."
                )),
              o
            );
          },
          reactMode: function () {
            return _r("recoil_transition_support")
              ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
              : _r("recoil_sync_external_store") && null != Or
              ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
              : _r("recoil_mutable_source") &&
                null != Lr &&
                "undefined" !== typeof window &&
                !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
              ? _r("recoil_suppress_rerender_in_callback")
                ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
                : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
              : _r("recoil_suppress_rerender_in_callback")
              ? { mode: "LEGACY", early: !0, concurrent: !1 }
              : { mode: "LEGACY", early: !1, concurrent: !1 };
          },
          isFastRefreshEnabled: function () {
            return !1;
          },
        },
        jr = (function () {
          function e(t) {
            s(this, e), Zn(this, "key", void 0), (this.key = t);
          }
          return (
            p(e, [
              {
                key: "toJSON",
                value: function () {
                  return { key: this.key };
                },
              },
            ]),
            e
          );
        })(),
        Mr = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(jr),
        Dr = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(jr);
      var zr = {
          AbstractRecoilValue: jr,
          RecoilState: Mr,
          RecoilValueReadOnly: Dr,
          isRecoilValue: function (e) {
            return e instanceof Mr || e instanceof Dr;
          },
        },
        Ur = zr.AbstractRecoilValue,
        Fr = zr.RecoilState,
        Ir = zr.RecoilValueReadOnly,
        Vr = zr.isRecoilValue,
        Br = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: Ur,
          RecoilState: Fr,
          RecoilValueReadOnly: Ir,
          isRecoilValue: Vr,
        });
      var Wr = function (e) {};
      var Hr = function (e, t) {
          return Vn().mark(function n() {
            var r, a, o, i;
            return Vn().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (r = 0), (a = x(e)), (n.prev = 2), a.s();
                    case 4:
                      if ((o = a.n()).done) {
                        n.next = 10;
                        break;
                      }
                      return (i = o.value), (n.next = 8), t(i, r++);
                    case 8:
                      n.next = 4;
                      break;
                    case 10:
                      n.next = 15;
                      break;
                    case 12:
                      (n.prev = 12), (n.t0 = n.catch(2)), a.e(n.t0);
                    case 15:
                      return (n.prev = 15), a.f(), n.finish(15);
                    case 18:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[2, 12, 15, 18]]
            );
          })();
        },
        $r = p(function e() {
          s(this, e);
        }),
        Kr = new $r(),
        qr = new Map(),
        Qr = new Map();
      var Gr = (function (e) {
        v(n, e);
        var t = b(n);
        function n() {
          return s(this, n), t.apply(this, arguments);
        }
        return p(n);
      })(E(Error));
      var Yr = new Map();
      function Jr(e) {
        return Yr.get(e);
      }
      var Xr = {
        nodes: qr,
        recoilValues: Qr,
        registerNode: function (e) {
          Sr.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (qr.has(e)) {
                var t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            qr.set(e.key, e);
          var t =
            null == e.set
              ? new Br.RecoilValueReadOnly(e.key)
              : new Br.RecoilState(e.key);
          return Qr.set(e.key, t), t;
        },
        getNode: function (e) {
          var t = qr.get(e);
          if (null == t)
            throw new Gr(
              'Missing definition for RecoilValue: "'.concat(e, '""')
            );
          return t;
        },
        getNodeMaybe: function (e) {
          return qr.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (_r("recoil_memory_managament_2020")) {
            var n,
              r = qr.get(e);
            if (
              null !== r &&
              void 0 !== r &&
              null !== (t = r.shouldDeleteConfigOnRelease) &&
              void 0 !== t &&
              t.call(r)
            )
              qr.delete(e),
                null === (n = Jr(e)) || void 0 === n || n(),
                Yr.delete(e);
          }
        },
        setConfigDeletionHandler: function (e, t) {
          _r("recoil_memory_managament_2020") &&
            (void 0 === t ? Yr.delete(e) : Yr.set(e, t));
        },
        getConfigDeletionHandler: Jr,
        recoilValuesForKeys: function (e) {
          return Hr(e, function (e) {
            return Xn(Qr.get(e));
          });
        },
        NodeMissingError: Gr,
        DefaultValue: $r,
        DEFAULT_VALUE: Kr,
      };
      var Zr = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var ea = (function (e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        })(function (e) {
          var t =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  },
            n = {},
            r = Math.pow(2, 5),
            a = r - 1,
            o = r / 2,
            i = r / 4,
            l = {},
            u = function (e) {
              return function () {
                return e;
              };
            },
            s = (n.hash = function (e) {
              var n = "undefined" === typeof e ? "undefined" : t(e);
              if ("number" === n) return e;
              "string" !== n && (e += "");
              for (var r = 0, a = 0, o = e.length; a < o; ++a) {
                r = ((r << 5) - r + e.charCodeAt(a)) | 0;
              }
              return r;
            }),
            c = function (e, t) {
              return (t >>> e) & a;
            },
            f = function (e) {
              return 1 << e;
            },
            d = function (e, t) {
              return (
                (n = e & (t - 1)),
                (n =
                  ((n =
                    (858993459 & (n -= (n >> 1) & 1431655765)) +
                    ((n >> 2) & 858993459)) +
                    (n >> 4)) &
                  252645135),
                127 & ((n += n >> 8) + (n >> 16))
              );
              var n;
            },
            p = function (e, t, n, r) {
              var a = r;
              if (!e) {
                var o = r.length;
                a = new Array(o);
                for (var i = 0; i < o; ++i) a[i] = r[i];
              }
              return (a[t] = n), a;
            },
            h = function (e, t, n) {
              var r = n.length - 1,
                a = 0,
                o = 0,
                i = n;
              if (e) a = o = t;
              else for (i = new Array(r); a < t; ) i[o++] = n[a++];
              for (++a; a <= r; ) i[o++] = n[a++];
              return e && (i.length = r), i;
            },
            v = { __hamt_isEmpty: !0 },
            m = function (e) {
              return e === v || (e && e.__hamt_isEmpty);
            },
            y = function (e, t, n, r) {
              return {
                type: 1,
                edit: e,
                hash: t,
                key: n,
                value: r,
                _modify: _,
              };
            },
            g = function (e, t, n) {
              return { type: 2, edit: e, hash: t, children: n, _modify: E };
            },
            b = function (e, t, n) {
              return { type: 3, edit: e, mask: t, children: n, _modify: x };
            },
            w = function (e, t, n) {
              return { type: 4, edit: e, size: t, children: n, _modify: T };
            },
            S = function e(t, n, r, a, o, i) {
              if (r === o) return g(t, r, [i, a]);
              var l = c(n, r),
                u = c(n, o);
              return b(
                t,
                f(l) | f(u),
                l === u ? [e(t, n + 5, r, a, o, i)] : l < u ? [a, i] : [i, a]
              );
            },
            k = function (e, t) {
              return e === t.edit;
            },
            _ = function (e, t, n, r, a, o, i) {
              if (t(o, this.key)) {
                var u = r(this.value);
                return u === this.value
                  ? this
                  : u === l
                  ? (--i.value, v)
                  : k(e, this)
                  ? ((this.value = u), this)
                  : y(e, a, o, u);
              }
              var s = r();
              return s === l
                ? this
                : (++i.value, S(e, n, this.hash, this, a, y(e, a, o, s)));
            },
            E = function (e, t, n, r, a, o, i) {
              if (a === this.hash) {
                var u = (function (e, t, n, r, a, o, i, u) {
                  for (var s = a.length, c = 0; c < s; ++c) {
                    var f = a[c];
                    if (n(i, f.key)) {
                      var d = f.value,
                        v = o(d);
                      return v === d
                        ? a
                        : v === l
                        ? (--u.value, h(e, c, a))
                        : p(e, c, y(t, r, i, v), a);
                    }
                  }
                  var m = o();
                  return m === l ? a : (++u.value, p(e, s, y(t, r, i, m), a));
                })(k(e, this), e, t, this.hash, this.children, r, o, i);
                return u === this.children
                  ? this
                  : u.length > 1
                  ? g(e, this.hash, u)
                  : u[0];
              }
              var s = r();
              return s === l
                ? this
                : (++i.value, S(e, n, this.hash, this, a, y(e, a, o, s)));
            },
            x = function (e, t, n, r, a, i, l) {
              var u = this.mask,
                s = this.children,
                y = c(n, a),
                g = f(y),
                S = d(u, g),
                _ = u & g,
                E = _ ? s[S] : v,
                x = E._modify(e, t, n + 5, r, a, i, l);
              if (E === x) return this;
              var T,
                C = k(e, this),
                R = u,
                N = void 0;
              if (_ && m(x)) {
                if (!(R &= ~g)) return v;
                if (
                  s.length <= 2 &&
                  ((T = s[1 ^ S]) === v || 1 === T.type || 2 === T.type)
                )
                  return s[1 ^ S];
                N = h(C, S, s);
              } else if (_ || m(x)) N = p(C, S, x, s);
              else {
                if (s.length >= o)
                  return (function (e, t, n, r, a) {
                    for (var o = [], i = r, l = 0, u = 0; i; ++u)
                      1 & i && (o[u] = a[l++]), (i >>>= 1);
                    return (o[t] = n), w(e, l + 1, o);
                  })(e, y, x, u, s);
                (R |= g),
                  (N = (function (e, t, n, r) {
                    var a = r.length;
                    if (e) {
                      for (var o = a; o >= t; ) r[o--] = r[o];
                      return (r[t] = n), r;
                    }
                    for (var i = 0, l = 0, u = new Array(a + 1); i < t; )
                      u[l++] = r[i++];
                    for (u[t] = n; i < a; ) u[++l] = r[i++];
                    return u;
                  })(C, S, x, s));
              }
              return C
                ? ((this.mask = R), (this.children = N), this)
                : b(e, R, N);
            },
            T = function (e, t, n, r, a, o, l) {
              var u = this.size,
                s = this.children,
                f = c(n, a),
                d = s[f],
                h = (d || v)._modify(e, t, n + 5, r, a, o, l);
              if (d === h) return this;
              var y = k(e, this),
                g = void 0;
              if (m(d) && !m(h)) ++u, (g = p(y, f, h, s));
              else if (!m(d) && m(h)) {
                if (--u <= i)
                  return (function (e, t, n, r) {
                    for (
                      var a = new Array(t - 1),
                        o = 0,
                        i = 0,
                        l = 0,
                        u = r.length;
                      l < u;
                      ++l
                    )
                      if (l !== n) {
                        var s = r[l];
                        s && !m(s) && ((a[o++] = s), (i |= 1 << l));
                      }
                    return b(e, i, a);
                  })(e, u, f, s);
                g = p(y, f, v, s);
              } else g = p(y, f, h, s);
              return y
                ? ((this.size = u), (this.children = g), this)
                : w(e, u, g);
            };
          function C(e, t, n, r, a) {
            (this._editable = e),
              (this._edit = t),
              (this._config = n),
              (this._root = r),
              (this._size = a);
          }
          (v._modify = function (e, t, n, r, a, o, i) {
            var u = r();
            return u === l ? v : (++i.value, y(e, a, o, u));
          }),
            (C.prototype.setTree = function (e, t) {
              return this._editable
                ? ((this._root = e), (this._size = t), this)
                : e === this._root
                ? this
                : new C(this._editable, this._edit, this._config, e, t);
            });
          var R = (n.tryGetHash = function (e, t, n, r) {
            for (var a = r._root, o = 0, i = r._config.keyEq; ; )
              switch (a.type) {
                case 1:
                  return i(n, a.key) ? a.value : e;
                case 2:
                  if (t === a.hash)
                    for (var l = a.children, u = 0, s = l.length; u < s; ++u) {
                      var p = l[u];
                      if (i(n, p.key)) return p.value;
                    }
                  return e;
                case 3:
                  var h = c(o, t),
                    v = f(h);
                  if (a.mask & v) {
                    (a = a.children[d(a.mask, v)]), (o += 5);
                    break;
                  }
                  return e;
                case 4:
                  if ((a = a.children[c(o, t)])) {
                    o += 5;
                    break;
                  }
                  return e;
                default:
                  return e;
              }
          });
          C.prototype.tryGetHash = function (e, t, n) {
            return R(e, t, n, this);
          };
          var N = (n.tryGet = function (e, t, n) {
            return R(e, n._config.hash(t), t, n);
          });
          C.prototype.tryGet = function (e, t) {
            return N(e, t, this);
          };
          var L = (n.getHash = function (e, t, n) {
            return R(void 0, e, t, n);
          });
          C.prototype.getHash = function (e, t) {
            return L(e, t, this);
          };
          n.get = function (e, t) {
            return R(void 0, t._config.hash(e), e, t);
          };
          C.prototype.get = function (e, t) {
            return N(t, e, this);
          };
          var O = (n.has = function (e, t, n) {
            return R(l, e, t, n) !== l;
          });
          C.prototype.hasHash = function (e, t) {
            return O(e, t, this);
          };
          var A = (n.has = function (e, t) {
            return O(t._config.hash(e), e, t);
          });
          C.prototype.has = function (e) {
            return A(e, this);
          };
          var P = function (e, t) {
            return e === t;
          };
          (n.make = function (e) {
            return new C(
              0,
              0,
              { keyEq: (e && e.keyEq) || P, hash: (e && e.hash) || s },
              v,
              0
            );
          }),
            (n.empty = n.make());
          var j = (n.isEmpty = function (e) {
            return e && !!m(e._root);
          });
          C.prototype.isEmpty = function () {
            return j(this);
          };
          var M = (n.modifyHash = function (e, t, n, r) {
            var a = { value: r._size },
              o = r._root._modify(
                r._editable ? r._edit : NaN,
                r._config.keyEq,
                0,
                e,
                t,
                n,
                a
              );
            return r.setTree(o, a.value);
          });
          C.prototype.modifyHash = function (e, t, n) {
            return M(n, e, t, this);
          };
          var D = (n.modify = function (e, t, n) {
            return M(e, n._config.hash(t), t, n);
          });
          C.prototype.modify = function (e, t) {
            return D(t, e, this);
          };
          var z = (n.setHash = function (e, t, n, r) {
            return M(u(n), e, t, r);
          });
          C.prototype.setHash = function (e, t, n) {
            return z(e, t, n, this);
          };
          var U = (n.set = function (e, t, n) {
            return z(n._config.hash(e), e, t, n);
          });
          C.prototype.set = function (e, t) {
            return U(e, t, this);
          };
          var F = u(l),
            I = (n.removeHash = function (e, t, n) {
              return M(F, e, t, n);
            });
          C.prototype.removeHash = C.prototype.deleteHash = function (e, t) {
            return I(e, t, this);
          };
          var V = (n.remove = function (e, t) {
            return I(t._config.hash(e), e, t);
          });
          C.prototype.remove = C.prototype.delete = function (e) {
            return V(e, this);
          };
          var B = (n.beginMutation = function (e) {
            return new C(
              e._editable + 1,
              e._edit + 1,
              e._config,
              e._root,
              e._size
            );
          });
          C.prototype.beginMutation = function () {
            return B(this);
          };
          var W = (n.endMutation = function (e) {
            return (e._editable = e._editable && e._editable - 1), e;
          });
          C.prototype.endMutation = function () {
            return W(this);
          };
          var H = (n.mutate = function (e, t) {
            var n = B(t);
            return e(n), W(n);
          });
          C.prototype.mutate = function (e) {
            return H(e, this);
          };
          var $ = function (e) {
              return e && K(e[0], e[1], e[2], e[3], e[4]);
            },
            K = function (e, t, n, r, a) {
              for (; n < e; ) {
                var o = t[n++];
                if (o && !m(o)) return q(o, r, [e, t, n, r, a]);
              }
              return $(a);
            },
            q = function (e, t, n) {
              switch (e.type) {
                case 1:
                  return { value: t(e), rest: n };
                case 2:
                case 4:
                case 3:
                  var r = e.children;
                  return K(r.length, r, 0, t, n);
                default:
                  return $(n);
              }
            },
            Q = { done: !0 };
          function G(e) {
            this.v = e;
          }
          (G.prototype.next = function () {
            if (!this.v) return Q;
            var e = this.v;
            return (this.v = $(e.rest)), e;
          }),
            (G.prototype[Symbol.iterator] = function () {
              return this;
            });
          var Y = function (e, t) {
              return new G(q(e._root, t));
            },
            J = function (e) {
              return [e.key, e.value];
            },
            X = (n.entries = function (e) {
              return Y(e, J);
            });
          C.prototype.entries = C.prototype[Symbol.iterator] = function () {
            return X(this);
          };
          var Z = function (e) {
              return e.key;
            },
            ee = (n.keys = function (e) {
              return Y(e, Z);
            });
          C.prototype.keys = function () {
            return ee(this);
          };
          var te = function (e) {
              return e.value;
            },
            ne =
              (n.values =
              C.prototype.values =
                function (e) {
                  return Y(e, te);
                });
          C.prototype.values = function () {
            return ne(this);
          };
          var re = (n.fold = function (e, t, n) {
            var r = n._root;
            if (1 === r.type) return e(t, r.value, r.key);
            for (var a = [r.children], o = void 0; (o = a.pop()); )
              for (var i = 0, l = o.length; i < l; ) {
                var u = o[i++];
                u &&
                  u.type &&
                  (1 === u.type
                    ? (t = e(t, u.value, u.key))
                    : a.push(u.children));
              }
            return t;
          });
          C.prototype.fold = function (e, t) {
            return re(e, t, this);
          };
          var ae = (n.forEach = function (e, t) {
            return re(
              function (n, r, a) {
                return e(r, a, t);
              },
              null,
              t
            );
          });
          C.prototype.forEach = function (e) {
            return ae(e, this);
          };
          var oe = (n.count = function (e) {
            return e._size;
          });
          (C.prototype.count = function () {
            return oe(this);
          }),
            Object.defineProperty(C.prototype, "size", {
              get: C.prototype.count,
            }),
            e.exports ? (e.exports = n) : ((void 0).hamt = n);
        }),
        ta = (function () {
          function e(t) {
            s(this, e),
              Zn(this, "_map", void 0),
              (this._map = new Map(
                null === t || void 0 === t ? void 0 : t.entries()
              ));
          }
          return (
            p(e, [
              {
                key: "keys",
                value: function () {
                  return this._map.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._map.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._map.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._map.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return ra(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._map);
                },
              },
            ]),
            e
          );
        })(),
        na = (function () {
          function e(t) {
            if (
              (s(this, e),
              Zn(this, "_hamt", ea.empty.beginMutation()),
              t instanceof e)
            ) {
              var n = t._hamt.endMutation();
              (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
            } else if (t) {
              var r,
                a = x(t.entries());
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = k(r.value, 2),
                    i = o[0],
                    l = o[1];
                  this._hamt.set(i, l);
                }
              } catch (u) {
                a.e(u);
              } finally {
                a.f();
              }
            }
          }
          return (
            p(e, [
              {
                key: "keys",
                value: function () {
                  return this._hamt.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._hamt.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._hamt.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._hamt.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._hamt.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._hamt.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return ra(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._hamt);
                },
              },
            ]),
            e
          );
        })();
      function ra(e) {
        return _r("recoil_hamt_2020") ? new na(e) : new ta(e);
      }
      var aa = ra;
      var oa = function (e) {
        for (
          var t = new Set(),
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        var o,
          i = x(e);
        try {
          e: for (i.s(); !(o = i.n()).done; ) {
            var l,
              u = o.value,
              s = x(r);
            try {
              for (s.s(); !(l = s.n()).done; ) {
                if (l.value.has(u)) continue e;
              }
            } catch (c) {
              s.e(c);
            } finally {
              s.f();
            }
            t.add(u);
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return t;
      };
      var ia = function (e, t) {
        var n = new Map();
        return (
          e.forEach(function (e, r) {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function la(e, t, n, r) {
        var a = n.nodeDeps,
          o = n.nodeToNodeSubscriptions,
          i = a.get(e);
        if (!i || !r || i === r.nodeDeps.get(e)) {
          a.set(e, t);
          var l,
            u = x(null == i ? t : oa(t, i));
          try {
            for (u.s(); !(l = u.n()).done; ) {
              var s = l.value;
              o.has(s) || o.set(s, new Set()), Xn(o.get(s)).add(e);
            }
          } catch (h) {
            u.e(h);
          } finally {
            u.f();
          }
          if (i) {
            var c,
              f = x(oa(i, t));
            try {
              for (f.s(); !(c = f.n()).done; ) {
                var d = c.value;
                if (!o.has(d)) return;
                var p = Xn(o.get(d));
                p.delete(e), 0 === p.size && o.delete(d);
              }
            } catch (h) {
              f.e(h);
            } finally {
              f.f();
            }
          }
        }
      }
      var ua = function (e) {
          return {
            nodeDeps: ia(e.nodeDeps, function (e) {
              return new Set(e);
            }),
            nodeToNodeSubscriptions: ia(
              e.nodeToNodeSubscriptions,
              function (e) {
                return new Set(e);
              }
            ),
          };
        },
        sa = function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        ca = function (e, t, n, r) {
          var a,
            o,
            i,
            l,
            u = n.getState();
          r !== u.currentTree.version &&
            r !==
              (null === (a = u.nextTree) || void 0 === a
                ? void 0
                : a.version) &&
            r !==
              (null === (o = u.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            Rr("Tried to save dependencies to a discarded tree");
          var s = n.getGraph(r);
          if (
            (la(e, t, s),
            r ===
              (null === (i = u.previousTree) || void 0 === i
                ? void 0
                : i.version) && la(e, t, n.getGraph(u.currentTree.version), s),
            r ===
              (null === (l = u.previousTree) || void 0 === l
                ? void 0
                : l.version) || r === u.currentTree.version)
          ) {
            var c,
              f =
                null === (c = u.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== f) la(e, t, n.getGraph(f), s);
          }
        },
        fa = 0,
        da = 0,
        pa = 0,
        ha = function () {
          return fa++;
        },
        va = function () {
          return da++;
        },
        ma = function () {
          return pa++;
        },
        ya = Object.freeze({
          __proto__: null,
          persistentMap: aa,
        }).persistentMap,
        ga = sa,
        ba = ha;
      function wa() {
        var e = ba();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: ya(),
          nonvalidatedAtoms: ya(),
        };
      }
      var Sa = {
          makeEmptyTreeState: wa,
          makeEmptyStoreState: function () {
            var e = wa();
            return {
              currentTree: e,
              nextTree: null,
              previousTree: null,
              commitDepth: 0,
              knownAtoms: new Set(),
              knownSelectors: new Set(),
              transactionSubscriptions: new Map(),
              nodeTransactionSubscriptions: new Map(),
              nodeToComponentSubscriptions: new Map(),
              queuedComponentCallbacks_DEPRECATED: [],
              suspendedComponentResolvers: new Set(),
              graphsByVersion: new Map().set(e.version, ga()),
              retention: {
                referenceCounts: new Map(),
                nodesRetainedByZone: new Map(),
                retainablesToCheckForRelease: new Set(),
              },
              nodeCleanupFunctions: new Map(),
            };
          },
          getNextTreeStateVersion: ba,
        },
        ka = p(function e() {
          s(this, e);
        });
      var _a = {
        RetentionZone: ka,
        retentionZone: function () {
          return new ka();
        },
      };
      var Ea = function (e, t) {
        var n = new Set(e);
        return n.add(t), n;
      };
      function xa(e, t) {
        var n, r, a, o;
        return Vn().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (n = 0), (r = x(e)), (i.prev = 2), r.s();
                case 4:
                  if ((a = r.n()).done) {
                    i.next = 11;
                    break;
                  }
                  if (((o = a.value), !t(o, n++))) {
                    i.next = 9;
                    break;
                  }
                  return (i.next = 9), o;
                case 9:
                  i.next = 4;
                  break;
                case 11:
                  i.next = 16;
                  break;
                case 13:
                  (i.prev = 13), (i.t0 = i.catch(2)), r.e(i.t0);
                case 16:
                  return (i.prev = 16), r.f(), i.finish(16);
                case 19:
                case "end":
                  return i.stop();
              }
          },
          Qn,
          null,
          [[2, 13, 16, 19]]
        );
      }
      var Ta = xa;
      var Ca = function (e, t) {
          return new Proxy(e, {
            get: function (e, n) {
              return !(n in e) && n in t && (e[n] = t[n]()), e[n];
            },
            ownKeys: function (e) {
              return Object.keys(e);
            },
          });
        },
        Ra = Xr.getNode,
        Na = Xr.getNodeMaybe,
        La = Xr.recoilValuesForKeys,
        Oa = _a.RetentionZone,
        Aa = Ea,
        Pa = Object.freeze(new Set()),
        ja = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(E(Error));
      function Ma(e, t, n, r) {
        var a = e.getState();
        if (!a.nodeCleanupFunctions.has(n)) {
          var o = Ra(n),
            i = (function (e, t, n) {
              if (!_r("recoil_memory_managament_2020")) return function () {};
              var r = e.getState().retention.nodesRetainedByZone;
              function a(e) {
                var n = r.get(e);
                n || r.set(e, (n = new Set())), n.add(t);
              }
              if (n instanceof Oa) a(n);
              else if (Array.isArray(n)) {
                var o,
                  i = x(n);
                try {
                  for (i.s(); !(o = i.n()).done; ) a(o.value);
                } catch (l) {
                  i.e(l);
                } finally {
                  i.f();
                }
              }
              return function () {
                if (_r("recoil_memory_managament_2020")) {
                  var r = e.getState().retention;
                  if (n instanceof Oa) i(n);
                  else if (Array.isArray(n)) {
                    var a,
                      o = x(n);
                    try {
                      for (o.s(); !(a = o.n()).done; ) i(a.value);
                    } catch (l) {
                      o.e(l);
                    } finally {
                      o.f();
                    }
                  }
                }
                function i(e) {
                  var n = r.nodesRetainedByZone.get(e);
                  null === n || void 0 === n || n.delete(t),
                    n && 0 === n.size && r.nodesRetainedByZone.delete(e);
                }
              };
            })(e, n, o.retainedBy),
            l = o.init(e, t, r);
          a.nodeCleanupFunctions.set(n, function () {
            l(), i();
          });
        }
      }
      function Da(e, t, n) {
        return Ra(n).peek(e, t);
      }
      function za(e, t, n) {
        for (
          var r = new Set(),
            a = Array.from(n),
            o = e.getGraph(t.version),
            i = a.pop();
          i;
          i = a.pop()
        ) {
          var l;
          r.add(i);
          var u,
            s = x(
              null !== (l = o.nodeToNodeSubscriptions.get(i)) && void 0 !== l
                ? l
                : Pa
            );
          try {
            for (s.s(); !(u = s.n()).done; ) {
              var c = u.value;
              r.has(c) || a.push(c);
            }
          } catch (f) {
            s.e(f);
          } finally {
            s.f();
          }
        }
        return r;
      }
      var Ua = function (e, t, n) {
          return Ma(e, t, n, "get"), Ra(n).get(e, t);
        },
        Fa = Da,
        Ia = function (e, t, n, r) {
          var a = Ra(n);
          if (null == a.set)
            throw new ja("Attempt to set read-only RecoilValue: ".concat(n));
          var o = a.set;
          return Ma(e, t, n, "set"), o(e, t, r);
        },
        Va = function (e, t, n) {
          Ma(e, e.getState().currentTree, t, n);
        },
        Ba = function (e, t) {
          var n,
            r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        Wa = function (e, t, n) {
          var r,
            a = Na(t);
          return (
            null === a ||
              void 0 === a ||
              null === (r = a.invalidate) ||
              void 0 === r ||
              r.call(a, e),
            Hn(
              Hn({}, e),
              {},
              {
                atomValues: e.atomValues.clone().delete(t),
                nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                dirtyAtoms: Aa(e.dirtyAtoms, t),
              }
            )
          );
        },
        Ha = function (e, t, n) {
          var r = e.getState(),
            a = e.getGraph(t.version),
            o = Ra(n).nodeType;
          return Ca(
            { type: o },
            {
              loadable: function () {
                return Da(e, t, n);
              },
              isActive: function () {
                return r.knownAtoms.has(n) || r.knownSelectors.has(n);
              },
              isSet: function () {
                return "selector" !== o && t.atomValues.has(n);
              },
              isModified: function () {
                return t.dirtyAtoms.has(n);
              },
              deps: function () {
                var e;
                return La(
                  null !== (e = a.nodeDeps.get(n)) && void 0 !== e ? e : []
                );
              },
              subscribers: function () {
                var a, o;
                return {
                  nodes: La(
                    Ta(za(e, t, new Set([n])), function (e) {
                      return e !== n;
                    })
                  ),
                  components: Hr(
                    null !==
                      (a =
                        null === (o = r.nodeToComponentSubscriptions.get(n)) ||
                        void 0 === o
                          ? void 0
                          : o.values()) && void 0 !== a
                      ? a
                      : [],
                    function (e) {
                      return { name: k(e, 1)[0] };
                    }
                  ),
                };
              },
            }
          );
        },
        $a = za,
        Ka = null;
      var qa = function (e) {
          Ka = e;
        },
        Qa = function () {
          var e;
          null === (e = Ka) || void 0 === e || e();
        },
        Ga = $a,
        Ya = Ua,
        Ja = Ia,
        Xa = ma,
        Za = Xr.getNode,
        eo = Xr.getNodeMaybe,
        to = Xr.DefaultValue,
        no = Pr.reactMode,
        ro = Br.AbstractRecoilValue,
        ao = Br.RecoilState,
        oo = Br.RecoilValueReadOnly,
        io = Br.isRecoilValue,
        lo = Qa;
      function uo(e, t, n) {
        if ("set" === n.type) {
          var r,
            a = n.recoilValue,
            o = (function (e, t, n, r) {
              var a = n.key;
              if ("function" === typeof r) {
                var o = Ya(e, t, a);
                if ("loading" === o.state) {
                  var i = 'Tried to set atom or selector "'.concat(
                    a,
                    '" using an updater function while the current state is pending, this is not currently supported.'
                  );
                  throw (Rr(i), Yn(i));
                }
                if ("hasError" === o.state) throw o.contents;
                return r(o.contents);
              }
              return r;
            })(e, t, a, n.valueOrUpdater),
            i = x(Ja(e, t, a.key, o).entries());
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var l = k(r.value, 2);
              so(t, l[0], l[1]);
            }
          } catch (p) {
            i.e(p);
          } finally {
            i.f();
          }
        } else if ("setLoadable" === n.type) {
          so(t, n.recoilValue.key, n.loadable);
        } else if ("markModified" === n.type) {
          var u = n.recoilValue.key;
          t.dirtyAtoms.add(u);
        } else if ("setUnvalidated" === n.type) {
          var s,
            c = n.recoilValue.key,
            f = n.unvalidatedValue,
            d = eo(c);
          null === d ||
            void 0 === d ||
            null === (s = d.invalidate) ||
            void 0 === s ||
            s.call(d, t),
            t.atomValues.delete(c),
            t.nonvalidatedAtoms.set(c, f),
            t.dirtyAtoms.add(c);
        } else Rr("Unknown action ".concat(n.type));
      }
      function so(e, t, n) {
        "hasValue" === n.state && n.contents instanceof to
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function co(e, t) {
        e.replaceState(function (n) {
          var r,
            a = ho(n),
            o = x(t);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var i = r.value;
              uo(e, a, i);
            }
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
          return vo(e, a), lo(), a;
        });
      }
      function fo(e, t) {
        if (po.length) {
          var n = po[po.length - 1],
            r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else co(e, [t]);
      }
      var po = [];
      function ho(e) {
        return Hn(
          Hn({}, e),
          {},
          {
            atomValues: e.atomValues.clone(),
            nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
            dirtyAtoms: new Set(e.dirtyAtoms),
          }
        );
      }
      function vo(e, t) {
        var n,
          r = x(Ga(e, t, t.dirtyAtoms));
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a,
              o,
              i = n.value;
            null === (a = eo(i)) ||
              void 0 === a ||
              null === (o = a.invalidate) ||
              void 0 === o ||
              o.call(a, t);
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      function mo(e, t, n) {
        fo(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      var yo = {
        RecoilValueReadOnly: oo,
        AbstractRecoilValue: ro,
        RecoilState: ao,
        getRecoilValueAsLoadable: function (e, t) {
          var n,
            r,
            a = t.key,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree,
            i = e.getState();
          o.version !== i.currentTree.version &&
            o.version !==
              (null === (n = i.nextTree) || void 0 === n
                ? void 0
                : n.version) &&
            o.version !==
              (null === (r = i.previousTree) || void 0 === r
                ? void 0
                : r.version) &&
            Rr("Tried to read from a discarded tree");
          var l = Ya(e, o, a);
          return "loading" === l.state && l.contents.catch(function () {}), l;
        },
        setRecoilValue: mo,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof to) return mo(e, t, n);
          fo(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          fo(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          fo(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, t, n) {
          var r = t.key,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            o = Xa(),
            i = e.getState();
          i.nodeToComponentSubscriptions.has(r) ||
            i.nodeToComponentSubscriptions.set(r, new Map()),
            Xn(i.nodeToComponentSubscriptions.get(r)).set(o, [
              null !== a && void 0 !== a ? a : "<not captured>",
              n,
            ]);
          var l = no();
          if (l.early && ("LEGACY" === l.mode || "MUTABLE_SOURCE" === l.mode)) {
            var u = e.getState().nextTree;
            u && u.dirtyAtoms.has(r) && n(u);
          }
          return {
            release: function () {
              var t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(o)
                ? (n.delete(o),
                  0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : Rr(
                    "Subscription missing at release time for atom ".concat(
                      r,
                      ". This is a bug in Recoil."
                    )
                  );
            },
          };
        },
        isRecoilValue: io,
        applyAtomValueWrites: function (e, t) {
          var n = e.clone();
          return (
            t.forEach(function (e, t) {
              "hasValue" === e.state && e.contents instanceof to
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          var e = new Map();
          return (
            po.push(e),
            function () {
              var t,
                n = x(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = k(t.value, 2);
                  co(r[0], r[1]);
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              po.pop() !== e && Rr("Incorrect order of batch popping");
            }
          );
        },
        writeLoadableToTreeState: so,
        invalidateDownstreams: vo,
        copyTreeState: ho,
        refreshRecoilValue: function (e, t) {
          var n,
            r = e.getState().currentTree,
            a = Za(t.key);
          null === (n = a.clearCache) || void 0 === n || n.call(a, e, r);
        },
      };
      var go = function (e, t, n) {
          for (var r = e.entries(), a = r.next(); !a.done; ) {
            var o = a.value;
            if (t.call(n, o[1], o[0], e)) return !0;
            a = r.next();
          }
          return !1;
        },
        bo = Ba,
        wo = Xr.deleteNodeConfigIfPossible,
        So = Xr.getNode,
        ko = _a.RetentionZone,
        _o = new Set();
      function Eo(e, t) {
        var n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          Rr(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        else {
          var a,
            o = new Set(),
            i = x(t);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var l = a.value;
              if (l instanceof ko) {
                var u,
                  s = x(To(n, l));
                try {
                  for (s.s(); !(u = s.n()).done; ) {
                    var c = u.value;
                    o.add(c);
                  }
                } catch (h) {
                  s.e(h);
                } finally {
                  s.f();
                }
              } else o.add(l);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
          var f,
            d = (function (e, t) {
              var n = e.getState(),
                r = n.currentTree,
                a = e.getGraph(r.version),
                o = new Set(),
                i = new Set();
              return l(t), o;
              function l(t) {
                var u,
                  s = new Set(),
                  c = (function (e, t, n, r, a) {
                    var o = e.getGraph(t.version),
                      i = [],
                      l = new Set();
                    for (; n.size > 0; ) u(Xn(n.values().next().value));
                    return i;
                    function u(e) {
                      if (r.has(e) || a.has(e)) n.delete(e);
                      else if (!l.has(e)) {
                        var t = o.nodeToNodeSubscriptions.get(e);
                        if (t) {
                          var s,
                            c = x(t);
                          try {
                            for (c.s(); !(s = c.n()).done; ) {
                              u(s.value);
                            }
                          } catch (h) {
                            c.e(h);
                          } finally {
                            c.f();
                          }
                        }
                        l.add(e), n.delete(e), i.push(e);
                      }
                    }
                  })(e, r, t, o, i),
                  f = x(c);
                try {
                  for (f.s(); !(u = f.n()).done; ) {
                    var d,
                      p = u.value;
                    if ("recoilRoot" !== So(p).retainedBy)
                      if (
                        (null !== (d = n.retention.referenceCounts.get(p)) &&
                        void 0 !== d
                          ? d
                          : 0) > 0
                      )
                        i.add(p);
                      else if (
                        Co(p).some(function (e) {
                          return n.retention.referenceCounts.get(e);
                        })
                      )
                        i.add(p);
                      else {
                        var v = a.nodeToNodeSubscriptions.get(p);
                        v &&
                        go(v, function (e) {
                          return i.has(e);
                        })
                          ? i.add(p)
                          : (o.add(p), s.add(p));
                      }
                    else i.add(p);
                  }
                } catch (h) {
                  f.e(h);
                } finally {
                  f.f();
                }
                var m,
                  y = new Set(),
                  g = x(s);
                try {
                  for (g.s(); !(m = g.n()).done; ) {
                    var b,
                      w = m.value,
                      S = x(
                        null !== (k = a.nodeDeps.get(w)) && void 0 !== k
                          ? k
                          : _o
                      );
                    try {
                      for (S.s(); !(b = S.n()).done; ) {
                        var k,
                          _ = b.value;
                        o.has(_) || y.add(_);
                      }
                    } catch (h) {
                      S.e(h);
                    } finally {
                      S.f();
                    }
                  }
                } catch (h) {
                  g.e(h);
                } finally {
                  g.f();
                }
                y.size && l(y);
              }
            })(e, o),
            p = x(d);
          try {
            for (p.s(); !(f = p.n()).done; ) {
              xo(e, r, f.value);
            }
          } catch (h) {
            p.e(h);
          } finally {
            p.f();
          }
        }
      }
      function xo(e, t, n) {
        if (_r("recoil_memory_managament_2020")) {
          bo(e, n);
          var r = e.getState();
          r.knownAtoms.delete(n),
            r.knownSelectors.delete(n),
            r.nodeTransactionSubscriptions.delete(n),
            r.retention.referenceCounts.delete(n);
          var a,
            o = x(Co(n));
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i,
                l = a.value;
              null === (i = r.retention.nodesRetainedByZone.get(l)) ||
                void 0 === i ||
                i.delete(n);
            }
          } catch (h) {
            o.e(h);
          } finally {
            o.f();
          }
          t.atomValues.delete(n),
            t.dirtyAtoms.delete(n),
            t.nonvalidatedAtoms.delete(n);
          var u = r.graphsByVersion.get(t.version);
          if (u) {
            var s = u.nodeDeps.get(n);
            if (void 0 !== s) {
              u.nodeDeps.delete(n);
              var c,
                f = x(s);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var d,
                    p = c.value;
                  null === (d = u.nodeToNodeSubscriptions.get(p)) ||
                    void 0 === d ||
                    d.delete(n);
                }
              } catch (h) {
                f.e(h);
              } finally {
                f.f();
              }
            }
            u.nodeToNodeSubscriptions.delete(n);
          }
          wo(n);
        }
      }
      function To(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : _o;
      }
      function Co(e) {
        var t = So(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof ko
          ? [t]
          : t;
      }
      function Ro(e, t) {
        _r("recoil_memory_managament_2020") &&
          (e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            var n = e.getState();
            n.nextTree
              ? n.retention.retainablesToCheckForRelease.add(t)
              : Eo(e, new Set([t]));
          })(e, t));
      }
      var No = 12e4,
        Lo = function (e, t, n) {
          var r;
          if (_r("recoil_memory_managament_2020")) {
            var a = e.getState().retention.referenceCounts,
              o = (null !== (r = a.get(t)) && void 0 !== r ? r : 0) + n;
            0 === o ? Ro(e, t) : a.set(t, o);
          }
        },
        Oo = function (e) {
          if (_r("recoil_memory_managament_2020")) {
            var t = e.getState();
            Eo(e, t.retention.retainablesToCheckForRelease),
              t.retention.retainablesToCheckForRelease.clear();
          }
        },
        Ao = function (e) {
          return void 0 === e ? "recoilRoot" : e;
        },
        Po = $n.unstable_batchedUpdates,
        jo = yo.batchStart,
        Mo =
          {
            unstable_batchedUpdates: { unstable_batchedUpdates: Po }
              .unstable_batchedUpdates,
          }.unstable_batchedUpdates ||
          function (e) {
            return e();
          },
        Do = function (e) {
          Mo(function () {
            var t = function () {};
            try {
              (t = jo()), e();
            } finally {
              t();
            }
          });
        };
      function zo(e) {
        var t, n, r, a, o, i;
        return Vn().wrap(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  (t = x(e)), (l.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    l.next = 24;
                    break;
                  }
                  (r = n.value), (a = x(r)), (l.prev = 6), a.s();
                case 8:
                  if ((o = a.n()).done) {
                    l.next = 14;
                    break;
                  }
                  return (i = o.value), (l.next = 12), i;
                case 12:
                  l.next = 8;
                  break;
                case 14:
                  l.next = 19;
                  break;
                case 16:
                  (l.prev = 16), (l.t0 = l.catch(6)), a.e(l.t0);
                case 19:
                  return (l.prev = 19), a.f(), l.finish(19);
                case 22:
                  l.next = 3;
                  break;
                case 24:
                  l.next = 29;
                  break;
                case 26:
                  (l.prev = 26), (l.t1 = l.catch(1)), t.e(l.t1);
                case 29:
                  return (l.prev = 29), t.f(), l.finish(29);
                case 32:
                case "end":
                  return l.stop();
              }
          },
          Gn,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ]
        );
      }
      var Uo = zo,
        Fo = "undefined" === typeof Window || "undefined" === typeof window,
        Io =
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
        Vo = {
          isSSR: Fo,
          isReactNative: Io,
          isWindow: function (e) {
            return !Fo && (e === window || e instanceof Window);
          },
        };
      var Bo = function (e, t) {
          var n, r;
          return [
            function () {
              var a = t.apply(void 0, arguments);
              return n === a ? r : ((n = a), (r = e.apply(void 0, arguments)));
            },
            function () {
              n = null;
            },
          ];
        },
        Wo = Do,
        Ho = Va,
        $o = Ha,
        Ko = sa,
        qo = va,
        Qo = Xr.DEFAULT_VALUE,
        Go = Xr.recoilValues,
        Yo = Xr.recoilValuesForKeys,
        Jo = yo.AbstractRecoilValue,
        Xo = yo.getRecoilValueAsLoadable,
        Zo = yo.setRecoilValue,
        ei = yo.setUnvalidatedRecoilValue,
        ti = Lo,
        ni = qa,
        ri = Sa.getNextTreeStateVersion,
        ai = Sa.makeEmptyStoreState,
        oi = Vo.isSSR,
        ii = Bo,
        li = (function () {
          function e(t, n) {
            var r = this;
            s(this, e),
              Zn(this, "_store", void 0),
              Zn(this, "_refCount", 1),
              Zn(this, "getLoadable", function (e) {
                return r.checkRefCount_INTERNAL(), Xo(r._store, e);
              }),
              Zn(this, "getPromise", function (e) {
                return r.checkRefCount_INTERNAL(), r.getLoadable(e).toPromise();
              }),
              Zn(this, "getNodes_UNSTABLE", function (e) {
                if (
                  (r.checkRefCount_INTERNAL(),
                  !0 === (null === e || void 0 === e ? void 0 : e.isModified))
                ) {
                  if (
                    !1 ===
                    (null === e || void 0 === e ? void 0 : e.isInitialized)
                  )
                    return [];
                  var t = r._store.getState().currentTree;
                  return Yo(t.dirtyAtoms);
                }
                var n = r._store.getState().knownAtoms,
                  a = r._store.getState().knownSelectors;
                return null ==
                  (null === e || void 0 === e ? void 0 : e.isInitialized)
                  ? Go.values()
                  : !0 === e.isInitialized
                  ? Yo(Uo([n, a]))
                  : Ta(Go.values(), function (e) {
                      var t = e.key;
                      return !n.has(t) && !a.has(t);
                    });
              }),
              Zn(this, "getInfo_UNSTABLE", function (e) {
                var t = e.key;
                return (
                  r.checkRefCount_INTERNAL(),
                  $o(r._store, r._store.getState().currentTree, t)
                );
              }),
              Zn(this, "map", function (e) {
                r.checkRefCount_INTERNAL();
                var t = new di(r, Wo);
                return e(t), t;
              }),
              Zn(
                this,
                "asyncMap",
                (function () {
                  var e,
                    t =
                      ((e = Vn().mark(function e(t) {
                        var n;
                        return Vn().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  r.checkRefCount_INTERNAL(),
                                  (n = new di(r, Wo)).retain(),
                                  (e.next = 5),
                                  t(n)
                                );
                              case 5:
                                return (
                                  n.autoRelease_INTERNAL(),
                                  e.abrupt("return", n)
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })),
                      function () {
                        var t = this,
                          n = arguments;
                        return new Promise(function (r, a) {
                          var o = e.apply(t, n);
                          function i(e) {
                            In(o, r, a, i, l, "next", e);
                          }
                          function l(e) {
                            In(o, r, a, i, l, "throw", e);
                          }
                          i(void 0);
                        });
                      });
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              ),
              (this._store = {
                storeID: qo(),
                parentStoreID: n,
                getState: function () {
                  return t;
                },
                replaceState: function (e) {
                  t.currentTree = e(t.currentTree);
                },
                getGraph: function (e) {
                  var n = t.graphsByVersion;
                  if (n.has(e)) return Xn(n.get(e));
                  var r = Ko();
                  return n.set(e, r), r;
                },
                subscribeToTransactions: function () {
                  return { release: function () {} };
                },
                addTransactionMetadata: function () {
                  throw Yn("Cannot subscribe to Snapshots");
                },
              });
            var a,
              o = x(this._store.getState().knownAtoms);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                Ho(this._store, i, "get"), ti(this._store, i, 1);
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
            this.autoRelease_INTERNAL();
          }
          return (
            p(e, [
              {
                key: "retain",
                value: function () {
                  var e = this;
                  this._refCount <= 0 &&
                    Rr(
                      "Attempt to retain() Snapshot that was already released."
                    ),
                    this._refCount++;
                  var t = !1;
                  return function () {
                    t || ((t = !0), e._release());
                  };
                },
              },
              {
                key: "autoRelease_INTERNAL",
                value: function () {
                  var e = this;
                  oi ||
                    window.setTimeout(function () {
                      return e._release();
                    }, 10);
                },
              },
              {
                key: "_release",
                value: function () {
                  if ((this._refCount--, 0 === this._refCount)) {
                    if (
                      (this._store
                        .getState()
                        .nodeCleanupFunctions.forEach(function (e) {
                          return e();
                        }),
                      this._store.getState().nodeCleanupFunctions.clear(),
                      !_r("recoil_memory_managament_2020"))
                    )
                      return;
                  } else this._refCount;
                },
              },
              {
                key: "isRetained",
                value: function () {
                  return this._refCount > 0;
                },
              },
              {
                key: "checkRefCount_INTERNAL",
                value: function () {
                  _r("recoil_memory_managament_2020") && this._refCount;
                },
              },
              {
                key: "getStore_INTERNAL",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store;
                },
              },
              {
                key: "getID",
                value: function () {
                  return (
                    this.checkRefCount_INTERNAL(),
                    this._store.getState().currentTree.stateID
                  );
                },
              },
              {
                key: "getStoreID",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store.storeID;
                },
              },
            ]),
            e
          );
        })();
      function ui(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = e.getState(),
          a = n ? ri() : t.version;
        return {
          currentTree: {
            version: n ? a : t.version,
            stateID: n ? a : t.stateID,
            transactionMetadata: Hn({}, t.transactionMetadata),
            dirtyAtoms: new Set(t.dirtyAtoms),
            atomValues: t.atomValues.clone(),
            nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
          },
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(a, e.getGraph(t.version)),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(
            Hr(r.nodeCleanupFunctions.entries(), function (e) {
              return [k(e, 1)[0], function () {}];
            })
          ),
        };
      }
      var si = k(
          ii(
            function (e, t) {
              var n,
                r = e.getState(),
                a =
                  "latest" === t
                    ? null !== (n = r.nextTree) && void 0 !== n
                      ? n
                      : r.currentTree
                    : Xn(r.previousTree);
              return new li(ui(e, a), e.storeID);
            },
            function (e, t) {
              var n, r;
              return (
                String(t) +
                String(e.storeID) +
                String(
                  null === (n = e.getState().nextTree) || void 0 === n
                    ? void 0
                    : n.version
                ) +
                String(e.getState().currentTree.version) +
                String(
                  null === (r = e.getState().previousTree) || void 0 === r
                    ? void 0
                    : r.version
                )
              );
            }
          ),
          2
        ),
        ci = si[0],
        fi = si[1];
      ni(fi);
      var di = (function (e) {
          v(n, e);
          var t = b(n);
          function n(e, r) {
            var a;
            return (
              s(this, n),
              Zn(
                g(
                  (a = t.call(
                    this,
                    ui(
                      e.getStore_INTERNAL(),
                      e.getStore_INTERNAL().getState().currentTree,
                      !0
                    ),
                    e.getStoreID()
                  ))
                ),
                "_batch",
                void 0
              ),
              Zn(g(a), "set", function (e, t) {
                a.checkRefCount_INTERNAL();
                var n = a.getStore_INTERNAL();
                a._batch(function () {
                  ti(n, e.key, 1), Zo(a.getStore_INTERNAL(), e, t);
                });
              }),
              Zn(g(a), "reset", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                a._batch(function () {
                  ti(t, e.key, 1), Zo(a.getStore_INTERNAL(), e, Qo);
                });
              }),
              Zn(g(a), "setUnvalidatedAtomValues_DEPRECATED", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                Wo(function () {
                  var n,
                    r = x(e.entries());
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var a = k(n.value, 2),
                        o = a[0],
                        i = a[1];
                      ti(t, o, 1), ei(t, new Jo(o), i);
                    }
                  } catch (l) {
                    r.e(l);
                  } finally {
                    r.f();
                  }
                });
              }),
              (a._batch = r),
              a
            );
          }
          return p(n);
        })(li),
        pi = {
          Snapshot: li,
          MutableSnapshot: di,
          freshSnapshot: function (e) {
            var t = new li(ai());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "latest",
              n = ci(e, t);
            return n.isRetained() ? n : (fi(), ci(e, t));
          },
        },
        hi = pi.Snapshot,
        vi = pi.MutableSnapshot,
        mi = pi.freshSnapshot,
        yi = pi.cloneSnapshot,
        gi = Object.freeze({
          __proto__: null,
          Snapshot: hi,
          MutableSnapshot: vi,
          freshSnapshot: mi,
          cloneSnapshot: yi,
        });
      var bi = function () {
          for (
            var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = 0, o = n; a < o.length; a++) {
            var i,
              l = x(o[a]);
            try {
              for (l.s(); !(i = l.n()).done; ) {
                var u = i.value;
                e.add(u);
              }
            } catch (s) {
              l.e(s);
            } finally {
              l.f();
            }
          }
          return e;
        },
        wi = t.useRef;
      var Si = function (e) {
          var t = wi(e);
          return (
            t.current === e && "function" === typeof e && (t.current = e()), t
          );
        },
        ki = Sa.getNextTreeStateVersion,
        _i = Sa.makeEmptyStoreState,
        Ei = Ba,
        xi = $a,
        Ti = Va,
        Ci = Ia,
        Ri = Wa,
        Ni = sa,
        Li = ua,
        Oi = va,
        Ai = Pr.createMutableSource,
        Pi = Pr.reactMode,
        ji = yo.applyAtomValueWrites,
        Mi = Oo,
        Di = gi.freshSnapshot,
        zi = t.useCallback,
        Ui = t.useContext,
        Fi = t.useEffect,
        Ii = t.useMemo,
        Vi = t.useRef,
        Bi = t.useState;
      function Wi() {
        throw Yn(
          "This component must be used inside a <RecoilRoot> component."
        );
      }
      var Hi = Object.freeze({
          storeID: Oi(),
          getState: Wi,
          replaceState: Wi,
          getGraph: Wi,
          subscribeToTransactions: Wi,
          addTransactionMetadata: Wi,
        }),
        $i = !1;
      function Ki(e) {
        if ($i)
          throw Yn(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        var t = e.getState();
        if (null === t.nextTree) {
          _r("recoil_memory_managament_2020") &&
            _r("recoil_release_on_cascading_update_killswitch_2021") &&
            t.commitDepth > 0 &&
            Mi(e);
          var n = t.currentTree.version,
            r = ki();
          (t.nextTree = Hn(
            Hn({}, t.currentTree),
            {},
            {
              version: r,
              stateID: r,
              dirtyAtoms: new Set(),
              transactionMetadata: {},
            }
          )),
            t.graphsByVersion.set(r, Li(Xn(t.graphsByVersion.get(n))));
        }
      }
      var qi = t.createContext({ current: Hi }),
        Qi = function () {
          return Ui(qi);
        },
        Gi = t.createContext(null);
      function Yi(e, t, n) {
        var r,
          a = x(xi(e, n, n.dirtyAtoms));
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var o = r.value,
              i = t.nodeToComponentSubscriptions.get(o);
            if (i) {
              var l,
                u = x(i);
              try {
                for (u.s(); !(l = u.n()).done; ) {
                  var s = k(l.value, 2),
                    c = (s[0], k(s[1], 2));
                  c[0];
                  (0, c[1])(n);
                }
              } catch (f) {
                u.e(f);
              } finally {
                u.f();
              }
            }
          }
        } catch (f) {
          a.e(f);
        } finally {
          a.f();
        }
      }
      function Ji(e) {
        var t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          var a,
            o = x(t.nodeTransactionSubscriptions);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i = k(a.value, 2),
                l = i[0],
                u = i[1];
              if (r.has(l)) {
                var s,
                  c = x(u);
                try {
                  for (c.s(); !(s = c.n()).done; ) {
                    var f = k(s.value, 2);
                    f[0];
                    (0, f[1])(e);
                  }
                } catch (v) {
                  c.e(v);
                } finally {
                  c.f();
                }
              }
            }
          } catch (v) {
            o.e(v);
          } finally {
            o.f();
          }
          var d,
            p = x(t.transactionSubscriptions);
          try {
            for (p.s(); !(d = p.n()).done; ) {
              var h = k(d.value, 2);
              h[0];
              (0, h[1])(e);
            }
          } catch (v) {
            p.e(v);
          } finally {
            p.f();
          }
          (!Pi().early || t.suspendedComponentResolvers.size > 0) &&
            (Yi(e, t, n),
            t.suspendedComponentResolvers.forEach(function (e) {
              return e();
            }),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach(function (e) {
          return e(n);
        }),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function Xi(e) {
        var t = e.setNotifyBatcherOfChange,
          n = Qi(),
          r = k(Bi([]), 2)[1];
        return (
          t(function () {
            return r({});
          }),
          Fi(
            function () {
              return (
                t(function () {
                  return r({});
                }),
                function () {
                  t(function () {});
                }
              );
            },
            [t]
          ),
          Fi(function () {
            Zr.enqueueExecution("Batcher", function () {
              !(function (e) {
                var t = e.getState();
                t.commitDepth++;
                try {
                  var n = t.nextTree;
                  if (null == n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    Ji(e),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : Rr(
                          "Ended batch with no previous state, which is unexpected",
                          "recoil"
                        ),
                    (t.previousTree = null),
                    _r("recoil_memory_managament_2020") && null == n && Mi(e);
                } finally {
                  t.commitDepth--;
                }
              })(n.current);
            });
          }),
          null
        );
      }
      var Zi = 0;
      function el(e) {
        var n,
          r = e.initializeState_DEPRECATED,
          a = e.initializeState,
          o = e.store_INTERNAL,
          i = e.children,
          l = function (e) {
            var t = n.current.graphsByVersion;
            if (t.has(e)) return Xn(t.get(e));
            var r = Ni();
            return t.set(e, r), r;
          },
          u = function (e, t) {
            if (null == t) {
              var n = p.current.getState().transactionSubscriptions,
                r = Zi++;
              return (
                n.set(r, e),
                {
                  release: function () {
                    n.delete(r);
                  },
                }
              );
            }
            var a = p.current.getState().nodeTransactionSubscriptions;
            a.has(t) || a.set(t, new Map());
            var o = Zi++;
            return (
              Xn(a.get(t)).set(o, e),
              {
                release: function () {
                  var e = a.get(t);
                  e && (e.delete(o), 0 === e.size && a.delete(t));
                },
              }
            );
          },
          s = function (e) {
            Ki(p.current);
            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
              var r = n[t];
              Xn(p.current.getState().nextTree).transactionMetadata[r] = e[r];
            }
          },
          c = function (e) {
            Ki(p.current);
            var t,
              r = Xn(n.current.nextTree);
            try {
              ($i = !0), (t = e(r));
            } finally {
              $i = !1;
            }
            t !== r &&
              ((n.current.nextTree = t),
              Pi().early && Yi(p.current, n.current, t),
              Xn(f.current)());
          },
          f = Vi(null),
          d = zi(
            function (e) {
              f.current = e;
            },
            [f]
          ),
          p = Si(function () {
            return null !== o && void 0 !== o
              ? o
              : {
                  storeID: Oi(),
                  getState: function () {
                    return n.current;
                  },
                  replaceState: c,
                  getGraph: l,
                  subscribeToTransactions: u,
                  addTransactionMetadata: s,
                };
          });
        null != o && (p.current = o),
          (n = Si(function () {
            return null != r
              ? (function (e, t) {
                  var n = _i();
                  return (
                    t({
                      set: function (t, r) {
                        var a,
                          o = n.currentTree,
                          i = Ci(e, o, t.key, r),
                          l = new Set(i.keys()),
                          u = o.nonvalidatedAtoms.clone(),
                          s = x(l);
                        try {
                          for (s.s(); !(a = s.n()).done; ) {
                            var c = a.value;
                            u.delete(c);
                          }
                        } catch (f) {
                          s.e(f);
                        } finally {
                          s.f();
                        }
                        n.currentTree = Hn(
                          Hn({}, o),
                          {},
                          {
                            dirtyAtoms: bi(o.dirtyAtoms, l),
                            atomValues: ji(o.atomValues, i),
                            nonvalidatedAtoms: u,
                          }
                        );
                      },
                      setUnvalidatedAtomValues: function (e) {
                        e.forEach(function (e, t) {
                          n.currentTree = Ri(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(p.current, r)
              : null != a
              ? (function (e) {
                  var t = Di(e),
                    n = t.getStore_INTERNAL().getState();
                  return (
                    t.retain(),
                    n.nodeCleanupFunctions.forEach(function (e) {
                      return e();
                    }),
                    n.nodeCleanupFunctions.clear(),
                    n
                  );
                })(a)
              : _i();
          }));
        var h = Ii(
          function () {
            return null === Ai || void 0 === Ai
              ? void 0
              : Ai(n, function () {
                  return n.current.currentTree.version;
                });
          },
          [n]
        );
        return (
          Fi(
            function () {
              var e,
                t = p.current,
                n = x(new Set(t.getState().knownAtoms));
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  Ti(t, r, "get");
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              return function () {
                var e,
                  n = x(t.getState().knownAtoms);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    Ei(t, r);
                  }
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
              };
            },
            [p]
          ),
          t.createElement(
            qi.Provider,
            { value: p },
            t.createElement(
              Gi.Provider,
              { value: h },
              t.createElement(Xi, { setNotifyBatcherOfChange: d }),
              i
            )
          )
        );
      }
      var tl = function (e) {
          var n = e.override,
            r = Fn(e, Kn),
            a = Qi();
          return !1 === n && a.current !== Hi
            ? e.children
            : t.createElement(el, r);
        },
        nl = Qi,
        rl = function () {
          var e = Ui(Gi);
          return (
            null == e &&
              Wr(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        al = function () {
          return Qi().current.storeID;
        };
      var ol = function (e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n]) return !1;
          return !0;
        },
        il = t.useEffect,
        ll = t.useRef;
      var ul = function (e) {
          var t = ll();
          return (
            il(function () {
              t.current = e;
            }),
            t.current
          );
        },
        sl = nl,
        cl = No,
        fl = Lo,
        dl = _a.RetentionZone,
        pl = t.useEffect,
        hl = t.useRef,
        vl = Vo.isSSR;
      var ml = function (e) {
        if (_r("recoil_memory_managament_2020"))
          return (function (e) {
            var t = Array.isArray(e) ? e : [e],
              n = t.map(function (e) {
                return e instanceof dl ? e : e.key;
              }),
              r = sl();
            pl(function () {
              if (_r("recoil_memory_managament_2020")) {
                var e = r.current;
                if (a.current && !vl)
                  window.clearTimeout(a.current), (a.current = null);
                else {
                  var t,
                    o = x(n);
                  try {
                    for (o.s(); !(t = o.n()).done; ) {
                      var i = t.value;
                      fl(e, i, 1);
                    }
                  } catch (l) {
                    o.e(l);
                  } finally {
                    o.f();
                  }
                }
                return function () {
                  var t,
                    r = x(n);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var a = t.value;
                      fl(e, a, -1);
                    }
                  } catch (l) {
                    r.e(l);
                  } finally {
                    r.f();
                  }
                };
              }
            }, [r].concat(u(n)));
            var a = hl(),
              o = ul(n);
            if (!vl && (void 0 === o || !ol(o, n))) {
              var i,
                l = r.current,
                s = x(n);
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  var c = i.value;
                  fl(l, c, 1);
                }
              } catch (h) {
                s.e(h);
              } finally {
                s.f();
              }
              if (o) {
                var f,
                  d = x(o);
                try {
                  for (d.s(); !(f = d.n()).done; ) {
                    var p = f.value;
                    fl(l, p, -1);
                  }
                } catch (h) {
                  d.e(h);
                } finally {
                  d.f();
                }
              }
              a.current && window.clearTimeout(a.current),
                (a.current = window.setTimeout(function () {
                  a.current = null;
                  var e,
                    t = x(n);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var r = e.value;
                      fl(l, r, -1);
                    }
                  } catch (h) {
                    t.e(h);
                  } finally {
                    t.f();
                  }
                }, cl));
            }
          })(e);
      };
      var yl = function () {
          return "<component name not available>";
        },
        gl = Xr.DEFAULT_VALUE,
        bl = Pr.currentRendererSupportsUseSyncExternalStore,
        wl = Pr.reactMode,
        Sl = Pr.useMutableSource,
        kl = Pr.useSyncExternalStore,
        _l = rl,
        El = nl,
        xl = (Br.isRecoilValue, yo.getRecoilValueAsLoadable),
        Tl = yo.setRecoilValue,
        Cl = yo.subscribeToRecoilValue,
        Rl = t.useCallback,
        Nl = t.useEffect,
        Ll = t.useMemo,
        Ol = t.useRef,
        Al = t.useState,
        Pl = Vo.isSSR;
      function jl(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state)
          throw new Promise(function (t) {
            var r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              Pl &&
                Jn(e.contents) &&
                e.contents.finally(function () {
                  r.delete(t);
                });
          });
        throw "hasError" === e.state
          ? e.contents
          : Yn('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function Ml(e) {
        var t = El(),
          n = yl(),
          r = Rl(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  wl().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return { loadable: xl(r, e, o), key: e.key };
            },
            [t, e]
          ),
          a = Rl(function (e) {
            var t;
            return function () {
              var n,
                r,
                a = e();
              return null !== (n = t) &&
                void 0 !== n &&
                n.loadable.is(a.loadable) &&
                (null === (r = t) || void 0 === r ? void 0 : r.key) === a.key
                ? t
                : ((t = a), a);
            };
          }, []),
          o = Ll(
            function () {
              return a(r);
            },
            [r, a]
          ),
          i = Rl(
            function (r) {
              var a = t.current;
              return Cl(a, e, r, n).release;
            },
            [t, e, n]
          );
        return kl(i, o, o).loadable;
      }
      function Dl(e) {
        var t = El(),
          n = Rl(
            function () {
              var n,
                r = t.current,
                a = r.getState(),
                o =
                  wl().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return xl(r, e, o);
            },
            [t, e]
          ),
          r = Rl(
            function () {
              return n();
            },
            [n]
          ),
          a = yl(),
          o = Rl(
            function (r, o) {
              var i = t.current;
              return Cl(
                i,
                e,
                function () {
                  if (!_r("recoil_suppress_rerender_in_callback")) return o();
                  var e = n();
                  u.current.is(e) || o(), (u.current = e);
                },
                a
              ).release;
            },
            [t, e, a, n]
          ),
          i = _l();
        if (null == i)
          throw Yn(
            "Recoil hooks must be used in components contained within a <RecoilRoot> component."
          );
        var l = Sl(i, r, o),
          u = Ol(l);
        return (
          Nl(function () {
            u.current = l;
          }),
          l
        );
      }
      function zl(e) {
        var t = El(),
          n = yl(),
          r = Rl(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  wl().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return xl(r, e, o);
            },
            [t, e]
          ),
          a = Rl(
            function () {
              return { loadable: r(), key: e.key };
            },
            [r, e.key]
          ),
          o = Rl(
            function (e) {
              var t = a();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [a]
          );
        Nl(
          function () {
            var r = Cl(
              t.current,
              e,
              function (e) {
                u(o);
              },
              n
            );
            return u(o), r.release;
          },
          [n, e, t, o]
        );
        var i = k(Al(a), 2),
          l = i[0],
          u = i[1];
        return l.key !== e.key ? a().loadable : l.loadable;
      }
      function Ul(e) {
        var t = El(),
          n = k(Al([]), 2)[1],
          r = yl(),
          a = Rl(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  wl().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return xl(r, e, o);
            },
            [t, e]
          ),
          o = a(),
          i = Ol(o);
        return (
          Nl(function () {
            i.current = o;
          }),
          Nl(
            function () {
              var o = t.current,
                l = o.getState(),
                u = Cl(
                  o,
                  e,
                  function (e) {
                    var t;
                    if (!_r("recoil_suppress_rerender_in_callback"))
                      return n([]);
                    var r = a();
                    (null !== (t = i.current) && void 0 !== t && t.is(r)) ||
                      n(r),
                      (i.current = r);
                  },
                  r
                );
              if (l.nextTree)
                o.getState().queuedComponentCallbacks_DEPRECATED.push(
                  function () {
                    (i.current = null), n([]);
                  }
                );
              else {
                var s;
                if (!_r("recoil_suppress_rerender_in_callback")) return n([]);
                var c = a();
                (null !== (s = i.current) && void 0 !== s && s.is(c)) || n(c),
                  (i.current = c);
              }
              return u.release;
            },
            [r, a, e, t]
          ),
          o
        );
      }
      function Fl(e) {
        return (
          _r("recoil_memory_managament_2020") && ml(e),
          {
            TRANSITION_SUPPORT: zl,
            SYNC_EXTERNAL_STORE: bl() ? Ml : zl,
            MUTABLE_SOURCE: Dl,
            LEGACY: Ul,
          }[wl().mode](e)
        );
      }
      function Il(e) {
        var t = El();
        return jl(Fl(e), e, t);
      }
      function Vl(e) {
        var t = El();
        return Rl(
          function (n) {
            Tl(t.current, e, n);
          },
          [t, e]
        );
      }
      function Bl(e) {
        return _r("recoil_memory_managament_2020") && ml(e), zl(e);
      }
      function Wl(e) {
        var t = El();
        return jl(Bl(e), e, t);
      }
      var Hl = function (e) {
          return [Il(e), Vl(e)];
        },
        $l = function (e) {
          return [Fl(e), Vl(e)];
        },
        Kl = Il,
        ql = Fl,
        Ql = function (e) {
          var t = El();
          return Rl(
            function () {
              Tl(t.current, e, gl);
            },
            [t, e]
          );
        },
        Gl = Vl,
        Yl = Bl,
        Jl = Wl,
        Xl = function (e) {
          return [Wl(e), Vl(e)];
        };
      var Zl = Do,
        eu = Xr.DEFAULT_VALUE,
        tu = Xr.getNode,
        nu = nl,
        ru = yo.AbstractRecoilValue,
        au = yo.setRecoilValueLoadable,
        ou = No,
        iu = gi.cloneSnapshot,
        lu = t.useCallback,
        uu = t.useEffect,
        su = t.useRef,
        cu = t.useState,
        fu = Vo.isSSR;
      function du(e) {
        var t = nu();
        uu(
          function () {
            return t.current.subscribeToTransactions(e).release;
          },
          [e, t]
        );
      }
      function pu(e, t) {
        var n,
          r = e.getState(),
          a = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
          o = t.getStore_INTERNAL().getState().currentTree;
        Zl(function () {
          for (
            var n = new Set(),
              r = 0,
              i = [a.atomValues.keys(), o.atomValues.keys()];
            r < i.length;
            r++
          ) {
            var l,
              u = x(i[r]);
            try {
              for (u.s(); !(l = u.n()).done; ) {
                var s,
                  c,
                  f = l.value;
                (null === (s = a.atomValues.get(f)) || void 0 === s
                  ? void 0
                  : s.contents) !==
                  (null === (c = o.atomValues.get(f)) || void 0 === c
                    ? void 0
                    : c.contents) &&
                  tu(f).shouldRestoreFromSnapshots &&
                  n.add(f);
              }
            } catch (d) {
              u.e(d);
            } finally {
              u.f();
            }
          }
          n.forEach(function (t) {
            au(
              e,
              new ru(t),
              o.atomValues.has(t) ? Xn(o.atomValues.get(t)) : eu
            );
          }),
            e.replaceState(function (e) {
              return Hn(Hn({}, e), {}, { stateID: t.getID() });
            });
        });
      }
      var hu = function () {
          var e = nu(),
            t = k(
              cu(function () {
                return iu(e.current);
              }),
              2
            ),
            n = t[0],
            r = t[1],
            a = ul(n),
            o = su(),
            i = su();
          if (
            (du(
              lu(function (e) {
                return r(iu(e));
              }, [])
            ),
            uu(
              function () {
                var e,
                  t = n.retain();
                o.current &&
                  !fu &&
                  (window.clearTimeout(o.current),
                  (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null));
                return function () {
                  window.setTimeout(t, 10);
                };
              },
              [n]
            ),
            a !== n && !fu)
          ) {
            var l;
            if (o.current)
              window.clearTimeout(o.current),
                (o.current = null),
                null === (l = i.current) || void 0 === l || l.call(i),
                (i.current = null);
            (i.current = n.retain()),
              (o.current = window.setTimeout(function () {
                var e;
                (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null);
              }, ou));
          }
          return n;
        },
        vu = pu,
        mu = function () {
          var e = nu();
          return lu(
            function (t) {
              return pu(e.current, t);
            },
            [e]
          );
        },
        yu = function (e) {
          du(
            lu(
              function (t) {
                var n = iu(t, "latest"),
                  r = iu(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        gu = Ha,
        bu = nl;
      var wu = function () {
          var e = bu();
          return function (t) {
            var n = t.key;
            return gu(e.current, e.current.getState().currentTree, n);
          };
        },
        Su = Pr.reactMode,
        ku = tl,
        _u = nl,
        Eu = t.useMemo;
      var xu = function () {
          "MUTABLE_SOURCE" === Su().mode &&
            console.warn(
              "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
            );
          var e = _u().current;
          return Eu(
            function () {
              return function (n) {
                var r = n.children;
                return t.createElement(ku, { store_INTERNAL: e }, r);
              };
            },
            [e]
          );
        },
        Tu = br.loadableWithValue,
        Cu = Va,
        Ru = Xr.DEFAULT_VALUE,
        Nu = Xr.getNode,
        Lu = yo.copyTreeState,
        Ou = yo.getRecoilValueAsLoadable,
        Au = yo.invalidateDownstreams,
        Pu = yo.writeLoadableToTreeState;
      function ju(e) {
        return "atom" === Nu(e.key).nodeType;
      }
      var Mu = (function () {
        function e(t, n) {
          var r = this;
          s(this, e),
            Zn(this, "_store", void 0),
            Zn(this, "_treeState", void 0),
            Zn(this, "_changes", void 0),
            Zn(this, "get", function (e) {
              if (r._changes.has(e.key)) return r._changes.get(e.key);
              if (!ju(e))
                throw Yn(
                  "Reading selectors within atomicUpdate is not supported"
                );
              var t = Ou(r._store, e, r._treeState);
              if ("hasValue" === t.state) return t.contents;
              throw "hasError" === t.state
                ? t.contents
                : Yn(
                    "Expected Recoil atom ".concat(
                      e.key,
                      " to have a value, but it is in a loading state."
                    )
                  );
            }),
            Zn(this, "set", function (e, t) {
              if (!ju(e))
                throw Yn(
                  "Setting selectors within atomicUpdate is not supported"
                );
              if ("function" === typeof t) {
                var n = r.get(e);
                r._changes.set(e.key, t(n));
              } else Cu(r._store, e.key, "set"), r._changes.set(e.key, t);
            }),
            Zn(this, "reset", function (e) {
              r.set(e, Ru);
            }),
            (this._store = t),
            (this._treeState = n),
            (this._changes = new Map());
        }
        return (
          p(e, [
            {
              key: "newTreeState_INTERNAL",
              value: function () {
                if (0 === this._changes.size) return this._treeState;
                var e,
                  t = Lu(this._treeState),
                  n = x(this._changes);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = k(e.value, 2),
                      a = r[0],
                      o = r[1];
                    Pu(t, a, Tu(o));
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                return Au(this._store, t), t;
              },
            },
          ]),
          e
        );
      })();
      var Du = function (e) {
          return function (t) {
            e.replaceState(function (n) {
              var r = new Mu(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        zu = Object.freeze({ __proto__: null, atomicUpdater: Du });
      var Uu = function (e, t) {
          if (!e) throw new Error(t);
        },
        Fu = zu.atomicUpdater,
        Iu = Do,
        Vu = Xr.DEFAULT_VALUE,
        Bu = nl,
        Wu = yo.refreshRecoilValue,
        Hu = yo.setRecoilValue,
        $u = gi.cloneSnapshot,
        Ku = vu,
        qu = t.useCallback,
        Qu = p(function e() {
          s(this, e);
        }),
        Gu = new Qu();
      function Yu(e, t, n, r) {
        var a,
          o,
          i = Gu;
        (Iu(function () {
          var o =
            "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
          if ("function" !== typeof t) throw Yn(o);
          var l = Ca(
              Hn(
                Hn({}, null !== r && void 0 !== r ? r : {}),
                {},
                {
                  set: function (t, n) {
                    return Hu(e, t, n);
                  },
                  reset: function (t) {
                    return Hu(e, t, Vu);
                  },
                  refresh: function (t) {
                    return Wu(e, t);
                  },
                  gotoSnapshot: function (t) {
                    return Ku(e, t);
                  },
                  transact_UNSTABLE: function (t) {
                    return Fu(e)(t);
                  },
                }
              ),
              {
                snapshot: function () {
                  var t = $u(e);
                  return (a = t.retain()), t;
                },
              }
            ),
            s = t(l);
          if ("function" !== typeof s) throw Yn(o);
          i = s.apply(void 0, u(n));
        }),
        i instanceof Qu && Uu(!1),
        Jn(i))
          ? (i = i.finally(function () {
              var e;
              null === (e = a) || void 0 === e || e();
            }))
          : null === (o = a) || void 0 === o || o();
        return i;
      }
      var Ju = Yu,
        Xu = function (e, t) {
          var n = Bu();
          return qu(
            function () {
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return Yu(n.current, e, r);
            },
            null != t ? [].concat(u(t), [n]) : void 0
          );
        },
        Zu = nl,
        es = yo.refreshRecoilValue,
        ts = t.useCallback;
      var ns = function (e) {
          var t = Zu();
          return ts(
            function () {
              var n = t.current;
              es(n, e);
            },
            [e, t]
          );
        },
        rs = zu.atomicUpdater,
        as = nl,
        os = t.useMemo;
      var is = function (e, t) {
          var n = as();
          return os(
            function () {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  r[a] = arguments[a];
                rs(n.current)(function (t) {
                  e(t).apply(void 0, r);
                });
              };
            },
            null != t ? [].concat(u(t), [n]) : void 0
          );
        },
        ls = {
          WrappedValue: p(function e(t) {
            s(this, e), Zn(this, "value", void 0), (this.value = t);
          }),
        }.WrappedValue,
        us = Object.freeze({ __proto__: null, WrappedValue: ls }),
        ss = Pr.isFastRefreshEnabled,
        cs = (function (e) {
          v(n, e);
          var t = b(n);
          function n() {
            return s(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(E(Error)),
        fs = (function () {
          function e(t) {
            var n, r, a;
            s(this, e),
              Zn(this, "_name", void 0),
              Zn(this, "_numLeafs", void 0),
              Zn(this, "_root", void 0),
              Zn(this, "_onHit", void 0),
              Zn(this, "_onSet", void 0),
              Zn(this, "_mapNodeValue", void 0),
              (this._name = null === t || void 0 === t ? void 0 : t.name),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (n = null === t || void 0 === t ? void 0 : t.onHit) &&
                void 0 !== n
                  ? n
                  : function () {}),
              (this._onSet =
                null !== (r = null === t || void 0 === t ? void 0 : t.onSet) &&
                void 0 !== r
                  ? r
                  : function () {}),
              (this._mapNodeValue =
                null !==
                  (a = null === t || void 0 === t ? void 0 : t.mapNodeValue) &&
                void 0 !== a
                  ? a
                  : function (e) {
                      return e;
                    });
          }
          return (
            p(e, [
              {
                key: "size",
                value: function () {
                  return this._numLeafs;
                },
              },
              {
                key: "root",
                value: function () {
                  return this._root;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  return null === (n = this.getLeafNode(e, t)) || void 0 === n
                    ? void 0
                    : n.value;
                },
              },
              {
                key: "getLeafNode",
                value: function (e, t) {
                  if (null != this._root)
                    for (var n = this._root; n; ) {
                      if (
                        (null === t || void 0 === t || t.onNodeVisit(n),
                        "leaf" === n.type)
                      )
                        return this._onHit(n), n;
                      var r = this._mapNodeValue(e(n.nodeKey));
                      n = n.branches.get(r);
                    }
                },
              },
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this,
                    a = function () {
                      var a,
                        o,
                        i,
                        l,
                        u,
                        s,
                        c,
                        f = x(e);
                      try {
                        for (f.s(); !(c = f.n()).done; ) {
                          var d,
                            p,
                            h,
                            v = k(c.value, 2),
                            m = v[0],
                            y = v[1],
                            g = r._root;
                          if (
                            "leaf" ===
                            (null === g || void 0 === g ? void 0 : g.type)
                          )
                            throw r.invalidCacheError();
                          var b = u;
                          if (
                            "branch" !==
                              (u =
                                null !== (d = u = b ? b.branches.get(s) : g) &&
                                void 0 !== d
                                  ? d
                                  : {
                                      type: "branch",
                                      nodeKey: m,
                                      parent: b,
                                      branches: new Map(),
                                      branchKey: s,
                                    }).type ||
                            u.nodeKey !== m
                          )
                            throw r.invalidCacheError();
                          null === b || void 0 === b || b.branches.set(s, u),
                            null === n ||
                              void 0 === n ||
                              null === (p = n.onNodeVisit) ||
                              void 0 === p ||
                              p.call(n, u),
                            (s = r._mapNodeValue(y)),
                            (r._root =
                              null !== (h = r._root) && void 0 !== h ? h : u);
                        }
                      } catch (_) {
                        f.e(_);
                      } finally {
                        f.f();
                      }
                      var w = u
                        ? null === (a = u) || void 0 === a
                          ? void 0
                          : a.branches.get(s)
                        : r._root;
                      if (null != w && ("leaf" !== w.type || w.branchKey !== s))
                        throw r.invalidCacheError();
                      var S = {
                        type: "leaf",
                        value: t,
                        parent: u,
                        branchKey: s,
                      };
                      null === (o = u) || void 0 === o || o.branches.set(s, S),
                        (r._root =
                          null !== (i = r._root) && void 0 !== i ? i : S),
                        r._numLeafs++,
                        r._onSet(S),
                        null === n ||
                          void 0 === n ||
                          null === (l = n.onNodeVisit) ||
                          void 0 === l ||
                          l.call(n, S);
                    };
                  try {
                    a();
                  } catch (o) {
                    if (!(o instanceof cs)) throw o;
                    this.clear(), a();
                  }
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = this.root();
                  if (!t) return !1;
                  if (e === t)
                    return (this._root = null), (this._numLeafs = 0), !0;
                  for (var n = e.parent, r = e.branchKey; n; ) {
                    var a;
                    if ((n.branches.delete(r), n === t))
                      return (
                        0 === n.branches.size
                          ? ((this._root = null), (this._numLeafs = 0))
                          : this._numLeafs--,
                        !0
                      );
                    if (n.branches.size > 0) break;
                    (r =
                      null === (a = n) || void 0 === a ? void 0 : a.branchKey),
                      (n = n.parent);
                  }
                  for (; n !== t; n = n.parent) if (null == n) return !1;
                  return this._numLeafs--, !0;
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._numLeafs = 0), (this._root = null);
                },
              },
              {
                key: "invalidCacheError",
                value: function () {
                  var e = ss()
                    ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
                    : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
                  throw (
                    (Rr(
                      e + (null != this._name ? " - ".concat(this._name) : "")
                    ),
                    new cs())
                  );
                },
              },
            ]),
            e
          );
        })(),
        ds = { TreeCache: fs }.TreeCache,
        ps = Object.freeze({ __proto__: null, TreeCache: ds }),
        hs = {
          LRUCache: (function () {
            function e(t) {
              var n;
              s(this, e),
                Zn(this, "_maxSize", void 0),
                Zn(this, "_size", void 0),
                Zn(this, "_head", void 0),
                Zn(this, "_tail", void 0),
                Zn(this, "_map", void 0),
                Zn(this, "_keyMapper", void 0),
                (this._maxSize = t.maxSize),
                (this._size = 0),
                (this._head = null),
                (this._tail = null),
                (this._map = new Map()),
                (this._keyMapper =
                  null !== (n = t.mapKey) && void 0 !== n
                    ? n
                    : function (e) {
                        return e;
                      });
            }
            return (
              p(e, [
                {
                  key: "head",
                  value: function () {
                    return this._head;
                  },
                },
                {
                  key: "tail",
                  value: function () {
                    return this._tail;
                  },
                },
                {
                  key: "size",
                  value: function () {
                    return this._size;
                  },
                },
                {
                  key: "maxSize",
                  value: function () {
                    return this._maxSize;
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(this._keyMapper(e));
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    var t = this._keyMapper(e),
                      n = this._map.get(t);
                    if (n) return this.set(e, n.value), n.value;
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    var n = this._keyMapper(e);
                    this._map.get(n) && this.delete(e);
                    var r = this.head(),
                      a = { key: e, right: r, left: null, value: t };
                    r ? (r.left = a) : (this._tail = a),
                      this._map.set(n, a),
                      (this._head = a),
                      this._size++,
                      this._maybeDeleteLRU();
                  },
                },
                {
                  key: "_maybeDeleteLRU",
                  value: function () {
                    this.size() > this.maxSize() && this.deleteLru();
                  },
                },
                {
                  key: "deleteLru",
                  value: function () {
                    var e = this.tail();
                    e && this.delete(e.key);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    var t = this._keyMapper(e);
                    if (this._size && this._map.has(t)) {
                      var n = Xn(this._map.get(t)),
                        r = n.right,
                        a = n.left;
                      r && (r.left = n.left),
                        a && (a.right = n.right),
                        n === this.head() && (this._head = r),
                        n === this.tail() && (this._tail = a),
                        this._map.delete(t),
                        this._size--;
                    }
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this._size = 0),
                      (this._head = null),
                      (this._tail = null),
                      (this._map = new Map());
                  },
                },
              ]),
              e
            );
          })(),
        }.LRUCache,
        vs = Object.freeze({ __proto__: null, LRUCache: hs }),
        ms = vs.LRUCache,
        ys = ps.TreeCache;
      var gs = function (e) {
        var t = e.name,
          n = e.maxSize,
          r = e.mapNodeValue,
          a =
            void 0 === r
              ? function (e) {
                  return e;
                }
              : r,
          o = new ms({ maxSize: n }),
          i = new ys({
            name: t,
            mapNodeValue: a,
            onHit: function (e) {
              o.set(e, !0);
            },
            onSet: function (e) {
              var t = o.tail();
              o.set(e, !0), t && i.size() > n && i.delete(t.key);
            },
          });
        return i;
      };
      function bs(e, t, n) {
        if ("string" === typeof e && !e.includes('"') && !e.includes("\\"))
          return '"'.concat(e, '"');
        switch (typeof e) {
          case "undefined":
            return "";
          case "boolean":
            return e ? "true" : "false";
          case "number":
          case "symbol":
            return String(e);
          case "string":
            return JSON.stringify(e);
          case "function":
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
              throw Yn("Attempt to serialize function in a Recoil cache key");
            return "__FUNCTION(".concat(e.name, ")__");
        }
        if (null === e) return "null";
        var r;
        if ("object" !== typeof e)
          return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (Jn(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return "[".concat(
            e.map(function (e, n) {
              return bs(e, t, n.toString());
            }),
            "]"
          );
        if ("function" === typeof e.toJSON) return bs(e.toJSON(n), t, n);
        if (e instanceof Map) {
          var a,
            o = {},
            i = x(e);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var l = k(a.value, 2),
                u = l[0],
                s = l[1];
              o["string" === typeof u ? u : bs(u, t)] = s;
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
          return bs(o, t, n);
        }
        return e instanceof Set
          ? bs(
              Array.from(e).sort(function (e, n) {
                return bs(e, t).localeCompare(bs(n, t));
              }),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" === typeof e[Symbol.iterator]
          ? bs(Array.from(e), t, n)
          : "{".concat(
              Object.keys(e)
                .filter(function (t) {
                  return void 0 !== e[t];
                })
                .sort()
                .map(function (n) {
                  return "".concat(bs(n, t), ":").concat(bs(e[n], t, n));
                })
                .join(","),
              "}"
            );
      }
      var ws = function (e) {
          return bs(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { allowFunctions: !1 }
          );
        },
        Ss = ps.TreeCache,
        ks = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
      var _s = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ks,
          t = e.equality,
          n = void 0 === t ? ks.equality : t,
          r = e.eviction,
          a = void 0 === r ? ks.eviction : r,
          o = e.maxSize,
          i = void 0 === o ? ks.maxSize : o,
          l = arguments.length > 1 ? arguments[1] : void 0,
          u = (function (e) {
            switch (e) {
              case "reference":
                return function (e) {
                  return e;
                };
              case "value":
                return function (e) {
                  return ws(e);
                };
            }
            throw Yn("Unrecognized equality policy ".concat(e));
          })(n);
        return (function (e, t, n, r) {
          switch (e) {
            case "keep-all":
              return new Ss({ name: r, mapNodeValue: n });
            case "lru":
              return gs({ name: r, maxSize: Xn(t), mapNodeValue: n });
            case "most-recent":
              return gs({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw Yn("Unrecognized eviction policy ".concat(e));
        })(a, i, u, l);
      };
      var Es = function (e) {
          return function () {
            return null;
          };
        },
        xs = br.isLoadable,
        Ts = br.loadableWithError,
        Cs = br.loadableWithPromise,
        Rs = br.loadableWithValue,
        Ns = us.WrappedValue,
        Ls = Ua,
        Os = Fa,
        As = Ia,
        Ps = ca,
        js = Xr.DEFAULT_VALUE,
        Ms = Xr.getConfigDeletionHandler,
        Ds = Xr.getNode,
        zs = Xr.registerNode,
        Us = Br.isRecoilValue,
        Fs = yo.markRecoilValueModified,
        Is = Ao,
        Vs = Ju,
        Bs = Es,
        Ws = p(function e() {
          s(this, e);
        }),
        Hs = new Ws(),
        $s = [],
        Ks = new Map(),
        qs = (function () {
          var e = 0;
          return function () {
            return e++;
          };
        })();
      function Qs(e) {
        var t = null,
          n = e.key,
          r = e.get,
          a = e.cachePolicy_UNSTABLE,
          o = null != e.set ? e.set : void 0;
        var i = new Set(),
          l = _s(
            null !== a && void 0 !== a
              ? a
              : { equality: "reference", eviction: "keep-all" },
            n
          ),
          u = Is(e.retainedBy_UNSTABLE),
          s = new Map(),
          c = 0;
        function f() {
          return !_r("recoil_memory_managament_2020") || c > 0;
        }
        function d(e) {
          return (
            e.getState().knownSelectors.add(n),
            c++,
            function () {
              c--;
            }
          );
        }
        function p() {
          return void 0 !== Ms(n) && !f();
        }
        function h(e, t, n, r, a) {
          N(t, r, a), v(e, n);
        }
        function v(e, t) {
          R(e, t) && C(e), m(t, !0);
        }
        function m(e, n) {
          var r = Ks.get(e);
          if (null != r) {
            var a,
              o = x(r);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                Fs(i, Xn(t));
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
            n && Ks.delete(e);
          }
        }
        function y(e, t) {
          var n = Ks.get(t);
          null == n && Ks.set(t, (n = new Set())), n.add(e);
        }
        function g(e, t, n, r, a, o) {
          return t
            .then(function (r) {
              if (!f()) throw (C(e), Hs);
              null != o.loadingDepKey && o.loadingDepPromise === t
                ? n.atomValues.set(o.loadingDepKey, Rs(r))
                : e.getState().knownSelectors.forEach(function (e) {
                    n.atomValues.delete(e);
                  });
              var i = S(e, n);
              if (i && "loading" !== i.state) {
                if (
                  ((R(e, a) || null == T(e)) && v(e, a), "hasValue" === i.state)
                )
                  return i.contents;
                throw i.contents;
              }
              if (!R(e, a)) {
                var l = E(e, n);
                if (null != l) return l.loadingLoadable.contents;
              }
              var u = k(w(e, n, a), 2),
                s = u[0],
                c = u[1];
              if (
                ("loading" !== s.state && h(e, n, a, s, c),
                "hasError" === s.state)
              )
                throw s.contents;
              return s.contents;
            })
            .catch(function (t) {
              if (t instanceof Ws) throw Hs;
              if (!f()) throw (C(e), Hs);
              var o = Ts(t);
              throw (h(e, n, a, o, r), t);
            });
        }
        function b(e, t, r, a) {
          var o, l, u, s, c, f, d;
          (R(e, a) ||
            t.version ===
              (null === (o = e.getState()) ||
              void 0 === o ||
              null === (l = o.currentTree) ||
              void 0 === l
                ? void 0
                : l.version) ||
            t.version ===
              (null === (u = e.getState()) ||
              void 0 === u ||
              null === (s = u.nextTree) ||
              void 0 === s
                ? void 0
                : s.version)) &&
            Ps(
              n,
              r,
              e,
              null !==
                (c =
                  null === (f = e.getState()) ||
                  void 0 === f ||
                  null === (d = f.nextTree) ||
                  void 0 === d
                    ? void 0
                    : d.version) && void 0 !== c
                ? c
                : e.getState().currentTree.version
            );
          var p,
            h = x(r);
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var v = p.value;
              i.add(v);
            }
          } catch (m) {
            h.e(m);
          } finally {
            h.f();
          }
        }
        function w(e, a, o) {
          var i,
            l,
            u = Bs(n),
            s = !0,
            c = !0,
            d = function () {
              u(), (c = !1);
            },
            p = !1,
            v = { loadingDepKey: null, loadingDepPromise: null },
            y = new Map();
          function w(t) {
            var n = t.key,
              r = Ls(e, a, n);
            switch (
              (y.set(n, r),
              s ||
                (b(e, a, new Set(y.keys()), o),
                (function (e, t) {
                  R(e, t) && (Xn(T(e)).stateVersions.clear(), m(t, !1));
                })(e, o)),
              r.state)
            ) {
              case "hasValue":
                return r.contents;
              case "hasError":
                throw r.contents;
              case "loading":
                throw (
                  ((v.loadingDepKey = n),
                  (v.loadingDepPromise = r.contents),
                  r.contents)
                );
            }
            throw Yn("Invalid Loadable state");
          }
          try {
            (i = r({
              get: w,
              getCallback: function (n) {
                return function () {
                  if (c)
                    throw Yn(
                      "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
                    );
                  null == t && Uu(!1);
                  for (
                    var r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return Vs(e, n, a, { node: t });
                };
              },
            })),
              (i = Us(i) ? w(i) : i),
              xs(i) && ("hasError" === i.state && (p = !0), (i = i.contents)),
              Jn(i)
                ? (i = (function (e, t, n, r, a, o) {
                    return t
                      .then(function (t) {
                        if (!f()) throw (C(e), Hs);
                        var o = Rs(t);
                        return h(e, n, a, o, r), t;
                      })
                      .catch(function (t) {
                        if (!f()) throw (C(e), Hs);
                        if (Jn(t)) return g(e, t, n, r, a, o);
                        var i = Ts(t);
                        throw (h(e, n, a, i, r), t);
                      });
                  })(e, i, a, y, o, v).finally(d))
                : d(),
              (i = i instanceof Ns ? i.value : i);
          } catch (S) {
            Jn((i = S))
              ? (i = g(e, i, a, y, o, v).finally(d))
              : ((p = !0), d());
          }
          return (
            (l = p ? Ts(i) : Jn(i) ? Cs(i) : Rs(i)),
            (s = !1),
            (function (e, t, n) {
              if (R(e, t)) {
                var r = T(e);
                null != r && (r.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, o, y),
            b(e, a, new Set(y.keys()), o),
            [l, y]
          );
        }
        function S(e, t) {
          var r = t.atomValues.get(n);
          if (null != r) return r;
          var a,
            o = new Set();
          try {
            r = l.get(
              function (n) {
                return "string" !== typeof n && Uu(!1), Ls(e, t, n).contents;
              },
              {
                onNodeVisit: function (e) {
                  "branch" === e.type && e.nodeKey !== n && o.add(e.nodeKey);
                },
              }
            );
          } catch (i) {
            throw Yn(
              'Problem with cache lookup for selector "'
                .concat(n, '": ')
                .concat(i.message)
            );
          }
          r &&
            (t.atomValues.set(n, r),
            b(
              e,
              t,
              o,
              null === (a = T(e)) || void 0 === a ? void 0 : a.executionID
            ));
          return r;
        }
        function _(e, t) {
          var n = S(e, t);
          if (null != n) return C(e), n;
          var r,
            a = E(e, t);
          if (null != a)
            return (
              "loading" ===
                (null === (r = a.loadingLoadable) || void 0 === r
                  ? void 0
                  : r.state) && y(e, a.executionID),
              a.loadingLoadable
            );
          var o = qs(),
            i = k(w(e, t, o), 2),
            l = i[0],
            u = i[1];
          return (
            "loading" === l.state
              ? (!(function (e, t, n, r, a) {
                  s.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[a.version, !0]]),
                  });
                })(e, o, l, u, t),
                y(e, o))
              : (C(e), N(t, l, u)),
            l
          );
        }
        function E(e, t) {
          function n(n) {
            var r,
              a = x(n);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var o = k(r.value, 2),
                  i = o[0],
                  l = o[1];
                if (!Ls(e, t, i).is(l)) return !0;
              }
            } catch (u) {
              a.e(u);
            } finally {
              a.f();
            }
            return !1;
          }
          var r,
            a = x(
              Uo([
                s.has(e) ? [Xn(s.get(e))] : [],
                Hr(
                  Ta(s, function (t) {
                    return k(t, 1)[0] !== e;
                  }),
                  function (e) {
                    return k(e, 2)[1];
                  }
                ),
              ])
            );
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o = r.value;
              if (
                o.stateVersions.get(t.version) ||
                !n(o.depValuesDiscoveredSoFarDuringAsyncWork)
              )
                return o.stateVersions.set(t.version, !0), o;
              o.stateVersions.set(t.version, !1);
            }
          } catch (i) {
            a.e(i);
          } finally {
            a.f();
          }
        }
        function T(e) {
          return s.get(e);
        }
        function C(e) {
          s.delete(e);
        }
        function R(e, t) {
          var n;
          return (
            t === (null === (n = T(e)) || void 0 === n ? void 0 : n.executionID)
          );
        }
        function N(e, t, r) {
          e.atomValues.set(n, t);
          try {
            l.set(
              (function (e) {
                return Array.from(e.entries()).map(function (e) {
                  var t = k(e, 2);
                  return [t[0], t[1].contents];
                });
              })(r),
              t
            );
          } catch (a) {
            throw Yn(
              'Problem with setting cache for selector "'
                .concat(n, '": ')
                .concat(a.message)
            );
          }
        }
        function L(e, t) {
          var r = t.atomValues.get(n);
          return null != r
            ? r
            : l.get(function (n) {
                var r;
                return (
                  "string" !== typeof n && Uu(!1),
                  null === (r = Os(e, t, n)) || void 0 === r
                    ? void 0
                    : r.contents
                );
              });
        }
        function O(e, t) {
          return (function (e) {
            if ($s.includes(n)) {
              var t = "Recoil selector has circular dependencies: ".concat(
                $s.slice($s.indexOf(n)).join(" \u2192 ")
              );
              return Ts(Yn(t));
            }
            $s.push(n);
            try {
              return e();
            } finally {
              $s.pop();
            }
          })(function () {
            return _(e, t);
          });
        }
        function A(e) {
          e.atomValues.delete(n);
        }
        function P(e, n) {
          null == t && Uu(!1);
          var r,
            a = x(i);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o,
                u = r.value,
                s = Ds(u);
              null === (o = s.clearCache) || void 0 === o || o.call(s, e, n);
            }
          } catch (c) {
            a.e(c);
          } finally {
            a.f();
          }
          i.clear(), A(n), l.clear(), Fs(e, t);
        }
        if (null != o) {
          return (t = zs({
            key: n,
            nodeType: "selector",
            peek: L,
            get: O,
            set: function (e, t, r) {
              var a = !1,
                i = new Map();
              function l(r) {
                var o = r.key;
                if (a)
                  throw Yn(
                    "Recoil: Async selector sets are not currently supported."
                  );
                var i = Ls(e, t, o);
                if ("hasValue" === i.state) return i.contents;
                if ("loading" === i.state) {
                  var l = 'Getting value of asynchronous atom or selector "'
                    .concat(o, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (Rr(l), Yn(l));
                }
                throw i.contents;
              }
              function u(n, r) {
                if (a) {
                  var o =
                    "Recoil: Async selector sets are not currently supported.";
                  throw (Rr(o), Yn(o));
                }
                var u = "function" === typeof r ? r(l(n)) : r;
                As(e, t, n.key, u).forEach(function (e, t) {
                  return i.set(t, e);
                });
              }
              var s = o(
                {
                  set: u,
                  get: l,
                  reset: function (e) {
                    u(e, js);
                  },
                },
                r
              );
              if (void 0 !== s)
                throw Jn(s)
                  ? Yn(
                      "Recoil: Async selector sets are not currently supported."
                    )
                  : Yn("Recoil: selector set should be a void function.");
              return (a = !0), i;
            },
            init: d,
            invalidate: A,
            clearCache: P,
            shouldDeleteConfigOnRelease: p,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          }));
        }
        return (t = zs({
          key: n,
          nodeType: "selector",
          peek: L,
          get: O,
          init: d,
          invalidate: A,
          clearCache: P,
          shouldDeleteConfigOnRelease: p,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        }));
      }
      Qs.value = function (e) {
        return new Ns(e);
      };
      var Gs = Qs,
        Ys = br.isLoadable,
        Js = br.loadableWithError,
        Xs = br.loadableWithPromise,
        Zs = br.loadableWithValue,
        ec = us.WrappedValue,
        tc = Ha,
        nc = Xr.DEFAULT_VALUE,
        rc = Xr.DefaultValue,
        ac = Xr.getConfigDeletionHandler,
        oc = Xr.registerNode,
        ic = Xr.setConfigDeletionHandler,
        lc = Br.isRecoilValue,
        uc = yo.getRecoilValueAsLoadable,
        sc = yo.markRecoilValueModified,
        cc = yo.setRecoilValue,
        fc = yo.setRecoilValueLoadable,
        dc = Ao,
        pc = function (e) {
          return e instanceof ec ? e.value : e;
        };
      function hc(e) {
        var t = e.key,
          n = e.persistence_UNSTABLE,
          r = dc(e.retainedBy_UNSTABLE),
          a = 0;
        function o(e) {
          return Xs(
            e
              .then(function (e) {
                return (i = Zs(e)), e;
              })
              .catch(function (e) {
                throw ((i = Js(e)), e);
              })
          );
        }
        var i = Jn(e.default)
          ? o(e.default)
          : Ys(e.default)
          ? "loading" === e.default.state
            ? o(e.default.contents)
            : e.default
          : Zs(pc(e.default));
        c(i.contents);
        var l = void 0,
          s = new Map();
        function c(e) {
          return e;
        }
        function f(e, n) {
          var r, a;
          return null !==
            (r = null !== (a = n.atomValues.get(t)) && void 0 !== a ? a : l) &&
            void 0 !== r
            ? r
            : i;
        }
        var d = oc({
          key: t,
          nodeType: "atom",
          peek: f,
          get: function (e, r) {
            if (r.atomValues.has(t)) return Xn(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != l) return l;
              if (null == n)
                return (
                  Wr(
                    "Tried to restore a persisted value for atom ".concat(
                      t,
                      " but it has no persistence settings."
                    )
                  ),
                  i
                );
              var a = r.nonvalidatedAtoms.get(t),
                o = n.validator(a, nc),
                u = o instanceof rc ? i : Zs(o);
              return (l = u);
            }
            return i;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              var a = Xn(n.atomValues.get(t));
              if ("hasValue" === a.state && r === a.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof rc)
              return new Map();
            return (l = void 0), new Map().set(t, Zs(r));
          },
          init: function (n, r, o) {
            var l;
            if ((a++, n.getState().knownAtoms.add(t), "loading" === i.state)) {
              i.contents.finally(function () {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || sc(n, d);
              });
            }
            var c =
              null !== (l = e.effects) && void 0 !== l ? l : e.effects_UNSTABLE;
            if (null != c) {
              var p,
                h = function (e) {
                  if (g && e.key === t) {
                    var a = y;
                    return a instanceof rc
                      ? f(n, r)
                      : Jn(a)
                      ? Xs(
                          a.then(function (e) {
                            return e instanceof rc ? i.toPromise() : e;
                          })
                        )
                      : Zs(a);
                  }
                  return uc(n, e);
                },
                v = function (e) {
                  return h(e).toPromise();
                },
                m = function (e) {
                  var r,
                    a = tc(
                      n,
                      null !== (r = n.getState().nextTree) && void 0 !== r
                        ? r
                        : n.getState().currentTree,
                      e.key
                    );
                  return !g || e.key !== t || y instanceof rc
                    ? a
                    : Hn(Hn({}, a), {}, { isSet: !0, loadable: h(e) });
                },
                y = nc,
                g = !0,
                b = !1,
                w = null,
                S = function (e) {
                  return function (t) {
                    if (g) {
                      var r = h(d),
                        a = "hasValue" === r.state ? r.contents : nc;
                      (y = "function" === typeof t ? t(a) : t),
                        Jn(y) &&
                          (y = y.then(function (t) {
                            return (w = { effect: e, value: t }), t;
                          }));
                    } else {
                      if (Jn(t))
                        throw Yn(
                          "Setting atoms to async values is not implemented."
                        );
                      "function" !== typeof t &&
                        (w = { effect: e, value: pc(t) }),
                        cc(
                          n,
                          d,
                          "function" === typeof t
                            ? function (n) {
                                var r = pc(t(n));
                                return (w = { effect: e, value: r }), r;
                              }
                            : pc(t)
                        );
                    }
                  };
                },
                k = function (e) {
                  return function () {
                    return S(e)(nc);
                  };
                },
                _ = function (e) {
                  return function (r) {
                    var a,
                      o = n.subscribeToTransactions(function (n) {
                        var a,
                          o = n.getState(),
                          l = o.currentTree,
                          u = o.previousTree;
                        u ||
                          (Rr(
                            "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                          ),
                          (u = l));
                        var s =
                          null !== (a = l.atomValues.get(t)) && void 0 !== a
                            ? a
                            : i;
                        if ("hasValue" === s.state) {
                          var c,
                            f,
                            d,
                            p,
                            h = s.contents,
                            v =
                              null !== (c = u.atomValues.get(t)) && void 0 !== c
                                ? c
                                : i,
                            m = "hasValue" === v.state ? v.contents : nc;
                          (null === (f = w) || void 0 === f
                            ? void 0
                            : f.effect) !== e ||
                          (null === (d = w) || void 0 === d
                            ? void 0
                            : d.value) !== h
                            ? r(h, m, !l.atomValues.has(t))
                            : (null === (p = w) || void 0 === p
                                ? void 0
                                : p.effect) === e && (w = null);
                        }
                      }, t).release;
                    s.set(
                      n,
                      [].concat(
                        u(null !== (a = s.get(n)) && void 0 !== a ? a : []),
                        [o]
                      )
                    );
                  };
                },
                E = x(c);
              try {
                for (E.s(); !(p = E.n()).done; ) {
                  var T = p.value;
                  try {
                    var C,
                      R = T({
                        node: d,
                        storeID: n.storeID,
                        parentStoreID_UNSTABLE: n.parentStoreID,
                        trigger: o,
                        setSelf: S(T),
                        resetSelf: k(T),
                        onSet: _(T),
                        getPromise: v,
                        getLoadable: h,
                        getInfo_UNSTABLE: m,
                      });
                    if (null != R)
                      s.set(
                        n,
                        [].concat(
                          u(null !== (C = s.get(n)) && void 0 !== C ? C : []),
                          [R]
                        )
                      );
                  } catch (O) {
                    (y = O), (b = !0);
                  }
                }
              } catch (A) {
                E.e(A);
              } finally {
                E.f();
              }
              if (((g = !1), !(y instanceof rc))) {
                var N,
                  L = b
                    ? Js(y)
                    : Jn(y)
                    ? Xs(
                        (function (e, n) {
                          var r = n
                            .then(function (n) {
                              var a, o;
                              return (
                                (null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && cc(e, d, n),
                                n
                              );
                            })
                            .catch(function (n) {
                              var a, o;
                              throw (
                                ((null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && fc(e, d, Js(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, y)
                      )
                    : Zs(pc(y));
                L.contents,
                  r.atomValues.set(t, L),
                  null === (N = n.getState().nextTree) ||
                    void 0 === N ||
                    N.atomValues.set(t, L);
              }
            }
            return function () {
              var e;
              a--,
                null === (e = s.get(n)) ||
                  void 0 === e ||
                  e.forEach(function (e) {
                    return e();
                  }),
                s.delete(n);
            };
          },
          invalidate: function () {
            l = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== ac(t) && a <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return d;
      }
      function vc(e) {
        var t = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e)
          ),
          n = "default" in e ? e.default : new Promise(function () {});
        return lc(n)
          ? (function (e) {
              var t = vc(
                  Hn(
                    Hn({}, e),
                    {},
                    {
                      default: nc,
                      persistence_UNSTABLE:
                        void 0 === e.persistence_UNSTABLE
                          ? void 0
                          : Hn(
                              Hn({}, e.persistence_UNSTABLE),
                              {},
                              {
                                validator: function (t) {
                                  return t instanceof rc
                                    ? t
                                    : Xn(e.persistence_UNSTABLE).validator(
                                        t,
                                        nc
                                      );
                                },
                              }
                            ),
                      effects: e.effects,
                      effects_UNSTABLE: e.effects_UNSTABLE,
                    }
                  )
                ),
                n = Gs({
                  key: "".concat(e.key, "__withFallback"),
                  get: function (n) {
                    var r = (0, n.get)(t);
                    return r instanceof rc ? e.default : r;
                  },
                  set: function (e, n) {
                    return (0, e.set)(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: "most-recent" },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return ic(n.key, ac(e.key)), n;
            })(Hn(Hn({}, t), {}, { default: n }))
          : hc(Hn(Hn({}, t), {}, { default: n }));
      }
      vc.value = function (e) {
        return new ec(e);
      };
      var mc = vc,
        yc = {
          MapCache: (function () {
            function e(t) {
              var n;
              s(this, e),
                Zn(this, "_map", void 0),
                Zn(this, "_keyMapper", void 0),
                (this._map = new Map()),
                (this._keyMapper =
                  null !==
                    (n = null === t || void 0 === t ? void 0 : t.mapKey) &&
                  void 0 !== n
                    ? n
                    : function (e) {
                        return e;
                      });
            }
            return (
              p(e, [
                {
                  key: "size",
                  value: function () {
                    return this._map.size;
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(this._keyMapper(e));
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    return this._map.get(this._keyMapper(e));
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    this._map.set(this._keyMapper(e), t);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    this._map.delete(this._keyMapper(e));
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._map.clear();
                  },
                },
              ]),
              e
            );
          })(),
        }.MapCache,
        gc = Object.freeze({ __proto__: null, MapCache: yc }),
        bc = vs.LRUCache,
        wc = gc.MapCache,
        Sc = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var kc = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Sc,
            t = e.equality,
            n = void 0 === t ? Sc.equality : t,
            r = e.eviction,
            a = void 0 === r ? Sc.eviction : r,
            o = e.maxSize,
            i = void 0 === o ? Sc.maxSize : o,
            l = (function (e) {
              switch (e) {
                case "reference":
                  return function (e) {
                    return e;
                  };
                case "value":
                  return function (e) {
                    return ws(e);
                  };
              }
              throw Yn("Unrecognized equality policy ".concat(e));
            })(n),
            u = (function (e, t, n) {
              switch (e) {
                case "keep-all":
                  return new wc({ mapKey: n });
                case "lru":
                  return new bc({ mapKey: n, maxSize: Xn(t) });
                case "most-recent":
                  return new bc({ mapKey: n, maxSize: 1 });
              }
              throw Yn("Unrecognized eviction policy ".concat(e));
            })(a, i, l);
          return u;
        },
        _c = Xr.setConfigDeletionHandler;
      var Ec = function (e) {
          var t,
            n,
            r = kc({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n,
              a,
              o = r.get(t);
            if (null != o) return o;
            e.cachePolicyForParams_UNSTABLE;
            var i = Fn(e, qn),
              l = "default" in e ? e.default : new Promise(function () {}),
              u = mc(
                Hn(
                  Hn({}, i),
                  {},
                  {
                    key: ""
                      .concat(e.key, "__")
                      .concat(
                        null !== (n = ws(t)) && void 0 !== n ? n : "void"
                      ),
                    default: "function" === typeof l ? l(t) : l,
                    retainedBy_UNSTABLE:
                      "function" === typeof e.retainedBy_UNSTABLE
                        ? e.retainedBy_UNSTABLE(t)
                        : e.retainedBy_UNSTABLE,
                    effects:
                      "function" === typeof e.effects
                        ? e.effects(t)
                        : "function" === typeof e.effects_UNSTABLE
                        ? e.effects_UNSTABLE(t)
                        : null !== (a = e.effects) && void 0 !== a
                        ? a
                        : e.effects_UNSTABLE,
                  }
                )
              );
            return (
              r.set(t, u),
              _c(u.key, function () {
                r.delete(t);
              }),
              u
            );
          };
        },
        xc = Xr.setConfigDeletionHandler,
        Tc = 0;
      var Cc = function (e) {
          var t,
            n,
            r = kc({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n, a;
            try {
              a = r.get(t);
            } catch (f) {
              throw Yn(
                "Problem with cache lookup for selector "
                  .concat(e.key, ": ")
                  .concat(f.message)
              );
            }
            if (null != a) return a;
            var o,
              i = ""
                .concat(e.key, "__selectorFamily/")
                .concat(
                  null !== (n = ws(t, { allowFunctions: !0 })) && void 0 !== n
                    ? n
                    : "void",
                  "/"
                )
                .concat(Tc++),
              l = function (n) {
                return e.get(t)(n);
              },
              u = e.cachePolicy_UNSTABLE,
              s =
                "function" === typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE;
            if (null != e.set) {
              var c = e.set;
              o = Gs({
                key: i,
                get: l,
                set: function (e, n) {
                  return c(t)(e, n);
                },
                cachePolicy_UNSTABLE: u,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: s,
              });
            } else
              o = Gs({
                key: i,
                get: l,
                cachePolicy_UNSTABLE: u,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: s,
              });
            return (
              r.set(t, o),
              xc(o.key, function () {
                r.delete(t);
              }),
              o
            );
          };
        },
        Rc = Cc({
          key: "__constant",
          get: function (e) {
            return function () {
              return e;
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var Nc = function (e) {
          return Rc(e);
        },
        Lc = Cc({
          key: "__error",
          get: function (e) {
            return function () {
              throw Yn(e);
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var Oc = function (e) {
        return Lc(e);
      };
      var Ac = function (e) {
          return e;
        },
        Pc = br.loadableWithError,
        jc = br.loadableWithPromise,
        Mc = br.loadableWithValue;
      function Dc(e, t) {
        var n,
          r = Array(t.length).fill(void 0),
          a = Array(t.length).fill(void 0),
          o = x(t.entries());
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var i = k(n.value, 2),
              l = i[0],
              u = i[1];
            try {
              r[l] = e(u);
            } catch (s) {
              a[l] = s;
            }
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        return [r, a];
      }
      function zc(e) {
        return null != e && !Jn(e);
      }
      function Uc(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
      }
      function Fc(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
              return Hn(Hn({}, e), {}, Bn({}, n, t[r]));
            }, {});
      }
      function Ic(e, t, n) {
        return Fc(
          e,
          n.map(function (e, n) {
            return null == e ? Mc(t[n]) : Jn(e) ? jc(e) : Pc(e);
          })
        );
      }
      var Vc = Cc({
          key: "__waitForNone",
          get: function (e) {
            return function (t) {
              var n = k(Dc(t.get, Uc(e)), 2),
                r = n[0],
                a = n[1];
              return Ic(e, r, a);
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Bc = Cc({
          key: "__waitForAny",
          get: function (e) {
            return function (t) {
              var n = k(Dc(t.get, Uc(e)), 2),
                r = n[0],
                a = n[1];
              return a.some(function (e) {
                return !Jn(e);
              })
                ? Ic(e, r, a)
                : new Promise(function (t) {
                    var n,
                      o = x(a.entries());
                    try {
                      var i = function () {
                        var o = k(n.value, 2),
                          i = o[0],
                          l = o[1];
                        Jn(l) &&
                          l
                            .then(function (n) {
                              (r[i] = n), (a[i] = void 0), t(Ic(e, r, a));
                            })
                            .catch(function (n) {
                              (a[i] = n), t(Ic(e, r, a));
                            });
                      };
                      for (o.s(); !(n = o.n()).done; ) i();
                    } catch (l) {
                      o.e(l);
                    } finally {
                      o.f();
                    }
                  });
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Wc = {
          waitForNone: Vc,
          waitForAny: Bc,
          waitForAll: Cc({
            key: "__waitForAll",
            get: function (e) {
              return function (t) {
                var n = k(Dc(t.get, Uc(e)), 2),
                  r = n[0],
                  a = n[1];
                if (
                  a.every(function (e) {
                    return null == e;
                  })
                )
                  return Fc(e, r);
                var o = a.find(zc);
                if (null != o) throw o;
                return Promise.all(a).then(function (t) {
                  return Fc(
                    e,
                    ((n = r),
                    t.map(function (e, t) {
                      return void 0 === e ? n[t] : e;
                    }))
                  );
                  var n;
                });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          waitForAllSettled: Cc({
            key: "__waitForAllSettled",
            get: function (e) {
              return function (t) {
                var n = k(Dc(t.get, Uc(e)), 2),
                  r = n[0],
                  a = n[1];
                return a.every(function (e) {
                  return !Jn(e);
                })
                  ? Ic(e, r, a)
                  : Promise.all(
                      a.map(function (e, t) {
                        return Jn(e)
                          ? e
                              .then(function (e) {
                                (r[t] = e), (a[t] = void 0);
                              })
                              .catch(function (e) {
                                (r[t] = void 0), (a[t] = e);
                              })
                          : null;
                      })
                    ).then(function () {
                      return Ic(e, r, a);
                    });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          noWait: Cc({
            key: "__noWait",
            get: function (e) {
              return function (t) {
                var n = t.get;
                try {
                  return Gs.value(Mc(n(e)));
                } catch (r) {
                  return Gs.value(Jn(r) ? jc(r) : Pc(r));
                }
              };
            },
            dangerouslyAllowMutability: !0,
          }),
        },
        Hc = br.RecoilLoadable,
        $c = Xr.DefaultValue,
        Kc = tl,
        qc = al,
        Qc = Br.isRecoilValue,
        Gc = _a.retentionZone,
        Yc = gi.freshSnapshot,
        Jc = {
          DefaultValue: $c,
          isRecoilValue: Qc,
          RecoilLoadable: Hc,
          RecoilEnv: Sr,
          RecoilRoot: Kc,
          useRecoilStoreID: qc,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: xu,
          atom: mc,
          selector: Gs,
          atomFamily: Ec,
          selectorFamily: Cc,
          constSelector: Nc,
          errorSelector: Oc,
          readOnlySelector: Ac,
          noWait: Wc.noWait,
          waitForNone: Wc.waitForNone,
          waitForAny: Wc.waitForAny,
          waitForAll: Wc.waitForAll,
          waitForAllSettled: Wc.waitForAllSettled,
          useRecoilValue: Kl,
          useRecoilValueLoadable: ql,
          useRecoilState: Hl,
          useRecoilStateLoadable: $l,
          useSetRecoilState: Gl,
          useResetRecoilState: Ql,
          useGetRecoilValueInfo_UNSTABLE: wu,
          useRecoilRefresher_UNSTABLE: ns,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Yl,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Jl,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Xl,
          useRecoilCallback: Xu,
          useRecoilTransaction_UNSTABLE: is,
          useGotoRecoilSnapshot: mu,
          useRecoilSnapshot: hu,
          useRecoilTransactionObserver_UNSTABLE: yu,
          snapshot_UNSTABLE: Yc,
          useRetain: ml,
          retentionZone: Gc,
        },
        Xc = Jc.RecoilRoot,
        Zc = Jc.atom,
        ef = Jc.useRecoilState,
        tf = Zc({ key: "postsState", default: [] }),
        nf = Zc({ key: "homeClubTabState", default: 0 }),
        rf = Zc({ key: "homePromotionTabState", default: 0 });
      function af() {
        var e = k(ef(tf), 2),
          n = e[0],
          r = e[1],
          a = k(ef(nf), 2),
          o = a[0],
          i = (a[1], Ee());
        return (
          (0, t.useEffect)(
            function () {
              0 == o
                ? Un.get("/api/posts/?skip=0&limit=8").then(function (e) {
                    r(e.data);
                  })
                : 1 == o
                ? Un.get(
                    "/api/posts/classification/?skip=0&limit=8&classification=0"
                  ).then(function (e) {
                    r(e.data);
                  })
                : 2 == o &&
                  Un.get(
                    "/api/posts/classification/?skip=0&limit=8&classification=1"
                  ).then(function (e) {
                    r(e.data);
                  });
            },
            [o]
          ),
          (0, Je.jsx)(Je.Fragment, {
            children: (0, Je.jsxs)("div", {
              className: "px-8 2xl:px-16",
              children: [
                (0, Je.jsx)(of, {}),
                (0, Je.jsx)("article", {
                  className: "w-home2 2xl:w-home",
                  children: (0, Je.jsx)("div", {
                    className: "grid grid-cols-4 gap-10",
                    children: n.map(function (e) {
                      return (0,
                      Je.jsxs)("div", { className: "w-[200px] h-[240px] 2xl:w-[300px] 2xl:h-[320px] bg-white shadow-lg transition hover:scale-110", onClick: function () {}, children: [(0, Je.jsx)(lf, { post: e }), (0, Je.jsx)(uf, { post: e })] });
                    }),
                  }),
                }),
                (0, Je.jsx)("div", { className: "mt-[48px]" }),
                (0, Je.jsx)("div", {
                  className: "grid place-content-center",
                  children: (0, Je.jsx)("button", {
                    className:
                      "w-[200px] h-[46px] text-h5 text-black rounded-3xl border border-gray",
                    onClick: function () {
                      i("/club");
                    },
                    children: "\uc804\uccb4\ubcf4\uae30 >",
                  }),
                }),
              ],
            }),
          })
        );
      }
      Un.defaults.baseURL = "http://cbnucore.site";
      var of = function () {
          var e = k(ef(nf), 2),
            t = e[0],
            n = e[1],
            r = function (e) {
              n(e);
            };
          return (0, Je.jsx)(Je.Fragment, {
            children: (0, Je.jsxs)("div", {
              children: [
                (0, Je.jsxs)("div", {
                  className: "text-[32px] text-main",
                  children: [
                    "\ub3d9\uc544\ub9ac ",
                    (0, Je.jsx)("span", {
                      className: "font-bold",
                      children: "\ub458\ub7ec\ubcf4\uae30",
                    }),
                  ],
                }),
                (0, Je.jsx)("div", { className: "mt-[18px]" }),
                (0, Je.jsxs)("div", {
                  className: "flex gap-3",
                  children: [
                    (0, Je.jsx)("button", {
                      className:
                        0 === t ? "btn-home-tab-focused" : "btn-home-tab",
                      onClick: function () {
                        return r(0);
                      },
                      children: "\uc804\uccb4",
                    }),
                    (0, Je.jsx)("button", {
                      className:
                        1 === t ? "btn-home-tab-focused" : "btn-home-tab",
                      onClick: function () {
                        return r(1);
                      },
                      children: "\uc911\uc559 \ub3d9\uc544\ub9ac",
                    }),
                    (0, Je.jsx)("button", {
                      className:
                        2 === t ? "btn-home-tab-focused" : "btn-home-tab",
                      onClick: function () {
                        return r(2);
                      },
                      children: "\uc9c1\ubb34 \ub3d9\uc544\ub9ac",
                    }),
                  ],
                }),
                (0, Je.jsx)("div", { className: "mt-[32px]" }),
              ],
            }),
          });
        },
        lf = function (e) {
          return (0, Je.jsx)("div", {
            className: "2xl:w-[300px] 2xl:h-[200px]",
            children: (0, Je.jsx)("img", {
              src: e.post.image_url,
              alt: "img",
              className: "rounded-t-lg",
            }),
          });
        },
        uf = function (e) {
          return (0, Je.jsxs)("div", {
            className: "p-2",
            children: [
              (0, Je.jsxs)("div", {
                className: "2xl:flex",
                children: [
                  (0, Je.jsx)("div", {
                    className: "text-lg 2xl:text-xl font-bold",
                    children: e.post.title,
                  }),
                  (0, Je.jsx)("div", {
                    className:
                      "text-md w-[115px] 2xl:w-[130px] 2xl:text-lg text-center 2xl:ml-3 text-md border border-darkgray text-darkgray rounded-xl px-3",
                    children:
                      0 === e.post.classification
                        ? "\uc911\uc559 \ub3d9\uc544\ub9ac"
                        : "\uc9c1\ubb34 \ub3d9\uc544\ub9ac",
                  }),
                ],
              }),
              (0, Je.jsx)("div", {
                className: "hidden 2xl:block",
                children:
                  e.post.content.length > 35
                    ? e.post.content.slice(0, 35) + "..."
                    : e.post.content,
              }),
              (0, Je.jsx)("div", {
                className: "block 2xl:hidden text-sm",
                children:
                  e.post.content.length > 12
                    ? e.post.content.slice(0, 12) + "..."
                    : e.post.content,
              }),
            ],
          });
        };
      function sf() {
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsx)("aside", {
            className: "w-side bg-sidebarbackground",
            children: "\uc0ac\uc774\ub4dc\ubc14",
          }),
        });
      }
      function cf() {
        var e = Ee();
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsxs)("div", {
            className: "px-8 2xl:px-16",
            children: [
              (0, Je.jsx)(ff, {}),
              (0, Je.jsx)("div", {
                className: "grid grid-cols-4",
                children: [
                  "/images/\ucf54\uc5b4\ud64d\ubcf4.png",
                  "/images/\ud55c\ubcc4\ud64d\ubcf4.png",
                  "/images/\uaf34\ub85c\ub974\ud64d\ubcf41.png",
                  "/images/\uaf34\ub85c\ub974\ud64d\ubcf42.png",
                ].map(function (e) {
                  return (0,
                  Je.jsx)("div", { className: "w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[440px] transition hover:scale-110", children: (0, Je.jsx)("img", { src: e, alt: "marketing" }) });
                }),
              }),
              (0, Je.jsx)("div", { className: "mt-[48px]" }),
              (0, Je.jsx)("div", {
                className: "grid place-content-center",
                children: (0, Je.jsx)("button", {
                  className:
                    "w-[200px] h-[46px] text-h5 text-black rounded-3xl border border-gray",
                  onClick: function () {
                    e("/promotion");
                  },
                  children: "\uc804\uccb4\ubcf4\uae30 >",
                }),
              }),
            ],
          }),
        });
      }
      var ff = function () {
        var e = k(ef(rf), 2),
          t = e[0],
          n = e[1],
          r = function (e) {
            n(e);
          };
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsxs)("div", {
            children: [
              (0, Je.jsxs)("div", {
                className: "text-[32px] text-main",
                children: [
                  "\ub3d9\uc544\ub9ac ",
                  (0, Je.jsx)("span", {
                    className: "font-bold",
                    children: "\ud64d\ubcf4 \uac8c\uc2dc\ud310",
                  }),
                ],
              }),
              (0, Je.jsx)("div", { className: "mt-[18px]" }),
              (0, Je.jsxs)("div", {
                className: "flex gap-3",
                children: [
                  (0, Je.jsx)("button", {
                    className:
                      0 === t ? "btn-home-tab-focused" : "btn-home-tab",
                    onClick: function () {
                      return r(0);
                    },
                    children: "\uc804\uccb4",
                  }),
                  (0, Je.jsx)("button", {
                    className:
                      1 === t ? "btn-home-tab-focused" : "btn-home-tab",
                    onClick: function () {
                      return r(1);
                    },
                    children: "\uc911\uc559 \ub3d9\uc544\ub9ac",
                  }),
                  (0, Je.jsx)("button", {
                    className:
                      2 === t ? "btn-home-tab-focused" : "btn-home-tab",
                    onClick: function () {
                      return r(2);
                    },
                    children: "\uc9c1\ubb34 \ub3d9\uc544\ub9ac",
                  }),
                ],
              }),
              (0, Je.jsx)("div", { className: "mt-[32px]" }),
            ],
          }),
        });
      };
      function df() {
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsxs)("div", {
            className: "w-full flex",
            children: [
              (0, Je.jsxs)("div", {
                children: [
                  (0, Je.jsx)("div", { className: "mt-32" }),
                  (0, Je.jsx)(af, {}),
                  (0, Je.jsx)("div", { className: "mt-14" }),
                  (0, Je.jsx)(cf, {}),
                ],
              }),
              (0, Je.jsx)(sf, {}),
            ],
          }),
        });
      }
      function pf() {
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsx)("div", { children: "\ub3d9\uc544\ub9ac" }),
        });
      }
      function hf() {
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsx)("h1", { children: "\uacf5\uc9c0\uc0ac\ud56d" }),
        });
      }
      function vf() {
        return (0, Je.jsx)(Je.Fragment, {
          children: (0, Je.jsx)("h1", { children: "\ud64d\ubcf4" }),
        });
      }
      var mf = function () {
        return (0, Je.jsxs)(Je.Fragment, {
          children: [
            (0, Je.jsx)(Xe, {}),
            (0, Je.jsxs)(ze, {
              children: [
                (0, Je.jsx)(Me, { path: "/", element: (0, Je.jsx)(df, {}) }),
                (0, Je.jsx)(Me, {
                  path: "/club",
                  element: (0, Je.jsx)(pf, {}),
                }),
                (0, Je.jsx)(Me, {
                  path: "/notice",
                  element: (0, Je.jsx)(hf, {}),
                }),
                (0, Je.jsx)(Me, {
                  path: "/promotion",
                  element: (0, Je.jsx)(vf, {}),
                }),
              ],
            }),
          ],
        });
      };
      a.createRoot(document.getElementById("root")).render(
        (0, Je.jsx)(t.StrictMode, {
          children: (0, Je.jsx)(He, {
            children: (0, Je.jsx)(Xc, { children: (0, Je.jsx)(mf, {}) }),
          }),
        })
      );
    })();
})();
//# sourceMappingURL=main.68c4e569.js.map
