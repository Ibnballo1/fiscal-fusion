"use client";

import EmailAuth from "@/app/features/EmailAuth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
// import { Separator } from "./separator";
import { Checkbox } from "./checkbox";
import Link from "next/link";
import PassWordVisibility from "../PwdVisibilty";
import { useState } from "react";

export default function AuthForm() {
  const [pwdInputType, setPwdInputType] = useState("password");
  return (
    <Card className="w-full h-full p-8 bg-[#FCFCFC]">
      <CardHeader className="flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4">
          <Image src="/logo.png" alt="Company Logo" width={106} height={33} />
          <CardAction className="w-full">
            <Button
              variant="link"
              className="text-[16px] bg-[#FBF1E4CC] font-medium rounded-xl py-2 px-6 w-full text-[#DE8D25]"
            >
              SIGN UP
            </Button>
          </CardAction>
        </div>
        <CardTitle>
          <h1 className="text-4xl font-medium text-[#1A1A1A]">Welcome!</h1>
        </CardTitle>
        <CardDescription className="font-normal text-muted-foreground text-center">
          Welcome to Fiscal Fusion! Sign up with your email to get started with
          Fiscal Fusion
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* EMAIL SIGN_UP / SIGN_IN */}
        <EmailAuth />
        {/* SEPERATOR */}
        <div className="flex items-center justify-center mb-6">
          {/* <Separator className="my-4 bg-[#e3e3e3]" /> */}
          <span className="border-t border-[#333333] w-[45%]"></span>
          <span className="font-medium text-base text-[#333333] mx-1">Or</span>
          <span className="border-t border-[#333333] w-[45%]"></span>
        </div>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                // className="!bg-white border-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative flex">
                <Input
                  id="password"
                  type={pwdInputType}
                  placeholder="Min. 8 characters"
                  required
                />
                <div className="absolute right-1 top-1/2 -translate-y-1/2">
                  <PassWordVisibility setPwdInputType={setPwdInputType} />
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Checkbox id="terms" defaultChecked />
                <Label htmlFor="terms" className="font-normal text-base">
                  I agree to the{" "}
                  <Link href="#" className="underline text-blue-500">
                    Terms & Privacy
                  </Link>
                </Label>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-[#235E2F]">
          Sign Up
        </Button>

        <div className="self-start mt-2">
          <span>
            Have and account?{" "}
            <Link href="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </span>
        </div>
      </CardFooter>
      <div className="mt-12 w-full self-baseline flex justify-between">
        <Link href="#" className="text-[#656565] font-normal">
          Privacy Policy
        </Link>
        <h3 className="text-[#DE8D25] text-xl">Fiscal Fusion</h3>
      </div>
    </Card>
  );
}
