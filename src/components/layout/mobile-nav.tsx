"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { company, hero, navItems } from "@/data/company";

/** Slide-in mobile navigation with large touch targets. */
export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-ink/30"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            transition={{ duration: 0.25 }}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col bg-background shadow-[var(--shadow-image)]"
            variants={{ open: { x: 0 }, closed: { x: "100%" } }}
            transition={{ type: "tween", duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-xl text-muted transition-colors hover:bg-panel hover:text-ink"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: 24 },
                  }}
                  transition={{ delay: open ? 0.12 + i * 0.05 : 0 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center rounded-xl px-4 py-3.5 text-lg font-semibold tracking-tight text-ink transition-colors hover:bg-panel"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-line px-6 py-6">
              <Button asChild size="lg" className="w-full">
                <Link href={hero.primaryCta.href} onClick={onClose}>
                  {hero.primaryCta.label}
                </Link>
              </Button>
              <a
                href={company.phoneHref}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-forest"
              >
                <Phone className="size-4" />
                {company.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
