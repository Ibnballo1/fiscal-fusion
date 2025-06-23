"use client";

import { Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

type PassWordVisibilityProps = {
  setPwdInputType: (type: "password" | "text") => void;
};

const PassWordVisibility = ({ setPwdInputType }: PassWordVisibilityProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev);
    setPwdInputType(isVisible ? "password" : "text");
  };
  return (
    <Button
      type="button"
      // variant="ghost"
      className="border-none bg-inherit text-black p-0 m-0 shadow-none hover:bg-transparent"
      onClick={handleToggleVisibility}
    >
      {isVisible ? <EyeOff /> : <Eye />}
    </Button>
  );
};

export default PassWordVisibility;
