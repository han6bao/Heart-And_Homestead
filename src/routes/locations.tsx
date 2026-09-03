import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "@phosphor-icons/react";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { VENUES, LINKS } from "../components/site/site-data";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "Places With a Story: favorite Southern Indiana locations, ranches, gardens, and venues for portrait and lifestyle sessions.",
      },
    ],
  }),
  component: Locations,
});

function Locations() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="font-accent text-xl italic text-ivory/75 sm:text-2xl">
            Favorite places, favorite light
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Places With a Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Every location here has a feeling of its own. These are the places Emily
            loves to photograph, and new ones are added all the time.
          </p>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl space-y-20 px-5 py-20 sm:px-8 sm:py-24">
          {VENUES.map((venue) => (
            <article
              key={venue.name}
              data-reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <div className="lg:col-span-5">
                {venue.photos.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="photo-frame aspect-[3/4]">
                      <img src={venue.photos[0]} alt={venue.name} loading="lazy" />
                    </div>
                    <div className="mt-8 grid gap-4">
                      {venue.photos.slice(1).map((photo) => (
                        <div key={photo} className="photo-frame aspect-square">
                          <img src={photo} alt={`${venue.name} detail`} loading="lazy" />
                        </div>
                      ))}
                      {venue.photos.length === 1 && (
                        <PhotoPlaceholder label={`${venue.name} detail`} className="aspect-square" />
                      )}
                    </div>
                  </div>
                ) : (
                  <PhotoPlaceholder label={venue.name} className="aspect-[4/3] !min-h-0" />
                )}
              </div>

              <div className="lg:col-span-7">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-forest">
                  {venue.region}
                </p>
                <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">{venue.name}</h2>

                <h3 className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                  Why Emily loves it
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/85">
                  {venue.why}
                </p>

                <div className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                  <div>
                    <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                      Best session types
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {venue.bestSessions.map((session) => (
                        <li key={session} className="text-base text-charcoal/85">
                          {session}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                      Best time of day
                    </h3>
                    <p className="mt-2 text-base text-charcoal/85">{venue.bestTime}</p>
                    <h3 className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                      Seasonal notes
                    </h3>
                    <p className="mt-2 text-base text-charcoal/85">{venue.seasonal}</p>
                  </div>
                </div>

                <div className="mt-7">
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                    What clients should know
                  </h3>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-charcoal/85">
                    {venue.shouldKnow}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link to="/inquire" className="cta-story">
                    Book a session here
                  </Link>
                  {venue.link ? (
                    <a
                      href={venue.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest underline decoration-taupe decoration-1 underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep"
                    >
                      Visit the venue <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-charcoal/50">
                      Venue link to be added
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}

          <article className="border-t border-parchment pt-14">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                Got a place with <em className="font-accent italic">a story?</em>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">
                Your family farm, your grandparents' house, your favorite spot by the
                water. If the place matters to you, it's a location. Emily is always
                scouting new favorites.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                <Link to="/inquire" className="cta-story">
                  Tell Me Your Story
                </Link>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest underline decoration-taupe decoration-1 underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep"
                >
                  See recent sessions on Instagram
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}