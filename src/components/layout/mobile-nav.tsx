"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { company, hero, navItems } from "@/data/company";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-height slide-in panel for mobile navigation. Large touch targets,
 * a subtle staggered reveal of the links, and a backdrop that closes on tap.
 */
export function MobileNav({ open, onClose }: MobileNavProps) {
  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-foreground/25"
            variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
            transition={{ duration: 0.25 }}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col bg-background shadow-[var(--shadow-card)]"
            variants={{
              open: { x: 0 },
              closed: { x: "100%" },
            }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
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
                    className="flex items-center rounded-xl px-4 py-3.5 text-lg font-medium text-foreground transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-border px-6 py-6">
              <Button asChild size="lg" className="w-full">
                <Link href={hero.primaryCta.href} onClick={onClose}>
                  {hero.primaryCta.label}
                </Link>
              </Button>
              <a
                href={company.phoneHref}
                className="mt-4 block text-center text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                or call {company.phone}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
