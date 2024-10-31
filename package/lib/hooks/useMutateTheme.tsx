import { useCallback } from "react";
import { useThemeState } from "./useThemeState";
import { PartialAll } from "@/utils";
import { Tailtheme, generateTheme } from "@/context";

export function useMutateTheme() {
  const state$ = useThemeState();

  return useCallback(
    (theme: PartialAll<Tailtheme>) => {
      const nowMode = state$.themeMode.get();
      const nowTheme = state$.theme.get();
      const newTheme = { ...nowTheme, [nowMode]: generateTheme(theme, nowTheme[nowMode]) };
      state$.theme.set(newTheme);
    },
    [state$]
  );
}
