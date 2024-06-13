import theme from "./lib/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [theme({ content: ["./lib/**/*.{js,ts,jsx,tsx}"], ignoreSource: true })],
};
