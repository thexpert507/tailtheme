import { twMerge } from "tailwind-merge";
import { useMediaContext } from "./mediaContext";
import { ROUNDED } from "@theme/utils";

export const VideoView = () => {
  const { src, ...props } = useMediaContext();
  return (
    <video
      style={{
        ...props.size,
      }}
      src={src}
      controls
      className={twMerge(
        "aspect-video w-full object-cover min-h-[170px]",
        props.round ? ROUNDED[props.round] : ROUNDED.none
      )}></video>
  );
};
