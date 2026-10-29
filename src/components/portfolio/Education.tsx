import { GraduationCap, BadgeCheck } from "lucide-react";

import { certifications, profile } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-violet/30 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <article className="rounded-3xl border border-border bg-card p-7 sm:p-9">
            <div className="flex flex-wrap items-start gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-glow-violet/25 to-glow-blue/25 text-glow-violet">
                <GraduationCap className="size-6" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {profile.college}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {profile.branch}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Certifications
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 p-4"
                  >
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-glow-blue" aria-hidden />
                    <div>
                      <p className="text-sm font-medium text-foreground">{cert.name}</p>
                      {/* TODO: real dates/credential IDs replace this placeholder */}
                      <p className="mt-0.5 text-xs text-muted-foreground/70">{cert.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
