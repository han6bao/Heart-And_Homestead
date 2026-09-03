import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "../components/site/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Heart & Homestead Photography" },
      {
        name: "description",
        content:
          "Answers about travel, clothing, children, locations, galleries, events, pets, rain, editing, and payments for Heart & Homestead sessions.",
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <section className="page-hero is-dark">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="font-accent text-xl italic text-ivory/75 sm:text-2xl">
            Everything you're wondering
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">
            Questions, answered
          </h1>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-base leading-relaxed text-charcoal/80">
            If you don't find your answer here, Emily would love to hear from you
            directly through the inquiry form.
          </p>
          <div className="mt-10">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group border-t border-taupe/60 py-2 last:border-b"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-5">
                  <h2 className="text-lg text-emerald-deep sm:text-xl">{faq.q}</h2>
                  <span className="faq-arrow font-accent text-2xl italic leading-none text-forest" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-8 text-base leading-relaxed text-charcoal/80">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}