"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Smartphone } from "lucide-react";

interface RequestPayoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RequestPayoutDialog({
  open,
  onOpenChange,
}: RequestPayoutDialogProps) {
  const [selectedMethod, setSelectedMethod] = useState("mobile-money");

  const paymentMethods = [
    {
      id: "bank-transfer",
      title: "Bank Transfer",
      description: "Direct transfer to bank account",
      icon: CreditCard,
    },
    {
      id: "mobile-money",
      title: "Mobile Money",
      description: "Direct transfer via EcoCash or OneMoney",
      icon: Smartphone,
    },
  ];

  const handleConfirm = () => {
    console.log("Payout requested with method:", selectedMethod);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-6 min-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Request Payout
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">
              Select Payment Method
            </h3>
            <p className="text-sm text-gray-600">
              Select how you&apos;d like to get paid
            </p>
          </div>

          <div className="flex gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                  selectedMethod === method.id
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedMethod === method.id
                        ? "bg-green-100"
                        : "bg-gray-100"
                    }`}
                  >
                    <method.icon
                      className={`w-5 h-5 ${
                        selectedMethod === method.id
                          ? "text-green-600"
                          : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div className="">
                    <h4 className="font-medium text-gray-900">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button
              onClick={handleConfirm}
              className="bg-[#235E2F] hover:bg-green-700"
            >
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
