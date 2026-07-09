import type {
  ContactMethod,
  Feature,
  FleetVehicle,
  NavItem,
  Service,
  SocialLink,
  Stat,
  TrustIndicator,
} from "@/types";

/**
 * =====================================================================
 *  COMPANY DATA — Single source of truth
 * ---------------------------------------------------------------------
 *  Every piece of copy and contact detail on the website is read from
 *  this file. Replace the placeholder values below with the real
 *  Evergreen Transport details when they become available.
 * =====================================================================
 */

export const company = {
  name: "Evergreen Transport",
  legalName: "Evergreen Transport Ltd.",
  tagline: "Reliable freight & transport across New Zealand",
  foundedYear: 2009,

  /* --- Contact ------------------------------------------------------ */
  phone: "0800 000 000",
  phoneHref: "tel:0800000000",
  email: "hello@evergreentransport.co.nz",
  emailHref: "mailto:hello@evergreentransport.co.nz",

  address: {
    line1: "123 Logistics Way",
    line2: "Wiri, Auckland 2104",
    country: "New Zealand",
    full: "123 Logistics Way, Wiri, Auckland 2104, New Zealand",
    mapHref: "https://maps.google.com/?q=Wiri+Auckland+New+Zealand",
  },

  hours: {
    weekdays: "Mon – Fri: 6:00am – 6:00pm",
    weekend: "Sat: 8:00am – 1:00pm",
    note: "24/7 support for scheduled freight",
  },

  /* --- Social & profiles -------------------------------------------- */
  social: {
    facebook: "https://facebook.com/evergreentransport",
    googleBusiness: "https://g.page/evergreentransport",
    linkedin: "https://linkedin.com/company/evergreentransport",
    instagram: "https://instagram.com/evergreentransport",
  },
} as const;

/* --- Primary navigation --------------------------------------------- */
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Fleet", href: "#fleet" },
  { label: "Contact", href: "#contact" },
];

/* --- Hero ----------------------------------------------------------- */
export const hero = {
  eyebrow: "New Zealand owned & operated",
  title: "Transport your business can rely on, every single day.",
  subtitle:
    "Evergreen Transport delivers freight and logistics across Aotearoa with the care, punctuality and professionalism your customers expect. One partner, nationwide reach.",
  primaryCta: { label: "Get a Quote", href: "#contact" },
  secondaryCta: { label: "Our Services", href: "#services" },
  trustIndicators: [
    { label: "Reliable" },
    { label: "Experienced" },
    { label: "Nationwide" },
  ] satisfies TrustIndicator[],
};

/* --- Company stats -------------------------------------------------- */
export const stats: Stat[] = [
  { value: "15+", label: "Years on the road" },
  { value: "40", label: "Vehicles in our fleet" },
  { value: "98%", label: "On-time delivery rate" },
  { value: "24/7", label: "Freight support" },
];

/* --- Services ------------------------------------------------------- */
export const services: Service[] = [
  {
    icon: "Truck",
    title: "General Freight",
    description:
      "Palletised and loose freight moved safely between depots, warehouses and sites across the North and South Islands.",
  },
  {
    icon: "PackageCheck",
    title: "Courier & Parcel",
    description:
      "Fast, tracked same-day and overnight delivery for time-sensitive parcels, with proof of delivery on every job.",
  },
  {
    icon: "Warehouse",
    title: "Warehousing & Storage",
    description:
      "Secure short and long-term storage with inventory management, pick-and-pack and seamless dispatch.",
  },
  {
    icon: "Snowflake",
    title: "Refrigerated Transport",
    description:
      "Temperature-controlled vehicles keep perishable and chilled goods in perfect condition, door to door.",
  },
  {
    icon: "Container",
    title: "Container Cartage",
    description:
      "Import and export container movements coordinated with ports and yards to keep your supply chain flowing.",
  },
  {
    icon: "Route",
    title: "Scheduled Runs",
    description:
      "Dedicated, repeatable routes tailored to your business so you always know exactly when freight will arrive.",
  },
];

/* --- Why choose us -------------------------------------------------- */
export const features: Feature[] = [
  {
    icon: "ShieldCheck",
    title: "Fully insured & compliant",
    description:
      "Every load is covered and every vehicle meets New Zealand transport and safety standards.",
  },
  {
    icon: "Clock",
    title: "On-time, every time",
    description:
      "Live scheduling and experienced drivers mean your freight arrives when you were promised it would.",
  },
  {
    icon: "MapPin",
    title: "Nationwide coverage",
    description:
      "From Cape Reinga to Bluff, our network reaches the whole country with one point of contact.",
  },
  {
    icon: "Headset",
    title: "People who answer",
    description:
      "A real local team who know your account and pick up the phone whenever you need them.",
  },
];

/* --- Fleet ---------------------------------------------------------- */
export const fleet: FleetVehicle[] = [
  {
    icon: "Truck",
    name: "Heavy Freight Trucks",
    description:
      "Line-haul rigs for large-scale palletised freight between major centres.",
    capacity: "Up to 24 tonnes",
  },
  {
    icon: "Container",
    name: "Curtain-side Trailers",
    description:
      "Fast side-loading for easy access and secure transport of mixed freight.",
    capacity: "Up to 14 pallets",
  },
  {
    icon: "Snowflake",
    name: "Refrigerated Units",
    description:
      "Temperature-controlled vehicles for chilled and frozen goods.",
    capacity: "−25°C to +25°C",
  },
  {
    icon: "Van",
    name: "Delivery Vans",
    description:
      "Nimble urban vans for couriers, parcels and last-mile delivery.",
    capacity: "Up to 1.2 tonnes",
  },
];

/* --- About ---------------------------------------------------------- */
export const about = {
  eyebrow: "About Evergreen",
  title: "A New Zealand transport partner you can build a business on.",
  paragraphs: [
    "For over fifteen years, Evergreen Transport has moved freight the length of the country for businesses that can't afford to be let down. What began as a single truck is now a nationwide operation built on the same principle it started with — do what you say you'll do.",
    "We invest in a modern, well-maintained fleet and in the people who drive it. That combination lets us offer the reliability of a national carrier with the personal service of a local team who genuinely care about your delivery.",
  ],
  points: [
    "Locally owned and operated since 2009",
    "Modern, regularly serviced fleet",
    "Experienced, professional drivers",
    "Transparent pricing with no surprises",
  ],
};

/* --- Contact -------------------------------------------------------- */
export const contactMethods: ContactMethod[] = [
  {
    icon: "Phone",
    label: "Call us",
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: "Mail",
    label: "Email us",
    value: company.email,
    href: company.emailHref,
  },
  {
    icon: "MapPin",
    label: "Visit us",
    value: company.address.full,
    href: company.address.mapHref,
  },
];

/* --- Social links (footer) ------------------------------------------ */
export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: company.social.facebook, icon: "Facebook" },
  { label: "LinkedIn", href: company.social.linkedin, icon: "Linkedin" },
  { label: "Instagram", href: company.social.instagram, icon: "Instagram" },
];

/* --- Footer link columns -------------------------------------------- */
export const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "General Freight", href: "#services" },
    { label: "Courier & Parcel", href: "#services" },
    { label: "Warehousing", href: "#services" },
    { label: "Refrigerated", href: "#services" },
  ],
} as const;
