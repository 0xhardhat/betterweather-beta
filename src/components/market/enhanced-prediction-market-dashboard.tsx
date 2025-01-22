"use client";

import { useReadContract } from "thirdweb/react";

import Image from "next/image";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { MarketCard } from "./marketCard";
import { MarketCardSkeleton } from "./market-card-skeleton";
// import { Footer } from "../footer";

import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Hero from "../hero";

import clsx from "clsx";
import { contract } from "@/constants/contract";
import categories from "@/constants/categories";

export function EnhancedPredictionMarketDashboard() {
  const [category, setCategory] = useState<string>("all markets");
  const { data: marketCount, isLoading: isLoadingMarketCount } =
    useReadContract({
      contract,
      method: "function marketCount() view returns (uint256)",
      params: [],
    });

  // Show 6 skeleton cards while loading
  const skeletonCards = Array.from({ length: 6 }, (_, i) => (
    <MarketCardSkeleton key={`skeleton-${i}`} />
  ));

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div
    //   className="z-4 w-full min-h-screen flex flex-col bg-background relative overflow-x-hidden overflow-y-hidden"
    //   style={{
    //     backgroundImage: `url('/background.svg')`,
    //     backgroundSize: `cover`,
    //     backgroundPosition: `center`,
    //   }}
    // >
    <div>
      {/* hero section background images */}
      <div className="w-[400px] h-[640px] origin-top-left rotate-90 opacity-25 absolute hidden sm:flex sm:right-[30%] sm:bottom-[-650px] bg-[#6ddaba] rounded-full blur-[150px] z-4"></div>
      <div className="w-[290px] h-[640px] origin-top-left rotate-90 opacity-25 absolute right-[10%] bottom-[-330px] flex sm:hidden bg-[#6ddaba] rounded-full blur-[150px] z-4"></div>
      <div
        className="w-full flex flex-col bg-custom-size-mobile bg-top bg-no-repeat sm:bg-right-top sm:bg-custom-size"
        style={{
          backgroundImage: isMobile
            ? "url('https://res.cloudinary.com/dq9alywlv/image/upload/v1734635215/hero-background-mobile-redesigned_tuw0kj.png')"
            : "url('https://res.cloudinary.com/dq9alywlv/image/upload/v1734634503/hero-background-redesigned_l9cw4i.png')",
        }}
      >
        {/* left and right blur effect circle images         */}
        <div className="w-[233px] h-[313px] origin-center opacity-40 bg-[#6ddaba] rounded-full blur-[100px] z-5 absolute right-[-160px] top-0"></div>
        <div className="w-[233px] h-[225px] origin-center rotate-[5.59deg] opacity-40 bg-[#38a8f8] rounded-full blur-[70px] absolute left-[-150px] top-48 z-5"></div>
        {/* <Navbar /> */}
        <div className="flex-grow container mx-auto p-4 items-center z-10">
          <Hero />
          {/* market category list */}
          <div className="w-full flex flex-row mt-0 lg:mt-14 relative">
            <div className="z-2 w-[233px] h-[416px] origin-top-left rotate-90 opacity-20 bg-[#6ddaba] rounded-full blur-[250px] absolute left-[560px]"></div>
            <Image
              width={268}
              height={225}
              alt="market-block image"
              src="/market/market-block.svg"
              className="absolute left-[-25px] top-[-35px] sm:top-[-70px] sm:left-[240px]"
            />
            <div className="z-20 w-full flex flex-col gap-5 items-center lg:w-full lg:flex-row lg:gap-20 lg:justify-between lg:px-5 overflow-hidden">
              <div className="flex flex-row items-baseline gap-2 sm:gap-3 sm:justify-between">
                <div className="font-medium text-3xl">Markets</div>
                <div className="font-medium text-base text-[#239c79] dark:text-[#6ddaba]">
                  {marketCount}
                </div>
              </div>
              {/* // market category list scroll swipe*/}
              <div className="w-full flex flex-row items-center gap-3 lg:w-[70%] overflow-hidden whitespace-nowrap">
                <Swiper
                  slidesPerView="auto"
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode]}
                  style={{ display: "flex" }} // Make Swiper a flex container
                >
                  {categories.map(({ title, value, url, lighturl }, index) => (
                    <SwiperSlide
                      key={index}
                      style={{
                        flex: "0 0 auto",
                        margin: "0 24px",
                        width: "auto",
                      }}
                    >
                      <Categorylist
                        url={url}
                        lighturl={lighturl}
                        title={title}
                        value={value}
                        currentcategory={category}
                        setCategory={setCategory}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/* market section  */}
          <div
            // className="mt-10"
            className="z-10 mt-10 bg-no-repeat bg-custom-size-resolve bg-mobile bg-center sm:bg-custom-size-resolvebg sm:bg-right-top"
          >
            {isLoadingMarketCount ? (
              <div className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 flex-wrap">
                  {skeletonCards}
                </div>
              </div>
            ) : (
              <>
                {/* Active card section  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 flex-wrap">
                  {Array.from({ length: Number(marketCount) }, (_, index) => (
                    <MarketCard
                      key={index}
                      index={index}
                      filter="active"
                      category={category}
                    />
                  ))}
                </div>
                <div
                  className="w-full text-base text-[#239c79] dark:text-[#6ddaba] text-center my-10 cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#39997D] active:scale-95"
                  onClick={() => {}}
                >
                  Show More...
                </div>
                {/* Pending and resolved market section */}
                <div className="z-10 w-full flex flex-col lg:flex-row gap-2 bg-no-repeat bg-custom-size-resolvebg-mobile bg-center sm:bg-custom-size-resolvebg sm:bg-right-top-[200px]">
                  {/* <img
                    src={
                      isMobile
                        ? "https://res.cloudinary.com/dq9alywlv/image/upload/v1734653508/resolve-section-background-mobile_k3roxx.png"
                        : "https://res.cloudinary.com/dq9alywlv/image/upload/v1734653274/resolve-section-background_ubsaca.png"
                    }
                    className="absolute"
                  />{" "} */}
                  <div className="w-full lg:w-1/2 bg-[#d9d9d9]/0 rounded-lg border-2 p-6 py-3 sm:p-8 border-[#e6e8f8] dark:border-[#24293a] backdrop-blur-[128px]">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger
                          customArrow={
                            <ChevronRight className="h-6 w-6 shrink-0 transition-transform duration-200 text-[#FDBE65]" />
                          }
                        >
                          <div className="flex flex-row items-baseline justify-between gap-2 sm:gap-3">
                            <div className="font-medium text-2xl sm:text-3xl">
                              Pending
                            </div>
                            <div className="font-medium text-base text-[#FDBE65]">
                              1
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-4">
                            <div className="grid grid-cols-1 gap-3">
                              {Array.from(
                                { length: Number(marketCount) },
                                (_, index) => (
                                  <MarketCard
                                    key={index}
                                    index={index}
                                    filter="pending"
                                    category={category}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="z-10 w-full lg:w-1/2 bg-[#d9d9d9]/0 rounded-lg border-2 p-6 py-3 sm:p-8 border-[#e6e8f8] dark:border-[#24293a] backdrop-blur-[128px]">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-2" className="border-none">
                        <AccordionTrigger
                          customArrow={
                            <ChevronRight className="h-6 w-6 shrink-0 transition-transform duration-200 text-[#FF8989]" />
                          }
                        >
                          <div className="flex flex-row items-baseline justify-between gap-2 sm:gap-3">
                            <div className="font-medium text-2xl sm:text-3xl">
                              Resolved
                            </div>
                            <div className="font-medium text-base text-[#FF8989]">
                              3
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="mt-4">
                            <div className="grid grid-cols-1 gap-3">
                              {Array.from(
                                { length: Number(marketCount) },
                                (_, index) => (
                                  <MarketCard
                                    key={index}
                                    index={index}
                                    filter="resolved"
                                    category={category}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export const Categorylist = ({
  title,
  value,
  url,
  lighturl,
  currentcategory,
  setCategory,
}: {
  title: string;
  value: string;
  url: string;
  lighturl: string;
  currentcategory: string;
  setCategory: (category: string) => void;
}) => {
  return (
    <ul className="list-none inline-block">
      <li
        className={clsx(
          "flex flex-row items-center h-10 px-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer font-medium dark:hover:text-[#777da0]  dark:active:bg-[#212431]",
          currentcategory === value
            ? "bg-[#dadcef] dark:bg-[#212431] text-[#1b1f24] dark:text-[#777da0]"
            : "text-[#777da0]"
        )}
        onClick={() => {
          setCategory(value);
        }}
      >
        <div className="flex flex-row items-center gap-2">
          {value !== "all markets" && currentcategory !== value && (
            <>
              <img src={url} alt={value} className="h-7 w-auto" />
            </>
          )}
          {value !== "all markets" && currentcategory === value && (
            <>
              <img
                src={url}
                alt={value}
                className="h-7 w-auto hidden dark:flex"
              />
              <img
                src={lighturl}
                alt={value}
                className="h-7 w-auto flex dark:hidden"
              />
            </>
          )}
          {title}
        </div>
      </li>
    </ul>
  );
};
