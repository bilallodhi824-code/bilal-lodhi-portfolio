"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";
import { EASE_IN_OUT } from "@/lib/motion";
import { Close, ExternalLink, Globe, Laptop } from "@/components/ui/Icons";

interface Props {
  project: Project | null;
  onClose: () => void;
}

type DeviceMode = "desktop" | "mobile";
type MobileTab = "preview" | "details";

export function ProjectModal({ project, onClose }: Props) {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const [mobileTab, setMobileTab] = useState<MobileTab>("preview");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    setIframeLoaded(false);
    setIframeKey((prev) => prev + 1);
  }, [project, device]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.35, ease: EASE_IN_OUT }}
          className="relative z-10 flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        >
          {/* Top Control Bar */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line bg-surface-2 px-3 py-2.5 sm:px-5 sm:py-3">
            {/* Left: Window Dots & Domain */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 text-xs text-muted font-medium truncate max-w-[140px] sm:max-w-[240px]">
                {project.domain}
              </span>
            </div>

            {/* Center: Device Mode Switcher (Desktop vs Mobile) */}
            <div className="flex items-center rounded-lg border border-line bg-black/40 p-1">
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs transition-all ${
                  device === "desktop"
                    ? "bg-surface text-accent shadow-sm font-semibold"
                    : "text-muted hover:text-fg font-medium"
                }`}
              >
                <Laptop className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs transition-all ${
                  device === "mobile"
                    ? "bg-surface text-accent shadow-sm font-semibold"
                    : "text-muted hover:text-fg font-medium"
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                <span className="hidden xs:inline">Mobile</span>
              </button>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-black transition-transform hover:scale-105"
              >
                <span>Launch</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <Close className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Screen (< lg) Tab Toggle (Live View vs Specs) */}
          <div className="flex border-b border-line bg-surface lg:hidden">
            <button
              type="button"
              onClick={() => setMobileTab("preview")}
              className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
                mobileTab === "preview"
                  ? "border-b-2 border-accent text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              Interactive Preview
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("details")}
              className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${
                mobileTab === "details"
                  ? "border-b-2 border-accent text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              Details &amp; Stack
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
            {/* Interactive Preview Container */}
            <div
              className={`relative flex flex-1 items-center justify-center overflow-auto bg-[#050508] p-2 sm:p-5 ${
                mobileTab === "details" ? "hidden lg:flex" : "flex"
              }`}
            >
              {/* Fallback Loading State */}
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-surface/90 text-xs text-muted font-medium">
                  <div className="h-7 w-7 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                  <span>Loading deployment ({project.domain})...</span>
                </div>
              )}

              {/* Viewport Frame */}
              {device === "desktop" ? (
                /* Desktop Browser Frame */
                <div className="flex h-full w-full max-w-full flex-col overflow-hidden rounded-xl border border-line bg-[#0e0e13] shadow-2xl">
                  {/* Mini Address Bar */}
                  <div className="flex items-center gap-2 border-b border-line/60 bg-surface-2/80 px-3 py-1.5 text-xs text-muted font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="truncate text-fg/75">{project.href}</span>
                  </div>
                  <div className="relative flex-1 bg-white">
                    <iframe
                      key={`desktop-${iframeKey}`}
                      src={project.href}
                      title={`${project.title} desktop preview`}
                      onLoad={() => setIframeLoaded(true)}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      className="h-full w-full border-0"
                    />
                  </div>
                </div>
              ) : (
                /* Fully Responsive Mobile Smartphone Chassis */
                <div className="relative flex h-full w-full items-center justify-center p-2">
                  <div className="relative flex h-full max-h-[700px] w-full max-w-[360px] flex-col overflow-hidden rounded-[32px] sm:rounded-[38px] border-[6px] sm:border-[8px] border-[#181820] bg-black shadow-2xl ring-1 ring-white/10">
                    {/* Top Notch / Dynamic Island */}
                    <div className="absolute top-2 z-20 flex w-full justify-center pointer-events-none">
                      <div className="flex h-4 w-20 items-center justify-end rounded-full bg-black px-2 shadow-inner">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#202028]" />
                      </div>
                    </div>

                    {/* Mobile Web Viewport */}
                    <div className="relative flex-1 overflow-hidden bg-white">
                      <iframe
                        key={`mobile-${iframeKey}`}
                        src={project.href}
                        title={`${project.title} mobile preview`}
                        onLoad={() => setIframeLoaded(true)}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        className="h-full w-full border-0"
                      />
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="pointer-events-none absolute bottom-1.5 z-20 flex w-full justify-center">
                      <div className="h-1 w-24 rounded-full bg-black/40" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project Dossier Sidebar */}
            <div
              className={`w-full shrink-0 overflow-y-auto border-t border-line bg-surface p-6 md:p-8 lg:w-[360px] xl:w-[390px] lg:border-l lg:border-t-0 ${
                mobileTab === "preview" ? "hidden lg:block" : "block"
              }`}
            >
              <div className="flex items-center justify-between text-xs text-muted font-medium">
                <span className="text-accent font-semibold">{project.category}</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              </div>

              <h2 id="modal-project-title" className="mt-4 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                {project.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-6 rounded-xl border border-line bg-surface-2/70 p-4">
                <span className="flex items-center gap-2 text-xs font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Performance
                </span>
                <p className="mt-1 text-sm font-semibold text-fg">{project.metrics}</p>
              </div>

              {/* Role */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold text-muted">Engineering Role</h3>
                <p className="mt-1 text-sm font-medium text-fg">{project.role}</p>
              </div>

              {/* Technologies */}
              <div className="mt-5">
                <h3 className="text-xs font-semibold text-muted">Tech Stack</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-line">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-black transition-transform hover:scale-[1.02]"
                >
                  Visit Live Production Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
