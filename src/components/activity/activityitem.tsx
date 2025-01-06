import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ActivityItem = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 cursor-pointer hover:bg-[#dadcef] dark:hover:bg-[#212431] pt-8 pb-8 px-2 border-b-[1px] border-b-[#5D637B] dark:border-b-[#5c627b]">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-7">
          <Image
            src="https://res.cloudinary.com/dq9alywlv/image/upload/v1726336180/samples/landscapes/nature-mountains.jpg"
            alt="placeholder"
            width={64}
            height={64}
            className="h-12 w-12 rounded-2xl"
          />
          <div className="flex flex-col gap-6 sm:gap-2 sm:flex-grow sm:flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-4 sm:items-start sm:gap-2">
              <div className="text-[#787ea0] text-sm">
                Solana above $225 on December 20?
              </div>
              <div className="flex flex-row gap-4 items-center">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/profile/man-1.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-base text-[#1B1F24] dark:text-[#f8fbff]">
                  BN1SR bought <span className="text-[#239C79] dark:text-[#6ddaba]">Yes</span> at
                  61$WET <span className="text-[#515670]">($10.64)</span>
                </div>
              </div>
            </div>
            <div className="text-[#787ea0] text-sm">5 min ago</div>
          </div>
        </div>
        {/* <div className="w-full bg-[#5c627b] h-[1px]" /> */}
      </div>
    </>
  );
};

export default ActivityItem;
