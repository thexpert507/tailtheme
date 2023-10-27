import { twMerge } from "tailwind-merge";
import { useMediaContext } from "./mediaContext";
import { ROUNDED } from "@theme/utils";

export const PdfView = () => {
  const { src, ...props } = useMediaContext();
  return (
    <div
      style={{ ...props.size }}
      className={twMerge(
        "aspect-video w-full object-cover min-h-[170px] overflow-hidden",
        props.round ? ROUNDED[props.round] : ROUNDED.none
      )}>
      <iframe src={src} title="pdf" className="w-full h-full"></iframe>
    </div>
  );
};
