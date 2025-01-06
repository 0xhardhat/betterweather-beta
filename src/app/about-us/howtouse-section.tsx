"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FAQ_data, gettingstarted_data } from "@/constants/aboutus-text";
import { useRouter } from "next/navigation";
import {
  CustomAccordion,
  CustomAccordionContent,
  CustomAccordionItem,
  CustomAccordionTrigger,
} from "@/components/ui/customaccordion";
import { Button } from "@/components/ui/button";

const Howtouse_section = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex text-3xl sm:text-5xl font-medium text-[#1B1F24] dark:text-[#f8fbff] flex-wrap">
        <span className="text-[#239C79] dark:text-[#6ddaba]">How</span>&nbsp;to
        Use
      </div>
      <div className="flex flex-col items-center sm:items-start gap-10">
        <div className="hidden sm:flex text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          Getting Started with Better Weather
        </div>
        <div className="flex sm:hidden text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          How Does Better <br></br> Weather Work?
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-start sm:flex-wrap gap-y-10">
          {gettingstarted_data.map((item, index) => (
            <div
              className="w-full md:w-[40%] lg:w-[30%] flex flex-row gap-12 sm:gap-6 items-start"
              key={index}
            >
              <div className="text-2xl text-[#239C79] dark:text-[#6ddaba] font-semibold flex justify-center items-center">
                {index + 1}
              </div>
              <div className="flex flex-col items-start gap-2">
                <div className="text-base text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
                  {item.title}
                </div>
                <div className="text-sm font-medium text-[#51556f]">
                  {item.description.map((desc, idx) => (
                    <span key={idx}>
                      {desc}
                      {idx < item.description.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center sm:items-start gap-10">
        <div className="text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          FAQ
        </div>
        <div className="w-full flex flex-col gap-8">
          {FAQ_data.map(({ question, answer }, index) => (
            <CustomAccordion type="single" collapsible key={index}>
              <CustomAccordionItem
                value="item-1"
                className="border-b-[#5D637B]"
              >
                <CustomAccordionTrigger>{question}</CustomAccordionTrigger>
                <CustomAccordionContent>{answer}</CustomAccordionContent>
              </CustomAccordionItem>
            </CustomAccordion>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center sm:items-start gap-10">
        <div className="text-2xl text-[#1B1F24] dark:text-[#f8fbff] font-semibold">
          Terms of Use
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-8 lg:gap-16">
          <Button
            className="hidden sm:flex h-12 px-[40px] py-[17px] bg-[#DADCEF] dark:bg-[#191b26] text-[#239C79] dark:text-[#6ddaba] hover:text-[#f8fbff] hover:bg-gradient-to-r hover:from-[#6DDABA] hover:to-[#39997D] text-sm rounded-lg"
            onClick={() => {
              router.push("/about-us/terms");
            }}
          >
            Go to Page
          </Button>
          <div className="text-sm font-medium text-[#51556f] text-center sm:text-left">
            Before proceeding, please read our Terms of Use carefully. These
            terms describe the rules and regulations regarding your access and
            use of our service. By clicking the button below, you acknowledge
            that you have read understood and agree to these terms and
            conditions.
          </div>
          <Button
            className="flex sm:hidden h-12 px-[40px] py-[17px] bg-[#191b26] text-[#6ddaba] hover:text-[#f8fbff] hover:bg-gradient-to-r hover:from-[#6DDABA] hover:to-[#39997D] text-sm rounded-lg"
            onClick={() => {
              router.push("/about-us/terms");
            }}
          >
            Go to Page
          </Button>
        </div>
      </div>
    </>
  );
};

export default Howtouse_section;
