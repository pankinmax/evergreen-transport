"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { hero, navItems } from "@/data/company";

/**
 * Sticky site header. White, generously tall for a premium feel, with a
 * very subtle shadow and hairline border that appear only once the page
 * is scrolled.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-background/90 backdrop-blur-sm transition-shadow duration-300",
          scrolled
            ? "border-b border-border shadow-[var(--shadow-header)]"
            : "border-b border-transparent",
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between gap-6 lg:h-24">
            <Logo />

            {/* Desktop navigation */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 lg:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button asChild>
                <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
              </Button>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full text-foreground transition-colors hover:bg-surface lg:hidden"
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
