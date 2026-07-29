import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-6 py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 font-hud text-sm uppercase tracking-[0.3em] text-gold">
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-6 font-display text-2xl text-foreground md:text-3xl">
      {children}
    </h2>
  );
}
