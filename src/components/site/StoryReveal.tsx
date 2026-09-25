"use client";
import { useState } from "react";

/* Emily's story, revealed a page at a time — like turning pages in a letter.
   Deliberately NOT an FAQ accordion: no collapsing, no jumping. Each part
   stays and the next one gently arrives. */
const STORY_PARTS: string[][] = [
  [
    "As a mama to three wild littles, I know just how quickly time passes. One minute they're toddlers, and somehow, before you know it, they're becoming big kids.",
    "I know how tempting it is to wait. To wait until you lose the baby weight, until their self-inflicted haircut grows back, until everyone has matching outfits, or until life feels a little less chaotic.",
    "But those things are part of the memories, too.",
  ],
  [
    "Someday, when they're grown and the house feels a little too quiet, you may find yourself wishing you could go back to the scraped knees, missing teeth, messy hair, and tiny hands for just a moment.",
    "Your kids, your family, your animals, and even you do not have to be \u201cpicture perfect\u201d to deserve to be documented.",
    "I want to create images that look like you and feel like your family.",
  ],
  [
    "Your kids want to play in the middle of the session? Bring it on.",
    "Your two-year-old is on meltdown number 100 of the day? That's totally fine.",
    "My own children, animals, and family are chaos gremlins from sunup until way past sundown. Whatever your family brings to the session, I can handle it. We'll embrace it, work with it, and capture some incredible moments along the way.",
  ],
  [
    "As a mama to two adopted boys, this means even more to me.",
    "I didn't get to raise my boys from the very beginning. They came to me when they were two and four. I don't have photographs of their tiny newborn fingers and toes. I don't have pictures of them smashing into their first birthday cakes. I don't have those little pieces of their earliest years to frame and display, and I would give anything to have them.",
    "My daughter will have those photographs, and as grateful as I am for that, it also reminds me of everything I missed with my boys.",
  ],
  [
    "So now, I document the in-between moments for all of them whenever I can.",
    "Even when they're grumpy. Even when I'm grumpy. Even when life feels messy.",
    "I want my children to remember that our life wasn't always perfect, but that we loved each other through all of it: the phases, the tantrums, the laughter, the hard days, and the really beautiful ones.",
    "And that is what I want to give your family, too.",
    "So bring me the scraped knees, tired eyes, missing teeth, messy hair, belly laughs, and warm hearts.",
    "We aren't chasing perfection. A moment doesn't have to be perfect to be extraordinary.",
    "We're chasing authentic moments, golden light, sunsets, connection, and laughter.",
    "We're documenting your family exactly as you are, right now, because this season deserves to be remembered, too.",
  ],
];

export function StoryReveal() {
  const [revealed, setRevealed] = useState(1);
  const hasMore = revealed < STORY_PARTS.length;

  return (
    <div className="border border-taupe/50 bg-parchment/30 px-6 py-10 sm:px-12 sm:py-14">
      <p className="text-center font-accent text-lg italic text-forest">
        A letter from Emily
      </p>

      <div className="mt-8 space-y-10">
        {STORY_PARTS.slice(0, revealed).map((part, partIndex) => (
          <div key={partIndex} className="story-part space-y-5">
            {partIndex > 0 && (
              <span
                className="mx-auto block h-px w-14 bg-emerald-deep/25"
                aria-hidden="true"
              />
            )}
            {part.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-charcoal/85 sm:text-[1.0625rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setRevealed((n) => n + 1)}
            className="group inline-flex flex-col items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-deep transition-colors hover:text-forest"
          >
            Keep reading
            <span
              aria-hidden="true"
              className="text-base transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
