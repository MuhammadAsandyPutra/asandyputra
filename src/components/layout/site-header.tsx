"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center border-[3px] border-border bg-accent text-accent-foreground shadow-brutal">
            AS
          </span>
          <span className="hidden sm:inline">Asndyp.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-[3px] border-transparent px-3 py-1.5 font-mono text-sm font-medium transition-brutal hover:border-border hover:bg-accent hover:text-accent-foreground hover:shadow-brutal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border-[3px] border-border bg-primary px-4 py-2 font-mono text-sm font-bold text-primary-foreground transition-brutal hover:-translate-y-0.5 hover:shadow-brutal md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border-[3px] border-border bg-card shadow-brutal transition-brutal active:translate-x-1 active:translate-y-1 active:shadow-none md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t-[3px] border-border bg-card md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b-[3px] border-border px-4 py-3 font-mono text-sm font-medium last:border-b-0 hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
