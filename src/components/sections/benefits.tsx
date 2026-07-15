import { createElement } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { DecorLayer, Ring } from "@/components/ui/decor";
import { getIcon } from "@/lib/icons";
import { benefits } from "@/data/company";

/**
 * Benefits — the quietest section, and deliberately the shortest.
 *
 * Its intro runs to a wider measure than Services' (the two alternate), and
 * every card is treated identically: the rhythm comes from the section's
 * proportions, not from decorating individual cards.
 */
export function Benefits() {
  return (
    <section
      id="benefits"
      // Top padding stays clear of the fixed header, since anchor links align
      // the section's top edge with the top of the viewport.
      className="relative overflow-hidden border-t border-line bg-panel pb-16 pt-28 md:pb-20 lg:pb-24 lg:pt-28"
    >
      <DecorLayer>
        <Ring className="-bottom-40 -right-32 h-[34rem] w-[34rem] border-evergreen/[0.07]" />
      </DecorLayer>

      <Container className="relative">
        {/* Wider intro measure — alternates against the narrow Services intro */}
        <SectionHeading
          label={benefits.label}
          heading={benefits.heading}
          description={benefits.description}
          className="max-w-3xl"
        />

        {/* Thin divider between the intro and the content area */}
        <div className="mt-10 border-t border-line pt-10 lg:mt-12 lg:pt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((benefit) => (
              <article
                key={benefit.title}
                className="group flex h-full flex-col rounded-2xl border border-line bg-background p-8 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-evergreen/30 hover:shadow-[var(--shadow-image)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-evergreen/10 text-forest transition-colors duration-300 group-hover:bg-evergreen group-hover:text-white">
                  {createElement(getIcon(benefit.icon), {
                    className: "size-6",
                    strokeWidth: 1.75,
                    "aria-hidden": true,
                  })}
                </span>
                <h3 className="mt-6 text-lg font-extrabold tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
