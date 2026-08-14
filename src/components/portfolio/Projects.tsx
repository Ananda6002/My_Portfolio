import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { profile, projects } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      description="Full-stack applications built with the MERN stack, covering authentication, REST APIs and database-driven interfaces."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 110} as="article">
            <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 hover:scale-[1.015]">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-xl font-semibold">{project.name}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="badge-hover rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="press lift-hover group/btn inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="press inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="press group inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            More projects on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
