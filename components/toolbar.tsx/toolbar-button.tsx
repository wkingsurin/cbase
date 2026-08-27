import { LucideIcon } from "lucide-react";

interface ToolbarProps {
  icon: LucideIcon;
}

export default function ToolbarButton({ icon }: ToolbarProps) {
  const Icon = icon;

  return (
    <button className="flex items-center justify-center w-10 h-10 hover:bg-card">
      <Icon className="size-4 stroke-[1.5px]" />
    </button>
  );
}
