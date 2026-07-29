import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-space-border bg-space-black/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-foreground-muted md:flex-row md:items-center md:justify-between">
        <div className="font-hud tracking-wide">
          <span className="text-foreground">Trojan SUITS 2027</span> · University
          of Southern California · NASA SUITS Challenge
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/info" className="hover:text-gold">
            Info
          </Link>
          <Link href="/roles" className="hover:text-gold">
            Roles
          </Link>
          <Link href="/outreach" className="hover:text-gold">
            Outreach
          </Link>
          <a
            href="mailto:limbrian@usc.edu"
            className="hover:text-gold"
          >
            limbrian@usc.edu
          </a>
        </div>
      </div>
      <div className="border-t border-space-border/60 px-6 py-4 text-center text-xs text-foreground-muted/70">
        Advised by Prof. David Barnhart, USC Space Engineering Research Center
        (SERC)
      </div>
    </footer>
  );
}
