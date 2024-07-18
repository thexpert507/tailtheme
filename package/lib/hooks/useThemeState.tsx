import { useThemeContext } from "@/context";

export function useThemeState() {
  const { data$ } = useThemeContext();
  return data$;
}
