import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/lib/icons";
import { benefits } from "@/data/company";

/**
 * Benefits — a responsive grid of six quiet cards, each with a single icon,
 * a short heading and one supporting line. Same card language as Services,
 * so the page reads as one system.
 */
export function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-panel py-24 lg:py-32">
      <Container>
        <SectionHeading
          label={benefits.label}
          heading={benefits.heading}
          description={benefits.description}
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((benefit) => {
            const Icon = getIcon(benefit.icon);
            return (
              <article
                key={benefit.title}
                className="group flex h-full flex-col rounded-2xl border border-line bg-background p-8 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-image)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-evergreen/10 text-forest transition-colors duration-300 group-hover:bg-evergreen group-hover:text-white">
                  <Icon className="size-6" strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-lg font-extrabold tracking-tight text-ink">
                  {benefit.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
