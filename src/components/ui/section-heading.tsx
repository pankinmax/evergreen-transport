import { cn } from "@/lib/utils";

/**
 * Shared section header.
 *
 * A single vertical evergreen bar runs down the left of the label + heading.
 * It is the one consistent identity mark used by every section — deliberate
 * and systematic, rather than a decoration sprinkled here and there.
 */
export function SectionHeading({
  label,
  heading,
  description,
  tone = "light",
  className,
}: {
  label: string;
  heading: string;
  description?: string;
  /** "dark" recolours the heading/description for placement on a dark surface. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <div className="relative pl-6 lg:pl-7">
        {/* Vertical accent bar beside the heading */}
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-evergreen"
        />
        <span className="text-sm font-semibold uppercase tracking-[2px] text-evergreen">
          {label}
        </span>
        <h2
          className={cn(
            "mt-4 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]",
            dark ? "text-white" : "text-ink",
          )}
        >
          {heading}
        </h2>
      </div>

      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl pl-6 text-lg leading-relaxed md:max-w-2xl lg:pl-7",
            dark ? "text-white/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
