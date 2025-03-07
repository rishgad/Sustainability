import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

export default function AllDone() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white p-12 py-16">
      <div className="space-y-16">
        <h1 className="font-bold text-[#35200e] text-[50px] tracking-[-1.00px] leading-[58.0px] text-center max-w-[286px] mx-auto">
          Your done setting up your Profile!
        </h1>

        <div className="flex flex-col items-center gap-10">
          <div className="bg-gray-200 rounded-full p-2">
            <Check className="w-[39px] h-[39px] text-black" />
          </div>

          <Avatar className="w-[185px] h-[185px]">
            <AvatarFallback className="bg-[#d9d9d9]"></AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Button className="w-full max-w-[297px] h-[58px] bg-[#d9d9d9] hover:bg-[#c9c9c9] rounded-[30px] text-black font-bold text-lg tracking-[-0.36px]">
        Tap for Dashboard
      </Button>
    </div>
  );
}
