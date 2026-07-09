import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { getIcon } from "@/lib/icons";
import { fleet } from "@/data/company";

/**
 * Fleet — showcases vehicle categories. A large image placeholder pairs
 * with a list of vehicle types, each with a capacity detail for credibility.
 */
export function Fleet() {
  return (
    <section id="fleet" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our fleet"
          title="The right vehicle for every load"
          description="A modern, well-maintained fleet — chosen and serviced so your freight always arrives in the condition it left in."
        />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Visual */}
          <RevealGroup className="lg:sticky lg:top-28 lg:self-start">
            <RevealItem>
              <ImagePlaceholder
                ratio="aspect-[4/3]"
                label="FLEET PHOTO"
                className="shadow-[var(--shadow-card)]"
              />
            </RevealItem>
          </RevealGroup>

          {/* Vehicle list */}
          <RevealGroup className="flex flex-col gap-4">
            {fleet.map((vehicle) => {
              const Icon = getIcon(vehicle.icon);
              return (
                <RevealItem key={vehicle.name}>
                  <article className="flex items-start gap-5 rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-border-strong sm:p-7">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent-soft text-primary">
                      <Icon className="size-7" />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-bold tracking-tight text-foreground">
                          {vehicle.name}
                        </h3>
                        <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted">
                          {vehicle.capacity}
                        </span>
                      </div>
                      <p className="mt-2 text-pretty leading-relaxed text-muted">
                        {vehicle.description}
                      </p>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
