import { createContext, useContext, useState } from "react";
import { DataTableProps } from "./types";
import {
  ColumnFiltersState,
  PaginationState,
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
import { Dispatch } from "react";
import { SetStateAction } from "react";

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

type State<S> = [S, Dispatch<SetStateAction<S>>];

type DataTableProviderProps<TData, TValue> = DataTableProps<TData, TValue> & {
  children: React.ReactNode;
  sortingState?: State<SortingState>;
  columnFiltersState?: State<ColumnFiltersState>;
  columnVisibilityState?: State<VisibilityState>;
  rowSelectionState?: State<RowSelectionState>;
  paginationState?: State<PaginationState>;
};
export function DataTableProvider<TData, TValue>(props: DataTableProviderProps<TData, TValue>) {
  const { columns, data } = props;

  const [sorting, setSorting] = props.sortingState ?? useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    props.columnFiltersState ?? useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    props.columnVisibilityState ?? useState<VisibilityState>({});
  const [rowSelection, setRowSelection] =
    props.rowSelectionState ?? useState<RowSelectionState>({});
  const [pagination, setPagination] =
    props.paginationState ?? useState<PaginationState>({ pageIndex: 0, pageSize: 10 });

  const state = { sorting, columnFilters, columnVisibility, rowSelection, pagination };

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
    onPaginationChange: setPagination,
    state,
  });

  return (
    <DataTableContext.Provider value={{ table, state }}>{props.children}</DataTableContext.Provider>
  );
}
