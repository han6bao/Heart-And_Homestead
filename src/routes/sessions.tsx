import { createFileRoute, Link } from "@tanstack/react-router";
import { BotanicalDivider } from "../components/site/BotanicalDivider";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { SESSION_TYPES, OPTION_BY_SESSION } from "../components/site/site-data";

export const Route = createFileRoute("/sessions")({
  head: () => ({
    meta: [
      { title: "Sessions | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "Relaxed, story-driven sessions for families, children, seniors, couples, branding, events, and creative portraits, personally tailored in Southern Indiana.",
      },
    ],
  }),
  component: Sessions,
});

const PROCESS = [
  {
    name: "Tell Me Your Story",
    detail:
      "Complete a short inquiry form so Emily can learn what you're envisioning. There are no wrong answers, only your story.",
  },
  {
    name: "Plan Together",
    detail:
      "Choose your session, location, timing, and details. Emily helps with locations, styling, and the feeling you want.",
  },
  {
    name: "Make It Official",
    detail: "Complete booking, contract, and retainer, then rest easy. Everything is clear and unhurried.",
  },
  {
    name: "Your Session",
    detail:
      "Come as you are. Emily guides when you need direction and leaves space for the real moments to unfold.",
  },
  {
    name: "Your Gallery",
    detail:
      "Receive your finished images through a private Pixieset gallery, ready to revisit whenever you like.",
  },
];

function Sessions() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <p className="font-accent text-xl italic text-ivory/75 sm:text-2xl">
            Relaxed, personal, and built around you
          </p>
          <h1 className="mt-4 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Sessions
          </h1>
        </div>
      </section>

      {/* Statement band: one quiet line, room to breathe */}
      <section className="is-dark border-t border-ivory/15 bg-emerald-deep">
        <div className="mx-auto max-w-4xl px-5 py-10 text-center sm:px-8 sm:py-12">
          <h2 className="text-[1.35rem] leading-tight text-ivory sm:text-2xl lg:text-[1.9rem]">
            No two stories look <em className="font-accent italic">the</em>{" "}
            <em className="font-accent italic">same.</em>
          </h2>
        </div>
      </section>

      {/* Session types */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mx-auto max-w-2xl text-center font-accent text-xl italic leading-relaxed text-charcoal/80 sm:text-2xl">
            Before your session, we'll talk about what matters to you: who you are
            photographing, what you want to remember, the location, your style, and the
            feeling you want your photographs to have. From there, your session is built
            around you.
          </p>
          <div className="mt-16">
            {SESSION_TYPES.map((session, i) => (
              <article
                key={session.id}
                id={session.id}
                data-reveal className="grid gap-8 border-t border-taupe/50 py-12 first:border-t-0 first:pt-0 last:pb-2 lg:grid-cols-12 lg:gap-14"
              >
                <div className="lg:col-span-5">
                  <p className="font-accent text-lg italic text-sage" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl leading-tight sm:text-3xl">
                    {session.name}
                  </h2>
                  <div className="mt-5 space-y-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                    <p>
                      <strong className="font-semibold text-emerald-deep">For: </strong>
                      {session.whoFor}
                    </p>
                    <p>
                      <strong className="font-semibold text-emerald-deep">
                        How it feels:{" "}
                      </strong>
                      {session.feel}
                    </p>
                  </div>
                  {session.image ? (
                    <div className="photo-frame mt-7 aspect-[4/3]">
                      <img src={session.image} alt={session.name} loading="lazy" />
                    </div>
                  ) : (
                    <div className="mt-7">
                      <PhotoPlaceholder label={session.name} className="aspect-[16/9]" />
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7">
                  <p className="mt-1 text-base leading-relaxed text-charcoal/85 sm:text-lg">
                    {session.description}
                  </p>
                  <div className="mt-8">
                    <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                      What clients receive
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {session.receive.map((item) => (
                        <li
                          key={item}
                          className="flex items-baseline gap-3 text-base text-charcoal/85"
                        >
                          <span className="font-accent text-lg italic text-sage" aria-hidden="true">
                            +
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/inquire"
                    search={{ type: OPTION_BY_SESSION[session.id] ?? "Family" }}
                    className="cta-story mt-9 inline-block"
                  >
                    Tell Me Your Story
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking process */}
      <section className="border-t border-parchment bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <BotanicalDivider />
          <h2 className="mt-8 text-center text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            How we'll work <em className="font-accent italic">together</em>
          </h2>
          <div className="mx-auto mt-14 max-w-3xl">
            <ol className="space-y-10">
              {PROCESS.map((step, i) => (
                <li key={step.name} className="grid gap-3 sm:grid-cols-[4rem_1fr]">
                  <span
                    className="font-accent text-3xl italic leading-none text-sage"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl text-emerald-deep sm:text-2xl">{step.name}</h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-charcoal/80">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="bg-parchment/70">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <h2 className="text-3xl leading-tight sm:text-4xl">Investment</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/85 sm:text-lg">
            Investment information is available during booking, so we can talk through
            what makes sense for your story. Every session is personally tailored, and
            galleries are delivered on Pixieset.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
            <Link to="/inquire" className="cta-story">
              Tell Me Your Story
            </Link>
            <Link
              to="/faq"
              className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-forest underline decoration-taupe decoration-1 underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}