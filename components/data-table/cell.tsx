import { ReactNode } from "react";
import EditCell from "./edit-cell";

interface CellProps {
  children: ReactNode;

  isEmpty?: boolean;

  copyable?: boolean;
  copyValue?: string;

  editable?: boolean;
  editValue?: string;

  onSave?: (value: string) => void;
}

export default function Cell({
  children,
  isEmpty = false,
  copyable = false,
  copyValue,
  editable = false,
  editValue,
  onSave,
}: CellProps) {
  const handleCopy = async () => {
    if (!copyValue) return;

    try {
      await navigator.clipboard.writeText(copyValue);

      console.log(`copied text:`, copyValue);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div
      className={`group/cell relative flex items-center min-w-0 w-full h-full overflow-hidden hover:bg-card ${isEmpty ? "text-white/10 cursor-default select-none" : "text-white cursor-copy"}`}
      onClick={copyable ? handleCopy : undefined}
    >
      {children}
      {editable && onSave ? (
        <EditCell initialValue={editValue ?? ""} onSave={onSave} />
      ) : null}
    </div>
  );
}
