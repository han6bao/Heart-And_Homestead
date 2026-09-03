import { M as reactExports, T as jsxRuntimeExports } from "../server.js";
import { n, b as PORTFOLIO_CATEGORIES, L as Link } from "./router-D5hWS-aS.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const FEATURED = PORTFOLIO_CATEGORIES.flatMap(
  (category) => category.images.map((src) => ({ src, category: category.label }))
);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: FEATURED.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setLightbox(i),
          "aria-label": `Open ${item.category} photograph ${i + 1} in a larger view`,
          className: "photo-frame block w-full aspect-[4/5]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.src,
              alt: `${item.category} - photograph ${i + 1}`,
              loading: "lazy"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-accent text-base italic text-forest/80", children: item.category })
    ] }, `${item.src}-${i}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-14 text-center text-sm text-charcoal/60", children: "More collections are being photographed and will be added here soon." }),
    lightbox !== null && FEATURED[lightbox] && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Portfolio photograph, larger view",
        className: "fixed inset-0 z-[90] flex items-center justify-center bg-emerald-deep/90 p-5 backdrop-blur-sm",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: FEATURED[lightbox].src,
              alt: `${FEATURED[lightbox].category} photograph, larger view`,
              className: "max-h-[86dvh] max-w-4xl object-contain shadow-2xl",
              onClick: (e) => e.stopPropagation()
            }
          )
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
