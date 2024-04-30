import { Show, useObservable } from "@legendapp/state/react";
import { MARGINS_X, MARGINS_Y, ROUNDED } from "@theme/utils";
import { useId, forwardRef } from "react";
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

interface FileInputProps {
  title?: string;
  marginX?: keyof typeof MARGINS_X;
  marginY?: keyof typeof MARGINS_Y;
  size?: keyof typeof sizes;
  round?: keyof typeof ROUNDED;
  testId?: string;
}
export const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
  const id = useId();
  const url$ = useObservable<string>("");

  const { title, marginX, marginY, size, round, testId, ...others } = props;

  return (
    <Box
      full
      flat
      direction="column"
      items="start"
      justify="start"
      gap="none"
      marginX={props.marginX}
      marginY={props.marginY}>
      <label
        htmlFor={id}
        className={twMerge(
          "block font-medium text-background-contrast",
          size ? labelSizes[size] : labelSizes.md
        )}>
        {title}
      </label>
      <label
        htmlFor={id}
        className={twMerge(
          props.size ? sizes[props.size] : sizes.md,
          "flex w-full cursor-pointer appearance-none items-center justify-center border-[1.5px] border-dashed border-primary p-6 transition-all hover:border-primary-hover"
        )}>
        <div className="space-y-1 text-center">
          <Show
            if={url$}
            else={
              <>
                <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-background-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-background-contrast">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </div>
                <div className="text-background-contrast">
                  <button className="font-medium text-background-contrast hover:text-primary-hover">
                    Click to upload
                  </button>{" "}
                  or drag and drop
                </div>
                <p className="text-sm text-background-contrast">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </>
            }>
            {() => <img src={url$.get()} alt="logo" className="w-40 mx-auto aspect-video" />}
          </Show>
        </div>
        <input
          ref={ref}
          {...others}
          id={id}
          data-testid={testId}
          type="file"
          className="sr-only"
          onChange={(e) => {
            const fileSelected = e.target.files ? e.target.files[0] : null;
            if (fileSelected) {
              const url = URL.createObjectURL(fileSelected);
              url$.set(url);
            }
            (others as any)?.onChange?.(e);
          }}
          accept="image/png, image/jpeg, image/gif, image/svg+xml"
        />
      </label>
    </Box>
  );
});
