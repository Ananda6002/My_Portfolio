import { Award, BadgeCheck } from "lucide-react";
import { achievements, certifications } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Achievements & certifications">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <div className="card-hover rounded-2xl border border-border bg-card/70 p-6 hover:scale-[1.01]">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Award className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="glass-panel h-full rounded-2xl p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Certifications
            </h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 text-muted-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
