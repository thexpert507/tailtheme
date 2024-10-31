import { flexRender } from "@tanstack/react-table";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
import { useDataTableContext } from "./Provider";
import { cn } from "@/utils";

type DataTableComponentProps = ComponentPropsWithoutRef<typeof Table> & {
  emptyResultMessage?: string;
  props?: {
    header?: ComponentPropsWithoutRef<typeof TableHeader>;
    headerRow?: ComponentPropsWithoutRef<typeof TableRow>;
    head?: ComponentPropsWithoutRef<typeof TableHead>;
    body?: ComponentPropsWithoutRef<typeof TableBody>;
    bodyRow?: ComponentPropsWithoutRef<typeof TableRow>;
    cell?: ComponentPropsWithoutRef<typeof TableCell>;
  };
};

const DataTable = forwardRef<HTMLTableElement, DataTableComponentProps>((cprops, ref) => {
  const { emptyResultMessage, props, ...rest } = cprops;

  const { header: headerProps } = props || {};
  const { headerRow: headerRowProps } = props || {};
  const { head: headProps } = props || {};
  const { body: bodyProps } = props || {};
  const { bodyRow: bodyRowProps } = props || {};
  const { cell: cellProps } = props || {};

  const { table } = useDataTableContext();

  return (
    <Table ref={ref} {...rest}>
      <TableHeader {...headerProps}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} {...headerRowProps}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} {...headProps}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody {...bodyProps}>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} {...bodyRowProps}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} {...cellProps}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow {...bodyRowProps}>{cprops.children}</TableRow>
        )}
      </TableBody>
    </Table>
  );
});

const DataTableEmptyCell = forwardRef<
  HTMLTableCellElement,
  ComponentPropsWithoutRef<typeof TableCell>
>(({ className, ...props }, ref) => {
  return (
    <TableCell ref={ref} {...props} className={cn("h-24 text-center", className)}>
      {props.children}
    </TableCell>
  );
});

export { DataTable, DataTableEmptyCell };
