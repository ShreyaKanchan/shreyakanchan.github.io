import { CalendarDays, Building2, Code2, HeartHandshake } from "lucide-react";

import { leadership } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-violet/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Beyond Building — Leading & Organizing"
          description="The other half of building things: bringing people together to actually make them happen."
        />

        {/* Featured: ENIGMA 5.0 */}
        <Reveal className="mt-14">
          <article className="overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-glow-violet/40 hover:glow-card">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
              <div className="p-7 sm:p-10">
                <p className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-glow-violet/25 to-glow-blue/25 px-4 py-1.5 font-display text-sm font-bold text-foreground">
                  {leadership.featured.role}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {leadership.featured.event}
                </h3>
                <p className="mt-1 font-medium text-glow-violet">
                  {leadership.featured.eventType}
                </p>

                <ul className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <li className="inline-flex items-center gap-1.5">
                    <Building2 className="size-4 text-glow-blue" aria-hidden />
                    {leadership.featured.organization}
                  </li>
                </ul>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {leadership.featured.description}
                </p>
              </div>

              {/* Original event photos */}
              <div className="border-t border-border p-7 sm:p-10 lg:border-l lg:border-t-0">
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <CalendarDays className="size-4" aria-hidden />
                  Event gallery
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {leadership.photos.map((photo) => (
                    <img
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-xl border border-border bg-secondary/40 object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Community involvement */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {leadership.community.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <article className="h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-glow-blue/40">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-glow-violet/20 to-glow-blue/20 text-glow-violet">
                  {i === 0 ? (
                    <Code2 className="size-5" aria-hidden />
                  ) : (
                    <HeartHandshake className="size-5" aria-hidden />
                  )}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-3xl text-center font-display text-lg font-medium text-foreground/90 sm:text-xl">
            {leadership.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
