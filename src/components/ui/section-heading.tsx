import { cn } from "@/lib/utils";

/**
 * Shared section header — matches the hero's language: a small uppercase
 * evergreen label, a large extrabold ink heading and a comfortable
 * supporting line. Used across every section for one consistent voice.
 */
export function SectionHeading({
  label,
  heading,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  label: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" recolours the heading/description for placement on a dark surface. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[2px] text-evergreen">
        <span className="h-2 w-2 bg-evergreen" aria-hidden />
        {label}
      </span>
      <h2
        className={cn(
          "mt-5 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-muted",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
