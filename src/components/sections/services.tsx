import { createElement } from "react";

import { cn } from "@/lib/utils";
import { ContactButton } from "@/components/contact/contact-button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { DecorLayer, SoftBlob } from "@/components/ui/decor";
import { getIcon } from "@/lib/icons";
import { services } from "@/data/company";

type Service = (typeof services.items)[number];

/**
 * Services — the dark forest band. Its identity comes from the surface and the
 * card·photo·card rhythm, not from decorating individual cards: every card is
 * treated identically so nothing reads as an accident.
 *
 * The intro column is deliberately narrow here (and wider in Benefits) so the
 * two sections alternate measure as you scroll.
 */
export function Services() {
  // Two rows of two services, so a photo sits between each pair.
  const rows: [Service, Service][] = [
    [services.items[0], services.items[1]],
    [services.items[2], services.items[3]],
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-forest pb-16 pt-28 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32"
    >
      <DecorLayer>
        <SoftBlob className="-left-48 top-0 h-[40rem] w-[40rem] bg-evergreen/[0.05]" />
      </DecorLayer>

      <Container className="relative">
        {/* Narrow intro measure */}
        <SectionHeading
          label={services.label}
          heading={services.heading}
          description={services.description}
          tone="dark"
          className="max-w-xl"
        />

        {/* Thin divider between the intro and the content area */}
        <div className="mt-10 border-t border-white/10 pt-10 lg:mt-12 lg:pt-12">
          {/*
            Mobile: one column (card → photo → card).
            Tablet: two cards side by side, photo full-width beneath.
            Desktop: card · photo · card.
          */}
          <div className="flex flex-col gap-6">
            {rows.map(([left, right], i) => (
              <div key={i} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard
                  service={left}
                  className="md:order-1 lg:order-none"
                />
                <ImagePlaceholder
                  label="[ Photo ]"
                  src={services.photos[i]?.src}
                  alt={services.photos[i]?.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  ratio=""
                  className="min-h-[15rem] md:order-3 md:col-span-2 md:min-h-[16rem] lg:order-none lg:col-span-1 lg:min-h-0"
                />
                <ServiceCard
                  service={right}
                  className="md:order-2 lg:order-none"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-line bg-background p-7 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-evergreen/30 hover:shadow-[var(--shadow-image)] sm:p-8 lg:p-10",
        className,
      )}
    >
      <span className="grid h-14 w-14 place-items-center rounded-xl bg-evergreen/10 text-forest transition-colors duration-300 group-hover:bg-evergreen group-hover:text-white">
        {createElement(getIcon(service.icon), {
          className: "size-7",
          strokeWidth: 1.75,
          "aria-hidden": true,
        })}
      </span>

      <h3 className="mt-7 text-xl font-extrabold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{service.description}</p>

      <div className="mt-auto pt-8">
        <ContactButton
          label={service.cta.label}
          size="md"
          className="group/btn"
        />
      </div>
    </article>
  );
}
