import { Link } from "@tanstack/react-router";
import { LINKS } from "./site-data";

/* Fixed quick-actions bar on phones: Inquire, Client Area, Gallery. */
export function MobileQuickBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-ivory/15 bg-emerald-deep/95 backdrop-blur lg:hidden"
    >
      <div className="grid grid-cols-3">
        <Link
          to="/inquire"
          className="flex items-center justify-center whitespace-nowrap bg-ivory py-4 text-[0.56rem] font-semibold uppercase tracking-[0.1em] text-emerald-deep"
        >
          Inquire
        </Link>
        <Link
          to="/client-area"
          className="flex items-center justify-center whitespace-nowrap border-x border-ivory/15 py-4 text-[0.56rem] font-semibold uppercase tracking-[0.1em] text-ivory"
        >
          Client Area
        </Link>
        <a
          href={LINKS.pixieset}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center whitespace-nowrap py-4 text-[0.56rem] font-semibold uppercase tracking-[0.1em] text-ivory"
        >
          Gallery
        </a>
      </div>
    </nav>
  );
}