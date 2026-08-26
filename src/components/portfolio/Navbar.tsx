import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`nav-enter fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-out ${
        scrolled ? "glass-panel border-x-0 border-t-0 shadow-[var(--shadow-elevated)]" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8"
      >
        <a href="#top" className="press font-display text-lg font-bold tracking-tight">
          Ananda<span className="text-primary">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`nav-link rounded-full px-3.5 py-2 text-sm hover:text-foreground ${
                active === item.href ? "nav-active" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Ananda_Resume.pdf"
            className="press group hidden items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-4 py-2 text-sm font-semibold text-primary hover:border-primary hover:shadow-[var(--shadow-glow)] sm:inline-flex"
          >
            <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="press inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="glass-panel rise-in border-x-0 border-b-0 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm transition-all duration-200 hover:translate-x-1 hover:bg-secondary hover:text-foreground ${
                    active === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/resume.pdf"
                download="Ananda_Resume.pdf"
                onClick={() => setOpen(false)}
                className="press inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-4 py-2.5 text-sm font-semibold text-primary hover:border-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
