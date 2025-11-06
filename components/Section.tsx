import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur-sm transition hover:shadow-lg"
    >
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        <div className="h-1 w-24 rounded-full gradient-bar" aria-hidden />
      </header>
      <div className="prose max-w-none text-slate-700 prose-headings:font-semibold prose-li:marker:text-primary-500">
        {children}
      </div>
    </section>
  );
}
