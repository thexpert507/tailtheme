import { COLORS } from "./const";

export const SOFT_COLORS: Record<COLORS, string> = {
  primary: "bg-primary-soft text-primary-soft-contrast",
  accent: "bg-accent-soft text-accent-soft-contrast",
  warning: "bg-warning-soft text-warning-soft-contrast",
  danger: "bg-danger-soft text-danger-soft-contrast",
  info: "bg-info-soft text-info-soft-contrast",
  success: "bg-success-soft text-success-soft-contrast",
};

export const HOVER_SOFT_COLORS: Record<COLORS, string> = {
  primary: "hover:bg-primary-soft hover:text-primary-soft-contrast",
  accent: "hover:bg-accent-soft hover:text-accent-soft-contrast",
  warning: "hover:bg-warning-soft hover:text-warning-soft-contrast",
  danger: "hover:bg-danger-soft hover:text-danger-soft-contrast",
  info: "hover:bg-info-soft hover:text-info-soft-contrast",
  success: "hover:bg-success-soft hover:text-success-soft-contrast",
};

export const BG_COLORS: Record<COLORS, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-info",
  success: "bg-success",
};

export const TEXT_COLORS: Record<COLORS, string> = {
  primary: "text-primary",
  accent: "text-accent",
  warning: "text-warning",
  danger: "text-danger",
  info: "text-info",
  success: "text-success",
};

export const TEXT_CONTRAST_COLORS: Record<COLORS, string> = {
  primary: "text-primary-contrast",
  accent: "text-accent-contrast",
  warning: "text-warning-contrast",
  danger: "text-danger-contrast",
  info: "text-info-contrast",
  success: "text-success-contrast",
};

export const BORDER_COLORS: Record<COLORS, string> = {
  primary: "border-primary",
  accent: "border-accent",
  warning: "border-warning",
  danger: "border-danger",
  info: "border-info",
  success: "border-success",
};

export const RING_COLORS: Record<COLORS, string> = {
  primary: "ring-primary",
  accent: "ring-accent",
  warning: "ring-warning",
  danger: "ring-danger",
  info: "ring-info",
  success: "ring-success",
};

export const RING_FOCUS_COLORS: Record<COLORS, string> = {
  primary: "focus:ring-primary-focus",
  accent: "focus:ring-accent-focus",
  warning: "focus:ring-warning-focus",
  danger: "focus:ring-danger-focus",
  info: "focus:ring-info-focus",
  success: "focus:ring-success-focus",
};
