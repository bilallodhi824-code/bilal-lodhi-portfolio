"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ArrowUpRight, ExternalLink, Eye } from "@/components/ui/Icons";

export function Work() {
  const [showAll, setShowAll] = useState(false);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  // Initial display: only first 4 projects; expanded displays all 12
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="relative px-6 py-14 md:px-12 md:py-20">
      {/* Live Preview Modal */}
      <ProjectModal project={previewProject} onClose={() => setPreviewProject(null)} />

      {/* Header Container */}
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Selected Work</SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
              12 Production Deployments.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              Every project below is an active production deployment with verified uptime,
              spanning real estate platforms, AI studios, and enterprise web applications.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-line bg-surface-2/80 px-4 py-2 text-xs font-medium text-muted backdrop-blur md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>12 Systems Operational</span>
          </div>
        </div>

        {/* =========================================================================
            DURVIX-STYLE PROJECT CARDS (Clean, Corporate, Spacious Developer Aesthetics)
           ========================================================================= */}
        <div className="mt-12 md:mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, delay: i < 4 ? i * 0.06 : (i - 4) * 0.04 }}
                className="card-hover group relative flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 sm:p-8 md:p-9 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Top Header: Category & Status */}
                  <div className="flex items-center justify-between border-b border-line/60 pb-5">
                    <span className="rounded-md border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-accent">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Domain */}
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-fg group-hover:text-accent transition-colors md:text-3xl">
                      {project.title}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors"
                    >
                      <span>{project.domain}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {/* Metrics Badge */}
                  <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line/50 bg-surface-2/70 px-3.5 py-1.5 text-xs font-medium text-fg/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & Actions */}
                <div className="mt-8 border-t border-line/60 pt-6">
                  {/* Technology Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-line/70 bg-surface-2/80 px-2.5 py-1 text-xs font-medium text-muted group-hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <button
                      type="button"
                      onClick={() => setPreviewProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-accent-hover hover:scale-105 hover:shadow-[0_0_18px_rgba(255,122,26,0.3)]"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Live Preview</span>
                    </button>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-5 py-2.5 text-xs font-medium text-fg transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Compact Toggle Button to Reveal/Collapse remaining projects */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface-2 px-7 py-3.5 text-xs font-semibold text-fg transition-all hover:border-accent hover:text-accent hover:scale-105 hover:shadow-lg"
          >
            <span>
              {showAll ? "Show Less" : `View All ${projects.length} Projects (${projects.length - 4} more)`}
            </span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-y-0.5">
              {showAll ? "↑" : "↓"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
