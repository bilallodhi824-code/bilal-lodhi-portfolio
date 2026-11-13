"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { scrollToTarget } from "@/lib/lenis";
import { ArrowUp } from "@/components/ui/Icons";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: site.timezone,
      }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-line px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 text-xs text-muted font-medium md:flex-row md:items-center">
        <div>
          <p className="text-fg/90 font-semibold">
            © {site.year} {site.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted/70">
            {site.role} · Full Stack Web Applications &amp; Interfaces.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-fg/90">All 12 Systems Online</span>
          <span className="text-line">|</span>
          <p aria-live="off">
            {site.location} {time && <span className="text-accent font-semibold">· {time}</span>}
          </p>
        </div>

        <button
          type="button"
          onClick={() => scrollToTarget(0)}
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-xs transition-colors hover:border-accent hover:text-accent font-semibold"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
}
