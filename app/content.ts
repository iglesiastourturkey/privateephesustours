export const WHATSAPP_PHONE = "905075638413";
export const PHONE_DISPLAY = "+90 507 563 84 13";
export const CONTACT_EMAIL = "tours@privateephesustours.com";

export const DEFAULT_WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Hello! I'd like to plan a private Ephesus tour.",
  )}`;

export const sharedIncluded = [
  "Licensed professional tour guide",
  "100% private tour — only your own group",
  "Meet & greet at the port exit with your name sign",
  "Air-conditioned private vehicle with separate driver",
  "Port or hotel pick-up and drop-off",
  "Guaranteed on-time return to your ship — in writing",
  "All local taxes, parking fees and fuel",
];

export const notIncluded = [
  "Entrance tickets to sites and museums",
  "Lunch, food and drinks unless stated",
  "Gratuities and personal expenses",
];

export const reviews = [
  { quote: "Our guide met us right at the port exit and had us inside Ephesus before the crowds. The Terrace Houses were the highlight of our cruise.", name: "Sarah M.", cruise: "Royal Caribbean · Kusadasi" },
  { quote: "We were nervous about booking independently. It was the best decision—more personal, better value and back on board with time to spare.", name: "James & Rita T.", cruise: "Celebrity Cruises · Kusadasi" },
  { quote: "The wine tasting after walking through 2,000 years of history was perfect. Our guide felt like a history professor and a friend.", name: "Lena K.", cruise: "MSC Cruises · Kusadasi" },
];

export const faqs = [
  ["What happens if my ship arrives late or skips the port?", "We track your ship and adjust the meeting time automatically. If it skips the port, your booking is cancelled free of charge."],
  ["Where do we meet our guide?", "Next to the Information Desk at the Kusadasi cruise port exit, holding a sign with your name—about two minutes from the gangway."],
  ["How does pricing work for larger groups?", "Prices are total group prices, not per person. Choose a tour to see every group-size rate or message us for 16+ guests."],
  ["How and when do we pay?", "No deposit is required. Pay at the end by cash in USD, EUR, GBP or TRY, or by credit card."],
  ["Are entrance fees included?", "Museum tickets are paid at the sites at official prices. We can arrange skip-the-line tickets in advance without a markup."],
  ["Is your agency licensed?", "Yes. We operate as Iglesias Tour Travel Agency under TÜRSAB licence 10772 and use licensed local guides."],
] as const;
