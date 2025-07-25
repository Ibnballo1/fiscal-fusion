import { ClientProfile } from "@/components/ClientProfile";
import { SessionsByDevice } from "@/components/SessionsByDevice";
import { PerformanceOverview } from "@/components/PerformanceOverview";
import { AlertsSummary } from "@/components/AlertsSummary";
import { TransactionHistory } from "@/components/TransactionHistory";

export default function ClientPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Row */}
        <ClientProfile />
        <SessionsByDevice />

        {/* Bottom Row */}
        <div className="lg:col-span-2">
          <PerformanceOverview />
        </div>

        <div className="lg:col-span-2">
          <AlertsSummary />
        </div>

        <div className="lg:col-span-2">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
