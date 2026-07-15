import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { company } from "@/data/company";

/**
 * Official Evergreen Transport logo.
 *
 * The asset is a transparent-background, brand-green lockup (vehicle mark
 * above the wordmark), so it reads correctly on both the dark hero header /
 * footer and the white scrolled header — no recolouring needed.
 *
 * Intrinsic dimensions are declared exactly (700×391), so the mark can never
 * stretch or distort, and there's no layout shift while it loads. `w-auto`
 * keeps the aspect ratio while the height scales across breakpoints; the
 * 88px header height is unchanged.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#home"
      aria-label={`${company.name} — home`}
      className={cn("-ml-1.5 inline-flex items-center lg:-ml-2.5", className)}
    >
      <Image
        src="/images/evergreen-transport-logo.png"
        alt={`${company.name} logo`}
        width={700}
        height={391}
        priority
        sizes="(max-width: 640px) 110px, (max-width: 1024px) 125px, 145px"
        className="h-13 w-auto object-contain sm:h-14 lg:h-17"
      />
    </Link>
  );
}
