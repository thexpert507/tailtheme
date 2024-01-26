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
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-background-contrast">
          {props.title}
        </label>
      )}
      <textarea
        id={id}
        className="block w-full bg-background-primary rounded-md border-primary shadow-sm focus:border-primary-focus focus:ring focus:ring-primary-focus focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-primary-disabled text-background-contrast"
        placeholder="Leave a message"
        {...props}
        ref={ref}
      />
    </Box>
  );
});
