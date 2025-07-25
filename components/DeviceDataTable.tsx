"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export type Device = {
  id: string;
  activation: string;
  assignedTo: string;
  deviceId: string;
  serialNumber: string;
  tinNumber: string;
};

const data: Device[] = [
  {
    id: "1",
    activation: "15 May 2025",
    assignedTo: "Bles Software",
    deviceId: "27706",
    serialNumber: "B7106E058AC4926AABB",
    tinNumber: "220263087",
  },
  {
    id: "2",
    activation: "15 May 2025",
    assignedTo: "Bles Software",
    deviceId: "27706",
    serialNumber: "B7106E058AC4926AABB",
    tinNumber: "220263087",
  },
  {
    id: "3",
    activation: "15 May 2025",
    assignedTo: "Bles Software",
    deviceId: "27706",
    serialNumber: "B7106E058AC4926AABB",
    tinNumber: "220263087",
  },
];

export const columns: ColumnDef<Device>[] = [
  {
    accessorKey: "id",
    header: "No.",
    cell: ({ row }) => (
      <div className="w-12 text-sm font-medium text-gray-900">
        {row.index + 1}
      </div>
    ),
  },
  {
    accessorKey: "activation",
    header: "Activation",
    cell: ({ row }) => (
      <div className="text-sm text-gray-900">{row.getValue("activation")}</div>
    ),
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned To",
    cell: ({ row }) => (
      <div className="text-sm text-gray-900">{row.getValue("assignedTo")}</div>
    ),
  },
  {
    accessorKey: "deviceId",
    header: "Device ID",
    cell: ({ row }) => (
      <div className="text-sm font-medium text-gray-900">
        {row.getValue("deviceId")}
      </div>
    ),
  },
  {
    accessorKey: "serialNumber",
    header: "Serial Number",
    cell: ({ row }) => (
      <div className="text-sm font-mono text-gray-900">
        {row.getValue("serialNumber")}
      </div>
    ),
  },
  {
    accessorKey: "tinNumber",
    header: "TIN Number",
    cell: ({ row }) => (
      <div className="text-sm font-medium text-gray-900">
        {row.getValue("tinNumber")}
      </div>
    ),
  },
];

export function DeviceDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [sourceFilter, setSourceFilter] = React.useState<string>("all");
  const [dateFilter, setDateFilter] = React.useState<string>("last24hrs");

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Header with Search and Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search anything here..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(String(event.target.value))}
            className="pl-10 w-80 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>

        <div className="flex items-center space-x-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-28 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Status: All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="synced">Synced</SelectItem>
              <SelectItem value="unsynced">Unsynced</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sourceFilter} onValueChange={setSourceFilter}>
            <SelectTrigger className="w-28 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Source: All</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
              <SelectItem value="bulk">Bulk Import</SelectItem>
              <SelectItem value="api">API</SelectItem>
            </SelectContent>
          </Select>

          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-36 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last24hrs">Date: Last 24hrs</SelectItem>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-green-600 hover:bg-green-700 text-sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-50 hover:bg-gray-50"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="font-medium text-gray-700 text-sm py-4 px-6 border-b border-gray-200"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4 px-6">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-600">
          Showing {table.getRowModel().rows.length} of {data.length} devices
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-sm"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-sm"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
