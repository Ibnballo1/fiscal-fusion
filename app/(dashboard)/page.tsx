// import { Button } from "@/components/ui/button";

import ActivityLogPage from "@/components/ActivityLogs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Banknote, Power, ShoppingBag, Users2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const cardList = [
    {
      title: "Total Resellers",
      icon: <ShoppingBag />,
      value: "346",
      // description: "Card Description",
      footer: "+15% vs last month",
    },
    {
      title: "Total Clients",
      icon: <Users2 />,
      value: "1,218",
      // description: "Card Description",
      footer: "+15% vs last month",
    },
    {
      title: "Platform Revenue",
      icon: <Banknote />,
      value: "24,125",
      // description: "Card Description",
      footer: "+15% vs last month",
    },
  ];

  const tableData = [
    {
      message: "Payment processing delay for INV-29182",
      alertType: "warning",
      alertColor: "#AE8C00",
      time: "2m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "Fraud Flag",
      alertColor: "#ED0519",
      time: "3m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "warning",
      alertColor: "#AE8C00",
      time: "8m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "warning",
      alertColor: "#AE8C00",
      time: "10m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "Fraud Flag",
      alertColor: "#ED0519",
      time: "31m ago",
    },
  ];
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* TOTALS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardList.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex gap-2 items-center">
                {card.icon}
                <span>{card.title}</span>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
              <p>{card.value}</p>
            </CardContent>
            <CardFooter>
              <p>{card.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* LATEST ALERTS */}
      <div className="border rounded-lg p-2.5">
        <h2 className="text-lg font-semibold mb-4">Latest Alerts</h2>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Message</TableHead>
              <TableHead className="w-[100px]">Alert Type</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((tableRow, index) => (
              <TableRow key={index}>
                <TableCell className="font-normal w-60 pr-6">
                  {tableRow.message}
                </TableCell>
                <TableCell className="flex items-center gap-1 font-normal w-60 pr-6">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: `${tableRow.alertColor}` }}
                  ></div>
                  <span style={{ color: `${tableRow.alertColor}` }}>
                    {tableRow.alertType}
                  </span>
                </TableCell>
                <TableCell className="font-normal w-60 pr-6">
                  {tableRow.time}
                </TableCell>
                <TableCell>
                  <Link
                    href="#"
                    className="text-[#1459FC] border-b border-[#1459fc]"
                  >
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* BOTTOM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-2xl mt-4 p-4 flex justify-center items-center flex-col gap-2">
          <div className="w-[52px] h-[52px] rounded-xl bg-[#EAAEAE99] flex justify-center items-center">
            <ShoppingBag className="h-7 w-7" style={{ color: "#7A1F1F" }} />
          </div>
          <div className="w-[300px] flex flex-col justify-center items-center">
            <h3 className="font-medium text-xl text-foreground">
              Manage Reseller
            </h3>
            <p className="text-center text-muted-foreground">
              Go to the Resellers page to manage reseller accounts and settings.
            </p>
          </div>

          <Button className="border-2 border-transparent bg-[#235E2F] hover:bg-[#235E2F] hover:border-[#AADFB4]">
            Go to Resellers
          </Button>
        </div>
        <div className="border rounded-2xl mt-4 p-4 flex justify-center items-center flex-col gap-2">
          <div className="w-[52px] h-[52px] rounded-xl bg-[#EAAEAE99] flex justify-center items-center">
            <Users2 className="h-7 w-7" style={{ color: "#7A1F1F" }} />
          </div>
          <div className="w-[300px] flex flex-col justify-center items-center">
            <h3 className="font-medium text-xl text-foreground">
              View Clients
            </h3>
            <p className="text-center text-muted-foreground">
              Visit the Client dashboard to manage client info and activities.
            </p>
          </div>

          <Button className="border-2 border-transparent bg-[#235E2F] hover:bg-[#235E2F] hover:border-[#AADFB4]">
            Go to Clients
          </Button>
        </div>
      </div>
      {/* DATA TABLE */}
      <div className="border pt-4 rounded-lg">
        <div className="flex justify-between items-center mb-4 px-4">
          <h3 className="font-medium">Activity Log</h3>
          <Button className="bg-[#235E2F]">
            <Power className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
        <div>
          <ActivityLogPage />
        </div>
      </div>
    </div>
  );
}
