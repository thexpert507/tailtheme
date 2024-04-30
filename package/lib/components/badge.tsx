import { COLORS, ROUNDED } from "@theme/utils";
import { twMerge } from "tailwind-merge";

const colors: Record<COLORS, string> = {
  primary: "bg-primary text-primary-contrast",
  accent: "bg-accent text-accent-contrast",
  success: "bg-success text-success-contrast",
  warning: "bg-warning text-warning-contrast",
  danger: "bg-danger text-danger-contrast",
  info: "bg-info text-info-contrast",
};

interface BadgeProps {
  children?: React.ReactNode;
  color?: keyof typeof colors;
  round?: keyof typeof ROUNDED;
  large?: boolean;
  closable?: boolean;
  block?: boolean;
  width?: string;
  truncate?: boolean;
  testId?: string;
  onClose?: () => void;
}
export function Badge(props: BadgeProps) {
  return (
    <span
      data-testid={props.testId}
      className={twMerge(
        "rounded-full px-2 py-1 text-xs font-semibold whitespace-nowrap",
        colors[props.color ?? "primary"],
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
