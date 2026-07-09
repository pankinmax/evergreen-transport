import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FacebookIcon } from "@/components/ui/social-icons";
import { company, footer } from "@/data/company";

/**
 * Footer — a calm, dark-charcoal surface that anchors the page. Three
 * columns (Useful Links, Contact Us, Facebook Page) beneath the brand, with
 * a thin divider and the copyright / designed-by line below.
 */
export function Footer() {
  const year = 2026; // Static build year — avoids hydration mismatch.

  return (
    <footer id="contact" className="scroll-mt-24 bg-charcoal text-white/70">
      <Container className="py-20 lg:py-24">
        {/* Brand */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <Logo variant="light" />
          <p className="max-w-md text-pretty leading-relaxed text-white/55">
            {footer.tagline}
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 md:grid-cols-3">
          {/* Useful Links */}
          <div>
            <FooterHeading>Useful Links</FooterHeading>
            <ul className="mt-6 flex flex-col gap-3.5 text-[0.95rem]">
              {footer.usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-evergreen"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="mt-6 flex flex-col gap-4 text-[0.95rem]">
              <li>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-evergreen" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-evergreen" />
                  {company.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-evergreen" />
                <span>{company.address}</span>
              </li>
              <li className="inline-flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-evergreen" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>

          {/* Facebook Page */}
          <div>
            <FooterHeading>Facebook Page</FooterHeading>
            <div className="mt-6 flex flex-col items-start gap-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white">
                <FacebookIcon className="size-5" />
              </span>
              <p className="text-[0.95rem] leading-relaxed text-white/60">
                {footer.facebook.text}
              </p>
              <Button asChild variant="outlineLight" size="md">
                <a href={footer.facebook.cta.href}>
                  <FacebookIcon className="size-[1.05rem]" />
                  {footer.facebook.cta.label}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>{footer.designedBy}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
      {children}
    </h3>
  );
}
