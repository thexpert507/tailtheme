import { Show, useComputed } from "@legendapp/state/react";
import { useThemeContext } from "@theme/context";
import { FiSun, FiMoon } from "react-icons/fi";

export function DarkThemeSwitch() {
  const { data$ } = useThemeContext();

  const show = useComputed(() => data$.themeMode.get() === "light");

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={() => data$.themeMode.set((prev) => (prev === "light" ? "dark" : "light"))}
        className="relative cursor-pointer select-none inline-block align-middle transition duration-200 ease-in">
        <Show if={show} else={<FiMoon size={20} className="text-gray-100"></FiMoon>}>
          {() => <FiSun size={20}></FiSun>}
        </Show>
      </div>
    </div>
  );
}
