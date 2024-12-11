"use client";

import { useReadContract } from "thirdweb/react";
import { contract } from "@/constants/contract";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CategoryTabs,
  CategoryTabsList,
  CategoryTabsTrigger,
} from "./ui/customtabs";
import { MarketCard } from "./marketCard";
import { Navbar } from "./navbar";
import { MarketCardSkeleton } from "./market-card-skeleton";
import { Footer } from "./footer";
import { useEffect, useState } from "react";

export function EnhancedPredictionMarketDashboard() {
  const [category, setCategory] = useState<string>("all markets");
  const { data: marketCount, isLoading: isLoadingMarketCount } =
    useReadContract({
      contract,
      method: "function marketCount() view returns (uint256)",
      params: [],
    });

  // Show 6 skeleton cards while loading
  const skeletonCards = Array.from({ length: 6 }, (_, i) => (
    <MarketCardSkeleton key={`skeleton-${i}`} />
  ));

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4">
        <Navbar />
        <div className="mb-4">
          <img
            src="https://res.cloudinary.com/dq9alywlv/image/upload/v1733547236/Better_Weather_4_1_uqf1ds.png"
            alt="Placeholder Banner"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <CategoryTabs
          defaultValue="all markets"
          className="w-full"
          onValueChange={(value) => {
            setCategory(value);
          }}
        >
          <CategoryTabsList className="grid w-full grid-cols-4">
            <CategoryTabsTrigger value="all markets">
              <span className="hidden sm:inline">All Markets</span>
              <span className="sm:hidden">All</span>
            </CategoryTabsTrigger>
            <CategoryTabsTrigger value="precipitation">
              <span className="hidden sm:inline">Precipitation</span>
              <span className="sm:hidden">Prec</span>
            </CategoryTabsTrigger>
            <CategoryTabsTrigger value="temperature">
              <span className="hidden sm:inline">Temperature</span>
              <span className="sm:hidden">Temp</span>
            </CategoryTabsTrigger>
            <CategoryTabsTrigger value="wind">Wind</CategoryTabsTrigger>
          </CategoryTabsList>
        </CategoryTabs>
        <Tabs defaultValue="active" className="w-full mt-3">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">
              <span className="hidden sm:inline">Pending Resolution</span>
              <span className="sm:hidden">Pending</span>
            </TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>

          {isLoadingMarketCount ? (
            <TabsContent value="active" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {skeletonCards}
              </div>
            </TabsContent>
          ) : (
            <>
              <TabsContent value="active">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array.from({ length: Number(marketCount) }, (_, index) => (
                    <MarketCard
                      key={index}
                      index={index}
                      filter="active"
                      category={category}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array.from({ length: Number(marketCount) }, (_, index) => (
                    <MarketCard
                      key={index}
                      index={index}
                      filter="pending"
                      category={category}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resolved">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Array.from({ length: Number(marketCount) }, (_, index) => (
                    <MarketCard
                      key={index}
                      index={index}
                      filter="resolved"
                      category={category}
                    />
                  ))}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
