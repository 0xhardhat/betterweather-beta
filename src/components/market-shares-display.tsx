import { Badge } from "./ui/badge";
import { toEther } from "thirdweb";
import { useEffect, useState } from "react";
import { toFixed } from "@/lib/utils";

interface MarketSharesDisplayProps {
    market: {
        optionA: string;
        optionB: string;
        totalOptionAShares: bigint;
        totalOptionBShares: bigint;
    };
    sharesBalance: {
        optionAShares: bigint;
        optionBShares: bigint;
    };
}

export function MarketSharesDisplay({
    market,
    sharesBalance,
}: MarketSharesDisplayProps) {
    const [winnings, setWinnings] = useState<{ A: bigint; B: bigint }>({ 
        A: BigInt(0), 
        B: BigInt(0) 
    });

    const calculateWinnings = (option: 'A' | 'B') => {
        if (!sharesBalance || !market) return BigInt(0);

        const userShares = option === 'A' ? sharesBalance.optionAShares : sharesBalance.optionBShares;
        const totalSharesForOption = option === 'A' ? market.totalOptionAShares : market.totalOptionBShares;
        const totalLosingShares = option === 'A' ? market.totalOptionBShares : market.totalOptionAShares;

        if (totalSharesForOption === BigInt(0)) return BigInt(0);

        // Calculate user's proportion of the winning side
        const userProportion = (userShares * BigInt(1000000)) / totalSharesForOption; // Multiply by 1M for precision
        
        // Calculate their share of the losing side's shares
        const winningsFromLosingShares = (totalLosingShares * userProportion) / BigInt(1000000);
        
        // Total winnings is their original shares plus their proportion of losing shares
        return userShares + winningsFromLosingShares;
    };

    useEffect(() => {
        if (!sharesBalance || !market) return;

        const newWinnings = {
            A: calculateWinnings('A'),
            B: calculateWinnings('B')
        };

        // Only update if values actually changed
        if (newWinnings.A !== winnings.A || newWinnings.B !== winnings.B) {
            setWinnings(newWinnings);
        }
    }, [sharesBalance, market.totalOptionAShares, market.totalOptionBShares]);

    const displayWinningsA = toFixed(Number(toEther(winnings.A)), 2);
    const displayWinningsB = toFixed(Number(toEther(winnings.B)), 2);

    return (
        <div className="flex flex-col gap-2">
            <div className="w-full text-sm text-muted-foreground">
                Your shares: {market.optionA} - {Math.floor(parseInt(toEther(sharesBalance?.optionAShares)))}, {market.optionB} - {Math.floor(parseInt(toEther(sharesBalance?.optionBShares)))}
            </div>
            {(winnings.A > 0 || winnings.B > 0) && (
                <div className="flex flex-col gap-1">
                    <div className="text-xs text-muted-foreground">Winnings:</div>
                    <div className="flex gap-2">
                        <Badge variant="secondary">{market.optionA}: {displayWinningsA} shares</Badge>
                        <Badge variant="secondary">{market.optionB}: {displayWinningsB} shares</Badge>
                    </div>
                </div>
            )}
        </div>
    );
}
