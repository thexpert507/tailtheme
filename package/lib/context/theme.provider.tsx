import { ObservableObject } from "@legendapp/state";
import { useEffectOnce, useObservable, useObserve } from "@legendapp/state/react";
import { createContext, useContext } from "react";
import { DarkTheme, BaseTheme } from "@theme/context/defaultThemes";
import { Tailtheme } from "./theme";

type ThemeMode = "light" | "dark";

type State = {
  themeMode: ThemeMode;
  theme?: Record<ThemeMode, Tailtheme>;
};

interface ThemeContextProps {
  data$: ObservableObject<State>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Record<ThemeMode, Tailtheme>;
}
export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const localStorageKey = "themeMode";

  const data$ = useObservable<State>({
    themeMode: "light" as ThemeMode,
    theme,
  });

  useEffectOnce(() => {
    const themeMode = localStorage.getItem(localStorageKey);
    if (themeMode) {
      data$.themeMode.set(themeMode as ThemeMode);
    }
  });

  useObserve(() => {
    const themeMode = data$.themeMode.get();
    localStorage.setItem(localStorageKey, themeMode);
  });

  useObserve(() => {
    const themeMode = data$.themeMode.get();
    const stateTheme = data$.theme.get();

    const defaultTheme = { light: BaseTheme, dark: DarkTheme };
    const theme = Boolean(stateTheme) ? stateTheme[themeMode] : defaultTheme[themeMode];

    const body = document.body;
    // Primary
    body.style.setProperty("--color-primary", theme.colors.primary.base);
    body.style.setProperty("--color-primary-hover", theme.colors.primary.hover);
    body.style.setProperty("--color-primary-focus", theme.colors.primary.focus);
    body.style.setProperty("--color-primary-ring", theme.colors.primary.ring);
    body.style.setProperty("--color-primary-disabled", theme.colors.primary.disabled);
    body.style.setProperty("--color-primary-contrast", theme.colors.primary.contrast);

    // Accent
    body.style.setProperty("--color-accent", theme.colors.accent.base);
    body.style.setProperty("--color-accent-hover", theme.colors.accent.hover);
    body.style.setProperty("--color-accent-focus", theme.colors.accent.focus);
    body.style.setProperty("--color-accent-ring", theme.colors.accent.ring);
    body.style.setProperty("--color-accent-disabled", theme.colors.accent.disabled);
    body.style.setProperty("--color-accent-contrast", theme.colors.accent.contrast);

    // Info
    body.style.setProperty("--color-info", theme.colors.info.base);
    body.style.setProperty("--color-info-hover", theme.colors.info.hover);
    body.style.setProperty("--color-info-focus", theme.colors.info.focus);
    body.style.setProperty("--color-info-ring", theme.colors.info.ring);
    body.style.setProperty("--color-info-disabled", theme.colors.info.disabled);
    body.style.setProperty("--color-info-contrast", theme.colors.info.contrast);

    // Success
    body.style.setProperty("--color-success", theme.colors.success.base);
    body.style.setProperty("--color-success-hover", theme.colors.success.hover);
    body.style.setProperty("--color-success-focus", theme.colors.success.focus);
    body.style.setProperty("--color-success-ring", theme.colors.success.ring);
    body.style.setProperty("--color-success-disabled", theme.colors.success.disabled);
    body.style.setProperty("--color-success-contrast", theme.colors.success.contrast);

    // Warning
    body.style.setProperty("--color-warning", theme.colors.warning.base);
    body.style.setProperty("--color-warning-hover", theme.colors.warning.hover);
    body.style.setProperty("--color-warning-focus", theme.colors.warning.focus);
    body.style.setProperty("--color-warning-ring", theme.colors.warning.ring);
    body.style.setProperty("--color-warning-disabled", theme.colors.warning.disabled);
    body.style.setProperty("--color-warning-contrast", theme.colors.warning.contrast);

    // Danger
    body.style.setProperty("--color-danger", theme.colors.danger.base);
    body.style.setProperty("--color-danger-hover", theme.colors.danger.hover);
    body.style.setProperty("--color-danger-focus", theme.colors.danger.focus);
    body.style.setProperty("--color-danger-ring", theme.colors.danger.ring);
    body.style.setProperty("--color-danger-disabled", theme.colors.danger.disabled);
    body.style.setProperty("--color-danger-contrast", theme.colors.danger.contrast);

    body.style.setProperty("--color-neutral-primary", theme.colors.neutral.primary);
    body.style.setProperty("--color-neutral-secondary", theme.colors.neutral.secondary);
    body.style.setProperty("--color-neutral-tertiary", theme.colors.neutral.tertiary);
    body.style.setProperty("--color-neutral-quaternary", theme.colors.neutral.quaternary);

    // Background
    body.style.setProperty("--color-background-primary", theme.colors.background.primary);
    body.style.setProperty("--color-background-secondary", theme.colors.background.secondary);
    body.style.setProperty("--color-background-contrast", theme.colors.background.contrast);
  });

  return <ThemeContext.Provider value={{ data$ }}>{children}</ThemeContext.Provider>;
}
