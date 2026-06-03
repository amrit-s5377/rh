# SEO Content Reference — extracted from Microtel Williston site

This file is a complete extraction of every SEO element from the Microtel
Williston project (`/home/apsingh5377/DEV/mi`), organized so you can reuse the
patterns and structure for the **RH lp** project. Replace the brand-specific
values (brand name, domain, address, phone, coordinates, image URLs, copy)
with the RH equivalents.

---

## 1. Reusable `<head>` SEO scaffold (present on every page)

Every content page shares the same block. Only the **title**, **description**,
**canonical**, the OG/Twitter title+description, and the JSON-LD differ per page.

```html
<!-- ═══ SEO META TAGS ═══ -->
<title>{{PAGE_TITLE}}</title>
<meta name="description" content="{{PAGE_DESCRIPTION}}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta name="googlebot" content="index, follow" />
<link rel="canonical" href="https://willistonhotel.com/{{PATH}}" />

<!-- Geo -->
<meta name="geo.region" content="US-ND" />
<meta name="geo.placename" content="Williston, North Dakota" />
<meta name="geo.position" content="48.1470;-103.6180" />
<meta name="ICBM" content="48.1470, -103.6180" />

<!-- Open Graph -->
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Microtel Williston" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://willistonhotel.com/{{PATH}}" />
<meta property="og:title" content="{{OG_TITLE}}" />
<meta property="og:description" content="{{OG_DESCRIPTION}}" />
<meta property="og:image" content="https://res.cloudinary.com/djcgfqesd/image/upload/w_1200,h_630,c_fill,f_auto,q_auto/v1778711129/hotel-outside_image_mwcvl4.avif" />
<meta property="og:image:alt" content="Microtel Inn &amp; Suites by Wyndham Williston exterior" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{TWITTER_TITLE}}" />
<meta name="twitter:description" content="{{TWITTER_DESCRIPTION}}" />
<meta name="twitter:image" content="https://res.cloudinary.com/djcgfqesd/image/upload/w_1200,h_630,c_fill,f_auto,q_auto/v1778711129/hotel-outside_image_mwcvl4.avif" />

<!-- Favicon / PWA -->
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="favicon.svg">
<link rel="manifest" href="site.webmanifest">
<meta name="theme-color" content="#0d7f6e">
```

**Notes for RH lp adaptation**
- `theme-color` `#0d7f6e` is Microtel's brand teal — swap for RH brand color.
- OG/Twitter image is a fixed 1200×630 Cloudinary render — point at your RH hero.
- Geo block is constant site-wide; set it once to RH's city/coords.
- 404 page differs: `robots` = `noindex, follow` and it has **no** OG/canonical/schema.

---

## 2. Business / NAP data (reused across all schema + copy)

| Field | Value |
|---|---|
| Name | Microtel Inn & Suites by Wyndham Williston |
| Alt name | Microtel Williston |
| Brand | Microtel by Wyndham |
| Parent org | Wyndham Hotels & Resorts |
| Street | 3820 4th Avenue West |
| City / Region / Zip | Williston, ND 58801, US |
| Phone | +1 701-639-9317 / (701) 639-9317 |
| Email | sales@merlinhotelgroup.com |
| Geo | 48.142799, -103.617828 (meta uses 48.1470; -103.6180) |
| Check-in / out | 15:00 / 11:00 |
| Front desk | 24/7 |
| Rooms | 76 total (one schema says 77); 39 full-kitchen suites |
| Price range | $$ |
| Rating | 4.0 (333 reviews) |
| Pets | Allowed (pet-friendly) |
| Smoking | Not allowed |
| Languages | English, Spanish |
| Weekly rate | from $799 |
| Monthly rate | from $2,799 |
| Nightly (kitchenette) | from $129 |
| Booking URL | https://www.wyndhamhotels.com/microtel/williston-north-dakota/microtel-williston/overview |

---

## 3. Per-page SEO content

### Home — `/` (index.html)
- **Title:** Microtel Williston | Extended-Stay Suites in the Bakken
- **Description:** Newly renovated full-kitchen suites in Williston, ND. Built for Bakken crews, travel nurses & extended business stays. Weekly & monthly rates available.
- **OG title:** Microtel Williston | Extended-Stay Full-Kitchen Suites
- **OG/Twitter description:** 39 newly renovated full-kitchen suites in Williston, ND. Built for Bakken crews, travel nurses & extended business stays.
- **Schema types:** `LodgingBusiness`, `Organization`, `BreadcrumbList`, `WebSite`
- Adds LCP `<link rel="preload" as="image">` for the hero background.

### Amenities — `/amenities`
- **Title:** Hotel Amenities | Microtel Inn & Suites Williston ND
- **Description:** Fitness centre, free hot breakfast, free guest laundry, free parking, high-speed Wi-Fi & 800 sq ft meeting room at Microtel Williston.
- **Schema types:** `BreadcrumbList`, `FAQPage` (5 Q&A)

### Corporate — `/corporate`
- **Title:** Corporate & Group Bookings Williston ND | Microtel Williston
- **Description:** Corporate rates, block bookings and direct billing for oilfield crews, travel nurses and business teams. Serving Halliburton, SLB, Baker Hughes & more at Microtel Williston.
- **Schema types:** `BreadcrumbList`, `FAQPage` (6 Q&A)

### Extended Stay — `/extended-stay`
- **Title:** Weekly & Monthly Rates Williston ND | Microtel
- **Description:** Weekly and monthly rates at Microtel Williston. Full-kitchen suites for Bakken workers, travel nurses & contractors. Free laundry, pet-friendly, direct billing.
- **Schema types:** `BreadcrumbList`, `FAQPage` (6 Q&A)

### Kitchenette — `/kitchenette`
- **Title:** Queen Kitchenette Suites Williston ND | Microtel
- **Description:** Full-kitchen suites with stovetop, dishwasher, full-size fridge & complete cookware. Perfect for Bakken oilfield rotations & extended stays in Williston, ND.
- **Schema types:** `@graph` [`HotelRoom`, `BreadcrumbList`], `FAQPage` (6 Q&A)

### Meetings — `/meetings`
- **Title:** Meeting Room Williston ND | Microtel Inn & Suites Williston
- **Description:** 800 sq ft meeting room at Microtel Williston. Seats 40 guests, AV equipped, catering on request. Perfect for corporate briefings, contractor onboarding, and team training in Williston, ND.
- **Schema types:** `BreadcrumbList`, `FAQPage` (6 Q&A)

### Property Details — `/property-details`
- **Title:** Property Details | Microtel Inn & Suites Williston ND
- **Description:** 77-room property in Williston ND with 39 full-kitchen suites. Free breakfast, gym & free parking. Microtel Inn & Suites by Wyndham, off Highway 85.
- **Schema types:** `@graph` [`Hotel`, `BreadcrumbList`], `FAQPage` (7 Q&A)

### Contact — `/contact`
- **Title:** Contact Us | Microtel Inn & Suites Williston ND
- **Description:** Contact Microtel Inn & Suites by Wyndham Williston. Call (701) 639-9317, email the sales team, or get directions to 3820 4th Ave W, Williston, ND 58801.
- **Schema types:** `BreadcrumbList`, `FAQPage` (6 Q&A)

### Bakken Oilfield Housing — `/bakken-oilfield-housing`
- **Title:** Bakken Oilfield Housing Williston ND | Microtel Williston
- **Description:** Full-kitchen extended-stay suites for Bakken oilfield workers in Williston, ND. 14/7 & 21/7 rotation pricing, crew block rates, direct billing for Halliburton, Schlumberger & Chord Energy.
- **Schema types:** `@graph` [`LodgingBusiness`, `BreadcrumbList`], `FAQPage` (6 Q&A)

### Travel Nurse Housing — `/travel-nurse-housing`
- **Title:** Travel Nurse Housing Williston ND | Microtel Inn & Suites
- **Description:** Travel nurse housing 0.4 miles from CHI St. Alexius Health Williston. Full-kitchen suites, 13-week contract rates, direct billing for AMN Healthcare, Aya Healthcare & Cross Country.
- **Schema types:** `@graph` [`LodgingBusiness`, `BreadcrumbList`], `FAQPage` (6 Q&A)

### 404 — `404.html`
- **Title:** Page Not Found | Microtel Inn & Suites Williston ND
- **Description:** The page you're looking for doesn't exist. Return home to Microtel Inn & Suites Williston ND — hotel suites and extended stay in Williston, ND.
- **robots:** `noindex, follow`  ·  no OG / canonical / schema

---

## 4. Structured data (JSON-LD) — full payloads

### 4a. Home — LodgingBusiness
```json
{
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://willistonhotel.com/#hotel",
  "name": "Microtel Inn & Suites by Wyndham Williston",
  "alternateName": "Microtel Williston",
  "description": "Newly renovated full-kitchen suites in Williston, ND. Perfect for Bakken oilfield workers, travel nurses, and extended business stays. Free Wi-Fi, free laundry, free breakfast, pet-friendly.",
  "url": "https://willistonhotel.com/",
  "logo": { "@type": "ImageObject", "url": "https://res.cloudinary.com/djcgfqesd/image/upload/v1778711129/hotel-outside_image_mwcvl4.avif" },
  "image": [
    "https://res.cloudinary.com/djcgfqesd/image/upload/v1778711129/hotel-outside_image_mwcvl4.avif",
    "https://res.cloudinary.com/djcgfqesd/image/upload/v1778701557/microtel-williston-hotel-kitchen-counter-appliances_jlmg9w.jpg",
    "https://res.cloudinary.com/djcgfqesd/image/upload/v1778701568/microtel-williston-extended-stay-suite-kitchen-bedroom_hld6cm.jpg"
  ],
  "telephone": "+17016399317",
  "email": "sales@merlinhotelgroup.com",
  "address": { "@type": "PostalAddress", "streetAddress": "3820 4th Avenue West", "addressLocality": "Williston", "addressRegion": "ND", "postalCode": "58801", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 48.142799, "longitude": -103.617828 },
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Direct Billing",
  "brand": { "@type": "Brand", "name": "Microtel by Wyndham" },
  "parentOrganization": { "@type": "Organization", "name": "Wyndham Hotels & Resorts", "url": "https://www.wyndhamhotels.com/" },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Full Kitchen Suites", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Hot Breakfast", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Free Guest Laundry", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Fitness Center", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Business Center", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Meeting Room (800 sq ft)", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Non-Smoking", "value": true }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.0", "reviewCount": "333", "bestRating": "5", "worstRating": "1" },
  "petsAllowed": true,
  "smokingAllowed": false,
  "numberOfRooms": 76,
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
  "isAccessibleForFree": false,
  "publicAccess": true,
  "sameAs": ["https://www.wyndhamhotels.com/microtel/williston-north-dakota/microtel-williston/overview"],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.wyndhamhotels.com/microtel/williston-north-dakota/microtel-williston/overview", "actionPlatform": ["https://schema.org/DesktopWebPlatform","https://schema.org/MobileWebPlatform"] },
    "result": { "@type": "LodgingReservation", "name": "Reserve a room at Microtel Williston" }
  }
}
```

### 4b. Home — Organization
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://willistonhotel.com/#organization",
  "name": "Microtel Inn & Suites by Wyndham Williston",
  "url": "https://willistonhotel.com/",
  "logo": { "@type": "ImageObject", "url": "https://res.cloudinary.com/djcgfqesd/image/upload/v1778711129/hotel-outside_image_mwcvl4.avif" },
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+17016399317", "contactType": "reservations", "email": "sales@merlinhotelgroup.com", "areaServed": "US", "availableLanguage": ["English","Spanish"] },
    { "@type": "ContactPoint", "telephone": "+17016399317", "contactType": "customer service", "email": "sales@merlinhotelgroup.com", "areaServed": "US", "availableLanguage": ["English","Spanish"] }
  ],
  "address": { "@type": "PostalAddress", "streetAddress": "3820 4th Avenue West", "addressLocality": "Williston", "addressRegion": "ND", "postalCode": "58801", "addressCountry": "US" },
  "sameAs": ["https://www.wyndhamhotels.com/microtel/williston-north-dakota/microtel-williston/overview"]
}
```

### 4c. Home — WebSite (with SearchAction)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://willistonhotel.com/#website",
  "url": "https://willistonhotel.com/",
  "name": "Microtel Williston",
  "description": "Newly renovated full-kitchen suites in Williston, ND. Built for Bakken crews, travel nurses and extended business stays.",
  "publisher": { "@id": "https://willistonhotel.com/#organization" },
  "potentialAction": { "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https://willistonhotel.com/?s={search_term_string}" }, "query-input": "required name=search_term_string" }
}
```

### 4d. BreadcrumbList pattern (every interior page)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://willistonhotel.com/"},
    {"@type": "ListItem", "position": 2, "name": "{{PAGE_NAME}}", "item": "https://willistonhotel.com/{{PATH}}"}
  ]
}
```

### 4e. Kitchenette — HotelRoom (inside `@graph`)
```json
{
  "@type": "HotelRoom",
  "name": "Queen Kitchenette Suite",
  "description": "Newly renovated Queen Kitchenette Suite with full kitchen including 2-burner cooktop, full-size refrigerator, dishwasher, microwave, and complete cookware. Perfect for extended stays in Williston, ND.",
  "containedInPlace": { "@type": "Hotel", "@id": "https://willistonhotel.com/#hotel", "name": "Microtel Inn & Suites by Wyndham Williston", "telephone": "+17016399317" },
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "2-burner cooktop"},
    {"@type": "LocationFeatureSpecification", "name": "Full-size refrigerator with freezer"},
    {"@type": "LocationFeatureSpecification", "name": "Stainless dishwasher"},
    {"@type": "LocationFeatureSpecification", "name": "Microwave with hood"},
    {"@type": "LocationFeatureSpecification", "name": "Complete cookware set"},
    {"@type": "LocationFeatureSpecification", "name": "Free Wi-Fi"},
    {"@type": "LocationFeatureSpecification", "name": "65-inch flat screen TV"}
  ]
}
```

### 4f. Property Details — Hotel (inside `@graph`)
```json
{
  "@type": "Hotel",
  "@id": "https://willistonhotel.com/#hotel",
  "name": "Microtel Inn & Suites by Wyndham Williston",
  "description": "77-room hotel in Williston, ND featuring 39 newly renovated full-kitchen Queen Suites. Free breakfast, fitness center, free parking, free guest laundry. Perfect for Bakken oilfield workforce and travel nurses.",
  "url": "https://willistonhotel.com/",
  "telephone": "+17016399317",
  "address": { "@type": "PostalAddress", "streetAddress": "3820 4th Avenue West", "addressLocality": "Williston", "addressRegion": "ND", "postalCode": "58801", "addressCountry": "US" },
  "numberOfRooms": 77,
  "checkinTime": "15:00",
  "checkoutTime": "11:00",
  "petsAllowed": true,
  "priceRange": "$$",
  "starRating": {"@type": "Rating", "ratingValue": "3"}
}
```

### 4g. Bakken — LodgingBusiness (landing-page variant, inside `@graph`)
```json
{
  "@type": "LodgingBusiness",
  "name": "Microtel Inn & Suites by Wyndham Williston — Bakken Workforce Housing",
  "description": "Full-kitchen extended-stay suites for Bakken oilfield workers in Williston, ND. Crew block rates, 14/7 and 21/7 rotation pricing, direct corporate billing.",
  "address": { "@type": "PostalAddress", "streetAddress": "3820 4th Avenue West", "addressLocality": "Williston", "addressRegion": "ND", "postalCode": "58801", "addressCountry": "US" },
  "telephone": "+17016399317",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Full Kitchen Suites"},
    {"@type": "LocationFeatureSpecification", "name": "Free Guest Laundry"},
    {"@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk"},
    {"@type": "LocationFeatureSpecification", "name": "Crew Block Rates"},
    {"@type": "LocationFeatureSpecification", "name": "Direct Corporate Billing"},
    {"@type": "LocationFeatureSpecification", "name": "Pet Friendly"},
    {"@type": "LocationFeatureSpecification", "name": "Free Parking — Trucks & RVs Welcome"}
  ]
}
```

### 4h. Travel Nurse — LodgingBusiness (landing-page variant, inside `@graph`)
```json
{
  "@type": "LodgingBusiness",
  "name": "Microtel Inn & Suites by Wyndham Williston — Travel Nurse Housing",
  "description": "Furnished full-kitchen suites 0.4 miles from CHI St. Alexius Health Williston Medical Center. 13-week contract rates, direct billing for travel nurse agencies.",
  "address": { "@type": "PostalAddress", "streetAddress": "3820 4th Avenue West", "addressLocality": "Williston", "addressRegion": "ND", "postalCode": "58801", "addressCountry": "US" },
  "telephone": "+17016399317",
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "Full Kitchen Suites"},
    {"@type": "LocationFeatureSpecification", "name": "0.4 Miles from CHI St. Alexius Health"},
    {"@type": "LocationFeatureSpecification", "name": "13-Week Contract Rates"},
    {"@type": "LocationFeatureSpecification", "name": "Direct Agency Billing"},
    {"@type": "LocationFeatureSpecification", "name": "Free Guest Laundry"},
    {"@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk"},
    {"@type": "LocationFeatureSpecification", "name": "Pet Friendly"}
  ]
}
```

---

## 5. FAQPage content (all Q&A, by page)

> FAQ schema is the highest-leverage SEO asset on this site — every interior page
> carries 5–7 question/answer pairs that mirror visible on-page FAQ copy. Reuse
> the `FAQPage` → `mainEntity[]` → `Question` / `acceptedAnswer.Answer.text`
> structure verbatim; just rewrite the text for RH.

### Amenities FAQ
1. **Is breakfast free at Microtel Williston?** — Yes. A complimentary hot breakfast is included with every stay at Microtel Williston. Breakfast is served daily for all guests at no additional charge.
2. **Does Microtel Williston have free laundry for guests?** — Yes. Free guest laundry with coin-free washers and dryers is available on-site. This is particularly valuable for extended-stay guests, oilfield workers, and travel nurses who need to wash work clothes and uniforms regularly.
3. **Is parking free at Microtel Inn & Suites Williston?** — Yes. Free on-site parking is available for all guests, including space for larger work trucks and vehicles common among Bakken oilfield crews.
4. **Does Microtel Williston have a fitness center?** — Yes. A fitness center is available on-site for all guests. It includes cardio and strength equipment suitable for guests on extended assignments.
5. **Is there a meeting room at Microtel Williston?** — Yes. Microtel Williston has an 800 square foot meeting room that seats up to 40 guests. It is equipped with AV technology and is available for corporate briefings, crew onboarding sessions, and training events. Contact us at (701) 639-9317 to book.

### Corporate FAQ
1. **Does Microtel Williston offer corporate rates for businesses?** — Yes. Microtel Inn & Suites by Wyndham Williston offers negotiated corporate rates for companies with recurring lodging needs in Williston, ND. Contact our sales team at sales@merlinhotelgroup.com or call (701) 639-9317 to discuss a corporate rate agreement.
2. **Do you offer direct billing for oil and gas companies?** — Yes. We offer direct corporate billing for oil and gas operators and service companies housing crews in the Williston Basin. We work with companies including Halliburton, SLB (Schlumberger), Baker Hughes, and Chord Energy. Email sales@merlinhotelgroup.com to set up a billing account.
3. **Can I book a block of rooms for a crew at Microtel Williston?** — Yes. We offer crew block bookings for groups of 5 or more rooms. Block rates are available for oilfield rotations, contractor teams, corporate training groups, and other business travel. Call (701) 639-9317 or email sales@merlinhotelgroup.com to request a group quote.
4. **How do I set up a corporate account at Microtel Williston?** — To set up a corporate account, contact our sales team at sales@merlinhotelgroup.com or call (701) 639-9317. Provide your company name, expected room nights per month, and billing requirements. We will set up your account and issue a rate agreement within 24–48 hours.
5. **Does Microtel Williston offer discounts for long-term corporate stays?** — Yes. The longer the stay, the better the rate. Weekly rates start at $799 and monthly rates start at $2,799 per suite. Custom pricing is available for multi-room, multi-month corporate housing contracts. Contact sales@merlinhotelgroup.com for a tailored quote.
6. **Is there a meeting room available for corporate groups at Microtel Williston?** — Yes. Microtel Williston has an 800 sq ft on-site meeting room that seats up to 40 people. It is AV-equipped and suitable for crew safety briefings, contractor onboarding, corporate training, and business presentations. Catering is available on request.

### Extended Stay FAQ
1. **Do you offer weekly and monthly hotel rates in Williston, ND?** — Yes. Microtel Williston offers weekly rates starting at $799 and monthly rates starting at $2,799 for extended-stay guests. Custom quotes are available for stays of 30+ nights. Call (701) 639-9317 or email sales@merlinhotelgroup.com.
2. **What is included in an extended-stay suite at Microtel Williston?** — Every extended-stay suite includes a full kitchen with 2-burner cooktop, dishwasher, full-size refrigerator, microwave, and complete cookware. All stays include free hot breakfast daily, free guest laundry, free Wi-Fi, and free parking. Suites are pet-friendly.
3. **Is there a minimum stay requirement for extended-stay rates?** — Weekly rates apply to stays of 7 or more consecutive nights. Monthly rates apply to stays of 30 or more consecutive nights. There is no minimum for standard nightly rates.
4. **Do you offer direct billing for corporate extended stays?** — Yes. Microtel Williston offers direct corporate billing for companies housing employees on extended assignment. Contact our sales team at sales@merlinhotelgroup.com or call (701) 639-9317 to set up a corporate account.
5. **Can I bring my pet on a long-term stay at Microtel Williston?** — Yes, Microtel Williston is a pet-friendly hotel. Pets are welcome on extended stays. Please contact the front desk at (701) 639-9317 for current pet policy details and any applicable fees.
6. **Is laundry included for extended-stay guests?** — Yes. Free guest laundry is available on-site for all guests, including extended-stay residents. Washers and dryers are available at no additional charge.

### Kitchenette FAQ
1. **What kitchen appliances are included in the Queen Kitchenette Suites?** — Every Queen Kitchenette Suite at Microtel Williston includes a 2-burner cooktop, full-size refrigerator, dishwasher, microwave, and a complete set of cookware and utensils. The kitchen is fully equipped for everyday cooking throughout an extended stay.
2. **Do the kitchenette suites have a dishwasher?** — Yes. All Queen Kitchenette Suites at Microtel Williston include a full-size dishwasher — a feature not found at most hotels in Williston, ND.
3. **What is the nightly rate for a Queen Kitchenette Suite?** — Nightly rates for the Queen Kitchenette Suite start at $129 per night. Weekly rates start at $799 and monthly rates start at $2,799. Book directly at wyndhamhotels.com or call (701) 639-9317 for current availability and pricing.
4. **Is cookware and kitchenware provided in the suites?** — Yes. Each Queen Kitchenette Suite comes fully stocked with pots, pans, cooking utensils, plates, glasses, and cutlery. You can move in and start cooking immediately — no need to bring your own kitchen supplies.
5. **Are the Queen Kitchenette Suites good for extended stays?** — Yes. The Queen Kitchenette Suites at Microtel Williston are specifically designed for extended stays. With a full kitchen, free laundry, free hot breakfast, free Wi-Fi, and weekly and monthly pricing, they are Williston's best option for oilfield workers, travel nurses, and long-term business travelers.
6. **How many kitchenette suites does Microtel Williston have?** — Microtel Inn & Suites by Wyndham Williston has 39 newly renovated full-kitchen suites. The hotel has 76 total rooms. Call (701) 639-9317 to check kitchenette suite availability for your dates.

### Meetings FAQ
1. **How large is the meeting room at Microtel Inn & Suites Williston?** — The meeting room at Microtel Inn & Suites by Wyndham Williston is 800 square feet and seats up to 40 guests. It is one of the largest hotel meeting spaces available in Williston, ND.
2. **Is AV equipment available in the Microtel Williston meeting room?** — Yes. The meeting room is equipped with AV technology suitable for presentations, training sessions, and corporate briefings. Contact us at (701) 639-9317 or sales@merlinhotelgroup.com to confirm specific AV requirements for your event.
3. **Can you arrange catering for meetings at Microtel Williston?** — Yes. Catering can be arranged on request for meetings and events held at Microtel Williston. Contact our team at sales@merlinhotelgroup.com or call (701) 639-9317 to discuss catering options for your event.
4. **How do I book the meeting room at Microtel Williston?** — To book the meeting room, call (701) 639-9317 or email sales@merlinhotelgroup.com. Provide your event date, expected number of attendees, and any AV or catering requirements. We recommend booking in advance to secure your preferred date.
5. **Is the Microtel Williston meeting room suitable for contractor safety briefings and onboarding?** — Yes. The meeting room at Microtel Williston is frequently used for oilfield crew safety briefings, contractor onboarding sessions, and corporate training. Its capacity of 40 people and AV setup make it well-suited for workforce orientation events common in the Bakken oil industry.
6. **Can overnight guests also use the meeting room at Microtel Williston?** — Yes. The meeting room is available to both hotel guests and external groups. Corporate teams can house their crew in our extended-stay suites and hold their briefings or training sessions in the on-site meeting room — all under one roof. Contact (701) 639-9317 for combined room and meeting package pricing.

### Property Details FAQ
1. **How many rooms does Microtel Inn & Suites Williston have?** — Microtel Inn & Suites by Wyndham Williston has 76 total rooms, including 39 newly renovated full-kitchen Queen Kitchenette Suites and standard Queen rooms. The property is located at 3820 4th Avenue West, Williston, ND 58801.
2. **Where is Microtel Williston located?** — Microtel Inn & Suites by Wyndham Williston is located at 3820 4th Avenue West, Williston, ND 58801 — just off Highway 85, in the heart of Williston. It is 0.4 miles from CHI St. Alexius Health Williston Medical Center and centrally located for access to Bakken oil field sites across Williams, McKenzie, and Mountrail counties.
3. **What time is check-in and check-out at Microtel Williston?** — Check-in at Microtel Williston is at 3:00 PM. Check-out is at 11:00 AM. The front desk is staffed 24 hours a day, 7 days a week. Early check-in and late check-out may be available on request — call (701) 639-9317.
4. **Is Microtel Williston a pet-friendly hotel?** — Yes. Microtel Inn & Suites by Wyndham Williston is a pet-friendly hotel. Guests traveling with dogs or cats are welcome. Contact the front desk at (701) 639-9317 for current pet policy details.
5. **Is Microtel Williston affiliated with Wyndham Rewards?** — Yes. Microtel Inn & Suites by Wyndham Williston is a Wyndham Hotels & Resorts property. Guests can earn and redeem Wyndham Rewards points. Book through wyndhamhotels.com to ensure points are credited to your account.
6. **What room types are available at Microtel Williston?** — Microtel Williston offers two main room types: Queen Kitchenette Suites with a full kitchen (cooktop, dishwasher, full-size refrigerator, microwave, and complete cookware) and standard Queen rooms with a microwave and mini-fridge. Kitchenette suites are ideal for extended stays of 7 nights or more.

### Contact FAQ
1. **What is the phone number for Microtel Inn & Suites Williston?** — The phone number for Microtel Inn & Suites by Wyndham Williston is (701) 639-9317. The front desk is staffed 24 hours a day, 7 days a week. For corporate and group bookings, email sales@merlinhotelgroup.com.
2. **What is the address of Microtel Inn & Suites Williston, ND?** — Microtel Inn & Suites by Wyndham Williston is located at 3820 4th Avenue West, Williston, ND 58801. The hotel is just off Highway 85, easily accessible from all major routes into Williston.
3. **How do I contact the sales team at Microtel Williston for corporate bookings?** — For corporate accounts, direct billing, crew block rates, and extended-stay contracts, contact our sales team at sales@merlinhotelgroup.com or call (701) 639-9317. We typically respond to corporate inquiries within 24 hours.
4. **Is the front desk at Microtel Williston open 24 hours?** — Yes. The front desk at Microtel Inn & Suites by Wyndham Williston is open 24 hours a day, 7 days a week. Whether you are arriving late from a Bakken rotation or need assistance during your stay, staff are always available.
5. **How do I get directions to Microtel Williston?** — Microtel Inn & Suites by Wyndham Williston is located at 3820 4th Avenue West, Williston, ND 58801. From Highway 85, head west on 4th Avenue West — the hotel will be on your right. GPS coordinates: 48.142799, -103.617828.
6. **Can I make a group or corporate reservation by phone at Microtel Williston?** — Yes. Call (701) 639-9317 to speak directly with our team about group reservations, corporate accounts, crew block bookings, or extended-stay rates. For formal billing agreements, follow up with an email to sales@merlinhotelgroup.com.

### Bakken Oilfield Housing FAQ
1. **Does Microtel Williston offer housing for Bakken oilfield workers?** — Yes. Microtel Inn & Suites by Wyndham Williston specializes in extended-stay accommodations for Bakken oilfield workers. We offer full-kitchen suites, crew block rates, 14/7 and 21/7 rotation pricing, and direct billing for major Bakken operators including Halliburton, Schlumberger, and Chord Energy.
2. **Do you offer 14/7 and 21/7 rotation pricing for oilfield crews?** — Yes. We offer custom rotation pricing for 14-days-on/7-days-off and 21-days-on/7-days-off schedules common in the Bakken. Contact our sales team at sales@merlinhotelgroup.com or call (701) 639-9317 for a crew housing quote.
3. **Does Microtel Williston offer direct billing for oil companies?** — Yes. We offer direct corporate billing for oil and gas companies housing crews in Williston, ND. We work with major Bakken operators and service companies. Email sales@merlinhotelgroup.com to set up a corporate billing account.
4. **How far is Microtel Williston from the Bakken oil fields?** — Microtel Inn & Suites by Wyndham Williston is located at 3820 4th Avenue West, Williston, ND 58801 — in the heart of the Williston Basin, the hub city for Bakken Shale operations. The hotel is centrally located for access to drilling sites across Williams, McKenzie, and Mountrail counties.
5. **Do you have block rates for oilfield crews staying in Williston?** — Yes. We offer negotiated block rates for crews of 5 or more rooms. Rates are based on crew size, stay duration, and rotation schedule. Call (701) 639-9317 or email sales@merlinhotelgroup.com to discuss crew housing pricing.
6. **What amenities does Microtel Williston offer for oilfield workers?** — Our suites include full kitchens with cooktop, dishwasher, full-size fridge, microwave, and cookware — so crews can cook their own meals. We also offer free hot breakfast daily, free guest laundry, free Wi-Fi, free parking with space for work vehicles, and a fitness center.

### Travel Nurse Housing FAQ
1. **How far is Microtel Williston from CHI St. Alexius Health Williston?** — Microtel Inn & Suites by Wyndham Williston is 0.4 miles from CHI St. Alexius Health Williston Medical Center — approximately a 2-minute drive or an 8-minute walk. It is the closest full-service hotel to the hospital in Williston, ND.
2. **Do you offer 13-week contract rates for travel nurses in Williston?** — Yes. We offer extended-stay rates structured for 13-week travel nurse contracts. Monthly rates start at $2,799 and weekly rates start at $799. Contact us at sales@merlinhotelgroup.com or (701) 639-9317 for travel nurse contract pricing.
3. **Does Microtel Williston accept direct billing from travel nurse agencies?** — Yes. We offer direct billing for major travel nurse staffing agencies including AMN Healthcare, Aya Healthcare, and Cross Country Nurses. Contact our sales team at sales@merlinhotelgroup.com to set up agency billing.
4. **Do the suites have a full kitchen for travel nurses?** — Yes. Every suite includes a full kitchen with a 2-burner cooktop, dishwasher, full-size refrigerator, microwave, and complete cookware and utensils. Travel nurses on long contracts can cook full meals and significantly reduce food costs.
5. **Is free laundry available for travel nurses at Microtel Williston?** — Yes. Free guest laundry with washers and dryers is available on-site at no extra charge — ideal for nurses who need to wash scrubs and uniforms regularly during a 13-week assignment.
6. **Is Microtel Williston pet-friendly for travel nurses with pets?** — Yes. Microtel Williston is a pet-friendly hotel, making it a great choice for travel nurses who travel with dogs or cats. Contact the front desk at (701) 639-9317 for current pet policy details.

---

## 6. Supporting SEO files

### robots.txt
```
User-agent: *
Allow: /
Disallow: /partials/

Sitemap: https://willistonhotel.com/sitemap.xml
```

### sitemap.xml — URL set + priorities
| URL | changefreq | priority |
|---|---|---|
| `/` | weekly | 1.0 |
| `/kitchenette` | monthly | 0.9 |
| `/extended-stay` | monthly | 0.9 |
| `/bakken-oilfield-housing` | monthly | 0.9 |
| `/travel-nurse-housing` | monthly | 0.9 |
| `/property-details` | monthly | 0.8 |
| `/amenities` | monthly | 0.8 |
| `/corporate` | monthly | 0.7 |
| `/meetings` | monthly | 0.7 |
| `/contact` | monthly | 0.7 |

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://willistonhotel.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://willistonhotel.com/kitchenette</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://willistonhotel.com/extended-stay</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://willistonhotel.com/bakken-oilfield-housing</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://willistonhotel.com/travel-nurse-housing</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://willistonhotel.com/property-details</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://willistonhotel.com/amenities</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://willistonhotel.com/corporate</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://willistonhotel.com/meetings</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://willistonhotel.com/contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
</urlset>
```

### site.webmanifest
```json
{
  "name": "Microtel Inn & Suites Williston",
  "short_name": "Microtel Williston",
  "description": "Extended-stay hotel suites in Williston, ND. Full kitchens, free breakfast, pool.",
  "start_url": "/",
  "display": "browser",
  "background_color": "#ffffff",
  "theme_color": "#0d7f6e",
  "icons": [ { "src": "favicon.svg", "sizes": "any", "type": "image/svg+xml" } ]
}
```

---

## 7. SEO playbook summary (what to replicate for RH lp)

1. **Per-page meta trio** — unique `<title>`, `<meta description>`, and `<link canonical>` on every page; clean URLs without `.html`.
2. **Full social card set** — OG + Twitter `summary_large_image`, with a fixed 1200×630 image and `og:image:alt`.
3. **Local SEO geo block** — `geo.region`, `geo.placename`, `geo.position`, `ICBM` site-wide.
4. **Layered structured data** on the home page: `LodgingBusiness` + `Organization` + `WebSite` (SearchAction) + `BreadcrumbList`, all cross-linked with stable `@id`s (`#hotel`, `#organization`, `#website`).
5. **Every interior page** = `BreadcrumbList` + a topical `FAQPage` (5–7 Q&A) that mirrors visible page copy. Landing pages add a page-specific `LodgingBusiness`/`HotelRoom`/`Hotel` node inside an `@graph`.
6. **Consistent NAP** (name/address/phone) across all schema and copy — critical for local ranking.
7. **Supporting files**: `robots.txt` (disallow `/partials/`), prioritized `sitemap.xml`, PWA `site.webmanifest`, `favicon.svg`, `theme-color`.
8. **Performance-as-SEO**: preconnect/dns-prefetch to asset CDN + fonts, and `rel=preload fetchpriority=high` for the LCP hero image on the home page.
