import { about, aboutHighlights } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer who ships working products">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4">
          {about.map((p) => (
            <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <ul className="glass-panel space-y-3 rounded-2xl p-6">
            {aboutHighlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="min-w-0">{h}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
