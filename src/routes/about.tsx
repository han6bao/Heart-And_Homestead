import { createFileRoute, Link } from "@tanstack/react-router";
import { Flower } from "@phosphor-icons/react";
import { BotanicalDivider } from "../components/site/BotanicalDivider";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Emily | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "The heart behind Heart & Homestead. Meet Emily, a Southern Indiana portrait and lifestyle photographer.",
      },
    ],
  }),
  component: About,
});

const FAVORITES = [
  "Unposed laughter",
  "Golden hour in an open field",
  "Children being exactly who they are",
  "Mornings at the ranch with the animals",
  "Old photographs kept carefully in a drawer",
  "A good story, told on purpose",
];

function About() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="mx-auto">
            <h1 className="text-4xl leading-[1.1] text-ivory sm:text-5xl lg:text-[4.2rem]">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-ivory/70 sm:text-[0.78rem]">
                The heart behind
              </span>
              <span className="mt-4 block">
                Heart <em className="font-accent italic">&amp;</em>{" "}
                <em className="font-accent italic">Homestead.</em>
              </span>
            </h1>
          </div>
          <p className="mx-auto mt-6 font-accent text-xl italic text-ivory/85 sm:text-2xl">
            Hi, I'm <em className="font-accent italic">Emily.</em>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <PhotoPlaceholder label="Emily's portrait" className="aspect-[3/4]" />
            <p className="mt-3 font-accent text-base italic text-forest/80">
              A photograph of Emily to be added
            </p>
          </div>
          <div data-reveal className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-charcoal/90 sm:text-xl">
              Hi, I'm Emily Roberts.
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 sm:text-lg">
              <p>
                I believe the most meaningful photographs don't just capture what a
                moment looked like; they preserve how it felt.
              </p>
              <p>
                I specialize in creating heartfelt portraits for families, seniors,
                children, maternity, and couples, blending warm, vibrant colors with a
                whimsical, storybook style.
              </p>
              <p>
                My sessions are relaxed and authentic, allowing real connection and
                genuine emotion to shine through. Rooted in Southern Indiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-parchment bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div data-reveal className="lg:col-span-5">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                Rooted in <em className="font-accent italic">Southern Indiana</em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/80">
                Heart &amp; Homestead lives where the fields open up and the light turns
                golden. I photograph across Southern Indiana, at the ranch, in storybook
                gardens, and in the places that already mean something to you.
              </p>
              <div className="mt-9">
                <PhotoPlaceholder label="Favorite moments" className="aspect-[16/10]" />
              </div>
            </div>
            <div data-reveal className="lg:col-span-7">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                What you can <em className="font-accent italic">expect</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-charcoal/85 sm:text-lg">
                Photographs give us the opportunity to capture a moment in time. A
                feeling. A memory. A season of life that we will never be in again.
                Every story deserves to be remembered, and every session is personally
                tailored to the people in front of the camera.
              </p>
              <div className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                    A few favorites
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {FAVORITES.map((favorite) => (
                      <li
                        key={favorite}
                        className="flex items-baseline gap-3 text-base text-charcoal/85"
                      >
                        <span className="inline-flex shrink-0 text-sage"><Flower size={15} aria-hidden="true" /></span>
                        {favorite}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                    How a session feels
                  </h3>
                  <ul className="mt-5 space-y-3 text-base text-charcoal/85">
                    <li className="flex items-baseline gap-3">
                      <span className="inline-flex shrink-0 text-sage"><Flower size={15} aria-hidden="true" /></span>
                      Relaxed, unhurried, and personal
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="inline-flex shrink-0 text-sage"><Flower size={15} aria-hidden="true" /></span>
                      Guidance when you need it, space when the moments unfold
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="inline-flex shrink-0 text-sage"><Flower size={15} aria-hidden="true" /></span>
                      Finished galleries delivered on Pixieset
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="inline-flex shrink-0 text-sage"><Flower size={15} aria-hidden="true" /></span>
                      Every session personally tailored to your story
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="is-dark bg-emerald-deep py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <BotanicalDivider />
          <h2 className="mt-7 text-3xl leading-tight text-ivory sm:text-4xl">
            Let's make something worth <em className="font-accent italic">remembering.</em>
          </h2>
          <Link to="/inquire" className="cta-story is-dark mt-9 inline-block">
            Tell Me Your Story
          </Link>
        </div>
      </section>
    </>
  );
}