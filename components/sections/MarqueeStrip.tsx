import { VelocityMarquee } from "@/components/ui/VelocityMarquee";

export function MarqueeStrip() {
  return (
    <section aria-label="Disciplines" className="relative overflow-hidden border-y border-line py-10 md:py-14">
      <div className="-rotate-1 scale-105 space-y-3 md:space-y-4">
        <VelocityMarquee
          baseVelocity={-3}
          text="FULL-STACK ARCHITECTURE · MODERN WEB SYSTEMS · LUXURY E-COMMERCE · CLOUD TELEMETRY · "
          className="text-outline px-2 text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-none tracking-tighter"
        />
        <VelocityMarquee
          baseVelocity={3}
          text="NEXT.JS 16 · REACT 19 · TYPESCRIPT · TAILWIND CSS · 14 LIVE DEPLOYMENTS · "
          className="px-2 text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-none tracking-tighter text-fg"
        />
      </div>
    </section>
  );
}
