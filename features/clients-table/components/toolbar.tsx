"use client";

import ToolBar from "@/components/toolbar/toolbar";
import ToolbarButton from "@/components/toolbar/toolbar-button";
import { Archive, DatabaseMinus } from "lucide-react";
import { useClientsTableStore } from "../store/store";

export default function ClientsToolbar() {
  const selectedIds = useClientsTableStore((s) => s.selectedIds);
  const idsArray = Object.keys(selectedIds);

  const hasSelection = Object.keys(selectedIds).length > 0;

  const removeRows = useClientsTableStore((s) => s.removeRows);
  const archiveRows = useClientsTableStore((s) => s.archiveRows);

  return (
    <ToolBar>
      <ToolbarButton
        icon={Archive}
        disabled={!hasSelection}
        onClick={() => archiveRows(idsArray)}
      />
      <ToolbarButton
        icon={DatabaseMinus}
        disabled={!hasSelection}
        onClick={() => removeRows(idsArray)}
      />
    </ToolBar>
  );
}
