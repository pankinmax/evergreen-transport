"use client";

import {
  createContext,
  createElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { company, contactActions } from "@/data/company";

/* --- Context -------------------------------------------------------- */

const ContactMenuContext = createContext<{ open: () => void } | null>(null);

/** Opens the shared contact menu from anywhere in the tree. */
export function useContactMenu() {
  const ctx = useContext(ContactMenuContext);
  if (!ctx) {
    throw new Error("useContactMenu must be used inside <ContactMenuProvider>");
  }
  return ctx;
}

/* --- Icons ---------------------------------------------------------- */

const ICONS: Record<string, LucideIcon> = {
  Phone,
  MessageCircle,
  Mail,
};

/* --- Provider ------------------------------------------------------- */

export function ContactMenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ContactMenuContext.Provider value={{ open }}>
      {children}
      <ContactMenu isOpen={isOpen} onClose={close} />
    </ContactMenuContext.Provider>
  );
}

/* --- Menu ----------------------------------------------------------- */

/**
 * Contact menu — a bottom sheet on mobile, a centred modal from `sm` up.
 * Same panel, same content; only the anchoring changes, so it reads as a
 * native part of the site rather than a bolted-on popup.
 */
function ContactMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Close contact menu"
            onClick={onClose}
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-menu-title"
            className="relative w-full rounded-t-3xl bg-background p-6 shadow-[var(--shadow-image)] sm:max-w-md sm:rounded-3xl sm:p-8"
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Grab handle — reads as a sheet on mobile */}
            <span
              aria-hidden
              className="mx-auto mb-5 block h-1 w-10 rounded-full bg-line-strong sm:hidden"
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="contact-menu-title"
                  className="text-xl font-extrabold tracking-tight text-ink"
                >
                  Get in touch
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Choose how you&apos;d like to reach {company.name}.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close contact menu"
                className="-mr-1 -mt-1 grid size-11 shrink-0 place-items-center rounded-xl text-muted transition-colors hover:bg-panel hover:text-ink"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Actions */}
            <ul className="mt-6 flex flex-col gap-2.5">
              {contactActions.map((action) => {
                const Icon = ICONS[action.icon] ?? Phone;
                return (
                  <li key={action.label}>
                    <a
                      href={action.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center gap-4 rounded-2xl border border-line bg-background p-4 transition-[background-color,border-color,transform] duration-200",
                        "hover:-translate-y-0.5 hover:border-evergreen/40 hover:bg-panel",
                      )}
                    >
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-evergreen/10 text-forest transition-colors duration-200 group-hover:bg-evergreen group-hover:text-white">
                        {createElement(Icon, {
                          className: "size-5",
                          "aria-hidden": true,
                        })}
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="font-bold tracking-tight text-ink">
                          {action.label}
                        </span>
                        <span className="truncate text-sm text-muted">
                          {action.hint}
                        </span>
                      </span>
                      <ChevronRight
                        aria-hidden
                        className="ml-auto size-5 shrink-0 text-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-evergreen"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Explicit cancel */}
            <button
              type="button"
              onClick={onClose}
              className="mt-5 h-12 w-full rounded-xl border border-line-strong text-[0.95rem] font-semibold text-ink transition-colors hover:bg-panel"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
