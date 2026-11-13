"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowUpRight, Check, Copy, WhatsApp } from "@/components/ui/Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.directEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="relative px-6 py-14 md:px-12 md:py-20 overflow-hidden">
      {/* Background soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[min(40rem,100vw)] -translate-x-1/2 -z-10"
      >
        <div className="h-full w-full rounded-full bg-gradient-to-r from-accent/15 via-[#2f6bff]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <SectionLabel>Start A Conversation</SectionLabel>

        <Reveal delay={0.05}>
          <h2 className="mt-8 text-[clamp(2.4rem,6.5vw,5.2rem)] font-bold leading-[1.08] tracking-tight text-fg font-display">
            Let&apos;s build digital excellence together.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">
            Have a project in mind, looking to hire a full-stack developer, or discuss an engineering consultation?
            Reach out directly via WhatsApp, email, or professional channels.
          </p>
        </Reveal>

        {/* Big Interactive Direct Email Row */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href={`mailto:${site.directEmail}`}
              className="inline-flex min-h-12 max-w-full items-center gap-3 break-all text-xl sm:text-2xl lg:text-3xl font-semibold text-fg underline decoration-accent/40 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent"
            >
              <span>{site.directEmail}</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface-2 px-4 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-accent"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </Reveal>

        {/* Channels: WhatsApp Direct & Social Links */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* WhatsApp Direct Highlight Button */}
            <Magnetic strength={0.2}>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-6 py-3.5 text-sm font-semibold text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.2)] backdrop-blur-md transition-all hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/25"
              >
                <WhatsApp className="h-4 w-4 text-emerald-400 transition-transform group-hover:scale-110" />
                <span>WhatsApp: {site.displayPhone}</span>
              </a>
            </Magnetic>

            {/* Social Channels */}
            {site.socials.map((s) => (
              <Magnetic key={s.label} strength={0.15}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3.5 text-sm font-medium text-fg transition-all hover:border-accent hover:text-accent hover:scale-105"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-muted group-hover:text-accent" />
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>

        {/* 3-Column Bento Status Cards */}
        <Reveal delay={0.25}>
          <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line/60 pt-10">
            <div className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md">
              <span className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                24-Hour SLA
              </span>
              <p className="mt-2 text-sm text-fg font-medium">Fast Turnaround Guarantee</p>
              <p className="mt-1 text-xs text-muted">Every inquiry receives a direct response within 24 hours.</p>
            </div>

            <div className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md">
              <span className="text-xs font-semibold text-accent">Location &amp; Zone</span>
              <p className="mt-2 text-sm text-fg font-medium">{site.location}</p>
              <p className="mt-1 text-xs text-muted">Available for global remote contracts &amp; on-site discussions.</p>
            </div>

            <div className="rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-md">
              <span className="text-xs font-semibold text-fg">Engineering Status</span>
              <p className="mt-2 text-sm text-fg font-medium">Available for New Projects</p>
              <p className="mt-1 text-xs text-muted">Full-stack web applications, SaaS platforms &amp; cloud systems.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
