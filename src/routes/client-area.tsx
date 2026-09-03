import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "@phosphor-icons/react";
import { LINKS } from "../components/site/site-data";

export const Route = createFileRoute("/client-area")({
  head: () => ({
    meta: [
      { title: "Client Area | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "Welcome back. View your gallery, book another session, sign contracts, complete payments, and find session resources.",
      },
    ],
  }),
  component: ClientArea,
});

type TileLink = {
  label: string;
  description: string;
  to: "/inquire";
};
type TileExternal = {
  label: string;
  description: string;
  href: string;
  external: boolean;
};

const TILES: (TileLink | TileExternal)[] = [
  {
    label: "View My Gallery",
    description:
      "Your finished photographs, delivered in a private Pixieset gallery you can revisit any time.",
    href: LINKS.pixieset,
    external: true,
  },
  {
    label: "Book Another Session",
    description:
      "Ready for the next chapter? Tell Emily your story and plan something new.",
    to: "/inquire" as const,
  },
  {
    label: "Contracts + Payments",
    description: "Sign your contract and complete your retainer securely.",
    href: LINKS.contractsPayments,
    external: true,
  },
  {
    label: "Session Resources",
    description: "Style guides, preparation thoughts, and what to expect before your session.",
    href: LINKS.sessionResources,
    external: true,
  },
];

function ClientArea() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="font-accent text-xl italic text-ivory/75 sm:text-2xl">
            Everything for your session, in one place
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Welcome back.
          </h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {TILES.map((tile) => (
              <div key={tile.label} className="border-t border-taupe/60 pt-7">
                {"to" in tile ? (
                  <Link
                    to={tile.to}
                    className="group flex items-start justify-between gap-6"
                  >
                    <div>
                      <h2 className="text-2xl text-emerald-deep">{tile.label}</h2>
                      <p className="mt-2 max-w-md text-base leading-relaxed text-charcoal/75">
                        {tile.description}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex shrink-0 text-emerald-deep/50 transition-colors group-hover:text-emerald-deep">
                      <ArrowUpRight size={24} aria-hidden="true" />
                    </span>
                  </Link>
                ) : (
                  <a
                    href={tile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-6"
                  >
                    <div>
                      <h2 className="text-2xl text-emerald-deep">{tile.label}</h2>
                      <p className="mt-2 max-w-md text-base leading-relaxed text-charcoal/75">
                        {tile.description}
                      </p>
                    </div>
                    <span className="mt-1 inline-flex shrink-0 text-emerald-deep/50 transition-colors group-hover:text-emerald-deep">
                      <ArrowUpRight size={24} aria-hidden="true" />
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="is-dark mt-16 grid items-center gap-8 bg-emerald-deep px-8 py-12 sm:px-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl text-ivory">Contact Emily</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ivory/80">
                Have a question about your session, your gallery, or anything in
                between? Emily would love to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 lg:justify-end">
              <a href={`mailto:${LINKS.email}`} className="cta-story is-dark">
                Email Emily
              </a>
              <Link
                to="/inquire"
                className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory/85 underline decoration-ivory/30 decoration-1 underline-offset-8 transition-colors hover:text-ivory hover:decoration-ivory"
              >
                Tell Me Your Story
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-sm leading-relaxed text-charcoal/60">
            Contracts, payments, and session resources will be connected here as soon as
            they're ready. Until then, Emily shares everything personally by email.
          </p>
        </div>
      </section>
    </>
  );
}