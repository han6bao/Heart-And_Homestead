import { T as jsxRuntimeExports } from "../server.js";
import { L as Link, P as PHOTOS, c, S as SESSION_TYPES, E as EXPERIENCES } from "./router-D5hWS-aS.js";
import { B as BotanicalDivider } from "./BotanicalDivider-DoHIQw-_.js";
import { P as PhotoPlaceholder } from "./PhotoPlaceholder-CxyzM8KY.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "is-dark relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-emerald-deep sm:min-h-[74dvh] lg:min-h-[80dvh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "radial-gradient(ellipse 60% 50% at 78% 8%, rgba(164,180,154,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 12% 90%, rgba(164,180,154,0.10), transparent 55%)"
      }, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-5xl px-3 py-10 text-center sm:px-8 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "hero-rise order-1 text-[clamp(1.1rem,5.2vw,1.45rem)] tracking-[0.015em] leading-[1.15] text-ivory sm:tracking-[0.06em] sm:text-[2.1rem] md:text-[2.5rem] lg:text-[3.1rem]", style: {
          "--rise-delay": "0.14s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Moments fade." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block whitespace-nowrap", children: "Memories don't have to." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hero-rise order-2 mt-4 flex flex-col items-center sm:mt-7", style: {
          "--rise-delay": "0.05s"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/logo-circle.png", alt: "Heart & Homestead Photography - circular heart and camera logo", width: 144, height: 144, className: "w-24 object-contain sm:w-36" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hero-rise order-3 mt-4 font-accent text-base italic leading-relaxed text-ivory/80 sm:mt-6 sm:text-xl", style: {
          "--rise-delay": "0.22s"
        }, children: "Photographs that feel like home." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hero-rise order-4 mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-5", style: {
          "--rise-delay": "0.3s"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "cta-story is-dark", children: "Tell Me Your Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sessions", className: "text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-ivory/90 underline decoration-ivory/40 decoration-1 underline-offset-8 transition-colors hover:text-ivory hover:decoration-ivory", children: "Explore Sessions" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "lg:col-span-5", style: {
        "--rd": "40ms"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-[3/4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PHOTOS.mamaBaby, alt: "A mother holds her baby in a white rocking chair while a horse watches from beyond a fence", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-accent text-base italic text-forest/80", children: "Golden hour at the ranch" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "lg:col-span-7", style: {
        "--rd": "120ms"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]", children: "Welcome to H&H Photography" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 space-y-4 text-base leading-relaxed text-charcoal/85 sm:text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Photographs give us the opportunity to capture a moment in time. A feeling. A memory. A season of life that we will never be in again." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You don't need to know how to pose. You don't need perfectly behaved kids. You don't need to turn your life into something it isn't." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The best photographs come from the small things: the way your family interacts, the places you love, the personalities that make your people yours." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "My job is to guide you when you need it, and give you space when the real moments start unfolding." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "cta-meet mt-8 inline-block", children: "Meet Emily" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-parchment bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]", children: "Sessions & Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-base leading-relaxed text-charcoal/80", children: "Families, children, seniors, maternity, couples, branding, events, and creative portraits. Personally tailored for every client." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sessions", className: "cta-sessions", children: [
          "See all sessions ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arrow inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 14, "aria-hidden": "true" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-12 divide-y divide-taupe/50 border-y border-taupe/50", "data-reveal": true, children: SESSION_TYPES.map((service, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "group py-6 first:pt-7 last:pb-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-baseline gap-2 sm:grid-cols-[3.5rem_1fr_auto] sm:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xl italic text-sage", "aria-hidden": "true", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl text-emerald-deep sm:text-2xl", children: service.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/75 sm:text-base", children: service.short })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sessions", hash: service.id, "aria-label": `See details for ${service.name} sessions`, className: "mt-1 inline-flex text-emerald-deep/60 transition-colors group-hover:text-emerald-deep sm:mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 22, "aria-hidden": "true" }) })
      ] }) }, service.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-parchment/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "flex flex-wrap items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl leading-tight sm:text-4xl lg:text-[2.6rem]", children: "Featured Work" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-base leading-relaxed text-charcoal/80", children: "A few of the stories Emily has been trusted to hold: families, children, and golden-hour moments." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "cta-sessions", children: [
          "View full portfolio",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arrow inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 14, "aria-hidden": "true" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "mt-12 grid gap-8 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-[4/5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", "aria-label": "See family photographs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PHOTOS.hero, alt: "A family gathers around a table at golden hour", loading: "lazy" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-3 font-accent text-base italic text-forest/80", children: "Families" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-[4/5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", "aria-label": "See family photographs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PHOTOS.familyHorses, alt: "A family in a field with horses behind a fence", loading: "lazy" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-3 font-accent text-base italic text-forest/80", children: "Generations, golden hour" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-[4/5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", "aria-label": "See children's photographs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: PHOTOS.grandpaGrandgirl, alt: "A grandfather and granddaughter share a rocking chair in a field", loading: "lazy" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-3 font-accent text-base italic text-forest/80", children: "Children" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "is-dark bg-emerald-deep pt-20 pb-32 sm:pt-28 sm:pb-44", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BotanicalDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "mt-8 text-center", style: {
        "--rd": "60ms"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl leading-tight text-ivory sm:text-4xl lg:text-[2.75rem]", children: "More Than a Session" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/75", children: "Special photography experiences and unique places, where the setting is as memorable as the photographs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-12 md:grid-cols-2 md:gap-10", children: EXPERIENCES.map((exp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "border-t border-ivory/20 pt-8", style: {
        "--rd": `${idx * 110}ms`
      }, children: [
        exp.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: exp.photo, alt: `${exp.name} - golden light in open country`, loading: "lazy" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoPlaceholder, { label: exp.name, className: "aspect-[4/3]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-2xl text-ivory", children: exp.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-accent text-lg italic text-ivory/80", children: exp.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/experiences", hash: exp.id, className: "mt-4 mb-2 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory underline decoration-ivory/40 decoration-1 underline-offset-8 transition-colors hover:decoration-ivory", children: [
          "Explore the experience ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 14, "aria-hidden": "true" })
        ] })
      ] }, exp.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-parchment/45", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BotanicalDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 font-accent text-3xl italic leading-snug text-charcoal sm:text-4xl lg:text-[2.9rem]", children: "Storytelling, warm, and never overly posed." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-forest", children: "Personally tailored for every client" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-parchment/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-reveal": true, className: "mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]", children: [
        "Tell me what you want to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-accent italic", children: "remember." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-base leading-relaxed text-charcoal/80 sm:text-lg", children: "Every story deserves to be remembered. Let's tell yours together." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "cta-story mt-9", children: "Tell Me Your Story" })
    ] }) })
  ] });
}
export {
  Home as component
};
