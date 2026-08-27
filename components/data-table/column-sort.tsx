import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function ColumnSort() {
  return (
    <Button className="group/filters flex items-center justify-center w-5 h-7 rounded-sm bg-transparent hover:bg-card transition duration-100">
      <ChevronDown className="size-4 stroke-white/30 group-hover/filters:stroke-white/75" />
    </Button>
  );
}
