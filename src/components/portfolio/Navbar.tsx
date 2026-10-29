import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-foreground">
          SK<span className="text-glow-violet">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.github ?? "#contact"}
            aria-label="GitHub profile"
            title={profile.github ? "GitHub" : "GitHub link coming soon"}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Github className="size-4" aria-hidden />
          </a>
          <a
            href={profile.linkedin ?? "#contact"}
            aria-label="LinkedIn profile"
            title={profile.linkedin ? "LinkedIn" : "LinkedIn link coming soon"}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Linkedin className="size-4" aria-hidden />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-4 pb-4 pt-2 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center gap-2 px-3">
            <a
              href={profile.github ?? "#contact"}
              aria-label="GitHub profile"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Github className="size-4" aria-hidden />
            </a>
            <a
              href={profile.linkedin ?? "#contact"}
              aria-label="LinkedIn profile"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <Linkedin className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
