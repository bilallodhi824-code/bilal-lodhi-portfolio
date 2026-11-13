"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative px-6 py-14 md:px-12 md:py-20">
      <div className="relative mx-auto max-w-5xl">
        <SectionLabel>Frequently Asked Questions</SectionLabel>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
            Client Queries &amp; Workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Transparent answers regarding project turnaround, communication cadence, code quality, and post-launch warranties.
          </p>
        </div>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={faq.q} delay={idx * 0.05}>
                <div className="py-6 sm:py-7">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-fg group-hover:text-accent transition-colors">
                      {faq.q}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 text-sm font-bold text-muted transition-all group-hover:border-accent group-hover:text-accent">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-base leading-relaxed text-muted pr-8">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

