import { forwardRef, useId } from "react";
import { MARGINS_X, MARGINS_Y } from "../utils";
import { Box } from "./box";

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  rows?: number;
  marginX?: keyof typeof MARGINS_X;
  marginY?: keyof typeof MARGINS_Y;
}
export const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>((props, ref) => {
  const id = useId();
  return (
    <Box full flat direction="column" items="start" marginX={props.marginX} marginY={props.marginY}>
      {props.title && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-100"
        >
          {props.title}
        </label>
      )}
      <textarea
        id={id}
        className="block w-full rounded-md dark:bg-stone-900 dark:text-gray-100 dark:autofill:bg-gray-900 border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
        placeholder="Leave a message"
        {...props}
        ref={ref}
      />
    </Box>
  );
});
