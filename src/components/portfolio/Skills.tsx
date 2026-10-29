import { Braces, Code2, ChartBar, CloudCog, ShieldCheck, Users } from "lucide-react";

import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groupIcons = [Braces, Code2, ChartBar, CloudCog, ShieldCheck, Users];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-blue/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technical Skills"
          title="What I work with"
          description="An honest snapshot — strengths where they're strong, learning where I'm learning."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i] ?? Braces;
            return (
              <Reveal key={group.category} delay={(i % 3) * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-glow-violet/40">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-glow-violet/20 to-glow-blue/20 text-glow-violet">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        title={skill.note}
                        className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                      >
                        {skill.name}
                        {skill.note ? (
                          <span className="ml-1.5 text-muted-foreground/70">· learning</span>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
