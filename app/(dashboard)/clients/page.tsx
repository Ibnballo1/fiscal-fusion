"use client";

import { Button } from "@/components/ui/button";

import {
  Power,
  Search,
  TrendingUp,
  UserMinus,
  Users,
  UserX,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ClientsTableWrapper from "@/components/ClientsTableWrapper";

export default function Clients() {
  const [dateFilter, setDateFilter] = React.useState<string>("last24hrs");
  const [sourceFilter, setSourceFilter] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [globalFilter, setGlobalFilter] = React.useState("");

  const stats = [
    {
      title: "Total Clients",
      value: "5,000",
      change: "+10%",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Active Clients",
      value: "2,200",
      change: "+5%",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Inactive Clients",
      value: "5,000",
      change: "+10%",
      icon: <UserX className="h-4 w-4" />,
    },
    {
      title: "Disabled Clients",
      value: "5,000",
      change: "+10%",
      icon: <UserMinus className="h-4 w-4" />,
    },
  ];

  interface StatCardProps {
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
  }

  function StatCard({ title, value, change, icon }: StatCardProps) {
    return (
      <Card className="relative">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div className="text-muted-foreground">{icon}</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{value}</div>
          <p className="text-xs text-green-600 mt-1">
            {change}{" "}
            <span className="text-muted-foreground">from last month</span>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* TOTALS */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
          />
        ))}
      </div>
      {/* DATA TABLE */}
      <div className="border pt-4 rounded-lg">
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                placeholder="Search anything here..."
                value={globalFilter ?? ""}
                onChange={(event) =>
                  setGlobalFilter(String(event.target.value))
                }
                className="pl-8 w-64"
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Status: All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Source: All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Source: All</SelectItem>
                <SelectItem value="direct">Direct</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="organic">Organic</SelectItem>
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

            <Button className="bg-green-600 hover:bg-green-700">
              <Power className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div>
          <ClientsTableWrapper />
        </div>
      </div>
    </div>
  );
}
