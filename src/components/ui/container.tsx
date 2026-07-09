import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Centered content column with responsive gutters.
 * Every section uses this to guarantee consistent horizontal rhythm.
 */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
