import { ArrowDown, Code2, Globe, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="border-b-[3px] border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-5 md:py-24">
        <div className="md:col-span-3">
          <span className="inline-block border-[3px] border-border bg-accent px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-accent-foreground shadow-brutal">
            Available for work
          </span>

          <h1 className="mt-6 text-balance font-heading text-5xl font-bold leading-[1.2] tracking-tight sm:text-6xl md:text-7xl">
            Asandy Putra.
            <br />
            <span className="bg-accent px-2 text-accent-foreground">
              Software
            </span>{" "}
            developer.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            I build bold, fast, and accessible web applications from front to
            back. Currently turning caffeine into clean, scalable code at a
            product studio.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 border-[3px] border-border bg-primary px-5 py-3 font-mono text-sm font-bold text-primary-foreground transition-brutal hover:-translate-y-1 hover:shadow-brutal-lg"
            >
              View my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-[3px] border-border bg-card px-5 py-3 font-mono text-sm font-bold transition-brutal hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground hover:shadow-brutal-lg"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Code2, label: "GitHub", href: "https://github.com" },
              { icon: Globe, label: "LinkedIn", href: "https://linkedin.com" },
              { icon: Mail, label: "Email", href: "mailto:hello@alex.dev" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border-[3px] border-border bg-card transition-brutal hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground hover:shadow-brutal"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex flex-col gap-4">
            {[
              { value: "1+", label: "Years building" },
              { value: "10+", label: "Projects created" },
              { value: "4", label: "Open-source repos" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-end justify-between border-[3px] border-border bg-card p-5 shadow-brutal"
              >
                <span className="font-heading text-5xl font-bold leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-sm uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
            <div className="border-[3px] border-border bg-accent p-5 text-accent-foreground shadow-brutal">
              <p className="font-mono text-sm font-medium leading-relaxed">
                {"> "}Currently exploring AI tooling, edge runtimes, and design
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
