"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface QRScanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  clientId: string;
  onScanSuccess?: () => void;
}

export function QRScanDialog({
  open,
  onOpenChange,
  clientId,
  onScanSuccess,
}: QRScanDialogProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);

  // Generate QR code data based on client and session
  const qrData = `DEVICE_CONNECT:${clientId}:${Date.now()}`;

  // Simulate QR code scanning process
  useEffect(() => {
    if (open && isScanning) {
      const timer = setTimeout(() => {
        // Simulate successful scan
        setScanResult("Device scanned successfully!");
        setIsScanning(false);

        // Automatically trigger the drawer when scan is successful
        setTimeout(() => {
          onOpenChange(false); // Close QR dialog
          if (onScanSuccess) {
            onScanSuccess(); // Open the drawer
          }
          // Reset state for next use
          setScanResult(null);
        }, 1000); // Small delay to show success message
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [open, isScanning, onOpenChange, onScanSuccess]);

  const handleStartScan = () => {
    setIsScanning(true);
    console.log("Starting QR scan for client:", clientId);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state
    setScanResult(null);
    setIsScanning(false);
  };

  // Reset state when dialog opens
  useEffect(() => {
    if (open) {
      setScanResult(null);
      setIsScanning(false);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-4 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Add New Device
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="text-center">
            <h3 className="text-sm font-medium text-gray-900 mb-6">
              Scan to Connect Device
            </h3>

            {/* QR Code Display */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* QR Code placeholder - in a real app, you'd use a QR code library */}
                <div className="w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                  <Image
                    src="/qr-code.png"
                    alt="QR Code"
                    width={266}
                    height={266}
                  />
                </div>

                {/* Scanning overlay */}
                {isScanning && (
                  <div className="absolute inset-0 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                    <div className="text-green-700 font-medium">
                      Scanning...
                    </div>
                  </div>
                )}

                {/* Success overlay */}
                {scanResult && (
                  <div className="absolute inset-0 bg-green-500 bg-opacity-30 rounded-lg flex items-center justify-center">
                    <div className="text-green-800 font-medium">✓ Scanned!</div>
                  </div>
                )}
              </div>
            </div>

            {/* Status message */}
            {isScanning && (
              <p className="text-sm text-blue-600 mb-4">
                Scanning for device connection...
              </p>
            )}

            {scanResult && (
              <p className="text-sm text-green-600 mb-4">{scanResult}</p>
            )}

            {!isScanning && !scanResult && (
              <p className="text-sm text-gray-600 mb-4">
                Point your device camera at this QR code to connect
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={handleStartScan}
              className="bg-green-600 hover:bg-green-700"
              disabled={isScanning || !!scanResult}
            >
              {isScanning
                ? "Scanning..."
                : scanResult
                ? "Scanned ✓"
                : "Start Scan"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
