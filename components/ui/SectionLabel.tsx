import { Reveal } from "./Reveal";

export function SectionLabel({ children }: { index?: string; children: string }) {
  return (
    <Reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-surface-2/80 px-3.5 py-1 text-xs font-medium text-accent backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-xs font-semibold text-accent tracking-normal">{children}</span>
      </div>
    </Reveal>
  );
}
