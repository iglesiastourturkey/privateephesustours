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
  ["What is the best time to visit Ephesus?", "Spring and autumn offer the mildest weather. In summer, an early port pick-up helps you explore before the strongest heat and the largest groups."],
  ["What should I wear and bring?", "Wear supportive walking shoes for uneven marble and stone surfaces. Bring a hat, sunscreen and water in warm weather; shoulders and knees should be covered when visiting religious sites."],
  ["Is Ephesus wheelchair accessible?", "Much of the ancient city has slopes, steps and uneven stone. The lower gate gives access to part of the site, including views near the Library of Celsus. Tell us your mobility needs so we can design the most suitable route."],
  ["Do I need a private guide for Ephesus?", "A licensed guide is not mandatory, but it makes the city's layers far easier to understand and lets the route respond to your interests, walking pace and ship schedule."],
  ["What is the best way to experience Ephesus?", "For cruise guests, an early private tour from Kusadasi is the easiest way to avoid peak crowds, understand the ruins and protect the return to the ship. First-time visitors usually combine Ephesus with the Terrace Houses or House of the Virgin Mary."],
  ["How much does it cost to visit Ephesus in 2026?", "Admission charges can change during the season, so we confirm current official ticket prices before your visit. Every tour page shows the service price for your group and states whether admission is included or optional."],
  ["Is Ephesus worth visiting?", "Yes. The Library of Celsus, Grand Theatre, marble streets and Terrace Houses make Ephesus one of the Mediterranean's most substantial ancient cities, and it is only about 20 minutes from Kusadasi port."],
  ["What kinds of Ephesus tours can I choose?", "Options include short half-day visits, private or small-group shore excursions, biblical routes, all-inclusive ticket-and-lunch packages, Mary's House combinations and fully customizable private days."],
  ["How long should I allow for Ephesus?", "Allow at least three to four hours from Kusadasi for the essential site. Five to seven hours gives room for the Terrace Houses, Mary's House, St. John's Basilica, Artemis or lunch without rushing."],
  ["What else can I visit near Ephesus?", "Popular nearby additions include the House of the Virgin Mary, Terrace Houses, Basilica of St. John, Temple of Artemis, Sirince village and the Ephesus Museum in Selcuk."],
] as const;
