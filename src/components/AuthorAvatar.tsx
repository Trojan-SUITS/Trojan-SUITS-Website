import Image from "next/image";
import { roster } from "@/data/roster";
import { initials } from "@/lib/initials";
import { withBasePath } from "@/lib/basePath";

export default function AuthorAvatar({ name }: { name: string }) {
  const member = roster.find((m) => m.name === name);

  return (
    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-space-panel">
      {member?.photo ? (
        <Image
          src={withBasePath(member.photo)}
          alt={name}
          fill
          sizes="48px"
          className="object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-display text-sm text-foreground">
          {initials(name)}
        </span>
      )}
    </div>
  );
}
