import { ArrowUp } from "lucide-react";

import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
        <p className="font-display text-lg font-bold text-foreground">
          SK<span className="text-glow-violet">.</span>
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {profile.name} · Built with care, not templates.
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowUp className="size-4" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
