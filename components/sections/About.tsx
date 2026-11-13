"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { about, site } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { TiltCard } from "@/components/ui/TiltCard";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ["rgba(132,136,149,0.5)", "rgba(244,244,246,1)"]);
  return (
    <span className="mr-[0.24em] inline-block">
      <motion.span style={{ opacity, color }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

/** Paragraph whose words light up as you scroll. */
function ScrollWords({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 0.9", "1 0.4"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className="text-xl font-medium leading-[1.48] tracking-tight text-fg sm:text-2xl md:text-3xl lg:text-[2.2rem]">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-14 md:px-12 md:py-20">
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel>About &amp; Background</SectionLabel>

        {/* Narrative Statement & Profile Bento */}
        <div className="mt-8 md:mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          <div className="lg:col-span-7 xl:col-span-8">
            <ScrollWords text={about.statement} />

            {/* Metrics Counters */}
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line/60 pt-8 sm:grid-cols-4 sm:gap-8">
              {about.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                  <p className="mt-2 text-xs font-medium text-muted tracking-normal" aria-hidden>
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* Identity Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <Reveal delay={0.1}>
              <TiltCard>
                <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-2/80 p-8 shadow-xl">
                  {/* Subtle soft gradient glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(47,107,255,0.22),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(255,122,26,0.18),transparent_50%)]" />

                  {/* Top status */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-medium text-muted">
                    <span className="text-fg font-medium">Full Stack Developer</span>
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available
                    </span>
                  </div>

                  {/* Monogram Crest */}
                  <div className="relative my-8 flex flex-col items-center justify-center">
                    <div className="flex h-32 w-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                      <span className="font-sans text-5xl font-extrabold tracking-tighter text-fg">{site.initials}</span>
                      <span className="mt-1.5 text-[10px] font-semibold text-accent tracking-wide">
                        Full Stack
                      </span>
                    </div>
                  </div>

                  {/* Bottom identity */}
                  <div className="relative z-10 flex items-end justify-between border-t border-line/60 pt-5">
                    <div>
                      <p className="text-base font-semibold text-fg">{site.name}</p>
                      <p className="text-xs text-muted font-medium">{site.location}</p>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-black">
                      Available
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>

        {/* 3 Core Pillars — Clean cards with comfortable breathing room */}
        <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-3">
          {about.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="card-hover group h-full rounded-2xl border border-line bg-surface p-7 sm:p-8 md:p-9 transition-all duration-300 hover:border-accent/40">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <h3 className="text-lg font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
