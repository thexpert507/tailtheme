import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  FormInput,
  DataTable,
  useDataTableContext,
} from "tailtheme/components";

export function DemoDataTable<TData>() {
  const { table } = useDataTableContext<TData>();

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-2">
        <div className="w-1/3">
          <FormInput
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.currentTarget.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="flex-1 text-sm text-opacity-50 text-center">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="max-w-sm">
            <Button variant="outlined" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DataTable />
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
}
