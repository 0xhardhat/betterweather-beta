"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import AboutUs_section from "./aboutus-section";
import Howtouse_section from "./howtouse-section";
import Image from "next/image";

interface Doc_aboutus {
  title: string;
  index: boolean;
}

interface Doc_howtouse {
  title: string;
  index: boolean;
}

interface Docs {
  aboutus: Doc_aboutus[];
  howtouse: Doc_howtouse[];
}

const docs: Docs = {
  aboutus: [
    {
      title: "What is BetterWeather?",
      index: true,
    },
    {
      title: "How Does Better Weather Work?",
      index: true,
    },
    {
      title: "Why Bet on Weather?",
      index: true,
    },
    {
      title: "Why Choose Better Weather?",
      index: true,
    },
  ],
  howtouse: [
    {
      title: "Getting Started with Better Weather",
      index: true,
    },
    {
      title: "FAQ",
      index: true,
    },
    {
      title: "Terms of Use",
      index: true,
    },
  ],
};

// Define a union type for section titles
// type SectionTitle =
//   | "What is BetterWeather?"
//   | "How Does Better Weather Work?"
//   | "Why Bet on Weather?"
//   | "Why Choose Better Weather?";

const AboutUs = () => {
  const [section, setSection] = useState<string>("What is BetterWeather?");
  // const sectionRefs = {
  //   "What is BetterWeather?": useRef<HTMLElement>(null),
  //   "How Does Better Weather Work?": useRef<HTMLElement>(null),
  //   "Why Bet on Weather?": useRef<HTMLElement>(null),
  //   "Why Choose Better Weather?": useRef<HTMLElement>(null),
  // };
  //  const scrollToSection = (title: SectionTitle) => {  
  //   if (sectionRefs[title].current) {  
  //     sectionRefs[title].current.scrollIntoView({ behavior: "smooth" });  
  //     setSection(title);  
  //   }  
  // };  

  useEffect(() => {
    setSection("What is BetterWeather?");
  }, []);
  const DocBtn = ({ title }: { title: string }) => {
    // const pathname = usePathname();
    return (
      <ul className="list-none lg:flex">
        <li
          className={clsx(
            "hover:text-[#239c79] dark:hover:text-[#6DDABA] transition-all duration-200 ease-in-out cursor-pointer text-sm font-medium",
            section === title
              ? "text-[#239c79] dark:text-[#6DDABA]"
              : "text-[#51556f]"
          )}
        >
          <a
            className="flex gap-1 items-center justify-start"
            onClick={() => {
              setSection(title);
            }}
          >
            {title}
          </a>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between sm:items-start px-4 md:px-9 lg:px-12 mb-2 sm:mb-16 mt-28 relative">
        <Image
          width={1156}
          height={650}
          alt="market-block image"
          src="/about-us/aboutus-background.png"
          className="z-10 absolute hidden right-[50px] sm:top-[-112px] lg:flex min-h-[650px] min-w-[1156px]"
        />
        <Image
          width={1030}
          height={579}
          alt="market-block image"
          src="/about-us/aboutus-background.png"
          className="z-10 absolute hidden right-[-50px] sm:top-[-112px] sm:flex lg:hidden min-h-[579px] min-w-[1030px]"
        />
        <Image
          width={700}
          height={393}
          alt="market-block image"
          src="/about-us/aboutus-background.png"
          className="z-10 absolute flex top-[-112px] right-[-50px] sm:hidden min-h-[393px] min-w-[700px]"
        />
        {/* <Image
          width={1156}
          height={650}
          alt="market-block image"
          src="/about-us/aboutus-background.png"
          className="z-10 absolute hidden top-[-35px] right-[50px] sm:top-[-112px] lg:flex min-h-[650px] min-w-[1156px]"
        /> */}
        {/* <div className="mt-28 mx-4 mb-16 md:mx-9 lg:mx-12 flex items-center"> */}
        <div className="z-40 hidden lg:flex w-[290px] flex-col items-start gap-16 lg:fixed">
          <div className="flex flex-col items-start gap-6">
            <div className="text-base text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
              About Us
            </div>
            {docs.aboutus.map(({ title }, index) => (
              <DocBtn title={title} key={index} />
            ))}
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="text-base text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
              How to Use
            </div>
            {docs.howtouse.map(({ title }, index) => (
              <DocBtn title={title} key={index} />
            ))}
          </div>
        </div>
        <div className="z-40 w-full lg:flex-grow flex flex-col items-center sm:items-start lg:mx-14 lg:ml-[346px] lg:pr-3 gap-16 overflow-x-hidden lg:max-h-[100vh] lg:overflow-y-scroll custom-scrollbar">
          <AboutUs_section />
          <Howtouse_section />
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AboutUs;
