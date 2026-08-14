import { ArrowRight, Download, Eye, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, coreSkills } from "@/lib/portfolio-data";
import resumeAsset from "@/assets/Ananda_Resume.pdf.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open to internships &amp; full-time roles
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
              {profile.name}
              <span className="block text-gradient">Full-Stack Developer</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 font-mono text-xs text-primary sm:text-sm">{profile.title}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {profile.tagline} I build responsive frontends, secure backends and RESTful APIs with
              React.js, Node.js, Express.js and MongoDB.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
              >
                View My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="lift-hover inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="lift-hover inline-flex items-center gap-2 hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="lift-hover inline-flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="lift-hover inline-flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="glass-panel float-slow rounded-2xl p-1">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">developer.ts</span>
            </div>
            <div className="rounded-xl bg-background/60 p-5 font-mono text-xs leading-relaxed sm:text-[13px]">
              <p className="text-muted-foreground">const developer = {"{"}</p>
              <p className="pl-4">
                <span className="text-accent">name</span>:{" "}
                <span className="text-primary">&quot;Ananda&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">role</span>:{" "}
                <span className="text-primary">&quot;Full-Stack Developer&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-accent">stack</span>: [
                {coreSkills.slice(0, 4).map((s, i) => (
                  <span key={s}>
                    <span className="text-primary">&quot;{s}&quot;</span>
                    {i < 3 ? ", " : ""}
                  </span>
                ))}
                ],
              </p>
              <p className="pl-4">
                <span className="text-accent">focus</span>:{" "}
                <span className="text-primary">&quot;REST APIs &amp; secure backends&quot;</span>,
              </p>
              <p className="text-muted-foreground">{"}"};</p>
            </div>
            <div className="flex flex-wrap gap-2 p-4">
              {coreSkills.map((s) => (
                <span
                  key={s}
                  className="badge-hover rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
