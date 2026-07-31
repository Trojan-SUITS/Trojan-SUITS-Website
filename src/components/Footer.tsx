import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-space-border bg-space-black/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-foreground-muted md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-hud tracking-wide">
          <span className="text-foreground">Trojan SUITS 2027</span>
          <a
            href="https://viterbischool.usc.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            USC Viterbi
          </a>
          <a
            href="https://www.isi.edu/centers-serc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            SERC
          </a>
          <a
            href="https://www.nasa.gov/learning-resources/spacesuit-user-interface-technologies-for-students/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            NASA SUITS
          </a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/timeline" className="hover:text-gold">
            Timeline
          </Link>
          <Link href="/blog" className="hover:text-gold">
            Blog
          </Link>
          <Link href="/legacy" className="hover:text-gold">
            Legacy
          </Link>
          <Link href="/roles" className="hover:text-gold">
            Roles
          </Link>
          <Link href="/outreach" className="hover:text-gold">
            Outreach
          </Link>
        </div>
      </div>
    </footer>
  );
}
