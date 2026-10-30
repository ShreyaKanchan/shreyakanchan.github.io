import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import { projects, type ProjectLink } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function LinkButton({ link }: { link: ProjectLink | null }) {
  if (!link) {
    return null;
  }
  return (
    <Button asChild variant="outline" size="sm">
      <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
    >
      {link.label}
      <ExternalLink className="size-3.5" aria-hidden />
    </a>
    </Button>
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
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-border pt-5">
            <LinkButton
              link={project.links.github ? { label: "GitHub Repo", href: project.links.github } : null}
            />
            <LinkButton
              link={project.links.demo ? { label: "Live Demo", href: project.links.demo } : null}
            />
            {project.details ? <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="ml-auto inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-glow-violet transition-colors hover:text-glow-blue"
            >
              {expanded ? "Less" : "More"}
              <ChevronDown
                className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              />
            </Button> : null}
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
          description="Blocklens, Chainforge, and Bridgewatch."
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
