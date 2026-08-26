import { BadgeCheck, Calendar, Eye } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications & courses"
      description="Verified certificates from hackathons and structured technical courses."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 110} as="article">
            <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 hover:scale-[1.012]">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-transform duration-300 group-hover:scale-105">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  {c.program && (
                    <p className="mt-1 font-mono text-xs text-primary">{c.program}</p>
                  )}
                </div>
              </div>

              {c.details && (
                <ul className="mt-4 space-y-2">
                  {c.details.map((d) => (
                    <li key={d} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="min-w-0">{d}</span>
                    </li>
                  ))}
                </ul>
              )}

              {c.tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tech.map((t, j) => (
                    <span
                      key={t}
                      style={{ animationDelay: `${i * 90 + j * 45}ms` }}
                      className="badge-hover rise-in rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground hover:text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-4 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {c.date}
              </p>

              {c.viewerPath && (
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                    href={c.viewerPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)]"
                  >
                    <Eye className="h-4 w-4" /> View Certificate
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
