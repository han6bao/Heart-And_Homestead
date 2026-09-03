import { createFileRoute, Link } from "@tanstack/react-router";
import { PortfolioGallery } from "../components/site/PortfolioGallery";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "A glimpse of the stories Heart & Homestead Photography has been trusted to hold: families, children, and golden-hour moments.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Portfolio
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl">
            A glimpse of the stories I've been trusted to hold.
          </p>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <PortfolioGallery />
        <div className="mt-16 border-t border-parchment pt-10 text-center">
          <p className="text-lg text-charcoal/85">Want to see more?</p>
          <Link to="/inquire" className="cta-story mt-6 inline-block">
            Tell Me Your Story
          </Link>
        </div>
      </section>
    </>
  );
}