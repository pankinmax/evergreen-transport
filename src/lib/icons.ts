import {
  Clock,
  Container,
  Headset,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Snowflake,
  Truck,
  Van,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

/**
 * Registry mapping the icon name strings used in `data/company.ts`
 * to their concrete Lucide components. This keeps the data layer free
 * of React imports while staying fully type-safe.
 */
export const iconMap = {
  Clock,
  Container,
  Headset,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Snowflake,
  Truck,
  Van,
  Warehouse,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

/** Resolve an icon name to its component, falling back gracefully. */
export function getIcon(name: string): LucideIcon {
  return iconMap[name as IconName] ?? Truck;
}
