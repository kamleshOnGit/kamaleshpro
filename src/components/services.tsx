import { Code2, Palette, Zap, BarChart3, ShieldCheck, Users } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";
import { services } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  code: <Code2 size={24} />,
  palette: <Palette size={24} />,
  zap: <Zap size={24} />,
  chart: <BarChart3 size={24} />,
  shield: <ShieldCheck size={24} />,
  users: <Users size={24} />,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Services"
        title="What I can do for you"
        subtitle="From greenfield builds to performance rescues — end-to-end frontend expertise for your product."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div className="glass glow-card h-full rounded-2xl p-6">
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                {icons[s.icon]}
              </div>
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
