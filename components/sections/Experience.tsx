"use client";

import { experience } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-14 md:px-12 md:py-20">
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>Experience &amp; Roles</SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
              Proven Engineering Experience.
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
              Professional software engineering trajectory, live production systems deployment, and formal software credentials.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-line bg-surface-2/80 px-4 py-2 text-xs font-medium text-muted backdrop-blur md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Active Full-Stack Engineering</span>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="mt-12 space-y-8 md:mt-14 md:space-y-8">
          {experience.map((exp, idx) => (
            <Reveal key={exp.role} delay={idx * 0.06}>
              <article className="card-hover group relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-9 md:p-10 transition-all duration-300 hover:border-accent/40">
                <div className="grid gap-8 md:grid-cols-12 md:gap-10">
                  {/* Left Column: Period & Organization */}
                  <div className="md:col-span-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-semibold text-accent">
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                          {exp.badge}
                        </span>
                      </div>
                      <h4 className="mt-4 text-xl font-bold tracking-tight text-fg md:text-2xl">
                        {exp.organization}
                      </h4>
                    </div>
                  </div>

                  {/* Right Column: Role Title, Summary & Bullet Highlights */}
                  <div className="md:col-span-8 border-t border-line/60 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                    <h3 className="text-xl font-bold tracking-tight text-fg group-hover:text-accent transition-colors md:text-2xl">
                      {exp.role}
                    </h3>

                    <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-muted">
                      {exp.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {exp.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-fg/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
