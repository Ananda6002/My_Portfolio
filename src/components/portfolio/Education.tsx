import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <ol className="relative space-y-5 border-l border-border pl-6">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 70} as="li">
            <span
              className={`absolute -left-[7px] mt-6 h-3 w-3 rounded-full border-2 border-background ${
                item.current ? "bg-primary" : "bg-border"
              }`}
              aria-hidden
            />
            <div
              className={`card-hover rounded-2xl border p-6 ${
                item.current
                  ? "border-primary/40 bg-card/80 shadow-[var(--shadow-glow)]"
                  : "border-border bg-card/60"
              }`}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                </div>
                <GraduationCap className="h-5 w-5 shrink-0 text-primary" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                {item.years && (
                  <span className="rounded-full border border-border px-2.5 py-1">{item.years}</span>
                )}
                <span className="rounded-full border border-border px-2.5 py-1 text-primary">
                  {item.detail}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
