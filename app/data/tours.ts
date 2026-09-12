import { notIncluded, sharedIncluded } from "../content";

export type Tour = {
  slug: string;
  number: string;
  badge: string;
  title: string;
  shortTitle: string;
  duration: string;
  origin: string;
  price: number;
  image: string;
  summary: string;
  story: string[];
  highlights: string[];
  included: string[];
  notIncluded: readonly string[];
  prices: [string, string][];
  groupType: string;
  language: string;
  ticketing: string;
  pickupDetails: string;
  cancellationPolicy: string;
  additionalInfo: string[];
  itinerary: ItineraryStop[];
  reviewTopics: string[];
  reviews: TravelerReview[];
};

export type ItineraryStop = {
  name: string;
  description: string;
  duration: string;
  admission: string;
  isPassBy?: boolean;
};

export type TravelerReview = {
  name: string;
  month: string;
  quote: string;
};

type TourSeed = Omit<Tour, "number" | "story" | "included" | "notIncluded" | "prices" | "groupType" | "language" | "ticketing" | "pickupDetails" | "cancellationPolicy" | "additionalInfo" | "itinerary" | "reviewTopics" | "reviews"> & {
  includedExtras?: string[];
  serviceIncluded?: string[];
  excluded?: readonly string[];
  groupType?: string;
  story?: string[];
  itinerary?: ItineraryStop[];
  pickupDetails?: string;
  additionalInfo?: string[];
  cancellationPolicy?: string;
  ticketing?: string;
  reviewTopics?: string[];
  reviews?: TravelerReview[];
};

const groupLabels = ["2 guests", "3 guests", "4-6 guests", "7-9 guests", "10-12 guests", "13-15 guests"] as const;
const multipliers = [1, 1.22, 1.4, 1.56, 1.72, 1.94] as const;

function roundToTen(value: number) {
  return Math.ceil(value / 10) * 10;
}

function groupPrices(basePrice: number): [string, string][] {
  return [
    ...groupLabels.map((label, index) => [label, `$${roundToTen(basePrice * multipliers[index])}`] as [string, string]),
    ["16+ guests", "Request a quote"],
  ];
}

const stopCatalog: Array<{ match: string; stop: ItineraryStop }> = [
  { match: "Ephesus Ancient City", stop: { name: "Ephesus Ancient City", description: "Walk the marble streets from the civic quarter toward Curetes Street, the Library of Celsus and the Great Theatre as your guide brings Roman daily life into focus.", duration: "2 hours", admission: "Ticket required" } },
  { match: "Upper Gate", stop: { name: "Ephesus Ancient City", description: "Enter through the Upper Gate and follow the ancient city's natural downhill route with your licensed guide.", duration: "2 hours", admission: "Ticket required" } },
  { match: "Library of Celsus", stop: { name: "Library of Celsus", description: "Pause at Ephesus' celebrated restored facade and learn how the library, tomb and commercial agora shaped the heart of the city.", duration: "20 minutes", admission: "Included with Ephesus ticket" } },
  { match: "Terrace Houses", stop: { name: "Terrace Houses", description: "Step inside the homes of wealthy Ephesians to see mosaics, frescoes, heating systems and domestic spaces preserved beneath a protective roof.", duration: "30 minutes", admission: "Separate ticket required" } },
  { match: "House of the Virgin Mary", stop: { name: "House of the Virgin Mary", description: "Visit the peaceful pilgrimage sanctuary on Bulbul Mountain, with time for reflection at the chapel and wishing wall.", duration: "45 minutes", admission: "Ticket required" } },
  { match: "Mary's House", stop: { name: "House of the Virgin Mary", description: "Visit the peaceful pilgrimage sanctuary on Bulbul Mountain, with time for reflection at the chapel and wishing wall.", duration: "45 minutes", admission: "Ticket required" } },
  { match: "Temple of Artemis", stop: { name: "Temple of Artemis", description: "See the surviving remains of one of the Seven Wonders of the Ancient World and understand the scale of the sanctuary that once stood here.", duration: "15 minutes", admission: "Free admission" } },
  { match: "Basilica of St. John", stop: { name: "Basilica of St. John", description: "Explore the hilltop basilica traditionally associated with St. John's burial place and take in views across Selcuk.", duration: "45 minutes", admission: "Ticket required" } },
  { match: "Grand Theatre", stop: { name: "Great Theatre of Ephesus", description: "Stand inside the vast Roman theatre associated with the events of Acts 19 and the city's public life.", duration: "20 minutes", admission: "Included with Ephesus ticket" } },
  { match: "Turkish lunch", stop: { name: "Traditional Turkish Lunch", description: "Pause for a relaxed set-menu meal featuring regional dishes. Dietary requirements can be shared during reservation.", duration: "1 hour", admission: "Included as listed" } },
  { match: "wine tasting", stop: { name: "Aegean Wine Tasting", description: "Taste regional wines with local snacks while learning about the grapes and winemaking traditions of the Aegean.", duration: "1 hour", admission: "Included" } },
  { match: "pottery class", stop: { name: "Hands-On Pottery Workshop", description: "Join a local master artisan at the wheel and create a piece while learning how traditional ceramics are formed.", duration: "45 minutes", admission: "Included" } },
  { match: "Artisan workshops", stop: { name: "Local Artisan Workshop", description: "Choose a rug, ceramics or leather workshop. Watching is welcome and purchasing is never required.", duration: "45 minutes", admission: "Free admission" } },
  { match: "Hagia Sophia", stop: { name: "Hagia Sophia", description: "Explore the layered Byzantine and Ottoman history of Istanbul's most celebrated monumental landmark.", duration: "1 hour", admission: "Ticket may be required" } },
  { match: "Topkapi Palace", stop: { name: "Topkapi Palace", description: "Discover the ceremonial courts and collections of the Ottoman imperial residence with your private guide.", duration: "1.5 hours", admission: "Ticket required" } },
  { match: "Blue Mosque", stop: { name: "Blue Mosque", description: "Visit Sultanahmet's active imperial mosque, subject to prayer times and appropriate dress requirements.", duration: "30 minutes", admission: "Free admission" } },
  { match: "Roman Hippodrome", stop: { name: "Hippodrome of Constantinople", description: "Walk the former chariot-racing arena and examine its surviving monuments in the heart of the Old City.", duration: "30 minutes", admission: "Free admission" } },
];

function buildItinerary(seed: TourSeed): ItineraryStop[] {
  const matched = stopCatalog
    .filter(({ match }) => seed.highlights.some((highlight) => highlight.toLowerCase().includes(match.toLowerCase())))
    .map(({ stop }) => stop)
    .filter((stop, index, stops) => stops.findIndex(({ name }) => name === stop.name) === index)
    .slice(0, 5);
  return [
    { name: "Meet your guide", description: `Your guide welcomes you at ${seed.origin} with a sign showing your name. The exact meeting time is confirmed around your ship or hotel schedule.`, duration: "10 minutes", admission: "No ticket required" },
    ...matched,
    { name: "Return to port or hotel", description: "Relax on the return drive. For cruise guests, a comfortable safety buffer is built in before the ship's all-aboard time.", duration: "20-75 minutes", admission: "Included" },
  ];
}

function createTour(seed: TourSeed, index: number): Tour {
  const keyStops = seed.highlights.slice(0, 3).join(", ");
  const extras = seed.includedExtras ?? [];
  const extrasText = extras.join(" ").toLowerCase();
  const transportDescription = seed.serviceIncluded ? "an air-conditioned vehicle" : "a private, air-conditioned vehicle";
  const resolvedExcluded = (seed.excluded ?? notIncluded).filter((item) => {
    if (item.startsWith("Entrance tickets") && (extrasText.includes("ticket") || extrasText.includes("admission"))) return false;
    if (item.startsWith("Lunch") && extrasText.includes("lunch")) return false;
    return true;
  });
  return {
    ...seed,
    number: String(index + 1).padStart(2, "0"),
    story: seed.story ?? [
      `Meet your licensed guide at ${seed.origin}. Travel in ${transportDescription} and explore at a pace shaped around your selected tour format rather than a large coach schedule.`,
      `The route brings together ${keyStops}. Your guide adjusts the order to site opening times, seasonal crowds and your ship's all-aboard time, while keeping every included stop clear before departure.`,
    ],
    included: [...extras, ...(seed.serviceIncluded ?? sharedIncluded)],
    notIncluded: resolvedExcluded,
    prices: groupPrices(seed.price),
    groupType: seed.groupType ?? (seed.serviceIncluded ? "Small-group or private option" : "Private tour - only your party"),
    language: "English",
    ticketing: seed.ticketing ?? (extrasText.includes("ticket") || extrasText.includes("admission") ? "Selected admission tickets included" : "Mobile confirmation - tickets arranged on request"),
    pickupDetails: seed.pickupDetails ?? `Meet beside the Information Desk at ${seed.origin}. For cruise arrivals, we normally recommend meeting 30-45 minutes after docking to avoid the largest crowds and afternoon heat. Your final meeting time and name-sign instructions are confirmed in writing.`,
    cancellationPolicy: seed.cancellationPolicy ?? "Cancel at least 24 hours before the confirmed start time for a full refund. If your cruise ship cannot dock in port, cancellation is free of charge.",
    additionalInfo: seed.additionalInfo ?? [
      "Confirmation is sent after availability and ship timing are checked.",
      "Strollers are welcome; Ephesus has uneven marble, slopes and steps.",
      "Please share wheelchair or reduced-mobility needs before confirmation so the route and vehicle can be adapted.",
      "Children must be accompanied by an adult; child seats can be requested in advance.",
      "The order of stops may change with opening hours, weather, crowds and ship schedules.",
    ],
    itinerary: seed.itinerary ?? buildItinerary(seed),
    reviewTopics: seed.reviewTopics ?? [],
    reviews: seed.reviews ?? [],
  };
}

const seeds: TourSeed[] = [
  {
    slug: "all-inclusive-ephesus-skip-line", badge: "Best seller", shortTitle: "All-Inclusive Ephesus",
    title: "All-Inclusive Ephesus Tour with Skip-the-Line Entry", duration: "4-5 hours", origin: "Kusadasi Cruise Port", price: 250,
    image: "/images/ephesus-private-hero-v2.webp", summary: "Private Ephesus sightseeing with pre-arranged admission, a licensed guide and ship-timed port transfers.",
    highlights: ["Ephesus Ancient City", "Library of Celsus", "Grand Theatre", "Temple of Artemis", "On-time ship return"], includedExtras: ["Pre-arranged Ephesus entry ticket", "Skip-the-ticket-line coordination"],
  },
  {
    slug: "cruisers-skip-lines-on-time-return", badge: "Cruise favorite", shortTitle: "Skip-the-Line for Cruisers",
    title: "Private Ephesus for Cruisers - Skip the Lines & On-Time Return", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-day.png", summary: "A flexible private shore excursion built around fast entry and a carefully protected return to your ship.",
    highlights: ["Walk the ancient streets of Ephesus", "Visit the House of the Virgin Mary", "See the Temple of Artemis ruins", "Private port pickup and drop-off", "Written on-time return guarantee"], includedExtras: ["Skip-the-line ticket arrangements for Ephesus"],
    story: [
      "Explore Ephesus on a private shore excursion with a professional local guide. Visit the UNESCO-listed Ancient City of Ephesus, the House of the Virgin Mary, the Temple of Artemis, the Library of Celsus, Roman Baths and more.",
      "Port pickup, drop-off and a fully air-conditioned vehicle with a separate driver are included. You may add a local lunch or the Terrace Houses to the day; any optional attraction fees are confirmed before booking.",
    ],
    pickupDetails: "For cruise guests, meet at the port about 30 to 45 minutes after your ship docks. An early meeting helps avoid crowds, school buses and the strongest afternoon heat. If your ship is scheduled at 07:00, we recommend an 08:00 meeting; for later arrivals, meet about 30 minutes after docking.",
    ticketing: "Ephesus tickets can be arranged in advance to avoid the long ticket line; Terrace Houses and other optional entries are confirmed separately.",
    additionalInfo: [
      "Confirmation is sent at the time of booking once the port schedule is checked.",
      "The route is suitable for most travelers; please tell us in advance about wheelchair, stroller or reduced-mobility requirements.",
      "This cruise-specific tour is offered in English and is designed around the ship's all-aboard time.",
      "Meet 30 to 45 minutes after docking to help avoid crowds and the hottest part of the day.",
      "We guarantee an on-time return to your ship and this is a private activity for your own group.",
    ],
    cancellationPolicy: "You can cancel up to 24 hours before the confirmed experience start time for a full refund. If your ship does not dock in Kusadasi, cancellation is free of charge.",
    itinerary: [
      { name: "Kusadasi Cruise Port Meeting", description: "Your guide meets you at the cruise port with a name sign and walks you to the waiting vehicle.", duration: "10 minutes", admission: "Free admission" },
      { name: "Ephesus Terrace Houses (optional)", description: "Add the residences of Ephesus' upper-class families, known for their mosaics, frescoes and wall paintings, to your program.", duration: "30 minutes", admission: "Ticket not included" },
      { name: "House of the Virgin Mary", description: "Visit one of Christianity's important pilgrimage places on Bulbul Mountain, traditionally associated with the final years of the Virgin Mary.", duration: "45 minutes", admission: "Ticket not included" },
      { name: "Ephesus Ancient City", description: "Explore one of the best-preserved Greco-Roman cities in the world, including the Odeon, Domitian Temple, Curetes Street, Celsus Library, Roman Baths and Great Theatre.", duration: "2 hours", admission: "Ticket not included" },
      { name: "Temple of Artemis", description: "See the remains of one of the Seven Wonders of the Ancient World.", duration: "15 minutes", admission: "Free admission" },
      { name: "Kusadasi Castle / Pigeon Island", description: "Pass by the waterfront landmark beside the port; you may visit independently after the tour if time allows.", duration: "Pass by", admission: "Free admission", isPassBy: true },
      { name: "Kusadasi Shopping District", description: "Pass by the central shopping area near the port. Your guide can point it out for free time after the tour.", duration: "Pass by", admission: "Free admission", isPassBy: true },
      { name: "Okuz Mehmet Pasa Caravanserai", description: "Pass by the historic caravanserai close to the cruise port.", duration: "Pass by", admission: "Free admission", isPassBy: true },
      { name: "Kusadasi Return", description: "Return to the port with time built in before your ship's all-aboard time.", duration: "10 minutes", admission: "Included" },
    ],
    reviewTopics: ["Great food", "Excellent organisation", "Clear communication", "Pickup experience", "Family fun", "Great guides"],
    reviews: [
      { name: "Jill W.", month: "Jun 2026", quote: "We experienced an incredible tour in Turkey, from ancient ruins to the House of the Virgin Mary. Furkan was knowledgeable, fun and professional; we all learned so much." },
      { name: "Gregory O.", month: "Sep 2026", quote: "Our private tour was fantastic: on time, knowledgeable and tailored to our tastes. The House of the Virgin Mary, Ephesus and Artemis made it memorable." },
      { name: "George L.", month: "Jul 2026", quote: "A fun half day in Kusadasi with a great guide. We experienced local culture, rug making, traditional delicacies and memorable photo stops." },
      { name: "Marion B.", month: "Aug 2026", quote: "A great tour with a very nice air-conditioned Mercedes. Our guide was knowledgeable and friendly, and the House of Mary plus Ephesus were excellent." },
      { name: "Priyanka H.", month: "Jul 2026", quote: "A personalized tour for adults and children alike. We enjoyed Ephesus, the House of the Virgin Mary, pottery and seeing how rugs are made." },
    ],
  },
  {
    slug: "private-ephesus-cruisers-skip-line", badge: "Private tour", shortTitle: "Ephesus Port Essential",
    title: "Private Ephesus Tour for Cruisers - On-Time Return & Skip-Line", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-celsus.webp", summary: "The essential Ephesus monuments with your own guide, private transport and no waiting for a large group.",
    highlights: ["Upper Gate to Lower Gate route", "Library of Celsus", "Grand Theatre", "Temple of Hadrian", "Ship-safe timing"], includedExtras: ["Skip-the-line tickets arranged on request"],
  },
  {
    slug: "all-included-ephesus-cruisers-tickets", badge: "Tickets included", shortTitle: "Ephesus Complete Package",
    title: "All-Included Ephesus Tour for Cruisers with Entry Tickets", duration: "4-5 hours", origin: "Kusadasi Cruise Port", price: 260,
    image: "/images/ephesus-detail-2.webp", summary: "A simple, clearly packaged port day with private guiding, transport and Ephesus admission included.",
    highlights: ["Ephesus admission", "Library of Celsus", "Hadrian's Temple", "Grand Theatre", "Private port transfers"], includedExtras: ["Ephesus Ancient City entry ticket", "Ticket-line coordination"],
  },
  {
    slug: "private-biblical-ephesus-lunch", badge: "Biblical heritage", shortTitle: "Biblical Ephesus & Lunch",
    title: "Private Biblical Ephesus Tour from Kusadasi Port with Lunch", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 250,
    image: "/images/ephesus-biblical-v2.webp", summary: "Follow the stories of St. Paul and St. John through Ephesus, then enjoy a relaxed Turkish lunch.",
    highlights: ["Grand Theatre and Acts 19", "Basilica of St. John", "Library of Celsus", "Biblical-history guide", "Turkish lunch"], includedExtras: ["Faith-focused route", "Set-menu Turkish lunch"],
  },
  {
    slug: "private-ephesus-cruisers-tickets-included", badge: "Easy planning", shortTitle: "Ephesus with Tickets",
    title: "Private Ephesus Tour for Cruisers with Skip-the-Line Tickets", duration: "3-4 hours", origin: "Kusadasi Cruise Port", price: 240,
    image: "/images/ephesus-detail-4.webp", summary: "A compact private tour for shorter calls, with Ephesus admission handled before you arrive.",
    highlights: ["Ephesus Ancient City", "Library of Celsus", "Grand Theatre", "Short-call friendly", "Pre-arranged admission"], includedExtras: ["Ephesus Ancient City entry ticket", "Skip-the-ticket-line coordination"],
  },
  {
    slug: "private-all-inclusive-ephesus", badge: "Most complete", shortTitle: "Private Ephesus All-Inclusive",
    title: "Private All-Inclusive Ephesus Tour - Skip-the-Line", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 290,
    image: "/images/ephesus-private-hero-v2.webp", summary: "Private transport, expert guiding, admission and lunch combined in one complete Ephesus day.",
    highlights: ["Ephesus Ancient City", "Terrace Houses", "Temple of Artemis", "Local lunch", "Skip-the-line entry"], includedExtras: ["Ephesus and Terrace Houses tickets", "Set-menu Turkish lunch"],
  },
  {
    slug: "ephesus-small-group-semi-private", badge: "Small group", shortTitle: "Semi-Private Ephesus",
    title: "Ephesus Small-Group Semi-Private Shore Excursion", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 90,
    image: "/images/ephesus-detail-10.webp", summary: "A sociable, lower-cost shore excursion with a deliberately small group and clear port timing.",
    highlights: ["Small-group format", "Ephesus Ancient City", "Library of Celsus", "Professional guide", "On-time port return"], includedExtras: ["Small-group guided experience"],
    serviceIncluded: ["Licensed professional tour guide", "Small-group transport by air-conditioned vehicle", "Port pick-up and drop-off", "Planned on-time return to your ship", "All local taxes, parking fees and fuel"],
  },
  {
    slug: "ephesus-kusadasi-on-time-guarantee", badge: "Ship-safe", shortTitle: "Ephesus Return Guarantee",
    title: "Ephesus Tour from Kusadasi with On-Time Return Guarantee", duration: "5-7 hours", origin: "Kusadasi Cruise Port", price: 190,
    image: "/images/ephesus-day.png", summary: "A fuller shore day with live schedule awareness and a written commitment to return before all-aboard.",
    highlights: ["Ephesus Ancient City", "Terrace Houses", "House of the Virgin Mary", "Temple of Artemis", "Return-time guarantee"], includedExtras: ["Live ship schedule monitoring"],
  },
  {
    slug: "private-ephesus-ticket-included", badge: "Admission included", shortTitle: "Ephesus Ticket Included",
    title: "Private Ephesus Tour for Cruisers with Ephesus Ticket Included", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 240,
    image: "/images/ephesus-celsus.webp", summary: "A private Ephesus experience with admission included and every stop paced for your own party.",
    highlights: ["Ephesus entry ticket", "Curetes Street", "Library of Celsus", "Grand Theatre", "Private guide and vehicle"], includedExtras: ["Ephesus Ancient City entry ticket"],
  },
  {
    slug: "ephesus-marys-house-skip-line", badge: "Sacred sites", shortTitle: "Ephesus & Mary's House",
    title: "Skip-the-Line Ephesus & House of the Virgin Mary Tour", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 200,
    image: "/images/ephesus-biblical-v2.webp", summary: "Pair the monumental streets of Ephesus with the quiet sanctuary on Bulbul Mountain.",
    highlights: ["Ephesus Ancient City", "House of the Virgin Mary", "Library of Celsus", "Temple of Artemis", "Flexible private pace"], includedExtras: ["Skip-the-line tickets arranged on request"],
  },
  {
    slug: "ephesus-virgin-mary-ticket-lunch", badge: "Tickets & lunch", shortTitle: "Ephesus, Mary & Lunch",
    title: "Ephesus & Virgin Mary Tour with Entry Tickets and Lunch", duration: "6-7 hours", origin: "Kusadasi Cruise Port", price: 320,
    image: "/images/ephesus-biblical-v2.webp", summary: "A complete private day covering Ephesus and Mary's House, with admission and Turkish lunch included.",
    highlights: ["Ephesus Ancient City", "House of the Virgin Mary", "Temple of Artemis", "All entry tickets", "Turkish lunch"], includedExtras: ["Ephesus and Mary's House entry tickets", "Set-menu Turkish lunch"],
  },
  {
    slug: "ephesus-house-virgin-mary-cruisers", badge: "Guest favorite", shortTitle: "Ephesus & Virgin Mary",
    title: "Ephesus and House of the Virgin Mary Tour for Cruisers", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 190,
    image: "/images/ephesus-detail-6.webp", summary: "The two essential Ephesus-area landmarks in a private route coordinated around your ship.",
    highlights: ["Ephesus Ancient City", "House of the Virgin Mary", "Library of Celsus", "Temple of Artemis", "Port meet and return"],
  },
  {
    slug: "private-ephesus-optional-tickets", badge: "Flexible choice", shortTitle: "Ephesus Your Way",
    title: "Skip-the-Line Private Ephesus Tour with Optional Tickets", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 170,
    image: "/images/ephesus-private-hero-v2.webp", summary: "Choose the core private tour, then add Ephesus and Terrace Houses admission to match your interests.",
    highlights: ["Customizable itinerary", "Ephesus Ancient City", "Optional Terrace Houses", "No compulsory extras", "Ship-safe timing"], includedExtras: ["Optional tickets arranged at official prices"],
  },
  {
    slug: "artemis-marys-house-half-day", badge: "Half day", shortTitle: "Artemis & Mary's House",
    title: "Temple of Artemis & House of the Virgin Mary Private Half-Day Tour", duration: "4-5 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-detail-4.webp", summary: "A gentler private half day linking one of the Seven Wonders with the region's peaceful pilgrimage site.",
    highlights: ["Temple of Artemis", "House of the Virgin Mary", "Ephesus panorama", "Reduced walking option", "Private vehicle"],
  },
  {
    slug: "all-inclusive-ephesus-mary-turkish-lunch", badge: "All-inclusive", shortTitle: "Ephesus, Mary & Turkish Lunch",
    title: "All-Inclusive Private Ephesus, House of Mary & Turkish Lunch", duration: "5-6 hours", origin: "Kusadasi Cruise Port", price: 320,
    image: "/images/ephesus-day.png", summary: "A seamless private day with the major sites, all admissions and a traditional local meal included.",
    highlights: ["Ephesus Ancient City", "House of the Virgin Mary", "Terrace Houses", "Temple of Artemis", "Turkish lunch"], includedExtras: ["All listed attraction tickets", "Set-menu Turkish lunch"],
  },
  {
    slug: "private-ephesus-guaranteed-return", badge: "Guaranteed return", shortTitle: "Private Ship-Safe Ephesus",
    title: "Private Ephesus Tour with Guaranteed On-Time Return", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-celsus.webp", summary: "Private guiding and transport with the day's timing engineered backwards from your all-aboard time.",
    highlights: ["Written return guarantee", "Live ship monitoring", "Ephesus Ancient City", "Flexible route", "Private port transfers"], includedExtras: ["Live ship schedule monitoring"],
  },
  {
    slug: "marys-house-ephesus-private", badge: "Private pilgrimage", shortTitle: "Mary's House & Ephesus",
    title: "Private Tour for Cruisers - Mary's House and Ephesus", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 200,
    image: "/images/ephesus-biblical-v2.webp", summary: "A contemplative visit to Mary's House followed by a privately guided walk through Ephesus.",
    highlights: ["House of the Virgin Mary", "Ephesus Ancient City", "Grand Theatre", "Time for reflection", "Private pace"],
  },
  {
    slug: "ephesus-virgin-mary-izmir-all-inclusive", badge: "From Izmir", shortTitle: "Ephesus & Mary from Izmir",
    title: "All-Inclusive Ephesus & Virgin Mary Tour from Izmir", duration: "6-10 hours", origin: "Izmir Cruise Port or hotel", price: 390,
    image: "/images/ephesus-detail-2.webp", summary: "A comfortable full-day private route from Izmir with admissions, lunch and return transport included.",
    highlights: ["Izmir round-trip transfer", "Ephesus Ancient City", "House of the Virgin Mary", "All entry tickets", "Turkish lunch"], includedExtras: ["All listed attraction tickets", "Set-menu Turkish lunch", "Izmir-Ephesus round-trip transfer"],
  },
  {
    slug: "ephesus-artemis-kusadasi-private", badge: "Classic route", shortTitle: "Ephesus & Artemis",
    title: "Ephesus & Temple of Artemis Private Tour from Kusadasi Port", duration: "3-4 hours", origin: "Kusadasi Cruise Port", price: 170,
    image: "/images/ephesus-detail-10.webp", summary: "A focused private visit to ancient Ephesus and the remains of the Temple of Artemis.",
    highlights: ["Ephesus Ancient City", "Temple of Artemis", "Library of Celsus", "Grand Theatre", "Short-call friendly"],
  },
  {
    slug: "ephesus-marys-house-optional-tickets", badge: "Flexible tickets", shortTitle: "Ephesus & Mary Flexible",
    title: "Ephesus & Mary's House with Optional Entry Tickets", duration: "4-7 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-detail-6.webp", summary: "Keep the core private service simple and choose which admissions to add before the day.",
    highlights: ["Ephesus Ancient City", "House of the Virgin Mary", "Optional Terrace Houses", "Clear ticket choices", "Flexible duration"], includedExtras: ["Optional tickets arranged at official prices"],
  },
  {
    slug: "ephesus-virgin-mary-private-group-option", badge: "Private or small group", shortTitle: "Ephesus & Mary Group Choice",
    title: "Ephesus & Virgin Mary Tour with Private or Small-Group Option", duration: "4-5 hours", origin: "Kusadasi Cruise Port", price: 95,
    image: "/images/ephesus-private-hero-v2.webp", summary: "Choose a fully private vehicle or a carefully limited small group for the same essential route.",
    highlights: ["Private or small-group format", "Ephesus Ancient City", "House of the Virgin Mary", "Port transfers", "On-time return"], includedExtras: ["Selected private or small-group service"],
    serviceIncluded: ["Licensed professional tour guide", "Air-conditioned vehicle with driver", "Port pick-up and drop-off", "Planned on-time return to your ship", "All local taxes, parking fees and fuel"],
  },
  {
    slug: "ephesus-marys-house-no-hidden-fees", badge: "No hidden fees", shortTitle: "Clear-Price Ephesus & Mary",
    title: "No-Hidden-Fees Ephesus & Mary's House Guided Tour", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 280,
    image: "/images/ephesus-biblical-v2.webp", summary: "A clearly itemized guided package with the selected admissions and transport confirmed before departure.",
    highlights: ["Upfront inclusions", "Ephesus Ancient City", "House of the Virgin Mary", "Private or group choice", "No compulsory shopping"], includedExtras: ["Ephesus and Mary's House entry tickets", "No compulsory shopping stops"],
  },
  {
    slug: "customizable-private-guided-ephesus", badge: "Build your day", shortTitle: "Custom Ephesus",
    title: "Customizable Private Guided Ephesus Tour", duration: "4-6 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-crafts-v2.webp", summary: "Choose the ruins, sacred sites, food and artisan stops that matter to you; we shape the timing around your ship.",
    highlights: ["Your choice of Ephesus-area sites", "Flexible start and pace", "Optional food or craft stops", "Private guide and vehicle", "Ship-safe return"],
  },
  {
    slug: "no-shopping-ephesus-tour", badge: "No shopping", shortTitle: "Nothing but Ephesus",
    title: "No-Shopping Ephesus Tour - 100% Sightseeing", duration: "5-6 hours", origin: "Kusadasi Cruise Port", price: 360,
    image: "/images/ephesus-detail-10.webp", summary: "Zero showrooms and zero sales pressure. Every minute ashore belongs to the ancient sites and your questions.",
    highlights: ["Written zero-shopping guarantee", "Ephesus and Terrace Houses", "Virgin Mary or St. John - your choice", "Extra time at the ruins", "On-time return to ship"], includedExtras: ["Commission-free, no-shopping itinerary"],
  },
  {
    slug: "ephesus-wine-tasting-private-tour", badge: "Food & wine", shortTitle: "History & Aegean Wine",
    title: "Ephesus & Wine Tasting with Local Snacks", duration: "5-6 hours", origin: "Kusadasi Cruise Port", price: 250,
    image: "/images/ephesus-wine-v2.webp", summary: "Two thousand years of history followed by regional wines, local flavors and Aegean hospitality.",
    highlights: ["Private guided Ephesus walk", "Regional wine tasting", "Local snacks", "Family winery", "Panoramic Kusadasi drive"], includedExtras: ["Wine tasting with local snacks"],
  },
  {
    slug: "ephesus-and-shopping-private-tour", badge: "Culture & crafts", shortTitle: "Ephesus & Artisans",
    title: "Ephesus & Turkish Handicrafts - Rugs, Ceramics, Leather", duration: "4-5 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-crafts-v2.webp", summary: "Ancient Ephesus followed by the region's living traditions of weaving, ceramics and leather craft.",
    highlights: ["Ephesus and Terrace Houses", "Artisan workshops", "Rugs, ceramics or leather", "No obligation to purchase", "On-time ship return"], includedExtras: ["Your choice of artisan workshop visits"],
  },
  {
    slug: "ephesus-pottery-class-private-tour", badge: "Family favorite", shortTitle: "Ephesus & Pottery",
    title: "Ephesus & Hands-On Pottery Class", duration: "4-5 hours", origin: "Kusadasi Cruise Port", price: 180,
    image: "/images/ephesus-pottery-v2.webp", summary: "Explore Ephesus, then shape your own pottery with a master artisan - a tactile day for every generation.",
    highlights: ["Guided Ephesus visit", "Hands-on pottery class", "Master artisan", "Coffee or tea welcome", "Ideal for families"], includedExtras: ["Pottery class with a master artisan", "Welcome coffee, tea or water"],
  },
  {
    slug: "istanbul-old-city-private-tour-galataport", badge: "Istanbul", shortTitle: "Istanbul Old City",
    title: "Private Istanbul Old City Tour - From Galataport", duration: "6-7 hours", origin: "Galataport, Istanbul", price: 400,
    image: "/images/istanbul-private-v2.webp", summary: "Hagia Sophia, Topkapi Palace, Blue Mosque and Hippodrome with a private licensed guide.",
    highlights: ["Hagia Sophia", "Topkapi Palace", "Blue Mosque", "Roman Hippodrome", "Galataport meet and return"], includedExtras: ["Sultanahmet walking tour and tram experience"],
  },
];

export const tours: Tour[] = seeds.map(createTour);

const tourAliases: Record<string, string> = {
  "private-ephesus-tour-skip-the-line": "cruisers-skip-lines-on-time-return",
  "best-of-ephesus-private-tour": "ephesus-house-virgin-mary-cruisers",
  "biblical-ephesus-private-tour": "private-biblical-ephesus-lunch",
  "half-day-private-ephesus-tour": "private-ephesus-cruisers-tickets-included",
  "ephesus-tour-from-izmir-port": "ephesus-virgin-mary-izmir-all-inclusive",
};

export const tourSlugs = [...tours.map(({ slug }) => slug), ...Object.keys(tourAliases)];

export function getTour(slug: string) {
  const resolvedSlug = tourAliases[slug] ?? slug;
  return tours.find((tour) => tour.slug === resolvedSlug);
}
