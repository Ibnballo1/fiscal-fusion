// import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Banknote, ShoppingBag, Users2 } from "lucide-react";
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
    </div>
  );
}
