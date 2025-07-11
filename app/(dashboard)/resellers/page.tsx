import OnboardWorkFlow from "@/components/OnboardingWorkflow";
import ResellerLogPage from "@/components/ResellerLogs";
import ResellerPerformanceAnalytics from "@/components/ResellerPerformanceAnalytics";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Banknote, Download, Power, ShoppingBag, Users2 } from "lucide-react";

const Reseller = () => {
  const cardList = [
    {
      title: "Total Resellers",
      icon: <ShoppingBag />,
      value: "346",
      // description: "Card Description",
      footer: "+15%",
    },
    {
      title: "Outstanding",
      icon: <ShoppingBag />,
      value: "$1,218",
      // description: "Card Description",
      footer: "+15%",
    },
    {
      title: "Total Paid",
      icon: <Users2 />,
      value: "$50,500",
      // description: "Card Description",
      footer: "+15%",
    },
    {
      title: "Total Owed",
      icon: <Banknote />,
      value: "$14,000",
      // description: "Card Description",
      footer: "+15%",
    },
  ];

  const tableData = [
    {
      message: "Payment processing delay for INV-29182",
      alertType: "warning",
      alertColor: "#AE8C00",
      time: "2m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "Fraud Flag",
      alertColor: "#ED0519",
      time: "3m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "warning",
      alertColor: "#AE8C00",
      time: "8m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "warning",
      alertColor: "#AE8C00",
      time: "10m ago",
    },
    {
      message: "Payment processing delay for INV-29182",
      alertType: "Fraud Flag",
      alertColor: "#ED0519",
      time: "31m ago",
    },
  ];

  return (
    <div className="">
      {/* TAB */}
      <div className="">
        <Tabs defaultValue="reseller-directory" className="p-3 w-full">
          <div className="border-b h-fit mb-3">
            <TabsList className="!bg-inherit items-baseline-last !rounded-none">
              <TabsTrigger value="reseller-directory" className="font-medium">
                Reseller Directory
              </TabsTrigger>
              <TabsTrigger value="performance-analytics">
                Performance Analytics
              </TabsTrigger>
              <TabsTrigger value="onboarding-workflow">
                Onboarding Workflow
              </TabsTrigger>
            </TabsList>
          </div>
          {/* FIRST TAB */}
          <TabsContent value="reseller-directory">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              {cardList.map((card, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex gap-2 items-center">
                      {card.icon}
                      <span>{card.title}</span>
                    </CardTitle>
                    {/* <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction> */}
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-[22px]">{card.value}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-medium text-xs">
                      <span className="text-[#1FC16B]">{card.footer}</span> vs
                      last month
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* DATA TABLE */}
            <div className="border pt-4 rounded-lg">
              <div className="flex justify-between items-center mb-4 px-4">
                <h3 className="font-medium">Reseller Directory</h3>
                <Button className="bg-[#235E2F]">
                  <Download className="h-4 w-4" />
                  <span>Download CSV</span>
                </Button>
              </div>
              <div>
                <ResellerLogPage />
              </div>
            </div>
          </TabsContent>
          {/* SECOND TAB */}
          <TabsContent value="performance-analytics">
            <ResellerPerformanceAnalytics />
          </TabsContent>
          <TabsContent value="onboarding-workflow">
            <OnboardWorkFlow />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Reseller;
