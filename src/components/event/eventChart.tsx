"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const filterdata = [
  { title: "1H", value: "onehour", smtitle: "1H" },
  { title: "6H", value: "sixhour", smtitle: "6H" },
  { title: "1 Day", value: "oneday", smtitle: "1D" },
  { title: "1 Week", value: "oneweek", smtitle: "1W" },
  { title: "1 Month", value: "onemonth", smtitle: "1M" },
  { title: "All", value: "all", smtitle: "All" },
];

const EventChart = () => {
  const chartConfig = {
    type: "line" as const,
    series: [
      {
        name: "Yes",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
          autoScaleYaxis: true,
        },
        // width: "100%",
        redrawOnWindowResize: true,
        redrawOnParentResize: true,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#2F80ED"],
      stroke: {
        lineCap: "round" as const,
        curve: "smooth" as const,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        show: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
      },
      yaxis: {
        show: true,
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#515670",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  const [period, setPeriod] = useState<string>("oneday");
  return (
    <>
      <div className="w-full flex flex-col items-center gap-10">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-col items-start">
            <div className="text-[#515670] text-base font-semibold">Yes</div>
            <div className="text-[#f8fbff] text-2xl font-medium">
              10% Chance
            </div>
          </div>
          <Image
            src="/BW-logo-event.svg"
            alt="star"
            width={142}
            height={43}
            className="cursor-pointer hidden sm:flex"
          />
          <div className="flex sm:hidden flex-row items-center gap-8">
            <Image
              src="/event/list.svg"
              alt="list"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/event/gear.svg"
              alt="gear"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full flex flex-row">
          <Chart {...chartConfig} height={300} width={1000} />
        </div>
        <div className="w-full flex flex-row justify-between gap-2 items-center">
          <div className="hidden sm:flex flex-row items-center gap-2">
            {filterdata.map((item, index) => (
              <Button
                className={`h-12 px-[16px] sm:px-[24px] py-[17px] ${
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
          <div className="w-full flex sm:hidden flex-row items-center justify-between">
            {filterdata.map((item, index) => (
              <Button
                className={`w-[15%] h-12 px-[16px] sm:px-[24px] py-[17px] ${
                  item.value === period
                    ? "bg-[#239C79] text-[#E6E8F8] border-none"
                    : "text-[#1B1F24] bg-transparent border-[1px] border-[#515670]"
                }   dark:text-[#f8fbff] hover:text-[#E6E8F8] hover:bg-[#239C79] dark:hover:bg-[#6DDABA] hover:border-none text-sm rounded-lg`}
                key={index}
                onClick={() => {
                  setPeriod(item.value);
                }}
              >
                {item.smtitle}
              </Button>
            ))}
          </div>
          <div className="hidden sm:flex flex-row items-center gap-8">
            <Image
              src="/event/list.svg"
              alt="list"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/event/gear.svg"
              alt="gear"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventChart;
