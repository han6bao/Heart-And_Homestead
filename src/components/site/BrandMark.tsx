import { Link } from "@tanstack/react-router";

/* One shared brand lockup for header and footer: the HH monogram mark
   plus PHOTOGRAPHY in the wide brand sans. Same everywhere. */
export function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5"
      aria-label="Heart & Homestead Photography - home"
    >
      <img
        src="/assets/logo-monogram.png"
        alt=""
        width={36}
        height={36}
        className={small ? "h-7 w-auto object-contain" : "h-9 w-auto object-contain"}
      />
      <span
        className={
          small
            ? "font-sans text-[0.56rem] font-semibold uppercase tracking-[0.4em] text-ivory/85"
            : "font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-ivory/85"
        }
      >
        Photography
      </span>
    </Link>
  );
}