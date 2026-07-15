import { Reveal, SectionHeading } from "./reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="11 years of shipping software"
      />

      <div className="relative border-l border-border-soft pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_2px] shadow-accent/50" />
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {job.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold">
              {job.role} <span className="text-muted">· {job.company}</span>
            </h3>
            <ul className="mt-3 space-y-2">
              {job.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
