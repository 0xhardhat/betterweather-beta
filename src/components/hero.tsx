"use client";

import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-center lg:gap-28 mt-28">
        <div className="flex flex-col lg:items-start items-center lg:w-[400px] gap-6">
          <div className="flex flex-col lg:items-start items-center">
            <div className="flex flex-row justify-between items-baseline gap-2">
              <span className="text-[#6DDABA] text-[48px] sm:text-[64px] font-semibold">
                Bet
              </span>
              <span className="text-[#6DDABA] text-[24px] sm:text-[40px] font-semibold">
                On
              </span>
            </div>
            <div className="flex flex-row justify-between items-baseline gap-2 mt-[-15px] sm:mt-[-30px]">
              <span className="text-[#F9FCFF] text-[24px] sm:text-[40px] font-semibold">
                The
              </span>
              <span className="text-[#F9FCFF] text-[48px] sm:text-[64px] font-semibold">
                Weather.
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button className="h-12 px-[40px] py-[17px] bg-gradient-to-r from-[#6DDABA] to-[#39997D] text-[#F9FCFF] text-sm rounded-xl">
              About Us
            </Button>
            <Button className="h-12 px-[40px] py-[17px] bg-[#191B26] text-[#515670] text-sm rounded-xl">
              How To Use It?
            </Button>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dq9alywlv/image/upload/v1734549169/better-weather-hero_nn8kaj.png"
          alt="hero image"
          className="lg:hidden md:w-full md:h-[275px] w-full h-[220px] rounded-3xl mt-12 lg:mt-0"
        />
        {/* New Div for Background Image */}
        <div
          className="flex-1 bg-center bg-no-repeat bg-cover rounded-3xl mt-12 lg:mt-0 xl:h-[333px] lg:h-[300px] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dq9alywlv/image/upload/v1734549169/better-weather-hero_nn8kaj.png')",
            // height: "333px", // Set a fixed height or use a dynamic approach
          }}
        ></div>
      </div>
    </>
  );
};

export default Hero;
