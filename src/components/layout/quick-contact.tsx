import { Mail, MessageCircle, Phone } from "lucide-react";

import { company } from "@/data/company";

/**
 * Floating Quick Contact widget — a small white, rounded, softly-shadowed
 * pill fixed to the bottom-right, holding three stacked circular buttons
 * (Call / Text / Email). Compact on desktop, slightly larger touch targets
 * on mobile. Each button fills light evergreen on hover.
 */
const actions = [
  { label: "Call", href: company.phoneHref, Icon: Phone },
  { label: "Text", href: company.smsHref, Icon: MessageCircle },
  { label: "Email", href: company.emailHref, Icon: Mail },
];

export function QuickContact() {
  return (
    // z-40 keeps it beneath the mobile menu overlay (z-50) when that is open.
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-1.5 rounded-full border border-line bg-background p-1.5 shadow-[0_14px_34px_-14px_rgba(20,32,27,0.4)] lg:bottom-7 lg:right-6">
      {actions.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={`${label} us`}
          title={`${label} us`}
          className="grid size-12 place-items-center rounded-full text-charcoal transition-[background-color,color,transform] duration-200 ease-out hover:bg-evergreen hover:text-white active:scale-95 lg:size-11"
        >
          <Icon className="size-[1.15rem]" />
        </a>
      ))}
    </div>
  );
}
