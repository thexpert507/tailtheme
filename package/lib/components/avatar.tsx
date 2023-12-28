import { ROUNDED } from "@theme/utils";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const avatarSizes = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
  "2xl": "h-16 w-16",
  "3xl": "h-20 w-20",
  "4xl": "h-24 w-24",
};

const placeholderTextSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

const whithTextSizes = {
  xs: {
    name: "text-[0.65rem]",
    subtitle: "text-[0.35rem]",
  },
  sm: {
    name: "text-xs",
    subtitle: "text-[0.50rem]",
  },
  md: {
    name: "text-sm",
    subtitle: "text-xs",
  },
  lg: {
    name: "text-base",
    subtitle: "text-sm",
  },
  xl: {
    name: "text-lg",
    subtitle: "text-base",
  },
  "2xl": {
    name: "text-xl",
    subtitle: "text-lg",
  },
  "3xl": {
    name: "text-2xl",
    subtitle: "text-xl",
  },
  "4xl": {
    name: "text-3xl",
    subtitle: "text-2xl",
  },
};

type AvatarProps = {
  size?: keyof typeof avatarSizes;
  round?: keyof typeof ROUNDED;
} & (
  | {
      type: "image";
      src: string;
      name?: string;
    }
  | {
      type: "placeholder";
      name: string;
    }
  | {
      type: "whithText";
      src: string;
      name: string;
      subtitle: string;
      position?: "left" | "right";
    }
);

export function Avatar(props: AvatarProps) {
  const baseJsx = (
    <div
      className={twMerge(
        "overflow-hidden",
        props.size ? avatarSizes[props.size] : avatarSizes.md,
        props.round ? ROUNDED[props.round] : ROUNDED.full
      )}>
      {props.type === "image" || props.type === "whithText" ? (
        <Fragment>
          {props.src ? (
            <img
              className="h-full w-full object-cover object-center"
              src={props.src}
              alt={props.name}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center overflow-hidden bg-secondary-100">
              <svg
                className="h-1/2 w-1/2 text-secondary-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"></path>
              </svg>
            </div>
          )}
        </Fragment>
      ) : null}

      {props.type === "placeholder" ? (
        <PlaceholderName name={props.name} size={props.size} />
      ) : null}
    </div>
  );

  if (props.type === "whithText") {
    const baseText = (
      <div>
        <div
          className={twMerge(
            "font-medium text-secondary-500",
            props.size ? whithTextSizes[props.size].name : whithTextSizes.md.name,
            props.position === "left" ? "text-right" : "text-left"
          )}>
          {props.name}
        </div>
        <div
          className={twMerge(
            "text-secondary-400 text-",
            props.size ? whithTextSizes[props.size].subtitle : whithTextSizes.md.subtitle,
            props.position === "left" ? "text-right" : "text-left"
          )}>
          {props.subtitle}
        </div>
      </div>
    );

    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        {props.position === "left" ? (
          <Fragment>
            {baseText}
            {baseJsx}
          </Fragment>
        ) : null}

        {props.position === "right" ? (
          <Fragment>
            {baseJsx}
            {baseText}
          </Fragment>
        ) : null}

        {!props.position ? (
          <Fragment>
            {baseJsx}
            {baseText}
          </Fragment>
        ) : null}
      </div>
    );
  } else return baseJsx;
}

function PlaceholderName(props: { name: string; size?: keyof typeof placeholderTextSizes }) {
  const [firstName, lastName] = props.name.split(" ");
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-secondary-100 text-secondary-400">
      <span className={placeholderTextSizes[props.size ?? "md"]}>
        {firstName?.[0]}
        {lastName?.[0]}
      </span>
    </div>
  );
}
