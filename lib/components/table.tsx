import { ROUNDED, SHADOW } from "@theme/utils";
import { ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface TableProps {
  headers?: ReactNode | ReactNode[];
  items?: ReactNode[][];
  components?: ReactNode[] | ReactNode;
  height?: string;
  bodyHeight?: string;
  width?: string;
  bordered?: boolean;
  round?: keyof typeof ROUNDED;
  shadow?: keyof typeof SHADOW;
  scrollToBottom?: boolean;
}
export function Table({
  headers,
  items,
  components,
  height,
  width,
  bordered,
  round,
  shadow,
  ...props
}: TableProps) {
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
      className={twMerge(
        "border dark:border-gray-700",
        height && twMerge("overflow-y-scroll", height),
        width && twMerge("overflow-x-scroll", width),
        bordered && "border-gray-200 dark:border-gray-700",
        round && ROUNDED[round],
        shadow && SHADOW[shadow]
      )}>
      <table className="w-full h-full border-collapse bg-white dark:bg-stone-900/70 text-left text-sm text-gray-500 dark:text-gray-100">
        <thead className="bg-gray-50 dark:bg-stone-900">
          <tr>
            {Array.isArray(headers) ? (
              headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">
                  {header}
                </th>
              ))
            ) : (
              <th className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{headers}</th>
            )}
          </tr>
        </thead>
        <tbody
          className={twMerge(
            "divide-y divide-gray-100 dark:divide-gray-700 border-t border-gray-100 dark:border-gray-700",
            props.bodyHeight && twMerge("overflow-y-scroll", props.bodyHeight)
          )}>
          {items?.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900">
              {item.map((td, index) => (
                <td key={index} className="px-6 py-4">
                  {td}
                </td>
              ))}
            </tr>
          ))}
          {components}
        </tbody>
      </table>
    </div>
  );
}

interface TableRowProps {
  onClick?: () => void;
  children?: ReactNode[] | ReactNode;
}
export function TableRow({ children, onClick }: TableRowProps) {
  return (
    <tr
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
      className="hover:bg-gray-50 dark:hover:bg-gray-900">
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
