import { Reveal, SectionHeading } from "./reveal";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="About"
        title="Frontend expertise you can rely on"
      />

      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a Senior Frontend Developer with{" "}
            <span className="font-semibold text-foreground">
              11 years of experience
            </span>{" "}
            — specializing in Angular (5+ years) and React (4+ years). I&apos;ve
            led projects, mentored teams, and architected scalable,
            high-performance applications for CRMs, outreach platforms, HR
            systems, and more.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I care deeply about code quality, performance, and the small
            details that make a product feel great. Whether you need a full
            build, a rescue mission, or a senior pair of hands on your team —
            I can help.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass glow-card rounded-2xl p-6 text-center">
                <div className="gradient-text text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
