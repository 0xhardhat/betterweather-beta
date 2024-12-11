import { Progress } from "@/components/ui/progress";
import { toEther } from "thirdweb";

interface MarketProgressProps {
  optionA: string;
  optionB: string;
  totalOptionAShares: bigint;
  totalOptionBShares: bigint;
}

export function MarketProgress({
  optionA,
  optionB,
  totalOptionAShares,
  totalOptionBShares,
}: MarketProgressProps) {
  const totalShares = Number(totalOptionAShares) + Number(totalOptionBShares);
  const yesPercentage =
    totalShares > 0 ? (Number(totalOptionAShares) / totalShares) * 100 : 50;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2 items-center">
        <span className="flex items-center gap-2">
          <span className="font-bold text-sm">
            {optionA}: {Math.floor(yesPercentage)}%
          </span>
          {totalShares > 0 && (
            <span className="text-xs text-gray-500">
              ({Math.floor(parseInt(toEther(totalOptionAShares)))} $WET)
            </span>
          )}
          {totalShares == 0 && (
            <span className="text-xs text-gray-500">(0 $WET)</span>
          )}
        </span>
        <span className="flex items-center gap-2">
          <span className="font-bold text-sm">
            {optionB}: {Math.floor(100 - yesPercentage)}%
          </span>
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
      <Progress value={yesPercentage} className="h-2" />
    </div>
  );
}
