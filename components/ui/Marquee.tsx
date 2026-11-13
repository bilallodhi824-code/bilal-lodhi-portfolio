import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  className?: string;
};

/** Pure-CSS infinite marquee (pauses on hover). Content is rendered twice for a seamless loop. */
export function Marquee({ children, reverse = false, duration = 32, className }: Props) {
  return (
    <div
      className={cn("marquee overflow-hidden", className)}
      style={{ "--dur": `${duration}s` } as CSSProperties}
    >
      <div className={cn("marquee-track", reverse && "reverse")}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
