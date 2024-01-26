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
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const { closable, marginX, marginY, leftIcon, rightIcon, ...others } = props;
  const id = useId();
  return (
    <Box full flat direction="column" items="start" marginX={props.marginX} marginY={props.marginY}>
      {props.title && (
        <Box flat justify="start" full>
          <label
            htmlFor={id}
            className={twMerge(
              "mb-1 block text-sm font-medium text-background-contrast",
              props.error && "after:ml-0.5 after:text-danger after:content-['*']"
            )}>
            {props.title}
          </label>
          {props.closable && (
            <BsTrashFill
              onClick={() => {
                props.onClose && props.onClose();
              }}
              className="text-danger cursor-pointer"></BsTrashFill>
          )}
        </Box>
      )}
      <div className="relative w-full">
        {props.leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5">
            {props.leftIcon}
          </div>
        )}
        <input
          className={twMerge(
            "text-background-contrast",
            props.rightIcon && "pr-10",
            props.leftIcon && "pl-10",
            "block w-full rounded-md bg-background-primary border-primary shadow-sm focus:border-primary-focus focus:ring focus:ring-primary-focus focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-primary-disabled disabled:text-primary-disabled"
          )}
          {...others}
          id={id}
          autoComplete="off"
          ref={ref}
        />
        {props.rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center px-2.5">
            {props.rightIcon}
          </div>
        )}
      </div>
      {props.error && <p className="mt-1 text-sm text-danger">{props.error}</p>}
    </Box>
  );
});
