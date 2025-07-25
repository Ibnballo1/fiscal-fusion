"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import type { Transaction } from "./TransactionHistory";

interface TransactionDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction: Transaction | null;
}

export function TransactionDetailsDrawer({
  open,
  onOpenChange,
  transaction,
}: TransactionDetailsDrawerProps) {
  if (!transaction) return null;

  const auditTrailData = [
    {
      action: "Submission",
      performedBy: "Zara Finance",
      timestamp: "Sep 25, 2025\n14:20PM",
      ipAddress: "192.168.1.45",
    },
  ];

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="h-full w-[600px] ml-auto">
        <div className="flex flex-col h-full">
          <DrawerHeader className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <DrawerTitle className="text-xl font-semibold">
                  Transaction Details - INV-2025-092
                </DrawerTitle>
                <DrawerDescription className="sr-only">
                  View detailed information about this transaction
                </DrawerDescription>
              </div>
              <DrawerClose asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
            <div className="mt-3">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                Submission Successful
              </Badge>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Transaction Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Transaction Summary
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600">
                    Date
                  </label>
                  <div className="text-sm text-gray-900">
                    Sep 25, 2025, 10:20am
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600">
                    Type
                  </label>
                  <div className="text-sm text-gray-900">Bulk Upload</div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600">
                    Transaction Count
                  </label>
                  <div className="text-sm text-gray-900">1</div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600">
                    Amount
                  </label>
                  <div className="text-sm font-semibold text-gray-900">
                    $200,000
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Submission Info
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600">
                    Client
                  </label>
                  <div className="text-sm text-gray-900">
                    Client-Bulk upload (CSV)
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-600">
                    Zimra confirmation
                  </label>
                  <div className="text-sm text-gray-900">
                    Sep 25, 2025, 10:20am
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata / Audit Trail */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Metadata / Audit Trail
              </h3>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        Action
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        Performed By
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        Timestamp
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                        IP Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditTrailData.map((item, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {item.action}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {item.performedBy}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div>
                            {item.timestamp.split("\n").map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {item.ipAddress}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
