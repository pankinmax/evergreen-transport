import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { getIcon } from "@/lib/icons";
import { services } from "@/data/company";

/**
 * Services — a clean, spacious grid of the company's core offerings.
 * Cards are quiet by default and lift subtly on hover.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Transport and logistics, handled end to end"
          description="From a single urgent parcel to nationwide scheduled freight, we have the fleet and the experience to move it safely."
        />

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <RevealItem key={service.title}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-border-strong hover:shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-7" />
                    </span>
                    <ArrowUpRight className="size-5 text-subtle opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-7 text-xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
