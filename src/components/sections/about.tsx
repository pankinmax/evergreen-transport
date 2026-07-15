import { ContactButton } from "@/components/contact/contact-button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { DecorLayer, Ring, SoftBlob } from "@/components/ui/decor";
import { about } from "@/data/company";

/**
 * About — two columns on the site's shared grid: the photograph leads at
 * roughly 57% of the width, the copy sits at ~43% and is vertically centred
 * against it. The image stays fully inside the section — no bleed, no frame.
 */
export function About() {
  return (
    <section
      id="about"
      // Top padding must stay clear of the 88px fixed header (sections align
      // to the top of the viewport); the excess was all in the bottom.
      className="relative overflow-hidden bg-background pb-16 pt-28 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32"
    >
      <DecorLayer>
        <SoftBlob className="-right-40 top-0 h-[36rem] w-[36rem] bg-evergreen/[0.05]" />
        <Ring className="-left-40 bottom-0 h-[30rem] w-[30rem] border-evergreen/[0.06]" />
      </DecorLayer>

      <Container className="relative">
        {/*
          Mobile: image above, text below.
          Tablet+: balanced columns — image and copy each ~48%, with ~56px
          between them, so neither dominates and the text reads comfortably.
        */}
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
          {/* The section's lead visual */}
          <ImagePlaceholder
            label={about.imageLabel}
            src={about.image.src}
            alt={about.image.alt}
            sizes="(max-width: 768px) 100vw, 48vw"
            // Box matches the photo's natural 1024×730 ratio, so the whole
            // image is visible — nothing cropped, no letterboxing, no stretch.
            ratio="aspect-[1024/730]"
            fit="contain"
            className="rounded-[22px] border-0 shadow-[var(--shadow-image)]"
          />

          {/* Copy, vertically centred against the image */}
          <div className="flex flex-col items-start">
            <SectionHeading label={about.label} heading={about.heading} />

            <div className="mt-5 flex flex-col gap-5">
              {about.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <ContactButton
              label={about.cta.label}
              size="lg"
              className="group mt-9"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
