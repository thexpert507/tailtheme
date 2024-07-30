import { flexRender } from "@tanstack/react-table";
import { forwardRef, ComponentPropsWithoutRef } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
import { useDataTableContext } from "./Provider";
import { cn } from "@/utils";

type DataTableComponentProps = ComponentPropsWithoutRef<typeof Table> & {
  emptyResultMessage?: string;
};

const DataTable = forwardRef<HTMLTableElement, DataTableComponentProps>((props, ref) => {
  const { emptyResultMessage, ...rest } = props;

  const { table } = useDataTableContext();

  return (
    <Table ref={ref} {...rest}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>{props.children}</TableRow>
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
