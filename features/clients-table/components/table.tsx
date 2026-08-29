"use client";

import DataTable from "@/components/data-table/data-table";
import { CLIENT_COLUMNS, CLIENTS_DATA } from "../constants/clients";
import { useClientsTableStore } from "../store/store";

export default function ClientsTable() {
  const selectedIds = useClientsTableStore((s) => s.selectedIds);

  const toggleRow = useClientsTableStore((s) => s.toggleRow);
  const toggleAll = useClientsTableStore((s) => s.toggleAll);

  return (
    <div className="flex flex-col min-w-0 h-[calc(100dvh-270px-24px-16px-30px)]">
      <DataTable
        data={CLIENTS_DATA}
        columns={CLIENT_COLUMNS}
        getRowId={(client) => client.id}
        selectedIds={selectedIds}
        onToggleRow={toggleRow}
        toggleAll={toggleAll}
      />
    </div>
  );
}
