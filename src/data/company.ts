/**
 * Single source of truth for the header & hero.
 * Headline / description use clearly-marked placeholders — replace with
 * the client's real content. Contact + nav are functional values.
 */

export const company = {
  name: "Evergreen Transport",
  phone: "0800 000 000",
  phoneHref: "tel:0800000000",
  email: "info@example.com",
  emailHref: "mailto:info@example.com",
  address: "[ Placeholder Street, Auckland, New Zealand ]",
  hours: "[ Mon – Sun · placeholder hours ]",
  facebookHref: "#",
  foundedYear: 2009,
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  /** Small uppercase label above the headline. */
  label: "Welcome to Evergreen",
  /** Headline — up to three lines. */
  headlineLines: ["Affordable & Dependable", "Airport and Event", "Transport"],
  description:
    "Providing comfortable, reliable transport for airport transfers and special events throughout Auckland. We focus on punctual service, spacious vehicles and a smooth travel experience from pickup to destination.",
  primaryCta: { label: "Book Now", href: "#contact" },
  secondaryCta: { label: "Our Services", href: "#services" },
  badges: ["Reliable", "NZ Wide", "Fast Response"],
  /**
   * Temporary royalty-free full-bleed photograph (Unsplash) — a passenger
   * van driving along a scenic New Zealand coastal road in warm daylight.
   * Daytime, a modern passenger vehicle on the move, a recognisable NZ road.
   * Easily replaced by the client's own photo.
   */
  image: {
    src: "https://images.unsplash.com/photo-1599117486507-195c04e10dae?auto=format&fit=crop&w=2000&q=80",
    alt: "A passenger van driving along a scenic New Zealand coastal road in warm daylight",
  },
};

/* --- About ---------------------------------------------------------- */
export const about = {
  label: "About Us",
  heading: "[ About Evergreen ]",
  paragraphs: [
    "[ Placeholder paragraph — this text will be replaced with the client's own words about the company. Keep it to two or three short, easy-to-read sentences. ]",
    "[ Placeholder paragraph — a second short block of copy describing the people, the vehicles and what makes the experience feel premium and dependable. ]",
  ],
  cta: { label: "Learn More", href: "#contact" },
  imageLabel: "[ Company Photo ]",
  image: {
    src: "https://images.pexels.com/photos/12555019/pexels-photo-12555019.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "A friendly, professional driver smiling from the window of a passenger vehicle",
  },
};

/* --- Services ------------------------------------------------------- */
export const services = {
  label: "Our Services",
  heading: "[ Our Services ]",
  description:
    "[ Short placeholder description of the services offered — replace with the client's own copy. ]",
  /** Photos shown between each pair of service cards. */
  photos: [
    {
      src: "https://images.pexels.com/photos/7464537/pexels-photo-7464537.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Passengers enjoying a comfortable ride together",
    },
    {
      src: "https://images.pexels.com/photos/27065579/pexels-photo-27065579.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "A dog travelling safely and comfortably in the car",
    },
  ],
  items: [
    {
      icon: "BusFront",
      title: "Passenger Transport",
      description: "[ Placeholder description for this service. ]",
      cta: { label: "Book Now", href: "#contact" },
    },
    {
      icon: "Car",
      title: "Companion Driving",
      description: "[ Placeholder description for this service. ]",
      cta: { label: "Book Now", href: "#contact" },
    },
    {
      icon: "PawPrint",
      title: "Pet Transport",
      description: "[ Placeholder description for this service. ]",
      cta: { label: "Book Now", href: "#contact" },
    },
    {
      icon: "Package",
      title: "Specialist Courier Work",
      description: "[ Placeholder description for this service. ]",
      cta: { label: "Book Now", href: "#contact" },
    },
  ],
};

/* --- Benefits ------------------------------------------------------- */
export const benefits = {
  label: "Our Benefits",
  heading: "[ Why Choose Evergreen ]",
  description:
    "[ Short placeholder description of the benefits — replace with real copy. ]",
  items: [
    { icon: "ShieldCheck", title: "[ Benefit One ]", text: "[ Placeholder sentence describing this benefit in a few words. ]" },
    { icon: "Clock", title: "[ Benefit Two ]", text: "[ Placeholder sentence describing this benefit in a few words. ]" },
    { icon: "Sparkles", title: "[ Benefit Three ]", text: "[ Placeholder sentence describing this benefit in a few words. ]" },
    { icon: "MapPin", title: "[ Benefit Four ]", text: "[ Placeholder sentence describing this benefit in a few words. ]" },
    { icon: "Headset", title: "[ Benefit Five ]", text: "[ Placeholder sentence describing this benefit in a few words. ]" },
    { icon: "Wallet", title: "[ Benefit Six ]", text: "[ Placeholder sentence describing this benefit in a few words. ]" },
  ],
};

/* --- Footer --------------------------------------------------------- */
export const footer = {
  tagline:
    "[ Placeholder tagline — a short line about Evergreen Transport goes here. ]",
  usefulLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ],
  facebook: {
    text: "[ Placeholder text inviting visitors to follow Evergreen Transport on Facebook. ]",
    cta: { label: "Visit Facebook", href: "#" },
  },
  designedBy: "[ Designed by placeholder ]",
};
