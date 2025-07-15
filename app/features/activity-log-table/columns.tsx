"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type Invoices = {
  id: string;
  invoice: string;
  customer: string;
  dateTime: string;
  amount: number;
  source: string;
  status: "Pending" | "Fiscalized" | "Failed";
};

export const columns: ColumnDef<Invoices>[] = [
  {
    accessorKey: "id",
    header: "No.",
    cell: ({ row }) => (
      <div className="text-sm text-gray-600 flex justify-center h-10 items-center border-r border-gray-200">
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "invoice",
    header: "Invoice#",
    cell: ({ row }) => (
      <div className="text-sm text-gray-900 font-medium pl-2">
        {row.getValue("invoice")}
      </div>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="text-sm text-gray-900 font-medium pl-2">
        {row.getValue("customer")}
      </div>
    ),
  },
  {
    accessorKey: "dateTime",
    header: "Date/Time",
    cell: ({ row }) => {
      const dateTime = row.getValue("dateTime") as string;
      const [date, time] = dateTime.split("\n");
      return (
        <div className="text-sm">
          <div>{date}</div>
          <div className="text-muted-foreground">{time}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="pl-2 font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "source",
    header: "Source",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "Failed"
              ? "destructive"
              : status === "Fiscalized"
              ? "default"
              : "secondary"
          }
          className={
            status === "Failed"
              ? "bg-red-100 text-red-700 hover:bg-red-100"
              : status === "Fiscalized"
              ? "bg-green-100 text-green-700 hover:bg-green-100"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
          }
        >
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              status === "Failed"
                ? "bg-red-500"
                : status === "Fiscalized"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          />
          {status}
        </Badge>
      );
    },
  },
  {
    id: "action",
    header: () => <div className="text-right pr-2">Action</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex items-center justify-end pr-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="text-right pr-2">
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
