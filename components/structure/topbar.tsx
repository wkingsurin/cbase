import { ReactNode } from "react";
import SearchBar from "../search/search";

interface TopBarProps {
  actions?: ReactNode;
}

export default function TopBar({ actions }: TopBarProps) {
  return (
    <div className="flex gap-3">
      <SearchBar />
      
      {actions}
    </div>
  );
}
