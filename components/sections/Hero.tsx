"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { heroStats, site } from "@/lib/data";
import { scrollToTarget } from "@/lib/lenis";
import { EASE } from "@/lib/motion";
import { useReady } from "@/components/ready-context";
import { SplitText } from "@/components/ui/SplitText";
import { Magnetic } from "@/components/ui/Magnetic";
import { Counter } from "@/components/ui/Counter";
import { ArrowDown, ArrowUpRight } from "@/components/ui/Icons";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useReady();
  const reduce = useReducedMotion();
  const [time, setTime] = useState("");

  // Live Edge Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: site.timezone,
      }).format(new Date());
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse-follow glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(r.width * 0.65);
    my.set(r.height * 0.35);
  }, [mx, my]);

  const onMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  // Parallax on scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pt-36 pb-20 md:px-12 md:pt-44 md:pb-28"
    >
      {/* Ambient volumetric background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -left-40 top-1/4 h-[550px] w-[550px] rounded-full bg-[#2f6bff]/12 blur-[170px]" />
        <div
          className="animate-drift absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#ff7a1a]/10 blur-[170px]"
          style={{ animationDelay: "-6s" }}
        />
        <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
          <div className="h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[180px]" />
        </motion.div>
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Top status badges */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <motion.div
            {...fade(0.1)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line/80 bg-surface-2/90 py-1.5 pl-3.5 pr-4 text-xs font-medium text-muted backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-fg font-medium">12 Production Deployments</span>
            <span className="text-emerald-400 font-medium">· Verified Live</span>
          </motion.div>

          <motion.div
            {...fade(0.18)}
            className="hidden items-center gap-2 rounded-full border border-line/60 bg-surface-2/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur-md sm:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{site.location}</span>
            {time && <span className="text-fg font-medium">· {time} PKT</span>}
          </motion.div>
        </div>

        {/* Main Hero Headline — Large, cinematic, perfectly readable */}
        <h1 className="text-[clamp(2.8rem,7vw,7rem)] font-bold leading-[1.04] tracking-tight text-fg">
          <span className="block overflow-hidden">
            <SplitText mode="load" text="Architecting" delay={0.12} />
          </span>
          <span className="block overflow-hidden">
            <SplitText
              mode="load"
              text="cinematic digital"
              delay={0.25}
              highlight={["cinematic"]}
            />
          </span>
          <span className="block overflow-hidden">
            <SplitText
              mode="load"
              text="flagships & software."
              delay={0.4}
              wordClassName="text-gradient"
            />
          </span>
        </h1>

        {/* Intro narrative & Call-to-actions */}
        <div className="mt-8 max-w-2xl md:mt-10">
          <motion.p {...fade(0.55)} className="text-base sm:text-lg leading-relaxed text-muted">
            Hello, I&apos;m <span className="font-semibold text-fg">{site.name}</span> — a{" "}
            <span className="text-fg font-medium">{site.role}</span> crafting fast, resilient web applications,
            luxury e-commerce flagships, and high-performance interactive architectures.
          </motion.p>

          <motion.div {...fade(0.7)} className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#work");
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-semibold text-sm text-black transition-all hover:scale-105 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(255,122,26,0.35)]"
              >
                <span>Explore 12 Deployments</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#contact");
                }}
                className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2/80 px-7 py-3.5 text-sm font-medium backdrop-blur-md transition-all hover:border-fg/30 hover:bg-surface"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Dedicated 4-Metric Bento Row — full width, spacious, balanced */}
        <motion.dl
          {...fade(0.85)}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-line/60 pt-10 md:pt-12"
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line/70 bg-surface/80 p-6 md:p-7 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl sm:text-4xl font-bold tracking-tight text-fg">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
              <p className="mt-2 text-xs font-semibold text-accent tracking-normal" aria-hidden>
                {s.label}
              </p>
              {s.subtext && (
                <p className="mt-1 text-xs text-muted/80">{s.subtext}</p>
              )}
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
