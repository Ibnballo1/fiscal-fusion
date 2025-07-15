"use client";

import DashboardCards from "@/components/DashboardCards";
import { Button } from "@/components/ui/button";

import { AlertTriangle, CircleDollarSign, Power, Search } from "lucide-react";

import InvoiceTable from "@/components/InvoiceTable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function Home() {
  const [dateFilter, setDateFilter] = React.useState<string>("last24hrs");
  const [sourceFilter, setSourceFilter] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");

  const cardList = [
    {
      title: "Total Clients",
      icon: <CircleDollarSign />,
      value: "1,344",
      // description: "Card Description",
      totalActive: "1000",
      totalInactive: "344",
    },
    {
      title: "Compliance Health",
      icon: <AlertTriangle />,
      value: "92%",
      totalActive: "",
      footer: "Compliant",
    },
    {
      title: "Monthly Earnings",
      icon: <AlertTriangle />,
      value: "24,125",
      totalActive: "$2,000",
      totalInactive: "$7,500",
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
      <div className="grid grid-cols-1 gap-4">
        <DashboardCards />
      </div>
      {/* LATEST ALERTS */}
      {/* <div className="border rounded-lg p-2.5">
        <h2 className="text-lg font-semibold mb-4">Latest Alerts</h2>
        <Table>
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
      </div> */}
      {/* BOTTOM */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div> */}
      {/* DATA TABLE */}
      <div className="border pt-4 rounded-lg">
        <div className="flex justify-between items-center mb-4 px-4">
          <h3 className="font-medium">Recent Invoices</h3>

          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Status: All</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="fiscalized">Fiscalized</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Source: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Source: All</SelectItem>
                <SelectItem value="nch">NCH Express</SelectItem>
                <SelectItem value="excel">Excel Import</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Date: Last 24hrs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last24hrs">Date: Last 24hrs</SelectItem>
                <SelectItem value="last7days">Last 7 days</SelectItem>
                <SelectItem value="last30days">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#235E2F] hover:bg-green-700">
              <Power className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </div>
        <div>
          <InvoiceTable />
        </div>
      </div>
    </div>
  );
}
