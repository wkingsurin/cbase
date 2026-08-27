import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface TableLink {
  href: string;
  label?: string;
  icon: LucideIcon;
  active: boolean;
  position: { x: number | null; y: number | null };
}

export default function TableLink({
  href,
  label,
  icon,
  active,
  position,
}: TableLink) {
  const Icon = icon;

  return (
    <Link
      href={href}
      className={`opacity-0 top-0 -left-2 pointer-events-none absolute left-0 z-10000 flex items-center gap-2 flex items-center justify-center px-3 h-6 rounded-md bg-black/50 text-white border-[0.5px] border-black shadow-[0_8px_24px_4px_rgba(0,0,0,0.1)] group-hover/table:opacity-100 group-hover/table:pointer-events-auto`}
      style={{ top: position.y + "px", left: position.x + "px" }}
    >
      {label && <span className="text-sm">{label}</span>}
      <Icon className="size-4 stroke-[1.5px]" />
    </Link>
  );
}
