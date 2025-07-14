import DatePickerPage from "@/app/features/date-picker/DatePicker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Banknote,
  Calendar,
  CircleDollarSign,
  ComputerIcon,
  CreditCardIcon,
  Crown,
  PenLine,
  ShoppingBag,
  Users2,
} from "lucide-react";
import Image from "next/image";

const ResellerPage = () => {
  const payment = [
    {
      type: "Commission",
      means: "Using commission plan rate",
      icon: "/affiliate.png",
    },
    {
      type: "Earned",
      means: "$150",
      icon: "/dollar-circle.png",
    },
    {
      type: "Payout",
      means: "Bank",
      icon: "/bank.png",
    },
  ];

  const cardList = [
    {
      title: "Revenue",
      icon: <CircleDollarSign />,
      value: "$3,400",
      // description: "Card Description",
      footer: "+15%",
    },
    {
      title: "Device",
      icon: <ComputerIcon />,
      value: "28",
      // description: "Card Description",
      footer: "+15%",
    },
    {
      title: "Clients",
      icon: <Users2 />,
      value: "186",
      // description: "Card Description",
      footer: "+15%",
    },
    {
      title: "Payments",
      icon: <CreditCardIcon />,
      value: "$14,000",
      // description: "Card Description",
      footer: "+15%",
    },
  ];

  return (
    <div className="px-5">
      <div>
        <div className="flex justify-between mb-4">
          <div className="flex items-baseline-last gap-4">
            <div className="relative w-fit">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/cp.png" alt="cp logo" />

                <AvatarFallback className="text-gray-700 font-semibold text-lg bg-transparent">
                  CP
                </AvatarFallback>
              </Avatar>
              <Image
                src="/gold.png"
                width="20"
                height="20"
                alt="gold medal"
                className="absolute bottom-0 right-0 w-6 h-6 z-10"
              />
            </div>
            <div className="">
              <p className="text-[#235E2F]">#1</p>
              <h3 className="leading-5 text-foreground text-xl">
                CloudSync Partners
              </h3>
              <p className="text-muted-foreground text-sm">
                Cloudsync@sample.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Button
              className="border-2 border-transparent font-semibold hover:border-[#FEBCC2]"
              variant="destructive"
            >
              Delete Reseller
            </Button>
            <div className="flex items-baseline-last gap-2">
              <Calendar className="w-4 h-4" />
              <p className="text-muted-foreground text-xs">
                Date Joined:
                <span className="text-foreground"> 10th of June, 2025</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end px-16 gap-6 mb-4">
          {payment.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-1 pr-4 border rounded-4xl"
            >
              <div className="border-2 border-[#F2F2F2] rounded-full p-1">
                <Image
                  src={item.icon}
                  alt={`${item.type} icon`}
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex flex-col items-start pl-2">
                <span className="text-muted-foreground text-xs">
                  {item.type}
                </span>
                <span className="text-foreground text-sm">{item.means}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4 flex justify-between border-b pb-3 gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-xl text-foreground">Earnings</h2>
            <div className="flex gap-4">
              <div className="border rounded-lg p-4 pr-12 space-y-6 ">
                <h4 className="text-muted-foreground text-xs">
                  Total Earnings
                </h4>
                <div>
                  <p className="text-xl font-medium text-foreground">
                    $350{" "}
                    <span className="text-muted-foreground text-xs">Paid</span>
                  </p>
                  <p className="text-[#1FC16B] text-xs">
                    +150
                    <span className="text-muted-foreground"> pending</span>
                  </p>
                </div>
              </div>
              <div className="border rounded-lg p-4 pr-12 space-y-6 ">
                <h4 className="text-muted-foreground text-xs">
                  Revenue Generated
                </h4>
                <div>
                  <p className="text-xl font-medium text-foreground">
                    $350{" "}
                    <span className="text-muted-foreground text-xs">Gross</span>
                  </p>
                  <p className="text-[#1FC16B] text-xs">
                    +150
                    <span className="text-muted-foreground"> net</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-medium text-xl text-foreground mb-1.5">
              Customer Tier
            </h2>
            <div className="rounded-lg p-4 bg-[#FFF5C2]">
              {/* top */}
              <div className="flex justify-between border-b border-[#FFE766] pb-1 mb-1">
                {/* left */}
                <div className="flex gap-2">
                  <div className="bg-[#FFD700] p-2 h-fit rounded-sm">
                    <Crown size={24} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-4">
                      <p className="text-muted-foreground text-sm">Tier 1</p>
                      <p className="text-[10px] text-[#1459FC] rounded-lg bg-[#E2EAFF] px-2 py-1">
                        Default
                      </p>
                    </div>
                    <h4 className="font-medium text-foreground">Gold Tier</h4>
                  </div>
                </div>
                <div>
                  <Separator
                    orientation="vertical"
                    className="border border-[#FFE766]"
                  />
                </div>
                {/* right */}
                <div>
                  <p className="text-muted-foreground text-sm">
                    Affiliates on this tier
                  </p>
                  <h4 className="text-foreground font-medium">21</h4>
                </div>
              </div>
              {/* bottom */}
              <div>
                <p className="text-muted-foreground text-sm">
                  Upgrade Requirements
                </p>
                <ul className="list-disc pl-4 text-foreground text-sm">
                  <li>Minimum of 20 Clients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-xl p-3 mb-4">
        {/* top */}
        <div className="flex justify-between items-center mb-4">
          {/* left */}
          <div>
            <h3>Reseller Summary</h3>
          </div>
          {/* right */}
          <div>
            <DatePickerPage />
          </div>
        </div>
        {/* bottom */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cardList.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm flex gap-1 items-center">
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
                  <span className="text-[#1FC16B]">{card.footer}</span> vs last
                  month
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Separator />
      <div className="border rounded-xl p-3 my-4">
        {/* top */}
        <div className="flex justify-between items-center mb-5">
          {/* left */}
          <div>
            <h3 className="font-medium text-foreground text-lg">
              Affiliate Payout Details
            </h3>
          </div>
          {/* right */}
          <div>
            <Button className="bg-[#235E2F]">
              <PenLine />
              <span className="text-[#FCFCFC]">Edit Payout Details</span>
            </Button>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-col gap-4">
          {/* above */}
          <div className="flex gap-2">
            <Image src="/bank2.png" width={20} height={20} alt="Bank" />
            <span className="text-foreground text-sm">
              Bank Account Details
            </span>
          </div>
          {/* below */}
          <div className="flex gap-2 justify-between">
            <div>
              <h4 className="text-sm text-muted-foreground">Bank Country</h4>
              <p className="text-[1a1a1a]">Zimbabwe</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground">Bank Name</h4>
              <p className="text-[1a1a1a]">Bank of Zimbabwe</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground">
                Bank Account Number
              </h4>
              <p className="text-[1a1a1a]">8732742434</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground">Branch Code</h4>
              <p className="text-[1a1a1a]">BoZ 32</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerPage;
