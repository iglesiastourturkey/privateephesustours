/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CalendarCheck2, Check, Clock3, Languages, MapPin, MapPinned, Smartphone, UsersRound, X } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { TourCard } from "../../components/TourCard";
import { getTour, tours, tourSlugs } from "../../data/tours";

export function generateStaticParams() {
  return tourSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const tour = getTour((await params).slug);
  if (!tour) return {};
  return { title: `${tour.title} | Private Ephesus Tours`, description: tour.summary };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const tour = getTour((await params).slug);
  if (!tour) notFound();
  const bookingUrl = `/book?tour=${tour.slug}`;
  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);

  return <main className="inner-page tour-detail"><SiteHeader dark />
    <section className="tour-detail-hero">
      <div className="tour-detail-copy">
        <a href="/tours"><ArrowLeft /> All tours</a>
        <small>{tour.number} / {tour.badge}</small>
        <h1>{tour.title}</h1>
        <p>{tour.summary}</p>
        <div><span><Clock3 /> {tour.duration}</span><span><MapPin /> {tour.origin}</span></div>
        <a className="detail-book-button" href={bookingUrl}>Check availability <ArrowRight /></a>
      </div>
      <figure><img src={tour.image} alt={tour.shortTitle} /><figcaption>Private, flexible and timed around you</figcaption></figure>
    </section>

    <section className="detail-quick-facts" aria-label="Tour quick facts">
      <div><Clock3 /><span><small>Duration</small><b>{tour.duration}</b></span></div>
      <div><MapPinned /><span><small>Pickup</small><b>Port or hotel offered</b></span></div>
      <div><UsersRound /><span><small>Tour type</small><b>{tour.groupType}</b></span></div>
      <div><Smartphone /><span><small>Confirmation</small><b>Mobile confirmation</b></span></div>
      <div><Languages /><span><small>Language</small><b>{tour.language}</b></span></div>
    </section>

    <section className="tour-overview detail-content-section">
      <header><small>OVERVIEW</small><h2>Everything you need<br /><em>before you choose.</em></h2></header>
      <div className="tour-overview-copy">
        {tour.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <ul>{tour.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul>
      </div>
    </section>

    <section className="tour-facts detail-inclusions">
      <article><small>WHAT&apos;S INCLUDED</small><ul>{tour.included.map((item) => <li key={item}><Check />{item}</li>)}</ul></article>
      <article><small>NOT INCLUDED</small><ul>{tour.notIncluded.map((item) => <li key={item}><X />{item}</li>)}</ul></article>
      <article><small>TICKETS & CONFIRMATION</small><ul><li><CalendarCheck2 />{tour.ticketing}</li><li><Check />No prepayment required</li><li><Check />Availability confirmed personally</li></ul></article>
    </section>

    <section className="meeting-section detail-content-section">
      <header><small>MEETING & PICKUP</small><h2>Easy to find.<br /><em>Timed for your ship.</em></h2></header>
      <div className="meeting-card"><MapPinned /><div><b>{tour.origin}</b><p>{tour.pickupDetails}</p><span>Final instructions arrive with your written confirmation.</span></div></div>
    </section>

    <section className="itinerary-section">
      <div className="itinerary-heading"><small>YOUR ITINERARY</small><h2>A clear route,<br /><em>flexible on the day.</em></h2><p>The order may be adjusted to avoid crowds and fit opening hours without removing confirmed inclusions.</p></div>
      <ol className="itinerary-list">
        {tour.itinerary.map((stop, index) => <li key={`${stop.name}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{stop.name}</h3><p>{stop.description}</p><footer><b><Clock3 />{stop.duration}</b><b><CalendarCheck2 />{stop.admission}</b></footer></div></li>)}
      </ol>
    </section>

    <section className="additional-section detail-content-section">
      <header><small>ADDITIONAL INFORMATION</small><h2>Good to know.</h2></header>
      <div><ul>{tour.additionalInfo.map((item) => <li key={item}><Check />{item}</li>)}</ul><aside><small>CANCELLATION POLICY</small><h3>Stay flexible.</h3><p>{tour.cancellationPolicy}</p></aside></div>
    </section>

    <section className="price-section"><div><small>TRANSPARENT GROUP PRICING</small><h2>Clear options.<br /><em>One total price.</em></h2><p>Prices are for the selected tour format and group size. No prepayment; pay at the end by cash or card.</p></div><div className="price-table">{tour.prices.map(([group, price]) => <div key={group}><span>{group}</span><b>{price}</b></div>)}<a href={bookingUrl}>Reserve in 3 steps <ArrowRight /></a></div></section>

    <section className="related-section"><small>YOU MAY ALSO LIKE</small><h2>Continue exploring.</h2><div>{related.map((item) => <TourCard tour={item} key={item.slug} />)}</div></section>
    <SiteFooter />
  </main>;
}
