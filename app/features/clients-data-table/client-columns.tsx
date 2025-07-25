"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

export type Clients = {
  id: string;
  userId: string;
  name: string;
  planTier: "Basic" | "Premium";
  monthlyRevenue: string;
  complianceScore: number;
  lastActivity: string;
  outstandingInvoices: string;
};

export const columns: ColumnDef<Clients>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => (
      <div className="text-sm text-gray-600 flex justify-center h-20 items-center border-r border-gray-200">
        {row.getValue("id")}
      </div>
    ),
  },
  {
    accessorKey: "userId",
    header: "User ID",
    cell: ({ row }) => (
      <div className="font-medium pl-2">{row.getValue("userId")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "planTier",
    header: "Plan Tier",
    cell: ({ row }) => <div>{row.getValue("planTier")}</div>,
  },
  {
    accessorKey: "monthlyRevenue",
    header: "Monthly Revenue",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("monthlyRevenue")}</div>
    ),
  },
  {
    accessorKey: "complianceScore",
    header: "Compliance Score",
    cell: ({ row }) => {
      const score = row.getValue("complianceScore") as number;
      const isHighScore = score >= 90;
      return (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isHighScore ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className={isHighScore ? "text-green-600" : "text-red-600"}>
            {score}%
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "lastActivity",
    header: "Last Activity",
    cell: ({ row }) => {
      const activity = row.getValue("lastActivity") as string;
      const [date, time] = activity.split("\n");
      return (
        <div className="text-sm">
          <div>{date}</div>
          <div className="text-muted-foreground">{time}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "outstandingInvoices",
    header: "Outstanding Invoices",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("outstandingInvoices")}</div>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={`/clients/${row.getValue("id")}`}>View client</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Edit details</DropdownMenuItem>
            <DropdownMenuItem>View invoices</DropdownMenuItem>
            <DropdownMenuItem>Send message</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Disable client
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
