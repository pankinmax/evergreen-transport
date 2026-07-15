"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { ContactButton } from "@/components/contact/contact-button";
import { useContactMenu } from "@/components/contact/contact-menu";
import { navItems } from "@/data/company";

/** Slide-in mobile navigation with large touch targets. */
export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { open: openContactMenu } = useContactMenu();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    // Move focus into the dialog so keyboard users land inside it.
    closeRef.current?.focus();
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
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center rounded-xl text-muted transition-colors hover:bg-panel hover:text-ink"
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

            {/* Primary CTA — closes the panel, then opens the contact menu. */}
            <div className="border-t border-line px-6 py-6">
              <ContactButton
                size="lg"
                className="group w-full justify-center"
                onClick={() => {
                  onClose();
                  openContactMenu();
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
