"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Premium Minimalist Custom Cursor:
 * - Fluid pinpoint follower dot with soft ambient glow
 * - Dynamic trailing ring with spring physics
 * - Expands gracefully over interactive elements without intrusive overlays
 */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Snappy pinpoint dot
  const dotX = useSpring(x, { stiffness: 1500, damping: 60 });
  const dotY = useSpring(y, { stiffness: 1500, damping: 60 });

  // Fluid follower ring
  const ringX = useSpring(x, { stiffness: 450, damping: 32, mass: 0.25 });
  const ringY = useSpring(y, { stiffness: 450, damping: 32, mass: 0.25 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target.closest<HTMLElement>("a, button, input, textarea, [role='button']") : null;
      setHovering(Boolean(target));
      setButtonHover(Boolean(target && (target.tagName === "BUTTON" || target.tagName === "A")));
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("has-cursor");
      setEnabled(false);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Precision center pip */}
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`rounded-full bg-accent transition-all duration-200 ${
            hovering ? "h-2 w-2 shadow-[0_0_14px_#ff7a1a]" : "h-1.5 w-1.5 shadow-[0_0_8px_#ff7a1a]"
          }`}
        />
      </motion.div>

      {/* Trailing follower ring */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            width: buttonHover ? 38 : hovering ? 32 : 22,
            height: buttonHover ? 38 : hovering ? 32 : 22,
            borderColor: hovering ? "rgba(255, 122, 26, 0.7)" : "rgba(255, 255, 255, 0.22)",
            backgroundColor: hovering ? "rgba(255, 122, 26, 0.08)" : "rgba(255, 122, 26, 0)",
            scale: hovering ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
          className="rounded-full border backdrop-blur-[0.5px]"
        />
      </motion.div>
    </>
  );
}
