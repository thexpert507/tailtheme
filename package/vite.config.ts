import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: {
        components: "./lib/components/index.ts",
        hooks: "./lib/hooks/index.ts",
        utils: "./lib/utils/index.ts",
        context: "./lib/context/index.ts",
        config: "./lib/config/index.ts",
      },
      name: "tailtheme",
      fileName: (format, entry) => `${entry}.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "@legendapp/state",
        "@legendapp/state/react",
        "@react-three/drei",
        "@react-three/fiber",
        "date-fns",
        "react-dom",
        "react-dropdown-select",
        "react-hook-form",
        "react-icons",
        "tailwind-merge",
        "axios",
        "tailwindcss",
        "tailwindcss/plugin",
        "tailwindcss/defaultTheme",
        "@tailwindcss/typography",
        "@tailwindcss/forms",
      ],
    },
  },
  resolve: {
    alias: {
      "@theme": resolve(__dirname, "./lib"),
    },
  },
  plugins: [dts(), react()],
});
