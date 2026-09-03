import { T as jsxRuntimeExports } from "../server.js";
function BotanicalDivider({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex items-center justify-center gap-4 ${className}`,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hairline w-16 sm:w-24" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            width: "120",
            height: "26",
            viewBox: "0 0 120 26",
            fill: "none",
            className: "botanical-draw",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: "botanical-line",
                  d: "M60 22 C58 14, 62 10, 60 3",
                  strokeWidth: "1.1",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: "botanical-line",
                  d: "M60 15 C48 13, 42 15, 37 11",
                  strokeWidth: "1",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: "botanical-line",
                  d: "M60 15 C72 13, 78 15, 83 11",
                  strokeWidth: "1",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: "botanical-line",
                  d: "M60 9 C50 7, 45 8, 41 5",
                  strokeWidth: "1",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  className: "botanical-line",
                  d: "M60 9 C70 7, 75 8, 79 5",
                  strokeWidth: "1",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "botanical-line flower", cx: "34", cy: "11", r: "2.1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "botanical-line flower", cx: "86", cy: "11", r: "2.1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { className: "botanical-line flower", cx: "60", cy: "2.6", r: "1.7" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hairline w-16 sm:w-24" })
      ]
    }
  );
}
export {
  BotanicalDivider as B
};
