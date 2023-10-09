import { useHover } from "@legendapp/state/react-hooks/useHover";
import { RefObject, useRef } from "react";
import { TooltipPlacement } from "../utils";
import { Box } from "./box";
import { createPortal } from "react-dom";
import { Memo, useComputed } from "@legendapp/state/react";
import { twMerge } from "tailwind-merge";

type StylePosition = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

const portal = document.createElement("div");
portal.classList.add("h-0", "m-0");
document.body.appendChild(portal);

interface TooltipProps {
  children: React.ReactNode;
  elementRef: RefObject<HTMLElement>;
  placement?: TooltipPlacement;
}
export function Tooltip(props: TooltipProps) {
  const tooltipDivRef = useRef<HTMLDivElement>(null);
  const isHovered$ = useHover(props.elementRef as any);

  const calculatePosition = (element: DOMRect, tooltip: DOMRect): StylePosition => {
    const position: StylePosition = {};
    switch (props.placement) {
      case "top":
        position.top = element.top - tooltip.height - 10;
        position.left = element.left + (element.width - tooltip.width) / 2;
        break;
      case "bottom":
        position.top = element.top + element.height + 10;
        position.left = element.left + (element.width - tooltip.width) / 2;
        break;
      case "left":
        position.top = element.top - (tooltip.height - element.height) / 2;
        position.left = element.left - tooltip.width - 10;
        break;
      case "right":
        position.top = element.top - (tooltip.height - element.height) / 2;
        position.left = element.left + element.width + 10;
        break;
    }
    return position;
  };

  const styles$ = useComputed((): StylePosition => {
    const isHovered = isHovered$.get();
    if (!isHovered) return {};
    const element = props.elementRef.current?.getBoundingClientRect()!;
    const tooltip = tooltipDivRef.current?.getBoundingClientRect()!;
    if (!element) return {};
    if (!tooltip) return {};
    return calculatePosition(element, tooltip);
  });

  return createPortal(
    <Memo>
      {() => {
        return (
          <div
            ref={tooltipDivRef}
            style={styles$.get()}
            className={twMerge(
              "opacity-0 fixed z-[9999] bg-gray-100 dark:bg-stone-700 shadow dark:shadow-stone-800 text-gray-900 dark:text-gray-100 whitespace-nowrap rounded-md",
              isHovered$.get() && "opacity-100"
            )}
          >
            <Box flat paddingX="md" paddingY="xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              {props.children}
            </Box>
          </div>
        );
      }}
    </Memo>,
    portal
  );
}
