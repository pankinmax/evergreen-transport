import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { company, hero } from "@/data/company";

/**
 * Conversion CTA — a confident, full-width forest-green band that invites
 * the visitor to get a quote. Kept simple: strong headline, two clear paths.
 */
export function CTA() {
  return (
    <section className="py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-center sm:px-16 lg:py-20">
            {/* Subtle decorative wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-foreground/[0.04] blur-3xl"
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Ready to move your freight with confidence?
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/75">
                Tell us what you need moved and we&apos;ll get back to you with a
                clear, competitive quote — usually the same day.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="accent">
                  <Link href={hero.primaryCta.href}>
                    {hero.primaryCta.label}
                    <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="border-transparent bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
                >
                  <a href={company.phoneHref}>
                    <Phone />
                    {company.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
