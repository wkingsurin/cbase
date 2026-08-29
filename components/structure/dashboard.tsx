import ClientsTable from "@/features/clients-table/components/table";
import Container from "./container";
import Section from "./section";
import TopBar from "./topbar";
import ClientsToolbar from "@/features/clients-table/components/toolbar";

export default function Dashboard() {
  return (
    <Section className="min-w-0">
      <Container>
        <div className="flex flex-col gap-4">
          <TopBar actions={<ClientsToolbar />} />

          <ClientsTable />
        </div>
      </Container>
    </Section>
  );
}
