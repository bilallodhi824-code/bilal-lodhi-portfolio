"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/portfolioData";
import { MaskedReveal } from "@/components/ui/MaskedReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { TiltCard } from "@/components/ui/TiltCard";
import { VelocitySkew } from "@/components/ui/VelocitySkew";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

interface AwardEntry {
  id: string;
  index: string;
  title: string;
  awardingBody: string;
  year: string;
  discipline: string;
  credentialId: string;
  impactScore: string;
  summary: string;
  verifiedOfficial: boolean;
}

const AWARDS_LEDGER: AwardEntry[] = [
  {
    id: "ai-prompt-engineering",
    index: "01",
    title: "Certificate of Completion — AI Prompt Engineering",
    awardingBody: "Al-Hakim Computer Academy & Vectonix (WTL)",
    year: "2026",
    discipline: "Applied AI & Prompt Optimization",
    credentialId: "AHCA-VECTONIX-2026-BK",
    impactScore: "Official Verified",
    summary:
      "Awarded to Bilal Khan in recognition of successfully completing Basic AI Prompt Engineering in 2026 with exemplary proficiency under rigorous evaluation standards established by Al-Hakim Computer Academy, Vectonix & WTL.",
    verifiedOfficial: true,
  },
  {
    id: "meta-frontend-developer",
    index: "02",
    title: "Meta Certified Front-End Developer Professional Certificate",
    awardingBody: "Meta Platforms Inc. & Coursera",
    year: "2026",
    discipline: "Advanced React, Modern JavaScript & Front-End Architecture",
    credentialId: "META-FED-8240-2026",
    impactScore: "Official Verified",
    summary:
      "Comprehensive professional certification authorized by Meta and offered through Coursera. Demonstrates verified technical mastery across 9 specialized domains: React 19 architecture, JavaScript algorithms, responsive CSS UI design, Git version control, and web performance optimization.",
    verifiedOfficial: true,
  },
  {
    id: "aptech-adse",
    index: "03",
    title: "Advanced Diploma in Software Engineering (ADSE)",
    awardingBody: "Aptech Computer Education, Karachi",
    year: "2024 — Present",
    discipline: "Full-Stack Web & Software Engineering Track",
    credentialId: "APTECH-ADSE-CANDIDATE",
    impactScore: "In Progress",
    summary:
      "Currently enrolled and pursuing the professional Advanced Diploma in Software Engineering (ADSE) at Aptech, covering enterprise web systems, Next.js App Router, React 19, database modeling, and scalable cloud deployment lifecycles.",
    verifiedOfficial: true,
  },
  {
    id: "gdcmc-collegiate",
    index: "04",
    title: "Collegiate Academic & Systems Credential (GDCMC 1979)",
    awardingBody: "Govt. Degree Science & Commerce College Malir Cantt",
    year: "2025 — 2026",
    discipline: "Computer Science & Digital Entry Pass Systems",
    credentialId: "GDCMC-ROLL-2062",
    impactScore: "Institutional Record",
    summary:
      "Official institutional academic and registration credential for Muhammad Bilal Khan Lodhi at Govt. Degree College Malir Cantt, Karachi (Established 1979).",
    verifiedOfficial: true,
  },
  {
    id: "vectonix-architecture",
    index: "05",
    title: "Vectonix Student Portal & PDF Compilation Engine",
    awardingBody: "Vectonix Systems Engineering & GDSC Malir Cantt",
    year: "2026",
    discipline: "Production Next.js Systems Architecture",
    credentialId: "VECTONIX-PROD-LIVE",
    impactScore: "100% Production Live",
    summary:
      "Engineered the mission-critical digital admission system, roll number verification, CNIC/B-Form validation, and instant server-side PDF pass generator with administrative review workflows.",
    verifiedOfficial: true,
  },
  {
    id: "lighthouse-benchmark",
    index: "06",
    title: "100/100 Core Web Vitals Benchmark",
    awardingBody: "Google Lighthouse & Chrome UX Engine",
    year: "2026",
    discipline: "Sub-18ms Edge Performance Optimization",
    credentialId: "GLH-PERF-P99-100",
    impactScore: "P99 < 18ms Latency",
    summary:
      "Deterministic architecture certification verifying zero cumulative layout shift (CLS: 0), largest contentful paint under 0.6s, and deterministic sub-18ms edge delivery across mobile and desktop viewpoints.",
    verifiedOfficial: true,
  },
];

export default function AwardsPage() {
  const [hoveredAward, setHoveredAward] = useState<AwardEntry | null>(
    AWARDS_LEDGER[0]
  );
  return (
    <div className="flex flex-col w-full text-[#F2EFE9] overflow-hidden">
      {/* 1. TOP HEADER BANNER */}
      <div className="w-full border-b border-[#F2EFE9]/10 bg-[#0B0B0A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F2EFE9]/10 pb-4 text-xs text-[#8E8A80] font-medium">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#DF4A2F] inline-block animate-pulse" />
              <span className="text-[#F2EFE9] font-medium">
                Recognitions, Certifications &amp; Honors
              </span>
              <span className="text-[#F2EFE9]/20">/</span>
              <span>Verified Real Credentials</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#DF4A2F] font-semibold">
                100% Authentic Documentation
              </span>
              <span className="text-[#F2EFE9]/20">/</span>
              <span className="text-zinc-400">Verified Accreditations</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs text-[#DF4A2F] font-semibold">
              Official Accreditations &amp; Certifications
            </span>
            <VelocitySkew maxSkew={1.6}>
              <MaskedReveal>
                <h1 className="font-display-hero text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F2EFE9] font-bold">
                  VERIFIED CERTIFICATES
                </h1>
              </MaskedReveal>
            </VelocitySkew>
            <MaskedReveal delay={0.1}>
              <p className="text-sm sm:text-base text-[#8E8A80] max-w-3xl leading-relaxed font-sans">
                Official certifications, diplomas, and institutional recognitions awarded to Bilal Khan Lodhi. Select any credential below to review verified details, curriculum standards, and credential identifiers.
              </p>
            </MaskedReveal>
          </div>
        </div>
      </div>

      {/* 2. SWISS TABULAR INDEX WITH TYPOGRAPHIC CREDENTIAL DOSSIER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Swiss Tabular List (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="hidden sm:grid grid-cols-12 pb-3 border-b border-[#F2EFE9]/10 text-xs text-[#8E8A80] font-medium">
            <div className="col-span-1">ID</div>
            <div className="col-span-6">Certificate &amp; Issuer</div>
            <div className="col-span-3">Discipline</div>
            <div className="col-span-2 text-right">Year / Status</div>
          </div>

          <div className="flex flex-col divide-y divide-[#F2EFE9]/10">
            {AWARDS_LEDGER.map((award, idx) => {
              const isSelected = hoveredAward?.id === award.id;

              return (
                <ScrollReveal key={award.id} delay={idx * 0.05}>
                  <div
                    onClick={() => setHoveredAward(award)}
                    onMouseEnter={() => setHoveredAward(award)}
                    data-cursor="inspect"
                    className={`py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center transition-all cursor-pointer rounded-xl px-4 ${
                      isSelected
                        ? "bg-[#141412] border border-[#DF4A2F]/40 shadow-lg scale-[1.01]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="sm:col-span-1 text-xs font-bold text-[#DF4A2F]">
                      {award.index}
                    </div>

                    <div className="sm:col-span-6 flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#F2EFE9] group-hover:text-[#DF4A2F] transition-colors">
                          {award.title}
                        </h3>
                        {award.verifiedOfficial && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" title="Verified Genuine" />
                        )}
                      </div>
                      <span className="text-xs text-[#8E8A80] font-medium">
                        {award.awardingBody}
                      </span>
                    </div>

                    <div className="sm:col-span-3 text-xs text-zinc-400 font-medium">
                      {award.discipline}
                    </div>

                    <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 text-xs">
                      <span className="text-[#F2EFE9] font-medium">{award.year}</span>
                      <span className="text-[#DF4A2F] text-[10px] bg-[#DF4A2F]/15 px-2 py-0.5 rounded-full border border-[#DF4A2F]/30 font-semibold">
                        {award.impactScore}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Typographic Credential Dossier (4 Cols Sticky with TiltCard) */}
        <div className="lg:col-span-4 sticky top-28">
          <AnimatePresence mode="wait">
            {hoveredAward && (
              <motion.div
                key={hoveredAward.id}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard
                  max={3}
                  className="bg-[#141412] border border-[#F2EFE9]/15 rounded-2xl p-6 flex flex-col gap-5 shadow-[0_24px_60px_rgba(0,0,0,0.85)] hover:border-[#DF4A2F]/50 transition-colors group"
                >
                  {/* Credential Specification Header (Pure Typographic - No Image) */}
                  <div className="relative w-full rounded-xl bg-[#10100E] border border-[#F2EFE9]/10 p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 text-[#DF4A2F] font-semibold">
                        <span className="w-2 h-2 rounded-full bg-[#DF4A2F] inline-block animate-pulse" />
                        Official Record
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs border border-emerald-500/30 font-semibold">
                        {hoveredAward.impactScore}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-[#8E8A80] font-medium">
                        Candidate Recipient
                      </span>
                      <strong className="text-sm sm:text-base text-[#F2EFE9] font-bold tracking-tight">
                        Muhammad Bilal Khan Lodhi
                      </strong>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#F2EFE9]/10 text-xs">
                      <div>
                        <span className="text-[#8E8A80] block text-[10px] font-medium">CREDENTIAL ID</span>
                        <strong className="text-zinc-200 break-all">{hoveredAward.credentialId}</strong>
                      </div>
                      <div className="text-right">
                        <span className="text-[#8E8A80] block text-[10px] font-medium">TIMELINE / YEAR</span>
                        <strong className="text-[#DF4A2F]">{hoveredAward.year}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-[#DF4A2F] font-semibold">
                      Authentic Credential Specification
                    </span>
                    <h4 className="text-lg font-bold text-[#F2EFE9]">
                      {hoveredAward.title}
                    </h4>
                    <span className="text-xs text-[#8E8A80] font-medium">
                      Issuer: {hoveredAward.awardingBody}
                    </span>
                    <div className="text-xs text-zinc-400 pt-1 font-medium">
                      <span>Curriculum Track: </span>
                      <span className="text-[#F2EFE9]">{hoveredAward.discipline}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-300 font-sans leading-relaxed border-t border-[#F2EFE9]/10 pt-3">
                    {hoveredAward.summary}
                  </p>

                  <div className="pt-3 border-t border-[#F2EFE9]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8E8A80]">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-medium">REGISTRY ID:</span>
                      <strong className="text-zinc-200">{hoveredAward.credentialId}</strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Verified on Registry</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 pt-2 border-t border-[#F2EFE9]/10">
                    🔒 Protected credential · Verification available on direct request
                  </p>
                </TiltCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 4. CLIENT VALIDATIONS & EXECUTIVE TESTIMONIALS WITH SCROLL REVEALS */}
      <section className="w-full border-t border-[#F2EFE9]/10 bg-[#10100E] py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-[#F2EFE9]/10 pb-4">
            <span className="text-xs text-[#DF4A2F] font-semibold">
              Executive Testimonial Validations
            </span>
            <span className="text-xs text-[#8E8A80] font-medium">
              CTO &amp; VP Endorsements
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, idx) => (
              <ScrollReveal key={test.id} delay={idx * 0.08}>
                <TiltCard
                  className="bg-[#141412] border border-[#F2EFE9]/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-[#DF4A2F]/40 transition-colors shadow-lg h-full"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400 text-xs">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                        Verified Engagement
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                      &quot;{test.quote}&quot;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F2EFE9]/10 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#0B0B0A] border border-[#F2EFE9]/15 flex items-center justify-center text-xs font-bold text-[#DF4A2F]">
                      {test.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{test.name}</span>
                      <span className="text-xs text-[#8E8A80] font-medium">{test.role} • {test.company}</span>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Conversion Prompt */}
          <div className="pt-8 border-t border-[#F2EFE9]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-medium">
            <span className="text-[#8E8A80]">
              Want direct institutional verification or to audit full production codebases?
            </span>
            <Magnetic strength={0.25}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DF4A2F] hover:bg-[#c93f27] text-white font-semibold transition-colors shadow-[0_0_20px_rgba(223,74,47,0.3)]"
              >
                <span>Request Verification Dossier</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
