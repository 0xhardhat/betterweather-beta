'use client'

import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex flex-col justify-between rounded-lg border-none bg-card text-card-foreground shadow-sm cursor-pointer bg-[#dadcef] hover:bg-[#e6e7f7] dark:bg-[#191B26] dark:hover:bg-[#212431] overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg ",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-8", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-stretch pt-3 gap-2">
      <h3
        ref={ref}
        className={cn(
          "text-base font-medium leading-6 tracking-tight line-clamp-3 hover:underline hover:dark:text-[#6DDABA] hover:text-[#39997D]",
          className
        )}
        onClick={() => {
          router.push("/event");
        }}
        {...props}
      />
      <Image
        src="https://res.cloudinary.com/dq9alywlv/image/upload/v1726336180/samples/landscapes/nature-mountains.jpg"
        alt="placeholder"
        width={48}
        height={48}
        className="h-12 w-12 rounded-lg"
      />
    </div>
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-[6px] mt-[-3px]", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
