"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PayoutHistory() {
  const payouts = [
    {
      no: 1,
      date: "4 May 2024",
      method: "Bank Transfer",
      amount: "$2,500",
      status: "Pending",
      reference: "POUT-000234",
    },
    {
      no: 2,
      date: "4 May 2024",
      method: "PayPal",
      amount: "$1,500",
      status: "Completed",
      reference: "POUT-000233",
    },
    {
      no: 3,
      date: "4 May 2024",
      method: "Mobile Money",
      amount: "$2,500",
      status: "Completed",
      reference: "POUT-000232",
    },
    {
      no: 4,
      date: "4 May 2024",
      method: "Bank Transfer",
      amount: "$2,500",
      status: "Completed",
      reference: "POUT-000231",
    },
    {
      no: 5,
      date: "4 May 2024",
      method: "Bank Transfer",
      amount: "$2,500",
      status: "Failed",
      reference: "POUT-000230",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      case "Failed":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Payout History
      </h3>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Status:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Source:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="bank">Bank</SelectItem>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Date:</span>
            <Select defaultValue="30days">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="bg-[#235E2F] hover:bg-[#1D4D24]">Export</Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                No.
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Date
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Method
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Amount
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Status
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Reference ID
              </th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.no} className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-900">{payout.no}</td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {payout.date}
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {payout.method}
                </td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">
                  {payout.amount}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      payout.status
                    )}`}
                  >
                    {payout.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {payout.reference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
