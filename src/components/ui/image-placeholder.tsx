import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  /** Caption shown under the icon. Defaults to "PHOTO". */
  label?: string;
  /** Aspect ratio utility class, e.g. "aspect-square". */
  ratio?: string;
}

/**
 * Elegant image placeholder. Designed to look like intentional, finished
 * artwork — a soft surface with a centered icon — rather than a broken
 * image. Replace with a real <Image /> when photography is available.
 */
export function ImagePlaceholder({
  className,
  label = "PHOTO",
  ratio = "aspect-[4/5]",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface",
        ratio,
        className,
      )}
    >
      {/* Very subtle inner frame to add depth without heavy shadows */}
      <div className="absolute inset-3 rounded-xl border border-dashed border-border-strong/70" />

      <div className="relative flex flex-col items-center gap-3 text-subtle">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-background shadow-[var(--shadow-soft)]">
          <ImageIcon className="size-6" aria-hidden />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>
    </div>
  );
}
