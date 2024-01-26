import type { Config } from "tailwindcss";
import formPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tailtheme/dist/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },

      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        "primary-focus": "var(--color-primary-focus)",
        "primary-ring": "var(--color-primary-ring)",
        "primary-disabled": "var(--color-primary-disabled)",
        "primary-contrast": "var(--color-primary-contrast)",

        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-focus": "var(--color-accent-focus)",
        "accent-ring": "var(--color-accent-ring)",
        "accent-disabled": "var(--color-accent-disabled)",
        "accent-contrast": "var(--color-accent-contrast)",

        info: "var(--color-info)",
        "info-hover": "var(--color-info-hover)",
        "info-focus": "var(--color-info-focus)",
        "info-ring": "var(--color-info-ring)",
        "info-disabled": "var(--color-info-disabled)",
        "info-contrast": "var(--color-info-contrast)",

        success: "var(--color-success)",
        "success-hover": "var(--color-success-hover)",
        "success-focus": "var(--color-success-focus)",
        "success-ring": "var(--color-success-ring)",
        "success-disabled": "var(--color-success-disabled)",
        "success-contrast": "var(--color-success-contrast)",

        warning: "var(--color-warning)",
        "warning-hover": "var(--color-warning-hover)",
        "warning-focus": "var(--color-warning-focus)",
        "warning-ring": "var(--color-warning-ring)",
        "warning-disabled": "var(--color-warning-disabled)",
        "warning-contrast": "var(--color-warning-contrast)",

        danger: "var(--color-danger)",
        "danger-hover": "var(--color-danger-hover)",
        "danger-focus": "var(--color-danger-focus)",
        "danger-ring": "var(--color-danger-ring)",
        "danger-disabled": "var(--color-danger-disabled)",
        "danger-contrast": "var(--color-danger-contrast)",

        "neutral-primary": "var(--color-neutral-primary)",
        "neutral-secondary": "var(--color-neutral-secondary)",
        "neutral-tertiary": "var(--color-neutral-tertiary)",
        "neutral-quaternary": "var(--color-neutral-quaternary)",

        "background-primary": "var(--color-background-primary)",
        "background-secondary": "var(--color-background-secondary)",
        "background-contrast": "var(--color-background-contrast)",
      },
    },
  },
  plugins: [formPlugin, typographyPlugin],
} satisfies Config;
