"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-[#c6c8da] dark:bg-[#272A3A] flex flex-row justify-between",
      className
    )}
    {...props}
  >
    {value && value >= 50 && (
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all bg-[#239C79] dark:bg-[#6DDABA]"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          // backgroundColor: "#6DDABA",
          borderRadius: "100px",
        }}
      />
    )}
    {value && value < 50 && (
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 transition-all bg-[#D65959] dark:bg-[#FF8989]"
        style={{
          transform: `translateX(${value || 0}%)`,
          // backgroundColor: "#FF8989",
          borderRadius: "100px",
        }}
      />
    )}
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
