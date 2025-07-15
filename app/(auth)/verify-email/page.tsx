"use client";

import HeaderLogo from "@/components/HeaderLogo";
import RightImgBackground from "@/components/RightImageBg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { usePathname } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

const VerifyEmailPage = () => {
  // const pathname = usePathname();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted with data:", data);
  }
  return (
    <div className="h-screen bg-[#F0F0F0] p-4 gap-4 grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full">
        <Card className="w-full justify-between h-full p-8 bg-[#FCFCFC]">
          <CardHeader className="flex flex-col items-center">
            {/* LOGO */}
            <HeaderLogo />
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-fit px-4 my-0 mx-auto space-y-6"
              >
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-center block font-medium text-4xl text-foreground">
                        Verify Email
                      </FormLabel>
                      <FormDescription className="text-center">
                        Please enter the 6 digit code sent to your email
                      </FormDescription>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup className="w-full mt-7 flex justify-center gap-3">
                            <InputOTPSlot
                              index={0}
                              className="w-14 h-14 rounded-sm bg-[#D7F9CB99] data-[active=true]:border-[#AADFB4] data-[active=true]:ring-2 data-[active=true]:ring-[#AADFB4]"
                            />
                            <InputOTPSlot
                              index={1}
                              className="w-14 h-14 rounded-sm bg-[#D7F9CB99] data-[active=true]:border-[#AADFB4] data-[active=true]:ring-2 data-[active=true]:ring-[#AADFB4]"
                            />
                            <InputOTPSlot
                              index={2}
                              className="w-14 h-14 rounded-sm bg-[#D7F9CB99] data-[active=true]:border-[#AADFB4] data-[active=true]:ring-2 data-[active=true]:ring-[#AADFB4]"
                            />
                            <InputOTPSlot
                              index={3}
                              className="w-14 h-14 rounded-sm bg-[#D7F9CB99] data-[active=true]:border-[#AADFB4] data-[active=true]:ring-2 data-[active=true]:ring-[#AADFB4]"
                            />
                            <InputOTPSlot
                              index={4}
                              className="w-14 h-14 rounded-sm bg-[#D7F9CB99] data-[active=true]:border-[#AADFB4] data-[active=true]:ring-2 data-[active=true]:ring-[#AADFB4]"
                            />
                            <InputOTPSlot
                              index={5}
                              className="w-14 h-14 rounded-sm bg-[#D7F9CB99] data-[active=true]:border-[#AADFB4] data-[active=true]:ring-2 data-[active=true]:ring-[#AADFB4]"
                            />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col justify-center">
                  <Button
                    type="submit"
                    className="w-full py-5 bg-[#235E2F] hover:bg-[#5fa16c] border-1 border-transparent hover:border-[#AADFB4] rounded-lg"
                  >
                    Verify
                  </Button>
                  <div className="mt-2">
                    <p className="text-foreground text-sm">
                      Didn&apos;t receive any code?{" "}
                      <Link href="#" className="text-[#1459FC]">
                        Click to resend
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="w-full p-0">
            <div className="mt-12 w-full self-baseline flex justify-between">
              <Link href="#" className="text-muted-foreground font-normal">
                Privacy Policy
              </Link>
              <h3 className="text-[#DE8D25] text-xl">Fiscal Fusion</h3>
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* RIGHT COLUMN */}
      <div className="relative h-full w-full">
        {/* <div className="border-2 border-blue-500 h-[100%]"> */}
        <RightImgBackground />
        {/* </div> */}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
