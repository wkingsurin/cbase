import { LucideIcon } from "lucide-react";

interface ToolbarProps {
  icon: LucideIcon;
  disabled?: boolean;
  onClick: () => void;
}

export default function ToolbarButton({
  icon,
  disabled,
  onClick,
}: ToolbarProps) {
  const Icon = icon;

  return (
    <button
      className="flex items-center justify-center w-10 h-10 hover:bg-card"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon className="size-4 stroke-[1.5px]" />
    </button>
  );
}
