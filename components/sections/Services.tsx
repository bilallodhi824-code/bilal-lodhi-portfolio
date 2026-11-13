"use client";

import { services } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icons";
import { scrollToTarget } from "@/lib/lenis";

export function Services() {
  return (
    <section id="services" className="relative px-6 py-14 md:px-12 md:py-20">
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Services &amp; Capabilities</SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
            Engineering Solutions for Web &amp; Mobile.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Full-cycle development from frontend craft to backend microservices, database architecture, and cloud deployment.
          </p>
        </div>

        <ul className="mt-12 md:mt-14 border-b border-line">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.05} y={16}>
                <div
                  onClick={() => scrollToTarget("#contact")}
                  className="group relative grid cursor-pointer gap-5 overflow-hidden border-t border-line px-6 py-8 transition-all duration-300 hover:bg-surface-2/60 md:grid-cols-12 md:items-center md:gap-10 md:px-10 md:py-9"
                >
                  {/* Left accent indicator bar on hover */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent scale-y-0 origin-center transition-transform duration-300 ease-out group-hover:scale-y-100"
                  />

                  {/* Title & Deliverables */}
                  <div className="md:col-span-5">
                    <h3 className="text-xl font-bold tracking-tight text-fg transition-all duration-300 group-hover:text-accent md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted font-medium">
                      Deliverables: {s.deliverables}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-fg/90 md:col-span-4 md:text-base">
                    {s.description}
                  </p>

                  {/* Tags & Action Arrow */}
                  <div className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                    <ul className="flex flex-wrap gap-2 md:justify-end">
                      {s.tags.slice(0, 3).map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-line bg-surface/70 px-2.5 py-1 text-xs font-medium text-muted"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-black">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
