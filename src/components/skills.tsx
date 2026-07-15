import { Reveal, SectionHeading } from "./reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="My toolbox"
        subtitle="Technologies I use daily to design, build, and ship production software."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.08}>
            <div className="glass glow-card h-full rounded-2xl p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border-soft px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
