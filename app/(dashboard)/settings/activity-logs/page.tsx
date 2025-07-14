import { Button } from "@/components/ui/button";

export default function ActivityLogs() {
  return (
    <div className="p-4 rounded-lg h-11/12 flex flex-col justify-between">
      <div>
        <h3 className="mb-2 text-lg font-medium text-foreground">
          Activity Logs
        </h3>
        <div className="pb-2 mb-4 flex justify-between items-center border-b">
          <p className="text-foreground text-sm">VAT rate updated to 15%</p>
        </div>
        <div className="pb-2 mb-4 flex justify-between items-center border-b">
          <p className="text-foreground text-sm">
            New user role created: Auditor
          </p>
        </div>
        <div className="pb-2 mb-4 flex justify-between items-center border-b">
          <p className="text-foreground text-sm">
            ZIMRA API connection restored
          </p>
        </div>
      </div>

      <Button type="submit" className="mt-4 self-end">
        Save Configuration
      </Button>
    </div>
  );
}
