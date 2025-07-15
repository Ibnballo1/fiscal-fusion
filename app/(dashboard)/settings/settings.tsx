import {
  Banknote,
  CaseUpper,
  ChevronRight,
  Clock2,
  UserCog2,
} from "lucide-react";
import Link from "next/link";

export default function Settings() {
  return (
    <div>
      {/* PLATFORM CONFIG */}
      <div className="mb-4 gap-2 flex flex-col">
        <h2 className="font-medium text-xl text-foreground">
          Platform Configuration
        </h2>
        <div className="border rounded-lg flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <div>
              <Banknote className="text-[#235E2F]" />
            </div>
            <div>
              <h3 className="text-foreground text-lg font-medium">
                Pricing Plan
              </h3>
              <p className="text-muted-foreground">Manage Your Pricing Plan</p>
            </div>
          </div>
          <Link href="settings/pricing">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>
      {/* ADMIN ROLES & PERMISSIONS */}
      <div className="mb-4 gap-2 flex flex-col">
        <h2 className="font-medium text-xl text-foreground">
          User & Role Management
        </h2>
        <div className="border rounded-lg flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <div>
              <UserCog2 style={{ color: "#235e2f" }} />
            </div>
            <div>
              <h3 className="text-foreground text-lg font-medium">
                Admin Roles & Permissions
              </h3>
              <p className="text-muted-foreground">
                Define admin roles & permissions
              </p>
            </div>
          </div>
          <Link href="/settings/user-roles">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
        <div className="border rounded-lg flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <div>
              <Clock2 style={{ color: "#235e2f" }} />
            </div>
            <div>
              <h3 className="text-foreground text-lg font-medium">
                Activity Logs
              </h3>
              <p className="text-muted-foreground">Track user activity logs</p>
            </div>
          </div>
          <Link href="/settings/activity-logs">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>
      {/* API & INTEGRATION */}
      <div className="mb-4 gap-2 flex flex-col">
        <h2 className="font-medium text-xl text-foreground">
          API & Integration
        </h2>
        <div className="border rounded-lg flex justify-between items-center p-3">
          <div className="flex items-center gap-2">
            <div>
              <CaseUpper className="text-[#235E2F]" />
            </div>
            <div>
              <h3 className="text-foreground text-lg font-medium">
                API Connection
              </h3>
              <p className="text-muted-foreground">
                Monitor API connections and settings
              </p>
            </div>
          </div>
          <Link href="/api-connection">
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </div>
  );
}
