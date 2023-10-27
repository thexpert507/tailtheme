import { ROUNDED, TooltipPlacement } from "@theme/utils";
import { twMerge } from "tailwind-merge";
import { MouseEvent, useRef } from "react";
import { Tooltip } from "./tooltip";

const TEXT_COLORS = {
  primary: "text-primary-600 dark:text-primary-600/80",
  green: "text-green-600 dark:text-green-600/80",
  yellow: "text-yellow-600 dark:text-yellow-600/80",
  red: "text-red-600 dark:text-red-600/80",
  violet: "text-violet-600 dark:text-violet-600/80",
  gray: "text-gray-600 dark:text-gray-600/80",
};

const BORDER_COLORS = {
  primary:
    "border-primary-500 dark:border-primary-500/80 focus:ring-primary-100 dark:focus:ring-primary-100/40",
  green:
    "border-green-500 dark:border-green-500/80 focus:ring-green-100 dark:focus:ring-green-100/40",
  yellow:
    "border-yellow-500 dark:border-yellow-500/80 focus:ring-yellow-100 dark:focus:ring-yellow-100/40",
  red: "border-red-500 dark:border-red-500/80 focus:ring-red-100 dark:focus:ring-red-100/40",
  violet:
    "border-violet-500 dark:border-violet-500/80 focus:ring-violet-100 dark:focus:ring-violet-100/40",
  gray: "border-gray-500 dark:border-gray-500/80 focus:ring-gray-100 dark:focus:ring-gray-100/40",
};

const colors = {
  primary:
    "bg-primary-500 dark:bg-primary-500/80 text-white hover:bg-primary-700 dark:hover:bg-primary-700/80 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300",
  green:
    "bg-green-500 dark:bg-green-500/80 text-white hover:bg-green-700 focus:ring focus:ring-green-200 disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300",
  yellow:
    "bg-yellow-500 dark:bg-yellow-500/80 text-white hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300",
  red: "bg-red-500 dark:bg-red-500/80 text-white hover:bg-red-700 focus:ring focus:ring-red-200 disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300",
  violet:
    "bg-violet-500 dark:bg-violet-500/80 text-white hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300",
  gray: "bg-gray-700 dark:bg-stone-700/80 text-white hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300",
};

function Variant(color: keyof typeof colors) {
  return {
    text: "text-gray-700 dark:text-gray-100 border-transparent bg-transparent shadow-none",
    outlined: `bg-white dark:bg-stone-900 ${TEXT_COLORS[color]} ${BORDER_COLORS[color]} `,
    contained: `border border-transparent ${colors[color]}`,
    grouped: `border-none border-transparent bg-transparent shadow-none`,
  };
}

type variants = keyof ReturnType<typeof Variant>;

const sizes = {
  "3xs": "px-1 py-0.5 text-[0.5rem]",
  "2xs": "px-2 py-1 text-[0.625rem]",
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-lg",
};

type TooltipProps = {
  placement?: TooltipPlacement;
  children?: string;
};

interface ButtonProps {
  children?: React.ReactNode;
  round?: keyof typeof ROUNDED;
  color?: keyof typeof colors;
  variant?: variants;
  size?: keyof typeof sizes;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  tooltip?: TooltipProps;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  preventDefault?: boolean;
  stopPropagation?: boolean;
}
export function Button(props: ButtonProps) {
  const buttonRef = useRef(null);
  return (
    <button
      ref={buttonRef}
      disabled={props.disabled}
      type={props.type ?? "button"}
      onClick={(e) => {
        props.preventDefault && e.preventDefault();
        props.stopPropagation && e.stopPropagation();
        props.onClick && props.onClick(e);
      }}
      className={twMerge(
        "relative border text-center font-medium text-gray-700 dark:text-gray-100 transition-all focus:ring disabled:cursor-not-allowed flex items-center justify-center gap-2",
        props.round ? ROUNDED[props.round] : ROUNDED.none,
        props.variant && Variant(props.color ?? "primary")[props.variant],
        props.size ? sizes[props.size] : sizes.md,
        props.color && props.variant === "contained" && colors[props.color],
        props.fullWidth && "w-full"
      )}>
      {props.children}
      {props.tooltip && (
        <Tooltip placement={props.tooltip.placement} elementRef={buttonRef}>
          {props.tooltip.children}
        </Tooltip>
      )}
    </button>
  );
}
