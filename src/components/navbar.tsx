"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { Sun, Moon, List, Loader2 } from "lucide-react";
import {
  ConnectButton,
  darkTheme,
  lightTheme,
  useActiveAccount,
} from "thirdweb/react";
import { base } from "thirdweb/chains";
import { createWallet } from "thirdweb/wallets";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useAtom } from "jotai";

import { themeAtom } from "@/store";
import { client } from "@/app/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import routes from "@/constants/route";
import { SearchBar } from "./search-bar";

export function Navbar() {
  const account = useActiveAccount();
  const [isClaimLoading, setIsClaimLoading] = useState(false);
  const { toast } = useToast();
  const { setTheme } = useTheme();
  const router = useRouter();
  // const [themecolor, setThemecolor] = useState<string>("dark");
  const [themecolor, setThemecolor] = useAtom(themeAtom);
  const [scrolling, setScrolling] = useState(false);

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
  const handleThemeChange = (newTheme: string) => {
    setThemecolor(newTheme);
    setTheme(newTheme);
    // Save the selected theme to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setThemecolor(storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("account info----->", account);
  }, [account]);

  return (
    <TooltipProvider>
      {/* <div className="flex flex-row justify-between items-center px-5 mb-6 gap-4 md:gap-0 lg:px-10 lg:gap-0 fixed mt-0 h-20 w-full max-w-[1600px] top-0 self-center bg-transparent z-20 backdrop-blur-sm backdrop-filter"> */}
      <div
        className={`z-50 flex flex-row justify-between items-center px-5 mb-6 gap-4 md:gap-0 lg:px-10 lg:gap-0 fixed mt-0 h-20 w-full max-w-[1600px] top-0 self-center transition-all duration-300 ${
          scrolling ? "backdrop-blur-sm backdrop-filter" : "bg-transparent"
        } z-20`}
      >
        {/* <h1 className="text-2xl font-bold">
        <span className="text-[#4ad4ab]">Better</span> Weather
      </h1> */}
        <div className="flex flex-row items-center justify-between gap-10">
          {" "}
          <Image
            width={142}
            height={43}
            src="/BW-logo-navbar.svg"
            alt="logo in dark theme"
            className="lg:w-[120px] lg:h-auto w-[142px] h-auto cursor-pointer hidden dark:flex"
            onClick={() => {
              router.push("/");
            }}
          />
          <Image
            width={142}
            height={43}
            src="/BW-logo-navbar-light.svg"
            alt="logo in dark theme"
            className="lg:w-[120px] lg:h-auto w-[142px] h-auto cursor-pointer flex dark:hidden"
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
          <div className="flex flex-row gap-2 items-center">
            <div className="hidden sm:flex">
              <SearchBar />
            </div>
            <div className="flex">
              <ConnectButton
                client={client}
                theme={themecolor === "dark" ? darkTheme() : lightTheme()}
                chain={base}
                connectButton={{
                  style: {
                    color: "#F9FCFF",
                    width: "108px",
                    fontSize: "0.5rem !important",
                    // height: "2rem !important",
                    height: "48px",
                    // backgroundColor: "#39997D",
                    // radial-gradient(43.46% 30.28% at 32.58% 18.17%, #6DDABA 0%, #39997D 100%)
                    backgroundColor: account ? "transparent" : "#39997D",
                    borderRadius: "8px",
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
          </div>
          <Button
            className="sm:flex md:hidden lg:flex border-[1px] border-[#239c79] dark:border-[#6DDABA] rounded-lg w-12 h-12 bg-transparent hover:bg-transparent"
            onClick={() => {
              const newTheme = themecolor === "dark" ? "light" : "dark";
              handleThemeChange(newTheme);
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
            className="hidden md:flex lg:hidden border-[1px] border-[#239c79] dark:border-[#6DDABA] rounded-xl w-12 h-12 dark:bg-transparent"
            size="icon"
            variant="outline"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
}

export const NavBtn = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname();
  return (
    <ul className="list-none lg:flex">
      <li
        className={clsx(
          "hover:text-[#239c79] dark:hover:text-[#6DDABA] transition-all duration-200 ease-in-out cursor-pointer font-medium",
          pathname === href
            ? "text-[#239c79] dark:text-[#6DDABA]"
            : "text-[#1b1f24] dark:text-[#F9FCFF]"
        )}
      >
        <a href={href} className="flex gap-1 items-center justify-start">
          {title}
        </a>
      </li>
    </ul>
  );
};
