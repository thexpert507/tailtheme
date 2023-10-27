import { twMerge } from "tailwind-merge";

const colors = {
  primary: "bg-primary-500 dark:bg-primary-500/80",
  green: "bg-green-500 dark:bg-green-500/80",
  yellow: "bg-yellow-500 dark:bg-yellow-500/80",
  red: "bg-red-500 dark:bg-red-500/80",
  violet: "bg-violet-500 dark:bg-violet-500/80",
  gray: "bg-gray-700 dark:bg-gray-700/80",
};

const sizes = {
  xs: "h-px",
  sm: "h-1",
  md: "h-2",
  lg: "h-4",
};

const labelSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-sm",
  lg: "text-base",
};

interface ProgressProps {
  percentage: number;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  label?: string;
  labelSize?: keyof typeof labelSizes;
  showPercentage?: boolean;
}
export function Progress(props: ProgressProps) {
  const baseJSX = (
    <div
      className={twMerge(
        "relative flex w-full overflow-hidden rounded-full bg-secondary-200 dark:bg-transparent",
        props.size ? sizes[props.size] : sizes.md
      )}
    >
      <div
        role="progressbar"
        aria-valuenow={props.percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: props.percentage + "%",
        }}
        className={twMerge("flex h-full bg-transparent", props.color ? colors[props.color] : colors.primary)}
      ></div>
    </div>
  );

  if (props.label)
    return (
      <div className="space-y-1 dark:bg-transparent w-full">
        <dl className="flex items-center justify-between">
          <dt
            className={twMerge(
              "text-secondary-700 dark:text-gray-100",
              props.size && !props.labelSize ? labelSizes[props.size] : labelSizes.md,
              props.labelSize ? labelSizes[props.labelSize] : labelSizes.md
            )}
          >
            {props.label}
          </dt>
          {props.showPercentage && (
            <dd
              className={twMerge(
                "text-secondary-500 dark:text-gray-100",
                props.size && !props.labelSize ? labelSizes[props.size] : labelSizes.md,
                props.labelSize ? labelSizes[props.labelSize] : labelSizes.md
              )}
            >
              {props.percentage}%
            </dd>
          )}
        </dl>
        {baseJSX}
      </div>
    );

  return baseJSX;
}
