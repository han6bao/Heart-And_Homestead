import { Link } from "@tanstack/react-router";
import { InstagramLogo, FacebookLogo, ArrowUpRight } from "@phosphor-icons/react";
import { BrandMark } from "./BrandMark";
import { LINKS, NAV } from "./site-data";

/* Deliberately minimal footer: one compact strip, no long columns. */
export function Footer() {
  return (
    <footer className="is-dark bg-emerald-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-8">
          <BrandMark small />

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/faq"
              className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:text-ivory"
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Heart & Homestead Photography on Instagram"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              <InstagramLogo size={16} aria-hidden="true" />
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Heart & Homestead Photography on Facebook"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              <FacebookLogo size={16} aria-hidden="true" />
            </a>
            <a
              href={LINKS.pixieset}
              target="_blank"
              rel="noreferrer"
              aria-label="Client gallery on Pixieset"
              className="text-ivory/70 transition-colors hover:text-ivory"
            >
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="mt-6 border-t border-ivory/10 pt-4 text-center text-[0.62rem] leading-relaxed text-ivory/50">
          Heart &amp; Homestead Photography, Southern Indiana. Moments fade. Memories
          don't have to.
        </p>
      </div>
    </footer>
  );
}