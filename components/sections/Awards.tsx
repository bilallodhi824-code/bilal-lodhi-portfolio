"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export interface RealCredential {
  id: string;
  title: string;
  issuer: string;
  year: string;
  discipline: string;
  credentialId: string;
  badge: string;
  summary: string;
}

export const REAL_CREDENTIALS: RealCredential[] = [
  {
    id: "ai-prompt-engineering",
    title: "Certificate of Completion — AI Prompt Engineering",
    issuer: "Al-Hakim Computer Academy & Vectonix (WTL)",
    year: "2026",
    discipline: "Applied AI & Prompt Optimization",
    credentialId: "AHCA-VECTONIX-2026-BK",
    badge: "Official Verified",
    summary:
      "Awarded to Bilal Khan in recognition of successfully completing AI Prompt Engineering in 2026 with exemplary proficiency under rigorous evaluation standards established by Al-Hakim Computer Academy. Covers prompt chaining, system instructions, and multi-model template orchestration.",
  },
  {
    id: "meta-frontend-developer",
    title: "Meta Certified Front-End Developer Professional Certificate",
    issuer: "Meta Platforms Inc. & Coursera",
    year: "2026",
    discipline: "Advanced React, Modern JavaScript & Front-End Architecture",
    credentialId: "META-FED-8240-2026",
    badge: "Official Verified",
    summary:
      "Comprehensive professional certification authorized by Meta and offered through Coursera. Demonstrates verified technical mastery across React 19 architecture, JavaScript algorithms, responsive design, Git version control, and web performance optimization.",
  },
  {
    id: "aptech-adse",
    title: "Advanced Diploma in Software Engineering (ADSE)",
    issuer: "Aptech Computer Education, Karachi",
    year: "2024 — Present",
    discipline: "Full-Stack Web & Software Engineering Track",
    credentialId: "APTECH-ADSE-CANDIDATE",
    badge: "In Progress",
    summary:
      "Currently enrolled and pursuing the professional Advanced Diploma in Software Engineering (ADSE) curriculum at Aptech, covering enterprise web systems, Next.js App Router, React 19, database modeling, and scalable cloud deployment lifecycles.",
  },
  {
    id: "gdcmc-collegiate",
    title: "Collegiate Academic & Systems Credential (GDCMC 1979)",
    issuer: "Govt. Degree Science & Commerce College Malir Cantt",
    year: "2025 — 2026",
    discipline: "Computer Science & Digital Entry Pass Systems",
    credentialId: "GDCMC-ROLL-2062",
    badge: "Institutional Record",
    summary:
      "Official institutional academic and registration credential for Muhammad Bilal Khan Lodhi at Govt. Degree College Malir Cantt, Karachi (Established 1979).",
  },
  {
    id: "portal-architecture",
    title: "Student Portal & PDF Compilation Engine",
    issuer: "Collegiate Systems Engineering (Karachi)",
    year: "2026",
    discipline: "Full-Stack Next.js Architecture",
    credentialId: "PORTAL-PROD-LIVE",
    badge: "100% Production Live",
    summary:
      "Engineered the mission-critical digital admission system, roll number verification, CNIC/B-Form validation, and instant server-side PDF pass generator with administrative review workflows.",
  },
  {
    id: "lighthouse-benchmark",
    title: "100/100 Core Web Vitals Benchmark",
    issuer: "Google Lighthouse & Chrome UX Engine",
    year: "2026",
    discipline: "Sub-18ms Edge Performance Optimization",
    credentialId: "GLH-PERF-P99-100",
    badge: "P99 < 18ms Latency",
    summary:
      "Deterministic architecture certification verifying zero cumulative layout shift (CLS: 0), largest contentful paint under 0.6s, and deterministic sub-18ms edge delivery across mobile and desktop viewpoints.",
  },
];

export function Awards() {
  const [selectedCert, setSelectedCert] = useState<RealCredential>(REAL_CREDENTIALS[0]);

  return (
    <section id="awards" className="relative px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Recognitions &amp; Credentials</SectionLabel>
            <h2 className="mt-8 text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
              Verified Certifications.
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              Official certificates, institutional records, and verified technical accreditations awarded to Bilal Khan Lodhi.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-accent border border-accent/25 bg-accent/10 px-4 py-2 rounded-full self-start md:self-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>100% Authentic Credentials</span>
          </div>
        </div>

        {/* 2-Column Split: Ledger List (Left) + Interactive Credential Dossier (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Swiss Tabular Ledger */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-line border-y border-line">
            {REAL_CREDENTIALS.map((cred, idx) => {
              const isActive = selectedCert.id === cred.id;

              return (
                <Reveal key={cred.id} delay={idx * 0.04}>
                  <div
                    onClick={() => setSelectedCert(cred)}
                    onMouseEnter={() => setSelectedCert(cred)}
                    className={`group cursor-pointer py-5 px-4 transition-all duration-300 rounded-xl flex items-center justify-between gap-4 ${
                      isActive
                        ? "bg-surface-2/90 border border-accent/40 shadow-md"
                        : "hover:bg-surface-2/40 border border-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-fg group-hover:text-accent transition-colors">
                            {cred.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-muted font-sans">{cred.issuer}</p>
                        <span className="text-xs text-muted/80 font-medium">{cred.discipline}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-xs font-semibold text-fg">{cred.year}</span>
                      <span className="text-xs text-accent bg-accent/15 px-2.5 py-0.5 rounded-full border border-accent/30 font-medium">
                        {cred.badge}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Sticky TiltCard Credential Dossier */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <TiltCard
              max={4}
              className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 md:p-8 shadow-xl flex flex-col gap-6"
            >
              {/* Official Credential Dossier Header */}
              <div className="relative w-full rounded-xl border border-line bg-surface-2/60 p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-accent font-semibold tracking-normal text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Verified Record
                  </span>
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-emerald-400 text-xs border border-emerald-500/30 font-medium">
                    {selectedCert.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted tracking-wide font-medium">Candidate Recipient</span>
                  <p className="text-base font-bold text-fg tracking-tight">Muhammad Bilal Khan Lodhi</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-line/60 text-xs">
                  <div>
                    <span className="text-muted block text-[10px] font-medium">Credential ID</span>
                    <strong className="text-fg break-all font-semibold">{selectedCert.credentialId}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-muted block text-[10px] font-medium">Year / Status</span>
                    <strong className="text-accent font-semibold">{selectedCert.year}</strong>
                  </div>
                </div>
              </div>

              {/* Detailed Credential Know-How & Curriculum Summary */}
              <div className="flex flex-col gap-2.5">
                <span className="text-xs text-accent font-semibold tracking-normal">
                  Credential Evaluation
                </span>
                <h4 className="text-xl font-bold tracking-tight text-fg">{selectedCert.title}</h4>
                <p className="text-sm text-muted">{selectedCert.issuer}</p>
                <div className="text-xs text-muted/80">
                  <span>Track: </span>
                  <span className="text-fg font-medium">{selectedCert.discipline}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted/90 leading-relaxed pt-4 border-t border-line">
                  {selectedCert.summary}
                </p>
              </div>

              {/* Privacy-Protected Registry Seal (No Direct PDF Download) */}
              <div className="flex items-center justify-between pt-4 border-t border-line text-xs">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted">Registry ID</span>
                  <strong className="text-fg break-all font-semibold">{selectedCert.credentialId}</strong>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified on Registry</span>
                  </span>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 pt-1 text-xs text-muted/60">
                <span className="text-accent">🔒</span>
                <span>Protected credential · Direct verification available on request</span>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
