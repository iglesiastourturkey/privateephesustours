"use client";

import { ArrowLeft, ArrowRight, Check, CheckCircle2, Clock3, MapPin, ShieldCheck, Users } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { WHATSAPP_PHONE } from "../content";
import { tours } from "../data/tours";

type BookingDetails = {
  date: string;
  guests: string;
  ship: string;
  name: string;
  email: string;
};

const initialDetails: BookingDetails = {
  date: "",
  guests: "2",
  ship: "",
  name: "",
  email: "",
};

function readableDate(value: string) {
  if (!value) return "Not selected";
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [selectedSlug, setSelectedSlug] = useState(tours[0].slug);
  const [details, setDetails] = useState(initialDetails);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const requestedTour = query.get("tour");
    if (requestedTour && tours.some(({ slug }) => slug === requestedTour)) setSelectedSlug(requestedTour);
    setDetails((current) => ({
      ...current,
      date: query.get("date") ?? current.date,
      guests: query.get("guests") ?? current.guests,
      ship: query.get("ship") ?? current.ship,
    }));
  }, []);

  const selectedTour = useMemo(
    () => tours.find(({ slug }) => slug === selectedSlug) ?? tours[0],
    [selectedSlug],
  );

  function updateDetail(field: keyof BookingDetails, value: string) {
    setDetails((current) => ({ ...current, [field]: value }));
  }

  function sendReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello! I'd like to reserve a private tour.",
      "",
      `Tour: ${selectedTour.title}`,
      `Date: ${readableDate(details.date)}`,
      `Guests: ${details.guests}`,
      `Cruise ship / hotel: ${details.ship}`,
      `Name: ${details.name}`,
      `Email: ${details.email}`,
      "",
      "Please confirm availability and the total group price.",
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="booking-shell" aria-labelledby="booking-title">
      <header className="booking-heading">
        <div>
          <small>FAST, SECURE & NO PREPAYMENT</small>
          <h1 id="booking-title">Reserve in three simple steps.</h1>
          <p>Choose your experience, add your visit details and send the request. We confirm availability personally.</p>
        </div>
        <div className="booking-promise"><ShieldCheck /><span><b>Ship-safe promise</b>Free cancellation if your ship cannot dock</span></div>
      </header>

      <ol className="booking-progress" aria-label="Booking progress">
        {["Choose a tour", "Date & guests", "Your details"].map((label, index) => {
          const number = index + 1;
          return <li className={number === step ? "active" : number < step ? "complete" : ""} key={label}><span>{number < step ? <Check /> : number}</span><b>{label}</b></li>;
        })}
      </ol>

      <div className="booking-stage">
        {step === 1 && <div className="booking-step" aria-labelledby="step-one-title">
          <div className="booking-step-title"><small>STEP 1 OF 3</small><h2 id="step-one-title">Which experience feels right?</h2><p>You can still adjust the route with your guide.</p></div>
          <div className="booking-tour-options">
            {tours.map((tour) => <label className={selectedSlug === tour.slug ? "selected" : ""} key={tour.slug}>
              <input type="radio" name="tour" value={tour.slug} checked={selectedSlug === tour.slug} onChange={() => setSelectedSlug(tour.slug)} />
              <img src={tour.image} alt="" />
              <span><small>{tour.badge}</small><b>{tour.shortTitle}</b><em><Clock3 /> {tour.duration} <i>·</i> from ${tour.price} per group</em></span>
              <CheckCircle2 className="option-check" />
            </label>)}
          </div>
          <div className="booking-actions booking-actions-right"><button className="booking-primary" type="button" onClick={() => setStep(2)}>Continue with {selectedTour.shortTitle} <ArrowRight /></button></div>
        </div>}

        {step === 2 && <div className="booking-step booking-form-step" aria-labelledby="step-two-title">
          <div className="booking-step-title"><small>STEP 2 OF 3</small><h2 id="step-two-title">When are you visiting?</h2><p>We use these details to protect your return time.</p></div>
          <div className="booking-fields">
            <label><span>Date in port *</span><input type="date" value={details.date} onChange={(event) => updateDetail("date", event.target.value)} required /></label>
            <label><span>Number of guests *</span><select value={details.guests} onChange={(event) => updateDetail("guests", event.target.value)}>{[1,2,3,4,5,6,7,8,9,10,11,12,"13–15","16+"].map((count) => <option value={count} key={count}>{count} {count === 1 ? "guest" : "guests"}</option>)}</select></label>
            <label className="wide"><span>Cruise ship or hotel *</span><input value={details.ship} onChange={(event) => updateDetail("ship", event.target.value)} placeholder="e.g. Celebrity Ascent or hotel name" required /></label>
          </div>
          <div className="booking-tip"><MapPin /><p><b>Meeting is easy.</b> Your guide waits at the port exit with a sign showing your name.</p></div>
          <div className="booking-actions"><button className="booking-back" type="button" onClick={() => setStep(1)}><ArrowLeft /> Back</button><button className="booking-primary" type="button" disabled={!details.date || !details.ship.trim()} onClick={() => setStep(3)}>Continue <ArrowRight /></button></div>
        </div>}

        {step === 3 && <form className="booking-step booking-form-step" aria-labelledby="step-three-title" onSubmit={sendReservation}>
          <div className="booking-step-title"><small>STEP 3 OF 3</small><h2 id="step-three-title">Where should we confirm?</h2><p>No card details and no deposit are required.</p></div>
          <div className="booking-summary">
            <img src={selectedTour.image} alt="" />
            <div><small>YOUR SELECTION</small><h3>{selectedTour.shortTitle}</h3><p>{readableDate(details.date)} · {details.guests} guests</p><p>{details.ship}</p><button type="button" onClick={() => setStep(1)}>Change selection</button></div>
          </div>
          <div className="booking-fields">
            <label><span>Full name *</span><input value={details.name} onChange={(event) => updateDetail("name", event.target.value)} autoComplete="name" placeholder="Jane Smith" required /></label>
            <label><span>Email address *</span><input type="email" value={details.email} onChange={(event) => updateDetail("email", event.target.value)} autoComplete="email" placeholder="jane@example.com" required /></label>
          </div>
          <label className="booking-consent"><input type="checkbox" required /><span>I agree to be contacted about this reservation request.</span></label>
          <div className="booking-actions"><button className="booking-back" type="button" onClick={() => setStep(2)}><ArrowLeft /> Back</button><button className="booking-primary" type="submit">Send reservation request <ArrowRight /></button></div>
          <p className="booking-fine-print"><Users /> You are requesting a private tour for your group only. We normally reply within one hour during local business hours.</p>
        </form>}
      </div>
    </section>
  );
}
