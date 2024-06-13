import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import formPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import { ContentConfig } from "tailwindcss/types/config";

type PresetConfig = {
  content: ContentConfig;
  ignoreSource?: boolean;
};

export default function (config: PresetConfig) {
  const themeSource = "node_modules/tailtheme/dist/**/*.js";
  const { content, ignoreSource } = config;

  const sourceContent = Array.isArray(content) ? [...content, themeSource] : [content, themeSource];

  return {
    content: ignoreSource ? content : sourceContent,

    theme: {
      extend: {
        fontFamily: { sans: ["Inter", ...fontFamily.sans] },

        animation: {
          "fade-in": "fade-in 0.3s ease-in-out",
        },

        keyframes: {
          "fade-in": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
        },

        colors: {
          primary: "var(--color-primary)",
          "primary-soft": "var(--color-primary-soft)",
          "primary-soft-contrast": "var(--color-primary-soft-contrast)",
          "primary-hover": "var(--color-primary-hover)",
          "primary-focus": "var(--color-primary-focus)",
          "primary-ring": "var(--color-primary-ring)",
          "primary-disabled": "var(--color-primary-disabled)",
          "primary-contrast": "var(--color-primary-contrast)",

          accent: "var(--color-accent)",
          "accent-soft": "var(--color-accent-soft)",
          "accent-soft-contrast": "var(--color-accent-soft-contrast)",
          "accent-hover": "var(--color-accent-hover)",
          "accent-focus": "var(--color-accent-focus)",
          "accent-ring": "var(--color-accent-ring)",
          "accent-disabled": "var(--color-accent-disabled)",
          "accent-contrast": "var(--color-accent-contrast)",

          info: "var(--color-info)",
          "info-soft": "var(--color-info-soft)",
          "info-soft-contrast": "var(--color-info-soft-contrast)",
          "info-hover": "var(--color-info-hover)",
          "info-focus": "var(--color-info-focus)",
          "info-ring": "var(--color-info-ring)",
          "info-disabled": "var(--color-info-disabled)",
          "info-contrast": "var(--color-info-contrast)",

          success: "var(--color-success)",
          "success-soft": "var(--color-success-soft)",
          "success-soft-contrast": "var(--color-success-soft-contrast)",
          "success-hover": "var(--color-success-hover)",
          "success-focus": "var(--color-success-focus)",
          "success-ring": "var(--color-success-ring)",
          "success-disabled": "var(--color-success-disabled)",
          "success-contrast": "var(--color-success-contrast)",

          warning: "var(--color-warning)",
          "warning-soft": "var(--color-warning-soft)",
          "warning-soft-contrast": "var(--color-warning-soft-contrast)",
          "warning-hover": "var(--color-warning-hover)",
          "warning-focus": "var(--color-warning-focus)",
          "warning-ring": "var(--color-warning-ring)",
          "warning-disabled": "var(--color-warning-disabled)",
          "warning-contrast": "var(--color-warning-contrast)",

          danger: "var(--color-danger)",
          "danger-soft": "var(--color-danger-soft)",
          "danger-soft-contrast": "var(--color-danger-soft-contrast)",
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
  } as Config;
}
