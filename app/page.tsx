/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, Star } from "lucide-react";
import { QuickPlanForm } from "./components/QuickPlanForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TourCard } from "./components/TourCard";
import { DEFAULT_WHATSAPP_URL, faqs, reviews } from "./content";
import { tours } from "./data/tours";

export default function Home() {
  return (
    <main>
      <section className="cinematic-hero" id="top">
        <img className="cinematic-photo" src="/images/ephesus-private-hero-v2.webp" alt="A licensed guide walking through Ephesus with private guests" />
        <div className="cinematic-wash" />
        <SiteHeader />
        <div className="hero-plaque">
          <p>Private journeys · Ephesus, Türkiye</p>
          <h1>Ephesus,<br /><em>revealed</em><br />personally.</h1>
          <div className="plaque-rule" />
          <span>Your guide. Your pace. Your ship’s schedule.</span>
          <a href="/book">Book in 3 easy steps <ArrowRight /></a>
        </div>
        <div className="route-signature"><span>Kusadasi Port</span><i /><b /><i /><span>Ephesus</span></div>
        <div className="hero-chapter"><small>01 — THE ARRIVAL</small><strong>Port <ArrowRight /> Ancient city</strong></div>
        <div className="next-glimpse">
          <img src="/images/ephesus-celsus.webp" alt="Library of Celsus details" />
          <QuickPlanForm />
          <img src="/images/ephesus-day.png" alt="The marble street of Ephesus" />
        </div>
      </section>

      <section className="proof-line">
        <div><Star fill="currentColor" /><strong>5.0</strong><span>Traveler rating</span></div>
        <div><strong>16+</strong><span>Years of local expertise</span></div>
        <div><strong>100%</strong><span>Private · flexible pace</span></div>
        <div><strong>10772</strong><span>TÜRSAB licensed agency</span></div>
      </section>

      <section className="story-chapter" id="journey">
        <div className="chapter-title"><span>02 / THE JOURNEY</span><h2>Your day is not an itinerary.<br /><em>It is a story.</em></h2></div>
        <div className="story-stage">
          <figure className="story-main"><img src="/images/ephesus-day.png" alt="Travelers walking down Curetes Street" /><figcaption>Curetes Street · 09:40</figcaption></figure>
          <figure className="story-detail"><img src="/images/ephesus-detail-6.webp" alt="Temple of Hadrian detail" /><figcaption>The details reveal the city</figcaption></figure>
          <div className="story-copy"><span>01 — MEET</span><h3>From ship<br />to story.</h3><p>Your guide meets you by name at Kusadasi Port. Twenty minutes later, you enter Ephesus from the Upper Gate and follow the city at the rhythm that suits you.</p><ol><li><b>08:00</b>Meet at port</li><li><b>08:25</b>Upper Gate</li><li><b>09:40</b>Celsus Library</li><li><b>12:30</b>Return, on your time</li></ol></div>
        </div>
      </section>

      <section className="tour-index" id="tours">
        <div className="chapter-title light-title"><span>03 / FEATURED EXPERIENCES</span><h2>Every way into<br /><em>Ephesus.</em></h2><p>Start with six popular choices, or compare all 24 requested routes plus our five original specialty experiences.</p></div>
        <div className="featured-tours">{tours.slice(0, 3).map((tour, index) => <TourCard tour={tour} featured={index === 0} key={tour.slug} />)}</div>
        <div className="tour-grid">{tours.slice(3, 6).map((tour) => <TourCard tour={tour} key={tour.slug} />)}</div>
        <a className="text-link-light" href="/tours">Compare all 29 tours <ArrowRight /></a>
      </section>

      <section className="about-chapter" id="about">
        <div className="about-image"><img src="/images/ephesus-guide-about-v2.webp" alt="A local guide explaining an ancient carving to private guests" /><span>Real expertise, one conversation at a time</span></div>
        <div className="about-copy"><small>04 / THE PEOPLE BEHIND THE DAY</small><h2>Not a tour factory.<br /><em>Your local Ephesus team.</em></h2><p>PrivateEphesusTours is operated by Iglesias Tour Travel Agency in Kusadasi. Since 2010, licensed guides and dedicated drivers have shaped private port days around one simple idea: history feels different when there is room for a real conversation.</p><div className="about-values"><span><b>16+</b> years guiding the region</span><span><b>10772</b> TÜRSAB licence</span><span><b>24/7</b> WhatsApp assistance</span></div><a href="/about">Meet the company <ArrowRight /></a></div>
      </section>

      <section className="how-section">
        <div className="section-heading"><small>EFFORTLESS BOOKING</small><h2>Ashore to amazed<br />in three steps.</h2><p>No prepayment. Your guide waits at the port with your name sign.</p></div>
        <div className="steps"><article><span>01</span><h3>Tell us your ship</h3><p>Share your ship, port date and group size. We reply within the hour.</p></article><article><span>02</span><h3>We tailor the day</h3><p>Your route is shaped around docking hours, mobility and interests.</p></article><article><span>03</span><h3>Meet & explore</h3><p>Your licensed guide welcomes you at the exit; pay at the end.</p></article></div>
      </section>

      <section className="guarantee-section">
        <div><ShieldCheck /><small>OUR OPERATING PROMISE</small><h2>Your ship sets<br /><em>the clock.</em></h2></div><div><p>We monitor docking times, build a comfortable buffer into every route and coordinate the return with your all-aboard time.</p><ul><li><Check /> Live schedule awareness</li><li><Check /> Written on-time return guarantee</li><li><Check /> Free cancellation if your ship cannot dock</li></ul></div>
      </section>

      <section className="reviews-section" id="reviews">
        <div className="section-heading"><small>TRAVELER STORIES</small><h2>Remembered long<br />after sailing.</h2></div>
        <div className="review-grid">{reviews.map((review) => <blockquote key={review.name}><div>★★★★★</div><p>“{review.quote}”</p><footer><b>{review.name}</b><span>{review.cruise}</span></footer></blockquote>)}</div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-heading"><small>GOOD TO KNOW</small><h2>Questions before<br />you step ashore.</h2></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="finale"><p>THE NEXT STORY IS YOURS</p><h2>What would you like<br />to <em>discover?</em></h2><a href={DEFAULT_WHATSAPP_URL} target="_blank" rel="noreferrer">Start planning on WhatsApp <ArrowUpRight /></a></section>
      <SiteFooter />
    </main>
  );
}
