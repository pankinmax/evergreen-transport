import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { getSocialIcon } from "@/components/ui/social-icons";
import {
  company,
  footerLinks,
  socialLinks,
} from "@/data/company";

/**
 * Site footer. A calm, dark forest-green surface that anchors the page,
 * with contact details, quick links and social profiles read from data.
 */
export function Footer() {
  const year = 2026; // Static build year — avoids hydration mismatch.

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div className="flex flex-col gap-6">
            <Logo variant="inverted" />
            <p className="max-w-xs text-pretty leading-relaxed text-primary-foreground/70">
              {company.tagline}. Locally owned and operated since{" "}
              {company.foundedYear}.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <li>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-3 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="size-4 text-accent" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={company.emailHref}
                  className="inline-flex items-center gap-3 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="size-4 text-accent" />
                  {company.email}
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{company.address.full}</span>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <FooterColumn title="Company" links={footerLinks.company} />

          {/* Services links */}
          <FooterColumn title="Services" links={footerLinks.services} />

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/60">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <li>{company.hours.weekdays}</li>
              <li>{company.hours.weekend}</li>
              <li className="text-accent">{company.hours.note}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-primary-foreground/15 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-primary-foreground/60">
              © {year} {company.legalName}. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = getSocialIcon(social.icon);
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="size-[1.1rem]" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground/60">
        {title}
      </h3>
      <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
