"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CommissionHistory() {
  const commissions = [
    {
      no: 1,
      date: "4 May 2024",
      client: "Geo Finance",
      revenue: "$2,500",
      rate: "5%",
      earnings: "$125",
    },
    {
      no: 2,
      date: "4 May 2024",
      client: "Geo Finance",
      revenue: "$2,500",
      rate: "5%",
      earnings: "$125",
    },
    {
      no: 3,
      date: "4 May 2024",
      client: "Geo Finance",
      revenue: "$2,500",
      rate: "5%",
      earnings: "$125",
    },
    {
      no: 4,
      date: "4 May 2024",
      client: "Geo Finance",
      revenue: "$2,500",
      rate: "5%",
      earnings: "$125",
    },
    {
      no: 5,
      date: "4 May 2024",
      client: "Geo Finance",
      revenue: "$2,500",
      rate: "5%",
      earnings: "$125",
    },
  ];

  return (
    <div className="mt-4 bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Commission History
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
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
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
                <SelectItem value="direct">Direct</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
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

        <Button className="bg-green-600 hover:bg-green-700">Export</Button>
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
                Client
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Revenue
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Rate
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">
                Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            {commissions.map((commission) => (
              <tr key={commission.no} className="border-b border-gray-100">
                <td className="py-3 px-4 text-sm text-gray-900">
                  {commission.no}
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {commission.date}
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {commission.client}
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {commission.revenue}
                </td>
                <td className="py-3 px-4 text-sm text-gray-900">
                  {commission.rate}
                </td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900">
                  {commission.earnings}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
