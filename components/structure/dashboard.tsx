import ClientsTable from "@/features/clients-table/components/table";
import Container from "./container";
import Section from "./section";
import TopBar from "./topbar";

export default function Dashboard() {
  return (
    <Section className="min-w-0">
      <Container>
        <div className="flex flex-col gap-4">
          <TopBar />
          <ClientsTable />
        </div>
      </Container>
    </Section>
  );
}
