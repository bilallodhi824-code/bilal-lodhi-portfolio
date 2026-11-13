"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MaskedRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export function MaskedReveal({
  children,
  delay = 0,
  duration = 0.75,
  className = "",
  yOffset = 40,
}: MaskedRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: yOffset, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

