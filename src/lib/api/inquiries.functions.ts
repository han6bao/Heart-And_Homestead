/* Server function for the inquiry form.
   Vercel port: no Cloudflare D1 here, so leads are delivered by email through
   FormSubmit (no API key required — the owner activates once by clicking the
   confirmation email sent on the first submission). If the email bridge is
   unreachable, the form replies with a graceful message instead of failing. */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { bindings } from "../bindings.server";

export const inquirySchema = z.object({
  sessionType: z.string().trim().max(160, "That selection is too long"),
  name: z.string().trim().min(1, "Please share your name").max(120),
  email: z.string().trim().email("Please share a valid email").max(320),
  phone: z.string().trim().max(60).optional().default(""),
  contactMethod: z.string().trim().max(80).optional().default(""),
  timeframe: z.string().trim().max(400).optional().default(""),
  location: z.string().trim().max(400).optional().default(""),
  subjects: z.string().trim().max(400).optional().default(""),
  captureHopes: z.string().trim().max(2000).optional().default(""),
  specialMeaning: z.string().trim().max(2000).optional().default(""),
  heardFrom: z.string().trim().max(300).optional().default(""),
  extras: z.string().trim().max(3000).optional().default(""),
});

export type InquiryPayload = z.infer<typeof inquirySchema>;

/* Destination inbox for leads on this port (Emily's address from the site).
   Override with DESTINATION_EMAIL env var if it ever changes. */
const LEAD_EMAIL = process.env.DESTINATION_EMAIL ?? "handhphoto26@gmail.com";

async function sendLeadEmail(data: InquiryPayload): Promise<boolean> {
  try {
    const fields: Record<string, string> = {
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
      Extras: data.extras ?? "",
    };
    const response = await fetch("https://formsubmit.co/ajax/" + LEAD_EMAIL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        subject: `New inquiry: ${data.sessionType || "H&H Photography"} — ${data.name}`,
        _template: "table",
        _captcha: "false",
        ...fields,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((raw: unknown) => inquirySchema.parse(raw))
  .handler(async ({ data }) => {
    // Higgsfield host: keep the D1 insert path if a DB binding exists.
    const db = bindings().DB;
    if (db) {
      try {
        await db
          .prepare(
            `INSERT INTO inquiries
               (session_type, name, email, phone, contact_method, timeframe,
                location, subjects, capture_hopes, special_meaning, heard_from, extras)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          )
          .bind(
            data.sessionType,
            data.name,
            data.email,
            data.phone ?? "",
            data.contactMethod ?? "",
            data.timeframe ?? "",
            data.location ?? "",
            data.subjects ?? "",
            data.captureHopes ?? "",
            data.specialMeaning ?? "",
            data.heardFrom ?? "",
            data.extras ?? "",
          )
          .run();
        return { ok: true as const };
      } catch (error) {
        console.error("inquiry insert failed", error);
      }
    }

    // Vercel port: email the lead. Real lead capture, no database needed.
    const delivered = await sendLeadEmail(data);
    if (delivered) {
      return { ok: true as const };
    }
    return {
      ok: false as const,
      message:
        "Something went wrong sending your story. Please try again, or email Emily directly at handhphoto26@gmail.com.",
    };
  });