"use client";

import { useState } from "react";
import { CommissionStats } from "@/components/CommissionStats";
import { PerformanceOverview } from "@/components/PerformanceOverview";
import { CommissionHistory } from "@/components/CommissionHistory";
import { TierProgress } from "@/components/TierProgress";
import { PayoutHistory } from "@/components/PayoutHistory";

export default function CommissionsPage() {
  return (
    <div className="mt-6 p-6">
      <CommissionStats />
      <PerformanceOverview />
      <CommissionHistory />
      <TierProgress />
      <PayoutHistory />
    </div>
  );
}
