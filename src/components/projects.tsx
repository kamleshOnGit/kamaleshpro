import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { Reveal, SectionHeading } from "./reveal";
import { projects, site } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="Live products I designed, built, and shipped — try them out."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <div className="glass glow-card flex h-full flex-col rounded-2xl p-6">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="flex gap-3 text-muted">
                  <a
                    aria-label={`${p.name} source code`}
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    aria-label={`${p.name} live site`}
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                Visit live site <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-accent"
        >
          <GithubIcon size={16} /> More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
