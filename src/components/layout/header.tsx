"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { ContactButton } from "@/components/contact/contact-button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { company, navItems } from "@/data/company";

/**
 * Fixed header floating over the hero. Transparent with white nav, logo and
 * outlined CTA while at the top; on scroll it transitions (300ms) to a white,
 * softly-blurred bar with dark navigation and a subtle shadow.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // A thin band around the upper-middle of the viewport decides "active".
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-line bg-background/85 shadow-[var(--shadow-header)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container>
          {/* Height comes from --header-height, the same variable the section
              scroll offset is derived from — they can never drift apart. */}
          <div className="flex h-[var(--header-height)] items-center justify-between gap-8">
            <Logo />

            {/* Centred navigation */}
            <nav
              aria-label="Primary"
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
            >
              {navItems.map((item) => {
                const isActive = item.href === `#${activeId}`;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-4 py-2 text-[0.95rem] font-semibold tracking-tight transition-colors hover:text-evergreen",
                      // The section currently in view is accented in evergreen.
                      isActive
                        ? "text-evergreen"
                        : scrolled
                          ? "text-charcoal/80"
                          : "text-white/85",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions — click-to-call. (The booking CTA was removed at the
                client's request; there is no booking button anywhere.) */}
            <div className="hidden items-center gap-6 lg:flex">
              <a
                href={company.phoneHref}
                className={cn(
                  "group inline-flex items-center gap-2.5 text-[0.95rem] font-bold tracking-tight transition-colors",
                  scrolled
                    ? "text-ink hover:text-forest"
                    : "text-white hover:text-white/80",
                )}
              >
                <span
                  className={cn(
                    "grid h-9 w-9 place-items-center rounded-lg border transition-colors",
                    scrolled
                      ? "border-line-strong text-evergreen group-hover:border-evergreen"
                      : "border-white/40 text-white group-hover:border-white",
                  )}
                >
                  <Phone className="size-[1.05rem]" />
                </span>
                {/* Number hides below xl so the centred nav never collides with
                    the actions on narrower desktops (e.g. Nest Hub, 1024px).
                    The clickable phone icon always stays visible. */}
                <span className="hidden xl:inline">{company.phone}</span>
              </a>

              {/* Primary CTA — opens the contact menu (no booking anywhere) */}
              <ContactButton
                size="md"
                variant={scrolled ? "primary" : "outlineLight"}
                className="group"
              />
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className={cn(
                "grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden",
                scrolled
                  ? "text-ink hover:bg-panel"
                  : "text-white hover:bg-white/10",
              )}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
