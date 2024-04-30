import { Fragment, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type WrapComponentProps = {
  onClick: () => void;
};

type DropdownOption =
  | {
      label: string;
      onClick: () => void;
      icon?: React.ReactNode;
    }
  | { component: React.ReactNode };

type DropdownProps = {
  wrapComponent: (props: WrapComponentProps) => React.ReactNode;
  options?: DropdownOption[];
  position?: "left" | "right";
  width?: string;
  testId?: string;
};
export function Dropdown(props: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0 as number | string,
    right: 0 as number | string,
  });
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return setPosition({ top: 0, left: 0, right: 0 });
    const rect = divRef.current.getBoundingClientRect();

    if (props.position === "left") {
      setPosition({ top: rect.top + rect.height, left: rect.left, right: "auto" });
    }

    if (props.position === "right") {
      setPosition({
        top: rect.top + rect.height,
        left: "auto",
        right: window.innerWidth - rect.right,
      });
    }

    if (!props.position) {
      setPosition({ top: rect.top + rect.height, left: rect.left, right: "auto" });
    }
  }, [divRef.current]);

  const handleOnClick = () => setIsOpen((prev) => !prev);

  return (
    <div ref={divRef} className="relative overflow-visible" data-testid={props.testId}>
      {props.wrapComponent({ onClick: handleOnClick })}

      <div
        style={{
          top: position.top,
          left: position.left,
          right: position.right,
        }}
        className={twMerge(
          "fixed z-50 mt-2 rounded-lg border border-neutral-primary bg-background-primary text-left text-sm shadow-lg",
          isOpen ? "block" : "hidden",
          props.width ? props.width : "w-60"
        )}>
        {props.options?.map((option, index) => (
          <Fragment key={index}>
            {"component" in option ? (
              <Fragment key={index}>{option.component}</Fragment>
            ) : (
              <div key={index} className="p-1">
                <div
                  onClick={option.onClick}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-background-contrast hover:bg-primary hover:text-primary-contrast cursor-pointer">
                  {option.icon}
                  <span>{option.label}</span>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
