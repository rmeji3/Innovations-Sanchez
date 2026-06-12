"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, Menu, Phone, X } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { business } from "@/lib/business";

type Props = { dict: Dictionary; lang: Locale };

function Logo({ home }: { home: string }) {
  return (
    <a href="#top" aria-label={home} className="flex items-center gap-2.5">
      <Image
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        className="h-11 w-11"
        priority
      />
      <span className="font-display text-base font-bold uppercase leading-tight tracking-wide text-fern">
        Sanchez Lawn Care
        <span className="block text-[10px] font-semibold tracking-[0.35em] text-ink/60">
          Innovations
        </span>
      </span>
    </a>
  );
}

export default function Navbar({ dict, lang }: Props) {
  const [open, setOpen] = useState(false);
  const otherLang = lang === "en" ? "es" : "en";

  const leftLinks = [
    { href: "#services", label: dict.nav.services },
    { href: "#about", label: dict.nav.about },
  ];
  const rightLinks = [{ href: "#contact", label: dict.nav.contact }];
  const allLinks = [...leftLinks, ...rightLinks];

  const navLink =
    "font-display text-sm font-medium text-ink/70 transition-colors duration-200 hover:text-fern";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone bg-white shadow-sm shadow-deep/5">
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        {/* Left: social icons + links */}
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={`mailto:${business.email}`}
              aria-label={dict.nav.emailLabel}
              className="text-fern/70 transition-colors duration-200 hover:text-fern"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={business.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.nav.facebookLabel}
              className="text-fern/70 transition-colors duration-200 hover:text-fern"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ul className="hidden items-center justify-end gap-2 lg:flex lg:flex-1">
            {leftLinks.map((link, i) => (
              <li key={link.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-fern/40">
                    /
                  </span>
                )}
                <a href={link.href} className={navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: logo */}
        <div className="justify-self-center lg:px-8">
          <Logo home={dict.nav.home} />
        </div>

        {/* Right: links + call now */}
        <div className="flex items-center justify-end gap-6">
          <ul className="hidden flex-1 items-center gap-2 lg:flex">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLang}`}
              aria-label={dict.langSwitch.label}
              className="rounded-full border border-fern/30 px-2.5 py-1 text-xs font-bold text-fern transition-colors duration-200 hover:bg-mint-soft"
            >
              {dict.langSwitch.short}
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="hidden items-center gap-2 font-display text-sm font-bold tracking-wide text-fern transition-colors duration-200 hover:text-pine sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {dict.nav.callNow}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
              className="inline-flex h-11 w-11 items-center justify-center text-fern transition-colors duration-200 hover:bg-mint-soft lg:hidden"
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="border-t border-stone bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {allLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 font-display text-base font-medium text-ink/80 transition-colors duration-200 hover:bg-mint-soft hover:text-fern"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${business.phone}`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 border-2 border-fern px-4 py-3 font-display text-sm font-bold tracking-wide text-fern transition-colors duration-200 hover:bg-fern hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {dict.nav.callNow} · {business.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
