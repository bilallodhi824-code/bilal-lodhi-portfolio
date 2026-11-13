"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative px-6 py-14 md:px-12 md:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Client Endorsements</SectionLabel>

        <div className="relative mt-8 min-h-[11rem] md:min-h-[13rem]">
          <span aria-hidden className="absolute -top-10 left-0 text-8xl font-bold leading-none text-accent/15 select-none pointer-events-none">
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="relative pt-6"
            >
              <blockquote className="text-2xl font-medium leading-relaxed tracking-tight text-fg md:text-3xl lg:text-4xl">
                {current.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 border border-line text-base font-bold text-accent shadow-sm">
                  {current.name.charAt(0)}
                </span>
                <div>
                  <span className="block font-semibold text-fg text-base">{current.name}</span>
                  <span className="block text-xs text-muted font-medium mt-0.5">{current.role}</span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Progress Navigation Pills */}
        <div className="mt-10 flex items-center gap-2.5" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className="group py-2"
            >
              <span
                className={cn(
                  "block h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-10 bg-accent shadow-[0_0_8px_rgba(255,122,26,0.45)]" : "w-4 bg-line group-hover:bg-muted"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
