import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { FileViewer } from "./mediaObject";
import { Badge } from "./badge";
import { ANIMATIONS, Animations } from "@/utils";

interface CardProps {
  metadata?: { author?: string; date?: Date };
  header?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  paragraph?: string;
  tags?: string[];
  image?: { src: string; mimeType: string };
  marginAuto?: boolean;
  footer?: React.ReactNode;
  actions?: React.ReactNode;
  imageSize?: { width: string | number; height: string | number };
  onClick?: () => void;
  testId?: string;
  className?: string;
  animation?: Animations;
}
export function Card(props: CardProps) {
  return (
    <div
      data-testid={props.testId}
      style={props.imageSize ? { width: props.imageSize.width } : undefined}
      onClick={props.onClick}
      className={twMerge(
        "flex flex-col max-w-md rounded-lg bg-background-secondary shadow shrink-0",
        props.marginAuto && "mx-auto",
        props.onClick && "cursor-pointer",
        props.className,
        props.animation && ANIMATIONS[props.animation]
      )}>
      {props?.image && (
        <FileViewer
          src={props.image.src}
          filename={props.image.mimeType}
          size={props.imageSize}></FileViewer>
      )}
      {props?.icon && (
        <div className="flex items-center justify-center h-12 w-16 rounded-md">{props.icon}</div>
      )}
      {props?.header && <>{props.header}</>}
      <div
        className={twMerge(
          "flex flex-col justify-items-start h-full",
          !props.icon && !props.header ? "p-4 m-0" : "p-4 pt-0 m-0"
        )}>
        {props?.metadata && (
          <p className="mb-1 text-sm text-background-contrast truncate">
            {props?.metadata?.author}
            {props?.metadata?.date && (
              <>
                • <time>{format(props.metadata.date, "dd MMMM yyyy")}</time>
              </>
            )}
          </p>
        )}
        {props?.title && (
          <h3 className="mt-auto text-xl font-medium text-background-contrast justify-self-end truncate">
            {props.title}
          </h3>
        )}
        {props?.paragraph && (
          <p className="mt-1 text-background-contrast justify-self-end truncate">
            {props.paragraph}
          </p>
        )}
        {props?.tags && (
          <div className="py-4 flex flex-wrap gap-2">
            {props.tags.map((tag) => (
              <Badge key={tag} round={"md"} color="accent">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {props?.actions && (
          <div className="mt-4 inline-flex -space-x-0 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300 shadow-sm">
            {props.actions}
          </div>
        )}
        {props?.footer && <div className="justify-self-end">{props.footer}</div>}
      </div>
    </div>
  );
}
