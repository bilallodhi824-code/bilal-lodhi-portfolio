import { skillGroups, skillRows } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { InteractiveArchitectureHub } from "@/components/ui/InteractiveArchitectureHub";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <SectionLabel>Technical Stack &amp; Architecture</SectionLabel>
        <div className="mt-8 max-w-3xl">
          <h2 className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold tracking-tight text-fg leading-tight">
            Engineered for Resilience &amp; Speed.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
            Core technologies, microservices architectures, and modern libraries used to build production software.
          </p>
        </div>
      </div>

      {/* Infinite Velocity Ribbons */}
      <div className="mt-12 space-y-4 md:space-y-5">
        {skillRows.map((row, r) => (
          <Marquee key={r} reverse={r % 2 === 1} duration={r % 2 === 1 ? 42 : 36}>
            {row.map((skill) => (
              <span
                key={skill}
                className="mx-2.5 flex items-center gap-2.5 rounded-full border border-line bg-surface/85 px-6 py-3 text-base font-medium text-fg/90 backdrop-blur-md transition-colors hover:border-accent/40 md:px-7 md:py-3.5 md:text-lg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {skill}
              </span>
            ))}
          </Marquee>
        ))}
      </div>

      {/* Categorized Architecture Grid */}
      <div className="mx-auto mt-14 md:mt-16 grid max-w-7xl gap-8 px-6 sm:grid-cols-2 md:grid-cols-3 md:px-12">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <SpotlightCard className="card-hover h-full rounded-2xl border border-line bg-surface p-8 md:p-9 shadow-lg">
              <h3 className="text-xl font-bold tracking-tight text-fg border-b border-line/60 pb-5">{group.title}</h3>
              <ul className="mt-6 space-y-3.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-medium text-muted transition-colors hover:text-fg">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* Interactive Runtime Benchmark Simulator */}
      <div className="mx-auto mt-12 max-w-7xl px-6 md:px-12">
        <Reveal delay={0.15}>
          <InteractiveArchitectureHub />
        </Reveal>
      </div>
    </section>
  );
}
