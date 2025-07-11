"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";

export type Reseller = {
  id: string;
  name: string;
  clients: number;
  activeClients: number;
  revenue: number;
  commisionedOwed: number;
  takenBy: { name: string; avatar: string; initials: string };
  action: string;
  details: string;
  time: string;
};

export const columns: ColumnDef<Reseller>[] = [
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
    accessorKey: "takenBy",
    header: "Taken By",
    cell: ({ row }) => {
      const takenBy = row.getValue("takenBy") as Reseller["takenBy"];
      return (
        <div className="flex pl-2 gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={takenBy.avatar || "/placeholder.svg"}
              alt={takenBy.name}
            />
            <AvatarFallback className="text-xs bg-gray-100 text-gray-600">
              {takenBy.initials}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-900">
            {takenBy.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
];
