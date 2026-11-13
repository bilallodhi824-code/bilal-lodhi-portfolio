"use client";

import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Card with a soft light that follows the cursor. */
export function SpotlightCard({ children, className }: Props) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className={cn("spotlight relative overflow-hidden rounded-3xl border border-line bg-surface", className)}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
