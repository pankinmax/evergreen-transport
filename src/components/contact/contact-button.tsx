"use client";

import { ArrowRight } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useContactMenu } from "@/components/contact/contact-menu";
import { contactCta } from "@/data/company";

/**
 * The site's single primary call to action. It performs no action itself —
 * it opens the shared contact menu, so the user chooses how to get in touch.
 * A client component, so it can sit inside server-rendered sections.
 */
export function ContactButton({
  label = contactCta.label,
  withArrow = true,
  className,
  ...props
}: {
  label?: string;
  withArrow?: boolean;
} & Omit<ButtonProps, "asChild" | "children">) {
  const { open } = useContactMenu();

  return (
    <Button
      type="button"
      onClick={open}
      className={className}
      // Announces that this opens a dialog rather than navigating.
      aria-haspopup="dialog"
      {...props}
    >
      {label}
      {withArrow && (
        <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Button>
  );
}
