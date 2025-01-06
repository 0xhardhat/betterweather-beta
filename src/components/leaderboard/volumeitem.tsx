import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const VolumeItem = ({
  avatar,
  name,
  amount,
}: {
  avatar: string;
  name: string;
  amount: string;
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 cursor-pointer hover:bg-[#515670] dark:hover:bg-[#212431] pt-6 pb-6 px-2 border-b-[1px] border-b-[#5c627b]">
        <div className="w-full flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row gap-4 items-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src={avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-base text-[#1B1F24] dark:text-[#f8fbff]">
              {name}
            </div>
          </div>
          <div className="text-[#787ea0] text-sm">${amount}</div>
        </div>
      </div>
    </>
  );
};

export default VolumeItem;
