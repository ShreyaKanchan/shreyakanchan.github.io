import { GraduationCap, MapPin } from "lucide-react";

import { about, profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Curious builder, quiet organizer"
          description="A short, honest picture of who I am and how I work."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <aside className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">Quick facts</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-4 shrink-0 text-glow-violet" aria-hidden />
                  <div>
                    <p className="font-medium text-foreground">{profile.branch}</p>
                    <p className="mt-0.5 text-muted-foreground">{profile.college}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-glow-blue" aria-hidden />
                  <div>
                    <p className="font-medium text-foreground">Navi Mumbai, India</p>
                    <p className="mt-0.5 text-muted-foreground">Open to hackathons & internships</p>
                  </div>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
