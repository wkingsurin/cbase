import { ChartNoAxesCombined, LucideIcon, SquareUserRound } from "lucide-react";
import Aside from "../structure/aside";
import Main from "../structure/main";
import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainProps) {
  const ASIDE_DATA: { label: string; icon: LucideIcon; href: string }[] = [
    { label: "Clients", icon: SquareUserRound, href: "clients" },
    { label: "Statistics", icon: ChartNoAxesCombined, href: "statistics" },
  ];

  return (
    <Main className="flex gap-4">
      <Aside data={ASIDE_DATA} />
      {children}
    </Main>
  );
}
