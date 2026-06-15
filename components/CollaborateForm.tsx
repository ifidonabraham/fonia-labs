"use client";

import { useState } from "react";
import { companies } from "../data/companies";

const CONTACT_EMAIL = "ifidonabraham249@gmail.com";

const collaborationTypes = [
  "Test product",
  "Partner",
  "Build with FonTech",
  "Contribute skills",
  "Invest / support",
  "Suggest idea",
  "Other"
];

export function CollaborateForm() {
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
      `Interested company: ${get("company")}`,
      `Collaboration type: ${get("type")}`,
      "",
      "Message:",
      get("message")
    ].join("\n");

    const subject = `Collaboration — ${get("type")} (${get("company")})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="c-name">Full name <span className="req">*</span></label>
          <input id="c-name" name="name" required placeholder="Your full name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email <span className="req">*</span></label>
          <input id="c-email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="field">
          <label htmlFor="c-phone">Phone</label>
          <input id="c-phone" name="phone" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="c-org">Organization</label>
          <input id="c-org" name="organization" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="c-company">Interested company</label>
          <select id="c-company" name="company" defaultValue="Fonia Labs">
            <option>Fonia Labs</option>
            {companies.map((company) => (
              <option key={company.slug}>{company.name}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="c-type">Collaboration type <span className="req">*</span></label>
          <select id="c-type" name="type" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {collaborationTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="c-message">Message <span className="req">*</span></label>
          <textarea id="c-message" name="message" required placeholder="Tell us how you'd like to collaborate." />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">
          Send Collaboration Request
        </button>
        {sent ? (
          <span className="form-success">
            Your email app should now open with your request ready to send.
          </span>
        ) : (
          <p className="form-note">Submitting opens your email app addressed to Fonia Labs.</p>
        )}
      </div>
    </form>
  );
}
