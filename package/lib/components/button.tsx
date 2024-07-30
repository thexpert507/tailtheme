import { ROUNDED, TooltipPlacement, COLORS, cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { MouseEvent, forwardRef } from "react";
import {
  BORDER_COLORS,
  HOVER_SOFT_COLORS,
  RING_FOCUS_COLORS,
  SOFT_COLORS,
  TEXT_COLORS,
} from "@/utils/colors";

const colors: Record<COLORS, string> = {
  primary:
    "bg-primary text-primary-contrast hover:bg-primary-hover focus:ring disabled:cursor-not-allowed disabled:border-primary-disabled disabled:bg-primary-disabled",
  accent:
    "bg-accent text-accent-contrast hover:bg-accent-hover focus:ring focus:ring-accent-focus disabled:cursor-not-allowed disabled:border-accent-disabled disabled:bg-accent-disabled",
  warning:
    "bg-warning text-warning-contrast hover:bg-warning-hover focus:ring focus:ring-warning-focus disabled:cursor-not-allowed disabled:border-warning-disabled disabled:bg-warning-disabled",
  danger:
    "bg-danger text-danger-contrast hover:bg-danger-hover focus:ring focus:ring-danger-focus disabled:cursor-not-allowed disabled:border-danger-disabled disabled:bg-danger-disabled",
  info: "bg-info text-info-contrast hover:bg-info-hover focus:ring focus:ring-info-hover disabled:cursor-not-allowed disabled:border-info-disabled disabled:bg-info-disabled",
  success:
    "bg-success text-success-contrast hover:bg-success-hover focus:ring focus:ring-success-focus disabled:cursor-not-allowed disabled:border-success-disabled disabled:bg-success-disabled",
};

function Variant(color: COLORS) {
  return {
    text: `border-transparent bg-transparent text-background-contrast ${HOVER_SOFT_COLORS[color]} ring-transparent transition-all duration-300`,
    outlined: `bg-transparent ${TEXT_COLORS[color]} ${BORDER_COLORS[color]} ${RING_FOCUS_COLORS[color]} ${HOVER_SOFT_COLORS[color]}`,
    contained: `border border-transparent ${colors[color]}`,
    ghost: `border border-transparent ${SOFT_COLORS[color]} focus:ring focus:ring-${color}-focus`,
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  round?: keyof typeof ROUNDED;
  color?: COLORS;
  variant?: variants;
  size?: keyof typeof sizes;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  tooltip?: TooltipProps;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  testId?: string;
  className?: string;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((cprops, ref) => {
  const {
    testId,
    asChild = false,
    round,
    color,
    variant,
    size,
    disabled,
    fullWidth,
    tooltip,
    preventDefault,
    stopPropagation,
    className,
    ...props
  } = cprops;
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-testid={testId}
      ref={ref}
      disabled={disabled}
      type={props.type ?? "button"}
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        preventDefault && e.preventDefault();
        stopPropagation && e.stopPropagation();
        props.onClick && props.onClick(e);
      }}
      className={cn(
        "border text-center font-medium transition-all focus:ring disabled:cursor-not-allowed flex items-center justify-center gap-2",
        round ? ROUNDED[round] : ROUNDED.none,
        variant && Variant(color ?? "primary")[variant],
        size ? sizes[size] : sizes.md,
        color && variant === "contained" && colors[color],
        fullWidth && "w-full",
        className
      )}
      {...props}>
      {props.children}
    </Comp>
  );
});

export { Button };
