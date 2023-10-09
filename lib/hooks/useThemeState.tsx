import { useThemeContext } from "@theme/context";

export function useThemeState() {
  const { data$ } = useThemeContext();
  return data$;
}
