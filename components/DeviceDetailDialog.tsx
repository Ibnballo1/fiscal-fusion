"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DeviceDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedClient: string;
}

export function DeviceDetailsDialog({
  open,
  onOpenChange,
  selectedClient,
}: DeviceDetailsDialogProps) {
  const [formData, setFormData] = useState({
    client: selectedClient,
    deviceSerialNumber: "B1296D01D61425AC04",
    modelName: "Server",
    modelVersion: "v1",
    tin: "200174908",
    vatNumber: "220-994-325",
    taxpayerName: "ISPRED INVESTMENTS",
    tradeName: "ISPRED INVESTMENTS T/A Cafe Mocha",
    deviceId: "27395-A0C1AF77EC7584BA6C21",
    activationKey: "ZIMRA-KEY-1839-XY29",
  });

  const clients = [
    { id: "twenai-trading", name: "Twenai Trading" },
    { id: "bles-software", name: "Bles Software" },
    { id: "tech-solutions", name: "Tech Solutions" },
    { id: "digital-corp", name: "Digital Corp" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  const handleAdd = () => {
    console.log("Adding device with details:", formData);
    // Here you would typically submit the form data to your API
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-6 max-h-[95vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add New Device
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Assign To Client */}
          <div className="space-y-3">
            <Label
              htmlFor="client-select"
              className="text-sm font-medium text-gray-900"
            >
              Assign To Client
            </Label>
            <Select
              value={formData.client}
              onValueChange={(value) => handleInputChange("client", value)}
            >
              <SelectTrigger id="client-select" className="w-full">
                <SelectValue placeholder="Select Client" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((client) => (
                  <SelectItem key={client.id} value={client.id}>
                    {client.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Device Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Device Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="device-serial"
                  className="text-sm font-medium text-gray-700"
                >
                  Device Serial Number
                </Label>
                <Input
                  id="device-serial"
                  value={formData.deviceSerialNumber}
                  onChange={(e) =>
                    handleInputChange("deviceSerialNumber", e.target.value)
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="model-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Model Name
                </Label>
                <Input
                  id="model-name"
                  value={formData.modelName}
                  onChange={(e) =>
                    handleInputChange("modelName", e.target.value)
                  }
                  className="w-full"
                />
              </div>

              <div className="flex justify-between w-[39vw] gap-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="model-version"
                    className="text-sm font-medium text-gray-700"
                  >
                    Model Version
                  </Label>
                  <Input
                    id="model-version"
                    value={formData.modelVersion}
                    onChange={(e) =>
                      handleInputChange("modelVersion", e.target.value)
                    }
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tin"
                    className="text-sm font-medium text-gray-700"
                  >
                    TIN
                  </Label>
                  <Input
                    id="tin"
                    value={formData.tin}
                    onChange={(e) => handleInputChange("tin", e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="vat-number"
                    className="text-sm font-medium text-gray-700"
                  >
                    Vat Number
                  </Label>
                  <Input
                    id="vat-number"
                    value={formData.vatNumber}
                    onChange={(e) =>
                      handleInputChange("vatNumber", e.target.value)
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="taxpayer-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Taxpayer Name
                </Label>
                <Input
                  id="taxpayer-name"
                  value={formData.taxpayerName}
                  onChange={(e) =>
                    handleInputChange("taxpayerName", e.target.value)
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="trade-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Trade Name
                </Label>
                <Input
                  id="trade-name"
                  value={formData.tradeName}
                  onChange={(e) =>
                    handleInputChange("tradeName", e.target.value)
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Activation Details Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Activation Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="device-id"
                  className="text-sm font-medium text-gray-700"
                >
                  Device Id
                </Label>
                <Input
                  id="device-id"
                  value={formData.deviceId}
                  onChange={(e) =>
                    handleInputChange("deviceId", e.target.value)
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="activation-key"
                  className="text-sm font-medium text-gray-700"
                >
                  Activation Key
                </Label>
                <Input
                  id="activation-key"
                  value={formData.activationKey}
                  onChange={(e) =>
                    handleInputChange("activationKey", e.target.value)
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              onClick={handleAdd}
              className="bg-green-600 hover:bg-green-700"
            >
              Add
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
