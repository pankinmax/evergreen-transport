import { cn } from "@/lib/utils";

/**
 * Decorative, non-semantic accents.
 *
 * Large and soft, held at 2–5% opacity — they should register as atmosphere,
 * never as an object you notice. Each section gets one, placed to balance the
 * weight of its content (not scattered at random).
 */

/** A large, heavily-blurred colour wash. */
export function SoftBlob({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        className,
      )}
    />
  );
}

/** A large, thin outlined circle — a quiet geometric counterweight. */
export function Ring({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full border",
        className,
      )}
    />
  );
}

/**
 * Clips decorative children to the section box so they can never cause
 * horizontal scroll, while letting the section itself stay overflow-visible
 * (needed when content deliberately overlaps into the next section).
 */
export function DecorLayer({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {children}
    </div>
  );
}
