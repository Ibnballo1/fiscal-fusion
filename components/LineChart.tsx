"use client";

import { CartesianGrid, Line, LineChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const chartData = [
  { month: "January", desktop: 50 },
  { month: "February", desktop: 85 },
  { month: "March", desktop: 50 },
  { month: "April", desktop: 82 },
  { month: "May", desktop: 83 },
  { month: "June", desktop: 50 },
  { month: "July", desktop: 92 },
  { month: "August", desktop: 94 },
  { month: "September", desktop: 91 },
  { month: "October", desktop: 95 },
  { month: "November", desktop: 93 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function LineChartComponent() {
  return (
    <ChartContainer className="h-10 w-full" config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid horizontal={false} vertical={false} />
        {/* <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="green"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
