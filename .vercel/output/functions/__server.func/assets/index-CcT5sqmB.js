import { T as jsxRuntimeExports } from "../server.js";
import { b as PORTFOLIO_CATEGORIES, L as Link, c } from "./router-CvZrjujd.js";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl", children: "A glimpse of the stories I've been trusted to hold." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-center text-base leading-relaxed text-charcoal/80 sm:text-lg", children: "Every collection has its own page. Pick a section to see the full set of photographs, or browse the previews below." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 space-y-20", children: filled.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl text-emerald-deep sm:text-4xl", children: category.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-charcoal/60", children: [
              category.images.length,
              " photographs"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$category", params: {
            category: category.id
          }, className: "cta-sessions", children: [
            "View all ",
            category.images.length,
            " photos",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "arrow inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 14, "aria-hidden": "true" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5", children: category.images.slice(0, 6).map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio/$category", params: {
          category: category.id
        }, "aria-label": `${category.label} photograph ${i + 1}`, className: "photo-frame natural block w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${category.label} - photograph ${i + 1}`, loading: "lazy" }) }) }, `${src}-${i}`)) })
      ] }, category.id)) }),
      comingSoon.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-16 border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60", children: [
        comingSoon.map((c2) => c2.label).join(", "),
        " collections are being photographed — they'll join the gallery soon."
      ] })
    ] }) })
  ] });
}
export {
  PortfolioIndex as component
};
