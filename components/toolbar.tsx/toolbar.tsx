import { Archive, DatabaseMinus, LucideIcon } from "lucide-react";
import ToolbarButton from "./toolbar-button";

export default function ToolBar() {
  const TOOLBAR: { icon: LucideIcon; label: string }[] = [
    { icon: Archive, label: "Archive" },
    { icon: DatabaseMinus, label: "Delete" },
  ];

  return (
    <div className="flex rounded-md min-w-10 h-10 border-[0.5px] border-gray/25 overflow-hidden">
      {TOOLBAR.map((tool) => (
        <ToolbarButton key={tool.label} icon={tool.icon} />
      ))}
    </div>
  );
}
