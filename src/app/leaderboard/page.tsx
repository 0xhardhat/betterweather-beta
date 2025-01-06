"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock5 } from "lucide-react";
import VolumeItem from "@/components/leaderboard/volumeitem";
import ProfitItem from "@/components/leaderboard/profititem";
import Image from "next/image";

const filterdata = [
  { title: "Day", value: "day" },
  { title: "Week", value: "week" },
  { title: "Month", value: "month" },
  { title: "All", value: "all" },
];

const volumedata = [
  { avatar: "/profile/man-2.png", name: "MyNameIsJohn", amount: "82324" },
  { avatar: "/profile/man-1.png", name: "BaseR", amount: "42450" },
  { avatar: "/profile/man-3.png", name: "Riv@1", amount: "33214" },
  { avatar: "/profile/man-4.png", name: "Florida", amount: "30231" },
  { avatar: "/profile/man-5.png", name: "King", amount: "18230" },
  { avatar: "/profile/man-6.png", name: "Mmm", amount: "15222" },
  { avatar: "/profile/man-7.png", name: "StarryPath", amount: "11134" },
  { avatar: "/profile/man-2.png", name: "Spon", amount: "8232" },
];

const profitdata = [
  { avatar: "/profile/man-2.png", name: "MyNameIsJohn", amount: "32212" },
  { avatar: "/profile/man-1.png", name: "BaseR", amount: "22312" },
  { avatar: "/profile/man-3.png", name: "Riv@1", amount: "12567" },
  { avatar: "/profile/man-4.png", name: "Florida", amount: "12333" },
  { avatar: "/profile/man-5.png", name: "King", amount: "8523" },
  { avatar: "/profile/man-6.png", name: "Mmm", amount: "8322" },
  { avatar: "/profile/man-7.png", name: "StarryPath", amount: "6130" },
  { avatar: "/profile/man-2.png", name: "Spon", amount: "5200" },
];

const Leaderboard = () => {
  const [period, setPeriod] = useState<string>("month");
  return (
    <>
      <div className="flex flex-col items-center mt-28 mx-2 md:mx-24 lg:mx-44 gap-10 mb-20 relative">
        <Image
          width={2000}
          height={1352}
          alt="market-block image"
          src="/leaderboard/leaderboard-background.png"
          className="z-10 absolute hidden top-[-35px] left-[-240px] sm:top-[-112px] lg:flex min-h-[1352px] min-w-[2000px]"
        />
        <Image
          width={1300}
          height={870}
          alt="market-block image"
          src="/leaderboard/leaderboard-background-tablet.png"
          className="z-10 absolute hidden top-[-35px] left-[-240px] sm:top-[-112px] sm:flex lg:hidden min-h-[870px] min-w-[1300px]"
        />
        <Image
          width={600}
          height={401}
          alt="market-block image"
          src="/leaderboard/leaderboard-background-mobile.png"
          className="z-10 absolute flex top-[-180px] left-0 sm:hidden min-h-[401px] min-w-[600px]"
        />
        {/* <Image
          width={2000}
          height={1352}
          alt="market-block image"
          src="/leaderboard/leaderboard-background.png"
          className="absolute hidden top-[-35px] left-[-240px] sm:top-[-112px] md:flex min-h-[1352px] min-w-[2000px]"
        /> */}
        <div className="z-40 text-3xl sm:text-6xl font-medium text-[#1B1F24] dark:text-[#F9FCFF]">
          Leaderboard
        </div>
        <div className="z-40 flex flex-row items-center gap-2">
          {filterdata.map((item, index) => (
            <Button
              className={`h-12 px-[24px] py-[17px] ${
                item.value === period
                  ? "bg-[#239C79] text-[#E6E8F8] border-none"
                  : "text-[#1B1F24] bg-transparent border-[1px] border-[#515670]"
              }   dark:text-[#f8fbff] hover:text-[#E6E8F8] hover:bg-[#239C79] dark:hover:bg-[#6DDABA] hover:border-none text-sm rounded-lg`}
              key={index}
              onClick={() => {
                setPeriod(item.value);
              }}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className="z-40 flex flex-row items-center gap-2">
          <Clock5 className="w-4 h-4 text-[#787ea0]" />
          <div className="text-sm text-[#787ea0]">
            Resets in{" "}
            <span className="text-[#1B1F24] dark:text-[#f8fbff]">
              1d 23h 13m 17s
            </span>
          </div>
        </div>
        <div className="z-40 w-full flex flex-col items-center lg:flex-row lg:justify-center gap-3">
          <div className="w-full lg:w-[40%] flex flex-col items-start bg-[#DADCEF] dark:bg-[#191b26] rounded-lg p-8">
            <div className="ml-2 mb-2 flex flex-row items-center gap-4">
              <Image
                width={16}
                height={8}
                src="/leaderboard/vector.svg"
                alt="vector"
              />
              <div className="text-[#1B1F24] dark:text-[#f8fbff] text-2xl font-medium">
                Volume
              </div>
            </div>
            {volumedata.map((item, index) => (
              <VolumeItem
                avatar={item.avatar}
                name={item.name}
                amount={item.amount}
                key={index}
              />
            ))}
          </div>
          <div className="w-full lg:w-[40%] flex flex-col items-start bg-[#DADCEF] dark:bg-[#191b26] rounded-lg p-8">
            <div className="ml-2 mb-2 flex flex-row items-center gap-4">
              <Image
                width={16}
                height={16}
                src="/leaderboard/star.svg"
                alt="vector"
              />
              <div className="text-[#1B1F24] dark:text-[#f8fbff] text-2xl font-medium">
                Profit
              </div>
            </div>
            {profitdata.map((item, index) => (
              <ProfitItem
                avatar={item.avatar}
                name={item.name}
                amount={item.amount}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
