"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  how_does_data,
  why_data,
  why_choose_data,
} from "@/constants/aboutus-text";

const AboutUs_section = () => {
  return (
    <>
      <div className="flex text-3xl sm:text-5xl font-medium text-[#1B1F24] dark:text-[#f8fbff] flex-wrap">
        <span className="text-[#239C79] dark:text-[#6ddaba]">About</span>
        &nbsp;Us
      </div>
      <div className="flex flex-col items-center sm:items-start gap-10">
        <div className="text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          What is Better Weather?
        </div>
        <div className="text-sm font-medium text-[#51556f] text-center sm:text-left">
          Better Weather is an innovative platform that allows users to
          participate in prediction markets based on weather events.
          <br></br> <br></br>By leveraging weather APIs and smart contracts, we
          create a decentralized application (DApp) for continuous
          natural-data-driven betting. Users can speculate on a variety of
          weather conditions like temperature, precipitation, and wind speed,
          all resolved by trusted weather data sources.
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-10">
        <div className="hidden sm:flex text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          How Does Better Weather Work?
        </div>
        <div className="flex sm:hidden text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          How Does Better <br></br> Weather Work?
        </div>
        <div className="flex flex-col items-start gap-10">
          {how_does_data.map((item, index) => (
            <div className="flex flex-row gap-6 items-center" key={index}>
              <div className="w-12 h-12 min-w-12 min-h-12 bg-[#239C79] dark:bg-[#6ddaba] rounded-full text-[#f8fbff] flex justify-center items-center">
                {index + 1}
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="text-xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
                  {item.title}
                </div>
                <div className="text-sm font-medium text-[#51556f]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start gap-10">
        <div className="text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          Why Bet on Weather?
        </div>
        <div className="flex flex-col items-center sm:items-start sm:flex-row flex-wrap gap-16">
          {why_data.map((item, index) => (
            <div
              className="flex flex-col items-center sm:items-start gap-6"
              key={index}
            >
              <Image
                src={item.imageurl}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
              <div className="text-base text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
                {item.title}
              </div>
              <div className="text-sm font-medium text-[#51556f] text-center sm:text-left">
                {item.description.map((desc, idx) => (
                  <span key={idx}>
                    {desc}
                    {idx < item.description.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-20 border-b-[1px] pb-12 border-[#5c627b]">
        <div className="hidden sm:flex text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          Why Choose Better Weather?
        </div>
        <div className="flex sm:hidden text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          Why Choose<br></br> Better Weather?
        </div>
        <div className="text-sm font-medium text-[#51556f]">
          We focus exclusively on natural-data-driven markets with no human
          <br></br>
          involvement. Rather than focusing on pop culture, we are dedicated
          <br></br>
          to providing markets specifically around earth science data
        </div>
      </div>
      <div className="w-full flex flex-row items-center gap-3  whitespace-nowrap">
        {/* <Why_choose_list /> */}
        <Swiper
          slidesPerView="auto"
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          style={{ display: "flex", marginLeft: "0px" }} // Make Swiper a flex container
        >
          {why_choose_data.map(
            ({ title, description_1, description_2 }, index) => (
              <SwiperSlide
                key={index}
                style={{
                  flex: "0 0 auto",
                  margin: index === 0 ? "0 0px" : "0 80px",
                  width: "auto",
                  cursor: "pointer",
                }}
              >
                <Why_choose_list
                  title={title}
                  description_1={description_1}
                  description_2={description_2}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default AboutUs_section;

const Why_choose_list = ({
  title,
  description_1,
  description_2,
}: {
  title: string[];
  description_1: string[];
  description_2: string[];
}) => {
  return (
    <>
      <div className="flex flex-col items-start pl-8 h-[235px] border-[#239C79] dark:border-[#6ddaba] border-l-[1px] gap-8">
        <div className="mt-[-5px] text-base text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          {title.map((desc, idx) => (
            <span key={idx}>
              {desc}
              {idx < title.length - 1 && <br />}
            </span>
          ))}
        </div>
        <div className="text-sm font-medium text-[#51556f]">
          {description_1.map((desc, idx) => (
            <span key={idx}>
              {desc}
              {idx < description_1.length - 1 && <br />}
            </span>
          ))}
          <br /> <br />
          {description_2.map((desc, idx) => (
            <span key={idx}>
              {desc}
              {idx < description_2.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
