import { cn } from "@/lib/utils";

/**
 * Very subtle, almost-invisible background decoration. A couple of soft
 * radial washes in the brand's accent colour. Purely decorative — never
 * distracting, never competing with content.
 */
export function BackgroundDecor({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -right-40 -top-32 h-[32rem] w-[32rem] rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="absolute -left-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-primary/[0.04] blur-3xl" />
    </div>
  );
}

/**
 * A faint dotted grid, useful behind the hero. Kept extremely low
 * contrast so it reads as texture rather than pattern.
 */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        "[background-image:radial-gradient(circle_at_center,var(--color-border-strong)_1px,transparent_1px)]",
        "[background-size:28px_28px]",
        "[mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]",
        "opacity-40",
        className,
      )}
    />
  );
}
