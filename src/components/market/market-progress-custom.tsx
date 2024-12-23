import { Progress } from "@/components/ui/progress";
import { toEther } from "thirdweb";

interface MarketProgressProps {
  optionA: string;
  optionB: string;
  totalOptionAShares: bigint;
  totalOptionBShares: bigint;
}

export function CustomMarketProgress({
  optionA,
  optionB,
  totalOptionAShares,
  totalOptionBShares,
}: MarketProgressProps) {
  const totalShares = Number(totalOptionAShares) + Number(totalOptionBShares);
  const yesPercentage =
    totalShares > 0 ? (Number(totalOptionAShares) / totalShares) * 100 : 50;

  return (
    <div className="w-full md:w-40">
      <div className="w-full flex flex-row justify-between mb-2 items-center">
        <span className="flex items-center gap-x-2 gap-y-1 flex-wrap justify-between">
          <span
            className={`font-bold text-sm ${
              yesPercentage >= 50 ? "text-[#6ddaba]" : ""
            }`}
          >
            <span className={`${yesPercentage > 50 ? "" : "text-gray-500"}`}>
              {optionA}:&nbsp;
            </span>
            {Math.floor(yesPercentage)}%
          </span>
          {/* {totalShares > 0 && (
            <span className="text-xs text-gray-500">
              ({Math.floor(parseInt(toEther(totalOptionAShares)))} $WET)
            </span>
          )}
          {totalShares == 0 && (
            <span className="text-xs text-gray-500">(0 $WET)</span>
          )} */}
        </span>

        <span className="flex items-center gap-x-2 gap-y-1 flex-wrap justify-between">
          <span
            className={`font-bold text-sm ${
              yesPercentage < 50 ? "text-[#ff8989]" : ""
            }`}
          >
            <span className={`${yesPercentage > 50 ? "text-gray-500" : ""}`}>
              {optionB}:&nbsp;
            </span>{" "}
            <span>{Math.floor(100 - yesPercentage)}%</span>
          </span>
          {/* {totalShares > 0 && (
            <span className="text-xs text-gray-500">
              ({Math.floor(parseInt(toEther(totalOptionBShares)))} $WET)
            </span>
          )}
          {totalShares == 0 && (
            <span className="text-xs text-gray-500">(0 $WET)</span>
          )} */}
        </span>
      </div>
      <Progress value={yesPercentage} className="h-2 mb-3" />
      <div className="w-full flex flex-row justify-between items-center">
        <span className="flex items-center gap-x-2 gap-y-1 flex-wrap justify-between">
          {totalShares > 0 && (
            <span className="text-xs text-gray-500">
              ({Math.floor(parseInt(toEther(totalOptionAShares)))} $WET)
            </span>
          )}
          {totalShares == 0 && (
            <span className="text-xs text-gray-500">(0 $WET)</span>
          )}
        </span>

        <span className="flex items-center gap-x-2 gap-y-1 flex-wrap justify-between">
          {totalShares > 0 && (
            <span className="text-xs text-gray-500">
              ({Math.floor(parseInt(toEther(totalOptionBShares)))} $WET)
            </span>
          )}
          {totalShares == 0 && (
            <span className="text-xs text-gray-500">(0 $WET)</span>
          )}
        </span>
      </div>
    </div>
  );
}
