import {
  GAP,
  ITEMS,
  JUSTIFY,
  MARGINS_X,
  MARGINS_Y,
  PADDING_X,
  PADDING_Y,
  SHADOW,
  BACKGROUND_COLORS,
  ROUNDED
} from "@theme/utils";
import { twMerge } from "tailwind-merge";

interface BoxProps {
  children?: React.ReactNode;
  shadow?: keyof typeof SHADOW;
  items?: keyof typeof ITEMS;
  justify?: keyof typeof JUSTIFY;
  gap?: keyof typeof GAP;
  flat?: boolean;
  full?: boolean;
  shrink?: boolean;
  wrap?: boolean;
  direction?: "row" | "column";
  marginX?: keyof typeof MARGINS_X;
  marginY?: keyof typeof MARGINS_Y;
  paddingX?: keyof typeof PADDING_X;
  paddingY?: keyof typeof PADDING_Y;
  height?: string;
  width?: string;
  bg?: keyof typeof BACKGROUND_COLORS;
  round?: keyof typeof ROUNDED;
}
export function Box(props: BoxProps) {
  return (
    <div
      className={twMerge(
        "flex rounded-lg bg-transparent px-1 py-2 gap-1.5",
        props.shadow && SHADOW[props.shadow],
        props.items ? ITEMS[props.items] : ITEMS.center,
        props.justify ? JUSTIFY[props.justify] : JUSTIFY.center,
        props.gap ? GAP[props.gap] : GAP.medium,
        props.flat && "p-0",
        props.full && "w-full",
        props.shrink ? "flex-shrink" : "flex-shrink-0",
        props.wrap ? "flex-wrap" : "flex-nowrap",
        props?.direction === "column" ? "flex-col" : "flex-row",
        props.marginX ? MARGINS_X[props.marginX] : MARGINS_X.none,
        props.marginY ? MARGINS_Y[props.marginY] : MARGINS_Y.none,
        props.paddingX ? PADDING_X[props.paddingX] : PADDING_X.none,
        props.paddingY ? PADDING_Y[props.paddingY] : PADDING_Y.none,
        props.height ? `${props.height} overflow-auto` : "h-auto",
        props.width && `${props.width} overflow-auto`,
        props.bg && BACKGROUND_COLORS[props.bg],
        props.round ? ROUNDED[props.round] : ROUNDED.none
      )}>
      {props.children}
    </div>
  );
}
