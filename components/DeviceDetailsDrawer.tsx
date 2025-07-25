"use client";

import { useState } from "react";
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface DeviceDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedClient: string;
  isFromQRScan?: boolean;
}

export function DeviceDetailsDrawer({
  open,
  onOpenChange,
  selectedClient,
  isFromQRScan = false,
}: DeviceDetailsDrawerProps) {
  const [formData, setFormData] = useState({
    client: selectedClient,
    deviceSerialNumber: "B1296D01D61425AC09",
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

  const handleAdd = () => {
    console.log("Adding device with details:", formData);
    console.log("Source:", isFromQRScan ? "QR Scan" : "Manual Entry");
    // Here you would typically submit the form data to your API
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="h-full border-2 border-red-700 !w-[1000px] data-[vaul-drawer-direction=right]:!w-[50vw]">
        <div className="flex flex-col h-full">
          <DrawerHeader className="border-b border-gray-200">
            <DrawerTitle className="text-xl font-semibold">
              Add New Device
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Fill in the device details to add a new device
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Show source indicator if from QR scan */}
            {isFromQRScan && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <div className="flex items-center">
                  <div className="text-green-600 mr-2">✓</div>
                  <span className="text-sm text-green-800">
                    Device scanned successfully via QR code
                  </span>
                </div>
              </div>
            )}

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
          </div>

          {/* Action Buttons */}
          <DrawerFooter className="border-t border-gray-200">
            <div className="flex justify-end space-x-3">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
              <Button
                onClick={handleAdd}
                className="bg-green-600 hover:bg-green-700"
              >
                Add
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
