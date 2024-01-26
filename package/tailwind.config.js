const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Set font family
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
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
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
