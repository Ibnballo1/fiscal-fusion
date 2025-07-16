import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2, Smartphone, Laptop } from "lucide-react";

const deviceSessions = [
  {
    id: "1",
    device: "iPhone 15 pro",
    lastActivity: "1 min ago",
    icon: Smartphone,
  },
  {
    id: "2",
    device: "Hp Probook 11",
    lastActivity: "2 days ago",
    icon: Laptop,
  },
  {
    id: "3",
    device: "iPhone Xsmax",
    lastActivity: "24 hours ago",
    icon: Smartphone,
  },
];

export function SessionsByDevice() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold">
          Sessions By Device
        </CardTitle>
        <Select defaultValue="last30days">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last30days">Last 30 days</SelectItem>
            <SelectItem value="last7days">Last 7 days</SelectItem>
            <SelectItem value="last24hours">Last 24 hours</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
            <div>Devices</div>
            <div>Last Activity</div>
            <div>Action</div>
          </div>
          {deviceSessions.map((session) => (
            <div
              key={session.id}
              className="grid grid-cols-3 gap-4 items-center py-2"
            >
              <div className="flex items-center space-x-3">
                <session.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{session.device}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                {session.lastActivity}
              </div>
              <div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
