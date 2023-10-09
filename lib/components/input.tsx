import { twMerge } from "tailwind-merge";
import { forwardRef, HTMLProps, useId } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Box } from "./box";
import { MARGINS_X, MARGINS_Y } from "@theme/utils";

interface FormInputProps extends HTMLProps<HTMLInputElement> {
  closable?: boolean;
  onClose?: Function;
  title?: string;
  marginX?: keyof typeof MARGINS_X;
  marginY?: keyof typeof MARGINS_Y;
  error?: string;
}
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const { closable, marginX, marginY, ...others } = props;
  const id = useId();
  return (
    <Box full flat direction="column" items="start" marginX={props.marginX} marginY={props.marginY}>
      {props.title && (
        <Box flat justify="start" full>
          <label
            htmlFor={id}
            className={twMerge(
              "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
              props.error && "after:ml-0.5 after:text-red-500 after:content-['*']"
            )}
          >
            {props.title}
          </label>
          {props.closable && (
            <BsTrashFill
              onClick={() => {
                props.onClose && props.onClose();
              }}
              className="text-red-500 cursor-pointer"
            ></BsTrashFill>
          )}
        </Box>
      )}
      <input
        className={twMerge(
          "block w-full rounded-md dark:bg-stone-900 dark:text-gray-100 dark:autofill:bg-gray-900 border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        )}
        {...others}
        id={id}
        autoComplete="off"
        ref={ref}
      />
      {props.error && <p className="mt-1 text-sm text-red-500">{props.error}</p>}
    </Box>
  );
});
