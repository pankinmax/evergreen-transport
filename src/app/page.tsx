import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Fleet } from "@/components/sections/fleet";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { company } from "@/data/company";

/**
 * Home page. Sections are composed in a deliberate narrative order:
 * hook → what we do → who we are → proof → invitation → contact.
 */
export default function Home() {
  return (
    <>
      {/* Organisation structured data for richer search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: company.name,
            legalName: company.legalName,
            description: company.tagline,
            telephone: company.phone,
            email: company.email,
            foundingDate: String(company.foundedYear),
            address: {
              "@type": "PostalAddress",
              streetAddress: company.address.line1,
              addressLocality: "Auckland",
              addressCountry: "NZ",
            },
            areaServed: "New Zealand",
          }),
        }}
      />

      <Hero />
      <Services />
      <About />
      <Fleet />
      <CTA />
      <Contact />
    </>
  );
}
