import { T as jsxRuntimeExports } from "../server.js";
import { V as VENUES, L as Link, c, a as LINKS } from "./router-D5hWS-aS.js";
import { P as PhotoPlaceholder } from "./PhotoPlaceholder-CxyzM8KY.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function Locations() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xl italic text-ivory/75 sm:text-2xl", children: "Favorite places, favorite light" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl", children: "Places With a Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg", children: "Every location here has a feeling of its own. These are the places Emily loves to photograph, and new ones are added all the time." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-20 px-5 py-20 sm:px-8 sm:py-24", children: [
      VENUES.map((venue) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { "data-reveal": true, className: "grid gap-10 lg:grid-cols-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: venue.photos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-[3/4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: venue.photos[0], alt: venue.name, loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4", children: [
            venue.photos.slice(1).map((photo) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame aspect-square", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo, alt: `${venue.name} detail`, loading: "lazy" }) }, photo)),
            venue.photos.length === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoPlaceholder, { label: `${venue.name} detail`, className: "aspect-square" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoPlaceholder, { label: venue.name, className: "aspect-[4/3] !min-h-0" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-forest", children: venue.region }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl leading-tight sm:text-4xl", children: venue.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest", children: "Why Emily loves it" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-relaxed text-charcoal/85", children: venue.why }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest", children: "Best session types" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: venue.bestSessions.map((session) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-base text-charcoal/85", children: session }, session)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest", children: "Best time of day" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base text-charcoal/85", children: venue.bestTime }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest", children: "Seasonal notes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base text-charcoal/85", children: venue.seasonal })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest", children: "What clients should know" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-base leading-relaxed text-charcoal/85", children: venue.shouldKnow })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "cta-story", children: "Book a session here" }),
            venue.link ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: venue.link, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest underline decoration-taupe decoration-1 underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep", children: [
              "Visit the venue ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 14, "aria-hidden": "true" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-charcoal/50", children: "Venue link to be added" })
          ] })
        ] })
      ] }, venue.name)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "border-t border-parchment pt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl leading-tight sm:text-4xl", children: [
          "Got a place with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-accent italic", children: "a story?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-charcoal/80", children: "Your family farm, your grandparents' house, your favorite spot by the water. If the place matters to you, it's a location. Emily is always scouting new favorites." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "cta-story", children: "Tell Me Your Story" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: LINKS.instagram, target: "_blank", rel: "noreferrer", className: "text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest underline decoration-taupe decoration-1 underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep", children: "See recent sessions on Instagram" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Locations as component
};
