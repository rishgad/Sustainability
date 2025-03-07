import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function WeeksSummary() {
  // Data for activity items
  const activityItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  // Data for the bar chart
  const weekdayData = [
    { day: "Sun", height: 70 },
    { day: "Mon", height: 48 },
    { day: "Tue", height: 120 },
    { day: "Wed", height: 153 },
    { day: "Thur", height: 60 },
    { day: "Fri", height: 107 },
    { day: "Sat", height: 107 },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-[393px] min-h-[852px] bg-white mx-auto p-9 gap-10">
      {/* Week selector */}
      <div className="self-start mt-[50px]">
        <Select defaultValue="this-week">
          <SelectTrigger className="w-[133px] h-[43px] bg-[#d9d9d9] rounded-[25px] border-none font-bold text-[#35200e] text-[13px]">
            <SelectValue placeholder="This Week" />
            <ChevronDown className="h-5 w-5 ml-1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="last-week">Last Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Latest Activity Section */}
      <Card className="w-full max-w-[322px] h-[289px] bg-[#d9d9d9] rounded-[30px] border-none">
        <CardContent className="p-5">
          <h2 className="font-bold text-[#35200e] text-base tracking-[-0.32px] mb-5">
            Latest Activity
          </h2>

          <div className="flex flex-col gap-4">
            {activityItems.map((item) => (
              <div
                key={item.id}
                className="w-full h-16 bg-white rounded-[30px]"
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Chart */}
      <Card className="w-full max-w-[321px] h-[289px] bg-[#d9d9d9] rounded-[30px] border-none">
        <CardContent className="p-5 pt-[84px] relative h-full">
          <div className="flex justify-between items-end h-[159px]">
            {weekdayData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-[9px] bg-white rounded-[10px]"
                  style={{ height: `${item.height}px` }}
                />
                <span className="mt-2 font-bold text-[#35200e] text-[10px] tracking-[-0.20px]">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
