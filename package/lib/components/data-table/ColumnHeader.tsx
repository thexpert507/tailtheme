import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { cn } from "@/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Button } from "../button";
import { ComponentPropsWithoutRef } from "react";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  buttonProps?: ComponentPropsWithoutRef<typeof Button>;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  buttonProps,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const { className: buttonClassName, ...restButtonProps } = buttonProps || {};

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="text"
            size="sm"
            className={cn("-ml-3 h-8 data-[state=open]:bg-primary-soft", buttonClassName)}
            {...restButtonProps}>
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-background-contrast" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-background-contrast" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-background-contrast" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
