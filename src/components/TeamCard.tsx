import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function TeamCard({
  slug,
  emoji,
  name,
  tagline,
  description,
  specialties,
  whoFitsHere,
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
  accent?: "cyan" | "gold";
  applyUrl?: string;
}) {
  const isInternalLink = applyUrl?.startsWith("/");
  const buttonClass = `flex w-full items-center justify-between rounded border px-4 py-2.5 font-hud text-base uppercase tracking-wide transition-colors ${
    accent === "gold"
      ? "border-gold/60 text-gold hover:bg-gold/10"
      : "border-cardinal-bright/60 text-foreground hover:bg-cardinal/20"
  }`;

  return (
    <div id={slug} className="panel-border scroll-mt-24 rounded-lg p-6">
      <div className="mb-3">
        <div className="mb-1 text-3xl">{emoji}</div>
        <h3 className="font-hud text-xl text-foreground">{name}</h3>
        <p className="text-sm text-foreground-muted">{tagline}</p>
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

      {applyUrl &&
        (isInternalLink ? (
          <Link href={applyUrl} className={buttonClass}>
            Express Interest
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Express Interest
            <ExternalLink className="h-4 w-4" />
          </a>
        ))}
    </div>
  );
}
