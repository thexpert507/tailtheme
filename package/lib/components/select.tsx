import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Select from "react-dropdown-select";
import { Box } from "@theme/components";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { ROUNDED } from "@theme/utils";

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

export interface Option<T = any> {
  value: T;
  label: string | JSX.Element;
}

interface Item<T = any> {
  label: string;
  value: T;
}

type FormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  title?: string;
  disabled?: boolean;
  help?: string;
  value?: string;
  defaultValue?: string;
  size?: keyof typeof sizes;
  round?: keyof typeof ROUNDED;
} & (
  | { type: "native"; items: Item[]; onChange: (value: any) => void }
  | { type: "jsx"; options: Option[]; control: Control<T, any> }
);

export const FormSelect = <T extends FieldValues>(props: FormSelectProps<T>) => {
  const id = useId();
  return (
    <Box full wrap={false} direction="column" flat gap="none">
      {props.title && (
        <label
          htmlFor={id}
          className={twMerge(
            props.size ? labelSizes[props.size] : labelSizes.md,
            "w-full block font-medium text-background-contrast after:text-danger after:content-['*']"
          )}>
          {props.title}
        </label>
      )}

      {props.type === "native" ? (
        <select
          id={id}
          disabled={props?.disabled}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          className={twMerge(
            props.size ? sizes[props.size] : sizes.md,
            props.round ? ROUNDED[props.round] : ROUNDED.md,
            "bg-background-primary text-background-contrast",
            "focus:border-primary-focus focus:ring focus:ring-primary-focus",
            "disabled:cursor-not-allowed disabled:bg-primary-disabled",
            "block w-full border-primary shadow-sm"
          )}>
          {props.items.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      ) : (
        <Controller
          control={props.control}
          name={props.name}
          render={({ field }) => {
            return (
              <Select
                additionalProps={{ className: "w-full" }}
                wrapperClassName="w-full"
                clearable={false}
                backspaceDelete={false}
                className="w-full"
                disabled={props?.disabled}
                values={props.options.filter((o) => o.value === field.value)}
                {...field}
                onChange={(e) => {
                  field.onChange(e[0].value);
                }}
                options={props.options}></Select>
            );
          }}></Controller>
      )}

      {props.help && (
        <p
          className={twMerge(
            "text-background-contrast",
            props.size ? labelSizes[props.size] : labelSizes.md
          )}>
          {props.help}
        </p>
      )}
    </Box>
  );
};
