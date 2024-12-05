import { cn } from "@/lib/utils";

interface MarketTimeProps {
    endTime: bigint;
    className?: string;
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

export function MarketTime({ endTime, className }: MarketTimeProps) {
    const isEnded = new Date(Number(endTime) * 1000) < new Date();
    const formattedDate = formatDate(new Date(Number(endTime) * 1000).toISOString());

    return (
        <div
            className={cn(
                "mb-2 w-fit px-2 py-1 rounded border text-xs",
                isEnded 
                    ? "bg-red-200 border-red-300 text-red-800" 
                    : "border-gray-300 text-gray-800",
                className
            )}
        >
            {isEnded ? "Ended: " : "Ends: "}{formattedDate}
        </div>
    );
}
