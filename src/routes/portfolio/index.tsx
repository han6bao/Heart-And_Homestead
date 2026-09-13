import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "@phosphor-icons/react";
import { PORTFOLIO_CATEGORIES } from "../../components/site/site-data";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "Scroll through families, children, couples, branding, products, and experiences — open any album for the full collection.",
      },
    ],
  }),
  component: PortfolioIndex,
});

/* Album shelf: every collection scrolls horizontally right on this page.
   Open an album to see it as a full interactive viewer. */
function PortfolioIndex() {
  const filled = PORTFOLIO_CATEGORIES.filter((c) => c.images.length > 0);
  const comingSoon = PORTFOLIO_CATEGORIES.filter((c) => c.images.length === 0);

  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl">
            Scroll the shelf, then open an album for more.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="space-y-16">
            {filled.map((category) => (
              <section key={category.id}>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl text-emerald-deep sm:text-3xl">{category.label}</h2>
                    <p className="mt-1 text-sm text-charcoal/60">
                      {category.images.length} photos — scroll to browse
                    </p>
                  </div>
                  <Link
                    to="/portfolio/$category"
                    params={{ category: category.id }}
                    className="cta-sessions"
                  >
                    Open album{" "}
                    <span className="arrow inline-flex">
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </div>
                <ul className="mt-6 flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
                  {category.images.map((src, i) => (
                    <li key={`${src}-${i}`} className="shrink-0 snap-start">
                      <Link
                        to="/portfolio/$category"
                        params={{ category: category.id }}
                        aria-label={`${category.label} photograph ${i + 1}`}
                        className="photo-frame natural block h-40 w-56 sm:h-48 sm:w-72"
                      >
                        <img src={src} alt={`${category.label} - photograph ${i + 1}`} loading="lazy" />
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* scroll hint on touch devices */}
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-charcoal/45">
                  Swipe / scroll for more
                </p>
              </section>
            ))}
          </div>

          {comingSoon.length > 0 && (
            <p className="mx-auto mt-16 max-w-lg border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60">
              {comingSoon.map((c) => c.label).join(", ")} albums are being photographed —
              they'll join the shelf soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}