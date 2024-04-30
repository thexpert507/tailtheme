import { twMerge } from "tailwind-merge";

interface FormProps {
  children?: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  testId?: string;
}
export function Form(props: FormProps) {
  return (
    <form
      data-testid={props.testId}
      className={twMerge("space-y-5", props?.className)}
      onSubmit={(e) => props.onSubmit && props.onSubmit(e)}>
      {props.children}
    </form>
  );
}
