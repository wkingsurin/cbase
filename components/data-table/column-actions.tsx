import { ArrowDown, ArrowUp, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DataTableColumn, SortDirection } from "./types";
import CheckboxFilter from "./checkbox-filter";

interface ColumnActionsProps<T> {
  column: DataTableColumn<T>;
  selectedFilters: string[];
  onFilterChange: (value: string, checked: boolean) => void;
  sortDirection: SortDirection | null;
  onSort: (direction: SortDirection) => void;
}

export default function ColumnActions<T>({
  column,
  selectedFilters,
  onFilterChange,
  sortDirection,
  onSort,
}: ColumnActionsProps<T>) {
  const hasActiveFilters = selectedFilters.length > 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group/filters flex items-center justify-center w-5 h-7 rounded-sm bg-transparent hover:bg-card transition duration-100">
        <ChevronDown className="size-4 stroke-white/30 group-hover/filters:stroke-white/75" />
        {hasActiveFilters && (
          <span className="absolute top-1 right-1 size-1 rounded-full bg-white" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={`group/item ${sortDirection === "asc" ? "bg-accent" : ""}`}
          onClick={() => onSort("asc")}
        >
          <span className={`${sortDirection === "asc" ? "text-white" : "text-white/50 group-hover/item:text-white"}`}>
            Ascending
          </span>
          <span className="absolute right-2">
            <ArrowUp
              className={`size-4 stroke-[1.5px] ${sortDirection === "asc" ? "stroke-white" : "stroke-white/50 group-hover/item:stroke-white"}`}
            />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`group/item ${sortDirection === "desc" ? "bg-accent" : ""}`}
          onClick={() => {
            onSort("desc");
          }}
        >
          <span
            className={`${sortDirection === "desc" ? "text-white" : "text-white/50 group-hover/item:text-white"}`}
          >
            Descending
          </span>
          <span className="absolute right-2">
            <ArrowDown
              className={`size-4 stroke-[1.5px] ${sortDirection === "desc" ? "stroke-white" : "stroke-white/50 group-hover/item:stroke-white"}`}
            />
          </span>
        </DropdownMenuItem>

        {column.filter?.type === "checkbox" && (
          <>
            <DropdownMenuSeparator />

            <CheckboxFilter
              filter={column.filter}
              selectedFilters={selectedFilters}
              onCheckedChange={onFilterChange}
            />
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
