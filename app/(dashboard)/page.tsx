"use client";

import DashboardCards from "@/components/DashboardCards";
import { Button } from "@/components/ui/button";

import { Power, Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import InvoiceTableWrapper from "@/components/InvoiceTableWrapper";

export default function Home() {
  const [dateFilter, setDateFilter] = React.useState<string>("last24hrs");
  const [sourceFilter, setSourceFilter] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* TOTALS */}
      <div className="grid grid-cols-1 gap-4">
        <DashboardCards />
      </div>

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
          <InvoiceTableWrapper />
        </div>
      </div>
    </div>
  );
}
