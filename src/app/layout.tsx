import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

// import { ThirdwebProvider } from "thirdweb/react";
import Provider from "@/providers";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import Footerpad from "@/components/footerpad";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Better Weather",
  description:
    "The innovative decentralized prediction market platform that allows users to trade on the outcomes of future weather events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-poppins flex justify-center`}
      >
        <Provider>
          <Navbar />
          {children}
          <Footerpad />
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
