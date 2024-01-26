import { TITLE } from "@theme/utils";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  children?: React.ReactNode;
  size?: keyof typeof TITLE;
}
export function Title({ children, size }: TitleProps) {
  return (
    <div
      className={twMerge("py-1 px-0.5 text-background-contrast", size ? TITLE[size] : TITLE.base)}>
      {children}
    </div>
  );
}
