"use client";

import { useState } from "react";

const CONTACT_EMAIL = "ifidonabraham249@gmail.com";

const interestOptions = [
  "I want to build with FonTech",
  "I want to test a product",
  "I want to partner with a company",
  "I want to collaborate",
  "I want to invest or support",
  "I want to suggest an idea",
  "I want general information",
  "Other"
];

const companyOptions = [
  "Fonia Labs",
  "FonTech",
  "OmegaEstate",
  "SMaid",
  "Dokito",
  "Seek",
  "ContractFeed",
  "StormBridge",
  "ComplyIQ",
  "UnilagFoodSpots",
  "Deadline Dungeon",
  "SystemGuardian",
  "Not sure yet"
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
      `Interested in: ${get("interest")}`,
      `Company of interest: ${get("company")}`,
      "",
      "Message:",
      get("message")
    ].join("\n");

    const subject = `Contact — ${get("interest")} (${get("company")})`;
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
          <label htmlFor="ct-org">Organization or company name</label>
          <input id="ct-org" name="organization" placeholder="Optional" />
        </div>
        <div className="field">
          <label htmlFor="ct-interest">What are you interested in? <span className="req">*</span></label>
          <select id="ct-interest" name="interest" required defaultValue="">
            <option value="" disabled>Select an option</option>
            {interestOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="ct-company">Which company are you contacting us about?</label>
          <select id="ct-company" name="company" defaultValue="Fonia Labs">
            {companyOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="ct-message">Message <span className="req">*</span></label>
          <textarea
            id="ct-message"
            name="message"
            required
            placeholder="Tell us who you are, what you are interested in, and how you would like to connect with Fonia Labs."
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">
          Send Message <span className="btn-arrow">→</span>
        </button>
        {sent ? (
          <span className="form-success">
            Your email app should now open with your message ready to send to Fonia Labs.
          </span>
        ) : (
          <p className="form-note">Submitting opens your email app addressed to Fonia Labs.</p>
        )}
      </div>
    </form>
  );
}
