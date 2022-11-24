import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme
} from "/build/_shared/chunk-KB4ZCFQ3.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-H6M6TWZL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// empty-module:./utils/theme.server
var require_theme = __commonJS({
  "empty-module:./utils/theme.server"(exports, module) {
    module.exports = {};
  }
});

// app/styles/app.css
var app_default = "/build/_assets/app-VPIH5KDW.css";

// app/root.tsx
var import_theme = __toESM(require_theme());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "preconnect", href: "//fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: app_default },
  {
    rel: "stylesheet",
    href: "//fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&amp;lang=en"
  }
];
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  const data = useLoaderData();
  const [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: theme != null ? theme : "",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeHead, {
            ssrTheme: Boolean(data.theme)
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeBody, {
            ssrTheme: Boolean(data.theme)
          }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 64,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function AppWithProviders() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
    specifiedTheme: data.theme,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(App, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
export {
  AppWithProviders as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-Y5MNR72N.js.map
