import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

const BuyCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "z-10 flex flex-col justify-between rounded-lg border-[1px] border-[#E6E8F8] dark:border-[#24293A] bg-card text-card-foreground shadow-sm bg-[#dadcef] hover:bg-[#e6e7f7] dark:bg-[#11121C] overflow-hidden transition-transform duration-500",
      className
    )}
    {...props}
  />
));
BuyCard.displayName = "Card";

const BuyCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-8 pb-0", className)}
    {...props}
  />
));
BuyCardHeader.displayName = "CardHeader";

const BuyCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="flex flex-row justify-between items-center pt-3 gap-2">
      <div className="flex flex-row items-center gap-6">
        <Image
          src="https://res.cloudinary.com/dq9alywlv/image/upload/v1736675935/photo_2024-08-07_22-45-47_nskbxw.jpg"
          alt="placeholder"
          width={64}
          height={64}
          className="w-16 h-16 rounded-lg"
        />
        <div className="flex flex-col items-start gap-1">
          <h3
            ref={ref}
            className={cn(
              "text-base font-medium leading-6 tracking-tight line-clamp-3 hover:underline",
              className
            )}
            {...props}
          />
          <h5
            className={cn(
              "text-base font-medium leading-6 tracking-tight line-clamp-3 hover:underline text-[#515670]"
            )}
          >
            Me
          </h5>
        </div>
      </div>
      <Image
        src="/event/refresh.svg"
        alt="placeholder"
        width={24}
        height={24}
        className="w-6 h-6 transition-transform duration-500 cursor-pointer hidden dark:flex"
      />
      <Image
        src="/event/refresh-light.svg"
        alt="placeholder"
        width={24}
        height={24}
        className="w-6 h-6 transition-transform duration-500 cursor-pointer flex dark:hidden"
      />
    </div>
  );
});
BuyCardTitle.displayName = "CardTitle";

const BuyCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
BuyCardDescription.displayName = "CardDescription";

const BuyCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-[32px]", className)} {...props} />
));
BuyCardContent.displayName = "CardContent";

const BuyCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-2 pt-0", className)}
    {...props}
  />
));
BuyCardFooter.displayName = "CardFooter";

export {
  BuyCard,
  BuyCardHeader,
  BuyCardFooter,
  BuyCardTitle,
  BuyCardDescription,
  BuyCardContent,
};
