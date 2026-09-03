import { T as jsxRuntimeExports } from "../server.js";
import { S as SESSION_TYPES, L as Link, O as OPTION_BY_SESSION } from "./router-D5hWS-aS.js";
import { B as BotanicalDivider } from "./BotanicalDivider-DoHIQw-_.js";
import { P as PhotoPlaceholder } from "./PhotoPlaceholder-CxyzM8KY.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const PROCESS = [{
  name: "Tell Me Your Story",
  detail: "Complete a short inquiry form so Emily can learn what you're envisioning. There are no wrong answers, only your story."
}, {
  name: "Plan Together",
  detail: "Choose your session, location, timing, and details. Emily helps with locations, styling, and the feeling you want."
}, {
  name: "Make It Official",
  detail: "Complete booking, contract, and retainer, then rest easy. Everything is clear and unhurried."
}, {
  name: "Your Session",
  detail: "Come as you are. Emily guides when you need direction and leaves space for the real moments to unfold."
}, {
  name: "Your Gallery",
  detail: "Receive your finished images through a private Pixieset gallery, ready to revisit whenever you like."
}];
function Sessions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xl italic text-ivory/75 sm:text-2xl", children: "Relaxed, personal, and built around you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl", children: "Sessions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "is-dark border-t border-ivory/15 bg-emerald-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-5 py-10 text-center sm:px-8 sm:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[1.35rem] leading-tight text-ivory sm:text-2xl lg:text-[1.9rem]", children: [
      "No two stories look ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-accent italic", children: "the" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-accent italic", children: "same." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-center font-accent text-xl italic leading-relaxed text-charcoal/80 sm:text-2xl", children: "Before your session, we'll talk about what matters to you: who you are photographing, what you want to remember, the location, your style, and the feeling you want your photographs to have. From there, your session is built around you." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16", children: SESSION_TYPES.map((session, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: session.id, "data-reveal": true, className: "grid gap-8 border-t border-taupe/50 py-12 first:border-t-0 first:pt-0 last:pb-2 lg:grid-cols-12 lg:gap-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-lg italic text-sage", "aria-hidden": "true", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl leading-tight sm:text-3xl", children: session.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3 text-sm leading-relaxed text-charcoal/80 sm:text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-emerald-deep", children: "For: " }),
              session.whoFor
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "font-semibold text-emerald-deep", children: [
                "How it feels:",
                " "
              ] }),
              session.feel
            ] })
          ] }),
          session.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-frame mt-7 aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: session.image, alt: session.name, loading: "lazy" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoPlaceholder, { label: session.name, className: "aspect-[16/9]" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-base leading-relaxed text-charcoal/85 sm:text-lg", children: session.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest", children: "What clients receive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: session.receive.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-baseline gap-3 text-base text-charcoal/85", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-lg italic text-sage", "aria-hidden": "true", children: "+" }),
              item
            ] }, item)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", search: {
            type: OPTION_BY_SESSION[session.id] ?? "Family"
          }, className: "cta-story mt-9 inline-block", children: "Tell Me Your Story" })
        ] })
      ] }, session.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-parchment bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BotanicalDivider, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-8 text-center text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]", children: [
        "How we'll work ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-accent italic", children: "together" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-14 max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-10", children: PROCESS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid gap-3 sm:grid-cols-[4rem_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-3xl italic leading-none text-sage", "aria-hidden": "true", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl text-emerald-deep sm:text-2xl", children: step.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-xl text-base leading-relaxed text-charcoal/80", children: step.detail })
        ] })
      ] }, step.name)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-parchment/70", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl leading-tight sm:text-4xl", children: "Investment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-relaxed text-charcoal/85 sm:text-lg", children: "Investment information is available during booking, so we can talk through what makes sense for your story. Every session is personally tailored, and galleries are delivered on Pixieset." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/inquire", className: "cta-story", children: "Tell Me Your Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-forest underline decoration-taupe decoration-1 underline-offset-8 transition-colors hover:text-emerald-deep hover:decoration-emerald-deep", children: "Read the FAQ" })
      ] })
    ] }) })
  ] });
}
export {
  Sessions as component
};
