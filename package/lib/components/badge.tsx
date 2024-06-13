import { COLORS, ROUNDED } from "@theme/utils";
import { BG_COLORS, TEXT_CONTRAST_COLORS, TEXT_COLORS, BORDER_COLORS, SOFT_COLORS } from "@theme/utils/colors";
import { twMerge } from "tailwind-merge";

function Variant(color: COLORS): Record<Variants, string> {
  return {
    solid: `${BG_COLORS[color]} ${TEXT_CONTRAST_COLORS[color]} border border-transparent`,
    outlined: `bg-transparent border ${TEXT_COLORS[color]} ${BORDER_COLORS[color]}`,
    ghost: `border border-transparent ${SOFT_COLORS[color]}`,
  };
}

type Variants = "solid" | "outlined" | "ghost";

interface BadgeProps {
  children?: React.ReactNode;
  color?: COLORS;
  round?: keyof typeof ROUNDED;
  large?: boolean;
  closable?: boolean;
  block?: boolean;
  width?: string;
  truncate?: boolean;
  testId?: string;
  variant?: Variants;
  onClose?: () => void;
}
export function Badge(props: BadgeProps) {
  return (
    <span
      data-testid={props.testId}
      className={twMerge(
        "rounded-full px-2 py-1 text-xs font-semibold whitespace-nowrap",
        Variant(props.color ?? "primary")[props.variant ?? "solid"],
        props.large && "text-sm",
        ROUNDED[props.round ?? "sm"],
        props.closable && "inline-flex items-center gap-1",
        props.block && "block",
        props.width && twMerge(props.width, "truncate"),
        props.truncate && "truncate"
      )}>
      {props.children}

      {props.closable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            props.onClose?.();
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={twMerge("h-3 w-3 opacity-80", props.large && "h-4 w-4")}>
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </span>
  );
}
