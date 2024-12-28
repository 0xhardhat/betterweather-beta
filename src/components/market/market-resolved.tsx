import { prepareContractCall } from "thirdweb";
import { toEther } from "thirdweb";
import { useSendAndConfirmTransaction } from "thirdweb/react";

import { contract } from "@/constants/contract";

import { Market } from "./marketCard";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { toFixed } from "@/lib/utils";

interface MarketResolvedProps {
  marketId: number;
  outcome: number;
  optionA: string;
  optionB: string;
  sharesbalance: SharesBalance;
  market: Market;
}

interface SharesBalance {
  optionAShares: bigint;
  optionBShares: bigint;
}

export function MarketResolved({
  marketId,
  outcome,
  optionA,
  optionB,
  sharesbalance,
  market,
}: MarketResolvedProps) {
  const { mutateAsync: mutateTransaction } = useSendAndConfirmTransaction();
  const [winnings, setWinnings] = useState<{ A: bigint; B: bigint }>({
    A: BigInt(0),
    B: BigInt(0),
  });

  const calculateWinnings = (option: "A" | "B") => {
    if (!sharesbalance || !market) return BigInt(0);

    const userShares =
      option === "A"
        ? sharesbalance.optionAShares
        : sharesbalance.optionBShares;
    const totalSharesForOption =
      option === "A" ? market.totalOptionAShares : market.totalOptionBShares;
    const totalLosingShares =
      option === "A" ? market.totalOptionBShares : market.totalOptionAShares;

    if (totalSharesForOption === BigInt(0)) return BigInt(0);

    // Calculate user's proportion of the winning side
    const userProportion =
      (userShares * BigInt(1000000)) / totalSharesForOption; // Multiply by 1M for precision
    // Calculate their share of the losing side's shares
    const winningsFromLosingShares =
      (totalLosingShares * userProportion) / BigInt(1000000);

    // Total winnings is their original shares plus their proportion of losing shares
    return userShares + winningsFromLosingShares;
  };
  useEffect(() => {
    if (!sharesbalance || !market) return;

    const newWinnings = {
      A: calculateWinnings("A"),
      B: calculateWinnings("B"),
    };

    // Only update if values actually changed
    if (newWinnings.A !== winnings.A || newWinnings.B !== winnings.B) {
      setWinnings(newWinnings);
    }
  }, [sharesbalance, market.totalOptionAShares, market.totalOptionBShares]);

  const displayWinningsA = toFixed(Number(toEther(winnings.A)), 2);
  const displayWinningsB = toFixed(Number(toEther(winnings.B)), 2);

  const handleClaimRewards = async () => {
    try {
      const tx = await prepareContractCall({
        contract,
        method: "function claimingWinnings(uint256 _marketId)",
        params: [BigInt(marketId)],
      });

      await mutateTransaction(tx);
    } catch (error) {
      console.log(error);
    }
  };

  const isthereRewards = (outcome: number) => {
    if (sharesbalance) {
      if (outcome == 1) return sharesbalance?.optionAShares > 0;
      else if (outcome != 1) return sharesbalance?.optionBShares > 0;
    }
  };

  return (
    <div className="mt-[-12px] px-0 sm:px-6 mb-[-6px] sm:mb-6 w-full flex flex-col items-start gap-4">
      {(winnings.A > 0 || winnings.B > 0) && (
        <div className="mx-6 sm:mx-0 flex flex-row items-center gap-3">
          <div className="text-xs text-muted-foreground">Winnings:</div>
          <div className="flex gap-2">
            <Badge className="bg-[#282C3E] py-1">
              <span className="text-[#6DDABA]">{market.optionA}:&nbsp;</span>{" "}
              <span className="text-[#F9FCFF]"> {displayWinningsA} shares</span>
            </Badge>
            <Badge className="bg-[#282C3E] py-1">
              <span className="text-[#FF8989]">{market.optionB}:&nbsp;</span>{" "}
              <span className="text-[#F9FCFF]">{displayWinningsB} shares</span>
            </Badge>
          </div>
        </div>
      )}
      <div className="mx-6 sm:mx-0 flex sm:hidden text-sm text-muted-foreground">
        Your shares:&nbsp;
        <span className="text-[#F9FCFF]">
          {market.optionA} -{" "}
          {Math.floor(parseInt(toEther(sharesbalance?.optionAShares)))},{" "}
          {market.optionB} -{" "}
          {Math.floor(parseInt(toEther(sharesbalance?.optionBShares)))}
        </span>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-full sm:w-auto flex flex-row items-center gap-0">
          <div className="w-[50%] sm:w-40 h-14 flex flex-row justify-center items-center border-[1px] border-[#6DDABA] p-2 rounded-l-lg sm:rounded-l-lg text-center text-xs text-[#6DDABA] bg-[rgba(109,218,186,0.1)]">
            Resolved as "{outcome === 1 ? optionA : optionB}"
          </div>
          <Button
            className="w-[50%] sm:w-40 h-14 rounded-none rounded-r-lg sm:rounded-r-lg dark:bg-[#1B1E2B] dark:hover:bg-[#1B1E2B] text-[#F9FCFF] dark:hover:text-[#6DDABA] text-xs"
            onClick={handleClaimRewards}
            disabled={!isthereRewards(outcome)}
          >
            {isthereRewards(outcome) ? "Claim Rewards" : "No Rewards"}
          </Button>
        </div>
        <div className="hidden sm:flex text-sm text-muted-foreground">
          Your shares:&nbsp;
          <span className="text-[#F9FCFF]">
            {market.optionA} -{" "}
            {Math.floor(parseInt(toEther(sharesbalance?.optionAShares)))},{" "}
            {market.optionB} -{" "}
            {Math.floor(parseInt(toEther(sharesbalance?.optionBShares)))}
          </span>
        </div>
      </div>
    </div>
  );
}
