import type { Config } from "tailwindcss";

export const tailthemeConfig: Pick<Config, "theme"> = {
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "var(--color-primary)",
      accent: "var(--color-accent)",
      info: "var(--color-info)",
      success: "var(--color-success)",
      warning: "var(--color-warning)",
      danger: "var(--color-danger)",
      "neutral-primary": "var(--color-neutral-primary)",
      "neutral-secondary": "var(--color-neutral-secondary)",
      "neutral-tertiary": "var(--color-neutral-tertiary)",
      "neutral-quaternary": "var(--color-neutral-quaternary)",
    },
  },
};
