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

function PortfolioIndex() {
  const filled = PORTFOLIO_CATEGORIES.filter((c) => c.images.length > 0);
  const comingSoon = PORTFOLIO_CATEGORIES.filter((c) => c.images.length === 0);

  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl">
            A glimpse of the stories I've been trusted to hold.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-charcoal/80 sm:text-lg">
            Every collection has its own page. Pick a section to see the full set of
            photographs, or browse the previews below.
          </p>

          <div className="mt-14 space-y-20">
            {filled.map((category) => (
              <section key={category.id}>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-3xl text-emerald-deep sm:text-4xl">{category.label}</h2>
                    <p className="mt-1 text-sm text-charcoal/60">
                      {category.images.length} photographs
                    </p>
                  </div>
                  <Link to="/portfolio/$category" params={{ category: category.id }} className="cta-sessions">
                    View all {category.images.length} photos{" "}
                    <span className="arrow inline-flex">
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </div>
                <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
                  {category.images.slice(0, 6).map((src, i) => (
                    <li key={`${src}-${i}`}>
                      <Link
                        to="/portfolio/$category"
                        params={{ category: category.id }}
                        aria-label={`${category.label} photograph ${i + 1}`}
                        className="photo-frame natural block w-full"
                      >
                        <img src={src} alt={`${category.label} - photograph ${i + 1}`} loading="lazy" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {comingSoon.length > 0 && (
            <p className="mt-16 border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60">
              {comingSoon.map((c) => c.label).join(", ")} collections are being photographed —
              they'll join the gallery soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}