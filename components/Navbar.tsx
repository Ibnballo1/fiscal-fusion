"use client";

import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import AddResellerForm from "./AddResellerForm";
import React from "react";

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Navbar = () => {
  const pathname = usePathname();

  // Remove query params and split path into segments
  const segments = pathname.split("/").filter(Boolean); // Remove empty strings

  // Create array of breadcrumb data with full paths
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { name: capitalize(segment.replace(/-/g, " ")), href };
  });

  return (
    <nav className="flex items-center border-b p-4 justify-between sticky top-0 bg-background z-10">
      {/* LEFT BAR */}
      <div className="flex items-center gap-4 flex-1/4">
        <SidebarTrigger />

        {/* BREADCRUMB */}
        <Breadcrumb>
          <BreadcrumbList>
            {/* Always show 'Dashboard' as first item */}
            <BreadcrumbItem>
              <BreadcrumbLink className="text-sm" href="/">
                Dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumbs.length > 0 && <BreadcrumbSeparator />}

            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                <BreadcrumbItem>
                  {index === breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink className="text-sm" href={crumb.href}>
                      {crumb.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* RIGHT BAR */}
      <div className="flex items-center gap-4 justify-end flex-1/2">
        <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
        <Button variant="outline">Broadcast Announcement</Button>
        <Button variant="outline">Run System Audit</Button>
        <AddResellerForm />
      </div>
    </nav>
  );
};

export default Navbar;
