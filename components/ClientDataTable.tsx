import { DataTable } from "@/app/features/clients-data-table/data-table";
import {
  Clients,
  columns,
} from "@/app/features/clients-data-table/client-columns";

const data: Clients[] = [
  {
    id: "1",
    userId: "2359",
    name: "Tanro Chikufu",
    planTier: "Basic",
    monthlyRevenue: "$1000",
    complianceScore: 95,
    lastActivity: "Oct 23, 2025\n11:20am",
    outstandingInvoices: "$4,500",
  },
  {
    id: "2",
    userId: "7894",
    name: "Tatenda Mudzamiri",
    planTier: "Premium",
    monthlyRevenue: "$1000",
    complianceScore: 95,
    lastActivity: "Nov 6, 2025\n11:20am",
    outstandingInvoices: "$10,000",
  },
  {
    id: "3",
    userId: "2359",
    name: "Tanro Chikufu",
    planTier: "Basic",
    monthlyRevenue: "$1000",
    complianceScore: 40,
    lastActivity: "Oct 23, 2025\n11:20am",
    outstandingInvoices: "$4,500",
  },
  {
    id: "4",
    userId: "7894",
    name: "Bles Software",
    planTier: "Premium",
    monthlyRevenue: "$1000",
    complianceScore: 95,
    lastActivity: "Nov 6, 2025\n11:20am",
    outstandingInvoices: "$10,000",
  },
  {
    id: "5",
    userId: "2359",
    name: "Tanro Chikufu",
    planTier: "Basic",
    monthlyRevenue: "$1000",
    complianceScore: 40,
    lastActivity: "Oct 23, 2025\n11:20am",
    outstandingInvoices: "$4,500",
  },
  {
    id: "6",
    userId: "7894",
    name: "Bles Software",
    planTier: "Premium",
    monthlyRevenue: "$1000",
    complianceScore: 95,
    lastActivity: "Nov 6, 2025\n11:20am",
    outstandingInvoices: "$10,000",
  },
  {
    id: "7",
    userId: "2359",
    name: "Tanro Chikufu",
    planTier: "Basic",
    monthlyRevenue: "$1000",
    complianceScore: 40,
    lastActivity: "Oct 23, 2025\n11:20am",
    outstandingInvoices: "$4,500",
  },
  {
    id: "8",
    userId: "7894",
    name: "Bles Software",
    planTier: "Premium",
    monthlyRevenue: "$1000",
    complianceScore: 95,
    lastActivity: "Nov 6, 2025\n11:20am",
    outstandingInvoices: "$10,000",
  },
  {
    id: "9",
    userId: "2359",
    name: "Tanro Chikufu",
    planTier: "Basic",
    monthlyRevenue: "$1000",
    complianceScore: 40,
    lastActivity: "Oct 23, 2025\n11:20am",
    outstandingInvoices: "$4,500",
  },
];

async function getData(): Promise<Clients[]> {
  // Fetch data from your API here.
  return data;
}

export default async function InvoiceTable() {
  const data = await getData();

  return (
    <div className="container mx-auto pb-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
