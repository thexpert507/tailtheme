import { ROUNDED } from "@theme/utils";
import { twMerge } from "tailwind-merge";

const colors = {
  primary: "bg-primary-50 dark:bg-primary-800/40 text-primary-600 dark:text-primary-400",
  green: "bg-green-50 text-green-600 dark:text-green-400 dark:bg-green-800/40",
  yellow: "bg-yellow-50 text-yellow-600 dark:text-yellow-400 dark:bg-yellow-800/40",
  red: "bg-red-50 text-red-600 dark:text-red-400 dark:bg-red-800/40",
  gray: "bg-gray-100 text-gray-600 dark:text-gray-400 dark:bg-stone-900/40",
  black: "bg-black text-white dark:bg-white dark:text-black/40",
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
  onClose?: () => void;
}
export function Badge({
  children,
  color,
  large,
  round,
  closable,
  onClose,
  block,
  width,
  truncate,
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        "rounded-full px-2 py-1 text-xs font-semibold whitespace-nowrap",
        colors[color ?? "primary"],
        large && "text-sm",
        ROUNDED[round ?? "sm"],
        closable && "inline-flex items-center gap-1",
        block && "block",
        width && twMerge(width, "truncate"),
        truncate && "truncate"
      )}>
      {children}

      {closable && (
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={twMerge("h-3 w-3 opacity-80", large && "h-4 w-4")}>
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </span>
  );
}
