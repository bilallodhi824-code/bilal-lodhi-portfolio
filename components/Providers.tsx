"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { ReadyContext } from "@/components/ready-context";
import { Preloader } from "@/components/Preloader";
import { setLenis } from "@/lib/lenis";

export function Providers({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  // Always start at the top; the preloader owns the first impression.
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // Lock scroll while the preloader is up.
  useEffect(() => {
    if (ready) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [ready]);

  // Smooth scrolling (skipped for reduced-motion users).
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return (
    <ReadyContext.Provider value={ready}>
      <Preloader onReveal={() => setReady(true)} />
      {children}
    </ReadyContext.Provider>
  );
}
