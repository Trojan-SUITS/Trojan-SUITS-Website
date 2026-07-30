"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";

const links = [
  { href: "/info", label: "Info" },
  { href: "/roles", label: "Roles" },
  { href: "/outreach", label: "Outreach" },
];

const STUDENT_APPLY_FORM_URL = "https://forms.gle/oybiiuuYPEdegsYTA";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-space-border bg-space-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-sm tracking-widest text-foreground"
          onClick={() => setOpen(false)}
        >
          <Rocket className="h-5 w-5 text-cardinal-bright" strokeWidth={1.75} />
          <span>
            TROJAN <span className="text-gold">SUITS</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 font-hud text-base tracking-wide md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 uppercase transition-colors ${
                  active
                    ? "text-gold"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-gold shadow-[0_0_8px_theme(colors.gold)]" />
                )}
              </Link>
            );
          })}
          <a
            href={STUDENT_APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded border border-cardinal-bright bg-cardinal px-4 py-2 font-hud text-base uppercase tracking-wide text-white transition-colors hover:bg-cardinal-bright"
          >
            Get Involved
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-space-border bg-space-black px-6 py-4 font-hud text-base uppercase tracking-wide md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href
                    ? "text-gold"
                    : "text-foreground-muted"
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={STUDENT_APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-gold"
            >
              Get Involved
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
