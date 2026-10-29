import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const channels = [
    {
      label: "GitHub",
      value: profile.github ? "github.com" : "Link to be added",
      href: profile.github,
      Icon: Github,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin ? "linkedin.com" : "Link to be added",
      href: profile.linkedin,
      Icon: Linkedin,
    },
    {
      label: "Email",
      value: profile.email ?? "Address to be added",
      href: profile.email ? `mailto:${profile.email}` : null,
      Icon: Mail,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-violet/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Have an idea?{" "}
            <span className="gradient-text">Let's build something meaningful.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Whether it's a hackathon team, a project collaboration, or an opportunity — I'd be
            glad to hear about it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon }) => {
              const inner = (
                <>
                  <Icon className="size-5 text-glow-violet" aria-hidden />
                  <span className="mt-2 block text-sm font-semibold text-foreground">{label}</span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {value}
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-glow-violet/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      title={`${label} link coming soon`}
                      className="block cursor-default rounded-2xl border border-dashed border-border bg-card/60 p-5 opacity-80"
                    >
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="glow-card mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Say Hello
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          ) : (
            <span
              title="Add the real email address in src/data/portfolio.ts"
              className="mt-10 inline-flex cursor-default items-center gap-2 rounded-full border border-dashed border-border px-8 py-3.5 text-sm font-semibold text-muted-foreground/70"
            >
              Contact button — email coming soon
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          )}
        </Reveal>
      </div>
    </section>
  );
}
