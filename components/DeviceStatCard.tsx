import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, WifiOff, AlertTriangle } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
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
        <p
          className={`text-xs mt-1 ${
            changeType === "positive" ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </p>
      </CardContent>
    </Card>
  );
}

export function DeviceStatsCards() {
  const stats = [
    {
      title: "Total Devices",
      value: "45",
      change: "-25% vs last month",
      changeType: "negative" as const,
      icon: <Smartphone className="h-4 w-4" />,
    },
    {
      title: "Unsynced Devices (Last 72h)",
      value: "9",
      change: "-35% vs last month",
      changeType: "negative" as const,
      icon: <WifiOff className="h-4 w-4" />,
    },
    {
      title: "Devices Missing Config (-7d)",
      value: "5",
      change: "+35% vs last month",
      changeType: "positive" as const,
      icon: <AlertTriangle className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 py-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div className={`col-start-${index + 2}`} key={index}>
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        </div>
      ))}
    </div>
  );
}
