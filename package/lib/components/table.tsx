import * as React from "react";

import { ROUNDED, SHADOW, cn } from "@/utils";

type TableProps = React.HTMLAttributes<HTMLTableElement> & {
  bordered?: boolean;
  height?: string;
  width?: string;
  round?: keyof typeof ROUNDED;
  shadow?: keyof typeof SHADOW;
};

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, round, bordered, shadow, height, width, ...props }, ref) => (
    <div
      className={cn(
        "relative w-full overflow-auto border",
        "text-background-contrast",
        width && cn("overflow-x-scroll", width),
        height && cn("overflow-y-scroll", height),
        bordered && "border-background-secondary",
        round ? ROUNDED[round] : ROUNDED.none,
        shadow ? SHADOW[shadow] : SHADOW.none
      )}>
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  )
);
Table.displayName = "Table";

type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  bordered?: boolean;
  sticky?: boolean;
};
const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, bordered, sticky, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        bordered && "[&_tr]:border-b",
        "bg-background-secondary",
        sticky && "sticky top-0 z-10",
        className
      )}
      {...props}
    />
  )
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors data-[state=selected]:bg-background-secondary",
        "border-background-secondary",
        "hover:bg-background-secondary transition-all duration-300",
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-2 mb-2 text-sm text-background-contrast opacity-50", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
