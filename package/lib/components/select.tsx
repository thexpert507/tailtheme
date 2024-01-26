import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Select from "react-dropdown-select";
import { Box } from "@theme/components";
import { useId } from "react";

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
} & (
  | { type: "native"; items: Item[]; onChange: (value: any) => void }
  | { type: "jsx"; options: Option[]; control: Control<T, any> }
);

export const FormSelect = <T extends FieldValues>(props: FormSelectProps<T>) => {
  const id = useId();
  return (
    <Box full wrap={false} direction="column" flat>
      {props.title && (
        <label
          htmlFor={id}
          className="w-full mb-1 block text-sm font-medium text-background-contrast after:text-danger after:content-['*']">
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
          className="block w-full rounded-md bg-background-primary text-background-contrast border-primary shadow-sm focus:border-primary-focus focus:ring focus:ring-primary-focus disabled:cursor-not-allowed disabled:bg-primary-disabled">
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

      {props.help && <p className="mt-1 text-sm text-background-contrast">{props.help}</p>}
    </Box>
  );
};
