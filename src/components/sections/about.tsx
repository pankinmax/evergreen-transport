import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { about } from "@/data/company";

/**
 * About — a calm, spacious two-column introduction. A large company-photo
 * placeholder on the left; the story and a single premium CTA on the right.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ImagePlaceholder
            label={about.imageLabel}
            src={about.image.src}
            alt={about.image.alt}
            sizes="(max-width: 1024px) 100vw, 45vw"
            ratio="aspect-[5/6]"
            className="shadow-[var(--shadow-image)]"
          />

          <div className="flex flex-col items-start">
            <span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[2px] text-evergreen">
              <span className="h-2 w-2 bg-evergreen" aria-hidden />
              {about.label}
            </span>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
              {about.heading}
            </h2>

            <div className="mt-6 flex flex-col gap-5">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <Button asChild size="lg" className="group mt-9">
              <Link href={about.cta.href}>
                {about.cta.label}
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
