"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ClientStatus as StatusType } from "../constants/status";
import ClientStatus from "./client-status";
import { CLIENT_STATUSES } from "../constants/status";
import { useState } from "react";

interface StatusCellProps {
  status: StatusType;

  onChange: (status: StatusType) => void;
}

export default function StatusCell({ status, onChange }: StatusCellProps) {
  const [activeStatus, setActiveStatus] = useState<StatusType>(status);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex items-center min-w-0 w-full h-full">
        <ClientStatus status={activeStatus} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="flex flex-col gap-1">
        {Object.keys(CLIENT_STATUSES).map((statusKey) => {
          const nextStatus = statusKey as StatusType;

          return (
            <DropdownMenuItem
              key={nextStatus}
              className="p-0 not-data-[variant=destructive]:focus:**:text-none"
              onClick={() => {
                setActiveStatus(nextStatus);
                onChange(nextStatus);
              }}
            >
              <ClientStatus status={nextStatus} className="rounded-md h-8!" />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
