import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const CustomCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full flex flex-col justify-between rounded-lg border-none bg-card text-card-foreground shadow-sm hover:bg-gray-200 cursor-pointer dark:bg-[#191B26] dark:hover:bg-[#212431] overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-lg ",
      className
    )}
    {...props}
  />
));
CustomCard.displayName = "Card";

const CustomCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-8", className)}
    {...props}
  />
));
CustomCardHeader.displayName = "CardHeader";

const CustomCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div className="flex flex-row items-center gap-5">
    <Image
      src="https://res.cloudinary.com/dq9alywlv/image/upload/v1726336180/samples/landscapes/nature-mountains.jpg"
      alt="placeholder"
      width={48}
      height={48}
      className="h-12 w-12 rounded-2xl"
    />
    <h3
      ref={ref}
      className={cn(
        "text-base font-medium leading-6 tracking-tight line-clamp-3",
        className
      )}
      {...props}
    />
  </div>
));
CustomCardTitle.displayName = "CardTitle";

const CustomCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CustomCardDescription.displayName = "CardDescription";

const CustomCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 mt-[-3px]", className)} {...props} />
));
CustomCardContent.displayName = "CardContent";

const CustomCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0", className)}
    {...props}
  />
));
CustomCardFooter.displayName = "CardFooter";

export {
  CustomCard,
  CustomCardContent,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardFooter,
  CustomCardDescription,
};
