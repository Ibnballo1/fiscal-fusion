import { columns, Invoices } from "@/app/features/activity-log-table/columns";
import { DataTable } from "@/app/features/activity-log-table/data-table";

async function getData(): Promise<Invoices[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      invoice: "Invoice#12458",
      customer: "Harare Food limited",
      dateTime: "04/06/2025\n09:45pm",
      amount: 1470,
      source: "NCH Express",
      status: "Failed",
    },
    {
      id: "2",
      invoice: "Invoice#16257",
      customer: "Bulawayo Mining Co",
      dateTime: "04/06/2025\n08:34pm",
      amount: 1680,
      source: "Excel Import",
      status: "Fiscalized",
    },
    {
      id: "3",
      invoice: "Invoice#16257",
      customer: "Bulawayo Mining Co",
      dateTime: "04/06/2025\n08:34pm",
      amount: 1680,
      source: "Excel Import",
      status: "Fiscalized",
    },
  ];
}

export default async function InvoiceTable() {
  const data = await getData();

  return (
    <div className="container mx-auto pb-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
