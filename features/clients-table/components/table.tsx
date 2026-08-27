'use client'

import DataTable from "@/components/data-table/data-table";
import { CLIENT_COLUMNS, CLIENTS_DATA } from "../constants/clients";

export default function ClientsTable() {
  return (
    <div className="flex flex-col min-w-0 h-[calc(100dvh-270px-24px-16px-30px)]">
      <DataTable data={CLIENTS_DATA} columns={CLIENT_COLUMNS} />
    </div>
  );
}
