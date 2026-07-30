"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { LegacyTeam } from "@/data/legacy";

export default function LegacyTabs({ teams }: { teams: LegacyTeam[] }) {
  const [activeId, setActiveId] = useState(teams[0]?.id);
  const active = teams.find((team) => team.id === activeId) ?? teams[0];

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-1 border-b border-space-border">
        {teams.map((team) => (
          <button
            key={team.id}
            onClick={() => setActiveId(team.id)}
            className={`relative px-4 py-2 font-hud text-sm uppercase tracking-wide transition-colors ${
              team.id === active.id
                ? "text-gold"
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            {team.year}: {team.teamName}
            {team.id === active.id && (
              <span className="absolute inset-x-2 -bottom-[1px] h-[2px] bg-gold shadow-[0_0_8px_theme(colors.gold)]" />
            )}
          </button>
        ))}
      </div>

      <div className="panel-border rounded-lg p-6">
        <div
          className={`grid grid-cols-1 gap-6 ${
            active.photo ? "md:grid-cols-2 md:items-center" : ""
          }`}
        >
          {active.photo && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={active.photo}
                alt={`${active.teamName} press photo`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h3 className="mb-1 font-hud text-xl text-foreground">
              {active.year}: {active.teamName}
            </h3>
            <p className="text-foreground-muted">{active.description}</p>
            {active.pressReleaseUrl && (
              <a
                href={active.pressReleaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-gold hover:underline"
              >
                Read the press release <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
