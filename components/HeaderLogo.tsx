import Image from "next/image";
import { CardAction } from "./ui/card";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const HeaderLogo = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <Image src="/logo.svg" alt="Company Logo" width={106} height={33} />
      <CardAction className="w-full">
        <Button
          variant="link"
          className="text-[16px] bg-[#FBF1E4CC] font-medium rounded-xl py-2 px-6 w-full text-[#DE8D25]"
        >
          {pathname === "/verify-email"
            ? "VERIFY"
            : pathname === "/sign-up"
            ? "SIGN UP"
            : "SIGN IN"}
        </Button>
      </CardAction>
    </div>
  );
};

export default HeaderLogo;
