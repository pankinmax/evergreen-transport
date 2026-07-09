import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { company } from "@/data/company";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.evergreentransport.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Evergreen Transport provides reliable freight, courier, warehousing and refrigerated transport services across New Zealand. Get a fast, competitive quote today.",
  keywords: [
    "transport",
    "freight",
    "logistics",
    "New Zealand",
    "courier",
    "warehousing",
    "refrigerated transport",
    "container cartage",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Reliable freight and logistics across Aotearoa. One partner, nationwide reach.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description:
      "Reliable freight and logistics across Aotearoa. One partner, nationwide reach.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#14432a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        {/* Skip link for keyboard & screen-reader users */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
