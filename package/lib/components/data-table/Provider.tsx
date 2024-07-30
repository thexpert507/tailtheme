import { createContext, useContext, useState } from "react";
import { DataTableProps } from "./types";
import {
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  Table,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

type DataTableStateContext<TData> = {
  table: Table<TData>;
  state: {
    sorting?: SortingState;
    columnFilters?: ColumnFiltersState;
    columnVisibility?: VisibilityState;
    rowSelection?: RowSelectionState;
  };
};

const DataTableContext = createContext<DataTableStateContext<any> | null>(null);

export function useDataTableContext<TData>() {
  const context = useContext(DataTableContext);

  if (!context) {
    throw new Error("useDataTableContext must be used within a DataTableProvider");
  }

  return context as DataTableStateContext<TData>;
}

type DataTableProviderProps<TData, TValue> = DataTableProps<TData, TValue> & {
  children: React.ReactNode;
};
export function DataTableProvider<TData, TValue>(props: DataTableProviderProps<TData, TValue>) {
  const { columns, data } = props;

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const state = { sorting, columnFilters, columnVisibility, rowSelection };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state,
  });

  return (
    <DataTableContext.Provider value={{ table, state }}>{props.children}</DataTableContext.Provider>
  );
}
