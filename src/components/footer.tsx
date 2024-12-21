"use client";

import { useRouter } from "next/navigation";
import { Instagram, X } from "@mui/icons-material";
import { IconButton } from "@mui/material";

// const socials = [
//   { url: "/social/x-icon.svg", title: "twitter" },
//   { url: "/social/instagram-icon.svg", title: "instagram" },
//   { url: "/social/discord-icon.svg", title: "discord" },
// ];

export function Footer() {
  const router = useRouter();
  return (
    <footer className="flex-grow flex-col items-center container mx-auto mt-8 pb-4 bg-background dark:bg-transparent">
      <div className="flex flex-col items-center justify-between gap-10 py-12 lg:flex-row md:gap-9 lg:gap-16 lg:justify-around md:justify-around md:flex-row md:items-start lg:items-start md:py-0">
        {/* <Link
          href="https://github.com/0xhardhat/betterweather-beta"
          target="_blank"
          rel="noreferrer"
        > */}
        <img
          src="/HNY-BW.svg"
          alt="logo in dark theme"
          className="hidden sm:w-40 sm:h-auto sm:flex cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <img
          src="/BW-logo-footer-mobile.svg"
          alt="logo in dark theme"
          className="flex w-24 h-auto sm:hidden cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />

        <div className="flex flex-col items-center gap-4 px-8 md:items-start md:gap-2 md:px-0">
          <div className="text-center text-base leading-loose text-muted-foreground md:text-left text-[#f8fbff]">
            is dedicated to creating markets specifically for naturally occuring
            earth science data. We offer a diverse range of weather and
            climate-related markets worldwide, wherever reliable data can
            sustainably support them. Tapped into the weather community, we also
            understand which events are socially relevant and engaging
          </div>
          <div className="flex flex-row gap-4">
            <IconButton
              sx={{
                color: "#515670",
                width: "24px",
              }}
            >
              <X />
            </IconButton>
            <IconButton
              sx={{
                color: "#515670",
                width: "24px",
              }}
            >
              <Instagram sx={{}} />
            </IconButton>

            <img
              src="/social/discord-icon.svg"
              className="w-6 h-auto cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:opacity-80 hover:text-[#6DDABA]"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 mb-2 sm:flex-row justify-between items-center sm:mb-6 px-8">
        <div className="text-sm font-medium text-[#787EA0]">
          @&nbsp;2024&nbsp;-&nbsp;2025
        </div>
        <div className="flex w-full justify-between sm:w-auto flex-row items-center gap-4">
          <div className="text-sm font-medium text-[#515670]">Terms of Use</div>
          <div className="text-sm font-medium text-[#515670]">
            Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
}
