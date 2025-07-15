import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, AlertTriangle } from "lucide-react";
import { LineChartComponent } from "./LineChart";

// Define types for different card data structures
interface BaseCardData {
  id: string;
  title: string;
  icon: React.ReactNode;
  type: "metric" | "compliance" | "earnings";
}

interface MetricCardData extends BaseCardData {
  type: "metric";
  value: number;
  subtitle?: string;
  breakdown?: {
    active: number;
    inactive: number;
  };
}

interface ComplianceCardData extends BaseCardData {
  type: "compliance";
  percentage: number;
  status: "compliant" | "warning" | "critical";
  trendData: number[];
}

interface EarningsCardData extends BaseCardData {
  type: "earnings";
  current: number;
  goal: number;
  currency: string;
  user?: {
    name: string;
    avatar?: string;
  };
}

type CardData = MetricCardData | ComplianceCardData | EarningsCardData;

// Sample data - in real app, this would come from API/database
const dashboardData: CardData[] = [
  {
    id: "1",
    type: "metric",
    title: "Total Clients",
    icon: <Users className="h-5 w-5" />,
    value: 1344,
    breakdown: {
      active: 1000,
      inactive: 344,
    },
  },
  {
    id: "2",
    type: "compliance",
    title: "Compliance Health",
    icon: <AlertTriangle className="h-5 w-5" />,
    percentage: 92,
    status: "compliant",
    trendData: [85, 87, 89, 91, 88, 90, 92, 94, 91, 93, 92],
  },
  {
    id: "3",
    type: "earnings",
    title: "Monthly Earnings",
    icon: <DollarSign className="h-5 w-5" />,
    current: 2000,
    goal: 7000,
    currency: "$",
    // user: {
    //   name: "M",
    //   avatar: "/placeholder.svg?height=32&width=32",
    // },
  },
];

// Individual card components for each type
function MetricCard({ data }: { data: MetricCardData }) {
  return (
    <Card className="transition-transform duration-200 hover:scale-[1.02] hover:shadow-md">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm flex gap-2 items-center font-medium text-gray-600">
          <span>{data.icon}</span>
          <span>{data.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-2xl font-bold">{data.value.toLocaleString()}</div>
        {data.breakdown && (
          <div className="flex gap-8 mt-2">
            <span className="text-sm text-green-600">
              {data.breakdown.active}{" "}
              <span className="text-muted-foreground">active</span>
            </span>
            <span className="text-sm text-red-600">
              {data.breakdown.inactive}{" "}
              <span className="text-muted-foreground">inactive</span>
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ComplianceCard({ data }: { data: ComplianceCardData }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "compliant":
        return "text-green-600";
      case "warning":
        return "text-yellow-600";
      case "critical":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Card className="transition-transform duration-200 hover:scale-[1.02] hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm flex gap-2 items-center font-medium text-gray-600">
          <span>{data.icon}</span>
          <span>{data.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.percentage}%</div>
        <div className="flex items-center justify-between">
          {/* <TrendingUp className="h-4 w-4 text-green-600" /> */}
        </div>
        {/* <TrendLine data={data.trendData} /> */}
        <LineChartComponent />
        <Badge variant="secondary" className={"text-muted-foreground"}>
          Compliant
        </Badge>
      </CardContent>
    </Card>
  );
}

function EarningsCard({ data }: { data: EarningsCardData }) {
  const progressPercentage = (data.current / data.goal) * 100;

  return (
    <Card className="transition-transform duration-200 hover:scale-[1.02] hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm flex items-center gap-2 font-medium text-gray-600">
          <span>{data.icon}</span>
          <span>{data.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {data.currency}
          {data.current.toLocaleString()}
        </div>
        <div className="mt-2 space-y-2">
          <Progress
            value={progressPercentage}
            className="h-2 transition-all duration-700"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Goal: {data.currency}
              {data.goal.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Main component that renders all cards
export default function DashboardCards() {
  const renderCard = (cardData: CardData) => {
    switch (cardData.type) {
      case "metric":
        return <MetricCard key={cardData.id} data={cardData} />;
      case "compliance":
        return <ComplianceCard key={cardData.id} data={cardData} />;
      case "earnings":
        return <EarningsCard key={cardData.id} data={cardData} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {dashboardData.map(renderCard)}
    </div>
  );
}
