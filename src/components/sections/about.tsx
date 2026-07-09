import { Check } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { getIcon } from "@/lib/icons";
import { about, features, stats } from "@/data/company";

/**
 * About — the trust-building narrative. A two-column split with the
 * company story and proof points, followed by a quiet stats strip and
 * a grid of value propositions.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        {/* Story */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <ImagePlaceholder
                ratio="aspect-[5/4]"
                label="PHOTO"
                className="shadow-[var(--shadow-card)]"
              />
            </div>
          </Reveal>

          <div className="order-1 flex flex-col items-start lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {about.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
                {about.title}
              </h2>
            </Reveal>

            <div className="mt-6 flex flex-col gap-4">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-pretty text-lg leading-relaxed text-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[0.95rem] font-medium text-foreground"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <Reveal className="mt-20 lg:mt-28">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-2xl border border-border bg-surface px-8 py-10 sm:px-12 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <dt className="order-2 mt-2 text-sm font-medium text-muted">
                  {stat.label}
                </dt>
                <dd className="order-1 text-4xl font-bold tracking-tight text-primary lg:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Value propositions */}
        <div className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = getIcon(feature.icon);
            return (
              <Reveal key={feature.title} delay={i * 0.06}>
                <div className="flex flex-col items-start">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
