"use client";
import { useState } from "react";
import { submitInquiry, type InquiryPayload } from "../../lib/api/inquiries.functions";

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
  "Something Else",
];

type ExtraFields = {
  [key: string]: string;
};

/* Warm, adaptive inquiry form. The first question shapes the rest. */
export function InquiryForm({ initialType }: { initialType?: string }) {
  const [sessionType, setSessionType] = useState(
    initialType && SESSION_OPTIONS.includes(initialType) ? initialType : "",
  );
  const [extras, setExtras] = useState<ExtraFields>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const setExtra = (key: string, value: string) =>
    setExtras((prev) => ({ ...prev, [key]: value }));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    const form = event.currentTarget;
    const fd = new FormData(form);

    const payload: InquiryPayload = {
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
      extras: JSON.stringify(extras),
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
        "Something went wrong sending your story. Please try again, or email Emily directly.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="border border-emerald-deep/25 bg-parchment/60 px-8 py-14 text-center"
      >
        <p className="font-display text-3xl text-emerald-deep">Thank you.</p>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-charcoal">
          Your story has been received. Emily will be in touch soon to plan
          something beautiful together.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-9">
      <fieldset>
        <legend className="field-label">What are we creating together?</legend>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SESSION_OPTIONS.map((option) => (
            <label
              key={option}
              className={`cursor-pointer border px-4 py-3 text-sm transition-colors duration-200 ${
                sessionType === option
                  ? "border-emerald-deep bg-emerald-deep text-ivory"
                  : "border-taupe bg-ivory text-charcoal hover:border-emerald-deep/60"
              }`}
            >
              <input
                type="radio"
                name="sessionType"
                value={option}
                checked={sessionType === option}
                onChange={() => setSessionType(option)}
                required
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      {sessionType === "Family" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="familyCount">Number of family members</label>
            <input id="familyCount" className="field-input" type="text" autoComplete="off"
              onChange={(e) => setExtra("familyCount", e.target.value)} placeholder="e.g. Mom, dad, kids" />
          </div>
          <div>
            <label className="field-label" htmlFor="childrenAges">Children's ages</label>
            <input id="childrenAges" className="field-input" type="text" autoComplete="off"
              onChange={(e) => setExtra("childrenAges", e.target.value)} placeholder="e.g. 1, 4, and 8" />
          </div>
        </div>
      )}

      {sessionType === "Senior" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="field-label" htmlFor="senSchool">School</label>
            <input id="senSchool" className="field-input" type="text" onChange={(e) => setExtra("school", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="senYear">Graduation year</label>
            <input id="senYear" className="field-input" type="text" inputMode="numeric" onChange={(e) => setExtra("gradYear", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="senInterests">Interests</label>
            <input id="senInterests" className="field-input" type="text" onChange={(e) => setExtra("interests", e.target.value)} placeholder="What do you love?" />
          </div>
          <div>
            <label className="field-label" htmlFor="senVibe">Style / vibe</label>
            <input id="senVibe" className="field-input" type="text" onChange={(e) => setExtra("vibe", e.target.value)} placeholder="Your vibe" />
          </div>
        </div>
      )}

      {sessionType === "Branding" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="bizName">Business name</label>
            <input id="bizName" className="field-input" type="text" onChange={(e) => setExtra("businessName", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="bizLinks">Website / social links</label>
            <input id="bizLinks" className="field-input" type="text" onChange={(e) => setExtra("website", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="bizUse">How will the images be used?</label>
            <input id="bizUse" className="field-input" type="text" onChange={(e) => setExtra("imageUse", e.target.value)} placeholder="Website, social, ads" />
          </div>
          <div>
            <label className="field-label" htmlFor="bizProducts">Products / services</label>
            <input id="bizProducts" className="field-input" type="text" onChange={(e) => setExtra("products", e.target.value)} />
          </div>
        </div>
      )}

      {sessionType === "Event" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <label className="field-label" htmlFor="evDate">Date</label>
            <input id="evDate" className="field-input" type="text" onChange={(e) => setExtra("date", e.target.value)} placeholder="e.g. June 2026" />
          </div>
          <div>
            <label className="field-label" htmlFor="evVenue">Venue</label>
            <input id="evVenue" className="field-input" type="text" onChange={(e) => setExtra("venue", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="evGuests">Approximate guest count</label>
            <input id="evGuests" className="field-input" type="text" onChange={(e) => setExtra("guestCount", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="evType">Type of event</label>
            <input id="evType" className="field-input" type="text" onChange={(e) => setExtra("eventType", e.target.value)} />
          </div>
          <div>
            <label className="field-label" htmlFor="evCoverage">Coverage needed</label>
            <input id="evCoverage" className="field-input" type="text" onChange={(e) => setExtra("coverage", e.target.value)} />
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">Your name</label>
          <input id="name" name="name" className="field-input" type="text" required autoComplete="name" />
        </div>
        <div>
          <label className="field-label" htmlFor="email">Email</label>
          <input id="email" name="email" className="field-input" type="email" required autoComplete="email" />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" className="field-input" type="tel" autoComplete="tel" />
        </div>
        <div>
          <label className="field-label" htmlFor="contactMethod">Preferred contact method</label>
          <select id="contactMethod" name="contactMethod" className="field-input" defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Text</option>
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="timeframe">Ideal timeframe</label>
          <input id="timeframe" name="timeframe" className="field-input" type="text" placeholder="e.g. This June" />
        </div>
        <div>
          <label className="field-label" htmlFor="location">Location</label>
          <input id="location" name="location" className="field-input" type="text" placeholder="Southern Indiana or your spot" />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="subjects">Who will be photographed?</label>
        <input id="subjects" name="subjects" className="field-input" type="text" placeholder="e.g. Our family of five" />
      </div>

      <div>
        <label className="field-label" htmlFor="hopes">What are you hoping these photographs capture?</label>
        <textarea id="hopes" name="captureHopes" className="field-input" placeholder="The feeling, the moment, the season..." />
      </div>

      <div>
        <label className="field-label" htmlFor="meaning">
          Anything especially meaningful about this season of life?
        </label>
        <textarea id="meaning" name="specialMeaning" className="field-input" placeholder="This is the part Emily loves to hear." />
      </div>

      <div className="sm:max-w-md">
        <label className="field-label" htmlFor="heardFrom">How did you hear about Heart &amp; Homestead?</label>
        <input id="heardFrom" name="heardFrom" className="field-input" type="text" />
      </div>

      {status === "error" && (
        <p role="alert" className="border border-emerald-deep/30 bg-parchment/70 px-4 py-3 text-sm text-emerald-deep">
          {errorMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          className="cta-submit sm:w-auto"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending your story..." : "Send My Story"}
        </button>
      </div>
    </form>
  );
}