import { PartialAll } from "@/utils";
import { BackgroundColor, Tailtheme, TailthemeColor } from "./theme";

import Color from "color";

// Función para generar variantes de un color base
export function generateTailthemeColor(baseColor: string): TailthemeColor {
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
    background: generateBackgroundColor("#f9fafb"),
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
    background: generateBackgroundColor("#0c0a09"),
  },
};

function generatePartialColor(
  theme: Partial<TailthemeColor> | undefined,
  base: TailthemeColor
): TailthemeColor {
  return {
    base: theme?.base ?? base.base,
    contrast: theme?.contrast ?? base.contrast,
    disabled: theme?.disabled ?? base.disabled,
    focus: theme?.focus ?? base.focus,
    hover: theme?.hover ?? base.hover,
    ring: theme?.ring ?? base.ring,
    soft: theme?.soft ?? base.soft,
    softContrast: theme?.softContrast ?? base.softContrast,
  };
}

export function generateTheme(
  theme: PartialAll<Tailtheme>,
  base: Tailtheme = BaseTheme
): Tailtheme {
  return {
    colors: {
      primary: generatePartialColor(theme.colors?.primary, base.colors.primary),
      accent: generatePartialColor(theme.colors?.accent, base.colors.accent),
      danger: generatePartialColor(theme.colors?.danger, base.colors.danger),
      success: generatePartialColor(theme.colors?.success, base.colors.success),
      warning: generatePartialColor(theme.colors?.warning, base.colors.warning),
      info: generatePartialColor(theme.colors?.info, base.colors.info),
      neutral: {
        primary: theme.colors?.neutral?.primary || base.colors.neutral.primary,
        secondary: theme.colors?.neutral?.secondary || base.colors.neutral.secondary,
        tertiary: theme.colors?.neutral?.tertiary || base.colors.neutral.tertiary,
        quaternary: theme.colors?.neutral?.quaternary || base.colors.neutral.quaternary,
      },
      background: {
        primary: theme.colors?.background?.primary || base.colors.background.primary,
        secondary: theme.colors?.background?.secondary || base.colors.background.secondary,
        contrast: theme.colors?.background?.contrast || base.colors.background.contrast,
      },
    },
  };
}

export function generateBackgroundColor(base: string): BackgroundColor {
  const color = Color(base);
  return {
    primary: color.hex(),
    contrast: color.isLight() ? Color("#000000").hex() : Color("#FFFFFF").hex(),
    secondary: color.isLight() ? color.darken(0.2).hex() : color.lighten(3).hex(),
  };
}
