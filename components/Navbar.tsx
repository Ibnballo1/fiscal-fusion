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

const Navbar = () => {
  return (
    <nav className="flex items-center border-b p-4 justify-between sticky top-0 bg-background z-10">
      {/* LEFT BAR */}
      <div className="flex p-0 flex-1/4 items-center">
        <SidebarTrigger />
        {/* BREADCRUMB */}
        <div className="">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="font-medium text-sm text-[#1a1a1a]"
                  href="/"
                >
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
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
