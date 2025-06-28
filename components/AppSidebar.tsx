import {
  Banknote,
  ChevronRight,
  Headset,
  HeartPlus,
  LayoutDashboard,
  Search,
  Settings,
  ShoppingBag,
  Users2,
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
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const sidebarItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Resellers",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Clients",
    url: "#",
    icon: Users2,
  },
  {
    title: "Financials",
    url: "#",
    icon: Banknote,
  },
  {
    title: "System Health",
    url: "#",
    icon: HeartPlus,
  },
  {
    title: "Help & Support",
    url: "#",
    icon: Headset,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="">
        <Link href="/">
          <Image src="/logo.svg" width={106} height={33} alt="logo" />
        </Link>
        {/* <SidebarMenu className="flex items-center"> */}
        {/* <SidebarMenuItem className=""> */}
        {/* <Search className="absolute top-1/5 left-2" /> */}
        {/* <Search className="" /> */}
        {/* <SidebarInput placeholder="Search anything..." className="" /> */}
        {/* <Input type="search" placeholder="Search anything..." className="" /> */}
        {/* </SidebarMenuItem> */}
        {/* </SidebarMenu> */}
      </SidebarHeader>
      <SidebarContent className="flex justify-between">
        <SidebarGroup className="">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem className="" key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="pl-4 py-2 focus:font-medium"
                  >
                    <Link
                      href={item.url}
                      className="border-1 border-transparent focus:bg-[#C5EBCB]"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="border-b pb-2">
                <SidebarMenuButton
                  asChild
                  className="pl-4 py-2 focus:font-medium"
                >
                  <Link
                    href="#"
                    className="border-1 border-transparent focus:bg-[#C5EBCB]"
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
