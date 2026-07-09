import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { QuickContact } from "@/components/layout/quick-contact";
import { company } from "@/data/company";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://www.evergreentransport.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — New Zealand Freight & Transport`,
    template: `%s | ${company.name}`,
  },
  description:
    "Evergreen Transport moves freight the length of New Zealand — reliable, nationwide logistics and transport, on time, every time.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — New Zealand Freight & Transport`,
    description: "Reliable, nationwide freight and logistics across Aotearoa.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#123a27",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" className={`${manrope.variable} h-full`}>
      <body className="min-h-full antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-forest-foreground"
        >
          Skip to content
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
        <QuickContact />
      </body>
    </html>
  );
}
