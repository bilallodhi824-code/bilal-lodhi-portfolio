import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis() {
  return instance;
}

/** Smooth-scroll to a selector, element or pixel offset (falls back to native). */
export function scrollToTarget(target: string | number | HTMLElement, offset = 0) {
  if (instance) {
    instance.scrollTo(target, { offset, duration: 1.4 });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target + offset, behavior: "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}
