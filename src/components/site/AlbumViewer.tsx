"use client";
import { useCallback, useEffect, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { PORTFOLIO_CATEGORIES } from "./site-data";

/* Interactive album viewer: one large photograph at a time with arrow /
   keyboard navigation and a filmstrip. Photos are never cropped. */
export function AlbumViewer({ categoryId }: { categoryId: string }) {
  const category = PORTFOLIO_CATEGORIES.find((c) => c.id === categoryId);
  const images = category?.images ?? [];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
  }, [categoryId]);

  const step = useCallback(
    (dir: number) => setIdx((i) => (i + dir + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (images.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, images.length]);

  if (!category || images.length === 0) {
    return (
      <p className="border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60">
        This collection is being photographed — it will be added soon.
      </p>
    );
  }

  const current = images[idx];

  return (
    <div>
      {/* Stage */}
      <div className="relative bg-emerald-deep/5">
        <div className="photo-frame natural flex items-center justify-center">
          <img
            key={current}
            src={current}
            alt={`${category.label} - photograph ${idx + 1}`}
            className="mx-auto max-h-[68vh] w-auto max-w-full object-contain"
            loading={idx < 2 ? "eager" : "lazy"}
          />
        </div>

        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous photograph"
          className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-deep/30 bg-ivory/90 text-emerald-deep transition-colors hover:bg-ivory"
        >
          <CaretLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next photograph"
          className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-deep/30 bg-ivory/90 text-emerald-deep transition-colors hover:bg-ivory"
        >
          <CaretRight size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Caption */}
      <p className="mt-4 text-center font-accent text-lg italic text-forest">
        {category.label} · {idx + 1} of {images.length}
      </p>

      {/* Filmstrip */}
      <div className="mt-5 overflow-x-auto pb-2">
        <ul className="flex gap-2.5">
          {images.map((src, i) => (
            <li key={`${src}-${i}`} className="shrink-0">
              <button
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Go to ${category.label} photograph ${i + 1}`}
                aria-current={i === idx}
                className={`photo-frame block h-16 w-16 overflow-hidden sm:h-20 sm:w-20 ${
                  i === idx ? "ring-2 ring-emerald-deep ring-offset-2" : "opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}