import { ContactButton } from "@/components/contact/contact-button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { DecorLayer, SoftBlob } from "@/components/ui/decor";
import { executive } from "@/data/company";

/**
 * Executive Airport Transfers — the one featured service, placed between the
 * dark Services band and the grey Benefits band so the white surface reads as
 * a pause before the page settles.
 *
 * It sits on the site's shared two-column grid rather than in a box of its
 * own: the section is meant to feel like the rest of the page given a little
 * more room, not like an advertisement dropped into it. The single accent is
 * the evergreen rule beside the pricing note — the same vertical-bar motif
 * SectionHeading uses, applied to the one line that must not be misread.
 */
export function Executive() {
  return (
    <section
      id="executive"
      // Padding matches About, so the vertical rhythm carries through.
      className="relative overflow-hidden bg-background pb-16 pt-28 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32"
    >
      <DecorLayer>
        <SoftBlob className="-right-44 top-8 h-[38rem] w-[38rem] bg-evergreen/[0.05]" />
      </DecorLayer>

      <Container className="relative">
        {/*
          Mobile: photo, then label → heading → copy → button.
          Tablet+: two columns of equal width, vertically centred, so the
          photograph and the copy carry the same weight and neither column
          is squeezed.
        */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <ImagePlaceholder
            label={executive.imageLabel}
            src={executive.image.src}
            alt={executive.image.alt}
            sizes="(max-width: 768px) 100vw, 48vw"
            // Landscape box — a vehicle photograph reads wider than tall.
            ratio="aspect-[4/3]"
            className="rounded-[22px]"
          />

          <div className="flex flex-col items-start">
            <SectionHeading
              label={executive.label}
              heading={executive.heading}
            />

            <div className="mt-5 flex flex-col gap-5">
              {executive.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* The section's one accent, and the only place it appears. */}
            <p className="mt-6 border-l-2 border-evergreen pl-4 text-sm leading-relaxed text-muted">
              {executive.note}
            </p>

            <ContactButton
              label={executive.cta.label}
              size="lg"
              className="group mt-9"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
