"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Sun, Moon, List } from "lucide-react";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { base } from "thirdweb/chains";
import {
  // inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import { client } from "@/app/client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import routes from "@/constants/route";
import { SearchBar } from "./search-bar";

export function Navbar() {
  const account = useActiveAccount();
  const [isClaimLoading, setIsClaimLoading] = useState(false);
  const { toast } = useToast();
  const { setTheme } = useTheme();
  const router = useRouter();
  const [themecolor, setThemecolor] = useState<string>("dark");

  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.trustwallet.app"),
    createWallet("com.okex.wallet"),
  ];

  const handleClaimTokens = async () => {
    setIsClaimLoading(true);
    try {
      const resp = await fetch("/api/claimToken", {
        method: "POST",
        body: JSON.stringify({ address: account?.address }),
      });

      if (!resp.ok) {
        throw new Error("Failed to claim tokens");
      }

      toast({
        title: "Tokens Claimed!",
        description: "Your tokens have been successfully claimed.",
        duration: 5000,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Claim Failed",
        description:
          "There was an error claiming your tokens. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsClaimLoading(false);
    }
  };

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="flex flex-row justify-between items-center px-5 mb-6 gap-4 md:gap-0 lg:px-10 lg:gap-0 fixed mt-0 h-20 w-full max-w-[1600px] top-0 self-center bg-transparent z-20 backdrop-blur-sm backdrop-filter">
      {/* <h1 className="text-2xl font-bold">
        <span className="text-[#4ad4ab]">Better</span> Weather
      </h1> */}
      <div className="flex flex-row items-center justify-between gap-10">
        {" "}
        <img
          src="/HNY-BW.svg"
          alt="logo in dark theme"
          className="lg:w-[120px] lg:h-auto w-[142px] h-auto cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="hidden lg:flex lg:flex-row lg:gap-x-10 lg:gap-y-1 lg:flex-wrap">
          {routes.map(({ title, href }, index) => (
            <NavBtn title={title} href={href} key={index} />
          ))}
        </div>
      </div>

      <div className="items-center flex gap-2">
        {account && (
          <Button
            className="hidden md:flex dark:bg-transparent"
            onClick={handleClaimTokens}
            disabled={isClaimLoading}
            variant="outline"
          >
            {isClaimLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Claiming...
              </>
            ) : (
              "Tokens"
            )}
          </Button>
        )}
        <div className="hidden sm:flex items-center gap-2 justify-between">
          <SearchBar />
          <ConnectButton
            client={client}
            theme={lightTheme()}
            chain={base}
            connectButton={{
              style: {
                color: "39997D",
                width: "108px",
                fontSize: "0.5rem !important",
                // height: "2rem !important",
                height: "48px",
                // backgroundColor: "#39997D",
                backgroundColor: account ? "transparent" : "#39997D",
                borderRadius: "12px",
              },
              label: "Sign In",
            }}
            detailsButton={{
              displayBalanceToken: {
                [base.id]: "0xB90C49cb2D16cDb11bD398d96Dec386e9b9D3D2D",
              },
            }}
            // wallets={[
            //     inAppWallet(),
            // ]}
            wallets={wallets}
            accountAbstraction={{
              chain: base,
              sponsorGas: true,
            }}
          />
        </div>
        <Button
          className="hidden lg:flex lg:border-1 lg:border-[#6DDABA] rounded-xl w-12 h-12 dark:bg-transparent"
          onClick={() => {
            if (themecolor == "dark") {
              setThemecolor("light");
              setTheme("light");
            } else {
              setThemecolor("dark");
              setTheme("dark");
            }
          }}
          size="icon"
          variant="outline"
        >
          {themecolor === "dark" ? (
            <Sun className="w-3 h-3" />
          ) : (
            <Moon className="w-3 h-3" />
          )}
        </Button>
        <Button
          className="flex lg:hidden border-[1px] border-[#6DDABA] rounded-xl w-12 h-12 dark:bg-transparent"
          size="icon"
          variant="outline"
        >
          <List className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export const NavBtn = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname();
  return (
    <ul className="list-none lg:flex">
      <li
        className={clsx(
          "hover:text-[#6DDABA] transition-all duration-200 ease-in-out cursor-pointer font-medium",
          pathname === href ? "text-[#6DDABA]" : "text-[#F9FCFF]"
        )}
      >
        <a href={href} className="flex gap-1 items-center justify-start">
          {title}
        </a>
      </li>
    </ul>
  );
};
