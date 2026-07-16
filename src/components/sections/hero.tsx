"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactButton } from "@/components/contact/contact-button";
import { Container } from "@/components/ui/container";
import { hero } from "@/data/company";

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Hero — a full-screen (100vh) photographic first section. The lifestyle
 * photograph is the background of the section itself, dimmed by a dark
 * overlay for legibility, and settles gently from 102% to 100% on load.
 * Content is left-anchored and vertically centred.
 */
export function Hero() {
  return (
    <section
      id="home"
      // Reserve the fixed header's height and top-align the content, so it can
      // never sit under the header/logo on short screens (phones, Nest Hub).
      // Only on genuinely tall desktop viewports do we centre it as before.
      className="relative flex min-h-svh items-start overflow-hidden pt-[var(--header-height)] lg:h-screen [@media(min-width:1024px)_and_(min-height:720px)]:items-center [@media(min-width:1024px)_and_(min-height:720px)]:pt-0"
    >
      {/* Dedicated background layer — clipped to exactly the hero's height,
          so the image never continues behind the following section. */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Slow, almost-unnoticeable settle from 102% to 100% on load */}
        <motion.div
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-ink/50" aria-hidden />
      </div>

      {/* Left-anchored content — on the same grid as every other section */}
      {/* The whole content block sits slightly below centre — shifted as one
          unit, so spacing between the elements is untouched. */}
      <Container className="lg:translate-y-[22px]">
        <motion.div
          variants={group}
          initial="hidden"
          animate="visible"
          className="max-w-2xl py-8 sm:py-10 md:max-w-3xl xl:max-w-2xl"
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-evergreen sm:mb-5 sm:text-sm"
          >
            {hero.label}
          </motion.p>

          <motion.h1
            variants={item}
            // Tracking eased from -0.035em to -0.012em: the tighter value made
            // pairs like the "rt" in "Airport" collide at this weight/size.
            // Still tight enough to keep the same confident look.
            className="text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.012em] text-white sm:leading-[0.95]"
          >
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-7 sm:text-lg md:max-w-2xl xl:max-w-xl"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
          >
            <ContactButton
              label={hero.primaryCta.label}
              size="xl"
              className="group w-full sm:w-auto"
            />
            <Button
              asChild
              size="xl"
              variant="outlineLight"
              className="w-full sm:w-auto"
            >
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-10 sm:gap-x-7"
          >
            {hero.badges.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-white"
              >
                <span className="grid size-5 place-items-center rounded-full border border-evergreen/60 text-evergreen">
                  <Check className="size-3" strokeWidth={3.5} />
                </span>
                {badge}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
