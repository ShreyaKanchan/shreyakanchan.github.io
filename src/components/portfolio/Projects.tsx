import { useState } from "react";
import { ChevronDown, ExternalLink, Lock } from "lucide-react";

import { projects, type ProjectLink } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function LinkButton({ link, note }: { link: ProjectLink | null; note: string }) {
  if (!link) {
    return (
      <span
        title={note}
        className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-2 text-xs font-medium text-muted-foreground/70"
      >
        <Lock className="size-3.5" aria-hidden />
        Link coming soon
      </span>
    );
  }
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/5 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white/10"
    >
      {link.label}
      <ExternalLink className="size-3.5" aria-hidden />
    </a>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal delay={(index % 3) * 100}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-glow-violet/40 hover:glow-card">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={800}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
            aria-hidden
          />
        </div>

        <div className="flex flex-1 flex-col p-6 pt-2">
          <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {expanded ? (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
              {project.details}
            </p>
          ) : null}

          {project.tags.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-xs text-muted-foreground/70">
              Tech stack — details to be added
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-border pt-5">
            <LinkButton
              link={project.links.github ? { label: "GitHub Repo", href: project.links.github } : null}
              note="Repository link will be added here"
            />
            <LinkButton
              link={project.links.demo ? { label: "Live Demo", href: project.links.demo } : null}
              note="Demonstration link will be added here"
            />
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="ml-auto inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-glow-violet transition-colors hover:text-glow-blue"
            >
              {expanded ? "Less" : "More"}
              <ChevronDown
                className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glow-violet/40 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Hardware, security, and robotics — each one started as a question worth answering."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
