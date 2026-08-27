import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="flex items-center border-[0.5px] border-gray/25 rounded-md max-w-[360px] w-full h-10">
      <div className="flex items-center justify-center w-[40px] min-w-10 h-10">
        <Search className="size-4 stroke-[1.5px] stroke-gray" />
      </div>
      <Input className="h-full" placeholder="Search" />
    </div>
  );
}
