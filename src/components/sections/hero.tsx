"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { BackgroundDecor, DotGrid } from "@/components/ui/background-decor";
import { company, hero } from "@/data/company";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Hero — the most important section. Full viewport height, a confident
 * headline on the left, an elegant image placeholder on the right, and
 * three trust indicators. Entrance animation is a single, subtle stagger.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-16 lg:min-h-[calc(100svh-6rem)] lg:py-24"
    >
      <DotGrid />
      <BackgroundDecor />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              {hero.trustIndicators.map((indicator) => (
                <li
                  key={indicator.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-accent">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {indicator.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <ImagePlaceholder ratio="aspect-[4/5]" className="shadow-[var(--shadow-card)]" />

            {/* Floating credibility card */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-card)] sm:flex">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                <PhoneCall className="size-5" />
              </span>
              <div className="pr-2">
                <p className="text-xs font-medium text-muted">Talk to our team</p>
                <a
                  href={company.phoneHref}
                  className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  {company.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
