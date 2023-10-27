import { ObservableObject } from "@legendapp/state";
import { useObserve } from "@legendapp/state/react";
import { usePersistedObservable } from "@legendapp/state/react-hooks/usePersistedObservable";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { createContext, useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  data$: ObservableObject<{
    theme: Theme;
  }>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const data$ = usePersistedObservable(
    {
      theme: "light" as Theme,
    },
    { local: "theme", persistLocal: ObservablePersistLocalStorage }
  );

  useObserve(() => {
    const theme = data$.theme.get();
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return <ThemeContext.Provider value={{ data$ }}>{children}</ThemeContext.Provider>;
}
