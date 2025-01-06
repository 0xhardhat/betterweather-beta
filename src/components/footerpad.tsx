"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Paddata = [
  {
    title: "Market",
    url: "/",
    iconurl: "/footerpad/market.svg",
    clickediconurl: "/footerpad/market-clicked.svg",
    value: "",
  },
  {
    title: "Activity",
    url: "/activity",
    iconurl: "/footerpad/plane.svg",
    clickediconurl: "/footerpad/plane-clicked.svg",
    value: "activity",
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    iconurl: "/footerpad/star.svg",
    clickediconurl: "/footerpad/star-clicked.svg",
    value: "leaderboard",
  },
  {
    title: "About Us",
    url: "/about-us",
    iconurl: "/footerpad/people.svg",
    clickediconurl: "/footerpad/people-clicked.svg",
    value: "about-us",
  },
];
const Footerpad = () => {
  const [page, setPage] = useState<string>("");
  const route = useRouter();
  const pathname = usePathname();
  const firstSegment = pathname.split("/")[1];

  useEffect(() => {
    setPage(firstSegment);
    // console.log("pathname--->", pathname);
  }, [firstSegment]);

  return (
    <>
      <div className="z-50 w-full h-24 fixed bottom-0 bg-[#DADCEF] dark:bg-[#191B26] flex flex-row sm:hidden justify-around items-center rounded-t-2xl backdrop-blur-[30px]">
        {Paddata.map((paditem, index) => (
          <div
            className="flex flex-col items-center justify-between h-14 cursor-pointer"
            key={index}
            onClick={() => {
              setPage(paditem.value);
              route.push(paditem.url);
            }}
          >
            <Image
              src={
                page == paditem.value ? paditem.clickediconurl : paditem.iconurl
              }
              alt="footerpad icon"
              width={index == 0 ? 18 : 24}
              height={24}
            />
            <div
              className={`text-sm ${
                page == paditem.value
                  ? "text-[#239C79] dark:text-[#6DDABA]"
                  : "text-[#1B1F24] dark:text-[#F9FCFF] "
              }`}
            >
              {paditem.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Footerpad;
