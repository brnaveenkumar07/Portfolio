"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = React.PropsWithChildren<{
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
}>;

type ThemeContextValue = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  resolvedTheme: "dark" | "light";
  systemTheme?: "dark" | "light";
  themes: Theme[];
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function disableTransitions() {
  const style = document.createElement("style");
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{transition:none!important;animation-duration:0s!important}"
    )
  );
  document.head.appendChild(style);

  return () => {
    window.getComputedStyle(document.body);
    window.setTimeout(() => style.remove(), 1);
  };
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme === "dark" || storedTheme === "light" || storedTheme === "system") {
        setThemeState(storedTheme);
      }
    } catch {
      // Ignore blocked localStorage and keep the default theme.
    }

    setSystemTheme(getSystemTheme());
  }, [storageKey]);

  React.useEffect(() => {
    if (!enableSystem) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");

    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, [enableSystem]);

  const resolvedTheme = theme === "system" && enableSystem ? systemTheme : theme === "light" ? "light" : "dark";

  React.useEffect(() => {
    const enableTransitions = disableTransitionOnChange ? disableTransitions() : undefined;
    const root = document.documentElement;

    root.classList.toggle("light", resolvedTheme === "light");
    root.classList.toggle("dark", resolvedTheme === "dark");
    root.style.colorScheme = resolvedTheme;

    enableTransitions?.();
  }, [disableTransitionOnChange, resolvedTheme]);

  const setTheme = React.useCallback<React.Dispatch<React.SetStateAction<Theme>>>(
    (value) => {
      setThemeState((currentTheme) => {
        const nextTheme = typeof value === "function" ? value(currentTheme) : value;

        try {
          window.localStorage.setItem(storageKey, nextTheme);
        } catch {
          // Ignore blocked localStorage; the in-memory theme still updates.
        }

        return nextTheme;
      });
    },
    [storageKey]
  );

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      systemTheme,
      themes: enableSystem ? ["dark", "light", "system"] : ["dark", "light"],
    }),
    [enableSystem, resolvedTheme, setTheme, systemTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
