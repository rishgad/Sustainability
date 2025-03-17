import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { PlusIcon } from "lucide-react";
import React from "react";

export default function SetUpHome() {
  // Room data for mapping
  const rooms = [
    {
      name: "<Room Name>",
      appliances: ["<Appliance Name>", "<Appliance Name>", "<Appliance Name>"],
    },
    {
      name: "<Room Name>",
      appliances: ["<Appliance Name>", "<Appliance Name>"],
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md mx-auto">
        <h1 className="mt-12 mb-8 font-bold text-[#35200e] text-[35px] leading-[40.6px] tracking-[-0.70px]">
          Set up your <br />
          Home!
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Add Room Card */}
          <Card className="bg-[#d9d9d9] border-0 rounded-[15px] h-40 flex items-center justify-center">
            <CardContent className="p-0 flex items-center justify-center h-full w-full">
              <PlusIcon className="w-10 h-10 text-[#35200e]" />
            </CardContent>
          </Card>

          {/* First Room Card */}
          <Card className="bg-[#d9d9d9] border-0 rounded-[15px] h-40">
            <CardContent className="p-3">
              <h3 className="font-bold text-[#35200e] text-[15px] tracking-[-0.30px] leading-[17.4px] mb-4">
                {rooms[0].name}
              </h3>
              <ul className="space-y-1">
                {rooms[0].appliances.map((appliance, index) => (
                  <li
                    key={index}
                    className="font-bold text-black text-xs tracking-[-0.24px] leading-[13.9px]"
                  >
                    {appliance}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Second Room Card */}
        <div className="mb-32">
          <Card className="bg-[#d9d9d9] border-0 rounded-[15px] h-40 w-[137px]">
            <CardContent className="p-3">
              <h3 className="font-bold text-[#35200e] text-[15px] tracking-[-0.30px] leading-[17.4px] mb-4">
                {rooms[1].name}
              </h3>
              <ul className="space-y-1">
                {rooms[1].appliances.map((appliance, index) => (
                  <li
                    key={index}
                    className="font-bold text-black text-xs tracking-[-0.24px] leading-[13.9px]"
                  >
                    {appliance}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        <Button className="w-full h-[58px] bg-[#d9d9d9] text-black hover:bg-[#c9c9c9] rounded-[30px] font-bold text-lg tracking-[-0.36px]">
          Continue
        </Button>
      </div>
    </main>
  );
}
