"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useReady } from "@/components/ready-context";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  /** "load" waits for the preloader; "view" plays when scrolled into view. */
  mode?: "load" | "view";
  delay?: number;
  stagger?: number;
  /** Words (exact match, punctuation included) that get `highlightClassName`. */
  highlight?: string[];
  highlightClassName?: string;
  /** Class applied to every animated word (use for gradients — they must live on the transformed element). */
  wordClassName?: string;
};

/** Masked word-by-word reveal. Each word slides up from behind a clipping line. */
export function SplitText({
  text,
  className,
  mode = "view",
  delay = 0,
  stagger = 0.07,
  highlight = [],
  highlightClassName = "text-accent font-semibold",
  wordClassName,
}: Props) {
  const ready = useReady();
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const hidden = reduce ? "0%" : "115%";

  return (
    <span className={cn("inline", className)} aria-label={text}>
      {words.map((word, i) => {
        const timing = {
          duration: 0.95,
          ease: EASE,
          delay: delay + i * stagger,
        };
        const motionProps =
          mode === "load"
            ? { animate: { y: ready ? "0%" : hidden } }
            : { whileInView: { y: "0%" }, viewport: { once: true, margin: "0px 0px -10% 0px" } };

        return (
          <span
            key={`${word}-${i}`}
            aria-hidden
            className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom"
          >
            <motion.span
              className={cn("inline-block will-change-transform", wordClassName, highlight.includes(word) && highlightClassName)}
              initial={{ y: hidden }}
              transition={timing}
              {...motionProps}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
