import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-WT5ZADZN.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-3CPB4T5C.js";
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
var app_default = "/build/_assets/app-VEWKBPEU.css";

// app/utils/theme-provider.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Theme = /* @__PURE__ */ ((Theme3) => {
  Theme3["DARK"] = "dark";
  Theme3["LIGHT"] = "light";
  return Theme3;
})(Theme || {});
var themes = Object.values(Theme);
var ThemeContext = (0, import_react.createContext)(void 0);
var prefersDarkMQ = "(prefers-color-scheme: dark)";
var getPreferredTheme = () => window.matchMedia(prefersDarkMQ).matches ? "dark" /* DARK */ : "light" /* LIGHT */;
function ThemeProvider({
  children,
  specifiedTheme
}) {
  const [theme, setTheme] = (0, import_react.useState)(() => {
    if (specifiedTheme) {
      if (themes.includes(specifiedTheme)) {
        return specifiedTheme;
      } else {
        return null;
      }
    }
    if (typeof document === "undefined") {
      return null;
    }
    return getPreferredTheme();
  });
  const persistTheme = useFetcher();
  const persistThemeRef = (0, import_react.useRef)(persistTheme);
  (0, import_react.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  const mountRun = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }
    persistThemeRef.current.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia(prefersDarkMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" /* DARK */ : "light" /* LIGHT */);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, {
    value: [theme, setTheme],
    children
  }, void 0, false, {
    fileName: "app/utils/theme-provider.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
var clientThemeCode = `
// hi there dear reader \u{1F44B}
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let me know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Hey, could you let me know you're seeing this message? Thanks!",
    );
  }
})();
`;
var themeStylesCode = `
  /* default light, but app-preference is "dark" */
  html.dark {
    light-mode {
      display: none;
    }
  }

  /* default light, and no app-preference */
  html:not(.dark) {
    dark-mode {
      display: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    /* prefers dark, but app-preference is "light" */
    html.light {
      dark-mode {
        display: none;
      }
    }

    /* prefers dark, and app-preference is "dark" */
    html.dark,
    /* prefers dark and no app-preference */
    html:not(.light) {
      light-mode {
        display: none;
      }
    }
  }
`;
function ThemeHead({ ssrTheme }) {
  const [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
        name: "color-scheme",
        content: theme === "light" ? "light dark" : "dark light"
      }, void 0, false, {
        fileName: "app/utils/theme-provider.tsx",
        lineNumber: 172,
        columnNumber: 7
      }, this),
      ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: { __html: clientThemeCode }
          }, void 0, false, {
            fileName: "app/utils/theme-provider.tsx",
            lineNumber: 182,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
            dangerouslySetInnerHTML: { __html: themeStylesCode }
          }, void 0, false, {
            fileName: "app/utils/theme-provider.tsx",
            lineNumber: 189,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/utils/theme-provider.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/utils/theme-provider.tsx",
    lineNumber: 167,
    columnNumber: 5
  }, this);
}
var clientDarkAndLightModeElsCode = `;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const darkEls = document.querySelectorAll("dark-mode");
  const lightEls = document.querySelectorAll("light-mode");
  for (const darkEl of darkEls) {
    if (theme === "dark") {
      for (const child of darkEl.childNodes) {
        darkEl.parentElement?.append(child);
      }
    }
    darkEl.remove();
  }
  for (const lightEl of lightEls) {
    if (theme === "light") {
      for (const child of lightEl.childNodes) {
        lightEl.parentElement?.append(child);
      }
    }
    lightEl.remove();
  }
})();`;
function ThemeBody({ ssrTheme }) {
  return ssrTheme ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
    dangerouslySetInnerHTML: { __html: clientDarkAndLightModeElsCode }
  }, void 0, false, {
    fileName: "app/utils/theme-provider.tsx",
    lineNumber: 222,
    columnNumber: 5
  }, this);
}
function useTheme() {
  const context = (0, import_react.useContext)(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

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
//# sourceMappingURL=/build/root-BGYUW3RX.js.map
