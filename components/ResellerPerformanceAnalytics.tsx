import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ClientCountChart from "./ClientCountChart";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { BriefcaseBusiness, ShieldCheckIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import ResellerPage from "@/app/(dashboard)/resellers/[reseller]/page";

export default function ResellerPerformanceAnalytics() {
  const topCompanies = [
    {
      name: "TechFlow Solutions",
      email: "Techflowsolutions@sample.com",
      avatar: {
        src: "/ts.png",
        alt: "Reseller Avatar",
      },
      imgSrc: "/silver.png",
      clients: "125",
      // description: "Card Description",
      footer: ["15,000", "96"],
    },
    {
      name: "TechFlow Solutions",
      email: "Techflowsolutions@sample.com",
      avatar: {
        src: "/cp.png",
        alt: "Reseller Avatar",
      },
      imgSrc: "/gold.png",
      clients: "125",
      // description: "Card Description",
      footer: ["15,000", "96"],
    },
    {
      name: "TechFlow Solutions",
      email: "Techflowsolutions@sample.com",
      avatar: {
        src: "/ns.png",
        alt: "Reseller Avatar",
      },
      imgSrc: "/bronze.png",
      clients: "125",
      // description: "Card Description",
      footer: ["15,000", "96"],
    },
  ];

  const rankedCompanies = [
    {
      position: "4th",
      initials: "DB",
      name: "Digital Bridge Co",
      email: "Digitalbridge@sample.com",
      clients: 58,
      percentage: 96,
      revenue: 15000,
      bgColor: "bg-green-200",
    },
    {
      position: "5th",
      initials: "CR",
      name: "Cornerstone Resellers",
      email: "Cornerstone@sample.com",
      clients: 56,
      percentage: 91,
      revenue: 14000,
      bgColor: "bg-orange-200",
    },
    {
      position: "6th",
      initials: "RE",
      name: "Royal Everything & Co",
      email: "Cornerstone@sample.com",
      clients: 42,
      percentage: 85,
      revenue: 12000,
      bgColor: "bg-green-200",
    },
    {
      position: "7th",
      initials: "DB",
      name: "Digital Bridge Co",
      email: "Digitalbridge@sample.com",
      clients: 58,
      percentage: 96,
      revenue: 15000,
      bgColor: "bg-green-200",
    },
    {
      position: "8th",
      initials: "CR",
      name: "Cornerstone Resellers",
      email: "Cornerstone@sample.com",
      clients: 56,
      percentage: 91,
      revenue: 14000,
      bgColor: "bg-orange-200",
    },
    {
      position: "9th",
      initials: "RE",
      name: "Royal Everything & Co",
      email: "Cornerstone@sample.com",
      clients: 42,
      percentage: 85,
      revenue: 12000,
      bgColor: "bg-orange-200",
    },
    {
      position: "10th",
      initials: "CR",
      name: "Cornerstone Resellers",
      email: "Cornerstone@sample.com",
      clients: 56,
      percentage: 91,
      revenue: 14000,
      bgColor: "bg-orange-200",
    },
  ];

  return (
    <div className="">
      <h1 className="text-xl font-medium mb-3 text-gray-900">Leaderboard</h1>

      {/* Top 3 Companies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {topCompanies.map((company, index) => (
          <Card key={index} className="bg-white border-1 shadow-md pb-0">
            <CardContent className="text-center">
              <Sheet>
                <SheetTrigger>
                  <div className="relative w-fit mx-auto mb-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src={company.avatar.src}
                        alt={company.avatar.alt}
                      />

                      <AvatarFallback className="text-gray-700 font-semibold text-lg bg-transparent">
                        TS
                      </AvatarFallback>
                    </Avatar>
                    <Image
                      src={company.imgSrc}
                      width="20"
                      height="20"
                      alt="gold medal"
                      className="absolute bottom-0 right-0 w-6 h-6 z-10"
                    />
                  </div>

                  <h3 className="font-medium text-xl text-gray-900">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{company.email}</p>
                  <Badge
                    variant="secondary"
                    className="bg-[#FBF1E4] text-[#DE8D25] rounded-full hover:bg-orange-100 "
                  >
                    {company.clients} Clients
                  </Badge>
                </SheetTrigger>
                <SheetContent className="overflow-y-scroll w-1/2 !max-w-10/12">
                  <SheetHeader className="border-b">
                    <SheetTitle>Reseller&apos;s Dashboard Overview</SheetTitle>
                  </SheetHeader>
                  <ResellerPage />
                </SheetContent>
              </Sheet>
            </CardContent>
            <CardFooter className="text-sm justify-around text-gray-500 !py-0 border-t">
              <p className="font-medium py-4 flex gap-1">
                <BriefcaseBusiness className="w-5 h-5" /> ${company.footer[0]}
              </p>
              <Separator orientation="vertical" className="h-6 mx-2" />
              <p className="font-medium py-4 flex gap-1">
                <ShieldCheckIcon className="w-5 h-5" /> %{company.footer[1]}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Ranked List */}
      <div className="space-y-4">
        {rankedCompanies.map((company, index) => (
          <Card key={index} className="bg-white border shadow-sm">
            <CardContent className="items-center">
              <div className="flex items-center justify-between">
                <div className="flex flex-1/3 items-center space-x-4">
                  <span className="text-sm text-gray-500 w-8">
                    {company.position}
                  </span>
                  <Avatar className={`w-10 h-10 ${company.bgColor}`}>
                    <AvatarFallback className="text-gray-700 font-semibold bg-transparent">
                      {company.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {company.name}
                    </h4>
                    <p className="text-sm text-gray-500">{company.email}</p>
                  </div>
                </div>
                <div className="flex items-center flex-1/2 justify-between space-x-6">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-600 hover:bg-orange-100"
                  >
                    {company.clients} Clients
                  </Badge>
                  <div className="flex items-center text-sm text-gray-600 gap-1">
                    <ShieldCheckIcon className="w-5 h-5" /> {company.percentage}
                    %
                  </div>
                  <div className="flex items-center text-sm text-gray-600 gap-1">
                    <BriefcaseBusiness className="w-5 h-5" /> $
                    {company.revenue.toLocaleString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Clients Count Chart */}
      <div className="mt-4">
        <ClientCountChart />
      </div>
    </div>
  );
}
