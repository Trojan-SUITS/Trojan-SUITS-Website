import Image from "next/image";
import type { RosterMember } from "@/data/roster";

function initials(name: string) {
  return name
    .replace(/^(Prof\.|Dr\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function RosterOrb({ member }: { member: RosterMember }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-28 w-28 rounded-full p-[3px] shadow-[0_0_25px_rgba(76,214,255,0.25)]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-hud-cyan via-cardinal-bright to-gold opacity-70 animate-[spin_12s_linear_infinite]" />
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-space-panel">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <span className="font-display text-xl text-foreground">
              {initials(member.name)}
            </span>
          )}
        </div>
      </div>
      <div>
        <div className="font-hud text-lg text-foreground">{member.name}</div>
        <div className="font-hud text-sm uppercase tracking-wide text-gold/80">
          {member.role}
        </div>
      </div>
    </div>
  );
}
