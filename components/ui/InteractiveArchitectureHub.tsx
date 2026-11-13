"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Counter } from "@/components/ui/Counter";

interface ModeData {
  id: string;
  name: string;
  shortName: string;
  latency: number;
  cacheHit: number;
  memory: number;
  nodes: { label: string; status: string; detail: string }[];
  description: string;
}

const MODES: ModeData[] = [
  {
    id: "ppr",
    name: "Partial Prerendering (PPR)",
    shortName: "Partial Prerender",
    latency: 14,
    cacheHit: 99,
    memory: 28,
    description: "Instant static shell streamed from global edge with asynchronous dynamic slots and zero-bundle hydration.",
    nodes: [
      { label: "Edge Gateway", status: "Active", detail: "Global Anycast <6ms" },
      { label: "Streaming PPR", status: "Cached", detail: "Static HTML Shell" },
      { label: "Dynamic Slot", status: "Hydrating", detail: "Zero-bundle worker" },
    ],
  },
  {
    id: "websockets",
    name: "WebSocket State Engine",
    shortName: "WebSockets",
    latency: 18,
    cacheHit: 94,
    memory: 42,
    description: "Bidirectional binary framing with multiplexed message brokers and sub-20ms broadcast sync.",
    nodes: [
      { label: "WS Connection", status: "Connected", detail: "TLS 1.3 Multiplex" },
      { label: "Redis Pub/Sub", status: "Active", detail: "100k msg/sec pool" },
      { label: "State Sync", status: "Synced", detail: "CRDT resolution" },
    ],
  },
  {
    id: "edge-db",
    name: "Edge DB & Cache Mesh",
    shortName: "Edge DB",
    latency: 12,
    cacheHit: 98,
    memory: 34,
    description: "Prisma connection pooler with global read-replicas, prepared statements, and distributed Redis KV caching.",
    nodes: [
      { label: "Query Router", status: "Optimized", detail: "Prepared Statements" },
      { label: "In-Memory Cache", status: "HIT", detail: "TTL 3600s Edge" },
      { label: "Postgres Replica", status: "Synced", detail: "Multi-region R/O" },
    ],
  },
];

export function InteractiveArchitectureHub() {
  const [activeMode, setActiveMode] = useState<string>("ppr");
  const current = MODES.find((m) => m.id === activeMode) || MODES[0];

  return (
    <div className="w-full rounded-2xl border border-line bg-surface p-7 sm:p-9 md:p-10 shadow-xl relative overflow-hidden transition-all hover:border-accent/30">
      {/* Top subtle hairline glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />

      {/* Header Ledger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-line/60 pb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-ring absolute inset-0 rounded-full bg-accent" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="text-xs text-fg font-semibold tracking-normal">
            Interactive Architecture Benchmark
          </span>
          <span className="text-muted text-xs hidden md:inline">
            · Real-Time Node Simulator
          </span>
        </div>

        {/* Mode Selector Tabs */}
        <div className="inline-flex p-1 bg-surface-2 rounded-xl border border-line gap-1 overflow-x-auto">
          {MODES.map((m) => {
            const isActive = m.id === activeMode;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveMode(m.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs transition-colors shrink-0 ${
                  isActive ? "text-black font-semibold" : "text-muted hover:text-fg font-medium"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-arch-mode-pill"
                    className="absolute inset-0 bg-accent rounded-lg shadow-[0_0_12px_rgba(255,122,26,0.4)]"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{m.shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Benchmark Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-8 flex flex-col gap-8"
        >
          {/* Top Info + Metric Gauges */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 flex flex-col gap-2.5">
              <span className="text-xs text-accent font-semibold tracking-normal">
                Architecture Profile
              </span>
              <h4 className="text-2xl font-bold tracking-tight text-fg md:text-3xl">
                {current.name}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-muted">
                {current.description}
              </p>
            </div>

            {/* 3 Metric Badges */}
            <div className="md:col-span-6 grid grid-cols-3 gap-3.5">
              <div className="p-4 sm:p-5 bg-surface-2/80 rounded-xl border border-line flex flex-col justify-between">
                <span className="text-[11px] font-medium text-muted">P99 Latency</span>
                <div className="text-2xl sm:text-3xl font-bold text-accent mt-2">
                  <Counter to={current.latency} suffix="ms" />
                </div>
                <span className="text-[11px] font-medium text-emerald-400 mt-1">● Sub-20ms</span>
              </div>

              <div className="p-4 sm:p-5 bg-surface-2/80 rounded-xl border border-line flex flex-col justify-between">
                <span className="text-[11px] font-medium text-muted">Cache Hit</span>
                <div className="text-2xl sm:text-3xl font-bold text-fg mt-2">
                  <Counter to={current.cacheHit} suffix="%" />
                </div>
                <span className="text-[11px] font-medium text-muted mt-1">Edge Tier</span>
              </div>

              <div className="p-4 sm:p-5 bg-surface-2/80 rounded-xl border border-line flex flex-col justify-between">
                <span className="text-[11px] font-medium text-muted">Memory</span>
                <div className="text-2xl sm:text-3xl font-bold text-fg mt-2">
                  <Counter to={current.memory} suffix="MB" />
                </div>
                <span className="text-[11px] font-medium text-muted mt-1">Per Worker</span>
              </div>
            </div>
          </div>

          {/* Node Pipeline Flow */}
          <div className="border-t border-line/60 pt-6">
            <span className="text-xs font-semibold text-muted mb-4 block">
              Execution Pipeline Nodes
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {current.nodes.map((node, i) => (
                <div
                  key={node.label}
                  className="p-4 bg-surface-2/60 rounded-xl border border-line flex flex-col gap-2 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted font-medium">Node {i + 1}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                      {node.status}
                    </span>
                  </div>
                  <span className="font-bold text-fg text-sm">{node.label}</span>
                  <span className="text-xs text-muted/80">{node.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

