import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { BotanicalDivider } from "../components/site/BotanicalDivider";
import { PhotoPlaceholder } from "../components/site/PhotoPlaceholder";
import { PHOTOS, SESSION_TYPES, EXPERIENCES } from "../components/site/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: "/assets/photo-mama-baby-horse.jpg" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1 — Hero: compact, quiet luxury */}
      <section className="is-dark relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-emerald-deep sm:min-h-[74dvh] lg:min-h-[80dvh]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 78% 8%, rgba(164,180,154,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 12% 90%, rgba(164,180,154,0.10), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-5xl px-3 py-10 text-center sm:px-8 sm:py-20">
          <div className="flex flex-col items-center">
            <h1
              className="hero-rise order-1 text-[clamp(1.1rem,5.2vw,1.45rem)] tracking-[0.015em] leading-[1.15] text-ivory sm:tracking-[0.06em] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[3.1rem]"
              style={{ "--rise-delay": "0.14s" } as CSSProperties}
            >
              <span className="block">Moments fade.</span>
              <span className="block whitespace-nowrap">Memories don't have to.</span>
            </h1>

            <div
              className="hero-rise order-2 mt-4 flex flex-col items-center sm:mt-7"
              style={{ "--rise-delay": "0.05s" } as CSSProperties}
            >
              <img
                src="/assets/logo-circle.png"
                alt="Heart & Homestead Photography - circular heart and camera logo"
                width={144}
                height={144}
                className="w-24 object-contain sm:w-36"
              />
            </div>

            <p
              className="hero-rise order-3 mt-4 font-accent text-base italic leading-relaxed text-ivory/80 sm:mt-6 sm:text-xl"
              style={{ "--rise-delay": "0.22s" } as CSSProperties}
            >
              Photographs that feel like home.
            </p>

            <div
              className="hero-rise order-4 mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-5"
              style={{ "--rise-delay": "0.3s" } as CSSProperties}
            >
              <Link to="/inquire" className="cta-story is-dark">
                Tell Me Your Story
              </Link>
              <Link
                to="/sessions"
                className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory/90 underline decoration-ivory/40 decoration-1 underline-offset-8 transition-colors hover:text-ivory hover:decoration-ivory"
              >
                Explore Sessions
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* 2 — Intro split */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            data-reveal
            className="lg:col-span-5"
            style={{ "--rd": "40ms" } as CSSProperties}
          >
            <div className="photo-frame aspect-[3/4]">
              <img
                src={PHOTOS.mamaBaby}
                alt="A mother holds her baby in a white rocking chair while a horse watches from beyond a fence"
                loading="lazy"
              />
            </div>
            <p className="mt-3 font-accent text-base italic text-forest/80">
              Golden hour at the ranch
            </p>
          </div>
          <div
            data-reveal
            className="lg:col-span-7"
            style={{ "--rd": "120ms" } as CSSProperties}
          >
            <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              Welcome to H&amp;H Photography
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-charcoal/85 sm:text-lg">
              <p>
                Photographs give us the opportunity to capture a moment in time. A
                feeling. A memory. A season of life that we will never be in again.
              </p>
              <p>You don't need to know how to pose. You don't need perfectly behaved kids.
              You don't need to turn your life into something it isn't.</p>
              <p>
                The best photographs come from the small things: the way your family
                interacts, the places you love, the personalities that make your people
                yours.
              </p>
              <p>
                My job is to guide you when you need it, and give you space when the real
                moments start unfolding.
              </p>
            </div>
            <Link to="/about" className="cta-meet mt-8 inline-block">
              Meet Emily
            </Link>
          </div>
        </div>
      </section>

      {/* 3 — Sessions & Services: clearly divided section */}
      <section className="border-t border-parchment bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div
            data-reveal
            className="flex flex-wrap items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
                Sessions &amp; Services
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal/80">
                Families, children, seniors, maternity, couples, branding, events, and
                creative portraits. Personally tailored for every client.
              </p>
            </div>
            <Link to="/sessions" className="cta-sessions">
              See all sessions <span className="arrow inline-flex"><ArrowUpRight size={14} aria-hidden="true" /></span>
            </Link>
          </div>
          <ol
            className="mt-12 divide-y divide-taupe/50 border-y border-taupe/50"
            data-reveal
          >
            {SESSION_TYPES.map((service, i) => (
              <li
                key={service.id}
                className="group py-6 first:pt-7 last:pb-7"
              >
                <div className="grid items-baseline gap-2 sm:grid-cols-[3.5rem_1fr_auto] sm:items-start">
                  <span
                    className="font-accent text-xl italic text-sage"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl text-emerald-deep sm:text-2xl">
                      {service.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/75 sm:text-base">
                      {service.short}
                    </p>
                  </div>
                  <Link
                    to="/sessions"
                    hash={service.id}
                    aria-label={`See details for ${service.name} sessions`}
                    className="mt-1 inline-flex text-emerald-deep/60 transition-colors group-hover:text-emerald-deep sm:mt-2"
                  >
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3b — Featured Work: dedicated gallery section */}
      <section className="bg-parchment/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]">
                Featured Work
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-charcoal/80">
                A few of the stories Emily has been trusted to hold: families,
                children, and golden-hour moments.
              </p>
            </div>
            <Link to="/portfolio" className="cta-sessions">
              View full portfolio{" "}
              <span className="arrow inline-flex"><ArrowUpRight size={14} aria-hidden="true" /></span>
            </Link>
          </div>
          <div data-reveal className="mt-12 grid gap-8 sm:grid-cols-3">
            <figure>
              <div className="photo-frame aspect-[4/5]">
                <Link to="/portfolio" aria-label="See family photographs">
                  <img
                    src={PHOTOS.hero}
                    alt="A family gathers around a table at golden hour"
                    loading="lazy"
                  />
                </Link>
              </div>
              <figcaption className="mt-3 font-accent text-base italic text-forest/80">
                Families
              </figcaption>
            </figure>
            <figure>
              <div className="photo-frame aspect-[4/5]">
                <Link to="/portfolio" aria-label="See family photographs">
                  <img
                    src={PHOTOS.familyHorses}
                    alt="A family in a field with horses behind a fence"
                    loading="lazy"
                  />
                </Link>
              </div>
              <figcaption className="mt-3 font-accent text-base italic text-forest/80">
                Generations, golden hour
              </figcaption>
            </figure>
            <figure>
              <div className="photo-frame aspect-[4/5]">
                <Link to="/portfolio" aria-label="See children's photographs">
                  <img
                    src={PHOTOS.grandpaGrandgirl}
                    alt="A grandfather and granddaughter share a rocking chair in a field"
                    loading="lazy"
                  />
                </Link>
              </div>
              <figcaption className="mt-3 font-accent text-base italic text-forest/80">
                Children
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4 — Experiences duo */}
      <section className="is-dark bg-emerald-deep pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <BotanicalDivider />
          <div
            data-reveal
            className="mt-8 text-center"
            style={{ "--rd": "60ms" } as CSSProperties}
          >
            <h2 className="text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.75rem]">
              More Than a Session
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/75">
              Special photography experiences and unique places, where the setting is as
              memorable as the photographs.
            </p>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
            {EXPERIENCES.map((exp, idx) => (
              <article
                key={exp.id}
                data-reveal
                className="border-t border-ivory/20 pt-8"
                style={{ "--rd": `${idx * 110}ms` } as CSSProperties}
              >
                {exp.photo ? (
                  <div className="photo-frame aspect-[4/3]">
                    <img
                      src={exp.photo}
                      alt={`${exp.name} - golden light in open country`}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <PhotoPlaceholder label={exp.name} className="aspect-[4/3]" />
                )}
                <h3 className="mt-6 text-2xl text-ivory">{exp.name}</h3>
                <p className="mt-2 font-accent text-lg italic text-ivory/80">{exp.tagline}</p>
                <Link
                  to="/experiences"
                  hash={exp.id}
                  className="mt-4 mb-2 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory underline decoration-ivory/40 decoration-1 underline-offset-8 transition-colors hover:decoration-ivory"
                >
                  Explore the experience <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Statement band */}
      <section className="bg-parchment/45">
        <div
          data-reveal
          className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20"
        >
          <BotanicalDivider />
          <p className="mt-6 font-accent text-3xl italic leading-snug text-charcoal sm:text-4xl lg:text-[2.9rem]">
            Storytelling, warm, and never overly posed.
          </p>
          <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-forest">
            Personally tailored for every client
          </p>
        </div>
      </section>

      {/* 6 — CTA panel */}
      <section className="bg-parchment/70">
        <div
          data-reveal
          className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28"
        >
          <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Tell me what you want to <em className="font-accent italic">remember.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
            Every story deserves to be remembered. Let's tell yours together.
          </p>
          <Link to="/inquire" className="cta-story mt-9">
            Tell Me Your Story
          </Link>
        </div>
      </section>
    </>
  );
}