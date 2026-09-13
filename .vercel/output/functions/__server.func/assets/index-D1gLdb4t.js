import { T as jsxRuntimeExports } from "../server.js";
import { b as PORTFOLIO_CATEGORIES, L as Link, c } from "./router-Bsm4Reah.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function PortfolioIndex() {
  const filled = PORTFOLIO_CATEGORIES.filter((c2) => c2.images.length > 0);
  const comingSoon = PORTFOLIO_CATEGORIES.filter((c2) => c2.images.length === 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl", children: "Scroll the shelf, then open an album for more." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: filled.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-emerald-deep sm:text-3xl", children: category.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-charcoal/60", children: [
              category.images.length,
              " photos — scroll to browse"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$category", params: {
            category: category.id
          }, className: "cta-sessions", children: [
            "Open album",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arrow inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 14, "aria-hidden": "true" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory", children: category.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "shrink-0 snap-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/$category", params: {
          category: category.id
        }, "aria-label": `${category.label} photograph ${i + 1}`, className: "photo-frame natural block h-40 w-56 sm:h-48 sm:w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${category.label} - photograph ${i + 1}`, loading: "lazy" }) }) }, `${src}-${i}`)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-charcoal/45", children: "Swipe / scroll for more" })
      ] }, category.id)) }),
      comingSoon.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-16 max-w-lg border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60", children: [
        comingSoon.map((c2) => c2.label).join(", "),
        " albums are being photographed — they'll join the shelf soon."
      ] })
    ] }) })
  ] });
}
export {
  PortfolioIndex as component
};
