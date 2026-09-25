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
          "Families, children, couples, branding, products, and experiences — the collections of Heart & Homestead Photography, Southern Indiana.",
      },
    ],
  }),
  component: PortfolioIndex,
});

/* Standout editorial showcase: a full-bleed featured photograph, then the
   collections as a staggered editorial gallery. */
function PortfolioIndex() {
  const filled = PORTFOLIO_CATEGORIES.filter((c) => c.images.length > 0);
  const comingSoon = PORTFOLIO_CATEGORIES.filter((c) => c.images.length === 0);

  return (
    <>
      {/* Featured band: a single warm photograph welcomes the work */}
      <section className="is-dark relative overflow-hidden bg-emerald-deep">
        <img
          src="https://d2ol7oe51mr4n9.cloudfront.net/user_3DyScwqW9PJnlbQPOYfInCDp9WB/bde8000a-89af-4541-b3ae-22c51d8419b3.jpg"
          alt="A girl kneeling in the garden, kissing her dog at golden hour"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/25 to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-end px-5 pb-14 sm:px-8 sm:pb-20">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ivory/90">
            Portfolio
          </p>
        </div>
      </section>

      {/* Staggered editorial gallery */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <ul className="grid gap-16 md:grid-cols-12 md:gap-x-12 lg:gap-x-16">
            {filled.map((category, idx) => (
              <li
                key={category.id}
                className={idx % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-28"}
              >
                <Link
                  to="/portfolio/$category"
                  params={{ category: category.id }}
                  aria-label={`Open the ${category.label} album, ${category.images.length} photographs`}
                  className="group block"
                >
                  <span className="photo-frame natural block w-full">
                    <img
                      src={category.images[0]}
                      alt={`${category.label} - album cover`}
                      loading={idx < 2 ? "eager" : "lazy"}
                    />
                  </span>
                  <span className="mt-5 flex items-baseline justify-between gap-4 border-t border-taupe/50 pt-4">
                    <span className="font-display text-2xl text-emerald-deep transition-colors group-hover:text-forest sm:text-[1.7rem]">
                      {String(idx + 1).padStart(2, "0")} · {category.label}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm text-charcoal/55">
                      {category.images.length} photos
                      <span className="inline-flex text-emerald-deep transition-transform group-hover:translate-x-0.5">
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {comingSoon.length > 0 && (
            <p className="mx-auto mt-24 max-w-lg border-t border-taupe/50 pt-6 text-center font-accent text-lg italic text-charcoal/70">
              The collections are being curated — every photograph will find its
              place here soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}