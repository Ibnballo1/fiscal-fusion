"use client";
import {
  ChevronRight,
  CreditCard,
  Headset,
  LayoutDashboard,
  Receipt,
  Search,
  Settings,
  Users2,
  Wand2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";

const sidebarItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Clients",
    url: "/clients",
    icon: Users2,
  },
  {
    title: "Devices",
    url: "/devices",
    icon: Receipt,
  },
  {
    title: "Commissions",
    url: "/commissions",
    icon: Wand2,
  },
  {
    title: "Billing & Invoices",
    url: "/billing",
    icon: CreditCard,
  },
  {
    title: "Help & Support",
    url: "/supports",
    icon: Headset,
  },
];

const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="">
        <Link href="/">
          <Image src="/logo.svg" width={106} height={33} alt="logo" />
        </Link>
        <SidebarMenu className="mt-3">
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-11/12 pl-2 pr-2 data-[collapsed=true]:justify-center"
            >
              <div className="flex items-center w-11/12 gap-2 border p-1">
                <Search className="h-4 w-4 text-muted-foreground" />
                <SidebarInput
                  placeholder="Search..."
                  className="[&_input]:!border-none [&_input]:!ring-0 [&_input]:!outline-none data-[state=open]:!ring-0 !bg-transparent !outline-none focus:!outline-none !ring-0 focus:!ring-0 border-none focus:border-none !focus:ring-0 outline-0 !focus:border-0 !focus:outline-none !p-0 !text-sm data-[collapsible=icon]:hidden"
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex justify-between">
        <SidebarGroup className="">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item, index) => {
                const isActive =
                  pathname === item.url || pathname.startsWith(item.url + "/");

                return (
                  <SidebarMenuItem key={item.title}>
                    {index === sidebarItems.length - 1 && (
                      <Separator className="mb-3 border-b-1" />
                    )}
                    <SidebarMenuButton
                      asChild
                      className={`pl-4 hover:bg-muted hover:text-foreground transition-colors py-2 focus:font-medium text-muted-foreground relative ${
                        isActive && "bg-[#C5EBCB]/90 text-primary"
                      }`}
                    >
                      <Link
                        href={item.url}
                        className="border-1 border-transparent"
                        title={item.title}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="border-b">
                <SidebarMenuButton
                  asChild
                  className="pl-4 py-2 focus:font-medium"
                >
                  <Link
                    href="/settings"
                    className={`border-1 mb-4 border-transparent focus:bg-[#C5EBCB] text-muted-foreground ${
                      pathname.startsWith("/settings") &&
                      "bg-[#C5EBCB] text-primary"
                    }`}
                  >
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="w-[235px]">
                  <Avatar className="absolute left-0 top-1/6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="ml-8 flex items-center justify-between">
                    <div className="">
                      <p className="font-medium">Username</p>
                      <span className="font-normal text-[13px]">
                        belloabdullateef@gmail.com
                      </span>
                    </div>
                    <div className="w-[20px] h-[20px]">
                      <ChevronRight className="w-6 h-6 ml-auto" />
                    </div>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
