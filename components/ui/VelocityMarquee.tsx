"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { wrap } from "@/lib/utils";

type Props = {
  text: string;
  /** Percent of one copy per second. Negative moves left. */
  baseVelocity?: number;
  className?: string;
};

/** Endless text strip that speeds up (and flips) with scroll velocity. */
export function VelocityMarquee({ text, baseVelocity = -4, className }: Props) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const direction = useRef(baseVelocity < 0 ? -1 : 1);

  // 4 copies → one copy is 25% of the track.
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = Math.abs(baseVelocity) * (delta / 1000) * direction.current;
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    move += direction.current * Math.abs(move) * Math.abs(vf);
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap" aria-hidden>
      <motion.div style={{ x }} className="flex w-max flex-nowrap will-change-transform">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className={className}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
