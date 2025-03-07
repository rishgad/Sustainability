import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Plus, Search, X } from "lucide-react";
import React from "react";

export default function RoomsAppliancePage() {
  // Room navigation data
  const rooms = [
    { name: "Living Room", active: false },
    { name: "Bedroom", active: false },
    { name: "Laundry Room", active: true },
    { name: "Kitchen", active: false },
    { name: "Guest Room", active: false },
  ];

  // Recommendation data
  const recommendations = [
    {
      name: "Recommended Appliance Name",
      price: "Price",
      stats: "Appliance Stats",
    },
    {
      name: "Recommended Appliance Name",
      price: "Price",
      stats: "Appliance Stats",
    },
    {
      name: "Recommended Appliance Name",
      price: "Price",
      stats: "Appliance Stats",
    },
  ];

  return (
    <div className="relative bg-white h-screen max-w-md mx-auto overflow-hidden">
      {/* Room Navigation */}
      <div className="pt-8 px-4">
        <Tabs defaultValue="Laundry Room" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {rooms.map((room) => (
              <TabsTrigger
                key={room.name}
                value={room.name}
                className={`px-4 py-2 text-[11px] font-bold ${
                  room.active ? "text-[#35200e] text-[13px]" : "text-[#958b83]"
                }`}
              >
                {room.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Your Appliances Section */}
      <div className="px-4 mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#35200e] tracking-[-0.36px]">
            Your Appliances
          </h2>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Edit className="h-5 w-5" />
          </Button>
        </div>

        {/* Main Content Area with Overlay */}
        <Card className="mt-4 relative rounded-[15px] bg-[#d9d9d9] overflow-hidden">
          <CardContent className="p-0">
            {/* Appliance Cards (Blurred in Background) */}
            <div className="space-y-4 p-4">
              {/* First Appliance */}
              <div className="h-[103px] bg-[#d9d9d9] rounded-[15px] flex items-center">
                <div className="w-[63px] h-[63px] ml-6 bg-white rounded-full"></div>
                <div className="ml-3 text-center">
                  <p className="text-white font-bold text-[15px]">
                    Appliance Name
                  </p>
                </div>
              </div>

              {/* Second Appliance */}
              <div className="h-[103px] bg-[#d9d9d9] rounded-[15px] flex items-center">
                <div className="w-[63px] h-[63px] ml-6 bg-white rounded-full"></div>
                <div className="ml-3 text-center">
                  <p className="text-white font-bold text-[15px]">
                    Appliance Name
                  </p>
                </div>
              </div>

              {/* Third Appliance */}
              <div className="h-[103px] bg-[#d9d9d9] rounded-[15px] flex items-center">
                <div className="w-[63px] h-[63px] ml-6 bg-white rounded-full"></div>
                <div className="ml-3 text-center">
                  <p className="text-white font-bold text-[15px]">
                    Appliance Name
                  </p>
                </div>
              </div>

              {/* Fourth Appliance (with plus icon) */}
              <div className="h-[103px] bg-[#d9d9d9] rounded-[15px] flex items-center justify-center">
                <Plus className="w-[39px] h-[39px] text-white" />
              </div>
            </div>

            {/* Overlay with Recommendations */}
            <div className="absolute inset-0 bg-[#d9d9d9cc] rounded-[15px] p-4">
              {/* Close Button */}
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-[26px] w-[26px] p-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Usage Section */}
              <div className="flex gap-4 mt-2">
                {/* Your Usage */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-black text-center mb-2">
                    Your Usage
                  </p>
                  <Card className="h-[137px] rounded-[18px]">
                    <CardContent className="p-4"></CardContent>
                  </Card>
                </div>

                {/* Average Usage */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-black text-center mb-2">
                    Average Usage
                  </p>
                  <Card className="h-[137px] rounded-[18px]">
                    <CardContent className="p-4"></CardContent>
                  </Card>
                </div>
              </div>

              {/* Recommendations Section */}
              <div className="mt-6">
                <p className="text-sm font-bold text-black mb-2">
                  Recommendations
                </p>

                <div className="space-y-3">
                  {recommendations.map((recommendation, index) => (
                    <Card key={index} className="rounded-[18px]">
                      <CardContent className="p-4 flex items-center">
                        <div className="w-[61px] h-[61px] bg-[#d9d9d9] rounded-full mr-4"></div>
                        <div className="flex-1">
                          <p className="text-[11px] font-bold text-black text-center mb-2">
                            {recommendation.name}
                          </p>
                          <div className="flex justify-between">
                            <p className="text-[11px] font-bold text-black text-center">
                              {recommendation.price}
                            </p>
                            <p className="text-[11px] font-bold text-black text-center">
                              {recommendation.stats}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Button */}
      <div className="absolute top-[49px] right-[20px]">
        <Button
          variant="ghost"
          size="icon"
          className="h-[26px] w-[26px] bg-[#d9d9d9] rounded-lg"
        >
          <Search className="h-[15px] w-[15px]" />
        </Button>
      </div>
    </div>
  );
}
