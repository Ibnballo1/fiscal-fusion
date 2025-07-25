import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ClientProfile() {
  return (
    <Card className="relative">
      <CardHeader className="pb-4">
        <Badge className="absolute top-4 right-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
          Premium
        </Badge>
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/placeholder.svg?height=64&width=64"
              alt="Bles Software"
            />
            <AvatarFallback className="bg-orange-100 text-orange-700 text-lg font-semibold">
              BS
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-bold">Bles Software</h2>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid gap-3 text-sm">
          <div>
            <span className="font-medium text-muted-foreground">
              Username:{" "}
            </span>
            <span>Blessoftware</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">
              Monthly Revenue:{" "}
            </span>
            <span className="font-semibold">$40,000</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">
              Outstanding Invoices:{" "}
            </span>
            <span>4</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Email: </span>
            <span>Blessoftware@gmail.com</span>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">
              Account Status:{" "}
            </span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
