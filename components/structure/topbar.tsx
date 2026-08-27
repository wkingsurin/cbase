import SearchBar from "../search/search";
import Toolbar from "../toolbar.tsx/toolbar";

export default function TopBar() {
  return (
    <div className="flex gap-3">
      <SearchBar />
      <Toolbar />
    </div>
  );
}
