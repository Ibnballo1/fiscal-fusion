import AuthForm from "@/components/AuthForm";
import RightImgBackground from "@/components/RightImageBg";
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
        <RightImgBackground />
        {/* </div> */}
      </div>
    </div>
  );
}
