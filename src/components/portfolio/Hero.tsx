import { ArrowDown, Github, Linkedin, Sparkles, Trophy, Users } from "lucide-react";

import { featuredHighlights, heroImage, profile } from "@/data/portfolio";

const highlightIcons = [Trophy, Sparkles, Users];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* Abstract technology background */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover opacity-80"
      />
      <div className="hero-gradient absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-32 sm:px-6">
        <p className="animate-float-slow inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-glow-violet" aria-hidden />
          {profile.tagline}
        </p>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="text-glow mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          <span className="gradient-text">{profile.headline}</span>
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="glow-card inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Explore My Projects
            <ArrowDown className="size-4" aria-hidden />
          </a>
          <a
            href="#achievements"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
          >
            View My Achievements
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Connect With Me
          </a>

          <div className="ml-1 flex items-center gap-2">
            <a
              href={profile.github ?? "#contact"}
              aria-label="GitHub profile"
              title={profile.github ? "GitHub" : "GitHub link coming soon"}
              className="rounded-full border border-border bg-white/5 p-2.5 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
            >
              <Github className="size-4" aria-hidden />
            </a>
            <a
              href={profile.linkedin ?? "#contact"}
              aria-label="LinkedIn profile"
              title={profile.linkedin ? "LinkedIn" : "LinkedIn link coming soon"}
              className="rounded-full border border-border bg-white/5 p-2.5 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        {/* Featured highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {featuredHighlights.map((item, i) => {
            const Icon = highlightIcons[i] ?? Sparkles;
            return (
              <a
                key={item.label + item.detail}
                href={item.href}
                className="group rounded-2xl border border-border bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-glow-violet/50 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-glow-violet/25 to-glow-blue/25 text-glow-violet">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground/80">{item.edition}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
