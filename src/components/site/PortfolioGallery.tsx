"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { PORTFOLIO_CATEGORIES } from "./site-data";

/* One calm, uniform gallery of the real photography.
   No tabs, no clutter: every photograph equal, with a lightbox. */
const FEATURED = PORTFOLIO_CATEGORIES.flatMap((category) =>
  category.images.map((src) => ({ src, category: category.label })),
);

export function PortfolioGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (lightbox === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((item, i) => (
          <li key={`${item.src}-${i}`}>
            <button
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`Open ${item.category} photograph ${i + 1} in a larger view`}
              className="photo-frame block w-full aspect-[4/5]"
            >
              <img
                src={item.src}
                alt={`${item.category} - photograph ${i + 1}`}
                loading="lazy"
              />
            </button>
            <p className="mt-3 font-accent text-base italic text-forest/80">
              {item.category}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-14 text-center text-sm text-charcoal/60">
        More collections are being photographed and will be added here soon.
      </p>

      {lightbox !== null && FEATURED[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio photograph, larger view"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-emerald-deep/90 p-5 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close larger view"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory transition-colors hover:text-parchment"
          >
            <X size={26} aria-hidden="true" />
          </button>
          <img
            src={FEATURED[lightbox].src}
            alt={`${FEATURED[lightbox].category} photograph, larger view`}
            className="max-h-[86dvh] max-w-4xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}