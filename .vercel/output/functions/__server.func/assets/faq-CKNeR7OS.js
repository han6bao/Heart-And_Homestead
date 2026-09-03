import { T as jsxRuntimeExports } from "../server.js";
import { F as FAQS } from "./router-D5hWS-aS.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function Faq() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xl italic text-ivory/75 sm:text-2xl", children: "Everything you're wondering" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl", children: "Questions, answered" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-charcoal/80", children: "If you don't find your answer here, Emily would love to hear from you directly through the inquiry form." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: FAQS.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group border-t border-taupe/60 py-2 last:border-b", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer items-center justify-between gap-6 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg text-emerald-deep sm:text-xl", children: faq.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-arrow font-accent text-2xl italic leading-none text-forest", "aria-hidden": "true", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pb-6 pr-8 text-base leading-relaxed text-charcoal/80", children: faq.a })
      ] }, faq.q)) })
    ] }) })
  ] });
}
export {
  Faq as component
};
