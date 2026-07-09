import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Rounded image slot. When a `src` is provided it renders a real photo
 * (object-cover); otherwise it shows an elegant, finished-looking
 * placeholder — a soft panel with a centered icon and label.
 */
export function ImagePlaceholder({
  label,
  src,
  alt,
  sizes = "(max-width: 1024px) 100vw, 40vw",
  className,
  ratio = "aspect-[4/5]",
}: {
  label: string;
  src?: string;
  alt?: string;
  sizes?: string;
  className?: string;
  ratio?: string;
}) {
  if (src) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-line",
          ratio,
          className,
        )}
      >
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-panel",
        ratio,
        className,
      )}
    >
      <div className="absolute inset-3 rounded-xl border border-dashed border-line-strong/80" />
      <div className="relative flex flex-col items-center gap-4 text-faint">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-background shadow-[var(--shadow-soft)]">
          <ImageIcon className="size-7" aria-hidden />
        </span>
        <span className="text-sm font-semibold uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>
    </div>
  );
}
