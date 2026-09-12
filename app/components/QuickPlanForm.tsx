"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";

export function QuickPlanForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const query = new URLSearchParams({
      date: String(fields.get("date") ?? ""),
      guests: String(fields.get("guests") ?? "2"),
      ship: String(fields.get("ship") ?? ""),
    });
    window.location.assign(`/book?${query.toString()}`);
  }

  return (
    <form className="quick-plan" onSubmit={handleSubmit}>
      <header>
        <small>BOOK IN 3 EASY STEPS</small>
        <h2>Check your date.</h2>
        <p>No card · no deposit</p>
      </header>
      <div className="quick-fields">
        <label>
          <span>Cruise ship</span>
          <input name="ship" placeholder="Celebrity Ascent" required />
        </label>
        <label>
          <span>Date in port</span>
          <input name="date" type="date" required />
        </label>
        <label>
          <span>Guests</span>
          <select name="guests" defaultValue="2">
            {[1, 2, 3, 4, 5, 6, "7+"].map((count) => (
              <option value={count} key={count}>{count}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">See tours & reserve <ArrowRight /></button>
    </form>
  );
}
