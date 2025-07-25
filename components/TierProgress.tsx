"use client";

export function TierProgress() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Tier Progress
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Current Tier</span>
          <span className="text-sm font-medium text-gray-900">Silver</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Progress to Gold</span>
            <span className="text-sm font-medium text-gray-900">34%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "34%" }}
            ></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-800">
                Next Tier Reward
              </p>
              <p className="text-xs text-orange-600">34 commissions left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
