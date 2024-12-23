import { cn } from "@/lib/utils";
// import PrecipitationIcon from "./assets/icons/precipitation";

interface MarketTimeProps {
  endTime: bigint;
  className?: string;
  category: string;
  filter: "active" | "pending" | "resolved";
  // status: string;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function MarketTime({
  endTime,
  className,
  category,
  filter,
}: MarketTimeProps) {
  // const isEnded = new Date(Number(endTime) * 1000) < new Date();
  const formattedDate = formatDate(
    new Date(Number(endTime) * 1000).toISOString()
  );

  return (
    <div className="flex flex-row justify-between gap-2 items-center">
      <div className="flex flex-row gap-2 items-center">
        {filter == "active" && (
          <img src="/market/clock.svg" alt="clock" className="h-5 w-5" />
        )}
        {(filter == "resolved" || filter == "pending") && (
          <img
            src={`/market/clock-${filter}.svg`}
            alt="clock"
            className="h-5 w-5"
          />
        )}
        <div
          className={cn(
            "w-fit rounded border-none text-xs text-[#51556f]",
            className
          )}
        >
          {filter == "active" && (
            <span className={`text-[#51556f]`}>End:&nbsp;</span>
          )}
          {filter != "active" && (
            <span
              className={`${
                filter == "resolved" ? "text-[#FF8989] " : "text-[#FDBE65] "
              }`}
            >
              End:&nbsp;
            </span>
          )}

          {formattedDate}
        </div>
      </div>
      <img
        src={`/category/${category}-${filter}.svg`}
        alt="event type"
        className="h-7 w-auto"
      />
      {/* <PrecipitationIcon color="#6DDABA" height={7}/> */}
    </div>
  );
}
