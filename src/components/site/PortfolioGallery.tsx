"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import { PORTFOLIO_CATEGORIES } from "./site-data";

/* Sectioned masonry gallery. Every photograph keeps its natural shape —
   nothing is cropped. Placeholder categories show a quiet note. */
export function PortfolioGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);
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

  const filled = PORTFOLIO_CATEGORIES.filter((c) => c.images.length > 0);
  const comingSoon = PORTFOLIO_CATEGORIES.filter((c) => c.images.length === 0);

  return (
    <div>
      {filled.map((category) => (
        <section key={category.id} className="mb-20 last:mb-0">
          <h2 className="text-2xl text-emerald-deep sm:text-3xl">{category.label}</h2>
          <span className="mt-3 block h-px w-12 bg-emerald-deep/25" aria-hidden="true" />
          <ul className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
            {category.images.map((src, i) => (
              <li key={`${src}-${i}`} className="mb-6 break-inside-avoid lg:mb-8">
                <button
                  type="button"
                  onClick={() => setLightbox({ src, label: category.label })}
                  aria-label={`Open ${category.label} photograph ${i + 1} in a larger view`}
                  className="photo-frame natural block w-full"
                >
                  <img src={src} alt={`${category.label} - photograph ${i + 1}`} loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {comingSoon.length > 0 && (
        <p className="border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60">
          {comingSoon.map((c) => c.label).join(", ")} collections are being photographed —
          they'll join the gallery soon.
        </p>
      )}

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio photograph, larger view"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-emerald-deep/95 p-5"
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
          <figure className="max-h-[88dvh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={`${lightbox.label} photograph, larger view`}
              className="max-h-[82dvh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-3 text-center font-accent text-lg italic text-ivory/80">
              {lightbox.label}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}