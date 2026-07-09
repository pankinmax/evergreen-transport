"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { getIcon } from "@/lib/icons";
import { company, contactMethods } from "@/data/company";

/**
 * Contact — split layout with contact details on the left and a quote
 * request form on the right. The form is front-end only: on submit it
 * shows a friendly confirmation. Wire it to an API route or form service
 * (e.g. Formspree, Resend) when going live.
 */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Details */}
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                Get in touch
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1]">
                Let&apos;s get your freight moving
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
                Reach out for a no-obligation quote or a chat about your regular
                transport needs. Our team is here to help.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 w-full">
              <ul className="flex flex-col gap-4">
                {contactMethods.map((method) => {
                  const Icon = getIcon(method.icon);
                  return (
                    <li key={method.label}>
                      <a
                        href={method.href}
                        className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-border-strong"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-6" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-medium text-muted">
                            {method.label}
                          </span>
                          <span className="font-semibold text-foreground">
                            {method.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.2} className="mt-8">
              <div className="text-sm text-muted">
                <p className="font-semibold text-foreground">Opening hours</p>
                <p className="mt-1">{company.hours.weekdays}</p>
                <p>{company.hours.weekend}</p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-background p-6 shadow-[var(--shadow-card)] sm:p-10">
              {submitted ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-soft text-accent">
                    <CheckCircle2 className="size-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground">
                    Thanks — we&apos;ve got it.
                  </h3>
                  <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted">
                    A member of the {company.name} team will be in touch shortly.
                    For anything urgent, call us on{" "}
                    <a
                      href={company.phoneHref}
                      className="font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {company.phone}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" autoComplete="name" required />
                    <Field
                      id="company"
                      label="Company"
                      autoComplete="organization"
                    />
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <Field
                      id="phone"
                      label="Phone"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      What do you need moved?{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your freight, pickup and delivery locations, and timing…"
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-subtle transition-colors focus:border-accent focus:outline-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
                    Request a quote
                    <Send />
                  </Button>

                  <p className="text-xs leading-relaxed text-subtle">
                    By submitting this form you agree to be contacted about your
                    enquiry. We&apos;ll never share your details.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Reusable labelled input for the quote form. */
function Field({
  id,
  label,
  required,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={id}
        name={id}
        required={required}
        className="h-12 w-full rounded-xl border border-border bg-background px-4 text-foreground placeholder:text-subtle transition-colors focus:border-accent focus:outline-none"
        {...props}
      />
    </div>
  );
}
