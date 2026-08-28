"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ClientTag as TagType } from "../constants/tag";
import ClientTag from "./client-tag";
import { CLIENT_TAGS } from "../constants/tag";

interface TagCellProps {
  tag: TagType;

  onChange: (tag: TagType) => void;
}

export default function TagCell({ tag, onChange }: TagCellProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative flex items-center min-w-0 w-full h-full">
        <ClientTag tag={tag} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="flex flex-col gap-1">
        {Object.keys(CLIENT_TAGS).map((tagKey) => {
          const nextTag = tagKey as TagType;

          return (
            <DropdownMenuItem
              key={nextTag}
              className="p-0 not-data-[variant=destructive]:focus:**:text-none"
              onClick={(event) => {
                event.stopPropagation();
                onChange(nextTag);
              }}
            >
              <ClientTag tag={nextTag} className="rounded-md h-8!" />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
