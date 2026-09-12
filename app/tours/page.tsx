import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { TourCard } from "../components/TourCard";
import { tours } from "../data/tours";

export default function ToursPage() {
  return <main className="inner-page"><SiteHeader dark /><section className="inner-hero"><small>THE COMPLETE COLLECTION</small><h1>Choose your<br /><em>way into history.</em></h1><p>All 24 Ephesus options from the requested collection are here, together with our five original specialty experiences. Each has clear timing, inclusions and a three-step reservation path.</p></section><section className="all-tours-grid">{tours.map((tour) => <TourCard tour={tour} key={tour.slug} />)}</section><SiteFooter /></main>;
}
