import {
  useTheme
} from "/build/_shared/chunk-GL6K6V77.js";
import {
  NavLink,
  Outlet,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-I4D7ICE6.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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
function Example() {
  const [theme, setTheme] = useTheme();
  const [enabled, setEnabled] = (0, import_react.useState)(theme !== "light" ? true : false);
  const toggleTheme = () => {
    setEnabled(!enabled);
    setTheme(
      (prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */
    );
    console.log("TOGGLE");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
    onClick: toggleTheme,
    children: "Darkmode"
  }, void 0, false, {
    fileName: "app/components/DarkModeToggle.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, {}, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
        to: "/signin",
        className: "inline-flex justify-center px-4 py-2 mt-4 mr-4 text-sm font-medium transition duration-150 ease-in-out bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus:border-gray-700 focus:shadow-outline-royal-blue active:bg-royal-blue-700 md:mt-0",
        children: "Login"
      }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Container.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Container({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    id: "skip",
    className: "flex flex-col justify-center px-2 py-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/components/Container.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/components/Container.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/components/Container.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Container.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

export {
  Container
};
//# sourceMappingURL=/build/_shared/chunk-3W54MMED.js.map
