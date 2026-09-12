/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import { ArrowLeft, ArrowRight, Check, Clock3, MapPin, X } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { TourCard } from "../../components/TourCard";
import { getTour, tours } from "../../data/tours";

export function generateStaticParams() { return tours.map(({ slug }) => ({ slug })); }

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const bookingUrl = `/book?tour=${tour.slug}`;
  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);

  return <main className="inner-page tour-detail"><SiteHeader dark />
    <section className="tour-detail-hero"><div className="tour-detail-copy"><a href="/tours"><ArrowLeft /> All tours</a><small>{tour.number} / {tour.badge}</small><h1>{tour.title}</h1><p>{tour.summary}</p><div><span><Clock3 /> {tour.duration}</span><span><MapPin /> {tour.origin}</span></div><a className="detail-book-button" href={bookingUrl}>Check availability <ArrowRight /></a></div><figure><img src={tour.image} alt={tour.shortTitle} /><figcaption>Private, flexible and timed around you</figcaption></figure></section>
    <section className="tour-story"><div><small>ABOUT THIS EXPERIENCE</small><h2>A private day,<br /><em>clearly considered.</em></h2></div><div>{tour.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="tour-facts"><article><small>TOUR HIGHLIGHTS</small><ul>{tour.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul></article><article><small>WHAT’S INCLUDED</small><ul>{tour.included.map((item) => <li key={item}><Check />{item}</li>)}</ul></article><article><small>NOT INCLUDED</small><ul>{tour.notIncluded.map((item) => <li key={item}><X />{item}</li>)}</ul></article></section>
    <section className="price-section"><div><small>TRANSPARENT GROUP PRICING</small><h2>One private vehicle.<br /><em>One total price.</em></h2><p>Prices are for your whole group—not per person. No prepayment; pay at the end by cash or card.</p></div><div className="price-table">{tour.prices.map(([group, price]) => <div key={group}><span>{group}</span><b>{price}</b></div>)}<a href={bookingUrl}>Reserve in 3 steps <ArrowRight /></a></div></section>
    <section className="know-section"><small>KNOW BEFORE YOU GO</small><div><p>Wear comfortable shoes for the original marble streets. Bring a hat, sunscreen and water in summer.</p><p>The itinerary is flexible. Your pace, stops and ship schedule shape the final route.</p><p>Free cancellation applies if your ship cannot dock. Entrance tickets can be arranged in advance at official prices.</p></div></section>
    <section className="related-section"><small>YOU MAY ALSO LIKE</small><h2>Continue exploring.</h2><div>{related.map((item) => <TourCard tour={item} key={item.slug} />)}</div></section>
    <SiteFooter />
  </main>;
}
