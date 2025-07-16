"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AlertsSummary() {
  const [criticalAlertsExpanded, setCriticalAlertsExpanded] = useState(true);
  const [failedTransactionsExpanded, setFailedTransactionsExpanded] =
    useState(true);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Alerts Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Critical Alerts */}
        <div className="space-y-2">
          <Alert className="border-red-200 bg-red-50">
            <AlertDescription>
              <div className="flex items-center justify-between">
                <span className="font-medium text-red-800">
                  You have 2 Critical Alerts
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setCriticalAlertsExpanded(!criticalAlertsExpanded)
                  }
                  className="h-6 w-6 p-0 text-red-600 hover:bg-red-100"
                >
                  {criticalAlertsExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          {criticalAlertsExpanded && (
            <div className="space-y-2 ml-4">
              <div className="flex items-center justify-between py-2 text-sm">
                <span>
                  <span className="font-medium">johnedoe@gmail.com</span>{" "}
                  accepted your invite to join the workspace.
                </span>
                <span className="text-muted-foreground">Jul 20</span>
              </div>
              <div className="flex items-center justify-between py-2 text-sm">
                <span>
                  <span className="font-medium">johnedoe@gmail.com</span>{" "}
                  accepted your invite to join the workspace.
                </span>
                <span className="text-muted-foreground">Jul 20</span>
              </div>
            </div>
          )}
        </div>

        {/* Failed Transaction Batch */}
        <div className="space-y-2">
          <Alert className="border-yellow-200 bg-yellow-50">
            <AlertDescription>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-yellow-800">
                    You have 2 failed transaction batch
                  </span>
                  <Avatar className="h-6 w-6 bg-pink-500">
                    <AvatarFallback className="text-white text-xs">
                      M
                    </AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setFailedTransactionsExpanded(!failedTransactionsExpanded)
                  }
                  className="h-6 w-6 p-0 text-yellow-600 hover:bg-yellow-100"
                >
                  {failedTransactionsExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          {failedTransactionsExpanded && (
            <div className="space-y-2 ml-4">
              <div className="flex items-center justify-between py-2 text-sm">
                <span>
                  <span className="font-medium">johnedoe@gmail.com</span>{" "}
                  accepted your invite to join the workspace.
                </span>
                <span className="text-muted-foreground">Jul 20</span>
              </div>
              <div className="flex items-center justify-between py-2 text-sm">
                <span>
                  <span className="font-medium">johnedoe@gmail.com</span>{" "}
                  accepted your invite to join the workspace.
                </span>
                <span className="text-muted-foreground">Jul 20</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
