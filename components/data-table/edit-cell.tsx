import { PenSquare } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

interface EditCellProps {
  initialValue: string;
  onSave: (value: string) => void;
}

export default function EditCell({ initialValue, onSave }: EditCellProps) {
  const [value, setValue] = useState<string>(() => initialValue);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.stopPropagation();

    onSave(value);
  };

  return (
    <Popover>
      <PopoverTrigger
        onClick={(event) => event.stopPropagation()}
        className="opacity-0 pointer-events-none absolute top-0 right-0 flex items-center justify-center w-9 h-10 bg-background group-hover/cell:opacity-100 group-hover/cell:pointer-events-auto"
      >
        <PenSquare className="size-4 stroke-[1.5px] stroke-gray" />
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <Textarea
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <Button type="submit">Save</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
