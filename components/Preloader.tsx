"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { EASE_IN_OUT } from "@/lib/motion";
import { site } from "@/lib/data";

export function Preloader({ onReveal }: { onReveal: () => void }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();
  const revealRef = useRef(onReveal);

  useEffect(() => {
    revealRef.current = onReveal;
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const controls = animate(0, 100, {
      duration: reduce ? 0.3 : 1.8,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => {
        timeout = setTimeout(() => {
          revealRef.current();
          setVisible(false);
        }, 200);
      },
    });
    return () => {
      controls.stop();
      if (timeout) clearTimeout(timeout);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[110] flex flex-col justify-between bg-bg p-6 md:p-12 select-none"
          exit={{ y: "-100%", transition: { duration: 0.9, ease: EASE_IN_OUT } }}
          role="status"
          aria-live="polite"
          aria-label="Loading Portfolio"
        >
          {/* Clean agency top header */}
          <div className="flex items-center justify-between text-xs text-muted font-medium">
            <span className="flex items-center gap-2 text-fg">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-semibold tracking-tight text-sm">BK.</span>
              <span className="text-muted/60">/</span>
              <span className="text-muted">{site.name}</span>
            </span>
            <span>Portfolio {site.year}</span>
          </div>

          {/* Center / Bottom agency counter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl"
            >
              <span className="text-xs font-semibold text-accent mb-2 block tracking-normal">
                Full-Stack Systems &amp; Web Applications
              </span>
              <h2 className="text-3xl font-bold leading-tight text-fg md:text-5xl lg:text-6xl tracking-tight">
                Architecting Modern Digital Products.
              </h2>
            </motion.div>

            <div className="flex items-baseline gap-1">
              <span className="font-bold leading-none tracking-tight text-accent tabular-nums text-[clamp(4.5rem,16vw,12rem)]">
                {count}
              </span>
              <span className="text-2xl text-muted font-medium">%</span>
            </div>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-line">
            <div
              className="h-full origin-left bg-gradient-to-r from-[#ff7a1a] via-[#ff9e4a] to-[#2f6bff]"
              style={{ transform: `scaleX(${count / 100})` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
