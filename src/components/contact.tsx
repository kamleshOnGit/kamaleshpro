"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { Reveal, SectionHeading } from "./reveal";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border-soft bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

  return (
    <section id="contact" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        subtitle="Tell me about your project — I usually respond within 24 hours."
      />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-2">
          <div className="space-y-5">
            <a
              href={`mailto:${site.email}`}
              className="glass glow-card flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-muted">Email</div>
                <div className="text-sm font-medium">{site.email}</div>
              </div>
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="glass glow-card flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-muted">Phone</div>
                <div className="text-sm font-medium">{site.phone}</div>
              </div>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass glow-card flex items-center gap-4 rounded-2xl p-5"
            >
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <div className="text-sm text-muted">LinkedIn</div>
                <div className="text-sm font-medium">Kamlesh Mishra</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="glass space-y-4 rounded-2xl p-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className={inputClass}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Project type (e.g. web app, dashboard, audit)"
              className={inputClass}
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={inputClass}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-500">
                <CheckCircle2 size={16} /> Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle size={16} /> Something went wrong — please email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
