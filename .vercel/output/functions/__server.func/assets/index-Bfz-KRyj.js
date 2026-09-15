import { T as jsxRuntimeExports } from "../server.js";
import { b as PORTFOLIO_CATEGORIES, L as Link, c } from "./router-DYLVSEh1.js";
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
  const featured = filled[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "is-dark relative overflow-hidden bg-emerald-deep", children: [
      featured && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured.images[0], alt: `${featured.label} - featured photograph`, className: "absolute inset-0 h-full w-full object-cover object-center opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/55 to-emerald-deep/25", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-5 py-32 text-center sm:px-8 sm:py-40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sage", children: "The Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-5xl leading-tight text-ivory sm:text-6xl lg:text-7xl", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-xl font-accent text-2xl italic text-ivory/85 sm:text-2xl", children: "Collections, one album at a time." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-16 md:grid-cols-12 md:gap-x-12 lg:gap-x-16", children: filled.map((category, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: idx % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$category", params: {
        category: category.id
      }, "aria-label": `Open the ${category.label} album, ${category.images.length} photographs`, className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "photo-frame natural block w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: category.images[0], alt: `${category.label} - album cover`, loading: idx < 2 ? "eager" : "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 flex items-baseline justify-between gap-4 border-t border-taupe/50 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl text-emerald-deep transition-colors group-hover:text-forest sm:text-[1.7rem]", children: [
            String(idx + 1).padStart(2, "0"),
            " · ",
            category.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex shrink-0 items-center gap-2 text-sm text-charcoal/55", children: [
            category.images.length,
            " photos",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex text-emerald-deep transition-transform group-hover:translate-x-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 15, "aria-hidden": "true" }) })
          ] })
        ] })
      ] }) }, category.id)) }),
      comingSoon.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-24 max-w-lg border-t border-taupe/50 pt-6 text-center font-accent text-lg italic text-charcoal/70", children: "The collections are being curated — every photograph will find its place here soon." })
    ] }) })
  ] });
}
export {
  PortfolioIndex as component
};
