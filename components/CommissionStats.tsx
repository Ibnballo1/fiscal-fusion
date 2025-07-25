"use client";

import { TrendingUp, Clock, Calendar } from "lucide-react";

export function CommissionStats() {
  const stats = [
    {
      title: "Lifetime Earnings",
      value: "$42,800",
      change: "+12.5%",
      changeType: "positive" as "positive" | "neutral" | "negative",
      icon: TrendingUp,
    },
    {
      title: "Pending Payouts",
      value: "$3,500",
      change: "Pending review",
      changeType: "neutral" as "positive" | "neutral" | "negative",
      icon: Clock,
    },
    {
      title: "Next Payout Date",
      value: "Oct 25, 2025",
      change: "Next payout",
      changeType: "neutral" as "positive" | "neutral" | "negative",
      icon: Calendar,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {stat.value}
              </p>
              <p
                className={`text-sm mt-1 ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : stat.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-500"
                }`}
              >
                {stat.change}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <stat.icon className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
