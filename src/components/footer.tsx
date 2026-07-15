import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name} 
        </p>
        <div className="flex items-center gap-4 text-muted">
          <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            <GithubIcon size={18} />
          </a>
          <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            <LinkedinIcon size={18} />
          </a>
          <a aria-label="Email" href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
