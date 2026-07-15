"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="aurora" />
      <div className="grid-bg absolute inset-0" />

      <div className="relative mx-auto w-full max-w-5xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance projects
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m Kamlesh. <br />
            I build <span className="gradient-text">fast, polished</span> web
            apps that help businesses win.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted">
            Senior Frontend Developer with {site.yearsOfExperience}+ years of
            experience in React, Next.js, and Angular — turning complex
            requirements into intuitive, high-performance products.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} /> {site.location} · Working worldwide
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              Hire me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-accent"
            >
              See my work
            </a>
            <div className="flex items-center gap-3 text-muted">
              <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                <GithubIcon size={20} />
              </a>
              <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
