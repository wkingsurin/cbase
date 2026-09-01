"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ImportClient } from "../types";
import { IMPORT_CLIENT_CLOUMNS } from "../constants/clients";
import { useEffect, useState } from "react";
import { ColumnWidths } from "@/components/data-table/types";
import Cell from "@/components/data-table/cell";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CellValue from "@/components/data-table/cell-value";

interface PreviewProps {
  data: ImportClient[];
}

export default function ImportPreview({ data }: PreviewProps) {
  const [pressedCtrl, setPressedCtrl] = useState<boolean>(false);

  const [columnWidths, setColumnWidths] = useState<ColumnWidths>(() =>
    Object.fromEntries(
      IMPORT_CLIENT_CLOUMNS.map((column) => {
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

  const onDownCtrl = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      setPressedCtrl(true);
    }
  };
  const onUpCtrl = (event: KeyboardEvent) => {
    setPressedCtrl(false);
  };

  useEffect(() => {
    window.document.addEventListener("keydown", onDownCtrl);
    window.document.addEventListener("keyup", onUpCtrl);

    return () => {
      window.document.removeEventListener("keydown", onDownCtrl);
      window.document.removeEventListener("keyup", onUpCtrl);
    };
  }, []);

  return (
    <Table className="table-fixed whitespace-nowrap">
      <colgroup>
        {IMPORT_CLIENT_CLOUMNS.map((column) => (
          <col
            key={column.id}
            style={{ width: `${columnWidths[column.id]}px` }}
          />
        ))}
      </colgroup>

      <TableHeader>
        <TableRow>
          {IMPORT_CLIENT_CLOUMNS.map((col) => (
            <TableHead key={col.id} className="min-w-0 truncate text-white/75">
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((client, index) => (
          <TableRow key={index}>
            {IMPORT_CLIENT_CLOUMNS.map((column) => {
              const value = column.accessorKey
                ? client[column.accessorKey]
                : null;

              const isEmpty = value == null || value === "null";

              return (
                <TableCell key={column.id} className="min-w-0 truncate p-0">
                  <Cell
                    isEmpty={isEmpty}
                    copyable={!isEmpty}
                    copyValue={!isEmpty ? String(value) : undefined}
                  >
                    <CellValue
                      value={isEmpty ? "null" : String(value)}
                      visible={!isEmpty && pressedCtrl}
                    />
                  </Cell>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
