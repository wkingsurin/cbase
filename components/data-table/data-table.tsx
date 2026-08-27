"use client";

import { useState } from "react";
import ColumnSort from "./column-sort";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { DataTableProps } from "./types";
import DataTableResizer from "./data-table-resizer";
import Cell from "./cell";

type ColumnWidths = Record<string, number>;

export default function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const [columnWidths, setColumnWidths] = useState<ColumnWidths>(() =>
    Object.fromEntries(
      columns.map((column) => {
        const minWidth = column.minWidth ?? 80;
        const maxWidth = column.maxWidth ?? Infinity;
        const initialWidth = column.initialWidth ?? 150;

        return [
          column.id,
          Math.min(maxWidth, Math.max(minWidth, initialWidth)),
        ];
      }),
    ),
  );

  const handleResizeStart = (event: React.PointerEvent, columnId: string) => {
    const startX = event.clientX;
    const startWidth = columnWidths[columnId];

    const column = columns.find((column) => column.id === columnId);

    if (!column) return;

    const handlePointerMove = (event: PointerEvent) => {
      const delta = event.clientX - startX;

      const minWidth = column.minWidth ?? 80;
      const maxWidth = column.maxWidth ?? Infinity;

      const newWidth = Math.min(
        maxWidth,
        Math.max(minWidth, startWidth + delta),
      );

      setColumnWidths((prev) => ({
        ...prev,
        [columnId]: newWidth,
      }));
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  return (
    <div className="group/table relative min-w-0 overflow-x-auto">
      <Table className="table-fixed whitespace-nowrap">
        <colgroup>
          {columns.map((column) => (
            <col
              key={column.id}
              style={{
                width: `${columnWidths[column.id]}px`,
              }}
            />
          ))}
        </colgroup>

        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.id} className="relative min-w-0">
                <div className="flex items-center justify-between gap-3 w-full">
                  <span className="min-w-0 truncate text-white/75">{column.header}</span>
                  <ColumnSort />
                </div>

                <DataTableResizer
                  onPointerDown={(event) => handleResizeStart(event, column.id)}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => {
                const rawValue = column.accessorKey
                  ? row[column.accessorKey]
                  : null;

                const isEmpty = rawValue == null;

                const isCustom = !!column.render;

                const value = column.render
                  ? column.render(row)
                  : isEmpty
                    ? "null"
                    : String(rawValue);

                return (
                  <TableCell key={column.id} className="min-w-0 p-0">
                    <Cell
                      isEmpty={isEmpty}
                      copyable={!isCustom && column.copyable}
                      copyValue={
                        !isCustom && !isEmpty ? String(rawValue) : undefined
                      }
                    >
                      {isCustom ? (
                        value
                      ) : (
                        <span className="block min-w-0 w-full truncate px-3">
                          {value}
                        </span>
                      )}
                    </Cell>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
