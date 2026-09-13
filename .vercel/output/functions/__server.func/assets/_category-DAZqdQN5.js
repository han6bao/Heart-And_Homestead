import { M as reactExports, T as jsxRuntimeExports } from "../server.js";
import { p, b as PORTFOLIO_CATEGORIES, d as Route, L as Link } from "./router-Bsm4Reah.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const a = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M160,48V208L80,128Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z" }))
  ]
]);
const t$1 = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M176,128,96,208V48Z", opacity: "0.2" }), /* @__PURE__ */ reactExports.createElement("path", { d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("path", { d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z" }))
  ]
]);
const t = reactExports.forwardRef((o, r) => /* @__PURE__ */ reactExports.createElement(p, { ref: r, ...o, weights: a }));
t.displayName = "CaretLeftIcon";
const s$1 = t;
const e = reactExports.forwardRef((o, r) => /* @__PURE__ */ reactExports.createElement(p, { ref: r, ...o, weights: t$1 }));
e.displayName = "CaretRightIcon";
const s = e;
function AlbumViewer({ categoryId }) {
  const category = PORTFOLIO_CATEGORIES.find((c) => c.id === categoryId);
  const images = category?.images ?? [];
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setIdx(0);
  }, [categoryId]);
  const step = reactExports.useCallback(
    (dir) => setIdx((i) => (i + dir + images.length) % images.length),
    [images.length]
  );
  reactExports.useEffect(() => {
    if (images.length === 0) return;
    const onKey = (e2) => {
      if (e2.key === "ArrowRight") step(1);
      if (e2.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, images.length]);
  if (!category || images.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "border-t border-taupe/50 pt-6 text-center text-sm text-charcoal/60", children: "This collection is being photographed — it will be added soon." });
  }
  const current = images[idx];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-emerald-deep/5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame natural flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: current,
          alt: `${category.label} - photograph ${idx + 1}`,
          className: "mx-auto max-h-[68vh] w-auto max-w-full object-contain",
          loading: idx < 2 ? "eager" : "lazy"
        },
        current
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => step(-1),
          "aria-label": "Previous photograph",
          className: "absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-deep/30 bg-ivory/90 text-emerald-deep transition-colors hover:bg-ivory",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(s$1, { size: 20, "aria-hidden": "true" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => step(1),
          "aria-label": "Next photograph",
          className: "absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-deep/30 bg-ivory/90 text-emerald-deep transition-colors hover:bg-ivory",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(s, { size: 20, "aria-hidden": "true" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-center font-accent text-lg italic text-forest", children: [
      category.label,
      " · ",
      idx + 1,
      " of ",
      images.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 overflow-x-auto pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex gap-2.5", children: images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setIdx(i),
        "aria-label": `Go to ${category.label} photograph ${i + 1}`,
        "aria-current": i === idx,
        className: `photo-frame block h-16 w-16 overflow-hidden sm:h-20 sm:w-20 ${i === idx ? "ring-2 ring-emerald-deep ring-offset-2" : "opacity-70 hover:opacity-100"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", loading: "lazy" })
      }
    ) }, `${src}-${i}`)) }) })
  ] });
}
function CategoryPage() {
  const {
    category
  } = Route.useParams();
  const found = PORTFOLIO_CATEGORIES.find((c) => c.id === category);
  if (!found) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-24 text-center sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl text-ivory", children: "Collection not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "cta-story is-dark mt-8 inline-block", children: "Back to portfolio" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ivory/70 transition-colors hover:text-ivory", children: "All albums" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl leading-tight text-ivory sm:text-5xl", children: found.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-3 font-accent text-lg italic text-ivory/75", children: [
        found.images.length,
        " photographs · use the arrows or your keyboard"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlbumViewer, { categoryId: found.id }) }) })
  ] });
}
export {
  CategoryPage as component
};
