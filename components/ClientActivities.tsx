"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  MoreHorizontal,
  Download,
  ChevronDown,
  Users,
  DollarSign,
  FileText,
  Shield,
  Activity,
  HelpCircle,
  BarChart3,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Sample data for charts
const transactionVolumeData = [
  { day: "Mon", date: "10/6", value: 35 },
  { day: "Tue", date: "11/6", value: 45 },
  { day: "Wed", date: "12/6", value: 96 },
  { day: "Thu", date: "13/6", value: 55 },
  { day: "Fri", date: "14/6", value: 65 },
  { day: "Sat", date: "15/6", value: 30 },
  { day: "Sun", date: "16/6", value: 75 },
  { day: "Mon", date: "17/6", value: 60 },
  { day: "Tue", date: "18/6", value: 45 },
  { day: "Wed", date: "19/6", value: 50 },
];

const clientTransactionData = [
  { day: "Mon", date: "10/6", light: 100, dark: 30 },
  { day: "Tue", date: "11/6", light: 100, dark: 45 },
  { day: "Wed", date: "12/6", light: 100, dark: 55 },
  { day: "Thu", date: "13/6", light: 100, dark: 20 },
  { day: "Fri", date: "14/6", light: 100, dark: 45 },
  { day: "Sat", date: "15/6", light: 100, dark: 60 },
  { day: "Sun", date: "16/6", light: 100, dark: 35 },
  { day: "Mon", date: "17/6", light: 100, dark: 25 },
  { day: "Tue", date: "18/6", light: 100, dark: 45 },
  { day: "Wed", date: "19/6", light: 100, dark: 30 },
];

const transactionHistory = [
  {
    id: 1,
    date: "04/06/2025",
    time: "07:43pm",
    invoice: "2359",
    type: "Bulk Upload",
    amount: "$580,000",
    status: "Submitted",
    receipt: "Uploaded",
    error: "—",
  },
  {
    id: 1,
    date: "04/06/2025",
    time: "07:43pm",
    invoice: "7894",
    type: "POS Submission",
    amount: "$230,000",
    status: "Submitted",
    receipt: "Uploaded",
    error: "—",
  },
  {
    id: 1,
    date: "04/06/2025",
    time: "07:43pm",
    invoice: "2359",
    type: "Refund",
    amount: "$1,000",
    status: "Submitted",
    receipt: "Uploaded",
    error: "—",
  },
  {
    id: 1,
    date: "04/06/2025",
    time: "07:43pm",
    invoice: "7894",
    type: "Real-time API",
    amount: "$1,000",
    status: "Submitted",
    receipt: "Uploaded",
    error: "—",
  },
];

export default function ClientActivities() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Transaction Volume Trends */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Transaction Volume Trends
              </CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Resellers:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-20 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={transactionVolumeData}>
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Client Transaction Summary */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Client Transaction Summary
              </CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Resellers:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-20 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={clientTransactionData} barCategoryGap="30%">
                    <XAxis
                      dataKey="date"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <YAxis
                      domain={[0, 100]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6b7280" }}
                    />
                    <Bar dataKey="light" fill="#bbf7d0" />
                    <Bar dataKey="dark" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Transaction History
              </CardTitle>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Resellers:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-20 h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search anything here..."
                      className="pl-10 w-80"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <span className="text-sm">Status:</span>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <span className="text-sm">Source:</span>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="24hrs">
                    <SelectTrigger className="w-40">
                      <span className="text-sm">Date:</span>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24hrs">Last 24hrs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>

              {/* Table */}
              <div className="border rounded-lg">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        No.
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Date
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Invoice #
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Type
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Amount
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Status
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Receipt
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Error
                      </th>
                      <th className="text-left p-4 font-medium text-sm text-gray-600">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionHistory.map((transaction, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 text-sm">{transaction.id}</td>
                        <td className="p-4 text-sm">
                          <div>{transaction.date}</div>
                          <div className="text-xs text-gray-500">
                            {transaction.time}
                          </div>
                        </td>
                        <td className="p-4 text-sm font-medium">
                          {transaction.invoice}
                        </td>
                        <td className="p-4 text-sm">{transaction.type}</td>
                        <td className="p-4 text-sm font-medium">
                          {transaction.amount}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">
                              {transaction.status}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">
                              {transaction.receipt}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-gray-500">
                          {transaction.error}
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>
                                Download Receipt
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  1-10 of 146 Recent Invoices
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">1-4</span>
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
