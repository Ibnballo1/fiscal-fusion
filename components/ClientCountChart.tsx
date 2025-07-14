"use client";

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { day: "Mon", date: "10/5", value: 22 },
  { day: "Tue", date: "11/5", value: 45 },
  { day: "Wed", date: "12/5", value: 55 },
  { day: "Thu", date: "13/5", value: 58 },
  { day: "Fri", date: "14/5", value: 35 },
  { day: "Sat", date: "15/5", value: 42 },
  { day: "Sun", date: "16/5", value: 58 },
  { day: "Mon", date: "17/5", value: 48 },
  { day: "Tue", date: "18/5", value: 52 },
  { day: "Wed", date: "19/5", value: 98 },
  { day: "Thu", date: "20/5", value: 42 },
  { day: "Fri", date: "21/5", value: 58 },
  { day: "Sat", date: "22/5", value: 55 },
  { day: "Sun", date: "23/5", value: 52 },
  { day: "Mon", date: "24/5", value: 48 },
  { day: "Tue", date: "25/5", value: 35 },
  { day: "Wed", date: "26/5", value: 25 },
  { day: "Thu", date: "27/5", value: 32 },
  { day: "Fri", date: "28/5", value: 55 },
  { day: "Sat", date: "29/5", value: 48 },
  { day: "Sun", date: "30/5", value: 78 },
  { day: "Mon", date: "17/5", value: 72 },
  { day: "Tue", date: "18/5", value: 68 },
  { day: "Wed", date: "19/5", value: 58 },
  { day: "Thu", date: "20/5", value: 65 },
  { day: "Fri", date: "21/5", value: 62 },
  { day: "Sat", date: "22/5", value: 58 },
  { day: "Sun", date: "23/5", value: 72 },
  { day: "Mon", date: "24/5", value: 65 },
  { day: "Tue", date: "25/5", value: 58 },
  { day: "Wed", date: "26/5", value: 62 },
];

const CustomDot = ({
  cx,
  cy,
  value,
}: {
  cx: number;
  cy: number;
  value: number;
}) => {
  // Skip rendering if value is not a number (defensive guard)
  if (typeof value !== "number") return null;

  // Special styling for the peak value 98
  if (value === 98) {
    return (
      <>
        <circle
          cx={cx}
          cy={cy}
          r={4}
          fill="#15803d"
          stroke="#fff"
          strokeWidth={2}
        />
        <g>
          <rect
            x={cx - 12}
            y={cy - 25}
            width={24}
            height={18}
            rx={4}
            fill="#15803d"
          />
          <text
            x={cx}
            y={cy - 12}
            textAnchor="middle"
            fill="white"
            fontSize={12}
            fontWeight="600"
          >
            98
          </text>
        </g>
      </>
    );
  }

  // Default dots
  return <circle cx={cx} cy={cy} r={3} fill="#15803d" />;
};

export default function ClientCountChart() {
  return (
    <div className="w-full border rounded-lg p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">
          Client Count Trend
        </h2>
        <Select defaultValue="all">
          <SelectTrigger className="w-32 h-8 text-sm border-gray-200">
            <SelectValue placeholder="Resellers: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Resellers: All</SelectItem>
            <SelectItem value="active">Active Only</SelectItem>
            <SelectItem value="inactive">Inactive Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => {
                const item = data[payload.index];
                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor="middle"
                      fill="#6b7280"
                      fontSize={12}
                    >
                      <tspan x={0} dy={0}>
                        {payload.value}
                      </tspan>
                      <tspan x={0} dy={16}>
                        {item?.date}
                      </tspan>
                    </text>
                  </g>
                );
              }}
            />
            <YAxis
              domain={[20, 100]}
              ticks={[20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              dot={<CustomDot cx={0} cy={0} value={0} />}
              activeDot={{ r: 4, fill: "#22c55e" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
