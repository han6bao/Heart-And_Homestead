import { createFileRoute, Link } from "@tanstack/react-router";
import { AlbumViewer } from "../../components/site/AlbumViewer";
import { PORTFOLIO_CATEGORIES } from "../../components/site/site-data";

export const Route = createFileRoute("/portfolio/$category")({
  head: () => ({ meta: [{ title: "Portfolio | Heart & Homestead Photography" }] }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const found = PORTFOLIO_CATEGORIES.find((c) => c.id === category);

  if (!found) {
    return (
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
          <h1 className="text-4xl text-ivory">Collection not found</h1>
          <Link to="/portfolio" className="cta-story is-dark mt-8 inline-block">
            Back to portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16">
          <Link
            to="/portfolio"
            className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/70 transition-colors hover:text-ivory"
          >
            All albums
          </Link>
          <h1 className="mt-4 text-4xl leading-tight text-ivory sm:text-5xl">{found.label}</h1>
          <p className="mx-auto mt-3 font-accent text-lg italic text-ivory/75">
            {found.images.length} photographs · use the arrows or your keyboard
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <AlbumViewer categoryId={found.id} />
        </div>
      </section>
    </>
  );
}