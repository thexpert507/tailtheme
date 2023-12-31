import { twMerge } from "tailwind-merge";
import { useMediaContext } from "./mediaContext";
import { ROUNDED } from "@theme/utils";

export const HtmlView = () => {
  const { src, ...props } = useMediaContext();
  return (
    <div
      style={{ ...props.size }}
      className={twMerge(
        "w-full flex flex-col items-center justify-around bg-gray-100 aspect-square",
        props.round ? ROUNDED[props.round] : ROUNDED.none
      )}>
      <iframe
        src={src}
        title={src}
        sandbox="allow-scripts allow-same-origin"
        className="w-full h-full rounded-t-xl"></iframe>
    </div>
  );
};
