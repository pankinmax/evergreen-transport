import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The single content column for the whole site — header, hero, every
 * section and the footer. One shared gutter means every heading, paragraph,
 * button and image lines up on the same left/right edge at every breakpoint.
 */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[86rem] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16",
        className,
      )}
      {...props}
    />
  );
}
