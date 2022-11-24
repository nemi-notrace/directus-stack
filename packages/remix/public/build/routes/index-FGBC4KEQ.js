import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3CPB4T5C.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/routes/index.tsx
var import_react = __toESM(require_react());

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

// app/components/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
    className: " dark:bg-black",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-pink-400 w-40",
      children: "d"
    }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 15,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header2, {}, void 0, false, {
        fileName: "app/components/Container.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/components/Container.tsx",
        lineNumber: 13,
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
  const [state, SetState] = (0, import_react.useState)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
//# sourceMappingURL=/build/routes/index-FGBC4KEQ.js.map
