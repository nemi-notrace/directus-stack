import {
  useTheme
} from "/build/_shared/chunk-DKE255WL.js";
import {
  Link,
  NavLink,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6FFVLHGY.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/index.tsx
var import_react3 = __toESM(require_react());

// app/components/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {
          className: "w-full border-1 border-gray-200 dark:border-gray-800 mb-8"
        }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 5,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "mt-8 text-center text-base text-gray-400",
          children: [
            "\xA9 ",
            new Date().getFullYear(),
            " fickt euch alle zusammen"
          ]
        }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/DarkModeToggle.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example() {
  const [theme, setTheme] = useTheme();
  const [enabled, setEnabled] = (0, import_react.useState)(theme !== "light" ? true : false);
  const toggleTheme = () => {
    setEnabled(!enabled);
    setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    onChange: toggleTheme,
    className: classNames(
      enabled ? "bg-indigo-600" : "bg-gray-200",
      "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "sr-only",
        children: "Use setting"
      }, void 0, false, {
        fileName: "app/components/DarkModeToggle.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: classNames(
              enabled ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              className: "h-3 w-3 text-gray-500",
              fill: "none",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                stroke: "currentColor",
                d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              }, void 0, false, {
                fileName: "app/components/DarkModeToggle.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/DarkModeToggle.tsx",
              lineNumber: 43,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/DarkModeToggle.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: classNames(
              enabled ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            ),
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              className: "h-3 w-3 text-indigo-600",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                stroke: "currentColor"
              }, void 0, false, {
                fileName: "app/components/DarkModeToggle.tsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/DarkModeToggle.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/DarkModeToggle.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/DarkModeToggle.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
    className: "text-gray-700 body-font border-b-2 border-blue-100 bg-blue-50 dark:bg-gray-700",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          to: "/",
          className: "flex items-center mb-4 font-medium text-gray-900 dark:text-gray-200 title-font md:mb-0",
          children: "Directed Stack"
        }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                  to: "/signin",
                  className: "inline-flex justify-center px-4 py-2 mt-4 mr-4 text-sm font-medium transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:border-gray-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 md:mt-0",
                  children: "Login"
                }, void 0, false, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 17,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                  to: "/signup",
                  className: "inline-flex justify-center px-4 py-2 mt-4 mr-4 text-sm font-medium transition duration-150 ease-in-out bg-blue-200 border border-transparent rounded-md hover:bg-blue-300 focus:outline-none focus:border-blue-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 md:mt-0",
                  children: "Signup"
                }, void 0, false, {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 23,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/Header.tsx",
              lineNumber: 16,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, {}, void 0, false, {
              fileName: "app/components/Header.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/Header.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Container.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Container({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/components/Container.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        id: "skip",
        className: "flex flex-col justify-center px-2 py-2",
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
            fileName: "app/components/Container.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/Container.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Container.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  const [state, SetState] = (0, import_react3.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Welcome to Remix"
        }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                target: "_blank",
                href: "https://remix.run/tutorials/blog",
                rel: "noreferrer",
                children: "15m Quickstart Blog Tutorial"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 13,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 12,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                target: "_blank",
                href: "https://remix.run/tutorials/jokes",
                rel: "noreferrer",
                children: "Deep Dive Jokes App Tutorial"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 22,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 21,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                target: "_blank",
                href: "https://remix.run/docs",
                rel: "noreferrer",
                children: "Remix Docs"
              }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 31,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/index.tsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 11,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-5APLHA2O.js.map
