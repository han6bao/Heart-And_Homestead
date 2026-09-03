import { createFileRoute, Link } from "@tanstack/react-router";
import { BotanicalDivider } from "../components/site/BotanicalDivider";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { EXPERIENCES, PHOTOS } from "../components/site/site-data";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "More than a session: the Always Ranch and storybook Fairytale Gardens offer settings as memorable as the photographs themselves.",
      },
    ],
  }),
  component: Experiences,
});

function Experiences() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="font-accent text-xl italic text-ivory/75 sm:text-2xl">
            Some stories deserve a setting that feels just as memorable
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Experiences
          </h1>
        </div>
      </section>

      {/* Always Ranch */}
      <section id="always-ranch" className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div data-reveal className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="photo-frame aspect-[3/4]">
                  <img
                    src={PHOTOS.dadToddler}
                    alt="A father and toddler watch a horse from beside a fence at golden hour"
                    loading="lazy"
                  />
                </div>
                <div className="mt-10 grid gap-4">
                  <PhotoPlaceholder label="Ranch photographs" className="aspect-square" />
                  <PhotoPlaceholder label="More ranch photographs" className="aspect-square" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="font-accent text-lg italic text-sage">The open country</p>
              <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">
                Always Ranch LLC
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/85">
                Always Ranch LLC is a hidden Southern Indiana gem offering my clients
                exclusive access to interact and take photos with the animals that
                reside there: mini cows, horses, donkeys, and more. It's also the
                setting for beautiful barns, stunning sunsets, and a lake that is
                absolutely perfect for your next photoshoot.
              </p>
              <h3 className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                What you might find there
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {EXPERIENCES[0].features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-baseline gap-3 text-base text-charcoal/85"
                  >
                    <span className="font-accent text-lg italic text-sage" aria-hidden="true">
                      +
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/inquire"
                search={{ type: "Family" }}
                className="cta-story mt-9 inline-block"
              >
                Plan a session at the ranch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fairytale Gardens */}
      <section id="fairytale-gardens" className="border-t border-parchment bg-parchment/40">
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-28 sm:px-8 sm:pt-28 sm:pb-36">
          <div data-reveal className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <p className="font-accent text-lg italic text-sage">Where the stories come alive</p>
              <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">
                Fairytale Gardens
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-charcoal/85">
                Emily's mama has a green thumb and every bit of creativity a person can
                have. Her love for fairytales and stories has led her to creating
                beautiful, themed flower gardens: Little Red Riding Hood, Peter Pan,
                Hansel and Gretel, and more. Photograph in fairytale gardens, or in the
                gorgeous forests that Southern Indiana has to offer.
              </p>
              <h3 className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                Worlds you might step into
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {EXPERIENCES[1].features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-baseline gap-3 text-base text-charcoal/85"
                  >
                    <span className="font-accent text-lg italic text-sage" aria-hidden="true">
                      +
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/inquire"
                search={{ type: "Children" }}
                className="cta-story mt-9 inline-block"
              >
                Plan a fairytale session
              </Link>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6">
              <PhotoPlaceholder
                label="Fairytale Gardens"
                className="aspect-[4/3] !min-h-0"
              />
              <p className="mt-3 font-accent text-base italic text-forest/80">
                Photographs from the gardens to be added
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="is-dark bg-emerald-deep py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <BotanicalDivider />
          <h2 className="mt-8 text-3xl leading-tight text-ivory sm:text-4xl">
            Every experience is built around <em className="font-accent italic">your story.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/80">
            Do you have a vision of what you want to do? Tell me! I am open to all kinds
            of unique sessions and ideas.
          </p>
          <Link to="/inquire" className="cta-story is-dark mt-9 inline-block">
            Tell Me Your Story
          </Link>
        </div>
      </section>
    </>
  );
}