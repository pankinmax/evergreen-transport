import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { getIcon } from "@/lib/icons";
import { services } from "@/data/company";

type Service = (typeof services.items)[number];

/**
 * Services — a premium forest-green feature band. Each row pairs two cards
 * with a photo placeholder in the middle (card · photo · card), collapsing
 * to a clean stack on smaller screens.
 */
export function Services() {
  // Two rows of two services, so a photo sits between each pair.
  const rows: [Service, Service][] = [
    [services.items[0], services.items[1]],
    [services.items[2], services.items[3]],
  ];

  return (
    <section id="services" className="scroll-mt-24 bg-forest py-24 lg:py-32">
      <Container>
        <SectionHeading
          label={services.label}
          heading={services.heading}
          description={services.description}
          align="center"
          tone="dark"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {rows.map(([left, right], i) => (
            <div key={i} className="contents">
              <ServiceCard service={left} />
              <ImagePlaceholder
                label="[ Photo ]"
                src={services.photos[i]?.src}
                alt={services.photos[i]?.alt}
                sizes="(max-width: 1024px) 100vw, 33vw"
                ratio=""
                className="min-h-[15rem]"
              />
              <ServiceCard service={right} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-background p-8 shadow-[var(--shadow-soft)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-image)] lg:p-10">
      <span className="grid h-14 w-14 place-items-center rounded-xl bg-evergreen/10 text-forest transition-colors duration-300 group-hover:bg-evergreen group-hover:text-white">
        <Icon className="size-7" strokeWidth={2} />
      </span>

      <h3 className="mt-7 text-xl font-extrabold tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-3 leading-relaxed text-muted">{service.description}</p>

      <div className="mt-auto pt-8">
        <Button asChild size="md" className="group/btn">
          <Link href={service.cta.href}>
            {service.cta.label}
            <ArrowRight className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
