import Image from "next/image";
import type { ComponentType } from "react";
import { Globe, Link as LinkIcon } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import type { RosterMember } from "@/data/roster";

const platformIcons: Record<string, ComponentType<{ className?: string }>> = {
  github: SiGithub,
  linkedin: FaLinkedin,
  instagram: SiInstagram,
  x: SiX,
  twitter: SiX,
  website: Globe,
};

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
              sizes="112px"
              className="object-cover"
            />
          ) : (
            <span className="font-display text-xl text-foreground">
              {initials(member.name)}
            </span>
          )}
        </div>
      </div>
      <div className="w-32">
        <div className="font-hud text-lg text-foreground break-words">
          {member.name}
        </div>
        <div className="font-hud text-sm uppercase tracking-wide text-gold/80 break-words">
          {member.role}
        </div>
      </div>
      {member.links && member.links.length > 0 && (
        <div className="flex items-center gap-3">
          {member.links.map((link) => {
            const Icon = platformIcons[link.platform.toLowerCase()] ?? LinkIcon;
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${link.platform}`}
                className="text-foreground-muted transition-colors hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
