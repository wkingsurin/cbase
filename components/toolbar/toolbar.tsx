import { ReactNode } from "react";

interface ToolbarProps {
  children: ReactNode;
}

export default function ToolBar({ children }: ToolbarProps) {
  return (
    <div className="flex rounded-md min-w-10 h-10 border-[0.5px] border-gray/25 overflow-hidden">
      {children}
    </div>
  );
}
