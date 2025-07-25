// "use client";

// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { QRScanDialog } from "./QRScanDialog";
// import { DeviceDetailsDialog } from "./DeviceDetailDialog";

// interface AddDeviceDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export function AddDeviceDialog({ open, onOpenChange }: AddDeviceDialogProps) {
//   const [selectedClient, setSelectedClient] = useState("twenai-trading");
//   const [showQRScanDialog, setShowQRScanDialog] = useState(false);
//   const [showDeviceDetailsDialog, setShowDeviceDetailsDialog] = useState(false);

//   const clients = [
//     { id: "twenai-trading", name: "Twenai Trading" },
//     { id: "bles-software", name: "Bles Software" },
//     { id: "tech-solutions", name: "Tech Solutions" },
//     { id: "digital-corp", name: "Digital Corp" },
//   ];

//   const handleAddDeviceDetails = () => {
//     console.log("Add Device Details clicked for client:", selectedClient);
//     // This would typically navigate to a detailed form or next step
//     onOpenChange(false);
//     setShowDeviceDetailsDialog(true);
//   };

//   const handleScanQRCode = () => {
//     console.log("Opening QR scanner for client:", selectedClient);
//     onOpenChange(false); // Close the current dialog
//     setShowQRScanDialog(true); // Open QR scan dialog
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="p-4">
//         <DialogHeader>
//           <DialogTitle className="text-xl font-semibold">
//             Add New Device
//           </DialogTitle>
//         </DialogHeader>

//         <div className="space-y-6 py-4">
//           <div className="space-y-3">
//             <Label
//               htmlFor="client-select"
//               className="text-sm font-medium text-gray-900"
//             >
//               Assign To Client
//             </Label>
//             <Select value={selectedClient} onValueChange={setSelectedClient}>
//               <SelectTrigger id="client-select" className="w-full">
//                 <SelectValue placeholder="Select Client" />
//               </SelectTrigger>
//               <SelectContent>
//                 {clients.map((client) => (
//                   <SelectItem key={client.id} value={client.id}>
//                     {client.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="flex justify-end space-x-3 pt-4">
//             <Button variant="outline" onClick={handleAddDeviceDetails}>
//               Add Device Details
//             </Button>
//             <Button
//               onClick={handleScanQRCode}
//               className="bg-green-600 hover:bg-green-700"
//             >
//               Scan QR Code
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//       <QRScanDialog
//         open={showQRScanDialog}
//         onOpenChange={setShowQRScanDialog}
//         clientId={selectedClient}
//       />
//       <DeviceDetailsDialog
//         open={showDeviceDetailsDialog}
//         onOpenChange={setShowDeviceDetailsDialog}
//         selectedClient={selectedClient}
//       />
//     </Dialog>
//   );
// }

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QRScanDialog } from "./QRScanDialog";
import { DeviceDetailsDialog } from "./DeviceDetailDialog";
import { DeviceDetailsDrawer } from "./DeviceDetailsDrawer";

interface AddDeviceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddDeviceDialog({ open, onOpenChange }: AddDeviceDialogProps) {
  const [selectedClient, setSelectedClient] = useState("twenai-trading");
  const [showQRScanDialog, setShowQRScanDialog] = useState(false);
  const [showDeviceDetailsDialog, setShowDeviceDetailsDialog] = useState(false);
  const [showDeviceDetailsDrawer, setShowDeviceDetailsDrawer] = useState(false);

  const clients = [
    { id: "twenai-trading", name: "Twenai Trading" },
    { id: "bles-software", name: "Bles Software" },
    { id: "tech-solutions", name: "Tech Solutions" },
    { id: "digital-corp", name: "Digital Corp" },
  ];

  const handleAddDeviceDetails = () => {
    console.log("Opening device details dialog for client:", selectedClient);
    onOpenChange(false); // Close the current dialog
    setShowDeviceDetailsDialog(true); // Open device details dialog (not drawer)
  };

  const handleScanQRCode = () => {
    console.log("Opening QR scanner for client:", selectedClient);
    onOpenChange(false); // Close the current dialog
    setShowQRScanDialog(true); // Open QR scan dialog
  };

  const handleQRScanSuccess = () => {
    // This is called automatically when QR scan is successful
    console.log("QR scan successful, opening device details drawer");
    setShowDeviceDetailsDrawer(true); // Open drawer only for QR scan success
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="p-6 md:max-w-[832px] sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Add New Device
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <div className="space-y-3">
              <Label
                htmlFor="client-select"
                className="text-sm font-medium text-gray-900"
              >
                Assign To Client
              </Label>
              <Select value={selectedClient} onValueChange={setSelectedClient}>
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

            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="outline" onClick={handleAddDeviceDetails}>
                Add Device Details
              </Button>
              <Button
                onClick={handleScanQRCode}
                className="bg-green-600 hover:bg-green-700"
              >
                Scan QR Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <QRScanDialog
        open={showQRScanDialog}
        onOpenChange={setShowQRScanDialog}
        clientId={selectedClient}
        onScanSuccess={handleQRScanSuccess}
      />

      {/* Dialog for manual device details entry */}
      <DeviceDetailsDialog
        open={showDeviceDetailsDialog}
        onOpenChange={setShowDeviceDetailsDialog}
        selectedClient={selectedClient}
      />

      {/* Drawer only for QR scan success */}
      <DeviceDetailsDrawer
        open={showDeviceDetailsDrawer}
        onOpenChange={setShowDeviceDetailsDrawer}
        selectedClient={selectedClient}
        isFromQRScan={true}
      />
    </>
  );
}
