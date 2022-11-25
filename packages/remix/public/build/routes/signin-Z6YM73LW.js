import {
  Container
} from "/build/_shared/chunk-NGM2HYDX.js";
import "/build/_shared/chunk-GL6K6V77.js";
import {
  Link,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-I4D7ICE6.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/auth.server
var require_auth = __commonJS({
  "empty-module:~/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/signin.tsx
var React = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Login"
  };
};
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full w-full flex flex-col justify-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "sm:mx-auto sm:w-full sm:max-w-md",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-center h-2",
            children: "Sign in to your account"
          }, void 0, false, {
            fileName: "app/routes/signin.tsx",
            lineNumber: 97,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/signin.tsx",
          lineNumber: 96,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-indigo-100 py-8 px-4 shadow sm:rounded-lg sm:px-10",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
              className: "space-y-6",
              method: "POST",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "redirectTo",
                  value: redirectTo
                }, void 0, false, {
                  fileName: "app/routes/signin.tsx",
                  lineNumber: 102,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Email address"
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 104,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-1",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        ref: emailRef,
                        id: "email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        required: true,
                        "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
                        "aria-describedby": "email-error",
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, false, {
                        fileName: "app/routes/signin.tsx",
                        lineNumber: 111,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 110,
                      columnNumber: 17
                    }, this),
                    ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "pt-1 text-red-700",
                      id: "email-error",
                      children: actionData.errors.email
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 124,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/signin.tsx",
                  lineNumber: 103,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Password"
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 130,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-1",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        ref: passwordRef,
                        id: "password",
                        name: "password",
                        type: "password",
                        autoComplete: "current-password",
                        required: true,
                        "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
                        "aria-describedby": "password-error",
                        className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      }, void 0, false, {
                        fileName: "app/routes/signin.tsx",
                        lineNumber: 137,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 136,
                      columnNumber: 17
                    }, this),
                    ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "pt-1 text-red-700",
                      id: "password-error",
                      children: actionData.errors.password
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 152,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/signin.tsx",
                  lineNumber: 129,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          id: "remember",
                          name: "remember",
                          type: "checkbox",
                          className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        }, void 0, false, {
                          fileName: "app/routes/signin.tsx",
                          lineNumber: 160,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "remember",
                          className: "ml-2 block text-sm text-gray-900",
                          children: "Remember me"
                        }, void 0, false, {
                          fileName: "app/routes/signin.tsx",
                          lineNumber: 166,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 159,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "text-sm"
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 173,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/signin.tsx",
                  lineNumber: 158,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      type: "submit",
                      className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      children: "Sign in"
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 176,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "text-sm mt-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                        to: "/signup",
                        className: "font-medium text-indigo-600 hover:text-indigo-500",
                        children: "Don't have an account? Sign up instead"
                      }, void 0, false, {
                        fileName: "app/routes/signin.tsx",
                        lineNumber: 183,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/signin.tsx",
                      lineNumber: 182,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/signin.tsx",
                  lineNumber: 175,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/signin.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/signin.tsx",
            lineNumber: 100,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/signin.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/signin.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/signin.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/signin-Z6YM73LW.js.map
