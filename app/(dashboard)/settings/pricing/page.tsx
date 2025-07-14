import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PricingPage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="font-medium text-xl text-foreground">Pricing Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col mb-4 gap-1">
          <Label htmlFor="planName" className="text-foreground">
            Basic Tier Fee(%)
          </Label>
          <Input id="planName" placeholder="Enter Basic Tier Fee" />
        </div>
        <div className="flex flex-col mb-4 gap-1">
          <Label htmlFor="planName" className="text-foreground">
            Premium Fee(%)
          </Label>
          <Input id="planName" placeholder="Enter Basic Tier Fee" />
        </div>
        <div className="flex flex-col mb-4 gap-1">
          <Label htmlFor="planName" className="text-foreground">
            Enterprise Fee(%)
          </Label>
          <Input id="planName" placeholder="Enter Basic Tier Fee" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button className="bg-[#235E2F]">Save Configuration</Button>
      </div>
    </div>
  );
}
