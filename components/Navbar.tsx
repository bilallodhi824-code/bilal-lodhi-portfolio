"use client";

import { useEffect, useRef, useState, useCallback, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/data";
import { scrollToTarget } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Close, Menu } from "@/components/ui/Icons";

export function Navbar() {
  const [active, setActive] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const ids = ["top", ...nav.map((n) => n.href.slice(1))];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.15, 0.4] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scrolling behavior: expands pill while user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY.current) > 3) {
        setIsScrolling(true);
        lastScrollY.current = currentY;
      }
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  // Outside click to collapse pinned or mobile state
  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsPinned(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Keydown Escape to collapse
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPinned(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleNavigate = useCallback((e: MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsPinned(false);

    if (href === "#top" || href === "/") {
      scrollToTarget(0);
      return;
    }
    scrollToTarget(href);
  }, []);

  // Is the island expanded?
  const isExpanded = isHovered || isPinned || isScrolling || mobileMenuOpen;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4 pointer-events-none">
      <div className="mx-auto flex justify-center">
        <motion.nav
          ref={navRef}
          layout
          transition={{ layout: { type: "spring", stiffness: 380, damping: 30, mass: 0.8 } }}
          onMouseEnter={() => {
            if (hoverTimer.current) {
              clearTimeout(hoverTimer.current);
              hoverTimer.current = null;
            }
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            if (hoverTimer.current) clearTimeout(hoverTimer.current);
            hoverTimer.current = setTimeout(() => {
              setIsHovered(false);
            }, 280);
          }}
          onClick={() => {
            if (!isExpanded) setIsPinned(true);
          }}
          aria-label="Main navigation"
          className={cn(
            "pointer-events-auto relative flex items-center rounded-full border border-white/15 bg-[#0C0D12]/92 shadow-[0_16px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl transition-all duration-300",
            isExpanded
              ? "min-h-[48px] w-full max-w-md justify-between gap-2 px-3 py-1.5 sm:px-4 md:w-fit md:max-w-none md:justify-center md:gap-4 lg:gap-6"
              : "min-h-[42px] w-auto gap-2.5 px-3.5 py-1.5 cursor-pointer hover:border-accent/70 hover:bg-[#14151D] hover:scale-105 active:scale-95"
          )}
        >
          {/* Brand Monogram Avatar / Name Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (isExpanded) {
                handleNavigate(e, "#top");
              } else {
                setIsPinned(true);
              }
            }}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full text-sm font-black tracking-tight text-white transition hover:opacity-90 cursor-pointer"
            title={isExpanded ? "Scroll to top" : "Click to expand navigation"}
          >
            <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-full border border-accent/60 bg-accent/20 text-xs font-bold text-accent shadow-[0_0_15px_rgba(255,122,26,0.35)] transition group-hover:scale-105 group-hover:border-accent group-hover:text-white">
              {site.initials}
            </span>
            <span className="font-bold tracking-tight text-white">
              {isExpanded ? site.name : site.initials}
            </span>
          </button>

          {/* Collapsed Status Dot (pulsing live indicator) */}
          {!isExpanded && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
          )}

          {/* Expanded Content */}
          {isExpanded && (
            <>
              {/* Desktop Nav Links */}
              <ul className="hidden items-center gap-1 md:flex">
                {nav.filter((item) => item.href !== "#contact").map((item) => {
                  const targetId = item.href.replace("#", "");
                  const isActive = active === targetId;

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavigate(e, item.href)}
                        aria-current={isActive ? "location" : undefined}
                        className={cn(
                          "relative inline-flex rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
                          isActive ? "text-white" : "text-zinc-400 hover:text-white"
                        )}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-pill"
                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                            className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-inset ring-white/15"
                          >
                            <span className="absolute inset-x-3 -bottom-px h-[2px] bg-gradient-to-r from-accent to-blue-500 shadow-[0_0_10px_rgba(255,122,26,0.6)]" />
                          </motion.span>
                        )}
                        <span className="relative">{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Right: CTA & Mobile Hamburger */}
              <div className="flex shrink-0 items-center gap-2">
                <span className="hidden sm:inline-flex">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavigate(e, "#contact")}
                    className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#0C0D12] transition-all hover:bg-accent hover:text-black hover:shadow-[0_0_20px_rgba(255,122,26,0.45)]"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen((prev) => !prev);
                  }}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white md:hidden"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {mobileMenuOpen ? <Close className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
            </>
          )}
        </motion.nav>
      </div>

      {/* Floating Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25 }}
            style={{ transformOrigin: "top center" }}
            className="pointer-events-auto mx-auto mt-2 flex w-[calc(100%-1.5rem)] max-w-md flex-col rounded-3xl border border-white/15 bg-[#0C0D12]/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {nav.filter((item) => item.href !== "#contact").map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = active === targetId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigate(e, item.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium transition",
                      isActive ? "bg-white/[0.08] text-accent font-semibold" : "text-zinc-200 hover:bg-white/[0.06]"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavigate(e, "#contact")}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-bold text-black shadow-[0_4px_20px_rgba(255,122,26,0.35)] hover:bg-accent-hover transition-colors"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
