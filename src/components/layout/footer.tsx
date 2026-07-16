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
    <footer id="contact" className="bg-charcoal text-white/70">
      <Container className="py-14 lg:py-16">
        {/* Brand */}
        <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <Logo />
          <p className="max-w-md text-pretty leading-relaxed text-white/65">
            {footer.tagline}
          </p>
        </div>

        {/* Columns — 1 / 2 / 3 across mobile, tablet, desktop */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Useful Links */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
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
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
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
                <span className="flex flex-col">
                  {company.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>
              </li>
              <li className="inline-flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-evergreen" />
                <span>{company.hours}</span>
              </li>
            </ul>
          </div>

          {/* Facebook Page */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <FooterHeading>Facebook Page</FooterHeading>
            {/* Clean, rounded Facebook card — same language as the site's cards. */}
            <div className="mt-6 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white">
                <FacebookIcon className="size-6" />
              </span>
              <h4 className="mt-4 text-lg font-extrabold tracking-tight text-white">
                {footer.facebook.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {footer.facebook.description}
              </p>
              <Button
                asChild
                variant="outlineLight"
                size="md"
                className="mt-5 w-full"
              >
                <a
                  href={footer.facebook.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className="size-[1.05rem]" />
                  {footer.facebook.cta.label}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom — centred copyright, with a subtle developer credit pinned
            bottom-right on larger screens and stacked below on mobile. */}
        <div className="relative border-t border-white/10 pt-6 text-center text-sm text-white/60">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-white/40 sm:absolute sm:right-0 sm:top-6 sm:mt-0">
            by Maksim Pankin
          </p>
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
