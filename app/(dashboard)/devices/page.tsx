import { DeviceDataTable } from "@/components/DeviceDataTable";
import { DeviceStatsCards } from "@/components/DeviceStatCard";

export default function DevicesPage() {
  return (
    <div className="px-6">
      <DeviceStatsCards />
      <DeviceDataTable />
    </div>
  );
}
