export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-sm">
          © {new Date().getFullYear()} Asandy Putra. Built with too much coffee.
        </p>
        <a
          href="#top"
          className="border-[3px] border-primary-foreground bg-accent px-4 py-2 font-mono text-sm font-bold text-accent-foreground transition-brutal hover:-translate-y-1"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
