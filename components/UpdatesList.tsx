"use client";

import { useState } from "react";
import type { Update } from "../data/updates";
import { companyFilters } from "../data/updates";

export function UpdatesList({ updates }: { updates: Update[] }) {
  const [active, setActive] = useState("All Updates");

  const filtered =
    active === "All Updates"
      ? updates
      : updates.filter((u) => u.company === active);

  return (
    <div>
      <div className="chips mt-sm mb-lg">
        {companyFilters.map((filter) => (
          <button
            key={filter}
            className={`chip${active === filter ? " chip-active" : ""}`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state">No updates for this company yet. Check back soon.</p>
      ) : (
        <div className="updates-grid">
          {filtered.map((update) => (
            <article className="update-card" key={update.title}>
              <div className="uc-meta">
                <span className="uc-cat">{update.category}</span>
                <span className="uc-sep">·</span>
                <span className="uc-company">{update.company}</span>
                <span className="uc-sep">·</span>
                <span className="uc-date">{update.date}</span>
              </div>
              <h3 className="uc-title">{update.title}</h3>
              <p className="uc-text">{update.text}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
