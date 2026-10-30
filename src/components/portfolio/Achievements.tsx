import { Award, Medal, Trophy } from "lucide-react";

import { achievements } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = [Trophy, Medal, Award];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-blue/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements & Hackathons"
          title="Proof of showing up and shipping"
          description="Hackathon placements and competition results — earned with teams, not claimed alone."
        />

        <ol className="relative mt-14 space-y-6 before:absolute before:left-[1.4rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-glow-violet/50 before:via-border before:to-transparent sm:before:left-[1.65rem]">
          {achievements.map((item, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <li key={item.title} className="relative">
                <Reveal delay={i * 90}>
                  <div className="flex gap-4 sm:gap-6">
                    <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-card sm:size-13">
                      <Icon className="size-5 text-glow-violet" aria-hidden />
                    </span>
                    <div className="flex-1 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-glow-violet/40 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="rounded-full bg-gradient-to-r from-glow-violet/25 to-glow-blue/25 px-3 py-1 font-display text-sm font-bold text-foreground">
                          {item.position}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <span className="text-xs text-muted-foreground/80">{item.edition}</span>
                        <span className="ml-auto text-xs text-muted-foreground/60">
                          {item.year}
                        </span>
                      </div>
                      {item.description ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p> : null}
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal delay={200}>
          <p className="mt-8 text-center text-xs text-muted-foreground/70">
            Event logos, certificates, and photographs will be added here as they become
            available — placeholders are reserved for them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
