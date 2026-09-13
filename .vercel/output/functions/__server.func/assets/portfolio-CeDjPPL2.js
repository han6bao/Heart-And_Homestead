import { M as reactExports, T as jsxRuntimeExports } from "../server.js";
import { b as PORTFOLIO_CATEGORIES, n, L as Link } from "./router-DUe0gJuG.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function PortfolioGallery() {
  const [lightbox, setLightbox] = reactExports.useState(null);
  const closeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (lightbox === null) return;
    closeRef.current?.focus();
    const onKey = (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    filled.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20 last:mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-emerald-deep sm:text-3xl", children: category.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 block h-px w-12 bg-emerald-deep/25", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8", children: category.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6 break-inside-avoid lg:mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setLightbox({ src, label: category.label }),
          "aria-label": `Open ${category.label} photograph ${i + 1} in a larger view`,
          className: "photo-frame natural block w-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: `${category.label} - photograph ${i + 1}`, loading: "lazy" })
        }
      ) }, `${src}-${i}`)) })
    ] }, category.id)),
    comingSoon.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60", children: [
      comingSoon.map((c) => c.label).join(", "),
      " collections are being photographed — they'll join the gallery soon."
    ] }),
    lightbox && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Portfolio photograph, larger view",
        className: "fixed inset-0 z-[90] flex items-center justify-center bg-emerald-deep/95 p-5",
        onClick: () => setLightbox(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              ref: closeRef,
              type: "button",
              onClick: () => setLightbox(null),
              "aria-label": "Close larger view",
              className: "absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory transition-colors hover:text-parchment",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(n, { size: 26, "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "max-h-[88dvh] max-w-5xl", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: lightbox.src,
                alt: `${lightbox.label} photograph, larger view`,
                className: "max-h-[82dvh] w-auto max-w-full object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-3 text-center font-accent text-lg italic text-ivory/80", children: lightbox.label })
          ] })
        ]
      }
    )
  ] });
}
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl font-accent text-xl italic text-ivory/80 sm:text-2xl", children: "A glimpse of the stories I've been trusted to hold." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-reveal": true, className: "mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioGallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 border-t border-parchment pt-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-charcoal/85", children: "Want to see more?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "cta-story mt-6 inline-block", children: "Tell Me Your Story" })
      ] })
    ] })
  ] });
}
export {
  Portfolio as component
};
