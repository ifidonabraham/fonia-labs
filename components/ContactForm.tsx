"use client";

import { useState } from "react";
import { companies } from "../data/companies";

const CONTACT_EMAIL = "ifidonabraham249@gmail.com";

const reasons = [
  "General inquiry",
  "Build with FonTech",
  "Partnership",
  "Product testing",
  "Product feedback",
  "Investment / strategic support",
  "Media / speaking",
  "Other"
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => (data.get(key) as string) || "—";

    const body = [
      `Full name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Organization: ${get("organization")}`,
      `Reason for contact: ${get("reason")}`,
      `Company / product of interest: ${get("company")}`,
      `Links / attachments: ${get("links")}`,
      "",
      "Message:",
      get("message")
    ].join("\n");

    const subject = `Contact — ${get("reason")} (${get("company")})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="ct-name">Full name <span className="req">*</span></label>
          <input id="ct-name" name="name" required placeholder="Your full name" />
        </div>
        <div className="field">
          <label htmlFor="ct-email">Email address <span className="req">*</span></label>
          <input id="ct-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="field">
          <label htmlFor="ct-phone">Phone number</label>
          <input id="ct-phone" name="phone" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="ct-org">Organization / company</label>
          <input id="ct-org" name="organization" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="ct-reason">Reason for contact <span className="req">*</span></label>
          <select id="ct-reason" name="reason" required defaultValue="">
            <option value="" disabled>
              Select a reason
            </option>
            {reasons.map((reason) => (
              <option key={reason}>{reason}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="ct-company">Company / product of interest</label>
          <select id="ct-company" name="company" defaultValue="Not sure">
            <option>Fonia Labs</option>
            {companies.map((company) => (
              <option key={company.slug}>{company.name}</option>
            ))}
            <option>Not sure</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="ct-links">Links / attachments</label>
          <input id="ct-links" name="links" placeholder="Portfolio, website, or document links (optional)" />
        </div>
        <div className="field full">
          <label htmlFor="ct-message">Message <span className="req">*</span></label>
          <textarea id="ct-message" name="message" required placeholder="How can Fonia Labs help?" />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">
          Send Message
        </button>
        {sent ? (
          <span className="form-success">
            Your email app should now open with your message ready to send.
          </span>
        ) : (
          <p className="form-note">Submitting opens your email app addressed to Fonia Labs.</p>
        )}
      </div>
    </form>
  );
}
