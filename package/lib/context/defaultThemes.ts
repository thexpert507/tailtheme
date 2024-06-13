import { Tailtheme, TailthemeColor } from "./theme";

import Color from "color";

// Función para generar variantes de un color base
function generateTailthemeColor(baseColor: string): TailthemeColor {
  const color = Color(baseColor);
  const softColor = color.lighten(0.5);
  return {
    base: color.hex(),
    hover: color.darken(0.2).hex(),
    ring: color.alpha(0.5).rgb().string(),
    focus: color.lighten(0.2).hex(),
    disabled: color.desaturate(0.5).lighten(0.4).hex(),
    contrast: color.isLight() ? color.darken(0.7).hex() : color.lighten(1.5).hex(),
    soft: softColor.hex(),
    softContrast: softColor.isLight() ? softColor.darken(0.8).hex() : softColor.lighten(0.7).hex(),
  };
}

export const BaseTheme: Tailtheme = {
  colors: {
    primary: generateTailthemeColor("#3b82f6"),
    accent: generateTailthemeColor("#78716c"),
    danger: generateTailthemeColor("#ef4444"),
    success: generateTailthemeColor("#22c55e"),
    warning: generateTailthemeColor("#eab308"),
    info: generateTailthemeColor("#64748b"),
    neutral: {
      primary: "#f0efef",
      secondary: "#cbcac8",
      tertiary: "#3d3d3d",
      quaternary: "#000000",
    },
    background: {
      primary: "#f9fafb",
      secondary: "#e2e8f0",
      contrast: "#0f172a",
    },
  },
};

export const DarkTheme: Tailtheme = {
  colors: {
    primary: generateTailthemeColor("#3b82f6"),
    accent: generateTailthemeColor("#78716c"),
    danger: generateTailthemeColor("#ef4444"),
    success: generateTailthemeColor("#22c55e"),
    warning: generateTailthemeColor("#eab308"),
    info: generateTailthemeColor("#64748b"),
    neutral: {
      primary: "#f0efef",
      secondary: "#cbcac8",
      tertiary: "#3d3d3d",
      quaternary: "#000000",
    },
    background: {
      primary: "#0c0a09",
      secondary: "#1c1917",
      contrast: "#fafaf9",
    },
  },
};
