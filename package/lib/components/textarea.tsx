import { forwardRef, useId } from "react";
import { MARGINS_X, MARGINS_Y, ROUNDED } from "../utils";
import { Box } from "./box";
import { twMerge } from "tailwind-merge";

const labelSizes = {
  "3xs": "text-xs",
  "2xs": "text-xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-sm",
  xl: "text-sm",
};

const textSizes = {
  "3xs": "text-xs",
  "2xs": "text-xs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const sizes = {
  "3xs": `my-0.5 px-1 py-0.5 ${textSizes["3xs"]}`,
  "2xs": `my-0.5 px-2 py-1 ${textSizes["2xs"]}`,
  xs: `my-0.5 px-2 py-1.5 ${textSizes.xs}`,
  sm: `my-1 px-2 py-2 ${textSizes.sm}`,
  md: `my-1 px-3 py-2.5 ${textSizes.md}`,
  lg: `my-1 px-3 py-3 ${textSizes.lg}`,
  xl: `my-1 px-3 py-4 ${textSizes.xl}`,
};

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  rows?: number;
  marginX?: keyof typeof MARGINS_X;
  marginY?: keyof typeof MARGINS_Y;
  size?: keyof typeof sizes;
  round?: keyof typeof ROUNDED;
  testId?: string;
}
export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>((props, ref) => {
  const id = useId();
  return (
    <Box
      full
      flat
      direction="column"
      items="start"
      marginX={props.marginX}
      marginY={props.marginY}
      gap="none"
      testId={props.testId}>
      {props.title && (
        <label
          htmlFor={id}
          className={twMerge(
            "block font-medium text-background-contrast",
            props.size ? labelSizes[props.size] : labelSizes.md
          )}>
          {props.title}
        </label>
      )}
      <textarea
        id={id}
        className={twMerge(
          props.size ? sizes[props.size] : sizes.md,
          props.round ? ROUNDED[props.round] : ROUNDED.md,
          "bg-background-primary border-primary",
          "focus:border-primary-focus focus:ring focus:ring-primary-focus focus:ring-opacity-50",
          "disabled:cursor-not-allowed disabled:bg-primary-disabled",
          "block w-full shadow-sm text-background-contrast"
        )}
        placeholder="Leave a message"
        {...props}
        ref={ref}
      />
    </Box>
  );
});
