import Image from "next/image";
import AuthForm from "@/components/ui/AuthForm";
export default function SignInPage() {
  return (
    <div className="h-screen bg-[#F0F0F0] p-4 gap-4 grid grid-cols-1 lg:grid-cols-2">
      {/* SIGNIN FORM */}
      <div className="h-full">
        <AuthForm />
      </div>
      {/* RIGHT COLUMN */}
      <div className="relative h-full w-full">
        {/* <div className="border-2 border-blue-500 h-[100%]"> */}
        <Image
          src="/frame2.png"
          alt="Background Image"
          // width={500}
          // height={500}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // style={{ objectFit: "contain" }}
          // className="object-contain"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
