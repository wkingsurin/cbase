import { CLIENT_TAGS } from "../constants/tag";
import { ClientTag as TagType } from "../constants/tag";

interface ClientTagProps {
  tag: TagType;
}

export default function ClientTag({ tag }: ClientTagProps) {
  const config = CLIENT_TAGS[tag];

  return (
    <div
      className={`flex items-center gap-2 min-w-0 w-full h-full px-3 ${config.className}`}
    >
      <div className={`w-2 h-2 rounded-full ${config.dotClassName}`} />

      <span>{config.label}</span>
    </div>
  );
}
