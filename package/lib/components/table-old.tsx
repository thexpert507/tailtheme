import { ROUNDED, SHADOW } from "@/utils";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface TableProps {
  headers?: ReactNode | ReactNode[];
  items?: ReactNode[][];
  components?: ReactNode[] | ReactNode;
  height?: string;
  width?: string;
  bordered?: boolean;
  round?: keyof typeof ROUNDED;
  shadow?: keyof typeof SHADOW;
  scrollToBottom?: boolean;
  stickyHeader?: boolean;
  testId?: string;
}
export function TableOld(props: TableProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!props.scrollToBottom) return;
    if (!ref.current) return;
    const div = ref.current;
    div.scrollTop = div.scrollHeight;
    div.addEventListener("DOMSubtreeModified", () => {
      div.scrollTop = div.scrollHeight;
    });
  }, [props.scrollToBottom]);

  return (
    <div
      ref={ref}
      data-testid={props.testId}
      className={twMerge(
        "border",
        props.height && twMerge("overflow-y-scroll", props.height),
        props.width && twMerge("overflow-x-scroll", props.width),
        props.bordered && "border-background-secondary",
        props.round && ROUNDED[props.round],
        props.shadow && SHADOW[props.shadow]
      )}>
      <table className="w-full h-full border-collapse bg-background-primary text-left text-sm text-background-contrast">
        <thead
          className={twMerge("bg-background-secondary", props.stickyHeader && "sticky top-0 z-10")}>
          <tr>
            {Array.isArray(props.headers) ? (
              props.headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 font-medium text-background-contrast">
                  {header}
                </th>
              ))
            ) : (
              <th className="px-6 py-4 font-medium text-background-contrast">{props.headers}</th>
            )}
          </tr>
        </thead>
        <tbody
          className={twMerge(
            "divide-y divide-background-secondary border-t border-background-secondary"
          )}>
          {props.items?.map((item, index) => (
            <tr key={index} className="hover:bg-background-secondary">
              {item.map((td, index) => (
                <td key={index} className="px-6 py-4">
                  {td}
                </td>
              ))}
            </tr>
          ))}
          {props.components}
        </tbody>
      </table>
    </div>
  );
}

interface TableRowProps {
  onClick?: () => void;
  children?: ReactNode[] | ReactNode;
  testId?: string;
}
export function TableRowOld({ children, onClick, testId }: TableRowProps) {
  return (
    <tr
      data-testid={testId}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      className="hover:bg-background-secondary">
      {Array.isArray(children) ? (
        children.map((td, index) => (
          <td key={index} className="px-6 py-4">
            {td}
          </td>
        ))
      ) : (
        <td className="px-6 py-4">{children}</td>
      )}
    </tr>
  );
}
