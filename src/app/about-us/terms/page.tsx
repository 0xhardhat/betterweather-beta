"use client";

import { Button } from "@/components/ui/button";
import { Termsofuse_data } from "@/constants/aboutus-text";
import { useRouter } from "next/navigation";

const Terms_of_use = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col items-center gap-12 px-4 md:px-14 lg:px-56 mb-2 sm:mb-16 mt-28">
        <div className="flex flex-col items-center">
          <div className="text-[#39997D] dark:text-[#6ddaba] text-sm font-semibold">
            Terms of Use
          </div>
          <div className="text-[#1B1F24] dark:text-[#f8fbff] text-4xl font-medium">
            Better Weather
          </div>
        </div>
        <div className="w-full flex flex-col items-start gap-8">
          {Termsofuse_data.map(({ title, content }, index) => (
            <div className="flex flex-col items-start gap-7" key={index}>
              <div className="text-[#787ea0] text-sm font-medium">{title}</div>
              <div className="w-full text-[#51556f] text-sm font-medium text-wrap">
                {content}
              </div>
            </div>
          ))}
        </div>
        <Button
          className="h-12 px-[40px] py-[17px] bg-gradient-to-r from-[#6DDABA] to-[#39997D] text-[#F9FCFF] text-sm rounded-lg"
          onClick={() => {
            router.push("/about-us");
          }}
        >
          Go Home
        </Button>
      </div>
    </>
  );
};

export default Terms_of_use;
