import { Award } from "lucide-react";
import { achievements } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Achievements"
      description="Highlights from hackathons and shipped, publicly accessible applications."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 120} as="article">
            <div className="card-hover group relative h-full overflow-hidden rounded-2xl border border-border bg-card/70 p-6 hover:scale-[1.012]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
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
    </Section>
  );
}
