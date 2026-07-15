/**
 * Single source of truth for the header & hero.
 * Headline / description use clearly-marked placeholders — replace with
 * the client's real content. Contact + nav are functional values.
 */

export const company = {
  name: "Evergreen Transport",
  // Displayed in the local NZ format; the tel: link keeps the full
  // international number so it dials correctly from anywhere.
  phone: "021 783 058",
  phoneHref: "tel:+6421783058",
  smsHref: "sms:+6421783058",
  email: "derek@evergreen.nz",
  emailHref: "mailto:derek@evergreen.nz",
  addressLines: ["9C Vernon Street", "Auckland Central", "New Zealand"],
  hours: "[ Mon – Sun · placeholder hours ]",
  facebookHref:
    "https://www.facebook.com/profile.php?id=61553892484019&ref=embed_page",
  foundedYear: 2009,
};

/**
 * The client's contact-first CTA strategy: no booking buttons anywhere.
 * A single "Contact Us" button opens a menu offering these direct actions.
 */
export const contactCta = { label: "Contact Us" };

export const contactActions = [
  {
    label: "Call Us",
    hint: company.phone,
    href: company.phoneHref,
    icon: "Phone",
  },
  {
    label: "Text Us",
    hint: company.phone,
    href: company.smsHref,
    icon: "MessageCircle",
  },
  {
    label: "Email Us",
    hint: company.email,
    href: company.emailHref,
    icon: "Mail",
  },
];

/** "Contact" is not a nav item — the Contact Us button covers it. */
export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
];

export const hero = {
  /** Small uppercase label above the headline. */
  label: "Welcome to Evergreen",
  /** Headline — up to three lines. */
  headlineLines: ["Affordable & Dependable", "Airport and Event", "Transport"],
  description:
    "Providing comfortable, reliable transport for airport transfers and special events throughout Auckland. We focus on punctual service, spacious vehicles and a smooth travel experience from pickup to destination.",
  primaryCta: { label: "Contact Us" },
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
  heading: "Reliable, Comfortable & Sustainable Transport",
  paragraphs: [
    "Welcome to Evergreen Transport, your trusted choice for airport transfers, event transport and specialist transport services throughout Auckland. We are committed to providing dependable journeys while operating with an environmentally responsible approach whenever possible.",
    "Our goal is to make every trip comfortable, punctual and stress-free. Whether you're travelling to the airport, attending an important event or arranging a specialised transport service, our experienced team is here to ensure everything runs smoothly.",
    "Travel with confidence in our spacious, well-maintained vehicles and enjoy friendly, reliable service from pickup to destination.",
  ],
  cta: { label: "Contact Us" },
  imageLabel: "Company photo",
  image: {
    src: "/images/evergreen-transport-photo1.jpg",
    alt: "Evergreen Transport vehicle and team providing transport in Auckland",
  },
};

/* --- Services ------------------------------------------------------- */
export const services = {
  label: "Our Services",
  heading: "What We Do",
  description:
    "From airport transfers to companion driving and specialist courier work, we cover a wide range of transport needs across Auckland.",
  /** Photos shown between each pair of service cards. */
  photos: [
    {
      src: "https://images.pexels.com/photos/7464537/pexels-photo-7464537.jpeg?auto=compress&cs=tinysrgb&w=1400",
      alt: "A driver sharing a warm, friendly moment with passengers inside the van before the journey",
    },
    {
      src: "https://images.unsplash.com/photo-1663668112782-ac5599d3b018?auto=format&fit=crop&w=1400&q=80",
      alt: "Luggage loaded into the boot of a clean, spacious vehicle ready for an airport transfer",
    },
  ],
  items: [
    {
      icon: "BusFront",
      title: "Passenger Transport",
      description:
        "Safe and comfortable transport for individuals and groups, tailored to different travel needs.",
      cta: { label: "Contact Us" },
    },
    {
      icon: "Car",
      title: "Companion Driving",
      description:
        "Reliable driving support for people who need a hand getting to appointments, the shops, or everyday activities.",
      cta: { label: "Contact Us" },
    },
    {
      icon: "PawPrint",
      title: "Pet Transport",
      description:
        "Caring, secure transport for pets, so they travel safely and comfortably.",
      cta: { label: "Contact Us" },
    },
    {
      icon: "Package",
      title: "Specialist Courier Work",
      description:
        "Courier services for specialised deliveries that need care, reliability and attention to detail.",
      cta: { label: "Contact Us" },
    },
  ],
};

/* --- Benefits ------------------------------------------------------- */
export const benefits = {
  label: "Our Benefits",
  heading: "Why Choose Evergreen",
  description:
    "We're a local Auckland team, and we keep it simple: turn up on time, look after our passengers, and do what we said we'd do.",
  items: [
    {
      icon: "ShieldCheck",
      title: "Trusted & Reliable Service",
      text: "Dependable transport you can count on, delivered with care and professionalism.",
    },
    {
      icon: "Clock",
      title: "Safe and Comfortable Journeys",
      text: "We focus on smooth, secure and comfortable travel from pickup to destination.",
    },
    {
      icon: "Sparkles",
      title: "Experienced Professional Drivers",
      text: "Skilled drivers committed to safety, reliability and looking after our customers.",
    },
    {
      icon: "MapPin",
      title: "Flexible Transport Solutions",
      text: "Transport options to suit different schedules, needs and situations.",
    },
    {
      icon: "Headset",
      title: "Personalised Customer Care",
      text: "Friendly, supportive service with attention to every customer's needs.",
    },
    {
      icon: "Wallet",
      title: "Available When You Need Us",
      text: "Flexible support whenever you need reliable transport assistance.",
    },
  ],
};

/* --- Footer --------------------------------------------------------- */
export const footer = {
  tagline: "Reliable airport and event transport across Auckland.",
  usefulLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "Contact", href: "#contact" },
  ],
  facebook: {
    name: "Evergreen Transport",
    description:
      "Follow us on Facebook for updates, availability and a look behind the scenes.",
    cta: {
      label: "Visit Facebook",
      href: "https://www.facebook.com/profile.php?id=61553892484019&ref=embed_page",
    },
  },
};
