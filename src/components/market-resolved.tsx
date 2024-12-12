import { Button } from "./ui/button";
import { prepareContractCall } from "thirdweb";
import { useSendAndConfirmTransaction } from "thirdweb/react";
import { contract } from "@/constants/contract";

interface MarketResolvedProps {
  marketId: number;
  outcome: number;
  optionA: string;
  optionB: string;
  sharesbalance: SharesBalance | undefined;
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
}: MarketResolvedProps) {
  const { mutateAsync: mutateTransaction } = useSendAndConfirmTransaction();

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
      console.log("optionAShares---->", sharesbalance?.optionAShares);
      console.log("optionBShares---->", sharesbalance?.optionBShares);
      if (outcome == 1) return sharesbalance?.optionAShares > 0;
      else if (outcome != 1) return sharesbalance?.optionBShares > 0;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="mb-2 bg-green-200 p-2 rounded-md text-center text-xs">
        Resolved as "{outcome === 1 ? optionA : optionB}"
      </div>
      <Button
        variant="outline"
        className="w-full"
        onClick={handleClaimRewards}
        disabled={!isthereRewards(outcome)}
      >
        {isthereRewards(outcome) ? "Claim Rewards" : "No Rewards"}
      </Button>
    </div>
  );
}
