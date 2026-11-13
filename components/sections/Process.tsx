"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { process as steps } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 0.8", "1 0.7"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" className="relative px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:gap-16 lg:grid-cols-12">
        {/* Sticky Left Narrative */}
        <div className="lg:sticky lg:top-36 lg:col-span-5 lg:self-start">
          <SectionLabel>Process &amp; Workflow</SectionLabel>
          <h2 className="mt-8 text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
            How Ideas Turn Into Production Reality.
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-sm text-base sm:text-lg leading-relaxed text-muted">
              A disciplined four-step engineering cycle delivering enterprise resilience, pixel precision, and on-time milestones.
            </p>
          </Reveal>
        </div>

        {/* Timeline Right List */}
        <ol ref={ref} className="relative space-y-12 md:space-y-16 pl-12 md:pl-16 lg:col-span-7">
          {/* Base track */}
          <span aria-hidden className="absolute bottom-0 left-[11px] top-0 w-px bg-line md:left-[15px]" />
          {/* Animated active track */}
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-accent md:left-[15px]"
          />

          {steps.map((step) => (
            <li key={step.title} className="relative">
              {/* Timeline Indicator Node */}
              <span
                aria-hidden
                className="absolute -left-12 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-accent bg-bg shadow-[0_0_14px_rgba(255,122,26,0.4)] md:-left-16 md:h-8 md:w-8"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <Reveal>
                <h3 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
