"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import ApplyForm from "@/components/ApplyForm";
import type { DomainRestriction } from "@/data/teams";

export default function TeamCard({
  slug,
  emoji,
  name,
  tagline,
  description,
  specialties,
  whoFitsHere,
  proposalSections,
  domainRestriction,
  accent = "cyan",
  applyUrl,
}: {
  slug: string;
  emoji: string;
  name: string;
  tagline: string;
  description: string;
  specialties: string[];
  whoFitsHere: string;
  proposalSections?: string;
  domainRestriction: DomainRestriction;
  accent?: "cyan" | "gold";
  applyUrl?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div id={slug} className="panel-border scroll-mt-24 rounded-lg p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <div className="mb-1 text-3xl">{emoji}</div>
          <h3 className="font-hud text-xl text-foreground">{name}</h3>
          <p className="text-sm text-foreground-muted">{tagline}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 font-hud text-xs uppercase tracking-wide ${
            domainRestriction === "usc"
              ? "border border-hud-cyan-dim text-gold"
              : "border border-gold/60 text-gold"
          }`}
        >
        </span>
      </div>

      <p className="mb-4 text-foreground-muted">{description}</p>

      {specialties.length > 0 && (
        <div className="mb-4">
          <div className="mb-1.5 font-hud text-xs uppercase tracking-wide text-foreground-muted">
            Specialties
          </div>
          <div className="flex flex-wrap gap-2">
            {specialties.map((s) => (
              <span
                key={s}
                className="rounded-full border border-space-border-bright px-3 py-1 text-xs text-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mb-2 text-sm text-foreground-muted">
        <span className="font-hud uppercase tracking-wide text-foreground-muted">
          Who fits here:{" "}
        </span>
        {whoFitsHere}
      </div>

      {proposalSections && (
        <div className="mb-4 text-sm text-foreground-muted">
          <span className="font-hud uppercase tracking-wide text-foreground-muted">
            Proposal sections owned:{" "}
          </span>
          {proposalSections}
        </div>
      )}

      {applyUrl ? (
        <a
          href={applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-between rounded border px-4 py-2.5 font-hud text-base uppercase tracking-wide transition-colors ${
            accent === "gold"
              ? "border-gold/60 text-gold hover:bg-gold/10"
              : "border-cardinal-bright/60 text-foreground hover:bg-cardinal/20"
          }`}
        >
          Express Interest
          <ExternalLink className="h-4 w-4" />
        </a>
      ) : (
        <>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex w-full items-center justify-between rounded border px-4 py-2.5 font-hud text-base uppercase tracking-wide transition-colors ${
              accent === "gold"
                ? "border-gold/60 text-gold hover:bg-gold/10"
                : "border-cardinal-bright/60 text-foreground hover:bg-cardinal/20"
            }`}
          >
            {open ? "Hide form" : "Express Interest"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="mt-4 border-t border-space-border pt-4">
              <ApplyForm
                team={slug}
                teamLabel={name}
                domainRestriction={domainRestriction}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
