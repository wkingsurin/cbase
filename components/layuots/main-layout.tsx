import { ChartNoAxesCombined, LucideIcon, SquareUserRound } from "lucide-react";
import Aside from "../structure/aside";
import Dashboard from "../structure/dashboard";
import Main from "../structure/main";

export default function MainLayout() {
  const ASIDE_DATA: { label: string; icon: LucideIcon; href: string }[] = [
    { label: "Contacts", icon: SquareUserRound, href: "clients" },
    { label: "Statistics", icon: ChartNoAxesCombined, href: "statistics" },
  ];

  return (
    <Main className="flex gap-4">
      <Aside data={ASIDE_DATA} />
      <Dashboard />
    </Main>
  );
}
