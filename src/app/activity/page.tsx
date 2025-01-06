"use client";

import ActivityItem from "@/components/activity/activityitem";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  //   DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Activity = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-28 mx-8 lg:mx-52 gap-10">
        <div className="text-3xl sm:text-6xl font-medium text-[#1B1F24] dark:text-[#F9FCFF]">
          Activity
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="border-[1px] border-[#239C79] dark:border-[#6DDABA] w-44 h-12 rounded-xl text-base bg-transparent flex justify-between items-center gap-3"
              variant="outline"
            >
              Min amount
              <ChevronDown className="w-10 h-10 transition-transform duration-200" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>None</DropdownMenuItem>
            <DropdownMenuItem>$10</DropdownMenuItem>
            <DropdownMenuItem>$100</DropdownMenuItem>
            <DropdownMenuItem>$1000</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="w-full flex flex-col">
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
        </div>
        <div
          className="w-full text-base text-[#239C79] dark:text-[#6ddaba] text-center my-10 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#39997D] active:scale-95"
          onClick={() => {}}
        >
          Show More...
        </div>
      </div>
    </>
  );
};

export default Activity;
