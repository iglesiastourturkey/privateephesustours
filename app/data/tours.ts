import { notIncluded, sharedIncluded } from "../content";

export type Tour = {
  slug: string; number: string; badge: string; title: string; shortTitle: string;
  duration: string; origin: string; price: number; image: string; summary: string;
  story: string[]; highlights: string[]; included: string[];
  notIncluded: readonly string[]; prices: [string, string][];
};

const standardPrices: [string, string][] = [["2 guests", "$180"], ["3 guests", "$220"], ["4–6 guests", "$250"], ["7–9 guests", "$280"], ["10–12 guests", "$300"], ["13–15 guests", "$350"], ["16+ guests", "Request a quote"]];

export const tours: Tour[] = [
  {
    slug: "private-ephesus-tour-skip-the-line", number: "01", badge: "Best seller", shortTitle: "Ephesus Essentials", title: "Private Ephesus Tour — Skip-the-Line & On-Time Return", duration: "4–5 hours", origin: "Kusadasi Cruise Port", price: 180, image: "/images/ephesus-private-hero-v2.webp",
    summary: "Ephesus, the Terrace Houses and the Basilica of St. John with your own licensed guide—and a guaranteed on-time return.",
    story: ["Your private guide meets you at the Kusadasi port exit. Twenty minutes later, you are walking the original marble streets of one of the world’s best-preserved Greco-Roman cities.", "Explore the Library of Celsus, Grand Theatre and remarkable Terrace Houses before continuing to the Basilica of St. John and the Temple of Artemis. The pace, questions and stops remain entirely yours."],
    highlights: ["Ephesus Ancient City & Terrace Houses", "Basilica of St. John", "Temple of Artemis photo stop", "Skip-the-line tickets available", "Written on-time return guarantee"], included: ["Skip-the-line tickets arranged on request", ...sharedIncluded], notIncluded, prices: standardPrices,
  },
  {
    slug: "no-shopping-ephesus-tour", number: "02", badge: "No shopping", shortTitle: "Nothing but Ephesus", title: "No-Shopping Ephesus Tour — 100% Sightseeing", duration: "5–6 hours", origin: "Kusadasi Cruise Port", price: 360, image: "/images/ephesus-detail-10.webp",
    summary: "Zero showrooms and zero sales pressure. Every minute ashore belongs to the ancient sites and your questions.",
    story: ["Many low-priced shore excursions make their margin through showroom commissions. This experience is designed for travelers who want none of that—and the no-shopping promise appears in writing.", "Spend the time you save at Ephesus, the Terrace Houses and either the House of the Virgin Mary or Basilica of St. John. It is pure history, privately experienced."],
    highlights: ["Written zero-shopping guarantee", "Ephesus & Terrace Houses", "Virgin Mary or St. John—your choice", "Extra time at the ruins", "On-time return to ship"], included: ["Commission-free, no-shopping itinerary", ...sharedIncluded], notIncluded, prices: [["2 guests", "$360"], ["3 guests", "$440"], ["4–6 guests", "$500"], ["7–9 guests", "$560"], ["10–12 guests", "$600"], ["13–15 guests", "$700"], ["16+ guests", "Request a quote"]],
  },
  {
    slug: "best-of-ephesus-private-tour", number: "03", badge: "Most complete", shortTitle: "The Complete Ephesus", title: "Best of Ephesus — with House of the Virgin Mary", duration: "5–6 hours", origin: "Kusadasi Cruise Port", price: 180, image: "/images/ephesus-biblical-v2.webp",
    summary: "The ancient city, Terrace Houses and the House of the Virgin Mary in one beautifully timed private day.",
    story: ["Our most complete Ephesus shore excursion is ideal for a first visit. Walk the city’s full ceremonial route from the Odeon to the Library of Celsus and the Grand Theatre.", "Then climb Bülbül Mountain to the peaceful House of the Virgin Mary before a Temple of Artemis photo stop and panoramic return through Kusadasi."],
    highlights: ["Full Ephesus route", "Terrace Houses", "House of the Virgin Mary", "Temple of Artemis", "Optional local lunch"], included: ["House of the Virgin Mary on the route", ...sharedIncluded], notIncluded, prices: standardPrices,
  },
  {
    slug: "biblical-ephesus-private-tour", number: "04", badge: "Pilgrimage", shortTitle: "Biblical Ephesus", title: "Biblical Ephesus — Footsteps of St. Paul & St. John", duration: "5–6 hours", origin: "Kusadasi Cruise Port", price: 200, image: "/images/ephesus-biblical-v2.webp",
    summary: "A contemplative journey through the landscape of St. Paul, St. John and the Virgin Mary.",
    story: ["Ephesus was home to St. Paul, one of the Seven Churches of Revelation and central to the story of St. John and the Virgin Mary. Your guide connects that history to the places beneath your feet.", "Visit the House of the Virgin Mary, the Grand Theatre described in Acts 19 and the Basilica of St. John. Time for prayer, reflection and questions is always respected."],
    highlights: ["House of the Virgin Mary", "Basilica of St. John", "Grand Theatre—Acts 19", "Biblical-history specialist guide", "Gentle, reflective pace"], included: ["Faith-focused guide and route", ...sharedIncluded], notIncluded, prices: [["2 guests", "$200"], ["3 guests", "$240"], ["4–6 guests", "$270"], ["7–9 guests", "$300"], ["10–12 guests", "$350"], ["13–15 guests", "$400"], ["16+ guests", "Request a quote"]],
  },
  {
    slug: "ephesus-wine-tasting-private-tour", number: "05", badge: "Food & wine", shortTitle: "History & Aegean Wine", title: "Ephesus & Wine Tasting with Local Snacks", duration: "5–6 hours", origin: "Kusadasi Cruise Port", price: 250, image: "/images/ephesus-wine-v2.webp",
    summary: "Two thousand years of history followed by regional wines, local flavors and Aegean hospitality.",
    story: ["Begin with the Library of Celsus, Grand Theatre and Curetes Street. Then exchange ancient marble for a family winery and the living culture of the Aegean.", "Taste regional wines with local snacks as your host explains the grapes and terroir. A panoramic Kusadasi drive completes the day."],
    highlights: ["Private guided Ephesus walk", "Regional wine tasting", "Local snacks", "Local art gallery", "Panoramic Kusadasi drive"], included: ["Wine tasting with local snacks", ...sharedIncluded], notIncluded, prices: [["2 guests", "$250"], ["3 guests", "$280"], ["4–6 guests", "$300"], ["7–9 guests", "$320"], ["10–12 guests", "$350"], ["13–15 guests", "$450"], ["16+ guests", "Request a quote"]],
  },
  {
    slug: "ephesus-and-shopping-private-tour", number: "06", badge: "Culture & crafts", shortTitle: "Ephesus & Artisans", title: "Ephesus & Turkish Handicrafts — Rugs, Ceramics, Leather", duration: "4–5 hours", origin: "Kusadasi Cruise Port", price: 180, image: "/images/ephesus-crafts-v2.webp",
    summary: "Ancient Ephesus followed by the region’s living traditions of weaving, ceramics and leather craft.",
    story: ["History comes first with a full guided visit of Ephesus and the Terrace Houses, timed to avoid the largest groups.", "Then choose the crafts that interest you: watch a rug take shape, see ceramics painted by hand or discover Aegean leather. Watching is welcome; purchasing is never required."],
    highlights: ["Ephesus & Terrace Houses", "Artisan workshops", "Rugs, ceramics or leather", "No obligation to purchase", "On-time ship return"], included: ["Your choice of artisan workshop visits", ...sharedIncluded], notIncluded, prices: standardPrices,
  },
  {
    slug: "ephesus-pottery-class-private-tour", number: "07", badge: "Family favorite", shortTitle: "Ephesus & Pottery", title: "Ephesus & Hands-On Pottery Class", duration: "4–5 hours", origin: "Kusadasi Cruise Port", price: 180, image: "/images/ephesus-pottery-v2.webp",
    summary: "Explore Ephesus, then shape your own pottery with a master artisan—a tactile day for every generation.",
    story: ["The morning belongs to Ephesus: explore its library, theatre and marble streets at your own family’s pace.", "At a traditional workshop, a master artisan welcomes you with tea or coffee and guides you at the wheel. The class is included and the day is designed for a relaxed amount of walking."],
    highlights: ["Guided Ephesus visit", "Hands-on pottery class", "Master artisan", "Coffee or tea welcome", "Ideal for families"], included: ["Pottery class with a master artisan", "Welcome coffee, tea or water", ...sharedIncluded], notIncluded, prices: standardPrices,
  },
  {
    slug: "half-day-private-ephesus-tour", number: "08", badge: "Short & easy", shortTitle: "Half-Day Ephesus", title: "Half-Day Private Ephesus Tour", duration: "3–4 hours", origin: "Kusadasi Cruise Port", price: 170, image: "/images/ephesus-detail-4.webp",
    summary: "The essential city and Terrace Houses for a short port call, with time left to enjoy Kusadasi.",
    story: ["Twenty minutes after meeting your guide at the port you arrive at Ephesus. In around two hours on site, cover Curetes Street, Celsus, the Grand Theatre and the Terrace Houses.", "Return within three to four hours, leaving space for Kusadasi’s waterfront, bazaar or Pigeon Island before sailing."],
    highlights: ["Essential Ephesus highlights", "Terrace Houses", "Only 20 minutes from port", "Ideal for short calls", "Kusadasi free time afterwards"], included: sharedIncluded, notIncluded, prices: [["2 guests", "$170"], ["3 guests", "$210"], ["4–6 guests", "$240"], ["7–9 guests", "$270"], ["10–12 guests", "$290"], ["13–15 guests", "$340"], ["16+ guests", "Request a quote"]],
  },
  {
    slug: "istanbul-old-city-private-tour-galataport", number: "09", badge: "Istanbul", shortTitle: "Istanbul Old City", title: "Private Istanbul Old City Tour — From Galataport", duration: "6–7 hours", origin: "Galataport, Istanbul", price: 400, image: "/images/istanbul-private-v2.webp",
    summary: "Hagia Sophia, Topkapi Palace, Blue Mosque and Hippodrome with a private licensed guide.",
    story: ["Meet at the Galataport exit, then cross the Golden Horn to Sultanahmet as your guide begins the story of a capital shaped by two empires.", "Explore Hagia Sophia, Topkapi Palace, the Blue Mosque and Roman Hippodrome in an order adapted to opening times, your interests and your ship."],
    highlights: ["Hagia Sophia", "Topkapi Palace", "Blue Mosque", "Roman Hippodrome", "Galataport meet & return"], included: ["Sultanahmet walking tour and tram experience", ...sharedIncluded], notIncluded, prices: [["2 guests", "$400"], ["3 guests", "$440"], ["4–6 guests", "$500"], ["7–9 guests", "$560"], ["10–12 guests", "$620"], ["13–15 guests", "$700"], ["16+ guests", "Request a quote"]],
  },
  {
    slug: "ephesus-tour-from-izmir-port", number: "10", badge: "From Izmir", shortTitle: "Ephesus from Izmir", title: "Private Ephesus Tour from Izmir Port", duration: "6–7 hours", origin: "Izmir Cruise Port or hotel", price: 280, image: "/images/ephesus-detail-2.webp",
    summary: "A comfortable private route from Izmir to Ephesus, Artemis and a traditional rug-weaving demonstration.",
    story: ["Your guide and driver meet you at Izmir port or hotel. After a comfortable one-hour drive, explore Celsus, Curetes Street, Hadrian’s Temple and the Grand Theatre.", "Continue to the Temple of Artemis and a local carpet cooperative before returning to Izmir with ship timing monitored throughout."],
    highlights: ["Ephesus with licensed guide", "Temple of Artemis", "Rug-weaving demonstration", "Izmir round-trip transfer", "On-time ship return"], included: ["Traditional rug-weaving demonstration", "Izmir–Ephesus round-trip transfer", ...sharedIncluded], notIncluded, prices: [["2 guests", "$280"], ["3 guests", "$320"], ["4–6 guests", "$360"], ["7–9 guests", "$400"], ["10–12 guests", "$440"], ["13–15 guests", "$500"], ["16+ guests", "Request a quote"]],
  },
];

export function getTour(slug: string) { return tours.find((tour) => tour.slug === slug); }
