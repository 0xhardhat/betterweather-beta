import Image from "next/image";

const EventTitle = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center sm:justify-between items-center">
        <div className="flex justify-center flex-row items-center gap-10">
          <div className="text-[#787ea0] text-base font-semibold">
            $ 155,185,207 Vol
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/event/calendar.svg"
              alt="calendar"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <div className="text-[#787ea0] text-base font-semibold">
              Feb 1, 2025
            </div>
          </div>
        </div>
        <div className="hidden sm:flex flex-row items-center gap-10">
          <Image
            src="/event/star.svg"
            alt="star"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/event/paper.svg"
            alt="paper"
            width={18}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src="/event/staple.svg"
            alt="staple"
            width={24}
            height={18}
            className="cursor-pointer"
          />
          <Image
            src="/event/comment.svg"
            alt="comment"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-start gap-10">
        <Image
          src="https://nextui.org/images/card-example-2.jpeg"
          alt="star"
          width={88}
          height={88}
          className="w-20 h-20 cursor-pointer rounded-lg"
        />
        <div className="text-[#1B1F24] dark:text-[#f8fbff] text-xl sm:text-3xl font-medium">
          This market will resolve if Death Valley CA reaches a temperature
          above 130 before Dec 31, 2025
        </div>
      </div>
      <div className="w-full flex sm:hidden justify-center flex-row items-center gap-16">
        <Image
          src="/event/star.svg"
          alt="star"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/event/paper.svg"
          alt="paper"
          width={18}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src="/event/staple.svg"
          alt="staple"
          width={24}
          height={18}
          className="cursor-pointer"
        />
        <Image
          src="/event/comment.svg"
          alt="comment"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </>
  );
};

export default EventTitle;
