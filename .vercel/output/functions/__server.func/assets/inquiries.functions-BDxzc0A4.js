import { a3 as TSS_SERVER_FUNCTION, a4 as createServerFn } from "../server.js";
import { o as object, s as string } from "./schemas-B3fhYpPd.js";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
function bindings() {
  return process.env;
}
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
const LEAD_EMAIL = process.env.DESTINATION_EMAIL ?? "handhphoto26@gmail.com";
async function sendLeadEmail(data) {
  try {
    const fields = {
      "Session type": data.sessionType,
      Name: data.name,
      Email: data.email,
      Phone: data.phone ?? "",
      "Preferred contact method": data.contactMethod ?? "",
      "Ideal timeframe": data.timeframe ?? "",
      Location: data.location ?? "",
      "Who will be photographed": data.subjects ?? "",
      "What do you want to remember": data.captureHopes ?? "",
      "Meaningful this season": data.specialMeaning ?? "",
      "How did you hear about us": data.heardFrom ?? "",
      Extras: data.extras ?? ""
    };
    const response = await fetch("https://formsubmit.co/ajax/" + LEAD_EMAIL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        subject: `New inquiry: ${data.sessionType || "H&H Photography"} — ${data.name}`,
        _template: "table",
        _captcha: "false",
        ...fields
      })
    });
    return response.ok;
  } catch {
    return false;
  }
}
const submitInquiry_createServerFn_handler = createServerRpc({
  id: "ddba39e709c8ba2549becfe54be50cbd672dd1cfc4f1f6175196a199dfe661bd",
  name: "submitInquiry",
  filename: "src/lib/api/inquiries.functions.ts"
}, (opts) => submitInquiry.__executeServer(opts));
const submitInquiry = createServerFn({
  method: "POST"
}).validator((raw) => inquirySchema.parse(raw)).handler(submitInquiry_createServerFn_handler, async ({
  data
}) => {
  const db = bindings().DB;
  if (db) {
    try {
      await db.prepare(`INSERT INTO inquiries
               (session_type, name, email, phone, contact_method, timeframe,
                location, subjects, capture_hopes, special_meaning, heard_from, extras)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(data.sessionType, data.name, data.email, data.phone ?? "", data.contactMethod ?? "", data.timeframe ?? "", data.location ?? "", data.subjects ?? "", data.captureHopes ?? "", data.specialMeaning ?? "", data.heardFrom ?? "", data.extras ?? "").run();
      return {
        ok: true
      };
    } catch (error) {
      console.error("inquiry insert failed", error);
    }
  }
  const delivered = await sendLeadEmail(data);
  if (delivered) {
    return {
      ok: true
    };
  }
  return {
    ok: false,
    message: "Something went wrong sending your story. Please try again, or email Emily directly at handhphoto26@gmail.com."
  };
});
export {
  submitInquiry_createServerFn_handler
};
