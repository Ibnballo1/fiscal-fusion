import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmailAuth = () => {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {/* GMAIL BUTTON */}
      <Button variant="outline" className="w-full py-2.5 px-4">
        <Image
          src="/devicon_google.png"
          width={18}
          height={18}
          alt="google icon"
        />
        <span className="text-sm font-medium text-[#1A1A1A]">
          Sign up with Google
        </span>
      </Button>
      {/* APPLE BUTTON */}
      {/* <Button variant="outline" className="py-2.5 px-4">
        <Image
          src="/ri_apple-fill.png"
          width={20}
          height={20}
          alt="google icon"
        />
        <span className="text-sm font-medium text-[#1A1A1A]">
          Sign up with Apple
        </span>
      </Button> */}
    </div>
  );
};

export default EmailAuth;
