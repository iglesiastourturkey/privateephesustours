/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import type { Tour } from "../data/tours";

export function TourCard({ tour, featured = false }: { tour: Tour; featured?: boolean }) {
  return (
    <article className={`tour-card ${featured ? "tour-card-featured" : ""}`}>
      <a className="tour-card-detail-link" href={`/tours/${tour.slug}`} aria-label={`View ${tour.shortTitle}`}>
        <div className="tour-card-image"><img src={tour.image} alt={tour.shortTitle} /><span>{tour.number}</span></div>
        <div className="tour-card-body"><small>{tour.badge}</small><h3>{tour.shortTitle}</h3><p>{tour.summary}</p><div><span><Clock3 /> {tour.duration}</span><span><MapPin /> {tour.origin}</span></div><b>From ${tour.price} per group <ArrowUpRight /></b></div>
      </a>
      <a className="tour-card-book" href={`/book?tour=${tour.slug}`}>Check availability <ArrowUpRight /></a>
    </article>
  );
}
