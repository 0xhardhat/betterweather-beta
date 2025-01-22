import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const MessageItem = () => {
  return (
    <>
      <div className="w-full flex flex-row items-start justify-between gap-6">
        <Avatar className="w-14 h-14">
          <AvatarImage
            src="https://res.cloudinary.com/dq9alywlv/image/upload/v1736932441/man-1_mt9adm.svg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-grow flex-row justify-between">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="text-[#f8fbff] text-base font-semibold">
                Johanthan
              </div>
              <div className="text-[#51556f] text-sm font-medium">2min ago</div>
            </div>
            <div className="text-[#51556f] text-sm font-medium">
              I should probably sell my YES now and buy back at January 3rd
              discount prices as @Felon69 pointed out.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageItem;
