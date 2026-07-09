import {
  BusFront,
  Car,
  Clock,
  Headset,
  MapPin,
  Package,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/**
 * Registry mapping the icon-name strings used in `data/company.ts` to their
 * Lucide components, keeping the data layer free of React imports.
 */
export const iconMap = {
  BusFront,
  Car,
  PawPrint,
  Package,
  ShieldCheck,
  Clock,
  Sparkles,
  MapPin,
  Headset,
  Wallet,
} satisfies Record<string, LucideIcon>;

export function getIcon(name: string): LucideIcon {
  return iconMap[name as keyof typeof iconMap] ?? BusFront;
}
