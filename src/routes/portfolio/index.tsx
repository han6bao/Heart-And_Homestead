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
          "Families, children, couples, branding, products, and experiences at Heart & Homestead Photography, Southern Indiana.",
      },
    ],
  }),
  component: PortfolioIndex,
});

/* A calm album shelf: one cover per collection, nothing busy. */
function PortfolioIndex() {
  const filled = PORTFOLIO_CATEGORIES.filter((c) => c.images.length > 0);
  const comingSoon = PORTFOLIO_CATEGORIES.filter((c) => c.images.length === 0);

  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl">
            Collections, one album at a time.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
            {filled.map((category) => (
              <li key={category.id}>
                <Link
                  to="/portfolio/$category"
                  params={{ category: category.id }}
                  aria-label={`Open the ${category.label} album`}
                  className="group block"
                >
                  <span className="photo-frame natural block w-full">
                    <img
                      src={category.images[0]}
                      alt={`${category.label} - album cover`}
                      loading="lazy"
                    />
                  </span>
                  <span className="mt-4 flex items-baseline justify-between gap-3">
                    <span className="text-2xl text-emerald-deep transition-colors group-hover:text-forest">
                      {category.label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest">
                      {category.images.length} photos
                      <span className="inline-flex transition-transform group-hover:translate-x-0.5">
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

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