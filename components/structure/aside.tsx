import { LucideIcon, Settings } from "lucide-react";
import Link from "next/link";

interface AsideProps {
  data: { label: string; icon: LucideIcon; href: string }[];
}

export default function Aside({ data }: AsideProps) {
  return (
    <aside className="flex flex-col justify-between w-35 h-[calc(100dvh-16px)] rounded-md p-1 border-[0.5px] border-gray/25">
      <nav className="flex flex-col gap-1">
        {data.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.label}
              href={link.href}
              className="group/nav-link flex items-center gap-2 h-[30px] rounded-md hover:bg-card px-3"
            >
              <Icon className="size-5 stroke-[1.5px] stroke-gray group-hover/nav-link:stroke-white" />
              <span className="text-md text-gray group-hover/nav-link:text-white">
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
      <button className="group/settings flex items-center gap-2 h-[30px] rounded-md hover:bg-card px-3">
        <Settings className="size-5 stroke-[1.5px] stroke-gray group-hover/settings:stroke-white" />
        <span className="text-md text-gray group-hover/settings:text-white">
          Settings
        </span>
      </button>
    </aside>
  );
}
