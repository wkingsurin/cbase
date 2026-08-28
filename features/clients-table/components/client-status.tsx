import { CLIENT_STATUSES } from "../constants/status";
import { ClientStatus as StatusType } from "../constants/status";

interface ClientStatusProps {
  status: StatusType;
  className?: string;
}

export default function ClientStatus({ status, className }: ClientStatusProps) {
  const config = CLIENT_STATUSES[status];

  return (
    <div
      className={`flex items-center gap-2 min-w-0 w-full h-full px-3 ${config.className} ${className}`}
    >
      <div className={`w-2 h-2 rounded-full ${config.dotClassName}`} />

      <span>{config.label}</span>
    </div>
  );
}
