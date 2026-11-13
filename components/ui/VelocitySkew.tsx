"use client";

import React from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

interface VelocitySkewProps {
  children: React.ReactNode;
  className?: string;
  maxSkew?: number;
}

export function VelocitySkew({
  children,
  className = "",
  maxSkew = 3,
}: VelocitySkewProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 45,
    stiffness: 350,
  });

  const skewY = useTransform(smoothVelocity, [-1500, 1500], [-maxSkew, maxSkew]);

  return (
    <motion.div
      style={{ skewY, transformOrigin: "50% 50%" }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
