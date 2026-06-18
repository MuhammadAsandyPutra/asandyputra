"use client";

import { useState } from "react";
import { AtSign, Code2, Globe, Mail, Send } from "lucide-react";
import { SectionHeading } from "@/src/components/layout/section-heading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="border-b-[3px] border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <SectionHeading index="05" title="Get In Touch">
          Have a project in mind or just want to say hi? My inbox is open.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-pretty text-lg leading-relaxed">
              I&apos;m currently available for freelance work and full-time
              roles. The fastest way to reach me is email, but I&apos;m on the
              usual platforms too.
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: Mail,
                  label: "asandyputra77@gmail.com",
                  href: "mailto:asandyputra77@gmail.com",
                },
                {
                  icon: Code2,
                  label: "github.com/MuhammadAsandyPutra",
                  href: "https://github.com/MuhammadAsandyPutra",
                },
                {
                  icon: Globe,
                  label: "linkedin.com/in/asandyputra",
                  href: "https://linkedin.com/in/asandyputra",
                },
                {
                  icon: AtSign,
                  label: "i might be on Twitter later",
                  href: "https://twitter.com",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-[3px] border-border bg-card px-4 py-3 font-mono text-sm font-medium transition-brutal hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground hover:shadow-brutal"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="border-[3px] border-border bg-card p-6 shadow-brutal-lg"
          >
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center border-[3px] border-border bg-accent text-accent-foreground shadow-brutal">
                  <Send className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold">
                  Message sent!
                </h3>
                <p className="mt-2 font-mono text-sm text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-widest"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full border-[3px] border-border bg-background px-3 py-2.5 font-mono text-sm outline-none transition-brutal focus:bg-accent/20 focus:shadow-brutal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full border-[3px] border-border bg-background px-3 py-2.5 font-mono text-sm outline-none transition-brutal focus:bg-accent/20 focus:shadow-brutal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono text-xs font-bold uppercase tracking-widest"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none border-[3px] border-border bg-background px-3 py-2.5 font-mono text-sm outline-none transition-brutal focus:bg-accent/20 focus:shadow-brutal"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 border-[3px] border-border bg-primary px-5 py-3 font-mono text-sm font-bold text-primary-foreground transition-brutal hover:-translate-y-1 hover:shadow-brutal-lg"
                >
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
