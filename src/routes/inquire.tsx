import { createFileRoute, Link } from "@tanstack/react-router";
import { InquiryForm } from "../components/site/InquiryForm";

export const Route = createFileRoute("/inquire")({
  validateSearch: (search: Record<string, unknown>): { type?: string } => ({
    type: typeof search.type === "string" ? search.type : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Inquire | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "Tell Emily what you want to remember. Every session begins with a conversation about your family, your season, and the feeling you want to keep.",
      },
    ],
  }),
  component: Inquire,
});

const NEXT_STEPS = [
  {
    name: "Emily replies",
    detail: "She reads every story personally and replies to plan something together.",
  },
  {
    name: "You plan together",
    detail: "Session type, location, timing, and the feeling you want.",
  },
  {
    name: "Make it official",
    detail: "Booking, contract, and retainer, then the real moments begin.",
  },
];

function Inquire() {
  const { type } = Route.useSearch();

  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <img
            src="/assets/logo-short.png"
            alt="H&H Photography"
            width={280}
            height={210}
            loading="lazy"
            className="mx-auto w-44 object-contain sm:w-56"
          />
          <p className="mt-8 font-accent text-xl italic text-ivory/75 sm:text-2xl">
            Every session begins with a conversation
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl leading-tight text-ivory sm:text-5xl lg:text-[3.4rem]">
            Tell me what you want to <em className="font-accent italic">remember.</em>
          </h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-base leading-relaxed text-charcoal/85 sm:text-lg">
                Share a little about who you are photographing and what you want these
                photographs to hold. There are no wrong answers, only your story.
              </p>
              <div className="mt-10">
                <InquiryForm initialType={type} />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="border-t border-taupe/60 pt-8">
                <h2 className="text-2xl text-emerald-deep">What happens next</h2>
                <ol className="mt-6 space-y-7">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.name} className="grid grid-cols-[2.5rem_1fr]">
                      <span
                        className="font-accent text-xl italic text-sage"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg text-emerald-deep">{step.name}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-charcoal/75">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-9 text-sm leading-relaxed text-charcoal/70">
                  Prefer email? Reach Emily directly at{" "}
                  <a
                    href={`mailto:${"handhphoto26@gmail.com"}`}
                    className="font-medium text-emerald-deep underline decoration-taupe underline-offset-4 hover:decoration-emerald-deep"
                  >
                    handhphoto26@gmail.com
                  </a>
                  .
                </p>
                <p className="mt-6 text-sm leading-relaxed text-charcoal/70">
                  Browse the{" "}
                  <Link
                    to="/faq"
                    className="font-medium text-emerald-deep underline decoration-taupe underline-offset-4 hover:decoration-emerald-deep"
                  >
                    FAQ
                  </Link>{" "}
                  for answers about timing, locations, and what to expect.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}