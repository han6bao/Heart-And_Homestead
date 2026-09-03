import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { List, X } from "@phosphor-icons/react";
import { BrandMark } from "./BrandMark";
import { NAV } from "./site-data";

/* Solid emerald header. Desktop nav marks the active section with a dot,
   the same way the client's own site style does. */
export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="is-dark sticky top-0 z-50 border-b border-ivory/10 bg-emerald-deep">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={isActive ? "page" : undefined}
                className="flex flex-col items-center gap-1.5 py-1.5"
              >
                <span
                  className={`text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                    isActive ? "text-gold" : "text-ivory/75 hover:text-ivory"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 rounded-full transition-colors duration-200 ${
                    isActive ? "bg-gold" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/client-area" className="client-pill">
            Client Area
          </Link>
          <Link
            to="/inquire"
            className="inline-flex items-center bg-ivory px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-emerald-deep transition-colors duration-200 hover:bg-parchment"
          >
            Inquire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
        >
          {open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-emerald-deep lg:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-6 pt-8 pb-12"
            aria-label="Mobile navigation"
          >
            {NAV.map((item) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center justify-between border-b border-ivory/15 py-4"
                >
                  <span
                    className={`font-display text-2xl transition-colors ${
                      isActive ? "text-gold" : "text-ivory/90 hover:text-ivory"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/client-area"
              onClick={() => setOpen(false)}
              className="mt-8 border border-ivory/40 px-5 py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ivory"
            >
              Client Area
            </Link>
            <Link
              to="/inquire"
              onClick={() => setOpen(false)}
              className="mt-3 bg-ivory px-5 py-4 text-center text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-emerald-deep"
            >
              Inquire
            </Link>
            <p className="mt-10 font-accent text-lg italic text-ivory/60">
              Moments fade. Memories don't have to.
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}