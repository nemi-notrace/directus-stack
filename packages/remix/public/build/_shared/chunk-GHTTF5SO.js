import {
  require_jsx_dev_runtime,
  require_react,
  useFetcher
} from "/build/_shared/chunk-Y3RQPOOP.js";
import {
  __toESM
} from "/build/_shared/chunk-42Z7WWMI.js";

// app/utils/theme-provider.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Theme = /* @__PURE__ */ ((Theme2) => {
  Theme2["DARK"] = "dark";
  Theme2["LIGHT"] = "light";
  return Theme2;
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

export {
  ThemeProvider,
  ThemeHead,
  ThemeBody,
  useTheme
};
//# sourceMappingURL=/build/_shared/chunk-GHTTF5SO.js.map
