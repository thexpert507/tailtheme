import { twMerge } from "tailwind-merge";
import { forwardRef, HTMLProps, useId } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Box } from "./box";
import { MARGINS_X, MARGINS_Y, ROUNDED } from "@theme/utils";

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

interface FormInputProps extends HTMLProps<HTMLInputElement> {
  closable?: boolean;
  onClose?: Function;
  title?: string;
  marginX?: keyof typeof MARGINS_X;
  marginY?: keyof typeof MARGINS_Y;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  round?: keyof typeof ROUNDED;
  isize?: keyof typeof sizes;
}
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const { closable, marginX, marginY, leftIcon, rightIcon, isize, ...others } = props;
  const id = useId();
  return (
    <Box
      full
      flat
      direction="column"
      items="start"
      marginX={props.marginX}
      marginY={props.marginY}
      gap="none">
      {props.title && (
        <Box flat justify="start" full>
          <label
            htmlFor={id}
            className={twMerge(
              isize ? labelSizes[isize] : labelSizes.sm,
              "block font-medium text-background-contrast",
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
            props.round ? ROUNDED[props.round] : ROUNDED.md,
            props.isize ? sizes[props.isize] : sizes.md,
            "focus:border-primary-focus focus:ring focus:ring-primary-focus focus:ring-opacity-50",
            "disabled:cursor-not-allowed disabled:bg-primary-disabled disabled:text-primary-disabled",
            "block w-full bg-background-primary border-primary shadow-sm"
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
      {props.error && (
        <p className={twMerge("text-danger", isize ? labelSizes[isize] : labelSizes.sm)}>
          {props.error}
        </p>
      )}
    </Box>
  );
});
