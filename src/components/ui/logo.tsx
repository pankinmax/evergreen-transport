import Link from "next/link";

import { cn } from "@/lib/utils";
import { company } from "@/data/company";

interface LogoProps {
  className?: string;
  /** Use light text/border for placement on the dark footer. */
  variant?: "default" | "inverted";
}

/**
 * Placeholder logo. Intentionally a simple "LOGO" block — no real brand
 * mark — while keeping a premium, aligned appearance. Swap this component
 * out for the real logo when available.
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  const inverted = variant === "inverted";
  return (
    <Link
      href="#home"
      aria-label={`${company.name} — home`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-md",
        className,
      )}
    >
      <span
        className={cn(
          "grid h-10 w-10 place-items-center rounded-lg text-[0.7rem] font-bold tracking-widest transition-colors",
          inverted
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground",
        )}
      >
        LOGO
      </span>
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {company.name}
      </span>
    </Link>
  );
}
