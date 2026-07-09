import * as React from "react";

import { cn } from "@/lib/utils";

/** Centered content column with responsive gutters. */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[86rem] px-6 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}
