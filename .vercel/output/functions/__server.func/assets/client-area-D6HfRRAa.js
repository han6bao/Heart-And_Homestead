import { T as jsxRuntimeExports } from "../server.js";
import { a as LINKS, L as Link, c } from "./router-D5hWS-aS.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const TILES = [{
  label: "View My Gallery",
  description: "Your finished photographs, delivered in a private Pixieset gallery you can revisit any time.",
  href: LINKS.pixieset,
  external: true
}, {
  label: "Book Another Session",
  description: "Ready for the next chapter? Tell Emily your story and plan something new.",
  to: "/inquire"
}, {
  label: "Contracts + Payments",
  description: "Sign your contract and complete your retainer securely.",
  href: LINKS.contractsPayments,
  external: true
}, {
  label: "Session Resources",
  description: "Style guides, preparation thoughts, and what to expect before your session.",
  href: LINKS.sessionResources,
  external: true
}];
function ClientArea() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xl italic text-ivory/75 sm:text-2xl", children: "Everything for your session, in one place" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl", children: "Welcome back." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-8 gap-y-12 sm:grid-cols-2", children: TILES.map((tile) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-taupe/60 pt-7", children: "to" in tile ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: tile.to, className: "group flex items-start justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-emerald-deep", children: tile.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-base leading-relaxed text-charcoal/75", children: tile.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 inline-flex shrink-0 text-emerald-deep/50 transition-colors group-hover:text-emerald-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 24, "aria-hidden": "true" }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: tile.href, target: "_blank", rel: "noreferrer", className: "group flex items-start justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-emerald-deep", children: tile.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-base leading-relaxed text-charcoal/75", children: tile.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 inline-flex shrink-0 text-emerald-deep/50 transition-colors group-hover:text-emerald-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c, { size: 24, "aria-hidden": "true" }) })
      ] }) }, tile.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "is-dark mt-16 grid items-center gap-8 bg-emerald-deep px-8 py-12 sm:px-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl text-ivory", children: "Contact Emily" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-base leading-relaxed text-ivory/80", children: "Have a question about your session, your gallery, or anything in between? Emily would love to hear from you." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 lg:justify-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${LINKS.email}`, className: "cta-story is-dark", children: "Email Emily" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ivory/85 underline decoration-ivory/30 decoration-1 underline-offset-8 transition-colors hover:text-ivory hover:decoration-ivory", children: "Tell Me Your Story" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-center text-sm leading-relaxed text-charcoal/60", children: "Contracts, payments, and session resources will be connected here as soon as they're ready. Until then, Emily shares everything personally by email." })
    ] }) })
  ] });
}
export {
  ClientArea as component
};
