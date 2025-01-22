"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  BuyCard,
  BuyCardContent,
  // BuyCardDescription,
  // BuyCardFooter,
  BuyCardHeader,
  BuyCardTitle,
} from "../ui/buycard";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { EventamountInput } from "../ui/detailinput";

export const BuysellModal = () => {
  const isLoadingMarketData = false;
  const router = useRouter();
  const [option_buy_or_sell, setOption_buy_or_sell] = useState<string>("buy");
  const [option_yes_or_no, setOption_yes_or_no] = useState<string>("yes");
  return (
    <BuyCard className="w-full hidden lg:flex flex-col">
      {isLoadingMarketData ? (
        // <MarketCardSkeleton />
        <></>
      ) : (
        <>
          <BuyCardHeader>
            <BuyCardTitle>Mike Johnson</BuyCardTitle>
          </BuyCardHeader>
          <BuyCardContent>
            <div className="w-full flex flex-col items-center gap-8">
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row gap-6 items-center">
                  <div
                    className="flex flex-row items-center gap-4 cursor-pointer"
                    onClick={() => {
                      setOption_buy_or_sell("buy");
                    }}
                  >
                    <Image
                      src={`${
                        option_buy_or_sell == "buy"
                          ? "/event/truck-selected.svg"
                          : "/event/truck.svg"
                      }`}
                      alt="truck"
                      width={17}
                      height={14}
                      // className="rounded-lg"
                    />
                    <div
                      className={` ${
                        option_buy_or_sell == "buy"
                          ? "text-3xl font-medium text-[#1B1F24] dark:text-[#F9FCFF]"
                          : "text-base text-[#515670] dark:text-[#F9FCFF]"
                      }`}
                    >
                      Buy
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-center gap-4 cursor-pointer"
                    onClick={() => {
                      setOption_buy_or_sell("sell");
                    }}
                  >
                    <Image
                      src={`${
                        option_buy_or_sell == "sell"
                          ? "/event/bookmark-selected.svg"
                          : "/event/bookmark.svg"
                      }`}
                      alt="truck"
                      width={17}
                      height={14}
                      // className="rounded-lg"
                    />
                    <div
                      className={`${
                        option_buy_or_sell == "sell"
                          ? "text-3xl font-medium text-[#1B1F24] dark:text-[#F9FCFF]"
                          : "text-base text-[#515670] dark:text-[#F9FCFF]"
                      }`}
                    >
                      Sell
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="border-[1px] border-[#239C79] dark:border-[#6DDABA] w-32 h-12 rounded-xl text-base bg-transparent flex justify-between items-center gap-2"
                      variant="outline"
                    >
                      Market
                      <ChevronDown className="w-16 h-16 transition-transform duration-200" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Market</DropdownMenuItem>
                    <DropdownMenuItem>Limit</DropdownMenuItem>
                    <DropdownMenuItem>AMM</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[#787ea0] text-base font-semibold">
                    Outcome
                  </div>
                  <Image
                    src="/event/gear.svg"
                    alt="gear"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
                <div className="w-full flex flex-row justify-between items-center gap-2">
                  <Button
                    className={`h-12 w-48 px-[40px] py-[17px]  text-sm rounded-lg ${
                      option_yes_or_no == "yes"
                        ? "bg-gradient-to-r from-[#6DDABA] to-[#39997D] text-[#F9FCFF]"
                        : "bg-[#DADCEF] dark:bg-[#191B26] text-[#515670]"
                    }`}
                    onClick={() => {
                      setOption_yes_or_no("yes");
                    }}
                  >
                    Yes $79.6
                  </Button>
                  <Button
                    className={`h-12 w-48 px-[40px] py-[17px] dark:bg-[#191B26] text-sm rounded-lg ${
                      option_yes_or_no == "no"
                        ? "bg-gradient-to-r from-[#FF8989] to-[#D65959] text-[#F9FCFF]"
                        : "bg-[#DADCEF] dark:bg-[#191B26] text-[#515670]"
                    }`}
                    onClick={() => setOption_yes_or_no("no")}
                  >
                    No $21.2
                  </Button>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[#787ea0] text-base font-semibold">
                    Amount
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between items-center gap-2">
                  <div className="mt-1 flex-grow relative">
                    <EventamountInput
                      type="number"
                      step="1"
                      min="0"
                      placeholder="Enter amount"
                      // value={amount}
                      // onChange={(e) => {
                      //   const value = Math.max(
                      //     1,
                      //     Math.min(100, Number(e.target.value))
                      //   ); // Restrict value between 1 and 100
                      //   setAmount(value);
                      //   setError(null);
                      // }}
                      // onKeyDown={(e) => {
                      //   if (e.key === "-" || e.key === "e") {
                      //     e.preventDefault();
                      //   }
                      // }}
                      // className={cn(
                      //   "w-full",
                      //   error && "border-red-500 focus-visible:ring-red-500"
                      // )}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-4">
                <div className="w-full flex flex-row justify-between">
                  <div className="text-[#787ea0] text-base font-semibold">
                    Avg Price
                  </div>
                  <div className="text-[#1B1F24] dark:text-[#dcdfe3] text-base font-semibold">
                    $ 0.0
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className="text-[#787ea0] text-base font-semibold">
                    Shares
                  </div>
                  <div className="text-[#1B1F24] dark:text-[#dcdfe3] text-base font-semibold">
                    0.00
                  </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <div className="text-[#787ea0] text-base font-semibold">
                    Potential Return
                  </div>
                  <div className="text-[#1B1F24] dark:text-[#dcdfe3] text-base font-semibold">
                    $ 0.00(0.00%)
                  </div>
                </div>
              </div>
              <Button
                className={`h-16 w-full px-[40px] py-[17px]  text-sm rounded-lg bg-[#2f80ed] hover:bg-[#3886ec] text-[#f8fbff]`}
                onClick={() => {}}
              >
                Login
              </Button>
              <div
                className="text-[#787ea0] text-base font-semibold underline cursor-pointer"
                onClick={() => {
                  router.push("/about-us/terms");
                }}
              >
                Terms of Use
              </div>
            </div>
          </BuyCardContent>
        </>
      )}
    </BuyCard>
  );
};
