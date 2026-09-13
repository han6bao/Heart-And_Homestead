import { T as jsxRuntimeExports } from "../server.js";
import { b as PORTFOLIO_CATEGORIES, L as Link, c } from "./router-F-xe8oOE.js";
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl", children: "Collections, one album at a time." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14", children: filled.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio/$category", params: {
        category: category.id
      }, "aria-label": `Open the ${category.label} album`, className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "photo-frame natural block w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: category.images[0], alt: `${category.label} - album cover`, loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 flex items-baseline justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-emerald-deep transition-colors group-hover:text-forest", children: category.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-forest", children: [
            category.images.length,
            " photos",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex transition-transform group-hover:translate-x-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 13, "aria-hidden": "true" }) })
          ] })
        ] })
      ] }) }, category.id)) }),
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
