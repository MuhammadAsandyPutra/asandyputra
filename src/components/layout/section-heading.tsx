import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-border bg-accent font-mono text-lg font-bold text-accent-foreground shadow-brutal">
          {index}
        </span>
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {children ? (
        <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
          {children}
        </p>
      ) : null}
    </div>
  );
}
