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
          className="w-full mb-1 block text-sm font-medium text-gray-700 after:text-red-500 after:content-['*']"
        >
          {props.title}
        </label>
      )}

      {props.type === "native" ? (
        <select
          id={id}
          disabled={props?.disabled}
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          className="block w-full rounded-md dark:bg-stone-700 dark:text-gray-100 border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
        >
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
                options={props.options}
              ></Select>
            );
          }}
        ></Controller>
      )}

      {props.help && <p className="mt-1 text-sm text-gray-500">{props.help}</p>}
    </Box>
  );
};
