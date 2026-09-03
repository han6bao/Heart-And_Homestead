import { a3 as TSS_SERVER_FUNCTION, a5 as getServerFnById, a4 as createServerFn, M as reactExports, T as jsxRuntimeExports } from "../server.js";
import { R as Route, L as Link } from "./router-D5hWS-aS.js";
import { o as object, s as string } from "./schemas-B3fhYpPd.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const inquirySchema = object({
  sessionType: string().trim().max(160, "That selection is too long"),
  name: string().trim().min(1, "Please share your name").max(120),
  email: string().trim().email("Please share a valid email").max(320),
  phone: string().trim().max(60).optional().default(""),
  contactMethod: string().trim().max(80).optional().default(""),
  timeframe: string().trim().max(400).optional().default(""),
  location: string().trim().max(400).optional().default(""),
  subjects: string().trim().max(400).optional().default(""),
  captureHopes: string().trim().max(2e3).optional().default(""),
  specialMeaning: string().trim().max(2e3).optional().default(""),
  heardFrom: string().trim().max(300).optional().default(""),
  extras: string().trim().max(3e3).optional().default("")
});
const submitInquiry = createServerFn({
  method: "POST"
}).validator((raw) => inquirySchema.parse(raw)).handler(createSsrRpc("ddba39e709c8ba2549becfe54be50cbd672dd1cfc4f1f6175196a199dfe661bd"));
const SESSION_OPTIONS = [
  "Family",
  "Children",
  "Senior",
  "Maternity",
  "Couples / Engagement",
  "Branding",
  "Product Photography",
  "Event",
  "Creative Portrait",
  "Something Else"
];
function InquiryForm({ initialType }) {
  const [sessionType, setSessionType] = reactExports.useState(
    initialType && SESSION_OPTIONS.includes(initialType) ? initialType : ""
  );
  const [extras, setExtras] = reactExports.useState({});
  const [status, setStatus] = reactExports.useState("idle");
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const setExtra = (key, value) => setExtras((prev) => ({ ...prev, [key]: value }));
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const fd = new FormData(form);
    const payload = {
      sessionType,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      contactMethod: String(fd.get("contactMethod") ?? ""),
      timeframe: String(fd.get("timeframe") ?? ""),
      location: String(fd.get("location") ?? ""),
      subjects: String(fd.get("subjects") ?? ""),
      captureHopes: String(fd.get("captureHopes") ?? ""),
      specialMeaning: String(fd.get("specialMeaning") ?? ""),
      heardFrom: String(fd.get("heardFrom") ?? ""),
      extras: JSON.stringify(extras)
    };
    try {
      const result = await submitInquiry({ data: payload });
      if (result.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setErrorMessage(result.message);
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your story. Please try again, or email Emily directly."
      );
    }
  }
  if (status === "sent") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        role: "status",
        className: "border border-emerald-deep/25 bg-parchment/60 px-8 py-14 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-emerald-deep", children: "Thank you." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-md leading-relaxed text-charcoal", children: "Your story has been received. Emily will be in touch soon to plan something beautiful together." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: false, className: "space-y-9", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "field-label", children: "What are we creating together?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3", children: SESSION_OPTIONS.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: `cursor-pointer border px-4 py-3 text-sm transition-colors duration-200 ${sessionType === option ? "border-emerald-deep bg-emerald-deep text-ivory" : "border-taupe bg-ivory text-charcoal hover:border-emerald-deep/60"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                name: "sessionType",
                value: option,
                checked: sessionType === option,
                onChange: () => setSessionType(option),
                required: true,
                className: "sr-only"
              }
            ),
            option
          ]
        },
        option
      )) })
    ] }),
    sessionType === "Family" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "familyCount", children: "Number of family members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "familyCount",
            className: "field-input",
            type: "text",
            autoComplete: "off",
            onChange: (e) => setExtra("familyCount", e.target.value),
            placeholder: "e.g. Mom, dad, kids"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "childrenAges", children: "Children's ages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "childrenAges",
            className: "field-input",
            type: "text",
            autoComplete: "off",
            onChange: (e) => setExtra("childrenAges", e.target.value),
            placeholder: "e.g. 1, 4, and 8"
          }
        )
      ] })
    ] }),
    sessionType === "Senior" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "senSchool", children: "School" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "senSchool", className: "field-input", type: "text", onChange: (e) => setExtra("school", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "senYear", children: "Graduation year" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "senYear", className: "field-input", type: "text", inputMode: "numeric", onChange: (e) => setExtra("gradYear", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "senInterests", children: "Interests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "senInterests", className: "field-input", type: "text", onChange: (e) => setExtra("interests", e.target.value), placeholder: "What do you love?" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "senVibe", children: "Style / vibe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "senVibe", className: "field-input", type: "text", onChange: (e) => setExtra("vibe", e.target.value), placeholder: "Your vibe" })
      ] })
    ] }),
    sessionType === "Branding" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "bizName", children: "Business name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "bizName", className: "field-input", type: "text", onChange: (e) => setExtra("businessName", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "bizLinks", children: "Website / social links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "bizLinks", className: "field-input", type: "text", onChange: (e) => setExtra("website", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "bizUse", children: "How will the images be used?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "bizUse", className: "field-input", type: "text", onChange: (e) => setExtra("imageUse", e.target.value), placeholder: "Website, social, ads" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "bizProducts", children: "Products / services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "bizProducts", className: "field-input", type: "text", onChange: (e) => setExtra("products", e.target.value) })
      ] })
    ] }),
    sessionType === "Event" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "evDate", children: "Date" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "evDate", className: "field-input", type: "text", onChange: (e) => setExtra("date", e.target.value), placeholder: "e.g. June 2026" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "evVenue", children: "Venue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "evVenue", className: "field-input", type: "text", onChange: (e) => setExtra("venue", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "evGuests", children: "Approximate guest count" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "evGuests", className: "field-input", type: "text", onChange: (e) => setExtra("guestCount", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "evType", children: "Type of event" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "evType", className: "field-input", type: "text", onChange: (e) => setExtra("eventType", e.target.value) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "evCoverage", children: "Coverage needed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "evCoverage", className: "field-input", type: "text", onChange: (e) => setExtra("coverage", e.target.value) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "name", children: "Your name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", name: "name", className: "field-input", type: "text", required: true, autoComplete: "name" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", name: "email", className: "field-input", type: "email", required: true, autoComplete: "email" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "phone", children: "Phone (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", name: "phone", className: "field-input", type: "tel", autoComplete: "tel" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "contactMethod", children: "Preferred contact method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "contactMethod", name: "contactMethod", className: "field-input", defaultValue: "Email", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Text" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "timeframe", children: "Ideal timeframe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "timeframe", name: "timeframe", className: "field-input", type: "text", placeholder: "e.g. This June" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "location", children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "location", name: "location", className: "field-input", type: "text", placeholder: "Southern Indiana or your spot" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "subjects", children: "Who will be photographed?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "subjects", name: "subjects", className: "field-input", type: "text", placeholder: "e.g. Our family of five" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "hopes", children: "What are you hoping these photographs capture?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "hopes", name: "captureHopes", className: "field-input", placeholder: "The feeling, the moment, the season..." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "meaning", children: "Anything especially meaningful about this season of life?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "meaning", name: "specialMeaning", className: "field-input", placeholder: "This is the part Emily loves to hear." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "field-label", htmlFor: "heardFrom", children: "How did you hear about Heart & Homestead?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "heardFrom", name: "heardFrom", className: "field-input", type: "text" })
    ] }),
    status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { role: "alert", className: "border border-emerald-deep/30 bg-parchment/70 px-4 py-3 text-sm text-emerald-deep", children: errorMessage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        className: "cta-submit sm:w-auto",
        disabled: status === "sending",
        children: status === "sending" ? "Sending your story..." : "Send My Story"
      }
    ) })
  ] });
}
const NEXT_STEPS = [{
  name: "Emily replies",
  detail: "She reads every story personally and replies to plan something together."
}, {
  name: "You plan together",
  detail: "Session type, location, timing, and the feeling you want."
}, {
  name: "Make it official",
  detail: "Booking, contract, and retainer, then the real moments begin."
}];
function Inquire() {
  const {
    type
  } = Route.useSearch();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "page-hero is-dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/assets/logo-short.png", alt: "H&H Photography", width: 280, height: 210, loading: "lazy", className: "mx-auto w-44 object-contain sm:w-56" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 font-accent text-xl italic text-ivory/75 sm:text-2xl", children: "Every session begins with a conversation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mx-auto mt-3 max-w-3xl text-4xl leading-tight text-ivory sm:text-5xl lg:text-[3.4rem]", children: [
        "Tell me what you want to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-accent italic", children: "remember." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-14 lg:grid-cols-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl text-base leading-relaxed text-charcoal/85 sm:text-lg", children: "Share a little about who you are photographing and what you want these photographs to hold. There are no wrong answers, only your story." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InquiryForm, { initialType: type }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-taupe/60 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl text-emerald-deep", children: "What happens next" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 space-y-7", children: NEXT_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-[2.5rem_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xl italic text-sage", "aria-hidden": "true", children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg text-emerald-deep", children: step.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-charcoal/75", children: step.detail })
          ] })
        ] }, step.name)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-9 text-sm leading-relaxed text-charcoal/70", children: [
          "Prefer email? Reach Emily directly at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${"handhphoto26@gmail.com"}`, className: "font-medium text-emerald-deep underline decoration-taupe underline-offset-4 hover:decoration-emerald-deep", children: "handhphoto26@gmail.com" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm leading-relaxed text-charcoal/70", children: [
          "Browse the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "font-medium text-emerald-deep underline decoration-taupe underline-offset-4 hover:decoration-emerald-deep", children: "FAQ" }),
          " ",
          "for answers about timing, locations, and what to expect."
        ] })
      ] }) })
    ] }) }) })
  ] });
}
export {
  Inquire as component
};
