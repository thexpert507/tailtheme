import { TITLE } from "@theme/utils";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  children?: React.ReactNode;
  size?: keyof typeof TITLE;
  testId?: string;
}
export function Title({ children, size, testId }: TitleProps) {
  return (
    <div
      data-testid={testId}
      className={twMerge("py-1 px-0.5 text-background-contrast", size ? TITLE[size] : TITLE.base)}>
      {children}
    </div>
  );
}
