export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  details: string;
  iconPath: string;
  tag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProjectHighlight {
  id: string;
  category: string;
  title: string;
  location: string;
  date: string;
  summary: string;
  image: string;
  metrics: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number;
  avatar: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BONHARDT_BUSINESS = {
  name: "Bonhardt Roof & Trades Co",
  shortName: "Bonhardt Roofs",
  tagline: "Tough work, professionally done.",
  owner: "Andrew LaBonte",
  ownerTitle: "Owner & Lead Roofing Specialist",
  phoneOffice: "(720) 419-4369",
  phoneOfficeHref: "tel:7204194369",
  phoneDirect: "(804) 814-5167",
  phoneDirectHref: "tel:8048145167",
  email: "info@bonhardtroofs.com",
  emailHref: "mailto:info@bonhardtroofs.com",
  addressLine1: "1701 Kipling Street, Unit 203",
  addressLine2: "Lakewood, CO 80215",
  fullAddress: "1701 Kipling Street, Unit 203, Lakewood, CO 80215",
  hours: "Mon – Fri: 9:00 AM – 5:00 PM (Storm Response Available)",
  serviceAreas: [
    "Denver Metro",
    "Lakewood",
    "Golden",
    "Littleton",
    "Arvada",
    "Boulder",
    "Aurora",
    "Colorado Front Range",
  ],
  socials: {
    facebook: "https://www.facebook.com/1182872158526521",
    instagram: "https://www.instagram.com/bonhardt_roofs",
  },
  logo: "/lead-assets/bonhardt-logo.png",
  footerCredit: "© 2026 All Rights Reserved. | Custom Crafted by Rafid — Rexton Studio",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Why Us", href: "#why-bonhardt" },
  { label: "Services", href: "#services" },
  { label: "Claim Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
] as const;

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Haag-Certified Hail & Storm Inspections:",
    description:
      "Free, zero-pressure roof assessments backed by full high-resolution photo documentation and Colorado hail history reports.",
  },
  {
    title: "5-Year Iron-Clad Workmanship Warranty:",
    description:
      "Every residential and commercial installation is backed by our leak-proof 5-year workmanship guarantee plus full General Liability & Workers' Comp (COI on request).",
  },
  {
    title: "Direct Insurance & Retail Advocacy:",
    description:
      "Led personally by owner Andrew LaBonte with over a decade of Colorado roofing experience—we meet your adjuster on-site and handle supplements start to finish.",
  },
] as const;

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "free-inspection",
    title: "Roof Inspections & Leak Diagnostics",
    shortDesc:
      "Thorough Haag-certified inspections with fast turnaround, full photo findings report, and clear next steps.",
    details:
      "Whether a Front Range hailstorm just passed or you spotted ceiling moisture, we document every shingle, vent, and flashing with zero sales pressure.",
    iconPath: "/assets/icons/service-inspection.svg",
    tag: "Most Requested",
  },
  {
    id: "insurance-claims",
    title: "Hail & Insurance Claim Restoration",
    shortDesc:
      "Complete storm claim management—from initial date-of-loss documentation to on-site adjuster meetings and supplements.",
    details:
      "We work directly with Allstate, State Farm, USAA, Travelers, Liberty Mutual, and more so your property returns to pre-loss condition without stress.",
    iconPath: "/assets/icons/service-repairs.svg",
    tag: "Front Range Specialty",
  },
  {
    id: "residential-roofing",
    title: "Residential Roof Replacement",
    shortDesc:
      "Architectural asphalt shingles, standing seam metal, stone-coated steel, wood shake, concrete & clay tile.",
    details:
      "Engineered for Colorado UV exposure, high wind uplift, and Class 4 impact resistance—complete with balanced attic ventilation.",
    iconPath: "/assets/icons/service-replacement.svg",
    tag: "5-Yr Warranty",
  },
  {
    id: "commercial-flat",
    title: "Commercial & Flat Roofing",
    shortDesc:
      "Precision flat roof systems built for Denver businesses: TPO, EPDM, ballast, modified bitumen, and built-up roofing.",
    details:
      "Minimal downtime for multi-family complexes, retail plazas, and commercial buildings across Denver Metro.",
    iconPath: "/assets/icons/service-commercial.svg",
    tag: "TPO / EPDM",
  },
  {
    id: "fluid-restoration",
    title: "Fluid-Applied Roof Restoration",
    shortDesc:
      "Reflective silicone, reinforced acrylic, and SPF coating systems that waterproof and extend commercial roof life.",
    details:
      "A smart, sustainable alternative to full tear-offs—reducing rooftop temperatures while sealing seams and ponding areas.",
    iconPath: "/assets/icons/service-coating.svg",
    tag: "Cost Saver",
  },
  {
    id: "exterior-trades",
    title: "Exterior Roofing & Full Trades",
    shortDesc:
      "Complete exterior restoration under one trusted Colorado contractor: siding, seamless gutters, paint, and windows.",
    details:
      "Coordinate your entire storm restoration or curb-appeal upgrade through one accountable Lakewood team.",
    iconPath: "/assets/icons/service-renovation.svg",
    tag: "Full Exterior",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Haag-Certified Inspection & Claim Filing",
    description:
      "A Bonhardt specialist completes a full top-to-bottom assessment with photo & hail history proof, helping you confirm deductible, RCV/ACV, and Ordinance & Law coverage.",
  },
  {
    number: "02",
    title: "On-Site Adjuster Meeting & Statement of Loss",
    description:
      "We meet your insurance adjuster directly on your roof so nothing gets overlooked—securing an accurate Statement of Loss and initial restoration funds.",
  },
  {
    number: "03",
    title: "Precision Installation, Supplements & Final Walk",
    description:
      "Premium materials are delivered, our licensed crews restore your property cleanly, we handle any carrier supplements, and we never leave until you are 100% satisfied.",
  },
];

export const FEATURED_PROJECTS: ProjectHighlight[] = [
  {
    id: "denver-capitol-shingle",
    category: "Residential & Historic",
    title: "Architectural Shingle & Flashing Overhaul Overlooking Downtown Denver",
    location: "Capitol Hill, Denver CO",
    date: "Completed 2026",
    summary:
      "Full tear-off, precision chimney flashing, high-profile ridge vents, and impact-rated architectural shingles overlooking the Colorado State Capitol.",
    image: "/lead-assets/bonhardt-project-commercial.jpg",
    metrics: "Class 4 Impact Rated • 5-Yr Warranty",
  },
  {
    id: "denver-skyline-tpo",
    category: "Commercial & Flat Roof",
    title: "High-Performance Flat Roof Membrane Replacement at Sunset",
    location: "Downtown Denver Metro, CO",
    date: "Completed 2026",
    summary:
      "Custom parapet framing, tapered insulation decking, and commercial-grade TPO/EPDM waterproofing engineered for Colorado freeze-thaw cycles.",
    image: "/lead-assets/bonhardt-project-exterior.jpg",
    metrics: "Zero-Leak Membrane • Custom Parapet",
  },
  {
    id: "acrylic-fluid-coating",
    category: "Fluid-Applied Restoration",
    title: "Reinforced Acrylic & Silicone Multi-Family Roof Coating",
    location: "Lakewood & Front Range, CO",
    date: "Completed 2026",
    summary:
      "Seamless reflective fluid-applied restoration around commercial HVAC curbs and skylights—extending roof service life without disruptive tear-off.",
    image: "/lead-assets/bonhardt-project-coating.jpg",
    metrics: "UV Reflective • Waterproof Seal",
  },
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: "evan-rice",
    author: "Evan Rice",
    role: "Verified Colorado Homeowner • Google Review",
    date: "October 13, 2026",
    rating: 5,
    avatar: "/lead-assets/reviewer-evan.jpg",
    quote:
      "Andrew and the Bonhardt Roof & Trades team handled our hail storm replacement from the initial inspection right through the adjuster meeting and final clean-up. Honest communication, zero pressure, and the new roof looks phenomenal.",
  },
  {
    id: "gregory-shea",
    author: "Gregory Shea",
    role: "Verified Denver Metro Client • Google Review",
    date: "September 26, 2026",
    rating: 5,
    avatar: "/lead-assets/reviewer-gregory.jpg",
    quote:
      "After a severe Front Range hailstorm, Bonhardt documented every single impact mark, met our insurance adjuster on-site, and caught code items that would have been missed. Easily the most trustworthy contractor we've worked with.",
  },
  {
    id: "nathan-jansen",
    author: "Nathan Jansen",
    role: "Verified Property Owner • Google Review",
    date: "August 14, 2026",
    rating: 5,
    avatar: "/lead-assets/reviewer-nathan.jpg",
    quote:
      "Fast turnaround, spotless job site, and true pride in craftsmanship. From the first phone call to the final walkthrough, Andrew stayed personally available for every question. Highly recommend Bonhardt Roofs!",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Are your Colorado roof and hail inspections really free?",
    answer:
      "Yes—100% free, no hassle, and zero sales pressure. Our Haag-certified inspectors climb your roof, capture high-resolution photo documentation, pull localized Colorado hail history reports, and walk you through your honest options.",
  },
  {
    id: "faq-2",
    question: "Will Bonhardt meet my insurance adjuster on-site?",
    answer:
      "Absolutely. Meeting your claims adjuster on-site is a core step of our 5-step Insurance Claim Process. We present our documented hail and wind damage findings directly so your Statement of Loss reflects every legitimate repair and Colorado building code requirement.",
  },
  {
    id: "faq-3",
    question: "What roofing systems and exterior trades do you handle?",
    answer:
      "We install and restore residential asphalt shingles, metal & stone-coated steel, wood shake, and clay/concrete tile—plus commercial TPO, EPDM, modified bitumen, and fluid-applied silicone/acrylic coatings. We also handle siding, seamless gutters, exterior paint, and windows.",
  },
  {
    id: "faq-4",
    question: "What warranty and insurance coverage do you carry?",
    answer:
      "Every new roof installation is backed by our iron-clad, leak-proof 5-Year Workmanship Warranty in addition to manufacturer coverage. We carry full General Liability and Workers' Compensation insurance—just ask for our Certificate of Insurance (COI) anytime.",
  },
  {
    id: "faq-5",
    question: "Which Colorado areas does Bonhardt Roof & Trades Co serve?",
    answer:
      "Headquartered at 1701 Kipling St Unit 203 in Lakewood, we proudly serve homeowners and commercial properties across the entire Denver Metro area and Colorado Front Range—including Golden, Littleton, Arvada, Boulder, Aurora, and mountain communities.",
  },
];
