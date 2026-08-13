import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }
    setStatus("ready");
  };

  const field =
    "field-anim mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary";

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Github, label: "GitHub", value: "Ananda6002", href: profile.github, external: true },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ananda-j-48b234293",
      href: profile.linkedin,
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="I'm open to internship and full-time software developer opportunities. Feel free to reach out."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-panel h-full rounded-2xl p-6">
            <ul className="space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block truncate text-sm transition-colors hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="truncate text-sm">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card/70 p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  className={field}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  className={field}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}
                aria-invalid={!!errors.message}
                className={`${field} resize-y`}
                placeholder="Tell me about the role or project."
              />
              {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="lift-hover mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold hover:border-primary/50 hover:text-primary"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>

            {status === "ready" && (
              <p className="mt-4 rounded-xl border border-primary/40 bg-primary/8 p-4 text-sm text-muted-foreground" role="status">
                Your details look good. This form isn&apos;t connected to an email service yet, so
                please send the message directly to{" "}
                <a href={`mailto:${profile.email}`} className="text-primary underline">
                  {profile.email}
                </a>
                . An email integration can be connected later.
              </p>
            )}
            <p className="mt-4 text-xs text-muted-foreground">
              Note: no email backend is connected yet — messages are validated only.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
