export interface Market {
    question: string;
    optionA: string;
    optionB: string;
    endTime: string;
    outcome: string;
    totalOptionAShares: number;
    totalOptionBShares: number;
    resolved: boolean;
}