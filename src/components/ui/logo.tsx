import Link from "next/link";
import { BusFront } from "lucide-react";

import { cn } from "@/lib/utils";
import { company } from "@/data/company";

/**
 * Wordmark + monogram. Supports a light variant for placement over the
 * dark hero image and a dark variant for the scrolled white header.
 * (Placeholder mark — swap for the client's real logo when supplied.)
 */
export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const light = variant === "light";
  return (
    <Link
      href="#home"
      aria-label={`${company.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "grid h-11 w-11 place-items-center rounded-xl transition-colors",
          light
            ? "border border-white/40 bg-white/10 text-white backdrop-blur-sm"
            : "bg-evergreen text-white shadow-[var(--shadow-soft)]",
        )}
      >
        <BusFront className="size-[1.35rem]" strokeWidth={2.25} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[1.05rem] font-extrabold tracking-tight transition-colors",
            light ? "text-white" : "text-ink",
          )}
        >
          Evergreen
        </span>
        <span
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.28em] transition-colors",
            light ? "text-white/70" : "text-muted",
          )}
        >
          Transport
        </span>
      </span>
    </Link>
  );
}
