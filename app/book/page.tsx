import { BookingWizard } from "../components/BookingWizard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function BookPage() {
  return <main className="inner-page booking-page"><SiteHeader dark /><BookingWizard /><SiteFooter /></main>;
}
