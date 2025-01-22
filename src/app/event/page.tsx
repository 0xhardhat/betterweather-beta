"use client";

import { BuysellModal } from "@/components/event/buyModal";
import EventTitle from "@/components/event/eventTitle";
import EventChart from "@/components/event/eventChart";
import { CommentInput } from "@/components/event/commentInput";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import MessageItem from "@/components/event/messageItem";

const Event = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-start container mx-auto p-4 z-10 mt-28 gap-10">
        <div className="flex w-full lg:flex-grow flex-col items-start gap-10 overflow-x-hidden">
          <EventTitle />
          <EventChart />
          <div className="flex w-full flex-col items-center gap-12">
            <div className="flex w-full flex-col gap-8 sm:flex-row sm:justify-between items-center">
              <div className="text-[#f8fbff] text-3xl font-medium">
                Comments
              </div>
              <div className="flex flex-row items-center gap-10">
                <div className="text-[#515670] text-sm font-medium">
                  Top Holders
                </div>
                <div className="text-[#515670] text-sm font-medium">
                  Activity
                </div>
                <div className="text-[#515670] text-sm font-medium">
                  Related
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-between items-center">
              <div className="w-full flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:flex-grow flex flex-row items-center gap-2">
                  <CommentInput />
                  <Button
                    className={`h-12 px-[24px] py-[17px] bg-[#239C79] text-[#E6E8F8] border-none dark:text-[#f8fbff] hover:text-[#E6E8F8] hover:bg-[#239C79] dark:hover:bg-[#6DDABA] hover:border-none text-sm rounded-lg`}
                  >
                    Send
                  </Button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="border-[1px] border-[#239C79] dark:border-[#6DDABA] w-full sm:w-36 h-12 rounded-xl text-sm bg-transparent flex justify-between sm:justify-around items-center gap-1"
                      variant="outline"
                    >
                      Newest
                      <ChevronDown className="w-12 h-12 transition-transform duration-200" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Newest</DropdownMenuItem>
                    <DropdownMenuItem>Likes</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-10">
              <MessageItem />
              <MessageItem />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-[450px]">
          <BuysellModal />
        </div>
      </div>
    </>
  );
};

export default Event;
