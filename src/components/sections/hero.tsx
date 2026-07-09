"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
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
      className="relative flex h-screen items-center overflow-hidden"
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

      {/* Left-anchored content — sits slightly above the vertical centre */}
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:translate-y-[10px] lg:pl-[120px] lg:pr-16">
        <motion.div
          variants={group}
          initial="hidden"
          animate="visible"
          className="max-w-2xl py-10"
        >
          <motion.p
            variants={item}
            className="mb-5 text-sm font-semibold uppercase tracking-[2px] text-evergreen"
          >
            {hero.label}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[clamp(2.75rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white"
          >
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/80"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="xl" className="group w-full sm:w-auto">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
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
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
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
      </div>
    </section>
  );
}
