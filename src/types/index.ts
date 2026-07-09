import type { LucideIcon } from "lucide-react";

/** A single primary navigation entry. */
export interface NavItem {
  label: string;
  href: string;
}

/** A trust indicator shown beneath the hero copy. */
export interface TrustIndicator {
  label: string;
}

/** A service the company offers. */
export interface Service {
  /** Lucide icon name, resolved in the Services section. */
  icon: string;
  title: string;
  description: string;
}

/** A headline statistic used to build credibility. */
export interface Stat {
  value: string;
  label: string;
}

/** A vehicle category within the fleet. */
export interface FleetVehicle {
  icon: string;
  name: string;
  description: string;
  capacity: string;
}

/** A single value proposition / reason to choose the company. */
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

/** A method of contacting the company, rendered in the contact section. */
export interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  href: string;
}

/** A social profile link. */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/** Utility type re-export for icon maps. */
export type IconComponent = LucideIcon;
