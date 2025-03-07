import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Plus, PlusCircle } from "lucide-react";
import React from "react";

// Define room data for the tabs
const rooms = [
  { id: "living-room", name: "Living Room" },
  { id: "bedroom", name: "Bedroom" },
  { id: "laundry-room", name: "Laundry Room" },
  { id: "kitchen", name: "Kitchen" },
  { id: "guest-room", name: "Guest Room" },
];

// Define appliance data
const appliances = [
  { id: 1, name: "Appliance Name" },
  { id: 2, name: "Appliance Name" },
  { id: 3, name: "Appliance Name" },
];

export default function RoomsAppliancePage() {
  return (
    <div className="relative bg-white h-screen max-w-md mx-auto p-4 overflow-hidden">
      {/* Top right add button */}
      <div className="absolute top-12 right-4 z-10">
        <Button
          size="icon"
          variant="outline"
          className="rounded-lg bg-[#d9d9d9] h-[26px] w-[26px] p-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Room tabs */}
      <Tabs defaultValue="laundry-room" className="mt-12">
        <TabsList className="w-full justify-between bg-transparent">
          {rooms.map((room) => (
            <TabsTrigger
              key={room.id}
              value={room.id}
              className={`px-2 py-1 text-[11px] font-bold tracking-tight ${
                room.id === "laundry-room"
                  ? "text-[#35200e] text-[13px]"
                  : "text-[#958b83]"
              }`}
              style={{ fontFamily: "DM_Sans-Bold, Helvetica" }}
            >
              {room.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Appliances section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-lg font-bold text-[#35200e] tracking-tight"
            style={{ fontFamily: "DM_Sans-Bold, Helvetica" }}
          >
            Your Appliances
          </h2>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Edit className="h-6 w-6" />
          </Button>
        </div>

        {/* Appliance cards */}
        <div className="space-y-4">
          {appliances.map((appliance) => (
            <Card
              key={appliance.id}
              className="bg-[#d9d9d9] rounded-[15px] border-0"
            >
              <CardContent className="p-5 flex items-center">
                <div className="w-[63px] h-[63px] bg-white rounded-full mr-4"></div>
                <h3
                  className="text-[15px] font-bold text-white tracking-tight"
                  style={{ fontFamily: "DM_Sans-Bold, Helvetica" }}
                >
                  {appliance.name}
                </h3>
              </CardContent>
            </Card>
          ))}

          {/* Add new appliance card */}
          <Card className="bg-[#d9d9d9] rounded-[15px] border-0">
            <CardContent className="p-5 flex justify-center items-center h-[103px]">
              <PlusCircle className="w-[39px] h-[39px] text-white" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
